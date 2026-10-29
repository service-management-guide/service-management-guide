# Hantering av servicenivåer

**Hantering av servicenivåer sätter tydliga, mätbara mål för tjänster tillsammans med dem som är beroende av dem, följer prestationen mot dessa mål och använder glappen för att förbättra; dess moderna former lägger till upplevelsenivåavtal och tekniska mål till det traditionella servicenivåavtalet.**

## Varför det här är viktigt

Leverantörer och kunder bär olika bilder av vad "god service" betyder. Leverantören tänker på drifttid och stängda ärenden. Kunden tänker på om de kunde slutföra sitt arbete. Utan en överenskommen definition kan båda vara uppriktiga och båda vara missnöjda: leverantören pekar på en rapport som visar att varje mål nåddes, och kunden pekar på en vecka av frustration.

Hantering av servicenivåer stänger det glappet. Den inleder ett samtal med kunden om vad de behöver, gör svaret till mål som kan mätas och rapporterar om dem på ett sätt som kunden kan kontrollera. Samtalet betyder mer än dokumentet. Ett servicenivåavtal (SLA) som skrivs en gång och arkiveras ger falsk trygghet; ett som granskas regelbundet, med verkliga data och en ärlig diskussion om vad som inte fungerar, bygger förtroende.

Modern praktik möter också kritik: mål satta på tekniska mått kan alla vara gröna medan användare är missnöjda. Som svar lägger organisationer till mått på upplevelse, som upplevelsenivåavtal (XLA), och tekniska team sätter servicenivåmål (SLO) baserade på vad användare märker. Det här ämnet förklarar vokabulären, hur man sätter mål och hur man håller dem användbara. Det hänger ihop med tillgänglighet och kapacitet (ämne 3.11 — Tillgänglighet, kapacitet och prestanda), leverantörshantering (ämne 3.14 — Leverantörshantering) och mätning (ämne 7.3 — Mätning och rapportering).

## Grundbegrepp

**Servicenivåavtal (SLA).** I ITIL 4 ett dokumenterat avtal mellan en tjänsteleverantör och en kund som identifierar både de tjänster som krävs och den förväntade servicenivån. Wikipedia-artikeln om servicenivåavtal beskriver de vanliga delarna: en beskrivning av tjänsten, mål, mätning, rapportering och vad som händer om mål missas. SLA kan vara interna, mellan en leverantör och dess egen organisation, eller externa, i ett kommersiellt avtal.

**Måltal för servicenivå.** Ett specifikt, mätbart åtagande, till exempel "99,9 procent av förfrågningarna slutförs inom två sekunder under en kalendermånad" eller "incidenter med prioritet ett besvaras inom 15 minuter". Varje mål definierar vad som mäts, hur, över vilken period och under vilka villkor.

**Servicenivåmål (SLO).** Ett mål för en servicenivåindikator (SLI), oftast använt av tekniska team, som en del av den praktik som beskrivs i ämne 2.6 — Site reliability engineering. SLO:n är vanligen interna och strängare än det externa SLA:t, så att teamet märker problem före ett brott. Wikipedia beskriver servicenivåmål.

**Driftnivåavtal (OLA).** Ett avtal mellan interna team som stöder leveransen av en tjänst till en kund. Till exempel kan ett nätverksteam gå med på svarstider gentemot det tjänsteteam som stöder ett externt SLA. Wikipedia beskriver driftnivåavtal.

**Underliggande avtal.** Ett avtal med en extern leverantör som stöder leveransen av en tjänst. Det bör vara förenligt med det SLA det stöder. Om ert SLA lovar fyra timmar och leverantörens avtal tillåter åtta är glappet ert.

**Upplevelsenivåavtal (XLA).** En nyare idé: avtal som fokuserar på hur användare upplever tjänsten, till exempel hur väl den hjälpte dem nå sina mål, i stället för rent tekniska mått. XLA använder ofta enkäter, sentimentmått och observationer utöver systemdata. Det finns ingen enskild standarddefinition, så skriv ned vad ni menar. Se ämne 7.7 — Analys av upplevelse och sentiment.

**Vad som gör ett mål bra.** Det är meningsfullt för kunden, mätbart, baserat på belägg för vad som kan uppnås och överenskommet med dem som är beroende av det. Det anger mätmetoden och undantag, som planerat underhåll. Det lovar inte det leverantören inte kan styra.

**Medelvärden och percentiler.** Medelvärden döljer de värsta fallen. Ett mål på "genomsnittlig svarstid under en sekund" kan nås även om en förfrågan av tio tar tio sekunder. Percentiler, som beskrivs på Wikipedia, ger en bättre bild: "95 procent av förfrågningarna under två sekunder". Välj percentilen utifrån den upplevelse du bryr dig om.

