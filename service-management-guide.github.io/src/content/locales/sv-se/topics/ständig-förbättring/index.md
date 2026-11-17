# Ständig förbättring

**Ständig förbättring är den återkommande cykeln att välja en liten ändring, pröva den, kontrollera om den hjälpte och behålla eller backa den; den fungerar när förbättring har en synlig backlogg, skyddad kapacitet, en ägare och belägg bakom varje beslut.**

## Varför det här är viktigt

Alla team vill förbättras, och de flesta gör det inte. Skälen är sällan brist på idéer. Förbättringsidéer finns i överflöd och bor i människors huvuden, i retrospektivanteckningar och i incidentgranskningar. De misslyckas för att ingen äger dem, ingenting skyddar tid för dem och brådskande arbete alltid vinner. Efter några månader slutar människor föreslå, eftersom att föreslå inte har någon effekt.

Ständig förbättring är praktiken som åtgärdar detta. Den gör förbättring till en regelbunden, synlig del av hur ett team arbetar. Idéer går till en gemensam lista. Någon ordnar listan. En liten mängd kapacitet avsätts varje cykel för de främsta punkterna. Varje ändring prövas som ett experiment, kontrolleras och behålls eller släpps. Under ett år blir många små ändringar betydande vinster, och teamet lär sig vad som fungerar i dess eget sammanhang.

ITIL 4 placerar ständig förbättring i hjärtat av tjänstevärdesystemet, som både komponent och praktik (se ämne 1.4 — Tjänstevärdesystemet). Lean-tänkande, kaizen, Deming-cykeln och agila retrospektiv beskriver alla versioner av samma cykel (se ämne 2.4 — Lean och kaizen). Det här ämnet beskriver cykeln, förbättringsbackloggen och de vanor som håller den vid liv, och det visar hur AI, automatisering och analys hjälper och var de vilseleder. Det hänger ihop med problemhantering (ämne 3.3 — Problemhantering), som levererar många förbättringsidéer, och med mätning (ämne 7.3 — Mätning och rapportering).

## Grundbegrepp

**Ständig (continual) kontra kontinuerlig (continuous).** ITIL använder "continual improvement", förbättring som återkommer med intervall, i cykler. "Continuous improvement" används ofta i lean- och kvalitetskretsar med liknande innebörd. Orden används löst, och den här guiden behandlar dem som samma idé. Wikipedia beskriver processen för ständig förbättring.

**Cykeln.** Den mest kända formen är planera–göra–kontrollera–agera (PDCA), även kallad Deming-cykeln efter W. Edwards Deming, som populariserade den inom kvalitetsledning. Du planerar en ändring och vad du förväntar dig av den, gör den i liten skala, kontrollerar resultaten och agerar: anta den, justera den eller släpp den. Wikipedia beskriver PDCA och Demings roll. Cykeln upprepas.

**ITIL 4:s modell för ständig förbättring.** ITIL 4 erbjuder en sjustegsmodell: vad är visionen; var är vi nu; var vill vi vara; hur tar vi oss dit; vidta åtgärd; kom vi dit; hur håller vi farten uppe. Det är ett underlag för tänkande, inte ett förfarande att följa slaviskt. Kontrollera ägarens aktuella vägledning, inklusive för ITIL 5, innan du citerar den som aktuell (se ämne 1.3 — ITIL 5).

**Förbättringsbacklogg.** En enda, ordnad lista över förbättringsidéer, var och en med en ägare, en förväntad nytta och en status. Wikipedia beskriver backloggar. Källor omfattar incidentgranskningar, retrospektiv, användaråterkoppling, revisioner och personalens förslag. Ordningen bestäms av förväntat värde och insats, med utrymme för snabba vinster.

**Skyddad kapacitet.** En andel av tiden reserverad för förbättring, till exempel 10 eller 20 procent, synlig i planer. Utan den konkurrerar förbättring med brådskande arbete och förlorar. Ett team som inte kan skydda någon kapacitet bör säga det öppet och fråga vad ledningen skulle sluta göra.

**Experiment.** Behandla varje ändring som ett test med en hypotes: "Om vi gör X förväntar vi oss Y, mätt med Z inom N veckor." Wikipedia beskriver experiment och hypotes. Ett litet experiment begränsar risken för en dålig ändring och lär något oavsett utfall.

**Mått och baslinjer.** För att veta om en ändring hjälpte behöver du veta var du började. Registrera baslinjemåttet före ändringen och kontrollera det efteråt. Mät det som betyder något för användare och team och säg hur varje mått kan vilseleda. Se boken *Service Management Metrics*.

