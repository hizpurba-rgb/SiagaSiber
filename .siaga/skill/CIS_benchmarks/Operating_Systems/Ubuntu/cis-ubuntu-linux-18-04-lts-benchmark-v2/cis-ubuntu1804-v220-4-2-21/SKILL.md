---
name: cis-ubuntu1804-v220-4-2-21
description: "Ensure sshd UsePAM is enabled"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, ssh, remote-access]
cis_id: "4.2.21"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 18669edc8bcd72874ed67ebb005a6b33f9230c54fff0aa37879cfad877af4f96
signature: XoJann4dH2F1LoM+HviOPPJ0PPWrY/riAuhs9QCTwD4Io1Qe3Mg9HAnPhNfBtkVfR4bWTN1IzQt8zCDIzcxqBg==
signed_by: siaga-official
---

# CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0 - Control 4.2.21

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

`UsePAM` enables the Pluggable Authentication Module interface. If set to `yes` this will enable PAM authentication using `ChallengeResponseAuthentication` and `PasswordAuthentication` in addition to PAM account and session module processing for all authentication types.

## Rationale

When usePAM is set to yes, PAM runs through account and session types properly. This is important if you want to restrict access to services based off of IP, time or other factors of the account. Additionally, you can make sure users inherit certain environment variables on login or disallow access to the server.

## Audit Procedure

### Command Line

Run the following command and verify the output:

```bash
sshd -T | grep -i usepam
```

### Expected Result

```
usepam yes
```

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```bash
UsePAM yes
```

## Default Value

UsePAM yes

## References

1. NIST SP 800-53 Rev. 5: CM-7

## CIS Controls

v8 - 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software.

v7 - 9.2 Ensure Only Approved Ports, Protocols, and Services Are Running.

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Assessment Status

Automated
