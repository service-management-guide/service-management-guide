# Gestion de la configuration

**La gestion de la configuration tient une image exacte et utilisable des composants qui forment vos services et de leurs liens, afin de pouvoir juger l'impact d'un changement ou d'une défaillance ; les équipes modernes obtiennent cette image grâce à l'infrastructure as code et à la découverte, la base de données de configuration n'en étant qu'une vue, non une liste tenue à la main.**

## Pourquoi c'est important

Quand un serveur de base de données tombe à 2 h du matin, la première question est de savoir ce qui en dépend. Quand quelqu'un propose de modifier une règle réseau, la première question est de savoir ce que cela pourrait casser. Quand un auditeur demande comment un service est construit, la première question est de savoir où la vérité est écrite. Ces trois situations demandent la même chose : une image à jour et fiable de ce qui existe et de la façon dont les parties se relient.

De nombreuses organisations essaient de la fournir avec une base de données de gestion de configuration (CMDB) : une base d'éléments de configuration et de relations. Beaucoup constatent aussi qu'elle devient un cimetière d'enregistrements périmés, tenus à la main, auxquels personne ne se fie. Les enregistrements sont périmés en quelques semaines, parce que le parc réel change plus vite que quiconque ne peut mettre à jour un formulaire. La CMDB devient un artefact de conformité, non un outil.

Deux idées sauvent la pratique. D'abord, traiter la définition de l'infrastructure comme du code en gestion de versions, de sorte que la source de vérité soit ce qui crée le système, non une description de celui-ci. Ensuite, alimenter l'image automatiquement à partir de la découverte et de ce code, et s'en servir pour des questions précises : impact d'un changement, périmètre d'un incident, responsabilité. Ce sujet explique la pratique et ses écueils. Il se relie à la gestion des actifs (Sujet 4.1 — Gestion des actifs), à l'habilitation des changements (Sujet 3.4 — Habilitation des changements), à l'infrastructure as code (Sujet 6.3 — Infrastructure as Code et GitOps) et au catalogue de services (Sujet 3.8 — Gestion du catalogue de services).

## Concepts clés

**Gestion de la configuration.** Au sens d'ITIL, la pratique qui consiste à veiller à ce que des informations exactes et fiables sur la configuration des services, et sur les éléments de configuration qui les soutiennent, soient disponibles quand et où on en a besoin. En ingénierie, la « gestion de la configuration » désigne aussi la discipline qui consiste à maintenir les systèmes dans un état connu et cohérent. Wikipedia décrit la gestion de la configuration au sens large. Ce guide emploie les deux sens et dit lequel.

**Élément de configuration (CI).** Tout composant qui doit être géré pour fournir un service informatique. Wikipedia décrit les éléments de configuration. Les exemples comprennent serveurs, applications, bases de données, équipements réseau, ressources cloud, certificats et parfois documents et contrats. Chaque CI a des attributs (type, version, responsable, état) et des relations avec d'autres CI.

**Base de données de gestion de configuration (CMDB).** Un référentiel de CI, de leurs attributs et de leurs relations. Wikipedia décrit la CMDB. Une CMDB n'est pas un tableur d'actifs : sa valeur tient aux relations, qui permettent des questions comme « quels services utilisent cette base de données ? ».

**Système de gestion de configuration (CMS).** L'ensemble plus large d'outils et de données qui donnent une vue de la configuration à travers plusieurs sources. ITIL décrit un CMS qui fédère des données de plusieurs endroits, non une base unique. Wikipedia décrit les systèmes de bases de données fédérées comme un moyen de combiner des sources sans les copier.

**Carte de services.** Une vue qui montre comment un service dépend de ses composants. Une carte technique de services relie applications, bases de données, serveurs et réseaux. Une vue métier relie les services aux personnes et aux processus qu'ils soutiennent. Les cartes servent lors des incidents et des changements. Voir le Sujet 3.8 — Gestion du catalogue de services.

