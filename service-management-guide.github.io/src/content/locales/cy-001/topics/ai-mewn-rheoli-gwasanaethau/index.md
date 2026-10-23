# AI mewn Rheoli Gwasanaethau

**Mae deallusrwydd artiffisial yn dod i mewn i reoli gwasanaethau ar y ddesg gwasanaeth, mewn gweithrediadau, mewn gwybodaeth, mewn newid, ac mewn cymorth penderfynu; trinwch bob defnydd fel gwasanaeth â pherchennog, unigolyn sy'n penderfynu lle mae niwed yn bosibl, ffordd o ddal gwallau, a mesur o a yw'n helpu.**

## Pam mae hyn yn bwysig

Mae AI wedi symud o bwnc ymchwil i nodwedd o'r offer y mae timau gwasanaeth eisoes yn eu defnyddio. Mae'r system tocynnau yn awgrymu categorïau. Mae'r llwyfan monitro yn grwpio rhybuddion. Mae'r cynorthwyydd sgwrs yn ateb cwestiynau staff. Mae'r golygydd cod yn drafftio sgript. Troswyd rhai o'r rhain ymlaen gan y gwerthwr, ac ni phenderfynodd neb yn y tîm eu mabwysiadu.

Mae'r potensial yn real. Mae llawer o waith gwasanaeth yn ddarllen, ysgrifennu, didoli a chwilio, sef tasgau y mae AI cyfredol yn eu gwneud yn ddigon da i arbed amser. Mae'r risg yn real hefyd. Mae systemau AI yn cynhyrchu atebion rhugl a all fod yn anghywir, gallant guddio sut y daethant i gasgliad, gallant ollwng data, a gallant fethu mewn ffyrdd sy'n anodd eu rhagweld. Mae tîm sy'n mabwysiadu AI heb berchnogaeth, adolygiad a mesurau yn etifeddu'r risgiau hynny heb y buddion.

Y pwnc hwn yw map y rhan AI o'r canllaw hwn. Mae'n esbonio'r prif fathau o AI mewn gwaith gwasanaeth, ble maent yn helpu, ble nad ydynt, a beth i'w ofyn cyn mabwysiadu. Mae pynciau diweddarach yn mynd yn ddyfnach: gweithrediadau (Pwnc 5.2 — AIOps), y ddesg gwasanaeth (Pwnc 5.3 — Desg Gwasanaeth AI ac Asiantau Rhithwir), AI cynhyrchiol (Pwnc 5.4 — AI Cynhyrchiol ar gyfer Digwyddiadau, Gwybodaeth a Newidiadau), asiantau sy'n gweithredu (Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol), llywodraethu (Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI), anogwyr a sgiliau (Pwnc 5.7 — Sgiliau ac Anogwyr AI), a'r model gweithredu (Pwnc 5.8 — Model Gweithredu a Sgiliau AI). Mae disgrifiad y perchennog o'r fersiwn ddiweddaraf o ITIL yn enwi AI fel rhan o'r amgylchedd y mae'n rhaid i reoli gwasanaethau fynd i'r afael ag ef (gweler Pwnc 1.3 — ITIL 5).

## Cysyniadau craidd

**Deallusrwydd artiffisial.** Term eang am systemau sy'n cyflawni tasgau sydd fel arfer angen deallusrwydd dynol, fel adnabod patrymau, deall iaith, a gwneud argymhellion. Mae erthygl Wikipedia ar ddeallusrwydd artiffisial yn disgrifio'r maes a'i hanes. Mae'r term yn cwmpasu llawer o dechnegau gwahanol, ac mae'r hyn y mae pobl yn ei olygu wrth "AI" yn amrywio. Wrth drafod defnydd, enwch y dechneg a'r dasg.

**Dysgu peirianyddol.** Systemau sy'n dysgu patrymau o ddata yn hytrach na dilyn rheolau penodol. Mae Wikipedia yn disgrifio dysgu peirianyddol a'i ganghennau. Mae enghreifftiau mewn gwaith gwasanaeth yn cynnwys dosbarthu tocynnau, canfod metrigau anarferol, a rhagfynegi methiannau. Maent yn dibynnu ar ddata hyfforddi, a gallant ddirywio pan fydd amodau'n newid, problem y mae Wikipedia yn ei disgrifio fel drifft cysyniad.

