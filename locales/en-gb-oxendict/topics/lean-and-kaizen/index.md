# Lean and Kaizen

**Lean is a way of thinking about work that removes waste and focuses on the value the customer receives, and kaizen is its habit of small, continuous improvement by the people who do the work; together they supply much of the practical thinking behind agile service management.**

## Why this matters

Service teams carry a lot of work that does not help customers: duplicate approvals, reports nobody reads, handoffs that lose information, tickets reopened because the first answer missed the point. Each piece seems reasonable in isolation. Together they consume more time than the useful work, and they make every service slower and more expensive than it needs to be.

Lean thinking gives a vocabulary for seeing that. It asks what the customer values, traces the steps that produce it, and labels the rest as waste to reduce. Kaizen, a Japanese word meaning "change for the better", gives the method for reducing it: many small improvements, made all the time, by the people closest to the work. No grand redesign is needed.

Both ideas came from manufacturing, especially the Toyota Production System, and both have been adapted to software and services. They underlie the ITIL 4 guiding principles "focus on value", "keep it simple and practical", and "progress iteratively with feedback" (see Topic 1.5 — ITIL Guiding Principles). This topic explains the key ideas, shows how to apply them to service work, and shows where they can be misused.

## Core concepts

**Lean manufacturing and the Toyota Production System.** Lean is a label for production methods derived from the Toyota Production System, developed after the Second World War. Its aims are to deliver value to the customer, reduce waste, and improve flow. Wikipedia's articles on lean manufacturing and on the Toyota Production System give the background. The word "lean" became widespread after research on automobile production in the late 20th century.

**Value and waste.** In lean terms, value is what the customer is willing to pay for or would notice if it were missing. Waste, called "muda" in Japanese, is any activity that consumes resources and adds no value. Lean also names "muri" (overburden on people or equipment) and "mura" (unevenness in work). Together these three are often called the three Ms.

**Seven wastes, translated to service work.** The classic list of seven wastes in manufacturing has analogues in services:

| Classic waste | In service work, for example |
|---|---|
| Transport | Handing a ticket between many queues |
| Inventory | A backlog of requests nobody will ever do |
| Motion | Searching for information in many systems |
| Waiting | A request idle while awaiting approval |
| Overproduction | Reports and features nobody asked for |
| Overprocessing | Approval steps that add no safety |
| Defects | Incorrect fixes that cause repeat tickets |

Many lean writers add an eighth, the unused talent of people. In software, Mary and Tom Poppendieck adapted the list in their work on lean software development, described by Wikipedia.

**Flow and pull.** Lean organizes work so that it flows smoothly, and so that new work starts when there is capacity rather than being pushed in. See Topic 2.3 — Flow and Kanban for the tools.

**Respect for people.** Lean at Toyota rests on two pillars, continuous improvement and respect for people. In practice, that means asking the people doing the work to find the problems and propose the fixes, rather than imposing changes from outside. Lean programmes that cut staff and call it improvement misuse the idea.

**Kaizen.** Continuous improvement through small changes. Wikipedia describes kaizen as an approach used by everyone in an organization, with changes small enough to be tried quickly. A typical kaizen cycle uses the plan–do–check–act (PDCA) loop: plan a change, try it, check the result, and adopt or adjust it. See Topic 3.15 — Continual Improvement.

**Go and see (gemba).** "Gemba" is the place where the work happens. Lean practice asks managers and improvers to go there, watch, and ask questions, rather than relying on reports. For a service team, gemba may be the service desk, a ticket queue, or a call with a customer.

**Root cause tools.** Lean uses simple methods such as the "five whys" (ask why repeatedly until you reach a cause you can act on) and A3 problem solving (a structured one-page summary). They support problem management (see Topic 3.3 — Problem Management). They need care: asking "why" five times can lead to a person to blame instead of a cause in the system.

**Mistake-proofing.** Poka-yoke is the practice of designing a step so that errors are hard to make or are caught at once. In service work, it can be a required field, a template, a check in a pipeline, or a confirmation before a risky action. Autonomation, sometimes called jidoka, refers to stopping a process when a fault is detected, which has a modern analogue in pipelines that halt on a failing test.

**Stop-the-line.** The andon cord in a Toyota plant lets any worker stop the line when they see a problem. Translated to services, anyone can raise a problem that may harm customers, and the team treats the signal as useful, not disruptive.

**Lean and agile.** Lean thinking influenced agile software development, and the two overlap: small batches, feedback, continuous improvement, respect for people. This guide emphasizes continuous stakeholder involvement, continuous improvement, and continuous delivery of working change, which lean supports.

