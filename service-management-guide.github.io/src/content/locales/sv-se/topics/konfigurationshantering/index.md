# Konfigurationshantering

**Konfigurationshantering håller en korrekt, användbar bild av de komponenter som bildar era tjänster och hur de hänger ihop, så att ni kan bedöma konsekvensen av en ändring eller ett fel; moderna team får den bilden ur infrastruktur som kod och upptäckt, med en konfigurationsdatabas som en vy av den, inte en handförd lista.**

## Varför det här är viktigt

När en databasserver fallerar klockan två på natten är den första frågan vad som beror på den. När någon föreslår en ändring av en nätverksregel är den första frågan vad den kan förstöra. När en revisor frågar hur en tjänst är byggd är den första frågan var sanningen är nedskriven. Alla tre behöver samma sak: en aktuell, pålitlig bild av vad som finns och hur delarna hänger ihop.

Många organisationer försöker tillhandahålla den med en konfigurationsdatabas (CMDB): en databas över konfigurationsobjekt och relationer. Många finner också att den blir en kyrkogård av inaktuella poster, förda för hand, betrodda av ingen. Posterna är inaktuella inom veckor, eftersom den verkliga miljön förändras fortare än någon hinner uppdatera ett formulär. CMDB:n blir en efterlevnadsartefakt, inte ett verktyg.

Två idéer räddar praktiken. För det första, behandla definitionen av infrastrukturen som kod i versionshantering, så att sanningskällan är det som skapar systemet, inte en beskrivning av det. För det andra, fyll bilden automatiskt från upptäckt och från den koden, och använd den för bestämda frågor: konsekvens av en ändring, omfattning av en incident, ägarskap. Det här ämnet förklarar praktiken och fallgroparna. Det hänger ihop med tillgångshantering (ämne 4.1 — Tillgångshantering), ändringsmöjliggörande (ämne 3.4 — Ändringsmöjliggörande), infrastruktur som kod (ämne 6.3 — Infrastruktur som kod och GitOps) och tjänstekatalogen (ämne 3.8 — Hantering av tjänstekatalog).

## Grundbegrepp

**Konfigurationshantering.** I ITIL-mening praktiken att säkerställa att korrekt och tillförlitlig information om konfigurationen av tjänster, och de konfigurationsobjekt som stöder dem, finns tillgänglig där och när den behövs. Inom teknik avser "konfigurationshantering" också disciplinen att hålla system i ett känt, konsekvent tillstånd. Wikipedia beskriver konfigurationshantering i den vidare meningen. Den här guiden använder båda betydelserna och anger vilken.

**Konfigurationsobjekt (CI).** Varje komponent som behöver förvaltas för att leverera en it-tjänst. Wikipedia beskriver konfigurationsobjekt. Exempel omfattar servrar, applikationer, databaser, nätverksenheter, molnresurser, certifikat och ibland dokument och avtal. Varje CI har attribut (typ, version, ägare, status) och relationer till andra CI.

**Konfigurationsdatabas (CMDB).** Ett förråd av CI, deras attribut och deras relationer. Wikipedia beskriver CMDB:n. En CMDB är inte ett kalkylblad över tillgångar: dess värde ligger i relationerna, som möjliggör frågor som "vilka tjänster använder den här databasen?".

**Konfigurationshanteringssystem (CMS).** Den vidare uppsättning verktyg och data som ger en vy av konfigurationen över källor. ITIL beskriver ett CMS som federerar data från flera ställen, inte en enda databas. Wikipedia beskriver federerade databassystem som ett sätt att kombinera källor utan att kopiera dem.

**Tjänstekarta.** En vy som visar hur en tjänst beror på sina komponenter. En teknisk tjänstekarta länkar applikationer, databaser, servrar och nätverk. En verksamhetsvy länkar tjänster till de människor och processer de stöder. Kartor används i incidenter och ändringar. Se ämne 3.8 — Hantering av tjänstekatalog.

