# Continuous Delivery

**Continuous delivery is the practice of keeping software always in a releasable state and shipping small changes to live services often, through automated build, test, and deploy steps; it makes change safer by making it smaller, and it is how agile teams change live services without waiting for a quarterly release.**

## Why this matters

Change is the largest source of risk in a live service, and the usual response is to slow it down: fewer releases, more approvals, bigger test cycles. Each of these makes the next release bigger, which makes it riskier, which prompts more caution. Teams find themselves releasing once a quarter with a long weekend of anxious work.

Continuous delivery turns that cycle around. If a change is small, its effects are easy to understand, easy to test, and easy to reverse. If it is released through an automated pipeline, the same checks run every time, in the same order, with a record. If the release can be made at any time, the team can respond to a failing service or a customer's need in hours rather than weeks.

For service management, continuous delivery matters because it changes what control looks like. A change enablement practice built around a weekly board meeting cannot keep pace with 20 releases a day, and does not need to if the pipeline carries the checks (see Topic 3.4 — Change Enablement and Topic 6.4 — Pipelines and Automated Change). This topic explains the practice, the vocabulary, and how to introduce it without losing control.

## Core concepts

**Continuous integration.** Developers merge their work into a shared main line frequently, at least daily, and every merge triggers an automated build and test run. The aim is to find integration problems when they are small. Wikipedia's article on continuous integration describes the practice and its origins in extreme programming.

**Continuous delivery.** Builds that pass the automated checks are always in a state that could be released. The decision to release is a business decision, taken when it suits, not a technical hurdle. In the standard formulation, the release is one click and low risk.

**Continuous deployment.** A further step in which every change that passes the pipeline is released to production automatically, with no manual approval. It is a choice, not a requirement of continuous delivery, and it suits some services and some risks better than others.

**The deployment pipeline.** An automated sequence of stages: build, unit tests, integration tests, security checks, deployment to a test environment, acceptance tests, and release. Each stage either passes the change on or stops it. The pipeline is both a safety mechanism and a source of evidence, because it records what was checked.

**Small batches.** Releasing small changes means each one touches little. Little's law from queueing theory, which Wikipedia describes, explains part of the effect: with the same rate of work, smaller batches mean shorter queues and shorter delays. Small batches also make faults easier to trace to a cause.

**Separating deployment from release.** Deployment puts code on production servers. Release makes a feature available to users. Techniques such as feature toggles let you deploy code switched off and enable it later, for some users first. This reduces the risk of each step. See Topic 3.5 — Release and Deployment Management.

**Progressive delivery.** Releasing to a small share of users first, watching, and widening gradually. Variants include canary releases, where a small group gets the change, and blue–green deployment, where two production environments alternate so that a switch can reverse quickly.

**Version control and trunk-based development.** All changes, including configuration and infrastructure definitions, live in version control. Many teams work on a single main branch with short-lived branches, which keeps integration frequent. See Topic 6.3 — Infrastructure as Code and GitOps.

**Fast feedback and recovery.** The goal is to find faults quickly and to recover quickly. Research programmes on software delivery, such as the DevOps Research and Assessment (DORA) work, track measures such as deployment frequency, lead time for changes, change failure rate, and time to restore service. Treat them as questions about your system, not scores for teams; see the *Service Management Metrics* book.

**What it requires.** Automated tests you trust, a stable pipeline, an ability to roll back or roll forward, production monitoring that shows a change's effect, and a team that owns what it releases. Without these, frequent releases are reckless; with them, they are safer than infrequent ones.

**How the lenses fit.** Continuous delivery is the practical form of the agile lens for live services. AI assistants help write and review code and tests under human review. Automation is the core of the pipeline. Analytics tells you what the pipeline and the services are doing.

## Best practices

