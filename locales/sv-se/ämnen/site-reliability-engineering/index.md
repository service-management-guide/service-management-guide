# Site reliability engineering

**Site reliability engineering (SRE) behandlar drift som ett ingenjörsproblem: det sätter mätbara tillförlitlighetsmål, spenderar en felbudget på förändring, tar bort upprepat slitgöra med programvara och lär sig av fel utan skuld; det uttrycker många praktiker inom tjänstehantering i ingenjörstermer.**

## Varför det här är viktigt

Varje tjänst har en spänning mellan förändring och tillförlitlighet. Kunder vill ha nya funktioner och de vill att tjänsten ska fungera. Team som driver på förändring snabbt orsakar avbrott, och team som vaktar stabilitet bromsar allt. Utan ett sätt att väga de två mot varandra avgörs diskussionen av den som är högljuddast, eller av den senaste incidenten.

Site reliability engineering erbjuder ett sätt att göra avvägningen explicit. Det utgår från idén att perfekt tillförlitlighet varken är möjlig eller önskad: användare kan inte se skillnaden mellan 99,999 procents och 99,99 procents tillgänglighet när deras egen enhet och nätverk fallerar oftare än så, och varje extra nia kostar mycket mer. Så teamet kommer överens om ett mål som motsvarar vad användarna behöver, mäter det och använder utrymmet mellan målet och perfektion som en budget för risk.

SRE började hos Google i början av 2000-talet och beskrivs i böcker som företaget publicerat online. Många andra organisationer har antagit delar av det. För tjänstehantering ligger värdet i att det ger konkreta versioner i ingenjörsstil av idéer som ITIL kallar servicenivåhantering, tillgänglighetshantering och ständig förbättring. Det här ämnet förklarar huvudidéerna och varnar för att kopiera dem utan det sammanhang som fick dem att fungera.

## Grundbegrepp

**Vad SRE är.** Wikipedia beskriver site reliability engineering som en uppsättning principer och praktiker som tillämpar aspekter av programvaruutveckling på it-infrastruktur och drift, för att skapa skalbara och tillförlitliga system. Ett SRE-team omfattar vanligen personer med programvaru- och systemkompetens som automatiserar driftarbete och deltar i design för tillförlitlighet.

**Servicenivåindikator (SLI).** Ett mått på någon aspekt av tjänsten så som användarna upplever den, till exempel andelen förfrågningar som lyckas, eller andelen som slutförs inom 300 millisekunder. En bra indikator speglar det användarna bryr sig om, inte det som är lätt att mäta.

**Servicenivåmål (SLO).** Ett mål för en indikator över en period, till exempel "99,9 procent av förfrågningarna lyckas under rullande 30 dagar". Målet är ett internt mål som överenskommits mellan dem som driver tjänsten och dem som är beroende av den. Wikipedia beskriver servicenivåmål som en del av servicenivåavtal.

**Servicenivåavtal (SLA).** Ett avtal med följder, ofta ekonomiska, om tjänsten faller under en överenskommen nivå. Ett SLA anger vanligen ett lösare mål än det interna SLO:t, så att teamet får förvarning före ett brott. Se ämne 3.7 — Hantering av servicenivåer.

**Felbudget.** Den tillåtna mängden otillförlitlighet: om målet är 99,9 procent är budgeten de återstående 0,1 procenten. Så länge det finns budget kvar kan teamet ta risker, till exempel släppa snabbare. När budgeten är förbrukad saktar teamet ned förändring och investerar i tillförlitlighet. Budgeten gör avvägningen mellan tillförlitlighet och förändring till ett gemensamt, mätbart beslut i stället för en diskussion.

**Slitgöra (toil).** Arbete som är manuellt, upprepat, automatiserbart, taktiskt och som växer med tjänsten utan att tillföra bestående värde. Exempel är att manuellt starta om en tjänst, handbearbeta samma typ av beställning och kvittera brusiga larm. SRE-praktik begränsar andelen tid som läggs på slitgöra, ofta till omkring hälften, och använder resten till ingenjörsarbete som minskar det.

**Övervakning och larm.** Larm ska vara åtgärdsbara och knutna till symptom som användare känner, med ett tydligt svar. Brusiga larm som ingen agerar på lär människor att ignorera dem. Se ämne 3.10 — Övervakning och händelsehantering och ämne 7.4 — Observerbarhet och telemetri.

**Incidentrespons och skuldfria granskningar.** SRE betonar tydliga roller under incidenter, kommunikation och strukturerade granskningar efteråt som tittar på systemet och ger följda åtgärder. Se ämne 3.2 — Incidenthantering och ämne 3.3 — Problemhantering.

