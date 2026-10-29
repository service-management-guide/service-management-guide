# Leverantörshantering

**Leverantörshantering ser till att de leverantörer, molnleverantörer och partner en tjänst beror på levererar det som överenskommits och att ni kan klara er när de inte gör det; den fungerar när leverantörer behandlas som en del av tjänsten, avtal motsvarar de servicenivåer ni lovar och relationen inkluderar gemensam granskning och en utträdesplan.**

## Varför det här är viktigt

Få tjänster levereras av en enda organisation. En banks mobilapp körs på en molnplattform, använder en betalningsförmedlare, skickar meddelanden genom en teleleverantör och stöds utanför kontorstid av en leverantör av förvaltade tjänster. Var och en av dessa är en länk i kedjan. När en fallerar skiljer kunden inte mellan banken och dess leverantör. Banken är ansvarig.

Leverantörshantering är den praktik som tar sig an den verkligheten. Den täcker att välja leverantörer, komma överens om vad de ska tillhandahålla, följa hur de presterar, förvalta relationen och planera för förändring eller fel. När den fungerar blir leverantörer en del av tjänsteteamet, med gemensamma mål och öppen kommunikation. När den fallerar upptäcker organisationer för sent att ett avtal lovar mindre än den tjänst de lovat sina egna kunder, eller att det skulle ta två år att lämna en leverantör.

Moderna tjänster gör detta svårare och viktigare. Molnplattformar och programvara som tjänst levererar förmågor på minuter och kan vara svåra att lämna. AI-tjänster lägger till nya beroenden av modeller och datapraktiker som köparen inte kan se. Det här ämnet förklarar praktiken, de huvudsakliga arrangemangen och fällorna. Det hänger ihop med hantering av servicenivåer (ämne 3.7 — Hantering av servicenivåer), tjänstekontinuitet (ämne 3.12 — Hantering av tjänstekontinuitet) och ekonomistyrning (ämne 4.5 — Ekonomistyrning och FinOps). Det ger ingen juridisk rådgivning eller upphandlingsrådgivning; skaffa sådan hos rätt specialister.

## Grundbegrepp

**Leverantör.** En part som tillhandahåller produkter eller tjänster till en organisation, till exempel en säljare, en konsult, en molnleverantör eller en partner. I ITIL 4:s termer förekommer leverantörer i dimensionen "partner och leverantörer" (se ämne 1.6 — Fyra dimensioner av tjänstehantering). En leverantör kan också vara en konkurrent, en kund eller en del av samma koncern.

**Leverantörshantering.** Praktiken att säkerställa att organisationens leverantörer och deras prestation hanteras på lämpligt sätt för att stödja en smidig leverans av produkter och tjänster med god kvalitet. Wikipedia beskriver besläktade idéer under leverantörsrelationshantering och system för leverantörshantering.

**Outsourcing.** Att lägga ut en aktivitet på en extern part. Wikipedia beskriver outsourcing och offshoring, med deras motiv och risker. Outsourcing flyttar arbete; det flyttar inte ansvaret för resultatet till kunden.

**Flerleverantörsupplägg och integration.** Många organisationer använder flera leverantörer, var och en för en del av tjänsten. Wikipedia beskriver multisourcing. Någon måste samordna dem så att kunden ser en tjänst. Rollen kallas ibland tjänsteintegration och -förvaltning (SIAM), beskriven på Wikipedia, och den kan utföras av kunden, en ledande leverantör eller en specialist. Se färdigheten service-integration-and-management i den här guiden.

**Moln och programvara som tjänst.** Molnberäkning och programvara som tjänst flyttar infrastruktur och applikationer till leverantörer. Wikipedia beskriver båda. Ansvaret är delat: leverantören säkrar och driver plattformen; kunden konfigurerar, använder och säkrar det den lägger där. Uppdelningen skiljer sig mellan tjänstemodeller, och att missförstå den är en vanlig orsak till incidenter. Läs leverantörens beskrivning av sin modell för delat ansvar.

