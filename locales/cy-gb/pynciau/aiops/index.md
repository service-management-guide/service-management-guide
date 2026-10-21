# AIOps

**Mae AIOps yn cymhwyso dysgu peirianyddol at ddata gweithrediadau i leihau sŵn rhybuddion, canfod anomaleddau, cydberthyn hysbysiadau, ac awgrymu achosion; mae'n talu ar ei ganfed pan gaiff ei brofi yn erbyn digwyddiadau'r gorffennol, ei gadw'n ddealladwy i'r bobl sy'n ymateb, a'i drin fel cynorthwyydd i staff ar alwad, nid yn lle barn.**

## Pam mae hyn yn bwysig

Mae timau gweithrediadau yn boddi mewn data. Mae gwasanaeth modern yn allyrru miliynau o linellau log, miloedd o fetrigau, a channoedd o rybuddion bob dydd. Ni all pobl ddarllen y cyfan, felly maent yn gosod trothwyon a rheolau i benderfynu beth i edrych arno. Mae'r rheolau'n tyfu, yn rhyngweithio ac yn dirywio. Mae'r rhan fwyaf o rybuddion yn troi allan i fod yn sŵn, ac mae rhai problemau go iawn yn cuddio yn eu plith.

Mae AIOps, term a fathwyd gan y cwmni dadansoddi Gartner yng nghanol y 2010au o "algorithmic IT operations" ac sydd bellach yn cael ei ddarllen yn gyffredinol fel "AI ar gyfer gweithrediadau TG", yn addo helpu. Mae'n defnyddio dysgu peirianyddol i ddysgu beth sy'n normal, i sylwi pan nad yw rhywbeth, i grwpio rhybuddion cysylltiedig yn un digwyddiad, ac i awgrymu ble y gallai'r achos fod. Mae Wikipedia yn disgrifio AIOps fel cymhwyso deallusrwydd artiffisial i wella gweithrediadau TG. Mae gwerthwyr yn ei gyflwyno mewn termau cryf. Mae ymarferwyr yn adrodd enillion go iawn mewn rhai defnyddiau, fel lleihau sŵn, a siom mewn eraill, fel diagnosis cwbl awtomatig.

I reoli gwasanaethau mae'r cwestiwn yn ymarferol: pa rannau o AIOps sy'n rhoi gwerth dibynadwy, sut ydych yn eu gwirio, a sut ydych yn cadw pobl mewn rheolaeth? Mae'r pwnc hwn yn disgrifio'r prif dechnegau, eu dulliau methu nodweddiadol, a llwybr synhwyrol i fabwysiadu. Mae'n adeiladu ar fonitro (Pwnc 3.10 — Monitro a Rheoli Hysbysiadau) ac arsylwadwyedd (Pwnc 7.4 — Arsylwadwyedd a Thelemetreg), ac mae'n gorgyffwrdd â rheoli digwyddiadau (Pwnc 3.2 — Rheoli Digwyddiadau) ac awtomeiddio llawlyfrau gweithredu (Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer).

## Cysyniadau craidd

**AIOps.** Defnyddio technegau AI, yn bennaf dysgu peirianyddol ac ystadegau, ar ddata gweithrediadau i gefnogi tasgau fel canfod anomaleddau, cydberthyn hysbysiadau, awgrymu gwraidd achos, a rhagfynegi. Set o dechnegau ydyw, nid un cynnyrch, ac mae galluoedd yn amrywio'n eang.

**Canfod anomaleddau.** Dod o hyd i bwyntiau data neu batrymau sy'n wahanol i'r hyn a ddisgwylir. Mae Wikipedia yn disgrifio canfod anomaleddau a'i ddulliau. Mewn gweithrediadau, gallai model ddysgu patrwm dyddiol ac wythnosol normal ceisiadau a nodi gwyriadau. Nid yw normal yn gyson: mae tymhorolrwydd, a ddisgrifir ar Wikipedia, yn golygu bod bore Llun yn edrych yn wahanol i nos Sul. Mae canfodyddion da yn ei ystyried.

