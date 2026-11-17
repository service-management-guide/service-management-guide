# Skala agilt

**Skalningsramverk som Scaled Agile Framework (SAFe), Large-Scale Scrum (LeSS) och Disciplined Agile hjälper många team att arbeta med en produkt eller tjänst, men de lägger till struktur och kostnad; minska först beroenden och antalet team, och anta ett ramverk bara för de samordningsproblem som återstår.**

## Varför det här är viktigt

Agil praktik beskrevs först för ett enda litet team som kunde sitta tillsammans, planera tillsammans och släppa tillsammans. Verkliga tjänster är större. En banks mobilapp, ett sjukhus patientjournal eller en stads transportplattform behöver dussintals eller hundratals människor, många team, delade komponenter och leverantörer. Dessa team är beroende av varandra, och beroendena bromsar dem.

Skalningsramverk erbjuder sätt att samordna. De föreslår roller, händelser och artefakter så att många team kan planera och släppa i takt. Vissa har stora följarskaror, utbildningsprogram och certifieringssystem. De drar också till sig kritik: att de återinför tung planering och hierarki under agila namn, att de säljs som ett program för organisationen när det verkliga problemet är arkitektur eller ägarskap, och att de sprider ordförråd fortare än beteende.

En tjänstechef möter skalningsramverk i praktiken, eftersom de team som driver tjänster är de som samordnar med plattforms-, säkerhets- och leverantörsteam. Det här ämnet förklarar huvudalternativen neutralt, frågar när skalning hjälper och säger vad man bör pröva innan man antar ett ramverk. Det beskriver ramverk med ägarnas egna beskrivningar där det är möjligt; kontrollera ägarnas aktuella publikationer, eftersom versioner ändras.

## Grundbegrepp

**Skalningsproblemet.** När fler än en handfull team bidrar till ett resultat växer tre saker: beroenden (ett team väntar på ett annat), samordningsinsats (planering och kommunikation) och risken för inkonsekventa beslut. Brooks lag, från en bok av Fred Brooks från 1975 och beskriven på Wikipedia, noterar att tillägg av människor till ett försenat projekt tenderar att försena det ytterligare, på grund av kommunikationens kostnad. Skalning handlar till stor del om att begränsa den kostnaden.

**Conways lag.** Iakttagelsen att ett systems design tenderar att spegla kommunikationsstrukturen i den organisation som bygger det. Om team är organiserade efter teknisk nivå kommer systemet att ha nivågränser, och varje funktion kommer att behöva alla teamen. Många skalningsproblem är strukturproblem; se ämne 1.6 — Fyra dimensioner av tjänstehantering.

**SAFe.** Scaled Agile Framework är en uppsättning organisations- och arbetsflödesmönster, från Scaled Agile, Inc., för att införa agilitet i företagsskala. Det organiserar team i grupper som planerar tillsammans i fasta inkrement och erbjuder konfigurationer för olika storlekar, inklusive portfölj-, stor lösnings- och grundnivåer. Det används ofta i stora företag och har detaljerad vägledning och certifiering. Kritiker pekar på dess storlek och dess planeringscykler.

**LeSS.** Large-Scale Scrum, skapat av Craig Larman och Bas Vodde, utvidgar Scrum till många team med en enda produktbacklogg och en enda produktägare. Det betonar enkelhet och att ta bort struktur som inte behövs, och uttrycker uppfattningen att skalning bör betyda "mindre" organisation. Det förutsätter att team använder Scrum. Se less.works för dess egen beskrivning.

**Disciplined Agile.** Ett verktygskit, ursprungligen från Scott Ambler och Mark Lines, beskrivet på Wikipedia som Disciplined Agile Delivery, som erbjuder en meny av alternativ för varje aspekt av leverans och uppmuntrar team att välja det som passar deras sammanhang. Det underhålls nu av Project Management Institute. Ramverkets eget namn innehåller ordet "delivery" och citeras här som ett egennamn.

**Scrum of Scrums.** Ett mönster där en företrädare från varje team regelbundet möter andra för att samordna över team. Det är enkelt och fungerar för ett litet antal team.

**Andra angreppssätt.** Vissa organisationer antar en modell inspirerad av hur ett visst företag beskrivs. Publicerade beskrivningar av ett musikföretags skvadroner, stammar, kapitel och gillen kopierades flitigt, trots att inblandade har sagt att det var en ögonblicksbild av ett experiment snarare än ett ramverk att anta. Behandla sådana beskrivningar som källor till idéer, inte som recept.

