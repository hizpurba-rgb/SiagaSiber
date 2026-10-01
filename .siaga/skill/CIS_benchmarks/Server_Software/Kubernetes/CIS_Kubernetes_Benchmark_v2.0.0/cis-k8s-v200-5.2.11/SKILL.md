---
name: cis-k8s-v200-5.2.11
description: "Minimize the admission of HostPath volumes (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, hostpath, volume-mounts, container-breakout]
cis_id: "5.2.11"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 193982fb03d1a0c3a97b1fc48612c6407b0ecafcb1af1d1b6c8ba0b53ac61123
signature: 7iXmfzcvupjvn3WBDeIrOj/8kgMxDvlqkDyjZJ9yo6k3kox+WwtBE+cE0oyuwi5ogrk98J3atKoo1NzmlctVCQ==
signed_by: siaga-official
---

# 5.2.11 Minimize the admission of HostPath volumes (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Do not generally admit containers which make use of `hostPath` volumes.

## Rationale

A container which mounts a `hostPath` volume as part of its specification will have access to the filesystem of the underlying cluster node. The use of `hostPath` volumes may allow containers access to privileged areas of the node filesystem.

There should be at least one admission control policy defined which does not permit containers to mount `hostPath` volumes.

If you need to run containers which require `hostPath` volumes, this should be defined in a separate policy and you should carefully check to ensure that only limited service accounts and users are given permission to use that policy.

## Impact

Pods defined which make use of `hostPath` volumes will not be permitted unless they are run under a specific policy.

## Audit

List the policies in use for each namespace in the cluster, ensure that each policy disallows the admission of containers with `hostPath` volumes.

## Remediation

Add policies to each namespace in the cluster which has user workloads to restrict the admission of containers which use `hostPath` volumes.

## Default Value

By default, there are no restrictions on the creation of `hostPath` volumes.

## References

1. https://kubernetes.io/docs/concepts/security/pod-security-standards/
