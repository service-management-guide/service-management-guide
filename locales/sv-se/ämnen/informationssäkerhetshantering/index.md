# Informationssäkerhetshantering

**Informationssäkerhetshantering skyddar konfidentialiteten, integriteten och tillgängligheten hos information och tjänster; för tjänsteteam fungerar den bäst när säkerhetskontroller är inbyggda i leveranspipelinen och den dagliga driften, när säkerhetsincidenter hanteras som andra incidenter men med extra omsorg och när riskbeslut är ägda och registrerade.**

## Varför det här är viktigt

Varje tjänst håller information som någon vill åt: kunduppgifter, inloggningsuppgifter, immateriella rättigheter, ekonomiska data. Varje tjänst beror också på att information är korrekt och tillgänglig när den behövs. Säkerhetsbrister drabbar allt detta. Ett dataintrång exponerar kunder, en manipulerad post vilseleder beslut och ett utpressningsangrepp stoppar arbetet.

Säkerhet kan kännas som en separat värld av specialister, regler och revisioner, som anländer i slutet av ett projekt för att säga nej. Den modellen fallerar vid kontinuerlig leverans, där förändring är frekvent och sena kontroller är för långsamma. Alternativet, ofta kallat DevSecOps, bygger in säkerhet i design, kod, pipeline och drift så att den är en del av varje ändring och varje skift. Säkerhetsspecialister blir partner som sätter skyddsräcken och hjälper team att möta dem, inte grindvakter som inspekterar efteråt.

Tjänstehantering har sin egen insats. Säkerhetsincidenter anländer genom servicedesken. Behörighetsbeställningar och ändringar är säkerhetsbeslut. Leverantörer är en del av angreppsytan. Kunskap och övervakning stöder upptäckt. Det här ämnet förklarar huvudidéerna och hur man arbetar med en säkerhetsfunktion, utan att försöka vara en lärobok i säkerhet. Det hänger ihop med hantering av serviceförfrågningar (ämne 3.6 — Hantering av serviceförfrågningar), leverantörshantering (ämne 3.14 — Leverantörshantering) och styrning (ämne 8.1 — Styrning, risk och efterlevnad). Det ger ingen juridisk rådgivning eller rådgivning om regelefterlevnad; kontrollera de regler som gäller er.

## Grundbegrepp

**CIA-triaden.** Informationssäkerhet syftar till att skydda tre egenskaper: konfidentialitet (bara behöriga kan se information), integritet (information är korrekt och har inte manipulerats) och tillgänglighet (information och tjänster kan användas när de behövs). Wikipedia-artikeln om informationssäkerhet beskriver triaden. Vissa ramverk lägger till andra, som autenticitet och spårbarhet.

**Riskbaserat angreppssätt.** Säkerhetsinsatser är begränsade, så de bör gå dit risken är störst. Risk kombinerar sannolikheten för en skadlig händelse med dess påverkan. Wikipedia beskriver riskhantering i allmänhet. Ett riskregister registrerar risker, ägare och beslut: minska, acceptera, överföra eller undvika.

**Ledningssystem för informationssäkerhet (ISMS).** En uppsättning policyer, processer och kontroller för att hantera risker för informationssäkerhet, med regelbunden granskning. ISO/IEC 27001 anger krav för ett ISMS och är en grund för certifiering. Wikipedia beskriver den. Se ämne 1.8 — Ramverk och standarder för tjänstehantering. NIST Cybersecurity Framework, från en amerikansk myndighet och brett använt på andra håll, organiserar aktiviteter i funktioner som identifiera, skydda, upptäcka, svara och återställa.

**Kontroller.** Åtgärder som minskar risk: tekniska (kryptering, åtkomstkontroller, patchning), organisatoriska (policyer, utbildning, uppdelning av arbetsuppgifter) och fysiska (lås, besöksloggar). Kontroller bör stå i proportion till risken och testas.

**Skydd i flera lager.** Att använda flera lager av kontroller så att fel i en inte betyder fel i alla. Wikipedia beskriver skydd i flera lager (defense in depth) inom databehandling. En angripare som tar sig förbi ett hinder möter ett annat.

