# ITIL Guiding Principles

**The seven ITIL 4 guiding principles are short, general rules for deciding what to do when a practice is silent; they line up closely with agile and lean ideas, and they work best as questions you ask of a real decision rather than as slogans on a wall.**

## Why this matters

Frameworks run out of detail. A practice description cannot tell you whether to approve an urgent change at 4 p.m. on a Friday, or whether a new tool is worth its setup cost. In those moments people fall back on habit, on the loudest voice, or on whatever the last incident taught them.

The ITIL 4 guiding principles are the framework's answer. They are recommendations that "guide an organisation in all circumstances", whatever its goals, work, structure, or kind of management. Because they are few and plain, a team can remember them and apply them in a conversation. Because they are general, they can also be quoted to justify nearly anything, which is their main hazard.

This topic states each principle, shows how it connects to agile and lean thinking, and shows where AI and automation change the question. It describes ITIL 4, the widely documented version. ITIL (Version 5), introduced by PeopleCert in 2026, may present principles differently; check the owner's pages before quoting a list as current (see Topic 1.3 — ITIL 5).

## Core concepts

**The seven principles.** In ITIL 4 they are: focus on value; start where you are; progress iteratively with feedback; collaborate and promote visibility; think and work holistically; keep it simple and practical; optimise and automate. They are not sequential and not ranked. Several often apply at once, and sometimes they pull in different directions.

**Focus on value.** Everything the organisation does should link, directly or indirectly, to value for itself, its customers, and other stakeholders. In practice, ask who benefits from a piece of work and how they would notice. See Topic 1.1 — Service Management.

**Start where you are.** Do not rebuild from scratch. Observe what exists and reuse what works. This asks for honest measurement of the current state, which means direct observation of real work rather than reliance on reports alone.

**Progress iteratively with feedback.** Do not try to do everything at once. Organise work into smaller pieces that can be completed and checked, with feedback between them. This is the principle closest to the agile idea of delivering working change continuously and adjusting as you learn. Related ideas are iterative and incremental development, and in lean thinking, small batches.

**Collaborate and promote visibility.** Working together across boundaries produces buy-in and better results, and making work visible gives teams the information they need. The aim is shared understanding, not more meetings. Visible work boards, shared dashboards, and open incident channels are typical forms.

**Think and work holistically.** No service, practice, or component stands alone. Results depend on the whole system of people, information, technology, and partners (see Topic 1.6 — Four Dimensions of Service Management and Topic 1.4 — The Service Value System). Holistic thinking helps prevent local optimisation.

**Keep it simple and practical.** Use the minimum number of steps to accomplish an objective, and remove what does not contribute to value. The "KISS principle" and lean's attention to waste are close relatives. See Topic 2.4 — Lean and Kaizen.

**Optimise and automate.** Make sure work is as effective as it can be, then use technology to achieve more. ITIL's order matters: simplify and optimise first, automate second. See Topic 6.1 — Automation Strategy. In today's setting the principle also invites the question of what AI can responsibly do, and who is accountable when it acts.

**How they relate to agile principles.** ITIL 4 itself says the principles are consistent with other frameworks and approaches, including the Agile Manifesto, lean, and DevOps. The mapping is not one to one, but it is useful. "Progress iteratively with feedback" resembles frequent delivery and responding to change; "collaborate and promote visibility" resembles daily collaboration between business people and developers; "keep it simple" resembles "simplicity, the art of maximising the amount of work not done". See Topic 2.1 — Agile Manifesto and Principles.

**Principles as a check, not a verdict.** A principle is a prompt for a conversation. "Does this proposal focus on value?" has no yes or no answer on paper. It earns its keep when it makes someone name the value and the person who receives it.

## Best practices

