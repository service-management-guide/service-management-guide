# Uhandisi wa Uaminifu wa Tovuti

**Uhandisi wa uaminifu wa tovuti (SRE) unachukulia uendeshaji kama tatizo la uhandisi: unaweka malengo ya uaminifu yanayopimika, unatumia bajeti ya makosa kwa mabadiliko, unaondoa kazi ya kujirudia (toil) kwa programu, na unajifunza kutokana na kushindwa bila lawama; unaeleza mazoea mengi ya usimamizi wa huduma kwa maneno ya uhandisi.**

## Kwa nini hili ni muhimu

Kila huduma ina mvutano kati ya mabadiliko na uaminifu. Wateja wanataka vipengele vipya na wanataka huduma ifanye kazi. Timu zinazosukuma mabadiliko haraka husababisha hitilafu, na timu zinazolinda utulivu hupunguza kasi ya kila kitu. Bila njia ya kupima hivyo viwili, mjadala unatatuliwa na mwenye sauti kubwa zaidi, au tukio la mwisho la hitilafu.

Uhandisi wa uaminifu wa tovuti unatoa njia ya kufanya maridhiano yawe wazi. Unaanza na wazo kwamba uaminifu kamili hauwezekani wala hauhitajiki: watumiaji hawawezi kutofautisha kati ya upatikanaji wa asilimia 99.999 na 99.99 wakati kifaa chao na mtandao hushindwa mara nyingi kuliko hivyo, na kila tisa ya ziada hugharimu zaidi sana. Kwa hiyo timu inakubaliana lengo linalolingana na kile watumiaji wanahitaji, inalipima, na inatumia nafasi kati ya lengo na ukamilifu kama bajeti ya hatari.

SRE ilianza Google mwanzoni mwa miaka ya 2000 na inaelezwa katika vitabu ambavyo kampuni imevichapisha mtandaoni. Mashirika mengine mengi yamepokea sehemu zake. Kwa usimamizi wa huduma, thamani yake ni kwamba inatoa matoleo halisi, ya mtindo wa uhandisi ya mawazo ambayo ITIL inaita usimamizi wa kiwango cha huduma, usimamizi wa upatikanaji, na uboreshaji endelevu. Mada hii inaeleza mawazo makuu na kuonya dhidi ya kuyanakili bila muktadha uliyafanya yafanye kazi.

## Dhana kuu

**SRE ni nini.** Wikipedia inaeleza uhandisi wa uaminifu wa tovuti kama seti ya kanuni na mazoea yanayotumia vipengele vya uhandisi wa programu kwa miundombinu na uendeshaji wa TEHAMA, ili kuunda mifumo inayoweza kupanuka na ya kuaminika. Timu ya SRE kwa kawaida inajumuisha watu wenye ujuzi wa programu na mifumo wanaofanya kazi ya uendeshaji kuwa ya kiotomatiki na wanaoshiriki katika usanifu wa uaminifu.

**Kiashiria cha kiwango cha huduma (SLI).** Kipimo cha kipengele fulani cha huduma kama watumiaji wanavyokipitia, kama sehemu ya maombi yanayofaulu, au sehemu inayokamilika ndani ya milisekunde 300. Kiashiria kizuri kinaakisi kile watumiaji wanachojali, si kile ambacho ni rahisi kupima.

**Lengo la kiwango cha huduma (SLO).** Lengo la kiashiria kwa kipindi, kwa mfano "asilimia 99.9 ya maombi hufaulu katika siku 30 zinazoendelea". Lengo ni lengo la ndani lililokubaliwa kati ya watu wanaoendesha huduma na watu wanaoitegemea. Wikipedia inaeleza malengo ya kiwango cha huduma kama sehemu ya makubaliano ya kiwango cha huduma.

**Makubaliano ya kiwango cha huduma (SLA).** Mkataba wenye matokeo, mara nyingi ya kifedha, huduma ikishuka chini ya kiwango kilichokubaliwa. SLA kwa kawaida huweka lengo lisilobana kuliko SLO ya ndani, ili timu iwe na onyo kabla ya ukiukaji. Tazama mada 3.7 — Usimamizi wa Kiwango cha Huduma.

