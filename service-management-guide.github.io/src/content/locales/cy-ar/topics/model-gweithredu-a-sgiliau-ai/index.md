# Model Gweithredu a Sgiliau AI

**Mae model gweithredu AI yn dweud pwy sy'n berchen ar systemau AI, sut y cânt eu hariannu, eu hadeiladu neu eu prynu, eu rhedeg a'u hymddeol, a pha sgiliau sydd eu hangen ar bobl; mae'n gweithio pan reolir pob defnydd AI fel cynnyrch â chylch bywyd, pan fo tîm galluogi bach yn helpu eraill, a phan adeiladir gallu trwy ymarfer, nid cyrsiau yn unig.**

## Pam mae hyn yn bwysig

Anaml y bydd sefydliadau'n mabwysiadu AI mewn ffordd gynlluniedig. Mae un tîm yn prynu offeryn, un arall yn adeiladu prototeip, gwerthwr yn troi nodwedd ymlaen. Mae pob penderfyniad yn gwneud synnwyr yn lleol. Gyda'i gilydd maent yn ffurfio stad na ddyluniodd neb: offer dyblyg, rheolaethau anghyson, perchnogaeth aneglur, a chostau sy'n dod i'r wyneb ar anfonebau. Pan aiff rhywbeth o'i le, nid oes neb yn gwybod pwy sy'n gyfrifol. Pan aiff rhywbeth yn dda, ni all neb ei ailadrodd.

Model gweithredu yw'r ateb i "sut rydym yn gweithio gydag AI fel sefydliad?". Mae'n disgrifio rolau a chyfrifoldebau, sut y gwneir penderfyniadau, sut y caiff gwaith ei ariannu, sut y caiff systemau eu hadeiladu neu eu prynu a'u cadw i redeg, a sut mae pobl yn dysgu. Nid oes rhaid iddo fod yn fawr. Gall model sefydliad bach ffitio ar un dudalen. Yr hyn sy'n bwysig yw bod atebion i'r cwestiynau.

Mae'r angen yn fwy sydyn ar gyfer AI nag ar gyfer llawer o dechnoleg arall oherwydd bod systemau AI yn newid: mae gwerthwyr yn diweddaru modelau, mae data'n symud, ac mae ymddygiad yn drifftio. Mae angen gofal parhaus arnynt, sef yr hyn y mae tîm cynnyrch yn ei ddarparu, nid prosiect sy'n gorffen wrth lansio. Mae'r pwnc hwn yn disgrifio prif elfennau model gweithredu AI a'r sgiliau sy'n mynd gydag ef. Mae'n adeiladu ar berchnogaeth cynnyrch (Pwnc 2.8 — Perchnogaeth Cynnyrch a Gwasanaeth), llywodraethu AI (Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI), a rheolaeth ariannol (Pwnc 4.5 — Rheolaeth Ariannol a FinOps), ac mae'n cysylltu â newid sefydliadol (Pwnc 8.3 — Newid Sefydliadol a Mabwysiadu).

## Cysyniadau craidd

**Model gweithredu.** Disgrifiad o sut mae sefydliad yn cyflawni gwerth: ei strwythur, ei brosesau, ei bobl, ei dechnoleg a'i lywodraethu. Mae Wikipedia yn disgrifio modelau gweithredu. Model gweithredu AI yw'r rhan sy'n cwmpasu sut y caiff AI ei ddewis, ei ariannu, ei adeiladu neu ei brynu, ei redeg, ei lywodraethu a'i wella.

**AI fel cynnyrch.** Mae gan system AI ddefnyddwyr, diben, ôl-groniad, cost a chylch bywyd. Trinwch hi fel cynnyrch â pherchennog, fel y disgrifir ym Mhwnc 2.8 — Perchnogaeth Cynnyrch a Gwasanaeth. Mae'r perchennog yn atebol am ganlyniadau, data, ansawdd a risg, ac am benderfynu pryd i wella neu ymddeol y system.

