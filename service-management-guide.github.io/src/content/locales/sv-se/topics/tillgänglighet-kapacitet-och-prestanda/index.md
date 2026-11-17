# Tillgänglighet, kapacitet och prestanda

**Hantering av tillgänglighet, kapacitet och prestanda håller en tjänst användbar, tillräckligt stor och tillräckligt snabb för den efterfrågan den möter; de fungerar när mål kommer från användarbehov, risker konstrueras bort genom redundans och testning och prognoser kontrolleras mot verkligheten i stället för att man litar på dem.**

## Varför det här är viktigt

Användare bedömer en tjänst på tre saker före allt annat: kan jag använda den, klarar den det när många använder den och är den snabb? Fel på någon av dessa visar sig som förlorat arbete, övergivna köp och arga samtal. Ändå är de tre lätta att försumma tills en dålig dag: en lansering som fördubblar trafiken, en tidsfrist som skickar alla till systemet den sista timmen, ett fel i en enda komponent som ingen insåg att allt berodde på.

Dessa praktiker finns för att undvika de dåliga dagarna genom att tänka på dem i förväg. De frågar hur mycket fel tjänsten kan tåla och vad det kostar, hur mycket efterfrågan den måste hantera och hur den efterfrågan kommer att växa, och hur snabbt den bör svara. De svarar med designval som redundans, med tester som hittar gränser före användarna och med prognoser som kontrolleras och uppdateras.

ITIL 4 beskriver tre besläktade praktiker: tillgänglighetshantering, kapacitets- och prestandahantering och, nära besläktad, hantering av tjänstekontinuitet (ämne 3.12 — Hantering av tjänstekontinuitet). Tekniska team möter dem som tillförlitlighetsteknik, prestandateknik och kapacitetsplanering, med SLO:n och felbudgetar (ämne 2.6 — Site reliability engineering). Det här ämnet för samman idéerna och förklarar hur man använder dem utan överdrivet guldplätering: mer tillgänglighet är inte alltid bättre, eftersom varje extra nia kostar mer. Det hänger ihop med hantering av servicenivåer (ämne 3.7 — Hantering av servicenivåer) och övervakning (ämne 3.10 — Övervakning och händelsehantering).

## Grundbegrepp

**Tillgänglighet.** Förmågan hos en tjänst att utföra sin överenskomna funktion när den behövs. Wikipedia beskriver tillgänglighet som andelen tid ett system fungerar. Den uttrycks vanligen som en procentandel över en period, till exempel 99,9 procent under en månad, vilket tillåter ungefär 43 minuters avbrott. Siffran är bara meningsfull när du definierar vad "fungerar" betyder för användare.

**Tillförlitlighet och underhållbarhet.** Tillförlitlighet är hur länge en tjänst körs utan fel; underhållbarhet är hur snabbt den kan återställas. Tillgänglighet beror på båda. Wikipedia-artiklarna om tillförlitlighetsteknik och om genomsnittlig tid mellan fel (MTBF) beskriver måtten. I många moderna tjänster är snabb återhämtning mer uppnåelig än sällsynta fel.

**Redundans och enskilda felpunkter.** Redundans betyder att ha reservkomponenter så att ett fel inte stoppar tjänsten. En enskild felpunkt är en komponent vars fel stoppar allt. Wikipedia-artiklarna om redundans och om enskilda felpunkter beskriver idéerna. Att hitta enskilda felpunkter, inklusive människor, leverantörer och certifikat som löper ut, är en central tillgänglighetsuppgift.

**Feltolerans och graciös nedgradering.** Ett feltolerant system fortsätter fungera när delar fallerar; ett som graciöst nedgraderar förlorar viss funktion men behåller sin kärna. Till exempel kan en e-handelssajt stänga av rekommendationer men fortfarande behandla beställningar. Designa för det andra där full tolerans är för kostsam.

**Redundansväxling (failover).** Att växla till en reservkomponent när den primära fallerar. Den bör testas; otestad redundansväxling fallerar ofta när den behövs. Se ämne 3.12 — Hantering av tjänstekontinuitet.

**Kapacitet.** Den maximala genomströmning en tjänst kan leverera. Kapacitetshantering ser till att det finns tillräckligt, och inte mycket mer än tillräckligt, för att möta nuvarande och framtida efterfrågan till överenskommen kostnad. Wikipedia-artikeln om kapacitetsplanering beskriver den.

**Efterfrågan.** Den belastning som läggs på tjänsten: användare, förfrågningar, datavolym. Efterfrågan varierar med timme, dag, säsong och händelse och påverkas av lanseringar, kampanjer och yttre händelser. Att förstå mönstret betyder mer än medelvärdet.

