---
name: cis-ubuntu1604-v200-3-4-4
description: "Ensure TIPC is disabled"
category: cis-networking
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, networking]
cis_id: "3.4.4"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 106deda932dcc52465b9b066bdd8708afdc1094655e8ada8672f8f3a9d0d773e
signature: G94lv/7iiHhIs6H/0hWIAhkQwKJlVfege5sxB3Lf19hy4rboFs1D0cj484w3FuL2qGm506J5EfLEdIDj28q0BQ==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 3.4.4

## Description

The Transparent Inter-Process Communication (TIPC) protocol is designed to provide communication between cluster nodes.

## Rationale

If the protocol is not being used, it is recommended that kernel module not be loaded, disabling the service to reduce the potential attack surface.

## Impact

None.

## Audit Procedure

### Command Line

Run the following commands and verify the output is as indicated:

```bash
modprobe -n -v tipc | grep -E '(tipc|install)'
```

```bash
lsmod | grep tipc
```

## Expected Result

```
install /bin/true
```

The `lsmod` command should return no output.

## Remediation

### Command Line

Edit or create a file in the `/etc/modprobe.d/` directory ending in `.conf`

Example: `vi /etc/modprobe.d/tipc.conf`

and add the following line:

```
install tipc /bin/true
```

## Default Value

TIPC module is available but typically not loaded by default.

## References

1. CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0

## CIS Controls

Version 7

9.2 Ensure Only Approved Ports, Protocols and Services Are Running - Ensure that only network ports, protocols, and services listening on a system with validated business needs, are running on each system.

## Profile Applicability

- Level 2 - Server
- Level 2 - Workstation

## Assessment Status

Automated
