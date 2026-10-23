# Incident Management

**Incident management exists to restore normal service as quickly as possible and limit harm to users; it works when severity is agreed in advance, roles are clear, communication is steady, and the review afterward looks at the system and not at individuals.**

## Why this matters

An incident is an unplanned interruption to a service, or a reduction in its quality. When one happens, the people involved are under pressure, the information is incomplete, and the clock is running. Decisions made in the first ten minutes often determine whether the incident lasts one hour or six.

Organisations that handle incidents well do not rely on heroes. They have agreed how to decide how serious something is, who leads, who talks to users, how to escalate, and when to stop investigating and apply a workaround. They have practiced. Organisations that handle incidents badly improvise each time, argue about priorities during the event, and find that the one person who knows the system is on holiday.

This topic describes incident management as a practice: definitions, roles, severity, communication, and review. It treats major incidents with extra structure, and it covers how AI and automation can help and where they can hurt. It stands beside problem management (Topic 3.3 — Problem Management), which looks for the underlying causes, and monitoring (Topic 3.10 — Monitoring and Event Management), which often detects the incident.

## Core concepts

**Incident.** In ITIL 4, an unplanned interruption to a service or reduction in the quality of a service. Wikipedia's article on incident management describes the practice in IT service management. An incident can exist before any user notices, for example when monitoring shows a failing disk.

**Restore service first.** The aim is to restore the service to normal, not to find the root cause. A workaround that restores service is a good result; the root cause is for problem management. Teams that dig for the cause while the service is down prolong the outage.

**Workaround.** A solution that reduces or eliminates the impact of an incident without resolving its cause, for example rerouting traffic, restarting a component, or switching to a manual process. See Topic 3.3 — Problem Management for how known errors and workarounds are tracked.

**Severity and priority.** Severity describes the impact on users and the business, such as how many are affected and how badly. Priority adds urgency, such as a deadline. Many organisations use a small scale, for example four levels, with a definition and an expected response for each. Definitions should use observable facts ("more than 100 users cannot make payments") rather than feelings.

**Major incidents.** A major incident has a significant impact and needs a faster, more coordinated response than the standard process. Organisations define their own thresholds. Major incidents typically have a named incident lead, a communications lead, and a regular cadence of updates.

**Roles.** An incident lead coordinates and makes decisions; technical responders diagnose and fix; a communications lead keeps stakeholders and users informed; a scribe records what is done and when. One person can hold several roles in a small incident. The Incident Command System, used in emergency management and described on Wikipedia, is an influence on the structure used in many technical organisations.

**Escalation.** Bringing in more skills or more authority. Functional escalation moves the incident to people with the right expertise. Hierarchical escalation brings in managers who can decide or provide resources. Clear criteria, such as "no progress after 30 minutes at severity one", make escalation routine rather than a sign of failure.

**On-call.** Arrangements for people to be reachable outside normal hours. Good on-call practice includes limits on load, a clear rota, runbooks, and compensation. See Topic 2.6 — Site Reliability Engineering. Alarm fatigue, a phenomenon described on Wikipedia, makes people ignore alerts that are too frequent or not actionable.

**Communication.** Users and stakeholders need to know what is affected, what you are doing, and when they will hear next. Frequent, plain updates reduce repeat contacts and anxiety. Wikipedia's article on crisis communication gives general principles. A status page, an internal channel, and direct messages to key customers serve different audiences.

**Incident records.** A ticket or record with the start time, symptoms, actions, decisions, and end time. The record supports the review and gives data for improvement. A timeline kept during the incident is more accurate than one reconstructed afterward.

**Review.** After a significant incident, hold a blameless review that looks at what happened, what helped, what slowed the response, and what to change. Findings go to problem management and the improvement backlog. See Topic 3.3 — Problem Management.

**Measures.** Time to detect, time to respond, and time to restore, often summarised as mean time to recovery (MTTR) in Wikipedia's description, are common. Averages hide large differences between incidents, and they can be manipulated by how start and end times are set. Use distributions and look at individual incidents. See the *Service Management Metrics* book.

**How the lenses fit.** Agile practice treats each review as feedback and keeps improvement small and continuous. AI can summarise timelines, suggest similar past incidents, and draft updates, with an accountable person. Automation executes safe, well-understood steps such as restarts and failovers. Analytics shows patterns of recurrence.

## Best practices

