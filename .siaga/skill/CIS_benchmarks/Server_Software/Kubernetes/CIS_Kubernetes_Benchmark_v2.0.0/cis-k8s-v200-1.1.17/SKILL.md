---
name: cis-k8s-v200-1.1.17
description: "Ensure that the controller-manager.conf file permissions are set to 600 or more restrictive (Automated)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, config-files, file-permissions, controller-manager, kubeconfig]
cis_id: "1.1.17"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 392a3e1c1575bbe1f64ad4cd64afc5afcc574d3bb0cfecaedebd67d0eeab5fe5
signature: z1EVh3QhGQT4bpJIAhISN3Ew1+7+HI1BpoWKk117zGe+cWqc2nCKhr7IwUWd5jTx5GIhGGLdaTEQU3A2PrciDg==
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

1. https://kubernetes.io/docs/admin/kube-controller-manager/

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                                                                                                                                                                                | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- | ---- | ---- |
| v8               | 3.3 Configure Data Access Control Lists - Configure data access control lists based on a user's need to know. Apply data access control lists, also known as access permissions, to local and remote file systems, databases, and applications.                                                                                                                                                        | \*   | \*   | \*   |
| v7               | 14.6 Protect Information through Access Control Lists - Protect all information stored on systems with file system, network share, claims, application, or database specific access control lists. These controls will enforce the principle that only authorized individuals should have access to the information based on their need to access the information as a part of their responsibilities. | \*   | \*   | \*   |
