---
name: cis-docker-3.11
description: "Ensure that Docker server certificate file ownership is set to root:root"
category: cis-docker
version: "1.8.0"
author: siaga-official
tags: [cis, docker, linux, containers, daemon-files, file-permissions, ownership]
cis_id: "3.11"
cis_benchmark: "CIS Docker Benchmark v1.8.0"
tech_stack: [linux, docker]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 798fbc8a92aadec2df8978b7d446e1bcdda2bd4057840b2f9045756b8b334f4a
signature: Q0ehETRBsJzPykgz6t8oURc7i+twHu+zgM7yyqBFmNNKr18UZRs8w4nwIqJxLCLhkYxFoqJ8x+Po0cFGM/W8Dw==
signed_by: siaga-official
---

# Ensure that Docker server certificate file ownership is set to root:root (Manual)

## Profile Applicability

- Level 1 - Docker - Linux

## Description

You should verify that the Docker server certificate file (the file that is passed along with the `--tlscert` parameter) is individual owned and group owned by `root`.

## Rationale

The Docker server certificate file should be protected from any tampering. It is used to authenticate the Docker server based on the given server certificate. It must therefore be individually owned and group owned by `root` to prevent modification by less privileged users.

## Impact

None.

## Audit Procedure

You should execute the command below to verify that the Docker server certificate file is individually owned and group owned by `root`:

```bash
stat -c %U:%G <path to Docker server certificate file> | grep -v root:root
```

The above command should return no results.

## Remediation

You should run the following command:

```bash
chown root:root <path to Docker server certificate file>
```

This sets the individual ownership and the group ownership for the Docker server certificate file to `root`.

## Default Value

By default, the ownership and group-ownership for Docker server certificate file is correctly set to `root`.

## References

1. https://docs.docker.com/registry/insecure/
2. https://docs.docker.com/engine/security/https/

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                                                                                                      | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.4 Restrict Administrator Privileges to Dedicated Administrator Accounts - Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account. | ●    | ●    | ●    |
| v7               | 4 Controlled Use of Administrative Privileges - Controlled Use of Administrative Privileges                                                                                                                                                                                                                                  |      |      |      |
