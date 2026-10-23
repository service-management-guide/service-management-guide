# Arsylwadwyedd a Thelemetreg

**Arsylwadwyedd yw'r gallu i ofyn cwestiynau newydd i system sy'n rhedeg a chael atebion o'r data y mae'n ei ollwng: metrigau, logiau ac olrhain yn cario cyd-destun cyson; mae'n talu ar ei ganfed pan fo telemetreg wedi'i ddylunio i mewn, wedi'i safoni ar fformatau agored, wedi'i gadw am gost y gallwch ei fforddio, ac yn cael ei ddefnyddio i ddeall profiad defnyddwyr, nid iechyd peiriannau yn unig.**

## Pam mae hyn yn bwysig

Mae monitro'n ateb cwestiynau y meddyliasoch amdanynt ymlaen llaw. A yw'r gwasanaeth i fyny? A yw'r ddisg yn llawn? A yw'r oediad yn uwch na dwy eiliad? Mae'r rhain yn gwestiynau da, ac maent yn dal y methiannau rydych wedi'u gweld o'r blaen. Ond mae gwasanaethau modern yn methu mewn ffyrdd newydd. Mae newid mewn un gydran yn arafu cais mewn un arall. Mae data anarferol un cwsmer yn sbarduno llwybr prin. Mae dibyniaeth dair haen i lawr yn dirywio, ac nid oes gan neb ddangosfwrdd ar ei chyfer.

Pan fydd methiant newydd yn cyrraedd, mae angen i'r tîm ofyn cwestiynau na ragwelodd neb: pa geisiadau sy'n araf, i ba ddefnyddwyr, trwy ba wasanaethau, ers pa ryddhad? Os yw'r system yn gollwng data cyfoethog, cysylltiedig, gall y tîm ddilyn y llwybr. Os na, maent yn dyfalu, yn ychwanegu logio, yn ailddefnyddio, ac yn aros i'r methiant ddigwydd eto. Mae Wikipedia yn disgrifio arsylwadwyedd mewn meddalwedd fel y gallu i ddeall cyflwr mewnol system o'i hallbynnau allanol, syniad a fenthycwyd o ddamcaniaeth rheolaeth.

Mae'r gwaith ymarferol yn y telemetreg: y data y mae systemau yn ei ollwng amdanynt eu hunain. Mae telemetreg da wedi'i ddylunio, yn gyson ac yn gysylltiedig, fel y gellir olrhain cwyn defnyddiwr i gais, y cais i'r gwasanaethau y cyffyrddodd â hwy, a'r arafwch i alwad benodol. Mae'r pwnc hwn yn disgrifio'r prif fathau o delemetreg, y safonau sy'n eu gwneud yn gludadwy, a'r costau a'r risgiau sy'n dod gyda hwy. Mae'n adeiladu ar fonitro (Pwnc 3.10 — Monitro a Rheoli Hysbysiadau) ac yn cysylltu â SRE (Pwnc 2.6 — Peirianneg Dibynadwyedd Safleoedd), AIOps (Pwnc 5.2 — AIOps), a llywodraethu data (Pwnc 7.2 — Sylfeini a Llywodraethu Data).

## Cysyniadau craidd

**Telemetreg.** Data a gesglir o system ac a anfonir i le y gellir ei archwilio. Mae Wikipedia yn disgrifio telemetreg yn gyffredinol. Mewn meddalwedd, y prif signalau yw metrigau, logiau ac olrhain, gyda rhai newydd fel proffiliau a hysbysiadau.

**Metrigau.** Rhifau a fesurir dros amser, fel cyfradd ceisiadau, cyfradd gwallau, oediad, defnydd cof, a dyfnder ciw. Mae metrigau'n rhad i'w storio ac yn dda ar gyfer tueddiadau, rhybuddion a dangosfyrddau. Maent yn crynhoi, felly maent yn colli manylder am geisiadau unigol. Mae cronfeydd data cyfres amser, a ddisgrifir ar Wikipedia, yn eu storio'n effeithlon; mae Prometheus yn enghraifft ffynhonnell agored a ddefnyddir yn eang.

