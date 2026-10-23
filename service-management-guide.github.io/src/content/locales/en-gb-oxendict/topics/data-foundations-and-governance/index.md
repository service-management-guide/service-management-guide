# Data Foundations and Governance

**Good analytics and safe AI rest on service data that is defined, owned, accurate, traceable, protected, and kept only as long as needed; data governance gives each important dataset a named owner, a plain definition, a quality check, and rules for access and retention.**

## Why this matters

The most common reason an analysis disappoints is not the method. It is the data. Ticket categories were changed last spring and nobody recorded when. Two systems both claim to hold the customer's department, and disagree. Timestamps are in different time zones. A field that looks complete is filled with "other" in half the records. A dashboard shows a drop in incidents, and the cause turns out to be a logging change, not better service.

The same problems damage AI. A model trained on mislabeled tickets learns the labels. An assistant grounded in stale articles quotes them. A forecast built on incomplete history carries the gaps forward. As organizations lean on analytics and AI, the quality, ownership, and protection of data stop being a technical background matter and become a service in their own right.

Data governance is the practice of managing data as an asset: deciding who is responsible, what each term means, how quality is checked, how data moves and where it came from, who may use it, and when it is deleted. Wikipedia describes data governance as the overall management of the availability, usability, integrity, and security of data. This topic describes it for service management data in practical terms, and shows how to start small. It underpins analytics (Topic 7.1 — Analytics for Service Management), measurement (Topic 7.3 — Measurement and Reporting), observability (Topic 7.4 — Observability and Telemetry), and AI (Topic 5.6 — AI Governance, Risk, and Compliance), and it links to configuration data (Topic 4.4 — Configuration Management). It gives no legal advice.

## Core concepts

**Data asset.** A dataset of value to the organization, such as the ticket history, the configuration database, monitoring data, survey results, or cost data. Like other assets, it has an owner, a cost, a lifecycle, and risks. See Topic 4.1 — Asset Management.

**Data owner and steward.** A data owner is accountable for a dataset: its purpose, quality, and who may use it. A data steward looks after it day to day, handling definitions, quality issues, and access requests. Wikipedia describes data stewards. In small teams one person may hold both roles. Without named people, nobody fixes problems.

**Data definitions and dictionary.** A plain statement of what each field and term means, such as "resolved" or "major incident", with how it is calculated and the source. Wikipedia describes data dictionaries. Definitions prevent two teams from using the same word for different things. Record changes in definitions with dates, so that trends can be interpreted.

**Metadata.** Data about data: where it came from, when it was updated, who owns it, how it is classified, and what it means. Wikipedia describes metadata. A data catalogue is a searchable inventory of datasets and their metadata, which helps people find and trust data.

**Data quality.** Fitness for use, usually described by dimensions such as accuracy, completeness, consistency, timeliness, and uniqueness. Wikipedia describes data quality. Quality is relative to the use: a ticket category that is good enough for a monthly trend may be too coarse for routing. Measure it on the fields that matter, and fix causes at the source. Data cleansing, described on Wikipedia, corrects errors after the fact and does not stop them recurring.

**Sources of poor quality.** Free-text fields filled differently by different people, defaults that are never changed, categories that grow without pruning, manual entry that is skipped under pressure, integrations that drop or duplicate records, and system changes that alter meaning. Fix them with better forms, validation, training, and review of the integration, not by blaming the people.

**Lineage and provenance.** A record of where data came from and what happened to it on the way to a report or a model. Wikipedia describes data lineage. When a figure is questioned, lineage lets you trace it. It also shows which reports are affected when a source changes.

**Data pipelines and integration.** The flows that move data between systems, often described as extract, transform, load (ETL) in Wikipedia's article, and stores such as data warehouses and data lakes, which Wikipedia also describes. Pipelines need owners, monitoring, and tests, as any production system does. See Topic 6.2 — Workflow Automation and Orchestration.

**Time and identity.** Two small matters cause large trouble. Timestamps need a consistent time zone and format, as Wikipedia's articles on timestamps and time zones suggest; mixed zones produce mysterious gaps and spikes. Identifiers for people, services, and assets need to be stable and shared across systems, so that records can be linked. Master data management, described on Wikipedia, is the discipline of keeping such core data consistent.

**Classification.** Labelling data by sensitivity, such as public, internal, confidential, and restricted, and attaching rules to each level. Wikipedia describes data classification. Service data often contains personal information and security details, which need protection.

**Privacy and protection.** Personal data are information relating to an identifiable person. Laws such as the General Data Protection Regulation (GDPR) in the European Union set rules on purpose, minimization, retention, and individual rights; Wikipedia describes personal data and the GDPR. Data minimization, described there, means collecting and keeping only what you need. Techniques such as pseudonymization and anonymization, described on Wikipedia, reduce risk, though they are hard to do well, and weak anonymization can be reversed. Take legal and privacy advice.

**Access control.** Who may see or change which data, and why. Use roles, not individuals, where possible, and review access regularly. See Topic 3.13 — Information Security Management and Topic 3.6 — Service Request Management.

