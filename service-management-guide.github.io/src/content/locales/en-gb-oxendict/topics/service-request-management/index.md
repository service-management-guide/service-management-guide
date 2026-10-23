# Service Request Management

**Service request management handles the planned, repeatable things users ask for, such as access, equipment, and information, as standardized services with clear forms, approvals, and fulfilment steps; the goal is to make routine requests fast and predictable, and to automate what can safely be automated.**

## Why this matters

A large share of a service desk's work is not about things being broken. It is about people needing things: a new account, access to a folder, a software licence, a mobile phone, a room booking, a name change. These requests are predictable and repeated. Handling each as a one-off conversation wastes the time of both the requester and the fulfiller.

When requests are standardized, they become fast. The requester sees a description of what they can ask for, fills in a short form that captures what the fulfiller needs, and gets a clear status. Approvals happen only where needed. Fulfilment steps are documented, shared among the team, and, where safe, automated. Time spent on the routine falls, and attention is freed for harder work.

Poorly managed requests cause damage of their own. Unclear forms generate repeated questions. Approvals that nobody reads add days. Access granted without checks becomes a security risk, and access never removed becomes a different one. This topic explains how to design, run, and improve request fulfilment, and how it connects to the service catalogue (Topic 3.8 — Service Catalogue Management), the service desk (Topic 3.1 — Service Desk), and automation (Topic 6.5 — Self-Service and Automated Fulfilment).

## Core concepts

**Service request.** In ITIL 4, a request from a user or a user's authorized representative that initiates a service action that has been agreed as a normal part of service delivery. Examples include a request for information, a request for access, a request for a standard item, and a request for a standard change. A service request is not a failure: it is something the provider has agreed to do.

**Request versus incident.** An incident is an unplanned interruption or reduction in quality; a request is a planned, standard ask. "My laptop does not turn on" is an incident. "I need a laptop" is a request. Some systems treat them in one tool with different workflows. Mixing them in one queue hides the difference in how each should be handled. See Topic 3.2 — Incident Management.

**Request model.** A predefined description of how a particular type of request is handled: the information required, the approval rules, the steps, who does each, the target time, and the way to tell the user. Wikipedia's articles on workflow and on standardization describe general ideas. A model is written once, improved over time, and reused.

**Catalogue entry.** Each request type appears in the service catalogue with a user-friendly name, a description, who may request it, and the expected time. See Topic 3.8 — Service Catalogue Management. Wikipedia describes service catalogues as a list of services offered.

**Approval.** Some requests need authorization, for example from a manager or a budget holder. Good design limits approvals to where they add value: where money is spent, or where access to sensitive information is granted. Approval chains that exist for tradition, not for risk, add delay.

**Fulfilment.** The work of delivering what was requested. It may be manual, partly automated, or fully automated. A common progression is to document the steps, then script the repetitive ones, then connect the form directly to the script.

**Self-service.** Users place requests and track them through a portal or chat without involving the service desk. Wikipedia describes self-service as a system in which people serve themselves. Good self-service depends on forms that users understand and on status information they can trust. See Topic 6.5 — Self-Service and Automated Fulfilment.

**Identity and access.** A large share of requests concern access. Wikipedia's articles on identity and access management and on the principle of least privilege describe the main ideas: grant only the access needed, verify who is asking, record who approved, and remove access when it is no longer needed. See Topic 3.13 — Information Security Management.

**Joiners, movers, leavers.** The life events of people in an organization, such as a new starter, someone changing role, or someone leaving, trigger bundles of requests. Treating them as a single journey with an owner and a checklist avoids missed steps. See Topic 1.9 — Enterprise Service Management.

**Standard changes.** Many requests are standard changes, which are pre-authorized and low risk. Connecting the two practices avoids duplicate approval. See Topic 3.4 — Change Enablement.

**Targets and expectations.** Each request type has an expected delivery time, and users see it. Targets should be realistic, based on actual performance, and honest where fulfilment depends on a third party.

**Cost and charging.** Some requests have a cost, such as a licence or a device. Showing the cost and who pays helps users make decisions and helps owners see demand. See Topic 4.5 — Financial Management and FinOps.

**Experience.** A good request experience means that users can find what they want, understand the form, know what happens next, and receive it when promised. Wikipedia's article on customer experience gives general background.

**How the lenses fit.** Request management is the home of continuous improvement through small changes: simplify a form, remove an approval, automate a step. AI can help users find the right request and fill the form, and help fulfillers prepare. Automation does the repeatable work. Analytics shows demand and delays.

