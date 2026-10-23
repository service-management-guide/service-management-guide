# Runbook Automation and Auto-Remediation

**Runbook automation turns a documented, tested procedure into code that a person or an alert can trigger, and auto-remediation lets a monitoring signal trigger it without a person; both are safe only for well-understood, reversible actions with limits, logs, a manual stop, and an owner who reviews how often they fire.**

## Why this matters

On-call work has a shape. An alert fires. A tired engineer opens a runbook, follows a series of steps, restarts something, checks that it worked, and goes back to sleep. A week later the same alert fires, and the same steps are followed. After the tenth time, someone says: why is a person doing this?

They are right. Repeating a known fix by hand is slow, error-prone, and corrosive to the people who do it. The same steps, written as code, run in seconds, in the same way each time, and leave a record. Wikipedia describes runbooks as compilations of routine procedures that an operator carries out. Making them executable, and in some cases making them run on their own, is the step from documentation to automation.

The step is also a hazard. A runbook read by a human passes through human judgement at each step. Code does not. An automatic restart that is wrong can repeat forever, or take down a healthy service, or mask a deeper problem until it is much worse. Many outages have been prolonged or caused by well-meaning remediation that did the wrong thing quickly. Wikipedia describes autonomic computing, the long-standing aim of systems that manage themselves, and the practical lesson is that autonomy needs limits.

This topic describes how to move from document to script to automatic action with care. It builds on knowledge management (Topic 3.9 — Knowledge Management), monitoring (Topic 3.10 — Monitoring and Event Management), incident management (Topic 3.2 — Incident Management), and automation strategy (Topic 6.1 — Automation Strategy). It connects to AI operations (Topic 5.2 — AIOps) and to agents that act (Topic 5.5 — Agentic AI and Human Oversight).

## Core concepts

**Runbook.** A documented procedure for a specific, recurring operational task or situation. Wikipedia describes runbooks. A good runbook has a trigger, numbered steps, expected results, a verification step, and an escalation path. See Topic 3.9 — Knowledge Management.

**Runbook automation.** Implementing a runbook as code that executes some or all of its steps, usually triggered by a person from a console or a chat command, or by a system event. It keeps the logic of the runbook, with the benefit of speed, consistency, and records.

**Auto-remediation.** Automatic corrective action in response to an alert or event, without a person starting it. Examples include restarting a failed process, clearing a full temporary directory, scaling out a worker pool, or failing over to a standby. Wikipedia's article on autonomic computing describes systems that detect and correct their own faults as a goal. In practice, auto-remediation covers a narrow set of well-understood faults.

**A progression.** Teams commonly move through stages: a written runbook; a runbook with scripts a person runs; a runbook that a person triggers with one command, with the script gathering checks first; an alert that proposes the action and asks for approval; and an alert that runs the action alone within limits. Each stage needs evidence from the previous one. Do not skip stages for actions with real consequences.

**What qualifies for automatic action.** A fault that is common, whose cause and fix are well understood, whose fix is safe and reversible, and whose symptom reliably identifies it. Examples are a hung stateless worker or a log directory that fills. Poor candidates include anything that deletes data, changes access, or depends on judgement about business impact.

**Safety conditions.** Before acting, check that the situation really matches: the alert is current, the service is in the expected state, no deployment or maintenance is in progress, and the action has not just run. After acting, verify the result. Wikipedia describes a dry run, a rehearsal that shows what would happen without doing it; it is a useful mode for new automations.

**Limits.** Cap how many times an action can run in a period, how many instances it can touch at once, and how long it can run. Wikipedia describes rate limiting. A limit turns a runaway into a bounded event, and exceeding a limit should call a person.

**Circuit breakers and backoff.** If an automated action repeatedly fails or repeatedly fires, stop and escalate instead of retrying forever. Wikipedia describes the circuit breaker pattern, in which repeated failures trip a switch that stops further attempts for a time. Add pauses between retries and hysteresis, described on Wikipedia, to prevent flapping between states.

