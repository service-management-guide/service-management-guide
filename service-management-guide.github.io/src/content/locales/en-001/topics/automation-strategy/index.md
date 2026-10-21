# Automation Strategy

**An automation strategy decides what to automate and what not to, in what order, with what controls; it follows the ITIL principle "optimize and automate" by simplifying first, automating stable repeated work with logs and rollback, and treating each automation as a product that needs an owner and upkeep.**

## Why this matters

Automation is the oldest lever in technology operations, and the one most often pulled without a plan. Someone writes a script to save an hour, and it works. Someone else writes another. Within two years a team has hundreds of scripts, scheduled jobs, and workflow rules, written by people who have since left, understood by nobody, and depended on by everything. A quiet failure in one of them takes a service down, and the team learns what it automated by finding what stopped.

The opposite error is also common. A team sets a target to "automate 80 percent of tasks" and automates things that happen twice a year, or that depend on judgment, or that change every month. The effort never pays back, and the automation has to be maintained forever. Meanwhile the work that would have repaid automation tenfold remains manual because it is dull and nobody asked about it.

A strategy avoids both. It picks what to automate by evidence of return, sequences work so that simplifying comes before scripting, and treats the result as something to be owned and maintained. It also reckons with a real human cost: when machines handle the routine, people are left with the hard exceptions and fewer chances to practice the basics. This topic sets out those choices. It is the entry point to Part 6 and relates to workflow automation (Topic 6.2 — Workflow Automation and Orchestration), infrastructure as code (Topic 6.3 — Infrastructure as Code and GitOps), pipelines (Topic 6.4 — Pipelines and Automated Change), self-service (Topic 6.5 — Self-Service and Automated Fulfilment), and runbook automation (Topic 6.6 — Runbook Automation and Auto-Remediation). Its link to AI is in Topic 5.1 — AI in Service Management.

## Core concepts

**Automation.** The use of technology to perform tasks with reduced human involvement. Wikipedia describes automation broadly across industry. In service management, it ranges from a scheduled script to workflows that span tools, to systems that decide and act. The word covers very different things, so name the kind in each discussion.

**Optimize, then automate.** ITIL 4's guiding principle "optimize and automate" says to make sure work is as effective as it can be, then use technology to achieve more (see Topic 1.5 — ITIL Guiding Principles). The order is deliberate. Automating a confusing or wasteful process fixes its confusion and waste in place and makes it harder to change. Lean thinking reaches the same view (see Topic 2.4 — Lean and Kaizen).

**What makes a task a good candidate.** Look for work that is frequent, well understood, rules-based, error-prone when done by hand, and stable. Wikipedia's descriptions of business process automation and robotic process automation (RPA) describe common targets, such as moving data between systems. Poor candidates are rare, changing, ambiguous, or dependent on judgment or empathy.

**Return on automation.** A rough rule is to compare the time saved per year, plus the value of fewer errors and faster response, with the cost to build, run, and maintain the automation. Wikipedia describes return on investment and cost–benefit analysis. Include maintenance: automations break when the systems around them change. State assumptions and ranges, since the numbers are estimates.

**Where to look.** Start with data. Process mining, described on Wikipedia, uses event logs to show how work actually flows. Ticket and request data show which tasks recur. Ask the people who do the work what bores or frustrates them. The Pareto principle suggests that a small share of task types account for most of the volume.

**Levels of automation.** From manual, through assisted (a tool prepares, a person acts), to conditional (the system acts and a person approves), to autonomous within limits. Choose the level per task by the cost of an error and the ability to undo it. See Topic 5.5 — Agentic AI and Human Oversight.

**Controls.** Every automation needs a log of what it did and when, limits on what it can touch, a way to stop it, and a way to reverse its effects. Wikipedia describes fail-safe design: when a system fails, it should fail in a way that causes least harm. See Topic 3.4 — Change Enablement.

**Automation as a product.** An automation has users, an owner, a backlog, documentation, tests, and a lifecycle. Without an owner it decays. Wikipedia's article on technical debt applies: scripts written in haste and never maintained become liabilities. See Topic 2.8 — Product and Service Ownership.

**Standard procedures first.** A written, tested procedure, such as a runbook or standard operating procedure (described on Wikipedia), is the best specification for automation. If you cannot write down what the person does, you are not ready to automate it. See Topic 3.9 — Knowledge Management.

**Tools and platforms.** Options range from shell scripts and schedulers such as cron, through workflow and orchestration platforms, to RPA and low-code platforms. Wikipedia describes each. Choose the simplest tool that is maintainable, and prefer tools with version control, testing, and audit built in. See Topic 6.2 — Workflow Automation and Orchestration.

**Skills and the ironies of automation.** In a well-known 1983 paper, the researcher Lisanne Bainbridge described ironies of automation: when automation handles most of a task, the person is left with the hard, rare cases, yet has less practice and less feel for the system. Wikipedia describes the paper. The practical lesson is to keep people practicing, show them what the automation does, and design handovers so that a person can step in.

