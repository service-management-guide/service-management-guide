# AI Service Desk and Virtual Agents

**Virtual agents and AI triage can answer routine questions, route and prepare tickets, and draft replies; they help when they are grounded in reviewed knowledge, honest about what they do not know, easy to leave for a person, and measured on whether users got what they needed.**

## Why this matters

Service desks have long wanted to answer simple questions faster and more cheaply. Chatbots were the first attempt: scripted menus that frustrated users. Newer assistants built on large language models are far more fluent, and they can handle open questions in plain language. That makes them much more useful, and also far more able to do harm when they are wrong, because their wrong answers sound right.

For users, a virtual agent can be a quick route to an answer at any hour. For desk staff, AI triage and drafting can take over sorting and writing so that they spend time on harder cases. For the organisation, both can cut cost per contact. These benefits are real, and they depend on the assistant being used for the right questions, being kept accurate, and not trapping people who need a human.

The risks have a human face. A user who is locked out of a system before a deadline, a patient-facing nurse who needs a quick fix, or a person who is distressed and gets a cheerful script: each is badly served by an assistant that cannot recognise when to hand over. This topic describes where virtual agents and AI triage fit, how to design and test them, and how to measure them honestly. It builds on the service desk (Topic 3.1 — Service Desk), service requests (Topic 3.6 — Service Request Management), and knowledge (Topic 3.9 — Knowledge Management), and relies on the ideas in Topic 5.1 — AI in Service Management and Topic 5.6 — AI Governance, Risk, and Compliance.

## Core concepts

**Virtual agent.** Software that converses with users by text or voice to answer questions or carry out tasks. Wikipedia's articles on chatbots and virtual assistants describe them. In a service desk, a virtual agent is often the first point of contact, with a route to a person.

**Rule-based versus AI-based.** Early chatbots followed scripts or matched keywords. AI-based assistants interpret natural language and can compose answers. Wikipedia describes conversational user interfaces and natural language understanding. Scripts are predictable and limited; language models are flexible and less predictable. Many production systems combine them: scripted flows for sensitive tasks, language models for open questions.

**Intents and flows.** An intent is what the user wants to do, such as "reset my password" or "order a laptop". Many assistants identify the intent and then run a defined flow with checks, which is safer for actions. For open questions, the assistant retrieves relevant articles and answers from them.

**Grounding.** Answering from specified, reviewed sources, usually knowledge articles, and showing them, instead of from the model's general memory. Wikipedia describes retrieval-augmented generation. Grounding reduces invented answers but does not remove them, and it makes the quality of your knowledge base the limit of the assistant's quality. See Topic 3.9 — Knowledge Management.

**Deflection and resolution.** Deflection means that a user got an answer from the assistant and did not contact a person. Resolution means the user's problem was actually solved. They differ: a user who gives up and goes elsewhere is deflected, not resolved. Measure resolution through follow-up, repeat contacts, and feedback.

**Handover.** Passing the conversation to a person, with context, when the assistant cannot help or the user asks. Wikipedia describes handover in general. A good handover carries the history, so the user does not repeat themselves. A bad one drops them into a queue. Make "talk to a person" always visible.

**Triage and routing.** AI classifies incoming tickets by type, urgency, and team, and routes them. Wikipedia describes triage. It can also detect likely major incidents from a burst of similar contacts. Errors send work to the wrong queue; a rate of re-routing is a good measure.

**Drafting and summarising for agents.** AI can summarise long ticket threads, suggest articles, and draft replies for the agent to edit. This keeps a person in control while saving time. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

**Sentiment and urgency detection.** Techniques that infer the user's mood or urgency from text. Wikipedia describes sentiment analysis. It can prioritise an upset user or a message that mentions a deadline. It is imperfect, especially across languages and cultures, so use it as a hint.

**Voice and multilingual support.** Speech recognition and speech synthesis allow voice interaction; machine translation allows support in more languages. Wikipedia describes these technologies. Quality varies by language and accent, and users with less common languages may be served worse. Test with real speakers.

**Accessibility and inclusion.** Assistants must work for people with disabilities and for those who are not confident with technology. Wikipedia describes accessibility and the Web Content Accessibility Guidelines (WCAG). A chat window that screen readers cannot use excludes users. The digital divide, also described on Wikipedia, reminds us that not everyone prefers or can use chat.

**Identity and authority.** An assistant that can perform actions, such as resetting a password, must verify who is asking. Never let an assistant grant access on a claim alone. See Topic 3.6 — Service Request Management and Topic 3.13 — Information Security Management.

**Honesty about being a machine.** Users should know they are talking to an AI, and the assistant should not pretend to be human or to have feelings it does not have. Some laws require disclosure; check the rules that apply to you. Wikipedia's article on dark patterns describes design practices that trick users, such as hiding the route to a person; avoid them.

**Security of assistants.** Assistants face attacks such as prompt injection, in which text in a message or document tries to override the assistant's instructions. Wikipedia describes prompt injection. Do not give an assistant powers that a hostile message could misuse, and treat user input and retrieved documents as untrusted.

