# Rheoli Parhad Gwasanaeth

**Mae rheoli parhad gwasanaeth yn paratoi sefydliad i gadw gwasanaethau critigol i redeg, neu eu hadfer o fewn amser y cytunwyd arno, ar ôl amhariad difrifol; mae'n gweithio pan fydd targedau adfer yn dod o effaith busnes, cynlluniau'n cael eu hymarfer, a chopïau wrth gefn yn cael eu profi trwy eu hadfer.**

## Pam mae hyn yn bwysig

Mae'r rhan fwyaf o ddigwyddiadau'n fach: disg a fethodd, rhyddhad gwael, tystysgrif a ddaeth i ben. Nid yw rhai ohonynt. Mae canolfan ddata yn colli pŵer am ddiwrnod. Mae rhanbarth cwmwl yn methu. Mae ransomware yn amgryptio'r prif systemau. Mae cyflenwr yn dymchwel. Mae pandemig yn cadw staff draw o'u swyddfeydd. Mae digwyddiadau fel y rhain yn bygwth y sefydliad, nid dim ond gwasanaeth, ac maent yn digwydd yn ddigon anaml i bobl anghofio paratoi ar eu cyfer.

Math o yswiriant yw paratoi gyda nodwedd benodol: dim ond ar y diwrnod y mae ei angen arnoch y mae ei werth yn dangos, ac mae'n debyg na fydd cynllun na roddwyd cynnig arno erioed yn gweithio. Mae copïau wrth gefn na chawsant eu hadfer erioed yn troi allan i fod yn wag. Mae methu drosodd na chafodd ei ymarfer erioed yn cymryd diwrnod yn lle awr. Mae rhestr alw yn rhestru pobl a adawodd. Mae timau sydd wedi ymarfer yn dod o hyd i'r problemau mewn ymarfer, nid yn yr argyfwng.

Mae'r pwnc hwn yn esbonio sut i benderfynu beth i'w ddiogelu, sut i osod targedau adfer, sut i gynllunio ac ymarfer, a sut i gynnwys AI ac awtomeiddio yn synhwyrol. Yn ITIL 4 yr arfer yw rheoli parhad gwasanaeth. Mewn defnydd ehangach byddwch hefyd yn cwrdd â rheoli parhad busnes, adfer ar ôl trychineb, a gwydnwch. Maent yn gorgyffwrdd, ac mae'r pwnc hwn yn disgrifio sut maent yn ffitio. Mae'n cysylltu ag argaeledd (Pwnc 3.11 — Argaeledd, Capasiti a Pherfformiad), rheoli digwyddiadau (Pwnc 3.2 — Rheoli Digwyddiadau), a diogelwch gwybodaeth (Pwnc 3.13 — Rheoli Diogelwch Gwybodaeth).

## Cysyniadau craidd

**Parhad gwasanaeth.** Yn ITIL 4, sicrhau bod argaeledd a pherfformiad gwasanaeth yn cael eu cynnal ar lefel ddigonol os bydd trychineb. Mae'r arfer yn cynnwys asesu risgiau ac effeithiau, cynllunio adferiad, ac ymarfer.

**Parhad busnes ac adfer ar ôl trychineb.** Mae cynllunio parhad busnes, a ddisgrifir ar Wikipedia, yn ymdrin â sut mae sefydliad yn cadw swyddogaethau critigol i redeg, neu'n eu hailddechrau'n gyflym, yn ystod ac ar ôl amhariad. Adfer ar ôl trychineb yw'r rhan TG: adfer systemau, data a seilwaith. Mae parhad busnes yn gofyn "sut ydym yn parhau i wasanaethu cwsmeriaid?"; mae adfer ar ôl trychineb yn gofyn "sut ydym yn cael y systemau yn ôl?". Mae ISO 22301 yn safon ryngwladol ar gyfer systemau rheoli parhad busnes, a ddisgrifir ar Wikipedia; mae ei berthynas ag ISO/IEC 20000 yn cael ei thrafod ym Mhwnc 1.8 — Fframweithiau a Safonau Rheoli Gwasanaethau.

