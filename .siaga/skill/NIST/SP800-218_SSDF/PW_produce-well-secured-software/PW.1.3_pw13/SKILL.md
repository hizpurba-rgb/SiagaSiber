---
name: "PW.1.3_pw13"
description: "Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log m..."
category: "input-validation"
version: "1.1"
author: "siaga-official"
tags:
  - nist
  - sp800-218
  - ssdf
  - pw-1-3
  - pw
  - secure-development
  - task
tech_stack:
  - any
cwe_ids:
  - CWE-20
chains_with: []
prerequisites:
  - Design Software to Meet Security Requirements and Mitigate Security Risks (PW.1)
severity_boost: {}
sha256: 78c83a5b507b32477f1bd1a270290198d51e75dbad21f9fe190e2f9fa841f4f8
signature: KTRI4WjKC+XWAGEUyACCtqv0jBZ8IR4JePK1Y04VmQQmyqkTChQfyRJ7BpL8NkXI6HJz7Bp5QRzvsfcv4NWSAQ==
signed_by: siaga-official
---

# PW.1.3 PW.1.3

> **Task of practice:** Design Software to Meet Security Requirements and Mitigate Security Risks (PW.1)

## High-Level Description

**Practice Group:** Produce Well-Secured Software (PW)
**Framework:** NIST SP 800-218 SSDF v1.1

Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services. .Formerly PW.4.3

## What to Check

- [ ] Verify PW.1.3 PW.1.3 is integrated into SDLC
- [ ] Review CI/CD pipeline for PW.1.3 implementation
- [ ] Confirm automated tooling supports this practice

## How to Test

### Step 1: Review SDLC Documentation

Examine development lifecycle documentation for evidence of PW.1.3 practice implementation.

### Step 2: Verify Tooling

```
# Check CI/CD pipeline configuration
# Verify security tools are integrated

# Example: Check for SAST/DAST in pipeline
grep -r "security\|scan\|sast\|dast" .github/workflows/ 2>/dev/null
grep -r "security\|scan" Jenkinsfile 2>/dev/null
```

### Step 3: Assess Developer Awareness

Verify development team understands and follows PW.1.3 PW.1.3 practice.

## Tools

| Tool                | Purpose                            | Usage                        |
| ------------------- | ---------------------------------- | ---------------------------- |
| github-security-mcp | Check repository security settings | `github_security_*` tools    |
| Manual Review       | SDLC process review                | Documentation and interviews |

## Remediation Guide

Implement PW.1.3 PW.1.3 in the software development lifecycle:

Where appropriate, build in support for using standardized security features and services (e.g., enabling software to integrate with existing log management, identity management, access control, and vulnerability management systems) instead of creating proprietary implementations of security features and services. .Formerly PW.4.3

## Risk Assessment

| Finding                       | Severity | Impact                                             |
| ----------------------------- | -------- | -------------------------------------------------- |
| PW.1.3 PW.1.3 not implemented | Medium   | Secure Development - Produce Well-Secured Software |

## CWE Categories

| CWE ID | Title                     |
| ------ | ------------------------- |
| CWE-20 | Improper Input Validation |

## References

- [NIST SP 800-218 SSDF v1.1](https://csrc.nist.gov/pubs/sp/800/218/final)
- [NIST SSDF Practices](https://csrc.nist.gov/projects/ssdf)
- [NIST OSCAL Content](https://github.com/usnistgov/oscal-content)

## Checklist

- [ ] Practice documented in SDLC policy
- [ ] Tooling configured and operational
- [ ] Development team trained
- [ ] Evidence of consistent application
- [ ] Periodic review scheduled