**Baslinjer och avdrift.** En baslinje är en känd, godkänd konfiguration vid en tidpunkt. Avdrift (drift) är skillnaden mellan baslinjen och det som faktiskt körs, ofta från manuella ändringar. Wikipedia beskriver baslinjer i konfigurationshantering. Att upptäcka och rätta avdrift håller system konsekventa och säkra.

**Infrastruktur som kod (IaC).** Att definiera infrastruktur, som servrar, nätverk och molnresurser, i textfiler som lagras i versionshantering och tillämpas av verktyg. Wikipedia beskriver infrastruktur som kod. Verktyg som Terraform, Ansible och Kubernetes-manifest uttrycker önskat tillstånd, och verktyget får verkligheten att matcha. Koden är både dokumentationen och mekanismen. Se ämne 6.3 — Infrastruktur som kod och GitOps.

**Idempotens och önskat tillstånd.** Bra konfigurationsverktyg kan köras upprepade gånger med samma resultat: de gör bara det som behövs för att nå det beskrivna tillståndet. Wikipedia beskriver idempotens. Det gör det säkert att tillämpa konfiguration på nytt för att upptäcka och åtgärda avdrift.

**Sanningskälla.** Platsen där ett faktum är auktoritativt. För önskad konfiguration är det kodförrådet; för vad som faktiskt körs är det upptäckt eller plattformens eget tillstånd; för ägarskap kan det vara katalogen eller ett teamregister. Avgör källan för varje sorts faktum och undvik att hålla samma faktum för hand på två ställen. Wikipedia beskriver idén om en enda sanningskälla.

**Upptäckt.** Verktyg som skannar nätverk, molnkonton och plattformar för att hitta vad som finns och hur det är sammankopplat. Upptäckt hittar det ingen registrerat, men den ger mycket detaljer och visst brus och behöver regler för vilka poster som ska behållas och hur de namnges.

**Relationer och konsekvensanalys.** Att veta att applikation A använder databas B låter dig fråga vad som berörs om B ändras eller fallerar. Wikipedia beskriver ändringskonsekvensanalys och beroendegrafer. Grafdatabaser, beskrivna på Wikipedia, är ett sätt att lagra och fråga relationer. Konsekvensanalys är bara så bra som de registrerade relationerna.

**Datakvalitet.** Träffsäkerhet, fullständighet och aktualitet avgör datats värde. Definiera vilka attribut som spelar roll och hur färska de måste vara. En mindre uppsättning korrekta data är mer användbar än en stor uppsättning opålitliga. Se ämne 7.2 — Datagrunder och datastyrning.

**Omfattning.** Försök inte registrera allt. Välj de CI och relationer ni behöver för era beslut: kritiska tjänster, deras huvudkomponenter och ägarskap. Utvidga allteftersom värde visas.

**Ägarskap.** Varje CI eller grupp har en ägare som ansvarar för den och för datat om den. Utan ägarskap förfaller data.

**Containrar och moln.** Moderna plattformar skapar och förstör resurser hela tiden. Ett register över en enskild container är meningslöst en timme senare. Följ på den nivå som betyder något, till exempel tjänsten och driftsättningen, och använd etiketter och taggar för att länka resurser till ägare och tjänster.

**Hur linserna passar in.** Konfigurationshantering stöder agilitet och kontinuerlig leverans genom att göra miljöer repeterbara. AI kan hjälpa till att upptäcka relationer, föreslå saknade länkar och besvara frågor om konsekvens, under granskning. Automatisering tillämpar konfiguration och håller bilden aktuell. Analys använder data för att hitta risker och kostnader.

## Bra arbetssätt

