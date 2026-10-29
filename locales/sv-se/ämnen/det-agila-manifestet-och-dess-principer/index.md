# Det agila manifestet och dess principer

**Det agila manifestets fyra värderingar och tolv principer skrevs 2001 för programvaruteam, och de fungerar även för att driva levande tjänster när de läses som en uppmaning till kontinuerligt intressentdeltagande, ständig förbättring och kontinuerlig leverans av fungerande förändring snarare än som ett recept på möten.**

## Varför det här är viktigt

Agilt är ett av de mest använda och mest missbrukade orden i tekniskt arbete. Vissa använder det för en uppsättning ceremonier, andra för fart och åter andra som en ursäkt för att hoppa över planering och dokumentation. I tjänstehantering kostar förvirringen mer, eftersom tjänsteteam ofta får veta att de måste bli "agila" utan att någon säger vad det betyder för en jourlista, en incident eller ett servicenivåavtal.

Manifestet är kort, och att läsa det igen är det billigaste sättet att skära genom förvirringen. Dess värderingar och principer säger ingenting om sprintar, dagliga möten eller särskilda tavlor. De talar om människor, fungerande resultat, samarbete med kunder och att svara på förändring. Det gör dem till ett användbart test för varje praktik ett tjänsteteam antar: hjälper det här oss att involvera våra intressenter, lära oss och leverera förändring säkert och kontinuerligt?

Det här ämnet återger värderingarna och principerna för tjänstearbete, noterar vad manifestet inte säger och länkar dem till praktikerna i resten av del 2. ITIL 4:s vägledande principer motsvarar nära dessa idéer (se ämne 1.5 — Vägledande principer i ITIL).

## Grundbegrepp

**Ursprung.** I februari 2001 möttes sjutton programvarupraktiker i Utah och skrev "Manifesto for Agile Software Development". Det var ett uttalande om gemensamma värderingar från människor som använde olika metoder, bland andra extreme programming, Scrum och andra. Wikipedia-artikeln om agil programvaruutveckling ger historien och texten.

**Fyra värderingar.** Manifestet säger att även om det finns ett värde i det som står till höger värderar vi det som står till vänster mer:

- Individer och interaktioner framför processer och verktyg
- Fungerande programvara framför omfattande dokumentation
- Kundsamarbete framför kontraktsförhandling
- Att svara på förändring framför att följa en plan

Det säger inte att det som står till höger är värdelöst. Det säger vilket håll man ska luta åt när de krockar.

**Tolv principer.** Manifestets principer, omskrivna här, säger: tillfredsställ kunden genom tidig och kontinuerlig leverans av värdefull programvara; välkomna ändrade krav, även sent; leverera fungerande programvara ofta, med en förkärlek för kortare tidsskalor; låt verksamhetsföreträdare och utvecklare arbeta tillsammans dagligen; bygg projekt kring motiverade individer och lita på dem; föredra samtal ansikte mot ansikte; se fungerande programvara som det främsta måttet på framsteg; håll en hållbar takt; ägna kontinuerlig uppmärksamhet åt teknisk briljans och god design; värdera enkelhet, konsten att maximera mängden arbete som lämnas ogjort; låt självorganiserande team skapa de bästa designerna; och reflektera regelbundet över hur man blir effektivare, och justera sedan.

**Återgivet för levande tjänstearbete.** För ett tjänsteteam blir "fungerande programvara" en fungerande tjänst: en tjänst som gör det kunderna behöver, i dag. "Kunder" omfattar användare, sponsorer och de som förlitar sig på tjänsten längre ned i kedjan. "Leverans" omfattar att släppa en ändring, men också att hantera en beställning eller åtgärda ett fel. "Dokumentation" spelar fortfarande roll, för körhandböcker och kunskap, men i den mängd som hjälper nästa person. "Kontraktsförhandling" förekommer i servicenivåavtal och leverantörsavtal: värderingen säger att samtalet med kunden ska fortsätta vid sidan av avtalet.

**Vad manifestet betonar.** Läst genom en tjänstelins hamnar tyngdpunkten på kontinuerligt intressentdeltagande (kunder och leveranspersoner som arbetar tillsammans), ständig förbättring (regelbunden reflektion och justering), fortlöpande utveckling av tjänsten, en hållbar takt för dem som driver den, motiverade människor som man litar på att utföra arbetet och kontinuerlig leverans av fungerande förändring. Se ämne 2.2 — Kontinuerlig leverans.

