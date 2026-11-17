# Hantering av tjänstekontinuitet

**Hantering av tjänstekontinuitet förbereder en organisation på att hålla kritiska tjänster igång, eller återställa dem inom en överenskommen tid, efter ett allvarligt avbrott; den fungerar när återställningsmål kommer från verksamhetspåverkan, planer repeteras och säkerhetskopior bevisas genom att återställas.**

## Varför det här är viktigt

De flesta incidenter är små: en trasig disk, en dålig release, ett utgånget certifikat. Några är det inte. Ett datacenter förlorar strömmen en dag. En molnregion faller. Utpressningsprogram krypterar huvudsystemen. En leverantör går under. En pandemi håller personal borta från kontoren. Händelser som dessa hotar organisationen, inte bara en tjänst, och de inträffar så sällan att människor glömmer att förbereda sig.

Förberedelse är en sorts försäkring med ett särskilt drag: dess värde visar sig bara den dag du behöver den, och en plan som aldrig har prövats fungerar sannolikt inte. Säkerhetskopior som aldrig återställts visar sig vara tomma. En redundansväxling som aldrig repeterats tar en dag i stället för en timme. En kontaktlista upptar människor som slutat. Team som har övat hittar problemen i övningen, inte i krisen.

Det här ämnet förklarar hur man avgör vad som ska skyddas, hur man sätter återställningsmål, hur man planerar och repeterar och hur man inkluderar AI och automatisering på ett förnuftigt sätt. I ITIL 4 är praktiken hantering av tjänstekontinuitet. I vidare bruk möter du också kontinuitetshantering för verksamheten, katastrofåterställning och resiliens. De överlappar, och det här ämnet beskriver hur de hänger ihop. Det hänger ihop med tillgänglighet (ämne 3.11 — Tillgänglighet, kapacitet och prestanda), incidenthantering (ämne 3.2 — Incidenthantering) och informationssäkerhet (ämne 3.13 — Informationssäkerhetshantering).

## Grundbegrepp

**Tjänstekontinuitet.** I ITIL 4 att säkerställa att en tjänsts tillgänglighet och prestanda upprätthålls på en tillräcklig nivå vid en katastrof. Praktiken omfattar att bedöma risker och konsekvenser, planera återställning och repetera.

**Verksamhetskontinuitet och katastrofåterställning.** Planering för verksamhetskontinuitet, beskriven på Wikipedia, täcker hur en organisation håller kritiska funktioner igång, eller snabbt återupptar dem, under och efter ett avbrott. Katastrofåterställning är it-delen: att återställa system, data och infrastruktur. Verksamhetskontinuitet frågar "hur fortsätter vi betjäna kunder?"; katastrofåterställning frågar "hur får vi tillbaka systemen?". ISO 22301 är en internationell standard för ledningssystem för verksamhetskontinuitet, beskriven på Wikipedia; dess förhållande till ISO/IEC 20000 behandlas i ämne 1.8 — Ramverk och standarder för tjänstehantering.

**Verksamhetskonsekvensanalys (BIA).** En studie av vad som händer med organisationen om varje funktion eller tjänst är otillgänglig under en given tid. Den identifierar vilka tjänster som är kritiska och hur snabbt de måste återställas. Analysen involverar verksamheten, inte bara it, eftersom bara verksamheten vet konsekvensen av en förlorad timme eller dag.

**Mål för återställningstid (RTO).** Den högsta tillåtna tiden för att återställa en tjänst efter ett avbrott. Wikipedia beskriver det under it-katastrofåterställning. Det kommer från konsekvensanalysen: om en timmes avbrott kostar mycket är RTO kort och lösningen dyr.

**Mål för återställningspunkt (RPO).** Den största acceptabla dataförlusten, mätt i tid. Ett RPO på 15 minuter betyder att efter återställning får högst 15 minuters data saknas. Det avgör hur ofta data måste kopieras.

**Kostnader och avvägningar.** Kortare RTO och RPO kostar mer: mer redundans, mer replikering, mer testning. Visa kostnaden för varje alternativ för dem som beslutar och registrera beslutet. Se ämne 4.5 — Ekonomistyrning och FinOps.

**Säkerhetskopiering och replikering.** Säkerhetskopior är kopior av data som sparas för att återställa dem efter förlust eller skada. Replikering håller en andra kopia kontinuerligt uppdaterad på annat håll. Wikipedia beskriver båda. Replikering ersätter inte säkerhetskopiering: om korruption eller kryptering av utpressningsprogram replikeras är kopian också skadad. Behåll minst en säkerhetskopia som inte kan ändras från produktionsmiljön och testa att återställa den.