**Idempotence.** An action that is safe to repeat. Wikipedia describes idempotence. Restarting a service when it is already restarting should not cause a second restart storm. Design actions that check state first.

**Watchdogs and built-in recovery.** Platforms provide their own recovery mechanisms: process supervisors that restart crashed services, container platforms that replace failing instances, and watchdog timers, described on Wikipedia, that reset a hung system. Prefer built-in mechanisms to custom scripts where they fit, and understand what they do.

**Failover and scaling.** Automatic failover to a standby and automatic scaling of capacity are forms of auto-remediation that platforms often provide. Wikipedia describes failover and autoscaling. They need tests and limits too, since they can make things worse: a failover triggered by a brief glitch can interrupt a healthy service.

**Masking problems.** An automation that quietly fixes a fault can hide a worsening cause. If a service is restarted every hour, the restart is a symptom of a problem that needs fixing. Track how often each automation fires and treat a rising rate as a problem to investigate. See Topic 3.3 — Problem Management.

**Logs, audit, and notification.** Every automatic action should record what triggered it, what it checked, what it did, and the result, and should notify the owning team. Silent automation erodes understanding of the system. Wikipedia describes audit trails in general.

**Testing.** Test automations against realistic faults in a safe environment, including cases where the checks should stop the action. Wikipedia describes chaos engineering, the practice of injecting failures deliberately, which can also test whether remediation behaves correctly. See Topic 3.12 — Service Continuity Management.

**Ownership and review.** Each automation has an owner, lives in version control with review, and appears in a register. Review regularly how often it fires, whether it succeeded, and whether the underlying cause should be fixed.

**Access and security.** Remediation tooling has power over production. Give it its own identity with the narrow permissions each action needs, and protect the code and triggers from tampering. See Topic 3.13 — Information Security Management.

**Human skills.** If automation handles routine faults, people may lose the feel for the system. Keep runbooks readable, rehearse manual operation, and include automations in game days. See Topic 6.1 — Automation Strategy.

**How the lenses fit.** This topic is the automation lens at the point of operations. Agile practice suggests moving up the progression in small steps with review after each incident. AI can suggest actions and select runbooks, under the limits described here. Analytics measures firing rates, success, and masked problems.

## Best practices

1. **Start with a good runbook.** Write, test, and use the procedure by hand first. An automation of a procedure that does not work only breaks faster.
2. **Choose candidates carefully.** Look for frequent, well-understood, safe, reversible fixes with a reliable signal. Rank by on-call time saved and by risk.
3. **Climb the ladder.** Move from script to one-command trigger, to proposed action with approval, to automatic action only as evidence accumulates. Record the decision at each step.
4. **Check before and after.** Verify that the situation matches, that no conflicting activity is in progress, and that the action worked. Stop and escalate if any check fails.
5. **Set limits and a breaker.** Cap frequency, scope, and duration. If an action fires too often or fails twice, stop and call a person.
6. **Make actions idempotent and reversible.** Check state first, and write the way back. Test both.
7. **Log, notify, and make visible.** Record every automatic action, tell the owning team, and show firing rates on a dashboard.
8. **Fix the cause.** Count how often each automation fires, and raise a problem when the rate is high or rising. Treat automation as a bridge to a fix, not a substitute.
9. **Test in safe conditions.** Rehearse with realistic faults and edge cases, including ones that should be refused. Include automations in game days.
10. **Own and review.** Name an owner, keep code in version control with review, register each automation, and review quarterly which to keep, change, or retire.

## Questions to discuss with your team

**Which alerts do we fix the same way every time, and how long does each take?**
Use incident and alert data. Expect a handful that account for most pages. Follow up by choosing one and checking that its runbook is accurate.

**What could go wrong if this fix ran when it should not have?**
Imagine the wrong trigger or the wrong target. Expect a few unpleasant cases. Follow up by adding a check or a limit for each.

