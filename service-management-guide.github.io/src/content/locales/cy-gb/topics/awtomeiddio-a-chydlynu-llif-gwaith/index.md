# Awtomeiddio a Chydlynu Llif Gwaith

**Mae awtomeiddio llif gwaith yn symud gwaith rhwng pobl a systemau yn ôl rheolau; mae cydlynu yn trefnu llawer o gamau o'r fath ar draws offer, gyda chymeradwyaethau, ailgeisiadau, a chofnod o gyflwr; maent yn gweithio pan fo llifoedd gwaith yn syml, yn ddiduedd i ailadrodd (idempotent), yn arsylwadwy, ac wedi'u dylunio ar gyfer y bobl y mae'n rhaid iddynt gamu i mewn.**

## Pam mae hyn yn bwysig

Ras gyfnewid yw'r rhan fwyaf o waith gwasanaeth. Mae cais yn dechrau mewn porth, yn mynd at reolwr i'w gymeradwyo, yn creu cyfrif mewn un system, blwch post mewn un arall, trwydded mewn trydedd, tocyn i gyfleusterau, a neges i'r sawl a ofynnodd. Mae pob trosglwyddo baton yn gyfle i aros, i golli gwybodaeth, neu i gael ei anghofio. Pan fo pobl yn gwneud y trosglwyddo trwy e-bost a'r cof, mae oedi a gwall wedi'u hadeiladu i mewn.

Mae awtomeiddio llif gwaith yn disodli'r trosglwyddo gyda llif diffiniedig. Mae'r system yn gwybod y camau, pwy neu beth sy'n gwneud pob un, beth i'w wneud pan fo cam yn methu, a beth sydd wedi digwydd hyd yma. Cydlynu yw'r un syniad ar raddfa fwy: cydlynydd sy'n galw llawer o systemau yn y drefn gywir, yn aros am ganlyniadau, ac yn trin yr achosion lletchwith. Mae Wikipedia yn disgrifio llifoedd gwaith, systemau rheoli llif gwaith, a chydlynu mewn cyfrifiadura fel ffyrdd o ddiffinio a rhedeg llifoedd o'r fath.

Yr addewid yw gwaith cyflymach, mwy cyson gyda chofnod gweladwy. Mae'r risgiau'n gyfarwydd o awtomeiddio arall: caiff proses ddiffygiol ei chaledu'n god, mae methiant hanner ffordd drwodd yn gadael pethau'n anghyson, ac mae newid mewn un system gysylltiedig yn torri'r llif yn dawel. Mae dylunio da yn rhagweld y rhain. Mae'r pwnc hwn yn disgrifio'r prif flociau adeiladu, y patrymau sy'n cadw llifoedd gwaith yn ddibynadwy, a lle pobl ynddynt. Mae'n adeiladu ar Bwnc 6.1 — Strategaeth Awtomeiddio, yn perthyn i geisiadau gwasanaeth (Pwnc 3.6 — Rheoli Ceisiadau Gwasanaeth), ac yn arwain at hunanwasanaeth (Pwnc 6.5 — Hunanwasanaeth a Chyflawni Awtomataidd) a phiblinellau (Pwnc 6.4 — Piblinellau a Newid Awtomataidd).

## Cysyniadau craidd

**Llif gwaith.** Dilyniant o gamau, gyda rheolau ynghylch pwy neu beth sy'n cyflawni pob un, ym mha drefn, ac o dan ba amodau. Mae Wikipedia yn disgrifio llif gwaith fel patrwm gweithgaredd wedi'i drefnu ac ailadroddadwy. Gall llif gwaith fod mor syml â "pan farciwyd tocyn fel un a ddatryswyd, hysbyswch y sawl a ofynnodd" neu mor gymhleth â thaith dechreuwr newydd o'r dechrau i'r diwedd.

**Peiriant llif gwaith.** Meddalwedd sy'n rhedeg llifoedd gwaith: mae'n cadw golwg ar gyflwr pob enghraifft, yn cyflawni camau, yn aros am hysbysiadau, ac yn cofnodi'r hyn a ddigwyddodd. Mae Wikipedia yn disgrifio peiriannau llif gwaith a systemau rheoli llif gwaith. Mae llawer o lwyfannau tocynnau yn cynnwys un, ac mae llwyfannau annibynnol yn bodoli ar gyfer llifoedd traws-system.

