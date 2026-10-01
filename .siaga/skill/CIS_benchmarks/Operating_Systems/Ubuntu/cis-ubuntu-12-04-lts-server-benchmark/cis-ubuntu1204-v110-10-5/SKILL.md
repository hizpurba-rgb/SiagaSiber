---
name: cis-ubuntu1204-v110-10-5
description: "Lock Inactive User Accounts"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, inactive-accounts, user-management, authentication]
cis_id: "10.5"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 62c5f376850724b809e74dd4be937375fc760e8f33c15af29e3a7a2d07bea87a
signature: axcnEC8XOoYyocpdZ+1z+RzVPWN0LciWLzBJ/9LK2RwKsXOZIdCIc36n7uZcR3IjhfJ5aSLifCvIxTUrRKYqBA==
signed_by: siaga-official
---

# 10.5 Lock Inactive User Accounts (Scored)

## Profile Applicability

- Level 1

## Description

User accounts that have been inactive for over a given period of time can be automatically disabled. It is recommended that accounts that are inactive for 35 or more days be disabled.

## Rationale

Inactive accounts pose a threat to system security since the users are not logging in to notice failed login attempts or other anomalies.

## Audit Procedure

### Using Command Line

```bash
useradd -D | grep INACTIVE
```

## Expected Result

```
INACTIVE=35
```

## Remediation

### Using Command Line

```bash
useradd -D -f 35
```

## Default Value

INACTIVE=-1 (disabled)

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
