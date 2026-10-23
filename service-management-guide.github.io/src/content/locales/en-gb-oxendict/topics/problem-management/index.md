# Problem Management

**Problem management finds and removes the causes of incidents, records known errors with their workarounds, and runs blameless reviews whose actions land in the improvement backlog; it is how a service team stops fixing the same failure again and again.**

## Why this matters

A team that handles incidents well can still be trapped in a loop. The same kind of failure returns each month, responders apply the same workaround, and the cost accumulates: lost user time, tired on-call staff, and a growing sense that nothing ever gets better. Incident management restores service; it does not stop recurrence.

Problem management is the practice that does. It asks why incidents happen and what would prevent them, and it assigns the answers to someone who can act. It also keeps a record of what is known about failures that are not yet fixed, so that the next responder does not start from nothing.

For agile teams the practice fits naturally into continuous improvement: findings become backlog items, competing with features on a single list. The weak point is usually not method but priority. Fixing causes often loses to new work unless someone makes the cost of recurrence visible. This topic explains the practice, the main methods for finding causes, and how to keep findings from dying in a report. It is a close partner of incident management (Topic 3.2 — Incident Management), knowledge management (Topic 3.9 — Knowledge Management), and continual improvement (Topic 3.15 — Continual Improvement).

## Core concepts

**Problem.** In ITIL 4, a cause, or potential cause, of one or more incidents. A problem exists before a fix does; it may be known to be causing incidents or only suspected. Not every incident leads to a problem record.

**Known error.** A problem that has been analysed but not resolved, often with a documented workaround. Wikipedia describes the term in ITIL usage. A known error record lets service desk and responders find the workaround quickly and see the status of the permanent fix.

**Workaround.** A way to reduce or avoid the impact without fixing the cause. Workarounds make life tolerable and can become permanent by neglect. A good record states the workaround, who may apply it, and the expected date for a real fix, so that the temporary does not quietly become permanent.

**The activities.** Problem identification, which finds problems from incident trends, monitoring, and reviews; problem control, which analyses causes and documents known errors; and error control, which manages known errors until they are resolved or accepted. ITIL describes them as parts of one practice rather than separate processes.

**Proactive and reactive.** Reactive problem management responds to incidents that have happened. Proactive problem management looks for weaknesses before they cause incidents, for example by studying near misses, trends in alerts, and reviews of changes.

**Root cause analysis.** A family of methods for finding the underlying cause of a problem. Wikipedia describes root-cause analysis and lists common techniques. Familiar ones include:

- *Five whys*: ask "why" repeatedly until you reach a cause you can act on.
- *Cause-and-effect (Ishikawa or fishbone) diagrams*: lay out possible causes by category to guide discussion.
- *Fault tree analysis*: work backwards from a failure through combinations of events that could cause it.
- *Pareto analysis*: use counts to find the few causes behind most incidents.
- *Failure mode and effects analysis (FMEA)*: examine each part of a system for how it could fail and what would follow.

**Cautions about causes.** Complex systems rarely have a single root cause. The Swiss cheese model, described on Wikipedia, pictures failures as the alignment of weaknesses in several layers of defence. A search for "the" root cause tends to stop at the first convenient explanation. It is usually more useful to name contributing factors and decide which are cheapest and most valuable to change.

**Blameless and just culture.** Blame stops learning: people hide mistakes and reviews become defensive. A blameless review looks at what in the system made the action reasonable at the time. A just culture, described on Wikipedia, distinguishes honest error from reckless behaviour and handles each differently. Wikipedia's article on human error and hindsight bias explain why "someone should have known" is rarely a useful finding.

**Postmortems.** A written review after a significant incident, covering what happened, impact, timeline, contributing factors, what went well, and actions. See Wikipedia's article on postmortem documentation. A good postmortem is read and acted on; a bad one is filed.

**Prioritizing problems.** There are always more problems than capacity. Rank them by impact, such as user hours lost or cost, frequency, and how cheap the fix is. Show the cost of recurrence. Technical debt, a term described on Wikipedia, includes known problems that have been deferred; tracking it makes the choice visible.

**Linking to change.** Fixing a problem usually requires a change. Raise it through the normal change practice, and make sure the problem record is closed when the fix is confirmed. See Topic 3.4 — Change Enablement.

**Linking to knowledge.** A known error and its workaround should appear in knowledge articles that the service desk and on-call staff can find. See Topic 3.9 — Knowledge Management.

**How the lenses fit.** Problem management is where agile improvement meets operations: findings go to the backlog and compete openly. AI can cluster incidents, suggest candidate problems, and draft postmortems, under review. Automation can detect recurrence and apply tested workarounds. Analytics shows recurrence and cost.

## Best practices

