# Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer

**Mae awtomeiddio llawlyfrau gweithredu yn troi gweithdrefn ddogfennedig, a brofwyd, yn god y gall unigolyn neu rybudd ei sbarduno, ac mae awto-adfer yn gadael i signal monitro ei sbarduno heb unigolyn; mae'r ddau'n ddiogel dim ond ar gyfer gweithredoedd wedi'u deall yn dda, gwrthdroadwy gyda therfynau, logiau, stop â llaw, a pherchennog sy'n adolygu pa mor aml y maent yn tanio.**

## Pam mae hyn yn bwysig

Mae gan waith ar alwad siâp. Mae rhybudd yn tanio. Mae peiriannydd blinedig yn agor llawlyfr gweithredu, yn dilyn cyfres o gamau, yn ailgychwyn rhywbeth, yn gwirio ei fod wedi gweithio, ac yn mynd yn ôl i gysgu. Wythnos yn ddiweddarach mae'r un rhybudd yn tanio, ac mae'r un camau'n cael eu dilyn. Ar ôl y degfed tro, mae rhywun yn dweud: pam mae unigolyn yn gwneud hyn?

Maent yn iawn. Mae ailadrodd atgyweiriad hysbys â llaw yn araf, yn dueddol o wallau, ac yn gyrydol i'r bobl sy'n ei wneud. Mae'r un camau, wedi'u hysgrifennu fel cod, yn rhedeg mewn eiliadau, yn yr un ffordd bob tro, ac yn gadael cofnod. Mae Wikipedia yn disgrifio llawlyfrau gweithredu fel casgliadau o weithdrefnau arferol y mae gweithredwr yn eu cyflawni. Gwneud iddynt fod yn weithredadwy, ac mewn rhai achosion gwneud iddynt redeg ar eu pen eu hunain, yw'r cam o ddogfennaeth i awtomeiddio.

Mae'r cam hefyd yn berygl. Mae llawlyfr gweithredu a ddarllenir gan berson yn mynd drwy farn ddynol ar bob cam. Nid yw cod yn gwneud hynny. Gall ailgychwyn awtomatig sy'n anghywir ailadrodd am byth, neu ddod â gwasanaeth iach i lawr, neu guddio problem ddyfnach nes ei bod yn llawer gwaeth. Mae llawer o doriadau wedi cael eu hymestyn neu eu hachosi gan adfer bwriadol dda a wnaeth y peth anghywir yn gyflym. Mae Wikipedia yn disgrifio cyfrifiadura ymreolaethol, y nod hirsefydlog o systemau sy'n rheoli eu hunain, a'r wers ymarferol yw bod angen terfynau ar ymreolaeth.

Mae'r pwnc hwn yn disgrifio sut i symud o ddogfen i sgript i weithred awtomatig yn ofalus. Mae'n adeiladu ar reoli gwybodaeth (Pwnc 3.9 — Rheoli Gwybodaeth), monitro (Pwnc 3.10 — Monitro a Rheoli Hysbysiadau), rheoli digwyddiadau (Pwnc 3.2 — Rheoli Digwyddiadau), a strategaeth awtomeiddio (Pwnc 6.1 — Strategaeth Awtomeiddio). Mae'n cysylltu â gweithrediadau AI (Pwnc 5.2 — AIOps) ac asiantiaid sy'n gweithredu (Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol).

## Cysyniadau craidd

**Llawlyfr gweithredu.** Gweithdrefn ddogfennedig ar gyfer tasg neu sefyllfa weithredol benodol, gylchol. Mae Wikipedia yn disgrifio llawlyfrau gweithredu. Mae gan lawlyfr gweithredu da sbardun, camau wedi'u rhifo, canlyniadau disgwyliedig, cam gwirio, a llwybr dwysáu. Gweler Pwnc 3.9 — Rheoli Gwybodaeth.

**Awtomeiddio llawlyfrau gweithredu.** Gweithredu llawlyfr gweithredu fel cod sy'n cyflawni rhai o'i gamau neu bob un, fel arfer wedi'i sbarduno gan unigolyn o gonsol neu orchymyn sgwrs, neu gan hysbysiad system. Mae'n cadw rhesymeg y llawlyfr gweithredu, gyda budd cyflymder, cysondeb a chofnodion.

