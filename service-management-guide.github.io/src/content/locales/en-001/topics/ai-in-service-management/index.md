# AI in Service Management

**Artificial intelligence enters service management at the service desk, in operations, in knowledge, in change, and in decision support; treat each use as a service with an owner, a human who decides where harm is possible, a way to catch errors, and a measure of whether it helps.**

## Why this matters

AI has moved from a research topic to a feature of the tools service teams already use. The ticketing system suggests categories. The monitoring platform groups alerts. The chat assistant answers staff questions. The code editor drafts a script. Some of these were switched on by the vendor, and nobody on the team decided to adopt them.

The potential is real. Much service work is reading, writing, sorting, and searching, which are tasks that current AI does well enough to save time. The risk is also real. AI systems produce fluent answers that can be wrong, may hide how they reached a conclusion, can leak data, and can fail in ways that are hard to predict. A team that adopts AI without ownership, review, and measures inherits those risks without the benefits.

This topic is the map of the AI part of this guide. It explains the main kinds of AI in service work, where they help, where they do not, and what to ask before adopting. Later topics go deeper: operations (Topic 5.2 — AIOps), the service desk (Topic 5.3 — AI Service Desk and Virtual Agents), generative AI (Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes), agents that act (Topic 5.5 — Agentic AI and Human Oversight), governance (Topic 5.6 — AI Governance, Risk, and Compliance), prompts and skills (Topic 5.7 — AI Skills and Prompts), and the operating model (Topic 5.8 — AI Operating Model and Skills). The owner's description of the newest ITIL version names AI as part of the environment service management must address (see Topic 1.3 — ITIL 5).

## Core concepts

**Artificial intelligence.** A broad term for systems that perform tasks that normally need human intelligence, such as recognizing patterns, understanding language, and making recommendations. Wikipedia's article on artificial intelligence describes the field and its history. The term covers many different techniques, and what people mean by "AI" varies. When you discuss a use, name the technique and the task.

**Machine learning.** Systems that learn patterns from data instead of following explicit rules. Wikipedia describes machine learning and its branches. Examples in service work include classifying tickets, detecting unusual metrics, and predicting failures. They depend on training data, and they can degrade when conditions change, a problem Wikipedia describes as concept drift.

**Generative AI and large language models.** Systems that produce new content, such as text, code, or images, from prompts. Large language models (LLMs) are trained on large amounts of text and can summarize, draft, translate, and answer questions. Wikipedia describes generative AI and large language models. Their outputs are fluent and not guaranteed to be true.

**Hallucination.** An output that is plausible but false or unsupported. Wikipedia describes hallucination in AI. In service work it can mean an invented command, a made-up policy, or a confident but wrong root cause. Plan for it: ground answers in sources, show the sources, and check before acting.

**Retrieval-augmented generation.** A pattern in which the system first retrieves relevant documents, such as knowledge articles, and then asks the model to answer using only those. Wikipedia describes the approach. It reduces, but does not remove, wrong answers, and it depends on the quality of the documents. See Topic 3.9 — Knowledge Management.

**Agents.** Systems that not only answer but take actions: call tools, change records, run scripts. Wikipedia describes intelligent agents in general. Agents raise the stakes because mistakes have effects in the world. See Topic 5.5 — Agentic AI and Human Oversight.

**Where AI helps in service management.** Typical uses fall into five groups:

| Area | Examples | Main caution |
|---|---|---|
| Service desk | Classify and route tickets, draft replies, answer common questions | Wrong or invented answers to users |
| Operations | Group alerts, find anomalies, suggest causes | Hidden missed signals |
| Knowledge | Search, summarize, and draft articles | Drafts that spread errors |
| Change and delivery | Draft code and tests, assess change risk, write release notes | Insecure or wrong code, over-trusted risk scores |
| Decision support | Summarize data, forecast demand, find patterns | Overconfident conclusions from weak data |

**Human in the loop.** A person reviews or approves an AI output or action before it takes effect. Wikipedia describes human-in-the-loop systems. It is a control, and it works only if the person has the time, information, and authority to say no. Wikipedia also describes automation bias, the tendency to over-rely on automated suggestions, which can turn a human check into a rubber stamp.

**Explainability.** The ability to say why a system produced an output. Wikipedia describes explainable AI. For some uses, such as ranking a ticket, a rough reason is enough; for others, such as a decision that affects a person's access or pay, you need more. Decide how much explanation each use requires.

**Bias and fairness.** AI trained on past data can reproduce past patterns, including unfair ones. Wikipedia describes algorithmic bias. In service work, bias can appear in who gets faster help, whose requests are flagged, or whose language the system understands well.

**Data and privacy.** AI tools process the data you give them, such as ticket text with personal details. Where data goes, how long it is kept, and whether it trains other models are central questions. See Topic 5.6 — AI Governance, Risk, and Compliance.

**Security risks.** AI systems have their own weaknesses, such as prompt injection, in which text in a document or message tries to give the model new instructions. Wikipedia describes prompt injection. Treat inputs from outside as untrusted.

