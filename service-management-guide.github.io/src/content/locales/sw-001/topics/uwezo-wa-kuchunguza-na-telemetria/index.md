# Uwezo wa kuchunguza na telemetria

**Uwezo wa kuchunguza (observability) ni uwezo wa kuuliza maswali mapya kwa mfumo unaoendeshwa na kupata majibu kutoka kwa data unayotoa: vipimo, kumbukumbu, na ufuatiliaji wa njia vyenye muktadha thabiti; hulipa telemetria inapobuniwa ndani, kusanifishwa kwa miundo wazi, kuwekwa kwa gharama unayoimudu, na kutumika kuelewa uzoefu wa mtumiaji, si afya ya mashine tu.**

## Kwa nini hili ni muhimu

Ufuatiliaji hujibu maswali uliyofikiria mapema. Je, huduma iko hewani? Je, diski imejaa? Je, ucheleweshaji uko juu ya sekunde mbili? Hayo ni maswali mazuri, na hunasa kushindwa ulikokwisha ona. Lakini huduma za kisasa hushindwa kwa njia mpya. Badiliko katika kijenzi kimoja hupunguza kasi ombi katika kingine. Data isiyo ya kawaida ya mteja mmoja huanzisha njia nadra. Utegemezi wa tabaka tatu chini unazorota, na hakuna aliye na dashibodi kwa ajili yake.

Kushindwa mpya kunapowasili, timu inahitaji kuuliza maswali ambayo hakuna aliyetarajia: maombi gani ni polepole, kwa watumiaji gani, kupitia huduma gani, tangu toleo lipi? Mfumo ukitoa data tajiri, iliyounganishwa, timu inaweza kufuata njia. Ikiwa sivyo, wanakisia, wanaongeza kumbukumbu, wanapeleka upya, na kusubiri kushindwa kutokee tena. Wikipedia inaeleza uwezo wa kuchunguza katika programu kama uwezo wa kuelewa hali ya ndani ya mfumo kutoka kwa matokeo yake ya nje, wazo lililokopwa kutoka nadharia ya udhibiti.

Kazi ya vitendo iko katika telemetria: data ambayo mifumo hutoa kujihusu. Telemetria nzuri imebuniwa, thabiti, na imeunganishwa, ili malalamiko ya mtumiaji yaweze kufuatiliwa hadi ombi, ombi hadi huduma ilizogusa, na upole hadi simu mahususi. Mada hii inaeleza aina kuu za telemetria, viwango vinavyozifanya zihamishike, na gharama na hatari zinazoambatana nazo. Inajenga juu ya ufuatiliaji (mada 3.10 — Ufuatiliaji na Usimamizi wa Matukio ya Mfumo) na kuunganishwa na SRE (mada 2.6 — Uhandisi wa Uaminifu wa Tovuti), AIOps (mada 5.2 — AIOps), na utawala wa data (mada 7.2 — Misingi ya data na utawala wa data).

## Dhana kuu

**Telemetria.** Data inayokusanywa kutoka kwa mfumo na kutumwa mahali inapoweza kuchunguzwa. Wikipedia inaeleza telemetria kwa ujumla. Katika programu, ishara kuu ni vipimo, kumbukumbu, na ufuatiliaji wa njia, pamoja na mpya zaidi kama wasifu na matukio.

**Vipimo (metrics).** Namba zinazopimwa kwa muda, kama kiwango cha maombi, kiwango cha makosa, ucheleweshaji, matumizi ya kumbukumbu, na kina cha foleni. Vipimo ni vya bei nafuu kuhifadhi na vizuri kwa mielekeo, tahadhari, na dashibodi. Hufupisha, kwa hiyo hupoteza maelezo kuhusu maombi binafsi. Hifadhidata za mfululizo wa wakati, zinazoelezwa na Wikipedia, huzihifadhi kwa ufanisi; Prometheus ni mfano wa chanzo huria unaotumika sana.