**Dadansoddi effaith busnes (BIA).** Astudiaeth o'r hyn sy'n digwydd i'r sefydliad os yw pob swyddogaeth neu wasanaeth yn anhygyrch am amser penodol. Mae'n nodi pa wasanaethau sy'n gritigol a pha mor gyflym y mae'n rhaid eu hadfer. Mae'r dadansoddiad yn cynnwys y busnes, nid dim ond TG, gan mai dim ond y busnes sy'n gwybod effaith awr neu ddiwrnod a gollwyd.

**Amcan amser adfer (RTO).** Yr amser mwyaf targed i adfer gwasanaeth ar ôl amhariad. Mae Wikipedia yn ei ddisgrifio o dan adfer ar ôl trychineb TG. Daw o'r dadansoddiad effaith: os yw awr o amser segur yn costio llawer, mae'r RTO yn fyr ac mae'r ateb yn ddrud.

**Amcan pwynt adfer (RPO).** Y swm mwyaf derbyniol o golli data, wedi'i fesur mewn amser. Mae RPO o 15 munud yn golygu, ar ôl adfer, na chaiff mwy na 15 munud o ddata fod ar goll. Mae'n pennu pa mor aml y mae'n rhaid copïo data.

**Costau a chyfaddawdau.** Mae RTOs ac RPOs byrrach yn costio mwy: mwy o ddiangen, mwy o ddyblygu, mwy o brofi. Dangoswch gost pob opsiwn i'r bobl sy'n penderfynu, a chofnodwch y penderfyniad. Gweler Pwnc 4.5 — Rheolaeth Ariannol a FinOps.

**Copi wrth gefn a dyblygu.** Copïau o ddata a gedwir i'w adfer ar ôl colled neu ddifrod yw copïau wrth gefn. Mae dyblygu yn cadw ail gopi wedi'i ddiweddaru'n barhaus mewn man arall. Mae Wikipedia yn disgrifio'r ddau. Nid yw dyblygu yn disodli copi wrth gefn: os caiff llygredd neu amgryptio gan ransomware ei ddyblygu, mae'r copi wedi'i ddifrodi hefyd. Cadwch o leiaf un copi wrth gefn na ellir ei newid o'r amgylchedd cynhyrchu, a phrofwch ei adfer.

**Safleoedd a phatrymau adfer.** Mae opsiynau'n amrywio o safle wrth gefn sydd bob amser yn rhedeg, trwy un y gellir ei gychwyn o fewn oriau, i adfer o gopi wrth gefn i amgylchedd newydd. Mae gwasanaethau cwmwl yn gwneud sawl patrwm yn haws, fel ail-greu seilwaith o god. Gweler Pwnc 6.3 — Seilwaith fel Cod a GitOps. Mae Wikipedia yn disgrifio safleoedd wrth gefn.

**Dibyniaethau.** Mae gwasanaeth critigol yn dibynnu ar eraill: hunaniaeth, rhwydweithiau, DNS, cyflenwyr, tystysgrifau a phobl. Rhaid i gynlluniau adfer ddilyn y dibyniaethau hyn a threfnu'r adfer. Mae llawer o adferiadau a fethodd yn llonyddu ar ddibyniaeth anghofiedig, fel y system sy'n storio'r cyfrineiriau sydd eu hangen i adfer y lleill.

**Cynlluniau a llawlyfrau chwarae.** Cyfarwyddiadau ysgrifenedig, cryno ar gyfer pwy sy'n gwneud beth, ym mha drefn, a phwy i gysylltu ag ef. Dylid eu storio lle gellir eu darllen pan fo systemau i lawr, gan gynnwys copïau all-lein. Rhaid enwi rolau, gyda dirprwyon.

