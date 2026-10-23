# Measurement and Reporting

**Good measurement starts from goals, uses few measures that are defined precisely, pairs each measure with a guardrail against gaming, shows distributions and trends, and reports to people who can act; the definitions live in the companion Service Management Metrics book, and this topic is how to use them well.**

## Why this matters

Everyone in service management has seen a report that was accurate and useless. Pages of figures, a traffic-light summary, and a note that all targets were met. Then a customer complaint about a week of bad service, and a manager asking how that was possible. The report measured what was easy to count, and the target came to stand for the result.

The opposite failure is equally real. A team distrusts numbers, because they have been used to judge people unfairly, and refuses to measure at all. Then improvement depends on opinion, and the loudest voice decides.

The way out is to treat measurement as a craft with a purpose: to learn whether services deliver outcomes and where to improve. Measures are chosen from goals, defined so that two people calculate them the same way, read as distributions and trends, and checked against the ways they can mislead. This topic describes that craft in general terms. It does not define individual metrics: the companion *Service Management Metrics* book gives, for each, a definition, a gaming vector, and a guardrail, and it is the place to go for the numbers themselves. This topic connects to analytics (Topic 7.1 — Analytics for Service Management), data foundations (Topic 7.2 — Data Foundations and Governance), service levels (Topic 3.7 — Service Level Management), and continual improvement (Topic 3.15 — Continual Improvement).

## Core concepts

**Measure, metric, indicator.** A measure is a quantity you can observe, such as the number of incidents. A metric is a measure defined for a purpose, with a calculation, a source, and a period. An indicator signals the state of something that is hard to observe directly. Wikipedia describes performance indicators generally, often abbreviated KPIs for key performance indicators. Terms are used loosely; define what you mean.

**Goals first.** A measure is only useful in relation to a goal. Write the goal in plain words ("customers can get help quickly when something breaks"), then ask what evidence would show whether it is being met. Wikipedia describes approaches such as the balanced scorecard, which links measures to goals from several perspectives, and objectives and key results (OKRs), which pair a goal with measurable results. Whichever you use, treat them as aids to conversation.

**Outcomes, outputs, and activity.** Outcomes are changes for customers and the organization; outputs are what the service produces; activity is effort. Measuring only activity, such as tickets closed, says little about whether anyone is better off. Include outcome and experience measures. See Topic 1.1 — Service Management.

**Leading and lagging indicators.** Lagging indicators report results after the fact, such as customer satisfaction. Leading indicators signal what is likely to come, such as growing backlog age. Wikipedia describes both under economic indicators. A balanced set includes both.

**Precise definitions.** Two people must be able to calculate the measure and get the same answer. Define the population, the start and end events, what is excluded, the period, and the data source. "Time to resolve" needs a definition of when the clock starts, stops, and pauses. Record changes in definition with dates. See Topic 7.2 — Data Foundations and Governance.

**Averages, medians, and percentiles.** Averages are easily distorted by a few extreme values. Medians and percentiles, described on Wikipedia, show the typical case and the tail that unlucky users experience. For response and resolution times, report percentiles, such as the median and the 90th percentile.

**Distributions and trends.** A single number for a month hides variation. Show the distribution, the trend over several periods, and the range of ordinary variation. Wikipedia describes control charts and statistical process control, which separate normal variation from signals that something has changed. Do not react to every wiggle.

**Targets and thresholds.** A target is a level you aim for; a threshold is a level that triggers action. Targets should come from need and evidence of what is achievable. A target set without evidence invites gaming or despair.

**Goodhart's law and gaming.** When a measure becomes a target, it ceases to be a good measure. Wikipedia describes Goodhart's law, and the related observation by the social scientist Donald Campbell. People adapt to the incentive. Tickets are closed early, clocks are paused, categories are changed, hard cases are avoided. Wikipedia's article on perverse incentives gives examples of unintended effects, sometimes called the cobra effect. Every metric has a gaming vector, and the *Service Management Metrics* book names it with a guardrail.

**Guardrails.** A second measure or a check that guards against gaming of the first. For example, pair speed with quality (time to resolve with reopen rate), volume with outcome (tickets closed with user satisfaction), and automated measures with sampled review of real cases. Without guardrails, a measure will drift.

**Measuring people.** Measures of individual performance, such as tickets per agent, are especially prone to gaming and unfairness, because work differs between people and the system shapes what any person can achieve. This guide and the companion book recommend against ranking individuals. Use team-level measures to understand the system.

**Benchmarking.** Comparing with others, as Wikipedia describes, can help to set expectations. Comparisons are valid only where definitions, mix of work, and context match. Be sceptical of comparisons that ignore differences.

**Reporting.** Reports exist to inform decisions. Know the audience and the decision. Good reports state the goal, the measures, the trend, the explanation, and the action. Use visual design that makes the message clear. Wikipedia describes data and information visualization and dashboards. Fewer, clearer views serve better than many.

**Delivery measures.** Research programmes on software delivery, such as the DORA programme, use four measures often called the four key metrics: deployment frequency, lead time for changes, change failure rate, and time to restore service. They are useful questions about a delivery system. They are not scores to rank teams. See Topic 2.2 — Continuous Delivery.

