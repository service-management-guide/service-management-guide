# Hantering av tjänstekatalog

**En tjänstekatalog (ITIL:s "service catalogue") är en produktbacklogg vänd ut och in: en underhållen, användarvänd beskrivning av vad leverantören erbjuder, med en teknisk vy bakom som visar hur varje tjänst är byggd; den förtjänar sin plats bara om människor använder den för att hitta, beställa och förstå tjänster.**

## Varför det här är viktigt

Fråga en typisk användare vad deras it- eller HR-avdelning erbjuder och du får ofta en axelryckning. Tjänster finns, men ingen har beskrivit dem på ett sätt som en användare kan hitta eller förstå. Användare frågar kolleger, använder fel kanal eller bygger egna lösningar. Leverantörer kan i sin tur inte säga vad de erbjuder, vem som äger det eller vad det kostar, och överraskas av efterfrågan på saker de inte visste att de stödde.

En tjänstekatalog åtgärdar detta genom att lista tjänster på användarens språk, med den information en användare behöver för att besluta och be om hjälp: vad tjänsten gör, vem som kan använda den, hur man beställer den, hur lång tid den tar och vad den kostar. Bakom den vyn finns en teknisk vy, som länkar varje tjänst till de komponenter, team och leverantörer som levererar den och till de avtal som styr den. Tillsammans kopplar de ihop det användaren ser med det leverantören driver.

Kataloger kan misslyckas på två motsatta sätt. En tom, sällan uppdaterad katalog ignoreras. En uppsvälld med hundratals poster på tekniskt språk är oanvändbar. Det här ämnet förklarar de två vyerna, hur man bygger en katalog som människor använder och hur man håller den vid liv. Det är nära besläktat med hantering av serviceförfrågningar (ämne 3.6 — Hantering av serviceförfrågningar), hantering av servicenivåer (ämne 3.7 — Hantering av servicenivåer) och konfigurationshantering (ämne 4.4 — Konfigurationshantering).

## Grundbegrepp

**Service catalogue eller tjänstekatalog.** ITIL använder den engelska stavningen "service catalogue". Den här guiden använder "tjänstekatalog". Wikipedia beskriver en tjänstekatalog som en lista över tjänster som en organisation tillhandahåller, ofta till sina anställda eller kunder.

**Kundvänd vy.** En beskrivning av tjänster så som användare förstår dem, till exempel "E-post och kalender", "Bärbar dator för nyanställda" eller "Lönefrågor". Den anger vad tjänsten är, vem som kan använda den, hur man beställer, förväntad tid, kostnad där det är relevant och var man får hjälp. Det är den del användare möter.

**Teknisk vy.** En beskrivning av hur tjänster är byggda och stöds: komponenter, infrastruktur, applikationer, team, leverantörer och avtal bakom var och en. Den hjälper leverantören att förstå beroenden och påverkan, till exempel vilka tjänster som berörs om en databas faller. Den är besläktad med en konfigurationsdatabas; se ämne 4.4 — Konfigurationshantering.

**Tjänsteportfölj.** Hela uppsättningen tjänster under förvaltning, inklusive de som utvecklas, de som är live i katalogen och de som avvecklas. Katalogen är den levande delen av portföljen. Wikipedia-artikeln om förvaltning av applikationsportföljer är en besläktad idé för programvara. Se ämne 2.8 — Produkt- och tjänsteägarskap.

**Tjänsteerbjudande.** En formell beskrivning av en eller flera tjänster, möjligen med olika alternativ, som standard- eller premiumsupport. Erbjudanden hjälper användare att välja det som passar och hjälper leverantörer att förstå efterfrågan och kostnad.

**Katalogpost och förfrågan.** En katalogpost är det användare kan beställa eller använda. Där posten går att beställa länkar den till en förfrågningsmodell (se ämne 3.6 — Hantering av serviceförfrågningar). Vissa poster är informativa, som "Hur man ansluter till det trådlösa nätverket".

**Taxonomi och sökbarhet.** Användare hittar saker genom att bläddra bland kategorier eller söka. Wikipedia-artiklarna om taxonomi och informationsarkitektur beskriver hur man organiserar information. Kategorier bör spegla hur användare tänker, inte hur organisationen är strukturerad. Ett bra test är att fråga användare var de skulle leta efter en viss post.

**Klarspråk.** Beskrivningar bör vara korta och tydliga och undvika jargong och akronymer. Wikipedia-artikeln om klarspråk beskriver principerna. Testa beskrivningar med människor som är nya för tjänsten.

