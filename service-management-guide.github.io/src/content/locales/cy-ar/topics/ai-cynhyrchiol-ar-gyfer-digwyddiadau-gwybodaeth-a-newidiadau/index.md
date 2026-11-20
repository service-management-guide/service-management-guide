# AI Cynhyrchiol ar gyfer Digwyddiadau, Gwybodaeth a Newidiadau

**Gall AI cynhyrchiol grynhoi digwyddiadau, drafftio erthyglau gwybodaeth ac ôl-drafodaethau, a helpu i asesu newidiadau; mae'n arbed yr amser mwyaf ar ddrafftiau cyntaf a'r lleiaf ar ffeithiau, felly defnyddiwch ef ar gyfer ysgrifennu a darllen, gwiriwch bob honiad yn erbyn y cofnod, a chadwch unigolyn a enwyd yn atebol am yr hyn a anfonir neu a gymeradwyir.**

## Pam mae hyn yn bwysig

Mae llawer o'r gwaith o redeg gwasanaethau yn ysgrifennu a darllen. Yn ystod digwyddiad, mae rhywun yn ysgrifennu diweddariadau statws tra bo eraill yn darllen logiau sgwrs. Wedi hynny, mae rhywun yn ysgrifennu llinell amser ac adolygiad. Mae erthygl wybodaeth yn dechrau fel nodyn datrys tocyn y mae angen ei droi'n rhywbeth darllenadwy. Mae cais newid angen disgrifiad, asesiad risg a chynllun. Mae'r tasgau hyn yn cymryd amser, yn ailadroddus, ac yn aml yn cael eu gwneud yn hwyr ac yn wael oherwydd bod pawb yn brysur.

Mae AI cynhyrchiol yn addas iawn i'r math hwn o waith. Gall modelau iaith mawr ddarllen edefyn hir a chynhyrchu crynodeb mewn eiliadau. Gallant droi nodiadau bras yn ddrafft glân a chynnig strwythur ar gyfer adolygiad. O'i ddefnyddio'n dda, mae'n rhyddhau pobl fedrus ar gyfer barn a sgwrs. O'i ddefnyddio'n wael, mae'n cynhyrchu testun hyderus, rhugl sy'n anghywir: llinell amser ag amseroedd a ddyfeisiwyd, gwraidd achos na ddaeth neb o hyd iddo, cam llawlyfr gweithredu nad yw'n bodoli.

Mae'r gwahaniaeth yn y ffordd y sefydlir y gwaith. Rhowch y cofnod gwirioneddol i'r model, gofynnwch iddo ddefnyddio hwnnw yn unig, gwnewch iddo ddangos ei ffynonellau, a gofynnwch i unigolyn wirio cyn rhannu unrhyw beth. Mae'r pwnc hwn yn rhoi patrymau ymarferol ar gyfer tri maes: digwyddiadau, gwybodaeth a newidiadau. Mae'n adeiladu ar y syniadau cyffredinol ym Mhwnc 5.1 — AI mewn Rheoli Gwasanaethau ac yn perthyn i reoli digwyddiadau (Pwnc 3.2 — Rheoli Digwyddiadau), rheoli problemau (Pwnc 3.3 — Rheoli Problemau), rheoli gwybodaeth (Pwnc 3.9 — Rheoli Gwybodaeth), a galluogi newid (Pwnc 3.4 — Galluogi Newid). Mae cwestiynau llywodraethu ym Mhwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

## Cysyniadau craidd

**AI cynhyrchiol.** Systemau sy'n cynhyrchu cynnwys newydd, fel testun a chod, o anogwyr. Mae Wikipedia yn disgrifio AI cynhyrchiol a modelau iaith mawr. Ar gyfer gwaith gwasanaeth, testun yw'r prif allbwn: crynodebau, drafftiau, esboniadau a nodiadau strwythuredig.

**Rhithweledigaeth.** Allbwn sy'n rhugl ond heb ei gefnogi neu'n ffug. Mae Wikipedia yn disgrifio rhithweledigaeth mewn AI. Mae'n briodwedd o sut mae'r modelau hyn yn gweithio, nid nam prin. Mae'r risg ar ei huchaf pan ofynnir i'r model am ffeithiau na roddwyd iddo: amser union, achos, rhif polisi, opsiwn API.

