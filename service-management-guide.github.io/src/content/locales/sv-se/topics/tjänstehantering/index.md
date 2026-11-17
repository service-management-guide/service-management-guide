# Tjänstehantering

**Tjänstehantering är disciplinen att utforma, driva och förbättra tjänster så att kunder kan uppnå de resultat de vill ha utan att bära kostnaden och risken för att åstadkomma dem; agilt arbetssätt, AI, automatisering och analys är fyra sätt att göra det arbetet bättre, inte ersättare för det.**

## Varför det här är viktigt

De flesta organisationer är både kunder till tjänster och leverantörer av tjänster. Ett sjukhus förlitar sig på ett elektroniskt journalsystem som drivs av den egna it-avdelningen, och den avdelningen förlitar sig på en molnleverantör. Varje länk i kedjan lovar något till nästa länk. När ett löfte brister vandrar felet längs kedjan och landar hos en person som aldrig såg orsaken: en sjuksköterska som inte kan öppna en journal, en kund som inte kan betala.

Tjänstehantering ger de människor som ger sådana löften ett gemensamt sätt att tänka och tala om dem. Den ställer en enkel fråga: vad behöver kunden uppnå, och vad måste vi göra, gång på gång och pålitligt, för att kunden ska kunna det? Svaret behandlas som en pågående praktik snarare än ett projekt med slutdatum.

För teknikteam handlar förskjutningen om att gå från "vi driver servrar och applikationer" till "vi levererar ett resultat". Servrarna spelar fortfarande roll. Men måttet på framgång flyttas från om maskinen är igång till om människan fick sitt arbete gjort. Den förskjutningen förklarar varför ett team kan nå alla tillgänglighetsmål och ändå få höra att tjänsten är dålig.

Den här guiden behandlar tjänstehantering genom fyra linser: agilitet, AI, automatisering och analys. Varje lins förändrar hur tjänster drivs. Ingen av dem ändrar frågan ovan. Läs det här ämnet först; senare ämnen bygger på dess ordförråd.

## Grundbegrepp

**Tjänst.** ITIL 4 definierar en tjänst som ett sätt att möjliggöra värdeskapande i samverkan genom att underlätta resultat som kunder vill uppnå, utan att kunden själv behöver hantera specifika kostnader och risker. Två delar av definitionen väger tungt. "Samskapande" betyder att värde inte finns inne hos leverantören: det uppstår när kunden använder tjänsten. Och "utan att behöva hantera specifika kostnader och risker" säger vad leverantören tar på sig, vilket är själva skälet till att kunder betalar för eller finansierar tjänsten.

**Värde, resultat, leveranser.** En leverans är det en tjänst producerar, till exempel ett löst ärende eller en driftsatt release. Ett resultat är den förändring kunden ville ha, till exempel en patient som fått tid i rätt tid. Värde är kundens bedömning av vad resultatet var värt i förhållande till kostnad och risk. Ett team kan producera många leveranser och inget resultat, och en tjänstegranskning som bara räknar leveranser upptäcker det inte.

**Leverantör, konsument och rollerna inom "konsument".** Leverantören utformar och driver tjänsten. Konsumenten är en bredare grupp: kunden definierar kraven och ansvarar för resultatet, användaren använder tjänsten och sponsorn godkänner finansieringen. En person kan ha flera roller, och en tjänst misslyckas när leverantören bara talar med en av dem.

**Tjänsterelation.** Leverantörer och konsumenter binds samman av en relation som består av överenskommelser, förväntningar och en återkopplingsloop. Ett servicenivåavtal (SLA), som behandlas i ämne 3.7 — Hantering av servicenivåer, är en del av den. Samtalet som håller SLA:t ärligt är den större delen.

**Praktiker, inte enbart processer.** Äldre beskrivningar av it-tjänstehantering (ITSM) betonar processer: fasta sekvenser av steg, som en incidentprocess. Aktuell vägledning, inklusive ITIL 4, talar om praktiker: uppsättningar av organisatoriska resurser som utformats för att utföra arbete mot ett mål. En praktik omfattar människor, information, verktyg och partner såväl som stegen. Ämne 1.2 — ITIL beskriver hur ramverket kom fram till den formuleringen, och ämne 1.4 — Tjänstevärdesystemet visar hur praktiker hänger ihop.

