# AIOps

**L'AIOps applique l'apprentissage automatique aux données d'exploitation pour réduire le bruit des alertes, trouver des anomalies, corréler des événements et suggérer des causes ; elle est rentable lorsqu'elle est testée sur des incidents passés, qu'elle reste explicable à ceux qui interviennent et qu'elle est traitée comme un assistant du personnel d'astreinte, non comme un remplacement du jugement.**

## Pourquoi c'est important

Les équipes d'exploitation se noient dans les données. Un service moderne émet des millions de lignes de journal, des milliers de métriques et des centaines d'alertes chaque jour. Les gens ne peuvent pas tout lire ; ils fixent donc des seuils et des règles pour décider quoi regarder. Les règles grossissent, interagissent et se dégradent. La plupart des alertes s'avèrent du bruit, et de vrais problèmes se cachent parmi elles.

L'AIOps, terme forgé par le cabinet d'analystes Gartner au milieu des années 2010 à partir d'« algorithmic IT operations » et désormais généralement lu comme « AI for IT operations » (IA pour l'exploitation informatique), promet d'aider. Elle utilise l'apprentissage automatique pour apprendre ce qui est normal, remarquer quand quelque chose ne l'est pas, regrouper des alertes liées en un seul événement et suggérer où la cause pourrait se trouver. Wikipedia décrit l'AIOps comme l'application de l'intelligence artificielle pour améliorer l'exploitation informatique. Les éditeurs la présentent en termes forts. Les praticiens rapportent de vrais gains dans certains usages, comme la réduction du bruit, et des déceptions dans d'autres, comme le diagnostic entièrement automatique.

Pour la gestion des services, la question est pratique : quelles parties de l'AIOps apportent une valeur fiable, comment les vérifier et comment garder les gens aux commandes ? Ce sujet décrit les principales techniques, leurs modes d'échec typiques et un chemin raisonnable d'adoption. Il s'appuie sur la surveillance (Sujet 3.10 — Surveillance et gestion des événements) et l'observabilité (Sujet 7.4 — Observabilité et télémétrie), et recoupe la gestion des incidents (Sujet 3.2 — Gestion des incidents) et l'automatisation des runbooks (Sujet 6.6 — Automatisation des runbooks et remédiation automatique).

## Concepts clés

**AIOps.** L'usage de techniques d'IA, principalement l'apprentissage automatique et les statistiques, sur les données d'exploitation pour soutenir des tâches comme la détection d'anomalies, la corrélation d'événements, la suggestion de causes racines et la prédiction. C'est un ensemble de techniques, non un produit unique, et les capacités varient beaucoup.

**Détection d'anomalies.** Trouver des points de données ou des motifs qui diffèrent de ce qui est attendu. Wikipedia décrit la détection d'anomalies et ses méthodes. En exploitation, un modèle peut apprendre le profil normal quotidien et hebdomadaire des requêtes et signaler les écarts. Le normal n'est pas constant : la saisonnalité, décrite sur Wikipedia, fait qu'un lundi matin ne ressemble pas à un dimanche soir. Les bons détecteurs en tiennent compte.

**Séries temporelles.** Des données enregistrées dans le temps, comme les temps de réponse ou les nombres d'erreurs. Wikipedia décrit l'analyse de séries temporelles. La plupart des métriques d'exploitation sont des séries temporelles, et les techniques d'AIOps s'appuient sur des méthodes pour les modéliser et les prévoir.

**Corrélation d'événements et réduction du bruit.** Combiner en un seul incident les alertes issues d'une même cause et supprimer les doublons et le bruit connu. Wikipedia décrit la corrélation d'événements. Les techniques de regroupement, décrites sur Wikipedia sous l'analyse de clusters, groupent les éléments par similarité. Une bonne corrélation transforme deux cents alertes en une seule, avec la source probable nommée.

**Suggestion de cause racine.** Utiliser la topologie, les enregistrements de changements, les journaux et les incidents passés pour proposer où une défaillance se situe probablement. Les suggestions sont des hypothèses. Elles sont les plus utiles quand elles pointent vers un changement récent ou une dépendance, et les moins fiables quand la cause est nouvelle.

