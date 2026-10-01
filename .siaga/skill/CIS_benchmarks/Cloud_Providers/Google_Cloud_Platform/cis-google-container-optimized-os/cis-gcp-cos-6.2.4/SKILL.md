---
name: cis-gcp-cos-6.2.4
description: 'Ensure no legacy "+" entries exist in /etc/group'
category: cis-gcp-cos
version: "1.2.0"
author: siaga-official
tags: [cis, gcp, container-optimized-os, group-settings, legacy-entries]
cis_id: "6.2.4"
cis_benchmark: "CIS Google Container-Optimized OS Benchmark v1.2.0"
tech_stack: [gcp, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c86c2499849f195aa1fa64011ef12d56c8db84b5dfd391d8cdc6e93fba29bae4
signature: dacJHL/JKM1tj0KuLn1ZQp+lSC98yG0f/OvF14o4Bp3m5PX63S1Hg2SHlrWwWlBG1i6kSABat2xvYOjK1NXxBQ==
signed_by: siaga-official
---

# 6.2.4 Ensure no legacy "+" entries exist in /etc/group (Automated)

## Description

The character + in various files used to be markers for systems to insert data from NIS maps at a certain point in a system configuration file. These entries are no longer required on most systems, but may exist in files that have been imported from other platforms.

## Rationale

These entries may provide an avenue for attackers to gain privileged access on the system.

## Audit Procedure

Run the following command and verify that no output is returned:

```bash
# grep '^\+:' /etc/group
```

## Expected Result

No output should be returned.

## Remediation

Remove any legacy '+' entries from `/etc/group` if they exist.

## CIS Controls

| Controls Version | Control                                            | IG 1 | IG 2 | IG 3 |
| ---------------- | -------------------------------------------------- | ---- | ---- | ---- |
| v8               | 5.6 Centralize Account Management                  |      | x    | x    |
| v7               | 16.2 Configure Centralized Point of Authentication |      | x    | x    |

## Profile

- Level 1 - Server
