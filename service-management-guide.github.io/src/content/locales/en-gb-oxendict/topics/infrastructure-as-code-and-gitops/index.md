# Infrastructure as Code and GitOps

**Infrastructure as code defines servers, networks, and cloud resources in reviewed text files that tools apply; GitOps adds the rule that the repository is the only way to change live systems and that a controller keeps reality matching it, so version control becomes the record of change and the means of recovery.**

## Why this matters

For a long time, infrastructure was built by hand. An engineer logged in to a server, installed packages, edited configuration, and moved on. The server became a unique object, with a history that lived in the engineer's memory and a few notes. When it failed, it was rebuilt from memory. When a second server was needed, it was a copy that differed in small ways nobody could list. Troubleshooting meant working out how two "identical" systems had come to behave differently.

Infrastructure as code (IaC) replaces this with text. The desired state of the infrastructure is written in files, kept in version control, reviewed like software, and applied by tools. Rebuilding an environment becomes a command. A second copy is the same files with different values. A change is a pull request, with a reviewer, a test, and a record. Wikipedia describes infrastructure as code as the management and provisioning of infrastructure through machine-readable definition files, rather than interactive configuration.

GitOps carries the idea one step further. The repository is declared the single source of truth for the desired state, and software watches both it and the live system, and brings the system into line. Nobody changes production by hand; they change the repository. This gives service management a lot: an audit trail for every change, fast recovery, consistency between environments, and a natural home for change approval. It also introduces new risks, such as secrets in repositories and mistakes that apply everywhere at once. This topic explains the ideas and how to adopt them with care. It builds on configuration management (Topic 4.4 — Configuration Management), continuous delivery (Topic 2.2 — Continuous Delivery), and change enablement (Topic 3.4 — Change Enablement), and it leads into pipelines (Topic 6.4 — Pipelines and Automated Change).

## Core concepts

**Infrastructure as code (IaC).** Defining infrastructure in code or configuration files that tools read and apply. It covers servers, networks, storage, databases, access rules, and platform settings. Wikipedia describes the approach and its history. The files are the documentation as well as the mechanism.

**Declarative and imperative.** A declarative definition states what the end state should be ("there are three servers of this type behind this load balancer"); the tool works out how to get there. An imperative definition states the steps to take. Wikipedia describes declarative and imperative programming. Declarative tools tend to be easier to reason about and to repeat safely, and imperative scripts offer more control for unusual tasks. Many teams use both.

**Tools.** Examples include Terraform, which provisions cloud resources, Ansible, which configures systems, and Kubernetes, which runs containers according to declared manifests. Wikipedia describes each. The tool landscape changes quickly; choose by fit, support, and the skills you have, and keep definitions as portable as is practical.

**Desired state, actual state, and drift.** Desired state is what the code says; actual state is what is running. Drift is the difference, usually from manual changes or failures. Detecting drift and correcting it is a core benefit of IaC. See Topic 4.4 — Configuration Management.

**Idempotence.** Applying the same definition repeatedly gives the same result. Wikipedia describes idempotence. It is what makes it safe to re-run an apply to correct drift.

**State files.** Some tools keep a record of the resources they manage, which they compare with the definition. Treat it with care: it can contain sensitive data, must not be edited by hand, and needs locking so that two people do not apply at once.

**Immutable infrastructure.** Instead of changing a running server, you build a new one from a known image and replace the old. This avoids drift and makes rollback simple: switch back. It works best with virtual machines and containers, described on Wikipedia, and well-built images.

**Version control and review.** Definitions live in version control, such as Git, which Wikipedia describes as a distributed version control system. Changes go through branches and reviews, described as pull requests and code review. The history shows who changed what, when, and why, which supports audit and learning. See Topic 3.4 — Change Enablement.

**GitOps.** An operating approach in which a Git repository holds the desired state, and an automated agent keeps the live system in line with it. Changes are made only by changing the repository; the agent pulls and applies them, and reverts manual changes. Wikipedia mentions GitOps under DevOps. The pull-based design means the production system pulls its own configuration, so credentials for production need not live in the build system. Check the project's own documentation for details of the approach.

**Reconciliation loops.** A controller that repeatedly compares desired and actual state and acts to close the gap. The idea comes from control theory, described on Wikipedia, and underlies how Kubernetes and GitOps tools work. Loops are resilient, and they can also repeat a bad change quickly.

**Environments and promotion.** The same definitions, with different values, create development, test, and production environments. Changes are promoted through them. Keeping environments consistent makes tests more meaningful. See Topic 3.5 — Release and Deployment Management.

**Policy as code.** Rules about what is allowed, such as "no public storage" or "all resources must be tagged", written as code and checked automatically before changes are applied. This puts controls where the change is made and produces evidence. See Topic 6.4 — Pipelines and Automated Change.

