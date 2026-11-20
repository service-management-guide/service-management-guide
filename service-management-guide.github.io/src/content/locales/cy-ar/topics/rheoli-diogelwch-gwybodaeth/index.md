# Rheoli Diogelwch Gwybodaeth

**Mae rheoli diogelwch gwybodaeth yn diogelu cyfrinachedd, uniondeb ac argaeledd gwybodaeth a gwasanaethau; i dimau gwasanaeth mae'n gweithio orau pan fydd gwiriadau diogelwch wedi'u hadeiladu i mewn i'r biblinell gyflawni a gweithrediadau bob dydd, pan fydd digwyddiadau diogelwch yn cael eu trin fel digwyddiadau eraill gyda gofal ychwanegol, a phan fydd penderfyniadau risg yn eiddo ac wedi'u cofnodi.**

## Pam mae hyn yn bwysig

Mae pob gwasanaeth yn dal gwybodaeth y mae rhywun ei heisiau: cofnodion cwsmeriaid, cymwysterau, eiddo deallusol, data ariannol. Mae pob gwasanaeth hefyd yn dibynnu ar wybodaeth fod yn gywir ac ar gael pan fo ei hangen. Mae methiannau diogelwch yn taro'r rhain i gyd. Mae toriad data yn datgelu cwsmeriaid, mae cofnod a ymyrrwyd ag ef yn camarwain penderfyniadau, ac mae ymosodiad ransomware yn atal gwaith.

Gall diogelwch deimlo fel byd ar wahân o arbenigwyr, rheolau ac archwiliadau, sy'n cyrraedd ar ddiwedd prosiect i ddweud na. Mae'r model hwnnw'n methu mewn cyflawni parhaus, lle mae newid yn aml ac mae gwiriadau hwyr yn rhy araf. Mae'r dewis amgen, a elwir yn aml yn DevSecOps, yn adeiladu diogelwch i mewn i ddylunio, cod, piblinell a gweithrediadau fel ei fod yn rhan o bob newid ac yn rhan o bob sifft. Mae arbenigwyr diogelwch yn dod yn bartneriaid sy'n gosod canllawiau diogelu ac yn helpu timau i'w bodloni, nid porthorion sy'n archwilio wedyn.

Mae gan reoli gwasanaethau ei fudd ei hun. Mae digwyddiadau diogelwch yn cyrraedd trwy'r ddesg gwasanaeth. Mae ceisiadau mynediad a newidiadau yn benderfyniadau diogelwch. Mae cyflenwyr yn rhan o'r wyneb ymosod. Mae gwybodaeth a monitro yn cefnogi canfod. Mae'r pwnc hwn yn esbonio'r prif syniadau a sut i weithio gyda swyddogaeth ddiogelwch, heb geisio bod yn werslyfr diogelwch. Mae'n perthyn i reoli ceisiadau gwasanaeth (Pwnc 3.6 — Rheoli Ceisiadau Gwasanaeth), rheoli cyflenwyr (Pwnc 3.14 — Rheoli Cyflenwyr), a llywodraethu (Pwnc 8.1 — Llywodraethu, Risg a Chydymffurfio). Nid yw'n rhoi cyngor cyfreithiol na chydymffurfio; gwiriwch y rheolau sy'n berthnasol i chi.

## Cysyniadau craidd

