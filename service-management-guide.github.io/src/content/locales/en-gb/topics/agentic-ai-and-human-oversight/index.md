# Agentic AI and Human Oversight

**AI agents that act on systems, rather than only answer questions, need a defined scope, least-privilege permissions, approval gates for consequential actions, a full audit trail, and a tested way to stop them; autonomy should be granted in small, evidence-based steps, and accountability stays with a named person.**

## Why this matters

Most uses of AI in service management so far are advisory. A model reads a ticket and suggests a category, or drafts a reply that a person edits. If the suggestion is wrong, a human notices before anything happens. An AI agent changes that. It is given tools: it can query systems, update records, run commands, open and close tickets, and send messages. It plans steps toward a goal and carries them out, often with little human involvement between instruction and result.

This promises real value. An agent could investigate an alert by pulling logs, checking recent changes, and posting a summary. It could process a routine request from end to end: verify eligibility, create the account, notify the user. It could draft a fix and open a pull request. Done well, it takes routine work off busy people and works at any hour.

It also changes the nature of the risk. A wrong answer is an inconvenience. A wrong action can delete data, grant access to the wrong person, take down a service, or send a message to ten thousand customers. The speed that makes agents useful makes their mistakes spread fast. And agents are exposed to attack: a hostile instruction hidden in a ticket or a web page can steer an agent that has power to act.

This topic sets out the main ideas for using agents safely in service management: scope, permissions, approval, audit, and stopping. It builds on Topic 5.1 — AI in Service Management and Topic 5.6 — AI Governance, Risk, and Compliance, and it connects to automation (Topic 6.1 — Automation Strategy and Topic 6.6 — Runbook Automation and Auto-Remediation), change enablement (Topic 3.4 — Change Enablement), and information security (Topic 3.13 — Information Security Management).

## Core concepts

**AI agent.** A system that perceives its environment, makes decisions, and takes actions to achieve goals. Wikipedia describes intelligent agents and AI agents. In current practice an agent usually combines a language model with tools and a loop: the model decides what to do next, calls a tool, reads the result, and continues until it decides it is done or reaches a limit.

**Tools and permissions.** The set of actions an agent can take, such as reading a knowledge base, querying monitoring, creating a ticket, or restarting a service. Tools are often exposed through application programming interfaces (APIs). Wikipedia describes APIs. Open protocols for connecting models to tools, such as the Model Context Protocol described on Wikipedia, make it easy to add tools, which is useful and also widens what an agent can do. Each tool carries its own risk.

**Autonomy levels.** A useful way to think about control is as levels, from none to full. At one end, the agent only suggests. Then it prepares an action for approval. Then it acts alone within narrow limits and reports. At the far end it acts broadly without review. Wikipedia's article on supervisory control describes the idea of human supervision of automated systems. Choose the level per task, based on the cost of an error and the ability to undo it.

**Human oversight.** A person stays able to understand, approve, stop, or correct the agent. Wikipedia describes human-in-the-loop systems. Oversight takes several forms: approving actions before they happen, monitoring actions as they happen, and reviewing afterwards. The right form depends on speed and risk. Review after the fact is no use for an irreversible action.

**Automation bias and rubber-stamping.** People tend to approve what a system proposes, especially when approvals are frequent and look similar. Wikipedia describes automation bias. A control that people approve without reading is not a control. Design approvals so that they show what will happen, are rare enough to be read, and are checked by sampling.

**Least privilege.** An agent should have only the permissions it needs for its task, for only as long as it needs them. Wikipedia describes the principle of least privilege. Use separate identities for agents, not a shared administrator account, so that actions can be traced and permissions limited.

**The confused deputy.** A security problem in which a trusted programme is tricked into using its authority on behalf of someone who does not have it. Wikipedia describes the confused deputy problem. An agent that can act with high privilege and takes instructions from low-trust text, such as a user's message, is a classic case.

**Prompt injection.** Hostile instructions hidden in content an agent reads, such as a ticket, an email, a web page, or a log line. Wikipedia describes prompt injection. Because the model cannot reliably tell instructions from data, a content source can try to redirect the agent. Defence relies mostly on limiting what the agent can do, not on persuading the model to ignore bad text.