**Ymarferion.** Mae ymarferion yn amrywio o drafodaeth gerdded drwodd senario, i efelychiad, i fethu drosodd neu adfer byw. Mae Wikipedia yn disgrifio peirianneg anhrefn, lle cyflwynir methiannau'n fwriadol ac dan reolaeth, i ddod o hyd i wendidau. Dechreuwch yn fach ac yn ddiogel, a chynyddwch realaeth dros amser. Cofnodwch beth ddigwyddodd a thrwsiwch yr hyn a ddysgwch.

**Rheoli argyfwng a chyfathrebu.** Mae amhariad mawr angen penderfyniadau arweinyddiaeth, cyfathrebu â staff, cwsmeriaid, rheoleiddwyr a'r cyhoedd, a chydlynu ar draws swyddogaethau. Mae erthygl Wikipedia ar reoli argyfwng yn disgrifio'r maes. Penderfynwch ymlaen llaw pwy sy'n siarad a sut. Gweler Pwnc 3.2 — Rheoli Digwyddiadau.

**Digwyddiadau seiber.** Mae ransomware ac ymosodiadau eraill bellach yn brif achos amhariad difrifol. Mae Wikipedia yn disgrifio ransomware fel meddalwedd maleisus sy'n amgryptio data ac yn mynnu taliad. Mae adferiad o ymosodiad o'r fath angen copïau wrth gefn glân, ynysu systemau yr effeithiwyd arnynt, ailadeiladu seilwaith dibynadwy, a chydlynu â diogelwch. Gwiriwch y gyfraith a'r cyngor sy'n berthnasol i chi, gan gynnwys ar adrodd; nid yw'r canllaw hwn yn rhoi cyngor cyfreithiol.

**Cyflenwyr.** Mae eich parhad chi yn dibynnu ar barhad eich cyflenwyr. Gofynnwch am eu cynlluniau, a'u cynnwys mewn ymarferion lle bo modd. Gweler Pwnc 3.14 — Rheoli Cyflenwyr.

**Sut mae'r lensys yn ffitio.** Parhad yw lle mae iteriad ystwyth yn cwrdd â pharatoi: gwellwch y cynllun ar ôl pob ymarfer. Gall AI helpu i ddrafftio cynlluniau a senarios, o dan adolygiad, ond ni ellir dibynnu arno yn ystod argyfwng. Mae awtomeiddio yn ailadeiladu amgylcheddau ac yn rhedeg methu drosodd. Mae dadansoddeg yn llywio dadansoddi effaith ac yn tracio canlyniadau ymarferion.

## Arferion gorau

