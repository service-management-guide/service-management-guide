# Ändringsmöjliggörande

**Ändringsmöjliggörande ser till att ändringar av tjänster görs säkert och snabbt; det bedömer risk, lägger befogenhet hos dem som står närmast ändringen och flyttar rutinkontroller in i pipelinen, och sparar mänsklig granskning för de ändringar där omdöme behövs.**

## Varför det här är viktigt

Ändringar orsakar incidenter. En konfigurationsändring, en kodrelease, en förnyelse av certifikat, en brandväggsregel: vilken som helst av dessa kan få en tjänst att falla. De flesta organisationer lär sig detta den hårda vägen och svarar med en kontroll: ett formulär, ett godkännande, ett möte, en frysning. Kontrollen minskar viss risk och lägger till fördröjning, och fördröjningen uppmuntrar människor att slå ihop ändringar i större batcher, som är riskablare.

Den traditionella formen av kontrollen är ändringsrådet (change advisory board, CAB), en grupp som granskar föreslagna ändringar. Råd kan tillföra verkligt värde när de bidrar med en bred syn på riskfyllda ändringar. De blir också en flaskhals när de granskar varje ändring, inklusive rutinändringar som lyckats tusen gånger. Forskning om programvaruleverans som redovisas i boken *Accelerate*, av Nicole Forsgren, Jez Humble och Gene Kim, fann att tungt externt godkännande inte hängde samman med bättre stabilitet och hängde samman med långsammare leverans; kamratgranskning och automatiska kontroller hängde samman med bättre resultat. Data kommer från enkäter och har egna begränsningar, men riktningen stämmer med erfarenheten i många team.

ITIL 4 döpte om praktiken till "change enablement" (ändringsmöjliggörande), för att signalera att syftet är att möjliggöra nyttig förändring genom att se till att risker bedöms ordentligt, ge tillstånd för ändringar att gå vidare och hantera ändringsschemat. Det här ämnet visar hur man gör det med olika vägar för olika sorters ändringar och hur man bygger in belägg i arbetet. Det bygger på kontinuerlig leverans (ämne 2.2 — Kontinuerlig leverans) och hänger ihop med releasehantering (ämne 3.5 — Release- och driftsättningshantering) och konfigurationshantering (ämne 4.4 — Konfigurationshantering).

## Grundbegrepp

**Ändring.** I ITIL 4 tillägg, modifiering eller borttagning av allt som kan ha en direkt eller indirekt effekt på tjänster. Omfattningen är vid: programvara, infrastruktur, konfiguration, dokument, leverantörer och processer. Wikipedia-artiklarna om förändringsledning och om ändringskontroll beskriver idén inom it och teknik.

**Ändringsmöjliggörande kontra förändringsledning.** "Förändringsledning" används också för organisatorisk förändring, alltså den mänskliga sidan av omvandling (se ämne 8.3 — Organisationsförändring och införande). "Ändringsmöjliggörande" i ITIL avser kontroll av ändringar av tjänster och produkter. Den här guiden använder ITIL 4:s term för den praktik som beskrivs här.

**Typer av ändring.** ITIL 4 beskriver tre:

| Typ | Beskrivning | Typisk väg |
|---|---|---|
| Standard | Låg risk, väl förstådd, förhandsgodkänd, upprepad | Följer ett dokumenterat förfarande; inget enskilt godkännande |
| Normal | Behöver bedömning och godkännande | Bedöms och godkänns av rätt ändringsbefogenhet |
| Nöd | Måste göras brådskande, till exempel för att återställa tjänst eller åtgärda en kritisk sårbarhet | Påskyndat godkännande med en granskning efteråt |

**Ändringsbefogenhet.** Den person eller grupp som godkänner en ändring. ITIL 4 betonar att befogenheten bör läggas på den nivå som motsvarar risken, vilket för lågriskändringar ofta är en kollega eller teamet självt. Högre riskändringar går högre. Wikipedia-artikeln om ändringsrådet beskriver den traditionella modellen.

