# Service Continuity Management

**Service continuity management prepares an organization to keep critical services running, or restore them within an agreed time, after a serious disruption; it works when recovery targets come from business impact, plans are rehearsed, and backups are proven by restoring them.**

## Why this matters

Most incidents are small: a failed disk, a bad release, an expired certificate. A few are not. A data centre loses power for a day. A cloud region fails. Ransomware encrypts the main systems. A supplier collapses. A pandemic keeps staff away from their offices. Events like these threaten the organization, not just a service, and they happen rarely enough that people forget to prepare for them.

Preparation is a form of insurance with a particular feature: its value shows only on the day you need it, and a plan that has never been tried probably will not work. Backups that were never restored turn out to be empty. A failover that was never rehearsed takes a day instead of an hour. A call list lists people who left. Teams that have practiced find the problems in practice, not in the crisis.

This topic explains how to decide what to protect, how to set recovery targets, how to plan and rehearse, and how to include AI and automation sensibly. In ITIL 4 the practice is service continuity management. In wider use you will also meet business continuity management, disaster recovery, and resilience. They overlap, and this topic describes how they fit. It connects to availability (Topic 3.11 — Availability, Capacity, and Performance), incident management (Topic 3.2 — Incident Management), and information security (Topic 3.13 — Information Security Management).

## Core concepts

**Service continuity.** In ITIL 4, ensuring that the availability and performance of a service are maintained at a sufficient level in the event of a disaster. The practice includes assessing risks and impacts, planning recovery, and rehearsing.

**Business continuity and disaster recovery.** Business continuity planning, described on Wikipedia, covers how an organization keeps critical functions running, or resumes them quickly, during and after a disruption. Disaster recovery is the IT part: restoring systems, data, and infrastructure. Business continuity asks "how do we keep serving customers?"; disaster recovery asks "how do we get the systems back?". ISO 22301 is an international standard for business continuity management systems, described on Wikipedia; its relationship to ISO/IEC 20000 is covered in Topic 1.8 — Service Management Frameworks and Standards.

**Business impact analysis (BIA).** A study of what happens to the organization if each function or service is unavailable for a given time. It identifies which services are critical and how quickly they must be restored. The analysis involves the business, not only IT, since only the business knows the impact of a lost hour or day.

**Recovery time objective (RTO).** The target maximum time to restore a service after a disruption. Wikipedia describes it under IT disaster recovery. It comes from the impact analysis: if an hour of downtime costs a great deal, the RTO is short and the solution is expensive.

**Recovery point objective (RPO).** The maximum acceptable amount of data loss, measured in time. An RPO of 15 minutes means that after recovery, no more than 15 minutes of data may be missing. It determines how often data must be copied.

**Costs and trade-offs.** Shorter RTOs and RPOs cost more: more redundancy, more replication, more testing. Show the cost of each option to the people who decide, and record the decision. See Topic 4.5 — Financial Management and FinOps.

**Backup and replication.** Backups are copies of data kept to restore it after loss or damage. Replication keeps a second copy continuously updated elsewhere. Wikipedia describes both. Replication does not replace backup: if corruption or encryption by ransomware is replicated, the copy is damaged too. Keep at least one backup that cannot be altered from the production environment, and test restoring it.

**Recovery sites and patterns.** Options range from a standby site that is always running, through one that can be started within hours, to restoring from backup into a new environment. Cloud services make several patterns easier, such as recreating infrastructure from code. See Topic 6.3 — Infrastructure as Code and GitOps. Wikipedia describes backup sites.

**Dependencies.** A critical service depends on others: identity, networks, DNS, suppliers, certificates, and people. Recovery plans must follow these dependencies and order the restoration. Many failed recoveries stall on a forgotten dependency, such as the system that stores the passwords needed to restore the others.

**Plans and playbooks.** Written, concise instructions for who does what, in what order, with whom to contact. They should be stored where they can be read when systems are down, including offline copies. Roles must be named, with deputies.

**Exercises.** Rehearsals range from a walk-through discussion of a scenario, to a simulation, to a live failover or restore. Wikipedia describes chaos engineering, in which failures are introduced deliberately and under control, to find weaknesses. Start small and safe, and increase realism over time. Record what happened and fix what you learn.

**Crisis management and communication.** A major disruption needs leadership decisions, communication with staff, customers, regulators, and the public, and coordination across functions. Wikipedia's article on crisis management describes the field. Decide who speaks and how in advance. See Topic 3.2 — Incident Management.

