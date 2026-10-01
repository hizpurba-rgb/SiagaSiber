---
name: cis-ubuntu1604-v200-3-5-2-7
description: "Ensure nftables outbound and established connections are configured"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, firewall]
cis_id: "3.5.2.7"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 5b9a98873ce5a6bc5d203c55c81b1c50201bf09a0304742d3089ca7f7a2397db
signature: jMbSo50y5fP4TQcKxc7dapWIdAUmxlw79iQoqcXhMwDFBRBewgAJZI5HhhNEIozCOdzpGLmrccJ7Bb+S3mqaAQ==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 3.5.2.7

## Profile

- **Level:** Level 1 - Server, Level 1 - Workstation
- **Assessment Status:** Manual

## Description

Configure the firewall rules for new outbound, and established connections.

## Rationale

If rules are not in place for new outbound, and established connections all packets will be dropped by the default policy preventing network usage.

## Audit Procedure

### Command Line

Run the following commands and verify all rules for established incoming connections match site policy:

```bash
nft list ruleset | awk '/hook input/,/}/' | grep -E 'ip protocol (tcp|udp|icmp) ct state'
```

Output should be similar to:

```
ip protocol tcp ct state established accept
ip protocol udp ct state established accept
ip protocol icmp ct state established accept
```

Run the following command and verify all rules for new and established outbound connections match site policy:

```bash
nft list ruleset | awk '/hook output/,/}/' | grep -E 'ip protocol (tcp|udp|icmp) ct state'
```

Output should be similar to:

```
ip protocol tcp ct state established,related,new accept
ip protocol udp ct state established,related,new accept
ip protocol icmp ct state established,related,new accept
```

## Remediation

### Command Line

Configure nftables in accordance with site policy. The following commands will implement a policy to allow all outbound connections and all established connections:

```bash
nft add rule inet filter input ip protocol tcp ct state established accept
nft add rule inet filter input ip protocol udp ct state established accept
nft add rule inet filter input ip protocol icmp ct state established accept
nft add rule inet filter output ip protocol tcp ct state new,related,established accept
nft add rule inet filter output ip protocol udp ct state new,related,established accept
nft add rule inet filter output ip protocol icmp ct state new,related,established accept
```

## References

None

## CIS Controls

Version 7

9.4 Apply Host-based Firewalls or Port Filtering - Apply host-based firewalls or port filtering tools on end systems, with a default-deny rule that drops all traffic except those services and ports that are explicitly allowed.
