# Sustainability and Responsible Service Management

**Responsible service management counts the environmental, social, and ethical costs of running services, including the energy of cloud and AI, electronic waste, accessibility, and fair treatment of people; it works by measuring what you can with stated uncertainty, choosing lower-impact options where they cost little, and not mistaking a claim for a result.**

## Why this matters

Digital services feel weightless. A request goes out, an answer comes back, and nothing seems to be consumed. Behind it are data centers drawing power and water, devices made from mined materials, networks running day and night, and, increasingly, large AI workloads that use more energy than the tasks they replace. The sector's footprint is large and growing, and organizations are being asked, by customers, regulators, staff, and their own boards, what theirs is and what they are doing about it.

The environment is one part of the matter. Services also affect people. An inaccessible portal shuts out users with disabilities. A support model that assumes everyone has fast internet fails those who do not. An AI tool trained on narrow data treats some groups worse. An on-call model that burns out engineers is a social cost, borne by the people running the service. Responsible service management asks about all of these, not as an afterthought but as part of how services are designed, bought, and run.

This is a field in which claims outrun evidence. Wikipedia describes greenwashing, the practice of making misleading claims about environmental benefit, and it is common in technology marketing. Measurements are often estimates with wide uncertainty. A saving in one place can shift a cost elsewhere, and efficiency gains can be offset by greater use, a pattern Wikipedia describes as the rebound effect, or Jevons paradox. This topic gives a practical approach: know your main impacts, measure honestly, act where the effect is largest and the cost is lowest, and be careful about what you claim. It connects to hardware (Topic 4.3 — Hardware Asset Management), finance (Topic 4.5 — Financial Management and FinOps), AI governance (Topic 5.6 — AI Governance, Risk, and Compliance), and governance (Topic 8.1 — Governance, Risk, and Compliance). It gives no legal advice; reporting obligations differ by place.

## Core concepts

**Sustainability.** Meeting present needs without compromising the ability of future generations to meet theirs, in the common phrase. Wikipedia describes sustainability as having environmental, social, and economic dimensions. In service management, it means running services in ways that do not impose unjustified costs on the environment, on people, or on future options.

**Environmental, social, and governance (ESG).** A framework that organizations and investors use to assess non-financial performance. Wikipedia describes ESG. Reporting requirements are developing quickly in many jurisdictions. Your organization may ask service teams for data. Check what applies, and keep records you can defend.

**Carbon footprint and emissions.** The greenhouse gas emissions caused by an activity, usually expressed as carbon dioxide equivalent. Wikipedia describes carbon footprints and greenhouse gases. Carbon accounting commonly distinguishes emissions from your own operations, from purchased energy, and from the wider value chain, including the manufacture of devices and the use of suppliers' services, which are often the largest part and the hardest to measure. Wikipedia describes carbon accounting and these categories.

**Embodied and operational impact.** Embodied impact is what is used to make and transport a device or build a facility; operational impact is what is used while running it. For end-user devices, embodied impact is often the larger part of lifetime emissions. Wikipedia describes embodied energy. For data centers, operation, especially electricity, usually dominates. Understanding which applies guides action. See Topic 4.3 — Hardware Asset Management.

**Energy and data centers.** Data centers use electricity for computing and for cooling. Wikipedia describes data centers and power usage effectiveness (PUE), a ratio of total facility energy to the energy used by computing equipment. A low PUE does not mean low emissions; the carbon intensity of the electricity also matters, as does how fully the equipment is used. Idle servers still draw power.

**Cloud and shared infrastructure.** Large cloud providers often run more efficiently than small on-premises rooms and can buy renewable energy at scale. They also make it easy to consume more. Wikipedia describes cloud computing in general. Ask providers for emissions data by region and service, and treat their figures as estimates with stated methods. Moving to the cloud does not by itself make a service greener.

**AI and energy.** Training and running large models can consume significant energy and, in some cases, water for cooling. The impact depends on model size, how often it is used, and where it runs. Frequent use of large models for tasks a simple method could do wastes resources. See Topic 5.8 — AI Operating Model and Skills. Treat published figures with caution, since methods and scope vary.

**Efficient software and operations.** Efficient code, right-sized resources, turning off idle environments, scheduling flexible work when electricity is cleaner, and reducing unnecessary data storage and transfer all lower impact, and usually cost too. Wikipedia describes green computing and the practice of designing for lower environmental impact. See Topic 4.5 — Financial Management and FinOps, where cost savings and emissions savings often coincide.

