# Software Asset Management

**Software asset management makes sure an organization has the software it needs, uses what it pays for, complies with licence terms, and knows what is inside its own software; it now also covers subscriptions, open-source components, and the terms of AI models and services.**

## Why this matters

Software is the largest and least visible set of assets in many organizations. A laptop is a physical thing you can count. A software entitlement is a right of use, defined by a contract, that may depend on users, devices, processors, or consumption, and that changes when infrastructure changes. Nobody can see it by looking.

The result is two opposite risks. Under-licensing exposes the organization to audits, penalties, and sometimes legal action. Over-licensing means paying for software nobody uses, often called shelfware. Wikipedia describes shelfware as software purchased but never used. Studies by industry analysts often report large shares of software spending as waste, though figures vary and should be treated with caution. Both risks are reduced by the same discipline: knowing what you have, what you may use it for, and what you actually use.

The scene has changed. Much software is now subscription-based, bought by teams with a card, and updated by the vendor. Open-source components are in almost every product, each with licence terms that carry obligations. And AI models and services come with terms about data, outputs, and permitted use that are new to many buyers. This topic covers all of them. It gives no legal advice; licence interpretation needs a qualified adviser. It builds on Topic 4.1 — Asset Management and connects to supplier management (Topic 3.14 — Supplier Management) and information security (Topic 3.13 — Information Security Management).

## Core concepts

**Software asset management (SAM).** The practice of managing and optimizing the purchase, deployment, maintenance, use, and disposal of software within an organization. Wikipedia describes software asset management and links it to ISO/IEC 19770-1. See Topic 1.8 — Service Management Frameworks and Standards.

**Entitlement.** The right to use software, as defined by a licence. An organization's entitlements are recorded from contracts, purchase records, and vendor portals. They are compared with what is deployed and used.

**Licensing models.** Common models include per user, per device, per processor or core, per concurrent user (also called floating licences), site or enterprise licences, and consumption-based pricing. Wikipedia describes software licences and floating licensing. Rules differ by vendor and by product, change with virtualization and cloud, and are often complex.

**Effective licence position.** The comparison of entitlements with use: what you may use versus what you do use, summarized as surplus, shortfall, or balance. It is a snapshot at a point in time, and the work is to keep it current.

**Software audit.** A vendor or a third party examines an organization's use against its entitlements. Audits can be routine or aggressive. An organization that has kept its own position current can respond calmly. One that has not may face unplanned costs.

**Subscription and SaaS.** Software as a service is rented, typically per user or by consumption, and delivered over the internet. Wikipedia describes both software as a service and subscription business models. Subscriptions can be started by anyone with a card; without controls they spread, overlap, and renew automatically. Track them with owners and renewal dates.

**Shelfware and optimization.** Unused or underused software. Harvesting means reclaiming licences from users who do not need them and reassigning them. Right-sizing means matching the number and type of licences to need. Savings can be significant, and savings come from asking whether a use still exists.

**Open-source software.** Software whose source code is available under a licence that permits use, modification, and distribution under certain conditions. Wikipedia describes free and open-source software and open-source licences. Licences differ: permissive licences place few obligations, while copyleft licences, described on Wikipedia, require derived works to be shared under similar terms. Obligations depend on how you use and distribute the software, so interpretation needs legal advice.

**Software bill of materials (SBOM).** A list of the components in a piece of software, with versions and licences. Wikipedia describes the software supply chain and the SPDX format for exchanging licence and component information. An SBOM supports licence compliance and security response. See Topic 3.13 — Information Security Management.

**AI models and services.** Models and AI services come with terms that cover what you may do with them, who owns outputs, whether your inputs are retained or used for training, and what happens if a model changes or is withdrawn. Wikipedia describes large language models and open-source artificial intelligence, and notes that "open" can mean different things for models. Read the terms, and record them. See Topic 5.6 — AI Governance, Risk, and Compliance.

**Intellectual property.** Software is protected by copyright and sometimes patents. Wikipedia describes both intellectual property and copyright. Using software outside its terms may infringe the owner's rights. Generated code from AI tools raises open questions about ownership and licensing; take advice.

**Software discovery and metering.** Discovery tools find installed software and cloud applications. Metering records actual use, such as the last time an application was launched. Together with entitlements, they give the licence position.

**Governance.** Policies on who may acquire software, what must be approved, how open-source is reviewed, and how licences are tracked. Keep them light and clear, so that people follow them. See Topic 8.1 — Governance, Risk, and Compliance.

**How the lenses fit.** SAM supports agile teams by making approved software easy to get and by keeping compliance out of their way. AI can help read licence terms and reconcile data, under legal review. Automation provisions and reclaims licences. Analytics shows use, waste, and risk.

## Best practices

