# Disponibilité, capacité et performance

**La gestion de la disponibilité, de la capacité et de la performance garde un service utilisable, assez grand et assez rapide pour la demande à laquelle il fait face ; elle fonctionne quand les objectifs viennent des besoins des utilisateurs, que les risques sont écartés par la conception grâce à la redondance et aux tests, et que les prévisions sont confrontées à la réalité au lieu d'être crues sur parole.**

## Pourquoi c'est important

Les utilisateurs jugent un service d'abord sur trois choses : puis-je l'utiliser, tient-il le coup quand beaucoup de gens l'utilisent, et est-il rapide ? Les défaillances sur l'un de ces points se traduisent par du travail perdu, des achats abandonnés et des appels furieux. Pourtant, les trois sont faciles à négliger jusqu'à un mauvais jour : un lancement qui double le trafic, une échéance qui envoie tout le monde sur le système dans la dernière heure, la défaillance d'un composant unique dont personne ne s'était rendu compte que tout dépendait.

Ces pratiques existent pour éviter ces mauvais jours en y réfléchissant à l'avance. Elles demandent combien de défaillance le service peut tolérer et ce que cela coûte, quelle demande il doit absorber et comment elle va croître, et à quelle vitesse il devrait répondre. Elles répondent par des choix de conception comme la redondance, par des tests qui trouvent les limites avant les utilisateurs et par des prévisions vérifiées et mises à jour.

ITIL 4 décrit trois pratiques apparentées : la gestion de la disponibilité, la gestion de la capacité et de la performance, et, de très près, la gestion de la continuité des services (Sujet 3.12 — Gestion de la continuité des services). Les équipes d'ingénierie les rencontrent sous les noms d'ingénierie de la fiabilité, d'ingénierie de la performance et de planification de la capacité, avec des SLO et des budgets d'erreur (Sujet 2.6 — Ingénierie de la fiabilité des sites). Ce sujet rassemble les idées et explique comment les utiliser sans surdimensionner : plus de disponibilité n'est pas toujours mieux, car chaque neuf supplémentaire coûte plus cher. Il se relie à la gestion des niveaux de service (Sujet 3.7 — Gestion des niveaux de service) et à la surveillance (Sujet 3.10 — Surveillance et gestion des événements).

## Concepts clés

**Disponibilité.** La capacité d'un service à remplir sa fonction convenue quand on en a besoin. Wikipedia décrit la disponibilité comme la proportion de temps pendant laquelle un système fonctionne. Elle est généralement exprimée en pourcentage sur une période, comme 99,9 % sur un mois, ce qui autorise environ 43 minutes d'indisponibilité. Le chiffre n'a de sens que si vous définissez ce que « fonctionner » signifie pour les utilisateurs.

**Fiabilité et maintenabilité.** La fiabilité est la durée pendant laquelle un service fonctionne sans défaillance ; la maintenabilité est la rapidité avec laquelle il peut être rétabli. La disponibilité dépend des deux. Les articles de Wikipedia sur l'ingénierie de la fiabilité et sur le temps moyen entre pannes (MTBF) décrivent les mesures. Dans beaucoup de services modernes, un rétablissement rapide est plus réalisable qu'une défaillance rare.

**Redondance et points uniques de défaillance.** La redondance consiste à avoir des composants de rechange pour qu'une défaillance n'arrête pas le service. Un point unique de défaillance est un composant dont la défaillance arrête tout. Les articles de Wikipedia sur la redondance et les points uniques de défaillance décrivent ces idées. Trouver les points uniques de défaillance, y compris les personnes, les fournisseurs et les certificats qui expirent, est une tâche centrale de la disponibilité.

**Tolérance aux pannes et dégradation progressive.** Un système tolérant aux pannes continue de fonctionner quand des parties tombent ; un système qui se dégrade progressivement perd une partie de ses fonctions mais garde son cœur. Par exemple, un site marchand peut désactiver les recommandations mais continuer de traiter les commandes. Concevez pour la seconde quand la tolérance totale est trop coûteuse.