**Références et dérive.** Une référence (baseline) est une configuration connue et approuvée à un moment donné. La dérive est l'écart entre la référence et ce qui fonctionne réellement, souvent dû à des changements manuels. Wikipedia décrit les références en gestion de la configuration. Détecter et corriger la dérive garde les systèmes cohérents et sûrs.

**Infrastructure as code (IaC).** Définir l'infrastructure, comme les serveurs, les réseaux et les ressources cloud, dans des fichiers texte stockés en gestion de versions et appliqués par des outils. Wikipedia décrit l'infrastructure as code. Des outils comme Terraform, Ansible et les manifestes Kubernetes expriment l'état souhaité, et l'outil fait correspondre la réalité. Le code est à la fois la documentation et le mécanisme. Voir le Sujet 6.3 — Infrastructure as Code et GitOps.

**Idempotence et état souhaité.** De bons outils de configuration peuvent être exécutés à répétition avec le même résultat : ils ne font que le nécessaire pour atteindre l'état décrit. Wikipedia décrit l'idempotence. Cela permet de réappliquer la configuration sans risque pour détecter et corriger la dérive.

**Source de vérité.** L'endroit où un fait fait autorité. Pour la configuration souhaitée, c'est le dépôt de code ; pour ce qui fonctionne réellement, c'est la découverte ou l'état propre de la plateforme ; pour la responsabilité, ce peut être le catalogue ou un registre d'équipes. Décidez de la source pour chaque type de fait et évitez de tenir à la main le même fait à deux endroits. Wikipedia décrit l'idée de source unique de vérité.

**Découverte.** Des outils qui parcourent réseaux, comptes cloud et plateformes pour trouver ce qui existe et comment c'est relié. La découverte trouve ce que personne n'a consigné, mais elle produit beaucoup de détails et un peu de bruit, et exige des règles sur les éléments à garder et leur nommage.

**Relations et analyse d'impact.** Savoir que l'application A utilise la base de données B permet de demander ce qui est touché si B change ou tombe. Wikipedia décrit l'analyse d'impact des changements et les graphes de dépendances. Les bases de données de graphes, décrites sur Wikipedia, sont un moyen de stocker et d'interroger des relations. L'analyse d'impact ne vaut que ce que valent les relations consignées.

**Qualité des données.** L'exactitude, l'exhaustivité et l'actualité déterminent la valeur des données. Définissez quels attributs comptent et quelle fraîcheur ils doivent avoir. Un plus petit ensemble de données exactes est plus utile qu'un grand ensemble de données peu fiables. Voir le Sujet 7.2 — Fondements et gouvernance des données.

**Périmètre.** N'essayez pas de tout consigner. Choisissez les CI et les relations dont vous avez besoin pour vos décisions : services critiques, leurs principaux composants et leur responsabilité. Élargissez à mesure que la valeur est démontrée.

**Responsabilité.** Chaque CI ou groupe a un responsable qui répond de lui et des données qui le concernent. Sans responsabilité, les données se dégradent.

**Conteneurs et cloud.** Les plateformes modernes créent et détruisent des ressources sans cesse. Un enregistrement d'un conteneur individuel n'a plus de sens une heure plus tard. Suivez au niveau qui compte, comme le service et le déploiement, et utilisez des étiquettes pour relier les ressources aux responsables et aux services.

**Comment les angles s'articulent.** La gestion de la configuration soutient l'agilité et la livraison continue en rendant les environnements reproductibles. L'IA peut aider à découvrir des relations, suggérer des liens manquants et répondre à des questions d'impact, sous relecture. L'automatisation applique la configuration et tient l'image à jour. L'analytique utilise les données pour trouver des risques et des coûts.

## Bonnes pratiques

