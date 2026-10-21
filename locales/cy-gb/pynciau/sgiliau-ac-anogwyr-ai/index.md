# Sgiliau ac Anogwyr AI

**Cais a roddwch i system AI yw anogwr, a set y gellir ei hailddefnyddio, wedi'i fersiynu, o gyfarwyddiadau ar gyfer un math o dasg yw sgil; mae'r ddau'n gweithio orau pan fyddant yn enwi'r dasg, yn cyflenwi'r deunydd ffynhonnell, yn dweud beth i'w wneud pan fo gwybodaeth ar goll, ac yn cael eu profi fel unrhyw gynnyrch gwaith arall.**

## Pam mae hyn yn bwysig

Mae pawb sy'n defnyddio cynorthwyydd AI yn ysgrifennu anogwyr, gan amlaf trwy brawf a chamgymeriad. Mae rhai'n cael canlyniadau rhagorol ac ni allant ddweud pam. Mae eraill yn cael atebion amwys neu anghywir ac yn penderfynu bod yr offeryn yn wael. Yn aml nid y model sy'n gwneud y gwahaniaeth ond y cais: pa mor glir y datgenir y dasg, pa ddeunydd sydd gan y cynorthwyydd, a sut mae ei ateb yn cael ei wirio.

Mewn rheoli gwasanaethau mae'r gwahaniaeth yn bwysig oherwydd bod y gwaith yn dwyn polion. Gall anogwr sy'n crynhoi digwyddiad o'r cof gynhyrchu llinell amser ddyfeisiedig. Mae anogwr sy'n gofyn am "arfer gorau" yn rhoi testun generig sy'n swnio'n iawn ac nad yw'n helpu neb. Gall anogwr a ysgrifennwyd ar frys ludo data cyfrinachol i'r offeryn anghywir. Arferion yw'r rhain, a gellir gwella arferion.

Mae sgiliau'n mynd â'r syniad gam ymhellach. Mae sgil yn pecynnu'r cyfarwyddiadau ar gyfer tasg gylchol, fel ysgrifennu llawlyfr gweithredu neu gynnal ôl-drafodaeth ddigwyddiad, mewn ffeil y gall cynorthwyydd AI ei llwytho pan ddaw'r dasg i fyny. Mae'r sgiliau yn y canllaw hwn wedi'u hysgrifennu yn fformat Claude Code: mae pob un yn ffeil `SKILL.md` gyda disgrifiad byr o pryd i'w ddefnyddio a'r arweiniad ar gyfer gwneud y gwaith. Gall timau eu copïo, eu haddasu, ac ysgrifennu eu rhai eu hunain. Mae'r pwnc hwn yn esbonio sut i ddefnyddio'r anogwyr a'r sgiliau yn y canllaw hwn, patrymau sy'n gweithio, sut i wirio canlyniadau, a sut i ysgrifennu sgiliau tîm ei hun. Mae'n adeiladu ar Bwnc 5.1 — AI mewn Rheoli Gwasanaethau a'r mesurau diogelu ym Mhwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

## Cysyniadau craidd

**Anogwr.** Y testun, ac unrhyw ddeunydd ynghlwm, a roddwch i fodel iaith mawr i gael ymateb. Mae Wikipedia yn disgrifio peirianneg anogwyr fel y broses o strwythuro cyfarwyddiadau fel bod model cynhyrchiol yn cynhyrchu'r allbwn dymunol. Mae'r model yn ymateb i batrymau yn yr anogwr; fel arfer mae anogwyr cliriach yn rhoi ymatebion gwell.

**Cyd-destun.** Popeth y gall y model ei ystyried wrth ateb: eich cyfarwyddiadau, y dogfennau a gyflenwch, a'r sgwrs hyd yma. Mae Wikipedia yn disgrifio'r ffenestr cyd-destun, sy'n cyfyngu faint y gall y model ei ystyried ar unwaith. Os nad yw rhywbeth yn y cyd-destun, gall y model lenwi'r bwlch o wybodaeth gyffredinol, a dyna lle mae gwallau'n ymgripio i mewn.

