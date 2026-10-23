# Availability, Capacity, and Performance

**Availability, capacity, and performance management keep a service usable, big enough, and fast enough for the demand it faces; they work when targets come from user needs, risks are designed out through redundancy and testing, and forecasts are checked against reality instead of trusted.**

## Why this matters

Users judge a service on three things before anything else: can I use it, does it cope when many people use it, and is it quick? Failures on any of these show up as lost work, abandoned purchases, and angry calls. Yet the three are easy to neglect until a bad day: a launch that doubles traffic, a deadline that sends everyone to the system in the last hour, a failure of a single component that nobody realized everything depended on.

These practices exist to avoid those bad days by thinking about them in advance. They ask how much failure the service can tolerate and what that costs, how much demand it must handle and how that demand will grow, and how fast it should respond. They answer with design choices such as redundancy, with tests that find limits before users do, and with forecasts that are checked and updated.

ITIL 4 describes three related practices: availability management, capacity and performance management, and, closely related, service continuity management (Topic 3.12 — Service Continuity Management). Engineering teams meet them as reliability engineering, performance engineering, and capacity planning, using SLOs and error budgets (Topic 2.6 — Site Reliability Engineering). This topic brings the ideas together and explains how to use them without gold plating: more availability is not always better, since each extra nine costs more. It connects to service level management (Topic 3.7 — Service Level Management) and monitoring (Topic 3.10 — Monitoring and Event Management).

## Core concepts

**Availability.** The ability of a service to perform its agreed function when required. Wikipedia describes availability as the proportion of time a system is functioning. It is usually expressed as a percentage over a period, such as 99.9 percent in a month, which allows about 43 minutes of downtime. The figure is only meaningful when you define what "functioning" means for users.

**Reliability and maintainability.** Reliability is how long a service runs without failure; maintainability is how quickly it can be restored. Availability depends on both. Wikipedia's articles on reliability engineering and on mean time between failures (MTBF) describe the measures. In many modern services, fast recovery is more achievable than rare failure.

**Redundancy and single points of failure.** Redundancy means having spare components so that one failure does not stop the service. A single point of failure is a component whose failure stops everything. Wikipedia's articles on redundancy and on single points of failure describe the ideas. Finding single points of failure, including people, suppliers, and certificates that expire, is a core availability task.

**Fault tolerance and graceful degradation.** A fault-tolerant system keeps working when parts fail; one that degrades gracefully loses some function but keeps its core. For instance, a shopping site might disable recommendations but still process orders. Design for the second where full tolerance is too costly.

**Failover.** Switching to a standby component when the primary fails. It should be tested; untested failover often fails when needed. See Topic 3.12 — Service Continuity Management.

**Capacity.** The maximum throughput a service can deliver. Capacity management makes sure that there is enough, and not much more than enough, to meet current and future demand at agreed cost. Wikipedia's article on capacity planning describes it.

**Demand.** The load placed on the service: users, requests, data volume. Demand varies by hour, day, season, and event, and it is affected by launches, campaigns, and external events. Understanding the pattern matters more than the average.

**Scalability and autoscaling.** The ability to handle more load by adding resources. Cloud platforms allow automatic scaling that adds capacity when load rises. It helps but does not remove the need for planning: it has limits, costs money, and does not fix a database that cannot scale. See Topic 4.5 — Financial Management and FinOps.

**Performance.** How quickly and efficiently the service responds. Common measures are latency (how long a request takes), throughput (how many requests are handled), and error rate. Wikipedia describes latency in engineering. Users notice the slow tail, so look at percentiles, such as the 95th, not only the average. See Topic 3.7 — Service Level Management.

**Queueing and saturation.** As a system nears full use, waiting time grows sharply. Queueing theory, described on Wikipedia, explains why a service running at 95 percent of capacity feels very different from one at 60 percent. Leave headroom.

**Performance engineering and testing.** Designing and testing for performance throughout development, not only at the end. Load testing applies expected demand; stress testing pushes past it to find breaking points. Wikipedia describes both. Test in an environment resembling production, with realistic data.

**Forecasting.** Estimating future demand from history, known events, and growth. Wikipedia describes forecasting methods. Forecasts are uncertain: record assumptions, show ranges, and compare predictions to what happens. See Topic 7.5 — Predictive Analytics and Forecasting.

**Cost trade-offs.** Each increase in availability or capacity costs money. The right level depends on the cost of failure and slowness to the business. Make the trade-off explicit with the people who pay, and write it down.

