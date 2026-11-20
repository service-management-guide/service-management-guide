# Argaeledd, Capasiti a Pherfformiad

**Mae rheoli argaeledd, capasiti a pherfformiad yn cadw gwasanaeth yn ddefnyddiadwy, yn ddigon mawr ac yn ddigon cyflym ar gyfer y galw y mae'n ei wynebu; maent yn gweithio pan fydd targedau'n dod o anghenion defnyddwyr, risgiau'n cael eu dylunio allan trwy ddiangen a phrofi, a rhagolygon yn cael eu gwirio yn erbyn realiti yn hytrach na'u credu.**

## Pam mae hyn yn bwysig

Mae defnyddwyr yn barnu gwasanaeth ar dri pheth cyn unrhyw beth arall: a allaf ei ddefnyddio, a yw'n ymdopi pan fydd llawer o bobl yn ei ddefnyddio, ac a yw'n gyflym? Mae methiannau ar unrhyw un o'r rhain yn ymddangos fel gwaith a gollwyd, pryniannau a adawyd, a galwadau blin. Eto mae'r tri yn hawdd eu hesgeuluso tan ddiwrnod gwael: lansiad sy'n dyblu traffig, terfyn amser sy'n anfon pawb i'r system yn yr awr olaf, methiant cydran unigol yr oedd popeth yn dibynnu arni heb i neb sylweddoli.

Mae'r arferion hyn yn bodoli i osgoi'r dyddiau gwael hynny trwy feddwl amdanynt ymlaen llaw. Maent yn gofyn faint o fethiant y gall y gwasanaeth ei oddef a beth mae hynny'n ei gostio, faint o alw y mae'n rhaid iddo ei drin a sut y bydd y galw hwnnw'n tyfu, a pha mor gyflym y dylai ymateb. Maent yn ateb gyda dewisiadau dylunio fel diangen, gyda phrofion sy'n canfod terfynau cyn i ddefnyddwyr wneud, a chyda rhagolygon sy'n cael eu gwirio a'u diweddaru.

Mae ITIL 4 yn disgrifio tri arfer cysylltiedig: rheoli argaeledd, rheoli capasiti a pherfformiad, ac, yn agos gysylltiedig, rheoli parhad gwasanaeth (Pwnc 3.12 — Rheoli Parhad Gwasanaeth). Mae timau peirianneg yn eu cyfarfod fel peirianneg dibynadwyedd, peirianneg perfformiad a chynllunio capasiti, gan ddefnyddio SLOs a chyllidebau gwallau (Pwnc 2.6 — Peirianneg Dibynadwyedd Safleoedd). Mae'r pwnc hwn yn dod â'r syniadau ynghyd ac yn esbonio sut i'w defnyddio heb or-ddylunio (gold plating): nid yw mwy o argaeledd bob amser yn well, gan fod pob naw ychwanegol yn costio mwy. Mae'n cysylltu â rheoli lefelau gwasanaeth (Pwnc 3.7 — Rheoli Lefelau Gwasanaeth) a monitro (Pwnc 3.10 — Monitro a Rheoli Hysbysiadau).

## Cysyniadau craidd

**Argaeledd.** Gallu gwasanaeth i gyflawni ei swyddogaeth y cytunwyd arni pan fo'i hangen. Mae Wikipedia yn disgrifio argaeledd fel cyfran yr amser y mae system yn gweithredu. Fe'i mynegir fel arfer fel canran dros gyfnod, fel 99.9 y cant mewn mis, sy'n caniatáu tua 43 munud o amser segur. Dim ond pan fyddwch yn diffinio beth mae "gweithredu" yn ei olygu i ddefnyddwyr y mae'r ffigur yn ystyrlon.

**Dibynadwyedd a chynaladwyedd.** Dibynadwyedd yw am ba mor hir y mae gwasanaeth yn rhedeg heb fethiant; cynaladwyedd yw pa mor gyflym y gellir ei adfer. Mae argaeledd yn dibynnu ar y ddau. Mae erthyglau Wikipedia ar beirianneg dibynadwyedd ac ar yr amser cymedrig rhwng methiannau (MTBF) yn disgrifio'r mesurau. Mewn llawer o wasanaethau modern, mae adferiad cyflym yn fwy cyraeddadwy na methiant prin.

