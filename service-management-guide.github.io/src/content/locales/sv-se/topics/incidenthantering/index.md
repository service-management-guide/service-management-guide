# Incidenthantering

**Incidenthantering finns för att återställa normal tjänst så snabbt som möjligt och begränsa skadan för användarna; den fungerar när allvarlighetsgrad är överenskommen i förväg, roller är tydliga, kommunikationen är jämn och granskningen efteråt tittar på systemet och inte på individer.**

## Varför det här är viktigt

En incident är ett oplanerat avbrott i en tjänst, eller en försämring av dess kvalitet. När en inträffar är de inblandade under press, informationen är ofullständig och klockan tickar. Beslut som fattas under de första tio minuterna avgör ofta om incidenten varar en timme eller sex.

Organisationer som hanterar incidenter väl förlitar sig inte på hjältar. De har kommit överens om hur de avgör hur allvarligt något är, vem som leder, vem som talar med användare, hur man eskalerar och när man ska sluta undersöka och tillämpa en tillfällig lösning. De har övat. Organisationer som hanterar incidenter dåligt improviserar varje gång, bråkar om prioriteringar under händelsen och upptäcker att den enda som kan systemet är på semester.

Det här ämnet beskriver incidenthantering som en praktik: definitioner, roller, allvarlighetsgrad, kommunikation och granskning. Det behandlar större incidenter med extra struktur och täcker hur AI och automatisering kan hjälpa och var de kan skada. Det står bredvid problemhantering (ämne 3.3 — Problemhantering), som söker de underliggande orsakerna, och övervakning (ämne 3.10 — Övervakning och händelsehantering), som ofta upptäcker incidenten.

## Grundbegrepp

**Incident.** I ITIL 4 ett oplanerat avbrott i en tjänst eller en försämring av en tjänsts kvalitet. Wikipedia-artikeln om incidenthantering beskriver praktiken inom it-tjänstehantering. En incident kan finnas innan någon användare märker den, till exempel när övervakningen visar en fallerande disk.

**Återställ tjänsten först.** Målet är att återställa tjänsten till det normala, inte att hitta rotorsaken. En tillfällig lösning som återställer tjänsten är ett bra resultat; rotorsaken är för problemhanteringen. Team som gräver efter orsaken medan tjänsten ligger nere förlänger avbrottet.

**Tillfällig lösning.** En lösning som minskar eller eliminerar en incidents påverkan utan att lösa dess orsak, till exempel att omdirigera trafik, starta om en komponent eller byta till en manuell process. Se ämne 3.3 — Problemhantering för hur kända fel och tillfälliga lösningar följs.

**Allvarlighetsgrad och prioritet.** Allvarlighetsgrad beskriver påverkan på användare och verksamhet, till exempel hur många som berörs och hur illa. Prioritet lägger till brådska, till exempel en tidsfrist. Många organisationer använder en liten skala, till exempel fyra nivåer, med en definition och ett förväntat svar för var och en. Definitioner bör använda observerbara fakta ("fler än 100 användare kan inte göra betalningar") snarare än känslor.

**Större incidenter.** En större incident har betydande påverkan och behöver ett snabbare, mer samordnat svar än standardprocessen. Organisationer definierar egna tröskelvärden. Större incidenter har typiskt en namngiven incidentledare, en kommunikationsansvarig och en regelbunden takt av uppdateringar.

**Roller.** En incidentledare samordnar och fattar beslut; tekniska handläggare diagnostiserar och åtgärdar; en kommunikationsansvarig håller intressenter och användare informerade; en protokollförare registrerar vad som görs och när. En person kan ha flera roller i en liten incident. Incident Command System, som används i krishantering och beskrivs på Wikipedia, är en påverkan på den struktur som används i många tekniska organisationer.

**Eskalering.** Att ta in fler färdigheter eller mer befogenhet. Funktionell eskalering flyttar incidenten till människor med rätt expertis. Hierarkisk eskalering tar in chefer som kan besluta eller tillhandahålla resurser. Tydliga kriterier, som "inga framsteg efter 30 minuter vid allvarlighetsgrad ett", gör eskalering rutin snarare än ett tecken på misslyckande.

**Jour.** Arrangemang för att människor ska vara nåbara utanför ordinarie arbetstid. God jourpraktik inkluderar gränser för belastning, en tydlig lista, körhandböcker och ersättning. Se ämne 2.6 — Site reliability engineering. Larmtrötthet, ett fenomen som beskrivs på Wikipedia, får människor att ignorera larm som är för täta eller inte åtgärdsbara.