1. **Dechreuwch ag effaith busnes.** Gofynnwch i'r busnes beth mae ymyriad pob gwasanaeth yn ei gostio dros funudau, oriau a diwrnodau. Graddiwch wasanaethau, a gosodwch RTOs ac RPOs yn unol â hynny. Ailedrychwch ar y dadansoddiad ar ôl newid mawr.
2. **Diogelwch yr ychydig sy'n gritigol yn gyntaf.** Canolbwyntiwch ymdrech ar y gwasanaethau y byddai eu colli yn niweidio'r sefydliad yn ddifrifol. Darparwch drefniadau ysgafnach ar gyfer y gweddill.
3. **Mapiwch ddibyniaethau.** Ar gyfer pob gwasanaeth critigol, rhestrwch beth sydd ei angen arno i redeg ac i gael ei adfer, gan gynnwys hunaniaeth, rhwydwaith, DNS a chyflenwyr. Cynlluniwch drefn yr adfer.
4. **Cadwch gopi wrth gefn na ellir ei newid, wedi'i brofi.** Cadwch o leiaf un copi na ellir ei newid na'i ddileu o'r amgylchedd cynhyrchu, ac adferwch ohono'n rheolaidd i brofi ei fod yn gweithio.
5. **Ysgrifennwch gynlluniau byr, defnyddiadwy.** Rhowch rolau, camau cyntaf, cysylltiadau a phwyntiau penderfynu ar ychydig dudalennau. Cadwch gopïau all-lein a gyda'r bobl sydd eu hangen.
6. **Enwch rolau a dirprwyon.** Ar gyfer pob rôl mewn argyfwng, enwch un cynradd ac o leiaf un arall. Diweddarwch y rhestr pan fydd pobl yn newid swyddi.
7. **Ymarferwch fesul cam.** Dechreuwch â thrafodaeth o senario, symudwch i efelychiadau, yna i brofion byw rheoledig o adfer a methu drosodd. Cofnodwch amseroedd a phroblemau.
8. **Trwsiwch yr hyn y mae'r ymarfer yn ei ganfod.** Trinwch ganfyddiadau fel eitemau ôl-groniad gyda pherchnogion a dyddiadau. Gwiriwch yn yr ymarfer nesaf eu bod wedi'u gwneud.
9. **Cynhwyswch gyflenwyr a chwsmeriaid.** Gofynnwch i gyflenwyr critigol am eu trefniadau parhad a phrofwch y cysylltiadau. Cytunwch gyda chwsmeriaid pa wasanaeth dirywiedig y gallant ei dderbyn.
10. **Cynlluniwch gyfathrebu.** Paratowch pwy sy'n hysbysu pwy, trwy ba sianeli, gyda thempledi, gan gynnwys sianeli sy'n gweithio pan nad yw eich systemau chi.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa dri gwasanaeth fyddai'n ein brifo fwyaf pe baent yn anhygyrch am wythnos, a sut rydym yn gwybod?**
Gofynnwch i'r busnes, nid TG yn unig. Disgwyliwch atebion gwahanol, sy'n fan cychwyn defnyddiol. Dilynwch trwy drefnu trafodaeth effaith fer ar gyfer pob un o'r tri.

**Pryd wnaethon ni adfer o gopi wrth gefn ddiwethaf, a pha mor hir y cymerodd?**
Gofynnwch am y dyddiad a'r canlyniad. Disgwyliwch "nid ydym erioed wedi rhoi cynnig arni" neu "ffeil prawf yn unig". Dilynwch trwy drefnu adferiad llawn o un system bwysig mewn amgylchedd diogel.

**Beth mae ein hadferiad yn dibynnu arno nad ydym wedi'i brofi, fel systemau hunaniaeth, DNS, neu unigolyn?**
Tynnwch y gadwyn ar gyfer un gwasanaeth. Chwiliwch am ddibyniaethau crwn. Dilynwch trwy ddewis un dibyniaeth i'w phrofi.

**Pe bai ein systemau cyfathrebu arferol i lawr, sut y byddem yn cyrraedd ein gilydd a'n cwsmeriaid?**
Mae llawer o gynlluniau'n tybio e-bost a sgwrs. Gofynnwch am y rhestr alw a sianeli y tu allan i'r band. Dilynwch trwy brofi coeden alw.

**Beth fydden ni'n ei wneud yn ystod awr gyntaf ymosodiad ransomware, a phwy sy'n penderfynu?**
Rhedwch drafodaeth senario fer. Disgwyliwch anghytundebau ynghylch ynysu systemau ac ynghylch cysylltu ag awdurdodau. Dilynwch trwy ysgrifennu canllaw awr gyntaf un dudalen gyda diogelwch.

**Ymhle y gallai AI ein helpu i baratoi neu ymateb, ac ymhle mae'n rhaid i ni ddibynnu ar gynlluniau dynol parod?**
Gall AI ddrafftio senarios, gwirio cynlluniau am fylchau, a chrynhoi logiau. Yn ystod ymyriad efallai bod y gwasanaeth AI ei hun yn anhygyrch. Gofynnwch beth mae'r cynllun yn ei dybio. Dilynwch trwy wirio nad yw camau critigol yn dibynnu ar wasanaeth AI.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Rhaid adfer systemau ystafell reoli dosbarthwr trydan rhanbarthol, sy'n dangos cyflwr y rhwydwaith i weithredwyr, o fewn dwy awr i fethiant. Dyna mae cynllun adfer ar ôl trychineb y dosbarthwr yn ei ddweud. Fe'i hysgrifennwyd bedair blynedd yn ôl ac fe'i profwyd ddiwethaf fel ymarfer papur.

