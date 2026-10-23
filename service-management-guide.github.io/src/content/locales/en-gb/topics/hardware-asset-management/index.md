# Hardware Asset Management

**Hardware asset management follows physical technology from procurement to disposal: it knows what each device is, who has it, how it is configured and protected, when it should be replaced, and how it leaves safely; sustainability and data protection are as much a part of it as cost.**

## Why this matters

Hardware is the part of IT you can drop. It gets lost on trains, left in taxis, stolen from cars, forgotten in cupboards, and shipped home by leavers. It also gets old. A fleet bought in a single year wears out together, and the cost of keeping failing devices alive grows until a replacement wave lands in one budget. Hardware holds data, and a device that leaves the organisation without being wiped can leak it.

The environment adds another dimension. Electronic devices are made with significant energy and materials, and become electronic waste when discarded. Wikipedia describes e-waste as a growing environmental problem, with hazards from improper handling. Extending the useful life of devices, repairing, reusing, and recycling responsibly reduces both cost and harm.

Hardware asset management (HAM) is the part of IT asset management that deals with physical devices: laptops, desktops, mobile phones, servers, network equipment, peripherals, and the specialised devices of a particular industry. It answers the practical questions: what do we have, where is it, who has it, is it safe, is it worth keeping, and how does it leave? This topic builds on Topic 4.1 — Asset Management and connects to configuration management (Topic 4.4 — Configuration Management), information security (Topic 3.13 — Information Security Management), and sustainability (Topic 8.2 — Sustainability and Responsible Service Management).

## Core concepts

**Hardware lifecycle.** Stages include plan, procure, receive and tag, configure and deploy, operate and support, refresh or retire, and dispose. Each stage involves different teams, so handoffs matter. Wikipedia's articles on asset tracking and warranties describe parts of this.

**Standard builds and configuration.** A standard device configuration, with approved software and security settings, makes deployment faster and support easier. Zero-touch provisioning, described on Wikipedia, lets a device be configured automatically when it first connects. See Topic 6.5 — Self-Service and Automated Fulfilment.

**Endpoint management.** Tools that enrol, configure, update, and protect laptops, phones, and tablets from a central console. Wikipedia describes mobile device management and unified endpoint management. They also supply the data on what is in use and its health.

**Bring your own device (BYOD).** Policies that allow staff to use personal devices for work. Wikipedia describes BYOD. It reduces hardware cost and raises questions of security, support, and privacy. Decide what is allowed, what is managed, and what happens when someone leaves.

**Identification and custody.** Each device has an identity, such as an asset tag and a serial number, and a custodian. Records of moves and handovers prevent loss. See Topic 4.1 — Asset Management.

**Warranty and support.** Hardware comes with warranties and support contracts that end on known dates. Tracking them allows repairs while they are covered and informs refresh decisions. Wikipedia describes warranties.

**Condition and health.** Devices report some of their own condition: battery health, disk status, and failure indicators. Wikipedia describes SMART, the disk monitoring technology. Using this data allows replacement before failure and reduces unplanned downtime.

**Refresh cycles.** The planned replacement of hardware at a certain age or condition. Common cycles are three to five years for laptops, and often longer for network equipment, but the right interval depends on use, cost of failure, and the pace of software requirements. Replacing too early wastes money and resources; too late raises failures and security risk. Base the interval on data.

**Spares and repair.** Keeping spare units and parts shortens recovery. Repair keeps devices useful longer. Wikipedia describes the right to repair movement, which argues that owners and independent shops should be able to repair devices. Consider repairability when buying.

**Data protection.** Devices should use disk encryption, so that a lost device does not expose data, and be wiped before reuse or disposal. Wikipedia describes disk encryption and data erasure. Use methods that match the sensitivity of the data and, where required, obtain a certificate of erasure. See Topic 3.13 — Information Security Management.

**Disposal and reuse.** Options include internal reuse, donation, resale, refurbishment, recycling, and destruction. Choose partners who follow the rules on waste and data. In the European Union, the WEEE Directive, described on Wikipedia, sets rules for waste electrical and electronic equipment; the Basel Convention, also described there, governs the movement of hazardous waste between countries. Check local rules.

**Environmental footprint.** Much of a device's lifetime emissions come from manufacture, not use. Wikipedia describes embodied energy. Keeping devices longer, repairing them, and buying refurbished where suitable often reduces the footprint more than efficiency gains in use. The circular economy approach, described on Wikipedia, aims to keep materials in use.

**Data centres and infrastructure.** Servers and network equipment have their own lifecycle, power, and cooling considerations. Many organisations now rent rather than own, which changes the asset picture but not the need to manage what remains. See Topic 4.5 — Financial Management and FinOps.

**How the lenses fit.** Hardware asset management benefits from agile iteration on the fleet process and from standard builds. AI can predict failures and help with matching records, under review. Automation provisions, patches, and wipes devices. Analytics shows age, failures, utilisation, and cost.