**Kommunikation.** Användare och intressenter behöver veta vad som berörs, vad ni gör och när de hör av er härnäst. Täta, enkla uppdateringar minskar upprepade kontakter och oro. Wikipedia-artikeln om krishantering och krisinformation ger allmänna principer. En statussida, en intern kanal och direkta meddelanden till nyckelkunder betjänar olika målgrupper.

**Incidentregister.** Ett ärende eller en post med starttid, symptom, åtgärder, beslut och sluttid. Registret stöder granskningen och ger data för förbättring. En tidslinje som förs under incidenten är mer exakt än en som rekonstrueras efteråt.

**Granskning.** Efter en betydande incident, håll en skuldfri granskning som tittar på vad som hände, vad som hjälpte, vad som bromsade responsen och vad som ska ändras. Fynden går till problemhantering och förbättringsbackloggen. Se ämne 3.3 — Problemhantering.

**Mått.** Tid för att upptäcka, tid för att svara och tid för att återställa, ofta sammanfattade som genomsnittlig återställningstid (MTTR) i Wikipedias beskrivning, är vanliga. Medelvärden döljer stora skillnader mellan incidenter, och de kan manipuleras genom hur start- och sluttider sätts. Använd fördelningar och titta på enskilda incidenter. Se boken *Service Management Metrics*.

**Hur linserna passar in.** Agil praktik behandlar varje granskning som återkoppling och håller förbättring liten och kontinuerlig. AI kan sammanfatta tidslinjer, föreslå liknande tidigare incidenter och skriva utkast till uppdateringar, med en ansvarig person. Automatisering utför säkra, väl förstådda steg som omstarter och redundansväxling. Analys visar mönster av återkommande.

## Bra arbetssätt

1. **Definiera allvarlighetsgrader med observerbara fakta.** Skriv vad varje nivå betyder, vem som underrättas och hur snabbt. Se över definitionerna efter incidenter som var svåra att klassificera.
2. **Namnge roller och öva på dem.** Kom överens om vem som leder, vem som kommunicerar och vem som för protokoll. Repetera med övningar, så att första gången inte är en verklig kris. Se ämne 3.12 — Hantering av tjänstekontinuitet.
3. **Återställ först, undersök sedan.** Sätt en regel att en tillfällig lösning tillämpas när en finns och är säker. Registrera incidenten för problemhantering och gå vidare.
4. **För en levande tidslinje.** Registrera åtgärder och beslut med tider medan de sker, på ett delat ställe. Det förebygger diskussioner och snabbar upp granskningen.
5. **Eskalera tidigt och utan skuld.** Definiera utlösare för eskalering och behandla användningen av dem som god praxis. Människor som eskalerar sent fruktar kritik, så ta bort den.
6. **Kommunicera i en rytm.** Kom överens om ett uppdateringsintervall för varje allvarlighetsgrad och skicka uppdateringar även när det inte finns något nytt, och säg det. Använd klarspråk.
7. **Ge handläggare vad de behöver.** Underhåll körhandböcker, åtkomst, instrumentpaneler och kontaktlistor. Testa åtkomsten före natten den behövs.
8. **Skydda människor.** Begränsa jourbelastning, lämna över långa incidenter och se till att handläggare vilar. Trötta människor fattar sämre beslut.
9. **Granska utan skuld och följ upp.** Skriv en kort rapport med tidslinje, bidragande faktorer och åtgärder med ägare och datum. Följ åtgärder till slutförande. Se ämne 3.3 — Problemhantering.
10. **För tillbaka lärdomarna.** Uppdatera körhandböcker, övervakning och design. Dela lärande med andra team och kontrollera att upprepade incidenter minskar.

## Frågor att diskutera i teamet

**Hur avgör vi hur allvarlig en incident är, och har det någonsin diskuterats under en incident?**
Oenighet om allvarlighetsgrad slösar tid. Be om färska exempel. Du kan få höra att svaret beror på vem som frågar. Fördjupa genom att skriva om en nivås definition med observerbara fakta.

**Vem leder en incident klockan tre på natten, och hur vet hen att hen är ledaren?**
Oklart ledarskap är en vanlig orsak till förvirring. Fråga vem som fattade beslut under den senaste större incidenten. Räkna med olika svar. Fördjupa genom att komma överens om hur ledaren utses och tillkännages.

**Vad hör användare från oss under en incident, och hur ofta?**
Jämför vad användare hörde under den senaste incidenten med vad de ville. Räkna med långa tystnader. Fördjupa genom att välja ett uppdateringsintervall och en kanal och skriva en mall.