**Seilio.** Rhoi'r deunydd ffynhonnell i'r model a gofyn iddo ateb o hwnnw yn unig. Mae cynhyrchu a gynyddir gan adfer, a ddisgrifir ar Wikipedia, yn dod o hyd i ddogfennau perthnasol ac yn eu cyflenwi. Ar gyfer digwyddiadau, y ffynhonnell yw'r llinell amser, sgwrs a data monitro; ar gyfer gwybodaeth, y tocyn ac erthyglau presennol; ar gyfer newidiadau, y cofnod newid a newidiadau tebyg yn y gorffennol. Mae seilio yn lleihau gwallau ond nid yw'n eu dileu.

**Ffenestr cyd-destun.** Faint o destun y gall model ei ystyried ar unwaith. Mae Wikipedia yn disgrifio'r ffenestr cyd-destun. Gall sgyrsiau digwyddiad hir ei ragori, felly caiff mewnbynnau hir eu crynhoi fesul rhan. Gwiriwch a gollyngwyd deunydd pwysig.

**Crynhoi.** Lleihau testun hir i'w brif bwyntiau. Mae Wikipedia yn disgrifio crynhoi awtomatig. Mae crynodebau'n colli manylion yn fwriadol, a gallant ei ystumio. Maent orau fel arweiniad i'r gwreiddiol, gyda'r modd i'w wirio.

**Drafftiau, nid penderfyniadau.** Y defnydd mwyaf diogel yw cynhyrchu drafft cyntaf i unigolyn ei olygu a bod yn berchen arno. Mae enw'r unigolyn ar y canlyniad, ac maent yn atebol amdano. Mae hyn yn cadw barn gyda phobl ac yn defnyddio'r model ar gyfer y rhan fecanyddol.

**Anogwr a chyfarwyddyd.** Y testun a roddir i'r model. Mae cyfarwyddiadau clir, gyda'r rôl, y dasg, y ffynonellau, y fformat, a beth i'w wneud pan fo gwybodaeth ar goll, yn gwella canlyniadau. Gweler Pwnc 5.7 — Sgiliau ac Anogwyr AI.

**Cyfrinachedd.** Mae sgyrsiau digwyddiad a thocynnau yn aml yn cynnwys cyfrinachau, data personol a manylion diogelwch. Mae ble mae'r testun yn mynd yn bwysig: model a letyir gan eich sefydliad, gwasanaeth gwerthwr dan gontract, neu offeryn cyhoeddus dan delerau anhysbys. Penderfynwch beth gaiff fynd ble. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

**Chwistrellu anogwr.** Gall testun yn y deunydd a roddwch i'r model, fel corff tocyn neu linell log, gynnwys cyfarwyddiadau sy'n ceisio newid ei ymddygiad. Mae Wikipedia yn disgrifio chwistrellu anogwr. Trinwch bob mewnbwn fel un nad ymddiriedir ynddo, a pheidiwch â gadael i fodel â phwerau i weithredu ddarllen cynnwys o ffynonellau anhysbys.

**Tuedd awtomeiddio.** Y duedd i ymddiried mewn awgrymiadau awtomataidd, yn enwedig pan fyddwch yn flinedig neu'n brysur. Mae Wikipedia yn disgrifio tuedd awtomeiddio. Yn ystod digwyddiad, gall awgrym rhugl anfon ymatebwyr i lawr y llwybr anghywir. Trinwch allbwn AI fel damcaniaeth.

**Digwyddiadau.** Mae tasgau defnyddiol yn cynnwys crynhoi edefyn i ymatebydd newydd, drafftio diweddariad statws i'w adolygu, echdynnu llinell amser o ddigwyddiadau gyda stampiau amser o'r cofnod, dod o hyd i ddigwyddiadau tebyg yn y gorffennol, a chynnig cwestiynau ar gyfer yr adolygiad. Mae tasgau peryglus yn cynnwys datgan gwraidd achos fel ffaith ac anfon diweddariad i gwsmeriaid heb adolygiad.

