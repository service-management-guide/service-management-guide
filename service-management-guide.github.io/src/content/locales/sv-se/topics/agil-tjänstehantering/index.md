# Agil tjänstehantering

**Agil tjänstehantering tillämpar agila värderingar på utformningen och förbättringen av själva praktikerna i tjänstehantering: varje praktik har en ägare som agerar som en produktägare, en liten backlogg av förbättringar, korta återkopplingsloopar med dem som använder praktiken och kontroller inbyggda i arbetet.**

## Varför det här är viktigt

Praktiker inom tjänstehantering utformas ofta en gång, skrivs in i ett processdokument och upprätthålls. Dokumentet åldras när tekniken och organisationen förändras. Människor går runt steg som inte längre är rimliga, och praktiken glider bort från vad papperet säger. Att revidera den blir ett projekt med en kommitté och en lång cykel, och när revisionen landar är den redan föråldrad.

Om agila idéer är bra för att bygga programvara bör de också vara bra för att utforma de praktiker som styr hur programvara drivs. En praktik som ändringsmöjliggörande kan behandlas som en produkt med användare, de som lägger fram och godkänner ändringar. Dess ägare kan lyssna på dessa användare, hålla en backlogg av små förbättringar, släppa dem ofta och kontrollera om de hjälpte. Det är vad det här ämnet menar med agil tjänstehantering.

Idén stämmer med ITIL 4:s vägledande principer, som "gör framsteg iterativt med återkoppling" och "börja där du är" (se ämne 1.5 — Vägledande principer i ITIL), och passar fokuset på ständig förbättring i tjänstevärdesystemet. Ägarens beskrivning av den nyaste ITIL-versionen betonar ett angreppssätt för värdeskapande som kopplar strategi, leverans och mätbara resultat (se ämne 1.3 — ITIL 5). Praktiker som förbättras i små steg och visar sina resultat passar den riktningen.

## Grundbegrepp

**Praktiker som produkter.** En praktik som incidenthantering betjänar en uppsättning användare: handläggare, kunder, chefer, revisorer. En praktikägare, som agerar som en produktägare, ansvarar för hur väl den betjänar dem. Ägaren samlar in återkoppling, håller en backlogg av ändringar av praktiken och avgör vad som ska ändras härnäst. Se ämne 2.8 — Produkt- och tjänsteägarskap.

**Processbacklogg.** En kort, ordnad lista över förbättringar av praktiken: ett formulär att förenkla, ett steg att ta bort, en rapport att sluta med, en ny automatisering. Punkter kommer från användare, från incidentgranskningar och från mätning. Wikipedia-artikeln om backloggar förklarar idén. Ägaren går regelbundet igenom listan med användare och väljer några punkter att pröva.

**Små ändringar med återkoppling.** Praktikändringar görs i små delar och prövas först med en begränsad grupp, till exempel ett team eller en typ av beställning. Ägaren frågar användarna vad som hände och behåller, justerar eller backar ändringen. Det ersätter stora omskrivningar av ett processdokument.

**Praktikens användare.** De som måste följa praktiken är dess huvudsakliga användare. Deras upplevelse spelar roll: en praktik de inte kan följa kommer att ignoreras eller manipuleras. Involvera några av dem i varje ändring.

**Kontroller inom arbetet.** Där en praktik finns för att hantera risk, som godkännande av riskfyllda ändringar, föredrar agil tjänstehantering att bygga in kontrollen i verktygen och pipelinen och ta fram belägg som en biprodukt. Se ämne 2.2 — Kontinuerlig leverans och ämne 3.4 — Ändringsmöjliggörande.

**Lättviktig dokumentation.** Beskriv en praktik på en eller två sidor: syfte, vem som är involverad, vad som händer, hur man ber om hjälp och hur den förbättras. Behåll detaljer i verktygen och i korta, aktuella guider. Långa procedurhandböcker läses sällan.

**Granskningstakt.** Sätt en regelbunden tid, till exempel månatligen, för att gå igenom backloggen, måtten och återkopplingen och avgöra vad som ska ändras. Mellan granskningarna kan brådskande rättningar göras vid behov.

**Experiment.** Behandla en ändring som ett experiment med en förväntad effekt och ett datum för kontroll. Till exempel: "Vi förväntar oss att borttagning av det andra godkännandet för lågriskändringar kortar ledtiden med en dag utan fler misslyckanden. Vi kontrollerar efter fyra veckor." Om effekten inte syns, ändra tillbaka.