**Cyfres amser.** Data a gofnodir dros amser, fel amseroedd ymateb neu gyfrifon gwallau. Mae Wikipedia yn disgrifio dadansoddi cyfres amser. Mae'r rhan fwyaf o fetrigau gweithrediadau yn gyfresi amser, ac mae technegau AIOps yn adeiladu ar ddulliau ar gyfer eu modelu a'u rhagweld.

**Cydberthyn hysbysiadau a lleihau sŵn.** Cyfuno rhybuddion sy'n deillio o un achos yn un digwyddiad, a rhwystro dyblygion a sŵn hysbys. Mae Wikipedia yn disgrifio cydberthyn hysbysiadau. Mae technegau clystyru, a ddisgrifir ar Wikipedia fel dadansoddi clwstwr, yn grwpio eitemau yn ôl tebygrwydd. Mae cydberthyn da yn troi dau gant o rybuddion yn un, gyda'r ffynhonnell debygol wedi'i henwi.

**Awgrymu gwraidd achos.** Defnyddio topoleg, cofnodion newid, logiau a digwyddiadau'r gorffennol i gynnig ble mae nam yn debygol o fod. Damcaniaethau yw awgrymiadau. Maent yn fwyaf defnyddiol pan fyddant yn pwyntio at newid diweddar neu ddibyniaeth, ac yn lleiaf dibynadwy pan fo'r achos yn newydd.

**Gweithrediadau rhagfynegol.** Rhagweld problemau cyn iddynt ddigwydd, fel disg a fydd yn llenwi ymhen tridiau neu gydran sy'n debygol o fethu. Mae Wikipedia yn disgrifio cynnal a chadw rhagfynegol a dadansoddeg ragfynegol. Tebygolrwyddau yw rhagfynegiadau, ac mae gan bob un gost am rybuddion ffug ac am rai a gollwyd. Gweler Pwnc 7.5 — Dadansoddeg Ragfynegol a Rhagweld.

**Dadansoddi logiau.** Defnyddio technegau o brosesu iaith naturiol ac ystadegau i ddod o hyd i batrymau mewn logiau, fel mathau newydd o negeseuon neu newidiadau mewn amlder. Mae Wikipedia yn disgrifio dadansoddi logiau.

**AI cynhyrchiol mewn gweithrediadau.** Gall modelau iaith mawr grynhoi llinellau amser digwyddiadau, cyfieithu rhybuddion i iaith syml, drafftio camau llawlyfr gweithredu, ac ateb cwestiynau am yr amgylchedd. Maent yn ychwanegu hyblygrwydd a'r risg o gynnwys a ddyfeisiwyd. Gweler Pwnc 5.4 — AI Cynhyrchiol ar gyfer Digwyddiadau, Gwybodaeth a Newidiadau.

**Manylder, adalw a chostau gwallau.** Gall canfodydd fod yn anghywir mewn dwy ffordd: gall godi rhybudd ffug (positif ffug) neu golli problem go iawn (negatif ffug). Mae Wikipedia yn disgrifio'r ddau fath o wall a'r mesurau manylder ac adalw. Mae tiwnio i leihau un yn cynyddu'r llall. Mae'r cydbwysedd cywir yn dibynnu ar gost pob un, ac mae gwasanaethau gwahanol yn haeddu gosodiadau gwahanol.

**Drifft cysyniad.** Mae modelau'n dysgu o ddata'r gorffennol, ac mae'r byd yn newid: rhyddhau newydd, patrymau traffig newydd, seilwaith newydd. Mae Wikipedia yn disgrifio drifft cysyniad, lle mae priodweddau ystadegol yr hyn a ragfynegir yn newid dros amser. Gall model a oedd yn gywir ym mis Ionawr fod yn gamarweiniol erbyn mis Mehefin oni chaiff ei fonitro a'i ailhyfforddi.

