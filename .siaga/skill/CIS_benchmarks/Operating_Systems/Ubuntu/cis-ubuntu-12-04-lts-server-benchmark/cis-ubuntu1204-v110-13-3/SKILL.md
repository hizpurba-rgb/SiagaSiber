---
name: cis-ubuntu1204-v110-13-3
description: 'Verify No Legacy "+" Entries Exist in /etc/shadow File'
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, user-management, shadow, nis, legacy]
cis_id: "13.3"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c637be9a834a55535d8a298591bde1e2c6815e67eb54384ec57763c591991586
signature: iaoCb3ubQNd7Kcs6o/psvubvFepF3LUqt8yRTyqRvK9O5aTdEGXw7xsKjUCWk5B+J44ubb4jOPSPd477uRpvCA==
signed_by: siaga-official
---

# 13.3 Verify No Legacy "+" Entries Exist in /etc/shadow File (Scored)

## Profile Applicability

- Level 1

## Description

The character `+` in various files used to be markers for systems to insert data from NIS maps at a certain point in a system configuration file. These entries are no longer required on most systems, but may exist in files that have been imported from other platforms.

## Rationale

These entries may provide an avenue for attackers to gain privileged access on the system.

## Audit Procedure

### Using Command Line

Run the following command and verify that no output is returned:

```bash
/bin/grep '^+:' /etc/shadow
```

## Expected Result

No output should be returned. Any output indicates legacy `+` entries exist in `/etc/shadow`.

## Remediation

### Using Command Line

Delete these entries if they exist.

## Default Value

No legacy `+` entries exist in `/etc/shadow` by default on Ubuntu 12.04.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
