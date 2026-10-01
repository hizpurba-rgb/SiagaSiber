---
name: cis-k8s-v1110-5.1.9
description: "Minimize access to create persistent volumes (Manual)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, policies, rbac, service-accounts, persistent-volumes]
cis_id: "5.1.9"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 23f09c0744d76bc2ce210cc32cd63b53fcf23fc5541bef44091fdde24d79c841
signature: E67t1Zs01ime3yfC4aJx+3wM6uXGKHTfaL90l6ncuZVBLIpz6GFbrp9CsZrqg9TdXMz1hXTiJHV7M/UUb3XDBw==
signed_by: siaga-official
---

# 5.1.9 Minimize access to create persistent volumes (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

The ability to create persistent volumes in a cluster can provide an opportunity for privilege escalation, via the creation of `hostPath` volumes. As persistent volumes are not covered by Pod Security Admission, a user with access to create persistent volumes may be able to get access to sensitive files from the underlying host even where restrictive Pod Security Admission policies are in place.

## Rationale

The ability to create persistent volumes in a cluster opens up possibilities for privilege escalation and should be restricted, where possible.

## Audit

Review the users who have create access to `PersistentVolume` objects in the Kubernetes API.

## Remediation

Where possible, remove `create` access to `PersistentVolume` objects in the cluster.

## References

1. https://kubernetes.io/docs/concepts/security/rbac-good-practices/#persistent-volume-creation