**Ägarskap.** Varje tjänst har en namngiven ägare som underhåller dess post och ansvarar för dess kvalitet. Utan ägare förfaller poster. Se ämne 2.8 — Produkt- och tjänsteägarskap.

**Katalog som backlogg.** Behandla katalogen som en levande produkt. Poster läggs till, förbättras, slås ihop och avvecklas utifrån efterfrågan och återkoppling. En backlogg av katalogförbättringar, granskad regelbundet, håller den aktuell. Det speglar idén om produktbackloggen; se Wikipedia-artikeln om produktbackloggar.

**Kostnader och debitering.** Där tjänster debiteras visar katalogen priset eller kostnadsfördelningen. Även där ingen debitering sker höjer visandet av kostnaden medvetenheten. Se ämne 4.5 — Ekonomistyrning och FinOps.

**Bortom it.** Många organisationer utvidgar katalogen till HR, lokalförvaltning och andra funktioner. Se ämne 1.9 — Tjänstehantering för hela verksamheten.

**Sökning och AI.** Användare söker eller frågar i allt högre grad en chattassistent i stället för att bläddra. Katalogens innehåll måste vara tydligt och strukturerat så att sökning och assistenter kan hitta det. AI kan hjälpa till att koppla en användares beskrivning till en katalogpost.

**Hur linserna passar in.** Katalogen är en produkt för ständig förbättring: uppdatera poster utifrån verkliga frågor. AI kan skriva utkast till poster, föreslå kategorier och hjälpa användare att hitta tjänster, under granskning. Automatisering kopplar katalogen till uppfyllande och till konfigurationsdata. Analys visar vad som används, söks efter och överges.

## Bra arbetssätt

1. **Börja med de vanligaste förfrågningarna och frågorna.** Lista de tjugo saker användare ber om mest. Beskriv dem först. En liten, användbar katalog slår en stor, tom.
2. **Beskriv varje tjänst med användarens termer.** Skriv en kort sammanfattning, vem den är till för, hur man beställer, förväntad tid, kostnad och var man får hjälp. Undvik interna namn och akronymer.
3. **Utse en ägare och ett granskningsdatum.** Visa vem som äger posten. Granska varje post minst årligen och när tjänsten ändras.
4. **Organisera efter hur användare tänker.** Testa kategorier med användare, till exempel med kortsortering eller en söklogg. Ändra dem när belägg säger det.
5. **Länka till uppfyllande.** Där en tjänst kan beställas, koppla posten till förfrågningsformuläret och statusuppföljningen. En katalog som inte leder till handling är en broschyr.
6. **Håll en teknisk vy för leverantören.** Registrera för varje tjänst komponenterna, teamen, leverantörerna och avtalen bakom den. Använd den för konsekvensanalys och planering.
7. **Visa kostnader och alternativ.** Ange vad en tjänst kostar eller förbrukar och beskriv alternativ, så att användare kan välja med information.
8. **Titta på vad användare söker efter.** Gå igenom söktermer som ger inget eller fel resultat och lägg till eller byt namn på poster så att de matchar.
9. **Avveckla och slå ihop.** Ta bort tjänster som inte längre erbjuds. Kombinera nästan-dubbletter. Markera tjänster som håller på att ändras.
10. **Behandla katalogen som en produkt.** Ge den en ägare, en backlogg och regelbunden återkoppling från användare. Mät användning och förbättra det som inte används.

## Frågor att diskutera i teamet

**Om en ny medarbetare frågade vad vi erbjuder, kunde vi svara utan att slå upp det?**
Det här prövar om tjänster är kända och beskrivna. Räkna med partiella svar. Be tre personer om en lista och jämför. Fördjupa genom att välja de tio främsta och skriva ned dem.

**Vilka av våra katalogposter öppnar användare aldrig, och vilka öppnar de och ringer sedan oss?**
Använd data. Poster som öppnas och överges tyder på oklara beskrivningar. Poster som aldrig öppnas kan vara överflödiga. Fördjupa genom att välja tre poster att skriva om eller avveckla.

**Vad skriver användare i sökningen som inte ger något användbart?**
Sökloggar avslöjar skillnader i ordförråd. Räkna med vardagsord som inte matchar interna namn. Fördjupa genom att lägga till alias eller nya poster för de fem vanligaste misslyckade sökningarna.

**Vem äger varje tjänstepost, och när kontrollerades den senast?**
Ägarskapsluckor och inaktuella poster är vanliga. Be om datum. Fördjupa genom att tilldela ägare och en granskningscykel.

