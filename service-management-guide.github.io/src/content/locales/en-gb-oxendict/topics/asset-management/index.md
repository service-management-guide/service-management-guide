# Asset Management

**IT asset management tracks what an organization owns, where it is, who uses it, what it costs, and when it should be replaced or retired; it works when one reliable record is kept current through the whole lifecycle and used to decide, not just to count.**

## Why this matters

Ask how many laptops, servers, software licences, and cloud subscriptions an organization has, and the answer is usually an estimate. Records are scattered across procurement, finance, IT, and individual teams. Equipment is bought and never recorded, or recorded and lost. Subscriptions run on after the project that needed them ended. Licences are counted at a date long ago.

The consequences are costly. Money is spent on equipment and licences that nobody uses. Audits by software vendors find shortfalls and bring penalties. Security teams cannot patch what they do not know exists. When a device is lost, nobody knows what data it held. When an auditor asks for evidence of control, the organization cannot provide it.

Asset management gives a single, reliable answer to "what do we have?", and the basis for the questions that follow: is it safe, is it used, is it worth its cost, is it near the end of its life? This topic covers the core concepts and the lifecycle view of IT assets in general. Specific areas have their own topics: software (Topic 4.2 — Software Asset Management), hardware (Topic 4.3 — Hardware Asset Management), and configuration items (Topic 4.4 — Configuration Management). Costs link to Topic 4.5 — Financial Management and FinOps.

## Core concepts

**Asset.** Something of value owned or controlled by an organization. In IT, assets include hardware, software, cloud services, data, licences, contracts, and sometimes people and knowledge. Wikipedia describes asset management as the systematic process of developing, operating, maintaining, and disposing of assets cost-effectively. This guide uses "IT asset management" (ITAM) for the practice applied to technology.

**Asset versus configuration item.** An asset is tracked for its value and ownership, often with financial detail. A configuration item (CI) is anything that needs to be managed to deliver a service, tracked with its relationships to other items. The two overlap: a server is both. The records often live in different systems. See Topic 4.4 — Configuration Management.

**The lifecycle.** An asset passes through stages: plan, acquire, deploy, operate and maintain, and retire or dispose. Each stage has decisions and records. Wikipedia's article on product lifecycle describes the general idea. Managing the lifecycle means knowing where each asset is in it and acting at the right time, for example replacing laptops before failure rates rise or renewing licences before they lapse.

**Four views.** A useful way to think about asset information is through four views: inventory (what and where), financial (cost, depreciation, ownership), contractual (warranty, support, licence terms), and operational (use, condition, and performance). Each view answers different questions, and the record needs to hold enough of each to be useful.

**Inventory and discovery.** A list of assets with key attributes such as type, model, serial number, location, owner, and status. Inventories can be built by recording purchases, by scanning for devices and software on networks, or both. Discovery tools find things that were never recorded, and recorded items that no longer exist. Neither source is complete alone, and reconciling them is the real work. Wikipedia describes inventory and asset tracking.

**Identification.** Each asset needs an identity that survives its life: an asset tag, a barcode, or a serial number. Wikipedia describes barcodes and radio-frequency identification (RFID), used to track physical items.

**Ownership and custody.** Two questions for each asset: who is accountable for it, and who has it or uses it. They differ: a team may be accountable for a fleet of devices that individuals hold. Clear custody avoids lost equipment.

**Cost and value.** Costs include purchase price, support, licences, energy, and disposal. Total cost of ownership, described on Wikipedia, takes the whole lifetime into account, not just the price. Depreciation, described on Wikipedia, is an accounting treatment; finance teams use it for reporting, and the ITAM team should understand it.

**Cloud and subscription assets.** Cloud services and software subscriptions are assets too, though they have no physical form and can be created in minutes. Without discipline, they sprawl. Link them to owners, projects, and budgets at creation. See Topic 4.5 — Financial Management and FinOps.

**Shadow IT.** Technology bought and used without the knowledge of the IT function. Wikipedia describes shadow IT. It arises because the official route is slow or does not meet needs. Treat it as information about unmet needs, and bring useful tools into management.

**Data assets.** Data are assets too, with owners, classification, and retention rules. Wikipedia describes digital asset management, which is related. See Topic 7.2 — Data Foundations and Governance.

**Standards.** ISO/IEC 19770 is a family of standards for IT asset management, described on Wikipedia. See Topic 1.8 — Service Management Frameworks and Standards.

**Sustainability.** Asset decisions have environmental effects: manufacturing energy, electronic waste, and repairability. Wikipedia describes electronic waste and the circular economy. See Topic 8.2 — Sustainability and Responsible Service Management.

