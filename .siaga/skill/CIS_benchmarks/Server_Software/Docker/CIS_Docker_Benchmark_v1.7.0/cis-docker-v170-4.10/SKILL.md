---
name: cis-docker-v170-4.10
description: "Ensure secrets are not stored in Dockerfiles"
category: cis-docker
version: "1.7.0"
author: siaga-official
tags: [cis, docker, images, configuration, secrets]
cis_id: "4.10"
cis_benchmark: "CIS Docker Benchmark v1.7.0"
tech_stack: [docker]
cwe_ids: [CWE-312]
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 0275618e8f3ca7e328df03da974b359fea0b1ed44e90fc63d042e1d7e5f75458
signature: EyCx34pdVrk7ZmFmYzPt+SYyw6S68uPgykmZnHNZgV7nQhS4whg/zpzRT3vhgP7o5lTlPY0gwiE+d8ql2XK7AA==
signed_by: siaga-official
---

# CIS Docker Benchmark v1.7.0 - Control 4.10

## Profile Applicability

- Level 1 - Docker - Linux

## Description

Do not store any secrets in Dockerfiles.

## Rationale

Docker images are not opaque and contain information about the commands used to build them. As such secrets should not be included in Dockerfiles used to build images as they will be visible to any users of the image.

## Impact

A proper secrets management process will be required for Docker image building.

## Audit Procedure

Run the below command to get the list of images:

```bash
docker images
```

Run the below command for each image in the list above, and look for any secrets:

```bash
docker history <IMAGE_ID>
```

Alternatively, if you have access to Dockerfile for the image, verify that there are no secrets as described above.

## Remediation

Do not store any kind of secrets within Dockerfiles. Where secrets are required during the build process, make use of a secrets management tool, such as the buildkit builder included with Docker.

## Default Value

By default, there are no restrictions on storing config secrets in the Dockerfiles.

## References

1. https://docs.docker.com/develop/develop-images/build_enhancements/#new-docker-build-secret-information

## CIS Controls

**v8:**

- 3 Data Protection - Develop processes and technical controls to identify, classify, securely handle, retain, and dispose of data.

**v7:**

- 13 Data Protection - Data Protection

## Assessment Status

Manual
