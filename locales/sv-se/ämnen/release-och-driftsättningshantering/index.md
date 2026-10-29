# Release- och driftsättningshantering

**Release- och driftsättningshantering skiljer två beslut som tidigare var ett: när ny kod placeras på produktionssystem (driftsättning) och när dess beteende blir tillgängligt för användare (release); att skilja dem åt, med funktionsflaggor, stegvis utrullning och tydliga versionsanteckningar, gör förändring säkrare och lugnare.**

## Varför det här är viktigt

Lanseringsdagar är stressiga eftersom för mycket sker samtidigt. Ny kod installeras, nya funktioner slås på, användare möter dem för första gången och supportteamet får veta om dem genom det första klagomålet. Om något går fel är allt detta hopflätat, och den enda vägen tillbaka kan vara en återställning som ångrar allt.

Team som skiljer driftsättning från release undviker det mesta av detta. Koden går till produktion i tysthet, avstängd, dagar innan användarna ser den. När teamet är redo slår en flagga på funktionen för en liten grupp, sedan fler. Om något är fel stänger flaggan av den på sekunder. Driftsättningen, som är en teknisk handling, sker enligt ingenjörernas schema. Releasen, som är en verksamhets- och kundhandling, sker när organisationen är redo.

Det här ämnet förklarar de två idéerna, de tekniker som stöder dem och de praktiker som håller användare, supportpersonal och revisorer informerade. Det bygger på kontinuerlig leverans (ämne 2.2 — Kontinuerlig leverans) och ändringsmöjliggörande (ämne 3.4 — Ändringsmöjliggörande), och det hänger ihop med konfigurationshantering (ämne 4.4 — Konfigurationshantering) och kunskapshantering (ämne 3.9 — Kunskapshantering).

## Grundbegrepp

**Driftsättning.** Handlingen att flytta programvara, konfiguration eller andra komponenter till en miljö, till exempel test eller produktion. Wikipedia-artikeln om programvarudriftsättning beskriver de inblandade aktiviteterna. Driftsättning är en teknisk operation som placerar något där det kan köras.

**Release.** Att göra en tjänst, funktion eller version tillgänglig för användning. En release kan ske samtidigt som en driftsättning eller senare. ITIL 4 beskriver "releasehantering" som praktiken att göra nya och ändrade tjänster och funktioner tillgängliga för användning, och "driftsättningshantering" som att flytta komponenter till levande miljöer.

**Varför skilja dem åt.** Driftsättningsrisk handlar om huruvida koden körs och beter sig. Releaserisk handlar om huruvida användare, support och verksamhet är redo. Att göra dem vid olika tidpunkter låter dig hantera varje risk med rätt människor och verktyg.

**Funktionsflaggor.** Också kallade funktionsbrytare, är de omkopplare i koden eller i ett kontrollsystem som aktiverar eller inaktiverar en funktion vid körning, utan en ny driftsättning. Wikipedia beskriver funktionsbrytare och deras användningar. Flaggor kan gälla per användare, per grupp, per procentandel av trafiken eller globalt. De kräver omsorg: gamla flaggor hopar sig och blir dold komplexitet.

**Stegvis utrullning.** Att släppa först till en liten grupp och vidga gradvis. Varianter omfattar interna användare först, en liten procentandel av trafiken, en enskild region eller en pilotkund. Varje steg ger återkoppling innan fler människor exponeras.

**Blågrön och rullande driftsättning.** Vid en blågrön driftsättning finns två produktionsmiljöer; en betjänar användare medan den andra tar emot den nya versionen, och trafiken växlas när den är redo, med ett snabbt byte tillbaka vid behov. Vid en rullande driftsättning uppdateras instanser några i taget. Wikipedia beskriver båda. Var och en har avvägningar i kostnad, komplexitet och hantering av data.

**Releaseberedskap.** En kort uppsättning frågor som besvaras före release: klarar testerna sig; täcker övervakningen det nya beteendet; vet supportpersonalen vad som ändrats och hur de hjälper; är dokumentation och kunskapsartiklar klara; finns det en återställningsplan; och har verksamheten gått med på datumet. Håll det kort och knutet till verklig risk.

**Versionsanteckningar.** En beskrivning av vad som ändrats, skriven för dem som behöver veta. Olika målgrupper behöver olika anteckningar: användare vill veta vad som är nytt eller annorlunda; supportpersonal vill veta vad de kan vänta sig; drift vill veta vad som ändrats tekniskt. Wikipedia-artiklarna om versionsanteckningar och ändringsloggar beskriver vanliga former.

