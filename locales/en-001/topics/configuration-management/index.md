# Configuration Management

**Configuration management keeps an accurate, usable picture of the components that make up your services and how they connect, so that you can judge the impact of a change or a failure; modern teams get that picture from infrastructure as code and discovery, with a configuration database as a view of it, not a hand-kept list.**

## Why this matters

When a database server fails at 2 a.m., the first question is what depends on it. When someone proposes a change to a network rule, the first question is what it might break. When an auditor asks how a service is built, the first question is where the truth is written down. All three need the same thing: a current, trustworthy picture of what exists and how the parts relate.

Many organizations try to provide it with a configuration management database (CMDB): a database of configuration items and relationships. Many also find that it becomes a graveyard of stale records, kept by hand, trusted by nobody. The records are out of date within weeks, because the real estate changes faster than anyone can update a form. The CMDB becomes a compliance artifact, not a tool.

Two ideas rescue the practice. First, treat the definition of the infrastructure as code in version control, so that the source of truth is the thing that creates the system, not a description of it. Second, populate the picture automatically from discovery and from that code, and use it for specific questions: impact of a change, scope of an incident, ownership. This topic explains the practice and the pitfalls. It links to asset management (Topic 4.1 — Asset Management), change enablement (Topic 3.4 — Change Enablement), infrastructure as code (Topic 6.3 — Infrastructure as Code and GitOps), and the service catalog (Topic 3.8 — Service Catalog Management).

## Core concepts

**Configuration management.** In the ITIL sense, the practice of ensuring that accurate and reliable information about the configuration of services, and the configuration items that support them, is available when and where it is needed. In engineering, "configuration management" also refers to the discipline of maintaining systems in a known, consistent state. Wikipedia describes configuration management in the wider sense. This guide uses both senses and says which.

**Configuration item (CI).** Any component that needs to be managed in order to deliver an IT service. Wikipedia describes configuration items. Examples include servers, applications, databases, network devices, cloud resources, certificates, and sometimes documents and contracts. Each CI has attributes (type, version, owner, status) and relationships to other CIs.

**Configuration management database (CMDB).** A repository of CIs, their attributes, and their relationships. Wikipedia describes the CMDB. A CMDB is not a spreadsheet of assets: its value lies in the relationships, which allow questions such as "which services use this database?".

**Configuration management system (CMS).** The wider set of tools and data that give a view of configuration across sources. ITIL describes a CMS that federates data from several places, not a single database. Wikipedia describes federated database systems as one way to combine sources without copying them.

**Service map.** A view that shows how a service depends on its components. A technical service map links applications, databases, servers, and networks. A business view links services to the people and processes they support. Maps are used in incidents and changes. See Topic 3.8 — Service Catalog Management.

**Baselines and drift.** A baseline is a known, approved configuration at a point in time. Drift is the difference between the baseline and what is actually running, often from manual changes. Wikipedia describes baselines in configuration management. Detecting and correcting drift keeps systems consistent and safe.

**Infrastructure as code (IaC).** Defining infrastructure, such as servers, networks, and cloud resources, in text files that are stored in version control and applied by tools. Wikipedia describes infrastructure as code. Tools such as Terraform, Ansible, and Kubernetes manifests express desired state, and the tool makes reality match. The code is both the documentation and the mechanism. See Topic 6.3 — Infrastructure as Code and GitOps.

**Idempotence and desired state.** Good configuration tools can be run repeatedly with the same result: they do only what is needed to reach the described state. Wikipedia describes idempotence. This makes it safe to re-apply configuration to detect and fix drift.

**Source of truth.** The place where a fact is authoritative. For desired configuration, it is the code repository; for what is actually running, it is discovery or the platform's own state; for ownership, it may be the catalog or a team registry. Decide the source for each kind of fact, and avoid keeping the same fact by hand in two places. Wikipedia describes the single source of truth idea.

**Discovery.** Tools that scan networks, cloud accounts, and platforms to find what exists and how it is connected. Discovery finds what nobody recorded, but it produces a lot of detail and some noise, and needs rules for which items to keep and how to name them.

**Relationships and impact analysis.** Knowing that application A uses database B lets you ask what is affected if B changes or fails. Wikipedia describes change impact analysis and dependency graphs. Graph databases, described on Wikipedia, are one way to store and query relationships. Impact analysis is only as good as the relationships recorded.

**Data quality.** Accuracy, completeness, and timeliness decide the value of the data. Define which attributes matter and how fresh they must be. A smaller set of accurate data is more useful than a large set of unreliable data. See Topic 7.2 — Data Foundations and Governance.

