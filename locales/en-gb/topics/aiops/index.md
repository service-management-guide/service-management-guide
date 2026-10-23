# AIOps

**AIOps applies machine learning to operations data to reduce alert noise, find anomalies, correlate events, and suggest causes; it pays off when it is tested against past incidents, kept explainable to the people who respond, and treated as an assistant to on-call staff, not a replacement for judgement.**

## Why this matters

Operations teams drown in data. A modern service emits millions of log lines, thousands of metrics, and hundreds of alerts every day. People cannot read all of it, so they set thresholds and rules to decide what to look at. The rules grow, interact, and decay. Most alerts turn out to be noise, and some real problems hide among them.

AIOps, a term coined by the analyst firm Gartner in the mid-2010s from "algorithmic IT operations" and now generally read as "AI for IT operations", promises to help. It uses machine learning to learn what is normal, to notice when something is not, to group related alerts into one event, and to suggest where the cause might lie. Wikipedia describes AIOps as the application of artificial intelligence to enhance IT operations. Vendors present it in strong terms. Practitioners report real gains in some uses, such as noise reduction, and disappointment in others, such as fully automatic diagnosis.

For service management the question is practical: which parts of AIOps give reliable value, how do you check them, and how do you keep people in control? This topic describes the main techniques, their typical failure modes, and a sensible path to adoption. It builds on monitoring (Topic 3.10 — Monitoring and Event Management) and observability (Topic 7.4 — Observability and Telemetry), and it overlaps with incident management (Topic 3.2 — Incident Management) and runbook automation (Topic 6.6 — Runbook Automation and Auto-Remediation).

## Core concepts

**AIOps.** The use of AI techniques, mainly machine learning and statistics, on operations data to support tasks such as anomaly detection, event correlation, root cause suggestion, and prediction. It is a set of techniques, not a single product, and capabilities vary widely.

**Anomaly detection.** Finding data points or patterns that differ from what is expected. Wikipedia describes anomaly detection and its methods. In operations, a model might learn the normal daily and weekly pattern of requests and flag deviations. Normal is not constant: seasonality, described on Wikipedia, means that a Monday morning looks different from Sunday night. Good detectors take it into account.

**Time series.** Data recorded over time, such as response times or error counts. Wikipedia describes time series analysis. Most operations metrics are time series, and AIOps techniques build on methods for modelling and forecasting them.

**Event correlation and noise reduction.** Combining alerts that stem from one cause into a single incident, and suppressing duplicates and known noise. Wikipedia describes event correlation. Clustering techniques, described on Wikipedia as cluster analysis, group items by similarity. A good correlation turns two hundred alerts into one, with the likely source named.

**Root cause suggestion.** Using topology, change records, logs, and past incidents to propose where a fault probably lies. Suggestions are hypotheses. They are most useful when they point to a recent change or a dependency, and least reliable when the cause is novel.

**Predictive operations.** Forecasting problems before they occur, such as a disk that will fill in three days or a component likely to fail. Wikipedia describes predictive maintenance and predictive analytics. Predictions are probabilities, and each has a cost for false alarms and for misses. See Topic 7.5 — Predictive Analytics and Forecasting.

**Log analysis.** Using techniques from natural language processing and statistics to find patterns in logs, such as new message types or changes in frequency. Wikipedia describes log analysis.

**Generative AI in operations.** Large language models can summarise incident timelines, translate alerts into plain language, draft runbook steps, and answer questions about the environment. They add flexibility and the risk of invented content. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

**Precision, recall, and error costs.** A detector can be wrong in two ways: it can raise a false alarm (a false positive) or miss a real problem (a false negative). Wikipedia describes both types of error and the measures precision and recall. Tuning to reduce one increases the other. The right balance depends on the cost of each, and different services deserve different settings.

**Concept drift.** Models learn from past data, and the world changes: new releases, new traffic patterns, new infrastructure. Wikipedia describes concept drift, in which the statistical properties of what is being predicted change over time. A model that was accurate in January may be misleading by June unless it is monitored and retrained.

**Explainability.** Responders will trust a suggestion more, and correct it more usefully, if they can see why it was made: which metrics moved, which events were grouped, which change preceded the shift. Wikipedia describes explainable artificial intelligence and the problem of black boxes. For operations, prefer approaches that show their evidence.

**Data quality and coverage.** AIOps needs good data: complete, consistent, correctly timestamped, and labelled with services and owners. Missing or inconsistent data produces missed signals and false links. See Topic 4.4 — Configuration Management and Topic 7.2 — Data Foundations and Governance.

**Autonomic and self-healing ideas.** The long-held aim of systems that detect and fix their own faults, described on Wikipedia as autonomic computing. Parts are practical today, such as restarting a failed process. Broad self-healing is much harder. See Topic 6.6 — Runbook Automation and Auto-Remediation.