**Retention and deletion.** How long data are kept and how they are destroyed. Keep what you need for operations, analysis, and legal obligations, and delete the rest. Wikipedia describes data retention. Old data increases risk and cost, and AI systems may learn from it. Check legal retention requirements that apply to you.

**Data sovereignty.** Data may be subject to the laws of the country where it is stored or processed. Wikipedia describes data sovereignty. Cloud and AI services can move data across borders; know where yours goes.

**Data in AI.** Data used for training, retrieval, or prompts needs the same governance, with extra care: permission for the use, labelling of the source, checks for bias and drift, and control over what is sent to external services. See Topic 5.1 — AI in Service Management.

**Governance forum and policy.** A small group with authority to set standards, resolve conflicts, and prioritize data work, and a short policy covering ownership, quality, classification, access, retention, and use of data in AI. Keep it light and practical.

**How the lenses fit.** Data governance is the base of the analytics and AI lenses, and automation depends on it too. Agile practice suggests improving data quality in small steps, driven by the questions people actually need answered, with feedback from data users.

## Best practices

1. **Start with the datasets that matter most.** List the data behind your key decisions, such as tickets, configuration, monitoring, surveys, and costs. Govern those first.
2. **Name an owner and a steward for each.** Record them in the catalogue, with how to contact them. Make them accountable for quality and access.
3. **Write definitions down.** Define the main terms and fields in plain language, with the calculation and the source. Record when definitions change.
4. **Measure quality where it counts.** Pick a few fields that drive decisions, define checks, and report results to owners. Track them over time.
5. **Fix problems at the source.** Improve forms, add validation, simplify categories, and fix integrations. Cleansing after the fact is a stopgap.
6. **Standardize time and identifiers.** Use one time standard and format, and stable, shared identifiers for people, services, and assets.
7. **Keep lineage.** Document where key reports and models get their data and what transformations apply. Update when sources change.
8. **Classify and protect.** Label data by sensitivity, apply access rules and protection, and review who has access. Remove personal data where it is not needed.
9. **Set retention and delete.** Decide how long each dataset is kept, and delete or anonymize afterward. Check the rules that apply to you.
10. **Govern data used by AI.** Record the sources, permissions, and quality of data used for training and retrieval, and control what goes to external services.

## Questions to discuss with your team

**Which datasets drive our most important decisions, and who owns each?**
List them. Expect gaps in ownership. Follow up by naming an owner and a steward for the top three.

**Which terms do we use differently in different teams?**
Pick "resolved", "incident", or "customer". Expect disagreement. Follow up by writing one definition and who decides.

**When did a definition or a system change break a trend, and did we notice at the time?**
Ask for examples. Expect "later". Follow up by agreeing a changelog for definitions and sources.

**How good is our data on the fields we rely on most, and how do we know?**
Take a field, such as category, and sample 50 records. Expect problems. Follow up by choosing one cause to fix.

**What personal or sensitive data do we hold in service systems, and how long do we keep it?**
Walk through the main systems. Expect surprises about attachments and chat logs. Follow up by involving the privacy officer and agreeing a retention rule for one system.

**What data are we feeding to AI tools, and who agreed to that?**
List the uses. Expect that some are informal. Follow up by agreeing a rule on what may be used and a register of AI data uses.

## In practice: a service management example

A national library's digital services team wants to forecast demand and train a model to route tickets. A data analyst begins and discovers that the ticket history is hard to use. Categories were renamed twice, and a "Other" category holds 35 percent of tickets. Timestamps from the old tool are in local time and those from the new one in universal time. The department field, taken from the HR system, differs from the one in the identity system for about 8 percent of users. A monthly report shows incidents falling by a quarter, but the analyst finds that a change in how duplicate incidents are merged explains most of the drop.

The head of service decides to treat ticket data as a governed asset. She names herself the data owner and an experienced service desk analyst as the steward. A one-page dictionary defines the 12 fields that matter, including the definition of "resolved" and the date it changed. The team maps the old categories to the new, labels the break in the history, and adds a validation rule that prevents "Other" without a free-text note. A weekly job checks three quality measures: share of tickets in "Other", share with missing department, and share with timestamps outside expected ranges. The results are posted for the desk.

The privacy officer reviews the dataset and finds that free-text fields and attachments contain personal details of members of the public. The team agrees to remove attachments from the analysis copy, to mask names and email addresses in text before it is used for modelling, and to delete tickets after seven years, in line with the library's records policy. A register lists each AI use of ticket data and its approval.

What changes: the analyst can build the forecast with a known break and a clean series, and the routing model is trained on reviewed labels. What remains hard: the masking of free text is imperfect, and some personal details remain; the HR and identity systems still disagree, and the owners of those systems have not agreed to reconcile; and the quality checks depend on a small number of staff. The head of service raises the data disagreement with the chief information officer and plans to widen the checks to configuration data.

## Four perspectives

### Product and delivery teams

Design your product's logs, events, and APIs with consistent fields, timestamps, and identifiers, and document them. Tell data users about changes in advance.

### Service and operations teams

Enter data carefully and consistently, and tell stewards about form or category problems. Help check quality, and keep records of definition changes.

### Leadership and governance

