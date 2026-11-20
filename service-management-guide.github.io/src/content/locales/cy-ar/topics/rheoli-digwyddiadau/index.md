# Rheoli Digwyddiadau

**Mae rheoli digwyddiadau (incident management) yn bodoli i adfer gwasanaeth normal mor gyflym â phosibl a chyfyngu ar niwed i ddefnyddwyr; mae'n gweithio pan fydd difrifoldeb wedi'i gytuno ymlaen llaw, rolau'n glir, cyfathrebu'n gyson, a'r adolygiad wedyn yn edrych ar y system ac nid ar unigolion.**

## Pam mae hyn yn bwysig

Digwyddiad yw ymyriad heb ei gynllunio i wasanaeth, neu ostyngiad yn ei ansawdd. Pan fydd un yn digwydd, mae'r bobl dan sylw dan bwysau, mae'r wybodaeth yn anghyflawn, ac mae'r cloc yn rhedeg. Mae penderfyniadau a wneir yn y deg munud cyntaf yn aml yn pennu a yw'r digwyddiad yn para awr neu chwech.

Nid yw sefydliadau sy'n trin digwyddiadau'n dda yn dibynnu ar arwyr. Maent wedi cytuno ar sut i benderfynu pa mor ddifrifol yw rhywbeth, pwy sy'n arwain, pwy sy'n siarad â defnyddwyr, sut i uwchgyfeirio, a phryd i roi'r gorau i ymchwilio a chymhwyso ateb dros dro. Maent wedi ymarfer. Mae sefydliadau sy'n trin digwyddiadau'n wael yn byrfyfyrio bob tro, yn dadlau am flaenoriaethau yn ystod y digwyddiad, ac yn canfod bod yr unig berson sy'n adnabod y system ar wyliau.

Mae'r pwnc hwn yn disgrifio rheoli digwyddiadau fel arfer: diffiniadau, rolau, difrifoldeb, cyfathrebu ac adolygu. Mae'n trin digwyddiadau mawr gyda strwythur ychwanegol, ac mae'n ymdrin â sut y gall AI ac awtomeiddio helpu a ble gallant niweidio. Mae'n sefyll wrth ochr rheoli problemau (Pwnc 3.3 — Rheoli Problemau), sy'n chwilio am yr achosion sylfaenol, a monitro (Pwnc 3.10 — Monitro a Rheoli Hysbysiadau), sy'n aml yn canfod y digwyddiad.

## Cysyniadau craidd

**Digwyddiad.** Yn ITIL 4, ymyriad heb ei gynllunio i wasanaeth neu ostyngiad yn ansawdd gwasanaeth. Mae erthygl Wikipedia ar reoli digwyddiadau yn disgrifio'r arfer mewn rheoli gwasanaethau TG. Gall digwyddiad fodoli cyn i unrhyw ddefnyddiwr sylwi, er enghraifft pan fydd monitro yn dangos disg sy'n methu.

**Adfer y gwasanaeth yn gyntaf.** Y nod yw adfer y gwasanaeth i normal, nid dod o hyd i'r gwraidd achos. Mae ateb dros dro sy'n adfer gwasanaeth yn ganlyniad da; mae'r gwraidd achos ar gyfer rheoli problemau. Mae timau sy'n cloddio am yr achos tra bo'r gwasanaeth i lawr yn ymestyn yr ymyriad.

**Ateb dros dro (workaround).** Datrysiad sy'n lleihau neu'n dileu effaith digwyddiad heb ddatrys ei achos, er enghraifft ailgyfeirio traffig, ailgychwyn cydran, neu newid i broses â llaw. Gweler Pwnc 3.3 — Rheoli Problemau am sut mae gwallau hysbys ac atebion dros dro yn cael eu holrhain.