**Hur hänger vår tekniska vy ihop med det användare ser, och kunde vi säga vilka tjänster som berörs av ett givet fel?**
Det här prövar kopplingen mellan vyerna. Pröva för en färsk incident. Räkna med manuellt arbete. Fördjupa genom att välja en kritisk tjänst och kartlägga dess beroenden.

**Hur kunde AI hjälpa användare att hitta tjänster och hjälpa oss hålla poster aktuella, och vad måste en människa kontrollera?**
AI kan koppla en användares beskrivning till poster och skriva utkast till uppdateringar utifrån ärenden. Den kan också peka användare till fel tjänst. Fråga vem som äger den och hur felmatchningar upptäcks. Fördjupa genom att testa en matchare på ett urval verkliga frågor.

## I praktiken: ett exempel på tjänstehantering

En nationell skattemyndighets interna it-avdelning har en tjänstekatalog med 340 poster, de flesta skrivna av ingenjörerna som byggde tjänsterna. Personalen använder servicedeskens telefon i stället, och desken lägger mycket tid på att peka uppringare till tjänster som redan finns.

Tjänstechefen ber en grupp på femton medarbetare från olika avdelningar hitta fem saker i katalogen: ett sätt att boka ett videomötesrum, hur man får en andra skärm, hur man går med i en projektadresslista, hur man får åtkomst till ett ärendesystem och hur man anmäler en förlorad telefon. Bara två lyckas. Katalogen använder termer som "tillhandahållande av ändpunkter för audiovisuell konferens" och "kringutrustning".

Teamet går igenom sex månaders deskkontakter och rangordnar de 30 vanligaste förfrågningsämnena. De skriver om dessa poster på klarspråk, med en kort beskrivning, vem som kan beställa, hur lång tid det tar och en länk till formuläret. De slår ihop 90 poster till 40, avvecklar 60 som inte längre erbjuds och lägger till sökalias som "andra skärm" för bildskärmar. Varje post visar en ägare och ett granskningsdatum. En chattassistent prövas för att peka användare till poster, med en länk till en människa när den inte kan hjälpa.

Det som förändras: samma testgrupp hittar nu fyra av fem poster, och deskens "var hittar jag"-kontakter minskar. Det som förblir svårt: den tekniska vyn är ofullständig, så konsekvensanalys bygger fortfarande på tyst kunskap; de återstående 240 posterna är ogranskade; och ägare till vissa tjänster säger att de saknar tid att hålla poster aktuella. Chefen sätter en regel att poster som inte granskats inom ett år markeras "overifierade" och nedprioriteras i sökningen.

## Fyra perspektiv

### Produkt- och leveransteam

Beskriv de tjänster ni bygger för användare och håll posterna aktuella när ni ändrar dem. Tillhandahåll den tekniska information som kopplar era komponenter till de tjänster de stöder.

### Tjänste- och driftsteam

Underhåll den tekniska vyn och använd den i incidenter och ändringar. Titta på vad användare söker och frågar och för tillbaka luckor till ägarna. Hjälp till att hålla uppfyllandelänkar fungerande.

### Ledning och styrning

Be om en katalog som användare tycker är användbar, med ägare och granskningsdatum. Finansiera dess upprätthållande. Använd den för att se vad som erbjuds, vad det kostar och vad som avvecklas.

### Kunder och användare

Du bör kunna hitta vad som finns, förstå det och be om det utan att känna till organisationsschemat. Tala om för leverantören vad du inte kunde hitta eller förstå.

## Agilitet, AI, automatisering och analys

### Agilitet

Behandla katalogen som en backlogg: förbättra de mest använda posterna först, i små steg, med användaråterkoppling. Gå regelbundet igenom den med intressenter. Se upp: bygg inte hela katalogen före lansering; en liten, användbar start lär er mer.

### AI

AI kan skriva utkast till poster utifrån befintliga dokument, föreslå kategorier och alias och hjälpa användare att hitta tjänster i chatt. Varje användning behöver en ägare, och en person bör godkänna publicerad text. Se upp: en assistent som gissar en post som inte finns vilseleder användare; kräv att den hänvisar till katalogposter. Se ämne 5.3 — AI-servicedesk och virtuella agenter.

### Automatisering

Koppla katalogen till förfrågningsformulär, godkännanden och uppfyllande, och generera delar av den tekniska vyn ur konfigurationsdata. Se upp: automatisk import av tekniska data kan fylla katalogen med maskinnamn; behåll ett mänskligt redigeringssteg för den användarvända texten. Se ämne 6.5 — Självbetjäning och automatiserad leverans.

### Analys