## Best practices

1. **Describe requests in the user's words.** Name each request for what the user wants, such as "Access to a shared folder", not for the technical object. Test the names with users.
2. **Keep forms short.** Ask only for what the fulfiller needs, and prefill what you already know. Test the form with a new user and watch where they hesitate.
3. **Write a request model for each type.** Record inputs, approvals, steps, owner, target time, and user messages. Review the models regularly against real data.
4. **Approve only where it adds value.** For each approval, name the risk it addresses and the person who understands it. Remove approvals that have never refused or changed a request, after checking with the risk owner.
5. **Show status and expected time.** Let users see where their request is and when to expect it. Send a message when something changes or is delayed.
6. **Automate in steps.** Start with a clear manual procedure, then script the repetitive steps, and finally connect the form to the script. Keep a log and a manual fallback.
7. **Treat access with care.** Verify identity, grant least privilege, record approvals, review access regularly, and make removal as routine as granting. See Topic 3.13 — Information Security Management.
8. **Handle life events as journeys.** For joiners, movers, and leavers, create one journey with an owner, a checklist, and shared status across teams.
9. **Review demand.** Look at which requests are most common, which take longest, and which are abandoned or returned. Use the findings to improve forms and models.
10. **Retire and merge request types.** Remove types nobody uses, and combine near-duplicates. A shorter catalogue is easier to use.

## Questions to discuss with your team

**What are the ten requests we receive most often, and how long does each take?**
Use real data. Expect surprises: a small number of types usually make up most of the volume. Ask which are slow and why. Follow up by choosing one to simplify first.

**Which approvals do we require, and what risk does each address?**
Walk through the approval steps. Expect some that nobody can explain. Ask who has refused or changed a request in the last year. Follow up by trialing the removal of one approval, with the risk owner's agreement.

**What do users have to know to make a request, and what do they find confusing?**
Ask users and new staff. Expect confusion about names, forms, and who to ask. Follow up by rewriting one form and testing it with five users.

**Which of our request steps are manual and repetitive, and could be scripted?**
List the steps and time each takes. Expect account setup and routine access. Ask what could go wrong if scripted. Follow up by choosing one step and agreeing safeguards, logging, and a manual fallback.

**How do we remove access when people move or leave?**
This tests the other half of access management. Expect gaps. Ask for the last audit finding. Follow up by agreeing an owner and a trigger for removal.

**How could AI help users find and complete requests, and what must stay with a person?**
AI can recommend the right request and prefill details. It can also choose wrongly or grant too much by suggestion. Ask where a person must approve. Follow up by choosing a trial limited to low-risk requests with review.

## In practice: a service management example

A large retailer's head office IT department handles around 2,500 requests a month. Staff complain that requests "go into a black hole". The service manager reviews six months of data and finds that five request types account for 60 percent of the volume: new starter setup, access to shared folders, software installation, mobile phone orders, and password resets. The average time to fulfil a shared-folder request is four days, of which three are spent waiting for approval from a folder owner who often does not respond.

The manager works with the owners to make three changes. For shared folders, the form now shows the owner's name, and the owner approves from an email link with a reminder after one day; for folders classified as low sensitivity, approval is by the requester's manager only. For new starters, a single journey replaces four separate requests, owned by HR, with IT, facilities, and payroll tasks. For software installation, a catalogue of pre-approved applications is published, with automatic installation for those, and approval only for others.

After two months, the average shared-folder request takes one day, and the new starter journey cuts missing-equipment reports on the first day. The service manager samples 50 automated installations and finds three that installed an older version because a package was out of date.

What changes: staff receive what they ask for faster, and the desk fields fewer "where is my request" contacts. What remains hard: the owners of sensitive folders still take several days to respond and the organization has not agreed who owns about a third of the folders; the access audit finds users who retain access from previous roles; and the new starter journey depends on HR entering start dates on time. The manager takes the folder ownership and the access reviews to the security team.

## Four perspectives

### Product and delivery teams

Provide the information needed to fulfil requests for your services, such as access models and standard configurations. Keep self-service interfaces and automation tidy, and offer to fulfil your own routine requests where safe.

### Service and operations teams

Own the request models and keep them short and current. Automate repeated steps with safeguards, and watch delays and returned requests. Bring demand data to the people who own the services.

### Leadership and governance

Ask for evidence of how long requests take and where they wait. Support removing approvals that add no safety. Give owners authority to change models, and fund automation with proper controls.

### Customers and users

You should find what you need easily, see status, and receive it when promised. Tell the provider when a form is confusing or an approval seems pointless. Return what you no longer need, including access.