**Eglurhad.** Bydd ymatebwyr yn ymddiried mwy mewn awgrym, ac yn ei gywiro'n fwy defnyddiol, os gallant weld pam y'i gwnaed: pa fetrigau a symudodd, pa hysbysiadau a grwpiwyd, pa newid a ragflaenodd y symudiad. Mae Wikipedia yn disgrifio deallusrwydd artiffisial eglurhaol a phroblem blychau duon. Ar gyfer gweithrediadau, ffafriwch ddulliau sy'n dangos eu tystiolaeth.

**Ansawdd data a chwmpas.** Mae AIOps angen data da: cyflawn, cyson, wedi'i stampio ag amser yn gywir, ac wedi'i labelu â gwasanaethau a pherchnogion. Mae data coll neu anghyson yn cynhyrchu signalau a gollwyd a chysylltiadau ffug. Gweler Pwnc 4.4 — Rheoli Cyfluniad a Phwnc 7.2 — Sylfeini a Llywodraethu Data.

**Syniadau awtonomig a hunan-iachâd.** Y nod hirsefydlog o systemau sy'n canfod ac yn trwsio eu namau eu hunain, a ddisgrifir ar Wikipedia fel cyfrifiadura awtonomig. Mae rhannau'n ymarferol heddiw, fel ailgychwyn proses a fethodd. Mae hunan-iachâd eang yn llawer anoddach. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

**Goruchwyliaeth ddynol.** Mae'r ymatebydd yn parhau'n atebol. Mae allbynnau AIOps yn fewnbynnau i benderfyniad dynol, oni bai bod gweithred wedi'i diffinio'n gul wedi'i phrofi a'i chymeradwyo i redeg yn awtomatig. Gweler Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol.

**Sut mae'r lensys yn ffitio.** Mae AIOps yn cyfuno AI a dadansoddeg ar gyfer y rhan gweithrediadau o reoli gwasanaethau. Mae arfer ystwyth yn awgrymu treialon bach ar un gwasanaeth, gydag adborth gan staff ar alwad. Mae awtomeiddio yn defnyddio allbwn AIOps, er enghraifft i agor tocyn neu redeg gwiriad diogel.

## Arferion gorau