**Minsta privilegium och åtkomst.** Människor och system bör ha bara den åtkomst de behöver, så länge de behöver den. Wikipedia beskriver principen om minsta privilegium. Stark autentisering, inklusive flerfaktorsautentisering, minskar risken att stulna lösenord ger åtkomst. Se ämne 3.6 — Hantering av serviceförfrågningar.

**Zero trust.** Ett angreppssätt där ingen användare eller enhet är betrodd som standard på grund av sin nätverksplats; varje förfrågan verifieras. Wikipedia beskriver zero trust-arkitektur. Det flyttar uppmärksamheten från nätverkets kant till identitet, enhetens tillstånd och data.

**Sårbarhets- och patchhantering.** Att hitta svagheter i programvara och system och åtgärda dem i tid. Wikipedia-artiklarna om sårbarhetshantering och om Common Vulnerabilities and Exposures (CVE) beskriver hur svagheter identifieras och följs. Prioritera efter exponering och påverkan, inte bara efter allvarlighetspoäng. Se ämne 4.2 — Hantering av programvarutillgångar.

**Programvaruförsörjningskedjan.** Modern programvara inkluderar många komponenter från andra: bibliotek, containrar, byggverktyg. En svaghet i en påverkar alla som använder den. Wikipedia beskriver programvaruförsörjningskedjan. Att veta vad som finns i er programvara, genom en programvaruförteckning (software bill of materials), hjälper er att svara när en svaghet tillkännages.

**Hotmodellering.** Ett strukturerat sätt att tänka på hur ett system kunde angripas, tidigt i designen, så att åtgärder kan planeras. Wikipedia beskriver hotmodeller. Det är billigt vid designtillfället och dyrt senare.

**DevSecOps och pipelinen.** Att bygga in säkerhetskontroller i leveranspipelinen: statisk analys av kod, beroendeskanning, kontroller av hemligheter i kod, containerskanning och policykontroller. Wikipedia beskriver statisk applikationssäkerhetstestning. Kontrollerna körs på varje ändring och ger belägg. Se ämne 6.4 — Pipelines och automatiserade ändringar.

**Upptäckt och övervakning.** Säkerhetsövervakning söker tecken på angrepp, som ovanliga inloggningar eller dataförflyttning. System för säkerhetsinformation och händelsehantering (SIEM) samlar in och analyserar loggar från många källor. Wikipedia beskriver SIEM. De fungerar bara om loggar är kompletta och larm är justerade. Se ämne 3.10 — Övervakning och händelsehantering.

**Säkerhetsincidenter.** En händelse som komprometterar, eller hotar att kompromettera, information eller system. Wikipedia beskriver hantering av datasäkerhetsincidenter. En säkerhetsincident behöver incidentrollerna i ämne 3.2 — Incidenthantering, plus extra: att bevara bevis, begränsa angreppet och besluta om underrättelse av kunder och tillsynsmyndigheter, vilket kan vara lagkrav i vissa jurisdiktioner. Involvera juridiska och säkerhetsrådgivare tidigt.

**Människor.** Många angrepp börjar hos en person: nätfiske, social manipulation, svaga vanor. Wikipedia beskriver nätfiske och säkerhetsmedvetenhet. Utbildning hjälper mest när den är kort, frekvent och knuten till verkliga exempel, och när det är tryggt och lätt att rapportera ett misstag.

**Integritet (dataskydd).** Skydd av personuppgifter är besläktat med, men inte detsamma som, säkerhet. Lagar som dataskyddsförordningen i Europeiska unionen sätter skyldigheter för personuppgifter. Wikipedia beskriver inbyggt dataskydd (privacy by design), idén att bygga in dataskydd i system från början. Sök specialistrådgivning.

**Hur linserna passar in.** Säkerhet är området där agilt tempo och kontroll möts skarpast. Agil praktik behandlar säkerhetsarbete som en del av backloggen och involverar säkerhetspersoner i teamet. AI hjälper både försvarare och angripare; den behöver egen styrning (se ämne 5.6 — AI-styrning, risk och regelefterlevnad). Automatisering upprätthåller kontroller konsekvent. Analys visar exponering och svarstider.

## Bra arbetssätt