**Gwybodaeth.** Mae tasgau defnyddiol yn cynnwys troi tocyn a ddatryswyd yn erthygl ddrafft, ailysgrifennu erthygl mewn iaith syml, awgrymu teitlau a thagiau, a dod o hyd i ddyblygion. Mae tasgau peryglus yn cynnwys cyhoeddi drafftiau heb wiriad technegol, a dibynnu ar y model i wybod yr atgyweiriad cywir.

**Newidiadau.** Mae tasgau defnyddiol yn cynnwys gwirio disgrifiad newid am wybodaeth goll, crynhoi cais tynnu mawr, awgrymu achosion prawf, a rhestru ffactorau risg o newidiadau tebyg yn y gorffennol. Mae tasgau peryglus yn cynnwys cymeradwyo newid neu raddio ei risg fel "isel" ar air y model yn unig.

**Cod a sgriptiau.** Gall modelau ddrafftio sgriptiau, ymholiadau a chyfluniad. Mae Wikipedia yn disgrifio cynhyrchu cod mewn ystyr ehangach. Gall cod a gynhyrchir gynnwys gwallau, namau diogelwch, neu gwestiynau trwyddedu. Trinwch ef fel cod nad ymddiriedir ynddo: adolygwch ef, profwch ef, a'i redeg trwy'r biblinell. Gweler Pwnc 3.4 — Galluogi Newid a Phwnc 4.2 — Rheoli Asedau Meddalwedd.

**Cofnodion ac archwilio.** Cadwch gofnod o sut y defnyddiwyd AI: yr anogwr, y ffynonellau a roddwyd, yr allbwn, pwy a'i hadolygodd, a beth a newidiodd. Mae Wikipedia yn disgrifio llwybrau archwilio. Mae hyn yn cefnogi dysgu ac atebolrwydd.

**Sut mae'r lensys yn ffitio.** AI cynhyrchiol yw un o'r ffurfiau mwyaf gweladwy ar y lens AI. Mae arfer ystwyth yn awgrymu treialon byr gydag adborth gan y bobl sy'n gwneud y gwaith. Gall awtomeiddio redeg y drafftiau i mewn i offer, gyda phyrth adolygu. Mae dadansoddeg yn dangos pa ddefnyddiau sy'n arbed amser a pha rai sy'n achosi ail-weithio.

## Arferion gorau

1. **Rhowch y cofnod iddo a dywedwch am ddefnyddio hwnnw yn unig.** Gludwch neu adferwch y llinell amser, y tocyn, neu'r newid gwirioneddol, a chyfarwyddwch y model i ddefnyddio'r testun a gyflenwyd yn unig. Dywedwch wrtho am ysgrifennu "heb ei nodi" pan fo gwybodaeth ar goll.
2. **Gofynnwch am ddyfyniadau a chyfeiriadau.** Gofynnwch i'r model ddyfynnu'r llinellau neu'r erthyglau a ddefnyddiodd, fel y gall unigolyn wirio pob honiad yn gyflym.
3. **Gwahanwch ffeithiau oddi wrth ddyfaliad.** Gofynnwch am ffeithiau a gymerwyd o'r cofnod yn gyntaf, a damcaniaethau wedi'u labelu'n glir yn ail. Peidiwch â gadael i ddamcaniaethau ymddangos fel canfyddiadau.
4. **Cadwch berchennog dynol.** Mae'r unigolyn sy'n anfon y diweddariad, yn cyhoeddi'r erthygl, neu'n cymeradwyo'r newid yn berchen ar y cynnwys, beth bynnag a ddrafftiodd y model. Gwnewch hynny'n eglur yn y broses.
5. **Peidiwch ag anfon allbwn heb ei adolygu y tu allan.** Mae diweddariadau statws i gwsmeriaid, rheoleiddwyr neu'r cyhoedd angen adolygiad a chymeradwyaeth ddynol. Mae drafftiau mewnol yn risg is ond angen eu gwirio o hyd.
6. **Diogelwch y data.** Defnyddiwch offer sydd wedi'u cymeradwyo ar gyfer sensitifrwydd y cynnwys. Tynnwch gyfrinachau a data personol lle gallwch, a pheidiwch byth â gludo cymwysterau.
7. **Gwiriwch rifau, enwau ac amseroedd.** Dyma lle mae ffugio'n dangos fwyaf. Cymharwch bob ffigur yn y drafft â'r ffynhonnell.
8. **Profwch gydag achosion go iawn.** Rhedwch y dull ar ddigwyddiadau a thocynnau yn y gorffennol lle rydych yn gwybod y gwir, a nodwch ble mae'n methu. Rhannwch y canfyddiadau a diweddarwch eich cyfarwyddiadau.
9. **Logiwch y defnydd.** Cofnodwch fod AI wedi helpu, gyda'r ffynonellau a'r adolygydd. Tracwch gywiriadau i ddysgu pa dasgau sy'n addas iddo.
10. **Adolygwch ac ymddeolwch.** Adolygwch pa ddefnyddiau sy'n arbed amser a pha rai sy'n achosi ail-weithio. Stopiwch y rhai nad ydynt yn helpu.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa dasgau ysgrifennu a darllen yn ein gwaith digwyddiadau a newid sy'n cymryd yr amser mwyaf, a pha rai sy'n risg isel?**
Gwnewch restr. Disgwyliwch linellau amser, diweddariadau statws, drafftiau adolygu, a disgrifiadau newid. Didolwch yn ôl risg. Dilynwch trwy ddewis un dasg risg isel i roi cynnig arni gydag AI.