**Electronic waste and the circular economy.** Discarded electronics contain valuable materials and hazards. Wikipedia describes electronic waste and the circular economy approach, which keeps materials in use through reuse, repair, and recycling. Longer device life, repair, refurbishment, and responsible recycling cut waste. See Topic 4.3 — Hardware Asset Management. The right-to-repair movement, which Wikipedia describes, argues for devices that can be repaired.

**Life-cycle thinking.** Considering all stages of a product or service, from materials to disposal. Wikipedia describes life-cycle assessment. It guards against moving impact from one stage to another, such as saving energy in use by a device that needs more resources to make.

**Rebound effects.** Efficiency can lead to more use, which cancels the gain. Wikipedia describes this under the rebound effect and Jevons paradox. If cheaper compute leads to far more computation, total impact can rise. Set absolute goals as well as efficiency ones.

**Accessibility and inclusion.** Services should be usable by people with different abilities, devices, languages, and connectivity. Wikipedia describes accessibility, inclusive design, and the digital divide. Standards such as the Web Content Accessibility Guidelines set a baseline for web content. Laws in many places require accessibility. Include users with disabilities in design and testing, and keep non-digital routes.

**Fairness and ethics.** Services and AI systems should treat people fairly and be open about how they work. Wikipedia describes algorithmic bias and the ethics of artificial intelligence. See Topic 5.6 — AI Governance, Risk, and Compliance.

**People and workload.** The people who run services are stakeholders. Sustainable on-call, reasonable hours, safe working conditions, and fair treatment of suppliers' staff are part of responsible practice. See Topic 2.10 — Agile Management and Learning.

**Responsible procurement.** Choosing suppliers by their environmental and social practices as well as price. Wikipedia describes sustainable procurement. Ask for evidence, such as published emissions data and repair policies, and check claims. See Topic 3.14 — Supplier Management.

**Measurement honesty.** Many figures in this area are estimates. State the method, the scope, and the uncertainty. Beware of comparisons that use different boundaries. Avoid claims such as "carbon neutral" without a clear, verifiable basis, since Wikipedia's account of greenwashing shows how such claims mislead.

**Corporate responsibility.** Organizations increasingly publish commitments. Wikipedia describes corporate social responsibility. Service teams contribute data and make choices that determine whether commitments are met.

**How the lenses fit.** Sustainability applies to all four. Agile practice suggests small, measured experiments to cut waste. AI is both a source of impact and a tool for finding savings. Automation can shut down idle resources and schedule work. Analytics measures impact with stated uncertainty.

## Best practices

1. **Find your largest impacts.** Estimate where the biggest environmental and social effects of your services lie: devices, cloud and data center use, AI workloads, travel, and the people who run services. Start where the potential is greatest.
2. **Measure with stated methods.** Use supplier data and standard conversion factors, record scope and assumptions, and show uncertainty. Improve data over time.
3. **Cut waste that also cuts cost.** Turn off idle environments, right-size resources, delete unneeded data, and consolidate underused systems. These often pay for themselves.
4. **Extend the life of devices.** Repair, upgrade, and reuse before replacing, and choose repairable, durable equipment. Dispose through responsible channels with data erasure.
5. **Choose where and when you run.** Where you have the choice, use regions and times with cleaner electricity, and ask suppliers for data. Avoid moves that increase impact elsewhere.
6. **Use AI proportionately.** Match the size of the model and the frequency of use to the value. Use simple methods where they do as well. Track the cost and, where available, the energy of AI workloads.
7. **Design and test for accessibility.** Follow accessibility standards, test with users with different needs, and keep alternative routes. Include accessibility in the definition of done.
8. **Check fairness and ethics.** Review services and AI uses for unfair effects, test across groups, and give people a way to challenge decisions.
9. **Care for the people who run services.** Keep workload and on-call sustainable, and treat suppliers' staff fairly. Count burnout as a cost.
10. **Be honest in claims.** Say what you measured, how, and what you do not know. Avoid vague or unverifiable statements, and have claims reviewed before publication.

## Questions to discuss with your team