**How would we know the automation was masking a growing problem?**
Ask what we would see. Expect "nothing". Follow up by agreeing to count firings and set a threshold for raising a problem.

**What is the maximum damage a single run could do, and how would we stop it?**
Name the scope. Expect uncertainty. Follow up by setting a cap and rehearsing a stop.

**When did we last do this task by hand, and could everyone on call still do it?**
Ask for the last time. Expect that it was long ago. Follow up by scheduling a rehearsal.

**Where could AI propose or choose a remediation, and what must still be approved by a person?**
AI can match symptoms to runbooks and suggest actions. Ask which actions need approval and who decides. Follow up by choosing a trial where AI proposes and a person approves, with measures of how often the suggestion was right.

## In practice: a service management example

A national railway's passenger information team runs displays at 400 stations, fed by a data service. About twice a week, the feed processor hangs and displays freeze on old times. The on-call engineer is paged, logs in, checks that the process is hung, restarts it, and confirms updates. It takes about 20 minutes, mostly at night.

The team writes down the runbook, refining it after trying it on two incidents: confirm the alert, check that no deployment is in progress, check that the process has not written to its log for five minutes, restart, wait two minutes, check that the output timestamp is current, and note the incident. They turn it into a script with a dry-run mode, and an engineer triggers it with one chat command for a month. It succeeds each time.

Then they connect it to the alert in a proposal mode: the alert posts the script's findings and a button that asks the on-call engineer to approve. After a month, every approval was correct, taking under two minutes. The team agrees to let it run automatically under strict conditions: only when the checks pass, at most twice in an hour, never during a deployment, and with a page to a person if the second restart does not fix it. It logs each run and posts to the team channel.

The automation fires 19 times in the first two months. A review shows that the hang happens more often after a certain data supplier's late-night update, which the team had not noticed when they handled each page alone. They raise a problem with the supplier. In one run, the breaker trips after two failed restarts and pages an engineer, who finds that the disk is full, a cause the runbook did not cover.

What changes: engineers sleep through most of these events, and displays recover in under three minutes. What remains hard: the supplier has not yet fixed the data format; the team has noticed that new engineers have never done the manual procedure and worries about their skill; and the extra step of checking the disk was added only after the surprise. The lead schedules a quarterly manual rehearsal and adds the disk check to the script.

## Four perspectives

### Product and delivery teams

Build services that are easy to remediate: health endpoints, safe restart, idempotent operations, and clear logs. Write runbooks with the code, and fix causes that automation exposes.

### Service and operations teams

Own the runbooks and automations: write, test, limit, log, and review. Keep manual skills alive, and treat frequent firing as a problem to fix.

### Leadership and governance

Support moving up the ladder with evidence, and ask for firing rates and masked-problem checks. Fund the time to fix causes. Be wary of claims of self-healing systems.

### Customers and users

You should see faster recovery and fewer visible outages. If an automatic fix did not work or caused a problem, tell the provider so that the rule can be corrected.

## Agile, AI, automation, and analytics

### Agile

Improve remediation after each incident: refine the runbook, add a check, or take a step up the ladder. Keep changes small and reviewed. Caution: do not automate in bulk after a bad night; take one fix at a time with tests.

### AI

AI can match alerts to runbooks, suggest steps, and draft new runbooks from incident notes, with approval for anything that acts. Name an owner and measure suggestion accuracy. Caution: an AI that chooses an action from an unusual alert may choose wrongly; limit it to a list of approved actions. See Topic 5.5 — Agentic AI and Human Oversight.

### Automation

This topic is the automation lens in operations: safe conditions, limits, breakers, idempotence, logs, and review. Caution: automatic remediation can mask problems and make them worse; count firings, cap runs, and escalate on failure. See Topic 6.1 — Automation Strategy.

### Analytics

Track firing rate by automation, success rate, time to recover, number of pages avoided, breaker trips, and problems raised from patterns. Caution: pages avoided is easy to inflate and may hide rising firing rates; track both together. See Topic 7.4 — Observability and Telemetry and the *Service Management Metrics* book.

