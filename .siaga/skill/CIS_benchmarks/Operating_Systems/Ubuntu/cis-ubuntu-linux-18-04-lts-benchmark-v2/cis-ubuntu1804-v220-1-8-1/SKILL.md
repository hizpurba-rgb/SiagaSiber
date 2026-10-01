---
name: cis-ubuntu1804-v220-1-8-1
description: "Ensure GNOME Display Manager is removed"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, gdm, gnome, display-manager]
cis_id: "1.8.1"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: e2f31df7141dace9930a4ccd165153fcc46bfc5e9b26dca20dddcbd0bf50c74a
signature: Tm5l0Z2c/AN3zHWDk95FxirHezd5Gh1IOhg7fx7KRCUc7cQHpitaq2VCLp0EmoOaF6LdMF02d8zvul0v/Tb6DA==
signed_by: siaga-official
---

# 1.8.1 Ensure GNOME Display Manager is removed (Automated)

## Profile Applicability

- Level 2 - Server

## Description

The GNOME Display Manager (GDM) is a program that manages graphical display servers and handles graphical user logins.

## Rationale

If a Graphical User Interface (GUI) is not required, it should be removed to reduce the attack surface of the system.

## Impact

Removing the GNOME Display manager will remove the Graphical User Interface (GUI) from the system.

## Audit Procedure

### Command Line

Run the following command and verify `gdm3` is not installed:

```bash
dpkg-query -s gdm3 &>/dev/null && echo "gdm3 is installed"
```

## Expected Result

Nothing should be returned.

## Remediation

### Command Line

Run the following command to uninstall `gdm3`:

```bash
apt purge gdm3
```

## References

1. NIST SP 800-53 Rev. 5: CM-11

## CIS Controls

| Controls Version | Control                                                                         | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software |      | X    | X    |
| v7               | 9.2 Ensure Only Approved Ports, Protocols and Services Are Running              |      | X    | X    |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques | Tactics | Mitigations |
| --------------------------- | ------- | ----------- |
| T1543, T1543.002            | TA0002  | M1033       |
