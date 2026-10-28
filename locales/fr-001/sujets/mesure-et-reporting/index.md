# Mesure et reporting

**Une bonne mesure part des objectifs, utilise peu de mesures définies avec précision, associe chaque mesure à un garde-fou contre le détournement, montre des distributions et des tendances, et rend compte à des personnes qui peuvent agir ; les définitions figurent dans le livre complémentaire Service Management Metrics, et ce sujet explique comment bien s'en servir.**

## Pourquoi c'est important

Tout le monde en gestion des services a vu un rapport exact et inutile. Des pages de chiffres, une synthèse en feux tricolores et une note disant que tous les objectifs ont été atteints. Puis la plainte d'un client sur une semaine de mauvais service, et un responsable qui demande comment c'était possible. Le rapport mesurait ce qui était facile à compter, et l'objectif en est venu à représenter le résultat.

L'échec opposé est tout aussi réel. Une équipe se méfie des chiffres, parce qu'ils ont servi à juger injustement des gens, et refuse de mesurer quoi que ce soit. L'amélioration dépend alors de l'opinion, et la voix la plus forte décide.

La sortie consiste à traiter la mesure comme un métier doté d'un but : savoir si les services livrent des résultats et où s'améliorer. Les mesures sont choisies à partir d'objectifs, définies de façon que deux personnes les calculent de la même manière, lues comme des distributions et des tendances, et confrontées aux manières dont elles peuvent induire en erreur. Ce sujet décrit ce métier en termes généraux. Il ne définit pas les métriques individuelles : le livre complémentaire *Service Management Metrics* donne, pour chacune, une définition, un vecteur de détournement et un garde-fou, et c'est l'endroit où aller pour les chiffres eux-mêmes. Ce sujet se relie à l'analytique (Sujet 7.1 — Analytique pour la gestion des services), aux fondements des données (Sujet 7.2 — Fondements et gouvernance des données), aux niveaux de service (Sujet 3.7 — Gestion des niveaux de service) et à l'amélioration continue (Sujet 3.15 — Amélioration continue).

## Concepts clés

**Mesure, métrique, indicateur.** Une mesure est une quantité que vous pouvez observer, comme le nombre d'incidents. Une métrique est une mesure définie pour un but, avec un calcul, une source et une période. Un indicateur signale l'état de quelque chose de difficile à observer directement. Wikipedia décrit les indicateurs de performance en général, souvent abrégés en KPI pour key performance indicators. Les termes sont employés avec souplesse ; définissez ce que vous entendez.

**D'abord les objectifs.** Une mesure n'est utile que par rapport à un objectif. Écrivez l'objectif en mots simples (« les clients peuvent obtenir rapidement de l'aide quand quelque chose tombe en panne »), puis demandez quelle preuve montrerait s'il est atteint. Wikipedia décrit des approches comme le tableau de bord prospectif (balanced scorecard), qui relie des mesures à des objectifs sous plusieurs perspectives, et les objectifs et résultats clés (OKR), qui associent un objectif à des résultats mesurables. Quelle que soit celle que vous employez, traitez-les comme des aides à la conversation.

**Résultats, livrables et activité.** Les résultats sont des changements pour les clients et l'organisation ; les livrables sont ce que produit le service ; l'activité est l'effort. Ne mesurer que l'activité, comme les tickets clos, dit peu de chose de savoir si quelqu'un s'en porte mieux. Incluez des mesures de résultat et d'expérience. Voir le Sujet 1.1 — Gestion des services.

**Indicateurs avancés et retardés.** Les indicateurs retardés rapportent les résultats après coup, comme la satisfaction des clients. Les indicateurs avancés signalent ce qui est probable, comme l'ancienneté croissante du backlog. Wikipedia décrit les deux sous les indicateurs économiques. Un ensemble équilibré inclut les deux.

**Définitions précises.** Deux personnes doivent pouvoir calculer la mesure et obtenir la même réponse. Définissez la population, les événements de début et de fin, ce qui est exclu, la période et la source de données. « Temps de résolution » exige une définition du moment où l'horloge démarre, s'arrête et se suspend. Consignez les changements de définition avec des dates. Voir le Sujet 7.2 — Fondements et gouvernance des données.

**Moyennes, médianes et percentiles.** Les moyennes sont facilement faussées par quelques valeurs extrêmes. Les médianes et percentiles, décrits sur Wikipedia, montrent le cas typique et la traîne que subissent les utilisateurs malchanceux. Pour les temps de réponse et de résolution, rapportez des percentiles, comme la médiane et le 90e percentile.

