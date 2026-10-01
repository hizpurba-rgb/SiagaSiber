---
name: cis-aks-v180-5.1.4
description: "Minimize Container Registries to only those approved (Manual)"
category: cis-aks
version: "1.8.0"
author: siaga-official
tags: [cis, aks, kubernetes, azure, acr, container-registry, allowlisting, supply-chain]
cis_id: "5.1.4"
cis_benchmark: "CIS Azure Kubernetes Service (AKS) Benchmark v1.8.0"
tech_stack: [kubernetes, azure, aks]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b509be6698e8b2e312a7d2f8afe238ef872ea6ee451c5e81d709243d56cb3505
signature: Exbhocza1ChAPSNUXUxgJO+eAci55NVCf78dctPd2aw3+ltHZBSgDCpZEl1wSRMTVndTfr2qhW8zxloUaAJ+BA==
signed_by: siaga-official
---

# 5.1.4 Minimize Container Registries to only those approved (Manual)

## Profile Applicability

- Level 2

## Description

Use approved container registries.

## Rationale

Allowing unrestricted access to external container registries provides the opportunity for malicious or unapproved containers to be deployed into the cluster. Allowlisting only approved container registries reduces this risk.

## Impact

All container images to be deployed to the cluster must be hosted within an approved container image registry.

## Audit

Review the list of container registries accessible from the AKS cluster and ensure only approved registries are allowed.

## Remediation

If you are using Azure Container Registry you have this option:
https://docs.microsoft.com/en-us/azure/container-registry/container-registry-firewall-access-rules

For other non-AKS repos using admission controllers or Azure Policy will also work.

Limiting or locking down egress traffic is also recommended:
https://docs.microsoft.com/en-us/azure/aks/limit-egress-traffic

## References

1. https://docs.microsoft.com/security/benchmark/azure/security-controls-v2-asset-management#am-6-use-only-approved-applications-in-compute-resources
2. https://docs.microsoft.com/en-us/azure/aks/limit-egress-traffic
3. https://docs.microsoft.com/en-us/azure/container-registry/container-registry-firewall-access-rules

## CIS Controls

| Controls Version | Control                           | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------- | ---- | ---- | ---- |
| v8               | 2.5 Allowlist Authorized Software |      | x    | x    |
| v7               | 5.2 Maintain Secure Images        |      | x    | x    |
| v7               | 5.3 Securely Store Master Images  |      | x    | x    |
