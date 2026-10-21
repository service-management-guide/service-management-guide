# Seilwaith fel Cod a GitOps

**Mae seilwaith fel cod yn diffinio gweinyddion, rhwydweithiau ac adnoddau cwmwl mewn ffeiliau testun wedi'u hadolygu y mae offer yn eu cymhwyso; mae GitOps yn ychwanegu'r rheol mai'r ystorfa yw'r unig ffordd i newid systemau byw a bod rheolydd yn cadw realiti yn cyfateb iddi, fel bod rheoli fersiynau yn dod yn gofnod o newid ac yn fodd i adfer.**

## Pam mae hyn yn bwysig

Am gyfnod hir, adeiladwyd seilwaith â llaw. Roedd peiriannydd yn mewngofnodi i weinydd, yn gosod pecynnau, yn golygu cyfluniad, ac yn symud ymlaen. Daeth y gweinydd yn wrthrych unigryw, â hanes a oedd yn byw yng nghof y peiriannydd ac mewn ychydig o nodiadau. Pan fethodd, fe'i hailadeiladwyd o'r cof. Pan oedd angen ail weinydd, copi ydoedd a oedd yn wahanol mewn ffyrdd bach na allai neb eu rhestru. Roedd datrys problemau'n golygu gweithio allan sut yr oedd dwy system "unfath" wedi dod i ymddwyn yn wahanol.

Mae seilwaith fel cod (IaC) yn disodli hyn â thestun. Ysgrifennir cyflwr dymunol y seilwaith mewn ffeiliau, a gedwir mewn rheoli fersiynau, a adolygir fel meddalwedd, a gymhwysir gan offer. Mae ailadeiladu amgylchedd yn dod yn orchymyn. Yr un ffeiliau gyda gwerthoedd gwahanol yw ail gopi. Cais tynnu yw newid, gydag adolygydd, prawf a chofnod. Mae Wikipedia yn disgrifio seilwaith fel cod fel rheoli a darparu seilwaith trwy ffeiliau diffinio sy'n ddarllenadwy gan beiriant, yn hytrach na chyfluniad rhyngweithiol.

Mae GitOps yn mynd â'r syniad gam ymhellach. Datgenir mai'r ystorfa yw'r unig ffynhonnell gwirionedd ar gyfer y cyflwr dymunol, ac mae meddalwedd yn gwylio'r ystorfa a'r system fyw, ac yn dod â'r system yn unol. Nid oes neb yn newid cynhyrchu â llaw; maent yn newid yr ystorfa. Mae hyn yn rhoi llawer i reoli gwasanaethau: llwybr archwilio ar gyfer pob newid, adferiad cyflym, cysondeb rhwng amgylcheddau, a chartref naturiol ar gyfer cymeradwyo newid. Mae hefyd yn cyflwyno risgiau newydd, fel cyfrinachau mewn ystorfeydd a chamgymeriadau sy'n berthnasol ym mhobman ar unwaith. Mae'r pwnc hwn yn esbonio'r syniadau a sut i'w mabwysiadu'n ofalus. Mae'n adeiladu ar reoli cyfluniad (Pwnc 4.4 — Rheoli Cyfluniad), cyflawni parhaus (Pwnc 2.2 — Cyflawni Parhaus), a galluogi newid (Pwnc 3.4 — Galluogi Newid), ac yn arwain at biblinellau (Pwnc 6.4 — Piblinellau a Newid Awtomataidd).

## Cysyniadau craidd

**Seilwaith fel cod (IaC).** Diffinio seilwaith mewn ffeiliau cod neu gyfluniad y mae offer yn eu darllen ac yn eu cymhwyso. Mae'n cwmpasu gweinyddion, rhwydweithiau, storfa, cronfeydd data, rheolau mynediad a gosodiadau llwyfan. Mae Wikipedia yn disgrifio'r dull a'i hanes. Y ffeiliau yw'r ddogfennaeth yn ogystal â'r mecanwaith.