**Cydlynu.** Trefnu sawl tasg a gwasanaeth awtomataidd yn un broses, fel arfer o reolydd canolog sy'n galw pob un yn ei dro. Mae Wikipedia yn disgrifio cydlynu mewn cyfrifiadura. Mae'n cyferbynnu â choreograffi, lle mae gwasanaethau'n ymateb i hysbysiadau heb reolydd canolog. Mae cydlynu yn haws i'w weld a'i ddadfygio; gall coreograffi fod yn fwy gwydn ac ymestynnol. Mae llawer o sefydliadau'n defnyddio'r ddau.

**Modelu.** Gellir tynnu llun llifoedd gyda nodiant fel y Business Process Model and Notation (BPMN), a ddisgrifir ar Wikipedia, ac yna eu cyflawni. Mae diagramau'n helpu pobl busnes a thechnegol i gytuno ar lif. Cadwch hwy'n ddarllenadwy, a chadwch y model a'r llif gwaith sy'n rhedeg ar yr un trywydd.

**Cyflwr.** Yr hyn a wnaed hyd yma mewn un enghraifft o lif gwaith. Mae gwybod y cyflwr yn caniatáu i'r system ailddechrau ar ôl methiant, dangos cynnydd, ac adrodd. Mae Wikipedia yn disgrifio peiriannau cyflwr meidraidd, ffordd ddefnyddiol o feddwl am gais sy'n "cyflwyno", "cymeradwywyd", "cyflawnwyd" a "chaewyd".

**Sbardunau a hysbysiadau.** Mae llif gwaith yn dechrau o sbardun: ffurflen, neges, amserlen, newid mewn system. Mae dulliau sy'n cael eu gyrru gan hysbysiadau, a ddisgrifir ar Wikipedia fel pensaernïaeth a yrrir gan hysbysiadau, yn gadael i systemau gyhoeddi beth ddigwyddodd fel y gall eraill ymateb. Mae bachau gwe, a ddisgrifir yno hefyd, yn ffordd gyffredin i un system hysbysu un arall.

**Integreiddio.** Mae llifoedd gwaith yn galw systemau eraill trwy ryngwynebau rhaglennu cymwysiadau (APIs), cysylltwyr, neu lwyfannau integreiddio. Mae Wikipedia yn disgrifio APIs ac integreiddio cymwysiadau menter. Integreiddio yw lle mae'r rhan fwyaf o lifoedd gwaith yn torri, oherwydd bod systemau'n newid eu rhyngwynebau, eu terfynau cyfradd a'u cymwysterau.

**Idempotens ac ailgeisiadau.** Mae gweithred yn ddiduedd i ailadrodd (idempotent) os yw ei gwneud ddwywaith yn cael yr un effaith â'i gwneud unwaith. Mae Wikipedia yn disgrifio idempotens. Pan fo cam yn methu neu'n terfynu, yr ymateb diogel yn aml yw ailgeisio, sy'n ddiogel dim ond os yw'r cam yn ddiduedd i ailadrodd. Dylai ailgeisiadau aros yn hirach bob tro, techneg a ddisgrifir ar Wikipedia fel ôl-ddiffodd esbonyddol, a stopio ar ôl terfyn.

**Trin methiannau.** Beth sy'n digwydd pan fo cam pedwar o saith yn methu? Mae'r opsiynau'n cynnwys ailgeisio, hepgor, gwneud iawn am gamau cynharach trwy eu dadwneud, neu stopio a gofyn i unigolyn. Ni all llifoedd gwaith hirdymor sy'n ymestyn ar draws systemau ddibynnu ar un trafodyn; mae Wikipedia yn disgrifio'r dull saga, lle mae gan bob cam weithred ddigolledu. Dylai methiannau na ellir eu trin yn awtomatig fynd i giw gyda pherchennog clir, nid diflannu. Mae Wikipedia yn disgrifio ciwiau llythyrau marw ar gyfer negeseuon na ellir eu prosesu.

