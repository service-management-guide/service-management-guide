# Self-Service and Automated Fulfilment

**Self-service lets people get what they need without waiting for a person, and automated fulfilment completes the request behind the scenes; both work when the request is standard, identity is verified, access follows least privilege, and a route to a person remains for everything the system cannot handle.**

## Why this matters

Most requests that reach a service team are routine: reset a password, add someone to a group, install approved software, book a meeting room, find out how to connect to the wireless network. A person doing these by hand takes minutes each. The requester waits hours, because the request sits in a queue until someone is free, and the person who does it spends the day on work that adds little.

Self-service changes both sides. The requester finds the thing in a portal or chat, fills in what is needed, and gets it, often immediately. Behind the scenes, automated fulfilment carries out the steps: creates the account, assigns the licence, notifies the manager, and records the result. Wikipedia describes self-service as a system in which people serve themselves. In a well-run service it improves speed, consistency, and cost, and it frees skilled staff for harder work.

Fulfilment that runs without a person also runs without a person's judgement. If the system grants access on a false claim, installs the wrong thing, or fails silently, the effect is immediate and repeated. The design questions are therefore as much about control as about convenience: who is asking, are they allowed, what can go wrong, and how will we know? This topic describes how to design self-service and automated fulfilment safely. It builds on service request management (Topic 3.6 — Service Request Management), the catalogue (Topic 3.8 — Service Catalogue Management), and workflow automation (Topic 6.2 — Workflow Automation and Orchestration), and it shares concerns with information security (Topic 3.13 — Information Security Management).

## Core concepts

**Self-service.** Mechanisms that let users complete tasks themselves, through a portal, an app, a chat assistant, or a kiosk. Wikipedia describes self-service and web portals. It covers finding information, placing requests, tracking status, and taking actions such as resetting a password.

**Automated fulfilment.** Carrying out the steps of a request by software. The simplest form is a script behind a form; the richer form is an orchestrated workflow across several systems. Wikipedia describes provisioning, the setup of users, systems, and services. Zero-touch provisioning, also described there, configures a device automatically when it first connects.

**Fully automated, assisted, and approved fulfilment.** Some requests can be fulfilled with no human at all, such as adding an approved application. Others need a human approval first, then run automatically. Others need a technician to carry out a step, with the system doing the rest. Choose the route by risk and cost. See Topic 6.1 — Automation Strategy.

**Identity and authentication.** The system must know who is asking. Wikipedia describes identity and access management, single sign-on, and multi-factor authentication. Strong authentication at the moment of a sensitive action, such as a password reset, prevents attackers from exploiting the self-service route.

**Entitlement and authorization.** Who is allowed to request what. Rules may depend on role, department, location, or manager approval. Wikipedia describes role-based access control, in which permissions follow roles. Encode rules in the catalogue and the workflow, so that the system, not the fulfiller, decides eligibility. See Topic 3.6 — Service Request Management.

**Least privilege and time limits.** Grant only the access that is needed, and where possible only for as long as it is needed. Wikipedia describes the principle of least privilege. Time-bound access, which expires unless renewed, reduces the build-up of old permissions. Privileged access, such as administrator rights, deserves extra control. Wikipedia describes privileged access management.

**Joiners, movers, leavers.** Events in a person's time in an organization trigger many requests. Automating them from a trusted source, usually the HR record, provides accounts and access when they start, changes as they move, and removal when they leave. Wikipedia describes onboarding. See Topic 1.9 — Enterprise Service Management.

**Standard interfaces.** Systems can be connected through application programming interfaces (APIs) and standards for identity provisioning, such as SCIM, described on Wikipedia. Standard interfaces reduce custom code and make fulfilment more robust. Where a system has no interface, a person or a fragile automation is needed.

**Verification and confirmation.** After a step, check that it worked, and tell the requester. A fulfilment that reports success without checking is a source of silent failure. Provide a status the user can see.

**Exceptions and handover.** Requests that do not fit, or fail, go to a person with the full context, and the user is told. Make it easy to reach a person from any point. See Topic 5.3 — AI Service Desk and Virtual Agents.

**Abuse and fraud.** Self-service is a target for social engineering, in which attackers persuade or trick a system or a person into granting access. Wikipedia describes social engineering. Defenses include strong identity checks, limits on how much can be done at once, monitoring for unusual patterns, and extra checks for high-risk requests.

**Experience and accessibility.** The best self-service is easy to find and use for everyone. Wikipedia describes user experience, accessibility, and the Web Content Accessibility Guidelines. Not everyone can or wants to use a portal, and the digital divide, described there, is real. Keep other routes open.

**Auditability.** For each request, record who asked, who approved, what was done, and when. Wikipedia describes audit trails. This supports investigations, access reviews, and compliance.

**Rollback and compensation.** If a step fails, undo earlier steps or mark them for cleanup. If a request was fulfilled in error, you need a way to reverse it. See Topic 6.2 — Workflow Automation and Orchestration.

