---
name: cis-ubuntu1204-v110-8-3-1
description: "Install AIDE"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, logging, aide, file-integrity, intrusion-detection]
cis_id: "8.3.1"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: efcecab443a533861fc1b134f8393af4262e87a5860f1ddd399e1c4aa779ee10
signature: 5lNVD0gUjD2LwTzJKDBm5bPo5fZF2Xv+D4BsUiERlNIFUEcaI8dDo+PYJDacmCody0rtRWX/Jq7ACQh9D0dwAA==
signed_by: siaga-official
---

# 8.3.1 Install AIDE (Scored)

## Profile Applicability

- Level 2

## Description

In some installations, AIDE is not installed automatically.

## Rationale

Install AIDE to make use of the file integrity features to monitor critical files for changes that could affect the security of the system.

## Audit Procedure

### Using Command Line

Run the following to ensure `aide` is installed:

```bash
dpkg -s aide
```

## Expected Result

Ensure package status is `installed ok installed`.

## Remediation

### Using Command Line

Install AIDE:

```bash
apt-get install aide
```

Initialize AIDE:

```bash
aideinit
cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db
```

**Note:** The prelinking feature can interfere with AIDE because it alters binaries to speed up their start up times. Run `/usr/sbin/prelink -ua` to restore the binaries to their prelinked state, thus avoiding false positives from AIDE.

## Default Value

AIDE is not installed by default.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 2 - Scored
