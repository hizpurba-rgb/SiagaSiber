---
name: "CIS Ubuntu 14.04 LTS - 1.6.3 Ensure SELinux or AppArmor are installed"
description: "Verify that either SELinux or AppArmor mandatory access control system is installed"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-2
  - scored
  - mac
cis_id: "1.6.3"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with:
  - cis-ubuntu1404-v210-1-6-1-1
  - cis-ubuntu1404-v210-1-6-2-1
prerequisites: []
severity_boost: "high"
sha256: afaa289627f4b5672b11f7b6ff4f362b197177e21c70854460a7b76c8b8dc342
signature: maIWTbaoTcdRyfeJTa914YUrJaJ18WHH1Uisl11aQp3zFZyC5MPnVy13nT70uyyImS1qPXsyPpautv4cBetnCA==
signed_by: siaga-official
---

# 1.6.3 Ensure SELinux or AppArmor are installed (Scored)

## Profile Applicability

- Level 2 - Server
- Level 2 - Workstation

## Description

SELinux and AppArmor provide Mandatory Access Controls.

## Rationale

Without a Mandatory Access Control system installed only the default Discretionary Access Control system will be available.

## Audit Procedure

Run the following commands and verify either SELinux or AppArmor is installed:

```bash
dpkg -s selinux
dpkg -s apparmor
```

## Expected Result

At least one of the packages (`selinux` or `apparmor`) should be installed with status `install ok installed`.

## Remediation

Run one of the following commands to install SELinux or apparmor:

```bash
apt-get install selinux
```

or

```bash
apt-get install apparmor
```

## Default Value

AppArmor is installed by default on Ubuntu systems.

## References

- CIS Controls: 14.4 Protect Information With Access Control Lists

## Profile

- Level 2 - Server
- Level 2 - Workstation
