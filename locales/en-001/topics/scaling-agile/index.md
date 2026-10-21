# Scaling Agile

**Scaling frameworks such as the Scaled Agile Framework (SAFe), Large-Scale Scrum (LeSS), and Disciplined Agile help many teams work on one product or service, but they add structure and cost; reduce dependencies and the number of teams first, and adopt a framework only for the coordination problems that remain.**

## Why this matters

Agile practice was first described for a single small team that could sit together, plan together, and release together. Real services are larger. A bank's mobile app, a hospital's patient record, or a city's transport platform needs dozens or hundreds of people, many teams, shared components, and suppliers. Those teams depend on each other, and the dependencies slow them down.

Scaling frameworks offer ways to coordinate. They propose roles, events, and artifacts so that many teams can plan and release in step. Some have large followings, training programs, and certification schemes. They also attract criticism: that they reintroduce heavy planning and hierarchy under agile names, that they are sold as a program for the organization when the real problem is architecture or ownership, and that they spread vocabulary faster than behavior.

A service manager meets scaling frameworks in practice, because the teams that run services are the ones that coordinate with platform, security, and supplier teams. This topic explains the main options neutrally, asks when scaling helps, and says what to try before you adopt a framework. It describes frameworks by their owners' own descriptions where possible; check the owners' current publications, because versions change.

## Core concepts

**The scaling problem.** When more than a handful of teams contribute to one outcome, three things grow: dependencies (one team waits for another), coordination effort (planning and communication), and the risk of inconsistent decisions. Brooks's law, from a 1975 book by Fred Brooks and described on Wikipedia, observes that adding people to a late project tends to delay it further, because of the cost of communication. Scaling is largely about limiting that cost.

**Conway's law.** The observation that a system's design tends to mirror the communication structure of the organization that builds it. If teams are organized by technical layer, the system will have layer boundaries, and every feature will need all the teams. Many scaling problems are structure problems; see Topic 1.6 — Four Dimensions of Service Management.

**SAFe.** The Scaled Agile Framework is a set of organization and workflow patterns, from Scaled Agile, Inc., for implementing agile at enterprise scale. It organizes teams into groups that plan together in fixed increments, and offers configurations for different sizes, including portfolio, large solution, and essential levels. It is widely used in large enterprises and has detailed guidance and certification. Critics point to its size and its planning cycles.

**LeSS.** Large-Scale Scrum, created by Craig Larman and Bas Vodde, extends Scrum to many teams with a single product backlog and a single product owner. It emphasizes simplicity and removing structure that is not needed, and expresses the view that scaling should mean "less" organization. It assumes teams use Scrum. See less.works for its own description.

**Disciplined Agile.** A toolkit, originally from Scott Ambler and Mark Lines, described on Wikipedia as Disciplined Agile Delivery, that offers a menu of options for each aspect of delivery and encourages teams to choose what fits their context. It is now maintained by the Project Management Institute. The framework's own name includes the word "delivery" and is quoted here as a proper name.

**Scrum of Scrums.** A pattern in which a representative from each team meets regularly with others to coordinate across teams. It is simple and works for a small number of teams.

**Other approaches.** Some organizations adopt a model inspired by the way a particular company is described. Published descriptions of one music company's squads, tribes, chapters, and guilds were widely copied, although people involved have said it was a snapshot of an experiment rather than a framework to adopt. Treat such descriptions as sources of ideas, not as recipes.

**Team topologies and ownership.** An approach that describes a small number of team types (stream-aligned, platform, enabling, complicated-subsystem) and their interaction modes, with the aim of reducing dependencies. It is a way to think about structure, and it complements a framework choice or can replace it in some organizations.

**Business agility.** A broader idea that the whole organization, including finance, HR, and governance, needs to respond to change, not just delivery teams. Wikipedia describes it under business agility. Scaling teams without changing budgeting or governance often fails.

**Service teams at scale.** Operations, support, and platform teams serve many product teams, and their work does not fit neatly into planning increments. They need clear interfaces, such as a service catalog and agreed service levels, and capacity to handle interruptions. See Topic 2.8 — Product and Service Ownership and Topic 3.8 — Service Catalog Management.

**How the lenses fit.** Scaling is about the agile lens at organizational size. AI can help summarize dependencies and plans, under review. Automation can show dependencies in tools and keep plans consistent. Analytics can show where work waits for other teams.

## Best practices

