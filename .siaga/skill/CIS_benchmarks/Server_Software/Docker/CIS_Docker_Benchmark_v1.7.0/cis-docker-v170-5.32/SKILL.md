---
name: cis-docker-v170-5.32
description: "Ensure that the Docker socket is not mounted inside any containers"
category: cis-docker
version: "1.7.0"
author: siaga-official
tags: [cis, docker, runtime, socket, privileged-access]
cis_id: "5.32"
cis_benchmark: "CIS Docker Benchmark v1.7.0"
tech_stack: [docker]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 12b83bb77925cb8ae118875a296b47e2f4cf117d12ee4068a36af3faa6d8464a
signature: yoI4pk4MIwQ4Cfd2v8kzARqw+6Bb5wDOjinF7x6tT6LTTlHSIBKu3RN0EQD4OF2zBScDDBZ2e82IuffYAb4QCQ==
signed_by: siaga-official
---

# CIS Docker Benchmark v1.7.0 - Control 5.32

## Profile Applicability

- **Level:** 1
- **Type:** Manual
- **Platform:** Docker - Linux

## Description

The Docker socket `docker.sock` should not be mounted inside a container.

## Rationale

If the Docker socket is mounted inside a container it could allow processes running within the container to execute Docker commands which would effectively allow for full control of the host.

## Impact

None

## Audit Procedure

You should run the following command:

```bash
docker ps --quiet --all | xargs docker inspect --format '{{ .Id }}: Volumes={{ .Mounts }}' | grep docker.sock
```

This would return any instances where `docker.sock` had been mapped to a container as a volume.

## Remediation

You should ensure that no containers mount `docker.sock` as a volume.

## Default Value

By default, `docker.sock` is not mounted inside containers.

## References

1. https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-socket-option

## CIS Controls

**v8:**

- **5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts**
  - Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account.

**v7:**

- **4 Controlled Use of Administrative Privileges**
  - Controlled Use of Administrative Privileges
