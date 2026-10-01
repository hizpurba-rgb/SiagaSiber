#!/usr/bin/env bun
// Validate every skill under .siaga/skill/ against the loader contract.
// Usage: bun run packages/siaga/script/check-skills.ts
import path from "path"
import matter from "gray-matter"
import { SkillSigning } from "../src/skill/signing"

const root = path.resolve(import.meta.dir, "../../..")
const skillDir = path.join(root, ".siaga", "skill")

const names = new Map<string, string>()
const problems: string[] = []
const verified: Record<string, number> = {}
let total = 0
let dirMismatch = 0

for await (const rel of new Bun.Glob("**/SKILL.md").scan({ cwd: skillDir, absolute: false })) {
  total++
  const file = path.join(skillDir, rel)
  const content = await Bun.file(file).text()
  const dir = path.dirname(rel)
  const expected = dir.split(/[\\/]/).pop()!

  let data: Record<string, unknown>
  try {
    data = matter(content).data
  } catch (err) {
    problems.push(`${rel}: frontmatter parse failed (${err})`)
    continue
  }

  const name = data?.name
  const description = data?.description
  if (typeof name !== "string" || name === "") problems.push(`${rel}: missing name`)
  if (typeof description !== "string" || description === "") problems.push(`${rel}: missing description`)
  if (typeof name === "string" && name !== expected) {
    // Pre-existing frameworks (NIST, CIS) use truncated directory names on purpose.
    dirMismatch++
    if (rel.split(/[\\/]/)[0] === "community") problems.push(`${rel}: name "${name}" != dir "${expected}"`)
  }

  const status = await SkillSigning.verify({
    content,
    sha256: typeof data?.sha256 === "string" ? data.sha256 : undefined,
    signature: typeof data?.signature === "string" ? data.signature : undefined,
    signed_by: typeof data?.signed_by === "string" ? data.signed_by : undefined,
  })
  verified[status] = (verified[status] ?? 0) + 1
  if (status === "tampered") problems.push(`${rel}: integrity check failed`)

  if (typeof name === "string") {
    const prev = names.get(name)
    if (prev) problems.push(`${rel}: duplicate name "${name}" (also ${prev})`)
    names.set(name, rel)
  }
}

console.log(`${total} skills, ${names.size} unique names, ${dirMismatch} legacy dir/name mismatches`)
console.log(
  "verified:",
  Object.entries(verified)
    .map(([k, v]) => `${k}=${v}`)
    .join(" "),
)
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`)
  for (const p of problems.slice(0, 50)) console.error("  " + p)
  process.exit(1)
}
console.log("OK")
