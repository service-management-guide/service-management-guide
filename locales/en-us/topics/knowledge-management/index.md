# Knowledge Management

**Knowledge management makes what people learn while running services available to the next person who needs it; the approaches that work capture knowledge as a by-product of solving problems, keep it close to the work, review it when it is used, and treat AI search and drafting as helpers over a base that people maintain.**

## Why this matters

Every service team carries knowledge that is not written anywhere: why a setting was chosen, how to restart a fragile component, what a particular customer needs. When a person leaves, goes on holiday, or simply forgets, the knowledge goes with them, and the team discovers its dependence at the worst time: during an incident at night.

Most organizations have tried to fix this with documentation drives. Staff are told to write everything down. A knowledge base fills with articles nobody reads or trusts, because they are outdated, long, or hard to find. After a few months the effort fades, and people go back to asking colleagues.

Better approaches treat knowledge as part of the work, not a separate task. Capture happens while solving a problem, in a few lines, by the person who solved it. Articles that help get used and improved; articles that fail get fixed or deleted. The knowledge base sits in the tools people already use: the service desk, the incident channel, the code repository. This topic explains those ideas, including the Knowledge-Centered Service (KCS) method, and the part AI now plays in searching and drafting. It relates to the service desk (Topic 3.1 — Service Desk), problem management (Topic 3.3 — Problem Management), and AI skills (Topic 5.7 — AI Skills and Prompts).

## Core concepts

**Data, information, knowledge.** Data are facts; information is data in context; knowledge is information that a person can use to act. An error code is data, an article that explains what it means is information, and knowing which of three possible causes is likely at 3 a.m. is knowledge. A knowledge base can hold information and pointers; it cannot hold all knowledge. Wikipedia's article on knowledge management describes the field.

**Explicit and tacit knowledge.** Explicit knowledge can be written down: procedures, checklists, diagrams. Tacit knowledge lives in practice and judgment and is hard to articulate. Wikipedia describes tacit knowledge, a term associated with Michael Polanyi. Both matter. Writing helps with the explicit; conversation, pairing, and shadowing help with the tacit.

**Knowledge base.** A collection of articles, guides, and answers, searchable by users and staff. Wikipedia describes knowledge bases and wikis. It may be internal, for staff, or external, for customers. Quality depends on maintenance more than on the tool.

**Runbooks.** Step-by-step instructions for handling a known situation, such as restarting a service or responding to a common alert. Wikipedia's article on runbooks describes them as compilations of procedures for system operations. A good runbook is short, tested, and linked to the alert that triggers it. See Topic 6.6 — Runbook Automation and Auto-Remediation.

**Knowledge-Centered Service (KCS).** A method published by the Consortium for Service Innovation. Its main ideas are: capture knowledge as you solve problems, in the workflow; reuse and improve articles as you use them; make it safe and normal for everyone to contribute; and evolve the knowledge base by demand rather than by upfront plan. Its description includes practices such as "solve loop" and "evolve loop". Check the Consortium's current guidance for details.

**Capture in the workflow.** The best time to write an article is when you have just solved the problem. A short note, with the symptom, the cause, and the fix, in the same tool as the ticket, takes minutes. Writing it later, from memory, takes more time and is often skipped.

**Reuse as a signal.** When an article is used to solve a problem, link it to the ticket. Counting links shows which articles help, and which are never used. If someone uses an article and it fails, they should fix or flag it right then.

**Article quality.** A good article has a clear title in the words users use, a short statement of the symptom or question, the cause where known, the steps, how to check that it worked, and who to ask if it did not. It is short and kept in step with the system.

**Documentation as part of the repository.** For engineering teams, keeping documentation next to code, in plain text such as Markdown, and reviewing changes together with code keeps them aligned. Wikipedia's article on Markdown describes the format. Pull requests that change behavior also change the docs.

**Decision records.** Short notes that record why a significant decision was made, what alternatives were considered, and what was known at the time. They help new team members and future reviews understand the reasoning.

**Bus factor.** The number of people who would need to be lost before a project stalls for lack of knowledge. Wikipedia describes the bus factor, also called the lottery factor. A bus factor of one is a risk. Spreading knowledge through pairing, rotation, and sharing raises it.

**Knowledge transfer.** Moving knowledge from one person to another, through handovers, pairing, training, and shadowing. Wikipedia describes knowledge transfer. Make time for it, especially when someone is leaving.

**Findability.** Even good content is useless if people cannot find it. Titles, tags, search tuning, and links from alerts and tickets matter. Wikipedia's articles on search engines and information overload describe related problems.

**AI and retrieval.** AI assistants can search a knowledge base, summarize articles, and draft new ones. A common pattern, retrieval-augmented generation, retrieves relevant passages and asks a model to answer using only those. Wikipedia describes the idea. The assistant's answers are only as good as the base it reads, and it can still err. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

