# DevOps

**Set o arferion diwylliannol, arferion gweithio ac offer yw DevOps sy'n dod â datblygu a gweithrediadau ynghyd fel y gall timau newid gwasanaethau byw yn gyflym a'u rhedeg yn ddibynadwy; mae'n ategu ITIL trwy symud llawer o reolaethau i mewn i'r gwaith ei hun, ac nid yw'n dileu'r angen am berchnogaeth glir a thystiolaeth.**

## Pam mae hyn yn bwysig

Am flynyddoedd, roedd adeiladu meddalwedd a'i redeg yn swyddi ar wahân mewn timau ar wahân â nodau gwahanol. Gwobrwywyd datblygwyr am newid, gweithrediadau am sefydlogrwydd, a chyfarfu'r ddau grŵp wrth drosglwyddiad yr oedd y ddau yn ei gael yn rhwystredig. Taflwyd rhyddhau dros wal, taflwyd digwyddiadau yn ôl, ac arhosodd cwsmeriaid.

Daeth DevOps i'r amlwg ar ddiwedd y 2000au fel ymateb. Mae ei syniad craidd yn syml: dylai'r bobl sy'n adeiladu gwasanaeth rannu cyfrifoldeb am ei redeg, a dylai'r bobl sy'n ei redeg helpu i lunio sut y caiff ei adeiladu. Mae'r cyfrifoldeb a rennir hwnnw, gyda chefnogaeth awtomeiddio ac adborth cyflym, yn gadael i dimau ryddhau'n aml ac adfer yn gyflym.

I reoli gwasanaethau, mae DevOps yn ddylanwad mawr ac weithiau'n ffynhonnell ffrithiant. Mae ITIL yn disgrifio arferion fel galluogi newid a rheoli digwyddiadau, ac mae DevOps yn disgrifio sut mae timau'n eu cyflawni gyda phiblinellau, galwadau a rennir ac adolygiad di-fai. Mae sefydliadau sy'n trin y ddau fel gwrthwynebwyr yn gorffen gyda systemau cyfochrog; mae'r rhai sy'n eu cysylltu yn cael rheolaethau sy'n gyflymach ac sydd â gwell tystiolaeth. Mae'r pwnc hwn yn esbonio'r syniadau ac yn dangos sut maent yn ffitio gyda gweddill y canllaw hwn.

## Cysyniadau craidd

**Beth yw DevOps.** Mae'r gair yn cyfuno "development" (datblygu) ac "operations" (gweithrediadau). Mae Wikipedia yn ei ddisgrifio fel set o arferion sy'n integreiddio datblygu meddalwedd a gweithrediadau TG, gyda'r nod o fyrhau'r cylch bywyd cyflawni a darparu cyflawni parhaus gydag ansawdd uchel. Mae'n symudiad yn fwy na fframwaith: nid oes corff llywodraethu nac un ardystiad sy'n ei ddiffinio.

**Diwylliant yn gyntaf.** Y newid canolog yw diwylliannol: nodau a rennir, cyfrifoldeb a rennir, a chydweithio rhwng rolau. Mae timau sy'n mabwysiadu'r offer heb y diwylliant yn cadw'r hen drosglwyddiad dan enw newydd. Crynodeb cyffredin yw "rydych yn ei adeiladu, rydych yn ei redeg", sy'n gysylltiedig â sylw gan Werner Vogels o Amazon, sy'n golygu mai'r tîm sy'n adeiladu gwasanaeth sy'n gyfrifol am ei redeg.

**Y tair ffordd.** Yn y nofel *The Phoenix Project* a'r llawlyfr a ddilynodd, mae Gene Kim a'i gyd-awduron yn disgrifio tair egwyddor: llif (cyflymu gwaith o ddatblygu i weithrediadau i gwsmeriaid), adborth (creu adborth cyflym o'r dde i'r chwith ar bob cam), a dysgu ac arbrofi parhaus. Maent yn cysylltu DevOps â meddwl main; gweler Pwnc 2.4 — Main a Kaizen a Phwnc 2.3 — Llif a Kanban.

