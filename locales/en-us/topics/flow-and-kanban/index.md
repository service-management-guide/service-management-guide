# Flow and Kanban

**Flow is how smoothly work moves from request to done, and visualizing work, limiting work in progress, and measuring how long work takes are the practices that improve it; they suit interrupt-driven service teams well, and Kanban is one named way to apply them.**

## Why this matters

Service teams are always busy. Requests, incidents, changes, and improvements arrive without warning, and people switch between them all day. The team feels productive, but customers wait a long time for anything to finish, and no one can say why.

Flow thinking explains the gap. Work that is started but not finished sits in queues, and in most teams the time spent waiting is much longer than the time spent working. Adding more people or starting more items does not help, and often makes it worse, because more work in progress means longer queues. The remedy is to see the work, limit how much is in progress at once, and measure how long items take from request to done.

Those ideas come from lean manufacturing, and the best known tool is the kanban board. Many agile teams use Kanban or a board inspired by it. This guide treats Kanban as one choice among several. If your team chooses to use Kanban, the ideas here will help; if not, the principles of visibility, limits, and flow measurement still apply.

## Core concepts

**Flow.** The movement of work through a system. A system with good flow delivers items steadily and predictably, with short waits. Poor flow shows up as long and variable delivery times, pile-ups before certain steps, and frequent expediting.

**Work in progress (WIP).** The number of items started but not finished. Wikipedia's article on work in process describes the idea in manufacturing. In knowledge and service work, WIP is often invisible, because items live in inboxes, chat threads, and people's heads. Making it visible is the first step.

**Little's law.** For a stable system, the average time an item spends in the system equals the average number of items in the system divided by the average rate at which they leave. If your team finishes five items a week and has 25 in progress, the average item takes about five weeks. To shorten the time without working faster, reduce the number in progress.

**Lead time and cycle time.** Lead time is how long a customer waits from request to delivery. Cycle time is how long an item takes once work starts. Definitions vary between teams, so write yours down. Throughput is the number of items finished in a period.

**The kanban method.** Kanban means "signboard" or "card" in Japanese. The Toyota Production System, developed with Taiichi Ohno, used cards to signal when more parts were needed, so that production was pulled by demand. David J. Anderson adapted these ideas for knowledge work in the 2000s as the Kanban method, which Wikipedia describes. Its core practices include visualizing work, limiting WIP, managing flow, making policies explicit, implementing feedback loops, and improving collaboratively.

**The board.** A kanban board shows work items as cards in columns that represent steps, such as "to do", "in progress", "review", and "done". Boards can be physical or digital. A board does not define a process; it shows the one you have.

**WIP limits.** A cap on the number of items allowed in a step or on the board. When the limit is reached, the team does not start new work; it helps finish something. This feels slow at first and makes delivery faster and steadier.

**Classes of service.** Not every item should wait in the same queue. A team might treat urgent items such as major incidents as an "expedite" class with a strict limit, fixed-date items as another class, and ordinary items as standard. Classes make trade-offs explicit and prevent every item from being declared urgent.

**Bottlenecks.** A step that limits the throughput of the system. The theory of constraints, developed by Eliyahu Goldratt, advises finding the bottleneck, making sure it is never idle, and improving it, because speeding up anything else does not help. A WIP limit often reveals the bottleneck as the column where work piles up.

**Cumulative flow diagram.** A chart that shows the number of items in each state over time. Widening bands reveal queues building up. It is a quick way to see whether flow is stable.

**Fit for service work.** Service teams handle a stream of different kinds of work with unpredictable arrival, which suits flow methods better than fixed planning cycles. If your team chooses to use sprints, flow measures still help to see what happens within them.

**How the lenses fit.** Agile practice asks for continuous delivery and improvement; flow measures show whether that is happening. AI can summarize the board or suggest triage categories, under review. Automation can update cards and enforce limits. Analytics provides the measures, with the usual risk that they become targets.

## Best practices

