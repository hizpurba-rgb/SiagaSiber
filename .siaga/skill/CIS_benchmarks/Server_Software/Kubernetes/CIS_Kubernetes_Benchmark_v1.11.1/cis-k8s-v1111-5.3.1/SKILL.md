---
name: cis-k8s-v1111-5.3.1
description: "Ensure that the CNI in use supports Network Policies (Manual)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, policies, network-policies, cni]
cis_id: "5.3.1"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d36d2ed5b839744bd092725e78e08a59d5d328f3cf0a1643fe9aee86f199a73a
signature: Zcac/9HC3DItWpd9swB9R5Yxg6NzYK1dPqMjDa/1YnjmVizyGmy68VIfFkcsPstagF9mlmq2tt+XL9Qt2n6nCw==
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

## References

1. https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/

## Additional Information

One example here is Flannel (https://github.com/coreos/flannel) which does not support Network policy unless Calico is also in use.

## CIS Controls

| Controls Version | Control                                        | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.4 Implement and Manage a Firewall on Servers | X    | X    | X    |
| v7               | 9.5 Implement Application Firewalls            |      |      | X    |