**CALMS.** Cymorth cof cyffredin ar gyfer yr elfennau: diwylliant (culture), awtomeiddio, main (lean), mesur a rhannu (sharing). Mae'n ddefnyddiol fel rhestr wirio o'r hyn i edrych arno mewn tîm, nid fel sgôr aeddfedrwydd.

**Arferion.** Mae arferion DevOps nodweddiadol yn cynnwys rheoli fersiynau ar gyfer popeth, integreiddio a chyflawni parhaus (gweler Pwnc 2.2 — Cyflawni Parhaus), seilwaith fel cod (gweler Pwnc 6.3 — Seilwaith fel Cod a GitOps), profi awtomataidd, monitro ac arsylwadwyedd (gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg), galwadau a rennir, ac adolygiadau di-fai o ddigwyddiadau.

**Symud i'r chwith.** Symud gwiriadau fel profi a diogelwch yn gynharach yn y cylch bywyd, lle mae problemau'n rhatach i'w trwsio. Mae DevSecOps yn ymestyn y syniad i ddiogelwch, gan adeiladu gwiriadau diogelwch i mewn i'r biblinell. Mae Wikipedia yn disgrifio'r ddau.

**Peirianneg llwyfannau.** Arfer mwy newydd lle mae tîm yn adeiladu ac yn rhedeg llwyfan mewnol y mae timau eraill yn ei ddefnyddio ar gyfer adeiladu, defnyddio a gweithredu gwasanaethau. Y nod yw lleihau'r llwyth ar dimau cynnyrch trwy gynnig llwybrau safonol, wedi'u palmantu. Mae Wikipedia yn disgrifio peirianneg llwyfannau. Mae angen gofal: mae llwyfan y mae timau'n cael eu gorfodi i'w ddefnyddio ond na allant ei lunio yn dod yn drosglwyddiad arall.

**Y berthynas ag ITIL.** Mae ITIL 4 yn cydnabod DevOps ac yn disgrifio ei arferion mewn ffyrdd y gellir eu bodloni gan reolaethau piblinell. Mae'r ddau yn ateb cwestiynau gwahanol: mae DevOps yn disgrifio sut mae timau'n gweithio ac yn awtomeiddio; mae ITIL yn disgrifio'r arferion sydd eu hangen ar sefydliad, fel rheoli digwyddiadau, newid a lefelau gwasanaeth. Crynodeb defnyddiol yw bod DevOps yn aml yn darparu'r "sut" ac ITIL y "beth i'w ystyried". Gweler Pwnc 1.2 — ITIL a Phwnc 2.9 — Rheoli Gwasanaethau Ystwyth.

**Y berthynas â SRE.** Mae peirianneg dibynadwyedd safleoedd (SRE) yn ddisgyblaeth beirianneg ar gyfer dibynadwyedd a dyfodd yn Google; mae'n rhannu nodau â DevOps, yn defnyddio amcanion lefel gwasanaeth a chyllidebau gwallau, ac yn aml yn trin gweithrediadau fel problem meddalwedd. Gweler Pwnc 2.6 — Peirianneg Dibynadwyedd Safleoedd.

**Y berthynas ag ystwyth.** Mae arfer ystwyth yn canolbwyntio ar gyflawni meddalwedd gweithredol mewn darnau bach gyda rhanddeiliaid yn cymryd rhan; mae DevOps yn ymestyn y pryder y tu hwnt i'r pwynt rhyddhau, i redeg a gwella'r gwasanaeth. Mae'r ddau yn rhannu gwerthoedd fel cydweithio, adborth cyflym a gwelliant parhaus.

