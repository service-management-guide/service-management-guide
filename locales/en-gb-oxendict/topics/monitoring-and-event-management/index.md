# Monitoring and Event Management

**Monitoring and event management watch services so that the right person hears about real problems early and nobody is woken by noise; they work when alerts describe what users feel, every alert has an action, and the volume of events is kept low enough for people to trust.**

## Why this matters

The first sign of trouble should come from your own systems, not from a user. That is the promise of monitoring: a service's health is observed continuously and a deviation is noticed before most users notice it. In practice, many teams find that users still report problems first, while the team is buried in alerts that nobody acts on.

The difference between the two experiences is design. A monitoring setup that raises an alert for every threshold crossed teaches its recipients to ignore alerts. Wikipedia describes this as alarm fatigue, a phenomenon first studied in hospitals, where staff exposed to too many alarms become desensitized and miss the important ones. A setup that measures what users experience, alerts only when action is needed, and gives the responder context turns monitoring into an early-warning system.

Monitoring also has a larger role than catching failures. It provides the data for capacity planning, for performance work, for checking that a release is healthy, and for deciding what to improve. This topic describes the vocabulary and the practices that distinguish useful monitoring from noise. It links closely to incident management (Topic 3.2 — Incident Management), availability and capacity (Topic 3.11 — Availability, Capacity, and Performance), and observability (Topic 7.4 — Observability and Telemetry).

## Core concepts

**Monitoring.** Collecting, processing, and using data about the state of services and their components. Wikipedia describes system monitoring and network monitoring as the practices of watching systems for faults and performance. Monitoring answers known questions: is it up, is it fast, is it full?

**Event.** In ITIL 4, any change of state that has significance for the management of a service or other configuration item. Events can be informational, a warning, or an exception. Many events are normal and need no action; the practice is about deciding which do.

**Alert.** A notification that an event needs attention. Not every event should become an alert. A good alert tells a person that something needs action now, what is wrong, and where to look.

**Alarm fatigue.** The loss of sensitivity to alerts when there are too many or too many are false. See Wikipedia's article on alarm fatigue. Signs include alerts acknowledged without reading, muted channels, and incidents discovered late. It is a design problem, not a discipline problem.

**Metrics, logs, and traces.** Three common kinds of telemetry. Metrics are numeric measurements over time, such as request rate or memory use. Logs are timestamped records of events. Traces follow a request through the parts of a distributed system. Wikipedia's articles on telemetry and log management describe general ideas. Together they support both monitoring and the deeper investigation covered under observability.

**Observability.** The ability to understand a system's internal state from its outputs. Wikipedia describes observability in software as extending monitoring to questions you did not anticipate. The two overlap: monitoring watches for known failure; observability helps you investigate unknown ones. See Topic 7.4 — Observability and Telemetry.

**Symptoms and causes.** A symptom is what users or the service experience, such as slow responses; a cause is what lies behind it, such as a full disk. Alerting on symptoms tells you users are affected. Alerting on every possible cause creates noise. Many teams alert on symptoms and use cause-level metrics to investigate.

**Thresholds and baselines.** A fixed threshold, such as "CPU over 90 percent", is simple and often wrong, because normal levels vary with time and load. Baselines learn what is normal for a time of day and raise alerts on deviation. Wikipedia's article on anomaly detection describes the idea and its cautions.

**Event correlation.** Combining related events to find the underlying problem, so that a hundred alerts from one failing component become one. Wikipedia describes event correlation. It can be rule-based or use machine learning. See Topic 5.2 — AIOps.

**Synthetic and real user monitoring.** Synthetic monitoring runs scripted tests that mimic users and checks regularly whether a journey works. Real user monitoring records the experience of actual users. Wikipedia describes both. Synthetic checks catch outages at quiet times; real user data shows what people actually experience.

**Application performance management.** Tools and practices for monitoring the performance and availability of applications, including response times and error rates. Wikipedia describes the field.

**Actionability.** Every alert should have a defined action, even if the action is "check the runbook". If a person cannot say what to do, the alert should be removed or turned into a report. See Topic 3.9 — Knowledge Management.

**Routing and escalation.** Alerts go to the people who can act, using on-call schedules, with escalation if there is no acknowledgment. See Topic 3.2 — Incident Management.

**Event management and ITIL.** ITIL 4 describes "monitoring and event management" as a practice that systematically observes services and service components, and records and reports selected changes of state. The emphasis is on deciding which events matter and what to do about each.

