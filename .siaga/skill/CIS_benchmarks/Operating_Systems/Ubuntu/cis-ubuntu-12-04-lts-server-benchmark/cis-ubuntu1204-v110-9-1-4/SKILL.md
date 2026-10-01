---
name: cis-ubuntu1204-v110-9-1-4
description: "Set User/Group Owner and Permission on /etc/cron.daily"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, authentication, cron, permissions]
cis_id: "9.1.4"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 7f6094de130a97fed3c118974a2a529eb4eeb304563c0eb1e5c7d94d47c21633
signature: RDa/j7qVZnPoxaevCqrQl3BwGcxZIX/Y2c3OZnYLocgtfCoGv51LF88BAMio9i2McVsp5D4jiJPlDjbECYAgBw==
signed_by: siaga-official
---

# 9.1.4 Set User/Group Owner and Permission on /etc/cron.daily (Scored)

## Profile Applicability

- Level 1

## Description

The `/etc/cron.daily` directory contains system cron jobs that need to run on a daily basis. The files in this directory cannot be manipulated by the `crontab` command, but are instead edited by system administrators using a text editor. The commands below restrict read/write and search access to user and group root, preventing regular users from accessing this directory.

## Rationale

Granting write access to this directory for non-privileged users could provide them the means for gaining unauthorized elevated privileges. Granting read access to this directory could give an unprivileged user insight in how to gain elevated privileges or circumvent auditing controls.

## Audit Procedure

### Using Command Line

Perform the following to determine if the `/etc/cron.daily` directory has the correct permissions:

```bash
stat -c "%a %u %g" /etc/cron.daily | egrep ".00 0 0"
```

## Expected Result

If the above command emits no output then the system is not configured as recommended. Expected output should match the pattern `.00 0 0` (owner root, group root, permissions restrictive).

## Remediation

### Using Command Line

```bash
chown root:root /etc/cron.daily
chmod og-rwx /etc/cron.daily
```

## Default Value

The default permissions on /etc/cron.daily may vary by installation.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
