# DevOps

**DevOps är en uppsättning kulturella vanor, arbetssätt och verktyg som för samman utveckling och drift så att team kan ändra levande tjänster snabbt och driva dem pålitligt; det kompletterar ITIL genom att flytta många kontroller in i själva arbetet, och det ersätter inte behovet av tydligt ägarskap och belägg.**

## Varför det här är viktigt

I åratal var det att bygga programvara och att driva den skilda arbeten i skilda team med olika mål. Utvecklare belönades för förändring, driften för stabilitet, och de två grupperna möttes vid en överlämning som båda tyckte var frustrerande. Releaser kastades över en mur, incidenter kastades tillbaka och kunderna väntade.

DevOps uppstod i slutet av 2000-talet som ett svar. Dess kärnidé är enkel: de som bygger en tjänst bör dela ansvaret för att driva den, och de som driver den bör hjälpa till att forma hur den byggs. Det delade ansvaret, stött av automatisering och snabb återkoppling, låter team släppa ofta och återhämta sig snabbt.

För tjänstehantering är DevOps en stor påverkan och ibland en källa till friktion. ITIL beskriver praktiker som ändringsmöjliggörande och incidenthantering, och DevOps beskriver hur team utför dem med pipelines, delad jour och skuldfri granskning. Organisationer som ser de två som motsatser får parallella system; de som kopplar ihop dem får kontroller som är snabbare och bättre underbyggda. Det här ämnet förklarar idéerna och visar hur de passar ihop med resten av guiden.

## Grundbegrepp

**Vad DevOps är.** Ordet kombinerar "development" och "operations". Wikipedia beskriver det som en uppsättning praktiker som integrerar programvaruutveckling och it-drift, med syftet att förkorta leveranscykeln och ge kontinuerlig leverans med hög kvalitet. Det är mer en rörelse än ett ramverk: det finns inget styrande organ eller någon enskild certifiering som definierar det.

**Kultur först.** Den centrala förändringen är kulturell: gemensamma mål, delat ansvar och samarbete mellan roller. Team som tar till sig verktygen utan kulturen behåller den gamla överlämningen under nytt namn. En vanlig sammanfattning är "you build it, you run it", förknippad med ett yttrande av Werner Vogels på Amazon, vilket betyder att det team som bygger en tjänst ansvarar för att driva den.

**De tre vägarna.** I romanen *The Phoenix Project* och handboken som följde beskriver Gene Kim och medförfattare tre principer: flöde (snabba på arbetet från utveckling till drift till kunder), återkoppling (skapa snabb återkoppling från höger till vänster i varje steg) samt ständigt lärande och experimenterande. De kopplar DevOps till lean-tänkandet; se ämne 2.4 — Lean och kaizen och ämne 2.3 — Flöde och kanban.

**CALMS.** Ett vanligt minnesstöd för elementen: culture (kultur), automation (automatisering), lean, measurement (mätning) och sharing (delning). Det är användbart som en checklista över vad man ska titta på hos ett team, inte som ett mognadsbetyg.

**Praktiker.** Typiska DevOps-praktiker omfattar versionshantering av allt, kontinuerlig integration och leverans (se ämne 2.2 — Kontinuerlig leverans), infrastruktur som kod (se ämne 6.3 — Infrastruktur som kod och GitOps), automatiserad testning, övervakning och observerbarhet (se ämne 7.4 — Observerbarhet och telemetri), delad jour och skuldfria granskningar av incidenter.

**Att flytta åt vänster.** Att flytta kontroller som testning och säkerhet tidigare i livscykeln, där problem är billigare att åtgärda. DevSecOps utvidgar idén till säkerhet och bygger in säkerhetskontroller i pipelinen. Wikipedia beskriver båda.

**Plattformsutveckling.** En nyare praktik där ett team bygger och driver en intern plattform som andra team använder för att bygga, driftsätta och driva tjänster. Syftet är att minska belastningen på produktteamen genom att erbjuda anlagda, standardiserade vägar. Wikipedia beskriver plattformsutveckling. Det krävs omsorg: en plattform som team tvingas använda men inte kan påverka blir ännu en överlämning.

**Förhållande till ITIL.** ITIL 4 erkänner DevOps och beskriver sina praktiker på sätt som kan mötas av pipelinekontroller. De två svarar på olika frågor: DevOps beskriver hur team arbetar och automatiserar; ITIL beskriver de praktiker en organisation behöver, som incident-, ändrings- och servicenivåhantering. En användbar sammanfattning är att DevOps ofta ger "hur" och ITIL "vad man bör överväga". Se ämne 1.2 — ITIL och ämne 2.9 — Agil tjänstehantering.

