# Hantering av hårdvarutillgångar

**Hantering av hårdvarutillgångar följer fysisk teknik från inköp till avyttring: den vet vad varje enhet är, vem som har den, hur den är konfigurerad och skyddad, när den bör bytas ut och hur den lämnar organisationen på ett säkert sätt; hållbarhet och dataskydd är lika mycket en del av den som kostnad.**

## Varför det här är viktigt

Hårdvara är den del av it som du kan tappa. Den försvinner på tåg, glöms i taxibilar, stjäls ur bilar, glöms i skåp och skickas hem av dem som slutar. Den blir också gammal. En flotta som köptes ett enda år slits ut tillsammans, och kostnaden för att hålla fallerande enheter vid liv växer tills en utbytesvåg landar i en enda budget. Hårdvara håller data, och en enhet som lämnar organisationen utan att raderas kan läcka dem.

Miljön lägger till en annan dimension. Elektroniska enheter tillverkas med betydande energi och material och blir elektronikavfall när de kasseras. Wikipedia beskriver elektronikavfall som ett växande miljöproblem, med faror vid felaktig hantering. Att förlänga enheters användbara liv, reparera, återanvända och återvinna ansvarsfullt minskar både kostnad och skada.

Hantering av hårdvarutillgångar (HAM) är den del av it-tillgångshantering som handlar om fysiska enheter: bärbara datorer, stationära datorer, mobiltelefoner, servrar, nätverksutrustning, kringutrustning och de specialiserade enheterna i en viss bransch. Den besvarar de praktiska frågorna: vad har vi, var är det, vem har det, är det säkert, är det värt att behålla och hur lämnar det oss? Det här ämnet bygger på ämne 4.1 — Tillgångshantering och hänger ihop med konfigurationshantering (ämne 4.4 — Konfigurationshantering), informationssäkerhet (ämne 3.13 — Informationssäkerhetshantering) och hållbarhet (ämne 8.2 — Hållbar och ansvarsfull tjänstehantering).

## Grundbegrepp

**Hårdvarans livscykel.** Skedena omfattar planera, upphandla, ta emot och märka, konfigurera och driftsätta, driva och stödja, förnya eller avveckla samt avyttra. Varje skede involverar olika team, så överlämningar spelar roll. Wikipedia-artiklarna om tillgångsspårning och garantier beskriver delar av detta.

**Standardbyggen och konfiguration.** En standardkonfiguration för enheter, med godkänd programvara och säkerhetsinställningar, gör driftsättning snabbare och support enklare. Nollberöringsprovisionering (zero-touch provisioning), beskriven på Wikipedia, låter en enhet konfigureras automatiskt när den första gången ansluter. Se ämne 6.5 — Självbetjäning och automatiserad leverans.

**Slutpunktshantering.** Verktyg som registrerar, konfigurerar, uppdaterar och skyddar bärbara datorer, telefoner och surfplattor från en central konsol. Wikipedia beskriver mobilenhetshantering och enhetlig slutpunktshantering. De levererar också data om vad som används och dess hälsa.

**Egen enhet till jobbet (BYOD).** Policyer som låter personal använda personliga enheter för arbete. Wikipedia beskriver BYOD. Det minskar hårdvarukostnaden och väcker frågor om säkerhet, support och integritet. Avgör vad som är tillåtet, vad som hanteras och vad som händer när någon slutar.

**Identifiering och förvar.** Varje enhet har en identitet, till exempel en tillgångsetikett och ett serienummer, och en förvarare. Register över flyttar och överlämningar förebygger förlust. Se ämne 4.1 — Tillgångshantering.

**Garanti och support.** Hårdvara kommer med garantier och supportavtal som tar slut på kända datum. Att följa dem möjliggör reparationer medan de täcks och informerar beslut om förnyelse. Wikipedia beskriver garantier.