**Avtal och överenskommelser.** Ett avtal anger vad leverantören ska tillhandahålla, till vilket pris, till vilka servicenivåer och med vilka åtgärder. Ett underliggande avtal stöder de servicenivåer ni lovat er egen kund; de två måste vara förenliga. Se ämne 3.7 — Hantering av servicenivåer. Wikipedia-artikeln om avtalshantering beskriver hantering av överenskommelser under deras livstid.

**Due diligence.** Att kontrollera en leverantör före åtagande: finansiell hälsa, säkerhetspraxis, referenser, certifieringar och förmåga att möta behovet. Wikipedia beskriver due diligence. Anpassa kontrollerna efter leverantörens betydelse.

**Prestationshantering.** Att följa vad leverantören levererar mot vad som överenskommits, med regelbundna granskningar. Mått bör spegla vad som är viktigt för er och bygga på data ni kan kontrollera. Nyckeltal beskrivs på Wikipedia, liksom varningar för dem. Se boken *Service Management Metrics*.

**Relation och styrning.** En leverantörsrelation behöver namngivna kontakter på båda sidor, regelbundna möten, en eskaleringsväg och ett sätt att lyfta oro. Tonen spelar roll: leverantörer som behandlas som motståndare tenderar att skydda sig själva; leverantörer som behandlas som partner tenderar att dela problem tidigt.

**Inlåsning hos leverantör.** En situation där det är kostsamt eller opraktiskt att byta leverantör. Wikipedia beskriver vendor lock-in. Inlåsning är ibland ett acceptabelt pris för värde; det bör vara ett medvetet val. Öppna standarder och interoperabilitet, beskrivna på Wikipedia, minskar den.

**Utträdesplanering.** En plan för att avsluta relationen: hur data och tjänster ska överföras, hur lång tid det skulle ta, vad det skulle kosta och vad leverantören måste tillhandahålla. Wikipedia beskriver utträdesstrategier i allmänhet. En utträdesplan som aldrig har granskats är en förhoppning. För kritiska leverantörer, testa delar av den.

**Koncentration och beroende.** Att vara starkt beroende av en leverantör, eller av flera som förlitar sig på samma underliggande leverantör, skapar koncentrationsrisk. Kartlägg beroenden, inklusive indirekta. Se ämne 3.12 — Hantering av tjänstekontinuitet.

**Informationssäkerhet och data.** Leverantörer hanterar ofta känsliga data. Kom överens om säkerhetskrav, incidentrapportering, revisionsrätt samt dataplats och återlämnande. Kontrollera den lag som gäller er. Se ämne 3.13 — Informationssäkerhetshantering.

**AI-leverantörer.** Leverantörer av AI-modeller och -tjänster för med sig särskilda frågor: vilka data de tränar på, om era indata sparas, hur ändringar av modeller tillkännages och vilken tillsyn ni kan utöva. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

**Hur linserna passar in.** Leverantörshantering tillämpar ständig förbättring på relationer: regelbunden granskning och gemensam förbättring. AI kan hjälpa till att läsa avtal och sammanfatta prestation, under juridisk och mänsklig granskning. Automatisering samlar in prestationsdata och förnyelsedatum. Analys visar leverantörsprestation och utgifter.

## Bra arbetssätt

