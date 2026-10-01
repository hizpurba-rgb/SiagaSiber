---
name: "DE.DP-01_dedp-01"
description: "Roles and responsibilities for detection are well defined to ensure accountability"
category: "information-gathering"
version: "2.0"
author: "siaga-official"
tags:
  - nist
  - csf
  - v2.0
  - de-dp-01
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
sha256: af5212f2b65ec85daeb71b5877e7579355acc31fda2b0028ed0f3833e880751d
signature: sSB9kOonFN4T1bVdfeq39/ptblobxtb3BPZudQeyhCiZWUiUjSD9R+p8gVll7VPj5AuwFPzOQb2gC4gD4zwTCg==
signed_by: siaga-official
---

# DE.DP-01 DE.DP-01

> **Subcategory of:** Detection Processes (DE.DP)

## High-Level Description

**Function:** DETECT (DE)
**Framework:** NIST Cybersecurity Framework v2.0

Roles and responsibilities for detection are well defined to ensure accountability

## What to Check

- [ ] Verify DE.DP-01 DE.DP-01 outcome is achieved
- [ ] Review documentation and evidence for DE.DP-01
- [ ] Assess organizational maturity for DETECT function
- [ ] Map to SP 800-53 controls that satisfy DE.DP-01

## How to Test

### Step 1: Identify Current Profile

Determine the organization's current and target CSF profile tier for DE.DP-01.

### Step 2: Assess Outcome Achievement

```
# Review organizational policies and procedures
# Check for evidence that DE.DP-01 outcome is met
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

Achieve the DE.DP-01 DE.DP-01 outcome:

Roles and responsibilities for detection are well defined to ensure accountability

## Risk Assessment

| Finding                                | Severity | Impact              |
| -------------------------------------- | -------- | ------------------- |
| DE.DP-01 DE.DP-01 outcome not achieved | High     | DETECT Function Gap |

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