**Kumbukumbu (logs).** Rekodi zenye muhuri wa wakati za matukio mahususi, kama ujumbe wa kosa au muamala uliokamilika. Wikipedia inaeleza uwekaji kumbukumbu katika kompyuta. Kumbukumbu zina maelezo, na ni nyingi na ghali kuhifadhi na kutafuta. Kumbukumbu zenye muundo, zenye nyuga zilizotajwa thabiti badala ya maandishi huru, ni rahisi kuuliza na kuunganisha na ishara nyingine.

**Ufuatiliaji wa njia (traces).** Rekodi ya njia ya ombi moja kupitia sehemu za mfumo uliosambazwa, ikionyesha huduma zipi lilipita na kila moja ilichukua muda gani. Wikipedia inaeleza ufuatiliaji wa njia katika programu. Ufuatiliaji wa njia hujibu "muda ulienda wapi?" katika mifumo iliyojengwa kwa huduma nyingi, kama microservices, ambazo Wikipedia pia inaeleza.

**Muktadha na uhusiano.** Kinachofanya ishara tatu ziwe na nguvu pamoja ni muktadha wa pamoja: kitambulisho kinachofunga mstari wa kumbukumbu na ufuatiliaji wa njia na ombi la mtumiaji, na lebo kama huduma, toleo, na mazingira kwenye kila kitu. Bila muktadha wa pamoja, una marundo matatu ya data. Nao, unaweza kusonga kutoka kwa ombi la polepole katika kipimo hadi ufuatiliaji wa njia kisha mstari wa kumbukumbu unaoeleza.

**Uandaaji wa vifaa vya kupima (instrumentation).** Kuongeza msimbo unaozalisha telemetria. Wikipedia inaeleza instrumentation katika uprogramu. Inaweza kuwa ya kiotomatiki, kupitia maktaba na mawakala, au ya mikono, ambapo waendelezaji huongeza ishara zinazojalisha biashara, kama "agizo limewekwa". Andaa vifaa vya kupima kwa watumiaji wanachofanya, si mashine tu.

**OpenTelemetry na viwango wazi.** OpenTelemetry ni mradi wa chanzo huria, chini ya Cloud Native Computing Foundation (ambayo Wikipedia inaeleza), unaotoa miundo na zana za pamoja za kutoa vipimo, kumbukumbu, na ufuatiliaji wa njia, bila kutegemea zana inayohifadhi na kuchanganua. Angalia tovuti ya mradi kwa hali yake ya sasa. Lengo ni kukuruhusu kukusanya telemetria mara moja na kuituma kwa upande wowote wa nyuma unaolingana, kupunguza kufungiwa. Wikipedia inaeleza viwango wazi na kufungiwa kwa muuzaji kwa maneno ya jumla. Tazama mada 3.14 — Usimamizi wa Wasambazaji.

**Ufuatiliaji dhidi ya uwezo wa kuchunguza.** Ufuatiliaji hutazama hali zinazojulikana na kutoa tahadhari; uwezo wa kuchunguza unaunga mkono kuchunguza zisizojulikana. Vinakamilishana: tahadhari hukuambia kuna kitu kibaya, kuchunguza hukuambia kwa nini. Tazama mada 3.10 — Ufuatiliaji na Usimamizi wa Matukio ya Mfumo.

**Viashiria vya kiwango cha huduma kutoka kwa telemetria.** SLI, kama sehemu ya maombi yanayofaulu ndani ya muda, hukokotolewa kutoka kwa telemetria. Vifafanue kutoka mtazamo wa mtumiaji, na upime pale ombi la mtumiaji linapoingia kwenye mfumo. Tazama mada 2.6 — Uhandisi wa Uaminifu wa Tovuti na makala ya Wikipedia kuhusu malengo ya kiwango cha huduma.

