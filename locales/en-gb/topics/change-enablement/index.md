# Change Enablement

**Change enablement makes sure that changes to services are made safely and quickly; it assesses risk, assigns authority to the people closest to the change, and moves routine checks into the pipeline, reserving human review for the changes where judgement is needed.**

## Why this matters

Changes cause incidents. A configuration edit, a code release, a certificate renewal, a firewall rule: any of these can bring a service down. Most organisations learn this the hard way, and respond with a control: a form, an approval, a meeting, a freeze. The control reduces some risk and adds delay, and the delay encourages people to bundle changes into larger batches, which are riskier.

The traditional form of the control is the change advisory board (CAB), a group that reviews proposed changes. Boards can add real value when they bring a broad view to risky changes. They also become a bottleneck when they review every change, including routine ones that have succeeded a thousand times. Research on software delivery reported in the book *Accelerate*, by Nicole Forsgren, Jez Humble, and Gene Kim, found that heavyweight external approval was not associated with better stability and was associated with slower delivery; peer review and automated checks were associated with better results. The data come from surveys and have their own limits, but the direction is consistent with experience in many teams.

ITIL 4 renamed the practice "change enablement", to signal that the aim is to enable beneficial change by ensuring that risks are properly assessed, authorise changes to proceed, and manage the change schedule. This topic shows how to do that with different routes for different kinds of change, and how to build evidence into the work. It builds on continuous delivery (Topic 2.2 — Continuous Delivery) and connects to release management (Topic 3.5 — Release and Deployment Management) and configuration management (Topic 4.4 — Configuration Management).

## Core concepts

**Change.** In ITIL 4, the addition, modification, or removal of anything that could have a direct or indirect effect on services. The scope is wide: software, infrastructure, configuration, documents, suppliers, and processes. Wikipedia's articles on change management and on change control describe the idea in IT and engineering.

**Change enablement versus change management.** "Change management" is also used for organisational change, meaning the human side of transformation (see Topic 8.3 — Organisational Change and Adoption). "Change enablement" in ITIL refers to controlling changes to services and products. This guide uses the ITIL 4 term for the practice described here.

**Types of change.** ITIL 4 describes three:

| Type | Description | Typical route |
|---|---|---|
| Standard | Low risk, well understood, pre-authorised, repeated | Follows a documented procedure; no individual approval |
| Normal | Needs assessment and authorisation | Assessed and authorised by the right change authority |
| Emergency | Must be done urgently, for example to restore service or fix a critical vulnerability | Expedited authorisation with a review afterward |

**Change authority.** The person or group that authorises a change. ITIL 4 stresses that authority should be assigned to the level appropriate to the risk, which for low-risk changes is often a peer or the team itself. Higher-risk changes go higher. Wikipedia's article on the change advisory board describes the traditional model.

**Risk assessment.** Estimating the likelihood and impact of the change failing. Factors include the size of the change, the criticality of the service, the number of users, the testing done, the ability to roll back, and the track record of similar changes. Wikipedia's articles on risk assessment and risk management describe general methods. A simple, consistent checklist works better than an elaborate score nobody trusts.

**Change schedule.** A calendar showing planned changes, so that conflicts and clashes with critical business periods can be seen. For teams that release many times a day, the schedule shrinks to exceptions, such as freeze periods, and to large changes that need coordination.

**Peer review.** Another competent person reviews the change before it is made, as in code review. Wikipedia describes peer review and code review. It is cheap, fast, and brings relevant knowledge, and it supports separation of duties where required.

**Automated controls in the pipeline.** Tests, static analysis, security scans, and policy checks run on every change, and the pipeline records what ran and the results. This produces better evidence than a meeting, because it is consistent and tied to the actual change. Wikipedia's articles on test automation and static programme analysis describe some of the techniques. See Topic 6.4 — Pipelines and Automated Change.

**Separation of duties.** A control in which no single person can complete a risky action alone, for example by requiring that the person who writes a change is not the only one who approves it. Regulation or audit may require it. Wikipedia describes separation of duties. Pipelines can enforce it by requiring a second reviewer and recording both.

**Rollback and recovery.** The ability to reverse a change or roll forward quickly reduces risk. Data changes are harder to reverse than code changes. See Wikipedia's article on rollback in data management.

**Emergency changes.** Genuine emergencies need speed. A defined route, with a named authority, minimal paperwork, and a review afterward, prevents "emergency" from becoming the default way to avoid the process.

**Evidence and audit.** Regulation such as the Sarbanes–Oxley Act in the United States, and similar rules in other jurisdictions, has driven requirements for control over changes to financial systems. Requirements differ by jurisdiction and industry; check what applies to you and ask your auditor what evidence satisfies it. This guide gives no legal advice.

**How the lenses fit.** Change enablement is where agile pace meets control. Agile practice suggests small, frequent changes and early involvement of stakeholders. AI can help assess risk and draft change descriptions, under review. Automation provides the pipeline controls. Analytics shows change failure and lead time.

