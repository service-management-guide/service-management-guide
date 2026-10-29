# Övervakning och händelsehantering

**Övervakning och händelsehantering bevakar tjänster så att rätt person får veta om verkliga problem tidigt och ingen väcks av brus; de fungerar när larm beskriver vad användare känner, varje larm har en åtgärd och antalet händelser hålls tillräckligt lågt för att människor ska lita på dem.**

## Varför det här är viktigt

Det första tecknet på problem bör komma från era egna system, inte från en användare. Det är övervakningens löfte: en tjänsts hälsa observeras kontinuerligt och en avvikelse märks innan de flesta användare märker den. I praktiken upptäcker många team att användare fortfarande rapporterar problem först, medan teamet begravs i larm som ingen agerar på.

Skillnaden mellan de två upplevelserna är design. Ett övervakningsupplägg som larmar för varje överskridet tröskelvärde lär sina mottagare att ignorera larm. Wikipedia beskriver detta som larmtrötthet, ett fenomen som först studerades på sjukhus, där personal som utsätts för för många larm blir avtrubbad och missar de viktiga. Ett upplägg som mäter vad användare upplever, larmar bara när åtgärd behövs och ger den som svarar sammanhang förvandlar övervakning till ett system för tidig varning.

Övervakning har också en större roll än att fånga fel. Den ger data för kapacitetsplanering, för prestandaarbete, för att kontrollera att en release är frisk och för att avgöra vad som ska förbättras. Det här ämnet beskriver vokabulären och de praktiker som skiljer användbar övervakning från brus. Det hänger nära ihop med incidenthantering (ämne 3.2 — Incidenthantering), tillgänglighet och kapacitet (ämne 3.11 — Tillgänglighet, kapacitet och prestanda) och observerbarhet (ämne 7.4 — Observerbarhet och telemetri).

## Grundbegrepp

**Övervakning.** Att samla in, bearbeta och använda data om tillståndet hos tjänster och deras komponenter. Wikipedia beskriver systemövervakning och nätverksövervakning som praktiker för att bevaka system efter fel och prestanda. Övervakning besvarar kända frågor: är det uppe, är det snabbt, är det fullt?

**Händelse.** I ITIL 4 varje tillståndsförändring som har betydelse för förvaltningen av en tjänst eller ett annat konfigurationsobjekt. Händelser kan vara informativa, en varning eller ett undantag. Många händelser är normala och behöver ingen åtgärd; praktiken handlar om att avgöra vilka som gör det.

**Larm.** En avisering om att en händelse behöver uppmärksamhet. Inte varje händelse ska bli ett larm. Ett bra larm talar om för en människa att något behöver åtgärdas nu, vad som är fel och var man ska titta.

**Larmtrötthet.** Förlust av känslighet för larm när det finns för många eller för många är falska. Se Wikipedia-artikeln om larmtrötthet. Tecken är larm som kvitteras utan att läsas, tystade kanaler och incidenter som upptäcks sent. Det är ett designproblem, inte ett disciplinproblem.

**Mätvärden, loggar och spår.** Tre vanliga sorters telemetri. Mätvärden är numeriska mätningar över tid, som förfrågningsfrekvens eller minnesanvändning. Loggar är tidsstämplade register över händelser. Spår följer en förfrågan genom delarna av ett distribuerat system. Wikipedia-artiklarna om telemetri och loghantering beskriver allmänna idéer. Tillsammans stöder de både övervakning och den djupare undersökning som täcks under observerbarhet.

**Observerbarhet.** Förmågan att förstå ett systems inre tillstånd utifrån dess utdata. Wikipedia beskriver observerbarhet i programvara som en utvidgning av övervakning till frågor du inte förutsåg. De två överlappar: övervakning bevakar känt fel; observerbarhet hjälper dig undersöka okända. Se ämne 7.4 — Observerbarhet och telemetri.

**Symptom och orsaker.** Ett symptom är vad användare eller tjänsten upplever, som långsamma svar; en orsak är det som ligger bakom, som en full disk. Att larma på symptom talar om att användare är drabbade. Att larma på varje möjlig orsak skapar brus. Många team larmar på symptom och använder orsaksmått för att undersöka.

**Tröskelvärden och baslinjer.** Ett fast tröskelvärde, som "processor över 90 procent", är enkelt och ofta fel, eftersom normala nivåer varierar med tid och belastning. Baslinjer lär sig vad som är normalt för en tid på dygnet och larmar vid avvikelse. Wikipedia-artikeln om avvikelsedetektering beskriver idén och dess försiktighetsmått.

