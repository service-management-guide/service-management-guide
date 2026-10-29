# Flöde och kanban

**Flöde är hur smidigt arbete rör sig från beställning till klart, och att visualisera arbete, begränsa pågående arbete och mäta hur lång tid arbete tar är de praktiker som förbättrar det; de passar avbrottsdrivna tjänsteteam väl, och Kanban är ett namngivet sätt att tillämpa dem.**

## Varför det här är viktigt

Tjänsteteam har alltid fullt upp. Beställningar, incidenter, ändringar och förbättringar kommer utan förvarning, och människor växlar mellan dem hela dagen. Teamet känner sig produktivt, men kunderna väntar länge på att något ska bli klart, och ingen kan säga varför.

Flödestänkande förklarar glappet. Arbete som är påbörjat men inte avslutat står i köer, och i de flesta team är tiden som läggs på att vänta mycket längre än tiden som läggs på att arbeta. Att lägga till fler människor eller påbörja fler punkter hjälper inte, och gör det ofta värre, eftersom mer pågående arbete betyder längre köer. Botemedlet är att se arbetet, begränsa hur mycket som pågår samtidigt och mäta hur lång tid punkter tar från beställning till klart.

De idéerna kommer från lean-tillverkning, och det mest kända verktyget är kanbantavlan. Många agila team använder Kanban eller en tavla inspirerad av det. Den här guiden behandlar Kanban som ett val bland flera. Om ert team väljer att använda Kanban hjälper idéerna här; om inte gäller ändå principerna om synlighet, gränser och flödesmätning.

## Grundbegrepp

**Flöde.** Arbetets rörelse genom ett system. Ett system med bra flöde levererar punkter jämnt och förutsägbart, med korta väntetider. Dåligt flöde visar sig som långa och varierande leveranstider, ansamlingar före vissa steg och frekvent skyndande.

**Pågående arbete (WIP).** Antalet punkter som är påbörjade men inte avslutade. Wikipedia-artikeln om pågående arbete beskriver idén inom tillverkning. I kunskaps- och tjänstearbete är WIP ofta osynligt, eftersom punkter finns i inkorgar, chatttrådar och människors huvuden. Att göra det synligt är första steget.

**Littles lag.** För ett stabilt system är den genomsnittliga tiden en punkt tillbringar i systemet lika med det genomsnittliga antalet punkter i systemet delat med den genomsnittliga takt med vilken de lämnar det. Om ert team slutför fem punkter i veckan och har 25 pågående tar den genomsnittliga punkten omkring fem veckor. För att korta tiden utan att arbeta fortare, minska antalet pågående.

**Ledtid och cykeltid.** Ledtid är hur länge en kund väntar från beställning till leverans. Cykeltid är hur lång tid en punkt tar när arbetet väl har börjat. Definitionerna varierar mellan team, så skriv ned era. Genomströmning är antalet punkter som slutförs under en period.

**Kanbanmetoden.** Kanban betyder "skylt" eller "kort" på japanska. Toyotas produktionssystem, utvecklat tillsammans med Taiichi Ohno, använde kort för att signalera när fler delar behövdes, så att produktionen drogs av efterfrågan. David J. Anderson anpassade dessa idéer för kunskapsarbete på 2000-talet som Kanbanmetoden, som Wikipedia beskriver. Dess kärnpraktiker omfattar att visualisera arbete, begränsa WIP, hantera flöde, göra regler explicita, införa återkopplingsloopar och förbättra gemensamt.

**Tavlan.** En kanbantavla visar arbetspunkter som kort i kolumner som representerar steg, till exempel "att göra", "pågår", "granskning" och "klart". Tavlor kan vara fysiska eller digitala. En tavla definierar inte en process; den visar den ni har.

**WIP-gränser.** Ett tak för antalet punkter som tillåts i ett steg eller på tavlan. När gränsen nås påbörjar teamet inte nytt arbete; det hjälper till att få något klart. Det känns långsamt i början och gör leveransen snabbare och jämnare.

**Tjänsteklasser.** Alla punkter ska inte vänta i samma kö. Ett team kan behandla brådskande punkter, som större incidenter, som en "skynda"-klass med en sträng gräns, punkter med fast datum som en annan klass och vanliga punkter som standard. Klasser gör avvägningar explicita och hindrar att varje punkt förklaras brådskande.

**Flaskhalsar.** Ett steg som begränsar systemets genomströmning. Begränsningsteorin, utvecklad av Eliyahu Goldratt, råder att hitta flaskhalsen, se till att den aldrig står stilla och förbättra den, eftersom det inte hjälper att snabba upp något annat. En WIP-gräns avslöjar ofta flaskhalsen som den kolumn där arbete hopar sig.

