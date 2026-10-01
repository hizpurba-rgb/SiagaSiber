---
name: techstack-security
description: Security-posture and third-party SaaS identification — security headers, CSP, HSTS, email auth, security.txt, plus payments/analytics/auth/CRM/support integrations.
category: "community"
version: "1.0.0"
author: "transilienceai-communitytools"
license: "MIT"
source: "https://github.com/transilienceai/communitytools"
sha256: f6ea6dbc3aec60abb4335baa468e48b076bf77b38afbc445aa5d72efc32c45b4
signature: XplkIwv7yvnrMKr2XQcZoWHezxT9aRrdCGK9B1V1bIR/O+ETkrLfKNQKnI3cj7Ee83lrEtc7grl/UvD9LsD0AQ==
signed_by: siaga-official
---

# Security Posture & Third-Party Tech-Stack

## Scope

Two related lenses on a target:

1. **Security posture** — HTTP security headers, Content Security Policy, HSTS, email auth (SPF/DKIM/DMARC/MTA-STS), `security.txt`, certificate practices.
2. **Third-party / SaaS detection** — payment processors, analytics, customer support, identity providers, CRM/marketing, error monitoring, A/B testing, social/communication SDKs, media CDNs.

The two are coupled: CSP `script-src` and DNS `TXT` verifications reveal third-party services, while third-party domains contribute to the overall security surface.

## Signals (input)

- HTTP response headers — security headers, CSP directives, HSTS
- DNS TXT records — SPF, DKIM, DMARC, SaaS verification tokens
- HTML — meta-tag security policies, embedded widgets/iframes
- Loaded JS / script-src URLs and globals
- `/.well-known/security.txt`, `/security.txt`, `/.well-known/change-password`

## Inferences (output)

- Security score (header coverage, CSP strength, email-auth strength, security.txt presence)
- CSP analysis (unsafe-inline/eval issues, allowed third-party domains)
- Email-auth grade (DMARC policy strength)
- Third-party SaaS catalogue by category, with integration mode (client SDK vs CSP-only vs DNS-only)

## Techniques

See [reference/patterns.md](reference/patterns.md).

## When to use

- Pre-engagement security baseline
- Mapping supply-chain / SaaS exposure
- Identifying integrations that grant pivot opportunities (Auth0, Stripe webhook surface, Sentry DSN leakage, etc.)
- Phase 3 of tech-stack OSINT
