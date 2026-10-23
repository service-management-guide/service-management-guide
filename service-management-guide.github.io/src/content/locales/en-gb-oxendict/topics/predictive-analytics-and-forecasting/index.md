# Predictive Analytics and Forecasting

**Forecasts and predictions of demand, capacity, incidents, and change risk help teams prepare, but they are uncertain by nature; use simple baselines first, show ranges instead of single numbers, validate against held-back data, monitor for drift, and make the decision rule explicit before the forecast is made.**

## Why this matters

Service teams are always preparing for something. How many contacts will arrive in the first week of the new term? When will the storage fill? Which changes are likely to cause incidents? How many people should be on call during the sale? Decisions about staff, capacity, and risk all rest on beliefs about the future, whether or not anyone states them.

Prediction makes those beliefs explicit and testable. A forecast of next month's ticket volume, with a range, can be compared with what happens and improved. A model that scores the risk of a change can be checked against the changes that failed. Done well, this replaces gut feel with evidence. Done badly, it replaces gut feel with false confidence: a single number to two decimal places, produced by a model nobody can explain, trusted because it looks scientific.

Predictions go wrong for ordinary reasons. The past did not contain the pattern that matters. The model fits noise. A launch, a policy change, or an outage breaks the relationship the model learned. A rare event is forecast with a tool built for common ones. This topic describes the main kinds of forecasting and prediction in service management, the methods in plain terms, and the habits that keep them honest. It builds on analytics (Topic 7.1 — Analytics for Service Management) and capacity planning (Topic 3.11 — Availability, Capacity, and Performance), and relates to AIOps (Topic 5.2 — AIOps) and to the economics of cloud (Topic 4.5 — Financial Management and FinOps).

## Core concepts

**Forecasting and prediction.** Forecasting estimates future values of a quantity over time, such as demand next month. Prediction more broadly estimates an unknown, such as whether a change will fail. Wikipedia describes forecasting and predictive analytics. Both use patterns in past data, and both are uncertain.

**Time series.** Data recorded at regular intervals. Wikipedia describes time series analysis. Many service quantities, such as daily ticket counts, are time series with a trend (a long-run rise or fall), seasonality (regular cycles, such as weekly or yearly), and noise. Wikipedia describes seasonality. Forecasts need to account for all three.

**Baselines.** The simplest forecast that could work: "next week will be like this week", or "this month will be like the same month last year, adjusted for growth". Baselines are surprisingly hard to beat. Always compare a sophisticated method with a baseline; if it does not do clearly better, use the baseline.

**Classical methods.** Techniques such as exponential smoothing and autoregressive integrated moving average (ARIMA) models, which Wikipedia describes, handle trends and seasonality for many series and are often hard to beat with more complex tools. They are also easier to explain.

**Machine learning methods.** Methods that learn patterns from many variables, such as regression trees or neural networks, can use extra information, such as planned events. Wikipedia describes regression analysis and machine learning in general. They can do well when there is plenty of relevant data and can overfit when there is not. See Topic 5.1 — AI in Service Management.

**Overfitting and validation.** A model that matches the past too closely, including its noise, performs poorly on new data. Wikipedia describes overfitting. The defence is to hold back data the model did not see, in separate training, validation, and test sets, as Wikipedia describes, and to test on later periods than those used to build the model. For time series, this is called backtesting; Wikipedia describes it.

**Leakage.** Using information in the model that would not be available at the time of prediction, such as a field filled in after an incident is resolved. Wikipedia describes leakage in machine learning. It produces impressive test results and useless forecasts.

**Uncertainty and intervals.** A forecast is a distribution of possibilities, not a number. A prediction interval, described on Wikipedia, gives a range expected to contain the outcome with stated probability. Report ranges, such as "between 8,000 and 9,500 contacts, most likely 8,700". Monte Carlo methods, described on Wikipedia, simulate many possible futures to show a range.

**Scenarios.** For things that depend on decisions or events, such as a launch, scenario planning, described on Wikipedia, develops a few plausible stories and plans for each, rather than one forecast. Use scenarios when the future could differ in kind from the past.

