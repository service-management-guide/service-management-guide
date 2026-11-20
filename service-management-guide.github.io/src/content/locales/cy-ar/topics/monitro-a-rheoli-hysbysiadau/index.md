# Monitro a Rheoli Hysbysiadau

**Mae monitro a rheoli hysbysiadau (event management) yn gwylio gwasanaethau fel bod yr unigolyn iawn yn clywed am broblemau go iawn yn gynnar ac nad oes neb yn cael ei ddeffro gan sŵn; maent yn gweithio pan fydd rhybuddion yn disgrifio'r hyn y mae defnyddwyr yn ei deimlo, pob rhybudd â gweithred, a chyfaint yr hysbysiadau'n cael ei gadw'n ddigon isel i bobl ymddiried ynddo.**

## Pam mae hyn yn bwysig

Dylai'r arwydd cyntaf o drafferth ddod o'ch systemau eich hun, nid gan ddefnyddiwr. Dyna addewid monitro: mae iechyd gwasanaeth yn cael ei arsylwi'n barhaus a sylwir ar wyriad cyn i'r rhan fwyaf o ddefnyddwyr sylwi arno. Yn ymarferol, mae llawer o dimau'n canfod bod defnyddwyr yn dal i adrodd problemau'n gyntaf, tra bo'r tîm wedi'i gladdu mewn rhybuddion nad oes neb yn gweithredu arnynt.

Dylunio yw'r gwahaniaeth rhwng y ddau brofiad. Mae gosodiad monitro sy'n codi rhybudd am bob trothwy a groesir yn dysgu ei dderbynwyr i anwybyddu rhybuddion. Mae Wikipedia yn disgrifio hyn fel blinder rhybuddion (alarm fatigue), ffenomen a astudiwyd gyntaf mewn ysbytai, lle mae staff sy'n agored i ormod o larymau yn mynd yn ansensitif ac yn colli'r rhai pwysig. Mae gosodiad sy'n mesur yr hyn y mae defnyddwyr yn ei brofi, yn rhybuddio dim ond pan fo angen gweithredu, ac yn rhoi cyd-destun i'r ymatebydd yn troi monitro yn system rhybudd cynnar.

Mae gan fonitro hefyd rôl fwy na dal methiannau. Mae'n darparu'r data ar gyfer cynllunio capasiti, ar gyfer gwaith perfformiad, ar gyfer gwirio bod rhyddhad yn iach, ac ar gyfer penderfynu beth i'w wella. Mae'r pwnc hwn yn disgrifio'r eirfa a'r arferion sy'n gwahaniaethu monitro defnyddiol oddi wrth sŵn. Mae'n cysylltu'n agos â rheoli digwyddiadau (Pwnc 3.2 — Rheoli Digwyddiadau), argaeledd a chapasiti (Pwnc 3.11 — Argaeledd, Capasiti a Pherfformiad), ac arsylwadwyedd (Pwnc 7.4 — Arsylwadwyedd a Thelemetreg).

## Cysyniadau craidd

**Monitro.** Casglu, prosesu a defnyddio data am gyflwr gwasanaethau a'u cydrannau. Mae Wikipedia yn disgrifio monitro systemau a monitro rhwydwaith fel yr arferion o wylio systemau am namau a pherfformiad. Mae monitro'n ateb cwestiynau hysbys: a yw i fyny, a yw'n gyflym, a yw'n llawn?

**Hysbysiad (event).** Yn ITIL 4, unrhyw newid cyflwr sydd â phwysigrwydd ar gyfer rheoli gwasanaeth neu eitem gyfluniad arall. Gall hysbysiadau fod yn wybodaethol, yn rhybudd, neu'n eithriad. Mae llawer o hysbysiadau yn normal ac nid oes angen gweithredu arnynt; mae'r arfer yn ymwneud â phenderfynu pa rai sydd.

**Rhybudd (alert).** Hysbysiad bod angen sylw ar ddigwyddiad (event). Ni ddylai pob hysbysiad ddod yn rhybudd. Mae rhybudd da yn dweud wrth unigolyn fod angen gweithredu nawr, beth sydd o'i le, a ble i edrych.

**Blinder rhybuddion.** Colli sensitifrwydd i rybuddion pan fo gormod neu pan fo gormod yn ffug. Gweler erthygl Wikipedia ar flinder rhybuddion. Mae'r arwyddion yn cynnwys rhybuddion a gydnabyddir heb eu darllen, sianeli wedi'u tawelu, a digwyddiadau a ganfyddir yn hwyr. Problem ddylunio ydyw, nid problem disgyblaeth.

