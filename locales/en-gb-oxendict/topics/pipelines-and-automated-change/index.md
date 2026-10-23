# Pipelines and Automated Change

**A delivery pipeline can carry the controls that change enablement needs: tests, security checks, policy checks, peer review, separation of duties, and an evidence trail for every change; the human approval that remains is for the judgement calls the pipeline cannot make.**

## Why this matters

When change was rare and large, control meant a meeting. People gathered, read a document, and agreed that a release could go ahead. When change became frequent and small, the meeting did not scale. A team that releases twenty times a day cannot convene twenty boards. It can, however, run the same set of checks twenty times, with consistent rigor, and keep a record of each.

That is the pipeline's contribution to service management. The same automated sequence that builds and deploys a change can also test it, scan it for weaknesses, check it against policy, require a second reviewer, and write down what happened. The result is often better control than a meeting provided: consistent, tied to the actual change, and available to an auditor long afterward. Wikipedia describes continuous delivery and test automation as the practices that make this possible.

The pipeline is also a new thing to govern. It holds credentials that can change production, it can be misconfigured to skip checks, and it can lull a team into trusting green ticks that test little. This topic explains how to design pipelines as controls, how to produce evidence for auditors, and how to keep the human judgement that automation cannot replace. It builds on continuous delivery (Topic 2.2 — Continuous Delivery) and change enablement (Topic 3.4 — Change Enablement), connects to infrastructure as code (Topic 6.3 — Infrastructure as Code and GitOps) and release management (Topic 3.5 — Release and Deployment Management), and shares concerns with information security (Topic 3.13 — Information Security Management).

## Core concepts

**Pipeline.** An automated sequence of stages that takes a change from source code to production: build, test, scan, package, deploy, verify. Wikipedia describes pipelines in software. Each stage passes or fails, and a failure stops the change. Pipelines are defined as code and stored in version control.

**Continuous integration and delivery.** Merging changes often and keeping every build releasable, as described in Topic 2.2 — Continuous Delivery. The pipeline is the machinery of both. Wikipedia describes continuous integration and continuous delivery.

**Stages as controls.** Each stage is a control with a purpose:

| Stage | Control it provides |
|---|---|
| Build | The change compiles and packages reproducibly |
| Unit and integration tests | Known behaviour still works |
| Static analysis and security scans | Common flaws and vulnerable dependencies are found |
| Policy checks | Rules such as tagging, encryption, and approved regions are met |
| Peer review | A second person has read the change |
| Staged deploy and verification | The change works in a safe place before wider exposure |

**Quality gates.** A condition that a change must meet to proceed, such as tests passing, no critical vulnerabilities, or coverage not falling. Wikipedia describes quality control more broadly. Gates should be few, clear, and fast. A gate that is often overridden or ignored teaches the team to ignore gates.

**Automated testing.** Unit tests, integration tests, and end-to-end tests run on every change. Wikipedia describes test automation, unit testing, and integration testing. The value lies in how much you trust them: flaky tests erode confidence. See Topic 2.2 — Continuous Delivery.

**Security scanning.** Static analysis examines code for patterns of weakness; software composition analysis examines the libraries you use for known vulnerabilities. Wikipedia describes both static application security testing and software composition analysis. Findings need triage, since many are low risk or false.

**Policy as code.** Rules written as machine-checkable code and applied in the pipeline, for example "no storage bucket may be public". They make requirements testable and the results recordable. See Topic 6.3 — Infrastructure as Code and GitOps.

**Separation of duties.** The person who writes a change is not the only one who approves it. Wikipedia describes separation of duties. In a pipeline this is enforced by requiring a second reviewer and by preventing the author from approving their own change. Where regulation requires it, the pipeline can show who did what.

**Change types in a pipeline.** Standard changes, such as a routine configuration update, can pass through with automated checks alone and no manual approval. Normal changes with higher risk can add a human approval step in the pipeline. Emergency changes use the same pipeline in a fast mode, with the same record. See Topic 3.4 — Change Enablement.

**Evidence.** The pipeline records what changed (the commit), who reviewed it, what checks ran and their results, who or what deployed it, and when. Wikipedia describes audit trails. Evidence should be stored where it cannot be altered by the people it concerns, and be easy to retrieve by change.

**Software supply chain.** The pipeline builds from components provided by others, uses tools from others, and produces artefacts that are deployed. Wikipedia describes the software supply chain and the idea of provenance, a verifiable record of where an artefact came from. Practices include pinning versions, signing artefacts, and keeping a bill of materials. See Topic 4.2 — Software Asset Management.

**Progressive rollout and verification.** After deploying, the pipeline can check health indicators and roll back automatically if they worsen. Techniques such as staged rollout and feature flags are described in Topic 3.5 — Release and Deployment Management.

**Pipeline security.** The pipeline can deploy to production, so it is a high-value target. Protect it: restrict who can change pipeline definitions, use short-lived credentials, isolate build environments, and monitor for unusual activity. Treat changes to the pipeline as carefully as changes to production.