**Logiau.** Cofnodion ag stamp amser o ddigwyddiadau arwahanol, fel neges gwall neu drafodyn a gwblhawyd. Mae Wikipedia yn disgrifio logio mewn cyfrifiadura. Mae logiau'n dal manylder, ac maent yn swmpus ac yn ddrud i'w storio a'u chwilio. Mae logiau strwythuredig, gyda meysydd a enwir yn gyson yn hytrach na thestun rhydd, yn haws eu holi a'u cysylltu â signalau eraill.

**Olrhain (traces).** Cofnod o lwybr un cais trwy rannau system ddosbarthedig, gan ddangos pa wasanaethau y pasiodd drwyddynt a pha mor hir y cymerodd pob un. Mae Wikipedia yn disgrifio olrhain mewn meddalwedd. Mae olrhain yn ateb "ble aeth yr amser?" mewn systemau a adeiladwyd o lawer o wasanaethau, fel micro-wasanaethau, y mae Wikipedia hefyd yn eu disgrifio.

**Cyd-destun a chydberthyn.** Yr hyn sy'n gwneud y tri signal yn bwerus gyda'i gilydd yw cyd-destun a rennir: dynodwr sy'n clymu llinell log wrth yr olrhain a chais y defnyddiwr, a labeli fel gwasanaeth, fersiwn ac amgylchedd ar bopeth. Heb gyd-destun a rennir, mae gennych dri phentwr o ddata. Gydag ef, gallwch symud o gais araf mewn metrig i'r olrhain ac yna i'r llinell log sy'n ei esbonio.

**Offeryniad.** Ychwanegu'r cod sy'n cynhyrchu telemetreg. Mae Wikipedia yn disgrifio offeryniad mewn rhaglennu. Gall fod yn awtomatig, trwy lyfrgelloedd ac asiantau, neu â llaw, lle mae datblygwyr yn ychwanegu'r signalau sy'n bwysig i'r busnes, fel "archeb wedi'i gosod". Offerynnwch yr hyn y mae defnyddwyr yn ei wneud, nid yr hyn y mae peiriannau'n ei wneud yn unig.

**OpenTelemetry a safonau agored.** Mae OpenTelemetry yn brosiect ffynhonnell agored, dan y Cloud Native Computing Foundation (y mae Wikipedia yn ei ddisgrifio), sy'n darparu fformatau ac offer cyffredin ar gyfer allyrru metrigau, logiau ac olrhain, yn annibynnol ar yr offeryn sy'n eu storio ac yn eu dadansoddi. Gwiriwch safle'r prosiect ei hun am ei gyflwr presennol. Y nod yw gadael i chi gasglu telemetreg unwaith a'i anfon i unrhyw gefn cydnaws, gan leihau clowt gwerthwr. Mae Wikipedia yn disgrifio safonau agored a chlowt gwerthwr mewn termau cyffredinol. Gweler Pwnc 3.14 — Rheoli Cyflenwyr.

**Monitro yn erbyn arsylwadwyedd.** Mae monitro'n gwylio amodau hysbys ac yn rhybuddio; mae arsylwadwyedd yn cefnogi archwilio rhai anhysbys. Maent yn ategu ei gilydd: mae rhybuddion yn dweud bod rhywbeth o'i le, mae archwilio yn dweud pam. Gweler Pwnc 3.10 — Monitro a Rheoli Hysbysiadau.

**Dangosyddion lefel gwasanaeth o delemetreg.** Cyfrifir SLIs, fel cyfran y ceisiadau sy'n llwyddo o fewn amser, o delemetreg. Diffiniwch hwy o safbwynt y defnyddiwr, a mesurwch hwy lle mae cais y defnyddiwr yn mynd i mewn i'r system. Gweler Pwnc 2.6 — Peirianneg Dibynadwyedd Safleoedd ac erthygl Wikipedia ar amcanion lefel gwasanaeth.