**Retrospektiv.** Regelbundna möten där ett team ser tillbaka på hur det arbetat och väljer vad som ska ändras. Wikipedia beskriver retrospektiv. Om ert team väljer att använda dem, se till att resultaten går till backloggen med ägare. Ett retrospektiv som ger en lista ingen agerar på är sämre än inget.

**Rotorsak och lärande.** Incident- och problemgranskningar ger förbättringsidéer. Se ämne 3.3 — Problemhantering. Revisioner, kundåterkoppling och jämförelse med andra (benchmarking) ger fler. Wikipedia beskriver benchmarking.

**Kvalitetsledningstraditioner.** Total kvalitetsstyrning, Six Sigma med sin DMAIC-cykel (definiera, mäta, analysera, förbättra, styra) och lean bidrar alla med metoder. Wikipedia beskriver var och en. Använd den lättaste metod som passar: ett litet teams justering behöver inget formellt Six Sigma-projekt.

**Ägarskap.** Varje förbättring har en ägare som ansvarar för att pröva den och rapportera resultatet. En person eller en liten grupp äger backloggen och dess ordning. I ITIL 4 är ständig förbättring allas uppgift, med en samordnare.

**Fira och dela.** Dela vad som prövades, inklusive misslyckanden. Uppmärksamma förbättringar som människor gjorde och tala om för dem som föreslog dem vad som hände med deras idé. Det håller idéerna kommande.

**Förbättring på olika nivåer.** Förbättring sker i ett teams dagliga arbete, i en tjänst, i en praktik och i hela organisationen. Rikta in dem: ändringar på teamnivå bör inte undergräva mål på tjänstenivå. Se ämne 1.4 — Tjänstevärdesystemet.

**Hur linserna passar in.** Ständig förbättring är den agila linsen i sin renaste form: små steg, återkoppling och lärande. AI kan hitta kandidatförbättringar i data och skriva utkast till experiment, under granskning. Automatisering tar över de repeterade uppgifter som förbättring identifierar. Analys mäter effekt.

## Bra arbetssätt

1. **För en synlig förbättringsbacklogg.** Samla idéer från varje källa på ett ställe. Gör den öppen för teamet och för intressenter och håll den tillräckligt kort för att vara verklig.
2. **Utse en ägare för backloggen och för varje punkt.** Backloggens ägare ordnar punkter och håller dem i rörelse; varje punkt har en person som ska pröva den.
3. **Skydda kapacitet.** Reservera en andel av varje cykel för förbättring och visa den i planen. Rapportera när den skärs och varför.
4. **Välj små, snabba ändringar.** Föredra punkter som kan prövas inom dagar eller ett par veckor. Dela upp stora idéer i steg som kan testas separat.
5. **Ange förväntningen innan ni börjar.** Skriv vad ni förväntar er ska hända, hur ni mäter det och när ni kontrollerar. Registrera baslinjen.
6. **Kontrollera och besluta.** Titta ärligt på resultatet vid granskningsdatumet. Behåll, justera eller backa ändringen och skriv ned varför.
7. **Slut loopen med människor.** Tala om för dem som föreslog en punkt vad som hände. Tacka dem och dela vad ni lärde er.
8. **Använd data och användare.** Titta på mått och fråga de berörda. Var uppmärksam på mått som är lätta att flytta utan att hjälpa någon.
9. **Lär av misslyckanden och incidenter.** För in granskningar i backloggen, med åtgärder som har ägare och datum. Se ämne 3.3 — Problemhantering.
10. **Se över själva förbättringssystemet.** Fråga då och då om processen hjälper: hur många punkter som slutförs, hur lång tid de tar och om människor fortfarande föreslår idéer. Ändra den om den inte gör det.

## Frågor att diskutera i teamet

**Vilka förbättringsidéer hade vi förra kvartalet, och vad hände med var och en?**
Samla dem. Räkna med många förlorade idéer. Fråga vad som stoppade dem. Fördjupa genom att skapa en lista och välja de tre första punkterna.

**Hur mycket av vår tid är verkligen skyddad för förbättring, och vem försvarar den?**
Be om siffrorna. Räkna med lite eller inget. Fråga vad vi skulle sluta med för att skapa utrymmet. Fördjupa genom att komma överens om en liten andel, till exempel en halv dag i veckan, och vem som skyddar den.

**Vilken var den senaste ändring vi gjorde som vi sedan backade, och vad lärde vi oss?**
Det här normaliserar misslyckande. Räkna med berättelser om ändringar som inte fungerade. Leta efter lärande. Fördjupa genom att komma överens om att återgång är ett normalt utfall av ett experiment.

**Hur vet vi att vår senaste förbättring faktiskt hjälpte?**
Fråga vad som mättes före och efter. Räkna med "det kändes bättre". Fördjupa genom att välja en pågående förbättring och komma överens om en baslinje och ett granskningsdatum.

