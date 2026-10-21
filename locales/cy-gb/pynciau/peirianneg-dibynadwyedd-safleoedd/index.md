# Peirianneg Dibynadwyedd Safleoedd

**Mae peirianneg dibynadwyedd safleoedd (SRE) yn trin gweithrediadau fel problem beirianneg: mae'n gosod targedau dibynadwyedd mesuradwy, yn gwario cyllideb gwallau ar newid, yn cael gwared ar waith ailadroddus (toil) â meddalwedd, ac yn dysgu o fethiannau heb fai; mae'n mynegi llawer o arferion rheoli gwasanaethau mewn termau peirianneg.**

## Pam mae hyn yn bwysig

Mae gan bob gwasanaeth densiwn rhwng newid a dibynadwyedd. Mae cwsmeriaid eisiau nodweddion newydd ac maent eisiau i'r gwasanaeth weithio. Mae timau sy'n gwthio newid yn gyflym yn achosi ymyriadau, ac mae timau sy'n gwarchod sefydlogrwydd yn arafu popeth. Heb ffordd o bwyso a mesur y ddau, caiff y ddadl ei setlo gan bwy bynnag sydd uchaf ei lais, neu gan y digwyddiad diwethaf.

Mae peirianneg dibynadwyedd safleoedd yn cynnig ffordd o wneud y cyfaddawd yn eglur. Mae'n dechrau o'r syniad nad yw dibynadwyedd perffaith yn bosibl nac yn ddymunol: ni all defnyddwyr ddweud y gwahaniaeth rhwng 99.999 y cant a 99.99 y cant o argaeledd pan fydd eu dyfais a'u rhwydwaith eu hunain yn methu'n amlach na hynny, ac mae pob naw ychwanegol yn costio llawer mwy. Felly mae'r tîm yn cytuno ar darged sy'n cyfateb i'r hyn sydd ei angen ar ddefnyddwyr, yn ei fesur, ac yn defnyddio'r lle rhwng y targed a pherffeithrwydd fel cyllideb ar gyfer risg.

Dechreuodd SRE yn Google yn y 2000au cynnar ac fe'i disgrifir mewn llyfrau y mae'r cwmni wedi'u cyhoeddi ar-lein. Mae llawer o sefydliadau eraill wedi mabwysiadu rhannau ohono. I reoli gwasanaethau, ei werth yw ei fod yn rhoi fersiynau concrid, ar ffurf peirianneg, o syniadau y mae ITIL yn eu galw'n rheoli lefelau gwasanaeth, rheoli argaeledd, a gwelliant parhaus. Mae'r pwnc hwn yn esbonio'r prif syniadau ac yn rhybuddio rhag eu copïo heb y cyd-destun a'u gwnaeth yn llwyddiannus.

## Cysyniadau craidd

**Beth yw SRE.** Mae Wikipedia yn disgrifio peirianneg dibynadwyedd safleoedd fel set o egwyddorion ac arferion sy'n cymhwyso agweddau ar beirianneg meddalwedd i seilwaith a gweithrediadau TG, er mwyn creu systemau graddadwy a dibynadwy. Fel arfer mae tîm SRE yn cynnwys pobl â sgiliau meddalwedd a systemau sy'n awtomeiddio gwaith gweithrediadau ac sy'n cymryd rhan mewn dylunio ar gyfer dibynadwyedd.

**Dangosydd lefel gwasanaeth (SLI).** Mesur o ryw agwedd ar y gwasanaeth fel y mae defnyddwyr yn ei brofi, fel cyfran y ceisiadau sy'n llwyddo, neu gyfran y rhai sy'n cwblhau o fewn 300 milieiliad. Mae dangosydd da yn adlewyrchu'r hyn y mae defnyddwyr yn gofalu amdano, nid yr hyn sy'n hawdd ei fesur.

**Amcan lefel gwasanaeth (SLO).** Targed ar gyfer dangosydd dros gyfnod, er enghraifft "mae 99.9 y cant o geisiadau'n llwyddo mewn 30 diwrnod treigl". Nod mewnol yw'r amcan y cytunwyd arno rhwng y bobl sy'n rhedeg y gwasanaeth a'r bobl sy'n dibynnu arno. Mae Wikipedia yn disgrifio amcanion lefel gwasanaeth fel rhan o gytundebau lefel gwasanaeth.