1. **Keep the main line releasable.** Treat a broken build as the team's top priority. A rule such as "fix or revert within the hour" keeps integration healthy.
2. **Make changes small.** Aim for changes a reviewer can understand in minutes. If a change is large, split it, for example by releasing the preparatory step first.
3. **Automate the checks you trust.** Build, unit, integration, and security checks run on every change. Add a check when an incident shows a gap, and remove one that never fails and costs time, after discussion.
4. **Use one pipeline path for all changes.** Avoid special routes for urgent changes. A single path that is fast enough for emergencies is safer than an exception that is rarely exercised.
5. **Separate deployment from release.** Use feature toggles and staged rollouts so that new behaviour can be switched on for a few users and off again quickly. Record the state of each toggle and remove old ones.
6. **Plan the way back.** For each change, know how to roll back or roll forward, and practice it. Data changes need particular care, since a code rollback cannot undo them.
7. **Monitor the effect of every release.** Watch error rates, latency, and user-facing indicators for a defined period after release, and make it easy to correlate a change with a symptom.
8. **Write down what the pipeline checks.** A short description of each stage, its purpose, and its owner lets auditors, new staff, and operations understand it.
9. **Include operations from the start.** Bring operations and support people into design, so that logging, runbooks, and alerts are part of the change, not an afterthought.
10. **Improve the pipeline as a product.** Give it an owner and a backlog. Slow, flaky pipelines teach people to bypass them.

## Questions to discuss with your team

**How long does it take our smallest change to reach production, and where does it wait?**
This finds delay. Ask for a real example with timestamps. Typical waits are manual testing, approval, environment access, and release windows. Follow up by choosing the longest wait and a first step to cut it.

**Which of our manual approvals could a pipeline check replace, and what risk does each control?**
Each approval exists for a reason, often an incident years ago. Ask what risk it addresses and what evidence would satisfy the approver. Expect resistance from owners of controls; ask them to help design the replacement. Follow up by trialing one replacement with a review date.

**What happens when a release goes wrong? How quickly could we reverse it, and have we practiced?**
Teams often discover that rollback exists on paper only. Ask for the last time it was used. Follow up by planning a rehearsal in a safe environment.

**Which tests do we trust, and which ones do we ignore?**
Flaky tests erode confidence. Ask which failures the team shrugs off. Expect honest answers about tests that "usually pass on retry". Follow up by choosing one flaky test to fix or delete.

**How do we know within an hour whether a release harmed users?**
This tests monitoring. Answers range from "we wait for complaints" to dashboards and automatic alerts. Ask which indicator would have caught the last bad release. Follow up by choosing one indicator to add and check.

**Where might AI help in our pipeline, and who reviews what it produces?**
AI can draft tests, review changes, and explain failures. Ask what each use would produce and who is accountable. Expect enthusiasm and little oversight. Follow up by choosing one low-risk use with human review and a measure of errors.

## In practice: a service management example

A regional hospital group's digital team runs a patient appointments service used by 30 clinics. Releases happen quarterly in a weekend window with a large test checklist. The last two releases overran, and one introduced a fault that showed up on Monday morning as double-booked appointments.

The team lead, working with the service owner, proposes small steps. First they automate the build and the 200 most important regression tests, so they run on every change. Second they put configuration into version control and require a peer review for each change. Third they add a feature toggle so that new booking rules can be enabled for one clinic first. The clinical safety officer, who signs off the service, asks for evidence that each change was tested and reviewed. The team shows her the pipeline record for each release.

After four months, the team releases weekly, and the Monday-morning risk is smaller because changes are smaller and visible. The double-booking rule change is first enabled at one clinic, caught on day two when a receptionist notices an odd message, and switched off within minutes.

What changes: releases stop being weekend events and the safety officer reviews evidence instead of attending meetings. What remains hard: the test suite still misses some complex booking cases, a legacy interface to the patient record system has no automated test, and two clinics are unhappy with weekly change because it affects their training. The team agrees a change calendar for training-sensitive features and keeps adding tests as incidents reveal gaps.

## Four perspectives

### Product and delivery teams

Own the pipeline and what it releases. Keep changes small, tests trusted, and toggles tidy. Include logging, alerts, and runbooks in the definition of done, and watch the effect of every release.

### Service and operations teams

Help define what the pipeline checks and what monitoring shows. Work with developers on rollback and on what "healthy" looks like. Ask for the release record when an incident starts.

### Leadership and governance

Fund the pipeline, tests, and monitoring, which are easy to starve. Ask for evidence of control from the pipeline rather than meetings. Do not use delivery measures to rank teams.

### Customers and users

Expect small, frequent changes and fast fixes. Tell the team when a change disrupts you, for example around training or busy periods, and ask for notice of significant changes.

