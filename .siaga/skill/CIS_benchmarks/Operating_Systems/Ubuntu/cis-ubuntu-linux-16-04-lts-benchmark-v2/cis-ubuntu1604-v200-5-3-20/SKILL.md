---
name: cis-ubuntu1604-v200-5-3-20
description: "Ensure SSH PAM is enabled"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, ssh, remote-access]
cis_id: "5.3.20"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: a8d869c8299b6a06ed4fc2e07900c22b34d38d25ae58b9c098bddedfc5cce5e3
signature: K1SloUX3bT1OhLbThUXFYVgOS+bAZ4yzhjddgLgYRZ2QjLzHJlJS9yQ6gLJ1sYlcRNuJNAPOPk5HThZyB90MCA==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 5.3.20

## Description

UsePAM Enables the Pluggable Authentication Module interface. If set to "yes" this will enable PAM authentication using ChallengeResponseAuthentication and PasswordAuthentication in addition to PAM account and session module processing for all authentication types.

## Rationale

When usePAM is set to yes, PAM runs through account and session types properly. This is important if you want to restrict access to services based off of IP, time or other factors of the account. Additionally, you can make sure users inherit certain environment variables on login or disallow access to the server.

## Impact

If UsePAM is enabled, you will not be able to run sshd(5) as a non-root user.

## Audit Procedure

### Command Line

Run the following command and verify that output matches:

```bash
sshd -T -C user=root -C host="$(hostname)" -C addr="$(grep $(hostname) /etc/hosts | awk '{print $1}')" | grep -i usepam
```

### Expected Result

```
usepam yes
```

Run the following command and verify the output:

```bash
grep -Ei '^\s*UsePAM\s+no' /etc/ssh/sshd_config
```

Nothing should be returned.

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```
UsePAM yes
```

## Default Value

usePAM yes

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