**Difrifoldeb a blaenoriaeth.** Mae difrifoldeb yn disgrifio'r effaith ar ddefnyddwyr a'r busnes, fel faint sy'n cael eu heffeithio a pha mor wael. Mae blaenoriaeth yn ychwanegu brys, fel terfyn amser. Mae llawer o sefydliadau yn defnyddio graddfa fach, er enghraifft pedair lefel, gyda diffiniad ac ymateb disgwyliedig ar gyfer pob un. Dylai diffiniadau ddefnyddio ffeithiau y gellir eu harsylwi ("ni all mwy na 100 o ddefnyddwyr wneud taliadau") yn hytrach na theimladau.

**Digwyddiadau mawr.** Mae gan ddigwyddiad mawr effaith sylweddol ac mae angen ymateb cyflymach, mwy cydlynol arno na'r broses safonol. Mae sefydliadau'n diffinio eu trothwyon eu hunain. Fel arfer mae gan ddigwyddiadau mawr arweinydd digwyddiad a enwir, arweinydd cyfathrebu, a rhythm rheolaidd o ddiweddariadau.

**Rolau.** Mae arweinydd y digwyddiad yn cydlynu ac yn gwneud penderfyniadau; mae ymatebwyr technegol yn gwneud diagnosis ac yn trwsio; mae arweinydd cyfathrebu yn cadw rhanddeiliaid a defnyddwyr yn wybodus; mae ysgrifennydd yn cofnodi'r hyn a wneir a phryd. Gall un person ddal sawl rôl mewn digwyddiad bach. Mae'r System Reoli Digwyddiadau (Incident Command System), a ddefnyddir mewn rheoli argyfyngau ac a ddisgrifir ar Wikipedia, yn ddylanwad ar y strwythur a ddefnyddir mewn llawer o sefydliadau technegol.

**Uwchgyfeirio.** Dod â mwy o sgiliau neu fwy o awdurdod i mewn. Mae uwchgyfeirio swyddogaethol yn symud y digwyddiad i bobl â'r arbenigedd cywir. Mae uwchgyfeirio hierarchaidd yn dod â rheolwyr i mewn sy'n gallu penderfynu neu ddarparu adnoddau. Mae meini prawf clir, fel "dim cynnydd ar ôl 30 munud ar ddifrifoldeb un", yn gwneud uwchgyfeirio yn arferol yn hytrach nag yn arwydd o fethiant.

**Ar alwad.** Trefniadau i bobl fod ar gael y tu allan i oriau arferol. Mae arfer da ar alwad yn cynnwys terfynau ar lwyth, rota glir, llawlyfrau gweithredu (runbooks), a thâl. Gweler Pwnc 2.6 — Peirianneg Dibynadwyedd Safleoedd. Mae blinder rhybuddion, ffenomen a ddisgrifir ar Wikipedia, yn gwneud i bobl anwybyddu rhybuddion sy'n rhy aml neu na ellir gweithredu arnynt.

**Cyfathrebu.** Mae angen i ddefnyddwyr a rhanddeiliaid wybod beth sy'n cael ei effeithio, beth rydych yn ei wneud, a phryd y byddant yn clywed nesaf. Mae diweddariadau mynych, syml yn lleihau cysylltiadau mynych a gorbryder. Mae erthygl Wikipedia ar gyfathrebu mewn argyfwng yn rhoi egwyddorion cyffredinol. Mae tudalen statws, sianel fewnol, a negeseuon uniongyrchol i gwsmeriaid allweddol yn gwasanaethu gwahanol gynulleidfaoedd.

**Cofnodion digwyddiadau.** Tocyn neu gofnod gyda'r amser dechrau, symptomau, camau gweithredu, penderfyniadau, a'r amser gorffen. Mae'r cofnod yn cefnogi'r adolygiad ac yn rhoi data ar gyfer gwelliant. Mae llinell amser a gedwir yn ystod y digwyddiad yn fwy cywir nag un a ailadeiladir wedyn.

**Adolygu.** Ar ôl digwyddiad sylweddol, cynhaliwch adolygiad di-fai sy'n edrych ar beth ddigwyddodd, beth a helpodd, beth a arafodd yr ymateb, a beth i'w newid. Mae canfyddiadau'n mynd i reoli problemau a'r ôl-groniad gwella. Gweler Pwnc 3.3 — Rheoli Problemau.

