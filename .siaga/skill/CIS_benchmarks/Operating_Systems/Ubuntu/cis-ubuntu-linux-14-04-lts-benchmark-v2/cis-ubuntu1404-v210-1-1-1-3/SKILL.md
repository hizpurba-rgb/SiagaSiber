---
name: "CIS Ubuntu 14.04 LTS - 1.1.1.3 Ensure mounting of jffs2 filesystems is disabled"
description: "Ensure the jffs2 filesystem type is disabled to reduce attack surface"
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
cis_id: "1.1.1.3"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "medium"
sha256: c1c4c4fc42ecd70318480387a62ea38ffb69d04ac7e6bdda8b8ec7faef01399b
signature: KN1lWMFh7T/dtLmeGQVXFMhPXJS4p9WRBtgOzNUBbSE1f3OvOHnfkzUmct0NzPJj8olyUlEmqbb2TjyidAUNAw==
signed_by: siaga-official
---

# 1.1.1.3 Ensure mounting of jffs2 filesystems is disabled (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The jffs2 (journaling flash filesystem 2) filesystem type is a log-structured filesystem used in flash memory devices.

## Rationale

Removing support for unneeded filesystem types reduces the local attack surface of the system. If this filesystem type is not needed, disable it.

## Audit Procedure

```bash
modprobe -n -v jffs2
# Expected output: install /bin/true

lsmod | grep jffs2
# Expected output: <No output>
```

## Expected Result

`modprobe -n -v jffs2` should return `install /bin/true` and `lsmod | grep jffs2` should return no output.

## Remediation

```bash
# Edit or create the file /etc/modprobe.d/CIS.conf and add the following line:
echo "install jffs2 /bin/true" >> /etc/modprobe.d/CIS.conf

# Unload the jffs2 module:
rmmod jffs2
```

## Default Value

By default, jffs2 filesystem mounting is allowed.

## References

- CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0
- CIS Controls: 13 Data Protection

## Profile

- Level 1
