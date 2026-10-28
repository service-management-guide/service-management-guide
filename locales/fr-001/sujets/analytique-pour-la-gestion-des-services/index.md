# Analytique pour la gestion des services

**L'analytique transforme les données de service en réponses à des questions : ce qui s'est passé, pourquoi, ce qui va se passer et que faire ; elle inspire confiance lorsque chaque analyse part d'une question nommée, énonce ses données et ses limites, sépare corrélation et cause, et débouche sur une décision que quelqu'un peut prendre.**

## Pourquoi c'est important

Les équipes de service génèrent beaucoup de données : tickets, journaux, métriques, enquêtes, fiches de changements, rapports de coûts. La plupart restent inutilisées, ou sont résumées dans des tableaux de bord que personne ne sait relier à une décision. Les rapports décrivent l'activité, comme les tickets clos, et disent peu de chose de savoir si les clients s'en portent mieux.

L'analytique est la discipline qui tire des réponses des données. Wikipedia la décrit comme la découverte, l'interprétation et la communication de motifs significatifs dans les données. En gestion des services, elle peut montrer d'où vient la demande, pourquoi les incidents reviennent, où le travail attend, quels changements sont risqués et si une amélioration a aidé. Elle peut aussi induire en erreur. Un graphique peut paraître faire autorité alors qu'il repose sur un échantillon biaisé, une coïncidence ou une définition qui a discrètement changé.

Ce sujet est le point d'entrée de la Partie 7. Il décrit les types d'analytique, les étapes d'une analyse rigoureuse et les pièges qui prennent même les personnes soigneuses. Il laisse les définitions de métriques au livre complémentaire *Service Management Metrics* et renvoie aux sujets suivants pour les fondements (Sujet 7.2 — Fondements et gouvernance des données), la mesure (Sujet 7.3 — Mesure et reporting), l'observabilité (Sujet 7.4 — Observabilité et télémétrie), la prédiction (Sujet 7.5 — Analytique prédictive et prévision), le flux (Sujet 7.6 — Analytique des processus et des flux de valeur) et l'expérience (Sujet 7.7 — Analytique de l'expérience et du sentiment). La description de la version la plus récente d'ITIL par son propriétaire insiste sur des résultats mesurables (voir le Sujet 1.3 — ITIL 5), qui dépendent d'une analytique bien faite.

## Concepts clés

**Quatre types d'analytique.** Un cadrage courant distingue :

| Type | Question | Exemple en travail de service |
|---|---|---|
| Descriptive | Que s'est-il passé ? | Incidents par mois et par service |
| Diagnostique | Pourquoi cela s'est-il produit ? | Ce que les incidents répétés ont en commun |
| Prédictive | Que va-t-il probablement se passer ? | Prévision du volume de tickets du trimestre prochain |
| Prescriptive | Que devrions-nous faire ? | Effectifs qui atteignent un objectif au moindre coût |

Wikipedia décrit l'analytique descriptive, prédictive et prescriptive. Chacune s'appuie sur la précédente. La plupart des équipes de service tireront le plus de valeur de bien faire les deux premières.

**Partir d'une question.** Une analyse commence par une décision que quelqu'un doit prendre, comme ajouter du personnel à l'équipe du soir, et la transforme en une question à laquelle les données peuvent répondre. Sans question, l'analyse devient une chasse à quelque chose d'intéressant, et l'article de Wikipedia sur le dragage de données explique comment cela trouve des motifs qui ne sont que hasard.

**Données.** Ce que vous avez, d'où cela vient, comment cela a été enregistré et ce que cela laisse de côté. Les données de tickets montrent ce que les gens ont choisi de signaler et comment les agents l'ont catégorisé, non tout ce qui s'est passé. Voir le Sujet 7.2 — Fondements et gouvernance des données. Wikipedia décrit la qualité des données comme l'aptitude à l'usage.

**Statistiques descriptives.** Des synthèses comme les comptages, médianes, percentiles et dispersion. Wikipedia décrit les statistiques descriptives. Pour les données de service, les médianes et percentiles sont généralement plus utiles que les moyennes, qui masquent les longues traînes, et les valeurs aberrantes, décrites sur Wikipedia, méritent un examen plutôt qu'une suppression automatique.

**Analyse exploratoire.** Regarder les données pour en voir la forme, la qualité et les surprises avant de tester des idées. Wikipedia décrit l'analyse exploratoire de données. Elle prévient des erreurs bêtes, comme traiter une valeur manquante comme un zéro.

