---
name: cis-k8s-v200-5.1.12
description: "Minimize access to webhook configuration objects (Manual)"
category: cis-k8s
version: "2.0.0"
author: siaga-official
tags: [cis, kubernetes, policies, rbac, service-accounts, webhooks, admission-webhooks, privilege-escalation]
cis_id: "5.1.12"
cis_benchmark: "CIS Kubernetes Benchmark v2.0.0"
tech_stack: [kubernetes]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 90e67f514d2bcaa8ba8430bd8ce1ad2aa127178eded6f841bbc60591fe077357
signature: P2IpLpLSl96JeqzCuq9wkkyR0zmAax6WssXxh5SRTk9g81RIAxPjcI8nqpUlgZElGreFjX/QGjLUH2tprJmyBA==
signed_by: siaga-official
---

# 5.1.12 Minimize access to webhook configuration objects (Manual)

## Profile Applicability

- Level 1 - Master Node

## Description

Users with rights to create/modify/delete `validatingwebhookconfigurations` or `mutatingwebhookconfigurations` can control webhooks that can read any object admitted to the cluster, and in the case of mutating webhooks, also mutate admitted objects. This could allow for privilege escalation or disruption of the operation of the cluster.

## Rationale

The ability to manage webhook configuration should be limited.

## Audit

Review the users who have access to `validatingwebhookconfigurations` or `mutatingwebhookconfigurations` objects in the Kubernetes API.

## Remediation

Where possible, remove access to the `validatingwebhookconfigurations` or `mutatingwebhookconfigurations` objects.

## References

1. https://kubernetes.io/docs/concepts/security/rbac-good-practices/#control-admission-webhooks
