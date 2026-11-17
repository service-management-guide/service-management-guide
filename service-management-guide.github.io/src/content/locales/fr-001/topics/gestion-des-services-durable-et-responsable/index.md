# Gestion des services durable et responsable

**La gestion responsable des services compte les coûts environnementaux, sociaux et éthiques de l'exploitation des services, y compris l'énergie du cloud et de l'IA, les déchets électroniques, l'accessibilité et le traitement équitable des personnes ; elle consiste à mesurer ce qu'on peut avec une incertitude énoncée, à choisir des options à moindre impact quand elles coûtent peu et à ne pas confondre une affirmation avec un résultat.**

## Pourquoi c'est important

Les services numériques paraissent sans poids. Une requête part, une réponse revient, et rien ne semble consommé. Derrière, il y a des centres de données qui tirent de l'électricité et de l'eau, des appareils faits de matériaux extraits, des réseaux qui tournent jour et nuit et, de plus en plus, de grandes charges d'IA qui consomment plus d'énergie que les tâches qu'elles remplacent. L'empreinte du secteur est grande et croissante, et on demande aux organisations, clients, régulateurs, personnel et conseils d'administration compris, quelle est la leur et ce qu'elles font à ce sujet.

L'environnement n'est qu'une partie de la question. Les services affectent aussi les gens. Un portail inaccessible exclut les utilisateurs en situation de handicap. Un modèle d'assistance qui suppose que tout le monde a un accès rapide à internet laisse de côté ceux qui n'en ont pas. Un outil d'IA entraîné sur des données étroites traite certains groupes moins bien. Un modèle d'astreinte qui épuise les ingénieurs est un coût social, supporté par les personnes qui exploitent le service. La gestion responsable des services s'interroge sur tout cela, non après coup, mais dans la manière dont les services sont conçus, achetés et exploités.

C'est un domaine où les affirmations devancent les preuves. Wikipedia décrit l'écoblanchiment (greenwashing), la pratique consistant à faire des affirmations trompeuses sur un bénéfice environnemental, et il est courant dans le marketing technologique. Les mesures sont souvent des estimations à large incertitude. Une économie à un endroit peut déplacer un coût ailleurs, et les gains d'efficacité peuvent être annulés par un usage accru, un motif que Wikipedia décrit comme l'effet rebond, ou paradoxe de Jevons. Ce sujet propose une approche pratique : connaître ses principaux impacts, mesurer honnêtement, agir là où l'effet est le plus grand et le coût le plus faible, et être prudent sur ce qu'on affirme. Il se rattache au matériel (Sujet 4.3 — Gestion des actifs matériels), à la finance (Sujet 4.5 — Gestion financière et FinOps), à la gouvernance de l'IA (Sujet 5.6 — Gouvernance, risques et conformité de l'IA) et à la gouvernance (Sujet 8.1 — Gouvernance, risques et conformité). Il ne donne aucun conseil juridique ; les obligations de reporting diffèrent selon les lieux.

## Concepts clés

**Durabilité.** Répondre aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs, selon la formule courante. Wikipedia décrit la durabilité comme ayant des dimensions environnementale, sociale et économique. En gestion des services, elle signifie exploiter les services de manière à ne pas imposer de coûts injustifiés à l'environnement, aux personnes ou aux options futures.

**Environnement, social et gouvernance (ESG).** Un cadre que les organisations et les investisseurs utilisent pour évaluer la performance extra-financière. Wikipedia décrit l'ESG. Les exigences de reporting évoluent vite dans de nombreuses juridictions. Votre organisation peut demander des données aux équipes de service. Vérifiez ce qui s'applique et tenez des enregistrements que vous pouvez défendre.

**Empreinte carbone et émissions.** Les émissions de gaz à effet de serre causées par une activité, généralement exprimées en équivalent dioxyde de carbone. Wikipedia décrit les empreintes carbone et les gaz à effet de serre. La comptabilité carbone distingue couramment les émissions de vos propres opérations, celles de l'énergie achetée et celles de la chaîne de valeur élargie, y compris la fabrication des appareils et l'usage des services des fournisseurs, souvent la plus grande part et la plus difficile à mesurer. Wikipedia décrit la comptabilité carbone et ces catégories.

