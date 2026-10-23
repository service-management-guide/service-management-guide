# Governance, Risk, and Compliance

**Governance sets direction and accountability, risk management decides what to do about uncertainty, and compliance shows that obligations are met; in continuous delivery these work best as guardrails built into the work, with risk owners who decide, pipelines that produce evidence, and audits that look at how well controls work, not how many documents exist.**

## Why this matters

Few words in technology provoke a sigh as reliably as "governance". It conjures committees, forms, and approvals that arrive after the decision is made. In many organizations the sigh is earned. Governance has become a layer of paperwork on top of the work, owned by people who do not do it, measured by artefacts rather than outcomes.

Yet the need is real. Organizations hold other people's money, health records, and trust. Regulators, customers, and boards ask for evidence that this is handled responsibly. Services fail in ways that harm people, and someone must be accountable. Without governance, decisions are made by whoever is loudest, risks are accepted by people who do not know they accepted them, and compliance is discovered during an audit.

The way to reconcile the two is to change what governance looks like. Instead of gates at the end, it provides guardrails at the start: clear rules about what is allowed, built into the tools so that the safe way is the easy way. Instead of paperwork produced after the fact, it uses evidence produced by the work itself, such as pipeline records. Instead of one approval for all risks, it matches the level of review to the level of risk and puts decisions with those who understand them. Wikipedia describes governance, risk, and compliance (GRC) as an integrated approach to these three. This topic explains the ideas and how to apply them in service management, including regulated settings. It gives no legal advice, and rules differ by country and sector. It builds on change enablement (Topic 3.4 — Change Enablement), pipelines (Topic 6.4 — Pipelines and Automated Change), information security (Topic 3.13 — Information Security Management), and AI governance (Topic 5.6 — AI Governance, Risk, and Compliance).

## Core concepts

**Governance.** The system by which an organization is directed and controlled. Wikipedia describes corporate governance as the mechanisms, processes, and relations by which organizations are controlled and operated. In ITIL 4, governance is a component of the service value system that directs, evaluates, and monitors; see Topic 1.4 — The Service Value System. It exists at several levels, from the board to the team.

**Risk.** The effect of uncertainty on objectives. Risk management identifies, assesses, treats, and monitors risks. Wikipedia describes risk management and international guidance such as ISO 31000. A risk is a possibility, not a certainty, and has a likelihood and an impact.

**Risk register.** A record of risks, their owners, assessments, treatments, and status. Wikipedia describes risk registers. See the risk-register skill in this guide. A register is a working tool; if it is only updated before audits, it is a decoration.

**Risk appetite and tolerance.** How much risk the organization is willing to accept in pursuit of its goals, set by those who govern. Wikipedia describes risk appetite. It tells teams how far they can go without escalation. Without it, every decision is either too cautious or an unnoticed gamble.

**Risk treatment.** Four basic responses: reduce the risk through controls, accept it knowingly, transfer it, for example through insurance or contract, or avoid it by not doing the activity. Record the choice and who made it. Acceptance by default is not a decision.

**Compliance.** Meeting obligations from laws, regulations, contracts, standards, and internal policies. Wikipedia describes regulatory compliance. Examples include data protection laws such as the General Data Protection Regulation, financial reporting laws such as the Sarbanes–Oxley Act, health privacy rules such as HIPAA in the United States, payment industry requirements such as PCI DSS, and, in the European Union, resilience rules for financial entities (the Digital Operational Resilience Act) and for essential services (the NIS2 Directive), all of which Wikipedia describes. Obligations differ by place and sector. Identify yours with specialist advice.

**Controls.** Measures that reduce risk or ensure compliance: preventive (stop a problem), detective (find it), and corrective (fix it). They may be technical, such as an access restriction, procedural, such as a review, or organizational, such as separation of duties, which Wikipedia describes. Internal control frameworks, such as that of the Committee of Sponsoring Organizations (COSO), organize them; Wikipedia describes internal control. A control that is not tested may not work.