## Best practices

1. **Tag and record on arrival.** Every device gets an identity and a record when it is received, before anyone uses it. Link purchase, warranty, and owner data.
2. **Use a standard build.** Define and maintain a small number of device configurations, with security settings and approved software. Automate enrolment where possible.
3. **Know custody.** Record who holds each device, and update the record when it moves. Require acknowledgment when a device is issued.
4. **Encrypt and manage.** Require disk encryption and enrolment in endpoint management for every device. Be able to lock or wipe a lost device remotely, and test that it works.
5. **Plan refresh from data.** Use age, failure rates, and condition data to set replacement timing. Smooth purchases across years to avoid a single large wave.
6. **Keep spares and a repair route.** Hold a small pool of spare devices for urgent replacement, and decide what to repair or send for service. Check warranty terms.
7. **Retrieve devices from leavers and movers.** Link HR events to tasks to recover or reassign equipment, with deadlines and follow-up.
8. **Wipe before reuse or disposal.** Use an approved method, record it, and obtain evidence from any external partner. Never rely on deleting files.
9. **Dispose responsibly.** Choose reuse and refurbishment before recycling, and use partners that follow waste and data rules. Keep certificates.
10. **Measure the footprint and the cost.** Track total cost and, where you can, environmental impact per device and per user, and use them in buying decisions.

## Questions to discuss with your team

**How old is our fleet, and how many devices are past their intended life?**
Use data. Expect a long tail. Ask what the failure and support costs are for old devices. Follow up by planning a staged refresh.

**What happens to a laptop from the day a person leaves until it is ready for the next user?**
Walk through each step and ask where it can stall. Expect delays in retrieval and wiping. Follow up by choosing one step to speed up.

**If a device with sensitive data were lost today, what would protect the data, and how do we know?**
Check encryption status and remote wipe. Expect gaps in older or personal devices. Follow up by sampling devices for compliance.

**Which devices do we replace on a schedule, and could we keep more of them longer with repair?**
Ask what drives the refresh cycle: warranty, software needs, or habit. Look at failure rates. Follow up by trialing a longer cycle for one group.

**How do we dispose of hardware, and who confirms that data was erased?**
Ask for documents. Expect uncertainty about partners. Follow up by reviewing one disposal chain end to end.

**How could AI help predict failures or reconcile our records, and what would we check by hand?**
AI can find devices likely to fail from health data. It can also flag healthy ones. Ask who owns it and how its predictions are checked. Follow up by testing on last year's failures.

## In practice: a service management example

A regional council's IT department manages 3,000 laptops, 800 phones, and a few hundred servers and network devices. Every three years it replaces most laptops in one purchase, which strains the budget, and it has found about 200 old laptops in cupboards. A recent audit finds that a batch of devices sent for recycling had no record of data erasure.

The hardware asset manager proposes a refresh by condition. Using the endpoint management tool's battery and disk health data, plus age and failure history, she estimates that around 35 percent of laptops at three years remain in good condition. She sets a rule: replace at four years or when health falls below a threshold, with a smoothed purchase each quarter. For the cupboards, she asks each team to return unused devices to a central store, where they are wiped, tested, and reissued or sold through a refurbisher who provides a certificate of erasure.

She also adds a leaver trigger that creates a retrieval task with a two-week deadline, and requires the endpoint tool to confirm that each recovered device has been wiped before it is marked available.

After a year, the council's laptop spend falls by about a fifth, nearly 150 devices are reissued, and every recycled device has an erasure record. The failure rate among extended-life laptops is slightly higher, and the help desk reports more battery replacements. What remains hard: some staff resent keeping older devices while others get new ones; the refurbisher cannot always certify erasure for older encrypted drives; and the council has not measured the environmental effect, though it expects it to be positive. The manager adds an annual review of the extended cycle against support cost, and asks the refurbisher for a clearer erasure standard.

## Four perspectives

### Product and delivery teams

Use standard devices where you can, return what you no longer need, and keep development hardware recorded and encrypted. Consider repairability and lifespan when you specify equipment.

### Service and operations teams

Keep the inventory accurate, enrol and encrypt every device, test remote wipe, and manage spares and repair. Handle disposal with a recorded chain of custody.

### Leadership and governance

Decide refresh and disposal policy with cost, risk, and environmental effects in view. Fund the process and a smooth replacement plan. Ask for evidence on data erasure.

### Customers and users

Look after your device, report loss at once, and return equipment when you leave or no longer need it. Tell the support team about problems early so that repair is cheap.

## Agile, AI, automation, and analytics

### Agile

Improve the fleet process in small steps with users: try a new build with one group, adjust, and extend. Review refresh rules with data each year. Caution: constant changes to the standard build create support effort; keep it stable and explain changes.

### AI

AI can predict device failures from health data, help match records, and suggest which devices to refresh, under review. Name an owner. Caution: predictions based on few failures may be unreliable; compare with simple rules and track false alarms. See Topic 5.1 — AI in Service Management.