**Telemetreg defnyddwyr a busnes.** Mae monitro defnyddwyr go iawn a monitro synthetig, a ddisgrifir ar Wikipedia, yn dangos profiad o'r tu allan: amseroedd llwytho tudalennau, llwyddiant teithiau, gwallau mewn porwyr ac apiau. Mae hysbysiadau busnes, fel cofrestriadau a thaliadau, yn cysylltu iechyd technegol â chanlyniadau. Gweler Pwnc 7.7 — Dadansoddeg Profiad a Theimlad.

**Cardinaledd a chost.** Cardinaledd yw nifer gwerthoedd gwahanol label. Mae gan fetrig a labelir gan ddynodwr defnyddiwr gardinaledd enfawr a gall lethu storfa fetrigau. Mae Wikipedia yn disgrifio cardinaledd mewn modelu data. Mae cyfaint telemetreg yn tyfu gyda thraffig a manylder, ac mae cost storio a phrosesu yn tyfu gydag ef. Penderfynwch beth i'w gadw ar fanylder llawn, beth i'w samplu, a beth i'w gyfanredu.

**Samplo.** Cadw dim ond cyfran o olrhain neu logiau. Mae Wikipedia yn disgrifio samplo mewn ystadegau. Mae samplo yn torri cost a gall guddio hysbysiadau prin; ystyriwch gadw pob gwall a chais araf a samplu'r rhai arferol.

**Cadw.** Am ba mor hir y caiff telemetreg ei gadw. Cadwch ddata manylder uchel yn fyr, a chyfanredion yn hwy. Mae cadw yn effeithio ar gost, ymchwiliad a phreifatrwydd. Gweler Pwnc 7.2 — Sylfeini a Llywodraethu Data.

**Preifatrwydd a diogelwch mewn telemetreg.** Gall logiau ac olrhain gynnwys data personol, cymwysterau a chyfrinachau, ar ddamwain neu o fwriad. Mae Wikipedia yn disgrifio data personol. Sgwriwch neu osgowch feysydd sensitif yn y ffynhonnell, rheolwch fynediad, a gosodwch gadw. Mae telemetreg hefyd yn ffynhonnell data diogelwch. Gweler Pwnc 3.13 — Rheoli Diogelwch Gwybodaeth.

**Arsylwadwyedd ar gyfer AI.** Mae angen telemetreg eu hunain ar systemau AI: mewnbynnau, allbynnau, oediad, cost, cyfraddau gwall a gwrthod, adborth defnyddwyr, a signalau drifft. Cofnodwch ddigon i ymchwilio i ateb anghywir, gyda gofal am y data a gofnodir. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

**Llwyfan a pherchnogaeth.** Mae llawer o sefydliadau'n rhedeg llwyfan telemetreg a rennir, gyda safonau ar gyfer enwi, labelu a chadw, a thimau sy'n berchen ar y signalau o'u gwasanaethau. Mae tîm llwyfan yn darparu offer ac arweiniad; mae timau gwasanaeth yn berchen ar yr hyn y maent yn ei ollwng a sut y maent yn ei ddefnyddio.

**Sut mae'r lensys yn ffitio.** Arsylwadwyedd yw'r sail ddata ar gyfer dadansoddeg ac AIOps. Mae arfer ystwyth yn trin offeryniad fel rhan o'r diffiniad o orffen. Mae awtomeiddio yn defnyddio telemetreg i raddio ac adfer.

## Arferion gorau