**Kapacitet och prestanda.** SRE omfattar att prognostisera efterfrågan, testa gränser och planera kapacitet så att tillväxt inte orsakar fel. Se ämne 3.11 — Tillgänglighet, kapacitet och prestanda.

**Releaseteknik och förändring.** Tillförlitliga, repeterbara releaser, ofta med progressiv utrullning och automatisk återställning, ingår i SRE:s arbete. Se ämne 2.2 — Kontinuerlig leverans.

**Att öva på fel.** Kaosteknik injicerar fel avsiktligt, under kontroll, för att hitta svagheter före verkliga incidenter. Övningsdagar repeterar respons. Se ämne 3.12 — Hantering av tjänstekontinuitet.

**SRE och DevOps.** De två delar många idéer. En vanlig beskrivning är att SRE är ett sätt att implementera DevOps-principer, med en särskild uppsättning praktiker som SLO:n, felbudgetar och slitgöragränser. Se ämne 2.5 — DevOps.

**SRE och ITIL.** SLO:n och felbudgetar står bredvid servicenivåhantering; skuldfria granskningar står bredvid problemhantering; minskning av slitgöra stöder ständig förbättring. SRE beskriver hur ett tekniskt team kan göra sådant arbete, medan ITIL beskriver de praktiker en organisation behöver i stort.

**Gränser för kopiering.** SRE utvecklades i en mycket stor ingenjörsorganisation med särskild skala och bemanning. Ett litet team kan inte, och behöver inte, kopiera dess struktur. Börja med några idéer: välj en användarcentrerad indikator, sätt ett mål och skriv ned vad ni gör när budgeten är förbrukad.

**Hur linserna passar in.** SRE är till stor del ingenjörssidan av den agila linsen för levande tjänster. AI kan stödja triage av larm och incidentsammanfattningar, under mänsklig granskning. Automatisering är det främsta verktyget mot slitgöra. Analys levererar SLI:erna och data om slitgöra och incidenter.

## Bra arbetssätt

1. **Välj indikatorer som speglar användarens upplevelse.** Fråga vad en användare skulle kalla "fungerar": sidor som laddas, betalningar som slutförs, filer som anländer. Mät det, inte processoranvändning.
2. **Sätt ett mål tillsammans med dem som är beroende av tjänsten.** Kom överens om en siffra som motsvarar verkligt behov, nedskriven med period och hur den mäts. Se över den när behoven ändras.
3. **Använd en felbudget för att fatta beslut.** Skriv ned vad som händer när budgeten nästan är förbrukad, till exempel att riskfyllda ändringar fryses, och vem som beslutar. Kom överens om detta före första gången det spelar roll.
4. **Håll målen strängare än avtalen.** Sätt ert interna mål så att ni märker problem innan ni bryter ett avtal. Se ämne 3.7 — Hantering av servicenivåer.
5. **Räkna och begränsa slitgöra.** Följ hur mycket tid som går åt till upprepat manuellt arbete och sätt en gräns. Lägg resten på att ta bort de största källorna till slitgöra.
6. **Larma på symptom och håll larm åtgärdsbara.** Varje larm ska säga vad som är fel för användarna och vad man ska göra. Ta bort eller åtgärda larm som ingen agerar på.
7. **Dela jour rättvist och hållbart.** Begränsa antalet larm per pass, ge utbildning och en dokumenterad eskaleringsväg och se regelbundet över belastningen. Se ämne 8.3 — Organisationsförändring och införande.
8. **Granska incidenter utan skuld och följ upp.** Skriv tidslinjen, de bidragande faktorerna och åtgärder med ägare och datum. Kontrollera att åtgärderna blir gjorda.
9. **Öva på fel under säkra förhållanden.** Kör övningsdagar och små kaosexperiment i testmiljö eller med begränsad exponering, med en tydlig stoppknapp.
10. **Börja smått.** Välj en viktig tjänst, definiera en eller två SLI:er och ett SLO, och lär av resultatet innan ni utvidgar.

## Frågor att diskutera i teamet

**Vad skulle våra användare säga att "fungerar" betyder för den här tjänsten, och mäter vi det?**
Det här är utgångspunkten för indikatorer. Team mäter ofta serverhälsa i stället. Fråga efter senaste gången användare var missnöjda medan våra instrumentpaneler var gröna. Fördjupa genom att välja en användarvänd indikator att mäta.

**Hur tillförlitlig behöver den här tjänsten verkligen vara, och vem bestämde det?**
Mål sätts ofta av vana, till exempel "fem nior". Fråga vad användare gör när tjänsten ligger nere och vad en timmes avbrott kostar. Räkna med oenighet. Fördjupa genom att skissa ett mål och kontrollera det med en kund.

