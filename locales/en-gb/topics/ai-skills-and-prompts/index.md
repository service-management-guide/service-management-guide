# AI Skills and Prompts

**A prompt is a request you give an AI system, and a skill is a reusable, versioned set of instructions for one kind of task; both work best when they name the task, supply the source material, say what to do when information is missing, and are tested like any other work product.**

## Why this matters

Everyone who uses an AI assistant writes prompts, mostly by trial and error. Some get excellent results and cannot say why. Others get vague or wrong answers and decide the tool is poor. The difference is often not the model but the request: how clearly the task is stated, what material the assistant has, and how its answer is checked.

In service management the difference matters because the work has stakes. A prompt that summarises an incident from memory can produce an invented timeline. A prompt that asks for "best practice" gives generic text that sounds right and helps nobody. A prompt written in a hurry may paste confidential data into the wrong tool. These are habits, and habits can be improved.

Skills take the idea a step further. A skill packages the instructions for a recurring task, such as writing a runbook or running a postmortem, in a file that an AI assistant can load when the task comes up. The skills in this guide are written in the Claude Code format: each is a `SKILL.md` file with a short description of when to use it and the guidance for doing the work. Teams can copy them, adapt them, and write their own. This topic explains how to use the prompts and skills in this guide, patterns that work, how to verify results, and how to write a team's own skills. It builds on Topic 5.1 — AI in Service Management and the safeguards in Topic 5.6 — AI Governance, Risk, and Compliance.

## Core concepts

**Prompt.** The text, and any attached material, that you give a large language model to get a response. Wikipedia describes prompt engineering as the process of structuring instructions so that a generative model produces the desired output. The model responds to patterns in the prompt; clearer prompts usually give better responses.

**Context.** Everything the model can consider when it answers: your instructions, the documents you supply, and the conversation so far. Wikipedia describes the context window, which limits how much the model can consider at once. If something is not in the context, the model may fill the gap from general knowledge, which is where errors creep in.

**Grounding.** Supplying the source material and asking the model to use only that. Wikipedia describes retrieval-augmented generation, an automated form. For manual use, paste the relevant text and say "use only the text below". See Topic 3.9 — Knowledge Management.

**Anatomy of a good prompt.** Six parts cover most needs:

| Part | What it does | Example |
|---|---|---|
| Role or context | Sets the situation | "You are helping a service desk lead prepare a review." |
| Task | Says what to produce | "Summarise the incident as a timeline." |
| Source material | Provides facts | The pasted ticket history |
| Constraints | Sets limits | "Use only the text. Do not guess causes." |
| Format | Shapes the output | "A table with time, event, and quoted source." |
| Uncertainty rule | Says what to do when unsure | "Write 'not stated' and list what you are unsure of." |

**Placeholders.** Prompts in this guide use `[square brackets]` to mark what to replace with your own material. A prompt with an unfilled placeholder is a common cause of poor results; read each one before you send.

**Examples and structure.** Giving one or two examples of the output you want, known as few-shot prompting and described on Wikipedia, often improves the result more than extra explanation. Asking for a structure, such as a table, makes checking easier.

**Asking for reasoning.** Techniques that ask the model to work through steps, described on Wikipedia as chain-of-thought prompting, can improve answers on some problems. The visible reasoning is not always a faithful account of how the answer was produced, and it can also contain errors. Use it to help you check, not as proof.

**Verification.** Treat every output as a draft. Check facts against the source, check calculations, and check that quotes exist. Wikipedia describes hallucination and automation bias; both are reasons to verify. A prompt that asks the model to quote its sources makes this quick.

**Iteration.** The first result is often not the best. Ask for changes, point out errors, and refine the prompt. Keep the version that worked.

**Skill.** In this guide, a skill is a `SKILL.md` file that tells an AI assistant how to do a type of task. It starts with a short header giving the skill's name and a description of when to use it, followed by guidance: key components, steps, and checks. An assistant that supports skills loads the relevant file when your request matches the description. Skills are plain text, so they can be read, reviewed, versioned, and shared like other documents. Wikipedia's article on Markdown describes the format that they use.

**Skills versus prompts.** A prompt is for a single request; a skill captures a method for a recurring kind of task, so that you do not rewrite it each time. A skill might contain several prompts, a checklist, and the criteria for a good result. The topics in this guide link to skills where a method is useful.

**What skills should contain.** Good skills state when to use them and when not, define the key parts of the output, give a short process, list common mistakes, and say how to check the result. They are specific and brief. A skill that tries to cover everything is rarely used.

**Testing skills and prompts.** Treat them as work products. Build a few realistic test cases with known good results, run them, and note failures. Run them again when the model, the tool, or the skill changes. Wikipedia describes regression testing, the practice of re-running tests after changes to catch breaks.

**Version control and ownership.** Store skills in a repository, with an owner, a changelog, and review for changes. Wikipedia describes version control. A skill that quietly changes without review can change a team's results without anyone noticing.

