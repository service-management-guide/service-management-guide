# The Service Value Chain

**The ITIL 4 service value chain is an operating model of six activities — plan, improve, engage, design and transition, obtain or build, and deliver and support — that every value stream passes through in its own order; use it to find where work waits and who owns each handoff.**

## Why this matters

Work in a service organization rarely moves in a straight line. A request arrives, someone asks a question, a change is designed, a supplier is called, the change is deployed, and support picks it up. Each step belongs to a different team, and nobody sees the whole path. The result is delay that no single team caused and no single team can fix.

The service value chain gives that path a shape. It names six activities that together turn demand into value, and it lets you describe a specific journey, a value stream, as a route through those activities. Because the activities are generic, the same model fits a software release, a laptop request, or an incident, with different routes.

This topic explains the six activities, how value streams differ from the chain, and how to use the model on real work. It describes ITIL 4, the widely documented version. ITIL (Version 5), introduced by PeopleCert in 2026, may present the operating model differently; check the owner's pages before quoting it as current (see Topic 1.3 — ITIL 5).

## Core concepts

**The six activities.** In ITIL 4 they are:

| Activity | Purpose in plain words |
|---|---|
| Plan | Keep a shared understanding of vision, current state, and direction across the organization |
| Improve | Keep services, practices, and products getting better |
| Engage | Understand stakeholder needs, and keep good relationships and transparency |
| Design and transition | Make sure products and services meet expectations for quality, cost, and time to market |
| Obtain or build | Make sure components are available when and where needed, and meet specification |
| Deliver and support | Make sure services are delivered and supported to the agreed specification and expectations |

**Inputs and outputs.** The chain takes two kinds of input: opportunity and demand from outside, and the results of other activities from inside. Each activity produces outputs that feed other activities, and the whole chain produces products and services for consumers. Value is realized when consumers use the service, not when the chain finishes.

**Value stream.** A series of steps an organization undertakes to create and deliver products and services to consumers. A value stream is specific: "resolve a major incident", "onboard a new employee", "release a mobile app change". Each follows its own path through the activities. Wikipedia's article on value streams and on value-stream mapping explain the idea and its lean origins.

**Not Porter's value chain.** The management scholar Michael Porter described a "value chain" in 1985 for manufacturing firms, with primary and support activities. ITIL's chain borrows the name and the idea of activities adding value, but it describes service operations and is not the same model. When reading older material, check which is meant.

**Activities are not teams or phases.** An activity is a type of work, not a department. In a small organization one person may do all six in a day. In a large one the same activity may happen in many places. The chain does not impose an order; the value stream does.

**Practices contribute to activities.** Each practice, such as incident management or change enablement, helps one or more activities. Mapping practices to activities shows overlaps and gaps (see Topic 1.4 — The Service Value System). For example, a change enablement practice may touch design and transition, obtain or build, and deliver and support.

**Flow and waiting.** The useful question about a value stream is not how long each step takes but where the work waits. In most organizations, work spends far more time waiting between activities than being worked on. The lean tradition of mapping value streams, covered in Topic 2.4 — Lean and Kaizen and Topic 7.6 — Process and Value Stream Analytics, exists to expose this.

**Continuous delivery as a value stream.** A software change flowing from idea to production passes through plan, engage, design and transition, obtain or build, and deliver and support, with improve running alongside. Continuous delivery practices shorten the waits between these (see Topic 2.2 — Continuous Delivery).

**How the lenses fit.** Agile shortens the loops inside the chain and increases the involvement of stakeholders in "engage". AI can assist within activities, for example summarizing requests in "engage" or proposing tests in "design and transition". Automation moves work between activities without manual handoffs. Analytics measures flow through the chain.

## Best practices

