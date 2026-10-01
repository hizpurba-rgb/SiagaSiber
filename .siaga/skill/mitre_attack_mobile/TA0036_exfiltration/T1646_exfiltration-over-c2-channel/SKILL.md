---
name: "T1646_exfiltration-over-c2-channel"
description: "Adversaries may steal data by exfiltrating it over an existing command and control channel."
category: "client-side"
version: "18.1"
author: "siaga-official"
tags:
  - mitre-attack
  - mobile
  - t1646
  - exfiltration
  - android
  - ios
technique_id: "T1646"
tactic: "exfiltration"
all_tactics:
  - exfiltration
platforms:
  - Android
  - iOS
mitre_url: "https://attack.mitre.org/techniques/T1646"
tech_stack:
  - android
  - ios
cwe_ids:
  - CWE-200
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 3ee91e4b95d1fa8f6580c6c78c9ed05464a6c1d4ce694883b0674d0c3c9b713a
signature: QFFJuyNpOMF8pLdyTU8Vn4RdyVvF+3LCxODltzajdubPA71Tn4A+CiwW6wYpz+AgJEzRBaVY8vpI4Rtlooj4BA==
signed_by: siaga-official
---

# T1646 Exfiltration Over C2 Channel

## High-Level Description

Adversaries may steal data by exfiltrating it over an existing command and control channel. Stolen data is encoded into the normal communications channel using the same protocol as command and control communications.

## Kill Chain Phase

- Exfiltration (TA0036)

**Platforms:** Android, iOS

## What to Check

- [ ] Identify if Exfiltration Over C2 Channel technique is applicable to target mobile environment
- [ ] Check Android devices for indicators of Exfiltration Over C2 Channel
- [ ] Check iOS devices for indicators of Exfiltration Over C2 Channel
- [ ] Assess detection coverage (1 detection strategies)

## How to Test

### Identify Attack Surface

Determine if the target mobile environment is susceptible to Exfiltration Over C2 Channel by examining the target platforms (Android, iOS).

### Assess Existing Defenses

Review whether mitigations for T1646 are in place. If defenses are absent or misconfigured, this technique may be exploitable.

## Remediation Guide

No specific mitigations documented for this technique.

## Detection

### Detection of Exfiltration Over C2 Channel

## Risk Assessment

| Finding                                           | Severity | Impact       |
| ------------------------------------------------- | -------- | ------------ |
| Exfiltration Over C2 Channel technique applicable | Low      | Exfiltration |

## CWE Categories

| CWE ID  | Title                             |
| ------- | --------------------------------- |
| CWE-200 | Exposure of Sensitive Information |

## References

- [NIST Mobile Threat Catalogue](https://pages.nist.gov/mobile-threat-catalogue/application-threats/APP-29.html)
- [MITRE ATT&CK Mobile - T1646](https://attack.mitre.org/techniques/T1646)