**Bascule (failover).** Passer à un composant de secours quand le principal tombe. Elle devrait être testée ; une bascule non testée échoue souvent quand on en a besoin. Voir le Sujet 3.12 — Gestion de la continuité des services.

**Capacité.** Le débit maximal qu'un service peut fournir. La gestion de la capacité veille à ce qu'il y en ait assez, et guère plus qu'assez, pour répondre à la demande actuelle et future à un coût convenu. L'article de Wikipedia sur la planification de la capacité la décrit.

**Demande.** La charge placée sur le service : utilisateurs, requêtes, volume de données. La demande varie selon l'heure, le jour, la saison et les événements, et elle est affectée par les lancements, les campagnes et les événements externes. Comprendre le profil compte plus que la moyenne.

**Évolutivité et mise à l'échelle automatique.** La capacité de traiter plus de charge en ajoutant des ressources. Les plateformes cloud permettent une mise à l'échelle automatique qui ajoute de la capacité quand la charge monte. Elle aide mais ne supprime pas le besoin de planification : elle a des limites, coûte de l'argent et ne règle pas le cas d'une base de données qui ne peut pas passer à l'échelle. Voir le Sujet 4.5 — Gestion financière et FinOps.

**Performance.** La rapidité et l'efficacité avec lesquelles le service répond. Les mesures courantes sont la latence (combien de temps prend une requête), le débit (combien de requêtes sont traitées) et le taux d'erreur. Wikipedia décrit la latence en ingénierie. Les utilisateurs remarquent la queue lente ; regardez donc les percentiles, comme le 95e, et pas seulement la moyenne. Voir le Sujet 3.7 — Gestion des niveaux de service.

**Files d'attente et saturation.** À mesure qu'un système approche de l'utilisation complète, le temps d'attente croît brutalement. La théorie des files d'attente, décrite sur Wikipedia, explique pourquoi un service qui fonctionne à 95 % de sa capacité se ressent très différemment d'un service à 60 %. Laissez de la marge.

**Ingénierie et tests de performance.** Concevoir et tester pour la performance tout au long du développement, pas seulement à la fin. Les tests de charge appliquent la demande attendue ; les tests de contrainte vont au-delà pour trouver les points de rupture. Wikipedia décrit les deux. Testez dans un environnement ressemblant à la production, avec des données réalistes.

**Prévision.** Estimer la demande future à partir de l'historique, des événements connus et de la croissance. Wikipedia décrit des méthodes de prévision. Les prévisions sont incertaines : consignez les hypothèses, montrez des fourchettes et comparez les prédictions à ce qui se produit. Voir le Sujet 7.5 — Analytique prédictive et prévision.

**Arbitrages de coût.** Chaque augmentation de disponibilité ou de capacité coûte de l'argent. Le bon niveau dépend du coût de la défaillance et de la lenteur pour l'activité. Rendez l'arbitrage explicite avec ceux qui paient et écrivez-le.

**Comment les angles s'articulent.** La pratique agile traite le travail de fiabilité comme une partie du backlog et teste tôt et souvent. L'IA peut détecter des anomalies et soutenir la prévision, sous relecture. L'automatisation met à l'échelle les ressources et assure les bascules. L'analytique fournit les données des trois pratiques.

## Bonnes pratiques