1. **Känn era leverantörer och vad var och en tillhandahåller.** För ett register över leverantörer med de tjänster de stöder, avtalsdatum, ägare och kritikalitet. Inkludera molntjänster som köpts med kort.
2. **Anpassa avtal till era egna åtaganden.** För varje tjänst ni lovar, kontrollera att varje stödjande avtal tillåter det. Stäng glapp genom omförhandling, genom att lägga till redundans eller genom att ändra ert löfte.
3. **Anpassa due diligence efter risk.** Undersök kritiska leverantörer noggrant; använd lättare kontroller för mindre. Se över när en leverantör byter ägare eller omfattning.
4. **Namnge ägare på båda sidor.** Varje leverantör har en intern relationsägare och en namngiven kontakt hos leverantören. Sätt en eskaleringsväg i förväg.
5. **Granska prestation regelbundet.** Möts enligt schema, titta på data och incidenter och kom överens om åtgärder. Dela er egen tjänsts prestation så att leverantören ser effekten.
6. **Behandla leverantörer som en del av teamet där det betyder något.** Ta med dem i incidentgranskningar och i planering av ändringar som berör dem. Dela information som hjälper dem hjälpa er.
7. **Förstå delat ansvar.** För moln- och programvarutjänster, skriv ned vad leverantören gör och vad ni gör. Kontrollera att er del är täckt.
8. **Planera utträdet.** För kritiska leverantörer, dokumentera hur ni skulle flytta bort, inklusive dataexport, tidsplan och kostnad. Testa delar av det, som att exportera data.
9. **Bevaka koncentration.** Kartlägg vilka tjänster som beror på samma leverantör eller samma underliggande leverantör. Avgör var redundans är värd att betala för.
10. **Ta med säkerhets-, dataskydds- och AI-frågor.** Fråga leverantörer hur de skyddar data, rapporterar incidenter och använder eller tränar på era data, och registrera svaren.

## Frågor att diskutera i teamet

**Vilka leverantörer kunde stoppa vår viktigaste tjänst, och vad skulle vi göra?**
Lista dem, inklusive indirekta. Räkna med en eller två överraskningar. Fördjupa genom att välja en kritisk leverantör och fråga hur vi skulle klara en veckas avbrott.

**Var lovar ett leverantörsavtal mindre än vi lovar våra kunder?**
Lägg siffrorna sida vid sida. Räkna med glapp i svarstider och tillgänglighet. Fördjupa genom att välja ett glapp att stänga eller flagga för kunden.

**Vem äger varje leverantörsrelation, och när träffade hen leverantören senast?**
Ägarskap antas ofta. Fråga efter datum för senaste mötet och vad som kom av det. Fördjupa genom att tilldela ägare och ett schema.

**Hur lång tid skulle det ta att lämna vår största leverantör, och vad skulle vi förlora?**
Försök svara konkret. Räkna med "år" eller "ingen aning". Fördjupa genom att skissa en grov utträdesplan och testa en dataexport.

**Vad antar vi att molnleverantören tar hand om åt oss, och vad måste vi faktiskt göra?**
Kontrollera leverantörens dokumentation. Räkna med antaganden om säkerhetskopiering, åtkomst och konfiguration. Fördjupa genom att lista våra egna ansvar och vem som äger vart och ett.

**Vad gör varje AI-leverantör med våra data, och hur kommer de att berätta om modelländringar?**
Läs villkoren. Räkna med osäkerhet. Fördjupa genom att fråga leverantörerna direkt och registrera svaren i registret.

## I praktiken: ett exempel på tjänstehantering

En nationell skattemyndighets onlinetjänst för deklaration beror på fem leverantörer: en molnplattform, en leverantör av identitetsverifiering, en SMS-gateway för engångskoder, en dokumentskanningstjänst och en leverantör av förvaltade tjänster som stöder plattformen utanför kontorstid. Myndighetens eget åtagande gentemot skattebetalare är att tjänsten är tillgänglig under deklarationssäsongen med en fyratimmars respons på incidenter.

Tjänsteägaren bygger ett enkelsidigt register och jämför varje avtal med åtagandet. Den förvaltade tjänsteleverantörens avtal lovar åtta timmars respons utanför kontorstid. SMS-gatewayens avtal anger ingen tillgänglighet och ingen skyldighet att rapportera incidenter. Identitetsleverantörens avtal ska förnyas om fyra månader, och ett utträde skulle ta ungefär nio månader på grund av hur identitetsdata lagras.

Hon vidtar tre åtgärder. Hon omförhandlar den förvaltade tjänsteleverantörens respons till fyra timmar under deklarationssäsongen, till ett pris som går till budgetansvarig för beslut. Hon lägger till en andra SMS-gateway som reserv och kommer överens om att testa växlingen. Och hon påbörjar en utträdesstudie för identitetsleverantören, med en testexport av data som start, och använder den i förnyelsediskussionerna för att be om bättre villkor för dataportabilitet. Hon schemalägger kvartalsvisa granskningar med var och en av de fem, med leverantörens kundansvarige närvarande.