**Mesurau.** Mae amser i ganfod, amser i ymateb, ac amser i adfer, a grynhoir yn aml fel amser cymedrig i adferiad (MTTR) yn nisgrifiad Wikipedia, yn gyffredin. Mae cyfartaleddau'n cuddio gwahaniaethau mawr rhwng digwyddiadau, a gellir eu trin gan sut y gosodir amseroedd dechrau a gorffen. Defnyddiwch ddosraniadau ac edrychwch ar ddigwyddiadau unigol. Gweler y llyfr *Service Management Metrics*.

**Sut mae'r lensys yn ffitio.** Mae arfer ystwyth yn trin pob adolygiad fel adborth ac yn cadw gwelliant yn fach ac yn barhaus. Gall AI grynhoi llinellau amser, awgrymu digwyddiadau tebyg yn y gorffennol, a drafftio diweddariadau, gydag unigolyn atebol. Mae awtomeiddio yn gweithredu camau diogel, a ddeellir yn dda fel ailgychwyn a methiant drosodd. Mae dadansoddeg yn dangos patrymau ailddigwyddiad.

## Arferion gorau

1. **Diffiniwch lefelau difrifoldeb gyda ffeithiau y gellir eu harsylwi.** Ysgrifennwch beth mae pob lefel yn ei olygu, pwy sy'n cael ei hysbysu, a pha mor gyflym. Adolygwch y diffiniadau ar ôl digwyddiadau a oedd yn anodd eu dosbarthu.
2. **Enwch rolau ac ymarferwch hwy.** Cytunwch pwy sy'n arwain, pwy sy'n cyfathrebu, a phwy sy'n cofnodi. Ymarferwch gydag ymarferion, fel nad yw'r tro cyntaf yn argyfwng go iawn. Gweler Pwnc 3.12 — Rheoli Parhad Gwasanaeth.
3. **Adferwch yn gyntaf, ymchwiliwch yn ddiweddarach.** Gosodwch reol bod ateb dros dro yn cael ei gymhwyso pan fo un ar gael ac yn ddiogel. Cofnodwch y digwyddiad ar gyfer rheoli problemau a symudwch ymlaen.
4. **Cadwch linell amser fyw.** Cofnodwch gamau gweithredu a phenderfyniadau gydag amseroedd wrth iddynt ddigwydd, mewn lle a rennir. Mae'n atal dadleuon ac yn cyflymu'r adolygiad.
5. **Uwchgyfeiriwch yn gynnar a heb fai.** Diffiniwch sbardunau ar gyfer uwchgyfeirio a thrinwch eu defnyddio fel arfer da. Mae pobl sy'n uwchgyfeirio'n hwyr yn ofni beirniadaeth, felly cael gwared arni.
6. **Cyfathrebwch ar rythm.** Cytunwch ar gyfnod diweddaru ar gyfer pob lefel difrifoldeb, ac anfonwch ddiweddariadau hyd yn oed pan nad oes dim newydd, gan ddweud hynny. Defnyddiwch iaith syml.
7. **Rhowch yr hyn sydd ei angen ar ymatebwyr.** Cynhaliwch lawlyfrau gweithredu, mynediad, dangosfyrddau a rhestrau cyswllt. Profwch fynediad cyn y noson y bydd ei angen.
8. **Gwarchodwch bobl.** Cyfyngwch lwyth ar alwad, trosglwyddwch ddigwyddiadau hir, a sicrhewch fod ymatebwyr yn gorffwys. Mae pobl flinedig yn gwneud penderfyniadau gwaeth.
9. **Adolygwch heb fai a dilynwch drwodd.** Ysgrifennwch adroddiad byr gyda'r llinell amser, ffactorau cyfrannol, a chamau gweithredu gyda pherchnogion a dyddiadau. Tracwch gamau gweithredu nes eu cwblhau. Gweler Pwnc 3.3 — Rheoli Problemau.
10. **Bwydwch y gwersi yn ôl.** Diweddarwch lawlyfrau gweithredu, monitro a dyluniad. Rhannwch ddysgu gyda thimau eraill, a gwiriwch fod digwyddiadau a ailadroddir yn lleihau.

