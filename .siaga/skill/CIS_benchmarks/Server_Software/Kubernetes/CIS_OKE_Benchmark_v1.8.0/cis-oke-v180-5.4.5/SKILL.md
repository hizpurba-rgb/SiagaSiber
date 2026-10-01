---
name: cis-oke-v180-5.4.5
description: "Encrypt traffic to HTTPS load balancers with TLS certificates (Manual)"
category: cis-oke
version: "1.8.0"
author: siaga-official
tags:
  [cis, oke, kubernetes, oci, managed-services, cluster-networking, tls, https, load-balancer, encryption-in-transit]
cis_id: "5.4.5"
cis_benchmark: "CIS Oracle Cloud Infrastructure Container Engine for Kubernetes (OKE) Benchmark v1.8.0"
tech_stack: [kubernetes, oci, oke]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b9d7a344ec79919e5818cba2b6858e86d61ab5e4a2d3f0f150b3c81a5bf948a1
signature: Rq8q5gtqxQwbU4poFmVj5O3MAqXYSKrS8B4vCENkh1J/DLIdFuEoqkH/5ytRaMVe7mHjSvsquuzwGDSyGkunCA==
signed_by: siaga-official
---

# 5.4.5 Encrypt traffic to HTTPS load balancers with TLS certificates (Manual)

## Profile Applicability

- Level 1

## Description

Encrypt traffic to HTTPS load balancers using TLS certificates.

## Rationale

Encrypting traffic between users and your Kubernetes workload is fundamental to protecting data sent over the web.

## Audit

Your load balancer vendor can provide details on auditing the certificates and policies required to utilize TLS.

## Remediation

Your load balancer vendor can provide details on configuring HTTPS with TLS.

## CIS Controls

| Controls Version | Control                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.10 Encrypt Sensitive Data in Transit            |      | x    | x    |
| v7               | 14.4 Encrypt All Sensitive Information in Transit |      | x    | x    |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques | Tactics | Mitigations |
| --------------------------- | ------- | ----------- |
| T1609                       | TA0002  | M1035       |
