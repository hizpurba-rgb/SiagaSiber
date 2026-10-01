---
name: cis-ubuntu1604-v200-4-1-1-2
description: "Ensure auditd service is enabled"
category: cis-logging
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, auditd, logging]
cis_id: "4.1.1.2"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b8bb44148a5ef239c4a0dd93b8fa7fd8672efa42d920e8f23de1e7fec96a09ba
signature: z3aaNRc9IV73gZv/PF9mf3gGHo+dxAeFwO0yn+dfNM1ebSOlkZ6WtU+up12S14AeiOQx+yktUQrP00CZX8u4Bg==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 4.1.1.2

## Profile

- **Level:** 2 - Server
- **Level:** 2 - Workstation
- **Assessment Status:** Automated

## Description

Enable and start the auditd daemon to record system events.

## Rationale

The capturing of system events provides system administrators with information to allow them to determine if unauthorized access to their system is occurring.

## Impact

None.

## Audit Procedure

### Command Line

Run the following command to verify auditd is enabled:

```bash
systemctl is-enabled auditd
```

## Expected Result

Verify result is "enabled".

## Remediation

### Command Line

Run the following command to enable auditd:

```bash
systemctl --now enable auditd
```

## Default Value

auditd is not enabled by default.

## References

1. CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Section 4.1.1.2

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v7               | 6.2 Activate audit logging - Ensure that local logging has been enabled on all systems and networking devices.                                                                                          |
| v7               | 6.3 Enable Detailed Logging - Enable system logging to include detailed information such as an event source, date, user, timestamp, source addresses, destination addresses, and other useful elements. |
