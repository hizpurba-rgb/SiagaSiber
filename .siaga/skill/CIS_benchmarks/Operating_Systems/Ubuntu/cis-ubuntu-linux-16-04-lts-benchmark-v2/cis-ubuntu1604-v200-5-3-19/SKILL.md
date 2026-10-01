---
name: cis-ubuntu1604-v200-5-3-19
description: "Ensure SSH warning banner is configured"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, ssh, remote-access]
cis_id: "5.3.19"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: bf0fd8b2dc1d8e2ff6c5b1ff46e9f7ea89b6abe611e27667096d08ce4f809d71
signature: 7ite911Yl+ZKs/VeSXRlrrluiNEfERzX6vkG+Opus1Pql1NSez0j5v4OMY/nEVhigX3L++QJnKpBCED4Tq6iCA==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 5.3.19

## Description

The `Banner` parameter specifies a file whose contents must be sent to the remote user before authentication is permitted. By default, no banner is displayed.

## Rationale

Banners are used to warn connecting users of the particular site's policy regarding connection. Presenting a warning message prior to the normal user login may assist the prosecution of trespassers on the computer system.

## Audit Procedure

### Command Line

Run the following command and verify that output matches:

```bash
sshd -T -C user=root -C host="$(hostname)" -C addr="$(grep $(hostname) /etc/hosts | awk '{print $1}')" | grep banner
```

### Expected Result

```
banner /etc/issue.net
```

## Remediation

### Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```
Banner /etc/issue.net
```

## References

1. SSHD_CONFIG(5)

## CIS Controls

Version 7

5.1 Establish Secure Configurations - Maintain documented, standard security configuration standards for all authorized operating systems and software.

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Assessment Status

Automated