**How the lenses fit.** Lean and kaizen are the improvement engine for the agile lens. AI can find patterns in tickets that suggest waste, under review. Automation removes repeated manual steps, after you have simplified them. Analytics shows where work waits and where defects arise.

## Best practices

1. **Define value from the customer's view.** For each service, write what the customer values. Mark each step in the process as value-adding, necessary but not value-adding, or waste.
2. **Go and see.** Spend time where the work happens, watch real requests, and talk to the people doing them. Reports are not a substitute.
3. **Remove waste before automating.** Simplify the process first. Automating a wasteful step makes the waste cheaper to produce, not smaller.
4. **Let the people closest to the work improve it.** Give teams time, authority, and a simple way to try changes. Review their ideas quickly and tell them what happened.
5. **Make improvements small and quick.** Aim for changes that can be tried within days. Run them as experiments with a stated expectation and a date to check.
6. **Fix causes, not people.** When something goes wrong, ask what in the system allowed it. Use root cause methods to find causes, and avoid stopping at "human error".
7. **Mistake-proof the repeated steps.** Add required fields, templates, checks, and confirmations where errors have occurred more than once.
8. **Let anyone stop the line.** Create a safe way to raise a concern about a change or an incident response. Thank the person who raised it.
9. **Keep an improvement board.** Show improvement ideas, their status, and results where the team and stakeholders can see them.
10. **Do not use lean as a cover for cuts.** If improvement leads to layoffs, people stop proposing improvements. State how savings in time will be used.

## Questions to discuss with your team

**What do our customers value from this service, and what do we do that they would not notice if it stopped?**
This separates value from activity. Teams often find reports, approvals, or checks that no one uses. Ask for the customer's view if possible. Follow up by choosing one activity to stop for a month, with an owner watching for harm.

**Which of the classic wastes do we see most often, and what is a recent example of each?**
Use the table of seven wastes. People usually name waiting and rework first. Ask for real tickets or incidents. Follow up by picking the waste that costs the most time.

**When did someone last propose an improvement, and what happened to the idea?**
This tests the improvement system. You may hear that ideas vanish or that suggesting means being given the work. Ask how long it took to respond. Follow up by agreeing a response time and a visible list.

**Which repeated errors could we make impossible, or at least obvious?**
Look for mistakes that happen again and again: a wrong category, a missing field, a command run on the wrong system. Ask what a simple guard would look like. Follow up by choosing one error and a guard to try.

**Where do we blame people when the system allowed the error?**
This probes culture. Reviews often end with "be more careful". Ask what made the error likely and what would make it harder. Follow up by rewriting one past review's conclusion in terms of the system.

**How would AI help us find waste, and how would we check that it was right?**
AI can group tickets, find repeated questions, and suggest candidates for automation. It can also invent patterns. Ask who will check a sample of what it finds. Follow up by choosing a sample of tickets to test its grouping by hand first.

## In practice: a service management example

A government benefits agency runs a contact centre answering questions about applications. Staff say they spend their days "chasing information". The team leader, who has been to a short lean course, decides to go to the floor. She sits with agents for three days and records, for 120 calls, the reason each person called and what the agent did.

She finds that 40 of the 120 calls were repeat calls about the same application, because the first agent could not see the status held in another system. Another 25 were about a letter that used terms the callers did not understand. Agents spent a large share of each call switching between four screens.

The team tries three small changes over six weeks: it rewrites the confusing letter with a few plain sentences and tests it with a sample of applicants, it adds one screen showing the application status drawn from the other system, and it creates a one-page guide for the five most common questions. Agents propose a fourth change, a template for call notes that cuts re-explaining across shifts. Each is tried for two weeks and reviewed at a short weekly meeting.

What changes: repeat calls fall in the sample the team tracks, and agents report less switching. What remains hard: the status screen depends on an integration owned by another department, which has not yet agreed to maintain it; the team has no good way to measure whether callers understood the letter other than asking them; and a manager has asked how many agent hours the changes saved, which tempts people to count a number. The leader keeps the focus on callers' experience and agrees with her manager that savings will be used to reduce backlog, not to cut staff.

## Four perspectives

### Product and delivery teams

Define value from the user's point of view and remove features and steps that do not serve it. Use small experiments, mistake-proof repeated steps, and treat operational problems as signals for design change.

### Service and operations teams

You see waste daily. Record it, bring examples to the improvement board, and try small fixes. Use stop-the-line when a change or a response may harm customers.

### Leadership and governance

Go and see. Ask the team what they would change and give time to do it. Protect the people who raise problems. Be explicit that lean is not a cost-cutting programme.

### Customers and users

