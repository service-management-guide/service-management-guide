# Release and Deployment Management

**Release and deployment management separates two decisions that used to be one: when new code is placed on production systems (deployment) and when its behaviour becomes available to users (release); separating them, with feature flags, staged rollout, and clear release notes, makes change safer and calmer.**

## Why this matters

Launch days are stressful because too much happens at once. New code is installed, new features switch on, users meet them for the first time, and the support team learns about them from the first complaint. If anything goes wrong, all of these are tangled together, and the only way back may be a rollback that undoes everything.

Teams that separate deployment from release avoid most of that. Code goes to production quietly, switched off, days before users see it. When the team is ready, a flag turns the feature on for a small group, then more. If something is wrong, the flag turns it off in seconds. The deployment, which is a technical act, happens on the engineers' schedule. The release, which is a business and customer act, happens when the organization is ready.

This topic explains the two ideas, the techniques that support them, and the practices that keep users, support staff, and auditors informed. It builds on continuous delivery (Topic 2.2 — Continuous Delivery) and change enablement (Topic 3.4 — Change Enablement), and it connects to configuration management (Topic 4.4 — Configuration Management) and knowledge management (Topic 3.9 — Knowledge Management).

## Core concepts

**Deployment.** The act of moving software, configuration, or other components to an environment, such as test or production. Wikipedia's article on software deployment describes the activities involved. Deployment is a technical operation that puts something where it can run.

**Release.** Making a service, feature, or version available for use. A release may occur at the same moment as a deployment or later. ITIL 4 describes "release management" as the practice of making new and changed services and features available for use, and "deployment management" as moving components to live environments.

**Why separate them.** Deployment risk is about whether the code runs and behaves. Release risk is about whether users, support, and the business are ready. Doing them at different times lets you manage each risk with the right people and tools.

**Feature flags.** Also called feature toggles, they are switches in the code or in a control system that enable or disable a feature at run time, without a new deployment. Wikipedia describes feature toggles and their uses. Flags can be per user, per group, per percentage of traffic, or global. They need care: old flags pile up and become hidden complexity.

**Staged rollout.** Releasing to a small group first and widening gradually. Variations include internal users first, a small percentage of traffic, a single region, or a pilot customer. Each stage gives feedback before more people are exposed.

**Blue–green and rolling deployment.** In a blue–green deployment, two production environments exist; one serves users while the other receives the new version, and traffic is switched when ready, with a quick switch back if needed. In a rolling deployment, instances are updated a few at a time. Wikipedia describes both. Each has trade-offs in cost, complexity, and handling of data.

**Release readiness.** A short set of questions answered before release: do tests pass; does monitoring cover the new behaviour; do support staff know what changed and how to help; are the documentation and knowledge articles ready; is there a rollback plan; and has the business agreed to the date. Keep it brief and tied to real risk.

**Release notes.** A description of what changed, written for the people who need to know. Different audiences need different notes: users want to know what is new or different; support staff want to know what to expect; operations want to know what changed technically. Wikipedia's articles on release notes and changelogs describe common forms.

**Versioning.** A scheme for naming versions so that people can talk about them. Semantic versioning, one popular scheme described under software versioning on Wikipedia, uses major, minor, and patch numbers to signal the kind of change. Choose a scheme and apply it consistently.

**Data changes.** Changes to database structure and data are harder to reverse than code changes. Patterns such as making changes backward compatible, running old and new structures side by side, and migrating in small steps reduce the risk. Wikipedia describes schema migration.

**Hotfixes and patches.** Urgent fixes made outside the normal cycle, usually to correct a serious fault or vulnerability. They need an expedited route with the same discipline: test, review, deploy through the pipeline, and record. See Topic 3.4 — Change Enablement.

**Environments.** Test, staging, and production environments, each with a purpose. The closer test environments resemble production, the more reliable the tests. Wikipedia's article on deployment environments describes common arrangements.

**Software supply chain.** Releases include components from other parties, such as libraries and container images. A software bill of materials lists them, which helps in responding to vulnerabilities. See Topic 4.2 — Software Asset Management.

**How the lenses fit.** Release practice is the agile lens at the point of contact with users: small releases with feedback. AI can draft release notes and summarize changes, under review. Automation runs the pipeline and the rollout. Analytics shows how a release behaves.

## Best practices