**Governance.** Decide who owns the knowledge base, how articles are reviewed, how sensitive content is controlled, and when old content is archived. Keep rules light.

**How the lenses fit.** Knowledge management is continuous improvement at the level of individual articles. AI helps users find, summarize, and draft, under review. Automation links alerts to runbooks and tickets to articles. Analytics shows which articles are used, which fail, and which gaps are searched.

## Best practices

1. **Capture while solving.** Write a short article or update one as part of closing a ticket. Make it a normal step, not extra work.
2. **Write for the reader at 3 a.m.** Use the words people search for, short steps, and a check that the fix worked. Put the most useful part first.
3. **Link articles to tickets and alerts.** When an alert fires, link to the runbook. When an article solves a ticket, link them. The links show what is useful.
4. **Fix or flag on use.** If an article is wrong or unclear when you use it, correct it or mark it for review immediately. Make it easy to do.
5. **Make contributing safe.** Allow everyone to edit, with light review for sensitive or high-impact content. Thank contributors and do not punish mistakes.
6. **Prune regularly.** Review articles that have not been used for a long time, and archive them. A smaller, trusted base is better than a large, doubtful one.
7. **Keep engineering documentation with the code.** Review it with changes, and generate what you can, such as API references, from the source.
8. **Record important decisions.** Write short decision notes with context, options, and reasons. Link them to the code or design they concern.
9. **Spread knowledge deliberately.** Use pairing, rotation, short talks, and shadowing to move tacit knowledge. Check bus factor for each critical service.
10. **Treat AI answers as drafts.** Let AI search and suggest, with sources shown, and have a person confirm articles before they become official. Track bad answers and fix the sources.

## Questions to discuss with your team

**What did we last have to ask someone to explain that should have been written down?**
Start with a real case. Expect "how do we restart X" or "why is Y set this way". Ask what stopped it being written. Follow up by writing it now, together.

**Which articles do we trust, and which do we avoid?**
Trust varies by team and topic. Ask why. Expect "outdated" and "too long". Follow up by choosing three untrusted articles to fix or delete.

**How many of us know how to restore our most critical service, and what happens if they are away?**
This tests bus factor. Count honestly. Expect one or two names. Follow up by planning a pairing session or a rehearsal that spreads the knowledge.

**Where do we write things down today, and can we find them?**
List the places: chat, wiki, tickets, repositories, personal notes. Try finding a specific answer together. Follow up by agreeing a home for each kind of knowledge.

**How easy is it for anyone in the team to fix an article they find wrong?**
Barriers include permissions, review delays, and fear of criticism. Ask what would make it a thirty-second task. Follow up by removing one barrier.

**How are we using AI to find or write knowledge, and how do we check what it says?**
Ask who uses AI tools for knowledge work and what they trust. Expect uncritical use in some places. Follow up by agreeing that answers cite articles, and by sampling answers against them.

## In practice: a service management example

A national meteorological service's infrastructure team of eight runs forecast data pipelines. Two senior engineers hold most of the knowledge of the oldest pipeline, which processes satellite data. When one of them takes three weeks of leave, a failure on the pipeline takes two days to resolve because the junior on call cannot find the restart procedure, which is in an email thread from six years ago.

The team lead decides to use a light version of KCS. Anyone who solves a problem writes a few lines in the ticket's solution field: symptom, cause, fix, check. A weekly ten-minute session reviews the new notes and promotes useful ones to runbooks in the team's repository. Each alert links to its runbook. The two senior engineers agree to pair with juniors on a rota and to record two short videos of walking through the pipeline.

After three months, there are 40 runbooks, and the team can see in the ticket tool which are linked to resolved incidents. On the next failure the on-call junior finds the runbook through the alert, follows it, and restores the pipeline in 25 minutes. A search assistant trialed on the repository answers one question wrongly, quoting a section of a runbook that was superseded by a later edit. The lead adds a rule that superseded sections are removed, not struck through.

What changes: the pipeline no longer depends on two people, and juniors feel more confident. What remains hard: the senior engineers still find that writing takes time they do not have; some runbooks are tested only by reading; and the oldest pipeline has components nobody understands fully, which no document will fix. The lead plans a rehearsal for the oldest pipeline and schedules a design review of the components that nobody understands.

## Four perspectives

### Product and delivery teams

Keep documentation with the code and review it with changes. Write decision notes and runbooks as part of the work, and share what you learn with operations.

### Service and operations teams

Capture solutions as you work, fix articles when you use them, and link alerts to runbooks. Share tacit knowledge through pairing. Tell owners about gaps you find.

### Leadership and governance