**Cylch bywyd.** Mae'r camau'n cynnwys nodi cyfle, asesu gwerth a risg, adeiladu neu brynu, profi, defnyddio, gweithredu a monitro, gwella, ac ymddeol. Mae gweithrediadau dysgu peirianyddol (MLOps), a ddisgrifir ar Wikipedia, yn cymhwyso disgyblaeth beirianyddol i gylch bywyd modelau: fersiynu, defnyddio, monitro ac ailhyfforddi. Ar gyfer modelau gwerthwyr, mae'r un camau'n berthnasol gyda llai o rannau technegol a mwy o gontract a monitro.

**Rolau.** Mae rolau nodweddiadol yn cynnwys noddwr gweithredol, perchennog cynnyrch AI ar gyfer pob system, peirianwyr sy'n ei hadeiladu a'i rhedeg, perchnogion data ar gyfer y data y mae'n ei ddefnyddio, partner diogelwch a phreifatrwydd, cynghorydd cyfreithiol, a'r bobl sy'n ei defnyddio ac yr effeithir arnynt ganddi. Mae timau bach yn cyfuno rolau. Enwch hwy, a gwnewch yn glir pwy sy'n penderfynu.

**Tîm galluogi neu ganolfan ragoriaeth.** Grŵp bach sy'n helpu timau eraill i ddefnyddio AI yn dda: mae'n cynnig arweiniad, templedi, offer cymeradwy, hyfforddiant ac adolygiad ar gyfer defnyddiau risg uwch. Mae Wikipedia yn disgrifio canolfannau rhagoriaeth. Y risg yw ei fod yn dod yn dagfa neu'n borth. Mae un da yn gwneud y llwybr diogel yn un hawdd, ac yn gweithio gyda thimau yn hytrach na drostynt.

**Modelau canolog, ffederal a gwreiddiedig.** Mewn model canolog, mae un tîm yn adeiladu ac yn rhedeg AI i bawb. Mewn model gwreiddiedig, mae pob tîm cynnyrch yn gwneud ei un ei hun. Mae model ffederal yn cyfuno llwyfannau a safonau a rennir â pherchnogaeth leol. Mae'r rhan fwyaf o sefydliadau'n gorffen gyda chymysgedd ffederal. Dewiswch yn ôl graddfa'r defnydd, y sgiliau sydd ar gael, a'r risg.

**Adeiladu, prynu, neu gyflunio.** Gellir adeiladu pob defnydd AI yn fewnol, ei brynu fel cynnyrch, neu ei gydosod o fodel a'ch data eich hun. Mae Wikipedia yn disgrifio penderfyniadau adeiladu-neu-brynu fel ffurf ar ddadansoddi cost a budd. Ystyriwch gyfanswm y gost, y risg o ddibyniaeth ar werthwr, rheolaeth ar ddata, cyflymder, a'r sgiliau y byddai eu hangen arnoch. Gweler Pwnc 3.14 — Rheoli Cyflenwyr.

**Ariannu.** Ariennwch systemau AI fel cynhyrchion gyda thimau parhaus lle maent yn bwysig, nid fel prosiectau untro. Cynhwyswch gostau rhedeg, fel ffioedd defnydd, lletya, monitro a chymorth. Tracwch gost fesul achos defnydd a fesul canlyniad. Gweler Pwnc 4.5 — Rheolaeth Ariannol a FinOps.

**Llwyfannau a gwasanaethau a rennir.** Mae cydrannau a rennir, fel porth model cymeradwy, llyfrgell anogwyr a sgiliau, harnais gwerthuso, catalog data a logio, yn lleihau ymdrech ddyblyg ac yn gwneud rheolaeth yn haws. Gweler Pwnc 5.7 — Sgiliau ac Anogwyr AI.

**Sylfeini data.** Mae AI yn dibynnu ar ddata sy'n gywir, hygyrch a llywodraethedig. Mae llawer o fentrau AI yn arafu ar ddata, nid ar fodelau. Gweler Pwnc 7.2 — Sylfeini a Llywodraethu Data.

**Sgiliau a gallu.** Mae angen amrywiaeth o sgiliau ar bobl: deall beth all AI ei wneud a beth na all (a elwir yn aml yn llythrennedd AI, ffurf ar lythrennedd digidol y mae Wikipedia yn ei disgrifio), ysgrifennu anogwyr clir a gwirio canlyniadau, asesu risg, adeiladu a phrofi systemau, a rheoli data. Mae rolau gwahanol angen dyfnder gwahanol. Mae Wikipedia yn disgrifio uwchsgilio ac ailhyfforddi fel dulliau o adeiladu sgiliau.