**Distributions et tendances.** Un chiffre unique pour un mois masque la variation. Montrez la distribution, la tendance sur plusieurs périodes et la plage de variation ordinaire. Wikipedia décrit les cartes de contrôle et la maîtrise statistique des processus, qui séparent la variation normale des signaux indiquant que quelque chose a changé. Ne réagissez pas à chaque ondulation.

**Objectifs chiffrés et seuils.** Un objectif est un niveau visé ; un seuil est un niveau qui déclenche une action. Les objectifs devraient venir du besoin et de preuves de ce qui est réalisable. Un objectif fixé sans preuves invite au détournement ou au désespoir.

**Loi de Goodhart et détournement.** Quand une mesure devient un objectif, elle cesse d'être une bonne mesure. Wikipedia décrit la loi de Goodhart, et l'observation apparentée du spécialiste des sciences sociales Donald Campbell. Les gens s'adaptent à l'incitation. Les tickets sont clos trop tôt, les horloges suspendues, les catégories changées, les cas difficiles évités. L'article de Wikipedia sur les incitations perverses donne des exemples d'effets non voulus, parfois appelés effet cobra. Chaque métrique a un vecteur de détournement, et le livre *Service Management Metrics* le nomme avec un garde-fou.

**Garde-fous.** Une seconde mesure ou un contrôle qui protège contre le détournement de la première. Par exemple, associer la rapidité à la qualité (temps de résolution et taux de réouverture), le volume au résultat (tickets clos et satisfaction des utilisateurs) et les mesures automatisées à une revue par échantillon de cas réels. Sans garde-fous, une mesure dérive.

**Mesurer les personnes.** Les mesures de performance individuelle, comme les tickets par agent, sont particulièrement exposées au détournement et à l'injustice, parce que le travail diffère d'une personne à l'autre et que le système façonne ce que chacun peut accomplir. Ce guide et le livre complémentaire déconseillent de classer les individus. Utilisez des mesures au niveau de l'équipe pour comprendre le système.

**Étalonnage (benchmarking).** Se comparer à d'autres, comme le décrit Wikipedia, peut aider à fixer des attentes. Les comparaisons ne sont valables que si les définitions, le mélange de travail et le contexte correspondent. Méfiez-vous des comparaisons qui ignorent les différences.

**Reporting.** Les rapports existent pour éclairer des décisions. Connaissez le public et la décision. De bons rapports énoncent l'objectif, les mesures, la tendance, l'explication et l'action. Utilisez une conception visuelle qui rend le message clair. Wikipedia décrit la visualisation de données et d'informations et les tableaux de bord. Moins de vues, plus claires, servent mieux que beaucoup.

**Mesures de livraison.** Des programmes de recherche sur la livraison de logiciels, comme le programme DORA, utilisent quatre mesures souvent appelées les quatre métriques clés : fréquence de déploiement, délai de mise en œuvre des changements, taux d'échec des changements et temps de rétablissement du service. Ce sont des questions utiles sur un système de livraison. Ce ne sont pas des notes pour classer les équipes. Voir le Sujet 2.2 — Livraison continue.

**Mesures d'expérience.** Les enquêtes, les scores de satisfaction et le score de recommandation net (net promoter score), décrits sur Wikipedia, demandent aux utilisateurs ce qu'ils pensent. Elles ont leurs propres limites, comme qui répond et comment les questions sont formulées. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment.

**Transparence et confiance.** Les gens font confiance aux mesures qu'ils comprennent, ont aidé à définir et voient employer équitablement. Partagez les définitions, les données et la manière dont les résultats sont utilisés. Dites clairement que les mesures servent à apprendre.

**Comment les angles s'articulent.** La mesure est le lieu où l'analytique rencontre la gouvernance et l'amélioration. La pratique agile utilise quelques mesures pour vérifier si un changement a aidé. L'IA peut aider au calcul et à la rédaction, sous relecture, et a elle-même besoin de mesures de qualité. L'automatisation produit des mesures à partir des outils.

## Bonnes pratiques