1. **Partir des questions auxquelles il faut répondre.** Listez les décisions que les données soutiendront, comme l'impact d'un changement, le périmètre d'un incident et la responsabilité. Ne consignez que ce qui y répond.
2. **Traiter le code comme source de vérité de l'état souhaité.** Définissez l'infrastructure et la configuration en gestion de versions, relisez les changements et appliquez-les avec des outils. Évitez les modifications manuelles sur les systèmes en production.
3. **Alimenter l'image automatiquement.** Utilisez la découverte et les données de plateforme pour alimenter la CMDB ou la carte de services, et réconciliez avec le code. Limitez la saisie manuelle aux faits qui ne peuvent pas être découverts, comme la responsabilité.
4. **Définir la source de chaque fait.** Pour chaque attribut, décidez où il fait autorité et où des copies sont permises. Montrez la source et l'heure de la dernière mise à jour.
5. **Cartographier d'abord les services critiques.** Construisez des cartes de services pour les services les plus importants, y compris les dépendances envers les fournisseurs et les plateformes partagées. Testez-les sur un incident ou un changement réel.
6. **Détecter et corriger la dérive.** Comparez l'état réel à l'état souhaité selon un calendrier et alertez sur les différences. Traitez une dérive répétée comme un signal sur le processus ou les accès.
7. **Nommer un responsable pour chaque élément et pour la qualité des données.** Montrez les responsables dans les enregistrements. Examinez régulièrement les enregistrements périmés et orphelins.
8. **Relier la configuration aux enregistrements de changements et d'incidents.** Facilitez la visibilité, depuis un changement, des CI qu'il touche et, depuis un incident, des CI concernés. Vérifiez que les liens sont utilisés.
9. **Utiliser les étiquettes de façon cohérente.** Dans les environnements cloud, exigez des étiquettes de responsable, de service et d'environnement à la création et faites-les respecter dans le pipeline.
10. **Mesurer l'utilité.** Suivez la fréquence d'usage des données dans les changements et les incidents et la fréquence à laquelle elles étaient fausses. Corrigez les causes et retirez les données que personne n'utilise.

## Questions à discuter avec votre équipe

**Quelles décisions voulons-nous que les données de configuration soutiennent, et les soutiennent-elles aujourd'hui ?**
Partez de l'usage. Attendez-vous à des réponses comme l'impact d'un changement et le périmètre d'un incident. Essayez sur un changement récent. Demandez ensuite de choisir un usage et d'y confronter les données.

**Où se trouve la description vraie de notre infrastructure : dans le code, dans une base de données, dans la tête des gens ?**
Demandez la source de vérité pour trois systèmes. Attendez-vous à plusieurs réponses. Demandez ensuite de choisir un système et de déplacer sa définition en gestion de versions.

**Quand la CMDB nous a-t-elle induits en erreur pour la dernière fois, et pourquoi ?**
Demandez un cas réel. Attendez-vous à des relations périmées ou manquantes. Cherchez la cause, comme la saisie manuelle. Demandez ensuite de choisir une source de données à automatiser.

**Comment apprenons-nous que quelqu'un change un système en production à la main ?**
Cela teste la détection de dérive. Attendez-vous à « nous ne l'apprenons pas ». Demandez ensuite de convenir d'une analyse sur un système et d'une règle sur la suite.

**Qui est responsable de chacun de nos éléments de configuration critiques, et comment trouverions-nous le responsable à 3 h du matin ?**
Demandez où la responsabilité est consignée. Essayez avec quelques éléments. Demandez ensuite d'ajouter des étiquettes de responsable et de les vérifier.

**Comment l'IA pourrait-elle aider à garder notre image de configuration exacte, et que vérifierions-nous à la main ?**
L'IA peut suggérer des relations et repérer des anomalies. Elle peut aussi inventer des liens. Demandez qui est responsable de l'usage et comment les erreurs sont repérées. Demandez ensuite de comparer les relations suggérées par l'IA à une carte vérifiée manuellement pour un service.

## En pratique : un exemple de gestion des services

L'équipe numérique d'une compagnie nationale de chemins de fer exploite une plateforme de billetterie composée d'une soixantaine de services répartis sur deux fournisseurs de cloud et un ancien centre de données sur site. La CMDB contient 40 000 enregistrements, saisis pour la plupart à la main, et l'équipe d'exploitation dit qu'elle se trompe environ une fois sur trois. Lors d'une panne récente, la défaillance d'une file de messages a arrêté la vente de billets ; personne ne s'était rendu compte que le programme de fidélité l'utilisait aussi jusqu'à ce que des clients se plaignent.

