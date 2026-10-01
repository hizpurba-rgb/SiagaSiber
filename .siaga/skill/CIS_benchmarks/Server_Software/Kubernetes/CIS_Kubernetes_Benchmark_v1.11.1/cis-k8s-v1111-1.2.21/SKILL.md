---
name: cis-k8s-v1111-1.2.21
description: "Ensure that the --service-account-lookup argument is set to true (Automated)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, control-plane, api-server, authentication, service-account]
cis_id: "1.2.21"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c038ed65a061d6a9073b10ffe51367e06994832363318fa448e6da7390e4e1c1
signature: PK+h1bKw3K0IYAMJlKRLqxw/elso5gjAO6ct25JGsPRa7gNqxnKyMu9oWPhd16mHPkRNZdt8d900WeYFUSG1Ag==
signed_by: siaga-official
---

# 1.2.21 Ensure that the --service-account-lookup argument is set to true (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Validate service account before validating token.

## Rationale

If `--service-account-lookup` is not enabled, the apiserver only verifies that the authentication token is valid, and does not validate that the service account token mentioned in the request is actually present in etcd. This allows using a service account token even after the corresponding service account is deleted. This is an example of time of check to time of use security issue.

## Impact

None

## Audit

Run the following command on the Control Plane node:

```bash
ps -ef | grep kube-apiserver
```

Verify that if the `--service-account-lookup` argument exists it is set to `true`.

## Remediation

Edit the API server pod specification file `/etc/kubernetes/manifests/kube-apiserver.yaml` on the Control Plane node and set the below parameter.

```bash
--service-account-lookup=true
```

Alternatively, you can delete the `--service-account-lookup` parameter from this file so that the default takes effect.

## Default Value

By default, `--service-account-lookup` argument is set to `true`.

## References

1. https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
2. https://github.com/kubernetes/kubernetes/issues/24167
3. https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use

## CIS Controls

| Controls Version | Control                                 | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------------- | ---- | ---- | ---- |
| v8               | 3.3 Configure Data Access Control Lists | x    | x    | x    |
| v7               | 16 Account Monitoring and Control       |      |      |      |