**Tasgau dynol a chymeradwyaethau.** Mae angen unigolyn ar lawer o lifoedd gwaith: i gymeradwyo, penderfynu, neu wneud rhywbeth na ellir ei awtomeiddio. Mae Wikipedia yn disgrifio systemau person-yn-y-ddolen. Dyluniwch y tasgau hyn yn ofalus: pwy a ofynnir, sut y cânt eu hatgoffa, beth sy'n digwydd os na fyddant yn ymateb, a pha wybodaeth a welant. Mae cymeradwyaeth sy'n aros am gyfnod amhenodol yn atal y llif.

**Arsylwadwyedd ac archwilio.** Dylai pob enghraifft fod yn olrheiniadwy: beth a'i sbardunodd, beth wnaeth pob cam, beth oedd y canlyniad, a phwy a gymeradwyodd. Mae Wikipedia yn disgrifio llwybrau archwilio. Mae hyn yn cefnogi cwestiynau cymorth ("ble mae fy nghais?"), datrys problemau, a chydymffurfiaeth. Gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg.

**Cod isel ac awtomeiddio prosesau robotig.** Mae llwyfannau cod isel ac awtomeiddio prosesau robotig (RPA) yn caniatáu i bobl nad ydynt yn rhaglenwyr adeiladu llifoedd gwaith, neu awtomeiddio gweithredoedd mewn rhyngwynebau defnyddiwr. Mae Wikipedia yn disgrifio'r ddau. Maent yn cyflymu achosion syml a gallant gynhyrchu awtomeiddiadau bregus, heb berchennog, ar raddfa. Cymhwyswch yr un perchnogaeth, profi ac adolygu ag y byddech i god.

**Fersiynu a newid.** Mae diffiniad llif gwaith yn newid dros amser tra bo enghreifftiau'n dal i redeg. Penderfynwch sut i drin enghreifftiau ar y gweill pan fyddwch yn newid y diffiniad. Cadwch ddiffiniadau mewn rheoli fersiynau, a phrofwch newidiadau cyn eu defnyddio. Gweler Pwnc 3.4 — Galluogi Newid.

**Diogelwch.** Mae llifoedd gwaith yn dal cymwysterau ac yn galw systemau â phŵer. Rhowch eu hunaniaethau eu hunain iddynt gyda'r caniatâd lleiaf, storiwch gyfrinachau'n ddiogel, ac adolygwch pwy all newid llif gwaith. Gweler Pwnc 3.13 — Rheoli Diogelwch Gwybodaeth.

**Sut mae'r lensys yn ffitio.** Offer llif gwaith yw plymwaith y lens awtomeiddio. Mae arfer ystwyth yn awgrymu adeiladu llif gwaith mewn camau bach gyda defnyddwyr. Gall AI ddosbarthu ceisiadau, drafftio cynnwys, a gwneud awgrymiadau o fewn llif, gydag adolygiad dynol. Mae dadansoddeg yn defnyddio'r data cyflwr ac amseru i ddod o hyd i oedi.

## Arferion gorau

