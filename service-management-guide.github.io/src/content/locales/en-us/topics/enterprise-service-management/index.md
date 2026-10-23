# Enterprise Service Management

**Enterprise service management (ESM) applies the practices and tools of IT service management to human resources, facilities, legal, finance, and other functions, so that employees and customers meet one consistent way to ask for help; it works when the other functions own their services, and fails when it is an IT tool pushed on them.**

## Why this matters

Employees ask for things from many corners of an organization: a laptop, a payroll correction, a meeting room, a contract review. Each function often has its own mailbox, its own form, and its own idea of when it will reply. The employee has to know where to go, and no one can see the combined picture of demand.

IT departments have spent decades building ways to receive, track, and fulfil requests: a service desk, a catalog, a ticketing tool, service level targets. Other functions face the same problem and have rarely had the same tools. ESM carries the ideas across. Many organizations extend the IT platform first and then find that the ideas, more than the software, are what matter.

The benefits can be real: one front door, visible queues, shared reporting, and better handoffs between functions, such as when a new employee needs HR, facilities, and IT to act together. The risks are also real: IT's vocabulary may sound foreign to HR, a single tool may fit no one well, and "service management" can become a banner without any change in how work is done. This topic explains what to share, what to keep separate, and how to begin.

## Core concepts

**What ESM is.** The use of service management principles, practices, and tools beyond IT. Wikipedia's article on service governance and related pages discuss the term. It typically involves a shared platform for requests and cases, a catalog of services from each function, knowledge articles, workflows, and reporting.

**Shared services.** Many organizations already consolidate functions such as payroll, procurement, and facilities into shared service centers. ESM is related to the shared services idea, and the two often meet in the same teams and tools. Wikipedia's article on shared services describes the model.

**One front door.** Employees and customers use a single portal or channel to ask for help, and the organization routes the work to the right function. The aim is to spare the person from needing to know the organizational chart. It does not require that the functions merge.

**Services for each function.** Each function describes its services in plain terms: what they provide, who can ask, what is included, how long it normally takes. IT's service catalog is a template, not a rule; see Topic 3.8 — Service Catalog Management.

**Cases, requests, and incidents.** IT distinguishes incidents (unplanned disruption) from requests (a standard ask). Other functions use other words: HR has cases, facilities has work orders, legal has matters. ESM works best when each function keeps its own vocabulary and the platform maps it to a shared structure, rather than forcing every function to say "incident".

**Cross-functional journeys.** Many needs span functions. Starting a job touches HR (contract), IT (accounts, laptop), facilities (desk, pass), and finance (payroll setup). A journey view treats the whole as one value stream (see Topic 1.7 — The Service Value Chain) with an owner, so that no function's delay is hidden.

**Platform and practice.** A ticketing or workflow platform is only the infrastructure. The practice is how each function accepts work, sets priorities, communicates with the person asking, learns from repeated requests, and improves. Buying a platform without changing practice produces a better-looking mailbox.

**Sensitive information.** HR, legal, and finance deal with confidential matters. A shared platform must restrict who sees what, keep records according to law and policy, and be careful about how data is used for analytics and AI. Check the rules that apply in your jurisdiction; this guide gives no legal advice.

**How the lenses fit.** Agile: each function can start with a small number of services and improve with its users. AI: chat assistants and routing can answer routine questions across functions, with careful limits on sensitive topics. Automation: workflows span systems, such as account creation after an HR record is approved. Analytics: shared data shows demand across the organization, with privacy limits.

## Best practices

1. **Start with one cross-functional journey.** Choose a need that already crosses functions, such as starting a new employee, and improve it end to end. A concrete journey builds trust faster than a platform announcement.
2. **Let each function own its services.** HR, facilities, legal, and finance each name a service owner and describe their services in their own words. IT supports the platform and the method; it does not run the other functions.
3. **Use the other function's words.** Keep "case" or "work order" where people use them. Map terms behind the scenes rather than renaming other teams' work.
4. **Agree a small shared core.** Define what every function does: acknowledge requests, give a status, close with the person's confirmation, and ask for feedback. Leave the rest flexible.
5. **Design for privacy from the start.** Decide who may see each type of case, how long records are kept, and who administers access. Review the design with the function's lead and your data protection or privacy officer.
6. **Publish what each service offers.** For each, state who can ask, how long it normally takes, and what the person must provide. Use plain language and the person's view.
7. **Share knowledge across functions.** Common questions, such as "how do I book leave abroad", cross functions. Keep one article with one owner, linked from each relevant service.
8. **Start the portal small.** Launch with a few well-defined services and a way to give feedback, and add more as functions are ready. A large portal full of half-described services erodes trust.
9. **Measure the experience, not just the volume.** Track whether people got what they needed, how long it took from their view, and whether they would return. See Topic 7.7 — Experience and Sentiment Analytics.
10. **Review the platform fit regularly.** One tool may suit IT well and others poorly. Check with each function whether the tool helps, and be willing to adapt or change.

