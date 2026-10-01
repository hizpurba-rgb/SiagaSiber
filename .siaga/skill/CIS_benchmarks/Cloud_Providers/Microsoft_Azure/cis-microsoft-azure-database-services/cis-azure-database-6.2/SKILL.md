---
name: cis-azure-database-6.2
description: "Ensure Azure Database for PostgreSQL uses only Microsoft Entra Authentication"
category: cis-azure-database
version: "2.0.0"
author: siaga-official
tags: [cis, azure, postgresql, database]
cis_id: "6.2"
cis_benchmark: "CIS Microsoft Azure Database Services Benchmark v2.0.0"
tech_stack: [azure]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 18a88a896dca14091fc293d710de154a071e4db8a9901cf19a52c96d89c8c7ef
signature: HjgHhq4tKH9K12QmN9nFkTxAVbAueG2kjIdHXtdubaB1AzJGL3fn3QWscbK2y5ffrrmOnn0V5UTKG0V/BnOgDQ==
signed_by: siaga-official
---

# 6.2 Ensure Azure Database for PostgreSQL uses only Microsoft Entra Authentication (Manual)

## Profile Applicability

- Level 1

## Description

Ensuring that Microsoft Entra Authentication is the only authentication method prevents the local PostgreSQL authentication from being used.

## Rationale

The use of a centralized Identity and Access Management (IAM) solution such as Microsoft Entra ID is highly recommended for all activity related to Identity, Authentication, Authorization, and Accountability.

Decentralized IAM -- such as local authentication methods -- may present additional vulnerability and introduce avoidable administrative complexity.

## Impact

None documented.

## Audit Procedure

### Audit from Azure Portal

1. From `Azure Database for PostgreSQL` select a server to audit.
2. Under the Security section, click `Authentication`.
3. In the main window, under the Authentication header, ensure that "Authentication method:" reflects the selection of `Microsoft Entra authentication only`.

## Expected Result

The "Authentication method" should be set to `Microsoft Entra authentication only`.

## Remediation

### Remediate from Azure Portal

1. From `Azure Database for PostgreSQL` select a server to remediate.
2. Under the Security section, click `Authentication`.
3. In the main window, under the Authentication header where "Authentication method:" provides three options, select `Microsoft Entra authentication only`.

## Default Value

By default, Azure Database for PostgreSQL uses `PostgreSQL authentication only`.

## References

1. https://learn.microsoft.com/en-us/azure/postgresql/security/security-entra-concepts
2. https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-identity-management

## Profile

- Level 1