## Cwestiynau i'w trafod gyda'ch tîm

**Sut rydym yn penderfynu pa mor ddifrifol yw digwyddiad, ac a ddadleuwyd hynny erioed yn ystod digwyddiad?**
Mae anghytuno ynghylch difrifoldeb yn gwastraffu amser. Gofynnwch am enghreifftiau diweddar. Efallai y clywch fod yr ateb yn dibynnu ar bwy sy'n gofyn. Dilynwch trwy ailysgrifennu diffiniad un lefel gyda ffeithiau y gellir eu harsylwi.

**Pwy sy'n arwain digwyddiad am 3 y bore, a sut maent yn gwybod mai nhw yw'r arweinydd?**
Mae arweinyddiaeth aneglur yn achos cyffredin dryswch. Gofynnwch pwy a wnaeth benderfyniadau yn y digwyddiad mawr diwethaf. Disgwyliwch atebion gwahanol. Dilynwch trwy gytuno ar sut y dewisir ac y cyhoeddir yr arweinydd.

**Beth mae defnyddwyr yn ei glywed gennym yn ystod digwyddiad, a pha mor aml?**
Cymharwch yr hyn a glywodd defnyddwyr yn y digwyddiad diwethaf â'r hyn yr oeddent ei eisiau. Disgwyliwch dawelwch hir. Dilynwch trwy ddewis cyfnod diweddaru a sianel, a drafftio templed.

**Beth rydym wedi'i uwchgyfeirio'n hwyr, a pham?**
Mae hyn yn archwilio ofn ac arfer. Gall pobl ohirio rhag ofn edrych yn anghymwys neu ddeffro rhywun. Gofynnwch beth fyddai'n gwneud uwchgyfeirio yn haws. Dilynwch trwy ysgrifennu rheol fel "uwchgyfeiriwch os nad oes cynnydd o fewn 30 munud".

**Beth mae ein hadolygiad digwyddiad diwethaf yn dweud y dylem ei newid, a beth newidiodd mewn gwirionedd?**
Mae hyn yn profi'r dilyn drwodd. Gofynnwch am gamau gweithredu a'u statws. Disgwyliwch fod rhai ar agor ers misoedd. Dilynwch trwy neilltuo perchnogion a dyddiadau a'u hadolygu ymhen mis.

**Ymhle y gallai AI helpu yn ystod digwyddiad, ac ymhle mae'n rhaid i unigolyn benderfynu?**
Gall AI grynhoi'r llinell amser, chwilio digwyddiadau yn y gorffennol, a drafftio diweddariadau. Ni all fod yn atebol. Gofynnwch pa gamau y caiff AI eu cymryd heb gymeradwyaeth, os o gwbl. Dilynwch trwy ddewis un defnydd risg isel a chytuno ar sut y caiff ei allbwn ei wirio.

## Yn ymarferol: enghraifft o reoli gwasanaethau

Mae tîm digidol cadwyn fferyllfeydd genedlaethol yn rhedeg ap sy'n gadael i gwsmeriaid archebu presgripsiynau ailadroddus. Un nos Wener, mae archebion yn dechrau methu i tua 30 y cant o ddefnyddwyr. Mae'r peiriannydd ar alwad yn gweld gwallau o gronfa ddata ac yn galw arweinydd y digwyddiad yn ôl y rota. Mae'r arweinydd yn datgan digwyddiad difrifoldeb dau gan na all defnyddwyr gwblhau tasg graidd, yn neilltuo arweinydd cyfathrebu, ac yn cychwyn llinell amser.

O fewn 15 munud mae'r tîm yn amau newid cronfa ddata a ddefnyddiwyd y prynhawn hwnnw. Mae'r arweinydd yn gofyn a yw ei ôl-dreiglo yn ddiogel; mae'r peiriannydd a wnaeth y newid yn cadarnhau ei fod. Mae'r tîm yn ôl-dreiglo, ac mae archebion yn adfer o fewn pum munud. Cyfanswm yr amser o'r rhybudd cyntaf i'r adferiad yw 47 munud. Roedd yr arweinydd cyfathrebu wedi postio ar y dudalen statws ar ôl 20 munud, eto ar ôl 35, a diweddariad terfynol wrth adfer, ac wedi dweud wrth y tîm gwasanaeth cwsmeriaid beth i'w ddweud.