**Riskbedömning.** Att uppskatta sannolikheten för och påverkan av att ändringen fallerar. Faktorer omfattar ändringens storlek, tjänstens kritikalitet, antalet användare, genomförd testning, möjligheten att backa och meritlistan för liknande ändringar. Wikipedia-artiklarna om riskbedömning och riskhantering beskriver allmänna metoder. En enkel, konsekvent checklista fungerar bättre än en genomarbetad poäng som ingen litar på.

**Ändringsschema.** En kalender som visar planerade ändringar, så att konflikter och krockar med kritiska verksamhetsperioder kan ses. För team som släpper många gånger om dagen krymper schemat till undantag, som frysperioder, och till stora ändringar som behöver samordning.

**Kamratgranskning.** En annan kompetent person granskar ändringen innan den görs, som vid kodgranskning. Wikipedia beskriver kamratgranskning och kodgranskning. Det är billigt, snabbt och tillför relevant kunskap, och det stöder uppdelning av arbetsuppgifter där det krävs.

**Automatiska kontroller i pipelinen.** Tester, statisk analys, säkerhetsskanningar och policykontroller körs på varje ändring, och pipelinen registrerar vad som kördes och resultaten. Det ger bättre belägg än ett möte, eftersom det är konsekvent och knutet till den faktiska ändringen. Wikipedia-artiklarna om testautomatisering och statisk programanalys beskriver några av teknikerna. Se ämne 6.4 — Pipelines och automatiserade ändringar.

**Uppdelning av arbetsuppgifter.** En kontroll där ingen enskild person kan slutföra en riskfylld åtgärd ensam, till exempel genom att kräva att den som skriver en ändring inte är den enda som godkänner den. Regelverk eller revision kan kräva det. Wikipedia beskriver uppdelning av arbetsuppgifter. Pipelines kan upprätthålla det genom att kräva en andra granskare och registrera båda.

**Återställning och återhämtning.** Förmågan att backa en ändring eller rulla framåt snabbt minskar risken. Dataändringar är svårare att backa än kodändringar. Se Wikipedia-artikeln om återställning (rollback) i datahantering.

**Nödändringar.** Genuina nödsituationer behöver fart. En definierad väg, med en namngiven befogenhet, minimal pappersexercis och en granskning efteråt, hindrar "nöd" från att bli standardsättet att undvika processen.

**Belägg och revision.** Regelverk som Sarbanes–Oxley Act i USA, och liknande regler i andra jurisdiktioner, har drivit krav på kontroll över ändringar av finansiella system. Kraven skiljer sig mellan jurisdiktioner och branscher; kontrollera vad som gäller er och fråga er revisor vilka belägg som uppfyller det. Den här guiden ger ingen juridisk rådgivning.

**Hur linserna passar in.** Ändringsmöjliggörande är där agilt tempo möter kontroll. Agil praktik föreslår små, frekventa ändringar och tidigt intressentdeltagande. AI kan hjälpa till att bedöma risk och skriva utkast till ändringsbeskrivningar, under granskning. Automatisering tillhandahåller pipelinekontrollerna. Analys visar ändringsmisslyckanden och ledtid.

## Bra arbetssätt

