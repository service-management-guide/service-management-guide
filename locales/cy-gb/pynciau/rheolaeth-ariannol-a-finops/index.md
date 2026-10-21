# Rheolaeth Ariannol a FinOps

**Mae rheolaeth ariannol ar gyfer gwasanaethau yn gwneud cost yr hyn rydych yn ei redeg yn weladwy ac yn ei chlymu wrth y gwerth a ddarperir; mae FinOps yn cymhwyso'r ddisgyblaeth honno at wariant cwmwl ac AI, lle mae cost yn dilyn penderfyniadau peirianneg awr wrth awr, trwy roi peirianwyr, cyllid a pherchnogion cynnyrch yn yr un sgwrs.**

## Pam mae hyn yn bwysig

Arferai cost technoleg fod yn ychydig o benderfyniadau mawr, araf: prynu gweinyddion, arwyddo trwydded, adeiladu canolfan ddata. Gallai cyllid gynllunio ar ei gyfer unwaith y flwyddyn. Newidiodd gwasanaethau cwmwl a thanysgrifiadau hynny. Gall unrhyw beiriannydd greu adnodd sy'n costio arian bob awr, ac mae'r bil yn cyrraedd fis yn ddiweddarach, wedi'i gyfuno fel na all neb ddweud beth a'i gyrrodd. Mae costau'n codi'n raddol ac yna'n neidio, a'r arwydd cyntaf yw syndod ar anfoneb.

Mae AI yn ei wneud yn fwy miniog. Mae anogwr yn costio ffracsiwn o geiniog, ac mae nodwedd a ddefnyddir gan filiwn o bobl yn costio llawer. Gall hyfforddi model neu redeg llwyth mawr ar galedwedd arbenigol gostio cymaint mewn diwrnod â chyllideb tîm am fis. Yn wahanol i weinydd, y gallwch ei weld mewn rac, mae cost sy'n seiliedig ar ddefnydd yn anweledig nes ei bod yn fawr.

Mae rheolaeth ariannol mewn rheoli gwasanaethau yn rhagflaenu cwmwl. Mae ITIL yn ei ddisgrifio fel deall a rheoli costau gwasanaethau, gan gynnwys cyllidebu, cyfrifyddu a chodi tâl. Mae FinOps yn arfer mwy newydd, a enwyd gan gymuned o ymarferwyr, sy'n dod ag atebolrwydd ariannol i wariant cwmwl trwy gydweithio rhwng timau peirianneg, cyllid a busnes. Mae'r pwnc hwn yn disgrifio'r ddau a sut maent yn ategu ei gilydd. Mae'n cysylltu â rheoli asedau (Pwnc 4.1 — Rheoli Asedau), rheoli lefelau gwasanaeth (Pwnc 3.7 — Rheoli Lefelau Gwasanaeth), ac economeg awtomeiddio ac AI (Pwnc 6.1 — Strategaeth Awtomeiddio a Phwnc 5.8 — Model Gweithredu a Sgiliau AI). Nid yw'n rhoi cyngor cyfrifyddu na threth.

## Cysyniadau craidd

**Costio gwasanaethau.** Gweithio allan beth mae'n ei gostio i ddarparu gwasanaeth: pobl, seilwaith, trwyddedau, cyflenwyr a gorbenion. Mae Wikipedia yn disgrifio cyfrifyddu costau, yr arfer ehangach o gofnodi a dadansoddi costau. Mae costau'n uniongyrchol (yn perthyn i un gwasanaeth) neu'n rhai a rennir (i'w dyrannu). Y nod yw amcangyfrif defnyddiadwy, nid un perffaith.

**Dyrannu costau.** Neilltuo costau a rennir i wasanaethau, timau neu gynhyrchion yn ôl rheol, fel nifer staff, defnydd neu gapasiti. Mae Wikipedia yn disgrifio dyrannu costau a chostio ar sail gweithgaredd, sy'n dyrannu cost yn ôl y gweithgareddau sy'n ei gyrru. Dylai rheol fod yn ddealladwy ac yn anodd ei dadlau; nid yw rheol berffaith yn werth dadl hir.