**Bajeti ya makosa.** Kiasi kinachoruhusiwa cha kutokuwa na uaminifu: kama lengo ni asilimia 99.9, bajeti ni asilimia 0.1 iliyobaki. Bajeti ikiwa bado ipo, timu inaweza kuchukua hatari, kama kutoa kwa kasi zaidi. Bajeti ikiisha, timu inapunguza kasi ya mabadiliko na kuwekeza katika uaminifu. Bajeti hufanya maridhiano kati ya uaminifu na mabadiliko kuwa uamuzi wa pamoja, unaopimika badala ya mabishano.

**Toil.** Kazi ambayo ni ya mikono, inayojirudia, inayoweza kufanywa otomatiki, ya kimbinu, na inayokua na huduma bila kuongeza thamani ya kudumu. Mifano ni kuanzisha huduma upya kwa mikono, kushughulikia kwa mikono aina ileile ya ombi, na kukiri tahadhari zenye kelele. Zoea la SRE linapunguza sehemu ya muda unaotumika kwenye toil, mara nyingi hadi takriban nusu, na kutumia iliyobaki kwa kazi ya uhandisi inayoipunguza.

**Ufuatiliaji na tahadhari.** Tahadhari zinapaswa kutekelezeka na kufungwa na dalili ambazo watumiaji wanazihisi, zikiwa na jibu lililo wazi. Tahadhari zenye kelele ambazo hakuna anayezitendea kazi hufundisha watu kuzipuuza. Tazama mada 3.10 — Ufuatiliaji na Usimamizi wa Matukio ya Mfumo na mada 7.4 — Uwezo wa kuchunguza na telemetria.

**Jibu la tukio la hitilafu na mapitio yasiyo na lawama.** SRE inasisitiza majukumu wazi wakati wa matukio ya hitilafu, mawasiliano, na mapitio yaliyopangwa baadaye yanayoangalia mfumo na kuzalisha hatua zinazofuatiliwa. Tazama mada 3.2 — Usimamizi wa Matukio ya Hitilafu na mada 3.3 — Usimamizi wa Matatizo.

**Uwezo na utendaji.** SRE inajumuisha kutabiri mahitaji, kujaribu mipaka, na kupanga uwezo ili ukuaji usisababishe kushindwa. Tazama mada 3.11 — Upatikanaji, Uwezo, na Utendaji.

**Uhandisi wa matoleo na mabadiliko.** Matoleo ya kuaminika, yanayoweza kurudiwa, mara nyingi yakiwa na utoaji wa hatua kwa hatua na kurudisha nyuma kiotomatiki, ni sehemu ya kazi ya SRE. Tazama mada 2.2 — Utoaji endelevu.

**Kufanyia mazoezi kushindwa.** Uhandisi wa fujo huingiza kushindwa kwa makusudi, chini ya udhibiti, kupata udhaifu kabla matukio halisi ya hitilafu hayajafanya hivyo. Siku za michezo hufanyia mazoezi jibu. Tazama mada 3.12 — Usimamizi wa Mwendelezo wa Huduma.

**SRE na DevOps.** Viwili vinashiriki mawazo mengi. Maelezo ya kawaida ni kwamba SRE ni njia moja ya kutekeleza kanuni za DevOps, ikiwa na seti mahususi ya mazoea kama SLO, bajeti za makosa, na vikomo vya toil. Tazama mada 2.5 — DevOps.

**SRE na ITIL.** SLO na bajeti za makosa ziko kando ya usimamizi wa kiwango cha huduma; mapitio yasiyo na lawama yako kando ya usimamizi wa matatizo; kupunguza toil kunaunga mkono uboreshaji endelevu. SRE inaeleza jinsi timu ya kiufundi inavyoweza kufanya kazi kama hiyo, huku ITIL ikieleza mazoea ambayo shirika linahitaji kwa ujumla.

**Mipaka ya kunakili.** SRE iliendelezwa katika shirika kubwa sana la uhandisi lenye ukubwa na wafanyakazi mahususi. Timu ndogo haiwezi, na haihitaji, kunakili muundo wake. Anza na mawazo machache: chagua kiashiria kinacholenga mtumiaji, weka lengo, na uandike utakachofanya bajeti ikiisha.