**Cytundeb lefel gwasanaeth (SLA).** Contract â chanlyniadau, yn aml yn ariannol, os yw'r gwasanaeth yn disgyn o dan lefel y cytunwyd arni. Fel arfer mae SLA yn gosod targed llacach na'r SLO mewnol, fel bod gan y tîm rybudd cyn torri'r cytundeb. Gweler Pwnc 3.7 — Rheoli Lefelau Gwasanaeth.

**Cyllideb gwallau.** Y swm a ganiateir o annibynadwyedd: os yw'r amcan yn 99.9 y cant, y gyllideb yw'r 0.1 y cant sy'n weddill. Tra bo cyllideb ar ôl, gall y tîm gymryd risgiau, fel rhyddhau'n gyflymach. Pan fydd y gyllideb wedi'i gwario, mae'r tîm yn arafu newid ac yn buddsoddi mewn dibynadwyedd. Mae'r gyllideb yn gwneud y cyfaddawd rhwng dibynadwyedd a newid yn benderfyniad a rennir, mesuradwy yn hytrach na dadl.

**Gwaith ailadroddus (toil).** Gwaith sy'n llaw, yn ailadroddus, yn awtomeiddiadwy, yn dactegol, ac sy'n tyfu gyda'r gwasanaeth heb ychwanegu gwerth parhaol. Mae enghreifftiau'n cynnwys ailgychwyn gwasanaeth â llaw, prosesu'r un math o gais â llaw, a chydnabod rhybuddion swnllyd. Mae arfer SRE yn cyfyngu ar gyfran yr amser a dreulir ar waith ailadroddus, yn aml i tua hanner, ac yn gwario'r gweddill ar waith peirianneg sy'n ei leihau.

**Monitro a rhybuddio.** Dylai rhybuddion fod yn weithredadwy ac wedi'u clymu wrth symptomau y mae defnyddwyr yn eu teimlo, gydag ymateb clir. Mae rhybuddion swnllyd nad oes neb yn gweithredu arnynt yn dysgu pobl i'w hanwybyddu. Gweler Pwnc 3.10 — Monitro a Rheoli Hysbysiadau a Phwnc 7.4 — Arsylwadwyedd a Thelemetreg.

**Ymateb i ddigwyddiadau ac adolygiadau di-fai.** Mae SRE yn pwysleisio rolau clir yn ystod digwyddiadau, cyfathrebu, ac adolygiadau strwythuredig wedi hynny sy'n edrych ar y system ac yn cynhyrchu camau gweithredu wedi'u holrhain. Gweler Pwnc 3.2 — Rheoli Digwyddiadau a Phwnc 3.3 — Rheoli Problemau.

**Capasiti a pherfformiad.** Mae SRE yn cynnwys rhagweld galw, profi terfynau, a chynllunio capasiti fel nad yw twf yn achosi methiant. Gweler Pwnc 3.11 — Argaeledd, Capasiti a Pherfformiad.

**Peirianneg rhyddhau a newid.** Mae rhyddhau dibynadwy, ailadroddadwy, yn aml gyda chyflwyno cynyddol ac ôl-dreiglo awtomatig, yn rhan o waith SRE. Gweler Pwnc 2.2 — Cyflawni Parhaus.

**Ymarfer methiant.** Mae peirianneg anhrefn yn chwistrellu methiannau'n fwriadol, dan reolaeth, i ddod o hyd i wendidau cyn i ddigwyddiadau go iawn wneud hynny. Mae diwrnodau gêm yn ymarfer ymateb. Gweler Pwnc 3.12 — Rheoli Parhad Gwasanaeth.

**SRE a DevOps.** Mae'r ddau yn rhannu llawer o syniadau. Disgrifiad cyffredin yw bod SRE yn un ffordd o weithredu egwyddorion DevOps, gyda set benodol o arferion fel SLOs, cyllidebau gwallau a therfynau ar waith ailadroddus. Gweler Pwnc 2.5 — DevOps.

