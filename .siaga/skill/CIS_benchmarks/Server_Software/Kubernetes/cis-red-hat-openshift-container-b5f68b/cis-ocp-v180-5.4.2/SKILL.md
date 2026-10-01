---
name: cis-ocp-v180-5.4.2
description: "Consider external secret storage (Manual)"
category: cis-openshift
version: "1.8.0"
author: siaga-official
tags: [cis, openshift, kubernetes, redhat, policies, secrets-management]
cis_id: "5.4.2"
cis_benchmark: "CIS Red Hat OpenShift Container Platform Benchmark v1.8.0"
tech_stack: [kubernetes, openshift, redhat]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 86c6ea25bf567bed97cd0867e0991d93bd50358a2dbd16273172de2ef24053ca
signature: KXkFnmhB5gUbfg0JS0QIsEscnZyBeoV0BIolJeJMfKCL7FZxDQvHmPft1hvNfSABjBMfgQsA/rkOBZpxjaO8Dw==
signed_by: siaga-official
---

# CIS Red Hat OpenShift Container Platform Benchmark v1.8.0 - Control 5.4.2

## Profile Applicability

- **Level:** 2

## Description

Consider the use of an external secrets storage and management system, instead of using Kubernetes Secrets directly, if you have more complex secret management needs. Ensure the solution requires authentication to access secrets, has auditing of access to and use of secrets, and encrypts secrets. Some solutions also make it easier to rotate secrets.

## Rationale

Kubernetes supports secrets as first-class objects, but care needs to be taken to ensure that access to secrets is carefully limited. Using an external secrets provider can ease the management of access to secrets, especially where secrets are used across both Kubernetes and non-Kubernetes environments.

## Impact

None

## Audit Procedure

OpenShift supports a broad ecosystem of security partners many of whom provide integration with enterprise secret vaults.

Review your secrets management implementation.

## Remediation

Refer to the secrets management options offered by your cloud provider or a third-party secrets management solution.

## Default Value

By default, no external secret management is configured.

## CIS Controls

| Controls Version | Control                                                       | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.12 Segment Data Processing and Storage Based on Sensitivity |      | \*   | \*   |
| v7               | 14.6 Protect Information through Access Control Lists         | \*   | \*   | \*   |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques | Tactics | Mitigations |
| --------------------------- | ------- | ----------- |
| T1552                       | TA0006  | M1026       |

## Profile

**Level 2** (Manual)