1. **Börja med de frågor ni behöver besvara.** Lista de beslut datat ska stödja, som konsekvens av ändring, incidentomfattning och ägarskap. Registrera bara det som besvarar dem.
2. **Behandla kod som sanningskälla för önskat tillstånd.** Definiera infrastruktur och konfiguration i versionshantering, granska ändringar och tillämpa dem med verktyg. Undvik manuella ändringar i levande system.
3. **Fyll bilden automatiskt.** Använd upptäckts- och plattformsdata för att mata CMDB:n eller tjänstekartan och stäm av mot koden. Begränsa manuell inmatning till fakta som inte kan upptäckas, som ägarskap.
4. **Definiera källan för varje faktum.** Avgör för varje attribut var det är auktoritativt och var kopior är tillåtna. Visa källan och tidpunkten för senaste uppdatering.
5. **Kartlägg kritiska tjänster först.** Bygg tjänstekartor för de viktigaste tjänsterna, inklusive beroenden av leverantörer och delade plattformar. Testa dem mot en verklig incident eller ändring.
6. **Upptäck och rätta avdrift.** Jämför faktiskt tillstånd med önskat enligt schema och larma vid skillnader. Behandla upprepad avdrift som en signal om process eller åtkomst.
7. **Utse en ägare för varje objekt och för datakvaliteten.** Visa ägare i registren. Granska inaktuella poster och föräldralösa regelbundet.
8. **Länka konfiguration till ändrings- och incidentregister.** Gör det lätt att se från en ändring vilka CI den berör och från en incident vilka CI som är inblandade. Kontrollera att länkarna används.
9. **Använd etiketter och taggar konsekvent.** I molnmiljöer, kräv taggar för ägare, tjänst och miljö vid skapandet och upprätthåll dem i pipelinen.
10. **Mät användbarhet.** Följ hur ofta datat används i ändringar och incidenter och hur ofta det var fel. Åtgärda orsakerna och avveckla data som ingen använder.

## Frågor att diskutera i teamet

**Vilka beslut vill vi att konfigurationsdata ska stödja, och stöder de dem i dag?**
Börja från användningen. Räkna med svar som konsekvens av ändring och incidentomfattning. Pröva på en färsk ändring. Fördjupa genom att välja en användning och testa datat mot den.

**Var finns den sanna beskrivningen av vår infrastruktur: i kod, i en databas, i människors huvuden?**
Fråga efter sanningskällan för tre system. Räkna med flera svar. Fördjupa genom att välja ett system och flytta dess definition in i versionshantering.

**När vilseledde CMDB:n oss senast, och varför?**
Be om ett verkligt fall. Räkna med inaktuella eller saknade relationer. Leta efter orsaken, till exempel manuell inmatning. Fördjupa genom att välja en datakälla att automatisera.

**Hur får vi veta när någon ändrar ett levande system för hand?**
Det här prövar upptäckt av avdrift. Räkna med "det gör vi inte". Fördjupa genom att komma överens om en skanning av ett system och en regel för vad som händer härnäst.

**Vem äger var och en av våra kritiska konfigurationsobjekt, och hur skulle vi hitta ägaren klockan tre på natten?**
Fråga var ägarskap registreras. Pröva med några objekt. Fördjupa genom att lägga till ägartaggar och kontrollera dem.

**Hur kunde AI hjälpa till att hålla vår konfigurationsbild korrekt, och vad skulle vi kontrollera för hand?**
AI kan föreslå relationer och upptäcka avvikelser. Den kan också hitta på länkar. Fråga vem som äger användningen och hur fel upptäcks. Fördjupa genom att jämföra AI-föreslagna relationer med en manuellt verifierad karta för en tjänst.

## I praktiken: ett exempel på tjänstehantering

Ett nationellt järnvägsföretags digitala team driver en biljettplattform bestående av omkring 60 tjänster hos två molnleverantörer och ett gammalt lokalt datacenter. CMDB:n håller 40 000 poster, mestadels inmatade för hand, och driftteamet säger att den är fel ungefär en tredjedel av gångerna. Under ett färskt avbrott stoppade en trasig meddelandekö biljettförsäljningen; ingen insåg att lojalitetsprogrammet också använde den förrän kunder klagade.

