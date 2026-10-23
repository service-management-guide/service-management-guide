# AI Governance, Risk, and Compliance

**AI governance gives an organization named owners, clear rules on data and decisions, risk assessment proportionate to harm, testing, and records for every AI system it uses; frameworks such as ISO/IEC 42001, the NIST AI Risk Management Framework, and the EU AI Act supply vocabulary and structure, not legal advice.**

## Why this matters

AI arrives in an organization from many doors at once. Vendors add AI features to the tools you already pay for. Teams build assistants. Individuals use public chat tools for their work. Each use carries questions that the organization may not have asked: what data goes in, who sees it, how accurate it is, who is affected by its decisions, and who answers when it is wrong.

Without governance, those questions are answered one use at a time, inconsistently, or not at all. The consequences range from the embarrassing to the serious: a confidential document pasted into a public tool, a screening system that treats some groups worse than others, an assistant that gives wrong advice to a customer, a regulator who asks for evidence of control and finds none.

Governance is the answer, and it does not need to be heavy. At its core it is a small set of habits: know what AI you use, give each use an owner, assess the risk in proportion to what could go wrong, test and monitor, set rules about data and human oversight, and keep records. Laws and standards are developing quickly: the European Union's Artificial Intelligence Act, described on Wikipedia, sets obligations by risk category, and many other jurisdictions have rules or proposals. This topic explains the structure and the vocabulary and shows how to fit AI governance into the governance you already have. It gives no legal advice; for any legal question, ask a qualified adviser.

The owner's description of the newest ITIL version places AI inside the environment that service management must address (see Topic 1.3 — ITIL 5). This topic connects to the general view of AI (Topic 5.1 — AI in Service Management), agents (Topic 5.5 — Agentic AI and Human Oversight), the operating model (Topic 5.8 — AI Operating Model and Skills), and enterprise governance (Topic 8.1 — Governance, Risk, and Compliance).

## Core concepts

**Governance, risk, and compliance (GRC).** Governance is how an organization is directed and controlled; risk management identifies and treats threats to objectives; compliance is meeting obligations from laws, contracts, and policies. Wikipedia describes GRC as an integrated approach to the three. AI governance applies the same logic to AI.

**AI inventory.** A list of all AI systems in use or development: purpose, owner, vendor or model, data used, users and people affected, risk level, and status. You cannot govern what you cannot see. Include embedded vendor features and personal tools used for work.

**Risk-based approach.** The level of control should match the level of potential harm. Summarizing meeting notes carries a different risk from ranking job applicants. The EU AI Act takes a similar approach, with categories running from minimal to unacceptable risk; Wikipedia describes the categories. Check the current text and your own situation with a legal adviser.

**Risk assessment for AI.** For each use, ask: who could be harmed, and how; how likely and how severe; what the system's limits are; what happens when it is wrong; and what the alternatives are. Wikipedia describes risk management in general. Record the assessment and the owner's decision. Privacy impact assessments, described on Wikipedia, are a related tool for personal data.

**Standards and frameworks.** ISO/IEC 42001, published in 2023, specifies requirements for an artificial intelligence management system, comparable in structure to other ISO management system standards. The National Institute of Standards and Technology (NIST) in the United States publishes the AI Risk Management Framework, organized around four functions: govern, map, measure, and manage. Both are voluntary tools for structure and a shared vocabulary. Read the current texts from the publishers. See Topic 1.8 — Service Management Frameworks and Standards.

**Law and regulation.** AI is subject to existing laws, such as data protection, consumer protection, discrimination, employment, and intellectual property law, as well as new AI-specific rules. Wikipedia describes the regulation of artificial intelligence across jurisdictions, which is changing fast. Obligations depend on where you operate and what you do. This guide cannot tell you what applies.

**Data protection and privacy.** AI systems often process personal data. Laws such as the General Data Protection Regulation (GDPR) in the European Union set rules on lawful basis, purpose, minimization, rights of individuals, and in some cases limits on automated decisions. Wikipedia describes the GDPR and privacy. Involve your privacy officer or legal adviser, and record where data goes, how long it is kept, and whether it trains any model.