**Skick och hälsa.** Enheter rapporterar en del av sitt eget skick: batterihälsa, diskstatus och felindikatorer. Wikipedia beskriver SMART, diskövervakningstekniken. Att använda dessa data möjliggör utbyte före fel och minskar oplanerade avbrott.

**Förnyelsecykler.** Det planerade utbytet av hårdvara vid en viss ålder eller ett visst skick. Vanliga cykler är tre till fem år för bärbara datorer, och ofta längre för nätverksutrustning, men rätt intervall beror på användning, kostnaden för fel och takten i programvarukrav. Att byta för tidigt slösar pengar och resurser; för sent ökar fel och säkerhetsrisk. Basera intervallet på data.

**Reservdelar och reparation.** Att ha reservenheter och delar förkortar återställningen. Reparation håller enheter användbara längre. Wikipedia beskriver rörelsen rätt till reparation, som hävdar att ägare och oberoende verkstäder bör kunna reparera enheter. Beakta reparerbarhet vid inköp.

**Dataskydd.** Enheter bör använda diskkryptering, så att en förlorad enhet inte exponerar data, och raderas före återanvändning eller avyttring. Wikipedia beskriver diskkryptering och dataradering. Använd metoder som motsvarar datans känslighet och, där det krävs, skaffa ett raderingsintyg. Se ämne 3.13 — Informationssäkerhetshantering.

**Avyttring och återanvändning.** Alternativen omfattar intern återanvändning, donation, vidareförsäljning, renovering, återvinning och förstöring. Välj partner som följer reglerna om avfall och data. I Europeiska unionen sätter WEEE-direktivet, beskrivet på Wikipedia, regler för avfall från elektrisk och elektronisk utrustning; Baselkonventionen, också beskriven där, styr förflyttning av farligt avfall mellan länder. Kontrollera lokala regler.

**Miljöavtryck.** Mycket av en enhets utsläpp under livstiden kommer från tillverkning, inte användning. Wikipedia beskriver inbyggd energi (embodied energy). Att behålla enheter längre, reparera dem och köpa renoverade där det passar minskar ofta avtrycket mer än effektivitetsvinster i användning. Angreppssättet cirkulär ekonomi, beskrivet på Wikipedia, syftar till att hålla material i bruk.

**Datacenter och infrastruktur.** Servrar och nätverksutrustning har sin egen livscykel samt el- och kylfrågor. Många organisationer hyr nu i stället för att äga, vilket ändrar tillgångsbilden men inte behovet av att förvalta det som återstår. Se ämne 4.5 — Ekonomistyrning och FinOps.

**Hur linserna passar in.** Hantering av hårdvarutillgångar drar nytta av agil iteration på flottprocessen och av standardbyggen. AI kan förutsäga fel och hjälpa till med matchning av register, under granskning. Automatisering provisionerar, patchar och raderar enheter. Analys visar ålder, fel, utnyttjande och kostnad.

## Bra arbetssätt

1. **Märk och registrera vid ankomst.** Varje enhet får en identitet och ett register när den tas emot, innan någon använder den. Länka inköps-, garanti- och ägardata.
2. **Använd ett standardbygge.** Definiera och underhåll ett litet antal enhetskonfigurationer, med säkerhetsinställningar och godkänd programvara. Automatisera registrering där det går.
3. **Känn förvaret.** Registrera vem som håller varje enhet och uppdatera registret när den flyttas. Kräv kvittens när en enhet utlämnas.
4. **Kryptera och förvalta.** Kräv diskkryptering och registrering i slutpunktshantering för varje enhet. Se till att ni kan låsa eller radera en förlorad enhet på distans och testa att det fungerar.
5. **Planera förnyelse utifrån data.** Använd ålder, felfrekvens och skicksdata för att sätta tidpunkt för utbyte. Jämna ut inköp över åren för att undvika en enda stor våg.
6. **Håll reservenheter och en reparationsväg.** Håll en liten pool av reservenheter för brådskande utbyte och avgör vad som ska repareras eller skickas på service. Kontrollera garantivillkor.
7. **Hämta in enheter från dem som slutar och byter roll.** Länka HR-händelser till uppgifter för att återta eller omfördela utrustning, med tidsfrister och uppföljning.
8. **Radera före återanvändning eller avyttring.** Använd en godkänd metod, registrera den och skaffa belägg från alla externa partner. Förlita dig aldrig på att ta bort filer.
9. **Avyttra ansvarsfullt.** Välj återanvändning och renovering före återvinning och använd partner som följer regler om avfall och data. Behåll intyg.
10. **Mät avtrycket och kostnaden.** Följ total kostnad och, där ni kan, miljöpåverkan per enhet och per användare och använd dem i inköpsbeslut.

