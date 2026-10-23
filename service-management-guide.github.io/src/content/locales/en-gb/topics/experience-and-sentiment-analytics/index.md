# Experience and Sentiment Analytics

**Experience analytics asks users how a service helped them and watches how they actually use it; surveys, feedback text, sentiment analysis, and experience level agreements are useful when questions are fair, response bias is acknowledged, sentiment tools are checked against people's own words, and no individual is ranked or watched.**

## Why this matters

A service can meet every technical target and still leave people frustrated. The system is up, tickets are closed on time, and an employee has spent two hours that morning trying to get access to a tool she needs. Dashboards built from system data cannot see that. They count what the machine recorded, not how the person fared.

Experience analytics fills the gap. It asks people directly, through short surveys at the moment of use and longer periodic ones. It reads what they write: ticket comments, survey answers, chat messages. It observes how they use the service, where they abandon a form, how many times they try before they succeed. It combines these into a picture of the experience that technical measures miss. The idea behind experience level agreements (XLAs), introduced in Topic 3.7 — Service Level Management, is to set targets for experience alongside targets for technical performance.

The methods bring their own risks. Surveys reach only people who respond. Sentiment analysis tools guess at feelings from words, and often guess wrongly, especially across languages and cultures. Scores become targets, and targets invite pressure on respondents. Employee data raises privacy and trust questions. This topic describes how to gather and use experience data well, with fairness and humility about what it can show. It connects to the service desk (Topic 3.1 — Service Desk), service levels (Topic 3.7 — Service Level Management), measurement (Topic 7.3 — Measurement and Reporting), and the use of AI to read text (Topic 5.1 — AI in Service Management).

## Core concepts

**Experience.** What a person thinks, feels, and does when using a service, from first contact to the outcome. Wikipedia describes customer experience and user experience. For internal services, the "customers" are colleagues, and the term digital employee experience is sometimes used for how people experience their technology. It includes ease, speed, trust, and whether they reached their goal.

**Satisfaction and related measures.** Customer satisfaction, described on Wikipedia, is usually asked as "how satisfied were you?" on a scale. The net promoter score, also described there, asks how likely a person is to recommend the service and is computed from the share of promoters minus detractors. Other measures ask about effort, such as how easy it was to get something done. Each has uses and criticisms: they are quick and comparable, and they are blunt and open to gaming and misreading.

**Transactional and relationship surveys.** A transactional survey asks about one interaction, such as a resolved ticket, soon after it. A relationship survey asks about the overall service, at intervals. Transactional surveys show specific problems; relationship surveys show the broader view. Use both, and keep them short.

**Survey design.** Wording affects answers. Wikipedia describes survey methodology and common problems: leading questions, which suggest an answer; acquiescence bias, a tendency to agree; and social-desirability bias, giving answers that seem acceptable. Use neutral wording, a clear scale, one idea per question, and an open comment box. Wikipedia describes Likert scales and questionnaires. Test the survey on a few people. See the survey-design skill in this guide.

**Response and bias.** Only some people answer, and they are not typical. Wikipedia describes the response rate and participation bias: people with strong feelings, or with time, respond more. A score from a 10 percent response may say little about the other 90 percent. Report the response rate, compare respondents with the population where you can, and do not treat the score as exact.

**Survey fatigue.** People asked too often stop answering or answer carelessly. Limit how often you ask, ask only what you will use, and show what changed because of the answers. Surveys that vanish into a void teach people not to bother.

**Free-text feedback.** Comments tell you why. Reading a sample is essential, and tools can help with volume. Wikipedia describes thematic analysis, the practice of identifying themes in qualitative data, and qualitative research more broadly. Counting themes, and quoting examples, makes comments usable.

**Sentiment analysis.** Software that classifies text as positive, negative, or neutral, or by emotion. Wikipedia describes sentiment analysis and its methods. It is useful for rough triage of large volumes of text. It struggles with sarcasm, mixed feelings, domain terms ("critical" may be a priority, not an emotion), and language and dialect differences. Check its labels against a sample read by people, and do not treat the result as the feeling of any individual. Wikipedia also describes emotion recognition, which raises serious reliability and ethical concerns, particularly when applied to faces or voices; take care and seek advice before using such methods.

