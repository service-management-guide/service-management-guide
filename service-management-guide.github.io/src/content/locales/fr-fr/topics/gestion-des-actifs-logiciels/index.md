# Gestion des actifs logiciels

**La gestion des actifs logiciels veille à ce qu'une organisation dispose des logiciels dont elle a besoin, utilise ce qu'elle paie, respecte les conditions de licence et sache ce que contiennent ses propres logiciels ; elle couvre désormais aussi les abonnements, les composants open source et les conditions des modèles et services d'IA.**

## Pourquoi c'est important

Les logiciels sont, dans beaucoup d'organisations, l'ensemble d'actifs le plus vaste et le moins visible. Un ordinateur portable est un objet physique que l'on peut compter. Un droit d'usage logiciel est un droit défini par un contrat, qui peut dépendre des utilisateurs, des appareils, des processeurs ou de la consommation, et qui change quand l'infrastructure change. Personne ne peut le voir en regardant.

Il en résulte deux risques opposés. Une sous-licence expose l'organisation à des audits, des pénalités et parfois des actions en justice. Une sur-licence signifie payer des logiciels que personne n'utilise, souvent appelés shelfware (logiciels sur l'étagère). Wikipedia décrit le shelfware comme un logiciel acheté mais jamais utilisé. Des études d'analystes du secteur rapportent souvent de grandes parts de dépenses logicielles comme du gaspillage, bien que les chiffres varient et doivent être pris avec précaution. Les deux risques sont réduits par la même discipline : savoir ce que l'on a, pour quoi on peut l'utiliser et ce que l'on utilise réellement.

Le paysage a changé. Une grande partie des logiciels fonctionne désormais par abonnement, est achetée par des équipes avec une carte et mise à jour par l'éditeur. Des composants open source se trouvent dans presque tous les produits, chacun avec des conditions de licence qui comportent des obligations. Et les modèles et services d'IA viennent avec des conditions sur les données, les sorties et l'usage permis qui sont nouvelles pour beaucoup d'acheteurs. Ce sujet couvre tout cela. Il ne donne aucun conseil juridique ; l'interprétation des licences exige un conseiller qualifié. Il s'appuie sur le Sujet 4.1 — Gestion des actifs et se relie à la gestion des fournisseurs (Sujet 3.14 — Gestion des fournisseurs) et à la sécurité de l'information (Sujet 3.13 — Gestion de la sécurité de l'information).

## Concepts clés

**Gestion des actifs logiciels (SAM).** La pratique qui consiste à gérer et optimiser l'achat, le déploiement, la maintenance, l'usage et la cession des logiciels au sein d'une organisation. Wikipedia décrit la gestion des actifs logiciels et la relie à ISO/IEC 19770-1. Voir le Sujet 1.8 — Référentiels et normes de gestion des services.

**Droit d'usage (entitlement).** Le droit d'utiliser un logiciel, tel que défini par une licence. Les droits d'usage d'une organisation sont consignés à partir des contrats, des enregistrements d'achat et des portails des éditeurs. Ils sont comparés à ce qui est déployé et utilisé.

**Modèles de licence.** Les modèles courants comprennent par utilisateur, par appareil, par processeur ou cœur, par utilisateur simultané (aussi appelée licence flottante), licences de site ou d'entreprise, et tarification à la consommation. Wikipedia décrit les licences logicielles et les licences flottantes. Les règles diffèrent selon l'éditeur et le produit, changent avec la virtualisation et le cloud, et sont souvent complexes.

**Position de licence effective.** La comparaison des droits d'usage avec l'utilisation : ce que vous pouvez utiliser par rapport à ce que vous utilisez, résumée en excédent, insuffisance ou équilibre. C'est un instantané à un moment donné, et le travail consiste à le tenir à jour.

**Audit logiciel.** Un éditeur ou un tiers examine l'usage d'une organisation par rapport à ses droits d'usage. Les audits peuvent être courants ou agressifs. Une organisation qui a tenu à jour sa propre position peut répondre calmement. Une autre qui ne l'a pas fait peut faire face à des coûts imprévus.

