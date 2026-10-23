# DevOps

**DevOps is a set of cultural habits, working practices, and tools that bring development and operations together so that teams can change live services quickly and run them reliably; it complements ITIL by moving many controls into the work itself, and it does not replace the need for clear ownership and evidence.**

## Why this matters

For years, building software and running it were separate jobs in separate teams with different goals. Developers were rewarded for change, operations for stability, and the two groups met at a handover that both found frustrating. Releases were thrown over a wall, incidents were thrown back, and customers waited.

DevOps emerged in the late 2000s as a response. Its core idea is simple: the people who build a service should share responsibility for running it, and the people who run it should help shape how it is built. That shared responsibility, supported by automation and fast feedback, lets teams release often and recover fast.

For service management, DevOps is a major influence and sometimes a source of friction. ITIL describes practices such as change enablement and incident management, and DevOps describes how teams carry them out with pipelines, shared on-call, and blameless review. Organisations that treat the two as opposed end up with parallel systems; those that connect them get controls that are quicker and better evidenced. This topic explains the ideas and shows how they fit with the rest of this guide.

## Core concepts

**What DevOps is.** The word combines "development" and "operations". Wikipedia describes it as a set of practices that integrates software development and IT operations, aiming to shorten the delivery lifecycle and provide continuous delivery with high quality. It is a movement more than a framework: there is no governing body or single certification that defines it.

**Culture first.** The central change is cultural: shared goals, shared responsibility, and collaboration between roles. Teams that adopt the tools without the culture keep the old handover under a new name. A common summary is "you build it, you run it", associated with a remark by Werner Vogels of Amazon, meaning that the team that builds a service is responsible for running it.

**The three ways.** In the novel *The Phoenix Project* and the handbook that followed, Gene Kim and co-authors describe three principles: flow (speed work from development to operations to customers), feedback (create fast feedback from right to left at every stage), and continual learning and experimentation. They link DevOps to lean thinking; see Topic 2.4 — Lean and Kaizen and Topic 2.3 — Flow and Kanban.

**CALMS.** A common memory aid for the elements: culture, automation, lean, measurement, and sharing. It is useful as a checklist of what to look at in a team, not as a maturity score.

**Practices.** Typical DevOps practices include version control for everything, continuous integration and delivery (see Topic 2.2 — Continuous Delivery), infrastructure as code (see Topic 6.3 — Infrastructure as Code and GitOps), automated testing, monitoring and observability (see Topic 7.4 — Observability and Telemetry), shared on-call, and blameless reviews of incidents.

**Shifting left.** Moving checks such as testing and security earlier in the lifecycle, where problems are cheaper to fix. DevSecOps extends the idea to security, building security checks into the pipeline. Wikipedia describes both.

**Platform engineering.** A newer practice in which a team builds and runs an internal platform that other teams use for building, deploying, and operating services. The aim is to reduce the load on product teams by offering paved, standard routes. Wikipedia describes platform engineering. Care is needed: a platform that teams are forced to use but cannot shape becomes another handover.

**Relationship to ITIL.** ITIL 4 acknowledges DevOps and describes its practices in ways that can be met by pipeline controls. The two answer different questions: DevOps describes how teams work and automate; ITIL describes the practices an organisation needs, such as incident, change, and service level management. A useful summary is that DevOps often provides the "how" and ITIL the "what to consider". See Topic 1.2 — ITIL and Topic 2.9 — Agile Service Management.

**Relationship to SRE.** Site reliability engineering (SRE) is an engineering discipline for reliability that grew at Google; it shares goals with DevOps, uses service level objectives and error budgets, and often treats operations as a software problem. See Topic 2.6 — Site Reliability Engineering.

**Relationship to agile.** Agile practice focuses on delivering working software in small pieces with stakeholder involvement; DevOps extends the concern past the point of release, into running and improving the service. The two share values such as collaboration, fast feedback, and continuous improvement.

**Common objections.** Some operations staff fear DevOps means cutting jobs or removing controls; some developers fear it means permanent on-call. Both fears have real cases behind them. Address them directly with clear agreements on workload, support, and what controls remain.

**How the lenses fit.** DevOps is the delivery culture within the agile lens. AI assistants are now part of many toolchains, under human review. Automation is central. Analytics, including delivery and reliability measures, closes the feedback loop.

## Best practices