**Återställningsplatser och mönster.** Alternativen sträcker sig från en reservplats som alltid körs, via en som kan startas inom timmar, till att återställa från säkerhetskopia till en ny miljö. Molntjänster gör flera mönster enklare, till exempel att återskapa infrastruktur ur kod. Se ämne 6.3 — Infrastruktur som kod och GitOps. Wikipedia beskriver reservplatser.

**Beroenden.** En kritisk tjänst beror på andra: identitet, nätverk, DNS, leverantörer, certifikat och människor. Återställningsplaner måste följa dessa beroenden och ordna återställningen. Många misslyckade återställningar stannar av på ett bortglömt beroende, till exempel systemet som lagrar de lösenord som behövs för att återställa de andra.

**Planer och spelböcker.** Skrivna, koncisa instruktioner om vem som gör vad, i vilken ordning, med vem man ska kontakta. De bör lagras där de kan läsas när system ligger nere, inklusive offlinekopior. Roller måste namnges, med ersättare.

**Övningar.** Repetitioner sträcker sig från en genomgångsdiskussion av ett scenario, via en simulering, till en levande redundansväxling eller återställning. Wikipedia beskriver kaosteknik, där fel införs avsiktligt och under kontroll för att hitta svagheter. Börja smått och säkert och öka realismen över tid. Registrera vad som hände och åtgärda det ni lär er.

**Krishantering och krisinformation.** Ett större avbrott behöver ledningsbeslut, kommunikation med personal, kunder, tillsynsmyndigheter och allmänheten samt samordning över funktioner. Wikipedia-artikeln om krishantering beskriver fältet. Besluta i förväg vem som talar och hur. Se ämne 3.2 — Incidenthantering.

**Cyberhändelser.** Utpressningsprogram och andra attacker är nu en ledande orsak till allvarliga avbrott. Wikipedia beskriver utpressningsprogram som skadlig kod som krypterar data och kräver betalning. Återställning efter en sådan attack kräver rena säkerhetskopior, isolering av drabbade system, återuppbyggnad av betrodd infrastruktur och samordning med säkerhet. Kontrollera lagar och råd som gäller er, inklusive om rapportering; den här guiden ger ingen juridisk rådgivning.

**Leverantörer.** Er kontinuitet beror på era leverantörers. Fråga om deras planer och ta med dem i övningar där det är möjligt. Se ämne 3.14 — Leverantörshantering.

**Hur linserna passar in.** Kontinuitet är där agil iteration möter beredskap: förbättra planen efter varje övning. AI kan hjälpa till att skriva utkast till planer och scenarier, under granskning, men kan inte förlitas på under en kris. Automatisering bygger om miljöer och kör redundansväxlingar. Analys ger underlag till konsekvensanalys och följer övningsresultat.

## Bra arbetssätt

1. **Börja med verksamhetspåverkan.** Fråga verksamheten vad varje tjänsts avbrott kostar över minuter, timmar och dagar. Rangordna tjänster och sätt RTO och RPO därefter. Se över analysen efter större förändring.
2. **Skydda de kritiska få först.** Koncentrera insatsen på de tjänster vars förlust allvarligt skulle skada organisationen. Ordna lättare arrangemang för resten.
3. **Kartlägg beroenden.** Lista för varje kritisk tjänst vad den behöver för att köras och återställas, inklusive identitet, nätverk, DNS och leverantörer. Planera återställningsordningen.
4. **Behåll en oföränderlig, testad säkerhetskopia.** Behåll minst en kopia som inte kan ändras eller raderas från produktionsmiljön och återställ från den regelbundet för att bevisa att den fungerar.
5. **Skriv korta, användbara planer.** Lägg roller, första steg, kontakter och beslutspunkter på några sidor. Behåll kopior offline och hos dem som behöver dem.
6. **Namnge roller och ersättare.** För varje roll i en kris, namnge en primär och minst en ersättare. Uppdatera listan när människor byter jobb.
7. **Repetera i steg.** Börja med en diskussion av ett scenario, gå vidare till simuleringar och sedan till kontrollerade levande tester av återställning och redundansväxling. Registrera tider och problem.
8. **Åtgärda det övningen hittar.** Behandla fynd som backloggpunkter med ägare och datum. Kontrollera vid nästa övning att de blev gjorda.
9. **Ta med leverantörer och kunder.** Be kritiska leverantörer om deras kontinuitetsarrangemang och testa anslutningarna. Kom överens med kunder om vilken nedgraderad tjänst de kan acceptera.
10. **Planera kommunikation.** Förbered vem som informerar vem, genom vilka kanaler, med mallar, inklusive kanaler som fungerar när era system inte gör det.

## Frågor att diskutera i teamet

**Vilka tre tjänster skulle skada oss mest om de var otillgängliga i en vecka, och hur vet vi det?**
Fråga verksamheten, inte bara it. Räkna med olika svar, vilket är en användbar startpunkt. Fördjupa genom att ordna en kort konsekvensdiskussion för var och en av de tre.

