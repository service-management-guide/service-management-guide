# Lean och kaizen

**Lean är ett sätt att tänka kring arbete som tar bort slöseri och fokuserar på det värde kunden får, och kaizen är dess vana av små, ständiga förbättringar av dem som utför arbetet; tillsammans ger de mycket av det praktiska tänkandet bakom agil tjänstehantering.**

## Varför det här är viktigt

Tjänsteteam bär mycket arbete som inte hjälper kunderna: dubbla godkännanden, rapporter som ingen läser, överlämningar som tappar information, ärenden som öppnas igen för att det första svaret missade poängen. Varje del verkar rimlig för sig. Tillsammans förbrukar de mer tid än det nyttiga arbetet, och de gör varje tjänst långsammare och dyrare än den behöver vara.

Lean-tänkandet ger ett ordförråd för att se det. Det frågar vad kunden värderar, följer de steg som producerar det och märker resten som slöseri att minska. Kaizen, ett japanskt ord som betyder "förändring till det bättre", ger metoden för att minska det: många små förbättringar, gjorda hela tiden, av dem som står närmast arbetet. Ingen stor omdesign behövs.

Båda idéerna kommer från tillverkning, särskilt Toyotas produktionssystem, och båda har anpassats till programvara och tjänster. De ligger under ITIL 4:s vägledande principer "fokusera på värde", "håll det enkelt och praktiskt" och "gör framsteg iterativt med återkoppling" (se ämne 1.5 — Vägledande principer i ITIL). Det här ämnet förklarar nyckelidéerna, visar hur man tillämpar dem på tjänstearbete och visar var de kan missbrukas.

## Grundbegrepp

**Lean-tillverkning och Toyotas produktionssystem.** Lean är en etikett för produktionsmetoder som härletts ur Toyotas produktionssystem, utvecklat efter andra världskriget. Syftet är att leverera värde till kunden, minska slöseri och förbättra flödet. Wikipedia-artiklarna om lean-tillverkning och om Toyotas produktionssystem ger bakgrunden. Ordet "lean" blev utbrett efter forskning om bilproduktion under slutet av 1900-talet.

**Värde och slöseri.** I lean-termer är värde det kunden är beredd att betala för eller skulle märka om det saknades. Slöseri, på japanska "muda", är varje aktivitet som förbrukar resurser och inte tillför värde. Lean namnger också "muri" (överbelastning av människor eller utrustning) och "mura" (ojämnhet i arbetet). Tillsammans kallas dessa tre ofta de tre M:en.

**Sju slags slöseri, översatta till tjänstearbete.** Den klassiska listan över sju slags slöseri i tillverkning har motsvarigheter i tjänster:

| Klassiskt slöseri | I tjänstearbete, till exempel |
|---|---|
| Transport | Att lämna ett ärende mellan många köer |
| Lager | En backlogg av beställningar som ingen någonsin kommer att göra |
| Rörelse | Att leta efter information i många system |
| Väntan | En beställning som ligger still i väntan på godkännande |
| Överproduktion | Rapporter och funktioner som ingen bett om |
| Överbearbetning | Godkännandesteg som inte tillför någon säkerhet |
| Defekter | Felaktiga rättningar som orsakar upprepade ärenden |

Många lean-skribenter lägger till ett åttonde, människors outnyttjade talang. Inom programvara anpassade Mary och Tom Poppendieck listan i sitt arbete om lean programvaruutveckling, som Wikipedia beskriver.

**Flöde och dragning.** Lean organiserar arbetet så att det flödar smidigt och så att nytt arbete startar när det finns kapacitet i stället för att skjutas in. Se ämne 2.3 — Flöde och kanban för verktygen.

**Respekt för människor.** Lean hos Toyota vilar på två pelare, ständig förbättring och respekt för människor. I praktiken innebär det att be dem som utför arbetet att hitta problemen och föreslå åtgärderna, snarare än att påtvinga förändringar utifrån. Lean-program som skär ned personal och kallar det förbättring missbrukar idén.

**Kaizen.** Ständig förbättring genom små förändringar. Wikipedia beskriver kaizen som ett angreppssätt som används av alla i en organisation, med förändringar som är små nog att prövas snabbt. En typisk kaizen-cykel använder slingan planera–göra–kontrollera–agera (PDCA): planera en förändring, pröva den, kontrollera resultatet och anta eller justera den. Se ämne 3.15 — Ständig förbättring.

**Gå och se (gemba).** "Gemba" är platsen där arbetet sker. Lean-praktik ber chefer och förbättrare att gå dit, titta och ställa frågor, snarare än att förlita sig på rapporter. För ett tjänsteteam kan gemba vara servicedesken, en ärendekö eller ett samtal med en kund.

