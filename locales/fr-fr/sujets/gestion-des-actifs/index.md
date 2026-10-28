# Gestion des actifs

**La gestion des actifs informatiques suit ce qu'une organisation possède, où cela se trouve, qui l'utilise, ce que cela coûte et quand cela doit être remplacé ou retiré ; elle fonctionne quand un seul registre fiable est tenu à jour tout au long du cycle de vie et sert à décider, pas seulement à compter.**

## Pourquoi c'est important

Demandez combien d'ordinateurs portables, de serveurs, de licences logicielles et d'abonnements cloud possède une organisation, et la réponse est généralement une estimation. Les enregistrements sont éparpillés entre les achats, la finance, l'informatique et les équipes individuelles. Du matériel est acheté et jamais enregistré, ou enregistré et perdu. Des abonnements continuent après la fin du projet qui en avait besoin. Les licences sont comptées à une date lointaine.

Les conséquences sont coûteuses. De l'argent est dépensé pour du matériel et des licences que personne n'utilise. Les audits des éditeurs de logiciels révèlent des insuffisances et entraînent des pénalités. Les équipes de sécurité ne peuvent pas corriger ce qu'elles ne savent pas exister. Quand un appareil est perdu, personne ne sait quelles données il contenait. Quand un auditeur demande des preuves de contrôle, l'organisation ne peut pas en fournir.

La gestion des actifs apporte une réponse unique et fiable à « qu'avons-nous ? », et la base des questions qui suivent : est-ce sûr, est-ce utilisé, cela vaut-il son coût, est-ce proche de la fin de vie ? Ce sujet couvre les concepts essentiels et la vue du cycle de vie des actifs informatiques en général. Des domaines précis ont leurs propres sujets : les logiciels (Sujet 4.2 — Gestion des actifs logiciels), le matériel (Sujet 4.3 — Gestion des actifs matériels) et les éléments de configuration (Sujet 4.4 — Gestion de la configuration). Les coûts renvoient au Sujet 4.5 — Gestion financière et FinOps.

## Concepts clés

**Actif.** Quelque chose de valeur que possède ou contrôle une organisation. En informatique, les actifs comprennent le matériel, les logiciels, les services cloud, les données, les licences, les contrats et parfois les personnes et les connaissances. Wikipedia décrit la gestion des actifs comme le processus systématique de développement, d'exploitation, de maintenance et de cession des actifs de façon rentable. Ce guide emploie « gestion des actifs informatiques » (ITAM) pour la pratique appliquée à la technologie.

**Actif et élément de configuration.** Un actif est suivi pour sa valeur et sa propriété, souvent avec un détail financier. Un élément de configuration (CI) est tout ce qui doit être géré pour fournir un service, suivi avec ses relations aux autres éléments. Les deux se recoupent : un serveur est les deux. Les enregistrements vivent souvent dans des systèmes différents. Voir le Sujet 4.4 — Gestion de la configuration.

**Le cycle de vie.** Un actif traverse des étapes : planifier, acquérir, déployer, exploiter et maintenir, et retirer ou céder. Chaque étape comporte des décisions et des enregistrements. L'article de Wikipedia sur le cycle de vie du produit décrit l'idée générale. Gérer le cycle de vie signifie savoir où en est chaque actif et agir au bon moment, par exemple remplacer des ordinateurs portables avant que les taux de panne montent ou renouveler des licences avant qu'elles expirent.

**Quatre vues.** Une manière utile de penser l'information sur les actifs passe par quatre vues : l'inventaire (quoi et où), la vue financière (coût, amortissement, propriété), la vue contractuelle (garantie, support, conditions de licence) et la vue opérationnelle (usage, état et performance). Chaque vue répond à des questions différentes, et l'enregistrement doit en contenir assez de chacune pour être utile.

