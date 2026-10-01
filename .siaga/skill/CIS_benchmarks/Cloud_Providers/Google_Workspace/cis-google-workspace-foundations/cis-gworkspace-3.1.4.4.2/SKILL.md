---
name: cis-gworkspace-3.1.4.4.2
description: "Ensure allow users to add and use incoming webhooks is disabled"
category: cis-gworkspace
version: "1.3.0"
author: siaga-official
tags: [cis, gcp, google-workspace, google-chat, webhooks, chat-apps]
cis_id: "3.1.4.4.2"
cis_benchmark: "CIS Google Workspace Foundations Benchmark v1.3.0"
tech_stack: [gcp, google-workspace]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 19a6bf02cc8ca9a1ec18e7d0326622e47151bf652511c3d51d058233e256ceae
signature: fczJrxllCdbewcPEDE9vsAP9xAprjXZOdP4Ls3vHNwEiTAIK2N532GB7wL+vOV2xQAlK9eFgWbvq9zZTsIXgBg==
signed_by: siaga-official
---

# Ensure allow users to add and use incoming webhooks is disabled (Manual)

## Description

Allow users to configure incoming webhooks and developers to call incoming webhooks to post content. Incoming webhooks let you send asynchronous messages into Google Chat from applications that aren't Chat apps.

## Rationale

Webhook usage should be carefully controlled (vetted and approved) since a malicious application could send bogus information to exposed webhooks and ultimately these users.

## Impact

By default users will have exposed webhooks.

## Audit Procedure

### Using Google Workspace Admin Console

1. Log in to https://admin.google.com as an administrator
2. Select `Apps`
3. Select `Google Chat and classic Hangouts`
4. Select `Chat apps`
5. Under `Chat apps access settings`, verify `Allow users to add and use incoming webhooks` is **OFF**

### Expected Result

`Allow users to add and use incoming webhooks` should be OFF.

## Remediation

### Using Google Workspace Admin Console

1. Log in to https://admin.google.com as an administrator
2. Select `Apps`
3. Select `Google Chat and classic Hangouts`
4. Select `Chat apps`
5. Under `Chat apps access settings`, set `Allow users to add and use incoming webhooks` to **OFF**

## Default Value

`Allow users to add and use incoming webhooks` is **ON**

## CIS Controls

This control does not have explicit CIS Controls mappings in the PDF.

## Profile

Level 1
