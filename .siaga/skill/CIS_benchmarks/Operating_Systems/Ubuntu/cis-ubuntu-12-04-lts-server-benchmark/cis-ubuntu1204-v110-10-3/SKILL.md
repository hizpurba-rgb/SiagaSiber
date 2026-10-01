---
name: cis-ubuntu1204-v110-10-3
description: "Set Default Group for root Account"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, root, group, user-management]
cis_id: "10.3"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 5cd2baeb461ddd8a0c558fb811165e55cd571e6da724813f86b16568903b6851
signature: VRTIYRV7gAKW18HaNlgp1TdJCu7iv+sYmkoaAq/jGmFPwxPDSkMDWyu9R/W1CwDKw7qa5Zc/gBN7xWBIa9ZSDQ==
signed_by: siaga-official
---

# 10.3 Set Default Group for root Account (Scored)

## Profile Applicability

- Level 1

## Description

The `usermod` command can be used to specify which group the root user belongs to. This affects permissions of files that are created by the root user.

## Rationale

Using GID 0 for the root account helps prevent root-owned files from accidentally becoming accessible to non-privileged users.

## Audit Procedure

### Using Command Line

```bash
grep "^root:" /etc/passwd | cut -f4 -d:
```

## Expected Result

The command should return `0`.

## Remediation

### Using Command Line

```bash
usermod -g 0 root
```

## Default Value

GID 0 is the default group for root.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