**Where is the largest environmental impact of our services, and how do we know?**
Look at devices, cloud, AI, and facilities. Expect a lack of data and strong assumptions. Follow up by choosing one area to estimate with a stated method.

**Which of our systems or environments run all the time and could be switched off or scaled down?**
Check development and test. Expect idle ones. Follow up by scheduling shutdowns for one environment and recording the saving.

**How long do we keep devices, and what stops us keeping them longer or repairing them?**
Ask about policy and habit. Expect refresh by calendar. Follow up by trialing longer life for one group.

**Who cannot use our services as designed, and how do we know?**
Think of disability, language, connectivity, and confidence. Expect that some groups were not tested. Follow up by observing a few users from those groups.

**What AI uses have we adopted where a simpler method would do, and what do they cost in resources?**
Review the list. Expect that some are fashionable. Follow up by comparing one AI use with a simple alternative on quality and cost.

**What claims have we made, or been asked to make, about sustainability, and can we support each?**
Collect them. Expect some that cannot be verified. Follow up by reviewing each with the people who hold the data.

## In practice: a service management example

A national library's IT department has been asked by its parent ministry to report on the environmental impact of its digital services and to propose reductions. The department has 400 staff, 6,000 devices across 300 branches, a cloud-hosted catalog, and a recent AI search assistant.

The service manager starts by estimating the main sources. For devices, procurement and asset records show 4,800 laptops and desktops, with an average age of 4.1 years. Using manufacturer-published lifecycle figures, which she notes are estimates, she judges that the embodied impact of devices bought in the year is the largest single item. For cloud, the provider's emissions dashboard gives a monthly estimate by region, which she records with the provider's stated method. The AI assistant's usage is small compared with other items, but growing, and the vendor gives no energy data.

She proposes four actions. Extend the laptop replacement cycle from four to five years where health data allow, with repair of batteries and storage. Switch off the development and test environments at night and on weekends, which also saves about a fifth of cloud cost. Move one batch workload to a region with a lower-carbon grid, after checking that latency is acceptable. And ask the AI vendor for energy and water data and set a rule that the assistant is used for open questions only, with simple search for known items.

On the social side, the department commissions an accessibility test of the portal with five staff and patrons who use screen readers and one who uses voice control. It finds that the booking form cannot be completed with a keyboard alone, and the team fixes it. It also reviews the on-call rota, which has two engineers covering 24 hours at times; it adds a third.

What changes: the ministry receives a first report with methods and ranges, and the department has four tracked actions. What remains hard: the embodied figures are based on manufacturer averages and cannot be verified; the vendor has not given energy data; an environmental claim in a draft press release ("a carbon-neutral digital service") is withdrawn because the department cannot support it; and the longer replacement cycle increases support effort for older devices. The manager reports the uncertainties and plans a review of support cost.

## Four perspectives

### Product and delivery teams

Design for efficiency and accessibility: lean pages, efficient queries, right-sized resources, and keyboard and screen-reader support. Choose AI methods in proportion to need, and test with diverse users.

### Service and operations teams

Turn off what is idle, repair and reuse devices, record data on energy and waste, and keep on-call sustainable. Tell owners where impact is highest.

### Leadership and governance

Set goals with absolute targets and honest measurement, and fund the work. Review claims before publication. Include people, not only carbon, in what you count.

### Customers and users

You should be able to use services regardless of ability or connection, and expect honest information about their impact. Tell providers what does not work for you and what you would like to see.

## Agile, AI, automation, and analytics

### Agile

Try small changes, such as scheduled shutdowns or a lighter page, measure the effect, and keep what works. Include users with different needs in reviews. Caution: do not run a large "green program" with no measures; pick actions with evidence.

### AI

AI can help find idle resources, analyze usage and energy data, and check designs for accessibility problems, under review. AI itself has an environmental footprint, and bias risks. Caution: do not claim AI saves energy without comparing with the energy it uses; measure both. See Topic 5.8 — AI Operating Model and Skills.

### Automation

Automate shutdown of idle environments, scheduling of flexible workloads, and cleanup of unused data, with owners and safeguards. Caution: automatic deletion can remove needed data; use retention rules and review. See Topic 6.1 — Automation Strategy.

### Analytics

