# Agile Service Management

**Agile service management applies agile values to the design and improvement of service management practices themselves: each practice has an owner who acts like a product owner, a small backlog of improvements, short feedback loops with the people who use the practice, and controls built into the work.**

## Why this matters

Service management practices are often designed once, written into a process document, and enforced. The document ages as technology and the organization change. People work around steps that no longer make sense, and the practice drifts away from what the paper says. Revising it becomes a project with a committee and a long cycle, and by the time the revision lands it is already out of date.

If agile ideas are good for building software, they should also be good for designing the practices that govern how software is run. A practice such as change enablement can be treated as a product with users, the people who raise and approve changes. Its owner can listen to those users, keep a backlog of small improvements, release them often, and check whether they helped. That is what this topic means by agile service management.

The idea matches ITIL 4's guiding principles, such as "progress iteratively with feedback" and "start where you are" (see Topic 1.5 — ITIL Guiding Principles), and fits the continual improvement focus of the service value system. The owner's description of the newest ITIL version stresses a value creation approach that links strategy, delivery, and measurable outcomes (see Topic 1.3 — ITIL 5). Practices that improve in small steps and show their results fit that direction.

## Core concepts

**Practices as products.** A practice such as incident management serves a set of users: responders, customers, managers, auditors. A practice owner, acting like a product owner, is accountable for how well it serves them. The owner collects feedback, keeps a backlog of changes to the practice, and decides what to change next. See Topic 2.8 — Product and Service Ownership.

**Process backlog.** A short, ordered list of improvements to the practice: a form to simplify, a step to remove, a report to stop, a new automation. Items come from users, from incident reviews, and from measurement. Wikipedia's article on backlogs explains the idea. The owner reviews the list regularly with users and chooses a few items to try.

**Small changes with feedback.** Practice changes are made in small pieces and tried with a limited group first, for example one team or one type of request. The owner asks the users what happened and keeps, adjusts, or reverses the change. This replaces large rewrites of a process document.

**Users of the practice.** Those who must follow the practice are its main users. Their experience matters: a practice they cannot follow will be ignored or gamed. Involve a few of them in each change.

**Controls inside the work.** Where a practice exists to manage risk, such as approval of risky changes, agile service management prefers to build the control into the tools and pipeline, producing evidence as a by-product. See Topic 2.2 — Continuous Delivery and Topic 3.4 — Change Enablement.

**Lightweight documentation.** Describe a practice on one or two pages: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep detail in the tools and in short, current guides. Long procedure manuals are rarely read.

**Cadence of review.** Set a regular time, such as monthly, to review the backlog, the measures, and feedback, and to decide what to change. Between reviews, urgent fixes can be made when needed.

**Experiments.** Treat a change as an experiment with an expected effect and a date to check. For example: "We expect removing the second approval for low-risk changes to cut lead time by a day without more failures. We will check after four weeks." If the effect is not seen, change it back.

**Agile and ITIL together.** Agile service management does not discard the framework. It uses ITIL practices as a source of ideas and vocabulary, and adapts them. Where a practice is a risk control with real consequences, it keeps the control and changes how it is met.

**What it does not mean.** It does not mean dropping documentation, ignoring audit requirements, or running ceremonies for the sake of them. If your team chooses to use sprints or Kanban for the improvement work, they can fit; the point is the continuous cycle of feedback and small change.

**How the lenses fit.** The practice owner's backlog is the agile lens turned on service management itself. AI can analyse tickets and feedback to suggest improvements, under review. Automation turns practice rules into tool behaviour. Analytics shows whether practices are working.

## Best practices