**Lenzi zinavyolingana.** SRE kwa kiasi kikubwa ni upande wa uhandisi wa lenzi ya uchapuchapu kwa huduma zilizo hewani. AI inaweza kusaidia katika kuchuja tahadhari na muhtasari wa matukio ya hitilafu, chini ya mapitio ya binadamu. Uendeshaji otomatiki ndio zana kuu dhidi ya toil. Uchanganuzi unatoa SLI na data kuhusu toil na matukio ya hitilafu.

## Mazoea bora

1. **Chagua viashiria vinavyoakisi uzoefu wa mtumiaji.** Uliza mtumiaji angesema nini ni "inafanya kazi": kurasa zinazopakia, malipo yanayokamilika, faili zinazofika. Pima hilo, si matumizi ya CPU.
2. **Weka lengo na watu wanaoitegemea huduma.** Kubaliana namba inayolingana na hitaji halisi, iliyoandikwa pamoja na kipindi na jinsi inavyopimwa. Ipitie tena mahitaji yanapobadilika.
3. **Tumia bajeti ya makosa kufanya maamuzi.** Andika kinachotokea bajeti inapokaribia kuisha, kama kusimamisha mabadiliko hatari, na nani anaamua. Kubaliana hili kabla ya mara ya kwanza litakapokuwa muhimu.
4. **Weka malengo kuwa makali kuliko makubaliano.** Weka lengo lako la ndani ili ugundue tatizo kabla hujakiuka mkataba. Tazama mada 3.7 — Usimamizi wa Kiwango cha Huduma.
5. **Hesabu na uwekee kikomo toil.** Fuatilia muda unaotumika kwenye kazi ya mikono inayojirudia, na uweke kikomo. Tumia iliyobaki kuondoa vyanzo vikubwa vya toil.
6. **Toa tahadhari kwa dalili, na uziweke zikitekelezeka.** Kila tahadhari inapaswa kusema nini kibaya kwa watumiaji na cha kufanya. Ondoa au rekebisha tahadhari ambazo hakuna anayezitendea kazi.
7. **Shiriki zamu za kuitwa kwa haki na kwa uendelevu.** Weka kikomo cha idadi ya mialiko kwa zamu, toa mafunzo na njia iliyoandikwa ya kupandisha, na upitie mzigo mara kwa mara. Tazama mada 8.3 — Mabadiliko ya Shirika na Kukubalika.
8. **Pitia matukio ya hitilafu bila lawama na ufuatilie hadi mwisho.** Andika ratiba ya matukio, sababu zilizochangia, na hatua zenye wamiliki na tarehe. Kagua kwamba hatua zimefanyika.
9. **Fanyia mazoezi kushindwa katika hali salama.** Endesha siku za michezo na majaribio madogo ya fujo katika mazingira ya majaribio au kwa mfiduo mdogo, ukiwa na kitufe cha wazi cha kusimamisha.
10. **Anza ndogo.** Chagua huduma moja muhimu, fafanua SLI moja au mbili na SLO, na ujifunze kutokana na matokeo kabla ya kupanua.

## Maswali ya kujadili na timu yako

**Watumiaji wetu wangesema "inafanya kazi" inamaanisha nini kwa huduma hii, na je, tunapima?**
Hiki ndicho kianzio cha viashiria. Timu mara nyingi hupima afya ya seva badala yake. Uliza mara ya mwisho watumiaji hawakuridhika huku dashibodi zetu zikiwa za kijani. Ili kwenda mbali zaidi, chagua kiashiria kimoja kinachowaelekea watumiaji cha kupima.

**Huduma hii inahitaji kuwa ya kuaminika kiasi gani hasa, na nani aliamua?**
Malengo mara nyingi huwekwa kwa mazoea, kwa mfano "tisa tano". Uliza watumiaji hufanya nini huduma ikiwa chini na saa moja ya kuwa chini inagharimu kiasi gani. Tarajia kutokubaliana. Ili kwenda mbali zaidi, andaa lengo na ulikague na mteja.