**SRE ac ITIL.** Mae SLOs a chyllidebau gwallau yn eistedd wrth ochr rheoli lefelau gwasanaeth; mae adolygiadau di-fai yn eistedd wrth ochr rheoli problemau; mae lleihau gwaith ailadroddus yn cefnogi gwelliant parhaus. Mae SRE yn disgrifio sut y gall tîm technegol wneud gwaith o'r fath, tra bod ITIL yn disgrifio'r arferion sydd eu hangen ar sefydliad yn gyffredinol.

**Terfynau copïo.** Datblygwyd SRE mewn sefydliad peirianneg mawr iawn â graddfa a staffio penodol. Ni all tîm bach, ac nid oes angen iddo, gopïo ei strwythur. Dechreuwch gydag ychydig o syniadau: dewiswch ddangosydd sy'n canolbwyntio ar y defnyddiwr, gosodwch amcan, ac ysgrifennwch beth y byddwch yn ei wneud pan fydd y gyllideb wedi'i gwario.

**Sut mae'r lensys yn ffitio.** SRE i raddau helaeth yw ochr beirianneg y lens ystwyth ar gyfer gwasanaethau byw. Gall AI gynorthwyo â didoli rhybuddion a chrynodebau digwyddiadau, o dan adolygiad dynol. Awtomeiddio yw'r prif offeryn yn erbyn gwaith ailadroddus. Mae dadansoddeg yn cyflenwi'r SLIs a'r data ar waith ailadroddus a digwyddiadau.

## Arferion gorau

1. **Dewiswch ddangosyddion sy'n adlewyrchu profiad y defnyddiwr.** Gofynnwch beth fyddai defnyddiwr yn ei ddweud sy'n "gweithio": tudalennau sy'n llwytho, taliadau sy'n cwblhau, ffeiliau sy'n cyrraedd. Mesurwch hynny, nid defnydd CPU.
2. **Gosodwch amcan gyda'r bobl sy'n dibynnu ar y gwasanaeth.** Cytunwch ar rif sy'n cyfateb i angen go iawn, wedi'i ysgrifennu gyda'r cyfnod a sut y caiff ei fesur. Ailedrychwch arno pan fydd anghenion yn newid.
3. **Defnyddiwch gyllideb gwallau i wneud penderfyniadau.** Ysgrifennwch beth sy'n digwydd pan fydd y gyllideb bron â'i gwario, fel rhewi newidiadau peryglus, a phwy sy'n penderfynu. Cytunwch ar hyn cyn y tro cyntaf y bydd yn bwysig.
4. **Cadwch amcanion yn llymach na chytundebau.** Gosodwch eich targed mewnol fel eich bod yn sylwi ar drafferth cyn i chi dorri contract. Gweler Pwnc 3.7 — Rheoli Lefelau Gwasanaeth.
5. **Cyfrifwch a chyfyngwch waith ailadroddus.** Tracwch faint o amser sy'n mynd ar waith llaw ailadroddus, a gosodwch derfyn. Gwariwch y gweddill ar gael gwared ar y ffynonellau mwyaf.
6. **Rhybuddiwch ar symptomau, a chadwch rybuddion yn weithredadwy.** Dylai pob rhybudd ddweud beth sydd o'i le i ddefnyddwyr a beth i'w wneud. Tynnwch neu trwsiwch rybuddion nad oes neb yn gweithredu arnynt.
7. **Rhannwch alwadau yn deg ac yn gynaliadwy.** Cyfyngwch nifer y tudalennau fesul sifft, darparwch hyfforddiant a llwybr uwchgyfeirio wedi'i ddogfennu, ac adolygwch y llwyth yn rheolaidd. Gweler Pwnc 8.3 — Newid Sefydliadol a Mabwysiadu.
8. **Adolygwch ddigwyddiadau heb fai a dilynwch drwodd.** Ysgrifennwch y llinell amser, y ffactorau cyfrannol, a chamau gweithredu gyda pherchnogion a dyddiadau. Gwiriwch fod y camau wedi'u gwneud.
9. **Ymarferwch fethiant mewn amodau diogel.** Rhedwch ddiwrnodau gêm ac arbrofion anhrefn bach mewn amgylchedd llwyfannu neu gydag amlygiad cyfyngedig, gyda botwm stopio clir.
10. **Dechreuwch yn fach.** Dewiswch un gwasanaeth pwysig, diffiniwch un neu ddau SLI ac SLO, a dysgwch o'r canlyniad cyn ymestyn.

