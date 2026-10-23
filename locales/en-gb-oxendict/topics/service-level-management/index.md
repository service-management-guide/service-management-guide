# Service Level Management

**Service level management sets clear, measurable targets for services with the people who rely on them, tracks performance against those targets, and uses the gaps to improve; its modern forms add experience level agreements and engineering objectives to the traditional service level agreement.**

## Why this matters

Providers and customers carry different pictures of what "good service" means. The provider thinks of uptime and ticket closure. The customer thinks of whether they could finish their work. Without an agreed definition, both can be sincere and both can be unhappy: the provider points to a report showing that every target was met, and the customer points to a week of frustration.

Service level management closes that gap. It starts a conversation with the customer about what they need, turns the answer into targets that can be measured, and reports on them in a way the customer can check. The conversation matters more than the document. A service level agreement (SLA) written once and filed gives false comfort; one reviewed regularly, with real data and an honest discussion of what is not working, builds trust.

Modern practice also faces a criticism: targets set on technical measures can all be green while users are unhappy. In response, organizations add measures of experience, such as experience level agreements (XLAs), and engineering teams set service level objectives (SLOs) based on what users notice. This topic explains the vocabulary, how to set targets, and how to keep them useful. It connects to availability and capacity (Topic 3.11 — Availability, Capacity, and Performance), supplier management (Topic 3.14 — Supplier Management), and measurement (Topic 7.3 — Measurement and Reporting).

## Core concepts

**Service level agreement (SLA).** In ITIL 4, a documented agreement between a service provider and a customer that identifies both the services required and the expected level of service. Wikipedia's article on service-level agreements describes the common parts: a description of the service, targets, measurement, reporting, and what happens if targets are missed. SLAs may be internal, between a provider and its own organization, or external, in a commercial contract.

**Service level target.** A specific, measurable commitment, such as "99.9 percent of requests complete within two seconds in a calendar month" or "priority one incidents are responded to within 15 minutes". Each target defines what is measured, how, over what period, and under what conditions.

**Service level objective (SLO).** A target for a service level indicator (SLI), most often used by engineering teams, as part of the practice described in Topic 2.6 — Site Reliability Engineering. SLOs are usually internal and stricter than the external SLA, so that the team notices trouble before a breach. Wikipedia describes service-level objectives.

**Operational level agreement (OLA).** An agreement between internal teams that supports the delivery of a service to a customer. For example, a network team might agree response times to the service team that supports an external SLA. Wikipedia describes operational-level agreements.

**Underpinning contract.** An agreement with an external supplier that supports delivery of a service. It should be consistent with the SLA it supports. If your SLA promises four hours and your supplier's contract allows eight, the gap is yours.

**Experience level agreement (XLA).** A newer idea: agreements that focus on how users experience the service, such as how well it helped them achieve their goals, instead of purely technical measures. XLAs often use surveys, sentiment measures, and observations in addition to system data. There is no single standard definition, so write down what you mean. See Topic 7.7 — Experience and Sentiment Analytics.

**What makes a good target.** It is meaningful to the customer, measurable, based on evidence of what can be achieved, and agreed with the people who depend on it. It states the measurement method and exclusions, such as planned maintenance. It does not promise what the provider cannot control.

**Averages and percentiles.** Averages hide the worst cases. A target of "average response time under one second" can be met even if one request in ten takes ten seconds. Percentiles, described on Wikipedia, give a better picture: "95 percent of requests under two seconds". Choose the percentile for the experience you care about.

**Availability and uptime.** A common target, expressed as a percentage of time a service is usable. Wikipedia's article on availability describes the calculation. It depends on what counts as "usable": a service can be up and unusable. Define it from the user's viewpoint.

**Penalties and credits.** Many external SLAs include remedies, such as service credits, if the provider misses a target. They are a signal of seriousness but a poor substitute for service: a small credit does not help a customer whose business was affected. Wikipedia's article on liquidated damages describes related contract ideas. Check how remedies work in your contracts and consult legal advice where needed; this guide gives none.

**Reporting.** Regular reports show results against targets, with explanations for misses and actions. Reports are for conversation, not just record. Include examples and users' comments alongside numbers.

**Review.** Review SLAs and targets with customers at agreed intervals, adjusting them when needs or technology change. Retire targets nobody uses.

**Goodhart's law.** "When a measure becomes a target, it ceases to be a good measure." Wikipedia describes this observation, attributed to the economist Charles Goodhart. People adjust behaviour to meet the number, not the purpose. Service levels invite this: tickets closed early, incidents reclassified, clocks paused. Guard against it with samples, paired measures, and customer feedback. See the *Service Management Metrics* book.

