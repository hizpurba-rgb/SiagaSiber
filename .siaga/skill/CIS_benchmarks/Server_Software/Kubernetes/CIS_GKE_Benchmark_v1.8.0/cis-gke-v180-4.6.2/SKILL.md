---
name: cis-gke-v180-4.6.2
description: "Ensure that the seccomp profile is set to RuntimeDefault in the pod definitions (Automated)"
category: cis-gke
version: "1.8.0"
author: siaga-official
tags: [cis, gke, kubernetes, gcp, general-policies, namespaces, seccomp, security-context]
cis_id: "4.6.2"
cis_benchmark: "CIS Google Kubernetes Engine (GKE) Benchmark v1.8.0"
tech_stack: [kubernetes, gcp, gke]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 631ef4defe6fe6ed8ad14212adab4ba562242cfc07213ad089e700baf2499099
signature: AaFit4M9MZfuyPeivGGauQb/btxYFN8FrxI1w9LAr6nY5I0kfmW2nsi3Uvu35x2klGpG2dILHhU03SlB8nwbAg==
signed_by: siaga-official
---

# 4.6.2 Ensure that the seccomp profile is set to RuntimeDefault in the pod definitions (Automated)

## Profile Applicability

- Level 2

## Description

Enable `RuntimeDefault` seccomp profile in the pod definitions.

## Rationale

Seccomp (secure computing mode) is used to restrict the set of system calls applications can make, allowing cluster administrators greater control over the security of workloads running in the cluster. Kubernetes disables seccomp profiles by default for historical reasons. It should be enabled to ensure that the workloads have restricted actions available within the container.

## Impact

If the `RuntimeDefault` seccomp profile is too restrictive for you, you would have to create/manage your own `Localhost` seccomp profiles.

## Audit

Review the pod definitions output for all namespaces in the cluster with the command below.

```bash
kubectl get pods --all-namespaces -o json | jq -r '.items[] | select(.metadata.annotations."seccomp.security.alpha.kubernetes.io/pod" == "runtime/default" or .spec.securityContext.seccompProfile.type == "RuntimeDefault") | {namespace: .metadata.namespace, name: .metadata.name, seccompProfile: .spec.securityContext.seccompProfile.type}'
```

## Remediation

Use security context to enable the `RuntimeDefault` seccomp profile in your pod definitions. An example is as below:

```json
{
  "namespace": "kube-system",
  "name": "metrics-server-v0.7.0-dbcc8ddf6-gz7d4",
  "seccompProfile": "RuntimeDefault"
}
```

## Default Value

By default, seccomp profile is set to `unconfined` which means that no seccomp profiles are enabled.

## References

1. https://kubernetes.io/docs/tutorials/security/seccomp/
2. https://cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke

## CIS Controls

| Controls Version | Control                                                                            | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 16.7 Use Standard Hardening Configuration Templates for Application Infrastructure |      | \*   | \*   |
| v7               | 5.2 Maintain Secure Images                                                         |      | \*   | \*   |