1. **Partir des objectifs.** Écrivez à quoi sert le service et à quoi ressemble le succès, puis choisissez des mesures qui montrent si vous y parvenez. Abandonnez les mesures qui ne servent aucun objectif.
2. **Garder l'ensemble petit.** Choisissez une poignée de mesures par service, couvrant résultats, flux, qualité et expérience. Révisez l'ensemble au moins chaque année.
3. **Définir chaque métrique précisément.** Écrivez la définition, la source, le calcul, la période, les exclusions, le responsable et les limites connues. Utilisez les définitions du livre *Service Management Metrics* comme point de départ.
4. **Nommer le vecteur de détournement et ajouter un garde-fou.** Pour chacune, demandez comment elle pourrait être améliorée sans améliorer le service, et associez-la à un contrôle. Échantillonnez régulièrement des cas réels.
5. **Montrer distributions et tendances.** Rapportez médianes et percentiles, la plage de variation normale et plusieurs périodes. Expliquez les changements et distinguez le signal du bruit.
6. **Fixer les objectifs d'après des preuves.** Fondez-les sur l'historique, le besoin et la capacité, et convenez-en avec ceux qui doivent les atteindre. Revoyez-les quand les circonstances changent.
7. **Mesurer des systèmes, non des individus.** Utilisez des mesures au niveau de l'équipe et du service pour comprendre le système. Ne classez pas les gens à partir d'elles.
8. **Rendre compte pour décider.** Pour chaque rapport, nommez le public et la décision. Énoncez le constat, la confiance et l'action proposée. Retirez les rapports que personne n'utilise.
9. **Être ouvert.** Publiez définitions et résultats à ceux qui sont mesurés et invitez la contestation. Dites aux gens comment les données seront et ne seront pas utilisées.
10. **Réexaminer et retirer.** Vérifiez si chaque mesure a changé une décision. Retirez celles qui ne l'ont pas fait et corrigez celles qui ont été détournées.

## Questions à discuter avec votre équipe

**Lesquelles de nos mesures pourraient être atteintes sans que le moindre client s'en porte mieux ?**
Cela révèle les vecteurs de détournement. Attendez-vous à quelques exemples faciles. Demandez ensuite d'en choisir un et de convenir d'un garde-fou.

**Quel objectif sert chacune de nos mesures régulières, et qui décide de quelque chose grâce à elle ?**
Parcourez le rapport. Attendez-vous à plusieurs mesures sans objectif ni décision. Demandez ensuite d'en abandonner une.

**Comment définissons-nous « résolu » et « temps de réponse », et quelqu'un a-t-il changé la définition ?**
Demandez les définitions écrites. Attendez-vous à du désaccord. Demandez ensuite d'écrire une définition et d'en consigner l'historique.

**Que disent nos percentiles que nos moyennes masquent ?**
Calculez les deux pour une mesure. Attendez-vous à une longue traîne. Demandez ensuite de convenir de rapporter des percentiles pour elle.

**Comment les mesures servent-elles ici à juger des individus ou des équipes, et qu'est-ce que cela fait au comportement ?**
Discutez ouvertement. Attendez-vous à des histoires de détournement et de peur. Demandez ensuite de convenir qu'une mesure donnée servira à apprendre, et de le dire par écrit.

**Comment l'IA pourrait-elle nous aider à calculer ou à expliquer des mesures, et comment la vérifierions-nous ?**
L'IA peut calculer et rédiger des commentaires. Elle peut aussi expliquer une tendance par une cause inventée. Demandez qui vérifie. Demandez ensuite de répéter un calcul à la main et de comparer.

## En pratique : un exemple de gestion des services

Le service informatique d'un service ambulancier régional rend compte chaque mois à son conseil de 24 mesures. Le conseil demande pourquoi le rapport est au vert alors que les régulateurs se plaignent que le système de régulation assistée par ordinateur est lent en début de quart. La responsable informatique décide de reconstruire l'ensemble de mesures avec ceux qui l'utilisent.

Elle commence par les objectifs, convenus avec les chefs de la régulation : les régulateurs peuvent ouvrir et mettre à jour un appel sans délai ; les défauts sont corrigés rapidement ; et les changements ne perturbent pas l'exploitation. Elle choisit huit mesures, chacune définie dans une fiche d'une page fondée sur le livre complémentaire *Service Management Metrics*. Pour le « temps de transaction du régulateur », la définition énonce ce qui est chronométré, depuis où, et que le 95e percentile est rapporté par heure de la journée. L'ancienne mesure de disponibilité, mesurée par un ping depuis le centre de données toutes les cinq minutes, est conservée mais n'est pas montrée seule au conseil.