**Security.** Prompts and skills can be attacked or misused. Content you paste may contain instructions, a risk Wikipedia describes as prompt injection. A skill downloaded from an unknown source may tell the assistant to do something harmful. Read skills before using them, and give assistants only the access they need. See Topic 5.5 — Agentic AI and Human Oversight.

**Confidentiality.** Decide what may be pasted into which tool. See Topic 5.6 — AI Governance, Risk, and Compliance.

**How the lenses fit.** Skills and prompts are how teams put AI to work consistently. Agile practice suggests keeping a shared library that improves through use and feedback. Automation can run approved prompts in workflows. Analytics shows which prompts and skills are used and whether they help.

## Best practices

1. **State the task, not the topic.** "Draft a status update for customers from these facts" works better than "help with the incident". Say what you want produced and for whom.
2. **Supply the source and restrict to it.** Paste the relevant material and say to use only that. Ask the assistant to write "not stated" where the material is silent.
3. **Say what format you need.** Ask for a table, a numbered list, or a word limit. It makes the result easier to check and use.
4. **Ask for sources and uncertainty.** Request quotes or references, and a list of what the assistant is unsure of. Read that list; it shows where to check first.
5. **Never paste secrets or protected data into unapproved tools.** Remove names, credentials, and personal data where you can. Use the tools your organisation has approved for sensitive material.
6. **Check before you use.** Compare facts, numbers, times, and names with the source. Run any code or commands in a safe environment first.
7. **Iterate and keep what works.** Refine the prompt over a few rounds, then save the final version with a note on what it is for and when it fails.
8. **Share and review a team library.** Keep tested prompts and skills in a shared place with owners. Review changes, and retire those that no longer work.
9. **Write skills for recurring work.** When you find yourself repeating a prompt, turn it into a skill with a clear description, steps, and checks. Keep it short.
10. **Test skills on real cases.** Build a few test cases, run them after each change to the skill or the tool, and record the results.

## Questions to discuss with your team

**What do we ask AI tools to do today, and which of those requests could we write down as a reusable prompt or skill?**
Collect examples. Expect repeated tasks such as summaries, drafts, and checklists. Follow up by choosing one task and writing a tested version together.

**How do we check an AI answer before we use it, and does everyone do it the same way?**
Ask for the last time someone found an error. Expect different habits. Follow up by agreeing a short verification routine for each type of task.

**What have we pasted into AI tools that we should not have, and how do we make the right thing easy?**
Ask in a safe setting. Expect mistakes. Follow up by agreeing what may go where, and by providing an approved tool and a short guide.

**Which prompts have worked well for individuals but never been shared?**
Ask people to demonstrate. Expect good ones. Follow up by collecting three into a shared library, with an owner and a date to review.

**If a skill we use changed tomorrow, how would we notice?**
Expect "we wouldn't". Follow up by agreeing that skills live in version control, are reviewed, and have a few test cases.

**Which tasks should we never hand to an AI assistant, even with checking?**
Discuss decisions affecting people, legal conclusions, and approvals. Expect disagreement. Follow up by writing a short list and who may change it.

## In practice: a service management example

A regional hospital's IT service team of 25 has started using an AI assistant. Individual staff use it in different ways. One analyst drafts knowledge articles from ticket notes, another summarises long email threads, and a third asks it to explain unfamiliar error messages. The team lead is worried: she has seen an article that contained a plausible but wrong command.

She asks the team to bring their three most useful prompts to a one-hour session. They find that four people use almost the same prompt for turning a resolved ticket into an article. The version that works best states that the assistant must use only the ticket text, must write "[missing]" for anything not in it, must list the steps as numbered lines, and must finish with a short list of things it is unsure of. Without the "[missing]" rule, the assistant filled gaps.

The team turns this into a skill file: when to use it (turning a resolved ticket into a draft article), key parts of a good article, the process, and the checks a person must do before publishing, including running every command in a test environment. They test it on ten old tickets whose solutions are known and find that on three the assistant guessed a version number. They add a rule about version numbers and rerun the tests. They store the skill in the team's repository, assign the lead's deputy as owner, and agree that changes are reviewed like code.

They also write one page on what must not go into AI tools: patient data, credentials, and unreleased security reports; and they point everyone to the approved tool, which has a contract that prohibits training on their data.

What changes: draft articles take minutes, and the number of articles with wrong steps found in review falls. What remains hard: some staff still use personal accounts when the approved tool is slow; the skill library has grown to 14 files and nobody has reviewed half of them; and the assistant's behaviour shifted slightly after a vendor update, which the tests caught only because someone reran them. The lead adds a monthly test run and a quarterly pruning session.

## Four perspectives

### Product and delivery teams

Use prompts and skills for drafting code, tests, and documentation, with your usual review and pipeline checks. Keep skills for your own workflows in the repository beside the code.

### Service and operations teams

Build a small library for recurring tasks such as updates, articles, and reviews. Share what works, check every output, and tell the owner when a skill fails.