**Seilio.** Cyflenwi'r deunydd ffynhonnell a gofyn i'r model ddefnyddio hwnnw'n unig. Mae Wikipedia yn disgrifio cynhyrchu a gynyddir gan adfer, sy'n ffurf awtomataidd. Ar gyfer defnydd â llaw, gludwch y testun perthnasol a dywedwch "defnyddiwch y testun isod yn unig". Gweler Pwnc 3.9 — Rheoli Gwybodaeth.

**Anatomeg anogwr da.** Mae chwe rhan yn cwmpasu'r rhan fwyaf o anghenion:

| Rhan | Beth mae'n ei wneud | Enghraifft |
|---|---|---|
| Rôl neu gyd-destun | Gosod y sefyllfa | "Rydych yn helpu arweinydd desg gwasanaeth i baratoi adolygiad." |
| Tasg | Dweud beth i'w gynhyrchu | "Crynhowch y digwyddiad fel llinell amser." |
| Deunydd ffynhonnell | Darparu ffeithiau | Hanes y tocyn a ludwyd |
| Cyfyngiadau | Gosod terfynau | "Defnyddiwch y testun yn unig. Peidiwch â dyfalu achosion." |
| Fformat | Siapio'r allbwn | "Tabl gydag amser, digwyddiad, a ffynhonnell a ddyfynnwyd." |
| Rheol ansicrwydd | Dweud beth i'w wneud pan fo'n ansicr | "Ysgrifennwch 'heb ei nodi' a rhestrwch beth rydych yn ansicr ohono." |

**Dalfannau.** Mae anogwyr yn y canllaw hwn yn defnyddio `[cromfachau sgwâr]` i nodi beth i'w ddisodli â'ch deunydd eich hun. Mae anogwr â dalfan heb ei llenwi yn achos cyffredin o ganlyniadau gwael; darllenwch bob un cyn anfon.

**Enghreifftiau a strwythur.** Mae rhoi un neu ddwy enghraifft o'r allbwn rydych ei eisiau, a elwir yn anogwyr ychydig-ergyd (few-shot) ac a ddisgrifir ar Wikipedia, yn aml yn gwella'r canlyniad yn fwy nag esboniad ychwanegol. Mae gofyn am strwythur, fel tabl, yn gwneud gwirio'n haws.

**Gofyn am resymu.** Gall technegau sy'n gofyn i'r model weithio drwy gamau, a ddisgrifir ar Wikipedia fel anogwyr cadwyn feddwl, wella atebion ar rai problemau. Nid yw'r rhesymu gweladwy bob amser yn gyfrif ffyddlon o sut y cynhyrchwyd yr ateb, a gall hefyd gynnwys gwallau. Defnyddiwch ef i'ch helpu i wirio, nid fel prawf.

**Gwirio.** Trinwch bob allbwn fel drafft. Gwiriwch ffeithiau yn erbyn y ffynhonnell, gwiriwch gyfrifiadau, a gwiriwch fod dyfyniadau'n bodoli. Mae Wikipedia yn disgrifio rhithweledigaeth a thuedd awtomeiddio; mae'r ddau'n rhesymau i wirio. Mae anogwr sy'n gofyn i'r model ddyfynnu ei ffynonellau yn gwneud hyn yn gyflym.

**Iteru.** Yn aml nid y canlyniad cyntaf yw'r gorau. Gofynnwch am newidiadau, nodwch wallau, a mireiniwch yr anogwr. Cadwch y fersiwn a weithiodd.

**Sgil.** Yn y canllaw hwn, ffeil `SKILL.md` yw sgil sy'n dweud wrth gynorthwyydd AI sut i wneud math o dasg. Mae'n dechrau gyda phennawd byr sy'n rhoi enw'r sgil a disgrifiad o pryd i'w ddefnyddio, ac yna arweiniad: prif gydrannau, camau, a gwiriadau. Mae cynorthwyydd sy'n cefnogi sgiliau yn llwytho'r ffeil berthnasol pan fo'ch cais yn cyfateb i'r disgrifiad. Testun plaen yw sgiliau, felly gellir eu darllen, eu hadolygu, eu fersiynu a'u rhannu fel dogfennau eraill. Mae erthygl Wikipedia ar Markdown yn disgrifio'r fformat y maent yn ei ddefnyddio.