Mae rheolwr parhad gwasanaeth newydd yn gofyn am brawf byw. Mae'r tîm yn cytuno i adfer cymhwysiad yr ystafell reoli mewn amgylchedd ar wahân o gopi wrth gefn y noson flaenorol, gyda'r rheolwr gweithrediadau yn arsylwi. Mae'r adferiad yn cymryd un awr ar ddeg yn hytrach na dwy. Daw tair problem i'r amlwg: mae'r copi wrth gefn yn cynnwys ffeiliau'r cymhwysiad ond nid ei gronfa ddata gyfluniad, sy'n cael ei dal gan dîm arall; mae'r cyfrineiriau sydd eu hangen ar gyfer yr adferiad wedi'u storio mewn cell ddiogel (vault) sy'n rhan o'r un ganolfan ddata; ac mae'r unigolyn sy'n gwybod gosodiadau rhwydwaith y safle adfer ar absenoldeb hir heb ddirprwy.

Mae'r tîm yn trwsio'r rhain dros dri mis. Mae'n ychwanegu'r gronfa ddata gyfluniad at yr amserlen copïo wrth gefn, yn creu storfa cymwysterau torri gwydr a gedwir all-lein mewn amlen wedi'i selio ac mewn cyfrif cwmwl ar wahân, ac yn hyfforddi dau beiriannydd ychwanegol ar y safle adfer. Mae ail brawf yn adfer y cymhwysiad mewn 2 awr 40 munud. Mae'r trydydd, gyda dechrau heb ei gyhoeddi'n fwriadol, yn cymryd 1 awr 50 munud.

Beth sy'n newid: caiff y targed ei fodloni'n ymarferol, ac mae'r cynllun yn ddogfen y mae pobl wedi'i defnyddio. Beth sy'n parhau'n anodd: defnyddiodd y prawf gopi o ddata cynhyrchu ac nid oedd yn cynnwys y cysylltiadau â chyfarpar maes, na ellir ond eu profi gyda gweithredwr y grid; nid yw'r sefydliad wedi ymarfer colli'r ganolfan ddata gyfan, un cymhwysiad yn unig; a chaiff cost cadw'r safle adfer ei holi bob blwyddyn. Mae'r rheolwr yn cadw'r calendr ymarferion ac yn cyflwyno costau yn erbyn y dadansoddiad effaith.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Gwnewch adferiad yn rhan o'r dyluniad: ailadeiladwch o god, copïwch ddata a chyfluniad wrth gefn, osgowch ddibyniaethau cudd. Cymerwch ran mewn ymarferion a thrwsiwch yr hyn a ganfyddant.

### Timau gwasanaeth a gweithrediadau

Gwyddoch eich rôl a'ch dirprwy, cadwch lawlyfrau gweithredu'n gyfredol, ac ymarferwch adfer a methu drosodd. Cofnodwch faint o amser y mae pethau'n ei gymryd mewn gwirionedd a dywedwch wrth y perchnogion.

### Arweinyddiaeth a llywodraethu

Penderfynwch ar dargedau adfer gyda'r busnes ac ariennwch yr hyn y maent yn ei fynnu. Cymerwch ran mewn ymarferion, gan gynnwys penderfyniadau a chyfathrebu. Gofynnwch weld canlyniadau profion, nid cynlluniau yn unig.

### Cwsmeriaid a defnyddwyr

