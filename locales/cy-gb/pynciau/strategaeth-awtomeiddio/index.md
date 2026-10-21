# Strategaeth Awtomeiddio

**Mae strategaeth awtomeiddio yn penderfynu beth i'w awtomeiddio a beth i beidio, ym mha drefn, a chyda pha reolaethau; mae'n dilyn yr egwyddor ITIL "optimeiddio ac awtomeiddio" trwy symleiddio'n gyntaf, awtomeiddio gwaith sefydlog, ailadroddus gyda logiau ac ôl-dreiglo, a thrin pob awtomeiddio fel cynnyrch sydd angen perchennog a chynhaliaeth.**

## Pam mae hyn yn bwysig

Awtomeiddio yw'r lifer hynaf mewn gweithrediadau technoleg, a'r un a dynnir amlaf heb gynllun. Mae rhywun yn ysgrifennu sgript i arbed awr, ac mae'n gweithio. Mae rhywun arall yn ysgrifennu un arall. O fewn dwy flynedd mae gan dîm gannoedd o sgriptiau, swyddi wedi'u hamserlennu a rheolau llif gwaith, wedi'u hysgrifennu gan bobl sydd wedi gadael ers hynny, nad oes neb yn eu deall, ac y mae popeth yn dibynnu arnynt. Mae methiant tawel yn un ohonynt yn dod â gwasanaeth i lawr, ac mae'r tîm yn dysgu beth a awtomeiddiwyd ganddo trwy ddarganfod beth a stopiodd.

Mae'r gwall cyferbyniol yr un mor gyffredin. Mae tîm yn gosod targed i "awtomeiddio 80 y cant o dasgau" ac yn awtomeiddio pethau sy'n digwydd ddwywaith y flwyddyn, neu sy'n dibynnu ar farn, neu sy'n newid bob mis. Nid yw'r ymdrech byth yn talu'n ôl, ac mae'n rhaid cynnal yr awtomeiddio am byth. Yn y cyfamser, mae'r gwaith a fyddai wedi talu'n ôl ddeg gwaith drosodd yn parhau'n llaw oherwydd ei fod yn ddiflas ac nid oes neb wedi gofyn amdano.

Mae strategaeth yn osgoi'r ddau. Mae'n dewis beth i'w awtomeiddio ar sail tystiolaeth o elw, yn trefnu gwaith fel bod symleiddio'n dod cyn sgriptio, ac yn trin y canlyniad fel rhywbeth i'w berchnogi a'i gynnal. Mae hefyd yn ystyried cost ddynol go iawn: pan fo peiriannau'n ymdrin â'r gwaith arferol, caiff pobl eu gadael gyda'r eithriadau anodd a llai o gyfleoedd i ymarfer y pethau sylfaenol. Mae'r pwnc hwn yn nodi'r dewisiadau hynny. Dyma'r pwynt mynediad i Ran 6 ac mae'n berthnasol i awtomeiddio llif gwaith (Pwnc 6.2 — Awtomeiddio a Chydlynu Llif Gwaith), seilwaith fel cod (Pwnc 6.3 — Seilwaith fel Cod a GitOps), piblinellau (Pwnc 6.4 — Piblinellau a Newid Awtomataidd), hunanwasanaeth (Pwnc 6.5 — Hunanwasanaeth a Chyflawni Awtomataidd), ac awtomeiddio llawlyfrau gweithredu (Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer). Mae ei gyswllt ag AI ym Mhwnc 5.1 — AI mewn Rheoli Gwasanaethau.

## Cysyniadau craidd

**Awtomeiddio.** Defnyddio technoleg i gyflawni tasgau gyda llai o gyfranogiad dynol. Mae Wikipedia yn disgrifio awtomeiddio'n eang ar draws diwydiant. Mewn rheoli gwasanaethau, mae'n amrywio o sgript wedi'i hamserlennu i lifoedd gwaith sy'n ymestyn ar draws offer, i systemau sy'n penderfynu ac yn gweithredu. Mae'r gair yn cwmpasu pethau gwahanol iawn, felly enwch y math ym mhob trafodaeth.

