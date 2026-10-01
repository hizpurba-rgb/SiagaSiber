---
name: cis-k8s-v200-5.6.4
description: "The default namespace should not be used (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, general-policies, default-namespace, resource-isolation]
cis_id: "5.6.4"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 76e5b85d96de7186aa2f978f45b557595092d880b4f25336bc2fa7018325e0b1
signature: SvrVDaA8CXBJWjZYR/MffgYZ7dqDPe5AkJeTEplfT5O5FFdWtQhRy1i2VqDwoiTz53jsq1uvJ2WYAl+DtxWDCg==
signed_by: siaga-official
---

# 5.6.4 The default namespace should not be used (Manual)

## Profile Applicability

- Level 2 - Master Node

## Description

Kubernetes provides a default namespace, where objects are placed if no namespace is specified for them. Placing objects in this namespace makes application of RBAC and other controls more difficult.

## Rationale

Resources in a Kubernetes cluster should be segregated by namespace, to allow for security controls to be applied at that level and to make it easier to manage resources.

## Impact

None

## Audit

Run this command to list objects in default namespace:

```bash
kubectl get $(kubectl api-resources --verbs=list --namespaced=true -o name | paste -sd, -) --ignore-not-found -n default
```

The only entries there should be system managed resources such as the `kubernetes` service.

## Remediation

Ensure that namespaces are created to allow for appropriate segregation of Kubernetes resources and that all new resources are created in a specific namespace.

## Default Value

Unless a namespace is specific on object creation, the `default` namespace will be used.