Gofynnwch pa drefniadau parhad sy'n diogelu'r gwasanaethau rydych yn dibynnu arnynt, a chytunwch pa wasanaeth dirywiedig y gallwch ei dderbyn. Cadwch eich cynllun wrth gefn eich hun ar gyfer anghenion critigol.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Gwellwch barhad mewn camau bach: un dibyniaeth, un prawf adfer, un atgyweiriad ar y tro, wedi'u hadolygu gyda rhanddeiliaid. Rhybudd: peidiwch ag oedi'r holl waith parhad i un prosiect mawr; ymarferwch yn gynnar ac yn aml.

### AI

Gall AI helpu i ddrafftio senarios, gwirio cynlluniau am fylchau, a chrynhoi logiau ar ôl ymarfer, gydag unigolyn yn adolygu. Enwch berchennog. Rhybudd: efallai y bydd cynorthwyydd AI yn anhygyrch mewn argyfwng neu'n rhoi cyfarwyddiadau annibynadwy; cadwch weithdrefnau hanfodol mewn dogfennau plaen, wedi'u profi. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

### Awtomeiddio

Awtomeiddiwch ailadeiladu amgylcheddau, dilysu copïau wrth gefn, a methu drosodd, gyda logiau a mesurau diogelu, a'u profi'n rheolaidd. Rhybudd: gall awtomeiddio ledaenu difrod yn gyflym, fel dileu copïau wrth gefn gyda'r data cynhyrchu; diogelwch systemau copi wrth gefn â chymwysterau a rheolaethau ar wahân. Gweler Pwnc 6.3 — Seilwaith fel Cod a GitOps.

### Dadansoddeg

Tracwch lwyddiant copi wrth gefn, amseroedd prawf adfer yn erbyn RTO, RPO a gyflawnwyd, canfyddiadau ymarferion a gaewyd, a chwmpas dibyniaethau. Rhybudd: nid yw cyfradd llwyddiant copi wrth gefn uchel yn dweud dim am ba un a ellir adfer data; cyfrwch adferiadau. Gweler y llyfr *Service Management Metrics* a Phwnc 7.3 — Mesur ac Adrodd.

## Dulliau methu cyffredin

- **Cynlluniau byth yn cael eu profi.** Maent yn methu pan fo eu hangen. Ymarferwch ac adferwch yn rheolaidd.
- **Copïau wrth gefn byth yn cael eu hadfer.** Maent yn wag neu'n anghyflawn. Profwch adferiadau a gwiriwch gynnwys.
- **Dibyniaethau cudd.** Mae adferiad yn llonyddu ar hunaniaeth neu DNS. Mapiwch a phrofwch ddibyniaethau.
- **Copïau wrth gefn y gall ymosodwyr eu newid.** Mae ransomware yn eu hamgryptio. Cadwch gopi na ellir ei newid.
- **Cynllunio TG yn unig.** Nid yw'r busnes yn cymryd rhan. Rhedwch ddadansoddiad effaith gyda pherchnogion busnes.
- **Cynllun yn byw ar y system a fethodd yn unig.** Ni all neb ei ddarllen. Cadwch gopïau all-lein.
- **Dim dirprwyon.** Mae un person yn dal y wybodaeth. Enwch rai eraill a'u hyfforddi.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Effaith a thargedau | Heb eu diffinio | Gwasanaethau critigol wedi'u rhestru | RTOs ac RPOs wedi'u gosod o effaith busnes | Targedau'n cael eu hadolygu gyda chost a chanlyniadau | Targedau wedi'u cydlynu ar draws y fenter a chyflenwyr |
| Copi wrth gefn ac adfer | Copïau wrth gefn heb eu dilysu | Copïau wrth gefn yn rhedeg | Adferiadau wedi'u profi a'u hamseru | Perfformiad adfer yn cael ei dracio a'i wella | Adferiad yn awtomataidd ac yn cael ei brofi'n barhaus |
| Cynlluniau | Dim neu wedi dyddio | Wedi'u hysgrifennu ar gyfer prif wasanaethau | Cynlluniau cryno gyda rolau a dirprwyon a enwyd | Cynlluniau'n cael eu diweddaru ar ôl pob ymarfer | Cynlluniau wedi'u hintegreiddio ar draws swyddogaethau, cyflenwyr a chwsmeriaid |
| Ymarferion | Dim | Cerdded drwodd ar bapur | Efelychiadau ac adferiadau byw rheolaidd | Canfyddiadau'n cael eu holrhain i'w cau | Mae ymarferion yn cynnwys partneriaid a senarios realistig |

