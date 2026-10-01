---
name: "CIS Ubuntu 14.04 LTS - 3.4.5 Ensure permissions on /etc/hosts.deny are configured"
description: "Verify that /etc/hosts.deny has correct ownership and permissions (root:root 644)"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - tcp-wrappers
  - network
cis_id: "3.4.5"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "low"
sha256: b23d4d99906682a5abb8ac6c39f6abf9def9df9dabbad82e90085e9e1fa5ea3a
signature: 1xrEoNomjBQHBjhOWplQTQSwx3v0vMgOdHLzQqSc3QE3W/uHhEB8qbxr7afdASRDyWAIBXF7MnK/G52LppwTBQ==
signed_by: siaga-official
---

# 3.4.5 Ensure permissions on /etc/hosts.deny are configured (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `/etc/hosts.deny` file contains network information that is used by many system applications and therefore must be readable for these applications to operate.

## Rationale

It is critical to ensure that the `/etc/hosts.deny` file is protected from unauthorized write access. Although it is protected by default, the file permissions could be changed either inadvertently or through malicious actions.

## Audit Procedure

Run the following command and verify `Uid` and `Gid` are both `0/root` and `Access` is `644`:

```bash
stat /etc/hosts.deny
# Expected: Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
```

## Expected Result

```
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
```

## Remediation

Run the following commands to set permissions on `/etc/hosts.deny`:

```bash
chown root:root /etc/hosts.deny
chmod 644 /etc/hosts.deny
```

## Default Value

Access: (0644/-rw-r--r--) Uid: ( 0/ root) Gid: ( 0/ root)

## References

- CIS Controls: 5.1 - Minimize And Sparingly Use Administrative Privileges

## Profile

- Level 1 - Server
- Level 1 - Workstation
