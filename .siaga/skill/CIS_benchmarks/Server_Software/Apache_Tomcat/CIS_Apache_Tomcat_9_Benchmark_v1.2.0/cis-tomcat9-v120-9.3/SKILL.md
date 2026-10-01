---
name: cis-tomcat9-v120-9.3
description: "Disable deploy on startup of applications (Automated)"
category: cis-tomcat
version: "1.2.0"
author: siaga-official
tags: [cis, tomcat, tomcat-9, hardening, deployment, auto-deploy]
cis_id: "9.3"
cis_benchmark: "CIS Apache Tomcat 9 Benchmark v1.2.0"
tech_stack: [linux, tomcat, java]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: f9cf0804f40531ad4335d97e669b22650b67ba6396f00397210b887f0c658ccd
signature: cfAUo1eXSAR0XoC43bxB7Zm+H1isQTPXATSeAACubwI7uF99dWavq5OJaacQqq7dqm5bjZb774Xn/zBkTkEzBA==
signed_by: siaga-official
---

# 9.3 Disable deploy on startup of applications (Automated)

## Description

Tomcat allows auto deployment of applications on startup. It is recommended that this capability be disabled.

## Rationale

This could allow malicious or untested applications to be deployed and should be disabled.

## Audit Procedure

Perform the following to ensure `deployOnStartup` is set to `false`.

```bash
$ grep "deployOnStartup" $CATALINA_HOME/conf/server.xml
```

## Remediation

In the `$CATALINA_HOME/conf/server.xml` file, change `deployOnStartup` to `false`.

```xml
<Host name="localhost" appBase="webapps"
      unpackWARs="true" autoDeploy="false"
      deployOnStartup="false">
```

## Default Value

`deployOnStartup` is set to `true`.

## References

1. https://tomcat.apache.org/tomcat-9.0-doc/deployer-howto.html#Deployment_on_Tomcat_startup
2. https://tomcat.apache.org/tomcat-9.0-doc/config/host.html#Automatic_Application_Deployment

## CIS Controls

| Controls Version | Control                                                                                                                                                                                                                                                                                        | IG 1 | IG 2 | IG 3 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| v8               | 4 Secure Configuration of Enterprise Assets and Software<br>Establish and maintain the secure configuration of enterprise assets (end-user devices, including portable and mobile; network devices; non-computing/IoT devices; and servers) and software (operating systems and applications). |      |      |      |
| v7               | 5.1 Establish Secure Configurations<br>Maintain documented, standard security configuration standards for all authorized operating systems and software.                                                                                                                                       | ●    | ●    | ●    |

## Profile Applicability

- Level 2
