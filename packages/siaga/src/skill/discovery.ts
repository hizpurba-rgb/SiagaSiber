import path from "path"
import { mkdir, readdir } from "fs/promises"
import { createHash } from "crypto"
import { Log } from "../util/log"
import { Global } from "../global"

export namespace Discovery {
  const log = Log.create({ service: "skill-discovery" })

  const TTL = 24 * 60 * 60 * 1000
  const CONCURRENCY = 16

  export type IndexSkill = {
    name: string
    description: string
    category?: string
    owasp_id?: string
    verified?: string
    tags?: string[]
    tech_stack?: string[]
    cwe_ids?: string[]
  } & ({ files: string[] } | { type: "skill-md" | "archive"; url: string; digest?: string })

  type Index = {
    skills: IndexSkill[]
  }

  export function dir() {
    return path.join(Global.Path.cache, "skills")
  }

  function file(url: string) {
    const base = url.endsWith("/") ? url : `${url}/`
    const hash = createHash("sha256").update(base).digest("hex").slice(0, 12)
    return path.join(dir(), `index-${hash}.json`)
  }

  function valid(skill: IndexSkill | undefined): skill is IndexSkill {
    if (!skill?.name) {
      log.warn("invalid skill entry", { skill })
      return false
    }
    const hasFiles = "files" in skill && Array.isArray(skill.files)
    const hasUrl = "url" in skill && typeof skill.url === "string"
    if (!hasFiles && !hasUrl) {
      log.warn("invalid skill entry", { skill })
      return false
    }
    return true
  }

  async function download(url: string, dest: string): Promise<boolean> {
    if (await Bun.file(dest).exists()) return true
    return fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          log.error("failed to download", { url, status: response.status })
          return false
        }
        await Bun.write(dest, await response.text())
        return true
      })
      .catch((err) => {
        log.error("failed to download", { url, err })
        return false
      })
  }

  // Bounded concurrency: a registry can hold thousands of skills, firing every
  // request at once would exhaust sockets and hammer the host.
  async function pool<T, R>(items: T[], fn: (item: T) => Promise<R>): Promise<R[]> {
    const result = new Array<R>(items.length)
    let next = 0
    await Promise.all(
      Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
        while (next < items.length) {
          const i = next++
          result[i] = await fn(items[i])
        }
      }),
    )
    return result
  }

  /**
   * Registry index, cached on disk so a multi-megabyte index.json is not
   * re-fetched on every session. Falls back to the stale copy when offline.
   */
  export async function index(url: string, opts: { refresh?: boolean } = {}): Promise<IndexSkill[]> {
    const cache = file(url)
    const local = await Bun.file(cache)
      .json()
      .then((data) => (data as Index)?.skills)
      .catch(() => undefined)

    const mtime = await Bun.file(cache)
      .stat()
      .then((stat) => stat.mtime?.getTime() ?? 0)
      .catch(() => 0)

    if (!opts.refresh && local?.length && Date.now() - mtime < TTL) return local

    const remote = new URL("index.json", url.endsWith("/") ? url : `${url}/`).href
    log.info("fetching index", { url: remote })

    const fetched = await fetch(remote)
      .then(async (response) => {
        if (!response.ok) {
          log.error("failed to fetch index", { url: remote, status: response.status })
          return undefined
        }
        return (await response.json()) as Index
      })
      .catch((err) => {
        log.error("failed to fetch index", { url: remote, err })
        return undefined
      })

    if (!Array.isArray(fetched?.skills)) {
      log.warn("invalid index format, using cached index", { url: remote })
      return local ?? []
    }

    await mkdir(dir(), { recursive: true })
    await Bun.write(cache, JSON.stringify(fetched))
    return fetched.skills
  }

  /**
   * Download skills into the local cache.
   * With `names`, only those skills are fetched — the rest is left alone.
   * Without it, the whole registry is downloaded (explicit install).
   */
  export async function pull(url: string, names?: string[]): Promise<string[]> {
    const base = url.endsWith("/") ? url : `${url}/`
    const host = base.slice(0, -1)
    const cache = dir()
    const list = (await index(url)).filter(valid).filter((skill) => !names || names.includes(skill.name))

    const roots = await pool(list, async (skill) => {
      const root = path.join(cache, skill.name)

      if ("files" in skill && Array.isArray(skill.files)) {
        // Legacy format: array of individual files
        await Promise.all(
          skill.files.map(async (f) => {
            const link = new URL(f, `${host}/${skill.name}/`).href
            const dest = path.join(root, f)
            await mkdir(path.dirname(dest), { recursive: true })
            await download(link, dest)
          }),
        )
      } else if ("url" in skill && typeof skill.url === "string") {
        const link = new URL(skill.url, base).href
        if ("type" in skill && skill.type === "archive") {
          // Archive format: download tar.gz and extract
          const archive = path.join(root, `${skill.name}.tar.gz`)
          await mkdir(root, { recursive: true })
          if (await download(link, archive)) {
            await Bun.$`tar xzf ${archive} -C ${root} 2>/dev/null`.quiet().nothrow()
          }
        } else {
          // Single file (skill-md): download as SKILL.md
          const dest = path.join(root, "SKILL.md")
          await mkdir(root, { recursive: true })
          await download(link, dest)
        }
      }

      const md = path.join(root, "SKILL.md")
      if (await Bun.file(md).exists()) return root
      return undefined
    })

    return roots.filter((root) => root !== undefined)
  }

  /** Skill directories already present in the local cache. Never hits the network. */
  export async function cached(): Promise<string[]> {
    const cache = dir()
    const list = await readdir(cache, { withFileTypes: true }).catch(() => [])
    const roots = await Promise.all(
      list
        .filter((entry) => entry.isDirectory())
        .map(async (entry) => {
          const root = path.join(cache, entry.name)
          return (await Bun.file(path.join(root, "SKILL.md")).exists()) ? root : undefined
        }),
    )
    return roots.filter((root) => root !== undefined)
  }
}
