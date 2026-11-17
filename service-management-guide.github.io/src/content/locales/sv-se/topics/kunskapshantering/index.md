# Kunskapshantering

**Kunskapshantering gör det människor lär sig när de driver tjänster tillgängligt för nästa person som behöver det; de angreppssätt som fungerar fångar kunskap som en biprodukt av att lösa problem, håller den nära arbetet, granskar den när den används och behandlar AI-sökning och AI-utkast som hjälpare ovanpå en bas som människor underhåller.**

## Varför det här är viktigt

Varje tjänsteteam bär på kunskap som inte är nedskriven någonstans: varför en inställning valdes, hur man startar om en ömtålig komponent, vad en viss kund behöver. När en person slutar, går på semester eller helt enkelt glömmer, försvinner kunskapen med hen, och teamet upptäcker sitt beroende vid sämsta tänkbara tidpunkt: under en incident på natten.

De flesta organisationer har försökt åtgärda detta med dokumentationskampanjer. Personal får veta att de ska skriva ned allt. En kunskapsbas fylls med artiklar som ingen läser eller litar på, eftersom de är föråldrade, långa eller svåra att hitta. Efter några månader ebbar ansträngningen ut, och människor återgår till att fråga kolleger.

Bättre angreppssätt behandlar kunskap som en del av arbetet, inte en separat uppgift. Fångsten sker medan ett problem löses, i några rader, av den som löste det. Artiklar som hjälper används och förbättras; artiklar som fallerar åtgärdas eller raderas. Kunskapsbasen finns i de verktyg människor redan använder: servicedesken, incidentkanalen, kodförrådet. Det här ämnet förklarar de idéerna, inklusive metoden Knowledge-Centered Service (KCS), och den roll AI nu spelar i sökning och utkast. Det hänger ihop med servicedesken (ämne 3.1 — Servicedesk), problemhantering (ämne 3.3 — Problemhantering) och AI-färdigheter (ämne 5.7 — AI-färdigheter och prompter).

## Grundbegrepp

**Data, information, kunskap.** Data är fakta; information är data i sitt sammanhang; kunskap är information som en person kan använda för att agera. En felkod är data, en artikel som förklarar vad den betyder är information, och att veta vilken av tre möjliga orsaker som är sannolik klockan tre på natten är kunskap. En kunskapsbas kan rymma information och hänvisningar; den kan inte rymma all kunskap. Wikipedia-artikeln om kunskapshantering beskriver fältet.

**Explicit och tyst kunskap.** Explicit kunskap kan skrivas ned: förfaranden, checklistor, diagram. Tyst kunskap lever i praktik och omdöme och är svår att formulera. Wikipedia beskriver tyst kunskap, en term förknippad med Michael Polanyi. Båda spelar roll. Skrivande hjälper med det explicita; samtal, pararbete och skuggning hjälper med det tysta.

**Kunskapsbas.** En samling artiklar, guider och svar, sökbara för användare och personal. Wikipedia beskriver kunskapsbaser och wikier. Den kan vara intern, för personal, eller extern, för kunder. Kvaliteten beror mer på underhåll än på verktyget.

**Körhandböcker.** Stegvisa instruktioner för att hantera en känd situation, till exempel att starta om en tjänst eller svara på ett vanligt larm. Wikipedia-artikeln om körhandböcker beskriver dem som sammanställningar av förfaranden för systemdrift. En bra körhandbok är kort, testad och länkad till det larm som utlöser den. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

**Knowledge-Centered Service (KCS).** En metod publicerad av Consortium for Service Innovation. Dess huvudidéer är: fånga kunskap medan du löser problem, i arbetsflödet; återanvänd och förbättra artiklar när du använder dem; gör det tryggt och normalt för alla att bidra; och låt kunskapsbasen utvecklas efter efterfrågan snarare än efter en plan i förväg. Dess beskrivning inkluderar praktiker som "lösningsloopen" och "utvecklingsloopen". Kontrollera konsortiets aktuella vägledning för detaljer.