Plattformsansvarig sätter ett snävare mål: för de tio mest kritiska tjänsterna måste tjänstekartan vara tillräckligt korrekt för att besvara "vad berörs om den här komponenten fallerar?" inom fem minuter. Teamet definierar var och en av de tio tjänsterna i kod, med ägare och beroenden deklarerade som taggar i definitionerna. Ett nattligt jobb läser molnplattformen och kodförrådet, bygger kartan och flaggar skillnader mellan de två. Datacentret täcks av upptäckt, och dess utdata matchas mot samma tjänstenamn med manuell granskning av nya poster.

Inom ett kvartal är kartan för de tio tjänsterna betrodd. Vid nästa incident visar en fallerande databas i betalningstjänsten de fem tjänster som läser från den, och teamet underrättar deras ägare på minuter. En avdriftsrapport finner 14 manuella ändringar i produktion, varav tre var säkerhetsgruppsregler som öppnades under en gammal incident och aldrig stängdes.

Det som förändras: incidenter och ändringar börjar nu med en karta, och den gamla CMDB:n avvecklas för dessa tjänster. Det som förblir svårt: de andra 50 tjänsterna är ännu inte täckta, och team som äger dem ser lite skäl att göra arbetet; datacentrets upptäckt ger fortfarande brus; och vissa beroenden, som en leverantörs API, kan inte upptäckas och matas in för hand. Plattformsansvarig väljer de nästa tio tjänsterna efter incidenthistorik och förhandlar fram tid med deras ägare.

## Fyra perspektiv

### Produkt- och leveransteam

Definiera er infrastruktur och konfiguration i kod, tagga resurser med ägare och tjänster och undvik manuella ändringar i levande system. Håll beroendeinformation aktuell som en del av er design.

### Tjänste- och driftsteam

Använd kartan i incidenter och ändringar och rapportera var den är fel. Upptäck avdrift, stäng tillfälliga ändringar och håll ägardata uppdaterad.

### Ledning och styrning

Be om belägg för att datat används och är korrekt, inte om ett antal poster. Finansiera automatiseringen och ägarskapsdisciplinen. Stå bakom regeln att levande ändringar går genom kod.

### Kunder och användare

Du har nytta av att leverantörer vet vad som beror på vad: snabbare diagnos och färre överraskningar från ändringar. Fråga om de tjänster du förlitar dig på har ägare och konsekvenskartor.

## Agilitet, AI, automatisering och analys

### Agilitet

Bygg bilden i små steg, med början i de mest kritiska tjänsterna, och förbättra den med dem som använder den. Granska dess användbarhet efter incidenter. Se upp: ett CMDB-projekt i ett enda slag upprepar gamla misslyckanden; börja med frågor och några få tjänster.

### AI

AI kan föreslå relationer utifrån loggar och spår, besvara konsekvensfrågor i naturligt språk och hitta extremvärden, med en ägare och mänsklig verifiering. Se upp: AI kan sluta sig till beroenden som inte finns eller missa verkliga; validera mot kända incidenter. Se ämne 5.2 — AIOps.

### Automatisering

Automatisera upptäckt, avstämning, upptäckt av avdrift och upprätthållande av taggar, med loggar och granskning av undantag. Se upp: en automatisk import kan översvämma databasen med poster av lågt värde; filtrera efter det som stöder beslut. Se ämne 6.3 — Infrastruktur som kod och GitOps.

### Analys

Titta på datafullständighet för kritiska tjänster, träffsäkerhet som upptäckts i incidenter, antal avdrifter, tid för att hitta ägaren och användning av datat i ändringar. Se upp: att räkna poster eller ifyllda fält uppmuntrar volym framför träffsäkerhet; mät hur ofta datat hjälpte och hur ofta det vilseledde. Se boken *Service Management Metrics* och ämne 7.2 — Datagrunder och datastyrning.

## Vanliga felmönster

