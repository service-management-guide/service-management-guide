# Supplier Management

**Supplier management makes sure that the vendors, cloud providers, and partners a service depends on deliver what was agreed and that you can cope when they do not; it works when suppliers are treated as part of the service, contracts match the service levels you promise, and the relationship includes shared review and an exit plan.**

## Why this matters

Few services are delivered by one organization alone. A bank's mobile app runs on a cloud platform, uses a payment processor, sends messages through a telecommunications supplier, and is supported out of hours by a managed service provider. Each of these is a link in the chain. When one fails, the customer does not distinguish between the bank and its supplier. The bank is accountable.

Supplier management is the practice that deals with this reality. It covers choosing suppliers, agreeing what they will provide, monitoring how they perform, managing the relationship, and planning for change or failure. When it works, suppliers become part of the service team, with shared goals and open communication. When it fails, organizations discover too late that a contract promises less than the service they have promised to their own customers, or that leaving a supplier would take two years.

Modern services make this harder and more important. Cloud platforms and software-as-a-service products supply capabilities in minutes and can be hard to leave. AI services add new dependencies on models and data practices that the buyer cannot see. This topic explains the practice, the main arrangements, and the traps. It connects to service level management (Topic 3.7 — Service Level Management), service continuity (Topic 3.12 — Service Continuity Management), and financial management (Topic 4.5 — Financial Management and FinOps). It gives no legal or procurement advice; get that from the right specialists.

## Core concepts

**Supplier.** A party that provides products or services to an organization, such as a vendor, a contractor, a cloud provider, or a partner. In ITIL 4 terms, suppliers appear in the dimension "partners and suppliers" (see Topic 1.6 — Four Dimensions of Service Management). A supplier may also be a competitor, a customer, or a part of the same corporate group.

**Supplier management.** The practice of ensuring that the organization's suppliers and their performance are managed appropriately to support the smooth provision of quality products and services. Wikipedia describes related ideas under supplier relationship management and vendor management systems.

**Outsourcing.** Contracting an activity to an external party. Wikipedia describes outsourcing and offshoring, with their motives and risks. Outsourcing moves work; it does not move accountability for the outcome to the customer.

**Multisourcing and integration.** Many organizations use several suppliers, each for a different part of the service. Wikipedia describes multisourcing. Someone has to coordinate them so that the customer sees one service. This role is sometimes called service integration and management (SIAM), described on Wikipedia, and it can be performed by the customer, a lead supplier, or a specialist. See the service-integration-and-management skill in this guide.

**Cloud and software as a service.** Cloud computing and software as a service shift infrastructure and applications to providers. Wikipedia describes both. Responsibility is shared: the provider secures and runs the platform; the customer configures, uses, and secures what it puts there. The split differs by service model, and misunderstanding it is a common cause of incidents. Read the provider's description of its shared responsibility model.

**Contracts and agreements.** A contract states what the supplier will provide, at what price, to what service levels, and with what remedies. An underpinning contract supports the service levels you have promised to your own customer; the two must be consistent. See Topic 3.7 — Service Level Management. Wikipedia's article on contract management describes managing agreements through their life.

**Due diligence.** Checking a supplier before commitment: financial health, security practices, references, certifications, and the ability to meet the need. Wikipedia describes due diligence. Scale the checks to the importance of the supplier.

**Performance management.** Monitoring what the supplier delivers against what was agreed, with regular reviews. Measures should reflect what matters to you and be based on data you can check. Key performance indicators are described on Wikipedia, as are cautions about them. See the *Service Management Metrics* book.

**Relationship and governance.** A supplier relationship needs named contacts on both sides, regular meetings, an escalation path, and a way to raise concerns. The tone matters: suppliers that are treated as adversaries tend to protect themselves; suppliers that are treated as partners tend to share problems early.

**Vendor lock-in.** A situation in which switching suppliers is costly or impractical. Wikipedia describes vendor lock-in. Lock-in is sometimes an acceptable price for value; it should be a conscious choice. Open standards and interoperability, described on Wikipedia, reduce it.

**Exit planning.** A plan for ending the relationship: how data and services will be transferred, how long it would take, what it would cost, and what the supplier must provide. Wikipedia describes exit strategies in general. An exit plan that has never been examined is a hope. For critical suppliers, test parts of it.

**Concentration and dependency.** Depending heavily on one supplier, or on several that rely on the same underlying provider, creates a concentration risk. Map dependencies, including indirect ones. See Topic 3.12 — Service Continuity Management.

**Information security and data.** Suppliers often handle sensitive data. Agree security requirements, incident reporting, audit rights, and data location and return. Check the law that applies to you. See Topic 3.13 — Information Security Management.

**AI suppliers.** Suppliers of AI models and services bring particular questions: what data they use to train on, whether your inputs are retained, how changes to models are announced, and what oversight you can apply. See Topic 5.6 — AI Governance, Risk, and Compliance.

