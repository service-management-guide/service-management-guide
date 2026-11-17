# Ramverk och standarder för tjänstehantering

**ISO/IEC 20000, COBIT, VeriSM, FitSM och IT4IT överlappar med ITIL och med varandra: de svarar på olika frågor (vad man ska certifiera, hur man styr, hur man hanterar över hela organisationen, hur man börjar lätt, hur man modellerar it som en verksamhet), så välj utifrån den fråga du har snarare än utifrån logotypen.**

## Varför det här är viktigt

Team som inför tjänstehantering möter ett alfabet av ramverk och standarder. En inköpare ber om certifiering enligt ISO/IEC 20000. En revisor hänvisar till COBIT. En konsult rekommenderar VeriSM för den digitala eran. Ett litet team hittar FitSM och undrar varför ITIL såg så tungt ut. Var och en beskrivs av sina anhängare som svaret, och beskrivningarna säger sällan vad var och en är till för.

Risken är förvirring med verkliga kostnader: att certifiera sig mot en standard som inte motsvarar ert avtal, eller att anta ett ramverk för en roll det aldrig var utformat för. Ett ramverk är vägledning; en standard är en uppsättning krav som en revisor kan certifiera en organisation mot. Det är olika saker, och att blanda ihop dem leder till bortkastad ansträngning.

Det här ämnet ger en neutral jämförelse. Det är inte en handbok i regelefterlevnad och ger inga juridiska råd eller revisionsråd. För varje ramverk anges syftet, vilken sorts dokument det är och vilken fråga det hjälper till med. Detaljer ändras, så kontrollera varje ägares aktuella publikationer innan du förlitar dig på något uttalande här, inklusive den version av ITIL som diskuteras i ämne 1.3 — ITIL 5.

## Grundbegrepp

**Ramverk kontra standard.** Ett ramverk erbjuder begrepp, praktiker och råd som du anpassar. En standard ställer krav, normalt formulerade med "ska", mot vilka en organisation kan bedömas. ITIL är ett ramverk: personer certifieras, organisationer gör det inte. ISO/IEC 20000 är en standard: en organisation kan granskas och certifieras mot den.

**ITIL.** Vägledning för it-tjänstehantering, numera ägd av PeopleCert, med praktiker, en värdemodell och ett certifieringssystem för personer. Se ämne 1.2 — ITIL.

**ISO/IEC 20000.** En internationell standard för ledningssystem för tjänstehantering, publicerad gemensamt av International Organization for Standardization och International Electrotechnical Commission. Del 1 anger kraven för att upprätta, införa, underhålla och förbättra ett ledningssystem för tjänstehantering (SMS). Organisationer certifieras av ackrediterade organ. Den väljs ofta när en kund eller tillsynsmyndighet ber om oberoende belägg för disciplin i tjänstehanteringen. Den är i sin struktur förenlig med andra ISO-standarder för ledningssystem.

**COBIT.** Ett ramverk från ISACA för styrning och förvaltning av företagets information och teknik. Det är bredare än tjänstehantering: det tar upp hur styrelse och ledning styr och övervakar teknik, med styrningsmål, förvaltningsmål och prestationsmätning. Det används ofta av revisorer och riskteam, och organisationer använder det vanligen vid sidan av ITIL, där COBIT beskriver vad styrningen förväntar sig och ITIL beskriver hur tjänster drivs.

**VeriSM.** Ett angreppssätt för tjänstehantering för organisationer som erbjuder digitala tjänster, från en grupp i tjänstehanteringsgemenskapen. Det beskriver organisationsövergripande "principer för tjänstehantering" och ett förvaltningsnät av resurser, miljö, förvaltningspraktiker och framväxande tekniker, avsett att låta en organisation kombinera olika praktiker. Det är inte en ersättning för ett praktikramverk; det är ett sätt att ordna flera. Kontrollera ägarens webbplats för aktuella detaljer.

**FitSM.** En lättviktig familj av standarder för it-tjänstehantering, framsprungen ur europeiska forskningsprojekt, utformad för att vara enkel och gratis att använda. Den beskriver ett litet antal processer med en tydlig uppsättning krav och övervägs ofta av små och medelstora organisationer och federerade it-miljöer som tycker att större ramverk är tunga.

**IT4IT.** En referensarkitektur från The Open Group för att driva it som verksamhet, modellerad som värdeströmmar (som strategi till portfölj, krav till driftsättning, beställning till uppfyllande och upptäcka till rätta) som stöds av informations- och funktionskomponenter. Den är användbar när du vill utforma hur verktyg och data passar ihop över it:s hela livscykel, och den kompletterar ITIL:s praktiker.

