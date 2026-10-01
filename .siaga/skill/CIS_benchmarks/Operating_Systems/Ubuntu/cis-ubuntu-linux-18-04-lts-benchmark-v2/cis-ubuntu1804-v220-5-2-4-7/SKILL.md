---

name: cis-ubuntu1804-v220-5-2-4-7
description: "5.2.4.7 Ensure audit configuration files belong to group root"
version: "2.2.0"
category: cis-logging
tags: [cis, ubuntu, linux, ubuntu-18.04, auditing, auditd]
author: CIS Benchmarks
target:
  platform: linux
  version: "18.04"
severity_boost: {}
sha256: 1a3a75a3a34eca20a0e775053f02c9ce643c390ea7e87156c3a27ce00c731d84
signature: HkI/kKV40IiU8iD39Pz0MmcaKtCqbBKH3bNmLz2T/+KFa6pc2K2rmX8j1JJHxAfMUWnDWEFAvSi+A+e/eq1NCw==
signed_by: siaga-official
---

# 5.2.4.7 Ensure audit configuration files belong to group root

## Description

Audit configuration files control auditd and what events are audited.

## Rationale

Access to the audit configuration files could allow unauthorized personnel to prevent the auditing of critical events.

Misconfigured audit configuration files may prevent the auditing of critical events or impact the system's performance by overwhelming the audit log. Misconfiguration of the audit configuration files may also make it more difficult to establish and investigate events relating to an incident.

## Audit

Run the following command to verify that the audit configuration files have mode 640 or more restrictive and are owned by the root user and root group:

```bash
find /etc/audit/ -type f \( -name '*.conf' -o -name '*.rules' \) ! -group root
```

**Expected result:** Nothing should be returned

## Remediation

Run the following command to change group to root:

```bash
find /etc/audit/ -type f \( -name '*.conf' -o -name '*.rules' \) ! -group root -exec chgrp root {} +
```

## References

1. NIST SP 800-53 Rev. 5: AU-3

## Metadata

- **Profile Applicability:** Level 2 - Server, Level 2 - Workstation
- **Category:** cis-logging
- **Tags:** cis, ubuntu, linux, ubuntu-18.04, auditing, auditd
- **Version:** 2.2.0
- **Severity Boost:** {}
- **Automated:** Yes
- **CIS Controls:**
  - v8: 3.3 Configure Data Access Control Lists
  - v7: 14.6 Protect Information through Access Control Lists
- **MITRE ATT&CK:**
  - Tactics: TA0007 (Discovery)
  - Techniques: T1070, T1070.002, T1083, T1083.000
  - Mitigations: M1047 (Audit)
