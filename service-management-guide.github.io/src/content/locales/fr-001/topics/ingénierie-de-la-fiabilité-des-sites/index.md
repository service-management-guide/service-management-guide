# Ingénierie de la fiabilité des sites

**L'ingénierie de la fiabilité des sites (SRE) traite l'exploitation comme un problème d'ingénierie : elle fixe des objectifs de fiabilité mesurables, dépense un budget d'erreur pour le changement, supprime le travail répétitif (toil) grâce au logiciel et apprend des défaillances sans blâme ; elle exprime en termes d'ingénierie de nombreuses pratiques de gestion des services.**

## Pourquoi c'est important

Tout service connaît une tension entre le changement et la fiabilité. Les clients veulent de nouvelles fonctionnalités et veulent que le service marche. Les équipes qui poussent le changement vite causent des pannes, et celles qui gardent la stabilité ralentissent tout. Sans moyen de peser les deux, la discussion est tranchée par celui qui crie le plus fort, ou par le dernier incident.

L'ingénierie de la fiabilité des sites offre un moyen de rendre l'arbitrage explicite. Elle part de l'idée que la fiabilité parfaite n'est ni possible ni souhaitée : les utilisateurs ne font pas la différence entre 99,999 % et 99,99 % de disponibilité quand leur propre appareil et leur réseau tombent en panne plus souvent que cela, et chaque neuf supplémentaire coûte bien plus cher. L'équipe convient donc d'un objectif qui correspond à ce dont les utilisateurs ont besoin, le mesure et utilise la marge entre l'objectif et la perfection comme budget de risque.

Le SRE est né chez Google au début des années 2000 et est décrit dans des livres que l'entreprise a publiés en ligne. De nombreuses autres organisations en ont adopté des éléments. Pour la gestion des services, sa valeur est de donner des versions concrètes, de type ingénierie, d'idées qu'ITIL appelle gestion des niveaux de service, gestion de la disponibilité et amélioration continue. Ce sujet explique les idées principales et met en garde contre le fait de les copier sans le contexte qui les a fait fonctionner.

## Concepts clés

**Ce qu'est le SRE.** Wikipedia décrit l'ingénierie de la fiabilité des sites comme un ensemble de principes et de pratiques qui appliquent des aspects de l'ingénierie logicielle à l'infrastructure et à l'exploitation informatiques, afin de créer des systèmes évolutifs et fiables. Une équipe SRE comprend généralement des personnes ayant des compétences en logiciel et en systèmes, qui automatisent le travail d'exploitation et participent à la conception pour la fiabilité.

**Indicateur de niveau de service (SLI).** Une mesure d'un aspect du service tel que les utilisateurs le vivent, comme la proportion de requêtes qui réussissent, ou la proportion qui se terminent en moins de 300 millisecondes. Un bon indicateur reflète ce qui importe aux utilisateurs, non ce qui est facile à mesurer.

**Objectif de niveau de service (SLO).** Une cible pour un indicateur sur une période, par exemple « 99,9 % des requêtes réussissent sur 30 jours glissants ». L'objectif est un but interne convenu entre ceux qui exploitent le service et ceux qui en dépendent. Wikipedia décrit les objectifs de niveau de service comme une partie des accords de niveau de service.

**Accord de niveau de service (SLA).** Un contrat assorti de conséquences, souvent financières, si le service tombe en dessous d'un niveau convenu. Un SLA fixe généralement une cible plus souple que le SLO interne, de sorte que l'équipe est avertie avant une violation. Voir le Sujet 3.7 — Gestion des niveaux de service.

**Budget d'erreur.** La quantité d'infiabilité permise : si l'objectif est de 99,9 %, le budget est le 0,1 % restant. Tant qu'il reste du budget, l'équipe peut prendre des risques, comme livrer plus vite. Quand le budget est épuisé, l'équipe ralentit le changement et investit dans la fiabilité. Le budget fait de l'arbitrage entre fiabilité et changement une décision partagée et mesurable plutôt qu'une dispute.