**Skalbarhet och autoskalning.** Förmågan att hantera mer belastning genom att lägga till resurser. Molnplattformar tillåter automatisk skalning som lägger till kapacitet när belastningen ökar. Det hjälper men tar inte bort behovet av planering: det har gränser, kostar pengar och åtgärdar inte en databas som inte kan skalas. Se ämne 4.5 — Ekonomistyrning och FinOps.

**Prestanda.** Hur snabbt och effektivt tjänsten svarar. Vanliga mått är latens (hur lång tid en förfrågan tar), genomströmning (hur många förfrågningar som hanteras) och felfrekvens. Wikipedia beskriver latens inom teknik. Användare märker den långsamma svansen, så titta på percentiler, som den 95:e, inte bara medelvärdet. Se ämne 3.7 — Hantering av servicenivåer.

**Köbildning och mättnad.** När ett system närmar sig full användning växer väntetiden kraftigt. Köteorin, som beskrivs på Wikipedia, förklarar varför en tjänst som körs vid 95 procent av kapaciteten känns mycket annorlunda än en vid 60 procent. Lämna marginal.

**Prestandateknik och prestandatestning.** Att utforma och testa för prestanda under hela utvecklingen, inte bara i slutet. Belastningstestning tillämpar förväntad efterfrågan; stresstestning trycker förbi den för att hitta brytpunkter. Wikipedia beskriver båda. Testa i en miljö som liknar produktion, med realistiska data.

**Prognostisering.** Att uppskatta framtida efterfrågan utifrån historik, kända händelser och tillväxt. Wikipedia beskriver prognosmetoder. Prognoser är osäkra: registrera antaganden, visa intervall och jämför förutsägelser med vad som sker. Se ämne 7.5 — Prediktiv analys och prognoser.

**Kostnadsavvägningar.** Varje ökning av tillgänglighet eller kapacitet kostar pengar. Rätt nivå beror på kostnaden för fel och långsamhet för verksamheten. Gör avvägningen explicit tillsammans med dem som betalar och skriv ned den.

**Hur linserna passar in.** Agil praktik behandlar tillförlitlighetsarbete som en del av backloggen och testar tidigt och ofta. AI kan upptäcka avvikelser och stödja prognostisering under granskning. Automatisering skalar resurser och växlar över. Analys ger data för alla tre praktikerna.

## Bra arbetssätt

1. **Sätt tillgänglighetsmål utifrån användarbehov.** Fråga vad som händer när tjänsten ligger nere en timme, en dag, en vecka. Sätt ett mål, och en kostnad, som matchar. Skriv definitionen av "tillgänglig" ur användarens synvinkel.
2. **Hitta enskilda felpunkter.** Kartlägg komponenterna och beroendena för viktiga tjänster och fråga vad som händer om var och en fallerar. Inkludera certifikat, licenser, människor och leverantörer.
3. **Designa för fel.** Använd redundans där kostnaden är motiverad, gör komponenter fallerande oberoende av varandra och avgör vad som kan stängas av för att skydda kärnan.
4. **Testa redundansväxling och återhämtning.** Repetera redundansväxlingar i en säker miljö och registrera hur lång tid de tar. Åtgärda vad repetitionen avslöjar.
5. **Känn efterfrågemönstret.** Samla belastningsdata per timme, dag och säsong och lista kända kommande händelser som lanseringar och tidsfrister. Planera för toppar, inte medelvärden.
6. **Lämna marginal.** Kör inte viktiga komponenter nära full kapacitet. Sätt larmtröskelvärden som varnar i tid för att agera.
7. **Testa prestanda före användarna.** Kör belastnings- och stresstester mot realistiska scenarier före större releaser och inför kända toppar. Lär dig var systemet brister.
8. **Prognostisera och kontrollera.** Gör en prognos med dess antaganden, granska den regelbundet mot utfall och justera. Dela intervall, inte enskilda tal.
9. **Bevaka svansen.** Redovisa percentillatens och felfrekvens och undersök de långsammaste förfrågningarna. Medelvärden döljer de olyckliga användarnas upplevelse.
10. **Väg kostnad och risk öppet.** Visa ägare kostnaden för varje nivå av tillgänglighet och kapacitet och registrera beslutet och vem som fattade det.

## Frågor att diskutera i teamet

**Vad skulle våra användare förlora om den här tjänsten låg nere i en timme, och matchar vårt mål?**
Det här knyter mål till påverkan. Räkna med att olika användare ger olika svar. Be om verkliga exempel. Fördjupa genom att skriva målet med en kostnad och kontrollera det med en kund.

**Vilka är våra enskilda felpunkter, inklusive de som inte är maskiner?**
Rita beroendena för en kritisk tjänst. Räkna med överraskningar: ett certifikat som ingen bevakar, en enda ingenjör, en leverantör utan reserv. Fördjupa genom att välja en att minska.

