# Miundombinu kama msimbo na GitOps

**Miundombinu kama msimbo hufafanua seva, mitandao, na rasilimali za wingu katika faili za maandishi zilizopitiwa ambazo zana huzitumia; GitOps huongeza kanuni kwamba hazina ndiyo njia pekee ya kubadilisha mifumo hai na kwamba kidhibiti huweka uhalisia ukilingana nayo, ili udhibiti wa matoleo uwe rekodi ya mabadiliko na njia ya kupona.**

## Kwa nini hili ni muhimu

Kwa muda mrefu, miundombinu ilijengwa kwa mikono. Mhandisi aliingia kwenye seva, kusakinisha vifurushi, kuhariri usanidi, na kuendelea na kazi nyingine. Seva ilikuwa kitu cha pekee, chenye historia iliyoishi kwenye kumbukumbu ya mhandisi na madokezo machache. Ilipoharibika, ilijengwa upya kwa kumbukumbu. Seva ya pili ilipohitajika, ilikuwa nakala iliyotofautiana kwa njia ndogo ambazo hakuna angeweza kuorodhesha. Utatuzi ulimaanisha kufahamu jinsi mifumo miwili "inayofanana" ilivyofikia kutenda tofauti.

Miundombinu kama msimbo (IaC) inabadilisha hili na maandishi. Hali inayotakikana ya miundombinu inaandikwa katika faili, kuwekwa katika udhibiti wa matoleo, kupitiwa kama programu, na kutumiwa na zana. Kujenga upya mazingira kunakuwa amri. Nakala ya pili ni faili zilezile zenye thamani tofauti. Badiliko ni ombi la kuvuta, lenye mpitiaji, jaribio, na rekodi. Wikipedia inaeleza miundombinu kama msimbo kama usimamizi na utoaji wa miundombinu kupitia faili za fasili zinazosomeka na mashine, badala ya usanidi wa mwingiliano.

GitOps inapeleka wazo hatua moja zaidi. Hazina inatangazwa kuwa chanzo kimoja cha ukweli cha hali inayotakikana, na programu hutazama hiyo na mfumo hai, na kuleta mfumo katika mstari. Hakuna anayebadilisha uzalishaji kwa mikono; wanabadilisha hazina. Hii inatoa usimamizi wa huduma mengi: njia ya ukaguzi kwa kila badiliko, kupona haraka, uthabiti kati ya mazingira, na makazi ya asili ya idhini ya mabadiliko. Pia inaleta hatari mpya, kama siri katika hazina na makosa yanayotumika kila mahali kwa wakati mmoja. Mada hii inaeleza mawazo na jinsi ya kuyapokea kwa uangalifu. Inajenga juu ya usimamizi wa usanidi (mada 4.4 — Usimamizi wa Usanidi), utoaji endelevu (mada 2.2 — Utoaji endelevu), na uwezeshaji wa mabadiliko (mada 3.4 — Uwezeshaji wa Mabadiliko), na kuongoza kwenye mifereji (mada 6.4 — Mifereji na mabadiliko ya kiotomatiki).

## Dhana kuu

**Miundombinu kama msimbo (IaC).** Kufafanua miundombinu katika msimbo au faili za usanidi ambazo zana husoma na kutumia. Inafunika seva, mitandao, hifadhi, hifadhidata, kanuni za ufikiaji, na mipangilio ya jukwaa. Wikipedia inaeleza mbinu na historia yake. Faili ni nyaraka na pia utaratibu.

**Ya kutangaza na ya amri.** Fasili ya kutangaza inaeleza hali ya mwisho inapaswa kuwa nini ("kuna seva tatu za aina hii nyuma ya kisawazishi hiki cha mzigo"); zana inafahamu jinsi ya kufika huko. Fasili ya amri inaeleza hatua za kuchukua. Wikipedia inaeleza programu ya kutangaza na ya amri. Zana za kutangaza huwa rahisi kuelewa na kurudia kwa usalama, na hati za amri hutoa udhibiti zaidi kwa kazi zisizo za kawaida. Timu nyingi hutumia zote mbili.

**Zana.** Mifano ni pamoja na Terraform, inayotoa rasilimali za wingu, Ansible, inayosanidi mifumo, na Kubernetes, inayoendesha kontena kulingana na manifests zilizotangazwa. Wikipedia inaeleza kila moja. Mandhari ya zana hubadilika haraka; chagua kwa kufaa, msaada, na ujuzi ulio nao, na uweke fasili zinazohamishika kadiri inavyowezekana.