**Accuracy measures.** Common measures compare forecasts with outcomes, such as mean absolute percentage error, which Wikipedia describes, and the share of outcomes that fall in the stated range. Each has weaknesses: percentage error is unstable when values are near zero. Choose measures that match how errors cost you.

**Classification and risk scores.** Predicting whether something will happen, such as a change failing or a ticket breaching its target, produces a score. Wikipedia describes precision and recall, the two ways such predictions can be wrong: false alarms and misses. Rare events make this hard: Wikipedia describes the base rate fallacy, in which a good-seeming detector produces mostly false alarms when the event is rare. Decide the costs of each kind of error before choosing a threshold.

**Calibration.** A risk score is calibrated if, among items scored 20 percent, about 20 percent actually occur. Wikipedia describes calibration in statistics. A score that ranks well but is not calibrated can mislead people who read it as a probability.

**Drift.** Relationships change as services, users, and tools change. Wikipedia describes concept drift. A model that worked last year may fail after a new product launch. Monitor accuracy over time, and retrain or rebuild when it falls.

**Rare and extreme events.** Models trained on ordinary history do poorly on events that are very unusual. Wikipedia describes black swan theory, the idea that rare, high-impact events are not predictable from ordinary data. Do not rely on forecasts for tail risks; use scenarios, stress tests, and rehearsals. See Topic 3.12 — Service Continuity Management.

**Queueing and capacity.** Forecast demand feeds capacity decisions. Queueing theory and Little's law, which Wikipedia describes, relate demand, capacity, and waiting. See Topic 3.11 — Availability, Capacity, and Performance and Topic 2.3 — Flow and Kanban.

**Decisions first.** A forecast is useful only if it changes a decision. Before building one, write the decision it informs, the action thresholds, and what you will do at each. If nothing would change, do not forecast.

**Human judgement.** People know about launches, policy changes, and events that no model has seen. Combine model output with judgement, record the adjustments, and check later whether they helped.

**How the lenses fit.** Prediction is the forward-looking side of analytics. Agile practice treats a forecast as a hypothesis, refreshed often. AI techniques extend what can be predicted, under review and with the cautions above. Automation can act on predictions, such as scaling ahead of demand, with limits.

## Best practices

1. **State the decision and thresholds first.** Write what action each range of forecast would trigger, and who decides. Skip forecasts that would change nothing.
2. **Start with a baseline.** Build a simple forecast, such as last year's pattern adjusted for growth, and measure its error. Use it as the bar to beat.
3. **Prefer methods you can explain.** Use classical methods or simple models unless complex ones are clearly better on held-back data. Be able to say, in plain words, what drives the forecast.
4. **Validate honestly.** Hold back the most recent period, backtest across several periods, and check for leakage. Report the error on data the model did not see.
5. **Show ranges and scenarios.** Give a most likely value and a plausible range. Use scenarios where events could change the pattern. Do not present false precision.
6. **Include known events.** Add launches, deadlines, holidays, and campaigns from the people who know them. Record adjustments made by judgement.
7. **Match the threshold to the cost of errors.** For risk scores, decide the cost of false alarms and misses, set the threshold accordingly, and check calibration.
8. **Monitor accuracy and drift.** Compare each forecast with the outcome, track error over time, and retrain or rebuild when accuracy falls. Keep a log of forecasts so they can be audited.
9. **Do not over-trust predictions of rare events.** Use scenarios, stress tests, and rehearsals for severe but unlikely events.
10. **Close the loop with decisions.** Record the decision taken and the result, and use it to improve the forecast and the decision rule.

## Questions to discuss with your team

**What decisions do we make today based on a guess about the future, and what would we do differently with a better one?**
List them: staffing, capacity, release timing. Expect several. Follow up by choosing one and writing the decision rule.

**How accurate were our last three forecasts, and how did we find out?**
Ask for the numbers. Expect that nobody checked. Follow up by comparing past forecasts with actuals and agreeing to keep a log.

**What is the simplest forecast that could work for this, and how much better does a complex model have to be to justify it?**
Build the baseline. Expect that it performs respectably. Follow up by setting a minimum improvement for adopting anything more complex.

