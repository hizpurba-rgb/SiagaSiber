---
name: cis-ubuntu1604-v200-1-1-7
description: "Ensure nodev option set on /dev/shm partition"
category: cis-storage
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, filesystem, dev-shm, nodev, mount-option]
cis_id: "1.1.7"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c6dfa2fd0b3fb15fbe8d0c8eb07d7136b7733f3eed33102499da725af2e45557
signature: WAeQdve6i2NlrFqc/wCZ0W7xN+S/Sj7c9En/8RN1uPlxkRroozh7enaNupk77b6tNpxjpmtQXJfoMzH2EoAaCw==
signed_by: siaga-official
---

# Ensure nodev option set on /dev/shm partition

## Description

The nodev mount option specifies that the filesystem cannot contain special devices.

## Rationale

Since the /dev/shm filesystem is not intended to support devices, set this option to ensure that users cannot attempt to create special devices in /dev/shm partitions.

## Impact

None noted.

## Audit Procedure

### Command Line

```bash
# Run the following command and verify that nothing is returned:
findmnt -n /dev/shm | grep -v nodev
```

## Expected Result

No output should be returned.

## Remediation

### Command Line

```bash
# Edit the /etc/fstab file and add nodev to the fourth field (mounting options) for the /dev/shm partition.
# See the fstab(5) manual page for more information.
# Run the following command to remount /dev/shm:
mount -o remount,nosuid,nodev,noexec /dev/shm
```

## Default Value

Not set by default.

## References

- CIS Controls Version 7 - 5.1 Establish Secure Configurations: Maintain documented, standard security configuration standards for all authorized operating systems and software.

## Profile

Level 1 - Server / Level 1 - Workstation, Assessment: Automated