**Sandboxing.** Running agents in restricted environments, with limited access to systems and data. Wikipedia describes sandboxes in computer security. Let an agent try actions in a test environment before it works in production.

**Reversibility.** Prefer actions that can be undone: creating a ticket, adding a label, proposing a change. Treat irreversible actions, such as deletion, payment, and sending messages outside, as needing approval or forbidden. Wikipedia describes rollback in data management.

**Limits and circuit breakers.** Caps on how many actions an agent can take per hour, how much it can spend, how many items it can change at once, and how long it can run. Wikipedia describes rate limiting. A limit turns a runaway into a bounded error.

**Kill switch.** A fast, reliable way to stop an agent and revoke its access. Wikipedia describes kill switches. Test it. A kill switch that depends on the agent's own cooperation, or on a system that is down, is not one.

**Audit trail.** A complete record of what the agent was asked, what it decided, what tools it called with what inputs, and what happened. Wikipedia describes audit trails. Without it, you cannot investigate a mistake, show compliance, or learn.

**Accountability.** An agent is not accountable; people are. A named owner is responsible for what the agent does, for its permissions, and for reviewing its record. Wikipedia describes accountability. See Topic 2.8 — Product and Service Ownership.

**Multi-agent systems.** Several agents working together can add complexity, errors that cascade, and unclear responsibility. Wikipedia describes multi-agent systems. Treat each agent's scope and permissions separately, and be cautious about agents instructing agents.

**Separation of duties.** The idea that no single party should be able to complete a risky action alone applies to agents. An agent that proposes a change should not be the one that approves it. Wikipedia describes separation of duties.

**How the lenses fit.** Agents sit where AI meets automation. Agile practice suggests starting small and widening autonomy in steps with evidence. Analytics measures what agents do and what they get wrong. Governance (see Topic 5.6 — AI Governance, Risk, and Compliance) sets the rules.

## Best practices

1. **Define the scope in writing.** State what the agent is for, what it may do, what it may never do, and what data it may touch. Keep it narrow at first.
2. **Give each agent its own identity.** Use a separate account with minimum permissions, scoped to its task, and rotate or expire credentials. Do not reuse a human administrator account.
3. **Choose the autonomy level by risk.** Let the agent suggest first, then act on low-risk reversible tasks, and require approval for anything consequential or irreversible. Write the levels down for each task.
4. **Design approvals that people read.** Show the proposed action, the reason, the evidence, and the effect. Keep approvals rare enough to be read, and sample approved items for quality.
5. **Test in a sandbox first.** Run the agent against a safe copy with realistic cases, including adversarial ones, before it touches production.
6. **Treat inputs as untrusted.** Do not let content from tickets, emails, or the web grant authority. Limit tools available when the agent processes untrusted content.
7. **Cap the blast radius.** Set limits on number of actions, amount of change, spend, and time. Make a bulk action a separate, approved step.
8. **Log everything and review it.** Keep the full trail, store it where the agent cannot alter it, and review samples regularly. Alert on unusual patterns.
9. **Build and test the kill switch.** Make it fast, independent of the agent, and known to the people on call. Rehearse it.
10. **Widen autonomy slowly.** Grant more only after a period of good results, with a named owner's approval and a measured error rate. Reduce it when problems arise.

## Questions to discuss with your team

**What is the worst thing this agent could do with the permissions we plan to give it?**
Walk through the permissions, tool by tool. Expect discomfort. Follow up by removing or restricting any permission whose worst case we would not accept.

**Which of its actions can we undo, and which can we not?**
List them. Expect some irreversible ones that were assumed safe. Follow up by requiring approval for each irreversible action.

**How will approvers know what they are approving, and how often will they see a request?**
Imagine the approver on a busy day. Expect long, similar-looking requests. Follow up by designing a summary and a limit on approval volume.

**What would someone have to put in a ticket or an email to make the agent do something we do not want?**
Try it as an attacker. Expect surprises. Follow up by choosing mitigations such as restricting tools when reading untrusted content.