**Tutafanya nini tukishatumia bajeti ya makosa, na je, tutafanya kweli?**
Sera ambazo hazitumiki kamwe hufundisha watu kuzipuuza. Uliza kilichotokea mara ya mwisho uaminifu ulipoathirika na mabadiliko yakaendelea. Ili kwenda mbali zaidi, kubaliana jibu dogo, mahususi na nani anaamua.

**Vyanzo vitatu vikubwa vya toil kwa timu yetu ni vipi, na ingehitaji nini kuviondoa kila kimoja?**
Waombe watu waorodheshe kazi zinazojirudia na wakadirie muda. Tarajia kuanzisha upya kwa mikono, marekebisho ya data, na maombi ya ufikiaji. Ili kwenda mbali zaidi, chagua kipengele kimoja na ukadirie kazi ya kukifanya otomatiki, ikilinganishwa na muda utakaookolewa kwa mwaka.

**Watu wetu wa zamu waliitwa mara ngapi mwezi uliopita, na ni mara ngapi zilihitaji hatua ya binadamu?**
Hii inajaribu ubora wa tahadhari na mzigo wa kazi. Omba namba; kama hakuna anayejua, huo ni matokeo. Ili kwenda mbali zaidi, chagua tahadhari yenye kelele zaidi ya kuirekebisha au kuifuta.

**AI inaweza kusaidia wapi katika tahadhari au muhtasari wa matukio ya hitilafu, na tungegunduaje makosa yake?**
AI inaweza kuweka tahadhari katika makundi, kuandaa muhtasari, na kupendekeza hatua za kitabu cha uendeshaji. Pia inaweza kuficha ishara halisi au kubuni sababu. Uliza nani anaimiliki na matokeo yake yanakaguliwaje. Ili kwenda mbali zaidi, jaribu zana ya muhtasari sambamba na mchakato wa binadamu na ulinganishe.

## Kwa vitendo: mfano wa usimamizi wa huduma

Timu ya kumbukumbu za kidijitali ya maktaba ya kitaifa inaendesha huduma ya utafutaji kwa watafiti. Timu ya sita iko kwenye zamu za kuitwa kwa mzunguko. Mialiko huwasili usiku takriban mara moja kwa wiki, hasa kutoka kwa tahadhari ya nafasi ya diski kwenye seva ya makundi ambayo mtu huifuta kwa mikono. Menejimenti inaomba "upatikanaji wa asilimia 99.99" katika mpango wa mwaka, ingawa hakuna aliyepima utendaji wa sasa.

Kiongozi wa timu anapendekeza jaribio dogo zaidi. Na watafiti wawili, timu inafafanua kiashiria kimoja: sehemu ya maombi ya utafutaji yanayorudisha matokeo ndani ya sekunde mbili. Wanakipima kwa mwezi, na kupata asilimia 99.2. Watafiti wanasema wanagundua ucheleweshaji tu utafutaji unapochukua zaidi ya sekunde tano, jambo linalotokea kwa takriban asilimia 0.3 ya maombi, hasa wakati wa kujenga upya faharasa usiku. Wanakubaliana lengo la asilimia 99.5 ndani ya sekunde mbili kwa siku 30, na sera ya bajeti ya makosa: ikiwa zaidi ya asilimia 75 ya bajeti imetumika katika kipindi, timu inasimamisha matoleo yasiyo ya dharura na kurekebisha chanzo kikubwa zaidi.

Timu pia inahesabu toil. Kufuta diski kwa mikono kunachukua takriban saa mbili kwa mwezi na kunamwamsha mtu. Wanaifanya usafishaji kuwa wa kiotomatiki, wanaongeza tahadhari ya ukuaji wa haraka badala ya diski kamili, na wanafanya mazoezi ya siku ya mchezo ya kurejesha faharasa kutoka kwa nakala rudufu.