**Gwrthwynebiadau cyffredin.** Mae rhai staff gweithrediadau yn ofni bod DevOps yn golygu torri swyddi neu dynnu rheolaethau; mae rhai datblygwyr yn ofni ei fod yn golygu galwadau parhaol. Mae achosion go iawn y tu ôl i'r ddau ofn. Ewch i'r afael â hwy yn uniongyrchol gyda chytundebau clir ar lwyth gwaith, cymorth, a pha reolaethau sy'n aros.

**Sut mae'r lensys yn ffitio.** DevOps yw'r diwylliant cyflawni o fewn y lens ystwyth. Mae cynorthwywyr AI bellach yn rhan o lawer o gadwyni offer, o dan adolygiad dynol. Mae awtomeiddio yn ganolog. Mae dadansoddeg, gan gynnwys mesurau cyflawni a dibynadwyedd, yn cau'r ddolen adborth.

## Arferion gorau

1. **Dechreuwch â nodau a rennir.** Rhowch yr un canlyniad i ddatblygu a gweithrediadau ofalu amdano, fel dibynadwyedd sy'n weladwy i gwsmeriaid a chyflymder newid diogel. Mae targedau ar wahân i bob grŵp yn ail-greu'r wal.
2. **Gwnewch y tîm yn gyfrifol am yr hyn y mae'n ei adeiladu.** Gadewch i'r tîm sy'n adeiladu gwasanaeth gymryd rhan yn ei redeg, gyda'r cymorth, yr hyfforddiant a'r terfynau ar lwyth galwadau sy'n gwneud hyn yn gynaliadwy.
3. **Awtomeiddiwch y llwybr i gynhyrchu.** Defnyddiwch biblinellau sy'n adeiladu, profi, sganio a defnyddio yn yr un ffordd bob tro, gyda chofnodion. Gweler Pwnc 6.4 — Piblinellau a Newid Awtomataidd.
4. **Rhowch bopeth mewn rheoli fersiynau.** Cod, cyfluniad, diffiniadau seilwaith a llawlyfrau gweithredu (runbooks). Yna mae newid yn adolygadwy, yn olrheiniadwy ac yn wrthdroadwy.
5. **Symudwch wiriadau i'r chwith.** Ychwanegwch brofion uned, sganiau diogelwch a gwiriadau polisi yn gynnar yn y biblinell, a thrwsiwch achosion methiannau mynych.
6. **Gwyliwch gynhyrchu a rhannwch yr hyn a welwch.** Rhowch fynediad i ddatblygwyr at yr un monitro y mae gweithrediadau yn ei ddefnyddio, ac adolygwch ef gyda'ch gilydd. Gweler Pwnc 3.10 — Monitro a Rheoli Hysbysiadau.
7. **Adolygwch ddigwyddiadau heb fai.** Cynhaliwch adolygiad ar ôl digwyddiadau sylweddol, canolbwyntiwch ar y system, a tracwch y camau gweithredu. Gweler Pwnc 3.3 — Rheoli Problemau.
8. **Cynigiwch lwyfan, nid gorchymyn.** Os byddwch yn adeiladu llwyfan mewnol, trinwch y timau sy'n ei ddefnyddio fel cwsmeriaid: gofynnwch beth sydd ei angen arnynt, cyhoeddwch ei fap ffordd, a mesurwch a yw'n helpu.
9. **Cadwch reolaethau, newidiwch sut maent yn gweithio.** Lle mae rheolaeth yn rheoli risg go iawn, fel gwahanu dyletswyddau, cadwch hi a'i bodloni ag awtomeiddio a chofnodion yn hytrach nag â chyfarfod.
10. **Mesurwch gyflawni a dibynadwyedd gyda'i gilydd.** Edrychwch ar ba mor gyflym ac mor aml y byddwch yn newid yn ogystal â pha mor aml y mae newidiadau'n achosi trafferth a pha mor gyflym yr adferwch. Defnyddiwch y rhifau i ddysgu, nid i raddio pobl.

## Cwestiynau i'w trafod gyda'ch tîm

