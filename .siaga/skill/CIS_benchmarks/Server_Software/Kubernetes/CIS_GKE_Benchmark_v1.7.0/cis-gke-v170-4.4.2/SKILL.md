---
name: cis-gke-v170-4.4.2
description: "Consider external secret storage (Manual)"
category: cis-gke
version: "1.7.0"
author: siaga-official
tags: [cis, gke, kubernetes, gcp, secrets, encryption, environment-variables]
cis_id: "4.4.2"
cis_benchmark: "CIS Google Kubernetes Engine (GKE) Benchmark v1.7.0"
tech_stack: [kubernetes, gcp, gke]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 71dafaf87543454495eb4ddbaec24b145a99cdb68778140ee97099da0f2b834e
signature: Lq9woKPcCkLGEJnfnIkSa6R1HvzrqAX+/fCg6qOEG5yF8bHKFv27hH80ZAX4A7zmV9ofYd5ROYKDQvhjHhAKCA==
signed_by: siaga-official
---

# 4.4.2 Consider external secret storage (Manual)

## Profile Applicability

- Level 2

## Description

Consider the use of an external secrets storage and management system instead of using Kubernetes Secrets directly, if more complex secret management is required. Ensure the solution requires authentication to access secrets, has auditing of access to and use of secrets, and encrypts secrets. Some solutions also make it easier to rotate secrets.

## Rationale

Kubernetes supports secrets as first-class objects, but care needs to be taken to ensure that access to secrets is carefully limited. Using an external secrets provider can ease the management of access to secrets, especially where secrets are used across both Kubernetes and non-Kubernetes environments.

## Impact

None

## Audit

Review your secrets management implementation.

## Remediation

Refer to the secrets management options offered by the cloud service provider or a third-party secrets management solution.

## Default Value

By default, no external secret management is configured.

## References

1. https://kubernetes.io/docs/concepts/configuration/secret/
2. https://cloud.google.com/secret-manager/docs/overview

## CIS Controls

| Controls Version | Control            | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------ | ---- | ---- | ---- |
| v8               | 3 Data Protection  |      |      |      |
| v7               | 13 Data Protection |      |      |      |