**How the lenses fit.** Asset management is the factual base that the four lenses need. Agile practice keeps the process light and improves it with users. AI can help reconcile records, spot anomalies, and predict failures, under review. Automation discovers and updates records. Analytics uses the data to decide on replacement, licence harvesting, and cost.

## Best practices

1. **Define what counts as an asset.** Decide which categories you will track, and at what value or risk threshold. Start with those that cost the most or carry the most risk.
2. **Keep one authoritative record.** Choose a single source of truth for each kind of asset, and link others to it. Duplicated lists drift apart.
3. **Record at acquisition.** Make purchasing, receiving, and recording one connected step, so that nothing is deployed unrecorded. Tag physical items on arrival.
4. **Combine records with discovery.** Use automated discovery to find unrecorded and missing items, and reconcile regularly. Investigate each difference.
5. **Name an owner and a custodian.** For each asset or group, record who is accountable and who has it. Update when people change jobs or leave.
6. **Track the whole lifecycle.** Record deployment, moves, changes of ownership, repair, and retirement. Use lifecycle dates to plan replacement and renewals.
7. **Link assets to services and costs.** Connect each asset to the services it supports and the budget it belongs to. This enables impact analysis and cost allocation.
8. **Make loss and disposal safe.** Define what happens when a device is lost or retired: wiping data, secure disposal, certificates, and recording. Check that it happens.
9. **Audit by sampling.** Check a sample of records against reality each period, such as physically verifying devices, and measure accuracy.
10. **Use the data to decide.** Review utilization, age, failures, and cost to guide replacement, licence changes, and consolidation. A record nobody uses will decay.

## Questions to discuss with your team

**How many devices, licences, and subscriptions do we have, and how confident are we in each number?**
Ask different people. Expect different answers. Ask how the number was produced. Follow up by choosing one category and reconciling it properly.

**Where do assets enter our organization without being recorded?**
Look for purchasing by card, gifts, trials that became permanent, and cloud accounts created by teams. Expect several gaps. Follow up by closing the largest one.

**Who is accountable for each of our asset categories?**
Ownership is often unclear for shared equipment and subscriptions. Ask for names. Follow up by assigning owners and a review date.

**What happens when someone loses a laptop or leaves the organization?**
Walk through the process step by step. Expect gaps in retrieving equipment and removing access. Follow up by agreeing one checklist and an owner.

**Which assets do we pay for but no longer use?**
Look at licences, subscriptions, and idle equipment. Expect to find something. Follow up by choosing the top three costs and deciding to retire, reassign, or renew.

**How could AI help keep our asset data accurate, and what would we check by hand?**
AI can match records, flag odd entries, and suggest categories. It can also merge records wrongly. Ask who owns the use and how errors are found. Follow up by testing it on a sample against a manually reconciled list.

## In practice: a service management example

A university's IT department is asked by the finance director for the number of laptops in use. Three sources give three answers: procurement says 4,200, the identity system shows 3,600 laptop-enrolled users, and the endpoint management tool sees 3,900 devices. The department also has a recent audit finding that leavers' laptops are not always returned.

The ITAM lead begins by deciding the scope: laptops, desktops, tablets, and phones above a small value, plus software and cloud subscriptions. She names the endpoint management system as the source of truth for what is in use, procurement records as the source for what was bought, and asks the asset manager to reconcile monthly. The first reconciliation finds about 300 devices bought and not seen on the network, 200 seen on the network and not bought through procurement, and 90 devices assigned to staff who had left.

She sets up three changes: tags and a record on receipt for every device; a leaver checklist that links the HR leaver event to a task to retrieve equipment, with a deadline; and a quarterly sample in which a technician physically verifies 100 devices. After two quarters, the reconciliation differences fall by two thirds and the sample accuracy is 94 percent.

What changes: the finance director gets a number the department can defend, and the leaver process recovers dozens of devices. What remains hard: devices bought by research groups on grants still bypass procurement; the physical check in remote campuses relies on busy staff; and the data on cloud subscriptions sits in a different tool owned by another team. The lead takes the grant purchasing and the subscription data to the finance director as the next piece.

## Four perspectives

### Product and delivery teams

Record the assets your product uses: licences, cloud services, and devices. Tag cloud resources with owner and project at creation, and retire what you no longer need.

### Service and operations teams

Keep the records accurate as you deploy, move, and retire equipment. Report discrepancies, and use discovery data in incidents and changes.

### Leadership and governance

Ask for a defensible inventory and the cost of what is held. Fund the process and tools. Use the data for replacement and cost decisions, and make owners accountable.

### Customers and users

You hold assets on the organization's behalf. Keep them safe, report loss quickly, and return equipment when you move on. Tell the provider about tools you need that are not supplied.