**Hali inayotakikana, hali halisi, na kuteleza.** Hali inayotakikana ni msimbo unachosema; hali halisi ni kinachoendeshwa. Kuteleza ni tofauti, kwa kawaida kutokana na mabadiliko ya mikono au kushindwa. Kugundua na kurekebisha kuteleza ni faida kuu ya IaC. Tazama mada 4.4 — Usimamizi wa Usanidi.

**Kutoathiriwa na marudio (idempotence).** Kutumia fasili ileile mara kwa mara kunatoa matokeo yaleyale. Wikipedia inaeleza idempotence. Ndiyo inayofanya kuwa salama kuendesha tena utumiaji kurekebisha kuteleza.

**Faili za hali.** Baadhi ya zana huweka rekodi ya rasilimali zinazozisimamia, inayolinganishwa na fasili. Ishughulikie kwa uangalifu: inaweza kuwa na data nyeti, haipaswi kuhaririwa kwa mikono, na inahitaji kufungwa ili watu wawili wasitumie kwa wakati mmoja.

**Miundombinu isiyobadilika.** Badala ya kubadilisha seva inayoendeshwa, unajenga mpya kutoka taswira inayojulikana na kubadilisha ya zamani. Hii inaepuka kuteleza na kurahisisha kurudisha nyuma: badilisha kurudi. Inafanya kazi vizuri zaidi na mashine pepe na kontena, zinazoelezwa na Wikipedia, na taswira zilizojengwa vizuri.

**Udhibiti wa matoleo na mapitio.** Fasili huishi katika udhibiti wa matoleo, kama Git, ambayo Wikipedia inaeleza kama mfumo wa udhibiti wa matoleo uliosambazwa. Mabadiliko hupitia matawi na mapitio, yanayoelezwa kama maombi ya kuvuta na mapitio ya msimbo. Historia inaonyesha nani alibadilisha nini, lini, na kwa nini, jambo linaloaunga mkono ukaguzi na kujifunza. Tazama mada 3.4 — Uwezeshaji wa Mabadiliko.

**GitOps.** Mbinu ya uendeshaji ambamo hazina ya Git ina hali inayotakikana, na wakala wa kiotomatiki huweka mfumo hai katika mstari nayo. Mabadiliko hufanywa kwa kubadilisha hazina tu; wakala huvuta na kuyatumia, na hurudisha mabadiliko ya mikono. Wikipedia inataja GitOps chini ya DevOps. Usanifu wa kuvuta unamaanisha mfumo wa uzalishaji huvuta usanidi wake, kwa hiyo vitambulisho vya uzalishaji haviitaji kuishi katika mfumo wa kujenga. Angalia nyaraka za mradi wenyewe kwa maelezo ya mbinu.

**Mizunguko ya upatanisho.** Kidhibiti kinacholinganisha mara kwa mara hali inayotakikana na halisi na kutenda kuziba pengo. Wazo linatoka katika nadharia ya udhibiti, inayoelezwa na Wikipedia, na linasimama nyuma ya jinsi zana za Kubernetes na GitOps zinavyofanya kazi. Mizunguko ni thabiti, na pia inaweza kurudia badiliko baya kwa haraka.

**Mazingira na kupandisha.** Fasili zilezile, zenye thamani tofauti, huunda mazingira ya maendeleo, majaribio, na uzalishaji. Mabadiliko hupandishwa kupitia hayo. Kuweka mazingira thabiti hufanya majaribio kuwa na maana zaidi. Tazama mada 3.5 — Usimamizi wa Matoleo na Upelekaji.

**Sera kama msimbo.** Kanuni kuhusu kinachoruhusiwa, kama "hakuna hifadhi ya umma" au "rasilimali zote lazima ziwe na tagi", zilizoandikwa kama msimbo na kukaguliwa kiotomatiki kabla ya mabadiliko kutumika. Hii inaweka udhibiti mahali badiliko linapofanywa na kuzalisha ushahidi. Tazama mada 6.4 — Mifereji na mabadiliko ya kiotomatiki.

**Siri.** Nenosiri, funguo, na tokeni hazipaswi kuhifadhiwa kwa maandishi wazi katika hazina. Tumia meneja wa siri au usimbaji, na upe uendeshaji otomatiki ufikiaji mdogo, wa muda mfupi. Tazama mada 3.13 — Usimamizi wa Usalama wa Taarifa.