**Bias and fairness.** AI trained on past data can reproduce unfair patterns, so that some people get worse results. Wikipedia describes algorithmic bias and fairness in machine learning. Test for differences in outcomes across groups relevant to the use, and review who is affected, not only average performance. Decide what is acceptable before launch.

**Transparency and explainability.** People affected by an AI system should know it is in use, and for significant decisions should be able to get an explanation and a route to challenge. Wikipedia describes algorithmic transparency and explainable AI. The right level depends on the stakes.

**Human oversight.** A person who can understand, question, and override the system, with time and information to do so. See Topic 5.5 — Agentic AI and Human Oversight. Oversight that exists only on paper is a common finding.

**Safety and security.** AI systems can be attacked (for example by prompt injection), can leak data, and can behave unexpectedly. Red-teaming, described on Wikipedia, is the practice of testing a system by simulating an adversary. See Topic 3.13 — Information Security Management.

**Intellectual property.** Questions arise about the material used to train models, the ownership of outputs, and licenses of models themselves. Wikipedia describes intellectual property and copyright. See Topic 4.2 — Software Asset Management. Take advice on how these affect you.

**Accountability and roles.** Governance needs clear roles: an executive sponsor, a body that sets policy and reviews higher-risk uses, owners for each system, and specialists in security, privacy, and legal matters. Wikipedia describes accountability. Avoid a committee that approves everything and blocks work; reserve review for higher-risk uses.

**Lifecycle controls.** Controls apply across the life of a system: design (purpose, data, risk), build or buy (due diligence, contracts, testing), deploy (approval, monitoring), operate (performance, drift, incidents), and retire. See Topic 3.14 — Supplier Management.

**Records.** Keep evidence: the inventory, risk assessments, test results, approvals, incident records, and logs of use. Records support audits, learning, and challenges from the people affected.

**How the lenses fit.** Governance is the control layer around the AI lens. Agile practice suggests proportionate, fast review, with guardrails teams can use without waiting. Automation can enforce rules, such as blocking sensitive data from going to unapproved tools. Analytics provides the monitoring evidence.

## Best practices

