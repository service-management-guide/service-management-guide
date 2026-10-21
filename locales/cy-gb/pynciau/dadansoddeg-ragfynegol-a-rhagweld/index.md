# Dadansoddeg Ragfynegol a Rhagweld

**Mae rhagolygon a rhagfynegiadau o alw, capasiti, digwyddiadau a risg newid yn helpu timau i baratoi, ond maent yn ansicr o'u natur; defnyddiwch linellau sylfaen syml yn gyntaf, dangoswch ystodau yn hytrach nag un rhif, dilyswch yn erbyn data a gedwir yn ôl, monitrwch am ddrifft, a gwnewch y rheol benderfynu yn eglur cyn gwneud y rhagolwg.**

## Pam mae hyn yn bwysig

Mae timau gwasanaeth bob amser yn paratoi ar gyfer rhywbeth. Faint o gysylltiadau fydd yn cyrraedd yn wythnos gyntaf y tymor newydd? Pryd fydd y storfa'n llenwi? Pa newidiadau sy'n debygol o achosi digwyddiadau? Faint o bobl ddylai fod ar alwad yn ystod y gwerthiant? Mae penderfyniadau am staff, capasiti a risg i gyd yn gorffwys ar gredoau am y dyfodol, pa un a yw rhywun yn eu datgan ai peidio.

Mae rhagfynegi yn gwneud y credoau hynny'n eglur ac yn brofadwy. Gellir cymharu rhagolwg o gyfaint tocynnau'r mis nesaf, gydag ystod, â'r hyn sy'n digwydd a'i wella. Gellir gwirio model sy'n sgorio risg newid yn erbyn y newidiadau a fethodd. O'i wneud yn dda, mae hyn yn disodli teimlad greddfol â thystiolaeth. O'i wneud yn wael, mae'n disodli teimlad greddfol â hyder ffug: un rhif i ddau le degol, a gynhyrchwyd gan fodel na all neb ei egluro, yr ymddiriedir ynddo oherwydd ei fod yn edrych yn wyddonol.

Mae rhagfynegiadau'n mynd o chwith am resymau cyffredin. Nid oedd y patrwm sy'n bwysig yn y gorffennol. Mae'r model yn ffitio sŵn. Mae lansiad, newid polisi, neu doriad yn torri'r berthynas a ddysgodd y model. Rhagwelir digwyddiad prin gydag offeryn a adeiladwyd ar gyfer rhai cyffredin. Mae'r pwnc hwn yn disgrifio'r prif fathau o ragweld a rhagfynegi mewn rheoli gwasanaethau, y dulliau mewn termau plaen, a'r arferion sy'n eu cadw'n onest. Mae'n adeiladu ar ddadansoddeg (Pwnc 7.1 — Dadansoddeg ar gyfer Rheoli Gwasanaethau) a chynllunio capasiti (Pwnc 3.11 — Argaeledd, Capasiti a Pherfformiad), ac yn perthyn i AIOps (Pwnc 5.2 — AIOps) ac economeg cwmwl (Pwnc 4.5 — Rheolaeth Ariannol a FinOps).

## Cysyniadau craidd

**Rhagweld a rhagfynegi.** Mae rhagweld yn amcangyfrif gwerthoedd dyfodol maint dros amser, fel galw y mis nesaf. Mae rhagfynegi, yn ehangach, yn amcangyfrif anhysbys, fel a fydd newid yn methu. Mae Wikipedia yn disgrifio rhagweld a dadansoddeg ragfynegol. Mae'r ddau'n defnyddio patrymau mewn data'r gorffennol, ac mae'r ddau'n ansicr.

**Cyfresi amser.** Data a gofnodir ar gyfnodau rheolaidd. Mae Wikipedia yn disgrifio dadansoddi cyfresi amser. Mae llawer o feintiau gwasanaeth, fel cyfrif tocynnau dyddiol, yn gyfresi amser gyda thuedd (cynnydd neu ostyngiad hirdymor), tymhorolrwydd (cylchoedd rheolaidd, fel wythnosol neu flynyddol), a sŵn. Mae Wikipedia yn disgrifio tymhorolrwydd. Mae angen i ragolygon ystyried y tri.

