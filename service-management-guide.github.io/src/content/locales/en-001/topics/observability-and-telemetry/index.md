# Observability and Telemetry

**Observability is the ability to ask new questions of a running system and get answers from the data it emits: metrics, logs, and traces carrying consistent context; it pays off when telemetry is designed in, standardized on open formats, kept at a cost you can afford, and used to understand user experience, not just machine health.**

## Why this matters

Monitoring answers questions you thought of in advance. Is the service up? Is the disk full? Is latency above two seconds? Those are good questions, and they catch the failures you have seen before. But modern services fail in new ways. A change in one component slows a request in another. A single customer's unusual data triggers a rare path. A dependency three layers down degrades, and nobody has a dashboard for it.

When a new failure arrives, the team needs to ask questions nobody anticipated: which requests are slow, for which users, through which services, since which release? If the system emits rich, connected data, the team can follow the trail. If not, they guess, add logging, redeploy, and wait for the failure to happen again. Wikipedia describes observability in software as the ability to understand a system's internal state from its external outputs, an idea borrowed from control theory.

The practical work is in the telemetry: the data that systems emit about themselves. Good telemetry is designed, consistent, and connected, so that a user complaint can be traced to a request, the request to the services it touched, and the slowness to a particular call. This topic describes the main kinds of telemetry, the standards that make them portable, and the costs and risks that come with them. It builds on monitoring (Topic 3.10 — Monitoring and Event Management) and links to SRE (Topic 2.6 — Site Reliability Engineering), AIOps (Topic 5.2 — AIOps), and data governance (Topic 7.2 — Data Foundations and Governance).

## Core concepts

**Telemetry.** Data collected from a system and sent to a place where it can be examined. Wikipedia describes telemetry in general. In software, the main signals are metrics, logs, and traces, with newer ones such as profiles and events.

**Metrics.** Numbers measured over time, such as request rate, error rate, latency, memory use, and queue depth. Metrics are cheap to store and good for trends, alerts, and dashboards. They summarize, so they lose detail about individual requests. Time series databases, described on Wikipedia, store them efficiently; Prometheus is a widely used open-source example.

**Logs.** Timestamped records of discrete events, such as an error message or a completed transaction. Wikipedia describes logging in computing. Logs hold detail, and they are voluminous and expensive to store and search. Structured logs, with consistent named fields rather than free text, are easier to query and to link with other signals.

**Traces.** A record of the path of one request through the parts of a distributed system, showing which services it passed through and how long each took. Wikipedia describes tracing in software. Traces answer "where did the time go?" in systems built from many services, such as microservices, which Wikipedia also describes.

**Context and correlation.** What makes the three signals powerful together is shared context: an identifier that ties a log line to the trace and the user's request, and labels such as service, version, and environment on everything. Without shared context, you have three piles of data. With it, you can move from a slow request in a metric to the trace and then to the log line that explains it.

**Instrumentation.** Adding the code that produces telemetry. Wikipedia describes instrumentation in programming. It can be automatic, through libraries and agents, or manual, where developers add the signals that matter to the business, such as "order placed". Instrument what users do, not only what machines do.

**OpenTelemetry and open standards.** OpenTelemetry is an open-source project, under the Cloud Native Computing Foundation (which Wikipedia describes), that provides common formats and tools for emitting metrics, logs, and traces, independent of the tool that stores and analyzes them. Check the project's own site for its current state. The aim is to let you collect telemetry once and send it to any compatible back end, reducing lock-in. Wikipedia describes open standards and vendor lock-in in general terms. See Topic 3.14 — Supplier Management.

**Monitoring versus observability.** Monitoring watches known conditions and alerts; observability supports exploring unknown ones. They are complementary: alerts tell you something is wrong, exploration tells you why. See Topic 3.10 — Monitoring and Event Management.

**Service level indicators from telemetry.** SLIs, such as the share of requests that succeed within a time, are computed from telemetry. Define them from the user's viewpoint, and measure them where the user's request enters the system. See Topic 2.6 — Site Reliability Engineering and Wikipedia's article on service-level objectives.

**User and business telemetry.** Real user monitoring and synthetic monitoring, described on Wikipedia, show experience from the outside: page load times, journey success, errors in browsers and apps. Business events, such as sign-ups and payments, link technical health to outcomes. See Topic 7.7 — Experience and Sentiment Analytics.

**Cardinality and cost.** Cardinality is the number of distinct values of a label. A metric labeled by user identifier has a huge cardinality and can overwhelm a metrics store. Wikipedia describes cardinality in data modeling. Telemetry volume grows with traffic and detail, and storage and processing cost grows with it. Decide what to keep at full detail, what to sample, and what to aggregate.

**Sampling.** Keeping only a fraction of traces or logs. Wikipedia describes sampling in statistics. Sampling cuts cost and can hide rare events; consider keeping all errors and slow requests and sampling the normal ones.

