---
name: "DE.DP-02_dedp-02"
description: "Detection activities comply with all applicable requirements"
category: "information-gathering"
version: "2.0"
author: "siaga-official"
tags:
  - nist
  - csf
  - v2.0
  - de-dp-02
  - de
  - subcategory
tech_stack:
  - aws
  - azure
  - gcp
  - siem
cwe_ids:
  - CWE-778
chains_with: []
prerequisites:
  - Detection Processes (DE.DP)
severity_boost: {}
sha256: e68ce5b70af73dfa5712c14058f8ef67bd1beea4c3d5a0b8c56cf236fbf829d1
signature: x9jk9VNq5tl9dLZsx5fRJ2Qh9EMJ+k3GOf2h8pvA0ZRE72ktXHmzsJg0u/PaOE88/ZbYh+KKj7yn5DM58aNxBg==
signed_by: siaga-official
---

# DE.DP-02 DE.DP-02

> **Subcategory of:** Detection Processes (DE.DP)

## High-Level Description

**Function:** DETECT (DE)
**Framework:** NIST Cybersecurity Framework v2.0

Detection activities comply with all applicable requirements

## What to Check

- [ ] Verify DE.DP-02 DE.DP-02 outcome is achieved
- [ ] Review documentation and evidence for DE.DP-02
- [ ] Assess organizational maturity for DETECT function
- [ ] Map to SP 800-53 controls that satisfy DE.DP-02

## How to Test

### Step 1: Identify Current Profile

Determine the organization's current and target CSF profile tier for DE.DP-02.

### Step 2: Assess Outcome Achievement

```
# Review organizational policies and procedures
# Check for evidence that DE.DP-02 outcome is met
# Interview stakeholders responsible for DETECT
```

### Step 3: Map to Technical Controls

Identify which SP 800-53 controls implement this CSF outcome and verify their operating effectiveness.

## Tools

| Tool            | Purpose                       | Usage                        |
| --------------- | ----------------------------- | ---------------------------- |
| cloud-audit-mcp | Assess cloud security posture | `cloud_audit_*` tools        |
| Manual Review   | Policy and procedure review   | Interviews and documentation |

## Remediation Guide

Achieve the DE.DP-02 DE.DP-02 outcome:

Detection activities comply with all applicable requirements

## Risk Assessment

| Finding                                | Severity | Impact              |
| -------------------------------------- | -------- | ------------------- |
| DE.DP-02 DE.DP-02 outcome not achieved | High     | DETECT Function Gap |

## CWE Categories

| CWE ID  | Title                |
| ------- | -------------------- |
| CWE-778 | Insufficient Logging |

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
