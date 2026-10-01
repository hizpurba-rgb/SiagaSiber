<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.el.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <a href="README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.webp">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero-light.webp">
    <img src="assets/hero-dark.png" alt="SiagaSiber — open-source AI agent for offensive security" width="880">
  </picture>
</p>

<h3 align="center">O primeiro agente de IA de codigo aberto construido para seguranca ofensiva.</h3>

<p align="center">
  Pentest autonomo direto do seu terminal — reconhecimento, descoberta de vulnerabilidades, exploracao e relatorios.<br>
  Um comando. 13+ agentes especializados. 120+ casos de teste OWASP. Seu red team com IA.
</p>

<p align="center">
  <a href="#por-que-siaga">Por que SiagaSiber?</a> &bull;
  <a href="#o-que-o-torna-diferente">O que o torna diferente</a> &bull;
  <a href="#agentes">Agentes</a> &bull;
  <a href="#ecossistema-mcp">Ecossistema MCP</a> &bull;
  <a href="#bolt">Bolt</a> &bull;
  <a href="#instalacao">Instalacao</a> &bull;
  <a href="#ferramentas-integradas">Ferramentas integradas</a> &bull;
  <a href="#para-quem-e-isso">Para quem e isso?</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@siaga-siber/siaga"><img alt="npm" src="https://img.shields.io/npm/v/@siaga-siber/siaga?style=flat-square&color=00ff41" /></a>
  <a href="https://github.com/siagasiber/SiagaSiber/actions/workflows/publish.yml"><img alt="Build" src="https://img.shields.io/github/actions/workflow/status/siagasiber/SiagaSiber/publish.yml?style=flat-square&branch=dev" /></a>
  <a href="https://discord.gg/snunAaHf6U"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord&color=00ff41" /></a>
  <a href="https://github.com/siagasiber/SiagaSiber/blob/dev/LICENSE"><img alt="Licenca" src="https://img.shields.io/badge/license-AGPL--3.0-00ff41?style=flat-square" /></a>
</p>

---

### Por que SiagaSiber?

Testes de seguranca ainda sao predominantemente manuais. Pentesters fazem malabarismos com dezenas de ferramentas, copiam e colam resultados entre terminais e passam horas em reconhecimento repetitivo antes de tocar na superficie de ataque real. Cacadores de bug bounty perdem tempo com o mesmo fluxo de recon para cada programa.

**SiagaSiber muda isso.** E um agente de IA autonomo que entende metodologia de seguranca ofensiva — nao apenas executando ferramentas, mas raciocinando sobre o que testar, encadeando descobertas e adaptando sua abordagem com base no que descobre. Pense nele como um membro incansavel do red team no seu terminal que segue o OWASP WSTG, sabe quando mudar de direcao e escreve o relatorio quando termina.

```bash
npm i -g @siaga-siber/siaga@latest && siaga
# "Execute uma avaliacao completa OWASP WSTG em https://alvo.com"
```

E codigo aberto, funciona com qualquer provedor de LLM e voce e dono de tudo que ele produz.

---

### O que o torna diferente

<table>
<tr>
<td width="50%">

**Agentes de seguranca especializados, nao chat generico**

SiagaSiber vem com 13+ agentes construidos especificamente para dominios de seguranca. Cada agente carrega metodologia especifica do dominio, conhecimento de ferramentas e padroes de teste. O agente de aplicacao web segue o WSTG. O agente de seguranca em nuvem conhece os benchmarks CIS. O agente movel usa Frida e segue MASTG/MASVS. Eles nao adivinham — seguem frameworks comprovados.

</td>
<td width="50%">

**Autonomo, nao apenas assistente**

Outras ferramentas de IA esperam voce dizer o que fazer em seguida. Os agentes do SiagaSiber planejam cadeias de ataque em multiplas etapas, executam ferramentas, analisam resultados, mudam de direcao quando encontram algo interessante e geram relatorios com evidencias. Voce define o objetivo — eles cuidam da metodologia.

</td>
</tr>
<tr>
<td width="50%">

**Qualquer LLM, sem lock-in**

15+ provedores prontos para uso: Anthropic, OpenAI, Google, Amazon Bedrock, Azure, Groq, Mistral, OpenRouter — ate modelos locais por endpoints compativeis com OpenAI. Execute com Claude, GPT, Gemini ou seu proprio LLM auto-hospedado. Conforme os modelos ficam melhores e mais baratos, SiagaSiber melhora junto.

