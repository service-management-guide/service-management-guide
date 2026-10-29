# Hantering av programvarutillgångar

**Hantering av programvarutillgångar ser till att en organisation har den programvara den behöver, använder det den betalar för, följer licensvillkor och vet vad som finns i dess egen programvara; den omfattar nu också prenumerationer, komponenter med öppen källkod och villkoren för AI-modeller och -tjänster.**

## Varför det här är viktigt

Programvara är den största och minst synliga uppsättningen tillgångar i många organisationer. En bärbar dator är ett fysiskt ting du kan räkna. En programvarurättighet är en nyttjanderätt, definierad av ett avtal, som kan bero på användare, enheter, processorer eller förbrukning och som ändras när infrastrukturen ändras. Ingen kan se den genom att titta.

Resultatet är två motsatta risker. Underlicensiering utsätter organisationen för revisioner, viten och ibland rättsliga åtgärder. Överlicensiering innebär att betala för programvara som ingen använder, ofta kallad hyllvärmare (shelfware). Wikipedia beskriver shelfware som programvara som köpts men aldrig använts. Studier från branschanalytiker redovisar ofta stora andelar av programvaruutgifter som slöseri, även om siffror varierar och bör behandlas med försiktighet. Båda riskerna minskas av samma disciplin: att veta vad du har, vad du får använda det till och vad du faktiskt använder.

Landskapet har förändrats. Mycket programvara är nu prenumerationsbaserad, köps av team med kort och uppdateras av leverantören. Komponenter med öppen källkod finns i nästan varje produkt, var och en med licensvillkor som medför skyldigheter. Och AI-modeller och -tjänster kommer med villkor om data, utdata och tillåten användning som är nya för många köpare. Det här ämnet täcker allt detta. Det ger ingen juridisk rådgivning; tolkning av licenser kräver en kvalificerad rådgivare. Det bygger på ämne 4.1 — Tillgångshantering och hänger ihop med leverantörshantering (ämne 3.14 — Leverantörshantering) och informationssäkerhet (ämne 3.13 — Informationssäkerhetshantering).

## Grundbegrepp

**Hantering av programvarutillgångar (SAM).** Praktiken att förvalta och optimera inköp, driftsättning, underhåll, användning och avyttring av programvara inom en organisation. Wikipedia beskriver programvarutillgångshantering och kopplar den till ISO/IEC 19770-1. Se ämne 1.8 — Ramverk och standarder för tjänstehantering.

**Rättighet (entitlement).** Rätten att använda programvara, så som den definieras av en licens. En organisations rättigheter registreras utifrån avtal, inköpsregister och leverantörsportaler. De jämförs med vad som är driftsatt och använt.

**Licensmodeller.** Vanliga modeller omfattar per användare, per enhet, per processor eller kärna, per samtidig användare (även kallade flytande licenser), plats- eller företagslicenser samt förbrukningsbaserad prissättning. Wikipedia beskriver programvarulicenser och flytande licensiering. Reglerna skiljer sig mellan leverantörer och produkter, ändras med virtualisering och moln och är ofta komplexa.

**Faktisk licensposition.** Jämförelsen av rättigheter med användning: vad du får använda kontra vad du faktiskt använder, sammanfattat som överskott, underskott eller balans. Det är en ögonblicksbild vid en tidpunkt, och arbetet är att hålla den aktuell.

**Programvarurevision.** En leverantör eller en tredje part undersöker en organisations användning mot dess rättigheter. Revisioner kan vara rutinmässiga eller aggressiva. En organisation som har hållit sin egen position aktuell kan svara lugnt. En som inte har det kan möta oplanerade kostnader.

**Prenumeration och SaaS.** Programvara som tjänst hyrs, vanligen per användare eller efter förbrukning, och levereras över internet. Wikipedia beskriver både programvara som tjänst och prenumerationsaffärsmodeller. Prenumerationer kan startas av vem som helst med ett kort; utan kontroller sprider de sig, överlappar och förnyas automatiskt. Följ dem med ägare och förnyelsedatum.