**Versionshantering (versionering).** Ett schema för att namnge versioner så att människor kan tala om dem. Semantisk versionering, ett populärt schema som beskrivs under programvaruversionering på Wikipedia, använder huvud-, del- och patchnummer för att signalera typen av ändring. Välj ett schema och tillämpa det konsekvent.

**Dataändringar.** Ändringar av databasstruktur och data är svårare att backa än kodändringar. Mönster som att göra ändringar bakåtkompatibla, köra gamla och nya strukturer sida vid sida och migrera i små steg minskar risken. Wikipedia beskriver schemamigrering.

**Snabbrättningar och patchar.** Brådskande rättningar gjorda utanför den normala cykeln, vanligen för att åtgärda ett allvarligt fel eller en sårbarhet. De behöver en påskyndad väg med samma disciplin: testa, granska, driftsätt genom pipelinen och registrera. Se ämne 3.4 — Ändringsmöjliggörande.

**Miljöer.** Test-, förproduktions- och produktionsmiljöer, var och en med ett syfte. Ju närmare testmiljöer liknar produktion, desto mer tillförlitliga är testerna. Wikipedia-artikeln om driftsättningsmiljöer beskriver vanliga upplägg.

**Programvaruförsörjningskedjan.** Releaser inkluderar komponenter från andra parter, som bibliotek och containerbilder. En programvaruförteckning (software bill of materials) listar dem, vilket hjälper vid hantering av sårbarheter. Se ämne 4.2 — Hantering av programvarutillgångar.

**Hur linserna passar in.** Releasepraktik är den agila linsen vid kontaktpunkten med användare: små releaser med återkoppling. AI kan skriva utkast till versionsanteckningar och sammanfatta ändringar, under granskning. Automatisering kör pipelinen och utrullningen. Analys visar hur en release beter sig.

## Bra arbetssätt

1. **Driftsätt smått och ofta.** Lägg ändringar i produktion i små delar, bakom flaggor där det är användbart. Frekvent driftsättning gör varje låg risk och rutin.
2. **Släpp med avsikt.** Avgör tillsammans med verksamheten när användare ska se en funktion och använd en flagga eller stegvis utrullning för att styra det. Låt inte driftsättningsschemat diktera releasen.
3. **Rulla ut i steg.** Börja med en liten, informerad grupp, titta på indikatorer och vidga. Definiera i förväg vad ni ska titta på och vad som skulle få er att stanna.
4. **Håll flaggor städade.** Registrera varje flaggas syfte, ägare och borttagningsdatum. Ta bort flaggor efter utrullning. Testa båda tillstånden så länge en flagga lever.
5. **Gör vägen tillbaka snabb.** Känn till hur man stänger av en flagga, backar eller växlar över, och repetera det. För dataändringar, planera framåtkompatibla steg.
6. **Förbered support före release.** Ge servicedesken versionsanteckningar, en kort guide och kända problem innan användare ser en ändring. Fråga dem vad de behöver.
7. **Skriv versionsanteckningar för deras läsare.** Säg vad som ändrats på användarens villkor, vad man kan vänta sig och var man får hjälp. Håll tekniska detaljer i en separat anteckning.
8. **Kontrollera beredskap kortfattat.** Använd en kort, konsekvent checklista för betydande releaser. Hoppa över den för rutinmässiga som pipelinen täcker.
9. **Bevaka releasen.** Övervaka felfrekvens, prestanda och användarindikatorer under och efter utrullning och utse någon som bevakar. Registrera vad ni såg.
10. **Registrera vad som släpptes.** För register över versioner, datum och flaggtillstånd, vilket hjälper vid incidenter och revisioner. Generera det ur pipelinen där ni kan.

## Frågor att diskutera i teamet

**Vad är skillnaden mellan att driftsätta och att släppa i vår organisation, och vem avgör vardera?**
I många team är de två samma händelse. Fråga vem som avgör att kod ska in i produktion och vem som avgör när användare ser en funktion. Räkna med suddiga svar. Fördjupa genom att välja en funktion att skilja åt.

**Hur snabbt kunde vi stänga av en ny funktion om den orsakade skada?**
Testa svaret. Vissa team kan stänga av en flagga på sekunder; andra behöver en ny driftsättning och ett godkännande. Fråga efter senaste gången. Fördjupa genom att välja en riskfylld funktion och planera en snabb avstängning.

**Vad vet vårt supportteam om en release innan användare ser den?**
Fråga servicedesken. Räkna med "ingenting förrän första samtalet". Fördjupa genom att komma överens om ett standardinformationspaket och en tidpunkt, till exempel 48 timmar innan.

**Vilka funktionsflaggor har vi, och vilka borde vara borta?**
En lista över flaggor visar ofta många som ingen minns. Fråga vem som äger var och en. Fördjupa genom att schemalägga borttagning av de äldsta och lägga till ett ägarfält.

