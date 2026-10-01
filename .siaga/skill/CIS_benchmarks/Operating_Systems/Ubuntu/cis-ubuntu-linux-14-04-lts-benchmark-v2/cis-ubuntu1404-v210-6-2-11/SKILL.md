---
name: "CIS Ubuntu 14.04 LTS - 6.2.11 Ensure no users have .forward files"
description: "Verify no users have .forward files in their home directories"
category: "cis-os-hardening"
version: "2.1.0"
author: "siaga-official"
tags:
  - cis
  - ubuntu
  - ubuntu-14.04
  - level-1
  - scored
  - user-accounts
cis_id: "6.2.11"
cis_benchmark: "CIS Ubuntu Linux 14.04 LTS Benchmark v2.1.0"
tech_stack:
  - ubuntu
  - linux
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: "medium"
sha256: f3e3b86e6fda7c98d24eaf59c466c901a0f1ef3f4f2adb1f2386965c68f02e52
signature: r7Eeqnbo8slpU1mXB/fcgV2LwEEqqzVfzPeDnUJAhAk+Ja4iR6JT0dDYJmZsMvx5+2RsmAGiOlC+SICP8G2JDQ==
signed_by: siaga-official
---

# 6.2.11 Ensure no users have .forward files (Scored)

## Profile Applicability

- Level 1 - Server
- Level 1 - Workstation

## Description

The `.forward` file specifies an email address to forward the user's mail to.

## Rationale

Use of the `.forward` file poses a security risk in that sensitive data may be inadvertently transferred outside the organization. The `.forward` file also poses a risk as it can be used to execute commands that may perform unintended actions.

## Audit Procedure

Run the following script and verify no results are returned:

```bash
#!/bin/bash

cat /etc/passwd | egrep -v '^(root|halt|sync|shutdown)' | awk -F: '($7 != "/sbin/nologin" && $7 != "/bin/false") { print $1 " " $6 }' | while read user dir; do
  if [ ! -d "$dir" ]; then
     echo "The home directory ($dir) of user $user does not exist."
  else
     if [ ! -h "$dir/.forward" -a -f "$dir/.forward" ]; then
        echo ".forward file $dir/.forward exists"
     fi
  fi
done
```

## Expected Result

No output should be returned.

## Remediation

Making global modifications to users' files without alerting the user community can result in unexpected outages and unhappy users. Therefore, it is recommended that a monitoring policy be established to report user `.forward` files and determine the action to be taken in accordance with site policy.

## Default Value

Not applicable.

## References

None

## CIS Controls

7 Email and Web Browser Protections - Email and Web Browser Protections

## Profile

- Level 1