**Topic discovery.** Natural language processing techniques, including topic models that Wikipedia describes, can group comments by subject. They help to find themes in thousands of comments, with human review to name and check the groups.

**Behavioural and usage signals.** What people do often differs from what they say. Abandoned forms, repeated searches, retries, and contacts after a self-service attempt show friction. Wikipedia describes usability testing, in which people attempt realistic tasks while observers note difficulties. A handful of observed sessions often finds problems that no survey reveals.

**Qualitative methods.** Interviews and focus groups, described on Wikipedia, give depth. A small number of conversations with real users can change priorities more than a large survey. Choose people who differ in role, skill, and location.

**Experience level agreements.** Agreements that set targets for experience measures, such as "at least 80 percent of users say the service helped them get their work done". They are best used as a shared aim and a conversation, with several measures, not as a single number tied to penalties, because experience scores are easily distorted. See Topic 3.7 — Service Level Management.

**Voice of the customer.** The practice of capturing and acting on what customers say. Wikipedia describes it. It brings together surveys, comments, support contacts, reviews, and conversations, and routes insights to those who can act.

**Employee wellbeing and workload.** Analytics can also address the experience of staff who deliver the service: workload, on-call burden, and morale. Wikipedia describes employee engagement and occupational burnout. Measure at team level, with consent and care, and act on what you find.

**Ethics, privacy, and consent.** Gathering and analysing feedback involves personal data and sometimes sensitive opinions. Wikipedia describes privacy, anonymity, and informed consent. Say what you collect and why, allow anonymity where it matters, aggregate before reporting, and do not identify individuals from their comments without good reason. Monitoring employees' behaviour or sentiment at work, which Wikipedia describes under employee monitoring, can damage trust and may be restricted by law; take legal advice. See Topic 5.6 — AI Governance, Risk, and Compliance.

**Closing the loop.** Tell people what you heard and what you changed. Follow up with those who raised a serious problem. Without a visible response, participation falls.

**How the lenses fit.** Experience analytics gives the human outcome that the other three lenses aim to improve. Agile practice runs small experiments and asks users whether they helped. AI helps with reading and grouping text, under review. Automation triggers surveys and routes feedback.

## Best practices

1. **Ask about outcomes, not only satisfaction.** Include a question such as "did you get what you needed?" and one about effort. Pair scores with a free-text "what got in the way?".
2. **Keep surveys short and timely.** Ask one to three questions soon after an interaction, and run a short relationship survey a few times a year. Do not ask people repeatedly about the same thing.
3. **Write neutral questions and test them.** Avoid leading wording, double questions, and jargon. Try the survey on a few people from different groups before launch.
4. **Report response rates and who answered.** Show how many responded, compare with the population where possible, and describe the limits. Avoid false precision.
5. **Read the comments.** Sample them every week, quote them in reports, and group them into themes. Use tools for scale, with human review.
6. **Check sentiment tools against people.** Have people label a sample, compare it with the tool, and note where it fails. Use the tool for triage, not for conclusions about individuals.
7. **Watch behaviour as well as words.** Look at abandonment, retries, and repeat contacts, and run a few usability sessions with real tasks. Compare what people do with what they say.
8. **Use XLAs as a shared aim.** Agree a small set of experience measures with customers, review them together, and avoid tying them to penalties or individual performance.
9. **Protect people.** Explain what you collect, aggregate results, avoid identifying individuals, and take advice before monitoring employees' sentiment. Never use experience data to rank individuals.
10. **Close the loop visibly.** Publish "you said, we did" summaries, and follow up on serious issues. Retire questions that do not lead to action.

## Questions to discuss with your team

**What do we know about how people experience our service that our technical measures do not show?**
List recent complaints or comments. Expect a mismatch with the dashboards. Follow up by choosing one aspect, such as time to get access, and adding an experience question about it.

**Who answers our surveys, and who never does?**
Compare respondents with the population. Expect that groups such as night staff or remote sites are missing. Follow up by reaching one missing group in another way, such as a short interview.