**How the lenses fit.** Monitoring is the feedback side of continuous delivery: it shows whether a change is healthy. Agile practice treats alert quality as a backlog item. AI can reduce noise, correlate events, and summarize, under review. Automation can act on well-understood events. Analytics shows trends and the cost of noise.

## Best practices

1. **Alert on what users feel.** Start with symptoms, such as failed requests, slow pages, and failed jobs. Use cause metrics for diagnosis, not for paging, unless a cause is a reliable early warning.
2. **Make every alert actionable.** For each alert, write what it means, who acts, and what they do first. Link it to a runbook. Remove alerts that have no action.
3. **Keep the volume low.** Count the alerts each on-call person receives per shift, and set a limit. Review the noisiest alerts every week and fix or delete them.
4. **Page for urgency, ticket for the rest.** Use a call or page only when someone must act now. Send other signals to a queue or a report. Define the difference clearly.
5. **Use baselines carefully.** Where normal changes with time and load, use time-aware thresholds or anomaly detection, and review them. Do not trust a model you cannot explain to the people who respond.
6. **Group related alerts.** Correlate events from the same cause, and suppress downstream alerts when a dependency fails. Send one message with context.
7. **Check from the user's viewpoint.** Add synthetic checks for key journeys, and use real user data for experience. A server can be "up" while users cannot sign in.
8. **Monitor the monitoring.** Test that alerts reach people, that the paging system works, and that a silent failure of monitoring is itself detected. Run occasional end-to-end tests.
9. **Review after incidents.** Ask which alert fired, which should have, and which were noise. Adjust in the incident review. See Topic 3.3 — Problem Management.
10. **Share dashboards and context.** Give developers, operations, and support access to the same data, and show the effect of recent changes. Avoid dashboards that nobody uses.

## Questions to discuss with your team

**What was the last incident users told us about before our monitoring did, and why?**
This finds blind spots. Look at what users saw. Expect gaps at the edges of journeys. Follow up by choosing one user-facing check to add.

**How many alerts did our on-call people receive last month, and how many needed action?**
Count together. If nobody knows, that is a finding. Expect a low share of actionable alerts. Follow up by choosing the five noisiest alerts and deciding each one's fate.

**Which alerts do we ignore, and what would happen if we deleted them?**
Ignoring alerts is a sign of fatigue. Ask for the last time each one mattered. Follow up by deleting or demoting one, with a review date.

**Who gets woken for what, and does everyone agree it is worth waking them?**
Agree the criteria for paging. Expect disagreement, which is useful. Follow up by writing a one-paragraph rule and trying it for a month.

**How would we know if our monitoring itself stopped working?**
This tests meta-monitoring. Expect silence or a vague answer. Follow up by adding a heartbeat check or a daily test alert and agreeing who watches it.

**What would we want AI to do with our alerts, and what must stay a human decision?**
AI can group alerts, suggest causes, and summarize context. It can also suppress a real alert. Ask which actions need approval. Follow up by choosing a trial limited to grouping and summary, with review of what it hid.

## In practice: a service management example

A regional airport's operations technology team monitors baggage handling, check-in systems, and flight information displays. The team of six receives about 400 alerts a day. On-call staff say they glance at the notifications and mostly mute them. Last month a failed network switch in a terminal went unnoticed for 40 minutes, until passengers complained that displays were blank.

The team lead takes a week to look at the data. Of 400 daily alerts, about 350 come from 12 rules, such as disk warnings on devices that clean themselves, and interface flaps on an unused port. Only about 15 each day need human action. The lead and the team agree three changes. They delete or demote the 12 noisy rules to a daily report. They add two synthetic checks that load the display page and check-in screen from each terminal every minute and page if either fails twice in a row. And they set up correlation so that a failed switch produces one alert naming the affected displays, not one hundred.

Over the next month, on-call alerts fall to about 20 a day, and the next switch failure is detected within three minutes, with a single page that lists the affected terminals. In the weekly review the team finds one alert that was suppressed by correlation when it should not have been, and corrects the rule.

What changes: people trust the pages and respond. What remains hard: the baggage handling vendor's equipment sends its own alerts in a format the team cannot filter, so some noise remains; a few night-shift staff worry that the daily report will not be read; and nobody has yet tested what happens if the monitoring system itself fails. The lead schedules a drill and adds a daily test alert.

## Four perspectives

### Product and delivery teams

Build in the signals: meaningful metrics, logs, and traces, and health checks that reflect user journeys. Write the runbook with the alert. Watch the effects of each release.

### Service and operations teams

Own alert quality. Review the noisiest alerts weekly, protect people from overload, and check that every page has an action. Test the paths that alerts take.

