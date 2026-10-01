---
name: cis-k8s-v1110-5.1.10
description: "Minimize access to the proxy sub-resource of nodes (Manual)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, policies, rbac, service-accounts, node-proxy]
cis_id: "5.1.10"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: debdd8fb89d708df0aabb0231d3ee1a204bf44eb28f8f3d4fbbd421505fa1b5a
signature: eJfH0eDk7y7weZEaktY1wE4F+MlqZqJgJBQKq6x5nwPV89fnMha7p1Lvk2npRkS12XVQyS2EX/PyaDcmLw3fBg==
signed_by: siaga-official
---

# 5.1.10 Minimize access to the proxy sub-resource of nodes (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Users with access to the `Proxy` sub-resource of `Node` objects automatically have permissions to use the kubelet API, which may allow for privilege escalation or bypass cluster security controls such as audit logs.

The kubelet provides an API which includes rights to execute commands in any container running on the node. Access to this API is covered by permissions to the main Kubernetes API via the `node` object. The proxy sub-resource specifically allows wide ranging access to the kubelet API.

Direct access to the kubelet API bypasses controls like audit logging (there is no audit log of kubelet API access) and admission control.

## Rationale

The ability to use the `proxy` sub-resource of `node` objects opens up possibilities for privilege escalation and should be restricted, where possible.

## Audit

Review the users who have access to the `proxy` sub-resource of `node` objects in the Kubernetes API.

## Remediation

Where possible, remove access to the `proxy` sub-resource of `node` objects.

## References

1. https://kubernetes.io/docs/concepts/security/rbac-good-practices/#access-to-proxy-subresource-of-nodes
2. https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/#kubelet-authorization
