---
name: "T1680_local-storage-discovery"
description: "Adversaries may enumerate local drives, disks, and/or volumes and their attributes like total or free space and volume serial number."
category: "information-gathering"
version: "18.1"
author: "siaga-official"
tags:
  - mitre-attack
  - enterprise
  - t1680
  - discovery
  - esxi
  - iaas
  - linux
  - macos
  - windows
technique_id: "T1680"
tactic: "discovery"
all_tactics:
  - discovery
platforms:
  - ESXi
  - IaaS
  - Linux
  - macOS
  - Windows
mitre_url: "https://attack.mitre.org/techniques/T1680"
tech_stack:
  - esxi
  - cloud
  - linux
  - macos
  - windows
cwe_ids:
  - CWE-200
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 29b250f76cb9afb7014ca75804bcc91ee05cf07b44c6a61703e2d74ee580d3ad
signature: kSlLyl/X0/xxu25/8rbggrKnvF8EJkD0xLzMK3stxQtjZ6ccfL0EM2j7QKxpa3p4oWdMgeiX+VQktpf/7TF2AA==
signed_by: siaga-official
---

# T1680 Local Storage Discovery

## High-Level Description

Adversaries may enumerate local drives, disks, and/or volumes and their attributes like total or free space and volume serial number. This can be done to prepare for ransomware-related encryption, to perform Lateral Movement, or as a precursor to Direct Volume Access.

On ESXi systems, adversaries may use Hypervisor CLI commands such as `esxcli` to list storage connected to the host as well as `.vmdk` files.

On Windows systems, adversaries can use `wmic logicaldisk get` to find information about local network drives. They can also use `Get-PSDrive` in PowerShell to retrieve drives and may additionally use Windows API functions such as `GetDriveType`.

Linux has commands such as `parted`, `lsblk`, `fdisk`, `lshw`, and `df` that can list information about disk partitions such as size, type, file system types, and free space. The command `diskutil` on MacOS can be used to list disks while `system_profiler SPStorageDataType` can additionally show information such as a volume’s mount path, file system, and the type of drive in the system.

Infrastructure as a Service (IaaS) cloud providers also have commands for storage discovery such as `describe volume` in AWS, `gcloud compute disks list` in GCP, and `az disk list` in Azure.

## Kill Chain Phase

- Discovery (TA0007)

**Platforms:** ESXi, IaaS, Linux, macOS, Windows

## What to Check

- [ ] Identify if Local Storage Discovery technique is applicable to target environment
- [ ] Check ESXi systems for indicators of Local Storage Discovery
- [ ] Check IaaS systems for indicators of Local Storage Discovery
- [ ] Check Linux systems for indicators of Local Storage Discovery
- [ ] Assess detection coverage (1 detection strategies)

## How to Test

### Manual Testing

1. **Identify Attack Surface**: Determine if the target environment is susceptible to Local Storage Discovery by examining the target platforms (ESXi, IaaS, Linux).

2. **Assess Existing Defenses**: Review whether mitigations for T1680 are in place. If defenses are absent or misconfigured, this technique may be exploitable.

3. **Execute Test**: Use tools and methods described in the MITRE ATT&CK page and external references below.

> **Note**: No Atomic Red Team tests available for this technique. See [Atomic Red Team GitHub](https://github.com/redcanaryco/atomic-red-team) for updates.

## Remediation Guide

No specific mitigations documented for this technique.

## Detection

### Local Storage Discovery via Drive Enumeration and Filesystem Probing

## Risk Assessment

| Finding                                      | Severity | Impact    |
| -------------------------------------------- | -------- | --------- |
| Local Storage Discovery technique applicable | Medium   | Discovery |

## CWE Categories

| CWE ID  | Title                             |
| ------- | --------------------------------- |
| CWE-200 | Exposure of Sensitive Information |

## References

- [Volexity](https://www.volexity.com/blog/2023/06/28/charming-kitten-updates-powerstar-with-an-interplanetary-twist/)
- [AWS docs describe volumes](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-volumes.html)
- [azure az disk](https://learn.microsoft.com/en-us/cli/azure/disk?view=azure-cli-latest)
- [GCP gcloud compute disks list](https://cloud.google.com/sdk/gcloud/reference/compute/disks/list)
- [TrendMicro ESXI Ransomware](https://www.trendmicro.com/en_us/research/22/a/analysis-and-Impact-of-lockbit-ransomwares-first-linux-and-vmware-esxi-variant.html)
- [Trend Micro MUSTANG PANDA PUBLOAD HIUPAN SEPTEMBER 2024](https://www.trendmicro.com/en_us/research/24/i/earth-preta-new-malware-and-strategies.html)
- [TrendMicro](https://www.trendmicro.com/en_us/research/21/e/darkside-linux-vms-targeted.html)
- [Atomic Red Team - T1680](https://github.com/redcanaryco/atomic-red-team/tree/master/atomics/T1680)
- [MITRE ATT&CK - T1680](https://attack.mitre.org/techniques/T1680)
