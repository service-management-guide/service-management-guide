# Generative AI for Incidents, Knowledge, and Changes

**Generative AI can summarise incidents, draft knowledge articles and postmortems, and help assess changes; it saves the most time on first drafts and the least on facts, so use it for writing and reading, verify every claim against the record, and keep a named person accountable for what is sent or approved.**

## Why this matters

Much of the work in running services is writing and reading. During an incident, someone writes status updates while others read chat logs. After it, someone writes a timeline and a review. A knowledge article starts as a ticket resolution note that needs turning into something readable. A change request needs a description, a risk assessment, and a plan. These tasks are time-consuming, repetitive, and often done late and badly because everyone is busy.

Generative AI is well suited to this kind of work. Large language models can read a long thread and produce a summary in seconds. They can turn rough notes into a clean draft and propose a structure for a review. Used well, they free skilled people for judgement and conversation. Used badly, they produce confident, fluent text that is wrong: a timeline with invented times, a root cause that nobody found, a runbook step that does not exist.

The difference lies in how the work is set up. Give the model the actual record, ask it to use only that, make it show its sources, and have a person check before anything is shared. This topic gives practical patterns for three areas: incidents, knowledge, and changes. It builds on the general ideas in Topic 5.1 — AI in Service Management and relates to incident management (Topic 3.2 — Incident Management), problem management (Topic 3.3 — Problem Management), knowledge management (Topic 3.9 — Knowledge Management), and change enablement (Topic 3.4 — Change Enablement). Governance questions are in Topic 5.6 — AI Governance, Risk, and Compliance.

## Core concepts

**Generative AI.** Systems that produce new content, such as text and code, from prompts. Wikipedia describes generative AI and large language models. For service work, text is the main output: summaries, drafts, explanations, and structured notes.

**Hallucination.** Output that is fluent and unsupported or false. Wikipedia describes hallucination in AI. It is a property of how these models work, not a rare bug. The risk is highest when the model is asked for facts it was not given: an exact time, a cause, a policy number, an API option.

**Grounding.** Giving the model the source material and asking it to answer only from that. Retrieval-augmented generation, described on Wikipedia, finds relevant documents and supplies them. For incidents, the source is the timeline, chat, and monitoring data; for knowledge, the ticket and existing articles; for changes, the change record and past similar changes. Grounding reduces errors but does not eliminate them.

**Context window.** The amount of text a model can consider at once. Wikipedia describes the context window. Long incident chats may exceed it, so long inputs are summarised in parts. Check whether important material was dropped.

**Summarisation.** Reducing a long text to its main points. Wikipedia describes automatic summarisation. Summaries lose detail by design, and they can distort it. They are best used as a guide to the original, with the means to check it.

**Drafts, not decisions.** The safest use is to produce a first draft for a person to edit and own. The person's name goes on the result, and they are accountable for it. This keeps judgement with humans and uses the model for the mechanical part.

**Prompt and instruction.** The text given to the model. Clear instructions, with the role, the task, the sources, the format, and what to do when information is missing, improve results. See Topic 5.7 — AI Skills and Prompts.

**Confidentiality.** Incident chats and tickets often contain secrets, personal data, and security details. Where the text goes matters: a model hosted by your organisation, a vendor's service under contract, or a public tool under unknown terms. Decide what may go where. See Topic 5.6 — AI Governance, Risk, and Compliance.

**Prompt injection.** Text in the material you give the model, such as a ticket body or a log line, can contain instructions that try to change its behaviour. Wikipedia describes prompt injection. Treat all inputs as untrusted, and do not let a model with powers to act read content from unknown sources.

**Automation bias.** The tendency to trust automated suggestions, especially when tired or busy. Wikipedia describes automation bias. During an incident, a fluent suggestion can send responders down the wrong path. Treat AI output as a hypothesis.

**Incidents.** Useful tasks include summarising a thread for a new responder, drafting a status update for review, extracting a timeline of events with timestamps from the record, finding similar past incidents, and proposing questions for the review. Risky tasks include stating a root cause as fact and sending an update to customers without review.

**Knowledge.** Useful tasks include turning a resolved ticket into a draft article, rewriting an article in plain language, suggesting titles and tags, and finding duplicates. Risky tasks include publishing drafts without a technical check, and relying on the model to know the right fix.

**Changes.** Useful tasks include checking a change description for missing information, summarising a large pull request, suggesting test cases, and listing risk factors from similar past changes. Risky tasks include approving a change or rating its risk as "low" on the model's word alone.

**Code and scripts.** Models can draft scripts, queries, and configuration. Wikipedia describes code generation in a broader sense. Generated code can contain errors, security flaws, or licensing questions. Treat it as untrusted code: review it, test it, and run it through the pipeline. See Topic 3.4 — Change Enablement and Topic 4.2 — Software Asset Management.