**Sgiliau yn erbyn anogwyr.** Mae anogwr ar gyfer cais unigol; mae sgil yn cipio dull ar gyfer math cylchol o dasg, fel nad ydych yn ei ailysgrifennu bob tro. Gallai sgil gynnwys sawl anogwr, rhestr wirio, a'r meini prawf ar gyfer canlyniad da. Mae'r pynciau yn y canllaw hwn yn cysylltu â sgiliau lle mae dull yn ddefnyddiol.

**Beth ddylai sgiliau ei gynnwys.** Mae sgiliau da yn nodi pryd i'w defnyddio a phryd i beidio, yn diffinio prif rannau'r allbwn, yn rhoi proses fer, yn rhestru camgymeriadau cyffredin, ac yn dweud sut i wirio'r canlyniad. Maent yn benodol ac yn gryno. Anaml y defnyddir sgil sy'n ceisio cwmpasu popeth.

**Profi sgiliau ac anogwyr.** Trinwch hwy fel cynhyrchion gwaith. Adeiladwch ychydig o achosion prawf realistig gyda chanlyniadau da hysbys, rhedwch hwy, a nodwch fethiannau. Rhedwch hwy eto pan fo'r model, yr offeryn neu'r sgil yn newid. Mae Wikipedia yn disgrifio profi atchweliad, yr arfer o ail-redeg profion ar ôl newidiadau i ddal toriadau.

**Rheoli fersiynau a pherchnogaeth.** Storiwch sgiliau mewn ystorfa, gyda pherchennog, cofnod newidiadau, ac adolygiad ar gyfer newidiadau. Mae Wikipedia yn disgrifio rheoli fersiynau. Gall sgil sy'n newid yn dawel heb adolygiad newid canlyniadau tîm heb i neb sylwi.

**Diogelwch.** Gellir ymosod ar anogwyr a sgiliau neu eu camddefnyddio. Gall cynnwys a ludwch gynnwys cyfarwyddiadau, risg y mae Wikipedia yn ei disgrifio fel chwistrellu anogwr. Gall sgil a lawrlwythir o ffynhonnell anhysbys ddweud wrth y cynorthwyydd am wneud rhywbeth niweidiol. Darllenwch sgiliau cyn eu defnyddio, a rhowch ddim ond y mynediad sydd ei angen i gynorthwywyr. Gweler Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol.

**Cyfrinachedd.** Penderfynwch beth gaiff ei ludo i ba offeryn. Gweler Pwnc 5.6 — Llywodraethu, Risg a Chydymffurfio AI.

**Sut mae'r lensys yn ffitio.** Anogwyr a sgiliau yw sut mae timau'n rhoi AI ar waith yn gyson. Mae arfer ystwyth yn awgrymu cadw llyfrgell a rennir sy'n gwella trwy ddefnydd ac adborth. Gall awtomeiddio redeg anogwyr cymeradwy mewn llifoedd gwaith. Mae dadansoddeg yn dangos pa anogwyr a sgiliau a ddefnyddir ac a ydynt yn helpu.

## Arferion gorau

