---
name: cis-ubuntu1804-v220-5-1-2-1
description: "Ensure rsyslog is installed"
category: cis-logging
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, rsyslog, logging]
cis_id: "5.1.2.1"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 05cf4a71e008f4341a72ea3941d687c0a730e302167533570b198874cb47607b
signature: KeMBRHGM8vlgGFXvuFd+Tn5wLyKdA0OJoIcS3rCyii4mD+vE3Gki/DtwojXvl9IgwrXKLwirtn0gs55ZUPY+BQ==
signed_by: siaga-official
---

# 5.1.2.1 Ensure rsyslog is installed (Automated)

## Profile

- **Level:** 1 - Server
- **Level:** 1 - Workstation
- **Assessment Status:** Automated

## Description

The `rsyslog` software is recommended in environments where `journald` does not meet operation requirements.

## Rationale

The security enhancements of `rsyslog` such as connection-oriented (i.e. TCP) transmission of logs, the option to log to database formats, and the encryption of log data en route to a central logging server) justify installing and configuring the package.

## Audit Procedure

### Command Line

Run the following command to verify `rsyslog` is installed:

```bash
dpkg-query -s rsyslog &>/dev/null && echo "rsyslog is installed"
```

## Expected Result

```
rsyslog is installed
```

## Remediation

### Command Line

Run the following command to install `rsyslog`:

```bash
apt install rsyslog
```

## Default Value

rsyslog is not installed by default on Ubuntu 18.04.

## References

1. NIST SP 800-53 Rev. 5: AU-3, AU-12, SI-5

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v8               | 8.2 Collect Audit Logs - Collect audit logs. Ensure that logging, per the enterprise's audit log management process, has been enabled across enterprise assets.                                         |
| v7               | 6.2 Activate audit logging - Ensure that local logging has been enabled on all systems and networking devices.                                                                                          |
| v7               | 6.3 Enable Detailed Logging - Enable system logging to include detailed information such as an event source, date, user, timestamp, source addresses, destination addresses, and other useful elements. |
