# AI Operating Model and Skills

**An AI operating model says who owns AI systems, how they are funded, built or bought, run, and retired, and which skills people need; it works when each AI use is managed as a product with a lifecycle, a small enabling team helps others, and capability is built through practice, not only courses.**

## Why this matters

Organizations rarely adopt AI in a planned way. A team buys a tool, another builds a prototype, a vendor switches on a feature. Each decision makes sense locally. Together they form an estate that nobody designed: duplicated tools, inconsistent controls, unclear ownership, and costs that surface on invoices. When something goes wrong, nobody knows who is responsible. When something goes well, nobody can repeat it.

An operating model is the answer to "how do we work with AI as an organization?". It describes roles and responsibilities, how decisions are made, how work is funded, how systems are built or bought and kept running, and how people learn. It does not have to be large. A small organization's model may fit on a page. What matters is that the questions have answers.

The need is sharper for AI than for much other technology because AI systems change: models are updated by vendors, data shifts, and behaviour drifts. They need continuing care, which is what a product team provides, not a project that ends at launch. This topic describes the main elements of an AI operating model and the skills that go with it. It builds on product ownership (Topic 2.8 — Product and Service Ownership), AI governance (Topic 5.6 — AI Governance, Risk, and Compliance), and financial management (Topic 4.5 — Financial Management and FinOps), and it links to organizational change (Topic 8.3 — Organizational Change and Adoption).

## Core concepts

**Operating model.** A description of how an organization delivers value: its structure, processes, people, technology, and governance. Wikipedia describes operating models. An AI operating model is the part that covers how AI is chosen, funded, built or bought, run, governed, and improved.

**AI as a product.** An AI system has users, a purpose, a backlog, a cost, and a lifecycle. Treat it as a product with an owner, as described in Topic 2.8 — Product and Service Ownership. The owner is accountable for outcomes, data, quality, and risk, and for deciding when to improve or retire it.

**Lifecycle.** Stages include identify an opportunity, assess value and risk, build or buy, test, deploy, operate and monitor, improve, and retire. Machine learning operations (MLOps), described on Wikipedia, applies engineering discipline to the lifecycle of models: versioning, deployment, monitoring, and retraining. For vendor models, the same stages apply with fewer technical parts and more contract and monitoring.

**Roles.** Typical roles include an executive sponsor, an AI product owner for each system, engineers who build and run it, data owners for the data it uses, a security and privacy partner, a legal adviser, and the people who use it and who are affected by it. Small teams combine roles. Name them, and make clear who decides.

**Enabling team or centre of excellence.** A small group that helps other teams use AI well: it offers guidance, templates, approved tools, training, and review for higher-risk uses. Wikipedia describes centres of excellence. The risk is that it becomes a bottleneck or a gate. A good one makes the safe path the easy one, and works with teams rather than for them.

**Central, federated, and embedded models.** In a central model, one team builds and runs AI for everyone. In an embedded model, each product team does its own. A federated model combines shared platforms and standards with local ownership. Most organizations end up with a federated mix. Choose by the scale of use, the skills available, and the risk.

**Build, buy, or configure.** Each AI use can be built in-house, bought as a product, or assembled from a model and your own data. Wikipedia describes build-or-buy decisions as a form of cost–benefit analysis. Consider total cost, the risk of dependency on a vendor, data control, speed, and the skills you would need. See Topic 3.14 — Supplier Management.

**Funding.** Fund AI systems as products with persistent teams where they are important, not as one-off projects. Include run costs, such as usage fees, hosting, monitoring, and support. Track cost per use case and per outcome. See Topic 4.5 — Financial Management and FinOps.

**Platforms and shared services.** Shared components, such as an approved model gateway, a prompt and skill library, an evaluation harness, a data catalogue, and logging, reduce duplicated effort and make control easier. See Topic 5.7 — AI Skills and Prompts.

