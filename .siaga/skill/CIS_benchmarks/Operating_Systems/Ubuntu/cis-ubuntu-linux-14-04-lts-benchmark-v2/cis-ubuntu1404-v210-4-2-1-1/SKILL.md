---
name: "CIS Ubuntu 14.04 LTS - 4.2.1.1 Ensure rsyslog Service is enabled"
description: "Enable the rsyslog service to ensure system logging is active"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - rsyslog
  - logging
cis_id: "4.2.1.1"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "high"
sha256: 07d0228f78586d7ea5466aa6056d4a0fb754ecf060b3e0388b6b343b5453e224
signature: PJc4nyvLPg/312GhVAfQfl8rDUGBETzADMv2OiV22Uwia2JFFVnT/xJX8bAfCDQdFgXpTtLW9dpZZzWhu2vaDQ==
signed_by: siaga-official
---

# 4.2.1.1 Ensure rsyslog Service is enabled (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

Once the `rsyslog` package is installed it needs to be activated.

## Rationale

If the `rsyslog` service is not activated the system may default to the `syslogd` service or lack logging instead.

## Audit Procedure

Verify that the `rsyslog` service is active:

```bash
initctl show-config rsyslog
```

## Expected Result

```
rsyslog
  start on filesystem
  stop on runlevel [06]
```

## Remediation

Set the proper start conditions in `/etc/init/rsyslog.conf`:

```bash
start on filesystem
```

## Default Value

rsyslog is typically enabled by default on Ubuntu 14.04.

## References

1. CIS Controls v6.1 - 6.2 Ensure Audit Log Settings Support Appropriate Log Entry Formatting

## Profile

- Level 1 - Server
- Level 1 - Workstation
