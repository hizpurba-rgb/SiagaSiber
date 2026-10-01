---
name: cis-k8s-v1110-5.2.7
description: "Minimize the admission of root containers (Manual)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, root-containers]
cis_id: "5.2.7"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: ab1a40f6f855818c178b346bb9d0958b3f49b5825fd006d2c1de7691edf10a8d
signature: jwH8bFHhZmQtwS+nNUCmIdTrBi06FSEPMB+5haMoB9+7pfaCq785D+oDyxtiAdlUjXefza9F8AbVx1wpYOL7Dw==
signed_by: siaga-official
---

# 5.2.7 Minimize the admission of root containers (Manual)

## Profile Applicability

- Level 2 - Master Node

## Description

Do not generally permit containers to be run as the root user.

## Rationale

Containers may run as any Linux user. Containers which run as the root user, whilst constrained by Container Runtime security features still have a escalated likelihood of container breakout.

Ideally, all containers should run as a defined non-UID 0 user.

There should be at least one admission control policy defined which does not permit root containers.

If you need to run root containers, this should be defined in a separate policy and you should carefully check to ensure that only limited service accounts and users are given permission to use that policy.

## Impact

Pods with containers which run as the root user will not be permitted.

## Audit

List the policies in use for each namespace in the cluster, ensure that each policy restricts the use of root containers by setting `MustRunAsNonRoot` or `MustRunAs` with the range of UIDs not including 0.

## Remediation

Create a policy for each namespace in the cluster, ensuring that either `MustRunAsNonRoot` or `MustRunAs` with the range of UIDs not including 0, is set.

## Default Value

By default, there are no restrictions on the use of root containers and if a User is not specified in the image, the container will run as root.

## References

1. https://kubernetes.io/docs/concepts/security/pod-security-standards/