**Guardrails over gates.** A gate stops work until someone approves. A guardrail is a boundary that keeps work safe without stopping it, such as a policy check in the pipeline that blocks a public storage bucket. Guardrails are fast and consistent; gates are slow and variable. Use gates only where a human judgement about risk is needed. See Topic 3.4 — Change Enablement.

**Policy.** A statement of intent and rules. Wikipedia describes policy in general. Good policies are short, say what is required and why, and are written so that people can follow them. Policy written as code, checked automatically, links rule to enforcement.

**Evidence.** Records that show a control operated: logs, reviews, test results, approvals. Wikipedia describes audit trails and evidence. Evidence produced automatically by the work, such as the record of each pipeline run, is cheaper and more reliable than evidence assembled for an audit. See Topic 6.4 — Pipelines and Automated Change.

**Audit and assurance.** Independent examination of whether controls and processes work. Wikipedia describes audit. Internal audit, external audit, and customer or regulator audits differ in purpose. Wikipedia describes the "three lines" model, in which management owns risk and control (first line), risk and compliance functions oversee (second line), and internal audit provides independent assurance (third line). Attestation reports, such as those called System and Organization Controls (SOC) reports and described by Wikipedia, give customers assurance about a provider's controls.

**Operating in regulated industries.** Banks, hospitals, insurers, and public bodies face detailed requirements and supervision. Continuous delivery is possible in these settings when controls are mapped to requirements and evidence is generated reliably. Engage the regulator early and explain how the pipeline meets the intent of each control.

**Third-party and supply chain risk.** Obligations extend to suppliers and the software you use. See Topic 3.14 — Supplier Management and Topic 4.2 — Software Asset Management.

**Risk culture.** How people think about risk and speak about it. A culture in which people can report problems without blame, and in which leaders accept bad news, finds risks early. See Topic 8.3 — Organizational Change and Adoption.

**Risks of AI and automation.** New technology adds risks, such as automation acting at scale, and AI systems producing biased or wrong outputs. They need owners, assessments, and controls in the same register as other risks. See Topic 5.6 — AI Governance, Risk, and Compliance and Topic 6.1 — Automation Strategy.

**How the lenses fit.** GRC is the control layer around the other lenses. Agile practice suggests proportionate, fast, collaborative governance with risk and compliance people inside teams. Automation provides guardrails and evidence. Analytics monitors control effectiveness. AI is itself a subject of governance.

## Best practices

1. **Set direction and appetite plainly.** State what the organization will and will not do, and how much risk it accepts in key areas. Make these statements short and available to teams.
2. **Put risk decisions with risk owners.** Name an owner for each significant risk, who understands it and has authority. Escalate by defined thresholds, not by habit.
3. **Keep a living risk register.** Record risks with owners, ratings, treatments, and review dates, and update it when things change. Link risks to services and controls.
4. **Match review to risk.** Use light, automated checks for low-risk changes and deeper human review for high-risk ones. Publish the criteria.
5. **Build guardrails into the tools.** Encode rules as policy checks in the pipeline and platforms, so that the safe path is the easy one. Use gates sparingly.
6. **Generate evidence from the work.** Capture records of reviews, tests, approvals, and deployments automatically, and store them where they cannot be altered by those they concern.
7. **Map controls to requirements once.** Keep a single control set mapped to the standards and laws that apply to you, instead of separate documents for each. See Topic 1.8 — Service Management Frameworks and Standards.
8. **Test that controls work.** Sample records, run exercises, and re-perform controls. Fix those that do not work, and drop those that add cost without reducing risk.
9. **Work with auditors and regulators early.** Explain your approach, ask what evidence they will accept, and invite them to see the pipeline. Surprises in audits are expensive.
10. **Build a culture of honest reporting.** Make it safe to report risks, near misses, and mistakes, and respond with action. Track how many issues are found by the first line itself.

## Questions to discuss with your team

**Which of our governance steps have changed a decision in the last year, and which have only added delay?**
Ask for evidence. Expect some steps to have no recorded effect. Follow up by choosing one to automate or remove, with the risk owner's agreement.