**Lifecycle and operations.** A model in use needs monitoring, retraining or replacement, versioning, and retirement. MLOps, described on Wikipedia, applies engineering discipline to this. For a vendor model, you still need to track changes in behavior after updates.

**Governance frameworks.** The European Union's Artificial Intelligence Act, described on Wikipedia, sets legal obligations that depend on risk categories. ISO/IEC 42001 specifies an AI management system, and the United States National Institute of Standards and Technology publishes an AI Risk Management Framework. These are vocabulary and structure for governance; they are not a substitute for legal advice.

**How the lenses fit.** AI is one of the four lenses. Agile practice suggests small trials with real users and short feedback. Automation is the nearest neighbor: AI decides or suggests, automation acts. Analytics supplies the data that AI learns from and the measures that show whether it helps.

## Best practices

1. **Start with a problem, not a tool.** Name a specific pain, such as time spent sorting tickets, and a measure of improvement. Then ask whether AI is the right answer, or whether a simpler fix works.
2. **Keep an inventory of AI uses.** List every AI feature and tool in use, including vendor features and personal tools that staff use for work. Record purpose, data, owner, and status.
3. **Name an owner for each use.** One person is accountable for what the AI does, what data it uses, and what happens when it is wrong. Without an owner, nobody notices degradation.
4. **Decide where a human decides.** For each use, write what the AI may do alone, what needs review, and what it must never do. Make the review real: give reviewers time and context.
5. **Ground answers in your own sources.** Use retrieval from reviewed knowledge, show the sources to the user, and say clearly when no source supports an answer.
6. **Test before and after launch.** Build a set of realistic test cases with known answers, including awkward and adversarial ones. Run them before release and after each change to the model or data.
7. **Measure value and errors.** Track time saved, quality of outputs, corrections by humans, user complaints, and cost. Sample outputs regularly.
8. **Protect data.** Decide what data may be sent to which tools, remove personal and sensitive details where you can, and check contract terms for retention and training use.
9. **Plan for failure.** Make it easy to switch an AI feature off, route to a person, and recover. Rehearse the failure of an AI service you depend on.
10. **Build skills and share learning.** Train people to use AI well and to question it. Share what works and what fails across teams. See Topic 5.7 — AI Skills and Prompts.

## Questions to discuss with your team

**Where do we already use AI, including features we did not choose and tools people use on their own?**
Ask everyone, and check vendor settings. Expect a longer list than anyone predicted. Follow up by recording each use with an owner.

**Which of our tasks are mostly reading, writing, and sorting, and which would we not want a machine to decide?**
This sorts tasks by suitability. Expect agreement on drafting and disagreement on decisions. Follow up by choosing one low-risk task to trial.

**What would we do if our AI assistant gave a confident wrong answer to a user, and how would we find out?**
Walk through the scenario. Expect gaps in detection. Follow up by agreeing a way to sample outputs and collect user feedback.

**What data do we send to AI tools, and have we read the terms?**
List the tools and data. Expect personal accounts and unknown terms. Follow up by agreeing a rule on what must not be pasted into external tools.

**How would we know that an AI use was worth its cost?**
Ask for a measure of benefit and a measure of harm. Expect "it feels faster". Follow up by choosing one use and agreeing a before-and-after measure.

**What skills do our people need to use AI well, and who will teach them?**
Think of writing good prompts, checking answers, and spotting limits. Expect a wide range of confidence. Follow up by planning a short practice session with real tasks.

## In practice: a service management example

A national public library network's IT team supports 200 branches and about 6,000 staff. The service desk handles a high volume of repetitive questions about printing, logins, and the loan system. The head of service wants to use AI to cut the queue, and the vendor of the ticket system has just added an AI assistant, switched on by default for staff-facing chat.

The service manager first lists AI uses. Besides the vendor assistant, she finds that two analysts use a public chat tool to summarize tickets, and that a developer has built a script that drafts replies. She gives each an owner and sets a rule: no personal data in public tools. She then picks one use to improve: a staff-facing assistant that answers "how do I" questions, using only the approved knowledge base, with source links and a visible button to reach a person.

She builds 60 test questions from real tickets, including ten the knowledge base cannot answer, where the right behavior is to say so. The first version answers three of those ten with invented steps. The team tightens the instructions and adds a rule to decline when no article matches, and the failures fall to one. For the first month, a desk agent reads every conversation that was not resolved by the assistant, and a sample of the rest.

What changes: the assistant resolves about a third of conversations without a ticket, and agents spend less time on the repetitive questions. What remains hard: the knowledge base has outdated articles that the assistant quotes, so the team must clean it; the vendor changes the underlying model without notice, which once changed behavior overnight; and staff in small branches sometimes prefer to phone. The manager sets a monthly test run, an agreed contact for model changes, and a clear message that phoning remains available.

## Four perspectives

### Product and delivery teams

