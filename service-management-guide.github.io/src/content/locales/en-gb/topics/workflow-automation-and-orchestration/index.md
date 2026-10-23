# Workflow Automation and Orchestration

**Workflow automation moves work between people and systems by rules; orchestration coordinates many such steps across tools, with approvals, retries, and a record of state; they work when workflows are simple, idempotent, observable, and designed for the humans who must step in.**

## Why this matters

Most service work is a relay. A request starts in a portal, goes to a manager for approval, creates an account in one system, a mailbox in another, a licence in a third, a ticket for facilities, and a message to the requester. Each baton pass is a chance to wait, to lose information, or to be forgotten. When people do the passing by email and memory, delay and error are built in.

Workflow automation replaces the passing with a defined flow. The system knows the steps, who or what does each, what to do when a step fails, and what has happened so far. Orchestration is the same idea at larger scale: a coordinator that calls many systems in the right order, waits for results, and handles the awkward cases. Wikipedia describes workflows, workflow management systems, and orchestration in computing as ways to define and run such flows.

The promise is faster, more consistent work with a visible record. The risks are familiar from other automation: a flawed process is hardened into code, a failure halfway through leaves things inconsistent, and a change in one connected system breaks the flow silently. Good design anticipates these. This topic describes the main building blocks, the patterns that keep workflows reliable, and the place of people in them. It builds on Topic 6.1 — Automation Strategy, relates to service requests (Topic 3.6 — Service Request Management), and leads to self-service (Topic 6.5 — Self-Service and Automated Fulfilment) and pipelines (Topic 6.4 — Pipelines and Automated Change).

## Core concepts

**Workflow.** A sequence of steps, with rules about who or what performs each, in what order, and under what conditions. Wikipedia describes workflow as an orchestrated and repeatable pattern of activity. A workflow can be as simple as "when a ticket is marked resolved, notify the requester" or as complex as an end-to-end new-starter journey.

**Workflow engine.** Software that runs workflows: it keeps track of the state of each instance, executes steps, waits for events, and records what happened. Wikipedia describes workflow engines and workflow management systems. Many ticketing platforms include one, and standalone platforms exist for cross-system flows.

**Orchestration.** Coordinating several automated tasks and services into one process, typically from a central controller that calls each in turn. Wikipedia describes orchestration in computing. It contrasts with choreography, in which services react to events without a central controller. Orchestration is easier to see and debug; choreography can be more resilient and scalable. Many organisations use both.

**Modelling.** Flows can be drawn with a notation such as the Business Process Model and Notation (BPMN), described on Wikipedia, and then executed. Diagrams help business and technical people agree on a flow. Keep them readable, and keep the model and the running workflow in step.

**State.** What has been done so far in one instance of a workflow. Knowing the state lets the system resume after a failure, show progress, and report. Wikipedia describes finite-state machines, a useful way to think about a request that is "submitted", "approved", "fulfilled", and "closed".

**Triggers and events.** A workflow starts from a trigger: a form, a message, a schedule, a change in a system. Event-driven approaches, described on Wikipedia as event-driven architecture, let systems announce what happened so that others can react. Webhooks, also described there, are a common way for one system to notify another.

**Integration.** Workflows call other systems through application programming interfaces (APIs), connectors, or integration platforms. Wikipedia describes APIs and enterprise application integration. Integration is where most workflows break, because systems change their interfaces, rate limits, and credentials.

**Idempotence and retries.** An operation is idempotent if doing it twice has the same effect as doing it once. Wikipedia describes idempotence. When a step fails or times out, the safe response is often to retry, which is safe only if the step is idempotent. Retries should wait longer each time, a technique described on Wikipedia as exponential backoff, and stop after a limit.

**Failure handling.** What happens when step four of seven fails? Options include retrying, skipping, compensating for earlier steps by undoing them, or stopping and asking a person. Long-running workflows that span systems cannot rely on a single transaction; Wikipedia describes the saga approach, in which each step has a compensating action. Failures that cannot be handled automatically should go to a queue with a clear owner, not vanish. Wikipedia describes dead letter queues for messages that cannot be processed.

**Human tasks and approvals.** Many workflows need a person: to approve, decide, or do something that cannot be automated. Wikipedia describes human-in-the-loop systems. Design these tasks with care: who is asked, how they are reminded, what happens if they do not respond, and what information they see. An approval that waits indefinitely stalls the flow.

**Observability and audit.** Every instance should be traceable: what triggered it, what each step did, what the result was, and who approved. Wikipedia describes audit trails. This supports support questions ("where is my request?"), troubleshooting, and compliance. See Topic 7.4 — Observability and Telemetry.

**Low-code and robotic process automation.** Low-code platforms and robotic process automation (RPA) allow people who are not programmers to build workflows, or to automate actions in user interfaces. Wikipedia describes both. They speed up simple cases and can produce brittle, unowned automations at scale. Apply the same ownership, testing, and review you would to code.

**Versioning and change.** A workflow definition changes over time while instances are still running. Decide how to handle in-flight instances when you change the definition. Keep definitions in version control, and test changes before deploying. See Topic 3.4 — Change Enablement.

