---
name: "SA-13_trustworthiness"
description: "Trustworthiness"
category: "configuration"
version: "5.2.0"
author: "siaga-official"
tags:
  - nist
  - sp800-53
  - rev5
  - sa-13
  - sa
tech_stack:
  - any
cwe_ids:
  - CWE-16
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 70f264081beea2f4569ce10363053145d4f004e9384d9323f3550f60b5966c05
signature: kkIuG1LxE+4+xeVkSpC32ZkWy/kYnWYyovqxatPL3Q6Bkce9jKTV3wlef9n03ajFdtFXHbO4p42A8Vgx/Ua2DA==
signed_by: siaga-official
---

# SA-13 Trustworthiness

## High-Level Description

**Family:** System and Services Acquisition (SA)
**Framework:** NIST SP 800-53 Rev 5

No description available.

## What to Check

- [ ] Verify SA-13 Trustworthiness is documented in SSP
- [ ] Confirm control is operating effectively
- [ ] Review evidence of continuous monitoring for SA-13

## How to Test

### Step 1: Review Documentation

Examine the System Security Plan (SSP) and related artifacts for SA-13 implementation details. Verify the organization has documented how this control is satisfied.

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

| Finding                               | Severity | Impact                                     |
| ------------------------------------- | -------- | ------------------------------------------ |
| SA-13 Trustworthiness not implemented | Medium   | System and Services Acquisition            |
| SA-13 partially implemented           | Low      | Incomplete System and Services Acquisition |

## CWE Categories

| CWE ID | Title         |
| ------ | ------------- |
| CWE-16 | Configuration |

## References

- [NIST SP 800-53 Rev 5 - SA-13](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_1/home?element=sa-13)
- [NIST SP 800-53A Rev 5 (Assessment Procedures)](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final)
- [NIST SP 800-53 Rev 5 Full Catalog](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

## Checklist

- [ ] Control documented in SSP
- [ ] Implementation evidence collected
- [ ] Operating effectiveness validated
- [ ] Continuous monitoring in place
- [ ] Related controls (none) reviewed