**Toil (travail répétitif).** Un travail manuel, répétitif, automatisable, tactique et qui croît avec le service sans ajouter de valeur durable. Les exemples comprennent redémarrer manuellement un service, traiter à la main le même type de demande et acquitter des alertes bruyantes. La pratique SRE limite la part de temps passée en toil, souvent autour de la moitié, et consacre le reste à un travail d'ingénierie qui le réduit.

**Surveillance et alertes.** Les alertes doivent être exploitables et liées à des symptômes ressentis par les utilisateurs, avec une réponse claire. Des alertes bruyantes que personne ne traite apprennent aux gens à les ignorer. Voir le Sujet 3.10 — Surveillance et gestion des événements et le Sujet 7.4 — Observabilité et télémétrie.

**Réponse aux incidents et revues sans blâme.** Le SRE met l'accent sur des rôles clairs pendant les incidents, la communication et des revues structurées ensuite qui examinent le système et produisent des actions suivies. Voir le Sujet 3.2 — Gestion des incidents et le Sujet 3.3 — Gestion des problèmes.

**Capacité et performance.** Le SRE inclut la prévision de la demande, le test des limites et la planification de la capacité afin que la croissance ne cause pas de défaillance. Voir le Sujet 3.11 — Disponibilité, capacité et performance.

**Ingénierie de mise en production et changement.** Des mises en production fiables et reproductibles, souvent avec un déploiement progressif et un retour arrière automatique, font partie du travail du SRE. Voir le Sujet 2.2 — Livraison continue.

**S'exercer à la défaillance.** L'ingénierie du chaos injecte délibérément des défaillances, sous contrôle, pour trouver les faiblesses avant que de vrais incidents ne le fassent. Les journées d'exercice (game days) répètent la réponse. Voir le Sujet 3.12 — Gestion de la continuité des services.

**SRE et DevOps.** Les deux partagent de nombreuses idées. Une description courante est que le SRE est une façon de mettre en œuvre les principes DevOps, avec un ensemble précis de pratiques comme les SLO, les budgets d'erreur et les limites de toil. Voir le Sujet 2.5 — DevOps.

**SRE et ITIL.** Les SLO et les budgets d'erreur se situent à côté de la gestion des niveaux de service ; les revues sans blâme à côté de la gestion des problèmes ; la réduction du toil soutient l'amélioration continue. Le SRE décrit comment une équipe technique peut faire ce travail, tandis qu'ITIL décrit les pratiques dont une organisation a besoin dans l'ensemble.

**Les limites de la copie.** Le SRE a été développé dans une très grande organisation d'ingénierie, à une échelle et avec des effectifs particuliers. Une petite équipe ne peut pas, et n'a pas besoin de, copier sa structure. Commencez par quelques idées : choisir un indicateur centré sur l'utilisateur, fixer un objectif et écrire ce que vous ferez quand le budget sera dépensé.

**Comment les angles s'articulent.** Le SRE est en grande partie le côté ingénierie de l'angle agile pour les services en production. L'IA peut aider au tri des alertes et aux résumés d'incidents, sous revue humaine. L'automatisation est le principal outil contre le toil. L'analytique fournit les SLI et les données sur le toil et les incidents.

## Bonnes pratiques