**Abonnement et SaaS.** Le logiciel en tant que service est loué, généralement par utilisateur ou à la consommation, et livré par Internet. Wikipedia décrit à la fois le logiciel en tant que service et les modèles économiques d'abonnement. Les abonnements peuvent être démarrés par n'importe qui avec une carte ; sans contrôles, ils prolifèrent, se recouvrent et se renouvellent automatiquement. Suivez-les avec des responsables et des dates de renouvellement.

**Shelfware et optimisation.** Les logiciels inutilisés ou sous-utilisés. La récupération (harvesting) consiste à reprendre des licences à des utilisateurs qui n'en ont pas besoin et à les réaffecter. L'ajustement (right-sizing) consiste à faire correspondre le nombre et le type de licences au besoin. Les économies peuvent être importantes, et elles viennent du fait de demander si un usage existe toujours.

**Logiciel open source.** Un logiciel dont le code source est disponible sous une licence qui permet l'usage, la modification et la distribution sous certaines conditions. Wikipedia décrit les logiciels libres et open source et les licences open source. Les licences diffèrent : les licences permissives imposent peu d'obligations, tandis que les licences à copyleft, décrites sur Wikipedia, exigent que les œuvres dérivées soient partagées sous des conditions similaires. Les obligations dépendent de la manière dont vous utilisez et distribuez le logiciel ; l'interprétation exige donc un avis juridique.

**Nomenclature logicielle (SBOM).** Une liste des composants d'un logiciel, avec versions et licences. Wikipedia décrit la chaîne d'approvisionnement logicielle et le format SPDX pour échanger des informations de licence et de composants. Une SBOM soutient la conformité des licences et la réponse en sécurité. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Modèles et services d'IA.** Les modèles et services d'IA viennent avec des conditions qui couvrent ce que vous pouvez en faire, qui possède les sorties, si vos entrées sont conservées ou utilisées pour l'entraînement, et ce qui se passe si un modèle change ou est retiré. Wikipedia décrit les grands modèles de langage et l'intelligence artificielle open source, et note que « ouvert » peut signifier des choses différentes pour les modèles. Lisez les conditions et consignez-les. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Propriété intellectuelle.** Les logiciels sont protégés par le droit d'auteur et parfois par des brevets. Wikipedia décrit la propriété intellectuelle et le droit d'auteur. Utiliser un logiciel en dehors de ses conditions peut porter atteinte aux droits du propriétaire. Le code généré par des outils d'IA soulève des questions ouvertes sur la propriété et les licences ; prenez conseil.

**Découverte et mesure d'usage des logiciels.** Les outils de découverte trouvent les logiciels installés et les applications cloud. La mesure d'usage enregistre l'utilisation réelle, par exemple la dernière fois qu'une application a été lancée. Avec les droits d'usage, ils donnent la position de licence.

**Gouvernance.** Des politiques sur qui peut acquérir des logiciels, ce qui doit être approuvé, comment l'open source est examiné et comment les licences sont suivies. Gardez-les légères et claires, pour que les gens les suivent. Voir le Sujet 8.1 — Gouvernance, risques et conformité.

**Comment les angles s'articulent.** La SAM soutient les équipes agiles en rendant les logiciels approuvés faciles à obtenir et en écartant la conformité de leur chemin. L'IA peut aider à lire les conditions de licence et à réconcilier les données, sous relecture juridique. L'automatisation attribue et récupère des licences. L'analytique montre l'usage, le gaspillage et le risque.

## Bonnes pratiques