**Dangos a chodi tâl (showback a chargeback).** Mae showback yn adrodd costau i ddefnyddwyr heb eu bilio; mae chargeback yn eu bilio. Mae Wikipedia yn disgrifio chargeback a showback TG. Mae showback yn adeiladu ymwybyddiaeth gyda llai o ffrithiant. Mae chargeback yn creu cymhellion cryfach a mwy o weinyddu, a gall gynhyrchu dadleuon am ddyrannu. Mae llawer o sefydliadau'n dechrau gyda showback.

**Cyllidebu a rhagweld.** Cynllun o wariant disgwyliedig yw cyllideb; amcangyfrif wedi'i ddiweddaru o ble y bydd gwariant yn glanio yw rhagolwg. Mae Wikipedia yn disgrifio cyllidebau a rhagweld. Ar gyfer gwariant cwmwl ac AI newidiol, mae rhagolygon mynych a rhybuddion yn bwysicach na rhif blynyddol. Gweler Pwnc 2.10 — Rheolaeth a Dysgu Ystwyth am ariannu timau sefydlog.

**Gwariant cyfalaf a gweithredol.** Mae cyfrifyddu yn gwahaniaethu rhwng gwariant cyfalaf, sy'n prynu asedau y disgwylir iddynt bara, a threuliau gweithredol, sef cost o ddydd i ddydd. Mae Wikipedia yn disgrifio'r ddau. Mae cwmwl yn symud gwariant o gyfalaf i weithredol, sy'n effeithio ar gyllidebau ac adrodd; gofynnwch i gyllid sut mae eich sefydliad yn ei drin.

**Cyfanswm cost perchnogaeth.** Y gost dros oes gyfan ased neu wasanaeth, gan gynnwys prynu, rhedeg, cymorth a gwaredu. Mae Wikipedia yn disgrifio cyfanswm cost perchnogaeth. Mae'n atal dewis y pryniant rhataf a'r oes ddrutaf.

**Elw a gwerth.** Mae cost yn bwysig mewn perthynas â gwerth. Mae elw ar fuddsoddiad (ROI), gwerth presennol net, a mesurau tebyg yn cymharu buddion â chostau dros amser. Mae Wikipedia yn disgrifio elw ar fuddsoddiad a gwerth presennol net. Byddwch yn ofalus gyda buddion sy'n anodd eu mesur; nodwch ragdybiaethau ac ystodau.

**Cost cyfle a chost suddedig.** Cost cyfle yw gwerth y dewis amgen gorau a roddwyd i fyny. Gwariant na ellir ei adennill yw cost suddedig; ni ddylai yrru penderfyniadau yn y dyfodol, er ei fod yn aml yn gwneud hynny. Mae Wikipedia yn disgrifio'r ddau.

**FinOps.** Arfer, a chymuned, sy'n anelu at ddod ag atebolrwydd ariannol i wariant cwmwl newidiol. Nid oes gan Wikipedia erthygl ar wahân o dan yr enw hwnnw ar adeg ysgrifennu; mae Sefydliad FinOps (finops.org), rhan o'r Linux Foundation, yn cyhoeddi fframwaith a diffiniadau. Ei brif syniadau yw bod timau'n berchen ar eu defnydd a'u cost, bod penderfyniadau'n cael eu gyrru gan werth busnes technoleg, bod data'n amserol ac yn hygyrch, a bod grŵp canolog yn galluogi yn hytrach na phlismona.

**Cylch FinOps.** Mae disgrifiad cyffredin yn cynnwys tri cham ailadroddus: hysbysu (gwneud costau'n weladwy ac wedi'u dyrannu), optimeiddio (dod o hyd i arbedion a gweithredu arnynt), a gweithredu (ymgorffori'r arfer yn y ffordd y mae timau'n gweithio). Gwiriwch fframwaith cyfredol y Sefydliad am fanylion.