**Dysgu trwy wneud.** Mae sgiliau'n tyfu fwyaf o ymarfer ar waith go iawn gydag adborth, gyda chefnogaeth hyfforddiant byr ac enghreifftiau. Mae cymunedau ymarfer, a ddisgrifir ar Wikipedia, yn helpu pobl i rannu'r hyn sy'n gweithio. Pârwch ddefnyddwyr profiadol a newydd. Gweler Pwnc 8.5 — Llwybrau Dysgu ac Ardystio.

**Effaith ar bobl a rolau.** Mae AI yn newid tasgau, ac mewn rhai rolau, nifer y bobl sydd eu hangen. Mae Wikipedia yn disgrifio diweithdra technolegol fel pryder a drafodwyd ers tro. Byddwch yn onest â staff ynghylch bwriadau, cynhwyswch hwy yn y dylunio, a chynlluniwch ar gyfer adleoli ac ailsgilio. Gweler Pwnc 8.3 — Newid Sefydliadol a Mabwysiadu.

**Gwerth a chanlyniadau.** Diffiniwch y canlyniad y dylai pob system AI ei wella, fel amser i ddatrys, ansawdd, neu foddhad defnyddwyr, gyda llinell sylfaen a ffordd o fesur. Mae Wikipedia yn disgrifio enillion ar fuddsoddiad a'i derfynau. Gwyliwch am amcangyfrifon arbedion sy'n cyfrif amser a "arbedwyd" ond na chaiff ei ailddyrannu byth.

**Safonau a sicrwydd.** Mae fframweithiau fel ISO/IEC 42001 a Fframwaith Rheoli Risg AI NIST yn disgrifio elfennau system reoli y dylai model gweithredu eu cwmpasu. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

**Treialon a graddio.** Mae proflenni cysyniad yn rhad ac yn aml yn drawiadol. Graddio yw lle mae problemau'n ymddangos: ansawdd data, integreiddio, diogelwch, cost a chymorth. Mae Wikipedia yn disgrifio proflenni cysyniad. Cynlluniwch ar gyfer y symud o dreial i gynhyrchu o'r dechrau, gan gynnwys pwy fydd yn ei redeg.

**Sut mae'r lensys yn ffitio.** Mae'r model gweithredu yn trefnu'r lens AI. Mae arfer ystwyth yn awgrymu timau cynnyrch parhaus a threialon byr. Mae awtomeiddio a dadansoddeg yn gymdogion: mae awtomeiddio yn gweithredu ar allbynnau AI, ac mae dadansoddeg yn darparu'r data a'r mesurau.

## Arferion gorau

1. **Trinwch bob system AI bwysig fel cynnyrch.** Enwch berchennog, tîm, ôl-groniad, cyllideb a chylch bywyd, gan gynnwys ymddeol. Adolygwch werth a risg pob system yn rheolaidd.
2. **Ysgrifennwch y rolau a'r hawliau penderfynu.** Dywedwch pwy sy'n noddi, pwy sy'n berchen ar bob system, pwy sy'n cymeradwyo defnyddiau risg uwch, a phwy all stopio un. Cadwch ef i un dudalen.
3. **Sefydlwch dîm galluogi bach.** Rhowch fandad iddo i ddarparu arweiniad, offer, hyfforddiant ac adolygiad, a mesurwch ef ar faint mae'n helpu timau, nid ar faint o byrth y mae'n eu rhedeg.
4. **Dewiswch adeiladu, prynu neu gyflunio ar sail tystiolaeth.** Cymharwch gyfanswm y gost, risg, rheolaeth ar ddata, cyflymder a sgiliau ar gyfer pob achos. Cofnodwch y penderfyniad ac ailedrychwch arno pan fydd amgylchiadau'n newid.
5. **Ariennwch gostau rhedeg o'r dechrau.** Cyllidebwch ar gyfer ffioedd defnydd, monitro, cymorth a gwelliant, nid yr adeiladu yn unig. Tracwch gost fesul achos defnydd a fesul canlyniad.
6. **Darparwch lwyfannau a rennir.** Cynigiwch offer cymeradwy a gwasanaethau cyffredin ar gyfer mynediad, logio, gwerthuso, ac anogwyr a sgiliau. Gwnewch y llwybr cymeradwy yn gyflymach na'r ffordd osgoi.
7. **Buddsoddwch mewn data.** Enwch berchnogion data, trwsiwch broblemau ansawdd sy'n rhwystro achosion defnydd, a dogfennwch ffynonellau. Dechreuwch gyda'r data y mae ei angen ar yr achosion defnydd cyntaf.
8. **Adeiladwch sgiliau yn ôl rôl.** Cynigiwch hyfforddiant byr, ymarferol i bawb, hyfforddiant dyfnach i adeiladwyr a pherchnogion, ac amser i ymarfer ar dasgau go iawn. Crëwch leoedd i rannu'r hyn sy'n gweithio.
9. **Byddwch yn onest am bobl.** Dywedwch beth rydych yn ei fwriadu ar gyfer rolau a nifer staff, cynhwyswch staff wrth ddylunio ffyrdd newydd o weithio, a chefnogwch y rhai y mae eu gwaith yn newid.
10. **Cynlluniwch y llwybr o dreial i gynhyrchu.** Cyn treial, penderfynwch beth yw llwyddiant, pwy fyddai'n ei redeg, pa reolaethau sydd eu hangen arno, a beth fyddai'n ei gostio ar raddfa. Stopiwch dreialon na allant fodloni'r profion hynny.

