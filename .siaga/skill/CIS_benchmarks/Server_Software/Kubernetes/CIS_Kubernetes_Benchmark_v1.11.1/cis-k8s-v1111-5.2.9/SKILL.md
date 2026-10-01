---
name: cis-k8s-v1111-5.2.9
description: "Minimize the admission of containers with added capabilities (Manual)"
category: cis-k8s
version: "1.11.1"
author: siaga-official
tags: [cis, kubernetes, policies, pod-security, pod-security-standards, capabilities]
cis_id: "5.2.9"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.1"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c98af781eead3e19d926701545f55db964bd80ec73645d55de45234d42696b2f
signature: XU2+79dPGZyXChflYVD9a74U3K33ipUky4nzwdnQ5RVSfyroWxWVUmZlLpV/VcKw3XpYKS06cm96MZZXJltIBg==
signed_by: siaga-official
---

# 5.2.9 Minimize the admission of containers with added capabilities (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Do not generally permit containers with capabilities assigned beyond the default set.

## Rationale

Containers run with a default set of capabilities as assigned by the Container Runtime. Capabilities outside this set can be added to containers which could expose them to risks of container breakout attacks.

There should be at least one policy defined which prevents containers with capabilities beyond the default set from launching.

If you need to run containers with additional capabilities, this should be defined in a separate policy and you should carefully check to ensure that only limited service accounts and users are given permission to use that policy.

## Impact

Pods with containers which require capabilities outwith the default set will not be permitted.

## Audit

Ensure that allowedCapabilities is not present in policies for the cluster unless it is set to an empty array.

```bash
kubectl get pods -A -o=jsonpath=$'{range .items[*]}{@.metadata.name}: {@..securityContext}\n{end}'
```

## Remediation

Ensure that `allowedCapabilities` is not present in policies for the cluster unless it is set to an empty array.

## Default Value

By default, there are no restrictions on adding capabilities to containers.

## References

1. https://kubernetes.io/docs/concepts/security/pod-security-standards/
2. https://www.nccgroup.trust/uk/our-research/abusing-privileged-and-unprivileged-linux-containers/

## CIS Controls

| Controls Version | Control                                                                         | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software |      | X    | X    |
| v7               | 5.2 Maintain Secure Images                                                      |      | X    | X    |