Pour chaque mesure, l'équipe écrit le vecteur de détournement et un garde-fou. « Incidents résolus dans l'objectif » est associé au taux de réouverture et à un échantillon mensuel de 30 incidents lu par un analyste senior ; l'équipe reconnaît que clore vite des incidents puis les rouvrir plus tard flatterait la première mesure. Le rapport au conseil montre des médianes et des 95e percentiles sur 12 mois avec la plage de variation normale, et une courte note sur ce qui a changé et ce que l'équipe fera.

Le premier rapport montre que le 95e percentile du temps de transaction double entre 6 h 30 et 7 h 30, et le conseil finance une étude de capacité. Une question de satisfaction, posée chaque mois à 40 régulateurs, ajoute une vue de l'expérience. La responsable informatique déclare aussi par écrit qu'aucune mesure ne servira à classer les analystes individuels.

Ce qui change : le conseil discute d'un vrai problème, et l'équipe cesse de se disputer sur les définitions. Ce qui reste difficile : la nouvelle mesure de transaction dépend d'un champ de journal que deux éditeurs enregistrent différemment, si bien que les données sont approximatives ; le taux de réponse à l'enquête est faible aux quarts de nuit ; et un cadre supérieur veut encore une note unique pour le conseil. La responsable informatique garde les huit mesures et montre au cadre comment une note unique masquerait le problème du matin.

## Quatre perspectives

### Équipes produit et de livraison

Intégrez la mesure au produit : événements, durées et indicateurs visibles par l'utilisateur. Utilisez les mesures de livraison pour trouver des contraintes, non pour comparer des équipes. Partagez les définitions avec l'exploitation.

### Équipes de service et d'exploitation

Sachez ce qui est mesuré et comment, et confrontez-le à votre propre sentiment sur le service. Signalez honnêtement les détournements et les mauvaises définitions. Utilisez les mesures pour voir où vous améliorer.

### Direction et gouvernance

Demandez des objectifs, des définitions, des distributions et des garde-fous, non une synthèse verte. N'utilisez pas les mesures pour classer les gens. Financez le travail sur les données et soyez prêts à entendre de mauvaises nouvelles.

### Clients et utilisateurs

On devrait vous demander ce qui compte, vous montrer des mesures qui reflètent votre expérience et vous dire ce qui change grâce à elles. Dites au fournisseur quand les chiffres ne correspondent pas à ce que vous voyez.

## Agilité, IA, automatisation et analytique

### Agilité

Utilisez quelques mesures pour vérifier chaque changement, avec une attente et une date, et examinez avec les parties prenantes. Retirez les mesures qui n'informent plus. Attention : ne laissez pas les mesures devenir des objectifs pour les équipes ; elles optimiseront le chiffre.

### IA

L'IA peut aider à calculer, à tracer des graphiques et à rédiger des commentaires, et les systèmes d'IA eux-mêmes ont besoin de mesures d'exactitude, d'erreurs et de coût. Attention : une explication par l'IA de la raison d'un changement de chiffre peut être inventée ; exigez qu'elle renvoie aux données et vérifiez. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez la collecte et le calcul, avec des définitions documentées et un journal des modifications. Attention : un rapport automatisé peut tourner des années après que sa définition s'est discrètement cassée ; validez régulièrement par rapport aux données brutes. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Utilisez des distributions, des méthodes de tendance et de variation, et l'échantillonnage de cas réels pour vérifier les métriques. Attention : toute mesure peut être détournée dès qu'elle compte ; associez les mesures et continuez de lire des cas. Voir le livre *Service Management Metrics* et le Sujet 7.1 — Analytique pour la gestion des services.

## Modes d'échec courants

