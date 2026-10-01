---
name: cis-k8s-v1110-5.3.1
description: "Ensure that the CNI in use supports Network Policies (Manual)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, policies, network-policies, cni]
cis_id: "5.3.1"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 79538dd6c77a31e474f185a1250bd315f2963df6ef6c65bcbf44e43c928ce341
signature: C/jE57RIAKwxeruK3ojDHDW2y5I9fQDwAgr/uoQkSKhGwWzeu2LD9fz9AMijzS41vVaheNOcjxn/sDzFG7bpBg==
signed_by: siaga-official
---

# 5.3.1 Ensure that the CNI in use supports Network Policies (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

There are a variety of CNI plugins available for Kubernetes. If the CNI in use does not support Network Policies it may not be possible to effectively restrict traffic in the cluster.

## Rationale

Kubernetes network policies are enforced by the CNI plugin in use. As such it is important to ensure that the CNI plugin supports both Ingress and Egress network policies.

## Impact

None

## Audit

Review the documentation of CNI plugin in use by the cluster, and confirm that it supports Ingress and Egress network policies.

## Remediation

If the CNI plugin in use does not support network policies, consideration should be given to making use of a different plugin, or finding an alternate mechanism for restricting traffic in the Kubernetes cluster.

## Default Value

This will depend on the CNI plugin in use.

## Additional Information

One example here is Flannel (https://github.com/coreos/flannel) which does not support Network policy unless Calico is also in use.

## References

1. https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/
