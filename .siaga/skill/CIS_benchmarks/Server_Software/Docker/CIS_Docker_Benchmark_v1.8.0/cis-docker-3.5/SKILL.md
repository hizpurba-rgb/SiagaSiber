---
name: cis-docker-3.5
description: "Ensure that the /etc/docker directory ownership is set to root:root"
category: cis-docker
version: "1.8.0"
author: siaga-official
tags: [cis, docker, linux, containers, daemon-files, file-permissions, ownership]
cis_id: "3.5"
cis_benchmark: "CIS Docker Benchmark v1.8.0"
tech_stack: [linux, docker]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 9ab91b67b0c608a0acea5f0bfa2cefbbdab26cc207322c1f42759a5a4a5745f8
signature: N2iVjYSalQ5+BvsPjGE1rTCBFJRj27UjL1pkyn8lKc5DB5fs4OP5wWe09+uikVG2xQUlXt9E6n/VsxvBugZ0CA==
signed_by: siaga-official
---

# Ensure that the /etc/docker directory ownership is set to root:root (Automated)

## Profile Applicability

- Level 1 - Docker - Linux

## Description

You should verify that the `/etc/docker` directory ownership and group ownership is correctly set to `root`.

## Rationale

The `/etc/docker` directory contains certificates and keys in addition to various other sensitive files. It should therefore be individual owned and group owned by `root` in order to ensure that it can not be modified by less privileged users.

## Impact

None.

## Audit Procedure

You should execute the command below to verify that the directory is owned and group owned by `root`:

```bash
stat -c %U:%G /etc/docker | grep -v root:root
```

This command should not return any data.

## Remediation

To resolve this issue you should run the following command:

```bash
chown root:root /etc/docker
```

This sets the ownership and group ownership for the directory to `root`.

## Default Value

By default, the ownership and group ownership for this directory is correctly set to `root`.

## References

1. https://docs.docker.com/engine/security/https/

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                                                                                                      | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts - Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account. | ●    | ●    | ●    |
| v7               | 4 Controlled Use of Administrative Privileges - Controlled Use of Administrative Privileges                                                                                                                                                                                                                                  |      |      |      |