**Var lägger vi förbättringsinsats som ingen användare eller kollega skulle märka?**
Det här kontrollerar insatsens värde. Fråga vem som har nytta av varje punkt. Fördjupa genom att välja en punkt att släppa.

**Hur kunde AI hjälpa oss hitta och testa förbättringar, och hur kontrollerar vi att den har rätt?**
AI kan hitta mönster i ärenden och föreslå experiment. Den kan också föreslå sådant som bara ser lovande ut. Fråga vem som äger användningen och hur förslag testas. Fördjupa genom att pröva AI-föreslagna idéer genom samma experimentprocess som vilken annan.

## I praktiken: ett exempel på tjänstehantering

Ett landstings team för bostadsreparationer hanterar omkring 1 200 reparationsbeställningar i månaden. Personalen klagar rutinmässigt på bortkastad insats: hyresgäster som ringer upprepade gånger för uppdateringar, entreprenörer som dyker upp utan tillträde och formulär som studsar mellan tre system. Teamet har hållit retrospektiv i ett år och har en stor fil med anteckningar, men lite har förändrats.

Teamledaren ber teamet välja ett förbättringsområde för ett försök på sex veckor. De väljer upprepade samtal från hyresgäster som frågar om reparationens status, vilket utgör ungefär en femtedel av samtalen. Hon skapar en förbättringsbacklogg, med början i 14 punkter från retrospektivanteckningarna, och ber teamet poängsätta var och en efter förväntat värde och insats. De tar de tre främsta. Den första är att skicka ett sms till hyresgästen när en tid bokas och dagen före. Den andra är att lägga till entreprenörens namn och telefonnummer i meddelandet. Den tredje är att registrera en baslinje av upprepade samtal per vecka.

För varje punkt skriver teamet en förväntning: "Sms kommer att minska upprepade statussamtal med en fjärdedel inom fyra veckor." Ledaren reserverar två eftermiddagar i månaden från det planerade arbetet, där tjänstechefen går med på att skjuta upp en lågprioriterad rapport. Efter sex veckor minskar upprepade samtal med ungefär en femtedel, inte en fjärdedel. Punkten med entreprenörens namn har ingen mätbar effekt och släpps. En ny idé växer fram ur samtalen: hyresgäster vill boka om utan att ringa. Den går in i backloggen.

Det som förändras: teamet har sett en förbättring komma ur sina egna idéer, och människor föreslår fler. Det som förblir svårt: de två eftermiddagarna skars två gånger när akuta reparationer ökade kraftigt; sms-en beror på att entreprenörer uppdaterar register i tid, vilket de inte alltid gör; och baslinjen för upprepade samtal kommer från en samtalslogg som teamet vet är ofullkomlig. Ledaren rapporterar nedskärningarna till tjänstechefen och håller siffrorna synliga.

## Fyra perspektiv

### Produkt- och leveransteam

För en förbättringslista för produkten och dess pipeline och avsätt kapacitet för den. Behandla incidenter, supportfrågor och leveransförseningar som källor till idéer och mät effekten av ändringar.

### Tjänste- och driftsteam

Fånga det ni ser: upprepade kontakter, kringgåenden och långsamma steg. Pröva små ändringar och dela resultat. För in användaråterkoppling i backloggen.

### Ledning och styrning

Skydda förbättringskapacitet och fråga vad som har förändrats på grund av den. Leta efter belägg för effekt och fira lärande såväl som framgång. Belöna inte antalet idéer eller ändringar.

### Kunder och användare

Du är en källa till förbättringar. Tala om för leverantören vad som inte fungerar och vad som skulle hjälpa, och räkna med att få höra vad som hände med ditt förslag.

## Agilitet, AI, automatisering och analys

### Agilitet

Ständig förbättring är hjärtat i agil praktik: reflektera, justera och leverera små förändringar med intressenter. Se upp: om ert team väljer att använda retrospektiv, se till att deras resultat landar i backloggen och blir gjorda; om de inte gör det, ändra metoden.

### AI