## Cwestiynau i'w trafod gyda'ch tîm

**Pwy sy'n berchen ar bob system AI a ddefnyddiwn, a phwy sy'n penderfynu pryd i'w newid neu ei stopio?**
Defnyddiwch y rhestr. Disgwyliwch fylchau. Dilynwch trwy neilltuo perchnogion a chofnodi hawliau penderfynu ar gyfer y tair system bwysicaf.

**Beth ydym eisiau i grŵp AI canolog ei wneud i ni, a beth sy'n rhaid aros gyda phob tîm?**
Trafodwch gymorth yn erbyn rheolaeth. Disgwyliwch farn wahanol rhwng y rhai sydd eisiau safonau a'r rhai sydd eisiau cyflymder. Dilynwch trwy restru tri gwasanaeth y dylai'r grŵp eu darparu.

**Ar gyfer ein pryniant neu adeiladwaith AI diwethaf, a wnaethom gymharu opsiynau, a beth fydden ni'n ei benderfynu heddiw?**
Edrychwch ar y cofnod penderfyniad. Disgwyliwch fawr ddim. Dilynwch trwy gytuno ar dempled byr ar gyfer penderfyniadau adeiladu, prynu neu gyflunio.

**Beth yw costau parhaus ein defnyddiau AI, a phwy sy'n eu talu?**
Gofynnwch am rifau. Disgwyliwch pethau anhysbys, yn enwedig ffioedd defnydd. Dilynwch trwy ddewis un achos defnydd ac adeiladu amcangyfrif cost.

**Pa sgiliau sydd eu hangen ar bobl i ddefnyddio AI yn dda yn eu swyddi, a sut y byddant yn eu cael?**
Gofynnwch yn ôl rôl. Disgwyliwch fylchau mewn gwirio ac wrth ddeall terfynau. Dilynwch trwy gynllunio sesiwn ymarfer ar dasgau go iawn.

**Beth ydym wedi'i ddweud wrth staff am sut y bydd AI yn newid eu gwaith, ac a ydynt yn ei gredu?**
Gofynnwch i staff yn uniongyrchol. Disgwyliwch bryder. Dilynwch trwy gytuno beth all arweinwyr ei ddweud yn onest a beth fyddant yn ei wneud i gefnogi pobl.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae gan asiantaeth diogelu'r amgylchedd genedlaethol 30 defnydd AI wedi'u gwasgaru ar draws ei hadrannau: cynorthwywyr sgwrsio, model sy'n nodi darlleniadau synhwyrydd anarferol, offeryn sy'n crynhoi ymatebion i ymgynghoriadau, a sawl treial a redir gan grwpiau ymchwil. Mae prif swyddog digidol newydd yn canfod bod tair adran yn talu am wasanaethau trawsgrifio tebyg, bod dau dreial wedi bod yn rhedeg ers dros flwyddyn heb benderfyniad, ac na all neb ddweud faint y mae'r asiantaeth yn ei wario ar AI.