**Rotorsaksverktyg.** Lean använder enkla metoder som "fem varför" (fråga varför upprepade gånger tills du når en orsak du kan agera på) och A3-problemlösning (en strukturerad sammanfattning på en sida). De stöder problemhantering (se ämne 3.3 — Problemhantering). De kräver omsorg: att fråga "varför" fem gånger kan leda till en person att skylla på i stället för en orsak i systemet.

**Felsäkring.** Poka-yoke är praktiken att utforma ett steg så att fel är svåra att göra eller fångas direkt. I tjänstearbete kan det vara ett obligatoriskt fält, en mall, en kontroll i en pipeline eller en bekräftelse före en riskfylld åtgärd. Autonomation, ibland kallad jidoka, avser att stoppa en process när ett fel upptäcks, vilket har en modern motsvarighet i pipelines som stannar vid ett fallerande test.

**Stoppa linjen.** Andon-snöret i en Toyota-fabrik låter vilken arbetare som helst stoppa linjen när hen ser ett problem. Översatt till tjänster kan vem som helst lyfta ett problem som kan skada kunder, och teamet behandlar signalen som användbar, inte störande.

**Lean och agilt.** Lean-tänkandet påverkade agil programvaruutveckling, och de två överlappar: små batcher, återkoppling, ständig förbättring, respekt för människor. Den här guiden betonar kontinuerligt intressentdeltagande, ständig förbättring och kontinuerlig leverans av fungerande förändring, vilket lean stöder.

**Hur linserna passar in.** Lean och kaizen är förbättringsmotorn för den agila linsen. AI kan hitta mönster i ärenden som tyder på slöseri, under granskning. Automatisering tar bort upprepade manuella steg, efter att ni förenklat dem. Analys visar var arbete väntar och var defekter uppstår.

## Bra arbetssätt

1. **Definiera värde ur kundens synvinkel.** Skriv för varje tjänst vad kunden värderar. Märk varje steg i processen som värdeskapande, nödvändigt men inte värdeskapande, eller slöseri.
2. **Gå och se.** Tillbringa tid där arbetet sker, titta på verkliga beställningar och tala med dem som utför dem. Rapporter är inget substitut.
3. **Ta bort slöseri före automatisering.** Förenkla processen först. Att automatisera ett slösaktigt steg gör slöseriet billigare att producera, inte mindre.
4. **Låt dem som står närmast arbetet förbättra det.** Ge team tid, befogenhet och ett enkelt sätt att pröva förändringar. Gå snabbt igenom deras idéer och berätta vad som hände.
5. **Gör förbättringar små och snabba.** Sikta på förändringar som kan prövas inom dagar. Kör dem som experiment med en uttalad förväntan och ett datum för kontroll.
6. **Åtgärda orsaker, inte människor.** När något går fel, fråga vad i systemet som tillät det. Använd rotorsaksmetoder för att hitta orsaker och undvik att stanna vid "mänskligt fel".
7. **Felsäkra de upprepade stegen.** Lägg till obligatoriska fält, mallar, kontroller och bekräftelser där fel har inträffat mer än en gång.
8. **Låt vem som helst stoppa linjen.** Skapa ett tryggt sätt att lyfta oro kring en ändring eller ett incidentsvar. Tacka den som lyfte den.
9. **För en förbättringstavla.** Visa förbättringsidéer, deras status och resultat där teamet och intressenterna kan se dem.
10. **Använd inte lean som täckmantel för nedskärningar.** Om förbättring leder till uppsägningar slutar människor föreslå förbättringar. Säg hur tidsbesparingar ska användas.

## Frågor att diskutera i teamet

**Vad värderar våra kunder hos den här tjänsten, och vad gör vi som de inte skulle märka om det upphörde?**
Det här skiljer värde från aktivitet. Team hittar ofta rapporter, godkännanden eller kontroller som ingen använder. Fråga efter kundens syn om möjligt. Fördjupa genom att välja en aktivitet att sluta med under en månad, med en ägare som bevakar eventuell skada.

**Vilka av de klassiska slag av slöseri ser vi oftast, och vad är ett färskt exempel på var och en?**
Använd tabellen över sju slags slöseri. Människor nämner oftast väntan och omarbete först. Be om verkliga ärenden eller incidenter. Fördjupa genom att välja det slöseri som kostar mest tid.

**När föreslog någon senast en förbättring, och vad hände med idén?**
Det här prövar förbättringssystemet. Du kan få höra att idéer försvinner eller att den som föreslår får arbetet. Fråga hur lång tid det tog att svara. Fördjupa genom att komma överens om en svarstid och en synlig lista.