**Who owns each of our top ten risks, and when did they last review it?**
Look at the register. Expect gaps and stale entries. Follow up by assigning owners and review dates.

**What would our auditor accept as evidence for a control, and could our tools produce it automatically?**
Ask the auditor. Expect more flexibility than assumed. Follow up by choosing one control and generating its evidence from the pipeline.

**Where do we accept risk by default, and who would be surprised to hear it?**
Think of old systems, known vulnerabilities, and deferred fixes. Expect uncomfortable examples. Follow up by recording explicit decisions for the top three.

**Which regulations and contracts apply to our services, and how do our controls map to them?**
List them with legal and compliance advisers. Expect an incomplete map. Follow up by building a single control mapping for one service.

**How do we govern AI and automation in the same way as other risks, and where are we inconsistent?**
Compare the registers and reviews. Expect AI to sit outside. Follow up by adding AI uses to the main register.

## In practice: a service management example

A regional bank's retail platform team wants to release daily. The bank's risk function requires a change advisory process for all production changes, including a form, three approvals, and a weekly meeting. The platform team calls it theatre, and the risk function points to two incidents last year caused by unreviewed changes.

The head of operational risk and the platform lead agree to map the bank's change controls to their purposes. The controls exist to ensure that changes are reviewed by a competent second person, tested, authorized by an accountable owner, traceable, and reversible. The pipeline can supply most of these: a required second reviewer, automated tests, an authorization recorded by the product owner for risk-bearing changes, a full record, and automatic rollback. For the highest-risk changes, such as those to payment calculation, the weekly meeting remains, with a smaller group.

They agree a risk appetite statement for change: routine changes to digital channels are low risk and are covered by pipeline controls; changes to core ledger systems are high risk and need human approval. The pipeline's evidence goes to an immutable store, and internal audit samples 40 changes a quarter. The external auditor and the regulator's supervisor are told about the approach and are shown the pipeline records. The supervisor asks for a monthly summary of exceptions and agrees to review the arrangement after six months.

After two quarters, the change failure rate is lower than before, the lead time for routine changes falls from nine days to one, and audit finds the evidence complete for 39 of 40 sampled changes; the other shows a missing reviewer record due to a pipeline misconfiguration, which is fixed. The risk function also adds the bank's AI uses, which had been outside the register, with owners and assessments.

What changes: risk and engineering share one view of controls, and daily release is permitted for the low-risk class. What remains hard: the core ledger systems cannot run automated tests easily and keep the weekly meeting; the second reviewer rule strains small teams; and the supervisor's requirements for evidence format differ from the pipeline's, requiring translation work. The risk head sets up a quarterly review of the appetite statement and asks for resources for the core ledger tests.

## Four perspectives

### Product and delivery teams

Know the risks and obligations that apply to your service, build guardrails into your pipeline, and generate evidence as you work. Talk to risk and compliance colleagues early, and bring them into design.

### Service and operations teams

Operate the controls: reviews, access, monitoring, and incident handling. Record what you do, report near misses, and flag controls that are not working or cost more than they give.

### Leadership and governance

Set direction and appetite, name risk owners, and fund controls that work. Ask for evidence and test results, not volumes of documents. Make it safe to report bad news.

### Customers and users

You rely on providers to manage risks that affect you. Ask what assurance they can give, such as audit reports, and tell them about requirements that apply to you.

## Agile, AI, automation, and analytics

### Agile

Embed risk and compliance people in teams, review controls in short cycles, and improve them with feedback. Caution: do not mistake a lack of paperwork for a lack of control; show how each control is met.

### AI