1. **Nodwch y dasg, nid y pwnc.** Mae "Drafftiwch ddiweddariad statws i gwsmeriaid o'r ffeithiau hyn" yn gweithio'n well na "helpwch gyda'r digwyddiad". Dywedwch beth rydych ei eisiau ei gynhyrchu ac ar gyfer pwy.
2. **Cyflenwch y ffynhonnell a chyfyngwch iddi.** Gludwch y deunydd perthnasol a dywedwch am ddefnyddio hwnnw'n unig. Gofynnwch i'r cynorthwyydd ysgrifennu "heb ei nodi" lle mae'r deunydd yn dawel.
3. **Dywedwch pa fformat sydd ei angen.** Gofynnwch am dabl, rhestr rifedig, neu derfyn geiriau. Mae'n gwneud y canlyniad yn haws i'w wirio a'i ddefnyddio.
4. **Gofynnwch am ffynonellau ac ansicrwydd.** Gofynnwch am ddyfyniadau neu gyfeiriadau, a rhestr o'r hyn y mae'r cynorthwyydd yn ansicr ohono. Darllenwch y rhestr honno; mae'n dangos ble i wirio'n gyntaf.
5. **Peidiwch byth â gludo cyfrinachau na data gwarchodedig i offer anghymeradwy.** Tynnwch enwau, cymwysterau a data personol lle gallwch. Defnyddiwch yr offer y mae eich sefydliad wedi'u cymeradwyo ar gyfer deunydd sensitif.
6. **Gwiriwch cyn defnyddio.** Cymharwch ffeithiau, rhifau, amseroedd ac enwau â'r ffynhonnell. Rhedwch unrhyw god neu orchmynion mewn amgylchedd diogel yn gyntaf.
7. **Iteriwch a chadwch yr hyn sy'n gweithio.** Mireiniwch yr anogwr dros ychydig o rowndiau, yna cadwch y fersiwn derfynol gyda nodyn ar gyfer beth mae a phryd mae'n methu.
8. **Rhannwch ac adolygwch lyfrgell tîm.** Cadwch anogwyr a sgiliau a brofwyd mewn lle a rennir gyda pherchnogion. Adolygwch newidiadau, ac ymddeolwch y rhai nad ydynt yn gweithio mwyach.
9. **Ysgrifennwch sgiliau ar gyfer gwaith cylchol.** Pan fyddwch yn ailadrodd anogwr, trowch ef yn sgil gyda disgrifiad clir, camau a gwiriadau. Cadwch ef yn fyr.
10. **Profwch sgiliau ar achosion go iawn.** Adeiladwch ychydig o achosion prawf, rhedwch hwy ar ôl pob newid i'r sgil neu'r offeryn, a chofnodwch y canlyniadau.

## Cwestiynau i'w trafod gyda'ch tîm

**Beth ydym yn gofyn i offer AI ei wneud heddiw, a pha rai o'r ceisiadau hynny y gallem eu hysgrifennu fel anogwr neu sgil y gellir ei hailddefnyddio?**
Casglwch enghreifftiau. Disgwyliwch dasgau ailadroddus fel crynodebau, drafftiau a rhestri gwirio. Dilynwch trwy ddewis un dasg ac ysgrifennu fersiwn a brofwyd gyda'ch gilydd.

**Sut rydym yn gwirio ateb AI cyn ei ddefnyddio, ac a yw pawb yn gwneud hynny yn yr un modd?**
Gofynnwch am y tro diwethaf i rywun ddod o hyd i wall. Disgwyliwch arferion gwahanol. Dilynwch trwy gytuno ar drefn wirio fer ar gyfer pob math o dasg.

**Beth ydym wedi'i ludo i offer AI na ddylem fod wedi, a sut rydym yn gwneud y peth iawn yn hawdd?**
Gofynnwch mewn lleoliad diogel. Disgwyliwch gamgymeriadau. Dilynwch trwy gytuno beth gaiff fynd ble, a thrwy ddarparu offeryn cymeradwy a chanllaw byr.

**Pa anogwyr sydd wedi gweithio'n dda i unigolion ond erioed wedi'u rhannu?**
Gofynnwch i bobl ddangos. Disgwyliwch rai da. Dilynwch trwy gasglu tri i lyfrgell a rennir, gyda pherchennog a dyddiad adolygu.

**Pe bai sgil a ddefnyddiwn yn newid yfory, sut fydden ni'n sylwi?**
Disgwyliwch "ni fydden ni". Dilynwch trwy gytuno bod sgiliau'n byw mewn rheoli fersiynau, yn cael eu hadolygu, ac ac ychydig o achosion prawf.

**Pa dasgau na ddylem byth eu rhoi i gynorthwyydd AI, hyd yn oed gyda gwirio?**
Trafodwch benderfyniadau sy'n effeithio ar bobl, casgliadau cyfreithiol a chymeradwyaethau. Disgwyliwch anghytuno. Dilynwch trwy ysgrifennu rhestr fer a phwy gaiff ei newid.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm gwasanaeth TG ysbyty rhanbarthol o 25 wedi dechrau defnyddio cynorthwyydd AI. Mae staff unigol yn ei ddefnyddio mewn gwahanol ffyrdd. Mae un dadansoddwr yn drafftio erthyglau gwybodaeth o nodiadau tocynnau, un arall yn crynhoi edafedd e-bost hir, a thrydydd yn gofyn iddo egluro negeseuon gwall anghyfarwydd. Mae arweinydd y tîm yn pryderu: mae hi wedi gweld erthygl a oedd yn cynnwys gorchymyn credadwy ond anghywir.