**What events do we know about that a model trained on history would not?**
List launches, deadlines, and policy changes. Expect many. Follow up by deciding how to include them, as inputs or as adjustments.

**How would a risk score for changes be used, and what is the cost of a false alarm versus a miss?**
Discuss in concrete terms. Expect different views. Follow up by agreeing a threshold and a review of the first month's results.

**Where could AI help us forecast or predict, and how would we know it was wrong?**
AI can fit complex patterns and also invent them. Ask for the comparison with baselines and the plan for monitoring drift. Follow up by running an AI forecast alongside the current method for a quarter.

## In practice: a service management example

A national student loans agency runs a support desk that is quiet for most of the year and overwhelmed in the two weeks before the annual application deadline. Until now, the head of the desk has staffed the peak by recalling last year's experience and adding a margin. Two years ago the desk was understaffed, and last year it overspent on temporary agents.

The service analyst, asked to improve the forecast, begins with the decision: how many agents to book six weeks ahead, in steps of five, with a final adjustment two weeks ahead. She builds a baseline: for each day in the last four years, the number of contacts relative to the days to the deadline, scaled by the number of applicants so far. On held-back data from the previous year, the baseline's error on the peak week is 18 percent. She tries a more complex model that adds weather, social media mentions, and the day of the week. On the same held-back year, it improves the error to 15 percent, but on the year before it is worse than the baseline, and nobody can explain why. She chooses the baseline with a simple adjustment for the number of new applicants, and shows the head a range: 11,000 to 14,500 contacts in the peak week, most likely 12,500.

She asks the business about known events. A new online form will launch two weeks before the deadline, which could raise or lower contacts. She builds two scenarios: one where the form reduces contacts by 15 percent, and one where it adds 10 percent because of confusion. The head books for the middle of the range, with an on-call pool of agents for the upper scenario. The analyst records the forecast, the scenarios, and the decision.

What changes: the peak week's actual contacts are 13,800, within the range, and the desk meets its target without overspending. What remains hard: the form launch did add confusion, which only the upper scenario anticipated; the forecast depends on data about applicants that arrives late; and a senior manager asked for a single number, which the analyst gave with the range. She records the error, 10 percent against the most likely value, and plans to compare it with the baseline and with next year's.

## Four perspectives

### Product and delivery teams

Tell analysts about launches, changes, and campaigns early, since they move demand and risk. Provide the data that predictions need, and use risk scores as prompts for questions, not as verdicts.

### Service and operations teams

Use forecasts to plan staffing and capacity, with a margin for the upper scenario. Report where forecasts were wrong and why, so that the method improves.

### Leadership and governance

Ask for the decision, the baseline, the range, and the accuracy track record. Accept uncertainty. Fund the data and the time to check forecasts. Do not demand single numbers.

### Customers and users

You benefit when providers prepare for peaks and risks. Tell the provider about your own plans that may affect demand, such as campaigns, and report problems that suggest a forecast was off.

## Agile, AI, automation, and analytics

### Agile

Treat forecasts as hypotheses, refresh them often, and check them after each period. Involve stakeholders in the assumptions. Caution: re-forecasting constantly without recording earlier forecasts hides how wrong they were.

### AI

AI methods can model many variables and unstructured signals, and can draft summaries of forecasts, under review. Name an owner, compare with baselines, and monitor drift. Caution: an AI forecast without a range or a test on held-back data is a guess with a polished surface. See Topic 5.1 — AI in Service Management.

### Automation

Automate data collection, forecast runs, and scheduled alerts, and, where safe, actions such as scaling ahead of expected load, with limits. Caution: an automatic action on a wrong forecast can waste money or cause harm; set bounds and review. See Topic 6.1 — Automation Strategy.

### Analytics

Measure forecast error, interval coverage, calibration of risk scores, and the value of decisions taken. Caution: a model with a low average error may fail at the peaks that matter most; evaluate where errors cost most. See the *Service Management Metrics* book and Topic 7.1 — Analytics for Service Management.