**Hur släpper vi en ändring som påverkar databasen, och vad händer om vi behöver gå tillbaka?**
Dataändringar orsakar de värsta överraskningarna. Be om den senaste migreringen och dess återställningsplan. Fördjupa genom att komma överens om ett mönster, till exempel bakåtkompatibla ändringar i två steg.

**Var kunde AI hjälpa med versionsanteckningar eller beredskap, och vad måste en människa verifiera?**
AI kan skriva utkast till anteckningar utifrån incheckningsmeddelanden och ärenden. Den kan återge fel vad som ändrats. Fråga vem som läser utkastet och jämför det med ändringen. Fördjupa genom att pröva AI-utkast för interna anteckningar, där en person godkänner varje.

## I praktiken: ett exempel på tjänstehantering

Ett nationalbiblioteks onlinekatalog används av forskare runt om i världen. Teamet släpper en omdesignad söksida. Tidigare skulle en sådan ändring ha gått live en tisdagskväll med ett kort tillkännagivande. Den här gången ber tjänsteägaren om en stegvis release.

Teamet driftsätter den nya sidan i produktion en vecka tidigt, avstängd. Därefter slår det på den för intern personal, och dagen efter för 5 procent av besökarna, slumpmässigt valda. Releaseledaren bevakar sökframgång och antal fel, och servicedesken får en enkelsidig guide och en kort lista över kända problem två dagar innan. Dag tre rapporterar en forskare i pilotgruppen att sökningar med vissa icke-engelska tecken fallerar. Teamet stänger av flaggan för alla användare inom en minut, åtgärdar felet nästa morgon och startar om utrullningen vid 5 procent. Två veckor senare är den nya sidan tillgänglig för alla, och flaggan schemaläggs för borttagning.

Det som förändras: felet drabbade en handfull användare under en dag, och supportdesken var redo för frågor. Det som förblir svårt: flaggsystemet ligger i ett separat verktyg vars åtkomst inte är tätt kontrollerad, så teamet har bett om en granskning; versionsanteckningarna skrevs av utvecklarna och forskarna fann dem förvirrande; och dubbelt underhåll av den gamla och nya söksidan kostade ungefär en veckas arbete. Ägaren lägger till en användarvänd redaktör i steget för versionsanteckningar.

## Fyra perspektiv

### Produkt- och leveransteam

Utforma för separat driftsättning och release: använd flaggor, gör dataändringar kompatibla och planera vägen tillbaka. Bevaka era egna releaser och skriv anteckningar som användare och support kan förstå.

### Tjänste- och driftsteam

Hjälp till att definiera beredskap, övervakning och återställning. Be om releaseinformation tidigt och tala om för utvecklare vad ni behöver. Håll registret över vad som finns i produktion korrekt.

### Ledning och styrning

Avgör releasetidpunkt tillsammans med verksamheten, inte efter driftsättningskalendern. Finansiera pipelinen och flaggverktygen. Be om stegvis utrullning för funktioner med stor påverkan och undvik trycket att släppa vid ett fast datum oavsett beredskap.

### Kunder och användare

Du bör få veta om ändringar som betyder något i termer du förstår, och du bör lätt kunna rapportera problem. Om du deltar i tidig åtkomst, räkna med att bli ombedd om återkoppling och tala om för teamet vad du ser.

## Agilitet, AI, automatisering och analys

### Agilitet

Små, frekventa releaser med verkliga användare involverade i de tidiga stegen ger snabb återkoppling. Behandla varje release som ett lärandesteg och justera nästa. Se upp: släpp inte funktioner som användare inte vill ha bara för att pipelinen kan; kontrollera värdet med användare.

### AI

AI kan skriva utkast till versionsanteckningar utifrån ändringar och ärenden, sammanfatta återkoppling efter utrullning och föreslå vad man ska bevaka. Utse en ägare och låt en person jämföra utkastet med ändringen före publicering. Se upp: en rimlig men felaktig versionsanteckning vilseleder användare och support; kontrollera mot den faktiska ändringen. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Automatisera driftsättning, stegvis utrullning, hälsokontroller, automatiskt stopp vid dåliga indikatorer och återställning, med loggar och manuell överstyrning. Se upp: automatiska utrullningsregler som utlöses vid dåliga indikatorer kan slå fel; testa dem och håll en person informerad. Se ämne 6.4 — Pipelines och automatiserade ändringar.

### Analys

