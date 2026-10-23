# Financial Management and FinOps

**Financial management for services makes the cost of what you run visible and ties it to the value delivered; FinOps applies that discipline to cloud and AI spending, where cost follows engineering decisions hour by hour, by putting engineers, finance, and product owners in the same conversation.**

## Why this matters

Technology cost used to be a few large, slow decisions: buy servers, sign a licence, build a data centre. Finance could plan for it once a year. Cloud services and subscriptions changed that. Any engineer can create a resource that costs money each hour, and the bill arrives a month later, aggregated so that nobody can tell what drove it. Costs rise gradually and then jump, and the first sign is a surprise on an invoice.

AI makes it sharper. A prompt costs a fraction of a cent, and a feature used by a million people costs a lot. Training a model or running a large workload on specialised hardware can cost as much in a day as a team's budget for a month. Unlike a server, which you can see in a rack, usage-based cost is invisible until it is large.

Financial management in service management predates cloud. ITIL describes it as understanding and managing the costs of services, including budgeting, accounting, and charging. FinOps is a newer practice, named by a community of practitioners, that brings financial accountability to cloud spending through collaboration among engineering, finance, and business teams. This topic describes both and how they complement each other. It links to asset management (Topic 4.1 — Asset Management), service level management (Topic 3.7 — Service Level Management), and the economics of automation and AI (Topic 6.1 — Automation Strategy and Topic 5.8 — AI Operating Model and Skills). It gives no accounting or tax advice.

## Core concepts

**Service costing.** Working out what it costs to deliver a service: people, infrastructure, licences, suppliers, and overheads. Wikipedia describes cost accounting, the broader practice of recording and analysing costs. Costs are direct (belonging to one service) or shared (to be allocated). The aim is a usable estimate, not a perfect one.

**Cost allocation.** Assigning shared costs to services, teams, or products by a rule, such as headcount, usage, or capacity. Wikipedia describes cost allocation and activity-based costing, which allocates cost by the activities that drive it. A rule should be understandable and hard to dispute; a perfect rule is not worth a long argument.

**Showback and chargeback.** Showback reports costs to consumers without billing them; chargeback bills them. Wikipedia describes IT chargeback and showback. Showback builds awareness with less friction. Chargeback creates stronger incentives and more administration, and can produce arguments about allocation. Many organisations start with showback.

**Budgeting and forecasting.** A budget is a plan of expected spending; a forecast is an updated estimate of where spending will land. Wikipedia describes budgets and forecasting. For variable cloud and AI spending, frequent forecasts and alerts matter more than an annual number. See Topic 2.10 — Agile Management and Learning for funding stable teams.

**Capital and operating expenses.** Accounting distinguishes capital expenditure, which buys assets expected to last, from operating expense, which is day-to-day cost. Wikipedia describes both. Cloud shifts spending from capital to operating, which affects budgets and reporting; ask finance how your organisation treats it.

**Total cost of ownership.** The cost over the whole life of an asset or service, including purchase, running, support, and disposal. Wikipedia describes total cost of ownership. It prevents choosing the cheapest purchase and the costliest life.

**Return and value.** Cost matters in relation to value. Return on investment (ROI), net present value, and similar measures compare benefits with costs over time. Wikipedia describes return on investment and net present value. Be careful with benefits that are hard to measure; state assumptions and ranges.

**Opportunity cost and sunk cost.** Opportunity cost is the value of the best alternative given up. Sunk cost is spending that cannot be recovered; it should not drive future decisions, though it often does. Wikipedia describes both.

**FinOps.** A practice, and a community, aimed at bringing financial accountability to variable cloud spend. Wikipedia has no separate article under that name at the time of writing; the FinOps Foundation (finops.org), part of the Linux Foundation, publishes a framework and definitions. Its core ideas are that teams own their usage and cost, that decisions are driven by the business value of technology, that data is timely and accessible, and that a central group enables rather than polices.

**The FinOps cycle.** A common description has three repeating phases: inform (make costs visible and allocated), optimise (find and act on savings), and operate (embed the practice in how teams work). Check the Foundation's current framework for details.

**Tagging and allocation in the cloud.** Cost data is only useful if resources are labelled with owner, service, and environment. Without tags, bills cannot be allocated. Enforce tagging at creation. See Topic 4.4 — Configuration Management.

**Optimisation levers.** Common ones include right-sizing resources, shutting down idle ones, using commitment discounts for steady workloads, choosing cheaper storage tiers, and architectural change. Savings depend on trade-offs with reliability and effort. Weigh each against the service level it supports. See Topic 3.11 — Availability, Capacity, and Performance.

**Unit costs.** Cost per transaction, per user, or per request relates spend to value. If total cost rises but cost per transaction falls, growth may explain it. If cost per transaction rises, something is wrong. Unit measures help in discussions with finance and product owners.