**AI cynhyrchiol a modelau iaith mawr.** Systemau sy'n cynhyrchu cynnwys newydd, fel testun, cod neu ddelweddau, o anogwyr. Hyfforddir modelau iaith mawr (LLMs) ar lawer iawn o destun a gallant grynhoi, drafftio, cyfieithu ac ateb cwestiynau. Mae Wikipedia yn disgrifio AI cynhyrchiol a modelau iaith mawr. Mae eu hallbynnau'n rhugl heb sicrwydd o fod yn wir.

**Rhithweledigaeth (hallucination).** Allbwn sy'n gredadwy ond yn ffug neu heb ei gefnogi. Mae Wikipedia yn disgrifio rhithweledigaeth mewn AI. Mewn gwaith gwasanaeth gall olygu gorchymyn a ddyfeisiwyd, polisi a ddyfeisiwyd, neu wraidd achos hyderus ond anghywir. Cynlluniwch ar ei gyfer: seiliwch atebion ar ffynonellau, dangoswch y ffynonellau, a gwiriwch cyn gweithredu.

**Cynhyrchu a gynyddir gan adfer (retrieval-augmented generation).** Patrwm lle mae'r system yn adfer dogfennau perthnasol yn gyntaf, fel erthyglau gwybodaeth, ac yna'n gofyn i'r model ateb gan ddefnyddio'r rheini yn unig. Mae Wikipedia yn disgrifio'r dull. Mae'n lleihau, ond nid yn dileu, atebion anghywir, ac mae'n dibynnu ar ansawdd y dogfennau. Gweler Pwnc 3.9 — Rheoli Gwybodaeth.

**Asiantau.** Systemau sydd nid yn unig yn ateb ond yn cymryd camau: galw offer, newid cofnodion, rhedeg sgriptiau. Mae Wikipedia yn disgrifio asiantau deallus yn gyffredinol. Mae asiantau'n codi'r polion oherwydd bod gan gamgymeriadau effeithiau yn y byd. Gweler Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol.

**Ble mae AI yn helpu mewn rheoli gwasanaethau.** Mae defnyddiau nodweddiadol yn syrthio i bum grŵp:

| Maes | Enghreifftiau | Prif ragofal |
|---|---|---|
| Desg gwasanaeth | Dosbarthu a chyfeirio tocynnau, drafftio atebion, ateb cwestiynau cyffredin | Atebion anghywir neu ddyfeisiedig i ddefnyddwyr |
| Gweithrediadau | Grwpio rhybuddion, canfod anomaleddau, awgrymu achosion | Signalau a gollwyd yn gudd |
| Gwybodaeth | Chwilio, crynhoi a drafftio erthyglau | Drafftiau sy'n lledaenu gwallau |
| Newid a chyflawni | Drafftio cod a phrofion, asesu risg newid, ysgrifennu nodiadau rhyddhau | Cod anniogel neu anghywir, sgorau risg y gorymddiriedir ynddynt |
| Cymorth penderfynu | Crynhoi data, rhagweld galw, dod o hyd i batrymau | Casgliadau gorhyderus o ddata gwan |

**Person yn y ddolen.** Mae unigolyn yn adolygu neu'n cymeradwyo allbwn neu weithred AI cyn iddo ddod i rym. Mae Wikipedia yn disgrifio systemau person-yn-y-ddolen. Rheolaeth ydyw, ac mae'n gweithio dim ond os oes gan yr unigolyn yr amser, y wybodaeth a'r awdurdod i ddweud na. Mae Wikipedia hefyd yn disgrifio tuedd awtomeiddio, y duedd i orddibynnu ar awgrymiadau awtomataidd, a all droi gwiriad dynol yn stamp rwber.

**Eglurhad.** Y gallu i ddweud pam y cynhyrchodd system allbwn. Mae Wikipedia yn disgrifio AI eglurhaol. Ar gyfer rhai defnyddiau, fel graddio tocyn, mae rheswm bras yn ddigon; ar gyfer eraill, fel penderfyniad sy'n effeithio ar fynediad neu gyflog unigolyn, mae angen mwy. Penderfynwch faint o eglurhad y mae pob defnydd ei angen.