1. **Reduce dependencies before coordinating them.** Look for ways to make teams independent: clearer ownership, better interfaces, shared components with their own team, or merging teams that always work together.
2. **Align teams to the flow of value.** Organize teams around a service or customer journey, so that a team can deliver a change from idea to production. Avoid teams that own only a technical layer.
3. **Start with the smallest coordination that works.** For a few teams, regular conversations and a shared board may be enough. Add structure only when a problem shows that you need it.
4. **Choose a framework for a named problem.** Write the coordination problem, such as "five teams share one release and blockages are frequent", and ask which framework or practice addresses it. Do not adopt a framework because it is popular.
5. **Keep one visible backlog and priority for a shared outcome.** Many teams working to different priority lists produce conflict. Agree who decides priority across teams.
6. **Make dependencies visible.** Show on a board or map which team waits for which. Review the biggest ones and decide whether to remove or manage each.
7. **Provide platforms as services.** If a platform team serves others, treat the other teams as customers, publish interfaces, and measure whether they help. See Topic 2.5 — DevOps.
8. **Involve operations and suppliers in planning.** Include service and supplier teams in cross-team planning, so that run and support needs are not discovered at launch.
9. **Change budgeting and governance to match.** Funding stable teams and outcomes, and keeping governance light and evidence-based, supports scaled delivery better than project-by-project funding.
10. **Review the framework itself.** After a year, ask whether it reduced waiting and improved outcomes. Drop or change what does not help.

## Questions to discuss with your team

**Which teams do we wait for most, and why?**
This finds dependencies. People usually name a few teams repeatedly. Ask for real examples with dates. Follow up by asking what would make the dependency disappear, such as moving a skill, an interface, or a decision.

**What problem would a scaling framework solve for us that we cannot solve with a simpler change?**
This tests whether a framework is needed. Teams often cite general alignment. Press for specifics. Follow up by choosing the smallest change to try first.

**How are our teams organized, by layer, component, or journey, and what does that cost us?**
Structure shapes dependencies. Ask how many teams touch a typical change. Expect answers of three to six. Follow up by sketching an alternative structure for one journey.

**Who decides priority when two teams' work conflicts?**
Unclear decision rights waste time. You may hear that it depends, or that leaders decide late. Ask for the last example. Follow up by agreeing a decision-maker and a deadline for each type of conflict.

**How does our funding model support or hinder teams that stay together and own services?**
Project-based funding disbands teams and loses knowledge. Ask how long teams stay together and who funds improvement. Follow up by listing one service that would benefit from stable funding.

**How could AI help us see and manage dependencies, and what could go wrong?**
AI can read plans and tickets and suggest links. It can also invent dependencies or miss real ones. Ask who checks and how often. Follow up by comparing an AI-generated map with one drawn by two teams.

## In practice: a service management example

A national railway's digital division has eleven teams working on a journey-planning service: web, mobile, timetable data, real-time feeds, payments, accessibility, and others. Releases require all eleven teams to be ready, and a delay in any holds the rest. The division's director has been advised to adopt a large scaling framework with a program of training and new roles.

The service owner asks for two weeks to map dependencies first. She draws a board with each team and the items they waited on in the last quarter. Four teams account for most waiting: the timetable data team is a bottleneck for three others; payments depends on a supplier release cycle; accessibility reviews are done late by a separate team; and a shared design system has no owner. She proposes four changes: move two data engineers into the teams that wait most, publish the timetable data through a documented interface that teams can read without asking, place accessibility specialists in the mobile and web teams, and give the design system to a named team that treats others as customers.

The director agrees to try this for a quarter and to hold a short planning session every six weeks across teams, using a single visible priority list for the shared outcome. A framework is deferred.

What changes: the number of items waiting on other teams falls, and releases no longer need all eleven teams to be ready. What remains hard: payments still depends on the supplier's schedule; the shared priority list is argued over at each session; and the division's budget process funds projects, so two teams will be disbanded at year end. The service owner tells the director that without changing funding the improvements may not last.

## Four perspectives

### Product and delivery teams

Look for ways to remove dependencies on other teams, and make the ones that remain visible. Take part in cross-team planning, and keep the live service inside your plans.

### Service and operations teams

Offer clear interfaces such as a catalog of services and agreed levels. Join planning so that run and support needs are known early, and bring data on interruptions and waiting to the conversation.

### Leadership and governance

Ask what coordination problem a framework would solve and how you will know it did. Change funding and governance to fit stable, outcome-oriented teams. Name who decides priority across teams.

### Customers and users

You should experience a service that changes coherently, not a set of disconnected releases. Tell the provider where features or experiences feel inconsistent, because that often reveals coordination problems.

## Agile, AI, automation, and analytics

### Agile

Keep stakeholders involved across teams, deliver in small pieces, and improve how teams coordinate. Caution: scaled planning events can become big batches in disguise; keep them short and keep releases small.

### AI