1. **Klassificera ändringar efter typ och risk.** Definiera standard-, normala och nödändringar, med exempel för var och en. Se regelbundet över klassificeringen och flytta ändringar till "standard" när belägg stöder det.
2. **Förhandsgodkänn standardändringar.** För upprepade, lågriskiga ändringar, kom överens om förfarandet en gång, med riskägaren, och låt team utföra dem utan enskilt godkännande. Granska deras framgångsfrekvens.
3. **Lägg befogenhet nära arbetet.** Låt kamratgranskning godkänna lågriskändringar. Eskalera högre riskändringar till människor som förstår tjänsten och dess beroenden.
4. **Använd rådet för de ändringar som behöver det.** Behåll en ändringsrådgivande funktion för högriskiga eller övergripande ändringar. Förbered underlaget i förväg och besluta snabbt.
5. **Bygg in kontroller i pipelinen.** Kräv tester, skanningar och en andra granskare i verktygen och registrera beläggen automatiskt. Visa revisorer pipelinen, inte ett kalkylblad.
6. **Gör ändringar små.** Dela upp stora ändringar i mindre steg som kan släppas och kontrolleras separat. Mindre ändringar bär mindre risk och är lättare att backa.
7. **Planera vägen tillbaka.** Kräv en plan för återställning eller framåtrullning för varje normal ändring och repetera den för viktiga.
8. **För ett synligt schema.** Visa planerade ändringar och frysperioder där team kan se dem och lyft fram krockar med stora händelser. För frekventa små ändringar, visa bara det som behöver samordnas.
9. **Definiera och övervaka nödfall.** Skriv kriterierna och vägen. Granska varje nödändring efteråt och fråga varför den var nödvändig och om den normala vägen kunde förbättras.
10. **Lär av misslyckade ändringar.** Granska ändringar som orsakade incidenter och justera riskregler, tester eller checklistan. Följ andelen misslyckade ändringar och titta på orsakerna.

## Frågor att diskutera i teamet

**Vilka av våra godkännanden har aldrig avvisat eller ändrat en ändring, och vad kostar de i tid?**
Det här prövar om kontroller tillför värde. Be om data för de senaste sex månaderna. Du kan finna godkännandesteg utan registrerad effekt. Fördjupa genom att fråga vilken risk var och en tar upp och om en annan kontroll kunde göra det.

**Vilka ändringar gör vi oftast, och vilka kunde förhandsgodkännas som standardändringar?**
Lista de tio främsta efter volym. Räkna med att många är lågriskiga och repetitiva. Involvera riskägaren. Fördjupa genom att välja två för ett försök och komma överens om framgångskriterier.

**Hur avgör vi vilka ändringar som behöver mänsklig granskning, och vem gör den?**
Kriterier är ofta implicita. Fråga vad som skulle göra en ändring "riskfylld" i vårt sammanhang. Fördjupa genom att skriva en kort checklista och pröva den på färska ändringar.

**Vad skulle vår revisor godta som belägg för att en ändring testats, granskats och godkänts?**
Fråga revisorn direkt i stället för att gissa. Räkna med att register från pipelinen kan accepteras om de visar vem, vad och när. Fördjupa genom att komma överens om ett urval pipelineregister och låta revisorn granska dem.

**När gick en ändring senast fel, och vad i vår process tillät det?**
Det här kopplar praktiken till verkliga misslyckanden. Leta efter saknade tester, saknad återställning eller dålig information. Undvik att skylla på personen. Fördjupa genom att komma överens om en kontroll att lägga till eller förbättra.

**Var kunde AI hjälpa till att bedöma ändringsrisk, och vad skulle vi vilja kontrollera för hand?**
AI kan läsa en ändringsbeskrivning och liknande tidigare misslyckanden för att föreslå riskfaktorer. Den kan också förbise eller hitta på. Fråga vem som äger verktyget och hur dess förslag verifieras. Fördjupa genom att jämföra AI:ns riskbetyg med utfallet av tidigare ändringar.

## I praktiken: ett exempel på tjänstehantering

En regional hälsomyndighets it-avdelning kör ett veckovist ändringsråd, med omkring 20 deltagare, som granskar varje ändring. Ingenjörer säger att de väntar upp till åtta dagar på godkännande; rådet säger att det fångar problem. Myndighetens patientjournalsystem hade två incidenter förra året orsakade av ogranskade konfigurationsändringar som gjordes som "nödfall" för att undvika rådet.

Ändringschefen analyserar sex månaders register: 640 ändringar granskades, 590 godkändes som inlämnade, 38 skickades tillbaka för saknad information och 12 ändrades eller avvisades av sakliga skäl. Av de 590 orsakade 41 incidenter, nästan alla bland ändringar som också gjordes brådskande. Chefen föreslår tre vägar. Standardändringar, som att lägga till en användare i en grupp eller förnya ett certifikat, följer dokumenterade förfaranden och behöver inget godkännande. Normala ändringar av system klassade som lägre risk granskas av en kollega från ett annat team och kontrolleras av pipelinen. Högre riskändringar av patientjournalsystemet går till ett mindre råd som sammanträder två gånger i veckan och bara ser dessa.

