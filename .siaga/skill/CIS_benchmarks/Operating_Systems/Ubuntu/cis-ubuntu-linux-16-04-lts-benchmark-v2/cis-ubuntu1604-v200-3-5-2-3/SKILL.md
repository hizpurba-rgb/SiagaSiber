---
name: cis-ubuntu1604-v200-3-5-2-3
description: "Ensure iptables are flushed with nftables"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, firewall]
cis_id: "3.5.2.3"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 246f81cc20120cadf1c7b645153314a945c579d2116adba4d08575ed1687f51d
signature: nElg68mB9q9U/mtYf/Nc4cD3wcwhWPIKTIwZ6O9kNiYqq1b4QIU9oI1RG2/MWnHBaVdrVJMRT2CgOvLU55nNBA==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 3.5.2.3

## Profile

- **Level:** Level 1 - Server, Level 1 - Workstation
- **Assessment Status:** Manual

## Description

nftables is a replacement for iptables, ip6tables, ebtables and arptables.

## Rationale

It is possible to mix iptables and nftables. However, this increases complexity and also the chance to introduce errors. For simplicity flush out all iptables rules, and ensure it is not loaded.

## Audit Procedure

### Command Line

Run the following commands to ensure no iptables rules exist.

For iptables:

```bash
iptables -L
```

No rules should be returned.

For ip6tables:

```bash
ip6tables -L
```

No rules should be returned.

## Remediation

### Command Line

Run the following commands to flush iptables.

For iptables:

```bash
iptables -F
```

For ip6tables:

```bash
ip6tables -F
```

## References

None

## CIS Controls

Version 7

9.4 Apply Host-based Firewalls or Port Filtering - Apply host-based firewalls or port filtering tools on end systems, with a default-deny rule that drops all traffic except those services and ports that are explicitly allowed.