1. **Mapiwch a symleiddiwch cyn adeiladu.** Tynnwch lun o'r broses fel y mae, tynnwch gamau nad ydynt yn ychwanegu gwerth, a chytunwch ar y llif yn y dyfodol gyda'r bobl dan sylw. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.
2. **Cadwch lifoedd gwaith yn fach ac yn glir.** Ffafriwch sawl llif gwaith byr gyda throsglwyddiadau diffiniedig yn hytrach nag un enfawr. Enwch gamau mewn iaith blaen fel y gall staff cymorth eu dilyn.
3. **Dyluniwch bob cam i fod yn ddiogel i'w ailadrodd.** Gwnewch gamau'n ddiduedd i ailadrodd lle gallwch, fel bod ailgeisio'n ddiniwed. Lle na allwch, ychwanegwch wiriadau sy'n canfod bod y cam eisoes wedi digwydd.
4. **Cynlluniwch ar gyfer methiant.** Ar gyfer pob cam, penderfynwch beth sy'n digwydd ar fethiant: ailgeisio gydag ôl-ddiffodd a therfyn, gwneud iawn, neu drosglwyddo i unigolyn. Anfonwch fethiannau heb eu datrys i giw gweladwy gyda pherchennog.
5. **Trinwch dasgau dynol fel dinasyddion cyntaf.** Nodwch pwy, beth a welant, faint o amser sydd ganddynt, nodiadau atgoffa, a beth sy'n digwydd ar derfyn amser neu absenoldeb. Darparwch ddirprwy.
6. **Dangoswch statws i ddefnyddwyr.** Gadewch i'r rhai sy'n gofyn weld lle mae eu cais a beth a ddisgwylir nesaf. Anfonwch hysbysiadau ar bwyntiau ystyrlon, nid ar bob cam.
7. **Logiwch ac olrheiniwch bob enghraifft.** Cofnodwch sbardunau, mewnbynnau, allbynnau, penderfyniadau a chymeradwywyr. Gwnewch yn hawdd edrych ar un enghraifft yn ôl ei chyfeirnod.
8. **Rheolwch newidiadau i lifoedd gwaith.** Cadwch ddiffiniadau mewn rheoli fersiynau, adolygwch newidiadau, profwch hwy mewn amgylchedd diogel, a phenderfynwch sut i drin enghreifftiau sy'n rhedeg.
9. **Rheolwch y cysylltiadau.** Cadwch gofrestr o integreiddiadau gyda pherchnogion, cymwysterau a phwyntiau cyswllt ar gyfer pob system. Monitrwch am fethiannau a gwyliwch am newidiadau a gyhoeddwyd i ryngwynebau.
10. **Adolygwch berfformiad.** Edrychwch ar amser fesul cam, aros, methiannau ac eithriadau. Defnyddiwch y data i dynnu tagfeydd ac i ymddeol llifoedd gwaith nad oes neb yn eu defnyddio.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa un o'n prosesau sy'n trosglwyddo gwaith rhwng pobl a systemau fwyaf, a lle mae gwaith yn mynd ar goll?**
Olrheiniwch un enghraifft go iawn. Disgwyliwch e-bost neu drosglwyddiad sgwrs ar ryw adeg. Dilynwch trwy ddewis un trosglwyddiad i'w awtomeiddio.

**Beth sy'n digwydd heddiw pan fo cam yn methu hanner ffordd drwy broses, a phwy sy'n gwybod?**
Meddyliwch am greu cyfrif a lwyddodd mewn un system ac a fethodd mewn un arall. Disgwyliwch anghysondeb. Dilynwch trwy ddylunio llwybr methiant ar gyfer un llif gwaith.

**Pa rai o'n cymeradwyaethau sy'n aros, a beth ddylai ddigwydd os nad yw'r cymeradwywr yn ymateb?**
Edrychwch ar yr eitemau hynaf sy'n aros. Disgwyliwch oedi hir. Dilynwch trwy gytuno ar nodyn atgoffa, dirprwy a rheol terfyn amser.

**Pwy sy'n berchen ar bob integreiddio y mae ein llifoedd gwaith yn dibynnu arno, a sut y byddem yn gwybod ei fod wedi torri?**
Rhestrwch yr integreiddiadau. Disgwyliwch rai amddifad. Dilynwch trwy enwi perchnogion ac ychwanegu rhybudd am fethiannau.

**Pa lifoedd gwaith a adeiladwyd gan un unigolyn gydag offeryn cod isel ac efallai nad oes neb arall yn eu deall?**
Gofynnwch o gwmpas. Disgwyliwch sawl un. Dilynwch trwy ddogfennu'r tri uchaf a'u rhoi mewn rheoli fersiynau neu gofrestr a rennir.

**Ble allai AI helpu y tu mewn i lif gwaith, a ble mae'n rhaid i unigolyn benderfynu?**
Gall AI ddosbarthu, drafftio ac awgrymu. Dylai unigolyn benderfynu ar fynediad ac arian. Dilynwch trwy ddewis un cam i'w dreialu gydag adolygiad, a mesur o gyfeirio cywir.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae timau AD a TG banc rhanbarthol yn rheoli hysbysiadau "ymuno, symud, gadael" trwy e-bost. Mae dechreuwr newydd angen cyfrif, gliniadur, mynediad i'r adeilad, cofnod cyflogres ac ymrestru ar hyfforddiant, a gaiff eu trin gan bum tîm. Mae pob tîm yn cael e-bost gan AD, yn gwneud ei ran, ac weithiau'n ymateb. Mae tua un o bob pump o ddechreuwyr newydd yn brin o rywbeth ar y diwrnod cyntaf.