**Tillgänglighet och drifttid.** Ett vanligt mål, uttryckt som en procentandel av tiden en tjänst är användbar. Wikipedia-artikeln om tillgänglighet beskriver beräkningen. Det beror på vad som räknas som "användbar": en tjänst kan vara uppe och oanvändbar. Definiera det ur användarens synvinkel.

**Viten och krediter.** Många externa SLA innehåller åtgärder, som tjänstekrediter, om leverantören missar ett mål. De är en signal om allvar men ett dåligt substitut för tjänst: en liten kredit hjälper inte en kund vars verksamhet påverkades. Wikipedia-artikeln om fastställd skadeersättning beskriver besläktade avtalsidéer. Kontrollera hur åtgärder fungerar i era avtal och rådfråga jurist vid behov; den här guiden ger ingen.

**Rapportering.** Regelbundna rapporter visar resultat mot mål, med förklaringar till missar och åtgärder. Rapporter är till för samtal, inte bara för arkiv. Ta med exempel och användares kommentarer vid sidan av siffror.

**Granskning.** Granska SLA och mål med kunder med överenskomna intervall och justera dem när behov eller teknik ändras. Avveckla mål som ingen använder.

**Goodharts lag.** "När ett mått blir ett mål upphör det att vara ett bra mått." Wikipedia beskriver denna iakttagelse, tillskriven ekonomen Charles Goodhart. Människor justerar beteende för att möta siffran, inte syftet. Servicenivåer inbjuder till detta: ärenden som stängs i förtid, incidenter som omklassificeras, klockor som pausas. Skydda dig med urval, parade mått och kundåterkoppling. Se boken *Service Management Metrics*.

**Hur linserna passar in.** Hantering av servicenivåer är där agil förbättring möter överenskommelse: se ofta över mål och justera. AI kan hjälpa till att analysera prestationsdata och skriva utkast till rapporter, under granskning. Automatisering mäter och rapporterar konsekvent. Analys visar sambandet mellan tekniska mål och användarupplevelse.

## Bra arbetssätt

1. **Börja med vad kunden behöver.** Fråga vad de inte har råd att låta fallera och vilken långsamhet de skulle tolerera. Basera mål på de svaren, inte på vad som är lätt att mäta.
2. **Håll antalet mål litet.** En handfull meningsfulla mål per tjänst är lättare att förstå och hantera än dussintals. Släpp dem som ingen använder.
3. **Skriv varje mål exakt.** Ange vad som mäts, varifrån, över vilken period, vad som undantas och hur resultatet beräknas. Testa definitionen med en senaste månads data.
4. **Använd percentiler för svar och prestanda.** Redovisa andelen fall som möter målet och visa de värsta fallen, inte bara medelvärdet.
5. **Sätt interna mål strängare än avtal.** Ge ditt team utrymme att agera före ett brott. Gör interna och externa mål förenliga med varandra och med leverantörsavtal.
6. **Lägg till mått på upplevelse.** Vid sidan av tekniska mål, fråga användare hur tjänsten hjälpte dem, med korta enkäter och observation. Ta stickprov av verkliga fall för att se vad siffrorna missar.
7. **Rapportera med sammanhang.** Presentera resultat vid ett regelbundet möte med kunden, förklara missar ärligt och kom överens om åtgärder. Ta med några användarkommentarer.
8. **Skydda mot manipulation.** Granska urval av ärenden och incidenter bakom siffrorna, titta på återöppningsfrekvens och para hastighetsmått med kvalitetsmått.
9. **Granska avtal regelbundet.** Möts minst årligen och när något större ändras, för att kontrollera att målen fortfarande motsvarar behov och kostnad. Ändra mål öppet.
10. **Rikta in leverantörer.** Kontrollera att varje leverantörs avtal stöder de mål ni lovar och kom överens om hur deras prestation rapporteras till er. Se ämne 3.14 — Leverantörshantering.

## Frågor att diskutera i teamet

**Om vi nådde alla mål förra månaden, skulle våra kunder säga att tjänsten var bra?**
Det här prövar om mål speglar upplevelse. Räkna med en oöverensstämmelse någonstans. Be om ett färskt klagomål som inget mål fångade. Fördjupa genom att välja ett nytt mått på upplevelse.

**Vilka av våra mål läser ingen, och vilka bråkar alla om?**
Det här hittar värdelösa och omstridda mått. Fråga vem som använder var och en i beslut. Fördjupa genom att avveckla ett och förtydliga ett.