**Inventaire et découverte.** Une liste d'actifs avec des attributs clés comme le type, le modèle, le numéro de série, l'emplacement, le responsable et l'état. Les inventaires peuvent être constitués en enregistrant les achats, en recherchant sur les réseaux les appareils et les logiciels, ou les deux. Les outils de découverte trouvent des choses jamais enregistrées et des éléments enregistrés qui n'existent plus. Aucune source n'est complète seule, et les réconcilier est le vrai travail. Wikipedia décrit l'inventaire et le suivi des actifs.

**Identification.** Chaque actif a besoin d'une identité qui survit à sa vie : une étiquette d'actif, un code-barres ou un numéro de série. Wikipedia décrit les codes-barres et l'identification par radiofréquence (RFID), utilisés pour suivre les objets physiques.

**Responsabilité et garde.** Deux questions pour chaque actif : qui en est responsable et qui l'a ou l'utilise. Ce n'est pas la même chose : une équipe peut être responsable d'un parc d'appareils que des individus détiennent. Une garde claire évite le matériel perdu.

**Coût et valeur.** Les coûts comprennent le prix d'achat, le support, les licences, l'énergie et la cession. Le coût total de possession, décrit sur Wikipedia, prend en compte toute la durée de vie, pas seulement le prix. L'amortissement, décrit sur Wikipedia, est un traitement comptable ; les équipes financières l'utilisent pour le reporting, et l'équipe ITAM devrait le comprendre.

**Actifs cloud et abonnements.** Les services cloud et les abonnements logiciels sont aussi des actifs, bien qu'ils n'aient pas de forme physique et puissent être créés en quelques minutes. Sans discipline, ils prolifèrent. Reliez-les à des responsables, des projets et des budgets dès la création. Voir le Sujet 4.5 — Gestion financière et FinOps.

**Informatique parallèle (shadow IT).** Technologie achetée et utilisée à l'insu de la fonction informatique. Wikipedia décrit le shadow IT. Il apparaît parce que la voie officielle est lente ou ne répond pas aux besoins. Traitez-le comme une information sur des besoins non satisfaits et intégrez à la gestion les outils utiles.

**Actifs de données.** Les données sont aussi des actifs, avec des responsables, une classification et des règles de conservation. Wikipedia décrit la gestion des actifs numériques, qui est apparentée. Voir le Sujet 7.2 — Fondements et gouvernance des données.

**Normes.** ISO/IEC 19770 est une famille de normes pour la gestion des actifs informatiques, décrite sur Wikipedia. Voir le Sujet 1.8 — Référentiels et normes de gestion des services.

**Durabilité.** Les décisions sur les actifs ont des effets environnementaux : énergie de fabrication, déchets électroniques et réparabilité. Wikipedia décrit les déchets électroniques et l'économie circulaire. Voir le Sujet 8.2 — Gestion des services durable et responsable.

**Comment les angles s'articulent.** La gestion des actifs est la base factuelle dont les quatre angles ont besoin. La pratique agile garde le processus léger et l'améliore avec les utilisateurs. L'IA peut aider à réconcilier les enregistrements, à repérer des anomalies et à prédire des pannes, sous relecture. L'automatisation découvre et met à jour les enregistrements. L'analytique utilise les données pour décider du remplacement, de la récupération de licences et du coût.

## Bonnes pratiques