**How the lenses fit.** Service level management is where agile improvement meets agreement: review targets often and adjust. AI can help analyse performance data and draft reports, under review. Automation measures and reports consistently. Analytics shows the relationship between technical targets and user experience.

## Best practices

1. **Start with what the customer needs.** Ask what they cannot afford to have fail, and what slowness they would tolerate. Base targets on those answers, not on what is easy to measure.
2. **Keep the number of targets small.** A handful of meaningful targets per service is easier to understand and manage than dozens. Drop those nobody uses.
3. **Write each target precisely.** State what is measured, from where, over what period, what is excluded, and how the result is calculated. Test the definition with a recent month's data.
4. **Use percentiles for response and performance.** Report the share of cases meeting the target, and show the worst cases, not only the average.
5. **Set internal objectives stricter than agreements.** Give your team room to act before a breach. Make internal and external targets consistent with each other and with supplier contracts.
6. **Add measures of experience.** Alongside technical targets, ask users how the service helped them, using short surveys and observation. Sample real cases to see what the numbers miss.
7. **Report with context.** Present results in a regular meeting with the customer, explain misses honestly, and agree actions. Include a few user comments.
8. **Guard against gaming.** Review samples of tickets and incidents behind the numbers, look at reopen rates, and pair speed measures with quality measures.
9. **Review agreements regularly.** Meet at least yearly, and when something major changes, to check that the targets still match need and cost. Change targets openly.
10. **Align suppliers.** Check that each supplier's agreement supports the targets you promise, and agree how their performance is reported to you. See Topic 3.14 — Supplier Management.

## Questions to discuss with your team

**If we met every target last month, would our customers say the service was good?**
This tests whether targets reflect experience. Expect a mismatch somewhere. Ask for a recent complaint that no target caught. Follow up by choosing one new measure of experience.

**Which of our targets does nobody read, and which does everyone argue about?**
This finds useless and contested measures. Ask who uses each in decisions. Follow up by retiring one and clarifying one.

**What do we promise customers that depends on a supplier or another team, and what have they promised us?**
This tests consistency between agreements. Check the numbers side by side. Expect gaps. Follow up by choosing one gap to close, by renegotiating or by changing our promise.

**How could our targets be met without helping the user?**
Imagine gaming: closing tickets early, pausing clocks, narrowing definitions. Ask whether any of it happens. Follow up by choosing a sample check for one target.

**Who attends our service review meetings, and what changes after them?**
Meetings without action are ritual. Ask for the last action list. Follow up by agreeing that each review ends with at most three actions with owners.

**Where could AI help analyse service level data or draft reports, and what must a person check?**
AI can summarize trends and draft explanations. It can also state causes without evidence. Ask who reviews the draft against the data. Follow up by trialing AI-drafted summaries for internal use, with a person approving.

## In practice: a service management example

A regional water utility's IT department supports 800 office staff and 300 field crews. The SLA for the work-order system promises 99.5 percent availability and a four-hour response for priority one incidents. Reports show every target met for two years. Field crews nonetheless call the system "unreliable", and the head of operations demands a better SLA.

The service manager meets the crew leaders and asks what "unreliable" means. They say the system is up but very slow in the early morning, when crews start work, and that it fails to sync when they have poor mobile coverage. Neither is captured: availability is measured by a check from the data centre at five-minute intervals, and response targets apply only to tickets that crews raise, which they seldom do because they assume nothing will be done.

The manager proposes changes. The team adds an SLI based on real user transactions: 95 percent of work-order saves complete within three seconds, measured separately for the 6 to 8 a.m. period. It adds a short monthly pulse survey for crews, with two questions about whether the system helped them finish work and what got in the way. And it sets an internal SLO stricter than the SLA, so that the team sees early-morning slowness before crews do. The head of operations agrees to review the targets with crew representatives every quarter.

What changes: the first month's data shows the early-morning slowness clearly, and a database tuning change fixes much of it. What remains hard: sync failures depend on mobile coverage the utility does not control; the survey has a response rate of about a third; and the new SLI is not in the contract, so reports to the executive team now carry two sets of numbers. The manager keeps both and proposes folding the new measures into the SLA at the next renewal.

## Four perspectives

### Product and delivery teams

Define indicators and objectives with the people who run and use the service, and build the measurements into the product. Treat a missed target as a prompt to look at the design, not only at operations.