**Tuedd a thegwch.** Gall AI a hyfforddwyd ar ddata'r gorffennol atgynhyrchu patrymau'r gorffennol, gan gynnwys rhai annheg. Mae Wikipedia yn disgrifio tuedd algorithmig. Mewn gwaith gwasanaeth, gall tuedd ymddangos yn pwy sy'n cael help cyflymach, pwy y mae eu ceisiadau'n cael eu nodi, neu pa iaith y mae'r system yn ei deall yn dda.

**Data a phreifatrwydd.** Mae offer AI yn prosesu'r data rydych yn ei roi iddynt, fel testun tocynnau gyda manylion personol. Ble mae data'n mynd, am ba mor hir y caiff ei gadw, ac a yw'n hyfforddi modelau eraill yw'r cwestiynau canolog. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

**Risgiau diogelwch.** Mae gan systemau AI eu gwendidau eu hunain, fel chwistrellu anogwr (prompt injection), lle mae testun mewn dogfen neu neges yn ceisio rhoi cyfarwyddiadau newydd i'r model. Mae Wikipedia yn disgrifio chwistrellu anogwr. Trinwch fewnbynnau o'r tu allan fel rhai nad ymddiriedir ynddynt.

**Cylch bywyd a gweithrediadau.** Mae model sydd ar waith angen monitro, ailhyfforddi neu ddisodli, fersiynu ac ymddeol. Mae MLOps, a ddisgrifir ar Wikipedia, yn cymhwyso disgyblaeth peirianneg i hyn. Ar gyfer model gwerthwr, mae angen i chi dracio newidiadau mewn ymddygiad ar ôl diweddariadau o hyd.

**Fframweithiau llywodraethu.** Mae Deddf Deallusrwydd Artiffisial yr Undeb Ewropeaidd, a ddisgrifir ar Wikipedia, yn gosod rhwymedigaethau cyfreithiol sy'n dibynnu ar gategorïau risg. Mae ISO/IEC 42001 yn pennu system rheoli AI, ac mae Sefydliad Cenedlaethol Safonau a Thechnoleg yr Unol Daleithiau yn cyhoeddi Fframwaith Rheoli Risg AI. Geirfa a strwythur ar gyfer llywodraethu yw'r rhain; nid ydynt yn lle cyngor cyfreithiol.

**Sut mae'r lensys yn ffitio.** AI yw un o'r pedair lens. Mae arfer ystwyth yn awgrymu treialon bach gyda defnyddwyr go iawn ac adborth byr. Awtomeiddio yw'r cymydog agosaf: mae AI yn penderfynu neu'n awgrymu, mae awtomeiddio yn gweithredu. Mae dadansoddeg yn cyflenwi'r data y mae AI yn dysgu ohono a'r mesurau sy'n dangos a yw'n helpu.

## Arferion gorau