**Awto-adfer.** Gweithredu cywirol awtomatig mewn ymateb i rybudd neu hysbysiad, heb unigolyn yn ei gychwyn. Mae enghreifftiau'n cynnwys ailgychwyn proses a fethodd, clirio cyfeiriadur dros dro llawn, graddio cronfa weithwyr allan, neu fethdroi i gyfrifiadur wrth gefn. Mae erthygl Wikipedia ar gyfrifiadura ymreolaethol yn disgrifio systemau sy'n canfod ac yn cywiro eu namau eu hunain fel nod. Yn ymarferol, mae awto-adfer yn cwmpasu set gul o namau wedi'u deall yn dda.

**Dilyniant.** Mae timau fel arfer yn symud trwy gamau: llawlyfr gweithredu ysgrifenedig; llawlyfr gweithredu gyda sgriptiau y mae unigolyn yn eu rhedeg; llawlyfr gweithredu y mae unigolyn yn ei sbarduno ag un gorchymyn, gyda'r sgript yn casglu gwiriadau yn gyntaf; rhybudd sy'n cynnig y weithred ac yn gofyn am gymeradwyaeth; a rhybudd sy'n rhedeg y weithred ar ei ben ei hun o fewn terfynau. Mae angen tystiolaeth o'r cam blaenorol ar bob cam. Peidiwch â hepgor camau ar gyfer gweithredoedd â chanlyniadau go iawn.

**Beth sy'n gymwys ar gyfer gweithredu awtomatig.** Nam sy'n gyffredin, y mae ei achos a'i atgyweiriad wedi'u deall yn dda, y mae ei atgyweiriad yn ddiogel ac yn wrthdroadwy, ac y mae ei symptom yn ei adnabod yn ddibynadwy. Enghreifftiau yw gweithiwr di-gyflwr sydd wedi hongian neu gyfeiriadur log sy'n llenwi. Mae ymgeiswyr gwael yn cynnwys unrhyw beth sy'n dileu data, yn newid mynediad, neu'n dibynnu ar farn am effaith busnes.

**Amodau diogelwch.** Cyn gweithredu, gwiriwch fod y sefyllfa'n cyfateb mewn gwirionedd: mae'r rhybudd yn gyfredol, mae'r gwasanaeth yn y cyflwr disgwyliedig, nid oes defnyddio na chynnal a chadw ar y gweill, ac nid yw'r weithred newydd redeg. Ar ôl gweithredu, gwiriwch y canlyniad. Mae Wikipedia yn disgrifio rhediad sych, ymarfer sy'n dangos beth fyddai'n digwydd heb ei wneud; mae'n fodd defnyddiol ar gyfer awtomeiddiadau newydd.

**Terfynau.** Capiwch sawl gwaith y gall gweithred redeg mewn cyfnod, sawl enghraifft y gall eu cyffwrdd ar unwaith, ac am ba mor hir y gall redeg. Mae Wikipedia yn disgrifio cyfyngu cyfradd. Mae terfyn yn troi rhedeg di-hid yn ddigwyddiad wedi'i gyfyngu, a dylai mynd dros derfyn alw unigolyn.

**Torwyr cylched ac ôl-ddiffodd.** Os bydd gweithred awtomataidd yn methu dro ar ôl tro neu'n tanio dro ar ôl tro, stopiwch a dwysewch yn lle ailgeisio am byth. Mae Wikipedia yn disgrifio patrwm y torrwr cylched, lle mae methiannau mynych yn baglu switsh sy'n stopio ymdrechion pellach am gyfnod. Ychwanegwch seibiau rhwng ailgeisiadau a hysteresis, a ddisgrifir ar Wikipedia, i atal fflapio rhwng cyflyrau.

**Idempotens.** Gweithred sy'n ddiogel i'w hailadrodd. Mae Wikipedia yn disgrifio idempotens. Ni ddylai ailgychwyn gwasanaeth pan fo eisoes yn ailgychwyn achosi ail storm ailgychwyn. Dyluniwch weithredoedd sy'n gwirio cyflwr yn gyntaf.

**Gwarchodwyr ac adfer adeiledig.** Mae llwyfannau'n darparu eu mecanweithiau adfer eu hunain: goruchwylwyr prosesau sy'n ailgychwyn gwasanaethau a chwalodd, llwyfannau cynwysyddion sy'n disodli enghreifftiau sy'n methu, ac amseryddion gwarchod, a ddisgrifir ar Wikipedia, sy'n ailosod system a hongiodd. Ffafriwch fecanweithiau adeiledig i sgriptiau pwrpasol lle maent yn ffitio, a deallwch beth maent yn ei wneud.

