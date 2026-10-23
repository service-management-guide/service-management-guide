# Continual Improvement

**Continual improvement is the recurring cycle of choosing a small change, trying it, checking whether it helped, and keeping or reversing it; it works when improvement has a visible backlog, protected capacity, an owner, and evidence behind every decision.**

## Why this matters

Every team wants to improve, and most do not. The reasons are rarely a lack of ideas. Improvement ideas are plentiful and live in people's heads, in retrospective notes, and in incident reviews. They fail because nobody owns them, nothing protects time for them, and urgent work always wins. After a few months, people stop suggesting, because suggesting has no effect.

Continual improvement is the practice that fixes this. It makes improvement a regular, visible part of how a team works. Ideas go to a shared list. Someone orders the list. A small amount of capacity is set aside each cycle for the top items. Each change is tried as an experiment, checked, and either kept or dropped. Over a year, many small changes add up to substantial gains, and the team learns what works in its own context.

ITIL 4 places continual improvement at the heart of the service value system, as both a component and a practice (see Topic 1.4 — The Service Value System). Lean thinking, Kaizen, the Deming cycle, and agile retrospectives all describe versions of the same cycle (see Topic 2.4 — Lean and Kaizen). This topic describes the cycle, the improvement backlog, and the habits that keep it alive, and it shows how AI, automation, and analytics help and where they mislead. It connects to problem management (Topic 3.3 — Problem Management), which supplies many improvement ideas, and to measurement (Topic 7.3 — Measurement and Reporting).

## Core concepts

**Continual versus continuous.** ITIL uses "continual improvement", meaning improvement that recurs at intervals, in cycles. "Continuous improvement" is often used in lean and quality circles with a similar meaning. The words are used loosely, and this guide treats them as the same idea. Wikipedia describes the continual improvement process.

**The cycle.** The best-known form is plan–do–check–act (PDCA), also called the Deming cycle after W. Edwards Deming, who popularized it in quality management. You plan a change and what you expect from it, do it on a small scale, check the results, and act: adopt it, adjust it, or drop it. Wikipedia describes PDCA and Deming's role. The cycle is repeated.

**The ITIL 4 continual improvement model.** ITIL 4 offers a seven-step model: what is the vision; where are we now; where do we want to be; how do we get there; take action; did we get there; how do we keep the momentum going. It is a prompt for thinking, not a procedure to follow slavishly. Check the owner's current guidance, including for ITIL 5, before quoting it as current (see Topic 1.3 — ITIL 5).

**Improvement backlog.** A single, ordered list of improvement ideas, each with an owner, an expected benefit, and a status. Wikipedia describes backlogs. Sources include incident reviews, retrospectives, user feedback, audits, and staff suggestions. Ordering is by expected value and effort, with room for quick wins.

**Protected capacity.** A share of time reserved for improvement, such as 10 or 20 percent, visible in plans. Without it, improvement competes with urgent work and loses. A team that cannot protect any capacity should say so openly and ask what leadership would stop doing.

**Experiments.** Treat each change as a test with a hypothesis: "If we do X, we expect Y, measured by Z within N weeks." Wikipedia describes experiment and hypothesis. A small experiment limits the risk of a bad change and teaches something either way.

**Measures and baselines.** To know whether a change helped you need to know where you started. Record the baseline measure before the change, and check it afterwards. Measure what matters to users and the team, and say how each measure could mislead. See the *Service Management Metrics* book.

**Retrospectives.** Regular meetings in which a team looks back at how it worked and chooses what to change. Wikipedia describes retrospectives. If your team chooses to use them, make sure outputs go to the backlog with owners. A retrospective that produces a list nobody acts on is worse than none.

**Root cause and learning.** Incident and problem reviews produce improvement ideas. See Topic 3.3 — Problem Management. Audits, customer feedback, and benchmarking against others provide more. Wikipedia describes benchmarking.

**Quality management traditions.** Total quality management, Six Sigma with its DMAIC cycle (define, measure, analyze, improve, control), and lean all contribute methods. Wikipedia describes each. Use the lightest method that fits: a small team's tweak does not need a formal Six Sigma project.

**Ownership.** Each improvement has an owner who is accountable for trying it and reporting the result. A person or small group owns the backlog and its ordering. In ITIL 4, continual improvement is everyone's job, with a coordinator.

**Celebrating and sharing.** Share what was tried, including failures. Recognize improvements that people made, and tell the people who suggested them what happened to their idea. This keeps ideas coming.

**Improvement at different levels.** Improvement happens in a team's daily work, in a service, in a practice, and across the organization. Align them: team-level changes should not undermine service-level goals. See Topic 1.4 — The Service Value System.