Yr wythnos nesaf mae'r tîm yn cynnal adolygiad di-fai. Mae'r llinell amser yn dangos bod canfod yn dibynnu ar gŵyn gan ddefnyddiwr, gan nad oedd unrhyw rybudd yn cwmpasu archebion a fethodd; roedd y newid wedi'i adolygu ond nid oedd gan yr amgylchedd prawf ddata realistig; ac roedd y diweddariad cyntaf yn arafach na'r cyfnod y cytunwyd arno oherwydd bod yr arweinydd cyfathrebu yn ansicr beth y caniateid i'r dudalen statws ei ddweud. Mae'r tîm yn ychwanegu rhybudd ar gyfradd methiant archebion, yn gwella data prawf, ac yn ysgrifennu templed tudalen statws.

Beth sy'n newid: caiff y digwyddiad tebyg nesaf ei ganfod gan y rhybudd o fewn tri munud. Beth sy'n parhau'n anodd: nid yw'r data prawf yn cynnwys unrhyw wybodaeth cleifion go iawn, am resymau da, sy'n cyfyngu pa mor realistig y gall fod; ychydig o beirianwyr sydd ar y rota o hyd a all ôl-dreiglo'r gronfa ddata yn ddiogel; ac mae gan restr camau gweithredu'r adolygiad ddeuddeg eitem ac mae gan y tîm amser ar gyfer pump. Maent yn dewis yn ôl risg ac yn rhoi'r gweddill ar yr ôl-groniad gyda dyddiadau.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Adeiladwch ar gyfer adferiad: gwnewch newidiadau'n wrthdroadwy, ychwanegwch rybuddion a logiau sy'n dangos effaith ar ddefnyddwyr, ac ysgrifennwch lawlyfrau gweithredu wrth fynd. Cymerwch ran mewn adolygiadau a thrwsiwch achosion mewn dylunio.

### Timau gwasanaeth a gweithrediadau

Gwyddoch eich rôl, ymarferwch, a chadwch y llinell amser. Uwchgyfeiriwch yn gynnar, cyfathrebwch yn gyson, a gofalwch am eich gilydd. Dewch â'r hyn a ddysgwch i adolygiadau a'i ddefnyddio i wella llawlyfrau gweithredu a monitro.

### Arweinyddiaeth a llywodraethu

Cytunwch ar ddiffiniadau difrifoldeb a disgwyliadau ymlaen llaw, a gwrthsefwch briodoli bai. Yn ystod digwyddiad mawr, cefnogwch yr arweinydd a gofynnwch am ddiweddariadau trwy'r sianel y cytunwyd arni yn unig. Ariennwch y camau gweithredu dilynol.

### Cwsmeriaid a defnyddwyr

Dylid dweud wrthych yn brydlon beth sy'n cael ei effeithio, beth sy'n cael ei wneud, a phryd y byddwch yn clywed nesaf. Adroddwch yr hyn a welwch, gyda manylion. Ar ôl digwyddiad mawr, disgwyliwch gyfrif clir o'r hyn a newidiodd.

## Ystwyth, AI, awtomeiddio a dadansoddeg

### Ystwyth

Trinwch adolygiadau digwyddiadau fel y ddolen adborth fer sy'n gyrru gwelliant: newidiadau bach i lawlyfrau gweithredu, rhybuddion a dyluniad, a wneir yn gyflym gyda rhanddeiliaid yn cael eu hysbysu. Rhybudd: mae rhestr gamau gweithredu hir na fydd neb yn ei gorffen yn waeth na rhestr fer a gwblheir.

### AI

