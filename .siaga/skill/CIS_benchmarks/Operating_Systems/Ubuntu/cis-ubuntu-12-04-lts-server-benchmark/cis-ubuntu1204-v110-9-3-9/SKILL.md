---
name: cis-ubuntu1204-v110-9-3-9
description: "Set SSH PermitEmptyPasswords to No"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, authentication, ssh, empty-passwords]
cis_id: "9.3.9"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 7974a8bebf1e4305476c620b34a129fa583ccb133f114bebfe0712c9d2e5f748
signature: YwANxfT7vhYoTfTGE7X04rxMuJtiAzs8sq6Dka3mGehuE11YuAvKs9amjU3uSoQOkz2bLAH0P1vOATMJTC0ABQ==
signed_by: siaga-official
---

# 9.3.9 Set SSH PermitEmptyPasswords to No (Scored)

## Profile Applicability

- Level 1

## Description

The `PermitEmptyPasswords` parameter specifies if the server allows login to accounts with empty password strings.

## Rationale

Disallowing remote shell access to accounts that have an empty password reduces the probability of unauthorized access to the system.

## Audit Procedure

### Using Command Line

To verify the correct SSH setting, run the following command and verify that the output is as shown:

```bash
grep "^PermitEmptyPasswords" /etc/ssh/sshd_config
```

## Expected Result

```
PermitEmptyPasswords no
```

## Remediation

### Using Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```bash
PermitEmptyPasswords no
```

## Default Value

PermitEmptyPasswords no

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
