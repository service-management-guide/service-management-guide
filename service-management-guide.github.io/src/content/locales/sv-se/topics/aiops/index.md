# AIOps

**AIOps tillämpar maskininlärning på driftdata för att minska larmbrus, hitta avvikelser, korrelera händelser och föreslå orsaker; det lönar sig när det testas mot tidigare incidenter, hålls förklarbart för dem som svarar och behandlas som en assistent åt jourhavande, inte en ersättning för omdöme.**

## Varför det här är viktigt

Driftteam drunknar i data. En modern tjänst avger miljontals loggrader, tusentals mätvärden och hundratals larm varje dag. Människor kan inte läsa allt, så de sätter tröskelvärden och regler för att avgöra vad de ska titta på. Reglerna växer, samverkar och förfaller. De flesta larm visar sig vara brus, och vissa verkliga problem gömmer sig bland dem.

AIOps, en term som analysföretaget Gartner myntade i mitten av 2010-talet utifrån "algorithmic IT operations" och som nu allmänt läses som "AI för it-drift", lovar att hjälpa. Det använder maskininlärning för att lära sig vad som är normalt, för att märka när något inte är det, för att gruppera relaterade larm till en händelse och för att föreslå var orsaken kan ligga. Wikipedia beskriver AIOps som tillämpningen av artificiell intelligens för att förbättra it-drift. Leverantörer presenterar det i starka ordalag. Utövare rapporterar verkliga vinster i vissa användningar, som brusreducering, och besvikelse i andra, som helautomatisk diagnos.

För tjänstehantering är frågan praktisk: vilka delar av AIOps ger tillförlitligt värde, hur kontrollerar man dem och hur håller man människor i kontroll? Det här ämnet beskriver huvudteknikerna, deras typiska felmönster och en förnuftig väg till införande. Det bygger på övervakning (ämne 3.10 — Övervakning och händelsehantering) och observerbarhet (ämne 7.4 — Observerbarhet och telemetri), och det överlappar med incidenthantering (ämne 3.2 — Incidenthantering) och runbook-automatisering (ämne 6.6 — Runbook-automatisering och automatisk åtgärd).

## Grundbegrepp

**AIOps.** Användningen av AI-tekniker, främst maskininlärning och statistik, på driftdata för att stödja uppgifter som avvikelsedetektering, händelsekorrelation, rotorsaksförslag och förutsägelse. Det är en uppsättning tekniker, inte en enskild produkt, och förmågor varierar mycket.

**Avvikelsedetektering.** Att hitta datapunkter eller mönster som skiljer sig från det förväntade. Wikipedia beskriver avvikelsedetektering och dess metoder. Inom drift kan en modell lära sig det normala dagliga och veckovisa mönstret för förfrågningar och flagga avvikelser. Normalt är inte konstant: säsongsvariation, beskriven på Wikipedia, innebär att en måndagsmorgon ser annorlunda ut än söndagskvällen. Bra detektorer tar hänsyn till det.

**Tidsserier.** Data registrerade över tid, som svarstider eller felantal. Wikipedia beskriver tidsserieanalys. De flesta driftmätvärden är tidsserier, och AIOps-tekniker bygger på metoder för att modellera och prognostisera dem.

**Händelsekorrelation och brusreducering.** Att kombinera larm som härrör från en orsak till en enda incident och undertrycka dubbletter och känt brus. Wikipedia beskriver händelsekorrelation. Klusteringstekniker, beskrivna på Wikipedia som klusteranalys, grupperar poster efter likhet. En bra korrelation gör tvåhundra larm till ett, med den sannolika källan namngiven.

**Rotorsaksförslag.** Att använda topologi, ändringsregister, loggar och tidigare incidenter för att föreslå var ett fel sannolikt ligger. Förslag är hypoteser. De är mest användbara när de pekar på en färsk ändring eller ett beroende och minst pålitliga när orsaken är ny.

**Prediktiv drift.** Att prognostisera problem innan de inträffar, till exempel en disk som kommer att fyllas om tre dagar eller en komponent som sannolikt fallerar. Wikipedia beskriver prediktivt underhåll och prediktiv analys. Förutsägelser är sannolikheter, och var och en har en kostnad för falska larm och för missar. Se ämne 7.5 — Prediktiv analys och prognoser.

**Logganalys.** Att använda tekniker från språkteknologi och statistik för att hitta mönster i loggar, som nya meddelandetyper eller ändringar i frekvens. Wikipedia beskriver logganalys.

**Generativ AI i drift.** Stora språkmodeller kan sammanfatta incidenttidslinjer, översätta larm till klarspråk, skriva utkast till körhandboksteg och besvara frågor om miljön. De tillför flexibilitet och risken för påhittat innehåll. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

