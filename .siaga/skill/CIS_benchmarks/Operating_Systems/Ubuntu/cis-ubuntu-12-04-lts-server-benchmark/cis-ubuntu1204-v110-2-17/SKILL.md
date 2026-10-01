---
name: cis-ubuntu1204-v110-2-17
description: "Set Sticky Bit on All World-Writable Directories"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, filesystem, sticky-bit, permissions, world-writable]
cis_id: "2.17"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c946af1d6eb526688c4bd2a539fd7396b54fdc5e7efcab3f1eff44a4a441b24b
signature: aXXW5M41f9ZIDZK60GrbKXzOQcWMJHUklje3+yioYRxaYFWBHtby6bxOVisooy5epKNsRHXVvAD9T0dUjFcZAg==
signed_by: siaga-official
---

# 2.17 Set Sticky Bit on All World-Writable Directories (Scored)

## Profile Applicability

- Level 1

## Description

Setting the sticky bit on world writable directories prevents users from deleting or renaming files in that directory that are not owned by them.

## Rationale

This feature prevents the ability to delete or rename files in world writable directories (such as `/tmp`) that are owned by another user.

## Audit Procedure

### Using Command Line

```bash
df --local -P | awk {'if (NR!=1) print $6'} | xargs -I '{}' find '{}' -xdev -type d \( -perm -0002 -a ! -perm -1000 \) 2>/dev/null
```

## Expected Result

No output should be returned. If any directories are listed, the sticky bit is not set on them.

## Remediation

### Using Command Line

```bash
df --local -P | awk {'if (NR!=1) print $6'} | xargs -I '{}' find '{}' -xdev -type d -perm -0002 2>/dev/null | xargs chmod a+t
```

## Default Value

By default, the sticky bit is set on `/tmp` but may not be set on other world-writable directories.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
