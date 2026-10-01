---
name: cis-ubuntu1204-v110-13-9
description: "Check Permissions on User .netrc Files"
category: cis-os-hardening
version: "1.1.0"
author: siaga-official
tags: [cis, ubuntu, 12.04, linux, user-management, netrc, permissions, file-permissions, ftp]
cis_id: "13.9"
cis_benchmark: "CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d3c76c5c5e5eb3d4a77a881ef6489dc2ebe991fd3e17a89a4b963da9b251a2de
signature: NPxbpt+QgG4ti5OfzH7sLGLsuubYNZ6wzFs2WcVrOntN8AH3OhwbuDJRIPsqihpIPMPoLL6/ZGXW43AS7CJuAA==
signed_by: siaga-official
---

# 13.9 Check Permissions on User .netrc Files (Scored)

## Profile Applicability

- Level 1

## Description

While the system administrator can establish secure permissions for users' `.netrc` files, the users can easily override these.

## Rationale

`.netrc` files may contain unencrypted passwords that may be used to attack other systems.

## Audit Procedure

### Using Command Line

```bash
#!/bin/bash
for dir in `/bin/cat /etc/passwd | /bin/egrep -v '(root|sync|halt|shutdown)' |\
    /usr/bin/awk -F: '($7 != "/usr/sbin/nologin") { print $6 }'`; do
for file in $dir/.netrc; do
        if [ ! -h "$file" -a -f "$file" ]; then
          fileperm=`/bin/ls -ld $file | /usr/bin/cut -f1 -d" "`
if [ `echo $fileperm | /usr/bin/cut -c5 ` != "-" ]           then
              echo "Group Read set on $file"
fi
          if [ `echo $fileperm | /usr/bin/cut -c6 ` != "-" ]
then
              echo "Group Write set on $file"
fi
          if [ `echo $fileperm | /usr/bin/cut -c7 ` != "-" ]
then
              echo "Group Execute set on $file"
fi
          if [ `echo $fileperm | /usr/bin/cut -c8 ` != "-" ]
then
              echo "Other Read  set on $file"
fi
          if [ `echo $fileperm | /usr/bin/cut -c9 ` != "-" ]
then
              echo "Other Write set on $file"
fi
          if [ `echo $fileperm | /usr/bin/cut -c10 ` != "-" ]
then
              echo "Other Execute set on $file"
fi      fi   done done
```

## Expected Result

No output should be returned. Any output indicates `.netrc` files with overly permissive settings.

## Remediation

### Using Command Line

Making global modifications to users' files without alerting the user community can result in unexpected outages and unhappy users. Therefore, it is recommended that a monitoring policy be established to report user `.netrc` file permissions and determine the action to be taken in accordance with site policy.

## Default Value

`.netrc` files do not exist by default.

## References

- CIS Ubuntu 12.04 LTS Server Benchmark v1.1.0

## Profile

Level 1 - Scored
