---
name: "CIS Ubuntu 14.04 LTS - 5.2.1 Ensure permissions on /etc/ssh/sshd_config are configured"
description: "Verify /etc/ssh/sshd_config ownership and permissions are restricted to root with no group/other access"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - ssh
cis_id: "5.2.1"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "high"
sha256: 37afb70d1c273476a83c95dbaf063be1951fcc56f8703ecaad5f23a60e4fc67a
signature: bgbSBcLsAI0Mjc5ai4KxY+IRES7VgX2IaT1itB3VL7eUjtd0xanLId7ZOzVsxWgkz3dcswMVM/FJWHFooLfkCA==
signed_by: siaga-official
---

# 5.2.1 Ensure permissions on /etc/ssh/sshd_config are configured (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `/etc/ssh/sshd_config` file contains configuration specifications for `sshd`. The command below sets the owner and group of the file to root.

## Rationale

The `/etc/ssh/sshd_config` file needs to be protected from unauthorized changes by non-privileged users.

## Audit Procedure

Run the following command and verify `Uid` and `Gid` are both `0/root` and `Access` does not grant permissions to `group` or `other`:

```bash
stat /etc/ssh/sshd_config
```

## Expected Result

```
Access: (0600/-rw-------)  Uid: (    0/    root)   Gid: (    0/    root)
```

## Remediation

Run the following commands to set ownership and permissions on `/etc/ssh/sshd_config`:

```bash
chown root:root /etc/ssh/sshd_config
chmod og-rwx /etc/ssh/sshd_config
```

## Default Value

Not configured by default.

## References

- CIS Controls: 5.1 - Minimize And Sparingly Use Administrative Privileges

## Profile

- Level 1 - Server
- Level 1 - Workstation