**Bus factor and knowledge.** Automation can concentrate knowledge in the author. Wikipedia describes the bus factor. Review, document, and share, so that more than one person can maintain each automation.

**Security.** Automations hold credentials and have power. A compromised automation is an attractive target. Give each its own identity with minimum permissions, store secrets safely, and review access. See Topic 3.13 — Information Security Management.

**People and trust.** Staff may fear that automation threatens their jobs, or that it will be blamed for failures. Involve them in choosing what to automate, say how time saved will be used, and recognize the work of building and maintaining automation. See Topic 8.3 — Organizational Change and Adoption.

**How the lenses fit.** Automation is the third lens. Agile practice suggests automating in small steps and learning from each. AI adds a way to decide and to draft; automation acts. Analytics identifies candidates and shows whether automation delivered.

## Best practices

1. **Start from data and pain.** Look at ticket and request volumes, process mining where available, and what staff find tedious. Choose by evidence, not by what is fashionable.
2. **Simplify first.** Remove steps and approvals that add no value before you script them. Ask what the process would be if you started again.
3. **Write the procedure down.** Document the steps, inputs, outputs, and exceptions. Test the procedure by having someone else follow it. Use it as the specification.
4. **Estimate return honestly.** Compare time saved with build and maintenance cost, using ranges. Count error reduction and speed where they matter. Drop candidates that do not pay back.
5. **Automate in small steps.** Begin with one part, such as gathering data for a person, then extend. Release often and learn.
6. **Choose the level of autonomy by risk.** Let low-risk reversible tasks run alone with logs, and keep a person in the loop for consequential or irreversible ones.
7. **Build in logs, limits, and rollback.** Record every action, cap how much one run can change, and write the way back. Test it.
8. **Give each automation an owner and a home.** Keep code in version control with review and tests, document it, and list it in a register with its owner and what depends on it.
9. **Keep skills alive.** Show people what the automation does, rehearse manual fallback for important tasks, and rotate people through the hard cases.
10. **Review and retire.** Check regularly which automations are used and which fail, fix or remove them, and measure the benefit against the estimate.

## Questions to discuss with your team

**Which tasks do we repeat most often, and which would we most like never to do again?**
Ask everyone. Expect account setup, reports, and data fixes. Follow up by choosing three and estimating hours per month.

**For our top candidate, what would the process look like if we simplified it before automating?**
Draw it. Expect steps that nobody can justify. Follow up by removing one before writing any code.

**What automations do we already depend on, who owns each, and what happens if one fails silently?**
Make a list. Expect surprises and orphans. Follow up by naming owners and adding a check for failure.

**Which of our tasks should remain manual because they need judgment or empathy?**
Discuss. Expect agreement on sensitive matters and disagreement at the edge. Follow up by writing the boundary and who may change it.

**How will we keep the skills to do the task by hand if the automation is unavailable?**
Ask for the last time someone did it manually. Expect long ago. Follow up by planning a periodic rehearsal.

**How will we use the time automation frees, and have we told the team?**
This builds trust. Expect uncertainty and some fear. Follow up by agreeing what the saved time will go to and saying it openly.

## In practice: a service management example

A national registry of births, deaths, and marriages runs a small IT team of ten that supports 600 staff. A manager has proposed "automating everything possible" and has a list of 120 candidate tasks. The service lead suspects that most would not pay back and asks for a ranking.

The team spends two weeks collecting data. From six months of tickets, they find that 70 percent of volume falls into eight task types, led by new-starter accounts, password resets, shared mailbox changes, and monthly report production. They estimate hours per month for each, and ask the people involved what goes wrong. New-starter accounts, at 40 hours a month, involve eleven manual steps, of which three are duplicated and two are approvals that have never been refused. They simplify to eight steps before writing anything.

They automate in stages. First, a script gathers the information and creates the accounts, with a technician reviewing the result. After two months of error-free runs, the script runs unattended for standard roles, with a log and a daily check, and a technician handles non-standard roles. Password resets move to the identity system's self-service route, which the vendor provides. The monthly report, which takes 12 hours, depends on data from three systems in different formats, and the team decides not to automate it until the data sources are fixed.

Each automation is registered, with an owner, a repository, and a rollback. One technician is assigned to rotate through manual handling each quarter, so that the skill is kept. The manager agrees that saved time will go to a backlog of overdue upgrades, and says so at a team meeting.

What changes: about 70 hours a month are freed, and new starters have working accounts on day one. What remains hard: the script has to be updated whenever the directory structure changes, which happened twice in the first quarter; two technicians are the only ones who understand it; and the manager still asks why the other 110 candidates were not done. The lead shows the data and agrees to revisit the list each half-year.

## Four perspectives

### Product and delivery teams

Build for automation: expose clear interfaces, avoid manual steps in release and deployment, and provide runbooks that others can script. Own the automations you create.