Kinachobadilika: mialiko ya usiku inapungua, na matoleo yanasimamishwa mara moja katika robo ya kwanza bajeti inapopungua, chanzo kikifuatiliwa hadi swali moja polepole. Kinachobaki kigumu: mpango wa mwaka bado unasema "asilimia 99.99", kwa sababu mameneja wakuu hawajakubali kuubadilisha; kujenga upya faharasa kunategemea huduma ya hifadhi inayoendeshwa na idara nyingine; na timu haina uhakika kama watafiti katika maeneo mengine ya saa wanapitia huduma vilevile. Kiongozi anapeleka maneno ya mpango kwenye mapitio yanayofuata.

## Mitazamo minne

### Timu za bidhaa na utoaji

Shiriki lengo na bajeti na uendeshaji. Jumuisha kazi ya uaminifu kwenye orodha ya kazi, toa kwa hatua kwa hatua, na utazame athari ya mabadiliko. Bajeti ikiisha, jiunge na juhudi za kupunguza chanzo.

### Timu za huduma na uendeshaji

Fafanua viashiria pamoja na watumiaji, weka tahadhari zikitekelezeka, na utumie muda wako kwenye uhandisi unaoondoa toil. Leta mzigo wa kuitwa na data ya matukio ya hitilafu kwenye mipango. Andika mapitio yanayoongoza kwenye hatua zinazofuatiliwa.

### Uongozi na utawala

Kubaliana malengo yanayoakisi hitaji halisi, na uunge mkono sera ya bajeti inapohitaji kupunguza kasi ya mabadiliko. Fadhili muda wa kupunguza toil na kazi ya uaminifu. Usiombe ukamilifu.

### Wateja na watumiaji

Unapaswa kuulizwa "inafanya kazi" inamaanisha nini kwako na kuambiwa lengo ni nini. Ripoti matatizo kwa uwazi, na tarajia kusikia kilichofanywa. Kama lengo linaonekana kuwa si sahihi kwa mahitaji yako, sema hivyo.

## Uchapuchapu, AI, uendeshaji otomatiki na uchanganuzi

### Uchapuchapu

SRE inaongeza malengo ya uaminifu yanayopimika kwenye utoaji na uboreshaji endelevu. Wadau washirikishwe katika kuweka malengo, na yapitiwe mara kwa mara. Tahadhari: bajeti za makosa hazibadilishi busara; baadhi ya matukio ya hitilafu, kama uvunjaji wa data, ni muhimu bila kujali bajeti.

### AI

AI inaweza kuweka tahadhari zinazohusiana katika makundi, kupendekeza sababu zinazowezekana, na kuandaa muhtasari wa matukio ya hitilafu. Kila matumizi yanahitaji mmiliki na binadamu anayewajibika kwa maamuzi, na njia ya kulinganisha mapendekezo ya AI na kilichotokea kweli. Tahadhari: AI inayokandamiza tahadhari kupunguza kelele inaweza kuficha kushindwa halisi; ijaribu na matukio ya hitilafu yanayojulikana. Tazama mada 5.2 — AIOps.

### Uendeshaji otomatiki

Fanya toil iwe ya kiotomatiki: kuanzisha upya, usafishaji, ufikiaji wa kawaida, na uchunguzi unaorudiwa, ukiwa na kumbukumbu, vikomo, na njia ya kuuzima. Tahadhari: uendeshaji otomatiki unaotenda kwenye uzalishaji unaweza kufanya tukio la hitilafu kuwa baya zaidi; ongeza vikomo vya kiwango na kusimamisha kwa mikono. Tazama mada 6.6 — Uendeshaji otomatiki wa vitabu vya uendeshaji na urekebishaji wa kiotomatiki.

### Uchanganuzi

Tumia SLI, ufikiaji wa SLO, kasi ya matumizi ya bajeti ya makosa, saa za toil, na ubora wa tahadhari. Tahadhari: malengo yaliyochaguliwa kwa sababu ni rahisi kufikia, au viashiria vinavyopuuza sehemu za uzoefu wa mtumiaji, vinatoa faraja ya uongo; vikague dhidi ya malalamiko ya watumiaji. Tazama mada 7.4 — Uwezo wa kuchunguza na telemetria na kitabu cha *Service Management Metrics*.

## Njia za kawaida za kushindwa