**Beth fyddai angen i ni ei wirio mewn crynodeb digwyddiad a ysgrifennwyd gan AI cyn i ni ymddiried ynddo?**
Meddyliwch am amseroedd, achosion ac effaith. Disgwyliwch gytundeb bod angen gwirio amseroedd ac achosion. Dilynwch trwy ysgrifennu rhestr wirio fer.

**Pa wybodaeth na ddylai fynd i offeryn AI byth, a sut ydym yn gwneud hynny'n hawdd ei ddilyn?**
Rhestrwch gyfrinachau, data personol a manylion diogelwch. Disgwyliwch ddryswch ynghylch beth sy'n cyfrif. Dilynwch trwy gytuno ar reol syml ac offeryn diogel ar gyfer y gweddill.

**Sut y byddem yn gwybod pe bai crynodebau neu ddrafftiau AI yn gwneud ein sylfaen wybodaeth yn waeth?**
Meddyliwch am gamau anghywir a gwallau mynych. Disgwyliwch "ni fyddem". Dilynwch trwy samplu erthyglau â chymorth AI am gywirdeb bob mis.

**Pryd y byddem yn gadael i AI awgrymu risg newid, a phwy sy'n penderfynu?**
Trafodwch. Disgwyliwch ofal ynghylch cymeradwyo a chysur gydag anogwyr am wybodaeth goll. Dilynwch trwy gytuno y caiff AI awgrymu cwestiynau a newidiadau tebyg yn y gorffennol, a bod unigolyn yn graddio'r risg.

**Pwy yn ein tîm sy'n dda am wirio allbwn AI, a sut y gallwn ledaenu'r sgil honno?**
Mae gwirio yn sgil. Disgwyliwch ychydig o bobl hyderus. Dilynwch trwy redeg ymarfer byr lle mae'r tîm yn gwirio drafft diffygiol gyda'i gilydd.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm technoleg gweithrediadau rheilffordd genedlaethol yn rhedeg systemau cymorth signalau. Ar ôl pob digwyddiad mawr, mae peiriannydd yn treulio hanner diwrnod yn ysgrifennu adolygiad o logiau sgwrs, graffiau monitro a nodiadau tocynnau. Mae adolygiadau'n hwyr, ac roedd rhai diweddar yn denau.

Mae arweinydd y tîm yn treialu cynorthwyydd AI cynhyrchiol, wedi'i letya o dan gontract y rheilffordd gyda gwerthwr nad yw'n cadw nac yn hyfforddi ar fewnbynnau, ar gyfer drafft cyntaf adolygiadau. Ar gyfer pob digwyddiad, mae'r peiriannydd yn allforio'r log sgwrs a hanes y tocyn, yn tynnu enwau staff, ac yn rhoi'r cyfarwyddiadau hyn i'r cynorthwyydd: defnyddiwch y testun a gyflenwyd yn unig; cynhyrchwch linell amser gyda phob cofnod yn dyfynnu'r llinell ffynhonnell; rhestrwch effaith, fel y'i datgenir; rhestrwch beth a helpodd a beth a arafodd yr ymateb; nodwch unrhyw beth nad yw yn y testun fel "heb ei nodi"; a rhowch ddamcaniaethau mewn adran ar wahân wedi'i labelu felly.