Mae hi'n ffurfio tîm galluogi bach o bedwar, wedi'u tynnu o TG, data, diogelwch a'r adran gyfreithiol. Ei swydd gyntaf yw'r rhestr, a gwblhawyd mewn mis. Yr ail yw model gweithredu un dudalen: mae gan bob defnydd AI berchennog a enwyd yn y busnes; mae'r tîm galluogi yn darparu porth model cymeradwy gyda logio, llyfrgell o anogwyr a sgiliau wedi'u hadolygu, ac adolygiad risg ar gyfer defnyddiau risg ganolig ac uchel o fewn deg diwrnod gwaith; ac mae cyfarfod portffolio chwarterol yn penderfynu pa dreialon i'w graddio, eu newid neu eu stopio.

Mae'r cyfarfod portffolio yn stopio pum treial sydd heb berchennog na mesur, ac yn cyfuno'r tri chontract trawsgrifio yn un. Ar gyfer y model anghysondebau synhwyrydd, sy'n cefnogi penderfyniadau am rybuddion llygredd, mae'r perchennog yn comisiynu adolygiad o ansawdd data ac yn sefydlu monitro ar gyfer drifft. Mae'r cyllid ar gyfer y ddwy system fwyaf gwerthfawr yn symud o gyllidebau prosiect i gyllideb tîm flynyddol, gan gynnwys ffioedd defnydd.

O ran sgiliau, mae'r tîm yn cynnig sesiwn ymarferol dwy awr i'r holl staff ar ddefnyddio AI yn ddiogel, a chwrs hwy i'r 40 o bobl sy'n adeiladu neu'n berchen ar systemau. Mae cymuned ymarfer yn cyfarfod yn fisol. Mae'r undeb sy'n cynrychioli staff yn gofyn beth mae AI yn ei olygu i swyddi; mae'r prif swyddog digidol yn ymrwymo'n ysgrifenedig na ddefnyddir y rhaglen i dorri swyddi o fewn dwy flynedd, ac y bydd arbedion amser yn mynd i ôl-groniad o waith archwilio.

Beth sy'n newid: mae gan yr asiantaeth un rhestr, perchnogion clir, ac un lle i ofyn am gymorth. Beth sy'n parhau'n anodd: mae rhai grwpiau ymchwil yn gweld y llwybr adolygu fel brêc ac yn dal i redeg offer anffurfiol; mae costau defnydd yn uwch na'r amcangyfrif ar gyfer dwy system ac ni addaswyd y gyllideb; ac mae'r ymrwymiad ar swyddi yn cyfyngu ar opsiynau y mae cyllid eisiau eu cadw ar agor. Mae'r prif swyddog digidol yn adolygu cyflymder y llwybr a'r gyllideb bob chwarter.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Byddwch yn berchen ar eich systemau AI fel cynhyrchion: ôl-groniad, monitro, costau ac ymddeol. Defnyddiwch lwyfannau a rennir a'r llyfrgell gymeradwy. Gofynnwch i'r tîm galluogi am gymorth yn gynnar.

### Timau gwasanaeth a gweithrediadau

Cymerwch ran yn rhedeg systemau AI ac adroddwch yr hyn a welwch. Dysgwch sut i wirio allbynnau, a dywedwch wrth berchnogion am ddrifft a gwallau. Defnyddiwch yr offer a rennir.

### Arweinyddiaeth a llywodraethu

Noddwch y model, neilltuwch berchnogion, ac ariennwch dimau parhaus a chostau rhedeg. Gofynnwch am y golwg portffolio, gyda gwerth a risg. Byddwch yn onest â staff am yr effaith ar rolau.

### Cwsmeriaid a defnyddwyr

Dylech wybod pwy sy'n gyfrifol am system AI sy'n effeithio arnoch a sut i godi pryder. Gofynnwch sut mae eich adborth yn cyrraedd y perchennog.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Rhedwch gynhyrchion AI gyda thimau parhaus, cylchoedd byr, ac adolygiad rheolaidd gyda defnyddwyr a rhanddeiliaid. Trinwch y model gweithredu ei hun fel rhywbeth i'w wella mewn camau bach. Rhybudd: osgowch lansio rhaglen AI fawr gyda chynllun sefydlog; dechreuwch gydag ychydig o achosion defnydd a dysgwch.