1. **Dechreuwch â phroblem, nid offeryn.** Enwch boen penodol, fel amser a dreulir yn didoli tocynnau, a mesur gwelliant. Yna gofynnwch ai AI yw'r ateb cywir, neu a yw atgyweiriad symlach yn gweithio.
2. **Cadwch restr o ddefnyddiau AI.** Rhestrwch bob nodwedd ac offeryn AI sydd ar waith, gan gynnwys nodweddion gwerthwyr ac offer personol y mae staff yn eu defnyddio ar gyfer gwaith. Cofnodwch ddiben, data, perchennog a statws.
3. **Enwch berchennog ar gyfer pob defnydd.** Mae un unigolyn yn atebol am yr hyn y mae'r AI yn ei wneud, pa ddata y mae'n ei ddefnyddio, a beth sy'n digwydd pan fo'n anghywir. Heb berchennog, nid oes neb yn sylwi ar ddirywiad.
4. **Penderfynwch ble mae unigolyn yn penderfynu.** Ar gyfer pob defnydd, ysgrifennwch yr hyn y caiff yr AI ei wneud ar ei ben ei hun, beth sydd angen adolygiad, a beth na ddylai ei wneud byth. Gwnewch yr adolygiad yn real: rhowch amser a chyd-destun i adolygwyr.
5. **Seiliwch atebion ar eich ffynonellau eich hun.** Defnyddiwch adfer o wybodaeth a adolygwyd, dangoswch y ffynonellau i'r defnyddiwr, a dywedwch yn glir pan nad oes ffynhonnell yn cefnogi ateb.
6. **Profwch cyn ac ar ôl lansio.** Adeiladwch set o achosion prawf realistig gydag atebion hysbys, gan gynnwys rhai lletchwith a gwrthwynebus. Rhedwch hwy cyn rhyddhau ac ar ôl pob newid i'r model neu'r data.
7. **Mesurwch werth a gwallau.** Tracwch amser a arbedwyd, ansawdd allbynnau, cywiriadau gan bobl, cwynion defnyddwyr a chost. Samplwch allbynnau'n rheolaidd.
8. **Diogelwch ddata.** Penderfynwch pa ddata y caniateir ei anfon i ba offer, tynnwch fanylion personol a sensitif lle gallwch, a gwiriwch delerau contract ar gyfer cadw a defnyddio ar gyfer hyfforddi.
9. **Cynlluniwch ar gyfer methiant.** Gwnewch hi'n hawdd diffodd nodwedd AI, cyfeirio at unigolyn, ac adfer. Ymarferwch fethiant gwasanaeth AI rydych yn dibynnu arno.
10. **Adeiladwch sgiliau a rhannwch ddysgu.** Hyfforddwch bobl i ddefnyddio AI yn dda ac i'w gwestiynu. Rhannwch yr hyn sy'n gweithio a'r hyn sy'n methu ar draws timau. Gweler Pwnc 5.7 — Sgiliau ac Anogwyr AI.

## Cwestiynau i'w trafod gyda'ch tîm

**Ymhle rydym eisoes yn defnyddio AI, gan gynnwys nodweddion na ddewisom ac offer y mae pobl yn eu defnyddio ar eu pen eu hunain?**
Gofynnwch i bawb, a gwiriwch osodiadau gwerthwyr. Disgwyliwch restr hirach nag y rhagwelodd neb. Dilynwch trwy gofnodi pob defnydd gyda pherchennog.

**Pa rai o'n tasgau sy'n bennaf yn ddarllen, ysgrifennu a didoli, a pha rai na fydden ni eisiau i beiriant benderfynu arnynt?**
Mae hyn yn didoli tasgau yn ôl addasrwydd. Disgwyliwch gytundeb ar ddrafftio ac anghytundeb ar benderfyniadau. Dilynwch trwy ddewis un dasg risg isel i'w threialu.

**Beth fydden ni'n ei wneud pe bai ein cynorthwyydd AI yn rhoi ateb anghywir hyderus i ddefnyddiwr, a sut y byddem yn canfod?**
Cerddwch drwy'r senario. Disgwyliwch fylchau mewn canfod. Dilynwch trwy gytuno ar ffordd o samplu allbynnau a chasglu adborth defnyddwyr.

**Pa ddata rydym yn ei anfon at offer AI, ac a ydym wedi darllen y telerau?**
Rhestrwch yr offer a'r data. Disgwyliwch gyfrifon personol a thelerau anhysbys. Dilynwch trwy gytuno ar reol ynghylch yr hyn na ddylid ei ludo i offer allanol.

**Sut y byddem yn gwybod bod defnydd AI yn werth ei gost?**
Gofynnwch am fesur budd a mesur niwed. Disgwyliwch "mae'n teimlo'n gyflymach". Dilynwch trwy ddewis un defnydd a chytuno ar fesur cyn-ac-ar-ôl.

