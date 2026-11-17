# Kontinuerlig leverans

**Kontinuerlig leverans är praktiken att alltid hålla programvara i ett släppbart skick och ofta leverera små ändringar till levande tjänster genom automatiserade steg för bygge, test och driftsättning; den gör förändring säkrare genom att göra den mindre, och det är så agila team ändrar levande tjänster utan att vänta på en kvartalsrelease.**

## Varför det här är viktigt

Förändring är den största riskkällan i en levande tjänst, och det vanliga svaret är att sakta ned den: färre releaser, fler godkännanden, större testcykler. Vart och ett av dessa gör nästa release större, vilket gör den riskablare, vilket föranleder mer försiktighet. Team finner sig släppa en gång per kvartal med en lång helg av oroligt arbete.

Kontinuerlig leverans vänder på den cykeln. Om en ändring är liten är dess effekter lätta att förstå, lätta att testa och lätta att backa. Om den släpps genom en automatiserad pipeline körs samma kontroller varje gång, i samma ordning, med ett register. Om releasen kan göras när som helst kan teamet svara på en fallerande tjänst eller en kunds behov på timmar i stället för veckor.

För tjänstehantering spelar kontinuerlig leverans roll eftersom den ändrar hur kontroll ser ut. En praktik för ändringsmöjliggörande som bygger på ett veckovist styrelsemöte kan inte hålla jämna steg med 20 releaser om dagen, och behöver inte det om pipelinen bär kontrollerna (se ämne 3.4 — Ändringsmöjliggörande och ämne 6.4 — Pipelines och automatiserade ändringar). Det här ämnet förklarar praktiken, vokabulären och hur man inför den utan att förlora kontrollen.

## Grundbegrepp

**Kontinuerlig integration.** Utvecklare slår ihop sitt arbete med en gemensam huvudlinje ofta, minst dagligen, och varje sammanslagning utlöser ett automatiskt bygge och en testkörning. Syftet är att hitta integrationsproblem när de är små. Wikipedia-artikeln om kontinuerlig integration beskriver praktiken och dess ursprung i extreme programming.

**Kontinuerlig leverans.** Byggen som klarar de automatiska kontrollerna är alltid i ett skick som kan släppas. Beslutet att släppa är ett affärsbeslut, taget när det passar, inte ett tekniskt hinder. I den vanliga formuleringen är releasen ett klick och låg risk.

**Kontinuerlig driftsättning.** Ett ytterligare steg där varje ändring som klarar pipelinen släpps till produktion automatiskt, utan manuellt godkännande. Det är ett val, inte ett krav för kontinuerlig leverans, och det passar vissa tjänster och vissa risker bättre än andra.

**Driftsättningspipelinen.** En automatiserad sekvens av steg: bygge, enhetstester, integrationstester, säkerhetskontroller, driftsättning i en testmiljö, acceptanstester och release. Varje steg antingen för ändringen vidare eller stoppar den. Pipelinen är både en säkerhetsmekanism och en källa till belägg, eftersom den registrerar vad som kontrollerats.

**Små batcher.** Att släppa små ändringar betyder att var och en berör lite. Littles lag från köteorin, som Wikipedia beskriver, förklarar en del av effekten: med samma arbetstakt innebär mindre batcher kortare köer och kortare fördröjningar. Små batcher gör också fel lättare att spåra till en orsak.

**Att skilja driftsättning från release.** Driftsättning lägger kod på produktionsservrar. Release gör en funktion tillgänglig för användare. Tekniker som funktionsbrytare låter dig driftsätta kod avstängd och aktivera den senare, först för vissa användare. Det minskar risken i varje steg. Se ämne 3.5 — Release- och driftsättningshantering.

**Progressiv leverans.** Att släppa först till en liten andel användare, titta och vidga gradvis. Varianter inkluderar kanariereleaser, där en liten grupp får ändringen, och blågrön driftsättning, där två produktionsmiljöer växlar så att ett byte snabbt kan backas.

**Versionshantering och trunk-baserad utveckling.** Alla ändringar, inklusive konfiguration och infrastrukturdefinitioner, finns i versionshantering. Många team arbetar på en enda huvudgren med kortlivade grenar, vilket håller integrationen frekvent. Se ämne 6.3 — Infrastruktur som kod och GitOps.