1. **Offerynnwch wrth adeiladu.** Triniwch delemetreg fel rhan o'r nodwedd. Cynhwyswch ef yn y diffiniad o orffen, ac adolygwch ef gyda'r dyluniad.
2. **Safonwch enwau a chyd-destun.** Cytunwch ar enwau gwasanaethau, setiau labeli, unedau, a dynodwr cais a gludir drwy bob gwasanaeth. Dogfennwch hwy a gwiriwch hwy yn y biblinell.
3. **Allyrrwch logiau strwythuredig.** Defnyddiwch feysydd a enwir yn gyson, cynhwyswch y dynodwr cais, a chadwch negeseuon yn fyr. Osgowch logio cyfrinachau a data personol diangen.
4. **Olrheiniwch y llwybrau sy'n bwysig.** Offerynnwch y prif deithiau defnyddwyr a'r galwadau rhwng gwasanaethau, a lledaenwch gyd-destun drwy bob cam, gan gynnwys ciwiau a galwadau allanol.
5. **Diffiniwch ddangosyddion o safbwynt y defnyddiwr.** Cyfrifwch SLIs o delemetreg ar bwynt cyswllt y defnyddiwr, ac ychwanegwch hysbysiadau busnes sy'n dangos a gyflawnodd defnyddwyr yr hyn y daethant i'w wneud.
6. **Defnyddiwch fformatau agored.** Ffafriwch safonau agored ar gyfer allyrru telemetreg, fel y gallwch newid cefnau heb ailofferynnu. Gwiriwch gefnogaeth yn eich llwyfannau.
7. **Rheolwch gost yn fwriadol.** Gosodwch gyllidebau ar gyfer telemetreg, osgowch labeli cardinaledd uchel, samplwch draffig arferol, cadwch wallau a cheisiadau araf, a haenwch gadw.
8. **Amddiffynnwch delemetreg.** Sgwriwch ddata sensitif yn y ffynhonnell, cyfyngwch fynediad, a chymhwyswch reolau cadw. Monitrwch fynediad i storfeydd telemetreg.
9. **Gwnewch ef yn ddefnyddiadwy.** Rhowch ddangosfyrddau a rennir, ymholiadau wedi'u cadw, a hyfforddiant ar sut i ymchwilio i dimau. Cysylltwch rybuddion â'r telemetreg a'r llawlyfrau gweithredu perthnasol.
10. **Adolygwch delemetreg ar ôl digwyddiadau.** Gofynnwch beth na allech ei weld yn ystod y digwyddiad, ac ychwanegwch ef. Tynnwch signalau nad oes neb yn eu defnyddio.

## Cwestiynau i'w trafod gyda'ch tîm

**Yn ystod ein digwyddiad diwethaf, beth oeddem eisiau ei wybod na allem ddod o hyd iddo?**
Gofynnwch i'r ymatebwyr. Disgwyliwch fylchau mewn olrhain, cyd-destun, neu ddata lefel defnyddiwr. Dilynwch trwy ddewis un bwlch ac ychwanegu'r signal.

**A allwn ddilyn cais un defnyddiwr trwy'r holl wasanaethau y mae'n cyffwrdd â hwy?**
Rhowch gynnig arni gyda chais go iawn. Disgwyliwch doriadau wrth giwiau a galwadau allanol. Dilynwch trwy ledaenu'r dynodwr drwy'r toriad cyntaf.

**Beth ydym yn ei logio na ddylem, a beth nad ydym yn ei logio y dylem?**
Edrychwch ar sampl o logiau. Disgwyliwch gyfrinachau, data personol a sŵn. Dilynwch trwy gytuno ar reol a sgwrio.

**Faint ydym yn ei wario ar delemetreg, a beth rydym yn ei gael amdano?**
Gofynnwch am y rhif a'r ffynonellau mwyaf. Disgwyliwch bethau annisgwyl. Dilynwch trwy ddewis y signal drutaf a lleiaf a ddefnyddir i'w dorri neu ei samplu.

**Pa mor glwm ydym wrth ein hofferyn telemetreg cyfredol, a beth fyddai ei angen i newid?**
Amcangyfrifwch. Disgwyliwch "llawer". Dilynwch trwy ddewis un gwasanaeth i'w offerynnu gyda safon agored.

