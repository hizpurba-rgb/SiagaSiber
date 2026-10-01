---
name: cis-k8s-v1111-5.2.7
description: "Minimize the admission of root containers (Manual)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, pod-security-standards, root-containers]
cis_id: "5.2.7"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b010fe816f341a854b1b797eef7e7c52fe0c05da4fffd8c96e9a42d33fd3cfd0
signature: yoofkeNZDKOJ5VIhJ4IsGAt7T6rXUXtazD+7ldxE1N/0kRXRFtM2jsl1BMjdhQQti3O31wWcnua+sVm3gEUqAw==
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

## CIS Controls

| Controls Version | Control                                                                   | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts | X    | X    | X    |
| v7               | 4 Controlled Use of Administrative Privileges                             |      |      |      |
