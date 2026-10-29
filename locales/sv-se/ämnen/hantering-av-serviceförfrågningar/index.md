# Hantering av serviceförfrågningar

**Hantering av serviceförfrågningar tar hand om de planerade, upprepbara saker användare ber om, som behörighet, utrustning och information, som standardiserade tjänster med tydliga formulär, godkännanden och uppfyllandesteg; målet är att göra rutinbeställningar snabba och förutsägbara och att automatisera det som säkert kan automatiseras.**

## Varför det här är viktigt

En stor del av en servicedesks arbete handlar inte om att saker är trasiga. Det handlar om att människor behöver saker: ett nytt konto, åtkomst till en mapp, en programvarulicens, en mobiltelefon, en lokalbokning, en namnändring. Dessa beställningar är förutsägbara och upprepade. Att hantera varje som ett engångssamtal slösar tid för både beställaren och den som uppfyller den.

När beställningar standardiseras blir de snabba. Beställaren ser en beskrivning av vad hen kan be om, fyller i ett kort formulär som fångar vad den som uppfyller behöver och får en tydlig status. Godkännanden sker bara där de behövs. Uppfyllandesteg är dokumenterade, delade inom teamet och, där det är säkert, automatiserade. Tiden som läggs på rutinen minskar och uppmärksamheten frigörs för svårare arbete.

Dåligt hanterade beställningar orsakar egen skada. Oklara formulär ger upprepade frågor. Godkännanden som ingen läser lägger till dagar. Behörighet som beviljas utan kontroller blir en säkerhetsrisk, och behörighet som aldrig tas bort blir en annan. Det här ämnet förklarar hur man utformar, driver och förbättrar uppfyllande av beställningar och hur det hänger ihop med tjänstekatalogen (ämne 3.8 — Hantering av tjänstekatalog), servicedesken (ämne 3.1 — Servicedesk) och automatisering (ämne 6.5 — Självbetjäning och automatiserad leverans).

## Grundbegrepp

**Serviceförfrågan.** I ITIL 4 en begäran från en användare eller en användares behöriga företrädare som initierar en tjänsteåtgärd som överenskommits som en normal del av tjänsteleveransen. Exempel omfattar en begäran om information, en begäran om behörighet, en begäran om en standardvara och en begäran om en standardändring. En serviceförfrågan är inte ett misslyckande: det är något leverantören har gått med på att göra.

**Förfrågan kontra incident.** En incident är ett oplanerat avbrott eller en försämring av kvalitet; en förfrågan är en planerad, standardiserad begäran. "Min bärbara dator startar inte" är en incident. "Jag behöver en bärbar dator" är en förfrågan. Vissa system behandlar dem i ett verktyg med olika arbetsflöden. Att blanda dem i en kö döljer skillnaden i hur vardera bör hanteras. Se ämne 3.2 — Incidenthantering.

**Förfrågningsmodell.** En fördefinierad beskrivning av hur en viss typ av förfrågan hanteras: den information som krävs, godkännanderegler, stegen, vem som gör vart och ett, måltiden och sättet att informera användaren. Wikipedia-artiklarna om arbetsflöde och om standardisering beskriver allmänna idéer. En modell skrivs en gång, förbättras över tid och återanvänds.

**Katalogpost.** Varje förfrågningstyp förekommer i tjänstekatalogen med ett användarvänligt namn, en beskrivning, vem som får be om den och förväntad tid. Se ämne 3.8 — Hantering av tjänstekatalog. Wikipedia beskriver tjänstekataloger som en lista över erbjudna tjänster.

**Godkännande.** Vissa förfrågningar behöver tillstånd, till exempel från en chef eller en budgetansvarig. God design begränsar godkännanden till där de tillför värde: där pengar spenderas eller där åtkomst till känslig information beviljas. Godkännandekedjor som finns av tradition, inte av risk, lägger till fördröjning.

