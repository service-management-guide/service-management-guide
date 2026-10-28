# Fondements et gouvernance des données

**Une bonne analytique et une IA sûre reposent sur des données de service définies, attribuées, exactes, traçables, protégées et conservées seulement le temps nécessaire ; la gouvernance des données donne à chaque jeu de données important un responsable nommé, une définition claire, un contrôle de qualité et des règles d'accès et de conservation.**

## Pourquoi c'est important

La raison la plus courante pour laquelle une analyse déçoit n'est pas la méthode. C'est la donnée. Les catégories de tickets ont été modifiées au printemps dernier et personne n'a consigné quand. Deux systèmes prétendent chacun détenir le service du client, et ne sont pas d'accord. Les horodatages sont dans des fuseaux horaires différents. Un champ qui paraît complet est rempli de « autre » dans la moitié des enregistrements. Un tableau de bord montre une baisse des incidents, et la cause se révèle être un changement de journalisation, non un meilleur service.

Les mêmes problèmes abîment l'IA. Un modèle entraîné sur des tickets mal étiquetés apprend les étiquettes. Un assistant ancré dans des articles périmés les cite. Une prévision construite sur un historique incomplet reporte les lacunes en avant. À mesure que les organisations s'appuient sur l'analytique et l'IA, la qualité, la responsabilité et la protection des données cessent d'être une affaire technique d'arrière-plan et deviennent un service à part entière.

