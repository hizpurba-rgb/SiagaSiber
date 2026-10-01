---
name: cis-k8s-v1111-5.4.2
description: "Consider external secret storage (Manual)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, policies, secrets, encryption]
cis_id: "5.4.2"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 4901c7456029a8a6b394429a82f849666f02bf9c292bb9391ab0c23a8973914a
signature: uhpMXQ7sZLnCaU5P8nPuv/V/36su8IcNwyjqC32TgZ642am0y019wALPxdDXn6Y5qWomAjMDVOWowH7KnU74CA==
signed_by: siaga-official
---

# 5.4.2 Consider external secret storage (Manual)

## Profile Applicability

- Level 2 - Master Node

## Description

Consider the use of an external secrets storage and management system, instead of using Kubernetes Secrets directly, if you have more complex secret management needs. Ensure the solution requires authentication to access secrets, has auditing of access to and use of secrets, and encrypts secrets. Some solutions also make it easier to rotate secrets.

## Rationale

Kubernetes supports secrets as first-class objects, but care needs to be taken to ensure that access to secrets is carefully limited. Using an external secrets provider can ease the management of access to secrets, especially where secrets are used across both Kubernetes and non-Kubernetes environments.

## Impact

None

## Audit

Review your secrets management implementation.

## Remediation

Refer to the secrets management options offered by your cloud provider or a third-party secrets management solution.

## Default Value

By default, no external secret management is configured.

## References

None

## CIS Controls

| Controls Version | Control            | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------ | ---- | ---- | ---- |
| v8               | 3 Data Protection  |      |      |      |
| v7               | 13 Data Protection |      |      |      |