**Bypass and exceptions.** Some changes will not fit: a data fix, a manual vendor action. Define a recorded exception route, with approval, instead of leaving people to find workarounds. Review exceptions regularly.

**Pipeline as a product.** Pipelines need owners, a backlog, documentation, and users who give feedback. Slow or flaky pipelines teach people to avoid them.

**How the lenses fit.** Pipelines are where the agile lens and the automation lens meet governance. AI can suggest tests, review changes, and explain failures, under human review. Analytics uses pipeline data to show delivery and change quality.

## Best practices

1. **Design each stage as a named control.** For each stage, write what risk it addresses, who owns it, and what a failure means. Remove stages that do not address a real risk.
2. **Keep the pipeline fast.** Aim for a result in minutes for the common path. Run slow checks in parallel or later stages, with clear feedback, so that people do not look for shortcuts.
3. **Make the pipeline the only route.** Production changes go through it, with a recorded exception route for the rest. Block direct access where you can.
4. **Enforce separation of duties in tooling.** Require a qualified second reviewer, stop authors approving their own changes, and record both identities.
5. **Treat failures seriously.** A failing test or scan stops the change. Do not allow routine overrides, and require approval and a recorded reason when one is needed.
6. **Triage security findings.** Set thresholds by severity and exposure, fix the serious ones, and track the rest. Tune rules to reduce noise so that findings are read.
7. **Record evidence automatically.** Capture commit, reviewers, checks, results, artefacts, and deployment details in a store that cannot be edited by the change author. Link it to the change record.
8. **Secure the pipeline itself.** Limit who can change definitions, use short-lived credentials with minimum scope, pin tools and dependencies, and sign artefacts.
9. **Verify after deployment.** Check health indicators, and roll back or pause when they worsen. Report results in the same record.
10. **Review the pipeline regularly.** Look at which checks catch real problems, which are ignored, how long runs take, and which exceptions occur. Improve and prune.

## Questions to discuss with your team

**Which of our change controls does the pipeline provide today, and which still depend on a meeting or a form?**
List the controls. Expect that some are manual that could be automated. Follow up by choosing one to move into the pipeline.

**What would an auditor see if they asked for the evidence for one change from last month?**
Try it. Expect to piece together several systems. Follow up by agreeing a single record per change and a way to retrieve it.

**How often do people override or bypass a failing check, and why?**
Ask for data. Expect more than anyone says. Follow up by looking at the most-overridden check to fix or remove it.

**Who can change the pipeline definition, and who reviews that change?**
This tests pipeline security. Expect wide access. Follow up by restricting access and requiring review for pipeline changes.

**Which findings from our scanners do we read, and which do we ignore?**
Ask engineers. Expect "mostly ignore". Follow up by tuning the scanner to the findings people will act on.

**Where could AI help in the pipeline, and what must stay a human decision?**
AI can propose tests, summarize failures, and review code. Approval of risk and exceptions should remain human. Follow up by trialing AI-suggested tests with review.

## In practice: a service management example

A national social security agency runs about 80 applications. Changes to its benefits calculation system require a weekly review board and a long form, and releases happen monthly. The audit office finds that the board approves nearly everything and that evidence for individual changes is scattered. The agency's engineers argue that a pipeline could do better.

The delivery manager runs a pilot on one application. A pipeline builds the application, runs 1,800 unit and integration tests and a set of regression tests drawn from past defects, scans the code and the libraries, checks the infrastructure definition against policy, and requires a review from a second engineer who has worked on the system. Every run writes a record: commit, reviewers, test results, scan results, artefact identifier, and deployment details, stored in a log that engineers cannot edit.

The change process is redesigned in three routes. Routine changes, such as text updates and minor configuration, are standard: if the pipeline passes, the change is deployed to a pilot group and then to everyone, with no board. Changes to the benefit calculation rules are normal and require, in addition, a sign-off from a policy analyst, who sees a plain-language summary and test results. Emergency fixes use the same pipeline with a shortened test set and a retrospective review.

The audit office reviews a sample of 30 changes, and finds that the evidence is complete for all of them and that the pipeline blocked four changes for failing checks. It also notes that two engineers had approved each other's changes repeatedly, and asks for a rule that reviewers rotate.

What changes: releases become weekly, the board focuses on rule changes, and an auditor can retrieve the evidence for any change in minutes. What remains hard: the older applications cannot run the automated tests, so their changes keep the old route; scanners flag many low-risk library issues, and engineers have begun to ignore the report; and the pipeline's own credentials were found to have broader access than needed. The manager adds scanner tuning, reviewer rotation, and a review of pipeline credentials.

## Four perspectives

### Product and delivery teams

Own the pipeline for your service: keep it fast, trusted, and honest about what it checks. Write tests that catch real faults, fix flaky ones, and treat findings as work. Do not bypass it.

### Service and operations teams

Help define the checks and the health indicators the pipeline uses after deployment. Use the evidence in incidents and reviews. Keep an exception route for real emergencies.

### Leadership and governance

