---
name: cis-cassandra41-3.2
description: "Ensure that the default password is changed for the cassandra role"
category: cis-cassandra
version: "1.0.0"
author: siaga-official
tags: [cis, cassandra, access-control, passwords, default-credentials]
cis_id: "3.2"
cis_benchmark: "CIS Apache Cassandra 4.1 Benchmark v1.0.0"
tech_stack: [cassandra]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 5114351e2ff1e4f3ac4a2411d576d7eed8944d657f15fd19389a1abecddab0f6
signature: 41Af/2ofsQs0Tc0oRv/r0ZdVMZUnc7QKpuQIwfFWJhbpIk+XTlLk6eEGC1zbRJjEoYz7cQ0lzYSKBgnK0/GzBQ==
signed_by: siaga-official
---

# 3.2 Ensure that the default password is changed for the cassandra role

## Profile Applicability

- Level 1 - Cassandra
- Level 1 - Cassandra on Linux

## Description

The cassandra role has a default password which must be changed.

## Rationale

Failure to change the default password for the cassandra role may pose a risk to the database in the form of unauthorized access.

## Audit

Connect to Cassandra database to verify whether the cassandra role has default password.

```bash
cqlsh -u cassandra -p cassandra
```

If the connection is successful this is a finding.

## Remediation

Change the password for the casssandra role by issuing the following command:

```bash
cqlsh -u cassandra -p cassandra

alter role 'cassandra' with password '<NEWPASSWORD_HERE>';
```

Where `<NEWPASSWORD_HERE>` is replaced with the password of your choosing.

## Default Value

```
cassandra
```

## References

1. http://cassandra.apache.org/doc/latest/operating/security.html

## CIS Controls

**v8:**

- 5.2 Use Unique Passwords
  - Use unique passwords for all enterprise assets. Best practice implementation includes, at a minimum, an 8-character password for accounts using MFA and a 14-character password for accounts not using MFA.

**v7:**

- 4.4 Use Unique Passwords
  - Where multi-factor authentication is not supported (such as local administrator, root, or service accounts), accounts will use passwords that are unique to that system.

## Profile

- Level 1 | Automated
