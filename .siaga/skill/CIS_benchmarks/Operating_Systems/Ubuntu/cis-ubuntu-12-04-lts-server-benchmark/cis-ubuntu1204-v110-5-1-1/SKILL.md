---
name: cis-ubuntu1204-v110-5-1-1
description: "Ensure NIS is not installed"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, nis, legacy-services, package-management]
cis_id: "5.1.1"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b05ea698b28d5de6e6e292ec29ee06e84b76634e677f8e6676dcc0dd13ee77d0
signature: QzLLuyv356IvXp8QfNAFF3cP1BU+Yvm16WNtxReGKZciv5Zwe5uBUTW6UdkqXu565cLR0OIxMcT/midsq8nbCw==
signed_by: siaga-official
---

# 5.1.1 Ensure NIS is not installed (Scored)

## Profile Applicability

- Level 1

## Description

The Network Information Service (NIS), formerly known as Yellow Pages, is a client-server directory service protocol used to distribute system configuration files.

## Rationale

The NIS service is inherently an insecure system that has been vulnerable to DOS attacks, buffer overflows and has poor authentication for querying NIS maps. NIS generally has been replaced by such protocols as Lightweight Directory Access Protocol (LDAP). It is recommended that the service be removed.

## Audit Procedure

### Using Command Line

```bash
dpkg -s nis
```

## Expected Result

Ensure package status is not-installed or dpkg returns no info is available.

## Remediation

### Using Command Line

Uninstall the `nis` package:

```bash
apt-get purge nis
```

## Default Value

Not installed by default on Ubuntu 12.04 LTS Server.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