**När återställde vi senast från säkerhetskopia, och hur lång tid tog det?**
Be om datum och resultat. Räkna med "vi har aldrig försökt" eller "bara en testfil". Fördjupa genom att schemalägga en fullständig återställning av ett viktigt system i en säker miljö.

**Vad beror vår återställning på som vi inte har testat, till exempel identitetssystem, DNS eller en person?**
Rita kedjan för en tjänst. Leta efter cirkulära beroenden. Fördjupa genom att välja ett beroende att testa.

**Om våra vanliga kommunikationssystem låg nere, hur skulle vi nå varandra och våra kunder?**
Många planer förutsätter e-post och chatt. Fråga om kontaktlistan och kanaler utanför bandet. Fördjupa genom att testa ett samtalsträd.

**Vad skulle vi göra under första timmen av ett utpressningsangrepp, och vem beslutar?**
Kör en kort scenariodiskussion. Räkna med oenighet om att isolera system och om kontakt med myndigheter. Fördjupa genom att skriva en förstatimmeguide på en sida tillsammans med säkerhet.

**Var kunde AI hjälpa oss förbereda eller svara, och var måste vi förlita oss på förberedda mänskliga planer?**
AI kan skriva utkast till scenarier, kontrollera planer för luckor och sammanfatta loggar. Under ett avbrott kan AI-tjänsten själv vara otillgänglig. Fråga vad planen förutsätter. Fördjupa genom att kontrollera att kritiska steg inte beror på en AI-tjänst.

## I praktiken: ett exempel på tjänstehantering

Ett regionalt elnätsbolags styrcentralssystem, som visar nätets tillstånd för operatörer, måste återställas inom två timmar efter ett fel. Bolagets plan för katastrofåterställning säger så. Den skrevs för fyra år sedan och testades senast som en pappersövning.

En ny kontinuitetschef ber om ett levande test. Teamet går med på att återställa styrcentralsapplikationen i en separat miljö från föregående nats säkerhetskopia, med driftchefen som observatör. Återställningen tar elva timmar i stället för två. Tre problem framträder: säkerhetskopian innehåller applikationens filer men inte dess konfigurationsdatabas, som hålls av ett annat team; de lösenord som krävs för återställningen lagras i ett valv som är en del av samma datacenter; och personen som kan nätverksinställningarna för återställningsplatsen är på lång ledighet och saknar ersättare.

Teamet åtgärdar dessa under tre månader. Det lägger till konfigurationsdatabasen i säkerhetskopieringsschemat, skapar ett nödlösenordsförråd som hålls offline i ett förseglat kuvert och i ett separat molnkonto, och utbildar två ytterligare ingenjörer på återställningsplatsen. Ett andra test återställer applikationen på 2 timmar och 40 minuter. Det tredje, med en avsiktligt oannonserad start, tar 1 timme och 50 minuter.

Det som förändras: målet nås i praktiken, och planen är ett dokument människor har använt. Det som förblir svårt: testet använde en kopia av produktionsdata och inkluderade inte anslutningarna till fältutrustning, som bara kan testas tillsammans med nätoperatören; organisationen har inte repeterat förlusten av hela datacentret, bara en applikation; och kostnaden för att hålla återställningsplatsen ifrågasätts varje år. Chefen behåller övningskalendern och presenterar kostnader mot konsekvensanalysen.

## Fyra perspektiv

### Produkt- och leveransteam

Gör återställning till en del av designen: bygg om ur kod, säkerhetskopiera data och konfiguration, undvik dolda beroenden. Delta i övningar och åtgärda det de hittar.

### Tjänste- och driftsteam

Känn din roll och din ersättare, håll körhandböcker aktuella och repetera återställningar och redundansväxlingar. Registrera hur lång tid saker verkligen tar och tala om det för ägarna.

### Ledning och styrning

Besluta återställningsmål tillsammans med verksamheten och finansiera det de kräver. Delta i övningar, inklusive beslut och kommunikation. Be att få se resultat från tester, inte bara planer.

### Kunder och användare

Fråga vilka kontinuitetsarrangemang som skyddar de tjänster du förlitar dig på och kom överens om vilken nedgraderad tjänst du kan acceptera. Behåll din egen beredskap för kritiska behov.

## Agilitet, AI, automatisering och analys

### Agilitet

Förbättra kontinuitet i små steg: ett beroende, ett återställningstest, en åtgärd i taget, granskade med intressenter. Se upp: skjut inte allt kontinuitetsarbete till ett enda stort projekt; repetera tidigt och ofta.

### AI

