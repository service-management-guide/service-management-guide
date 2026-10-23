# Agile Manifesto and Principles

**The Agile Manifesto's four values and twelve principles were written in 2001 for software teams, and they carry over to running live services when read as a call for continuous stakeholder involvement, continuous improvement, and continuous delivery of working change rather than as a recipe of meetings.**

## Why this matters

Agile is one of the most used and most misused words in technology work. Some people use it for a set of ceremonies, others for speed, and others for an excuse to skip planning and documentation. In service management the confusion costs more, because service teams are often told they must become "agile" without anyone saying what that means for an on-call rota, an incident, or a service level agreement.

The Manifesto is short, and rereading it is the cheapest way to cut through the confusion. Its values and principles say nothing about sprints, daily meetings, or particular boards. They talk about people, working results, collaboration with customers, and responding to change. That makes them a useful test for any practice a service team adopts: does this help us involve our stakeholders, learn, and deliver change safely and continuously?

This topic restates the values and principles for service work, notes what the Manifesto does not say, and links them to the practices in the rest of Part 2. The guiding principles of ITIL 4 map closely to these ideas (see Topic 1.5 — ITIL Guiding Principles).

## Core concepts

**Origin.** In February 2001, seventeen software practitioners met in Utah and wrote the "Manifesto for Agile Software Development". It was a statement of shared values from people who used different methods, among them extreme programming, Scrum, and others. Wikipedia's article on agile software development gives the history and the text.

**Four values.** The Manifesto says that while there is value in the items on the right, the items on the left are valued more:

- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

It does not say the right-hand items are worthless. It says which way to lean when they conflict.

**Twelve principles.** The Manifesto's principles, paraphrased here, say: satisfy the customer through early and continuous delivery of valuable software; welcome changing requirements, even late; deliver working software frequently, with a preference for shorter timescales; have business people and developers work together daily; build projects around motivated individuals, and trust them; favour face-to-face conversation; treat working software as the primary measure of progress; keep a sustainable pace; give continuous attention to technical excellence and good design; value simplicity, the art of maximizing the amount of work not done; let self-organizing teams produce the best designs; and reflect regularly on how to become more effective, then adjust.

**Restated for live service work.** For a service team, "working software" becomes a working service: a service that does what customers need, today. "Customers" includes users, sponsors, and the people who rely on the service downstream. "Delivery" includes releasing a change, and also handling a request or fixing a fault. "Documentation" still matters, for runbooks and knowledge, but in the amount that helps the next person. "Contract negotiation" appears in service level agreements and supplier contracts: the value says to keep the conversation with the customer going alongside the contract.

**What the Manifesto emphasizes.** Read through a service lens, the emphasis falls on continuous stakeholder involvement (customers and delivery people working together), continuous improvement (regular reflection and adjustment), ongoing evolution of the service, a sustainable pace for the people who run it, motivated people trusted to do the work, and continuous delivery of working change. See Topic 2.2 — Continuous Delivery.

**What it does not say.** It does not require sprints, Scrum, Kanban, story points, stand-ups, or any particular tool. These are specific methods, some of which are described in this guide where relevant. If your team chooses to use Scrum, sprints, or Kanban, they can serve the values; adopting them does not by itself make a team agile. Treating the methods as the substance of agile is a common mistake, sometimes called cargo cult practice.

**What it does not say about operations.** The Manifesto was written about building software. It is silent about on-call, incident handling, and service levels. Translating it to those is a judgement, and this guide shows one reading. Other readings are possible, and you should test them against your own evidence.

**Agility versus control.** A common claim is that agile and ITIL are opposed. The Manifesto does not contradict control. A change that is small, tested, and reversible can be safer than a large one, which is itself a form of control. The tension is real where controls demand heavy, manual, infrequent approval, and the answer is to move the control into the delivery pipeline, not to drop it (see Topic 3.4 — Change Enablement).

**How the lenses fit.** Agile is the first of the four lenses. AI assistants can draft, review, and summarize, but the "individuals and interactions" value reminds us that the conversation with the customer stays human. Automation supports "working software" frequently delivered. Analytics supports "reflect and adjust" by showing evidence for the next change.

## Best practices