**Snabb återkoppling och återhämtning.** Målet är att hitta fel snabbt och att återhämta sig snabbt. Forskningsprogram om programvaruleverans, som arbetet från DevOps Research and Assessment (DORA), följer mått som driftsättningsfrekvens, ledtid för ändringar, andel ändringar som misslyckas och tid för att återställa tjänsten. Behandla dem som frågor om ert system, inte som poäng för team; se boken *Service Management Metrics*.

**Vad det kräver.** Automatiserade tester ni litar på, en stabil pipeline, en förmåga att backa eller rulla framåt, produktionsövervakning som visar en ändrings effekt och ett team som äger det det släpper. Utan dessa är frekventa releaser vårdslösa; med dem är de säkrare än sällsynta.

**Hur linserna passar in.** Kontinuerlig leverans är den praktiska formen av den agila linsen för levande tjänster. AI-assistenter hjälper till att skriva och granska kod och tester under mänsklig granskning. Automatisering är pipelinens kärna. Analys berättar vad pipelinen och tjänsterna gör.

## Bra arbetssätt

1. **Håll huvudlinjen släppbar.** Behandla ett trasigt bygge som teamets högsta prioritet. En regel som "åtgärda eller återställ inom en timme" håller integrationen frisk.
2. **Gör ändringar små.** Sikta på ändringar som en granskare förstår på minuter. Om en ändring är stor, dela upp den, till exempel genom att släppa det förberedande steget först.
3. **Automatisera de kontroller ni litar på.** Bygg-, enhets-, integrations- och säkerhetskontroller körs på varje ändring. Lägg till en kontroll när en incident visar en lucka och ta bort en som aldrig fallerar och kostar tid, efter diskussion.
4. **Använd en enda väg genom pipelinen för alla ändringar.** Undvik särskilda vägar för brådskande ändringar. En enda väg som är snabb nog för nödsituationer är säkrare än ett undantag som sällan används.
5. **Skilj driftsättning från release.** Använd funktionsbrytare och stegvisa utrullningar så att nytt beteende kan slås på för några användare och av igen snabbt. Registrera tillståndet för varje brytare och ta bort gamla.
6. **Planera vägen tillbaka.** Känn för varje ändring till hur den backas eller rullas framåt och öva på det. Dataändringar kräver särskild omsorg, eftersom en kodåterställning inte kan ångra dem.
7. **Övervaka effekten av varje release.** Titta på felfrekvens, latens och användarvända indikatorer under en bestämd period efter releasen, och gör det lätt att koppla en ändring till ett symptom.
8. **Skriv ned vad pipelinen kontrollerar.** En kort beskrivning av varje steg, dess syfte och ägare låter revisorer, ny personal och drift förstå den.
9. **Ta med drift från början.** Ta in drift- och supportpersonal i designen, så att loggning, körhandböcker och larm är en del av ändringen och inte en eftertanke.
10. **Förbättra pipelinen som en produkt.** Ge den en ägare och en backlogg. Långsamma, opålitliga pipelines lär människor att gå förbi dem.

## Frågor att diskutera i teamet

**Hur lång tid tar det för vår minsta ändring att nå produktion, och var väntar den?**
Det här hittar fördröjning. Be om ett verkligt exempel med tidsstämplar. Typiska väntetider är manuell testning, godkännande, miljöåtkomst och releasefönster. Fördjupa genom att välja den längsta väntan och ett första steg för att korta den.

**Vilka av våra manuella godkännanden kunde en pipelinekontroll ersätta, och vilken risk kontrollerar var och en?**
Varje godkännande finns av en anledning, ofta en incident för flera år sedan. Fråga vilken risk det tar upp och vilka belägg som skulle tillfredsställa godkännaren. Räkna med motstånd från kontrollernas ägare; be dem hjälpa till att utforma ersättningen. Fördjupa genom att pröva en ersättning med ett granskningsdatum.

**Vad händer när en release går fel? Hur snabbt kunde vi backa den, och har vi övat?**
Team upptäcker ofta att återställning bara finns på papper. Fråga när den senast användes. Fördjupa genom att planera en repetition i en säker miljö.

**Vilka tester litar vi på, och vilka ignorerar vi?**
Opålitliga tester urholkar förtroendet. Fråga vilka fel teamet rycker på axlarna åt. Räkna med ärliga svar om tester som "brukar gå igenom vid omkörning". Fördjupa genom att välja ett opålitligt test att laga eller ta bort.

