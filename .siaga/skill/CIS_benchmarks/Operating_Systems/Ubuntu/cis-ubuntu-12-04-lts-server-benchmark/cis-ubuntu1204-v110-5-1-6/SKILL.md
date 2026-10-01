---
name: cis-ubuntu1204-v110-5-1-6
description: "Ensure telnet server is not enabled"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, telnet, legacy-services, inetd]
cis_id: "5.1.6"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 949e8053c6f9718f37fdc556801cfa54feba62f54a3076020c78fb6eb9dd92da
signature: oSg1z57gzbkbdoGGXvdYRGCKCn7MI7C5Syx4cM7ke5xsKuVWgQG4DooTSxnbbwwNEf3Unw+pgX4PjjPWRr4KAg==
signed_by: siaga-official
---

# 5.1.6 Ensure telnet server is not enabled (Scored)

## Profile Applicability

- Level 1

## Description

The `telnet-server` package contains the `telnet` daemon, which accepts connections from users from other systems via the `telnet` protocol.

## Rationale

The `telnet` protocol is insecure and unencrypted. The use of an unencrypted transmission medium could allow a user with access to sniff network traffic the ability to steal credentials. The `ssh` package provides an encrypted session and stronger security.

## Audit Procedure

### Using Command Line

Ensure the `telnet` services are not enabled:

```bash
grep ^telnet /etc/inetd.conf
```

## Expected Result

No results should be returned.

## Remediation

### Using Command Line

Remove or comment out any `telnet` lines in `/etc/inetd.conf`:

```bash
sed -i 's/^telnet/#telnet/' /etc/inetd.conf
```

## Default Value

Not enabled by default on Ubuntu 12.04 LTS Server.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