**Agilitet och ITIL tillsammans.** Agil tjänstehantering kastar inte ramverket. Den använder ITIL-praktiker som en källa till idéer och ordförråd och anpassar dem. Där en praktik är en riskkontroll med verkliga följder behåller den kontrollen och ändrar hur den möts.

**Vad det inte betyder.** Det betyder inte att släppa dokumentation, ignorera revisionskrav eller köra ceremonier för sakens skull. Om ert team väljer att använda sprintar eller Kanban för förbättringsarbetet kan de passa; poängen är den kontinuerliga cykeln av återkoppling och små förändringar.

**Hur linserna passar in.** Praktikägarens backlogg är den agila linsen riktad mot själva tjänstehanteringen. AI kan analysera ärenden och återkoppling för att föreslå förbättringar, under granskning. Automatisering gör praktikregler till verktygsbeteende. Analys visar om praktiker fungerar.

## Bra arbetssätt

1. **Utse en praktikägare.** Varje större praktik har en person som ansvarar för dess kvalitet och förbättring. Ägaren är både en användare av praktiken och dess formgivare.
2. **Börja med användarnas smärta.** Fråga dem som följer praktiken vad som är långsamt, oklart eller meningslöst och lista svaren. Börja med det de lyfter, inte med det ramverket föreslår.
3. **Håll en synlig, kort backlogg.** Visa den där användare kan se den. Begränsa antalet pågående punkter och slutför innan ni påbörjar fler.
4. **Ändra i små steg.** Pröva varje ändring med ett team eller en beställningstyp, med en uttalad förväntan och ett datum för granskning.
5. **Mät effekten.** Välj en eller två indikatorer för varje ändring, till exempel tid till godkännande eller andelen beställningar som skickas tillbaka för saknad information. Säg hur måttet kan vilseleda.
6. **Bygg in kontroller i verktygen.** Där det går, gör den säkra åtgärden till standard, till exempel ett obligatoriskt fält eller en automatisk kontroll, och registrera belägg automatiskt.
7. **Skriv mindre, länka mer.** Håll praktikbeskrivningen kort, länka till verktyg och exempel och ta bort sidor som ingen läser.
8. **Granska i fast takt.** Håll en kort månatlig genomgång med några användare och publicera vad som ändrades och varför.
9. **Respektera verkliga krav.** Stäm av med revision, säkerhet och juridik när en ändring berör en kontroll, och involvera dem tidigt så att ni kan förklara hur den nya metoden möter syftet.
10. **Avveckla det som inte hjälper.** Ta bort steg, formulär och rapporter som inte visar något värde och säg det offentligt.

## Frågor att diskutera i teamet

**Vilka av våra praktiker går människor runt, och varför?**
Kringgåenden visar var praktiken inte passar arbetet. Be om konkreta exempel, till exempel ett formulär som fylls med "n/a". Behandla det inte som regelbrott först. Fördjupa genom att välja ett kringgående och fråga vilken förändring som skulle göra den officiella vägen enklare.

**Vem äger var och en av våra praktiker, och hur hör de från dem som använder dem?**
Många praktiker saknar både ägare och återkopplingsväg. Fråga när ägaren senast talade med användare. Räkna med tystnad. Fördjupa genom att komma överens om ett regelbundet samtal med några användare.

**Vilken är den minsta förändringen av en praktik vi kunde pröva nästa vecka, och hur skulle vi veta att den hjälpte?**
Det här uppmuntrar små experiment. Team föreslår ofta omdesign. Pressa på för något litet, med ett mått och ett granskningsdatum. Fördjupa genom att namnge ägaren och den som kontrollerar.

**Vilka av våra kontroller kunde mötas av verktygen eller pipelinen i stället för ett möte eller ett formulär?**
Leta efter kontroller som förlitar sig på att människor kommer ihåg. Fråga vilka belägg revisorn behöver. Fördjupa genom att pröva en automatisk kontroll med kontrollens ägare involverad.

**Hur lång är vår praktikdokumentation, och vem läser den?**
Kontrollera om dokumenten används. Fråga nyanställda vad de läser. Räkna med långa handböcker som ingen öppnar. Fördjupa genom att skriva en enkelsidig version av en praktik och testa den med en nyanställd.