You know what you value. Tell the provider which steps are pointless to you and which help. If you give feedback, expect to hear what changed.

## Agile, AI, automation, and analytics

### Agile

Lean and kaizen supply the improvement habit: small changes, frequent feedback, stakeholders involved, and people trusted to improve their own work. Caution: improvement boards can become another backlog that nobody reviews; keep the list short and reviewed.

### AI

AI can cluster tickets, find repeated questions, and suggest where waste lies. Each use needs an owner and a person checking a sample. Caution: an AI summary can find patterns that are only artefacts of how tickets were categorized; verify against the work. See Topic 5.1 — AI in Service Management.

### Automation

Automate steps that remain after waste is removed and the process is stable, such as routing a request or updating a status, and keep a log and a way to reverse. Caution: automation can lock in a poor process and make change harder; review after each significant automation. See Topic 6.1 — Automation Strategy.

### Analytics

Measure where work waits, how often it is redone, and how long repeat contacts take. Caution: counting "hours saved" invites inflated claims and can undermine trust; track customer and team experience too. See Topic 7.6 — Process and Value Stream Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Lean as cost cutting.** People stop proposing improvements. State how gains will be used and keep that promise.
- **Improvement from a distance.** Consultants redesign what they have not watched. Go and see, and involve the people who do the work.
- **Automating waste.** A bad process is scripted. Simplify first.
- **Blaming people.** Reviews end with "human error". Look for what in the system allowed it.
- **Improvement ideas disappear.** People stop suggesting. Respond quickly and show the list.
- **Large improvement programmes.** Change takes a year and delivers little. Prefer small experiments with checks.
- **Counting savings as the goal.** Numbers are inflated. Measure customer outcomes and experience.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Value and waste | Value assumed | Some waste identified | Value and waste defined per service | Waste tracked and reduced | Waste reduction coordinated across services and suppliers |
| Improvement habit | Improvement by crisis | A few champions | Regular small experiments with review | Results measured and shared | Improvement embedded in teams and across partners |
| Problem solving | Blame | Some root cause analysis | Standard root cause method used | Causes tracked to prevention | Learning shared across the organization |
| Mistake-proofing | Rare | Ad hoc guards | Guards for known repeated errors | Effect of guards measured | Guards built into tools and pipelines everywhere |

## Checklist

- [ ] We wrote down what each service's customers value.
- [ ] We went to where the work happens and watched real work.
- [ ] We classified steps as value-adding, necessary, or waste.
- [ ] Improvement ideas are visible, answered quickly, and tracked.
- [ ] We try changes as small experiments with a check date.
- [ ] Reviews look for causes in the system, not blame.
- [ ] We added guards for repeated errors.
- [ ] We said how improvement gains will be used.

## AI prompts

**Classify steps as value or waste for review.**

```text
Here are the steps in our process for [service], with who does each and roughly how long it takes: [paste steps].
Propose for each step whether it adds value to the customer, is necessary but not value-adding, or looks like waste, with a one-line reason and a question to confirm with the people who do it. Do not recommend removing anything.
List what you are unsure of.
```

**Find repeated questions in tickets.**

```text
Below are ticket titles and first messages, with personal data removed: [paste sample].
Group them into up to eight themes, count each, and quote two short examples per theme exactly. Do not guess causes.
List what you are unsure of.
```

**Turn a root-cause note into system questions.**

```text
Here is a summary of a recent failure: [paste summary].
Rewrite it as a list of questions about what in our system allowed the failure, avoiding blame, and suggest one guard to consider for each. Do not state causes that are not in the summary.
List what you are unsure of.
```

## AI skills

- [kaizen](../../../../skills/kaizen/SKILL.md): use to plan and run small improvement experiments.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): use to find causes in the system.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to see waste and waits in the flow.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): use to organize possible causes for discussion.

## Key sources

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): a founder's account of the ideas.
- Mary and Tom Poppendieck, *Lean Software Development: An Agile Toolkit* (2003): adapts lean thinking to software.
- Wikipedia, "Lean manufacturing" and "Kaizen": neutral summaries with further reading.
- Wikipedia, "Lean software development": the adaptation for software work.

## References

1. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
2. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
3. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
4. Muda (Japanese term) — Wikipedia — https://en.wikipedia.org/wiki/Muda_(Japanese_term)
5. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
6. Gemba — Wikipedia — https://en.wikipedia.org/wiki/Gemba
7. Poka-yoke — Wikipedia — https://en.wikipedia.org/wiki/Poka-yoke
8. Andon (manufacturing) — Wikipedia — https://en.wikipedia.org/wiki/Andon_(manufacturing)
9. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
10. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
