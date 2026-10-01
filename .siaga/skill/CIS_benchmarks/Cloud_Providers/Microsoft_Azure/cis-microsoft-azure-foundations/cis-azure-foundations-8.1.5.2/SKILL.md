---
name: cis-azure-foundations-8.1.5.2
description: "Ensure Advanced Threat Protection Alerts for Storage Accounts Are Monitored"
category: cis-azure-foundations
version: "5.0.0"
author: siaga-official
tags: [cis, azure, security, defender, storage, monitoring]
cis_id: "8.1.5.2"
cis_benchmark: "CIS Microsoft Azure Foundations Benchmark v5.0.0"
tech_stack: [azure]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: b5b2e71e327717020f45721931af8230efdd00ed8010bb4eb47d8bf2b7a4bb71
signature: kTuFx+20QHZtg+AWWw/ZAEInWVBdpQ1OuBvOaWhXpQtkx1UMBnltHPpK3rGqcGeSmlyyaNQu5XcscTeY0VhSDw==
signed_by: siaga-official
---

# 8.1.5.2 Ensure Advanced Threat Protection Alerts for Storage Accounts Are Monitored (Manual)

## Description

After enabling Microsoft Defender for Storage, configure an alert monitoring and response process to ensure that alerts are actioned in a timely manner. Integrate with SIEM solutions like Microsoft Sentinel, or configure email/webhook notifications to security teams.

## Rationale

Enabling Microsoft Defender for Storage without a monitoring process limits its value. Continuous monitoring and alert triage ensure that detected threats are acted upon quickly, reducing risk exposure.

## Impact

Requires integration effort with SIEM or alerting tools and a defined incident response process. The amount of data logged and thus the cost incurred can vary significantly depending on the tenant size and the applications in your tenant that interact with the Microsoft Graph APIs.

## Audit Procedure

**From Azure Portal:**

1. Go to `Microsoft Defender for Cloud`.
2. Under `Management`, click `Environment Settings`.
3. Expand the Tenant Root Group(s) to reveal subscriptions.

For each subscription listed:

1. Click the subscription name to open the `Defender Plans` settings.
2. In the settings on the left, click `Continuous Export`.

Ensure that `Export enabled` is set to `On` and delivering at least `Security Alerts (Medium and High)` to an Event Hub or Log Analytics Workspace which is tied to a SIEM that is configured to monitor and alert for security alerts.

## Expected Result

Continuous export should be enabled and delivering security alerts to an Event Hub or Log Analytics Workspace.

## Remediation

**From Azure Portal:**

1. Go to `Microsoft Defender for Cloud`.
2. Under `Management`, click `Environment Settings`.
3. Expand the Tenant Root Group(s) to reveal subscriptions.

For each subscription listed:

1. Click the subscription name to open the `Defender Plans` settings.
2. In the settings on the left, click `Continuous Export`.
3. Select either `Event Hub, Log Analytics Workspace,` or both depending on your environment.
4. Set `Export enabled` to `On`.
5. Under Exported data types, ensure that at least `Security Alerts (Medium and High)` is checked.
6. Under Export target, set the target Event Hub or Log Analytics Workspace which is tied to a SIEM that is configured to monitor and alert for security alerts.

Ensure security alerts are included in the security operations workflow and incident response plan.

## Default Value

By default, continuous export is `off`.

## References

1. https://learn.microsoft.com/azure/defender-for-cloud/alerts-overview
2. https://learn.microsoft.com/azure/sentinel/connect-defender-for-cloud
3. https://learn.microsoft.com/en-us/azure/defender-for-cloud/continuous-export

## Profile

- Level 2
