---
name: cis-k8s-v1120-1.2.2
description: "Ensure that the --token-auth-file parameter is not set (Automated)"
category: cis-k8s
version: "1.12.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, api-server, authentication, token-auth]
cis_id: "1.2.2"
cis_benchmark: "CIS Kubernetes Benchmark v1.12.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b7589e429687ae494e390f1f847d1bd974cf5efad4e3060e1594a03c6f81fd35
signature: 5SVkqEzrQWvcASMcx7zCmsdXwHvM7SXlxGxngjw817qH55mkwzxh5xkCHLMkarZhQB4UqcurDA2ODk4LwT/LAw==
signed_by: siaga-official
---

# 1.2.2 Ensure that the --token-auth-file parameter is not set (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Do not use token based authentication.

## Rationale

The token-based authentication utilizes static tokens to authenticate requests to the apiserver. The tokens are stored in clear-text in a file on the apiserver, and cannot be revoked or rotated without restarting the apiserver. Hence, do not use static token-based authentication.

## Impact

You will have to configure and use alternate authentication mechanisms such as certificates. Static token based authentication could not be used.

## Audit

Run the following command on the Control Plane node:

```bash
ps -ef | grep kube-apiserver
```

Verify that the `--token-auth-file` argument does not exist.

### Alternative Audit Method

```bash
kubectl get pod -nkube-system -lcomponent=kube-apiserver -o=jsonpath='{range .items[*]}{.spec.containers[*].command} {"\n"}{end}' | grep '\--token-auth-file' | grep -i false
```

If the exit code is '1', then the control isn't present / failed

## Remediation

Follow the documentation and configure alternate mechanisms for authentication. Then, edit the API server pod specification file `/etc/kubernetes/manifests/kube-apiserver.yaml` on the master node and remove the `--token-auth-file=<filename>` parameter.

## Default Value

By default, `--token-auth-file` argument is not set.

## References

1. [https://kubernetes.io/docs/admin/authentication/#static-token-file](https://kubernetes.io/docs/admin/authentication/#static-token-file)
2. [https://kubernetes.io/docs/admin/kube-apiserver/](https://kubernetes.io/docs/admin/kube-apiserver/)

## CIS Controls

| Controls Version | Control                                             | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.6 Securely Manage Enterprise Assets and Software  | \*   | \*   | \*   |
| v7               | 16.4 Encrypt or Hash all Authentication Credentials |      | \*   | \*   |
