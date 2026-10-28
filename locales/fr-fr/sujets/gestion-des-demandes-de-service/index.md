# Gestion des demandes de service

**La gestion des demandes de service traite les choses planifiées et répétables que les utilisateurs demandent, comme des accès, du matériel et de l'information, sous la forme de services standardisés avec des formulaires, des approbations et des étapes de traitement clairs ; le but est de rendre les demandes courantes rapides et prévisibles, et d'automatiser ce qui peut l'être en toute sécurité.**

## Pourquoi c'est important

Une large part du travail d'un centre de services ne concerne pas des choses cassées. Il s'agit de personnes qui ont besoin de choses : un nouveau compte, l'accès à un dossier, une licence logicielle, un téléphone mobile, une réservation de salle, un changement de nom. Ces demandes sont prévisibles et répétées. Traiter chacune comme une conversation ponctuelle fait perdre du temps au demandeur comme à l'exécutant.

Quand les demandes sont standardisées, elles deviennent rapides. Le demandeur voit une description de ce qu'il peut demander, remplit un court formulaire qui recueille ce dont l'exécutant a besoin et obtient un état clair. Les approbations n'ont lieu que là où c'est nécessaire. Les étapes de traitement sont documentées, partagées au sein de l'équipe et, lorsque c'est sûr, automatisées. Le temps passé sur le courant diminue, et l'attention est libérée pour un travail plus difficile.

Des demandes mal gérées causent leurs propres dégâts. Des formulaires peu clairs génèrent des questions répétées. Des approbations que personne ne lit ajoutent des jours. Un accès accordé sans contrôle devient un risque de sécurité, et un accès jamais retiré en devient un autre. Ce sujet explique comment concevoir, exploiter et améliorer le traitement des demandes, et comment il se relie au catalogue de services (Sujet 3.8 — Gestion du catalogue de services), au centre de services (Sujet 3.1 — Centre de services) et à l'automatisation (Sujet 6.5 — Libre-service et traitement automatisé).

## Concepts clés

**Demande de service.** Dans ITIL 4, une demande émanant d'un utilisateur ou de son représentant autorisé qui déclenche une action de service convenue comme une partie normale de la prestation de services. Les exemples comprennent une demande d'information, une demande d'accès, une demande d'un article standard et une demande de changement standard. Une demande de service n'est pas une défaillance : c'est quelque chose que le fournisseur a accepté de faire.

**Demande et incident.** Un incident est une interruption non planifiée ou une réduction de qualité ; une demande est une requête planifiée et standard. « Mon ordinateur portable ne s'allume pas » est un incident. « J'ai besoin d'un ordinateur portable » est une demande. Certains systèmes les traitent dans un seul outil avec des flux de travail différents. Les mélanger dans une même file masque la différence dans la manière dont chacun doit être traité. Voir le Sujet 3.2 — Gestion des incidents.

**Modèle de demande.** Une description prédéfinie de la manière dont un type particulier de demande est traité : les informations requises, les règles d'approbation, les étapes, qui fait quoi, le délai cible et la façon d'informer l'utilisateur. Les articles de Wikipedia sur le flux de travail et la normalisation décrivent des idées générales. Un modèle est écrit une fois, amélioré au fil du temps et réutilisé.

**Entrée de catalogue.** Chaque type de demande apparaît dans le catalogue de services avec un nom convivial, une description, qui peut le demander et le délai attendu. Voir le Sujet 3.8 — Gestion du catalogue de services. Wikipedia décrit les catalogues de services comme une liste de services offerts.

**Approbation.** Certaines demandes exigent une autorisation, par exemple d'un responsable hiérarchique ou d'un détenteur de budget. Une bonne conception limite les approbations aux cas où elles apportent de la valeur : là où de l'argent est dépensé, ou là où l'accès à des informations sensibles est accordé. Les chaînes d'approbation qui existent par tradition, non par risque, ajoutent du retard.

