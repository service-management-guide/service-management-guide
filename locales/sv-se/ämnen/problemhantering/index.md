# Problemhantering

**Problemhantering hittar och tar bort orsakerna till incidenter, registrerar kända fel med deras tillfälliga lösningar och driver skuldfria granskningar vars åtgärder hamnar i förbättringsbackloggen; det är så ett tjänsteteam slutar åtgärda samma fel om och om igen.**

## Varför det här är viktigt

Ett team som hanterar incidenter väl kan ändå fastna i en loop. Samma sorts fel återvänder varje månad, handläggarna tillämpar samma tillfälliga lösning och kostnaden ackumuleras: förlorad användartid, trötta jourhavande och en växande känsla av att ingenting någonsin blir bättre. Incidenthantering återställer tjänsten; den stoppar inte återfall.

Problemhantering är praktiken som gör det. Den frågar varför incidenter inträffar och vad som skulle förhindra dem, och den tilldelar svaren till någon som kan agera. Den för också register över vad som är känt om fel som ännu inte är åtgärdade, så att nästa handläggare inte börjar från noll.

För agila team passar praktiken naturligt in i ständig förbättring: fynd blir backloggpunkter som konkurrerar med funktioner på en enda lista. Den svaga punkten är oftast inte metoden utan prioriteringen. Att åtgärda orsaker förlorar ofta mot nytt arbete om inte någon gör kostnaden för återfall synlig. Det här ämnet förklarar praktiken, de främsta metoderna för att hitta orsaker och hur man hindrar fynd från att dö i en rapport. Det är en nära partner till incidenthantering (ämne 3.2 — Incidenthantering), kunskapshantering (ämne 3.9 — Kunskapshantering) och ständig förbättring (ämne 3.15 — Ständig förbättring).

## Grundbegrepp

**Problem.** I ITIL 4 en orsak, eller potentiell orsak, till en eller flera incidenter. Ett problem finns innan en åtgärd gör det; det kan vara känt för att orsaka incidenter eller bara misstänkt. Inte varje incident leder till en problempost.

**Känt fel.** Ett problem som analyserats men inte lösts, ofta med en dokumenterad tillfällig lösning. Wikipedia beskriver termen i ITIL-bruk. En post om känt fel låter servicedesk och handläggare snabbt hitta den tillfälliga lösningen och se status för den permanenta åtgärden.

**Tillfällig lösning.** Ett sätt att minska eller undvika påverkan utan att åtgärda orsaken. Tillfälliga lösningar gör livet uthärdligt och kan bli permanenta genom försummelse. Ett bra register anger den tillfälliga lösningen, vem som får tillämpa den och det förväntade datumet för en verklig åtgärd, så att det tillfälliga inte tyst blir permanent.

**Aktiviteterna.** Problemidentifiering, som hittar problem ur incidenttrender, övervakning och granskningar; problemkontroll, som analyserar orsaker och dokumenterar kända fel; och felkontroll, som hanterar kända fel tills de är lösta eller accepterade. ITIL beskriver dem som delar av en praktik snarare än separata processer.

**Proaktiv och reaktiv.** Reaktiv problemhantering svarar på incidenter som har inträffat. Proaktiv problemhantering söker svagheter innan de orsakar incidenter, till exempel genom att studera nära misstag, trender i larm och granskningar av ändringar.

**Rotorsaksanalys.** En familj av metoder för att hitta den underliggande orsaken till ett problem. Wikipedia beskriver rotorsaksanalys och listar vanliga tekniker. Kända är bland annat:

- *Fem varför*: fråga "varför" upprepade gånger tills du når en orsak du kan agera på.
- *Orsak–verkan-diagram (Ishikawa eller fiskben)*: lägg ut möjliga orsaker efter kategori för att vägleda diskussion.
- *Felträdsanalys*: arbeta bakåt från ett fel genom kombinationer av händelser som kunde orsaka det.
- *Paretoanalys*: använd räkning för att hitta de få orsaker som ligger bakom de flesta incidenterna.
- *Felmods- och effektanalys (FMEA)*: undersök varje del av ett system för hur den kunde fallera och vad som skulle följa.