Patientsäkerhetsansvarig ber om belägg för att kamratgranskning sker. Chefen visar en pipelinerapport som listar varje ändring med granskarens namn, de körda testerna och resultatet. Ansvarig går med på ett sexmånaders försök med en månatlig genomgång av misslyckade ändringar.

Det som förändras: mediantiden för godkännande sjunker från fem dagar till under en för de flesta ändringar, och användningen av "nöd" minskar kraftigt. Det som förblir svårt: vissa äldre system kan inte köra automatiska tester, så deras ändringar behöver fortfarande manuella kontroller; kamratgranskningen beror på att ingenjörer har tid, och team under press granskar ytligt; och den månatliga genomgången hittar två ändringar där granskaren saknade relevant kunskap. Chefen lägger till en regel att granskaren måste vara någon som har arbetat med systemet.

## Fyra perspektiv

### Produkt- och leveransteam

Gör ändringar små, lägg till tester och planera återställning. Arbeta med ändringspraktiken för att definiera standardändringar och pipelinebelägg. Behandla kamratgranskning som verklig granskning, inte en signatur.

### Tjänste- och driftsteam

Hjälp till att bedöma driftrisk, håll schemat och dela vad ni vet om beroenden. Gå igenom misslyckade ändringar med teamen och håll nödändringar sällsynta och undersökta.

### Ledning och styrning

Delegera befogenhet efter risk, be om belägg från pipelinen och kräv inte ett möte för rutinändring. Skydda tid för kamratgranskning. Granska antalet nödändringar.

### Kunder och användare

Du bör få veta om ändringar som påverkar dig, med tillräcklig förvarning och en tydlig beskrivning. Tala om för leverantören om perioder då förändring är riskfylld för dig. Rapportera problem efter en ändring snabbt.

## Agilitet, AI, automatisering och analys

### Agilitet

Små, frekventa ändringar med intressenter informerade är säkrare än stora, sällsynta. Involvera drift och riskägare i att utforma ändringsvägarna och förbättra dem med återkoppling. Se upp: släpp inte kontroller i agilitetens namn; ersätt dem med bättre.

### AI

AI kan hjälpa till att skriva utkast till ändringsbeskrivningar, föreslå riskfaktorer utifrån liknande tidigare ändringar och kontrollera beskrivningar för saknad information, med en person som ansvarar för beslutet. Se upp: ett AI-riskbetyg kan behandlas som en auktoritet; visa det som ett förslag och följ hur ofta det hade rätt. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Automatisera pipelinekontroller, beläggsinsamling, upptäckt av schemakonflikter och utförande av standardändringar, med loggar och återställning. Se upp: automatiskt godkännande av ändringar är bara så bra som dess regler; granska reglerna och ta stickprov av godkända ändringar. Se ämne 6.4 — Pipelines och automatiserade ändringar.

### Analys