1. **Connaître ses droits d'usage.** Rassemblez au même endroit contrats, enregistrements d'achat et données des portails d'éditeurs. Consignez les conditions qui comptent : métrique, quantité, durée, restrictions et date de renouvellement.
2. **Découvrir ce qui est déployé et utilisé.** Utilisez les données de découverte et d'usage pour les logiciels sur site, cloud et postes, et réconciliez régulièrement avec les droits d'usage.
3. **Calculer sa position de licence.** Pour les principaux éditeurs, comparez droits d'usage et utilisation et consignez la position et la date. Résolvez délibérément insuffisances et excédents.
4. **Désigner un responsable de chaque grande relation avec un éditeur.** Nommez une personne qui comprend les règles de licence de chaque gros éditeur et suit leurs évolutions. Les règles diffèrent et changent.
5. **Rendre les logiciels approuvés faciles à obtenir.** Proposez un catalogue d'applications approuvées avec une voie rapide, pour que les gens n'achètent pas les leurs. Voir le Sujet 3.8 — Gestion du catalogue de services.
6. **Contrôler les abonnements.** Exigez un responsable, un budget et une date de renouvellement à l'achat. Examinez les renouvellements automatiques à l'avance et annulez ce qui est inutilisé.
7. **Récupérer et ajuster.** Reprenez les licences aux utilisateurs inactifs et passez à des niveaux moins chers là où cela convient. Interrogez les utilisateurs avant de retirer un accès, pour éviter les perturbations.
8. **Examiner l'usage de l'open source.** Analysez le code pour y trouver des composants et leurs licences, fixez une politique sur les licences acceptables et consignez les exceptions. Impliquez un avis juridique pour les obligations.
9. **Consigner les conditions d'IA.** Pour chaque modèle et service d'IA, consignez quelles données vous envoyez, si elles sont conservées ou utilisées pour l'entraînement, qui possède les sorties et ce qui se passe si le service change.
10. **Se préparer aux audits.** Gardez les enregistrements à jour et sachez qui traite une demande d'audit d'un éditeur. Répondez promptement et factuellement, avec un appui juridique au besoin.

## Questions à discuter avec votre équipe

**Pour nos trois plus gros éditeurs de logiciels, connaissons-nous nos droits d'usage et notre utilisation ?**
Demandez un chiffre et sa source. Attendez-vous à de l'incertitude. Demandez ensuite de choisir un éditeur et de calculer correctement la position.

**Quels abonnements avons-nous achetés en dehors du processus central, et qui paie ?**
Vérifiez les relevés de cartes et les notes de frais. Attendez-vous à des surprises. Demandez ensuite de consigner responsables et dates de renouvellement pour les dix premiers par coût.

**Pour quelles licences payons-nous alors que personne ne s'en est servi depuis six mois ?**
Utilisez les données de mesure d'usage. Attendez-vous à du shelfware. Demandez ensuite d'en choisir trois à récupérer, avec un message aux utilisateurs d'abord.

**Comment savons-nous quels composants open source se trouvent dans nos produits et quelles licences ils portent ?**
Demandez la dernière analyse. Attendez-vous à des lacunes. Demandez ensuite de choisir un produit et de produire une liste de composants.

**Si un éditeur nous auditait demain, qui répondrait et avec quoi ?**
Parcourez les étapes. Attendez-vous à de la confusion sur qui parle à l'éditeur. Demandez ensuite de nommer un responsable et de constituer un dossier d'enregistrements à jour.

**Quelles sont les conditions des services d'IA que nos équipes utilisent, et quelqu'un les a-t-il lues ?**
Demandez qui utilise quels services. Attendez-vous à des comptes personnels aux conditions inconnues. Demandez ensuite de lister les cinq principaux services et de consigner leurs conditions sur les données et la propriété.

## En pratique : un exemple de gestion des services

Un groupe hospitalier régional compte environ 9 000 employés et détient des licences pour une grande application clinique, une suite bureautique, une plateforme de bases de données et des dizaines d'outils plus petits. Le directeur financier a demandé une réduction de 10 % des dépenses logicielles. La responsable SAM, une équipe de deux personnes, commence par le plus gros éditeur, dont le contrat représente 30 % des dépenses.

Elle rassemble le contrat et les enregistrements d'achat et constate que les licences sont comptées par utilisateur nommé. Elle les compare à la liste d'utilisateurs de l'application et aux dates de dernière connexion. Sur 4 200 utilisateurs sous licence, environ 700 ne se sont pas connectés depuis six mois ; beaucoup sont d'anciens remplaçants ou des personnes qui ont changé de poste. Elle trouve aussi 250 utilisateurs actifs sans licence, surtout de nouveaux arrivants dont les comptes ont été créés à partir d'un modèle. La position nette montre un excédent sur le papier, mais une vraie insuffisance sur un module.

Elle met trois mesures en place. Une tâche mensuelle liste les utilisateurs inactifs et envoie à leurs responsables un message avant que la licence soit récupérée. Le processus d'arrivée vérifie la position de licence avant d'attribuer l'accès. Et l'insuffisance sur le module est signalée de façon proactive à l'éditeur, pour être réglée au prochain renouvellement, avec l'aide de l'équipe juridique du groupe. Les économies tirées des licences récupérées atteignent 6 % des dépenses auprès de cet éditeur la première année.