## Agile, AI, automation, and analytics

### Agile

Treat each request model as a small product and improve it with users: simplify a form, test it, adjust. Review demand regularly with stakeholders. Caution: continual tweaking of forms confuses users; announce changes and keep a short list.

### AI

AI can help users find the right request, prefill forms from a description, summarize requests for approvers, and draft fulfilment notes, with a person approving anything that grants access or spends money. Name an owner. Caution: an assistant that suggests broad access "to be safe" breaks least privilege; constrain its choices. See Topic 5.3 — AI Service Desk and Virtual Agents.

### Automation

Automate routine fulfilment, such as account creation, software installation, and group membership, with checks, logs, and a manual fallback. Caution: an automated grant of access without verification is a security hole; include identity checks and review a sample. See Topic 6.5 — Self-Service and Automated Fulfilment.

### Analytics

Look at demand by type, time to fulfil, time waiting for approval, returned or abandoned requests, and user feedback. Caution: average time hides long delays and can be manipulated by closing and reopening; look at distributions and samples. See Topic 7.7 — Experience and Sentiment Analytics and the *Service Management Metrics* book.

## Common failure modes

- **Unclear request names.** Users pick the wrong one. Rename in the user's words and test.
- **Long forms.** Users abandon or guess. Ask only what is needed.
- **Approvals by habit.** Delay without safety. Keep those with a named risk.
- **Automation without checks.** Wrong access or wrong items. Add verification, logs, and review.
- **Access never removed.** Old accounts remain. Make removal a routine trigger.
- **No status for users.** Repeat contacts rise. Show status and send updates.
- **Catalogue growth without pruning.** Users cannot find anything. Retire and merge.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Request design | Ad hoc by email | Some forms | Request models for common types | Models reviewed against data | Models improved continuously across functions |
| Approvals | Many and manual | Reviewed once | Approvals tied to named risks | Approval value measured | Risk-based approvals adapted automatically |
| Fulfilment | Manual | Some scripts | Common requests automated with logs | Automation quality sampled and reviewed | End-to-end automation across systems |
| Access lifecycle | Granted ad hoc | Periodic review | Joiner, mover, leaver triggers | Access reviewed on evidence | Access adjusted continuously across systems |

## Checklist

- [ ] Our top ten request types are described in users' words.
- [ ] Each has a request model with inputs, approvals, steps, owner, and target time.
- [ ] Every approval has a named risk and an owner who understands it.
- [ ] Users can see status and expected time.
- [ ] Automated fulfilment has checks, logs, and a manual fallback.
- [ ] Access is granted by least privilege and removed when no longer needed.
- [ ] Joiner, mover, and leaver journeys have owners.
- [ ] We review demand and prune request types regularly.

## AI prompts

**Group requests by type.**

```text
Below are request titles and descriptions from the last month, with personal data removed: [paste sample].
Group them into up to twelve request types, count each, and list the three most common questions the requester or fulfiller had to ask. Do not suggest changes.
List what you are unsure of.
```

**Draft a short request form.**

```text
Request type: [name]. What the fulfiller needs to do the work: [list]. What we already know about the requester: [list].
Draft a form with only the questions we cannot already answer, in plain language, with a one-line help text for each. Do not add questions that are not needed.
List what you are unsure of.
```

**Review an approval chain.**

```text
Request type: [name]. Current approvals: [list with who and typical wait]. Data on past outcomes: [paste, such as number approved and refused].
For each approval, state the risk it appears to address based only on what I provided, how often it changed the outcome, and a question to ask the owner. Do not recommend removal.
List what you are unsure of.
```

## AI skills

- [service-catalogue](../../../../skills/service-catalog/SKILL.md): use to describe request types for users.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): use to examine steps, waits, and approvals.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to clarify who approves and who fulfils.
- [survey-design](../../../../skills/survey-design/SKILL.md): use to design feedback on the request experience.

## Key sources

- PeopleCert, ITIL certification pages: the owner's description of the service request management practice.
- Wikipedia, "Service catalogue" and "Self-service": background on how requests are described and made.
- Wikipedia, "Principle of least privilege": the basis for safe access fulfilment.
- Wikipedia, "Identity and access management": the discipline behind many requests.

## References

1. Service catalogue — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
3. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
4. Standardization — Wikipedia — https://en.wikipedia.org/wiki/Standardization
5. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
6. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
7. Onboarding — Wikipedia — https://en.wikipedia.org/wiki/Onboarding
8. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
9. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
10. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