1. **Börja med en riskbaserad syn.** Lista den information och de tjänster som betyder mest, de hot de möter och kontrollerna på plats. Fokusera insatsen på de största luckorna.
2. **Arbeta med säkerhet som partner.** Ta med en säkerhetsperson i design och planering. Fråga vilka skyddsräcken teamet bör följa och håll dem få och tydliga.
3. **Bygg in kontroller i pipelinen.** Kör kod-, beroende-, container- och hemlighetsskanningar på varje ändring. Åtgärda orsakerna till upprepade fynd och låt en fallerande kontroll stoppa en release där risken är allvarlig.
4. **Tillämpa minsta privilegium och stark autentisering.** Bevilja minsta möjliga åtkomst, kräv flerfaktorsautentisering, granska åtkomst regelbundet och ta bort den när den inte längre behövs.
5. **För en förteckning och patcha snabbt.** Känn till vilka programvaror och system ni kör, följ sårbarheter och prioritera efter exponering och påverkan. Sätt mål för tid till patchning och följ dem.
6. **Känn er försörjningskedja.** Registrera komponenterna i er programvara och leverantörerna bakom era tjänster. Bevaka tillkännagivna svagheter och ha ett sätt att snabbt hitta drabbade system.
7. **Modellera hot tidigt.** För nya tjänster och större ändringar, lägg en timme på att tänka som en angripare och registrera de åtgärder ni väljer.
8. **Förbered svar.** Skriv en säkerhetsincidentplan med roller, kontakter, bevishantering och beslutspunkter. Repetera, inklusive beslut om underrättelse. Involvera juridisk rådgivning.
9. **Gör rapportering tryggt.** Uppmuntra människor att snabbt rapportera misstänkta meddelanden och misstag och svara vänligt. Rädsla för skuld döljer incidenter.
10. **Registrera riskbeslut.** När en risk accepteras, registrera vem som accepterade den, varför och när den ska granskas. Gör registret synligt för dem som äger tjänsterna.

## Frågor att diskutera i teamet

**Vilka är de mest värdefulla och mest känsliga uppgifter vi håller, och vem kan nå dem?**
Gör en kort lista. Räkna med överraskningar om vem som har åtkomst och var kopior finns. Fördjupa genom att välja en datamängd och kontrollera dess åtkomstlista.

**Vilka säkerhetskontroller körs på varje ändring, och vilka sker bara i slutet?**
Jämför pipelinen med releasechecklistan. Räkna med sena manuella granskningar. Fördjupa genom att välja en sen kontroll att flytta in i pipelinen.

**Hur snabbt patchar vi en allvarlig sårbarhet, och hur får vi veta vilka system som berörs?**
Fråga om den senaste. Räkna med "vi sprang runt". Fördjupa genom att komma överens om en måltid och ett sätt att lista drabbade system, till exempel ur en förteckning.

**Vad skulle vi göra under första timmen av ett misstänkt intrång, och vem beslutar om att berätta för kunder eller tillsynsmyndigheter?**
Kör en kort scenariodiskussion. Räkna med luckor kring beslutsrätt. Fördjupa genom att skriva en sida med roller och kontakter och involvera juridiska rådgivare.

**Hur tryggt är det för personal att rapportera ett misstag, som att klicka på en dålig länk?**
Det här prövar kulturen. Fråga vad som hände med den senaste som gjorde det. Fördjupa genom att komma överens om hur rapporter bekräftas och vad som sägs offentligt.

**Hur kunde AI hjälpa vårt säkerhetsarbete, och vilka nya risker lägger den till?**
AI kan sammanfatta larm och granska kod. Den kan också läcka data som klistras in i den, generera osäker kod och bli ett mål för angripare. Fråga vem som äger varje användning och vilka data som får delas. Fördjupa genom att komma överens om en regel för vad som inte får klistras in i externa verktyg.

## I praktiken: ett exempel på tjänstehantering

En regional banks digitala team för privatkunder genomgår en säkerhetsgranskning före varje release, hållen av ett centralt team en gång i månaden. Releaser köar för den. Utvecklare ser den som en vägspärr; säkerhetspersonal ser återkommande fynd och lite tid. Förra kvartalet fanns ett bibliotek med en känd svaghet i produktion i sex veckor innan granskningen hittade det.