**Optimeiddio, yna awtomeiddio.** Mae egwyddor arweiniol ITIL 4 "optimeiddio ac awtomeiddio" yn dweud am sicrhau bod gwaith mor effeithiol ag y gall fod, yna defnyddio technoleg i gyflawni mwy (gweler Pwnc 1.5 — Egwyddorion Arweiniol ITIL). Mae'r drefn yn fwriadol. Mae awtomeiddio proses ddryslyd neu wastraffus yn gosod ei dryswch a'i gwastraff yn eu lle ac yn ei gwneud yn anoddach ei newid. Mae meddwl main yn cyrraedd yr un farn (gweler Pwnc 2.4 — Main a Kaizen).

**Beth sy'n gwneud tasg yn ymgeisydd da.** Chwiliwch am waith sy'n aml, wedi'i ddeall yn dda, ar sail rheolau, yn dueddol o wallau pan gaiff ei wneud â llaw, ac yn sefydlog. Mae disgrifiadau Wikipedia o awtomeiddio prosesau busnes ac awtomeiddio prosesau robotig (RPA) yn disgrifio targedau cyffredin, fel symud data rhwng systemau. Mae ymgeiswyr gwael yn brin, yn newid, yn amwys, neu'n dibynnu ar farn neu empathi.

**Elw ar awtomeiddio.** Rheol fras yw cymharu'r amser a arbedir bob blwyddyn, ynghyd â gwerth llai o wallau ac ymateb cyflymach, â'r gost i adeiladu, rhedeg a chynnal yr awtomeiddio. Mae Wikipedia yn disgrifio enillion ar fuddsoddiad a dadansoddi cost a budd. Cynhwyswch gynhaliaeth: mae awtomeiddiadau'n torri pan fydd y systemau o'u cwmpas yn newid. Nodwch dybiaethau ac ystodau, gan mai amcangyfrifon yw'r rhifau.

**Ble i edrych.** Dechreuwch gyda data. Mae cloddio prosesau, a ddisgrifir ar Wikipedia, yn defnyddio logiau hysbysiadau i ddangos sut mae gwaith yn llifo mewn gwirionedd. Mae data tocynnau a cheisiadau yn dangos pa dasgau sy'n ailadrodd. Gofynnwch i'r bobl sy'n gwneud y gwaith beth sy'n eu diflasu neu'n eu rhwystro. Mae egwyddor Pareto yn awgrymu bod cyfran fach o fathau o dasgau yn cyfrif am y rhan fwyaf o'r cyfaint.