**How the lenses fit.** Supplier management applies continuous improvement to relationships: regular review and joint improvement. AI can help read contracts and summarize performance, under legal and human review. Automation collects performance data and renewal dates. Analytics shows supplier performance and spend.

## Best practices

1. **Know your suppliers and what each provides.** Keep a register of suppliers with the services they support, contract dates, owners, and criticality. Include cloud services bought on a card.
2. **Match contracts to your own commitments.** For each service you promise, check that every supporting contract allows it. Close gaps by renegotiating, by adding redundancy, or by changing your promise.
3. **Scale due diligence to risk.** Examine critical suppliers carefully; use lighter checks for minor ones. Revisit when a supplier changes ownership or scope.
4. **Name owners on both sides.** Each supplier has an internal relationship owner and a named contact at the supplier. Set an escalation route in advance.
5. **Review performance regularly.** Meet on a schedule, look at data and incidents, and agree actions. Share your own service's performance so that the supplier sees the effect.
6. **Treat suppliers as part of the team where it matters.** Include them in incident reviews and in planning for changes that affect them. Share information that helps them help you.
7. **Understand shared responsibility.** For cloud and software services, write down what the supplier does and what you do. Check that your part is covered.
8. **Plan the exit.** For critical suppliers, document how you would move away, including data export, timeline, and cost. Test parts of it, such as exporting data.
9. **Watch concentration.** Map which services depend on the same supplier or the same underlying provider. Decide where redundancy is worth paying for.
10. **Include security, privacy, and AI questions.** Ask suppliers how they protect data, report incidents, and use or train on your data, and record the answers.

## Questions to discuss with your team

**Which suppliers could stop our most important service, and what would we do?**
List them, including indirect ones. Expect a surprise or two. Follow up by choosing one critical supplier and asking how we would cope with a week of outage.

**Where does a supplier contract promise less than we promise our customers?**
Put the numbers side by side. Expect gaps in response times and availability. Follow up by choosing one gap to close or to flag to the customer.

**Who is the owner of each supplier relationship, and when did they last meet the supplier?**
Ownership is often assumed. Ask for the last meeting date and what came of it. Follow up by assigning owners and a schedule.

**How long would it take to leave our largest supplier, and what would we lose?**
Try to answer concretely. Expect "years" or "no idea". Follow up by drafting a rough exit plan and testing a data export.

**What do we assume the cloud provider handles for us, and what do we actually have to do?**
Check the provider's documentation. Expect assumptions about backup, access, and configuration. Follow up by listing our own responsibilities and who owns each.

**What does each AI supplier do with our data, and how will they tell us about model changes?**
Read the terms. Expect uncertainty. Follow up by asking the suppliers directly and recording answers in the register.

## In practice: a service management example

A national tax authority's online filing service depends on five suppliers: a cloud platform, an identity verification provider, an SMS gateway for one-time codes, a document scanning service, and a managed service provider that supports the platform out of hours. The authority's own commitment to taxpayers is that the service is available during the filing season with a four-hour response to incidents.

The service owner builds a one-page register and compares each contract with the commitment. The managed service provider's contract promises an eight-hour response out of hours. The SMS gateway's contract has no stated availability and no incident reporting obligation. The identity provider's contract is due for renewal in four months, and exit would take about nine months because of how identity data is stored.

She takes three actions. She renegotiates the managed service provider's response to four hours for the filing season, at a price that goes to the budget holder for a decision. She adds a second SMS gateway as a fallback, and agrees to test the switch. And she begins an exit study for the identity provider, starting with a test export of the data, and uses it in the renewal discussions to ask for better terms on data portability. She schedules quarterly reviews with each of the five, attended by the supplier's account manager.

What changes: the authority can state which promises to taxpayers each contract supports, and the SMS fallback works in the first test. What remains hard: the extra response cost for the managed service provider is contested by finance; the cloud platform's own regional failure remains a single point of dependency that the authority has not funded a fix for; and the identity provider has not yet agreed to the portability terms. The service owner records these as open risks with owners.

## Four perspectives

### Product and delivery teams

Know which suppliers your product depends on and what they promise. Design for supplier failure where practical, and build integrations that make switching possible. Involve suppliers in planning changes that affect them.

### Service and operations teams

Keep the supplier contacts and escalation routes current, share incidents with suppliers promptly, and record their performance. Raise contract gaps you meet in practice.

### Leadership and governance

Decide which dependencies are acceptable, and fund the redundancy and exit work that follows. Ask for evidence that contracts support your commitments. Be alert to concentration and lock-in.

### Customers and users

You may not see your provider's suppliers, but you depend on them. Ask what dependencies the service has, and what happens if one fails. Expect clear information in a major incident.

## Agile, AI, automation, and analytics

### Agile

Include suppliers in regular joint reviews and improvement, and aim for short feedback cycles with them. Caution: agile teams can adopt services quickly without checks; keep the supplier register current and review new dependencies.

