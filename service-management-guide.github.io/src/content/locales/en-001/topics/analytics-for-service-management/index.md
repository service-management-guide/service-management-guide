# Analytics for Service Management

**Analytics turns service data into answers to questions: what happened, why, what will happen, and what to do; it earns trust when each analysis starts from a named question, states its data and limits, separates correlation from cause, and ends in a decision someone can make.**

## Why this matters

Service teams generate a great deal of data: tickets, logs, metrics, surveys, change records, cost reports. Most of it sits unused, or is summarized in dashboards that nobody can connect to a decision. The reports describe activity, such as tickets closed, and say little about whether customers are better off.

Analytics is the discipline of getting answers from the data. Wikipedia describes analytics as the discovery, interpretation, and communication of meaningful patterns in data. In service management it can show where demand comes from, why incidents recur, where work waits, which changes are risky, and whether an improvement helped. It can also mislead. A chart can look authoritative while resting on a biased sample, a coincidence, or a definition that quietly changed.

This topic is the entry point to Part 7. It describes the kinds of analytics, the steps of a sound analysis, and the traps that catch even careful people. It leaves metric definitions to the companion *Service Management Metrics* book, and points to the next topics for foundations (Topic 7.2 — Data Foundations and Governance), measurement (Topic 7.3 — Measurement and Reporting), observability (Topic 7.4 — Observability and Telemetry), prediction (Topic 7.5 — Predictive Analytics and Forecasting), flow (Topic 7.6 — Process and Value Stream Analytics), and experience (Topic 7.7 — Experience and Sentiment Analytics). The owner's description of the newest ITIL version stresses measurable outcomes (see Topic 1.3 — ITIL 5), which depend on analytics done well.

## Core concepts

**Four kinds of analytics.** A common framing distinguishes:

| Kind | Question | Example in service work |
|---|---|---|
| Descriptive | What happened? | Incidents per month by service |
| Diagnostic | Why did it happen? | What the repeat incidents have in common |
| Predictive | What is likely to happen? | Forecast of ticket volume next quarter |
| Prescriptive | What should we do? | Staffing levels that meet a target at least cost |

Wikipedia describes descriptive, predictive, and prescriptive analytics. Each builds on the one before it. Most service teams will get the most value from doing the first two well.

**Start with a question.** An analysis begins with a decision someone needs to make, such as whether to add staff to the evening shift, and turns it into a question the data can answer. Without a question, analysis becomes a search for something interesting, and Wikipedia's article on data dredging explains how that finds patterns that are only chance.

**Data.** What you have, where it came from, how it was recorded, and what it leaves out. Ticket data show what people chose to report and how agents categorized it, not everything that happened. See Topic 7.2 — Data Foundations and Governance. Wikipedia describes data quality as fitness for use.

**Descriptive statistics.** Summaries such as counts, medians, percentiles, and spread. Wikipedia describes descriptive statistics. For service data, medians and percentiles are usually more useful than averages, which hide long tails, and outliers, described on Wikipedia, deserve a look rather than automatic removal.

**Exploratory analysis.** Looking at the data to see its shape, quality, and surprises before testing ideas. Wikipedia describes exploratory data analysis. It prevents silly mistakes, such as treating a missing value as zero.

**Sampling and bias.** Most analyses use a sample, and samples can mislead. Wikipedia describes sampling and selection bias. Survey responses come from those who answer, and support tickets come from those who contact you. Survivorship bias, also described there, arises when you study only what remains, such as customers who stayed.

**Correlation and cause.** Two things moving together does not mean one causes the other. Wikipedia describes the problem under "correlation does not imply causation", and confounding, in which a third factor drives both. Ticket volume and server count may rise together because the business grew. Causal claims need more than a chart: a controlled comparison, or careful reasoning about alternatives. Wikipedia describes causal inference and A/B testing as ways to learn about cause.