**Records and audit.** Keep a record of how AI was used: the prompt, the sources given, the output, who reviewed it, and what changed. Wikipedia describes audit trails. This supports learning and accountability.

**How the lenses fit.** Generative AI is one of the most visible forms of the AI lens. Agile practice suggests short trials with feedback from the people who do the work. Automation can run the drafts into tools, with review gates. Analytics shows which uses save time and which cause rework.

## Best practices

1. **Give it the record and say to use only that.** Paste or retrieve the actual timeline, ticket, or change, and instruct the model to use only the supplied text. Tell it to write "not stated" when information is missing.
2. **Ask for quotes and references.** Have the model cite the lines or articles it used, so that a person can check each claim quickly.
3. **Separate facts from inference.** Ask for facts taken from the record first, and clearly labelled hypotheses second. Do not let hypotheses appear as findings.
4. **Keep a human owner.** The person who sends the update, publishes the article, or approves the change owns the content, whatever the model drafted. Make that explicit in the process.
5. **Do not send unreviewed output outside.** Status updates to customers, regulators, or the public need human review and approval. Internal drafts are lower risk but still need checking.
6. **Protect the data.** Use tools approved for the sensitivity of the content. Remove secrets and personal data where you can, and never paste credentials.
7. **Check numbers, names, and times.** These are where fabrication shows up most. Compare every figure in the draft with the source.
8. **Test with real cases.** Run the approach on past incidents and tickets where you know the truth, and note where it fails. Share the findings and update your instructions.
9. **Log the use.** Record that AI helped, with the sources and the reviewer. Track corrections to learn which tasks suit it.
10. **Review and retire.** Review which uses save time and which cause rework. Stop those that do not help.

## Questions to discuss with your team

**Which writing and reading tasks in our incident and change work take the most time, and which are low risk?**
Make a list. Expect timelines, status updates, review drafts, and change descriptions. Sort by risk. Follow up by choosing one low-risk task to try with AI.

**What would we need to check in an AI-written incident summary before we trusted it?**
Think of times, causes, and impact. Expect agreement that times and causes need checking. Follow up by writing a short checklist.

**What information must never go into an AI tool, and how do we make that easy to follow?**
List secrets, personal data, and security details. Expect confusion about what counts. Follow up by agreeing a simple rule and a safe tool for the rest.

**How would we know if AI summaries or drafts were making our knowledge base worse?**
Think of wrong steps and repeated errors. Expect "we wouldn't". Follow up by sampling AI-assisted articles for accuracy each month.

**When would we let AI suggest the risk of a change, and who decides?**
Discuss. Expect caution about approval and comfort with prompts for missing information. Follow up by agreeing that AI may suggest questions and similar past changes, and that a person rates the risk.

**Who in our team is good at checking AI output, and how can we spread that skill?**
Checking is a skill. Expect a few confident people. Follow up by running a short exercise in which the team checks a flawed draft together.

## In practice: a service management example

A national railway's operations technology team runs signalling support systems. After each major incident, an engineer spends half a day writing a review from chat logs, monitoring graphs, and ticket notes. Reviews are late, and recent ones were thin.

The team lead trials a generative AI assistant, hosted under the railway's contract with a vendor that does not retain or train on inputs, for the first draft of reviews. For each incident, the engineer exports the chat log and ticket history, removes staff names, and gives the assistant these instructions: use only the supplied text; produce a timeline with each entry quoting the source line; list impact, as stated; list what helped and what slowed the response; mark anything not in the text as "not stated"; and put hypotheses in a separate section labelled as such.

In the first test, on a past incident, the draft's timeline is accurate except that it gives a restart time of 02:15, when the chat says "about quarter past, I think" and the ticket says 02:22; the engineer corrects it. The draft also lists as a cause "a faulty network switch", which appears in the chat as a guess that was later disproved; the review moved it to hypotheses, as instructed, but it had not noted the disproof. The engineer fixes both and sends the draft to the team in two hours instead of four.

After ten incidents, the team estimates that first drafts take about a third as long. They add a rule that the engineer checks every time and cause against the source, and that reviews record that AI drafted the first version. They also decide not to use AI to rate risk in change records yet.

What changes: reviews arrive within a day and have more detail on what helped. What remains hard: engineers sometimes accept the model's phrasing of causes that the evidence only weakly supports; confidential details occasionally remain in exported chats; and one engineer worries that drafting skills will fade. The lead schedules a quarterly session in which engineers write one review without AI, and compares.

## Four perspectives

### Product and delivery teams

Use AI to draft change descriptions, test ideas, and release notes from your own records, and review them. Treat generated code as untrusted: test and scan it like any other change.

### Service and operations teams

Use AI to summarise threads and draft updates, reviews, and articles, with the sources attached. Check every time, name, and cause, and own what you publish.

### Leadership and governance