**Cost of AI.** AI workloads add costs for training, hosting, and usage, often priced by tokens (units of text processed), by compute time on specialised hardware such as graphics processing units, or by call. Wikipedia describes graphics processing units and machine learning. Energy use is also a cost and a sustainability concern. Track cost per use case and per outcome. See Topic 5.8 — AI Operating Model and Skills.

**Technical debt as a financial idea.** Deferred maintenance is a liability with interest paid in slower work and more incidents. Wikipedia describes technical debt. Showing its cost in money and time helps it compete for funding.

**How the lenses fit.** Financial management supports agile funding of stable teams. AI can help analyse bills and forecast, under review, and is itself a cost to manage. Automation shuts down idle resources and enforces tags. Analytics provides the cost and value data.

## Best practices

1. **Make cost visible to the people who decide.** Show each team the cost of what it runs, in near real time, with allocation they trust. Visibility changes behaviour more than policy does.
2. **Tag at creation and enforce it.** Require owner, service, and environment tags in the pipeline. Report untagged spend and chase it.
3. **Start with showback.** Share costs and let teams react before introducing charges. Move to chargeback only if the benefits justify the effort and arguments.
4. **Allocate by simple, agreed rules.** Choose rules people understand, document them, and review them annually. Do not spend months on perfection.
5. **Forecast often and alert on change.** For variable spend, update forecasts monthly or weekly, and set budget alerts. Investigate surprises quickly.
6. **Act on the obvious savings.** Remove idle resources, right-size, and move to cheaper tiers where service levels allow. Record each saving and its trade-off.
7. **Commit where the workload is stable.** For steady usage, consider commitment discounts after analysis, and review them. Avoid committing for uncertain workloads.
8. **Use unit costs.** Report cost per transaction, user, or outcome alongside totals. Discuss changes with product owners.
9. **Include AI usage.** Measure cost per AI use case, including usage, hosting, and support. Set limits and alerts, and review whether each use is worth its cost.
10. **Weigh cost against value and risk.** Do not cut what protects reliability, security, or user experience without a conscious choice. Show the trade-offs to the owner.

## Questions to discuss with your team

**What does our most important service cost to run, and how sure are we?**
Ask for a figure and its method. Expect rough numbers and missing pieces. Follow up by choosing one service and building a better estimate.

**Which of our cloud costs can we not attribute to a team or a service?**
Look at untagged spend. Expect a significant share. Follow up by assigning the largest items and enforcing tags for new ones.

**What did we last spend on that we would not choose again, and why did we not notice?**
This finds visibility gaps. Expect idle resources and forgotten subscriptions. Follow up by agreeing an alert and a monthly review.

**How do we decide whether a saving is worth the risk to the service?**
Ask for the last example. Expect that nobody weighed it explicitly. Follow up by agreeing who decides, and what information they need.

**What does our AI use cost per use case, and who owns the number?**
Ask for the bill breakdown. Expect aggregated or unknown figures. Follow up by assigning a cost owner for each major AI use and setting a limit.

**How do finance, engineering, and product owners talk about cost today, and what could improve it?**
Describe the meetings. Expect that they happen separately. Follow up by arranging a short monthly joint review of the top costs.

## In practice: a service management example

A national broadcaster's streaming platform runs on a public cloud and costs several times what was planned. The finance team receives a single monthly invoice and asks engineering to "reduce it by 15 percent". Engineers say traffic is growing and that cutting spend would risk the service during live events.

The platform lead asks for a month to build visibility. She enforces tags by pipeline rule, and for existing resources assigns owners with the help of each team. Untagged spend falls from 38 percent to 7 percent. With allocation in place, she produces a showback report by team and service, plus cost per hour streamed. The report shows that total cost has risen 30 percent over the year, while cost per streamed hour has fallen slightly: growth, not waste, explains most of it. It also shows that development and test environments, which run all night and weekends, account for 18 percent of spend.

The team schedules nonproduction environments to shut down outside working hours, saving about two thirds of their cost, and right-sizes a set of oversized databases. It avoids touching live-event capacity. For steady baseline workloads, it buys commitment discounts after a three-month usage analysis. A new AI-assisted subtitling feature is tracked separately: its cost per hour of video is higher than expected, and the product owner decides to apply it first to live news only.

What changes: finance and engineering discuss cost per hour streamed, and the target becomes a unit cost, not a flat cut. What remains hard: cost data arrives with a delay, so a bad deployment can run for days before it shows; the allocation of shared platform costs is disputed by two teams; and the commitments reduce flexibility if the architecture changes. The lead schedules a quarterly review of commitments and a short note on how shared costs are allocated.

## Four perspectives

### Product and delivery teams

Know what your product costs, tag what you create, and include cost in design choices. Watch cost per transaction, and tell the owner when a feature changes it.

### Service and operations teams

Remove idle resources, right-size with care for reliability, and alert on cost spikes. Bring operational data to finance conversations.

### Leadership and governance

Ask for unit costs and value, not only totals. Decide how much to centralise. Fund the visibility and tagging work, and support trade-offs against reliability explicitly.

### Customers and users

