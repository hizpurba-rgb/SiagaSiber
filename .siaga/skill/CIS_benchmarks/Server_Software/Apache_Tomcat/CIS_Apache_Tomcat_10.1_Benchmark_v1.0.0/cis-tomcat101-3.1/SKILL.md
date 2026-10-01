---
name: cis-tomcat101-3.1
description: "Set a nondeterministic Shutdown command value (Automated)"
category: cis-tomcat
version: "1.0.0"
author: siaga-official
tags: [cis, tomcat, linux, java, shutdown, port]
cis_id: "3.1"
cis_benchmark: "CIS Apache Tomcat 10.1 Benchmark v1.0.0"
tech_stack: [linux, tomcat, java]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 1f7c31ec2935b1cf380f644c60f612722cda76574b94bd6294947c351a59fcb1
signature: 4n/bQmTOaur8hDpjR2ljYxjq0eJfq8nrX583DsGh8/vlerkOPdwpjJg2A86j04X9SoNe00Dbbk/mo0pHXQ7rAg==
signed_by: siaga-official
---

# Set a nondeterministic Shutdown command value (Automated)

## Description

Tomcat listens on TCP port 8005 to accept shutdown requests. By connecting to this port and sending the SHUTDOWN command, all applications within Tomcat are halted. The shutdown port is not exposed to the network as it is bound to the loopback interface. It is recommended that a nondeterministic value be set for the shutdown attribute in `$CATALINA_HOME/conf/server.xml`.

## Rationale

Setting the shutdown attribute to a nondeterministic value will prevent malicious local users from shutting down Tomcat.

## Audit Procedure

Perform the following to determine if the shutdown port is configured to use the default shutdown command. Ensure the shutdown attribute in `$CATALINA_HOME/conf/server.xml` is not set to SHUTDOWN.

```bash
$ cd $CATALINA_HOME/conf
$ grep 'shutdown[[:space:]]*=[[:space:]]*"[[:space:]]*SHUTDOWN"' server.xml
```

## Remediation

Perform the following to set a nondeterministic value for the shutdown attribute. Update the shutdown attribute in `$CATALINA_HOME/conf/server.xml` as follows:

```xml
<Server port="8005" shutdown="NONDETERMINISTICVALUE">
```

Note: NONDETERMINISTICVALUE should be replaced with a sequence of random characters.

## Default Value

The default value for the shutdown attribute is SHUTDOWN.

## References

1. https://tomcat.apache.org/tomcat-9.0-doc/config/server.html

## CIS Controls

**v8:**

- 2.7 Allowlist Authorized Scripts
  - Use technical controls, such as digital signatures and version control, to ensure that only authorized scripts, such as specific .ps1, .py, etc., files, are allowed to execute. Block unauthorized scripts from executing. Reassess bi-annually, or more frequently.

**v7:**

- 4.7 Limit Access to Script Tools
  - Limit access to scripting tools (such as Microsoft PowerShell and Python) to only administrative or development users with the need to access those capabilities.

## Profile Applicability

- Level 1
