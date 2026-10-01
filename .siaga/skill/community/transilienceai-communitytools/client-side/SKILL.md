---
name: client-side
description: Client-side vulnerability testing - XSS (reflected/stored/DOM), CSRF, CORS misconfiguration, Clickjacking, DOM-based attacks, and Prototype Pollution.
category: "community"
version: "1.0.0"
author: "transilienceai-communitytools"
license: "MIT"
source: "https://github.com/transilienceai/communitytools"
sha256: bb823e5f49ee4538042d363f1464ce865f923362cf03952d37638a4c45e2dcba
signature: j/NJNvnbEy+obcsuc4bfYZ07r23OAvOqD/zWGDP+sBurwndqJsea+4KQPNH3UQJpGAS9t7qIALViWNVJ5n/RBw==
signed_by: siaga-official
---

# Client-Side

Test for client-side vulnerabilities across modern web applications and SPAs.

## Techniques

| Type | Key Vectors |
|------|-------------|
| **XSS** | Reflected, Stored, DOM-based, framework-specific (React, Vue, Angular) |
| **CSRF** | Token bypass, SameSite cookie bypass, cross-origin requests |
| **CORS** | Misconfigured origins, null origin, wildcard credentials |
| **Clickjacking** | Frame-based, drag-and-drop, multi-step |
| **DOM-based** | DOM sinks, source/sink analysis, JavaScript URL schemes |
| **Prototype Pollution** | Client-side gadgets, server-side pollution, property injection |

## Workflow

1. Identify input sources and data flows
2. Classify sink contexts (HTML, attribute, URL, JS, CSS)
3. Enumerate defenses (encoding, CSP, sanitizers, Trusted Types)
4. Craft context-appropriate payloads
5. Validate execution and demonstrate impact
6. Document with reproduction steps and remediation

## Reference

- `reference/xss*.md` - XSS bypass techniques and exploitation
- `reference/csrf*.md` - CSRF techniques and bypasses
- `reference/cors*.md` - CORS misconfiguration testing
- `reference/clickjacking*.md` - Clickjacking techniques
- `reference/dom*.md` - DOM-based vulnerability testing
- `reference/prototype-pollution*.md` - Prototype pollution techniques