**Hur vet vi inom en timme om en release skadade användarna?**
Det här prövar övervakning. Svaren varierar från "vi väntar på klagomål" till instrumentpaneler och automatiska larm. Fråga vilken indikator som hade fångat den senaste dåliga releasen. Fördjupa genom att välja en indikator att lägga till och kontrollera.

**Var kunde AI hjälpa i vår pipeline, och vem granskar det den producerar?**
AI kan skriva utkast till tester, granska ändringar och förklara fel. Fråga vad varje användning skulle ge och vem som är ansvarig. Räkna med entusiasm och lite tillsyn. Fördjupa genom att välja en lågriskig användning med mänsklig granskning och ett mått på fel.

## I praktiken: ett exempel på tjänstehantering

Ett regionalt sjukhusbolags digitala team driver en tjänst för patientbokningar som används av 30 kliniker. Releaser sker kvartalsvis i ett helgfönster med en stor testchecklista. De två senaste releaserna drog över tiden, och en introducerade ett fel som visade sig på måndagsmorgonen som dubbelbokade tider.

Teamledaren föreslår tillsammans med tjänsteägaren små steg. Först automatiserar de bygget och de 200 viktigaste regressionstesterna, så att de körs på varje ändring. Sedan lägger de konfigurationen i versionshantering och kräver kamratgranskning av varje ändring. Därefter lägger de till en funktionsbrytare så att nya bokningsregler kan slås på för en klinik först. Patientsäkerhetsansvarig, som skriver under tjänsten, ber om belägg för att varje ändring testats och granskats. Teamet visar henne pipelinens register för varje release.

Efter fyra månader släpper teamet varje vecka, och måndagsmorgonens risk är mindre eftersom ändringarna är mindre och synliga. Ändringen av dubbelbokningsregeln slås först på vid en klinik, fångas dag två när en receptionist märker ett konstigt meddelande och stängs av inom några minuter.

Det som förändras: releaser slutar vara helghändelser och säkerhetsansvarig granskar belägg i stället för att delta i möten. Det som förblir svårt: testsviten missar fortfarande vissa komplexa bokningsfall, ett äldre gränssnitt mot patientjournalsystemet saknar automatiserat test och två kliniker är missnöjda med veckovis förändring eftersom den påverkar deras utbildning. Teamet kommer överens om en ändringskalender för utbildningskänsliga funktioner och fortsätter lägga till tester när incidenter avslöjar luckor.

## Fyra perspektiv

### Produkt- och leveransteam

Äg pipelinen och det den släpper. Håll ändringarna små, testerna pålitliga och brytarna städade. Ta med loggning, larm och körhandböcker i definitionen av klart och titta på effekten av varje release.

### Tjänste- och driftsteam

Hjälp till att definiera vad pipelinen kontrollerar och vad övervakningen visar. Arbeta med utvecklarna kring återställning och kring hur "frisk" ser ut. Be om releaseregistret när en incident börjar.

### Ledning och styrning

Finansiera pipeline, tester och övervakning, som är lätta att svälta. Be om belägg för kontroll från pipelinen snarare än från möten. Använd inte leveransmått för att rangordna team.

### Kunder och användare

Räkna med små, frekventa ändringar och snabba rättningar. Tala om för teamet när en ändring stör dig, till exempel kring utbildning eller hektiska perioder, och be om förvarning om betydande ändringar.

## Agilitet, AI, automatisering och analys

### Agilitet

Kontinuerlig leverans är leveranssidan av agil praktik: fungerande förändring i små delar, med intressenter involverade och en regelbunden översyn av vad som ska förbättras. Se upp: likställ den inte med en särskild metod; team kan leverera kontinuerligt med eller utan sprintar.

### AI

AI-assistenter kan skriva utkast till kod, tester och versionsanteckningar och sammanfatta fel, med en namngiven ägare och en person som granskar varje utdata innan det går in i pipelinen. Se upp: genererad kod kan ha säkerhets- eller licensproblem; kör samma kontroller som för vilken ändring som helst och följ andelen AI-stödda ändringar som orsakar defekter. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Automatisera bygge, test, säkerhetsskanning, driftsättning och beläggsspåret, och håll återställning automatisk där ni kan. Se upp: en grön pipeline visar att kontrollerna klarades, inte att ändringen är rätt; behåll mänsklig granskning för design- och riskbeslut. Se ämne 6.4 — Pipelines och automatiserade ändringar.

### Analys