**Exploitation prédictive.** Prévoir les problèmes avant qu'ils surviennent, comme un disque qui sera plein dans trois jours ou un composant susceptible de tomber en panne. Wikipedia décrit la maintenance prédictive et l'analytique prédictive. Les prédictions sont des probabilités, et chacune a un coût en fausses alarmes et en oublis. Voir le Sujet 7.5 — Analytique prédictive et prévision.

**Analyse de journaux.** Utiliser des techniques de traitement du langage naturel et de statistique pour trouver des motifs dans les journaux, comme de nouveaux types de messages ou des changements de fréquence. Wikipedia décrit l'analyse de journaux.

**IA générative en exploitation.** Les grands modèles de langage peuvent résumer des chronologies d'incidents, traduire des alertes en langage clair, rédiger des étapes de runbook et répondre à des questions sur l'environnement. Ils apportent de la souplesse et le risque de contenu inventé. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

**Précision, rappel et coûts des erreurs.** Un détecteur peut se tromper de deux façons : lever une fausse alarme (un faux positif) ou manquer un vrai problème (un faux négatif). Wikipedia décrit les deux types d'erreurs et les mesures de précision et de rappel. Régler pour réduire l'un augmente l'autre. Le bon équilibre dépend du coût de chacun, et des services différents méritent des réglages différents.

**Dérive conceptuelle.** Les modèles apprennent du passé, et le monde change : nouvelles versions, nouveaux profils de trafic, nouvelle infrastructure. Wikipedia décrit la dérive conceptuelle, dans laquelle les propriétés statistiques de ce qui est prédit changent avec le temps. Un modèle exact en janvier peut être trompeur en juin s'il n'est pas surveillé et réentraîné.

**Explicabilité.** Les intervenants feront davantage confiance à une suggestion, et la corrigeront plus utilement, s'ils peuvent voir pourquoi elle a été faite : quelles métriques ont bougé, quels événements ont été regroupés, quel changement a précédé le décalage. Wikipedia décrit l'intelligence artificielle explicable et le problème des boîtes noires. En exploitation, préférez les approches qui montrent leurs preuves.

**Qualité et couverture des données.** L'AIOps a besoin de bonnes données : complètes, cohérentes, correctement horodatées et étiquetées avec les services et les responsables. Des données manquantes ou incohérentes produisent des signaux manqués et de faux liens. Voir le Sujet 4.4 — Gestion de la configuration et le Sujet 7.2 — Fondements et gouvernance des données.

**Idées autonomiques et d'autoréparation.** L'objectif ancien de systèmes qui détectent et corrigent eux-mêmes leurs défauts, décrit sur Wikipedia comme l'informatique autonomique. Certaines parties sont praticables aujourd'hui, comme le redémarrage d'un processus défaillant. L'autoréparation étendue est bien plus difficile. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

**Supervision humaine.** L'intervenant reste redevable. Les sorties de l'AIOps sont des entrées d'une décision humaine, sauf si une action étroitement définie a été testée et approuvée pour s'exécuter automatiquement. Voir le Sujet 5.5 — IA agentique et supervision humaine.

**Comment les angles s'articulent.** L'AIOps combine IA et analytique pour la partie exploitation de la gestion des services. La pratique agile suggère de petits essais sur un service, avec des retours du personnel d'astreinte. L'automatisation consomme la sortie de l'AIOps, par exemple pour ouvrir un ticket ou lancer un contrôle sûr.

## Bonnes pratiques

