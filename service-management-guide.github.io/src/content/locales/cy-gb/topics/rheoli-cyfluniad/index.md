# Rheoli Cyfluniad

**Mae rheoli cyfluniad yn cadw darlun cywir, defnyddiadwy o'r cydrannau sy'n ffurfio eich gwasanaethau a sut maent yn cysylltu, fel y gallwch farnu effaith newid neu fethiant; mae timau modern yn cael y darlun hwnnw o seilwaith fel cod a darganfod, gyda chronfa ddata cyfluniad fel golwg arno, nid rhestr a gedwir â llaw.**

## Pam mae hyn yn bwysig

Pan fydd gweinydd cronfa ddata yn methu am 2 y bore, y cwestiwn cyntaf yw beth sy'n dibynnu arno. Pan fydd rhywun yn cynnig newid i reol rhwydwaith, y cwestiwn cyntaf yw beth y gallai ei dorri. Pan fydd archwilydd yn gofyn sut mae gwasanaeth wedi'i adeiladu, y cwestiwn cyntaf yw ble mae'r gwir wedi'i ysgrifennu. Mae'r tri angen yr un peth: darlun cyfredol, y gellir ymddiried ynddo, o'r hyn sy'n bodoli a sut mae'r rhannau'n perthyn.

Mae llawer o sefydliadau'n ceisio ei ddarparu gyda chronfa ddata rheoli cyfluniad (CMDB): cronfa ddata o eitemau cyfluniad a pherthnasoedd. Mae llawer hefyd yn canfod ei bod yn troi'n fynwent o gofnodion hen, a gedwir â llaw, nad oes neb yn ymddiried ynddynt. Mae'r cofnodion wedi dyddio o fewn wythnosau, oherwydd bod yr eiddo go iawn yn newid yn gyflymach nag y gall neb ddiweddaru ffurflen. Daw'r CMDB yn arteffact cydymffurfio, nid yn offeryn.

