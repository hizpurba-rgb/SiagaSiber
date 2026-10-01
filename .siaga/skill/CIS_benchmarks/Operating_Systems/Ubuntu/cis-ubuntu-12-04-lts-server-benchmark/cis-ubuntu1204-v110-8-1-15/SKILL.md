---
name: cis-ubuntu1204-v110-8-1-15
description: "Collect Changes to System Administration Scope (sudoers)"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, logging, auditd, sudoers, scope, privilege-escalation]
cis_id: "8.1.15"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 88e50fd819540d6171ef1f7b1c67e2ec290efbc9643463004c8427064a43b5d0
signature: GRFE35Ek/zFFCEBdgyB/OIH22VOQFkPB+lB5UwHE9LMEmelqLbNrsNoT0eAJ1mVVqUGD9f9s2Om/m+3T75zjBg==
signed_by: siaga-official
---

# 8.1.15 Collect Changes to System Administration Scope (sudoers) (Scored)

## Profile Applicability

- Level 2

## Description

Monitor scope changes for system administrations. If the system has been properly configured to force system administrators to log in as themselves first and then use the `sudo` command to execute privileged commands, it is possible to monitor changes in scope. The file `/etc/sudoers` will be written to when the file or its attributes have changed. The audit records will be tagged with the identifier "scope."

## Rationale

Changes in the `/etc/sudoers` file can indicate that an unauthorized change has been made to scope of system administrator activity.

## Audit Procedure

### Using Command Line

Perform the following to determine if changes to `/etc/sudoers` are recorded.

```bash
grep scope /etc/audit/audit.rules
```

## Expected Result

```
-w /etc/sudoers -p wa -k scope
```

## Remediation

### Using Command Line

Add the following lines to the `/etc/audit/audit.rules` file:

```bash
-w /etc/sudoers -p wa -k scope
# Execute the following command to restart auditd
# pkill -HUP -P 1 auditd
```

## Default Value

By default, changes to system administration scope are not audited.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 2 - Scored