### Service and operations teams

Know the targets and how they are measured. Watch for gaming, report honestly, and bring examples of what the numbers miss to review meetings. Use internal objectives to act early.

### Leadership and governance

Ask whether targets reflect what customers need, and whether they are consistent with supplier contracts. Look at distributions and samples, not only headline percentages. Avoid rewarding or punishing teams on single numbers.

### Customers and users

Say what matters most to you and what you can tolerate. Take part in reviews. If every report is green and you are unhappy, tell the provider and give examples.

## Agile, AI, automation, and analytics

### Agile

Review and adjust targets regularly with customers, in small steps, and use misses as feedback for improvement. Caution: targets that change every month confuse everyone; keep a stable core and change it deliberately.

### AI

AI can analyse performance data, draft reports, and suggest causes of misses, with a person responsible for conclusions. Name an owner for each use. Caution: AI explanations of misses can sound authoritative without evidence; ask it to cite the data it used. See Topic 5.1 — AI in Service Management.

### Automation

Automate measurement from real transactions, reporting, and alerts on risk of breach, with transparent calculation. Caution: automated measurement can hide definition errors; sample the raw data and the calculation regularly. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Combine technical measures, such as percentiles of response time, with experience data, such as survey results and complaints. Caution: surveys come from those who respond, and every measure can be gamed once it is a target; use several sources and sample cases. See Topic 7.7 — Experience and Sentiment Analytics and the *Service Management Metrics* book.

## Common failure modes

- **All green, customers unhappy.** Measures miss the experience. Add user-based indicators and samples.
- **Too many targets.** Nobody reads them. Keep a few that matter.
- **Averages only.** The worst cases are hidden. Use percentiles and show outliers.
- **Gaming.** Clocks paused, tickets closed early. Sample and pair measures.
- **Inconsistent agreements.** Promises exceed what suppliers deliver. Align internal and external targets.
- **SLA as a weapon.** Meetings argue over credits. Focus on improvement and shared understanding.
- **Never reviewed.** Targets age. Review at agreed intervals.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Targets | Technical, unreviewed | Some customer-based targets | Targets set with customers and defined precisely | Targets reviewed against data and experience | Targets coordinated across services and partners |
| Measurement | Manual | Some automation | Measured from user transactions where possible | Measurement validated and sampled | Measurement automated and transparent across the chain |
| Experience | Not measured | Ad hoc surveys | Experience measures alongside technical ones | Experience linked to improvements | Experience drives agreements across services |
| Review | Rare | Annual | Regular reviews with actions | Reviews tracked for results | Reviews integrated with planning and suppliers |

## Checklist

- [ ] Targets are based on what customers need and agreed with them.
- [ ] Each target is precisely defined and tested with real data.
- [ ] We use percentiles for response and performance targets.
- [ ] Internal objectives are stricter than external agreements.
- [ ] Supplier contracts support the targets we promise.
- [ ] We measure experience as well as technical performance.
- [ ] We sample the cases behind the numbers to check for gaming.
- [ ] We review agreements at least yearly and after major change.

## AI prompts

**Check a target definition.**

```text
Here is a service level target as written: [paste]. Here is a month of raw data: [paste summary].
List what is unclear in the wording, compute the result in two different reasonable ways showing your steps, and note where the answers differ. Do not recommend a new target.
List what you are unsure of.
```

**Find what the numbers miss.**

```text
Our targets: [list]. Here are user complaints from the last quarter: [paste, personal data removed].
List complaints that no target would have detected, quote each briefly, and suggest one possible measure for each. Do not claim the measures would work.
List what you are unsure of.
```

**Prepare a service review.**

```text
Here are this month's results against targets: [paste]. Here are notable incidents and user comments: [paste].
Draft an agenda and five questions to discuss with the customer, including one about what the numbers do not show. Do not explain causes that are not in the material.
List what you are unsure of.
```

## AI skills

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): use to draft and review agreements and targets.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): use to choose indicators that warn early.
- [survey-design](../../../../skills/survey-design/SKILL.md): use to design experience measures.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): use to align supplier agreements with your targets.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of the service level management practice.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on service level objectives, free at sre.google.
- Wikipedia, "Service-level agreement" and "Service-level objective": overviews of the terms.
- Wikipedia, "Goodhart's law": a caution about using measures as targets.

## References

1. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Operational-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Operational-level_agreement
4. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
5. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
6. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
7. Liquidated damages — Wikipedia — https://en.wikipedia.org/wiki/Liquidated_damages
8. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
9. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