**Från teknikcentrerad till tjänstecentrerad.** Ett teknikcentrerat team organiserar sig kring komponenter: nätverksteamet, databasteamet, applikationsteamet. Ett tjänstecentrerat team organiserar sig kring det kunden upplever, vilket går över dessa komponenter. De flesta organisationer befinner sig någonstans mellan de två, och deras incidentgranskningar visar var: om varje granskning slutar med "det var det andra teamets komponent" är organisationen fortfarande teknikcentrerad.

**Tjänstehantering utanför it.** Samma idéer gäller för personalfunktionen, fastigheter och lokaler, juridik och ekonomi, vilket är skälet till att många organisationer utvidgar en servicedesk och en tjänstekatalog till dessa funktioner. Se ämne 1.9 — Tjänstehantering för hela verksamheten.

**De fyra linserna.** *Agilitet* betyder kontinuerligt intressentdeltagande, ständig förbättring och kontinuerlig leverans av förändringar som fungerar. *AI* betyder system som lär sig mönster och genererar eller rekommenderar, vilka behöver en ägare och mänsklig tillsyn. *Automatisering* betyder arbete som utförs av programvara utan att någon rör vid varje steg. *Analys* betyder att använda data för att besvara frågor om tjänsten. Del 2 behandlar agilitet, del 5 AI, del 6 automatisering och del 7 analys.

## Bra arbetssätt

1. **Utgå från kundens resultat.** Skriv en mening för varje tjänst som börjar "Kunden kan…". Om teamet inte kan skriva den vet det ännu inte vad det levererar. Kontrollera meningen med en verklig kund, inte med en kollega som delar dina antaganden.
2. **Utse en ägare för varje tjänst.** En person ansvarar för tjänsten så som kunden upplever den, även när många team bidrar. Utan ägare väger ingen en åtgärd i ett team mot kostnaden för ett annat.
3. **Beskriv tjänster med kundens ord.** Byt "Exchange-kluster" mot "e-post och kalender". Tekniska vyer är användbara inom leverantören; den kundvända beskrivningen är den som ska synas i kataloger, rapporter och statussidor.
4. **Definiera tjänstens gräns.** Säg vad som ingår, vad som inte ingår och vad kunden själv måste göra. Oklara gränser skapar tvister vid sämsta tänkbara tidpunkt, under en incident.
5. **Se förbättring som en del av tjänsten.** Avsätt en synlig andel av kapaciteten för förbättringsarbete och gå regelbundet igenom en liten backlogg av förändringar tillsammans med intressenter. Om ditt team väljer att använda sprintar kan du ha en genomgång i varje; vanan är viktigare än takten.
6. **Använd linserna för att ställa frågor, inte för att köpa verktyg.** Fråga för varje förändring vilket agilt arbetssätt som skulle förkorta återkopplingen, var AI kunde hjälpa och vem som skulle ha tillsyn, vilken automatisering som skulle ta bort upprepat manuellt arbete och vilka data som skulle visa om det fungerade.
7. **Håll människor ansvariga för beslut.** Programvara kan rekommendera och agera inom gränser, men en namngiven person avgör vilka gränserna är och granskar vad som hände. Det gäller skript och AI-system lika mycket.
8. **Mät resultat och håll måtten ärliga.** Para varje leveransmått, till exempel stängda ärenden, med ett resultat- eller upplevelsemått, och säg hur vart och ett kan manipuleras. Följeboken *Service Management Metrics* ger definitioner.
9. **Skriv ned vad ni lovar.** Överenskommelser behöver inte vara långa. En kort sida som anger omfattning, tider, mål och kontakter förebygger fler tvister än ett långt avtal som ingen läser.
10. **Granska tjänsterelationen, inte bara tjänsten.** Träffa kunder enligt schema, lyssna på vad de kämpar med och berätta vad ni ändrat på grund av det. En relation utan återkoppling förtvinar.