1. **Dechreuwch â phoen clir.** Dewiswch un broblem, fel gormod o rybuddion ar un gwasanaeth, a mesur, fel nifer y tudalennau fesul sifft. Treialwch AIOps yno.
2. **Rhowch y data mewn trefn yn gyntaf.** Gwiriwch fod logiau a metrigau'n gyflawn, stampiau amser yn gyson, a gwasanaethau a pherchnogion wedi'u labelu. Trwsiwch fylchau cyn beio'r model.
3. **Profwch yn erbyn digwyddiadau'r gorffennol.** Ailchwaraewch ddata hanesyddol drwy'r offeryn, a gofynnwch beth y byddai wedi'i nodi, ei grwpio neu ei awgrymu. Cyfrwch rybuddion ffug a rhai a gollwyd.
4. **Cymharwch â dulliau syml.** Cymharwch â throthwyon sefydlog a rheolau sylfaenol. Os yw dull syml yn gwneud cystal, defnyddiwch ef. Peidiwch â thalu am gymhlethdod nad yw'n ychwanegu dim.
5. **Ffafriwch allbynnau eglurhaol.** Dewiswch offer sy'n dangos y dystiolaeth y tu ôl i rybudd neu achos a awgrymir. Mynnwch y gall ymatebwyr ei weld a'i herio.
6. **Dechreuwch yn y modd cynghorol.** Gadewch i'r offeryn awgrymu, a gadewch i bobl benderfynu. Adolygwch yr awgrymiadau yn erbyn yr hyn a ddigwyddodd mewn gwirionedd am ychydig wythnosau cyn rhoi unrhyw weithred awtomatig iddo.
7. **Cyfyngwch ar gamau awtomatig.** Caniatewch gamau cul, a ddeellir yn dda, gwrthdroadwy yn unig, gyda therfynau cyfradd, logiau a stop â llaw. Adolygwch bob dosbarth o weithred cyn ei alluogi.
8. **Monitrwch y modelau.** Tracwch rybuddion ffug, rhai a gollwyd, a chyfran yr awgrymiadau a oedd yn ddefnyddiol. Gwyliwch am ddrifft ar ôl rhyddhau mawr ac ailhyfforddwch neu ailgyflunwch pan fo angen.
9. **Cadwch bobl ar alwad yn rhan o'r gwaith.** Gofynnwch iddynt raddio awgrymiadau yn yr offeryn, ac adolygwch eu hadborth yn wythnosol. Nhw yw'r beirniaid gorau o ddefnyddioldeb.
10. **Cofnodwch yr hyn a rwystrwyd.** Cadwch log o rybuddion a guddiwyd neu a unwyd gan y system, ac adolygwch samplau'n rheolaidd. Rhwystro yw lle mae'r methiannau gwaethaf yn digwydd.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa rybuddion sy'n gwastraffu'r mwyaf o'n hamser ar alwad, ac a fyddai rheolau gwell yn eu trwsio cyn unrhyw AI?**
Dechreuwch â'r data. Mae llawer o broblemau sŵn yn ildio i atgyweiriadau syml. Disgwyliwch fod ychydig o reolau yn cyfrif am y rhan fwyaf o sŵn. Dilynwch trwy drwsio'r rheini ac yna ailasesu beth y gallai AI ei ychwanegu.

**Pe bai'r offeryn wedi rhedeg yn ystod ein tri digwyddiad diwethaf, beth fyddai wedi'i ddweud wrthym, ac a fyddai hynny wedi helpu?**
Ailchwaraewch neu efelychwch. Disgwyliwch ganlyniadau cymysg. Gofynnwch beth y byddai wedi'i golli. Dilynwch trwy ddewis y math o ddigwyddiad lle mae'r offeryn yn ymddangos fwyaf addawol.

**Sut y byddem yn gwybod bod yr offeryn wedi atal rhybudd go iawn?**
Mae hyn yn profi goruchwyliaeth. Disgwyliwch "ni fyddem". Dilynwch trwy gytuno ar log o hysbysiadau a rwystrwyd, sampl reolaidd, a rheol ar yr hyn na chaiff ei rwystro byth.

**Pwy sy'n atebol pan fydd gweithred awtomatig yn mynd o'i le, a beth yw ei therfynau?**
Enwch berchennog a rhestrwch gamau a ganiateir. Disgwyliwch atebion amwys. Dilynwch trwy ysgrifennu rhestr fer o gamau a ganiateir heb gymeradwyaeth, pob un gydag ôl-dreiglo.

**Sut y byddwn yn canfod bod y model wedi drifftio ar ôl rhyddhad mawr neu newid mewn traffig?**
Gofynnwch am y cynllun. Disgwyliwch ddim. Dilynwch trwy ddewis dangosyddion, fel cyfradd rhybuddion ffug, a dyddiad adolygu ar ôl pob rhyddhad mawr.

**Beth fyddai staff ar alwad eisiau gan yr offeryn hwn, a beth fyddai'n gwneud iddynt roi'r gorau i ymddiried ynddo?**
Gofynnwch iddynt yn uniongyrchol. Disgwyliwch atebion ymarferol am gyd-destun a rhybuddion ffug. Dilynwch trwy droi'r atebion yn feini prawf derbyn ar gyfer y treial.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm gweithrediadau gwasanaeth tywydd cenedlaethol yn rhedeg piblinellau rhagolygon ac API cyhoeddus ar stad gymysg o systemau ar y safle a chwmwl. Mae staff ar alwad yn cael tua 300 o rybuddion y dydd, y rhan fwyaf ohonynt o ychydig o ffynonellau swnllyd. Mae gwerthwr yn cynnig llwyfan AIOps gyda chydberthyn awtomatig ac awgrymiadau gwraidd achos.