AI kan hjälpa till att skriva utkast till scenarier, kontrollera planer för luckor och sammanfatta loggar efter en övning, med en person som granskar. Utse en ägare. Se upp: en AI-assistent kan vara otillgänglig i en kris eller ge opålitliga instruktioner; behåll väsentliga förfaranden i enkla, testade dokument. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera ombyggnad av miljöer, verifiering av säkerhetskopior och redundansväxling, med loggar och skyddsåtgärder, och testa dem regelbundet. Se upp: automatisering kan sprida skada snabbt, till exempel genom att radera säkerhetskopior tillsammans med produktionsdata; skydda säkerhetskopieringssystem med separata behörigheter och kontroller. Se ämne 6.3 — Infrastruktur som kod och GitOps.

### Analys

Följ framgång för säkerhetskopior, tider för återställningstester mot RTO, uppnått RPO, stängda övningsfynd och beroendetäckning. Se upp: en hög framgångsfrekvens för säkerhetskopior säger ingenting om huruvida data kan återställas; räkna återställningar. Se boken *Service Management Metrics* och ämne 7.3 — Mätning och rapportering.

## Vanliga felmönster

- **Planer som aldrig testas.** De fallerar när de behövs. Repetera och återställ regelbundet.
- **Säkerhetskopior som aldrig återställs.** De är tomma eller ofullständiga. Testa återställningar och verifiera innehåll.
- **Dolda beroenden.** Återställningen stannar på identitet eller DNS. Kartlägg och testa beroenden.
- **Säkerhetskopior som angripare kan ändra.** Utpressningsprogram krypterar dem. Behåll en oföränderlig kopia.
- **Planering enbart av it.** Verksamheten är inte involverad. Gör en konsekvensanalys med verksamhetsägare.
- **Planen finns bara på det system som föll.** Ingen kan läsa den. Behåll offlinekopior.
- **Inga ersättare.** En person har kunskapen. Utse alternativ och utbilda dem.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Påverkan och mål | Inte definierade | Kritiska tjänster listade | RTO och RPO satta utifrån verksamhetspåverkan | Mål granskas med kostnad och resultat | Mål samordnas över företaget och leverantörer |
| Säkerhetskopiering och återställning | Säkerhetskopior overifierade | Säkerhetskopior körs | Återställningar testade och tidtagna | Återställningsprestanda följs och förbättras | Återställning automatiserad och testas kontinuerligt |
| Planer | Inga eller föråldrade | Skrivna för huvudtjänster | Koncisa planer med namngivna roller och ersättare | Planer uppdateras efter varje övning | Planer integrerade över funktioner, leverantörer och kunder |
| Övningar | Inga | Pappersgenomgångar | Regelbundna simuleringar och levande återställningar | Fynd följs till avslut | Övningar inkluderar partner och realistiska scenarier |

## Checklista

- [ ] Vi gjorde en verksamhetskonsekvensanalys för våra kritiska tjänster.
- [ ] Varje kritisk tjänst har ett RTO och RPO överenskommet med sin ägare.
- [ ] Beroenden, inklusive identitet och DNS, är kartlagda.
- [ ] Minst en säkerhetskopia är oföränderlig och återställningar har testats.
- [ ] Planer är korta, aktuella och lagras också offline.
- [ ] Roller och ersättare är namngivna.
- [ ] Vi kör övningar regelbundet och följer fynd till avslut.
- [ ] Leverantörers kontinuitetsarrangemang är kända och testade där det är möjligt.

## AI-prompter

**Kontrollera en plan för luckor.**

```text
Here is our continuity plan for [service]: [paste]. Here is the list of its dependencies: [paste].
List dependencies that the plan does not mention, steps that rely on a person without a named deputy, and steps that assume a system that may be down. Do not rewrite the plan.
List what you are unsure of.
```

**Utforma en scenarioövning.**

```text
Our context: [type of organization, key services]. Scenario theme: [for example, ransomware, data center loss].
Draft a 90-minute discussion exercise with a timeline of events, six decision points, questions for each role, and what to record. Do not use real names or systems unless I give them.
List what you are unsure of.
```

**Sammanfatta resultat från ett återställningstest.**

```text
Here are the notes from a restore test: [paste with times and problems].
List what took longest, what failed, the dependencies discovered, and the actions to consider, with the owner role for each. Do not invent causes.
List what you are unsure of.
```

## AI-färdigheter

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md): använd för att planera hur kritiska funktioner fortsätter.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md): använd för att planera återställning av system och data.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): använd för att utforma och köra återställningstester.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): använd för att planera kommunikation under ett avbrott.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): använd för att testa felbeteende på ett säkert sätt.

## Viktiga källor

- ISO 22301, Security and resilience — Business continuity management systems: den internationella standarden; läs den aktuella utgåvan hos utgivaren.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken hantering av tjänstekontinuitet.
- Wikipedia, "Business continuity planning" och "IT disaster recovery": översikter av idéerna och termerna.
- Wikipedia, "Chaos engineering": praktiken att testa fel avsiktligt.

## Referenser

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