## Best practices

1. **Classify changes by type and risk.** Define standard, normal, and emergency changes, with examples for each. Review the classification regularly, and move changes to "standard" when evidence supports it.
2. **Pre-authorise standard changes.** For repeated, low-risk changes, agree the procedure once, with the risk owner, and let teams carry them out without individual approval. Review their success rate.
3. **Put authority close to the work.** Let peer review authorise low-risk changes. Escalate higher-risk changes to people who understand the service and its dependencies.
4. **Use the board for the changes that need it.** Keep a change advisory function for high-risk or cross-cutting changes. Prepare the material in advance and decide quickly.
5. **Build controls into the pipeline.** Require tests, scans, and a second reviewer in the tooling, and record the evidence automatically. Show auditors the pipeline, not a spreadsheet.
6. **Make changes small.** Break large changes into smaller steps that can be released and checked separately. Smaller changes carry less risk and are easier to reverse.
7. **Plan the way back.** Require a rollback or roll-forward plan for each normal change, and rehearse it for important ones.
8. **Keep a visible schedule.** Show planned changes and freeze periods where teams can see them, and highlight conflicts with major events. For frequent small changes, show only what needs coordination.
9. **Define and police emergencies.** Write the criteria and the route. Review each emergency change afterward, and ask why it was necessary and whether the normal route could be improved.
10. **Learn from failed changes.** Review changes that caused incidents, and adjust risk rules, tests, or the checklist. Track the change failure rate and look at its causes.

## Questions to discuss with your team

**Which of our approvals have never rejected or altered a change, and what do they cost in time?**
This tests whether controls add value. Ask for data on the last six months. You may find approval steps with no recorded effect. Follow up by asking what risk each addresses and whether another control could address it.

**What changes do we make most often, and which could be pre-authorised as standard changes?**
List the top ten by volume. Expect many to be low risk and repetitive. Involve the risk owner. Follow up by choosing two for a trial and agreeing success criteria.

**How do we decide which changes need a human review, and who does it?**
Criteria are often implicit. Ask what would make a change "risky" in our context. Follow up by drafting a short checklist and trying it on recent changes.

**What would our auditor accept as evidence that a change was tested, reviewed, and approved?**
Ask the auditor directly rather than guessing. Expect that records from the pipeline may be acceptable if they show who, what, and when. Follow up by agreeing a sample of pipeline records and having the auditor review them.

**When did a change last go wrong, and what in our process allowed it?**
This links the practice to real failures. Look for missing tests, missing rollback, or poor information. Avoid blaming the person. Follow up by agreeing one control to add or improve.

**Where could AI help assess change risk, and what would we want to check by hand?**
AI can read a change description and similar past failures to suggest risk factors. It can also overlook or invent. Ask who owns the tool and how its suggestions are verified. Follow up by comparing AI risk ratings with the outcomes of past changes.

## In practice: a service management example

A regional health authority's IT department runs a weekly change advisory board, attended by about 20 people, that reviews every change. Engineers say they wait up to eight days for approval; the board says it catches problems. The authority's patient records system had two incidents last year caused by unreviewed configuration changes that were made as "emergencies" to avoid the board.

The change manager analyses six months of records: 640 changes were reviewed, 590 were approved as submitted, 38 were returned for missing information, and 12 were altered or rejected for substantive reasons. Of the 590, 41 caused incidents, almost all among changes that were also made urgently. The manager proposes three routes. Standard changes, such as adding a user to a group or renewing a certificate, follow documented procedures and need no approval. Normal changes to systems classified as lower risk are reviewed by a peer from another team and checked by the pipeline. Higher-risk changes to the patient records system go to a smaller board that meets twice a week and sees only these.

The clinical safety officer asks for evidence that peer review happens. The manager shows a pipeline report listing every change with the reviewer's name, the tests run, and the result. The officer agrees to a six-month trial with a monthly review of failed changes.

What changes: median approval time falls from five days to under one for most changes, and the use of "emergency" drops sharply. What remains hard: some legacy systems cannot run automated tests, so their changes still need manual checks; the peer review depends on engineers having time, and teams under pressure review superficially; and the monthly review finds two changes where the reviewer had no relevant knowledge. The manager adds a rule that the reviewer must be someone who has worked on the system.

## Four perspectives

### Product and delivery teams

Make changes small, add tests, and plan rollback. Work with the change practice to define standard changes and pipeline evidence. Treat peer review as real review, not a signature.

### Service and operations teams

Help assess operational risk, keep the schedule, and share what you know about dependencies. Review failed changes with the teams, and keep emergency changes rare and examined.

### Leadership and governance

Delegate authority according to risk, ask for evidence from the pipeline, and do not require a meeting for routine change. Protect time for peer review. Review emergency change numbers.

### Customers and users