**Metrigau, logiau ac olrhain.** Tri math cyffredin o delemetreg. Mae metrigau yn fesuriadau rhifol dros amser, fel cyfradd ceisiadau neu ddefnydd cof. Mae logiau yn gofnodion â stamp amser o ddigwyddiadau. Mae olrhain yn dilyn cais trwy rannau system ddosbarthedig. Mae erthyglau Wikipedia ar delemetreg a rheoli logiau yn disgrifio syniadau cyffredinol. Gyda'i gilydd maent yn cefnogi monitro a'r ymchwilio dyfnach a drafodir o dan arsylwadwyedd.

**Arsylwadwyedd.** Y gallu i ddeall cyflwr mewnol system o'i hallbynnau. Mae Wikipedia yn disgrifio arsylwadwyedd mewn meddalwedd fel ymestyn monitro i gwestiynau na ragwelwyd gennych. Mae'r ddau'n gorgyffwrdd: mae monitro'n gwylio am fethiant hysbys; mae arsylwadwyedd yn eich helpu i ymchwilio i rai anhysbys. Gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg.

**Symptomau ac achosion.** Symptom yw'r hyn y mae defnyddwyr neu'r gwasanaeth yn ei brofi, fel ymatebion araf; achos yw'r hyn sydd y tu ôl iddo, fel disg lawn. Mae rhybuddio ar symptomau yn dweud wrthych fod defnyddwyr yn cael eu heffeithio. Mae rhybuddio ar bob achos posibl yn creu sŵn. Mae llawer o dimau'n rhybuddio ar symptomau ac yn defnyddio metrigau lefel achos i ymchwilio.

**Trothwyon a llinellau sylfaen.** Mae trothwy sefydlog, fel "CPU dros 90 y cant", yn syml ac yn aml yn anghywir, oherwydd bod lefelau normal yn amrywio gydag amser a llwyth. Mae llinellau sylfaen yn dysgu beth sy'n normal ar gyfer amser o'r dydd ac yn codi rhybuddion ar wyriad. Mae erthygl Wikipedia ar ganfod anomaleddau yn disgrifio'r syniad a'i ragofalon.

**Cydberthyn hysbysiadau (event correlation).** Cyfuno hysbysiadau cysylltiedig i ddod o hyd i'r broblem sylfaenol, fel bod cant o rybuddion o un gydran sy'n methu yn dod yn un. Mae Wikipedia yn disgrifio cydberthyn hysbysiadau. Gall fod yn seiliedig ar reolau neu ddefnyddio dysgu peirianyddol. Gweler Pwnc 5.2 — AIOps.

**Monitro synthetig a monitro defnyddwyr go iawn.** Mae monitro synthetig yn rhedeg profion sgriptiedig sy'n dynwared defnyddwyr ac yn gwirio'n rheolaidd a yw taith yn gweithio. Mae monitro defnyddwyr go iawn yn cofnodi profiad defnyddwyr gwirioneddol. Mae Wikipedia yn disgrifio'r ddau. Mae gwiriadau synthetig yn dal ymyriadau ar adegau tawel; mae data defnyddwyr go iawn yn dangos yr hyn y mae pobl yn ei brofi mewn gwirionedd.

**Rheoli perfformiad cymwysiadau.** Offer ac arferion ar gyfer monitro perfformiad ac argaeledd cymwysiadau, gan gynnwys amseroedd ymateb a chyfraddau gwallau. Mae Wikipedia yn disgrifio'r maes.

**Gweithredadwyedd.** Dylai fod gan bob rhybudd weithred ddiffiniedig, hyd yn oed os mai'r weithred yw "gwiriwch y llawlyfr gweithredu". Os na all unigolyn ddweud beth i'w wneud, dylid tynnu'r rhybudd neu ei droi'n adroddiad. Gweler Pwnc 3.9 — Rheoli Gwybodaeth.

**Cyfeirio ac uwchgyfeirio.** Mae rhybuddion yn mynd i'r bobl all weithredu, gan ddefnyddio amserlenni ar alwad, gydag uwchgyfeirio os nad oes cydnabyddiaeth. Gweler Pwnc 3.2 — Rheoli Digwyddiadau.

**Rheoli hysbysiadau ac ITIL.** Mae ITIL 4 yn disgrifio "monitro a rheoli hysbysiadau" fel arfer sy'n arsylwi gwasanaethau a chydrannau gwasanaeth yn systematig, ac yn cofnodi ac yn adrodd ar newidiadau cyflwr dethol. Mae'r pwyslais ar benderfynu pa hysbysiadau sy'n bwysig a beth i'w wneud am bob un.