**Försiktighet med orsaker.** Komplexa system har sällan en enda rotorsak. Schweizerostmodellen, beskriven på Wikipedia, ser fel som sammanfallandet av svagheter i flera försvarslager. Sökandet efter "den" rotorsaken tenderar att stanna vid den första bekväma förklaringen. Det är oftast mer användbart att namnge bidragande faktorer och avgöra vilka som är billigast och mest värdefulla att ändra.

**Skuldfri kultur och rättvis kultur.** Skuld stoppar lärande: människor döljer misstag och granskningar blir defensiva. En skuldfri granskning tittar på vad i systemet som gjorde handlingen rimlig vid tillfället. En rättvis kultur (just culture), beskriven på Wikipedia, skiljer ärligt misstag från hänsynslöst beteende och hanterar vartdera olika. Wikipedia-artiklarna om mänskliga fel och efterklokhetsbias förklarar varför "någon borde ha vetat" sällan är ett användbart fynd.

**Postmortem.** En skriven granskning efter en betydande incident, som täcker vad som hände, påverkan, tidslinje, bidragande faktorer, vad som gick bra och åtgärder. Se Wikipedia-artikeln om postmortemdokumentation. En bra postmortem läses och agerar man på; en dålig arkiveras.

**Att prioritera problem.** Det finns alltid fler problem än kapacitet. Rangordna dem efter påverkan, till exempel förlorade användartimmar eller kostnad, frekvens och hur billig åtgärden är. Visa kostnaden för återfall. Teknisk skuld, en term som beskrivs på Wikipedia, omfattar kända problem som skjutits upp; att följa den gör valet synligt.

**Koppling till ändring.** Att åtgärda ett problem kräver vanligen en ändring. Lägg fram den genom den normala ändringspraktiken och se till att problemposten stängs när åtgärden bekräftats. Se ämne 3.4 — Ändringsmöjliggörande.

**Koppling till kunskap.** Ett känt fel och dess tillfälliga lösning bör finnas i kunskapsartiklar som servicedesk och jourhavande kan hitta. Se ämne 3.9 — Kunskapshantering.

**Hur linserna passar in.** Problemhantering är där agil förbättring möter drift: fynd går till backloggen och konkurrerar öppet. AI kan gruppera incidenter, föreslå kandidatproblem och skriva utkast till postmortem, under granskning. Automatisering kan upptäcka återfall och tillämpa testade tillfälliga lösningar. Analys visar återfall och kostnad.

## Bra arbetssätt

1. **Leta efter mönster, inte bara enskilda incidenter.** Gå regelbundet igenom incidenter efter upprepningar per tjänst, komponent, ändring och tid. Öppna ett problem när ett mönster dyker upp.
2. **För en synlig problemlista.** Registrera varje problem med en ägare, de kopplade incidenterna, påverkan, den tillfälliga lösningen och planen. Gör listan lätt för handläggare att läsa.
3. **Dokumentera kända fel med tillfälliga lösningar.** Skriv dem så att en trött jourhavande kan följa dem och länka dem till servicedeskens kunskapsbas.
4. **Välj metod efter problemet.** Använd fem varför för enkla fall, ett fiskben för gruppdiskussion, felträd för komplexa fel och Paretodiagram för att hitta var man ska fokusera. Tillämpa inte tunga metoder på små frågor.
5. **Namnge bidragande faktorer, inte en syndabock.** Lista alla förhållanden som gjorde felet möjligt och bedöm vilka som är praktiska att ändra. Undvik fynd som slutar med "mänskligt fel".
6. **Håll skuldfria granskningar.** Bjud in de inblandade, ange reglerna och fokusera på systemet. Dela den skrivna granskningen brett.
7. **Gör åtgärder specifika och ägda.** Varje åtgärd har en namngiven person, ett datum och ett sätt att kontrollera att den är gjord. Lägg den på den backlogg som teamet faktiskt arbetar från.
8. **Visa kostnaden för att inte åtgärda.** Summera incidenttimmar, användarpåverkan och jourbelastning för varje problem och använd totalerna i prioriteringen. Presentera dem för dem som sätter prioriteringar.
9. **Slut loopen.** När en åtgärd släppts, bekräfta att incidenterna upphör, uppdatera kunskapsartikeln och stäng posten. Om problemet kvarstår, öppna det igen.
10. **Se över praktiken.** Kontrollera hur många problem som är öppna, hur länge de varar och om upprepade incidenter minskar. Avveckla problem som inte är värda att åtgärda, med ett dokumenterat beslut.