1. **Partir d'une difficulté claire.** Choisissez un problème, comme trop d'alertes sur un seul service, et une mesure, comme le nombre d'appels par quart. Essayez l'AIOps là.
2. **Mettre d'abord les données en ordre.** Vérifiez que les journaux et métriques sont complets, les horodatages cohérents et les services et responsables étiquetés. Corrigez les lacunes avant d'accuser le modèle.
3. **Tester sur des incidents passés.** Rejouez des données historiques dans l'outil et demandez ce qu'il aurait signalé, regroupé ou suggéré. Comptez les fausses alarmes et les oublis.
4. **Comparer avec des méthodes simples.** Comparez avec des seuils fixes et des règles de base. Si une méthode simple fait aussi bien, utilisez-la. Ne payez pas une complexité qui n'apporte rien.
5. **Préférer des sorties explicables.** Choisissez des outils qui montrent les preuves derrière une alerte ou une cause suggérée. Exigez que les intervenants puissent les voir et les contester.
6. **Commencer en mode consultatif.** Laissez l'outil suggérer et les gens décider. Examinez les suggestions par rapport à ce qui s'est réellement passé pendant quelques semaines avant de lui donner une action automatique.
7. **Limiter les actions automatiques.** N'autorisez que des actions étroites, bien comprises et réversibles, avec limites de débit, journaux et arrêt manuel. Examinez chaque classe d'actions avant de l'activer.
8. **Surveiller les modèles.** Suivez les fausses alarmes, les oublis et la part de suggestions utiles. Guettez la dérive après les mises en production majeures et réentraînez ou reconfigurez au besoin.
9. **Garder le personnel d'astreinte impliqué.** Demandez-lui de noter les suggestions dans l'outil et examinez ses retours chaque semaine. Ce sont les meilleurs juges de l'utilité.
10. **Consigner ce qui a été supprimé.** Tenez un journal des alertes que le système a masquées ou fusionnées et examinez régulièrement des échantillons. C'est dans la suppression que surviennent les pires défaillances.

## Questions à discuter avec votre équipe

**Quelles alertes gaspillent le plus de temps d'astreinte, et de meilleures règles les corrigeraient-elles avant toute IA ?**
Partez des données. De nombreux problèmes de bruit cèdent à des corrections simples. Attendez-vous à ce que quelques règles expliquent l'essentiel du bruit. Demandez ensuite de les corriger puis de réévaluer ce que l'IA pourrait ajouter.

**Si l'outil avait fonctionné pendant nos trois derniers incidents, que nous aurait-il dit, et cela aurait-il aidé ?**
Rejouez ou simulez. Attendez-vous à des résultats contrastés. Demandez ce qu'il aurait manqué. Demandez ensuite de choisir le type d'incident où l'outil paraît le plus prometteur.

**Comment saurions-nous que l'outil a supprimé une vraie alerte ?**
Cela teste la supervision. Attendez-vous à « nous ne le saurions pas ». Demandez ensuite de convenir d'un journal des événements supprimés, d'un échantillonnage régulier et d'une règle sur ce qui n'est jamais supprimé.

**Qui est redevable quand une action automatique tourne mal, et quelles en sont les limites ?**
Nommez un responsable et listez les actions permises. Attendez-vous à des réponses vagues. Demandez ensuite de rédiger une courte liste d'actions permises sans approbation, chacune avec un retour arrière.

**Comment détecterons-nous que le modèle a dérivé après une mise en production majeure ou un changement de trafic ?**
Demandez le plan. Attendez-vous à ce qu'il n'y en ait pas. Demandez ensuite de choisir des indicateurs, comme le taux de fausses alarmes, et une date de revue après chaque mise en production majeure.

**Que voudrait le personnel d'astreinte de cet outil, et qu'est-ce qui lui ferait perdre confiance ?**
Demandez-le-lui directement. Attendez-vous à des réponses pratiques sur le contexte et les fausses alarmes. Demandez ensuite de transformer les réponses en critères d'acceptation pour l'essai.

## En pratique : un exemple de gestion des services

L'équipe d'exploitation d'un service météorologique national gère des pipelines de prévision et une API publique sur un parc mixte de systèmes sur site et cloud. Le personnel d'astreinte reçoit environ 300 alertes par jour, la plupart provenant de quelques sources bruyantes. Un éditeur propose une plateforme d'AIOps avec corrélation automatique et suggestions de causes racines.

Le responsable de l'exploitation accepte un essai avec des conditions. D'abord, l'équipe nettoie les 12 règles les plus bruyantes, ce qui supprime environ la moitié du volume. Ensuite, elle rejoue six mois de données, dont 14 incidents, dans la plateforme en mode consultatif. Dans la répétition, la plateforme regroupe bien les alertes : l'incident moyen qui produisait 80 alertes apparaît sous forme de trois groupes. Elle signale correctement le premier signe dans neuf des 14 incidents, en manque trois où le premier symptôme figurait dans un journal, et lève de fausses alarmes sur le retraitement nocturne courant, qui a un profil qu'elle n'a pas appris.