**Vad ska vi göra när vi har förbrukat felbudgeten, och kommer vi faktiskt att göra det?**
Policyer som aldrig tillämpas lär människor att ignorera dem. Fråga vad som hände förra gången tillförlitligheten led och förändringen fortsatte. Fördjupa genom att komma överens om ett litet, specifikt svar och vem som beslutar.

**Vilka är de tre största källorna till slitgöra för vårt team, och vad skulle krävas för att ta bort var och en?**
Be människor lista upprepade uppgifter och uppskatta tid. Räkna med manuella omstarter, datarättningar och behörighetsbeställningar. Fördjupa genom att välja en punkt och uppskatta arbetet att automatisera den, jämfört med tiden som sparas under ett år.

**Hur många larm fick våra jourhavande förra månaden, och hur många krävde mänsklig åtgärd?**
Det här prövar larmkvalitet och arbetsbörda. Be om siffrorna; om ingen vet är det ett fynd. Fördjupa genom att välja det brusigaste larmet att åtgärda eller ta bort.

**Var kunde AI hjälpa med larm eller incidentsammanfattningar, och hur skulle vi märka dess misstag?**
AI kan gruppera larm, skriva utkast till sammanfattningar och föreslå steg i körhandböcker. Den kan också dölja en verklig signal eller hitta på en orsak. Fråga vem som äger den och hur dess utdata kontrolleras. Fördjupa genom att pröva ett sammanfattningsverktyg vid sidan av den mänskliga processen och jämföra.

## I praktiken: ett exempel på tjänstehantering

Ett nationalbiblioteks team för digitalt arkiv driver en söktjänst för forskare. Teamet på sex är i jour i rotation. Larm kommer på natten ungefär en gång i veckan, mest från ett diskutrymmeslarm på en batchserver som någon rensar för hand. Ledningen ber om "99,99 procents tillgänglighet" i årsplanen, fastän ingen har mätt nuvarande prestanda.

Teamledaren föreslår ett mindre experiment. Med två forskare definierar teamet en indikator: andelen sökförfrågningar som ger resultat inom två sekunder. De mäter den i en månad och finner 99,2 procent. Forskarna säger att de märker långsamhet först när sökningar tar över fem sekunder, vilket sker i ungefär 0,3 procent av förfrågningarna, mestadels under en nattlig ombyggnad av indexet. De kommer överens om ett mål på 99,5 procent inom två sekunder över 30 dagar och en felbudgetpolicy: om mer än 75 procent av budgeten förbrukas under en period pausar teamet icke-brådskande releaser och åtgärdar den största orsaken.

Teamet räknar också slitgöra. Att rensa disken för hand tar ungefär två timmar i månaden och väcker någon. De automatiserar rensningen, lägger till ett larm för snabb tillväxt i stället för full disk och repeterar en övningsdag för att återställa indexet från säkerhetskopia.

Det som förändras: nattliga larm minskar, och releaser pausas en gång under det första kvartalet när budgeten tar slut, med orsaken spårad till en långsam fråga. Det som förblir svårt: årsplanen säger fortfarande "99,99 procent", eftersom högre chefer inte gått med på att ersätta den; ombyggnaden av indexet beror på en lagringstjänst som drivs av en annan avdelning; och teamet är osäkert på om forskare i andra tidszoner upplever tjänsten på samma sätt. Ledaren tar planens formulering till nästa genomgång.

## Fyra perspektiv

### Produkt- och leveransteam

Dela målet och budgeten med driften. Ta med tillförlitlighetsarbete i backloggen, släpp progressivt och titta på effekten av ändringar. När budgeten är förbrukad, gå med i arbetet att minska orsaken.

### Tjänste- och driftsteam

Definiera indikatorerna tillsammans med användare, håll larm åtgärdsbara och lägg er tid på ingenjörsarbete som tar bort slitgöra. Ta med jourbelastning och incidentdata till planeringen. Skriv granskningar som leder till följda åtgärder.

### Ledning och styrning

Kom överens om mål som speglar verkligt behov och stå bakom budgetpolicyn när den kräver att förändring bromsas. Finansiera tid för att minska slitgöra och för tillförlitlighetsarbete. Be inte om perfektion.

### Kunder och användare

Du bör bli tillfrågad vad "fungerar" betyder för dig och få veta vad målet är. Rapportera problem tydligt och räkna med att få höra vad som gjordes. Om målet verkar fel för dina behov, säg det.

## Agilitet, AI, automatisering och analys

### Agilitet