**Data foundations.** AI depends on data that is accurate, accessible, and governed. Many AI initiatives stall on data, not on models. See Topic 7.2 — Data Foundations and Governance.

**Skills and capability.** People need a range of skills: understanding what AI can and cannot do (often called AI literacy, a form of digital literacy that Wikipedia describes), writing clear prompts and checking results, assessing risk, building and testing systems, and managing data. Different roles need different depth. Wikipedia describes upskilling and retraining as approaches to building skills.

**Learning by doing.** Skills grow most from practice on real work with feedback, supported by short training and examples. Communities of practice, described on Wikipedia, help people share what works. Pair experienced and new users. See Topic 8.5 — Learning Paths and Certification.

**Impact on people and roles.** AI changes tasks, and in some roles, the number of people needed. Wikipedia describes technological unemployment as a long-debated concern. Be honest with staff about intentions, involve them in design, and plan for redeployment and reskilling. See Topic 8.3 — Organizational Change and Adoption.

**Value and outcomes.** Define the outcome each AI system should improve, such as time to resolve, quality, or user satisfaction, with a baseline and a way to measure. Wikipedia describes return on investment and its limits. Beware of savings estimates that count time "saved" but never reallocated.

**Standards and assurance.** Frameworks such as ISO/IEC 42001 and the NIST AI Risk Management Framework describe management-system elements that an operating model should cover. See Topic 5.6 — AI Governance, Risk, and Compliance.

**Pilots and scaling.** Proofs of concept are cheap and often impressive. Scaling is where problems appear: data quality, integration, security, cost, and support. Wikipedia describes proofs of concept. Plan for the move from pilot to production from the start, including who runs it.

**How the lenses fit.** The operating model organizes the AI lens. Agile practice suggests persistent product teams and short trials. Automation and analytics are neighbours: automation acts on AI outputs, and analytics provides the data and the measures.

## Best practices

1. **Treat each important AI system as a product.** Name an owner, a team, a backlog, a budget, and a lifecycle, including retirement. Review each system's value and risk regularly.
2. **Write down the roles and decision rights.** Say who sponsors, who owns each system, who approves higher-risk uses, and who can stop one. Keep it to a page.
3. **Set up a small enabling team.** Give it a mandate to provide guidance, tools, training, and review, and measure it on how much it helps teams, not on how many gates it runs.
4. **Choose build, buy, or configure on evidence.** Compare total cost, risk, control of data, speed, and skills for each case. Record the decision and revisit it when circumstances change.
5. **Fund run costs from the start.** Budget for usage fees, monitoring, support, and improvement, not only the build. Track cost per use case and per outcome.
6. **Provide shared platforms.** Offer approved tools and common services for access, logging, evaluation, and prompts and skills. Make the approved path faster than the workaround.
7. **Invest in data.** Name data owners, fix quality problems that block use cases, and document sources. Start with the data the first use cases need.
8. **Build skills by role.** Offer short, practical training for everyone, deeper training for builders and owners, and time to practice on real tasks. Create places to share what works.
9. **Be honest about people.** Say what you intend for roles and headcount, involve staff in designing new ways of working, and support those whose work changes.
10. **Plan the path from pilot to production.** Before a pilot, decide what success is, who would run it, what controls it needs, and what it would cost at scale. Stop pilots that cannot meet those tests.

## Questions to discuss with your team

**Who owns each AI system we use, and who decides when to change or stop it?**
Use the inventory. Expect gaps. Follow up by assigning owners and recording decision rights for the three most important systems.

**What do we want a central AI group to do for us, and what must stay with each team?**
Discuss help versus control. Expect different views between those who want standards and those who want speed. Follow up by listing three services the group should provide.

**For our last AI purchase or build, did we compare options, and what would we decide today?**
Look at the decision record. Expect little. Follow up by agreeing a short template for build, buy, or configure decisions.