**Hur kunde AI hjälpa oss se vad som inte fungerar i våra praktiker, och vad skulle vi vilja kontrollera för hand?**
AI kan hitta mönster i ärenden och återkoppling. Den kan också hitta mönster som är artefakter av hur människor fyller i fält. Fråga vem som läser ett urval. Fördjupa genom att jämföra en AI-analys av en månads ärenden med en manuell granskning.

## I praktiken: ett exempel på tjänstehantering

Ett universitets it-avdelning har en praktik för ändringsmöjliggörande med ett veckovist granskningsråd. Personalen säger att formuläret är långt och att rådet lägger en vecka till varje ändring. Revisorer värdesätter det, eftersom det ger ett register. Praktikägaren, en senior tjänstechef, beslutar att behandla det som en produkt.

Hon intervjuar åtta personer som lade fram ändringar den senaste månaden och deltar i ett rådsmöte. Hon finner att 70 procent av ändringarna är rutinmässiga och lågriskiga, att formuläret har 22 fält varav åtta någonsin läses och att rådet mest godkänner det det ser. Hon gör en kort backlogg: förkorta formuläret, definiera en kategori "standardändring" som förhandsgodkänns utifrån risk snarare än genom möte och länka varje ändringspost till de automatiska testresultaten.

Hon prövar det kortare formuläret med ett team i fyra veckor, med förväntan att genomsnittlig tid från beställning till godkännande för standardändringar ska sjunka från sex dagar till två. Hon ber den interna revisorn granska de föreslagna reglerna för standardändringar. Revisorn ber om en stickprovskontroll och en månatlig genomgång av misslyckanden. Teamet går med på det. Efter fyra veckor faller genomsnittet till under två dagar, och antalet misslyckade ändringar stiger inte.

Det som förändras: rådet lägger nu sin tid på de 30 procent av ändringarna med verklig risk, och registret genereras ur pipelinen. Det som förblir svårt: andra team använder ett annat verktyg som inte kan visa testresultat, så deras register förblir manuella; revisorns stickprov ger arbete som ingen har avsatt resurser för; och vissa rådsmedlemmar saknar den gamla veckoritualen och upplever att deras roll har krympt. Ägaren behåller en månatlig genomgång och ber rådet om idéer.

## Fyra perspektiv

### Produkt- och leveransteam

Ni är de huvudsakliga användarna av ändrings- och releasepraktiker. Ge återkoppling tidigt, delta i försök och bygg in kontroller i er pipeline så att praktiken kan förlita sig på belägg.

### Tjänste- och driftsteam

Ni äger ofta praktikerna. Agera som produktägare: lyssna på användare, håll en kort backlogg och pröva små förändringar. Dela resultat och avveckla steg som inte hjälper.

### Ledning och styrning

Be ägare om praktikbackloggen, måtten och den återkoppling de hört. Stöd förändringar som ersätter manuella kontroller med inbyggda, efter att ha involverat revision och risk. Kräv inte långa dokument.

### Kunder och användare

När en praktik påverkar dig, som ett beställningsformulär, bör du kunna säga vad som är krångligt och se det förbättras. Fråga vem som äger den och hur du ger återkoppling.

## Agilitet, AI, automatisering och analys

### Agilitet

Det här ämnet är den agila linsen tillämpad på praktikerna: små steg, intressentdeltagande, regelbunden översyn och ständig förbättring. Se upp: kör inte agila ritualer kring en praktik; håll fokus på återkoppling och små förändringar.

### AI

AI kan analysera ärenden och återkoppling för att föreslå förbättringar, skriva utkast till enkelsidiga praktikbeskrivningar och kontrollera ny text mot källreglerna, med en person som granskar. Varje användning behöver en ägare. Se upp: AI kan skriva polerade rutiner som ingen följer; testa dem med verkliga användare. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Gör praktikregler till verktygsbeteende: dirigering, obligatoriska fält, automatiska godkännanden för lågriskändringar och beläggsinsamling. För logg och ha ett sätt att backa ändringar. Se upp: att bädda in en felaktig regel i automatisering härdar den; pröva regeln manuellt först. Se ämne 6.2 — Arbetsflödesautomatisering och orkestrering.

### Analys