1. **Start with shared goals.** Give development and operations the same outcome to care about, such as customer-visible reliability and the speed of safe change. Separate targets for each group recreate the wall.
2. **Make the team responsible for what it builds.** Let the team that builds a service take part in running it, with the support, training, and limits on on-call load that makes this sustainable.
3. **Automate the path to production.** Use pipelines that build, test, scan, and deploy the same way every time, with records. See Topic 6.4 — Pipelines and Automated Change.
4. **Put everything in version control.** Code, configuration, infrastructure definitions, and runbooks. A change is then reviewable, traceable, and reversible.
5. **Shift checks left.** Add unit tests, security scans, and policy checks early in the pipeline, and fix the causes of repeated failures.
6. **Watch production and share what you see.** Give developers access to the same monitoring operations uses, and review it together. See Topic 3.10 — Monitoring and Event Management.
7. **Review incidents without blame.** Hold a review after significant incidents, focus on the system, and track the actions. See Topic 3.3 — Problem Management.
8. **Offer a platform, not a mandate.** If you build an internal platform, treat the teams that use it as customers: ask what they need, publish its roadmap, and measure whether it helps.
9. **Keep controls, change how they work.** Where a control manages a real risk, such as separation of duties, keep it and meet it with automation and records rather than with a meeting.
10. **Measure delivery and reliability together.** Look at how fast and how often you change as well as how often changes cause trouble and how fast you recover. Use the numbers to learn, not to rank people.

## Questions to discuss with your team

**Where is the handover between building and running, and what gets lost there?**
Most organisations have one or more. Ask both sides: what do developers not know about running the service, and what does operations not know about the design? Expect long lists. Follow up by choosing one handover to remove or shrink.

**Who is called when our service fails at night, and do they know how to fix it?**
This examines "you build it, you run it" in practice. Answers range from a developer on call to a separate team with limited knowledge. Ask about workload and the training given. Follow up by agreeing one change to improve either the knowledge or the load.

**Which controls do we have that exist because of a past incident, and could a pipeline provide them?**
Many controls are inherited. Ask what risk each addresses and what evidence satisfies the owner. Follow up by trialing one pipeline replacement with the owner's participation.

**What would our internal platform need to do for us to choose it freely?**
This tests platform thinking. If teams would only use it because they are told to, it is not serving them. Ask what they use today and why. Follow up by agreeing a small set of customer interviews.

**How do we review incidents, and what changed after the last one?**
Reviews matter only if actions follow. Ask for the last review's actions and their status. Expect some still open. Follow up by assigning owners and review dates to those still outstanding.

**How are AI coding or operations assistants used on our toolchain, and who reviews their output?**
AI assistants can write code, tests, configuration, and runbooks, and can summarise incidents. Ask who owns each use, what is reviewed by a person, and what would catch an error. Follow up by choosing a use to audit this month.

## In practice: a service management example

A regional bank's retail digital team builds a mobile app, and a separate operations group runs production. Releases happen every six weeks, with a three-day freeze. Developers say operations blocks change; operations say developers ship untested code and leave them to cope. Incident reviews end with disagreement about whose fault it was.

A new engineering manager proposes an experiment with one service, the card-controls feature. A developer and an operations engineer join the same team. They agree a shared goal: customers can freeze and unfreeze a card in under five seconds, and changes can be released safely at any time. They put the configuration in version control, add automated tests and security scans to a pipeline, and agree that the whole team takes the on-call rota, with operations engineers training developers and a limit of one week in six per person. The bank's risk team insists on keeping separation of duties; the team meets this by requiring a peer review for each change and by recording the pipeline evidence.

After six months, card-controls releases weekly with few incidents, and the risk team accepts the pipeline record in place of a change board meeting for this service. The incident reviews are blameless, and two repeated causes are fixed. The other services remain on the old model.

What changes: this team no longer waits for the six-week cycle and has a shared view of production. What remains hard: the rest of the organisation is sceptical, because the team has more engineers per service than others; the on-call burden has made two developers consider leaving; and the shared pipeline depends on a central platform team that has a long backlog. The manager takes the staffing and platform questions to the leadership group rather than presenting the result as a template.

## Four perspectives

### Product and delivery teams

Own the service end to end: design, build, release, and run. Learn how operations works, share on-call fairly, and make observability and runbooks part of your definition of done.

### Service and operations teams

Share what you know about failure and recovery, help build the pipeline and the monitoring, and move toward engineering your own work. Keep the controls that matter, and show how automation meets them.

### Leadership and governance

Set shared goals for development and operations, fund the platform and the training, and watch workload and on-call limits. Do not rank teams by delivery numbers. Ask for evidence that controls work.

### Customers and users

You should see faster fixes and smaller, safer changes. Tell teams what matters most, and give feedback on changes that disrupt you.

## Agile, AI, automation, and analytics