**Uppfyllande.** Arbetet att leverera det som begärdes. Det kan vara manuellt, delvis automatiserat eller helt automatiserat. En vanlig utveckling är att dokumentera stegen, sedan skripta de upprepade och slutligen koppla formuläret direkt till skriptet.

**Självbetjäning.** Användare lägger beställningar och följer dem genom en portal eller chatt utan att involvera servicedesken. Wikipedia beskriver självbetjäning som ett system där människor betjänar sig själva. God självbetjäning beror på formulär som användare förstår och statusinformation de kan lita på. Se ämne 6.5 — Självbetjäning och automatiserad leverans.

**Identitet och behörighet.** En stor andel av förfrågningarna gäller behörighet. Wikipedia-artiklarna om identitets- och åtkomsthantering och om minsta privilegiets princip beskriver huvudidéerna: bevilja bara den åtkomst som behövs, verifiera vem som frågar, registrera vem som godkände och ta bort åtkomst när den inte längre behövs. Se ämne 3.13 — Informationssäkerhetshantering.

**Nyanställda, flyttande och avgående.** Livshändelserna för människor i en organisation, som en nyanställd, någon som byter roll eller någon som slutar, utlöser buntar av förfrågningar. Att behandla dem som en enda färd med en ägare och en checklista undviker missade steg. Se ämne 1.9 — Tjänstehantering för hela verksamheten.

**Standardändringar.** Många förfrågningar är standardändringar, som är förhandsgodkända och lågriskiga. Att koppla de två praktikerna undviker dubbelt godkännande. Se ämne 3.4 — Ändringsmöjliggörande.

**Mål och förväntningar.** Varje förfrågningstyp har en förväntad leveranstid, och användare ser den. Mål bör vara realistiska, baserade på faktisk prestation, och ärliga där uppfyllandet beror på en tredje part.

**Kostnad och debitering.** Vissa förfrågningar har en kostnad, som en licens eller en enhet. Att visa kostnaden och vem som betalar hjälper användare att fatta beslut och hjälper ägare att se efterfrågan. Se ämne 4.5 — Ekonomistyrning och FinOps.

**Upplevelse.** En bra förfrågningsupplevelse betyder att användare kan hitta det de vill ha, förstå formuläret, veta vad som händer härnäst och få det när det utlovats. Wikipedia-artikeln om kundupplevelse ger allmän bakgrund.

**Hur linserna passar in.** Förfrågningshantering är hemvist för ständig förbättring genom små ändringar: förenkla ett formulär, ta bort ett godkännande, automatisera ett steg. AI kan hjälpa användare att hitta rätt förfrågan och fylla i formuläret och hjälpa dem som uppfyller att förbereda sig. Automatisering gör det repeterbara arbetet. Analys visar efterfrågan och fördröjningar.

## Bra arbetssätt

1. **Beskriv förfrågningar med användarens ord.** Namnge varje förfrågan efter vad användaren vill ha, till exempel "Åtkomst till en delad mapp", inte efter det tekniska objektet. Testa namnen med användare.
2. **Håll formulär korta.** Fråga bara efter det den som uppfyller behöver och förifyll det ni redan vet. Testa formuläret med en ny användare och titta på var hen tvekar.
3. **Skriv en förfrågningsmodell för varje typ.** Registrera indata, godkännanden, steg, ägare, måltid och användarmeddelanden. Granska modellerna regelbundet mot verkliga data.
4. **Godkänn bara där det tillför värde.** För varje godkännande, namnge risken det tar upp och personen som förstår den. Ta bort godkännanden som aldrig har avvisat eller ändrat en förfrågan, efter att ha stämt av med riskägaren.
5. **Visa status och förväntad tid.** Låt användare se var deras förfrågan befinner sig och när de kan vänta den. Skicka ett meddelande när något ändras eller försenas.
6. **Automatisera i steg.** Börja med ett tydligt manuellt förfarande, skripta sedan de upprepade stegen och koppla till sist formuläret till skriptet. För logg och ha en manuell reserv.
7. **Behandla åtkomst med omsorg.** Verifiera identitet, bevilja minsta privilegium, registrera godkännanden, granska åtkomst regelbundet och gör borttagning lika rutin som beviljande. Se ämne 3.13 — Informationssäkerhetshantering.
8. **Hantera livshändelser som färder.** För nyanställda, flyttande och avgående, skapa en färd med en ägare, en checklista och gemensam status över team.
9. **Granska efterfrågan.** Titta på vilka förfrågningar som är vanligast, vilka som tar längst tid och vilka som överges eller skickas tillbaka. Använd fynden för att förbättra formulär och modeller.
10. **Avveckla och slå ihop förfrågningstyper.** Ta bort typer som ingen använder och kombinera nästan-dubbletter. En kortare katalog är lättare att använda.

