---
name: cis-oke-v180-4.3.1
description: "Ensure latest CNI version is used (Automated)"
category: cis-oke
version: "1.8.0"
author: siaga-official
tags: [cis, oke, kubernetes, oci, policies, cni-plugin, network-policies]
cis_id: "4.3.1"
cis_benchmark: "CIS Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE) Benchmark v1.8.0"
tech_stack: [kubernetes, oci, oke]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 4363eb159c00c3f2453406190d7e190ac390e6170f1e268a3495d4d763605e2f
signature: atCf4MpGtiMpdAd3/J39qdi5mb+l2o00RfDA14hH7AfmF4g+Rep5BwYC+6vlZyRRdSDSu6nn6NUyjzdl/d7aAw==
signed_by: siaga-official
---

# 4.3.1 Ensure latest CNI version is used (Automated)

## Profile Applicability

- Level 1

## Description

There are a variety of CNI plugins available for Kubernetes. If the CNI in use does not support Network Policies it may not be possible to effectively restrict traffic in the cluster.

## Rationale

Kubernetes network policies are enforced by the CNI plugin in use. As such it is important to ensure that the CNI plugin supports both Ingress and Egress network policies.

## Impact

None.

## Audit

Review the documentation of CNI plugin in use by the cluster, and confirm that it supports network policies.

Check the DaemonSets in the kube-system namespace: Many CNI plugins operate as DaemonSets within the kube-system namespace. To see what's running:

```bash
kubectl get daemonsets -n kube-system
```

Look for known CNI providers like Calico, Flannel, Cilium, etc.

You can further inspect the configuration of these DaemonSets to understand more about the CNI setup:

```bash
kubectl get daemonsets -n kube-system -o json \
| jq -r '
  .items[]
  | select(
      (.metadata.name | test("cni|calico|flannel|weave|cilium|canal|multus"; "i"))
      or
      ([.spec.template.spec.containers[].image] | join(" ") | test("cni|calico|flannel|weave|cilium|canal|multus"; "i"))
    )
  | "\(.metadata.name)\timage=\(.spec.template.spec.containers[].image)"
'
```

Check the CNI Configuration Files: If you have access to the nodes (via SSH), you can check the CNI configuration directly in /etc/cni/net.d/. This often requires node-level access, which might not be available depending on your permissions and the security setup of your environment.

## Remediation

As with RBAC policies, network policies should adhere to the policy of least privileged access. Start by creating a deny all policy that restricts all inbound and outbound traffic from a namespace or create a global policy using Calico.

## Default Value

This will depend on the CNI plugin in use.

## References

1. https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/
2. https://docs.cloud.oracle.com/en-us/iaas/Content/ContEng/Concepts/contengoverview.htm

## Additional Information

One example here is Flannel (https://github.com/coreos/flannel) which does not support Network policy unless Calico is also in use.

## CIS Controls

| Controls Version | Control                                                                                       | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 7.4 Perform Automated Application Patch Management                                            | x    | x    | x    |
| v7               | 11.4 Install the Latest Stable Version of Any Security-related Updates on All Network Devices | x    | x    | x    |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques | Tactics | Mitigations |
| --------------------------- | ------- | ----------- |
| N/A                         | N/A     | N/A         |