SRE lägger till mätbara tillförlitlighetsmål till kontinuerlig leverans och förbättring. Håll intressenter involverade när mål sätts och se över dem regelbundet. Se upp: felbudgetar ersätter inte omdöme; vissa incidenter, som ett dataintrång, spelar roll oavsett budget.

### AI

AI kan gruppera relaterade larm, föreslå sannolika orsaker och skriva utkast till incidentsammanfattningar. Varje användning behöver en ägare och en människa som ansvarar för besluten, samt ett sätt att jämföra AI:ns förslag med det som faktiskt hände. Se upp: en AI som undertrycker larm för att minska brus kan dölja verkliga fel; testa den med kända incidenter. Se ämne 5.2 — AIOps.

### Automatisering

Automatisera slitgöra: omstarter, rensningar, rutinmässig behörighet och upprepad diagnos, med loggar, gränser och ett sätt att stänga av. Se upp: automatisering som agerar på produktion kan göra en incident värre; lägg till hastighetsgränser och ett manuellt stopp. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Använd SLI:er, måluppfyllelse för SLO, förbränning av felbudget, slitgörotimmar och larmkvalitet. Se upp: mål som valts för att de är lätta att nå, eller indikatorer som bortser från delar av användarupplevelsen, ger falsk trygghet; kontrollera dem mot användarklagomål. Se ämne 7.4 — Observerbarhet och telemetri och boken *Service Management Metrics*.

## Vanliga felmönster

- **Att kopiera siffror från andra.** "Fem nior" antas utan att behovet är känt. Besluta utifrån användarbehov och kostnad.
- **Indikatorer som missar användaren.** Instrumentpaneler är gröna och användare klagar. Mät det användare upplever.
- **En budgetpolicy som ingen följer.** Förändring fortsätter när budgeten är förbrukad. Kom överens om svaret i förväg och tillämpa det.
- **Larmbrus.** Jourhavande ignorerar larm. Gör varje larm åtgärdsbart.
- **Slitgöra som normalt.** Teamet får aldrig tid att automatisera. Räkna det och sätt en gräns.
- **SRE som omdöpning av drift.** Praktikerna antas inte. Definiera indikatorer, mål och budgetar.
- **Hjältekultur.** En person löser varje incident. Dela kunskap och körhandböcker.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Indikatorer och mål | Inga användarvända mått | Enbart infrastrukturmått | Användarcentrerade SLI:er och SLO:n för nyckeltjänster | Mål granskas med användare och kostnader | Mål samordnas över beroende tjänster |
| Felbudget | Ingen | Diskuterad | Skriven policy tillämpas | Policyresultat granskas | Budgetar delas över team och partner |
| Slitgöra | Omätt | Identifierad informellt | Räknad och begränsad | Minskas med följd automatisering | Minskas över tjänster med delade verktyg |
| Incidentlärande | Skuldbeläggning | Vissa granskningar | Skuldfria granskningar med följda åtgärder | Genomförda åtgärder och återfall mäts | Lärande delas i hela organisationen |

## Checklista

- [ ] Vi har minst en användarvänd indikator för varje viktig tjänst.
- [ ] Var och en har ett mål överenskommet med dem som är beroende av den.
- [ ] Vi skrev ned vad som händer när felbudgeten nästan är förbrukad.
- [ ] Våra interna mål är strängare än våra avtal.
- [ ] Vi följer slitgöra och har en gräns.
- [ ] Larm är åtgärdsbara, och brusiga åtgärdas eller tas bort.
- [ ] Jourbelastningen mäts och är hållbar.
- [ ] Incidentgranskningar är skuldfria och åtgärder följs till klart.

## AI-prompter

**Skriv ett utkast till kandidatindikatorer.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Beräkna förbränning av felbudget.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Rangordna kandidater till slitgöra.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## AI-färdigheter

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): använd för att relatera mål till avtal.
- [postmortem](../../../../skills/postmortem/SKILL.md): använd för att genomföra skuldfria granskningar med följda åtgärder.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): använd för att planera säkra felexperiment.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): använd för att prognostisera efterfrågan och gränser.

## Viktiga källor

- Betsy Beyer, Chris Jones, Jennifer Petoff och Niall Richard Murphy (red.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), fritt tillgänglig på sre.google: huvudkällan för praktikerna.
- Betsy Beyer med flera (red.), *The Site Reliability Workbook* (2018): praktisk vägledning för införande.
- Wikipedia, "Site reliability engineering": en neutral översikt.
- Wikipedia, "Service-level objective": bakgrund till termerna.

## Referenser

1. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Service level indicator — Wikipedia — https://en.wikipedia.org/wiki/Service_level_indicator
4. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
5. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
6. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