**Traitement.** Le travail de livraison de ce qui a été demandé. Il peut être manuel, partiellement automatisé ou entièrement automatisé. Une progression courante consiste à documenter les étapes, puis à scripter les étapes répétitives, puis à relier directement le formulaire au script.

**Libre-service.** Les utilisateurs déposent des demandes et les suivent via un portail ou une conversation en ligne sans passer par le centre de services. Wikipedia décrit le libre-service comme un système dans lequel les gens se servent eux-mêmes. Un bon libre-service dépend de formulaires que les utilisateurs comprennent et d'informations d'état auxquelles ils peuvent se fier. Voir le Sujet 6.5 — Libre-service et traitement automatisé.

**Identité et accès.** Une large part des demandes concerne l'accès. Les articles de Wikipedia sur la gestion des identités et des accès et sur le principe du moindre privilège décrivent les idées principales : n'accorder que l'accès nécessaire, vérifier qui demande, consigner qui a approuvé et retirer l'accès quand il n'est plus nécessaire. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Arrivées, mutations, départs.** Les événements de la vie des personnes dans une organisation, comme un nouvel arrivant, un changement de poste ou un départ, déclenchent des ensembles de demandes. Les traiter comme un seul parcours avec un responsable et une liste de contrôle évite les étapes oubliées. Voir le Sujet 1.9 — Gestion des services d'entreprise.

**Changements standard.** De nombreuses demandes sont des changements standard, qui sont préautorisés et à faible risque. Relier les deux pratiques évite une double approbation. Voir le Sujet 3.4 — Habilitation des changements.

**Objectifs et attentes.** Chaque type de demande a un délai de livraison attendu, que les utilisateurs voient. Les objectifs devraient être réalistes, fondés sur la performance réelle, et honnêtes quand le traitement dépend d'un tiers.

**Coût et facturation.** Certaines demandes ont un coût, comme une licence ou un appareil. Montrer le coût et qui paie aide les utilisateurs à décider et aide les responsables à voir la demande. Voir le Sujet 4.5 — Gestion financière et FinOps.

**Expérience.** Une bonne expérience de demande signifie que les utilisateurs peuvent trouver ce qu'ils veulent, comprendre le formulaire, savoir ce qui se passe ensuite et recevoir ce qui est demandé quand cela a été promis. L'article de Wikipedia sur l'expérience client donne un contexte général.

**Comment les angles s'articulent.** La gestion des demandes est le lieu de l'amélioration continue par petits changements : simplifier un formulaire, supprimer une approbation, automatiser une étape. L'IA peut aider les utilisateurs à trouver la bonne demande et à remplir le formulaire, et aider les exécutants à se préparer. L'automatisation fait le travail répétable. L'analytique montre la demande et les retards.

## Bonnes pratiques

1. **Décrire les demandes avec les mots de l'utilisateur.** Nommez chaque demande d'après ce que l'utilisateur veut, par exemple « Accès à un dossier partagé », et non d'après l'objet technique. Testez les noms avec des utilisateurs.
2. **Garder les formulaires courts.** Ne demandez que ce dont l'exécutant a besoin et préremplissez ce que vous savez déjà. Testez le formulaire avec un nouvel utilisateur et observez où il hésite.
3. **Écrire un modèle de demande pour chaque type.** Consignez les entrées, approbations, étapes, responsable, délai cible et messages aux utilisateurs. Examinez régulièrement les modèles à l'aune des données réelles.
4. **N'approuver que là où cela apporte de la valeur.** Pour chaque approbation, nommez le risque qu'elle traite et la personne qui le comprend. Supprimez les approbations qui n'ont jamais refusé ni modifié une demande, après vérification auprès du responsable du risque.
5. **Montrer l'état et le délai attendu.** Laissez les utilisateurs voir où en est leur demande et quand l'attendre. Envoyez un message quand quelque chose change ou prend du retard.
6. **Automatiser par étapes.** Commencez par une procédure manuelle claire, puis scriptez les étapes répétitives et enfin reliez le formulaire au script. Tenez un journal et un recours manuel.
7. **Traiter l'accès avec soin.** Vérifiez l'identité, accordez le moindre privilège, consignez les approbations, examinez régulièrement les accès et rendez le retrait aussi courant que l'octroi. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.
8. **Traiter les événements de la vie comme des parcours.** Pour les arrivées, mutations et départs, créez un parcours avec un responsable, une liste de contrôle et un état partagé entre équipes.
9. **Examiner la demande.** Regardez quelles demandes sont les plus fréquentes, lesquelles prennent le plus de temps et lesquelles sont abandonnées ou renvoyées. Utilisez les constats pour améliorer formulaires et modèles.
10. **Retirer et fusionner des types de demandes.** Supprimez les types que personne n'utilise et combinez les quasi-doublons. Un catalogue plus court est plus facile à utiliser.

