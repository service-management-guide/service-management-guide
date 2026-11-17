# AI i tjänstehantering

**Artificiell intelligens kommer in i tjänstehantering vid servicedesken, i driften, i kunskapen, i ändringar och i beslutsstöd; behandla varje användning som en tjänst med en ägare, en människa som beslutar där skada är möjlig, ett sätt att fånga fel och ett mått på om den hjälper.**

## Varför det här är viktigt

AI har gått från ett forskningsämne till en funktion i de verktyg tjänsteteam redan använder. Ärendesystemet föreslår kategorier. Övervakningsplattformen grupperar larm. Chattassistenten besvarar personalens frågor. Kodredigeraren skriver ett utkast till ett skript. Några av dessa slogs på av leverantören, och ingen i teamet beslutade att anta dem.

Potentialen är verklig. Mycket tjänstearbete är läsa, skriva, sortera och söka, uppgifter som dagens AI gör tillräckligt bra för att spara tid. Risken är också verklig. AI-system producerar flytande svar som kan vara fel, kan dölja hur de nådde en slutsats, kan läcka data och kan fallera på sätt som är svåra att förutse. Ett team som antar AI utan ägarskap, granskning och mått ärver dessa risker utan fördelarna.

Det här ämnet är kartan över AI-delen av den här guiden. Det förklarar de huvudsakliga sorternas AI i tjänstearbete, var de hjälper, var de inte gör det och vad man bör fråga innan man antar dem. Senare ämnen går djupare: drift (ämne 5.2 — AIOps), servicedesken (ämne 5.3 — AI-servicedesk och virtuella agenter), generativ AI (ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar), agenter som agerar (ämne 5.5 — Agentisk AI och mänsklig tillsyn), styrning (ämne 5.6 — AI-styrning, risk och regelefterlevnad), prompter och färdigheter (ämne 5.7 — AI-färdigheter och prompter) och den operativa modellen (ämne 5.8 — Operativ modell och färdigheter för AI). Ägarens beskrivning av den nyaste ITIL-versionen namnger AI som en del av den miljö tjänstehantering måste ta upp (se ämne 1.3 — ITIL 5).

## Grundbegrepp

**Artificiell intelligens.** En vid term för system som utför uppgifter som normalt kräver mänsklig intelligens, som att känna igen mönster, förstå språk och ge rekommendationer. Wikipedia-artikeln om artificiell intelligens beskriver fältet och dess historia. Termen täcker många olika tekniker, och vad människor menar med "AI" varierar. När du diskuterar en användning, namnge tekniken och uppgiften.

**Maskininlärning.** System som lär sig mönster ur data i stället för att följa explicita regler. Wikipedia beskriver maskininlärning och dess grenar. Exempel i tjänstearbete är att klassificera ärenden, upptäcka ovanliga mätvärden och förutsäga fel. De beror på träningsdata, och de kan försämras när förhållanden ändras, ett problem som Wikipedia beskriver som konceptdrift (concept drift).

**Generativ AI och stora språkmodeller.** System som producerar nytt innehåll, som text, kod eller bilder, utifrån prompter. Stora språkmodeller (LLM) tränas på stora mängder text och kan sammanfatta, skriva utkast, översätta och besvara frågor. Wikipedia beskriver generativ AI och stora språkmodeller. Deras utdata är flytande och inte garanterat sanna.

**Hallucination.** Ett utdata som är rimligt men falskt eller obelagt. Wikipedia beskriver hallucination inom AI. I tjänstearbete kan det betyda ett påhittat kommando, en påhittad policy eller en självsäker men felaktig rotorsak. Planera för det: förankra svar i källor, visa källorna och kontrollera före åtgärd.

**Återvinningsförstärkt generering.** Ett mönster där systemet först hämtar relevanta dokument, till exempel kunskapsartiklar, och sedan ber modellen svara med enbart dessa. Wikipedia beskriver angreppssättet. Det minskar, men tar inte bort, felaktiga svar och beror på dokumentens kvalitet. Se ämne 3.9 — Kunskapshantering.