## Common failure modes

- **Automating an untested runbook.** The fix is wrong at speed. Test by hand first.
- **No limits.** A loop or misfire repeats. Cap runs and use a breaker.
- **Hidden problems.** Restarts mask a cause. Count firings and fix causes.
- **No checks before acting.** The action hits a healthy or busy system. Verify conditions.
- **Silent automation.** Nobody knows what it did. Log and notify.
- **Skills fade.** Nobody can do it by hand. Rehearse.
- **Over-privileged tooling.** One compromise reaches everything. Use narrow identities.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Runbooks | In heads or email | Written for main alerts | Tested runbooks linked to alerts | Runbook quality reviewed after incidents | Runbooks maintained as code across services |
| Automation | None | Scripts triggered by people | Approved, tested actions with proposals | Selected actions run automatically with limits | Safe actions chosen by risk with human control |
| Safety | None | Basic logging | Checks, limits, breakers, and rollback | Safety tested and audited | Safety built into shared platforms |
| Learning | Fire-fighting | Occasional review | Firing rates tracked and causes raised as problems | Recurrence measured and reduced | Learning shared across teams and suppliers |

## Checklist

- [ ] The runbook was written, tested, and used by hand before automation.
- [ ] Each automation has a trigger, preconditions, verification, and an escalation.
- [ ] Actions are idempotent and reversible.
- [ ] Limits and a circuit breaker cap frequency and scope.
- [ ] Every run is logged and the owning team is notified.
- [ ] We track how often each automation fires and raise problems from the patterns.
- [ ] Automations are in version control, reviewed, and registered with owners.
- [ ] We rehearse manual operation and test automations with realistic faults.

## AI prompts

**Turn incident notes into a runbook draft.**

```text
Here are notes from three incidents that had the same fix: [paste, personal data removed].
Draft a runbook with: trigger, preconditions to check, numbered steps with expected results, verification, rollback, and escalation. Use only what the notes say; write [missing] for anything not stated.
List what you are unsure of.
```

**Find safety gaps in an automation.**

```text
Here is a description of an auto-remediation: trigger, checks, action, and limits: [paste].
List which of these are missing or unclear: precondition checks, post-action verification, rate limit, circuit breaker, idempotence, rollback, logging, notification, owner. Quote the text for each you consider present. Do not assume any.
List what you are unsure of.
```

**Review firing data.**

```text
Here is a log of when each automation fired in the last month, with result: [paste].
Count firings per automation, list those that are rising or clustered at the same time of day, and list questions to find causes. Do not guess causes.
List what you are unsure of.
```

## AI skills

- [runbook](../../../../skills/runbook/SKILL.md): use to write and test the procedure before automating.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): use to test remediation against realistic faults.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): use to find causes that automation hides.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): use to design sustainable on-call arrangements.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): use to define roles and escalation around automation.

## Key sources

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapters on eliminating toil and on automation, free at sre.google.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): why automation changes the human role in surprising ways.
- Wikipedia, "Runbook" and "Autonomic computing": overviews of the document and the aspiration.
- Wikipedia, "Circuit breaker design pattern": a pattern for stopping repeated failure.

## References

1. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
2. Autonomic computing — Wikipedia — https://en.wikipedia.org/wiki/Autonomic_computing
3. Circuit breaker design pattern — Wikipedia — https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern
4. Watchdog timer — Wikipedia — https://en.wikipedia.org/wiki/Watchdog_timer
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
7. Failover — Wikipedia — https://en.wikipedia.org/wiki/Failover
8. Autoscaling — Wikipedia — https://en.wikipedia.org/wiki/Autoscaling
9. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
10. Hysteresis — Wikipedia — https://en.wikipedia.org/wiki/Hysteresis
11. Dry run (testing) — Wikipedia — https://en.wikipedia.org/wiki/Dry_run_(testing)
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