AI kan hitta mönster i ärenden och återkoppling, föreslå kandidatexperiment och skriva utkast till sammanfattningar av resultat, med en ägare och mänskligt omdöme. Se upp: AI kan föreslå rimliga förbättringar som data inte stöder; testa dem som vilken annan idé. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera de repeterade uppgifter som förbättringsarbetet identifierar samt insamlingen av baslinje- och resultatdata för experiment. Se upp: automatisering kan låsa in en process innan den har förbättrats; förenkla först. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Använd baslinjer, trender och jämförelser före och efter, med uppmärksamhet på brus och på andra ändringar som skedde samtidigt. Se upp: en kort jämförelse före och efter kan vilseleda, och mått kan manipuleras när de blir mål; kombinera data med användaråterkoppling. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Idéer utan ägare.** Listan växer och ingenting händer. Tilldela ägare och ordna listan.
- **Ingen skyddad kapacitet.** Brådskande arbete trycker undan förbättring. Reservera tid och försvara den.
- **Stora förbättringsprogram.** Förändringen är långsam och nyttan oklar. Föredra små experiment.
- **Ingen baslinje.** Ingen vet om ändringen hjälpte. Registrera före och kontrollera efter.
- **Retrospektiv utan handling.** Människor slutar delta. Skicka resultat till backloggen och gör dem.
- **Framgångsteater.** Bara vinster rapporteras. Dela misslyckanden och lärande.
- **Mått som mål.** Siffror rör sig och arbetet förbättras inte. Para mått med återkoppling.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Backlogg | Idéer i huvuden | En lista finns | En ägd, ordnad backlogg med synlig status | Backloggens kvalitet och flöde granskas | Backloggar länkade över team och tjänster |
| Kapacitet | Ingen | Enstaka tid | Skyddad andel kapacitet | Kapacitetsanvändning granskas mot resultat | Kapacitet planeras över portföljen |
| Experiment | Ändringar görs utan kontroller | Några baslinjer | Förväntning, mått och granskningsdatum för varje ändring | Resultat analyseras och delas | Experiment samordnas över team |
| Lärande | Förloras | Anteckningar | Fynd delas och används i nästa cykel | Lärande mäts | Lärande driver strategi och partnerskap |

## Checklista

- [ ] Vi har en synlig förbättringsbacklogg med ägare.
- [ ] En andel av kapaciteten är skyddad för förbättring.
- [ ] Varje ändring har en förväntning, en baslinje, ett mått och ett granskningsdatum.
- [ ] Vi behåller, justerar eller backar ändringar utifrån belägg.
- [ ] Människor som föreslår idéer får veta vad som hände med dem.
- [ ] Incident- och problemgranskningar matar backloggen.
- [ ] Vi delar misslyckanden och lärande.
- [ ] Vi ser över själva förbättringsprocessen.

## AI-prompter

**Ordna en backlogg för diskussion.**

```text
Here is our improvement backlog with a short description of each item, the people affected, and a rough effort estimate: [paste].
Propose an order using expected value and effort as stated, show your reasoning for each item, and list items where the description is too vague to judge. Do not invent benefits or effort.
List what you are unsure of.
```

**Gör en idé till ett experiment.**

```text
Our idea: [describe]. Our current baseline: [describe or write "unknown"]. The people affected: [list].
Write an experiment plan with a hypothesis, a measure, how the measure could mislead, how long to run it, who to ask for feedback, and what would make us reverse it. Do not predict the result.
List what you are unsure of.
```

**Sammanfatta experimentresultat.**

```text
Here is the data before and after our change: [paste]. Here is feedback from the people affected: [paste].
Summarize what changed, what did not, other things that changed at the same time, and what we cannot conclude. Do not state that the change caused the result unless the data support it.
List what you are unsure of.
```

## AI-färdigheter

- [kaizen](../../../../skills/kaizen/SKILL.md): använd för att planera och driva små förbättringsexperiment.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): använd för att genomföra reflektioner som ger åtgärder.
- [dmaic](../../../../skills/dmaic/SKILL.md): använd för större, databaserade förbättringsprojekt.
- [six-sigma](../../../../skills/six-sigma/SKILL.md): använd när variation och kvalitet är huvudproblemet.
- [futurespective](../../../../skills/futurespective/SKILL.md): använd för att blicka framåt såväl som bakåt.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av ständig förbättring och dess modell.
- W. Edwards Deming, *Out of the Crisis* (1982): grunderna i kvalitetsledning och förbättringscykeln.
- Wikipedia, "Continual improvement process" och "PDCA": översikter av cykeln.
- Wikipedia, "Kaizen": den japanska traditionen av små, ständiga förändringar.

## Referenser

1. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
2. PDCA — Wikipedia — https://en.wikipedia.org/wiki/PDCA
3. W. Edwards Deming — Wikipedia — https://en.wikipedia.org/wiki/W._Edwards_Deming
4. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
5. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
6. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
7. Experiment — Wikipedia — https://en.wikipedia.org/wiki/Experiment
8. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
9. Six Sigma — Wikipedia — https://en.wikipedia.org/wiki/Six_Sigma
10. Total quality management — Wikipedia — https://en.wikipedia.org/wiki/Total_quality_management
11. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
