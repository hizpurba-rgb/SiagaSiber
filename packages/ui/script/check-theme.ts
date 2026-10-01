import { resolveThemeVariant } from "../src/theme/resolve"
import type { ColorValue, DesktopTheme } from "../src/theme/types"
import brutal from "../src/theme/themes/brutal.json"

type Rgba = [number, number, number, number]

function parse(value: ColorValue): Rgba | null {
  if (value.startsWith("var(")) return null

  if (value.startsWith("#")) {
    let hex = value.slice(1)
    if (hex.length === 3 || hex.length === 4) hex = [...hex].map((c) => c + c).join("")
    if (hex.length !== 6 && hex.length !== 8) return null
    const channels = [0, 2, 4, 6].map((i, n) =>
      n === 3 && hex.length === 6 ? 1 : Number.parseInt(hex.slice(i, i + 2), 16) / (n === 3 ? 255 : 255),
    )
    return channels.some(Number.isNaN) ? null : (channels as Rgba)
  }

  if (value.startsWith("rgba(")) {
    const parts = value.slice(5, -1).split(",").map((part) => Number.parseFloat(part.trim()))
    if (parts.length < 3 || parts.some(Number.isNaN)) return null
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255, parts[3] ?? 1]
  }

  return null
}

function flatten(fg: Rgba, bg: Rgba): [number, number, number] {
  return [0, 1, 2].map((i) => fg[i] * fg[3] + bg[i] * (1 - fg[3])) as [number, number, number]
}

function luminance([r, g, b]: [number, number, number]): number {
  const lin = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

function ratio(fgText: ColorValue, bgText: ColorValue): number | null {
  const fg = parse(fgText)
  const bg = parse(bgText)
  if (!fg || !bg) return null
  const [hi, lo] = [luminance(flatten(fg, bg)), luminance([bg[0], bg[1], bg[2]])].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const TEXT = 4.5
const NONTEXT = 3

const PAIRS: [string, string, number][] = [
  ["text-base", "background-base", TEXT],
  ["text-weak", "background-base", TEXT],
  ["text-weaker", "background-base", TEXT],
  ["text-base", "surface-raised-strong", TEXT],
  ["text-base", "input-base", TEXT],
  ["text-base", "surface-float-base", TEXT],
  ["text-base", "surface-interactive-base", TEXT],
  ["text-base", "surface-critical-base", TEXT],
  ["text-base", "surface-warning-base", TEXT],
  ["text-base", "surface-success-base", TEXT],
  ["text-base", "surface-info-base", TEXT],
  ["text-base", "surface-brand-base", TEXT],
  ["text-interactive-base", "background-base", TEXT],
  ["icon-base", "background-base", NONTEXT],
  ["icon-weak-base", "background-base", NONTEXT],
  ["border-base", "background-base", NONTEXT],
  ["border-weak-base", "background-base", NONTEXT],
  ["border-focus", "background-base", NONTEXT],
  ["border-selected", "background-base", NONTEXT],
  ["border-critical-selected", "background-base", NONTEXT],
]

const theme = brutal as DesktopTheme
let failed = 0
let skipped = 0

for (const mode of ["light", "dark"] as const) {
  const tokens = resolveThemeVariant(theme[mode], mode === "dark")
  for (const [fg, bg, min] of PAIRS) {
    const value = ratio(tokens[fg], tokens[bg])
    if (value === null) {
      skipped++
      console.log(`skip ${mode.padEnd(5)} ${fg} on ${bg} (token is not a literal color)`)
      continue
    }
    const ok = value >= min
    if (!ok) failed++
    console.log(`${ok ? "ok  " : "FAIL"} ${mode.padEnd(5)} ${fg} on ${bg} = ${value.toFixed(2)} (min ${min})`)
  }
}

console.log(
  failed === 0
    ? `\nall ${PAIRS.length * 2 - skipped} contrast checks passed, ${skipped} skipped`
    : `\n${failed} contrast checks failed`,
)
if (failed > 0) process.exit(1)