1. **Visualize all the work.** Put every kind of work on the board: incidents, requests, changes, improvements, and unplanned interruptions. A board that shows only "project" work hides the load.
2. **Define the columns from the real process.** Create columns that match how work actually moves, including waiting states such as "waiting for customer". Waiting states are where the delay hides.
3. **Set WIP limits and respect them.** Start with a limit slightly below the current number, and adjust after observing. When a column is full, help move items forward before starting something new.
4. **Make policies explicit.** Write down on or beside the board what "ready" and "done" mean, how items are prioritized, and who may expedite. Unwritten rules create arguments.
5. **Use classes of service deliberately.** Define a small number of classes, with their own limits and expected times. Review the expedite class regularly: if it is always full, the system is overloaded or priorities are unclear.
6. **Measure lead time, cycle time, and throughput.** Report them as distributions, such as "85 percent of items finish within 9 days", not only averages. Distributions show the risk that customers actually face.
7. **Look at the oldest items.** Review items that have been in progress longest at a regular meeting. Old items usually signal a blocked dependency or an unclear owner.
8. **Find and improve the bottleneck.** When work piles up in one place, ask what is limiting it, and treat that as the priority improvement.
9. **Review the board together.** A short, regular conversation at the board, standing or not, gives the team a shared view. Focus on blocked and aging items, not on reporting.
10. **Evolve the board.** Change columns, limits, and policies as you learn. If your team chooses to use Kanban, treat it as a starting point you adapt.

## Questions to discuss with your team

**How much work do we have in progress right now, and how do we know?**
Teams are often surprised by the number once they count. Ask each person to list what they are working on, including interruptions. Expect a long list and some items nobody remembers. Follow up by agreeing a first limit, even if it is rough.

**Where does work wait longest, and who is it waiting for?**
Waiting is the main source of delay. Typical answers are approvals, a specialist, the customer, or a supplier. Use a real example with dates. Follow up by choosing one wait and asking who could shorten it.

**Which kinds of work should never wait in the ordinary queue?**
This introduces classes of service. Major incidents and legal deadlines are common answers, and people may add their own favorites. Press for criteria. Follow up by agreeing a short list and a limit on expedited work.

**What happens when the board is full and a new request arrives?**
This tests discipline. Teams often start the new item anyway. Ask what the policy should be and who decides. Follow up by agreeing a rule for each type of request.

**Which measure would tell us that flow improved, and how could it be misread?**
Choose a measure, such as the time within which 85 percent of items finish, and discuss how it could be gamed, for example by splitting items or closing and reopening them. Follow up by agreeing how to check the measure against reality.

**Where could automation or AI help the flow without hiding problems?**
Automatic card updates and suggested categories can save time. They can also mask a stalled item as "in progress". Ask who owns each automated rule and how errors are found. Follow up by choosing one low-risk use and a review date.

## In practice: a service management example

A hospital's clinical systems support team handles around 100 requests a week: account changes, report requests, minor fixes, and urgent faults. The team of seven uses an email inbox and a ticket tool, and clinicians complain that requests "disappear".

The team lead builds a physical board in the team room with a card for every open item, about 70 in all. Counting reveals that each person has an average of ten items in progress. The lead adds columns for "waiting for clinician" and "waiting for supplier", which hold 25 of the 70 items. The team sets a limit of four in progress per person and two expedited items at a time. They agree policies: urgent faults that affect patient care go to the expedite lane and are worked first; everything else is first in, first out.

After two months, the median time to finish a request drops from 12 to 7 working days, and the oldest open item is 20 days old instead of 70. The "waiting for clinician" column grows, and the team realizes that many requests lack information. It adds a short form that asks the commonly missing questions.

What changes: clinicians can see where a request is, and the team spends less time answering "where is it?" emails. What remains hard: items waiting for the supplier still take weeks and the team cannot control them; the expedite lane is sometimes used for requests that are merely important to a senior person; and the digital ticket tool and the physical board diverge when people forget to update one. The team reviews the policies monthly and plans to move the board into the tool.

## Four perspectives

### Product and delivery teams

Use the board to see all work, including operational interruptions, and limit work in progress so that features and fixes finish. Share flow measures with operations to find where changes wait.

### Service and operations teams

You are the natural users of flow methods. Make the whole stream visible, agree classes of service, and use limits to keep interruptions from swamping the planned work. Bring evidence of delays to the people who can remove them.

### Leadership and governance

Ask for flow measures as distributions and look at the oldest items. Avoid pushing more work into a full system. Support the teams in changing policies rather than demanding more output.

### Customers and users

You should be able to see where your request is, how long such requests usually take, and what the team is waiting for. Tell the team when something is urgent and why, because a clear reason helps them decide.