1. **Name a practice owner.** Each major practice has one person accountable for its quality and improvement. The owner is a user of the practice as well as its designer.
2. **Start with the users' pain.** Ask people who follow the practice what is slow, unclear, or pointless, and list the answers. Start with what they raise, not with what the framework suggests.
3. **Keep a visible, short backlog.** Show it where users can see it. Limit the number of items in progress, and finish before starting more.
4. **Change in small steps.** Try each change with one team or one request type, with a stated expectation and a date to review.
5. **Measure the effect.** Choose one or two indicators for each change, such as time to approve or the share of requests returned for missing information. Say how the measure could mislead.
6. **Build controls into the tools.** Where possible, make the safe action the default, such as a required field or an automated check, and record evidence automatically.
7. **Write less, link more.** Keep the practice description short, link to tools and examples, and remove pages that nobody reads.
8. **Review on a cadence.** Hold a short monthly review with a few users, and publish what changed and why.
9. **Respect real requirements.** Check with audit, security, and legal when a change touches a control, and involve them early so that you can explain how the new method meets the aim.
10. **Retire what does not help.** Remove steps, forms, and reports that show no value, and say so publicly.

## Questions to discuss with your team

**Which of our practices do people work around, and why?**
Workarounds show where the practice does not fit the work. Ask for specific examples, such as a form that is filled with "n/a". Do not treat it as non-compliance first. Follow up by choosing one workaround and asking what change would make the official route easier.

**Who owns each of our practices, and how do they hear from the people who use them?**
Many practices have no owner and no feedback route. Ask for the last time the owner talked to users. Expect silence. Follow up by agreeing a regular conversation with a few users.

**What is the smallest change to one practice that we could try next week, and how would we know it helped?**
This encourages small experiments. Teams often propose redesigns. Push for something tiny, with a measure and a review date. Follow up by naming the owner and the checker.

**Which of our controls could be met by the tools or the pipeline instead of a meeting or a form?**
Look for controls that rely on people remembering. Ask what evidence the auditor needs. Follow up by trialing one automated control with the control owner involved.

**How long is our practice documentation, and who reads it?**
Check whether the documents are used. Ask new starters what they read. Expect long manuals nobody opens. Follow up by drafting a one-page version of one practice and testing it with a new starter.

**How could AI help us see what is not working in our practices, and what would we want to check by hand?**
AI can find patterns in tickets and feedback. It can also find patterns that are artefacts of how people fill fields. Ask who will read a sample. Follow up by comparing an AI analysis of one month's tickets with a manual review.

## In practice: a service management example

A university's IT department has a change enablement practice with a weekly review board. Staff say the form is long and the board adds a week to every change. Auditors value it, since it provides a record. The practice owner, a senior service manager, decides to treat it as a product.

She interviews eight people who raised changes in the last month and attends one board meeting. She finds that 70 percent of changes are routine and low risk, that the form has 22 fields of which eight are ever read, and that the board mostly approves what it sees. She makes a short backlog: shorten the form, define a "standard change" category pre-approved by risk rather than by meeting, and link each change record to the automated test results.

She tries the shorter form with one team for four weeks, with the expectation that average time from request to approval for standard changes will fall from six days to two. She asks the internal auditor to review the proposed standard change rules. The auditor asks for a sample check and a monthly review of failures. The team agrees. After four weeks the average falls to under two days, and the number of failed changes does not rise.

What changes: the board now spends its time on the 30 percent of changes with real risk, and the record is generated from the pipeline. What remains hard: other teams use a different tool that cannot show test results, so their records stay manual; the auditor's sampling adds work that nobody has resourced; and some board members miss the old weekly ritual and feel their role has shrunk. The owner keeps a monthly review and asks the board for ideas.

## Four perspectives

### Product and delivery teams

You are the main users of change and release practices. Give feedback early, take part in trials, and build controls into your pipeline so that the practice can rely on evidence.

### Service and operations teams

You often own the practices. Act as product owners: listen to users, keep a short backlog, and try small changes. Share results and retire steps that do not help.

### Leadership and governance

Ask owners for the practice backlog, the measures, and the feedback they have heard. Support changes that replace manual controls with built-in ones, after involving audit and risk. Do not demand long documents.

### Customers and users

When a practice affects you, such as a request form, you should be able to say what is awkward and see it improve. Ask who owns it and how to give feedback.

## Agile, AI, automation, and analytics

### Agile