Mae rheolwr y gwasanaeth yn cynnig un llif gwaith ar lwyfan tocynnau'r banc, sydd â pheiriant llif gwaith a chysylltwyr. Mae hi'n dechrau trwy fapio'r broses gyda'r pum tîm ac yn canfod nad yw tair o'r cymeradwyaethau byth yn cael eu gwrthod. Mae'r dyluniad newydd yn tynnu dwy ac yn cadw un, gan reolwr y dechreuwr newydd. Mae cofnod AD o'r cyflogai newydd yn sbarduno'r llif gwaith. Mae'n creu un achos rhiant gyda phum tasg plentyn, pob un wedi'i neilltuo i giw'r tîm cywir, gan redeg yn gyfochrog lle bo modd. Awtomeiddir creu cyfrif gyda chysylltydd system hunaniaeth; mae'r dasg gliniadur yn mynd at dechnegydd; mae mynediad i'r adeilad yn mynd at gyfleusterau gyda'r dyddiad dechrau.

Mae'r tîm yn dylunio ar gyfer methiant. Mae creu cyfrif yn ddiduedd i ailadrodd: mae'r cysylltydd yn gwirio a yw'r cyfrif yn bodoli cyn ei greu. Os bydd y cysylltydd yn methu ddwywaith gydag ôl-ddiffodd, mae'r dasg yn mynd i giw technegydd gyda'r gwall ynghlwm, ac mae rhybudd yn mynd at berchennog y llif gwaith. Mae gan dasgau dynol nodiadau atgoffa ar ôl diwrnod ac maent yn dwysáu i arweinydd tîm ar ôl tri. Mae pob achos yn dangos ei statws i AD a rheolwr y dechreuwr newydd.

Ar ôl tri mis, mae cyfran y dechreuwyr sy'n brin o rywbeth ar y diwrnod cyntaf yn gostwng i tua 4 y cant. Mae'r llwybr archwilio yn caniatáu i'r ddesg gwasanaeth ateb "ble mae e?" mewn munud. Beth sy'n parhau'n anodd: mae'r cysylltydd cyflogres yn dibynnu ar ryngwyneb gwerthwr a newidiodd unwaith heb rybudd, gan achosi rhediad a fethodd nad oedd neb wedi'i weld am ddau ddiwrnod nes ychwanegu'r rhybudd; mae'r tîm cyfleusterau yn dal i weithio o daenlen ac yn copïo data'r achos â llaw; ac mae gan hysbysiadau symud a gadael fwy o eithriadau ac nid ydynt wedi'u cynnwys eto. Mae'r rheolwr yn cynllunio hysbysiadau symud nesaf ac yn gofyn i'r gwerthwr am hysbysiadau newid.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Amlygwch APIs a hysbysiadau sefydlog, wedi'u dogfennu y gall llifoedd gwaith eu defnyddio, gyda negeseuon gwall clir. Dywedwch wrth berchnogion llif gwaith am newidiadau ymlaen llaw. Defnyddiwch yr un syniadau ar gyfer eich llifoedd gwaith rhyddhau eich hun.

### Timau gwasanaeth a gweithrediadau

Byddwch yn berchen ar y llifoedd gwaith a'r integreiddiadau a redwch: logiau, rhybuddion, ciwiau methiant a dogfennaeth. Triniwch eithriadau yn brydlon, a dewch â phatrymau at berchennog y llif gwaith.

### Arweinyddiaeth a llywodraethu

Gofynnwch am y golwg taith, gyda pherchennog ar gyfer pob llif gwaith traws-dîm. Ariennwch gynhaliaeth integreiddio. Chwiliwch am dystiolaeth o lif cyflymach, mwy dibynadwy, nid cyfrif o lifoedd gwaith.

### Cwsmeriaid a defnyddwyr

Dylech weld statws eich cais a chael yr hyn a ofynnoch heb fynd ar ei ôl. Pan fo cam angen eich mewnbwn, dylai fod yn glir beth sydd ei angen a erbyn pryd.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Adeiladwch lifoedd gwaith un daith ar y tro gyda'r bobl sy'n eu defnyddio, rhyddhewch welliannau bach, ac adolygwch ganlyniadau. Rhybudd: mae cyflwyno llwyfan sy'n mudo pob proses ar unwaith yn lluosi risg; dechreuwch gydag un daith.