**Cyber events.** Ransomware and other attacks are now a leading cause of serious disruption. Wikipedia describes ransomware as malware that encrypts data and demands payment. Recovery from such an attack needs clean backups, isolation of affected systems, rebuilding trusted infrastructure, and coordination with security. Check the law and advice that apply to you, including on reporting; this guide gives no legal advice.

**Suppliers.** Your continuity depends on your suppliers'. Ask about their plans, and include them in exercises where possible. See Topic 3.14 — Supplier Management.

**How the lenses fit.** Continuity is where agile iteration meets preparedness: improve the plan after each exercise. AI can help draft plans and scenarios, under review, but cannot be relied on during a crisis. Automation rebuilds environments and runs failovers. Analytics informs impact analysis and tracks exercise results.

## Best practices

1. **Start with business impact.** Ask the business what each service's outage costs over minutes, hours, and days. Rank services, and set RTOs and RPOs accordingly. Revisit the analysis after major change.
2. **Protect the critical few first.** Concentrate effort on the services whose loss would seriously harm the organization. Provide lighter arrangements for the rest.
3. **Map dependencies.** For each critical service, list what it needs to run and to be restored, including identity, network, DNS, and suppliers. Plan the order of recovery.
4. **Keep an immutable, tested backup.** Keep at least one copy that cannot be changed or deleted from the production environment, and restore from it regularly to prove it works.
5. **Write short, usable plans.** Put roles, first steps, contacts, and decision points on a few pages. Keep copies offline and with people who need them.
6. **Name roles and deputies.** For each role in a crisis, name a primary and at least one alternate. Update the list when people change jobs.
7. **Rehearse in steps.** Begin with a discussion of a scenario, move to simulations, then to controlled live tests of restore and failover. Record times and problems.
8. **Fix what the exercise finds.** Treat findings as backlog items with owners and dates. Check at the next exercise that they were done.
9. **Include suppliers and customers.** Ask critical suppliers for their continuity arrangements and test the connections. Agree with customers what degraded service they can accept.
10. **Plan communications.** Prepare who informs whom, through which channels, with templates, including channels that work when your systems do not.

## Questions to discuss with your team

**Which three services would hurt us most if they were unavailable for a week, and how do we know?**
Ask the business, not only IT. Expect different answers, which is a useful starting point. Follow up by arranging a short impact discussion for each of the three.

**When did we last restore from backup, and how long did it take?**
Ask for the date and the result. Expect "we have never tried" or "only a test file". Follow up by scheduling a full restore of one important system in a safe environment.

**What does our recovery depend on that we have not tested, such as identity systems, DNS, or a person?**
Draw the chain for one service. Look for circular dependencies. Follow up by choosing one dependency to test.

**If our usual communication systems were down, how would we reach each other and our customers?**
Many plans assume email and chat. Ask about the call list and out-of-band channels. Follow up by testing a call tree.

**What would we do in the first hour of a ransomware attack, and who decides?**
Run a short scenario discussion. Expect disagreements about isolating systems and about contact with authorities. Follow up by writing a one-page first-hour guide with security.

**Where could AI help us prepare or respond, and where must we rely on prepared human plans?**
AI can draft scenarios, check plans for gaps, and summarize logs. During an outage the AI service may itself be unavailable. Ask what the plan assumes. Follow up by checking that critical steps do not depend on an AI service.

## In practice: a service management example

A regional electricity distributor's control-room systems, which show the state of the network to operators, must be restored within two hours of a failure. The distributor's disaster recovery plan says so. It was written four years ago and last tested as a paper exercise.

A new service continuity manager asks for a live test. The team agrees to restore the control-room application in a separate environment from the previous night's backup, with the operations manager observing. The restore takes eleven hours rather than two. Three problems emerge: the backup includes the application's files but not its configuration database, which is held by another team; the passwords required for the restore are stored in a vault that is part of the same data centre; and the person who knows the network settings for the recovery site is on long leave and has no deputy.

The team fixes these over three months. It adds the configuration database to the backup schedule, creates a break-glass credential store held offline in a sealed envelope and in a separate cloud account, and trains two additional engineers on the recovery site. A second test restores the application in 2 hours 40 minutes. The third, with a deliberately unannounced start, takes 1 hour 50 minutes.

What changes: the target is met in practice, and the plan is a document people have used. What remains hard: the test used a copy of production data and did not include the connections to field equipment, which can only be tested with the grid operator; the organization has not rehearsed the loss of the whole data centre, only one application; and the cost of keeping the recovery site is questioned each year. The manager keeps the exercise calendar and presents costs against the impact analysis.

## Four perspectives

### Product and delivery teams