**Förhållande till SRE.** Site reliability engineering (SRE) är en ingenjörsdisciplin för tillförlitlighet som växte fram hos Google; den delar mål med DevOps, använder servicenivåmål och felbudgetar och behandlar ofta drift som ett programvaruproblem. Se ämne 2.6 — Site reliability engineering.

**Förhållande till agilitet.** Agil praktik fokuserar på att leverera fungerande programvara i små delar med intressentdeltagande; DevOps utvidgar omsorgen bortom releasen, in i att driva och förbättra tjänsten. De två delar värderingar som samarbete, snabb återkoppling och ständig förbättring.

**Vanliga invändningar.** Vissa driftmedarbetare fruktar att DevOps betyder att jobb skärs ned eller kontroller tas bort; vissa utvecklare fruktar att det betyder permanent jour. Båda farhågorna har verkliga fall bakom sig. Ta upp dem direkt med tydliga överenskommelser om arbetsbörda, stöd och vilka kontroller som finns kvar.

**Hur linserna passar in.** DevOps är leveranskulturen inom den agila linsen. AI-assistenter är nu en del av många verktygskedjor, under mänsklig granskning. Automatisering är central. Analys, inklusive leverans- och tillförlitlighetsmått, sluter återkopplingsslingan.

## Bra arbetssätt

1. **Börja med gemensamma mål.** Ge utveckling och drift samma resultat att bry sig om, till exempel kundsynlig tillförlitlighet och hastigheten på säker förändring. Separata mål för vardera gruppen återskapar muren.
2. **Gör teamet ansvarigt för det det bygger.** Låt det team som bygger en tjänst delta i att driva den, med det stöd, den utbildning och de gränser för jourbelastning som gör det hållbart.
3. **Automatisera vägen till produktion.** Använd pipelines som bygger, testar, skannar och driftsätter på samma sätt varje gång, med register. Se ämne 6.4 — Pipelines och automatiserade ändringar.
4. **Lägg allt i versionshantering.** Kod, konfiguration, infrastrukturdefinitioner och körhandböcker. En ändring blir då granskningsbar, spårbar och går att backa.
5. **Flytta kontroller åt vänster.** Lägg till enhetstester, säkerhetsskanningar och policykontroller tidigt i pipelinen och åtgärda orsakerna till upprepade fel.
6. **Titta på produktionen och dela vad ni ser.** Ge utvecklare tillgång till samma övervakning som driften använder och gå igenom den tillsammans. Se ämne 3.10 — Övervakning och händelsehantering.
7. **Granska incidenter utan skuld.** Håll en granskning efter betydande incidenter, fokusera på systemet och följ åtgärderna. Se ämne 3.3 — Problemhantering.
8. **Erbjud en plattform, inte ett påbud.** Om ni bygger en intern plattform, behandla teamen som använder den som kunder: fråga vad de behöver, publicera dess färdplan och mät om den hjälper.
9. **Behåll kontrollerna, ändra hur de fungerar.** Där en kontroll hanterar en verklig risk, som uppdelning av arbetsuppgifter, behåll den och möt den med automatisering och register snarare än med ett möte.
10. **Mät leverans och tillförlitlighet tillsammans.** Titta på hur snabbt och hur ofta ni ändrar såväl som hur ofta ändringar orsakar problem och hur snabbt ni återhämtar er. Använd siffrorna för att lära, inte för att rangordna människor.

## Frågor att diskutera i teamet

**Var finns överlämningen mellan att bygga och att driva, och vad går förlorat där?**
De flesta organisationer har en eller flera. Fråga båda sidor: vad vet inte utvecklare om att driva tjänsten, och vad vet inte driften om designen? Räkna med långa listor. Fördjupa genom att välja en överlämning att ta bort eller krympa.

**Vem ringer vi när vår tjänst fallerar på natten, och vet de hur den ska lagas?**
Det här granskar "you build it, you run it" i praktiken. Svaren varierar från en utvecklare i jour till ett separat team med begränsad kunskap. Fråga om arbetsbörda och given utbildning. Fördjupa genom att komma överens om en förändring som förbättrar antingen kunskapen eller belastningen.

**Vilka kontroller har vi som finns på grund av en tidigare incident, och kunde en pipeline ge dem?**
Många kontroller är ärvda. Fråga vilken risk var och en tar upp och vilka belägg som tillfredsställer ägaren. Fördjupa genom att pröva en pipelineersättning med ägarens medverkan.

**Vad skulle vår interna plattform behöva göra för att vi fritt skulle välja den?**
Det här prövar plattformstänkande. Om team bara skulle använda den för att de blir tillsagda tjänar den dem inte. Fråga vad de använder i dag och varför. Fördjupa genom att komma överens om en liten uppsättning kundintervjuer.