**Methdroi a graddio.** Mae methdroi awtomatig i gyfrifiadur wrth gefn a graddio capasiti awtomatig yn ffurfiau ar awto-adfer y mae llwyfannau'n aml yn eu darparu. Mae Wikipedia yn disgrifio methdroi ac awto-raddio. Mae angen profion a therfynau arnynt hefyd, gan y gallant wneud pethau'n waeth: gall methdroi a sbardunwyd gan fân glitsh amharu ar wasanaeth iach.

**Cuddio problemau.** Gall awtomeiddio sy'n trwsio nam yn dawel guddio achos sy'n gwaethygu. Os caiff gwasanaeth ei ailgychwyn bob awr, mae'r ailgychwyn yn symptom o broblem sydd angen ei thrwsio. Tracwch pa mor aml y mae pob awtomeiddio yn tanio a thriniwch gyfradd gynyddol fel problem i'w hymchwilio. Gweler Pwnc 3.3 — Rheoli Problemau.

**Logiau, archwilio a hysbysu.** Dylai pob gweithred awtomatig gofnodi beth a'i sbardunodd, beth a wiriodd, beth a wnaeth, a'r canlyniad, a dylai hysbysu'r tîm sy'n berchen arni. Mae awtomeiddio tawel yn erydu dealltwriaeth o'r system. Mae Wikipedia yn disgrifio llwybrau archwilio yn gyffredinol.

**Profi.** Profwch awtomeiddiadau yn erbyn namau realistig mewn amgylchedd diogel, gan gynnwys achosion lle dylai'r gwiriadau stopio'r weithred. Mae Wikipedia yn disgrifio peirianneg anrhefn, yr arfer o chwistrellu methiannau'n fwriadol, a all hefyd brofi a yw adfer yn ymddwyn yn gywir. Gweler Pwnc 3.12 — Rheoli Parhad Gwasanaeth.

**Perchnogaeth ac adolygu.** Mae gan bob awtomeiddio berchennog, mae'n byw mewn rheoli fersiynau gydag adolygiad, ac yn ymddangos mewn cofrestr. Adolygwch yn rheolaidd pa mor aml y mae'n tanio, a lwyddodd, ac a ddylid trwsio'r achos sylfaenol.

**Mynediad a diogelwch.** Mae gan offer adfer bŵer dros gynhyrchu. Rhowch ei hunaniaeth ei hun iddo gyda'r caniatâd cul y mae pob gweithred ei angen, ac amddiffynnwch y cod a'r sbardunau rhag ymyrryd. Gweler Pwnc 3.13 — Rheoli Diogelwch Gwybodaeth.

**Sgiliau dynol.** Os bydd awtomeiddio yn trin namau arferol, gall pobl golli'r teimlad am y system. Cadwch lawlyfrau gweithredu'n ddarllenadwy, ymarferwch weithredu â llaw, a chynhwyswch awtomeiddiadau mewn diwrnodau gêm. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

**Sut mae'r lensys yn ffitio.** Y lens awtomeiddio yw'r pwnc hwn ar bwynt gweithrediadau. Mae arfer ystwyth yn awgrymu symud i fyny'r dilyniant mewn camau bach gydag adolygiad ar ôl pob digwyddiad. Gall AI awgrymu gweithredoedd a dewis llawlyfrau gweithredu, dan y terfynau a ddisgrifir yma. Mae dadansoddeg yn mesur cyfraddau tanio, llwyddiant a phroblemau a guddiwyd.

## Arferion gorau