**Ymhle mae'r trosglwyddiad rhwng adeiladu a rhedeg, a beth sy'n cael ei golli yno?**
Mae gan y rhan fwyaf o sefydliadau un neu fwy. Gofynnwch i'r ddwy ochr: beth nad yw datblygwyr yn ei wybod am redeg y gwasanaeth, a beth nad yw gweithrediadau yn ei wybod am y dyluniad? Disgwyliwch restrau hir. Dilynwch trwy ddewis un trosglwyddiad i'w dynnu neu ei grebachu.

**Pwy sy'n cael ei alw pan fydd ein gwasanaeth yn methu yn y nos, ac a ydynt yn gwybod sut i'w drwsio?**
Mae hyn yn archwilio "rydych yn ei adeiladu, rydych yn ei redeg" yn ymarferol. Mae'r atebion yn amrywio o ddatblygwr ar alwad i dîm ar wahân â gwybodaeth gyfyngedig. Gofynnwch am y llwyth a'r hyfforddiant a roddir. Dilynwch trwy gytuno ar un newid i wella'r wybodaeth neu'r llwyth.

**Pa reolaethau sydd gennym sy'n bodoli oherwydd digwyddiad yn y gorffennol, ac a allai piblinell eu darparu?**
Mae llawer o reolaethau wedi'u hetifeddu. Gofynnwch pa risg y mae pob un yn mynd i'r afael â hi a pha dystiolaeth sy'n bodloni'r perchennog. Dilynwch trwy dreialu un eilydd piblinell gyda chyfranogiad y perchennog.

**Beth fyddai angen i'n llwyfan mewnol ei wneud i ni ei ddewis o'n gwirfodd?**
Mae hyn yn profi meddwl llwyfan. Os mai dim ond oherwydd y dywedir wrthynt y byddai timau'n ei ddefnyddio, nid yw'n eu gwasanaethu. Gofynnwch beth maent yn ei ddefnyddio heddiw a pham. Dilynwch trwy gytuno ar set fach o gyfweliadau cwsmeriaid.

**Sut rydym yn adolygu digwyddiadau, a beth newidiodd ar ôl yr un diwethaf?**
Dim ond os dilynir gan gamau gweithredu y mae adolygiadau'n bwysig. Gofynnwch am gamau gweithredu'r adolygiad diwethaf a'u statws. Disgwyliwch fod rhai yn dal ar agor. Dilynwch trwy neilltuo perchnogion a dyddiadau adolygu i'r rhai sy'n dal heb eu cwblhau.

**Sut mae cynorthwywyr codio neu weithrediadau AI yn cael eu defnyddio ar ein cadwyn offer, a phwy sy'n adolygu eu hallbwn?**
Gall cynorthwywyr AI ysgrifennu cod, profion, cyfluniad a llawlyfrau gweithredu, a gallant grynhoi digwyddiadau. Gofynnwch pwy sy'n berchen ar bob defnydd, beth sy'n cael ei adolygu gan unigolyn, a beth fyddai'n dal gwall. Dilynwch trwy ddewis defnydd i'w archwilio y mis hwn.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm digidol manwerthu banc rhanbarthol yn adeiladu ap symudol, ac mae grŵp gweithrediadau ar wahân yn rhedeg cynhyrchu. Mae rhyddhau yn digwydd bob chwe wythnos, gyda rhewi tridiau. Mae datblygwyr yn dweud bod gweithrediadau yn rhwystro newid; mae gweithrediadau yn dweud bod datblygwyr yn cludo cod heb ei brofi ac yn eu gadael i ymdopi. Mae adolygiadau digwyddiadau yn gorffen gydag anghytundeb ynghylch bai pwy ydoedd.