**När testade vi redundansväxling senast, och vad hände?**
Be om datum och utfall. Räkna med "aldrig" eller "det fungerade i testmiljön". Fördjupa genom att planera en repetition med en angiven tid för att återhämta sig.

**Vilken är årets mest hektiska timme för den här tjänsten, och är vi redo för den?**
Tänk på tidsfrister, lanseringar och rea. Fråga vad som hände förra gången. Fördjupa genom att planera ett belastningstest inför nästa topp.

**Hur träffsäkra var våra tre senaste kapacitetsprognoser?**
Det här prövar lärande. Räkna med att ingen kontrollerade. Jämför prognoserna med utfallet. Fördjupa genom att komma överens om en granskningscykel och registrera antaganden.

**Hur kunde AI hjälpa till att prognostisera efterfrågan eller upptäcka problem tidigt, och hur skulle vi veta att den hade fel?**
AI kan hitta mönster i telemetri. Den kan också anpassa sig efter brus. Fråga vem som äger den och vad den ska jämföras med. Fördjupa genom att köra en AI-prognos parallellt med den befintliga metoden i ett kvartal.

## I praktiken: ett exempel på tjänstehantering

En nationell studielånsmyndighet driver en ansökningsportal. Större delen av året hanterar den några tusen användare om dagen. De två sista dagarna före den årliga ansökningsfristen hanterar den långt över hundra gånger så många. För två år sedan kraschade den sista kvällen; förra året överlevde den med nödskalning och en natts övertid.

Tjänsteägaren börjar i januari, långt före nästa tidsfrist. Hon ber om trafikdata för de tre senaste åren, timme för timme, och finner en konsekvent form: en långsam ökning under den sista veckan, en kraftig ökning den sista dagen och en topp under de sista tre timmarna. Hon ber teamet identifiera enskilda felpunkter. De finner att portalen beror på en identitetsverifieringstjänst som drivs av en leverantör med en fast hastighetsgräns, vilken skulle begränsa genomströmningen till ungefär hälften av den förväntade toppen.

Teamet gör tre saker. Det förhandlar fram en högre hastighetsgräns med leverantören och får en tillfällig ökning för den sista veckan. Det kör belastningstester i mars och juni med föregående års mönster plus 30 procent och finner att databasen blir flaskhalsen vid ungefär 70 procent av den förväntade toppen, vilket det åtgärdar genom att lägga till en läsreplika och cacha några dyra frågor. Och det förbereder ett nedgraderat läge: den sista dagen stängs icke-väsentliga funktioner som sparkalkylatorn av om belastningen passerar ett tröskelvärde.

På tidsfristens dag hanterar portalen toppen. Identitetstjänsten blir långsammare under den hektiskaste timmen men fallerar inte, och det nedgraderade läget aktiveras en gång, i 40 minuter. Det som förändras: inget avbrott och ingen övertidskris. Det som förblir svårt: leverantörens gräns är en avtalsfråga som återställs varje år; prognosen på 30 procents ökning var ett antagande, och den faktiska ökningen var 22 procent, så teamet kan ha överspenderat; och ingen har testat ett fullständigt regionsbortfall, vilket fortfarande skulle stoppa tjänsten. Ägaren registrerar dessa i nästa års plan.

## Fyra perspektiv

### Produkt- och leveransteam

Designa för fel och för belastning: gör komponenter oberoende, testa prestanda medan ni bygger och känn era gränser. Ta med nedgraderade lägen och hastighetsgränser i designen.

### Tjänste- och driftsteam

Känn efterfrågemönstret och kapacitetsmarginalen. Repetera redundansväxling, bevaka den långsamma svansen och varna tidigt om trender. Håll beroendekartan aktuell.

### Ledning och styrning

Besluta tillgänglighets- och kapacitetsnivåer med blick för kostnad och risk och be om beläggen bakom dem. Finansiera testning och repetition, inte bara utrustning. Var uppmärksam på kända toppar.

### Kunder och användare

Tala om för leverantören om dina hektiskaste perioder och vad ett fel kostar dig. Fråga vilken tillgänglighetsnivå som planeras och vad som händer när den missas.

## Agilitet, AI, automatisering och analys

### Agilitet

Ta med tillförlitlighets- och prestandaarbete i backloggen, testa tidigt och ofta i pipelinen och lär av varje incident och topp. Se upp: att skjuta tillförlitlighet till "senare" bygger upp skuld som dyker upp vid sämsta tänkbara tid.

### AI

AI kan upptäcka avvikelser, prognostisera efterfrågan utifrån historik och händelser och föreslå skalningsåtgärder, med ägare och mänskliga beslut om kostnad och risk. Se upp: en modell tränad på normala dagar kan fallera vid exempellösa händelser; jämför den med enkla baslinjer och håll en person ansvarig. Se ämne 5.2 — AIOps.

