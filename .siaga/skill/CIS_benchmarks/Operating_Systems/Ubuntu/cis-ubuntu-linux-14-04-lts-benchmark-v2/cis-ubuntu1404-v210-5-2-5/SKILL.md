---
name: "CIS Ubuntu 14.04 LTS - 5.2.5 Ensure SSH MaxAuthTries is set to 4 or less"
description: "Verify SSH MaxAuthTries is set to 4 or less to limit brute force attack risk"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - ssh
cis_id: "5.2.5"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "medium"
sha256: 27d9eb1f9fbacb6c86184d32b8e492d4f5d096a2873dbf0963edc1ec24fa8b7e
signature: k5XPn/gE+SPWmSxFOh6R4hSSU5vbvMwAVc1nP//Fgw4yRDidysDk57dUsjvfL61xO3RrZBwC/S+6WIClTk1ZCg==
signed_by: siaga-official
---

# 5.2.5 Ensure SSH MaxAuthTries is set to 4 or less (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `MaxAuthTries` parameter specifies the maximum number of authentication attempts permitted per connection. When the login failure count reaches half the number, error messages will be written to the `syslog` file detailing the login failure.

## Rationale

Setting the `MaxAuthTries` parameter to a low number will minimize the risk of successful brute force attacks to the SSH server. While the recommended setting is 4, set the number based on site policy.

## Audit Procedure

Run the following command and verify that output `MaxAuthTries` is 4 or less:

```bash
grep "^MaxAuthTries" /etc/ssh/sshd_config
```

## Expected Result

```
MaxAuthTries 4
```

## Remediation

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```
MaxAuthTries 4
```

## Default Value

MaxAuthTries 6

## References

- CIS Controls: 16 - Account Monitoring and Control

## Profile

- Level 1 - Server
- Level 1 - Workstation
