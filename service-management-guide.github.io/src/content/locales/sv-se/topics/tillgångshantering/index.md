# Tillgångshantering

**It-tillgångshantering håller reda på vad en organisation äger, var det finns, vem som använder det, vad det kostar och när det bör bytas ut eller avvecklas; den fungerar när ett enda tillförlitligt register hålls aktuellt genom hela livscykeln och används för att besluta, inte bara för att räkna.**

## Varför det här är viktigt

Fråga hur många bärbara datorer, servrar, programvarulicenser och molnprenumerationer en organisation har, och svaret är vanligtvis en uppskattning. Register är spridda över inköp, ekonomi, it och enskilda team. Utrustning köps och registreras aldrig, eller registreras och försvinner. Prenumerationer löper vidare efter att projektet som behövde dem tog slut. Licenser räknades vid ett datum för länge sedan.

Följderna är kostsamma. Pengar läggs på utrustning och licenser som ingen använder. Revisioner från programvaruleverantörer finner underskott och ger viten. Säkerhetsteam kan inte patcha det de inte vet finns. När en enhet förloras vet ingen vilka data den höll. När en revisor ber om belägg för kontroll kan organisationen inte lämna det.

Tillgångshantering ger ett enda, tillförlitligt svar på "vad har vi?", och grunden för de frågor som följer: är det säkert, används det, är det värt sin kostnad, är det nära slutet av sin livslängd? Det här ämnet täcker kärnbegreppen och livscykelsynen på it-tillgångar i allmänhet. Särskilda områden har egna ämnen: programvara (ämne 4.2 — Hantering av programvarutillgångar), hårdvara (ämne 4.3 — Hantering av hårdvarutillgångar) och konfigurationsobjekt (ämne 4.4 — Konfigurationshantering). Kostnader hänger ihop med ämne 4.5 — Ekonomistyrning och FinOps.

## Grundbegrepp

**Tillgång.** Något av värde som ägs eller kontrolleras av en organisation. Inom it omfattar tillgångar hårdvara, programvara, molntjänster, data, licenser, avtal och ibland människor och kunskap. Wikipedia beskriver tillgångsförvaltning som den systematiska processen att utveckla, driva, underhålla och avyttra tillgångar kostnadseffektivt. Den här guiden använder "it-tillgångshantering" (ITAM) för praktiken tillämpad på teknik.

**Tillgång kontra konfigurationsobjekt.** En tillgång följs för sitt värde och ägarskap, ofta med ekonomiska detaljer. Ett konfigurationsobjekt (CI) är allt som behöver förvaltas för att leverera en tjänst, följt med sina relationer till andra objekt. De två överlappar: en server är båda. Registren finns ofta i olika system. Se ämne 4.4 — Konfigurationshantering.

**Livscykeln.** En tillgång passerar skeden: planera, anskaffa, driftsätta, driva och underhålla samt avveckla eller avyttra. Varje skede har beslut och register. Wikipedia-artikeln om produktlivscykel beskriver den allmänna idén. Att förvalta livscykeln innebär att veta var varje tillgång befinner sig i den och agera vid rätt tidpunkt, till exempel byta bärbara datorer innan felfrekvensen stiger eller förnya licenser innan de löper ut.

**Fyra vyer.** Ett användbart sätt att tänka på tillgångsinformation är genom fyra vyer: inventering (vad och var), ekonomisk (kostnad, avskrivning, ägarskap), avtalsmässig (garanti, support, licensvillkor) och operativ (användning, skick och prestanda). Varje vy besvarar olika frågor, och registret måste rymma tillräckligt av varje för att vara användbart.

**Inventering och upptäckt.** En lista över tillgångar med nyckelattribut som typ, modell, serienummer, plats, ägare och status. Inventeringar kan byggas genom att registrera inköp, genom att skanna efter enheter och programvara i nätverk eller båda. Upptäcktsverktyg hittar saker som aldrig registrerats och registrerade poster som inte längre finns. Ingen av källorna är fullständig ensam, och att stämma av dem är det verkliga arbetet. Wikipedia beskriver inventering och tillgångsspårning.

**Identifiering.** Varje tillgång behöver en identitet som överlever dess liv: en tillgångsetikett, en streckkod eller ett serienummer. Wikipedia beskriver streckkoder och radiofrekvensidentifiering (RFID), som används för att spåra fysiska föremål.

**Ägarskap och förvar.** Två frågor för varje tillgång: vem ansvarar för den, och vem har eller använder den. De skiljer sig åt: ett team kan ansvara för en flotta av enheter som individer innehar. Tydligt förvar undviker förlorad utrustning.