### AI

AI can help read contracts, compare terms with service commitments, and summarize supplier reports, under review by legal and procurement staff. Name an owner. Caution: an AI summary of a contract may miss or invent clauses; always check against the document, and take legal advice on interpretation. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate collection of supplier performance data, renewal reminders, and checks on cloud configuration, with owners for exceptions. Caution: automated provisioning of third-party services can create untracked dependencies; link provisioning to the register. See Topic 6.1 — Automation Strategy.

### Analytics

Track supplier performance against agreed measures, spend by supplier, incident share, and dependency concentration. Caution: supplier-reported numbers may be defined in their favor, and penalties tied to a single measure invite gaming; verify with your own data. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Contracts below commitments.** Promises exceed what suppliers must deliver. Compare and close the gaps.
- **Suppliers outside the register.** Shadow services proliferate. Keep a register and link it to purchasing.
- **Adversarial relationships.** Suppliers hide problems. Share goals and review jointly.
- **No exit plan.** Switching is impractical. Plan and test critical exits.
- **Misunderstood shared responsibility.** A cloud service is assumed secure and backed up. Document who does what.
- **Hidden concentration.** Several suppliers rely on the same provider. Map indirect dependencies.
- **Ignoring AI data terms.** Inputs are retained or used for training. Ask and record.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Visibility | Suppliers known by team | Register of main suppliers | Register with owners, criticality, and contracts | Register kept current from purchasing and discovery | Dependencies mapped across suppliers and indirect providers |
| Contracts | Signed and filed | Reviewed on renewal | Aligned to our service commitments | Performance and remedies reviewed | Contracts adapted across the supply chain |
| Relationship | Transactional | Named contacts | Regular reviews with actions | Joint improvement and shared learning | Suppliers integrated into planning and recovery |
| Exit and risk | None | Awareness | Exit plans for critical suppliers | Parts tested | Redundancy and exits managed across the portfolio |

## Checklist

- [ ] We keep a register of suppliers with owners, criticality, and contract dates.
- [ ] Each supplier contract is compared with the commitments it supports.
- [ ] Each critical supplier has a named relationship owner and escalation route.
- [ ] We hold regular reviews with critical suppliers.
- [ ] We have documented shared responsibility for cloud services.
- [ ] Critical suppliers have exit plans, with parts tested.
- [ ] We know our concentration risks.
- [ ] We have asked AI and data suppliers about data use and model changes.

## AI prompts

**Compare a contract with our commitments.**

```text
Here are the relevant terms from a supplier contract: [paste clauses]. Here are the commitments we make to our own customers for the supported service: [paste].
List each of our commitments and say whether the contract text supports it, conflicts with it, or is silent, quoting the exact words. Do not give legal advice or interpret ambiguous clauses.
List what you are unsure of.
```

**Draft supplier review questions.**

```text
Supplier: [name and what they provide]. Recent facts: [incidents, performance data, changes].
Draft ten questions for the quarterly review, covering performance, incidents, changes, risks, and improvements. Avoid blame and do not suggest facts I did not give.
List what you are unsure of.
```

**Map dependencies from a list.**

```text
Here is a list of our services and the suppliers each uses: [paste]. Here is what I know about what each supplier itself depends on: [paste, or write "unknown"].
Produce a table showing, for each supplier, which services depend on it, and highlight suppliers that appear in many services or that share an underlying provider. Mark every assumption.
List what you are unsure of.
```

## AI skills

- [vendor-management](../../../../skills/vendor-management/SKILL.md): use to manage supplier selection and performance.
- [service-integration-and-management](../../../../skills/service-integration-and-management/SKILL.md): use to coordinate several suppliers into one service.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): use to align agreements across the chain.
- [risk-register](../../../../skills/risk-register/SKILL.md): use to record supplier risks and decisions.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of the supplier management practice.
- Wikipedia, "Supplier relationship management" and "Outsourcing": overviews of the ideas.
- Wikipedia, "Vendor lock-in": a summary of the risk and its causes.
- Cloud providers' own documentation of their shared responsibility models: the authoritative statement of who does what.

## References

1. Supplier relationship management — Wikipedia — https://en.wikipedia.org/wiki/Supplier_relationship_management
2. Vendor management system — Wikipedia — https://en.wikipedia.org/wiki/Vendor_management_system
3. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
4. Multisourcing — Wikipedia — https://en.wikipedia.org/wiki/Multisourcing
5. Service integration and management — Wikipedia — https://en.wikipedia.org/wiki/Service_integration_and_management
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Contract management — Wikipedia — https://en.wikipedia.org/wiki/Contract_management
8. Due diligence — Wikipedia — https://en.wikipedia.org/wiki/Due_diligence
9. Exit strategy — Wikipedia — https://en.wikipedia.org/wiki/Exit_strategy
10. Cloud computing — Wikipedia — https://en.wikipedia.org/wiki/Cloud_computing
11. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
