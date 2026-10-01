---
name: cis-eks-v170-4.1.2
description: "Minimize access to secrets (Automated)"
category: cis-eks
version: "1.7.0"
author: siaga-official
tags: [cis, eks, kubernetes, aws, rbac, service-accounts, secrets, access-control]
cis_id: "4.1.2"
cis_benchmark: "CIS Amazon Elastic Kubernetes Service (EKS) Benchmark v1.7.0"
tech_stack: [kubernetes, aws, eks]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: ca9fac4197aabe9ebdbd0055143bf1da9f33bde3344b7f736f9620614da573b8
signature: 8om6tbsMF61w9kNosMXCJKyNZiwTLhC3zVUoe7Ceq/yEuMEQUUL5kHaRwRi8MIuPkhFint+AJrToiAwoJP3uBA==
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

## Audit Procedure

Review the users who have `get`, `list` or `watch` access to `secrets` objects in the Kubernetes API.

```bash
kubectl get clusterrolebindings -o=custom-columns=NAME:.metadata.name,ROLE:.roleRef.name,SUBJECT:.subjects[*].name
kubectl get rolebindings --all-namespaces -o=custom-columns=NAME:.metadata.name,ROLE:.roleRef.name,SUBJECT:.subjects[*].name
```

## Remediation

Where possible, remove `get`, `list` and `watch` access to `secret` objects in the cluster.

## Default Value

By default, the following list of principals have `get` privileges on `secret` objects:

| CLUSTERROLEBINDING                                   | SUBJECT                            |
| ---------------------------------------------------- | ---------------------------------- |
| cluster-admin                                        | system:masters                     |
| system:controller:clusterrole-aggregation-controller | clusterrole-aggregation-controller |
| system:controller:expand-controller                  | expand-controller                  |
| system:controller:generic-garbage-collector          | generic-garbage-collector          |
| system:controller:namespace-controller               | namespace-controller               |
| system:controller:persistent-volume-binder           | persistent-volume-binder           |
| system:kube-controller-manager                       | system:kube-controller-manager     |

## References

None specified.

## CIS Controls

| Controls Version | Control                                                   | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.1 Establish and Maintain a Secure Configuration Process | x    | x    | x    |
| v7               | 5.2 Maintain Secure Images                                |      | x    | x    |