1. **Map real value streams, not the chain in general.** Choose a specific stream, such as handling a customer request for access, and trace one recent example from start to finish. Use real dates.
2. **Mark the activities each step belongs to.** Label each step in the trace with the activity it serves. You will often find several steps in one activity and none in another, which is a finding.
3. **Measure waiting separately from working.** Record how long work was being done and how long it sat in a queue. Report both; the gap usually surprises people.
4. **Find the handoffs.** Each time work passes from one team to another, ask what information travels with it and what is lost. Repeated rework often traces to a poor handoff.
5. **Treat engage as a first-class activity.** Many service teams do plan and deliver well and engage badly. Check that stakeholders are involved at the start and that feedback returns to the people who decide.
6. **Make improve visible in each stream.** Look for where improvement ideas enter the stream and who reviews them. If there is no entry point, improvement will depend on heroics.
7. **Name an owner for each value stream.** One person is accountable for the stream's flow end to end and can ask teams to change. Without an owner, each team optimizes its own part.
8. **Use the chain to place automation.** Look for steps that are stable, repeated, and understood, and automate those, with logs. Do not automate a step that is only a symptom of a missing decision.
9. **Review the map after change.** New suppliers, tools, or AI assistants alter the route. Redraw the stream and ask what moved.
10. **Keep the model light.** If the map becomes a large diagram that nobody uses, simplify it. One page showing waits is worth more than a complete chart.

## Questions to discuss with your team

**Which value stream matters most to our customers, and who owns it end to end?**
This starts with ownership. People often name a process but not a person. You may find several owners for parts and none for the whole. Follow up by choosing one stream and one accountable person to try for a quarter.

**Where did the last piece of work wait longest, and why?**
Use a real example with dates. Typical answers are approvals, queues for specialists, and waiting for information from a customer. Ask what the work was waiting for, not who was slow. Follow up by asking what would remove the wait.

**Which of the six activities do we do worst?**
Teams usually say "engage" or "improve" when asked honestly. Ask for evidence: a missed requirement, an improvement idea nobody acted on. Follow up by choosing one small change in that activity.

**What information is lost at our biggest handoff?**
Ask the receiving team what they wish they had known. Expect missing context, unclear priority, and lack of history. Follow up by agreeing one field or conversation that travels with the work.

**Which steps in our stream exist only because of a missing decision?**
Some steps, such as repeated approvals, stand in for a rule nobody has written. Ask who would approve the work if the rule existed and what the rule would say. Follow up by drafting the rule for one case.

**What would we do differently in the stream if an AI assistant could draft, summarize, or route at each step?**
This surfaces where AI could help and where it would add risk. Ask for owners and review points. Follow up by choosing one low-risk step to trial with a person reviewing every output.

## In practice: a service management example

A university's IT department handles requests to set up research computing environments for new projects. Researchers complain that it takes weeks. The service owner traces one recent request through the value chain.

The request arrives by email (engage), is clarified over three exchanges, is approved by a funding officer, is passed to an infrastructure team who build the environment (obtain or build), is tested by a second team (design and transition), and is handed to support with a short note (deliver and support). The total elapsed time is 23 working days. Hands-on time, added up from the people involved, is under four days. The rest is waiting: for clarifications, for the approval, and for the second team's queue.

The department makes three changes. It replaces the email exchange with a short form that asks the questions that were asked in every case, it pre-approves requests below a funding threshold, and it asks the infrastructure team to run basic tests as part of the build, with the second team reviewing a sample. It also names the research computing lead as owner of the stream.

What changes: the same type of request now takes about nine working days, based on the next few requests the team traces. What remains hard: the pre-approval threshold depends on a finance rule the department does not control, and the sampling approach has not yet been agreed with the security team, so some environments still wait for review. The owner lists both for the next improvement review.

## Four perspectives

### Product and delivery teams

Treat your delivery pipeline as a value stream and trace a change from idea to running service. Show the waits, and work with operations on the handoff to deliver and support. Include the engage activity in your plans, with customers involved early.

### Service and operations teams

You own much of deliver and support, and you receive handoffs from others. Record what you needed and did not get at each handoff, and bring that to the stream owner. Offer to review designs early, when it is cheaper to change them.

### Leadership and governance

Ask for value streams to be owned and measured end to end. Look at the waits, not just the effort. Fund the handoffs and the engage and improve activities, which are easy to starve.

### Customers and users

You see the stream from the outside: a request goes in and something comes back later. Ask the provider what the steps are and where your request is. Tell them where you were asked the same question twice.

## Agile, AI, automation, and analytics

### Agile

