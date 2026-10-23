# Service Management Frameworks and Standards

**ISO/IEC 20000, COBIT, VeriSM, FitSM, and IT4IT overlap with ITIL and with each other: they answer different questions (what to certify, how to govern, how to manage across the organization, how to start light, how to model IT as a business), so choose by the question you have rather than by the logo.**

## Why this matters

Teams that adopt service management meet an alphabet of frameworks and standards. A procurement officer asks for ISO/IEC 20000 certification. An auditor refers to COBIT. A consultant recommends VeriSM for the digital era. A small team finds FitSM and wonders why ITIL looked so heavy. Each is described by its supporters as the answer, and the descriptions rarely say what each is for.

The risk is confusion with real costs: certifying against a standard that does not match your contract, or adopting a framework for a role it was never designed to play. A framework is guidance; a standard is a set of requirements against which an auditor can certify an organization. Those are different things, and mixing them leads to wasted effort.

This topic sets out a neutral comparison. It is not a compliance manual and does not give legal or audit advice. For each framework it gives the purpose, the kind of document it is, and the question it helps with. Details change, so check each owner's current publications before relying on any statement here, including the version of ITIL discussed in Topic 1.3 — ITIL 5.

## Core concepts

**Framework versus standard.** A framework offers concepts, practices, and advice that you adapt. A standard sets requirements, normally phrased as "shall", against which an organization can be assessed. ITIL is a framework: people are certified, organizations are not. ISO/IEC 20000 is a standard: an organization can be audited and certified against it.

**ITIL.** Guidance for IT service management, now owned by PeopleCert, with practices, a value model, and a certification scheme for people. See Topic 1.2 — ITIL.

**ISO/IEC 20000.** An international standard for service management systems, published jointly by the International Organization for Standardization and the International Electrotechnical Commission. Part 1 sets the requirements for establishing, implementing, maintaining, and improving a service management system (SMS). Organizations are certified by accredited bodies. It is often chosen when a customer or regulator asks for independent evidence of service management discipline. It is compatible in structure with other ISO management system standards.

**COBIT.** A framework from ISACA for the governance and management of enterprise information and technology. It is wider than service management: it addresses how the board and management direct and oversee technology, with governance objectives, management objectives, and performance measurement. It is often used by auditors and risk teams, and organizations commonly use it alongside ITIL, with COBIT describing what governance expects and ITIL describing how services are run.

**VeriSM.** A service management approach for organizations that offer digital services, from a group in the service management community. It describes an organization-wide "service management principles" and a management mesh of resources, environment, management practices, and emerging technologies, intended to let an organization combine different practices. It is not a replacement for a practice framework; it is a way to organize several. Check its owner's site for current details.

**FitSM.** A lightweight family of standards for IT service management, arising from European research projects, designed to be simple and free to use. It describes a small number of processes with a clear set of requirements, and is often considered by small and medium organizations and federated IT environments that find larger frameworks heavy.

**IT4IT.** A reference architecture from The Open Group for managing the business of IT, modelled as value streams (such as strategy to portfolio, requirement to deployment, request to fulfill, and detect to correct) supported by information and functional components. It is useful when you want to design how tools and data fit together across the IT lifecycle, and it complements ITIL's practices.

**Related standards.** ISO/IEC 27001 specifies requirements for an information security management system (see Topic 3.13 — Information Security Management). ISO/IEC 19770 covers IT asset management (see Topic 4.1 — Asset Management). ISO/IEC 42001, published in 2023, specifies requirements for an artificial intelligence management system (see Topic 5.6 — AI Governance, Risk, and Compliance). Standards that share a structure can be combined in one management system, which reduces duplicate effort.

**DevOps, SRE, and agile are not on this list.** They are movements and approaches, not frameworks in this sense, though they overlap with practices here. See Topic 2.5 — DevOps and Topic 2.6 — Site Reliability Engineering.

**Maturity models.** The Capability Maturity Model Integration (CMMI) assesses process capability and is sometimes used for service work. This guide uses its own five-level maturity model (Initiate, Develop, Standardize, Manage, Orchestrate), which is a self-assessment aid, not a certification.

**How the lenses fit.** Each framework has been revised, or is being revised, to reflect agile ways of working, AI, automation, and data. Check the current edition for how each treats those, and treat any summary, including this one, as a pointer to the source.

## Best practices