**Telemetria ya mtumiaji na biashara.** Ufuatiliaji wa watumiaji halisi na wa sintetiki, unaoelezwa na Wikipedia, huonyesha uzoefu kutoka nje: nyakati za kupakia ukurasa, mafanikio ya safari, makosa katika vivinjari na programu. Matukio ya biashara, kama kujisajili na malipo, huunganisha afya ya kiufundi na matokeo. Tazama mada 7.7 — Uchanganuzi wa uzoefu na hisia.

**Idadi ya thamani tofauti na gharama.** Cardinality ni idadi ya thamani tofauti za lebo. Kipimo kilichowekewa lebo ya kitambulisho cha mtumiaji kina cardinality kubwa na kinaweza kuzidi hifadhi ya vipimo. Wikipedia inaeleza cardinality katika uundaji wa data. Kiasi cha telemetria hukua na trafiki na undani, na gharama ya kuhifadhi na kuchakata hukua nacho. Amua nini cha kuhifadhi kwa undani kamili, nini cha kuchukua sampuli, na nini cha kujumlisha.

**Kuchukua sampuli.** Kuhifadhi sehemu tu ya ufuatiliaji wa njia au kumbukumbu. Wikipedia inaeleza sampuli katika takwimu. Sampuli hupunguza gharama na zinaweza kuficha matukio nadra; zingatia kuhifadhi makosa yote na maombi ya polepole na kuchukua sampuli ya ya kawaida.

**Uhifadhi.** Telemetria inahifadhiwa kwa muda gani. Hifadhi data ya undani wa juu kwa muda mfupi, na majumuisho kwa muda mrefu zaidi. Uhifadhi huathiri gharama, uchunguzi, na faragha. Tazama mada 7.2 — Misingi ya data na utawala wa data.

**Faragha na usalama katika telemetria.** Kumbukumbu na ufuatiliaji wa njia vinaweza kuwa na data binafsi, vitambulisho, na siri, kwa bahati mbaya au kwa makusudi. Wikipedia inaeleza data binafsi. Safisha au epuka nyuga nyeti kwenye chanzo, dhibiti ufikiaji, na uweke uhifadhi. Telemetria pia ni chanzo cha data ya usalama. Tazama mada 3.13 — Usimamizi wa Usalama wa Taarifa.

**Uwezo wa kuchunguza kwa AI.** Mifumo ya AI inahitaji telemetria yake: maingizo, matokeo, ucheleweshaji, gharama, viwango vya makosa na kukataa, mrejesho wa watumiaji, na ishara za kuteleza. Rekodi vya kutosha kuchunguza jibu baya, kwa uangalifu na data inayorekodiwa. Tazama mada 5.1 — AI katika usimamizi wa huduma.

**Jukwaa na umiliki.** Mashirika mengi huendesha jukwaa la telemetria la pamoja, lenye viwango vya majina, lebo, na uhifadhi, na timu zinazomiliki ishara kutoka kwa huduma zao. Timu ya jukwaa hutoa zana na mwongozo; timu za huduma humiliki wanachotoa na jinsi wanavyokitumia.

**Lenzi zinavyolingana.** Uwezo wa kuchunguza ni msingi wa data wa uchanganuzi na wa AIOps. Zoea la uchapuchapu huchukulia uandaaji wa vifaa vya kupima kama sehemu ya fasili ya kukamilika. Uendeshaji otomatiki hutumia telemetria kupanua na kurekebisha.

## Mazoea bora

