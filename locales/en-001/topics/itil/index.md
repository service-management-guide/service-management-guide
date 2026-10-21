# ITIL

**ITIL is the most widely used body of guidance for IT service management, written down by the UK government in the 1980s and now owned by PeopleCert; treat it as a library of ideas to adapt with evidence, not a standard you pass or fail.**

## Why this matters

ITIL appears in job advertisements, supplier contracts, and training catalogs around the world. Many people use the word to mean a specific process, such as the change advisory board, or a specific tool. Both uses are too narrow, and both lead to arguments that are really about something else.

Knowing where ITIL came from explains why it reads the way it does. It began as practical advice for running large government computer centers, grew into a set of process books, and became a broader set of practices and a value model. Each stage left vocabulary behind. A team that understands the history can tell which parts address a real problem today and which are inherited habit.

ITIL also sits inside a larger field. It is one framework among several (see Topic 1.8 — Service Management Frameworks and Standards), and the newest version has its own topic (see Topic 1.3 — ITIL 5). This topic gives the background and a map of what ITIL contains, so that the rest of the guide can use its terms with care.

## Core concepts

**Origins.** ITIL stands for Information Technology Infrastructure Library. According to Wikipedia, it was developed in the 1980s by the Central Computer and Telecommunications Agency (CCTA), a UK government agency, to improve the quality and efficiency of government IT. The first form was a large set of books. Later, responsibility moved to the Office of Government Commerce (OGC) and then to other bodies; check the sources below for the detail, because ownership has changed hands more than once.

**Versions.** In widely used shorthand: version 1 was the original books; version 2 (around 2001) regrouped them into sets such as service support and service delivery; version 3 (2007), updated in 2011, organized guidance around a service lifecycle of strategy, design, transition, operation, and continual improvement; ITIL 4 (2019) replaced the lifecycle with the service value system and a set of practices; ITIL (Version 5) was introduced by PeopleCert in 2026. Dates in this list come from general references and may differ by a year between sources, so confirm the one you rely on with the owner.

**Ownership.** The owner of ITIL today is PeopleCert, a certification company. The owner publishes the guidance, runs the certification scheme, and licenses training providers. The practical consequences are that the full texts are licensed publications, that official terminology comes from the owner, and that anything described as "ITIL" by a third party should be checked against the owner's current wording.

**Best practice, or common practice.** ITIL is often called "best practice". The more modest and more accurate reading is that it records practices many organizations found useful. It does not prove that a given practice works in your context. This guide asks you to test each practice against your own evidence.

**What ITIL 4 contains.** The service value system (SVS) describes how opportunity and demand become value, through governance, the service value chain, practices, guiding principles, and continual improvement (see Topic 1.4 — The Service Value System). Four dimensions frame what every service needs: organizations and people, information and technology, partners and suppliers, and value streams and processes (see Topic 1.6 — Four Dimensions of Service Management). The seven guiding principles are in Topic 1.5 — ITIL Guiding Principles, and the six value chain activities are in Topic 1.7 — The Service Value Chain. ITIL 4 describes 34 practices in three groups: general management, service management, and technical management. Part 3 of this guide covers the main ones.

**Certification.** ITIL certification applies to people, in stages from foundation through to higher levels. It does not certify an organization. An organization that wants an externally audited standard usually looks at ISO/IEC 20000 instead. A certificate shows that someone studied the material; it does not show that they can run a practice.

**Relationship to agile and DevOps.** Early versions of ITIL read as sequential, controlled, and document-heavy. That reading was often right for the time and the technology, and it led many agile teams to treat ITIL as an enemy. ITIL 4 explicitly connects to agile, lean, and DevOps ideas. Topic 2.5 — DevOps covers how the two relate, and Topic 2.9 — Agile Service Management covers applying agile values to the practices themselves.

## Best practices

