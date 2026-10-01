---
name: cis-gke-autopilot-v120-4.1.2
description: "Minimize access to secrets (Automated)"
category: cis-gke-autopilot
version: "1.2.0"
author: siaga-official
tags: [cis, gke-autopilot, kubernetes, gcp, rbac, service-accounts, secrets, access-control]
cis_id: "4.1.2"
cis_benchmark: "CIS Google Kubernetes Engine (GKE) Autopilot Benchmark v1.2.0"
tech_stack: [kubernetes, gcp, gke]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: de8d1a71dd9e324bf7f6fdfb9854abb02876db75e523f9133643e3ac6e8d7340
signature: YXM0Qe4sBzGB4LcYzfMw5Sy5x7WmABsbNn0XSIKMeGA4oi2EQ1QeRl6aXA2T2KiC4kYz4AR8edndxdyIN1fsAA==
signed_by: siaga-official
---

# 4.1.2 Minimize access to secrets (Automated)

## Profile Applicability

- Level 1

## Description

The Kubernetes API stores secrets, which may be service account tokens for the Kubernetes API or credentials used by workloads in the cluster. Access to these secrets should be restricted to the smallest possible group of users to reduce the risk of privilege escalation.

## Rationale

Inappropriate access to secrets stored within the Kubernetes cluster can allow for an attacker to gain additional access to the Kubernetes cluster or external resources whose credentials are stored as secrets.

## Impact

Care should be taken not to remove access to secrets to system components which require this for their operation.

## Audit

Review the users who have `get`, `list` or `watch` access to `secrets` objects in the Kubernetes API.

## Remediation

Where possible, remove `get`, `list` and `watch` access to `secret` objects in the cluster.

## Default Value

| CLUSTERROLEBINDING                                   | TYPE           | SA-NAMESPACE | SUBJECT                            |
| ---------------------------------------------------- | -------------- | ------------ | ---------------------------------- |
| cluster-admin                                        | Group          |              | system:masters                     |
| system:controller:clusterrole-aggregation-controller | ServiceAccount | kube-system  | clusterrole-aggregation-controller |
| system:controller:expand-controller                  | ServiceAccount | kube-system  | expand-controller                  |
| system:controller:generic-garbage-collector          | ServiceAccount | kube-system  | generic-garbage-collector          |
| system:controller:namespace-controller               | ServiceAccount | kube-system  | namespace-controller               |
| system:controller:persistent-volume-binder           | ServiceAccount | kube-system  | persistent-volume-binder           |
| system:kube-controller-manager                       | User           |              | system:kube-controller-manager     |

## References

1. https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/

## CIS Controls

| Controls Version | Control                                                   | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.1 Establish and Maintain a Secure Configuration Process | \*   | \*   | \*   |
| v7               | 5.2 Maintain Secure Images                                |      | \*   | \*   |
