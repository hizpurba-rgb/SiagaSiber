---
name: cis-ubuntu1204-v110-2-12
description: "Add noexec Option to Removable Media Partitions"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, filesystem, removable-media, noexec, mount-options]
cis_id: "2.12"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 889c387d95efb764dcb4558545e56b90bdcee5db7ae49c164e79c3940f4fe5ea
signature: 942Cc12WAhoyVlvj2kdJ5+Q2Pb3jXJ38B7fKIv4zveL8n7slKHnjGVbrDX5b9zGVusnSXZUaDhK6O4Y+wPDTCw==
signed_by: siaga-official
---

# 2.12 Add noexec Option to Removable Media Partitions (Not Scored)

## Profile Applicability

- Level 1

## Description

Set `noexec` on removable media to prevent programs from executing from the removable media.

## Rationale

Setting this option on a file system prevents users from executing programs from the removable media. This deters users from being able to introduce potentially malicious software on the system.

## Audit Procedure

### Using Command Line

```bash
grep <each removable media mountpoint> /etc/fstab
```

Verify that `noexec` is an option.

## Expected Result

The `noexec` option should be present in the mount options for each removable media mountpoint.

## Remediation

### Using Command Line

Edit the `/etc/fstab` file and add `noexec` to the fourth field (mounting options). Look for entries that have mount points that contain words such as floppy or cdrom. See the `fstab(5)` manual page for more information.

## Default Value

By default, the `noexec` option is not set on removable media partitions.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Not Scored