**Hur granskar vi incidenter, och vad ändrades efter den senaste?**
Granskningar betyder bara något om åtgärder följer. Be om den senaste granskningens åtgärder och deras status. Räkna med att några fortfarande är öppna. Fördjupa genom att tilldela ägare och granskningsdatum till de som fortfarande återstår.

**Hur används AI-assistenter för kodning eller drift i vår verktygskedja, och vem granskar deras utdata?**
AI-assistenter kan skriva kod, tester, konfiguration och körhandböcker och kan sammanfatta incidenter. Fråga vem som äger varje användning, vad som granskas av en person och vad som skulle fånga ett fel. Fördjupa genom att välja en användning att granska den här månaden.

## I praktiken: ett exempel på tjänstehantering

En regional banks digitala team för privatkunder bygger en mobilapp, och en separat driftgrupp kör produktionen. Releaser sker var sjätte vecka, med tre dagars frysning. Utvecklare säger att driften blockerar förändring; driften säger att utvecklare släpper otestad kod och lämnar dem att hantera det. Incidentgranskningar slutar i oenighet om vems fel det var.

En ny teknikchef föreslår ett experiment med en tjänst, kortkontrollfunktionen. En utvecklare och en driftingenjör går med i samma team. De kommer överens om ett gemensamt mål: kunder kan spärra och häva spärren på ett kort på under fem sekunder, och ändringar kan släppas säkert när som helst. De lägger konfigurationen i versionshantering, lägger till automatiserade tester och säkerhetsskanningar i en pipeline och kommer överens om att hela teamet tar jourlistan, där driftingenjörerna utbildar utvecklarna och en gräns på en vecka av sex per person gäller. Bankens riskteam insisterar på att behålla uppdelningen av arbetsuppgifter; teamet möter detta genom att kräva kamratgranskning av varje ändring och genom att registrera pipelinens belägg.

Efter sex månader släpper kortkontrollfunktionen varje vecka med få incidenter, och riskteamet accepterar pipelineregistret i stället för ett ändringsrådsmöte för den här tjänsten. Incidentgranskningarna är skuldfria, och två upprepade orsaker åtgärdas. De andra tjänsterna förblir på den gamla modellen.

Det som förändras: det här teamet väntar inte längre på sexveckorscykeln och har en gemensam bild av produktionen. Det som förblir svårt: resten av organisationen är skeptisk, eftersom teamet har fler ingenjörer per tjänst än andra; jourbördan har fått två utvecklare att överväga att sluta; och den delade pipelinen beror på ett centralt plattformsteam som har en lång backlogg. Chefen tar bemannings- och plattformsfrågorna till ledningsgruppen i stället för att presentera resultatet som en mall.

## Fyra perspektiv

### Produkt- och leveransteam

Äg tjänsten från början till slut: design, bygge, release och drift. Lär dig hur driften fungerar, dela jour rättvist och gör observerbarhet och körhandböcker till en del av er definition av klart.

### Tjänste- och driftsteam

Dela vad ni vet om fel och återhämtning, hjälp till att bygga pipelinen och övervakningen och rör er mot att konstruera ert eget arbete. Behåll de kontroller som spelar roll och visa hur automatisering möter dem.

### Ledning och styrning

Sätt gemensamma mål för utveckling och drift, finansiera plattformen och utbildningen och bevaka arbetsbörda och jourgränser. Rangordna inte team efter leveranssiffror. Be om belägg för att kontroller fungerar.

### Kunder och användare

Du bör se snabbare rättningar och mindre, säkrare ändringar. Tala om för teamen vad som betyder mest och ge återkoppling på ändringar som stör dig.

## Agilitet, AI, automatisering och analys

### Agilitet

DevOps utvidgar den agila omsorgen om fungerande programvara bortom releasen, in i att driva och förbättra tjänsten, med intressenter involverade och kontinuerlig återkoppling. Se upp: behandla det inte som ett verktygsköp eller ett nytt teamnamn; kulturen är förändringen.

### AI

AI-assistenter kan hjälpa till att skriva kod, tester och infrastrukturdefinitioner, sammanfatta loggar och incidenter och skriva utkast till körhandböcker, med en ägare och mänsklig granskning av allt som når produktion. Se upp: en assistent kan införa subtila fel eller osäkra mönster; tillämpa samma pipelinekontroller som för mänskliga ändringar och följ AI-stödda ändringar som fallerar. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Automatisera vägen till produktion, miljöskapande, testning och rutinmässig drift, med loggar och återställning. Se upp: automatisering koncentrerar makt i pipelinen, så kontrollera åtkomsten till den och granska ändringar av pipelinen lika noggrant som ändringar av tjänsten.

### Analys