**Kostnad och värde.** Kostnader omfattar inköpspris, support, licenser, energi och avyttring. Total ägandekostnad, beskriven på Wikipedia, tar hänsyn till hela livslängden, inte bara priset. Avskrivning, beskriven på Wikipedia, är en redovisningsmässig behandling; ekonomiteam använder den för rapportering, och ITAM-teamet bör förstå den.

**Moln- och prenumerationstillgångar.** Molntjänster och programvaruprenumerationer är också tillgångar, fastän de saknar fysisk form och kan skapas på minuter. Utan disciplin sprider de sig. Länka dem till ägare, projekt och budgetar vid skapandet. Se ämne 4.5 — Ekonomistyrning och FinOps.

**Skugg-it.** Teknik som köps och används utan it-funktionens vetskap. Wikipedia beskriver skugg-it. Det uppstår för att den officiella vägen är långsam eller inte möter behov. Behandla det som information om omötta behov och ta in användbara verktyg i förvaltningen.

**Datatillgångar.** Data är också tillgångar, med ägare, klassificering och gallringsregler. Wikipedia beskriver digital tillgångsförvaltning, som är besläktad. Se ämne 7.2 — Datagrunder och datastyrning.

**Standarder.** ISO/IEC 19770 är en familj standarder för it-tillgångshantering, beskriven på Wikipedia. Se ämne 1.8 — Ramverk och standarder för tjänstehantering.

**Hållbarhet.** Tillgångsbeslut har miljöeffekter: tillverkningsenergi, elektronikavfall och reparerbarhet. Wikipedia beskriver elektronikavfall och cirkulär ekonomi. Se ämne 8.2 — Hållbar och ansvarsfull tjänstehantering.

**Hur linserna passar in.** Tillgångshantering är den faktabas som de fyra linserna behöver. Agil praktik håller processen lätt och förbättrar den med användare. AI kan hjälpa till att stämma av register, upptäcka avvikelser och förutsäga fel, under granskning. Automatisering upptäcker och uppdaterar register. Analys använder data för att besluta om utbyte, skördande av licenser och kostnad.

## Bra arbetssätt

1. **Definiera vad som räknas som en tillgång.** Avgör vilka kategorier ni ska följa och vid vilket värde- eller risktröskelvärde. Börja med dem som kostar mest eller bär mest risk.
2. **Håll ett auktoritativt register.** Välj en enda sanningskälla för varje sorts tillgång och länka andra till den. Dubbla listor glider isär.
3. **Registrera vid anskaffning.** Gör inköp, mottagning och registrering till ett sammanhängande steg, så att inget driftsätts oregistrerat. Märk fysiska föremål vid ankomst.
4. **Kombinera register med upptäckt.** Använd automatisk upptäckt för att hitta oregistrerade och saknade poster och stäm av regelbundet. Undersök varje skillnad.
5. **Utse en ägare och en förvarare.** Registrera för varje tillgång eller grupp vem som ansvarar och vem som har den. Uppdatera när människor byter jobb eller slutar.
6. **Följ hela livscykeln.** Registrera driftsättning, flytt, ägarbyte, reparation och avveckling. Använd livscykeldatum för att planera utbyte och förnyelser.
7. **Länka tillgångar till tjänster och kostnader.** Koppla varje tillgång till de tjänster den stöder och den budget den tillhör. Det möjliggör konsekvensanalys och kostnadsfördelning.
8. **Gör förlust och avyttring säkra.** Definiera vad som händer när en enhet förloras eller avvecklas: radering av data, säker avyttring, intyg och registrering. Kontrollera att det sker.
9. **Granska genom stickprov.** Kontrollera ett urval av register mot verkligheten varje period, till exempel genom att fysiskt verifiera enheter, och mät träffsäkerheten.
10. **Använd data för att besluta.** Granska utnyttjande, ålder, fel och kostnad för att vägleda utbyte, licensändringar och konsolidering. Ett register som ingen använder förfaller.

## Frågor att diskutera i teamet

**Hur många enheter, licenser och prenumerationer har vi, och hur säkra är vi på varje siffra?**
Fråga olika personer. Räkna med olika svar. Fråga hur siffran togs fram. Fördjupa genom att välja en kategori och stämma av den ordentligt.

**Var kommer tillgångar in i vår organisation utan att registreras?**
Leta efter inköp med kort, gåvor, prov som blev permanenta och molnkonton som skapats av team. Räkna med flera luckor. Fördjupa genom att stänga den största.

**Vem ansvarar för var och en av våra tillgångskategorier?**
Ägarskap är ofta oklart för delad utrustning och prenumerationer. Be om namn. Fördjupa genom att tilldela ägare och ett granskningsdatum.