**Lefelau awtomeiddio.** O â llaw, drwy gynorthwyol (mae offeryn yn paratoi, mae unigolyn yn gweithredu), i amodol (mae'r system yn gweithredu ac mae unigolyn yn cymeradwyo), i ymreolaethol o fewn terfynau. Dewiswch y lefel fesul tasg yn ôl cost gwall a'r gallu i'w ddadwneud. Gweler Pwnc 5.5 — AI Asiantaidd a Goruchwyliaeth Ddynol.

**Rheolaethau.** Mae angen log ar bob awtomeiddio o'r hyn a wnaeth a phryd, terfynau ar yr hyn y gall ei gyffwrdd, ffordd o'i stopio, a ffordd o wrthdroi ei effeithiau. Mae Wikipedia yn disgrifio dylunio diogel rhag methiant: pan fydd system yn methu, dylai fethu mewn ffordd sy'n achosi'r niwed lleiaf. Gweler Pwnc 3.4 — Galluogi Newid.

**Awtomeiddio fel cynnyrch.** Mae gan awtomeiddio ddefnyddwyr, perchennog, ôl-groniad, dogfennaeth, profion a chylch bywyd. Heb berchennog mae'n dirywio. Mae erthygl Wikipedia ar ddyled dechnegol yn berthnasol: mae sgriptiau a ysgrifennwyd ar frys ac na chynhelir byth yn dod yn rhwymedigaethau. Gweler Pwnc 2.8 — Perchnogaeth Cynnyrch a Gwasanaeth.

**Gweithdrefnau safonol yn gyntaf.** Gweithdrefn ysgrifenedig, a brofwyd, fel llawlyfr gweithredu neu weithdrefn weithredu safonol (a ddisgrifir ar Wikipedia), yw'r manyleb orau ar gyfer awtomeiddio. Os na allwch ysgrifennu beth mae'r unigolyn yn ei wneud, nid ydych yn barod i'w awtomeiddio. Gweler Pwnc 3.9 — Rheoli Gwybodaeth.

**Offer a llwyfannau.** Mae'r opsiynau'n amrywio o sgriptiau cragen a threfnwyr fel cron, trwy lwyfannau llif gwaith a chydlynu, i lwyfannau RPA a chod isel. Mae Wikipedia yn disgrifio pob un. Dewiswch yr offeryn symlaf y gellir ei gynnal, a ffafriwch offer â rheoli fersiynau, profi ac archwilio wedi'u hadeiladu i mewn. Gweler Pwnc 6.2 — Awtomeiddio a Chydlynu Llif Gwaith.

**Sgiliau ac eironïau awtomeiddio.** Mewn papur adnabyddus o 1983, disgrifiodd yr ymchwilydd Lisanne Bainbridge eironïau awtomeiddio: pan fo awtomeiddio'n ymdrin â'r rhan fwyaf o dasg, caiff yr unigolyn ei adael gyda'r achosion anodd, prin, ac eto mae ganddo lai o ymarfer a llai o deimlad am y system. Mae Wikipedia yn disgrifio'r papur. Y wers ymarferol yw cadw pobl yn ymarfer, dangos iddynt beth mae'r awtomeiddio yn ei wneud, a dylunio trosglwyddiadau fel y gall unigolyn gamu i mewn.

**Ffactor bws a gwybodaeth.** Gall awtomeiddio grynhoi gwybodaeth yn yr awdur. Mae Wikipedia yn disgrifio'r ffactor bws. Adolygwch, dogfennwch a rhannwch, fel y gall mwy nag un unigolyn gynnal pob awtomeiddio.

**Diogelwch.** Mae awtomeiddiadau yn dal cymwysterau ac mae ganddynt bŵer. Mae awtomeiddio dan fygythiad yn darged deniadol. Rhowch ei hunaniaeth ei hun i bob un gyda'r caniatâd lleiaf, storiwch gyfrinachau'n ddiogel, ac adolygwch fynediad. Gweler Pwnc 3.13 — Rheoli Diogelwch Gwybodaeth.

**Pobl ac ymddiriedaeth.** Gall staff ofni bod awtomeiddio yn bygwth eu swyddi, neu y bydd yn cael ei feio am fethiannau. Cynhwyswch hwy wrth ddewis beth i'w awtomeiddio, dywedwch sut y defnyddir amser a arbedir, ac adnabyddwch y gwaith o adeiladu a chynnal awtomeiddio. Gweler Pwnc 8.3 — Newid Sefydliadol a Mabwysiadu.

**Sut mae'r lensys yn ffitio.** Awtomeiddio yw'r drydedd lens. Mae arfer ystwyth yn awgrymu awtomeiddio mewn camau bach a dysgu o bob un. Mae AI yn ychwanegu ffordd o benderfynu ac o ddrafftio; mae awtomeiddio yn gweithredu. Mae dadansoddeg yn nodi ymgeiswyr ac yn dangos a gyflawnodd awtomeiddio.

## Arferion gorau

1. **Dechreuwch o ddata a phoen.** Edrychwch ar gyfeintiau tocynnau a cheisiadau, cloddio prosesau lle bo ar gael, a'r hyn y mae staff yn ei weld yn ddiflas. Dewiswch ar sail tystiolaeth, nid yr hyn sy'n ffasiynol.
2. **Symleiddiwch yn gyntaf.** Tynnwch gamau a chymeradwyaethau nad ydynt yn ychwanegu gwerth cyn eu sgriptio. Gofynnwch sut fyddai'r broses pe baech yn dechrau eto.
3. **Ysgrifennwch y weithdrefn.** Dogfennwch y camau, mewnbynnau, allbynnau ac eithriadau. Profwch y weithdrefn trwy gael rhywun arall i'w dilyn. Defnyddiwch hi fel y fanyleb.
4. **Amcangyfrifwch yr elw yn onest.** Cymharwch amser a arbedir â chost adeiladu a chynnal, gan ddefnyddio ystodau. Cyfrifwch leihau gwallau a chyflymder lle maent yn bwysig. Gollyngwch ymgeiswyr nad ydynt yn talu'n ôl.
5. **Awtomeiddiwch mewn camau bach.** Dechreuwch gydag un rhan, fel casglu data i unigolyn, yna estynnwch. Rhyddhewch yn aml a dysgwch.
6. **Dewiswch lefel ymreolaeth yn ôl risg.** Gadewch i dasgau risg isel, gwrthdroadwy redeg ar eu pen eu hunain gyda logiau, a chadwch unigolyn yn y ddolen ar gyfer rhai arwyddocaol neu anwrthdroadwy.
7. **Adeiladwch logiau, terfynau ac ôl-dreiglo i mewn.** Cofnodwch bob gweithred, capiwch faint all un rhediad ei newid, ac ysgrifennwch y ffordd yn ôl. Profwch hi.
8. **Rhowch berchennog a chartref i bob awtomeiddio.** Cadwch god mewn rheoli fersiynau gydag adolygiad a phrofion, dogfennwch ef, a'i restru mewn cofrestr gyda'i berchennog a'r hyn sy'n dibynnu arno.
9. **Cadwch sgiliau'n fyw.** Dangoswch i bobl beth mae'r awtomeiddio yn ei wneud, ymarferwch lwybr wrth gefn â llaw ar gyfer tasgau pwysig, a chylchdrowch bobl drwy'r achosion anodd.
10. **Adolygwch ac ymddeolwch.** Gwiriwch yn rheolaidd pa awtomeiddiadau a ddefnyddir a pha rai sy'n methu, trwsiwch neu dynnwch hwy, a mesurwch y budd yn erbyn yr amcangyfrif.

## Cwestiynau i'w trafod gyda'ch tîm

**Pa dasgau rydym yn eu hailadrodd amlaf, a pha rai fyddai'n well gennym byth eu gwneud eto?**
Gofynnwch i bawb. Disgwyliwch sefydlu cyfrifon, adroddiadau a thrwsio data. Dilynwch trwy ddewis tair ac amcangyfrif oriau y mis.

**Ar gyfer ein prif ymgeisydd, sut fyddai'r broses yn edrych pe baem yn ei symleiddio cyn ei hawtomeiddio?**
Tynnwch lun ohoni. Disgwyliwch gamau na all neb eu cyfiawnhau. Dilynwch trwy dynnu un cyn ysgrifennu unrhyw god.

**Pa awtomeiddiadau rydym eisoes yn dibynnu arnynt, pwy sy'n berchen ar bob un, a beth sy'n digwydd os bydd un yn methu'n dawel?**
Gwnewch restr. Disgwyliwch bethau annisgwyl a rhai amddifad. Dilynwch trwy enwi perchnogion ac ychwanegu gwiriad am fethiant.

**Pa rai o'n tasgau ddylai aros â llaw oherwydd bod angen barn neu empathi arnynt?**
Trafodwch. Disgwyliwch gytundeb ar faterion sensitif ac anghytundeb ar yr ymylon. Dilynwch trwy ysgrifennu'r ffin a phwy gaiff ei newid.

**Sut y byddwn yn cadw'r sgiliau i wneud y dasg â llaw os nad yw'r awtomeiddio ar gael?**
Gofynnwch am y tro diwethaf i rywun ei wneud â llaw. Disgwyliwch amser maith yn ôl. Dilynwch trwy gynllunio ymarfer cyfnodol.

**Sut y byddwn yn defnyddio'r amser y mae awtomeiddio yn ei ryddhau, ac a ydym wedi dweud wrth y tîm?**
Mae hyn yn adeiladu ymddiriedaeth. Disgwyliwch ansicrwydd ac ychydig o ofn. Dilynwch trwy gytuno i ba beth yr â'r amser a arbedir a'i ddweud yn agored.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae cofrestrfa genedlaethol genedigaethau, marwolaethau a phriodasau yn rhedeg tîm TG bach o ddeg sy'n cefnogi 600 o staff. Mae rheolwr wedi cynnig "awtomeiddio popeth sy'n bosibl" ac mae ganddo restr o 120 o dasgau ymgeisiol. Mae arweinydd y gwasanaeth yn amau na fyddai'r rhan fwyaf yn talu'n ôl ac yn gofyn am safle.

Mae'r tîm yn treulio pythefnos yn casglu data. O chwe mis o docynnau, maent yn canfod bod 70 y cant o'r cyfaint yn syrthio i wyth math o dasg, dan arweiniad cyfrifon dechreuwyr newydd, ailosod cyfrineiriau, newidiadau blychau post a rennir, a chynhyrchu adroddiadau misol. Maent yn amcangyfrif oriau y mis ar gyfer pob un, ac yn gofyn i'r bobl dan sylw beth sy'n mynd o'i le. Mae cyfrifon dechreuwyr newydd, ar 40 awr y mis, yn cynnwys un cam ar ddeg â llaw, y mae tri ohonynt wedi'u dyblygu a dau yn gymeradwyaethau na wrthodwyd erioed. Maent yn symleiddio i wyth cam cyn ysgrifennu dim.

Maent yn awtomeiddio fesul cam. Yn gyntaf, mae sgript yn casglu'r wybodaeth ac yn creu'r cyfrifon, gyda thechnegydd yn adolygu'r canlyniad. Ar ôl dau fis o redeg heb wallau, mae'r sgript yn rhedeg heb oruchwyliaeth ar gyfer rolau safonol, gyda log a gwiriad dyddiol, ac mae technegydd yn trin rolau annodweddiadol. Mae ailosod cyfrineiriau yn symud i lwybr hunanwasanaeth y system hunaniaeth, a ddarperir gan y gwerthwr. Mae'r adroddiad misol, sy'n cymryd 12 awr, yn dibynnu ar ddata o dair system mewn fformatau gwahanol, ac mae'r tîm yn penderfynu peidio â'i awtomeiddio nes bod y ffynonellau data wedi'u trwsio.

Cofrestrir pob awtomeiddio, gyda pherchennog, ystorfa ac ôl-dreiglo. Neilltuir un technegydd i gylchdroi trwy ymdrin â llaw bob chwarter, fel y cedwir y sgil. Mae'r rheolwr yn cytuno y bydd amser a arbedir yn mynd i ôl-groniad o uwchraddiadau hwyr, ac yn dweud hynny mewn cyfarfod tîm.

Beth sy'n newid: rhyddheir tua 70 awr y mis, ac mae gan ddechreuwyr newydd gyfrifon gweithredol ar y diwrnod cyntaf. Beth sy'n parhau'n anodd: mae'n rhaid diweddaru'r sgript pryd bynnag y bydd strwythur y cyfeiriadur yn newid, a ddigwyddodd ddwywaith yn y chwarter cyntaf; dau dechnegydd yw'r unig rai sy'n ei ddeall; ac mae'r rheolwr yn dal i ofyn pam na wnaethpwyd y 110 ymgeisydd arall. Mae'r arweinydd yn dangos y data ac yn cytuno i ailedrych ar y rhestr bob hanner blwyddyn.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Adeiladwch ar gyfer awtomeiddio: amlygwch ryngwynebau clir, osgowch gamau â llaw wrth ryddhau a defnyddio, a darparwch lawlyfrau gweithredu y gall eraill eu sgriptio. Byddwch yn berchen ar yr awtomeiddiadau a grëwch.

### Timau gwasanaeth a gweithrediadau

Dylech wybod eich tasgau ailadroddus, eu symleiddio, ac awtomeiddio'r rhai sefydlog gyda logiau ac ôl-dreiglo. Cadwch sgiliau â llaw yn fyw, a chofrestrwch yr hyn a awtomeiddiwch gyda pherchennog.

### Arweinyddiaeth a llywodraethu

Gofynnwch am dystiolaeth o elw ac am reolaethau, nid cyfrif o awtomeiddiadau. Dywedwch sut y defnyddir amser a arbedir. Ariennwch gynhaliaeth a sgiliau yn ogystal ag adeiladu.

### Cwsmeriaid a defnyddwyr

Rydych yn elwa o wasanaeth cyflymach, mwy cyson, a dylech allu cyrraedd unigolyn ar gyfer eithriadau o hyd. Dywedwch wrth y darparwr lle y methodd awtomeiddio ag ymdrin â'ch achos.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Awtomeiddiwch mewn cynyddrannau bach, gyda'r bobl sy'n gwneud y gwaith, ac adolygwch ganlyniadau. Trinwch yr ôl-groniad awtomeiddio fel rhan o'r ôl-groniad gwella. Rhybudd: gall cyflymder cyflwyno awtomeiddiadau ragori ar y gallu i'w cynnal; cyfyngwch ar waith ar y gweill ac ymddeolwch hen rai.

### AI

Gall AI helpu i ddod o hyd i ymgeiswyr trwy glystyru tasgau, drafftio sgriptiau a gweithdrefnau, a phenderfynu o fewn terfynau beth i'w wneud. Mae angen yr un perchennog, profion a rheolaethau ar bob awtomeiddio a gynorthwyir gan AI. Rhybudd: gall sgriptiau a gynhyrchir gynnwys gwallau neu batrymau anniogel; adolygwch a phrofwch hwy fel unrhyw god arall. Gweler Pwnc 5.1 — AI mewn Rheoli Gwasanaethau.

### Awtomeiddio

Y lens ei hun yw'r pwnc hwn: dewis, symleiddio, adeiladu gyda rheolaethau, bod yn berchen, ac adolygu. Rhybudd: mae awtomeiddio yn crynhoi pŵer ac yn cuddio cymhlethdod; cadwch logiau'n ddarllenadwy a rhowch y modd i bobl ei ddeall a'i stopio.

### Dadansoddeg

Defnyddiwch ddata tocynnau, cloddio prosesau, data amser a gwallau, a chanlyniadau ar ôl awtomeiddio. Rhybudd: mae amcangyfrifon o oriau a arbedwyd yn aml yn cael eu chwyddo, ac mae mesurau fel "nifer yr awtomeiddiadau" yn gwobrwyo cyfaint; tracwch amser gwirioneddol a ryddhawyd, gwallau a methiannau. Gweler Pwnc 7.6 — Dadansoddeg Prosesau a Ffrydiau Gwerth a'r llyfr *Service Management Metrics*.

## Dulliau methu cyffredin

- **Awtomeiddio llanast.** Cedwir y dryswch. Symleiddiwch yn gyntaf.
- **Awtomeiddio yn ôl targed.** Dewisir tasgau am y cyfrif. Dewiswch yn ôl elw ac angen.
- **Sgriptiau amddifad.** Nid oes neb yn berchen arnynt nac yn eu deall. Cofrestrwch, neilltuwch berchnogion, ac adolygwch.
- **Dim logiau nac ôl-dreiglo.** Ni ellir olrhain na dadwneud methiant. Adeiladwch y ddau i mewn.
- **Sgiliau'n pylu.** Ni all neb wneud y dasg â llaw. Ymarferwch a chylchdrowch.
- **Cost cynhaliaeth gudd.** Mae'r awtomeiddio yn torri gyda phob newid gerllaw. Cyfrifwch gynhaliaeth yn yr elw.
- **Ofn a chyfrinachedd.** Mae staff yn gwrthsefyll. Cynhwyswch hwy a dywedwch sut y defnyddir yr enillion.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Dewis | Sgriptiau ad hoc | Ymgeiswyr wedi'u rhestru | Ymgeiswyr wedi'u dewis yn ôl data ac elw | Canlyniadau'n cael eu cymharu ag amcangyfrifon | Portffolio'n cael ei ddewis a'i ail-gydbwyso yn ôl gwerth a risg |
| Rheolaethau | Dim | Peth logio | Logiau, terfynau ac ôl-dreiglo yn safonol | Rheolaethau'n cael eu profi a'u harchwilio | Rheolaethau wedi'u hadeiladu i mewn i lwyfannau a rennir |
| Perchnogaeth | Unigolion | Awduron hysbys | Cofrestr gyda pherchnogion, rheoli fersiynau ac adolygiad | Cynhaliaeth a methiannau'n cael eu holrhain | Perchnogaeth wedi'i chydlynu ar draws timau |
| Pobl | Ofn neu esgeulustod | Ymwybyddiaeth | Sgiliau'n cael eu cadw'n fyw a buddion yn cael eu rhannu | Sgiliau a llwyth gwaith yn cael eu hadolygu | Rolau a sgiliau wedi'u cynllunio gydag awtomeiddio ar draws y sefydliad |

## Rhestr wirio

- [ ] Dewisom ymgeiswyr gan ddefnyddio data ar gyfaint, gwallau ac ymdrech.
- [ ] Symleiddiom bob proses cyn ei hawtomeiddio.
- [ ] Mae pob awtomeiddio yn dilyn gweithdrefn ysgrifenedig, a brofwyd.
- [ ] Amcangyfrifom yr elw gan gynnwys cynhaliaeth.
- [ ] Mae gan bob awtomeiddio berchennog, rheoli fersiynau a chofnod cofrestr.
- [ ] Mae logiau, terfynau ac ôl-dreiglo wedi'u hadeiladu i mewn ac wedi'u profi.
- [ ] Rydym yn cadw sgiliau â llaw yn fyw ar gyfer tasgau pwysig.
- [ ] Dywedom wrth y tîm sut y defnyddir yr amser a arbedir.

## Anogwyr AI

**Rhestru ymgeiswyr o ddata tocynnau.**

```text
Dyma grynodeb o gategorïau tocynnau gyda chyfrif y mis ac amser trin cyfartalog: [gludwch].
Cyfrifwch oriau y mis ar gyfer pob categori, trefnwch hwy yn nhrefn oriau, ac ar gyfer yr wyth uchaf rhestrwch gwestiynau i'w gofyn ynghylch a yw'r dasg yn sefydlog, ar sail rheolau, ac yn ddiogel i'w hawtomeiddio. Peidiwch ag argymell awtomeiddio unrhyw un.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio manyleb o weithdrefn.**

```text
Dyma'r weithdrefn ysgrifenedig ar gyfer tasg: [gludwch].
Rhestrwch y mewnbynnau, camau, pwyntiau penderfynu, allbynnau ac eithriadau, a nodwch bob cam fel "clir", "angen barn", neu "aneglur". Rhestrwch gwestiynau i'w hateb cyn awtomeiddio. Peidiwch ag ysgrifennu cod.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Adolygu awtomeiddio am reolaethau.**

```text
Dyma ddisgrifiad o awtomeiddio: beth mae'n ei wneud, beth y gall ei newid, pwy sy'n berchen arno, sut mae'n rhedeg: [gludwch].
Rhestrwch reolaethau coll o'r set hon: logio, terfynau, ôl-dreiglo, switsh stopio, perchennog, caniatâd, profion, a rhybuddion methiant, gan ddyfynnu'r disgrifiad ar gyfer pob un rydych yn ei ystyried yn bresennol. Peidiwch â thybio rheolaethau nas nodir.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): defnyddiwch i ddadansoddi camau ac arosiadau cyn awtomeiddio.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): defnyddiwch i amcangyfrif elw ar awtomeiddio.
- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i ysgrifennu'r weithdrefn sy'n dod yn fanyleb.
- [kaizen](../../../../skills/kaizen/SKILL.md): defnyddiwch i symleiddio cyn awtomeiddio.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): defnyddiwch i ddod o hyd i'r camau sy'n werth eu hawtomeiddio.

## Prif ffynonellau

- PeopleCert, ITIL certification pages: disgrifiad y perchennog o arweiniad ITIL, gan gynnwys optimeiddio ac awtomeiddio.
- Lisanne Bainbridge, "Ironies of Automation" (*Automatica*, 1983): y papur clasurol ar awtomeiddio a sgil ddynol.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), pennod ar ddileu llafur caled (toil), am ddim yn sre.google.
- Wikipedia, "Automation" a "Business process automation": trosolygon o'r syniadau.

## Cyfeiriadau

1. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
2. Business process automation — Wikipedia — https://en.wikipedia.org/wiki/Business_process_automation
3. Robotic process automation — Wikipedia — https://en.wikipedia.org/wiki/Robotic_process_automation
4. Ironies of Automation — Wikipedia — https://en.wikipedia.org/wiki/Ironies_of_Automation
5. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Standard operating procedure — Wikipedia — https://en.wikipedia.org/wiki/Standard_operating_procedure
10. Fail-safe — Wikipedia — https://en.wikipedia.org/wiki/Fail-safe
11. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