**Échantillonnage et biais.** La plupart des analyses utilisent un échantillon, et les échantillons peuvent induire en erreur. Wikipedia décrit l'échantillonnage et le biais de sélection. Les réponses aux enquêtes viennent de ceux qui répondent, et les tickets de support viennent de ceux qui vous contactent. Le biais du survivant, également décrit là, apparaît quand on n'étudie que ce qui reste, comme les clients qui sont restés.

**Corrélation et cause.** Deux choses qui évoluent ensemble ne signifient pas que l'une cause l'autre. Wikipedia décrit le problème sous « correlation does not imply causation » et la confusion, où un troisième facteur pilote les deux. Le volume de tickets et le nombre de serveurs peuvent monter ensemble parce que l'activité a grandi. Les affirmations causales exigent plus qu'un graphique : une comparaison contrôlée, ou un raisonnement soigné sur les alternatives. Wikipedia décrit l'inférence causale et les tests A/B comme des moyens d'apprendre sur la cause.

**Paradoxes et pièges.** Le paradoxe de Simpson, décrit sur Wikipedia, est un cas où une tendance qui apparaît dans plusieurs groupes s'inverse quand les groupes sont combinés. L'erreur du taux de base, également décrite là, consiste à ignorer la fréquence d'une chose, de sorte qu'un bon détecteur d'un événement rare produit surtout de fausses alarmes. Connaître ces pièges est une défense.

**Signification statistique et incertitude.** Un résultat est « significatif » quand il est peu probable qu'il soit dû au seul hasard sous des hypothèses énoncées. Wikipedia décrit les tests d'hypothèses et les intervalles de confiance. La signification n'est pas l'importance : un effet minuscule peut être significatif dans un grand jeu de données, et un grand effet peut être incertain dans un petit. Montrez des fourchettes, pas seulement des chiffres uniques.

**Visualisation.** Les graphiques aident à voir les motifs, et les mauvais graphiques induisent en erreur. Wikipedia décrit la visualisation de données et d'informations. Choisissez des formes adaptées à la question, étiquetez axes et unités, commencez les échelles honnêtement et montrez l'incertitude. Les tableaux de bord, décrits sur Wikipedia comme des affichages visuels d'informations clés, devraient servir des décisions et être peu nombreux.

**Séries temporelles.** Une grande partie des données de service est enregistrée dans le temps, avec des tendances, des motifs saisonniers et des ruptures soudaines. Wikipedia décrit l'analyse de séries temporelles. Comparez ce qui est comparable : ce lundi avec d'autres lundis. Voir le Sujet 7.5 — Analytique prédictive et prévision.

**Modèles et apprentissage automatique.** Les modèles statistiques et d'apprentissage automatique peuvent prédire, classer et regrouper. Ils ont besoin de données d'entraînement et de test, de validation et d'une surveillance de la dérive. Voir le Sujet 5.1 — L'IA dans la gestion des services. Un modèle n'est pas une source de vérité ; c'est un outil avec des hypothèses.

**Loi de Goodhart.** Quand une mesure devient un objectif, elle cesse d'être une bonne mesure. Wikipedia décrit la loi. Une analytique utilisée pour juger des personnes ou des équipes invite à des changements de comportement qui améliorent le chiffre et non le résultat. Utilisez les mesures pour apprendre, associez-les à d'autres et dites comment chacune pourrait être détournée. Voir le livre *Service Management Metrics*.

**Éthique et vie privée.** L'analytique sur des personnes, comme la productivité des agents ou le comportement des utilisateurs, soulève des questions de consentement, d'équité et de proportion. Wikipedia décrit ailleurs la vie privée et le biais algorithmique. Ne collectez que ce dont vous avez besoin, agrégez lorsque vous le pouvez et soyez ouvert sur ce que vous analysez et pourquoi. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Communication.** Une analyse que personne ne comprend ne change rien. Énoncez la question, la réponse, la confiance, les limites et la décision recommandée en mots simples, avec un graphique là où il aide.

**Comment les angles s'articulent.** L'analytique est le quatrième angle, et elle sert les trois autres. La pratique agile s'en sert pour vérifier si un changement a aidé. L'IA utilise les données comme carburant et peut accélérer l'analyse, sous relecture. L'automatisation produit des données et agit sur elles. L'analytique a aussi besoin des trois premiers angles pour transformer l'intuition en changement.

