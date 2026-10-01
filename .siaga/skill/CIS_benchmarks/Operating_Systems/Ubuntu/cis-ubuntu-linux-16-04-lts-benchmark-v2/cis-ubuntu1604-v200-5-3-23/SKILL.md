---
name: cis-ubuntu1604-v200-5-3-23
description: "Ensure SSH MaxSessions is limited"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, ssh, remote-access]
cis_id: "5.3.23"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 48d76bdaa87d5311ac3a7f8b4d3b3caf8972a42fb40631f31057e593096f8aea
signature: a7145UcWeQNfAO27/RRzE9tjajtjng1Dc+SGw0IcKCUEiN8O7c4hHp2O4h/BFwFlvcGNMju12aYy25CuUnrsBg==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 5.3.23

## Description

The `MaxSessions` parameter Specifies the maximum number of open sessions permitted per network connection.

## Rationale

To protect a system from denial of service due to a large number of concurrent sessions, use the rate limiting function of MaxSessions to protect availability of sshd logins and prevent overwhelming the daemon.

## Audit Procedure

### Command Line

Run the following command and verify that output `MaxSessions` is `10` or less:

```bash
sshd -T -C user=root -C host="$(hostname)" -C addr="$(grep $(hostname) /etc/hosts | awk '{print $1}')" | grep -i maxsessions
```

### Expected Result

```
maxsessions 10
```

Run the following command and verify the output:

```bash
grep -Ei '^\s*MaxSessions\s+(1[1-9]|[2-9][0-9]|[1-9][0-9][0-9]+)' /etc/ssh/sshd_config
```

Nothing should be returned.

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```
MaxSessions 10
```

## Default Value

MaxSessions 10

## References

1. SSHD_CONFIG(5)

## CIS Controls

Version 7

5.1 Establish Secure Configurations - Maintain documented, standard security configuration standards for all authorized operating systems and software.

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Assessment Status

Automated