**Moduli na matumizi tena.** Moduli za pamoja, zilizojaribiwa kwa mifumo ya kawaida, kama mtandao wa kawaida au hifadhidata, huharakisha kazi na kutekeleza viwango. Zinahitaji mmiliki, matoleo, na maelezo ya toleo.

**Eneo la athari.** Kosa katika fasili ya pamoja linaweza kuathiri mifumo mingi kwa wakati mmoja. Punguza hili kwa kugawanya hali katika vitengo vidogo, kwa kutumia utoaji wa hatua kwa hatua, na kuhitaji mapitio kwa moduli za pamoja.

**Kujaribu msimbo wa miundombinu.** Mbinu ni pamoja na ukaguzi wa sintaksia na sera, mpango au onyesho la awali la mabadiliko kabla ya kutumia, majaribio katika mazingira ya kutupwa, na ukaguzi baada ya kutumia. Wikipedia inaeleza mawazo yanayohusiana chini ya majaribio ya kiotomatiki. Tazama mada 2.2 — Utoaji endelevu.

**Lenzi zinavyolingana.** IaC na GitOps ni msingi wa kihandisi wa uendeshaji wa uchapuchapu: mabadiliko madogo, yaliyopitiwa, yanayoweza kubatilishwa. AI inaweza kuandaa fasili na kueleza mipango, chini ya mapitio. Uendeshaji otomatiki huzitumia. Uchanganuzi husoma historia kwa marudio ya mabadiliko na kushindwa.

## Mazoea bora

1. **Weka kila badiliko katika msimbo.** Fanya hazina kuwa njia ya mabadiliko kwa mifumo muhimu, na ukataze mabadiliko ya mikono isipokuwa dharura zilizofafanuliwa. Rekodi mabadiliko ya dharura na uyarudishe ndani.
2. **Tumia mapitio na mabadiliko madogo.** Hitaji mtu wa pili kupitia kila badiliko, na uyaweke madogo vya kutosha kueleweka. Onyesha onyesho la awali la kitakachobadilika.
3. **Pendelea fasili za kutangaza na hatua zisizoathiriwa na marudio.** Ni rahisi kurudia na kukagua kuteleza. Tumia hati za amri kwa kazi zinazozihitaji, kwa uangalifu.
4. **Gundua na urekebishe kuteleza.** Linganisha hali halisi na inayotakikana kwa ratiba au kila wakati. Amua kwa kila aina ya kuteleza kama kurudisha kiotomatiki au kutoa tahadhari.
5. **Weka siri nje ya msimbo.** Tumia meneja wa siri, simba inapohitajika, upe uendeshaji otomatiki vitambulisho vya muda mfupi, na uchunguze hazina kwa siri zilizovuja.
6. **Linda hali na hazina.** Zuia nani anaweza kubadilisha fasili na hali za uzalishaji, tekeleza ulinzi wa tawi, na uweke nakala za akiba za hazina na hali.
7. **Jaribu kabla ya kutumia.** Endesha ukaguzi wa sera, maonyesho ya awali, na majaribio katika mazingira ya kutupwa. Pitia mpango kwa ufutaji usiotarajiwa.
8. **Punguza eneo la athari.** Gawanya fasili katika vitengo vinavyoweza kushindwa kwa kujitegemea, toa kwa hatua, na ulinde rasilimali muhimu dhidi ya kufutwa kwa bahati mbaya.
9. **Tumia tena moduli zilizojaribiwa zenye wamiliki.** Chapisha moduli zenye matoleo kwa mifumo ya kawaida, pamoja na nyaraka na maelezo ya toleo, na ustaafishe matoleo ya zamani.
10. **Panga kupona.** Fanyia mazoezi kujenga upya mazingira kutoka kwa msimbo, ikijumuisha kurejesha data, na uipime muda. Jumuisha hazina na zana katika mipango yako ya mwendelezo. Tazama mada 3.12 — Usimamizi wa Mwendelezo wa Huduma.

## Maswali ya kujadili na timu yako

**Ni mifumo yetu ipi tungeweza kujenga upya kutoka kwa msimbo leo, na ipi kwa kumbukumbu tu?**
Fanya orodha. Tarajia mingi kumtegemea mtu mmoja. Ili kwenda mbali zaidi, chagua mfumo mmoja na uifafanue katika msimbo.

**Mara ya mwisho mtu alibadilisha uzalishaji kwa mikono lini, na tuligunduaje?**
Omba hadithi. Tarajia kwamba hakuna anayefuatilia. Ili kwenda mbali zaidi, ongeza ugunduzi wa kuteleza kwenye mazingira moja na ukubaliane kinachotokea tofauti ikipatikana.