**Llinellau sylfaen.** Y rhagolwg symlaf a allai weithio: "bydd yr wythnos nesaf fel yr wythnos hon", neu "bydd y mis hwn fel yr un mis y llynedd, wedi'i addasu ar gyfer twf". Mae llinellau sylfaen yn syndod o anodd eu curo. Cymharwch ddull soffistigedig â llinell sylfaen bob amser; os nad yw'n gwneud yn amlwg well, defnyddiwch y llinell sylfaen.

**Dulliau clasurol.** Mae technegau fel llyfnu esbonyddol a modelau cyfartaledd symudol cyfanrannol hunan-atchweliadol (ARIMA), y mae Wikipedia yn eu disgrifio, yn trin tueddiadau a thymhorolrwydd ar gyfer llawer o gyfresi ac yn aml yn anodd eu curo gydag offer mwy cymhleth. Maent hefyd yn haws eu hegluro.

**Dulliau dysgu peirianyddol.** Gall dulliau sy'n dysgu patrymau o lawer o newidynnau, fel coed atchweliad neu rwydweithiau niwral, ddefnyddio gwybodaeth ychwanegol, fel digwyddiadau a gynlluniwyd. Mae Wikipedia yn disgrifio dadansoddi atchweliad a dysgu peirianyddol yn gyffredinol. Gallant wneud yn dda pan fo digonedd o ddata perthnasol a gallant orffitio pan nad oes. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

**Gorffitio a dilysu.** Mae model sy'n cyfateb i'r gorffennol yn rhy agos, gan gynnwys ei sŵn, yn perfformio'n wael ar ddata newydd. Mae Wikipedia yn disgrifio gorffitio. Yr amddiffyniad yw cadw data nad oedd y model wedi'i weld yn ôl, mewn setiau hyfforddi, dilysu a phrofi ar wahân, fel y mae Wikipedia yn ei ddisgrifio, a phrofi ar gyfnodau diweddarach na'r rhai a ddefnyddiwyd i adeiladu'r model. Ar gyfer cyfresi amser, gelwir hyn yn ôl-brofi; mae Wikipedia yn ei ddisgrifio.

**Gollyngiad.** Defnyddio gwybodaeth yn y model na fyddai ar gael ar adeg y rhagfynegi, fel maes a lenwir ar ôl i ddigwyddiad gael ei ddatrys. Mae Wikipedia yn disgrifio gollyngiad mewn dysgu peirianyddol. Mae'n cynhyrchu canlyniadau prawf trawiadol a rhagolygon diwerth.

**Ansicrwydd a chyfyngau.** Mae rhagolwg yn ddosraniad o bosibiliadau, nid rhif. Mae cyfwng rhagfynegi, a ddisgrifir ar Wikipedia, yn rhoi ystod a ddisgwylir i gynnwys y canlyniad gyda thebygolrwydd penodol. Adroddwch ystodau, fel "rhwng 8,000 a 9,500 o gysylltiadau, mwyaf tebygol 8,700". Mae dulliau Monte Carlo, a ddisgrifir ar Wikipedia, yn efelychu llawer o ddyfodol posibl i ddangos ystod.

**Senarios.** Ar gyfer pethau sy'n dibynnu ar benderfyniadau neu ddigwyddiadau, fel lansiad, mae cynllunio senarios, a ddisgrifir ar Wikipedia, yn datblygu ychydig o straeon credadwy ac yn cynllunio ar gyfer pob un, yn hytrach nag un rhagolwg. Defnyddiwch senarios pan allai'r dyfodol fod yn wahanol o ran natur i'r gorffennol.

**Mesurau cywirdeb.** Mae mesurau cyffredin yn cymharu rhagolygon â chanlyniadau, fel gwall canran absoliwt cymedrig, y mae Wikipedia yn ei ddisgrifio, a chyfran y canlyniadau sy'n syrthio yn yr ystod a nodir. Mae gan bob un wendidau: mae gwall canran yn ansefydlog pan fo gwerthoedd yn agos at sero. Dewiswch fesurau sy'n cyfateb i sut mae gwallau'n costio i chi.