## Common failure modes

- **Forecasts that change nothing.** No decision depends on them. Start from the decision.
- **Complex model, no baseline.** It does no better than a simple one. Always compare.
- **Overfitting and leakage.** Great test results, poor reality. Hold back later data and check inputs.
- **Single numbers.** False precision. Show ranges and scenarios.
- **Ignoring known events.** A model misses a launch. Add what people know.
- **No monitoring.** Drift goes unnoticed. Track accuracy over time.
- **Trusting rare-event predictions.** A tail risk is mispriced. Use scenarios and rehearsals.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Decisions and baselines | Guesswork | Some forecasts | Forecasts tied to named decisions, with baselines | Value of forecasts reviewed | Forecasts integrated into planning across services |
| Method and validation | Unchecked | Basic methods | Explainable methods, backtesting, and leakage checks | Methods compared and improved | Methods selected and monitored across a portfolio |
| Uncertainty | Single numbers | Some ranges | Ranges and scenarios standard | Interval coverage and calibration measured | Uncertainty used in automated decisions with limits |
| Monitoring | None | Occasional review | Accuracy and drift tracked | Retraining and rebuild triggered by evidence | Continuous evaluation across models |

## Checklist

- [ ] Each forecast names the decision and the thresholds it informs.
- [ ] We compare every model with a simple baseline.
- [ ] We validate on held-back later data and check for leakage.
- [ ] We report ranges and use scenarios where events could change patterns.
- [ ] Known events from the business are included or recorded as adjustments.
- [ ] Risk scores have a threshold set by the cost of false alarms and misses, and we check calibration.
- [ ] We log forecasts, compare them with outcomes, and monitor drift.
- [ ] We use scenarios and rehearsals for rare, severe events.

## AI prompts

**Build a baseline from data.**

```text
Here is a monthly count of [quantity] for the last [number] years: [paste].
Describe the trend and seasonal pattern, produce a simple baseline forecast for the next [period] (state the method and show the calculation), and give an approximate range based on the spread in past years. Do not use any method that needs data I have not provided.
List what you are unsure of.
```

**Check a forecast report.**

```text
Here is a forecast report and how it was built: [paste].
List problems: no baseline comparison, no validation on held-back data, possible leakage, single numbers without ranges, missing known events, and claims that are stronger than the evidence. Quote the text for each. Do not redo the forecast.
List what you are unsure of.
```

**Draft scenarios.**

```text
The decision: [describe]. The uncertain event: [describe]. What we know: [list].
Draft three scenarios (low, middle, high) with the assumption behind each, what we would see early if it were happening, and how our plan would differ. Do not assign probabilities.
List what you are unsure of.
```

## AI skills

- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): use to estimate future demand with stated uncertainty.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): use to turn forecasts into capacity decisions.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): use to analyse trends and seasonality.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): use to choose and check methods.
- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): use to forecast cost with assumptions.

## Key sources

- Rob J. Hyndman and George Athanasopoulos, *Forecasting: Principles and Practice* (free online at otexts.com/fpp3): a clear, practical text on forecasting methods.
- Nate Silver, *The Signal and the Noise* (2012): a readable account of prediction and its pitfalls.
- Wikipedia, "Forecasting" and "Overfitting": overviews of the field and its main trap.
- Wikipedia, "Prediction interval": how to express uncertainty.

## References

1. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
2. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
3. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
4. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
5. Exponential smoothing — Wikipedia — https://en.wikipedia.org/wiki/Exponential_smoothing
6. Autoregressive integrated moving average — Wikipedia — https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average
7. Overfitting — Wikipedia — https://en.wikipedia.org/wiki/Overfitting
8. Backtesting — Wikipedia — https://en.wikipedia.org/wiki/Backtesting
9. Prediction interval — Wikipedia — https://en.wikipedia.org/wiki/Prediction_interval
10. Scenario planning — Wikipedia — https://en.wikipedia.org/wiki/Scenario_planning
11. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
12. Base rate fallacy — Wikipedia — https://en.wikipedia.org/wiki/Base_rate_fallacy