1. **Look for patterns, not only single incidents.** Review incidents regularly for repeats by service, component, change, and time. Open a problem when a pattern appears.
2. **Keep a visible problem list.** Record each problem with an owner, the incidents linked to it, the impact, the workaround, and the plan. Make the list easy for responders to read.
3. **Document known errors with workarounds.** Write them so that a tired on-call person can follow them, and link them to the service desk's knowledge base.
4. **Choose the method to suit the problem.** Use five whys for simple cases, a fishbone for group discussion, fault trees for complex failures, and Pareto charts to find where to focus. Do not apply heavy methods to small issues.
5. **Name contributing factors, not one culprit.** List all the conditions that made the failure possible and rate which are practical to change. Avoid findings that end with "human error".
6. **Hold blameless reviews.** Invite the people who were involved, state the rules, and focus on the system. Share the written review widely.
7. **Make actions specific and owned.** Each action has a named person, a date, and a way to check it is done. Put it on the backlog that the team actually works from.
8. **Show the cost of not fixing.** Tally incident hours, user impact, and on-call load for each problem, and use the totals in prioritization. Present them to the people who set priorities.
9. **Close the loop.** When a fix is released, confirm that incidents stop, update the knowledge article, and close the record. If the problem remains, reopen it.
10. **Review the practice.** Check how many problems are open, how long they last, and whether repeat incidents fall. Retire problems that are not worth fixing, with a recorded decision.

## Questions to discuss with your team

**Which incidents have happened three or more times in the last six months, and why are they still happening?**
Start with real examples. Expect a mix of "we never got to it" and "we do not know the cause". Ask what each recurrence cost. Follow up by choosing one to fix and one to formally accept.

**How do we decide which problems to fix first, and who decides?**
Prioritization is often implicit. You may hear that the loudest person wins. Ask what data we use. Follow up by agreeing criteria and showing the cost for the top five problems.

**When we last wrote "human error" in a review, what did the system allow?**
This tests blameless practice. Take a past review and ask what made the action easy to take. Look for missing guards, unclear information, or time pressure. Follow up by rewriting the finding in terms of the system.

**Where do known errors and workarounds live, and can a tired person find them at 3 a.m.?**
Knowledge scattered in chat threads is hard to find. Try finding one together. Expect delays. Follow up by agreeing one place and a naming habit.

**What actions from our last three reviews are still open, and why?**
This tests follow-through. Expect competition with feature work. Ask who decides priority between the two. Follow up by agreeing a share of capacity for problem actions.

**How could AI help us find patterns in incidents, and how would we check that it was right?**
AI can group incidents and suggest causes. It can also find false patterns. Ask who reviews and how. Follow up by comparing an AI grouping with a manual one on a sample.

## In practice: a service management example

A university's learning platform team has had a recurring incident every few weeks: students cannot submit assignments near a deadline. The service desk applies the same workaround, restarting a queue service, which restores submissions within 15 minutes. Each time the incident is closed and forgotten.

The service owner proposes treating it as a problem. She gathers the last nine incidents and records the time of each, the load at the time, and the changes made in the previous week. Pareto analysis does not help, since there is one cause category, but a timeline shows that every incident happened within an hour of a deadline, when submissions spike. A fishbone discussion with developers and operations lists contributing factors: the queue service has a fixed memory limit; no alert warns before it fills; a recent change increased the size of each submission; and the capacity plan did not include deadline peaks.

The team names three actions: raise the memory limit and test the new peak, add an alert at 70 percent of capacity, and write a known-error article so that the service desk can see the workaround and the status of the fix. They also add deadline calendars to the capacity review. The service owner shows leadership that the problem has cost about 15 hours of student disruption and nine on-call interruptions in three months, and the work is scheduled ahead of a minor feature.

What changes: the next deadline passes without incident, and the alert fires once at 72 percent, giving time to act. What remains hard: the limit change was a stopgap, because the queue service needs redesign for larger files, which competes with the next term's roadmap; the cost figures are estimates from ticket times; and the review did not look at whether the earlier size change was properly tested. The owner records the redesign as a problem still open, with a review date.

## Four perspectives

### Product and delivery teams

Treat problem actions as part of your backlog. Fix causes in design, add tests and alerts that catch known failures, and contribute to reviews. Do not hand problems to operations alone.

### Service and operations teams

Record patterns and known errors, and bring data on cost and recurrence to planning. Keep workarounds documented and findable. Run reviews that people feel safe attending.

### Leadership and governance

Ask to see recurring incidents and their cost, and protect capacity for fixing them. Look for fear of blame in how reviews are discussed. Track the age of open problems.

### Customers and users

You should hear when a recurring issue has a cause and a fix. If you report the same issue twice, say so. Ask what has been done about it.

## Agile, AI, automation, and analytics

### Agile

Put problem actions on the same backlog as features and review them with stakeholders, delivering small fixes continuously. Caution: if problem work is always pushed behind features, the backlog grows and incidents continue; agree a protected share of capacity.

