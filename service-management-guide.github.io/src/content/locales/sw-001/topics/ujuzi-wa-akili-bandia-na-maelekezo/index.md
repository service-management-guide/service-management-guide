# Ujuzi wa Akili Bandia na Maelekezo

**Maelekezo (prompt) ni ombi unalolipa mfumo wa AI, na ujuzi (skill) ni seti inayoweza kutumika tena, yenye matoleo, ya maelekezo kwa aina moja ya kazi; yote mawili hufanya kazi vizuri zaidi yanapotaja kazi, kutoa nyenzo chanzo, kusema la kufanya taarifa zinapokosekana, na kujaribiwa kama kazi nyingine yoyote.**

## Kwa nini hili ni muhimu

Kila anayetumia msaidizi wa AI huandika maelekezo, mara nyingi kwa kujaribu na kukosea. Wengine hupata matokeo bora na hawawezi kusema kwa nini. Wengine hupata majibu yasiyo wazi au mabaya na kuamua zana ni duni. Tofauti mara nyingi si modeli bali ombi: kazi imeelezwa kwa uwazi kiasi gani, msaidizi ana nyenzo gani, na jibu lake linakaguliwaje.

Katika usimamizi wa huduma tofauti ni muhimu kwa sababu kazi ina dau. Maelekezo yanayofupisha tukio la hitilafu kutoka kwenye kumbukumbu yanaweza kutoa ratiba ya matukio iliyobuniwa. Maelekezo yanayoomba "mazoea bora" hutoa maandishi ya jumla yanayosikika sahihi na hayamsaidii mtu. Maelekezo yaliyoandikwa kwa haraka yanaweza kubandika data ya siri kwenye zana isiyo sahihi. Hizi ni tabia, na tabia zinaweza kuboreshwa.

Ujuzi hupeleka wazo hatua moja mbele. Ujuzi hufunga maelekezo ya kazi inayojirudia, kama kuandika kitabu cha uendeshaji au kuendesha postmortem, katika faili ambayo msaidizi wa AI anaweza kuipakia kazi inapojitokeza. Ujuzi katika mwongozo huu umeandikwa kwa muundo wa Claude Code: kila mmoja ni faili ya `SKILL.md` yenye maelezo mafupi ya lini kuutumia na mwongozo wa kufanya kazi. Timu zinaweza kuuiga, kuurekebisha, na kuandika zake mwenyewe. Mada hii inaeleza jinsi ya kutumia maelekezo na ujuzi katika mwongozo huu, mifumo inayofanya kazi, jinsi ya kuthibitisha matokeo, na jinsi ya kuandika ujuzi wa timu yenyewe. Inajenga juu ya mada 5.1 — AI katika usimamizi wa huduma na kinga katika mada 5.6 — Utawala, hatari na kufuata sheria za AI.

## Dhana kuu

**Maelekezo (prompt).** Maandishi, na nyenzo yoyote iliyoambatishwa, unayoipa modeli kubwa ya lugha kupata jibu. Wikipedia inaeleza uhandisi wa maelekezo kama mchakato wa kupanga maelekezo ili modeli zalishi itoe matokeo yanayotakikana. Modeli hujibu mifumo katika maelekezo; maelekezo wazi zaidi kwa kawaida hutoa majibu bora.

**Muktadha.** Kila kitu ambacho modeli inaweza kuzingatia inapojibu: maelekezo yako, nyaraka unazotoa, na mazungumzo hadi sasa. Wikipedia inaeleza dirisha la muktadha, linalopunguza kiasi ambacho modeli inaweza kuzingatia kwa wakati mmoja. Kitu kisipokuwa katika muktadha, modeli inaweza kujaza pengo kutoka kwa maarifa ya jumla, ambapo makosa hupenya.

**Msingi wa majibu.** Kutoa nyenzo chanzo na kuiomba modeli itumie hiyo tu. Wikipedia inaeleza kizazi kilichoongezewa urejeshaji, umbo la kiotomatiki. Kwa matumizi ya mikono, bandika maandishi husika na useme "tumia maandishi yaliyo hapa chini tu". Tazama mada 3.9 — Usimamizi wa Maarifa.

**Muundo wa maelekezo mazuri.** Sehemu sita zinafunika mahitaji mengi:

