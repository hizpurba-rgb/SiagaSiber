---
name: cis-k8s-v1111-5.2.4
description: "Minimize the admission of containers wishing to share the host IPC namespace (Manual)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, pod-security-standards, host-ipc]
cis_id: "5.2.4"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d9e9091775e66918f28e419a77a9509f58d91f70035c4f9b52a14bb35fb6917a
signature: T2DYrXTunvgJaZzDbvm/rAvK3pGXwKaZ32roE+zgJ4Ieob5Fx+rjPW6vERyUGdYp7mjQK5a9CsZ07DJEede+Dw==
signed_by: siaga-official
---

# 5.2.4 Minimize the admission of containers wishing to share the host IPC namespace (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Do not generally permit containers to be run with the `hostIPC` flag set to true.

## Rationale

A container running in the host's IPC namespace can use IPC to interact with processes outside the container.

There should be at least one admission control policy defined which does not permit containers to share the host IPC namespace.

If you need to run containers which require hostIPC, this should be defined in a separate policy and you should carefully check to ensure that only limited service accounts and users are given permission to use that policy.

## Impact

Pods defined with `spec.hostIPC: true` will not be permitted unless they are run under a specific policy.

## Audit

To fetch hostIPC from each pod:

```bash
kubectl get pods -A -o=jsonpath=$'{range .items[*]}{@.metadata.name}: {@.spec.hostIPC}\n{end}'
```

## Remediation

Add policies to each namespace in the cluster which has user workloads to restrict the admission of `hostIPC` containers.

## Default Value

By default, there are no restrictions on the creation of `hostIPC` containers.

## References

1. https://kubernetes.io/docs/concepts/security/pod-security-standards/

## CIS Controls

| Controls Version | Control                                                       | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.12 Segment Data Processing and Storage Based on Sensitivity |      | X    | X    |
| v7               | 14.1 Segment the Network Based on Sensitivity                 |      | X    | X    |