## Frågor att diskutera i teamet

**Vilka är de tio förfrågningar vi får oftast, och hur lång tid tar var och en?**
Använd verkliga data. Räkna med överraskningar: ett litet antal typer står vanligen för det mesta av volymen. Fråga vilka som är långsamma och varför. Fördjupa genom att välja en att förenkla först.

**Vilka godkännanden kräver vi, och vilken risk tar var och en upp?**
Gå igenom godkännandestegen. Räkna med några som ingen kan förklara. Fråga vem som har avvisat eller ändrat en förfrågan det senaste året. Fördjupa genom att pröva borttagning av ett godkännande, med riskägarens medgivande.

**Vad måste användare veta för att göra en förfrågan, och vad tycker de är förvirrande?**
Fråga användare och nyanställda. Räkna med förvirring kring namn, formulär och vem man ska fråga. Fördjupa genom att skriva om ett formulär och testa det med fem användare.

**Vilka av våra förfrågningssteg är manuella och repetitiva och kunde skriptas?**
Lista stegen och tiden för vart och ett. Räkna med kontoskapande och rutinbehörighet. Fråga vad som kunde gå fel om det skriptades. Fördjupa genom att välja ett steg och komma överens om skyddsåtgärder, loggning och en manuell reserv.

**Hur tar vi bort åtkomst när människor byter roll eller slutar?**
Det här prövar den andra halvan av åtkomsthanteringen. Räkna med luckor. Be om det senaste revisionsfyndet. Fördjupa genom att komma överens om en ägare och en utlösare för borttagning.

**Hur kunde AI hjälpa användare att hitta och slutföra förfrågningar, och vad måste stanna hos en människa?**
AI kan rekommendera rätt förfrågan och förifylla detaljer. Den kan också välja fel eller bevilja för mycket genom förslag. Fråga var en person måste godkänna. Fördjupa genom att välja ett försök begränsat till lågriskförfrågningar med granskning.

## I praktiken: ett exempel på tjänstehantering

Ett stort detaljhandelsföretags it-avdelning på huvudkontoret hanterar omkring 2 500 förfrågningar i månaden. Personalen klagar på att förfrågningar "hamnar i ett svart hål". Tjänstechefen går igenom sex månaders data och finner att fem förfrågningstyper står för 60 procent av volymen: uppsättning för nyanställda, åtkomst till delade mappar, programinstallation, beställning av mobiltelefoner och lösenordsåterställning. Den genomsnittliga tiden för att uppfylla en förfrågan om delad mapp är fyra dagar, varav tre går åt till att vänta på godkännande från en mappägare som ofta inte svarar.

Chefen arbetar med ägarna för att göra tre förändringar. För delade mappar visar formuläret nu ägarens namn, och ägaren godkänner från en e-postlänk med en påminnelse efter en dag; för mappar klassade som låg känslighet sker godkännande enbart av beställarens chef. För nyanställda ersätter en enda färd fyra separata förfrågningar, ägd av HR, med uppgifter för it, lokalförvaltning och lön. För programinstallation publiceras en katalog med förhandsgodkända applikationer, med automatisk installation för dessa och godkännande bara för övriga.