1. **Définir ce qui compte comme actif.** Décidez quelles catégories vous suivrez et à partir de quel seuil de valeur ou de risque. Commencez par celles qui coûtent le plus ou portent le plus de risque.
2. **Tenir un seul registre faisant autorité.** Choisissez une source de vérité unique pour chaque type d'actif et reliez-y les autres. Les listes dupliquées divergent.
3. **Enregistrer à l'acquisition.** Faites de l'achat, de la réception et de l'enregistrement une seule étape reliée, afin que rien ne soit déployé sans être enregistré. Étiquetez les objets physiques à l'arrivée.
4. **Combiner enregistrements et découverte.** Utilisez la découverte automatisée pour trouver les éléments non enregistrés et manquants, et réconciliez régulièrement. Examinez chaque différence.
5. **Nommer un responsable et un gardien.** Pour chaque actif ou groupe, consignez qui en répond et qui l'a. Mettez à jour quand les gens changent de poste ou partent.
6. **Suivre tout le cycle de vie.** Consignez le déploiement, les déplacements, les changements de responsable, la réparation et le retrait. Utilisez les dates de cycle de vie pour planifier le remplacement et les renouvellements.
7. **Relier les actifs aux services et aux coûts.** Reliez chaque actif aux services qu'il soutient et au budget auquel il appartient. Cela permet l'analyse d'impact et l'imputation des coûts.
8. **Rendre la perte et la cession sûres.** Définissez ce qui se passe quand un appareil est perdu ou retiré : effacement des données, cession sécurisée, certificats et enregistrement. Vérifiez que cela a lieu.
9. **Auditer par échantillonnage.** Vérifiez à chaque période un échantillon d'enregistrements par rapport à la réalité, par exemple en vérifiant physiquement des appareils, et mesurez l'exactitude.
10. **Utiliser les données pour décider.** Examinez l'utilisation, l'âge, les pannes et le coût pour guider le remplacement, les changements de licences et la consolidation. Un enregistrement que personne n'utilise se dégrade.

## Questions à discuter avec votre équipe

**Combien d'appareils, de licences et d'abonnements avons-nous, et quelle confiance avons-nous dans chaque chiffre ?**
Interrogez différentes personnes. Attendez-vous à des réponses différentes. Demandez comment le chiffre a été produit. Demandez ensuite de choisir une catégorie et de la réconcilier correctement.

**Où des actifs entrent-ils dans notre organisation sans être enregistrés ?**
Cherchez les achats par carte, les cadeaux, les essais devenus permanents et les comptes cloud créés par des équipes. Attendez-vous à plusieurs lacunes. Demandez ensuite de combler la plus grande.

**Qui est responsable de chacune de nos catégories d'actifs ?**
La responsabilité est souvent floue pour le matériel partagé et les abonnements. Demandez des noms. Demandez ensuite d'attribuer des responsables et une date de revue.

**Que se passe-t-il quand quelqu'un perd un ordinateur portable ou quitte l'organisation ?**
Parcourez le processus étape par étape. Attendez-vous à des lacunes sur la récupération du matériel et le retrait des accès. Demandez ensuite de convenir d'une liste de contrôle et d'un responsable.

**Pour quels actifs payons-nous sans plus les utiliser ?**
Regardez les licences, les abonnements et le matériel inactif. Attendez-vous à trouver quelque chose. Demandez ensuite de choisir les trois coûts principaux et de décider de retirer, réaffecter ou renouveler.

**Comment l'IA pourrait-elle aider à garder nos données d'actifs exactes, et que vérifierions-nous à la main ?**
L'IA peut faire correspondre des enregistrements, signaler des entrées étranges et suggérer des catégories. Elle peut aussi fusionner des enregistrements à tort. Demandez qui est responsable de l'usage et comment les erreurs sont repérées. Demandez ensuite de la tester sur un échantillon par rapport à une liste réconciliée manuellement.

## En pratique : un exemple de gestion des services

Le directeur financier demande au service informatique d'une université le nombre d'ordinateurs portables en usage. Trois sources donnent trois réponses : les achats disent 4 200, le système d'identité montre 3 600 utilisateurs enrôlés avec un portable, et l'outil de gestion des terminaux voit 3 900 appareils. Le service a aussi un constat d'audit récent selon lequel les portables des personnes parties ne sont pas toujours rendus.

La responsable ITAM commence par décider du périmètre : ordinateurs portables, de bureau, tablettes et téléphones au-dessus d'une petite valeur, ainsi que les logiciels et les abonnements cloud. Elle désigne le système de gestion des terminaux comme source de vérité de ce qui est en usage, les enregistrements d'achat comme source de ce qui a été acheté, et demande au gestionnaire des actifs de réconcilier chaque mois. La première réconciliation trouve environ 300 appareils achetés et jamais vus sur le réseau, 200 vus sur le réseau et non achetés par les achats, et 90 appareils attribués à des employés qui étaient partis.