You should hear about changes that affect you, with enough notice and a clear description. Tell the provider about periods when change is risky for you. Report problems after a change promptly.

## Agile, AI, automation, and analytics

### Agile

Small, frequent changes with stakeholders informed are safer than large, rare ones. Involve operations and risk owners in designing the change routes, and improve them with feedback. Caution: do not drop controls in the name of agility; replace them with better ones.

### AI

AI can help draft change descriptions, suggest risk factors from similar past changes, and check descriptions for missing information, with a person responsible for the decision. Caution: an AI risk score may be treated as an authority; show it as a suggestion and track how often it was right. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Automate pipeline checks, evidence capture, schedule conflict detection, and standard change execution, with logs and rollback. Caution: automated approval of changes is only as good as its rules; review the rules and sample approved changes. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Track change volume by type, lead time, change failure rate, and emergency changes, and look at the causes of failures. Caution: a low failure rate may come from not recording failures, and approval counts can be gamed by splitting or batching changes; check against incident data. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Reviewing every change the same way.** Routine changes wait. Classify by risk and pre-authorise standard changes.
- **A board without evidence.** Members approve what they cannot assess. Prepare information, and send only changes that need judgement.
- **Emergency as a bypass.** Urgency is declared to avoid review. Define it, and review each use.
- **Superficial peer review.** A signature without reading. Require a qualified reviewer and sample the reviews.
- **Dropping controls without replacement.** Failures rise and auditors object. Meet the aim of each control in the pipeline.
- **No rollback plan.** A failed change prolongs an incident. Require and rehearse recovery.
- **Counting changes approved as success.** Volume rises and quality does not. Track failures and incidents caused.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Change types and authority | One route for everything | Emergency route exists | Standard, normal, and emergency defined with authority by risk | Routes reviewed with data | Routes adapt automatically by risk across services |
| Evidence | Forms and meetings | Some records from tools | Pipeline records for most changes | Evidence sampled and audited | Evidence continuous across tools and suppliers |
| Risk assessment | Intuition | Informal checklist | Consistent checklist and criteria | Criteria tuned from failure data | Risk assessed with data and automation, with human review |
| Learning | Blame | Occasional reviews | Failed changes reviewed with actions | Failure causes tracked and reduced | Learning shared across teams |

## Checklist

- [ ] We have standard, normal, and emergency change types with examples.
- [ ] Standard changes are pre-authorised with a documented procedure.
- [ ] Authority for each type matches the risk.
- [ ] Peer review is done by someone with relevant knowledge.
- [ ] Pipeline controls record tests, reviewers, and results.
- [ ] Every normal change has a rollback or roll-forward plan.
- [ ] Emergency changes are reviewed afterward.
- [ ] We track change failure rate and learn from failed changes.

## AI prompts

**Check a change description for gaps.**

```text
Here is a draft change description: [paste]. Our required fields are: [list].
List which required fields are missing or unclear, and list five questions a reviewer would ask. Do not rewrite the change or rate its risk.
List what you are unsure of.
```

**Look for patterns in failed changes.**

```text
Below is a list of changes that caused incidents, with dates, type, size, whether tested, and whether rolled back: [paste list, names removed].
List common features across them and questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

**Propose candidates for standard changes.**

```text
Here are our most frequent changes in the last six months, with counts and failure counts: [paste data].
List which look like candidates for pre-authorisation, with the data you used and the questions we should ask the risk owner. Do not claim any is safe.
List what you are unsure of.
```

## AI skills

- [change-request](../../../../skills/change-request/SKILL.md): use to design a clear, light change record.
- [enterprise-change-management](../../../../skills/enterprise-change-management/SKILL.md): use for the organisational side of change.
- [risk-register](../../../../skills/risk-register/SKILL.md): use to record and review risks from changes.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): use to check evidence against control requirements.
- [security-testing](../../../../skills/security-testing/SKILL.md): use to plan security checks for the pipeline.

## Key sources

- Nicole Forsgren, Jez Humble, and Gene Kim, *Accelerate* (2018): research on delivery practices, including change approval.
- DORA (dora.dev): ongoing research and reports on software delivery performance.
- PeopleCert, ITIL certification pages: the owner's description of the change enablement practice.
- Wikipedia, "Change management" and "Change control": overviews of the ideas.

## References

1. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
2. Change control — Wikipedia — https://en.wikipedia.org/wiki/Change_control
3. Change-advisory board — Wikipedia — https://en.wikipedia.org/wiki/Change-advisory_board
4. Risk assessment — Wikipedia — https://en.wikipedia.org/wiki/Risk_assessment
5. Peer review — Wikipedia — https://en.wikipedia.org/wiki/Peer_review
6. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
7. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Static programme analysis — Wikipedia — https://en.wikipedia.org/wiki/Static_program_analysis
10. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
11. DORA research — DevOps Research and Assessment — https://dora.dev/research/