## Frågor att diskutera i teamet

**Hur gammal är vår flotta, och hur många enheter har passerat sin avsedda livslängd?**
Använd data. Räkna med en lång svans. Fråga vilka fel- och supportkostnaderna är för gamla enheter. Fördjupa genom att planera en stegvis förnyelse.

**Vad händer med en bärbar dator från den dag en person slutar tills den är redo för nästa användare?**
Gå igenom varje steg och fråga var det kan stanna. Räkna med fördröjningar i inhämtning och radering. Fördjupa genom att välja ett steg att snabba upp.

**Om en enhet med känsliga data förlorades i dag, vad skulle skydda datan, och hur vet vi det?**
Kontrollera krypteringsstatus och radering på distans. Räkna med luckor på äldre eller personliga enheter. Fördjupa genom att ta stickprov av enheter för efterlevnad.

**Vilka enheter byter vi enligt schema, och kunde vi behålla fler av dem längre med reparation?**
Fråga vad som driver förnyelsecykeln: garanti, programvarubehov eller vana. Titta på felfrekvenser. Fördjupa genom att pröva en längre cykel för en grupp.

**Hur avyttrar vi hårdvara, och vem bekräftar att data raderades?**
Be om dokument. Räkna med osäkerhet kring partner. Fördjupa genom att granska en avyttringskedja från början till slut.

**Hur kunde AI hjälpa till att förutsäga fel eller stämma av våra register, och vad skulle vi kontrollera för hand?**
AI kan hitta enheter som sannolikt fallerar utifrån hälsodata. Den kan också flagga friska. Fråga vem som äger den och hur dess förutsägelser kontrolleras. Fördjupa genom att testa på förra årets fel.

## I praktiken: ett exempel på tjänstehantering

En regional kommuns it-avdelning förvaltar 3 000 bärbara datorer, 800 telefoner och några hundra servrar och nätverksenheter. Vart tredje år byter den de flesta bärbara datorer i ett enda inköp, vilket belastar budgeten, och den har funnit omkring 200 gamla bärbara datorer i skåp. En färsk revision finner att en omgång enheter som skickats för återvinning saknade register över dataradering.

Hårdvaruansvarig föreslår en förnyelse efter skick. Med hjälp av slutpunktsverktygets batteri- och diskhälsodata, plus ålder och felhistorik, uppskattar hon att omkring 35 procent av de bärbara datorerna vid tre år är i gott skick. Hon sätter en regel: byt vid fyra år eller när hälsan faller under ett tröskelvärde, med ett utjämnat inköp varje kvartal. För skåpen ber hon varje team lämna in oanvända enheter till ett centralt förråd, där de raderas, testas och utlämnas igen eller säljs genom en renoverare som ger ett raderingsintyg.

Hon lägger också till en avgångsutlösare som skapar en inhämtningsuppgift med en tvåveckorsfrist och kräver att slutpunktsverktyget bekräftar att varje återtagen enhet har raderats innan den markeras som tillgänglig.

