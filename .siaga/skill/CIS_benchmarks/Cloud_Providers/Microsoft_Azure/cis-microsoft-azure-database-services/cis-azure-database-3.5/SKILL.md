---
name: cis-azure-database-3.5
description: "Ensure critical data is encrypted with customer-managed keys (CMK)"
category: cis-azure-database
version: "2.0.0"
author: siaga-official
tags: [cis, azure, cosmos-db, nosql]
cis_id: "3.5"
cis_benchmark: "CIS Microsoft Azure Database Services Benchmark v2.0.0"
tech_stack: [azure]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 34673d83ca23fa1f615bfac273bdab67ff1296a7e97a2b0447bbccfa5568de23
signature: u+AptdXoTKOrmKcmMU/Mug7WIyK0ds0p/cJcND0L78lWanQ5sP26SXeGYja15jRmNcv2IfeovX1lX8kYzW6fDQ==
signed_by: siaga-official
---

# 3.5 Ensure critical data is encrypted with customer-managed keys (CMK) (Manual)

## Profile Applicability

- Level 2

## Description

Customer-managed keys introduce additional depth to security by providing control over encryption keys. Where required, and organizational capacity allows, sensitive data at rest can be encrypted using customer-managed keys.

While it is possible to automate the assessment of this recommendation, the assessment status remains "Manual" due to ideally limited scope. The scope of application should be carefully considered to account for organizational capacity, and targeted to workloads with specific need for CMK.

## Rationale

Customer-managed keys provide greater control over the creation, rotation, and revocation of encryption keys, supporting strict security and compliance requirements.

## Impact

Implementing customer-managed keys introduces additional administrative effort to create, rotate, monitor, and secure encryption keys.

## Audit Procedure

### Audit from Azure Portal

1. Go to `Azure Cosmos DB`.
2. Select the name of an Azure Cosmos DB account.
3. Under **Settings**, select **Data Encryption**.
4. Ensure `Encryption Key Type` is set to `Customer-managed key`.
5. Repeat steps 1-4 for each account.

### Audit from Azure CLI

Run the following command to list Azure Cosmos DB accounts:

```bash
az cosmosdb list
```

For each account, run the following command to get the Key Vault key URI:

```bash
az cosmosdb show --resource-group <resource-group> --name <cosmos-db> --query keyVaultKeyUri
```

Ensure an Azure Key Vault key URI is returned.

### Audit from PowerShell

Run the following command to get Azure Cosmos DB accounts for a given resource group:

```powershell
Get-AzCosmosDBAccount -ResourceGroupName <resource-group>
```

Run the following command to get the account with a given name:

```powershell
$cosmosdb = Get-AzCosmosDBAccount -ResourceGroupName <resource-group> -Name <cosmos-db>
```

Run the following command to get the Key Vault key URI:

```powershell
$cosmosdb.KeyVaultKeyUri
```

Ensure an Azure Key Vault key URI is returned.

Repeat for each account.

### Audit from Azure Policy

- **Policy ID:** `1f905d99-2ab7-462c-a6b0-f709acca6c8f` - **Name:** 'Azure Cosmos DB accounts should use customer-managed keys to encrypt data at rest'

## Expected Result

`Encryption Key Type` should be set to `Customer-managed key`, or a Key Vault key URI should be returned from CLI/PowerShell.

## Remediation

### Remediate from Azure Portal

1. Go to `Azure Cosmos DB`.
2. Select the name of an Azure Cosmos DB account.
3. Under **Settings**, select **Data Encryption**.
4. Set `Encryption Key Type` to `Customer-managed key`.
5. Provide a key URI.
6. Select **Save**.
7. Repeat steps 1-6 for each account requiring remediation.

## Default Value

By default, Azure Cosmos DB accounts are encrypted using service-managed keys.

## References

1. [https://learn.microsoft.com/en-gb/azure/cosmos-db/how-to-setup-customer-managed-keys-existing-accounts](https://learn.microsoft.com/en-gb/azure/cosmos-db/how-to-setup-customer-managed-keys-existing-accounts)

## CIS Controls

| Controls Version | Control                                    | IG 1 | IG 2 | IG 3 |
| ---------------- | ------------------------------------------ | ---- | ---- | ---- |
| v8               | 3.11 Encrypt Sensitive Data at Rest        |      | X    | X    |
| v7               | 14.8 Encrypt Sensitive Information at Rest |      |      | X    |

## MITRE ATT&CK Mappings

| Techniques / Sub-techniques | Tactics | Mitigations |
| --------------------------- | ------- | ----------- |
| T1530                       | TA0009  | M1041       |
