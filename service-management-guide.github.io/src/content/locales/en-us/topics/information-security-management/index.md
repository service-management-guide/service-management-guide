# Information Security Management

**Information security management protects the confidentiality, integrity, and availability of information and services; for service teams it works best when security checks are built into the delivery pipeline and daily operations, when security incidents are handled like other incidents with extra care, and when risk decisions are owned and recorded.**

## Why this matters

Every service holds information that someone wants: customer records, credentials, intellectual property, financial data. Every service also depends on information being correct and available when needed. Security failures hit all of these. A data breach exposes customers, a tampered record misleads decisions, and a ransomware attack stops work.

Security can feel like a separate world of specialists, rules, and audits, which arrives at the end of a project to say no. That model fails in continuous delivery, where change is frequent and late checks are too slow. The alternative, often called DevSecOps, builds security into design, code, pipeline, and operations so that it is part of every change and part of every shift. Security specialists become partners who set guardrails and help teams meet them, not gatekeepers who inspect afterwards.

Service management has its own stake. Security incidents arrive through the service desk. Access requests and changes are security decisions. Suppliers are part of the attack surface. Knowledge and monitoring support detection. This topic explains the main ideas and how to work with a security function, without attempting to be a security textbook. It relates to service request management (Topic 3.6 — Service Request Management), supplier management (Topic 3.14 — Supplier Management), and governance (Topic 8.1 — Governance, Risk, and Compliance). It gives no legal or compliance advice; check the rules that apply to you.

## Core concepts

**The CIA triad.** Information security aims to protect three properties: confidentiality (only authorized people can see information), integrity (information is accurate and has not been tampered with), and availability (information and services can be used when needed). Wikipedia's article on information security describes the triad. Some frameworks add others, such as authenticity and accountability.

**Risk-based approach.** Security effort is limited, so it should go where risk is highest. Risk combines the likelihood of a harmful event with its impact. Wikipedia describes risk management in general. A risk register records risks, owners, and decisions: reduce, accept, transfer, or avoid.

**Information security management system (ISMS).** A set of policies, processes, and controls for managing information security risk, with regular review. ISO/IEC 27001 specifies requirements for an ISMS and is a basis for certification. Wikipedia describes it. See Topic 1.8 — Service Management Frameworks and Standards. The NIST Cybersecurity Framework, from a United States agency and widely used elsewhere, organizes activities into functions such as identify, protect, detect, respond, and recover.

**Controls.** Measures that reduce risk: technical (encryption, access controls, patching), organizational (policies, training, separation of duties), and physical (locks, visitor logs). Controls should be proportionate to the risk and tested.

**Defense in depth.** Using multiple layers of controls so that failure of one does not mean failure of all. Wikipedia describes defense in depth in computing. An attacker who passes one barrier meets another.

**Least privilege and access.** People and systems should have only the access they need, for only as long as they need it. Wikipedia describes the principle of least privilege. Strong authentication, including multi-factor authentication, reduces the chance that stolen passwords give access. See Topic 3.6 — Service Request Management.

**Zero trust.** An approach in which no user or device is trusted by default because of its network location; each request is verified. Wikipedia describes zero trust architecture. It shifts attention from the network edge to identity, device state, and data.

**Vulnerability and patch management.** Finding weaknesses in software and systems and fixing them in time. Wikipedia's articles on vulnerability management and on Common Vulnerabilities and Exposures (CVE) describe how weaknesses are identified and tracked. Prioritize by exposure and impact, not only by severity scores. See Topic 4.2 — Software Asset Management.

**Software supply chain.** Modern software includes many components from others: libraries, containers, build tools. A weakness in one affects all who use it. Wikipedia describes the software supply chain. Knowing what is in your software, through a software bill of materials, helps you respond when a weakness is announced.

**Threat modeling.** A structured way to think about how a system could be attacked, early in design, so that mitigations can be planned. Wikipedia describes threat models. It is cheap at design time and expensive later.

**DevSecOps and the pipeline.** Building security checks into the delivery pipeline: static analysis of code, dependency scanning, checks for secrets in code, container scanning, and policy checks. Wikipedia describes static application security testing. The checks run on every change and produce evidence. See Topic 6.4 — Pipelines and Automated Change.

**Detection and monitoring.** Security monitoring looks for signs of attack, such as unusual logins or data movement. Security information and event management (SIEM) systems collect and analyze logs from many sources. Wikipedia describes SIEM. They work only if logs are complete and alerts are tuned. See Topic 3.10 — Monitoring and Event Management.

**Security incidents.** An event that compromises, or threatens to compromise, information or systems. Wikipedia describes computer security incident management. A security incident needs the incident roles of Topic 3.2 — Incident Management, plus extras: preserving evidence, containing the attack, and deciding about notification of customers and regulators, which may be legally required in some jurisdictions. Involve legal and security advisers early.