**If we needed to stop it right now, who would do it, how, and how long would it take?**
Ask for the steps and rehearse. Expect uncertainty. Follow up by writing a one-page stop procedure and testing it.

**Who owns this agent, and what do they review each week?**
Name the person and the review. Expect gaps. Follow up by assigning ownership and a weekly sample review with defined questions.

## In practice: a service management example

A national tax agency's infrastructure team wants an agent to investigate production alerts overnight. Currently an on-call engineer is woken for most alerts, spends 15 to 30 minutes gathering context, and often finds the cause is a known issue with a documented fix.

The team designs the agent in three stages. In stage one, the agent has read-only access: it can query metrics, logs, recent change records, and the knowledge base, and post a summary to the incident channel with the evidence it used. In stage two, it may also perform a small list of reversible actions, such as restarting a stateless service or scaling a worker pool up by two instances, only when the alert matches a documented runbook, with a limit of three actions an hour and a post to the channel after each. In stage three, which is not approved yet, it would be allowed to propose configuration changes for human approval.

The agent has its own service account with read-only access to production, plus the two named actions. It reads ticket text and logs, which could contain hostile content, so when it reads free text it cannot call any action tool in the same step. The agent's full record of requests, tool calls, and results goes to a separate log store. A senior engineer owns the agent, reviews ten sessions each week, and can disable its credentials with one command, which the team rehearses monthly.

After two months in stage one, the on-call engineers find the summaries correct in 85 percent of cases. In 10 percent they miss a relevant change because the change record was incomplete, and in 5 percent they point to the wrong component. Stage two begins with one runbook. In the first month, the agent restarts a service three times, correctly. In one test with a crafted ticket containing a hidden instruction to scale a pool to a very high number, the rate limit and the action rule stop it.

What changes: engineers are woken less often and arrive with a summary and evidence. What remains hard: the agent's reliance on accurate change records exposes data quality gaps; engineers sometimes trust the summary over their own checks; and the security team has asked that the audit log retention be extended and reviewed. The owner records these and holds stage three until the error rate in stage two is measured over a quarter.

## Four perspectives

### Product and delivery teams

Expose safe, narrow tools with clear permissions, rate limits, and logs. Do not give agents blanket access to your pipelines or data. Include agents in your threat models.

### Service and operations teams

Own the agent's scope, review its record, and rehearse stopping it. Keep runbooks accurate, since agents rely on them. Report errors and near misses.

### Leadership and governance

Decide what autonomy is acceptable for each task, and require a named owner and an audit trail. Ask for evidence from stage-by-stage trials, and be willing to reduce autonomy. Do not rely on vendor assurances alone.

### Customers and users

You should know when an automated agent acts on your request, and have a route to a person who can correct a mistake. Tell the provider if an automated action was wrong.

## Agile, AI, automation, and analytics

### Agile

Widen autonomy in small steps with evidence, review every step with stakeholders, and keep each release small. Caution: rapid iteration can outpace safety review; keep a gate for every increase in autonomy.

### AI

The agent is an AI system with an owner, test cases, and monitoring, and it needs special care because it acts. Guard against prompt injection and over-trust. Caution: do not rely on instructions telling the model to be careful as the main control; rely on permissions, limits, and approval. See Topic 5.6 — AI Governance, Risk, and Compliance.

### Automation

Agents connect to automation: they select and trigger actions. Keep the actions themselves deterministic and tested, with their own validation, so that the agent's choice is limited to approved options. Caution: automation that accepts free-form commands from an agent is as risky as the agent; expose narrow, named actions. See Topic 6.6 — Runbook Automation and Auto-Remediation.

### Analytics

Measure actions taken, approval rates, overrides, errors found in review, time saved, and near misses. Caution: a high approval rate can mean good proposals or rubber-stamping; sample the approved items. See the *Service Management Metrics* book and Topic 7.3 — Measurement and Reporting.

## Common failure modes