**Hyllvärmare och optimering.** Oanvänd eller underanvänd programvara. Skördning (harvesting) innebär att återta licenser från användare som inte behöver dem och omfördela dem. Rätt dimensionering (right-sizing) innebär att anpassa antalet och typen av licenser till behovet. Besparingar kan vara betydande, och besparingar kommer av att fråga om en användning fortfarande finns.

**Programvara med öppen källkod.** Programvara vars källkod är tillgänglig under en licens som tillåter användning, ändring och spridning på vissa villkor. Wikipedia beskriver fri programvara och programvara med öppen källkod samt licenser för öppen källkod. Licenser skiljer sig: tillåtande licenser medför få skyldigheter, medan copyleft-licenser, beskrivna på Wikipedia, kräver att härledda verk delas på liknande villkor. Skyldigheter beror på hur du använder och sprider programvaran, så tolkning kräver juridisk rådgivning.

**Programvaruförteckning (SBOM).** En lista över komponenterna i en programvara, med versioner och licenser. Wikipedia beskriver programvaruförsörjningskedjan och formatet SPDX för utbyte av licens- och komponentinformation. En SBOM stöder licensefterlevnad och säkerhetsrespons. Se ämne 3.13 — Informationssäkerhetshantering.

**AI-modeller och -tjänster.** Modeller och AI-tjänster kommer med villkor som täcker vad du får göra med dem, vem som äger utdata, om dina indata sparas eller används för träning och vad som händer om en modell ändras eller dras tillbaka. Wikipedia beskriver stora språkmodeller och artificiell intelligens med öppen källkod och noterar att "öppen" kan betyda olika saker för modeller. Läs villkoren och registrera dem. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

**Immateriella rättigheter.** Programvara skyddas av upphovsrätt och ibland patent. Wikipedia beskriver både immateriella rättigheter och upphovsrätt. Att använda programvara utanför dess villkor kan göra intrång i ägarens rättigheter. Genererad kod från AI-verktyg väcker öppna frågor om ägarskap och licensiering; ta rådgivning.

**Programvaruupptäckt och mätning.** Upptäcktsverktyg hittar installerad programvara och molnapplikationer. Mätning registrerar faktisk användning, till exempel senaste gången en applikation startades. Tillsammans med rättigheter ger de licenspositionen.

**Styrning.** Policyer om vem som får anskaffa programvara, vad som måste godkännas, hur öppen källkod granskas och hur licenser följs. Håll dem lätta och tydliga, så att människor följer dem. Se ämne 8.1 — Styrning, risk och efterlevnad.

**Hur linserna passar in.** SAM stöder agila team genom att göra godkänd programvara lätt att få och hålla efterlevnaden ur vägen. AI kan hjälpa till att läsa licensvillkor och stämma av data, under juridisk granskning. Automatisering tillhandahåller och återtar licenser. Analys visar användning, slöseri och risk.

## Bra arbetssätt

1. **Känn dina rättigheter.** Samla avtal, inköpsregister och data från leverantörsportaler på ett ställe. Registrera de villkor som betyder något: mått, kvantitet, löptid, begränsningar och förnyelsedatum.
2. **Upptäck vad som är driftsatt och använt.** Använd upptäckts- och användningsdata för lokal, moln- och slutpunktsprogramvara och stäm av mot rättigheter regelbundet.
3. **Beräkna din licensposition.** För större leverantörer, jämför rättigheter med användning och registrera positionen och datumet. Lös underskott och överskott medvetet.
4. **Äg varje större leverantörsrelation.** Utse en person som förstår licensreglerna för varje stor leverantör och håller sig à jour med ändringar. Regler skiljer sig och ändras.
5. **Gör godkänd programvara lätt att få.** Erbjud en katalog över godkända applikationer med en snabb väg, så att människor inte köper egna. Se ämne 3.8 — Hantering av tjänstekatalog.
6. **Kontrollera prenumerationer.** Kräv en ägare, budget och förnyelsedatum vid köp. Granska automatiska förnyelser i förväg och säg upp det som inte används.
7. **Skörda och dimensionera rätt.** Återta licenser från inaktiva användare och gå över till billigare nivåer där de passar. Fråga användare innan åtkomst tas bort för att undvika störning.
8. **Granska användning av öppen källkod.** Skanna kod efter komponenter och deras licenser, sätt en policy för vilka licenser som är acceptabla och registrera undantag. Involvera juridisk rådgivning för skyldigheter.
9. **Registrera AI-villkor.** För varje AI-modell och -tjänst, registrera vilka data ni skickar, om de sparas eller används för träning, vem som äger utdata och vad som händer om tjänsten ändras.
10. **Förbered revisioner.** Håll register aktuella och vet vem som hanterar en leverantörsrevisionsbegäran. Svara snabbt och sakligt, med juridiskt stöd vid behov.