**Dosbarthu a sgorau risg.** Mae rhagfynegi a fydd rhywbeth yn digwydd, fel newid yn methu neu docyn yn torri ei darged, yn cynhyrchu sgôr. Mae Wikipedia yn disgrifio manwl gywirdeb a galw i gof, y ddwy ffordd y gall rhagfynegiadau o'r fath fod yn anghywir: rhybuddion ffug a cholli. Mae digwyddiadau prin yn gwneud hyn yn anodd: mae Wikipedia yn disgrifio'r camsyniad cyfradd sylfaenol, lle mae canfodydd sy'n ymddangos yn dda yn cynhyrchu rhybuddion ffug yn bennaf pan fo'r digwyddiad yn brin. Penderfynwch gostau pob math o wall cyn dewis trothwy.

**Graddnodi.** Mae sgôr risg wedi'i graddnodi os, ymhlith eitemau a sgoriwyd 20 y cant, bod tua 20 y cant yn digwydd mewn gwirionedd. Mae Wikipedia yn disgrifio graddnodi mewn ystadegau. Gall sgôr sy'n graddio'n dda ond nad yw wedi'i graddnodi gamarwain pobl sy'n ei ddarllen fel tebygolrwydd.

**Drifft.** Mae perthnasoedd yn newid wrth i wasanaethau, defnyddwyr ac offer newid. Mae Wikipedia yn disgrifio drifft cysyniad. Gall model a weithiodd y llynedd fethu ar ôl lansiad cynnyrch newydd. Monitrwch gywirdeb dros amser, ac ailhyfforddwch neu ailadeiladwch pan fydd yn gostwng.

**Digwyddiadau prin ac eithafol.** Mae modelau a hyfforddwyd ar hanes cyffredin yn gwneud yn wael ar ddigwyddiadau sy'n anarferol iawn. Mae Wikipedia yn disgrifio damcaniaeth yr alarch du, y syniad nad yw digwyddiadau prin, effaith uchel yn rhagweladwy o ddata cyffredin. Peidiwch â dibynnu ar ragolygon ar gyfer risgiau cynffon; defnyddiwch senarios, profion straen ac ymarferion. Gweler Pwnc 3.12 — Rheoli Parhad Gwasanaeth.

**Ciwio a chapasiti.** Mae rhagolwg galw yn bwydo penderfyniadau capasiti. Mae damcaniaeth ciwio a chyfraith Little, y mae Wikipedia yn eu disgrifio, yn cysylltu galw, capasiti ac aros. Gweler Pwnc 3.11 — Argaeledd, Capasiti a Pherfformiad a Phwnc 2.3 — Llif a Kanban.

**Penderfyniadau yn gyntaf.** Mae rhagolwg yn ddefnyddiol dim ond os yw'n newid penderfyniad. Cyn adeiladu un, ysgrifennwch y penderfyniad y mae'n ei lywio, y trothwyon gweithredu, a'r hyn y byddwch yn ei wneud ar bob un. Os na fyddai dim yn newid, peidiwch â rhagweld.

**Barn ddynol.** Mae pobl yn gwybod am lansiadau, newidiadau polisi a digwyddiadau nad oes unrhyw fodel wedi'u gweld. Cyfunwch allbwn model â barn, cofnodwch yr addasiadau, a gwiriwch yn ddiweddarach a wnaethant helpu.

**Sut mae'r lensys yn ffitio.** Rhagfynegi yw ochr dadansoddeg sy'n edrych ymlaen. Mae arfer ystwyth yn trin rhagolwg fel damcaniaeth, wedi'i hadnewyddu'n aml. Mae technegau AI yn ymestyn yr hyn y gellir ei ragfynegi, dan adolygiad a chyda'r rhybuddion uchod. Gall awtomeiddio weithredu ar ragfynegiadau, fel graddio o flaen galw, gyda therfynau.

## Arferion gorau