1. **Start from the question.** Write what you need: independent evidence for a customer, a governance structure for the board, a lighter way to begin, a way to organize several practices. Choose the framework or standard that answers it.
2. **Check what the customer or regulator actually requires.** If a contract says "certified to ISO/IEC 20000", no other framework satisfies it. If it says "good practice", you have a choice. Read the clause.
3. **Do not certify for its own sake.** Certification costs effort and ongoing audits. Do it when someone who matters needs the evidence, and build the underlying practices first.
4. **Read the owner's text.** For any requirement or definition you will quote, use the standard or framework itself, and record the edition and date. Summaries, including blog posts, drift.
5. **Combine at the practice level.** Many organizations use ITIL for practices, ISO/IEC 20000 for certification, COBIT for governance, and IT4IT for architecture. Map each practice to the requirements it supports once, rather than writing separate procedures for each.
6. **Share a management system.** Where standards share a structure, run one set of documents, audits, and review meetings. A single management review that covers service, security, and AI is cheaper and clearer than three.
7. **Start small if you are small.** A framework designed for a large enterprise may overwhelm a team of ten. Consider a lighter option such as FitSM or a few selected practices.
8. **Keep evidence as a by-product.** Design pipelines and tools so that the records an auditor wants are produced by normal work, not assembled after the fact.
9. **Treat frameworks as sources of questions.** Use each to ask what you may be missing, and check the answers against your own evidence.
10. **Revisit the choice.** Needs change. Review annually whether you still need each certification or framework, and what each costs.

## Questions to discuss with your team

**What problem are we trying to solve with a framework or standard, and who is asking for it?**
This starts with the need. You may hear that "everyone uses it" or that an auditor mentioned it. Ask for the document or contract clause. Follow up by writing the need in one sentence and testing each option against it.

**Which of our customers or regulators require certification, and to what?**
Requirements are often assumed. Check contracts, tenders, and regulatory guidance. Expect surprises either way: a requirement nobody noticed, or none where people assumed one. Follow up by listing the evidence each requires.

**Where do we maintain separate documents for the same practice because different frameworks ask for them?**
This finds duplication. Common examples include separate incident procedures for service and security. Ask who keeps them in step. Follow up by choosing one practice to describe once and map to each requirement.

**What would the lightest version of service management look like for us?**
This tests whether we are over-building. Expect pressure to adopt every practice. Ask which two or three practices would remove the most pain. Follow up by choosing those and deferring the rest.

**What evidence do our audits ask for, and could our tools produce it automatically?**
Audits are a cost of doing business. Teams often assemble evidence by hand each year. Ask what the auditor actually inspects. Follow up by choosing one record to generate from the pipeline or ticket tool.

**How would we know that a certification improved our service, rather than only our paperwork?**
This links certification to outcomes. Expect honest answers that it is hard to tell. Ask what we would measure before and after, such as time to restore service. Follow up by agreeing the measure and a review date.

## In practice: a service management example

A regional managed-services company supplies IT support to about 60 small clinics. A new customer, a hospital group, asks in a tender whether the company is "certified to a recognized service management standard". The sales lead assumes it means ITIL certificates and lists the technicians' qualifications.

The service manager reads the tender. It names ISO/IEC 20000-1 explicitly. She explains that individual ITIL certificates do not satisfy the requirement, since an organization has to be audited. She compares the standard's requirements with what the company does. Incident and change handling are sound and documented, but there is no formal management review, no documented service level reporting, and supplier agreements are filed unevenly.

The company decides to bid conditionally, with a plan to reach certification within a year. It writes a simple service management system document, schedules a quarterly management review that also covers information security, and sets up the ticket tool to produce the reports an auditor will want. It chooses a lighter route for its smallest clinics, based on a few core practices, so that the effort does not overwhelm them.

What changes: the company can answer the tender honestly and has a plan. What remains hard: the audit timeline depends on an accredited body's availability, the reports do not yet reflect the clinics' real priorities, and the team is uncertain how much documentation is enough. They agree to ask the certification body for guidance early and to keep the documents short.

## Four perspectives

### Product and delivery teams

Expect questions about records and controls from auditors, and design your pipeline to produce them. Learn which of your practices serve a standard's requirement, so that you can explain why a control exists.

### Service and operations teams

Keep procedures accurate and keep records as you work, so that evidence exists without extra effort. Contribute to management reviews with real data, and tell the owner when a requirement is clumsy to meet.

### Leadership and governance

Decide which certifications are worth their cost, and ask for the contract clause or customer need that justifies each. Fund a single management system rather than several. Ask for evidence that practices work, not only that documents exist.

### Customers and users

If you require certification, say which standard and what scope. Ask the provider what the certificate covers, which services, sites, and dates. A certificate is evidence of a system, not a guarantee of any single outcome.

## Agile, AI, automation, and analytics

### Agile