**Capacity of downstream systems.** Automation can send requests faster than a target system can handle. Use queues and limits, and protect small systems from floods.

**How the lenses fit.** Self-service is the user-facing side of the automation lens. Agile practice suggests starting with the top requests and improving with feedback. AI can help users find the right request and fill the form, under strict limits on what it may grant. Analytics shows demand, failures, and abandonment.

## Best practices

1. **Start with the top ten requests.** Choose the most frequent, standard, low-risk ones, and make them excellent before adding others. See Topic 3.8 — Service Catalogue Management.
2. **Write eligibility and approval rules into the system.** Make the catalogue know who can ask for what and who must approve. Remove approvals that do not manage a real risk.
3. **Verify identity in proportion to risk.** Use strong authentication for sensitive actions, and additional checks for high-risk ones. Do not let a chat claim substitute for verification.
4. **Grant least privilege, with expiry.** Give the minimum access for a time, and renew on request. Review access regularly.
5. **Fulfil in small, idempotent steps with checks.** Verify each step, confirm to the user, and design so that a repeat does no harm. Log every action.
6. **Provide status and a way out.** Show progress, send notices at meaningful points, and make it easy to reach a person.
7. **Design for failure.** Decide what happens when a step fails: retry, compensate, or hand to a person. Send failures to a visible queue with an owner.
8. **Watch for abuse.** Monitor unusual patterns, such as many resets from one source or requests for unusual access, and add limits. Treat the portal as part of your security perimeter.
9. **Test with real users.** Watch people use the portal. Fix confusing wording and flows, and test accessibility. Keep other routes for those who need them.
10. **Review and retire.** Check which automated requests fail, which are abandoned, and which cost more to maintain than they save. Improve or remove them.

## Questions to discuss with your team

**Which requests could we fulfil without a person today if we trusted the identity and the rules?**
List candidates. Expect password resets and standard software. Ask what stops us trusting them. Follow up by choosing one and fixing the blocker.

**How do we know the person asking is who they say they are, for each type of request?**
Walk through the check. Expect weaker checks than people assumed. Follow up by strengthening one high-risk request.

**What is the worst thing that could happen if an automated request ran wrongly or for the wrong person?**
Imagine access to a sensitive system or deletion of data. Expect a few uncomfortable cases. Follow up by adding approval or limits for them.

**How long do access grants last, and who reviews them?**
Ask for the data. Expect permanent grants. Follow up by choosing one type of access to give an expiry date.

**What does a user see when a request fails halfway, and who finds out?**
Try a failure. Expect silence. Follow up by designing a message, a queue, and an owner.

**Who might not be able to use our portal, and how do they get help?**
Think of accessibility needs, language, and connectivity. Expect that some groups were not considered. Follow up by testing with a few real users from those groups.

## In practice: a service management example

A regional council's IT department handles about 1,800 requests a month for 4,000 staff. Account unlocks and password resets make up 600, new-starter setups 120, and software installs 300. A shared inbox and a phone queue take most of them. Staff in libraries, depots, and care homes often phone because they cannot reach a technician at their site.

The service manager builds self-service for the top three request types. For password resets, the identity system's own self-service flow asks for multi-factor authentication, with a fallback of a video call with a technician for staff who have no registered device. For software, a catalogue of 40 pre-approved applications installs automatically after the user's manager approves by email link, with automatic approval for the ten most common low-risk tools. For new starters, the HR system's record creates a parent case and triggers account creation, mailbox, and group membership by the workflow engine, with a technician task for the laptop.

The team designs for control. Eligibility is encoded: depot staff cannot request design software. Access to the finance system is never automatic; it goes to the finance team for approval, with a one-year expiry. Each fulfilment step checks its result: after creating an account, the workflow verifies sign-in is possible and messages the user. Failures go to a technician queue with the error attached.

After four months, calls fall by about 40 percent, and new starters have accounts on day one. A monitor detects a burst of password reset attempts from one address, and the identity team blocks it. What remains hard: some care homes have no reliable internet, so staff still phone; the automatic installs fail on older devices, which the team has found only through the failure queue; and managers approve email links without reading, which the manager sampled and plans to address with fewer, clearer approvals. The manager adds a phone-based option for those who cannot use the portal and a monthly review of failures.

## Four perspectives

### Product and delivery teams

Expose clean APIs and standard identity interfaces that fulfilment can use. Provide the configuration and packages for your product, and tell the team about changes that break automation.

### Service and operations teams

Own the request models, automation, and failure queues. Test the paths, watch for abuse, and keep manual routes for exceptions. Use the data to improve forms and rules.

### Leadership and governance

Ask for evidence that identity checks and access rules work, and for data on failures and abandonment. Fund accessibility and alternatives. Do not count automated requests as a success without checking their quality.

### Customers and users

You should be able to get routine things quickly, see the status, and reach a person when it does not fit. Keep your credentials safe, and tell the provider about anything that did not work or that you could not use.