**Datganol a gorchmynnol.** Mae diffiniad datganol yn nodi beth ddylai'r cyflwr terfynol fod ("mae tri gweinydd o'r math hwn y tu ôl i'r cydbwysydd llwyth hwn"); mae'r offeryn yn gweithio allan sut i gyrraedd yno. Mae diffiniad gorchmynnol yn nodi'r camau i'w cymryd. Mae Wikipedia yn disgrifio rhaglennu datganol a gorchmynnol. Mae offer datganol yn tueddu i fod yn haws rhesymu amdanynt ac i'w hailadrodd yn ddiogel, ac mae sgriptiau gorchmynnol yn cynnig mwy o reolaeth ar gyfer tasgau anarferol. Mae llawer o dimau'n defnyddio'r ddau.

**Offer.** Mae enghreifftiau'n cynnwys Terraform, sy'n darparu adnoddau cwmwl, Ansible, sy'n cyflunio systemau, a Kubernetes, sy'n rhedeg cynwysyddion yn ôl maniffestau datganedig. Mae Wikipedia yn disgrifio pob un. Mae tirwedd yr offer yn newid yn gyflym; dewiswch yn ôl ffit, cefnogaeth a'r sgiliau sydd gennych, a chadwch ddiffiniadau mor gludadwy ag sy'n ymarferol.

**Cyflwr dymunol, cyflwr gwirioneddol a drifft.** Y cyflwr dymunol yw'r hyn y mae'r cod yn ei ddweud; y cyflwr gwirioneddol yw'r hyn sy'n rhedeg. Drifft yw'r gwahaniaeth, fel arfer o newidiadau â llaw neu fethiannau. Mae canfod drifft a'i gywiro yn fudd craidd o IaC. Gweler Pwnc 4.4 — Rheoli Cyfluniad.

**Idempotens.** Mae cymhwyso'r un diffiniad dro ar ôl tro yn rhoi'r un canlyniad. Mae Wikipedia yn disgrifio idempotens. Dyma sy'n ei gwneud yn ddiogel i ailrhedeg cymhwysiad i gywiro drifft.

**Ffeiliau cyflwr.** Mae rhai offer yn cadw cofnod o'r adnoddau y maent yn eu rheoli, y maent yn ei gymharu â'r diffiniad. Triniwch ef yn ofalus: gall gynnwys data sensitif, ni ddylid ei olygu â llaw, ac mae angen cloi arno fel nad yw dau unigolyn yn cymhwyso ar unwaith.

**Seilwaith na ellir ei newid (immutable).** Yn lle newid gweinydd sy'n rhedeg, rydych yn adeiladu un newydd o ddelwedd hysbys ac yn disodli'r hen un. Mae hyn yn osgoi drifft ac yn gwneud ôl-dreiglo yn syml: newid yn ôl. Mae'n gweithio orau gyda pheiriannau rhithwir a chynwysyddion, a ddisgrifir ar Wikipedia, a delweddau wedi'u hadeiladu'n dda.

**Rheoli fersiynau ac adolygu.** Mae diffiniadau'n byw mewn rheoli fersiynau, fel Git, y mae Wikipedia yn ei ddisgrifio fel system rheoli fersiynau ddosbarthedig. Mae newidiadau'n mynd trwy ganghennau ac adolygiadau, a ddisgrifir fel ceisiadau tynnu ac adolygu cod. Mae'r hanes yn dangos pwy newidiodd beth, pryd, a pham, sy'n cefnogi archwilio a dysgu. Gweler Pwnc 3.4 — Galluogi Newid.

**GitOps.** Dull gweithredu lle mae ystorfa Git yn dal y cyflwr dymunol, ac mae asiant awtomataidd yn cadw'r system fyw yn unol ag ef. Gwneir newidiadau dim ond trwy newid yr ystorfa; mae'r asiant yn tynnu ac yn cymhwyso, ac yn gwrthdroi newidiadau â llaw. Mae Wikipedia yn crybwyll GitOps o dan DevOps. Mae'r dyluniad ar sail tynnu yn golygu bod y system gynhyrchu yn tynnu ei chyfluniad ei hun, fel nad oes angen i gymwysterau ar gyfer cynhyrchu fyw yn y system adeiladu. Gwiriwch ddogfennaeth y prosiect ei hun am fanylion y dull.