**Tagio a dyrannu yn y cwmwl.** Dim ond os yw adnoddau wedi'u labelu â pherchennog, gwasanaeth ac amgylchedd y mae data cost yn ddefnyddiol. Heb dagiau, ni ellir dyrannu biliau. Gorfodwch dagio wrth greu. Gweler Pwnc 4.4 — Rheoli Cyfluniad.

**Liferi optimeiddio.** Mae rhai cyffredin yn cynnwys maint cywir adnoddau, cau rhai segur, defnyddio gostyngiadau ymrwymiad ar gyfer llwythi sefydlog, dewis haenau storio rhatach, a newid pensaernïol. Mae arbedion yn dibynnu ar gyfaddawdau â dibynadwyedd ac ymdrech. Pwyswch bob un yn erbyn y lefel gwasanaeth y mae'n ei chefnogi. Gweler Pwnc 3.11 — Argaeledd, Capasiti a Pherfformiad.

**Costau uned.** Mae cost fesul trafodyn, fesul defnyddiwr, neu fesul cais yn cysylltu gwariant â gwerth. Os yw cyfanswm cost yn codi ond cost fesul trafodyn yn gostwng, gall twf esbonio hynny. Os yw cost fesul trafodyn yn codi, mae rhywbeth o'i le. Mae mesurau uned yn helpu mewn trafodaethau â chyllid a pherchnogion cynnyrch.

**Cost AI.** Mae llwythi gwaith AI yn ychwanegu costau ar gyfer hyfforddi, lletya a defnydd, a brisir yn aml yn ôl tocynnau (unedau o destun a brosesir), yn ôl amser cyfrifiadura ar galedwedd arbenigol fel unedau prosesu graffeg, neu yn ôl galwad. Mae Wikipedia yn disgrifio unedau prosesu graffeg a dysgu peirianyddol. Mae defnydd ynni hefyd yn gost ac yn bryder cynaliadwyedd. Tracwch gost fesul achos defnydd a fesul canlyniad. Gweler Pwnc 5.8 — Model Gweithredu a Sgiliau AI.

**Dyled dechnegol fel syniad ariannol.** Mae cynnal a chadw gohiriedig yn atebolrwydd â llog a delir mewn gwaith arafach a mwy o ddigwyddiadau. Mae Wikipedia yn disgrifio dyled dechnegol. Mae dangos ei chost mewn arian ac amser yn ei helpu i gystadlu am ariannu.

**Sut mae'r lensys yn ffitio.** Mae rheolaeth ariannol yn cefnogi ariannu ystwyth timau sefydlog. Gall AI helpu i ddadansoddi biliau a rhagweld, o dan adolygiad, ac mae'n gost i'w rheoli ei hun. Mae awtomeiddio yn cau adnoddau segur ac yn gorfodi tagiau. Mae dadansoddeg yn darparu'r data cost a gwerth.

## Arferion gorau