**Sut mae'r lensys yn ffitio.** Monitro yw ochr adborth cyflawni parhaus: mae'n dangos a yw newid yn iach. Mae arfer ystwyth yn trin ansawdd rhybuddion fel eitem ôl-groniad. Gall AI leihau sŵn, cydberthyn hysbysiadau, a chrynhoi, o dan adolygiad. Gall awtomeiddio weithredu ar hysbysiadau a ddeellir yn dda. Mae dadansoddeg yn dangos tueddiadau a chost sŵn.

## Arferion gorau

1. **Rhybuddiwch ar yr hyn y mae defnyddwyr yn ei deimlo.** Dechreuwch â symptomau, fel ceisiadau a fethodd, tudalennau araf, a swyddi a fethodd. Defnyddiwch fetrigau achos ar gyfer diagnosis, nid ar gyfer tudalennu, oni bai bod achos yn rhybudd cynnar dibynadwy.
2. **Gwnewch bob rhybudd yn weithredadwy.** Ar gyfer pob rhybudd, ysgrifennwch beth mae'n ei olygu, pwy sy'n gweithredu, a beth maent yn ei wneud yn gyntaf. Cysylltwch ef â llawlyfr gweithredu. Tynnwch rybuddion heb weithred.
3. **Cadwch y cyfaint yn isel.** Cyfrwch y rhybuddion y mae pob person ar alwad yn eu cael fesul sifft, a gosodwch derfyn. Adolygwch y rhybuddion mwyaf swnllyd bob wythnos a'u trwsio neu eu dileu.
4. **Tudalennwch am frys, tocyn ar gyfer y gweddill.** Defnyddiwch alwad neu dudalen dim ond pan fydd yn rhaid i rywun weithredu nawr. Anfonwch signalau eraill i giw neu adroddiad. Diffiniwch y gwahaniaeth yn glir.
5. **Defnyddiwch linellau sylfaen yn ofalus.** Lle mae normal yn newid gydag amser a llwyth, defnyddiwch drothwyon sy'n ymwybodol o amser neu ganfod anomaleddau, ac adolygwch hwy. Peidiwch ag ymddiried mewn model na allwch ei egluro i'r bobl sy'n ymateb.
6. **Grwpiwch rybuddion cysylltiedig.** Cydberthynwch hysbysiadau o'r un achos, a rhwystrwch rybuddion i lawr yr afon pan fydd dibyniaeth yn methu. Anfonwch un neges gyda chyd-destun.
7. **Gwiriwch o safbwynt y defnyddiwr.** Ychwanegwch wiriadau synthetig ar gyfer teithiau allweddol, a defnyddiwch ddata defnyddwyr go iawn ar gyfer profiad. Gall gweinydd fod "i fyny" tra na all defnyddwyr fewngofnodi.
8. **Monitrwch y monitro.** Profwch fod rhybuddion yn cyrraedd pobl, fod y system dudalennu'n gweithio, a bod methiant tawel monitro ei hun yn cael ei ganfod. Rhedwch brofion o'r dechrau i'r diwedd o bryd i'w gilydd.
9. **Adolygwch ar ôl digwyddiadau.** Gofynnwch pa rybudd a daniodd, pa un a ddylai fod wedi, a pha rai oedd yn sŵn. Addaswch yn yr adolygiad digwyddiad. Gweler Pwnc 3.3 — Rheoli Problemau.
10. **Rhannwch ddangosfyrddau a chyd-destun.** Rhowch fynediad i ddatblygwyr, gweithrediadau a chymorth at yr un data, a dangoswch effaith newidiadau diweddar. Osgowch ddangosfyrddau nad oes neb yn eu defnyddio.

## Cwestiynau i'w trafod gyda'ch tîm

**Beth oedd y digwyddiad diwethaf y dywedodd defnyddwyr wrthym amdano cyn i'n monitro wneud, a pham?**
Mae hyn yn canfod mannau dall. Edrychwch ar yr hyn a welodd defnyddwyr. Disgwyliwch fylchau ar ymylon teithiau. Dilynwch trwy ddewis un gwiriad sy'n wynebu defnyddwyr i'w ychwanegu.