Make writing and reading knowledge a normal part of the job, not a side task. Fund time for pairing and rehearsals. Ask for the bus factor of critical services. Do not reward volume of articles.

### Customers and users

Good articles let you solve problems yourself and get answers faster. Tell the provider when an article is confusing or wrong, and what you were trying to do.

## Agile, AI, automation, and analytics

### Agile

Evolve the knowledge base in small steps, driven by use, with users and staff giving feedback. Review gaps in a short regular session. Caution: avoid big documentation projects; they produce content that is out of date by launch.

### AI

AI can search the base, summarize articles, answer questions with citations, and draft articles from tickets and chats, with a person approving anything that becomes official. Name an owner. Caution: an assistant can answer confidently from outdated or wrong content; show sources, and track corrections. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Link alerts to runbooks, suggest articles on new tickets, flag stale content, and create draft articles from closed tickets, with a human edit. Caution: automatic suggestions can fill the base with low-quality drafts; limit what is published without review. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Track article use, links to resolved tickets, searches with no result, and time since last review. Caution: counts of articles created reward volume, and use counts reward popular topics over critical rare ones; combine with feedback and sampling. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Documentation drives.** A burst of writing is followed by decay. Capture knowledge as part of the work.
- **Long articles.** Nobody reads them. Write short, task-focused ones.
- **Stale content.** Trust erodes. Fix or flag on use, and prune.
- **Knowledge in chat only.** It cannot be found. Move useful answers to the base.
- **Bus factor of one.** A person's absence stops work. Spread knowledge deliberately.
- **AI answers unchecked.** Wrong advice spreads. Show sources and sample answers.
- **Writing as a punishment.** People avoid it. Make it normal and recognize it.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Capture | In heads and chat | Some articles after incidents | Capture is a normal step in the workflow | Capture quality sampled and improved | Capture automated with human review |
| Findability | Ask a colleague | A searchable base | Alerts and tickets link to articles | Search gaps drive content | Retrieval and assistants integrated across tools |
| Quality | Unreviewed | Occasional cleanup | Fix-or-flag on use, regular pruning | Quality measured by use and results | Quality improved continuously across the organization |
| Spread | One expert | Some pairing | Bus factor checked for critical services | Rehearsals and rotation planned | Knowledge shared across teams and partners |

## Checklist

- [ ] People capture solutions as part of closing tickets.
- [ ] Alerts link to runbooks.
- [ ] Articles are short and written in the words users search for.
- [ ] Anyone can fix an article they find wrong, with light review.
- [ ] We prune unused or stale articles regularly.
- [ ] Engineering documentation lives with the code and is reviewed with changes.
- [ ] We know the bus factor of each critical service.
- [ ] AI answers cite sources and are sampled for correctness.

## AI prompts

**Draft an article from a resolved ticket.**

```text
Here is a resolved ticket with notes, personal data removed: [paste].
Draft a short knowledge article with: a title in the words a user would search, the symptom, the cause (only if stated), the steps, how to check it worked, and who to ask if it did not. Mark any gap with [missing] and do not fill it.
List what you are unsure of.
```

**Review an article for a reader at night.**

```text
Here is a runbook: [paste].
List steps that are ambiguous, steps that assume knowledge not stated, and anything that could cause harm if followed literally. Do not rewrite the runbook.
List what you are unsure of.
```

**Find gaps from searches.**

```text
Here are search terms that returned no result or were followed by a ticket: [paste list]. Here are our article titles: [paste list].
Group the search terms into themes, and for each theme say whether an existing article title looks related or whether a new article is needed. Do not draft articles.
List what you are unsure of.
```

## AI skills

- [runbook](../../../../skills/runbook/SKILL.md): use to write and test runbooks.
- [decision-records](../../../../skills/decision-records/SKILL.md): use to record why decisions were made.
- [architecture-decision-record](../../../../skills/architecture-decision-record/SKILL.md): use for design decisions that others will need to understand.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): use to design prompts that read from a knowledge base and cite sources.

## Key sources

- Consortium for Service Innovation, Knowledge-Centered Service (KCS): the main practical method for capturing knowledge in support work.
- Ikujiro Nonaka and Hirotaka Takeuchi, *The Knowledge-Creating Company* (1995): on tacit and explicit knowledge.
- Wikipedia, "Knowledge management" and "Tacit knowledge": neutral overviews.
- Wikipedia, "Runbook": background on operational procedures.

## References

1. Knowledge management — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_management
2. Knowledge base — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_base
3. Tacit knowledge — Wikipedia — https://en.wikipedia.org/wiki/Tacit_knowledge
4. Wiki — Wikipedia — https://en.wikipedia.org/wiki/Wiki
5. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
8. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
9. Knowledge transfer — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_transfer
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
