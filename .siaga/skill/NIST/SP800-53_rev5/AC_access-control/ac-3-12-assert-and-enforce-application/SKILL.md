---
name: "AC-3(12)_assert-and-enforce-application-access"
description: "Require applications to assert, as part of the installation process, the access needed to the following system applications and functions: [organiz..."
category: "authorization"
version: "5.2.0"
author: "siaga-official"
tags:
  - nist
  - sp800-53
  - rev5
  - ac-3-12
  - ac
  - enhancement
tech_stack:
  - aws
  - azure
  - gcp
  - linux
  - windows
cwe_ids:
  - CWE-284
chains_with:
  - CM-7
prerequisites:
  - AC-3
severity_boost:
  CM-7: "Chain with CM-7 for comprehensive security coverage"
sha256: c05ceb8304b69a69e77486d96ceb88c89934381c6d65ce1d39f1a8ad71bba932
signature: XVdb1HC7ejPaKu2a97vALhjEotUwKKZ0XoP8qwhTtCW7aKS36zkvCUY5yfU25Xf0cm/2FJarIAF57ZV7F2k7CA==
signed_by: siaga-official
---

# AC-3(12) Assert and Enforce Application Access

> **Enhancement of:** AC-3

## High-Level Description

**Family:** Access Control (AC)
**Framework:** NIST SP 800-53 Rev 5

Asserting and enforcing application access is intended to address applications that need to access existing system applications and functions, including user contacts, global positioning systems, cameras, keyboards, microphones, networks, phones, or other files.

## What to Check

- [ ] Verify AC-3(12) Assert and Enforce Application Access is documented in SSP
- [ ] Validate all 3 control requirements are implemented
- [ ] Confirm control is operating effectively
- [ ] Review evidence of continuous monitoring for AC-3(12)
- [ ] Verify enhancement builds upon base control AC-3

## How to Test

### Step 1: Review Documentation

Examine the System Security Plan (SSP) and related artifacts for AC-3(12) implementation details. Verify the organization has documented how this control is satisfied.

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

| Tool            | Purpose                                | Usage                      |
| --------------- | -------------------------------------- | -------------------------- |
| cloud-audit-mcp | Check IAM policies and access controls | `cloud_audit_iam_policies` |
| hackbrowser | Test web application access controls   | `hackbrowser`        |

## Remediation Guide

### Control Statement

Require applications to assert, as part of the installation process, the access needed to the following system applications and functions: [organization-defined];
Provide an enforcement mechanism to prevent unauthorized access; and
Approve access changes after initial installation of the application.

### Implementation Guidance

Asserting and enforcing application access is intended to address applications that need to access existing system applications and functions, including user contacts, global positioning systems, cameras, keyboards, microphones, networks, phones, or other files.

## Risk Assessment

| Finding                                                        | Severity | Impact                    |
| -------------------------------------------------------------- | -------- | ------------------------- |
| AC-3(12) Assert and Enforce Application Access not implemented | High     | Access Control            |
| AC-3(12) partially implemented                                 | Medium   | Incomplete Access Control |

## CWE Categories

| CWE ID  | Title                   |
| ------- | ----------------------- |
| CWE-284 | Improper Access Control |

## References

- [NIST SP 800-53 Rev 5 - AC-3(12)](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_1/home?element=ac-3.12)
- [NIST SP 800-53A Rev 5 (Assessment Procedures)](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final)
- [NIST SP 800-53 Rev 5 Full Catalog](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

## Checklist

- [ ] Control documented in SSP
- [ ] Implementation evidence collected
- [ ] Operating effectiveness validated
- [ ] Continuous monitoring in place
- [ ] Related controls (CM-7) reviewed
