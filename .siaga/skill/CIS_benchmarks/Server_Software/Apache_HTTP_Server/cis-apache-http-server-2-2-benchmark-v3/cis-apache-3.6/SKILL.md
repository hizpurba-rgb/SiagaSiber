---
name: cis-apache-3.6
description: "Ensure Other Write Access on Apache Directories and Files Is Restricted"
category: cis-apache
version: "3.6.0"
author: siaga-official
tags: [cis, apache, linux, privileges, permissions, ownership]
cis_id: "3.6"
cis_benchmark: "CIS Apache HTTP Server 2.2 Benchmark v3.6.0"
tech_stack: [linux, apache]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 9c41ec0d15a0c246a4429077549e0dfd4802b52ba0d1d2ad8166eb98a60628b5
signature: ftF61CkI+Op6llG8xz4g4wVI9dg1J3fXlPpP3qSON0FLdcpUWl2kEWlaDN3uTNpY/1NJgYafYWdlYLrMwubmAg==
signed_by: siaga-official
---

# Ensure Other Write Access on Apache Directories and Files Is Restricted

## Description

The permission on the Apache directories should be `rwxr-xr-x` (755) and the file permissions should be similar, except not executable unless appropriate. This applies to all the Apache software directories and files installed, with the possible exception in some cases that a group with write access for the Apache web document root (`$APACHE_PREFIX/htdocs`) may be needed to allow web content to be updated. In addition, the `/bin` directory and executables should be set to not be readable by other.

## Rationale

None of the Apache files and directories, including the Web document root, should allow other write access. Other write access is likely to be very useful for unauthorized modification of web content, configuration files, and software.

## Impact

None documented

## Audit Procedure

Verify that there are no files or directories in the Apache directory with other write access, excluding symbolic links:

```
# find -L $APACHE_PREFIX \! -type l -perm /o=w -ls
```

## Remediation

Perform the following to remove other write access on the `$APACHE_PREFIX` directories:

```
# chmod -R o-w $APACHE_PREFIX
```

## Default Value

The default permissions are mostly `rwxr-xr-x`, except for some files which have group or other permissions that are affected by the umask of the user performing the build.

## References

None documented

## CIS Controls

### Version 6

14.4 Protect Information With Access Control Lists

All information stored on systems shall be protected with file system, network share, claims, application, or database specific access control lists. These controls will enforce the principle that only authorized individuals should have access to the information based on their need to access the information as a part of their responsibilities.

### Version 7

14.6 Protect Information through Access Control Lists

Protect all information stored on systems with file system, network share, claims, application, or database specific access control lists. These controls will enforce the principle that only authorized individuals should have access to the information based on their need to access the information as a part of their responsibilities.

## Profile

Level 1 | Scored
