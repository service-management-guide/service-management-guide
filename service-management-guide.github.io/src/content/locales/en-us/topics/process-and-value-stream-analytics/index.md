# Process and Value Stream Analytics

**Process and value stream analytics measure how work actually flows: how long each step takes, how long work waits, where it loops back, and where it piles up; they work when built from timestamped event data and real traces, aimed at the constraint, and checked against the people who do the work.**

## Why this matters

Everyone has a picture of how work flows, and it is usually wrong. The process documents show a clean path from request to completion. The reality includes detours, loops, handoffs that are not in any diagram, and long periods in which work sits untouched. A request that the document says takes three steps may pass through eleven, and spend 90 percent of its life waiting.

Analytics for processes and value streams replaces the picture with evidence. It starts from the data that systems already record, such as ticket states, timestamps, and assignments, and from observation of real work. It reconstructs the routes work takes, measures the time at each stage, and separates working time from waiting time. Wikipedia describes process mining as the techniques of analyzing event logs to discover, monitor, and improve real processes.

The results often surprise. The bottleneck is not where people thought. The step everyone complains about is quick, and the delay is in the handoff before it. A third of requests loop back for missing information. These findings lead to specific, small improvements, which is why this analysis is one of the most useful in service management. This topic describes the main techniques, the data needed, and the cautions. It builds on the value chain (Topic 1.7 — The Service Value Chain), flow and Kanban (Topic 2.3 — Flow and Kanban), lean thinking (Topic 2.4 — Lean and Kaizen), and analytics (Topic 7.1 — Analytics for Service Management). Data foundations (Topic 7.2 — Data Foundations and Governance) matter greatly here, because timestamps and state changes are the raw material.

## Core concepts

**Value stream.** The sequence of steps an organization performs to deliver a product or service to a customer, such as "resolve a major incident" or "onboard a new employee". Wikipedia describes value streams. A value stream passes through the activities of the value chain in its own order. See Topic 1.7 — The Service Value Chain.

**Value-stream mapping.** A lean technique that draws each step of a value stream with its processing time and the waiting between steps, so that the time spent adding value can be compared with total elapsed time. Wikipedia describes it. A map is often drawn by walking the process with the people involved and noting real times.

**Process mining.** Using event data to discover how processes actually run. Each event has a case identifier (such as a ticket number), an activity (such as "assigned" or "resolved"), and a timestamp. From these, techniques reconstruct the path of every case, show the most common routes, find variants, and measure times. Wikipedia describes process mining and process discovery. It complements mapping: mining shows what happened across thousands of cases, mapping shows why in a few.

**Event data.** Process analysis depends on good event data: a stable case identifier, clear activity names, and accurate timestamps. Ticketing and workflow systems usually store state changes with times. Check that the data reflects what happened. A ticket marked "waiting" may not mean waiting for the customer; a state may be set in bulk at the end. See Topic 7.2 — Data Foundations and Governance.

**Lead time, cycle time, and wait time.** Lead time is the elapsed time from request to completion, as the customer experiences it. Cycle time is the time from the start of work. Wikipedia describes both. Wait time, the time spent in queues or idle between steps, is usually the largest part. Define each start and end point precisely. The relation between work in progress, throughput, and lead time is given by Little's law, described on Wikipedia. See Topic 2.3 — Flow and Kanban.

**Flow efficiency.** The share of lead time in which work is being actively worked on. In many knowledge and service processes, flow efficiency is below 20 percent, meaning most of the time is waiting. This measure draws attention to delay rather than effort. Check the numbers by sampling real cases, since they depend on how active time is recorded.

**Bottlenecks and constraints.** A bottleneck is a step that limits the throughput of the whole process. The theory of constraints, which Wikipedia describes, argues that improving anything other than the constraint does not improve overall flow, and that the constraint should be identified, exploited, and then relieved. Wikipedia describes bottlenecks in production. In analytics, look for steps where work queues up, where wait time is longest, or where utilization is near full.

**Variants and rework.** The same process runs in many variants: the happy path, paths with approval, paths with loops. Wikipedia describes rework, the repetition of work due to errors or missing information. Counting how often cases loop back, and why, finds waste. A loop to the customer for missing information on 30 percent of requests points to a form problem.

**Handoffs.** Each handoff between teams adds wait and a chance of lost information. Count handoffs per case and the time spent after each. A swimlane view, described on Wikipedia, shows who handles what. High-handoff paths are candidates for redesign. See Topic 3.1 — Service Desk.

**Variation.** Averages hide spread. Cases that take ten times longer than the typical case cause the pain, and they have causes worth finding. Wikipedia describes statistical dispersion and statistical process control, which separate ordinary variation from signals. Report distributions and percentiles, not only means. See Topic 7.3 — Measurement and Reporting.

**The Pareto principle.** A small number of causes often produce most of the effect, a pattern Wikipedia describes as the Pareto principle. Applied to delays, a few variants or a few steps often account for most of the lost time. Start there.

