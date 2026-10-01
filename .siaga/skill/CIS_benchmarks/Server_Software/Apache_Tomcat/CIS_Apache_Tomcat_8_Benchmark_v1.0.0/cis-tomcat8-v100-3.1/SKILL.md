---
name: cis-tomcat8-v100-3.1
description: "Set a nondeterministic Shutdown command value"
category: cis-tomcat
version: "1.0.0"
author: siaga-official
tags: [cis, tomcat, tomcat-8, hardening, shutdown-port]
cis_id: "3.1"
cis_benchmark: "CIS Apache Tomcat 8 Benchmark v1.0.0"
tech_stack: [linux, tomcat, java]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 3689a2275517188170d5fc221c2acef7eea43afa7dfbc29200471613b6de6fc8
signature: ocJ4x4e613XoZFWd4Q7fU1HeD6c/sD8sszh37uzggQUQcCw8Rp+9pmskC6BvOwaI89rjV1V8JsGbkCrca/PZBQ==
signed_by: siaga-official
---

# 3.1 Set a nondeterministic Shutdown command value (Scored)

## Description

Tomcat listens on TCP port 8005 to accept shutdown requests. By connecting to this port and sending the SHUTDOWN command, all applications within Tomcat are halted. The shutdown port is not exposed to the network as it is bound to the loopback interface. It is recommended that a nondeterministic value be set for the shutdown attribute in `$CATALINA_HOME/conf/server.xml`.

## Rationale

Setting the shutdown attribute to a nondeterministic value will prevent malicious local users from shutting down Tomcat.

## Audit Procedure

Perform the following to determine if the shutdown port is configured to use the default shutdown command:

1. Ensure the shutdown attribute in `$CATALINA_HOME/conf/server.xml` is not set to SHUTDOWN.

```bash
$ cd $CATALINA_HOME/conf
$ grep 'shutdown[[:space:]]*=[[:space:]]*"SHUTDOWN"' server.xml
```

## Remediation

1. Update the shutdown attribute in `$CATALINA_HOME/conf/server.xml` as follows:

```xml
<Server port="8005" shutdown="NONDETERMINISTICVALUE">
```

Note: NONDETERMINISTICVALUE should be replaced with a sequence of random characters.

## Default Value

The default value for the shutdown attribute is SHUTDOWN.

## References

1. http://tomcat.apache.org/tomcat-8.0-doc/config/server.html

## CIS Controls

- Not mapped in this benchmark version

## Profile Applicability

- Level 1