1. **Deploy small and often.** Put changes on production in small pieces, behind flags where useful. Frequent deployment makes each one low risk and routine.
2. **Release on purpose.** Decide with the business when users should see a feature, and use a flag or staged rollout to control it. Do not let the deployment schedule dictate the release.
3. **Roll out in stages.** Start with a small, informed group, watch indicators, and widen. Define in advance what you will look at and what would cause you to stop.
4. **Keep flags tidy.** Record each flag's purpose, owner, and removal date. Remove flags after rollout. Test both states while a flag lives.
5. **Make the way back fast.** Know how to turn a flag off, roll back, or fail over, and rehearse it. For data changes, plan forward-compatible steps.
6. **Prepare support before release.** Give the service desk release notes, a short guide, and known issues before users see a change. Ask them what they need.
7. **Write release notes for their readers.** Say what changed in the user's terms, what to expect, and where to get help. Keep technical detail in a separate note.
8. **Check readiness briefly.** Use a short, consistent checklist for significant releases. Skip it for routine ones that the pipeline covers.
9. **Watch the release.** Monitor error rates, performance, and user indicators during and after rollout, and assign someone to watch. Record what you saw.
10. **Record what was released.** Keep a record of versions, dates, and flag states, which helps in incidents and audits. Generate it from the pipeline where you can.

## Questions to discuss with your team

**What is the difference between deploying and releasing in our organization, and who decides each?**
In many teams the two are the same event. Ask who decides to put code in production and who decides when users see it. Expect blurred answers. Follow up by choosing one feature to separate.

**How quickly could we switch off a new feature if it caused harm?**
Test the answer. Some teams can turn a flag off in seconds; others need a new deployment and an approval. Ask for the last time. Follow up by choosing one risky feature and planning a fast off switch.

**What does our support team know about a release before users see it?**
Ask the service desk. Expect "nothing until the first call". Follow up by agreeing a standard information package and a time, such as 48 hours before.

**Which feature flags do we have, and which should be gone?**
A list of flags often shows many that nobody remembers. Ask who owns each. Follow up by scheduling removal for the oldest ones and adding an owner field.

**How do we release a change that affects the database, and what happens if we need to go back?**
Data changes cause the worst surprises. Ask for the last migration and its rollback plan. Follow up by agreeing a pattern, such as backward-compatible changes in two steps.

**Where could AI help with release notes or readiness, and what must a person verify?**
AI can draft notes from commit messages and tickets. It can misstate what changed. Ask who reads the draft and compares it with the change. Follow up by trialing AI drafts for internal notes, with a person approving each.

## In practice: a service management example

A national library's online catalogue is used by researchers around the world. The team releases a redesigned search page. Previously, such a change would have gone live on a Tuesday evening with a short announcement. This time the service owner asks for a staged release.

The team deploys the new page to production a week early, switched off. It then enables it for internal staff, and the next day for 5 percent of visitors chosen at random. The release lead watches search success rates and error counts, and the service desk receives a one-page guide and a short list of known issues two days before. On day three, a researcher in the pilot group reports that searches using certain non-English characters fail. The team switches the flag off for all users within a minute, fixes the issue the next morning, and restarts the rollout at 5 percent. Two weeks later, the new page is available to everyone, and the flag is scheduled for removal.

What changes: the failure affected a handful of users for a day, and the support desk was ready for questions. What remains hard: the flag system sits in a separate tool whose access is not tightly controlled, so the team has asked for a review; the release notes were written by the developers and the researchers found them confusing; and the dual maintenance of the old and new search pages cost about a week of effort. The owner adds a user-facing editor to the release note step.

## Four perspectives

### Product and delivery teams

Design for separate deployment and release: use flags, make data changes compatible, and plan the way back. Watch your own releases, and write notes that users and support can understand.

### Service and operations teams

Help define readiness, monitoring, and rollback. Ask for release information early and tell developers what you need. Keep the record of what is in production accurate.

### Leadership and governance

Decide release timing with the business, not by the deployment calendar. Fund the pipeline and flag tooling. Ask for staged rollout for high-impact features, and avoid pressure to release on a fixed date regardless of readiness.

### Customers and users

You should hear about changes that matter in terms you understand, and you should be able to report problems easily. If you take part in early access, expect to be asked for feedback and tell the team what you see.

## Agile, AI, automation, and analytics

### Agile

Small, frequent releases with real users involved in early stages give fast feedback. Treat each release as a learning step and adjust the next. Caution: do not release features users do not want just because the pipeline can; check value with users.

### AI