**Besläktade standarder.** ISO/IEC 27001 anger krav för ett ledningssystem för informationssäkerhet (se ämne 3.13 — Informationssäkerhetshantering). ISO/IEC 19770 täcker it-tillgångshantering (se ämne 4.1 — Tillgångshantering). ISO/IEC 42001, publicerad 2023, anger krav för ett ledningssystem för artificiell intelligens (se ämne 5.6 — AI-styrning, risk och regelefterlevnad). Standarder som delar struktur kan kombineras i ett enda ledningssystem, vilket minskar dubbelarbete.

**DevOps, SRE och agilitet finns inte på listan.** De är rörelser och angreppssätt, inte ramverk i den här meningen, även om de överlappar med praktiker här. Se ämne 2.5 — DevOps och ämne 2.6 — Site reliability engineering.

**Mognadsmodeller.** Capability Maturity Model Integration (CMMI) bedömer processförmåga och används ibland för tjänstearbete. Den här guiden använder sin egen femnivåmodell för mognad (Initiera, Utveckla, Standardisera, Styra, Orkestrera), som är ett hjälpmedel för självskattning, inte en certifiering.

**Hur linserna passar in.** Varje ramverk har reviderats, eller revideras, för att spegla agila arbetssätt, AI, automatisering och data. Kontrollera den aktuella utgåvan för hur var och en behandlar dessa, och se varje sammanfattning, inklusive den här, som en hänvisning till källan.

## Bra arbetssätt

1. **Utgå från frågan.** Skriv ned vad ni behöver: oberoende belägg för en kund, en styrningsstruktur för styrelsen, ett lättare sätt att börja, ett sätt att ordna flera praktiker. Välj det ramverk eller den standard som svarar på det.
2. **Kontrollera vad kunden eller tillsynsmyndigheten faktiskt kräver.** Om ett avtal säger "certifierad enligt ISO/IEC 20000" uppfyller inget annat ramverk det. Om det säger "god praxis" har du ett val. Läs klausulen.
3. **Certifiera inte för sakens skull.** Certifiering kostar ansträngning och löpande revisioner. Gör det när någon som betyder något behöver beläggen, och bygg de underliggande praktikerna först.
4. **Läs ägarens text.** För varje krav eller definition du ska citera, använd standarden eller ramverket självt och notera utgåva och datum. Sammanfattningar, inklusive blogginlägg, driver iväg.
5. **Kombinera på praktiknivå.** Många organisationer använder ITIL för praktiker, ISO/IEC 20000 för certifiering, COBIT för styrning och IT4IT för arkitektur. Koppla varje praktik till de krav den stöder en gång, i stället för att skriva separata rutiner för var och en.
6. **Dela ett ledningssystem.** Där standarder delar struktur, kör en uppsättning dokument, revisioner och granskningsmöten. En enda ledningsgranskning som täcker tjänst, säkerhet och AI är billigare och tydligare än tre.
7. **Börja smått om ni är små.** Ett ramverk utformat för ett stort företag kan överväldiga ett team på tio. Överväg ett lättare alternativ som FitSM eller några utvalda praktiker.
8. **Låt belägg vara en biprodukt.** Utforma pipelines och verktyg så att de register en revisor vill ha produceras av det normala arbetet, inte sammanställs i efterhand.
9. **Se ramverk som källor till frågor.** Använd var och en för att fråga vad ni kan missa, och kontrollera svaren mot era egna belägg.
10. **Se över valet.** Behov ändras. Granska årligen om ni fortfarande behöver varje certifiering eller ramverk och vad var och en kostar.

## Frågor att diskutera i teamet

**Vilket problem försöker vi lösa med ett ramverk eller en standard, och vem ber om det?**
Det här börjar med behovet. Du kan få höra att "alla använder det" eller att en revisor nämnde det. Be om dokumentet eller avtalsklausulen. Fördjupa genom att skriva behovet i en mening och pröva varje alternativ mot den.

**Vilka av våra kunder eller tillsynsmyndigheter kräver certifiering, och till vad?**
Krav antas ofta. Kontrollera avtal, anbudsunderlag och regelverksvägledning. Räkna med överraskningar åt båda håll: ett krav som ingen lade märke till, eller inget där man antog ett. Fördjupa genom att lista de belägg som var och en kräver.

**Var håller vi separata dokument för samma praktik för att olika ramverk ber om dem?**
Det här hittar dubbelarbete. Vanliga exempel är separata incidentrutiner för tjänst och säkerhet. Fråga vem som håller dem i takt. Fördjupa genom att välja en praktik att beskriva en gång och koppla till varje krav.

**Hur skulle den lättaste versionen av tjänstehantering se ut för oss?**
Det här prövar om vi bygger för mycket. Räkna med press att införa varje praktik. Fråga vilka två eller tre praktiker som skulle ta bort mest smärta. Fördjupa genom att välja dem och skjuta upp resten.