## Frågor att diskutera i teamet

**Känner vi för våra tre största programvaruleverantörer våra rättigheter och vår användning?**
Be om en siffra och dess källa. Räkna med osäkerhet. Fördjupa genom att välja en leverantör och beräkna positionen ordentligt.

**Vilka prenumerationer har vi köpt utanför den centrala processen, och vem betalar?**
Kontrollera kortutdrag och utläggsräkningar. Räkna med överraskningar. Fördjupa genom att registrera ägare och förnyelsedatum för de tio främsta efter kostnad.

**Vilka licenser betalar vi för som ingen har använt på sex månader?**
Använd mätdata. Räkna med hyllvärmare. Fördjupa genom att välja tre att återta, med ett meddelande till användarna först.

**Hur vet vi vilka komponenter med öppen källkod som finns i våra produkter och vilka licenser de bär?**
Be om den senaste skanningen. Räkna med luckor. Fördjupa genom att välja en produkt och ta fram en komponentlista.

**Om en leverantör reviderade oss i morgon, vem skulle svara och med vad?**
Gå igenom stegen. Räkna med förvirring om vem som talar med leverantören. Fördjupa genom att utse en ansvarig och sammanställa ett paket med aktuella register.

**Vilka är villkoren för de AI-tjänster våra team använder, och har någon läst dem?**
Fråga vem som använder vilka tjänster. Räkna med personliga konton med okända villkor. Fördjupa genom att lista de fem främsta tjänsterna och registrera deras data- och ägarskapsvillkor.

## I praktiken: ett exempel på tjänstehantering

En regional sjukhusgrupp har omkring 9 000 anställda och licensierar en stor klinisk applikation, ett kontorspaket, en databasplattform och dussintals mindre verktyg. Ekonomidirektören har bett om en nedskärning på 10 procent av programvaruutgifterna. SAM-ansvarig, ett team på två, börjar med den största leverantören, vars avtal står för 30 procent av utgifterna.

Hon samlar avtals- och inköpsregister och finner att licenser räknas per namngiven användare. Hon jämför dessa med applikationens egen användarlista och datum för senaste inloggning. Av 4 200 licensierade användare har omkring 700 inte loggat in på sex månader; många är före detta vikarier eller personer som flyttat till andra tjänster. Hon finner också 250 aktiva användare som inte är licensierade, mest nyanställda vars konton skapades från en mall. Nettopositionen visar ett överskott på papper, men ett verkligt underskott i en modul.

Hon inför tre steg. Ett månatligt jobb listar inaktiva användare och skickar deras chefer ett meddelande innan licensen återtas. Processen för nyanställda kontrollerar licenspositionen innan åtkomst tilldelas. Och ett underskott i modulen rapporteras proaktivt till leverantören, att lösas vid nästa förnyelse, med hjälp av gruppens juridiska team. Besparingar från återtagna licenser når 6 procent av leverantörens utgifter första året.

