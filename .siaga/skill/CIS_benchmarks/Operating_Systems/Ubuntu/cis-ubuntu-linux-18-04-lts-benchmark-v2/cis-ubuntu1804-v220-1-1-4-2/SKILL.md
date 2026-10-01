---
name: cis-ubuntu1804-v220-1-1-4-2
description: "Ensure nodev option set on /var/tmp partition"
category: cis-storage
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, partition, var-tmp, mount-option, nodev]
cis_id: "1.1.4.2"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: cabdd10626ec92f55a0636340aeb2e59fe0079ea79cfa035dd89da4c4b314dff
signature: 9/IND63w9zmQH9UvxkjMKcr0ereRUiyjwmvQQcni4G5LfEU3gHQPPK5TTCCa3EqUHgpbnzcj5ljzh5RK+lD2AA==
signed_by: siaga-official
---

# Ensure nodev option set on /var/tmp partition

## Profile

Level 1 - Server / Level 1 - Workstation, Assessment: Automated

## Description

The nodev mount option specifies that the filesystem cannot contain special devices.

## Rationale

Since the /var/tmp filesystem is not intended to support devices, set this option to ensure that users cannot create block or character special devices in /var/tmp.

## Impact

None noted.

## Audit Procedure

### Command Line

Verify that the nodev option is set for the /var/tmp mount.

```bash
# findmnt -kn /var/tmp | grep nodev
```

## Expected Result

```
/var/tmp     /dev/sda3  ext4   rw,nosuid,nodev,noexec,relatime,seclabel
```

## Remediation

### Command Line

Edit the /etc/fstab file and add nodev to the fourth field (mounting options) for the /var/tmp partition.

```bash
# Example:
# <device> /var/tmp   <fstype>   defaults,rw,nosuid,nodev,noexec,relatime   0 0

# Run the following command to remount /var/tmp with the configured options:
mount -o remount /var/tmp
```

## Default Value

Not set by default.

## References

1. See the fstab(5) manual page for more information.
2. NIST SP 800-53 Rev. 5: AC-3, MP-2

## CIS Controls

v8 - 3.3 Configure Data Access Control Lists (IG 1, IG 2, IG 3)
v7 - 14.6 Protect Information through Access Control Lists (IG 1, IG 2, IG 3)

MITRE ATT&CK Mappings: T1200, T1200.000 (TA0005) - M1022
