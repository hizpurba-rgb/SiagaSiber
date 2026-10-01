---
name: "CIS Ubuntu 14.04 LTS - 2.3.1 Ensure NIS Client is not installed"
description: "Verify that the NIS client (ypbind) package is not installed"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - service-clients
cis_id: "2.3.1"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "medium"
sha256: 70908a586da437087617b0c9793b485eb88896c1bf5ffe5f2d04d987237604e2
signature: RLBG9x4J4hLFoJ2tqLN1tsmDdSH3JEOL8ZXTvb42Cj9H4xn8OYkKMUmR6DsNxYX0Ej/xDAEMWm4OsuysCXP4DQ==
signed_by: siaga-official
---

# 2.3.1 Ensure NIS Client is not installed (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The Network Information Service (NIS), formerly known as Yellow Pages, is a client-server directory service protocol used to distribute system configuration files. The NIS client (`ypbind`) was used to bind a machine to an NIS server and receive the distributed configuration files.

## Rationale

The NIS service is inherently an insecure system that has been vulnerable to DOS attacks, buffer overflows and has poor authentication for querying NIS maps. NIS generally has been replaced by such protocols as Lightweight Directory Access Protocol (LDAP). It is recommended that the service be removed.

## Audit Procedure

Run the following command and verify `nis` is not installed:

```bash
dpkg -s nis
```

## Expected Result

The command should indicate that the package is not installed (e.g., `dpkg-query: package 'nis' is not installed`).

## Remediation

Run the following command to uninstall `nis`:

```bash
apt-get remove nis
```

## Default Value

nis is not installed by default.

## Impact

Many insecure service clients are used as troubleshooting tools and in testing environments. Uninstalling them can inhibit capability to test and troubleshoot. If they are required it is advisable to remove the clients after use to prevent accidental or intentional misuse.

## References

- CIS Controls: 2 Inventory of Authorized and Unauthorized Software

## Profile

- Level 1 - Server
- Level 1 - Workstation