**Pa sgiliau sydd eu hangen ar ein pobl i ddefnyddio AI yn dda, a phwy fydd yn eu dysgu?**
Meddyliwch am ysgrifennu anogwyr da, gwirio atebion, a sylwi ar derfynau. Disgwyliwch ystod eang o hyder. Dilynwch trwy gynllunio sesiwn ymarfer fer gyda thasgau go iawn.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm TG rhwydwaith llyfrgelloedd cyhoeddus cenedlaethol yn cefnogi 200 o ganghennau a thua 6,000 o staff. Mae'r ddesg gwasanaeth yn trin cyfaint uchel o gwestiynau ailadroddus am argraffu, mewngofnodi a'r system fenthyca. Mae pennaeth y gwasanaeth eisiau defnyddio AI i leihau'r ciw, ac mae gwerthwr y system tocynnau newydd ychwanegu cynorthwyydd AI, wedi'i droi ymlaen yn ddiofyn ar gyfer sgwrs sy'n wynebu staff.

Mae rheolwr y gwasanaeth yn rhestru defnyddiau AI yn gyntaf. Ar wahân i gynorthwyydd y gwerthwr, mae'n canfod bod dau ddadansoddwr yn defnyddio offeryn sgwrs cyhoeddus i grynhoi tocynnau, a bod datblygwr wedi adeiladu sgript sy'n drafftio atebion. Mae'n rhoi perchennog i bob un ac yn gosod rheol: dim data personol mewn offer cyhoeddus. Yna mae'n dewis un defnydd i'w wella: cynorthwyydd sy'n wynebu staff sy'n ateb cwestiynau "sut ydw i", gan ddefnyddio'r sylfaen wybodaeth gymeradwy yn unig, gyda dolenni ffynhonnell a botwm gweladwy i gyrraedd unigolyn.

Mae'n adeiladu 60 cwestiwn prawf o docynnau go iawn, gan gynnwys deg na all y sylfaen wybodaeth eu hateb, lle mai'r ymddygiad cywir yw dweud hynny. Mae'r fersiwn gyntaf yn ateb tri o'r deg hynny â chamau a ddyfeisiwyd. Mae'r tîm yn tynhau'r cyfarwyddiadau ac yn ychwanegu rheol i wrthod pan nad oes erthygl yn cyfateb, ac mae'r methiannau'n gostwng i un. Am y mis cyntaf, mae asiant desg yn darllen pob sgwrs na ddatryswyd gan y cynorthwyydd, a sampl o'r gweddill.

Beth sy'n newid: mae'r cynorthwyydd yn datrys tua thraean o sgyrsiau heb docyn, ac mae asiantiaid yn treulio llai o amser ar y cwestiynau ailadroddus. Beth sy'n parhau'n anodd: mae gan y sylfaen wybodaeth erthyglau hen y mae'r cynorthwyydd yn eu dyfynnu, felly rhaid i'r tîm ei glanhau; mae'r gwerthwr yn newid y model sylfaenol heb rybudd, a newidiodd ymddygiad dros nos unwaith; ac mae'n well gan staff mewn canghennau bach ffonio weithiau. Mae'r rheolwr yn gosod rhediad prawf misol, cyswllt y cytunwyd arno ar gyfer newidiadau model, a neges glir bod ffonio'n dal ar gael.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Defnyddiwch AI i ddrafftio cod, profion a dogfennaeth, o dan eich adolygiad a'ch gwiriadau piblinell arferol. Cofnodwch ble defnyddiwyd AI, a gwyliwch am god anniogel neu heb drwydded. Trinwch nodweddion AI yn eich cynnyrch eich hun fel gwasanaethau â pherchnogion.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch AI i ddidoli, crynhoi a chwilio, gydag unigolyn yn penderfynu unrhyw beth sy'n effeithio ar ddefnyddwyr neu systemau. Adroddwch wallau a bron â digwydd, a helpwch i diwnio'r hyn y mae'r AI yn ei weld ac yn ei ddweud.

### Arweinyddiaeth a llywodraethu

Gofynnwch am y rhestr, y perchnogion, y mesurau, a'r cynllun ar gyfer methiant. Gosodwch reolau clir ar ddata a phenderfyniadau. Ariennwch hyfforddiant a phrofi, nid dim ond trwyddedau.

### Cwsmeriaid a defnyddwyr