**Kumulativt flödesdiagram.** Ett diagram som visar antalet punkter i varje tillstånd över tid. Bredare band avslöjar köer som byggs upp. Det är ett snabbt sätt att se om flödet är stabilt.

**Lämpligt för tjänstearbete.** Tjänsteteam hanterar en ström av olika sorters arbete med oförutsägbar ankomst, vilket passar flödesmetoder bättre än fasta planeringscykler. Om ert team väljer att använda sprintar hjälper flödesmått ändå till att se vad som händer inom dem.

**Hur linserna passar in.** Agil praktik efterfrågar kontinuerlig leverans och förbättring; flödesmått visar om det sker. AI kan sammanfatta tavlan eller föreslå kategorier för triage, under granskning. Automatisering kan uppdatera kort och upprätthålla gränser. Analys tillhandahåller måtten, med den vanliga risken att de blir mål.

## Bra arbetssätt

1. **Visualisera allt arbete.** Lägg alla sorters arbete på tavlan: incidenter, beställningar, ändringar, förbättringar och oplanerade avbrott. En tavla som bara visar "projekt"-arbete döljer belastningen.
2. **Definiera kolumnerna utifrån den verkliga processen.** Skapa kolumner som motsvarar hur arbete faktiskt rör sig, inklusive vänteläge som "väntar på kund". Vänteläge är där fördröjningen gömmer sig.
3. **Sätt WIP-gränser och respektera dem.** Börja med en gräns något under det nuvarande antalet och justera efter observation. När en kolumn är full, hjälp till att flytta punkter framåt innan du påbörjar något nytt.
4. **Gör regler explicita.** Skriv ned på eller bredvid tavlan vad "redo" och "klart" betyder, hur punkter prioriteras och vem som får skynda. Oskrivna regler skapar gräl.
5. **Använd tjänsteklasser medvetet.** Definiera ett litet antal klasser, med egna gränser och förväntade tider. Se regelbundet över skynda-klassen: om den alltid är full är systemet överbelastat eller prioriteringarna oklara.
6. **Mät ledtid, cykeltid och genomströmning.** Redovisa dem som fördelningar, till exempel "85 procent av punkterna blir klara inom 9 dagar", inte bara som medelvärden. Fördelningar visar den risk kunderna faktiskt möter.
7. **Titta på de äldsta punkterna.** Gå vid ett regelbundet möte igenom punkter som varit pågående längst. Gamla punkter signalerar oftast ett blockerat beroende eller en oklar ägare.
8. **Hitta och förbättra flaskhalsen.** När arbete hopar sig på ett ställe, fråga vad som begränsar det och behandla det som den prioriterade förbättringen.
9. **Gå igenom tavlan tillsammans.** Ett kort, regelbundet samtal vid tavlan, stående eller inte, ger teamet en gemensam bild. Fokusera på blockerade och åldrande punkter, inte på rapportering.
10. **Låt tavlan utvecklas.** Ändra kolumner, gränser och regler allt eftersom ni lär er. Om ert team väljer att använda Kanban, behandla det som en startpunkt ni anpassar.

## Frågor att diskutera i teamet

**Hur mycket arbete har vi pågående just nu, och hur vet vi det?**
Team blir ofta förvånade över siffran när de räknar. Be var och en lista vad de arbetar med, inklusive avbrott. Räkna med en lång lista och några punkter som ingen minns. Fördjupa genom att komma överens om en första gräns, även om den är grov.

**Var väntar arbetet längst, och på vem väntar det?**
Väntan är den främsta källan till fördröjning. Typiska svar är godkännanden, en specialist, kunden eller en leverantör. Använd ett verkligt exempel med datum. Fördjupa genom att välja en väntan och fråga vem som kunde korta den.

**Vilka sorters arbete ska aldrig vänta i den vanliga kön?**
Det här inför tjänsteklasser. Större incidenter och juridiska tidsfrister är vanliga svar, och människor kan lägga till sina egna favoriter. Pressa på för kriterier. Fördjupa genom att komma överens om en kort lista och en gräns för skyndat arbete.

**Vad händer när tavlan är full och en ny beställning kommer?**
Det här prövar disciplin. Team påbörjar ofta den nya punkten ändå. Fråga vad regeln borde vara och vem som beslutar. Fördjupa genom att komma överens om en regel för varje typ av beställning.