1. **Andaa vifaa vya kupima unapojenga.** Chukulia telemetria kama sehemu ya kipengele. Ijumuishe katika fasili ya kukamilika, na uipitie pamoja na usanifu.
2. **Sanifisha majina na muktadha.** Kubaliana majina ya huduma, seti za lebo, vipimo, na kitambulisho cha ombi kinachobebwa kupitia kila huduma. Viandike na uvikague kwenye mfereji.
3. **Toa kumbukumbu zenye muundo.** Tumia nyuga zilizotajwa thabiti, jumuisha kitambulisho cha ombi, na uweke ujumbe mfupi. Epuka kurekodi siri na data binafsi isiyohitajika.
4. **Fuatilia njia zinazojalisha.** Andaa vifaa vya kupima kwa safari kuu za watumiaji na simu kati ya huduma, na ubebe muktadha kupitia kila hatua, ikijumuisha foleni na simu za nje.
5. **Fafanua viashiria kutoka mtazamo wa mtumiaji.** Kokotoa SLI kutoka kwa telemetria katika pointi ya mawasiliano ya mtumiaji, na uongeze matukio ya biashara yanayoonyesha kama watumiaji walipata walichokuja kufanya.
6. **Tumia miundo wazi.** Pendelea viwango wazi vya kutoa telemetria, ili uweze kubadilisha upande wa nyuma bila kuandaa vifaa vya kupima upya. Kagua msaada katika majukwaa yako.
7. **Dhibiti gharama kwa makusudi.** Weka bajeti kwa telemetria, epuka lebo zenye cardinality kubwa, chukua sampuli ya trafiki ya kawaida, hifadhi makosa na maombi ya polepole, na ugawe uhifadhi katika viwango.
8. **Linda telemetria.** Safisha data nyeti kwenye chanzo, zuia ufikiaji, na utumie kanuni za uhifadhi. Fuatilia ufikiaji wa hifadhi za telemetria.
9. **Ifanye itumike.** Wape timu dashibodi za pamoja, maswali yaliyohifadhiwa, na mafunzo ya jinsi ya kuchunguza. Unganisha tahadhari na telemetria husika na vitabu vya uendeshaji.
10. **Pitia telemetria baada ya matukio ya hitilafu.** Uliza ulishindwa kuona nini wakati wa tukio la hitilafu, na uongeze. Ondoa ishara ambazo hakuna anayetumia.

## Maswali ya kujadili na timu yako

**Wakati wa tukio letu la mwisho la hitilafu, tulitaka kujua nini ambacho hatukuweza kupata?**
Waulize wanaojibu. Tarajia mapengo katika ufuatiliaji wa njia, muktadha, au data ya ngazi ya mtumiaji. Ili kwenda mbali zaidi, chagua pengo moja na uongeze ishara.

**Tunaweza kufuata ombi la mtumiaji mmoja kupitia huduma zote anazogusa?**
Jaribu na ombi halisi. Tarajia mapumziko kwenye foleni na simu za nje. Ili kwenda mbali zaidi, bebesha kitambulisho kupitia mapumziko ya kwanza.

**Tunarekodi nini kwenye kumbukumbu ambacho hatupaswi, na hatukirekodi nini ambacho tunapaswa?**
Tazama sampuli ya kumbukumbu. Tarajia siri, data binafsi, na kelele. Ili kwenda mbali zaidi, kubaliana kanuni na usafishaji.

**Tunatumia kiasi gani kwa telemetria, na tunapata nini kwa hilo?**
Omba namba na vyanzo vikubwa zaidi. Tarajia mshangao. Ili kwenda mbali zaidi, chagua ishara ghali zaidi na isiyotumika sana ya kupunguza au kuchukua sampuli.

**Tumefungwa kiasi gani kwa zana yetu ya sasa ya telemetria, na ingechukua nini kubadilisha?**
Kadiria. Tarajia "mengi". Ili kwenda mbali zaidi, chagua huduma moja ya kuandaa vifaa vya kupima kwa kiwango wazi.

**Vipengele vyetu vya AI vinazalisha telemetria gani, na tungeweza kuchunguza jibu baya kutoka kwayo?**
Uliza. Tarajia rekodi chache. Ili kwenda mbali zaidi, kubaliana nini cha kurekodi, kwa mipaka ya faragha, na ujaribu uchunguzi.

## Kwa vitendo: mfano wa usimamizi wa huduma