1. **Pick the principles that bear on the decision.** For each significant proposal, name the two or three principles most relevant and ask what they say. Applying all seven to every small decision becomes ritual.
2. **Write the value in a sentence.** For "focus on value", require a sentence of the form "This helps [who] to [achieve what]". If the sentence is hard to write, the proposal is not yet ready.
3. **Observe before you redesign.** For "start where you are", spend time watching the current practice, talking to the people who do it, and reading real records. Write down what works so it is not discarded by accident.
4. **Cut the work into releasable pieces.** For "progress iteratively", ask what the smallest change is that a real user could try, and when feedback will arrive. Plan the next piece after the last has been checked.
5. **Make work visible where people already look.** For "collaborate and promote visibility", put status where the team and its stakeholders will see it, such as a shared board, rather than in a separate report no one opens.
6. **Map the dependencies.** For "think and work holistically", list what the change touches, including suppliers and customers, and ask each affected group before you commit.
7. **Remove a step before adding one.** For "keep it simple", check whether a new control replaces an old one. If every control is added and none removed, the practice grows heavier each year.
8. **Simplify, then automate.** For "optimise and automate", improve the manual process until it is understood, then automate the stable parts, with logging and a way to reverse them.
9. **Record how principles were used.** In decision records, note which principles were weighed and how conflicts were settled. Reviews then have something to learn from.
10. **Review the list itself.** Principles can become jargon. Ask newer team members what each means to them, and reword them in your own language where that helps.

## Questions to discuss with your team

**Which principle did we most recently ignore, and what happened?**
This avoids abstract agreement. Teams usually recall a decision that took the quick path at some cost: a change pushed through without feedback or a tool bought without checking what already existed. Listen for the story rather than the label. Follow up by asking what would have prompted us to apply the principle at the time.

**Where do two principles pull against each other in our work?**
Tension is normal. "Keep it simple" can conflict with "think and work holistically" when a simple local fix harms a neighbouring team. Discuss one real example. Follow up by agreeing how we settle such conflicts, and who decides.

**What do we automate before we have simplified it?**
This tests the order in "optimise and automate". Expect examples of scripts that encode a confusing approval flow. Ask what would be left if we removed the steps nobody can justify. Follow up by choosing one process to simplify before touching the script.

**What would a smaller first step look like for our current biggest change?**
This applies "progress iteratively with feedback". People often defend large releases as necessary. Push for a version that a real user could try within weeks. Follow up by asking what feedback we want and from whom.

**Who sees our work today, and who do we wish saw it?**
Visibility is often lopsided: leaders see reports, teammates see boards, customers see nothing. Look for people who are affected but uninformed. Follow up by choosing one group and one way to show them what is happening.

**How do we use AI in a way that respects these principles?**
AI can serve "focus on value" and "optimise and automate", and it can undermine "think and work holistically" when a local use ignores consequences. Ask who owns each AI use and where a person decides. Follow up by listing one AI use to check against the principles this month.

## In practice: a service management example

A national tax authority's digital services group has laminated the seven principles and hung them in the office. Staff are privately cynical about them. A new service owner proposes using them in one real decision: whether to replace a legacy request-tracking tool with a new platform costing several million over five years.

The group holds a two-hour session. For "focus on value", the owner asks for a sentence naming who benefits; the first draft says "IT", and the second says "the 300 caseworkers who wait for access approvals". For "start where you are", a team member shows that the old tool's request forms are used constantly and that its reporting is the weakness. For "progress iteratively", the group agrees to trial the new platform on one request type before committing. For "keep it simple", staff note that the proposal would carry over 40 forms, many unused. For "optimise and automate", they decide to simplify the access approval flow before automating it.

The result is a smaller decision: a trial on access requests, with 12 forms cut first and feedback from caseworkers after six weeks. What remains hard: the trial does not answer whether the full platform will meet the authority's security rules, which needs separate work, and procurement rules push toward one large contract. The principles did not settle those questions; they helped the group ask better ones.

## Four perspectives

### Product and delivery teams

Use the principles in design and planning conversations. Break work into pieces that real users can try, involve operations early, and ask what your change simplifies. Keep your pipeline's automation in step with how well the process is understood.

### Service and operations teams

You see where principles break down: handoffs that hide work, controls that add steps without adding safety. Bring examples to planning sessions, and propose simplifications with evidence.

### Leadership and governance

Ask which principles a proposal serves and which it strains. Model the behaviour: ask for the value in a sentence, and ask for the smaller first step. Avoid quoting principles to win arguments.

### Customers and users

You should see the effects: changes that arrive in small, understandable steps, a provider that listens, and services that do not demand pointless effort. Tell providers which of their changes helped you, and which did not.

## Agile, AI, automation, and analytics

### Agile

The principles fit well with continuous delivery of working change, continuous stakeholder involvement, and continuous improvement. A practical use is to review a plan against "progress iteratively" and "collaborate". Caution: principles are not a substitute for the frameworks' practices; they are a check on them.

### AI

