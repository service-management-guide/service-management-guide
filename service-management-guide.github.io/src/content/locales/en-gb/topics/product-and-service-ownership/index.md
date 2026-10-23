# Product and Service Ownership

**Product and service ownership means one named person is accountable for a product or service across its whole life, from idea to retirement, including running it; it is the model behind "you build it, you run it", and the shift to it is a theme of the newest ITIL guidance.**

## Why this matters

Many technology organisations are built around projects. A team is funded, builds something, hands it to operations, and disbands. The people who understand the design leave just as the service goes live. Operations inherits a system it did not choose, with documentation written in a hurry. Nobody owns the question "is this still worth running?" until a crisis or an audit forces it.

Product and service ownership reverses the pattern. A product or service has a stable team and a named owner who is accountable for its outcomes over time: whether it meets customer needs, what it costs, how reliable it is, and when it should change or end. Funding follows the product, not the project. The team that builds it stays to run and improve it.

The owner's description of ITIL (Version 5), introduced by PeopleCert in 2026, refers to digital products and services together (see Topic 1.3 — ITIL 5). ITIL 4 already named service owners and, for products, product owners. This topic explains the roles, how they differ, and how to introduce ownership without just relabelling existing staff.

## Core concepts

**Product.** A configuration of an organisation's resources designed to offer value to a consumer. In software, a product is something such as an app, a platform, or an internal system. Wikipedia's articles on product management and the product lifecycle describe the general ideas of managing something from introduction through growth and maturity to decline.

**Service.** A means of enabling value co-creation by facilitating outcomes that customers want to achieve (see Topic 1.1 — Service Management). Services are delivered through products and other resources. A single product may support several services, and one service may use several products. The distinction matters less than making sure that both are owned.

**Product owner.** In Scrum, one person is responsible for maximising the value of the product and for managing the backlog. The term has spread beyond Scrum to mean the person who decides what a product should do next. Product managers in many organisations perform the same role with broader duties such as strategy, pricing, and market analysis.

**Service owner.** The person accountable for the delivery of a specific service: its quality, its costs, and its improvement. The service owner works with those who run it and with customers. ITIL 4 describes service owners as responsible for the service as the customer experiences it.

**Practice owner.** The person accountable for how a practice, such as incident management or change enablement, runs across the organisation. A practice owner is not a service owner; the two roles intersect where a service uses a practice.

**Product and service ownership together.** In smaller organisations one person may be both. In larger ones, the product owner decides what the product should become, and the service owner ensures that it is run well and meets service levels. The two must be in constant contact, or the product evolves in ways that the service cannot support.

**Accountability and responsibility.** Accountability means being answerable for the outcome and having the authority to decide. Responsibility means doing the work. An owner is accountable and may delegate work, but cannot delegate the answer. A responsibility assignment matrix such as RACI (responsible, accountable, consulted, informed) can help to clarify; see the RACI skill in this guide.

**Persistent teams.** The team that builds and runs a product stays together over time and keeps its knowledge. Funding supports a stable team with a mission rather than a one-off project. Knowledge, relationships with customers, and a sense of responsibility grow as a result.

**You build it, you run it.** The phrase, associated with Werner Vogels of Amazon, summarises the idea that the team that builds a service is responsible for running it. It brings feedback from production to the people who can fix causes. It needs support, on-call limits, and platform services, or it burdens developers. See Topic 2.5 — DevOps.

**Lifecycle.** A product or service goes through stages: idea, development, launch, growth, maturity, and retirement. An owner is accountable for each, including the last, which is often neglected. Software maintenance costs persist for years; Wikipedia's article on software maintenance describes the types.

**Outcomes over outputs.** Owners are judged on outcomes such as customer success and sustained reliability, not only on features shipped. Choosing and tracking outcomes is part of the role; see Topic 7.3 — Measurement and Reporting.

**Relabelling is not change.** Changing "project manager" to "product owner" in job titles without changing authority, funding, or accountability gives the benefits of neither model. Ownership needs the power to prioritise, the budget to act, and the accountability to answer.

**How the lenses fit.** Ownership is a precondition for the other lenses: someone has to be accountable for continuous delivery, for AI use, for automation, and for analytics. AI systems need owners too (see Topic 5.8 — AI Operating Model and Skills).

## Best practices