## Cwestiynau i'w trafod gyda'ch tîm

**Beth fyddai ein defnyddwyr yn ei ddweud y mae "gweithio" yn ei olygu ar gyfer y gwasanaeth hwn, ac a ydym yn ei fesur?**
Dyma'r man cychwyn ar gyfer dangosyddion. Mae timau'n aml yn mesur iechyd gweinyddion yn lle hynny. Gofynnwch am y tro diwethaf yr oedd defnyddwyr yn anhapus tra oedd ein dangosfyrddau'n wyrdd. Dilynwch trwy ddewis un dangosydd sy'n wynebu defnyddwyr i'w fesur.

**Pa mor ddibynadwy sydd angen i'r gwasanaeth hwn fod mewn gwirionedd, a phwy a benderfynodd?**
Mae targedau'n aml yn cael eu gosod trwy arfer, er enghraifft "pum naw". Gofynnwch beth mae defnyddwyr yn ei wneud pan fo'r gwasanaeth i lawr a beth mae awr o amser segur yn ei gostio. Disgwyliwch anghytundeb. Dilynwch trwy ddrafftio amcan a'i wirio gyda chwsmer.

**Beth fyddwn ni'n ei wneud pan fyddwn wedi gwario'r gyllideb gwallau, ac a fyddwn ni'n ei wneud mewn gwirionedd?**
Mae polisïau na chânt eu cymhwyso byth yn dysgu pobl i'w hanwybyddu. Gofynnwch beth ddigwyddodd y tro diwethaf y dioddefodd dibynadwyedd a pharhaodd newid. Dilynwch trwy gytuno ar ymateb bach, penodol a phwy sy'n penderfynu.

**Beth yw tair ffynhonnell fwyaf gwaith ailadroddus ein tîm, a beth fyddai ei angen i gael gwared ar bob un?**
Gofynnwch i bobl restru tasgau ailadroddus ac amcangyfrif amser. Disgwyliwch ailgychwyn â llaw, atgyweiriadau data a cheisiadau mynediad. Dilynwch trwy ddewis un eitem ac amcangyfrif y gwaith i'w hawtomeiddio, o'i gymharu â'r amser a arbedir dros flwyddyn.

**Faint o dudalennau a gafodd ein pobl ar alwad y mis diwethaf, a faint oedd angen gweithredu dynol?**
Mae hyn yn profi ansawdd rhybuddion a llwyth gwaith. Gofynnwch am y rhifau; os nad oes neb yn gwybod, mae hynny'n ganfyddiad. Dilynwch trwy ddewis y rhybudd mwyaf swnllyd i'w drwsio neu ei ddileu.

**Ymhle y gallai AI helpu gyda rhybuddion neu grynodebau digwyddiadau, a sut y byddem yn sylwi ar ei gamgymeriadau?**
Gall AI grwpio rhybuddion, drafftio crynodebau ac awgrymu camau llawlyfr gweithredu. Gall hefyd guddio signal go iawn neu ddyfeisio achos. Gofynnwch pwy sy'n berchen arno a sut y caiff ei allbwn ei wirio. Dilynwch trwy dreialu offeryn crynhoi ochr yn ochr â'r broses ddynol a chymharu.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm archif ddigidol llyfrgell genedlaethol yn rhedeg gwasanaeth chwilio ar gyfer ymchwilwyr. Mae'r tîm o chwech ar alwad bob yn ail. Mae tudalennau'n cyrraedd yn y nos tua unwaith yr wythnos, yn bennaf o rybudd gofod disg ar weinydd swp y mae rhywun yn ei glirio â llaw. Mae'r rheolwyr yn gofyn am "99.99 y cant o argaeledd" yn y cynllun blynyddol, er nad oes neb wedi mesur perfformiad cyfredol.

