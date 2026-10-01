---
name: cis-ubuntu1604-v200-5-3-12
description: "Ensure SSH PermitEmptyPasswords is disabled"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, ssh, remote-access]
cis_id: "5.3.12"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 35294f385b9ef4aa2b5bc90e2f05e902809466b743a6a5f5155e5225c3b0a648
signature: o0N7QNCLp1vUAotkERBC/Vgy0y+DXrqBtJIbmssnEr8wtgCb8Mv4q2lj2YmifO1o4YoFCexJAQcL2KNYdxLBAg==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 5.3.12

## Description

The `PermitEmptyPasswords` parameter specifies if the SSH server allows login to accounts with empty password strings.

## Rationale

Disallowing remote shell access to accounts that have an empty password reduces the probability of unauthorized access to the system.

## Audit Procedure

### Command Line

Run the following command and verify that output matches:

```bash
sshd -T -C user=root -C host="$(hostname)" -C addr="$(grep $(hostname) /etc/hosts | awk '{print $1}')" | grep permitemptypasswords
```

### Expected Result

```
permitemptypasswords no
```

Run the following command and verify the output:

```bash
grep -Ei '^\s*PermitEmptyPasswords\s+yes' /etc/ssh/sshd_config
```

Nothing should be returned.

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```
PermitEmptyPasswords no
```

## Default Value

PermitEmptyPasswords no

## References

1. SSHD_CONFIG(5)

## CIS Controls

Version 7

16.3 Require Multi-factor Authentication - Require multi-factor authentication for all user accounts, on all systems, whether managed onsite or by a third-party provider.

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Assessment Status

Automated