AI can help draft policies, map controls to requirements, summarize audit findings, and search evidence, with legal and human review. AI uses themselves belong in the risk register. Caution: an AI summary of a regulation may be wrong; never rely on it for compliance. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate policy checks, evidence capture, access reviews, and control monitoring, with exceptions routed to owners. Caution: an automated control checks only what it was built to check; test it and sample results by hand. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Track control test results, exceptions, risk ratings over time, audit findings and time to close, and incidents linked to control failures. Caution: counts of controls or completed assessments reward paperwork; measure effectiveness and outcomes. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Governance as gates and paper.** Delay without safety. Build guardrails into tools and generate evidence automatically.
- **Risk acceptance by default.** Nobody decided. Record explicit decisions with owners.
- **One review for all risks.** Low risks wait; high risks are rushed. Scale review to risk.
- **Evidence assembled for audits.** Cost and error rise. Capture it as work happens.
- **Separate documents per standard.** Duplication and drift. Map one control set to many requirements.
- **Untested controls.** They fail silently. Test and sample.
- **Fear of reporting.** Risks stay hidden. Respond to bad news with action.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Direction and appetite | Unstated | Informal | Written appetite and decision rights | Appetite reviewed against results | Appetite coordinated across the enterprise and partners |
| Risk management | Reactive | Register exists | Owned, current register linked to services and controls | Risks reviewed against incidents and tests | Risks managed with data across suppliers and AI |
| Controls and evidence | Manual and by meeting | Some automation | Guardrails in tools, evidence generated by work | Control effectiveness tested and sampled | Continuous control monitoring with human oversight |
| Assurance and culture | Surprises in audits | Prepared for audits | Early engagement with auditors and regulators | Findings tracked to closure | Assurance integrated with delivery and learning |

## Checklist

- [ ] We have a written risk appetite and decision rights.
- [ ] Each significant risk has an owner and a review date.
- [ ] Review effort matches risk, and the criteria are published.
- [ ] Controls are mapped once to the standards and laws that apply.
- [ ] Guardrails are built into pipelines and platforms.
- [ ] Evidence is generated automatically and stored safely.
- [ ] We test controls and sample records.
- [ ] AI and automation risks are in the same register.

## AI prompts

**Map a control to its purpose and evidence.**

```text
Here is a control as written: [paste]. Here is what our pipeline or tools record: [paste].
State the risk the control appears to address, based only on the text, list what evidence the tools would produce, and what the control requires that the evidence does not show. Do not judge whether it meets any regulation.
List what you are unsure of.
```

**Review a risk register for quality.**

```text
Here is an extract from our risk register: [paste, sensitive details removed].
List entries without an owner, without a review date, with vague descriptions, or where treatment is "accept" without a stated decision-maker. Quote each. Do not rate the risks.
List what you are unsure of.
```

**Prepare for an auditor's questions.**

```text
The audit covers [area]. Here are our relevant controls and evidence: [paste].
List twelve questions an auditor might ask, grouped by control, and for each what evidence we would need to show. Mark questions where our material gives no basis for an answer. Do not state what the auditor will require.
List what you are unsure of.
```

## AI skills

- [risk-register](../../../../skills/risk-register/SKILL.md): use to record risks, owners, and treatments.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): use to choose early-warning indicators.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): use to test controls and evidence.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): use to prepare questions and evidence for legal and audit review.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to clarify decision rights and accountability.

## Key sources

- ISO 31000, risk management guidelines: the international guidance on risk management; read the current edition from the publisher.
- COSO, *Internal Control — Integrated Framework*: a widely used framework for internal control.
- Gene Kim and others, *The DevOps Handbook*: chapters on integrating security, compliance, and change control into the pipeline.
- Wikipedia, "Governance, risk, and compliance" and "Risk management": overviews of the ideas.

## References

1. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
2. Corporate governance — Wikipedia — https://en.wikipedia.org/wiki/Corporate_governance
3. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
4. Risk register — Wikipedia — https://en.wikipedia.org/wiki/Risk_register
5. Risk appetite — Wikipedia — https://en.wikipedia.org/wiki/Risk_appetite
6. Regulatory compliance — Wikipedia — https://en.wikipedia.org/wiki/Regulatory_compliance
7. Internal control — Wikipedia — https://en.wikipedia.org/wiki/Internal_control
8. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
9. Audit — Wikipedia — https://en.wikipedia.org/wiki/Audit
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Sarbanes–Oxley Act — Wikipedia — https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act
12. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