Gall AI ddrafftio diweddariadau, crynhoi'r llinell amser a'r sgwrs, a dod o hyd i ddigwyddiadau tebyg yn gynharach. Mae arweinydd y digwyddiad yn parhau'n atebol, ac awgrym yw allbwn AI. Rhybudd: gall AI ddyfeisio achosion neu amseriadau, a gall diweddariad a ddrafftiwyd yn awtomatig a anfonir heb ei adolygu gamarwain cwsmeriaid; gwiriwch bob amser cyn anfon. Gweler Pwnc 5.4 — AI Cynhyrchiol ar gyfer Digwyddiadau, Gwybodaeth a Newidiadau.

### Awtomeiddio

Awtomeiddiwch gamau ymateb diogel, ailadroddadwy, fel casglu data diagnostig, tudalennu'r bobl iawn, a gweithredu ailgychwyn a adolygwyd, gyda logiau a therfynau. Rhybudd: gall awtomeiddio sy'n gweithredu yn ystod digwyddiad ei wneud yn waeth; cadwch stop â llaw, a phrofwch mewn amgylchedd diogel. Gweler Pwnc 6.6 — Awtomeiddio Llawlyfrau Gweithredu ac Awto-adfer.

### Dadansoddeg

Edrychwch ar amser i ganfod, ymateb ac adfer, ar ddosraniad pob un, ac ar ddigwyddiadau a ailadroddir. Rhybudd: mae cyfartaleddau'n cuddio'r digwyddiadau gwaethaf, mae diffiniadau o ddechrau a diwedd yn amrywio, ac mae mesurau a ddefnyddir i farnu timau yn gwahodd trin stampiau amser; astudiwch ddigwyddiadau unigol hefyd. Gweler y llyfr *Service Management Metrics* a Phwnc 7.3 — Mesur ac Adrodd.

## Dulliau methu cyffredin

- **Dadlau difrifoldeb yn ystod y digwyddiad.** Colli amser. Ysgrifennwch ddiffiniadau gyda ffeithiau y gellir eu harsylwi.
- **Dim arweinydd clir.** Mae pawb yn gweithredu ac nid oes neb yn penderfynu. Enwch yr arweinydd a'i gyhoeddi.
- **Ymchwilio tra bo'r gwasanaeth i lawr.** Mae adferiad yn cael ei oedi. Cymhwyswch ateb dros dro diogel yn gyntaf.
- **Tawelwch i ddefnyddwyr.** Mae gorbryder a chysylltiadau mynych yn codi. Diweddarwch ar rythm.
- **Bai mewn adolygiadau.** Mae pobl yn cuddio camgymeriadau. Cynhaliwch adolygiadau di-fai a tracwch gamau gweithredu.
- **Dibyniaeth ar arwyr.** Mae un person yn trwsio popeth. Rhannwch wybodaeth ac ysgrifennwch lawlyfrau gweithredu.
- **Awto-gamau heb derfynau.** Mae awtomeiddio yn gwaethygu digwyddiad. Ychwanegwch derfynau, logiau a stop â llaw.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydlynu |
|---|---|---|---|---|---|
| Difrifoldeb a phroses | Ad hoc | Lefelau anffurfiol | Lefelau wedi'u diffinio gyda disgwyliadau ymateb | Lefelau'n cael eu hadolygu gyda data | Proses yn addasu ar draws gwasanaethau a phartneriaid |
| Rolau ac ymarfer | Wedi'u byrfyfyrio | Rhai rolau wedi'u henwi | Rolau wedi'u diffinio a'u hymarfer | Ymarferion yn cael eu mesur a'u gwella | Ymarferion yn cael eu rhannu gyda chyflenwyr a chwsmeriaid |
| Cyfathrebu | Afreolaidd | Diweddariadau pan gofir | Rhythm diweddaru a sianeli fesul difrifoldeb | Ansawdd cyfathrebu yn cael ei adolygu | Cyson ar draws timau, cwsmeriaid a phartneriaid |
| Dysgu | Bai | Adolygiadau achlysurol | Adolygiadau di-fai gyda chamau gweithredu wedi'u holrhain | Ailddigwyddiad yn cael ei fesur a'i leihau | Dysgu'n cael ei rannu ar draws y sefydliad |