**Pa delemetreg y mae ein nodweddion AI yn ei gynhyrchu, ac a allem ymchwilio i ateb anghywir ohono?**
Gofynnwch. Disgwyliwch gofnodion cyfyngedig. Dilynwch trwy gytuno beth i'w gofnodi, gyda therfynau preifatrwydd, a rhoi cynnig ar ymchwiliad.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae API cyhoeddus gwasanaeth tywydd cenedlaethol yn gwasanaethu sawl miliwn o geisiadau y dydd trwy wyth gwasanaeth mewnol. Mae defnyddwyr yn cwyno am ymatebion araf achlysurol ar gyfer rhai lleoliadau. Mae'r monitro'n dangos yr API o fewn ei darged oediad ar gyfartaledd, ac mae pob gwasanaeth yn edrych yn iach ar ei ben ei hun. Mae'r peiriannydd ar alwad yn treulio dau ddiwrnod yn mynd ar drywydd y broblem.

Mae'r tîm llwyfan wedi bod yn symud i offeryniad OpenTelemetry. Ar borth yr API a phedwar o'r wyth gwasanaeth, mae ceisiadau'n cario dynodwr olrhain ac mae pob gwasanaeth yn cofnodi rhychwantau gydag amseriadau. Gydag olrhain, mae peiriannydd yn hidlo am geisiadau araf o'r wythnos ddiwethaf ac yn gweld bod bron pob un yn pasio trwy'r un alwad: chwiliad yn y gwasanaeth data daearyddol am leoliadau â nodau anarferol yn eu henwau, sy'n cymryd deg gwaith yn hwy na'r arfer. Nid yw'r pedwar gwasanaeth arall wedi'u hofferynnu eto, ond mae'r bwlch bellach yn ddigon cul i ymchwilio â llaw. Yr achos yw mynegai cronfa ddata coll ar gyfer yr ymholiadau hynny, ac mae'r atgyweiriad yn cymryd awr.

Mae'r tîm yn adolygu'r gost. Mae gwariant telemetreg wedi tyfu 40 y cant mewn chwe mis, yn bennaf o label ar fetrig sy'n cynnwys y lleoliad y gofynnwyd amdano, sydd â channoedd o filoedd o werthoedd. Maent yn tynnu'r label, yn cadw'r lleoliad mewn olrhain a logiau, ac yn samplu 5 y cant o olrhain arferol gan gadw pob gwall a chais araf. Mae sgwriad yn tynnu cyfeiriadau IP o logiau ar ôl 24 awr, ar ôl i'r swyddog preifatrwydd nodi eu bod yn cyfrif fel data personol mewn rhai awdurdodaethau.

Mae'r tîm hefyd yn ychwanegu signal busnes: cyfrif o alwadau API a ddychwelodd ganlyniad gwag, y bu defnyddwyr yn y gorffennol yn ei adrodd fel "dim data". Mae'n dangos patrwm ar ôl pob diweddariad model.

Beth sy'n newid: mae ymchwiliadau'n cymryd oriau yn lle dyddiau, ac mae cost yn gostwng traean. Beth sy'n parhau'n anodd: nid oes olrhain gan bedwar gwasanaeth o hyd, ac mae dau yn eiddo i asiantaeth arall; mae'r rheol samplo eisoes wedi cuddio gwall prin a ymddangosodd mewn traffig heb ei samplu yn unig ac a ddarganfuwyd mewn log; ac mae peirianwyr angen ymarfer i ddefnyddio offer olrhain yn dda. Mae'r tîm yn trefnu sesiwn hyfforddi ac yn gosod rheol i gadw pob olrhain ag unrhyw wall.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Adeiladwch delemetreg i mewn i nodweddion: enwau cyson, dynodwyr ceisiadau, logiau strwythuredig, rhychwantau ar lwybrau allweddol, a hysbysiadau busnes. Osgowch gyfrinachau mewn signalau, ac adolygwch delemetreg wrth ddylunio.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch delemetreg i ymchwilio, nid i rybuddio yn unig. Cadwch ddangosfyrddau, ymholiadau a llawlyfrau gweithredu wedi'u cysylltu, a dywedwch wrth ddatblygwyr beth na allech ei weld. Gwyliwch gost ac ansawdd telemetreg.

### Arweinyddiaeth a llywodraethu