## Frågor att diskutera i teamet

**Om en kund beskrev vår tjänst i en mening, vad skulle hen säga, och skulle vi hålla med?**
Det här testar om leverantör och konsument delar en bild av tjänsten. Räkna med svar som beskriver komponenter eller leverantörens ansträngning snarare än kundens resultat. Samla verkliga meningar från kunder om du kan. Fördjupa genom att fråga vilka ord i deras mening vi själva aldrig använder.

**Var visar våra rapporter grönt medan kunderna är missnöjda?**
Det här söker efter glappet mellan leveranser och resultat. Team nämner ofta tillgänglighets- eller ärendestängningsmål som uppnåddes under en dålig vecka. Lyssna efter vad rapporten utelämnar. Fördjupa genom att fråga vilket enskilt mått som skulle ha blivit rött.

**Vilka av våra tjänster saknar en enskild ansvarig ägare?**
Ägarglapp är vanliga vid teamgränser, till exempel gemensamma plattformar eller introduktion av nyanställda. Diskussionen kan avslöja en tjänst som alla tror att någon annan äger. Sikta på en namngiven person, inte en kommitté. Fördjupa genom att fråga vem som avgör när två team vill motsatta saker.

**Vad måste en kund göra själv som vi aldrig skrivit ned?**
Gränser är oftast luddiga på kundens sida: att förbereda data, godkänna beställningar, hålla kontaktuppgifter aktuella. Du kanske får höra att "alla vet det". Fråga en nyare teammedlem eller en kund. Fördjupa genom att fråga vilken oskriven skyldighet som orsakade vår senaste tvist.

**Vilken av de fyra linserna (agilitet, AI, automatisering, analys) skulle hjälpa vår tjänst mest i år, och vad skulle den kosta oss?**
Frågan tvingar fram ett val och benämner kostnader som tillsyn, underhåll eller arbete med datakvalitet. Team lockas ofta av den nyaste linsen. Be om belägg för att problemet finns. Fördjupa genom att fråga vad vi skulle sluta göra för att skapa utrymme.

**Vad skulle vi göra annorlunda om de vi tjänar kunde se allt vi gör?**
Det här blottlägger dolt arbete, som manuella omvägar, och prövar om teamet är stolt över hur det arbetar. Svaren varierar från "ingenting" till en lång lista med pinsamheter. Behandla listan som förbättringskandidater, inte som skuldbeläggning. Fördjupa genom att välja en punkt att göra synlig den här månaden.

## I praktiken: ett exempel på tjänstehantering

Ett regionalt nätverk av folkbibliotek driver en liten it-avdelning som stöder 40 filialer. Personalen beskriver sitt arbete som att "hålla biblioteksystemen igång". Klagomål kommer i omgångar, mest från filialchefer, och avdelningens månadsrapport är en sida med tillgänglighetssiffror som alltid ligger över målet.

Tjänstechefen genomför en kort övning. Hon ber tre filialchefer avsluta meningen "It-tjänsten hjälper mig att…". Svaren handlar om att öppna filialen i tid, hjälpa besökare att hitta och låna medier och hålla barnens sagostund. Ingen nämner drifttid. Hon upptäcker att personalen den dag varje filial öppnar loggar in i fyra system, och att en långsam inloggning klockan 8.55 kostar mer än ett kort avbrott vid midnatt.

Teamet byter namn på sina tjänster med kundens ord, till exempel "Öppna och stänga en filial" och "Utlåning och återlämning". Det utser en ägare för varje, rapporterar den tid en filial behövde för att börja låna ut efter öppning och behåller tillgänglighetssiffrorna för eget bruk. Det lägger också till en liten förbättringsbacklogg som två filialchefer går igenom varje månad. Två av de första punkterna är en ändring av inloggningen och en tryckt guide för ett återkommande problem.