1. **Fixer les objectifs de disponibilité d'après le besoin des utilisateurs.** Demandez ce qui se passe quand le service est en panne une heure, un jour, une semaine. Fixez un objectif, et un coût, en conséquence. Écrivez la définition de « disponible » du point de vue de l'utilisateur.
2. **Trouver les points uniques de défaillance.** Cartographiez les composants et dépendances des services importants et demandez ce qui se passe si chacun tombe. Incluez certificats, licences, personnes et fournisseurs.
3. **Concevoir pour la défaillance.** Utilisez la redondance là où le coût est justifié, rendez les composants indépendants face aux pannes et décidez ce qui peut être coupé pour protéger le cœur.
4. **Tester la bascule et le rétablissement.** Répétez les bascules dans un environnement sûr et consignez le temps qu'elles prennent. Corrigez ce que la répétition révèle.
5. **Connaître son profil de demande.** Collectez les données de charge par heure, jour et saison, et listez les événements à venir connus comme les lancements et les échéances. Planifiez pour les pics, non pour les moyennes.
6. **Laisser de la marge.** Ne faites pas fonctionner les composants importants près de leur pleine capacité. Fixez des seuils d'alerte qui préviennent à temps pour agir.
7. **Tester la performance avant les utilisateurs.** Menez des tests de charge et de contrainte sur des scénarios réalistes avant les mises en production majeures et avant les pics connus. Apprenez où le système casse.
8. **Prévoir et vérifier.** Faites une prévision avec ses hypothèses, comparez-la régulièrement aux valeurs réelles et ajustez. Partagez des fourchettes, non des chiffres uniques.
9. **Surveiller la queue.** Rapportez la latence en percentiles et les taux d'erreur, et examinez les requêtes les plus lentes. Les moyennes masquent l'expérience des utilisateurs malchanceux.
10. **Peser ouvertement coût et risque.** Montrez aux responsables le coût de chaque niveau de disponibilité et de capacité, et consignez la décision et qui l'a prise.

## Questions à discuter avec votre équipe

**Que perdraient nos utilisateurs si ce service était en panne une heure, et notre objectif y correspond-il ?**
Cela relie les objectifs à l'impact. Attendez-vous à ce que différents utilisateurs répondent différemment. Demandez des exemples réels. Demandez ensuite d'écrire l'objectif avec un coût et de le vérifier avec un client.

**Quels sont nos points uniques de défaillance, y compris ceux qui ne sont pas des machines ?**
Dessinez les dépendances d'un service critique. Attendez-vous à des surprises : un certificat que personne ne suit, un seul ingénieur, un fournisseur sans solution de secours. Demandez ensuite d'en choisir un à réduire.

**Quand avons-nous testé la bascule pour la dernière fois, et qu'est-il arrivé ?**
Demandez la date et le résultat. Attendez-vous à « jamais » ou « cela a marché dans l'environnement de test ». Demandez ensuite de planifier une répétition avec un temps de rétablissement énoncé.

**Quelle est l'heure la plus chargée de l'année pour ce service, et sommes-nous prêts ?**
Pensez aux échéances, aux lancements et aux soldes. Demandez ce qui s'est passé la dernière fois. Demandez ensuite de planifier un test de charge pour le prochain pic.

**Quelle était l'exactitude de nos trois dernières prévisions de capacité ?**
Cela teste l'apprentissage. Attendez-vous à ce que personne n'ait vérifié. Comparez les prévisions aux valeurs réelles. Demandez ensuite de convenir d'un cycle de revue et de consigner les hypothèses.

**Comment l'IA pourrait-elle aider à prévoir la demande ou à détecter tôt les problèmes, et comment saurions-nous qu'elle a tort ?**
L'IA peut trouver des motifs dans la télémétrie. Elle peut aussi ajuster du bruit. Demandez qui en est responsable et à quoi elle sera comparée. Demandez ensuite de faire tourner une prévision d'IA à côté de la méthode existante pendant un trimestre.

## En pratique : un exemple de gestion des services

Une agence nationale de prêts étudiants exploite un portail de candidatures. Pendant la plus grande partie de l'année, il traite quelques milliers d'utilisateurs par jour. Les deux derniers jours avant la date limite annuelle de candidature, il en traite bien plus de cent fois plus. Il y a deux ans, il est tombé en panne le dernier soir ; l'an dernier, il a survécu grâce à une mise à l'échelle d'urgence et une nuit d'heures supplémentaires.

La responsable du service commence en janvier, bien avant la prochaine échéance. Elle demande les données de trafic des trois dernières années, heure par heure, et constate un profil constant : une lente montée pendant la dernière semaine, une forte montée le dernier jour et un pic dans les trois dernières heures. Elle demande à l'équipe d'identifier les points uniques de défaillance. Ils découvrent que le portail dépend d'un service de vérification d'identité exploité par un fournisseur avec une limite de débit fixe, qui plafonnerait le débit à environ la moitié du pic attendu.