1. **Gwnewch gost yn weladwy i'r bobl sy'n penderfynu.** Dangoswch i bob tîm gost yr hyn y mae'n ei redeg, mewn amser agos at real, gyda dyraniad y maent yn ymddiried ynddo. Mae gwelededd yn newid ymddygiad yn fwy na pholisi.
2. **Tagiwch wrth greu a'i orfodi.** Mynnwch dagiau perchennog, gwasanaeth ac amgylchedd yn y biblinell. Adroddwch wariant heb dag a mynd ar ei ôl.
3. **Dechreuwch gyda showback.** Rhannwch gostau a gadewch i dimau ymateb cyn cyflwyno taliadau. Symudwch i chargeback dim ond os yw'r buddion yn cyfiawnhau'r ymdrech a'r dadleuon.
4. **Dyrannwch trwy reolau syml, y cytunwyd arnynt.** Dewiswch reolau y mae pobl yn eu deall, dogfennwch hwy, ac adolygwch hwy'n flynyddol. Peidiwch â threulio misoedd ar berffeithrwydd.
5. **Rhagwelwch yn aml a rhybuddiwch ar newid.** Ar gyfer gwariant newidiol, diweddarwch ragolygon yn fisol neu'n wythnosol, a gosodwch rybuddion cyllideb. Ymchwiliwch i syrpreisys yn gyflym.
6. **Gweithredwch ar yr arbedion amlwg.** Tynnwch adnoddau segur, maint cywir, a symudwch i haenau rhatach lle mae lefelau gwasanaeth yn caniatáu. Cofnodwch bob arbediad a'i gyfaddawd.
7. **Ymrwymwch lle mae'r llwyth gwaith yn sefydlog.** Ar gyfer defnydd cyson, ystyriwch ostyngiadau ymrwymiad ar ôl dadansoddi, ac adolygwch hwy. Osgowch ymrwymo ar gyfer llwythi gwaith ansicr.
8. **Defnyddiwch gostau uned.** Adroddwch gost fesul trafodyn, defnyddiwr, neu ganlyniad ochr yn ochr â chyfansymiau. Trafodwch newidiadau gyda pherchnogion cynnyrch.
9. **Cynhwyswch ddefnydd AI.** Mesurwch gost fesul achos defnydd AI, gan gynnwys defnydd, lletya a chymorth. Gosodwch derfynau a rhybuddion, ac adolygwch a yw pob defnydd yn werth ei gost.
10. **Pwyswch gost yn erbyn gwerth a risg.** Peidiwch â thorri'r hyn sy'n diogelu dibynadwyedd, diogelwch neu brofiad defnyddwyr heb ddewis ymwybodol. Dangoswch y cyfaddawdau i'r perchennog.

## Cwestiynau i'w trafod gyda'ch tîm

**Beth mae ein gwasanaeth pwysicaf yn ei gostio i'w redeg, a pha mor sicr ydym?**
Gofynnwch am ffigur a'i ddull. Disgwyliwch rifau bras a darnau coll. Dilynwch trwy ddewis un gwasanaeth ac adeiladu amcangyfrif gwell.

**Pa rai o'n costau cwmwl na allwn eu priodoli i dîm neu wasanaeth?**
Edrychwch ar wariant heb dag. Disgwyliwch gyfran sylweddol. Dilynwch trwy neilltuo'r eitemau mwyaf a gorfodi tagiau ar gyfer rhai newydd.

**Beth wnaethon ni wario arno ddiwethaf na fydden ni'n ei ddewis eto, a pham na sylwon ni?**
Mae hyn yn canfod bylchau gwelededd. Disgwyliwch adnoddau segur a thanysgrifiadau anghofiedig. Dilynwch trwy gytuno ar rybudd ac adolygiad misol.

**Sut rydym yn penderfynu a yw arbediad yn werth y risg i'r gwasanaeth?**
Gofynnwch am yr enghraifft ddiwethaf. Disgwyliwch na phwysodd neb hynny'n benodol. Dilynwch trwy gytuno pwy sy'n penderfynu, a pha wybodaeth sydd ei hangen arnynt.

**Beth mae ein defnydd AI yn ei gostio fesul achos defnydd, a phwy sy'n berchen ar y rhif?**
Gofynnwch am ddadansoddiad y bil. Disgwyliwch ffigurau cyfun neu anhysbys. Dilynwch trwy neilltuo perchennog cost ar gyfer pob prif ddefnydd AI a gosod terfyn.

**Sut mae cyllid, peirianneg a pherchnogion cynnyrch yn siarad am gost heddiw, a beth allai wella hynny?**
Disgrifiwch y cyfarfodydd. Disgwyliwch eu bod yn digwydd ar wahân. Dilynwch trwy drefnu adolygiad ar y cyd misol byr o'r prif gostau.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae llwyfan ffrydio darlledwr cenedlaethol yn rhedeg ar gwmwl cyhoeddus ac yn costio sawl gwaith yr hyn a gynlluniwyd. Mae'r tîm cyllid yn cael un anfoneb fisol ac yn gofyn i beirianneg "ei lleihau 15 y cant". Mae peirianwyr yn dweud bod traffig yn tyfu ac y byddai torri gwariant yn peryglu'r gwasanaeth yn ystod digwyddiadau byw.

