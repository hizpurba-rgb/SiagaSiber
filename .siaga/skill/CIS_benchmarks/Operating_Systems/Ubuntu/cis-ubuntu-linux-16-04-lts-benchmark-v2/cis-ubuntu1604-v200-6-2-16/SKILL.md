---
name: cis-ubuntu1604-v200-6-2-16
description: "Ensure no duplicate group names exist"
category: cis-iam
version: "2.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-16.04, user-management, maintenance]
cis_id: "6.2.16"
cis_benchmark: "CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 42698792a3976a62b24e90d77c0ce74e9918daf09249af8045e6448ea0d3e109
signature: aAFo3tAqOrcVXIBGvLBuP+ooO/JKKXs3hMXLj04V8Ny5/ezGv+qkBYu19J96nRxWj9FAFCrmpOovRUihqSeuAQ==
signed_by: siaga-official
---

# CIS Ubuntu Linux 16.04 LTS Benchmark v2.0.0 - Control 6.2.16

## Profile

- **Level:** 1 - Server
- **Level:** 1 - Workstation
- **Assessment Status:** Automated

## Description

Although the `groupadd` program will not let you create a duplicate group name, it is possible for an administrator to manually edit the `/etc/group` file and change the group name.

## Rationale

If a group is assigned a duplicate group name, it will create and have access to files with the first GID for that group in `/etc/group`. Effectively, the GID is shared, which is a security problem.

## Audit Procedure

### Command Line

Run the following script and verify no results are returned:

```bash
#!/bin/bash
cut -d: -f1 /etc/group | sort | uniq -d | while read -r x; do
  echo "Duplicate group name $x in /etc/group"
done
```

## Expected Result

No output should be returned.

## Remediation

### Command Line

Based on the results of the audit script, establish unique names for the user groups. File group ownerships will automatically reflect the change as long as the groups have unique GIDs.

## Default Value

N/A

## References

N/A

## CIS Controls

| Controls Version | Control                                                              | IG 1 | IG 2 | IG 3 |
| ---------------- | -------------------------------------------------------------------- | ---- | ---- | ---- |
| v7               | 16 Account Monitoring and Control<br/>Account Monitoring and Control |      |      |      |