**Security.** Workflows hold credentials and call systems with power. Give them their own identities with minimum permissions, store secrets safely, and review who can change a workflow. See Topic 3.13 — Information Security Management.

**How the lenses fit.** Workflow tools are the plumbing of the automation lens. Agile practice suggests building a workflow in small steps with users. AI can classify requests, draft content, and make suggestions inside a flow, with human review. Analytics uses the state and timing data to find delays.

## Best practices

1. **Map and simplify before building.** Draw the process as it is, remove steps that add no value, and agree on the future flow with the people involved. See Topic 6.1 — Automation Strategy.
2. **Keep workflows small and clear.** Prefer several short workflows with defined hand-offs to one huge one. Name steps in plain language so that support staff can follow them.
3. **Design each step to be safe to repeat.** Make steps idempotent where you can, so that retrying is harmless. Where you cannot, add checks that detect that the step already happened.
4. **Plan for failure.** For each step, decide what happens on failure: retry with backoff and a limit, compensate, or hand to a person. Send unresolved failures to a visible queue with an owner.
5. **Treat human tasks as first-class.** Specify who, what they see, how long they have, reminders, and what happens on timeout or absence. Provide a delegate.
6. **Show status to users.** Let requesters see where their request is and what is expected next. Send notifications at meaningful points, not at every step.
7. **Log and trace every instance.** Record triggers, inputs, outputs, decisions, and approvers. Make it easy to look up one instance by its reference.
8. **Control changes to workflows.** Keep definitions in version control, review changes, test them in a safe environment, and decide how to treat running instances.
9. **Manage the connections.** Keep a register of integrations with owners, credentials, and contact points for each system. Monitor for failures and watch for announced changes to interfaces.
10. **Review performance.** Look at time per step, waiting, failures, and exceptions. Use the data to remove bottlenecks and to retire workflows that nobody uses.

## Questions to discuss with your team

**Which of our processes pass work between people and systems the most, and where does work get lost?**
Trace one real example. Expect an email or a chat hand-off at some point. Follow up by choosing one hand-off to automate.

**What happens today when a step fails halfway through a process, and who knows?**
Think of account creation that succeeded in one system and failed in another. Expect inconsistency. Follow up by designing a failure route for one workflow.

**Which of our approvals stall, and what should happen if the approver does not respond?**
Look at the oldest waiting items. Expect long delays. Follow up by agreeing a reminder, a delegate, and a timeout rule.

**Who owns each integration our workflows rely on, and how would we know it broke?**
List the integrations. Expect orphans. Follow up by naming owners and adding an alert for failures.

**Which workflows were built by one person with a low-code tool and might not be understood by anyone else?**
Ask around. Expect several. Follow up by documenting the top three and putting them in version control or a shared register.

**Where could AI help inside a workflow, and where must a person decide?**
AI can classify, draft, and suggest. A person should decide on access and money. Follow up by choosing one step to trial with review, and a measure of correct routing.

## In practice: a service management example

A regional bank's HR and IT teams manage "joiner, mover, leaver" events by email. A new starter needs an account, a laptop, building access, a payroll record, and training enrolment, handled by five teams. Each team gets an email from HR, does its part, and sometimes replies. About one in five new starters lacks something on day one.

The service manager proposes a single workflow on the bank's ticketing platform, which has a workflow engine and connectors. She starts by mapping the process with the five teams and finds that three of the approvals are never refused. The new design removes two and keeps one, from the new starter's manager. HR's record of the new hire triggers the workflow. It creates one parent case with five child tasks, each assigned to the right team's queue, running in parallel where possible. Account creation is automated with an identity system connector; the laptop task goes to a technician; building access goes to facilities with the start date.

The team designs for failure. Account creation is idempotent: the connector checks whether the account exists before creating it. If the connector fails twice with backoff, the task goes to a technician queue with the error attached, and an alert goes to the workflow owner. Human tasks have reminders after one day and escalate to a team lead after three. Each case shows its status to HR and the new starter's manager.

After three months, the share of starters lacking something on day one falls to about 4 percent. The audit trail lets the service desk answer "where is it?" in a minute. What remains hard: the payroll connector depends on a vendor interface that changed once without notice, causing a failed run that nobody saw for two days until the alert was added; the facilities team still works from a spreadsheet and copies the case data by hand; and mover and leaver events have more exceptions and have not yet been included. The manager plans mover events next and asks the vendor for change notices.

## Four perspectives

### Product and delivery teams

Expose stable, documented APIs and events that workflows can use, with clear error messages. Tell workflow owners about changes in advance. Use the same ideas for your own release workflows.

### Service and operations teams

Own the workflows and integrations that you run: logs, alerts, failure queues, and documentation. Handle exceptions promptly, and bring patterns to the workflow owner.

### Leadership and governance

Ask for the journey view, with an owner for each cross-team workflow. Fund integration upkeep. Look for evidence of faster, more reliable flow, not a count of workflows.

### Customers and users

You should see the status of your request and get what you asked for without chasing. When a step needs your input, it should be clear what is needed and by when.

