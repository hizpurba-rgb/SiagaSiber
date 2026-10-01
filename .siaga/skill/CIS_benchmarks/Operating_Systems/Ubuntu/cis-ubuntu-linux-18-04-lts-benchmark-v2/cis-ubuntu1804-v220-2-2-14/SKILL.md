---
name: cis-ubuntu1804-v220-2-2-14
description: "Ensure NIS Server is not installed"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, services, nis]
cis_id: "2.2.14"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 9f00d0b551b093daffa4bbb36f260865921db59c14746a672b7dd9d8a8559453
signature: IdcBzZMCmcCiAyiVoRJu+J4X0XEXqLegVuQ+e01piyn+E11Kv1FlbXEMWXvt8Z3J13u1+Yk8eZh+rQvoBM97BA==
signed_by: siaga-official
---

# 2.2.14 Ensure NIS Server is not installed (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

The Network Information Service (NIS) (formally known as Yellow Pages) is a client-server directory service protocol for distributing system configuration files. The NIS server is a collection of programs that allow for the distribution of configuration files.

## Rationale

The NIS service is inherently an insecure system that has been vulnerable to DOS attacks, buffer overflows and has poor authentication for querying NIS maps. NIS generally has been replaced by such protocols as Lightweight Directory Access Protocol (LDAP). It is recommended that the service be removed and other, more secure services be used.

## Audit Procedure

### Command Line

Run the following command to verify `nis` is not installed:

```bash
# dpkg-query -s nis &>/dev/null && echo "nis is installed"
```

Nothing should be returned.

## Expected Result

No output (empty result).

## Remediation

### Command Line

Run the following command to remove `nis`:

```bash
# apt purge nis
```

## References

1. NIST SP 800-53 Rev. 5: CM-6, CM-7

## CIS Controls

- v8: 4.8 - Uninstall or Disable Unnecessary Services on Enterprise Assets and Software
- v7: 9.2 - Ensure Only Approved Ports, Protocols and Services Are Running