**Queueing.** When utilization approaches capacity, waiting grows sharply, as queueing theory shows. Wikipedia describes it. A team that is "100 percent busy" will have long queues. Leave slack, especially for work that arrives randomly. See Topic 3.11 — Availability, Capacity, and Performance.

**Conformance and compliance.** Process mining can check whether actual cases follow the intended process, such as whether required approvals occurred. It helps audit and control, with the caution that data show what was recorded, not necessarily what was done. See Topic 3.4 — Change Enablement.

**Walking the process.** Data find where; people explain why. Observe the work, talk to the people who do it, and look at a sample of real cases. Lean practice calls this going to the place where work happens, the gemba. See Topic 2.4 — Lean and Kaizen.

**Privacy and fairness.** Process data can show the work patterns of individuals. Use it to understand the system, aggregate by team or step, and do not use it to monitor or rank individuals. See Topic 5.6 — AI Governance, Risk, and Compliance.

**How the lenses fit.** Process analytics is the data side of agile improvement and lean thinking: find the constraint, try a small change, measure again. AI can help discover patterns and draft maps, under review. Automation acts on the findings, such as removing a handoff. Analytics provides the evidence.

## Best practices

1. **Pick a value stream that matters.** Choose one that customers care about and that is slow or inconsistent, such as access requests or major incident handling. Define its start and end from the customer's viewpoint.
2. **Check the event data first.** Confirm that you have case identifiers, activity names, and trustworthy timestamps. Sample cases against reality, and note states that do not mean what they say.
3. **Map the as-is flow from data and from people.** Reconstruct routes with process mining where you can, and walk a few real cases with those who handle them. Compare the two views.
4. **Separate working from waiting.** For each step, measure active time and wait time. Compute flow efficiency, and note the longest waits.
5. **Look at variants and loops.** Count the main variants, the share of cases that loop back, and the reasons. Review the longest cases individually.
6. **Find the constraint.** Identify the step that limits throughput, and focus improvement there. Do not optimize other steps first.
7. **Count handoffs and lost information.** Measure handoffs per case and the delay after each, and interview the receiving side about what they lack.
8. **Use distributions and sample real cases.** Report medians and percentiles, and read a sample from the tail. Check automated findings by hand.
9. **Change one thing and measure again.** Make a small change at the constraint, record the baseline, and compare after a defined period, noting other changes in the same period.
10. **Use the data to understand the system.** Aggregate by team and step, do not rank individuals, and share findings with those who do the work.

## Questions to discuss with your team

**Where does a typical request wait longest, and who is it waiting for?**
Use data or a traced case. Expect approvals, queues, and waiting for the customer. Follow up by choosing one wait and asking who could shorten it.

**How many different routes do requests take through our process, and are they all necessary?**
Show the variants. Expect more than anyone thought. Follow up by choosing the least useful and asking whether it can be removed.

**What share of our cases loop back for missing information, and what is missing?**
Count them. Expect a high figure on certain request types. Follow up by changing the form or the first response to ask for it earlier.

**Where do handoffs lose information, and what would the receiving team want to have?**
Ask the receiving team. Expect the same few items. Follow up by adding them to the handoff.

**Which step is the constraint, and what would happen to overall flow if we doubled its speed?**
Think through it with the data. Expect people to name the loudest step. Follow up by testing the answer against queue and wait times.

**How could AI help us find patterns in our process data, and how would we check that it was right?**
AI can summarize variants and suggest causes. It can also overinterpret noise. Ask who reviews. Follow up by comparing an AI summary with a manual analysis of a sample.

## In practice: a service management example

A regional health authority's IT department takes an average of 19 working days to grant clinicians access to a new clinical application. Clinicians complain; the department's report shows every task completed within its target. The service manager decides to trace the stream.

She extracts the event data for 600 recent access requests: state changes and timestamps from the ticket system. A process mining tool reconstructs the paths. It finds nine variants, of which three cover 80 percent of cases. Working time averages about 2.5 days. The rest is waiting: for the manager's approval (average 4 days), for a clinical lead's sign-off (average 5 days), for the applications team to pick up the task (3 days), and for the requester to supply a missing training certificate (4 days, in 35 percent of cases). Flow efficiency is about 13 percent.

She walks through five cases with the people involved. She finds that the clinical lead's approval is for most roles a formality: of the last 200, none had been refused. She also finds that the certificate loop arises because the form does not ask for it up front, and that the applications team batches requests on Thursdays.

The team makes three changes. It removes the clinical lead's approval for roles with standard access, adds the certificate to the form, and switches the applications team to a queue worked daily. The manager records the baseline and tracks 100 cases after the change. Average lead time falls to 8 days, with the 90th percentile down from 31 to 15 days. She reads ten of the longest cases and finds that most involve unusual roles.

What changes: clinicians get access faster, and the report now shows lead time as the customer experiences it. What remains hard: the approval removal needs the clinical safety officer's agreement and is on a trial; the data cannot separate waiting for the customer from waiting that the team caused, because the state "pending" is used for both; and the manager has been asked to produce analyses of individual technician speed, which she declines. She asks the tool owner to add a distinct state for waiting on the customer.

## Four perspectives