**Teamtopologier och ägarskap.** Ett angreppssätt som beskriver ett litet antal teamtyper (flödesinriktade, plattforms-, möjliggörande, team för komplicerade delsystem) och deras interaktionssätt, med syftet att minska beroenden. Det är ett sätt att tänka kring struktur, och det kompletterar ett ramverksval eller kan ersätta det i vissa organisationer.

**Verksamhetsagilitet.** En bredare idé att hela organisationen, inklusive ekonomi, HR och styrning, måste kunna svara på förändring, inte bara leveransteam. Wikipedia beskriver den under business agility. Att skala team utan att ändra budgetering eller styrning misslyckas ofta.

**Tjänsteteam i skala.** Drift-, support- och plattformsteam betjänar många produktteam, och deras arbete passar inte snyggt in i planeringsinkrement. De behöver tydliga gränssnitt, som en tjänstekatalog och överenskomna servicenivåer, och kapacitet att hantera avbrott. Se ämne 2.8 — Produkt- och tjänsteägarskap och ämne 3.8 — Hantering av tjänstekatalog.

**Hur linserna passar in.** Skalning handlar om den agila linsen i organisatorisk storlek. AI kan hjälpa till att sammanfatta beroenden och planer, under granskning. Automatisering kan visa beroenden i verktyg och hålla planer konsekventa. Analys kan visa var arbete väntar på andra team.

## Bra arbetssätt

1. **Minska beroenden innan ni samordnar dem.** Leta efter sätt att göra team oberoende: tydligare ägarskap, bättre gränssnitt, delade komponenter med eget team, eller sammanslagning av team som alltid arbetar tillsammans.
2. **Rikta in team efter värdeflödet.** Organisera team kring en tjänst eller kundfärd, så att ett team kan leverera en ändring från idé till produktion. Undvik team som bara äger en teknisk nivå.
3. **Börja med den minsta samordning som fungerar.** För några få team kan regelbundna samtal och en gemensam tavla räcka. Lägg till struktur först när ett problem visar att ni behöver den.
4. **Välj ett ramverk för ett namngivet problem.** Skriv samordningsproblemet, till exempel "fem team delar en release och blockeringar är frekventa", och fråga vilket ramverk eller vilken praktik som tar upp det. Anta inte ett ramverk för att det är populärt.
5. **Ha en synlig backlogg och prioritering för ett gemensamt resultat.** Många team som arbetar mot olika prioriteringslistor ger konflikt. Kom överens om vem som avgör prioritet över team.
6. **Gör beroenden synliga.** Visa på en tavla eller karta vilket team som väntar på vilket. Gå igenom de största och avgör om var och en ska tas bort eller hanteras.
7. **Erbjud plattformar som tjänster.** Om ett plattformsteam betjänar andra, behandla de andra teamen som kunder, publicera gränssnitt och mät om de hjälper. Se ämne 2.5 — DevOps.
8. **Involvera drift och leverantörer i planeringen.** Ta med tjänste- och leverantörsteam i planering över team, så att drift- och supportbehov inte upptäcks vid lansering.
9. **Ändra budgetering och styrning så att de passar.** Att finansiera stabila team och resultat, och hålla styrningen lätt och beläggsbaserad, stöder skalad leverans bättre än finansiering projekt för projekt.
10. **Se över själva ramverket.** Efter ett år, fråga om det minskade väntan och förbättrade resultat. Släpp eller ändra det som inte hjälper.

## Frågor att diskutera i teamet

**Vilka team väntar vi mest på, och varför?**
Det här hittar beroenden. Människor nämner oftast några få team om och om igen. Be om verkliga exempel med datum. Fördjupa genom att fråga vad som skulle få beroendet att försvinna, till exempel att flytta en färdighet, ett gränssnitt eller ett beslut.

**Vilket problem skulle ett skalningsramverk lösa för oss som vi inte kan lösa med en enklare förändring?**
Det här prövar om ett ramverk behövs. Team åberopar ofta allmän samordning. Pressa på för specifika svar. Fördjupa genom att välja den minsta förändringen att pröva först.

**Hur är våra team organiserade, efter nivå, komponent eller färd, och vad kostar det oss?**
Struktur formar beroenden. Fråga hur många team som berör en typisk ändring. Räkna med svar på tre till sex. Fördjupa genom att skissa en alternativ struktur för en färd.

**Vem avgör prioritet när två teams arbete krockar?**
Oklar beslutsrätt slösar tid. Du kan få höra att det beror på, eller att ledare avgör sent. Be om det senaste exemplet. Fördjupa genom att komma överens om en beslutsfattare och en tidsfrist för varje typ av konflikt.

**Hur stöder eller hindrar vår finansieringsmodell team som håller ihop och äger tjänster?**
Projektbaserad finansiering upplöser team och förlorar kunskap. Fråga hur länge team hålls samman och vem som finansierar förbättring. Fördjupa genom att lista en tjänst som skulle ha nytta av stabil finansiering.