**Impact intrinsèque et opérationnel.** L'impact intrinsèque (embodied) est ce qui est utilisé pour fabriquer et transporter un appareil ou construire une installation ; l'impact opérationnel est ce qui est utilisé pendant son fonctionnement. Pour les appareils des utilisateurs, l'impact intrinsèque est souvent la plus grande part des émissions sur la durée de vie. Wikipedia décrit l'énergie intrinsèque. Pour les centres de données, l'exploitation, surtout l'électricité, domine généralement. Comprendre lequel s'applique guide l'action. Voir le Sujet 4.3 — Gestion des actifs matériels.

**Énergie et centres de données.** Les centres de données consomment de l'électricité pour le calcul et pour le refroidissement. Wikipedia décrit les centres de données et le PUE (power usage effectiveness), un ratio entre l'énergie totale de l'installation et l'énergie utilisée par les équipements informatiques. Un PUE bas ne signifie pas de faibles émissions ; l'intensité carbone de l'électricité compte aussi, tout comme le taux d'utilisation des équipements. Les serveurs inactifs consomment quand même.

**Cloud et infrastructure partagée.** Les grands fournisseurs de cloud fonctionnent souvent plus efficacement que de petites salles sur site et peuvent acheter de l'énergie renouvelable à grande échelle. Ils facilitent aussi la surconsommation. Wikipedia décrit l'informatique en nuage en général. Demandez aux fournisseurs des données d'émissions par région et par service, et traitez leurs chiffres comme des estimations aux méthodes énoncées. Passer au cloud ne rend pas à lui seul un service plus vert.

**IA et énergie.** Entraîner et exécuter de grands modèles peut consommer beaucoup d'énergie et, dans certains cas, de l'eau pour le refroidissement. L'impact dépend de la taille du modèle, de la fréquence d'usage et du lieu d'exécution. Un usage fréquent de grands modèles pour des tâches qu'une méthode simple pourrait accomplir gaspille des ressources. Voir le Sujet 5.8 — Modèle opérationnel et compétences en IA. Traitez les chiffres publiés avec prudence, car les méthodes et les périmètres varient.

**Logiciels et exploitation efficaces.** Un code efficace, des ressources bien dimensionnées, l'arrêt des environnements inactifs, la planification du travail flexible aux moments où l'électricité est plus propre, et la réduction du stockage et des transferts de données inutiles abaissent tous l'impact, et coûtent généralement moins aussi. Wikipedia décrit l'informatique verte et la pratique de concevoir pour un moindre impact environnemental. Voir le Sujet 4.5 — Gestion financière et FinOps, où les économies de coût et d'émissions coïncident souvent.

**Déchets électroniques et économie circulaire.** Les appareils électroniques jetés contiennent des matériaux précieux et des dangers. Wikipedia décrit les déchets électroniques et l'approche d'économie circulaire, qui maintient les matériaux en usage par le réemploi, la réparation et le recyclage. Une durée de vie plus longue des appareils, la réparation, le reconditionnement et un recyclage responsable réduisent les déchets. Voir le Sujet 4.3 — Gestion des actifs matériels. Le mouvement du droit à la réparation, que décrit Wikipedia, plaide pour des appareils réparables.

**Pensée en cycle de vie.** Considérer toutes les étapes d'un produit ou d'un service, des matériaux à l'élimination. Wikipedia décrit l'analyse du cycle de vie. Elle protège contre le déplacement de l'impact d'une étape à une autre, comme économiser de l'énergie à l'usage avec un appareil qui demande plus de ressources pour être fabriqué.

**Effets rebond.** L'efficacité peut conduire à plus d'usage, ce qui annule le gain. Wikipedia le décrit sous effet rebond et paradoxe de Jevons. Si un calcul moins cher mène à beaucoup plus de calcul, l'impact total peut augmenter. Fixez des objectifs absolus autant que des objectifs d'efficacité.

**Accessibilité et inclusion.** Les services devraient être utilisables par des personnes aux capacités, appareils, langues et connectivités différents. Wikipedia décrit l'accessibilité, la conception inclusive et la fracture numérique. Des normes comme les Web Content Accessibility Guidelines fixent une base pour le contenu web. Des lois en de nombreux endroits exigent l'accessibilité. Associez des utilisateurs en situation de handicap à la conception et aux tests, et conservez des voies non numériques.