Yn y prawf cyntaf, ar ddigwyddiad yn y gorffennol, mae llinell amser y drafft yn gywir ac eithrio ei bod yn rhoi amser ailgychwyn o 02:15, pan ddywed y sgwrs "tua chwarter wedi, dwi'n meddwl" ac mae'r tocyn yn dweud 02:22; mae'r peiriannydd yn ei gywiro. Mae'r drafft hefyd yn rhestru fel achos "switsh rhwydwaith diffygiol", sy'n ymddangos yn y sgwrs fel dyfaliad a wrthbrofwyd yn ddiweddarach; symudodd yr adolygiad ef i ddamcaniaethau, fel y cyfarwyddwyd, ond ni nododd y gwrthbrofi. Mae'r peiriannydd yn trwsio'r ddau ac yn anfon y drafft at y tîm mewn dwy awr yn lle pedair.

Ar ôl deg digwyddiad, mae'r tîm yn amcangyfrif bod drafftiau cyntaf yn cymryd tua thraean cyhyd. Maent yn ychwanegu rheol bod y peiriannydd yn gwirio pob amser ac achos yn erbyn y ffynhonnell, a bod adolygiadau'n cofnodi bod AI wedi drafftio'r fersiwn gyntaf. Maent hefyd yn penderfynu peidio â defnyddio AI i raddio risg mewn cofnodion newid eto.

Beth sy'n newid: mae adolygiadau'n cyrraedd o fewn diwrnod ac yn cynnwys mwy o fanylion ar yr hyn a helpodd. Beth sy'n parhau'n anodd: weithiau mae peirianwyr yn derbyn geiriad y model o achosion y mae'r dystiolaeth yn eu cefnogi'n wan yn unig; weithiau mae manylion cyfrinachol yn aros mewn sgyrsiau a allforiwyd; ac mae un peiriannydd yn poeni y bydd sgiliau drafftio'n pylu. Mae'r arweinydd yn trefnu sesiwn chwarterol lle mae peirianwyr yn ysgrifennu un adolygiad heb AI, ac yn cymharu.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Defnyddiwch AI i ddrafftio disgrifiadau newid, syniadau prawf a nodiadau rhyddhau o'ch cofnodion eich hun, ac adolygwch hwy. Trinwch god a gynhyrchir fel cod nad ymddiriedir ynddo: profwch a sganiwch ef fel unrhyw newid arall.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch AI i grynhoi edafedd a drafftio diweddariadau, adolygiadau ac erthyglau, gyda'r ffynonellau ynghlwm. Gwiriwch bob amser, enw ac achos, a byddwch yn berchen ar yr hyn a gyhoeddwch.

### Arweinyddiaeth a llywodraethu

Gosodwch reolau ar ddata a chymeradwyaethau, ac ariennwch offer sy'n eu bodloni. Gofynnwch am dystiolaeth o amser a arbedwyd a gwallau a ddaliwyd. Peidiwch â derbyn allbwn AI fel cofnod o ffaith.

### Cwsmeriaid a defnyddwyr

Dylech dderbyn diweddariadau y mae unigolyn wedi'u gwirio. Os gwelwch wall yn yr hyn a gewch, dywedwch wrth y darparwr. Gofynnwch sut y defnyddir AI yn yr hyn a ddywedir wrthych.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Treialwch un dasg ysgrifennu ar y tro gyda'r bobl sy'n ei gwneud, casglwch adborth, a gwellwch gyfarwyddiadau. Cadwch adolygiadau'n fyr ac yn fynych. Rhybudd: peidiwch â gadael i ddrafft cyflymach fyrhau'r myfyrio; mae gwerth adolygiad yn y dysgu.

### AI