Jämför indikatorer mellan den släppta gruppen och de andra under utrullningen, till exempel fel, uppgiftsframgång och klagomål. Se upp: små grupper ger brusiga resultat, och jämförelse utan omsorg kan vilseleda; kom överens om vad ni tittar på och hur länge ni väntar. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Release och driftsättning sammankopplade.** Varje lansering är riskfylld. Skilj dem åt med flaggor och stegvis utrullning.
- **Flaggor som ingen äger.** Koden fylls med döda vägar. Registrera ägare och borttagningsdatum.
- **Ingen snabb väg tillbaka.** En dålig release varar i timmar. Repetera återställning och flaggväxlingar.
- **Support får veta vid första samtalet.** Desken är oförberedd. Ge anteckningar och en guide i förväg.
- **Versionsanteckningar skrivna för utvecklare.** Användare kan inte läsa dem. Skriv för målgruppen.
- **Dataändringar inte planerade.** En återställning är omöjlig. Använd kompatibla, små steg.
- **Att bevaka ingenting.** Problem hittas av användare. Utse en bevakare och sätt indikatorer.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Åtskillnad mellan driftsättning och release | Samma händelse | Några flaggor används | Flaggor och stegvis utrullning för betydande funktioner | Utrullningsbeslut baseras på data | Utrullning automatiserad med skyddsräcken över tjänster |
| Återställning | Långsam och manuell | Dokumenterad | Repeterade snabba vägar | Återhämtningstid mäts | Automatisk och testas regelbundet |
| Kommunikation | Tillkännages vid lansering | Anteckningar för vissa releaser | Anteckningar för varje målgrupp, support informerad i förväg | Anteckningar testas med läsare | Kommunikation integrerad med pipelinen och kanalerna |
| Register | Minne och e-post | Kalkylblad | Genereras ur pipelinen | Används i granskningar och revisioner | Kopplade över versioner, flaggor och incidenter |

## Checklista

- [ ] Vi skiljer driftsättning från release för betydande ändringar.
- [ ] Funktionsflaggor har ägare och borttagningsdatum.
- [ ] Vi rullar ut i steg med definierade indikatorer och stoppkriterier.
- [ ] Vi vet hur vi snabbt stänger av eller backar och har repeterat det.
- [ ] Support får releaseinformation före användare.
- [ ] Versionsanteckningar är skrivna för sina läsare.
- [ ] Dataändringar görs i kompatibla, reversibla steg.
- [ ] Register över vad som släppts genereras ur pipelinen.

## AI-prompter

**Skriv ett utkast till versionsanteckningar för granskning.**

```text
Here are the changes in this release: [paste list of changes with ticket titles]. The audience is [users, support staff, or operations].
Draft release notes of under 200 words in plain language, grouped by what users will notice, and list items you could not describe without guessing. Do not add features or dates that are not in the list.
List what you are unsure of.
```

**Förbered en checklista för releaseberedskap.**

```text
Our release: [describe]. Risks we know of: [list]. Our usual checks: [list].
Draft a checklist of up to ten yes/no questions to answer before release, with who answers each. Keep it short and tied to the listed risks.
List what you are unsure of.
```

**Planera en stegvis utrullning.**

```text
Our feature: [describe]. Our users: [groups and sizes]. Indicators we can measure: [list].
Propose three stages with the audience, what to watch, how long, and what would make us stop. Note what the indicators cannot tell us. Do not claim any stage is safe.
List what you are unsure of.
```

## AI-färdigheter

- [release-notes](../../../../skills/release-notes/SKILL.md): använd för att skriva versionsanteckningar för varje målgrupp.
- [changelog](../../../../skills/changelog/SKILL.md): använd för att föra en tydlig historik över ändringar.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): använd för att testa tidigare i pipelinen.
- [runbook](../../../../skills/runbook/SKILL.md): använd för att dokumentera steg för utrullning och återställning.

## Viktiga källor

- Jez Humble och David Farley, *Continuous Delivery* (2010): grunden för driftsättningspipelines och releasetekniker.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktikerna release- och driftsättningshantering.
- Wikipedia, "Software deployment" och "Feature toggle": översikter av huvudidéerna.
- Wikipedia, "Release management": bakgrund till disciplinen.

## Referenser

1. Release management — Wikipedia — https://en.wikipedia.org/wiki/Release_management
2. Software deployment — Wikipedia — https://en.wikipedia.org/wiki/Software_deployment
3. Software release life cycle — Wikipedia — https://en.wikipedia.org/wiki/Software_release_life_cycle
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Release notes — Wikipedia — https://en.wikipedia.org/wiki/Release_notes
7. Changelog — Wikipedia — https://en.wikipedia.org/wiki/Changelog
8. Software versioning — Wikipedia — https://en.wikipedia.org/wiki/Software_versioning
9. Schema migration — Wikipedia — https://en.wikipedia.org/wiki/Schema_migration
10. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
11. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
