---
name: cis-gworkspace-3.1.3.3.1
description: "Enable quarantine admin notifications for Gmail"
category: cis-gworkspace
version: "1.3.0"
author: siaga-official
tags: [cis, gcp, google-workspace, gmail, quarantine, email-security]
cis_id: "3.1.3.3.1"
cis_benchmark: "CIS Google Workspace Foundations Benchmark v1.3.0"
tech_stack: [gcp, google-workspace]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 5211ef12dc6514d1b166dc990fbc68c10bafab75b708cd01465fb4849414f43a
signature: uEwKRv+nlb7MZMLKxW+yAQ+Gza3xwhleAvzRsQY68vhJ3Fgs89AElHEA0v8yktDbC5X+tEZu8rxjHWL7/zbZCw==
signed_by: siaga-official
---

# 3.1.3.3.1 Enable quarantine admin notifications for Gmail

## Overview

| Property                  | Value                      |
| ------------------------- | -------------------------- |
| **CIS ID**                | 3.1.3.3.1                  |
| **Level**                 | L1                         |
| **Profile Applicability** | Enterprise Level 1         |
| **Assessment Type**       | Manual                     |
| **Section**               | Gmail > Manage Quarantines |

## Description

Quarantines can help prevent spam, minimize data loss, and protect confidential information. They can also help moderate message attachments so users don't send, open, or click something they shouldn't.

## Rationale

Admins should be notified periodically when messages are quarantined so they can take the appropriate actions.

## Impact

Admins will begin receiving quarantine notifications as emails are quarantined.

## Default Value

`Notify periodically when messages are quarantined` is **unchecked**

## Audit

To verify this setting via the Google Workspace Admin Console:

1. Log in to [https://admin.google.com](https://admin.google.com) as an administrator
2. Select **Apps**
3. Select **Google Workspace**
4. Select **Gmail**
5. Under `Manage quarantines`, ensure each quarantine has `Notify periodically when messages are quarantined` is **checked**

## Remediation

To configure this setting via the Google Workspace Admin Console:

1. Log in to [https://admin.google.com](https://admin.google.com) as an administrator
2. Select **Apps**
3. Select **Google Workspace**
4. Select **Gmail**
5. Under `Manage quarantines`, set `Notify periodically when messages are quarantined` to **checked**

As required, give appropriate users the `Access Admin Quarantine` and/or `Access restricted quarantine` roles.

## CIS Controls

This control does not map directly to a specific CIS Controls v8/v7 safeguard.
