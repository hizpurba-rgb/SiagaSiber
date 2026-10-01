---
name: cis-docker-7.3
description: "Ensure that all Docker swarm overlay networks are encrypted"
category: cis-docker
version: "1.8.0"
author: siaga-official
tags: [cis, docker, swarm, orchestration, networking, encryption]
cis_id: "7.3"
cis_benchmark: "CIS Docker Benchmark v1.8.0"
tech_stack: [linux, docker]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 7b405cbb3d9a6022ef839aab0ee6ba303b57cf95a1794ad3300d8625a90b9489
signature: 8kADWdBfcnYgkiC08Jvq4eonKq2H5Y3LQMvGBEGgDYm3A/MAreQsJAoeJFkbbq5NvkhHpYVGI1RZZ/svVlKXAw==
signed_by: siaga-official
---

# 7.3 Ensure that all Docker swarm overlay networks are encrypted (Manual)

## Profile Applicability

- Level 1 - Docker Swarm

## Description

Ensure that all Docker swarm overlay networks are encrypted.

## Rationale

By default, data exchanged between containers on nodes on the overlay network is not encrypted. This could potentially expose traffic between containers.

## Impact

None

## Audit Procedure

You should run the command below to ensure that each overlay network has been encrypted.

```
docker network ls --filter driver=overlay --quiet | xargs docker network inspect --format '{{.Name}} {{ .Options }}'
```

## Remediation

You should create overlay networks the with `--opt encrypted` flag.

## Default Value

By default, data exchanged in overlay networks in Docker swarm mode is not encrypted.

## References

1. https://docs.docker.com/network/overlay/#encrypt-traffic-on-an-overlay-network

## CIS Controls

| Controls Version | Control                                                                                                                                                                           | IG 1 | IG 2 | IG 3 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.10 Encrypt Sensitive Data in Transit<br>Encrypt sensitive data in transit. Example implementations can include: Transport Layer Security (TLS) and Open Secure Shell (OpenSSH). |      | ●    | ●    |
| v7               | 14.4 Encrypt All Sensitive Information in Transit<br>Encrypt all sensitive information in transit.                                                                                |      | ●    | ●    |