**How the lenses fit.** Continual improvement is the agile lens in its purest form: small steps, feedback, and learning. AI can find candidate improvements in data and draft experiments, under review. Automation takes over the repeated tasks that improvement identifies. Analytics measures effect.

## Best practices

1. **Keep one visible improvement backlog.** Collect ideas from every source in one place. Make it open to the team and to stakeholders, and keep it short enough to be real.
2. **Name an owner for the backlog and for each item.** The backlog owner orders items and keeps them moving; each item has a person who will try it.
3. **Protect capacity.** Reserve a share of each cycle for improvement and show it in the plan. Report when it is cut, and why.
4. **Choose small, quick changes.** Prefer items that can be tried within days or a couple of weeks. Break large ideas into steps that can be tested separately.
5. **State the expectation before you start.** Write what you expect to happen, how you will measure it, and when you will check. Record the baseline.
6. **Check and decide.** At the review date, look at the result honestly. Keep, adjust, or reverse the change, and write down why.
7. **Close the loop with people.** Tell those who suggested an item what happened. Thank them and share what you learned.
8. **Use data and users.** Look at measures and ask the people affected. Be alert to measures that are easy to move without helping anyone.
9. **Learn from failures and incidents.** Feed reviews into the backlog, with actions that have owners and dates. See Topic 3.3 — Problem Management.
10. **Review the improvement system itself.** Occasionally ask whether the process helps: how many items are completed, how long they take, and whether people still suggest ideas. Change it if it does not.

## Questions to discuss with your team

**What improvement ideas did we have last quarter, and what happened to each?**
Collect them. Expect many lost ideas. Ask what stopped them. Follow up by creating one list and choosing the first three items.

**How much of our time is really protected for improvement, and who defends it?**
Ask for the numbers. Expect little or none. Ask what we would stop to create the space. Follow up by agreeing a small slice, such as half a day a week, and who will protect it.

**What was the last change we made that we later reversed, and what did we learn?**
This normalizes failure. Expect stories about changes that did not work. Look for learning. Follow up by agreeing that reversal is a normal outcome of an experiment.

**How do we know that our last improvement actually helped?**
Ask what was measured before and after. Expect "it felt better". Follow up by choosing one current improvement and agreeing a baseline and review date.

**Where do we spend improvement effort that no user or teammate would notice?**
This checks the value of effort. Ask who benefits from each item. Follow up by choosing one item to drop.

**How could AI help us find and test improvements, and how will we check that it is right?**
AI can find patterns in tickets and suggest experiments. It can also suggest what only looks promising. Ask who owns the use and how suggestions are tested. Follow up by trying AI-suggested ideas through the same experiment process as any other.

## In practice: a service management example

A county council's housing repairs team handles around 1,200 repair requests a month. Staff routinely complain about wasted effort: tenants calling repeatedly for updates, contractors turning up without access, and forms bouncing between three systems. The team has held retrospectives for a year and has a large file of notes, but little has changed.

The team leader asks the team to pick one improvement area for a trial of six weeks. They choose repeat calls from tenants asking about repair status, which makes up about a fifth of calls. She creates an improvement backlog, starting with 14 items from the retrospective notes, and asks the team to score each by expected value and effort. They take the top three. The first is to send a text message to the tenant when an appointment is booked and the day before it. The second is to add the contractor's name and phone number to the message. The third is to record a baseline of repeat calls per week.

For each item the team writes an expectation: "Texts will cut repeat status calls by a quarter within four weeks." The leader reserves two afternoons a month from the planned work, with the head of service agreeing to defer a low-priority report. After six weeks, repeat calls fall by about a fifth, not a quarter. The contractor name item has no measurable effect and is dropped. A new idea emerges from the calls: tenants want to rebook without phoning. It enters the backlog.

What changes: the team has seen an improvement come from its own ideas, and people suggest more. What remains hard: the two afternoons were cut twice when emergency repairs surged; the text messages depend on contractors updating records on time, which they do not always do; and the baseline for repeat calls comes from a call log that the team knows is imperfect. The leader reports the cuts to the head of service and keeps the numbers visible.

## Four perspectives

### Product and delivery teams

Keep an improvement list for the product and its pipeline, and set aside capacity for it. Treat incidents, support questions, and delivery delays as sources of ideas, and measure the effect of changes.

### Service and operations teams

Capture what you see: repeat contacts, workarounds, and slow steps. Try small changes and share results. Bring user feedback into the backlog.

### Leadership and governance

Protect improvement capacity and ask what has changed because of it. Look for evidence of effect, and celebrate learning as well as success. Do not reward volume of ideas or changes.

### Customers and users

You are a source of improvements. Tell the provider what does not work and what would help, and expect to hear what happened to your suggestion.