1. **Dechreuwch â llawlyfr gweithredu da.** Ysgrifennwch, profwch a defnyddiwch y weithdrefn â llaw yn gyntaf. Dim ond torri'n gyflymach y mae awtomeiddio gweithdrefn nad yw'n gweithio.
2. **Dewiswch ymgeiswyr yn ofalus.** Chwiliwch am atgyweiriadau mynych, wedi'u deall yn dda, diogel, gwrthdroadwy gyda signal dibynadwy. Trefnwch yn ôl amser ar alwad a arbedir ac yn ôl risg.
3. **Dringwch yr ysgol.** Symudwch o sgript i sbardun un gorchymyn, i weithred a gynigir gyda chymeradwyaeth, i weithred awtomatig dim ond wrth i dystiolaeth gronni. Cofnodwch y penderfyniad ar bob cam.
4. **Gwiriwch cyn ac ar ôl.** Gwiriwch fod y sefyllfa'n cyfateb, nad oes gweithgaredd sy'n gwrthdaro ar y gweill, a bod y weithred wedi gweithio. Stopiwch a dwysewch os bydd unrhyw wiriad yn methu.
5. **Gosodwch derfynau a thorrwr.** Capiwch amlder, cwmpas a hyd. Os bydd gweithred yn tanio'n rhy aml neu'n methu ddwywaith, stopiwch a galwch unigolyn.
6. **Gwnewch weithredoedd yn idempotent ac yn wrthdroadwy.** Gwiriwch gyflwr yn gyntaf, ac ysgrifennwch y ffordd yn ôl. Profwch y ddau.
7. **Logiwch, hysbyswch, a gwnewch yn weladwy.** Cofnodwch bob gweithred awtomatig, dywedwch wrth y tîm sy'n berchen arni, a dangoswch gyfraddau tanio ar ddangosfwrdd.
8. **Trwsiwch yr achos.** Cyfrifwch pa mor aml y mae pob awtomeiddio yn tanio, a chodwch broblem pan fo'r gyfradd yn uchel neu'n codi. Triniwch awtomeiddio fel pont at atgyweiriad, nid yn lle un.
9. **Profwch mewn amodau diogel.** Ymarferwch gyda namau ac achosion ymyl realistig, gan gynnwys rhai y dylid eu gwrthod. Cynhwyswch awtomeiddiadau mewn diwrnodau gêm.
10. **Byddwch yn berchen ac adolygwch.** Enwch berchennog, cadwch god mewn rheoli fersiynau gydag adolygiad, cofrestrwch bob awtomeiddio, ac adolygwch yn chwarterol pa rai i'w cadw, eu newid neu eu hymddeol.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa rybuddion rydym yn eu trwsio yn yr un ffordd bob tro, a pha mor hir y mae pob un yn ei gymryd?**
Defnyddiwch ddata digwyddiadau a rhybuddion. Disgwyliwch lond llaw sy'n cyfrif am y rhan fwyaf o dudalennau. Dilynwch trwy ddewis un a gwirio bod ei lawlyfr gweithredu yn gywir.

**Beth allai fynd o'i le pe bai'r atgyweiriad hwn yn rhedeg pan na ddylai fod wedi gwneud?**
Dychmygwch y sbardun anghywir neu'r targed anghywir. Disgwyliwch ychydig o achosion annymunol. Dilynwch trwy ychwanegu gwiriad neu derfyn ar gyfer pob un.

**Sut y byddem yn gwybod bod yr awtomeiddio yn cuddio problem sy'n tyfu?**
Gofynnwch beth fyddem yn ei weld. Disgwyliwch "dim byd". Dilynwch trwy gytuno i gyfrif tanio a gosod trothwy ar gyfer codi problem.

**Beth yw'r difrod mwyaf y gallai un rhediad ei wneud, a sut y byddem yn ei stopio?**
Enwch y cwmpas. Disgwyliwch ansicrwydd. Dilynwch trwy osod cap ac ymarfer stop.

**Pryd y gwnaethom y dasg hon â llaw ddiwethaf, ac a allai pawb ar alwad ei gwneud o hyd?**
Gofynnwch am y tro diwethaf. Disgwyliwch fod hynny amser maith yn ôl. Dilynwch trwy drefnu ymarfer.

**Ble gallai AI gynnig neu ddewis adferiad, a beth sy'n rhaid i unigolyn ei gymeradwyo o hyd?**
Gall AI gyfateb symptomau i lawlyfrau gweithredu ac awgrymu gweithredoedd. Gofynnwch pa weithredoedd sydd angen cymeradwyaeth a phwy sy'n penderfynu. Dilynwch trwy ddewis treial lle mae AI yn cynnig ac unigolyn yn cymeradwyo, gyda mesurau o ba mor aml y bu'r awgrym yn gywir.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm gwybodaeth i deithwyr rheilffordd genedlaethol yn rhedeg arddangosfeydd mewn 400 o orsafoedd, a fwydir gan wasanaeth data. Tua dwywaith yr wythnos, mae'r prosesydd porthiant yn hongian ac mae arddangosfeydd yn rhewi ar hen amseroedd. Caiff y peiriannydd ar alwad ei dudalennu, mae'n mewngofnodi, yn gwirio bod y broses wedi hongian, yn ei hailgychwyn, ac yn cadarnhau diweddariadau. Mae'n cymryd tua 20 munud, gan amlaf yn ystod y nos.