Titta på driftsättningsfrekvens, ledtid för ändringar, andel misslyckade ändringar och tid för att återställa, tillsammans med tillförlitlighets- och kundmått. Se upp: leveransmåtten är lätta att manipulera, och att jämföra team bortser från sammanhang; använd dem för att hitta var man ska förbättra. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Ett DevOps-team som blir ett nytt silo.** En grupp tar namnet och överlämningen finns kvar. Sprid färdigheter och ansvar över team.
- **Verktyg utan kultur.** Pipelinen byggs och skuldbeläggandet fortsätter. Arbeta med gemensamma mål och granskningspraktiker.
- **Permanenta jourhjältedåd.** Utvecklare går in i väggen. Sätt gränser, dela belastningen och åtgärda orsakerna till larmen.
- **En påbjuden plattform som ingen vill ha.** Team går förbi den. Behandla team som kunder och mät användning av fri vilja.
- **Att släppa kontroller utan att ersätta dem.** Risken ökar och revisorer invänder. Möt kontrollens syfte med automatisering och register.
- **Leveranssiffror som mål.** Team manipulerar dem. Använd mått för lärande.
- **Att ignorera säkerhet till slutet.** Fynd kommer sent och blockerar releaser. Flytta kontroller åt vänster.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Kultur | Separata mål för utveckling och drift | Gemensamma mål i ett team | Gemensamma mål och ansvar brett antagna | Kulturpraktiker granskas med belägg | Delas över team, leverantörer och partner |
| Pipeline | Manuella releaser | Automatiserat bygge och test | Automatiserad väg till produktion för de flesta tjänster | Pipelinen ägs och förbättras som en produkt | Pipelines styrs och delas i hela organisationen |
| Drift | Separat jour | Delad jour i ett team | Delad jour med gränser och stöd | Jourbelastning och orsaker mäts | Drift konstrueras och automatiseras över tjänster |
| Lärande | Skuldbeläggning | Enstaka granskningar | Skuldfria granskningar med följda åtgärder | Lärande mäts och delas | Lärande delas över team och med leverantörer |

## Checklista

- [ ] Utvecklare och drift delar mål för tillförlitlighet och säker förändring.
- [ ] Det team som bygger en tjänst deltar i att driva den, inom rimliga jourgränser.
- [ ] Allt som ändrar tjänsten finns i versionshantering och går genom pipelinen.
- [ ] Säkerhets- och policykontroller körs tidigt i pipelinen.
- [ ] Utvecklare kan se produktionsövervakningen.
- [ ] Vi håller skuldfria granskningar och följer åtgärderna.
- [ ] Kontroller som spelar roll behålls och möts genom automatisering och register.
- [ ] AI-stöd i verktygskedjan har en ägare och mänsklig granskning.

## AI-prompter

**Hitta överlämningar att ta bort.**

```text
Here is a description of how a change goes from "code complete" to "running in production" in our organization: [paste steps and who does each].
List each handover, what information passes across it, and what might be lost. For each, give two questions to ask the people on either side. Do not propose solutions.
List what you are unsure of.
```

**Sammanfatta en incident för en skuldfri granskning.**

```text
Below is the timeline and notes from an incident: [paste timeline with names removed].
Draft a neutral summary under these headings: what happened, how it was detected, what was done, what helped, what slowed us down, and questions for the review. Do not assign blame or state causes not in the notes.
List what you are unsure of.
```

**Skriv ett utkast till en plattformskundintervju.**

```text
We run an internal platform for [purpose]. Our users are [teams and roles].
Write ten open interview questions to learn what helps and hinders them, avoiding questions that suggest an answer. Add three things to listen for.
List what you are unsure of.
```

## AI-färdigheter

- [postmortem](../../../../skills/postmortem/SKILL.md): använd för att genomföra en skuldfri granskning med följda åtgärder.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): använd för att flytta kontroller tidigare i pipelinen.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): använd för att utforma ett hållbart jourupplägg.
- [runbook](../../../../skills/runbook/SKILL.md): använd för att göra driftkunskap till korta, aktuella körhandböcker.

## Viktiga källor

- Gene Kim, Jez Humble, Patrick Debois och John Willis, *The DevOps Handbook*: principerna och praktikerna, med fallstudier.
- Gene Kim, Kevin Behr och George Spafford, *The Phoenix Project*: en roman som introducerade idéerna för många läsare.
- DORA (dora.dev): forskning om leverans- och tillförlitlighetsprestation.
- Wikipedia, "DevOps": en översikt av historia och praktiker.

## Referenser

1. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
2. Phoenix Project — Wikipedia — https://en.wikipedia.org/wiki/Phoenix_Project
3. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Platform engineering — Wikipedia — https://en.wikipedia.org/wiki/Platform_engineering
7. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
8. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. DORA — DevOps Research and Assessment — https://dora.dev