**Händelsekorrelation.** Att kombinera relaterade händelser för att hitta det underliggande problemet, så att hundra larm från en fallerande komponent blir ett. Wikipedia beskriver händelsekorrelation. Den kan vara regelbaserad eller använda maskininlärning. Se ämne 5.2 — AIOps.

**Syntetisk övervakning och övervakning av verkliga användare.** Syntetisk övervakning kör skriptade tester som efterliknar användare och kontrollerar regelbundet om en färd fungerar. Övervakning av verkliga användare registrerar faktiska användares upplevelse. Wikipedia beskriver båda. Syntetiska kontroller fångar avbrott under lugna tider; data från verkliga användare visar vad människor faktiskt upplever.

**Hantering av applikationsprestanda.** Verktyg och praktiker för att övervaka applikationers prestanda och tillgänglighet, inklusive svarstider och felfrekvens. Wikipedia beskriver fältet.

**Åtgärdbarhet.** Varje larm bör ha en definierad åtgärd, även om åtgärden är "kolla körhandboken". Om en person inte kan säga vad man ska göra bör larmet tas bort eller göras om till en rapport. Se ämne 3.9 — Kunskapshantering.

**Dirigering och eskalering.** Larm går till dem som kan agera, med hjälp av jourscheman, med eskalering om ingen kvittering sker. Se ämne 3.2 — Incidenthantering.

**Händelsehantering och ITIL.** ITIL 4 beskriver "övervakning och händelsehantering" som en praktik som systematiskt observerar tjänster och tjänstekomponenter och registrerar och rapporterar utvalda tillståndsförändringar. Betoningen ligger på att avgöra vilka händelser som spelar roll och vad man gör åt var och en.

**Hur linserna passar in.** Övervakning är återkopplingssidan av kontinuerlig leverans: den visar om en ändring är frisk. Agil praktik behandlar larmkvalitet som en backloggpunkt. AI kan minska brus, korrelera händelser och sammanfatta, under granskning. Automatisering kan agera på väl förstådda händelser. Analys visar trender och brusets kostnad.

## Bra arbetssätt

1. **Larma på det användare känner.** Börja med symptom, som misslyckade förfrågningar, långsamma sidor och misslyckade jobb. Använd orsaksmått för diagnos, inte för larm, om inte en orsak är en pålitlig tidig varning.
2. **Gör varje larm åtgärdsbart.** Skriv för varje larm vad det betyder, vem som agerar och vad de gör först. Länka det till en körhandbok. Ta bort larm som saknar åtgärd.
3. **Håll volymen låg.** Räkna larmen varje jourhavande får per pass och sätt en gräns. Gå igenom de brusigaste larmen varje vecka och åtgärda eller radera dem.
4. **Larma för brådska, ärende för resten.** Använd ett samtal eller larm bara när någon måste agera nu. Skicka andra signaler till en kö eller en rapport. Definiera skillnaden tydligt.
5. **Använd baslinjer med omsorg.** Där det normala ändras med tid och belastning, använd tidsmedvetna tröskelvärden eller avvikelsedetektering och granska dem. Lita inte på en modell du inte kan förklara för dem som svarar.
6. **Gruppera relaterade larm.** Korrelera händelser från samma orsak och undertryck efterföljande larm när ett beroende fallerar. Skicka ett meddelande med sammanhang.
7. **Kontrollera ur användarens synvinkel.** Lägg till syntetiska kontroller för nyckelfärder och använd data från verkliga användare för upplevelse. En server kan vara "uppe" medan användare inte kan logga in.
8. **Övervaka övervakningen.** Testa att larm når människor, att larmsystemet fungerar och att ett tyst fel i övervakningen själv upptäcks. Kör enstaka tester från början till slut.
9. **Granska efter incidenter.** Fråga vilket larm som utlöstes, vilket som borde ha gjort det och vilka som var brus. Justera i incidentgranskningen. Se ämne 3.3 — Problemhantering.
10. **Dela instrumentpaneler och sammanhang.** Ge utvecklare, drift och support tillgång till samma data och visa effekten av färska ändringar. Undvik instrumentpaneler som ingen använder.

## Frågor att diskutera i teamet

**Vilken var den senaste incidenten användare berättade om för oss före vår övervakning, och varför?**
Det här hittar blinda fläckar. Titta på vad användarna såg. Räkna med luckor i kanterna av färder. Fördjupa genom att välja en användarvänd kontroll att lägga till.

**Hur många larm fick våra jourhavande förra månaden, och hur många behövde åtgärd?**
Räkna tillsammans. Om ingen vet är det ett fynd. Räkna med en låg andel åtgärdsbara larm. Fördjupa genom att välja de fem brusigaste larmen och avgöra varje larms öde.