1. **Choisir des indicateurs qui reflètent l'expérience de l'utilisateur.** Demandez ce qu'un utilisateur dirait être « en état de marche » : des pages qui se chargent, des paiements qui aboutissent, des fichiers qui arrivent. Mesurez cela, non l'utilisation du processeur.
2. **Fixer un objectif avec ceux qui dépendent du service.** Convenez d'un chiffre qui correspond au besoin réel, écrit avec la période et la manière de le mesurer. Revoyez-le quand les besoins changent.
3. **Utiliser un budget d'erreur pour décider.** Écrivez ce qui se passe quand le budget est presque épuisé, comme le gel des changements risqués, et qui décide. Convenez-en avant la première fois où cela comptera.
4. **Garder des objectifs plus stricts que les accords.** Fixez votre cible interne de façon à remarquer les ennuis avant de violer un contrat. Voir le Sujet 3.7 — Gestion des niveaux de service.
5. **Compter et limiter le toil.** Suivez le temps consacré au travail manuel répétitif et fixez une limite. Consacrez le reste à supprimer les plus grandes sources de toil.
6. **Alerter sur les symptômes et garder des alertes exploitables.** Chaque alerte doit dire ce qui ne va pas pour les utilisateurs et quoi faire. Supprimez ou corrigez les alertes que personne ne traite.
7. **Partager l'astreinte de façon équitable et soutenable.** Limitez le nombre d'alertes par quart, fournissez une formation et un chemin d'escalade documenté, et examinez régulièrement la charge. Voir le Sujet 8.3 — Changement organisationnel et adoption.
8. **Examiner les incidents sans blâme et aller jusqu'au bout.** Écrivez la chronologie, les facteurs contributifs et les actions avec responsables et dates. Vérifiez que les actions sont faites.
9. **S'exercer à la défaillance dans des conditions sûres.** Menez des journées d'exercice et de petites expériences de chaos en préproduction ou avec une exposition limitée, avec un bouton d'arrêt clair.
10. **Commencer petit.** Choisissez un service important, définissez un ou deux SLI et un SLO, et tirez les leçons du résultat avant d'étendre.

## Questions à discuter avec votre équipe

**Que diraient nos utilisateurs que « en état de marche » signifie pour ce service, et le mesurons-nous ?**
C'est le point de départ des indicateurs. Les équipes mesurent souvent la santé des serveurs à la place. Demandez la dernière fois que les utilisateurs étaient mécontents alors que nos tableaux de bord étaient au vert. Demandez ensuite de choisir un indicateur visible par l'utilisateur à mesurer.

**Quel niveau de fiabilité ce service doit-il vraiment avoir, et qui l'a décidé ?**
Les objectifs sont souvent fixés par habitude, par exemple « cinq neuf ». Demandez ce que font les utilisateurs quand le service est en panne et ce que coûte une heure d'indisponibilité. Attendez-vous à des désaccords. Demandez ensuite de rédiger un objectif et de le vérifier avec un client.

**Que ferons-nous quand nous aurons dépensé le budget d'erreur, et le ferons-nous vraiment ?**
Les politiques jamais appliquées apprennent aux gens à les ignorer. Demandez ce qui s'est passé la dernière fois que la fiabilité a souffert et que le changement a continué. Demandez ensuite de convenir d'une réponse précise et modeste et de qui décide.

**Quelles sont les trois plus grandes sources de toil de notre équipe, et que faudrait-il pour supprimer chacune ?**
Demandez aux gens de lister les tâches répétitives et d'estimer le temps. Attendez-vous à des redémarrages manuels, des corrections de données et des demandes d'accès. Demandez ensuite de choisir un élément et d'estimer le travail pour l'automatiser, par rapport au temps gagné sur un an.

**Combien d'alertes nos personnes d'astreinte ont-elles reçues le mois dernier, et combien exigeaient une action humaine ?**
Cela teste la qualité des alertes et la charge de travail. Demandez les chiffres ; si personne ne les connaît, c'est un constat. Demandez ensuite de choisir l'alerte la plus bruyante à corriger ou à supprimer.

**Où l'IA pourrait-elle aider pour les alertes ou les résumés d'incidents, et comment remarquerions-nous ses erreurs ?**
L'IA peut regrouper des alertes, rédiger des résumés et suggérer des étapes de runbook. Elle peut aussi masquer un vrai signal ou inventer une cause. Demandez qui en est responsable et comment sa sortie est vérifiée. Demandez ensuite d'essayer un outil de résumé en parallèle du processus humain et de comparer.

## En pratique : un exemple de gestion des services