- **En CMDB som förs för hand.** Data förfaller snabbt. Fyll på genom upptäckt och kod.
- **Att registrera allt.** Brus döljer värde. Avgränsa till beslut.
- **Två källor för samma faktum.** De är oense. Deklarera en källa.
- **Inget ägarskap.** Ingen rättar fel. Tilldela ägare.
- **Manuella ändringar i levande system.** Avdriften växer. Ändra genom kod och upptäck avdrift.
- **Relationer saknas.** Konsekvensanalys fallerar. Kartlägg kritiska tjänster först.
- **Att följa efemära resurser.** Registren är inaktuella direkt. Följ på tjänstenivå, med taggar.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Omfattning | Oklar | Huvudservrar listade | Kritiska tjänster och beroenden kartlagda | Omfattningen utvidgas efter värde och incidenter | Bred täckning över beståndet och leverantörer |
| Sanningskälla | Kalkylblad och minne | Viss infrastruktur i kod | Önskat tillstånd i kod, faktiskt tillstånd genom upptäckt | Avstämning automatiserad och övervakad | En samordnad vy matad av kod, upptäckt och plattformar |
| Datakvalitet | Okänd | Stickprov | Definierade attribut och färskhet | Träffsäkerhet mäts i incidenter och ändringar | Kvalitet säkras kontinuerligt med mänsklig granskning |
| Användning | Används sällan | Används i vissa incidenter | Används rutinmässigt i ändringar och incidenter | Användning och värde följs | Data driver risk, kostnad och planering över tjänster |

## Checklista

- [ ] Vi listade de frågor våra konfigurationsdata måste besvara.
- [ ] Önskat tillstånd för nyckelsystem finns i versionshantering.
- [ ] Upptäckt matar våra tjänstekartor och stäms av mot kod.
- [ ] Varje faktum har en definierad sanningskälla.
- [ ] Kritiska tjänster har kartlagda beroenden, testade mot verkliga händelser.
- [ ] Vi upptäcker och rättar konfigurationsavdrift.
- [ ] Varje konfigurationsobjekt eller grupp har en ägare.
- [ ] Vi mäter hur ofta datat hjälper och hur ofta det vilseleder.

## AI-prompter

**Hitta saknade beroenden utifrån en incident.**

```text
Here is the timeline of an incident, with the services that were affected: [paste]. Here is our service map for the failing component: [paste].
List affected services that the map does not show as dependent on the failing component, and for each give a question to verify the link. Do not infer dependencies without evidence in the timeline.
List what you are unsure of.
```

**Jämför önskat och faktiskt tillstånd.**

```text
Here is the desired configuration from our code: [paste]. Here is what discovery found running: [paste].
List differences by type (missing, extra, changed), and for each one a question about why it differs. Do not recommend fixes.
List what you are unsure of.
```

**Skriv ett utkast till regler för ägartaggar.**

```text
Our cloud resources are used by these teams and services: [list]. Tags we want on every resource: [list].
Draft a tagging standard of under one page with rules, allowed values, and how to enforce it in the pipeline. Do not name specific tools unless I list them.
List what you are unsure of.
```

## AI-färdigheter

- [configuration-management](../../../../skills/configuration-management/SKILL.md): använd för att utforma och underhålla konfigurationsregister och relationer.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): använd för att följa beroenden i en process eller ett system.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): använd för att rita tjänstekartor i text.
- [data-quality](../../../../skills/data-quality/SKILL.md): använd för att definiera och kontrollera kvaliteten på konfigurationsdata.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken konfigurationshantering av tjänster.
- Kief Morris, *Infrastructure as Code* (2:a upplagan, 2020): en praktisk guide till att definiera och förvalta infrastruktur i kod.
- Wikipedia, "Configuration management" och "Configuration management database": översikter av idéerna.
- Wikipedia, "Infrastructure as code": det tekniska angreppssättet för önskat tillstånd.

## Referenser

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
