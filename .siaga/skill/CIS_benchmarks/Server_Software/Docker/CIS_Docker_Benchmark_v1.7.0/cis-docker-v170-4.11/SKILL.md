---
name: cis-docker-v170-4.11
description: "Ensure only verified packages are installed"
category: cis-docker
version: "1.7.0"
author: siaga-official
tags: [cis, docker, images, configuration, package-verification]
cis_id: "4.11"
cis_benchmark: "CIS Docker Benchmark v1.7.0"
tech_stack: [docker]
cwe_ids: [CWE-494]
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 1bb70cc77249eb834650703285c57cbdcd1005db0a67e19c5c5a81c9de957ae7
signature: BYbRUYXnzEXsb2u8A/A6uV8jtcXd4VjEF1S6uQU6JK1d8WF32iTNqFnJJPwe0d+reJCGGJlpfPD8kx0KI4CaBQ==
signed_by: siaga-official
---

# CIS Docker Benchmark v1.7.0 - Control 4.11

## Profile Applicability

- Level 2 - Docker - Linux

## Description

You should verify the authenticity of packages before installing them into images.

## Rationale

Verifying authenticity of software packages is essential for building a secure container image. Packages with no known provenance could potentially be malicious or have vulnerabilities that could be exploited.

## Impact

None

## Audit Procedure

Run the command below to get the list of images:

```bash
docker images
```

Run the command below for each image in the list above, and check how the authenticity of the packages is being determined. This could be via the use of GPG keys or other secure package distribution mechanisms.

```bash
docker history <IMAGE_ID>
```

Alternatively, if you have access to Dockerfile for the image, verify that the authenticity of the packages is checked.

## Remediation

You should use a secure package distribution mechanism of your choice to ensure the authenticity of software packages.

## Default Value

Not Applicable

## References

1. https://www.redhat.com/sysadmin/rpm-gpg-verify-packages
2. https://help.ubuntu.com/community/SecureApt

## CIS Controls

**v8:**

- 2.2 Ensure Authorized Software is Currently Supported - Ensure that only currently supported software is designated as authorized in the software inventory for enterprise assets. If software is unsupported, yet necessary for the fulfillment of the enterprise's mission, document an exception detailing mitigating controls and residual risk acceptance. For any unsupported software without an exception documentation, designate as unauthorized. Review the software list to verify software support at least monthly, or more frequently.

**v7:**

- 18.3 Verify That Acquired Software is Still Supported - Verify that the version of all software acquired from outside your organization is still supported by the developer or appropriately hardened based on developer security recommendations.

## Assessment Status

Manual