Det som förändras: myndigheten kan ange vilka löften till skattebetalare varje avtal stöder, och SMS-reserven fungerar i det första testet. Det som förblir svårt: den extra responskostnaden för den förvaltade tjänsteleverantören ifrågasätts av ekonomi; molnplattformens eget regionfel är fortfarande ett enskilt beroende som myndigheten inte har finansierat någon åtgärd för; och identitetsleverantören har ännu inte gått med på portabilitetsvillkoren. Tjänsteägaren registrerar dessa som öppna risker med ägare.

## Fyra perspektiv

### Produkt- och leveransteam

Känn till vilka leverantörer er produkt beror på och vad de lovar. Designa för leverantörsfel där det är praktiskt och bygg integrationer som gör byte möjligt. Involvera leverantörer i planering av ändringar som berör dem.

### Tjänste- och driftsteam

Håll leverantörskontakter och eskaleringsvägar aktuella, dela incidenter med leverantörer snabbt och registrera deras prestation. Lyft avtalsluckor ni möter i praktiken.

### Ledning och styrning

Avgör vilka beroenden som är acceptabla och finansiera den redundans och det utträdesarbete som följer. Be om belägg för att avtal stöder era åtaganden. Var uppmärksam på koncentration och inlåsning.

### Kunder och användare

Du ser kanske inte din leverantörs leverantörer, men du beror på dem. Fråga vilka beroenden tjänsten har och vad som händer om ett fallerar. Räkna med tydlig information vid en större incident.

## Agilitet, AI, automatisering och analys

### Agilitet

Ta med leverantörer i regelbundna gemensamma granskningar och förbättringar och sikta på korta återkopplingscykler med dem. Se upp: agila team kan snabbt ta till sig tjänster utan kontroller; håll leverantörsregistret aktuellt och granska nya beroenden.

### AI

AI kan hjälpa till att läsa avtal, jämföra villkor med tjänståtaganden och sammanfatta leverantörsrapporter, under granskning av jurist- och inköpspersonal. Utse en ägare. Se upp: en AI-sammanfattning av ett avtal kan missa eller hitta på klausuler; kontrollera alltid mot dokumentet och ta juridisk rådgivning om tolkning. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

### Automatisering

Automatisera insamling av leverantörsprestationsdata, förnyelsepåminnelser och kontroller av molnkonfiguration, med ägare för undantag. Se upp: automatisk tillhandahållande av tredjepartstjänster kan skapa ospårade beroenden; länka tillhandahållandet till registret. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Följ leverantörsprestation mot överenskomna mått, utgifter per leverantör, incidentandel och beroendekoncentration. Se upp: leverantörsrapporterade siffror kan definieras till deras fördel, och viten knutna till ett enda mått inbjuder till manipulation; verifiera med era egna data. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Avtal under åtaganden.** Löften överstiger vad leverantörer måste leverera. Jämför och stäng glappen.
- **Leverantörer utanför registret.** Skuggtjänster förökar sig. För ett register och länka det till inköp.
- **Motpartsrelationer.** Leverantörer döljer problem. Dela mål och granska gemensamt.
- **Ingen utträdesplan.** Byte är opraktiskt. Planera och testa kritiska utträden.
- **Missförstått delat ansvar.** En molntjänst antas vara säker och säkerhetskopierad. Dokumentera vem som gör vad.
- **Dold koncentration.** Flera leverantörer förlitar sig på samma leverantör. Kartlägg indirekta beroenden.
- **Att ignorera AI-datavillkor.** Indata sparas eller används för träning. Fråga och registrera.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Insyn | Leverantörer kända av teamet | Register över huvudleverantörer | Register med ägare, kritikalitet och avtal | Register hålls aktuellt från inköp och upptäckt | Beroenden kartlagda över leverantörer och indirekta leverantörer |
| Avtal | Undertecknade och arkiverade | Granskas vid förnyelse | Anpassade till våra tjänståtaganden | Prestation och åtgärder granskas | Avtal anpassas längs leverantörskedjan |
| Relation | Transaktionell | Namngivna kontakter | Regelbundna granskningar med åtgärder | Gemensam förbättring och delat lärande | Leverantörer integrerade i planering och återställning |
| Utträde och risk | Inget | Medvetenhet | Utträdesplaner för kritiska leverantörer | Delar testade | Redundans och utträden förvaltas över portföljen |

