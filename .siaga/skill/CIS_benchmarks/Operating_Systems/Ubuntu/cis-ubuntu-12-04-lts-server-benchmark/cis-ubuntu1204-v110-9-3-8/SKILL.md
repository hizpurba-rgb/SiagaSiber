---
name: cis-ubuntu1204-v110-9-3-8
description: "Disable SSH Root Login"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, authentication, ssh, root-login]
cis_id: "9.3.8"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 53b20dac1872f51e03ad05054dd61a156063fcc051abb41c9055891adf3070cc
signature: 0wm3y7HwAkllsidJo+W3CMXjIMuMAEF0w1dFKZnfpn9tM/kKAX2/6lwTDzOBpnv4MKcHGQC2x9i82sotnnXBDQ==
signed_by: siaga-official
---

# 9.3.8 Disable SSH Root Login (Scored)

## Profile Applicability

- Level 1

## Description

The `PermitRootLogin` parameter specifies if the root user can log in using ssh(1). The default is no.

## Rationale

Disallowing root logins over SSH requires server admins to authenticate using their own individual account, then escalating to root via `sudo` or `su`. This in turn limits opportunity for non-repudiation and provides a clear audit trail in the event of a security incident.

## Audit Procedure

### Using Command Line

To verify the correct SSH setting, run the following command and verify that the output is as shown:

```bash
grep "^PermitRootLogin" /etc/ssh/sshd_config
```

## Expected Result

```
PermitRootLogin no
```

## Remediation

### Using Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```bash
PermitRootLogin no
```

## Default Value

PermitRootLogin no

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