**Vilka upprepade fel kunde vi göra omöjliga, eller åtminstone uppenbara?**
Leta efter misstag som sker om och om igen: fel kategori, ett saknat fält, ett kommando som körts på fel system. Fråga hur ett enkelt skydd skulle se ut. Fördjupa genom att välja ett fel och ett skydd att pröva.

**Var skyller vi på människor när systemet tillät felet?**
Det här känner av kulturen. Granskningar slutar ofta med "var mer försiktig". Fråga vad som gjorde felet sannolikt och vad som skulle göra det svårare. Fördjupa genom att skriva om slutsatsen i en tidigare granskning i termer av systemet.

**Hur skulle AI hjälpa oss hitta slöseri, och hur skulle vi kontrollera att den hade rätt?**
AI kan gruppera ärenden, hitta upprepade frågor och föreslå kandidater för automatisering. Den kan också hitta på mönster. Fråga vem som kontrollerar ett urval av det den hittar. Fördjupa genom att välja ett urval ärenden för att testa dess gruppering för hand först.

## I praktiken: ett exempel på tjänstehantering

En statlig förmånsmyndighet driver ett kontaktcenter som besvarar frågor om ansökningar. Personalen säger att de tillbringar dagarna med att "jaga information". Teamledaren, som gått en kort lean-kurs, beslutar att gå ut på golvet. Hon sitter med handläggare i tre dagar och registrerar för 120 samtal skälet till varje samtal och vad handläggaren gjorde.

Hon finner att 40 av de 120 samtalen var upprepade samtal om samma ansökan, eftersom den första handläggaren inte kunde se statusen som fanns i ett annat system. Ytterligare 25 gällde ett brev som använde termer som den som ringde inte förstod. Handläggarna lade en stor del av varje samtal på att växla mellan fyra skärmar.

Teamet prövar tre små förändringar under sex veckor: det skriver om det förvirrande brevet med några enkla meningar och testar det på ett urval sökande, lägger till en skärm som visar ansökningsstatus hämtad från det andra systemet och skapar en enkelsidig guide för de fem vanligaste frågorna. Handläggarna föreslår en fjärde förändring, en mall för samtalsanteckningar som minskar omförklaring över skiften. Var och en prövas i två veckor och granskas vid ett kort veckomöte.

Det som förändras: upprepade samtal minskar i det urval teamet följer, och handläggarna rapporterar mindre växlande. Det som förblir svårt: statusskärmen beror på en integration som ägs av en annan avdelning, som ännu inte gått med på att underhålla den; teamet har inget bra sätt att mäta om de som ringer förstod brevet annat än att fråga dem; och en chef har frågat hur många handläggartimmar förändringarna sparade, vilket frestar människor att räkna fram en siffra. Ledaren håller fokus på uppringarnas upplevelse och kommer överens med sin chef om att besparingar ska användas för att minska backloggen, inte för att skära ned personal.

## Fyra perspektiv

### Produkt- och leveransteam

Definiera värde ur användarens synvinkel och ta bort funktioner och steg som inte tjänar det. Använd små experiment, felsäkra upprepade steg och behandla operativa problem som signaler för designförändring.

### Tjänste- och driftsteam

Ni ser slöseri dagligen. Registrera det, ta med exempel till förbättringstavlan och pröva små åtgärder. Använd stoppa-linjen när en ändring eller ett svar kan skada kunder.

### Ledning och styrning

Gå och se. Fråga teamet vad de skulle ändra och ge tid att göra det. Skydda dem som lyfter problem. Var tydlig med att lean inte är ett kostnadsbesparingsprogram.

### Kunder och användare

Du vet vad du värderar. Tala om för leverantören vilka steg som är meningslösa för dig och vilka som hjälper. Om du ger återkoppling, räkna med att få höra vad som ändrades.

## Agilitet, AI, automatisering och analys

### Agilitet

Lean och kaizen ger förbättringsvanan: små förändringar, frekvent återkoppling, involverade intressenter och människor som man litar på att förbättra sitt eget arbete. Se upp: förbättringstavlor kan bli ännu en backlogg som ingen granskar; håll listan kort och granskad.

### AI

AI kan gruppera ärenden, hitta upprepade frågor och föreslå var slöseri finns. Varje användning behöver en ägare och en person som kontrollerar ett urval. Se upp: en AI-sammanfattning kan hitta mönster som bara är artefakter av hur ärenden kategoriserades; verifiera mot arbetet. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera de steg som återstår efter att slöseriet tagits bort och processen är stabil, till exempel att dirigera en beställning eller uppdatera en status, och för logg och ha ett sätt att backa. Se upp: automatisering kan låsa in en dålig process och göra förändring svårare; granska efter varje betydande automatisering. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Mät var arbete väntar, hur ofta det görs om och hur lång tid upprepade kontakter tar. Se upp: att räkna "sparade timmar" inbjuder till uppblåsta påståenden och kan undergräva förtroendet; följ också kund- och teamupplevelse. Se ämne 7.6 — Process- och värdeströmsanalys och boken *Service Management Metrics*.