## Bonnes pratiques

1. **Partir d'une décision.** Écrivez qui décidera quoi, pour quand, et quelle preuve ferait changer d'avis. Façonnez l'analyse en conséquence.
2. **Transformer la décision en question précise.** Définissez les termes, comme « résolu » ou « incident répété », la population et la période avant de toucher aux données.
3. **Connaître ses données.** Documentez les sources, la façon dont les enregistrements sont créés, les lacunes connues et les changements de définitions dans le temps. Vérifiez un échantillon par rapport à la réalité.
4. **Regarder avant de tester.** Explorez d'abord les distributions, les valeurs manquantes et les valeurs aberrantes. Corrigez les erreurs et consignez ce que vous avez changé.
5. **Utiliser des synthèses robustes.** Rapportez médianes et percentiles avec les effectifs et montrez la dispersion. Comparez ce qui est comparable, comme le même jour de la semaine ou la même saison.
6. **Se méfier des biais.** Demandez qui manque dans les données et pourquoi. Énoncez les limites de l'échantillon quand vous présentez les résultats.
7. **Ne pas revendiquer de cause sans fondement.** Dites « associé à » sauf si vous avez une comparaison ou un argument solide. Listez les explications alternatives et dites comment vous les avez vérifiées.
8. **Montrer l'incertitude.** Donnez des fourchettes et notez les tailles d'échantillon. Évitez la fausse précision.
9. **Concevoir les visuels pour le lecteur.** Gardez des graphiques simples, honnêtes et étiquetés. Préférez quelques tableaux de bord significatifs à de nombreux inutilisés.
10. **Boucler la boucle.** Consignez la décision prise et le résultat, et vérifiez plus tard si l'analyse a aidé. Retirez les rapports que personne n'utilise.

## Questions à discuter avec votre équipe

**Quelle est la dernière décision que nous avons prise avec des données, et que nous disaient réellement les données ?**
Demandez l'exemple. Attendez-vous à ce que les données aient soutenu une décision déjà prise. Demandez ensuite de choisir une décision à venir et d'écrire d'abord la question.

**Lesquels de nos rapports personne ne lit ni n'exploite ?**
Vérifiez l'usage. Attendez-vous à plusieurs. Demandez ensuite d'en retirer un et de voir s'il manque à quelqu'un.

**Où nos données pourraient-elles être biaisées ou incomplètes, et qui manque ?**
Pensez aux tickets, aux enquêtes et aux journaux. Attendez-vous à ce que de nombreux utilisateurs ne nous contactent jamais. Demandez ensuite de choisir une source et d'ajouter un contrôle à partir d'une autre.

**Qu'est-ce qui nous convaincrait qu'une amélioration récente a vraiment fonctionné ?**
Discutez des preuves. Attendez-vous à une confiance dans les graphiques avant-après. Demandez ensuite de lister ce qui d'autre a changé en même temps.

**Lesquels de nos chiffres pourraient être détournés, et comment le remarquerions-nous ?**
Choisissez une mesure qui compte pour l'évaluation de quelqu'un. Attendez-vous à des réponses créatives. Demandez ensuite de convenir d'un contrôle par échantillon ou d'une mesure associée.

**Comment l'IA pourrait-elle nous aider à analyser nos données, et comment vérifierions-nous son travail ?**
L'IA peut résumer des données, ébaucher des graphiques et suggérer des motifs. Elle peut aussi énoncer des constats inventés. Demandez qui vérifie et comment. Demandez ensuite de répéter à la main une analyse faite par l'IA sur un petit jeu de données.

## En pratique : un exemple de gestion des services

Le centre de services informatique d'une administration fiscale nationale traite 25 000 contacts par mois. Un cadre supérieur a un tableau de bord montrant que le délai moyen de résolution a augmenté de 20 % en un an, et demande à la responsable du centre de « le faire redescendre ». La responsable décide d'analyser avant de réagir.

Elle commence par la question : le temps pour résoudre un contact typique a-t-il augmenté, et si oui, pour quels types de contacts ? Elle vérifie d'abord les données. Au printemps, l'outil de tickets a changé la manière d'enregistrer « résolu », de sorte que les tickets sont résolus quand l'agent les marque et non quand l'utilisateur confirme. Elle constate aussi qu'une nouvelle catégorie de demandes complexes d'« accès au système de dossiers », lancée à l'automne, représente 12 % des contacts et prend cinq fois plus de temps que le reste.