1. **Name an owner for every product and service.** Put the name where people can see it, such as the catalogue. Check that the person knows they hold the role.
2. **Give the owner real authority.** The owner can prioritise work, say no, and decide trade-offs within a budget. If every decision goes to a committee, the role is decorative.
3. **Fund persistent teams.** Where possible, fund the team and its mission for a year or more, and review results regularly rather than funding each project.
4. **Keep the owner close to customers.** Owners should talk to users and customers often, and see data on how the service is used. An owner who relies on summaries soon loses touch.
5. **Connect product and service owners.** Where the roles are separate, have them meet regularly, share a backlog or at least visibility, and agree how operational needs enter product plans.
6. **Include operations in the product backlog.** Reliability, security, and maintenance work should compete with features on one list, with the owner deciding priority.
7. **Plan the whole life.** Ask at the start what retirement would involve, and review each year whether the product still earns its cost. Retire what no longer does.
8. **Define the owner's outcomes.** State what the owner is accountable for, such as customer satisfaction, reliability targets, and cost, and review them with the owner.
9. **Support on-call and "you run it".** If teams run what they build, give them training, limits on load, platform services, and a path to escalate. See Topic 2.6 — Site Reliability Engineering.
10. **Include AI and automation in the estate.** Treat each AI system and significant automation as a product or part of one, with an owner and a lifecycle.

## Questions to discuss with your team

**Which of our products and services have no single accountable owner, and who answers when something goes wrong?**
This finds gaps. Expect shared platforms, integrations, and old systems to appear. Press for a person, not a team name. Follow up by choosing one gap and agreeing who will take it.

**What decisions can our owners make without asking someone else?**
This tests authority. Owners often can reorder the backlog but cannot hire, spend, or retire. Ask for the last decision that went up the chain. Follow up by agreeing one decision to delegate.

**How are our teams funded, and what happens to a team when a project ends?**
This tests persistence. Answers may include that teams disband, or that funding is renewed each year with uncertainty. Ask what knowledge was lost the last time. Follow up by naming one service that deserves stable funding.

**How do operational needs reach the product backlog today?**
Reliability and maintenance work are often squeezed out. Ask who decides priority and how technical debt is weighed. Follow up by agreeing a minimum share of capacity for operational work.

**Which of our products should we retire, and who would decide?**
Retirement is rarely owned. Ask what each old product costs in time and risk. Expect resistance. Follow up by choosing one candidate and listing what would have to be true to switch it off.

**Who owns each AI system we use, and how do we know?**
AI features arrive embedded in vendor tools and internal projects. Ask for an inventory and an owner for each. Follow up by choosing the least-owned system and assigning an owner.

## In practice: a service management example

A national weather agency runs a public forecast website, a data service used by airlines and farmers, and an internal forecasting platform. Each was built by a separate project and handed to a central operations group. When the airline data service failed during a storm, it took six hours to find anyone who could change the data format: the project team had been disbanded, and operations had only a handover document.

The new head of digital asks, for each of the three, who is accountable. For the website the answer is the communications director, who does not know the technical details. For the data service nobody is named. For the platform, three people say they are.

The head names a product owner for each, chosen from people with the authority to decide, and forms a small persistent team for each, drawn from the people who built it and from operations. She changes the funding of the data service, from a project budget to a yearly team budget, and asks the product owner to set two outcomes: availability during severe weather, and the time to fix a format problem. The airline customers are invited to a quarterly review.

What changes: during the next storm the data service team fixes a format issue in under an hour, and customers see a named contact. What remains hard: the three product owners compete for the same platform engineers; the forecasting platform's owner has no authority over the supercomputer budget, which sits in another department; and the website owner still reports to a communications structure that does not prioritise technical debt. The head takes the shared engineers and the budget split to the executive team.

## Four perspectives

### Product and delivery teams

Own the product through its life. Make operational work visible on the backlog, learn how customers use what you build, and take part in running it. Raise it when the ownership model leaves gaps.

### Service and operations teams

Know who owns each service and tell them what you see: incidents, requests, and cost. Offer to share the load of running what teams build, with clear boundaries.

### Leadership and governance

Name owners, give them authority and budget, and hold them accountable for outcomes. Fund persistent teams and ask for lifecycle reviews. Avoid relabelling roles without changing decisions.

### Customers and users

You should know who to speak to about a product or service and see that your feedback leads to action. Ask who owns what you use, and tell them what matters.