Elle examine aussi les abonnements et trouve 14 outils SaaS achetés par des services, dont quatre se recoupent et deux traitent des données de patients. Elle renvoie ces derniers aux équipes de sécurité et de vie privée, et consigne les conditions d'IA d'un outil de transcription qu'une clinique a essayé : l'éditeur conserve l'audio 30 jours et peut l'utiliser pour améliorer ses modèles, ce que l'équipe de vie privée juge inacceptable. La clinique cesse de l'utiliser.

Ce qui change : les licences sont récupérées et réaffectées, et les surprises au renouvellement sont plus rares. Ce qui reste difficile : les règles de licence des bases de données virtualisées sont complexes et l'équipe ne peut pas les interpréter avec assurance ; les cliniciens n'aiment pas perdre l'accès à des outils et certaines licences récupérées ont été rétablies après des plaintes ; et les services achètent encore des abonnements par carte. La responsable demande à la finance de signaler les achats de logiciels par carte pour examen.

## Quatre perspectives

### Équipes produit et de livraison

Listez les composants, les licences open source et les services d'IA de votre produit. Choisissez des licences et des services que vous comprenez et consignez leurs conditions. Évitez de coller du code ou des données dans des outils dont vous n'avez pas vérifié les conditions.

### Équipes de service et d'exploitation

Gardez exactes les données de déploiement et d'usage, récupérez les licences inutilisées et signalez les nouveaux outils au responsable SAM. Traitez les demandes d'audit par la voie convenue.

### Direction et gouvernance

Demandez la position de licence des principaux éditeurs, le coût des logiciels inutilisés et le plan pour les audits. Soutenez une voie d'approbation simple que les gens utiliseront. Traitez les conditions d'IA comme une question de risque.

### Clients et utilisateurs

On peut vous demander si vous utilisez encore une application. Répondez honnêtement et dites si vous en avez besoin. Utilisez des outils approuvés et demandez ce dont vous avez besoin par la voie appropriée.

## Agilité, IA, automatisation et analytique

### Agilité

Rendez la conformité rapide pour les équipes : un catalogue d'outils approuvés, une politique open source simple et une courte voie pour les exceptions. Examinez le processus avec les développeurs. Attention : des barrières strictes que les équipes évitent créent du shadow IT ; gardez la voie rapide.

### IA

L'IA peut lire les contrats et les conditions de licence, les résumer et signaler les clauses à vérifier, et réconcilier des données de déploiement, sous relecture juridique et humaine. Nommez un responsable. Attention : un résumé de conditions de licence par l'IA peut être faux d'une façon qui compte ; ne vous y fiez jamais pour des décisions de conformité. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Automatisez la découverte, la mesure d'usage, l'attribution de licences, les avis de récupération et les rappels de renouvellement, avec responsables et journaux. Attention : la récupération automatique peut retirer un accès dont quelqu'un a besoin ; prévenez d'abord les utilisateurs et facilitez le rétablissement. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Suivez la position de licence, les licences inutilisées et leur coût, le nombre et la dépense des abonnements, les renouvellements à venir et les constats de licences open source. Attention : les chiffres d'économies sont facilement surestimés, et le nombre de licences récupérées peut être détourné ; suivez les dépenses réelles et les plaintes d'utilisateurs. Voir le Sujet 4.5 — Gestion financière et FinOps et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Compter une seule fois.** La position devient périmée. Maintenez la découverte et la mesure d'usage en fonctionnement.
- **Acheter en dehors du processus.** Les abonnements prolifèrent. Rendez la voie approuvée rapide et examinez les dépenses par carte.
- **Shelfware.** Des licences sont payées et inutilisées. Mesurez l'usage et récupérez.
- **Usage de l'open source inconnu.** Les obligations sont manquées. Analysez et fixez une politique.
- **Ignorer les conditions d'IA.** Les données sont conservées ou utilisées pour l'entraînement. Lisez, consignez et décidez.
- **Pas de préparation aux audits.** Un audit d'éditeur est une bousculade. Gardez des enregistrements et un responsable nommé.
- **Supposer que les règles sont simples.** La virtualisation et le cloud changent les licences. Prenez des conseils d'expert pour les produits complexes.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Droits d'usage | Éparpillés | Principaux contrats rassemblés | Droits d'usage consignés au même endroit avec les conditions clés | Droits d'usage réconciliés régulièrement | Droits d'usage intégrés aux achats et aux éditeurs |
| Découverte et usage | Aucune | Comptages manuels | Découverte et mesure d'usage pour les principaux logiciels | Position calculée et examinée | Position continue entre sites, cloud et SaaS |
| Optimisation | Aucune | Nettoyage occasionnel | Récupération et ajustement courants | Économies suivies et vérifiées | Optimisation automatisée avec préavis aux utilisateurs |
| Open source et IA | Inconnus | Conscience | Politique, analyse et conditions consignées | Constats suivis jusqu'à leur clôture | Intégrés au pipeline et aux achats |