**Paradoxes and traps.** Simpson's paradox, described on Wikipedia, is a case in which a trend that appears in several groups reverses when the groups are combined. The base rate fallacy, also described there, is the mistake of ignoring how common something is, so that a good detector for a rare event produces mostly false alarms. Being aware of such traps is a defense.

**Statistical significance and uncertainty.** A result is "significant" when it is unlikely to be due to chance alone under stated assumptions. Wikipedia describes hypothesis tests and confidence intervals. Significance is not importance: a tiny effect can be significant in a large dataset, and a large effect can be uncertain in a small one. Show ranges, not only single numbers.

**Visualization.** Charts help people see patterns, and bad charts mislead. Wikipedia describes data and information visualization. Choose forms that suit the question, label axes and units, start scales honestly, and show uncertainty. Dashboards, described on Wikipedia as visual displays of key information, should serve decisions and be few.

**Time series.** Much service data is recorded over time, with trends, seasonal patterns, and sudden shifts. Wikipedia describes time series analysis. Compare like with like: this Monday with other Mondays. See Topic 7.5 — Predictive Analytics and Forecasting.

**Models and machine learning.** Statistical and machine learning models can predict, classify, and cluster. They need training and test data, validation, and monitoring for drift. See Topic 5.1 — AI in Service Management. A model is not a source of truth; it is a tool with assumptions.

**Goodhart's law.** When a measure becomes a target, it stops being a good measure. Wikipedia describes the law. Analytics used to judge people or teams invites changes in behavior that improve the number and not the result. Use measures to learn, pair them with others, and say how each could be gamed. See the *Service Management Metrics* book.

**Ethics and privacy.** Analytics on people, such as agent productivity or user behavior, raises questions of consent, fairness, and proportion. Wikipedia describes privacy and algorithmic bias elsewhere. Collect only what you need, aggregate where you can, and be open about what you analyze and why. See Topic 5.6 — AI Governance, Risk, and Compliance.

**Communication.** An analysis that nobody understands changes nothing. State the question, the answer, the confidence, the limits, and the recommended decision in plain words, with a chart where it helps.

**How the lenses fit.** Analytics is the fourth lens, and it serves the other three. Agile practice uses it to check whether a change helped. AI uses data as fuel and can speed analysis, under review. Automation produces data and acts on it. Analytics also needs the first three lenses to turn insight into change.

## Best practices

1. **Start from a decision.** Write who will decide what, by when, and what evidence would change their mind. Shape the analysis to that.
2. **Turn the decision into a precise question.** Define the terms, such as "resolved" or "repeat incident", the population, and the period before you touch the data.
3. **Know your data.** Document sources, how records are created, known gaps, and changes in definitions over time. Check a sample against reality.
4. **Look before you test.** Explore distributions, missing values, and outliers first. Fix errors and record what you changed.
5. **Use robust summaries.** Report medians and percentiles with counts, and show the spread. Compare like with like, such as the same weekday or season.
6. **Beware bias.** Ask who is missing from the data and why. State the limits of the sample when you present results.
7. **Do not claim cause without grounds.** Say "associated with" unless you have a comparison or a strong argument. List alternative explanations and say how you checked them.
8. **Show uncertainty.** Give ranges and note sample sizes. Avoid false precision.
9. **Design visuals for the reader.** Keep charts simple, honest, and labeled. Prefer a few meaningful dashboards to many unused ones.
10. **Close the loop.** Record the decision taken and the result, and check later whether the analysis helped. Retire reports that nobody uses.

## Questions to discuss with your team

**What is the last decision we made with data, and what did the data actually tell us?**
Ask for the example. Expect that data supported a decision already made. Follow up by choosing a coming decision and writing the question first.

**Which of our reports does nobody read or act on?**
Check usage. Expect several. Follow up by retiring one and asking whether anyone misses it.

**Where might our data be biased or incomplete, and who is missing?**
Think of tickets, surveys, and logs. Expect that many users never contact us. Follow up by choosing one source and adding a check from another.