**Dolenni cysoni.** Rheolydd sy'n cymharu cyflwr dymunol a gwirioneddol dro ar ôl tro ac yn gweithredu i gau'r bwlch. Daw'r syniad o ddamcaniaeth rheolaeth, a ddisgrifir ar Wikipedia, ac mae'n sail i sut mae Kubernetes ac offer GitOps yn gweithio. Mae dolenni'n wydn, a gallant hefyd ailadrodd newid gwael yn gyflym.

**Amgylcheddau a dyrchafu.** Mae'r un diffiniadau, â gwerthoedd gwahanol, yn creu amgylcheddau datblygu, prawf a chynhyrchu. Dyrchefir newidiadau trwyddynt. Mae cadw amgylcheddau'n gyson yn gwneud profion yn fwy ystyrlon. Gweler Pwnc 3.5 — Rheoli Rhyddhau a Defnyddio.

**Polisi fel cod.** Rheolau ynghylch beth a ganiateir, fel "dim storfa gyhoeddus" neu "rhaid tagio pob adnodd", wedi'u hysgrifennu fel cod a'u gwirio'n awtomatig cyn cymhwyso newidiadau. Mae hyn yn rhoi rheolaethau lle gwneir y newid ac yn cynhyrchu tystiolaeth. Gweler Pwnc 6.4 — Piblinellau a Newid Awtomataidd.

**Cyfrinachau.** Ni ddylid storio cyfrineiriau, allweddi a thocynnau mewn testun plaen mewn ystorfeydd. Defnyddiwch reolwr cyfrinachau neu amgryptio, a rhowch fynediad lleiaf, byrhoedlog i awtomeiddio. Gweler Pwnc 3.13 — Rheoli Diogelwch Gwybodaeth.

**Modiwlau ac ailddefnyddio.** Mae modiwlau a rennir, a brofwyd, ar gyfer patrymau cyffredin, fel rhwydwaith safonol neu gronfa ddata, yn cyflymu gwaith ac yn gorfodi safonau. Mae angen perchennog, fersiynau a nodiadau rhyddhau arnynt.

**Radiws ffrwydrad.** Gall camgymeriad mewn diffiniad a rennir effeithio ar lawer o systemau ar unwaith. Cyfyngwch ar hyn trwy hollti cyflwr yn unedau llai, defnyddio cyflwyniadau fesul cam, a mynnu adolygiad ar gyfer modiwlau a rennir.

**Profi cod seilwaith.** Mae dulliau'n cynnwys gwiriadau cystrawen a pholisi, cynllun neu ragolwg o newidiadau cyn cymhwyso, profion mewn amgylcheddau tafladwy, a gwiriadau ar ôl cymhwyso. Mae Wikipedia yn disgrifio syniadau cysylltiedig o dan awtomeiddio profion. Gweler Pwnc 2.2 — Cyflawni Parhaus.

**Sut mae'r lensys yn ffitio.** IaC a GitOps yw'r sylfaen beirianyddol ar gyfer gweithrediadau ystwyth: newidiadau bach, wedi'u hadolygu, gwrthdroadwy. Gall AI ddrafftio diffiniadau ac egluro cynlluniau, dan adolygiad. Mae awtomeiddio yn eu cymhwyso. Mae dadansoddeg yn darllen yr hanes am amlder newid a methiant.

## Arferion gorau

