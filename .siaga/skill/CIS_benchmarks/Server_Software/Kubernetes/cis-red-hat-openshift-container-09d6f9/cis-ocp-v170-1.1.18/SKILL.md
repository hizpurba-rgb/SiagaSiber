---
name: cis-ocp-v170-1.1.18
description: "Ensure that the Controller Manager kubeconfig file ownership is set to root:root (Manual)"
category: cis-openshift
version: "1.7.0"
author: siaga-official
tags: [cis, openshift, kubernetes, redhat, control-plane, master-node, config-files]
cis_id: "1.1.18"
cis_benchmark: "CIS Red Hat OpenShift Container Platform Benchmark v1.7.0"
tech_stack: [kubernetes, openshift, redhat]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 398929a99412187a3d993bf31ef1d2607c780e1830214b9f5ff801534d0ec209
signature: JkdcH7IVqcnu0J40HBNmAx4wqH8fEfMwlQWRZfog+BrPe4FjP6/HjTQxSyhtzcJg8f4CIkP3GTRVQYlh27cKBA==
signed_by: siaga-official
---

# CIS Red Hat OpenShift Container Platform Benchmark v1.7.0 - Control 1.1.18

## Profile Applicability

- **Level:** 1

## Description

Ensure that the `kubeconfig` file ownership is set to `root:root`.

## Rationale

You should set the `kubeconfig` file ownership to maintain the integrity of the file. The file should be owned by `root:root`.

## Impact

None.

## Audit Procedure

Run the following command:

```bash
for i in $(oc get pods -n openshift-kube-controller-manager -l app=kube-controller-manager -oname)
 do
  oc exec -n openshift-kube-controller-manager $i -- \
  stat -c %U:%G /etc/kubernetes/static-pod-resources/configmaps/controller-manager-kubeconfig/kubeconfig
 done
```

Verify that the ownership is set to `root:root`.

## Remediation

No remediation required; file permissions are managed by the operator.

## Default Value

By default, the Controller Manager `kubeconfig` file ownership is set to `root:root`.

## References

1. https://docs.openshift.com/container-platform/4.5/operators/operator-reference.html#kube-controller-manager-operator_red-hat-operators
2. https://docs.openshift.com/container-platform/4.5/operators/operator-reference.html#cluster-openshift-controller-manager-operator_red-hat-operators
3. https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/

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

**Level 1** (Manual)