| Sehemu | Inafanya nini | Mfano |
|---|---|---|
| Jukumu au muktadha | Huweka hali | "Unamsaidia kiongozi wa dawati la huduma kuandaa mapitio." |
| Kazi | Husema nini cha kutoa | "Fupisha tukio la hitilafu kama ratiba ya matukio." |
| Nyenzo chanzo | Hutoa ukweli | Historia ya tiketi iliyobandikwa |
| Vikwazo | Huweka mipaka | "Tumia maandishi tu. Usibahatishe sababu." |
| Muundo | Hupa matokeo umbo | "Jedwali lenye wakati, tukio, na chanzo kilichonukuliwa." |
| Kanuni ya kutokuwa na uhakika | Husema la kufanya usipokuwa na uhakika | "Andika 'haijatajwa' na uorodheshe usichokuwa na uhakika nacho." |

**Nafasi za kujaza.** Maelekezo katika mwongozo huu hutumia `[mabano ya mraba]` kuashiria cha kubadilisha na nyenzo yako mwenyewe. Maelekezo yenye nafasi isiyojazwa ni sababu ya kawaida ya matokeo duni; soma kila moja kabla ya kutuma.

**Mifano na muundo.** Kutoa mfano mmoja au miwili ya matokeo unayotaka, inayojulikana kama few-shot prompting na kuelezwa na Wikipedia, mara nyingi huboresha matokeo zaidi ya maelezo ya ziada. Kuomba muundo, kama jedwali, hurahisisha ukaguzi.

**Kuomba hoja.** Mbinu zinazoiomba modeli ifanye kazi kupitia hatua, zinazoelezwa na Wikipedia kama chain-of-thought prompting, zinaweza kuboresha majibu kwa matatizo fulani. Hoja inayoonekana si kila mara maelezo ya kweli ya jinsi jibu lilivyozalishwa, na pia inaweza kuwa na makosa. Itumie kukusaidia kukagua, si kama uthibitisho.

**Uthibitisho.** Chukulia kila matokeo kama rasimu. Kagua ukweli dhidi ya chanzo, kagua hesabu, na kagua kwamba nukuu zipo. Wikipedia inaeleza kuota na upendeleo wa otomatiki; vyote viwili ni sababu za kuthibitisha. Maelekezo yanayoiomba modeli inukuu vyanzo vyake hufanya hili liwe la haraka.

**Kurudia.** Matokeo ya kwanza mara nyingi si bora zaidi. Omba mabadiliko, onyesha makosa, na uboreshe maelekezo. Hifadhi toleo lililofanya kazi.

**Ujuzi (skill).** Katika mwongozo huu, ujuzi ni faili ya `SKILL.md` inayomwambia msaidizi wa AI jinsi ya kufanya aina ya kazi. Huanza na kichwa kifupi kinachotoa jina la ujuzi na maelezo ya lini kuutumia, kikifuatiwa na mwongozo: vijenzi muhimu, hatua, na ukaguzi. Msaidizi anayeunga mkono ujuzi hupakia faili husika ombi lako linapolingana na maelezo. Ujuzi ni maandishi rahisi, kwa hiyo unaweza kusomwa, kupitiwa, kuwekewa matoleo, na kushirikiwa kama nyaraka nyingine. Makala ya Wikipedia kuhusu Markdown inaeleza muundo unaotumia.

**Ujuzi dhidi ya maelekezo.** Maelekezo ni kwa ombi moja; ujuzi hunasa njia ya aina ya kazi inayojirudia, ili usiiandike upya kila mara. Ujuzi unaweza kuwa na maelekezo kadhaa, orodha hakiki, na vigezo vya matokeo mazuri. Mada katika mwongozo huu huunganishwa na ujuzi pale njia inapokuwa na manufaa.

**Ujuzi unapaswa kuwa na nini.** Ujuzi mzuri hutaja lini kuutumia na lini kutoutumia, hufafanua sehemu muhimu za matokeo, hutoa mchakato mfupi, huorodhesha makosa ya kawaida, na husema jinsi ya kukagua matokeo. Ni mahususi na mfupi. Ujuzi unaojaribu kufunika kila kitu hutumika mara chache.

**Kujaribu ujuzi na maelekezo.** Yachukulie kama kazi za kazi. Jenga visa vichache vya majaribio halisi vyenye matokeo mazuri yanayojulikana, viendeshe, na uone kushindwa. Viendeshe tena modeli, zana, au ujuzi unapobadilika. Wikipedia inaeleza majaribio ya kurudi nyuma (regression testing), zoea la kuendesha tena majaribio baada ya mabadiliko kunasa kuvunjika.

