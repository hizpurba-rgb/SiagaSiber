---
name: cis-gcp-cos-6.2.15
description: "Ensure all groups in /etc/passwd exist in /etc/group"
category: cis-gcp-cos
version: "1.2.0"
author: siaga-official
tags: [cis, gcp, container-optimized-os, group-settings, user-accounts]
cis_id: "6.2.15"
cis_benchmark: "CIS Google Container-Optimized OS Benchmark v1.2.0"
tech_stack: [gcp, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 1a3a37de3421418c84b2892b44de3c4df3706397950a6000e55294cbc25dcc06
signature: aymcDnqlmT4mLzbt/JZOFXV5KpxmAI/OVn743/OxV/tPgFfMmEBNgTGbhwWVpHuVV8UY7zAkPpCPyqNfreXAAw==
signed_by: siaga-official
---

# 6.2.15 Ensure all groups in /etc/passwd exist in /etc/group (Automated)

## Description

Over time, system administration errors and changes can lead to groups being defined in `/etc/passwd` but not in `/etc/group`.

## Rationale

Groups defined in the `/etc/passwd` file but not in the `/etc/group` file pose a threat to system security since group permissions are not properly managed.

## Audit Procedure

Run the following script and verify no results are returned:

```bash
#!/bin/bash

for i in $(cut -s -d: -f4 /etc/passwd | sort -u ); do
  grep -q ":$i:" /etc/group
  if [ $? -ne 0 ]; then
    echo "Group $i is referenced by /etc/passwd but does not exist in /etc/group"
  fi
done
```

## Expected Result

No results should be returned.

## Remediation

Analyze the output of the Audit step above and perform the appropriate action to correct any discrepancies found.

## Profile

- Level 2 - Server