API ya umma ya huduma ya taifa ya hali ya hewa inahudumia mamilioni ya maombi kwa siku kupitia huduma nane za ndani. Watumiaji wanalalamika kuhusu majibu ya polepole ya mara kwa mara kwa maeneo fulani. Ufuatiliaji unaonyesha API iko ndani ya lengo lake la ucheleweshaji kwa wastani, na kila huduma inaonekana yenye afya kivyake. Mhandisi wa zamu anatumia siku mbili kufukuza tatizo.

Timu ya jukwaa imekuwa ikihamia uandaaji wa vifaa vya kupima wa OpenTelemetry. Kwenye lango la API na huduma nne kati ya nane, maombi yanabeba kitambulisho cha ufuatiliaji wa njia na kila huduma inarekodi vipindi vyenye nyakati. Kwa ufuatiliaji wa njia, mhandisi anachuja maombi ya polepole ya wiki iliyopita na kuona karibu yote yanapita simu ileile: utafutaji katika huduma ya data ya kijiografia kwa maeneo yenye herufi zisizo za kawaida katika majina yao, unaochukua mara kumi zaidi ya kawaida. Huduma nne nyingine hazijaandaliwa vifaa vya kupima bado, lakini pengo sasa ni jembamba vya kutosha kuchunguza kwa mikono. Sababu ni faharisi ya hifadhidata inayokosekana kwa maswali hayo, na marekebisho yanachukua saa moja.

Timu inapitia gharama. Matumizi ya telemetria yamekua kwa asilimia 40 katika miezi sita, mengi kutokana na lebo kwenye kipimo inayojumuisha eneo lililoombwa, lenye mamia ya maelfu ya thamani. Wanaondoa lebo, wanaweka eneo kwenye ufuatiliaji wa njia na kumbukumbu, na kuchukua sampuli ya asilimia 5 ya ufuatiliaji wa njia wa kawaida huku wakihifadhi makosa yote na maombi ya polepole. Usafishaji unaondoa anwani za IP kutoka kwa kumbukumbu baada ya saa 24, baada ya afisa wa faragha kubainisha kwamba zinahesabiwa kama data binafsi katika mamlaka fulani.

Timu pia inaongeza ishara ya biashara: hesabu ya simu za API zilizorudisha matokeo tupu, ambayo huko nyuma watumiaji waliripoti kama "hakuna data". Inaonyesha mfumo baada ya kila sasisho la modeli.

Kinachobadilika: uchunguzi unachukua saa badala ya siku, na gharama inashuka kwa theluthi. Kinachobaki kigumu: huduma nne bado hazina ufuatiliaji wa njia, na mbili zinamilikiwa na wakala mwingine; kanuni ya sampuli tayari imeficha kosa nadra lililoonekana tu katika trafiki isiyochukuliwa sampuli na kupatikana kwenye kumbukumbu; na wahandisi wanahitaji mazoezi kutumia zana za ufuatiliaji wa njia vizuri. Timu inapanga kikao cha mafunzo na kuweka kanuni ya kuhifadhi ufuatiliaji wote wenye kosa lolote.

## Mitazamo minne

### Timu za bidhaa na utoaji

Jenga telemetria ndani ya vipengele: majina thabiti, vitambulisho vya maombi, kumbukumbu zenye muundo, vipindi kwenye njia kuu, na matukio ya biashara. Epuka siri katika ishara, na upitie telemetria katika usanifu.

### Timu za huduma na uendeshaji

Tumia telemetria kuchunguza, si kutoa tahadhari tu. Weka dashibodi, maswali, na vitabu vya uendeshaji vimeunganishwa, na uwaambie waendelezaji ulichoshindwa kuona. Tazama gharama na ubora wa telemetria.

### Uongozi na utawala

