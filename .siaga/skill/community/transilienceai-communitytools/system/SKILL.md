---
name: system
description: System exploitation testing - Active Directory attacks, privilege escalation (Linux/Windows), and exploit development.
category: "community"
version: "1.0.0"
author: "transilienceai-communitytools"
license: "MIT"
source: "https://github.com/transilienceai/communitytools"
sha256: 07da627d5e5b0d7d8eea3d1ff88b77b33776dc49fc75c21c4201085cf119e5f2
signature: v7Z7PFeF92DwJSUN9xmib0w82pfaccd0YYhWDi+eK5dL7ycDckmGu4tbU7k3nvmlFD49C3WZjyI6REMPflaFDg==
signed_by: siaga-official
---

# System

Test system-level security including Active Directory, privilege escalation, and exploit development.

## Techniques

| Type | Key Vectors |
|------|-------------|
| **Active Directory** | Kerberoasting, AS-REP roasting, DCSync, PtH, Golden/RODC Ticket, RBCD, ACL abuse, KeyList, Shadow Credentials, ADCS (ESC1-9/16) |
| **Privilege Escalation** | SUID/sudo abuse, kernel exploits, service misconfig, token manipulation |
| **Exploit Development** | Buffer overflow, format string, ROP chains, shellcode, heap exploitation |

## Workflow

1. Enumerate system and domain information
2. Identify escalation paths and misconfigurations
3. Exploit with appropriate techniques
4. Demonstrate impact (domain admin, root access)
5. Document attack chain with evidence

## Reference

- `reference/INDEX.md` - Router for AD attacks, privilege escalation, and exploit-dev scenarios (see `reference/scenarios/`)
- `reference/format-string-exploitation.md` - Format string read/write primitives, architecture differences, mitigation bypass
- `reference/heap-exploitation.md` - Modern glibc heap techniques (tcache poison, unsorted bin leak, environ stack leak, ROP)