**Vilket mått skulle tala om för oss att flödet förbättrades, och hur kunde det feltolkas?**
Välj ett mått, till exempel den tid inom vilken 85 procent av punkterna blir klara, och diskutera hur det kunde manipuleras, till exempel genom att dela upp punkter eller stänga och återöppna dem. Fördjupa genom att komma överens om hur måttet kontrolleras mot verkligheten.

**Var kunde automatisering eller AI hjälpa flödet utan att dölja problem?**
Automatiska kortuppdateringar och föreslagna kategorier kan spara tid. De kan också maskera en avstannad punkt som "pågående". Fråga vem som äger varje automatisk regel och hur fel upptäcks. Fördjupa genom att välja en lågriskig användning och ett granskningsdatum.

## I praktiken: ett exempel på tjänstehantering

Ett sjukhus supportteam för kliniska system hanterar omkring 100 beställningar i veckan: kontoändringar, rapportbeställningar, mindre rättningar och brådskande fel. Teamet på sju personer använder en e-postinkorg och ett ärendeverktyg, och läkare och sjuksköterskor klagar på att beställningar "försvinner".

Teamledaren bygger en fysisk tavla i teamrummet med ett kort för varje öppen punkt, omkring 70 totalt. Räkningen visar att varje person har i genomsnitt tio punkter pågående. Ledaren lägger till kolumner för "väntar på klinikern" och "väntar på leverantören", som rymmer 25 av de 70 punkterna. Teamet sätter en gräns på fyra pågående per person och två skyndade punkter åt gången. De kommer överens om regler: brådskande fel som påverkar patientvården går till skynda-banan och tas först; allt annat är först in, först ut.

Efter två månader sjunker mediantiden för att slutföra en beställning från 12 till 7 arbetsdagar, och den äldsta öppna punkten är 20 dagar gammal i stället för 70. Kolumnen "väntar på klinikern" växer, och teamet inser att många beställningar saknar information. Det lägger till ett kort formulär som ställer de ofta saknade frågorna.

Det som förändras: kliniker kan se var en beställning befinner sig, och teamet lägger mindre tid på att besvara "var är den?"-mejl. Det som förblir svårt: punkter som väntar på leverantören tar fortfarande veckor och teamet kan inte styra dem; skynda-banan används ibland för beställningar som bara är viktiga för en ledande person; och det digitala ärendeverktyget och den fysiska tavlan glider isär när folk glömmer att uppdatera den ena. Teamet ser över reglerna varje månad och planerar att flytta tavlan in i verktyget.

## Fyra perspektiv

### Produkt- och leveransteam

Använd tavlan för att se allt arbete, inklusive operativa avbrott, och begränsa pågående arbete så att funktioner och rättningar blir klara. Dela flödesmått med driften för att hitta var ändringar väntar.

### Tjänste- och driftsteam

Ni är flödesmetodernas naturliga användare. Gör hela strömmen synlig, kom överens om tjänsteklasser och använd gränser för att hindra avbrott från att dränka det planerade arbetet. Ta med belägg för fördröjningar till dem som kan ta bort dem.

### Ledning och styrning

Be om flödesmått som fördelningar och titta på de äldsta punkterna. Undvik att pressa in mer arbete i ett fullt system. Stöd teamen i att ändra regler snarare än att kräva mer output.

### Kunder och användare

Du bör kunna se var din beställning är, hur lång tid sådana beställningar vanligtvis tar och vad teamet väntar på. Tala om för teamet när något är brådskande och varför, eftersom ett tydligt skäl hjälper dem att avgöra.

## Agilitet, AI, automatisering och analys

### Agilitet

Flöde stöder kontinuerlig leverans och förbättring genom att blotta fördröjningar och uppmuntra små, avslutade punkter. Se upp: en tavla är inte i sig ett förbättringssystem; använd den för att utlösa regelbunden översyn med intressenter.

### AI

AI kan sammanfatta tavlan, föreslå kategorier för nya punkter och flagga åldrande eller blockerade punkter, med en person som granskar och en ägare för varje regel. Se upp: en AI-klassificerare som gissar fel skickar arbete till fel kö; följ andelen rättelser. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera skapandet av kort från ärendeverktyget, uppdatera tillstånd utifrån händelser och varna när WIP-gränser överskrids. För logg. Se upp: automatiska tillståndsändringar kan få flödet att se bättre ut än det är; ta stickprov av verkliga punkter för att kontrollera. Se ämne 6.2 — Arbetsflödesautomatisering och orkestrering.

### Analys