## Agile, AI, automation, and analytics

### Agile

Continuous delivery is the delivery side of agile practice: working change in small pieces, with stakeholders involved and a regular review of what to improve. Caution: do not equate it with a particular method; teams can deliver continuously with or without sprints.

### AI

AI assistants can draft code, tests, and release notes, and summarise failures, with a named owner and a person reviewing each output before it enters the pipeline. Caution: generated code may carry security or licensing problems; run the same checks as for any change, and track the share of AI-assisted changes that cause defects. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Automate build, test, security scanning, deployment, and the evidence trail, and keep rollback automatic where you can. Caution: a green pipeline shows the checks passed, not that the change is right; keep human review for design and risk decisions. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Track lead time for changes, deployment frequency, change failure rate, and time to restore, as questions for the system. Caution: when these become targets, teams split changes artificially or avoid recording failures; use them with the guardrails in the *Service Management Metrics* book.

## Common failure modes

- **Frequent releases without tests.** Speed rises and trust falls. Build the checks first, and release as often as they support.
- **A separate path for urgent changes.** The urgent path is untested and risky. Make the main path fast enough for emergencies.
- **Long-lived feature toggles.** Old toggles pile up and nobody knows what is on. Track toggles and remove them after rollout.
- **No rollback rehearsal.** Rollback fails when needed. Practice it in a safe environment.
- **Flaky tests ignored.** People stop believing red builds. Fix or remove flaky tests.
- **Treating the pipeline as someone else's job.** It decays. Give it an owner and a backlog.
- **Measures used to rank teams.** Teams game numbers. Use measures to find problems, not to compare people.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Release frequency | Quarterly or rarer | Monthly | Weekly or more, on a standard path | Frequency tuned by risk and demand | Continuous across services, with progressive delivery |
| Automation | Manual build and test | Automated build | Automated build, test, and deploy | Pipeline monitored and improved as a product | Pipelines shared and governed across teams |
| Control evidence | Meetings and checklists | Some records | Pipeline records for every change | Evidence sampled and reviewed | Evidence continuous, with human review of risk |
| Recovery | Rollback unclear | Rollback documented | Rollback or roll-forward rehearsed | Time to restore measured | Recovery automated and tested regularly |

## Checklist

- [ ] The main line is releasable at all times.
- [ ] Every change goes through one automated pipeline.
- [ ] Tests we trust run on every change; flaky tests are fixed or removed.
- [ ] We separate deployment from release, with feature toggles tracked.
- [ ] We know how to roll back or roll forward and have rehearsed it.
- [ ] We monitor the effect of each release.
- [ ] The pipeline has an owner, a backlog, and a description of its checks.
- [ ] AI-assisted changes are reviewed and tracked.

## AI prompts

**Find the waits in a release.**

```text
Here is a timeline of our last release, from "change ready" to "in production": [paste timeline with timestamps and who acted].
List each wait and how long it was, then give two questions per wait to find its cause. Do not assume causes.
List what you are unsure of.
```

**Propose pipeline checks for a risk.**

```text
Our service: [describe]. The risk we want to control: [describe, such as untested configuration change].
List five automated checks that could address it, what each would catch, and what each would miss. Do not claim a check removes the risk.
Mark assumptions and list what you are unsure of.
```

**Draft a rollback rehearsal plan.**

```text
Our release process: [paste steps]. Our rollback method: [describe, or write "unknown"].
Draft a one-page rehearsal plan with steps, roles, success criteria, and what to record. Include a safe environment only; do not suggest rehearsing in production.
List what you are unsure of.
```

## AI skills

- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): use to move testing earlier in the pipeline.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): use to build tests alongside changes.
- [release-notes](../../../../skills/release-notes/SKILL.md): use to describe each release for customers and support.

## Key sources

- Jez Humble and David Farley, *Continuous Delivery* (2010): the book that named and described the practice.
- DORA (dora.dev): research and reports on software delivery performance.
- Wikipedia, "Continuous delivery": a summary of principles and related practices.
- Wikipedia, "Continuous integration": the practice that underlies it.

## References

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Continuous deployment — Wikipedia — https://en.wikipedia.org/wiki/Continuous_deployment
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
10. DORA — DevOps Research and Assessment — https://dora.dev