**Scope.** Do not try to record everything. Choose the CIs and relationships that you need for your decisions: critical services, their main components, and their ownership. Expand as value is shown.

**Ownership.** Each CI or group has an owner who is accountable for it and for the data about it. Without ownership, data decay.

**Containers and cloud.** Modern platforms create and destroy resources constantly. A record of an individual container is meaningless an hour later. Track at the level that matters, such as the service and the deployment, and use labels and tags to link resources to owners and services.

**How the lenses fit.** Configuration management supports agile and continuous delivery by making environments repeatable. AI can help discover relationships, suggest missing links, and answer questions about impact, under review. Automation applies configuration and keeps the picture current. Analytics uses the data to find risks and costs.

## Best practices

1. **Start with the questions you need to answer.** List the decisions the data will support, such as impact of change, incident scope, and ownership. Record only what answers them.
2. **Treat code as the source of truth for desired state.** Define infrastructure and configuration in version control, review changes, and apply them with tools. Avoid manual changes on live systems.
3. **Populate the picture automatically.** Use discovery and platform data to feed the CMDB or service map, and reconcile with the code. Limit manual entry to facts that cannot be discovered, such as ownership.
4. **Define each fact's source.** For each attribute, decide where it is authoritative, and where copies are allowed. Show the source and the last update time.
5. **Map critical services first.** Build service maps for the most important services, including dependencies on suppliers and shared platforms. Test them against a real incident or change.
6. **Detect and fix drift.** Compare actual state with the desired state on a schedule, and alert on differences. Treat repeated drift as a signal about process or access.
7. **Name an owner for each item and for data quality.** Show owners in the records. Review stale records and orphans regularly.
8. **Link configuration to change and incident records.** Make it easy to see from a change which CIs it touches and from an incident which CIs are involved. Check that the links are used.
9. **Use labels and tags consistently.** In cloud environments, require tags for owner, service, and environment at creation, and enforce them in the pipeline.
10. **Measure usefulness.** Track how often the data is used in changes and incidents, and how often it was wrong. Fix the causes, and retire data nobody uses.

## Questions to discuss with your team

**What decisions do we want configuration data to support, and does it support them today?**
Start from use. Expect answers such as impact of change and incident scope. Try it on a recent change. Follow up by choosing one use and testing the data against it.

**Where is the true description of our infrastructure: in code, in a database, in people's heads?**
Ask for the source of truth for three systems. Expect several answers. Follow up by choosing one system and moving its definition into version control.

**When did the CMDB last mislead us, and why?**
Ask for a real case. Expect stale or missing relationships. Look for the cause, such as manual entry. Follow up by choosing one data source to automate.

**How do we find out when someone changes a live system by hand?**
This tests drift detection. Expect "we don't". Follow up by agreeing a scan on one system and a rule for what happens next.

**Who owns each of our critical configuration items, and how would we find the owner at 3 a.m.?**
Ask where ownership is recorded. Try it with a few items. Follow up by adding owner tags and checking them.

**How could AI help keep our configuration picture accurate, and what would we check by hand?**
AI can suggest relationships and spot anomalies. It can also invent links. Ask who owns the use and how errors are found. Follow up by comparing AI-suggested relationships with a manually verified map for one service.

## In practice: a service management example

A national railway's digital team runs a ticketing platform made of about 60 services across two cloud providers and an old on-premises data center. The CMDB holds 40,000 records, mostly entered by hand, and the operations team says it is wrong about a third of the time. During a recent outage, a failed message queue stopped ticket sales; nobody realized the loyalty scheme also used it until customers complained.

The platform lead sets a narrower goal: for the ten most critical services, the service map must be correct enough to answer "what is affected if this component fails?" within five minutes. The team defines each of the ten services in code, with owners and dependencies declared as tags in the definitions. A nightly job reads the cloud platform and the code repository, builds the map, and flags differences between the two. The data center is covered by discovery, and its output is matched to the same service names with a manual review for new items.

Within a quarter, the map for the ten services is trusted. On the next incident, a failing database in the payments service shows the five services that read from it, and the team notifies their owners in minutes. A drift report finds 14 manual changes in production, three of which were security group rules opened during an old incident and never closed.

What changes: incidents and changes now begin with a map, and the old CMDB is retired for these services. What remains hard: the other 50 services are not yet covered, and teams that own them see little reason to do the work; the data center's discovery still produces noise; and some dependencies, such as a supplier's API, cannot be discovered and are entered by hand. The platform lead chooses the next ten services by incident history and negotiates time with their owners.

## Four perspectives

### Product and delivery teams

