---
name: cis-ubuntu1204-v110-9-4
description: "Restrict root Login to System Console"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, authentication, root, console, securetty]
cis_id: "9.4"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: ff63b8b6182a00e4b439037b02293a816c80ffacd17f9db6072a8a247e686dc9
signature: H4jA/ktfN95Ie1zIHDNHsBX6ESnclgZYp5iZQfkvCqpUyeq4NGgBm2a6GwfGZqVthSOaioZdmVR98Lxh0FEPBw==
signed_by: siaga-official
---

# 9.4 Restrict root Login to System Console (Not Scored)

## Profile Applicability

- Level 1

## Description

The file `/etc/securetty` contains a list of valid terminals that may be logged in directly as root.

## Rationale

Since the system console has special properties to handle emergency situations, it is important to ensure that the console is in a physically secure location and that unauthorized consoles have not been defined.

## Audit Procedure

### Using Command Line

```bash
cat /etc/securetty
```

## Expected Result

Only consoles that are in a physically secure location should be listed.

## Remediation

### Using Command Line

Remove entries for any consoles that are not in a physically secure location.

## Default Value

By default, /etc/securetty contains a list of virtual consoles.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Not Scored