### Agile

DevOps extends the agile concern for working software past release into running and improving the service, with stakeholders involved and feedback continuous. Caution: do not treat it as a tool purchase or a new team name; the culture is the change.

### AI

AI assistants can help write code, tests, and infrastructure definitions, summarise logs and incidents, and draft runbooks, with an owner and human review of anything that reaches production. Caution: an assistant can introduce subtle faults or insecure patterns; apply the same pipeline checks as for human changes, and track AI-assisted changes that fail. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Automate the path to production, environment creation, testing, and routine operations, with logs and rollback. Caution: automation concentrates power in the pipeline, so control access to it and review changes to the pipeline as carefully as changes to the service.

### Analytics

Look at deployment frequency, lead time for changes, change failure rate, and time to restore, along with reliability and customer measures. Caution: the delivery measures are easy to game, and comparing teams ignores context; use them to find where to improve. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **A DevOps team that becomes a new silo.** A group takes the name and the handover remains. Spread skills and responsibility across teams.
- **Tools without culture.** The pipeline is built and the blame continues. Work on shared goals and review practices.
- **Permanent on-call heroics.** Developers burn out. Set limits, share load, and fix causes of pages.
- **A mandated platform nobody wants.** Teams work around it. Treat teams as customers and measure usage by choice.
- **Dropping controls without replacing them.** Risk rises and auditors object. Meet the control's purpose with automation and records.
- **Delivery numbers as targets.** Teams game them. Use measures for learning.
- **Ignoring security until the end.** Findings arrive late and block releases. Shift checks left.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Culture | Separate goals for development and operations | Shared goals in one team | Shared goals and responsibility widely adopted | Culture practices reviewed with evidence | Shared across teams, suppliers, and partners |
| Pipeline | Manual releases | Automated build and test | Automated path to production for most services | Pipeline owned and improved as a product | Pipelines governed and shared across the organisation |
| Operations | Separate on-call | Shared on-call in one team | Shared on-call with limits and support | On-call load and causes measured | Operations engineered and automated across services |
| Learning | Blame | Occasional reviews | Blameless reviews with tracked actions | Learning measured and shared | Learning shared across teams and with suppliers |

## Checklist

- [ ] Developers and operations share goals for reliability and safe change.
- [ ] The team that builds a service takes part in running it, within sensible on-call limits.
- [ ] Everything that changes the service is in version control and goes through the pipeline.
- [ ] Security and policy checks run early in the pipeline.
- [ ] Developers can see production monitoring.
- [ ] We hold blameless reviews and track the actions.
- [ ] Controls that matter are kept and met through automation and records.
- [ ] AI assistance on the toolchain has an owner and human review.

## AI prompts

**Find handovers to remove.**

```text
Here is a description of how a change goes from "code complete" to "running in production" in our organisation: [paste steps and who does each].
List each handover, what information passes across it, and what might be lost. For each, give two questions to ask the people on either side. Do not propose solutions.
List what you are unsure of.
```

**Summarize an incident for a blameless review.**

```text
Below is the timeline and notes from an incident: [paste timeline with names removed].
Draft a neutral summary under these headings: what happened, how it was detected, what was done, what helped, what slowed us down, and questions for the review. Do not assign blame or state causes not in the notes.
List what you are unsure of.
```

**Draft a platform customer interview.**

```text
We run an internal platform for [purpose]. Our users are [teams and roles].
Write ten open interview questions to learn what helps and hinders them, avoiding questions that suggest an answer. Add three things to listen for.
List what you are unsure of.
```

## AI skills

- [postmortem](../../../../skills/postmortem/SKILL.md): use to run a blameless review with tracked actions.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): use to move checks earlier in the pipeline.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): use to design a sustainable on-call arrangement.
- [runbook](../../../../skills/runbook/SKILL.md): use to turn operational knowledge into short, current runbooks.

## Key sources

- Gene Kim, Jez Humble, Patrick Debois, and John Willis, *The DevOps Handbook*: the principles and practices, with case studies.
- Gene Kim, Kevin Behr, and George Spafford, *The Phoenix Project*: a novel that introduced the ideas to many readers.
- DORA (dora.dev): research on delivery and reliability performance.
- Wikipedia, "DevOps": an overview of the history and practices.

## References

1. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
2. Phoenix Project — Wikipedia — https://en.wikipedia.org/wiki/Phoenix_Project
3. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Platform engineering — Wikipedia — https://en.wikipedia.org/wiki/Platform_engineering
7. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
8. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. DORA — DevOps Research and Assessment — https://dora.dev
