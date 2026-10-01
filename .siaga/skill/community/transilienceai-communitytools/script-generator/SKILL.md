---
name: script-generator
description: Generates optimized, syntax-validated scripts on demand. Never executes — only generates, optimizes, and validates.
category: "community"
version: "1.0.0"
author: "transilienceai-communitytools"
license: "MIT"
source: "https://github.com/transilienceai/communitytools"
sha256: f5634d5d65b6171cdab45f20975c413fcc2b1690075db2d342abad1b4b3bfd60
signature: lBQcBFfLrxwvl3bHBipTaTkbuV7o5NUXJV8+5Vw7uyqfNicusUNU0eK56yZP9F6nloUkCmijd2ECS+WOzGefBw==
signed_by: siaga-official
---

# Script Generator

Generates optimized, syntax-validated scripts on demand. **Never executes scripts.**

## When to Use

- Scripts exceed ~30 lines
- Parallel operations on multiple targets
- Multi-library patterns (impacket + ldap3, pypsrp + concurrent.futures)
- Repeated auth handshakes or connection setup

## Request Format

```
LANGUAGE: python3 | powershell | bash
TASK: What the script should accomplish
TARGETS: IPs, hostnames, URLs
CREDENTIALS: user, pass, hash, domain, certs
AVAILABLE_LIBRARIES: What's installed
OUTPUT_FORMAT: stdout format, file writes
CONSTRAINTS: timeout, no destructive ops, output directory
CONTEXT: (optional) Prior output, errors, what failed
```

## Optimization

- Multiple targets → `concurrent.futures.ThreadPoolExecutor`
- >3 HTTP requests to same host → `requests.Session`
- Repeated auth → single auth, reuse session/token
- Prefer high-level libraries (impacket, ldap3, requests)

## Output

Write to `OUTPUT_DIR/artifacts/<task_name>.<ext>`. Return:

```
SCRIPT_PATH: OUTPUT_DIR/artifacts/task_name.py
LANGUAGE: python3
VALIDATION: PASSED
EXECUTION: python3 OUTPUT_DIR/artifacts/task_name.py
DEPENDENCIES: impacket, concurrent.futures (stdlib)
```

## Rules

- Never execute scripts — only generate, optimize, validate
- Per-operation error handling — no bare `except:`
- Timeout enforcement on all I/O
- Validate syntax before returning
- No secrets hardcoded — credentials as variables at top
