---
name: techstack-backend
description: Backend tech-stack identification — web servers, runtimes, languages, frameworks, databases, APIs, and CMS via HTTP headers, cookies, error pages, and API discovery.
category: "community"
version: "1.0.0"
author: "transilienceai-communitytools"
license: "MIT"
source: "https://github.com/transilienceai/communitytools"
sha256: 9c2277806f02babffa0c5e1d3a8d5aef4338f6896c2e6a9b8e21444b04839b47
signature: 7uwm9wdVqArYx1cdCNnDRm9TBt4iUE7sjyHQpArRPw7yt89soHCZoij85Cr5nmqkjN1jJVk1W+MG6PBRvwOcDw==
signed_by: siaga-official
---

# Backend Tech-Stack Identification

## Scope

Identify server-side technologies: web servers (nginx, Apache, IIS), runtimes (Node, Python, PHP, Ruby, Java, .NET), backend frameworks (Express, Django, Flask, Rails, Laravel, Spring, ASP.NET), databases (Postgres, MySQL, Mongo, Redis), CMS (WordPress, Drupal, Magento), and API surfaces (REST, GraphQL, OpenAPI).

## Signals (input)

- HTTP response headers — `Server`, `X-Powered-By`, `X-AspNet-Version`, `X-Drupal-*`, `X-Generator`, etc.
- Cookies — session-name fingerprints (`PHPSESSID`, `JSESSIONID`, `_rails_session`, ...)
- Error page bodies (404, 500)
- Path patterns hinting CMS (`/wp-admin/`, `/sites/default/`)
- API subdomains and OpenAPI/Swagger/GraphQL endpoints
- `robots.txt` directives

## Inferences (output)

- Web server + version
- Runtime / language + version
- Backend framework (with implied runtime)
- CMS + version
- Database (often indirect — via ORM dependency or hosted-DB DNS)
- API style (REST/GraphQL/gRPC) and authentication scheme

## Techniques

See [reference/patterns.md](reference/patterns.md).

## When to use

- Phase 2/3 of a tech-stack OSINT engagement
- Mapping server-side attack surface (RCE, SSRF, deserialization)
- CVE matching by server + version
- Locating GraphQL / OpenAPI for follow-on api-security testing