1. **Test practices against the values.** For any ceremony, tool, or document, ask which value it serves. If the answer is none, stop doing it or change it. If your team chooses to use sprints, Scrum, or Kanban, apply the same test to each element.
2. **Involve stakeholders continuously.** Put a customer, user, or their representative in regular contact with the team, not only at the start and end. Short, frequent conversations about the real service beat long reviews of documents.
3. **Deliver change in small pieces.** Prefer a change that can be released and checked in days over one that waits for a large batch. Small changes are easier to understand, test, and reverse.
4. **Keep working service as the measure of progress.** Count what is running and helping customers, not the number of tasks closed or documents written. See the *Service Management Metrics* book for measures and their gaming risks.
5. **Write documentation that helps the next person.** Keep runbooks, diagrams, and decisions short and current. Cut anything nobody reads, and add what someone needed and could not find.
6. **Trust motivated people and give them what they need.** Set clear goals and constraints, then let the team decide how. Remove obstacles rather than adding checkpoints.
7. **Protect a sustainable pace.** Plan on-call and improvement work so that people can keep going for years. Heroics are a warning sign, not a strength.
8. **Reflect regularly.** Schedule a short, regular review of how the team works, such as after incidents and releases, and act on at least one finding each time. If your team chooses to use retrospectives, treat their output as a backlog.
9. **Welcome change, and make it cheap.** Invest in tests, automation, and clear design so that a late change is not a crisis. Ask what would make the next change easier.
10. **Keep it simple.** Look for the smallest solution that meets the need, and remove work that does not add value.

## Questions to discuss with your team

**Which of the four values do we honour most in practice, and which do we neglect?**
Teams often say "individuals and interactions" while running on tickets and tools, or "working software" while documenting heavily. Ask for recent evidence on each value. Answers vary by role, so hear from several. Follow up by choosing one value to strengthen this quarter.

**What do our customers see of our work between releases or between incidents?**
This tests continuous involvement. Expect answers such as "nothing" or "a monthly report". Ask what a customer would want to see weekly. Follow up by arranging one regular, short conversation with real users.

**Which of our practices do we keep because "agile says so", and what value does each serve?**
Many teams run rituals without knowing why. Ask what would change if each stopped. Listen for rituals that fill the calendar and produce nothing. Follow up by trialing one change with a review date.

**How small can our smallest releasable change be, and what stops us from making it?**
This explores batch size. Common blockers are manual testing, approval steps, and shared environments. Ask for a specific example. Follow up by choosing one blocker to remove.

**Where does our pace feel unsustainable, and what is the cost?**
On-call fatigue, constant interruptions, and weekend releases show up here. Treat answers as data about the system. Follow up by agreeing one change to reduce load, and who will check that it worked.

**Where do our contracts and service level agreements prevent collaboration, and where do we use them as an excuse?**
Both happen. Some contracts really limit what can change; others are cited to avoid a conversation. Ask for the clause. Follow up by planning a conversation with the customer or supplier about one limiting term.

## In practice: a service management example

A regional bus operator's digital team runs the timetable app and the real-time arrivals feed. Management announces a move to "agile" and orders sprints, daily meetings, and a new tool. Within a month the team is busy with ceremonies, incident handling slips, and the operations manager complains that nothing has improved.

The team lead asks a different question: which of the Manifesto's values are we missing? She finds that the team has no regular contact with the control-room staff who use the arrivals feed, release changes only once a quarter, and have a large backlog of requests nobody can order. She keeps the daily meeting, which the team finds useful, and drops two ceremonies that duplicate it. She adds a weekly 20-minute call with two control-room staff, starts releasing small changes each week with a short automated test suite, and asks the team to pick one improvement from each incident review.

What changes: control-room staff report problems earlier, and a recurring feed delay is fixed in a week instead of waiting for the next quarterly release. What remains hard: the weekly release depends on a supplier who controls the vehicle data format and will not change its schedule, the team's on-call load is still heavy, and some leaders still ask for a plan with fixed dates. The team lead keeps these on the table at the monthly review.

## Four perspectives

### Product and delivery teams

Use the values to decide what to keep and what to cut. Work with real users often, release small changes, and treat running service as part of your product. Keep documentation short and current.

### Service and operations teams

Apply the values to how you handle incidents, requests, and changes: talk to the people affected, improve after each incident, and protect a sustainable pace. Offer to join planning early, so that operational needs shape the work.

### Leadership and governance

Do not mandate ceremonies. Ask for stakeholder involvement, small releases, and evidence of improvement. Set direction and constraints, and trust teams to choose how. Watch for pace: sustained heroics are a risk.

### Customers and users

You are part of the team's work. Give regular, honest feedback, and expect to see changes arrive in small pieces. Tell the team what matters most, and tell them when something they delivered did not help.