## Questions to discuss with your team

**Which needs do employees have that cross two or more functions, and who owns each journey today?**
This finds where ESM adds value. Typical answers are joiners, leavers, moving house, parental leave, and starting a project. You may find no owner at all. Follow up by choosing one journey and naming an owner.

**How does each function receive requests now, and what do people complain about?**
Collect the actual channels: mailboxes, forms, walk-ups, phone numbers. Ask each function for its top three complaints from the people it serves. Expect inconsistency. Follow up by asking what one shared behavior, such as acknowledging every request, would help most.

**What would HR, facilities, legal, or finance want from a shared platform, and what would they fear?**
Other functions often fear loss of control, loss of confidentiality, and imposed vocabulary. Listen without defending IT's approach. Follow up by agreeing one condition each function sets for taking part.

**Which of the information in our cases is sensitive, and who may see it?**
Privacy and confidentiality are core design questions. Expect uncertainty about who can see what, even inside one function. Follow up by involving the privacy officer and writing down an access rule for the first service.

**Where would AI help in answering routine questions across functions, and where must a person decide?**
AI assistants can answer "how do I…" questions. For matters like discipline or legal advice, a person must decide. Ask where the boundary lies and who owns each AI use. Follow up by choosing a low-risk question set for a trial.

**How will we know ESM improved life for employees, and not only for IT?**
This checks for benefits beyond platform consolidation. Teams may offer cost savings or ticket counts. Ask what an employee would say. Follow up by choosing one experience measure and asking a sample of employees before and after.

## In practice: a service management example

A national environmental agency employs about 2,500 people across a head office and 30 field stations. The IT service desk uses a ticketing tool and a catalog. HR, facilities, and finance each use email. New employees often arrive without a working account, a desk, or a pay record. Each function says it did its part.

The head of IT proposes ESM. Instead of announcing a platform, the service manager asks HR, facilities, and IT to trace the last five starters. The trace shows that HR waited for a signed contract, IT waited for HR to confirm the start date, and facilities was told by phone two days before arrival. The elapsed time from signed contract to full readiness was between 6 and 14 working days.

The three functions agree to one shared "joiner" journey. HR is the journey owner. The existing ticketing platform holds one case with tasks for each function, each task owned by its function and described in its own words. The privacy officer reviews who sees which tasks: IT sees the start date and role but not salary details. Facilities and finance each add two services to the portal and nothing else for the first quarter.

What changes: starters now have an account and a desk on day one in most cases, and managers can see the status of their new hire. What remains hard: field stations sometimes have patchy connectivity, so updates arrive late; finance has a legacy payroll system that cannot take updates from the platform and still needs a manual step; and legal has not yet agreed to join. The service manager records each and agrees to review them with the function leads.

## Four perspectives

### Product and delivery teams

If you build the platform or its integrations, treat each function as a customer with its own services and language. Involve them in design and release in small steps, and respect the data rules that apply to their cases.

### Service and operations teams

Offer your experience, such as how to run a queue, write knowledge, and review repeated requests, without imposing IT's vocabulary. Support function teams as they learn the tool. Keep the shared platform healthy and secure.

### Leadership and governance

Sponsor ESM as a way to improve the employee and customer experience, not as an IT project. Ask for journey owners, privacy review, and experience measures. Resist the urge to force every function onto one process.

### Customers and users

You should have one place to ask and see status, whichever function helps. Tell the organization what is confusing, and say what you need to know when a request spans functions.

## Agile, AI, automation, and analytics

### Agile

Launch services function by function, with each team's users involved in short review cycles, and improve what people actually ask for. Caution: a big-bang rollout across the enterprise repeats the risks of any large change; start with one journey.

### AI

An AI assistant can answer routine, low-risk questions across functions, draft replies for staff to review, and route cases. Give each use an owner and a clear boundary, such as no advice on sensitive personal matters. Caution: assistants trained on mixed data may reveal information from one function to another; test access limits carefully. See Topic 5.3 — AI Service Desk and Virtual Agents.

