import { test, expect } from "bun:test"
import path from "path"
import fs from "fs/promises"
import { Instance } from "../../src/project/instance"
import { Skill } from "../../src/skill"
import { SkillIndex } from "../../src/skill/index-engine"
import { Discovery } from "../../src/skill/discovery"
import { tmpdir } from "../fixture/fixture"

const catalog = [
  { name: "attack-ssrf", description: "Server-Side Request Forgery" },
  { name: "attack-jwt", description: "JWT token attacks" },
]

function serve() {
  return Bun.serve({
    port: 0,
    fetch(req) {
      const route = new URL(req.url).pathname
      if (route === "/index.json")
        return Response.json({
          version: "1.0",
          skills: catalog.map((s) => ({ ...s, verified: "official", category: "authentication", files: ["SKILL.md"] })),
        })
      const found = catalog.find((s) => route === `/${s.name}/SKILL.md`)
      if (!found) return new Response("not found", { status: 404 })
      return new Response(`---\nname: ${found.name}\ndescription: ${found.description}\n---\n\nuse it\n`)
    },
  })
}

test("registry skills are searchable before download and fetched on demand", async () => {
  const server = serve()
  const url = `http://localhost:${server.port}/`
  await fs.rm(Discovery.dir(), { recursive: true, force: true })

  await using tmp = await tmpdir({
    init: async (dir) => {
      await Bun.write(path.join(dir, "siaga.json"), JSON.stringify({ skills: { urls: [url] } }))
    },
  })

  await Instance.provide({
    directory: tmp.path,
    fn: async () => {
      // Nothing downloaded yet
      expect(await Discovery.cached()).toEqual([])

      await SkillIndex.rebuild()
      expect(SkillIndex.search("attack-jwt").map((e) => e.name)).toContain("attack-jwt")
      expect(SkillIndex.byCategory("authentication").map((e) => e.name)).toContain("attack-ssrf")
      expect(SkillIndex.get("attack-jwt")?.verified).toBe("official")
      expect(await Discovery.cached()).toEqual([])

      // Loading a skill pulls exactly that one file
      const info = await Skill.fetch("attack-jwt")
      expect(info?.content).toContain("use it")
      expect((await Discovery.cached()).map((d) => path.basename(d))).toEqual(["attack-jwt"])
      expect((await Skill.get("attack-jwt"))?.name).toBe("attack-jwt")
      // Once the file is local its own signature decides: registry metadata is
      // only trusted while the skill is not downloaded.
      expect(SkillIndex.get("attack-jwt")?.verified).toBe("unverified")

      // The other skill is still on the registry, so fetching it works too
      expect((await Skill.fetch("attack-ssrf"))?.name).toBe("attack-ssrf")
      expect((await Discovery.cached()).map((d) => path.basename(d)).sort()).toEqual(["attack-jwt", "attack-ssrf"])
    },
  })

  server.stop(true)
})
