---
name: cis-eks-v180-5.4.5
description: "Encrypt traffic to HTTPS load balancers with TLS certificates (Manual)"
category: cis-eks
version: "1.8.0"
author: siaga-official
tags: [cis, eks, kubernetes, aws, networking, tls, https, load-balancer, encryption-in-transit]
cis_id: "5.4.5"
cis_benchmark: "CIS Amazon Elastic Kubernetes Service (EKS) Benchmark v1.8.0"
tech_stack: [kubernetes, aws, eks]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: e7eb67f9d391c23580d84b92890ff995f82441174dfcc0e93001ec525fc557e2
signature: 1euX/2ffZGEpDgr1wITx6POooCvhTTl3z7iVZ/huvAx4HTwc52y3U/rpNWRKv0KpHH7eCi8t/wiPIaGQcur2CA==
signed_by: siaga-official
---

# 5.4.5 Encrypt traffic to HTTPS load balancers with TLS certificates (Manual)

## Profile Applicability

- Level 1

## Description

Encrypt traffic to HTTPS load balancers using TLS certificates.

## Rationale

Encrypting traffic between users and your Kubernetes workload is fundamental to protecting data sent over the web.

## Impact

None documented.

## Audit Procedure

Your load balancer vendor can provide details on auditing the certificates and policies required to utilize TLS.

## Remediation

Your load balancer vendor can provide details on configuring HTTPS with TLS.

## Default Value

By default, TLS is not enabled on load balancers.

## References

1. https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/data-protection.html
2. https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.10 Encrypt Sensitive Data in Transit            |      | X    | X    |
| v7               | 14.4 Encrypt All Sensitive Information in Transit |      | X    | X    |