**Vad lovar vi kunder som beror på en leverantör eller ett annat team, och vad har de lovat oss?**
Det här prövar förenlighet mellan avtal. Kontrollera siffrorna sida vid sida. Räkna med glapp. Fördjupa genom att välja ett glapp att stänga, genom omförhandling eller genom att ändra vårt löfte.

**Hur kunde våra mål nås utan att hjälpa användaren?**
Föreställ dig manipulation: ärenden som stängs i förtid, klockor som pausas, snävare definitioner. Fråga om något av det sker. Fördjupa genom att välja en stickprovskontroll för ett mål.

**Vilka deltar i våra tjänstegranskningsmöten, och vad ändras efter dem?**
Möten utan handling är ritual. Be om den senaste åtgärdslistan. Fördjupa genom att komma överens om att varje granskning slutar med högst tre åtgärder med ägare.

**Var kunde AI hjälpa till att analysera servicenivådata eller skriva utkast till rapporter, och vad måste en människa kontrollera?**
AI kan sammanfatta trender och skriva utkast till förklaringar. Den kan också ange orsaker utan belägg. Fråga vem som granskar utkastet mot data. Fördjupa genom att pröva AI-skrivna sammanfattningar för internt bruk, där en person godkänner.

## I praktiken: ett exempel på tjänstehantering

Ett regionalt vattenverks it-avdelning stöder 800 kontorsanställda och 300 fältbesättningar. SLA:t för arbetsordersystemet lovar 99,5 procents tillgänglighet och en svarstid på fyra timmar för incidenter med prioritet ett. Rapporter visar att varje mål har nåtts i två år. Fältbesättningarna kallar ändå systemet "opålitligt", och driftchefen kräver ett bättre SLA.

Tjänstechefen träffar besättningsledarna och frågar vad "opålitligt" betyder. De säger att systemet är uppe men mycket långsamt tidigt på morgonen, när besättningarna börjar arbeta, och att det inte synkar när de har dålig mobiltäckning. Inget av detta fångas: tillgänglighet mäts med en kontroll från datacentret med fem minuters intervall, och svarsmål gäller bara ärenden som besättningar lägger, vilket de sällan gör eftersom de antar att ingenting kommer att göras.

Chefen föreslår förändringar. Teamet lägger till en SLI baserad på verkliga användartransaktioner: 95 procent av arbetsorderspara slutförs inom tre sekunder, mätt separat för perioden 6–8 på morgonen. Det lägger till en kort månatlig pulsenkät för besättningar, med två frågor om huruvida systemet hjälpte dem slutföra arbetet och vad som kom i vägen. Och det sätter ett internt SLO strängare än SLA:t, så att teamet ser morgonens långsamhet före besättningarna. Driftchefen går med på att gå igenom målen med besättningsföreträdare varje kvartal.

Det som förändras: första månadens data visar morgonens långsamhet tydligt, och en databasjustering åtgärdar mycket av den. Det som förblir svårt: synkfel beror på mobiltäckning som verket inte styr över; enkäten har en svarsfrekvens på ungefär en tredjedel; och den nya SLI:n finns inte i avtalet, så rapporter till ledningsgruppen bär nu två uppsättningar siffror. Chefen behåller båda och föreslår att de nya måtten förs in i SLA:t vid nästa förnyelse.

## Fyra perspektiv

### Produkt- och leveransteam

Definiera indikatorer och mål tillsammans med dem som driver och använder tjänsten och bygg in mätningarna i produkten. Behandla ett missat mål som en uppmaning att titta på designen, inte bara på driften.

### Tjänste- och driftsteam

Känn målen och hur de mäts. Håll utkik efter manipulation, rapportera ärligt och ta med exempel på vad siffrorna missar till granskningsmöten. Använd interna mål för att agera tidigt.

### Ledning och styrning

Fråga om mål speglar vad kunder behöver och om de är förenliga med leverantörsavtal. Titta på fördelningar och urval, inte bara rubrikprocent. Undvik att belöna eller bestraffa team utifrån enskilda siffror.

### Kunder och användare

Säg vad som betyder mest för dig och vad du kan tolerera. Delta i granskningar. Om varje rapport är grön och du är missnöjd, tala om det för leverantören och ge exempel.

## Agilitet, AI, automatisering och analys

### Agilitet

Granska och justera mål regelbundet med kunder, i små steg, och använd missar som återkoppling för förbättring. Se upp: mål som ändras varje månad förvirrar alla; håll en stabil kärna och ändra den medvetet.

### AI