Use AI to draft code, tests, and documentation, under your usual review and pipeline checks. Record where AI was used, and watch for insecure or unlicensed code. Treat AI features in your own product as services with owners.

### Service and operations teams

Use AI to sort, summarize, and search, with a person deciding anything that affects users or systems. Report errors and near misses, and help to tune what the AI sees and says.

### Leadership and governance

Ask for the inventory, the owners, the measures, and the plan for failure. Set clear rules on data and decisions. Fund training and testing, not just licenses.

### Customers and users

You should know when you are talking to an AI and be able to reach a person. Tell the provider when an answer was wrong or unhelpful. Be careful what personal data you share.

## Agile, AI, automation, and analytics

### Agile

Try AI in small trials with real users, learn from feedback, and decide to keep, change, or stop. Keep stakeholders involved in what the AI may do. Caution: a successful demo is not evidence that a use is safe or valuable; run a real trial with measures.

### AI

This topic is the AI lens itself: every use needs an owner, a human who decides where harm is possible, error detection, and measures. Caution: do not delegate accountability to a vendor or a model; you remain accountable for outcomes your service delivers.

### Automation

AI decides or suggests; automation acts. Connect them carefully, with limits on what can happen without approval, logs, and a way to stop. Caution: an AI that triggers automation can multiply a mistake quickly; add rate limits and review. See Topic 6.1 — Automation Strategy.

### Analytics

Measure benefit, error rates found in samples, user feedback, and cost. Caution: usage numbers and user ratings can look good while quality is poor; sample outputs and compare with a baseline. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Tool before problem.** A feature is switched on and nobody measures benefit. Start with a pain and a measure.
- **No inventory.** Uses multiply unseen. List every AI use with an owner.
- **Human review in name only.** Reviewers rubber-stamp. Give time, context, and authority, and sample their decisions.
- **Confident wrong answers.** Users act on invented advice. Ground answers, cite sources, and decline when unsure.
- **Data leaks.** Sensitive text goes to external tools. Set rules and check terms.
- **Ignoring model changes.** Behavior shifts after a vendor update. Test regularly and set a contact for changes.
- **No way out.** The service depends on AI with no fallback. Provide a route to a person and a switch off.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Inventory and ownership | Unknown uses | Main uses listed | Inventory with owners and purposes | Inventory reviewed and tested | Inventory integrated with catalog and governance |
| Human decisions | Undefined | Informal review | Defined review points for each use | Review quality sampled | Review adapted by risk and evidence |
| Testing and monitoring | None | Demos | Test sets and regular sampling | Errors and drift measured | Continuous evaluation across uses |
| Data and risk | Unclear | Awareness | Rules on data and vendor terms | Compliance checked and audited | Risk managed across teams and suppliers |

## Checklist

- [ ] We keep an inventory of AI uses, including vendor features and personal tools.
- [ ] Each use has a named owner.
- [ ] We wrote what each AI may do alone, what needs review, and what it must not do.
- [ ] Answers are grounded in reviewed sources and show them.
- [ ] We have a test set and run it regularly.
- [ ] We sample outputs and track errors, corrections, and feedback.
- [ ] We have rules on what data goes to which tools.
- [ ] Users can reach a person, and we can switch each AI use off.

## AI prompts

**List AI uses from a description of our tools.**

```text
Here is a description of the tools our team uses and what each does: [paste].
List which tools probably include AI features, what each might do, what data it might process, and a question to ask the vendor or owner. Mark clearly which items are guesses and do not state facts about vendors.
List what you are unsure of.
```

**Draft test questions for an assistant.**

```text
Our assistant answers questions about [topics] using only these documents: [list titles].
Write 30 test questions: 15 that the documents answer, 10 that they do not, and 5 that try to make the assistant ignore its instructions. For each, state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

**Prepare an AI use review.**

```text
AI use: [describe]. Owner: [role]. Data used: [list]. Decisions it affects: [list].
Draft a one-page review with: purpose, what it may do alone, what needs human review, how errors are detected, how it is switched off, and open questions. Mark every item you could not fill from my description.
List what you are unsure of.
```

## AI skills

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): use to design prompts that are clear, grounded, and testable.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): use to document what a model does, its data, and its limits.
- [risk-register](../../../../skills/risk-register/SKILL.md): use to record AI risks, owners, and decisions.
- [itil-5](../../../../skills/itil-5/SKILL.md): use to relate AI use to the owner's newest guidance, with unverified claims flagged.
- [mlops](../../../../skills/mlops/SKILL.md): use to manage models through their lifecycle.

## Key sources

- NIST, AI Risk Management Framework: a widely used structure for identifying and managing AI risk.
- ISO/IEC 42001 (the standard itself): requirements for an artificial intelligence management system; read the current edition from the publisher.
- PeopleCert, ITIL certification pages: the owner's description of ITIL (Version 5), including AI.
- Wikipedia, "Artificial intelligence" and "Large language model": overviews of the field and the technology.

## References

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