**Vad det inte säger.** Det kräver inte sprintar, Scrum, Kanban, berättelsepoäng, ståmöten eller något särskilt verktyg. Dessa är specifika metoder, av vilka några beskrivs i den här guiden där det är relevant. Om ert team väljer att använda Scrum, sprintar eller Kanban kan de tjäna värderingarna; att anta dem gör inte i sig ett team agilt. Att behandla metoderna som agilitetens substans är ett vanligt misstag, ibland kallat cargo cult-praktik.

**Vad det inte säger om drift.** Manifestet skrevs om att bygga programvara. Det är tyst om jour, incidenthantering och servicenivåer. Att översätta det till dessa är ett omdöme, och den här guiden visar en läsning. Andra läsningar är möjliga, och du bör pröva dem mot dina egna belägg.

**Agilitet kontra kontroll.** Ett vanligt påstående är att agilitet och ITIL står i motsats. Manifestet motsäger inte kontroll. En ändring som är liten, testad och går att backa kan vara säkrare än en stor, vilket i sig är en form av kontroll. Spänningen är verklig där kontroller kräver tungt, manuellt, sällsynt godkännande, och svaret är att flytta kontrollen in i leveranspipelinen, inte att släppa den (se ämne 3.4 — Ändringsmöjliggörande).

**Hur linserna passar in.** Agilitet är den första av de fyra linserna. AI-assistenter kan skriva utkast, granska och sammanfatta, men värderingen "individer och interaktioner" påminner oss om att samtalet med kunden förblir mänskligt. Automatisering stöder "fungerande programvara" som levereras ofta. Analys stöder "reflektera och justera" genom att visa belägg för nästa ändring.

## Bra arbetssätt

1. **Pröva praktiker mot värderingarna.** För varje ceremoni, verktyg eller dokument, fråga vilken värdering det tjänar. Om svaret är ingen, sluta med det eller ändra det. Om ert team väljer att använda sprintar, Scrum eller Kanban, tillämpa samma test på varje inslag.
2. **Involvera intressenter kontinuerligt.** Låt en kund, användare eller dennes företrädare ha regelbunden kontakt med teamet, inte bara i början och slutet. Korta, täta samtal om den verkliga tjänsten slår långa granskningar av dokument.
3. **Leverera förändring i små delar.** Föredra en ändring som kan släppas och kontrolleras inom dagar framför en som väntar på en stor batch. Små ändringar är lättare att förstå, testa och backa.
4. **Låt fungerande tjänst vara måttet på framsteg.** Räkna det som körs och hjälper kunder, inte antalet avslutade uppgifter eller skrivna dokument. Se boken *Service Management Metrics* för mått och deras risker för manipulation.
5. **Skriv dokumentation som hjälper nästa person.** Håll körhandböcker, diagram och beslut korta och aktuella. Skär bort det som ingen läser och lägg till det någon behövde men inte hittade.
6. **Lita på motiverade människor och ge dem vad de behöver.** Sätt tydliga mål och ramar och låt sedan teamet avgöra hur. Ta bort hinder i stället för att lägga till kontrollpunkter.
7. **Skydda en hållbar takt.** Planera jour och förbättringsarbete så att människor kan hålla på i åratal. Hjältedåd är en varningssignal, inte en styrka.
8. **Reflektera regelbundet.** Schemalägg en kort, regelbunden översyn av hur teamet arbetar, till exempel efter incidenter och releaser, och agera på minst ett fynd varje gång. Om ert team väljer att använda retrospektiv, behandla deras resultat som en backlogg.
9. **Välkomna förändring och gör den billig.** Investera i tester, automatisering och tydlig design så att en sen ändring inte blir en kris. Fråga vad som skulle göra nästa ändring enklare.
10. **Håll det enkelt.** Leta efter den minsta lösning som möter behovet och ta bort arbete som inte tillför värde.

## Frågor att diskutera i teamet

**Vilken av de fyra värderingarna hedrar vi mest i praktiken, och vilken försummar vi?**
Team säger ofta "individer och interaktioner" medan de kör på ärenden och verktyg, eller "fungerande programvara" medan de dokumenterar tungt. Be om färska belägg för varje värdering. Svaren varierar med roll, så hör flera. Fördjupa genom att välja en värdering att stärka det här kvartalet.

**Vad ser våra kunder av vårt arbete mellan releaser eller mellan incidenter?**
Det här prövar kontinuerligt deltagande. Räkna med svar som "ingenting" eller "en månadsrapport". Fråga vad en kund skulle vilja se varje vecka. Fördjupa genom att ordna ett regelbundet, kort samtal med verkliga användare.

**Vilka av våra praktiker behåller vi för att "agilitet säger så", och vilken värdering tjänar var och en?**
Många team kör ritualer utan att veta varför. Fråga vad som skulle ändras om var och en upphörde. Lyssna efter ritualer som fyller kalendern och inte ger något. Fördjupa genom att pröva en förändring med ett granskningsdatum.