Elle recalcule avec des médianes et des 90e percentiles, ventilés par catégorie. Pour les anciennes catégories, le délai médian de résolution est inchangé ; le 90e percentile a légèrement augmenté. La moyenne globale a augmenté principalement à cause de la nouvelle catégorie et du changement de définition. Elle note que les données ne peuvent pas montrer pourquoi certaines demandes d'accès prennent du temps, seulement qu'elles en prennent.

Elle présente un résumé d'une page : la moyenne a augmenté à cause d'un nouveau type de travail et d'un changement de définition ; la plupart des contacts sont aussi rapides qu'avant ; la longue traîne a un peu grossi, et les demandes complexes méritent un examen. Elle évite de dire que la nouvelle catégorie a « causé » la hausse de la longue traîne, puisque des changements de personnel ont aussi eu lieu. Elle propose deux actions : une étude des demandes d'accès sur un échantillon de 40 tickets et un rapport mensuel par catégorie avec percentiles.

Ce qui change : le cadre cesse de demander une réduction générale et demande l'étude des demandes d'accès. Ce qui reste difficile : le changement de définition ne peut pas être entièrement défait, si bien que les comparaisons de part et d'autre de la rupture restent approximatives ; l'échantillon de 40 tickets a été lu par une seule personne et est exposé aux biais ; et le cadre préfère encore un chiffre unique. La responsable garde les deux vues et explique chaque fois les limites.

## Quatre perspectives

### Équipes produit et de livraison

Utilisez les données pour tester si les changements ont aidé et instrumentez votre produit pour que des données utiles existent. Partagez définitions et limites avec ceux qui utilisent vos données, et évitez de trop revendiquer à partir d'un seul graphique.

### Équipes de service et d'exploitation

Sachez d'où viennent vos données et ce qu'elles manquent. Rapportez médianes et percentiles avec les effectifs et examinez les longues traînes. Dites aux analystes quand un outil ou une catégorie change.

### Direction et gouvernance

Demandez la question, les données, les limites et la décision, pas seulement un graphique. N'utilisez pas des mesures isolées pour juger des personnes. Financez la qualité des données et les compétences analytiques.

### Clients et utilisateurs

Vous êtes dans les données, et souvent absent d'elles. On devrait vous demander ce qui compte pour vous, et le fournisseur devrait dire comment vos informations sont utilisées. Dites au fournisseur quand les chiffres ne correspondent pas à votre expérience.

## Agilité, IA, automatisation et analytique

### Agilité

Utilisez l'analytique comme outil de rétroaction : fixez une attente, faites un petit changement, vérifiez les données et décidez. Partagez les résultats avec les parties prenantes. Attention : n'attendez pas des données parfaites pour agir sur une petite expérience ; ne traitez pas non plus un court graphique avant-après comme une preuve.

### IA

L'IA peut nettoyer des données, rédiger des requêtes et des graphiques, résumer des résultats et suggérer des motifs, avec un responsable et des vérifications. Attention : une analyse générée par l'IA peut énoncer des constats que les données n'étayent pas, ou employer la mauvaise méthode ; exigez qu'elle montre ses calculs et répétez un échantillon à la main. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez la collecte de données, le nettoyage et les rapports courants, avec documentation de chaque étape. Attention : les rapports automatisés peuvent continuer après que leur sens a changé ; examinez régulièrement définitions et sources. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Ce sujet est l'angle lui-même : questions, données, méthodes, incertitude et décisions. Attention : ne laissez pas le volume de données tenir lieu de compréhension ; mesurez si les analyses ont changé des décisions. Voir le livre *Service Management Metrics* pour les définitions de métriques et les garde-fous.

## Modes d'échec courants