1. **Define severity levels with observable facts.** Write what each level means, who is notified, and how fast. Review the definitions after incidents that were hard to classify.
2. **Name roles and practice them.** Agree who leads, who communicates, and who records. Rehearse with exercises, so that the first time is not a real crisis. See Topic 3.12 — Service Continuity Management.
3. **Restore first, investigate later.** Set a rule that a workaround is applied when one is available and safe. Record the incident for problem management and move on.
4. **Keep a live timeline.** Record actions and decisions with times as they happen, in a shared place. It prevents arguments and speeds up the review.
5. **Escalate early and without blame.** Define triggers for escalation and treat using them as good practice. People who escalate late fear criticism, so remove it.
6. **Communicate on a rhythm.** Agree an update interval for each severity level, and send updates even when there is nothing new, saying so. Use plain language.
7. **Give responders what they need.** Maintain runbooks, access, dashboards, and contact lists. Test access before the night it is needed.
8. **Protect people.** Limit on-call load, hand over long incidents, and make sure responders rest. Tired people make worse decisions.
9. **Review without blame and follow through.** Write a short report with the timeline, contributing factors, and actions with owners and dates. Track actions to completion. See Topic 3.3 — Problem Management.
10. **Feed the lessons back.** Update runbooks, monitoring, and design. Share learning with other teams, and check that repeated incidents decline.

## Questions to discuss with your team

**How do we decide how serious an incident is, and has that ever been argued during an incident?**
Disagreement about severity wastes time. Ask for recent examples. You may hear that the answer depends on who is asking. Follow up by rewriting one level's definition with observable facts.

**Who leads an incident at 3 a.m., and how do they know they are the lead?**
Unclear leadership is a common cause of confusion. Ask who made decisions in the last major incident. Expect different answers. Follow up by agreeing how the lead is chosen and announced.

**What do users hear from us during an incident, and how often?**
Compare what users heard in the last incident with what they wanted. Expect long silences. Follow up by choosing an update interval and a channel, and drafting a template.

**What have we escalated late, and why?**
This explores fear and habit. People may delay for fear of looking incompetent or of waking someone. Ask what would make escalation easier. Follow up by writing a rule such as "escalate if there is no progress in 30 minutes".

**What does our last incident review say we should change, and what actually changed?**
This tests the follow-through. Ask for actions and their status. Expect some to be open for months. Follow up by assigning owners and dates and reviewing them in a month.

**Where could AI help during an incident, and where must a person decide?**
AI can summarise the timeline, search past incidents, and draft updates. It cannot be accountable. Ask which actions an AI may take without approval, if any. Follow up by choosing one low-risk use and agreeing how its output is checked.

## In practice: a service management example

A national pharmacy chain's digital team runs an app that lets customers order repeat prescriptions. One Friday evening, orders begin to fail for about 30 percent of users. The on-call engineer sees errors from a database and calls the incident lead according to the rota. The lead declares a severity-two incident because users cannot complete a core task, assigns a communications lead, and starts a timeline.

Within 15 minutes the team suspects a database change deployed that afternoon. The lead asks whether rolling it back is safe; the engineer who made the change confirms that it is. The team rolls back, and orders recover within five minutes. Total time from first alert to recovery is 47 minutes. The communications lead had posted on the status page at 20 minutes, again at 35, and a final update at recovery, and had told the customer service team what to say.

The next week the team holds a blameless review. The timeline shows that detection depended on a user complaint, because no alert covered failed orders; the change had been reviewed but the test environment had no realistic data; and the first update was slower than the agreed interval because the communications lead was unsure what the status page was allowed to say. The team adds an alert on order failure rate, improves test data, and writes a status page template.

What changes: the next similar incident is detected by the alert within three minutes. What remains hard: the test data contains no real patient information, for good reasons, which limits how realistic it can be; the rota still has few engineers who can roll back the database safely; and the review's action list has twelve items and the team has time for five. They choose by risk and put the rest on the backlog with dates.

## Four perspectives

### Product and delivery teams

Build for recovery: make changes reversible, add alerts and logs that show user impact, and write runbooks as you go. Take part in reviews and fix causes in design.

### Service and operations teams

Know your role, practice, and keep the timeline. Escalate early, communicate steadily, and look after each other. Bring what you learn to reviews and use it to improve runbooks and monitoring.

### Leadership and governance

