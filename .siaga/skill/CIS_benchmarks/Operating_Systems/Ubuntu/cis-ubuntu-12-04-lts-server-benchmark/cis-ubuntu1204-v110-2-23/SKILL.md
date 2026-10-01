---
name: cis-ubuntu1204-v110-2-23
description: "Disable Mounting of squashfs Filesystems"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, filesystem, squashfs, kernel-module, attack-surface]
cis_id: "2.23"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 97d3063f4c4de02d7bc2dbf2d65f18a0286f63ab49ff52ebac825c1eda22bcac
signature: ppbo5Vq/GWNApJ+nbaxybBg9uGmiRDbsk4cSuNJtPPAwmSMMj/FTP6fFx9blsvLkwwqJxcJEZK47LCxOLcJRCw==
signed_by: siaga-official
---

# 2.23 Disable Mounting of squashfs Filesystems (Not Scored)

## Profile Applicability

- Level 2

## Description

The `squashfs` filesystem type is a compressed read-only Linux filesystem embedded in small footprint systems (similar to `cramfs`). A `squashfs` image can be used without having to first decompress the image.

## Rationale

Removing support for unneeded filesystem types reduces the local attack surface of the server. If this filesystem type is not needed, disable it.

## Audit Procedure

### Using Command Line

```bash
/sbin/modprobe -n -v squashfs
/sbin/lsmod | grep squashfs
```

## Expected Result

The first command should output `install /bin/true`. The second command should produce no output (module not loaded).

## Remediation

### Using Command Line

Edit or create the file `/etc/modprobe.d/CIS.conf` and add the following line:

```
install squashfs /bin/true
```

## Default Value

By default, the `squashfs` module is available for loading.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 2 - Not Scored