Ariennwch y llwyfan, safonau a hyfforddiant. Gofynnwch am dystiolaeth bod telemetreg yn byrhau ymchwiliadau ac yn adlewyrchu profiad defnyddwyr. Gosodwch gyllidebau a rheolau preifatrwydd, a ffafriwch safonau agored.

### Cwsmeriaid a defnyddwyr

Rydych yn elwa pan fo darparwr yn gallu olrhain eich problem i achos yn gyflym. Rhowch fanylion pan fyddwch yn adrodd mater, fel yr amser a'r hyn a wnaethoch, sy'n helpu i ddod o hyd i'ch cais.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Ychwanegwch offeryniad mewn camau bach gyda phob nodwedd, a mireiniwch ef ar ôl pob digwyddiad. Adolygwch ddangosfyrddau gyda'r tîm a thynnwch y rhai nad oes neb yn eu defnyddio. Rhybudd: mae bolltio telemetreg ar y diwedd yn cynhyrchu bylchau; cynhwyswch ef yn y diffiniad o orffen.

### AI

Gall AI grynhoi olrhain a logiau, grwpio anghysondebau, ac ateb cwestiynau am delemetreg, gyda pherchnogion a gwiriadau. Mae angen telemetreg eu hunain ar nodweddion AI hefyd. Rhybudd: mae dadansoddiad AI yn dibynnu ar ansawdd a chyd-destun y data; mae labeli gwael yn cynhyrchu casgliadau gwael. Gweler Pwnc 5.2 — AIOps.

### Awtomeiddio

Awtomeiddiwch offeryniad lle mae llyfrgelloedd yn caniatáu, gorfodwch safonau enwi a labelu yn y biblinell, a defnyddiwch delemetreg ar gyfer graddio ac adfer gyda therfynau. Rhybudd: gall awtomeiddio a sbardunir gan delemetreg swnllyd gamdanio; profwch drothwyon ac ychwanegwch derfynau. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

### Dadansoddeg

Defnyddiwch delemetreg ar gyfer SLIs, tueddiadau, capasiti a phrofiad defnyddwyr, ac ar gyfer cost telemetreg ei hun. Rhybudd: mae samplo a chyfanredu yn newid yr hyn y gall y data ei ddangos, a gall labeli cardinaledd uchel ystumio neu dorri systemau; nodwch y terfynau mewn adroddiadau. Gweler Pwnc 7.1 — Dadansoddeg ar gyfer Rheoli Gwasanaethau a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Tri phentwr o ddata.** Ni ellir cysylltu metrigau, logiau ac olrhain. Rhannwch ddynodwyr a labeli.
- **Telemetreg fel ôl-ystyriaeth.** Mae bylchau'n ymddangos mewn digwyddiadau. Offerynnwch gyda'r nodwedd.
- **Labeli cardinaledd uchel.** Mae cost a pherfformiad yn dioddef. Cyfyngwch labeli a chadwch fanylder mewn olrhain a logiau.
- **Cyfrinachau a data personol mewn logiau.** Mae data sensitif yn gollwng. Sgwriwch yn y ffynhonnell a rheolwch fynediad.
- **Clowt i un offeryn.** Mae newid yn gostus. Defnyddiwch safonau agored.
- **Popeth yn cael ei gadw am byth.** Mae cost yn codi. Haenwch gadw a samplwch.
- **Dangosfyrddau nad oes neb yn eu defnyddio.** Gwastraffir ymdrech. Tociwch a chysylltwch â phenderfyniadau.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Cwmpas | Metrigau seilwaith | Gwasanaethau allweddol gyda metrigau a logiau | Metrigau, logiau ac olrhain gyda chyd-destun a rennir ar deithiau allweddol | Cwmpas yn cael ei adolygu ar ôl digwyddiadau | Cwmpas yn gyson ar draws gwasanaethau a chyflenwyr |
| Safonau | Dim | Confensiynau lleol | Enwi, labeli a fformatau agored wedi'u cytuno | Safonau'n cael eu gwirio yn y biblinell | Safonau wedi'u rhannu ac yn esblygu gyda'r llwyfan |
| Cost a chadw | Heb ei reoli | Ymwybyddiaeth | Cyllidebau, samplo a chadw haenog | Cost fesul signal a gwerth yn cael eu hadolygu | Cost a gwerth yn cael eu optimeiddio'n barhaus |
| Amddiffyn | Aneglur | Rheoli mynediad sylfaenol | Rheolau sgwrio, mynediad a chadw | Cydymffurfiaeth yn cael ei monitro | Rheolaethau wedi'u hadeiladu i mewn i gasglu a storio |