## Agile, AI, automation, and analytics

### Agile

Owners keep stakeholders involved, prioritise a single backlog that includes operational work, and release in small pieces. Caution: an owner who only forwards requests from other people does not own the product; the role needs judgement and authority.

### AI

An owner is accountable for every AI system within their product or service: what it does, what data it uses, where a person decides, and how errors are found. AI can help owners summarise feedback and usage, under review. Caution: do not accept "the vendor owns the AI" as an answer; you remain accountable for its use. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Owners decide what to automate and are accountable for what automation does in their service, including its logs and rollback. Caution: automation built by a platform team still needs an owner on the service side; assign one. See Topic 6.1 — Automation Strategy.

### Analytics

Owners should have data on usage, reliability, cost, and customer outcomes, and discuss it regularly. Caution: if owners are judged on one number, they will tune it; use a small set that includes outcomes and experience. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Owner in name only.** The title is given and authority is not. Define decisions and budget.
- **Project funding for a living service.** Teams disband and knowledge leaves. Fund persistent teams.
- **Product owner without operations.** Features win and reliability suffers. Put operational work on one backlog.
- **No retirement.** Old products continue and consume capacity. Review the lifecycle yearly.
- **Relabelling roles.** Nothing changes for customers. Change decisions, funding, and accountability.
- **Ownerless AI and automation.** Systems act with no one answerable. Name an owner for each.
- **Owner far from customers.** Decisions rest on summaries. Require regular contact with users.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Ownership | Unclear for many | Owners for main products | Every product and service has a named, empowered owner | Ownership reviewed against outcomes | Owners coordinate across the estate and partners |
| Funding | Per project | Some persistent teams | Persistent teams funded by mission | Funding reviewed with outcomes | Funding adapts across the portfolio |
| Lifecycle | Idea to launch only | Maintenance noticed | Lifecycle stages and retirement planned | Lifecycle decisions made on evidence | Portfolio lifecycle managed across services |
| Running what you build | Handover to operations | Shared on-call in one team | "You build it, you run it" with support and limits | Load and reliability measured | Supported by platforms and shared across teams |

## Checklist

- [ ] Each product and service has a named owner, visible in the catalogue.
- [ ] Owners can prioritise, spend within a budget, and say no.
- [ ] Teams that run services are persistent and funded for the long term.
- [ ] Operational work is on the same backlog as features.
- [ ] Owners talk to customers regularly and see usage data.
- [ ] Product and service owners meet regularly.
- [ ] We review each product's lifecycle yearly, including retirement.
- [ ] Every AI system and significant automation has an owner.

## AI prompts

**Find ownership gaps.**

```text
Here is a list of our products, services, platforms, and AI-enabled features, with any owners we have recorded: [paste list].
Produce a table with item, owner (only as given; otherwise "none recorded"), and one question to find out who is really accountable. Do not guess owners.
List what you are unsure of.
```

**Draft an owner's role description for discussion.**

```text
Our context: [type of organisation, size]. The role: owner of [product or service].
Draft a one-page description with: outcomes the owner is accountable for, decisions the owner can make, decisions that need approval, and people the owner works with. Keep it plain and mark every assumption.
List what you are unsure of.
```

**Prepare a lifecycle review.**

```text
Here are facts about our product [name]: age, users, running cost, incidents last year, and planned work: [paste facts].
List questions to ask in a lifecycle review, including whether to continue, change, or retire it. Do not recommend a decision.
List what you are unsure of.
```

## AI skills

- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to clarify who is accountable and responsible.
- [product-roadmap](../../../../skills/product-roadmap/SKILL.md): use to plan a product's direction with stakeholders.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): use to review products and services across the estate.
- [user-story](../../../../skills/user-story/SKILL.md): use to express customer needs in the backlog.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of ITIL guidance for digital products and services.
- Marty Cagan, *Inspired* (2017): a widely read account of the product manager role.
- Gene Kim and others, *The DevOps Handbook*: on teams that build and run services.
- Wikipedia, "Product management" and "Product lifecycle": neutral background.

## References

1. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
2. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Accountability — Wikipedia — https://en.wikipedia.org/wiki/Accountability
5. Raci — Wikipedia — https://en.wikipedia.org/wiki/Raci
6. Software maintenance — Wikipedia — https://en.wikipedia.org/wiki/Software_maintenance
7. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
8. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
9. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