**Vad har vi eskalerat sent, och varför?**
Det här utforskar rädsla och vana. Människor kan dröja av rädsla för att verka inkompetenta eller för att väcka någon. Fråga vad som skulle göra eskalering lättare. Fördjupa genom att skriva en regel som "eskalera om det inte finns några framsteg inom 30 minuter".

**Vad säger vår senaste incidentgranskning att vi ska ändra, och vad ändrades faktiskt?**
Det här prövar uppföljningen. Be om åtgärder och deras status. Räkna med att några varit öppna i månader. Fördjupa genom att tilldela ägare och datum och granska dem om en månad.

**Var kunde AI hjälpa under en incident, och var måste en människa avgöra?**
AI kan sammanfatta tidslinjen, söka bland tidigare incidenter och skriva utkast till uppdateringar. Den kan inte vara ansvarig. Fråga vilka åtgärder en AI får vidta utan godkännande, om några. Fördjupa genom att välja en lågriskig användning och komma överens om hur dess utdata kontrolleras.

## I praktiken: ett exempel på tjänstehantering

En nationell apotekskedjas digitala team driver en app som låter kunder beställa upprepade recept. En fredagskväll börjar beställningar misslyckas för omkring 30 procent av användarna. Jourhavande ingenjör ser fel från en databas och ringer incidentledaren enligt listan. Ledaren förklarar en incident med allvarlighetsgrad två eftersom användare inte kan slutföra en kärnuppgift, utser en kommunikationsansvarig och startar en tidslinje.

Inom 15 minuter misstänker teamet en databasändring som driftsattes samma eftermiddag. Ledaren frågar om det är säkert att backa den; ingenjören som gjorde ändringen bekräftar att det är det. Teamet backar, och beställningarna återhämtar sig inom fem minuter. Total tid från första larm till återställning är 47 minuter. Kommunikationsansvarig hade publicerat på statussidan efter 20 minuter, igen efter 35 och en slutlig uppdatering vid återställning och hade sagt till kundtjänsten vad de skulle säga.

Veckan efter håller teamet en skuldfri granskning. Tidslinjen visar att upptäckten berodde på ett användarklagomål, eftersom inget larm täckte misslyckade beställningar; ändringen hade granskats men testmiljön saknade realistiska data; och den första uppdateringen var långsammare än det överenskomna intervallet eftersom kommunikationsansvarig var osäker på vad statussidan fick säga. Teamet lägger till ett larm på andelen misslyckade beställningar, förbättrar testdata och skriver en mall för statussidan.

Det som förändras: nästa liknande incident upptäcks av larmet inom tre minuter. Det som förblir svårt: testdata innehåller ingen verklig patientinformation, av goda skäl, vilket begränsar hur realistiska de kan vara; listan har fortfarande få ingenjörer som kan backa databasen säkert; och granskningens åtgärdslista har tolv punkter och teamet har tid för fem. De väljer efter risk och lägger resten på backloggen med datum.

## Fyra perspektiv

### Produkt- och leveransteam

Bygg för återhämtning: gör ändringar reversibla, lägg till larm och loggar som visar användarpåverkan och skriv körhandböcker allteftersom. Delta i granskningar och åtgärda orsaker i designen.

### Tjänste- och driftsteam

Känn din roll, öva och för tidslinjen. Eskalera tidigt, kommunicera jämnt och ta hand om varandra. Ta med det ni lär er till granskningar och använd det för att förbättra körhandböcker och övervakning.

### Ledning och styrning

Kom överens om definitioner av allvarlighetsgrad och förväntningar i förväg och motstå att tilldela skuld. Under en större incident, stöd ledaren och be om uppdateringar bara genom den överenskomna kanalen. Finansiera uppföljningsåtgärderna.

### Kunder och användare

Du bör få veta snabbt vad som berörs, vad som görs och när du hör av oss härnäst. Rapportera vad du ser, med detaljer. Efter en större incident, räkna med en tydlig redogörelse för vad som ändrades.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla incidentgranskningar som den korta återkopplingsloop som driver förbättring: små ändringar av körhandböcker, larm och design, gjorda snabbt med intressenter informerade. Se upp: en lång åtgärdslista som ingen slutför är sämre än en kort som blir gjord.

### AI

