---
name: cis-ubuntu2004-v300-5-1-22
description: "Ensure sshd UsePAM is enabled"
category: cis-networking
version: "3.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-20.04, ssh]
cis_id: "5.1.22"
cis_benchmark: "CIS Ubuntu Linux 20.04 LTS Benchmark v3.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 75ee05b6956d9e6e08d92524a035521d40d23bba4cb78ad5ed8ae43be75d8f38
signature: vKcNRGvr8ziD/vev/8SuSh8QOoNF56v55jPilXZaT8lH8nW68WBYB1oBdYr7V5ZLm1ED6R0D/SusZNXrs89oCQ==
signed_by: siaga-official
---

# Ensure sshd UsePAM is enabled (Automated)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `UsePAM` directive enables the Pluggable Authentication Module (PAM) interface. If set to `yes` this will enable PAM authentication using `ChallengeResponseAuthentication` and `PasswordAuthentication` directives in addition to PAM account and session module processing for all authentication types.

## Rationale

When `usePAM` is set to `yes`, PAM runs through account and session types properly. This is important if you want to restrict access to services based off of IP, time or other factors of the account. Additionally, you can make sure users inherit certain environment variables on login or disallow access to the server.

## Audit Procedure

### Command Line

Run the following command to verify `UsePAM` is set to `yes`:

```bash
# sshd -T | grep usepam
```

```
usepam yes
```

## Expected Result

```
usepam yes
```

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the `UsePAM` parameter to `yes` above any `Include` entries as follows:

```
UsePAM yes
```

Note: First occurrence of an option takes precedence. If Include locations are enabled, used, and order of precedence is understood in your environment, the entry may be created in a file in Include location.

## Default Value

UsePAM yes

## References

1. SSHD_CONFIG(5)
2. NIST SP 800-53 Rev. 5: CM-1, CM-2, CM-6, CM-7, IA-5
3. SSHD(8)

## CIS Controls

v8 - 5.2 Use Unique Passwords
Use unique passwords for all enterprise assets. Best practice implementation includes, at a minimum, an 8-character password for accounts using MFA and a 14-character password for accounts not using MFA.

v7 - 4.4 Use Unique Passwords
Where multi-factor authentication is not supported (such as local administrator, root, or service accounts), accounts will use passwords that are unique to that system.

MITRE ATT&CK Mappings: T1021, T1021.004 | TA0001 | M1035