L'équipe la déploie en mode consultatif sur un pipeline pendant deux mois, le personnel d'astreinte notant chaque suggestion comme utile, neutre ou fausse. Environ 55 % sont jugées utiles et 15 % fausses, généralement lorsqu'un changement récent non consigné est la cause. La plateforme est ensuite autorisée à ouvrir automatiquement des tickets pour les incidents regroupés, et rien d'autre. L'équipe tient une revue hebdomadaire des alertes supprimées et, après une mise en production majeure, constate que la référence du modèle pour le trafic est devenue fausse et doit être réentraînée.

Ce qui change : le personnel d'astreinte reçoit bien moins d'alertes, et mieux regroupées. Ce qui reste difficile : les suggestions de la plateforme dépendent d'enregistrements de changements exacts, qui sont incomplets ; elle aide moins pour les défaillances nouvelles ; et la tarification de l'éditeur croît avec le volume de données, si bien que l'équipe limite ce qu'elle ingère. Le responsable prévoit d'élargir l'essai à un autre pipeline seulement après une nouvelle revue des oublis.

## Quatre perspectives

### Équipes produit et de livraison

Émettez une bonne télémétrie : journaux cohérents, métriques avec étiquettes de service et enregistrements des déploiements et des changements. Partagez la connaissance de la conception avec l'équipe d'exploitation et aidez à vérifier les suggestions de l'outil sur votre service.

### Équipes de service et d'exploitation

Utilisez l'outil comme un assistant : notez les suggestions, examinez les éléments supprimés et signalez les oublis. Gardez des règles simples là où elles marchent et gardez la responsabilité des décisions et des actions.

### Direction et gouvernance

Demandez des résultats de tests de rejeu et d'un essai, non d'une démonstration. Fixez des limites aux actions automatiques. Financez la qualité des données et la formation. Méfiez-vous des affirmations d'exploitation entièrement autonome.

### Clients et utilisateurs

Vous devriez remarquer des perturbations moins nombreuses et plus courtes, non un changement dans la façon dont les problèmes vous sont communiqués. Dites au fournisseur si un incident a été manqué avant que vous ne le remarquiez.

## Agilité, IA, automatisation et analytique

### Agilité

Essayez sur un service, avec le personnel d'astreinte qui donne des retours fréquents, puis élargissez par étapes. Examinez les oublis après chaque incident et ajustez. Attention : régler un modèle sans cesse sans consigner les changements rend le comportement imprévisible ; tenez un journal des modifications.

### IA

