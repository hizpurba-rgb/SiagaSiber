---
name: "RS.AN-06_rsan-06"
description: "Actions performed during an investigation are recorded, and the records' integrity and provenance are preserved"
category: "configuration"
version: "2.0"
author: "siaga-official"
tags:
  - nist
  - csf
  - v2.0
  - rs-an-06
  - rs
  - subcategory
tech_stack:
  - any
cwe_ids: []
chains_with: []
prerequisites:
  - Incident Analysis (RS.AN)
severity_boost: {}
sha256: d79fc851a0e1b3b4dedc4325814d9e006c470569793a68bc994b58507017082c
signature: zNFhuRr444WLnC5kdc8FtBq7X219YYDbj2aD1evP7Bn8lwV1J3ZC/DkDlD8je3y+W4DBvE+UaRIg8iQjE4NFAw==
signed_by: siaga-official
---

# RS.AN-06 RS.AN-06

> **Subcategory of:** Incident Analysis (RS.AN)

## High-Level Description

**Function:** RESPOND (RS)
**Framework:** NIST Cybersecurity Framework v2.0

Actions performed during an investigation are recorded, and the records' integrity and provenance are preserved

## What to Check

- [ ] Verify RS.AN-06 RS.AN-06 outcome is achieved
- [ ] Review documentation and evidence for RS.AN-06
- [ ] Assess organizational maturity for RESPOND function
- [ ] Map to SP 800-53 controls that satisfy RS.AN-06

## How to Test

### Step 1: Identify Current Profile

Determine the organization's current and target CSF profile tier for RS.AN-06.

### Step 2: Assess Outcome Achievement

```
# Review organizational policies and procedures
# Check for evidence that RS.AN-06 outcome is met
# Interview stakeholders responsible for RESPOND
```

### Step 3: Map to Technical Controls

Identify which SP 800-53 controls implement this CSF outcome and verify their operating effectiveness.

## Tools

| Tool            | Purpose                       | Usage                        |
| --------------- | ----------------------------- | ---------------------------- |
| cloud-audit-mcp | Assess cloud security posture | `cloud_audit_*` tools        |
| Manual Review   | Policy and procedure review   | Interviews and documentation |

## Remediation Guide

Achieve the RS.AN-06 RS.AN-06 outcome:

Actions performed during an investigation are recorded, and the records' integrity and provenance are preserved

## Risk Assessment

| Finding                                | Severity | Impact               |
| -------------------------------------- | -------- | -------------------- |
| RS.AN-06 RS.AN-06 outcome not achieved | Medium   | RESPOND Function Gap |

## CWE Categories

| CWE ID | Title                 |
| ------ | --------------------- |
| N/A    | No direct CWE mapping |

## References

- [NIST CSF v2.0](https://www.nist.gov/cyberframework)
- [NIST CSF v2.0 Reference Tool](https://csrc.nist.gov/projects/cybersecurity-framework/filters#/csf/filters)
- [CSF 2.0 Quick Start Guides](https://www.nist.gov/cyberframework/getting-started)

## Checklist

- [ ] Current profile tier assessed
- [ ] Target profile tier defined
- [ ] Gap analysis completed
- [ ] SP 800-53 control mapping verified
- [ ] Implementation roadmap exists