Set rules on data and approvals, and fund tools that meet them. Ask for evidence of time saved and errors caught. Do not accept AI output as a record of fact.

### Customers and users

You should receive updates that a person has checked. If you see an error in what you receive, tell the provider. Ask how AI is used in what you are told.

## Agile, AI, automation, and analytics

### Agile

Trial one writing task at a time with the people who do it, collect feedback, and improve instructions. Keep reviews short and frequent. Caution: do not let a faster draft shorten the reflection; the value of a review lies in the learning.

### AI

Ground every use in the record, show sources, and keep a person accountable. Test on past cases and record AI use. Caution: fluent text hides weak evidence; ask the model to label confidence and sources, and check them. See Topic 5.7 — AI Skills and Prompts.

### Automation

Automate the plumbing: export the record, remove secrets, call the model, attach the draft to the ticket, and notify the reviewer. Keep a review gate before publishing. Caution: a pipeline that publishes drafts automatically spreads errors; require approval. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Track time to produce reviews, edits made to drafts, errors found, and use by task type. Caution: counting drafts produced rewards volume, and time saved is often estimated; sample the quality of final documents. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Facts from memory.** The model invents times and causes. Supply the record and require quotes.
- **Unreviewed external updates.** Wrong information reaches customers. Require human approval.
- **Secrets in prompts.** Sensitive data leaks. Use approved tools and remove secrets.
- **Rubber-stamping.** Reviewers accept drafts without checking. Provide a checklist and sample reviews.
- **Inputs that manipulate the model.** Hostile text changes behaviour. Treat inputs as untrusted.
- **Using AI to rate risk.** A fluent "low" is trusted. Use AI to ask questions, and let people rate risk.
- **Skill erosion.** People stop writing and checking. Keep practice and review quality.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Use | Individual experiments | Shared tips | Approved patterns for incidents, knowledge, and changes | Patterns reviewed by results | Patterns integrated into tools with governance |
| Grounding and checking | Model memory | Some sources shown | Sources quoted and facts checked against records | Errors tracked and fed back | Verification partly automated, with human sign-off |
| Data protection | Unclear | Awareness | Approved tools and rules | Compliance monitored | Controls built into tooling and pipelines |
| Accountability | Unclear | Informal | Named owners for each output | Owners and reviews audited | Accountability integrated across services |

## Checklist

- [ ] We chose a few low-risk writing tasks for generative AI.
- [ ] We give the model the record and tell it to use only that.
- [ ] Outputs quote their sources and separate facts from hypotheses.
- [ ] A named person owns and reviews every output before it is shared.
- [ ] We use approved tools for sensitive content and remove secrets.
- [ ] We check times, names, numbers, and causes against the source.
- [ ] We record when AI helped and who reviewed.
- [ ] We do not let AI approve changes or state root causes alone.

## AI prompts

**Build a sourced incident timeline.**

```text
Below is the chat log and ticket history of an incident, with names removed: [paste].
Produce a timeline table with columns: time (exactly as written; write "not stated" if no time), event, and the quoted source line. Then list impact as stated in the text, and a separate section "Hypotheses mentioned" with who raised each and whether the text shows it was confirmed or ruled out. Do not add anything not in the text.
List what you are unsure of.
```

**Draft a knowledge article from a resolved ticket.**

```text
Here is a resolved ticket with notes, personal data removed: [paste]. Here are existing articles on related topics: [paste titles and summaries].
Draft a new article with a title in plain words, symptom, steps, and how to check it worked. Use only the ticket. Mark missing information with [missing], and list existing articles that might duplicate this one.
List what you are unsure of.
```

**Check a change description.**

```text
Here is a change description: [paste]. Our required items: [list].
List which required items are missing or unclear, list questions a reviewer should ask, and list any statements in the description that look inconsistent with each other. Do not rate the risk or recommend approval.
List what you are unsure of.
```

## AI skills

- [postmortem](../../../../skills/postmortem/SKILL.md): use to structure incident reviews that AI drafts and people own.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): use to write clear, grounded instructions.
- [runbook](../../../../skills/runbook/SKILL.md): use to turn procedures into runbooks that are checked and tested.
- [release-notes](../../../../skills/release-notes/SKILL.md): use to draft release notes for review.
- [change-request](../../../../skills/change-request/SKILL.md): use to define what a good change description contains.

## Key sources

- NIST, AI Risk Management Framework: a structure for identifying and managing risks of AI use.
- OWASP, guidance on risks for applications built on large language models (owasp.org): community advice on prompt injection and related risks.
- Wikipedia, "Generative AI" and "Hallucination (artificial intelligence)": overviews of the technology and its main failure mode.
- Wikipedia, "Automation bias": why people over-trust automated suggestions.

## References

1. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Automatic summarisation — Wikipedia — https://en.wikipedia.org/wiki/Automatic_summarization
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
8. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
12. OWASP — OWASP Foundation — https://owasp.org