Mae hi'n gofyn i'r tîm ddod â'u tri anogwr mwyaf defnyddiol i sesiwn awr. Maent yn canfod bod pedwar o bobl yn defnyddio bron yr un anogwr ar gyfer troi tocyn a ddatryswyd yn erthygl. Mae'r fersiwn sy'n gweithio orau yn nodi bod yn rhaid i'r cynorthwyydd ddefnyddio testun y tocyn yn unig, bod yn rhaid iddo ysgrifennu "[ar goll]" ar gyfer unrhyw beth nad yw ynddo, bod yn rhaid iddo restru'r camau fel llinellau wedi'u rhifo, a bod yn rhaid iddo orffen gyda rhestr fer o bethau y mae'n ansicr ohonynt. Heb y rheol "[ar goll]", roedd y cynorthwyydd yn llenwi bylchau.

Mae'r tîm yn troi hyn yn ffeil sgil: pryd i'w defnyddio (troi tocyn a ddatryswyd yn erthygl ddrafft), prif rannau erthygl dda, y broses, a'r gwiriadau y mae'n rhaid i unigolyn eu gwneud cyn cyhoeddi, gan gynnwys rhedeg pob gorchymyn mewn amgylchedd prawf. Maent yn ei brofi ar ddeg hen docyn y mae eu datrysiadau'n hysbys ac yn canfod bod y cynorthwyydd, ar dri, wedi dyfalu rhif fersiwn. Maent yn ychwanegu rheol am rifau fersiwn ac yn ailrhedeg y profion. Maent yn storio'r sgil yn ystorfa'r tîm, yn neilltuo dirprwy'r arweinydd fel perchennog, ac yn cytuno bod newidiadau'n cael eu hadolygu fel cod.

Maent hefyd yn ysgrifennu un dudalen ar yr hyn na ddylai fynd i offer AI: data cleifion, cymwysterau, ac adroddiadau diogelwch heb eu rhyddhau; ac maent yn cyfeirio pawb at yr offeryn cymeradwy, sydd â chontract sy'n gwahardd hyfforddi ar eu data.

Beth sy'n newid: mae drafftio erthyglau'n cymryd munudau, ac mae nifer yr erthyglau â chamau anghywir a ganfyddir wrth adolygu yn gostwng. Beth sy'n parhau'n anodd: mae rhai staff yn dal i ddefnyddio cyfrifon personol pan fo'r offeryn cymeradwy yn araf; mae'r llyfrgell sgiliau wedi tyfu i 14 ffeil ac nid oes neb wedi adolygu hanner ohonynt; ac mae ymddygiad y cynorthwyydd wedi symud ychydig ar ôl diweddariad gwerthwr, a ddaliodd y profion dim ond oherwydd bod rhywun wedi eu hailrhedeg. Mae'r arweinydd yn ychwanegu rhediad prawf misol a sesiwn tocio chwarterol.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Defnyddiwch anogwyr a sgiliau i ddrafftio cod, profion a dogfennaeth, gyda'ch adolygiad arferol a gwiriadau'r biblinell. Cadwch sgiliau ar gyfer eich llifoedd gwaith eich hun yn yr ystorfa wrth ymyl y cod.

### Timau gwasanaeth a gweithrediadau

Adeiladwch lyfrgell fach ar gyfer tasgau cylchol fel diweddariadau, erthyglau ac adolygiadau. Rhannwch yr hyn sy'n gweithio, gwiriwch bob allbwn, a dywedwch wrth y perchennog pan fydd sgil yn methu.

### Arweinyddiaeth a llywodraethu

Gosodwch reolau ar yr hyn a gaiff ei ludo ble, darparwch offer cymeradwy, ac ariennwch amser ar gyfer adeiladu a phrofi llyfrgell. Gofynnwch am dystiolaeth bod allbynnau'n cael eu gwirio. Peidiwch â thrin anogwyr fel dewis amgen i broses.

### Cwsmeriaid a defnyddwyr