## Frågor att diskutera i teamet

**Vilka incidenter har inträffat tre eller fler gånger de senaste sex månaderna, och varför sker de fortfarande?**
Börja med verkliga exempel. Räkna med en blandning av "vi hann aldrig" och "vi känner inte orsaken". Fråga vad varje återfall kostade. Fördjupa genom att välja en att åtgärda och en att formellt acceptera.

**Hur avgör vi vilka problem som ska åtgärdas först, och vem avgör?**
Prioritering är ofta implicit. Du kan få höra att den mest högljudda vinner. Fråga vilka data vi använder. Fördjupa genom att komma överens om kriterier och visa kostnaden för de fem främsta problemen.

**När vi senast skrev "mänskligt fel" i en granskning, vad tillät systemet?**
Det här prövar skuldfri praktik. Ta en tidigare granskning och fråga vad som gjorde handlingen lätt att ta. Leta efter saknade skydd, oklar information eller tidspress. Fördjupa genom att skriva om fyndet i termer av systemet.

**Var finns kända fel och tillfälliga lösningar, och kan en trött person hitta dem klockan tre på natten?**
Kunskap spridd i chatttrådar är svår att hitta. Försök hitta en tillsammans. Räkna med fördröjning. Fördjupa genom att komma överens om ett ställe och en namngivningsvana.

**Vilka åtgärder från våra tre senaste granskningar är fortfarande öppna, och varför?**
Det här prövar uppföljning. Räkna med konkurrens med funktionsarbete. Fråga vem som avgör prioritet mellan de två. Fördjupa genom att komma överens om en andel av kapaciteten för problemåtgärder.

**Hur kunde AI hjälpa oss hitta mönster i incidenter, och hur skulle vi kontrollera att den hade rätt?**
AI kan gruppera incidenter och föreslå orsaker. Den kan också hitta falska mönster. Fråga vem som granskar och hur. Fördjupa genom att jämföra en AI-gruppering med en manuell på ett urval.

## I praktiken: ett exempel på tjänstehantering

Ett universitets team för lärplattformen har haft en återkommande incident var några veckor: studenter kan inte lämna in uppgifter nära en tidsfrist. Servicedesken tillämpar samma tillfälliga lösning, att starta om en köhanteringstjänst, vilket återställer inlämningarna inom 15 minuter. Varje gång stängs incidenten och glöms.

Tjänsteägaren föreslår att behandla den som ett problem. Hon samlar de nio senaste incidenterna och registrerar tidpunkten för var och en, belastningen vid tillfället och ändringarna som gjordes veckan före. Paretoanalys hjälper inte, eftersom det finns en orsakskategori, men en tidslinje visar att varje incident skedde inom en timme från en tidsfrist, när inlämningarna toppar. En fiskbensdiskussion med utvecklare och driftpersonal listar bidragande faktorer: köhanteringstjänsten har en fast minnesgräns; inget larm varnar innan den fylls; en nyligen gjord ändring ökade storleken på varje inlämning; och kapacitetsplanen inkluderade inte tidsfristtoppar.

Teamet namnger tre åtgärder: höj minnesgränsen och testa den nya toppen, lägg till ett larm vid 70 procent av kapaciteten och skriv en artikel om känt fel så att servicedesken kan se den tillfälliga lösningen och åtgärdens status. De lägger också till tidsfristkalendrar i kapacitetsgranskningen. Tjänsteägaren visar ledningen att problemet har kostat omkring 15 timmars störning för studenter och nio avbrott för jourhavande på tre månader, och arbetet schemaläggs före en mindre funktion.