- **Kunakili namba kutoka kwa wengine.** "Tisa tano" inapokelewa bila kujua hitaji. Amua kutoka kwa hitaji la mtumiaji na gharama.
- **Viashiria vinavyokosa mtumiaji.** Dashibodi ni za kijani na watumiaji wanalalamika. Pima watumiaji wanachopitia.
- **Sera ya bajeti ambayo hakuna anayeifuata.** Mabadiliko yanaendelea bajeti ikiisha. Kubaliana jibu mapema na uitekeleze.
- **Kelele za tahadhari.** Watu wa zamu wanapuuza mialiko. Fanya kila tahadhari itekelezeke.
- **Toil kama kawaida.** Timu haipati muda wa kufanya otomatiki. Ihesabu na uweke kikomo.
- **SRE kama jina jipya la uendeshaji.** Mazoea hayapokelewi. Fafanua viashiria, malengo, na bajeti.
- **Utamaduni wa mashujaa.** Mtu mmoja anatatua kila tukio la hitilafu. Shiriki maarifa na vitabu vya uendeshaji.

## Modeli ya ukomavu

| Kipimo | Kuanzisha | Kuendeleza | Kusanifisha | Kusimamia | Kuratibu |
|---|---|---|---|---|---|
| Viashiria na malengo | Hakuna vipimo vinavyomwelekea mtumiaji | Vipimo vya miundombinu pekee | SLI na SLO zinazomlenga mtumiaji kwa huduma muhimu | Malengo yanapitiwa na watumiaji na gharama | Malengo yanaratibiwa kati ya huduma zinazotegemeana |
| Bajeti ya makosa | Hakuna | Imejadiliwa | Sera iliyoandikwa inatumika | Matokeo ya sera yanapitiwa | Bajeti zinashirikiwa kati ya timu na washirika |
| Toil | Haipimwi | Inatambuliwa kwa njia isiyo rasmi | Inahesabiwa na kuwekewa kikomo | Inapunguzwa kwa uendeshaji otomatiki unaofuatiliwa | Inapunguzwa kati ya huduma kwa zana zinazoshirikiwa |
| Kujifunza kutokana na matukio ya hitilafu | Lawama | Baadhi ya mapitio | Mapitio yasiyo na lawama yenye hatua zinazofuatiliwa | Kukamilika kwa hatua na kujirudia vinapimwa | Kujifunza kunashirikiwa katika shirika |

## Orodha hakiki

- [ ] Tuna angalau kiashiria kimoja kinachomwelekea mtumiaji kwa kila huduma muhimu.
- [ ] Kila kimoja kina lengo lililokubaliwa na watu wanaokitegemea.
- [ ] Tuliandika kinachotokea bajeti ya makosa inapokaribia kuisha.
- [ ] Malengo yetu ya ndani ni makali kuliko makubaliano yetu.
- [ ] Tunafuatilia toil na tuna kikomo.
- [ ] Tahadhari zinatekelezeka, na zenye kelele zinarekebishwa au kuondolewa.
- [ ] Mzigo wa kuitwa unapimwa na ni endelevu.
- [ ] Mapitio ya matukio ya hitilafu hayana lawama na hatua zinafuatiliwa hadi kukamilika.

## Maelekezo ya AI

**Andaa viashiria vinavyowezekana.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Kokotoa matumizi ya bajeti ya makosa.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Panga wagombea wa toil.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## Ujuzi wa AI

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): tumia kuhusisha malengo na makubaliano.
- [postmortem](../../../../skills/postmortem/SKILL.md): tumia kuendesha mapitio yasiyo na lawama yenye hatua zinazofuatiliwa.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): tumia kupanga majaribio salama ya kushindwa.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): tumia kutabiri mahitaji na mipaka.

## Vyanzo vikuu

- Betsy Beyer, Chris Jones, Jennifer Petoff, and Niall Richard Murphy (eds.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), freely available at sre.google: chanzo kikuu cha mazoea.
- Betsy Beyer and others (eds.), *The Site Reliability Workbook* (2018): mwongozo wa vitendo wa upokeaji.
- Wikipedia, "Site reliability engineering": muhtasari usioegemea.
- Wikipedia, "Service-level objective": usuli wa istilahi.

## Marejeo

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
