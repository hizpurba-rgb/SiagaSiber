---
name: cis-ubuntu1204-v110-12-2
description: "Verify Permissions on /etc/shadow"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, file-permissions, shadow, access-control, passwords]
cis_id: "12.2"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 5e1dc915333054db17d4f81ad5975a6373d8b0aaf4b8d3dc14429336055be52d
signature: gl7MNi8Rofco7/IW76W4Kisthsk67sPbOmc3BxjyK2i/SGOPO/E/uTaNgeUEjqq3PWkxl/E0qlcOXr+48IO5CA==
signed_by: siaga-official
---

# 12.2 Verify Permissions on /etc/shadow (Scored)

## Profile Applicability

- Level 1

## Description

The `/etc/shadow` file is used to store the information about user accounts that is critical to the security of those accounts, such as the hashed password and other security information.

## Rationale

If attackers can gain read access to the `/etc/shadow` file, they can easily run a password cracking program against the hashed password to break it. Other security information that is stored in the `/etc/shadow` file (such as expiration) could also be useful to subvert the user accounts.

## Audit Procedure

### Using Command Line

Run the following command to determine the permissions on the `/etc/shadow` file. Ensure world has no access, group has no write or execute access.

```bash
/bin/ls -l /etc/shadow
```

## Expected Result

```
-rw-r----- 1 root shadow <size> <date> shadow
```

Permissions should be `o-rwx,g-rw` or more restrictive.

## Remediation

### Using Command Line

If the permissions of the `/etc/shadow` file are incorrect, run the following commands to correct them:

```bash
/bin/chmod o-rwx,g-rw /etc/shadow
```

## Default Value

640 (rw-r-----)

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