- **Des rapports sans décisions.** Des tableaux de bord que personne n'utilise. Partez d'une décision et retirez les rapports inutilisés.
- **Des moyennes qui masquent.** Une traîne d'expériences médiocres passe inaperçue. Utilisez médianes, percentiles et ventilations.
- **Des définitions inconnues.** Un changement de sens d'un champ casse les tendances. Documentez et surveillez les définitions.
- **Des échantillons biaisés.** Seuls ceux qui vous contactent sont comptés. Dites qui manque.
- **La cause tirée d'une corrélation.** Un graphique est pris pour une preuve. Listez les explications alternatives et testez.
- **Une fausse précision.** Des chiffres sont montrés sans incertitude. Montrez fourchettes et tailles d'échantillon.
- **Des objectifs qui déforment.** Les gens optimisent le chiffre. Associez les mesures et échantillonnez des cas réels.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Questions et décisions | Rapports par habitude | Quelques questions définies | Analyses qui partent de décisions nommées | Impact sur les décisions suivi | Analytique intégrée à la planification entre services |
| Compréhension des données | Inconnue | Principales sources connues | Sources, définitions et lacunes documentées | Qualité des données mesurée et améliorée | Données gouvernées et partagées entre équipes et partenaires |
| Méthode | Moyennes et graphiques | Médianes et ventilations de base | Méthodes standard, incertitude et contrôles de biais | Méthodes examinées et relues par les pairs | Méthodes avancées avec supervision et validation |
| Communication | Tableaux de bord | Synthèses | Constats en langage clair avec leurs limites | Constats testés auprès des utilisateurs | Intuitions intégrées aux décisions quotidiennes |

## Liste de contrôle

- [ ] Chaque analyse part d'une décision nommée et d'une question précise.
- [ ] Nous documentons nos sources de données, définitions et lacunes connues.
- [ ] Nous rapportons médianes et percentiles avec les effectifs.
- [ ] Nous disons qui manque dans les données et les limites des échantillons.
- [ ] Nous séparons corrélation et cause et listons les explications alternatives.
- [ ] Nous montrons l'incertitude et évitons la fausse précision.
- [ ] Nous associons les mesures qui pourraient être détournées et échantillonnons des cas réels.
- [ ] Nous suivons les décisions prises et examinons si l'analyse a aidé.

## Invites d'IA

**Transformer une décision en question.**

```text
The decision we need to make: [describe]. Who decides: [role]. Data we have: [list sources and fields].
Write three precise analytical questions that would inform the decision, with definitions of key terms, the population, and the period. List what data we lack for each. Do not propose answers.
List what you are unsure of.
```

**Vérifier un résumé de résultats pour y chercher des pièges.**

```text
Here is a summary of an analysis with the data used: [paste].
List possible problems: sample bias, missing groups, changes in definitions, outliers, confounding factors, and claims of cause not supported by the data. Quote the text for each. Do not redo the analysis.
List what you are unsure of.
```

**Décrire un jeu de données avant l'analyse.**

```text
Here is a sample of rows from our dataset with field names, identifiers removed: [paste].
List each field, its apparent type, missing values, odd values, and questions to ask about how it is recorded. Do not draw conclusions about the business.
List what you are unsure of.
```

## Compétences d'IA

- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md) : à utiliser pour choisir et appliquer des méthodes statistiques rigoureuses.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md) : à utiliser pour examiner l'évolution dans le temps.
- [data-quality](../../../../skills/data-quality/SKILL.md) : à utiliser pour vérifier et améliorer les données derrière une analyse.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md) : à utiliser pour définir des mesures de livraison avec leurs risques.
- [survey-design](../../../../skills/survey-design/SKILL.md) : à utiliser pour concevoir des enquêtes qui évitent les biais courants.

## Sources principales

- Edward Tufte, *The Visual Display of Quantitative Information* (1983) : un classique sur les graphiques honnêtes.
- Darrell Huff, *How to Lie with Statistics* (1954) : un récit bref et lisible des tours statistiques courants.
- Le livre complémentaire *Service Management Metrics* : définitions de métriques, vecteurs de détournement et garde-fous.
- Wikipedia, « Analytics » et « Data analysis » : des aperçus du domaine.

## Références

1. Analytics — Wikipedia — https://en.wikipedia.org/wiki/Analytics
2. Data analysis — Wikipedia — https://en.wikipedia.org/wiki/Data_analysis
3. Descriptive statistics — Wikipedia — https://en.wikipedia.org/wiki/Descriptive_statistics
4. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
5. Prescriptive analytics — Wikipedia — https://en.wikipedia.org/wiki/Prescriptive_analytics
6. Correlation does not imply causation — Wikipedia — https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation
7. Simpson's paradox — Wikipedia — https://en.wikipedia.org/wiki/Simpson%27s_paradox
8. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
9. Data dredging — Wikipedia — https://en.wikipedia.org/wiki/Data_dredging
10. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
12. Exploratory data analysis — Wikipedia — https://en.wikipedia.org/wiki/Exploratory_data_analysis