Make recovery part of the design: rebuild from code, back up data and configuration, avoid hidden dependencies. Take part in exercises and fix what they find.

### Service and operations teams

Know your role and your deputy, keep runbooks current, and rehearse restores and failovers. Record how long things really take and tell the owners.

### Leadership and governance

Decide recovery targets with the business and fund what they require. Take part in exercises, including decisions and communication. Ask to see results from tests, not only plans.

### Customers and users

Ask what continuity arrangements protect the services you rely on, and agree what degraded service you can accept. Keep your own contingency for critical needs.

## Agile, AI, automation, and analytics

### Agile

Improve continuity in small steps: one dependency, one restore test, one fix at a time, reviewed with stakeholders. Caution: do not postpone all continuity work to a single big project; rehearse early and often.

### AI

AI can help draft scenarios, check plans for gaps, and summarize logs after an exercise, with a person reviewing. Name an owner. Caution: an AI assistant may be unavailable in a crisis or may give unreliable instructions; keep essential procedures in plain, tested documents. See Topic 5.1 — AI in Service Management.

### Automation

Automate environment rebuilds, backup verification, and failover, with logs and safeguards, and test them regularly. Caution: automation can spread damage quickly, such as deleting backups with the production data; protect backup systems with separate credentials and controls. See Topic 6.3 — Infrastructure as Code and GitOps.

### Analytics

Track backup success, restore test times against RTO, RPO achieved, exercise findings closed, and dependency coverage. Caution: a high backup success rate says nothing about whether data can be restored; count restores. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Plans never tested.** They fail when needed. Rehearse and restore regularly.
- **Backups never restored.** They are empty or incomplete. Test restores and verify content.
- **Hidden dependencies.** Recovery stalls on identity or DNS. Map and test dependencies.
- **Backups that attackers can change.** Ransomware encrypts them. Keep an immutable copy.
- **IT-only planning.** The business is not involved. Run an impact analysis with business owners.
- **Plan lives only on the failed system.** Nobody can read it. Keep offline copies.
- **No deputies.** One person holds the knowledge. Name alternates and train them.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Impact and targets | Not defined | Critical services listed | RTOs and RPOs set from business impact | Targets reviewed with cost and results | Targets coordinated across the enterprise and suppliers |
| Backup and recovery | Backups unverified | Backups run | Restores tested and timed | Restore performance tracked and improved | Recovery automated and tested continuously |
| Plans | None or outdated | Written for main services | Concise plans with named roles and deputies | Plans updated after each exercise | Plans integrated across functions, suppliers, and customers |
| Exercises | None | Paper walk-throughs | Regular simulations and live restores | Findings tracked to closure | Exercises include partners and realistic scenarios |

## Checklist

- [ ] We completed a business impact analysis for our critical services.
- [ ] Each critical service has an RTO and RPO agreed with its owner.
- [ ] Dependencies, including identity and DNS, are mapped.
- [ ] At least one backup is immutable and restores have been tested.
- [ ] Plans are short, current, and stored offline too.
- [ ] Roles and deputies are named.
- [ ] We run exercises regularly and track findings to closure.
- [ ] Suppliers' continuity arrangements are known and tested where possible.

## AI prompts

**Check a plan for gaps.**

```text
Here is our continuity plan for [service]: [paste]. Here is the list of its dependencies: [paste].
List dependencies that the plan does not mention, steps that rely on a person without a named deputy, and steps that assume a system that may be down. Do not rewrite the plan.
List what you are unsure of.
```

**Design a scenario exercise.**

```text
Our context: [type of organization, key services]. Scenario theme: [for example, ransomware, data centre loss].
Draft a 90-minute discussion exercise with a timeline of events, six decision points, questions for each role, and what to record. Do not use real names or systems unless I give them.
List what you are unsure of.
```

**Summarize restore test results.**

```text
Here are the notes from a restore test: [paste with times and problems].
List what took longest, what failed, the dependencies discovered, and the actions to consider, with the owner role for each. Do not invent causes.
List what you are unsure of.
```

## AI skills

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md): use to plan how critical functions continue.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md): use to plan restoring systems and data.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): use to design and run recovery tests.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): use to plan communication during a disruption.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): use to test failure behaviour safely.

## Key sources

- ISO 22301, Security and resilience — Business continuity management systems: the international standard; read the current edition from the publisher.
- PeopleCert, ITIL certification pages: the owner's description of the service continuity management practice.
- Wikipedia, "Business continuity planning" and "IT disaster recovery": overviews of the ideas and terms.
- Wikipedia, "Chaos engineering": the practice of testing failure deliberately.

## References

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
