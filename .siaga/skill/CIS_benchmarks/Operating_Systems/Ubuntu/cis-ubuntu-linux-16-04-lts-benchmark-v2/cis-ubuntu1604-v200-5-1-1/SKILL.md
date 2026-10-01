---
name: cis-ubuntu1604-v200-5-1-1
description: "Ensure cron daemon is enabled and running"
category: cis-iam
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, access-control]
cis_id: "5.1.1"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 4cdb8847bc70e893c4b7d9d9864ab62edff515639ffcff75406db30407e338c6
signature: QzmIoOH25VZ0A3jukn7ItLqsm0FTbvWIgd2vy5tSNyV7Ereqnf8brHnzSn+6XnGY5IhLK9+37cCdgociEPItBA==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - 5.1.1

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `cron` daemon is used to execute batch jobs on the system.

Note: Other methods, such as `systemd timers`, exist for scheduling jobs. If another method is used, `cron` should be removed, and the alternate method should be secured in accordance with local site policy.

## Rationale

While there may not be user jobs that need to be run on the system, the system does have maintenance jobs that may include security monitoring that have to run, and `cron` is used to execute them.

## Impact

None.

## Audit Procedure

### Command Line

Run the following command to verify `cron` is enabled:

```bash
systemctl is-enabled cron
```

Run the following command to verify that `cron` is running:

```bash
systemctl status cron | grep 'Active: active (running) '
```

## Expected Result

The first command should return:

```
enabled
```

The second command should return:

```
Active: active (running) since <Day Date Time>
```

## Remediation

### Command Line

Run the following command to enable and start `cron`:

```bash
systemctl --now enable cron
```

## Default Value

By default, cron is enabled and running.

## References

None.

## CIS Controls

| Controls Version | Control                                              |
| ---------------- | ---------------------------------------------------- |
| v7               | 6 Maintenance, Monitoring and Analysis of Audit Logs |

## Assessment Status

Automated