**Équité et éthique.** Les services et les systèmes d'IA devraient traiter les gens équitablement et être transparents sur leur fonctionnement. Wikipedia décrit le biais algorithmique et l'éthique de l'intelligence artificielle. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Personnes et charge de travail.** Les personnes qui exploitent les services sont des parties prenantes. Des astreintes soutenables, des horaires raisonnables, des conditions de travail sûres et un traitement équitable du personnel des fournisseurs font partie d'une pratique responsable. Voir le Sujet 2.10 — Gestion agile et apprentissage.

**Achats responsables.** Choisir les fournisseurs selon leurs pratiques environnementales et sociales autant que selon le prix. Wikipedia décrit les achats durables. Demandez des preuves, comme des données d'émissions publiées et des politiques de réparation, et vérifiez les affirmations. Voir le Sujet 3.14 — Gestion des fournisseurs.

**Honnêteté de la mesure.** De nombreux chiffres dans ce domaine sont des estimations. Énoncez la méthode, le périmètre et l'incertitude. Méfiez-vous des comparaisons qui utilisent des frontières différentes. Évitez des affirmations comme « neutre en carbone » sans base claire et vérifiable, car le récit que Wikipedia fait de l'écoblanchiment montre comment de telles affirmations trompent.

**Responsabilité d'entreprise.** Les organisations publient de plus en plus d'engagements. Wikipedia décrit la responsabilité sociale des entreprises. Les équipes de service apportent des données et font des choix qui déterminent si les engagements sont tenus.

**Comment les angles s'articulent.** La durabilité s'applique aux quatre. La pratique agile suggère de petites expériences mesurées pour réduire le gaspillage. L'IA est à la fois une source d'impact et un outil pour trouver des économies. L'automatisation peut arrêter les ressources inactives et planifier le travail. L'analytique mesure l'impact avec une incertitude énoncée.

## Bonnes pratiques

1. **Trouver vos plus grands impacts.** Estimez où se situent les plus grands effets environnementaux et sociaux de vos services : appareils, usage du cloud et des centres de données, charges d'IA, déplacements et personnes qui exploitent les services. Commencez là où le potentiel est le plus grand.
2. **Mesurer avec des méthodes énoncées.** Utilisez les données des fournisseurs et des facteurs de conversion standard, consignez le périmètre et les hypothèses, et montrez l'incertitude. Améliorez les données avec le temps.
3. **Réduire le gaspillage qui réduit aussi les coûts.** Arrêtez les environnements inactifs, dimensionnez correctement les ressources, supprimez les données inutiles et regroupez les systèmes sous-utilisés. Cela se rentabilise souvent.
4. **Prolonger la vie des appareils.** Réparez, mettez à niveau et réemployez avant de remplacer, et choisissez des équipements réparables et durables. Éliminez par des filières responsables avec effacement des données.
5. **Choisir où et quand exécuter.** Là où vous avez le choix, utilisez des régions et des moments à électricité plus propre, et demandez des données aux fournisseurs. Évitez les déplacements qui accroissent l'impact ailleurs.
6. **Utiliser l'IA avec proportion.** Faites correspondre la taille du modèle et la fréquence d'usage à la valeur. Utilisez des méthodes simples là où elles font aussi bien. Suivez le coût et, quand c'est disponible, l'énergie des charges d'IA.
7. **Concevoir et tester pour l'accessibilité.** Suivez les normes d'accessibilité, testez avec des utilisateurs aux besoins différents et gardez des voies alternatives. Incluez l'accessibilité dans la définition de « terminé ».
8. **Vérifier l'équité et l'éthique.** Examinez les services et les usages de l'IA pour détecter des effets injustes, testez entre groupes et donnez aux gens un moyen de contester les décisions.
9. **Prendre soin des personnes qui exploitent les services.** Gardez la charge de travail et les astreintes soutenables, et traitez équitablement le personnel des fournisseurs. Comptez l'épuisement comme un coût.
10. **Être honnête dans les affirmations.** Dites ce que vous avez mesuré, comment et ce que vous ignorez. Évitez les énoncés vagues ou invérifiables, et faites relire les affirmations avant publication.