**Secrets.** Passwords, keys, and tokens must not be stored in plain text in repositories. Use a secrets manager or encryption, and give automation minimal, short-lived access. See Topic 3.13 — Information Security Management.

**Modules and reuse.** Shared, tested modules for common patterns, such as a standard network or a database, speed up work and enforce standards. They need an owner, versions, and release notes.

**Blast radius.** A mistake in a shared definition can affect many systems at once. Limit this by splitting state into smaller units, using staged rollouts, and requiring review for shared modules.

**Testing infrastructure code.** Methods include syntax and policy checks, plan or preview of changes before applying, tests in disposable environments, and post-apply checks. Wikipedia describes related ideas under test automation. See Topic 2.2 — Continuous Delivery.

**How the lenses fit.** IaC and GitOps are the engineering base for agile operations: small, reviewed, reversible changes. AI can draft definitions and explain plans, under review. Automation applies them. Analytics reads the history for change frequency and failure.

## Best practices

1. **Put every change in code.** Make the repository the route for changes to important systems, and prohibit manual changes except in defined emergencies. Record emergency changes and fold them back.
2. **Use review and small changes.** Require a second person to review every change, and keep changes small enough to understand. Show the preview of what will change.
3. **Prefer declarative definitions and idempotent steps.** They are easier to repeat and to check for drift. Use imperative scripts for tasks that need them, with care.
4. **Detect and correct drift.** Compare actual with desired state on a schedule or continuously. Decide for each kind of drift whether to revert automatically or to alert.
5. **Keep secrets out of code.** Use a secrets manager, encrypt where needed, give automation short-lived credentials, and scan repositories for leaked secrets.
6. **Protect state and the repository.** Restrict who can change production definitions and state, enforce branch protection, and back up the repository and state.
7. **Test before applying.** Run policy checks, previews, and tests in disposable environments. Review the plan for unexpected deletions.
8. **Limit the blast radius.** Split definitions into units that can fail independently, roll out in stages, and protect critical resources against accidental deletion.
9. **Reuse tested modules with owners.** Publish versioned modules for standard patterns, with documentation and release notes, and retire old versions.
10. **Plan recovery.** Rehearse rebuilding an environment from code, including data restore, and time it. Include the repository and tools in your continuity plans. See Topic 3.12 — Service Continuity Management.

## Questions to discuss with your team

**Which of our systems could we rebuild from code today, and which only from memory?**
Make a list. Expect many to depend on one person. Follow up by choosing one system and defining it in code.

**When did someone last change production by hand, and how did we find out?**
Ask for stories. Expect that nobody tracks it. Follow up by adding drift detection to one environment and agreeing what happens on a difference.

**Where could a secret be sitting in a repository or a state file?**
Search together. Expect surprises. Follow up by scanning repositories and moving the findings into a secrets manager.

**What is the largest change a single apply could make, and how would we limit it?**
Think of shared modules and monolithic states. Expect uncomfortable answers. Follow up by splitting one large state into smaller ones.

**How do we review infrastructure changes, and what does a reviewer actually look at?**
Ask for a recent review. Expect a quick approval. Follow up by agreeing what a reviewer must check, such as the plan output and security impact.

**Where could AI help us write or review infrastructure code, and how do we check it?**
AI can draft definitions and explain plans. It can also produce insecure defaults or wrong resource settings. Ask who reviews and what checks run. Follow up by running AI-drafted code through the same policy checks as any other.

## In practice: a service management example

A national library's digital team runs a catalogue search service on a public cloud. The environments were built by hand over several years. A test environment differs from production in ways nobody can list, and a recent outage was traced to a security group change made manually during an earlier incident and never recorded.

The platform lead chooses to define one environment in code as a pilot. Using a declarative tool, the team describes the network, the compute, the database, and the access rules for the test environment, imports existing resources, and puts the code in a repository with branch protection and mandatory review. A pipeline runs policy checks, such as no public storage and mandatory tags, and shows the plan on each pull request. Secrets move to the cloud provider's secrets manager.

Then they add drift detection: a nightly job compares the code with the cloud's actual state and posts differences to the team channel. In the first week it finds eleven manual changes. Eight are harmless, two are stale test resources, and one is an open firewall rule on a database port. They fix the rule and delete the resources.

After three months, production is also in code, and a GitOps-style controller in the container platform applies approved changes from the repository. A rebuild of the test environment from scratch takes 40 minutes. The team rehearses rebuilding production in a separate account, with a data restore, in half a day.

What changes: change history is in the repository, reviews are real, and the two environments match. What remains hard: the older database server is not well supported by the tooling and remains partly manual; the state file once contained a plain-text password from an earlier import, which the team had to rotate; and one engineer applied a change from a laptop with a different tool version, which produced unexpected differences. The lead adds a pinned tool version in the pipeline, a rule that applies come only from the pipeline, and a scan of the state for secrets.

## Four perspectives

### Product and delivery teams