**Privacy.** Conversations may contain personal data. Decide what is stored, for how long, who can read it, and whether it trains any model. Wikipedia describes personal data and the General Data Protection Regulation as one legal framework. Take legal advice.

**How the lenses fit.** Virtual agents are the visible face of AI, automation, and analytics at the desk. Agile practice suggests starting with a few topics and widening. Automation completes tasks behind the conversation. Analytics tells you what users ask and where the assistant fails.

## Best practices

1. **Choose topics where an assistant can do well.** Start with frequent, simple, low-risk questions that have clear answers, such as how to connect to the wireless network. Avoid sensitive or high-stakes topics at first.
2. **Ground answers in reviewed articles.** Use retrieval from the knowledge base and show the source. If no source supports an answer, the assistant should say so and offer a person.
3. **Make the route to a person obvious.** Show a clear "talk to a person" option at all times, and hand over with the conversation attached. Never block it.
4. **Verify identity for actions.** For anything that changes access or data, use strong checks outside the chat, and limit what the assistant can do. Log every action.
5. **Tell users it is an AI.** State this at the start, say what it can and cannot help with, and avoid pretending to be human.
6. **Build a test set and run it.** Create realistic questions from real tickets, including ones the assistant should decline and ones that try to manipulate it. Run the set before launch and after each change.
7. **Read real conversations.** Review a sample of conversations each week, especially those where the user left or asked for a person. Use them to fix articles, flows, and instructions.
8. **Measure resolution, not just deflection.** Track follow-up contacts, user ratings, handovers, and complaints. Compare with a baseline.
9. **Include everyone.** Test with screen readers and with different languages and accents. Keep other channels available, such as phone and email.
10. **Own it as a service.** Name an owner, a budget, a schedule for improvements, and a plan for what to do when the underlying model or vendor changes.

## Questions to discuss with your team

**Which questions do users ask most, and which of those could an assistant answer reliably from our existing articles?**
Use ticket data. Expect a short list of repetitive questions. Check the articles for accuracy and completeness. Follow up by choosing five questions for a first trial.

**What should the assistant never do or say, and how will we test that?**
List boundaries: no access changes without verification, no advice on legal or medical matters, no promises about timing. Expect disagreement about edges. Follow up by turning each boundary into a test.

**When a user is frustrated or asks for a person, what happens, and how long does it take?**
Try it yourself. Expect gaps in context and delays. Follow up by agreeing a maximum time and a standard handover format.

**How will we know that users got the answer they needed, not just that they stopped chatting?**
Ask for the measure. Expect "deflection rate". Follow up by agreeing a follow-up question, a repeat contact check, and a sample review.

**Who can use this assistant, and who might it fail?**
Think of people with disabilities, language differences, or low confidence. Expect that some groups were not considered. Follow up by testing with a few real users from those groups.

**What data do conversations contain, where does it go, and who can read it?**
Walk through the data flow. Expect surprises about vendors and retention. Follow up by writing down the flow and asking the privacy officer to review it.

## In practice: a service management example

A regional health service's IT desk supports about 12,000 clinical and administrative staff. Calls peak at shift changes, when clinicians need logins and printing, and the average wait is nine minutes. The service manager proposes a virtual agent in the staff portal and on a messaging channel.

The team starts narrow. They take the 15 most common "how do I" questions from six months of tickets, review the matching articles with clinical users, and rewrite eight that are unclear. The assistant answers only from those articles. For password resets it does not act on its own; it links to the identity system's reset flow, which uses its own verification. A banner states that it is an AI assistant, and a "talk to a person" button hands over the conversation, with a summary, to a desk agent.

Before launch, the team builds 80 test questions, including ones about topics outside the 15, such as clinical advice, which the assistant must decline, and attempts to make it reveal its instructions. The first version fails nine tests, mostly by answering outside its scope. The team tightens the instructions and adds a rule that anything unmatched goes to a person. In the first month, the assistant handles about 1,400 conversations; about 40 percent end without a ticket, and 12 percent are handed to an agent. The manager reads 100 conversations each week. She finds that users often ask about a recently changed login screen that the articles do not yet describe, and the team updates them.

What changes: waiting time at peaks falls, and agents spend less time on repeat questions. What remains hard: night-shift staff in some wards have poor connectivity and keep phoning; the assistant struggles with questions in two languages used by many staff, and the team has not yet found an adequate test method; and the vendor's pricing grows with conversation volume. The manager adds translated articles and a quarterly cost review.

## Four perspectives

### Product and delivery teams

Provide clear articles and release notes for your changes, since the assistant can only answer what is written. Build flows that the assistant can call safely, with their own identity checks.

### Service and operations teams

Own the quality of the assistant: read conversations, fix articles, and improve flows. Handle handovers well, and report patterns to product and service owners.

### Leadership and governance

Set the boundaries, fund the knowledge work and testing, and ask for resolution measures, not just deflection. Make sure there is always a route to a person. Check data and legal questions.

### Customers and users