Use short cycles inside each activity, with stakeholders involved throughout, and treat the stream map as a backlog of improvements. Caution: speeding up one activity, such as build, does not improve the stream if the next activity is the bottleneck.

### AI

AI can assist inside activities: summarizing a long request thread in "engage", drafting test cases in "design and transition", or suggesting a knowledge article in "deliver and support". Assign an owner, keep a person reviewing outputs, and log what was used. Caution: an AI step that routes work wrongly adds a new kind of wait; track corrections. See Topic 5.1 — AI in Service Management.

### Automation

Automate handoffs and routine steps, such as creating a record and notifying the next team, so that work moves without waiting for a person to remember. Keep a log and a way to reverse. Caution: automation can speed up a stream toward a bottleneck and make the queue longer. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Use timestamps at activity boundaries to compute lead time, working time, and waiting time for each stream. Caution: timestamps depend on how people use ticket states, and a measure of "time in activity" can be gamed by moving tickets between states; check against traces of real work. See Topic 7.6 — Process and Value Stream Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Drawing the chain, not a stream.** The six boxes hang on a wall and describe nothing. Trace a real request with dates.
- **Optimizing one activity.** A team speeds up build and the stream stays slow. Measure end to end and find the longest wait.
- **Ignoring engage and improve.** Planning and delivery are strong and feedback is weak. Give both explicit owners and time.
- **Stream with no owner.** Each team defends its own step. Name one accountable person for the stream.
- **Confusing the chain with Porter's model.** Readers import the wrong ideas. Say which model you mean.
- **Treating activities as teams.** The model is turned into an org chart. Keep activities as types of work that many teams perform.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Stream mapping | No maps | One stream traced | Main streams mapped with real data | Maps updated and used for decisions | Streams mapped across teams, suppliers, and platforms |
| Flow measurement | Effort only | Elapsed time known | Working and waiting time reported | Bottlenecks tracked and acted on | Flow optimized across the whole system |
| Ownership | Teams own steps | Owners for main streams | Every key stream has an owner | Owners review flow and customer outcomes | Owners coordinate across streams and partners |
| Engage and improve | Ad hoc | Some feedback captured | Feedback and improvement have defined entry points | Results of both measured | Feedback and improvement connected across streams |

## Checklist

- [ ] We know which value streams matter most to customers.
- [ ] Each key stream has a named owner.
- [ ] We traced at least one real request with dates.
- [ ] We know working time and waiting time for that stream.
- [ ] We identified the main handoffs and what is lost at each.
- [ ] Engage and improve each have a defined entry point.
- [ ] We placed automation on stable, repeated steps with logs.
- [ ] We redraw the stream after major change.

## AI prompts

**Analyze a trace for waits.**

```text
Here is a trace of one request through our process, with timestamps and who handled each step: [paste trace].
Calculate for each step the elapsed time from the previous step, and list the three longest gaps. For each, suggest two questions to find out why the work waited. Do not assume causes.
List what you are unsure of.
```

**Label steps with value chain activities.**

```text
Below are the steps in our process for [stream name]: [paste steps].
Label each with one of the six ITIL 4 value chain activities (plan, improve, engage, design and transition, obtain or build, deliver and support) and give a one-line reason. Mark labels you are unsure about and list which activities have no steps.
Do not add steps.
```

**Draft questions for a handoff review.**

```text
We hand work from [team A] to [team B] in the stream [name]. The information handed over is: [list].
Write ten questions to ask team B about what they need that they do not receive. Avoid suggesting answers.
List what you are unsure of.
```

## AI skills

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to map and measure a value stream.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyze the steps, waits, and handoffs in a process.
- [kaizen](../../../../skills/kaizen/SKILL.md): use to turn findings into small improvement experiments.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of ITIL guidance and the newest version.
- Wikipedia, "Value stream": the concept the chain organizes.
- Wikipedia, "Value-stream mapping": the lean technique for finding waits.
- Wikipedia, "Value chain": Porter's original model, to avoid confusing the two.

## References

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Value chain — Wikipedia — https://en.wikipedia.org/wiki/Value_chain
4. Michael Porter — Wikipedia — https://en.wikipedia.org/wiki/Michael_Porter
5. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
6. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
7. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
8. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
9. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