Dylech wybod pan fyddwch yn siarad ag AI a gallu cyrraedd unigolyn. Dywedwch wrth y darparwr pan oedd ateb yn anghywir neu'n ddiwerth. Byddwch yn ofalus pa ddata personol rydych yn ei rannu.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Rhowch gynnig ar AI mewn treialon bach gyda defnyddwyr go iawn, dysgwch o adborth, a phenderfynwch gadw, newid neu stopio. Cadwch randdeiliaid yn cymryd rhan yn yr hyn y caiff yr AI ei wneud. Rhybudd: nid yw arddangosiad llwyddiannus yn dystiolaeth bod defnydd yn ddiogel neu'n werthfawr; rhedwch dreial go iawn gyda mesurau.

### AI

Y pwnc hwn yw'r lens AI ei hun: mae angen perchennog ar bob defnydd, unigolyn sy'n penderfynu lle mae niwed yn bosibl, canfod gwallau, a mesurau. Rhybudd: peidiwch â dirprwyo atebolrwydd i werthwr neu fodel; rydych yn parhau'n atebol am ganlyniadau y mae eich gwasanaeth yn eu darparu.

### Awtomeiddio

Mae AI yn penderfynu neu'n awgrymu; mae awtomeiddio yn gweithredu. Cysylltwch hwy'n ofalus, gyda therfynau ar yr hyn a all ddigwydd heb gymeradwyaeth, logiau, a ffordd o stopio. Rhybudd: gall AI sy'n sbarduno awtomeiddio luosi camgymeriad yn gyflym; ychwanegwch derfynau cyfradd ac adolygiad. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

### Dadansoddeg

Mesurwch fudd, cyfraddau gwallau a ganfuwyd mewn samplau, adborth defnyddwyr, a chost. Rhybudd: gall rhifau defnydd a graddfeydd defnyddwyr edrych yn dda tra bo ansawdd yn wael; samplwch allbynnau a chymharwch â llinell sylfaen. Gweler Pwnc 7.3 — Mesur ac Adrodd a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Offeryn cyn problem.** Troir nodwedd ymlaen ac nid oes neb yn mesur y budd. Dechreuwch â phoen a mesur.
- **Dim rhestr.** Mae defnyddiau'n lluosi heb eu gweld. Rhestrwch bob defnydd AI gyda pherchennog.
- **Adolygiad dynol mewn enw yn unig.** Mae adolygwyr yn stampio rwber. Rhowch amser, cyd-destun ac awdurdod, a samplwch eu penderfyniadau.
- **Atebion anghywir hyderus.** Mae defnyddwyr yn gweithredu ar gyngor a ddyfeisiwyd. Seiliwch atebion, dyfynnwch ffynonellau, a gwrthodwch pan fyddwch yn ansicr.
- **Gollwng data.** Mae testun sensitif yn mynd i offer allanol. Gosodwch reolau a gwiriwch delerau.
- **Anwybyddu newidiadau model.** Mae ymddygiad yn symud ar ôl diweddariad gwerthwr. Profwch yn rheolaidd a gosodwch gyswllt ar gyfer newidiadau.
- **Dim ffordd allan.** Mae'r gwasanaeth yn dibynnu ar AI heb ddewis wrth gefn. Darparwch lwybr at unigolyn a switsh diffodd.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Rhestr a pherchnogaeth | Defnyddiau anhysbys | Prif ddefnyddiau wedi'u rhestru | Rhestr gyda pherchnogion a dibenion | Rhestr yn cael ei hadolygu a'i phrofi | Rhestr wedi'i hintegreiddio â'r catalog a llywodraethu |
| Penderfyniadau dynol | Heb eu diffinio | Adolygiad anffurfiol | Pwyntiau adolygu wedi'u diffinio ar gyfer pob defnydd | Ansawdd adolygu yn cael ei samplu | Adolygu'n cael ei addasu yn ôl risg a thystiolaeth |
| Profi a monitro | Dim | Arddangosiadau | Setiau prawf a samplu rheolaidd | Gwallau a drifft yn cael eu mesur | Gwerthuso parhaus ar draws defnyddiau |
| Data a risg | Aneglur | Ymwybyddiaeth | Rheolau ar ddata a thelerau gwerthwyr | Cydymffurfiaeth yn cael ei gwirio a'i harchwilio | Risg yn cael ei rheoli ar draws timau a chyflenwyr |

