function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

export namespace Flag {
  export const SIAGA_AUTO_SHARE = truthy("SIAGA_AUTO_SHARE")
  export const SIAGA_GIT_BASH_PATH = process.env["SIAGA_GIT_BASH_PATH"]
  export const SIAGA_CONFIG = process.env["SIAGA_CONFIG"]
  export declare const SIAGA_CONFIG_DIR: string | undefined
  export const SIAGA_CONFIG_CONTENT = process.env["SIAGA_CONFIG_CONTENT"]
  export const SIAGA_DISABLE_AUTOUPDATE = truthy("SIAGA_DISABLE_AUTOUPDATE")
  export const SIAGA_DISABLE_PRUNE = truthy("SIAGA_DISABLE_PRUNE")
  export const SIAGA_DISABLE_TERMINAL_TITLE = truthy("SIAGA_DISABLE_TERMINAL_TITLE")
  export const SIAGA_PERMISSION = process.env["SIAGA_PERMISSION"]
  export const SIAGA_DISABLE_DEFAULT_PLUGINS = truthy("SIAGA_DISABLE_DEFAULT_PLUGINS")
  export const SIAGA_DISABLE_LSP_DOWNLOAD = truthy("SIAGA_DISABLE_LSP_DOWNLOAD")
  export const SIAGA_ENABLE_EXPERIMENTAL_MODELS = truthy("SIAGA_ENABLE_EXPERIMENTAL_MODELS")
  export const SIAGA_DISABLE_AUTOCOMPACT = truthy("SIAGA_DISABLE_AUTOCOMPACT")
  export const SIAGA_DISABLE_MODELS_FETCH = truthy("SIAGA_DISABLE_MODELS_FETCH")
  export const SIAGA_DISABLE_CLAUDE_CODE = truthy("SIAGA_DISABLE_CLAUDE_CODE")
  export const SIAGA_DISABLE_CLAUDE_CODE_PROMPT =
    SIAGA_DISABLE_CLAUDE_CODE || truthy("SIAGA_DISABLE_CLAUDE_CODE_PROMPT")
  export const SIAGA_DISABLE_CLAUDE_CODE_SKILLS =
    SIAGA_DISABLE_CLAUDE_CODE || truthy("SIAGA_DISABLE_CLAUDE_CODE_SKILLS")
  export const SIAGA_DISABLE_EXTERNAL_SKILLS =
    SIAGA_DISABLE_CLAUDE_CODE_SKILLS || truthy("SIAGA_DISABLE_EXTERNAL_SKILLS")
  export declare const SIAGA_DISABLE_PROJECT_CONFIG: boolean
  export const SIAGA_FAKE_VCS = process.env["SIAGA_FAKE_VCS"]
  export declare const SIAGA_CLIENT: string
  export const SIAGA_SERVER_PASSWORD = process.env["SIAGA_SERVER_PASSWORD"]
  export const SIAGA_SERVER_USERNAME = process.env["SIAGA_SERVER_USERNAME"]

  // Experimental
  export const SIAGA_EXPERIMENTAL = truthy("SIAGA_EXPERIMENTAL")
  export const SIAGA_EXPERIMENTAL_FILEWATCHER = truthy("SIAGA_EXPERIMENTAL_FILEWATCHER")
  export const SIAGA_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("SIAGA_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const SIAGA_EXPERIMENTAL_ICON_DISCOVERY =
    SIAGA_EXPERIMENTAL || truthy("SIAGA_EXPERIMENTAL_ICON_DISCOVERY")

  const copy = process.env["SIAGA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
  export const SIAGA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT =
    copy === undefined ? process.platform === "win32" : truthy("SIAGA_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const SIAGA_ENABLE_EXA =
    truthy("SIAGA_ENABLE_EXA") || SIAGA_EXPERIMENTAL || truthy("SIAGA_EXPERIMENTAL_EXA")
  export const SIAGA_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number(
    "SIAGA_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS",
  )
  export const SIAGA_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("SIAGA_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const SIAGA_EXPERIMENTAL_OXFMT = SIAGA_EXPERIMENTAL || truthy("SIAGA_EXPERIMENTAL_OXFMT")
  export const SIAGA_EXPERIMENTAL_LSP_TY = truthy("SIAGA_EXPERIMENTAL_LSP_TY")
  export const SIAGA_EXPERIMENTAL_LSP_TOOL =
    SIAGA_EXPERIMENTAL || truthy("SIAGA_EXPERIMENTAL_LSP_TOOL")
  export const SIAGA_DISABLE_FILETIME_CHECK = truthy("SIAGA_DISABLE_FILETIME_CHECK")
  export const SIAGA_EXPERIMENTAL_PLAN_MODE =
    SIAGA_EXPERIMENTAL || truthy("SIAGA_EXPERIMENTAL_PLAN_MODE")
  export const SIAGA_EXPERIMENTAL_MARKDOWN = truthy("SIAGA_EXPERIMENTAL_MARKDOWN")
  export const SIAGA_MODELS_URL = process.env["SIAGA_MODELS_URL"]
  export const SIAGA_MODELS_PATH = process.env["SIAGA_MODELS_PATH"]

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}

// Dynamic getter for SIAGA_DISABLE_PROJECT_CONFIG
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "SIAGA_DISABLE_PROJECT_CONFIG", {
  get() {
    return truthy("SIAGA_DISABLE_PROJECT_CONFIG")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for SIAGA_CONFIG_DIR
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "SIAGA_CONFIG_DIR", {
  get() {
    return process.env["SIAGA_CONFIG_DIR"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for SIAGA_CLIENT
// This must be evaluated at access time, not module load time,
// because some commands override the client at runtime
Object.defineProperty(Flag, "SIAGA_CLIENT", {
  get() {
    return process.env["SIAGA_CLIENT"] ?? "cli"
  },
  enumerable: true,
  configurable: false,
})