La gouvernance des données est la pratique qui consiste à gérer les données comme un actif : décider qui est responsable, ce que signifie chaque terme, comment la qualité est vérifiée, comment les données circulent et d'où elles viennent, qui peut les utiliser et quand elles sont supprimées. Wikipedia décrit la gouvernance des données comme la gestion globale de la disponibilité, de l'utilisabilité, de l'intégrité et de la sécurité des données. Ce sujet la décrit en termes pratiques pour les données de gestion des services et montre comment commencer petit. Il sous-tend l'analytique (Sujet 7.1 — Analytique pour la gestion des services), la mesure (Sujet 7.3 — Mesure et reporting), l'observabilité (Sujet 7.4 — Observabilité et télémétrie) et l'IA (Sujet 5.6 — Gouvernance, risques et conformité de l'IA), et se relie aux données de configuration (Sujet 4.4 — Gestion de la configuration). Il ne donne aucun conseil juridique.

## Concepts clés

**Actif de données.** Un jeu de données de valeur pour l'organisation, comme l'historique des tickets, la base de données de configuration, les données de surveillance, les résultats d'enquêtes ou les données de coûts. Comme d'autres actifs, il a un responsable, un coût, un cycle de vie et des risques. Voir le Sujet 4.1 — Gestion des actifs.

**Responsable et intendant des données.** Un responsable des données répond d'un jeu de données : sa finalité, sa qualité et qui peut l'utiliser. Un intendant des données (data steward) s'en occupe au quotidien, en traitant les définitions, les problèmes de qualité et les demandes d'accès. Wikipedia décrit les intendants de données. Dans les petites équipes, une même personne peut tenir les deux rôles. Sans personnes nommées, personne ne corrige les problèmes.

**Définitions et dictionnaire de données.** Un énoncé simple de ce que signifie chaque champ et chaque terme, comme « résolu » ou « incident majeur », avec la manière dont il est calculé et la source. Wikipedia décrit les dictionnaires de données. Les définitions évitent que deux équipes emploient le même mot pour des choses différentes. Consignez les changements de définitions avec des dates, afin que les tendances puissent être interprétées.

**Métadonnées.** Des données sur les données : d'où elles viennent, quand elles ont été mises à jour, qui en est responsable, comment elles sont classées et ce qu'elles signifient. Wikipedia décrit les métadonnées. Un catalogue de données est un inventaire consultable des jeux de données et de leurs métadonnées, qui aide les gens à trouver les données et à leur faire confiance.

**Qualité des données.** L'aptitude à l'usage, généralement décrite par des dimensions comme l'exactitude, l'exhaustivité, la cohérence, l'actualité et l'unicité. Wikipedia décrit la qualité des données. La qualité est relative à l'usage : une catégorie de tickets suffisante pour une tendance mensuelle peut être trop grossière pour l'orientation. Mesurez-la sur les champs qui comptent et corrigez les causes à la source. Le nettoyage des données, décrit sur Wikipedia, corrige les erreurs après coup et n'empêche pas leur retour.

**Sources de mauvaise qualité.** Des champs de texte libre remplis différemment par des personnes différentes, des valeurs par défaut jamais changées, des catégories qui grossissent sans élagage, une saisie manuelle omise sous la pression, des intégrations qui perdent ou dupliquent des enregistrements et des changements de système qui modifient le sens. Corrigez-les par de meilleurs formulaires, une validation, une formation et une revue de l'intégration, non en blâmant les gens.

**Lignage et provenance.** Un enregistrement de l'origine des données et de ce qui leur est arrivé en chemin vers un rapport ou un modèle. Wikipedia décrit le lignage des données. Quand un chiffre est contesté, le lignage permet de le retracer. Il montre aussi quels rapports sont touchés quand une source change.

**Pipelines et intégration de données.** Les flux qui déplacent les données entre systèmes, souvent décrits comme extraire, transformer, charger (ETL) dans l'article de Wikipedia, et des magasins comme les entrepôts de données et les lacs de données, que Wikipedia décrit aussi. Les pipelines ont besoin de responsables, de surveillance et de tests, comme tout système de production. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

**Temps et identité.** Deux petites affaires causent de gros ennuis. Les horodatages exigent un fuseau horaire et un format cohérents, comme le suggèrent les articles de Wikipedia sur les horodatages et les fuseaux horaires ; des fuseaux mélangés produisent des trous et des pics mystérieux. Les identifiants des personnes, des services et des actifs doivent être stables et partagés entre systèmes, afin que les enregistrements puissent être reliés. La gestion des données de référence (master data management), décrite sur Wikipedia, est la discipline qui maintient la cohérence de telles données centrales.

**Classification.** Étiqueter les données par sensibilité, comme public, interne, confidentiel et restreint, et attacher des règles à chaque niveau. Wikipedia décrit la classification des données. Les données de service contiennent souvent des informations personnelles et des détails de sécurité, qui ont besoin de protection.

**Vie privée et protection.** Les données personnelles sont des informations relatives à une personne identifiable. Des lois comme le Règlement général sur la protection des données (RGPD) dans l'Union européenne fixent des règles sur la finalité, la minimisation, la conservation et les droits des personnes ; Wikipedia décrit les données personnelles et le RGPD. La minimisation des données, décrite là, signifie ne collecter et ne garder que ce dont on a besoin. Des techniques comme la pseudonymisation et l'anonymisation, décrites sur Wikipedia, réduisent le risque, bien qu'elles soient difficiles à bien faire, et qu'une anonymisation faible puisse être inversée. Prenez un avis juridique et de vie privée.

**Contrôle d'accès.** Qui peut voir ou modifier quelles données, et pourquoi. Utilisez des rôles plutôt que des individus lorsque c'est possible, et examinez régulièrement les accès. Voir le Sujet 3.13 — Gestion de la sécurité de l'information et le Sujet 3.6 — Gestion des demandes de service.

**Conservation et suppression.** Combien de temps les données sont gardées et comment elles sont détruites. Gardez ce dont vous avez besoin pour l'exploitation, l'analyse et les obligations légales, et supprimez le reste. Wikipedia décrit la conservation des données. Les vieilles données augmentent le risque et le coût, et les systèmes d'IA peuvent en apprendre. Vérifiez les exigences légales de conservation qui s'appliquent à vous.

**Souveraineté des données.** Les données peuvent relever des lois du pays où elles sont stockées ou traitées. Wikipedia décrit la souveraineté des données. Les services cloud et d'IA peuvent déplacer des données au-delà des frontières ; sachez où vont les vôtres.

**Données dans l'IA.** Les données utilisées pour l'entraînement, la récupération ou les invites exigent la même gouvernance, avec un soin supplémentaire : permission pour l'usage, étiquetage de la source, contrôle du biais et de la dérive, et maîtrise de ce qui est envoyé à des services externes. Voir le Sujet 5.1 — L'IA dans la gestion des services.

**Instance de gouvernance et politique.** Un petit groupe ayant l'autorité de fixer des normes, de trancher les conflits et de prioriser le travail sur les données, et une courte politique couvrant la responsabilité, la qualité, la classification, l'accès, la conservation et l'usage des données dans l'IA. Gardez-la légère et pratique.

**Comment les angles s'articulent.** La gouvernance des données est la base des angles analytique et IA, et l'automatisation en dépend aussi. La pratique agile suggère d'améliorer la qualité des données par petites étapes, pilotées par les questions auxquelles les gens ont réellement besoin de répondre, avec les retours des utilisateurs de données.

## Bonnes pratiques

1. **Commencer par les jeux de données qui comptent le plus.** Listez les données derrière vos décisions clés, comme les tickets, la configuration, la surveillance, les enquêtes et les coûts. Gouvernez-les d'abord.
2. **Nommer un responsable et un intendant pour chacun.** Consignez-les dans le catalogue, avec la manière de les joindre. Rendez-les redevables de la qualité et de l'accès.
3. **Écrire les définitions.** Définissez les principaux termes et champs en langage clair, avec le calcul et la source. Consignez quand les définitions changent.
4. **Mesurer la qualité là où elle compte.** Choisissez quelques champs qui pilotent les décisions, définissez des contrôles et rapportez les résultats aux responsables. Suivez-les dans le temps.
5. **Corriger les problèmes à la source.** Améliorez les formulaires, ajoutez une validation, simplifiez les catégories et corrigez les intégrations. Le nettoyage après coup est un palliatif.
6. **Normaliser le temps et les identifiants.** Utilisez une norme et un format de temps uniques, et des identifiants stables et partagés pour les personnes, les services et les actifs.
7. **Conserver le lignage.** Documentez d'où les principaux rapports et modèles tirent leurs données et quelles transformations s'appliquent. Mettez à jour quand les sources changent.
8. **Classer et protéger.** Étiquetez les données par sensibilité, appliquez des règles d'accès et de protection, et examinez qui a accès. Retirez les données personnelles là où elles ne sont pas nécessaires.
9. **Fixer la conservation et supprimer.** Décidez combien de temps chaque jeu de données est gardé et supprimez ou anonymisez ensuite. Vérifiez les règles qui s'appliquent à vous.
10. **Gouverner les données utilisées par l'IA.** Consignez les sources, les permissions et la qualité des données utilisées pour l'entraînement et la récupération, et contrôlez ce qui va vers des services externes.

## Questions à discuter avec votre équipe

**Quels jeux de données pilotent nos décisions les plus importantes, et qui est responsable de chacun ?**
Listez-les. Attendez-vous à des lacunes de responsabilité. Demandez ensuite de nommer un responsable et un intendant pour les trois premiers.

**Quels termes employons-nous différemment selon les équipes ?**
Prenez « résolu », « incident » ou « client ». Attendez-vous à du désaccord. Demandez ensuite d'écrire une définition et de dire qui tranche.

**Quand une définition ou un changement de système a-t-il cassé une tendance, et l'avons-nous remarqué à l'époque ?**
Demandez des exemples. Attendez-vous à « plus tard ». Demandez ensuite de convenir d'un journal des modifications des définitions et des sources.

**Quelle est la qualité de nos données sur les champs dont nous dépendons le plus, et comment le savons-nous ?**
Prenez un champ, comme la catégorie, et échantillonnez 50 enregistrements. Attendez-vous à des problèmes. Demandez ensuite de choisir une cause à corriger.

**Quelles données personnelles ou sensibles détenons-nous dans les systèmes de service, et combien de temps les gardons-nous ?**
Parcourez les principaux systèmes. Attendez-vous à des surprises sur les pièces jointes et les journaux de conversation. Demandez ensuite d'associer le responsable de la vie privée et de convenir d'une règle de conservation pour un système.

**Quelles données donnons-nous aux outils d'IA, et qui l'a accepté ?**
Listez les usages. Attendez-vous à ce que certains soient informels. Demandez ensuite de convenir d'une règle sur ce qui peut être utilisé et d'un registre des usages de données par l'IA.

## En pratique : un exemple de gestion des services

L'équipe des services numériques d'une bibliothèque nationale veut prévoir la demande et entraîner un modèle pour orienter les tickets. Un analyste de données commence et découvre que l'historique des tickets est difficile à utiliser. Les catégories ont été renommées deux fois, et une catégorie « Autre » contient 35 % des tickets. Les horodatages de l'ancien outil sont en heure locale et ceux du nouveau en temps universel. Le champ du service, tiré du système RH, diffère de celui du système d'identité pour environ 8 % des utilisateurs. Un rapport mensuel montre une baisse d'un quart des incidents, mais l'analyste constate qu'un changement dans la manière de fusionner les incidents en double explique l'essentiel de la baisse.

La responsable du service décide de traiter les données de tickets comme un actif gouverné. Elle se désigne responsable des données et nomme un analyste expérimenté du centre de services comme intendant. Un dictionnaire d'une page définit les 12 champs qui comptent, dont la définition de « résolu » et la date à laquelle elle a changé. L'équipe fait correspondre les anciennes catégories aux nouvelles, étiquette la rupture dans l'historique et ajoute une règle de validation qui interdit « Autre » sans note en texte libre. Une tâche hebdomadaire vérifie trois mesures de qualité : la part de tickets en « Autre », la part sans service renseigné et la part d'horodatages hors des plages attendues. Les résultats sont publiés pour le centre.

Le responsable de la vie privée examine le jeu de données et constate que les champs de texte libre et les pièces jointes contiennent des détails personnels de membres du public. L'équipe convient de retirer les pièces jointes de la copie d'analyse, de masquer noms et adresses électroniques dans le texte avant son usage pour la modélisation et de supprimer les tickets après sept ans, conformément à la politique d'archives de la bibliothèque. Un registre liste chaque usage par l'IA des données de tickets et son approbation.

Ce qui change : l'analyste peut construire la prévision avec une rupture connue et une série propre, et le modèle d'orientation est entraîné sur des étiquettes revues. Ce qui reste difficile : le masquage du texte libre est imparfait, et quelques détails personnels subsistent ; les systèmes RH et d'identité sont encore en désaccord, et leurs responsables n'ont pas accepté de les réconcilier ; et les contrôles de qualité dépendent d'un petit nombre de personnes. La responsable porte le désaccord de données devant le directeur des systèmes d'information et prévoit d'étendre les contrôles aux données de configuration.

## Quatre perspectives

### Équipes produit et de livraison

Concevez les journaux, événements et API de votre produit avec des champs, horodatages et identifiants cohérents, et documentez-les. Prévenez à l'avance les utilisateurs de données des changements.

### Équipes de service et d'exploitation

Saisissez les données avec soin et de façon cohérente, et signalez aux intendants les problèmes de formulaires ou de catégories. Aidez à vérifier la qualité et tenez des enregistrements des changements de définitions.

### Direction et gouvernance

Nommez des responsables, financez le travail sur les données et demandez des preuves de qualité pour les données derrière les décisions. Fixez des règles pour la vie privée et l'usage de l'IA. N'acceptez pas de rapports aux termes non définis.

### Clients et utilisateurs

Vous devriez savoir quelles données sont détenues à votre sujet et pourquoi, et pouvoir poser des questions à ce sujet. Fournissez des informations exactes et dites au fournisseur si des enregistrements vous semblent faux.

## Agilité, IA, automatisation et analytique

### Agilité

Améliorez les données par petites étapes pilotées par de vraies questions : corrigez le champ qui bloque la prochaine analyse. Examinez régulièrement la qualité des données avec ses utilisateurs. Attention : un programme de données de plusieurs années sans résultats visibles perd son soutien ; livrez de petits gains utiles.

### IA

L'IA peut aider à trouver des problèmes de qualité, à classer des données, à suggérer des définitions et à masquer des détails personnels, sous relecture. Les données utilisées par l'IA ont besoin de leur propre gouvernance : source, permission, qualité et contrôles de dérive. Attention : le masquage par l'IA peut manquer des données personnelles ; testez-le et gardez une revue humaine pour les ensembles sensibles. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Automatisez les contrôles de qualité, la capture du lignage, les étiquettes de classification, les règles de conservation et les revues d'accès, avec des responsables pour les exceptions. Attention : un nettoyage automatisé peut modifier silencieusement les données ; journalisez les changements et gardez les originaux lorsque c'est exigé. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Mesurez la qualité des champs clés, l'exhaustivité, l'actualité, la part de jeux de données avec responsables et définitions, et les incidents causés par des problèmes de données. Attention : un score de qualité unique peut masquer de graves défauts dans un champ ; rapportez par champ et par usage. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Pas de responsable.** Les problèmes persistent. Nommez un responsable et un intendant.
- **Des termes non définis.** Les équipes débattent des chiffres. Écrivez des définitions et consignez les changements.
- **Une qualité vérifiée une seule fois.** Les données se dégradent. Surveillez en continu les champs clés.
- **Le nettoyage comme remède.** Les erreurs reviennent. Corrigez la source.
- **Fuseaux horaires et identifiants mélangés.** Les enregistrements ne peuvent être ni joints ni ordonnés. Normalisez.
- **Tout garder.** Le risque et le coût grossissent. Fixez la conservation et supprimez.
- **Un usage non gouverné des données par l'IA.** Des données sensibles ou médiocres atteignent les modèles. Enregistrez et examinez les usages.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Responsabilité et définitions | Inconnues | Responsables des principaux jeux de données | Responsables, intendants, dictionnaire et catalogue | Définitions et changements gérés | Gouvernance coordonnée entre équipes et partenaires |
| Qualité | Inconnue | Contrôles ponctuels | Champs clés mesurés régulièrement | Améliorations de la qualité suivies jusqu'aux sources | Qualité assurée en continu avec automatisation |
| Protection | Au cas par cas | Règles d'accès de base | Règles de classification, d'accès et de conservation | Conformité surveillée et auditée | Protection intégrée aux pipelines et aux outils |
| Usage dans l'IA | Non consigné | Conscience | Registre et règles pour l'usage des données par l'IA | Usage examiné et testé pour le biais et la dérive | Données de l'IA gouvernées entre systèmes et fournisseurs |

## Liste de contrôle

- [ ] Nos jeux de données les plus importants ont des responsables et des intendants nommés.
- [ ] Les termes et champs clés sont définis par écrit, avec les dates de changement.
- [ ] Nous mesurons la qualité sur les champs qui pilotent les décisions.
- [ ] Nous corrigeons les problèmes de qualité à la source.
- [ ] Les fuseaux horaires, formats et identifiants sont normalisés.
- [ ] Nous savons d'où les principaux rapports tirent leurs données (lignage).
- [ ] Les données sont classées, l'accès est contrôlé et des règles de conservation existent.
- [ ] Un registre consigne quelles données sont utilisées par l'IA et qui l'a accepté.

## Invites d'IA

**Profiler un jeu de données.**

```text
Here is a sample of a dataset with field names, identifiers removed: [paste, 50–100 rows].
For each field, give the apparent meaning, type, share of missing or placeholder values, odd values, and a question for the data owner. Do not draw business conclusions.
List what you are unsure of.
```

**Rédiger une entrée de dictionnaire de données.**

```text
Field: [name]. What I know about it: [source, how it is filled, how it is used].
Draft a dictionary entry with: plain-language definition, allowed values, how it is calculated or entered, source system, owner (only if stated), known issues, and date of last change (only if stated). Mark each item not given as [missing].
List what you are unsure of.
```

**Trouver des données personnelles dans le texte libre pour revue.**

```text
Here is a sample of ticket free text, already partially masked: [paste].
List items that look like personal data (names, emails, phone numbers, addresses, identifiers) that remain, quoting the exact text, and suggest categories of rules to catch them. Do not guess whether any is real.
List what you are unsure of.
```

## Compétences d'IA

- [data-governance](../../../../skills/data-governance/SKILL.md) : à utiliser pour fixer la responsabilité, les définitions et les règles des données.
- [data-quality](../../../../skills/data-quality/SKILL.md) : à utiliser pour définir et vérifier la qualité des champs clés.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md) : à utiliser pour concevoir et documenter les flux de données.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md) : à utiliser pour formuler les questions de vie privée à votre conseiller juridique.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour attribuer la responsabilité et l'intendance.