**Retention.** How long telemetry is kept. Keep high-detail data briefly, and aggregates longer. Retention affects cost, investigation, and privacy. See Topic 7.2 — Data Foundations and Governance.

**Privacy and security in telemetry.** Logs and traces can contain personal data, credentials, and secrets, by accident or design. Wikipedia describes personal data. Scrub or avoid sensitive fields at the source, control access, and set retention. Telemetry is also a security data source. See Topic 3.13 — Information Security Management.

**Observability for AI.** AI systems need their own telemetry: inputs, outputs, latency, cost, error and refusal rates, user feedback, and signals of drift. Record enough to investigate a wrong answer, with care for the data recorded. See Topic 5.1 — AI in Service Management.

**Platform and ownership.** Many organizations run a shared telemetry platform, with standards for naming, labeling, and retention, and teams that own the signals from their services. A platform team provides tooling and guidance; service teams own what they emit and how they use it.

**How the lenses fit.** Observability is the data base for analytics and for AIOps. Agile practice treats instrumentation as part of the definition of done. Automation uses telemetry to scale and remediate.

## Best practices

1. **Instrument as you build.** Treat telemetry as part of the feature. Include it in the definition of done, and review it with the design.
2. **Standardize names and context.** Agree service names, label sets, units, and a request identifier carried through every service. Document them and check them in the pipeline.
3. **Emit structured logs.** Use consistent named fields, include the request identifier, and keep messages short. Avoid logging secrets and unneeded personal data.
4. **Trace the paths that matter.** Instrument the main user journeys and the calls between services, and propagate context through every hop, including queues and external calls.
5. **Define indicators from the user's view.** Compute SLIs from telemetry at the point of user contact, and add business events that show whether users achieved what they came to do.
6. **Use open formats.** Prefer open standards for emitting telemetry, so that you can change back ends without re-instrumenting. Check support in your platforms.
7. **Control cost deliberately.** Set budgets for telemetry, avoid high-cardinality labels, sample normal traffic, keep errors and slow requests, and tier retention.
8. **Protect telemetry.** Scrub sensitive data at the source, restrict access, and apply retention rules. Monitor access to telemetry stores.
9. **Make it usable.** Give teams shared dashboards, saved queries, and training on how to investigate. Link alerts to the relevant telemetry and runbooks.
10. **Review telemetry after incidents.** Ask what you could not see during the incident, and add it. Remove signals nobody uses.

## Questions to discuss with your team

**During our last incident, what did we want to know that we could not find out?**
Ask the responders. Expect gaps in traces, context, or user-level data. Follow up by choosing one gap and adding the signal.

**Can we follow a single user's request through all the services it touches?**
Try it with a real request. Expect breaks at queues and external calls. Follow up by propagating the identifier through the first break.

**What do we log that we should not, and what do we not log that we should?**
Look at a sample of logs. Expect secrets, personal data, and noise. Follow up by agreeing a rule and a scrub.

**How much do we spend on telemetry, and what do we get for it?**
Ask for the number and the biggest sources. Expect surprises. Follow up by choosing the most expensive and least used signal to cut or sample.

**How tied are we to our current telemetry tool, and what would it take to change?**
Estimate. Expect "a lot". Follow up by choosing one service to instrument with an open standard.

**What telemetry do our AI features produce, and could we investigate a wrong answer from it?**
Ask. Expect minimal records. Follow up by agreeing what to record, with privacy limits, and trying an investigation.

## In practice: a service management example

A national weather service's public API serves several million requests a day through eight internal services. Users complain about occasional slow responses for certain locations. The monitoring shows the API within its latency target on average, and each service looks healthy in isolation. The on-call engineer spends two days chasing the problem.

The platform team has been moving to OpenTelemetry instrumentation. On the API's gateway and four of the eight services, requests carry a trace identifier and each service records spans with timings. With traces, an engineer filters for slow requests from the last week and sees that nearly all pass through the same call: a lookup in the geographic data service for locations with unusual characters in their names, which takes ten times longer than normal. The other four services are not yet instrumented, but the gap is now narrow enough to investigate by hand. The cause is a missing database index for those queries, and the fix takes an hour.

The team reviews the cost. Telemetry spending has grown 40 percent in six months, mostly from a label on a metric that includes the requested location, which has hundreds of thousands of values. They remove the label, keep location in traces and logs, and sample 5 percent of ordinary traces while keeping all errors and slow requests. A scrub removes IP addresses from logs after 24 hours, after the privacy officer notes that they count as personal data in some jurisdictions.

The team also adds a business signal: a count of API calls that returned an empty result, which in the past users reported as "no data". It shows a pattern after each model update.

What changes: investigations take hours instead of days, and cost falls by a third. What remains hard: four services still lack traces, and two are owned by another agency; the sampling rule has already hidden a rare error that appeared only in unsampled traffic and was found in a log; and engineers need practice to use trace tools well. The team schedules a training session and sets a rule to keep all traces with any error.

## Four perspectives

### Product and delivery teams

