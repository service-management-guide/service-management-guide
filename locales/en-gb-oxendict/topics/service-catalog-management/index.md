# Service Catalogue Management

**A service catalogue (ITIL's "service catalogue") is a product backlog turned inside out: a maintained, user-facing description of what the provider offers, with a technical view behind it showing how each service is built; it earns its place only if people use it to find, ask for, and understand services.**

## Why this matters

Ask a typical user what their IT or HR department offers and you will often get a shrug. Services exist, but nobody has described them in a way a user can find or understand. Users ask colleagues, use the wrong channel, or build their own solutions. Providers, in turn, cannot say what they offer, who owns it, or what it costs, and are surprised by demand for things they did not know they supported.

A service catalogue fixes this by listing services in the user's language, with the information a user needs to decide and ask: what the service does, who can use it, how to request it, how long it takes, and what it costs. Behind that view sits a technical one, which links each service to the components, teams, and suppliers that deliver it, and to the agreements that govern it. Together they connect what the user sees to what the provider runs.

Catalogues can fail in two opposite ways. An empty, rarely updated catalogue is ignored. A bloated one with hundreds of items in technical language is unusable. This topic explains the two views, how to build a catalogue that people use, and how to keep it alive. It is closely related to service request management (Topic 3.6 — Service Request Management), service level management (Topic 3.7 — Service Level Management), and configuration management (Topic 4.4 — Configuration Management).

## Core concepts

**Service catalogue or service catalogue.** ITIL uses the British spelling "service catalogue". This guide uses "service catalogue" after this first mention. Wikipedia describes a service catalogue as a list of services that an organization provides, often to its employees or customers.

**Customer-facing view.** A description of services as users understand them, such as "Email and calendar", "Laptop for new starters", or "Payroll queries". It states what the service is, who can use it, how to ask, expected time, cost where relevant, and where to get help. This is the part users meet.

**Technical view.** A description of how services are built and supported: the components, infrastructure, applications, teams, suppliers, and agreements behind each. It helps the provider understand dependencies and impact, for instance which services are affected if a database fails. It is related to a configuration management database; see Topic 4.4 — Configuration Management.

**Service portfolio.** The full set of services under management, including those being developed, those live in the catalogue, and those being retired. The catalogue is the live part of the portfolio. Wikipedia's article on application portfolio management is a related idea for software. See Topic 2.8 — Product and Service Ownership.

**Service offering.** A formal description of one or more services, possibly with different options, such as standard or premium support. Offerings help users pick what suits them and help providers understand demand and cost.

**Catalogue item and request.** A catalogue item is what the user can order or use. Where the item is requestable, it links to a request model (see Topic 3.6 — Service Request Management). Some items are informational, such as "How to connect to the wireless network".

**Taxonomy and findability.** Users find things by browsing categories or by searching. Wikipedia's articles on taxonomy and information architecture describe how to organize information. Categories should reflect how users think, not how the organization is structured. A good test is to ask users where they would look for a given item.

**Plain language.** Descriptions should be short and clear, avoiding jargon and acronyms. Wikipedia's article on plain language describes the principles. Test descriptions with people who are new to the service.

**Ownership.** Each service has a named owner who maintains its entry and is accountable for its quality. Without owners, entries decay. See Topic 2.8 — Product and Service Ownership.

**Catalogue as backlog.** Treat the catalogue as a living product. Entries are added, improved, merged, and retired based on demand and feedback. A backlog of catalogue improvements, reviewed regularly, keeps it current. This mirrors the product backlog idea; see Wikipedia's article on product backlogs.

**Costs and charging.** Where services are charged, the catalogue shows the price or the cost allocation. Even where there is no charge, showing the cost raises awareness. See Topic 4.5 — Financial Management and FinOps.

**Beyond IT.** Many organizations extend the catalogue to HR, facilities, and other functions. See Topic 1.9 — Enterprise Service Management.

**Search and AI.** Users increasingly search or ask a chat assistant instead of browsing. Catalogue content must be clear and structured so that search and assistants can find it. AI can help match a user's description to a catalogue item.

**How the lenses fit.** The catalogue is a continuous improvement product: update entries from real questions. AI can draft entries, suggest categories, and help users find services, under review. Automation connects the catalogue to fulfilment and to the configuration data. Analytics shows what is used, searched for, and abandoned.

## Best practices

1. **Start with the top requests and questions.** List the twenty things users ask for most. Describe those first. A small, useful catalogue beats a large, empty one.
2. **Describe each service in the user's terms.** Write a short summary, who it is for, how to ask, expected time, cost, and where to get help. Avoid internal names and acronyms.
3. **Name an owner and a review date.** Show who owns the entry. Review each entry at least yearly, and when the service changes.
4. **Organize by how users think.** Test categories with users, such as a card sort or a search log. Change them when the evidence says to.
5. **Link to fulfilment.** Where a service can be requested, connect the entry to the request form and status tracking. A catalogue that does not lead to action is a brochure.
6. **Keep a technical view for the provider.** Record, for each service, the components, teams, suppliers, and agreements behind it. Use it for impact analysis and planning.
7. **Show costs and options.** State what a service costs or what it consumes, and describe options, so that users can choose with information.
8. **Watch what users search for.** Review search terms that return nothing or the wrong thing, and add or rename entries to match.
9. **Retire and merge.** Remove services that are no longer offered. Combine near duplicates. Mark services that are changing.
10. **Treat the catalogue as a product.** Give it an owner, a backlog, and regular feedback from users. Measure use, and improve what is not used.

## Questions to discuss with your team

**If a new employee asked what we offer, could we answer without looking it up?**
This tests whether services are known and described. Expect partial answers. Ask for a list from three people and compare. Follow up by choosing the top ten and writing them down.

**Which of our catalogue items do users never open, and which do they open and then call us?**
Use data. Items that are opened and abandoned suggest unclear descriptions. Items never opened may be redundant. Follow up by choosing three entries to rewrite or retire.

**What do users type into search that returns nothing useful?**
Search logs reveal vocabulary differences. Expect plain words that do not match internal names. Follow up by adding aliases or new entries for the top five failed searches.

**Who owns each service entry, and when was it last checked?**
Ownership gaps and stale entries are common. Ask for dates. Follow up by assigning owners and a review cycle.

**How does our technical view connect to what users see, and could we say which services are affected by a given failure?**
This tests the link between views. Try it for a recent incident. Expect manual work. Follow up by choosing one critical service and mapping its dependencies.

**How could AI help users find services and help us keep entries current, and what must a person check?**
AI can match a user's description to entries and draft updates from tickets. It can also point users to the wrong service. Ask who owns it and how mismatches are found. Follow up by testing a matcher on a sample of real questions.

## In practice: a service management example

A national tax authority's internal IT department has a service catalogue with 340 items, most written by the engineers who built the services. Staff use the service desk telephone instead, and the desk spends much of its time pointing callers to services that already exist.

The service manager asks a group of fifteen staff from different departments to find five things in the catalogue: a way to book a video meeting room, how to get a second monitor, how to join a project mailing list, how to get access to a case system, and how to report a lost phone. Only two succeed. The catalogue uses terms such as "audio-visual conferencing endpoint provisioning" and "peripheral equipment".

The team reviews six months of desk contacts and ranks the top 30 request topics. They rewrite those entries in plain language, with a short description, who can ask, how long it takes, and a link to the form. They merge 90 entries into 40, retire 60 that are no longer offered, and add search aliases such as "second screen" for monitors. Each entry shows an owner and a review date. A chat assistant is trialed to point users to entries, with a link to a person when it cannot.

What changes: the same test group now finds four of five items, and the desk's "where do I find" contacts fall. What remains hard: the technical view is incomplete, so impact analysis still relies on tribal knowledge; the remaining 240 entries are unreviewed; and owners of some services say they have no time to keep entries current. The manager sets a rule that entries not reviewed within a year are marked "unverified" and deprioritized in search.

## Four perspectives

### Product and delivery teams

Describe the services you build for users, and keep the entries current when you change them. Provide the technical information that links your components to the services they support.

### Service and operations teams

Maintain the technical view and use it in incidents and changes. Watch what users search and ask, and feed gaps back to owners. Help keep fulfilment links working.

### Leadership and governance

Ask for a catalogue that users find useful, with owners and review dates. Fund its upkeep. Use it to see what is offered, what it costs, and what is being retired.

### Customers and users

You should be able to find what is available, understand it, and ask for it without knowing the organization chart. Tell the provider what you could not find or understand.

## Agile, AI, automation, and analytics

### Agile

Treat the catalogue as a backlog: improve the most-used entries first, in small steps, with user feedback. Review it regularly with stakeholders. Caution: do not build the whole catalogue before launch; a small, useful start will teach you more.

### AI

AI can draft entries from existing documents, suggest categories and aliases, and help users find services in chat. Each use needs an owner, and a person should approve published text. Caution: an assistant that guesses an entry that does not exist misleads users; require it to cite catalogue entries. See Topic 5.3 — AI Service Desk and Virtual Agents.

### Automation

Connect the catalogue to request forms, approvals, and fulfilment, and generate parts of the technical view from configuration data. Caution: automated import of technical data can fill the catalogue with machine names; keep a human edit step for the user-facing text. See Topic 6.5 — Self-Service and Automated Fulfilment.

### Analytics

Track views, searches, searches without results, requests made, and abandoned requests. Caution: popularity is not value; a rarely used item may be critical for a few people. Combine counts with feedback. See Topic 7.7 — Experience and Sentiment Analytics and the *Service Management Metrics* book.

## Common failure modes

- **A catalogue written by engineers.** Users cannot understand it. Rewrite in plain language and test.
- **Too many entries.** Nobody can find anything. Start small, then merge and retire.
- **No owners.** Entries decay. Name owners and review dates.
- **Brochure only.** The catalogue does not lead to action. Link entries to forms and status.
- **Categories by org chart.** Users cannot guess where to look. Organize by user intent.
- **No technical view.** Impact analysis is guesswork. Map dependencies for critical services.
- **Never retiring.** Dead entries mislead. Review and remove.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| User-facing view | None or technical | Top services described | Services described in plain language with owners | Entries tested and reviewed with users | Entries consistent across functions and channels |
| Technical view | Not recorded | Main services mapped | Dependencies recorded for important services | Used in incidents and changes | Generated and kept current from configuration data |
| Findability | Browse only | Some search | Search and categories tested with users | Search logs drive changes | Search and assistants integrated across channels |
| Upkeep | None | Occasional | Owners and review dates | Use and quality measured | Continuous improvement from feedback |

## Checklist

- [ ] The top twenty requests and questions are in the catalogue.
- [ ] Each entry is in plain language, with who, how, how long, and cost.
- [ ] Each entry has an owner and a review date.
- [ ] Categories were tested with users.
- [ ] Requestable entries link to forms and status.
- [ ] The technical view covers our critical services.
- [ ] We review failed searches and abandoned entries.
- [ ] We retire or merge entries regularly.

## AI prompts

**Draft a catalogue entry from notes.**

```text
Here are notes on the service [name]: [paste, including what it does, who can use it, how to ask, how long, cost].
Draft a catalogue entry of under 120 words in plain language with a one-line summary, who it is for, how to ask, and expected time. Mark every gap in the notes with [missing] and do not fill it.
List what you are unsure of.
```

**Find vocabulary gaps.**

```text
Here are search terms users typed with no useful result: [paste list]. Here are our current catalogue entry titles: [paste list].
For each search term, list the entry titles that might match, or write "no match", and suggest a possible alias or new entry. Do not invent entries that I did not list as possible.
List what you are unsure of.
```

**Test categories.**

```text
Here is a list of catalogue items: [paste]. Here is our proposed category structure: [paste].
For each item, say which category a typical user would most likely look in and why, and list items that could reasonably sit in two places. Use only what is provided.
List what you are unsure of.
```

## AI skills

- [service-catalogue](../../../../skills/service-catalog/SKILL.md): use to build and maintain a user-facing catalogue.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to link entries to fulfilment steps.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): use to identify who uses and owns each service.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): use to review the full set of services.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of service catalogue management.
- Wikipedia, "Service catalogue": a short overview of the concept.
- Wikipedia, "Information architecture": the discipline of organizing information for users.
- Wikipedia, "Plain language": the principles of clear writing.

## References

1. Service catalogue — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Application portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Application_portfolio_management
3. Taxonomy — Wikipedia — https://en.wikipedia.org/wiki/Taxonomy
4. Information architecture — Wikipedia — https://en.wikipedia.org/wiki/Information_architecture
5. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
6. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
7. Product backlog — Wikipedia — https://en.wikipedia.org/wiki/Product_backlog
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Search engine — Wikipedia — https://en.wikipedia.org/wiki/Search_engine
10. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