1. **Read the owner's text for the terms that matter.** For a definition you will quote, such as service, incident, or change, read the owner's published wording and cite it. Third-party summaries drift.
2. **Adapt, do not adopt wholesale.** Choose the practices that address a problem you have. Start where you are, and add structure only when it solves something customers or staff can feel.
3. **Keep the history in view when reading old material.** A process designed for infrequent releases to physical servers needs rethinking for continuous delivery. Ask what problem the guidance solved, then ask whether you still have it.
4. **Use practices, not departments.** A practice cuts across teams. Do not create an "incident department" because ITIL has an incident practice; make sure the work gets done well wherever it sits.
5. **Label ITIL claims by version.** Write "in ITIL 4" or "in ITIL 5" so a reader knows which they are reading, and keep a dated note of what you verified from the owner.
6. **Separate certification from capability.** Fund training for people who need it, and judge readiness by observed performance: can the team run a major incident, or estimate the risk of a change?
7. **Pair ITIL with an engineering view.** Combine its practices with delivery practices such as automated testing, infrastructure as code, and trunk-based development, so that controls are built into the work.
8. **Make the owner of each practice explicit.** Name one person accountable for how a practice runs, who can change it and who improves it with the team that does the work.
9. **Review practices on evidence.** Look at what the practice produces, such as time to restore service or the share of changes that cause incidents, and change the practice when the evidence says so.
10. **Keep terminology consistent but light.** Use the shared vocabulary where it helps people from different teams understand each other, and drop terms that only create ceremony.

## Questions to discuss with your team

**What do we mean when we say "ITIL"? A process, a tool, a certificate, a framework, or a habit?**
People use the word for different things, and arguments about ITIL are often arguments about meaning. Ask each person for an example. You will probably hear a mix of a specific meeting, a ticket tool, and a training course. Follow up by writing one agreed sentence on what ITIL means for us.

**Which of our practices exist because of ITIL, and what problem does each solve today?**
This separates working practices from inherited ones. Listen for answers that cite a real failure, such as an outage after an unreviewed change, and for answers that cite only "the framework says so". Follow up by choosing one practice with no clear problem and agreeing how to test whether it is needed.

**Where does our use of ITIL assume releases are slow and infrequent?**
Many controls date from an era of large, rare releases. Teams that now release daily often find approval steps that cannot keep pace. Collect concrete examples. Follow up by asking which risk each step was meant to control and whether a pipeline check could control it better.

**Who is accountable for each of our practices, and how do they hear what is not working?**
A practice with no owner cannot improve. Expect uncertainty about who owns knowledge management or problem management. Follow up by asking how the owner learns from the people who do the work.

**What did we learn from the last certification we paid for, and what did we change because of it?**
This links training to results. You may hear that people liked the course but that nothing changed at work. That is useful information, not an accusation. Follow up by agreeing one change that someone who took the course will try next month.

**What do we know about the owner's newest guidance, and how do we know it?**
This introduces source discipline (see Topic 1.3 — ITIL 5). Teams usually know headlines from blogs and conference talks. Sort what the team says into verified from the owner, plausible, and unknown. Follow up by assigning someone to read the owner's page and record the date.

## In practice: a service management example

A mid-sized insurance company's IT department has used ITIL vocabulary for fifteen years. A new head of platform engineering says the framework is bureaucratic and wants to drop it. The service manager objects, citing audit findings the framework helped to close.

They agree to test the claim instead of arguing about it. The team lists the ten practices it actually runs and, for each, writes the problem it was set up to solve and a recent piece of evidence. Four practices have clear evidence: incident management, change enablement, service request management, and the service catalog all produce measurable results the business notices. Three have evidence but heavy overhead, notably the weekly change advisory board that reviews every change, including standard ones with a long record of success. Three have neither evidence nor an owner.

The department keeps the first four, replaces the board's review of routine changes with pipeline checks and a peer review, and retires one of the unowned practices after confirming that no audit depends on it. It also sends two engineers to a short course so they can read the owner's current guidance directly.

What changes: the debate moves from "ITIL good or bad" to which practice serves which risk. What remains hard: the auditors still ask for evidence in a particular format, and producing it from the pipeline needs engineering time that the team has not yet funded. The two unowned practices that remain are on the improvement backlog.

## Four perspectives

### Product and delivery teams

Learn the vocabulary of the practices that touch your work, such as change enablement and release management, so that you can show how your pipeline meets their intent. Ask operations what they need from you to run the product, and provide it.

### Service and operations teams

You carry most of ITIL's practices day to day. Keep them tied to evidence, and bring examples of where a practice helps and where it slows people down. Propose changes to practices instead of working around them.

### Leadership and governance

Ask what problem each practice solves, who owns it, and what evidence shows it works. Be cautious about spending on certification as a substitute for capability. Check statements about new versions against the owner's publications before committing money.

### Customers and users

You rarely see ITIL itself. You see how quickly incidents are resolved, how clear requests are, and how changes are communicated. If a practice affects you, such as an approval step, ask the provider what it is for.

## Agile, AI, automation, and analytics

### Agile

Treat the practices as a backlog of things to improve with the people who run them, delivered in small steps and reviewed with stakeholders. Caution: do not use agile language as cover for dropping controls that manage real risk; replace the control with a better one.

### AI