Mae'r tîm yn ysgrifennu'r llawlyfr gweithredu, gan ei fireinio ar ôl ei roi ar brawf ar ddau ddigwyddiad: cadarnhau'r rhybudd, gwirio nad oes defnyddio ar y gweill, gwirio nad yw'r broses wedi ysgrifennu i'w log ers pum munud, ailgychwyn, aros dwy funud, gwirio bod stamp amser yr allbwn yn gyfredol, a nodi'r digwyddiad. Maent yn ei droi'n sgript gyda modd rhediad sych, ac mae peiriannydd yn ei sbarduno ag un gorchymyn sgwrs am fis. Mae'n llwyddo bob tro.

Yna maent yn ei gysylltu â'r rhybudd mewn modd cynnig: mae'r rhybudd yn postio canfyddiadau'r sgript a botwm sy'n gofyn i'r peiriannydd ar alwad gymeradwyo. Ar ôl mis, roedd pob cymeradwyaeth yn gywir, gan gymryd llai na dwy funud. Mae'r tîm yn cytuno i adael iddo redeg yn awtomatig dan amodau llym: dim ond pan fo'r gwiriadau'n pasio, ddwywaith ar y mwyaf mewn awr, byth yn ystod defnyddio, a gyda thudalen i unigolyn os nad yw'r ail ailgychwyn yn ei drwsio. Mae'n logio pob rhediad ac yn postio i sianel y tîm.

Mae'r awtomeiddio yn tanio 19 gwaith yn y ddau fis cyntaf. Mae adolygiad yn dangos bod yr hongian yn digwydd yn amlach ar ôl diweddariad hwyr y nos gan gyflenwr data penodol, na sylwodd y tîm arno pan oeddent yn trin pob tudalen ar ei phen ei hun. Maent yn codi problem gyda'r cyflenwr. Mewn un rhediad, mae'r torrwr yn baglu ar ôl dau ailgychwyn a fethodd ac yn tudalennu peiriannydd, sy'n canfod bod y ddisg yn llawn, achos nad oedd y llawlyfr gweithredu yn ei gwmpasu.

Beth sy'n newid: mae peirianwyr yn cysgu trwy'r rhan fwyaf o'r hysbysiadau hyn, ac mae arddangosfeydd yn adfer mewn llai na thair munud. Beth sy'n parhau'n anodd: nid yw'r cyflenwr wedi trwsio'r fformat data eto; mae'r tîm wedi sylwi nad yw peirianwyr newydd erioed wedi gwneud y weithdrefn â llaw ac mae'n poeni am eu sgil; ac ychwanegwyd y cam ychwanegol o wirio'r ddisg dim ond ar ôl y syndod. Mae'r arweinydd yn trefnu ymarfer llaw chwarterol ac yn ychwanegu'r gwiriad disg at y sgript.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Adeiladwch wasanaethau sy'n hawdd eu hadfer: pwyntiau terfyn iechyd, ailgychwyn diogel, gweithrediadau idempotent, a logiau clir. Ysgrifennwch lawlyfrau gweithredu gyda'r cod, a thrwsiwch achosion y mae awtomeiddio yn eu dinoethi.

### Timau gwasanaeth a gweithrediadau

Byddwch yn berchen ar y llawlyfrau gweithredu a'r awtomeiddiadau: ysgrifennwch, profwch, cyfyngwch, logiwch ac adolygwch. Cadwch sgiliau â llaw yn fyw, a thriniwch danio mynych fel problem i'w thrwsio.

### Arweinyddiaeth a llywodraethu

Cefnogwch symud i fyny'r ysgol gyda thystiolaeth, a gofynnwch am gyfraddau tanio a gwiriadau problemau a guddiwyd. Ariennwch yr amser i drwsio achosion. Byddwch yn wyliadwrus o honiadau am systemau hunan-iachaol.

### Cwsmeriaid a defnyddwyr

