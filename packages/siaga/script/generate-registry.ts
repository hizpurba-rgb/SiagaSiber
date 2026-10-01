#!/usr/bin/env bun
// Generate index.json for the skill registry
// Usage: bun run packages/siaga/script/generate-registry.ts
// Output: .siaga/skill/index.json (for publishing to skills.siagasiber.id)
import path from "path"
import { readdirSync, existsSync } from "fs"

const root = path.resolve(import.meta.dir, "../../..")
const skillDir = path.join(root, ".siaga", "skill")

type RegistryEntry = {
  name: string
  description: string
  category?: string
  owasp_id?: string
  verified?: string
  tags?: string[]
  tech_stack?: string[]
  cwe_ids?: string[]
  files: string[]
}

const posix = (p: string) => p.split(path.sep).join("/")

// Every directory containing a SKILL.md is a skill, at any depth.
function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isDirectory()) return []
    const child = path.join(dir, entry.name)
    return existsSync(path.join(child, "SKILL.md")) ? [child] : walk(child)
  })
}

const parse = (fm: string) => ({
  description: fm.match(/^description:\s*"?(.+?)"?$/m)?.[1] ?? "",
  category: fm.match(/^category:\s*"?(.+?)"?$/m)?.[1],
  owasp_id: fm.match(/^owasp_id:\s*"?(.+?)"?$/m)?.[1],
  signed: /^signed_by:/m.test(fm),
  list: (key: string) =>
    fm
      .match(new RegExp(`^${key}:\\s*\\[(.*)\\]`, "m"))?.[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [],
})

async function main() {
  const entries: RegistryEntry[] = []

  for (const dir of walk(skillDir).sort()) {
    const name = posix(path.relative(skillDir, dir))
    const content = (await Bun.file(path.join(dir, "SKILL.md")).text()).replaceAll("\r\n", "\n")
    const fm = content.match(/^---\n([\s\S]*?)\n---/)?.[1]
    if (!fm) {
      console.warn(`skipped (no frontmatter): ${name}`)
      continue
    }
    const meta = parse(fm)
    entries.push({
      name,
      description: meta.description,
      category: meta.category,
      owasp_id: meta.owasp_id,
      verified: meta.signed ? "official" : "unverified",
      tags: meta.list("tags"),
      tech_stack: meta.list("tech_stack"),
      cwe_ids: meta.list("cwe_ids"),
      files: readdirSync(dir, { withFileTypes: true })
        .filter((f) => f.isFile())
        .map((f) => f.name)
        .sort(),
    })
  }

  const output = path.join(skillDir, "index.json")
  await Bun.write(output, JSON.stringify({ version: "1.0", skills: entries }, null, 2) + "\n")

  console.log(`Generated ${output}`)
  console.log(`  ${entries.length} skills indexed`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
