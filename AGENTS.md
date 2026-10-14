# Global Instructions — all agents, all projects

## How to apply

- **Caveman** (`caveman` skill): load it, then keep that output style for every
  response in the session. Level persists until the user says "stop caveman" or
  "normal mode". Drop the compression for destructive-action confirmations and
  security warnings; resume after.
- **Karpathy** (`karpathy-guidelines` skill): load it before writing, reviewing,
  or refactoring code. Obey its rules: think before coding, minimum code,
  surgical changes, goal-driven verification, read before write, match repo
  conventions, fail loud, surface token-budget breaches.
- **Best practices**: pick the `best-practices/*` skills that match the stack in
  play (for example `nextjs-developer`, `react-expert`, `secure-code-guardian`,
  `postgres-pro`, `test-master`) and follow them while coding.
- **UI UX Pro Max** (`ui-ux-pro-max` skill): load it before any frontend or
  design work — layouts, components, styling, colour, typography, interaction
  states, accessibility.
- **Impeccable** (`impeccable` skill, installed globally at
  `~/.kilocode/skills/impeccable/`): load it before any frontend, UI, or design
  work — design, redesign, critique, audit, polish, layout, typography, colour,
  motion, accessibility, theming, design tokens. Its own scope excludes
  backend-only tasks. After loading, read the playbook for the request's
  sub-command, then run the context launcher once per session
  (`scripts/impeccable context`; on Windows without `sh` use
  `scripts/impeccable.cmd`) before touching UI files. Hold the same quality
  floor on every other deliverable: production-grade, verified, no unfinished
  edges, no silent skips, no "should work" claims.
- To regenerate the JavaScript SDK, run `./packages/sdk/js/script/build.ts`.
- ALWAYS USE PARALLEL TOOLS WHEN APPLICABLE.
- The default branch in this repo is `dev`.
- Local `main` ref may not exist; use `dev` or `origin/dev` for diffs.
- Prefer automation: execute requested actions without confirmation unless blocked by missing info or safety/irreversibility.

## Style Guide

### General Principles

- Keep things in one function unless composable or reusable
- Avoid `try`/`catch` where possible
- Avoid using the `any` type
- Prefer single word variable names where possible
- Use Bun APIs when possible, like `Bun.file()`
- Rely on type inference when possible; avoid explicit type annotations or interfaces unless necessary for exports or clarity
- Prefer functional array methods (flatMap, filter, map) over for loops; use type guards on filter to maintain type inference downstream

### Naming

Prefer single word names for variables and functions. Only use multiple words if necessary.

```ts
// Good
const foo = 1
function journal(dir: string) {}

// Bad
const fooBar = 1
function prepareJournal(dir: string) {}
```

Reduce total variable count by inlining when a value is only used once.

```ts
// Good
const journal = await Bun.file(path.join(dir, "journal.json")).json()

// Bad
const journalPath = path.join(dir, "journal.json")
const journal = await Bun.file(journalPath).json()
```

### Destructuring

Avoid unnecessary destructuring. Use dot notation to preserve context.

```ts
// Good
obj.a
obj.b

// Bad
const { a, b } = obj
```

### Variables

Prefer `const` over `let`. Use ternaries or early returns instead of reassignment.

```ts
// Good
const foo = condition ? 1 : 2

// Bad
let foo
if (condition) foo = 1
else foo = 2
```

### Control Flow

Avoid `else` statements. Prefer early returns.

```ts
// Good
function foo() {
  if (condition) return 1
  return 2
}

// Bad
function foo() {
  if (condition) return 1
  else return 2
}
```

### Schema Definitions (Drizzle)

Use snake_case for field names so column names don't need to be redefined as strings.

```ts
// Good
const table = sqliteTable("session", {
  id: text().primaryKey(),
  project_id: text().notNull(),
  created_at: integer().notNull(),
})

// Bad
const table = sqliteTable("session", {
  id: text("id").primaryKey(),
  projectID: text("project_id").notNull(),
  createdAt: integer("created_at").notNull(),
})
```

## Testing

- Avoid mocks as much as possible
- Test actual implementation, do not duplicate logic into tests
- Tests cannot run from repo root (guard: `do-not-run-tests-from-root`); run from package dirs like `packages/siaga`.