**Experience measures.** Surveys, satisfaction scores, and the net promoter score, described on Wikipedia, ask users what they think. They have their own limits, such as who responds and how questions are worded. See Topic 7.7 — Experience and Sentiment Analytics.

**Transparency and trust.** People trust measures they understand, helped to define, and see used fairly. Share definitions, data, and how results are used. Say plainly that measures are for learning.

**How the lenses fit.** Measurement is where analytics meets governance and improvement. Agile practice uses a few measures to check whether a change helped. AI can help with calculation and drafting, under review, and itself needs measures of quality. Automation produces measurements from tools.

## Best practices

1. **Start from goals.** Write what the service is for and what success looks like, then choose measures that show whether you are getting there. Drop measures that serve no goal.
2. **Keep the set small.** Choose a handful of measures per service, covering outcomes, flow, quality, and experience. Review the set at least yearly.
3. **Define each metric precisely.** Write the definition, source, calculation, period, exclusions, owner, and known limits. Use the definitions in the *Service Management Metrics* book as a starting point.
4. **Name the gaming vector and add a guardrail.** For each, ask how it could be improved without improving the service, and pair it with a check. Sample real cases regularly.
5. **Show distributions and trends.** Report medians and percentiles, the range of normal variation, and several periods. Explain changes, and distinguish signal from noise.
6. **Set targets from evidence.** Base them on history, need, and capacity, and agree them with those who must meet them. Review them when circumstances change.
7. **Measure systems, not individuals.** Use team-level and service-level measures to understand the system. Do not rank people on them.
8. **Report to decide.** For each report, name the audience and the decision. State the finding, the confidence, and the proposed action. Retire reports nobody uses.
9. **Be open.** Publish definitions and results to those measured, and invite challenge. Tell people how the data will and will not be used.
10. **Review and retire.** Check whether each measure changed a decision. Remove those that did not, and fix those that were gamed.

## Questions to discuss with your team

**Which of our measures could be met without making any customer better off?**
This finds gaming vectors. Expect a few easy examples. Follow up by choosing one and agreeing a guardrail.

**What goal does each of our regular measures serve, and who decides something because of it?**
Walk through the report. Expect several measures with no goal and no decision. Follow up by dropping one.

**How do we define "resolved" and "response time", and has anyone changed the definition?**
Ask for the written definitions. Expect disagreement. Follow up by writing one definition and recording its history.

**What do our percentiles say that our averages hide?**
Compute both for one measure. Expect a long tail. Follow up by agreeing to report percentiles for it.

**How are measures used to judge individuals or teams here, and what does that do to behaviour?**
Discuss openly. Expect stories of gaming and fear. Follow up by agreeing that a given measure will be used for learning, and saying so in writing.

**How could AI help us calculate or explain measures, and how would we check it?**
AI can compute and draft commentary. It can also explain a trend with a made-up cause. Ask who checks. Follow up by repeating a calculation by hand and comparing.

## In practice: a service management example

A regional ambulance service's IT department reports monthly to its board on 24 measures. The board asks why the report is green while dispatchers complain that the computer-aided dispatch system is slow at shift start. The head of IT decides to rebuild the measurement set with the people who use it.

She begins with goals, agreed with dispatch leaders: dispatchers can open and update a call without delay; faults are fixed quickly; and changes do not disrupt operations. She chooses eight measures, each defined in a one-page entry based on the companion *Service Management Metrics* book. For "dispatcher transaction time", the definition states what is timed, from where, and that the 95th percentile is reported by hour of day. The old availability measure, measured by a ping from the data centre at five-minute intervals, is kept but not shown to the board alone.

For each measure the team writes the gaming vector and a guardrail. "Incidents resolved within target" is paired with the reopen rate and a monthly sample of 30 incidents read by a senior analyst; the team recognizes that closing incidents quickly and reopening them later would flatter the first measure. The board report shows medians and 95th percentiles over 12 months with the range of normal variation, and a short note on what changed and what the team will do.

The first report shows that the 95th percentile transaction time doubles between 06:30 and 07:30, and the board funds a capacity study. A satisfaction question, asked monthly of 40 dispatchers, adds a view of experience. The head of IT also states in writing that no measure will be used to rank individual analysts.

What changes: the board discusses a real problem, and the team stops arguing about definitions. What remains hard: the new transaction measure depends on a log field that two vendors record differently, so the data is approximate; the survey response rate is low in night shifts; and a senior manager still wants a single score for the board. The head of IT keeps the eight measures and shows the manager how a single score would hide the morning problem.

## Four perspectives

### Product and delivery teams

Build the measurement into the product: events, timings, and user-facing indicators. Use delivery measures to find constraints, not to compare teams. Share definitions with operations.

### Service and operations teams

Know what is measured and how, and check it against your own sense of the service. Report gaming and bad definitions honestly. Use measures to see where to improve.

### Leadership and governance

Ask for goals, definitions, distributions, and guardrails, not a green summary. Do not use measures to rank people. Fund the data work and be prepared to hear bad news.

### Customers and users