AI kan analysera prestationsdata, skriva utkast till rapporter och föreslå orsaker till missar, med en person som ansvarar för slutsatserna. Utse en ägare för varje användning. Se upp: AI-förklaringar av missar kan låta auktoritativa utan belägg; be den ange vilka data den använde. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera mätning från verkliga transaktioner, rapportering och larm om risk för brott, med transparent beräkning. Se upp: automatisk mätning kan dölja definitionsfel; ta regelbundet stickprov av rådata och beräkningen. Se ämne 6.2 — Arbetsflödesautomatisering och orkestrering.

### Analys

Kombinera tekniska mått, som percentiler av svarstid, med upplevelsedata, som enkätresultat och klagomål. Se upp: enkäter kommer från dem som svarar, och varje mått kan manipuleras när det väl är ett mål; använd flera källor och ta stickprov av fall. Se ämne 7.7 — Analys av upplevelse och sentiment och boken *Service Management Metrics*.

## Vanliga felmönster

- **Allt grönt, kunder missnöjda.** Måtten missar upplevelsen. Lägg till användarbaserade indikatorer och urval.
- **För många mål.** Ingen läser dem. Behåll få som betyder något.
- **Enbart medelvärden.** De värsta fallen döljs. Använd percentiler och visa extremvärden.
- **Manipulation.** Klockor pausade, ärenden stängda i förtid. Ta stickprov och para mått.
- **Oförenliga avtal.** Löften överstiger vad leverantörer levererar. Rikta in interna och externa mål.
- **SLA som vapen.** Möten bråkar om krediter. Fokusera på förbättring och gemensam förståelse.
- **Aldrig granskade.** Mål åldras. Granska med överenskomna intervall.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Mål | Tekniska, ogranskade | Några kundbaserade mål | Mål satta med kunder och exakt definierade | Mål granskas mot data och upplevelse | Mål samordnas över tjänster och partner |
| Mätning | Manuell | Viss automatisering | Mäts från användartransaktioner där det går | Mätning valideras och stickprovskontrolleras | Mätning automatiserad och transparent längs kedjan |
| Upplevelse | Mäts inte | Enkäter ad hoc | Upplevelsemått vid sidan av tekniska | Upplevelse kopplad till förbättringar | Upplevelse styr avtal över tjänster |
| Granskning | Sällsynt | Årlig | Regelbundna granskningar med åtgärder | Granskningar följs för resultat | Granskningar integrerade med planering och leverantörer |

## Checklista

- [ ] Mål bygger på vad kunder behöver och är överenskomna med dem.
- [ ] Varje mål är exakt definierat och testat med verkliga data.
- [ ] Vi använder percentiler för svars- och prestandamål.
- [ ] Interna mål är strängare än externa avtal.
- [ ] Leverantörsavtal stöder de mål vi lovar.
- [ ] Vi mäter upplevelse såväl som teknisk prestanda.
- [ ] Vi tar stickprov av fallen bakom siffrorna för att upptäcka manipulation.
- [ ] Vi granskar avtal minst årligen och efter större förändring.

## AI-prompter

**Kontrollera en målsdefinition.**

```text
Here is a service level target as written: [paste]. Here is a month of raw data: [paste summary].
List what is unclear in the wording, compute the result in two different reasonable ways showing your steps, and note where the answers differ. Do not recommend a new target.
List what you are unsure of.
```

**Hitta vad siffrorna missar.**

```text
Our targets: [list]. Here are user complaints from the last quarter: [paste, personal data removed].
List complaints that no target would have detected, quote each briefly, and suggest one possible measure for each. Do not claim the measures would work.
List what you are unsure of.
```

**Förbered en tjänstegranskning.**

```text
Here are this month's results against targets: [paste]. Here are notable incidents and user comments: [paste].
Draft an agenda and five questions to discuss with the customer, including one about what the numbers do not show. Do not explain causes that are not in the material.
List what you are unsure of.
```

## AI-färdigheter

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): använd för att skriva och granska avtal och mål.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): använd för att välja indikatorer som varnar tidigt.
- [survey-design](../../../../skills/survey-design/SKILL.md): använd för att utforma upplevelsemått.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): använd för att rikta in leverantörsavtal mot era mål.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken hantering av servicenivåer.
- Betsy Beyer med flera (red.), *Site Reliability Engineering* (2016), kapitlet om servicenivåmål, fritt tillgängligt på sre.google.
- Wikipedia, "Service-level agreement" och "Service-level objective": översikter av termerna.
- Wikipedia, "Goodhart's law": en varning för att använda mått som mål.

## Referenser

1. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Operational-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Operational-level_agreement
4. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
5. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
6. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
7. Liquidated damages — Wikipedia — https://en.wikipedia.org/wiki/Liquidated_damages
8. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
9. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
