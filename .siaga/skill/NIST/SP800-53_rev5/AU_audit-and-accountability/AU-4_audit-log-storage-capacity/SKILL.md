---
name: "AU-4_audit-log-storage-capacity"
description: "Allocate audit log storage capacity to accommodate [organization-defined]."
category: "information-gathering"
version: "5.2.0"
author: "siaga-official"
tags:
  - nist
  - sp800-53
  - rev5
  - au-4
  - au
tech_stack:
  - aws
  - azure
  - gcp
  - linux
  - windows
cwe_ids:
  - CWE-778
chains_with:
  - AU-2
  - AU-5
  - AU-6
  - AU-7
  - AU-9
  - AU-11
  - AU-12
  - AU-14
  - SI-4
prerequisites: []
severity_boost:
  AU-2: "Chain with AU-2 for comprehensive security coverage"
  AU-5: "Chain with AU-5 for comprehensive security coverage"
  AU-6: "Chain with AU-6 for comprehensive security coverage"
sha256: 0db5425648706910e05bcb199c779de75e120650dccd061ec5d2d56a2ec204a6
signature: 37e2Jm1nDSXTI53eIRYK+6dLwTZiY5NDvzXcR6Uzbxz1iB9HfiZMcBq+LS6dtqlGk4Y3BccdQt7CelMBWu0bAw==
signed_by: siaga-official
---

# AU-4 Audit Log Storage Capacity

## High-Level Description

**Family:** Audit and Accountability (AU)
**Framework:** NIST SP 800-53 Rev 5

Organizations consider the types of audit logging to be performed and the audit log processing requirements when allocating audit log storage capacity. Allocating sufficient audit log storage capacity reduces the likelihood of such capacity being exceeded and resulting in the potential loss or reduction of audit logging capability.

## What to Check

- [ ] Verify AU-4 Audit Log Storage Capacity is documented in SSP
- [ ] Confirm control is operating effectively
- [ ] Review evidence of continuous monitoring for AU-4

## How to Test

### Step 1: Review Documentation

Examine the System Security Plan (SSP) and related artifacts for AU-4 implementation details. Verify the organization has documented how this control is satisfied.

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

| Tool            | Purpose                      | Usage                            |
| --------------- | ---------------------------- | -------------------------------- |
| cloud-audit-mcp | Check logging configuration  | `cloud_audit_logging`            |
| AWS CLI         | Review CloudTrail/CloudWatch | `aws cloudtrail describe-trails` |

## Remediation Guide

### Control Statement

Allocate audit log storage capacity to accommodate [organization-defined].

### Implementation Guidance

Organizations consider the types of audit logging to be performed and the audit log processing requirements when allocating audit log storage capacity. Allocating sufficient audit log storage capacity reduces the likelihood of such capacity being exceeded and resulting in the potential loss or reduction of audit logging capability.

## Risk Assessment

| Finding                                         | Severity | Impact                              |
| ----------------------------------------------- | -------- | ----------------------------------- |
| AU-4 Audit Log Storage Capacity not implemented | Medium   | Audit and Accountability            |
| AU-4 partially implemented                      | Low      | Incomplete Audit and Accountability |

## CWE Categories

| CWE ID  | Title                |
| ------- | -------------------- |
| CWE-778 | Insufficient Logging |

## References

- [NIST SP 800-53 Rev 5 - AU-4](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_1/home?element=au-4)
- [NIST SP 800-53A Rev 5 (Assessment Procedures)](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final)
- [NIST SP 800-53 Rev 5 Full Catalog](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

## Checklist

- [ ] Control documented in SSP
- [ ] Implementation evidence collected
- [ ] Operating effectiveness validated
- [ ] Continuous monitoring in place
- [ ] Related controls (AU-2, AU-5, AU-6, AU-7, AU-9) reviewed