Säkerhetschefen och teknikchefen kommer överens om att pröva en annan modell för en produkt. En säkerhetsingenjör går med i teamet halva varje vecka. Pipelinen får beroendeskanning, statisk analys och en kontroll av hemligheter i kod, och fäller ett bygge vid kritiska fynd. Teamet för en enkel programvaruförteckning som genereras ur pipelinen. Varje större funktion får en timmes hotmodelleringssession vid designtillfället. Den månatliga granskningen ersätts för den här produkten av en lätt stickprovsrevision.

Inom ett kvartal fångar pipelinen två sårbara bibliotek och en incheckad inloggningsuppgift före release. När en ny, brett rapporterad biblioteksvaghet tillkännages identifierar förteckningen de tre berörda tjänsterna inom en timme; två patchas samma dag och den tredje schemaläggs med en kompenserande kontroll. Teamet finner att dess säkerhetsincidentplan förutsätter en kontaktperson som har slutat och uppdaterar den.

Det som förändras: fynd kommer när de är billiga att åtgärda, och den månatliga kön försvinner för den här produkten. Det som förblir svårt: pipelinekontrollerna ger många fynd av låg allvarlighetsgrad, och utvecklare har börjat ignorera dem; förteckningen täcker inte tredjepartstjänster som produkten anropar; och bankens tillsynsmyndighet ber fortfarande om belägg i en annan form, vilket kostar insats att generera. Teamen kommer överens om att justera tröskelvärdena och fråga tillsynsmyndigheten vilka pipelineregister den accepterar.

## Fyra perspektiv

### Produkt- och leveransteam

Äg säkerhet som en del av kvaliteten: modellera hot, använd pipelinekontrollerna, åtgärda fynd snabbt och hantera hemligheter med omsorg. Be säkerhet om skyddsräcken och tala om vad som bromsar er.

### Tjänste- och driftsteam

Tillämpa minsta privilegium, patcha i tid och bevaka ovanlig aktivitet. Behandla säkerhetsincidenter med större incidenters disciplin och bevara bevis. Rapportera vad ni ser till säkerhetsteamet.

### Ledning och styrning

Besluta riskaptit och finansiera både förebyggande och respons. Be om belägg för att kontroller fungerar. Skapa en kultur där det är tryggt att rapportera misstag. Känn till vem som avgör om underrättelse av kunder och tillsynsmyndigheter.

### Kunder och användare

Använd stark autentisering, rapportera misstänkta meddelanden och håll dina egna inloggningsuppgifter säkra. Fråga leverantörer hur de skyddar din information och vad de kommer att berätta vid ett intrång.

## Agilitet, AI, automatisering och analys

### Agilitet

Lägg säkerhetsarbete på samma backlogg som funktioner, involvera säkerhetspersoner i teamet och förbättra i små steg efter varje fynd och incident. Se upp: säkerhet genom "sprint 0" eller en granskning i sista minuten missar poängen; bygg in den i arbetsflödet.

### AI

AI kan hjälpa till att sammanfatta larm, granska kod för svagheter och skriva utkast till incidentanteckningar, med en person som ansvarar för beslut. Den för också med sig risker: data som läcker till externa verktyg, osäker genererad kod och manipulation av modellen. Sätt regler för data och granska AI-genererade ändringar som vilka andra som helst. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

### Automatisering

Automatisera skanning, patchning av rutinsystem, åtkomstgranskningar och beläggsinsamling, med loggar och kontroller på själva automatiseringen. Se upp: automatisk åtgärd med breda privilegier är ett mål; begränsa och övervaka den. Se ämne 6.4 — Pipelines och automatiserade ändringar.

### Analys