## Rhestr wirio

- [ ] Mae telemetreg yn rhan o'n diffiniad o orffen.
- [ ] Mae gennym enwau, labeli, unedau a dynodwr cais wedi'u cytuno a'u cario ar draws gwasanaethau.
- [ ] Mae logiau'n strwythuredig ac yn rhydd o gyfrinachau a data personol diangen.
- [ ] Mae teithiau defnyddwyr allweddol yn cael eu holrhain o'r dechrau i'r diwedd.
- [ ] Cyfrifir SLIs o delemetreg ar bwynt cyswllt y defnyddiwr.
- [ ] Rydym yn defnyddio fformatau agored ar gyfer allyrru telemetreg.
- [ ] Mae gennym gyllideb telemetreg gyda samplo a chadw haenog.
- [ ] Rydym yn adolygu'r hyn na allem ei weld ar ôl pob digwyddiad.

## Anogwyr AI

**Dod o hyd i fylchau telemetreg o ddigwyddiad.**

```text
Dyma linell amser digwyddiad a nodiadau ar yr hyn y ceisiodd ymatebwyr ddarganfod: [gludwch].
Rhestrwch bob cwestiwn na allai'r ymatebwyr ei ateb, pa signal fyddai wedi ei ateb (metrig, log, olrhain, data defnyddiwr), a chwestiwn i'r tîm sy'n berchen arno. Peidiwch â thybio bod unrhyw signal yn bodoli.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Adolygu sampl log am ddata sensitif.**

```text
Dyma sampl o linellau log o'n gwasanaeth: [gludwch, wedi'i sgwrio'n rhannol eisoes].
Rhestrwch unrhyw gynnwys sy'n edrych fel cyfrinachau, data personol, neu fanylion mewnol, gan ddyfynnu'r union destun, ac awgrymwch gategorïau o reolau sgwrio. Peidiwch â dyfalu a yw unrhyw un yn real.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Cynnig safon enwi a labelu.**

```text
Ein gwasanaethau: [rhestrwch]. Ein hamgylcheddau: [rhestrwch]. Ein timau: [rhestrwch]. Yr hyn rydym eisiau gallu hidlo yn ei ôl: [rhestrwch].
Drafftiwch safon un dudalen ar gyfer enwau gwasanaethau, allweddi labeli, gwerthoedd a ganiateir, a dynodwyr ceisiadau, gydag enghreifftiau. Rhybuddiwch am labeli a allai fod â llawer iawn o werthoedd gwahanol. Peidiwch ag enwi gwerthwr.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): defnyddiwch i archwilio patrymau anarferol mewn telemetreg.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): defnyddiwch i ddylunio sut mae telemetreg yn symud ac yn cael ei storio.
- [data-governance](../../../../skills/data-governance/SKILL.md): defnyddiwch i osod rheolau preifatrwydd, cadw a mynediad.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): defnyddiwch i ddewis signalau rhybudd cynnar.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): defnyddiwch i brofi oediad a chapasiti gyda thelemetreg.

## Prif ffynonellau

- OpenTelemetry (opentelemetry.io): y safon agored ac offer ar gyfer metrigau, logiau ac olrhain.
- Charity Majors, Liz Fong-Jones, and George Miranda, *Observability Engineering* (2022): canllaw ymarferydd i'r dull.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), pennod ar fonitro, am ddim yn sre.google.
- Wikipedia, "Observability (software)" a "Telemetry": trosolygon o'r syniadau.

## Cyfeiriadau

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
