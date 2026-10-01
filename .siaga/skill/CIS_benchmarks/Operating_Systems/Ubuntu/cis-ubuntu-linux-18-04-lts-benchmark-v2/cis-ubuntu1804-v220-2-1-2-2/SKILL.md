---
name: cis-ubuntu1804-v220-2-1-2-2
description: "Ensure chrony is running as user _chrony"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, services, chrony]
cis_id: "2.1.2.2"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 08b514162c67f219f1c0352a7dd5e2873166f813c5df3e3c42b817b111cf16f7
signature: LlVpYjMjtx8qlIhmry9ioJn7W0TRnskplvR/7UMMcxYiTeJxra1M9TZiYSdjexDqXiPtFXrEnx4h9xlNTjkSCA==
signed_by: siaga-official
---

# 2.1.2.2 Ensure chrony is running as user \_chrony (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

The chrony package is installed with a dedicated user account `_chrony`. This account is granted the access required by the chronyd service.

## Rationale

The chronyd service should run with only the required privileges.

## Audit Procedure

### Command Line

IF chrony is in use on the system, run the following command to verify the chronyd service is being run as the `_chrony` user:

```bash
# ps -ef | awk '/[c]hronyd/ && $1!="_chrony") { print $1 }'
```

Nothing should be returned.

## Expected Result

No output (empty result).

## Remediation

### Command Line

Add or edit the `user` line to `/etc/chrony/chrony.conf` or a file ending in `.conf` in `/etc/chrony/conf.d/`:

```
user _chrony
```

OR

If another time synchronization service is in use on the system, run the following command to remove chrony from the system:

```bash
# apt purge chrony
```

## Default Value

user \_chrony

## References

1. NIST SP 800-53 Rev. 5: AU-8

## CIS Controls

- v8: 8.4 - Standardize Time Synchronization
- v7: 6.1 - Utilize Three Synchronized Time Sources