### Service and operations teams

Know your repeated tasks, simplify them, and automate the stable ones with logs and rollback. Keep manual skills alive, and register what you automate with an owner.

### Leadership and governance

Ask for evidence of return and for controls, not a count of automations. Say how time saved will be used. Fund maintenance and skills as well as building.

### Customers and users

You benefit from faster, more consistent service, and you should still be able to reach a person for exceptions. Tell the provider where automation failed to handle your case.

## Agile, AI, automation, and analytics

### Agile

Automate in small increments, with the people who do the work, and review results. Treat the automation backlog as part of the improvement backlog. Caution: speed of delivering automations can outrun the ability to maintain them; limit work in progress and retire old ones.

### AI

AI can help find candidates by clustering tasks, draft scripts and procedures, and decide within limits what to do. Each AI-assisted automation needs the same owner, tests, and controls. Caution: generated scripts can contain errors or insecure patterns; review and test them like any other code. See Topic 5.1 — AI in Service Management.

### Automation

This topic is the lens itself: choose, simplify, build with controls, own, and review. Caution: automation concentrates power and hides complexity; keep logs readable and give people the means to understand and stop it.

### Analytics

Use ticket data, process mining, time and error data, and results after automation. Caution: estimates of hours saved are often inflated, and measures such as "number of automations" reward volume; track actual time freed, errors, and failures. See Topic 7.6 — Process and Value Stream Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Automating a mess.** The confusion is preserved. Simplify first.
- **Automation by target.** Tasks are chosen for the count. Choose by return and need.
- **Orphaned scripts.** Nobody owns or understands them. Register, assign owners, and review.
- **No logs or rollback.** A failure cannot be traced or undone. Build both in.
- **Skills fade.** Nobody can do the task by hand. Rehearse and rotate.
- **Hidden maintenance cost.** The automation breaks with every change nearby. Count upkeep in the return.
- **Fear and secrecy.** Staff resist. Involve them and say how gains will be used.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Selection | Ad hoc scripts | Candidates listed | Candidates chosen by data and return | Results compared with estimates | Portfolio chosen and rebalanced by value and risk |
| Controls | None | Some logging | Logs, limits, and rollback standard | Controls tested and audited | Controls built into shared platforms |
| Ownership | Individuals | Known authors | Register with owners, version control, and review | Upkeep and failures tracked | Ownership coordinated across teams |
| People | Fear or neglect | Awareness | Skills kept alive and benefits shared | Skills and workload reviewed | Roles and skills planned with automation across the organization |

## Checklist

- [ ] We chose candidates using data on volume, errors, and effort.
- [ ] We simplified each process before automating it.
- [ ] Each automation follows a written, tested procedure.
- [ ] We estimated return including maintenance.
- [ ] Each automation has an owner, version control, and a register entry.
- [ ] Logs, limits, and rollback are built in and tested.
- [ ] We keep manual skills alive for important tasks.
- [ ] We told the team how the time saved will be used.

## AI prompts

**Rank candidates from ticket data.**

```text
Here is a summary of ticket categories with counts per month and average handling time: [paste].
Compute hours per month for each category, rank them, and for the top eight list questions to ask about whether the task is stable, rules-based, and safe to automate. Do not recommend automating any.
List what you are unsure of.
```

**Draft a specification from a procedure.**

```text
Here is the written procedure for a task: [paste].
List the inputs, steps, decision points, outputs, and exceptions, and mark each step as "clear", "needs judgment", or "unclear". List questions to answer before automation. Do not write code.
List what you are unsure of.
```

**Review an automation for controls.**

```text
Here is a description of an automation: what it does, what it can change, who owns it, how it runs: [paste].
List missing controls from this set: logging, limits, rollback, stop switch, owner, permissions, tests, and failure alerts, quoting the description for each you consider present. Do not assume controls that are not stated.
List what you are unsure of.
```

## AI skills

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyze steps and waits before automating.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to estimate return on an automation.
- [runbook](../../../../skills/runbook/SKILL.md): use to write the procedure that becomes the specification.
- [kaizen](../../../../skills/kaizen/SKILL.md): use to simplify before automating.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to find the steps worth automating.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of ITIL guidance, including optimize and automate.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): the classic paper on automation and human skill.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on eliminating toil, free at sre.google.
- Wikipedia, "Automation" and "Business process automation": overviews of the ideas.

## References

1. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
2. Business process automation — Wikipedia — https://en.wikipedia.org/wiki/Business_process_automation
3. Robotic process automation — Wikipedia — https://en.wikipedia.org/wiki/Robotic_process_automation
4. Ironies of Automation — Wikipedia — https://en.wikipedia.org/wiki/Ironies_of_Automation
5. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Standard operating procedure — Wikipedia — https://en.wikipedia.org/wiki/Standard_operating_procedure
10. Fail-safe — Wikipedia — https://en.wikipedia.org/wiki/Fail-safe
11. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