### AI

AI can group incidents, link them to changes, suggest candidate causes, and draft postmortems from timelines, with a person checking. Name an owner for each use. Caution: AI may invent causes or overstate patterns; treat its suggestions as hypotheses and test them against data. See Topic 5.2 — AIOps and Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Automate detection of recurrence, creation of problem records from patterns, and tested workarounds, with logs and limits. Caution: an automated workaround can hide a worsening problem; track how often it fires and set a threshold for escalating. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Look at recurrence rates, the age and cost of open problems, and the share of incidents linked to known problems. Caution: counts of closed problems can be gamed by closing them early or splitting them; check that incidents actually fall. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Fixing the incident, never the cause.** The workaround becomes permanent. Open a problem when a pattern appears.
- **The single root cause hunt.** The team stops at a convenient answer. List contributing factors and choose which to change.
- **Blame.** People hide errors. Hold blameless reviews and track the system changes.
- **Reports without owners.** Actions are listed and not done. Assign owners, dates, and review.
- **No cost shown.** Problems lose to features. Tally the cost of recurrence.
- **Known errors hard to find.** Responders start from scratch. Keep one searchable place.
- **Closing without checking.** The fix does not work. Confirm that incidents stop before closing.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Identification | Only after large incidents | Some repeat incidents reviewed | Regular pattern review opens problems | Trends and near misses used proactively | Problems found automatically and across services |
| Analysis | Guesswork | Informal methods | Standard methods by problem type | Method quality reviewed | Shared analysis across teams and partners |
| Known errors | In heads | Some documented | Recorded with workarounds in a findable place | Use and accuracy reviewed | Linked to automation and knowledge across services |
| Action and learning | Blame and lost actions | Occasional follow-up | Owned actions on the backlog, blameless reviews | Recurrence and action completion measured | Learning shared and applied across the organization |

## Checklist

- [ ] We review incidents regularly for repeats.
- [ ] We keep a visible problem list with owners and costs.
- [ ] Known errors and workarounds are documented in a findable place.
- [ ] Reviews are blameless and name contributing factors.
- [ ] Every action has an owner, a date, and a way to check completion.
- [ ] Problem work has protected capacity on the backlog.
- [ ] We confirm fixes before closing problems.
- [ ] AI used for analysis has an owner and sampled review.

## AI prompts

**Find repeat incidents.**

```text
Below is a list of incidents with dates, services, short descriptions, and resolutions, with names removed: [paste list].
Group those that look like repeats, state what they have in common, and list for each group two questions to investigate. Do not name causes. Mark groups you are unsure of.
List what you are unsure of.
```

**Turn a review into a contributing-factors list.**

```text
Here is a postmortem draft: [paste, names removed].
List contributing factors in categories (technical, process, information, people and workload, suppliers), quoting the text for each, and list what the draft does not say about each. Do not assign blame or add causes.
List what you are unsure of.
```

**Estimate the cost of recurrence.**

```text
For problem [name] we have these records: incident count, duration of each, users affected, on-call interruptions: [paste data].
Calculate total hours, hours per incident, and per month, showing every step. State what data is missing for a fair cost estimate. Do not guess missing numbers.
List what you are unsure of.
```

## AI skills

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): use to analyse causes with a suitable method.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): use to organize possible causes in a group discussion.
- [postmortem](../../../../skills/postmortem/SKILL.md): use to write and follow up a blameless review.
- [cause-and-effect-diagram](../../../../skills/cause-and-effect-diagram/SKILL.md): use to map causes and effects.
- [risks-actions-issues-decisions](../../../../skills/risks-actions-issues-decisions/SKILL.md): use to track actions to completion.

## Key sources

- Sidney Dekker, *The Field Guide to Understanding "Human Error"*: on why blaming individuals fails and what to look at instead.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on postmortem culture, free at sre.google.
- PeopleCert, ITIL certification pages: the owner's description of the problem management practice.
- Wikipedia, "Root-cause analysis" and "Postmortem documentation": overviews of methods and documents.

## References

1. Root-cause analysis — Wikipedia — https://en.wikipedia.org/wiki/Root-cause_analysis
2. Known error — Wikipedia — https://en.wikipedia.org/wiki/Known_error
3. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
4. Ishikawa diagram — Wikipedia — https://en.wikipedia.org/wiki/Ishikawa_diagram
5. Fault tree analysis — Wikipedia — https://en.wikipedia.org/wiki/Fault_tree_analysis
6. Failure mode and effects analysis — Wikipedia — https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
7. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
8. Swiss cheese model — Wikipedia — https://en.wikipedia.org/wiki/Swiss_cheese_model
9. Just culture — Wikipedia — https://en.wikipedia.org/wiki/Just_culture
10. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
11. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