**What are the ongoing costs of our AI uses, and who pays them?**
Ask for numbers. Expect unknowns, especially usage fees. Follow up by choosing one use case and building a cost estimate.

**Which skills do people need to use AI well in their jobs, and how will they get them?**
Ask by role. Expect gaps in checking and in understanding limits. Follow up by planning a practice session on real tasks.

**What have we told staff about how AI will change their work, and do they believe it?**
Ask staff directly. Expect anxiety. Follow up by agreeing what leaders can say honestly and what they will do to support people.

## In practice: a service management example

A national environmental protection agency has 30 AI uses spread across its departments: chat assistants, a model that flags unusual sensor readings, a tool that summarizes consultation responses, and several pilots run by research groups. A new chief digital officer finds that three departments pay for similar transcription services, that two pilots have been running for over a year without a decision, and that nobody can say what the agency spends on AI.

She forms a small enabling team of four, drawn from IT, data, security, and legal. Its first job is the inventory, completed in a month. Its second is a one-page operating model: each AI use has a named owner in the business; the enabling team provides an approved model gateway with logging, a library of reviewed prompts and skills, and a risk review for medium and high-risk uses within ten working days; and a quarterly portfolio meeting decides which pilots to scale, change, or stop.

The portfolio meeting stops five pilots that lack an owner or a measure, and consolidates the three transcription contracts into one. For the sensor-anomaly model, which supports decisions about pollution alerts, the owner commissions a review of data quality and sets up monitoring for drift. Funding for the two most valuable systems moves from project budgets to a yearly team budget, including usage fees.

On skills, the team offers a two-hour practical session for all staff on using AI safely, and a longer course for the 40 people who build or own systems. A community of practice meets monthly. The union representing staff asks what AI means for jobs; the chief digital officer commits in writing that the programme will not be used to cut posts within two years, and that savings in time will go to a backlog of inspection work.

What changes: the agency has one inventory, clear owners, and a single place to ask for help. What remains hard: some research groups see the review route as a brake and still run informal tools; usage costs are higher than estimated for two systems and the budget was not adjusted; and the commitment on jobs limits options that finance wants to keep open. The chief digital officer reviews the route's speed and the budget quarterly.

## Four perspectives

### Product and delivery teams

Own your AI systems as products: backlog, monitoring, costs, and retirement. Use shared platforms and the approved library. Ask the enabling team for help early.

### Service and operations teams

Take part in running AI systems and report what you see. Learn how to check outputs, and tell owners about drift and errors. Use the shared tools.

### Leadership and governance

Sponsor the model, assign owners, and fund persistent teams and run costs. Ask for the portfolio view, with value and risk. Be honest with staff about the effect on roles.

### Customers and users

You should know who is responsible for an AI system that affects you and how to raise a concern. Ask how your feedback reaches the owner.

## Agile, AI, automation, and analytics

### Agile

Run AI products with persistent teams, short cycles, and regular review with users and stakeholders. Treat the operating model itself as something to improve in small steps. Caution: avoid launching a large AI programme with a fixed plan; start with a few use cases and learn.

### AI

This topic is about managing AI itself: owners, lifecycle, funding, and skills. AI can help with portfolio analysis and documentation, under review. Caution: an enabling team that approves everything or nothing loses credibility; scale review to risk. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate the inventory feeds, cost reporting, logging, and policy checks in the shared platform, so that the safe path is also the easy one. Caution: automation that blocks use without an approved alternative drives people to shadow tools. See Topic 6.1 — Automation Strategy.

### Analytics