**Hur liten kan vår minsta släppbara ändring vara, och vad hindrar oss från att göra den?**
Det här utforskar batchstorlek. Vanliga hinder är manuell testning, godkännandesteg och delade miljöer. Be om ett konkret exempel. Fördjupa genom att välja ett hinder att ta bort.

**Var känns vår takt ohållbar, och vad är kostnaden?**
Jourtrötthet, ständiga avbrott och helgreleaser dyker upp här. Behandla svaren som data om systemet. Fördjupa genom att komma överens om en förändring som minskar belastningen och vem som kontrollerar att den fungerade.

**Var hindrar våra avtal och servicenivåavtal samarbete, och var använder vi dem som ursäkt?**
Båda förekommer. Vissa avtal begränsar verkligen vad som kan ändras; andra åberopas för att undvika ett samtal. Be om klausulen. Fördjupa genom att planera ett samtal med kunden eller leverantören om en begränsande bestämmelse.

## I praktiken: ett exempel på tjänstehantering

Ett regionalt bussbolags digitala team driver tidtabellsappen och realtidsflödet för ankomster. Ledningen tillkännager en övergång till "agilt" och beordrar sprintar, dagliga möten och ett nytt verktyg. Inom en månad är teamet upptaget med ceremonier, incidenthanteringen glider och driftchefen klagar på att ingenting har förbättrats.

Teamledaren ställer en annan fråga: vilka av manifestets värderingar saknar vi? Hon finner att teamet inte har någon regelbunden kontakt med trafikledningens personal som använder ankomstflödet, bara släpper ändringar en gång per kvartal och har en stor backlogg av önskemål som ingen kan ordna. Hon behåller det dagliga mötet, som teamet tycker är användbart, och släpper två ceremonier som duplicerar det. Hon lägger till ett veckovist 20-minuterssamtal med två personer från trafikledningen, börjar släppa små ändringar varje vecka med en kort automatiserad testsvit och ber teamet välja en förbättring från varje incidentgranskning.

Det som förändras: trafikledningens personal rapporterar problem tidigare, och en återkommande fördröjning i flödet åtgärdas på en vecka i stället för att vänta på nästa kvartalsrelease. Det som förblir svårt: den veckovisa releasen beror på en leverantör som styr formatet på fordonsdata och inte vill ändra sitt schema, teamets jourbelastning är fortfarande tung och vissa ledare ber fortfarande om en plan med fasta datum. Teamledaren håller dessa frågor på bordet vid den månatliga genomgången.

## Fyra perspektiv

### Produkt- och leveransteam

Använd värderingarna för att avgöra vad som ska behållas och vad som ska skäras bort. Arbeta ofta med verkliga användare, släpp små ändringar och se den körande tjänsten som en del av er produkt. Håll dokumentationen kort och aktuell.

### Tjänste- och driftsteam

Tillämpa värderingarna på hur ni hanterar incidenter, beställningar och ändringar: tala med de berörda, förbättra efter varje incident och skydda en hållbar takt. Erbjud er att delta i planeringen tidigt, så att driftens behov formar arbetet.

### Ledning och styrning

Påbjud inte ceremonier. Be om intressentdeltagande, små releaser och belägg för förbättring. Ange riktning och ramar och lita på att teamen väljer hur. Håll ett öga på takten: ihållande hjältedåd är en risk.

### Kunder och användare

Du är en del av teamets arbete. Ge regelbunden, ärlig återkoppling och räkna med att se förändringar komma i små delar. Tala om för teamet vad som betyder mest, och säg till när något de levererat inte hjälpte.

## Agilitet, AI, automatisering och analys

### Agilitet

Det här ämnet är grunden: kontinuerligt intressentdeltagande, ständig förbättring och kontinuerlig leverans av fungerande förändring. Se upp: metoderna är inte substansen; pröva varje praktik mot värderingarna.

### AI

AI-assistenter kan skriva utkast till användarberättelser, sammanfatta återkoppling och föreslå tester, med en person som granskar varje utdata. Värderingen "individer och interaktioner" betyder att samtalet med kunder förblir mänskligt. Se upp: AI-sammanfattningar av kundåterkoppling kan platta ut vad människor sa; läs ett urval av originalen. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera testning, byggande och driftsättning så att små, frekventa ändringar blir billiga och säkra, och för logg och återställning. Se upp: att automatisera en pipeline utan att teamet förstår vad den kontrollerar ger falsk trygghet; granska vad varje steg verifierar. Se ämne 6.4 — Pipelines och automatiserade ändringar.

### Analys