1. **Nodwch y penderfyniad a'r trothwyon yn gyntaf.** Ysgrifennwch pa weithred y byddai pob ystod o ragolwg yn ei sbarduno, a phwy sy'n penderfynu. Hepgorwch ragolygon na fyddent yn newid dim.
2. **Dechreuwch â llinell sylfaen.** Adeiladwch ragolwg syml, fel patrwm y llynedd wedi'i addasu ar gyfer twf, a mesurwch ei wall. Defnyddiwch ef fel y bar i'w guro.
3. **Ffafriwch ddulliau y gallwch eu hegluro.** Defnyddiwch ddulliau clasurol neu fodelau syml oni bai bod rhai cymhleth yn amlwg yn well ar ddata a gedwir yn ôl. Dylech allu dweud, mewn geiriau plaen, beth sy'n gyrru'r rhagolwg.
4. **Dilyswch yn onest.** Cadwch y cyfnod diweddaraf yn ôl, ôl-brofwch ar draws sawl cyfnod, a gwiriwch am ollyngiad. Adroddwch y gwall ar ddata na welodd y model.
5. **Dangoswch ystodau a senarios.** Rhowch werth mwyaf tebygol ac ystod gredadwy. Defnyddiwch senarios lle gallai digwyddiadau newid y patrwm. Peidiwch â chyflwyno manylrwydd ffug.
6. **Cynhwyswch ddigwyddiadau hysbys.** Ychwanegwch lansiadau, terfynau amser, gwyliau ac ymgyrchoedd gan y bobl sy'n eu hadnabod. Cofnodwch addasiadau a wnaed trwy farn.
7. **Cyfatebwch y trothwy i gost gwallau.** Ar gyfer sgorau risg, penderfynwch gost rhybuddion ffug a cholli, gosodwch y trothwy yn unol â hynny, a gwiriwch graddnodi.
8. **Monitrwch gywirdeb a drifft.** Cymharwch bob rhagolwg â'r canlyniad, tracwch wall dros amser, ac ailhyfforddwch neu ailadeiladwch pan fydd cywirdeb yn gostwng. Cadwch log o ragolygon fel y gellir eu harchwilio.
9. **Peidiwch â gorymddiried mewn rhagfynegiadau o ddigwyddiadau prin.** Defnyddiwch senarios, profion straen ac ymarferion ar gyfer digwyddiadau difrifol ond annhebygol.
10. **Caewch y ddolen gyda phenderfyniadau.** Cofnodwch y penderfyniad a gymerwyd a'r canlyniad, a'i ddefnyddio i wella'r rhagolwg a'r rheol benderfynu.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa benderfyniadau rydym yn eu gwneud heddiw ar sail dyfaliad am y dyfodol, a beth fyddem yn ei wneud yn wahanol gydag un gwell?**
Rhestrwch hwy: staffio, capasiti, amseru rhyddhad. Disgwyliwch sawl un. Dilynwch trwy ddewis un ac ysgrifennu'r rheol benderfynu.

**Pa mor gywir oedd ein tri rhagolwg diwethaf, a sut y daethom i wybod?**
Gofynnwch am y rhifau. Disgwyliwch na wiriodd neb. Dilynwch trwy gymharu rhagolygon y gorffennol â'r gwirioneddol a chytuno i gadw log.

**Beth yw'r rhagolwg symlaf a allai weithio ar gyfer hyn, a faint yn well y mae'n rhaid i fodel cymhleth fod i gyfiawnhau ei ddefnyddio?**
Adeiladwch y llinell sylfaen. Disgwyliwch ei bod yn perfformio'n barchus. Dilynwch trwy osod gwelliant lleiaf ar gyfer mabwysiadu unrhyw beth mwy cymhleth.

**Pa ddigwyddiadau rydym yn gwybod amdanynt na fyddai model a hyfforddwyd ar hanes yn eu hadnabod?**
Rhestrwch lansiadau, terfynau amser a newidiadau polisi. Disgwyliwch lawer. Dilynwch trwy benderfynu sut i'w cynnwys, fel mewnbynnau neu addasiadau.

**Sut y byddai sgôr risg ar gyfer newidiadau yn cael ei ddefnyddio, a beth yw cost rhybudd ffug yn erbyn colli?**
Trafodwch mewn termau pendant. Disgwyliwch farn wahanol. Dilynwch trwy gytuno ar drothwy ac adolygiad o ganlyniadau'r mis cyntaf.

**Ble gallai AI ein helpu i ragweld neu ragfynegi, a sut y byddem yn gwybod ei fod yn anghywir?**
Gall AI ffitio patrymau cymhleth a hefyd eu dyfeisio. Gofynnwch am y gymhariaeth â llinellau sylfaen a'r cynllun ar gyfer monitro drifft. Dilynwch trwy redeg rhagolwg AI ochr yn ochr â'r dull cyfredol am chwarter.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae asiantaeth benthyciadau myfyrwyr genedlaethol yn rhedeg desg gymorth sy'n dawel am y rhan fwyaf o'r flwyddyn ac wedi'i llethu yn y pythefnos cyn y terfyn amser ceisiadau blynyddol. Hyd yn hyn, mae pennaeth y ddesg wedi staffio'r brig trwy gofio profiad y llynedd ac ychwanegu ymyl. Ddwy flynedd yn ôl roedd y ddesg yn brin o staff, a'r llynedd gorwariodd ar asiantau dros dro.