Mae arweinydd y tîm yn cynnig arbrawf llai. Gyda dau ymchwilydd, mae'r tîm yn diffinio un dangosydd: cyfran y ceisiadau chwilio sy'n dychwelyd canlyniadau o fewn dwy eiliad. Maent yn ei fesur am fis, ac yn canfod 99.2 y cant. Mae'r ymchwilwyr yn dweud eu bod yn sylwi ar arafwch dim ond pan fydd chwiliadau'n cymryd mwy na phum eiliad, sy'n digwydd ar tua 0.3 y cant o geisiadau, yn bennaf yn ystod ailadeiladu mynegai dros nos. Maent yn cytuno ar amcan o 99.5 y cant o fewn dwy eiliad dros 30 diwrnod, a pholisi cyllideb gwallau: os gwariwyd mwy na 75 y cant o'r gyllideb mewn cyfnod, mae'r tîm yn oedi rhyddhau nad ydynt yn frys ac yn trwsio'r achos mwyaf.

Mae'r tîm hefyd yn cyfrif gwaith ailadroddus. Mae clirio'r ddisg â llaw yn cymryd tua dwy awr y mis ac yn deffro rhywun. Maent yn awtomeiddio'r glanhau, yn ychwanegu rhybudd ar gyfer twf cyflym yn hytrach na'r ddisg lawn, ac yn ymarfer diwrnod gêm ar gyfer adfer y mynegai o gopi wrth gefn.

Beth sy'n newid: mae tudalennau nos yn gostwng, ac mae rhyddhau yn cael ei oedi unwaith yn y chwarter cyntaf pan fydd y gyllideb yn mynd yn isel, gyda'r achos wedi'i olrhain i un ymholiad araf. Beth sy'n parhau'n anodd: mae'r cynllun blynyddol yn dal i ddweud "99.99 y cant", oherwydd nad yw uwch reolwyr wedi cytuno i'w ddisodli; mae ailadeiladu'r mynegai yn dibynnu ar wasanaeth storio a redir gan adran arall; ac mae'r tîm yn ansicr a yw ymchwilwyr mewn parthau amser eraill yn profi'r gwasanaeth yn yr un ffordd. Mae'r arweinydd yn mynd â geiriad y cynllun at yr adolygiad nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Rhannwch yr amcan a'r gyllideb gyda gweithrediadau. Cynhwyswch waith dibynadwyedd yn yr ôl-groniad, rhyddhewch yn gynyddol, a gwyliwch effaith newidiadau. Pan fydd y gyllideb wedi'i gwario, ymunwch â'r ymdrech i leihau'r achos.

### Timau gwasanaeth a gweithrediadau

Diffiniwch y dangosyddion gyda defnyddwyr, cadwch rybuddion yn weithredadwy, a gwariwch eich amser ar beirianneg sy'n cael gwared ar waith ailadroddus. Dewch â llwyth galwadau a data digwyddiadau i gynllunio. Ysgrifennwch adolygiadau sy'n arwain at gamau gweithredu wedi'u holrhain.

### Arweinyddiaeth a llywodraethu

Cytunwch ar amcanion sy'n adlewyrchu angen go iawn, a chefnogwch bolisi'r gyllideb pan fydd yn gofyn am arafu newid. Ariennwch yr amser ar gyfer lleihau gwaith ailadroddus a gwaith dibynadwyedd. Peidiwch â gofyn am berffeithrwydd.

### Cwsmeriaid a defnyddwyr