## Rhestr wirio

- [ ] Rydym wedi cwblhau dadansoddiad effaith busnes ar gyfer ein gwasanaethau critigol.
- [ ] Mae gan bob gwasanaeth critigol RTO ac RPO y cytunwyd arnynt gyda'i berchennog.
- [ ] Mae dibyniaethau, gan gynnwys hunaniaeth a DNS, wedi'u mapio.
- [ ] Mae o leiaf un copi wrth gefn na ellir ei newid ac mae adferiadau wedi'u profi.
- [ ] Mae cynlluniau'n fyr, yn gyfredol, ac wedi'u storio all-lein hefyd.
- [ ] Mae rolau a dirprwyon wedi'u henwi.
- [ ] Rydym yn rhedeg ymarferion yn rheolaidd ac yn tracio canfyddiadau i'w cau.
- [ ] Mae trefniadau parhad cyflenwyr yn hysbys ac yn cael eu profi lle bo modd.

## Anogwyr AI

**Gwirio cynllun am fylchau.**

```text
Dyma ein cynllun parhad ar gyfer [gwasanaeth]: [gludwch]. Dyma restr ei ddibyniaethau: [gludwch].
Rhestrwch ddibyniaethau nad yw'r cynllun yn eu crybwyll, camau sy'n dibynnu ar unigolyn heb ddirprwy a enwyd, a chamau sy'n tybio system a allai fod i lawr. Peidiwch ag ailysgrifennu'r cynllun.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Dylunio ymarfer senario.**

```text
Ein cyd-destun: [math o sefydliad, gwasanaethau allweddol]. Thema'r senario: [er enghraifft, ransomware, colli canolfan ddata].
Drafftiwch ymarfer trafodaeth 90 munud gyda llinell amser o ddigwyddiadau, chwe phwynt penderfynu, cwestiynau ar gyfer pob rôl, a beth i'w gofnodi. Peidiwch â defnyddio enwau na systemau go iawn oni roddaf hwy.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Crynhoi canlyniadau prawf adfer.**

```text
Dyma'r nodiadau o brawf adfer: [gludwch gydag amseroedd a phroblemau].
Rhestrwch beth gymerodd hiraf, beth a fethodd, y dibyniaethau a ddarganfuwyd, a'r camau gweithredu i'w hystyried, gyda rôl y perchennog ar gyfer pob un. Peidiwch â dyfeisio achosion.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md): defnyddiwch i gynllunio sut mae swyddogaethau critigol yn parhau.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md): defnyddiwch i gynllunio adfer systemau a data.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): defnyddiwch i ddylunio a rhedeg profion adfer.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): defnyddiwch i gynllunio cyfathrebu yn ystod amhariad.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): defnyddiwch i brofi ymddygiad methiant yn ddiogel.

## Prif ffynonellau

- ISO 22301, Security and resilience — Business continuity management systems: y safon ryngwladol; darllenwch yr argraffiad cyfredol gan y cyhoeddwr.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o'r arfer rheoli parhad gwasanaeth.
- Wikipedia, "Business continuity planning" a "IT disaster recovery": trosolygon o'r syniadau a'r termau.
- Wikipedia, "Chaos engineering": yr arfer o brofi methiant yn fwriadol.

## Cyfeiriadau

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