Mae arweinydd y llwyfan yn gofyn am fis i adeiladu gwelededd. Mae'n gorfodi tagiau trwy reol y biblinell, ac ar gyfer adnoddau presennol yn neilltuo perchnogion gyda chymorth pob tîm. Mae gwariant heb dag yn gostwng o 38 y cant i 7 y cant. Gyda dyrannu ar waith, mae'n cynhyrchu adroddiad showback yn ôl tîm a gwasanaeth, ynghyd â chost fesul awr a ffrydiwyd. Mae'r adroddiad yn dangos bod cyfanswm y gost wedi codi 30 y cant dros y flwyddyn, tra bod cost fesul awr a ffrydiwyd wedi gostwng ychydig: twf, nid gwastraff, sy'n esbonio'r rhan fwyaf ohono. Mae hefyd yn dangos bod amgylcheddau datblygu a phrofi, sy'n rhedeg dros nos ac ar benwythnosau, yn cyfrif am 18 y cant o'r gwariant.

Mae'r tîm yn trefnu bod amgylcheddau nad ydynt yn gynhyrchu yn cau y tu allan i oriau gwaith, gan arbed tua dwy ran o dair o'u cost, ac yn cywiro maint set o gronfeydd data rhy fawr. Mae'n osgoi cyffwrdd â chapasiti digwyddiadau byw. Ar gyfer llwythi gwaith sylfaenol sefydlog, mae'n prynu gostyngiadau ymrwymiad ar ôl dadansoddiad defnydd tri mis. Caiff nodwedd isdeitlo â chymorth AI newydd ei holrhain ar wahân: mae ei chost fesul awr o fideo yn uwch na'r disgwyl, ac mae'r perchennog cynnyrch yn penderfynu ei chymhwyso gyntaf i newyddion byw yn unig.

Beth sy'n newid: mae cyllid a pheirianneg yn trafod cost fesul awr a ffrydiwyd, ac mae'r targed yn dod yn gost uned, nid toriad gwastad. Beth sy'n parhau'n anodd: mae data cost yn cyrraedd gydag oedi, felly gall defnyddiad gwael redeg am ddyddiau cyn iddo ddangos; mae dau dîm yn dadlau dyrannu costau llwyfan a rennir; ac mae'r ymrwymiadau'n lleihau hyblygrwydd os yw'r bensaernïaeth yn newid. Mae'r arweinydd yn trefnu adolygiad chwarterol o ymrwymiadau a nodyn byr ar sut y dyrennir costau a rennir.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Gwyddoch beth mae eich cynnyrch yn ei gostio, tagiwch yr hyn a grëwch, a chynhwyswch gost mewn dewisiadau dylunio. Gwyliwch gost fesul trafodyn, a dywedwch wrth y perchennog pan fydd nodwedd yn ei newid.

### Timau gwasanaeth a gweithrediadau

Tynnwch adnoddau segur, maint cywir gyda gofal am ddibynadwyedd, a rhybuddiwch ar gynnydd mewn cost. Dewch â data gweithredol i sgyrsiau cyllid.

### Arweinyddiaeth a llywodraethu

Gofynnwch am gostau uned a gwerth, nid cyfansymiau yn unig. Penderfynwch faint i'w ganoli. Ariennwch y gwaith gwelededd a thagio, a chefnogwch gyfaddawdau yn erbyn dibynadwyedd yn benodol.

### Cwsmeriaid a defnyddwyr

