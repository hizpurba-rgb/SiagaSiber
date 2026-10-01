---
name: cis-k8s-v1111-4.1.8
description: "Ensure that the client certificate authorities file ownership is set to root:root (Manual)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, worker-nodes, configuration-files, permissions, ownership, kubelet, kubeconfig, certificates]
cis_id: "4.1.8"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d695270735caa02b47ac3ef53248ba365be4f1ce10f4b652462de79c3f9f14ba
signature: 60qEUntMUKxz+FM7NbaBW/sIEPSMqXgzuzfqanWYSkL3o6kLQIqLn0rTAfjGi7TrjANc9xzb6lzTNvXNdgT4CQ==
signed_by: siaga-official
---

# 4.1.8 Ensure that the client certificate authorities file ownership is set to root:root (Manual)

## Profile Applicability

- Level 1 - Worker Node

## Description

Ensure that the certificate authorities file ownership is set to `root:root`.

## Rationale

The certificate authorities file controls the authorities used to validate API requests. You should set its file ownership to maintain the integrity of the file. The file should be owned by `root:root`.

## Impact

None

## Audit

Run the following command:

```bash
ps -ef | grep kubelet
```

Find the file specified by the `--client-ca-file` argument.
Run the following command:

```bash
stat -c %U:%G <filename>
```

Verify that the ownership is set to `root:root`.

## Remediation

Run the following command to modify the ownership of the `--client-ca-file`.

```bash
chown root:root <filename>
```

## Default Value

By default no `--client-ca-file` is specified.

## References

1. [https://kubernetes.io/docs/admin/authentication/#x509-client-certs](https://kubernetes.io/docs/admin/authentication/#x509-client-certs)

## CIS Controls

| Controls Version | Control                                                                   | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts | x    | x    | x    |
| v7               | 4 Controlled Use of Administrative Privileges                             |      |      |      |