## Rhestr wirio

- [ ] Mae lefelau difrifoldeb wedi'u diffinio gyda ffeithiau y gellir eu harsylwi ac ymatebion disgwyliedig.
- [ ] Mae rolau digwyddiadau wedi'u henwi a'u hymarfer.
- [ ] Mae sbardunau uwchgyfeirio wedi'u hysgrifennu.
- [ ] Cedwir llinell amser fyw ar gyfer digwyddiadau sylweddol.
- [ ] Mae cyfnodau diweddaru a sianeli wedi'u gosod ar gyfer pob difrifoldeb.
- [ ] Mae llwyth ar alwad yn gyfyngedig ac yn cael ei fonitro.
- [ ] Mae adolygiadau'n ddi-fai ac mae camau gweithredu'n cael eu holrhain nes eu cwblhau.
- [ ] Mae gan AI ac awtomeiddio a ddefnyddir mewn digwyddiadau berchennog, terfynau ac adolygiad.

## Anogwyr AI

**Crynhoi llinell amser digwyddiad i'w hadolygu.**

```text
Dyma negeseuon sgwrs a nodiadau o ddigwyddiad, gydag amseroedd ac enwau wedi'u tynnu: [gludwch y testun].
Cynhyrchwch linell amser o ddigwyddiadau allweddol, rhestr o benderfyniadau a phwy a'u gwnaeth (yn ôl rôl yn unig), beth a helpodd, beth a'n harafodd, a chwestiynau ar gyfer yr adolygiad. Defnyddiwch y testun yn unig a nodwch unrhyw beth ansicr.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Drafftio diweddariad statws i'w adolygu.**

```text
Ffeithiau rydym yn eu gwybod: [gludwch ffeithiau wedi'u cadarnhau]. Ffeithiau nad ydym yn eu gwybod: [rhestrwch]. Diweddariad nesaf ymhen: [amser].
Drafftiwch ddiweddariad statws o dan 80 gair mewn iaith syml sy'n datgan beth sy'n cael ei effeithio, beth rydym yn ei wneud, a phryd y mae'r diweddariad nesaf i'w ddisgwyl. Peidiwch â dyfalu achosion na rhoi amcangyfrif ar gyfer adferiad nad yw yn y ffeithiau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

**Gwirio diffiniadau difrifoldeb.**

```text
Ein diffiniadau difrifoldeb: [gludwch]. Dyma dri digwyddiad yn y gorffennol gyda'u heffaith: [gludwch].
Ar gyfer pob digwyddiad, dywedwch pa lefel y mae'r diffiniadau'n ei hawgrymu, dyfynnwch y geiriau a ddefnyddiwyd gennych, a nodwch ble roedd y diffiniadau'n amwys. Peidiwch â newid y diffiniadau.
Rhestrwch y pethau rydych yn ansicr ohonynt.
```

## Sgiliau AI

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): defnyddiwch i ddiffinio rolau, difrifoldeb a chamau ar gyfer ymateb i ddigwyddiadau.
- [postmortem](../../../../skills/postmortem/SKILL.md): defnyddiwch i redeg adolygiad di-fai gyda chamau gweithredu wedi'u holrhain.
- [runbook](../../../../skills/runbook/SKILL.md): defnyddiwch i ddal camau ymateb ar gyfer methiannau hysbys.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): defnyddiwch i gynllunio diweddariadau i ddefnyddwyr a rhanddeiliaid.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): defnyddiwch i ddylunio trefniant ar alwad cynaliadwy.

## Prif ffynonellau

- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), penodau ar ymateb i ddigwyddiadau ac ôl-drafodaethau (postmortems), am ddim yn sre.google: arweiniad ymarferol gan weithredwr mawr.
- PeopleCert, ITIL certification pages: disgrifiad y perchennog o'r arfer rheoli digwyddiadau.
- Wikipedia, "Incident management": trosolwg o'r arfer.
- Wikipedia, "Incident Command System": y model rheoli argyfyngau a ddylanwadodd ar rolau digwyddiadau technegol.

## Cyfeiriadau

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