Fadhili jukwaa, viwango, na mafunzo. Omba ushahidi kwamba telemetria inafupisha uchunguzi na inaakisi uzoefu wa mtumiaji. Weka bajeti na kanuni za faragha, na upendelee viwango wazi.

### Wateja na watumiaji

Unanufaika mtoaji anapoweza kufuatilia tatizo lako hadi sababu haraka. Toa maelezo unaporipoti suala, kama wakati na ulichofanya, yanayosaidia kupata ombi lako.

## Uchapuchapu, AI, uendeshaji otomatiki na uchanganuzi

### Uchapuchapu

Ongeza uandaaji wa vifaa vya kupima kwa hatua ndogo pamoja na kila kipengele, na uuboreshe baada ya kila tukio la hitilafu. Pitia dashibodi na timu na uondoe zisizotumika. Tahadhari: kubandika telemetria mwishoni huzaa mapengo; iijumuishe katika fasili ya kukamilika.

### AI

AI inaweza kufupisha ufuatiliaji wa njia na kumbukumbu, kuweka hitilafu za kimuundo katika makundi, na kujibu maswali kuhusu telemetria, ikiwa na wamiliki na ukaguzi. Vipengele vya AI pia vinahitaji telemetria yao wenyewe. Tahadhari: uchanganuzi wa AI hutegemea ubora na muktadha wa data; lebo duni huzaa hitimisho duni. Tazama mada 5.2 — AIOps.

### Uendeshaji otomatiki

Fanya uandaaji wa vifaa vya kupima kuwa wa kiotomatiki pale maktaba zinaporuhusu, tekeleza viwango vya majina na lebo kwenye mfereji, na utumie telemetria kwa kupanua na kurekebisha kwa vikomo. Tahadhari: uendeshaji otomatiki ulioanzishwa na telemetria yenye kelele unaweza kukosea; jaribu vizingiti na uongeze vikomo. Tazama mada 6.6 — Uendeshaji otomatiki wa vitabu vya uendeshaji na urekebishaji wa kiotomatiki.

### Uchanganuzi

Tumia telemetria kwa SLI, mielekeo, uwezo, na uzoefu wa mtumiaji, na kwa gharama ya telemetria yenyewe. Tahadhari: sampuli na majumuisho hubadilisha kile data inaweza kuonyesha, na lebo za cardinality kubwa zinaweza kupotosha au kuvunja mifumo; taja mipaka katika ripoti. Tazama mada 7.1 — Uchanganuzi kwa usimamizi wa huduma na kitabu cha *Service Management Metrics*.

## Njia za kawaida za kushindwa

- **Marundo matatu ya data.** Vipimo, kumbukumbu, na ufuatiliaji wa njia haviwezi kuunganishwa. Shiriki vitambulisho na lebo.
- **Telemetria kama wazo la baadaye.** Mapengo yanaonekana katika matukio ya hitilafu. Andaa vifaa vya kupima pamoja na kipengele.
- **Lebo za cardinality kubwa.** Gharama na utendaji vinateseka. Punguza lebo na uweke undani kwenye ufuatiliaji wa njia na kumbukumbu.
- **Siri na data binafsi kwenye kumbukumbu.** Data nyeti inavuja. Safisha kwenye chanzo na udhibiti ufikiaji.
- **Kufungiwa kwa zana moja.** Kubadilisha ni ghali. Tumia viwango wazi.
- **Kila kitu kinahifadhiwa milele.** Gharama inapanda. Gawa uhifadhi katika viwango na uchukue sampuli.
- **Dashibodi ambazo hakuna anayetumia.** Juhudi inapotea. Pogoa na uunganishe na maamuzi.

## Modeli ya ukomavu