1. **Rhowch bob newid mewn cod.** Gwnewch yr ystorfa yn llwybr ar gyfer newidiadau i systemau pwysig, a gwaharddwch newidiadau â llaw ac eithrio mewn argyfyngau diffiniedig. Cofnodwch newidiadau argyfwng a'u plygu'n ôl.
2. **Defnyddiwch adolygu a newidiadau bach.** Mynnwch ail unigolyn i adolygu pob newid, a chadwch newidiadau'n ddigon bach i'w deall. Dangoswch y rhagolwg o'r hyn a fydd yn newid.
3. **Ffafriwch ddiffiniadau datganol a chamau idempotent.** Maent yn haws i'w hailadrodd ac i wirio am ddrifft. Defnyddiwch sgriptiau gorchmynnol ar gyfer tasgau sydd eu hangen, yn ofalus.
4. **Canfyddwch a chywirwch ddrifft.** Cymharwch gyflwr gwirioneddol â'r dymunol ar amserlen neu'n barhaus. Penderfynwch ar gyfer pob math o ddrifft ai gwrthdroi'n awtomatig neu rybuddio.
5. **Cadwch gyfrinachau allan o god.** Defnyddiwch reolwr cyfrinachau, amgryptiwch lle bo angen, rhowch gymwysterau byrhoedlog i awtomeiddio, a sganiwch ystorfeydd am gyfrinachau a ollyngwyd.
6. **Amddiffynnwch gyflwr a'r ystorfa.** Cyfyngwch pwy all newid diffiniadau cynhyrchu a chyflwr, gorfodwch ddiogelu canghennau, a gwnewch gopi wrth gefn o'r ystorfa a'r cyflwr.
7. **Profwch cyn cymhwyso.** Rhedwch wiriadau polisi, rhagolygon a phrofion mewn amgylcheddau tafladwy. Adolygwch y cynllun am ddileadau annisgwyl.
8. **Cyfyngwch y radiws ffrwydrad.** Holltwch ddiffiniadau yn unedau a all fethu'n annibynnol, cyflwynwch fesul cam, ac amddiffynnwch adnoddau critigol rhag eu dileu ar ddamwain.
9. **Ailddefnyddiwch fodiwlau a brofwyd gyda pherchnogion.** Cyhoeddwch fodiwlau wedi'u fersiynu ar gyfer patrymau safonol, gyda dogfennaeth a nodiadau rhyddhau, ac ymddeolwch hen fersiynau.
10. **Cynlluniwch adferiad.** Ymarferwch ailadeiladu amgylchedd o god, gan gynnwys adfer data, ac amserwch ef. Cynhwyswch yr ystorfa a'r offer yn eich cynlluniau parhad. Gweler Pwnc 3.12 — Rheoli Parhad Gwasanaeth.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa rai o'n systemau y gallem eu hailadeiladu o god heddiw, a pha rai o'r cof yn unig?**
Gwnewch restr. Disgwyliwch i lawer ddibynnu ar un unigolyn. Dilynwch trwy ddewis un system a'i diffinio mewn cod.

**Pryd newidiodd rhywun gynhyrchu â llaw ddiwethaf, a sut y daethom i wybod?**
Gofynnwch am straeon. Disgwyliwch nad oes neb yn ei olrhain. Dilynwch trwy ychwanegu canfod drifft at un amgylchedd a chytuno beth sy'n digwydd pan fo gwahaniaeth.

**Ble gallai cyfrinach fod yn eistedd mewn ystorfa neu ffeil cyflwr?**
Chwiliwch gyda'ch gilydd. Disgwyliwch bethau annisgwyl. Dilynwch trwy sganio ystorfeydd a symud y canfyddiadau i reolwr cyfrinachau.

**Beth yw'r newid mwyaf y gallai un cymhwysiad ei wneud, a sut y byddem yn ei gyfyngu?**
Meddyliwch am fodiwlau a rennir a chyflyrau monolithig. Disgwyliwch atebion anghyfforddus. Dilynwch trwy hollti un cyflwr mawr yn rhai llai.

**Sut rydym yn adolygu newidiadau seilwaith, ac ar beth mae adolygydd yn edrych mewn gwirionedd?**
Gofynnwch am adolygiad diweddar. Disgwyliwch gymeradwyaeth gyflym. Dilynwch trwy gytuno beth sy'n rhaid i adolygydd ei wirio, fel allbwn y cynllun ac effaith diogelwch.

**Ble gallai AI ein helpu i ysgrifennu neu adolygu cod seilwaith, a sut rydym yn ei wirio?**
Gall AI ddrafftio diffiniadau ac egluro cynlluniau. Gall hefyd gynhyrchu rhagosodiadau anniogel neu osodiadau adnoddau anghywir. Gofynnwch pwy sy'n adolygu a pha wiriadau sy'n rhedeg. Dilynwch trwy redeg cod a ddrafftiwyd gan AI drwy'r un gwiriadau polisi ag unrhyw god arall.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm digidol llyfrgell genedlaethol yn rhedeg gwasanaeth chwilio catalog ar gwmwl cyhoeddus. Adeiladwyd yr amgylcheddau â llaw dros sawl blwyddyn. Mae amgylchedd prawf yn wahanol i gynhyrchu mewn ffyrdd na all neb eu rhestru, ac olrheiniwyd toriad diweddar i newid grŵp diogelwch a wnaed â llaw yn ystod digwyddiad cynharach ac na chofnodwyd erioed.