**Human oversight.** The responder remains accountable. AIOps outputs are inputs to a human decision, unless a narrowly defined action has been tested and approved to run automatically. See Topic 5.5 — Agentic AI and Human Oversight.

**How the lenses fit.** AIOps combines AI and analytics for the operations part of service management. Agile practice suggests small trials on one service, with feedback from on-call staff. Automation consumes AIOps output, for example to open a ticket or run a safe check.

## Best practices

1. **Start with a clear pain.** Pick one problem, such as too many alerts on a single service, and a measure, such as the number of pages per shift. Trial AIOps there.
2. **Get the data in order first.** Check that logs and metrics are complete, timestamps consistent, and services and owners labelled. Fix gaps before blaming the model.
3. **Test against past incidents.** Replay historical data through the tool, and ask what it would have flagged, grouped, or suggested. Count false alarms and misses.
4. **Compare with simple methods.** Compare against fixed thresholds and basic rules. If a simple method does as well, use it. Do not pay for complexity that adds nothing.
5. **Prefer explainable outputs.** Choose tools that show the evidence behind an alert or a suggested cause. Require that responders can see and challenge it.
6. **Start in advisory mode.** Have the tool suggest, and let people decide. Review the suggestions against what actually happened for a few weeks before giving it any automatic action.
7. **Limit automatic actions.** Allow only narrow, well-understood, reversible actions, with rate limits, logs, and a manual stop. Review each class of action before enabling it.
8. **Monitor the models.** Track false alarms, misses, and the share of suggestions that were useful. Watch for drift after major releases and retrain or reconfigure when needed.
9. **Keep on-call people involved.** Ask them to rate suggestions in the tool, and review their feedback weekly. They are the best judges of usefulness.
10. **Record what was suppressed.** Keep a log of alerts the system hid or merged, and review samples regularly. Suppression is where the worst failures occur.

## Questions to discuss with your team

**Which alerts waste the most of our on-call time, and would better rules fix them before any AI would?**
Start with the data. Many noise problems yield to simple fixes. Expect a few rules to account for most noise. Follow up by fixing those and then reassessing what AI could add.

**If the tool had run during our last three incidents, what would it have told us, and would that have helped?**
Replay or simulate. Expect mixed results. Ask what it would have missed. Follow up by choosing the incident type where the tool seems most promising.

**How would we know the tool suppressed a real alert?**
This tests oversight. Expect "we wouldn't". Follow up by agreeing a log of suppressed events, a regular sample, and a rule for what is never suppressed.

**Who is accountable when an automatic action goes wrong, and what are its limits?**
Name an owner and list allowed actions. Expect vague answers. Follow up by writing a short list of actions allowed without approval, each with a rollback.

**How will we detect that the model has drifted after a major release or a change in traffic?**
Ask for the plan. Expect none. Follow up by choosing indicators, such as the rate of false alarms, and a review date after each major release.

**What would on-call staff want from this tool, and what would make them stop trusting it?**
Ask them directly. Expect practical answers about context and false alarms. Follow up by turning the answers into acceptance criteria for the trial.

## In practice: a service management example

A national weather service's operations team runs forecast pipelines and a public API on a mixed estate of on-premises and cloud systems. On-call staff receive about 300 alerts a day, most of them from a few noisy sources. A vendor proposes an AIOps platform with automatic correlation and root cause suggestions.

The operations lead agrees to a pilot with conditions. First, the team cleans up the 12 noisiest rules, which removes about half the volume. Second, it replays six months of data, including 14 incidents, through the platform in advisory mode. In the replay, the platform groups alerts well: the average incident that produced 80 alerts shows up as three groups. It correctly flags the first sign in nine of the 14 incidents, misses three where the first symptom was in a log, and raises false alarms on routine nightly reprocessing, which has a pattern it has not learned.

The team deploys it in advisory mode on one pipeline for two months, with on-call staff rating each suggestion as useful, neutral, or wrong. About 55 percent are rated useful, and 15 percent wrong, usually where a recent unrecorded change is the cause. The platform is then allowed to open tickets automatically for grouped incidents, and nothing else. The team keeps a weekly review of suppressed alerts and, after a major release, finds that the model's baseline for traffic is now wrong and has to be retrained.

What changes: on-call staff receive far fewer, better-grouped alerts. What remains hard: the platform's suggestions depend on accurate change records, which are incomplete; it is less helpful for novel failures; and the vendor's pricing grows with data volume, so the team limits what it ingests. The lead plans to widen the pilot to another pipeline only after a further review of misses.

## Four perspectives

### Product and delivery teams

Emit good telemetry: consistent logs, metrics with service labels, and records of deployments and changes. Share design knowledge with the operations team, and help check the tool's suggestions about your service.

### Service and operations teams