**What did we change in the last quarter because of what users told us, and do they know?**
Ask for examples. Expect few. Follow up by agreeing a regular "you said, we did" message.

**How accurate is our sentiment tool when a person reads a sample of the same comments?**
Test it. Expect errors on sarcasm and domain terms. Follow up by agreeing where the tool may be used and where it may not.

**Which of our experience measures could be pushed up without improving experience?**
Think of pressure on respondents, selective surveying, or closing tickets before asking. Follow up by agreeing a rule against influencing answers and a check of how surveys are sent.

**What would we collect about staff experience, and how would we make sure it is used to help and not to monitor?**
Discuss consent, aggregation, and purpose. Expect strong views. Follow up by agreeing a statement of use, and involving staff representatives and legal advice.

## In practice: a service management example

A national library network's IT team supports 6,000 staff in 300 branches. Technical measures show good performance: availability above 99.5 percent and 92 percent of tickets resolved within target. Yet an annual staff survey says that "IT support" is the lowest-rated service, and branch managers say IT does not understand their work.

The service manager begins with a short transactional survey, sent automatically when a ticket is resolved: two questions ("Did we resolve your problem?" and "How easy was it to get help?") and an optional comment. The response rate is 18 percent. Comparing respondents with the staff population, she finds that large branches are over-represented and small, remote branches barely appear. She adds a monthly phone call to five randomly chosen small branches, and runs three usability sessions in which staff try to request a new login and book a meeting-room display.

The numbers show that 84 percent say their problem was resolved, but only 55 percent say it was easy to get help. The comments, grouped by theme by two analysts, show that the most common complaint is having to explain the problem again to each person: 31 percent of comments. A sentiment tool, tested against 200 hand-labelled comments, labels about a quarter wrongly, including many that use "urgent" or "critical" as descriptive words, so the team uses it only to sort the comments for reading. The usability sessions find that the request form asks for an asset tag that most staff do not know.

The team changes the form, creates a visible history that follows the ticket between agents, and publishes a monthly note of what has changed. They agree an experience level target with branch managers: 75 percent of staff say getting help was easy, reviewed quarterly, with the comments and the response rate. The manager tells the team that scores will not be used for individual evaluation.

What changes: ease scores rise to 68 percent over two quarters, and "explaining again" falls to 15 percent of comments. What remains hard: response rates remain low in the smallest branches; some agents worry that scores will be used against them despite the statement; and a vendor has offered an emotion-detection tool for phone calls, which the manager declines until legal and staff representatives have reviewed it. She plans to extend the phone sampling.

## Four perspectives

### Product and delivery teams

Ask users about the outcomes of your features, observe a few real sessions, and instrument friction points such as abandonment. Share what you learn with the service team.

### Service and operations teams

Read the comments, tell customers what changed, and use experience data to see where the process frustrates people. Do not game scores, and do not ask people to rate you well.

### Leadership and governance

Ask for experience measures with response rates and comments. Fund qualitative work and follow-up. Do not use experience scores to rank or reward individuals. Seek advice on privacy and employee monitoring.

### Customers and users

You should be asked about what matters, be able to speak anonymously where appropriate, and hear what changed. Tell the provider where surveys miss your experience, and give examples in your comments.

## Agile, AI, automation, and analytics

### Agile

Run small experiments on the experience, such as changing a form, and ask a few users whether it helped. Involve users in design. Caution: constantly changing surveys destroys comparisons; keep a stable core and add questions sparingly.

### AI