**Precision, täckning och felkostnader.** En detektor kan ha fel på två sätt: den kan ge ett falskt larm (falskt positivt) eller missa ett verkligt problem (falskt negativt). Wikipedia beskriver båda typerna av fel och måtten precision och täckning (recall). Att justera för att minska det ena ökar det andra. Rätt balans beror på kostnaden för vartdera, och olika tjänster förtjänar olika inställningar.

**Konceptdrift.** Modeller lär sig av tidigare data, och världen förändras: nya releaser, nya trafikmönster, ny infrastruktur. Wikipedia beskriver konceptdrift, där de statistiska egenskaperna hos det som förutsägs ändras över tid. En modell som var träffsäker i januari kan vara vilseledande i juni om den inte övervakas och tränas om.

**Förklarbarhet.** Handläggare litar mer på ett förslag, och rättar det mer användbart, om de kan se varför det gjordes: vilka mätvärden som rörde sig, vilka händelser som grupperades, vilken ändring som föregick förskjutningen. Wikipedia beskriver förklarbar artificiell intelligens och problemet med svarta lådor. För drift, föredra angreppssätt som visar sina belägg.

**Datakvalitet och täckning.** AIOps behöver bra data: fullständiga, konsekventa, korrekt tidsstämplade och märkta med tjänster och ägare. Saknade eller inkonsekventa data ger missade signaler och falska kopplingar. Se ämne 4.4 — Konfigurationshantering och ämne 7.2 — Datagrunder och datastyrning.

**Autonoma och självläkande idéer.** Det länge närda målet med system som upptäcker och åtgärdar sina egna fel, beskrivet på Wikipedia som autonom databehandling (autonomic computing). Delar är praktiska i dag, som att starta om en fallerad process. Bred självläkning är mycket svårare. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

**Mänsklig tillsyn.** Handläggaren förblir ansvarig. AIOps-utdata är indata till ett mänskligt beslut, om inte en snävt definierad åtgärd har testats och godkänts för automatisk körning. Se ämne 5.5 — Agentisk AI och mänsklig tillsyn.

**Hur linserna passar in.** AIOps kombinerar AI och analys för driftdelen av tjänstehantering. Agil praktik föreslår små försök på en tjänst, med återkoppling från jourhavande. Automatisering förbrukar AIOps-utdata, till exempel för att öppna ett ärende eller köra en säker kontroll.

## Bra arbetssätt

1. **Börja med en tydlig smärtpunkt.** Välj ett problem, till exempel för många larm på en enskild tjänst, och ett mått, till exempel antal larm per pass. Pröva AIOps där.
2. **Få ordning på datat först.** Kontrollera att loggar och mätvärden är fullständiga, tidsstämplar konsekventa och tjänster och ägare märkta. Åtgärda luckor innan ni skyller på modellen.
3. **Testa mot tidigare incidenter.** Spela upp historiska data genom verktyget och fråga vad det skulle ha flaggat, grupperat eller föreslagit. Räkna falska larm och missar.
4. **Jämför med enkla metoder.** Jämför mot fasta tröskelvärden och grundläggande regler. Om en enkel metod gör lika bra ifrån sig, använd den. Betala inte för komplexitet som inte tillför något.
5. **Föredra förklarbara utdata.** Välj verktyg som visar belägg bakom ett larm eller en föreslagen orsak. Kräv att handläggare kan se och ifrågasätta det.
6. **Börja i rådgivande läge.** Låt verktyget föreslå och låt människor besluta. Granska förslagen mot vad som faktiskt hände under några veckor innan ni ger det någon automatisk åtgärd.
7. **Begränsa automatiska åtgärder.** Tillåt bara snäva, väl förstådda, reversibla åtgärder, med hastighetsgränser, loggar och ett manuellt stopp. Granska varje åtgärdsklass innan den aktiveras.
8. **Övervaka modellerna.** Följ falska larm, missar och andelen användbara förslag. Håll utkik efter drift efter större releaser och träna om eller konfigurera om vid behov.
9. **Håll jourhavande involverade.** Be dem betygsätta förslag i verktyget och gå igenom deras återkoppling varje vecka. De är de bästa bedömarna av användbarhet.
10. **Registrera vad som undertryckts.** För en logg över larm systemet dolde eller slog ihop och gå igenom urval regelbundet. Undertryckning är där de värsta felen uppstår.

## Frågor att diskutera i teamet

**Vilka larm slösar mest av våra jourhavandes tid, och skulle bättre regler åtgärda dem före någon AI?**
Börja med datat. Många brusproblem ger vika för enkla åtgärder. Räkna med att några få regler står för det mesta av bruset. Fördjupa genom att åtgärda dem och sedan bedöma på nytt vad AI kunde tillföra.

**Om verktyget hade körts under våra tre senaste incidenter, vad hade det sagt oss, och hade det hjälpt?**
Spela upp eller simulera. Räkna med blandade resultat. Fråga vad det skulle ha missat. Fördjupa genom att välja den incidenttyp där verktyget verkar mest lovande.