Seiliwch bob defnydd ar y cofnod, dangoswch ffynonellau, a chadwch unigolyn yn atebol. Profwch ar achosion yn y gorffennol a chofnodwch ddefnydd AI. Rhybudd: mae testun rhugl yn cuddio tystiolaeth wan; gofynnwch i'r model labelu hyder a ffynonellau, a gwiriwch hwy. Gweler Pwnc 5.7 — Sgiliau ac Anogwyr AI.

### Awtomeiddio

Awtomeiddiwch y plymwaith: allforiwch y cofnod, tynnwch gyfrinachau, galwch y model, atodwch y drafft i'r tocyn, a hysbyswch yr adolygydd. Cadwch borth adolygu cyn cyhoeddi. Rhybudd: mae piblinell sy'n cyhoeddi drafftiau'n awtomatig yn lledaenu gwallau; mynnwch gymeradwyaeth. Gweler Pwnc 6.2 — Awtomeiddio a Chydlynu Llif Gwaith.

### Dadansoddeg

Tracwch amser i gynhyrchu adolygiadau, golygiadau a wnaed i ddrafftiau, gwallau a ganfuwyd, a defnydd yn ôl math o dasg. Rhybudd: mae cyfrif drafftiau a gynhyrchwyd yn gwobrwyo cyfaint, ac mae amser a arbedwyd yn aml yn cael ei amcangyfrif; samplwch ansawdd dogfennau terfynol. Gweler y llyfr *Service Management Metrics* a Phwnc 7.3 — Mesur ac Adrodd.

## Dulliau methu cyffredin

- **Ffeithiau o'r cof.** Mae'r model yn dyfeisio amseroedd ac achosion. Cyflenwch y cofnod a mynnwch ddyfyniadau.
- **Diweddariadau allanol heb eu hadolygu.** Mae gwybodaeth anghywir yn cyrraedd cwsmeriaid. Mynnwch gymeradwyaeth ddynol.
- **Cyfrinachau mewn anogwyr.** Mae data sensitif yn gollwng. Defnyddiwch offer cymeradwy a thynnwch gyfrinachau.
- **Stampio rwber.** Mae adolygwyr yn derbyn drafftiau heb wirio. Darparwch restr wirio a samplwch adolygiadau.
- **Mewnbynnau sy'n trin y model.** Mae testun gelyniaethus yn newid ymddygiad. Trinwch fewnbynnau fel rhai nad ymddiriedir ynddynt.
- **Defnyddio AI i raddio risg.** Ymddiriedir mewn "isel" rhugl. Defnyddiwch AI i ofyn cwestiynau, a gadewch i bobl raddio risg.
- **Erydu sgiliau.** Mae pobl yn rhoi'r gorau i ysgrifennu a gwirio. Cadwch ymarfer ac ansawdd adolygu.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Defnydd | Arbrofion unigol | Awgrymiadau a rennir | Patrymau cymeradwy ar gyfer digwyddiadau, gwybodaeth a newidiadau | Patrymau'n cael eu hadolygu yn ôl canlyniadau | Patrymau wedi'u hintegreiddio i offer gyda llywodraethu |
| Seilio a gwirio | Cof y model | Rhai ffynonellau wedi'u dangos | Ffynonellau wedi'u dyfynnu a ffeithiau wedi'u gwirio yn erbyn cofnodion | Gwallau'n cael eu holrhain a'u bwydo'n ôl | Gwirio'n rhannol awtomataidd, gyda llofnodi dynol |
| Diogelu data | Aneglur | Ymwybyddiaeth | Offer cymeradwy a rheolau | Cydymffurfiaeth yn cael ei monitro | Rheolaethau wedi'u hadeiladu i mewn i offer a phiblinellau |
| Atebolrwydd | Aneglur | Anffurfiol | Perchnogion a enwyd ar gyfer pob allbwn | Perchnogion ac adolygiadau'n cael eu harchwilio | Atebolrwydd wedi'i integreiddio ar draws gwasanaethau |

## Rhestr wirio