Use the tool as an assistant: rate suggestions, review suppressed items, and report misses. Keep rules simple where they work, and keep ownership of decisions and actions.

### Leadership and governance

Ask for results from replay tests and a pilot, not from a demonstration. Set limits on automatic actions. Fund data quality and training. Beware of claims of fully autonomous operations.

### Customers and users

You should notice fewer and shorter disruptions, not changes in how problems are communicated to you. Tell the provider if an incident was missed before you noticed.

## Agile, AI, automation, and analytics

### Agile

Trial on one service, with on-call staff giving frequent feedback, then widen in steps. Review misses after each incident and adjust. Caution: tuning a model constantly without recording changes makes behaviour unpredictable; keep a changelog.

### AI

The tool itself is an AI system with an owner, test data, and review. Treat it like any other: record what it may do, monitor it, and test after updates. Caution: vendors may change models without notice; ask how they announce changes and test regularly. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Connect AIOps output to narrow, tested automated actions, such as ticket creation, collecting diagnostics, and restarting a known failing process, with limits and logs. Caution: automatic actions chosen from uncertain predictions can worsen an incident; require high confidence and a rollback. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Measure alert volume, share useful, false alarms, misses found in incident reviews, time to detect, and time to diagnose. Caution: lowering alert volume can be achieved by hiding real alerts; always compare against incidents and misses. See Topic 7.4 — Observability and Telemetry and the *Service Management Metrics* book.

## Common failure modes

- **Buying a promise.** The vendor's demonstration is taken as evidence. Test on your own data with replay and a pilot.
- **Poor data.** The model learns from inconsistent logs and labels. Fix data first.
- **Suppression without review.** Real alerts are hidden. Log and sample what is suppressed.
- **Opaque suggestions.** Responders cannot judge them. Prefer tools that show evidence.
- **Premature automation.** Wrong actions occur at speed. Start advisory and limit actions.
- **Model drift ignored.** Accuracy degrades quietly. Monitor and retrain after changes.
- **Complexity without gain.** A simple rule would do. Compare with simple methods.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Data foundation | Inconsistent | Main sources collected | Consistent, labelled, and owned telemetry | Data quality measured and improved | Data shared across teams and suppliers with governance |
| Use of AI | Vendor claims | Pilot on one service | Advisory use with replay and feedback | Results measured and acted on | AI integrated across operations with oversight |
| Automation | None | Ticket creation | Narrow, approved actions with limits | Actions reviewed and improved | Broader automation by risk with human control |
| Model care | None | Ad hoc tuning | Drift and error monitoring | Retraining tied to change | Continuous evaluation across tools |

## Checklist

- [ ] We chose a specific problem and a measure for a pilot.
- [ ] We fixed the worst of our alert noise with simple rules first.
- [ ] We tested the tool on historical incidents and counted misses and false alarms.
- [ ] We compared it with simple methods.
- [ ] Outputs are explainable to responders.
- [ ] We run in advisory mode before allowing any action.
- [ ] Automatic actions are narrow, logged, rate-limited, and reversible.
- [ ] We monitor for drift and review suppressed alerts.

## AI prompts

**Check replay results.**

```text
Here are the results of replaying [number] past incidents through our AIOps tool: for each, the first real symptom, what the tool flagged and when, and what it suggested: [paste].
Compute for each incident whether the tool flagged the problem before the first page, and list false alarms and misses. Summarise counts and note incidents where the data is unclear. Do not rate the tool overall.
List what you are unsure of.
```

**Review suppressed alerts.**

```text
Here is a sample of alerts that the system suppressed or merged last week, with details: [paste sample].
For each, say whether the details suggest it was noise, a duplicate of another alert, or possibly a real problem, and give your reason. Mark those you cannot judge.
List what you are unsure of.
```

**Draft acceptance criteria for a pilot.**

```text
Our service: [describe]. Our current pain: [describe, with numbers if known]. Our constraints: [list].
Draft acceptance criteria for a two-month pilot of an AIOps tool: measures, thresholds we should agree beforehand, what would make us stop, and what automatic actions are not allowed. Do not state vendor claims as facts.
List what you are unsure of.
```

## AI skills

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): use to examine unusual patterns in operations data.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): use to see how metrics change over time.
- [data-quality](../../../../skills/data-quality/SKILL.md): use to check the inputs that AIOps depends on.
- [mlops](../../../../skills/mlops/SKILL.md): use to monitor and maintain models in use.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): use to test suggested causes against evidence.

## Key sources

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on monitoring distributed systems, free at sre.google: foundations that AIOps builds on.
- PeopleCert, ITIL certification pages: the owner's description of the monitoring and event management practice.
- Wikipedia, "AIOps" and "Anomaly detection": overviews of the term and techniques.
- Wikipedia, "Concept drift": the main reason models degrade over time.

## References

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
