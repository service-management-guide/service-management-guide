# Site Reliability Engineering

**Site reliability engineering (SRE) treats operations as an engineering problem: it sets measurable reliability targets, spends an error budget on change, removes repetitive toil with software, and learns from failures without blame; it expresses many service management practices in engineering terms.**

## Why this matters

Every service has a tension between change and reliability. Customers want new features and they want the service to work. Teams that push change quickly cause outages, and teams that guard stability slow everything. Without a way to weigh the two, the argument is settled by whoever is loudest, or by the last incident.

Site reliability engineering offers a way to make the trade-off explicit. It starts from the idea that perfect reliability is neither possible nor wanted: users cannot tell the difference between 99.999 percent and 99.99 percent availability when their own device and network fail more often than that, and each extra nine costs far more. So the team agrees a target that matches what users need, measures it, and uses the room between the target and perfection as a budget for risk.

SRE began at Google in the early 2000s and is described in books that the company has published online. Many other organizations have adopted parts of it. For service management, its value is that it gives concrete, engineering-style versions of ideas ITIL calls service level management, availability management, and continual improvement. This topic explains the main ideas and cautions against copying them without the context that made them work.

## Core concepts

**What SRE is.** Wikipedia describes site reliability engineering as a set of principles and practices that apply aspects of software engineering to IT infrastructure and operations, in order to create scalable and reliable systems. An SRE team usually includes people with software and systems skills who automate operations work and who take part in design for reliability.

**Service level indicator (SLI).** A measure of some aspect of the service as users experience it, such as the proportion of requests that succeed, or the proportion that complete within 300 milliseconds. A good indicator reflects what users care about, not what is easy to measure.

**Service level objective (SLO).** A target for an indicator over a period, for example "99.9 percent of requests succeed in a rolling 30 days". The objective is an internal goal agreed between the people who run the service and the people who depend on it. Wikipedia describes service level objectives as part of service level agreements.

**Service level agreement (SLA).** A contract with consequences, often financial, if the service falls below an agreed level. An SLA usually sets a looser target than the internal SLO, so the team has warning before a breach. See Topic 3.7 — Service Level Management.

**Error budget.** The permitted amount of unreliability: if the objective is 99.9 percent, the budget is the remaining 0.1 percent. While there is budget left, the team can take risks, such as releasing faster. When the budget is spent, the team slows change and invests in reliability. The budget makes the trade-off between reliability and change a shared, measurable decision rather than an argument.

**Toil.** Work that is manual, repetitive, automatable, tactical, and that grows with the service without adding lasting value. Examples include manually restarting a service, hand-processing the same type of request, and acknowledging noisy alerts. SRE practice limits the share of time spent on toil, often to around half, and spends the rest on engineering work that reduces it.

**Monitoring and alerting.** Alerts should be actionable and tied to symptoms users feel, with a clear response. Noisy alerts that nobody acts on teach people to ignore them. See Topic 3.10 — Monitoring and Event Management and Topic 7.4 — Observability and Telemetry.

**Incident response and blameless reviews.** SRE emphasizes clear roles during incidents, communication, and structured reviews afterward that look at the system and produce tracked actions. See Topic 3.2 — Incident Management and Topic 3.3 — Problem Management.

**Capacity and performance.** SRE includes forecasting demand, testing limits, and planning capacity so that growth does not cause failure. See Topic 3.11 — Availability, Capacity, and Performance.

**Release engineering and change.** Reliable, repeatable releases, often with progressive rollout and automatic rollback, are part of SRE's work. See Topic 2.2 — Continuous Delivery.

**Practicing failure.** Chaos engineering injects failures deliberately, under control, to find weaknesses before real incidents do. Game days rehearse response. See Topic 3.12 — Service Continuity Management.

**SRE and DevOps.** The two share many ideas. A common description is that SRE is one way to implement DevOps principles, with a specific set of practices such as SLOs, error budgets, and toil limits. See Topic 2.5 — DevOps.

**SRE and ITIL.** SLOs and error budgets sit beside service level management; blameless reviews sit beside problem management; toil reduction supports continual improvement. SRE describes how a technical team can do such work, while ITIL describes the practices an organization needs overall.

**Limits of copying.** SRE was developed at a very large engineering organization with specific scale and staffing. A small team cannot, and need not, copy its structure. Start with a few ideas: pick a user-centred indicator, set an objective, and write down what you will do when the budget is spent.

