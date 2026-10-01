---
name: cis-ubuntu2004-v300-2-2-4
description: "Ensure telnet client is not installed"
category: cis-networking
version: "3.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-20.04, services, client, telnet]
cis_id: "2.2.4"
cis_benchmark: "CIS Ubuntu Linux 20.04 LTS Benchmark v3.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 7bb6662c40d54ef37ab7c5b96d4831676068be41fe36ad60803bf6546068bfc6
signature: q8o0DE/2fg8mtsPzzUjKcxXW0wpyMmoXQxzVSiW/MWW+D3l7/cXnHzwMNWg/F09g4rPtMB2xHGJkauN5xd1pBw==
signed_by: siaga-official
---

# Ensure telnet client is not installed

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

The telnet package contains the telnet client, which allows users to start connections to other systems via the telnet protocol.

## Rationale

The telnet protocol is insecure and unencrypted. The use of an unencrypted transmission medium could allow an unauthorized user to steal credentials. The ssh package provides an encrypted session and stronger security and is included in most Linux distributions.

## Impact

Many insecure service clients are used as troubleshooting tools and in testing environments. Uninstalling them can inhibit capability to test and troubleshoot. If they are required it is advisable to remove the clients after use to prevent accidental or intentional misuse.

## Audit

Verify telnet is not installed. Use the following command to provide the needed information:

### Command Line

```bash
# dpkg-query -s telnet &>/dev/null && echo "telnet is installed"
```

## Expected Result

Nothing should be returned.

## Remediation

Uninstall telnet:

### Command Line

```bash
# apt purge telnet
```

## References

1. NIST SP 800-53 Rev. 5: CM-7, CM-11

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                               | IG 1 | IG 2 | IG 3 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software<br/>Uninstall or disable unnecessary services on enterprise assets and software, such as an unused file sharing service, web application module, or service function. |      | ●    | ●    |
| v7               | 9.2 Ensure Only Approved Ports, Protocols and Services Are Running<br/>Ensure that only network ports, protocols, and services listening on a system with validated business needs, are running on each system.                                       |      | ●    | ●    |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques                          | Tactics        | Mitigations  |
| ---------------------------------------------------- | -------------- | ------------ |
| T1040, T1040.000, T1203, T1203.000, T1543, T1543.002 | TA0006, TA0008 | M1041, M1042 |
