#!/usr/bin/env bun
// Import third-party community skills into .siaga/skill/community/<repo>/<name>/
// Usage: bun script/skill-import.ts <srcDir> <repoSlug> <license> <upstreamUrl>
//
// - Copies the whole skill directory (SKILL.md + references/scripts)
// - Strips upstream signing fields, adds provenance frontmatter
// - Skips any skill whose name already exists in the tree
import path from "path"
import { rm, mkdir } from "fs/promises"
import { readdirSync } from "fs"
import matter from "gray-matter"

const [src, slug, license, upstream] = process.argv.slice(2)
if (!src || !slug || !license || !upstream) {
  console.error("usage: skill-import.ts <srcDir> <repoSlug> <license> <upstreamUrl>")
  process.exit(1)
}

const root = path.resolve(import.meta.dir, "../../..")
const skillDir = path.join(root, ".siaga", "skill")
const dest = path.join(skillDir, "community", slug)

const glob = new Bun.Glob("**/SKILL.md")

// name -> existing location, for collision detection
const existing = new Map<string, string>()
for await (const f of glob.scan({ cwd: skillDir, absolute: false })) {
  const name = matter(await Bun.file(path.join(skillDir, f)).text()).data?.name
  if (typeof name === "string") existing.set(name, f)
}

// Copies a skill dir recursively, dropping nested SKILL.md (each nested skill is
// imported as its own top-level entry named after its frontmatter `name`).
const copy = async (from: string, to: string) => {
  await mkdir(to, { recursive: true })
  const depth = from.split(/[\\/]/).length
  for (const entry of readdirSync(from, { recursive: true, withFileTypes: true })) {
    const parts = entry.parentPath.split(/[\\/]/).slice(depth)
    if (parts.length > 0 && entry.name.toLowerCase() === "skill.md") continue
    const rel = [...parts, entry.name].join("/")
    const dest = path.join(to, rel)
    if (entry.isDirectory()) {
      await mkdir(dest, { recursive: true })
      continue
    }
    await mkdir(path.dirname(dest), { recursive: true })
    await Bun.write(dest, Bun.file(path.join(from, rel)))
  }
}

let imported = 0
let skipped: string[] = []

for await (const rel of glob.scan(src)) {
  const from = path.join(src, rel)
  const dir = from.replace(/[\\/]SKILL\.md$/, "")
  const name = dir.split(/[\\/]/).pop()!
  if (existing.has(name)) {
    skipped.push(`${name} (exists: ${existing.get(name)})`)
    continue
  }

  const probe = matter(await Bun.file(from).text()).data
  const skill = typeof probe?.name === "string" && typeof probe?.description === "string" ? probe.name : name
  if (existing.has(skill)) {
    skipped.push(`${skill} (exists: ${existing.get(skill)})`)
    continue
  }

  const to = path.join(dest, skill)
  await copy(dir, to)

  const file = path.join(to, "SKILL.md")
  const raw = await Bun.file(file).text()
  const data = matter(raw).data
  if (typeof data?.name !== "string" || typeof data?.description !== "string") {
    await rm(to, { recursive: true, force: true })
    skipped.push(`${skill} (invalid frontmatter)`)
    continue
  }
  if (data.name !== skill) {
    await rm(to, { recursive: true, force: true })
    skipped.push(`${skill} (name mismatch: ${data.name})`)
    continue
  }

  const second = raw.indexOf("\n---", 4)
  const fm = raw
    .slice(4, second)
    .split(/\r?\n/)
    .filter((l) => !/^(sha256|signature|signed_by):/.test(l))
  const has = (key: string) => fm.some((l) => new RegExp(`^${key}:`).test(l))
  const add = (key: string, value: string) => !has(key) && fm.push(`${key}: ${value}`)
  add("category", '"community"')
  add("version", '"1.0.0"')
  add("author", `"${slug}"`)
  add("license", `"${license}"`)
  add("source", `"${upstream}"`)

  await Bun.write(file, `---\n${fm.join("\n")}\n---${raw.slice(second + 4)}`)
  existing.set(skill, path.join("community", slug, skill))
  imported++
}

console.log(`${slug}: ${imported} imported, ${skipped.length} skipped`)
for (const s of skipped) console.log(`  skip ${s}`)
