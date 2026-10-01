---
name: "CIS Ubuntu 14.04 LTS - 3.6.1 Ensure iptables is installed"
description: "Verify that iptables is installed for firewall management and configuration"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - firewall
  - network
cis_id: "3.6.1"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "high"
sha256: 39c16f5542253fff572afb87f781753d369f8857f48145d3586152d2e2d2306a
signature: xEAQnYtg2POm4CJuNyAJUuCBn44pSepq02fdFDxmksn6g0KMtR9SdoaP9FjvtcuPksegOyC6LToAnmv2XoG5Aw==
signed_by: siaga-official
---

# 3.6.1 Ensure iptables is installed (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

`iptables` allows configuration of the IPv4 tables in the linux kernel and the rules stored within them. Most firewall configuration utilities operate as a front end to `iptables`.

## Rationale

iptables is required for firewall management and configuration.

## Audit Procedure

Run the following command and verify iptables is installed:

```bash
dpkg -s iptables
```

## Expected Result

The package `iptables` should be installed (status: install ok installed).

## Remediation

Run the following command to install `iptables`:

```bash
apt-get install iptables
```

## Default Value

Installed by default on Ubuntu.

## References

- CIS Controls: 9.2 - Leverage Host-based Firewalls

## Profile

- Level 1 - Server
- Level 1 - Workstation