**Diangen a phwyntiau methiant unigol.** Mae diangen yn golygu cael cydrannau sbâr fel nad yw un methiant yn stopio'r gwasanaeth. Pwynt methiant unigol yw cydran y mae ei methiant yn stopio popeth. Mae erthyglau Wikipedia ar ddiangen ac ar bwyntiau methiant unigol yn disgrifio'r syniadau. Mae dod o hyd i bwyntiau methiant unigol, gan gynnwys pobl, cyflenwyr a thystysgrifau sy'n dod i ben, yn dasg argaeledd graidd.

**Goddefgarwch bai a dirywio gosgeiddig.** Mae system sy'n goddef bai yn parhau i weithio pan fydd rhannau'n methu; mae un sy'n dirywio'n osgeiddig yn colli rhywfaint o swyddogaeth ond yn cadw ei chraidd. Er enghraifft, gallai safle siopa analluogi argymhellion ond dal i brosesu archebion. Dyluniwch ar gyfer yr ail lle mae goddefgarwch llawn yn rhy gostus.

**Methu drosodd (failover).** Newid i gydran wrth gefn pan fydd y brif un yn methu. Dylid ei brofi; mae methu drosodd heb ei brofi yn aml yn methu pan fo ei angen. Gweler Pwnc 3.12 — Rheoli Parhad Gwasanaeth.

**Capasiti.** Y trwybwn mwyaf y gall gwasanaeth ei ddarparu. Mae rheoli capasiti yn sicrhau bod digon, ac nid llawer mwy na digon, i fodloni galw presennol a dyfodol am gost y cytunwyd arni. Mae erthygl Wikipedia ar gynllunio capasiti yn ei disgrifio.

**Galw.** Y llwyth a roddir ar y gwasanaeth: defnyddwyr, ceisiadau, cyfaint data. Mae galw'n amrywio yn ôl awr, diwrnod, tymor a digwyddiad, ac mae'n cael ei effeithio gan lansiadau, ymgyrchoedd a digwyddiadau allanol. Mae deall y patrwm yn bwysicach na'r cyfartaledd.

**Graddadwyedd a graddio awtomatig.** Y gallu i drin mwy o lwyth trwy ychwanegu adnoddau. Mae llwyfannau cwmwl yn caniatáu graddio awtomatig sy'n ychwanegu capasiti pan fydd llwyth yn codi. Mae'n helpu ond nid yw'n cael gwared ar yr angen i gynllunio: mae ganddo derfynau, mae'n costio arian, ac nid yw'n trwsio cronfa ddata na all raddio. Gweler Pwnc 4.5 — Rheolaeth Ariannol a FinOps.

**Perfformiad.** Pa mor gyflym ac effeithlon y mae'r gwasanaeth yn ymateb. Mesurau cyffredin yw hwyrni (pa mor hir y mae cais yn ei gymryd), trwybwn (faint o geisiadau a drinnir), a chyfradd gwallau. Mae Wikipedia yn disgrifio hwyrni mewn peirianneg. Mae defnyddwyr yn sylwi ar y gynffon araf, felly edrychwch ar ganraddau, fel y 95fed, nid dim ond y cyfartaledd. Gweler Pwnc 3.7 — Rheoli Lefelau Gwasanaeth.

**Ciwio a dirlawnder.** Wrth i system nesáu at ddefnydd llawn, mae amser aros yn tyfu'n sydyn. Mae damcaniaeth ciwio, a ddisgrifir ar Wikipedia, yn esbonio pam mae gwasanaeth yn rhedeg ar 95 y cant o gapasiti yn teimlo'n wahanol iawn i un ar 60 y cant. Gadewch le i symud.

**Peirianneg perfformiad a phrofi.** Dylunio a phrofi ar gyfer perfformiad drwy gydol datblygu, nid yn unig ar y diwedd. Mae profi llwyth yn cymhwyso'r galw disgwyliedig; mae profi straen yn gwthio heibio iddo i ddod o hyd i bwyntiau torri. Mae Wikipedia yn disgrifio'r ddau. Profwch mewn amgylchedd sy'n debyg i gynhyrchu, â data realistig.

**Rhagweld.** Amcangyfrif galw yn y dyfodol o hanes, digwyddiadau hysbys a thwf. Mae Wikipedia yn disgrifio dulliau rhagweld. Mae rhagolygon yn ansicr: cofnodwch ragdybiaethau, dangoswch ystodau, a chymharwch ragfynegiadau â'r hyn sy'n digwydd. Gweler Pwnc 7.5 — Dadansoddeg Ragfynegol a Rhagweld.