**Udhibiti wa matoleo na umiliki.** Hifadhi ujuzi kwenye hazina, ukiwa na mmiliki, kumbukumbu ya mabadiliko, na mapitio ya mabadiliko. Wikipedia inaeleza udhibiti wa matoleo. Ujuzi unaobadilika kimya bila mapitio unaweza kubadilisha matokeo ya timu bila mtu kugundua.

**Usalama.** Maelekezo na ujuzi vinaweza kushambuliwa au kutumiwa vibaya. Maudhui unayobandika yanaweza kuwa na maelekezo, hatari ambayo Wikipedia inaeleza kama sindano ya maelekezo. Ujuzi uliopakuliwa kutoka chanzo kisichojulikana unaweza kumwambia msaidizi afanye jambo la madhara. Soma ujuzi kabla ya kuutumia, na uwape wasaidizi ufikiaji wanaohitaji tu. Tazama mada 5.5 — AI ya kiwakala na usimamizi wa binadamu.

**Usiri.** Amua nini kinaweza kubandikwa kwenye zana ipi. Tazama mada 5.6 — Utawala, hatari na kufuata sheria za AI.

**Lenzi zinavyolingana.** Ujuzi na maelekezo ni jinsi timu zinavyoweka AI kazini kwa uthabiti. Zoea la uchapuchapu linapendekeza kuweka maktaba ya pamoja inayoboreshwa kwa matumizi na mrejesho. Uendeshaji otomatiki unaweza kuendesha maelekezo yaliyoidhinishwa katika mtiririko wa kazi. Uchanganuzi unaonyesha maelekezo na ujuzi gani vinatumika na kama vinasaidia.

## Mazoea bora

1. **Taja kazi, si mada.** "Andaa sasisho la hali kwa wateja kutoka kwa ukweli huu" hufanya kazi vizuri kuliko "nisaidie na tukio la hitilafu". Sema unachotaka kitolewe na kwa nani.
2. **Toa chanzo na uzuie kwake.** Bandika nyenzo husika na useme itumike hiyo tu. Muombe msaidizi aandike "haijatajwa" pale nyenzo hazisemi.
3. **Sema muundo unaohitaji.** Omba jedwali, orodha iliyohesabiwa, au kikomo cha maneno. Inafanya matokeo kuwa rahisi kukagua na kutumia.
4. **Omba vyanzo na kutokuwa na uhakika.** Omba nukuu au marejeo, na orodha ya msaidizi asiyokuwa na uhakika nayo. Soma orodha hiyo; inaonyesha pa kukagua kwanza.
5. **Usibandike kamwe siri au data iliyolindwa kwenye zana zisizoidhinishwa.** Ondoa majina, vitambulisho, na data binafsi unapoweza. Tumia zana ambazo shirika lako limeidhinisha kwa nyenzo nyeti.
6. **Kagua kabla ya kutumia.** Linganisha ukweli, namba, nyakati, na majina na chanzo. Endesha msimbo au amri yoyote katika mazingira salama kwanza.
7. **Rudia na uhifadhi kinachofanya kazi.** Boresha maelekezo kwa mizunguko michache, kisha uhifadhi toleo la mwisho na dokezo la ni la nini na linashindwa lini.
8. **Shiriki na upitie maktaba ya timu.** Weka maelekezo na ujuzi uliojaribiwa mahali pa pamoja pamoja na wamiliki. Pitia mabadiliko, na uondoe yasiyofanya kazi tena.
9. **Andika ujuzi kwa kazi inayojirudia.** Unapojipata ukirudia maelekezo, yageuze kuwa ujuzi wenye maelezo wazi, hatua, na ukaguzi. Uweke mfupi.
10. **Jaribu ujuzi kwa visa halisi.** Jenga visa vichache vya majaribio, viendeshe baada ya kila badiliko la ujuzi au zana, na urekodi matokeo.

## Maswali ya kujadili na timu yako

**Tunaziomba zana za AI zifanye nini leo, na ni maombi yapi kati ya hayo tunaweza kuyaandika kama maelekezo au ujuzi unaoweza kutumika tena?**
Kusanya mifano. Tarajia kazi zinazojirudia kama muhtasari, rasimu, na orodha hakiki. Ili kwenda mbali zaidi, chagua kazi moja na muandike toleo lililojaribiwa pamoja.