Följ ledtid för ändringar, driftsättningsfrekvens, andel misslyckade ändringar och tid för att återställa, som frågor till systemet. Se upp: när dessa blir mål delar team upp ändringar på konstgjord väg eller undviker att registrera fel; använd dem med skyddsräckena i boken *Service Management Metrics*.

## Vanliga felmönster

- **Frekventa releaser utan tester.** Farten ökar och förtroendet sjunker. Bygg kontrollerna först och släpp så ofta de stöder.
- **En separat väg för brådskande ändringar.** Den brådskande vägen är otestad och riskabel. Gör huvudvägen snabb nog för nödsituationer.
- **Långlivade funktionsbrytare.** Gamla brytare hopar sig och ingen vet vad som är påslaget. Följ brytare och ta bort dem efter utrullning.
- **Ingen återställningsrepetition.** Återställningen fallerar när den behövs. Öva i en säker miljö.
- **Opålitliga tester ignoreras.** Människor slutar tro på röda byggen. Laga eller ta bort opålitliga tester.
- **Pipelinen som någon annans jobb.** Den förfaller. Ge den en ägare och en backlogg.
- **Mått som används för att rangordna team.** Team manipulerar siffror. Använd mått för att hitta problem, inte för att jämföra människor.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Releasefrekvens | Kvartalsvis eller sällsyntare | Månatligen | Veckovis eller oftare, på en standardväg | Frekvensen justeras efter risk och efterfrågan | Kontinuerligt över tjänster, med progressiv leverans |
| Automatisering | Manuellt bygge och test | Automatiserat bygge | Automatiserat bygge, test och driftsättning | Pipelinen övervakas och förbättras som en produkt | Pipelines delas och styrs över team |
| Kontrollbelägg | Möten och checklistor | Vissa register | Pipelineregister för varje ändring | Belägg stickprovskontrolleras och granskas | Belägg kontinuerliga, med mänsklig granskning av risk |
| Återhämtning | Återställning oklar | Återställning dokumenterad | Återställning eller framåtrullning repeterad | Tid för att återställa mäts | Återhämtning automatiserad och testas regelbundet |

## Checklista

- [ ] Huvudlinjen är släppbar hela tiden.
- [ ] Varje ändring går genom en automatiserad pipeline.
- [ ] Tester vi litar på körs på varje ändring; opålitliga tester lagas eller tas bort.
- [ ] Vi skiljer driftsättning från release, med funktionsbrytare som följs.
- [ ] Vi vet hur vi backar eller rullar framåt och har repeterat det.
- [ ] Vi övervakar effekten av varje release.
- [ ] Pipelinen har en ägare, en backlogg och en beskrivning av sina kontroller.
- [ ] AI-stödda ändringar granskas och följs.

## AI-prompter

**Hitta väntetiderna i en release.**

```text
Here is a timeline of our last release, from "change ready" to "in production": [paste timeline with timestamps and who acted].
List each wait and how long it was, then give two questions per wait to find its cause. Do not assume causes.
List what you are unsure of.
```

**Föreslå pipelinekontroller för en risk.**

```text
Our service: [describe]. The risk we want to control: [describe, such as untested configuration change].
List five automated checks that could address it, what each would catch, and what each would miss. Do not claim a check removes the risk.
Mark assumptions and list what you are unsure of.
```

**Skriv ett utkast till en plan för återställningsrepetition.**

```text
Our release process: [paste steps]. Our rollback method: [describe, or write "unknown"].
Draft a one-page rehearsal plan with steps, roles, success criteria, and what to record. Include a safe environment only; do not suggest rehearsing in production.
List what you are unsure of.
```

## AI-färdigheter

- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): använd för att flytta testning tidigare i pipelinen.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): använd för att bygga tester vid sidan av ändringar.
- [release-notes](../../../../skills/release-notes/SKILL.md): använd för att beskriva varje release för kunder och support.

## Viktiga källor

- Jez Humble och David Farley, *Continuous Delivery* (2010): boken som gav praktiken dess namn och beskrivning.
- DORA (dora.dev): forskning och rapporter om programvaruleveransens prestation.
- Wikipedia, "Continuous delivery": en sammanfattning av principer och besläktade praktiker.
- Wikipedia, "Continuous integration": praktiken som ligger under.

## Referenser

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Continuous deployment — Wikipedia — https://en.wikipedia.org/wiki/Continuous_deployment
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
10. DORA — DevOps Research and Assessment — https://dora.dev