Track the portfolio: number of uses, owners, cost per use case, value measures, incidents, review times, and skills coverage. Caution: counts of AI projects or trained staff reward activity and not outcomes; pair them with measures of value and quality. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **A sprawl of tools.** Each team buys its own. Keep an inventory and consolidate.
- **Ownerless systems.** Nobody maintains or stops them. Name owners and review the portfolio.
- **Projects, not products.** Teams disband after launch. Fund persistent teams for important systems.
- **A gatekeeping centre.** The enabling team blocks work. Make it a service with response targets.
- **Run costs ignored.** Usage fees surprise the budget. Include them from the start.
- **Training without practice.** Courses are attended and habits unchanged. Practice on real tasks.
- **Silence about jobs.** Fear spreads. Say what you intend and involve staff.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Ownership and roles | Unclear | Champions | Named owners and decision rights for each system | Roles reviewed with results | Roles coordinated across the enterprise and partners |
| Funding and lifecycle | Project money | Some run funding | Persistent funding for key systems, lifecycle defined | Cost and value reviewed regularly | Portfolio funded and rebalanced by value and risk |
| Platform and enablement | Individual tools | Shared guidance | Approved platform, library, and review service | Use and satisfaction measured | Platform integrated with governance and automation |
| Skills | Ad hoc | Awareness training | Role-based learning with practice | Skills tracked against needs | Skills planned across the workforce with support for change |

## Checklist

- [ ] Each important AI system has a named product owner.
- [ ] Roles and decision rights are written down on a page.
- [ ] A small enabling team provides tools, guidance, and review.
- [ ] Build, buy, or configure decisions are recorded.
- [ ] Run costs are budgeted and tracked per use case.
- [ ] Shared platform services make the approved route easy.
- [ ] Training is role-based and includes practice on real tasks.
- [ ] We have told staff honestly how AI will affect their work.

## AI prompts

**Compare build, buy, and configure.**

```text
Our use case: [describe]. Our constraints: [data sensitivity, skills, budget, timeline]. Options: [list].
Draft a comparison table with criteria (total cost over three years, data control, speed, risk of dependency, skills needed, ability to change) and for each option what we know and what we do not know from my description. Do not choose an option or invent costs.
List what you are unsure of.
```

**Draft a one-page operating model for discussion.**

```text
Our organization: [type, size]. Our AI uses today: [list]. Our governance bodies: [list].
Draft a one-page operating model with roles, decision rights, funding approach, how AI is built or bought, how risk review works, and how skills are built. Mark every assumption and leave [blank] where my description gives no basis.
List what you are unsure of.
```

**Plan skills by role.**

```text
Roles in our team: [list with what each does]. AI uses planned: [list].
For each role, list the skills needed (use of AI, checking outputs, risk, building, data), one practice activity on real work, and one way to see that the skill has grown. Do not name courses or vendors.
List what you are unsure of.
```

## AI skills

- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): use to review the AI portfolio for value and risk.
- [mlops](../../../../skills/mlops/SKILL.md): use to manage models through their lifecycle.
- [training-needs-analysis](../../../../skills/training-needs-analysis/SKILL.md): use to define the skills each role needs.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to clarify roles and decision rights.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to weigh costs and benefits of AI uses.

## Key sources

- NIST, AI Risk Management Framework: a structure that includes governance and organizational roles.
- ISO/IEC 42001 (the standard itself): management system requirements for AI; read the current edition from the publisher.
- Marty Cagan, *Empowered* (2020): on product teams and how organizations support them.
- Wikipedia, "MLOps" and "Operating model": overviews of the lifecycle and the concept.

## References

1. Operating model — Wikipedia — https://en.wikipedia.org/wiki/Operating_model
2. MLOps — Wikipedia — https://en.wikipedia.org/wiki/MLOps
3. Centre of excellence — Wikipedia — https://en.wikipedia.org/wiki/Center_of_excellence
4. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
5. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
6. Digital literacy — Wikipedia — https://en.wikipedia.org/wiki/Digital_literacy
7. Community of practice — Wikipedia — https://en.wikipedia.org/wiki/Community_of_practice
8. Technological unemployment — Wikipedia — https://en.wikipedia.org/wiki/Technological_unemployment
9. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
10. Proof of concept — Wikipedia — https://en.wikipedia.org/wiki/Proof_of_concept
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