**Siri inaweza kuwa imekaa wapi katika hazina au faili ya hali?**
Tafuteni pamoja. Tarajia mshangao. Ili kwenda mbali zaidi, chunguza hazina na uhamishe matokeo kwenye meneja wa siri.

**Badiliko kubwa zaidi ambalo utumiaji mmoja unaweza kufanya ni lipi, na tungelipunguzaje?**
Fikiria moduli za pamoja na hali kubwa moja. Tarajia majibu yasiyofurahisha. Ili kwenda mbali zaidi, gawanya hali moja kubwa kuwa ndogo.

**Tunapitiaje mabadiliko ya miundombinu, na mpitiaji anaangalia nini hasa?**
Omba mapitio ya hivi karibuni. Tarajia idhini ya haraka. Ili kwenda mbali zaidi, kubaliana mpitiaji lazima akague nini, kama matokeo ya mpango na athari ya usalama.

**AI inaweza kutusaidia wapi kuandika au kupitia msimbo wa miundombinu, na tunakagua vipi?**
AI inaweza kuandaa fasili na kueleza mipango. Pia inaweza kutoa chaguo-msingi zisizo salama au mipangilio mibaya ya rasilimali. Uliza nani anapitia na ukaguzi gani unaendeshwa. Ili kwenda mbali zaidi, endesha msimbo ulioandaliwa na AI kupitia ukaguzi wa sera uleule kama mwingine wowote.

## Kwa vitendo: mfano wa usimamizi wa huduma

Timu ya kidijitali ya maktaba ya taifa inaendesha huduma ya utafutaji wa katalogi kwenye wingu la umma. Mazingira yalijengwa kwa mikono kwa miaka kadhaa. Mazingira ya majaribio yanatofautiana na uzalishaji kwa njia ambazo hakuna anayeweza kuorodhesha, na kuzimika kwa hivi karibuni kulifuatiliwa hadi badiliko la kikundi cha usalama lililofanywa kwa mikono wakati wa tukio la hitilafu la awali na kamwe halikurekodiwa.

Kiongozi wa jukwaa anachagua kufafanua mazingira moja katika msimbo kama jaribio la awali. Kwa kutumia zana ya kutangaza, timu inaeleza mtandao, kompyuta, hifadhidata, na kanuni za ufikiaji za mazingira ya majaribio, inaingiza rasilimali zilizopo, na kuweka msimbo katika hazina yenye ulinzi wa tawi na mapitio ya lazima. Mfereji unaendesha ukaguzi wa sera, kama hakuna hifadhi ya umma na tagi za lazima, na unaonyesha mpango kwa kila ombi la kuvuta. Siri zinahamia kwenye meneja wa siri wa mtoaji wa wingu.

Kisha wanaongeza ugunduzi wa kuteleza: kazi ya kila usiku inalinganisha msimbo na hali halisi ya wingu na kuchapisha tofauti kwenye kituo cha timu. Wiki ya kwanza inapata mabadiliko kumi na moja ya mikono. Manane hayana madhara, mawili ni rasilimali za majaribio zilizochakaa, na moja ni kanuni ya ngome ya moto iliyo wazi kwenye lango la hifadhidata. Wanarekebisha kanuni na kufuta rasilimali.

Baada ya miezi mitatu, uzalishaji pia uko katika msimbo, na kidhibiti cha mtindo wa GitOps katika jukwaa la kontena kinatumia mabadiliko yaliyoidhinishwa kutoka kwenye hazina. Kujenga upya mazingira ya majaribio kutoka mwanzo kunachukua dakika 40. Timu inafanyia mazoezi kujenga upya uzalishaji katika akaunti tofauti, pamoja na kurejesha data, kwa nusu siku.

Kinachobadilika: historia ya mabadiliko iko kwenye hazina, mapitio ni halisi, na mazingira mawili yanalingana. Kinachobaki kigumu: seva ya hifadhidata ya zamani haiungwi mkono vizuri na zana na inabaki ya mikono kwa sehemu; faili ya hali iliwahi kuwa na nenosiri la maandishi wazi kutoka kwa uingizaji wa awali, ambalo timu ililazimika kulibadilisha; na mhandisi mmoja alitumia badiliko kutoka kwenye kompyuta ndogo yenye toleo tofauti la zana, jambo lililozalisha tofauti zisizotarajiwa. Kiongozi anaongeza toleo la zana lililofungwa katika mfereji, kanuni kwamba utumiaji unatoka kwenye mfereji tu, na uchunguzi wa hali kwa siri.