Det som förändras: samtalen med filialerna går från klagomål på avbrott till konkreta önskemål. Det som förblir svårt: den nya siffran för öppningstid förutsätter att personalen registrerar den, och vissa filialer gör det inkonsekvent. Avdelningen saknar också en överenskommen ägare för bokbeställningssystemet, som delvis tillhör en leverantör och delvis ett inköpsteam. Det glappet är nästa ämne för diskussion.

## Fyra perspektiv

### Produkt- och leveransteam

Tänk på tjänsten du bygger som något människor kommer att använda i åratal. Fråga vem som ska driva den, hur du ska veta att den fungerar för kunderna och vad du ska lämna över utöver kod. Håll kundens resultat nära backloggen så att avvägningarna syns.

### Tjänste- och driftsteam

Ert dagliga arbete är tjänsten så som kunderna upplever den. Ha kundens mening i sikte när ni prioriterar, dokumentera vad ni lär er av incidenter och beställningar och berätta för dem som bygger och finansierar tjänsten vad ni ser.

### Ledning och styrning

Finansiera tjänster, inte bara projekt, och begär en ägare och ett resultat för varje. Var försiktig med rapporter som bara bygger på leveranser. Avsätt tid för att träffa kunder direkt några gånger om året.

### Kunder och användare

Du är en del av tjänsten, inte bara mottagare. Säg vilket resultat du behöver, tala om för leverantören vad som inte fungerar och förvänta dig att få höra vad som ändrades som följd. Be om tjänstens gräns skriftligt om du är osäker på vad som ingår.

## Agilitet, AI, automatisering och analys

### Agilitet

Tillämpa ständig förbättring på själva tjänsten: en liten backlogg av förändringar, granskad tillsammans med kunder och levererad i små delar. Se upp: använd inte agilt språkbruk för att göra om en tjänst till ett projekt med slutdatum; tjänster fortsätter, och deras förbättring blir aldrig klar.

### AI

Använd AI där den sparar tid för kunniga personer i rutinmässigt läsande och skrivande, till exempel att sammanfatta en lång ärendetråd, med en namngiven ägare och en person som granskar resultatet. Se upp: AI gör rimligt klingande fel, så bestäm i förväg hur ett felaktigt svar skulle upptäckas och rättas. Ämne 5.1 — AI i tjänstehantering kartlägger området.

### Automatisering

Automatisera upprepade, väl förstådda steg, som att skapa konton eller starta om en tjänst som är känd för att falla, och för logg över vad automatiseringen gjorde och ha ett sätt att backa. Se upp: att automatisera en rörig process gör röran snabbare, så förenkla först. Se ämne 6.1 — Automatiseringsstrategi.

### Analys

Samla in data som besvarar en uttalad fråga, till exempel vilka beställningar som tar längst tid och varför. Se upp: data från ärenden speglar vad människor valde att registrera, inte allt som hände, och varje mått som blir ett mål inbjuder till manipulation. Definitioner och skyddsräcken finns i följeboken *Service Management Metrics*, och ämne 7.1 — Analys för tjänstehantering behandlar metoderna.

## Vanliga felmönster

- **Att räkna ansträngning i stället för resultat.** Rapporter listar ärenden och timmar men inte vad kunderna uppnådde. Lägg till ett resultat- eller upplevelsemått för varje tjänst.
- **Tjänster utan ägare.** Alla bidrar och ingen bestämmer. Utse en ansvarig person per tjänst och publicera namnet.
- **Tekniska namn i kundsamtal.** Kunder kan inte se vad som ingår. Beskriv tjänster med kundens ord och håll den tekniska kartan separat.
- **Att se ramverket som målet.** Teamet tar till sig varje ITIL-term och ändrar inget som kunderna märker. Välj en praktik, förbättra den med belägg och sluta när beläggen tar slut.
- **Verktyg först.** En plattform köps innan någon har beskrivit tjänsten. Skriv tjänstebeskrivningen och förbättringsmålet först och välj sedan verktyg.
- **Att lämna över omdömet till programvara utan tillsyn.** En automatisering eller ett AI-system agerar utan namngiven ägare. Utse en ägare, sätt gränser och granska vad den gjorde.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Tjänstedefinition | Tjänster beskrivs utifrån teknik | Huvudtjänster beskrivs utifrån resultat | Alla tjänster har resultatbaserade beskrivningar och gränser | Beskrivningar granskas med kunder i fast takt | Beskrivningar och gränser delas mellan leverantörer och partner |
| Ägarskap | Ägarskapet är oklart | Ägare för huvudtjänster | Varje tjänst har en namngiven ägare | Ägare granskar resultat och kostnader regelbundet | Ägare samordnar mellan leverantörer och interna team |
| Förbättring | Förbättring sker i kris | Det finns en lista med idéer | En granskad förbättringsbacklogg med avsatt kapacitet | Förbättringar kontrolleras mot belägg | Förbättring lär av kunder och data över tjänster |
| Användning av de fyra linserna | Används ad hoc | Prövas i ett team | Väljs medvetet med ägare och tillsyn | Effekter mäts och granskas | Används tillsammans under gemensam styrning |