### Automation

Automate cross-function tasks, such as creating accounts after an approved HR record, and keep a log so that each function can see what was done and reverse it. Caution: a workflow that crosses functions needs clear ownership of failures, or errors will sit between teams. See Topic 6.5 — Self-Service and Automated Fulfillment.

### Analytics

Look at demand by function and journey, time from the person's view, and satisfaction, subject to privacy rules. Caution: combining data across HR, legal, and finance can reveal individuals; decide what may be joined and aggregate before sharing. See Topic 7.7 — Experience and Sentiment Analytics and the *Service Management Metrics* book.

## Common failure modes

- **An IT tool pushed on other functions.** Adoption is grudging and vocabulary clashes. Co-design with each function and let them own their services.
- **A portal with half-described services.** People stop trusting it. Launch fewer services, well described.
- **Ignoring confidentiality.** Sensitive cases are visible to too many people. Design access with the privacy officer before launch.
- **No journey owner.** Each function does its part and the whole fails. Name one owner per cross-functional journey.
- **Counting tickets as success.** Volume rises and experience does not. Measure what people received and how they felt about it.
- **One workflow for everything.** Different needs are squeezed into the same form. Keep a small shared core and let functions differ.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Front door | Separate mailboxes per function | A portal for IT and one other function | One portal with owned services from several functions | Portal usage and experience reviewed | Portal, chat, and phone are consistent across the enterprise |
| Service ownership | IT owns everything | Some functions name owners | Every function owns and describes its services | Owners review outcomes with users | Owners coordinate cross-function journeys and partners |
| Journeys | Handoffs by email | One journey mapped | Main journeys owned and measured | Journeys improved on evidence | Journeys connected across systems and partners |
| Privacy and data | Ad hoc | Rules for sensitive cases | Access, retention, and analytics rules defined | Rules tested and audited | Privacy built into design and automation |

## Checklist

- [ ] We chose one cross-functional journey to improve first.
- [ ] Each participating function owns and describes its services.
- [ ] We agreed a small shared core of behaviors.
- [ ] Privacy and access rules were reviewed with the privacy officer or equivalent.
- [ ] We keep each function's own vocabulary and map it in the platform.
- [ ] We publish what each service offers in plain language.
- [ ] We measure experience as well as volume.
- [ ] AI uses have owners, boundaries, and human review for sensitive matters.

## AI prompts

**Map a cross-functional journey.**

```text
Here is a description of what happens when [event, such as a new employee starts]: [paste description].
List each function involved, what it does, what it waits for, and what it hands on. Write "not stated" where the description is silent. Suggest five questions to ask each function. Do not invent steps.
List what you are unsure of.
```

**Draft a plain-language service description.**

```text
For the service [name] provided by [function], here is what we know: [paste details: who can ask, what is included, normal timing, what the person must provide].
Write a description of no more than 120 words in plain language, aimed at an employee who has never used the service. Do not add promises that are not in the details.
List what you are unsure of.
```

**Check an AI assistant's boundary.**

```text
Our assistant will answer questions for [functions]. Topics we consider low risk: [list]. Topics that need a person: [list].
Write twenty test questions, some low risk, some borderline, some that need a person, and for each state what the correct behavior would be. Do not include real personal data.
List what you are unsure of.
```

## AI skills

- [service-catalog](../../../../skills/service-catalog/SKILL.md): use to describe each function's services for the portal.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): use to trace and improve a cross-functional journey.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): use to understand what each function needs and fears.

## Key sources

- Wikipedia, "Shared services": the organizational model that ESM often joins.
- Wikipedia, "Self-service": background on the idea behind portals.
- Wikipedia, "Service catalog": the idea of describing services for users.
- Wikipedia, "Support ticket": the unit of work most platforms use.

## References

1. Service governance — Wikipedia — https://en.wikipedia.org/wiki/Service_governance
2. Shared services — Wikipedia — https://en.wikipedia.org/wiki/Shared_services
3. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
4. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
5. Support ticket — Wikipedia — https://en.wikipedia.org/wiki/Support_ticket
6. Business process management — Wikipedia — https://en.wikipedia.org/wiki/Business_process_management
7. Human resource management — Wikipedia — https://en.wikipedia.org/wiki/Human_resource_management
8. Facility management — Wikipedia — https://en.wikipedia.org/wiki/Facility_management
9. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