**Agenter.** System som inte bara svarar utan vidtar åtgärder: anropar verktyg, ändrar poster, kör skript. Wikipedia beskriver intelligenta agenter i allmänhet. Agenter höjer insatserna eftersom misstag får effekter i världen. Se ämne 5.5 — Agentisk AI och mänsklig tillsyn.

**Var AI hjälper i tjänstehantering.** Typiska användningar delas in i fem grupper:

| Område | Exempel | Främsta försiktighet |
|---|---|---|
| Servicedesk | Klassificera och dirigera ärenden, skriva utkast till svar, besvara vanliga frågor | Felaktiga eller påhittade svar till användare |
| Drift | Gruppera larm, hitta avvikelser, föreslå orsaker | Dolda missade signaler |
| Kunskap | Söka, sammanfatta och skriva utkast till artiklar | Utkast som sprider fel |
| Ändring och leverans | Skriva utkast till kod och tester, bedöma ändringsrisk, skriva versionsanteckningar | Osäker eller felaktig kod, övertro på riskpoäng |
| Beslutsstöd | Sammanfatta data, prognostisera efterfrågan, hitta mönster | Övertygade slutsatser utifrån svaga data |

**Människa i loopen.** En person granskar eller godkänner ett AI-utdata eller en åtgärd innan den får effekt. Wikipedia beskriver system med människa i loopen. Det är en kontroll, och den fungerar bara om personen har tid, information och befogenhet att säga nej. Wikipedia beskriver också automationsbias, benägenheten att förlita sig för mycket på automatiska förslag, som kan göra en mänsklig kontroll till en stämpel.

**Förklarbarhet.** Förmågan att säga varför ett system gav ett visst utdata. Wikipedia beskriver förklarbar AI. För vissa användningar, som att rangordna ett ärende, räcker en grov förklaring; för andra, som ett beslut som påverkar en persons åtkomst eller lön, behövs mer. Avgör hur mycket förklaring varje användning kräver.

**Partiskhet och rättvisa.** AI som tränats på tidigare data kan återskapa tidigare mönster, även orättvisa. Wikipedia beskriver algoritmisk partiskhet. I tjänstearbete kan partiskhet visa sig i vem som får snabbare hjälp, vems förfrågningar som flaggas eller vems språk systemet förstår väl.

**Data och integritet.** AI-verktyg bearbetar de data du ger dem, som ärendetext med personuppgifter. Vart data går, hur länge de sparas och om de tränar andra modeller är centrala frågor. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

**Säkerhetsrisker.** AI-system har egna svagheter, som promptinjektion, där text i ett dokument eller meddelande försöker ge modellen nya instruktioner. Wikipedia beskriver promptinjektion. Behandla indata utifrån som obetrodda.

**Livscykel och drift.** En modell i bruk behöver övervakning, omträning eller byte, versionshantering och avveckling. MLOps, beskrivet på Wikipedia, tillämpar ingenjörsdisciplin på detta. För en leverantörsmodell behöver ni ändå följa förändringar i beteende efter uppdateringar.

**Styrningsramverk.** Europeiska unionens AI-förordning, beskriven på Wikipedia, sätter rättsliga skyldigheter som beror på riskkategorier. ISO/IEC 42001 anger ett ledningssystem för AI, och USA:s National Institute of Standards and Technology publicerar ett ramverk för AI-riskhantering. Dessa är vokabulär och struktur för styrning; de ersätter inte juridisk rådgivning.

**Hur linserna passar in.** AI är en av de fyra linserna. Agil praktik föreslår små försök med verkliga användare och kort återkoppling. Automatisering är närmaste granne: AI beslutar eller föreslår, automatisering agerar. Analys levererar de data AI lär sig av och de mått som visar om den hjälper.

## Bra arbetssätt