Använd ledtidsfördelningar, genomströmning, åldring av pågående arbete och kumulativa flödesdiagram. Se upp: vart och ett av dessa kan manipuleras genom att dela, slå ihop eller märka om punkter, och att jämföra team bortser från skillnader i arbetet; använd dem för att förstå ert eget system. Se ämne 7.6 — Process- och värdeströmsanalys och boken *Service Management Metrics*.

## Vanliga felmönster

- **En tavla utan gränser.** Kort hopar sig och ingenting ändras. Sätt en gräns och respektera den.
- **Bara planerat arbete på tavlan.** Avbrott är osynliga och belastningen underskattas. Visa alla typer av arbete.
- **Allt skyndas.** Snabbfilen täpps till. Begränsa den och se över varje användning.
- **Enbart medelvärden.** Medelvärdet döljer långa fördröjningar. Redovisa fördelningar och de äldsta punkterna.
- **Manipulation av måtten.** Punkter delas upp eller stängs i förtid. Kontrollera mått mot verkliga punkter.
- **Att se Kanban som målet.** Teamet kopierar en tavla och ignorerar flödet. Titta på leveranstiderna och väntetiderna.
- **Att optimera en icke-flaskhals.** Ansträngningen går till fel steg. Hitta var arbete hopar sig.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Synlighet | Arbete i inkorgar och huvuden | En tavla för planerat arbete | Allt arbete synligt med explicita regler | Tavla och verktyg konsekventa och betrodda | Flödet synligt över team och leverantörer |
| WIP-kontroll | Inga gränser | Informella gränser | Överenskomna gränser och regler för undantag | Gränser justeras utifrån data | Gränser samordnas över beroende team |
| Flödesmått | Inga | Antal punkter | Ledtid och genomströmning som fördelningar | Mått används för att hitta flaskhalsar | Mått delas och agerar man på över systemet |
| Tjänsteklasser | En kö | Brådskande eller inte | Definierade klasser med gränser | Klasser granskas med belägg | Klasser avstämda över team och avtal |

## Checklista

- [ ] Alla sorters arbete, inklusive avbrott, finns på tavlan.
- [ ] Kolumnerna inkluderar vänteläge.
- [ ] Vi har WIP-gränser och en regel för vad som gäller när det är fullt.
- [ ] Regler för redo, klart, prioritet och skynda är nedskrivna.
- [ ] Vi mäter ledtid, cykeltid och genomströmning som fördelningar.
- [ ] Vi går regelbundet igenom de äldsta punkterna.
- [ ] Vi känner vår nuvarande flaskhals och har en förbättring för den.
- [ ] Vi kontrollerar mått mot verkliga punkter för att upptäcka manipulation.

## AI-prompter

**Hitta mönster i tavlans data.**

```text
Here is an export of our items with created, started, and finished dates and state changes: [paste data with names removed].
Calculate the median and 85th percentile lead time, list the five oldest open items, and note where items spend the most time. Do not infer causes. Mark any data problems you notice.
List what you are unsure of.
```

**Föreslå tjänsteklasser.**

```text
Our team handles these kinds of work: [list with typical urgency and volume].
Propose up to four classes of service, a limit for each, and a rule for entry to the fastest class. Explain the trade-offs of each choice and flag assumptions.
List what you are unsure of.
```

**Förbered en tavlagenomgång.**

```text
Below is the current state of our board: [paste columns, items, ages, and blockers].
List the five items I should discuss first and why, and three questions to ask about each. Do not assign blame or propose solutions.
List what you are unsure of.
```

## AI-färdigheter

- [kanban](../../../../skills/kanban/SKILL.md): använd för att sätta upp och driva en tavla med gränser och regler.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): använd för att analysera väntetider och överlämningar.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): använd för att följa flödet över team.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): använd för att definiera flödesmått med deras risker.

## Viktiga källor

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010): källan till metoden för kunskapsarbete.
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): ursprunget till kanbankortet.
- Wikipedia, "Kanban (development)": en översikt av metoden.
- Wikipedia, "Little's law": formeln bakom WIP-gränser.

## Referenser

1. Kanban — Wikipedia — https://en.wikipedia.org/wiki/Kanban
2. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
3. Work in process — Wikipedia — https://en.wikipedia.org/wiki/Work_in_process
4. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
5. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
6. Cumulative flow diagram — Wikipedia — https://en.wikipedia.org/wiki/Cumulative_flow_diagram
7. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
8. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
9. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
10. Taiichi Ohno — Wikipedia — https://en.wikipedia.org/wiki/Taiichi_Ohno
