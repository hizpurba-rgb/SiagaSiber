---
name: cis-ubuntu1804-v220-4-2-17
description: "Ensure sshd MaxStartups is configured"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, ssh, remote-access]
cis_id: "4.2.17"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 07d3e5f42145192ba9dc441f83e6697cc6adad8c9e8af1490ab51a83f23a3639
signature: z7UGifnmj/T1oWcYMsYN7Ok3gqMd0Mu9qflOgAjP+kP81HY1zfL8IYtVwVo7aLBL5KDoBbym9PFiKQwWmqxoAw==
signed_by: siaga-official
---

# CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0 - Control 4.2.17

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `MaxStartups` parameter specifies the maximum number of concurrent unauthenticated connections to the SSH daemon.

## Rationale

To protect a system from denial of service due to a large number of pending authentication connection attempts, use the rate limiting function of `MaxStartups` to protect availability of sshd logins and prevent overwhelming the daemon.

## Audit Procedure

### Command Line

Run the following command and verify the output:

```bash
sshd -T | grep -i maxstartups
```

### Expected Result

```
maxstartups 10:30:60
```

OR more restrictive.

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```bash
MaxStartups 10:30:60
```

## Default Value

MaxStartups 10:30:100

## References

1. NIST SP 800-53 Rev. 5: CM-6

## CIS Controls

None

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Assessment Status

Automated