Build telemetry into features: consistent names, request identifiers, structured logs, spans on key paths, and business events. Avoid secrets in signals, and review telemetry in design.

### Service and operations teams

Use telemetry to investigate, not only to alert. Keep dashboards, queries, and runbooks linked, and tell developers what you could not see. Watch telemetry cost and quality.

### Leadership and governance

Fund the platform, standards, and training. Ask for evidence that telemetry shortens investigations and reflects user experience. Set budgets and privacy rules, and prefer open standards.

### Customers and users

You benefit when a provider can trace your problem to a cause quickly. Give details when you report an issue, such as time and what you did, which help to find your request.

## Agile, AI, automation, and analytics

### Agile

Add instrumentation in small steps with each feature, and refine it after each incident. Review dashboards with the team and remove those nobody uses. Caution: bolting telemetry on at the end produces gaps; include it in the definition of done.

### AI

AI can summarize traces and logs, group anomalies, and answer questions about telemetry, with owners and checks. AI features also need telemetry of their own. Caution: AI analysis depends on the quality and context of the data; poor labels produce poor conclusions. See Topic 5.2 — AIOps.

### Automation

Automate instrumentation where libraries allow, enforce naming and label standards in the pipeline, and use telemetry for scaling and remediation with limits. Caution: automation triggered by noisy telemetry can misfire; test thresholds and add limits. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Use telemetry for SLIs, trends, capacity, and user experience, and for the cost of telemetry itself. Caution: sampling and aggregation change what the data can show, and high-cardinality labels can distort or break systems; note the limits in reports. See Topic 7.1 — Analytics for Service Management and the *Service Management Metrics* book.

## Common failure modes

- **Three piles of data.** Metrics, logs, and traces cannot be linked. Share identifiers and labels.
- **Telemetry as an afterthought.** Gaps appear in incidents. Instrument with the feature.
- **High-cardinality labels.** Costs and performance suffer. Limit labels and keep detail in traces and logs.
- **Secrets and personal data in logs.** Sensitive data leak. Scrub at source and control access.
- **Lock-in to one tool.** Changing is costly. Use open standards.
- **Everything kept forever.** Cost rises. Tier retention and sample.
- **Dashboards nobody uses.** Effort is wasted. Prune and link to decisions.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Coverage | Infrastructure metrics | Key services with metrics and logs | Metrics, logs, and traces with shared context on key journeys | Coverage reviewed after incidents | Coverage consistent across services and suppliers |
| Standards | None | Local conventions | Naming, labels, and open formats agreed | Standards checked in the pipeline | Standards shared and evolve with the platform |
| Cost and retention | Unmanaged | Awareness | Budgets, sampling, and tiered retention | Cost per signal and value reviewed | Cost and value optimized continuously |
| Protection | Unclear | Basic access control | Scrubbing, access, and retention rules | Compliance monitored | Controls built into collection and storage |

## Checklist

- [ ] Telemetry is part of our definition of done.
- [ ] We have agreed names, labels, units, and a request identifier carried across services.
- [ ] Logs are structured and free of secrets and unneeded personal data.
- [ ] Key user journeys are traced end to end.
- [ ] SLIs are computed from telemetry at the point of user contact.
- [ ] We use open formats for emitting telemetry.
- [ ] We have a telemetry budget with sampling and tiered retention.
- [ ] We review what we could not see after each incident.

## AI prompts

**Find gaps in telemetry from an incident.**

```text
Here is the timeline of an incident and notes on what responders tried to find out: [paste].
List each question the responders could not answer, what signal would have answered it (metric, log, trace, user data), and a question for the owning team. Do not assume any signal exists.
List what you are unsure of.
```

**Review a log sample for sensitive data.**

```text
Here is a sample of log lines from our service: [paste, already partially scrubbed].
List any content that looks like secrets, personal data, or internal details, quoting the exact text, and suggest categories of scrub rules. Do not guess whether any is real.
List what you are unsure of.
```

**Propose a naming and label standard.**

```text
Our services: [list]. Our environments: [list]. Our teams: [list]. What we want to be able to filter by: [list].
Draft a one-page standard for service names, label keys, allowed values, and request identifiers, with examples. Warn about labels that could have very many distinct values. Do not name a vendor.
List what you are unsure of.
```

## AI skills

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): use to examine unusual patterns in telemetry.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): use to design how telemetry moves and is stored.
- [data-governance](../../../../skills/data-governance/SKILL.md): use to set privacy, retention, and access rules.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): use to choose early-warning signals.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): use to test latency and capacity with telemetry.

## Key sources

- OpenTelemetry (opentelemetry.io): the open standard and tooling for metrics, logs, and traces.
- Charity Majors, Liz Fong-Jones, and George Miranda, *Observability Engineering* (2022): a practitioner guide to the approach.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on monitoring, free at sre.google.
- Wikipedia, "Observability (software)" and "Telemetry": overviews of the ideas.

## References

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