## Agile, AI, automation, and analytics

### Agile

This topic is the foundation: continuous stakeholder involvement, continuous improvement, and continuous delivery of working change. Caution: the methods are not the substance; check any practice against the values.

### AI

AI assistants can draft user stories, summarize feedback, and suggest tests, with a person reviewing every output. The value of "individuals and interactions" means that conversation with customers stays human. Caution: AI summaries of customer feedback can flatten what people said; read a sample of the originals. See Topic 5.1 — AI in Service Management.

### Automation

Automate testing, building, and deploying so that small, frequent change is cheap and safe, and keep logs and rollback. Caution: automating a pipeline without the team's understanding of what it checks produces false confidence; review what each stage verifies. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Use data to reflect and adjust: time from idea to release, change failure, time to restore, and customer feedback. Caution: any of these becomes a target when used to rate teams, and teams will adjust the number rather than the work; use them to learn. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Ceremonies without values.** The team holds every meeting and changes nothing. Ask which value each practice serves.
- **Agile as speed only.** Pressure rises, quality falls, and people burn out. Protect a sustainable pace and technical quality.
- **No documentation at all.** Knowledge lives in heads, and on-call people struggle. Keep short runbooks and decision notes.
- **Stakeholders appear only at review.** Surprises arrive late. Involve a user every week.
- **Using the contract as a shield.** Nobody talks to the customer. Keep the conversation going and change the contract when needed.
- **Mandating methods from above.** Teams comply in form. Give goals and constraints and let teams choose.
- **Reading the Manifesto as anti-control.** Teams drop useful controls. Build the control into the pipeline instead.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Stakeholder involvement | At start and end only | Regular reviews | Weekly contact with real users | Feedback measured and acted on | Customers and suppliers involved across teams |
| Delivery of change | Large, rare releases | Some smaller releases | Small, frequent, tested releases | Change flow measured and improved | Change delivered continuously across services |
| Reflection and improvement | After crises | Occasional reviews | Regular reviews with a backlog | Results of improvements checked | Learning shared across teams |
| Pace and people | Heroics | Awareness of overload | Sustainable on-call and workload | Load measured and balanced | Workload planned across teams |

## Checklist

- [ ] We can state the four values and twelve principles, and tell which practices serve which.
- [ ] A real user or customer representative talks to the team every week.
- [ ] Our smallest releasable change ships in days, not months.
- [ ] We count working service, not tasks, as progress.
- [ ] Documentation is short, current, and read.
- [ ] We hold a regular review and act on at least one finding.
- [ ] On-call and workload are sustainable.
- [ ] Controls are built into the pipeline where possible.

## AI prompts

**Test a practice against the values.**

```text
Our team practice: [describe the practice and how often it happens].
For each of the four Agile Manifesto values, say whether the practice appears to serve it, strain it, or is unrelated, and give one question to check with the team. Do not recommend dropping the practice.
List what you are unsure of.
```

**Turn feedback into a short list for the team.**

```text
Below is feedback from users of [service]: [paste feedback, with personal details removed].
Group it into up to six themes, give a count for each, and quote one short example for each theme exactly. Do not infer what users meant beyond the words.
List what you are unsure of.
```

**Draft a one-page note of working agreements.**

```text
Our team context: [team size, services, on-call pattern]. Our values we want to honour: [list].
Draft up to eight working agreements as short sentences, each tied to one Agile Manifesto value or principle. Avoid naming specific methods or tools unless I listed them.
List what you are unsure of.
```

## AI skills

- [agile-principles](../../../../skills/agile-principles/SKILL.md): use to apply the principles to a team's practice.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): use to run a reflection that produces improvement items.
- [agile-charter](../../../../skills/agile-charter/SKILL.md): use to agree goals and working agreements with stakeholders.

## Key sources

- The Manifesto for Agile Software Development and its twelve principles (agilemanifesto.org): the primary text; read it directly.
- Wikipedia, "Agile software development": history, the text of the values, and the criticism.
- Wikipedia, "Extreme programming": one of the methods that shaped the Manifesto.
- Wikipedia, "Scrum (project management)": a framework often called agile, described as a framework and not the substance of agile.

## References

1. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
2. Extreme programming — Wikipedia — https://en.wikipedia.org/wiki/Extreme_programming
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
5. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
6. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
7. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
10. Manifesto for Agile Software Development — Beck et al. — https://agilemanifesto.org/