1. **Know your entitlements.** Collect contracts, purchase records, and vendor portal data in one place. Record the terms that matter: metric, quantity, term, restrictions, and renewal date.
2. **Discover what is deployed and used.** Use discovery and usage data for on-premises, cloud, and endpoint software, and reconcile with entitlements regularly.
3. **Calculate your licence position.** For major vendors, compare entitlements with use, and record the position and the date. Resolve shortfalls and surpluses deliberately.
4. **Own each major vendor relationship.** Name a person who understands the licensing rules for each big vendor and keeps up with changes. Rules differ and change.
5. **Make approved software easy to get.** Offer a catalogue of approved applications with a fast route, so that people do not buy their own. See Topic 3.8 — Service Catalogue Management.
6. **Control subscriptions.** Require an owner, budget, and renewal date at purchase. Review auto-renewals ahead of time, and cancel what is unused.
7. **Harvest and right-size.** Reclaim licences from inactive users and move to cheaper tiers where they fit. Ask users before removing access to avoid disruption.
8. **Review open-source use.** Scan code for components and their licences, set a policy on which licences are acceptable, and record exceptions. Involve legal advice for obligations.
9. **Record AI terms.** For each AI model and service, record what data you send, whether it is retained or used for training, who owns outputs, and what happens if the service changes.
10. **Prepare for audits.** Keep records current, and know who deals with a vendor audit request. Respond promptly and factually, with legal support when needed.

## Questions to discuss with your team

**For our three biggest software vendors, do we know our entitlements and our use?**
Ask for a number and its source. Expect uncertainty. Follow up by choosing one vendor and calculating the position properly.

**What subscriptions have we bought outside the central process, and who pays?**
Check card statements and expense claims. Expect surprises. Follow up by recording owners and renewal dates for the top ten by cost.

**Which licences do we pay for that nobody has used for six months?**
Use metering data. Expect shelfware. Follow up by choosing three to reclaim, with a message to the users first.

**How do we know what open-source components are in our products and which licences they carry?**
Ask for the latest scan. Expect gaps. Follow up by choosing one product and producing a component list.

**If a vendor audited us tomorrow, who would respond and with what?**
Walk through the steps. Expect confusion about who talks to the vendor. Follow up by naming a lead and assembling a pack of current records.

**What are the terms of the AI services our teams use, and has anyone read them?**
Ask who uses which services. Expect personal accounts with unknown terms. Follow up by listing the top five services and recording their data and ownership terms.

## In practice: a service management example

A regional hospital group has about 9,000 staff and licences a large clinical application, an office suite, a database platform, and dozens of smaller tools. The finance director has asked for a 10 percent cut in software spending. The SAM lead, a team of two, starts with the largest vendor, whose contract accounts for 30 percent of spend.

She collects the contract and purchase records and finds that licences are counted per named user. She compares these with the application's own user list and its last-login dates. Of 4,200 licensed users, about 700 have not logged in for six months; many are former locum staff, or people who moved to other posts. She also finds 250 active users who are not licensed, mostly new starters whose accounts were created from a template. The net position shows a surplus on paper, but a real shortfall in one module.

She puts three steps in place. A monthly job lists inactive users and sends their managers a message before the licence is reclaimed. The new starter process checks the licence position before assigning access. And a shortfall in the module is reported to the vendor proactively, to be resolved at the next renewal, with the help of the group's legal team. Savings from the reclaimed licences reach 6 percent of the vendor's spend in the first year.

She also reviews subscriptions, and finds 14 SaaS tools bought by departments, of which four duplicate each other and two process patient data. She refers the latter to the security and privacy teams, and records the AI terms of a transcription tool a clinic has trialed: the vendor retains audio for 30 days and may use it to improve its models, which the privacy team says is not acceptable. The clinic stops using it.

What changes: licences are reclaimed and reassigned, and surprises at renewal are rarer. What remains hard: the licensing rules for virtualized databases are complex and the team cannot interpret them with confidence; clinicians dislike losing access to tools and some reclaimed licences were reinstated after complaints; and departments still buy subscriptions on cards. The lead asks finance to flag software purchases on cards for review.

## Four perspectives

### Product and delivery teams

List the components, open-source licences, and AI services in your product. Choose licences and services that you understand, and record their terms. Avoid pasting code or data into tools whose terms you have not checked.

### Service and operations teams

Keep deployment and usage data accurate, reclaim unused licences, and tell the SAM lead about new tools. Handle audit requests through the agreed route.

### Leadership and governance

Ask for the licence position of major vendors, the cost of unused software, and the plan for audits. Support a simple approval route that people will use. Treat AI terms as a risk question.

### Customers and users

You may be asked whether you still use an application. Answer honestly and say if you need it. Use approved tools, and ask for what you need through the proper route.

## Agile, AI, automation, and analytics

### Agile

Make compliance quick for teams: a catalogue of approved tools, a simple open-source policy, and a short route for exceptions. Review the process with developers. Caution: strict gates that teams avoid create shadow IT; keep the route fast.