Mae arweinydd gweithrediadau yn cytuno i dreial gydag amodau. Yn gyntaf, mae'r tîm yn glanhau'r 12 rheol fwyaf swnllyd, sy'n cael gwared ar tua hanner y cyfaint. Yn ail, mae'n ailchwarae chwe mis o ddata, gan gynnwys 14 o ddigwyddiadau, drwy'r llwyfan yn y modd cynghorol. Yn yr ailchwarae, mae'r llwyfan yn grwpio rhybuddion yn dda: mae'r digwyddiad cyfartalog a gynhyrchodd 80 o rybuddion yn ymddangos fel tri grŵp. Mae'n nodi'r arwydd cyntaf yn gywir mewn naw o'r 14 digwyddiad, yn colli tri lle'r oedd y symptom cyntaf mewn log, ac yn codi rhybuddion ffug ar ailbrosesu nosol arferol, sydd â phatrwm nad yw wedi'i ddysgu.

Mae'r tîm yn ei ddefnyddio yn y modd cynghorol ar un biblinell am ddau fis, gyda staff ar alwad yn graddio pob awgrym fel defnyddiol, niwtral neu anghywir. Graddir tua 55 y cant fel defnyddiol, a 15 y cant yn anghywir, fel arfer lle mae newid diweddar heb ei gofnodi yw'r achos. Yna caniateir i'r llwyfan agor tocynnau'n awtomatig ar gyfer digwyddiadau wedi'u grwpio, a dim byd arall. Mae'r tîm yn cadw adolygiad wythnosol o rybuddion a rwystrwyd ac, ar ôl rhyddhad mawr, yn canfod bod llinell sylfaen y model ar gyfer traffig bellach yn anghywir a bod yn rhaid ei hailhyfforddi.

Beth sy'n newid: mae staff ar alwad yn cael llawer llai o rybuddion, wedi'u grwpio'n well. Beth sy'n parhau'n anodd: mae awgrymiadau'r llwyfan yn dibynnu ar gofnodion newid cywir, sy'n anghyflawn; mae'n llai defnyddiol ar gyfer methiannau newydd; ac mae prisio'r gwerthwr yn tyfu gyda chyfaint data, felly mae'r tîm yn cyfyngu ar yr hyn y mae'n ei fewnbynnu. Mae'r arweinydd yn bwriadu ehangu'r treial i biblinell arall dim ond ar ôl adolygiad pellach o'r rhai a gollwyd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Allyrrwch delemetreg dda: logiau cyson, metrigau gyda labeli gwasanaeth, a chofnodion o ddefnyddiadau a newidiadau. Rhannwch wybodaeth ddylunio gyda'r tîm gweithrediadau, a helpwch i wirio awgrymiadau'r offeryn am eich gwasanaeth.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch yr offeryn fel cynorthwyydd: graddiwch awgrymiadau, adolygwch eitemau a rwystrwyd, ac adroddwch yr hyn a gollwyd. Cadwch reolau'n syml lle maent yn gweithio, a chadwch berchnogaeth penderfyniadau a chamau gweithredu.

### Arweinyddiaeth a llywodraethu

Gofynnwch am ganlyniadau o brofion ailchwarae a threial, nid o arddangosiad. Gosodwch derfynau ar gamau awtomatig. Ariennwch ansawdd data a hyfforddiant. Byddwch yn ofalus o honiadau o weithrediadau cwbl ymreolaethol.

### Cwsmeriaid a defnyddwyr