Följ visningar, sökningar, sökningar utan resultat, gjorda förfrågningar och övergivna förfrågningar. Se upp: popularitet är inte värde; en sällan använd post kan vara kritisk för några få. Kombinera antal med återkoppling. Se ämne 7.7 — Analys av upplevelse och sentiment och boken *Service Management Metrics*.

## Vanliga felmönster

- **En katalog skriven av ingenjörer.** Användare kan inte förstå den. Skriv om på klarspråk och testa.
- **För många poster.** Ingen hittar något. Börja smått, slå sedan ihop och avveckla.
- **Inga ägare.** Poster förfaller. Utse ägare och granskningsdatum.
- **Bara en broschyr.** Katalogen leder inte till handling. Länka poster till formulär och status.
- **Kategorier efter organisationsschema.** Användare kan inte gissa var de ska leta. Organisera efter användarens avsikt.
- **Ingen teknisk vy.** Konsekvensanalys är gissning. Kartlägg beroenden för kritiska tjänster.
- **Aldrig avveckling.** Döda poster vilseleder. Granska och ta bort.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Användarvänd vy | Ingen eller teknisk | Främsta tjänster beskrivna | Tjänster beskrivna på klarspråk med ägare | Poster testas och granskas med användare | Poster enhetliga över funktioner och kanaler |
| Teknisk vy | Inte registrerad | Huvudtjänster kartlagda | Beroenden registrerade för viktiga tjänster | Används i incidenter och ändringar | Genereras och hålls aktuell ur konfigurationsdata |
| Sökbarhet | Endast bläddring | Viss sökning | Sökning och kategorier testade med användare | Sökloggar driver ändringar | Sökning och assistenter integrerade över kanaler |
| Upprätthållande | Ingen | Enstaka | Ägare och granskningsdatum | Användning och kvalitet mäts | Ständig förbättring utifrån återkoppling |

## Checklista

- [ ] De tjugo vanligaste förfrågningarna och frågorna finns i katalogen.
- [ ] Varje post är på klarspråk, med vem, hur, hur lång tid och kostnad.
- [ ] Varje post har en ägare och ett granskningsdatum.
- [ ] Kategorier testades med användare.
- [ ] Beställningsbara poster länkar till formulär och status.
- [ ] Den tekniska vyn täcker våra kritiska tjänster.
- [ ] Vi granskar misslyckade sökningar och övergivna poster.
- [ ] Vi avvecklar eller slår ihop poster regelbundet.

## AI-prompter

**Skriv ett utkast till en katalogpost utifrån anteckningar.**

```text
Here are notes on the service [name]: [paste, including what it does, who can use it, how to ask, how long, cost].
Draft a catalog entry of under 120 words in plain language with a one-line summary, who it is for, how to ask, and expected time. Mark every gap in the notes with [missing] and do not fill it.
List what you are unsure of.
```

**Hitta luckor i ordförrådet.**

```text
Here are search terms users typed with no useful result: [paste list]. Here are our current catalog entry titles: [paste list].
For each search term, list the entry titles that might match, or write "no match", and suggest a possible alias or new entry. Do not invent entries that I did not list as possible.
List what you are unsure of.
```

**Testa kategorier.**

```text
Here is a list of catalog items: [paste]. Here is our proposed category structure: [paste].
For each item, say which category a typical user would most likely look in and why, and list items that could reasonably sit in two places. Use only what is provided.
List what you are unsure of.
```

## AI-färdigheter

- [service-catalog](../../../../skills/service-catalog/SKILL.md): använd för att bygga och underhålla en användarvänd katalog.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): använd för att länka poster till uppfyllandesteg.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): använd för att identifiera vem som använder och äger varje tjänst.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): använd för att granska hela uppsättningen tjänster.

## Viktiga källor

- PeopleCert, ITIL certification pages: ägarens beskrivning av hantering av tjänstekatalog (service catalogue management).
- Wikipedia, "Service catalog": en kort översikt av begreppet.
- Wikipedia, "Information architecture": disciplinen att organisera information för användare.
- Wikipedia, "Plain language": principerna för tydligt skrivande.

## Referenser

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Application portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Application_portfolio_management
3. Taxonomy — Wikipedia — https://en.wikipedia.org/wiki/Taxonomy
4. Information architecture — Wikipedia — https://en.wikipedia.org/wiki/Information_architecture
5. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
6. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
7. Product backlog — Wikipedia — https://en.wikipedia.org/wiki/Product_backlog
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Search engine — Wikipedia — https://en.wikipedia.org/wiki/Search_engine
10. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