Collect energy, emissions estimates, device age and failure data, cloud use, and accessibility test results, with method and uncertainty stated. Caution: emissions figures vary widely by method, and one-off improvements can be wiped out by growth; track absolute totals and trends. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Claims without evidence.** Statements such as "carbon neutral" cannot be supported. State methods and limits, and review claims.
- **Moving the problem.** Impact shifts to another stage or supplier. Think in life cycles.
- **Efficiency without limits.** Savings are offset by more use. Set absolute goals.
- **Accessibility as an afterthought.** Some users are shut out. Build and test it in.
- **Oversized AI.** Large models do simple tasks. Match method to need.
- **Ignoring the people who run services.** Burnout and turnover rise. Treat workload as part of sustainability.
- **No data.** Decisions rest on guesses. Collect what you can, with uncertainty.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Measurement | None | Rough estimates | Main impacts estimated with stated methods | Data improved and tracked against goals | Impact data integrated with cost, planning, and suppliers |
| Action | Ad hoc | Some savings | Standard practices: shutdown, right-sizing, device life | Actions tracked and reviewed | Impact built into design, procurement, and operations |
| Inclusion and ethics | Not considered | Awareness | Accessibility and fairness reviews standard | Outcomes measured across groups | Inclusive design and fairness integrated across services |
| Honesty | Unchecked claims | Awareness | Claims reviewed against evidence | Claims audited | Transparent reporting with independent assurance |

## Checklist

- [ ] We estimated our main environmental impacts with stated methods.
- [ ] We switch off or scale down idle environments.
- [ ] We repair, reuse, and extend device life, and dispose responsibly.
- [ ] We ask suppliers for emissions and energy data and record their methods.
- [ ] AI uses are proportionate, with cost and, where possible, energy recorded.
- [ ] Services are tested for accessibility with real users.
- [ ] On-call and workload are sustainable.
- [ ] Sustainability claims are reviewed against evidence before publication.

## AI prompts

**Structure an impact estimate.**

```text
Here are our facts: number and age of devices [paste], cloud usage by region [paste], AI usage [paste], and any supplier emissions data [paste].
Draft a table of impact sources, the data we have for each, the missing data, the method we could use, and the main uncertainty. Do not invent emission factors or figures.
List what you are unsure of.
```

**Review a sustainability claim.**

```text
Here is a draft statement about our service's environmental impact: [paste]. Here is the evidence we have: [paste].
For each claim, say whether the evidence supports it, partly supports it, or does not, quoting the text, and list what is missing. Do not rewrite the claim.
List what you are unsure of.
```

**Plan an accessibility test.**

```text
Our service: [describe]. Our users: [groups]. Known issues: [list].
Draft a test plan with tasks real users would attempt, the assistive technologies and devices to include, what to record, and how to report results. Do not claim any standard is met.
List what you are unsure of.
```

## AI skills

- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to weigh the cost and benefit of impact-reducing options.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): use to identify who is affected and who is missing.
- [risk-register](../../../../skills/risk-register/SKILL.md): use to record environmental and social risks with owners.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): use to right-size resources.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): use to ask suppliers for data and commitments.

## Key sources

- The Green Software Foundation (greensoftware.foundation): community guidance and standards on software and carbon.
- W3C, Web Content Accessibility Guidelines (WCAG): the international standard for accessible web content.
- Wikipedia, "Sustainability" and "Greenwashing": overviews of the field and the main hazard in claims.
- Wikipedia, "Electronic waste" and "Circular economy": background on devices and materials.

## References

1. Sustainability — Wikipedia — https://en.wikipedia.org/wiki/Sustainability
2. Environmental, social, and governance — Wikipedia — https://en.wikipedia.org/wiki/Environmental,_social,_and_governance
3. Carbon footprint — Wikipedia — https://en.wikipedia.org/wiki/Carbon_footprint
4. Carbon accounting — Wikipedia — https://en.wikipedia.org/wiki/Carbon_accounting
5. Green computing — Wikipedia — https://en.wikipedia.org/wiki/Green_computing
6. Data center — Wikipedia — https://en.wikipedia.org/wiki/Data_center
7. Power usage effectiveness — Wikipedia — https://en.wikipedia.org/wiki/Power_usage_effectiveness
8. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
9. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
10. Greenwashing — Wikipedia — https://en.wikipedia.org/wiki/Greenwashing
11. Rebound effect (conservation) — Wikipedia — https://en.wikipedia.org/wiki/Rebound_effect_(conservation)
12. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