**Faint o rybuddion a gafodd ein pobl ar alwad y mis diwethaf, a faint oedd angen gweithredu?**
Cyfrwch gyda'ch gilydd. Os nad oes neb yn gwybod, mae hynny'n ganfyddiad. Disgwyliwch gyfran isel o rybuddion gweithredadwy. Dilynwch trwy ddewis y pum rhybudd mwyaf swnllyd a phenderfynu tynged pob un.

**Pa rybuddion rydym yn eu hanwybyddu, a beth fyddai'n digwydd pe baem yn eu dileu?**
Mae anwybyddu rhybuddion yn arwydd o flinder. Gofynnwch am y tro diwethaf yr oedd pob un o bwys. Dilynwch trwy ddileu neu israddio un, gyda dyddiad adolygu.

**Pwy sy'n cael ei ddeffro am beth, ac a yw pawb yn cytuno ei fod yn werth eu deffro?**
Cytunwch ar y meini prawf ar gyfer tudalennu. Disgwyliwch anghytundeb, sy'n ddefnyddiol. Dilynwch trwy ysgrifennu rheol un paragraff a rhoi cynnig arni am fis.

**Sut y byddem yn gwybod pe bai ein monitro ei hun yn rhoi'r gorau i weithio?**
Mae hyn yn profi meta-fonitro. Disgwyliwch dawelwch neu ateb amwys. Dilynwch trwy ychwanegu gwiriad curiad calon neu rybudd prawf dyddiol a chytuno pwy sy'n ei wylio.

**Beth fydden ni eisiau i AI ei wneud gyda'n rhybuddion, a beth sy'n rhaid aros yn benderfyniad dynol?**
Gall AI grwpio rhybuddion, awgrymu achosion, a chrynhoi cyd-destun. Gall hefyd atal rhybudd go iawn. Gofynnwch pa gamau sydd angen cymeradwyaeth. Dilynwch trwy ddewis treial wedi'i gyfyngu i grwpio a chrynhoi, gydag adolygiad o'r hyn y mae wedi'i guddio.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm technoleg gweithrediadau maes awyr rhanbarthol yn monitro trin bagiau, systemau cofrestru, ac arddangosfeydd gwybodaeth hedfan. Mae'r tîm o chwech yn cael tua 400 o rybuddion y dydd. Mae staff ar alwad yn dweud eu bod yn cipolwg ar yr hysbysiadau ac yn eu tawelu gan amlaf. Y mis diwethaf aeth switsh rhwydwaith a fethodd mewn terfynell heb ei sylwi am 40 munud, nes i deithwyr gwyno bod arddangosfeydd yn wag.

Mae arweinydd y tîm yn cymryd wythnos i edrych ar y data. O'r 400 rhybudd dyddiol, daw tua 350 o 12 rheol, fel rhybuddion disg ar ddyfeisiau sy'n glanhau eu hunain, a fflapiau rhyngwyneb ar borth nas defnyddir. Dim ond tua 15 bob dydd sydd angen gweithredu dynol. Mae'r arweinydd a'r tîm yn cytuno ar dri newid. Maent yn dileu neu'n israddio'r 12 rheol swnllyd i adroddiad dyddiol. Maent yn ychwanegu dau wiriad synthetig sy'n llwytho'r dudalen arddangos a'r sgrin gofrestru o bob terfynell bob munud ac yn tudalennu os yw'r naill neu'r llall yn methu ddwywaith yn olynol. Ac maent yn sefydlu cydberthyn fel bod switsh a fethodd yn cynhyrchu un rhybudd yn enwi'r arddangosfeydd yr effeithir arnynt, nid cant.

Dros y mis nesaf, mae rhybuddion ar alwad yn gostwng i tua 20 y dydd, a chaiff y methiant switsh nesaf ei ganfod o fewn tri munud, gydag un dudalen sy'n rhestru'r terfynellau yr effeithiwyd arnynt. Yn yr adolygiad wythnosol mae'r tîm yn canfod un rhybudd a gafodd ei atal gan gydberthyn pan na ddylai fod wedi, ac yn cywiro'r rheol.

Beth sy'n newid: mae pobl yn ymddiried yn y tudalennau ac yn ymateb. Beth sy'n parhau'n anodd: mae offer cyflenwr trin bagiau yn anfon ei rybuddion ei hun mewn fformat na all y tîm ei hidlo, felly mae rhywfaint o sŵn yn parhau; mae ychydig o staff sifft nos yn poeni na fydd yr adroddiad dyddiol yn cael ei ddarllen; ac nid oes neb eto wedi profi beth sy'n digwydd os yw'r system fonitro ei hun yn methu. Mae'r arweinydd yn trefnu dril ac yn ychwanegu rhybudd prawf dyddiol.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Adeiladwch y signalau i mewn: metrigau, logiau ac olrhain ystyrlon, a gwiriadau iechyd sy'n adlewyrchu teithiau defnyddwyr. Ysgrifennwch y llawlyfr gweithredu gyda'r rhybudd. Gwyliwch effeithiau pob rhyddhad.