## Questions à discuter avec votre équipe

**Quelles sont les dix demandes que nous recevons le plus souvent, et combien de temps prend chacune ?**
Utilisez des données réelles. Attendez-vous à des surprises : un petit nombre de types représente généralement l'essentiel du volume. Demandez lesquelles sont lentes et pourquoi. Demandez ensuite de choisir une demande à simplifier d'abord.

**Quelles approbations exigeons-nous, et quel risque chacune traite-t-elle ?**
Parcourez les étapes d'approbation. Attendez-vous à ce que certaines n'aient d'explication pour personne. Demandez qui a refusé ou modifié une demande dans l'année écoulée. Demandez ensuite d'essayer la suppression d'une approbation, avec l'accord du responsable du risque.

**Que doivent savoir les utilisateurs pour faire une demande, et que trouvent-ils déroutant ?**
Interrogez les utilisateurs et les nouveaux employés. Attendez-vous à de la confusion sur les noms, les formulaires et la personne à qui s'adresser. Demandez ensuite de réécrire un formulaire et de le tester avec cinq utilisateurs.

**Lesquelles de nos étapes de traitement sont manuelles et répétitives, et pourraient être scriptées ?**
Listez les étapes et le temps de chacune. Attendez-vous à la création de comptes et aux accès courants. Demandez ce qui pourrait mal tourner si elles étaient scriptées. Demandez ensuite de choisir une étape et de convenir de garde-fous, de journaux et d'un recours manuel.

**Comment retirons-nous les accès quand les gens changent de poste ou partent ?**
Cela teste l'autre moitié de la gestion des accès. Attendez-vous à des lacunes. Demandez le dernier constat d'audit. Demandez ensuite de convenir d'un responsable et d'un déclencheur de retrait.

**Comment l'IA pourrait-elle aider les utilisateurs à trouver et à compléter des demandes, et que doit garder une personne ?**
L'IA peut recommander la bonne demande et préremplir des détails. Elle peut aussi se tromper ou accorder trop par suggestion. Demandez où une personne doit approuver. Demandez ensuite de choisir un essai limité aux demandes à faible risque avec revue.

## En pratique : un exemple de gestion des services

Le service informatique du siège d'un grand distributeur traite environ 2 500 demandes par mois. Le personnel se plaint que les demandes « tombent dans un trou noir ». La responsable des services examine six mois de données et constate que cinq types de demandes représentent 60 % du volume : mise en place d'un nouvel arrivant, accès à des dossiers partagés, installation de logiciels, commandes de téléphones mobiles et réinitialisations de mot de passe. Le délai moyen de traitement d'une demande de dossier partagé est de quatre jours, dont trois passés à attendre l'approbation d'un propriétaire de dossier qui ne répond souvent pas.

La responsable travaille avec les propriétaires à trois changements. Pour les dossiers partagés, le formulaire affiche désormais le nom du propriétaire, et celui-ci approuve depuis un lien dans un courriel avec un rappel au bout d'un jour ; pour les dossiers classés à faible sensibilité, l'approbation revient au seul responsable hiérarchique du demandeur. Pour les nouveaux arrivants, un parcours unique remplace quatre demandes distinctes, géré par les RH, avec des tâches pour l'informatique, les installations et la paie. Pour l'installation de logiciels, un catalogue d'applications préapprouvées est publié, avec installation automatique pour celles-ci et approbation seulement pour les autres.