**Y driad CIA.** Mae diogelwch gwybodaeth yn anelu at ddiogelu tair priodwedd: cyfrinachedd (dim ond pobl awdurdodedig all weld gwybodaeth), uniondeb (mae gwybodaeth yn gywir ac nid yw wedi'i ymyrryd â hi), ac argaeledd (gellir defnyddio gwybodaeth a gwasanaethau pan fo angen). Mae erthygl Wikipedia ar ddiogelwch gwybodaeth yn disgrifio'r driad. Mae rhai fframweithiau'n ychwanegu eraill, fel dilysrwydd ac atebolrwydd.

**Dull ar sail risg.** Mae ymdrech diogelwch yn gyfyngedig, felly dylai fynd lle mae risg uchaf. Mae risg yn cyfuno tebygolrwydd digwyddiad niweidiol â'i effaith. Mae Wikipedia yn disgrifio rheoli risg yn gyffredinol. Mae cofrestr risg yn cofnodi risgiau, perchnogion a phenderfyniadau: lleihau, derbyn, trosglwyddo neu osgoi.

**System rheoli diogelwch gwybodaeth (ISMS).** Set o bolisïau, prosesau a rheolaethau ar gyfer rheoli risg diogelwch gwybodaeth, gydag adolygiad rheolaidd. Mae ISO/IEC 27001 yn pennu gofynion ar gyfer ISMS ac yn sail ar gyfer ardystio. Mae Wikipedia yn ei ddisgrifio. Gweler Pwnc 1.8 — Fframweithiau a Safonau Rheoli Gwasanaethau. Mae Fframwaith Seiberddiogelwch NIST, gan asiantaeth yn yr Unol Daleithiau ac a ddefnyddir yn eang mewn mannau eraill, yn trefnu gweithgareddau yn swyddogaethau fel nodi, diogelu, canfod, ymateb ac adfer.

**Rheolaethau.** Mesurau sy'n lleihau risg: technegol (amgryptio, rheolaethau mynediad, clytio), sefydliadol (polisïau, hyfforddiant, gwahanu dyletswyddau), a ffisegol (cloeon, logiau ymwelwyr). Dylai rheolaethau fod yn gymesur â'r risg ac wedi'u profi.

**Amddiffyn yn ddwfn.** Defnyddio haenau lluosog o reolaethau fel nad yw methiant un yn golygu methiant pawb. Mae Wikipedia yn disgrifio amddiffyn yn ddwfn mewn cyfrifiadura. Mae ymosodwr sy'n pasio un rhwystr yn cwrdd ag un arall.

**Y fraint leiaf a mynediad.** Dylai pobl a systemau gael y mynediad sydd ei angen arnynt yn unig, ac am gyhyd ag y bo ei angen arnynt yn unig. Mae Wikipedia yn disgrifio'r egwyddor o'r fraint leiaf. Mae dilysu cryf, gan gynnwys dilysu aml-ffactor, yn lleihau'r siawns y bydd cyfrineiriau a ddwyn yn rhoi mynediad. Gweler Pwnc 3.6 — Rheoli Ceisiadau Gwasanaeth.

**Ymddiriedaeth sero.** Dull lle na ymddiriedir yn unrhyw ddefnyddiwr na dyfais yn ddiofyn oherwydd ei leoliad rhwydwaith; gwirir pob cais. Mae Wikipedia yn disgrifio pensaernïaeth ymddiriedaeth sero. Mae'n symud sylw o ymyl y rhwydwaith i hunaniaeth, cyflwr dyfais a data.

**Rheoli gwendidau a chlytiau.** Dod o hyd i wendidau mewn meddalwedd a systemau a'u trwsio mewn pryd. Mae erthyglau Wikipedia ar reoli gwendidau ac ar Common Vulnerabilities and Exposures (CVE) yn disgrifio sut y caiff gwendidau eu nodi a'u holrhain. Blaenoriaethwch yn ôl amlygiad ac effaith, nid dim ond sgorau difrifoldeb. Gweler Pwnc 4.2 — Rheoli Asedau Meddalwedd.

**Cadwyn gyflenwi meddalwedd.** Mae meddalwedd fodern yn cynnwys llawer o gydrannau gan eraill: llyfrgelloedd, cynwysyddion, offer adeiladu. Mae gwendid mewn un yn effeithio ar bawb sy'n ei ddefnyddio. Mae Wikipedia yn disgrifio'r gadwyn gyflenwi meddalwedd. Mae gwybod beth sydd yn eich meddalwedd, trwy fil deunyddiau meddalwedd, yn eich helpu i ymateb pan gyhoeddir gwendid.

**Modelu bygythiadau.** Ffordd strwythuredig o feddwl sut y gellid ymosod ar system, yn gynnar mewn dylunio, fel y gellir cynllunio mesurau lliniaru. Mae Wikipedia yn disgrifio modelau bygythiad. Mae'n rhad ar adeg dylunio ac yn ddrud yn ddiweddarach.

**DevSecOps a'r biblinell.** Adeiladu gwiriadau diogelwch i mewn i'r biblinell gyflawni: dadansoddi statig o god, sganio dibyniaethau, gwiriadau am gyfrinachau mewn cod, sganio cynwysyddion, a gwiriadau polisi. Mae Wikipedia yn disgrifio profi diogelwch cymwysiadau statig. Mae'r gwiriadau'n rhedeg ar bob newid ac yn cynhyrchu tystiolaeth. Gweler Pwnc 6.4 — Piblinellau a Newid Awtomataidd.

**Canfod a monitro.** Mae monitro diogelwch yn chwilio am arwyddion ymosodiad, fel mewngofnodi anarferol neu symud data. Mae systemau rheoli gwybodaeth a hysbysiadau diogelwch (SIEM) yn casglu ac yn dadansoddi logiau o lawer o ffynonellau. Mae Wikipedia yn disgrifio SIEM. Dim ond os yw logiau'n gyflawn a rhybuddion wedi'u tiwnio y maent yn gweithio. Gweler Pwnc 3.10 — Monitro a Rheoli Hysbysiadau.

**Digwyddiadau diogelwch.** Digwyddiad sy'n peryglu, neu'n bygwth peryglu, gwybodaeth neu systemau. Mae Wikipedia yn disgrifio rheoli digwyddiadau diogelwch cyfrifiadurol. Mae digwyddiad diogelwch angen rolau digwyddiadau Pwnc 3.2 — Rheoli Digwyddiadau, a mwy: cadw tystiolaeth, cyfyngu'r ymosodiad, a phenderfynu ar hysbysu cwsmeriaid a rheoleiddwyr, a all fod yn ofynnol yn gyfreithiol mewn rhai awdurdodaethau. Cynhwyswch gynghorwyr cyfreithiol a diogelwch yn gynnar.

**Pobl.** Mae llawer o ymosodiadau yn dechrau gydag unigolyn: e-byst gwe-rwydo, peirianneg gymdeithasol, arferion gwan. Mae Wikipedia yn disgrifio gwe-rwydo ac ymwybyddiaeth diogelwch. Mae hyfforddiant yn helpu fwyaf pan fo'n fyr, yn aml, ac wedi'i glymu wrth enghreifftiau go iawn, a phan fo adrodd camgymeriad yn ddiogel ac yn hawdd.

**Preifatrwydd.** Mae diogelu gwybodaeth bersonol yn gysylltiedig â diogelwch, ond nid yr un peth. Mae cyfreithiau fel y Rheoliad Diogelu Data Cyffredinol yn yr Undeb Ewropeaidd yn gosod rhwymedigaethau ar gyfer data personol. Mae Wikipedia yn disgrifio preifatrwydd drwy ddylunio (privacy by design), y syniad o adeiladu preifatrwydd i mewn i systemau o'r dechrau. Ceisiwch gyngor arbenigol.

**Sut mae'r lensys yn ffitio.** Diogelwch yw'r maes lle mae cyflymder ystwyth a rheolaeth yn cwrdd yn fwyaf sydyn. Mae arfer ystwyth yn trin gwaith diogelwch fel rhan o'r ôl-groniad ac yn cynnwys pobl diogelwch yn y tîm. Mae AI yn helpu amddiffynwyr ac ymosodwyr; mae angen ei lywodraethu ei hun arno (gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI). Mae awtomeiddio yn gorfodi rheolaethau'n gyson. Mae dadansoddeg yn dangos amlygiad ac amseroedd ymateb.

## Arferion gorau

1. **Dechreuwch â golwg ar sail risg.** Rhestrwch y wybodaeth a'r gwasanaethau sydd bwysicaf, y bygythiadau y maent yn eu hwynebu, a'r rheolaethau sydd ar waith. Canolbwyntiwch ymdrech ar y bylchau mwyaf.
2. **Gweithiwch gyda diogelwch fel partneriaid.** Cynhwyswch unigolyn diogelwch mewn dylunio a chynllunio. Gofynnwch pa ganllawiau diogelu y dylai'r tîm eu dilyn, a'u cadw'n brin ac yn glir.
3. **Adeiladwch wiriadau i mewn i'r biblinell.** Rhedwch sganiau cod, dibyniaethau, cynwysyddion a chyfrinachau ar bob newid. Trwsiwch achosion canfyddiadau mynych, a gadewch i wiriad sy'n methu atal rhyddhad lle mae'r risg yn ddifrifol.
4. **Cymhwyswch y fraint leiaf a dilysu cryf.** Rhowch y mynediad lleiaf, mynnwch ddilysu aml-ffactor, adolygwch fynediad yn rheolaidd, a'i dynnu pan nad oes ei angen mwyach.
5. **Cadwch restr a chlytiwch yn brydlon.** Gwyddoch pa feddalwedd a systemau a redwch, tracwch wendidau, a blaenoriaethwch yn ôl amlygiad ac effaith. Gosodwch dargedau ar gyfer amser i glytio a'u holrhain.
6. **Gwyddoch eich cadwyn gyflenwi.** Cofnodwch y cydrannau yn eich meddalwedd a'r cyflenwyr y tu ôl i'ch gwasanaethau. Gwyliwch am wendidau a gyhoeddir a gael ffordd o ddod o hyd i systemau yr effeithiwyd arnynt yn gyflym.
7. **Modelwch fygythiadau'n gynnar.** Ar gyfer gwasanaethau newydd a newidiadau mawr, treuliwch awr yn meddwl fel ymosodwr, a chofnodwch y mesurau lliniaru a ddewiswch.
8. **Paratowch i ymateb.** Ysgrifennwch gynllun digwyddiad diogelwch gyda rolau, cysylltiadau, trin tystiolaeth a phwyntiau penderfynu. Ymarferwch, gan gynnwys penderfyniadau am hysbysu. Cynhwyswch gyngor cyfreithiol.
9. **Gwnewch adrodd yn ddiogel.** Anogwch bobl i adrodd negeseuon amheus a chamgymeriadau'n gyflym, ac ymatebwch yn garedig. Mae ofn bai yn cuddio digwyddiadau.
10. **Cofnodwch benderfyniadau risg.** Pan dderbynnir risg, cofnodwch pwy a'i derbyniodd, pam, a phryd y caiff ei hadolygu. Gwnewch y gofrestr yn weladwy i'r rhai sy'n berchen ar y gwasanaethau.

## Cwestiynau i'w trafod gyda'ch tîm

**Beth yw'r darnau mwyaf gwerthfawr a mwyaf sensitif o wybodaeth rydym yn eu dal, a phwy all eu cyrraedd?**
Gwnewch restr fer. Disgwyliwch bethau annisgwyl yn pwy sydd â mynediad a ble mae copïau'n byw. Dilynwch trwy ddewis un set ddata a gwirio ei rhestr mynediad.

**Pa wiriadau diogelwch sy'n rhedeg ar bob newid, a pha rai sy'n digwydd ar y diwedd yn unig?**
Cymharwch y biblinell â'r rhestr wirio rhyddhau. Disgwyliwch adolygiadau llaw hwyr. Dilynwch trwy ddewis un gwiriad hwyr i'w symud i'r biblinell.

**Pa mor gyflym rydym yn clytio gwendid difrifol, a sut rydym yn canfod pa systemau sy'n cael eu heffeithio?**
Gofynnwch am yr un diwethaf. Disgwyliwch "fe frysion ni". Dilynwch trwy gytuno ar amser targed a ffordd o restru systemau yr effeithiwyd arnynt, fel o restr.

**Beth fydden ni'n ei wneud yn ystod awr gyntaf toriad data a amheuir, a phwy sy'n penderfynu am ddweud wrth gwsmeriaid neu reoleiddwyr?**
Rhedwch drafodaeth senario fer. Disgwyliwch fylchau am hawliau penderfynu. Dilynwch trwy ysgrifennu un dudalen gyda rolau a chysylltiadau, a chynnwys cynghorwyr cyfreithiol.

**Pa mor ddiogel yw hi i staff adrodd camgymeriad, fel clicio dolen ddrwg?**
Mae hyn yn profi diwylliant. Gofynnwch beth ddigwyddodd i'r person diwethaf a wnaeth. Dilynwch trwy gytuno ar sut y caiff adroddiadau eu cydnabod a beth a ddywedir yn gyhoeddus.

**Sut y gallai AI helpu ein gwaith diogelwch, a pha risgiau newydd y mae'n eu hychwanegu?**
Gall AI grynhoi rhybuddion ac adolygu cod. Gall hefyd ollwng data a gludir iddo, cynhyrchu cod anniogel, a chael ei dargedu gan ymosodwyr. Gofynnwch pwy sy'n berchen ar bob defnydd a pha ddata y caniateir ei rannu. Dilynwch trwy gytuno ar reol ynghylch yr hyn na chaniateir ei ludo i offer allanol.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm digidol manwerthu banc rhanbarthol yn dilyn adolygiad diogelwch cyn pob rhyddhad, a gynhelir gan dîm canolog unwaith y mis. Mae rhyddhau yn ciwio amdano. Mae datblygwyr yn ei weld fel rhwystr; mae staff diogelwch yn gweld canfyddiadau mynych ac ychydig o amser. Y chwarter diwethaf, roedd llyfrgell â gwendid hysbys ar gynhyrchu am chwe wythnos cyn i'r adolygiad ddod o hyd iddi.

Mae pennaeth diogelwch a phennaeth peirianneg yn cytuno i roi cynnig ar fodel arall ar gyfer un cynnyrch. Mae peiriannydd diogelwch yn ymuno â'r tîm am hanner pob wythnos. Mae'r biblinell yn ennill sganio dibyniaethau, dadansoddi statig, a gwiriad am gyfrinachau mewn cod, ac yn methu adeiladwaith ar gyfer canfyddiadau critigol. Mae'r tîm yn cadw rhestr feddalwedd syml a gynhyrchir o'r biblinell. Mae pob prif nodwedd yn cael sesiwn fodelu bygythiadau awr ar adeg dylunio. Disodlir yr adolygiad misol ar gyfer y cynnyrch hwn gan archwiliad sampl ysgafn.

O fewn chwarter, mae'r biblinell yn dal dwy lyfrgell fregus ac un cyfrinair (credential) wedi'i ymrwymo cyn rhyddhau. Pan gyhoeddir gwendid llyfrgell newydd a adroddir yn eang, mae'r rhestr yn nodi'r tri gwasanaeth yr effeithiwyd arnynt o fewn awr; clytir dau yr un diwrnod a threfnir y trydydd gyda rheolaeth ddigolledu. Mae'r tîm yn canfod bod ei gynllun digwyddiad diogelwch yn tybio cyswllt a adawodd, ac yn ei ddiweddaru.

Beth sy'n newid: mae canfyddiadau'n cyrraedd pan fyddant yn rhad i'w trwsio, ac mae'r ciw misol yn diflannu ar gyfer y cynnyrch hwn. Beth sy'n parhau'n anodd: mae gwiriadau'r biblinell yn cynhyrchu llawer o ganfyddiadau difrifoldeb isel, ac mae datblygwyr wedi dechrau eu hanwybyddu; nid yw'r rhestr yn cwmpasu gwasanaethau trydydd parti y mae'r cynnyrch yn eu galw; ac mae rheoleiddiwr y banc yn dal i ofyn am dystiolaeth ar ffurf wahanol, sy'n costio ymdrech i'w chynhyrchu. Mae'r timau'n cytuno i diwnio'r trothwyon ac i ofyn i'r rheoleiddiwr pa gofnodion piblinell y bydd yn eu derbyn.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Byddwch yn berchen ar ddiogelwch fel rhan o ansawdd: modelwch fygythiadau, defnyddiwch wiriadau'r biblinell, trwsiwch ganfyddiadau'n brydlon, a thrinwch gyfrinachau'n ofalus. Gofynnwch i ddiogelwch am ganllawiau diogelu, a dywedwch wrthynt beth sy'n eich arafu.

### Timau gwasanaeth a gweithrediadau

Cymhwyswch y fraint leiaf, clytiwch ar amser, a gwyliwch am weithgaredd anarferol. Trinwch ddigwyddiadau diogelwch gyda disgyblaeth digwyddiadau mawr, a chadwch dystiolaeth. Adroddwch yr hyn a welwch i'r tîm diogelwch.

### Arweinyddiaeth a llywodraethu

Penderfynwch awydd am risg, ac ariennwch atal ac ymateb. Gofynnwch am dystiolaeth bod rheolaethau'n gweithio. Crëwch ddiwylliant lle mae adrodd camgymeriadau'n ddiogel. Gwyddoch pwy sy'n penderfynu am hysbysu cwsmeriaid a rheoleiddwyr.

### Cwsmeriaid a defnyddwyr

Defnyddiwch ddilysu cryf, adroddwch negeseuon amheus, a chadwch eich cymwysterau eich hun yn ddiogel. Gofynnwch i ddarparwyr sut maent yn diogelu eich gwybodaeth a beth y byddant yn ei ddweud wrthych mewn toriad.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Rhowch waith diogelwch ar yr un ôl-groniad â nodweddion, cynhwyswch bobl diogelwch yn y tîm, a gwellwch mewn camau bach ar ôl pob canfyddiad a digwyddiad. Rhybudd: mae diogelwch trwy "sbrint 0" neu adolygiad munud olaf yn colli'r pwynt; adeiladwch ef i mewn i lif y gwaith.

### AI

Gall AI helpu i grynhoi rhybuddion, adolygu cod am wendidau, a drafftio nodiadau digwyddiad, gydag unigolyn yn gyfrifol am benderfyniadau. Mae hefyd yn dod â risgiau: data yn gollwng i offer allanol, cod a gynhyrchir yn anniogel, a thrin y model. Gosodwch reolau am ddata ac adolygwch newidiadau a gynhyrchir gan AI fel unrhyw rai eraill. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

### Awtomeiddio

Awtomeiddiwch sganio, clytio systemau arferol, adolygiadau mynediad, a dal tystiolaeth, gyda logiau a rheolaethau ar yr awtomeiddio ei hun. Rhybudd: mae adfer awtomataidd â breintiau eang yn darged; cyfyngwch a monitrwch ef. Gweler Pwnc 6.4 — Piblinellau a Newid Awtomataidd.

### Dadansoddeg

Tracwch amser i glytio, amlygiad yn ôl difrifoldeb, cwblhau adolygiadau mynediad, canfyddiadau diogelwch fesul newid, ac amseroedd canfod ac ymateb. Rhybudd: gall cyfrif gwendidau a gaewyd wobrwyo atgyweiriadau hawdd, a gall cyfrifon digwyddiadau ostwng oherwydd bod canfod yn wael; cyfunwch fesurau a phrofwch ganfod. Gweler y llyfr *Service Management Metrics* a Phwnc 7.3 — Mesur ac Adrodd.

## Dulliau methu cyffredin

- **Diogelwch ar y diwedd.** Mae adolygiadau'n rhwystro rhyddhau ac yn canfod problemau'n hwyr. Adeiladwch wiriadau i mewn i'r biblinell a dylunio.
- **Gorlwytho rhybuddion a chanfyddiadau.** Mae timau'n anwybyddu sganwyr. Tiwniwch drothwyon a thrwsiwch achosion mynych.
- **Mynediad gormodol.** Mae cyfrifon yn cadw breintiau nad oes eu hangen mwyach. Adolygwch a thynnwch yn rheolaidd.
- **Dim rhestr.** Ni allwch ddweud beth sy'n cael ei effeithio gan wendid newydd. Cynhyrchwch a chadwch restr.
- **Cynlluniau digwyddiad heb eu profi.** Mae cysylltiadau wedi dyddio. Ymarferwch a diweddarwch.
- **Bai am adrodd camgymeriadau.** Cuddir digwyddiadau. Ymatebwch yn garedig ac yn gyflym.
- **Derbyn risg heb berchennog.** Derbynnir risgiau yn ddiofyn. Cofnodwch pwy a dderbyniodd a phryd i adolygu.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Rheoli risg | Anffurfiol | Prif risgiau wedi'u rhestru | Cofrestr risg gyda pherchnogion a phenderfyniadau | Risgiau'n cael eu hadolygu yn erbyn digwyddiadau a phrofion | Risg yn cael ei rheoli ar draws y sefydliad a chyflenwyr |
| Diogelwch y biblinell | Adolygiad llaw ar y diwedd | Rhai sganiau | Gwiriadau safonol ar bob newid | Canfyddiadau ac atgyweiriadau'n cael eu mesur | Polisi a gwiriadau'n cael eu haddasu a'u hawtomeiddio gyda goruchwyliaeth |
| Mynediad | Ad hoc | Adolygiadau sylfaenol | Y fraint leiaf a dilysu aml-ffactor yn safonol | Mynediad yn cael ei adolygu ar sail tystiolaeth | Mynediad yn cael ei addasu'n barhaus ar draws systemau |
| Canfod ac ymateb | Adweithiol | Logio sylfaenol | Monitro diogelwch a chynllun digwyddiad wedi'i ymarfer | Amseroedd canfod ac ymateb yn cael eu mesur | Ymateb wedi'i gydlynu ar draws timau a chyflenwyr |

## Rhestr wirio

- [ ] Rydym yn gwybod ein gwybodaeth fwyaf sensitif a phwy all ei chyrraedd.
- [ ] Mae gwiriadau diogelwch yn rhedeg yn y biblinell ar bob newid.
- [ ] Mae mynediad yn dilyn y fraint leiaf, gyda dilysu aml-ffactor ac adolygiad rheolaidd.
- [ ] Rydym yn cadw rhestr o feddalwedd ac yn tracio gwendidau.
- [ ] Mae gennym gynllun digwyddiad diogelwch, gyda rolau, cysylltiadau a chyngor cyfreithiol, ac wedi'i ymarfer.
- [ ] Gall staff adrodd camgymeriadau'n ddiogel.
- [ ] Mae derbyn risg yn cael ei gofnodi gyda pherchennog a dyddiad adolygu.
- [ ] Mae rheolau'n bodoli ar gyfer pa ddata y caniateir ei rannu ag offer AI.

## Anogwyr AI

**Paratoi sesiwn modelu bygythiadau.**

```text
Ein system: [disgrifiwch gydrannau, data a defnyddwyr]. Ffiniau ymddiriedaeth rydym yn eu hadnabod: [rhestrwch].
Rhestrwch gwestiynau i'w gofyn mewn sesiwn modelu bygythiadau awr, wedi'u grwpio yn ôl cydran a llif data, a nodwch yr hyn nad ydym wedi'i ddweud wrthych. Peidiwch â rhestru ymosodiadau penodol fel ffeithiau am ein system.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Crynhoi canfyddiadau gwendid i'w blaenoriaethu.**

```text
Dyma restr o ganfyddiadau gwendid gyda difrifoldeb, y system yr effeithir arni, ac a yw'r system yn agored i'r rhyngrwyd: [gludwch, gyda manylion sensitif wedi'u tynnu].
Grwpiwch hwy, rhestrwch y rhai sy'n cyfuno difrifoldeb uchel ag amlygiad, a rhowch un cwestiwn fesul grŵp am effaith busnes. Peidiwch â honni bod unrhyw un yn ecsbloetiadwy.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio canllaw awr gyntaf.**

```text
Ein cyd-destun: [math o sefydliad, systemau allweddol]. Rolau sydd ar gael: [rhestrwch].
Drafftiwch restr wirio awr gyntaf un dudalen ar gyfer toriad data a amheuir gyda chamau ar gyfer cyfyngu, cadw tystiolaeth, cyfathrebu, a phenderfyniadau sydd angen mewnbwn cyfreithiol neu arweinyddiaeth. Peidiwch â datgan rhwymedigaethau cyfreithiol; rhestrwch gwestiynau i'n cynghorydd cyfreithiol yn lle hynny.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [security-testing](../../../../skills/security-testing/SKILL.md): defnyddiwch i gynllunio gwiriadau a phrofion diogelwch.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): defnyddiwch i fframio cwestiynau preifatrwydd ar gyfer eich cynghorydd cyfreithiol.
- [risk-register](../../../../skills/risk-register/SKILL.md): defnyddiwch i gofnodi risgiau, perchnogion a phenderfyniadau.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): defnyddiwch i gynllunio ymateb, gan gynnwys digwyddiadau diogelwch.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): defnyddiwch i ddewis dangosyddion rhybudd cynnar.

## Prif ffynonellau

- ISO/IEC 27001 (y safon ei hun): y gofynion ar gyfer system rheoli diogelwch gwybodaeth; darllenwch yr argraffiad cyfredol gan y cyhoeddwr.
- NIST, Cybersecurity Framework (nist.gov/cyberframework): fframwaith a ddefnyddir yn eang gan asiantaeth yn yr Unol Daleithiau.
- OWASP (owasp.org): arweiniad cymunedol ar ddiogelwch cymwysiadau.
- Wikipedia, "Information security" a "ISO/IEC 27001": trosolygon o'r maes a'r safon.

## Cyfeiriadau

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