Mae'r dadansoddwr gwasanaeth, a ofynnwyd i wella'r rhagolwg, yn dechrau gyda'r penderfyniad: faint o asiantau i'w harchebu chwe wythnos ymlaen llaw, mewn camau o bump, gydag addasiad terfynol bythefnos ymlaen llaw. Mae hi'n adeiladu llinell sylfaen: ar gyfer pob diwrnod yn y pedair blynedd diwethaf, nifer y cysylltiadau mewn perthynas â'r diwrnodau tan y terfyn amser, wedi'i raddio yn ôl nifer y ceiswyr hyd yma. Ar ddata a gedwir yn ôl o'r flwyddyn flaenorol, gwall llinell sylfaen yr wythnos frig yw 18 y cant. Mae hi'n rhoi cynnig ar fodel mwy cymhleth sy'n ychwanegu tywydd, crybwylliadau cyfryngau cymdeithasol, a diwrnod yr wythnos. Ar yr un flwyddyn a gedwir yn ôl, mae'n gwella'r gwall i 15 y cant, ond ar y flwyddyn cyn hynny mae'n waeth na'r llinell sylfaen, ac ni all neb egluro pam. Mae hi'n dewis y llinell sylfaen gydag addasiad syml ar gyfer nifer y ceiswyr newydd, ac yn dangos ystod i'r pennaeth: 11,000 i 14,500 o gysylltiadau yn yr wythnos frig, mwyaf tebygol 12,500.

Mae hi'n gofyn i'r busnes am ddigwyddiadau hysbys. Bydd ffurflen ar-lein newydd yn lansio bythefnos cyn y terfyn amser, a allai godi neu ostwng cysylltiadau. Mae hi'n adeiladu dau senario: un lle mae'r ffurflen yn lleihau cysylltiadau 15 y cant, ac un lle mae'n ychwanegu 10 y cant oherwydd dryswch. Mae'r pennaeth yn archebu ar gyfer canol yr ystod, gyda chronfa o asiantau ar alwad ar gyfer y senario uchaf. Mae'r dadansoddwr yn cofnodi'r rhagolwg, y senarios a'r penderfyniad.

Beth sy'n newid: cysylltiadau gwirioneddol yr wythnos frig yw 13,800, o fewn yr ystod, ac mae'r ddesg yn cyrraedd ei tharged heb orwario. Beth sy'n parhau'n anodd: ychwanegodd lansiad y ffurflen ddryswch, a ragwelwyd gan y senario uchaf yn unig; mae'r rhagolwg yn dibynnu ar ddata am geiswyr sy'n cyrraedd yn hwyr; a gofynnodd uwch reolwr am un rhif, a roddodd y dadansoddwr gyda'r ystod. Mae hi'n cofnodi'r gwall, 10 y cant yn erbyn y gwerth mwyaf tebygol, ac yn cynllunio i'w gymharu â'r llinell sylfaen ac â'r flwyddyn nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Dywedwch wrth ddadansoddwyr am lansiadau, newidiadau ac ymgyrchoedd yn gynnar, gan eu bod yn symud galw a risg. Darparwch y data sydd ei angen ar ragfynegiadau, a defnyddiwch sgorau risg fel awgrymiadau am gwestiynau, nid fel dyfarniadau.

### Timau gwasanaeth a gweithrediadau

Defnyddiwch ragolygon i gynllunio staffio a chapasiti, gydag ymyl ar gyfer y senario uchaf. Adroddwch ble roedd rhagolygon yn anghywir a pham, fel bod y dull yn gwella.

### Arweinyddiaeth a llywodraethu

Gofynnwch am y penderfyniad, y llinell sylfaen, yr ystod a'r hanes cywirdeb. Derbyniwch ansicrwydd. Ariennwch y data a'r amser i wirio rhagolygon. Peidiwch â mynnu rhifau sengl.

### Cwsmeriaid a defnyddwyr