**Fånga i arbetsflödet.** Den bästa tiden att skriva en artikel är när du just löst problemet. En kort anteckning, med symptom, orsak och åtgärd, i samma verktyg som ärendet, tar minuter. Att skriva den senare, ur minnet, tar mer tid och hoppas ofta över.

**Återanvändning som signal.** När en artikel används för att lösa ett problem, länka den till ärendet. Att räkna länkar visar vilka artiklar som hjälper och vilka som aldrig används. Om någon använder en artikel och den fallerar bör hen åtgärda eller flagga den på en gång.

**Artikelkvalitet.** En bra artikel har en tydlig titel med de ord användare använder, ett kort påstående om symptomet eller frågan, orsaken där den är känd, stegen, hur man kontrollerar att det fungerade och vem man ska fråga om det inte gjorde det. Den är kort och hålls i takt med systemet.

**Dokumentation som en del av kodförrådet.** För tekniska team håller dokumentation intill koden, i ren text som Markdown, och granskning av ändringar tillsammans med kod den i linje. Wikipedia-artikeln om Markdown beskriver formatet. Pull requests som ändrar beteende ändrar också dokumentationen.

**Beslutsregister.** Korta anteckningar som registrerar varför ett betydande beslut fattades, vilka alternativ som övervägdes och vad som var känt vid tillfället. De hjälper nya teammedlemmar och framtida granskningar att förstå resonemanget.

**Bussfaktor.** Antalet personer som måste försvinna innan ett projekt stannar av brist på kunskap. Wikipedia beskriver bussfaktorn, även kallad lotterifaktorn. En bussfaktor på ett är en risk. Att sprida kunskap genom pararbete, rotation och delning höjer den.

**Kunskapsöverföring.** Att flytta kunskap från en person till en annan, genom överlämningar, pararbete, utbildning och skuggning. Wikipedia beskriver kunskapsöverföring. Avsätt tid för det, särskilt när någon är på väg att sluta.

**Sökbarhet.** Även bra innehåll är värdelöst om människor inte kan hitta det. Titlar, taggar, sökjustering och länkar från larm och ärenden spelar roll. Wikipedia-artiklarna om sökmotorer och informationsöverflöd beskriver besläktade problem.

**AI och återvinning.** AI-assistenter kan söka i en kunskapsbas, sammanfatta artiklar och skriva utkast till nya. Ett vanligt mönster, återvinningsförstärkt generering (retrieval-augmented generation), hämtar relevanta stycken och ber en modell svara med enbart dessa. Wikipedia beskriver idén. Assistentens svar är bara så bra som basen den läser, och den kan ändå fela. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

**Styrning.** Besluta vem som äger kunskapsbasen, hur artiklar granskas, hur känsligt innehåll kontrolleras och när gammalt innehåll arkiveras. Håll reglerna lätta.

**Hur linserna passar in.** Kunskapshantering är ständig förbättring på nivån för enskilda artiklar. AI hjälper användare att hitta, sammanfatta och skriva utkast, under granskning. Automatisering länkar larm till körhandböcker och ärenden till artiklar. Analys visar vilka artiklar som används, vilka som fallerar och vilka luckor som söks efter.

## Bra arbetssätt