Ask for evidence from pipelines, not for more meetings. Fund tests, scanning, and pipeline security. Review overrides and exceptions. Do not mistake green pipelines for safe systems.

### Customers and users

You benefit from frequent, safer changes. You should be told about significant changes that affect you, and be able to report problems after a release.

## Agile, AI, automation, and analytics

### Agile

Small, frequent changes that pass the same checks every time are the practical form of agile control. Improve the pipeline from incidents and feedback. Caution: do not treat the pipeline as finished; test gaps grow as the system changes.

### AI

AI can suggest tests, review changes, summarize failures, and triage findings, with a person responsible for each decision. Caution: AI-generated tests may pass while testing little, and AI code review can miss security issues; measure defects that escape, and keep human review for risk. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

The pipeline is automation of the path to production, including checks and records. Protect it as critical infrastructure with its own identity, least privilege, and monitoring. Caution: automated approval based on weak rules gives false assurance; review what each rule really checks. See Topic 6.1 — Automation Strategy.

### Analytics

Track lead time, deployment frequency, change failure rate, time to restore, override counts, escaped defects, and findings by severity. Caution: delivery measures are easy to game and should not rank teams; track escaped defects to test the checks. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Green means safe.** Tests are thin and pass. Review what each check really tests and track escaped defects.
- **Routine overrides.** Checks are bypassed. Make overrides rare, approved, and reviewed.
- **Slow pipeline.** People look for shortcuts. Keep the common path fast.
- **Scanner noise.** Findings are ignored. Tune and triage.
- **Evidence scattered.** Audits take weeks. Record automatically in one place.
- **Over-privileged pipeline.** One compromise reaches everything. Limit access and use short-lived credentials.
- **Self-approval.** Authors approve their own work. Enforce separation of duties in tooling.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Controls | Manual checks | Build and some tests | Tests, scans, policy, and review on every change | Check effectiveness measured | Controls adapt automatically by risk with human oversight |
| Evidence | Forms and email | Some logs | Automatic record per change | Evidence audited and sampled | Evidence continuous across pipelines and suppliers |
| Pipeline security | Shared credentials | Awareness | Least privilege, pinned tools, protected definitions | Pipeline monitored and tested | Supply chain verified end to end |
| Flow | Slow, manual | Faster builds | Fast common path with exceptions route | Flow and failure measured | Delivery optimized across services |

## Checklist

- [ ] Each pipeline stage has a named purpose and owner.
- [ ] The common path runs in minutes.
- [ ] Production changes go through the pipeline, with a recorded exception route.
- [ ] Separation of duties is enforced in tooling.
- [ ] Failing checks stop changes, and overrides are approved and reviewed.
- [ ] Evidence is recorded automatically in a store authors cannot edit.
- [ ] Pipeline definitions and credentials are protected and reviewed.
- [ ] We review check effectiveness, including escaped defects.

## AI prompts

**Map controls to the pipeline.**

```text
Here is our list of change controls: [paste]. Here is a description of what our pipeline does: [paste].
For each control, say whether the pipeline description appears to provide it, partly provide it, or not mention it, quoting the words. Do not assume checks that are not described.
List what you are unsure of.
```

**Review a failed pipeline run.**

```text
Here is the log of a failed run: [paste, with secrets removed].
Summarize which stage failed, the error messages, and the three most likely areas to check, labelling each as a hypothesis. Do not suggest overriding the failure.
List what you are unsure of.
```

**Prepare an evidence sample for an audit.**

```text
Here are the records for [number] changes: [paste summary with commit, reviewers, checks, results].
For each, check whether it shows a reviewer who is not the author, passing tests, scan results, and deployment time, and list gaps. Do not infer anything not in the records.
List what you are unsure of.
```

## AI skills

- [change-request](../../../../skills/change-request/SKILL.md): use to describe changes and the evidence they need.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): use to move testing earlier in the pipeline.
- [security-testing](../../../../skills/security-testing/SKILL.md): use to plan pipeline security checks.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): use to check evidence against control requirements.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): use to build tests alongside changes.

## Key sources

- Jez Humble and David Farley, *Continuous Delivery* (2010): the foundational account of deployment pipelines.
- Nicole Forsgren, Jez Humble, and Gene Kim, *Accelerate* (2018): research on delivery practices and performance.
- DORA (dora.dev): ongoing research and reports.
- Wikipedia, "Continuous delivery" and "Software supply chain": overviews of the practice and its risks.

## References

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
4. Unit testing — Wikipedia — https://en.wikipedia.org/wiki/Unit_testing
5. Integration testing — Wikipedia — https://en.wikipedia.org/wiki/Integration_testing
6. Static application security testing — Wikipedia — https://en.wikipedia.org/wiki/Static_application_security_testing
7. Software composition analysis — Wikipedia — https://en.wikipedia.org/wiki/Software_composition_analysis
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Code signing — Wikipedia — https://en.wikipedia.org/wiki/Code_signing
12. DORA research — DevOps Research and Assessment — https://dora.dev/research/