Rydych yn elwa pan fo darparwyr yn paratoi ar gyfer copaon a risgiau. Dywedwch wrth y darparwr am eich cynlluniau eich hun a allai effeithio ar alw, fel ymgyrchoedd, ac adroddwch broblemau sy'n awgrymu bod rhagolwg yn anghywir.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Trinwch ragolygon fel damcaniaethau, adnewyddwch hwy'n aml, a gwiriwch hwy ar ôl pob cyfnod. Cynhwyswch randdeiliaid yn y tybiaethau. Rhybudd: mae ail-ragweld yn gyson heb gofnodi rhagolygon cynharach yn cuddio pa mor anghywir oeddent.

### AI

Gall dulliau AI fodelu llawer o newidynnau a signalau di-strwythur, a gallant ddrafftio crynodebau o ragolygon, dan adolygiad. Enwch berchennog, cymharwch â llinellau sylfaen, a monitrwch ddrifft. Rhybudd: dyfaliad ag arwyneb caboledig yw rhagolwg AI heb ystod neu brawf ar ddata a gedwir yn ôl. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

### Awtomeiddio

Awtomeiddiwch gasglu data, rhediadau rhagolwg, a rhybuddion wedi'u hamserlennu, a, lle bo'n ddiogel, gweithredoedd fel graddio o flaen llwyth disgwyliedig, gyda therfynau. Rhybudd: gall gweithred awtomatig ar ragolwg anghywir wastraffu arian neu achosi niwed; gosodwch ffiniau ac adolygwch. Gweler Pwnc 6.1 — Strategaeth Awtomeiddio.

### Dadansoddeg

Mesurwch wall rhagolwg, cwmpas cyfwng, graddnodi sgorau risg, a gwerth penderfyniadau a gymerwyd. Rhybudd: gall model â gwall cyfartalog isel fethu ar y copaon sy'n bwysicaf; gwerthuswch lle mae gwallau'n costio fwyaf. Gweler y llyfr *Service Management Metrics* a Phwnc 7.1 — Dadansoddeg ar gyfer Rheoli Gwasanaethau.

## Dulliau methu cyffredin

- **Rhagolygon nad ydynt yn newid dim.** Nid oes penderfyniad yn dibynnu arnynt. Dechreuwch o'r penderfyniad.
- **Model cymhleth, dim llinell sylfaen.** Nid yw'n gwneud yn well nag un syml. Cymharwch bob amser.
- **Gorffitio a gollyngiad.** Canlyniadau prawf gwych, realiti gwael. Cadwch ddata diweddarach yn ôl a gwiriwch fewnbynnau.
- **Rhifau sengl.** Manylrwydd ffug. Dangoswch ystodau a senarios.
- **Anwybyddu digwyddiadau hysbys.** Mae model yn colli lansiad. Ychwanegwch yr hyn y mae pobl yn ei wybod.
- **Dim monitro.** Mae drifft yn mynd heb ei sylwi. Tracwch gywirdeb dros amser.
- **Ymddiried mewn rhagfynegiadau digwyddiadau prin.** Caiff risg cynffon ei phrisio'n anghywir. Defnyddiwch senarios ac ymarferion.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Penderfyniadau a llinellau sylfaen | Dyfalu | Rhai rhagolygon | Rhagolygon wedi'u clymu wrth benderfyniadau a enwyd, gyda llinellau sylfaen | Gwerth rhagolygon yn cael ei adolygu | Rhagolygon wedi'u hintegreiddio i gynllunio ar draws gwasanaethau |
| Dull a dilysu | Heb ei wirio | Dulliau sylfaenol | Dulliau esboniadwy, ôl-brofi, a gwiriadau gollyngiad | Dulliau'n cael eu cymharu a'u gwella | Dulliau'n cael eu dewis a'u monitro ar draws portffolio |
| Ansicrwydd | Rhifau sengl | Rhai ystodau | Ystodau a senarios yn safonol | Cwmpas cyfwng a graddnodi yn cael eu mesur | Ansicrwydd yn cael ei ddefnyddio mewn penderfyniadau awtomataidd gyda therfynau |
| Monitro | Dim | Adolygu achlysurol | Cywirdeb a drifft yn cael eu holrhain | Ailhyfforddi ac ailadeiladu yn cael eu sbarduno gan dystiolaeth | Gwerthuso parhaus ar draws modelau |

## Rhestr wirio