**How the lenses fit.** SRE is largely the engineering side of the agile lens for live services. AI can assist with alert triage and incident summaries, under human review. Automation is the main tool against toil. Analytics supplies the SLIs and the data on toil and incidents.

## Best practices

1. **Choose indicators that reflect the user's experience.** Ask what a user would say is "working": pages that load, payments that complete, files that arrive. Measure that, not CPU use.
2. **Set an objective with the people who depend on the service.** Agree a number that matches real need, written down with the period and how it is measured. Revisit it when needs change.
3. **Use an error budget to make decisions.** Write what happens when the budget is nearly spent, such as freezing risky changes, and who decides. Agree this before the first time it matters.
4. **Keep objectives stricter than agreements.** Set your internal target so that you notice trouble before you breach a contract. See Topic 3.7 — Service Level Management.
5. **Count and limit toil.** Track how much time goes on repetitive manual work, and set a limit. Spend the rest on removing the biggest sources of toil.
6. **Alert on symptoms, and keep alerts actionable.** Each alert should say what is wrong for users and what to do. Remove or fix alerts nobody acts on.
7. **Share on-call fairly and sustainably.** Limit the number of pages per shift, provide training and a documented escalation path, and review the load regularly. See Topic 8.3 — Organizational Change and Adoption.
8. **Review incidents without blame and follow through.** Write the timeline, the contributing factors, and actions with owners and dates. Check the actions are done.
9. **Practice failure in safe conditions.** Run game days and small chaos experiments in staging or with limited exposure, with a clear stop button.
10. **Start small.** Pick one important service, define one or two SLIs and an SLO, and learn from the result before extending.

## Questions to discuss with your team

**What would our users say "working" means for this service, and do we measure it?**
This is the starting point for indicators. Teams often measure server health instead. Ask for the last time users were unhappy while our dashboards were green. Follow up by choosing one user-facing indicator to measure.

**How reliable does this service really need to be, and who decided?**
Targets are often set by habit, for example "five nines". Ask what users do when the service is down and what an hour of downtime costs. Expect disagreement. Follow up by drafting an objective and checking it with a customer.

**What will we do when we have spent the error budget, and will we actually do it?**
Policies that are never applied teach people to ignore them. Ask what happened the last time reliability suffered and change continued. Follow up by agreeing a small, specific response and who decides.

**What are the three biggest sources of toil for our team, and what would it take to remove each?**
Ask people to list repetitive tasks and estimate time. Expect manual restarts, data fixes, and access requests. Follow up by choosing one item and estimating the work to automate it, compared with the time saved over a year.

**How many pages did our on-call people receive last month, and how many needed human action?**
This tests alert quality and workload. Ask for the numbers; if nobody knows, that is a finding. Follow up by choosing the noisiest alert to fix or delete.

**Where could AI help with alerts or incident summaries, and how would we notice its mistakes?**
AI can group alerts, draft summaries, and suggest runbook steps. It can also hide a real signal or invent a cause. Ask who owns it and how its output is checked. Follow up by trialing a summary tool alongside the human process and comparing.

## In practice: a service management example

A national library's digital archive team runs a search service for researchers. The team of six is on call in rotation. Pages arrive at night about once a week, mostly from a disk-space alert on a batch server that someone clears by hand. Management asks for "99.99 percent availability" in the annual plan, though nobody has measured current performance.

The team lead proposes a smaller experiment. With two researchers, the team defines one indicator: the proportion of search requests that return results within two seconds. They measure it for a month, and find 99.2 percent. The researchers say they notice slowness only when searches take over five seconds, which happens on about 0.3 percent of requests, mostly during an overnight index rebuild. They agree an objective of 99.5 percent within two seconds over 30 days, and an error budget policy: if more than 75 percent of the budget is spent in a period, the team pauses non-urgent releases and fixes the largest cause.

The team also counts toil. Clearing the disk by hand takes about two hours a month and wakes someone up. They automate the cleanup, add an alert for rapid growth rather than the full disk, and rehearse a game day for restoring the index from backup.

What changes: night pages drop, and releases are paused once in the first quarter when the budget runs low, with the cause traced to one slow query. What remains hard: the annual plan still says "99.99 percent", because senior managers have not agreed to replace it; the index rebuild depends on a storage service run by another department; and the team is unsure whether researchers in other time zones experience the service the same way. The lead takes the plan wording to the next review.