- **Des rapports verts, des clients mécontents.** Les mesures manquent les résultats. Ajoutez des mesures de résultat et d'expérience et de l'échantillonnage.
- **Trop de mesures.** Personne ne peut les utiliser. Gardez-en quelques-unes liées aux objectifs.
- **Des définitions vagues.** Les chiffres ne se comparent pas. Définissez précisément et consignez les changements.
- **Des moyennes.** La traîne est masquée. Rapportez percentiles et distributions.
- **Des objectifs sans preuves.** Détournement ou désespoir s'ensuivent. Fondez les objectifs sur des données et convenez-en.
- **Classer les individus.** La confiance s'effondre et les chiffres sont détournés. Mesurez les systèmes et les équipes.
- **Pas de garde-fous.** Les mesures dérivent. Associez chacune à un contrôle et échantillonnez des cas.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Objectifs et sélection | Ce qui est facile à compter | Quelques mesures liées aux objectifs | Un petit ensemble lié aux objectifs pour chaque service | Ensemble examiné à l'aune des décisions | Mesures alignées entre services et partenaires |
| Définition et qualité | Informelle | Quelques définitions | Définitions précises avec responsables et historique des changements | Définitions validées par rapport aux données brutes | Définitions partagées et automatisées entre équipes |
| Défenses contre le détournement | Aucune | Conscience | Vecteur de détournement et garde-fou pour chaque métrique | Échantillons de cas réels examinés | Défenses intégrées au reporting et à la culture |
| Reporting et usage | Rapports statiques | Tableaux de bord | Rapports pour des décisions nommées avec tendances et distributions | Usage et impact suivis | Reporting intégré à la planification et à l'amélioration |

## Liste de contrôle

- [ ] Chaque mesure sert un objectif écrit.
- [ ] Chaque métrique a une définition précise, un responsable, une source et un historique des changements.
- [ ] Nous rapportons médianes et percentiles avec les tendances.
- [ ] Chaque métrique a un vecteur de détournement nommé et un garde-fou.
- [ ] Nous incluons des mesures de résultat et d'expérience.
- [ ] Nous ne classons pas les individus sur les mesures.
- [ ] Chaque rapport nomme son public et la décision qu'il soutient.
- [ ] Nous réexaminons et retirons les mesures qui ne changent plus de décisions.

## Invites d'IA

**Rédiger une définition de métrique pour revue.**

```text
Metric name: [name]. What we want to know: [goal in plain words]. Data we have: [fields and source].
Draft a definition with: purpose, population, start and end events, exclusions, calculation, period, source, owner (leave blank), and known limits. Then list two ways the metric could be gamed and one guardrail for each. Mark any assumption.
List what you are unsure of.
```

**Vérifier un rapport pour y chercher des problèmes courants.**

```text
Here is a monthly report with its measures and a short commentary: [paste].
List measures without a stated goal, uses of averages where percentiles would help, claims of cause not supported by the data, comparisons that may not be like for like, and anything that could be gamed. Quote the text for each. Do not rewrite the report.
List what you are unsure of.
```

**Expliquer un changement dans une mesure.**

```text
The measure [name] changed from [value] to [value]. Here are other facts from the same period: [paste, such as changes in tools, staffing, volumes, definitions].
List possible explanations as hypotheses, what data would test each, and which are not supported by the facts given. Do not state a cause as fact.
List what you are unsure of.
```

## Compétences d'IA

- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md) : à utiliser pour définir des mesures de livraison avec leurs risques.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md) : à utiliser pour choisir des indicateurs d'alerte précoce.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md) : à utiliser pour analyser la variation et l'incertitude.
- [survey-design](../../../../skills/survey-design/SKILL.md) : à utiliser pour concevoir des mesures d'expérience qui évitent les biais.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md) : à utiliser pour examiner l'évolution dans le temps.

## Sources principales

- Le livre complémentaire *Service Management Metrics* : définitions de métriques, vecteurs de détournement et garde-fous, auxquels ce sujet renvoie tout du long.
- Nicole Forsgren, Jez Humble et Gene Kim, *Accelerate* (2018), et DORA (dora.dev) : recherches sur les mesures de livraison.
- Donald J. Wheeler, *Understanding Variation* (1993) : un exposé clair du signal et du bruit dans les mesures.
- Wikipedia, « Goodhart's law » et « Performance indicator » : des aperçus des idées principales.

## Références

1. Performance indicator — Wikipedia — https://en.wikipedia.org/wiki/Performance_indicator
2. Balanced scorecard — Wikipedia — https://en.wikipedia.org/wiki/Balanced_scorecard
3. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
5. Campbell's law — Wikipedia — https://en.wikipedia.org/wiki/Campbell%27s_law
6. Perverse incentive — Wikipedia — https://en.wikipedia.org/wiki/Perverse_incentive
7. Economic indicator — Wikipedia — https://en.wikipedia.org/wiki/Economic_indicator
8. Control chart — Wikipedia — https://en.wikipedia.org/wiki/Control_chart
9. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
10. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
11. Data and information visualization — Wikipedia — https://en.wikipedia.org/wiki/Data_and_information_visualization
12. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