**Cyfaddawdau cost.** Mae pob cynnydd mewn argaeledd neu gapasiti yn costio arian. Mae'r lefel gywir yn dibynnu ar gost methiant ac arafwch i'r busnes. Gwnewch y cyfaddawd yn eglur gyda'r bobl sy'n talu, ac ysgrifennwch ef.

**Sut mae'r lensys yn ffitio.** Mae arfer ystwyth yn trin gwaith dibynadwyedd fel rhan o'r ôl-groniad ac yn profi'n gynnar ac yn aml. Gall AI ganfod anomaleddau a chefnogi rhagweld o dan adolygiad. Mae awtomeiddio yn graddio adnoddau ac yn methu drosodd. Mae dadansoddeg yn darparu'r data ar gyfer pob un o'r tri arfer.

## Arferion gorau

1. **Gosodwch dargedau argaeledd o angen defnyddwyr.** Gofynnwch beth sy'n digwydd pan fo'r gwasanaeth i lawr am awr, diwrnod, wythnos. Gosodwch darged, a chost, sy'n cyfateb. Ysgrifennwch y diffiniad o "ar gael" o safbwynt y defnyddiwr.
2. **Dewch o hyd i bwyntiau methiant unigol.** Mapiwch gydrannau a dibyniaethau gwasanaethau pwysig, a gofynnwch beth sy'n digwydd os bydd pob un yn methu. Cynhwyswch dystysgrifau, trwyddedau, pobl a chyflenwyr.
3. **Dyluniwch ar gyfer methiant.** Defnyddiwch ddiangen lle mae'r gost yn gyfiawn, gwnewch gydrannau'n methu'n annibynnol, a phenderfynwch beth y gellir ei ddiffodd i warchod y craidd.
4. **Profwch fethu drosodd ac adfer.** Ymarferwch fethu drosodd mewn amgylchedd diogel, a chofnodwch yr amser y maent yn ei gymryd. Trwsiwch yr hyn y mae'r ymarfer yn ei ddatgelu.
5. **Gwyddoch eich patrwm galw.** Casglwch ddata llwyth yn ôl awr, diwrnod a thymor, a rhestrwch ddigwyddiadau hysbys i ddod fel lansiadau a therfynau amser. Cynlluniwch ar gyfer uchafbwyntiau, nid cyfartaleddau.
6. **Gadewch le i symud.** Peidiwch â rhedeg cydrannau pwysig ger capasiti llawn. Gosodwch drothwyon rhybudd sy'n rhybuddio mewn pryd i weithredu.
7. **Profwch berfformiad cyn i ddefnyddwyr wneud.** Rhedwch brofion llwyth a straen yn erbyn senarios realistig cyn rhyddhau mawr ac o flaen uchafbwyntiau hysbys. Dysgwch ble mae'r system yn torri.
8. **Rhagwelwch a gwiriwch.** Gwnewch ragolwg gyda'i ragdybiaethau, adolygwch ef yn rheolaidd yn erbyn y gwir, ac addaswch. Rhannwch ystodau, nid rhifau sengl.
9. **Gwyliwch y gynffon.** Adroddwch hwyrni canraddol a chyfraddau gwallau, ac ymchwiliwch i'r ceisiadau arafaf. Mae cyfartaleddau'n cuddio profiad defnyddwyr anlwcus.
10. **Pwyswch gost a risg yn agored.** Dangoswch i berchnogion gost pob lefel o argaeledd a chapasiti, a chofnodwch y penderfyniad a phwy a'i gwnaeth.

## Cwestiynau i'w trafod gyda'ch tîm

**Beth fyddai ein defnyddwyr yn ei golli pe bai'r gwasanaeth hwn i lawr am awr, ac a yw ein targed yn cyfateb?**
Mae hyn yn clymu targedau wrth effaith. Disgwyliwch fod gwahanol ddefnyddwyr yn rhoi gwahanol atebion. Gofynnwch am enghreifftiau go iawn. Dilynwch trwy ysgrifennu'r targed gyda chost a'i wirio gyda chwsmer.

**Beth yw ein pwyntiau methiant unigol, gan gynnwys y rhai nad ydynt yn beiriannau?**
Tynnwch lun o'r dibyniaethau ar gyfer un gwasanaeth critigol. Disgwyliwch bethau annisgwyl: tystysgrif nad oes neb yn ei holrhain, un peiriannydd, cyflenwr heb gopi wrth gefn. Dilynwch trwy ddewis un i'w leihau.

