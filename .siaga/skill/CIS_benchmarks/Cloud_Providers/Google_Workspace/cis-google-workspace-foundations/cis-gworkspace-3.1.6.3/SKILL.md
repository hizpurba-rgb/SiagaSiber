---
name: cis-gworkspace-3.1.6.3
description: "Ensure default for permission to view conversations is restricted"
category: cis-gworkspace
version: "1.3.0"
author: siaga-official
tags: [cis, gcp, google-workspace, groups, permissions, external-access]
cis_id: "3.1.6.3"
cis_benchmark: "CIS Google Workspace Foundations Benchmark v1.3.0"
tech_stack: [gcp, google-workspace]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: e052d4df87b62fce96b65be7c19a7d2491be11c37e188f4dace802a2cdcfcf71
signature: vm3xvjByM3tNHtJK7PkUQdTE6uhO+vO7CrUFtDS9IbGfh+10vllWu0CguvAnohNBbtBYWdqA/RBf0Q2coIqODA==
signed_by: siaga-official
---

# 3.1.6.3 Ensure default for permission to view conversations is restricted

## Level

L1

## Profile Applicability

- Enterprise Level 1

## Type

Manual

## Description

By default, only allow group members to view group conversations.

## Rationale

Conversation viewing can always be expanded by exception for certain groups as needed (Need to know), but by default be restricted.

## Impact

No practical impact, since Group members can view conversations in the Group.

## Audit

To verify this setting via the Google Workspace Admin Console:

1. Log in to `https://admin.google.com` as an administrator
2. Select `Apps`
3. Select `Google Workspace`
4. Select `Groups for Business`
5. Select `Sharing options`
6. Verify `Default for permission to view conversations` is `All group members`

## Remediation

To configure this setting via the Google Workspace Admin Console:

1. Log in to `https://admin.google.com` as an administrator
2. Select `Apps`
3. Select `Google Workspace`
4. Select `Groups for Business`
5. Select `Sharing options`
6. Set `Default for permission to view conversations` to `All group members`
7. Select `Save`

## Default Value

`Default for permission to view conversations` is `All organization users`

## CIS Controls

| Controls Version | Control                                               | IG 1 | IG 2 | IG 3 |
| ---------------- | ----------------------------------------------------- | ---- | ---- | ---- |
| v8               | 3.3 Configure Data Access Control Lists               | x    | x    | x    |
| v7               | 14.6 Protect Information through Access Control Lists | x    | x    | x    |

## Profile

Level 1