### Product and delivery teams

Make your delivery pipeline a value stream and trace changes from idea to production. Provide events and timestamps that make analysis possible, and use the findings to remove waits you cause.

### Service and operations teams

Know where work waits and why. Use consistent states, record waiting reasons, and take part in tracing real cases. Raise handoff problems with the stream owner.

### Leadership and governance

Ask for lead time as the customer sees it, flow efficiency, and the constraint, not just task times. Back changes at the constraint. Do not use process data to rank individuals.

### Customers and users

You experience the whole stream, including waiting. Say how long you waited and for what, and respond promptly when the provider asks for information.

## Agile, AI, automation, and analytics

### Agile

Use the analysis to choose the next small improvement at the constraint, make it, and measure again, with stakeholders involved. Caution: do not run a long mapping program before changing anything; trace one stream, change one thing, and learn.

### AI

AI can discover process variants, summarize traces, and suggest candidate causes, with an owner and checks. Caution: AI summaries of process data can present noise as pattern; check against sampled cases and the people involved. See Topic 5.1 — AI in Service Management.

### Automation

Automate the steps that analysis shows are stable and repeated, and remove handoffs that add no value, with logs and fallbacks. Caution: automating a step that is not the constraint does not shorten lead time; check where the wait is. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

This topic is analytics for flow: event data, lead and wait times, variants, loops, and constraints. Caution: timestamps reflect how states are used, and measures of step speed can be gamed by moving tickets between states; verify with real cases. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Trusting the documented process.** It differs from reality. Use event data and real cases.
- **Dirty event data.** States and times mislead. Check and fix the data first.
- **Optimizing the wrong step.** Effort goes where it is loud. Find the constraint.
- **Averages only.** Long cases hide. Use percentiles and read the tail.
- **Ignoring waiting.** Effort is measured, delay is not. Separate working and waiting time.
- **Data without people.** Findings lack causes. Walk real cases with those who do the work.
- **Individual monitoring.** Trust collapses. Analyze the system.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Data | Task counts | Some timestamps | Consistent states and timestamps for key streams | Event data quality monitored | Event data integrated across tools and suppliers |
| Analysis | Documented process | One stream traced | Routine analysis of key streams: lead time, waits, variants | Constraints identified and tracked | Analysis automated and continuous with human review |
| Improvement | Ad hoc | Occasional fixes | Changes at the constraint, measured | Improvements tied to flow results | Improvement coordinated across streams and partners |
| Ethics | Unclear | Awareness | Team-level analysis, no individual ranking | Use reviewed with staff | Privacy built into analytics |

## Checklist

- [ ] We chose a customer-relevant value stream with clear start and end.
- [ ] We checked event data for case identifiers, activity names, and timestamps.
- [ ] We mapped the as-is flow from data and from walking real cases.
- [ ] We measured working time and waiting time, and flow efficiency.
- [ ] We counted variants, loops, and handoffs.
- [ ] We identified the constraint and focused change there.
- [ ] We reported percentiles and read a sample from the tail.
- [ ] We analyze at team and step level, not individual level.

## AI prompts

**Summarize variants from case paths.**

```text
Here is a list of case paths (sequence of activities) with counts, and median time for each path, identifiers removed: [paste].
Describe the main variants, the share of cases each covers, where loops occur, and what the longest paths have in common. Do not infer causes.
List what you are unsure of.
```

**Find waiting in a trace.**

```text
Here are the events of five cases with timestamps and the person or team handling each: [paste, names removed].
For each case, compute time between events, identify the three longest waits, and say whether the data suggest waiting on a team, on a customer, or unclear. Do not guess where the data are silent.
List what you are unsure of.
```

**Prepare questions for a process walk.**

```text
We are about to walk through a value stream with the people who do the work. Here is what the data show: [paste summary].
Write ten open questions to ask on the walk, aimed at why waits and loops occur. Avoid blame and do not suggest answers.
List what you are unsure of.
```

## AI skills

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to map and measure a value stream.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyze steps, handoffs, and waits.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): use to examine variation and uncertainty.
- [kaizen](../../../../skills/kaizen/SKILL.md): use to turn findings into small improvements.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): use to draw the as-is and to-be flows in text.

## Key sources

- Wil van der Aalst, *Process Mining: Data Science in Action* (2nd edition, 2016): the main reference on process mining.
- Mike Rother and John Shook, *Learning to See* (1999): the classic guide to value-stream mapping.
- Eliyahu Goldratt, *The Goal* (1984): a novel that introduced the theory of constraints.
- Wikipedia, "Process mining" and "Value-stream mapping": overviews of the techniques.

## References

1. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
2. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
3. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
4. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
5. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
6. Cycle time — Wikipedia — https://en.wikipedia.org/wiki/Cycle_time
7. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
8. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
9. Rework — Wikipedia — https://en.wikipedia.org/wiki/Rework
10. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
11. Statistical process control — Wikipedia — https://en.wikipedia.org/wiki/Statistical_process_control
12. Swimlane — Wikipedia — https://en.wikipedia.org/wiki/Swimlane