Après deux mois, une demande de dossier partagé prend en moyenne un jour, et le parcours des nouveaux arrivants réduit les signalements de matériel manquant le premier jour. La responsable échantillonne 50 installations automatisées et en trouve trois qui ont installé une ancienne version parce qu'un paquet était périmé.

Ce qui change : le personnel reçoit plus vite ce qu'il demande, et le centre reçoit moins de contacts « où est ma demande ». Ce qui reste difficile : les propriétaires de dossiers sensibles mettent encore plusieurs jours à répondre et l'organisation n'a pas décidé qui possède environ un tiers des dossiers ; l'audit des accès trouve des utilisateurs qui conservent l'accès de postes précédents ; et le parcours des nouveaux arrivants dépend de la saisie des dates de début par les RH dans les délais. La responsable porte la question de la propriété des dossiers et des revues d'accès à l'équipe de sécurité.

## Quatre perspectives

### Équipes produit et de livraison

Fournissez les informations nécessaires pour traiter les demandes concernant vos services, comme les modèles d'accès et les configurations standard. Gardez en ordre les interfaces de libre-service et l'automatisation, et proposez de traiter vous-mêmes vos demandes courantes lorsque c'est sûr.

### Équipes de service et d'exploitation

Soyez responsables des modèles de demande et gardez-les courts et à jour. Automatisez les étapes répétées avec des garde-fous et surveillez les retards et les demandes renvoyées. Apportez les données de demande à ceux qui possèdent les services.

### Direction et gouvernance

Demandez des preuves du temps que prennent les demandes et de l'endroit où elles attendent. Soutenez la suppression des approbations qui n'ajoutent aucune sécurité. Donnez aux responsables l'autorité de changer les modèles et financez l'automatisation avec des contrôles adéquats.

### Clients et utilisateurs

Vous devriez trouver facilement ce dont vous avez besoin, voir l'état et recevoir ce qui est promis quand cela l'a été. Dites au fournisseur quand un formulaire est déroutant ou qu'une approbation vous semble inutile. Rendez ce dont vous n'avez plus besoin, accès compris.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez chaque modèle de demande comme un petit produit et améliorez-le avec les utilisateurs : simplifier un formulaire, le tester, ajuster. Examinez régulièrement la demande avec les parties prenantes. Attention : modifier sans cesse les formulaires déroute les utilisateurs ; annoncez les changements et gardez une liste courte.

### IA

L'IA peut aider les utilisateurs à trouver la bonne demande, préremplir les formulaires à partir d'une description, résumer les demandes pour les approbateurs et rédiger des notes de traitement, une personne approuvant tout ce qui accorde un accès ou dépense de l'argent. Nommez un responsable. Attention : un assistant qui suggère un accès large « par précaution » viole le moindre privilège ; contraignez ses choix. Voir le Sujet 5.3 — Centre de services avec IA et agents virtuels.

### Automatisation

Automatisez le traitement courant, comme la création de comptes, l'installation de logiciels et l'appartenance à des groupes, avec contrôles, journaux et recours manuel. Attention : l'octroi automatique d'un accès sans vérification est une faille de sécurité ; incluez des contrôles d'identité et examinez un échantillon. Voir le Sujet 6.5 — Libre-service et traitement automatisé.

### Analytique