- [ ] Mae pob rhagolwg yn enwi'r penderfyniad a'r trothwyon y mae'n eu llywio.
- [ ] Rydym yn cymharu pob model â llinell sylfaen syml.
- [ ] Rydym yn dilysu ar ddata diweddarach a gedwir yn ôl ac yn gwirio am ollyngiad.
- [ ] Rydym yn adrodd ystodau ac yn defnyddio senarios lle gallai digwyddiadau newid patrymau.
- [ ] Mae digwyddiadau hysbys o'r busnes wedi'u cynnwys neu eu cofnodi fel addasiadau.
- [ ] Mae gan sgorau risg drothwy a osodir gan gost rhybuddion ffug a cholli, ac rydym yn gwirio graddnodi.
- [ ] Rydym yn logio rhagolygon, yn eu cymharu â chanlyniadau, ac yn monitro drifft.
- [ ] Rydym yn defnyddio senarios ac ymarferion ar gyfer digwyddiadau prin, difrifol.

## Anogwyr AI

**Adeiladu llinell sylfaen o ddata.**

```text
Dyma gyfrif misol o [maint] am y [nifer] blynedd diwethaf: [gludwch].
Disgrifiwch y duedd a'r patrwm tymhorol, cynhyrchwch ragolwg llinell sylfaen syml ar gyfer y [cyfnod] nesaf (nodwch y dull a dangoswch y cyfrifiad), a rhowch ystod fras yn seiliedig ar y gwasgariad mewn blynyddoedd blaenorol. Peidiwch â defnyddio unrhyw ddull sydd angen data nad wyf wedi'i ddarparu.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Gwirio adroddiad rhagolwg.**

```text
Dyma adroddiad rhagolwg a sut yr adeiladwyd ef: [gludwch].
Rhestrwch broblemau: dim cymhariaeth â llinell sylfaen, dim dilysu ar ddata a gedwir yn ôl, gollyngiad posibl, rhifau sengl heb ystodau, digwyddiadau hysbys ar goll, a hawliadau sy'n gryfach na'r dystiolaeth. Dyfynnwch y testun ar gyfer pob un. Peidiwch ag ailwneud y rhagolwg.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio senarios.**

```text
Y penderfyniad: [disgrifiwch]. Y digwyddiad ansicr: [disgrifiwch]. Yr hyn a wyddom: [rhestrwch].
Drafftiwch dri senario (isel, canol, uchel) gyda'r dybiaeth y tu ôl i bob un, yr hyn y byddem yn ei weld yn gynnar pe bai'n digwydd, a sut y byddai ein cynllun yn wahanol. Peidiwch â neilltuo tebygolrwyddau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): defnyddiwch i amcangyfrif galw yn y dyfodol gydag ansicrwydd a nodir.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): defnyddiwch i droi rhagolygon yn benderfyniadau capasiti.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): defnyddiwch i ddadansoddi tueddiadau a thymhorolrwydd.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): defnyddiwch i ddewis a gwirio dulliau.
- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): defnyddiwch i ragweld cost gyda thybiaethau.

## Prif ffynonellau

- Rob J. Hyndman and George Athanasopoulos, *Forecasting: Principles and Practice* (am ddim ar-lein yn otexts.com/fpp3): testun clir, ymarferol ar ddulliau rhagweld.
- Nate Silver, *The Signal and the Noise* (2012): cyfrif darllenadwy o ragfynegi a'i beryglon.
- Wikipedia, "Forecasting" a "Overfitting": trosolygon o'r maes a'i brif fagl.
- Wikipedia, "Prediction interval": sut i fynegi ansicrwydd.

## Cyfeiriadau

1. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
2. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
3. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
4. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
5. Exponential smoothing — Wikipedia — https://en.wikipedia.org/wiki/Exponential_smoothing
6. Autoregressive integrated moving average — Wikipedia — https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average
7. Overfitting — Wikipedia — https://en.wikipedia.org/wiki/Overfitting
8. Backtesting — Wikipedia — https://en.wikipedia.org/wiki/Backtesting
9. Prediction interval — Wikipedia — https://en.wikipedia.org/wiki/Prediction_interval
10. Scenario planning — Wikipedia — https://en.wikipedia.org/wiki/Scenario_planning
11. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
12. Base rate fallacy — Wikipedia — https://en.wikipedia.org/wiki/Base_rate_fallacy