## Four perspectives

### Product and delivery teams

Share the objective and the budget with operations. Include reliability work in the backlog, release progressively, and watch the effect of changes. When the budget is spent, join the effort to reduce the cause.

### Service and operations teams

Define the indicators with users, keep alerts actionable, and spend your time on engineering that removes toil. Bring on-call load and incident data to planning. Write reviews that lead to tracked actions.

### Leadership and governance

Agree objectives that reflect real need, and back the budget policy when it requires slowing change. Fund the time for toil reduction and reliability work. Do not ask for perfection.

### Customers and users

You should be asked what "working" means for you and be told what the target is. Report problems clearly, and expect to hear what was done. If the target seems wrong for your needs, say so.

## Agile, AI, automation, and analytics

### Agile

SRE adds measurable reliability targets to continuous delivery and improvement. Keep stakeholders involved in setting objectives, and review them regularly. Caution: error budgets do not replace judgement; some incidents, such as a data breach, matter regardless of the budget.

### AI

AI can group related alerts, propose likely causes, and draft incident summaries. Each use needs an owner and a human responsible for decisions, and a way to compare AI suggestions with what actually happened. Caution: an AI that suppresses alerts to reduce noise can hide real failures; test it with known incidents. See Topic 5.2 — AIOps.

### Automation

Automate toil: restarts, cleanups, routine access, and repeated diagnosis, with logs, limits, and a way to turn it off. Caution: automation that acts on production can make an incident worse; add rate limits and a manual stop. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Use SLIs, SLO attainment, error budget burn, toil hours, and alert quality. Caution: objectives chosen because they are easy to hit, or indicators that ignore parts of the user experience, give false comfort; check them against user complaints. See Topic 7.4 — Observability and Telemetry and the *Service Management Metrics* book.

## Common failure modes

- **Copying numbers from others.** "Five nines" is adopted without knowing the need. Decide from user need and cost.
- **Indicators that miss the user.** Dashboards are green and users complain. Measure what users experience.
- **A budget policy nobody follows.** Change continues when the budget is spent. Agree the response in advance and apply it.
- **Alert noise.** On-call people ignore pages. Make every alert actionable.
- **Toil as normal.** The team never gets time to automate. Count it and set a limit.
- **SRE as a rename of operations.** The practices are not adopted. Define indicators, objectives, and budgets.
- **Hero culture.** One person solves every incident. Share knowledge and runbooks.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Indicators and objectives | No user-facing measures | Infrastructure measures only | User-centred SLIs and SLOs for key services | Objectives reviewed with users and costs | Objectives coordinated across dependent services |
| Error budget | None | Discussed | Written policy applied | Policy results reviewed | Budgets shared across teams and partners |
| Toil | Unmeasured | Identified informally | Counted and limited | Reduced with tracked automation | Reduced across services with shared tools |
| Incident learning | Blame | Some reviews | Blameless reviews with tracked actions | Action completion and recurrence measured | Learning shared across the organization |

## Checklist

- [ ] We have at least one user-facing indicator for each important service.
- [ ] Each has an objective agreed with the people who rely on it.
- [ ] We wrote down what happens when the error budget is nearly spent.
- [ ] Our internal objectives are stricter than our agreements.
- [ ] We track toil and have a limit.
- [ ] Alerts are actionable, and noisy ones are fixed or removed.
- [ ] On-call load is measured and sustainable.
- [ ] Incident reviews are blameless and actions are tracked to done.

## AI prompts

**Draft candidate indicators.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Calculate error budget burn.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Rank toil candidates.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## AI skills

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): use to relate objectives to agreements.
- [postmortem](../../../../skills/postmortem/SKILL.md): use to run blameless reviews with tracked actions.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): use to plan safe failure experiments.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): use to forecast demand and limits.

## Key sources

- Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (eds.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), freely available at sre.google: the main source for the practices.
- Betsy Beyer and others (eds.), *The Site Reliability Workbook* (2018): practical guidance for adoption.
- Wikipedia, "Site reliability engineering": a neutral overview.
- Wikipedia, "Service-level objective": background on the terms.

## References

1. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Service level indicator — Wikipedia — https://en.wikipedia.org/wiki/Service_level_indicator
4. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
5. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
6. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