Hon granskar också prenumerationer och finner 14 SaaS-verktyg köpta av avdelningar, varav fyra dubblerar varandra och två behandlar patientdata. Hon hänvisar de senare till säkerhets- och dataskyddsteamen och registrerar AI-villkoren för ett transkriptionsverktyg som en klinik prövat: leverantören behåller ljud i 30 dagar och får använda det för att förbättra sina modeller, vilket dataskyddsteamet säger inte är acceptabelt. Kliniken slutar använda det.

Det som förändras: licenser återtas och omfördelas, och överraskningar vid förnyelse är sällsyntare. Det som förblir svårt: licensreglerna för virtualiserade databaser är komplexa och teamet kan inte tolka dem med säkerhet; kliniker ogillar att förlora åtkomst till verktyg och vissa återtagna licenser återinfördes efter klagomål; och avdelningar köper fortfarande prenumerationer med kort. Ansvarig ber ekonomi flagga programvaruinköp på kort för granskning.

## Fyra perspektiv

### Produkt- och leveransteam

Lista komponenterna, licenserna för öppen källkod och AI-tjänsterna i er produkt. Välj licenser och tjänster ni förstår och registrera deras villkor. Undvik att klistra in kod eller data i verktyg vars villkor ni inte har kontrollerat.

### Tjänste- och driftsteam

Håll driftsättnings- och användningsdata korrekta, återta oanvända licenser och tala om för SAM-ansvarig om nya verktyg. Hantera revisionsbegäranden genom den överenskomna vägen.

### Ledning och styrning

Be om licenspositionen för större leverantörer, kostnaden för oanvänd programvara och planen för revisioner. Stöd en enkel godkännandeväg som människor kommer att använda. Behandla AI-villkor som en riskfråga.

### Kunder och användare

Du kan bli tillfrågad om du fortfarande använder en applikation. Svara ärligt och säg om du behöver den. Använd godkända verktyg och be om det du behöver genom rätt väg.

## Agilitet, AI, automatisering och analys

### Agilitet

Gör efterlevnad snabb för team: en katalog över godkända verktyg, en enkel policy för öppen källkod och en kort väg för undantag. Gå igenom processen med utvecklare. Se upp: strikta grindar som team undviker skapar skugg-it; håll vägen snabb.

### AI

AI kan läsa avtal och licensvillkor, sammanfatta dem och flagga klausuler att kontrollera, och kan stämma av driftsättningsdata, under juridisk och mänsklig granskning. Utse en ägare. Se upp: en AI-sammanfattning av licensvillkor kan vara fel på sätt som spelar roll; förlita dig aldrig på den för efterlevnadsbeslut. Se ämne 5.6 — AI-styrning, risk och regelefterlevnad.

### Automatisering

Automatisera upptäckt, användningsmätning, licenstilldelning, återtagandemeddelanden och förnyelsepåminnelser, med ägare och loggar. Se upp: automatiskt återtagande kan ta bort åtkomst någon behöver; underrätta användare först och gör återinförande lätt. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Följ licenspositionen, oanvända licenser och deras kostnad, antal prenumerationer och utgifter, förnyelser som förfaller och fynd om licenser för öppen källkod. Se upp: besparingssiffror överdrivs lätt, och antal återtagna licenser kan manipuleras; följ faktiska utgifter och användarklagomål. Se ämne 4.5 — Ekonomistyrning och FinOps och boken *Service Management Metrics*.

## Vanliga felmönster