Mae arweinydd y llwyfan yn dewis diffinio un amgylchedd mewn cod fel treial. Gan ddefnyddio offeryn datganol, mae'r tîm yn disgrifio'r rhwydwaith, y cyfrifiadura, y gronfa ddata a'r rheolau mynediad ar gyfer yr amgylchedd prawf, yn mewnforio adnoddau presennol, ac yn rhoi'r cod mewn ystorfa gyda diogelu canghennau ac adolygu gorfodol. Mae piblinell yn rhedeg gwiriadau polisi, fel dim storfa gyhoeddus a thagiau gorfodol, ac yn dangos y cynllun ar bob cais tynnu. Mae cyfrinachau'n symud i reolwr cyfrinachau'r darparwr cwmwl.

Yna maent yn ychwanegu canfod drifft: mae swydd nosweithiol yn cymharu'r cod â chyflwr gwirioneddol y cwmwl ac yn postio gwahaniaethau i sianel y tîm. Yn yr wythnos gyntaf mae'n canfod un newid ar ddeg â llaw. Mae wyth yn ddiniwed, mae dau yn adnoddau prawf hen, ac mae un yn rheol mur tân agored ar borth cronfa ddata. Maent yn trwsio'r rheol ac yn dileu'r adnoddau.

Ar ôl tri mis, mae cynhyrchu hefyd mewn cod, ac mae rheolydd arddull GitOps yn y llwyfan cynwysyddion yn cymhwyso newidiadau cymeradwy o'r ystorfa. Mae ailadeiladu'r amgylchedd prawf o'r dechrau yn cymryd 40 munud. Mae'r tîm yn ymarfer ailadeiladu cynhyrchu mewn cyfrif ar wahân, gydag adfer data, mewn hanner diwrnod.

Beth sy'n newid: mae hanes newid yn yr ystorfa, mae adolygiadau'n real, ac mae'r ddau amgylchedd yn cyfateb. Beth sy'n parhau'n anodd: nid yw'r offer yn cefnogi'r gweinydd cronfa ddata hŷn yn dda ac mae'n parhau'n rhannol â llaw; roedd y ffeil cyflwr unwaith yn cynnwys cyfrinair testun plaen o fewnforio cynharach, a bu'n rhaid i'r tîm ei gylchdroi; a chymhwysodd un peiriannydd newid o liniadur gyda fersiwn offeryn gwahanol, a gynhyrchodd wahaniaethau annisgwyl. Mae'r arweinydd yn ychwanegu fersiwn offeryn wedi'i phinio yn y biblinell, rheol mai o'r biblinell yn unig y daw cymwysiadau, a sgan o'r cyflwr am gyfrinachau.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Diffiniwch seilwaith eich gwasanaeth mewn cod wrth ymyl y cymhwysiad, adolygwch ef, a phrofwch ef mewn amgylcheddau tafladwy. Osgowch newidiadau â llaw. Cynhwyswch dagiau, perchnogaeth a gosodiadau diogelwch yn y diffiniad.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch yr ystorfa fel y cofnod o newid, a chanfyddwch ddrifft. Adolygwch gynlluniau'n ofalus, amddiffynnwch gyflwr a chyfrinachau, ac ymarferwch ailadeiladu. Cadwch newidiadau argyfwng yn brin a phlygwch hwy'n ôl i god.

### Arweinyddiaeth a llywodraethu

Gofynnwch am dystiolaeth o'r ystorfa a'r biblinell yn lle cyfarfodydd. Ariennwch yr offer, hyfforddiant ac ymarferion. Gwnewch yn glir bod newidiadau cynhyrchu â llaw yn eithriadau y mae'n rhaid eu cofnodi.