Dylech sylwi ar lai o amhariadau, a rhai byrrach, nid ar newidiadau yn y ffordd y cyfathrebir problemau i chi. Dywedwch wrth y darparwr os collwyd digwyddiad cyn i chi sylwi.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Treialwch ar un gwasanaeth, gyda staff ar alwad yn rhoi adborth mynych, yna ehangwch mewn camau. Adolygwch y rhai a gollwyd ar ôl pob digwyddiad ac addaswch. Rhybudd: mae tiwnio model yn gyson heb gofnodi newidiadau yn gwneud ymddygiad yn anrhagweladwy; cadwch gofnod newidiadau.

### AI

Mae'r offeryn ei hun yn system AI gyda pherchennog, data prawf ac adolygiad. Trinwch ef fel unrhyw un arall: cofnodwch beth y caiff ei wneud, monitrwch ef, a phrofwch ar ôl diweddariadau. Rhybudd: gall gwerthwyr newid modelau heb rybudd; gofynnwch sut maent yn cyhoeddi newidiadau a phrofwch yn rheolaidd. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

### Awtomeiddio

Cysylltwch allbwn AIOps â chamau awtomataidd cul, wedi'u profi, fel creu tocynnau, casglu diagnosteg, ac ailgychwyn proses sy'n methu'n hysbys, gyda therfynau a logiau. Rhybudd: gall camau awtomatig a ddewiswyd o ragfynegiadau ansicr waethygu digwyddiad; mynnwch hyder uchel ac ôl-dreiglo. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

### Dadansoddeg

Mesurwch gyfaint rhybuddion, cyfran ddefnyddiol, rhybuddion ffug, rhai a gollwyd a ganfuwyd mewn adolygiadau digwyddiadau, amser i ganfod, ac amser i wneud diagnosis. Rhybudd: gellir lleihau cyfaint rhybuddion trwy guddio rhybuddion go iawn; cymharwch bob amser yn erbyn digwyddiadau a'r rhai a gollwyd. Gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Prynu addewid.** Cymerir arddangosiad y gwerthwr fel tystiolaeth. Profwch ar eich data eich hun gydag ailchwarae a threial.
- **Data gwael.** Mae'r model yn dysgu o logiau a labeli anghyson. Trwsiwch ddata yn gyntaf.
- **Rhwystro heb adolygiad.** Cuddir rhybuddion go iawn. Logiwch a samplwch yr hyn a rwystrir.
- **Awgrymiadau anhryloyw.** Ni all ymatebwyr eu barnu. Ffafriwch offer sy'n dangos tystiolaeth.
- **Awtomeiddio cynamserol.** Mae camau anghywir yn digwydd ar gyflymder. Dechreuwch yn gynghorol a chyfyngwch gamau.
- **Anwybyddu drifft model.** Mae cywirdeb yn dirywio'n dawel. Monitrwch ac ailhyfforddwch ar ôl newidiadau.
- **Cymhlethdod heb fudd.** Byddai rheol syml yn ddigon. Cymharwch â dulliau syml.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Sylfaen data | Anghyson | Prif ffynonellau wedi'u casglu | Telemetreg gyson, wedi'i labelu ac yn eiddo | Ansawdd data yn cael ei fesur a'i wella | Data'n cael ei rannu ar draws timau a chyflenwyr gyda llywodraethu |
| Defnydd o AI | Honiadau gwerthwr | Treial ar un gwasanaeth | Defnydd cynghorol gydag ailchwarae ac adborth | Canlyniadau'n cael eu mesur a gweithredu arnynt | AI wedi'i integreiddio ar draws gweithrediadau gyda goruchwyliaeth |
| Awtomeiddio | Dim | Creu tocynnau | Camau cul, cymeradwy gyda therfynau | Camau'n cael eu hadolygu a'u gwella | Awtomeiddio ehangach yn ôl risg gyda rheolaeth ddynol |
| Gofal model | Dim | Tiwnio ad hoc | Monitro drifft a gwallau | Ailhyfforddi wedi'i glymu wrth newid | Gwerthuso parhaus ar draws offer |

