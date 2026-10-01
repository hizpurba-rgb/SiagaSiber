---
name: cis-gworkspace-3.1.3.5.2
description: "Ensure automatic forwarding options are disabled"
category: cis-gworkspace
version: "1.3.0"
author: siaga-official
tags: [cis, gcp, google-workspace, gmail, forwarding]
cis_id: "3.1.3.5.2"
cis_benchmark: "CIS Google Workspace Foundations Benchmark v1.3.0"
tech_stack: [gcp, google-workspace]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: a506f27edd21be8a087acd80fc6119ab947f597c8091c69df45143dc07743b15
signature: yKjcRRrv1YDWxSJpnFeITLn5GQJCVevf47weGef5IXasmEnvy8kSW8ZWFmUz+I25XVc6qXieI01YDlHEV6f8Cw==
signed_by: siaga-official
---

# Ensure automatic forwarding options are disabled (Manual)

## Description

You should disable automatic forwarding to prevent users from auto-forwarding mail.

## Rationale

In the event that an attacker gains control of an end-user account they could create rules to ex-filtrate data from your environment.

## Impact

Care should be taken before implementation to ensure there is no business need for case-by-case auto-forwarding. Disabling auto-forwarding to remote domains will affect all users and in an organization.

## Audit Procedure

### Using Google Workspace Admin Console

1. Log in to https://admin.google.com as an administrator
2. Select `Apps`
3. Select `Google Workspace`
4. Select `Gmail`
5. Under `End User Access` - `Automatic forwarding`, ensure `Allow users to automatically forward incoming email to another address` is **unchecked**

### Expected Result

`Allow users to automatically forward incoming email to another address` should be unchecked.

## Remediation

### Using Google Workspace Admin Console

1. Log in to https://admin.google.com as an administrator
2. Select `Apps`
3. Select `Google Workspace`
4. Select `Gmail`
5. Under `End User Access` - `Automatic forwarding`, set `Allow users to automatically forward incoming email to another address` to **unchecked**
6. Select `Save`

## Default Value

`Allow users to automatically forward incoming email to another address` is **checked**

## CIS Controls

| Controls Version | Control                                                                         | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4.8 Uninstall or Disable Unnecessary Services on Enterprise Assets and Software |      | x    | x    |
| v7               | 9.2 Ensure Only Approved Ports, Protocols and Services Are Running              |      | x    | x    |

## Profile

Level 1
