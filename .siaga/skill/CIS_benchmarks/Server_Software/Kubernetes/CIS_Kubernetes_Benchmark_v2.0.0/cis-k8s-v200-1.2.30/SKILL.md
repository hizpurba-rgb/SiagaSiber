---
name: cis-k8s-v200-1.2.30
description: "Ensure that the --service-account-extend-token-expiration parameter is set to false (Automated)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, api-server, authentication, service-account, token-expiration]
cis_id: "1.2.30"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 540879752255008edf3d62df358e35acde2635bdfb92185e6b74c25316187951
signature: ei0PfP/33zGcfuroQf9dKk0aN7w/rCaMy2Fo2p1+UpnH0l8FQmqcxyIO0ubmIjTdeURIs4xSAm5IMjvhsBw/Dg==
signed_by: siaga-official
---

# 1.2.30 Ensure that the --service-account-extend-token-expiration parameter is set to false (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

By default Kubernetes extends service account token lifetimes to one year to aid in transition from the legacy token settings.

## Rationale

This default setting is not ideal for security as it ignores other settings related to maximum token lifetime and means that a lost or stolen credential could be valid for an extended period of time.

## Impact

Disabling this setting means that the service account token expiry set in the cluster will be enforced, and service account tokens will expire at the end of that time frame.

## Audit

Run the following command on the Control Plane node:

```bash
ps -ef | grep kube-apiserver
```

Verify that the --service-account-extend-token-expiration argument is set to false.

## Remediation

Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml on the Control Plane node and set the --service-account-extend-token-expiration parameter to false.

```
--service-account-extend-token-expiration=false
```

## Default Value

By default, this parameter is set to true.

## References

1. https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.10 Encrypt Sensitive Data in Transit            |      | \*   | \*   |
| v7               | 14.4 Encrypt All Sensitive Information in Transit |      | \*   | \*   |