Följ ändringsvolym per typ, ledtid, andel misslyckade ändringar och nödändringar och titta på orsakerna till misslyckanden. Se upp: en låg misslyckandefrekvens kan komma av att misslyckanden inte registreras, och godkännanden kan manipuleras genom att dela upp eller samla ändringar; kontrollera mot incidentdata. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Att granska varje ändring på samma sätt.** Rutinändringar väntar. Klassificera efter risk och förhandsgodkänn standardändringar.
- **Ett råd utan belägg.** Medlemmar godkänner det de inte kan bedöma. Förbered information och skicka bara ändringar som behöver omdöme.
- **Nöd som kringgående.** Brådska utlyses för att undvika granskning. Definiera det och granska varje användning.
- **Ytlig kamratgranskning.** En signatur utan läsning. Kräv en kvalificerad granskare och ta stickprov av granskningarna.
- **Att släppa kontroller utan ersättning.** Misslyckanden ökar och revisorer invänder. Möt varje kontrolls syfte i pipelinen.
- **Ingen återställningsplan.** En misslyckad ändring förlänger en incident. Kräv och repetera återhämtning.
- **Att räkna godkända ändringar som framgång.** Volymen stiger och kvaliteten inte. Följ misslyckanden och orsakade incidenter.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Ändringstyper och befogenhet | En väg för allt | Nödväg finns | Standard-, normala och nödändringar definierade med befogenhet efter risk | Vägar granskas med data | Vägar anpassas automatiskt efter risk över tjänster |
| Belägg | Formulär och möten | Vissa register från verktyg | Pipelineregister för de flesta ändringar | Belägg stickprovskontrolleras och granskas | Belägg kontinuerliga över verktyg och leverantörer |
| Riskbedömning | Intuition | Informell checklista | Konsekvent checklista och kriterier | Kriterier justeras utifrån misslyckandedata | Risk bedöms med data och automatisering, med mänsklig granskning |
| Lärande | Skuldbeläggning | Enstaka granskningar | Misslyckade ändringar granskas med åtgärder | Orsaker till misslyckanden följs och minskas | Lärande delas över team |

## Checklista

- [ ] Vi har standard-, normala och nödändringstyper med exempel.
- [ ] Standardändringar är förhandsgodkända med ett dokumenterat förfarande.
- [ ] Befogenheten för varje typ motsvarar risken.
- [ ] Kamratgranskning görs av någon med relevant kunskap.
- [ ] Pipelinekontroller registrerar tester, granskare och resultat.
- [ ] Varje normal ändring har en plan för återställning eller framåtrullning.
- [ ] Nödändringar granskas efteråt.
- [ ] Vi följer andelen misslyckade ändringar och lär av misslyckade ändringar.

## AI-prompter

**Kontrollera en ändringsbeskrivning för luckor.**

```text
Here is a draft change description: [paste]. Our required fields are: [list].
List which required fields are missing or unclear, and list five questions a reviewer would ask. Do not rewrite the change or rate its risk.
List what you are unsure of.
```

**Leta efter mönster i misslyckade ändringar.**

```text
Below is a list of changes that caused incidents, with dates, type, size, whether tested, and whether rolled back: [paste list, names removed].
List common features across them and questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

**Föreslå kandidater för standardändringar.**

```text
Here are our most frequent changes in the last six months, with counts and failure counts: [paste data].
List which look like candidates for pre-authorization, with the data you used and the questions we should ask the risk owner. Do not claim any is safe.
List what you are unsure of.
```

## AI-färdigheter

- [change-request](../../../../skills/change-request/SKILL.md): använd för att utforma en tydlig, lätt ändringspost.
- [enterprise-change-management](../../../../skills/enterprise-change-management/SKILL.md): använd för den organisatoriska sidan av förändring.
- [risk-register](../../../../skills/risk-register/SKILL.md): använd för att registrera och granska risker från ändringar.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): använd för att kontrollera belägg mot kontrollkrav.
- [security-testing](../../../../skills/security-testing/SKILL.md): använd för att planera säkerhetskontroller för pipelinen.

## Viktiga källor

- Nicole Forsgren, Jez Humble och Gene Kim, *Accelerate* (2018): forskning om leveranspraktiker, inklusive godkännande av ändringar.
- DORA (dora.dev): löpande forskning och rapporter om programvaruleveransens prestation.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken ändringsmöjliggörande.
- Wikipedia, "Change management" och "Change control": översikter av idéerna.

## Referenser

1. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
2. Change control — Wikipedia — https://en.wikipedia.org/wiki/Change_control
3. Change-advisory board — Wikipedia — https://en.wikipedia.org/wiki/Change-advisory_board
4. Risk assessment — Wikipedia — https://en.wikipedia.org/wiki/Risk_assessment
5. Peer review — Wikipedia — https://en.wikipedia.org/wiki/Peer_review
6. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
7. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Static program analysis — Wikipedia — https://en.wikipedia.org/wiki/Static_program_analysis
10. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
11. DORA research — DevOps Research and Assessment — https://dora.dev/research/