**Vad händer när någon förlorar en bärbar dator eller lämnar organisationen?**
Gå igenom processen steg för steg. Räkna med luckor i att hämta in utrustning och ta bort åtkomst. Fördjupa genom att komma överens om en checklista och en ägare.

**Vilka tillgångar betalar vi för men använder inte längre?**
Titta på licenser, prenumerationer och overksam utrustning. Räkna med att hitta något. Fördjupa genom att välja de tre främsta kostnaderna och avgöra att avveckla, omfördela eller förnya.

**Hur kunde AI hjälpa till att hålla våra tillgångsdata korrekta, och vad skulle vi kontrollera för hand?**
AI kan matcha poster, flagga udda poster och föreslå kategorier. Den kan också slå ihop poster felaktigt. Fråga vem som äger användningen och hur fel upptäcks. Fördjupa genom att testa den på ett urval mot en manuellt avstämd lista.

## I praktiken: ett exempel på tjänstehantering

Ett universitets it-avdelning får frågan av ekonomidirektören hur många bärbara datorer som används. Tre källor ger tre svar: inköp säger 4 200, identitetssystemet visar 3 600 användare med registrerad bärbar dator och slutpunktshanteringsverktyget ser 3 900 enheter. Avdelningen har också ett nyligt revisionsfynd om att avgångna medarbetares bärbara datorer inte alltid lämnas tillbaka.

Tillgångsansvarig börjar med att avgöra omfattningen: bärbara datorer, stationära datorer, surfplattor och telefoner över ett litet värde, plus programvara och molnprenumerationer. Hon utser slutpunktshanteringssystemet som sanningskälla för det som används och inköpsregister som källa för det som köptes och ber tillgångsförvaltaren att stämma av månadsvis. Den första avstämningen finner omkring 300 enheter som köpts men inte setts i nätverket, 200 som setts i nätverket men inte köpts via inköp och 90 enheter tilldelade personal som hade slutat.

Hon inför tre förändringar: etiketter och ett register vid mottagning för varje enhet; en avgångschecklista som kopplar HR:s avgångshändelse till en uppgift att hämta in utrustning, med en tidsfrist; och ett kvartalsvis stickprov där en tekniker fysiskt verifierar 100 enheter. Efter två kvartal har avstämningsskillnaderna minskat med två tredjedelar och stickprovets träffsäkerhet är 94 procent.

Det som förändras: ekonomidirektören får en siffra som avdelningen kan försvara, och avgångsprocessen återvinner dussintals enheter. Det som förblir svårt: enheter som forskargrupper köper med anslag går fortfarande förbi inköp; den fysiska kontrollen på avlägsna campus bygger på upptagen personal; och data om molnprenumerationer finns i ett annat verktyg som ägs av ett annat team. Ansvarig tar anslagsinköpen och prenumerationsdata till ekonomidirektören som nästa del.

## Fyra perspektiv

### Produkt- och leveransteam

Registrera de tillgångar er produkt använder: licenser, molntjänster och enheter. Märk molnresurser med ägare och projekt vid skapandet och avveckla det ni inte längre behöver.

### Tjänste- och driftsteam

Håll registren korrekta när ni driftsätter, flyttar och avvecklar utrustning. Rapportera avvikelser och använd upptäcktsdata i incidenter och ändringar.

### Ledning och styrning

Be om en försvarbar förteckning och kostnaden för det som hålls. Finansiera processen och verktygen. Använd data för beslut om utbyte och kostnad och gör ägare ansvariga.

### Kunder och användare

Du innehar tillgångar på organisationens vägnar. Håll dem säkra, rapportera förlust snabbt och lämna tillbaka utrustning när du går vidare. Tala om för leverantören om verktyg du behöver som inte tillhandahålls.

## Agilitet, AI, automatisering och analys

### Agilitet

Börja med kategorierna med högst värde och förbättra processen i små steg med användare. Granska träffsäkerhet och smärtpunkter regelbundet. Se upp: ett inventeringsprojekt i ett enda slag blir snabbt inaktuellt; bygg vanan att registrera allteftersom.

### AI