### Leadership and governance

Set rules on what may be pasted where, provide approved tools, and fund time for building and testing a library. Ask for evidence that outputs are checked. Do not treat prompts as a substitute for process.

### Customers and users

You may meet AI-drafted content. Ask whether it has been checked by a person, and tell the provider when it is wrong. Take care what personal data you give to any AI tool.

## Agile, AI, automation, and analytics

### Agile

Grow the library from real use: add a skill when a task repeats, improve it from feedback, and retire it when it stops helping. Keep skills short and reviewed. Caution: a large unreviewed library is a liability; keep it small and owned.

### AI

Skills and prompts are the instructions we give AI, so they deserve the care we give other controls: ownership, review, tests, and records of use. Caution: instructions to "be accurate" do not make a model accurate; rely on supplied sources, checks, and human review. See Topic 5.1 — AI in Service Management.

### Automation

Approved prompts can be embedded in workflows, such as drafting a summary when a ticket closes, with a review step before use. Caution: automated prompts run without the care of a person reading each time; test them on varied inputs and keep a human gate. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Track which prompts and skills are used, how often drafts are edited, errors found in review, and time saved by task. Caution: usage counts reward volume, and estimated time savings are easily inflated; sample the final outputs for quality. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Vague requests.** The answer is generic. State the task, the audience, and the format.
- **No source material.** The model fills gaps from memory. Supply and restrict to the source.
- **Unfilled placeholders.** A prompt goes out with "[paste here]" in it. Check before sending.
- **Trusting the first answer.** Errors go unnoticed. Verify against the source.
- **Pasting secrets.** Data leaks. Use approved tools and remove sensitive details.
- **A skill library nobody owns.** Files decay or change unnoticed. Keep them in version control with owners and tests.
- **Downloading skills unread.** A harmful instruction runs. Read and review before use.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Prompting practice | Trial and error | Tips shared informally | Standard patterns with sources and checks | Patterns refined from error data | Patterns embedded in tools and workflows |
| Skills library | None | Personal files | Shared, owned, version-controlled skills | Skills tested and reviewed regularly | Skills managed across teams with governance |
| Verification | None | Individual habits | Standard routines by task | Errors tracked and fed back | Verification supported by tooling with human sign-off |
| Data rules | Unclear | Awareness | Clear rules and approved tools | Compliance checked | Controls built into tools |

## Checklist

- [ ] Our prompts state the task, the source, the format, and the uncertainty rule.
- [ ] We check outputs against the source before use.
- [ ] We have rules on what may be pasted into which tools, and approved tools.
- [ ] We keep tested prompts and skills in a shared, owned place.
- [ ] Skills have a clear description of when to use them.
- [ ] We test skills on real cases after each change to the skill or the tool.
- [ ] We review skills from outside sources before using them.
- [ ] We list tasks that must not be handed to AI.

## AI prompts

**Improve a prompt.**

```text
Here is a prompt I use: [paste]. Here is an example of an output that disappointed me: [paste].
Identify what the prompt does not say that would help (task, source material, constraints, format, uncertainty rule), propose a rewritten prompt with [placeholders] for my material, and explain each change in one line. Do not add facts about my situation.
List what you are unsure of.
```

**Turn a prompt into a skill.**

```text
Here is a prompt that works well for my team: [paste]. Here are two examples of good outputs: [paste].
Draft a SKILL.md with a header (name and a one-sentence description of when to use it and when not), key components of a good output, a short process, common mistakes, and a checklist for verifying the result. Keep it under 400 words and do not add steps not implied by my examples.
List what you are unsure of.
```

**Design tests for a skill.**

```text
Here is a skill: [paste].
Write eight test cases: five typical, two awkward, and one that tries to make the assistant ignore the skill. For each, describe the input and the correct behaviour. Do not use real personal data.
List what you are unsure of.
```

## AI skills

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): use to design, test, and refine prompts.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md): use to find and apply this guide's topics, questions, and prompts.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md): use to maintain this guide's topics and skills.
- [runbook](../../../../skills/runbook/SKILL.md): use as an example of a well-structured skill for operational work.

## Key sources

- Anthropic, documentation on prompting and on Agent Skills (docs.anthropic.com): vendor guidance on writing instructions and skills for Claude models.
- OWASP, guidance on risks for applications built on large language models (owasp.org): including prompt injection.
- Wikipedia, "Prompt engineering": an overview of techniques and terms.
- This guide's `skills/` directory: worked examples of skills for service management tasks.

## References

1. Prompt engineering — Wikipedia — https://en.wikipedia.org/wiki/Prompt_engineering
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Few-shot learning — Wikipedia — https://en.wikipedia.org/wiki/Few-shot_learning
6. Chain of thought — Wikipedia — https://en.wikipedia.org/wiki/Chain_of_thought
7. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
8. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
9. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
10. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
11. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
12. OWASP — OWASP Foundation — https://owasp.org