Define your infrastructure and configuration in code, tag resources with owners and services, and avoid manual changes to live systems. Keep dependency information current as part of your design.

### Service and operations teams

Use the map in incidents and changes, and report where it is wrong. Detect drift, close temporary changes, and keep ownership data up to date.

### Leadership and governance

Ask for evidence that the data is used and accurate, not for a count of records. Fund the automation and the ownership discipline. Back the rule that live changes go through code.

### Customers and users

You benefit when providers know what depends on what: faster diagnosis and fewer surprises from changes. Ask whether the services you rely on have owners and impact maps.

## Agile, AI, automation, and analytics

### Agile

Build the picture in small steps, starting with the most critical services, and improve it with the people who use it. Review its usefulness after incidents. Caution: a big-bang CMDB project repeats old failures; start with questions and a few services.

### AI

AI can suggest relationships from logs and traces, answer impact questions in natural language, and find outliers, with an owner and human verification. Caution: AI may infer dependencies that do not exist or miss real ones; validate against known incidents. See Topic 5.2 — AIOps.

### Automation

Automate discovery, reconciliation, drift detection, and tagging enforcement, with logs and review of exceptions. Caution: an automated import can flood the database with low-value records; filter by what supports decisions. See Topic 6.3 — Infrastructure as Code and GitOps.

### Analytics

Look at data completeness for critical services, accuracy found in incidents, drift counts, time to find the owner, and use of the data in changes. Caution: counting records or fields filled encourages volume over accuracy; measure how often the data helped and how often it misled. See the *Service Management Metrics* book and Topic 7.2 — Data Foundations and Governance.

## Common failure modes

- **A CMDB filled by hand.** Data decay quickly. Populate by discovery and code.
- **Recording everything.** Noise hides value. Scope to decisions.
- **Two sources for the same fact.** They disagree. Declare one source.
- **No ownership.** Nobody corrects errors. Assign owners.
- **Manual changes to live systems.** Drift grows. Change through code and detect drift.
- **Relationships missing.** Impact analysis fails. Map critical services first.
- **Tracking ephemeral resources.** Records are stale instantly. Track at service level, with tags.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Scope | Unclear | Main servers listed | Critical services and dependencies mapped | Scope extended by value and incidents | Broad coverage across the estate and suppliers |
| Source of truth | Spreadsheets and memory | Some infrastructure in code | Desired state in code, actual state by discovery | Reconciliation automated and monitored | Single coordinated view fed by code, discovery, and platforms |
| Data quality | Unknown | Spot checks | Defined attributes and freshness | Accuracy measured in incidents and changes | Quality continuously assured with human review |
| Use | Rarely used | Used in some incidents | Used in changes and incidents routinely | Use and value tracked | Data drives risk, cost, and planning across services |

## Checklist

- [ ] We listed the questions our configuration data must answer.
- [ ] Desired state for key systems lives in version control.
- [ ] Discovery feeds our service maps and is reconciled with code.
- [ ] Each fact has a defined source of truth.
- [ ] Critical services have mapped dependencies, tested against real events.
- [ ] We detect and correct configuration drift.
- [ ] Each configuration item or group has an owner.
- [ ] We measure how often the data helps and how often it misleads.

## AI prompts

**Find missing dependencies from an incident.**

```text
Here is the timeline of an incident, with the services that were affected: [paste]. Here is our service map for the failing component: [paste].
List affected services that the map does not show as dependent on the failing component, and for each give a question to verify the link. Do not infer dependencies without evidence in the timeline.
List what you are unsure of.
```

**Compare desired and actual state.**

```text
Here is the desired configuration from our code: [paste]. Here is what discovery found running: [paste].
List differences by type (missing, extra, changed), and for each one a question about why it differs. Do not recommend fixes.
List what you are unsure of.
```

**Draft ownership tag rules.**

```text
Our cloud resources are used by these teams and services: [list]. Tags we want on every resource: [list].
Draft a tagging standard of under one page with rules, allowed values, and how to enforce it in the pipeline. Do not name specific tools unless I list them.
List what you are unsure of.
```

## AI skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): use to design and maintain configuration records and relationships.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to trace dependencies in a process or system.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): use to draw service maps in text.
- [data-quality](../../../../skills/data-quality/SKILL.md): use to define and check the quality of configuration data.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of the service configuration management practice.
- Kief Morris, *Infrastructure as Code* (2nd edition, 2020): a practical guide to defining and managing infrastructure in code.
- Wikipedia, "Configuration management" and "Configuration management database": overviews of the ideas.
- Wikipedia, "Infrastructure as code": the engineering approach to desired state.

## References

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