1. **Build the inventory first.** Ask teams, check vendor settings, and review network and expense data. Record each AI system with an owner and a purpose.
2. **Classify by risk.** Define a few risk levels with examples, such as low (drafting internal text), medium (customer-facing answers), and high (decisions affecting people's rights or safety). Tie the level of review to the level of risk.
3. **Name an owner for each use.** One accountable person per system, who signs the risk assessment and answers for performance and incidents.
4. **Make a short, clear policy.** State what data may go to which tools, which uses need approval, what must never be done, and who to ask. Keep it to a few pages, and publish examples.
5. **Provide approved tools and routes.** If staff have no approved way to use AI, they will use unapproved ones. Offer tools with the right terms and a quick route to approval.
6. **Assess before and test after.** Do a proportionate risk assessment before a use goes live, and test with realistic cases, including checks for bias and for misuse. Repeat after significant changes.
7. **Check vendors and terms.** Ask vendors how they use your data, how they test, how they tell you about model changes, and what happens to data at the end. Record answers. See Topic 3.14 — Supplier Management.
8. **Define human oversight in practice.** For each use, say who reviews what, with what information, and how often, and sample the reviews.
9. **Monitor and handle incidents.** Track errors, complaints, drift, and security events. Treat AI incidents like other incidents, and learn from them. See Topic 3.2 — Incident Management.
10. **Review regularly and keep records.** Revisit the inventory and risk levels at least annually and when laws or systems change. Keep the evidence in one place.

## Questions to discuss with your team

**Where do we use AI today, who owns each use, and what could go wrong?**
Build a first inventory. Expect gaps, especially vendor features and personal tools. Follow up by choosing the three riskiest and assigning owners.

**Which of our uses affect people's access, money, health, or employment, and what review do they get?**
Look for higher-risk uses. Expect uncertainty about what counts. Follow up by involving legal and privacy advisers in the classification.

**What data do staff put into AI tools, and do they know the rules?**
Ask anonymously if needed. Expect surprises. Follow up by agreeing a clear rule with examples and by providing an approved alternative.

**What would we show a regulator or a customer who asked how we control our AI?**
Gather what exists. Expect a thin file. Follow up by choosing three documents to produce: inventory, policy, and one risk assessment.

**How do we test for unfair outcomes, and which groups should we look at?**
Think about the people affected by each use. Expect that nobody has tested. Follow up by choosing one use and designing a simple comparison across groups, with advice.

**Who can say no to an AI use, and what happens when they do?**
Governance without the power to stop is decorative. Expect unclear answers. Follow up by naming the decision-maker for higher-risk uses and a service level for reviews.

## In practice: a service management example

A national social security agency uses AI in several places: a vendor's virtual agent on its public website, a tool that summarizes case notes for caseworkers, a developer assistant used by its IT staff, and a pilot that flags possible errors in benefit claims for review. No central record exists, and a minister's office has asked the agency how it controls AI.

The chief information officer asks the service management office to build an inventory in six weeks. It finds eleven uses, including two nobody in the IT department knew about: a text-summarization feature that a vendor turned on in the case management system, and a transcription tool used by one regional office on personal accounts. The team classifies uses by risk with the privacy officer and the legal department. The claims-flagging pilot is classed as high risk, since its output could lead to action against a person; the case-notes summary is medium; the developer assistant is low, though it carries licensing questions.

For each use, an owner is named. For the claims pilot, the owner commissions a risk assessment, including a comparison of flag rates across groups and a rule that no one is ever denied a benefit on the tool's output alone. The transcription tool is stopped until an approved alternative is found; the regional office is offered a vendor-approved tool under a contract with data protection terms. A four-page policy sets rules on data and approvals, and a short review route is promised within ten working days for medium-risk uses.

What changes: the agency can answer the ministry with an inventory, a policy, and a risk assessment for its highest-risk use. What remains hard: the vendor features switched on by default keep appearing, and the agency has no automatic way to discover them; the comparison across groups is limited by data that the agency may not lawfully hold; and the review route's promise of ten days strains a small team. The office plans a quarterly vendor-feature review and a request for legal guidance on testing.

## Four perspectives

### Product and delivery teams

Register your AI uses, assess risk early, test with realistic and adversarial cases, and record what the system may do. Build in a route for people to challenge outcomes and for you to switch it off.

### Service and operations teams

Monitor AI systems in production, handle incidents, and report errors and complaints. Follow the data rules, and tell owners about new AI features that appear in your tools.

### Leadership and governance

Sponsor the program, name decision rights, and fund the work. Ask for the inventory, the risk levels, and evidence of testing. Do not outsource accountability to vendors or committees.

### Customers and users

You should be told when AI is used in ways that matter to you, and be able to reach a person and challenge decisions. Ask how your data is used, and report outcomes that seem wrong or unfair.

## Agile, AI, automation, and analytics

### Agile

Provide fast, proportionate review with guardrails teams can follow, such as approved tools and a short checklist for low-risk uses. Iterate on the policy with teams. Caution: a slow, heavy review pushes teams to bypass it; keep the low-risk route quick.

### AI

AI can help draft policies, read vendor terms, and prepare risk assessments, with legal and human review. Name an owner for that use too. Caution: an AI summary of a law or a contract can be wrong; never use it as the basis of a compliance decision. See Topic 5.1 — AI in Service Management.

### Automation

Automate the inventory feeds, data loss prevention rules, approvals for low-risk uses, and logging, with exceptions reviewed. Caution: automated blocking can drive work to personal devices; pair it with approved alternatives. See Topic 6.1 — Automation Strategy.

### Analytics

Track the share of AI uses with owners and assessments, incidents, complaints, test results, and time to review. Caution: counts of assessments completed can reward paperwork; check a sample for quality and for whether controls work. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **No inventory.** Uses multiply unseen. Build and refresh the inventory.
- **One-size-fits-all review.** Everything is blocked or nothing is reviewed. Scale review to risk.
- **Policy nobody can follow.** Staff ignore it. Write short rules with examples and provide approved tools.
- **Governance as paperwork.** Documents exist and controls do not. Test that controls work.
- **Trusting vendor claims.** Terms and behavior are unchecked. Ask, test, and record.
- **Ignoring affected people.** Bias and harm go unseen. Test outcomes across groups and offer a way to challenge.
- **Treating legal advice as something AI can supply.** Wrong summaries drive decisions. Use qualified advisers.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Inventory and ownership | Unknown uses | Main uses listed | Inventory with owners and risk levels | Inventory reviewed and verified by discovery | Inventory integrated with catalog, procurement, and controls |
| Risk and testing | Ad hoc | Some assessments | Proportionate assessment and testing before launch | Results monitored and acted on | Continuous assurance across systems and suppliers |
| Policy and data | None | Draft guidance | Clear policy, approved tools, and data rules | Compliance monitored and audited | Rules enforced by tooling and adapted to change |
| Oversight and accountability | Unclear | Named sponsor | Defined roles, review route, and human oversight | Oversight quality sampled | Governance coordinated across the enterprise and partners |

## Checklist

- [ ] We keep an AI inventory with owners and purposes.
- [ ] Each use has a risk level, with review proportionate to it.
- [ ] A short policy covers data, approvals, and prohibited uses.
- [ ] Approved tools and a fast review route exist.
- [ ] Higher-risk uses have a recorded risk assessment and tests, including for bias.
- [ ] Vendor terms on data, testing, and model changes are recorded.
- [ ] Human oversight is defined and sampled.
- [ ] We have asked legal and privacy advisers about our obligations.

## AI prompts

**Draft an inventory entry from notes.**

```text
Here are notes on an AI use: [paste].
Draft an inventory entry with: purpose, owner (only if stated), vendor or model (only if stated), data used, people affected, decisions it influences, and proposed risk level with the reasons. Mark each item not in the notes as [missing]. Do not state legal obligations.
List what you are unsure of.
```

**Prepare questions for a vendor.**

```text
We are considering an AI product from a vendor for [use]. What we know of it: [paste].
Write 20 questions for the vendor about data use and retention, training on our data, testing for accuracy and bias, security, model changes, incident notification, and exit. Do not assume answers.
List what you are unsure of.
```

**Structure a risk assessment for review.**

```text
AI use: [describe]. People affected: [list]. Decisions influenced: [list]. Current controls: [list].
Draft a risk assessment table with: harm, who is affected, likelihood and severity (marked as my estimate to be confirmed), existing controls, further controls to consider, and questions for the owner. Do not give legal conclusions.
List what you are unsure of.
```

## AI skills

- [risk-register](../../../../skills/risk-register/SKILL.md): use to record AI risks, owners, and decisions.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): use to document a model's purpose, data, performance, and limits.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): use to frame privacy questions for your legal adviser.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): use to prepare evidence and questions for an audit.
- [data-governance](../../../../skills/data-governance/SKILL.md): use to set ownership and rules for the data AI uses.

## Key sources

- NIST, AI Risk Management Framework: a widely used voluntary framework for managing AI risks.
- ISO/IEC 42001 (the standard itself): requirements for an AI management system; read the current edition from the publisher.
- The text of the European Union Artificial Intelligence Act and guidance from your own regulators: authoritative sources on legal obligations.
- Wikipedia, "Regulation of artificial intelligence" and "Ethics of artificial intelligence": overviews of the landscape.

## References

1. Regulation of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence
2. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
3. Ethics of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence
4. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
5. Fairness (machine learning) — Wikipedia — https://en.wikipedia.org/wiki/Fairness_(machine_learning)
6. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
7. Privacy impact assessment — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
8. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
9. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
10. Red team — Wikipedia — https://en.wikipedia.org/wiki/Red_team
11. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