1. **Börja med ett problem, inte ett verktyg.** Namnge en bestämd smärtpunkt, till exempel tid som läggs på att sortera ärenden, och ett mått på förbättring. Fråga sedan om AI är rätt svar eller om en enklare åtgärd fungerar.
2. **För en förteckning över AI-användningar.** Lista varje AI-funktion och -verktyg i bruk, inklusive leverantörsfunktioner och personliga verktyg som personal använder för arbete. Registrera syfte, data, ägare och status.
3. **Utse en ägare för varje användning.** En person ansvarar för vad AI:n gör, vilka data den använder och vad som händer när den har fel. Utan ägare märker ingen försämring.
4. **Avgör var en människa beslutar.** Skriv för varje användning vad AI:n får göra ensam, vad som behöver granskning och vad den aldrig får göra. Gör granskningen verklig: ge granskare tid och sammanhang.
5. **Förankra svar i era egna källor.** Använd återvinning från granskad kunskap, visa källorna för användaren och säg tydligt när ingen källa stöder ett svar.
6. **Testa före och efter lansering.** Bygg en uppsättning realistiska testfall med kända svar, inklusive krångliga och fientliga. Kör dem före release och efter varje ändring av modell eller data.
7. **Mät värde och fel.** Följ sparad tid, utdatas kvalitet, rättelser av människor, användarklagomål och kostnad. Ta regelbundet stickprov av utdata.
8. **Skydda data.** Avgör vilka data som får skickas till vilka verktyg, ta bort personuppgifter och känsliga detaljer där ni kan och kontrollera avtalsvillkor för lagring och träningsanvändning.
9. **Planera för fel.** Gör det lätt att stänga av en AI-funktion, dirigera till en person och återhämta sig. Repetera bortfallet av en AI-tjänst ni beror på.
10. **Bygg färdigheter och dela lärande.** Utbilda människor att använda AI väl och att ifrågasätta den. Dela vad som fungerar och vad som fallerar mellan team. Se ämne 5.7 — AI-färdigheter och prompter.

## Frågor att diskutera i teamet

**Var använder vi redan AI, inklusive funktioner vi inte valde och verktyg människor använder på egen hand?**
Fråga alla och kontrollera leverantörsinställningar. Räkna med en längre lista än någon förutsett. Fördjupa genom att registrera varje användning med en ägare.

**Vilka av våra uppgifter är mest läsa, skriva och sortera, och vilka skulle vi inte vilja att en maskin avgör?**
Det här sorterar uppgifter efter lämplighet. Räkna med enighet om utkast och oenighet om beslut. Fördjupa genom att välja en lågriskig uppgift att pröva.

**Vad skulle vi göra om vår AI-assistent gav en användare ett självsäkert felaktigt svar, och hur skulle vi få veta det?**
Gå igenom scenariot. Räkna med luckor i upptäckt. Fördjupa genom att komma överens om ett sätt att ta stickprov av utdata och samla användaråterkoppling.

**Vilka data skickar vi till AI-verktyg, och har vi läst villkoren?**
Lista verktygen och datat. Räkna med personliga konton och okända villkor. Fördjupa genom att komma överens om en regel för vad som inte får klistras in i externa verktyg.

**Hur skulle vi veta att en AI-användning var värd sin kostnad?**
Be om ett mått på nytta och ett mått på skada. Räkna med "det känns snabbare". Fördjupa genom att välja en användning och komma överens om ett mått före och efter.

**Vilka färdigheter behöver våra människor för att använda AI väl, och vem ska lära ut dem?**
Tänk på att skriva bra prompter, kontrollera svar och upptäcka begränsningar. Räkna med ett brett spann av självförtroende. Fördjupa genom att planera ett kort övningspass med verkliga uppgifter.

## I praktiken: ett exempel på tjänstehantering

Ett nationellt folkbiblioteksnätverks it-team stöder 200 filialer och omkring 6 000 anställda. Servicedesken hanterar en hög volym repetitiva frågor om utskrift, inloggningar och utlåningssystemet. Chefen för servicedesken vill använda AI för att korta kön, och leverantören av ärendesystemet har just lagt till en AI-assistent, påslagen som standard för personalvänd chatt.