## Questions à discuter avec votre équipe

**Où se situe le plus grand impact environnemental de nos services, et comment le savons-nous ?**
Regardez les appareils, le cloud, l'IA et les installations. Attendez-vous à un manque de données et à de fortes hypothèses. Demandez ensuite de choisir un domaine à estimer avec une méthode énoncée.

**Lesquels de nos systèmes ou environnements tournent en permanence et pourraient être arrêtés ou réduits ?**
Vérifiez développement et test. Attendez-vous à des environnements inactifs. Demandez ensuite de planifier des arrêts pour un environnement et de consigner l'économie.

**Combien de temps gardons-nous les appareils, et qu'est-ce qui nous empêche de les garder plus longtemps ou de les réparer ?**
Interrogez sur la politique et l'habitude. Attendez-vous à un renouvellement au calendrier. Demandez ensuite d'essayer une durée de vie plus longue pour un groupe.

**Qui ne peut pas utiliser nos services tels que conçus, et comment le savons-nous ?**
Pensez au handicap, à la langue, à la connectivité et à l'aisance. Attendez-vous à ce que certains groupes n'aient pas été testés. Demandez ensuite d'observer quelques utilisateurs de ces groupes.

**Quels usages de l'IA avons-nous adoptés là où une méthode plus simple suffirait, et que coûtent-ils en ressources ?**
Passez la liste en revue. Attendez-vous à ce que certains soient à la mode. Demandez ensuite de comparer un usage de l'IA avec une alternative simple sur la qualité et le coût.

**Quelles affirmations avons-nous faites, ou nous a-t-on demandé de faire, sur la durabilité, et pouvons-nous étayer chacune ?**
Rassemblez-les. Attendez-vous à certaines invérifiables. Demandez ensuite de revoir chacune avec les personnes qui détiennent les données.

## En pratique : un exemple de gestion des services

Le service informatique d'une bibliothèque nationale s'est vu demander par son ministère de tutelle de rendre compte de l'impact environnemental de ses services numériques et de proposer des réductions. Le service compte 400 agents, 6 000 appareils répartis dans 300 sites, un catalogue hébergé dans le cloud et un récent assistant de recherche à IA.

La responsable des services commence par estimer les principales sources. Pour les appareils, les enregistrements d'achats et d'actifs montrent 4 800 portables et postes fixes, d'un âge moyen de 4,1 ans. À partir de chiffres de cycle de vie publiés par les fabricants, qu'elle note comme des estimations, elle juge que l'impact intrinsèque des appareils achetés dans l'année est le poste unique le plus important. Pour le cloud, le tableau de bord d'émissions du fournisseur donne une estimation mensuelle par région, qu'elle consigne avec la méthode énoncée par le fournisseur. L'usage de l'assistant d'IA est faible comparé aux autres postes, mais croissant, et le fournisseur ne donne aucune donnée d'énergie.

Elle propose quatre actions. Allonger le cycle de remplacement des portables de quatre à cinq ans là où les données de santé le permettent, avec réparation des batteries et du stockage. Éteindre les environnements de développement et de test la nuit et le week-end, ce qui économise aussi environ un cinquième du coût du cloud. Déplacer une charge par lots vers une région à réseau électrique moins carboné, après avoir vérifié que la latence est acceptable. Et demander au fournisseur d'IA des données d'énergie et d'eau, en fixant une règle : l'assistant n'est utilisé que pour les questions ouvertes, avec une recherche simple pour les éléments connus.

Côté social, le service commande un test d'accessibilité du portail avec cinq agents et usagers qui utilisent des lecteurs d'écran et un qui utilise la commande vocale. Il constate que le formulaire de réservation ne peut pas être rempli au seul clavier, et l'équipe le corrige. Il revoit aussi le tableau d'astreinte, qui n'a parfois que deux ingénieurs couvrant 24 heures ; il en ajoute un troisième.