Använd data för att reflektera och justera: tid från idé till release, ändringsmisslyckanden, tid för att återställa och kundåterkoppling. Se upp: vart och ett av dem blir ett mål när de används för att betygsätta team, och team justerar då siffran i stället för arbetet; använd dem för att lära. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Ceremonier utan värderingar.** Teamet håller varje möte och ändrar ingenting. Fråga vilken värdering varje praktik tjänar.
- **Agilitet som enbart fart.** Trycket ökar, kvaliteten sjunker och människor går in i väggen. Skydda en hållbar takt och teknisk kvalitet.
- **Ingen dokumentation alls.** Kunskap finns i huvuden och jourhavande har det svårt. Håll korta körhandböcker och beslutsanteckningar.
- **Intressenter dyker bara upp vid granskning.** Överraskningar kommer sent. Involvera en användare varje vecka.
- **Att använda avtalet som sköld.** Ingen talar med kunden. Håll samtalet igång och ändra avtalet vid behov.
- **Att påbjuda metoder uppifrån.** Team följer till formen. Ge mål och ramar och låt teamen välja.
- **Att läsa manifestet som anti-kontroll.** Team släpper användbara kontroller. Bygg i stället in kontrollen i pipelinen.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Intressentdeltagande | Bara i början och slutet | Regelbundna granskningar | Veckovis kontakt med verkliga användare | Återkoppling mäts och agerar man på | Kunder och leverantörer involverade över team |
| Leverans av förändring | Stora, sällsynta releaser | Några mindre releaser | Små, frekventa, testade releaser | Ändringsflödet mäts och förbättras | Förändring levereras kontinuerligt över tjänster |
| Reflektion och förbättring | Efter kriser | Enstaka översyner | Regelbundna översyner med en backlogg | Resultat av förbättringar kontrolleras | Lärande delas över team |
| Takt och människor | Hjältedåd | Medvetenhet om överbelastning | Hållbar jour och arbetsbörda | Belastning mäts och balanseras | Arbetsbörda planeras över team |

## Checklista

- [ ] Vi kan ange de fyra värderingarna och de tolv principerna och säga vilka praktiker som tjänar vilka.
- [ ] En verklig användare eller kundföreträdare talar med teamet varje vecka.
- [ ] Vår minsta släppbara ändring levereras på dagar, inte månader.
- [ ] Vi räknar fungerande tjänst, inte uppgifter, som framsteg.
- [ ] Dokumentationen är kort, aktuell och läst.
- [ ] Vi håller en regelbunden översyn och agerar på minst ett fynd.
- [ ] Jour och arbetsbörda är hållbara.
- [ ] Kontroller är inbyggda i pipelinen där det går.

## AI-prompter

**Pröva en praktik mot värderingarna.**

```text
Our team practice: [describe the practice and how often it happens].
For each of the four Agile Manifesto values, say whether the practice appears to serve it, strain it, or is unrelated, and give one question to check with the team. Do not recommend dropping the practice.
List what you are unsure of.
```

**Gör om återkoppling till en kort lista för teamet.**

```text
Below is feedback from users of [service]: [paste feedback, with personal details removed].
Group it into up to six themes, give a count for each, and quote one short example for each theme exactly. Do not infer what users meant beyond the words.
List what you are unsure of.
```

**Skriv ett utkast till en enkelsidig anteckning om arbetsöverenskommelser.**

```text
Our team context: [team size, services, on-call pattern]. Our values we want to honor: [list].
Draft up to eight working agreements as short sentences, each tied to one Agile Manifesto value or principle. Avoid naming specific methods or tools unless I listed them.
List what you are unsure of.
```

## AI-färdigheter

- [agile-principles](../../../../skills/agile-principles/SKILL.md): använd för att tillämpa principerna på ett teams praktik.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): använd för att genomföra en reflektion som ger förbättringspunkter.
- [agile-charter](../../../../skills/agile-charter/SKILL.md): använd för att komma överens om mål och arbetsöverenskommelser med intressenter.

## Viktiga källor

- Manifesto for Agile Software Development och dess tolv principer (agilemanifesto.org): primärtexten; läs den direkt.
- Wikipedia, "Agile software development": historia, texten till värderingarna och kritiken.
- Wikipedia, "Extreme programming": en av de metoder som formade manifestet.
- Wikipedia, "Scrum (project management)": ett ramverk som ofta kallas agilt, beskrivet som ett ramverk och inte som agilitetens substans.

## Referenser

1. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
2. Extreme programming — Wikipedia — https://en.wikipedia.org/wiki/Extreme_programming
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
5. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
6. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
7. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
10. Manifesto for Agile Software Development — Beck et al. — https://agilemanifesto.org/