## Vanliga felmönster

- **Lean som kostnadsbesparing.** Människor slutar föreslå förbättringar. Säg hur vinsterna ska användas och håll det löftet.
- **Förbättring på avstånd.** Konsulter omformar det de inte har observerat. Gå och se och involvera dem som utför arbetet.
- **Att automatisera slöseri.** En dålig process skriptas. Förenkla först.
- **Att skylla på människor.** Granskningar slutar med "mänskligt fel". Leta efter vad i systemet som tillät det.
- **Förbättringsidéer försvinner.** Människor slutar föreslå. Svara snabbt och visa listan.
- **Stora förbättringsprogram.** Förändringen tar ett år och levererar lite. Föredra små experiment med kontroller.
- **Att räkna besparingar som målet.** Siffror blåses upp. Mät kundresultat och upplevelse.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Värde och slöseri | Värde antas | Visst slöseri identifierat | Värde och slöseri definierade per tjänst | Slöseri följs och minskas | Slöseriminskning samordnas över tjänster och leverantörer |
| Förbättringsvana | Förbättring i kris | Några eldsjälar | Regelbundna små experiment med granskning | Resultat mäts och delas | Förbättring inbäddad i team och över partner |
| Problemlösning | Skuldbeläggning | Viss rotorsaksanalys | Standardmetod för rotorsak används | Orsaker följs till förebyggande | Lärande delas över organisationen |
| Felsäkring | Sällsynt | Skydd ad hoc | Skydd för kända upprepade fel | Skyddens effekt mäts | Skydd inbyggda i verktyg och pipelines överallt |

## Checklista

- [ ] Vi skrev ned vad varje tjänsts kunder värderar.
- [ ] Vi gick dit arbetet sker och tittade på verkligt arbete.
- [ ] Vi klassificerade steg som värdeskapande, nödvändiga eller slöseri.
- [ ] Förbättringsidéer är synliga, besvaras snabbt och följs.
- [ ] Vi prövar förändringar som små experiment med ett kontrolldatum.
- [ ] Granskningar söker orsaker i systemet, inte skuld.
- [ ] Vi lade till skydd för upprepade fel.
- [ ] Vi sa hur förbättringsvinster ska användas.

## AI-prompter

**Klassificera steg som värde eller slöseri för granskning.**

```text
Here are the steps in our process for [service], with who does each and roughly how long it takes: [paste steps].
Propose for each step whether it adds value to the customer, is necessary but not value-adding, or looks like waste, with a one-line reason and a question to confirm with the people who do it. Do not recommend removing anything.
List what you are unsure of.
```

**Hitta upprepade frågor i ärenden.**

```text
Below are ticket titles and first messages, with personal data removed: [paste sample].
Group them into up to eight themes, count each, and quote two short examples per theme exactly. Do not guess causes.
List what you are unsure of.
```

**Gör en rotorsaksanteckning till systemfrågor.**

```text
Here is a summary of a recent failure: [paste summary].
Rewrite it as a list of questions about what in our system allowed the failure, avoiding blame, and suggest one guard to consider for each. Do not state causes that are not in the summary.
List what you are unsure of.
```

## AI-färdigheter

- [kaizen](../../../../skills/kaizen/SKILL.md): använd för att planera och driva små förbättringsexperiment.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): använd för att hitta orsaker i systemet.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): använd för att se slöseri och väntetider i flödet.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): använd för att ordna möjliga orsaker inför diskussion.

## Viktiga källor

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): en grundares redogörelse för idéerna.
- Mary och Tom Poppendieck, *Lean Software Development: An Agile Toolkit* (2003): anpassar lean-tänkande till programvara.
- Wikipedia, "Lean manufacturing" och "Kaizen": neutrala sammanfattningar med vidare läsning.
- Wikipedia, "Lean software development": anpassningen för programvaruarbete.

## Referenser

1. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
2. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
3. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
4. Muda (Japanese term) — Wikipedia — https://en.wikipedia.org/wiki/Muda_(Japanese_term)
5. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
6. Gemba — Wikipedia — https://en.wikipedia.org/wiki/Gemba
7. Poka-yoke — Wikipedia — https://en.wikipedia.org/wiki/Poka-yoke
8. Andon (manufacturing) — Wikipedia — https://en.wikipedia.org/wiki/Andon_(manufacturing)
9. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
10. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
