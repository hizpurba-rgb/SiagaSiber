---
name: cis-k8s-v200-1.1.18
description: "Ensure that the controller-manager.conf file ownership is set to root:root (Automated)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, config-files, file-ownership, controller-manager, kubeconfig]
cis_id: "1.1.18"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 33cbc2dc732391c1525471092de6c957409ac9e41b4ef61a2469b8c6b0be6997
signature: 4xWJhAp+OIeNCI/E+1/LwLDyJID7kJmyUwYpwdmEE8LNoYD07JPawHp3Dx1UJgQV8wB6idSZON1Vw2nWSGBQAA==
signed_by: siaga-official
---

# 1.1.18 Ensure that the controller-manager.conf file ownership is set to root:root (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Ensure that the `controller-manager.conf` file ownership is set to `root:root`.

## Rationale

The `controller-manager.conf` file is the kubeconfig file for the Controller Manager. You should set its file ownership to maintain the integrity of the file. The file should be owned by `root:root`.

## Impact

None

## Audit

Run the below command (based on the file location on your system) on the Control Plane node. For example,

```bash
stat -c %U:%G /etc/kubernetes/controller-manager.conf
```

Verify that the ownership is set to `root:root`.

## Remediation

Run the below command (based on the file location on your system) on the Control Plane node. For example,

```bash
chown root:root /etc/kubernetes/controller-manager.conf
```

## Default Value

By default, `controller-manager.conf` file ownership is set to `root:root`.

## References

1. https://kubernetes.io/docs/admin/kube-controller-manager/

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                                                                                                      | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts - Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account. | \*   | \*   | \*   |
| v7               | 4 Controlled Use of Administrative Privileges - Controlled Use of Administrative Privileges                                                                                                                                                                                                                                  |      |      |      |
