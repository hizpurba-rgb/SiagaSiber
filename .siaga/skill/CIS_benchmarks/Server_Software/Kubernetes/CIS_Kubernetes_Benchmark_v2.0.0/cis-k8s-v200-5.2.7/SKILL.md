---
name: cis-k8s-v200-5.2.7
description: "Minimize the admission of root containers (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, root-containers, runasnonroot, container-breakout]
cis_id: "5.2.7"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: ae3c1499ad2487f51f8004894e34c67aab4096b9e83456a3ae69b1f2a9828668
signature: JWRUgVWBiBdAvKCCNgbo5z+VFlwLecgwMO+71vF7SIIGEx9UZg86W32bMnh7NUF1L4PzmZ8/MNhR+4tNM/UxCw==
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