## Sources principales

- DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge* : une référence large sur la gestion et la gouvernance des données.
- ISO/IEC 25012, modèle de qualité des données : un ensemble standard de caractéristiques de qualité des données ; lisez l'édition actuelle auprès de l'éditeur.
- Wikipedia, « Data governance » et « Data quality » : des aperçus de la pratique et de ses dimensions.
- Wikipedia, « General Data Protection Regulation » : contexte sur un cadre juridique important (pas un conseil juridique).

## Références

1. Data governance — Wikipedia — https://en.wikipedia.org/wiki/Data_governance
2. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
3. Data steward — Wikipedia — https://en.wikipedia.org/wiki/Data_steward
4. Data dictionary — Wikipedia — https://en.wikipedia.org/wiki/Data_dictionary
5. Metadata — Wikipedia — https://en.wikipedia.org/wiki/Metadata
6. Data lineage — Wikipedia — https://en.wikipedia.org/wiki/Data_lineage
7. Data cleansing — Wikipedia — https://en.wikipedia.org/wiki/Data_cleansing
8. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
9. Data classification — Wikipedia — https://en.wikipedia.org/wiki/Data_classification
10. Personal data — Wikipedia — https://en.wikipedia.org/wiki/Personal_data
11. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
12. Data retention — Wikipedia — https://en.wikipedia.org/wiki/Data_retention
