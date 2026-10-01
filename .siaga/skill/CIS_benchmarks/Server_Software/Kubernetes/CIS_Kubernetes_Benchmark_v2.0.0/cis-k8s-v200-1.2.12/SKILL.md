---
name: cis-k8s-v200-1.2.12
description: "Ensure that the admission control plugin ServiceAccount is set (Automated)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, api-server, admission-control, service-account]
cis_id: "1.2.12"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: bd3a0f7288438642e5134b02dc47a180ebcc7c39d5651c2a811d9a043c0a8fc8
signature: 7g8Mdyk4QCm53l4C7eYIGAiXTwuF3OvS5W2rveNr5eeVXrNFAEGHWNr1caUe+oS4jKpgxqOk4TnIkOLaaP+YBg==
signed_by: siaga-official
---

# 1.2.12 Ensure that the admission control plugin ServiceAccount is set (Automated)

## Profile Applicability

- Level 2 - Master Node

## Description

Automate service accounts management.

## Rationale

When you create a pod, if you do not specify a service account, it is automatically assigned the `default` service account in the same namespace. You should create your own service account and let the API server manage its security tokens.

## Impact

None.

## Audit

Run the following command on the Control Plane node:

```bash
ps -ef | grep kube-apiserver
```

Verify that the `--disable-admission-plugins` argument is set to a value that does not includes `ServiceAccount`.

## Remediation

Follow the documentation and create `ServiceAccount` objects as per your environment. Then, edit the API server pod specification file `/etc/kubernetes/manifests/kube-apiserver.yaml` on the master node and ensure that the `--disable-admission-plugins` parameter is set to a value that does not include `ServiceAccount`.

## Default Value

By default, `ServiceAccount` is set.

## References

1. https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
2. https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#serviceaccount
3. https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/

## CIS Controls

| Controls Version | Control                                               | IG 1 | IG 2 | IG 3 |
| ---------------- | ----------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.3 Configure Data Access Control Lists               | \*   | \*   | \*   |
| v7               | 14.6 Protect Information through Access Control Lists | \*   | \*   | \*   |