</td>
<td width="50%">

**Execucao remota de ferramentas com Bolt**

Suas ferramentas de seguranca nao precisam rodar no seu notebook. Bolt e o servidor de ferramentas remotas do SiagaSiber — implante-o em um VPS com seu toolkit de pentest, pareie com chaves Ed25519 e controle tudo do seu terminal local pelo protocolo MCP. Uma TUI, multiplos servidores de ataque.

</td>
</tr>
</table>

---

### Agentes

Alterne entre agentes com `Tab`. Cada um e um especialista.

| Agente                 | Foco  | O que faz                                                                            |
| ---------------------- | ----- | ------------------------------------------------------------------------------------ |
| **siaga**        | Geral | Agente primario com acesso total — reconhecimento, exploracao, relatorios            |
| **web-application**    | Web   | OWASP Top 10, metodologia WSTG, seguranca de API, testes de sessao                   |
| **mobile-application** | Movel | Android/iOS, Frida/Objection, conformidade MASTG/MASVS                               |
| **cloud-security**     | Nuvem | AWS, Azure, GCP — configuracoes incorretas de IAM, benchmarks CIS, recursos expostos |
| **internal-network**   | Rede  | Active Directory, ataques Kerberos, movimentacao lateral, pivoteamento               |

Mais **8 testadores proxy especializados** que interceptam e manipulam trafego para classes de vulnerabilidade direcionadas:

`IDOR` · `Authorization Bypass` · `Mass Assignment` · `Injection` · `Authentication` · `Business Logic` · `SSRF` · `File Attacks`

---

### Ecossistema MCP

SiagaSiber se conecta a servidores MCP especializados que estendem suas capacidades:

| Servidor                                                               | Ferramentas | O que adiciona                                                                                     |
| ---------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------- |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp)         | 38          | Auditorias de seguranca em nuvem — 60+ verificacoes em AWS, Azure, GCP                             |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | 39          | Postura de seguranca do GitHub — repositorio, organizacao, actions, secrets, cadeia de suprimentos |
| [cve-mcp](https://github.com/badchars/cve-mcp)                         | 23          | Inteligencia de CVE — NVD, EPSS, CISA KEV, GitHub Advisory, OSV                                    |
| [osint-mcp](https://github.com/badchars/osint-mcp)                     | 37          | Reconhecimento OSINT — Shodan, VirusTotal, SecurityTrails, Censys, DNS, WHOIS                      |

Tudo codigo aberto. Tudo instalavel com `npx`. Conecte-os ao SiagaSiber ou use de forma independente com qualquer cliente MCP.

---

### Bolt

Bolt e o servidor de execucao remota de ferramentas do SiagaSiber. Em vez de rodar ferramentas de seguranca no seu notebook, implante-as em um VPS (ou varios) e controle tudo do seu terminal local.

```
┌──────────────┐         MCP Protocol         ┌──────────────────┐
│  Your Laptop │  ◄──── Ed25519 Auth ────►    │  VPS / Cloud     │
│  SiagaSiber │         over HTTPS           │  Bolt Server     │
│  TUI         │                               │  nmap, nuclei,   │
│              │  ◄──── Tool Results ────►     │  sqlmap, ffuf...  │
└──────────────┘                               └──────────────────┘
```

**Como funciona:**

- Implante Bolt em qualquer servidor com seu toolkit de pentest instalado
- Pareie com chaves Ed25519 — sem senhas, sem segredos compartilhados
- Agentes SiagaSiber chamam ferramentas remotamente pelo protocolo MCP
- Resultados sao transmitidos em tempo real para sua TUI local
- Gerencie conexoes pela TUI: adicionar, remover, monitorar status

**Por que isso importa:** Sua superficie de ataque fica em infraestrutura dedicada. Execute scans pesados de um VPS com melhor largura de banda, mantenha suas ferramentas atualizadas em um unico lugar e alterne entre multiplos servidores de ataque a partir de um unico terminal.

---

### Instalacao

```bash
# npm / bun / pnpm / yarn
npm i -g @siaga-siber/siaga@latest

# macOS
brew install siagasiber/tap/siaga

# Windows
scoop install siaga

# curl (Linux/macOS)
curl -fsSL https://siagasiber.id/install.sh | bash
```

**Aplicativo desktop** (macOS, Windows, Linux) — baixe da [pagina de releases](https://github.com/siagasiber/SiagaSiber/releases) ou:

```bash
brew install --cask siaga-desktop          # macOS
scoop bucket add extras; scoop install extras/siaga-desktop  # Windows
```

---

### Ferramentas integradas

Os agentes do SiagaSiber tem acesso direto a 30+ ferramentas:

| Categoria      | Ferramentas                                                              |
| -------------- | ------------------------------------------------------------------------ |
| **Execucao**   | Shell (bash), leitura/escrita/edicao de arquivos, listagem de diretorios |
| **Descoberta** | Busca web, pesquisa web, busca de codigo, glob, grep                     |
| **Seguranca**  | Relatorio de vulnerabilidades (formato HackerOne), coleta de evidencias  |
| **Proxy**      | Interceptacao HTTP/HTTPS, replay de requisicoes, analise de trafego      |
| **Integracao** | Servidores MCP, ferramentas remotas Bolt, plugins personalizados         |

Mais um **SDK de plugins** — crie seus proprios agentes e ferramentas, registre-os em tempo de execucao.

---

### Para quem e isso?

- **Pentesters** — Automatize as partes repetitivas. Deixe os agentes cuidarem do reconhecimento e dos testes iniciais enquanto voce foca nas cadeias de ataque criativas que precisam de intuicao humana.
- **Cacadores de bug bounty** — Reconhecimento mais rapido, cobertura mais ampla, metodologia consistente entre programas. SiagaSiber nao cansa as 3 da manha.
- **Equipes de seguranca** — Execute avaliacoes OWASP estruturadas com metodologia reproduzivel. Obtenha relatorios mapeados para padroes que sua equipe de compliance entende.
- **Pesquisadores de seguranca** — Estenda o SiagaSiber com agentes personalizados e servidores MCP. O sistema de plugins e o protocolo MCP fazem dele uma plataforma, nao apenas uma ferramenta.

---

### Contribuindo

SiagaSiber e construido pela comunidade de seguranca, para a comunidade de seguranca. Aceitamos contribuicoes em:

- **Agentes e habilidades de seguranca** — Novas metodologias de ataque, padroes de teste, deteccao de vulnerabilidades
- **Servidores MCP** — Conectar novas ferramentas de seguranca e fontes de dados
- **Base de conhecimento** — Guias de metodologia WSTG, MASTG, PTES, CIS
- **Melhorias no nucleo** — Performance, experiencia do usuario, integracoes de provedores, correcoes de bugs

Leia o [Guia de Contribuicao](./CONTRIBUTING.md) antes de enviar um PR. Todas as contribuicoes devem seguir a [politica de uso etico](./CODE_OF_CONDUCT.md) do projeto — SiagaSiber e apenas para testes de seguranca autorizados.

---

### Licenca

[AGPL-3.0-only](./LICENSE) — Gratuito para uso pessoal e codigo aberto. Licenciamento comercial disponivel via [contact@siagasiber.id](mailto:contact@siagasiber.id).

---

### MCP Security Suite

SiagaSiber is the core platform. These MCP servers extend its capabilities:

| Project                                                                | Domain                                  | Tools                                 |
| ---------------------------------------------------------------------- | --------------------------------------- | ------------------------------------- |
| **SiagaSiber**                                                        | **Autonomous offensive security agent** | **13+ agents, 120+ OWASP test cases** |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp)         | Cloud security (AWS/Azure/GCP)          | 38 tools, 60+ checks                  |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub security posture                 | 39 tools, 45 checks                   |
| [cve-mcp](https://github.com/badchars/cve-mcp)                         | Vulnerability intelligence              | 23 tools, 5 sources                   |
| [osint-mcp](https://github.com/badchars/osint-mcp-server)              | OSINT & reconnaissance                  | 37 tools, 12 sources                  |

---

<p align="center">
  <a href="https://discord.gg/snunAaHf6U"><b>Discord</b></a> · <a href="https://x.com/siaga"><b>X.com</b></a> · <a href="https://siagasiber.id"><b>siagasiber.id</b></a>
</p>
<p align="center">
  <sub>Construido por hackers que cansaram de copiar e colar entre terminais.</sub>
</p>