Efter ett år minskar kommunens utgifter för bärbara datorer med ungefär en femtedel, nästan 150 enheter utlämnas igen och varje återvunnen enhet har ett raderingsregister. Felfrekvensen bland bärbara datorer med förlängd livslängd är något högre, och helpdesken rapporterar fler batteribyten. Det som förblir svårt: en del personal ogillar att behålla äldre enheter medan andra får nya; renoveraren kan inte alltid intyga radering för äldre krypterade diskar; och kommunen har inte mätt miljöeffekten, fastän den räknar med att den är positiv. Ansvarig lägger till en årlig granskning av den förlängda cykeln mot supportkostnad och ber renoveraren om en tydligare raderingsstandard.

## Fyra perspektiv

### Produkt- och leveransteam

Använd standardenheter där ni kan, lämna tillbaka det ni inte längre behöver och håll utvecklingshårdvara registrerad och krypterad. Beakta reparerbarhet och livslängd när ni specificerar utrustning.

### Tjänste- och driftsteam

Håll förteckningen korrekt, registrera och kryptera varje enhet, testa radering på distans och förvalta reserver och reparation. Hantera avyttring med en registrerad förvarskedja.

### Ledning och styrning

Besluta förnyelse- och avyttringspolicy med kostnad, risk och miljöeffekter i sikte. Finansiera processen och en jämn utbytesplan. Be om belägg för dataradering.

### Kunder och användare

Ta hand om din enhet, rapportera förlust genast och lämna tillbaka utrustning när du går vidare eller inte längre behöver den. Tala om problem för supportteamet tidigt så att reparation blir billig.

## Agilitet, AI, automatisering och analys

### Agilitet

Förbättra flottprocessen i små steg med användare: pröva ett nytt bygge med en grupp, justera och utvidga. Se över förnyelseregler med data varje år. Se upp: ständiga ändringar av standardbygget skapar supportarbete; håll det stabilt och förklara ändringar.

### AI

AI kan förutsäga enhetsfel utifrån hälsodata, hjälpa till att matcha register och föreslå vilka enheter som ska förnyas, under granskning. Utse en ägare. Se upp: förutsägelser baserade på få fel kan vara opålitliga; jämför med enkla regler och följ falska larm. Se ämne 5.1 — AI i tjänstehantering.

### Automatisering

Automatisera registrering, konfiguration, patchning, lås och radering på distans samt avgångsuppgifter, med loggar och kontroller. Se upp: en automatisk radering på fel enhet förstör data; bekräfta identitet och behåll säkerhetskopior. Se ämne 6.5 — Självbetjäning och automatiserad leverans.

### Analys

Titta på flottans ålder, felfrekvenser, reparationskostnad, garantistatus, utnyttjande, inhämtningstid för dem som slutar och, där det finns, energi- och utsläppsuppskattningar. Se upp: siffror om utsläpp är oftast uppskattningar med stor osäkerhet; ange metoden. Se ämne 7.3 — Mätning och rapportering och boken *Service Management Metrics*.

## Vanliga felmönster

- **Enheter inte registrerade vid ankomst.** Registren hinner aldrig ikapp. Märk och registrera vid mottagning.
- **Ingen förvarsspårning.** Utrustning försvinner. Registrera vem som håller vad.
- **Okrypterade enheter.** En förlust blir ett intrång. Kräv kryptering och testa radering på distans.
- **Förnyelse i ett enda slag.** Budgetchocker och slöseri. Jämna ut inköp och använd skicksdata.
- **Avyttring utan bevis på radering.** Data lämnar med enheten. Använd godkända metoder och behåll intyg.
- **Att hamstra gamla enheter.** Skåp fylls med lager. Lämna tillbaka, radera och återanvänd eller återvinn.
- **Att ignorera miljöpåverkan.** Avfallet växer. Föredra återanvändning, reparation och ansvarsfull återvinning.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Register och förvar | Inköpslistor | Huvudenheter registrerade | Varje enhet märkt, registrerad och tilldelad | Register stäms av mot upptäckt och granskas | Register korrekta i realtid över platser och leverantörer |
| Skydd | Inkonsekvent | Kryptering på nya enheter | Kryptering, registrering och radering på distans som standard | Efterlevnad övervakas och testas | Skyddet anpassas automatiskt efter risk |
| Förnyelse | Enbart efter ålder | Planerad cykel | Utjämnad förnyelse baserad på skick | Förnyelse justeras utifrån kostnads- och feldata | Förnyelse integrerad med reparation, återanvändning och hållbarhetsmål |
| Avyttring | Informell | Godkänd leverantör | Process för radering, intyg och återvinning | Förvarskedjan granskas | Cirkulärt angreppssätt över flottan och partner |

