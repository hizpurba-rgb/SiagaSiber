---
name: cis-ubuntu1204-v110-2-21
description: "Disable Mounting of hfs Filesystems"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, filesystem, hfs, kernel-module, attack-surface]
cis_id: "2.21"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: ddc6a20a2a7ee9501f1aea6b8141c2b03dd9b8515c3ba4530064dd1ff45469c4
signature: 22L8a/WNNN5d6m+GCPL/HIbBEYn7g+rDNubcyVWgO24pRBrZCNfNEoLvGygmghxJuq0dhWmj2oLpmRnVPboWBw==
signed_by: siaga-official
---

# 2.21 Disable Mounting of hfs Filesystems (Not Scored)

## Profile Applicability

- Level 2

## Description

The `hfs` filesystem type is a hierarchical filesystem that allows you to mount Mac OS filesystems.

## Rationale

Removing support for unneeded filesystem types reduces the local attack surface of the server. If this filesystem type is not needed, disable it.

## Audit Procedure

### Using Command Line

```bash
/sbin/modprobe -n -v hfs
/sbin/lsmod | grep hfs
```

## Expected Result

The first command should output `install /bin/true`. The second command should produce no output (module not loaded).

## Remediation

### Using Command Line

Edit or create the file `/etc/modprobe.d/CIS.conf` and add the following line:

```
install hfs /bin/true
```

## Default Value

By default, the `hfs` module is available for loading.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 2 - Not Scored