**People.** Many attacks start with a person: phishing emails, social engineering, weak habits. Wikipedia describes phishing and security awareness. Training helps most when it is short, frequent, and tied to real examples, and when reporting a mistake is safe and easy.

**Privacy.** Protection of personal information is related to, but not the same as, security. Laws such as the General Data Protection Regulation in the European Union set obligations for personal data. Wikipedia describes privacy by design, the idea of building privacy into systems from the start. Seek specialist advice.

**How the lenses fit.** Security is the area where agile pace and control meet most sharply. Agile practice treats security work as part of the backlog and involves security people in the team. AI helps defenders and attackers; it needs its own governance (see Topic 5.6 — AI Governance, Risk, and Compliance). Automation enforces controls consistently. Analytics shows exposure and response times.

## Best practices

1. **Start with a risk-based view.** List the information and services that matter most, the threats they face, and the controls in place. Focus effort on the largest gaps.
2. **Work with security as partners.** Include a security person in design and planning. Ask what guardrails the team should follow, and keep them few and clear.
3. **Build checks into the pipeline.** Run code, dependency, container, and secret scans on every change. Fix the causes of repeated findings, and let a failing check stop a release where the risk is serious.
4. **Apply least privilege and strong authentication.** Grant the minimum access, require multi-factor authentication, review access regularly, and remove it when no longer needed.
5. **Keep an inventory and patch promptly.** Know what software and systems you run, track vulnerabilities, and prioritize by exposure and impact. Set targets for time to patch and track them.
6. **Know your supply chain.** Record the components in your software and the suppliers behind your services. Watch for announced weaknesses and have a way to find affected systems quickly.
7. **Model threats early.** For new services and major changes, spend an hour thinking like an attacker, and record the mitigations you choose.
8. **Prepare to respond.** Write a security incident plan with roles, contacts, evidence handling, and decision points. Rehearse, including decisions about notification. Involve legal advice.
9. **Make reporting safe.** Encourage people to report suspicious messages and mistakes quickly, and respond kindly. Fear of blame hides incidents.
10. **Record risk decisions.** When a risk is accepted, record who accepted it, why, and when it will be reviewed. Make the register visible to those who own the services.

## Questions to discuss with your team

**What are the most valuable and most sensitive pieces of information we hold, and who can reach them?**
Make a short list. Expect surprises in who has access and where copies live. Follow up by choosing one dataset and checking its access list.

**Which security checks run on every change, and which happen only at the end?**
Compare the pipeline with the release checklist. Expect late manual reviews. Follow up by choosing one late check to move into the pipeline.

**How quickly do we patch a serious vulnerability, and how do we find out which systems are affected?**
Ask about the last one. Expect "we scrambled". Follow up by agreeing a target time and a way to list affected systems, such as from an inventory.

**What would we do in the first hour of a suspected breach, and who decides about telling customers or regulators?**
Run a short scenario discussion. Expect gaps about decision rights. Follow up by writing one page with roles and contacts, and involving legal advisers.

**How safe is it for staff to report a mistake, such as clicking a bad link?**
This tests culture. Ask what happened to the last person who did. Follow up by agreeing how reports are acknowledged and what is said publicly.

**How could AI help our security work, and what new risks does it add?**
AI can summarize alerts and review code. It can also leak data pasted into it, generate insecure code, and be targeted by attackers. Ask who owns each use and what data may be shared. Follow up by agreeing a rule on what must not be pasted into external tools.

## In practice: a service management example

A regional bank's retail digital team follows a security review before every release, held by a central team once a month. Releases queue up for it. Developers see it as a roadblock; security staff see recurring findings and little time. Last quarter, a library with a known weakness was in production for six weeks before the review found it.

The head of security and the head of engineering agree to try another model for one product. A security engineer joins the team for half of each week. The pipeline gains dependency scanning, static analysis, and a check for secrets in code, and fails a build for critical findings. The team keeps a simple software inventory generated from the pipeline. Each major feature gets a one-hour threat modeling session at design time. The monthly review is replaced for this product by a lightweight sample audit.

Within a quarter, the pipeline catches two vulnerable libraries and one committed credential before release. When a new widely reported library weakness is announced, the inventory identifies the three affected services within an hour; two are patched the same day and the third is scheduled with a compensating control. The team finds that its security incident plan assumes a contact who has left, and updates it.

What changes: findings arrive when they are cheap to fix, and the monthly queue disappears for this product. What remains hard: the pipeline checks produce many low-severity findings, and developers have started to ignore them; the inventory does not cover third-party services the product calls; and the bank's regulator still asks for evidence in a different form, which costs effort to generate. The teams agree to tune the thresholds and to ask the regulator which pipeline records it will accept.

## Four perspectives

### Product and delivery teams

