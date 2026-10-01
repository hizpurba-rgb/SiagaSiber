---
name: "CIS Ubuntu 14.04 LTS - 1.1.14 Ensure nodev option set on /run/shm partition"
description: "Ensure nodev option is set on /run/shm partition to prevent special device access"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - filesystem
cis_id: "1.1.14"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "low"
sha256: 5f3e2a6ed530b3b9e07c8aa28d78dfebf554944c29a0b5f0ee507230219378d4
signature: Azcysdi1HN7Q05DYZLNDzSq/+gFflzk1pNn5MrFe7lE8oLJtae6cgtCfo00b8RG1332H5BTQ2xuyMSxjmBv0BQ==
signed_by: siaga-official
---

# 1.1.14 Ensure nodev option set on /run/shm partition (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The nodev mount option specifies that the filesystem cannot contain special devices.

## Rationale

Since the /run/shm filesystem is not intended to support devices, set this option to ensure that users cannot attempt to create special devices in /run/shm partitions.

## Audit Procedure

```bash
mount | grep /run/shm
# Verify that the nodev option is set on /run/shm
# Expected output: tmpfs on /run/shm type tmpfs (rw,nosuid,nodev,noexec,relatime)
```

## Expected Result

The output should show the `nodev` option is set for the /run/shm partition.

## Remediation

```bash
# Edit the /etc/fstab file and add nodev to the fourth field (mounting options)
# for the /run/shm partition. See the fstab(5) manual page for more information.

# Run the following command to remount /run/shm:
mount -o remount,nodev /run/shm
```

## Default Value

By default, the nodev option is not set on /run/shm.

## References

- CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0

## Profile

- Level 1