### AI

Gall AI ddosbarthu ceisiadau sy'n dod i mewn, echdynnu manylion o destun rhydd, drafftio negeseuon, ac awgrymu cyfeirio, gydag unigolyn neu reol yn gwirio cyn gweithredoedd. Enwch berchennog a thracwch gywiriadau. Rhybudd: gall cam AI mewn llif gwaith anfon gwaith i'r lle anghywir ar raddfa; samplwch ganlyniadau a chadwch giw wrth gefn. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

### Awtomeiddio

Llifoedd gwaith yw craidd y lens hon. Adeiladwch gyda chamau diduedd i ailadrodd, terfynau a logiau, a chadwch bob integreiddio mewn perchnogaeth ac wedi'i fonitro. Rhybudd: gall llif gwaith sy'n cyffwrdd â llawer o systemau ledaenu gwall yn eang; ychwanegwch derfynau cyfradd a switsh stopio. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

### Dadansoddeg

Defnyddiwch ddata llif gwaith ar gyfer amser fesul cam, aros am gymeradwyaethau, cyfraddau methiant, eithriadau a chyfaint yn ôl math. Rhybudd: mae data amseru yn adlewyrchu sut y diffinnir camau a gellir eu chwarae trwy hollti neu ailddosbarthu tasgau; gwiriwch gydag achosion sampl. Gweler Pwnc 7.6 — Dadansoddeg Prosesau a Ffrydiau Gwerth a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Awtomeiddio proses wael.** Cedwir gwastraff. Symleiddiwch a chytunwch ar y llif yn gyntaf.
- **Dim dylunio methiant.** Mae cam yn methu ac mae'r enghraifft yn sownd. Diffiniwch ailgeisiadau, gwneud iawn a chiwiau.
- **Ailgeisiadau nad ydynt yn ddiduedd i ailadrodd.** Crëir dyblygion. Gwnewch gamau'n ddiogel i'w hailadrodd, neu gwiriwch yn gyntaf.
- **Cymeradwyaethau sy'n aros.** Mae gwaith yn aros am unigolyn absennol. Ychwanegwch nodiadau atgoffa, dirprwyon a therfynau amser.
- **Methiant integreiddio tawel.** Mae cysylltydd yn torri ac nid oes neb yn gwybod. Monitrwch a rhybuddiwch.
- **Llifoedd cod isel heb berchennog.** Nid oes neb yn eu deall. Cofrestrwch, dogfennwch ac adolygwch.
- **Newid diffiniadau'n ddiofal.** Mae enghreifftiau sy'n rhedeg yn torri. Fersiynwch a phrofwch newidiadau.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Dylunio | Trosglwyddiadau trwy e-bost | Ychydig o lifoedd gwaith syml | Teithiau wedi'u mapio, eu symleiddio gyda pherchnogion | Llifoedd gwaith yn cael eu gwella o ddata | Teithiau wedi'u cydlynu ar draws systemau a phartneriaid |
| Dibynadwyedd | Yn torri heb ei sylwi | Rhybuddion sylfaenol | Ailgeisiadau diffiniedig, ciwiau methiant a chamau diduedd i ailadrodd | Methiannau'n cael eu mesur a'u lleihau | Llifoedd hunan-wirio gyda dwysáu dynol |
| Tasgau dynol | Ad hoc | Cymeradwyaethau trwy e-bost | Tasgau, nodiadau atgoffa a dirprwyon wedi'u diffinio | Oedi tasgau'n cael ei fesur | Tasgau dynol wedi'u cydbwyso a'u hawtomeiddio yn ôl risg |
| Rheolaeth | Dim cofnodion | Rhai logiau | Rheoli fersiynau, llwybr archwilio a chofrestr | Newidiadau'n cael eu hadolygu a'u harchwilio | Llywodraethu wedi'i integreiddio â'r llwyfan |

## Rhestr wirio

