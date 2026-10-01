---
name: cis-k8s-v200-5.2.9
description: "Minimize the admission of containers with capabilities assigned (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, capabilities, least-privilege]
cis_id: "5.2.9"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 45a43fe21d03af26eddc7cb4ad71abb4a9ec153da5cd4019c7454bb6ca6f00ab
signature: KCVtw3Hhm67kD/iiCIK8+LbYoYEOH++8tSUNI4KVc2CYhhYaDDgYYhuJ8YqLpml2rSlHFp7/LbH3yNf4O7e0AA==
signed_by: siaga-official
---

# 5.2.9 Minimize the admission of containers with capabilities assigned (Manual)

## Profile Applicability

- Level 2 - Master Node

## Description

Do not generally permit containers with capabilities.

## Rationale

Containers run with a default set of capabilities as assigned by the Container Runtime. Capabilities are parts of the rights generally granted on a Linux system to the root user.

In many cases applications running in containers do not require any capabilities to operate, so from the perspective of the principal of least privilege use of capabilities should be minimized.

## Impact

Pods with containers require capabilities to operate will not be permitted.

## Audit

List the policies in use for each namespace in the cluster, ensure that at least one policy requires that capabilities are dropped by all containers.

## Remediation

Review the use of capabilities in applications running on your cluster. Where a namespace contains applications which do not require any Linux capabilities to operate consider adding a policy which forbids the admission of containers which do not drop all capabilities.

## Default Value

By default, there are no restrictions on the creation of containers with additional capabilities.

## References

1. https://kubernetes.io/docs/concepts/security/pod-security-standards/
2. https://www.nccgroup.trust/uk/our-research/abusing-privileged-and-unprivileged-linux-containers/