### Timau gwasanaeth a gweithrediadau

Byddwch yn berchen ar ansawdd rhybuddion. Adolygwch y rhybuddion mwyaf swnllyd yn wythnosol, gwarchodwch bobl rhag gorlwytho, a gwiriwch fod gan bob tudalen weithred. Profwch y llwybrau y mae rhybuddion yn eu cymryd.

### Arweinyddiaeth a llywodraethu

Gofynnwch am gyfrif y rhybuddion gweithredadwy, nid nifer y monitorau. Ariennwch amser i drwsio rhybuddion swnllyd. Trinwch dudalennau mynych y tu allan i oriau fel cost i staff ac i ansawdd.

### Cwsmeriaid a defnyddwyr

Dylech glywed am broblemau gan y darparwr cyn i chi sylwi arnynt, a chael gwybod beth sy'n cael ei effeithio. Adroddwch yr hyn a welwch, gydag amseroedd, a dywedwch wrth y darparwr ble y methodd monitro ei ganfod.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Trinwch rybuddion a dangosfyrddau fel rhan o'r cynnyrch: gwellwch hwy mewn camau bach ar ôl pob digwyddiad a rhyddhad. Adolygwch hwy gyda'r bobl sy'n ymateb. Rhybudd: mae ychwanegu monitorau ar gyfer pob nodwedd newydd heb dynnu hen rai yn cynyddu sŵn.

### AI

Gall AI ddysgu patrymau normal, grwpio rhybuddion cysylltiedig, awgrymu achosion tebygol, a chrynhoi storm o rybuddion, gyda pherchennog a phenderfyniadau dynol. Profwch ef yn erbyn digwyddiadau'r gorffennol. Rhybudd: gall model sy'n atal rhybuddion guddio methiant prin ond go iawn; mesurwch yr hyn a ataliodd a'r hyn a gollwyd. Gweler Pwnc 5.2 — AIOps.

### Awtomeiddio

Awtomeiddiwch ymatebion i hysbysiadau a ddeellir yn dda, fel ailgychwyn proses sy'n methu, a chyfeirio a chyfoethogi rhybuddion, gyda therfynau a logiau. Rhybudd: gall awto-adfer sy'n ailgynnig am byth guddio system sy'n methu neu ei gwneud yn waeth; ychwanegwch derfynau cyfradd ac uwchgyfeirio. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

### Dadansoddeg

Tracwch gyfaint rhybuddion, cyfran a oedd yn weithredadwy, amser i gydnabod, a digwyddiadau a ganfuwyd gan fonitro yn erbyn gan ddefnyddwyr. Rhybudd: gellir camddefnyddio cyfrifon rhybuddion yn unig trwy godi trothwyon nes nad oes dim yn tanio; gwiriwch yn erbyn digwyddiadau. Gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Rhybuddio ar bopeth.** Mae pobl yn tawelu'r sianel. Rhybuddiwch ar symptomau a thynnwch y gweddill.
- **Rhybuddion heb weithred.** Nid yw ymatebwyr yn gwybod beth i'w wneud. Cysylltwch â llawlyfr gweithredu neu dilëwch y rhybudd.
- **Trothwyon sefydlog yn unig.** Larymau ffug ar adegau prysur. Defnyddiwch ddulliau sy'n ymwybodol o amser neu linell sylfaen yn ofalus.
- **Defnyddwyr yn darganfod yn gyntaf.** Bylchau mewn gwiriadau sy'n wynebu defnyddwyr. Ychwanegwch fonitro synthetig a defnyddwyr go iawn.
- **Dim meta-fonitro.** Mae'r monitro'n methu'n dawel. Ychwanegwch guriad calon a driliau.
- **Dangosfyrddau'n gordyfu.** Nid oes neb yn edrych arnynt. Cadwch ychydig sy'n cefnogi penderfyniadau.
- **Ymddiried mewn model anhryloyw.** Ni all ymatebwyr egluro beth a wnaeth. Cadwch reolau a rhesymeg yn adolygadwy.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Dylunio rhybuddion | Pob trothwy yn rhybuddio | Rhai rhybuddion allweddol | Rhybuddion gweithredadwy, yn seiliedig ar symptomau gyda llawlyfrau gweithredu | Ansawdd rhybuddion yn cael ei fesur a'i adolygu'n wythnosol | Rhybuddion yn cael eu haddasu a'u cydberthyn ar draws gwasanaethau |
| Cwmpas | Gweinyddion yn unig | Rhai cymwysiadau | Teithiau defnyddwyr yn cael eu gwirio'n synthetig a chan ddata defnyddwyr go iawn | Cwmpas yn cael ei adolygu ar ôl digwyddiadau | Cwmpas yn gyson ar draws y stad a chyflenwyr |
| Sŵn | Llethol | Ymwybodol | Cyfaint wedi'i gyfyngu a'i adolygu | Sŵn yn cael ei fesur ac yn gostwng | Sŵn yn cael ei reoli gan gydberthyn ac awtomeiddio gyda goruchwyliaeth |
| Ymateb | Â llaw | Tudalennau i dîm | Wedi'i gyfeirio gydag uwchgyfeirio | Amser ymateb yn cael ei dracio | Camau diogel wedi'u hawtomeiddio gyda rheolaeth ddynol |