Följ tid till patchning, exponering efter allvarlighetsgrad, slutförda åtkomstgranskningar, säkerhetsfynd per ändring samt tider för upptäckt och respons. Se upp: att räkna stängda sårbarheter kan belöna enkla åtgärder, och incidentantal kan sjunka för att upptäckten är dålig; kombinera mått och testa upptäckt. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Säkerhet i slutet.** Granskningar blockerar releaser och hittar problem sent. Bygg in kontroller i pipelinen och designen.
- **Överbelastning av larm och fynd.** Team ignorerar skannrar. Justera tröskelvärden och åtgärda upprepade orsaker.
- **För mycket åtkomst.** Konton behåller privilegier de inte längre behöver. Granska och ta bort regelbundet.
- **Ingen förteckning.** Ni kan inte säga vad som berörs av en ny svaghet. Generera och håll en förteckning.
- **Otestade incidentplaner.** Kontakter är inaktuella. Repetera och uppdatera.
- **Skuld för att rapportera misstag.** Incidenter döljs. Svara vänligt och snabbt.
- **Riskacceptans utan ägare.** Risker accepteras som standard. Registrera vem som accepterade och när den ska granskas.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Riskhantering | Informell | Huvudrisker listade | Riskregister med ägare och beslut | Risker granskas mot incidenter och tester | Risk förvaltas i hela organisationen och hos leverantörer |
| Pipelinesäkerhet | Manuell granskning i slutet | Några skanningar | Standardkontroller på varje ändring | Fynd och åtgärder mäts | Policy och kontroller anpassas och automatiseras med tillsyn |
| Åtkomst | Ad hoc | Grundläggande granskningar | Minsta privilegium och flerfaktorsautentisering som standard | Åtkomst granskas på belägg | Åtkomst justeras kontinuerligt över system |
| Upptäckt och respons | Reaktiv | Grundläggande loggning | Säkerhetsövervakning och en repeterad incidentplan | Tider för upptäckt och respons mäts | Samordnad respons över team och leverantörer |

## Checklista

- [ ] Vi känner vår mest känsliga information och vem som kan nå den.
- [ ] Säkerhetskontroller körs i pipelinen på varje ändring.
- [ ] Åtkomst följer minsta privilegium, med flerfaktorsautentisering och regelbunden granskning.
- [ ] Vi för en förteckning över programvara och följer sårbarheter.
- [ ] Vi har en säkerhetsincidentplan, med roller, kontakter och juridisk rådgivning, och har repeterat den.
- [ ] Personal kan rapportera misstag tryggt.
- [ ] Riskacceptanser registreras med ägare och granskningsdatum.
- [ ] Det finns regler för vilka data som får delas med AI-verktyg.

## AI-prompter

**Förbered en hotmodelleringssession.**

```text
Our system: [describe components, data, and users]. Trust boundaries we know: [list].
List questions to ask in a one-hour threat modeling session, grouped by component and data flow, and note what we have not told you. Do not list specific attacks as facts about our system.
List what you are unsure of.
```

**Sammanfatta sårbarhetsfynd för prioritering.**

```text
Here is a list of vulnerability findings with severity, affected system, and whether the system is exposed to the internet: [paste, with sensitive details removed].
Group them, list those that combine high severity with exposure, and give one question per group about business impact. Do not claim any is exploitable.
List what you are unsure of.
```

**Skriv ett utkast till en förstatimmeguide.**

```text
Our context: [type of organization, key systems]. Roles available: [list].
Draft a one-page first-hour checklist for a suspected data breach with steps for containment, evidence preservation, communication, and decisions that need legal or leadership input. Do not state legal obligations; list questions for our legal adviser instead.
List what you are unsure of.
```

## AI-färdigheter

- [security-testing](../../../../skills/security-testing/SKILL.md): använd för att planera säkerhetskontroller och tester.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): använd för att formulera dataskyddsfrågor till er juridiska rådgivare.
- [risk-register](../../../../skills/risk-register/SKILL.md): använd för att registrera risker, ägare och beslut.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): använd för att planera respons, inklusive säkerhetshändelser.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): använd för att välja indikatorer för tidig varning.

## Viktiga källor

- ISO/IEC 27001 (själva standarden): kraven för ett ledningssystem för informationssäkerhet; läs den aktuella utgåvan hos utgivaren.
- NIST, Cybersecurity Framework (nist.gov/cyberframework): ett brett använt ramverk från en amerikansk myndighet.
- OWASP (owasp.org): gemenskapens vägledning om applikationssäkerhet.
- Wikipedia, "Information security" och "ISO/IEC 27001": översikter av fältet och standarden.

## Referenser

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