**Pryd wnaethon ni brofi methu drosodd ddiwethaf, a beth ddigwyddodd?**
Gofynnwch am y dyddiad a'r canlyniad. Disgwyliwch "byth" neu "fe weithiodd yn yr amgylchedd prawf". Dilynwch trwy gynllunio ymarfer gydag amser adfer a nodwyd.

**Beth yw awr brysuraf y flwyddyn ar gyfer y gwasanaeth hwn, ac a ydym yn barod ar ei chyfer?**
Meddyliwch am derfynau amser, lansiadau a gwerthiannau. Gofynnwch beth ddigwyddodd y tro diwethaf. Dilynwch trwy gynllunio prawf llwyth ar gyfer yr uchafbwynt nesaf.

**Pa mor gywir oedd ein tri rhagolwg capasiti diwethaf?**
Mae hyn yn profi dysgu. Disgwyliwch nad oedd neb wedi gwirio. Cymharwch y rhagolygon â'r gwir. Dilynwch trwy gytuno ar gylch adolygu a chofnodi rhagdybiaethau.

**Sut y gallai AI helpu i ragweld galw neu ganfod problemau'n gynnar, a sut y byddem yn gwybod ei fod yn anghywir?**
Gall AI ddod o hyd i batrymau mewn telemetreg. Gall hefyd ffitio sŵn. Gofynnwch pwy sy'n berchen arno a beth fydd yn cael ei gymharu ag ef. Dilynwch trwy redeg rhagolwg AI ochr yn ochr â'r dull presennol am chwarter.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae asiantaeth benthyciadau myfyrwyr genedlaethol yn rhedeg porth ceisiadau. Y rhan fwyaf o'r flwyddyn mae'n trin ychydig filoedd o ddefnyddwyr y dydd. Yn y ddau ddiwrnod olaf cyn y terfyn amser ceisiadau blynyddol, mae'n trin ymhell dros gant gwaith cymaint. Ddwy flynedd yn ôl, fe chwalodd ar y noson olaf; y llynedd fe oroesodd gyda graddio brys a noson o oramser.

Mae perchennog y gwasanaeth yn dechrau ym mis Ionawr, ymhell o flaen y terfyn amser nesaf. Mae'n gofyn am y data traffig ar gyfer y tair blynedd diwethaf, awr wrth awr, ac yn canfod siâp cyson: cynnydd araf dros yr wythnos olaf, cynnydd sydyn ar y diwrnod olaf, ac uchafbwynt yn y tair awr olaf. Mae'n gofyn i'r tîm nodi pwyntiau methiant unigol. Maent yn canfod bod y porth yn dibynnu ar wasanaeth gwirio hunaniaeth a redir gan gyflenwr â therfyn cyfradd sefydlog, a fyddai'n cyfyngu trwybwn i tua hanner yr uchafbwynt disgwyliedig.

Mae'r tîm yn gwneud tri pheth. Mae'n negodi terfyn cyfradd uwch gyda'r cyflenwr ac yn cael cynnydd dros dro ar gyfer yr wythnos olaf. Mae'n rhedeg profion llwyth ym mis Mawrth a mis Mehefin gan ddefnyddio patrwm y llynedd ynghyd â 30 y cant, ac yn canfod mai'r gronfa ddata yw'r dagfa ar tua 70 y cant o'r uchafbwynt disgwyliedig, y mae'n ei thrwsio trwy ychwanegu atgynhyrchiad darllen a storio ychydig o ymholiadau drud dros dro. Ac mae'n paratoi modd dirywiedig: ar y diwrnod olaf, caiff nodweddion nad ydynt yn hanfodol fel y cyfrifiannell cynilion eu diffodd os yw'r llwyth yn pasio trothwy.

Ar ddiwrnod y terfyn amser, mae'r porth yn trin yr uchafbwynt. Mae'r gwasanaeth hunaniaeth yn arafu yn yr awr brysuraf ond nid yw'n methu, a chaiff y modd dirywiedig ei actifadu unwaith, am 40 munud. Beth sy'n newid: dim ymyriad a dim argyfwng goramser. Beth sy'n parhau'n anodd: mae terfyn y cyflenwr yn fater contract sy'n ailosod bob blwyddyn; roedd y rhagolwg o gynnydd o 30 y cant yn rhagdybiaeth, a'r cynnydd gwirioneddol oedd 22 y cant, felly efallai bod y tîm wedi gorwario; ac nid oes neb wedi profi methiant rhanbarth cyflawn, a fyddai'n dal i atal y gwasanaeth. Mae'r perchennog yn cofnodi'r rhain yng nghynllun y flwyddyn nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Dyluniwch ar gyfer methiant ac ar gyfer llwyth: gwnewch gydrannau'n annibynnol, profwch berfformiad wrth i chi adeiladu, a gwyddoch eich terfynau. Cynhwyswch foddau dirywiedig a therfynau cyfradd yn y dyluniad.