L'outil est lui-même un système d'IA avec un responsable, des données de test et une revue. Traitez-le comme n'importe quel autre : consignez ce qu'il peut faire, surveillez-le et testez-le après les mises à jour. Attention : les éditeurs peuvent changer les modèles sans préavis ; demandez comment ils annoncent les changements et testez régulièrement. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Reliez la sortie de l'AIOps à des actions automatisées étroites et testées, comme la création de tickets, la collecte de diagnostics et le redémarrage d'un processus défaillant connu, avec limites et journaux. Attention : des actions automatiques choisies à partir de prédictions incertaines peuvent aggraver un incident ; exigez une grande confiance et un retour arrière. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Mesurez le volume d'alertes, la part utile, les fausses alarmes, les oublis trouvés lors des revues d'incidents, le délai de détection et le délai de diagnostic. Attention : réduire le volume d'alertes peut s'obtenir en masquant de vraies alertes ; comparez toujours avec les incidents et les oublis. Voir le Sujet 7.4 — Observabilité et télémétrie et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Acheter une promesse.** La démonstration de l'éditeur est prise pour une preuve. Testez sur vos propres données avec un rejeu et un essai.
- **Mauvaises données.** Le modèle apprend de journaux et d'étiquettes incohérents. Corrigez d'abord les données.
- **Suppression sans revue.** De vraies alertes sont masquées. Consignez et échantillonnez ce qui est supprimé.
- **Suggestions opaques.** Les intervenants ne peuvent pas les juger. Préférez des outils qui montrent leurs preuves.
- **Automatisation prématurée.** De mauvaises actions se produisent à grande vitesse. Commencez en mode consultatif et limitez les actions.
- **Dérive du modèle ignorée.** La précision se dégrade en silence. Surveillez et réentraînez après les changements.
- **Complexité sans gain.** Une règle simple suffirait. Comparez avec des méthodes simples.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Socle de données | Incohérent | Principales sources collectées | Télémétrie cohérente, étiquetée et attribuée | Qualité des données mesurée et améliorée | Données partagées entre équipes et fournisseurs avec gouvernance |
| Usage de l'IA | Affirmations de l'éditeur | Essai sur un service | Usage consultatif avec rejeu et retours | Résultats mesurés et exploités | IA intégrée à l'exploitation avec supervision |
| Automatisation | Aucune | Création de tickets | Actions étroites et approuvées avec limites | Actions examinées et améliorées | Automatisation plus large selon le risque avec contrôle humain |
| Soin des modèles | Aucun | Réglage ponctuel | Surveillance de la dérive et des erreurs | Réentraînement lié au changement | Évaluation continue entre outils |

## Liste de contrôle

- [ ] Nous avons choisi un problème précis et une mesure pour un essai.
- [ ] Nous avons d'abord corrigé le pire de notre bruit d'alertes avec des règles simples.
- [ ] Nous avons testé l'outil sur des incidents historiques et compté oublis et fausses alarmes.
- [ ] Nous l'avons comparé à des méthodes simples.
- [ ] Les sorties sont explicables aux intervenants.
- [ ] Nous fonctionnons en mode consultatif avant d'autoriser toute action.
- [ ] Les actions automatiques sont étroites, journalisées, limitées en débit et réversibles.
- [ ] Nous surveillons la dérive et examinons les alertes supprimées.

## Invites d'IA

**Vérifier les résultats d'un rejeu.**

```text
Here are the results of replaying [number] past incidents through our AIOps tool: for each, the first real symptom, what the tool flagged and when, and what it suggested: [paste].
Compute for each incident whether the tool flagged the problem before the first page, and list false alarms and misses. Summarize counts and note incidents where the data is unclear. Do not rate the tool overall.
List what you are unsure of.
```

**Examiner les alertes supprimées.**

```text
Here is a sample of alerts that the system suppressed or merged last week, with details: [paste sample].
For each, say whether the details suggest it was noise, a duplicate of another alert, or possibly a real problem, and give your reason. Mark those you cannot judge.
List what you are unsure of.
```

**Rédiger des critères d'acceptation pour un essai.**

```text
Our service: [describe]. Our current pain: [describe, with numbers if known]. Our constraints: [list].
Draft acceptance criteria for a two-month pilot of an AIOps tool: measures, thresholds we should agree beforehand, what would make us stop, and what automatic actions are not allowed. Do not state vendor claims as facts.
List what you are unsure of.
```

## Compétences d'IA

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md) : à utiliser pour examiner des motifs inhabituels dans les données d'exploitation.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md) : à utiliser pour voir l'évolution des métriques dans le temps.
- [data-quality](../../../../skills/data-quality/SKILL.md) : à utiliser pour vérifier les entrées dont dépend l'AIOps.
- [mlops](../../../../skills/mlops/SKILL.md) : à utiliser pour surveiller et entretenir les modèles en usage.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md) : à utiliser pour confronter les causes suggérées aux preuves.

## Sources principales

- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitre sur la surveillance des systèmes distribués, gratuit sur sre.google : les fondements sur lesquels s'appuie l'AIOps.
- PeopleCert, pages de certification ITIL : la description de la pratique de surveillance et de gestion des événements par le propriétaire.
- Wikipedia, « AIOps » et « Anomaly detection » : des aperçus du terme et des techniques.
- Wikipedia, « Concept drift » : la principale raison pour laquelle les modèles se dégradent avec le temps.

## Références

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