Dylech weld adferiad cyflymach a llai o doriadau gweladwy. Os na weithiodd atgyweiriad awtomatig neu os achosodd broblem, dywedwch wrth y darparwr fel y gellir cywiro'r rheol.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Gwellwch adfer ar ôl pob digwyddiad: mireiniwch y llawlyfr gweithredu, ychwanegwch wiriad, neu cymerwch gam i fyny'r ysgol. Cadwch newidiadau'n fach ac wedi'u hadolygu. Rhybudd: peidiwch ag awtomeiddio mewn swmp ar ôl noson wael; cymerwch un atgyweiriad ar y tro gyda phrofion.

### AI

Gall AI gyfateb rhybuddion i lawlyfrau gweithredu, awgrymu camau, a drafftio llawlyfrau gweithredu newydd o nodiadau digwyddiad, gyda chymeradwyaeth ar gyfer unrhyw beth sy'n gweithredu. Enwch berchennog a mesurwch gywirdeb awgrymiadau. Rhybudd: gall AI sy'n dewis gweithred o rybudd anarferol ddewis yn anghywir; cyfyngwch ef i restr o weithredoedd cymeradwy. Gweler Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol.

### Awtomeiddio

Y pwnc hwn yw'r lens awtomeiddio mewn gweithrediadau: amodau diogel, terfynau, torwyr, idempotens, logiau ac adolygu. Rhybudd: gall awto-adfer guddio problemau a'u gwneud yn waeth; cyfrifwch danio, capiwch rediadau, a dwyswch ar fethiant. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

### Dadansoddeg

Tracwch gyfradd tanio fesul awtomeiddio, cyfradd llwyddiant, amser i adfer, nifer y tudalennau a osgowyd, baglu torwyr, a phroblemau a godwyd o batrymau. Rhybudd: mae tudalennau a osgowyd yn hawdd eu chwyddo a gallant guddio cyfraddau tanio cynyddol; tracwch y ddau gyda'i gilydd. Gweler Pwnc 7.4 — Arsylwadwyedd a Thelemetreg a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Awtomeiddio llawlyfr gweithredu heb ei brofi.** Mae'r atgyweiriad yn anghywir ar gyflymder. Profwch â llaw yn gyntaf.
- **Dim terfynau.** Mae dolen neu gamdanio yn ailadrodd. Capiwch rediadau a defnyddiwch dorrwr.
- **Problemau cudd.** Mae ailgychwyn yn cuddio achos. Cyfrifwch danio a thrwsiwch achosion.
- **Dim gwiriadau cyn gweithredu.** Mae'r weithred yn taro system iach neu brysur. Gwiriwch amodau.
- **Awtomeiddio tawel.** Nid oes neb yn gwybod beth a wnaeth. Logiwch a hysbyswch.
- **Sgiliau'n pylu.** Ni all neb ei wneud â llaw. Ymarferwch.
- **Offer â gormod o freintiau.** Mae un cyfaddawd yn cyrraedd popeth. Defnyddiwch hunaniaethau cul.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Llawlyfrau gweithredu | Mewn pennau neu e-bost | Wedi'u hysgrifennu ar gyfer prif rybuddion | Llawlyfrau gweithredu wedi'u profi, wedi'u cysylltu â rhybuddion | Ansawdd llawlyfrau gweithredu'n cael ei adolygu ar ôl digwyddiadau | Llawlyfrau gweithredu'n cael eu cynnal fel cod ar draws gwasanaethau |
| Awtomeiddio | Dim | Sgriptiau a sbardunir gan bobl | Gweithredoedd cymeradwy, wedi'u profi gyda chynigion | Gweithredoedd dethol yn rhedeg yn awtomatig gyda therfynau | Gweithredoedd diogel yn cael eu dewis yn ôl risg gyda rheolaeth ddynol |
| Diogelwch | Dim | Logio sylfaenol | Gwiriadau, terfynau, torwyr ac ôl-dreiglo | Diogelwch yn cael ei brofi a'i archwilio | Diogelwch wedi'i adeiladu i mewn i lwyfannau a rennir |
| Dysgu | Diffodd tân | Adolygu achlysurol | Cyfraddau tanio'n cael eu holrhain ac achosion yn cael eu codi fel problemau | Ailddigwydd yn cael ei fesur a'i leihau | Dysgu'n cael ei rannu ar draws timau a chyflenwyr |