**How the lenses fit.** Agile practice treats reliability work as part of the backlog and tests early and often. AI can detect anomalies and support forecasting under review. Automation scales resources and fails over. Analytics provides the data for all three practices.

## Best practices

1. **Set availability targets from user need.** Ask what happens when the service is down for an hour, a day, a week. Set a target, and a cost, that match. Write the definition of "available" from the user's viewpoint.
2. **Find single points of failure.** Map the components and dependencies of important services, and ask what happens if each one fails. Include certificates, licences, people, and suppliers.
3. **Design for failure.** Use redundancy where the cost is justified, make components fail independently, and decide what can be turned off to protect the core.
4. **Test failover and recovery.** Rehearse failovers in a safe environment, and record the time they take. Fix what the rehearsal reveals.
5. **Know your demand pattern.** Collect load data by hour, day, and season, and list known upcoming events such as launches and deadlines. Plan for peaks, not averages.
6. **Leave headroom.** Do not run important components near full capacity. Set alert thresholds that warn in time to act.
7. **Test performance before users do.** Run load and stress tests against realistic scenarios before major releases and ahead of known peaks. Learn where the system breaks.
8. **Forecast and check.** Make a forecast with its assumptions, review it regularly against actuals, and adjust. Share ranges, not single numbers.
9. **Watch the tail.** Report percentile latency and error rates, and investigate the slowest requests. Averages hide the experience of unlucky users.
10. **Weigh cost and risk openly.** Show owners the cost of each level of availability and capacity, and record the decision and who made it.

## Questions to discuss with your team

**What would our users lose if this service were down for an hour, and does our target match?**
This ties targets to impact. Expect that different users give different answers. Ask for real examples. Follow up by writing the target with a cost and checking it with a customer.

**What are our single points of failure, including those that are not machines?**
Draw the dependencies for one critical service. Expect surprises: a certificate that nobody tracks, a single engineer, a supplier with no backup. Follow up by choosing one to reduce.

**When did we last test failover, and what happened?**
Ask for the date and the outcome. Expect "never" or "it worked in the test environment". Follow up by planning a rehearsal with a stated time to recover.

**What is the busiest hour of the year for this service, and are we ready for it?**
Think of deadlines, launches, and sales. Ask what happened last time. Follow up by planning a load test for the next peak.

**How accurate were our last three capacity forecasts?**
This tests learning. Expect that nobody checked. Compare the forecasts to actuals. Follow up by agreeing a review cycle and recording assumptions.

**How could AI help forecast demand or detect problems early, and how would we know it was wrong?**
AI can find patterns in telemetry. It can also fit noise. Ask who owns it and what it will be compared with. Follow up by running an AI forecast alongside the existing method for a quarter.

## In practice: a service management example

A national student loan agency runs an application portal. Most of the year it handles a few thousand users a day. On the last two days before the annual application deadline, it handles well over a hundred times as many. Two years ago it crashed on the final evening; last year it survived with emergency scaling and a night of overtime.

The service owner starts in January, well ahead of the next deadline. She asks for the traffic data for the last three years, hour by hour, and finds a consistent shape: a slow rise over the last week, a sharp rise on the last day, and a peak in the final three hours. She asks the team to identify single points of failure. They find that the portal depends on an identity verification service run by a supplier with a fixed rate limit, which would cap throughput at about half the expected peak.

The team does three things. It negotiates a higher rate limit with the supplier and gets a temporary increase for the final week. It runs load tests in March and June using the previous year's pattern plus 30 percent, and finds that the database becomes the bottleneck at about 70 percent of the expected peak, which it fixes by adding a read replica and caching a few expensive queries. And it prepares a degraded mode: on the last day, non-essential features such as the savings calculator are switched off if load passes a threshold.

On deadline day, the portal handles the peak. The identity service slows at the busiest hour but does not fail, and the degraded mode is activated once, for 40 minutes. What changes: no outage and no overtime crisis. What remains hard: the supplier's limit is a contract matter that resets each year; the forecast of a 30 percent increase was an assumption, and the actual increase was 22 percent, so the team may have overspent; and nobody has tested a complete region failure, which would still stop the service. The owner records these in next year's plan.

## Four perspectives

### Product and delivery teams

Design for failure and for load: make components independent, test performance as you build, and know your limits. Include degraded modes and rate limits in the design.

### Service and operations teams

Know the demand pattern and the capacity headroom. Rehearse failover, watch the slow tail, and warn early about trends. Keep the dependency map current.