Name owners, fund data work, and ask for evidence of quality for the data behind decisions. Set rules for privacy and AI use. Do not accept reports with undefined terms.

### Customers and users

You should know what data is held about you and why, and be able to ask about it. Provide accurate information, and tell the provider if records seem wrong.

## Agile, AI, automation, and analytics

### Agile

Improve data in small steps driven by real questions: fix the field that blocks the next analysis. Review data quality with its users regularly. Caution: a multi-year data programme with no visible results loses support; deliver small, useful gains.

### AI

AI can help find quality problems, classify data, suggest definitions, and mask personal details, under review. Data used by AI needs its own governance: source, permission, quality, and drift checks. Caution: AI-based masking may miss personal data; test it and keep human review for sensitive sets. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Automate quality checks, lineage capture, classification labels, retention rules, and access reviews, with owners for exceptions. Caution: automated cleansing can silently change data; log changes and keep originals where required. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Measure quality of key fields, completeness, timeliness, share of datasets with owners and definitions, and incidents caused by data problems. Caution: a single quality score can hide serious defects in one field; report by field and use. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **No owner.** Problems persist. Name an owner and steward.
- **Undefined terms.** Teams argue over numbers. Write definitions and record changes.
- **Quality checked once.** Data decays. Monitor key fields continuously.
- **Cleansing as the fix.** Errors recur. Fix the source.
- **Mixed time zones and identifiers.** Records cannot be joined or ordered. Standardize.
- **Keeping everything.** Risk and cost grow. Set retention and delete.
- **Ungoverned AI data use.** Sensitive or poor data reach models. Register and review uses.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Ownership and definitions | Unknown | Owners for main datasets | Owners, stewards, dictionary, and catalogue | Definitions and changes managed | Governance coordinated across teams and partners |
| Quality | Unknown | Spot checks | Key fields measured regularly | Quality improvements tracked to sources | Quality assured continuously with automation |
| Protection | Ad hoc | Basic access rules | Classification, access, and retention rules | Compliance monitored and audited | Protection built into pipelines and tools |
| Use in AI | Unrecorded | Awareness | Register and rules for AI data use | Use reviewed and tested for bias and drift | AI data governed across systems and suppliers |

## Checklist

- [ ] Our most important datasets have named owners and stewards.
- [ ] Key terms and fields are defined in writing, with change dates.
- [ ] We measure quality on the fields that drive decisions.
- [ ] We fix quality problems at the source.
- [ ] Time zones, formats, and identifiers are standardized.
- [ ] We know where key reports get their data (lineage).
- [ ] Data are classified, access is controlled, and retention rules exist.
- [ ] A register records what data are used by AI and who agreed.

## AI prompts

**Profile a dataset.**

```text
Here is a sample of a dataset with field names, identifiers removed: [paste, 50–100 rows].
For each field, give the apparent meaning, type, share of missing or placeholder values, odd values, and a question for the data owner. Do not draw business conclusions.
List what you are unsure of.
```

**Draft a data dictionary entry.**

```text
Field: [name]. What I know about it: [source, how it is filled, how it is used].
Draft a dictionary entry with: plain-language definition, allowed values, how it is calculated or entered, source system, owner (only if stated), known issues, and date of last change (only if stated). Mark each item not given as [missing].
List what you are unsure of.
```

**Find personal data in free text for review.**

```text
Here is a sample of ticket free text, already partially masked: [paste].
List items that look like personal data (names, emails, phone numbers, addresses, identifiers) that remain, quoting the exact text, and suggest categories of rules to catch them. Do not guess whether any is real.
List what you are unsure of.
```

## AI skills

- [data-governance](../../../../skills/data-governance/SKILL.md): use to set ownership, definitions, and rules for data.
- [data-quality](../../../../skills/data-quality/SKILL.md): use to define and check quality on key fields.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): use to design and document data flows.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): use to frame privacy questions for your legal adviser.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to assign ownership and stewardship.

## Key sources

- DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*: a broad reference on data management and governance.
- ISO/IEC 25012, data quality model: a standard set of data quality characteristics; read the current edition from the publisher.
- Wikipedia, "Data governance" and "Data quality": overviews of the practice and its dimensions.
- Wikipedia, "General Data Protection Regulation": background on one important legal framework (not legal advice).

## References

1. Data governance — Wikipedia — https://en.wikipedia.org/wiki/Data_governance
2. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
3. Data steward — Wikipedia — https://en.wikipedia.org/wiki/Data_steward
4. Data dictionary — Wikipedia — https://en.wikipedia.org/wiki/Data_dictionary
5. Metadata — Wikipedia — https://en.wikipedia.org/wiki/Metadata
6. Data lineage — Wikipedia — https://en.wikipedia.org/wiki/Data_lineage
7. Data cleansing — Wikipedia — https://en.wikipedia.org/wiki/Data_cleansing
8. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
9. Data classification — Wikipedia — https://en.wikipedia.org/wiki/Data_classification
10. Personal data — Wikipedia — https://en.wikipedia.org/wiki/Personal_data
11. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
12. Data retention — Wikipedia — https://en.wikipedia.org/wiki/Data_retention