**Hur kunde AI hjälpa oss se och hantera beroenden, och vad kunde gå fel?**
AI kan läsa planer och ärenden och föreslå kopplingar. Den kan också hitta på beroenden eller missa verkliga. Fråga vem som kontrollerar och hur ofta. Fördjupa genom att jämföra en AI-genererad karta med en som ritats av två team.

## I praktiken: ett exempel på tjänstehantering

Ett nationellt järnvägsföretags digitala division har elva team som arbetar med en reseplanerartjänst: webb, mobil, tidtabellsdata, realtidsflöden, betalningar, tillgänglighet och andra. Releaser kräver att alla elva team är redo, och en försening i något håller upp de andra. Divisionens direktör har fått rådet att anta ett stort skalningsramverk med ett program för utbildning och nya roller.

Tjänsteägaren ber om två veckor för att först kartlägga beroenden. Hon ritar en tavla med varje team och de punkter de väntade på under det senaste kvartalet. Fyra team står för det mesta av väntan: tidtabellsdatateamet är en flaskhals för tre andra; betalningar beror på en leverantörs releasecykel; tillgänglighetsgranskningar görs sent av ett separat team; och ett delat designsystem saknar ägare. Hon föreslår fyra förändringar: flytta två datateknikare in i de team som väntar mest, publicera tidtabellsdata genom ett dokumenterat gränssnitt som team kan läsa utan att fråga, placera tillgänglighetsspecialister i mobil- och webbteamen och ge designsystemet till ett namngivet team som behandlar de andra som kunder.

Direktören går med på att pröva detta under ett kvartal och att hålla en kort planeringssession var sjätte vecka över team, med en enda synlig prioritetslista för det gemensamma resultatet. Ett ramverk skjuts upp.

Det som förändras: antalet punkter som väntar på andra team minskar, och releaser kräver inte längre att alla elva team är redo. Det som förblir svårt: betalningar beror fortfarande på leverantörens schema; den gemensamma prioritetslistan bråkas om vid varje session; och divisionens budgetprocess finansierar projekt, så två team kommer att upplösas vid årets slut. Tjänsteägaren säger till direktören att förbättringarna kanske inte håller utan ändrad finansiering.

## Fyra perspektiv

### Produkt- och leveransteam

Leta efter sätt att ta bort beroenden till andra team och gör de som återstår synliga. Delta i planering över team och håll den levande tjänsten inom era planer.

### Tjänste- och driftsteam

Erbjud tydliga gränssnitt som en tjänstekatalog och överenskomna nivåer. Delta i planeringen så att drift- och supportbehov är kända tidigt, och ta med data om avbrott och väntan till samtalet.

### Ledning och styrning

Fråga vilket samordningsproblem ett ramverk skulle lösa och hur ni ska veta att det gjorde det. Ändra finansiering och styrning så att de passar stabila, resultatorienterade team. Utse vem som avgör prioritet över team.

### Kunder och användare

Du bör uppleva en tjänst som ändras sammanhängande, inte en uppsättning osammanhängande releaser. Tala om för leverantören var funktioner eller upplevelser känns inkonsekventa, eftersom det ofta avslöjar samordningsproblem.

## Agilitet, AI, automatisering och analys

### Agilitet

Håll intressenter involverade över team, leverera i små delar och förbättra hur team samordnar sig. Se upp: skalade planeringshändelser kan bli stora batcher i förklädnad; håll dem korta och håll releaserna små.

### AI

AI kan sammanfatta backloggar över team, föreslå beroendekopplingar och skriva utkast till planeringsanteckningar, under mänsklig granskning. Utse en ägare för varje användning. Se upp: AI-sammanfattningar av planer kan platta ut oenighet; låt människor göra avvägningarna. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera beroendespårning i era verktyg, delade pipelines och konsekventa miljöer, så att samordning förlitar sig mindre på möten. Se upp: verktyg som upprätthåller en stel plan kan upphäva flexibilitet; behåll dem som ett stöd för samtal. Se ämne 6.4 — Pipelines och automatiserade ändringar.

### Analys

Mät väntetid mellan team, antalet beroenden mellan team per punkt och tiden från idé till release för ett gemensamt resultat. Se upp: att jämföra team på dessa mått bortser från sammanhang och inbjuder till manipulation; använd dem för att hitta strukturella problem. Se ämne 7.6 — Process- och värdeströmsanalys och boken *Service Management Metrics*.

## Vanliga felmönster

