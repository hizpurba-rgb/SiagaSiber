import { $, semver } from "bun"
import path from "path"

const rootPkgPath = path.resolve(import.meta.dir, "../../../package.json")
const rootPkg = await Bun.file(rootPkgPath).json()
const expectedBunVersion = rootPkg.packageManager?.split("@")[1]

if (!expectedBunVersion) {
  throw new Error("packageManager field not found in root package.json")
}

// relax version requirement
const expectedBunVersionRange = `^${expectedBunVersion}`

if (!semver.satisfies(process.versions.bun, expectedBunVersionRange)) {
  throw new Error(`This script requires bun@${expectedBunVersionRange}, but you are using bun@${process.versions.bun}`)
}

const env = {
  SIAGA_CHANNEL: process.env["SIAGA_CHANNEL"],
  SIAGA_BUMP: process.env["SIAGA_BUMP"],
  SIAGA_VERSION: process.env["SIAGA_VERSION"],
  SIAGA_RELEASE: process.env["SIAGA_RELEASE"],
}
const CHANNEL = await (async () => {
  if (env.SIAGA_CHANNEL) return env.SIAGA_CHANNEL
  if (env.SIAGA_BUMP === "beta") return "beta"
  if (env.SIAGA_BUMP === "canary") return "canary"
  if (env.SIAGA_BUMP) return "latest"
  if (env.SIAGA_VERSION && !env.SIAGA_VERSION.startsWith("0.0.0-")) {
    // Extract prerelease tag from semver (e.g. "1.1.6-beta.1" → "beta")
    const pre = env.SIAGA_VERSION.match(/-([a-z]+)/i)?.[1]
    return pre ?? "latest"
  }
  return await $`git branch --show-current`.text().then((x) => x.trim())
})()
const IS_PREVIEW = CHANNEL !== "latest"

const VERSION = await (async () => {
  if (env.SIAGA_VERSION) return env.SIAGA_VERSION
  if (IS_PREVIEW && env.SIAGA_BUMP !== "beta" && env.SIAGA_BUMP !== "canary")
    return `0.0.0-${CHANNEL}-${new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "")}`

  const registry = (await fetch("https://registry.npmjs.org/@siaga-siber%2Fsiaga").then((res) => {
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  })) as { "dist-tags": Record<string, string>; versions: Record<string, unknown> }

  if (env.SIAGA_BUMP === "beta" || env.SIAGA_BUMP === "canary") {
    const pre = env.SIAGA_BUMP // "beta" | "canary" — separate dist-tags, separate counters
    const latest = registry["dist-tags"]?.latest
    if (!latest) throw new Error("No published latest version found on npm")
    const [major, minor, patch] = latest.split(".").map((x: string) => Number(x) || 0)

    const current = registry["dist-tags"]?.[pre]
    if (current) {
      const m = current.match(new RegExp(`^(\\d+)\\.(\\d+)\\.(\\d+)-${pre}\\.(\\d+)$`))
      if (m) {
        const [, bMaj, bMin, bPatch, bNum] = m
        const sameMajor = Number(bMaj) === major
        const sameMinor = Number(bMin) === minor
        const samePatch = Number(bPatch) === patch + 1
        if (sameMajor && sameMinor && samePatch) {
          return `${bMaj}.${bMin}.${bPatch}-${pre}.${Number(bNum) + 1}`
        }
      }
    }
    return `${major}.${minor}.${patch + 1}-${pre}.0`
  }

  const version = registry["dist-tags"]?.latest
  if (!version) throw new Error("No published latest version found on npm")
  const [major, minor, patch] = version.split(".").map((x: string) => Number(x) || 0)
  const t = env.SIAGA_BUMP?.toLowerCase()
  if (t === "major") return `${major + 1}.0.0`
  if (t === "minor") return `${major}.${minor + 1}.0`
  return `${major}.${minor}.${patch + 1}`
})()

const team = [
  "actions-user",
  "siaga",
  "rekram1-node",
  "thdxr",
  "kommander",
  "jayair",
  "fwang",
  "adamdotdevin",
  "iamdavidhill",
  "siaga-agent[bot]",
  "R44VC0RP",
]

export const Script = {
  get channel() {
    return CHANNEL
  },
  get version() {
    return VERSION
  },
  get preview() {
    return IS_PREVIEW
  },
  get release(): boolean {
    return !!env.SIAGA_RELEASE
  },
  get team() {
    return team
  },
}
console.log(`siaga script`, JSON.stringify(Script, null, 2))