1. **Fånga medan du löser.** Skriv en kort artikel eller uppdatera en som en del av att stänga ett ärende. Gör det till ett normalt steg, inte extra arbete.
2. **Skriv för läsaren klockan tre på natten.** Använd de ord människor söker efter, korta steg och en kontroll av att åtgärden fungerade. Lägg det mest användbara först.
3. **Länka artiklar till ärenden och larm.** När ett larm utlöses, länka till körhandboken. När en artikel löser ett ärende, länka dem. Länkarna visar vad som är användbart.
4. **Åtgärda eller flagga vid användning.** Om en artikel är fel eller oklar när du använder den, rätta den eller markera den för granskning direkt. Gör det lätt att göra.
5. **Gör bidrag tryggt.** Låt alla redigera, med lätt granskning av känsligt eller högpåverkande innehåll. Tacka bidragsgivare och straffa inte misstag.
6. **Beskär regelbundet.** Gå igenom artiklar som inte använts på länge och arkivera dem. En mindre, betrodd bas är bättre än en stor, tvivelaktig.
7. **Håll teknisk dokumentation med koden.** Granska den med ändringar och generera det ni kan, som API-referenser, ur källan.
8. **Registrera viktiga beslut.** Skriv korta beslutsanteckningar med sammanhang, alternativ och skäl. Länka dem till koden eller designen de gäller.
9. **Sprid kunskap medvetet.** Använd pararbete, rotation, korta föredrag och skuggning för att flytta tyst kunskap. Kontrollera bussfaktorn för varje kritisk tjänst.
10. **Behandla AI-svar som utkast.** Låt AI söka och föreslå, med källor visade, och låt en person bekräfta artiklar innan de blir officiella. Följ dåliga svar och åtgärda källorna.

## Frågor att diskutera i teamet

**Vad var det senaste vi var tvungna att be någon förklara som borde ha varit nedskrivet?**
Börja med ett verkligt fall. Räkna med "hur startar vi om X" eller "varför är Y inställt så här". Fråga vad som hindrade att det skrevs ned. Fördjupa genom att skriva det nu, tillsammans.

**Vilka artiklar litar vi på, och vilka undviker vi?**
Förtroende varierar efter team och ämne. Fråga varför. Räkna med "föråldrad" och "för lång". Fördjupa genom att välja tre artiklar vi inte litar på att åtgärda eller radera.

**Hur många av oss vet hur man återställer vår mest kritiska tjänst, och vad händer om de är borta?**
Det här prövar bussfaktorn. Räkna ärligt. Räkna med ett eller två namn. Fördjupa genom att planera ett pararbetspass eller en repetition som sprider kunskapen.

**Var skriver vi ned saker i dag, och kan vi hitta dem?**
Lista platserna: chatt, wiki, ärenden, kodförråd, personliga anteckningar. Försök hitta ett bestämt svar tillsammans. Fördjupa genom att komma överens om ett hem för varje sorts kunskap.

**Hur lätt är det för vem som helst i teamet att rätta en artikel de finner felaktig?**
Hinder omfattar behörigheter, granskningsfördröjningar och rädsla för kritik. Fråga vad som skulle göra det till en trettiosekundersuppgift. Fördjupa genom att ta bort ett hinder.

**Hur använder vi AI för att hitta eller skriva kunskap, och hur kontrollerar vi vad den säger?**
Fråga vem som använder AI-verktyg för kunskapsarbete och vad de litar på. Räkna med okritisk användning på vissa ställen. Fördjupa genom att komma överens om att svar hänvisar till artiklar och att ta stickprov av svar mot dem.

## I praktiken: ett exempel på tjänstehantering

En nationell meteorologisk tjänsts infrastrukturteam på åtta driver dataflöden för prognoser. Två seniora ingenjörer har det mesta av kunskapen om det äldsta flödet, som bearbetar satellitdata. När en av dem tar tre veckors ledighet tar ett fel i flödet två dagar att åtgärda eftersom den jourhavande junioringenjören inte kan hitta omstartsförfarandet, som finns i en e-posttråd från sex år sedan.

Teamledaren beslutar att använda en lätt version av KCS. Den som löser ett problem skriver några rader i ärendets lösningsfält: symptom, orsak, åtgärd, kontroll. Ett veckovist tiominutersmöte går igenom de nya anteckningarna och befordrar användbara till körhandböcker i teamets kodförråd. Varje larm länkar till sin körhandbok. De två seniora ingenjörerna går med på att arbeta i par med juniorer enligt en lista och att spela in två korta videor där de går igenom flödet.