AI can draft release notes from changes and tickets, summarize feedback after rollout, and suggest what to watch. Name an owner, and have a person compare the draft with the change before publishing. Caution: a plausible but wrong release note misleads users and support; check against the actual change. See Topic 5.4 — Generative AI for Incidents, Knowledge, and Changes.

### Automation

Automate deployment, staged rollout, health checks, automatic halt on bad indicators, and rollback, with logs and manual override. Caution: automatic rollout rules that trigger on poor indicators can misfire; test them, and keep a person informed. See Topic 6.4 — Pipelines and Automated Change.

### Analytics

Compare indicators between the released group and the others during rollout, such as errors, task success, and complaints. Caution: small groups give noisy results, and comparing without care can mislead; agree what you will look at and how long to wait. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Release and deployment tied together.** Every launch is risky. Separate them with flags and staged rollout.
- **Flags nobody owns.** The code fills with dead paths. Record owners and removal dates.
- **No fast way back.** A bad release lasts hours. Rehearse rollback and flag switches.
- **Support learns from the first call.** The desk is unprepared. Give notes and a guide in advance.
- **Release notes written for developers.** Users cannot read them. Write for the audience.
- **Data changes not planned.** A rollback is impossible. Use compatible, small steps.
- **Watching nothing.** Problems are found by users. Assign a watcher and set indicators.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Separation of deploy and release | Same event | Some flags used | Flags and staged rollout for significant features | Rollout decisions based on data | Rollout automated with guardrails across services |
| Rollback | Slow and manual | Documented | Rehearsed fast routes | Recovery time measured | Automatic and tested regularly |
| Communication | Announced at launch | Notes for some releases | Notes for each audience, support briefed in advance | Notes tested with readers | Communication integrated with the pipeline and channels |
| Records | Memory and email | Spreadsheet | Generated from the pipeline | Used in reviews and audits | Linked across versions, flags, and incidents |

## Checklist

- [ ] We separate deployment from release for significant changes.
- [ ] Feature flags have owners and removal dates.
- [ ] We roll out in stages with defined indicators and stop criteria.
- [ ] We know how to switch off or roll back quickly, and have rehearsed.
- [ ] Support receives release information before users do.
- [ ] Release notes are written for their readers.
- [ ] Data changes are made in compatible, reversible steps.
- [ ] Records of what was released are generated from the pipeline.

## AI prompts

**Draft release notes for review.**

```text
Here are the changes in this release: [paste list of changes with ticket titles]. The audience is [users, support staff, or operations].
Draft release notes of under 200 words in plain language, grouped by what users will notice, and list items you could not describe without guessing. Do not add features or dates that are not in the list.
List what you are unsure of.
```

**Prepare a release readiness checklist.**

```text
Our release: [describe]. Risks we know of: [list]. Our usual checks: [list].
Draft a checklist of up to ten yes/no questions to answer before release, with who answers each. Keep it short and tied to the listed risks.
List what you are unsure of.
```

**Plan a staged rollout.**

```text
Our feature: [describe]. Our users: [groups and sizes]. Indicators we can measure: [list].
Propose three stages with the audience, what to watch, how long, and what would make us stop. Note what the indicators cannot tell us. Do not claim any stage is safe.
List what you are unsure of.
```

## AI skills

- [release-notes](../../../../skills/release-notes/SKILL.md): use to write release notes for each audience.
- [changelog](../../../../skills/changelog/SKILL.md): use to keep a clear history of changes.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): use to test earlier in the pipeline.
- [runbook](../../../../skills/runbook/SKILL.md): use to document rollout and rollback steps.

## Key sources

- Jez Humble and David Farley, *Continuous Delivery* (2010): the foundation for deployment pipelines and release techniques.
- PeopleCert, ITIL certification pages: the owner's description of release and deployment management practices.
- Wikipedia, "Software deployment" and "Feature toggle": overviews of the main ideas.
- Wikipedia, "Release management": background on the discipline.

## References

1. Release management — Wikipedia — https://en.wikipedia.org/wiki/Release_management
2. Software deployment — Wikipedia — https://en.wikipedia.org/wiki/Software_deployment
3. Software release life cycle — Wikipedia — https://en.wikipedia.org/wiki/Software_release_life_cycle
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Release notes — Wikipedia — https://en.wikipedia.org/wiki/Release_notes
7. Changelog — Wikipedia — https://en.wikipedia.org/wiki/Changelog
8. Software versioning — Wikipedia — https://en.wikipedia.org/wiki/Software_versioning
9. Schema migration — Wikipedia — https://en.wikipedia.org/wiki/Schema_migration
10. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
11. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