**Vilka belägg ber våra revisioner om, och kunde våra verktyg ta fram dem automatiskt?**
Revisioner är en kostnad för att göra affärer. Team sammanställer ofta belägg för hand varje år. Fråga vad revisorn faktiskt granskar. Fördjupa genom att välja ett register att generera ur pipelinen eller ärendeverktyget.

**Hur skulle vi veta att en certifiering förbättrade vår tjänst, och inte bara vår pappersexercis?**
Det här knyter certifiering till resultat. Räkna med ärliga svar om att det är svårt att avgöra. Fråga vad vi skulle mäta före och efter, till exempel tid för att återställa tjänsten. Fördjupa genom att komma överens om måttet och ett granskningsdatum.

## I praktiken: ett exempel på tjänstehantering

Ett regionalt företag för förvaltade tjänster tillhandahåller it-support till ett sextiotal små kliniker. En ny kund, en sjukhusgrupp, frågar i en upphandling om företaget är "certifierat enligt en erkänd standard för tjänstehantering". Försäljningschefen antar att det betyder ITIL-certifikat och listar teknikernas kvalifikationer.

Tjänstechefen läser upphandlingen. Den nämner uttryckligen ISO/IEC 20000-1. Hon förklarar att enskilda ITIL-certifikat inte uppfyller kravet, eftersom en organisation måste granskas. Hon jämför standardens krav med vad företaget gör. Incident- och ändringshanteringen är sund och dokumenterad, men det finns ingen formell ledningsgranskning, ingen dokumenterad rapportering av servicenivåer och leverantörsavtalen är ojämnt arkiverade.

Företaget beslutar att lämna ett villkorat anbud, med en plan för att nå certifiering inom ett år. Det skriver ett enkelt dokument för ledningssystemet, schemalägger en kvartalsvis ledningsgranskning som också täcker informationssäkerhet och ställer in ärendeverktyget så att det tar fram de rapporter en revisor vill ha. Det väljer en lättare väg för sina minsta kliniker, baserad på några kärnpraktiker, så att insatsen inte överväldigar dem.

Det som förändras: företaget kan besvara upphandlingen ärligt och har en plan. Det som förblir svårt: revisionstidplanen beror på ett ackrediterat organs tillgänglighet, rapporterna speglar ännu inte klinikernas verkliga prioriteringar och teamet är osäkert på hur mycket dokumentation som räcker. De kommer överens om att be certifieringsorganet om vägledning tidigt och hålla dokumenten korta.

## Fyra perspektiv

### Produkt- och leveransteam

Räkna med frågor om register och kontroller från revisorer och utforma er pipeline så att den producerar dem. Lär dig vilka av era praktiker som tjänar en standards krav, så att ni kan förklara varför en kontroll finns.

### Tjänste- och driftsteam

Håll rutiner korrekta och för register medan ni arbetar, så att belägg finns utan extra ansträngning. Bidra till ledningsgranskningar med verkliga data och tala om för ägaren när ett krav är krångligt att uppfylla.

### Ledning och styrning

Besluta vilka certifieringar som är värda sin kostnad och be om avtalsklausulen eller kundbehovet som motiverar var och en. Finansiera ett enda ledningssystem i stället för flera. Be om belägg för att praktiker fungerar, inte bara att dokument finns.

### Kunder och användare

Om du kräver certifiering, ange vilken standard och vilken omfattning. Fråga leverantören vad certifikatet täcker, vilka tjänster, platser och datum. Ett certifikat är belägg för ett system, inte en garanti för något enskilt resultat.

## Agilitet, AI, automatisering och analys

### Agilitet

Bygg praktiker i små inkrement och fånga belägg allt eftersom, med intressenter som regelbundet granskar systemet. Se upp: standarder kräver dokumenterad, repeterbar praktik; använd inte "vi är agila" för att slippa beskriva hur arbetet kontrolleras.

### AI

AI kan hjälpa till att jämföra krav mellan standarder, skriva utkast till kopplingar och sammanfatta revisionsfynd, med en person som verifierar var och en mot källtexten. Det finns nu en standard för ledningssystem för AI (ISO/IEC 42001), liksom NIST AI Risk Management Framework; se ämne 5.6 — AI-styrning, risk och regelefterlevnad. Se upp: AI kan hitta på klausulnummer eller krav, så ge den texten och be den citera.

### Automatisering

Generera belägg ur pipelines och verktyg, till exempel ändringsposter länkade till byggen, behörighetsgranskningar exporterade enligt schema och servicenivårapporter som tas fram automatiskt. Se upp: automatiska belägg bevisar att automatiseringen kördes, inte att kontrollen är effektiv; granska ett stickprov för hand.

### Analys

