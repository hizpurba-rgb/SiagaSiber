---
name: cis-ubuntu1804-v220-4-2-8
description: "Ensure sshd GSSAPIAuthentication is disabled"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, ssh, remote-access]
cis_id: "4.2.8"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 0a9da2dbea577721841e7df4e7e07d06e351ba89b2d32a64c4b9504c3825ca5d
signature: O1DpuvWS6i4wy2I05PT2pnHLNs0xuRgbJfo29eBy0NbuzxiDIBtr72gxiUg4HCcbYXQbnCU38e1KAaTdTWaFDw==
signed_by: siaga-official
---

# CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0 - Control 4.2.8

## Profile Applicability

- Level 2 - Server
- Level 2 - Workstation

## Description

The `GSSAPIAuthentication` parameter specifies whether authentication based on GSSAPI is allowed.

## Rationale

GSSAPI authentication is used to provide additional authentication mechanisms to applications. Allowing GSSAPI authentication through SSH exposes the system's GSSAPI to remote hosts, increasing the attack surface of the system. Unless needed, GSSAPI authentication should be disabled.

## Audit Procedure

### Command Line

Run the following command and verify the output:

```bash
sshd -T | grep -i gssapiauthentication
```

### Expected Result

```
gssapiauthentication no
```

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```bash
GSSAPIAuthentication no
```

## Default Value

GSSAPIAuthentication no

## References

1. NIST SP 800-53 Rev. 5: CM-7

## CIS Controls

v8 - 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software.

v7 - 9.2 Ensure Only Approved Ports, Protocols, and Services Are Running.

## Profile Applicability

- Level 2 - Server
- Level 2 - Workstation

## Assessment Status

Automated
