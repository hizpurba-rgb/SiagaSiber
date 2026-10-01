---
name: "IA-12(4)_in-person-validation-and-verification"
description: "Require that the validation and verification of identity evidence be conducted in person before a designated registration authority."
category: "authentication"
version: "5.2.0"
author: "siaga-official"
tags:
  - nist
  - sp800-53
  - rev5
  - ia-12-4
  - ia
  - enhancement
tech_stack:
  - aws
  - azure
  - active-directory
  - linux
  - windows
cwe_ids:
  - CWE-287
chains_with: []
prerequisites:
  - IA-12
severity_boost: {}
sha256: 24b6659bf9e2f5a2f7b8209c943771a9f748d26ec38a52f4b7160cd8efac6ff9
signature: jvigb0Tyxf7T5zsv9pw0aMlwS5fDq4LO3NTN6HgId3HbRw3h9S+hcHaGdqs4gbhAImJ0tvr637WEwA/qqpZgBA==
signed_by: siaga-official
---

# IA-12(4) In-person Validation and Verification

> **Enhancement of:** IA-12

## High-Level Description

**Family:** Identification and Authentication (IA)
**Framework:** NIST SP 800-53 Rev 5

In-person proofing reduces the likelihood of fraudulent credentials being issued because it requires the physical presence of individuals, the presentation of physical identity documents, and actual face-to-face interactions with designated registration authorities.

## What to Check

- [ ] Verify IA-12(4) In-person Validation and Verification is documented in SSP
- [ ] Confirm control is operating effectively
- [ ] Review evidence of continuous monitoring for IA-12(4)
- [ ] Verify enhancement builds upon base control IA-12

## How to Test

### Step 1: Review Documentation

Examine the System Security Plan (SSP) and related artifacts for IA-12(4) implementation details. Verify the organization has documented how this control is satisfied.

### Step 2: Validate Implementation

```
# For cloud environments, use cloud-audit-mcp tools
# For on-premises, review system configurations directly

# Example: Check if account management policies exist
grep -r "account.management\|access.control" /etc/security/ 2>/dev/null
```

### Step 3: Test Operating Effectiveness

Verify the control is actively functioning, not just documented. Check logs, configurations, and operational evidence.

## Tools

| Tool            | Purpose                        | Usage                      |
| --------------- | ------------------------------ | -------------------------- |
| cloud-audit-mcp | Check authentication settings  | `cloud_audit_iam_policies` |
| hackbrowser | Test authentication mechanisms | `hackbrowser`        |

## Remediation Guide

### Control Statement

Require that the validation and verification of identity evidence be conducted in person before a designated registration authority.

### Implementation Guidance

In-person proofing reduces the likelihood of fraudulent credentials being issued because it requires the physical presence of individuals, the presentation of physical identity documents, and actual face-to-face interactions with designated registration authorities.

## Risk Assessment

| Finding                                                        | Severity | Impact                                       |
| -------------------------------------------------------------- | -------- | -------------------------------------------- |
| IA-12(4) In-person Validation and Verification not implemented | High     | Identification and Authentication            |
| IA-12(4) partially implemented                                 | Medium   | Incomplete Identification and Authentication |

## CWE Categories

| CWE ID  | Title                   |
| ------- | ----------------------- |
| CWE-287 | Improper Authentication |

## References

- [NIST SP 800-53 Rev 5 - IA-12(4)](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_1/home?element=ia-12.4)
- [NIST SP 800-53A Rev 5 (Assessment Procedures)](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final)
- [NIST SP 800-53 Rev 5 Full Catalog](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

## Checklist

- [ ] Control documented in SSP
- [ ] Implementation evidence collected
- [ ] Operating effectiveness validated
- [ ] Continuous monitoring in place
- [ ] Related controls (none) reviewed