### Timau gwasanaeth a gweithrediadau

Gwyddoch y patrwm galw a'r lle i symud capasiti. Ymarferwch fethu drosodd, gwyliwch y gynffon araf, a rhybuddiwch yn gynnar am dueddiadau. Cadwch y map dibyniaethau'n gyfredol.

### Arweinyddiaeth a llywodraethu

Penderfynwch lefelau argaeledd a chapasiti gyda llygad ar gost a risg, a gofynnwch am y dystiolaeth y tu ôl iddynt. Ariennwch brofi ac ymarfer, nid dim ond offer. Byddwch yn effro i uchafbwyntiau hysbys.

### Cwsmeriaid a defnyddwyr

Dywedwch wrth y darparwr am eich cyfnodau prysuraf a beth mae methiant yn ei gostio i chi. Gofynnwch pa lefel o argaeledd a gynlluniwyd a beth sy'n digwydd pan gaiff ei methu.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Cynhwyswch waith dibynadwyedd a pherfformiad yn yr ôl-groniad, profwch yn gynnar ac yn aml yn y biblinell, a dysgwch o bob digwyddiad ac uchafbwynt. Rhybudd: mae gwthio dibynadwyedd i "yn nes ymlaen" yn adeiladu dyled sy'n dod i'r wyneb ar yr adeg waethaf.

### AI

Gall AI ganfod anomaleddau, rhagweld galw o hanes a digwyddiadau, ac awgrymu camau graddio, gyda pherchnogion a phenderfyniadau dynol ar gost a risg. Rhybudd: gall model a hyfforddwyd ar ddyddiau normal fethu ar ddigwyddiadau digynsail; cymharwch ef â llinellau sylfaen syml a chadwch unigolyn yn atebol. Gweler Pwnc 5.2 — AIOps.

### Awtomeiddio

Awtomeiddiwch raddio, methu drosodd, gwiriadau iechyd, a phrofion llwyth yn y biblinell, gyda therfynau a logiau. Rhybudd: gall graddio awtomatig chwyddo costau neu guddio rhyddhad diffygiol; gosodwch gyllidebau a rhybuddion, a phrofwch y rheolau graddio. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

### Dadansoddeg

Casglwch alw, defnydd, canraddau hwyrni, cyfraddau gwallau a chywirdeb rhagolygon. Rhybudd: gellir camddefnyddio targedau defnydd trwy symud llwyth, ac mae cyfartaleddau'n cuddio'r gynffon araf; gwiriwch â data profiad defnyddwyr. Gweler Pwnc 7.5 — Dadansoddeg Ragfynegol a Rhagweld a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Targedau o arfer.** Addewir "pum naw" heb reswm. Gosodwch dargedau o angen defnyddwyr a chost.
- **Pwyntiau methiant unigol cudd.** Mae tystysgrif neu berson yn atal popeth. Mapiwch ddibyniaethau'n eang.
- **Methu drosodd heb ei brofi.** Mae'n methu pan fo ei angen. Ymarferwch yn rheolaidd.
- **Cynllunio ar gyfer cyfartaleddau.** Mae uchafbwyntiau'n llethu'r system. Cynlluniwch ar gyfer uchafbwyntiau hysbys a gadewch le i symud.
- **Rhagolygon byth yn cael eu gwirio.** Mae gwallau'n ailadrodd. Cymharwch ragfynegiadau â'r gwir.
- **Graddio awtomatig fel ateb i bopeth.** Mae costau a thagfeydd yn parhau. Profwch derfynau a gosodwch gyllidebau.
- **Cyfartaleddau yn unig.** Anwybyddir y gynffon araf. Adroddwch ganraddau.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Argaeledd | Adweithiol | Targedau ar gyfer gwasanaethau allweddol | Targedau, diangen, a methu drosodd wedi'u profi | Argaeledd yn cael ei fesur yn erbyn profiad defnyddwyr | Argaeledd wedi'i ddylunio a'i reoli ar draws gwasanaethau a chyflenwyr |
| Capasiti | Yn cael ei ychwanegu pan fydd yn rhedeg allan | Monitro sylfaenol | Patrymau galw'n hysbys ac yn cael eu rhagweld gyda rhagdybiaethau | Cywirdeb rhagolygon yn cael ei adolygu | Capasiti'n cael ei gynllunio a'i addasu'n awtomatig gyda goruchwyliaeth |
| Perfformiad | Cwynion yn unig | Rhai mesurau | Targedau canraddol a phrofion llwyth cyn rhyddhau | Tueddiadau perfformiad ac atchweliadau yn cael eu holrhain | Perfformiad wedi'i beiriannu ar draws y cylch bywyd |
| Ymwybyddiaeth o gost | Anhysbys | Yn hysbys yn fras | Cyfaddawdau wedi'u dogfennu gyda pherchnogion | Cost a risg yn cael eu hadolygu'n rheolaidd | Cost, risg a dibynadwyedd wedi'u optimeiddio gyda'i gilydd |