### Leadership and governance

Decide availability and capacity levels with an eye on cost and risk, and ask for the evidence behind them. Fund testing and rehearsal, not only equipment. Be alert to known peaks.

### Customers and users

Tell the provider about your busiest periods and what a failure costs you. Ask what level of availability is planned and what happens when it is missed.

## Agile, AI, automation, and analytics

### Agile

Include reliability and performance work in the backlog, test early and often in the pipeline, and learn from each incident and peak. Caution: pushing reliability to "later" builds up debt that surfaces at the worst time.

### AI

AI can detect anomalies, forecast demand from history and events, and suggest scaling actions, with owners and human decisions on cost and risk. Caution: a model trained on normal days may fail on unprecedented events; compare it with simple baselines and keep a person accountable. See Topic 5.2 — AIOps.

### Automation

Automate scaling, failover, health checks, and load tests in the pipeline, with limits and logs. Caution: autoscaling can run up costs or hide a faulty release; set budgets and alerts, and test the scaling rules. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Collect demand, utilization, latency percentiles, error rates, and forecast accuracy. Caution: utilization targets can be gamed by moving load, and averages hide the slow tail; check with user experience data. See Topic 7.5 — Predictive Analytics and Forecasting and the *Service Management Metrics* book.

## Common failure modes

- **Targets from habit.** "Five nines" is promised without a reason. Set targets from user need and cost.
- **Hidden single points of failure.** A certificate or a person stops everything. Map dependencies broadly.
- **Untested failover.** It fails when needed. Rehearse regularly.
- **Planning for averages.** Peaks overwhelm the system. Plan for known peaks and leave headroom.
- **Forecasts never checked.** Errors repeat. Compare predictions with actuals.
- **Autoscaling as a cure-all.** Costs and bottlenecks remain. Test limits and set budgets.
- **Averages only.** The slow tail is ignored. Report percentiles.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Availability | Reactive | Targets for key services | Targets, redundancy, and failover tested | Availability measured against user experience | Availability designed and managed across services and suppliers |
| Capacity | Added when it runs out | Basic monitoring | Demand patterns known and forecast with assumptions | Forecast accuracy reviewed | Capacity planned and adjusted automatically with oversight |
| Performance | Complaints only | Some measures | Percentile targets and load tests before releases | Performance trends and regressions tracked | Performance engineered across the lifecycle |
| Cost awareness | Unknown | Known roughly | Trade-offs documented with owners | Cost and risk reviewed regularly | Cost, risk, and reliability optimized together |

## Checklist

- [ ] Availability targets are based on user need and cost, with a clear definition.
- [ ] Single points of failure for important services are mapped and tracked.
- [ ] Failover has been rehearsed and timed.
- [ ] We know our demand pattern and upcoming peaks.
- [ ] We run load tests before major releases and known peaks.
- [ ] Forecasts record assumptions and are checked against actuals.
- [ ] We report percentile latency and error rates.
- [ ] Cost and risk trade-offs are recorded with owners.

## AI prompts

**Find single points of failure.**

```text
Here is a description of how [service] works and what it depends on: [paste].
List each component and dependency, and for each one say what the description implies would happen if it failed, or "not stated". Mark candidate single points of failure and questions to ask. Do not assume redundancy that is not described.
List what you are unsure of.
```

**Summarize demand patterns.**

```text
Here is hourly request data for [period]: [paste summary or data].
Describe the daily, weekly, and seasonal patterns you can see, give the peak-to-average ratio, and list dates that look unusual. Do not forecast.
List what you are unsure of.
```

**Draft a load test plan.**

```text
Our service: [describe]. Expected peak: [number and pattern]. Known limits or concerns: [list].
Draft a test plan with scenarios, load levels, what to measure, what would make us stop, and risks of testing. Specify that it is run only in a safe environment.
List what you are unsure of.
```

## AI skills

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): use to forecast demand and plan resources.
- [load-testing](../../../../skills/load-testing/SKILL.md): use to design and run load tests.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): use to examine speed and responsiveness.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): use to estimate future demand with stated uncertainty.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): use to test how failures spread.

## Key sources

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016): chapters on handling overload and load balancing, free at sre.google.
- PeopleCert, ITIL certification pages: the owner's description of availability and capacity practices.
- Wikipedia, "High availability" and "Capacity planning": overviews of main ideas.
- Wikipedia, "Queueing theory": the mathematics behind waiting and saturation.

## References

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