**Vilka larm ignorerar vi, och vad skulle hända om vi raderade dem?**
Att ignorera larm är ett tecken på trötthet. Fråga när vart och ett senast betydde något. Fördjupa genom att radera eller nedgradera ett, med ett granskningsdatum.

**Vem väcks för vad, och är alla överens om att det är värt att väcka dem?**
Kom överens om kriterierna för larm. Räkna med oenighet, vilket är användbart. Fördjupa genom att skriva en regel på ett stycke och pröva den i en månad.

**Hur skulle vi veta om själva övervakningen slutade fungera?**
Det här prövar metaövervakning. Räkna med tystnad eller ett vagt svar. Fördjupa genom att lägga till en hjärtslagskontroll eller ett dagligt testlarm och komma överens om vem som bevakar det.

**Vad skulle vi vilja att AI gör med våra larm, och vad måste förbli ett mänskligt beslut?**
AI kan gruppera larm, föreslå orsaker och sammanfatta sammanhang. Den kan också undertrycka ett verkligt larm. Fråga vilka åtgärder som behöver godkännande. Fördjupa genom att välja ett försök begränsat till gruppering och sammanfattning, med granskning av vad den dolde.

## I praktiken: ett exempel på tjänstehantering

En regional flygplats team för driftteknik övervakar bagagehantering, incheckningssystem och flyginformationsskärmar. Teamet på sex tar emot omkring 400 larm om dagen. Jourhavande säger att de kastar en blick på aviseringarna och för det mesta tystar dem. Förra månaden gick en trasig nätverksswitch i en terminal obemärkt i 40 minuter, tills passagerare klagade på att skärmarna var tomma.

Teamledaren tar en vecka för att titta på data. Av 400 dagliga larm kommer omkring 350 från 12 regler, till exempel diskvarningar på enheter som rensar sig själva och gränssnittsflaxande på en oanvänd port. Bara omkring 15 om dagen behöver mänsklig åtgärd. Ledaren och teamet kommer överens om tre förändringar. De raderar eller nedgraderar de 12 brusiga reglerna till en daglig rapport. De lägger till två syntetiska kontroller som laddar skärmsidan och incheckningsskärmen från varje terminal varje minut och larmar om någon fallerar två gånger i rad. Och de ställer in korrelation så att en trasig switch ger ett larm som namnger de berörda skärmarna, inte hundra.

Under nästa månad faller jourlarmen till omkring 20 om dagen, och nästa switchfel upptäcks inom tre minuter, med ett enda larm som listar de berörda terminalerna. Vid den veckovisa genomgången finner teamet ett larm som undertrycktes av korrelationen när det inte borde ha gjort det, och rättar regeln.

Det som förändras: människor litar på larmen och svarar. Det som förblir svårt: bagagehanteringsleverantörens utrustning skickar egna larm i ett format som teamet inte kan filtrera, så visst brus finns kvar; några nattskiftspersoner oroar sig för att den dagliga rapporten inte kommer att läsas; och ingen har ännu testat vad som händer om själva övervakningssystemet fallerar. Ledaren schemalägger en övning och lägger till ett dagligt testlarm.

## Fyra perspektiv

### Produkt- och leveransteam

Bygg in signalerna: meningsfulla mätvärden, loggar och spår samt hälsokontroller som speglar användarfärder. Skriv körhandboken tillsammans med larmet. Bevaka effekterna av varje release.

### Tjänste- och driftsteam

Äg larmkvaliteten. Gå igenom de brusigaste larmen varje vecka, skydda människor från överbelastning och kontrollera att varje larm har en åtgärd. Testa de vägar larm tar.

### Ledning och styrning

Be om antalet åtgärdsbara larm, inte antalet övervakare. Finansiera tid för att åtgärda brusiga larm. Behandla upprepade larm utanför kontorstid som en kostnad för personalen och för kvaliteten.

### Kunder och användare

Du bör få veta om problem från leverantören innan du märker dem och få veta vad som berörs. Rapportera vad du ser, med tider, och tala om för leverantören var övervakningen missade det.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla larm och instrumentpaneler som en del av produkten: förbättra dem i små steg efter varje incident och release. Gå igenom dem med dem som svarar. Se upp: att lägga till övervakare för varje ny funktion utan att ta bort gamla ökar bruset.

### AI

AI kan lära sig normala mönster, gruppera relaterade larm, föreslå sannolika orsaker och sammanfatta en larmstorm, med en ägare och mänskliga beslut. Testa den mot tidigare incidenter. Se upp: en modell som undertrycker larm kan dölja ett sällsynt men verkligt fel; mät vad den undertryckte och vad som missades. Se ämne 5.2 — AIOps.

