---
name: "PR.PT-05_prpt-05"
description: "Mechanisms (e.g., failsafe, load balancing, hot swap) are implemented to achieve resilience requirements in normal and adverse situations"
category: "authorization"
version: "2.0"
author: "siaga-official"
tags:
  - nist
  - csf
  - v2.0
  - pr-pt-05
  - pr
  - subcategory
tech_stack:
  - aws
  - azure
  - gcp
  - linux
  - windows
cwe_ids:
  - CWE-284
chains_with: []
prerequisites:
  - Protective Technology (PR.PT)
severity_boost: {}
sha256: 78018b88c8e4b47e15a9b1a7dbfcb911f4a453f0e747c51d8d6b40f5113294c5
signature: FGIbL5HRcZPO4hI3eCquS4L2NMue6hzHEn03DYOIoqRox1J10mty4BJ4rLCwNLYy7P63VUuBiOMjuFN6AFDMBg==
signed_by: siaga-official
---

# PR.PT-05 PR.PT-05

> **Subcategory of:** Protective Technology (PR.PT)

## High-Level Description

**Function:** PROTECT (PR)
**Framework:** NIST Cybersecurity Framework v2.0

Mechanisms (e.g., failsafe, load balancing, hot swap) are implemented to achieve resilience requirements in normal and adverse situations

## What to Check

- [ ] Verify PR.PT-05 PR.PT-05 outcome is achieved
- [ ] Review documentation and evidence for PR.PT-05
- [ ] Assess organizational maturity for PROTECT function
- [ ] Map to SP 800-53 controls that satisfy PR.PT-05

## How to Test

### Step 1: Identify Current Profile

Determine the organization's current and target CSF profile tier for PR.PT-05.

### Step 2: Assess Outcome Achievement

```
# Review organizational policies and procedures
# Check for evidence that PR.PT-05 outcome is met
# Interview stakeholders responsible for PROTECT
```

### Step 3: Map to Technical Controls

Identify which SP 800-53 controls implement this CSF outcome and verify their operating effectiveness.

## Tools

| Tool            | Purpose                       | Usage                        |
| --------------- | ----------------------------- | ---------------------------- |
| cloud-audit-mcp | Assess cloud security posture | `cloud_audit_*` tools        |
| Manual Review   | Policy and procedure review   | Interviews and documentation |

## Remediation Guide

Achieve the PR.PT-05 PR.PT-05 outcome:

Mechanisms (e.g., failsafe, load balancing, hot swap) are implemented to achieve resilience requirements in normal and adverse situations

## Risk Assessment

| Finding                                | Severity | Impact               |
| -------------------------------------- | -------- | -------------------- |
| PR.PT-05 PR.PT-05 outcome not achieved | High     | PROTECT Function Gap |

## CWE Categories

| CWE ID  | Title                   |
| ------- | ----------------------- |
| CWE-284 | Improper Access Control |

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