Elle met en place trois changements : des étiquettes et un enregistrement à la réception pour chaque appareil ; une liste de contrôle de départ qui relie l'événement de départ des RH à une tâche de récupération du matériel, avec une échéance ; et un échantillon trimestriel dans lequel un technicien vérifie physiquement 100 appareils. Après deux trimestres, les écarts de réconciliation diminuent des deux tiers et l'exactitude de l'échantillon est de 94 %.

Ce qui change : le directeur financier obtient un chiffre que le service peut défendre, et le processus de départ récupère des dizaines d'appareils. Ce qui reste difficile : les appareils achetés par des groupes de recherche sur subvention contournent encore les achats ; la vérification physique sur les campus éloignés repose sur un personnel occupé ; et les données sur les abonnements cloud sont dans un autre outil détenu par une autre équipe. La responsable porte les achats sur subvention et les données d'abonnements au directeur financier comme prochain morceau.

## Quatre perspectives

### Équipes produit et de livraison

Consignez les actifs que votre produit utilise : licences, services cloud et appareils. Étiquetez les ressources cloud avec le responsable et le projet dès la création, et retirez ce dont vous n'avez plus besoin.

### Équipes de service et d'exploitation

Gardez les enregistrements exacts à mesure que vous déployez, déplacez et retirez du matériel. Signalez les écarts et utilisez les données de découverte lors des incidents et des changements.

### Direction et gouvernance

Demandez un inventaire défendable et le coût de ce qui est détenu. Financez le processus et les outils. Utilisez les données pour les décisions de remplacement et de coût, et rendez les responsables redevables.

### Clients et utilisateurs

Vous détenez des actifs au nom de l'organisation. Gardez-les en sécurité, signalez rapidement toute perte et rendez le matériel quand vous partez. Dites au fournisseur les outils dont vous avez besoin et qui ne sont pas fournis.

## Agilité, IA, automatisation et analytique

### Agilité

Commencez par les catégories de plus grande valeur et améliorez le processus par petites étapes avec les utilisateurs. Examinez régulièrement l'exactitude et les points douloureux. Attention : un projet d'inventaire en bloc devient vite périmé ; prenez l'habitude d'enregistrer au fur et à mesure.

### IA

L'IA peut réconcilier des enregistrements issus de plusieurs sources, signaler des anomalies comme des appareils non vus depuis des mois et prédire des pannes à partir de l'âge et de l'historique, une personne relisant les fusions et retraits proposés. Nommez un responsable. Attention : l'IA peut fusionner deux actifs distincts ou manquer un écart ; échantillonnez sa sortie. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez la découverte, la création d'enregistrements à l'achat et à l'enrôlement, les déclencheurs de départ et les rappels de renouvellement, avec journaux. Attention : des enregistrements automatisés peuvent multiplier les doublons ; fixez des règles de correspondance et examinez les exceptions. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Regardez l'exactitude de l'inventaire, les actifs sans responsable, le profil d'âge, l'utilisation, le coût par type d'actif et les licences inutilisées. Attention : un chiffre d'exactitude élevé issu d'un petit échantillon peut induire en erreur ; échantillonnez entre lieux et types. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Plusieurs listes non réconciliées.** Personne ne connaît la vérité. Choisissez une source de vérité et réconciliez.
- **Enregistrer après le déploiement.** Des éléments sont manqués. Enregistrez à l'acquisition.
- **Pas de responsable ni de gardien.** Le matériel est perdu. Nommez les deux.
- **Payer pour l'inutilisé.** Licences et abonnements continuent. Examinez l'usage et retirez.
- **Pas de contrôle de la cession.** Des données sortent avec le matériel retiré. Effacez et consignez.
- **Des enregistrements que personne n'utilise.** Les données se dégradent. Servez-vous-en pour décider.
- **Ignorer le cloud et les abonnements.** Les coûts grossissent sans qu'on les voie. Suivez-les comme des actifs.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Inventaire | Tableurs | Un registre principal | Un seul registre réconcilié avec la découverte | Exactitude mesurée et améliorée | Inventaire en temps réel entre sites, cloud et fournisseurs |
| Cycle de vie | Non suivi | Achat et cession notés | Étapes et dates du cycle de vie consignées | Cycle de vie utilisé pour planifier remplacement et renouvellement | Cycle de vie géré entre actifs et fournisseurs avec automatisation |
| Responsabilité | Floue | Responsables pour les gros éléments | Responsable et gardien pour chaque actif | Responsabilité examinée régulièrement | Responsabilité reliée aux services et aux budgets |
| Usage des données | Comptage | Rapports de base | Coûts et utilisation utilisés dans les décisions | Économies et risques suivis | Les données pilotent la planification dans tout le portefeuille |