Build practices in small increments and capture evidence as you go, with stakeholders reviewing the system regularly. Caution: standards need documented, repeatable practice; do not use "we are agile" to avoid describing how work is controlled.

### AI

AI can help compare requirements across standards, draft mappings, and summarize audit findings, with a person verifying each against the source text. An AI management system standard now exists (ISO/IEC 42001), as does the NIST AI Risk Management Framework; see Topic 5.6 — AI Governance, Risk, and Compliance. Caution: AI may invent clause numbers or requirements, so give it the text and ask it to quote.

### Automation

Generate evidence from pipelines and tools, such as change records linked to builds, access reviews exported on a schedule, and service level reports produced automatically. Caution: automated evidence proves the automation ran, not that the control is effective; review a sample by hand.

### Analytics

Use data to show that practices work, such as time to restore service and changes causing incidents, and to prepare for audits by listing gaps. Caution: indicators tied to certification, such as the number of closed audit findings, can be gamed; see the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Equating personal certificates with organizational certification.** A bid fails on a technicality. Read the requirement and know which kind of certification it names.
- **Certifying before building practice.** The organization passes an audit and nothing improves. Build and measure practice first.
- **Maintaining parallel systems.** Each framework gets its own documents and owners. Map once and share.
- **Using a heavy framework for a small team.** Staff drown in documentation. Choose a lighter option or a few practices.
- **Quoting summaries as the standard.** A requirement is misreported. Read the owner's text and record the edition.
- **Treating a framework as the goal.** Compliance replaces outcomes. Measure what customers experience.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Choice of framework | Chosen by habit or fashion | Needs listed | Choice tied to written needs and requirements | Choices reviewed with cost and benefit | Choices coordinated across the enterprise |
| Management system | Separate documents per framework | Some sharing | One system mapped to several requirements | System reviewed and improved on evidence | System integrated across service, security, and AI |
| Evidence | Assembled before audits | Some records kept | Records produced by normal work | Evidence quality sampled and reviewed | Evidence continuous and automated with human review |
| Source discipline | Summaries used | Owner text read by a few | Editions recorded and cited | Updates tracked and acted on | Shared, dated knowledge of requirements |

## Checklist

- [ ] We wrote down why we need each framework or standard.
- [ ] We know which customers or regulators require certification, and to what.
- [ ] We read the owner's text for anything we quote, and recorded the edition.
- [ ] We mapped practices to requirements once, not per framework.
- [ ] Our management review covers every standard we use.
- [ ] Evidence is produced by normal work where possible.
- [ ] We review annually whether each certification is still worth its cost.
- [ ] Our smallest teams have a lighter route.

## AI prompts

**Compare two sets of requirements.**

```text
Below is text from requirement set A: [paste clauses]. Below is text from requirement set B: [paste clauses].
Produce a table of overlaps and differences, quoting the exact words of each. Use only the text provided and do not use outside knowledge. Mark any match you are unsure about.
List what you are unsure of.
```

**Draft a gap analysis from our practice description.**

```text
Here is a description of how we run [practice, such as incident management]: [paste description]. Here is the requirement text: [paste clauses].
For each clause, say whether the description appears to meet, partly meet, or not address it, quote the words you relied on, and list a question to confirm. Do not give a verdict on certification.
List what you are unsure of.
```

**Prepare questions for a certification body.**

```text
We are considering certification to [standard] for [scope]. Our size and context: [describe].
Write twelve questions to ask a certification body about scope, timeline, evidence, cost, and surveillance audits. Avoid assuming answers.
List what you are unsure of.
```

## AI skills

- [maturity-models](../../../../skills/maturity-models/SKILL.md): use to self-assess against a chosen framework without implying certification.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): use to check evidence against requirements.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): use when a standard asks for documented service levels.

## Key sources

- ISO, ISO/IEC 20000-1 (the standard itself): the requirements for a service management system; read the current edition from the publisher.
- ISACA, COBIT publications: the owner's description of governance and management objectives.
- The Open Group, IT4IT standard: the owner's reference architecture.
- Wikipedia, "ISO/IEC 20000" and "COBIT": neutral summaries that point to the owners.

## References

1. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
2. COBIT — Wikipedia — https://en.wikipedia.org/wiki/COBIT
3. ISACA — Wikipedia — https://en.wikipedia.org/wiki/ISACA
4. FitSM — Wikipedia — https://en.wikipedia.org/wiki/FitSM
5. The Open Group — Wikipedia — https://en.wikipedia.org/wiki/The_Open_Group
6. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
7. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
8. Capability Maturity Model Integration — Wikipedia — https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration
9. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
10. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
