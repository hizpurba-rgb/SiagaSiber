---
name: cis-k8s-v200-5.1.11
description: "Minimize access to the approval sub-resource of certificatesigningrequests objects (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, rbac, service-accounts, certificate-signing, csr-approval, privilege-escalation]
cis_id: "5.1.11"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: dae7409e41fa943a4c13ba8b2309834724ea831f565446cf3e52f3fd8209e904
signature: e0qJ3/DL2DjpskZ8LP4G0jDf6W/cYJiH+WWS69SztMY6tHXwPQ7BHztEND0p9io0LHW+Qa0hybe3I7uV4ATtBQ==
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
