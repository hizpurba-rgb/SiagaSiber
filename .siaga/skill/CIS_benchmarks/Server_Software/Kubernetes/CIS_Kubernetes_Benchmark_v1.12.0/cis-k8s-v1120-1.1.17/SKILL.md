---
name: cis-k8s-v1120-1.1.17
description: "Ensure that the controller-manager.conf file permissions are set to 600 or more restrictive (Automated)"
category: cis-k8s
version: "1.12.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, config-files, controller-manager, kubeconfig, permissions, level1]
cis_id: "1.1.17"
cis_benchmark: "CIS Kubernetes Benchmark v1.12.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b95fbf13a16c2eea7c9be2eb899357bc272ed8e738c951e921443214c73214a9
signature: D67ZCNcuLDDY2eZkicNBG4+yscsk71D1/z/YVxL8lq9Utc3vqyyfRXTpOcTBKfnk/mtVy9UnrvPA/Gw6V9PhCQ==
signed_by: siaga-official
---

# 1.1.17 Ensure that the controller-manager.conf file permissions are set to 600 or more restrictive (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Ensure that the `controller-manager.conf` file has permissions of 600 or more restrictive.

## Rationale

The `controller-manager.conf` file is the kubeconfig file for the Controller Manager. You should restrict its file permissions to maintain the integrity of the file. The file should be writable by only the administrators on the system.

## Impact

None

## Audit

Run the following command (based on the file location on your system) on the Control Plane node. For example,

```bash
stat -c %a /etc/kubernetes/controller-manager.conf
```

Verify that the permissions are `600` or more restrictive.

## Remediation

Run the below command (based on the file location on your system) on the Control Plane node. For example,

```bash
chmod 600 /etc/kubernetes/controller-manager.conf
```

## Default Value

By default, `controller-manager.conf` has permissions of `640`.

## References

1. [https://kubernetes.io/docs/admin/kube-controller-manager/](https://kubernetes.io/docs/admin/kube-controller-manager/)

## CIS Controls

| Controls Version | Control                                               | IG 1 | IG 2 | IG 3 |
| ---------------- | ----------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.3 Configure Data Access Control Lists               | \*   | \*   | \*   |
| v7               | 14.6 Protect Information through Access Control Lists | \*   | \*   | \*   |
