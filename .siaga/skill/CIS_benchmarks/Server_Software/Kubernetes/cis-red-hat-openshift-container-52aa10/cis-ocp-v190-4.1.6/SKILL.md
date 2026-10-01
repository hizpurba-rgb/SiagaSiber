---
name: cis-ocp-v190-4.1.6
description: "Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)"
category: cis-openshift
version: "1.9.0"
author: siaga-official
tags: [cis, openshift, kubernetes, redhat, worker-nodes, worker-node-config-files]
cis_id: "4.1.6"
cis_benchmark: "CIS Red Hat OpenShift Container Platform Benchmark v1.9.0"
tech_stack: [kubernetes, openshift, redhat]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 86260f86a81f9221b442d1ac815266710867051c62c97cd6516de99dd147da6e
signature: 0IUu8NHunPmWO+YAJxYhj9qFOATqjcPWmjA/DVce3wxBTdE6t1wmO6+U8FcRHSpD0/i6bCTGwntk89n5vvPXCg==
signed_by: siaga-official
---

# CIS Red Hat OpenShift Container Platform Benchmark v1.9.0 - Control 4.1.6

## Profile Applicability

- **Level:** 1

## Description

Ensure that the `kubelet.conf` file ownership is set to `root:root`.

## Rationale

The `kubelet.conf` file is the Kubernetes configuration file for the node, and controls various parameters that set the behavior and identity of the worker node. You should set its file ownership to maintain the integrity of the file. The file should be owned by `root:root`.

## Impact

None.

## Audit Procedure

Run the following command to view the user and group ownership of the `kubelet.conf` file:

```bash
for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}')
do
oc debug node/${node} -- chroot /host stat -c %U:%G /etc/kubernetes/kubelet.conf
done
```

OR

```bash
for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}')
do
oc debug node/${node} -- chroot /host stat -c %U:%G /host/etc/kubernetes/kubelet.conf
done
```

Verify that the ownership is set to `root:root`.

## Remediation

None.

## Default Value

By default, `kubelet.conf` file ownership is set to `root:root`.

## References

1. https://docs.openshift.com/container-platform/latest/architecture/control-plane.html#understanding-machine-config-operator_control-plane
2. https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/

## CIS Controls

| Controls Version | Control                                                                   | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts | \*   | \*   | \*   |
| v7               | 4.3 Ensure the Use of Dedicated Administrative Accounts                   | \*   | \*   | \*   |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques | Tactics        | Mitigations |
| --------------------------- | -------------- | ----------- |
| T1083, T1222                | TA0005, TA0007 | M1026       |

## Profile

**Level 1** (Automated)