Använd några få indikatorer på hur varje praktik presterar, till exempel tid till godkännande, omarbete och användarnöjdhet. Se upp: att räkna efterlevnad, som "procent av ändringarna med fullständigt formulär", kan manipuleras och säger lite om huruvida praktiken hjälper; se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Praktikomdesign som projekt.** En kommitté skriver om processen i månader. Gör små ändringar med återkoppling.
- **Ingen praktikägare.** Ingen förbättrar den. Utse en ägare.
- **Ägaren talar aldrig med användare.** Praktiken glider. Schemalägg regelbundna samtal.
- **Att släppa kontroller utan ersättning.** Risk- och revisionsinvändningar följer. Möt kontrollens syfte i verktygen.
- **Långa dokument.** Ingen läser dem. Skriv en sida och länka till detaljer.
- **Att bara mäta efterlevnad.** Människor fyller i formulär och inget förbättras. Mät resultat och upplevelse.
- **Ceremoni utan förändring.** Möten hålls och backloggen rör sig inte. Begränsa pågående arbete och slutför punkter.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Praktikägarskap | Ingen ägare | Ägare för huvudpraktiker | Varje praktik har en ägare och en backlogg | Ägare granskar resultat med användare | Ägare samordnar över praktiker och partner |
| Förändring av praktiker | Sällsynta, stora omskrivningar | Enstaka förbättringar | Regelbundna små experiment med granskning | Resultat mäts och agerar man på | Experiment delas över organisationen |
| Kontroller | Manuella och genom möte | Några inbyggda | Standardkontroller inbyggda i verktyg | Belägg stickprovskontrolleras och granskas | Kontroller automatiserade och anpassade efter risk |
| Dokumentation | Långa handböcker | Några korta guider | Enkelsidiga beskrivningar hålls aktuella | Användning av dokument kontrolleras | Delad, sökbar vägledning i sitt sammanhang |

## Checklista

- [ ] Varje större praktik har en namngiven ägare.
- [ ] Varje ägare håller en kort, synlig backlogg.
- [ ] Vi talar regelbundet med användare av varje praktik.
- [ ] Vi prövar ändringar i små steg med ett mått och ett granskningsdatum.
- [ ] Kontroller är inbyggda i verktyg där det går.
- [ ] Revision och risk är involverade när kontroller ändras.
- [ ] Praktikbeskrivningar är korta och aktuella.
- [ ] Vi avvecklar steg som inte hjälper och säger det.

## AI-prompter

**Analysera återkoppling om en praktik.**

```text
Here is feedback from people who follow our [practice name] practice, with names removed: [paste feedback].
Group it into up to six themes, count each, quote two short examples per theme, and list questions the owner should ask. Do not suggest solutions.
List what you are unsure of.
```

**Skriv ett utkast till en enkelsidig praktikbeskrivning.**

```text
Here is the current description of our [practice] practice: [paste text].
Draft a one-page version with: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep every rule that appears in the original; mark any rule you are unsure how to phrase. Do not add rules.
List what you are unsure of.
```

**Planera ett litet experiment.**

```text
We want to change [practice step] to [proposed change]. Our current measure: [describe]. The people affected: [list].
Write an experiment plan: expectation, one or two measures, how each could mislead, who to involve, how long to run it, and what would make us reverse it. Do not claim the change will work.
List what you are unsure of.
```

## AI-färdigheter

- [agile-principles](../../../../skills/agile-principles/SKILL.md): använd för att kontrollera praktikändringar mot agila värderingar.
- [kaizen](../../../../skills/kaizen/SKILL.md): använd för att planera små förbättringsexperiment.
- [change-request](../../../../skills/change-request/SKILL.md): använd för att utforma en lättare ändringspost.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): använd för att analysera en praktiks steg och väntetider.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av ITIL-vägledningen och dess nyaste version.
- Wikipedia, "Backlog": bakgrund till listan som driver förbättring.
- Wikipedia, "Continual improvement process": idén om ständig förändring.
- Wikipedia, "Agile management": tillämpningen av agila idéer på ledning.

## Referenser

1. Agile management — Wikipedia — https://en.wikipedia.org/wiki/Agile_management
2. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
3. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
4. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
5. Feedback — Wikipedia — https://en.wikipedia.org/wiki/Feedback
6. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
7. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
8. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
9. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
