---
name: wstg-info-09
description: "Fingerprint Web Application"
category: information-gathering
owasp_id: WSTG-INFO-09
version: "1.0.0"
author: siaga-official
tags: [recon, fingerprint, enumeration, wstg, info]
tech_stack: []
cwe_ids: [CWE-200]
chains_with: []
prerequisites: []
severity_boost: {}
sha256: 6b9bde5bc72f969c9236965108f1dde0527a61005637b68394cffc3bd64c5485
signature: 4zBfIUl0c7yq1PxE8Qop80h5LloyF/coL8Ma8+/ogHDGgZlDBy5ol7s+PY3ULOwjQ/41dvsQHkt2Vq94jxJtCg==
signed_by: siaga-official
---

# wstg-info-09

## Test ID

WSTG-INFO-09

## Test Name

Fingerprint Web Application

## Status

> **Note**: This test case has been merged into **WSTG-INFO-08: Fingerprint Web Application Framework** in the latest OWASP WSTG version.

## Consolidated Reference

For comprehensive guidance on web application fingerprinting, including:

- Application identification techniques
- Version detection methods
- Technology stack analysis
- Custom application identification

Please refer to: **[WSTG-INFO-08: Fingerprint Web Application Framework](./WSTG-INFO-08.md)**

---

## Additional Application-Specific Fingerprinting

While WSTG-INFO-08 covers framework fingerprinting, consider these additional checks for custom/bespoke applications:

### Custom Application Indicators

- [ ] Unique URL patterns
- [ ] Custom HTTP headers
- [ ] Application-specific cookies
- [ ] Proprietary JavaScript libraries
- [ ] Custom error messages
- [ ] Unique HTML structures
- [ ] Versioning in source code comments

### Version Detection Techniques

```bash
# Check for version in common locations
curl -s https://target.com/version
curl -s https://target.com/api/version
curl -s https://target.com/health
curl -s https://target.com/info
curl -s https://target.com/about

# Check for build info in HTML comments
curl -s https://target.com | grep -iE 'version|build|release'

# Check JavaScript for version strings
curl -s https://target.com/app.js | grep -iE 'version|v[0-9]+\.[0-9]+'
```

### Documentation

When fingerprinting custom applications, document:

1. **Application Name**: Official name and any aliases
2. **Version Information**: If discoverable
3. **Vendor/Developer**: Who built the application
4. **Deployment Date**: If identifiable
5. **Technology Stack**: Underlying frameworks and libraries
6. **Known CVEs**: Research based on identified versions


---

## Checklist

```
[ ] See WSTG-INFO-08 checklist for comprehensive fingerprinting steps
[ ] Custom application identifiers documented
[ ] Version information gathered
[ ] Vendor/developer identified
[ ] Known vulnerabilities researched
```