**What would convince us that a recent improvement actually worked?**
Discuss evidence. Expect reliance on before-and-after charts. Follow up by listing other things that changed at the same time.

**Which of our numbers could be gamed, and how would we notice?**
Pick a measure that matters to someone's evaluation. Expect creative answers. Follow up by agreeing a sample check or a paired measure.

**How could AI help us analyze our data, and how would we check its work?**
AI can summarize data, draft charts, and suggest patterns. It can also state invented findings. Ask who checks and how. Follow up by repeating an AI analysis by hand on a small dataset.

## In practice: a service management example

A national tax authority's IT service desk handles 25,000 contacts a month. A senior manager has a dashboard showing that average resolution time has risen 20 percent in a year, and asks the desk lead to "bring it back down". The lead decides to analyze before reacting.

She starts with the question: has the time to resolve a typical contact risen, and if so, for which kinds of contact? She checks the data first. In the spring the ticket tool changed how "resolved" is recorded, so that tickets are resolved when the agent marks them and not when the user confirms. She also finds that a new category of complex "access to case system" requests, launched in the autumn, accounts for 12 percent of contacts and takes five times as long as the rest.

She recalculates using medians and 90th percentiles, split by category. For the old categories, the median resolution time is unchanged; the 90th percentile has risen slightly. The overall average rose mainly because of the new category and the changed definition. She notes that the data cannot show why some access requests take long, only that they do.

She presents a one-page summary: the average rose because of a new type of work and a definition change; most contacts are as fast as before; the long tail has grown a little, and the complex requests need a look. She avoids saying that the new category "caused" the rise in the long tail, since staff changes also occurred. She proposes two actions: a study of access requests with a sample of 40 tickets, and a monthly report by category with percentiles.

What changes: the manager stops asking for a blanket reduction and asks for the access request study. What remains hard: the definition change cannot be fully undone, so comparisons across the break remain approximate; the sample of 40 tickets was read by one person and is open to bias; and the manager still prefers a single number. The lead keeps both views and explains the limits each time.

## Four perspectives

### Product and delivery teams

Use data to test whether changes helped, and instrument your product so that useful data exist. Share definitions and limits with those who use your data, and avoid overclaiming from a single chart.

### Service and operations teams

Know where your data come from and what they miss. Report medians and percentiles with counts, and examine long tails. Tell analysts when a tool or a category changes.

### Leadership and governance

Ask for the question, the data, the limits, and the decision, not only a chart. Do not use single measures to judge people. Fund data quality and analytical skills.

### Customers and users

You are in the data, and often missing from it. You should be asked what matters to you, and the provider should say how your information is used. Tell the provider when numbers do not match your experience.

## Agile, AI, automation, and analytics

### Agile

Use analytics as a feedback tool: set an expectation, make a small change, check the data, and decide. Share results with stakeholders. Caution: do not wait for perfect data before acting on a small experiment; also do not treat a short before-and-after chart as proof.

### AI

AI can clean data, draft queries and charts, summarize results, and suggest patterns, with an owner and checks. Caution: an AI-generated analysis can state findings the data do not support, or use the wrong method; require it to show its calculations, and repeat a sample by hand. See Topic 5.1 — AI in Service Management.

### Automation

Automate data collection, cleaning, and routine reports, with documentation of each step. Caution: automated reports can continue after their meaning has changed; review definitions and sources regularly. See Topic 6.1 — Automation Strategy.

### Analytics

This topic is the lens itself: questions, data, methods, uncertainty, and decisions. Caution: do not let the volume of data stand in for insight; measure whether analyses changed decisions. See the *Service Management Metrics* book for metric definitions and guardrails.

## Common failure modes