L'équipe fait trois choses. Elle négocie une limite de débit plus élevée avec le fournisseur et obtient une hausse temporaire pour la dernière semaine. Elle mène des tests de charge en mars et en juin en reprenant le profil de l'année précédente majoré de 30 %, et constate que la base de données devient le goulot d'étranglement à environ 70 % du pic attendu, ce qu'elle corrige en ajoutant un réplica en lecture et en mettant en cache quelques requêtes coûteuses. Et elle prépare un mode dégradé : le dernier jour, les fonctionnalités non essentielles comme le simulateur d'épargne sont désactivées si la charge dépasse un seuil.

Le jour de l'échéance, le portail absorbe le pic. Le service d'identité ralentit à l'heure la plus chargée mais ne tombe pas, et le mode dégradé est activé une fois, pendant 40 minutes. Ce qui change : pas de panne et pas de crise d'heures supplémentaires. Ce qui reste difficile : la limite du fournisseur est une question contractuelle qui se remet à zéro chaque année ; la prévision d'une hausse de 30 % était une hypothèse, et la hausse réelle a été de 22 %, si bien que l'équipe a peut-être trop dépensé ; et personne n'a testé la défaillance complète d'une région, qui arrêterait encore le service. La responsable consigne cela dans le plan de l'an prochain.

## Quatre perspectives

### Équipes produit et de livraison

Concevez pour la défaillance et pour la charge : rendez les composants indépendants, testez la performance en construisant et connaissez vos limites. Incluez dans la conception des modes dégradés et des limites de débit.

### Équipes de service et d'exploitation

Connaissez le profil de demande et la marge de capacité. Répétez la bascule, surveillez la queue lente et avertissez tôt des tendances. Gardez à jour la carte des dépendances.

### Direction et gouvernance

Décidez des niveaux de disponibilité et de capacité en gardant un œil sur le coût et le risque, et demandez les preuves qui les fondent. Financez les tests et les répétitions, pas seulement l'équipement. Soyez attentifs aux pics connus.

### Clients et utilisateurs

Dites au fournisseur vos périodes les plus chargées et ce que coûte une défaillance pour vous. Demandez quel niveau de disponibilité est prévu et ce qui se passe quand il n'est pas atteint.

## Agilité, IA, automatisation et analytique

### Agilité

Incluez le travail de fiabilité et de performance dans le backlog, testez tôt et souvent dans le pipeline et tirez les leçons de chaque incident et de chaque pic. Attention : repousser la fiabilité à « plus tard » accumule une dette qui fait surface au pire moment.

### IA

L'IA peut détecter des anomalies, prévoir la demande à partir de l'historique et des événements, et suggérer des actions de mise à l'échelle, avec des responsables et des décisions humaines sur le coût et le risque. Attention : un modèle entraîné sur des jours normaux peut échouer face à des événements sans précédent ; comparez-le à des références simples et gardez une personne redevable. Voir le Sujet 5.2 — AIOps.

### Automatisation