Own security as part of quality: model threats, use the pipeline checks, fix findings promptly, and handle secrets with care. Ask security for guardrails, and tell them what slows you down.

### Service and operations teams

Apply least privilege, patch on time, and watch for unusual activity. Treat security incidents with the discipline of major incidents, and preserve evidence. Report what you see to the security team.

### Leadership and governance

Decide risk appetite, and fund both prevention and response. Ask for evidence that controls work. Create a culture in which reporting mistakes is safe. Know who decides about notifying customers and regulators.

### Customers and users

Use strong authentication, report suspicious messages, and keep your own credentials safe. Ask providers how they protect your information and what they will tell you in a breach.

## Agile, AI, automation, and analytics

### Agile

Put security work on the same backlog as features, involve security people in the team, and improve in small steps after each finding and incident. Caution: security by "sprint 0" or a last-minute review misses the point; build it into the flow of work.

### AI

AI can help summarize alerts, review code for weaknesses, and draft incident notes, with a person responsible for decisions. It also brings risks: data leaking into external tools, insecure generated code, and manipulation of the model. Set rules about data and review AI-generated changes like any other. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate scanning, patching of routine systems, access reviews, and evidence capture, with logs and controls on the automation itself. Caution: automated remediation with broad privileges is a target; restrict and monitor it. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Track time to patch, exposure by severity, access review completion, security findings per change, and detection and response times. Caution: counting vulnerabilities closed can reward easy fixes, and incident counts can fall because detection is poor; combine measures and test detection. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Security at the end.** Reviews block releases and find problems late. Build checks into the pipeline and design.
- **Alert and finding overload.** Teams ignore scanners. Tune thresholds and fix repeated causes.
- **Excess access.** Accounts keep privileges they no longer need. Review and remove regularly.
- **No inventory.** You cannot tell what is affected by a new weakness. Generate and keep an inventory.
- **Untested incident plans.** Contacts are out of date. Rehearse and update.
- **Blame for reporting mistakes.** Incidents are hidden. Respond kindly and quickly.
- **Unowned risk acceptance.** Risks are accepted by default. Record who accepted and when to review.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Risk management | Informal | Main risks listed | Risk register with owners and decisions | Risks reviewed against incidents and tests | Risk managed across the organization and suppliers |
| Pipeline security | Manual review at end | Some scans | Standard checks on every change | Findings and fixes measured | Policy and checks adapted and automated with oversight |
| Access | Ad hoc | Basic reviews | Least privilege and multi-factor authentication standard | Access reviewed on evidence | Access adjusted continuously across systems |
| Detection and response | Reactive | Basic logging | Security monitoring and a rehearsed incident plan | Detection and response times measured | Coordinated response across teams and suppliers |

## Checklist

- [ ] We know our most sensitive information and who can reach it.
- [ ] Security checks run in the pipeline on every change.
- [ ] Access follows least privilege, with multi-factor authentication and regular review.
- [ ] We keep an inventory of software and track vulnerabilities.
- [ ] We have a security incident plan, with roles, contacts, and legal advice, and have rehearsed it.
- [ ] Staff can report mistakes safely.
- [ ] Risk acceptances are recorded with owner and review date.
- [ ] Rules exist for what data may be shared with AI tools.

## AI prompts

**Prepare a threat modeling session.**

```text
Our system: [describe components, data, and users]. Trust boundaries we know: [list].
List questions to ask in a one-hour threat modeling session, grouped by component and data flow, and note what we have not told you. Do not list specific attacks as facts about our system.
List what you are unsure of.
```

**Summarize vulnerability findings for prioritization.**

```text
Here is a list of vulnerability findings with severity, affected system, and whether the system is exposed to the internet: [paste, with sensitive details removed].
Group them, list those that combine high severity with exposure, and give one question per group about business impact. Do not claim any is exploitable.
List what you are unsure of.
```

**Draft a first-hour guide.**

```text
Our context: [type of organization, key systems]. Roles available: [list].
Draft a one-page first-hour checklist for a suspected data breach with steps for containment, evidence preservation, communication, and decisions that need legal or leadership input. Do not state legal obligations; list questions for our legal adviser instead.
List what you are unsure of.
```

## AI skills

- [security-testing](../../../../skills/security-testing/SKILL.md): use to plan security checks and tests.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): use to frame privacy questions for your legal adviser.
- [risk-register](../../../../skills/risk-register/SKILL.md): use to record risks, owners, and decisions.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): use to plan response, including security events.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): use to choose early-warning indicators.

## Key sources

- ISO/IEC 27001 (the standard itself): the requirements for an information security management system; read the current edition from the publisher.
- NIST, Cybersecurity Framework (nist.gov/cyberframework): a widely used framework from a United States agency.
- OWASP (owasp.org): community guidance on application security.
- Wikipedia, "Information security" and "ISO/IEC 27001": overviews of the field and the standard.

## References

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