Le responsable de la plateforme se fixe un objectif plus étroit : pour les dix services les plus critiques, la carte de services doit être assez correcte pour répondre en cinq minutes à « qu'est-ce qui est touché si ce composant tombe ? ». L'équipe définit chacun des dix services en code, avec les responsables et les dépendances déclarés comme étiquettes dans les définitions. Une tâche de nuit lit la plateforme cloud et le dépôt de code, construit la carte et signale les différences entre les deux. Le centre de données est couvert par la découverte, et sa sortie est mise en correspondance avec les mêmes noms de services avec une relecture manuelle pour les nouveaux éléments.

En un trimestre, la carte des dix services est digne de confiance. À l'incident suivant, une base de données défaillante du service de paiements montre les cinq services qui y lisent, et l'équipe prévient leurs responsables en quelques minutes. Un rapport de dérive trouve 14 changements manuels en production, dont trois sont des règles de groupes de sécurité ouvertes lors d'un ancien incident et jamais refermées.

Ce qui change : les incidents et les changements commencent désormais par une carte, et l'ancienne CMDB est retirée pour ces services. Ce qui reste difficile : les 50 autres services ne sont pas encore couverts, et les équipes qui les possèdent voient peu de raisons de faire le travail ; la découverte du centre de données produit encore du bruit ; et certaines dépendances, comme l'API d'un fournisseur, ne peuvent pas être découvertes et sont saisies à la main. Le responsable de la plateforme choisit les dix services suivants d'après l'historique des incidents et négocie du temps avec leurs responsables.

## Quatre perspectives

### Équipes produit et de livraison

Définissez votre infrastructure et votre configuration en code, étiquetez les ressources avec les responsables et les services, et évitez les modifications manuelles sur les systèmes en production. Gardez à jour l'information de dépendances dans le cadre de votre conception.

### Équipes de service et d'exploitation

Utilisez la carte lors des incidents et des changements et signalez où elle est fausse. Détectez la dérive, refermez les changements temporaires et gardez à jour les données de responsabilité.

### Direction et gouvernance

Demandez des preuves que les données sont utilisées et exactes, non un nombre d'enregistrements. Financez l'automatisation et la discipline de responsabilité. Soutenez la règle selon laquelle les changements en production passent par le code.

### Clients et utilisateurs

Vous profitez de fournisseurs qui savent ce qui dépend de quoi : diagnostic plus rapide et moins de surprises dues aux changements. Demandez si les services sur lesquels vous comptez ont des responsables et des cartes d'impact.

## Agilité, IA, automatisation et analytique

### Agilité

Construisez l'image par petites étapes, en commençant par les services les plus critiques, et améliorez-la avec ceux qui l'utilisent. Examinez son utilité après les incidents. Attention : un projet CMDB en bloc répète les échecs anciens ; commencez par des questions et quelques services.

### IA

L'IA peut suggérer des relations à partir de journaux et de traces, répondre en langage naturel à des questions d'impact et trouver des valeurs aberrantes, avec un responsable et une vérification humaine. Attention : l'IA peut déduire des dépendances qui n'existent pas ou manquer de réelles ; validez par rapport à des incidents connus. Voir le Sujet 5.2 — AIOps.

### Automatisation

Automatisez la découverte, la réconciliation, la détection de dérive et l'application des étiquettes, avec journaux et revue des exceptions. Attention : un import automatique peut inonder la base d'enregistrements de faible valeur ; filtrez selon ce qui soutient les décisions. Voir le Sujet 6.3 — Infrastructure as Code et GitOps.

### Analytique

Regardez l'exhaustivité des données pour les services critiques, l'exactitude constatée lors des incidents, le nombre de dérives, le temps pour trouver le responsable et l'usage des données dans les changements. Attention : compter les enregistrements ou les champs remplis encourage le volume plutôt que l'exactitude ; mesurez la fréquence à laquelle les données ont aidé et celle à laquelle elles ont induit en erreur. Voir le livre *Service Management Metrics* et le Sujet 7.2 — Fondements et gouvernance des données.

