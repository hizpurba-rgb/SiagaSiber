---
name: cis-tomcat101-9.1
description: "Disabling auto deployment of applications (Automated)"
category: cis-tomcat
version: "1.0.0"
author: siaga-official
tags: [cis, tomcat, linux, java, deployment, auto-deploy]
cis_id: "9.1"
cis_benchmark: "CIS Apache Tomcat 10.1 Benchmark v1.0.0"
tech_stack: [linux, tomcat, java]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: d06a1e75099e5f0f3662d0f9bdb1d8d34b5e4e047d8213e3d1a206e4e13a622e
signature: 0cUgchrYMEWJ0QT5saaNEwo0eklqZb2hYUoOnBMLKnw/59hbyNaJ1R17FiLjpQsnbBnN9MK4+sWkcPXL0Vk9BQ==
signed_by: siaga-official
---

# 9.1 Disabling auto deployment of applications (Automated)

## Description

Tomcat allows auto deployment of applications while Tomcat is running. It is recommended that this capability be disabled.

## Rationale

This could allow malicious or untested applications to be deployed and should be disabled.

## Audit Procedure

Perform the following to ensure `autoDeploy` is set to `false`.

```
# grep "autoDeploy" $CATALINA_HOME/conf/server.xml
```

## Remediation

In the `$CATALINA_HOME/conf/server.xml` file, change `autoDeploy` to `false`.

```
autoDeploy="false"
```

## Default Value

`autoDeploy` is set to `true`.

## References

1. https://tomcat.apache.org/tomcat-9.0-doc/deployer-howto.html#Deploying_on_a_running_Tomcat_server
2. https://tomcat.apache.org/tomcat-9.0-doc/config/host.html

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                                                                        | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4 Secure Configuration of Enterprise Assets and Software<br>Establish and maintain the secure configuration of enterprise assets (end-user devices, including portable and mobile; network devices; non-computing/IoT devices; and servers) and software (operating systems and applications). |      |      |      |
| v7               | 5.1 Establish Secure Configurations<br>Maintain documented, standard security configuration standards for all authorized operating systems and software.                                                                                                                                       | ●    | ●    | ●    |

## Profile

Level 2