- **Ramverk först.** Ett stort program startar innan problemet är namngivet. Kartlägg beroenden och pröva enkla förändringar.
- **Team organiserade efter nivå.** Varje ändring behöver varje team. Organisera kring färden.
- **Samordningsmöten förökar sig.** Människor tillbringar veckan i planering. Minska beroenden och antalet händelser.
- **Oklar prioritet över team.** Team drar åt olika håll. Utse en beslutsfattare.
- **Finansieringen oförändrad.** Projektfinansiering bryter isär team. Finansiera stabila team och resultat.
- **Att kopiera ett annat företags modell.** Sammanhanget skiljer sig. Behandla den som idéer, inte som recept.
- **Plattform som påbud.** Team går förbi den. Behandla andra team som kunder.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Beroenden | Okända | Huvudberoenden kända | Beroenden synliga och ägda | Beroenden minskas på belägg | Team i hög grad oberoende med tydliga gränssnitt |
| Struktur | Team efter nivå | Några färdinriktade team | Team riktade efter värdeflödet | Struktur granskas mot resultat | Strukturen anpassas över tjänster och partner |
| Samordning | Ad hoc | Regelbundna samtal | Lätt, regelbunden planering över team | Samordningskostnad mäts | Samordning stöds av delade verktyg och gränssnitt |
| Finansiering och styrning | Projektfinansiering | Några stabila team | Stabila team och resultatbaserad styrning | Finansiering granskas mot resultat | Finansiering och styrning anpassas över portföljen |

## Checklista

- [ ] Vi kartlade beroenden mellan team med verkliga exempel.
- [ ] Vi försökte minska beroenden innan vi antog ett ramverk.
- [ ] Team är riktade mot en färd eller tjänst där det går.
- [ ] Det finns en namngiven beslutsfattare för prioritet över team.
- [ ] Plattforms- och tjänsteteam publicerar gränssnitt och behandlar andra som kunder.
- [ ] Planering över team är kort och inkluderar drift och leverantörer.
- [ ] Finansieringen stöder stabila team.
- [ ] Vi granskar det valda ramverket mot resultat årligen.

## AI-prompter

**Skriv ett utkast till en beroendekarta utifrån anteckningar.**

```text
Here are notes on what each team waited for in the last quarter: [paste notes].
List each dependency as "team A waits for team B for X", count how often each appears, and list the five most frequent. Do not infer reasons.
List what you are unsure of.
```

**Jämför strukturalternativ.**

```text
Our service involves these teams and what each owns: [paste]. A typical change needs: [describe].
Describe two alternative ways to organize the teams around the journey, with the trade-offs of each. Mark assumptions. Do not recommend a framework.
List what you are unsure of.
```

**Förbered en agenda för planering över team.**

```text
We have [number] teams planning together for [period]. The shared outcome is: [describe]. The top dependencies are: [list].
Draft a 90-minute agenda that focuses on dependencies and priorities, with time for each, and questions to ask. Keep it short and avoid framework jargon.
List what you are unsure of.
```

## AI-färdigheter

- [scaled-agile-framework](../../../../skills/scaled-agile-framework/SKILL.md): använd för att förstå SAFe:s roller och händelser innan ni avgör om det passar.
- [large-scale-scrum](../../../../skills/large-scale-scrum/SKILL.md): använd för att förstå LeSS och dess antaganden.
- [disciplined-agile](../../../../skills/disciplined-agile/SKILL.md): använd för att se de alternativ Disciplined Agile erbjuder för ett sammanhang.
- [scrum-of-scrums](../../../../skills/scrum-of-scrums/SKILL.md): använd för ett lätt samordningsmönster över team.

## Viktiga källor

- Craig Larman och Bas Vodde, LeSS (less.works): ägarnas beskrivning av Large-Scale Scrum.
- Scaled Agile, Inc., SAFe (scaledagileframework.com): ramverkets egen webbplats.
- Matthew Skelton och Manuel Pais, *Team Topologies* (2019): ett sätt att tänka kring teamstruktur och interaktion.
- Wikipedia, "Scaled agile framework" och "Conway's law": neutral bakgrund.

## Referenser

1. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
2. Disciplined agile delivery — Wikipedia — https://en.wikipedia.org/wiki/Disciplined_agile_delivery
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Brooks's law — Wikipedia — https://en.wikipedia.org/wiki/Brooks%27s_law
6. Business agility — Wikipedia — https://en.wikipedia.org/wiki/Business_agility
7. Matrix management — Wikipedia — https://en.wikipedia.org/wiki/Matrix_management
8. Portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Portfolio_management
9. Large-Scale Scrum (LeSS) — Larman and Vodde — https://less.works
10. Scaled Agile Framework — Scaled Agile, Inc. — https://scaledagileframework.com