**Tunakagua vipi jibu la AI kabla ya kulitumia, na kila mtu anafanya vivyo hivyo?**
Uliza mara ya mwisho mtu alipopata kosa. Tarajia tabia tofauti. Ili kwenda mbali zaidi, kubaliana utaratibu mfupi wa uthibitisho kwa kila aina ya kazi.

**Tumebandika nini kwenye zana za AI ambacho hatukupaswa, na tunafanyaje kitu sahihi kiwe rahisi?**
Uliza katika mazingira salama. Tarajia makosa. Ili kwenda mbali zaidi, kubaliana nini kinaweza kwenda wapi, na utoe zana iliyoidhinishwa na mwongozo mfupi.

**Ni maelekezo gani yamefanya kazi vizuri kwa watu binafsi lakini hayajawahi kushirikiwa?**
Waombe watu waonyeshe. Tarajia mazuri. Ili kwenda mbali zaidi, kusanya matatu kwenye maktaba ya pamoja, yenye mmiliki na tarehe ya kupitia.

**Ujuzi tunaotumia ukibadilika kesho, tungegunduaje?**
Tarajia "hatungegundua". Ili kwenda mbali zaidi, kubaliana kwamba ujuzi uko katika udhibiti wa matoleo, unapitiwa, na una visa vichache vya majaribio.

**Ni kazi zipi hatupaswi kumkabidhi msaidizi wa AI kamwe, hata kwa ukaguzi?**
Jadili maamuzi yanayoathiri watu, hitimisho za kisheria, na idhini. Tarajia kutokubaliana. Ili kwenda mbali zaidi, andika orodha fupi na nani anaweza kuibadilisha.

## Kwa vitendo: mfano wa usimamizi wa huduma

Timu ya huduma ya TEHAMA ya hospitali ya kikanda ya watu 25 imeanza kutumia msaidizi wa AI. Wafanyakazi binafsi wanautumia kwa njia tofauti. Mchambuzi mmoja anaandaa makala za maarifa kutoka kwa madokezo ya tiketi, mwingine anafupisha mfululizo mrefu wa barua pepe, na wa tatu anauomba uelezee ujumbe wa makosa asiyoufahamu. Kiongozi wa timu ana wasiwasi: ameona makala iliyokuwa na amri inayoaminika lakini isiyo sahihi.

Anaiomba timu kuleta maelekezo yao matatu yenye manufaa zaidi kwenye kikao cha saa moja. Wanagundua watu wanne wanatumia maelekezo yanayokaribia kufanana ya kugeuza tiketi iliyotatuliwa kuwa makala. Toleo linalofanya kazi vizuri zaidi linasema msaidizi lazima atumie maandishi ya tiketi tu, lazima aandike "[missing]" kwa chochote kisichokuwa ndani yake, lazima aorodheshe hatua kama mistari iliyohesabiwa, na lazima amalize kwa orodha fupi ya asiyokuwa na uhakika nayo. Bila kanuni ya "[missing]", msaidizi alijaza mapengo.

Timu inalifanya kuwa faili ya ujuzi: lini kulitumia (kugeuza tiketi iliyotatuliwa kuwa rasimu ya makala), sehemu muhimu za makala nzuri, mchakato, na ukaguzi ambao mtu lazima afanye kabla ya kuchapisha, ikijumuisha kuendesha kila amri katika mazingira ya majaribio. Wanalijaribu kwenye tiketi kumi za zamani ambazo suluhisho zake zinajulikana na kugundua kwamba katika tatu msaidizi alibahatisha nambari ya toleo. Wanaongeza kanuni kuhusu nambari za toleo na kuendesha majaribio tena. Wanahifadhi ujuzi kwenye hazina ya timu, wanamteua naibu wa kiongozi kuwa mmiliki, na kukubali kwamba mabadiliko yanapitiwa kama msimbo.

Pia wanaandika ukurasa mmoja kuhusu nini hakipaswi kuingia kwenye zana za AI: data ya wagonjwa, vitambulisho, na ripoti za usalama ambazo hazijatolewa; na wanawaelekeza wote kwenye zana iliyoidhinishwa, yenye mkataba unaokataza kufunza kwa data yao.

Kinachobadilika: rasimu za makala huchukua dakika, na idadi ya makala zenye hatua mbaya zinazopatikana katika mapitio inashuka. Kinachobaki kigumu: baadhi ya wafanyakazi bado wanatumia akaunti binafsi zana iliyoidhinishwa inapokuwa polepole; maktaba ya ujuzi imekua hadi faili 14 na hakuna aliyepitia nusu yake; na tabia ya msaidizi ilibadilika kidogo baada ya sasisho la muuzaji, jambo ambalo majaribio yalinasa tu kwa sababu mtu aliyaendesha tena. Kiongozi anaongeza uendeshaji wa majaribio wa kila mwezi na kikao cha kupogoa cha robo mwaka.