### Automatisering

Automatisera svar på väl förstådda händelser, som att starta om en fallerande process, samt dirigering och berikning av larm, med gränser och loggar. Se upp: automatisk åtgärd som försöker om och om igen kan dölja ett fallerande system eller göra det värre; lägg till hastighetsgränser och eskalering. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Följ larmvolym, andelen som var åtgärdsbara, tid för att kvittera och incidenter som upptäckts av övervakning kontra av användare. Se upp: enbart larmantal kan manipuleras genom att höja tröskelvärden tills ingenting utlöses; kontrollera mot incidenter. Se ämne 7.4 — Observerbarhet och telemetri och boken *Service Management Metrics*.

## Vanliga felmönster

- **Att larma på allt.** Människor tystar kanalen. Larma på symptom och ta bort resten.
- **Larm utan åtgärd.** Handläggare vet inte vad de ska göra. Länka till en körhandbok eller radera larmet.
- **Enbart fasta tröskelvärden.** Falska larm vid upptagna tider. Använd tidsmedvetna eller baslinjemetoder med omsorg.
- **Användare upptäcker först.** Luckor i användarvända kontroller. Lägg till syntetisk övervakning och övervakning av verkliga användare.
- **Ingen metaövervakning.** Övervakningen fallerar tyst. Lägg till hjärtslag och övningar.
- **Instrumentpaneler i överflöd.** Ingen tittar på dem. Behåll några som stöder beslut.
- **Att lita på en ogenomskinlig modell.** Handläggare kan inte förklara vad den gjorde. Håll regler och logik granskningsbara.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Larmdesign | Varje tröskelvärde larmar | Några nyckellarm | Symptombaserade, åtgärdsbara larm med körhandböcker | Larmkvalitet mäts och granskas varje vecka | Larm anpassas och korreleras över tjänster |
| Täckning | Enbart servrar | Några applikationer | Användarfärder kontrolleras syntetiskt och med data från verkliga användare | Täckning granskas efter incidenter | Täckning enhetlig över beståndet och leverantörer |
| Brus | Överväldigande | Medvetenhet | Volym begränsad och granskad | Brus mäts och sjunker | Brus hanteras genom korrelation och automatisering med tillsyn |
| Respons | Manuell | Larm till ett team | Dirigerade med eskalering | Responstid följs | Säkra åtgärder automatiserade med mänsklig kontroll |

## Checklista

- [ ] Larm bygger på symptom användare känner.
- [ ] Varje larm har en definierad åtgärd och en länkad körhandbok.
- [ ] Antalet jourlarm per pass mäts och begränsas.
- [ ] Vi går igenom de brusigaste larmen varje vecka.
- [ ] Nyckelfärder har syntetiska kontroller.
- [ ] Relaterade larm korreleras.
- [ ] Vi testar att larm når människor och att fel i övervakningen upptäcks.
- [ ] AI eller automatisering som agerar på larm har en ägare, gränser och granskning.

## AI-prompter

**Rangordna brusiga larm.**

```text
Here is a list of alert rules with the number of times each fired last month and how many led to action: [paste].
Rank them by number of non-actionable firings, list the top ten, and give one question per rule to ask about whether to remove, change, or keep it. Do not recommend deleting any.
List what you are unsure of.
```

**Skriv ett utkast till larmets text.**

```text
The situation to alert on: [describe]. Who acts: [role]. The first checks they should make: [list].
Draft an alert title (under 80 characters) and a body (under 80 words) that says what is wrong, what users may be experiencing, and the first step, with a link placeholder for the runbook. Do not speculate about causes.
List what you are unsure of.
```

**Testa en korrelationsregel.**

```text
Here is a correlation rule: [describe]. Here is a list of recent events with timestamps and sources: [paste].
List which events the rule would group, which it would suppress, and any case where a real separate problem could be hidden. Do not propose a new rule.
List what you are unsure of.
```

## AI-färdigheter

- [runbook](../../../../skills/runbook/SKILL.md): använd för att skriva den åtgärd som hör till varje larm.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): använd för att undersöka ovanliga mönster i mätvärden.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): använd för att välja indikatorer för tidig varning.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): använd för att utforma hållbara jourupplägg.

## Viktiga källor

- Betsy Beyer med flera (red.), *Site Reliability Engineering* (2016), kapitlet om övervakning av distribuerade system, fritt tillgängligt på sre.google.
- Rob Ewaschuk, "My Philosophy on Alerting" (2013): en välkänd kort essä om symptombaserad larmning.
- Wikipedia, "Alarm fatigue" och "Observability (software)": översikter av nyckelidéer.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken övervakning och händelsehantering.

## Referenser

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