Tjänstechefen listar först AI-användningar. Utöver leverantörens assistent finner hon att två analytiker använder ett publikt chattverktyg för att sammanfatta ärenden och att en utvecklare har byggt ett skript som skriver utkast till svar. Hon ger var och en en ägare och sätter en regel: inga personuppgifter i publika verktyg. Därefter väljer hon en användning att förbättra: en personalvänd assistent som besvarar "hur gör jag"-frågor, med enbart den godkända kunskapsbasen, med källänkar och en synlig knapp för att nå en människa.

Hon bygger 60 testfrågor från verkliga ärenden, inklusive tio som kunskapsbasen inte kan besvara, där rätt beteende är att säga det. Den första versionen besvarar tre av dessa tio med påhittade steg. Teamet skärper instruktionerna och lägger till en regel att avstå när ingen artikel matchar, och felen minskar till ett. Under den första månaden läser en deskhandläggare varje samtal som inte löstes av assistenten, och ett urval av resten.

Det som förändras: assistenten löser ungefär en tredjedel av samtalen utan ärende, och handläggare lägger mindre tid på de repetitiva frågorna. Det som förblir svårt: kunskapsbasen har föråldrade artiklar som assistenten citerar, så teamet måste städa den; leverantören byter underliggande modell utan förvarning, vilket en gång ändrade beteendet över en natt; och personal på små filialer föredrar ibland att ringa. Chefen sätter en månatlig testkörning, en överenskommen kontakt för modelländringar och ett tydligt besked att telefon förblir tillgänglig.

## Fyra perspektiv

### Produkt- och leveransteam

Använd AI för att skriva utkast till kod, tester och dokumentation, under er vanliga granskning och pipelinekontroller. Registrera var AI användes och bevaka osäker eller olicensierad kod. Behandla AI-funktioner i er egen produkt som tjänster med ägare.

### Tjänste- och driftsteam

Använd AI för att sortera, sammanfatta och söka, med en person som avgör allt som påverkar användare eller system. Rapportera fel och nära misstag och hjälp till att justera vad AI:n ser och säger.

### Ledning och styrning

Be om förteckningen, ägarna, måtten och planen för fel. Sätt tydliga regler för data och beslut. Finansiera utbildning och testning, inte bara licenser.

### Kunder och användare

Du bör veta när du talar med en AI och kunna nå en människa. Tala om för leverantören när ett svar var fel eller ohjälpsamt. Var försiktig med vilka personuppgifter du delar.

## Agilitet, AI, automatisering och analys

### Agilitet

Pröva AI i små försök med verkliga användare, lär av återkopplingen och besluta att behålla, ändra eller sluta. Håll intressenter involverade i vad AI:n får göra. Se upp: en lyckad demo är inte belägg för att en användning är säker eller värdefull; kör ett verkligt försök med mått.

### AI

Det här ämnet är själva AI-linsen: varje användning behöver en ägare, en människa som beslutar där skada är möjlig, felupptäckt och mått. Se upp: delegera inte ansvar till en leverantör eller en modell; ni förblir ansvariga för de resultat er tjänst levererar.

### Automatisering

