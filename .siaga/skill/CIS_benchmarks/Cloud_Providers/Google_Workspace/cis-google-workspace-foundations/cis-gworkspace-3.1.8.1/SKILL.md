---
name: cis-gworkspace-3.1.8.1
description: "Ensure access to external Google Groups is OFF for Everyone"
category: cis-gworkspace
version: "1.3.0"
author: siaga-official
tags: [cis, gcp, google-workspace, google-groups, external-access, permissions]
cis_id: "3.1.8.1"
cis_benchmark: "CIS Google Workspace Foundations Benchmark v1.3.0"
tech_stack: [gcp, google-workspace]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 0c718b2143559773c1798499020483f7e8809467f7e401cd8f88272c199b52f2
signature: rpKmv9EN6gN0zzQa29KQjcoISm9YdTywhihmBaGGVfwVhfyNK+2bYZoDJmoG4WKWL13eWocI/d0R0Jm1EshFCg==
signed_by: siaga-official
---

# 3.1.8.1 Ensure access to external Google Groups is OFF for Everyone

## Level

L1

## Profile Applicability

- Enterprise Level 1

## Type

Manual

## Description

Control whether users in your organization can access external groups from their Google Workspace account. External groups are created outside your organization and might include a public community group or a group for a club a user belongs to.

Control access to external groups by turning on or off the Google Groups additional service -- a legacy service in your Admin console that does only one thing: It allows or blocks users from accessing external groups from their Google Workspace account.

NOTE: This service has no effect on your organization's internal groups.

## Rationale

In general, most of the organization's personnel do not need to assess external groups. They can be allowed by exception as needed by the business.

## Impact

Users can't access external groups from their Google Workspace account. However, they do continue to receive email digests from groups they're already subscribed to when you turn off the service.

## Audit

To verify this setting via the Google Workspace Admin Console:

1. Log in to `https://admin.google.com` as an administrator
2. Select `Apps`
3. Select `Google Workspace`
4. Select `Additional Google services`
5. Scroll down to `Google Groups`
6. Verify it is `OFF for everyone`

## Remediation

To configure this setting via the Google Workspace Admin Console:

1. Log in to `https://admin.google.com` as an administrator
2. Select `Apps`
3. Select `Google Workspace`
4. Select `Additional Google services`
5. Scroll down to `Google Groups`
6. Set it to `OFF for everyone`
7. Select `Save`

## Default Value

`Google Groups` is `ON for Everyone`

## CIS Controls

| Controls Version | Control                                                                         | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software |      | x    | x    |
| v7               | 9.2 Ensure Only Approved Ports, Protocols and Services Are Running              |      | x    | x    |

## Profile

Level 1
