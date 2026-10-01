---
name: cis-k8s-v1110-1.2.24
description: "Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, api-server, tls-cert-file, tls-private-key-file, tls, encryption]
cis_id: "1.2.24"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: df7b9c53846251c717ade2e1e5f4f47c2b906921f4f2f00bbcab366351cd56e0
signature: 25PkTFE0O6c0Ro0C/MBFaOWWo56laeQV0COTN/51KxCpIl4sOBwZjy3H6myUKohjcN42QIYXAnVbYFaSGdm1CQ==
signed_by: siaga-official
---

# 1.2.24 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Setup TLS connection on the API server.

## Rationale

API server communication contains sensitive parameters that should remain encrypted in transit. Configure the API server to serve only HTTPS traffic.

## Impact

TLS and client certificate authentication must be configured for your Kubernetes cluster deployment.

## Audit

Run the following command on the Control Plane node:

```bash
ps -ef | grep kube-apiserver
```

Verify that the `--tls-cert-file` and `--tls-private-key-file` arguments exist and they are set as appropriate.

## Remediation

Follow the Kubernetes documentation and set up the TLS connection on the apiserver. Then, edit the API server pod specification file `/etc/kubernetes/manifests/kube-apiserver.yaml` on the master node and set the TLS certificate and private key file parameters.

```
--tls-cert-file=<path/to/tls-certificate-file>
--tls-private-key-file=<path/to/tls-key-file>
```

## Default Value

By default, `--tls-cert-file` and `--tls-private-key-file` are presented and created for use.

## References

1. https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/
2. https://github.com/kelseyhightower/docker-kubernetes-tls-guide

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.10 Encrypt Sensitive Data in Transit            |      | \*   | \*   |
| v7               | 14.4 Encrypt All Sensitive Information in Transit |      | \*   | \*   |