## Mitazamo minne

### Timu za bidhaa na utoaji

Tumia maelekezo na ujuzi kuandaa msimbo, majaribio, na nyaraka, kwa mapitio na ukaguzi wako wa kawaida wa mfereji. Weka ujuzi wa mtiririko wako mwenyewe kwenye hazina kando ya msimbo.

### Timu za huduma na uendeshaji

Jenga maktaba ndogo ya kazi zinazojirudia kama masasisho, makala, na mapitio. Shiriki kinachofanya kazi, kagua kila matokeo, na umwambie mmiliki ujuzi unaposhindwa.

### Uongozi na utawala

Weka kanuni za nini kinaweza kubandikwa wapi, toa zana zilizoidhinishwa, na ufadhili muda wa kujenga na kujaribu maktaba. Omba ushahidi kwamba matokeo yanakaguliwa. Usichukulie maelekezo kama mbadala wa mchakato.

### Wateja na watumiaji

Unaweza kukutana na maudhui yaliyoandaliwa na AI. Uliza kama mtu ameyakagua, na umwambie mtoaji yanapokuwa si sahihi. Kuwa makini na data binafsi unayoipa zana yoyote ya AI.

## Uchapuchapu, AI, uendeshaji otomatiki na uchanganuzi

### Uchapuchapu

Kuza maktaba kutoka kwa matumizi halisi: ongeza ujuzi kazi inapojirudia, uuboreshe kutoka kwa mrejesho, na uustaafishe unapoacha kusaidia. Weka ujuzi mfupi na uliopitiwa. Tahadhari: maktaba kubwa isiyopitiwa ni dhima; iweke ndogo na inayomilikiwa.

### AI

Ujuzi na maelekezo ni maelekezo tunayoipa AI, kwa hiyo yanastahili uangalifu tunaotoa kwa udhibiti mwingine: umiliki, mapitio, majaribio, na rekodi za matumizi. Tahadhari: maelekezo ya "kuwa sahihi" hayafanyi modeli kuwa sahihi; tegemea vyanzo vilivyotolewa, ukaguzi, na mapitio ya binadamu. Tazama mada 5.1 — AI katika usimamizi wa huduma.

### Uendeshaji otomatiki

Maelekezo yaliyoidhinishwa yanaweza kuingizwa katika mtiririko wa kazi, kama kuandaa muhtasari tiketi inapofungwa, kukiwa na hatua ya mapitio kabla ya matumizi. Tahadhari: maelekezo ya kiotomatiki huendeshwa bila uangalifu wa mtu anayesoma kila mara; yajaribu kwa maingizo mbalimbali na uweke mlango wa binadamu. Tazama mada 6.2 — Uendeshaji otomatiki wa mtiririko wa kazi na uratibu.

### Uchanganuzi

Fuatilia maelekezo na ujuzi gani vinatumika, rasimu zinahaririwa mara ngapi, makosa yaliyopatikana katika mapitio, na muda uliookolewa kwa kazi. Tahadhari: hesabu za matumizi zinazawadia wingi, na akiba ya muda iliyokadiriwa hutiwa chumvi kwa urahisi; chukua sampuli ya matokeo ya mwisho kwa ubora. Tazama kitabu cha *Service Management Metrics* na mada 7.3 — Upimaji na utoaji taarifa.

## Njia za kawaida za kushindwa

- **Maombi yasiyo wazi.** Jibu ni la jumla. Taja kazi, hadhira, na muundo.
- **Hakuna nyenzo chanzo.** Modeli inajaza mapengo kutoka kumbukumbuni. Toa na uzuie kwa chanzo.
- **Nafasi zisizojazwa.** Maelekezo yanatoka na "[bandika hapa]" ndani yake. Kagua kabla ya kutuma.
- **Kuamini jibu la kwanza.** Makosa hayaonekani. Thibitisha dhidi ya chanzo.
- **Kubandika siri.** Data inavuja. Tumia zana zilizoidhinishwa na uondoe maelezo nyeti.
- **Maktaba ya ujuzi ambayo hakuna anayeimiliki.** Faili zinaoza au kubadilika bila kuonekana. Ziweke katika udhibiti wa matoleo pamoja na wamiliki na majaribio.
- **Kupakua ujuzi bila kusoma.** Maelekezo hatari yanaendeshwa. Soma na upitie kabla ya matumizi.