Os codir tâl arnoch, dylech weld beth sy'n gyrru'r gost a pha ddewisiadau sydd gennych. Gofynnwch am sail unrhyw ddyraniad, a dywedwch pa lefelau gwasanaeth rydych yn eu gwerthfawrogi.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Ariennwch dimau sefydlog, adolygwch gost gyda pherchnogion cynnyrch yn rheolaidd, a thrinwch gost fel un mewnbwn i flaenoriaethu. Rhybudd: peidiwch â gwneud torri costau yr unig darged; bydd timau'n torri'r hyn sy'n hawdd, fel profi a gwydnwch.

### AI

Gall AI ddadansoddi biliau, dod o hyd i anomaleddau ac adnoddau segur, a rhagweld gwariant, o dan adolygiad. Mae angen tracio cost, perchnogion a therfynau eu hunain ar lwythi gwaith AI. Rhybudd: gall cynorthwyydd AI sy'n argymell arbedion anwybyddu cyfyngiadau dibynadwyedd neu gontractiol; gwiriwch bob argymhelliad. Gweler Pwnc 5.8 — Model Gweithredu a Sgiliau AI.

### Awtomeiddio

Awtomeiddiwch orfodi tagiau, cau adnoddau segur, rhybuddion cyllideb ac adroddiadau, gydag eithriadau a logiau. Rhybudd: gall cau awtomatig ddileu neu stopio rhywbeth sydd ei angen; defnyddiwch amserlenni a chadarnhad perchennog ar gyfer adnoddau pwysig. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

### Dadansoddeg

Defnyddiwch gost a ddyrannwyd, cost uned, cywirdeb rhagolygon, cyfran heb dag, a defnydd ymrwymiad. Rhybudd: mae ffigurau showback yn dibynnu ar reolau dyrannu, ac mae arbedion optimeiddio yn aml yn cael eu gorddatgan; cymharwch ag anfonebau gwirioneddol. Gweler Pwnc 7.3 — Mesur ac Adrodd a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Un anfoneb gyfun.** Nid oes neb yn berchen ar y gost. Tagiwch, dyrannwch ac adroddwch yn ôl tîm.
- **Torri costau fel targed.** Mae dibynadwyedd yn dioddef. Pârwch gost â lefelau gwasanaeth a gwerth.
- **Ffraeo dyrannu.** Mae timau'n dadlau dros reolau. Dewiswch reolau syml ac adolygwch yn flynyddol.
- **Rhagweld unwaith y flwyddyn.** Mae gwariant newidiol yn synnu. Rhagwelwch yn aml a rhybuddiwch.
- **Ymrwymo'n rhy gynnar.** Mae gostyngiadau'n cloi'r capasiti anghywir. Dadansoddwch ddefnydd yn gyntaf.
- **Anwybyddu cost AI.** Mae defnydd yn tyfu heb ei weld. Tracwch fesul achos defnydd a gosodwch derfynau.
- **Dim cyswllt â gwerth.** Caiff gwariant ei dorri neu ei dyfu heb reswm. Defnyddiwch gostau uned a chanlyniadau.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Gwelededd | Cyfanswm yr anfoneb | Cost fesul cyfrif | Cost a ddyrannwyd fesul tîm a gwasanaeth gyda thagiau | Cost agos at amser real gyda rhybuddion anomaledd | Cost a gwerth yn weladwy ar draws darparwyr a chyflenwyr |
| Dyrannu | Dim | Bras | Rheolau syml wedi'u dogfennu | Rheolau'n cael eu hadolygu gyda pherchnogion | Dyrannu wedi'i integreiddio â chynllunio ac ariannu |
| Optimeiddio | Ad hoc | Canfuwyd rhai arbedion | Cylch optimeiddio rheolaidd | Arbedion yn cael eu holrhain yn erbyn cost wirioneddol | Optimeiddio'n awtomataidd gyda goruchwyliaeth |
| Cyswllt â gwerth | Heb ei gysylltu | Cyfansymiau'n cael eu trafod | Costau uned yn cael eu hadrodd | Costau uned a chanlyniadau'n cael eu hadolygu gyda pherchnogion | Cost, risg a gwerth wedi'u hoptimeiddio gyda'i gilydd |

## Rhestr wirio