| Kipimo | Kuanzisha | Kuendeleza | Kusanifisha | Kusimamia | Kuratibu |
|---|---|---|---|---|---|
| Ufunikaji | Vipimo vya miundombinu | Huduma kuu zenye vipimo na kumbukumbu | Vipimo, kumbukumbu, na ufuatiliaji wa njia vyenye muktadha wa pamoja kwenye safari kuu | Ufunikaji unapitiwa baada ya matukio ya hitilafu | Ufunikaji thabiti kati ya huduma na wasambazaji |
| Viwango | Hakuna | Desturi za ndani | Majina, lebo, na miundo wazi vimekubaliwa | Viwango vinakaguliwa kwenye mfereji | Viwango vinashirikiwa na kubadilika na jukwaa |
| Gharama na uhifadhi | Hausimamiwi | Ufahamu | Bajeti, sampuli, na uhifadhi wa viwango | Gharama kwa kila ishara na thamani vinapitiwa | Gharama na thamani vinaboreshwa kila wakati |
| Ulinzi | Haujawazi | Udhibiti wa msingi wa ufikiaji | Usafishaji, ufikiaji, na kanuni za uhifadhi | Uzingatiaji unafuatiliwa | Udhibiti umejengwa ndani ya ukusanyaji na uhifadhi |

## Orodha hakiki

- [ ] Telemetria ni sehemu ya fasili yetu ya kukamilika.
- [ ] Tuna majina, lebo, vipimo vilivyokubaliwa, na kitambulisho cha ombi kinachobebwa kati ya huduma.
- [ ] Kumbukumbu zina muundo na hazina siri wala data binafsi isiyohitajika.
- [ ] Safari kuu za watumiaji zinafuatiliwa mwanzo hadi mwisho.
- [ ] SLI zinakokotolewa kutoka kwa telemetria katika pointi ya mawasiliano ya mtumiaji.
- [ ] Tunatumia miundo wazi kutoa telemetria.
- [ ] Tuna bajeti ya telemetria yenye sampuli na uhifadhi wa viwango.
- [ ] Tunapitia tuliyoshindwa kuona baada ya kila tukio la hitilafu.

## Maelekezo ya AI

**Tafuta mapengo ya telemetria kutoka kwa tukio la hitilafu.**

```text
Here is the timeline of an incident and notes on what responders tried to find out: [paste].
List each question the responders could not answer, what signal would have answered it (metric, log, trace, user data), and a question for the owning team. Do not assume any signal exists.
List what you are unsure of.
```

**Pitia sampuli ya kumbukumbu kwa data nyeti.**

```text
Here is a sample of log lines from our service: [paste, already partially scrubbed].
List any content that looks like secrets, personal data, or internal details, quoting the exact text, and suggest categories of scrub rules. Do not guess whether any is real.
List what you are unsure of.
```

**Pendekeza kiwango cha majina na lebo.**

```text
Our services: [list]. Our environments: [list]. Our teams: [list]. What we want to be able to filter by: [list].
Draft a one-page standard for service names, label keys, allowed values, and request identifiers, with examples. Warn about labels that could have very many distinct values. Do not name a vendor.
List what you are unsure of.
```

## Ujuzi wa AI

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): tumia kuchunguza mifumo isiyo ya kawaida katika telemetria.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): tumia kubuni telemetria inavyosonga na kuhifadhiwa.
- [data-governance](../../../../skills/data-governance/SKILL.md): tumia kuweka kanuni za faragha, uhifadhi, na ufikiaji.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): tumia kuchagua ishara za onyo la mapema.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): tumia kujaribu ucheleweshaji na uwezo kwa telemetria.

## Vyanzo vikuu

- OpenTelemetry (opentelemetry.io): kiwango wazi na zana za vipimo, kumbukumbu, na ufuatiliaji wa njia.
- Charity Majors, Liz Fong-Jones, and George Miranda, *Observability Engineering* (2022): mwongozo wa mtendaji wa mbinu.
- Betsy Beyer and others (eds.), *Site Reliability Engineering* (2016), chapter on monitoring, free at sre.google.
- Wikipedia, "Observability (software)" and "Telemetry": muhtasari wa mawazo.

## Marejeo

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
