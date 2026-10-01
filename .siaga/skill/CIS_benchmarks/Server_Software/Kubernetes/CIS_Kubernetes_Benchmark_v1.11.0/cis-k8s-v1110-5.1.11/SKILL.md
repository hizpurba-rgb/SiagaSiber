---
name: cis-k8s-v1110-5.1.11
description: "Minimize access to the approval sub-resource of certificatesigningrequests objects (Manual)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, policies, rbac, service-accounts, csr-approval]
cis_id: "5.1.11"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 347ec40364e5408d7c3f51ade039bfd4fb37cd890975aaa851d355f0136f6fe0
signature: nApJzetARmQ/Ckmmr+dCDG1MS9ctdIKjHZXcQ7GKVVu55l38XjOR7xgFyZ6Q3Nb38PzfalVzCRC1JeDRjSbxBA==
signed_by: siaga-official
---

# 5.1.11 Minimize access to the approval sub-resource of certificatesigningrequests objects (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Users with access to the update the `approval` sub-resource of `CertificateSigningRequests` objects can approve new client certificates for the Kubernetes API effectively allowing them to create new high-privileged user accounts.

This can allow for privilege escalation to full cluster administrator, depending on users configured in the cluster.

## Rationale

The ability to update certificate signing requests should be limited.

## Audit

Review the users who have access to update the `approval` sub-resource of `CertificateSigningRequests` objects in the Kubernetes API.

## Remediation

Where possible, remove access to the `approval` sub-resource of `CertificateSigningRequests` objects.

## References

1. https://kubernetes.io/docs/concepts/security/rbac-good-practices/#csrs-and-certificate-issuing
