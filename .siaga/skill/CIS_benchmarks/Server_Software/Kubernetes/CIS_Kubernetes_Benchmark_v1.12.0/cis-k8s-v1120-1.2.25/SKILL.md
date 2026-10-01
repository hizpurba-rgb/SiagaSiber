---
name: cis-k8s-v1120-1.2.25
description: "Ensure that the --client-ca-file argument is set as appropriate (Automated)"
category: cis-k8s
version: "1.12.0"
author: siaga-official
tags: [cis, kubernetes, control-plane, api-server, tls, certificates, client-ca]
cis_id: "1.2.25"
cis_benchmark: "CIS Kubernetes Benchmark v1.12.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 3e7a76e9ed3cebb31fe2ecc89ce44bf8fcdb34acb63162fa9796e5ff4db63625
signature: n/6yKFZpWiZ8/vL+aVBj3nFqMVqPCaGY9QH3HycgBIt/x+6hv7D89qXbL87ERR/Hfc3/ss6wdNFnXmpZ23Y8DQ==
signed_by: siaga-official
---

# 1.2.25 Ensure that the --client-ca-file argument is set as appropriate (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Setup TLS connection on the API server.

## Rationale

API server communication contains sensitive parameters that should remain encrypted in transit. Configure the API server to serve only HTTPS traffic. If `--client-ca-file` argument is set, any request presenting a client certificate signed by one of the authorities in the `client-ca-file` is authenticated with an identity corresponding to the CommonName of the client certificate.

## Impact

TLS and client certificate authentication must be configured for your Kubernetes cluster deployment.

## Audit

Run the following command on the Control Plane node:

```bash
ps -ef | grep kube-apiserver
```

Verify that the `--client-ca-file` argument exists and it is set as appropriate.

## Remediation

Follow the Kubernetes documentation and set up the TLS connection on the apiserver. Then, edit the API server pod specification file `/etc/kubernetes/manifests/kube-apiserver.yaml` on the master node and set the client certificate authority file.

```
--client-ca-file=<path/to/client-ca-file>
```

## Default Value

By default, `--client-ca-file` argument is not set.

## References

1. [https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/)
2. [https://github.com/kelseyhightower/docker-kubernetes-tls-guide](https://github.com/kelseyhightower/docker-kubernetes-tls-guide)

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.10 Encrypt Sensitive Data in Transit            |      | \*   | \*   |
| v7               | 14.4 Encrypt All Sensitive Information in Transit |      | \*   | \*   |