Mae dau syniad yn achub yr arfer. Yn gyntaf, trinwch ddiffiniad y seilwaith fel cod mewn rheoli fersiynau, fel mai ffynhonnell y gwirionedd yw'r peth sy'n creu'r system, nid disgrifiad ohoni. Yn ail, poblogwch y darlun yn awtomatig o ddarganfod ac o'r cod hwnnw, a'i ddefnyddio ar gyfer cwestiynau penodol: effaith newid, cwmpas digwyddiad, perchnogaeth. Mae'r pwnc hwn yn esbonio'r arfer a'r maglau. Mae'n cysylltu â rheoli asedau (Pwnc 4.1 — Rheoli Asedau), galluogi newid (Pwnc 3.4 — Galluogi Newid), seilwaith fel cod (Pwnc 6.3 — Seilwaith fel Cod a GitOps), a'r catalog gwasanaethau (Pwnc 3.8 — Rheoli'r Catalog Gwasanaethau).

## Cysyniadau craidd

**Rheoli cyfluniad.** Yn ystyr ITIL, yr arfer o sicrhau bod gwybodaeth gywir a dibynadwy am gyfluniad gwasanaethau, a'r eitemau cyfluniad sy'n eu cefnogi, ar gael pryd a lle y mae ei hangen. Mewn peirianneg, mae "rheoli cyfluniad" hefyd yn cyfeirio at y ddisgyblaeth o gynnal systemau mewn cyflwr hysbys, cyson. Mae Wikipedia yn disgrifio rheoli cyfluniad yn yr ystyr ehangach. Mae'r canllaw hwn yn defnyddio'r ddau ystyr ac yn dweud pa un.

**Eitem gyfluniad (CI).** Unrhyw gydran y mae angen ei rheoli er mwyn darparu gwasanaeth TG. Mae Wikipedia yn disgrifio eitemau cyfluniad. Mae enghreifftiau'n cynnwys gweinyddion, cymwysiadau, cronfeydd data, dyfeisiau rhwydwaith, adnoddau cwmwl, tystysgrifau, ac weithiau dogfennau a chontractau. Mae gan bob CI briodoleddau (math, fersiwn, perchennog, statws) a pherthnasoedd â CIs eraill.

**Cronfa ddata rheoli cyfluniad (CMDB).** Storfa o CIs, eu priodoleddau a'u perthnasoedd. Mae Wikipedia yn disgrifio'r CMDB. Nid taenlen o asedau yw CMDB: mae ei werth yn y perthnasoedd, sy'n caniatáu cwestiynau fel "pa wasanaethau sy'n defnyddio'r gronfa ddata hon?".

**System rheoli cyfluniad (CMS).** Y set ehangach o offer a data sy'n rhoi golwg ar gyfluniad ar draws ffynonellau. Mae ITIL yn disgrifio CMS sy'n ffedereiddio data o sawl lle, nid un gronfa ddata. Mae Wikipedia yn disgrifio systemau cronfeydd data ffederal fel un ffordd o gyfuno ffynonellau heb eu copïo.

**Map gwasanaeth.** Golwg sy'n dangos sut mae gwasanaeth yn dibynnu ar ei gydrannau. Mae map gwasanaeth technegol yn cysylltu cymwysiadau, cronfeydd data, gweinyddion a rhwydweithiau. Mae golwg busnes yn cysylltu gwasanaethau â'r bobl a'r prosesau y maent yn eu cefnogi. Defnyddir mapiau mewn digwyddiadau a newidiadau. Gweler Pwnc 3.8 — Rheoli'r Catalog Gwasanaethau.

**Llinellau sylfaen a drifft.** Cyfluniad hysbys, cymeradwy ar bwynt mewn amser yw llinell sylfaen. Drifft yw'r gwahaniaeth rhwng y llinell sylfaen a'r hyn sy'n rhedeg mewn gwirionedd, yn aml o newidiadau â llaw. Mae Wikipedia yn disgrifio llinellau sylfaen mewn rheoli cyfluniad. Mae canfod a chywiro drifft yn cadw systemau'n gyson ac yn ddiogel.

**Seilwaith fel cod (IaC).** Diffinio seilwaith, fel gweinyddion, rhwydweithiau ac adnoddau cwmwl, mewn ffeiliau testun sy'n cael eu storio mewn rheoli fersiynau a'u cymhwyso gan offer. Mae Wikipedia yn disgrifio seilwaith fel cod. Mae offer fel Terraform, Ansible a maniffestau Kubernetes yn mynegi cyflwr dymunol, ac mae'r offeryn yn gwneud i realiti gyd-fynd. Y cod yw'r ddogfennaeth a'r mecanwaith. Gweler Pwnc 6.3 — Seilwaith fel Cod a GitOps.

**Idempotens a chyflwr dymunol.** Gellir rhedeg offer cyfluniad da dro ar ôl tro gyda'r un canlyniad: maent yn gwneud dim ond yr hyn sydd ei angen i gyrraedd y cyflwr a ddisgrifir. Mae Wikipedia yn disgrifio idempotens. Mae hyn yn ei gwneud yn ddiogel ailgymhwyso cyfluniad i ganfod a thrwsio drifft.

**Ffynhonnell gwirionedd.** Y lle y mae ffaith yn awdurdodol. Ar gyfer cyfluniad dymunol, y storfa cod yw hi; ar gyfer yr hyn sy'n rhedeg mewn gwirionedd, darganfod neu gyflwr y llwyfan ei hun; ar gyfer perchnogaeth, gall fod y catalog neu gofrestr tîm. Penderfynwch y ffynhonnell ar gyfer pob math o ffaith, ac osgowch gadw'r un ffaith â llaw mewn dau le. Mae Wikipedia yn disgrifio'r syniad ffynhonnell gwirionedd unigol.

**Darganfod.** Offer sy'n sganio rhwydweithiau, cyfrifon cwmwl a llwyfannau i ddod o hyd i'r hyn sy'n bodoli a sut mae wedi'i gysylltu. Mae darganfod yn dod o hyd i'r hyn na chofnododd neb, ond mae'n cynhyrchu llawer o fanylion a rhywfaint o sŵn, ac mae angen rheolau arno ar gyfer pa eitemau i'w cadw a sut i'w henwi.

**Perthnasoedd a dadansoddi effaith.** Mae gwybod bod cymhwysiad A yn defnyddio cronfa ddata B yn gadael i chi ofyn beth sy'n cael ei effeithio os yw B yn newid neu'n methu. Mae Wikipedia yn disgrifio dadansoddi effaith newid a graffiau dibyniaeth. Mae cronfeydd data graff, a ddisgrifir ar Wikipedia, yn un ffordd o storio a holi perthnasoedd. Dim ond cystal â'r perthnasoedd a gofnodir yw dadansoddi effaith.

**Ansawdd data.** Cywirdeb, cyflawnrwydd ac amseroldeb sy'n penderfynu gwerth y data. Diffiniwch pa briodoleddau sy'n bwysig a pha mor ffres y mae'n rhaid iddynt fod. Mae set lai o ddata cywir yn fwy defnyddiol na set fawr o ddata annibynadwy. Gweler Pwnc 7.2 — Sylfeini a Llywodraethu Data.

**Cwmpas.** Peidiwch â cheisio cofnodi popeth. Dewiswch y CIs a'r perthnasoedd y mae eu hangen arnoch ar gyfer eich penderfyniadau: gwasanaethau critigol, eu prif gydrannau, a'u perchnogaeth. Ehangwch wrth i werth gael ei ddangos.

**Perchnogaeth.** Mae gan bob CI neu grŵp berchennog sy'n atebol amdano ac am y data amdano. Heb berchnogaeth, mae data'n dirywio.

**Cynwysyddion a chwmwl.** Mae llwyfannau modern yn creu ac yn dinistrio adnoddau'n gyson. Mae cofnod o gynhwysydd unigol yn ddiystyr awr yn ddiweddarach. Tracwch ar y lefel sy'n bwysig, fel y gwasanaeth a'r defnyddiad, a defnyddiwch labeli a thagiau i gysylltu adnoddau â pherchnogion a gwasanaethau.

**Sut mae'r lensys yn ffitio.** Mae rheoli cyfluniad yn cefnogi cyflawni ystwyth a pharhaus trwy wneud amgylcheddau'n ailadroddadwy. Gall AI helpu i ddarganfod perthnasoedd, awgrymu cysylltiadau coll, ac ateb cwestiynau am effaith, o dan adolygiad. Mae awtomeiddio yn cymhwyso cyfluniad ac yn cadw'r darlun yn gyfredol. Mae dadansoddeg yn defnyddio'r data i ddod o hyd i risgiau a chostau.

## Arferion gorau

1. **Dechreuwch â'r cwestiynau y mae angen i chi eu hateb.** Rhestrwch y penderfyniadau y bydd y data'n eu cefnogi, fel effaith newid, cwmpas digwyddiad, a pherchnogaeth. Cofnodwch yr hyn sy'n eu hateb yn unig.
2. **Trinwch god fel ffynhonnell gwirionedd ar gyfer cyflwr dymunol.** Diffiniwch seilwaith a chyfluniad mewn rheoli fersiynau, adolygwch newidiadau, a'u cymhwyso gydag offer. Osgowch newidiadau â llaw ar systemau byw.
3. **Poblogwch y darlun yn awtomatig.** Defnyddiwch ddata darganfod a llwyfan i fwydo'r CMDB neu'r map gwasanaeth, a chysonwch â'r cod. Cyfyngwch fewnbynnu â llaw i ffeithiau na ellir eu darganfod, fel perchnogaeth.
4. **Diffiniwch ffynhonnell pob ffaith.** Ar gyfer pob priodoledd, penderfynwch ble mae'n awdurdodol, a ble y caniateir copïau. Dangoswch y ffynhonnell ac amser y diweddariad diwethaf.
5. **Mapiwch wasanaethau critigol yn gyntaf.** Adeiladwch fapiau gwasanaeth ar gyfer y gwasanaethau pwysicaf, gan gynnwys dibyniaethau ar gyflenwyr a llwyfannau a rennir. Profwch hwy yn erbyn digwyddiad neu newid go iawn.
6. **Canfyddwch a thrwsiwch ddrifft.** Cymharwch gyflwr gwirioneddol â'r cyflwr dymunol ar amserlen, a rhybuddiwch ar wahaniaethau. Trinwch ddrifft mynych fel signal am broses neu fynediad.
7. **Enwch berchennog ar gyfer pob eitem ac ar gyfer ansawdd data.** Dangoswch berchnogion yn y cofnodion. Adolygwch gofnodion hen a rhai amddifad yn rheolaidd.
8. **Cysylltwch gyfluniad â chofnodion newid a digwyddiad.** Gwnewch hi'n hawdd gweld o newid pa CIs y mae'n eu cyffwrdd ac o ddigwyddiad pa CIs sy'n gysylltiedig. Gwiriwch fod y dolenni'n cael eu defnyddio.
9. **Defnyddiwch labeli a thagiau'n gyson.** Mewn amgylcheddau cwmwl, mynnwch dagiau ar gyfer perchennog, gwasanaeth ac amgylchedd wrth eu creu, a'u gorfodi yn y biblinell.
10. **Mesurwch ddefnyddioldeb.** Tracwch pa mor aml y defnyddir y data mewn newidiadau a digwyddiadau, a pha mor aml yr oedd yn anghywir. Trwsiwch yr achosion, ac ymddeolwch ddata nad oes neb yn ei ddefnyddio.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa benderfyniadau rydym eisiau i ddata cyfluniad eu cefnogi, ac a yw'n eu cefnogi heddiw?**
Dechreuwch o ddefnydd. Disgwyliwch atebion fel effaith newid a chwmpas digwyddiad. Rhowch gynnig arno ar newid diweddar. Dilynwch trwy ddewis un defnydd a phrofi'r data yn ei erbyn.

**Ble mae gwir ddisgrifiad ein seilwaith: mewn cod, mewn cronfa ddata, ym mhennau pobl?**
Gofynnwch am y ffynhonnell gwirionedd ar gyfer tair system. Disgwyliwch sawl ateb. Dilynwch trwy ddewis un system a symud ei diffiniad i reoli fersiynau.

**Pryd y gwnaeth y CMDB ein camarwain ddiwethaf, a pham?**
Gofynnwch am achos go iawn. Disgwyliwch berthnasoedd hen neu goll. Chwiliwch am yr achos, fel mewnbynnu â llaw. Dilynwch trwy ddewis un ffynhonnell ddata i'w hawtomeiddio.

**Sut rydym yn canfod pan fydd rhywun yn newid system fyw â llaw?**
Mae hyn yn profi canfod drifft. Disgwyliwch "nid ydym". Dilynwch trwy gytuno ar sgan ar un system a rheol am yr hyn sy'n digwydd nesaf.

**Pwy sy'n berchen ar bob un o'n heitemau cyfluniad critigol, a sut y byddem yn dod o hyd i'r perchennog am 3 y bore?**
Gofynnwch ble cofnodir perchnogaeth. Rhowch gynnig arni gydag ychydig o eitemau. Dilynwch trwy ychwanegu tagiau perchennog a'u gwirio.

**Sut y gallai AI helpu i gadw ein darlun cyfluniad yn gywir, a beth fydden ni'n ei wirio â llaw?**
Gall AI awgrymu perthnasoedd a sylwi ar anomaleddau. Gall hefyd ddyfeisio dolenni. Gofynnwch pwy sy'n berchen ar y defnydd a sut y canfyddir gwallau. Dilynwch trwy gymharu perthnasoedd a awgrymwyd gan AI â map a wiriwyd â llaw ar gyfer un gwasanaeth.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm digidol rheilffordd genedlaethol yn rhedeg llwyfan tocynnau a wneir o tua 60 o wasanaethau ar draws dau ddarparwr cwmwl a hen ganolfan ddata ar y safle. Mae'r CMDB yn dal 40,000 o gofnodion, y rhan fwyaf wedi'u mewnbynnu â llaw, ac mae'r tîm gweithrediadau yn dweud ei fod yn anghywir tua thraean o'r amser. Yn ystod ymyriad diweddar, stopiodd ciw negeseuon a fethodd werthiant tocynnau; ni sylweddolodd neb fod y cynllun teyrngarwch yn ei ddefnyddio hefyd nes i gwsmeriaid gwyno.

Mae arweinydd y llwyfan yn gosod nod culach: ar gyfer y deg gwasanaeth mwyaf critigol, rhaid i'r map gwasanaeth fod yn ddigon cywir i ateb "beth sy'n cael ei effeithio os yw'r gydran hon yn methu?" o fewn pum munud. Mae'r tîm yn diffinio pob un o'r deg gwasanaeth mewn cod, gyda pherchnogion a dibyniaethau wedi'u datgan fel tagiau yn y diffiniadau. Mae swydd nosol yn darllen y llwyfan cwmwl a'r storfa cod, yn adeiladu'r map, ac yn nodi gwahaniaethau rhwng y ddau. Mae'r ganolfan ddata wedi'i chwmpasu gan ddarganfod, a chaiff ei allbwn ei baru â'r un enwau gwasanaeth gydag adolygiad â llaw ar gyfer eitemau newydd.

O fewn chwarter, mae'r map ar gyfer y deg gwasanaeth yn ddibynadwy. Ar y digwyddiad nesaf, mae cronfa ddata sy'n methu yn y gwasanaeth taliadau yn dangos y pum gwasanaeth sy'n darllen ohoni, ac mae'r tîm yn hysbysu eu perchnogion mewn munudau. Mae adroddiad drifft yn canfod 14 o newidiadau â llaw mewn cynhyrchu, tri ohonynt yn rheolau grŵp diogelwch a agorwyd yn ystod hen ddigwyddiad ac na chawsant eu cau byth.

Beth sy'n newid: mae digwyddiadau a newidiadau bellach yn dechrau gyda map, ac mae'r hen CMDB wedi'i ymddeol ar gyfer y gwasanaethau hyn. Beth sy'n parhau'n anodd: nid yw'r 50 gwasanaeth arall wedi'u cwmpasu eto, ac mae'r timau sy'n berchen arnynt yn gweld ychydig o reswm i wneud y gwaith; mae darganfod y ganolfan ddata yn dal i gynhyrchu sŵn; ac ni ellir darganfod rhai dibyniaethau, fel API cyflenwr, a chânt eu mewnbynnu â llaw. Mae arweinydd y llwyfan yn dewis y deg gwasanaeth nesaf yn ôl hanes digwyddiadau ac yn negodi amser gyda'u perchnogion.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Diffiniwch eich seilwaith a'ch cyfluniad mewn cod, tagiwch adnoddau gyda pherchnogion a gwasanaethau, ac osgowch newidiadau â llaw i systemau byw. Cadwch wybodaeth dibyniaethau'n gyfredol fel rhan o'ch dyluniad.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch y map mewn digwyddiadau a newidiadau, ac adroddwch ble mae'n anghywir. Canfyddwch ddrifft, caewch newidiadau dros dro, a chadwch ddata perchnogaeth yn gyfredol.

### Arweinyddiaeth a llywodraethu

Gofynnwch am dystiolaeth bod y data'n cael ei ddefnyddio ac yn gywir, nid am gyfrif cofnodion. Ariennwch yr awtomeiddio a'r ddisgyblaeth perchnogaeth. Cefnogwch y rheol bod newidiadau byw yn mynd trwy god.

### Cwsmeriaid a defnyddwyr

Rydych yn elwa pan fydd darparwyr yn gwybod beth sy'n dibynnu ar beth: diagnosis cyflymach a llai o syrpreisys o newidiadau. Gofynnwch a oes gan y gwasanaethau rydych yn dibynnu arnynt berchnogion a mapiau effaith.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Adeiladwch y darlun mewn camau bach, gan ddechrau gyda'r gwasanaethau mwyaf critigol, a'i wella gyda'r bobl sy'n ei ddefnyddio. Adolygwch ei ddefnyddioldeb ar ôl digwyddiadau. Rhybudd: mae prosiect CMDB mewn un cam mawr yn ailadrodd hen fethiannau; dechreuwch â chwestiynau ac ychydig o wasanaethau.

### AI

Gall AI awgrymu perthnasoedd o logiau ac olrhain, ateb cwestiynau effaith mewn iaith naturiol, a dod o hyd i allgleifion, gyda pherchennog a dilysu dynol. Rhybudd: gall AI ddyfalu dibyniaethau nad ydynt yn bodoli neu golli rhai go iawn; dilyswch yn erbyn digwyddiadau hysbys. Gweler Pwnc 5.2 — AIOps.

### Awtomeiddio

Awtomeiddiwch ddarganfod, cysoni, canfod drifft, a gorfodi tagio, gyda logiau ac adolygiad o eithriadau. Rhybudd: gall mewnforio awtomatig lifo'r gronfa ddata â chofnodion gwerth isel; hidlwch yn ôl yr hyn sy'n cefnogi penderfyniadau. Gweler Pwnc 6.3 — Seilwaith fel Cod a GitOps.

### Dadansoddeg

Edrychwch ar gyflawnrwydd data ar gyfer gwasanaethau critigol, cywirdeb a ganfuwyd mewn digwyddiadau, cyfrifon drifft, amser i ddod o hyd i'r perchennog, a defnydd o'r data mewn newidiadau. Rhybudd: mae cyfrif cofnodion neu feysydd wedi'u llenwi yn annog cyfaint dros gywirdeb; mesurwch pa mor aml y helpodd y data a pha mor aml y camarweiniodd. Gweler y llyfr *Service Management Metrics* a Phwnc 7.2 — Sylfeini a Llywodraethu Data.

## Dulliau methu cyffredin

- **CMDB wedi'i lenwi â llaw.** Mae data'n dirywio'n gyflym. Poblogwch trwy ddarganfod a chod.
- **Cofnodi popeth.** Mae sŵn yn cuddio gwerth. Cyfyngwch y cwmpas i benderfyniadau.
- **Dwy ffynhonnell ar gyfer yr un ffaith.** Maent yn anghytuno. Datganwch un ffynhonnell.
- **Dim perchnogaeth.** Nid oes neb yn cywiro gwallau. Neilltuwch berchnogion.
- **Newidiadau â llaw i systemau byw.** Mae drifft yn tyfu. Newidiwch trwy god a chanfyddwch ddrifft.
- **Perthnasoedd ar goll.** Mae dadansoddi effaith yn methu. Mapiwch wasanaethau critigol yn gyntaf.
- **Tracio adnoddau byrhoedlog.** Mae cofnodion yn hen ar unwaith. Tracwch ar lefel gwasanaeth, gyda thagiau.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Cwmpas | Aneglur | Prif weinyddion wedi'u rhestru | Gwasanaethau critigol a dibyniaethau wedi'u mapio | Cwmpas yn cael ei ymestyn yn ôl gwerth a digwyddiadau | Cwmpas eang ar draws y stad a chyflenwyr |
| Ffynhonnell gwirionedd | Taenlenni a chof | Rhywfaint o seilwaith mewn cod | Cyflwr dymunol mewn cod, cyflwr gwirioneddol trwy ddarganfod | Cysoni'n awtomataidd ac yn cael ei fonitro | Un golwg gydlynol a fwydir gan god, darganfod a llwyfannau |
| Ansawdd data | Anhysbys | Gwiriadau sampl | Priodoleddau a ffresni wedi'u diffinio | Cywirdeb yn cael ei fesur mewn digwyddiadau a newidiadau | Ansawdd yn cael ei sicrhau'n barhaus gydag adolygiad dynol |
| Defnydd | Anaml y'i defnyddir | Wedi'i ddefnyddio mewn rhai digwyddiadau | Wedi'i ddefnyddio mewn newidiadau a digwyddiadau fel mater o drefn | Defnydd a gwerth yn cael eu holrhain | Data'n gyrru risg, cost a chynllunio ar draws gwasanaethau |

## Rhestr wirio

- [ ] Rydym wedi rhestru'r cwestiynau y mae'n rhaid i'n data cyfluniad eu hateb.
- [ ] Mae cyflwr dymunol systemau allweddol yn byw mewn rheoli fersiynau.
- [ ] Mae darganfod yn bwydo ein mapiau gwasanaeth ac yn cael ei gysoni â chod.
- [ ] Mae gan bob ffaith ffynhonnell gwirionedd ddiffiniedig.
- [ ] Mae gan wasanaethau critigol ddibyniaethau wedi'u mapio, wedi'u profi yn erbyn digwyddiadau go iawn.
- [ ] Rydym yn canfod ac yn cywiro drifft cyfluniad.
- [ ] Mae gan bob eitem gyfluniad neu grŵp berchennog.
- [ ] Rydym yn mesur pa mor aml y mae'r data'n helpu a pha mor aml y mae'n camarwain.

## Anogwyr AI

**Dod o hyd i ddibyniaethau coll o ddigwyddiad.**

```text
Dyma linell amser digwyddiad, gyda'r gwasanaethau yr effeithiwyd arnynt: [gludwch]. Dyma ein map gwasanaeth ar gyfer y gydran sy'n methu: [gludwch].
Rhestrwch wasanaethau yr effeithiwyd arnynt nad yw'r map yn eu dangos fel rhai sy'n dibynnu ar y gydran sy'n methu, ac ar gyfer pob un rhowch gwestiwn i wirio'r cyswllt. Peidiwch â dehongli dibyniaethau heb dystiolaeth yn y llinell amser.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Cymharu cyflwr dymunol a gwirioneddol.**

```text
Dyma'r cyfluniad dymunol o'n cod: [gludwch]. Dyma'r hyn a ganfu darganfod yn rhedeg: [gludwch].
Rhestrwch wahaniaethau yn ôl math (ar goll, ychwanegol, wedi newid), ac ar gyfer pob un gwestiwn am pam ei fod yn wahanol. Peidiwch ag argymell atgyweiriadau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio rheolau tagiau perchnogaeth.**

```text
Defnyddir ein hadnoddau cwmwl gan y timau a'r gwasanaethau hyn: [rhestrwch]. Tagiau rydym eu heisiau ar bob adnodd: [rhestrwch].
Drafftiwch safon tagio o dan un dudalen gyda rheolau, gwerthoedd a ganiateir, a sut i'w gorfodi yn y biblinell. Peidiwch ag enwi offer penodol oni fyddaf yn eu rhestru.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): defnyddiwch i ddylunio a chynnal cofnodion cyfluniad a pherthnasoedd.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): defnyddiwch i olrhain dibyniaethau mewn proses neu system.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): defnyddiwch i dynnu mapiau gwasanaeth mewn testun.
- [data-quality](../../../../skills/data-quality/SKILL.md): defnyddiwch i ddiffinio a gwirio ansawdd data cyfluniad.

## Prif ffynonellau

- PeopleCert, ITIL certification pages: disgrifiad y perchennog o'r arfer rheoli cyfluniad gwasanaeth.
- Kief Morris, *Infrastructure as Code* (2il argraffiad, 2020): canllaw ymarferol i ddiffinio a rheoli seilwaith mewn cod.
- Wikipedia, "Configuration management" a "Configuration management database": trosolygon o'r syniadau.
- Wikipedia, "Infrastructure as code": y dull peirianneg o gyflwr dymunol.

## Cyfeiriadau

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