L'équipe des archives numériques d'une bibliothèque nationale exploite un service de recherche pour les chercheurs. L'équipe de six personnes assure l'astreinte en rotation. Des alertes arrivent la nuit environ une fois par semaine, le plus souvent pour une alerte d'espace disque sur un serveur de traitement par lots que quelqu'un vide à la main. La direction demande « 99,99 % de disponibilité » dans le plan annuel, bien que personne n'ait mesuré la performance actuelle.

Le responsable de l'équipe propose une expérience plus modeste. Avec deux chercheurs, l'équipe définit un indicateur : la proportion de requêtes de recherche qui renvoient des résultats en moins de deux secondes. Ils le mesurent pendant un mois et trouvent 99,2 %. Les chercheurs disent ne remarquer la lenteur que lorsque les recherches prennent plus de cinq secondes, ce qui arrive sur environ 0,3 % des requêtes, surtout pendant une reconstruction nocturne de l'index. Ils conviennent d'un objectif de 99,5 % en moins de deux secondes sur 30 jours et d'une politique de budget d'erreur : si plus de 75 % du budget est dépensé sur une période, l'équipe suspend les mises en production non urgentes et corrige la plus grande cause.

L'équipe compte aussi le toil. Vider le disque à la main prend environ deux heures par mois et réveille quelqu'un. Ils automatisent le nettoyage, ajoutent une alerte sur la croissance rapide plutôt que sur le disque plein et répètent une journée d'exercice de restauration de l'index à partir de la sauvegarde.

Ce qui change : les alertes de nuit diminuent, et les mises en production sont suspendues une fois au premier trimestre lorsque le budget baisse, la cause étant retracée jusqu'à une requête lente. Ce qui reste difficile : le plan annuel dit toujours « 99,99 % », parce que les cadres supérieurs n'ont pas accepté de le remplacer ; la reconstruction de l'index dépend d'un service de stockage géré par un autre département ; et l'équipe ne sait pas si les chercheurs d'autres fuseaux horaires vivent le service de la même façon. Le responsable porte la formulation du plan à la prochaine revue.

## Quatre perspectives

### Équipes produit et de livraison

Partagez l'objectif et le budget avec l'exploitation. Incluez le travail de fiabilité dans le backlog, déployez progressivement et observez l'effet des changements. Quand le budget est dépensé, joignez-vous à l'effort pour réduire la cause.

### Équipes de service et d'exploitation

Définissez les indicateurs avec les utilisateurs, gardez des alertes exploitables et consacrez votre temps à l'ingénierie qui supprime le toil. Apportez la charge d'astreinte et les données d'incidents à la planification. Écrivez des revues qui mènent à des actions suivies.

### Direction et gouvernance

Convenez d'objectifs qui reflètent le besoin réel et soutenez la politique de budget quand elle exige de ralentir le changement. Financez le temps pour la réduction du toil et le travail de fiabilité. Ne demandez pas la perfection.

### Clients et utilisateurs

On devrait vous demander ce que « en état de marche » signifie pour vous et vous dire quel est l'objectif. Signalez clairement les problèmes et attendez-vous à savoir ce qui a été fait. Si l'objectif vous paraît inadapté à vos besoins, dites-le.

## Agilité, IA, automatisation et analytique

### Agilité

Le SRE ajoute des objectifs de fiabilité mesurables à la livraison et à l'amélioration continues. Gardez les parties prenantes impliquées dans la fixation des objectifs et revoyez-les régulièrement. Attention : les budgets d'erreur ne remplacent pas le jugement ; certains incidents, comme une fuite de données, comptent quel que soit le budget.

### IA

L'IA peut regrouper des alertes liées, proposer des causes probables et rédiger des résumés d'incidents. Chaque usage a besoin d'un responsable, d'un humain chargé des décisions et d'un moyen de comparer les suggestions de l'IA à ce qui s'est réellement passé. Attention : une IA qui supprime des alertes pour réduire le bruit peut masquer de vraies défaillances ; testez-la avec des incidents connus. Voir le Sujet 5.2 — AIOps.

### Automatisation