## Checklista

- [ ] Varje enhet är märkt och registrerad vid ankomst.
- [ ] Vi vet vem som håller varje enhet.
- [ ] Enheter är krypterade och registrerade i hantering, och radering på distans är testad.
- [ ] Förnyelsetidpunkt använder skicks- och feldata.
- [ ] Reserver och en reparationsväg finns.
- [ ] Enheter från dem som slutat hämtas in inom en definierad tid.
- [ ] Enheter raderas före återanvändning eller avyttring, med ett register.
- [ ] Vi väljer återanvändning och ansvarsfull återvinning och följer utfallet.

## AI-prompter

**Hitta kandidater för förnyelse utifrån hälsodata.**

```text
Here is a list of devices with age, battery health, disk health, repair history, and warranty end date, with identifiers removed: [paste].
Group devices into low, medium, and high concern based on the data and the rules I state: [state rules]. List devices that fall in different groups depending on the rule. Do not recommend replacement.
List what you are unsure of.
```

**Skriv ett utkast till en checklista för utrustning vid avgång.**

```text
Our context: [type of organization, device types, management tools]. Our leaver process: [describe].
Draft a checklist for retrieving, wiping, and reissuing a device, with an owner role and deadline for each step, and list the points where equipment is most often lost. Do not invent policy.
List what you are unsure of.
```

**Granska en avyttringsprocess.**

```text
Here is how we dispose of hardware: [describe steps and partners]. Here is what our policy requires: [paste].
List each policy requirement and say whether the described process addresses it, or "not described". Do not assess legal compliance.
List what you are unsure of.
```

## AI-färdigheter

- [configuration-management](../../../../skills/configuration-management/SKILL.md): använd för att länka enheter till tjänster och ägare.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): använd för att planera servrar och infrastruktur.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): använd för att väga val av förnyelse, reparation och återanvändning.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): använd för att fördela ansvar över inköp, it, HR och lokalförvaltning.

## Viktiga källor

- ISO/IEC 19770 (själva standarderna): kraven och vägledningen för it-tillgångshantering; läs de aktuella utgåvorna hos utgivaren.
- PeopleCert, ITIL certification pages: ägarens beskrivning av praktiken it-tillgångshantering.
- Wikipedia, "Electronic waste" och "Circular economy": översikter av miljöaspekterna.
- Wikipedia, "Right to repair": bakgrund till reparerbarhet.

## Referenser

1. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
2. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
3. Right to repair — Wikipedia — https://en.wikipedia.org/wiki/Right_to_repair
4. Data erasure — Wikipedia — https://en.wikipedia.org/wiki/Data_erasure
5. Disk encryption — Wikipedia — https://en.wikipedia.org/wiki/Disk_encryption
6. Mobile device management — Wikipedia — https://en.wikipedia.org/wiki/Mobile_device_management
7. Bring your own device — Wikipedia — https://en.wikipedia.org/wiki/Bring_your_own_device
8. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
9. Warranty — Wikipedia — https://en.wikipedia.org/wiki/Warranty
10. Waste Electrical and Electronic Equipment Directive — Wikipedia — https://en.wikipedia.org/wiki/Waste_Electrical_and_Electronic_Equipment_Directive
11. Embodied energy — Wikipedia — https://en.wikipedia.org/wiki/Embodied_energy