## Rhestr wirio

- [ ] Mae targedau argaeledd yn seiliedig ar angen defnyddwyr a chost, gyda diffiniad clir.
- [ ] Mae pwyntiau methiant unigol ar gyfer gwasanaethau pwysig wedi'u mapio a'u holrhain.
- [ ] Mae methu drosodd wedi'i ymarfer a'i amseru.
- [ ] Rydym yn gwybod ein patrwm galw ac uchafbwyntiau i ddod.
- [ ] Rydym yn rhedeg profion llwyth cyn rhyddhau mawr ac uchafbwyntiau hysbys.
- [ ] Mae rhagolygon yn cofnodi rhagdybiaethau ac yn cael eu gwirio yn erbyn y gwir.
- [ ] Rydym yn adrodd hwyrni canraddol a chyfraddau gwallau.
- [ ] Mae cyfaddawdau cost a risg yn cael eu cofnodi gyda pherchnogion.

## Anogwyr AI

**Dod o hyd i bwyntiau methiant unigol.**

```text
Dyma ddisgrifiad o sut mae [gwasanaeth] yn gweithio a beth mae'n dibynnu arno: [gludwch].
Rhestrwch bob cydran a dibyniaeth, ac ar gyfer pob un dywedwch beth mae'r disgrifiad yn ei awgrymu fyddai'n digwydd pe bai'n methu, neu "heb ei nodi". Nodwch bwyntiau methiant unigol ymgeisiol a chwestiynau i'w gofyn. Peidiwch â thybio diangen nad yw wedi'i ddisgrifio.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Crynhoi patrymau galw.**

```text
Dyma ddata ceisiadau fesul awr ar gyfer [cyfnod]: [gludwch grynodeb neu ddata].
Disgrifiwch y patrymau dyddiol, wythnosol a thymhorol y gallwch eu gweld, rhowch y gymhareb uchafbwynt i gyfartaledd, a rhestrwch ddyddiadau sy'n edrych yn anarferol. Peidiwch â rhagweld.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio cynllun prawf llwyth.**

```text
Ein gwasanaeth: [disgrifiwch]. Uchafbwynt disgwyliedig: [rhif a phatrwm]. Terfynau neu bryderon hysbys: [rhestrwch].
Drafftiwch gynllun prawf gyda senarios, lefelau llwyth, beth i'w fesur, beth fyddai'n gwneud i ni stopio, a risgiau profi. Nodwch ei fod yn cael ei redeg mewn amgylchedd diogel yn unig.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): defnyddiwch i ragweld galw a chynllunio adnoddau.
- [load-testing](../../../../skills/load-testing/SKILL.md): defnyddiwch i ddylunio a rhedeg profion llwyth.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): defnyddiwch i archwilio cyflymder ac ymatebolrwydd.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): defnyddiwch i amcangyfrif galw yn y dyfodol gydag ansicrwydd a nodwyd.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): defnyddiwch i brofi sut mae methiannau'n lledaenu.

## Prif ffynonellau

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016): penodau ar drin gorlwytho a chydbwyso llwyth, am ddim yn sre.google.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o arferion argaeledd a chapasiti.
- Wikipedia, "High availability" a "Capacity planning": trosolygon o'r prif syniadau.
- Wikipedia, "Queueing theory": y fathemateg y tu ôl i aros a dirlawnder.

## Cyfeiriadau

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