## Agile, AI, automation, and analytics

### Agile

Launch one request type at a time, watch real use, and improve before adding more. Involve users in forms and wording. Caution: a portal with many half-working requests erodes trust; fewer, better ones are preferable.

### AI

AI can help users find the right request, prefill forms, and summarize requests for approvers. It must not decide eligibility or grant access on its own claims; rules and identity checks decide. Caution: a persuasive message can steer an assistant, so keep powers narrow and verify outside the chat. See Topic 5.3 — AI Service Desk and Virtual Agents.

### Automation

Fulfilment automation needs idempotent steps, checks, logs, limits, and rollback. Treat each fulfilment workflow as a product with an owner. Caution: automatic granting of access without verification is a security hole; include identity checks and sample reviews. See Topic 6.2 — Workflow Automation and Orchestration.

### Analytics

Track demand by type, time to fulfil, share fully automated, failures, abandonment, reopenings, and abuse signals. Caution: automation rates can be raised by moving problem cases elsewhere, and short fulfilment times can hide wrong results; sample outcomes. See Topic 7.7 — Experience and Sentiment Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Weak identity checks.** An attacker uses self-service to take over accounts. Strengthen authentication in proportion to risk.
- **Automatic grants without rules.** Wrong people get access. Encode eligibility and approvals.
- **Permanent access.** Old permissions pile up. Use expiry and reviews.
- **Silent failure.** A request fails and nobody knows. Verify, notify, and queue failures.
- **No way to reach a person.** Users are stuck. Offer clear alternatives.
- **Inaccessible portal.** Some staff are excluded. Test accessibility and keep other routes.
- **Floods on small systems.** Downstream services fail. Use queues and limits.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Self-service | Phone and email | Portal for a few requests | Portal and chat for top requests with status | Use and abandonment reviewed | Consistent experience across functions and channels |
| Fulfilment | Manual | Some scripts | Orchestrated workflows with checks and logs | Failures and quality measured | End-to-end automation with oversight by risk |
| Identity and access | Ad hoc | Basic checks | Strong authentication, role rules, and expiry | Abuse monitored and access reviewed | Access adapted continuously across systems |
| Inclusion | Not considered | Awareness | Accessibility tested, alternatives kept | Outcomes measured by group | Experience designed for all users |

## Checklist

- [ ] We chose the top requests for self-service and described them in users' words.
- [ ] Eligibility and approval rules are encoded in the system.
- [ ] Identity checks match the risk of each request.
- [ ] Access is least privilege with expiry where possible.
- [ ] Each fulfilment step is verified, logged, and safe to repeat.
- [ ] Failures go to a queue with an owner, and users are told.
- [ ] We monitor for abuse.
- [ ] Accessibility is tested and alternative routes exist.

## AI prompts

**Assess risk by request type.**

```text
Here is a list of our request types with what each grants or changes: [paste].
For each, describe the worst plausible outcome if fulfilled in error or for the wrong person, and suggest a question about the level of identity check and approval needed. Do not rank by importance or decide.
List what you are unsure of.
```

**Test a self-service flow.**

```text
Here is a description of how a self-service request works, step by step: [paste].
Write 20 test cases: normal, edge, failure at each step, an impostor attempt, and a request outside eligibility. For each, state the expected result. Do not use real personal data.
List what you are unsure of.
```

**Analyze failures.**

```text
Here is a list of failed automated requests with type, step that failed, error text, and date, identifiers removed: [paste].
Group failures by type and step, count each, and list questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

## AI skills

- [service-catalogue](../../../../skills/service-catalog/SKILL.md): use to describe requests and eligibility for the portal.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to analyse fulfilment steps and failure points.
- [security-testing](../../../../skills/security-testing/SKILL.md): use to test self-service routes against abuse.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to clarify who approves and who owns each fulfilment.
- [user-story](../../../../skills/user-story/SKILL.md): use to express user needs when designing requests.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of the service request management practice.
- NIST, Digital Identity Guidelines (SP 800-63): guidance on identity proofing and authentication.
- W3C, Web Content Accessibility Guidelines (WCAG): the international standard for accessible web content.
- Wikipedia, "Self-service" and "Identity and access management": overviews of the ideas.

## References

1. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
2. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
3. Zero-touch provisioning — Wikipedia — https://en.wikipedia.org/wiki/Zero-touch_provisioning
4. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
5. Multi-factor authentication — Wikipedia — https://en.wikipedia.org/wiki/Multi-factor_authentication
6. Role-based access control — Wikipedia — https://en.wikipedia.org/wiki/Role-based_access_control
7. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
8. Privileged access management — Wikipedia — https://en.wikipedia.org/wiki/Privileged_access_management
9. Social engineering (security) — Wikipedia — https://en.wikipedia.org/wiki/Social_engineering_(security)
10. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
11. System for Cross-domain Identity Management — Wikipedia — https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