Apply "focus on value" to every AI proposal by naming the outcome, and "think and work holistically" by asking how the AI's output affects other teams. Keep a human decision point where errors would harm customers. Caution: asking an AI to apply the principles to a proposal produces plausible text, not judgement; use it to generate questions, and decide yourselves. See Topic 5.1 — AI in Service Management.

### Automation

Use "optimise and automate" as an order of work: observe, simplify, automate, and then review. Automate with logs and rollback. Caution: automation can make a flawed practice permanent; schedule a review after each significant automation.

### Analytics

Use measures to check whether a principle has had any effect, such as the size of batches or the time from request to feedback. Caution: measures of principle "adoption", like counting how often a principle is mentioned, show nothing about outcomes and are easy to inflate. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Principles as slogans.** They hang on a wall and change no decision. Apply them to one real decision and record the result.
- **Quoting them to win arguments.** Any proposal can claim to follow one. Ask for the evidence behind the claim.
- **Automating first.** A confusing process is scripted without simplification. Simplify, then automate, then review.
- **Large releases justified by "holistic".** Teams cite holistic thinking to avoid small steps. Break the work down and find the smallest meaningful piece.
- **Treating the list as complete or fixed.** A newer version may differ. Check the owner's publications and label the version.
- **Visibility as reporting.** Reports are produced and nobody acts. Make information visible where people decide.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Use in decisions | Principles unknown or ignored | Used occasionally by champions | Applied to significant decisions and recorded | Decisions reviewed against outcomes | Principles shape shared decisions across teams and partners |
| Value focus | Value assumed | Value stated for main work | Value sentence and beneficiary for each change | Value checked after delivery | Value tracked across services and supplier boundaries |
| Iteration and feedback | Large batches | Some small releases | Small batches with planned feedback | Feedback loops measured | Feedback shared across teams and customers |
| Simplify before automating | Automation by default | Some simplification | Standard step: simplify, then automate | Automation reviewed for effect | Simplification and automation coordinated across the value stream |

## Checklist

- [ ] We can state each of the seven principles in our own words.
- [ ] We applied the principles to one real decision and recorded the result.
- [ ] Each significant proposal has a value sentence naming the beneficiary.
- [ ] We observe current practice before redesigning it.
- [ ] Changes are broken into pieces with planned feedback.
- [ ] We simplify before we automate.
- [ ] We know who sees our work and who should.
- [ ] We checked that our list of principles matches the owner's current guidance.

## AI prompts

**Generate questions for a proposal, one principle at a time.**

```text
Our proposal: [paste proposal].
For each of the seven ITIL 4 guiding principles (focus on value, start where you are, progress iteratively with feedback, collaborate and promote visibility, think and work holistically, keep it simple and practical, optimise and automate), write two questions the team should answer before proceeding. Do not judge the proposal or recommend a decision.
List what you are unsure of.
```

**Find what to simplify before automating.**

```text
Here is a description of our current process: [paste steps, with who does each and how long each takes].
List steps that might be removed or combined, and for each, a question to confirm with the people who do it. Do not recommend automation yet.
Mark assumptions and list what you are unsure of.
```

**Rewrite the principles for a specific audience.**

```text
Rewrite the seven ITIL 4 guiding principles in plain language for [audience, such as new support staff], using one example from [our type of organisation] for each. Keep each under 40 words. Do not add principles or claims about other ITIL versions.
End with what you are unsure of.
```

## AI skills

- [agile-principles](../../../../skills/agile-principles/SKILL.md): use to map the guiding principles to the agile principles.
- [decision-records](../../../../skills/decision-records/SKILL.md): use to record which principles were weighed in a decision.
- [kaizen](../../../../skills/kaizen/SKILL.md): use to turn "keep it simple" and "optimise" into small improvement experiments.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of ITIL guidance; check for how principles are stated in the newest version.
- Wikipedia, "ITIL": a summary of the framework including its principles.
- Wikipedia, "Agile software development": the values and principles the ITIL principles parallel.
- Wikipedia, "KISS principle": background on "keep it simple".

## References

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
4. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
5. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
6. KISS principle — Wikipedia — https://en.wikipedia.org/wiki/KISS_principle
7. Iterative and incremental development — Wikipedia — https://en.wikipedia.org/wiki/Iterative_and_incremental_development
8. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
9. Holism — Wikipedia — https://en.wikipedia.org/wiki/Holism
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