## Mitazamo minne

### Timu za bidhaa na utoaji

Fafanua miundombinu ya huduma yako katika msimbo kando ya programu, ipitie, na uijaribu katika mazingira ya kutupwa. Epuka mabadiliko ya mikono. Jumuisha tagi, umiliki, na mipangilio ya usalama katika fasili.

### Timu za huduma na uendeshaji

Tumia hazina kama rekodi ya mabadiliko, na ugundue kuteleza. Pitia mipango kwa makini, linda hali na siri, na ufanyie mazoezi kujenga upya. Weka mabadiliko ya dharura nadra na uyarudishe kwenye msimbo.

### Uongozi na utawala

Omba ushahidi kutoka kwa hazina na mfereji badala ya mikutano. Fadhili zana, mafunzo, na mazoezi. Fanya wazi kwamba mabadiliko ya mikono ya uzalishaji ni ubaguzi unaopaswa kurekodiwa.

### Wateja na watumiaji

Unanufaika na mazingira yanayotenda kwa njia ileile na kupona haraka. Unapaswa kuona mshangao mdogo baada ya mabadiliko, na taarifa wazi kwa yale makubwa.

## Uchapuchapu, AI, uendeshaji otomatiki na uchanganuzi

### Uchapuchapu

Mabadiliko madogo, yaliyopitiwa, yanayoweza kubatilishwa ya miundombinu yenye mrejesho wa haraka ni umbo la kiutendaji la utoaji endelevu. Jenga fasili kwa ongezeko, ukianza na mazingira yenye maumivu zaidi. Tahadhari: uhamishaji wa wingi wa kila mfumo hadi msimbo kwa wakati mmoja ni hatari; hamisha mmoja kwa wakati.

### AI

AI inaweza kuandaa fasili, kueleza mpango, na kupendekeza kanuni za sera, huku mtu akipitia kila badiliko. Taja mmiliki wa kila matumizi. Tahadhari: msimbo wa miundombinu uliozalishwa unaweza kuwa si salama kwa chaguo-msingi au unaweza kufuta rasilimali; tumia ukaguzi wa sera uleule na usome mpango. Tazama mada 5.4 — AI zalishi kwa matukio, maarifa na mabadiliko.

### Uendeshaji otomatiki

IaC na GitOps ni uendeshaji otomatiki wa miundombinu yenyewe. Weka vidhibiti na mifereji ya upendeleo mdogo, yenye kumbukumbu, na iliyolindwa, kwa sababu inaweza kubadilisha kila kitu. Tahadhari: kipatanishi cha kiotomatiki kinaweza kutumia tena kosa kila mahali; toa kwa hatua na uweke njia ya kukisimamisha. Tazama mada 6.4 — Mifereji na mabadiliko ya kiotomatiki.

### Uchanganuzi

Angalia marudio ya mabadiliko, kiwango cha kushindwa, muda wa kujenga upya, hesabu za kuteleza, muda wa kugundua mabadiliko ya mikono, na ukiukaji wa sera. Tahadhari: kuhesabu commit kunazawadia shughuli, na hesabu ndogo ya kuteleza inaweza kuakisi kigunduzi dhaifu; jaribu ugunduzi kwa badiliko linalojulikana. Tazama kitabu cha *Service Management Metrics* na mada 7.3 — Upimaji na utoaji taarifa.

## Njia za kawaida za kushindwa

- **Uhalisia mseto.** Baadhi ya mabadiliko katika msimbo na mengine kwa mikono. Kuteleza kunakua. Fanya msimbo kuwa njia pekee na ugundue kuteleza.
- **Siri katika hazina.** Vitambulisho vinavuja. Tumia meneja wa siri na uchunguze.
- **Hali kubwa ya pamoja.** Badiliko moja linaathiri kila kitu. Gawanya katika vitengo vidogo.
- **Mabadiliko yasiyopitiwa.** Makosa yanafika uzalishaji. Hitaji mapitio na uonyeshe mpango.
- **Zana na moduli zisizofungwa.** Tabia inabadilika bila kutarajiwa. Funga matoleo.
- **Hazijajengwa upya kamwe.** Kupona kunashindwa inapohitajika. Fanyia mazoezi kujenga upya.
- **Mfereji kama msimamizi mkuu.** Mfereji ulioingiliwa unamiliki uzalishaji. Punguza mamlaka na ulinde.

