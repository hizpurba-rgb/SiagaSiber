---
name: "CA-3(5)_restrictions-on-external-system-connections"
description: "Restrictions on External System Connections"
category: "configuration"
version: "5.2.0"
author: "siaga-official"
tags:
  - nist
  - sp800-53
  - rev5
  - ca-3-5
  - ca
  - enhancement
tech_stack:
  - any
cwe_ids: []
chains_with: []
prerequisites:
  - CA-3
severity_boost: {}
sha256: 291c233211af6c123f1a447f3ba73cdb0862df7789761d222ee92b7f23e52b22
signature: CjODQPR7Rk/w5gvwENYmt8aOv2EbWrvdObkiTQR8WugYEZmRxe18Izxbg7FL9agqiQTG/BBMXXDzrzovedEKBw==
signed_by: siaga-official
---

# CA-3(5) Restrictions on External System Connections

> **Enhancement of:** CA-3

## High-Level Description

**Family:** Assessment, Authorization, and Monitoring (CA)
**Framework:** NIST SP 800-53 Rev 5

No description available.

## What to Check

- [ ] Verify CA-3(5) Restrictions on External System Connections is documented in SSP
- [ ] Confirm control is operating effectively
- [ ] Review evidence of continuous monitoring for CA-3(5)
- [ ] Verify enhancement builds upon base control CA-3

## How to Test

### Step 1: Review Documentation

Examine the System Security Plan (SSP) and related artifacts for CA-3(5) implementation details. Verify the organization has documented how this control is satisfied.

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

| Tool          | Purpose                           | Usage |
| ------------- | --------------------------------- | ----- |
| Manual Review | Documentation and interview-based | N/A   |

## Remediation Guide

### Control Statement

Refer to NIST SP 800-53 Rev 5 for the full control statement.

### Implementation Guidance

Implement this control per organizational risk assessment and system categorization.

## Risk Assessment

| Finding                                                             | Severity | Impact                                               |
| ------------------------------------------------------------------- | -------- | ---------------------------------------------------- |
| CA-3(5) Restrictions on External System Connections not implemented | Medium   | Assessment, Authorization, and Monitoring            |
| CA-3(5) partially implemented                                       | Low      | Incomplete Assessment, Authorization, and Monitoring |

## CWE Categories

| CWE ID | Title                 |
| ------ | --------------------- |
| N/A    | No direct CWE mapping |

## References

- [NIST SP 800-53 Rev 5 - CA-3(5)](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_1/home?element=ca-3.5)
- [NIST SP 800-53A Rev 5 (Assessment Procedures)](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final)
- [NIST SP 800-53 Rev 5 Full Catalog](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

## Checklist

- [ ] Control documented in SSP
- [ ] Implementation evidence collected
- [ ] Operating effectiveness validated
- [ ] Continuous monitoring in place
- [ ] Related controls (none) reviewed
