---
name: cis-ubuntu1204-v110-2-25
description: "Disable Automounting"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, filesystem, autofs, automounting, removable-media]
cis_id: "2.25"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: fcde85d3887e7e2b8058e147cf769278f4e402550d9852bb3f27e4bc46ecf948
signature: iBHisdqWVIRt1KVDmcPnmNdMA58ZJ8e2MDyVUsKZSDos1hbbCErA97RxWTPRp6GJXjkAelKxjMNHAqZDe6LACQ==
signed_by: siaga-official
---

# 2.25 Disable Automounting (Scored)

## Profile Applicability

- Level 1

## Description

`autofs` allows automatic mounting of devices, typically including CD/DVDs and USB drives.

## Rationale

With automounting enabled anyone with physical access could attach a USB drive or disc and have it's contents available in system even if they lacked permissions to mount it themselves.

## Audit Procedure

### Using Command Line

Ensure no start conditions listed for `autofs`:

```bash
initctl show-config autofs autofs
```

## Expected Result

No start conditions should be listed for `autofs`. The service should be disabled or not installed.

## Remediation

### Using Command Line

Remove or comment out start lines in `/etc/init/autofs.conf`:

```
#start on runlevel [2345]
```

## Default Value

By default, `autofs` may be installed and enabled on Ubuntu 12.04.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