AI kan skriva utkast till uppdateringar, sammanfatta tidslinjen och chatten och hitta liknande tidigare incidenter. Incidentledaren förblir ansvarig, och en AI-utdata är ett förslag. Se upp: AI kan hitta på orsaker eller tider, och en automatiskt skriven uppdatering som skickas utan granskning kan vilseleda kunder; kontrollera alltid före utskick. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Automatisera säkra, repeterbara responssteg, som att samla in diagnostikdata, larma rätt personer och utföra en granskad omstart, med loggar och gränser. Se upp: automatisering som agerar under en incident kan göra den värre; behåll ett manuellt stopp och testa i en säker miljö. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Titta på tid för att upptäcka, svara och återställa, på fördelningen av vardera och på upprepade incidenter. Se upp: medelvärden döljer de värsta incidenterna, definitionerna av start och slut varierar, och mått som används för att bedöma team inbjuder till manipulation av tidsstämplar; studera också enskilda incidenter. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Allvarlighetsgrad diskuteras under incidenten.** Tid går förlorad. Skriv definitioner med observerbara fakta.
- **Ingen tydlig ledare.** Alla agerar och ingen beslutar. Utse ledaren och tillkännage det.
- **Undersökning medan tjänsten ligger nere.** Återställningen försenas. Tillämpa först en säker tillfällig lösning.
- **Tystnad mot användare.** Oro och upprepade kontakter ökar. Uppdatera i en rytm.
- **Skuld i granskningar.** Människor döljer misstag. Håll skuldfria granskningar och följ åtgärder.
- **Hjältberoende.** En person åtgärdar allt. Dela kunskap och skriv körhandböcker.
- **Automatiska åtgärder utan gränser.** En automatisering förvärrar en incident. Lägg till gränser, loggar och ett manuellt stopp.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Allvarlighetsgrad och process | Ad hoc | Informella nivåer | Definierade nivåer med förväntade svar | Nivåer granskas med data | Processen anpassas över tjänster och partner |
| Roller och övning | Improviserat | Vissa roller namngivna | Roller definierade och repeterade | Övningar mäts och förbättras | Övningar delas med leverantörer och kunder |
| Kommunikation | Oregelbunden | Uppdateringar när man kommer ihåg | Uppdateringsrytm och kanaler per allvarlighetsgrad | Kommunikationens kvalitet granskas | Enhetlig över team, kunder och partner |
| Lärande | Skuldbeläggning | Enstaka granskningar | Skuldfria granskningar med följda åtgärder | Återfall mäts och minskas | Lärande delas i hela organisationen |

## Checklista

- [ ] Allvarlighetsgrader är definierade med observerbara fakta och förväntade svar.
- [ ] Incidentroller är namngivna och repeterade.
- [ ] Utlösare för eskalering är nedskrivna.
- [ ] En levande tidslinje förs för betydande incidenter.
- [ ] Uppdateringsintervall och kanaler är satta för varje allvarlighetsgrad.
- [ ] Jourbelastningen är begränsad och övervakas.
- [ ] Granskningar är skuldfria och åtgärder följs till slutförande.
- [ ] AI och automatisering som används i incidenter har en ägare, gränser och granskning.

## AI-prompter

**Sammanfatta en incidenttidslinje för granskning.**

```text
Here are the chat messages and notes from an incident, with times and names removed: [paste text].
Produce a timeline of key events, a list of decisions and who made them (by role only), what helped, what slowed us down, and questions for the review. Use only the text and mark anything uncertain.
List what you are unsure of.
```

**Skriv ett utkast till en statusuppdatering för granskning.**

```text
Facts we know: [paste confirmed facts]. Facts we do not know: [list]. Next update in: [time].
Draft a status update of under 80 words in plain language that states what is affected, what we are doing, and when the next update is due. Do not speculate about causes or give an estimate for recovery that is not in the facts.
List what you are unsure of.
```

**Kontrollera definitioner av allvarlighetsgrad.**

```text
Our severity definitions: [paste]. Here are three past incidents with their impact: [paste].
For each incident, say which level the definitions suggest, quote the words you used, and note where the definitions were ambiguous. Do not change the definitions.
List what you are unsure of.
```

## AI-färdigheter

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): använd för att definiera roller, allvarlighetsgrad och steg för att svara på incidenter.
- [postmortem](../../../../skills/postmortem/SKILL.md): använd för att genomföra en skuldfri granskning med följda åtgärder.
- [runbook](../../../../skills/runbook/SKILL.md): använd för att fånga responssteg för kända fel.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): använd för att planera uppdateringar till användare och intressenter.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): använd för att utforma ett hållbart jourupplägg.

## Viktiga källor

- Betsy Beyer med flera (red.), *Site Reliability Engineering* (2016), kapitlen om incidentrespons och postmortem, fritt tillgängliga på sre.google: praktisk vägledning från en stor operatör.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken incidenthantering.
- Wikipedia, "Incident management": en översikt av praktiken.
- Wikipedia, "Incident Command System": den krishanteringsmodell som påverkat tekniska incidentroller.

## Referenser

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