Agree severity definitions and expectations in advance, and resist assigning blame. During a major incident, support the lead and ask for updates only through the agreed channel. Fund the follow-up actions.

### Customers and users

You should be told promptly what is affected, what is being done, and when you will hear next. Report what you see, with details. After a major incident, expect a clear account of what changed.

## Agile, AI, automation, and analytics

### Agile

Treat incident reviews as the short feedback loop that drives improvement: small changes to runbooks, alerts, and design, made quickly with stakeholders informed. Caution: a long action list nobody finishes is worse than a short one that is done.

### AI

AI can draft updates, summarise the timeline and chat, and find similar earlier incidents. The incident lead stays accountable, and an AI output is a suggestion. Caution: AI can invent causes or timings, and an auto-drafted update sent without review can mislead customers; always check before sending. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Automate safe, repeatable response steps, such as collecting diagnostic data, paging the right people, and executing a reviewed restart, with logs and limits. Caution: automation that acts during an incident can make it worse; keep a manual stop, and test in a safe environment. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Look at time to detect, respond, and restore, at the distribution of each, and at repeat incidents. Caution: averages hide the worst incidents, definitions of start and end vary, and measures used to judge teams invite manipulation of timestamps; study individual incidents as well. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Severity argued during the incident.** Time is lost. Write definitions with observable facts.
- **No clear lead.** Everyone acts and nobody decides. Name the lead and announce it.
- **Investigating while the service is down.** Recovery is delayed. Apply a safe workaround first.
- **Silence to users.** Anxiety and repeat contacts rise. Update on a rhythm.
- **Blame in reviews.** People hide mistakes. Hold blameless reviews and track actions.
- **Hero dependence.** One person fixes everything. Share knowledge and write runbooks.
- **Auto-actions without limits.** An automation worsens an incident. Add limits, logs, and a manual stop.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Severity and process | Ad hoc | Informal levels | Defined levels with response expectations | Levels reviewed with data | Process adapted across services and partners |
| Roles and practice | Improvised | Some roles named | Roles defined and rehearsed | Exercises measured and improved | Exercises shared with suppliers and customers |
| Communication | Irregular | Updates when remembered | Update rhythm and channels per severity | Communication quality reviewed | Consistent across teams, customers, and partners |
| Learning | Blame | Occasional reviews | Blameless reviews with tracked actions | Recurrence measured and reduced | Learning shared across the organisation |

## Checklist

- [ ] Severity levels are defined with observable facts and expected responses.
- [ ] Incident roles are named and rehearsed.
- [ ] Escalation triggers are written down.
- [ ] A live timeline is kept for significant incidents.
- [ ] Update intervals and channels are set for each severity.
- [ ] On-call load is limited and monitored.
- [ ] Reviews are blameless and actions are tracked to completion.
- [ ] AI and automation used in incidents have an owner, limits, and review.

## AI prompts

**Summarise an incident timeline for review.**

```text
Here are the chat messages and notes from an incident, with times and names removed: [paste text].
Produce a timeline of key events, a list of decisions and who made them (by role only), what helped, what slowed us down, and questions for the review. Use only the text and mark anything uncertain.
List what you are unsure of.
```

**Draft a status update for review.**

```text
Facts we know: [paste confirmed facts]. Facts we do not know: [list]. Next update in: [time].
Draft a status update of under 80 words in plain language that states what is affected, what we are doing, and when the next update is due. Do not speculate about causes or give an estimate for recovery that is not in the facts.
List what you are unsure of.
```

**Check severity definitions.**

```text
Our severity definitions: [paste]. Here are three past incidents with their impact: [paste].
For each incident, say which level the definitions suggest, quote the words you used, and note where the definitions were ambiguous. Do not change the definitions.
List what you are unsure of.
```

## AI skills

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): use to define roles, severity, and steps for responding to incidents.
- [postmortem](../../../../skills/postmortem/SKILL.md): use to run a blameless review with tracked actions.
- [runbook](../../../../skills/runbook/SKILL.md): use to capture response steps for known failures.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): use to plan updates to users and stakeholders.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): use to design a sustainable on-call arrangement.

## Key sources

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapters on incident response and postmortems, free at sre.google: practical guidance from a large operator.
- PeopleCert, ITIL certification pages: the owner's description of the incident management practice.
- Wikipedia, "Incident management": an overview of the practice.
- Wikipedia, "Incident Command System": the emergency management model that influenced technical incident roles.

## References

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
