---
name: cis-eks-v180-4.1.9
description: "Minimize access to create persistent volumes (Manual)"
category: cis-eks
version: "1.8.0"
author: siaga-official
tags: [cis, eks, kubernetes, aws, rbac, persistent-volumes, privilege-escalation]
cis_id: "4.1.9"
cis_benchmark: "CIS Amazon Elastic Kubernetes Service (EKS) Benchmark v1.8.0"
tech_stack: [kubernetes, aws, eks]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d54dc81f84bb13371bcf932bca7b1374a7dbc53173816bbb05d83184af30cc24
signature: jHeEOtajL1k9BCqRy+X8dIcX8q6Saf05Tyh7GwFbOeB/1kOMyXxaZy38XvkLsA0FvCRKp+fK8PnqlJjSC4vtBA==
signed_by: siaga-official
---

# 4.1.9 Minimize access to create persistent volumes (Manual)

## Profile Applicability

- Level 1

## Description

The ability to create persistent volumes in a cluster can provide an opportunity for privilege escalation, via the creation of `hostPath` volumes. As persistent volumes are not covered by Pod Security Admission, a user with access to create persistent volumes may be able to get access to sensitive files from the underlying host even where restrictive Pod Security Admission policies are in place.

## Rationale

The ability to create persistent volumes in a cluster opens up possibilities for privilege escalation and should be restricted, where possible.

## Audit Procedure

Review the users who have create access to `PersistentVolume` objects in the Kubernetes API.

```bash
kubectl get clusterrolebindings -o json | jq -r '.items[] | select(.roleRef.kind=="ClusterRole") | select(.subjects[]?.kind=="User" or .subjects[]?.kind=="Group" or .subjects[]?.kind=="ServiceAccount") | .metadata.name + " -> " + .roleRef.name'
```

## Remediation

Where possible, remove `create` access to `PersistentVolume` objects in the cluster.

## Default Value

By default, the cluster-admin ClusterRole has access to create PersistentVolume objects.

## References

1. https://kubernetes.io/docs/concepts/security/rbac-good-practices/#persistent-volume-creation

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 6.8 Define and Maintain Role-Based Access Control |      |      | ●    |

## Profile Applicability

- Level 1