### Cwsmeriaid a defnyddwyr

Rydych yn elwa o amgylcheddau sy'n ymddwyn yn yr un ffordd ac o adferiad cyflymach. Dylech weld llai o bethau annisgwyl ar ôl newidiadau, a rhybudd clir o rai arwyddocaol.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Newidiadau seilwaith bach, wedi'u hadolygu, gwrthdroadwy gydag adborth cyflym yw ffurf weithredol cyflawni parhaus. Adeiladwch y diffiniadau fesul cam, gan ddechrau gyda'r amgylchedd mwyaf poenus. Rhybudd: mae mudo pob system i god ar unwaith yn beryglus; symudwch un ar y tro.

### AI

Gall AI ddrafftio diffiniadau, egluro cynllun, ac awgrymu rheolau polisi, gydag unigolyn yn adolygu pob newid. Enwch berchennog ar gyfer pob defnydd. Rhybudd: gall cod seilwaith a gynhyrchir fod yn anniogel yn ddiofyn neu ddileu adnoddau; cymhwyswch yr un gwiriadau polisi a darllenwch y cynllun. Gweler Pwnc 5.4 — AI Cynhyrchiol ar gyfer Digwyddiadau, Gwybodaeth a Newidiadau.

### Awtomeiddio

Awtomeiddio seilwaith ei hun yw IaC a GitOps. Cadwch reolyddion a phiblinellau â'r fraint leiaf, wedi'u logio a'u hamddiffyn, oherwydd gallant newid popeth. Rhybudd: gall cysoniwr awtomatig ailgymhwyso camgymeriad ym mhobman; cyflwynwch fesul cam a chadwch ffordd i'w oedi. Gweler Pwnc 6.4 — Piblinellau a Newid Awtomataidd.

### Dadansoddeg

Edrychwch ar amlder newid, cyfradd methiant, amser i ailadeiladu, cyfrif drifft, amser i ganfod newidiadau â llaw, a thorri polisi. Rhybudd: mae cyfrif ymrwymiadau yn gwobrwyo gweithgarwch, a gall cyfrif drifft isel adlewyrchu canfodydd gwan; profwch ganfod gyda newid hysbys. Gweler y llyfr *Service Management Metrics* a Phwnc 7.3 — Mesur ac Adrodd.

## Dulliau methu cyffredin

- **Realiti hybrid.** Rhai newidiadau mewn cod a rhai â llaw. Mae drifft yn tyfu. Gwnewch god yr unig lwybr a chanfyddwch ddrifft.
- **Cyfrinachau yn yr ystorfa.** Mae cymwysterau'n gollwng. Defnyddiwch reolwr cyfrinachau a sganiwch.
- **Cyflwr a rennir enfawr.** Mae un newid yn effeithio ar bopeth. Holltwch yn unedau llai.
- **Newidiadau heb eu hadolygu.** Mae camgymeriadau'n cyrraedd cynhyrchu. Mynnwch adolygiad a dangoswch y cynllun.
- **Offer a modiwlau heb eu pinio.** Mae ymddygiad yn newid yn annisgwyl. Pinnwch fersiynau.
- **Byth wedi'i ailadeiladu.** Mae adferiad yn methu pan fo ei angen. Ymarferwch ailadeiladu.
- **Piblinell fel uwch-ddefnyddiwr.** Mae piblinell dan fygythiad yn berchen ar gynhyrchu. Cyfyngwch freintiau a'i hamddiffyn.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Cwmpas | Â llaw | Rhai adnoddau mewn cod | Y rhan fwyaf o systemau pwysig wedi'u diffinio mewn cod | Cwmpas ac eithriadau'n cael eu holrhain | Yr ystad gyfan wedi'i diffinio a'i llywodraethu fel cod |
| Rheolaeth | Dim adolygu | Adolygu cymheiriaid | Adolygu, rhagolwg cynllun a gwiriadau polisi ar bob newid | Drifft yn cael ei ganfod a gweithredu arno | Cysoni gyda goruchwyliaeth ddynol ar draws amgylcheddau |
| Diogelwch | Cyfrinachau mewn cod | Ymwybyddiaeth | Cyfrinachau wedi'u rheoli a'u sganio, awtomeiddio â'r fraint leiaf | Canfyddiadau'n cael eu holrhain nes eu cau | Diogelwch a pholisi wedi'u hymgorffori mewn modiwlau a rennir |
| Adferiad | Ailadeiladu o'r cof | Wedi'i ddogfennu | Ailadeiladu wedi'i ymarfer a'i amseru | Amser adfer yn cael ei fesur a'i wella | Adferiad wedi'i awtomeiddio ar draws amgylcheddau a rhanbarthau |

