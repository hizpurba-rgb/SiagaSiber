---
name: cis-azure-foundations-8.1.6.1
description: "Ensure That Microsoft Defender for App Services Is Set To 'On'"
category: cis-azure-foundations
version: "5.0.0"
author: siaga-official
tags: [cis, azure, security, defender, app-service]
cis_id: "8.1.6.1"
cis_benchmark: "CIS Microsoft Azure Foundations Benchmark v5.0.0"
tech_stack: [azure]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c9b330d2bd4d9c2df3a594cafb1db919af70a5c4b4c997fa4d978c2461594bb1
signature: 90x+zocQ+sTARvop4iG6gcClDoAGBuQWzMQBwwzJSr5L+baY8DAbpkbcU9ssEhqbHFQVv/5amKU6aJiu+FZFBw==
signed_by: siaga-official
---

# 8.1.6.1 Ensure That Microsoft Defender for App Services Is Set To 'On' (Automated)

## Description

Turning on Microsoft Defender for App Service enables threat detection for App Service, providing threat intelligence, anomaly detection, and behavior analytics in the Microsoft Defender for Cloud.

## Rationale

Enabling Microsoft Defender for App Service allows for greater defense-in-depth, with threat detection provided by the Microsoft Security Response Center (MSRC).

## Impact

Turning on Microsoft Defender for App Service incurs an additional cost per resource.

## Audit Procedure

**From Azure Portal:**

1. Go to `Microsoft Defender for Cloud`.
2. Under `Management`, select `Environment Settings`.
3. Click the subscription name.
4. Select `Defender plans`.
5. Ensure Status is `On` for `App Service`.

**From Azure CLI:**

```
az security pricing show -n AppServices
```

Ensure `-PricingTier` is set to `Standard`.

**From PowerShell:**

```
Get-AzSecurityPricing -Name 'AppServices' | Select-Object Name,PricingTier
```

Ensure the `-PricingTier` is set to `Standard`.

**From Azure Policy:**

- Policy ID: `2913021d-f2fd-4f3d-b958-22354e2bdbcb` - Name: 'Azure Defender for App Service should be enabled'

## Expected Result

The pricing tier for AppServices should be `Standard`.

## Remediation

**From Azure Portal:**

1. Go to `Microsoft Defender for Cloud`.
2. Under `Management`, select `Environment Settings`.
3. Click the subscription name.
4. Select `Defender plans`.
5. Set `App Service` Status to `On`.
6. Select `Save`.

**From Azure CLI:**

```
az security pricing create -n Appservices --tier 'standard'
```

**From PowerShell:**

```
Set-AzSecurityPricing -Name "AppServices" -PricingTier "Standard"
```

## Default Value

By default, Microsoft Defender plan is off.

## References

1. https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-overview
2. https://learn.microsoft.com/en-us/rest/api/defenderforcloud/pricings/list
3. https://learn.microsoft.com/en-us/rest/api/defenderforcloud/pricings/update
4. https://learn.microsoft.com/en-us/powershell/module/az.security/get-azsecuritypricing

## Profile

- Level 2