## Modeli ya ukomavu

| Kipimo | Kuanzisha | Kuendeleza | Kusanifisha | Kusimamia | Kuratibu |
|---|---|---|---|---|---|
| Ufunikaji | Wa mikono | Baadhi ya rasilimali katika msimbo | Mifumo muhimu zaidi imefafanuliwa katika msimbo | Ufunikaji na ubaguzi vinafuatiliwa | Mali yote imefafanuliwa na kutawaliwa kama msimbo |
| Udhibiti | Hakuna mapitio | Mapitio ya wenza | Mapitio, onyesho la awali la mpango, na ukaguzi wa sera kwa kila badiliko | Kuteleza kunagunduliwa na kutendewa kazi | Upatanisho wenye usimamizi wa binadamu kati ya mazingira |
| Usalama | Siri katika msimbo | Ufahamu | Siri zinasimamiwa na kuchunguzwa, uendeshaji otomatiki wa upendeleo mdogo | Matokeo yanafuatiliwa hadi kufungwa | Usalama na sera vimejengwa ndani ya moduli za pamoja |
| Kupona | Kujenga upya kwa kumbukumbu | Imeandikwa | Kujenga upya kumefanyiwa mazoezi na kupimwa muda | Muda wa kupona unapimwa na kuboreshwa | Kupona kunaendeshwa kiotomatiki kati ya mazingira na maeneo |

## Orodha hakiki

- [ ] Mifumo muhimu imefafanuliwa katika msimbo katika udhibiti wa matoleo.
- [ ] Kila badiliko linapitiwa na kuonyesha onyesho la awali la mpango.
- [ ] Mabadiliko ya mikono ya uzalishaji yamekatazwa isipokuwa dharura zilizorekodiwa.
- [ ] Kuteleza kunagunduliwa kwa ratiba na kushughulikiwa kwa kanuni.
- [ ] Siri ziko kwenye meneja, na hazina na hali zinachunguzwa.
- [ ] Zana na moduli zimefungwa na zina wamiliki.
- [ ] Fasili zimegawanywa kupunguza eneo la athari.
- [ ] Tunafanyia mazoezi kujenga upya mazingira na kurekodi muda.

## Maelekezo ya AI

**Pitia matokeo ya mpango.**

```text
Here is the plan output from an infrastructure change: [paste].
List resources to be created, changed, and destroyed, highlight any deletion or replacement of a data store or network component, and list questions a reviewer should ask. Do not approve or reject.
List what you are unsure of.
```

**Andaa kanuni za sera kutoka kwa mahitaji.**

```text
Our requirements: [list, such as no public storage, tags required, encryption at rest]. Our tool: [name, or "undecided"].
Write each requirement as a plain-language rule with one example of a violation, and describe how to test the rule. Do not write code unless I name the tool.
List what you are unsure of.
```

**Fupisha matokeo ya kuteleza.**

```text
Here is a drift report listing differences between code and the running environment: [paste].
Group the differences by type (extra resource, changed setting, missing resource), flag any that touch access, network, or encryption, and write one question per group for the team. Do not recommend fixes.
List what you are unsure of.
```

## Ujuzi wa AI

- [configuration-management](../../../../skills/configuration-management/SKILL.md): tumia kuunganisha fasili za msimbo na huduma zinazounga mkono.
- [change-request](../../../../skills/change-request/SKILL.md): tumia kuelezea mabadiliko ya miundombinu kwa uwazi kwa mapitio.
- [security-testing](../../../../skills/security-testing/SKILL.md): tumia kupanga ukaguzi wa msimbo wa miundombinu na siri.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): tumia kufanyia mazoezi kujenga upya kutoka kwa msimbo.
- [runbook](../../../../skills/runbook/SKILL.md): tumia kuandika taratibu za dharura za mikono zinazobaki.

## Vyanzo vikuu

- Kief Morris, *Infrastructure as Code* (2nd edition, 2020): mwongozo wa vitendo wa kufafanua na kusimamia miundombinu.
- Jez Humble and David Farley, *Continuous Delivery* (2010): misingi ya mazingira na mifereji inayorudiwa.
- Nyaraka za zana unazotumia, kama Terraform, Ansible, na Kubernetes: chanzo chenye mamlaka cha tabia zao.
- Wikipedia, "Infrastructure as code": muhtasari wa mbinu.

## Marejeo

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