## Checklista

- [ ] Vi för ett register över leverantörer med ägare, kritikalitet och avtalsdatum.
- [ ] Varje leverantörsavtal jämförs med de åtaganden det stöder.
- [ ] Varje kritisk leverantör har en namngiven relationsägare och eskaleringsväg.
- [ ] Vi håller regelbundna granskningar med kritiska leverantörer.
- [ ] Vi har dokumenterat delat ansvar för molntjänster.
- [ ] Kritiska leverantörer har utträdesplaner, med delar testade.
- [ ] Vi känner våra koncentrationsrisker.
- [ ] Vi har frågat AI- och dataleverantörer om datanvändning och modelländringar.

## AI-prompter

**Jämför ett avtal med våra åtaganden.**

```text
Here are the relevant terms from a supplier contract: [paste clauses]. Here are the commitments we make to our own customers for the supported service: [paste].
List each of our commitments and say whether the contract text supports it, conflicts with it, or is silent, quoting the exact words. Do not give legal advice or interpret ambiguous clauses.
List what you are unsure of.
```

**Skriv ett utkast till frågor för leverantörsgranskning.**

```text
Supplier: [name and what they provide]. Recent facts: [incidents, performance data, changes].
Draft ten questions for the quarterly review, covering performance, incidents, changes, risks, and improvements. Avoid blame and do not suggest facts I did not give.
List what you are unsure of.
```

**Kartlägg beroenden utifrån en lista.**

```text
Here is a list of our services and the suppliers each uses: [paste]. Here is what I know about what each supplier itself depends on: [paste, or write "unknown"].
Produce a table showing, for each supplier, which services depend on it, and highlight suppliers that appear in many services or that share an underlying provider. Mark every assumption.
List what you are unsure of.
```

## AI-färdigheter

- [vendor-management](../../../../skills/vendor-management/SKILL.md): använd för att förvalta leverantörsval och prestation.
- [service-integration-and-management](../../../../skills/service-integration-and-management/SKILL.md): använd för att samordna flera leverantörer till en tjänst.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): använd för att rikta in avtal längs kedjan.
- [risk-register](../../../../skills/risk-register/SKILL.md): använd för att registrera leverantörsrisker och beslut.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken leverantörshantering.
- Wikipedia, "Supplier relationship management" och "Outsourcing": översikter av idéerna.
- Wikipedia, "Vendor lock-in": en sammanfattning av risken och dess orsaker.
- Molnleverantörers egen dokumentation av sina modeller för delat ansvar: det auktoritativa beskedet om vem som gör vad.

## Referenser

1. Supplier relationship management — Wikipedia — https://en.wikipedia.org/wiki/Supplier_relationship_management
2. Vendor management system — Wikipedia — https://en.wikipedia.org/wiki/Vendor_management_system
3. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
4. Multisourcing — Wikipedia — https://en.wikipedia.org/wiki/Multisourcing
5. Service integration and management — Wikipedia — https://en.wikipedia.org/wiki/Service_integration_and_management
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Contract management — Wikipedia — https://en.wikipedia.org/wiki/Contract_management
8. Due diligence — Wikipedia — https://en.wikipedia.org/wiki/Due_diligence
9. Exit strategy — Wikipedia — https://en.wikipedia.org/wiki/Exit_strategy
10. Cloud computing — Wikipedia — https://en.wikipedia.org/wiki/Cloud_computing
11. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
