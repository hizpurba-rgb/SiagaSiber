---
name: cis-ubuntu1804-v220-2-3-6
description: "Ensure RPC is not installed"
category: cis-networking
version: "2.2.0"
author: siaga-official
tags: [cis, ubuntu, linux, ubuntu-18.04, services, rpc]
cis_id: "2.3.6"
cis_benchmark: "CIS Ubuntu Linux 18.04 LTS Benchmark v2.2.0"
tech_stack: [ubuntu, linux]
cwe_ids: []
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 321e16a5258032a320548eaa1cd8fea6e4bba8bb3db5e75cd675947ee69cf02e
signature: iqAKXWz4DIT49EmL+ioUbcl6S2W7g5+wEeXQILaS1mOHJbBkWWKsK18sJGi7kdw+Rjbgq5S45SVBNfjZ+caJDA==
signed_by: siaga-official
---

# 2.3.6 Ensure RPC is not installed (Automated)

## Profile

- Level 1 - Server
- Level 1 - Workstation

## Description

Remote Procedure Call (RPC) is a method for creating low level client server applications across different system architectures. It requires an RPC compliant client listening on a network port. The supporting package is rpcbind."

## Rationale

If RPC is not required, it is recommended that this services be removed to reduce the remote attack surface.

## Audit Procedure

### Command Line

Run the following command to verify `rpcbind` is not installed:

```bash
# dpkg-query -s rpcbind &>/dev/null && echo "rpcbind is installed"
```

Nothing should be returned.

## Expected Result

No output (empty result).

## Remediation

### Command Line

Run the following command to remove `rpcbind`:

```bash
# apt purge rpcbind
```

## References

1. NIST SP 800-53 Rev. 5: CM-7

## CIS Controls

- v8: 4.8 - Uninstall or Disable Unnecessary Services on Enterprise Assets and Software
- v7: 9.2 - Ensure Only Approved Ports, Protocols and Services Are Running
