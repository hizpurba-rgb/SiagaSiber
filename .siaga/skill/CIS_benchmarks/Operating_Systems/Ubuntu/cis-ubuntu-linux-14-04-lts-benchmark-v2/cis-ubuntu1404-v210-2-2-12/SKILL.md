---
name: "CIS Ubuntu 14.04 LTS - 2.2.12 Ensure Samba is not enabled"
description: "Verify that Samba SMB file sharing service is disabled when not required"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - services
cis_id: "2.2.12"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "medium"
sha256: 3acd80b802a5aa8058f34c71762f88511379940c48907b2bd46de41fc7ae7883
signature: bWBD1f4VveU3TV0kiBJ2dNqeTw85JkA5LBgBF9osRzsngistkPe+CSTOXN5oOw6v6/KfhV6HzKOX+kDjWK8MDg==
signed_by: siaga-official
---

# 2.2.12 Ensure Samba is not enabled (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The Samba daemon allows system administrators to configure their Linux systems to share file systems and directories with Windows desktops. Samba will advertise the file systems and directories via the Small Message Block (SMB) protocol. Windows desktop users will be able to mount these directories and file systems as letter drives on their systems.

## Rationale

If there is no need to mount directories and file systems to Windows systems, then this service can be deleted to reduce the potential attack surface.

## Audit Procedure

Ensure no start conditions listed for `smbd`:

```bash
initctl show-config smbd
```

Verify the output shows `smbd` with no start conditions.

## Expected Result

The `smbd` service should have no start conditions listed.

## Remediation

Remove or comment out start lines in `/etc/init/smbd.conf`:

```bash
#start on (local-filesystems and net-device-up)
```

## Default Value

Samba is not enabled by default.

## References

- CIS Controls: 9.1 Limit Open Ports, Protocols, and Services

## Profile

- Level 1 - Server
- Level 1 - Workstation
