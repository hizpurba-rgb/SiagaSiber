---
name: cis-ubuntu2004-v300-1-7-10
description: "Ensure XDMCP is not enabled"
category: cis-networking
version: "3.0.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-20.04, gnome, xdmcp, remote-display]
cis_id: "1.7.10"
cis_benchmark: "CIS Ubuntu Linux 20.04 LTS Benchmark v3.0.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: c027d41a69be072758d3d3be9a2532eb50e21ed97344078c5e6edbaf4f6c6c01
signature: TbGvod6KqSkAyL+SG75fy2LSGZG0wf/MgOnF65GmnGEzcwE0MXbFesixPt39a62Ck4y5O8/09pWowSfgNpmWAA==
signed_by: siaga-official
---

# 1.7.10 Ensure XDMCP is not enabled (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

X Display Manager Control Protocol (XDMCP) is designed to provide authenticated access to display management services for remote displays.

## Rationale

XDMCP is inherently insecure.

- XDMCP is not a ciphered protocol. This may allow an attacker to capture keystrokes entered by a user
- XDMCP is vulnerable to man-in-the-middle attacks. This may allow an attacker to steal the credentials of legitimate users by impersonating the XDMCP server.

## Audit Procedure

### Command Line

Run the following script and verify the output:

```bash
#!/usr/bin/env bash

{
   while IFS= read -r l_file; do
      awk '/\[xdmcp\]/{ f = 1;next } /\[/{ f = 0 } f {if (/^\s*Enable\s*=\s*true/) print "The file: \""$l_file"\" includes: \"" $0 "\" in the \"[xdmcp]\" block"}' "$l_file"
   done < <(grep -Psil -- '^\h*\[xdmcp\]' /etc/{gdm3,gdm}/{custom,daemon}.conf)
}
```

Nothing should be returned.

## Expected Result

No output should be returned, confirming XDMCP is not enabled.

## Remediation

### Command Line

Edit the `/etc/gdm3/custom.conf` or `/etc/gdm/custom.conf` file and remove the `Enable=true` option from the `[xdmcp]` section if it exists.

## References

1. NIST SP 800-53 Rev. 5: CM-6, CM-7