Det som förändras: nästa tidsfrist passerar utan incident, och larmet utlöses en gång vid 72 procent, vilket ger tid att agera. Det som förblir svårt: gränsändringen var en nödlösning, eftersom köhanteringstjänsten behöver göras om för större filer, vilket konkurrerar med nästa terminsfärdplan; kostnadssiffrorna är uppskattningar från ärendetider; och granskningen tittade inte på om den tidigare storleksändringen testats ordentligt. Ägaren registrerar omgörningen som ett problem som fortfarande är öppet, med ett granskningsdatum.

## Fyra perspektiv

### Produkt- och leveransteam

Behandla problemåtgärder som en del av er backlogg. Åtgärda orsaker i designen, lägg till tester och larm som fångar kända fel och bidra till granskningar. Lämna inte problem till driften ensam.

### Tjänste- och driftsteam

Registrera mönster och kända fel och ta med data om kostnad och återfall till planeringen. Håll tillfälliga lösningar dokumenterade och möjliga att hitta. Driv granskningar som människor känner sig trygga att delta i.

### Ledning och styrning

Be att få se återkommande incidenter och deras kostnad och skydda kapacitet för att åtgärda dem. Leta efter rädsla för skuld i hur granskningar diskuteras. Följ åldern på öppna problem.

### Kunder och användare

Du bör få veta när ett återkommande problem har en orsak och en åtgärd. Om du rapporterar samma fråga två gånger, säg det. Fråga vad som har gjorts åt det.

## Agilitet, AI, automatisering och analys

### Agilitet

Lägg problemåtgärder på samma backlogg som funktioner och granska dem med intressenter, och leverera små åtgärder kontinuerligt. Se upp: om problemarbete alltid skjuts bakom funktioner växer backloggen och incidenterna fortsätter; kom överens om en skyddad andel kapacitet.

### AI

AI kan gruppera incidenter, koppla dem till ändringar, föreslå kandidatorsaker och skriva utkast till postmortem utifrån tidslinjer, med en person som kontrollerar. Utse en ägare för varje användning. Se upp: AI kan hitta på orsaker eller överdriva mönster; behandla dess förslag som hypoteser och testa dem mot data. Se ämne 5.2 — AIOps och ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Automatisera upptäckt av återfall, skapande av problemposter utifrån mönster och testade tillfälliga lösningar, med loggar och gränser. Se upp: en automatisk tillfällig lösning kan dölja ett förvärrat problem; följ hur ofta den utlöses och sätt ett tröskelvärde för eskalering. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Titta på återfallsfrekvens, ålder och kostnad för öppna problem och andelen incidenter kopplade till kända problem. Se upp: antal stängda problem kan manipuleras genom att stänga dem i förtid eller dela upp dem; kontrollera att incidenterna faktiskt minskar. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Att åtgärda incidenten, aldrig orsaken.** Den tillfälliga lösningen blir permanent. Öppna ett problem när ett mönster dyker upp.
- **Jakten på den enda rotorsaken.** Teamet stannar vid ett bekvämt svar. Lista bidragande faktorer och välj vilka som ska ändras.
- **Skuld.** Människor döljer fel. Håll skuldfria granskningar och följ systemändringarna.
- **Rapporter utan ägare.** Åtgärder listas och görs inte. Tilldela ägare, datum och granskning.
- **Ingen kostnad visas.** Problem förlorar mot funktioner. Summera kostnaden för återfall.
- **Kända fel svåra att hitta.** Handläggare börjar från noll. Håll ett sökbart ställe.
- **Att stänga utan att kontrollera.** Åtgärden fungerar inte. Bekräfta att incidenter upphör innan ni stänger.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Identifiering | Först efter stora incidenter | Vissa upprepade incidenter granskas | Regelbunden mönstergranskning öppnar problem | Trender och nära misstag används proaktivt | Problem hittas automatiskt och över tjänster |
| Analys | Gissningar | Informella metoder | Standardmetoder per problemtyp | Metodkvalitet granskas | Delad analys över team och partner |
| Kända fel | I huvuden | Några dokumenterade | Registrerade med tillfälliga lösningar på ett sökbart ställe | Användning och riktighet granskas | Kopplade till automatisering och kunskap över tjänster |
| Åtgärd och lärande | Skuld och förlorade åtgärder | Enstaka uppföljning | Ägda åtgärder på backloggen, skuldfria granskningar | Återfall och slutförda åtgärder mäts | Lärande delas och tillämpas i hela organisationen |