## Agile, AI, automation, and analytics

### Agile

Continual improvement is the heart of agile practice: reflect, adjust, and deliver small changes with stakeholders. Caution: if your team chooses to use retrospectives, make sure their output lands in the backlog and gets done; if it does not, change the method.

### AI

AI can find patterns in tickets and feedback, propose candidate experiments, and draft summaries of results, with an owner and human judgment. Caution: AI may propose plausible improvements that data do not support; test them like any other idea. See Topic 5.1 — AI in Service Management.

### Automation

Automate the repeated tasks that improvement work identifies, and the collection of baseline and result data for experiments. Caution: automation can lock in a process before it has been improved; simplify first. See Topic 6.1 — Automation Strategy.

### Analytics

Use baselines, trends, and before-and-after comparisons, with attention to noise and to other changes that happened at the same time. Caution: a short before-and-after comparison can mislead, and measures can be gamed once they become targets; combine data with user feedback. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Ideas with no owner.** The list grows and nothing happens. Assign owners and order the list.
- **No protected capacity.** Urgent work crowds out improvement. Reserve time and defend it.
- **Large improvement programs.** Change is slow and benefits unclear. Prefer small experiments.
- **No baseline.** Nobody knows whether the change helped. Record before and check after.
- **Retrospectives without action.** People stop attending. Send outputs to the backlog and do them.
- **Success theater.** Only wins are reported. Share failures and learning.
- **Measures as targets.** Numbers move and work does not improve. Pair measures with feedback.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Backlog | Ideas in heads | A list exists | One owned, ordered backlog with visible status | Backlog quality and flow reviewed | Backlogs linked across teams and services |
| Capacity | None | Occasional time | Protected share of capacity | Capacity use reviewed against results | Capacity planned across the portfolio |
| Experiments | Changes made without checks | Some baselines | Expectation, measure, and review date for each change | Results analyzed and shared | Experiments coordinated across teams |
| Learning | Lost | Notes | Findings shared and used in the next cycle | Learning measured | Learning drives strategy and partnerships |

## Checklist

- [ ] We have one visible improvement backlog with owners.
- [ ] A share of capacity is protected for improvement.
- [ ] Each change has an expectation, a baseline, a measure, and a review date.
- [ ] We keep, adjust, or reverse changes based on evidence.
- [ ] People who suggest ideas hear what happened to them.
- [ ] Incident and problem reviews feed the backlog.
- [ ] We share failures and learning.
- [ ] We review the improvement process itself.

## AI prompts

**Order a backlog for discussion.**

```text
Here is our improvement backlog with a short description of each item, the people affected, and a rough effort estimate: [paste].
Propose an order using expected value and effort as stated, show your reasoning for each item, and list items where the description is too vague to judge. Do not invent benefits or effort.
List what you are unsure of.
```

**Turn an idea into an experiment.**

```text
Our idea: [describe]. Our current baseline: [describe or write "unknown"]. The people affected: [list].
Write an experiment plan with a hypothesis, a measure, how the measure could mislead, how long to run it, who to ask for feedback, and what would make us reverse it. Do not predict the result.
List what you are unsure of.
```

**Summarize experiment results.**

```text
Here is the data before and after our change: [paste]. Here is feedback from the people affected: [paste].
Summarize what changed, what did not, other things that changed at the same time, and what we cannot conclude. Do not state that the change caused the result unless the data support it.
List what you are unsure of.
```

## AI skills

- [kaizen](../../../../skills/kaizen/SKILL.md): use to plan and run small improvement experiments.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): use to run reflections that produce actions.
- [dmaic](../../../../skills/dmaic/SKILL.md): use for larger, data-heavy improvement projects.
- [six-sigma](../../../../skills/six-sigma/SKILL.md): use when variation and quality are the main problem.
- [futurespective](../../../../skills/futurespective/SKILL.md): use to look ahead as well as back.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of continual improvement and its model.
- W. Edwards Deming, *Out of the Crisis* (1982): foundations of quality management and the improvement cycle.
- Wikipedia, "Continual improvement process" and "PDCA": overviews of the cycle.
- Wikipedia, "Kaizen": the Japanese tradition of small, continuous change.

## References

1. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
2. PDCA — Wikipedia — https://en.wikipedia.org/wiki/PDCA
3. W. Edwards Deming — Wikipedia — https://en.wikipedia.org/wiki/W._Edwards_Deming
4. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
5. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
6. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
7. Experiment — Wikipedia — https://en.wikipedia.org/wiki/Experiment
8. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
9. Six Sigma — Wikipedia — https://en.wikipedia.org/wiki/Six_Sigma
10. Total quality management — Wikipedia — https://en.wikipedia.org/wiki/Total_quality_management
11. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
