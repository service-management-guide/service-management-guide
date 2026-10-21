# Tasks

Live checklist. Update in the same commit as the work it tracks. Phases follow `plan.md`.

## Phase 0 — Scaffolding

- [x] `spec/index.md`, `spec/topic-template/index.md`, `spec/maturity-model.md`, `spec/topics.tsv`
- [x] `AGENTS.md`, `AGENTS/`, `CLAUDE.md`, `STYLE_GUIDE.md`, `plan.md`
- [x] `bin/` (check, build-llms, build-readme, deploy-site, locale helpers)
- [x] 65 topic stubs with `README.md` symlink and `.locale-peer-id`
- [x] README, glossary, index, `CITATION.cff`, `_sources/research-notes.md`
- [x] Skills copied; two original skills written
- [x] Site skeleton adapted from the Agile ITIL Guide site
- [ ] `pnpm install`, `pnpm sync`, `pnpm check`, `pnpm build` pass in the site
- [ ] Git remotes and first commit

## Phase 1 — Research

- [ ] Re-verify ITIL 5 on peoplecert.org and update `_sources/research-notes.md`
- [ ] Read the core Wikipedia articles and record slugs
- [ ] Confirm the manifest

## Phase 2 — Topics

### Part 1 — Service management foundations

- [x] 1.1 Service Management
- [x] 1.2 ITIL
- [x] 1.3 ITIL 5
- [x] 1.4 The Service Value System
- [x] 1.5 ITIL Guiding Principles
- [x] 1.6 Four Dimensions of Service Management
- [x] 1.7 The Service Value Chain
- [x] 1.8 Service Management Frameworks and Standards
- [x] 1.9 Enterprise Service Management

### Part 2 — Agile service management

- [x] 2.1 Agile Manifesto and Principles
- [x] 2.2 Continuous Delivery
- [x] 2.3 Flow and Kanban
- [x] 2.4 Lean and Kaizen
- [x] 2.5 DevOps
- [x] 2.6 Site Reliability Engineering
- [x] 2.7 Scaling Agile
- [x] 2.8 Product and Service Ownership
- [x] 2.9 Agile Service Management
- [x] 2.10 Agile Management and Learning

### Part 3 — Service practices

- [x] 3.1 Service Desk
- [x] 3.2 Incident Management
- [x] 3.3 Problem Management
- [x] 3.4 Change Enablement
- [x] 3.5 Release and Deployment Management
- [x] 3.6 Service Request Management
- [x] 3.7 Service Level Management
- [x] 3.8 Service Catalog Management
- [x] 3.9 Knowledge Management
- [x] 3.10 Monitoring and Event Management
- [x] 3.11 Availability, Capacity, and Performance
- [x] 3.12 Service Continuity Management
- [x] 3.13 Information Security Management
- [x] 3.14 Supplier Management
- [x] 3.15 Continual Improvement

### Part 4 — Asset, configuration, and financial management

- [x] 4.1 Asset Management
- [x] 4.2 Software Asset Management
- [x] 4.3 Hardware Asset Management
- [x] 4.4 Configuration Management
- [x] 4.5 Financial Management and FinOps

### Part 5 — AI in service management

- [x] 5.1 AI in Service Management
- [x] 5.2 AIOps
- [x] 5.3 AI Service Desk and Virtual Agents
- [x] 5.4 Generative AI for Incidents, Knowledge, and Changes
- [x] 5.5 Agentic AI and Human Oversight
- [x] 5.6 AI Governance, Risk, and Compliance
- [x] 5.7 AI Skills and Prompts
- [x] 5.8 AI Operating Model and Skills

### Part 6 — Automation

- [x] 6.1 Automation Strategy
- [x] 6.2 Workflow Automation and Orchestration
- [x] 6.3 Infrastructure as Code and GitOps
- [x] 6.4 Pipelines and Automated Change
- [x] 6.5 Self-Service and Automated Fulfilment
- [x] 6.6 Runbook Automation and Auto-Remediation

### Part 7 — Analytics

- [x] 7.1 Analytics for Service Management
- [x] 7.2 Data Foundations and Governance
- [x] 7.3 Measurement and Reporting
- [x] 7.4 Observability and Telemetry
- [x] 7.5 Predictive Analytics and Forecasting
- [x] 7.6 Process and Value Stream Analytics
- [x] 7.7 Experience and Sentiment Analytics

### Part 8 — Governance, people, and adoption

- [x] 8.1 Governance, Risk, and Compliance
- [x] 8.2 Sustainability and Responsible Service Management
- [x] 8.3 Organizational Change and Adoption
- [x] 8.4 Team Conversations
- [x] 8.5 Learning Paths and Certification

## Phase 8 — Simplified Chinese (zh-cn)

Translate serially, one topic per commit, following `locales/zh-cn/术语/index.md`. `bin/check` reads headings from `locales/zh-cn/locale.json`.

- [x] Scaffold `locales/zh-cn/` (peer ids, symlinks, titled stubs, `locale.json`, terminology)
- [x] zh-cn site integration (`zh-cn.json`, `locales.ts`, `hero.ts`)
- [x] Translate the 65 topics (draft by Claude; awaiting fluent-speaker review)
- [x] zh-cn glossary and index translations (`locales/zh-cn/术语表/`, `locales/zh-cn/索引/`, built by `bin/build-glossary-index-zh-cn`)
- [ ] zh-cn review by a fluent Chinese speaker

## Phase 9 — Welsh (cy-gb)

Translate serially, one topic per commit, following `locales/cy-gb/terminoleg/index.md`. `bin/check` reads headings from `locales/cy-gb/locale.json`.

- [x] Scaffold `locales/cy-gb/` (peer ids, symlinks, titled stubs, `locale.json`, terminology)
- [x] cy-gb site integration (`cy-gb.json`, `locales.ts`, `hero.ts`)
- [x] Translate the 65 topics
- [ ] cy-gb glossary and index translations
- [ ] cy-gb review by a fluent Welsh speaker

## Phase 10 — German (de-de)

Translate serially, one topic per commit, following `locales/de-de/terminologie/index.md`. `bin/check` reads headings from `locales/de-de/locale.json`.

- [x] Scaffold `locales/de-de/` (peer ids, symlinks, titled stubs, `locale.json`, terminology)
- [x] de-de site integration (`de-de.json`, `locales.ts`, `hero.ts`)
- [x] Translate the 65 topics
- [ ] de-de glossary and index translations
- [ ] de-de review by a fluent German speaker

## Phases 3–6

- [x] Glossary and index complete
- [ ] Prune unlinked copied skills
- [ ] `bin/check --links --strict` passes
- [ ] Site built and checked in a browser
- [ ] First subtree deploy