You should know you are talking to an AI, be able to leave for a person at any time, and not be asked to repeat yourself. Tell the provider when an answer was wrong or unhelpful.

## Agile, AI, automation, and analytics

### Agile

Start with a few topics, release often, learn from real conversations, and widen in steps. Involve users and agents in reviewing what to add. Caution: adding many topics quickly without testing multiplies wrong answers; add in small, tested groups.

### AI

Assistants need an owner, a test set, grounded answers, and sampled review. Decide what the AI may say and do, and where a person must decide. Caution: tuning instructions to pass tests can make assistants brittle; refresh the test set with new real questions. See Topic 5.1 — AI in Service Management.

### Automation

Connect the assistant to defined flows for routine requests, with verification, logs, and limits, so that it triggers actions without improvising them. Caution: an assistant that can act on a persuasive message is a target; keep powers narrow and verify identity out of band. See Topic 6.5 — Self-Service and Automated Fulfilment.

### Analytics

Look at questions asked, answered, declined, handed over, and abandoned, user ratings, repeat contacts, and cost per resolved contact. Caution: high deflection can mean users gave up, and ratings come from a small and self-selected group; combine with sampled conversations. See Topic 7.7 — Experience and Sentiment Analytics and the *Service Management Metrics* book.

## Common failure modes

- **No way out.** Users loop with a bot. Always offer a person, with context.
- **Answers from memory.** The model invents steps. Ground in reviewed articles and decline when unsure.
- **Deflection as success.** Users leave unhelped. Measure resolution and repeat contacts.
- **Actions without verification.** Access is granted on a claim. Verify out of band and log.
- **Hidden bot.** Users think they are talking to a person. Say it is an AI.
- **Excluded users.** Screen readers or languages fail. Test with real users and keep other channels.
- **Stale knowledge.** The assistant quotes old articles. Link updates to changes and review samples.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Scope and design | Anything the vendor offers | A few topics | Defined topics, boundaries, and flows | Scope tuned from conversation data | Scope coordinated across functions and channels |
| Grounding and knowledge | Model memory | Some articles | Reviewed articles with sources shown | Knowledge updated from conversations | Knowledge and assistant improved together continuously |
| Handover and inclusion | Hidden or poor | Handover exists | Visible handover with context, accessibility tested | Handover and inclusion measured | Experience consistent across channels, languages, and abilities |
| Measurement | Volume only | Deflection | Resolution, repeat contacts, and ratings | Samples and trends reviewed regularly | Outcomes linked to cost and experience across services |

## Checklist

- [ ] We chose a small set of suitable topics for the assistant.
- [ ] Answers are grounded in reviewed articles and show sources.
- [ ] A visible "talk to a person" option hands over with context.
- [ ] Identity is verified outside the chat for any action.
- [ ] Users are told that it is an AI.
- [ ] We have a test set and run it before and after each change.
- [ ] We read a sample of conversations each week.
- [ ] We tested accessibility and the languages our users speak.

## AI prompts

**Draft test questions from tickets.**

```text
Here are anonymised ticket titles and summaries from the past month: [paste]. Our assistant is allowed to answer these topics: [list].
Write 40 test questions based on the tickets: 25 inside the topics, 10 outside them that the assistant should decline, and 5 that try to make it ignore its rules. State the correct behaviour for each. Do not include real personal data.
List what you are unsure of.
```

**Review conversations for failure patterns.**

```text
Here are transcripts of conversations where the user asked for a person or left unhelped, with personal data removed: [paste].
Group them into up to six patterns, count each, quote a short example, and list a possible fix to investigate. Do not blame the user.
List what you are unsure of.
```

**Write assistant instructions for review.**

```text
Our assistant helps staff of [type of organisation] with [topics]. It must never: [list]. It must always: [list, such as offer a person and cite sources].
Draft instructions of under 250 words for the assistant, in plain language, including what to say when it does not know. Do not invent capabilities or sources.
List what you are unsure of.
```

## AI skills

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): use to design and test assistant instructions.
- [service-catalogue](../../../../skills/service-catalog/SKILL.md): use to define what the assistant can help users request.
- [survey-design](../../../../skills/survey-design/SKILL.md): use to design user feedback that measures resolution.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): use to gather feedback from users and agents.

## Key sources

- W3C, Web Content Accessibility Guidelines (WCAG): the international standard for accessible web content, relevant to chat interfaces.
- NIST, AI Risk Management Framework: a structure for identifying and managing AI risks.
- Wikipedia, "Chatbot" and "Virtual assistant": overviews of the technologies.
- Wikipedia, "Prompt injection": background on a main security risk.

## References

1. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
2. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
3. Conversational user interface — Wikipedia — https://en.wikipedia.org/wiki/Conversational_user_interface
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
6. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
7. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
8. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
9. Dark pattern — Wikipedia — https://en.wikipedia.org/wiki/Dark_pattern
10. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
11. Web Content Accessibility Guidelines (WCAG) overview — W3C — https://www.w3.org/WAI/standards-guidelines/wcag/