Mae rheolwr peirianneg newydd yn cynnig arbrawf gydag un gwasanaeth, y nodwedd rheolaethau cerdyn. Mae datblygwr a pheiriannydd gweithrediadau yn ymuno â'r un tîm. Maent yn cytuno ar nod a rennir: gall cwsmeriaid rewi a dadrewi cerdyn mewn llai na phum eiliad, a gellir rhyddhau newidiadau'n ddiogel ar unrhyw adeg. Maent yn rhoi'r cyfluniad mewn rheoli fersiynau, yn ychwanegu profion awtomataidd a sganiau diogelwch at biblinell, ac yn cytuno bod y tîm cyfan yn cymryd y rota ar alwad, gyda pheirianwyr gweithrediadau yn hyfforddi datblygwyr a therfyn o un wythnos mewn chwech i bob person. Mae tîm risg y banc yn mynnu cadw gwahanu dyletswyddau; mae'r tîm yn bodloni hyn trwy fynnu adolygiad cymheiriaid ar gyfer pob newid a thrwy gofnodi tystiolaeth y biblinell.

Ar ôl chwe mis, mae rheolaethau cerdyn yn rhyddhau'n wythnosol gydag ychydig o ddigwyddiadau, ac mae'r tîm risg yn derbyn cofnod y biblinell yn lle cyfarfod bwrdd newid ar gyfer y gwasanaeth hwn. Mae'r adolygiadau digwyddiadau yn ddi-fai, ac mae dau achos mynych yn cael eu trwsio. Mae'r gwasanaethau eraill yn aros ar yr hen fodel.

Beth sy'n newid: nid yw'r tîm hwn bellach yn aros am y cylch chwe wythnos ac mae ganddo olwg a rennir o gynhyrchu. Beth sy'n parhau'n anodd: mae gweddill y sefydliad yn amheus, oherwydd bod gan y tîm fwy o beirianwyr i bob gwasanaeth nag eraill; mae'r baich ar alwad wedi gwneud i ddau ddatblygwr ystyried gadael; ac mae'r biblinell a rennir yn dibynnu ar dîm llwyfan canolog sydd ag ôl-groniad hir. Mae'r rheolwr yn mynd â'r cwestiynau staffio a llwyfan at y grŵp arwain yn hytrach na chyflwyno'r canlyniad fel templed.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Byddwch yn berchen ar y gwasanaeth o'r dechrau i'r diwedd: dylunio, adeiladu, rhyddhau a rhedeg. Dysgwch sut mae gweithrediadau yn gweithio, rhannwch alwadau'n deg, a gwnewch arsylwadwyedd a llawlyfrau gweithredu yn rhan o'ch diffiniad o orffen.

### Timau gwasanaeth a gweithrediadau

Rhannwch yr hyn rydych yn ei wybod am fethiant ac adferiad, helpwch i adeiladu'r biblinell a'r monitro, a symudwch tuag at beiriannu eich gwaith eich hun. Cadwch y rheolaethau sy'n bwysig, a dangoswch sut mae awtomeiddio yn eu bodloni.

### Arweinyddiaeth a llywodraethu

Gosodwch nodau a rennir ar gyfer datblygu a gweithrediadau, ariennwch y llwyfan a'r hyfforddiant, a gwyliwch lwyth gwaith a therfynau galwadau. Peidiwch â graddio timau yn ôl rhifau cyflawni. Gofynnwch am dystiolaeth bod rheolaethau'n gweithio.

### Cwsmeriaid a defnyddwyr

Dylech weld atgyweiriadau cyflymach a newidiadau llai, mwy diogel. Dywedwch wrth dimau beth sydd bwysicaf, a rhowch adborth ar newidiadau sy'n eich amharu.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Mae DevOps yn ymestyn pryder ystwyth am feddalwedd gweithredol y tu hwnt i ryddhau i redeg a gwella'r gwasanaeth, gyda rhanddeiliaid yn cymryd rhan ac adborth yn barhaus. Rhybudd: peidiwch â'i drin fel pryniant offeryn neu enw tîm newydd; y diwylliant yw'r newid.

### AI