- [ ] Rydym yn tagio adnoddau gyda pherchennog, gwasanaeth ac amgylchedd wrth eu creu.
- [ ] Mae timau'n gweld cost yr hyn y maent yn ei redeg.
- [ ] Mae rheolau dyrannu wedi'u hysgrifennu ac y cytunwyd arnynt.
- [ ] Mae rhagolygon yn cael eu diweddaru o leiaf yn fisol, gyda rhybuddion cyllideb.
- [ ] Rydym yn adolygu adnoddau segur a rhy fawr yn rheolaidd.
- [ ] Rydym yn adrodd costau uned ochr yn ochr â chyfansymiau.
- [ ] Mae defnydd a chost AI yn cael eu holrhain fesul achos defnydd, gyda therfynau.
- [ ] Caiff arbedion eu pwyso yn erbyn dibynadwyedd a'u cofnodi.

## Anogwyr AI

**Dod o hyd i anomaleddau mewn adroddiad cost.**

```text
Dyma adroddiad cost misol yn ôl gwasanaeth a thîm am y chwe mis diwethaf: [gludwch ddata].
Rhestrwch newidiadau o fwy na [canran] rhwng misoedd, y gwasanaethau dan sylw, ac un cwestiwn fesul newid i'w ofyn i'r perchennog. Peidiwch ag esbonio achosion nad ydynt yn y data.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio crynodeb showback ar gyfer tîm.**

```text
Tîm: [enw]. Dyma eu costau a'u defnydd am y mis: [gludwch]. Y mis blaenorol: [gludwch].
Ysgrifennwch grynodeb un dudalen mewn iaith syml: cyfanswm, newid, y tri phrif yrrwr cost, cost uned os rhoddir, a dau gwestiwn i'r tîm. Peidiwch ag argymell toriadau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Amcangyfrif cost achos defnydd AI.**

```text
Yr achos defnydd: [disgrifiwch]. Defnydd disgwyliedig: [nifer y ceisiadau y dydd, maint cyfartalog]. Prisio a roddwyd i ni: [gludwch].
Cyfrifwch ystod cost fisol gyda defnydd isel, disgwyliedig ac uchel, gan ddangos pob cam a rhagdybiaeth. Nodwch pa gostau y mae'r ffigurau yn eu gadael allan. Peidiwch â dyfeisio prisiau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): defnyddiwch i adeiladu a diweddaru rhagolygon gyda rhagdybiaethau a nodwyd.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): defnyddiwch i gymharu costau a buddion.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): defnyddiwch i adolygu gwariant ar draws cynhyrchion a gwasanaethau.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): defnyddiwch i reoli ymrwymiadau ac adnewyddiadau.

## Prif ffynonellau

- FinOps Foundation (finops.org): fframwaith, diffiniadau a deunydd achos y gymuned ar gyfer rheolaeth ariannol cwmwl.
- J.R. Storment and Mike Fuller, *Cloud FinOps* (2il argraffiad, 2023): canllaw ymarferwyr i'r arfer.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o'r arfer rheolaeth ariannol.
- Wikipedia, "Cost accounting" a "IT chargeback and showback": trosolygon o'r syniadau cyfrifyddu.

## Cyfeiriadau

1. Cost accounting — Wikipedia — https://en.wikipedia.org/wiki/Cost_accounting
2. IT chargeback and showback — Wikipedia — https://en.wikipedia.org/wiki/IT_chargeback_and_showback
3. Cost allocation — Wikipedia — https://en.wikipedia.org/wiki/Cost_allocation
4. Activity-based costing — Wikipedia — https://en.wikipedia.org/wiki/Activity-based_costing
5. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Net present value — Wikipedia — https://en.wikipedia.org/wiki/Net_present_value
8. Capital expenditure — Wikipedia — https://en.wikipedia.org/wiki/Capital_expenditure
9. Operating expense — Wikipedia — https://en.wikipedia.org/wiki/Operating_expense
10. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
11. FinOps Foundation — Linux Foundation — https://www.finops.org
