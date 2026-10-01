---
name: cis-k8s-v1110-5.1.13
description: "Minimize access to the service account token creation (Manual)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, policies, rbac, service-accounts, token-creation]
cis_id: "5.1.13"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 237af2e9a15e6b946fc2079185736dba12f9145639251ac1a74748cb2fbe2041
signature: e7BaiaZK4GPdO7Ku6KSnOmI8sruJGH/OH5GVtqU7iIBO6bwP1NqVGB8L0EZnMzYWA9J8dKSikUETNLDzd7MzDg==
signed_by: siaga-official
---

# 5.1.13 Minimize access to the service account token creation (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Users with rights to create new service account tokens at a cluster level, can create long-lived privileged credentials in the cluster. This could allow for privilege escalation and persistent access to the cluster, even if the users account has been revoked.

## Rationale

The ability to create service account tokens should be limited.

## Audit

Review the users who have access to create the `token` sub-resource of `serviceaccount` objects in the Kubernetes API.

## Remediation

Where possible, remove access to the `token` sub-resource of `serviceaccount` objects.

## References

1. https://kubernetes.io/docs/concepts/security/rbac-good-practices/#token-request