Efallai y byddwch yn cwrdd â chynnwys a ddrafftiwyd gan AI. Gofynnwch a yw unigolyn wedi'i wirio, a dywedwch wrth y darparwr pan fo'n anghywir. Byddwch yn ofalus pa ddata personol a roddwch i unrhyw offeryn AI.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Tyfwch y llyfrgell o ddefnydd go iawn: ychwanegwch sgil pan fydd tasg yn ailadrodd, gwellwch hi o adborth, ac ymddeolwch hi pan fydd yn stopio helpu. Cadwch sgiliau'n fyr ac wedi'u hadolygu. Rhybudd: mae llyfrgell fawr heb ei hadolygu yn rhwymedigaeth; cadwch hi'n fach ac mewn perchnogaeth.

### AI

Anogwyr a sgiliau yw'r cyfarwyddiadau a roddwn i AI, felly maent yn haeddu'r gofal a roddwn i reolaethau eraill: perchnogaeth, adolygiad, profion, a chofnodion defnydd. Rhybudd: nid yw cyfarwyddiadau i "fod yn gywir" yn gwneud model yn gywir; dibynnwch ar ffynonellau a gyflenwir, gwiriadau ac adolygiad dynol. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

### Awtomeiddio

Gellir ymgorffori anogwyr cymeradwy mewn llifoedd gwaith, fel drafftio crynodeb pan fydd tocyn yn cau, gyda cham adolygu cyn ei ddefnyddio. Rhybudd: mae anogwyr awtomataidd yn rhedeg heb ofal unigolyn yn darllen bob tro; profwch hwy ar fewnbynnau amrywiol a chadwch borth dynol. Gweler Pwnc 6.2 — Awtomeiddio a Chydlynu Llif Gwaith.

### Dadansoddeg

Tracwch pa anogwyr a sgiliau a ddefnyddir, pa mor aml y golygir drafftiau, gwallau a ganfyddir wrth adolygu, ac amser a arbedir yn ôl tasg. Rhybudd: mae cyfrifon defnydd yn gwobrwyo cyfaint, ac mae arbedion amser amcangyfrifedig yn hawdd eu chwyddo; samplwch yr allbynnau terfynol am ansawdd. Gweler y llyfr *Service Management Metrics* a Phwnc 7.3 — Mesur ac Adrodd.

## Dulliau methu cyffredin

- **Ceisiadau amwys.** Mae'r ateb yn generig. Nodwch y dasg, y gynulleidfa a'r fformat.
- **Dim deunydd ffynhonnell.** Mae'r model yn llenwi bylchau o'r cof. Cyflenwch y ffynhonnell a chyfyngwch iddi.
- **Dalfannau heb eu llenwi.** Mae anogwr yn mynd allan gyda "[gludwch yma]" ynddo. Gwiriwch cyn anfon.
- **Ymddiried yn yr ateb cyntaf.** Mae gwallau'n mynd heb eu sylwi. Gwiriwch yn erbyn y ffynhonnell.
- **Gludo cyfrinachau.** Mae data'n gollwng. Defnyddiwch offer cymeradwy a thynnwch fanylion sensitif.
- **Llyfrgell sgiliau nad oes neb yn berchen arni.** Mae ffeiliau'n dirywio neu'n newid heb eu sylwi. Cadwch hwy mewn rheoli fersiynau gyda pherchnogion a phrofion.
- **Lawrlwytho sgiliau heb eu darllen.** Mae cyfarwyddyd niweidiol yn rhedeg. Darllenwch ac adolygwch cyn defnyddio.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Arfer anogi | Prawf a chamgymeriad | Awgrymiadau'n cael eu rhannu'n anffurfiol | Patrymau safonol gyda ffynonellau a gwiriadau | Patrymau'n cael eu mireinio o ddata gwallau | Patrymau wedi'u hymgorffori mewn offer a llifoedd gwaith |
| Llyfrgell sgiliau | Dim | Ffeiliau personol | Sgiliau a rennir, mewn perchnogaeth, dan reoli fersiynau | Sgiliau'n cael eu profi a'u hadolygu'n rheolaidd | Sgiliau'n cael eu rheoli ar draws timau gyda llywodraethu |
| Gwirio | Dim | Arferion unigol | Trefniadau safonol yn ôl tasg | Gwallau'n cael eu holrhain a'u bwydo'n ôl | Gwirio wedi'i gefnogi gan offer gyda llofnodi dynol |
| Rheolau data | Aneglur | Ymwybyddiaeth | Rheolau clir ac offer cymeradwy | Cydymffurfiaeth yn cael ei gwirio | Rheolaethau wedi'u hadeiladu i mewn i offer |