### Leadership and governance

Ask for the count of actionable alerts, not the number of monitors. Fund time to fix noisy alerts. Treat repeated pages out of hours as a cost to staff and to quality.

### Customers and users

You should hear about problems from the provider before you notice them, and be told what is affected. Report what you see, with times, and tell the provider where monitoring missed it.

## Agile, AI, automation, and analytics

### Agile

Treat alerts and dashboards as part of the product: improve them in small steps after each incident and release. Review them with the people who respond. Caution: adding monitors for every new feature without removing old ones increases noise.

### AI

AI can learn normal patterns, group related alerts, suggest likely causes, and summarize an alert storm, with an owner and human decisions. Test it against past incidents. Caution: a model that suppresses alerts can hide a rare but real failure; measure what it suppressed and what was missed. See Topic 5.2 — AIOps.

### Automation

Automate responses to well-understood events, such as restarting a failing process, and routing and enrichment of alerts, with limits and logs. Caution: auto-remediation that retries forever can hide a failing system or make it worse; add rate limits and escalation. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Track alert volume, share that were actionable, time to acknowledge, and incidents detected by monitoring versus by users. Caution: alert counts alone can be gamed by raising thresholds until nothing fires; check against incidents. See Topic 7.4 — Observability and Telemetry and the *Service Management Metrics* book.

## Common failure modes

- **Alerting on everything.** People mute the channel. Alert on symptoms and remove the rest.
- **Alerts with no action.** Responders do not know what to do. Link to a runbook or delete the alert.
- **Fixed thresholds only.** False alarms at busy times. Use time-aware or baseline methods carefully.
- **Users find out first.** Gaps in user-facing checks. Add synthetic and real-user monitoring.
- **No meta-monitoring.** The monitoring fails silently. Add heartbeat and drills.
- **Dashboard sprawl.** Nobody looks at them. Keep a few that support decisions.
- **Trusting an opaque model.** Responders cannot explain what it did. Keep rules and logic reviewable.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Alert design | Every threshold alerts | Some key alerts | Symptom-based, actionable alerts with runbooks | Alert quality measured and reviewed weekly | Alerts adapted and correlated across services |
| Coverage | Servers only | Some applications | User journeys checked synthetically and by real-user data | Coverage reviewed after incidents | Coverage consistent across the estate and suppliers |
| Noise | Overwhelming | Aware | Volume limited and reviewed | Noise measured and falling | Noise managed by correlation and automation with oversight |
| Response | Manual | Pages to a team | Routed with escalation | Response time tracked | Safe actions automated with human control |

## Checklist

- [ ] Alerts are based on symptoms users feel.
- [ ] Every alert has a defined action and a linked runbook.
- [ ] On-call alert volume per shift is measured and limited.
- [ ] We review the noisiest alerts every week.
- [ ] Key user journeys have synthetic checks.
- [ ] Related alerts are correlated.
- [ ] We test that alerts reach people and that monitoring failure is detected.
- [ ] AI or automation acting on alerts has an owner, limits, and review.

## AI prompts

**Rank noisy alerts.**

```text
Here is a list of alert rules with the number of times each fired last month and how many led to action: [paste].
Rank them by number of non-actionable firings, list the top ten, and give one question per rule to ask about whether to remove, change, or keep it. Do not recommend deleting any.
List what you are unsure of.
```

**Draft the text of an alert.**

```text
The situation to alert on: [describe]. Who acts: [role]. The first checks they should make: [list].
Draft an alert title (under 80 characters) and a body (under 80 words) that says what is wrong, what users may be experiencing, and the first step, with a link placeholder for the runbook. Do not speculate about causes.
List what you are unsure of.
```

**Test a correlation rule.**

```text
Here is a correlation rule: [describe]. Here is a list of recent events with timestamps and sources: [paste].
List which events the rule would group, which it would suppress, and any case where a real separate problem could be hidden. Do not propose a new rule.
List what you are unsure of.
```

## AI skills

- [runbook](../../../../skills/runbook/SKILL.md): use to write the action that goes with each alert.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): use to examine unusual patterns in metrics.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): use to choose early-warning indicators.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): use to design sustainable on-call arrangements.

## Key sources

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on monitoring distributed systems, free at sre.google.
- Rob Ewaschuk, "My Philosophy on Alerting" (2013): a well-known short essay on symptom-based alerting.
- Wikipedia, "Alarm fatigue" and "Observability (software)": overviews of key ideas.
- PeopleCert, ITIL certification pages: the owner's description of the monitoring and event management practice.

## References

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
