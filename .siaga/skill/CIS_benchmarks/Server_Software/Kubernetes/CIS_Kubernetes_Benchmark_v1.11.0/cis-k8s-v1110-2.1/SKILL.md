---
name: cis-k8s-v1110-2.1
description: "Ensure that the --cert-file and --key-file arguments are set as appropriate (Automated)"
category: cis-k8s
version: "1.11.0"
author: siaga-official
tags: [cis, kubernetes, etcd, tls, encryption]
cis_id: "2.1"
cis_benchmark: "CIS Kubernetes Benchmark v1.11.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 8c38bf3b5bd420d955fd6f744a8f133f173283ab94dd8e0a52872dad290b90de
signature: GO/lgDyDybFOZ6qmQiriJZRGf4SFxRwAQN4mZ2bxmRiuQdHsN7X+taYdfpMQ+Bikrkq3Wbvhx9wryVe1yWw9DA==
signed_by: siaga-official
---

# 2.1 Ensure that the --cert-file and --key-file arguments are set as appropriate (Automated)

## Profile Applicability

- Level 1 - Master Node

## Description

Configure TLS encryption for the etcd service.

## Rationale

etcd is a highly-available key value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive in nature and should be encrypted in transit.

## Impact

Client connections only over TLS would be served.

## Audit

Run the following command on the etcd server node

```bash
ps -ef | grep etcd
```

Verify that the `--cert-file` and the `--key-file` arguments are set as appropriate.

## Remediation

Follow the etcd service documentation and configure TLS encryption.
Then, edit the etcd pod specification file `/etc/kubernetes/manifests/etcd.yaml` on the master node and set the below parameters.

```
--cert-file=</path/to/ca-file>
--key-file=</path/to/key-file>
```

## Default Value

By default, TLS encryption is not set.

## References

1. https://coreos.com/etcd/docs/latest/op-guide/security.html
2. https://kubernetes.io/docs/admin/etcd/

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.11 Encrypt Sensitive Data at Rest               |      | X    | X    |
| v7               | 14.4 Encrypt All Sensitive Information in Transit |      | X    | X    |