## Agile, AI, automation, and analytics

### Agile

Flow supports continuous delivery and improvement by exposing delays and encouraging small, finished items. Caution: a board is not an improvement system by itself; use it to prompt regular review with stakeholders.

### AI

AI can summarize the board, suggest categories for new items, and flag aging or blocked items, with a person reviewing and an owner for each rule. Caution: an AI classifier that guesses wrongly sends work to the wrong queue; track the rate of corrections. See Topic 5.1 — AI in Service Management.

### Automation

Automate card creation from the ticket tool, update states from events, and warn when WIP limits are exceeded. Keep a log. Caution: automatic state changes can make flow look better than it is; sample real items to check. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Use lead time distributions, throughput, aging of work in progress, and cumulative flow diagrams. Caution: any of these can be gamed by splitting, merging, or re-labeling items, and comparing teams ignores differences in the work; use them to understand your own system. See Topic 7.6 — Process and Value Stream Analytics and the *Service Management Metrics* book.

## Common failure modes

- **A board with no limits.** Cards pile up and nothing changes. Set a limit and honor it.
- **Only planned work on the board.** Interruptions are invisible, and the load is understated. Show all types of work.
- **Everything is expedited.** The fast lane clogs. Limit it and review each use.
- **Averages only.** The average hides long delays. Report distributions and the oldest items.
- **Gaming the measures.** Items are split or closed early. Check measures against real items.
- **Treating Kanban as the goal.** The team copies a board and ignores flow. Look at the delivery times and the waits.
- **Optimizing a non-bottleneck.** Effort goes to the wrong step. Find where work piles up.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Visibility | Work in inboxes and heads | A board for planned work | All work visible with explicit policies | Board and tools consistent and trusted | Flow visible across teams and suppliers |
| WIP control | No limits | Informal limits | Agreed limits and rules for exceptions | Limits tuned from data | Limits coordinated across dependent teams |
| Flow measures | None | Counts of items | Lead time and throughput as distributions | Measures used to find bottlenecks | Measures shared and acted on across the system |
| Classes of service | One queue | Urgent versus not | Defined classes with limits | Classes reviewed with evidence | Classes aligned across teams and agreements |

## Checklist

- [ ] All kinds of work, including interruptions, are on the board.
- [ ] Columns include waiting states.
- [ ] We have WIP limits and a rule for what to do when full.
- [ ] Policies for ready, done, priority, and expedite are written down.
- [ ] We measure lead time, cycle time, and throughput as distributions.
- [ ] We review the oldest items regularly.
- [ ] We know our current bottleneck and have an improvement for it.
- [ ] We check measures against real items for gaming.

## AI prompts

**Find patterns in board data.**

```text
Here is an export of our items with created, started, and finished dates and state changes: [paste data with names removed].
Calculate the median and 85th percentile lead time, list the five oldest open items, and note where items spend the most time. Do not infer causes. Mark any data problems you notice.
List what you are unsure of.
```

**Suggest classes of service.**

```text
Our team handles these kinds of work: [list with typical urgency and volume].
Propose up to four classes of service, a limit for each, and a rule for entry to the fastest class. Explain the trade-offs of each choice and flag assumptions.
List what you are unsure of.
```

**Prepare a board review.**

```text
Below is the current state of our board: [paste columns, items, ages, and blockers].
List the five items I should discuss first and why, and three questions to ask about each. Do not assign blame or propose solutions.
List what you are unsure of.
```

## AI skills

- [kanban](../../../../skills/kanban/SKILL.md): use to set up and run a board with limits and policies.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyze waits and handoffs.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to trace flow across teams.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): use to define flow measures with their risks.

## Key sources

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010): the source of the method for knowledge work.
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): the origin of the kanban card.
- Wikipedia, "Kanban (development)": an overview of the method.
- Wikipedia, "Little's law": the formula behind WIP limits.

## References

1. Kanban — Wikipedia — https://en.wikipedia.org/wiki/Kanban
2. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
3. Work in process — Wikipedia — https://en.wikipedia.org/wiki/Work_in_process
4. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
5. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
6. Cumulative flow diagram — Wikipedia — https://en.wikipedia.org/wiki/Cumulative_flow_diagram
7. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
8. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
9. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
10. Taiichi Ohno — Wikipedia — https://en.wikipedia.org/wiki/Taiichi_Ohno
