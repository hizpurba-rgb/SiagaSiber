---
name: cis-k8s-v1120-1.1.6
description: "Ensure that the scheduler pod specification file ownership is set to root:root (Automated)"
category: cis-k8s
version: "1.12.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, config-files, scheduler, ownership, level1]
cis_id: "1.1.6"
cis_benchmark: "CIS Kubernetes Benchmark v1.12.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 4ba28c46ce1223b50821650dc5a4d8c9e9414e8794511277a06ea2a769226613
signature: 4yQJOu5ShC8ZNvt+yUzyCpqHeRTdbHtzQkrfImkGyALzMlmrnLAQpbr4szjITUAc06pl44OxwmzDjRcpuprjAQ==
signed_by: siaga-official
---

# 1.1.6 Ensure that the scheduler pod specification file ownership is set to root:root (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Ensure that the scheduler pod specification file ownership is set to `root:root`.

## Rationale

The scheduler pod specification file controls various parameters that set the behavior of the `kube-scheduler` service in the master node. You should set its file ownership to maintain the integrity of the file. The file should be owned by `root:root`.

## Impact

None

## Audit

Run the below command (based on the file location on your system) on the Control Plane node. For example,

```bash
stat -c %U:%G /etc/kubernetes/manifests/kube-scheduler.yaml
```

Verify that the ownership is set to `root:root`.

## Remediation

Run the below command (based on the file location on your system) on the Control Plane node. For example,

```bash
chown root:root /etc/kubernetes/manifests/kube-scheduler.yaml
```

## Default Value

By default, `kube-scheduler.yaml` file ownership is set to `root:root`.

## References

1. [https://kubernetes.io/docs/admin/kube-scheduler/](https://kubernetes.io/docs/admin/kube-scheduler/)

## CIS Controls

| Controls Version | Control                                                                   | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts | \*   | \*   | \*   |
| v7               | 4 Controlled Use of Administrative Privileges                             |      |      |      |