## Rhestr wirio

- [ ] Ysgrifennwyd, profwyd a defnyddiwyd y llawlyfr gweithredu â llaw cyn awtomeiddio.
- [ ] Mae gan bob awtomeiddio sbardun, rhagamodau, gwirio, a dwysáu.
- [ ] Mae gweithredoedd yn idempotent ac yn wrthdroadwy.
- [ ] Mae terfynau a thorrwr cylched yn capio amlder a chwmpas.
- [ ] Logir pob rhediad a hysbysir y tîm sy'n berchen arno.
- [ ] Rydym yn tracio pa mor aml y mae pob awtomeiddio yn tanio ac yn codi problemau o'r patrymau.
- [ ] Mae awtomeiddiadau mewn rheoli fersiynau, wedi'u hadolygu, ac wedi'u cofrestru gyda pherchnogion.
- [ ] Rydym yn ymarfer gweithredu â llaw ac yn profi awtomeiddiadau gyda namau realistig.

## Anogwyr AI

**Troi nodiadau digwyddiad yn ddrafft llawlyfr gweithredu.**

```text
Dyma nodiadau o dri digwyddiad a gafodd yr un atgyweiriad: [gludwch, data personol wedi'i dynnu].
Drafftiwch lawlyfr gweithredu gyda: sbardun, rhagamodau i'w gwirio, camau wedi'u rhifo gyda chanlyniadau disgwyliedig, gwirio, ôl-dreiglo a dwysáu. Defnyddiwch yr hyn y mae'r nodiadau'n ei ddweud yn unig; ysgrifennwch [ar goll] ar gyfer unrhyw beth nas nodir.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Dod o hyd i fylchau diogelwch mewn awtomeiddio.**

```text
Dyma ddisgrifiad o awto-adfer: sbardun, gwiriadau, gweithred a therfynau: [gludwch].
Rhestrwch pa rai o'r rhain sydd ar goll neu'n aneglur: gwiriadau rhagamod, gwirio ar ôl y weithred, terfyn cyfradd, torrwr cylched, idempotens, ôl-dreiglo, logio, hysbysu, perchennog. Dyfynnwch y testun ar gyfer pob un rydych yn ei ystyried yn bresennol. Peidiwch â thybio unrhyw un.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Adolygu data tanio.**

```text
Dyma log o pryd y taniodd pob awtomeiddio yn y mis diwethaf, gyda'r canlyniad: [gludwch].
Cyfrifwch danio fesul awtomeiddio, rhestrwch y rhai sy'n codi neu'n clystyru ar yr un adeg o'r dydd, a rhestrwch gwestiynau i ddod o hyd i achosion. Peidiwch â dyfalu achosion.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i ysgrifennu a phrofi'r weithdrefn cyn awtomeiddio.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): defnyddiwch i brofi adfer yn erbyn namau realistig.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): defnyddiwch i ddod o hyd i achosion y mae awtomeiddio yn eu cuddio.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): defnyddiwch i ddylunio trefniadau galwad cynaliadwy.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): defnyddiwch i ddiffinio rolau a dwysáu o gwmpas awtomeiddio.

## Prif ffynonellau

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), penodau ar ddileu llafur caled (toil) ac ar awtomeiddio, am ddim yn sre.google.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): pam mae awtomeiddio yn newid rôl ddynol mewn ffyrdd annisgwyl.
- Wikipedia, "Runbook" a "Autonomic computing": trosolygon o'r ddogfen a'r dyhead.
- Wikipedia, "Circuit breaker design pattern": patrwm ar gyfer stopio methiant mynych.

## Cyfeiriadau

1. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
2. Autonomic computing — Wikipedia — https://en.wikipedia.org/wiki/Autonomic_computing
3. Circuit breaker design pattern — Wikipedia — https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern
4. Watchdog timer — Wikipedia — https://en.wikipedia.org/wiki/Watchdog_timer
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
7. Failover — Wikipedia — https://en.wikipedia.org/wiki/Failover
8. Autoscaling — Wikipedia — https://en.wikipedia.org/wiki/Autoscaling
9. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
10. Hysteresis — Wikipedia — https://en.wikipedia.org/wiki/Hysteresis
11. Dry run (testing) — Wikipedia — https://en.wikipedia.org/wiki/Dry_run_(testing)
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
