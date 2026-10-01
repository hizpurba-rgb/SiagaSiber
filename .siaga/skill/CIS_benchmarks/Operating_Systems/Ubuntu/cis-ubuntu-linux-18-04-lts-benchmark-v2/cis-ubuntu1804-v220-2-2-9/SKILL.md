---
name: cis-ubuntu1804-v220-2-2-9
description: "Ensure HTTP server is not installed"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, services, http]
cis_id: "2.2.9"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 5f677fd5b5e10957781ae14e56dab76c18cc08188d469e3399119ad010672770
signature: TUVJkIt+ZvH0V+y1NiGPWpAEV5tCP5F+6tjzG+J0iRoPvlkVGpYd3FOXBS+T9TcyKRy/308OsnHvMSvZF3CyCg==
signed_by: siaga-official
---

# 2.2.9 Ensure HTTP server is not installed (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

HTTP or web servers provide the ability to host web site content.

## Rationale

Unless there is a need to run the system as a web server, it is recommended that the package be deleted to reduce the potential attack surface.

## Audit Procedure

### Command Line

Run the following command to verify `apache2` is not installed:

```bash
# dpkg-query -s apache2 &>/dev/null && echo "apache2 is installed"
```

Nothing should be returned.

## Expected Result

No output (empty result).

## Remediation

### Command Line

Run the following command to remove `apache2`:

```bash
# apt purge apache2
```

## References

1. NIST SP 800-53 Rev. 5: CM-7

Additional Information:

Several httpd servers exist and can use other service names. `apache2` and `nginx` are example services that provide an HTTP server. These and other services should also be audited.

## CIS Controls

- v8: 4.8 - Uninstall or Disable Unnecessary Services on Enterprise Assets and Software
- v7: 9.2 - Ensure Only Approved Ports, Protocols and Services Are Running
