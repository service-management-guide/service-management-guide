# Service Management Guide

A practical handbook for service management in the age of ITIL 5: agile, AI, automation, and analytics, with research, practices, worked examples, team conversations, AI skills, and AI prompts.

Read it online at <https://service-management-guide.github.io>. Its companion for measurement is the *Service Management Metrics* book.

## Who this is for

Delivery teams, service desk and operations staff, product owners and service owners, agile coaches, automation and AI engineers, data and analytics practitioners, service and IT managers, CIOs, and anyone preparing for ITIL or agile certification who wants practice as well as theory.

## The idea

Service management is how an organization co-creates value with its customers through services. ITIL, now in its fifth version, frames it around digital products and services, AI, and measurable value. Four forces change how the work is done, and every topic looks at its subject through them:

- **Agile:** continuous delivery, continuous stakeholder involvement, continuous improvement, ongoing evolution, sustainable pace, and motivated people.
- **AI:** assistants, virtual agents, AIOps, generative and agentic AI, with the governance and human oversight they need.
- **Automation:** workflows, pipelines, infrastructure as code, self-service, and auto-remediation, built as products.
- **Analytics:** data foundations, observability, forecasting, process analytics, and honest measurement.

## ITIL 5 in this guide

ITIL (Version 5) was introduced by PeopleCert in 2026. This guide treats ITIL 4 concepts as the widely documented foundation, labels every version-specific statement, and states about ITIL 5 only what PeopleCert's own publications support (see `spec/index.md` §6 item 6). Topic 1.3 — ITIL 5 explains what is verified and what is not.

## How to use this guide

- **Read a topic** for core ideas, best practices, a fictional worked example, four perspectives, and the agile, AI, automation, and analytics lens.
- **Talk it through.** Every topic has six questions to discuss with your team, each with a short briefing for the facilitator (see Topic 8.4 — Team Conversations).
- **Use the AI prompts.** Fill in the `[placeholders]`, and check the answers: the prompts ask the AI to flag assumptions and never to invent metrics or sources.
- **Use the AI skills** in [`skills/`](skills/), in Claude Code format.
- **Check where you are** with each topic's five-level maturity table (Initiate, Develop, Standardize, Manage, Orchestrate). It is a conversation tool, not a certification.
- **Look things up** in the [glossary](glossary/index.md) and the [index](index/index.md).

## Contents

8 parts and 65 topics, in English (World), locale `en-001`.

<!-- toc:start -->
**Part 1 — Service management foundations**

- Topic 1.1 — [Service Management](locales/en-001/topics/service-management/)
- Topic 1.2 — [ITIL](locales/en-001/topics/itil/)
- Topic 1.3 — [ITIL 5](locales/en-001/topics/itil-five/)
- Topic 1.4 — [The Service Value System](locales/en-001/topics/service-value-system/)
- Topic 1.5 — [ITIL Guiding Principles](locales/en-001/topics/itil-guiding-principles/)
- Topic 1.6 — [Four Dimensions of Service Management](locales/en-001/topics/four-dimensions-of-service-management/)
- Topic 1.7 — [The Service Value Chain](locales/en-001/topics/service-value-chain/)
- Topic 1.8 — [Service Management Frameworks and Standards](locales/en-001/topics/service-management-frameworks-and-standards/)
- Topic 1.9 — [Enterprise Service Management](locales/en-001/topics/enterprise-service-management/)

**Part 2 — Agile service management**

- Topic 2.1 — [Agile Manifesto and Principles](locales/en-001/topics/agile-manifesto-and-principles/)
- Topic 2.2 — [Continuous Delivery](locales/en-001/topics/continuous-delivery/)
- Topic 2.3 — [Flow and Kanban](locales/en-001/topics/flow-and-kanban/)
- Topic 2.4 — [Lean and Kaizen](locales/en-001/topics/lean-and-kaizen/)
- Topic 2.5 — [DevOps](locales/en-001/topics/devops/)
- Topic 2.6 — [Site Reliability Engineering](locales/en-001/topics/site-reliability-engineering/)
- Topic 2.7 — [Scaling Agile](locales/en-001/topics/scaling-agile/)
- Topic 2.8 — [Product and Service Ownership](locales/en-001/topics/product-and-service-ownership/)
- Topic 2.9 — [Agile Service Management](locales/en-001/topics/agile-service-management/)
- Topic 2.10 — [Agile Management and Learning](locales/en-001/topics/agile-management-and-learning/)

**Part 3 — Service practices**

- Topic 3.1 — [Service Desk](locales/en-001/topics/service-desk/)
- Topic 3.2 — [Incident Management](locales/en-001/topics/incident-management/)
- Topic 3.3 — [Problem Management](locales/en-001/topics/problem-management/)
- Topic 3.4 — [Change Enablement](locales/en-001/topics/change-enablement/)
- Topic 3.5 — [Release and Deployment Management](locales/en-001/topics/release-and-deployment-management/)
- Topic 3.6 — [Service Request Management](locales/en-001/topics/service-request-management/)
- Topic 3.7 — [Service Level Management](locales/en-001/topics/service-level-management/)
- Topic 3.8 — [Service Catalog Management](locales/en-001/topics/service-catalog-management/)
- Topic 3.9 — [Knowledge Management](locales/en-001/topics/knowledge-management/)
- Topic 3.10 — [Monitoring and Event Management](locales/en-001/topics/monitoring-and-event-management/)
- Topic 3.11 — [Availability, Capacity, and Performance](locales/en-001/topics/availability-capacity-and-performance/)
- Topic 3.12 — [Service Continuity Management](locales/en-001/topics/service-continuity-management/)
- Topic 3.13 — [Information Security Management](locales/en-001/topics/information-security-management/)
- Topic 3.14 — [Supplier Management](locales/en-001/topics/supplier-management/)
- Topic 3.15 — [Continual Improvement](locales/en-001/topics/continual-improvement/)