Efter två månader tar den genomsnittliga förfrågan om delad mapp en dag, och färden för nyanställda minskar rapporter om saknad utrustning första dagen. Tjänstechefen tar stickprov av 50 automatiska installationer och finner tre som installerade en äldre version eftersom ett paket var föråldrat.

Det som förändras: personal får det de ber om snabbare, och desken hanterar färre "var är min förfrågan"-kontakter. Det som förblir svårt: ägarna av känsliga mappar tar fortfarande flera dagar på sig att svara och organisationen har inte kommit överens om vem som äger omkring en tredjedel av mapparna; åtkomstrevisionen finner användare som behåller åtkomst från tidigare roller; och färden för nyanställda beror på att HR matar in startdatum i tid. Chefen tar mappägarskapet och åtkomstgranskningarna till säkerhetsteamet.

## Fyra perspektiv

### Produkt- och leveransteam

Tillhandahåll den information som behövs för att uppfylla förfrågningar om era tjänster, som åtkomstmodeller och standardkonfigurationer. Håll självbetjäningsgränssnitt och automatisering städade och erbjud er att uppfylla era egna rutinförfrågningar där det är säkert.

### Tjänste- och driftsteam

Äg förfrågningsmodellerna och håll dem korta och aktuella. Automatisera upprepade steg med skyddsåtgärder och bevaka fördröjningar och tillbakaskickade förfrågningar. Ta med efterfrågedata till dem som äger tjänsterna.

### Ledning och styrning

Be om belägg för hur lång tid förfrågningar tar och var de väntar. Stöd borttagning av godkännanden som inte tillför säkerhet. Ge ägare befogenhet att ändra modeller och finansiera automatisering med ordentliga kontroller.

### Kunder och användare

Du bör lätt hitta det du behöver, se status och få det när det utlovats. Tala om för leverantören när ett formulär är förvirrande eller ett godkännande verkar meningslöst. Lämna tillbaka det du inte längre behöver, inklusive åtkomst.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla varje förfrågningsmodell som en liten produkt och förbättra den med användare: förenkla ett formulär, testa det, justera. Gå regelbundet igenom efterfrågan med intressenter. Se upp: ständigt justerande av formulär förvirrar användare; tillkännage ändringar och håll en kort lista.

### AI

AI kan hjälpa användare att hitta rätt förfrågan, förifylla formulär utifrån en beskrivning, sammanfatta förfrågningar för godkännare och skriva utkast till uppfyllandeanteckningar, med en person som godkänner allt som beviljar åtkomst eller spenderar pengar. Utse en ägare. Se upp: en assistent som föreslår bred åtkomst "för säkerhets skull" bryter mot minsta privilegium; begränsa dess val. Se ämne 5.3 — AI-servicedesk och virtuella agenter.

### Automatisering

Automatisera rutinmässigt uppfyllande, som kontoskapande, programinstallation och gruppmedlemskap, med kontroller, loggar och en manuell reserv. Se upp: en automatisk beviljad åtkomst utan verifiering är ett säkerhetshål; inkludera identitetskontroller och granska ett urval. Se ämne 6.5 — Självbetjäning och automatiserad leverans.

### Analys

Titta på efterfrågan per typ, tid för att uppfylla, tid i väntan på godkännande, tillbakaskickade eller övergivna förfrågningar och användaråterkoppling. Se upp: medeltid döljer långa fördröjningar och kan manipuleras genom att stänga och återöppna; titta på fördelningar och urval. Se ämne 7.7 — Analys av upplevelse och sentiment och boken *Service Management Metrics*.

## Vanliga felmönster