AI can summarize cross-team backlogs, propose dependency links, and draft planning notes, under human review. Name an owner for each use. Caution: AI summaries of plans can flatten disagreements; keep humans making the trade-offs. See Topic 5.1 — AI in Service Management.

### Automation

Automate dependency tracking in your tools, shared pipelines, and consistent environments, so that coordination relies less on meetings. Caution: tooling that enforces a rigid plan can undo flexibility; keep it a support for conversation. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Measure waiting time between teams, the number of cross-team dependencies per item, and the time from idea to release for a shared outcome. Caution: comparing teams on these measures ignores context and invites gaming; use them to find structural problems. See Topic 7.6 — Process and Value Stream Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Framework first.** A large program starts before the problem is named. Map dependencies and try simple changes.
- **Teams organized by layer.** Every change needs every team. Organize around the journey.
- **Coordination meetings multiply.** People spend their week in planning. Reduce dependencies and the number of events.
- **Unclear cross-team priority.** Teams pull in different directions. Name a decision-maker.
- **Funding unchanged.** Project funding breaks teams apart. Fund stable teams and outcomes.
- **Copying another company's model.** The context differs. Treat it as ideas, not a recipe.
- **Platform as mandate.** Teams work around it. Treat other teams as customers.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Dependencies | Unknown | Main dependencies known | Dependencies visible and owned | Dependencies reduced on evidence | Teams largely independent with clear interfaces |
| Structure | Teams by layer | Some journey-aligned teams | Teams aligned to flow of value | Structure reviewed against results | Structure adapts across services and partners |
| Coordination | Ad hoc | Regular conversations | Light, regular cross-team planning | Coordination cost measured | Coordination supported by shared tools and interfaces |
| Funding and governance | Project funding | Some stable teams | Stable teams and outcome-based governance | Funding reviewed against outcomes | Funding and governance adapt across the portfolio |

## Checklist

- [ ] We mapped dependencies between teams with real examples.
- [ ] We tried reducing dependencies before adopting a framework.
- [ ] Teams are aligned to a journey or service where possible.
- [ ] There is one named decision-maker for cross-team priority.
- [ ] Platform and service teams publish interfaces and treat others as customers.
- [ ] Cross-team planning is short and includes operations and suppliers.
- [ ] Funding supports stable teams.
- [ ] We review the chosen framework against results annually.

## AI prompts

**Draft a dependency map from notes.**

```text
Here are notes on what each team waited for in the last quarter: [paste notes].
List each dependency as "team A waits for team B for X", count how often each appears, and list the five most frequent. Do not infer reasons.
List what you are unsure of.
```

**Compare structure options.**

```text
Our service involves these teams and what each owns: [paste]. A typical change needs: [describe].
Describe two alternative ways to organize the teams around the journey, with the trade-offs of each. Mark assumptions. Do not recommend a framework.
List what you are unsure of.
```

**Prepare a cross-team planning agenda.**

```text
We have [number] teams planning together for [period]. The shared outcome is: [describe]. The top dependencies are: [list].
Draft a 90-minute agenda that focuses on dependencies and priorities, with time for each, and questions to ask. Keep it short and avoid framework jargon.
List what you are unsure of.
```

## AI skills

- [scaled-agile-framework](../../../../skills/scaled-agile-framework/SKILL.md): use to understand SAFe's roles and events before deciding whether it fits.
- [large-scale-scrum](../../../../skills/large-scale-scrum/SKILL.md): use to understand LeSS and its assumptions.
- [disciplined-agile](../../../../skills/disciplined-agile/SKILL.md): use to see the options Disciplined Agile offers for a context.
- [scrum-of-scrums](../../../../skills/scrum-of-scrums/SKILL.md): use for a light cross-team coordination pattern.

## Key sources

- Craig Larman and Bas Vodde, LeSS (less.works): the owners' description of Large-Scale Scrum.
- Scaled Agile, Inc., SAFe (scaledagileframework.com): the framework's own site.
- Matthew Skelton and Manuel Pais, *Team Topologies* (2019): a way to think about team structure and interaction.
- Wikipedia, "Scaled agile framework" and "Conway's law": neutral background.

## References

1. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
2. Disciplined agile delivery — Wikipedia — https://en.wikipedia.org/wiki/Disciplined_agile_delivery
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Brooks's law — Wikipedia — https://en.wikipedia.org/wiki/Brooks%27s_law
6. Business agility — Wikipedia — https://en.wikipedia.org/wiki/Business_agility
7. Matrix management — Wikipedia — https://en.wikipedia.org/wiki/Matrix_management
8. Portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Portfolio_management
9. Large-Scale Scrum (LeSS) — Larman and Vodde — https://less.works
10. Scaled Agile Framework — Scaled Agile, Inc. — https://scaledagileframework.com