**Part 4 — Asset, configuration, and financial management**

- Topic 4.1 — [Asset Management](locales/en-001/topics/asset-management/)
- Topic 4.2 — [Software Asset Management](locales/en-001/topics/software-asset-management/)
- Topic 4.3 — [Hardware Asset Management](locales/en-001/topics/hardware-asset-management/)
- Topic 4.4 — [Configuration Management](locales/en-001/topics/configuration-management/)
- Topic 4.5 — [Financial Management and FinOps](locales/en-001/topics/financial-management-and-finops/)

**Part 5 — AI in service management**

- Topic 5.1 — [AI in Service Management](locales/en-001/topics/ai-in-service-management/)
- Topic 5.2 — [AIOps](locales/en-001/topics/aiops/)
- Topic 5.3 — [AI Service Desk and Virtual Agents](locales/en-001/topics/ai-service-desk-and-virtual-agents/)
- Topic 5.4 — [Generative AI for Incidents, Knowledge, and Changes](locales/en-001/topics/generative-ai-for-incidents-knowledge-and-changes/)
- Topic 5.5 — [Agentic AI and Human Oversight](locales/en-001/topics/agentic-ai-and-human-oversight/)
- Topic 5.6 — [AI Governance, Risk, and Compliance](locales/en-001/topics/ai-governance-risk-and-compliance/)
- Topic 5.7 — [AI Skills and Prompts](locales/en-001/topics/ai-skills-and-prompts/)
- Topic 5.8 — [AI Operating Model and Skills](locales/en-001/topics/ai-operating-model-and-skills/)

**Part 6 — Automation**

- Topic 6.1 — [Automation Strategy](locales/en-001/topics/automation-strategy/)
- Topic 6.2 — [Workflow Automation and Orchestration](locales/en-001/topics/workflow-automation-and-orchestration/)
- Topic 6.3 — [Infrastructure as Code and GitOps](locales/en-001/topics/infrastructure-as-code-and-gitops/)
- Topic 6.4 — [Pipelines and Automated Change](locales/en-001/topics/pipelines-and-automated-change/)
- Topic 6.5 — [Self-Service and Automated Fulfilment](locales/en-001/topics/self-service-and-automated-fulfilment/)
- Topic 6.6 — [Runbook Automation and Auto-Remediation](locales/en-001/topics/runbook-automation-and-auto-remediation/)

**Part 7 — Analytics**

- Topic 7.1 — [Analytics for Service Management](locales/en-001/topics/analytics-for-service-management/)
- Topic 7.2 — [Data Foundations and Governance](locales/en-001/topics/data-foundations-and-governance/)
- Topic 7.3 — [Measurement and Reporting](locales/en-001/topics/measurement-and-reporting/)
- Topic 7.4 — [Observability and Telemetry](locales/en-001/topics/observability-and-telemetry/)
- Topic 7.5 — [Predictive Analytics and Forecasting](locales/en-001/topics/predictive-analytics-and-forecasting/)
- Topic 7.6 — [Process and Value Stream Analytics](locales/en-001/topics/process-and-value-stream-analytics/)
- Topic 7.7 — [Experience and Sentiment Analytics](locales/en-001/topics/experience-and-sentiment-analytics/)

**Part 8 — Governance, people, and adoption**

- Topic 8.1 — [Governance, Risk, and Compliance](locales/en-001/topics/governance-risk-and-compliance/)
- Topic 8.2 — [Sustainability and Responsible Service Management](locales/en-001/topics/sustainability-and-responsible-service-management/)
- Topic 8.3 — [Organizational Change and Adoption](locales/en-001/topics/organizational-change-and-adoption/)
- Topic 8.4 — [Team Conversations](locales/en-001/topics/team-conversations/)
- Topic 8.5 — [Learning Paths and Certification](locales/en-001/topics/learning-paths-and-certification/)
<!-- toc:end -->

## Repository layout

A monorepo. See [`spec/index.md`](spec/index.md), [`plan.md`](plan.md), and [`tasks.md`](tasks.md).

| Path | What it is |
|---|---|
| `locales/en-001/topics/<slug>/` | One topic: `index.md`, `README.md` (symlink to `index.md`), `.locale-peer-id` |
| `skills/` | AI skills |
| `service-management-guide.github.io/` | The website (SvelteKit, deployed by git subtree) |
| `spec/` | The specification, manifest, and maturity model |
| `bin/` | Checks and generators (`check`, `build-llms`, `build-readme`, `deploy-site`) |
| `AGENTS.md`, `AGENTS/`, `CLAUDE.md` | Instructions for AI agents working here |

## Trademarks and sources

ITIL® is a registered trademark of its owner. SAFe® and other names are trademarks of their owners. This guide is independent: it is not affiliated with or endorsed by any framework owner. It summarizes and cites published frameworks and does not reproduce them; use the official publications for authoritative text. Nothing here is legal advice, including on AI regulation.

## License

CC-BY-4.0, as declared in [`CITATION.cff`](CITATION.cff).