Använd data för att visa att praktiker fungerar, till exempel tid för att återställa tjänsten och ändringar som orsakar incidenter, och för att förbereda revisioner genom att lista luckor. Se upp: indikatorer knutna till certifiering, som antalet stängda revisionsfynd, kan manipuleras; se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Att likställa personliga certifikat med organisationscertifiering.** Ett anbud faller på en teknikalitet. Läs kravet och vet vilken sorts certifiering det nämner.
- **Att certifiera innan praktiken är byggd.** Organisationen klarar en revision och inget förbättras. Bygg och mät praktiken först.
- **Att underhålla parallella system.** Varje ramverk får egna dokument och ägare. Koppla en gång och dela.
- **Att använda ett tungt ramverk för ett litet team.** Personalen drunknar i dokumentation. Välj ett lättare alternativ eller några praktiker.
- **Att citera sammanfattningar som standarden.** Ett krav återges fel. Läs ägarens text och notera utgåvan.
- **Att se ett ramverk som målet.** Regelefterlevnad ersätter resultat. Mät det kunderna upplever.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Val av ramverk | Valt av vana eller mode | Behov listade | Valet knutet till skrivna behov och krav | Val granskas med kostnad och nytta | Val samordnas i hela företaget |
| Ledningssystem | Separata dokument per ramverk | Viss delning | Ett system kopplat till flera krav | Systemet granskas och förbättras på belägg | Systemet integrerat över tjänst, säkerhet och AI |
| Belägg | Sammanställs före revisioner | Vissa register förs | Register produceras av det normala arbetet | Beläggens kvalitet stickprovskontrolleras och granskas | Belägg kontinuerliga och automatiserade med mänsklig granskning |
| Källdisciplin | Sammanfattningar används | Ägartext läst av ett fåtal | Utgåvor dokumenteras och citeras | Uppdateringar följs och agerar man på | Delad, daterad kunskap om krav |

## Checklista

- [ ] Vi skrev ned varför vi behöver varje ramverk eller standard.
- [ ] Vi vet vilka kunder eller tillsynsmyndigheter som kräver certifiering, och till vad.
- [ ] Vi läste ägarens text för allt vi citerar och noterade utgåvan.
- [ ] Vi kopplade praktiker till krav en gång, inte per ramverk.
- [ ] Vår ledningsgranskning täcker varje standard vi använder.
- [ ] Belägg produceras av det normala arbetet där det går.
- [ ] Vi granskar årligen om varje certifiering fortfarande är värd sin kostnad.
- [ ] Våra minsta team har en lättare väg.

## AI-prompter

**Jämför två kravuppsättningar.**

```text
Below is text from requirement set A: [paste clauses]. Below is text from requirement set B: [paste clauses].
Produce a table of overlaps and differences, quoting the exact words of each. Use only the text provided and do not use outside knowledge. Mark any match you are unsure about.
List what you are unsure of.
```

**Skriv ett utkast till en gapanalys utifrån vår praktikbeskrivning.**

```text
Here is a description of how we run [practice, such as incident management]: [paste description]. Here is the requirement text: [paste clauses].
For each clause, say whether the description appears to meet, partly meet, or not address it, quote the words you relied on, and list a question to confirm. Do not give a verdict on certification.
List what you are unsure of.
```

**Förbered frågor till ett certifieringsorgan.**

```text
We are considering certification to [standard] for [scope]. Our size and context: [describe].
Write twelve questions to ask a certification body about scope, timeline, evidence, cost, and surveillance audits. Avoid assuming answers.
List what you are unsure of.
```

## AI-färdigheter

- [maturity-models](../../../../skills/maturity-models/SKILL.md): använd för att självskatta mot ett valt ramverk utan att antyda certifiering.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): använd för att kontrollera belägg mot krav.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): använd när en standard ber om dokumenterade servicenivåer.

## Viktiga källor

- ISO, ISO/IEC 20000-1 (själva standarden): kraven för ett ledningssystem för tjänstehantering; läs den aktuella utgåvan hos utgivaren.
- ISACA, COBIT publications: ägarens beskrivning av styrnings- och förvaltningsmål.
- The Open Group, IT4IT standard: ägarens referensarkitektur.
- Wikipedia, "ISO/IEC 20000" och "COBIT": neutrala sammanfattningar som pekar mot ägarna.

## Referenser

1. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
2. COBIT — Wikipedia — https://en.wikipedia.org/wiki/COBIT
3. ISACA — Wikipedia — https://en.wikipedia.org/wiki/ISACA
4. FitSM — Wikipedia — https://en.wikipedia.org/wiki/FitSM
5. The Open Group — Wikipedia — https://en.wikipedia.org/wiki/The_Open_Group
6. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
7. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
8. Capability Maturity Model Integration — Wikipedia — https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration
9. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
10. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