Regardez la demande par type, le temps de traitement, le temps d'attente d'approbation, les demandes renvoyées ou abandonnées et les retours des utilisateurs. Attention : le temps moyen masque les longs retards et peut être manipulé en fermant puis en rouvrant ; regardez les distributions et les échantillons. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Des noms de demande peu clairs.** Les utilisateurs choisissent la mauvaise. Renommez avec les mots de l'utilisateur et testez.
- **De longs formulaires.** Les utilisateurs abandonnent ou devinent. Ne demandez que le nécessaire.
- **Des approbations par habitude.** Du retard sans sécurité. Gardez celles qui ont un risque nommé.
- **Une automatisation sans contrôles.** Mauvais accès ou mauvais articles. Ajoutez vérification, journaux et revue.
- **Des accès jamais retirés.** Les anciens comptes subsistent. Faites du retrait un déclencheur courant.
- **Pas d'état pour les utilisateurs.** Les contacts répétés augmentent. Montrez l'état et envoyez des mises à jour.
- **Un catalogue qui grossit sans élagage.** Les utilisateurs ne trouvent rien. Retirez et fusionnez.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Conception des demandes | Au cas par cas par courriel | Quelques formulaires | Modèles de demande pour les types courants | Modèles examinés à l'aune des données | Modèles améliorés en continu entre fonctions |
| Approbations | Nombreuses et manuelles | Examinées une fois | Approbations liées à des risques nommés | Valeur des approbations mesurée | Approbations fondées sur le risque, adaptées automatiquement |
| Traitement | Manuel | Quelques scripts | Demandes courantes automatisées avec journaux | Qualité de l'automatisation échantillonnée et examinée | Automatisation de bout en bout entre systèmes |
| Cycle de vie des accès | Accordés au cas par cas | Revue périodique | Déclencheurs d'arrivée, de mutation et de départ | Accès examinés sur la base de preuves | Accès ajustés en continu entre systèmes |

## Liste de contrôle

- [ ] Nos dix principaux types de demandes sont décrits avec les mots des utilisateurs.
- [ ] Chacun a un modèle de demande avec entrées, approbations, étapes, responsable et délai cible.
- [ ] Chaque approbation a un risque nommé et un responsable qui le comprend.
- [ ] Les utilisateurs peuvent voir l'état et le délai attendu.
- [ ] Le traitement automatisé a des contrôles, des journaux et un recours manuel.
- [ ] Les accès sont accordés selon le moindre privilège et retirés quand ils ne sont plus nécessaires.
- [ ] Les parcours d'arrivée, de mutation et de départ ont des responsables.
- [ ] Nous examinons la demande et élaguons régulièrement les types de demandes.

## Invites d'IA

**Regrouper les demandes par type.**

```text
Below are request titles and descriptions from the last month, with personal data removed: [paste sample].
Group them into up to twelve request types, count each, and list the three most common questions the requester or fulfiller had to ask. Do not suggest changes.
List what you are unsure of.
```

**Rédiger un formulaire de demande court.**

```text
Request type: [name]. What the fulfiller needs to do the work: [list]. What we already know about the requester: [list].
Draft a form with only the questions we cannot already answer, in plain language, with a one-line help text for each. Do not add questions that are not needed.
List what you are unsure of.
```

**Examiner une chaîne d'approbation.**

```text
Request type: [name]. Current approvals: [list with who and typical wait]. Data on past outcomes: [paste, such as number approved and refused].
For each approval, state the risk it appears to address based only on what I provided, how often it changed the outcome, and a question to ask the owner. Do not recommend removal.
List what you are unsure of.
```

## Compétences d'IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md) : à utiliser pour décrire les types de demandes aux utilisateurs.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour examiner les étapes, les attentes et les approbations.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour clarifier qui approuve et qui exécute.
- [survey-design](../../../../skills/survey-design/SKILL.md) : à utiliser pour concevoir des retours sur l'expérience de demande.

## Sources principales

- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des demandes de service par le propriétaire.
- Wikipedia, « Service catalog » et « Self-service » : contexte sur la façon dont les demandes sont décrites et faites.
- Wikipedia, « Principle of least privilege » : la base d'un traitement sûr des accès.
- Wikipedia, « Identity and access management » : la discipline derrière de nombreuses demandes.

## Références

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
3. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
4. Standardization — Wikipedia — https://en.wikipedia.org/wiki/Standardization
5. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
6. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
7. Onboarding — Wikipedia — https://en.wikipedia.org/wiki/Onboarding
8. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
9. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
10. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