Dylid gofyn i chi beth y mae "gweithio" yn ei olygu i chi a dweud wrthych beth yw'r targed. Adroddwch broblemau'n glir, a disgwyliwch glywed beth a wnaed. Os yw'r targed yn ymddangos yn anghywir ar gyfer eich anghenion, dywedwch hynny.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Mae SRE yn ychwanegu targedau dibynadwyedd mesuradwy at gyflawni a gwella parhaus. Cadwch randdeiliaid yn cymryd rhan wrth osod amcanion, ac adolygwch hwy'n rheolaidd. Rhybudd: nid yw cyllidebau gwallau yn disodli barn; mae rhai digwyddiadau, fel toriad data, yn bwysig waeth beth fo'r gyllideb.

### AI

Gall AI grwpio rhybuddion cysylltiedig, cynnig achosion tebygol, a drafftio crynodebau digwyddiadau. Mae angen perchennog ar bob defnydd ac unigolyn sy'n gyfrifol am benderfyniadau, a ffordd o gymharu awgrymiadau AI â'r hyn a ddigwyddodd mewn gwirionedd. Rhybudd: gall AI sy'n atal rhybuddion i leihau sŵn guddio methiannau go iawn; profwch ef â digwyddiadau hysbys. Gweler Pwnc 5.2 — AIOps.

### Awtomeiddio

Awtomeiddiwch waith ailadroddus: ailgychwyn, glanhau, mynediad arferol, a diagnosis ailadroddus, gyda logiau, terfynau, a ffordd o'i ddiffodd. Rhybudd: gall awtomeiddio sy'n gweithredu ar gynhyrchu wneud digwyddiad yn waeth; ychwanegwch derfynau cyfradd a stop â llaw. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

### Dadansoddeg

Defnyddiwch SLIs, cyrhaeddiad SLO, llosgi cyllideb gwallau, oriau gwaith ailadroddus, ac ansawdd rhybuddion. Rhybudd: mae amcanion a ddewiswyd oherwydd eu bod yn hawdd eu cyrraedd, neu ddangosyddion sy'n anwybyddu rhannau o brofiad y defnyddiwr, yn rhoi cysur ffug; gwiriwch hwy yn erbyn cwynion defnyddwyr. Gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Copïo rhifau gan eraill.** Mabwysiedir "pum naw" heb wybod yr angen. Penderfynwch o angen defnyddwyr a chost.
- **Dangosyddion sy'n colli'r defnyddiwr.** Mae dangosfyrddau'n wyrdd ac mae defnyddwyr yn cwyno. Mesurwch yr hyn y mae defnyddwyr yn ei brofi.
- **Polisi cyllideb nad oes neb yn ei ddilyn.** Mae newid yn parhau pan fydd y gyllideb wedi'i gwario. Cytunwch ar yr ymateb ymlaen llaw a'i gymhwyso.
- **Sŵn rhybuddion.** Mae pobl ar alwad yn anwybyddu tudalennau. Gwnewch bob rhybudd yn weithredadwy.
- **Gwaith ailadroddus fel arfer.** Nid yw'r tîm byth yn cael amser i awtomeiddio. Cyfrifwch ef a gosodwch derfyn.
- **SRE fel ailenwi gweithrediadau.** Nid yw'r arferion yn cael eu mabwysiadu. Diffiniwch ddangosyddion, amcanion a chyllidebau.
- **Diwylliant arwyr.** Mae un person yn datrys pob digwyddiad. Rhannwch wybodaeth a llawlyfrau gweithredu.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Dangosyddion ac amcanion | Dim mesurau sy'n wynebu defnyddwyr | Mesurau seilwaith yn unig | SLIs ac SLOs sy'n canolbwyntio ar y defnyddiwr ar gyfer gwasanaethau allweddol | Amcanion yn cael eu hadolygu gyda defnyddwyr a chostau | Amcanion wedi'u cydlynu ar draws gwasanaethau dibynnol |
| Cyllideb gwallau | Dim | Wedi'i thrafod | Polisi ysgrifenedig yn cael ei gymhwyso | Canlyniadau polisi yn cael eu hadolygu | Cyllidebau'n cael eu rhannu ar draws timau a phartneriaid |
| Gwaith ailadroddus | Heb ei fesur | Wedi'i nodi'n anffurfiol | Wedi'i gyfrif a'i gyfyngu | Wedi'i leihau gydag awtomeiddio wedi'i olrhain | Wedi'i leihau ar draws gwasanaethau gydag offer a rennir |
| Dysgu o ddigwyddiadau | Bai | Rhai adolygiadau | Adolygiadau di-fai gyda chamau gweithredu wedi'u holrhain | Cwblhau camau ac ailddigwyddiad yn cael eu mesur | Dysgu'n cael ei rannu ar draws y sefydliad |