Ce qui change : le ministère reçoit un premier rapport avec méthodes et fourchettes, et le service a quatre actions suivies. Ce qui reste difficile : les chiffres intrinsèques reposent sur des moyennes de fabricants et ne peuvent pas être vérifiés ; le fournisseur n'a pas donné de données d'énergie ; une affirmation environnementale d'un projet de communiqué (« un service numérique neutre en carbone ») est retirée parce que le service ne peut pas l'étayer ; et le cycle de remplacement plus long augmente l'effort d'assistance pour les appareils plus anciens. La responsable rapporte les incertitudes et prévoit un réexamen du coût d'assistance.

## Quatre perspectives

### Équipes produit et de livraison

Concevez pour l'efficacité et l'accessibilité : pages légères, requêtes efficaces, ressources bien dimensionnées, prise en charge du clavier et des lecteurs d'écran. Choisissez des méthodes d'IA proportionnées au besoin et testez avec des utilisateurs variés.

### Équipes de service et d'exploitation

Arrêtez ce qui est inactif, réparez et réemployez les appareils, consignez les données d'énergie et de déchets et gardez les astreintes soutenables. Dites aux responsables où l'impact est le plus élevé.

### Direction et gouvernance

Fixez des objectifs avec des cibles absolues et une mesure honnête, et financez le travail. Faites relire les affirmations avant publication. Incluez les personnes, pas seulement le carbone, dans ce que vous comptez.

### Clients et utilisateurs

Vous devriez pouvoir utiliser les services quelles que soient vos capacités ou votre connexion, et attendre une information honnête sur leur impact. Dites aux fournisseurs ce qui ne marche pas pour vous et ce que vous aimeriez voir.

## Agilité, IA, automatisation et analytique

### Agilité

Essayez de petits changements, comme des arrêts planifiés ou une page plus légère, mesurez l'effet et gardez ce qui marche. Associez aux revues des utilisateurs aux besoins différents. Attention : ne lancez pas un grand « programme vert » sans mesures ; choisissez des actions fondées sur des preuves.

### IA

L'IA peut aider à trouver des ressources inactives, analyser des données d'usage et d'énergie et vérifier les conceptions pour détecter des problèmes d'accessibilité, sous relecture. L'IA a elle-même une empreinte environnementale et des risques de biais. Attention : ne prétendez pas que l'IA économise de l'énergie sans la comparer à l'énergie qu'elle utilise ; mesurez les deux. Voir le Sujet 5.8 — Modèle opérationnel et compétences en IA.

### Automatisation

Automatisez l'arrêt des environnements inactifs, la planification des charges flexibles et le nettoyage des données inutilisées, avec des responsables et des garde-fous. Attention : une suppression automatique peut effacer des données nécessaires ; utilisez des règles de conservation et une relecture. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Recueillez l'énergie, les estimations d'émissions, l'âge des appareils et les données de panne, l'usage du cloud et les résultats des tests d'accessibilité, avec la méthode et l'incertitude énoncées. Attention : les chiffres d'émissions varient beaucoup selon la méthode, et des améliorations ponctuelles peuvent être effacées par la croissance ; suivez les totaux absolus et les tendances. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Des affirmations sans preuve.** Des énoncés comme « neutre en carbone » ne peuvent pas être étayés. Énoncez méthodes et limites, et faites relire les affirmations.
- **Déplacer le problème.** L'impact passe à une autre étape ou à un autre fournisseur. Pensez en cycles de vie.
- **L'efficacité sans limites.** Les économies sont compensées par plus d'usage. Fixez des objectifs absolus.
- **L'accessibilité en réflexion après coup.** Certains utilisateurs sont exclus. Intégrez-la à la construction et aux tests.
- **Une IA surdimensionnée.** De grands modèles font des tâches simples. Faites correspondre la méthode au besoin.
- **Ignorer ceux qui exploitent les services.** Épuisement et rotation augmentent. Traitez la charge de travail comme une part de la durabilité.
- **Pas de données.** Les décisions reposent sur des conjectures. Recueillez ce que vous pouvez, avec l'incertitude.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Mesure | Aucune | Estimations grossières | Principaux impacts estimés avec des méthodes énoncées | Données améliorées et suivies par rapport aux objectifs | Données d'impact intégrées au coût, à la planification et aux fournisseurs |
| Action | Au cas par cas | Quelques économies | Pratiques standard : arrêt, bon dimensionnement, durée de vie des appareils | Actions suivies et examinées | Impact intégré à la conception, aux achats et à l'exploitation |
| Inclusion et éthique | Non considérées | Conscience | Revues d'accessibilité et d'équité standard | Résultats mesurés entre groupes | Conception inclusive et équité intégrées entre services |
| Honnêteté | Affirmations non vérifiées | Conscience | Affirmations relues au regard des preuves | Affirmations auditées | Reporting transparent avec assurance indépendante |