## Checklista

- [ ] Varje tjänst har en kundresultatmening.
- [ ] Varje tjänst har en namngiven ägare.
- [ ] Kundvända beskrivningar använder kundens ord.
- [ ] Tjänstegränser, inklusive kundens skyldigheter, är nedskrivna.
- [ ] Det finns en granskad förbättringsbacklogg med avsatt tid.
- [ ] Varje leveransmått är paret med ett resultat- eller upplevelsemått.
- [ ] Varje automatisering och varje AI-system har en ägare och ett sätt att granska vad det gjorde.
- [ ] Vi träffar kunder enligt schema och berättar vad som ändrats.

## AI-prompter

**Gör om tekniska tjänstenamn till kundresultat.**

```text
Here is a list of our technical services: [paste list with one-line descriptions].
For each, propose one sentence beginning "The customer can…" in plain language, and name the kind of customer you are assuming. Do not invent facts about our business; where you cannot tell, write "unknown" and ask a question.
List what you are unsure of at the end.
```

**Hitta ägarglapp i en tjänstelista.**

```text
Below is our service list with any owners we have recorded: [paste list].
Produce a table: service, owner (only if given; otherwise "none recorded"), and one question to ask to find the real owner. Do not guess owners.
Ask clarifying questions first, mark assumptions, and list what you are unsure of.
```

**Förbered ett kundsamtal.**

```text
I will meet customers of the service [service name] next week. Customer roles present: [list roles].
Draft eight open questions about what outcome they need, what blocks them, and what they do for themselves. Avoid leading questions and technical jargon. Do not suggest answers.
Finish with three things I should listen for and what you are unsure of.
```

## AI-färdigheter

- [service-catalog](../../../../skills/service-catalog/SKILL.md): använd för att göra om tjänstebeskrivningar till en kundvänd katalog.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): använd för att identifiera kunder, användare och sponsorer och vad var och en behöver.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): använd för att köra mognadstabellen som en självskattning i teamet.

## Viktiga källor

- Wikipedia, "Service management": en kort översikt av disciplinen över branscher.
- Wikipedia, "IT service management": hur idéerna tillämpas på it, med de ramverk som beskriver dem.
- Wikipedia, "Service-dominant logic": marknadsföringsteorin bakom värdeskapande i samverkan, användbar när man förklarar varför värdet finns hos kunden.
- Wikipedia, "ITIL": det mest kända ramverket, inklusive tjänstedefinitionen som citerades ovan (jämför dess formulering med ägarens aktuella publikationer; se ämne 1.3 — ITIL 5).

## Referenser

1. Service management — Wikipedia — https://en.wikipedia.org/wiki/Service_management
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Service (economics) — Wikipedia — https://en.wikipedia.org/wiki/Service_(economics)
4. Service-dominant logic — Wikipedia — https://en.wikipedia.org/wiki/Service-dominant_logic
5. Value creation — Wikipedia — https://en.wikipedia.org/wiki/Value_creation
6. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
7. Service design — Wikipedia — https://en.wikipedia.org/wiki/Service_design
8. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