- [ ] Mapiom a symleiddiom bob proses cyn ei hawtomeiddio.
- [ ] Mae llifoedd gwaith yn fach, wedi'u henwi mewn iaith blaen, ac mewn perchnogaeth.
- [ ] Mae camau'n ddiduedd i ailadrodd neu wedi'u hamddiffyn rhag dyblygu.
- [ ] Diffinnir llwybrau methiant a chiwiau, gyda rhybuddion.
- [ ] Mae gan dasgau dynol nodiadau atgoffa, dirprwyon a therfynau amser.
- [ ] Mae pob enghraifft wedi'i logio ac yn olrheiniadwy.
- [ ] Mae diffiniadau mewn rheoli fersiynau ac mae newidiadau'n cael eu profi.
- [ ] Mae gan integreiddiadau berchnogion a monitro.

## Anogwyr AI

**Troi gweithdrefn yn amlinelliad llif gwaith.**

```text
Dyma ddisgrifiad o sut rydym yn trin [math o gais] heddiw: [gludwch gamau a phwy sy'n gwneud pob un].
Drafftiwch amlinelliad llif gwaith gyda: sbardun, camau (gan nodi pob un fel awtomataidd, dynol, neu gymeradwyaeth), data a drosglwyddir rhwng camau, ac ar gyfer pob cam beth ddylai ddigwydd ar fethiant neu pan nad oes ymateb. Nodwch bob tybiaeth. Peidiwch â dyfeisio systemau na rheolau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Dod o hyd i bwyntiau methiant mewn llif.**

```text
Dyma ddiffiniad ein llif gwaith mewn testun plaen: [gludwch].
Rhestrwch bob cam sy'n galw system arall, beth allai fynd o'i le, a yw'n ymddangos yn ddiogel i'w ailgeisio, a pha wybodaeth fyddai ei hangen ar unigolyn cymorth i'w drwsio. Peidiwch ag ailysgrifennu'r llif gwaith.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Dadansoddi oedi o ddata llif gwaith.**

```text
Dyma allforiad o enghreifftiau llif gwaith gydag enwau camau, amseroedd dechrau a diwedd, a chanlyniad, gyda dynodwyr wedi'u tynnu: [gludwch].
Cyfrifwch yr amser canolrifol a'r 90fed canraniad ar gyfer pob cam, rhestrwch y tri arhosiad hiraf, cyfrifwch fethiannau yn ôl cam, a rhestrwch gwestiynau i'w hymchwilio. Peidiwch â dod i gasgliadau am achosion.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): defnyddiwch i ddadansoddi camau, arosiadau a throsglwyddiadau.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): defnyddiwch i weld y daith gyfan ar draws timau.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): defnyddiwch i dynnu llun llifoedd gwaith mewn testun i'w hadolygu.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): defnyddiwch i neilltuo pwy sy'n gwneud a phwy sy'n cymeradwyo pob cam.
- [change-request](../../../../skills/change-request/SKILL.md): defnyddiwch i ddisgrifio newidiadau i ddiffiniadau llif gwaith.

## Prif ffynonellau

- OMG, Business Process Model and Notation (BPMN) specification: y nodiant safonol ar gyfer diagramau proses.
- Gregor Hohpe and Bobby Woolf, *Enterprise Integration Patterns* (2003): catalog o batrymau ar gyfer cysylltu systemau.
- Wikipedia, "Workflow" a "Orchestration (computing)": trosolygon o'r syniadau.
- Wikipedia, "Idempotence": y briodwedd sy'n gwneud ailgeisiadau'n ddiogel.

## Cyfeiriadau

1. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
2. Workflow engine — Wikipedia — https://en.wikipedia.org/wiki/Workflow_engine
3. Workflow management system — Wikipedia — https://en.wikipedia.org/wiki/Workflow_management_system
4. Orchestration (computing) — Wikipedia — https://en.wikipedia.org/wiki/Orchestration_(computing)
5. Business Process Model and Notation — Wikipedia — https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
6. Finite-state machine — Wikipedia — https://en.wikipedia.org/wiki/Finite-state_machine
7. Event-driven architecture — Wikipedia — https://en.wikipedia.org/wiki/Event-driven_architecture
8. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
9. Exponential backoff — Wikipedia — https://en.wikipedia.org/wiki/Exponential_backoff
10. Dead letter queue — Wikipedia — https://en.wikipedia.org/wiki/Dead_letter_queue
11. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