**Hur skulle vi veta att verktyget undertryckte ett verkligt larm?**
Det här prövar tillsyn. Räkna med "det skulle vi inte". Fördjupa genom att komma överens om en logg över undertryckta händelser, ett regelbundet stickprov och en regel för vad som aldrig undertrycks.

**Vem ansvarar när en automatisk åtgärd går fel, och vilka är dess gränser?**
Namnge en ägare och lista tillåtna åtgärder. Räkna med vaga svar. Fördjupa genom att skriva en kort lista över åtgärder som tillåts utan godkännande, var och en med en återställning.

**Hur upptäcker vi att modellen har glidit efter en större release eller en förändring i trafik?**
Be om planen. Räkna med ingen. Fördjupa genom att välja indikatorer, som andelen falska larm, och ett granskningsdatum efter varje större release.

**Vad skulle jourhavande vilja ha av det här verktyget, och vad skulle få dem att sluta lita på det?**
Fråga dem direkt. Räkna med praktiska svar om sammanhang och falska larm. Fördjupa genom att göra svaren till godkännandekriterier för försöket.

## I praktiken: ett exempel på tjänstehantering

En nationell meteorologisk tjänsts driftteam driver prognosflöden och ett publikt API på en blandad miljö av lokala system och moln. Jourhavande får omkring 300 larm om dagen, de flesta från några få brusiga källor. En leverantör föreslår en AIOps-plattform med automatisk korrelation och rotorsaksförslag.

Driftchefen går med på ett pilotförsök med villkor. För det första städar teamet upp de 12 brusigaste reglerna, vilket tar bort omkring hälften av volymen. För det andra spelar det upp sex månaders data, inklusive 14 incidenter, genom plattformen i rådgivande läge. I uppspelningen grupperar plattformen larm väl: den genomsnittliga incidenten som gav 80 larm visas som tre grupper. Den flaggar korrekt det första tecknet i nio av de 14 incidenterna, missar tre där det första symptomet fanns i en logg och ger falska larm vid rutinmässig nattlig omkörning, som har ett mönster den inte har lärt sig.

Teamet driftsätter den i rådgivande läge på ett flöde under två månader, där jourhavande betygsätter varje förslag som användbart, neutralt eller felaktigt. Omkring 55 procent betygsätts som användbara och 15 procent som felaktiga, vanligen där en färsk oregistrerad ändring är orsaken. Plattformen tillåts sedan öppna ärenden automatiskt för grupperade incidenter, och inget annat. Teamet behåller en veckovis granskning av undertryckta larm och finner efter en större release att modellens baslinje för trafik nu är fel och måste tränas om.

Det som förändras: jourhavande får långt färre, bättre grupperade larm. Det som förblir svårt: plattformens förslag beror på korrekta ändringsregister, som är ofullständiga; den är mindre till hjälp vid nya fel; och leverantörens prissättning växer med datavolymen, så teamet begränsar vad det matar in. Chefen planerar att vidga piloten till ett annat flöde först efter ytterligare en granskning av missar.

## Fyra perspektiv

### Produkt- och leveransteam

Avge bra telemetri: konsekventa loggar, mätvärden med tjänstemärkning och register över driftsättningar och ändringar. Dela designkunskap med driftteamet och hjälp till att kontrollera verktygets förslag om er tjänst.

### Tjänste- och driftsteam

Använd verktyget som en assistent: betygsätt förslag, granska undertryckta poster och rapportera missar. Håll regler enkla där de fungerar och behåll ägandet av beslut och åtgärder.

### Ledning och styrning

Be om resultat från uppspelningstester och ett pilotförsök, inte från en demonstration. Sätt gränser för automatiska åtgärder. Finansiera datakvalitet och utbildning. Se upp för påståenden om helt autonom drift.

### Kunder och användare

Du bör märka färre och kortare avbrott, inte ändringar i hur problem kommuniceras till dig. Tala om för leverantören om en incident missades innan du märkte den.

## Agilitet, AI, automatisering och analys

### Agilitet

Pröva på en tjänst, med jourhavande som ger tät återkoppling, och vidga sedan i steg. Gå igenom missar efter varje incident och justera. Se upp: att ständigt justera en modell utan att registrera ändringar gör beteendet oförutsägbart; för en ändringslogg.

### AI

Själva verktyget är ett AI-system med en ägare, testdata och granskning. Behandla det som vilket annat: registrera vad det får göra, övervaka det och testa efter uppdateringar. Se upp: leverantörer kan byta modeller utan förvarning; fråga hur de tillkännager ändringar och testa regelbundet. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

### Automatisering