Gall cynorthwywyr AI helpu i ysgrifennu cod, profion a diffiniadau seilwaith, crynhoi logiau a digwyddiadau, a drafftio llawlyfrau gweithredu, gyda pherchennog ac adolygiad dynol o unrhyw beth sy'n cyrraedd cynhyrchu. Rhybudd: gall cynorthwyydd gyflwyno namau cynnil neu batrymau anniogel; cymhwyswch yr un gwiriadau piblinell ag ar gyfer newidiadau dynol, a tracwch newidiadau â chymorth AI sy'n methu. Gweler Pwnc 5.4 — AI Cynhyrchiol ar gyfer Digwyddiadau, Gwybodaeth a Newidiadau.

### Awtomeiddio

Awtomeiddiwch y llwybr i gynhyrchu, creu amgylcheddau, profi, a gweithrediadau arferol, gyda logiau ac ôl-dreiglo. Rhybudd: mae awtomeiddio yn crynhoi pŵer yn y biblinell, felly rheolwch fynediad ati ac adolygwch newidiadau i'r biblinell mor ofalus â newidiadau i'r gwasanaeth.

### Dadansoddeg

Edrychwch ar amlder defnyddio, amser arweiniol ar gyfer newidiadau, cyfradd methiant newid, ac amser i adfer, ynghyd â mesurau dibynadwyedd a chwsmeriaid. Rhybudd: mae'r mesurau cyflawni yn hawdd eu camddefnyddio, ac mae cymharu timau yn anwybyddu cyd-destun; defnyddiwch hwy i ddod o hyd i ble i wella. Gweler Pwnc 7.3 — Mesur ac Adrodd a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Tîm DevOps sy'n dod yn seilo newydd.** Mae grŵp yn cymryd yr enw ac mae'r trosglwyddiad yn parhau. Lledaenwch sgiliau a chyfrifoldeb ar draws timau.
- **Offer heb ddiwylliant.** Mae'r biblinell wedi'i hadeiladu ac mae'r bai'n parhau. Gweithiwch ar nodau a rennir ac arferion adolygu.
- **Arwriaeth barhaol ar alwad.** Mae datblygwyr yn llosgi allan. Gosodwch derfynau, rhannwch lwyth, a thrwsiwch achosion tudalennu.
- **Llwyfan gorfodol nad oes neb ei eisiau.** Mae timau'n gweithio o'i gwmpas. Trinwch dimau fel cwsmeriaid a mesurwch ddefnydd trwy ddewis.
- **Gollwng rheolaethau heb eu disodli.** Mae risg yn codi ac mae archwilwyr yn gwrthwynebu. Bodlonwch ddiben y rheolaeth ag awtomeiddio a chofnodion.
- **Rhifau cyflawni fel targedau.** Mae timau'n eu camddefnyddio. Defnyddiwch fesurau ar gyfer dysgu.
- **Anwybyddu diogelwch tan y diwedd.** Mae canfyddiadau'n cyrraedd yn hwyr ac yn rhwystro rhyddhau. Symudwch wiriadau i'r chwith.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Diwylliant | Nodau ar wahân i ddatblygu a gweithrediadau | Nodau a rennir mewn un tîm | Nodau a chyfrifoldeb a rennir wedi'u mabwysiadu'n eang | Arferion diwylliant yn cael eu hadolygu gyda thystiolaeth | Wedi'i rannu ar draws timau, cyflenwyr a phartneriaid |
| Piblinell | Rhyddhau â llaw | Adeiladu a phrofi awtomataidd | Llwybr awtomataidd i gynhyrchu ar gyfer y rhan fwyaf o wasanaethau | Piblinell yn eiddo ac yn cael ei gwella fel cynnyrch | Piblinellau'n cael eu llywodraethu a'u rhannu ar draws y sefydliad |
| Gweithrediadau | Galwadau ar wahân | Galwadau a rennir mewn un tîm | Galwadau a rennir gyda therfynau a chymorth | Llwyth galwadau ac achosion yn cael eu mesur | Gweithrediadau wedi'u peirianneg a'u hawtomeiddio ar draws gwasanaethau |
| Dysgu | Bai | Adolygiadau achlysurol | Adolygiadau di-fai gyda chamau gweithredu wedi'u holrhain | Dysgu'n cael ei fesur a'i rannu | Dysgu'n cael ei rannu ar draws timau a chyda chyflenwyr |