## Modeli ya ukomavu

| Kipimo | Kuanzisha | Kuendeleza | Kusanifisha | Kusimamia | Kuratibu |
|---|---|---|---|---|---|
| Mazoezi ya maelekezo | Kujaribu na kukosea | Vidokezo vinashirikiwa kwa njia isiyo rasmi | Mifumo ya kawaida yenye vyanzo na ukaguzi | Mifumo inaboreshwa kutoka kwa data ya makosa | Mifumo imejengwa ndani ya zana na mtiririko wa kazi |
| Maktaba ya ujuzi | Hakuna | Faili binafsi | Ujuzi ulioshirikiwa, unaomilikiwa, wenye udhibiti wa matoleo | Ujuzi unajaribiwa na kupitiwa mara kwa mara | Ujuzi unasimamiwa kati ya timu kwa utawala |
| Uthibitisho | Hakuna | Tabia za mtu binafsi | Taratibu za kawaida kwa kazi | Makosa yanafuatiliwa na kurudishwa | Uthibitisho unaungwa mkono na zana kwa idhini ya binadamu |
| Kanuni za data | Haijawazi | Ufahamu | Kanuni wazi na zana zilizoidhinishwa | Uzingatiaji unakaguliwa | Udhibiti umejengwa ndani ya zana |

## Orodha hakiki

- [ ] Maelekezo yetu yanataja kazi, chanzo, muundo, na kanuni ya kutokuwa na uhakika.
- [ ] Tunakagua matokeo dhidi ya chanzo kabla ya matumizi.
- [ ] Tuna kanuni za nini kinaweza kubandikwa kwenye zana zipi, na zana zilizoidhinishwa.
- [ ] Tunaweka maelekezo na ujuzi uliojaribiwa mahali pa pamoja, panapomilikiwa.
- [ ] Ujuzi una maelezo wazi ya lini kuutumia.
- [ ] Tunajaribu ujuzi kwa visa halisi baada ya kila badiliko la ujuzi au zana.
- [ ] Tunapitia ujuzi kutoka vyanzo vya nje kabla ya kuutumia.
- [ ] Tunaorodhesha kazi ambazo hazipaswi kukabidhiwa kwa AI.

## Maelekezo ya AI

**Boresha maelekezo.**

```text
Here is a prompt I use: [paste]. Here is an example of an output that disappointed me: [paste].
Identify what the prompt does not say that would help (task, source material, constraints, format, uncertainty rule), propose a rewritten prompt with [placeholders] for my material, and explain each change in one line. Do not add facts about my situation.
List what you are unsure of.
```

**Geuza maelekezo kuwa ujuzi.**

```text
Here is a prompt that works well for my team: [paste]. Here are two examples of good outputs: [paste].
Draft a SKILL.md with a header (name and a one-sentence description of when to use it and when not), key components of a good output, a short process, common mistakes, and a checklist for verifying the result. Keep it under 400 words and do not add steps not implied by my examples.
List what you are unsure of.
```

**Buni majaribio ya ujuzi.**

```text
Here is a skill: [paste].
Write eight test cases: five typical, two awkward, and one that tries to make the assistant ignore the skill. For each, describe the input and the correct behavior. Do not use real personal data.
List what you are unsure of.
```

## Ujuzi wa AI

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): tumia kubuni, kujaribu, na kuboresha maelekezo.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md): tumia kupata na kutumia mada, maswali, na maelekezo ya mwongozo huu.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md): tumia kutunza mada na ujuzi wa mwongozo huu.
- [runbook](../../../../skills/runbook/SKILL.md): tumia kama mfano wa ujuzi uliopangwa vizuri kwa kazi ya uendeshaji.

## Vyanzo vikuu

- Anthropic, documentation on prompting and on Agent Skills (docs.anthropic.com): mwongozo wa muuzaji wa kuandika maelekezo na ujuzi kwa modeli za Claude.
- OWASP, guidance on risks for applications built on large language models (owasp.org): ikijumuisha sindano ya maelekezo.
- Wikipedia, "Prompt engineering": muhtasari wa mbinu na istilahi.
- Saraka ya `skills/` ya mwongozo huu: mifano iliyofanyiwa kazi ya ujuzi kwa kazi za usimamizi wa huduma.

## Marejeo

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