## Checklista

- [ ] Vi går regelbundet igenom incidenter efter upprepningar.
- [ ] Vi för en synlig problemlista med ägare och kostnader.
- [ ] Kända fel och tillfälliga lösningar är dokumenterade på ett sökbart ställe.
- [ ] Granskningar är skuldfria och namnger bidragande faktorer.
- [ ] Varje åtgärd har en ägare, ett datum och ett sätt att kontrollera slutförande.
- [ ] Problemarbete har skyddad kapacitet på backloggen.
- [ ] Vi bekräftar åtgärder innan vi stänger problem.
- [ ] AI som används för analys har en ägare och granskning av urval.

## AI-prompter

**Hitta upprepade incidenter.**

```text
Below is a list of incidents with dates, services, short descriptions, and resolutions, with names removed: [paste list].
Group those that look like repeats, state what they have in common, and list for each group two questions to investigate. Do not name causes. Mark groups you are unsure of.
List what you are unsure of.
```

**Gör en granskning till en lista över bidragande faktorer.**

```text
Here is a postmortem draft: [paste, names removed].
List contributing factors in categories (technical, process, information, people and workload, suppliers), quoting the text for each, and list what the draft does not say about each. Do not assign blame or add causes.
List what you are unsure of.
```

**Uppskatta kostnaden för återfall.**

```text
For problem [name] we have these records: incident count, duration of each, users affected, on-call interruptions: [paste data].
Calculate total hours, hours per incident, and per month, showing every step. State what data is missing for a fair cost estimate. Do not guess missing numbers.
List what you are unsure of.
```

## AI-färdigheter

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): använd för att analysera orsaker med en lämplig metod.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): använd för att ordna möjliga orsaker i en gruppdiskussion.
- [postmortem](../../../../skills/postmortem/SKILL.md): använd för att skriva och följa upp en skuldfri granskning.
- [cause-and-effect-diagram](../../../../skills/cause-and-effect-diagram/SKILL.md): använd för att kartlägga orsaker och effekter.
- [risks-actions-issues-decisions](../../../../skills/risks-actions-issues-decisions/SKILL.md): använd för att följa åtgärder till slutförande.

## Viktiga källor

- Sidney Dekker, *The Field Guide to Understanding "Human Error"*: om varför det misslyckas att skylla på individer och vad man ska titta på i stället.
- Betsy Beyer med flera (red.), *Site Reliability Engineering* (2016), kapitlet om postmortemkultur, fritt tillgängligt på sre.google.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken problemhantering.
- Wikipedia, "Root-cause analysis" och "Postmortem documentation": översikter av metoder och dokument.

## Referenser

1. Root-cause analysis — Wikipedia — https://en.wikipedia.org/wiki/Root-cause_analysis
2. Known error — Wikipedia — https://en.wikipedia.org/wiki/Known_error
3. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
4. Ishikawa diagram — Wikipedia — https://en.wikipedia.org/wiki/Ishikawa_diagram
5. Fault tree analysis — Wikipedia — https://en.wikipedia.org/wiki/Fault_tree_analysis
6. Failure mode and effects analysis — Wikipedia — https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
7. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
8. Swiss cheese model — Wikipedia — https://en.wikipedia.org/wiki/Swiss_cheese_model
9. Just culture — Wikipedia — https://en.wikipedia.org/wiki/Just_culture
10. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
11. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
