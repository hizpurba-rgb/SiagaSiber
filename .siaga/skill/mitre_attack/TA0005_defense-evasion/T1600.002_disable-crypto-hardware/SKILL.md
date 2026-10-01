---
name: "T1600.002_disable-crypto-hardware"
description: "Adversaries disable a network device’s dedicated hardware encryption, which may enable them to leverage weaknesses in software encryption in order to reduce the effort involved in collecting, manip..."
category: "configuration"
version: "18.1"
author: "siaga-official"
tags:
  - mitre-attack
  - enterprise
  - t1600.002
  - defense-evasion
  - network-devices
  - sub-technique
technique_id: "T1600.002"
tactic: "defense-evasion"
all_tactics:
  - defense-evasion
platforms:
  - Network Devices
mitre_url: "https://attack.mitre.org/techniques/T1600/002"
tech_stack:
  - network devices
cwe_ids:
  - CWE-693
chains_with:
  - T1600
  - T1600.001
prerequisites:
  - T1600
severity_boost:
  T1600: "Chain with T1600 for deeper attack path"
  T1600.001: "Chain with T1600.001 for deeper attack path"
sha256: f894f372253c2e497bc443bef6e9e32ff58bdd0d7e35bd0bf552b7be7850d957
signature: tzFC0Ojox/qR3hmRsCJqdKO7yZx+dTTRAF4hPdr2gqLqX1OzXd+4IsgnEZOj6m++jgGLrFX410VIMG7bIryLAw==
signed_by: siaga-official
---

# T1600.002 Disable Crypto Hardware

> **Sub-technique of:** T1600

## High-Level Description

Adversaries disable a network device’s dedicated hardware encryption, which may enable them to leverage weaknesses in software encryption in order to reduce the effort involved in collecting, manipulating, and exfiltrating transmitted data.

Many network devices such as routers, switches, and firewalls, perform encryption on network traffic to secure transmission across networks. Often, these devices are equipped with special, dedicated encryption hardware to greatly increase the speed of the encryption process as well as to prevent malicious tampering. When an adversary takes control of such a device, they may disable the dedicated hardware, for example, through use of Modify System Image, forcing the use of software to perform encryption on general processors. This is typically used in conjunction with attacks to weaken the strength of the cipher in software (e.g., Reduce Key Space).

## Kill Chain Phase

- Defense Evasion (TA0005)

**Platforms:** Network Devices

## What to Check

- [ ] Identify if Disable Crypto Hardware technique is applicable to target environment
- [ ] Check Network Devices systems for indicators of Disable Crypto Hardware
- [ ] Assess detection coverage (1 detection strategies)

## How to Test

### Manual Testing

1. **Identify Attack Surface**: Determine if the target environment is susceptible to Disable Crypto Hardware by examining the target platforms (Network Devices).

2. **Assess Existing Defenses**: Review whether mitigations for T1600.002 are in place. If defenses are absent or misconfigured, this technique may be exploitable.

3. **Execute Test**: Use tools and methods described in the MITRE ATT&CK page and external references below.

> **Note**: No Atomic Red Team tests available for this technique. See [Atomic Red Team GitHub](https://github.com/redcanaryco/atomic-red-team) for updates.

## Remediation Guide

No specific mitigations documented for this technique.

## Detection

### Detection Strategy for Weaken Encryption: Disable Crypto Hardware on Network Devices

## Risk Assessment

| Finding                                      | Severity | Impact          |
| -------------------------------------------- | -------- | --------------- |
| Disable Crypto Hardware technique applicable | Low      | Defense Evasion |

## CWE Categories

| CWE ID  | Title                        |
| ------- | ---------------------------- |
| CWE-693 | Protection Mechanism Failure |

## References

- [Cisco Blog Legacy Device Attacks](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)
- [Atomic Red Team - T1600.002](https://github.com/redcanaryco/atomic-red-team/tree/master/atomics/T1600.002)
- [MITRE ATT&CK - T1600.002](https://attack.mitre.org/techniques/T1600/002)