AI beslutar eller föreslår; automatisering agerar. Koppla dem försiktigt, med gränser för vad som får ske utan godkännande, loggar och ett sätt att stoppa. Se upp: en AI som utlöser automatisering kan snabbt mångfaldiga ett misstag; lägg till hastighetsgränser och granskning. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Mät nytta, felfrekvenser som hittats i stickprov, användaråterkoppling och kostnad. Se upp: användningstal och användarbetyg kan se bra ut medan kvaliteten är dålig; ta stickprov av utdata och jämför med en baslinje. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Verktyg före problem.** En funktion slås på och ingen mäter nyttan. Börja med en smärtpunkt och ett mått.
- **Ingen förteckning.** Användningar förökar sig osedda. Lista varje AI-användning med en ägare.
- **Mänsklig granskning bara till namnet.** Granskare stämplar. Ge tid, sammanhang och befogenhet och ta stickprov av deras beslut.
- **Självsäkra felaktiga svar.** Användare agerar på påhittade råd. Förankra svar, hänvisa till källor och avstå när osäker.
- **Dataläckor.** Känslig text går till externa verktyg. Sätt regler och kontrollera villkor.
- **Att ignorera modelländringar.** Beteendet skiftar efter en leverantörsuppdatering. Testa regelbundet och sätt en kontakt för ändringar.
- **Ingen väg ut.** Tjänsten beror på AI utan reserv. Erbjud en väg till en människa och en avstängning.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Förteckning och ägarskap | Okända användningar | Huvudsakliga användningar listade | Förteckning med ägare och syften | Förteckning granskas och testas | Förteckning integrerad med katalog och styrning |
| Mänskliga beslut | Odefinierade | Informell granskning | Definierade granskningspunkter för varje användning | Granskningskvalitet stickprovskontrolleras | Granskning anpassas efter risk och belägg |
| Testning och övervakning | Ingen | Demor | Testuppsättningar och regelbundna stickprov | Fel och drift mäts | Kontinuerlig utvärdering över användningar |
| Data och risk | Oklart | Medvetenhet | Regler för data och leverantörsvillkor | Efterlevnad kontrolleras och granskas | Risk förvaltas över team och leverantörer |

## Checklista

- [ ] Vi för en förteckning över AI-användningar, inklusive leverantörsfunktioner och personliga verktyg.
- [ ] Varje användning har en namngiven ägare.
- [ ] Vi skrev vad varje AI får göra ensam, vad som behöver granskning och vad den inte får göra.
- [ ] Svar är förankrade i granskade källor och visar dem.
- [ ] Vi har en testuppsättning och kör den regelbundet.
- [ ] Vi tar stickprov av utdata och följer fel, rättelser och återkoppling.
- [ ] Vi har regler för vilka data som går till vilka verktyg.
- [ ] Användare kan nå en människa, och vi kan stänga av varje AI-användning.

## AI-prompter

**Lista AI-användningar utifrån en beskrivning av våra verktyg.**

```text
Here is a description of the tools our team uses and what each does: [paste].
List which tools probably include AI features, what each might do, what data it might process, and a question to ask the vendor or owner. Mark clearly which items are guesses and do not state facts about vendors.
List what you are unsure of.
```

**Skriv ett utkast till testfrågor för en assistent.**

```text
Our assistant answers questions about [topics] using only these documents: [list titles].
Write 30 test questions: 15 that the documents answer, 10 that they do not, and 5 that try to make the assistant ignore its instructions. For each, state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

**Förbered en granskning av en AI-användning.**

```text
AI use: [describe]. Owner: [role]. Data used: [list]. Decisions it affects: [list].
Draft a one-page review with: purpose, what it may do alone, what needs human review, how errors are detected, how it is switched off, and open questions. Mark every item you could not fill from my description.
List what you are unsure of.
```

## AI-färdigheter

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): använd för att utforma prompter som är tydliga, förankrade och testbara.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): använd för att dokumentera vad en modell gör, dess data och dess begränsningar.
- [risk-register](../../../../skills/risk-register/SKILL.md): använd för att registrera AI-risker, ägare och beslut.
- [itil-5](../../../../skills/itil-5/SKILL.md): använd för att relatera AI-användning till ägarens nyaste vägledning, med overifierade påståenden flaggade.
- [mlops](../../../../skills/mlops/SKILL.md): använd för att förvalta modeller genom deras livscykel.

## Viktiga källor

- NIST, AI Risk Management Framework: en brett använd struktur för att identifiera och hantera AI-risk.
- ISO/IEC 42001 (själva standarden): krav för ett ledningssystem för artificiell intelligens; läs den aktuella utgåvan hos utgivaren.
- PeopleCert, ITIL certification pages: ägarens beskrivning av ITIL (version 5), inklusive AI.
- Wikipedia, "Artificial intelligence" och "Large language model": översikter av fältet och tekniken.

## Referenser

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