## Rhestr wirio

- [ ] Rydym wedi dewis problem benodol a mesur ar gyfer treial.
- [ ] Rydym wedi trwsio'r gwaethaf o'n sŵn rhybuddion gyda rheolau syml yn gyntaf.
- [ ] Rydym wedi profi'r offeryn ar ddigwyddiadau hanesyddol a chyfrif y rhai a gollwyd a rhybuddion ffug.
- [ ] Rydym wedi ei gymharu â dulliau syml.
- [ ] Mae allbynnau'n ddealladwy i ymatebwyr.
- [ ] Rydym yn rhedeg yn y modd cynghorol cyn caniatáu unrhyw weithred.
- [ ] Mae camau awtomatig yn gul, wedi'u logio, â therfyn cyfradd, ac yn wrthdroadwy.
- [ ] Rydym yn monitro am ddrifft ac yn adolygu rhybuddion a rwystrwyd.

## Anogwyr AI

**Gwirio canlyniadau ailchwarae.**

```text
Dyma ganlyniadau ailchwarae [nifer] o ddigwyddiadau yn y gorffennol trwy ein hofferyn AIOps: ar gyfer pob un, y symptom go iawn cyntaf, beth a nododd yr offeryn a phryd, a beth a awgrymodd: [gludwch].
Cyfrifwch ar gyfer pob digwyddiad a nododd yr offeryn y broblem cyn y dudalen gyntaf, a rhestrwch rybuddion ffug a rhai a gollwyd. Crynhowch gyfrifon a nodwch ddigwyddiadau lle mae'r data'n aneglur. Peidiwch â graddio'r offeryn yn gyffredinol.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Adolygu rhybuddion a rwystrwyd.**

```text
Dyma sampl o rybuddion a rwystrodd neu a unodd y system yr wythnos diwethaf, gyda manylion: [gludwch sampl].
Ar gyfer pob un, dywedwch a yw'r manylion yn awgrymu ei fod yn sŵn, yn ddyblyg o rybudd arall, neu o bosibl yn broblem go iawn, a rhowch eich rheswm. Nodwch y rhai na allwch eu barnu.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio meini prawf derbyn ar gyfer treial.**

```text
Ein gwasanaeth: [disgrifiwch]. Ein poen gyfredol: [disgrifiwch, gyda rhifau os yn hysbys]. Ein cyfyngiadau: [rhestrwch].
Drafftiwch feini prawf derbyn ar gyfer treial dau fis o offeryn AIOps: mesurau, trothwyon y dylem gytuno arnynt ymlaen llaw, beth fyddai'n gwneud i ni stopio, a pha gamau awtomatig na chaniateir. Peidiwch â datgan honiadau gwerthwyr fel ffeithiau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): defnyddiwch i archwilio patrymau anarferol mewn data gweithrediadau.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): defnyddiwch i weld sut mae metrigau'n newid dros amser.
- [data-quality](../../../../skills/data-quality/SKILL.md): defnyddiwch i wirio'r mewnbynnau y mae AIOps yn dibynnu arnynt.
- [mlops](../../../../skills/mlops/SKILL.md): defnyddiwch i fonitro a chynnal modelau sydd ar waith.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): defnyddiwch i brofi achosion a awgrymir yn erbyn tystiolaeth.

## Prif ffynonellau

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), pennod ar fonitro systemau dosbarthedig, am ddim yn sre.google: sylfeini y mae AIOps yn adeiladu arnynt.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o'r arfer monitro a rheoli hysbysiadau.
- Wikipedia, "AIOps" a "Anomaly detection": trosolygon o'r term a'r technegau.
- Wikipedia, "Concept drift": y prif reswm pam mae modelau'n dirywio dros amser.

## Cyfeiriadau

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