ITIL 5, as the owner describes it, addresses AI-enabled environments (see Topic 1.3 — ITIL 5). Use AI to help people find and read guidance faster, with a person checking the source, and give any AI system used in service work an owner. Caution: an AI assistant may state ITIL details with confidence that are wrong or out of date; ask it to quote text you supplied rather than answer from memory.

### Automation

Build controls into pipelines and tools so that following the practice is the easy path, for example an automated check that every change record links to a tested build. Caution: automation can hide a bad practice behind a green tick, so review what each automated control actually tests.

### Analytics

Use a few measures to see whether practices work, such as the time to restore service, the proportion of changes that cause incidents, and requests fulfilled within agreed times. Caution: measures of practice compliance, such as "percent of tickets with a category", can be gamed and say little about outcomes. See the *Service Management Metrics* book for definitions and guardrails.

## Common failure modes

- **Equating ITIL with one process.** People argue about the change advisory board and miss the rest. Describe the practices you actually run, and judge each on its own evidence.
- **Quoting blogs as the standard.** Details drift across third-party summaries. Cite the owner's publications and date your reading.
- **Certificates as proof of capability.** A trained team may still run a practice poorly. Observe the work, and look at results.
- **Copying the framework, not solving a problem.** The team installs every practice and customers notice nothing. Start from a problem, and add the practice that addresses it.
- **Treating old guidance as obsolete or as sacred.** Both skip the evidence. Compare the guidance with how your service actually behaves.
- **Controls added by hand that automation could provide.** Staff become the control. Move routine checks into pipelines and keep human review for judgment calls.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Use of ITIL | Terms used loosely | Some practices adopted by name | Chosen practices defined and owned | Practices reviewed against evidence | Practices evolve with delivery and data across teams |
| Source discipline | Blog summaries | Owner texts read by a few | Claims labeled by version and verified | Re-verified before decisions | Shared, dated verification log |
| Capability | Certificates only | Practice reviews begin | Capability observed in drills and reviews | Results measured and acted on | Learning shared across the organization and partners |

## Checklist

- [ ] We can state in one sentence what "ITIL" means in our organization.
- [ ] We list the practices we run and the problem each solves.
- [ ] Each practice has a named owner.
- [ ] We label ITIL statements by version and cite the owner for definitions.
- [ ] We judge practices on evidence, such as time to restore and change failure.
- [ ] We separated certification from capability in our planning.
- [ ] Routine controls are built into pipelines where they can be.
- [ ] We re-check the owner's publications before major decisions.

## AI prompts

**Compare our practices with the problems they solve.**

```text
Here is a list of the practices our team runs: [list practices].
For each, ask me what problem it solved when it was introduced and what recent evidence shows it works. Then produce a table: practice, problem, evidence, owner (only what I tell you), and a question to test whether we still need it.
Do not invent facts about ITIL. List what you are unsure of.
```

**Check ITIL claims against owner text.**

```text
Below are statements we have heard about ITIL: [paste statements].
Below is text copied from the owner's published pages: [paste owner text].
For each statement, say whether the owner's text supports it, contradicts it, or is silent, and quote the words exactly. Use no outside knowledge.
List what you are unsure of.
```

**Draft a plain-language explanation for new staff.**

```text
Write a one-page explanation for new starters of how our organization uses ITIL, using only this description of our practice: [paste description].
Keep it under 400 words, avoid jargon, and flag every statement that comes from our description versus general knowledge. Do not add claims about ITIL versions.
End with what you are unsure of.
```

## AI skills

- [itil-5](../../../../skills/itil-5/SKILL.md): use to map practices against the owner's newest guidance, with claims flagged unconfirmed.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): use to assess how far each practice has matured.
- [service-catalog](../../../../skills/service-catalog/SKILL.md): use when the work leads to describing services for customers.

## Key sources

- PeopleCert, ITIL certification pages: the owner's own description of the framework and the certification scheme.
- Wikipedia, "ITIL": history, versions, and ownership changes in summary form.
- Wikipedia, "IT service management": the field ITIL belongs to.
- Wikipedia, "ISO/IEC 20000": the certifiable standard for service management systems, often compared with ITIL.

## References

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Central Computer and Telecommunications Agency — Wikipedia — https://en.wikipedia.org/wiki/Central_Computer_and_Telecommunications_Agency
4. Office of Government Commerce — Wikipedia — https://en.wikipedia.org/wiki/Office_of_Government_Commerce
5. AXELOS — Wikipedia — https://en.wikipedia.org/wiki/AXELOS
6. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
7. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
8. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