You should be asked what matters, see measures that reflect your experience, and hear what is changing because of them. Tell the provider when the numbers do not match what you see.

## Agile, AI, automation, and analytics

### Agile

Use a few measures to check each change, with an expectation and a date, and review with stakeholders. Retire measures that no longer inform. Caution: do not let measures become targets for teams; they will optimize the number.

### AI

AI can help to calculate, chart, and draft commentary, and AI systems themselves need measures of accuracy, errors, and cost. Caution: an AI explanation of why a number changed may be invented; require it to point to the data and check. See Topic 5.1 — AI in Service Management.

### Automation

Automate collection and calculation, with documented definitions and a changelog. Caution: an automated report can run for years after its definition has silently broken; validate against raw data regularly. See Topic 6.1 — Automation Strategy.

### Analytics

Use distributions, trend and variation methods, and sampling of real cases to check metrics. Caution: any measure can be gamed once it matters; pair measures and keep reading cases. See the *Service Management Metrics* book and Topic 7.1 — Analytics for Service Management.

## Common failure modes

- **Green reports, unhappy customers.** Measures miss outcomes. Add outcome and experience measures and sampling.
- **Too many measures.** Nobody can use them. Keep a few tied to goals.
- **Vague definitions.** Numbers cannot be compared. Define precisely and record changes.
- **Averages.** The tail is hidden. Report percentiles and distributions.
- **Targets without evidence.** Gaming or despair follows. Base targets on data and agree them.
- **Ranking individuals.** Trust collapses and numbers are gamed. Measure systems and teams.
- **No guardrails.** Measures drift. Pair each with a check and sample cases.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Goals and selection | Whatever is easy to count | Some goal-linked measures | A small set tied to goals for each service | Set reviewed against decisions | Measures aligned across services and partners |
| Definition and quality | Informal | Some definitions | Precise definitions with owners and change history | Definitions validated against raw data | Definitions shared and automated across teams |
| Gaming defenses | None | Awareness | Gaming vector and guardrail for each metric | Samples of real cases reviewed | Defenses built into reporting and culture |
| Reporting and use | Static reports | Dashboards | Reports for named decisions with trends and distributions | Use and impact tracked | Reporting integrated with planning and improvement |

## Checklist

- [ ] Each measure serves a written goal.
- [ ] Each metric has a precise definition, owner, source, and change history.
- [ ] We report medians and percentiles with trends.
- [ ] Each metric has a named gaming vector and a guardrail.
- [ ] We include outcome and experience measures.
- [ ] We do not rank individuals on the measures.
- [ ] Each report names its audience and the decision it supports.
- [ ] We review and retire measures that no longer change decisions.

## AI prompts

**Write a metric definition for review.**

```text
Metric name: [name]. What we want to know: [goal in plain words]. Data we have: [fields and source].
Draft a definition with: purpose, population, start and end events, exclusions, calculation, period, source, owner (leave blank), and known limits. Then list two ways the metric could be gamed and one guardrail for each. Mark any assumption.
List what you are unsure of.
```

**Check a report for common problems.**

```text
Here is a monthly report with its measures and a short commentary: [paste].
List measures without a stated goal, uses of averages where percentiles would help, claims of cause not supported by the data, comparisons that may not be like for like, and anything that could be gamed. Quote the text for each. Do not rewrite the report.
List what you are unsure of.
```

**Explain a change in a measure.**

```text
The measure [name] changed from [value] to [value]. Here are other facts from the same period: [paste, such as changes in tools, staffing, volumes, definitions].
List possible explanations as hypotheses, what data would test each, and which are not supported by the facts given. Do not state a cause as fact.
List what you are unsure of.
```

## AI skills

- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): use to define delivery measures with their risks.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): use to choose early-warning indicators.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): use to analyse variation and uncertainty.
- [survey-design](../../../../skills/survey-design/SKILL.md): use to design experience measures that avoid bias.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): use to examine change over time.

## Key sources

- The companion *Service Management Metrics* book: metric definitions, gaming vectors, and guardrails, which this topic points to throughout.
- Nicole Forsgren, Jez Humble, and Gene Kim, *Accelerate* (2018), and DORA (dora.dev): research on delivery measures.
- Donald J. Wheeler, *Understanding Variation* (1993): a clear account of signal and noise in measures.
- Wikipedia, "Goodhart's law" and "Performance indicator": overviews of the main ideas.

## References

1. Performance indicator — Wikipedia — https://en.wikipedia.org/wiki/Performance_indicator
2. Balanced scorecard — Wikipedia — https://en.wikipedia.org/wiki/Balanced_scorecard
3. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
5. Campbell's law — Wikipedia — https://en.wikipedia.org/wiki/Campbell%27s_law
6. Perverse incentive — Wikipedia — https://en.wikipedia.org/wiki/Perverse_incentive
7. Economic indicator — Wikipedia — https://en.wikipedia.org/wiki/Economic_indicator
8. Control chart — Wikipedia — https://en.wikipedia.org/wiki/Control_chart
9. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
10. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
11. Data and information visualization — Wikipedia — https://en.wikipedia.org/wiki/Data_and_information_visualization
12. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