AI kan stämma av register från flera källor, flagga avvikelser som enheter som inte setts på månader och förutsäga fel utifrån ålder och historik, med en person som granskar föreslagna sammanslagningar och avvecklingar. Utse en ägare. Se upp: AI kan slå ihop två olika tillgångar eller missa en avvikelse; ta stickprov av dess utdata. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera upptäckt, skapande av register vid inköp och registrering, avgångsutlösare och förnyelsepåminnelser, med loggar. Se upp: automatiska register kan mångfaldiga dubbletter; sätt matchningsregler och granska undantag. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Titta på inventeringens träffsäkerhet, tillgångar utan ägare, åldersprofil, utnyttjande, kostnad per tillgångstyp och oanvända licenser. Se upp: en hög träffsäkerhetssiffra från ett litet urval kan vilseleda; ta stickprov över platser och typer. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Flera oavstämda listor.** Ingen känner sanningen. Välj en sanningskälla och stäm av.
- **Registrering efter driftsättning.** Poster missas. Registrera vid anskaffning.
- **Ingen ägare eller förvarare.** Utrustning förloras. Namnge båda.
- **Att betala för det oanvända.** Licenser och prenumerationer löper vidare. Granska användning och avveckla.
- **Ingen kontroll av avyttring.** Data lämnar med avvecklad utrustning. Radera och registrera.
- **Register som ingen använder.** Data förfaller. Använd dem för beslut.
- **Att ignorera moln och prenumerationer.** Kostnader växer osedda. Följ dem som tillgångar.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Inventering | Kalkylblad | Ett huvudregister | Ett register avstämt mot upptäckt | Träffsäkerhet mäts och förbättras | Inventering i realtid över lokala miljöer, moln och leverantörer |
| Livscykel | Följs inte | Inköp och avyttring noteras | Livscykelskeden och datum registrerade | Livscykeln används för att planera utbyte och förnyelse | Livscykeln förvaltas över tillgångar och leverantörer med automatisering |
| Ägarskap | Oklart | Ägare för stora poster | Ägare och förvarare för varje tillgång | Ägarskap granskas regelbundet | Ägarskap länkat till tjänster och budgetar |
| Användning av data | Räkning | Grundläggande rapporter | Kostnader och utnyttjande används i beslut | Besparingar och risk följs | Data driver planering över portföljen |

## Checklista

- [ ] Vi definierade vilka tillgångar vi följer och tröskelvärdet.
- [ ] Det finns en sanningskälla för varje tillgångstyp.
- [ ] Tillgångar registreras vid anskaffning, med identifiering.
- [ ] Upptäckt och register stäms av regelbundet.
- [ ] Varje tillgång har en ägare och en förvarare.
- [ ] Förlust, avgång och avyttring har en definierad, kontrollerad process.
- [ ] Vi granskar ett urval av register mot verkligheten.
- [ ] Vi använder data för att vägleda utbytes- och kostnadsbeslut.

## AI-prompter

**Stäm av två listor.**

```text
Here are two lists of devices from different systems, with identifiers removed where sensitive: [paste list A] and [paste list B].
List items that appear in both, items only in A, items only in B, and items that might be the same asset under different names. Show your matching reasoning and do not merge anything.
List what you are unsure of.
```

**Hitta kandidater för avveckling.**

```text
Here is a list of subscriptions and licenses with cost, number of seats, and last-used dates: [paste].
List those with low or no recent use, the cost of each, and a question to ask the owner. Do not recommend cancellation.
List what you are unsure of.
```

**Skriv ett utkast till en avgångschecklista.**

```text
Our context: [type of organization, equipment, systems]. Our leaver triggers: [describe].
Draft a checklist for retrieving equipment and removing access, with owners and deadlines for each step, and note what could be missed. Do not add legal requirements.
List what you are unsure of.
```

## AI-färdigheter

- [configuration-management](../../../../skills/configuration-management/SKILL.md): använd för att länka tillgångar till de tjänster de stöder.
- [data-governance](../../../../skills/data-governance/SKILL.md): använd för ägarskap och klassificering av datatillgångar.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): använd för att väga beslut om utbyte eller avveckling.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): använd för att förtydliga vem som ansvarar för varje tillgångskategori.

## Viktiga källor

- ISO/IEC 19770 (själva standarderna): kraven och vägledningen för it-tillgångshantering; läs de aktuella utgåvorna hos utgivaren.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken it-tillgångshantering.
- Wikipedia, "Asset management" och "Total cost of ownership": översikter av idéerna.
- Wikipedia, "Shadow IT": bakgrund till oförvaltad teknik.

## Referenser

1. Asset management — Wikipedia — https://en.wikipedia.org/wiki/Asset_management
2. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
3. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
4. Inventory — Wikipedia — https://en.wikipedia.org/wiki/Inventory
5. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
6. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
7. Depreciation — Wikipedia — https://en.wikipedia.org/wiki/Depreciation
8. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
9. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
10. Digital asset management — Wikipedia — https://en.wikipedia.org/wiki/Digital_asset_management
11. Radio-frequency identification — Wikipedia — https://en.wikipedia.org/wiki/Radio-frequency_identification