Automatisez le toil : redémarrages, nettoyages, accès courants et diagnostics répétés, avec journaux, limites et moyen de la désactiver. Attention : une automatisation qui agit sur la production peut aggraver un incident ; ajoutez des limites de débit et un arrêt manuel. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Utilisez les SLI, l'atteinte des SLO, la consommation du budget d'erreur, les heures de toil et la qualité des alertes. Attention : des objectifs choisis parce qu'ils sont faciles à atteindre, ou des indicateurs qui ignorent des parties de l'expérience utilisateur, donnent un faux confort ; confrontez-les aux plaintes des utilisateurs. Voir le Sujet 7.4 — Observabilité et télémétrie et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Copier les chiffres des autres.** Les « cinq neuf » sont adoptés sans connaître le besoin. Décidez d'après le besoin des utilisateurs et le coût.
- **Des indicateurs qui manquent l'utilisateur.** Les tableaux de bord sont au vert et les utilisateurs se plaignent. Mesurez ce que vivent les utilisateurs.
- **Une politique de budget que personne ne suit.** Le changement continue quand le budget est dépensé. Convenez à l'avance de la réponse et appliquez-la.
- **Le bruit d'alertes.** Les personnes d'astreinte ignorent les alertes. Rendez chaque alerte exploitable.
- **Le toil comme normalité.** L'équipe n'a jamais le temps d'automatiser. Comptez-le et fixez une limite.
- **Le SRE comme simple renommage de l'exploitation.** Les pratiques ne sont pas adoptées. Définissez indicateurs, objectifs et budgets.
- **Culture du héros.** Une personne résout chaque incident. Partagez les connaissances et les runbooks.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Indicateurs et objectifs | Aucune mesure visible par l'utilisateur | Mesures d'infrastructure seulement | SLI et SLO centrés sur l'utilisateur pour les services clés | Objectifs revus avec les utilisateurs et les coûts | Objectifs coordonnés entre services dépendants |
| Budget d'erreur | Aucun | Discuté | Politique écrite appliquée | Résultats de la politique examinés | Budgets partagés entre équipes et partenaires |
| Toil | Non mesuré | Identifié de façon informelle | Compté et limité | Réduit par une automatisation suivie | Réduit entre services avec des outils partagés |
| Apprentissage des incidents | Blâme | Quelques revues | Revues sans blâme avec actions suivies | Achèvement des actions et récurrence mesurés | Apprentissage partagé dans l'organisation |

## Liste de contrôle

- [ ] Nous avons au moins un indicateur visible par l'utilisateur pour chaque service important.
- [ ] Chacun a un objectif convenu avec ceux qui s'y fient.
- [ ] Nous avons écrit ce qui se passe quand le budget d'erreur est presque épuisé.
- [ ] Nos objectifs internes sont plus stricts que nos accords.
- [ ] Nous suivons le toil et avons une limite.
- [ ] Les alertes sont exploitables, et les plus bruyantes sont corrigées ou supprimées.
- [ ] La charge d'astreinte est mesurée et soutenable.
- [ ] Les revues d'incident sont sans blâme et les actions sont suivies jusqu'à leur achèvement.

## Invites d'IA

**Rédiger des indicateurs candidats.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Calculer la consommation du budget d'erreur.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Classer les candidats au toil.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## Compétences d'IA

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md) : à utiliser pour relier les objectifs aux accords.
- [postmortem](../../../../skills/postmortem/SKILL.md) : à utiliser pour mener des revues sans blâme avec des actions suivies.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md) : à utiliser pour planifier des expériences de défaillance sûres.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md) : à utiliser pour prévoir la demande et les limites.

## Sources principales

- Betsy Beyer, Chris Jones, Jennifer Petoff et Niall Richard Murphy (dir.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), disponible gratuitement sur sre.google : la source principale des pratiques.
- Betsy Beyer et autres (dir.), *The Site Reliability Workbook* (2018) : des conseils pratiques pour l'adoption.
- Wikipedia, « Site reliability engineering » : un aperçu neutre.
- Wikipedia, « Service-level objective » : contexte sur les termes.

## Références

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
