---
name: cis-ubuntu2004-v300-1-6-5
description: "Ensure access to /etc/issue is configured"
category: cis-networking
version: "3.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-20.04, banners, issue, permissions]
cis_id: "1.6.5"
cis_benchmark: "CIS Ubuntu Linux 20.04 LTS Benchmark v3.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 76cf8369c6d5bc2fcf35481bdc1d4cea944880b02ae4db2fd804ac65513b0a01
signature: Vc2dtKc30inX5s1nWyJbcUHq54rkx0McrnYPFbJJO4ZVwIhmx2GYogAvSLT0Jx1/Inhqvi/ImJoVovJIm8NSAQ==
signed_by: siaga-official
---

# 1.6.5 Ensure access to /etc/issue is configured (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

The contents of the `/etc/issue` file are displayed to users prior to login for local terminals.

## Rationale

- IF - the `/etc/issue` file does not have the correct access configured, it could be modified by unauthorized users with incorrect or misleading information.

## Audit Procedure

### Command Line

Run the following command and verify `Access` is `644` or more restrictive and `Uid` and `Gid` are both `0/root`:

```bash
# stat -Lc 'Access: (%#a/%A) Uid: ( %u/ %U) Gid: ( %g/ %G)' /etc/issue
```

```
Access: (0644/-rw-r--r--) Uid: ( 0/ root) Gid: ( 0/ root)
```

## Expected Result

Access: (0644/-rw-r--r--) Uid: ( 0/ root) Gid: ( 0/ root)

## Remediation

### Command Line

Run the following commands to set mode, owner, and group on `/etc/issue`:

```bash
# chown root:root $(readlink -e /etc/issue)
# chmod u-x,go-wx $(readlink -e /etc/issue)
```

## Default Value

Access: (0644/-rw-r--r--) Uid: ( 0/ root) Gid: ( 0/ root)

## References

1. NIST SP 800-53 Rev. 5: AC-3, MP-2

## CIS Controls

| Controls Version | Control                                               | IG 1 | IG 2 | IG 3 |
| ---------------- | ----------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.3 Configure Data Access Control Lists               | \*   | \*   | \*   |
| v7               | 14.6 Protect Information through Access Control Lists | \*   | \*   | \*   |

MITRE ATT&CK Mappings: T1222, T1222.002 | TA0005 | M1022