## Rhestr wirio

- [ ] Mae gennym o leiaf un dangosydd sy'n wynebu defnyddwyr ar gyfer pob gwasanaeth pwysig.
- [ ] Mae gan bob un amcan y cytunwyd arno gyda'r bobl sy'n dibynnu arno.
- [ ] Rydym wedi ysgrifennu beth sy'n digwydd pan fydd y gyllideb gwallau bron â'i gwario.
- [ ] Mae ein hamcanion mewnol yn llymach na'n cytundebau.
- [ ] Rydym yn tracio gwaith ailadroddus ac mae gennym derfyn.
- [ ] Mae rhybuddion yn weithredadwy, ac mae rhai swnllyd yn cael eu trwsio neu eu tynnu.
- [ ] Mae llwyth ar alwad yn cael ei fesur ac yn gynaliadwy.
- [ ] Mae adolygiadau digwyddiadau yn ddi-fai ac mae camau gweithredu'n cael eu holrhain nes eu gwneud.

## Anogwyr AI

**Drafftio dangosyddion ymgeisiol.**

```text
Ein gwasanaeth: [disgrifiwch beth mae'n ei wneud a phwy sy'n ei ddefnyddio]. Yr hyn y mae defnyddwyr yn cwyno amdano: [rhestrwch].
Cynigiwch hyd at bum dangosydd lefel gwasanaeth ymgeisiol, pob un gyda'r hyn y mae'n ei fesur, sut y gellid ei gyfrifo o [ffynonellau data sydd ar gael], ac un ffordd y gallai gamarwain. Peidiwch â dewis amcan.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Cyfrifo llosgi cyllideb gwallau.**

```text
Ein hamcan: [er enghraifft, 99.5 y cant o geisiadau o dan ddwy eiliad dros 30 diwrnod]. Dyma gyfrifon dyddiol o ddigwyddiadau da a chyfanswm ar gyfer y cyfnod: [gludwch y data].
Cyfrifwch y cyrhaeddiad hyd yn hyn, y gyllideb gwallau a ddefnyddiwyd fel canran, a'r gyfradd losgi ddyddiol, gan ddangos pob cyfrifiad. Peidiwch â rhagfynegi y tu hwnt i'r data.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Graddio ymgeiswyr gwaith ailadroddus.**

```text
Dyma restr o dasgau ailadroddus y mae ein tîm yn eu gwneud, gyda pha mor aml a pha mor hir y mae pob un yn ei gymryd: [gludwch y rhestr].
Cyfrifwch oriau y mis ar gyfer pob un, graddiwch hwy, ac ar gyfer y pump uchaf rhestrwch un cwestiwn ynghylch a yw eu hawtomeiddio yn ddiogel. Peidiwch ag argymell offer penodol.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): defnyddiwch i gysylltu amcanion â chytundebau.
- [postmortem](../../../../skills/postmortem/SKILL.md): defnyddiwch i redeg adolygiadau di-fai gyda chamau gweithredu wedi'u holrhain.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): defnyddiwch i gynllunio arbrofion methiant diogel.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): defnyddiwch i ragweld galw a therfynau.

## Prif ffynonellau

- Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (eds.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), ar gael am ddim yn sre.google: y prif ffynhonnell ar gyfer yr arferion.
- Betsy Beyer and others (eds.), *The Site Reliability Workbook* (2018): arweiniad ymarferol ar gyfer mabwysiadu.
- Wikipedia, "Site reliability engineering": trosolwg niwtral.
- Wikipedia, "Service-level objective": cefndir ar y termau.

## Cyfeiriadau

1. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Service level indicator — Wikipedia — https://en.wikipedia.org/wiki/Service_level_indicator
4. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
5. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
6. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