- **Broad permissions.** A shared admin account is given to the agent. Use a separate least-privilege identity.
- **Approvals nobody reads.** Frequent, vague requests are rubber-stamped. Make them rare, clear, and sampled.
- **Hostile text steers the agent.** Content in tickets or web pages issues commands. Restrict tools around untrusted input.
- **No limits.** A loop or a mistake runs at machine speed. Cap actions, spend, and scope.
- **No stop button.** Nobody can halt it. Build and rehearse a kill switch.
- **No record.** Incidents cannot be investigated. Keep a full, protected audit trail.
- **Autonomy raised by enthusiasm.** The agent gets more power without evidence. Widen in steps with measures.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Scope and permissions | Broad or unclear | Narrow trial | Written scope, own identity, least privilege | Scope and permissions reviewed regularly | Permissions adapt by risk with approval |
| Oversight | None | Informal review | Defined autonomy levels and approval gates | Approval quality sampled and measured | Oversight tuned by evidence across agents |
| Safety controls | None | Basic logging | Sandbox, limits, kill switch tested | Controls audited and exercised | Controls built into the platform for all agents |
| Accountability | Unclear | Builder owns it | Named owner with weekly review | Owner reviews measures and incidents | Ownership coordinated across agents and teams |

## Checklist

- [ ] The agent has a written scope and a named owner.
- [ ] It uses its own identity with least-privilege permissions.
- [ ] Autonomy levels are defined per task, with approval for consequential or irreversible actions.
- [ ] Approvals show what will happen and are sampled for quality.
- [ ] We tested it in a sandbox, including adversarial inputs.
- [ ] Limits cap actions, spend, and scope.
- [ ] Its full record is logged where it cannot alter it, and reviewed.
- [ ] We have a kill switch and have rehearsed using it.

## AI prompts

**Test an agent's scope.**

```text
Our agent's written scope is: [paste]. Its tools and permissions: [list].
List twenty scenarios, some inside the scope, some at the edge, and some that try to get the agent to act outside it or to use a tool in a harmful way, and for each state what the correct behaviour is. Do not include real systems or data.
List what you are unsure of.
```

**Review an action log.**

```text
Here is a sample of an agent's action log, with identifiers removed: [paste].
List actions that look unusual in size, timing, or target, actions that did not match a documented runbook, and anything that looks like the agent following instructions from untrusted text. Quote each. Do not say whether the agent was right.
List what you are unsure of.
```

**Draft an approval message.**

```text
The agent proposes this action: [describe]. The evidence it used: [list]. What would change if it were done: [describe]. How to undo it: [describe or write "not known"].
Write a clear approval request of under 100 words for a busy approver, stating what will happen, why, the risk, and how to undo it. Do not recommend approval.
List what you are unsure of.
```

## AI skills

- [risk-register](../../../../skills/risk-register/SKILL.md): use to record agent risks, owners, and decisions.
- [runbook](../../../../skills/runbook/SKILL.md): use to define the actions an agent may take and when.
- [security-testing](../../../../skills/security-testing/SKILL.md): use to test agents against hostile inputs.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): use to plan responses when an agent misbehaves.
- [mlops](../../../../skills/mlops/SKILL.md): use to monitor and version the models behind agents.

## Key sources

- NIST, AI Risk Management Framework: a structure for governing AI risks, including those of autonomous systems.
- OWASP, guidance on risks for applications built on large language models (owasp.org): including prompt injection and excessive agency.
- Wikipedia, "AI agent" and "Prompt injection": overviews of the idea and a main security risk.
- Wikipedia, "Principle of least privilege": the basic control for limiting damage.

## References

1. Intelligent agent — Wikipedia — https://en.wikipedia.org/wiki/Intelligent_agent
2. AI agent — Wikipedia — https://en.wikipedia.org/wiki/AI_agent
3. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
4. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
5. Confused deputy problem — Wikipedia — https://en.wikipedia.org/wiki/Confused_deputy_problem
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Sandbox (computer security) — Wikipedia — https://en.wikipedia.org/wiki/Sandbox_(computer_security)
8. Kill switch — Wikipedia — https://en.wikipedia.org/wiki/Kill_switch
9. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
10. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
11. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
12. OWASP — OWASP Foundation — https://owasp.org