Koppla AIOps-utdata till snäva, testade automatiska åtgärder, som att skapa ärenden, samla diagnostik och starta om en känt fallerande process, med gränser och loggar. Se upp: automatiska åtgärder valda utifrån osäkra förutsägelser kan förvärra en incident; kräv hög säkerhet och en återställning. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Mät larmvolym, andel användbara, falska larm, missar som hittats i incidentgranskningar, tid för att upptäcka och tid för att diagnostisera. Se upp: lägre larmvolym kan åstadkommas genom att dölja verkliga larm; jämför alltid mot incidenter och missar. Se ämne 7.4 — Observerbarhet och telemetri och boken *Service Management Metrics*.

## Vanliga felmönster

- **Att köpa ett löfte.** Leverantörens demonstration tas som belägg. Testa på era egna data med uppspelning och ett pilotförsök.
- **Dåliga data.** Modellen lär sig av inkonsekventa loggar och märkning. Åtgärda data först.
- **Undertryckning utan granskning.** Verkliga larm döljs. Logga och ta stickprov av det som undertrycks.
- **Ogenomskinliga förslag.** Handläggare kan inte bedöma dem. Föredra verktyg som visar belägg.
- **För tidig automatisering.** Felaktiga åtgärder sker i hög fart. Börja rådgivande och begränsa åtgärder.
- **Modelldrift ignoreras.** Träffsäkerheten försämras tyst. Övervaka och träna om efter ändringar.
- **Komplexitet utan vinst.** En enkel regel hade räckt. Jämför med enkla metoder.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Datagrund | Inkonsekvent | Huvudkällor insamlade | Konsekvent, märkt och ägd telemetri | Datakvalitet mäts och förbättras | Data delas över team och leverantörer med styrning |
| Användning av AI | Leverantörspåståenden | Pilotförsök på en tjänst | Rådgivande användning med uppspelning och återkoppling | Resultat mäts och agerar man på | AI integrerad i driften med tillsyn |
| Automatisering | Ingen | Ärendeskapande | Snäva, godkända åtgärder med gränser | Åtgärder granskas och förbättras | Bredare automatisering efter risk med mänsklig kontroll |
| Modellvård | Ingen | Justering ad hoc | Övervakning av drift och fel | Omträning knuten till ändring | Kontinuerlig utvärdering över verktyg |

## Checklista

- [ ] Vi valde ett bestämt problem och ett mått för ett pilotförsök.
- [ ] Vi åtgärdade det värsta larmbruset med enkla regler först.
- [ ] Vi testade verktyget på historiska incidenter och räknade missar och falska larm.
- [ ] Vi jämförde det med enkla metoder.
- [ ] Utdata är förklarbara för handläggare.
- [ ] Vi kör i rådgivande läge innan vi tillåter någon åtgärd.
- [ ] Automatiska åtgärder är snäva, loggade, hastighetsbegränsade och reversibla.
- [ ] Vi övervakar drift och granskar undertryckta larm.

## AI-prompter

**Kontrollera uppspelningsresultat.**

```text
Here are the results of replaying [number] past incidents through our AIOps tool: for each, the first real symptom, what the tool flagged and when, and what it suggested: [paste].
Compute for each incident whether the tool flagged the problem before the first page, and list false alarms and misses. Summarize counts and note incidents where the data is unclear. Do not rate the tool overall.
List what you are unsure of.
```

**Granska undertryckta larm.**

```text
Here is a sample of alerts that the system suppressed or merged last week, with details: [paste sample].
For each, say whether the details suggest it was noise, a duplicate of another alert, or possibly a real problem, and give your reason. Mark those you cannot judge.
List what you are unsure of.
```

**Skriv ett utkast till godkännandekriterier för ett pilotförsök.**

```text
Our service: [describe]. Our current pain: [describe, with numbers if known]. Our constraints: [list].
Draft acceptance criteria for a two-month pilot of an AIOps tool: measures, thresholds we should agree beforehand, what would make us stop, and what automatic actions are not allowed. Do not state vendor claims as facts.
List what you are unsure of.
```

## AI-färdigheter

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): använd för att undersöka ovanliga mönster i driftdata.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): använd för att se hur mätvärden förändras över tid.
- [data-quality](../../../../skills/data-quality/SKILL.md): använd för att kontrollera de indata som AIOps beror på.
- [mlops](../../../../skills/mlops/SKILL.md): använd för att övervaka och underhålla modeller i bruk.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): använd för att pröva föreslagna orsaker mot belägg.

## Viktiga källor

- Betsy Beyer med flera (red.), *Site Reliability Engineering* (2016), kapitlet om övervakning av distribuerade system, fritt tillgängligt på sre.google: grunder som AIOps bygger på.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken övervakning och händelsehantering.
- Wikipedia, "AIOps" och "Anomaly detection": översikter av termen och teknikerna.
- Wikipedia, "Concept drift": den främsta orsaken till att modeller försämras över tid.

## Referenser

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
