# Référentiels et normes de gestion des services

**ISO/IEC 20000, COBIT, VeriSM, FitSM et IT4IT recoupent ITIL et se recoupent entre eux : ils répondent à des questions différentes (quoi certifier, comment gouverner, comment gérer à l'échelle de l'organisation, comment commencer légèrement, comment modéliser l'informatique comme une activité), choisissez donc selon la question que vous avez plutôt que selon le logo.**

## Pourquoi c'est important

Les équipes qui adoptent la gestion des services rencontrent un alphabet de référentiels et de normes. Un responsable des achats demande la certification ISO/IEC 20000. Un auditeur évoque COBIT. Un consultant recommande VeriSM pour l'ère numérique. Une petite équipe découvre FitSM et se demande pourquoi ITIL lui paraissait si lourd. Chacun est présenté par ses partisans comme la réponse, et les descriptions disent rarement à quoi chacun sert.

Le risque est une confusion aux coûts bien réels : se certifier selon une norme qui ne correspond pas à votre contrat, ou adopter un référentiel pour un rôle qu'il n'a jamais été conçu pour jouer. Un référentiel est une recommandation ; une norme est un ensemble d'exigences au regard desquelles un auditeur peut certifier une organisation. Ce sont deux choses différentes, et les mélanger conduit à des efforts gaspillés.

Ce sujet propose une comparaison neutre. Ce n'est pas un manuel de conformité et il ne donne ni conseil juridique ni conseil d'audit. Pour chaque référentiel, il donne la finalité, le type de document et la question à laquelle il aide à répondre. Les détails changent ; consultez donc les publications actuelles de chaque propriétaire avant de vous fier à toute affirmation d'ici, y compris la version d'ITIL abordée au Sujet 1.3 — ITIL 5.

## Concepts clés

**Référentiel et norme.** Un référentiel offre des concepts, des pratiques et des conseils que vous adaptez. Une norme fixe des exigences, normalement formulées avec « doit », au regard desquelles une organisation peut être évaluée. ITIL est un référentiel : les personnes sont certifiées, pas les organisations. ISO/IEC 20000 est une norme : une organisation peut être auditée et certifiée à son égard.

**ITIL.** Des recommandations pour la gestion des services informatiques, aujourd'hui détenues par PeopleCert, avec des pratiques, un modèle de valeur et un programme de certification pour les personnes. Voir le Sujet 1.2 — ITIL.

**ISO/IEC 20000.** Une norme internationale pour les systèmes de management des services, publiée conjointement par l'Organisation internationale de normalisation et la Commission électrotechnique internationale. La partie 1 fixe les exigences pour établir, mettre en œuvre, maintenir et améliorer un système de management des services (SMS). Les organisations sont certifiées par des organismes accrédités. Elle est souvent choisie lorsqu'un client ou un régulateur demande une preuve indépendante de la discipline de gestion des services. Sa structure est compatible avec celle d'autres normes de systèmes de management ISO.

**COBIT.** Un référentiel d'ISACA pour la gouvernance et la gestion de l'information et de la technologie d'entreprise. Il est plus large que la gestion des services : il traite de la manière dont le conseil d'administration et la direction orientent et supervisent la technologie, avec des objectifs de gouvernance, des objectifs de gestion et une mesure de la performance. Il est souvent utilisé par les auditeurs et les équipes de gestion des risques, et les organisations l'emploient couramment avec ITIL, COBIT décrivant ce que la gouvernance attend et ITIL décrivant comment les services sont exploités.

**VeriSM.** Une approche de gestion des services pour les organisations qui offrent des services numériques, issue d'un groupe de la communauté de la gestion des services. Elle décrit des « principes de gestion des services » à l'échelle de l'organisation et un maillage de gestion composé de ressources, d'environnement, de pratiques de gestion et de technologies émergentes, destiné à permettre à une organisation de combiner différentes pratiques. Ce n'est pas un remplacement d'un référentiel de pratiques ; c'est une façon d'en organiser plusieurs. Consultez le site de son propriétaire pour les détails actuels.

**FitSM.** Une famille légère de normes pour la gestion des services informatiques, issue de projets de recherche européens, conçue pour être simple et libre d'utilisation. Elle décrit un petit nombre de processus avec un ensemble clair d'exigences, et est souvent envisagée par les petites et moyennes organisations et les environnements informatiques fédérés qui trouvent les grands référentiels lourds.

**IT4IT.** Une architecture de référence de The Open Group pour gérer l'activité de l'informatique, modélisée en flux de valeur (comme de la stratégie au portefeuille, de l'exigence au déploiement, de la demande à la satisfaction et de la détection à la correction) soutenus par des composants d'information et fonctionnels. Elle est utile lorsque vous voulez concevoir la façon dont les outils et les données s'articulent sur tout le cycle de vie informatique, et elle complète les pratiques d'ITIL.

**Normes apparentées.** ISO/IEC 27001 spécifie les exigences d'un système de management de la sécurité de l'information (voir le Sujet 3.13 — Gestion de la sécurité de l'information). ISO/IEC 19770 couvre la gestion des actifs informatiques (voir le Sujet 4.1 — Gestion des actifs). ISO/IEC 42001, publiée en 2023, spécifie les exigences d'un système de management de l'intelligence artificielle (voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA). Les normes qui partagent une structure peuvent être combinées dans un seul système de management, ce qui réduit les efforts en double.

**DevOps, SRE et l'agilité ne figurent pas sur cette liste.** Ce sont des mouvements et des approches, non des référentiels au sens employé ici, même s'ils recoupent des pratiques d'ici. Voir le Sujet 2.5 — DevOps et le Sujet 2.6 — Ingénierie de la fiabilité des sites.

**Modèles de maturité.** Le Capability Maturity Model Integration (CMMI) évalue la capacité des processus et est parfois utilisé pour le travail de service. Ce guide utilise son propre modèle de maturité à cinq niveaux (Initier, Développer, Standardiser, Piloter, Orchestrer), qui est une aide à l'auto-évaluation, non une certification.

**Comment les angles s'articulent.** Chaque référentiel a été révisé, ou est en cours de révision, pour refléter les méthodes de travail agiles, l'IA, l'automatisation et les données. Consultez l'édition actuelle pour voir comment chacun les traite, et considérez tout résumé, celui-ci compris, comme un renvoi vers la source.

## Bonnes pratiques

1. **Partir de la question.** Écrivez ce dont vous avez besoin : une preuve indépendante pour un client, une structure de gouvernance pour le conseil d'administration, une façon plus légère de commencer, une manière d'organiser plusieurs pratiques. Choisissez le référentiel ou la norme qui y répond.
2. **Vérifier ce que le client ou le régulateur exige réellement.** Si un contrat dit « certifié ISO/IEC 20000 », aucun autre référentiel n'y satisfait. S'il dit « bonne pratique », vous avez le choix. Lisez la clause.
3. **Ne pas certifier pour certifier.** La certification coûte des efforts et des audits récurrents. Faites-la lorsque quelqu'un d'important a besoin de la preuve, et construisez d'abord les pratiques sous-jacentes.
4. **Lire le texte du propriétaire.** Pour toute exigence ou définition que vous citerez, utilisez la norme ou le référentiel lui-même et consignez l'édition et la date. Les résumés, billets de blog compris, dérivent.
5. **Combiner au niveau des pratiques.** De nombreuses organisations utilisent ITIL pour les pratiques, ISO/IEC 20000 pour la certification, COBIT pour la gouvernance et IT4IT pour l'architecture. Faites correspondre une fois chaque pratique aux exigences qu'elle soutient, plutôt que de rédiger des procédures distinctes pour chacune.
6. **Partager un système de management.** Là où les normes partagent une structure, tenez un seul jeu de documents, d'audits et de réunions de revue. Une seule revue de direction couvrant le service, la sécurité et l'IA est moins coûteuse et plus claire que trois.
7. **Commencer petit quand on est petit.** Un référentiel conçu pour une grande entreprise peut submerger une équipe de dix personnes. Envisagez une option plus légère comme FitSM ou quelques pratiques choisies.
8. **Produire les preuves comme sous-produit.** Concevez pipelines et outils pour que les enregistrements voulus par un auditeur soient produits par le travail normal, non assemblés après coup.
9. **Traiter les référentiels comme des sources de questions.** Utilisez chacun pour demander ce qui vous échappe peut-être, et vérifiez les réponses à l'aune de vos propres preuves.
10. **Revoir le choix.** Les besoins changent. Examinez chaque année si vous avez toujours besoin de chaque certification ou référentiel, et ce que chacun coûte.

## Questions à discuter avec votre équipe

**Quel problème essayons-nous de résoudre avec un référentiel ou une norme, et qui le demande ?**
Cela commence par le besoin. Vous entendrez peut-être que « tout le monde l'utilise » ou qu'un auditeur l'a mentionné. Demandez le document ou la clause du contrat. Demandez ensuite d'écrire le besoin en une phrase et de tester chaque option à son aune.

**Lesquels de nos clients ou régulateurs exigent une certification, et laquelle ?**
Les exigences sont souvent supposées. Vérifiez les contrats, les appels d'offres et les recommandations réglementaires. Attendez-vous à des surprises dans les deux sens : une exigence que personne n'avait remarquée, ou aucune là où l'on en supposait une. Demandez ensuite de lister les preuves que chacune exige.

**Où tenons-nous des documents distincts pour la même pratique parce que différents référentiels les demandent ?**
Cela révèle les doublons. Des exemples courants sont des procédures d'incident séparées pour le service et la sécurité. Demandez qui les tient en phase. Demandez ensuite de choisir une pratique à décrire une fois et à faire correspondre à chaque exigence.

**À quoi ressemblerait la version la plus légère de la gestion des services pour nous ?**
Cela vérifie si nous construisons trop. Attendez-vous à des pressions pour adopter toutes les pratiques. Demandez quelles deux ou trois pratiques supprimeraient le plus de difficultés. Demandez ensuite de choisir celles-là et de reporter le reste.

**Quelles preuves nos audits demandent-ils, et nos outils pourraient-ils les produire automatiquement ?**
Les audits sont un coût de fonctionnement. Les équipes rassemblent souvent les preuves à la main chaque année. Demandez ce que l'auditeur inspecte réellement. Demandez ensuite de choisir un enregistrement à générer à partir du pipeline ou de l'outil de tickets.

**Comment saurions-nous qu'une certification a amélioré notre service, et pas seulement notre paperasse ?**
Cela relie la certification aux résultats. Attendez-vous à des réponses honnêtes selon lesquelles c'est difficile à dire. Demandez ce que nous mesurerions avant et après, comme le temps de rétablissement du service. Demandez ensuite de convenir de la mesure et d'une date de revue.

## En pratique : un exemple de gestion des services

Une société régionale de services gérés fournit du support informatique à une soixantaine de petites cliniques. Un nouveau client, un groupe hospitalier, demande dans un appel d'offres si la société est « certifiée selon une norme reconnue de gestion des services ». Le responsable commercial suppose qu'il s'agit de certificats ITIL et liste les qualifications des techniciens.

La responsable des services lit l'appel d'offres. Il nomme explicitement ISO/IEC 20000-1. Elle explique que des certificats ITIL individuels ne satisfont pas à l'exigence, puisqu'une organisation doit être auditée. Elle compare les exigences de la norme à ce que fait la société. Le traitement des incidents et des changements est solide et documenté, mais il n'y a pas de revue de direction formelle, pas de rapports de niveaux de service documentés, et les accords avec les fournisseurs sont classés de façon inégale.

La société décide de répondre sous condition, avec un plan pour atteindre la certification en un an. Elle rédige un document simple de système de management des services, planifie une revue de direction trimestrielle qui couvre aussi la sécurité de l'information et configure l'outil de tickets pour produire les rapports qu'un auditeur voudra. Elle choisit une voie plus légère pour ses plus petites cliniques, fondée sur quelques pratiques essentielles, afin que l'effort ne les submerge pas.

Ce qui change : la société peut répondre honnêtement à l'appel d'offres et dispose d'un plan. Ce qui reste difficile : le calendrier d'audit dépend de la disponibilité d'un organisme accrédité, les rapports ne reflètent pas encore les véritables priorités des cliniques, et l'équipe ne sait pas bien quelle quantité de documentation est suffisante. Ils conviennent de demander tôt conseil à l'organisme de certification et de garder les documents courts.

## Quatre perspectives

### Équipes produit et de livraison

Attendez-vous à des questions des auditeurs sur les enregistrements et les contrôles, et concevez votre pipeline pour les produire. Apprenez lesquelles de vos pratiques servent une exigence de norme, afin de pouvoir expliquer pourquoi un contrôle existe.

### Équipes de service et d'exploitation

Maintenez des procédures exactes et tenez les enregistrements au fil du travail, pour que les preuves existent sans effort supplémentaire. Contribuez aux revues de direction avec des données réelles et dites au responsable quand une exigence est lourde à satisfaire.

### Direction et gouvernance

Décidez quelles certifications valent leur coût et demandez la clause du contrat ou le besoin du client qui justifie chacune. Financez un seul système de management plutôt que plusieurs. Demandez des preuves que les pratiques fonctionnent, pas seulement que des documents existent.

### Clients et utilisateurs

Si vous exigez une certification, dites laquelle et quel périmètre. Demandez au fournisseur ce que le certificat couvre : quels services, quels sites et quelles dates. Un certificat est la preuve d'un système, non la garantie d'un résultat particulier.

## Agilité, IA, automatisation et analytique

### Agilité

Construisez les pratiques par petits incréments et recueillez les preuves au fur et à mesure, avec les parties prenantes qui examinent régulièrement le système. Attention : les normes exigent une pratique documentée et reproductible ; n'utilisez pas « nous sommes agiles » pour éviter de décrire comment le travail est contrôlé.

### IA

L'IA peut aider à comparer les exigences de plusieurs normes, à rédiger des correspondances et à résumer des constats d'audit, une personne vérifiant chacun d'eux par rapport au texte source. Il existe désormais une norme de système de management de l'IA (ISO/IEC 42001), tout comme le NIST AI Risk Management Framework ; voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA. Attention : l'IA peut inventer des numéros de clauses ou des exigences ; donnez-lui donc le texte et demandez-lui de citer.

### Automatisation

Générez les preuves à partir des pipelines et des outils, comme des fiches de changement reliées à des builds, des revues d'accès exportées à intervalles réguliers et des rapports de niveaux de service produits automatiquement. Attention : une preuve automatisée prouve que l'automatisation s'est exécutée, non que le contrôle est efficace ; examinez un échantillon à la main.

### Analytique

Utilisez les données pour montrer que les pratiques fonctionnent, comme le temps de rétablissement du service et les changements causant des incidents, et pour préparer les audits en listant les écarts. Attention : les indicateurs liés à la certification, comme le nombre de constats d'audit clos, peuvent être détournés ; voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Assimiler les certificats personnels à la certification de l'organisation.** Une réponse à un appel d'offres échoue sur un point technique. Lisez l'exigence et sachez de quel type de certification elle parle.
- **Certifier avant de construire la pratique.** L'organisation réussit un audit et rien ne s'améliore. Construisez et mesurez d'abord la pratique.
- **Maintenir des systèmes parallèles.** Chaque référentiel a ses propres documents et responsables. Faites correspondre une fois et partagez.
- **Utiliser un référentiel lourd pour une petite équipe.** Le personnel se noie dans la documentation. Choisissez une option plus légère ou quelques pratiques.
- **Citer des résumés comme la norme.** Une exigence est mal rapportée. Lisez le texte du propriétaire et consignez l'édition.
- **Traiter un référentiel comme l'objectif.** La conformité remplace les résultats. Mesurez ce que vivent les clients.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Choix du référentiel | Choisi par habitude ou par mode | Besoins listés | Choix lié à des besoins et exigences écrits | Choix examinés avec coûts et bénéfices | Choix coordonnés à l'échelle de l'entreprise |
| Système de management | Documents distincts par référentiel | Un peu de partage | Un système aligné sur plusieurs exigences | Système examiné et amélioré sur la base de preuves | Système intégré entre service, sécurité et IA |
| Preuves | Rassemblées avant les audits | Quelques enregistrements tenus | Enregistrements produits par le travail normal | Qualité des preuves échantillonnée et examinée | Preuves continues et automatisées avec revue humaine |
| Discipline des sources | Résumés utilisés | Texte du propriétaire lu par quelques-uns | Éditions consignées et citées | Mises à jour suivies et exploitées | Connaissance partagée et datée des exigences |

## Liste de contrôle

- [ ] Nous avons écrit pourquoi nous avons besoin de chaque référentiel ou norme.
- [ ] Nous savons quels clients ou régulateurs exigent une certification, et laquelle.
- [ ] Nous avons lu le texte du propriétaire pour tout ce que nous citons et consigné l'édition.
- [ ] Nous avons fait correspondre les pratiques aux exigences une fois, non par référentiel.
- [ ] Notre revue de direction couvre chaque norme que nous utilisons.
- [ ] Les preuves sont produites par le travail normal lorsque c'est possible.
- [ ] Nous examinons chaque année si chaque certification vaut encore son coût.
- [ ] Nos plus petites équipes ont une voie plus légère.

## Invites d'IA

**Comparer deux ensembles d'exigences.**

```text
Below is text from requirement set A: [paste clauses]. Below is text from requirement set B: [paste clauses].
Produce a table of overlaps and differences, quoting the exact words of each. Use only the text provided and do not use outside knowledge. Mark any match you are unsure about.
List what you are unsure of.
```

**Rédiger une analyse des écarts à partir de notre description de pratique.**

```text
Here is a description of how we run [practice, such as incident management]: [paste description]. Here is the requirement text: [paste clauses].
For each clause, say whether the description appears to meet, partly meet, or not address it, quote the words you relied on, and list a question to confirm. Do not give a verdict on certification.
List what you are unsure of.
```

**Préparer des questions pour un organisme de certification.**

```text
We are considering certification to [standard] for [scope]. Our size and context: [describe].
Write twelve questions to ask a certification body about scope, timeline, evidence, cost, and surveillance audits. Avoid assuming answers.
List what you are unsure of.
```

## Compétences d'IA

- [maturity-models](../../../../skills/maturity-models/SKILL.md) : à utiliser pour s'auto-évaluer par rapport à un référentiel choisi sans laisser entendre une certification.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md) : à utiliser pour vérifier les preuves par rapport aux exigences.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md) : à utiliser lorsqu'une norme demande des niveaux de service documentés.

## Sources principales

- ISO, ISO/IEC 20000-1 (la norme elle-même) : les exigences d'un système de management des services ; lisez l'édition actuelle auprès de l'éditeur.
- ISACA, publications COBIT : la description des objectifs de gouvernance et de gestion par le propriétaire.
- The Open Group, norme IT4IT : l'architecture de référence du propriétaire.
- Wikipedia, « ISO/IEC 20000 » et « COBIT » : des résumés neutres qui renvoient aux propriétaires.

## Références

1. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
2. COBIT — Wikipedia — https://en.wikipedia.org/wiki/COBIT
3. ISACA — Wikipedia — https://en.wikipedia.org/wiki/ISACA
4. FitSM — Wikipedia — https://en.wikipedia.org/wiki/FitSM
5. The Open Group — Wikipedia — https://en.wikipedia.org/wiki/The_Open_Group
6. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
7. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
8. Capability Maturity Model Integration — Wikipedia — https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration
9. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
10. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