## Rhestr wirio

- [ ] Rydym yn cadw rhestr o ddefnyddiau AI, gan gynnwys nodweddion gwerthwyr ac offer personol.
- [ ] Mae gan bob defnydd berchennog a enwyd.
- [ ] Rydym wedi ysgrifennu'r hyn y caiff pob AI ei wneud ar ei ben ei hun, beth sydd angen adolygiad, a beth na ddylai ei wneud.
- [ ] Mae atebion wedi'u seilio ar ffynonellau a adolygwyd ac yn eu dangos.
- [ ] Mae gennym set brawf ac rydym yn ei rhedeg yn rheolaidd.
- [ ] Rydym yn samplu allbynnau ac yn tracio gwallau, cywiriadau ac adborth.
- [ ] Mae gennym reolau ar ba ddata sy'n mynd i ba offer.
- [ ] Gall defnyddwyr gyrraedd unigolyn, a gallwn ddiffodd pob defnydd AI.

## Anogwyr AI

**Rhestru defnyddiau AI o ddisgrifiad o'n hoffer.**

```text
Dyma ddisgrifiad o'r offer y mae ein tîm yn eu defnyddio a'r hyn y mae pob un yn ei wneud: [gludwch].
Rhestrwch pa offer sy'n debygol o gynnwys nodweddion AI, beth y gallai pob un ei wneud, pa ddata y gallai ei brosesu, a chwestiwn i'w ofyn i'r gwerthwr neu'r perchennog. Nodwch yn glir pa eitemau sy'n ddyfaliadau a pheidiwch â datgan ffeithiau am werthwyr.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio cwestiynau prawf ar gyfer cynorthwyydd.**

```text
Mae ein cynorthwyydd yn ateb cwestiynau am [pynciau] gan ddefnyddio'r dogfennau hyn yn unig: [rhestrwch deitlau].
Ysgrifennwch 30 cwestiwn prawf: 15 y mae'r dogfennau'n eu hateb, 10 nad ydynt, a 5 sy'n ceisio gwneud i'r cynorthwyydd anwybyddu ei gyfarwyddiadau. Ar gyfer pob un, nodwch yr ymddygiad cywir. Peidiwch â chynnwys data personol go iawn.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Paratoi adolygiad defnydd AI.**

```text
Defnydd AI: [disgrifiwch]. Perchennog: [rôl]. Data a ddefnyddir: [rhestrwch]. Penderfyniadau y mae'n effeithio arnynt: [rhestrwch].
Drafftiwch adolygiad un dudalen gyda: diben, beth y caiff ei wneud ar ei ben ei hun, beth sydd angen adolygiad dynol, sut y canfyddir gwallau, sut y caiff ei ddiffodd, a chwestiynau agored. Nodwch bob eitem na allech ei llenwi o'm disgrifiad.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): defnyddiwch i ddylunio anogwyr sy'n glir, wedi'u seilio ac yn brofadwy.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): defnyddiwch i ddogfennu beth mae model yn ei wneud, ei ddata a'i derfynau.
- [risk-register](../../../../skills/risk-register/SKILL.md): defnyddiwch i gofnodi risgiau AI, perchnogion a phenderfyniadau.
- [itil-5](../../../../skills/itil-5/SKILL.md): defnyddiwch i gysylltu defnydd AI â chanllawiau diweddaraf y perchennog, gyda honiadau heb eu gwirio wedi'u nodi.
- [mlops](../../../../skills/mlops/SKILL.md): defnyddiwch i reoli modelau trwy eu cylch bywyd.

## Prif ffynonellau

- NIST, AI Risk Management Framework: strwythur a ddefnyddir yn eang ar gyfer nodi a rheoli risg AI.
- ISO/IEC 42001 (y safon ei hun): gofynion ar gyfer system rheoli deallusrwydd artiffisial; darllenwch yr argraffiad cyfredol gan y cyhoeddwr.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o ITIL (Fersiwn 5), gan gynnwys AI.
- Wikipedia, "Artificial intelligence" a "Large language model": trosolygon o'r maes a'r dechnoleg.

## Cyfeiriadau

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