## Agile, AI, automation, and analytics

### Agile

Start with the highest-value categories and improve the process in small steps with users. Review accuracy and pain points regularly. Caution: a big-bang inventory project goes out of date quickly; build the habit of recording as you go.

### AI

AI can reconcile records from several sources, flag anomalies such as devices not seen for months, and predict failures from age and history, with a person reviewing proposed merges and retirements. Name an owner. Caution: AI may merge two distinct assets or miss a mismatch; sample its output. See Topic 5.1 — AI in Service Management.

### Automation

Automate discovery, record creation on purchase and enrolment, leaver triggers, and renewal reminders, with logs. Caution: automated records can multiply duplicates; set matching rules and review exceptions. See Topic 6.1 — Automation Strategy.

### Analytics

Look at inventory accuracy, assets with no owner, age profile, utilization, cost per asset type, and unused licences. Caution: a high accuracy figure from a small sample can mislead; sample across locations and types. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Multiple unreconciled lists.** Nobody knows the truth. Choose a source of truth and reconcile.
- **Recording after deployment.** Items are missed. Record on acquisition.
- **No owner or custodian.** Equipment is lost. Name both.
- **Paying for the unused.** Licences and subscriptions run on. Review use and retire.
- **No disposal control.** Data leaves with retired equipment. Wipe and record.
- **Records nobody uses.** The data decays. Use them for decisions.
- **Ignoring cloud and subscriptions.** Costs grow unseen. Track them as assets.

## Maturity model

| Dimension | Initiate | Develop | Standardize | Manage | Orchestrate |
|---|---|---|---|---|---|
| Inventory | Spreadsheets | A main register | Single record reconciled with discovery | Accuracy measured and improved | Real-time inventory across on-premises, cloud, and suppliers |
| Lifecycle | Not tracked | Purchase and disposal noted | Lifecycle stages and dates recorded | Lifecycle used to plan replacement and renewal | Lifecycle managed across assets and suppliers with automation |
| Ownership | Unclear | Owners for large items | Owner and custodian for every asset | Ownership reviewed regularly | Ownership linked to services and budgets |
| Use of data | Counting | Basic reports | Costs and utilization used in decisions | Savings and risk tracked | Data drives planning across the portfolio |

## Checklist

- [ ] We defined which assets we track and the threshold.
- [ ] One source of truth exists for each asset type.
- [ ] Assets are recorded at acquisition, with identification.
- [ ] Discovery and records are reconciled regularly.
- [ ] Each asset has an owner and a custodian.
- [ ] Loss, leaving, and disposal have a defined, checked process.
- [ ] We audit a sample of records against reality.
- [ ] We use the data to guide replacement and cost decisions.

## AI prompts

**Reconcile two lists.**

```text
Here are two lists of devices from different systems, with identifiers removed where sensitive: [paste list A] and [paste list B].
List items that appear in both, items only in A, items only in B, and items that might be the same asset under different names. Show your matching reasoning and do not merge anything.
List what you are unsure of.
```

**Find candidates for retirement.**

```text
Here is a list of subscriptions and licences with cost, number of seats, and last-used dates: [paste].
List those with low or no recent use, the cost of each, and a question to ask the owner. Do not recommend cancellation.
List what you are unsure of.
```

**Draft a leaver checklist.**

```text
Our context: [type of organization, equipment, systems]. Our leaver triggers: [describe].
Draft a checklist for retrieving equipment and removing access, with owners and deadlines for each step, and note what could be missed. Do not add legal requirements.
List what you are unsure of.
```

## AI skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): use to link assets to the services they support.
- [data-governance](../../../../skills/data-governance/SKILL.md): use for ownership and classification of data assets.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to weigh replacement or retirement decisions.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to clarify who is accountable for each asset category.

## Key sources

- ISO/IEC 19770 (the standards themselves): the requirements and guidance for IT asset management; read the current editions from the publisher.
- PeopleCert, ITIL certification pages: the owner's description of the IT asset management practice.
- Wikipedia, "Asset management" and "Total cost of ownership": overviews of the ideas.
- Wikipedia, "Shadow IT": background on unmanaged technology.

## References

1. Asset management — Wikipedia — https://en.wikipedia.org/wiki/Asset_management
2. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
3. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
4. Inventory — Wikipedia — https://en.wikipedia.org/wiki/Inventory
5. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
6. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
7. Depreciation — Wikipedia — https://en.wikipedia.org/wiki/Depreciation
8. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
9. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
10. Digital asset management — Wikipedia — https://en.wikipedia.org/wiki/Digital_asset_management
11. Radio-frequency identification — Wikipedia — https://en.wikipedia.org/wiki/Radio-frequency_identification
