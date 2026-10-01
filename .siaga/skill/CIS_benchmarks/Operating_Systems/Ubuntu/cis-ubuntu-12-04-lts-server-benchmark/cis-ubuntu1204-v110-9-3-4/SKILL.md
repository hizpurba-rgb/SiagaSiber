---
name: cis-ubuntu1204-v110-9-3-4
description: "Disable SSH X11 Forwarding"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, authentication, ssh, x11]
cis_id: "9.3.4"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 0f867f88a80bc953a5716a8e7be5e2b34b641ed98987183ecfc121de19b0bf5b
signature: 6u3wgIKhV7+VXoW6yM6c1LaVj86ZNfih40wwaEeRTFSXBEXNTny/vwqOwwAJuNdlYxbD3Sk+AAzVbkrjHO6YCQ==
signed_by: siaga-official
---

# 9.3.4 Disable SSH X11 Forwarding (Scored)

## Profile Applicability

- Level 1

## Description

The X11Forwarding parameter provides the ability to tunnel X11 traffic through the connection to enable remote graphic connections.

## Rationale

Disable X11 forwarding unless there is an operational requirement to use X11 applications directly. There is a small risk that the remote X11 servers of users who are logged in via SSH with X11 forwarding could be compromised by other users on the X11 server. Note that even if X11 forwarding is disabled, users can always install their own forwarders.

## Audit Procedure

### Using Command Line

To verify the correct SSH setting, run the following command and verify that the output is as shown:

```bash
grep "^X11Forwarding" /etc/ssh/sshd_config
```

## Expected Result

```
X11Forwarding no
```

## Remediation

### Using Command Line

Edit the `/etc/ssh/sshd_config` file to set the parameter as follows:

```bash
X11Forwarding no
```

## Default Value

X11Forwarding yes

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