## Liste de contrôle

- [ ] Nous avons défini quels actifs nous suivons et le seuil.
- [ ] Une source de vérité existe pour chaque type d'actif.
- [ ] Les actifs sont enregistrés à l'acquisition, avec identification.
- [ ] La découverte et les enregistrements sont réconciliés régulièrement.
- [ ] Chaque actif a un responsable et un gardien.
- [ ] La perte, le départ et la cession ont un processus défini et vérifié.
- [ ] Nous auditons un échantillon d'enregistrements par rapport à la réalité.
- [ ] Nous utilisons les données pour guider les décisions de remplacement et de coût.

## Invites d'IA

**Réconcilier deux listes.**

```text
Here are two lists of devices from different systems, with identifiers removed where sensitive: [paste list A] and [paste list B].
List items that appear in both, items only in A, items only in B, and items that might be the same asset under different names. Show your matching reasoning and do not merge anything.
List what you are unsure of.
```

**Trouver des candidats au retrait.**

```text
Here is a list of subscriptions and licenses with cost, number of seats, and last-used dates: [paste].
List those with low or no recent use, the cost of each, and a question to ask the owner. Do not recommend cancellation.
List what you are unsure of.
```

**Rédiger une liste de contrôle de départ.**

```text
Our context: [type of organization, equipment, systems]. Our leaver triggers: [describe].
Draft a checklist for retrieving equipment and removing access, with owners and deadlines for each step, and note what could be missed. Do not add legal requirements.
List what you are unsure of.
```

## Compétences d'IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md) : à utiliser pour relier les actifs aux services qu'ils soutiennent.
- [data-governance](../../../../skills/data-governance/SKILL.md) : à utiliser pour la responsabilité et la classification des actifs de données.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md) : à utiliser pour peser les décisions de remplacement ou de retrait.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour clarifier qui est responsable de chaque catégorie d'actifs.

## Sources principales

- ISO/IEC 19770 (les normes elles-mêmes) : les exigences et recommandations pour la gestion des actifs informatiques ; lisez les éditions actuelles auprès de l'éditeur.
- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des actifs informatiques par le propriétaire.
- Wikipedia, « Asset management » et « Total cost of ownership » : des aperçus des idées.
- Wikipedia, « Shadow IT » : contexte sur la technologie non gérée.

## Références

1. Asset management — Wikipedia — https://en.wikipedia.org/wiki/Asset_management
2. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
3. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
4. Inventory — Wikipedia — https://en.wikipedia.org/wiki/Inventory
5. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
6. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
7. Depreciation — Wikipedia — https://en.wikipedia.org/wiki/Depreciation
8. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
9. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
10. Digital asset management — Wikipedia — https://en.wikipedia.org/wiki/Digital_asset_management
11. Radio-frequency identification — Wikipedia — https://en.wikipedia.org/wiki/Radio-frequency_identification
