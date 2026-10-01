---
name: cis-k8s-v200-5.4.2
description: "Consider external secret storage (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, secrets-management, external-secrets, vault, encryption]
cis_id: "5.4.2"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: f7e4b790fa53cb3a2062d8a7228ed7c29cc743deee084b32d15d23f5be2cc66f
signature: t12lJyPMD3kdnyH2U+EmVoPr+0dqtoVaO4r8KBJ3ciEA6kQvM4jySmTfFbis3MLrOoE4u/J9pbLDu3bWcoEzBw==
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