### AI

Mae'r pwnc hwn yn ymwneud â rheoli AI ei hun: perchnogion, cylch bywyd, ariannu a sgiliau. Gall AI helpu gyda dadansoddi portffolio a dogfennaeth, dan adolygiad. Rhybudd: mae tîm galluogi sy'n cymeradwyo popeth neu ddim yn colli hygrededd; graddiwch adolygiad i risg. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

### Awtomeiddio

Awtomeiddiwch borthiannau'r rhestr, adrodd costau, logio a gwiriadau polisi yn y llwyfan a rennir, fel bod y llwybr diogel hefyd yn un hawdd. Rhybudd: mae awtomeiddio sy'n rhwystro defnydd heb ddewis amgen cymeradwy yn gyrru pobl at offer cysgodol. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

### Dadansoddeg

Tracwch y portffolio: nifer y defnyddiau, perchnogion, cost fesul achos defnydd, mesurau gwerth, digwyddiadau, amseroedd adolygu, a sylw sgiliau. Rhybudd: mae cyfrif prosiectau AI neu staff a hyfforddwyd yn gwobrwyo gweithgarwch, nid canlyniadau; pârwch hwy â mesurau gwerth ac ansawdd. Gweler Pwnc 7.3 — Mesur ac Adrodd a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Gwasgariad o offer.** Mae pob tîm yn prynu ei un ei hun. Cadwch restr ac unwch.
- **Systemau heb berchennog.** Nid oes neb yn eu cynnal na'u stopio. Enwch berchnogion ac adolygwch y portffolio.
- **Prosiectau, nid cynhyrchion.** Mae timau'n chwalu ar ôl lansio. Ariennwch dimau parhaus ar gyfer systemau pwysig.
- **Canolfan borthorion.** Mae'r tîm galluogi yn rhwystro gwaith. Gwnewch ef yn wasanaeth gyda thargedau ymateb.
- **Anwybyddu costau rhedeg.** Mae ffioedd defnydd yn synnu'r gyllideb. Cynhwyswch hwy o'r dechrau.
- **Hyfforddiant heb ymarfer.** Mae cyrsiau'n cael eu mynychu a chaiff arferion eu cadw yr un fath. Ymarferwch ar dasgau go iawn.
- **Tawelwch am swyddi.** Mae ofn yn lledaenu. Dywedwch beth rydych yn ei fwriadu a chynhwyswch staff.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Perchnogaeth a rolau | Aneglur | Hyrwyddwyr | Perchnogion a enwyd a hawliau penderfynu ar gyfer pob system | Rolau'n cael eu hadolygu gyda chanlyniadau | Rolau wedi'u cydlynu ar draws y fenter a phartneriaid |
| Ariannu a chylch bywyd | Arian prosiect | Peth ariannu rhedeg | Ariannu parhaus ar gyfer systemau allweddol, cylch bywyd wedi'i ddiffinio | Cost a gwerth yn cael eu hadolygu'n rheolaidd | Portffolio'n cael ei ariannu a'i ail-gydbwyso yn ôl gwerth a risg |
| Llwyfan a galluogi | Offer unigol | Arweiniad a rennir | Llwyfan cymeradwy, llyfrgell a gwasanaeth adolygu | Defnydd a boddhad yn cael eu mesur | Llwyfan wedi'i integreiddio â llywodraethu ac awtomeiddio |
| Sgiliau | Ad hoc | Hyfforddiant ymwybyddiaeth | Dysgu ar sail rôl gydag ymarfer | Sgiliau'n cael eu holrhain yn erbyn anghenion | Sgiliau wedi'u cynllunio ar draws y gweithlu gyda chefnogaeth ar gyfer newid |

## Rhestr wirio