- **Oklara förfrågningsnamn.** Användare väljer fel. Byt namn med användarens ord och testa.
- **Långa formulär.** Användare överger eller gissar. Fråga bara efter det som behövs.
- **Godkännanden av vana.** Fördröjning utan säkerhet. Behåll de med en namngiven risk.
- **Automatisering utan kontroller.** Fel åtkomst eller fel varor. Lägg till verifiering, loggar och granskning.
- **Åtkomst som aldrig tas bort.** Gamla konton finns kvar. Gör borttagning till en rutinmässig utlösare.
- **Ingen status för användare.** Upprepade kontakter ökar. Visa status och skicka uppdateringar.
- **Katalogtillväxt utan beskärning.** Användare hittar ingenting. Avveckla och slå ihop.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Förfrågningsdesign | Ad hoc via e-post | Några formulär | Förfrågningsmodeller för vanliga typer | Modeller granskas mot data | Modeller förbättras kontinuerligt över funktioner |
| Godkännanden | Många och manuella | Granskade en gång | Godkännanden knutna till namngivna risker | Godkännandets värde mäts | Riskbaserade godkännanden anpassas automatiskt |
| Uppfyllande | Manuellt | Några skript | Vanliga förfrågningar automatiserade med loggar | Automatiseringskvalitet stickprovskontrolleras och granskas | Automatisering från början till slut över system |
| Åtkomstlivscykel | Beviljas ad hoc | Periodisk granskning | Utlösare för nyanställd, flyttande och avgående | Åtkomst granskas på belägg | Åtkomst justeras kontinuerligt över system |

## Checklista

- [ ] Våra tio främsta förfrågningstyper är beskrivna med användarens ord.
- [ ] Var och en har en förfrågningsmodell med indata, godkännanden, steg, ägare och måltid.
- [ ] Varje godkännande har en namngiven risk och en ägare som förstår den.
- [ ] Användare kan se status och förväntad tid.
- [ ] Automatiskt uppfyllande har kontroller, loggar och en manuell reserv.
- [ ] Åtkomst beviljas med minsta privilegium och tas bort när den inte längre behövs.
- [ ] Färder för nyanställda, flyttande och avgående har ägare.
- [ ] Vi granskar efterfrågan och beskär förfrågningstyper regelbundet.

## AI-prompter

**Gruppera förfrågningar efter typ.**

```text
Below are request titles and descriptions from the last month, with personal data removed: [paste sample].
Group them into up to twelve request types, count each, and list the three most common questions the requester or fulfiller had to ask. Do not suggest changes.
List what you are unsure of.
```

**Skriv ett utkast till ett kort förfrågningsformulär.**

```text
Request type: [name]. What the fulfiller needs to do the work: [list]. What we already know about the requester: [list].
Draft a form with only the questions we cannot already answer, in plain language, with a one-line help text for each. Do not add questions that are not needed.
List what you are unsure of.
```

**Granska en godkännandekedja.**

```text
Request type: [name]. Current approvals: [list with who and typical wait]. Data on past outcomes: [paste, such as number approved and refused].
For each approval, state the risk it appears to address based only on what I provided, how often it changed the outcome, and a question to ask the owner. Do not recommend removal.
List what you are unsure of.
```

## AI-färdigheter

- [service-catalog](../../../../skills/service-catalog/SKILL.md): använd för att beskriva förfrågningstyper för användare.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): använd för att undersöka steg, väntetider och godkännanden.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): använd för att förtydliga vem som godkänner och vem som uppfyller.
- [survey-design](../../../../skills/survey-design/SKILL.md): använd för att utforma återkoppling om förfrågningsupplevelsen.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken hantering av serviceförfrågningar.
- Wikipedia, "Service catalog" och "Self-service": bakgrund till hur förfrågningar beskrivs och görs.
- Wikipedia, "Principle of least privilege": grunden för säkert uppfyllande av åtkomst.
- Wikipedia, "Identity and access management": disciplinen bakom många förfrågningar.

## Referenser

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
3. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
4. Standardization — Wikipedia — https://en.wikipedia.org/wiki/Standardization
5. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
6. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
7. Onboarding — Wikipedia — https://en.wikipedia.org/wiki/Onboarding
8. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
9. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
10. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