### AI

AI can read contracts and licence terms, summarize them, and flag clauses to check, and can reconcile deployment data, under legal and human review. Name an owner. Caution: an AI summary of licence terms can be wrong in ways that matter; never rely on it for compliance decisions. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate discovery, usage metering, licence assignment, reclamation notices, and renewal reminders, with owners and logs. Caution: automatic reclamation can remove access someone needs; notify users first and make reinstatement easy. See Topic 6.1 — Automation Strategy.

### Analytics

Track the licence position, unused licences and their cost, subscription count and spend, renewals due, and open-source licence findings. Caution: savings figures are easily overstated, and counts of licences reclaimed can be gamed; track actual spend and user complaints. See Topic 4.5 — Financial Management and FinOps and the *Service Management Metrics* book.

## Common failure modes

- **Counting once.** The position goes out of date. Keep discovery and metering running.
- **Buying outside the process.** Subscriptions spread. Make the approved route fast and review card spend.
- **Shelfware.** Licences are paid for and unused. Meter use and reclaim.
- **Unknown open-source use.** Obligations are missed. Scan and set a policy.
- **Ignoring AI terms.** Data is retained or used for training. Read, record, and decide.
- **No audit readiness.** A vendor audit is a scramble. Keep records and a named lead.
- **Assuming rules are simple.** Virtualization and cloud change licensing. Get expert advice for complex products.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Entitlements | Scattered | Main contracts collected | Entitlements recorded in one place with key terms | Entitlements reconciled regularly | Entitlements integrated with procurement and vendors |
| Discovery and use | None | Manual counts | Discovery and metering for main software | Position calculated and reviewed | Continuous position across on-premises, cloud, and SaaS |
| Optimization | None | Occasional clean-up | Harvesting and right-sizing routine | Savings tracked and verified | Optimization automated with user notice |
| Open-source and AI | Unknown | Awareness | Policy, scanning, and recorded terms | Findings tracked to closure | Integrated into pipeline and procurement |

## Checklist

- [ ] We have entitlements for major vendors recorded with key terms.
- [ ] Discovery and usage data are reconciled with entitlements.
- [ ] We know our licence position for our largest vendors.
- [ ] A person owns each major vendor's licensing.
- [ ] Subscriptions have owners, budgets, and renewal dates.
- [ ] Inactive licences are reclaimed with notice.
- [ ] Open-source components and licences are scanned and governed.
- [ ] AI model and service terms are recorded.

## AI prompts

**Extract key terms from a contract for checking.**

```text
Here is the text of a software licence section: [paste]. 
List the licence metric, quantity, term, restrictions, renewal terms, and audit rights, quoting the exact words for each, and write "not found" for any item the text does not state. Do not interpret ambiguous wording or give legal advice.
List what you are unsure of.
```

**Find subscription overlap.**

```text
Here is a list of our subscriptions with owner, purpose, cost, and users: [paste].
Group those that serve similar purposes, list the total cost of each group, and give one question per group about whether to consolidate. Do not recommend cancellation.
List what you are unsure of.
```

**Prepare AI terms for review.**

```text
Here are the terms of an AI service we use: [paste relevant sections].
List what the terms say about data retention, use of inputs for training, ownership of outputs, permitted uses, and changes to the service, quoting each. For anything the text does not cover, write "not stated". Do not give legal advice.
List what you are unsure of.
```

## AI skills

- [vendor-management](../../../../skills/vendor-management/SKILL.md): use to manage vendor relationships and renewals.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): use to frame licence compliance questions for legal review.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to weigh cost and benefit of software choices.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): use to record the terms and properties of an AI model.

## Key sources

- ISO/IEC 19770-1 (the standard itself): processes and tiers for IT asset management; read the current edition from the publisher.
- PeopleCert, ITIL certification pages: the owner's description of software asset management as part of asset management.
- Wikipedia, "Software asset management" and "Open-source licence": overviews of the ideas.
- Open Source Initiative (opensource.org): the definition of open source and a list of approved licences.

## References

1. Software asset management — Wikipedia — https://en.wikipedia.org/wiki/Software_asset_management
2. Software licence — Wikipedia — https://en.wikipedia.org/wiki/Software_license
3. Open-source licence — Wikipedia — https://en.wikipedia.org/wiki/Open-source_license
4. Free and open-source software — Wikipedia — https://en.wikipedia.org/wiki/Free_and_open-source_software
5. Copyleft — Wikipedia — https://en.wikipedia.org/wiki/Copyleft
6. Floating licensing — Wikipedia — https://en.wikipedia.org/wiki/Floating_licensing
7. Shelfware — Wikipedia — https://en.wikipedia.org/wiki/Shelfware
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
10. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
11. Open Source Initiative — OSI — https://opensource.org