## Modes d'échec courants

- **Une CMDB remplie à la main.** Les données se dégradent vite. Alimentez-la par la découverte et le code.
- **Tout consigner.** Le bruit masque la valeur. Cadrez le périmètre sur les décisions.
- **Deux sources pour le même fait.** Elles divergent. Déclarez une seule source.
- **Pas de responsabilité.** Personne ne corrige les erreurs. Attribuez des responsables.
- **Des modifications manuelles de systèmes en production.** La dérive grandit. Changez par le code et détectez la dérive.
- **Des relations manquantes.** L'analyse d'impact échoue. Cartographiez d'abord les services critiques.
- **Suivre des ressources éphémères.** Les enregistrements sont périmés instantanément. Suivez au niveau du service, avec des étiquettes.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Périmètre | Flou | Principaux serveurs listés | Services critiques et dépendances cartographiés | Périmètre étendu selon la valeur et les incidents | Large couverture du parc et des fournisseurs |
| Source de vérité | Tableurs et mémoire | Une partie de l'infrastructure en code | État souhaité en code, état réel par la découverte | Réconciliation automatisée et surveillée | Vue unique coordonnée alimentée par le code, la découverte et les plateformes |
| Qualité des données | Inconnue | Contrôles ponctuels | Attributs et fraîcheur définis | Exactitude mesurée lors des incidents et des changements | Qualité assurée en continu avec revue humaine |
| Usage | Rarement utilisées | Utilisées lors de certains incidents | Utilisées couramment lors des changements et des incidents | Usage et valeur suivis | Les données pilotent le risque, le coût et la planification entre services |

## Liste de contrôle

- [ ] Nous avons listé les questions auxquelles nos données de configuration doivent répondre.
- [ ] L'état souhaité des systèmes clés vit en gestion de versions.
- [ ] La découverte alimente nos cartes de services et est réconciliée avec le code.
- [ ] Chaque fait a une source de vérité définie.
- [ ] Les services critiques ont des dépendances cartographiées, testées sur des événements réels.
- [ ] Nous détectons et corrigeons la dérive de configuration.
- [ ] Chaque élément de configuration ou groupe a un responsable.
- [ ] Nous mesurons la fréquence à laquelle les données aident et celle à laquelle elles induisent en erreur.

## Invites d'IA

**Trouver les dépendances manquantes à partir d'un incident.**

```text
Here is the timeline of an incident, with the services that were affected: [paste]. Here is our service map for the failing component: [paste].
List affected services that the map does not show as dependent on the failing component, and for each give a question to verify the link. Do not infer dependencies without evidence in the timeline.
List what you are unsure of.
```

**Comparer l'état souhaité et l'état réel.**

```text
Here is the desired configuration from our code: [paste]. Here is what discovery found running: [paste].
List differences by type (missing, extra, changed), and for each one a question about why it differs. Do not recommend fixes.
List what you are unsure of.
```

**Rédiger des règles d'étiquettes de responsabilité.**

```text
Our cloud resources are used by these teams and services: [list]. Tags we want on every resource: [list].
Draft a tagging standard of under one page with rules, allowed values, and how to enforce it in the pipeline. Do not name specific tools unless I list them.
List what you are unsure of.
```

## Compétences d'IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md) : à utiliser pour concevoir et entretenir les enregistrements de configuration et les relations.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour suivre les dépendances dans un processus ou un système.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md) : à utiliser pour dessiner des cartes de services en texte.
- [data-quality](../../../../skills/data-quality/SKILL.md) : à utiliser pour définir et vérifier la qualité des données de configuration.

## Sources principales

- PeopleCert, pages de certification ITIL : la description de la pratique de gestion de la configuration des services par le propriétaire.
- Kief Morris, *Infrastructure as Code* (2e édition, 2020) : un guide pratique pour définir et gérer l'infrastructure en code.
- Wikipedia, « Configuration management » et « Configuration management database » : des aperçus des idées.
- Wikipedia, « Infrastructure as code » : l'approche d'ingénierie de l'état souhaité.

## Références

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