- **Att räkna en gång.** Positionen blir inaktuell. Låt upptäckt och mätning löpa.
- **Att köpa utanför processen.** Prenumerationer sprider sig. Gör den godkända vägen snabb och granska kortutgifter.
- **Hyllvärmare.** Licenser betalas och används inte. Mät användning och återta.
- **Okänd användning av öppen källkod.** Skyldigheter missas. Skanna och sätt en policy.
- **Att ignorera AI-villkor.** Data sparas eller används för träning. Läs, registrera och besluta.
- **Ingen revisionsberedskap.** En leverantörsrevision blir en kapplöpning. Håll register och en namngiven ansvarig.
- **Att anta att reglerna är enkla.** Virtualisering och moln ändrar licensiering. Ta expertrådgivning för komplexa produkter.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Rättigheter | Spridda | Huvudavtal insamlade | Rättigheter registrerade på ett ställe med nyckelvillkor | Rättigheter stäms av regelbundet | Rättigheter integrerade med inköp och leverantörer |
| Upptäckt och användning | Ingen | Manuella räkningar | Upptäckt och mätning för huvudprogramvara | Position beräknas och granskas | Kontinuerlig position över lokala miljöer, moln och SaaS |
| Optimering | Ingen | Enstaka städning | Skördning och rätt dimensionering rutin | Besparingar följs och verifieras | Optimering automatiserad med användarmeddelande |
| Öppen källkod och AI | Okänt | Medvetenhet | Policy, skanning och registrerade villkor | Fynd följs till avslut | Integrerat i pipeline och inköp |

## Checklista

- [ ] Vi har rättigheter för större leverantörer registrerade med nyckelvillkor.
- [ ] Upptäckts- och användningsdata stäms av mot rättigheter.
- [ ] Vi känner vår licensposition för våra största leverantörer.
- [ ] En person äger varje större leverantörs licensiering.
- [ ] Prenumerationer har ägare, budgetar och förnyelsedatum.
- [ ] Inaktiva licenser återtas med förvarning.
- [ ] Komponenter och licenser för öppen källkod skannas och styrs.
- [ ] Villkor för AI-modeller och -tjänster är registrerade.

## AI-prompter

**Plocka ut nyckelvillkor ur ett avtal för kontroll.**

```text
Here is the text of a software license section: [paste]. 
List the license metric, quantity, term, restrictions, renewal terms, and audit rights, quoting the exact words for each, and write "not found" for any item the text does not state. Do not interpret ambiguous wording or give legal advice.
List what you are unsure of.
```

**Hitta överlappande prenumerationer.**

```text
Here is a list of our subscriptions with owner, purpose, cost, and users: [paste].
Group those that serve similar purposes, list the total cost of each group, and give one question per group about whether to consolidate. Do not recommend cancellation.
List what you are unsure of.
```

**Förbered AI-villkor för granskning.**

```text
Here are the terms of an AI service we use: [paste relevant sections].
List what the terms say about data retention, use of inputs for training, ownership of outputs, permitted uses, and changes to the service, quoting each. For anything the text does not cover, write "not stated". Do not give legal advice.
List what you are unsure of.
```

## AI-färdigheter

- [vendor-management](../../../../skills/vendor-management/SKILL.md): använd för att förvalta leverantörsrelationer och förnyelser.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): använd för att formulera licensefterlevnadsfrågor för juridisk granskning.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): använd för att väga kostnad och nytta av programvaruval.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): använd för att registrera villkor och egenskaper hos en AI-modell.

## Viktiga källor

- ISO/IEC 19770-1 (själva standarden): processer och nivåer för it-tillgångshantering; läs den aktuella utgåvan hos utgivaren.
- PeopleCert, ITIL certification pages: ägarens beskrivning av hantering av programvarutillgångar som en del av tillgångshantering.
- Wikipedia, "Software asset management" och "Open-source license": översikter av idéerna.
- Open Source Initiative (opensource.org): definitionen av öppen källkod och en lista över godkända licenser.

## Referenser

1. Software asset management — Wikipedia — https://en.wikipedia.org/wiki/Software_asset_management
2. Software license — Wikipedia — https://en.wikipedia.org/wiki/Software_license
3. Open-source license — Wikipedia — https://en.wikipedia.org/wiki/Open-source_license
4. Free and open-source software — Wikipedia — https://en.wikipedia.org/wiki/Free_and_open-source_software
5. Copyleft — Wikipedia — https://en.wikipedia.org/wiki/Copyleft
6. Floating licensing — Wikipedia — https://en.wikipedia.org/wiki/Floating_licensing
7. Shelfware — Wikipedia — https://en.wikipedia.org/wiki/Shelfware
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
10. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
11. Open Source Initiative — OSI — https://opensource.org