## Rhestr wirio

- [ ] Mae datblygwyr a gweithrediadau yn rhannu nodau ar gyfer dibynadwyedd a newid diogel.
- [ ] Mae'r tîm sy'n adeiladu gwasanaeth yn cymryd rhan yn ei redeg, o fewn terfynau synhwyrol ar alwad.
- [ ] Mae popeth sy'n newid y gwasanaeth mewn rheoli fersiynau ac yn mynd trwy'r biblinell.
- [ ] Mae gwiriadau diogelwch a pholisi yn rhedeg yn gynnar yn y biblinell.
- [ ] Gall datblygwyr weld monitro cynhyrchu.
- [ ] Rydym yn cynnal adolygiadau di-fai ac yn tracio'r camau gweithredu.
- [ ] Mae rheolaethau sy'n bwysig yn cael eu cadw a'u bodloni trwy awtomeiddio a chofnodion.
- [ ] Mae gan gymorth AI ar y gadwyn offer berchennog ac adolygiad dynol.

## Anogwyr AI

**Dod o hyd i drosglwyddiadau i'w tynnu.**

```text
Dyma ddisgrifiad o sut mae newid yn mynd o "cod wedi'i gwblhau" i "yn rhedeg mewn cynhyrchu" yn ein sefydliad: [gludwch y camau a phwy sy'n gwneud pob un].
Rhestrwch bob trosglwyddiad, pa wybodaeth sy'n pasio ar ei draws, a beth allai gael ei golli. Ar gyfer pob un, rhowch ddau gwestiwn i'w gofyn i'r bobl ar y naill ochr a'r llall. Peidiwch â chynnig atebion.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Crynhoi digwyddiad ar gyfer adolygiad di-fai.**

```text
Isod mae'r llinell amser a'r nodiadau o ddigwyddiad: [gludwch y llinell amser gyda'r enwau wedi'u tynnu].
Drafftiwch grynodeb niwtral o dan y penawdau hyn: beth ddigwyddodd, sut y'i canfuwyd, beth a wnaed, beth a helpodd, beth a'n harafodd, a chwestiynau ar gyfer yr adolygiad. Peidiwch â phriodoli bai na datgan achosion nad ydynt yn y nodiadau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio cyfweliad cwsmer llwyfan.**

```text
Rydym yn rhedeg llwyfan mewnol ar gyfer [diben]. Ein defnyddwyr yw [timau a rolau].
Ysgrifennwch ddeg cwestiwn cyfweliad agored i ddysgu beth sy'n eu helpu a'u rhwystro, gan osgoi cwestiynau sy'n awgrymu ateb. Ychwanegwch dri pheth i wrando amdanynt.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [postmortem](../../../../skills/postmortem/SKILL.md): defnyddiwch i redeg adolygiad di-fai gyda chamau gweithredu wedi'u holrhain.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): defnyddiwch i symud gwiriadau yn gynharach yn y biblinell.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): defnyddiwch i ddylunio trefniant ar alwad cynaliadwy.
- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i droi gwybodaeth weithredol yn llawlyfrau gweithredu byr, cyfredol.

## Prif ffynonellau

- Gene Kim, Jez Humble, Patrick Debois, and John Willis, *The DevOps Handbook*: yr egwyddorion a'r arferion, gydag astudiaethau achos.
- Gene Kim, Kevin Behr, and George Spafford, *The Phoenix Project*: nofel a gyflwynodd y syniadau i lawer o ddarllenwyr.
- DORA (dora.dev): ymchwil ar berfformiad cyflawni a dibynadwyedd.
- Wikipedia, "DevOps": trosolwg o'r hanes a'r arferion.

## Cyfeiriadau

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