### Automatisering

Automatisera skalning, redundansväxling, hälsokontroller och belastningstester i pipelinen, med gränser och loggar. Se upp: autoskalning kan driva upp kostnader eller dölja en felaktig release; sätt budgetar och larm och testa skalningsreglerna. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Samla efterfrågan, utnyttjande, latenspercentiler, felfrekvens och prognosträffsäkerhet. Se upp: utnyttjandemål kan manipuleras genom att flytta belastning, och medelvärden döljer den långsamma svansen; kontrollera med data om användarupplevelse. Se ämne 7.5 — Prediktiv analys och prognoser och boken *Service Management Metrics*.

## Vanliga felmönster

- **Mål av vana.** "Fem nior" utlovas utan skäl. Sätt mål utifrån användarbehov och kostnad.
- **Dolda enskilda felpunkter.** Ett certifikat eller en person stoppar allt. Kartlägg beroenden brett.
- **Otestad redundansväxling.** Den fallerar när den behövs. Repetera regelbundet.
- **Planering för medelvärden.** Toppar överväldigar systemet. Planera för kända toppar och lämna marginal.
- **Prognoser som aldrig kontrolleras.** Fel upprepas. Jämför förutsägelser med utfall.
- **Autoskalning som universalmedel.** Kostnader och flaskhalsar finns kvar. Testa gränser och sätt budgetar.
- **Enbart medelvärden.** Den långsamma svansen ignoreras. Redovisa percentiler.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Tillgänglighet | Reaktiv | Mål för nyckeltjänster | Mål, redundans och testad redundansväxling | Tillgänglighet mäts mot användarupplevelse | Tillgänglighet utformas och förvaltas över tjänster och leverantörer |
| Kapacitet | Läggs till när den tar slut | Grundläggande övervakning | Efterfrågemönster kända och prognostiserade med antaganden | Prognosträffsäkerhet granskas | Kapacitet planeras och justeras automatiskt med tillsyn |
| Prestanda | Bara klagomål | Några mått | Percentilmål och belastningstester före releaser | Prestandatrender och regressioner följs | Prestanda konstrueras genom hela livscykeln |
| Kostnadsmedvetenhet | Okänd | Känd ungefärligt | Avvägningar dokumenterade med ägare | Kostnad och risk granskas regelbundet | Kostnad, risk och tillförlitlighet optimeras tillsammans |

## Checklista

- [ ] Tillgänglighetsmål bygger på användarbehov och kostnad, med en tydlig definition.
- [ ] Enskilda felpunkter för viktiga tjänster är kartlagda och följs.
- [ ] Redundansväxling har repeterats och tidtagits.
- [ ] Vi känner vårt efterfrågemönster och kommande toppar.
- [ ] Vi kör belastningstester före större releaser och kända toppar.
- [ ] Prognoser registrerar antaganden och kontrolleras mot utfall.
- [ ] Vi redovisar percentillatens och felfrekvens.
- [ ] Kostnads- och riskavvägningar registreras med ägare.

## AI-prompter

**Hitta enskilda felpunkter.**

```text
Here is a description of how [service] works and what it depends on: [paste].
List each component and dependency, and for each one say what the description implies would happen if it failed, or "not stated". Mark candidate single points of failure and questions to ask. Do not assume redundancy that is not described.
List what you are unsure of.
```

**Sammanfatta efterfrågemönster.**

```text
Here is hourly request data for [period]: [paste summary or data].
Describe the daily, weekly, and seasonal patterns you can see, give the peak-to-average ratio, and list dates that look unusual. Do not forecast.
List what you are unsure of.
```

**Skriv ett utkast till en belastningstestplan.**

```text
Our service: [describe]. Expected peak: [number and pattern]. Known limits or concerns: [list].
Draft a test plan with scenarios, load levels, what to measure, what would make us stop, and risks of testing. Specify that it is run only in a safe environment.
List what you are unsure of.
```

## AI-färdigheter

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): använd för att prognostisera efterfrågan och planera resurser.
- [load-testing](../../../../skills/load-testing/SKILL.md): använd för att utforma och köra belastningstester.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): använd för att undersöka snabbhet och responsivitet.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): använd för att uppskatta framtida efterfrågan med angiven osäkerhet.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): använd för att testa hur fel sprider sig.

## Viktiga källor

- Betsy Beyer med flera (red.), *Site Reliability Engineering* (2016): kapitlen om hantering av överbelastning och lastbalansering, fritt tillgängliga på sre.google.
- PeopleCert, ITIL certification pages: ägarens beskrivning av tillgänglighets- och kapacitetspraktiker.
- Wikipedia, "High availability" och "Capacity planning": översikter av huvudidéer.
- Wikipedia, "Queueing theory": matematiken bakom väntan och mättnad.

## Referenser

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
