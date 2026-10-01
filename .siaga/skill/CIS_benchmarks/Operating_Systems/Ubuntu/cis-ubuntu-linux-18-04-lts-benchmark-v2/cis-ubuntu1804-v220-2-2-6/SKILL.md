---
name: cis-ubuntu1804-v220-2-2-6
description: "Ensure NFS is not installed"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, services, nfs]
cis_id: "2.2.6"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 8b84caea53a32f0545e3c0e3089115d6244cdff7ed37e40989a4deacf4929ed7
signature: YsjVw6UkB2kwlWsNBhFHwJUwAAxRSiPPeYrzbBXuOrAsy63NUmgRndQ8Vr31uVxSwmtHmNrEl/qZ2208DyauDQ==
signed_by: siaga-official
---

# 2.2.6 Ensure NFS is not installed (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

The Network File System (NFS) is one of the first and most widely distributed file systems in the UNIX environment. It provides the ability for systems to mount file systems of other servers through the network.

## Rationale

If the system does not export NFS shares, it is recommended that the `nfs-kernel-server` package be removed to reduce the remote attack surface.

## Audit Procedure

### Command Line

Run the following command to verify `nfs` is not installed:

```bash
# dpkg-query -s nfs-kernel-server &>/dev/null && echo "nfs-kernel-server is installed"
```

Nothing should be returned.

## Expected Result

No output (empty result).

## Remediation

### Command Line

Run the following command to remove `nfs`:

```bash
# apt purge nfs-kernel-server
```

## References

1. NIST SP 800-53 Rev. 5: CM-7

## CIS Controls

- v8: 4.8 - Uninstall or Disable Unnecessary Services on Enterprise Assets and Software
- v7: 9.2 - Ensure Only Approved Ports, Protocols and Services Are Running