## Rhestr wirio

- [ ] Mae rhybuddion yn seiliedig ar symptomau y mae defnyddwyr yn eu teimlo.
- [ ] Mae gan bob rhybudd weithred ddiffiniedig a llawlyfr gweithredu cysylltiedig.
- [ ] Mae cyfaint rhybuddion ar alwad fesul sifft yn cael ei fesur a'i gyfyngu.
- [ ] Rydym yn adolygu'r rhybuddion mwyaf swnllyd bob wythnos.
- [ ] Mae gan deithiau defnyddwyr allweddol wiriadau synthetig.
- [ ] Mae rhybuddion cysylltiedig yn cael eu cydberthyn.
- [ ] Rydym yn profi bod rhybuddion yn cyrraedd pobl a bod methiant monitro'n cael ei ganfod.
- [ ] Mae gan AI neu awtomeiddio sy'n gweithredu ar rybuddion berchennog, terfynau ac adolygiad.

## Anogwyr AI

**Graddio rhybuddion swnllyd.**

```text
Dyma restr o reolau rhybuddio gyda nifer y troeon y tanio pob un y mis diwethaf a faint a arweiniodd at weithredu: [gludwch].
Graddiwch hwy yn ôl nifer y tanio nad oedd yn weithredadwy, rhestrwch y deg uchaf, a rhowch un cwestiwn fesul rheol i'w ofyn ynghylch a ddylid ei thynnu, ei newid, neu ei chadw. Peidiwch ag argymell dileu unrhyw un.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio testun rhybudd.**

```text
Y sefyllfa i rybuddio arni: [disgrifiwch]. Pwy sy'n gweithredu: [rôl]. Y gwiriadau cyntaf y dylent eu gwneud: [rhestrwch].
Drafftiwch deitl rhybudd (o dan 80 nod) a chorff (o dan 80 gair) sy'n dweud beth sydd o'i le, beth y gallai defnyddwyr fod yn ei brofi, a'r cam cyntaf, gyda dalfan dolen ar gyfer y llawlyfr gweithredu. Peidiwch â dyfalu achosion.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Profi rheol cydberthyn.**

```text
Dyma reol cydberthyn: [disgrifiwch]. Dyma restr o hysbysiadau diweddar gyda stampiau amser a ffynonellau: [gludwch].
Rhestrwch pa hysbysiadau y byddai'r rheol yn eu grwpio, pa rai y byddai'n eu hatal, ac unrhyw achos lle gallai problem ar wahân go iawn gael ei chuddio. Peidiwch â chynnig rheol newydd.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i ysgrifennu'r weithred sy'n mynd gyda phob rhybudd.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): defnyddiwch i archwilio patrymau anarferol mewn metrigau.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): defnyddiwch i ddewis dangosyddion rhybudd cynnar.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): defnyddiwch i ddylunio trefniadau ar alwad cynaliadwy.

## Prif ffynonellau

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), pennod ar fonitro systemau dosbarthedig, am ddim yn sre.google.
- Rob Ewaschuk, "My Philosophy on Alerting" (2013): traethawd byr adnabyddus ar rybuddio ar sail symptomau.
- Wikipedia, "Alarm fatigue" a "Observability (software)": trosolygon o syniadau allweddol.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o'r arfer monitro a rheoli hysbysiadau.

## Cyfeiriadau

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
