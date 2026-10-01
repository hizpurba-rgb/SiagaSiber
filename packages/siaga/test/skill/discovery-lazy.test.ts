import { test, expect, afterEach } from "bun:test"
import path from "path"
import fs from "fs/promises"
import { Discovery } from "../../src/skill/discovery"

const catalog = [
  { name: "attack-ssrf", description: "Server-Side Request Forgery" },
  { name: "attack-jwt", description: "JWT token attacks" },
]

const md = (name: string, description: string) => `---\nname: ${name}\ndescription: ${description}\n---\n\nbody\n`

function serve() {
  return Bun.serve({
    port: 0,
    fetch(req) {
      const route = new URL(req.url).pathname
      if (route === "/index.json")
        return Response.json({
          version: "1.0",
          skills: catalog.map((s) => ({ ...s, verified: "official", files: ["SKILL.md"] })),
        })
      const found = catalog.find((s) => route === `/${s.name}/SKILL.md`)
      if (!found) return new Response("not found", { status: 404 })
      return new Response(md(found.name, found.description))
    },
  })
}

const clean = () => fs.rm(Discovery.dir(), { recursive: true, force: true })

afterEach(clean)

test("cached() is empty when nothing has been downloaded", async () => {
  await clean()
  expect(await Discovery.cached()).toEqual([])
})

test("pull(url, names) only fetches the requested skills", async () => {
  await clean()
  const server = serve()
  const url = `http://localhost:${server.port}/`

  const dirs = await Discovery.pull(url, ["attack-jwt"])
  server.stop(true)

  expect(dirs.map((d) => path.basename(d))).toEqual(["attack-jwt"])
  expect((await Discovery.cached()).map((d) => path.basename(d))).toEqual(["attack-jwt"])
})

test("pull(url) without names fetches the whole registry", async () => {
  await clean()
  const server = serve()
  const url = `http://localhost:${server.port}/`

  const dirs = await Discovery.pull(url)
  server.stop(true)

  expect(dirs.length).toBe(catalog.length)
})

test("index() is cached on disk and survives going offline", async () => {
  await clean()
  const server = serve()
  const url = `http://localhost:${server.port}/`

  expect((await Discovery.index(url)).length).toBe(catalog.length)
  server.stop(true)

  const offline = await Discovery.index(url)
  expect(offline.length).toBe(catalog.length)
  expect(offline[0].verified).toBe("official")
})

test("pull() skips a skill that is not in the registry", async () => {
  await clean()
  const server = serve()
  const url = `http://localhost:${server.port}/`

  const dirs = await Discovery.pull(url, ["does-not-exist"])
  server.stop(true)

  expect(dirs).toEqual([])
})