Efter tre månader finns det 40 körhandböcker, och teamet kan i ärendeverktyget se vilka som är länkade till lösta incidenter. Vid nästa fel hittar den jourhavande juniorn körhandboken via larmet, följer den och återställer flödet på 25 minuter. En sökassistent som prövas på kodförrådet besvarar en fråga fel och citerar ett avsnitt i en körhandbok som ersatts av en senare redigering. Ledaren lägger till en regel att ersatta avsnitt tas bort, inte överstrykes.

Det som förändras: flödet beror inte längre på två personer, och juniorerna känner sig tryggare. Det som förblir svårt: de seniora ingenjörerna tycker fortfarande att skrivande tar tid de inte har; vissa körhandböcker testas bara genom läsning; och det äldsta flödet har komponenter som ingen förstår fullt ut, vilket inget dokument kan åtgärda. Ledaren planerar en repetition för det äldsta flödet och schemalägger en designgenomgång av de komponenter ingen förstår.

## Fyra perspektiv

### Produkt- och leveransteam

Håll dokumentationen med koden och granska den med ändringar. Skriv beslutsanteckningar och körhandböcker som en del av arbetet och dela vad ni lär er med driften.

### Tjänste- och driftsteam

Fånga lösningar medan ni arbetar, rätta artiklar när ni använder dem och länka larm till körhandböcker. Dela tyst kunskap genom pararbete. Tala om för ägare om luckor ni hittar.

### Ledning och styrning

Gör skrivande och läsande av kunskap till en normal del av jobbet, inte en bisak. Finansiera tid för pararbete och repetitioner. Be om bussfaktorn för kritiska tjänster. Belöna inte antalet artiklar.

### Kunder och användare

Bra artiklar låter dig lösa problem själv och få svar snabbare. Tala om för leverantören när en artikel är förvirrande eller fel och vad du försökte göra.

## Agilitet, AI, automatisering och analys

### Agilitet

Låt kunskapsbasen utvecklas i små steg, driven av användning, med användare och personal som ger återkoppling. Gå igenom luckor vid ett kort, regelbundet möte. Se upp: undvik stora dokumentationsprojekt; de ger innehåll som är föråldrat vid lansering.

### AI

AI kan söka i basen, sammanfatta artiklar, besvara frågor med källhänvisningar och skriva utkast till artiklar utifrån ärenden och chattar, med en person som godkänner allt som blir officiellt. Utse en ägare. Se upp: en assistent kan svara tvärsäkert utifrån föråldrat eller felaktigt innehåll; visa källor och följ rättelser. Se ämne 5.4 — Generativ AI för incidenter, kunskap och ändringar.

### Automatisering

Länka larm till körhandböcker, föreslå artiklar vid nya ärenden, flagga inaktuellt innehåll och skapa utkast till artiklar från stängda ärenden, med mänsklig redigering. Se upp: automatiska förslag kan fylla basen med utkast av låg kvalitet; begränsa vad som publiceras utan granskning. Se ämne 6.6 — Runbook-automatisering och automatisk åtgärd.

### Analys