Define your service's infrastructure in code beside the application, review it, and test it in disposable environments. Avoid manual changes. Include tags, ownership, and security settings in the definition.

### Service and operations teams

Use the repository as the record of change, and detect drift. Review plans carefully, protect state and secrets, and rehearse rebuilds. Keep emergency changes rare and fold them back into code.

### Leadership and governance

Ask for evidence from the repository and pipeline instead of meetings. Fund the tooling, training, and rehearsals. Make clear that manual production changes are exceptions that must be recorded.

### Customers and users

You benefit from environments that behave the same way and from faster recovery. You should see fewer surprises after changes, and clear notice of significant ones.

## Agile, AI, automation, and analytics

### Agile

Small, reviewed, reversible infrastructure changes with quick feedback are the operational form of continuous delivery. Build the definitions incrementally, starting with the most painful environment. Caution: a mass migration of every system to code at once is risky; move one at a time.

### AI

AI can draft definitions, explain a plan, and suggest policy rules, with a person reviewing every change. Name an owner for each use. Caution: generated infrastructure code can be insecure by default or can delete resources; apply the same policy checks and read the plan. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

IaC and GitOps are automation of infrastructure itself. Keep controllers and pipelines minimal-privilege, logged, and protected, because they can change everything. Caution: an automatic reconciler can reapply a mistake everywhere; stage rollouts and keep a way to pause it. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Look at change frequency, failure rate, time to rebuild, drift counts, time to detect manual changes, and policy violations. Caution: counting commits rewards activity, and a low drift count may reflect a weak detector; test detection with a known change. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Hybrid reality.** Some changes in code and some by hand. Drift grows. Make code the only route and detect drift.
- **Secrets in the repository.** Credentials leak. Use a secrets manager and scan.
- **Huge shared state.** One change affects everything. Split into smaller units.
- **Unreviewed changes.** Mistakes reach production. Require review and show the plan.
- **Unpinned tools and modules.** Behaviour changes unexpectedly. Pin versions.
- **Never rebuilt.** Recovery fails when needed. Rehearse a rebuild.
- **Pipeline as superuser.** A compromised pipeline owns production. Limit privileges and protect it.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Coverage | Manual | Some resources in code | Most important systems defined in code | Coverage and exceptions tracked | Entire estate defined and governed as code |
| Control | No review | Peer review | Review, plan preview, and policy checks on every change | Drift detected and acted on | Reconciliation with human oversight across environments |
| Security | Secrets in code | Awareness | Secrets managed and scanned, minimal-privilege automation | Findings tracked to closure | Security and policy embedded in shared modules |
| Recovery | Rebuild by memory | Documented | Rebuild rehearsed and timed | Recovery time measured and improved | Recovery automated across environments and regions |

## Checklist

- [ ] Important systems are defined in code in version control.
- [ ] Every change is reviewed and shows a plan preview.
- [ ] Manual production changes are prohibited except recorded emergencies.
- [ ] Drift is detected on a schedule and handled by a rule.
- [ ] Secrets are in a manager, and repositories and state are scanned.
- [ ] Tools and modules are pinned and have owners.
- [ ] Definitions are split to limit blast radius.
- [ ] We rehearse rebuilding an environment and record the time.

## AI prompts

**Review a plan output.**

```text
Here is the plan output from an infrastructure change: [paste].
List resources to be created, changed, and destroyed, highlight any deletion or replacement of a data store or network component, and list questions a reviewer should ask. Do not approve or reject.
List what you are unsure of.
```

**Draft policy rules from requirements.**

```text
Our requirements: [list, such as no public storage, tags required, encryption at rest]. Our tool: [name, or "undecided"].
Write each requirement as a plain-language rule with one example of a violation, and describe how to test the rule. Do not write code unless I name the tool.
List what you are unsure of.
```

**Summarize drift findings.**

```text
Here is a drift report listing differences between code and the running environment: [paste].
Group the differences by type (extra resource, changed setting, missing resource), flag any that touch access, network, or encryption, and write one question per group for the team. Do not recommend fixes.
List what you are unsure of.
```

## AI skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): use to link code definitions to the services they support.
- [change-request](../../../../skills/change-request/SKILL.md): use to describe infrastructure changes clearly for review.
- [security-testing](../../../../skills/security-testing/SKILL.md): use to plan checks for infrastructure code and secrets.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): use to rehearse rebuilding from code.
- [runbook](../../../../skills/runbook/SKILL.md): use to document emergency manual procedures that remain.

## Key sources

- Kief Morris, *Infrastructure as Code* (2nd edition, 2020): a practical guide to defining and managing infrastructure.
- Jez Humble and David Farley, *Continuous Delivery* (2010): foundations for repeatable environments and pipelines.
- The documentation of the tools you use, such as Terraform, Ansible, and Kubernetes: the authoritative source on their behaviour.
- Wikipedia, "Infrastructure as code": an overview of the approach.

## References

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
