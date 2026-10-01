---
name: cis-ubuntu1204-v110-6-11
description: "Ensure IMAP and POP server is not enabled"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, imap, pop, dovecot, mail, attack-surface]
cis_id: "6.11"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 15873efba279312f034a40cd2457e6fc1faa3b60f4ff2d2c21242e279302c2b9
signature: HR47F9BfwptaFaJUn4fruAbN8y/xHWzaChlrKpBoLR/4GyJ2smMXm3QppoLgC0CsJWh5tpWlA0MPruc16EL3DA==
signed_by: siaga-official
---

# 6.11 Ensure IMAP and POP server is not enabled (Not Scored)

## Profile Applicability

- Level 1

## Description

`Dovecot` is an open source IMAP and POP3 server for Linux based systems.

## Rationale

Unless POP3 and/or IMAP servers are to be provided to this server, it is recommended that the service be deleted to reduce the potential attack surface.

## Audit Procedure

### Using Command Line

Ensure no start conditions listed for `dovecot`:

```bash
initctl show-config dovecot dovecot
```

## Expected Result

No start conditions should be listed for dovecot.

## Remediation

### Using Command Line

Remove or comment out start lines in `/etc/init/dovecot.conf`:

```bash
sed -i 's/^start/#start/' /etc/init/dovecot.conf
```

## Default Value

Not installed by default on Ubuntu 12.04 LTS Server.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Not Scored