Följ artikelanvändning, länkar till lösta ärenden, sökningar utan resultat och tid sedan senaste granskning. Se upp: antal skapade artiklar belönar volym, och användningsantal belönar populära ämnen framför kritiska sällsynta; kombinera med återkoppling och stickprov. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Dokumentationskampanjer.** Ett skrivutbrott följs av förfall. Fånga kunskap som en del av arbetet.
- **Långa artiklar.** Ingen läser dem. Skriv korta, uppgiftsfokuserade.
- **Inaktuellt innehåll.** Förtroendet urholkas. Åtgärda eller flagga vid användning och beskär.
- **Kunskap bara i chatt.** Den går inte att hitta. Flytta användbara svar till basen.
- **Bussfaktor ett.** En persons frånvaro stoppar arbetet. Sprid kunskap medvetet.
- **AI-svar som ingen kontrollerar.** Felaktiga råd sprids. Visa källor och ta stickprov av svar.
- **Skrivande som straff.** Människor undviker det. Gör det normalt och uppmärksamma det.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Fångst | I huvuden och chatt | Några artiklar efter incidenter | Fångst är ett normalt steg i arbetsflödet | Fångstkvalitet stickprovskontrolleras och förbättras | Fångst automatiserad med mänsklig granskning |
| Sökbarhet | Fråga en kollega | En sökbar bas | Larm och ärenden länkar till artiklar | Sökluckor driver innehåll | Återvinning och assistenter integrerade över verktyg |
| Kvalitet | Ogranskat | Enstaka städning | Åtgärda-eller-flagga vid användning, regelbunden beskärning | Kvalitet mäts via användning och resultat | Kvalitet förbättras kontinuerligt i hela organisationen |
| Spridning | En expert | Visst pararbete | Bussfaktor kontrolleras för kritiska tjänster | Repetitioner och rotation planeras | Kunskap delas över team och partner |

## Checklista

- [ ] Människor fångar lösningar som en del av att stänga ärenden.
- [ ] Larm länkar till körhandböcker.
- [ ] Artiklar är korta och skrivna med de ord användare söker efter.
- [ ] Vem som helst kan rätta en artikel de finner felaktig, med lätt granskning.
- [ ] Vi beskär oanvända eller inaktuella artiklar regelbundet.
- [ ] Teknisk dokumentation finns med koden och granskas med ändringar.
- [ ] Vi känner bussfaktorn för varje kritisk tjänst.
- [ ] AI-svar hänvisar till källor och stickprovskontrolleras för riktighet.

## AI-prompter

**Skriv ett utkast till en artikel utifrån ett löst ärende.**

```text
Here is a resolved ticket with notes, personal data removed: [paste].
Draft a short knowledge article with: a title in the words a user would search, the symptom, the cause (only if stated), the steps, how to check it worked, and who to ask if it did not. Mark any gap with [missing] and do not fill it.
List what you are unsure of.
```

**Granska en artikel för en läsare på natten.**

```text
Here is a runbook: [paste].
List steps that are ambiguous, steps that assume knowledge not stated, and anything that could cause harm if followed literally. Do not rewrite the runbook.
List what you are unsure of.
```

**Hitta luckor utifrån sökningar.**

```text
Here are search terms that returned no result or were followed by a ticket: [paste list]. Here are our article titles: [paste list].
Group the search terms into themes, and for each theme say whether an existing article title looks related or whether a new article is needed. Do not draft articles.
List what you are unsure of.
```

## AI-färdigheter

- [runbook](../../../../skills/runbook/SKILL.md): använd för att skriva och testa körhandböcker.
- [decision-records](../../../../skills/decision-records/SKILL.md): använd för att registrera varför beslut fattades.
- [architecture-decision-record](../../../../skills/architecture-decision-record/SKILL.md): använd för designbeslut som andra kommer att behöva förstå.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): använd för att utforma prompter som läser från en kunskapsbas och hänvisar till källor.

## Viktiga källor

- Consortium for Service Innovation, Knowledge-Centered Service (KCS): den främsta praktiska metoden för att fånga kunskap i supportarbete.
- Ikujiro Nonaka och Hirotaka Takeuchi, *The Knowledge-Creating Company* (1995): om tyst och explicit kunskap.
- Wikipedia, "Knowledge management" och "Tacit knowledge": neutrala översikter.
- Wikipedia, "Runbook": bakgrund till driftförfaranden.

## Referenser

1. Knowledge management — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_management
2. Knowledge base — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_base
3. Tacit knowledge — Wikipedia — https://en.wikipedia.org/wiki/Tacit_knowledge
4. Wiki — Wikipedia — https://en.wikipedia.org/wiki/Wiki
5. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
8. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
9. Knowledge transfer — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_transfer
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
