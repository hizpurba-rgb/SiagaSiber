---
name: cis-ubuntu1604-v200-6-1-3
description: "Ensure permissions on /etc/passwd- are configured"
category: cis-storage
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, file-permissions, maintenance]
cis_id: "6.1.3"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 05e5dd0b919a6b7464c5b012f4d1fa5bfe28e2dcc4068955e0ff880d7de1fb2b
signature: bM9+f3ErBUG/RCMJONeg5AmffLmqkQrJY/3gWbp8mG1UdXSfoarP9btae2wMIyEWxinGEj2VVlniAZm+MXNlBw==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - 6.1.3

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `/etc/passwd-` file contains backup user account information.

## Rationale

It is critical to ensure that the `/etc/passwd-` file is protected from unauthorized access. Although it is protected by default, the file permissions could be changed either inadvertently or through malicious actions.

## Audit Procedure

### Command Line

Run the following command and verify `Uid` and `Gid` are both `0/root` and `Access` is `644` or more restrictive:

```bash
stat /etc/passwd-
```

## Expected Result

```
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
```

## Remediation

### Command Line

Run the following command to set permissions on `/etc/passwd-`:

```bash
chown root:root /etc/passwd-
chmod u-x,go-wx /etc/passwd-
```

## Default Value

Access: (0644/-rw-r--r--) Uid: ( 0/ root) Gid: ( 0/ root)

## References

1. CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0

## CIS Controls

| Controls Version | Control                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| v7               | 16.4 Encrypt or Hash all Authentication Credentials<br>Encrypt or hash with a salt all authentication credentials when stored. |

## Assessment Status

Automated