## Liste de contrôle

- [ ] Nous avons consigné les droits d'usage des principaux éditeurs avec les conditions clés.
- [ ] Les données de découverte et d'usage sont réconciliées avec les droits d'usage.
- [ ] Nous connaissons notre position de licence pour nos plus gros éditeurs.
- [ ] Une personne est responsable des licences de chaque grand éditeur.
- [ ] Les abonnements ont des responsables, des budgets et des dates de renouvellement.
- [ ] Les licences inactives sont récupérées avec préavis.
- [ ] Les composants et licences open source sont analysés et gouvernés.
- [ ] Les conditions des modèles et services d'IA sont consignées.

## Invites d'IA

**Extraire les conditions clés d'un contrat pour vérification.**

```text
Here is the text of a software license section: [paste]. 
List the license metric, quantity, term, restrictions, renewal terms, and audit rights, quoting the exact words for each, and write "not found" for any item the text does not state. Do not interpret ambiguous wording or give legal advice.
List what you are unsure of.
```

**Trouver les recoupements d'abonnements.**

```text
Here is a list of our subscriptions with owner, purpose, cost, and users: [paste].
Group those that serve similar purposes, list the total cost of each group, and give one question per group about whether to consolidate. Do not recommend cancellation.
List what you are unsure of.
```

**Préparer les conditions d'IA pour examen.**

```text
Here are the terms of an AI service we use: [paste relevant sections].
List what the terms say about data retention, use of inputs for training, ownership of outputs, permitted uses, and changes to the service, quoting each. For anything the text does not cover, write "not stated". Do not give legal advice.
List what you are unsure of.
```

## Compétences d'IA

- [vendor-management](../../../../skills/vendor-management/SKILL.md) : à utiliser pour gérer les relations avec les éditeurs et les renouvellements.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md) : à utiliser pour formuler les questions de conformité de licence à soumettre à la revue juridique.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md) : à utiliser pour peser le coût et le bénéfice des choix logiciels.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md) : à utiliser pour consigner les conditions et propriétés d'un modèle d'IA.

## Sources principales

- ISO/IEC 19770-1 (la norme elle-même) : processus et niveaux pour la gestion des actifs informatiques ; lisez l'édition actuelle auprès de l'éditeur.
- PeopleCert, pages de certification ITIL : la description de la gestion des actifs logiciels comme partie de la gestion des actifs par le propriétaire.
- Wikipedia, « Software asset management » et « Open-source license » : des aperçus des idées.
- Open Source Initiative (opensource.org) : la définition de l'open source et une liste de licences approuvées.

## Références

1. Software asset management — Wikipedia — https://en.wikipedia.org/wiki/Software_asset_management
2. Software license — Wikipedia — https://en.wikipedia.org/wiki/Software_license
3. Open-source license — Wikipedia — https://en.wikipedia.org/wiki/Open-source_license
4. Free and open-source software — Wikipedia — https://en.wikipedia.org/wiki/Free_and_open-source_software
5. Copyleft — Wikipedia — https://en.wikipedia.org/wiki/Copyleft
6. Floating licensing — Wikipedia — https://en.wikipedia.org/wiki/Floating_licensing
7. Shelfware — Wikipedia — https://en.wikipedia.org/wiki/Shelfware
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
10. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
11. Open Source Initiative — OSI — https://opensource.org