AI can group comments, summarise themes, and draft "you said, we did" notes, with a person checking against the originals. Name an owner. Caution: AI sentiment and emotion detection can be wrong and unfair across groups and languages; test on a labelled sample and avoid using it on individuals. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate survey triggers, routing of serious comments to a person, and reminders to follow up. Caution: automated surveys sent only after good outcomes inflate scores; trigger them consistently. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Combine scores, response rates, themes, behaviour signals, and technical data. Caution: scores are noisy, influenced by who answers and how the question is asked; use trends, report uncertainty, and read the comments. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Only technical measures.** Green dashboards, unhappy users. Add experience measures and comments.
- **Survey bias ignored.** The loudest respond. Report response rates and reach missing groups.
- **Leading questions.** Answers are skewed. Use neutral wording and test.
- **Trusting sentiment scores.** Tools mislabel. Check against human reading and use for triage.
- **Scores as targets.** People pressure respondents. Use XLAs as a shared aim, with several measures.
- **Survey fatigue.** Response falls. Ask less, and show what changed.
- **Monitoring people.** Trust and legality suffer. Aggregate, ask consent, and take advice.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Collection | Annual survey | Transactional surveys | Short transactional and relationship surveys with comments | Response and bias checked, missing groups reached | Feedback from several channels integrated |
| Analysis | Scores only | Themes read by hand | Themes with samples, tools checked against people | Experience linked to behaviour and technical data | Experience insights drive planning across services |
| Use | Reported | Some actions | Actions tracked and "you said, we did" published | Experience targets reviewed with customers | Experience agreements shared across partners |
| Ethics | Unclear | Awareness | Purpose, anonymity, and aggregation rules | Practices reviewed with staff and advisers | Privacy built into collection and analytics |

## Checklist

- [ ] We measure outcome and effort, not only satisfaction.
- [ ] Surveys are short, neutral, and tested.
- [ ] We report response rates and who is missing.
- [ ] We read comments weekly and group them into themes.
- [ ] Sentiment tools are checked against human labels and used for triage only.
- [ ] We observe real use, not only ask.
- [ ] We use experience targets as shared aims, not individual measures.
- [ ] We publish what changed because of feedback.

## AI prompts

**Group comments into themes for review.**

```text
Here are free-text comments from users with personal details removed: [paste].
Group them into up to eight themes, give a count for each, and quote two short comments exactly for each theme. List comments that do not fit. Do not rate sentiment or guess who wrote anything.
List what you are unsure of.
```

**Review survey questions.**

```text
Here is a draft survey: [paste].
List questions that are leading, double-barreled, unclear, or likely to produce biased answers, quoting each, and suggest a neutral rewording. Do not add questions.
List what you are unsure of.
```

**Test a sentiment tool.**

```text
Here are 40 comments, each with a human label and the tool's label: [paste].
Compute the number and share of agreements and disagreements, list the comments with disagreements, and say what they have in common. Do not conclude anything about the tool beyond this sample.
List what you are unsure of.
```

## AI skills

- [survey-design](../../../../skills/survey-design/SKILL.md): use to design fair, useful surveys.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): use to gather and use feedback from users and colleagues.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): use to identify who to ask and who is missing.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): use to analyse response data with uncertainty.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): use to frame experience targets alongside technical ones.

## Key sources

- Don Dillman, Jolene Smyth, and Leah Christian, *Internet, Phone, Mail, and Mixed-Mode Surveys* (4th edition, 2014): a standard guide to survey design.
- Jakob Nielsen, usability research (nngroup.com): practical evidence on small-sample usability testing.
- The companion *Service Management Metrics* book: definitions and guardrails for experience measures.
- Wikipedia, "Customer satisfaction" and "Sentiment analysis": overviews of the main ideas.

## References

1. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
2. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
3. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
4. User experience — Wikipedia — https://en.wikipedia.org/wiki/User_experience
5. Survey methodology — Wikipedia — https://en.wikipedia.org/wiki/Survey_methodology
6. Participation bias — Wikipedia — https://en.wikipedia.org/wiki/Participation_bias
7. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
8. Thematic analysis — Wikipedia — https://en.wikipedia.org/wiki/Thematic_analysis
9. Usability testing — Wikipedia — https://en.wikipedia.org/wiki/Usability_testing
10. Voice of the customer — Wikipedia — https://en.wikipedia.org/wiki/Voice_of_the_customer
11. Employee monitoring — Wikipedia — https://en.wikipedia.org/wiki/Employee_monitoring
12. Privacy — Wikipedia — https://en.wikipedia.org/wiki/Privacy