## Agile, AI, automation, and analytics

### Agile

Build workflows one journey at a time with the people who use them, release small improvements, and review results. Caution: a platform rollout that migrates every process at once multiplies risk; start with one journey.

### AI

AI can classify incoming requests, extract details from free text, draft messages, and suggest routing, with a person or a rule checking before actions. Name an owner and track corrections. Caution: an AI step in a workflow can send work to the wrong place at scale; sample outcomes and keep a fallback queue. See Topic 5.1 — AI in Service Management.

### Automation

Workflows are the core of this lens. Build with idempotent steps, limits, and logs, and keep each integration owned and monitored. Caution: a workflow that touches many systems can spread an error widely; add rate limits and a stop switch. See Topic 6.1 — Automation Strategy.

### Analytics

Use workflow data for time per step, waiting for approvals, failure rates, exceptions, and volume by type. Caution: timing data reflect how steps are defined and can be gamed by splitting or reclassifying tasks; check with sample cases. See Topic 7.6 — Process and Value Stream Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Automating a bad process.** Waste is preserved. Simplify and agree the flow first.
- **No failure design.** A step fails and the instance is stuck. Define retries, compensation, and queues.
- **Non-idempotent retries.** Duplicates are created. Make steps safe to repeat, or check first.
- **Approvals that stall.** Work waits for an absent person. Add reminders, delegates, and timeouts.
- **Silent integration failure.** A connector breaks and nobody knows. Monitor and alert.
- **Unowned low-code flows.** Nobody understands them. Register, document, and review.
- **Changing definitions carelessly.** Running instances break. Version and test changes.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Design | Hand-offs by email | A few simple workflows | Mapped, simplified journeys with owners | Workflows improved from data | Journeys orchestrated across systems and partners |
| Reliability | Breaks unnoticed | Basic alerts | Defined retries, failure queues, and idempotent steps | Failures measured and reduced | Self-checking flows with human escalation |
| Human tasks | Ad hoc | Approvals by email | Defined tasks, reminders, and delegates | Task delays measured | Human tasks balanced and automated by risk |
| Control | No records | Some logs | Version control, audit trail, and register | Changes reviewed and audited | Governance integrated with the platform |

## Checklist

- [ ] We mapped and simplified each process before automating it.
- [ ] Workflows are small, named in plain language, and owned.
- [ ] Steps are idempotent or protected against duplication.
- [ ] Failure routes and queues are defined, with alerts.
- [ ] Human tasks have reminders, delegates, and timeouts.
- [ ] Every instance is logged and traceable.
- [ ] Definitions are in version control and changes are tested.
- [ ] Integrations have owners and monitoring.

## AI prompts

**Turn a procedure into a workflow outline.**

```text
Here is a description of how we handle [type of request] today: [paste steps and who does each].
Draft a workflow outline with: trigger, steps (marking each as automated, human, or approval), data passed between steps, and for each step what should happen on failure or no response. Mark every assumption. Do not invent systems or rules.
List what you are unsure of.
```

**Find failure points in a flow.**

```text
Here is our workflow definition in plain text: [paste].
List each step that calls another system, what could go wrong, whether it appears to be safe to retry, and what information a support person would need to fix it. Do not rewrite the workflow.
List what you are unsure of.
```

**Analyze delays from workflow data.**

```text
Here is an export of workflow instances with step names, start and end times, and outcome, with identifiers removed: [paste].
Compute median and 90th percentile time for each step, list the three longest waits, count failures by step, and list questions to investigate. Do not infer causes.
List what you are unsure of.
```

## AI skills

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyse steps, waits, and hand-offs.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to see the whole journey across teams.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): use to draw workflows in text for review.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to assign who does and who approves each step.
- [change-request](../../../../skills/change-request/SKILL.md): use to describe changes to workflow definitions.

## Key sources

- OMG, Business Process Model and Notation (BPMN) specification: the standard notation for process diagrams.
- Gregor Hohpe and Bobby Woolf, *Enterprise Integration Patterns* (2003): a catalogue of patterns for connecting systems.
- Wikipedia, "Workflow" and "Orchestration (computing)": overviews of the ideas.
- Wikipedia, "Idempotence": the property that makes retries safe.

## References

1. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
2. Workflow engine — Wikipedia — https://en.wikipedia.org/wiki/Workflow_engine
3. Workflow management system — Wikipedia — https://en.wikipedia.org/wiki/Workflow_management_system
4. Orchestration (computing) — Wikipedia — https://en.wikipedia.org/wiki/Orchestration_(computing)
5. Business Process Model and Notation — Wikipedia — https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
6. Finite-state machine — Wikipedia — https://en.wikipedia.org/wiki/Finite-state_machine
7. Event-driven architecture — Wikipedia — https://en.wikipedia.org/wiki/Event-driven_architecture
8. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
9. Exponential backoff — Wikipedia — https://en.wikipedia.org/wiki/Exponential_backoff
10. Dead letter queue — Wikipedia — https://en.wikipedia.org/wiki/Dead_letter_queue
11. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