This topic is the agile lens applied to the practices: small steps, stakeholder involvement, regular review, and continuous improvement. Caution: do not run agile rituals around a practice; keep the focus on feedback and small change.

### AI

AI can analyse tickets and feedback to suggest improvements, draft one-page practice descriptions, and check new text against the source rules, with a person reviewing. Each use needs an owner. Caution: AI can write polished procedures that nobody follows; test them with real users. See Topic 5.1 — AI in Service Management.

### Automation

Turn practice rules into tool behaviour: routing, required fields, automated approvals for low-risk change, and evidence capture. Keep logs and a way to reverse changes. Caution: embedding a flawed rule in automation hardens it; try the rule manually first. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Use a few indicators of how each practice performs, such as time to approve, rework, and user satisfaction. Caution: counting compliance, such as "percent of changes with a complete form", can be gamed and says little about whether the practice helps; see Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Practice redesign as a project.** A committee rewrites the process for months. Make small changes with feedback.
- **No practice owner.** Nobody improves it. Name an owner.
- **Owner never talks to users.** The practice drifts. Schedule regular conversations.
- **Dropping controls without replacement.** Risk and audit objections follow. Meet the control's aim in the tools.
- **Long documents.** Nobody reads them. Write one page and link to detail.
- **Measuring compliance only.** People complete forms and nothing improves. Measure outcomes and experience.
- **Ceremony without change.** Meetings occur and the backlog does not move. Limit work in progress and finish items.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Practice ownership | No owner | Owners for main practices | Every practice has an owner and a backlog | Owners review results with users | Owners coordinate across practices and partners |
| Change to practices | Rare, large rewrites | Occasional improvements | Regular small experiments with review | Results measured and acted on | Experiments shared across the organization |
| Controls | Manual and by meeting | Some built-in | Standard controls built into tools | Evidence sampled and reviewed | Controls automated and adapted with risk |
| Documentation | Long manuals | Some short guides | One-page descriptions kept current | Use of documents checked | Shared, searchable guidance in context |

## Checklist

- [ ] Each major practice has a named owner.
- [ ] Each owner keeps a short, visible backlog.
- [ ] We talk to users of each practice regularly.
- [ ] We try changes in small steps with a measure and a review date.
- [ ] Controls are built into tools where possible.
- [ ] Audit and risk are involved when controls change.
- [ ] Practice descriptions are short and current.
- [ ] We retire steps that do not help and say so.

## AI prompts

**Analyse feedback about a practice.**

```text
Here is feedback from people who follow our [practice name] practice, with names removed: [paste feedback].
Group it into up to six themes, count each, quote two short examples per theme, and list questions the owner should ask. Do not suggest solutions.
List what you are unsure of.
```

**Draft a one-page practice description.**

```text
Here is the current description of our [practice] practice: [paste text].
Draft a one-page version with: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep every rule that appears in the original; mark any rule you are unsure how to phrase. Do not add rules.
List what you are unsure of.
```

**Plan a small experiment.**

```text
We want to change [practice step] to [proposed change]. Our current measure: [describe]. The people affected: [list].
Write an experiment plan: expectation, one or two measures, how each could mislead, who to involve, how long to run it, and what would make us reverse it. Do not claim the change will work.
List what you are unsure of.
```

## AI skills

- [agile-principles](../../../../skills/agile-principles/SKILL.md): use to check practice changes against agile values.
- [kaizen](../../../../skills/kaizen/SKILL.md): use to plan small improvement experiments.
- [change-request](../../../../skills/change-request/SKILL.md): use to design a lighter change record.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyse a practice's steps and waits.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of ITIL guidance and its newest version.
- Wikipedia, "Backlog": background on the list that drives improvement.
- Wikipedia, "Continual improvement process": the idea of continuous change.
- Wikipedia, "Agile management": the application of agile ideas to management.

## References

1. Agile management — Wikipedia — https://en.wikipedia.org/wiki/Agile_management
2. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
3. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
4. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
5. Feedback — Wikipedia — https://en.wikipedia.org/wiki/Feedback
6. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
7. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
8. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
9. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