## Rhestr wirio

- [ ] Mae ein hanogwyr yn nodi'r dasg, y ffynhonnell, y fformat a'r rheol ansicrwydd.
- [ ] Rydym yn gwirio allbynnau yn erbyn y ffynhonnell cyn eu defnyddio.
- [ ] Mae gennym reolau ar yr hyn a gaiff ei ludo i ba offer, ac offer cymeradwy.
- [ ] Rydym yn cadw anogwyr a sgiliau a brofwyd mewn lle a rennir, mewn perchnogaeth.
- [ ] Mae gan sgiliau ddisgrifiad clir o pryd i'w defnyddio.
- [ ] Rydym yn profi sgiliau ar achosion go iawn ar ôl pob newid i'r sgil neu'r offeryn.
- [ ] Rydym yn adolygu sgiliau o ffynonellau allanol cyn eu defnyddio.
- [ ] Rydym yn rhestru tasgau na ddylid eu rhoi i AI.

## Anogwyr AI

**Gwella anogwr.**

```text
Dyma anogwr rwy'n ei ddefnyddio: [gludwch]. Dyma enghraifft o allbwn a'm siomodd: [gludwch].
Nodwch beth nad yw'r anogwr yn ei ddweud a fyddai'n helpu (tasg, deunydd ffynhonnell, cyfyngiadau, fformat, rheol ansicrwydd), cynigiwch anogwr wedi'i ailysgrifennu gyda [dalfannau] ar gyfer fy neunydd i, ac eglurwch bob newid mewn un llinell. Peidiwch ag ychwanegu ffeithiau am fy sefyllfa.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Troi anogwr yn sgil.**

```text
Dyma anogwr sy'n gweithio'n dda i'm tîm: [gludwch]. Dyma ddwy enghraifft o allbynnau da: [gludwch].
Drafftiwch SKILL.md gyda phennawd (enw a disgrifiad un frawddeg o pryd i'w ddefnyddio a phryd i beidio), prif gydrannau allbwn da, proses fer, camgymeriadau cyffredin, a rhestr wirio ar gyfer gwirio'r canlyniad. Cadwch ef o dan 400 gair a pheidiwch ag ychwanegu camau nad ydynt wedi'u hawgrymu gan fy enghreifftiau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Dylunio profion ar gyfer sgil.**

```text
Dyma sgil: [gludwch].
Ysgrifennwch wyth achos prawf: pump nodweddiadol, dau lletchwith, ac un sy'n ceisio gwneud i'r cynorthwyydd anwybyddu'r sgil. Ar gyfer pob un, disgrifiwch y mewnbwn a'r ymddygiad cywir. Peidiwch â defnyddio data personol go iawn.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): defnyddiwch i ddylunio, profi a mireinio anogwyr.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md): defnyddiwch i ddod o hyd i bynciau, cwestiynau ac anogwyr y canllaw hwn a'u cymhwyso.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md): defnyddiwch i gynnal pynciau a sgiliau'r canllaw hwn.
- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch fel enghraifft o sgil wedi'i strwythuro'n dda ar gyfer gwaith gweithredol.

## Prif ffynonellau

- Anthropic, documentation on prompting and on Agent Skills (docs.anthropic.com): arweiniad gwerthwr ar ysgrifennu cyfarwyddiadau a sgiliau ar gyfer modelau Claude.
- OWASP, guidance on risks for applications built on large language models (owasp.org): gan gynnwys chwistrellu anogwr.
- Wikipedia, "Prompt engineering": trosolwg o dechnegau a thermau.
- Cyfeiriadur `skills/` y canllaw hwn: enghreifftiau gweithiol o sgiliau ar gyfer tasgau rheoli gwasanaethau.

## Cyfeiriadau

1. Prompt engineering — Wikipedia — https://en.wikipedia.org/wiki/Prompt_engineering
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Few-shot learning — Wikipedia — https://en.wikipedia.org/wiki/Few-shot_learning
6. Chain of thought — Wikipedia — https://en.wikipedia.org/wiki/Chain_of_thought
7. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
8. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
9. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
10. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
11. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
12. OWASP — OWASP Foundation — https://owasp.org