## Rhestr wirio

- [ ] Mae systemau pwysig wedi'u diffinio mewn cod mewn rheoli fersiynau.
- [ ] Mae pob newid yn cael ei adolygu ac yn dangos rhagolwg cynllun.
- [ ] Gwaherddir newidiadau cynhyrchu â llaw ac eithrio argyfyngau a gofnodwyd.
- [ ] Canfyddir drifft ar amserlen a'i drin gan reol.
- [ ] Mae cyfrinachau mewn rheolwr, ac mae ystorfeydd a chyflwr yn cael eu sganio.
- [ ] Mae offer a modiwlau wedi'u pinio ac mae ganddynt berchnogion.
- [ ] Holltir diffiniadau i gyfyngu'r radiws ffrwydrad.
- [ ] Rydym yn ymarfer ailadeiladu amgylchedd ac yn cofnodi'r amser.

## Anogwyr AI

**Adolygu allbwn cynllun.**

```text
Dyma allbwn cynllun newid seilwaith: [gludwch].
Rhestrwch adnoddau i'w creu, eu newid a'u dinistrio, tynnwch sylw at unrhyw ddileu neu amnewid storfa ddata neu gydran rwydwaith, a rhestrwch gwestiynau y dylai adolygydd eu gofyn. Peidiwch â chymeradwyo na gwrthod.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio rheolau polisi o ofynion.**

```text
Ein gofynion: [rhestrwch, fel dim storfa gyhoeddus, tagiau gofynnol, amgryptio wrth orffwys]. Ein hofferyn: [enw, neu "heb benderfynu"].
Ysgrifennwch bob gofyniad fel rheol mewn iaith blaen gydag un enghraifft o doriad, a disgrifiwch sut i brofi'r rheol. Peidiwch ag ysgrifennu cod oni fyddaf yn enwi'r offeryn.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Crynhoi canfyddiadau drifft.**

```text
Dyma adroddiad drifft yn rhestru gwahaniaethau rhwng cod a'r amgylchedd sy'n rhedeg: [gludwch].
Grwpiwch y gwahaniaethau yn ôl math (adnodd ychwanegol, gosodiad wedi'i newid, adnodd coll), nodwch unrhyw rai sy'n cyffwrdd â mynediad, rhwydwaith neu amgryptio, ac ysgrifennwch un cwestiwn i bob grŵp ar gyfer y tîm. Peidiwch ag argymell atgyweiriadau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): defnyddiwch i gysylltu diffiniadau cod â'r gwasanaethau y maent yn eu cefnogi.
- [change-request](../../../../skills/change-request/SKILL.md): defnyddiwch i ddisgrifio newidiadau seilwaith yn glir i'w hadolygu.
- [security-testing](../../../../skills/security-testing/SKILL.md): defnyddiwch i gynllunio gwiriadau ar gyfer cod seilwaith a chyfrinachau.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): defnyddiwch i ymarfer ailadeiladu o god.
- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i ddogfennu gweithdrefnau â llaw mewn argyfwng sy'n parhau.

## Prif ffynonellau

- Kief Morris, *Infrastructure as Code* (2nd edition, 2020): canllaw ymarferol i ddiffinio a rheoli seilwaith.
- Jez Humble and David Farley, *Continuous Delivery* (2010): sylfeini ar gyfer amgylcheddau a phiblinellau ailadroddadwy.
- Dogfennaeth yr offer a ddefnyddiwch, fel Terraform, Ansible a Kubernetes: y ffynhonnell awdurdodol ar eu hymddygiad.
- Wikipedia, "Infrastructure as code": trosolwg o'r dull.

## Cyfeiriadau

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