- [ ] Mae gan bob system AI bwysig berchennog cynnyrch a enwyd.
- [ ] Mae rolau a hawliau penderfynu wedi'u hysgrifennu ar un dudalen.
- [ ] Mae tîm galluogi bach yn darparu offer, arweiniad ac adolygiad.
- [ ] Cofnodir penderfyniadau adeiladu, prynu neu gyflunio.
- [ ] Cyllidebir costau rhedeg a'u holrhain fesul achos defnydd.
- [ ] Mae gwasanaethau llwyfan a rennir yn gwneud y llwybr cymeradwy yn hawdd.
- [ ] Mae hyfforddiant ar sail rôl ac yn cynnwys ymarfer ar dasgau go iawn.
- [ ] Rydym wedi dweud wrth staff yn onest sut y bydd AI yn effeithio ar eu gwaith.

## Anogwyr AI

**Cymharu adeiladu, prynu a chyflunio.**

```text
Ein hachos defnydd: [disgrifiwch]. Ein cyfyngiadau: [sensitifrwydd data, sgiliau, cyllideb, amserlen]. Opsiynau: [rhestrwch].
Drafftiwch dabl cymharu gyda meini prawf (cyfanswm cost dros dair blynedd, rheolaeth ar ddata, cyflymder, risg dibyniaeth, sgiliau angenrheidiol, gallu i newid) ac ar gyfer pob opsiwn beth rydym yn ei wybod a beth nad ydym yn ei wybod o'm disgrifiad. Peidiwch â dewis opsiwn na dyfeisio costau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio model gweithredu un dudalen i'w drafod.**

```text
Ein sefydliad: [math, maint]. Ein defnyddiau AI heddiw: [rhestrwch]. Ein cyrff llywodraethu: [rhestrwch].
Drafftiwch fodel gweithredu un dudalen gyda rolau, hawliau penderfynu, dull ariannu, sut y caiff AI ei adeiladu neu ei brynu, sut mae adolygu risg yn gweithio, a sut y caiff sgiliau eu hadeiladu. Nodwch bob tybiaeth a gadewch [bwlch] lle nad yw fy nisgrifiad yn rhoi sail.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Cynllunio sgiliau yn ôl rôl.**

```text
Rolau yn ein tîm: [rhestrwch gyda'r hyn y mae pob un yn ei wneud]. Defnyddiau AI a gynlluniwyd: [rhestrwch].
Ar gyfer pob rôl, rhestrwch y sgiliau sydd eu hangen (defnyddio AI, gwirio allbynnau, risg, adeiladu, data), un gweithgaredd ymarfer ar waith go iawn, ac un ffordd o weld bod y sgil wedi tyfu. Peidiwch ag enwi cyrsiau na gwerthwyr.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): defnyddiwch i adolygu'r portffolio AI am werth a risg.
- [mlops](../../../../skills/mlops/SKILL.md): defnyddiwch i reoli modelau trwy eu cylch bywyd.
- [training-needs-analysis](../../../../skills/training-needs-analysis/SKILL.md): defnyddiwch i ddiffinio'r sgiliau sydd eu hangen ar bob rôl.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): defnyddiwch i egluro rolau a hawliau penderfynu.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): defnyddiwch i bwyso costau a buddion defnyddiau AI.

## Prif ffynonellau

- NIST, AI Risk Management Framework: strwythur sy'n cynnwys llywodraethu a rolau sefydliadol.
- ISO/IEC 42001 (y safon ei hun): gofynion system reoli ar gyfer AI; darllenwch yr argraffiad cyfredol gan y cyhoeddwr.
- Marty Cagan, *Empowered* (2020): ar dimau cynnyrch a sut mae sefydliadau'n eu cefnogi.
- Wikipedia, "MLOps" a "Operating model": trosolygon o'r cylch bywyd a'r cysyniad.

## Cyfeiriadau

1. Operating model — Wikipedia — https://en.wikipedia.org/wiki/Operating_model
2. MLOps — Wikipedia — https://en.wikipedia.org/wiki/MLOps
3. Center of excellence — Wikipedia — https://en.wikipedia.org/wiki/Center_of_excellence
4. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
5. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
6. Digital literacy — Wikipedia — https://en.wikipedia.org/wiki/Digital_literacy
7. Community of practice — Wikipedia — https://en.wikipedia.org/wiki/Community_of_practice
8. Technological unemployment — Wikipedia — https://en.wikipedia.org/wiki/Technological_unemployment
9. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
10. Proof of concept — Wikipedia — https://en.wikipedia.org/wiki/Proof_of_concept
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