Automatisez la mise à l'échelle, la bascule, les contrôles de santé et les tests de charge dans le pipeline, avec limites et journaux. Attention : la mise à l'échelle automatique peut faire grimper les coûts ou masquer une mauvaise mise en production ; fixez des budgets et des alertes, et testez les règles de mise à l'échelle. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Collectez la demande, l'utilisation, les percentiles de latence, les taux d'erreur et l'exactitude des prévisions. Attention : les objectifs d'utilisation peuvent être détournés en déplaçant la charge, et les moyennes masquent la queue lente ; vérifiez avec des données d'expérience utilisateur. Voir le Sujet 7.5 — Analytique prédictive et prévision et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Des objectifs par habitude.** Les « cinq neuf » sont promis sans raison. Fixez les objectifs d'après le besoin des utilisateurs et le coût.
- **Des points uniques de défaillance cachés.** Un certificat ou une personne arrête tout. Cartographiez les dépendances largement.
- **Une bascule non testée.** Elle échoue quand on en a besoin. Répétez régulièrement.
- **Planifier pour les moyennes.** Les pics submergent le système. Planifiez pour les pics connus et laissez de la marge.
- **Des prévisions jamais vérifiées.** Les erreurs se répètent. Comparez les prédictions aux valeurs réelles.
- **La mise à l'échelle automatique comme remède universel.** Les coûts et les goulots d'étranglement demeurent. Testez les limites et fixez des budgets.
- **Seulement des moyennes.** La queue lente est ignorée. Rapportez des percentiles.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Disponibilité | Réactive | Objectifs pour les services clés | Objectifs, redondance et bascule testés | Disponibilité mesurée à l'aune de l'expérience utilisateur | Disponibilité conçue et gérée entre services et fournisseurs |
| Capacité | Ajoutée quand elle manque | Surveillance de base | Profils de demande connus et prévus avec des hypothèses | Exactitude des prévisions examinée | Capacité planifiée et ajustée automatiquement sous supervision |
| Performance | Plaintes seulement | Quelques mesures | Objectifs en percentiles et tests de charge avant les mises en production | Tendances et régressions de performance suivies | Performance conçue tout au long du cycle de vie |
| Conscience des coûts | Inconnue | Connue approximativement | Arbitrages documentés avec les responsables | Coût et risque examinés régulièrement | Coût, risque et fiabilité optimisés ensemble |

## Liste de contrôle

- [ ] Les objectifs de disponibilité reposent sur le besoin des utilisateurs et le coût, avec une définition claire.
- [ ] Les points uniques de défaillance des services importants sont cartographiés et suivis.
- [ ] La bascule a été répétée et chronométrée.
- [ ] Nous connaissons notre profil de demande et les pics à venir.
- [ ] Nous menons des tests de charge avant les mises en production majeures et les pics connus.
- [ ] Les prévisions consignent leurs hypothèses et sont comparées aux valeurs réelles.
- [ ] Nous rapportons la latence en percentiles et les taux d'erreur.
- [ ] Les arbitrages de coût et de risque sont consignés avec les responsables.

## Invites d'IA

**Trouver les points uniques de défaillance.**

```text
Here is a description of how [service] works and what it depends on: [paste].
List each component and dependency, and for each one say what the description implies would happen if it failed, or "not stated". Mark candidate single points of failure and questions to ask. Do not assume redundancy that is not described.
List what you are unsure of.
```

**Résumer les profils de demande.**

```text
Here is hourly request data for [period]: [paste summary or data].
Describe the daily, weekly, and seasonal patterns you can see, give the peak-to-average ratio, and list dates that look unusual. Do not forecast.
List what you are unsure of.
```

**Rédiger un plan de test de charge.**

```text
Our service: [describe]. Expected peak: [number and pattern]. Known limits or concerns: [list].
Draft a test plan with scenarios, load levels, what to measure, what would make us stop, and risks of testing. Specify that it is run only in a safe environment.
List what you are unsure of.
```

## Compétences d'IA

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md) : à utiliser pour prévoir la demande et planifier les ressources.
- [load-testing](../../../../skills/load-testing/SKILL.md) : à utiliser pour concevoir et mener des tests de charge.
- [performance-testing](../../../../skills/performance-testing/SKILL.md) : à utiliser pour examiner la rapidité et la réactivité.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md) : à utiliser pour estimer la demande future avec une incertitude énoncée.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md) : à utiliser pour tester la propagation des défaillances.

## Sources principales

- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016) : chapitres sur la gestion de la surcharge et l'équilibrage de charge, gratuits sur sre.google.
- PeopleCert, pages de certification ITIL : la description des pratiques de disponibilité et de capacité par le propriétaire.
- Wikipedia, « High availability » et « Capacity planning » : des aperçus des idées principales.
- Wikipedia, « Queueing theory » : les mathématiques derrière l'attente et la saturation.

## Références

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