### Automation

Automate enrolment, configuration, patching, remote lock and wipe, and leaver tasks, with logs and checks. Caution: an automated wipe on the wrong device destroys data; confirm identity and keep backups. See Topic 6.5 — Self-Service and Automated Fulfilment.

### Analytics

Look at fleet age, failure rates, repair cost, warranty status, utilisation, retrieval time for leavers, and, where available, energy and emissions estimates. Caution: figures on emissions are usually estimates with wide uncertainty; state the method. See Topic 7.3 — Measurement and Reporting and the *Service Management Metrics* book.

## Common failure modes

- **Devices not recorded on arrival.** Records never catch up. Tag and record at receipt.
- **No custody tracking.** Equipment disappears. Record who holds what.
- **Unencrypted devices.** A loss becomes a breach. Require encryption and test remote wipe.
- **Big-bang refresh.** Budget shocks and waste. Smooth purchases and use condition data.
- **Disposal without proof of erasure.** Data leaves with the device. Use approved methods and keep certificates.
- **Hoarding old devices.** Cupboards fill with stock. Return, wipe, and reuse or recycle.
- **Ignoring environmental impact.** Waste grows. Favour reuse, repair, and responsible recycling.

## Maturity model

| Dimension | Initiate | Develop | Standardise | Manage | Orchestrate |
|---|---|---|---|---|---|
| Records and custody | Purchase lists | Main devices recorded | Every device tagged, recorded, and assigned | Records reconciled with discovery and audited | Records accurate in real time across sites and suppliers |
| Protection | Inconsistent | Encryption on new devices | Encryption, enrolment, and remote wipe standard | Compliance monitored and tested | Protection adapts automatically to risk |
| Refresh | By age only | Planned cycle | Smoothed refresh based on condition | Refresh tuned from cost and failure data | Refresh integrated with repair, reuse, and sustainability goals |
| Disposal | Informal | Approved vendor | Wipe, certificate, and recycling process | Chain of custody audited | Circular approach across the fleet and partners |

## Checklist

- [ ] Every device is tagged and recorded on arrival.
- [ ] We know who holds each device.
- [ ] Devices are encrypted and enrolled in management, and remote wipe is tested.
- [ ] Refresh timing uses condition and failure data.
- [ ] Spares and a repair route exist.
- [ ] Leavers' devices are retrieved within a defined time.
- [ ] Devices are wiped before reuse or disposal, with a record.
- [ ] We choose reuse and responsible recycling and track outcomes.

## AI prompts

**Find candidates for refresh from health data.**

```text
Here is a list of devices with age, battery health, disk health, repair history, and warranty end date, with identifiers removed: [paste].
Group devices into low, medium, and high concern based on the data and the rules I state: [state rules]. List devices that fall in different groups depending on the rule. Do not recommend replacement.
List what you are unsure of.
```

**Draft a leaver equipment checklist.**

```text
Our context: [type of organisation, device types, management tools]. Our leaver process: [describe].
Draft a checklist for retrieving, wiping, and reissuing a device, with an owner role and deadline for each step, and list the points where equipment is most often lost. Do not invent policy.
List what you are unsure of.
```

**Review a disposal process.**

```text
Here is how we dispose of hardware: [describe steps and partners]. Here is what our policy requires: [paste].
List each policy requirement and say whether the described process addresses it, or "not described". Do not assess legal compliance.
List what you are unsure of.
```

## AI skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): use to link devices to services and owners.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): use to plan servers and infrastructure.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): use to weigh refresh, repair, and reuse choices.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): use to assign responsibility across procurement, IT, HR, and facilities.

## Key sources

- ISO/IEC 19770 (the standards themselves): the requirements and guidance for IT asset management; read the current editions from the publisher.
- PeopleCert, ITIL certification pages: the owner's description of the IT asset management practice.
- Wikipedia, "Electronic waste" and "Circular economy": overviews of the environmental aspects.
- Wikipedia, "Right to repair": background on repairability.

## References

1. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
2. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
3. Right to repair — Wikipedia — https://en.wikipedia.org/wiki/Right_to_repair
4. Data erasure — Wikipedia — https://en.wikipedia.org/wiki/Data_erasure
5. Disk encryption — Wikipedia — https://en.wikipedia.org/wiki/Disk_encryption
6. Mobile device management — Wikipedia — https://en.wikipedia.org/wiki/Mobile_device_management
7. Bring your own device — Wikipedia — https://en.wikipedia.org/wiki/Bring_your_own_device
8. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
9. Warranty — Wikipedia — https://en.wikipedia.org/wiki/Warranty
10. Waste Electrical and Electronic Equipment Directive — Wikipedia — https://en.wikipedia.org/wiki/Waste_Electrical_and_Electronic_Equipment_Directive
11. Embodied energy — Wikipedia — https://en.wikipedia.org/wiki/Embodied_energy