- **Reports without decisions.** Dashboards nobody uses. Start from a decision and retire unused reports.
- **Averages that hide.** A tail of bad experiences goes unseen. Use medians, percentiles, and splits.
- **Unknown definitions.** A change in a field's meaning breaks trends. Document and monitor definitions.
- **Biased samples.** Only those who contact you are counted. State who is missing.
- **Cause from correlation.** A chart is taken as proof. List alternative explanations and test.
- **False precision.** Numbers are shown without uncertainty. Show ranges and sample sizes.
- **Targets that distort.** People optimize the number. Pair measures and sample real cases.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Questions and decisions | Reports by habit | Some questions defined | Analyses start from named decisions | Decision impact tracked | Analytics integrated with planning across services |
| Data understanding | Unknown | Main sources known | Sources, definitions, and gaps documented | Data quality measured and improved | Data governed and shared across teams and partners |
| Method | Averages and charts | Medians and basic splits | Standard methods, uncertainty, and bias checks | Methods reviewed and peer-checked | Advanced methods with oversight and validation |
| Communication | Dashboards | Summaries | Plain-language findings with limits | Findings tested with users | Insights embedded in daily decisions |

## Checklist

- [ ] Each analysis starts from a named decision and a precise question.
- [ ] We document our data sources, definitions, and known gaps.
- [ ] We report medians and percentiles with counts.
- [ ] We state who is missing from the data and the limits of samples.
- [ ] We separate correlation from cause and list alternative explanations.
- [ ] We show uncertainty and avoid false precision.
- [ ] We pair measures that could be gamed and sample real cases.
- [ ] We track the decisions taken and review whether the analysis helped.

## AI prompts

**Turn a decision into a question.**

```text
The decision we need to make: [describe]. Who decides: [role]. Data we have: [list sources and fields].
Write three precise analytical questions that would inform the decision, with definitions of key terms, the population, and the period. List what data we lack for each. Do not propose answers.
List what you are unsure of.
```

**Check a summary of results for traps.**

```text
Here is a summary of an analysis with the data used: [paste].
List possible problems: sample bias, missing groups, changes in definitions, outliers, confounding factors, and claims of cause not supported by the data. Quote the text for each. Do not redo the analysis.
List what you are unsure of.
```

**Describe a dataset before analysis.**

```text
Here is a sample of rows from our dataset with field names, identifiers removed: [paste].
List each field, its apparent type, missing values, odd values, and questions to ask about how it is recorded. Do not draw conclusions about the business.
List what you are unsure of.
```

## AI skills

- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): use to choose and apply sound statistical methods.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): use to examine change over time.
- [data-quality](../../../../skills/data-quality/SKILL.md): use to check and improve the data behind an analysis.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): use to define delivery measures with their risks.
- [survey-design](../../../../skills/survey-design/SKILL.md): use to design surveys that avoid common bias.

## Key sources

- Edward Tufte, *The Visual Display of Quantitative Information* (1983): a classic on honest charts.
- Darrell Huff, *How to Lie with Statistics* (1954): a short, readable account of common statistical tricks.
- The companion *Service Management Metrics* book: metric definitions, gaming vectors, and guardrails.
- Wikipedia, "Analytics" and "Data analysis": overviews of the field.

## References

1. Analytics — Wikipedia — https://en.wikipedia.org/wiki/Analytics
2. Data analysis — Wikipedia — https://en.wikipedia.org/wiki/Data_analysis
3. Descriptive statistics — Wikipedia — https://en.wikipedia.org/wiki/Descriptive_statistics
4. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
5. Prescriptive analytics — Wikipedia — https://en.wikipedia.org/wiki/Prescriptive_analytics
6. Correlation does not imply causation — Wikipedia — https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation
7. Simpson's paradox — Wikipedia — https://en.wikipedia.org/wiki/Simpson%27s_paradox
8. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
9. Data dredging — Wikipedia — https://en.wikipedia.org/wiki/Data_dredging
10. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
12. Exploratory data analysis — Wikipedia — https://en.wikipedia.org/wiki/Exploratory_data_analysis
