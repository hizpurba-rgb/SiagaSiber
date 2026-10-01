---
name: cis-cassandra311-1.6
description: "Ensure clocks are synchronized on all nodes"
category: cis-cassandra
version: "1.1.0"
author: siaga-official
tags: [cis, cassandra, installation, ntp]
cis_id: "1.6"
cis_benchmark: "CIS Apache Cassandra 3.11 Benchmark v1.1.0"
tech_stack: [cassandra]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d086633cb6869573b42fba70273a153a9c53b1a7d8f624af20844e965645a2cd
signature: lQAX29Vw0XCth3Xr5GJo9uT7524R4elrEnFrSqVHQ8PHGzVRFY39l14a/MMST3SjuOVlwh1d3jgRTFdduWz4Bg==
signed_by: siaga-official
---

# 1.6 Ensure clocks are synchronized on all nodes

## Profile Applicability

- Level 1 - Cassandra on Linux
- Level 2 - Cassandra on Linux

## Description

Enabling Network Time Protocol (NTP), or some equivalent way, to keep clocks on all nodes in sync is critical.

## Rationale

Cassandra decides which data is most current between all of the nodes in the cluster based on timestamps. It is paramount to ensure all clocks are in-sync, otherwise the most current data may not be returned or worse, marked for deletion.

## Audit

Depending on the Linux installation this may be checked by executing the following command on each node:

```bash
ps -aef | grep ntp

OR

ps -aef | grep chronyd
```

If NTP is not configured or clocks are out-of-sync then this is a finding.

## Remediation

Install and start the time protocol on every node in the Cassandra cluster.

## Default Value

No default time synchronization is configured.

## References

Not specified in the benchmark.

## CIS Controls

- v8: 8.4 Standardize Time Synchronization
- v7: 6.1 Utilize Three Synchronized Time Sources

## Profile

- Level 1 | Manual