## Liste de contrôle

- [ ] Nous avons estimé nos principaux impacts environnementaux avec des méthodes énoncées.
- [ ] Nous arrêtons ou réduisons les environnements inactifs.
- [ ] Nous réparons, réemployons et prolongeons la vie des appareils, et éliminons de façon responsable.
- [ ] Nous demandons aux fournisseurs des données d'émissions et d'énergie et consignons leurs méthodes.
- [ ] Les usages de l'IA sont proportionnés, avec le coût et, si possible, l'énergie consignés.
- [ ] Les services sont testés pour l'accessibilité avec de vrais utilisateurs.
- [ ] Les astreintes et la charge de travail sont soutenables.
- [ ] Les affirmations de durabilité sont relues au regard des preuves avant publication.

## Invites d'IA

**Structurer une estimation d'impact.**

```text
Here are our facts: number and age of devices [paste], cloud usage by region [paste], AI usage [paste], and any supplier emissions data [paste].
Draft a table of impact sources, the data we have for each, the missing data, the method we could use, and the main uncertainty. Do not invent emission factors or figures.
List what you are unsure of.
```

**Examiner une affirmation de durabilité.**

```text
Here is a draft statement about our service's environmental impact: [paste]. Here is the evidence we have: [paste].
For each claim, say whether the evidence supports it, partly supports it, or does not, quoting the text, and list what is missing. Do not rewrite the claim.
List what you are unsure of.
```

**Planifier un test d'accessibilité.**

```text
Our service: [describe]. Our users: [groups]. Known issues: [list].
Draft a test plan with tasks real users would attempt, the assistive technologies and devices to include, what to record, and how to report results. Do not claim any standard is met.
List what you are unsure of.
```

## Compétences d'IA

- [roi-analysis](../../../../skills/roi-analysis/SKILL.md) : à utiliser pour peser le coût et le bénéfice des options qui réduisent l'impact.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md) : à utiliser pour identifier qui est affecté et qui manque.
- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques environnementaux et sociaux avec leurs propriétaires.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md) : à utiliser pour dimensionner correctement les ressources.
- [vendor-management](../../../../skills/vendor-management/SKILL.md) : à utiliser pour demander aux fournisseurs des données et des engagements.

## Sources principales

- La Green Software Foundation (greensoftware.foundation) : orientations et normes communautaires sur le logiciel et le carbone.
- W3C, Web Content Accessibility Guidelines (WCAG) : la norme internationale du contenu web accessible.
- Wikipedia, « Sustainability » et « Greenwashing » : des aperçus du domaine et du principal danger des affirmations.
- Wikipedia, « Electronic waste » et « Circular economy » : contexte sur les appareils et les matériaux.

## Références

1. Sustainability — Wikipedia — https://en.wikipedia.org/wiki/Sustainability
2. Environmental, social, and governance — Wikipedia — https://en.wikipedia.org/wiki/Environmental,_social,_and_governance
3. Carbon footprint — Wikipedia — https://en.wikipedia.org/wiki/Carbon_footprint
4. Carbon accounting — Wikipedia — https://en.wikipedia.org/wiki/Carbon_accounting
5. Green computing — Wikipedia — https://en.wikipedia.org/wiki/Green_computing
6. Data center — Wikipedia — https://en.wikipedia.org/wiki/Data_center
7. Power usage effectiveness — Wikipedia — https://en.wikipedia.org/wiki/Power_usage_effectiveness
8. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
9. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
10. Greenwashing — Wikipedia — https://en.wikipedia.org/wiki/Greenwashing
11. Rebound effect (conservation) — Wikipedia — https://en.wikipedia.org/wiki/Rebound_effect_(conservation)
12. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