- [ ] Rydym wedi dewis ychydig o dasgau ysgrifennu risg isel ar gyfer AI cynhyrchiol.
- [ ] Rydym yn rhoi'r cofnod i'r model ac yn dweud wrtho am ddefnyddio hwnnw yn unig.
- [ ] Mae allbynnau'n dyfynnu eu ffynonellau ac yn gwahanu ffeithiau oddi wrth ddamcaniaethau.
- [ ] Mae unigolyn a enwyd yn berchen ar bob allbwn ac yn ei adolygu cyn iddo gael ei rannu.
- [ ] Rydym yn defnyddio offer cymeradwy ar gyfer cynnwys sensitif ac yn tynnu cyfrinachau.
- [ ] Rydym yn gwirio amseroedd, enwau, rhifau ac achosion yn erbyn y ffynhonnell.
- [ ] Rydym yn cofnodi pan helpodd AI a phwy a adolygodd.
- [ ] Nid ydym yn gadael i AI gymeradwyo newidiadau na datgan gwraidd achosion ar ei ben ei hun.

## Anogwyr AI

**Adeiladu llinell amser digwyddiad gyda ffynonellau.**

```text
Isod mae log sgwrs a hanes tocyn digwyddiad, gyda'r enwau wedi'u tynnu: [gludwch].
Cynhyrchwch dabl llinell amser gyda'r colofnau: amser (yn union fel yr ysgrifennwyd; ysgrifennwch "heb ei nodi" os nad oes amser), digwyddiad, a'r llinell ffynhonnell a ddyfynnwyd. Yna rhestrwch effaith fel y datgenir yn y testun, ac adran ar wahân "Damcaniaethau a grybwyllwyd" gyda phwy a'i cododd a ph'un a ddengys y testun iddi gael ei chadarnhau neu ei diystyru. Peidiwch ag ychwanegu dim nad yw yn y testun.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio erthygl wybodaeth o docyn a ddatryswyd.**

```text
Dyma docyn a ddatryswyd gyda nodiadau, gyda data personol wedi'i dynnu: [gludwch]. Dyma erthyglau presennol ar bynciau cysylltiedig: [gludwch deitlau a chrynodebau].
Drafftiwch erthygl newydd gyda theitl mewn geiriau syml, symptom, camau, a sut i wirio ei fod wedi gweithio. Defnyddiwch y tocyn yn unig. Nodwch wybodaeth ar goll gyda [ar goll], a rhestrwch erthyglau presennol a allai ddyblygu hon.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Gwirio disgrifiad newid.**

```text
Dyma ddisgrifiad newid: [gludwch]. Ein heitemau gofynnol: [rhestrwch].
Rhestrwch pa eitemau gofynnol sydd ar goll neu'n aneglur, rhestrwch gwestiynau y dylai adolygydd eu gofyn, a rhestrwch unrhyw ddatganiadau yn y disgrifiad sy'n edrych yn anghyson â'i gilydd. Peidiwch â graddio'r risg nac argymell cymeradwyo.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [postmortem](../../../../skills/postmortem/SKILL.md): defnyddiwch i strwythuro adolygiadau digwyddiadau y mae AI yn eu drafftio a phobl yn berchen arnynt.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): defnyddiwch i ysgrifennu cyfarwyddiadau clir, wedi'u seilio.
- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i droi gweithdrefnau yn llawlyfrau gweithredu sy'n cael eu gwirio a'u profi.
- [release-notes](../../../../skills/release-notes/SKILL.md): defnyddiwch i ddrafftio nodiadau rhyddhau i'w hadolygu.
- [change-request](../../../../skills/change-request/SKILL.md): defnyddiwch i ddiffinio beth mae disgrifiad newid da yn ei gynnwys.

## Prif ffynonellau

- NIST, AI Risk Management Framework: strwythur ar gyfer nodi a rheoli risgiau defnydd AI.
- OWASP, guidance on risks for applications built on large language models (owasp.org): cyngor cymunedol ar chwistrellu anogwr a risgiau cysylltiedig.
- Wikipedia, "Generative AI" a "Hallucination (artificial intelligence)": trosolygon o'r dechnoleg a'i phrif ddull methu.
- Wikipedia, "Automation bias": pam mae pobl yn gorymddiried mewn awgrymiadau awtomataidd.

## Cyfeiriadau

1. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Automatic summarization — Wikipedia — https://en.wikipedia.org/wiki/Automatic_summarization
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
8. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
12. OWASP — OWASP Foundation — https://owasp.org