If you are charged, you should see what drives the cost and what choices you have. Ask for the basis of any allocation, and say which service levels you value.

## Agile, AI, automation, and analytics

### Agile

Fund stable teams, review cost with product owners regularly, and treat cost as one input to prioritisation. Caution: do not make cost cutting the only target; teams will cut what is easy, such as testing and resilience.

### AI

AI can analyse bills, find anomalies and idle resources, and forecast spend, under review. AI workloads need their own cost tracking, owners, and limits. Caution: an AI assistant that recommends savings may ignore reliability or contractual constraints; check each recommendation. See Topic 5.8 — AI Operating Model and Skills.

### Automation

Automate tag enforcement, shutdown of idle resources, budget alerts, and reports, with exceptions and logs. Caution: automatic shutdown can delete or stop something needed; use schedules and owner confirmation for important resources. See Topic 6.1 — Automation Strategy.

### Analytics

Use allocated cost, unit cost, forecast accuracy, untagged share, and commitment utilisation. Caution: showback figures depend on allocation rules, and optimisation savings are often overstated; compare with actual invoices. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **One lump invoice.** Nobody owns the cost. Tag, allocate, and report by team.
- **Cost cutting as a target.** Reliability suffers. Pair cost with service levels and value.
- **Allocation fights.** Teams argue over rules. Choose simple rules and review annually.
- **Forecast once a year.** Variable spend surprises. Forecast often and alert.
- **Committing too early.** Discounts lock in the wrong capacity. Analyse usage first.
- **Ignoring AI cost.** Usage grows unseen. Track per use case and set limits.
- **No link to value.** Spending is cut or grown without reason. Use unit costs and outcomes.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Visibility | Total invoice | Cost by account | Allocated cost by team and service with tags | Near real-time cost with anomaly alerts | Cost and value visible across providers and suppliers |
| Allocation | None | Rough | Simple documented rules | Rules reviewed with owners | Allocation integrated with planning and funding |
| Optimisation | Ad hoc | Some savings found | Regular optimisation cycle | Savings tracked against actual cost | Optimisation automated with oversight |
| Value link | Not linked | Totals discussed | Unit costs reported | Unit costs and outcomes reviewed with owners | Cost, risk, and value optimised together |

## Checklist

- [ ] We tag resources with owner, service, and environment at creation.
- [ ] Teams see the cost of what they run.
- [ ] Allocation rules are written down and agreed.
- [ ] Forecasts are updated at least monthly, with budget alerts.
- [ ] We review idle and oversized resources regularly.
- [ ] We report unit costs alongside totals.
- [ ] AI usage and cost are tracked by use case, with limits.
- [ ] Savings are weighed against reliability and recorded.

## AI prompts

**Find anomalies in a cost report.**

```text
Here is a monthly cost report by service and team for the last six months: [paste data].
List changes of more than [percentage] between months, the services involved, and one question per change to ask the owner. Do not explain causes that are not in the data.
List what you are unsure of.
```

**Draft a showback summary for a team.**

```text
Team: [name]. Here are their costs and usage for the month: [paste]. Prior month: [paste].
Write a one-page summary in plain language: total, change, top three cost drivers, unit cost if given, and two questions for the team. Do not recommend cuts.
List what you are unsure of.
```

**Estimate the cost of an AI use case.**

```text
The use case: [describe]. Expected usage: [number of requests per day, average size]. Pricing we have been given: [paste].
Calculate a monthly cost range with low, expected, and high usage, showing each step and assumption. State what costs the figures leave out. Do not invent prices.
List what you are unsure of.
```

## AI skills

- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): use to build and update forecasts with stated assumptions.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to compare costs and benefits.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): use to review spend across products and services.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): use to manage commitments and renewals.

## Key sources

- FinOps Foundation (finops.org): the community's framework, definitions, and case material for cloud financial management.
- J.R. Storment and Mike Fuller, *Cloud FinOps* (2nd edition, 2023): a practitioner guide to the practice.
- PeopleCert, ITIL certification pages: the owner's description of the financial management practice.
- Wikipedia, "Cost accounting" and "IT chargeback and showback": overviews of the accounting ideas.

## References

1. Cost accounting — Wikipedia — https://en.wikipedia.org/wiki/Cost_accounting
2. IT chargeback and showback — Wikipedia — https://en.wikipedia.org/wiki/IT_chargeback_and_showback
3. Cost allocation — Wikipedia — https://en.wikipedia.org/wiki/Cost_allocation
4. Activity-based costing — Wikipedia — https://en.wikipedia.org/wiki/Activity-based_costing
5. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Net present value — Wikipedia — https://en.wikipedia.org/wiki/Net_present_value
8. Capital expenditure — Wikipedia — https://en.wikipedia.org/wiki/Capital_expenditure
9. Operating expense — Wikipedia — https://en.wikipedia.org/wiki/Operating_expense
10. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
11. FinOps Foundation — Linux Foundation — https://www.finops.org
