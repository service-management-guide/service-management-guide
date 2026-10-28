# Gestion des services

**La gestion des services est la discipline qui consiste à concevoir, exploiter et améliorer des services afin que les clients obtiennent les résultats qu'ils recherchent sans supporter le coût et le risque de les produire ; la pratique agile, l'IA, l'automatisation et l'analytique sont quatre façons de mieux faire ce travail, pas des substituts.**

## Pourquoi c'est important

La plupart des organisations sont à la fois clientes et fournisseurs de services. Un hôpital s'appuie sur un système de dossier électronique exploité par son service informatique, et ce service s'appuie sur un fournisseur de cloud. Chaque maillon de la chaîne promet quelque chose au suivant. Quand une promesse n'est pas tenue, l'échec se propage le long de la chaîne et retombe sur une personne qui n'en a jamais vu la cause : une infirmière qui ne peut pas ouvrir un dossier, un client qui ne peut pas payer.

La gestion des services donne à ceux qui font ces promesses une façon commune d'y réfléchir et d'en parler. Elle pose une question simple : que doit accomplir le client, et que devons-nous faire, de façon répétée et fiable, pour qu'il y parvienne ? Elle traite la réponse comme une pratique continue plutôt que comme un projet doté d'une date de fin.

Pour les équipes techniques, le changement consiste à passer de « nous exploitons des serveurs et des applications » à « nous fournissons un résultat ». Les serveurs comptent toujours. Mais la mesure du succès se déplace : on ne demande plus si la machine fonctionne, mais si la personne a pu faire son travail. Ce changement explique pourquoi une équipe peut atteindre tous ses objectifs de disponibilité et s'entendre dire que son service est médiocre.

Ce guide aborde la gestion des services à travers quatre angles : l'agilité, l'IA, l'automatisation et l'analytique. Chacun change la façon dont les services sont exploités. Aucun ne change la question posée plus haut. Lisez ce sujet en premier ; les suivants s'appuient sur son vocabulaire.

## Concepts clés

**Service.** ITIL 4 définit un service comme un moyen de permettre la cocréation de valeur en facilitant les résultats que les clients souhaitent atteindre, sans que le client ait à gérer des coûts et des risques spécifiques. Deux éléments de cette définition pèsent lourd. La « cocréation » signifie que la valeur ne réside pas chez le fournisseur : elle apparaît quand le client utilise le service. Et « sans avoir à gérer des coûts et des risques spécifiques » dit ce que le fournisseur prend en charge, ce qui est la raison même pour laquelle les clients paient ou financent le service.

**Valeur, résultats, livrables.** Un livrable est ce qu'un service produit, par exemple un ticket résolu ou une version déployée. Un résultat est le changement que le client voulait, par exemple un patient reçu à l'heure. La valeur est le jugement du client sur ce que le résultat valait par rapport à son coût et à son risque. Une équipe peut produire de nombreux livrables sans aucun résultat, et une revue de service qui ne compte que les livrables ne le verra pas.

**Fournisseur, consommateur, et les rôles au sein du « consommateur ».** Le fournisseur conçoit et exploite le service. Le consommateur est un groupe plus large : le client définit les exigences et assume la responsabilité du résultat, l'utilisateur utilise le service et le commanditaire autorise le financement. Une même personne peut tenir plusieurs rôles, et un service échoue quand le fournisseur ne parle qu'à l'un d'eux.

**Relation de service.** Fournisseurs et consommateurs sont liés par une relation faite d'accords, d'attentes et d'une boucle de rétroaction. Un accord de niveau de service (SLA), traité au Sujet 3.7 — Gestion des niveaux de service, n'en est qu'une partie. La conversation qui garde le SLA honnête en est la plus grande part.

**Des pratiques, pas seulement des processus.** Les descriptions plus anciennes de la gestion des services informatiques (ITSM) mettent l'accent sur les processus : des séquences d'étapes figées, comme un processus d'incident. Les recommandations actuelles, dont ITIL 4, parlent de pratiques : des ensembles de ressources organisationnelles conçus pour accomplir un travail en vue d'un objectif. Une pratique comprend des personnes, de l'information, des outils et des partenaires autant que des étapes. Le Sujet 1.2 — ITIL retrace comment le référentiel est arrivé à cette formulation, et le Sujet 1.4 — Le système de valeur des services montre comment les pratiques s'articulent.

**De la technologie au service.** Une équipe centrée sur la technologie s'organise autour de composants : l'équipe réseau, l'équipe des bases de données, l'équipe applicative. Une équipe centrée sur le service s'organise autour de ce que vit le client, ce qui traverse ces composants. La plupart des organisations se situent entre les deux, et leurs revues d'incident le montrent : si chaque revue se termine par « c'était le composant de l'autre équipe », l'organisation reste centrée sur la technologie.

**La gestion des services au-delà de l'informatique.** Les mêmes idées s'appliquent aux ressources humaines, aux installations, au juridique et à la finance, ce qui explique pourquoi de nombreuses organisations étendent un centre de services et un catalogue de services à ces fonctions. Voir le Sujet 1.9 — Gestion des services d'entreprise.

**Les quatre angles.** *Agilité* désigne l'implication continue des parties prenantes, l'amélioration continue et la livraison continue de changements fonctionnels. *IA* désigne des systèmes qui apprennent des motifs et qui génèrent ou recommandent, et qui ont besoin d'un responsable et d'une supervision humaine. *Automatisation* désigne un travail exécuté par un logiciel sans qu'une personne intervienne à chaque étape. *Analytique* désigne l'usage des données pour répondre à des questions sur le service. La Partie 2 traite de l'agilité, la Partie 5 de l'IA, la Partie 6 de l'automatisation et la Partie 7 de l'analytique.

## Bonnes pratiques

1. **Partir du résultat du client.** Pour chaque service, écrivez une phrase qui commence par « Le client peut… ». Si l'équipe n'y parvient pas, elle ne sait pas encore ce qu'elle fournit. Vérifiez la phrase avec un vrai client, pas avec un collègue qui partage vos hypothèses.
2. **Nommer un responsable pour chaque service.** Une personne est responsable du service tel que le client le vit, même si de nombreuses équipes y contribuent. Sans responsable, personne ne met en balance une correction dans une équipe et son coût pour une autre.
3. **Décrire les services avec les mots du client.** Remplacez « cluster Exchange » par « messagerie et agenda ». Les vues techniques sont utiles à l'intérieur du fournisseur ; la description destinée au client est celle qui doit figurer dans les catalogues, les rapports et les pages d'état.
4. **Définir les limites du service.** Dites ce qui est inclus, ce qui ne l'est pas et ce que le client doit faire lui-même. Des limites floues engendrent des litiges au pire moment, pendant un incident.
5. **Traiter l'amélioration comme une partie du service.** Réservez une part visible de la capacité au travail d'amélioration et examinez régulièrement avec les parties prenantes un petit backlog de changements. Si votre équipe choisit d'utiliser des sprints, vous pouvez insérer une revue dans chacun ; l'habitude compte plus que le rythme.
6. **Utiliser les angles pour poser des questions, pas pour acheter des outils.** Pour chaque changement, demandez quelle pratique agile raccourcirait la rétroaction, où l'IA pourrait aider et qui la superviserait, quelle automatisation supprimerait un travail manuel répété et quelles données montreraient si cela a fonctionné.
7. **Garder des humains responsables des décisions.** Un logiciel peut recommander et agir dans des limites, mais une personne nommée décide de ces limites et examine ce qui s'est passé. Cela vaut autant pour les scripts que pour les systèmes d'IA.
8. **Mesurer les résultats et garder des mesures honnêtes.** Associez chaque mesure de livrable, comme les tickets clos, à une mesure de résultat ou d'expérience, et dites comment chacune pourrait être détournée. Le livre complémentaire *Service Management Metrics* en donne les définitions.
9. **Écrire ce que l'on promet.** Les accords n'ont pas à être longs. Une courte page qui énonce le périmètre, les horaires, les objectifs et les contacts évite plus de disputes qu'un long contrat que personne ne lit.
10. **Examiner la relation de service, pas seulement le service.** Rencontrez les clients à intervalles réguliers, écoutez leurs difficultés et dites-leur ce que vous avez changé en conséquence. Une relation sans rétroaction se dégrade.

## Questions à discuter avec votre équipe

**Si un client décrivait notre service en une phrase, que dirait-il, et serions-nous d'accord ?**
Cela vérifie que fournisseur et consommateur partagent la même image du service. Attendez-vous à des réponses qui décrivent des composants ou l'effort du fournisseur plutôt que le résultat du client. Recueillez de vraies phrases de clients si vous le pouvez. Demandez ensuite quels mots de leur phrase nous n'employons jamais nous-mêmes.

**Où nos rapports sont-ils au vert alors que les clients sont mécontents ?**
Cette question cherche l'écart entre livrables et résultats. Les équipes citent souvent des objectifs de disponibilité ou de clôture de tickets atteints pendant une mauvaise semaine. Écoutez ce que le rapport omet. Demandez ensuite quelle mesure unique serait passée au rouge.

**Quels services n'ont pas de responsable unique ?**
Les lacunes de responsabilité sont courantes aux frontières entre équipes, comme les plateformes partagées ou l'accueil des nouveaux arrivants. La discussion peut révéler un service que chacun croit relever de quelqu'un d'autre. Visez une personne nommée, pas un comité. Demandez ensuite qui tranche quand deux équipes veulent des choses opposées.

**Que doit faire un client lui-même sans que nous l'ayons jamais écrit ?**
Les limites sont généralement floues du côté du client : préparer des données, approuver des demandes, tenir ses coordonnées à jour. On vous répondra peut-être que « tout le monde le sait ». Interrogez un nouveau membre de l'équipe ou un client. Demandez ensuite quel devoir non écrit a causé notre dernier litige.

**Lequel des quatre angles (agilité, IA, automatisation, analytique) aiderait le plus notre service cette année, et que nous coûterait-il ?**
La question force un choix et nomme des coûts tels que la supervision, la maintenance ou le travail sur la qualité des données. Les équipes sont souvent attirées par l'angle le plus récent. Demandez les preuves que le problème existe. Demandez ensuite ce que nous cesserions de faire pour dégager de la place.

**Que ferions-nous autrement si les personnes que nous servons pouvaient voir tout ce que nous faisons ?**
Cela fait ressortir le travail caché, comme les contournements manuels, et vérifie si l'équipe est fière de sa manière de fonctionner. Les réponses vont de « rien » à une longue liste de motifs de gêne. Traitez la liste comme des candidats à l'amélioration, pas comme des reproches. Demandez ensuite de choisir un élément à rendre visible ce mois-ci.

## En pratique : un exemple de gestion des services

Un réseau régional de bibliothèques publiques gère un petit service informatique qui soutient 40 sites. Le personnel décrit son travail comme « maintenir les systèmes des bibliothèques en marche ». Les plaintes arrivent par vagues, surtout de la part des responsables de sites, et le rapport mensuel du service est une page de chiffres de disponibilité toujours supérieurs à l'objectif.

La responsable des services mène un court exercice. Elle demande à trois responsables de sites de terminer la phrase « Le service informatique m'aide à… ». Les réponses portent sur l'ouverture du site à l'heure, l'aide aux lecteurs pour trouver et emprunter des documents et l'animation de l'heure du conte. Aucune ne mentionne la disponibilité. Elle constate que, le jour de l'ouverture de chaque site, le personnel se connecte à quatre systèmes, et qu'une connexion lente à 8 h 55 coûte plus qu'une brève panne à minuit.

L'équipe renomme ses services avec les mots du client, par exemple « Ouverture et fermeture d'un site » et « Prêts et retours ». Elle nomme un responsable pour chacun, rend compte du temps dont un site a besoin pour commencer à prêter après l'ouverture et garde les chiffres de disponibilité pour son propre usage. Elle ajoute aussi un petit backlog d'améliorations, examiné chaque mois avec deux responsables de sites. Deux des premiers éléments sont un changement de procédure de connexion et un guide imprimé pour un problème récurrent.

Ce qui change : les échanges avec les sites passent des plaintes sur les pannes à des demandes précises. Ce qui reste difficile : le nouveau chiffre de temps d'ouverture dépend de la saisie par le personnel, et certains sites la font de façon irrégulière. Le service n'a pas non plus de responsable convenu pour le système de commande de livres, qui relève en partie d'un fournisseur et en partie d'une équipe d'achats. Cette lacune sera son prochain sujet de discussion.

## Quatre perspectives

### Équipes produit et de livraison

Pensez au service que vous construisez comme à quelque chose que des personnes utiliseront pendant des années. Demandez qui l'exploitera, comment vous saurez qu'il fonctionne pour les clients et ce que vous transmettrez en dehors du code. Gardez le résultat du client à côté du backlog pour que les arbitrages soient visibles.

### Équipes de service et d'exploitation

Votre travail quotidien est le service tel que les clients le vivent. Gardez la phrase du client sous les yeux lorsque vous priorisez, consignez ce que vous apprenez des incidents et des demandes, et dites à ceux qui construisent et financent le service ce que vous observez.

### Direction et gouvernance

Financez des services, pas seulement des projets, et demandez un responsable et un résultat pour chacun. Méfiez-vous des rapports fondés sur les seuls livrables. Prenez le temps de rencontrer directement les clients au moins quelques fois par an.

### Clients et utilisateurs

Vous faites partie du service, vous n'en êtes pas seulement le destinataire. Dites quel résultat vous attendez, signalez au fournisseur ce qui ne va pas et attendez-vous à savoir ce qui a changé en conséquence. Demandez les limites du service par écrit si vous ne savez pas ce qui est couvert.

## Agilité, IA, automatisation et analytique

### Agilité

Appliquez l'amélioration continue au service lui-même : un petit backlog de changements, examiné avec les clients, livré par petites étapes. Attention : n'utilisez pas le vocabulaire agile pour requalifier un service en projet assorti d'une échéance ; les services se poursuivent et leur amélioration ne s'achève jamais.

### IA

Utilisez l'IA là où elle fait gagner du temps à des personnes qualifiées sur la lecture et l'écriture de routine, comme résumer un long fil de discussion de ticket, avec un responsable nommé et une personne qui examine ce qu'elle produit. Attention : l'IA commet des erreurs plausibles ; décidez à l'avance comment une mauvaise réponse serait repérée et corrigée. Le Sujet 5.1 — L'IA dans la gestion des services cartographie le terrain.

### Automatisation

Automatisez les étapes répétées et bien comprises, comme la création de comptes ou le redémarrage d'un service défaillant connu, et conservez un journal de ce que l'automatisation a fait ainsi qu'un moyen de l'annuler. Attention : automatiser un processus confus rend la confusion plus rapide ; simplifiez d'abord. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Collectez des données qui répondent à une question formulée, par exemple quelles demandes prennent le plus de temps et pourquoi. Attention : les données des tickets reflètent ce que les gens ont choisi de consigner, pas tout ce qui s'est passé, et toute mesure devenue objectif invite au détournement. Les définitions et les garde-fous figurent dans le livre complémentaire *Service Management Metrics*, et le Sujet 7.1 — Analytique pour la gestion des services traite des méthodes.

## Modes d'échec courants

- **Compter l'effort plutôt que les résultats.** Les rapports listent des tickets et des heures, mais pas ce que les clients ont accompli. Ajoutez une mesure de résultat ou d'expérience pour chaque service.
- **Des services sans responsable.** Tout le monde contribue et personne ne décide. Nommez une personne responsable par service et publiez son nom.
- **Des noms techniques dans les échanges avec les clients.** Les clients ne peuvent pas savoir ce qui est couvert. Décrivez les services avec les mots du client et gardez la carte technique à part.
- **Faire du référentiel l'objectif.** L'équipe adopte tous les termes d'ITIL et ne change rien que les clients remarquent. Choisissez une pratique, améliorez-la sur la base de preuves et arrêtez-vous quand les preuves s'arrêtent.
- **Les outils d'abord.** Une plateforme est achetée avant que quiconque ait décrit le service. Écrivez d'abord la description du service et l'objectif d'amélioration, puis choisissez les outils.
- **Confier le jugement à un logiciel sans supervision.** Un système d'automatisation ou d'IA agit sans responsable nommé. Désignez un responsable, fixez des limites et examinez ce qu'il a fait.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Définition des services | Services décrits par la technologie | Principaux services décrits par résultat | Tous les services ont des descriptions et des limites fondées sur les résultats | Descriptions revues avec les clients à intervalles réguliers | Descriptions et limites partagées entre fournisseurs et partenaires |
| Responsabilité | Responsabilité floue | Responsables pour les principaux services | Chaque service a un responsable nommé | Les responsables examinent régulièrement résultats et coûts | Les responsables se coordonnent entre fournisseurs et équipes internes |
| Amélioration | L'amélioration survient par la crise | Une liste d'idées existe | Un backlog d'améliorations revu, avec une capacité réservée | Améliorations vérifiées par des preuves | L'amélioration apprend des clients et des données à travers les services |
| Usage des quatre angles | Usage ponctuel | Essai dans une équipe | Choix délibéré avec responsables et supervision | Effets mesurés et examinés | Usage conjoint sous une gouvernance commune |

## Liste de contrôle

- [ ] Chaque service a une phrase de résultat pour le client.
- [ ] Chaque service a un responsable nommé.
- [ ] Les descriptions destinées aux clients emploient les mots du client.
- [ ] Les limites du service, y compris les devoirs du client, sont écrites.
- [ ] Un backlog d'améliorations revu existe, avec du temps réservé.
- [ ] Chaque mesure de livrable est associée à une mesure de résultat ou d'expérience.
- [ ] Chaque système d'automatisation et d'IA a un responsable et un moyen d'examiner ce qu'il a fait.
- [ ] Nous rencontrons les clients à intervalles réguliers et leur disons ce qui a changé.

## Invites d'IA

**Transformer des noms de services techniques en résultats pour le client.**

```text
Here is a list of our technical services: [paste list with one-line descriptions].
For each, propose one sentence beginning "The customer can…" in plain language, and name the kind of customer you are assuming. Do not invent facts about our business; where you cannot tell, write "unknown" and ask a question.
List what you are unsure of at the end.
```

**Repérer les lacunes de responsabilité à partir d'une liste de services.**

```text
Below is our service list with any owners we have recorded: [paste list].
Produce a table: service, owner (only if given; otherwise "none recorded"), and one question to ask to find the real owner. Do not guess owners.
Ask clarifying questions first, mark assumptions, and list what you are unsure of.
```

**Préparer une conversation avec les clients.**

```text
I will meet customers of the service [service name] next week. Customer roles present: [list roles].
Draft eight open questions about what outcome they need, what blocks them, and what they do for themselves. Avoid leading questions and technical jargon. Do not suggest answers.
Finish with three things I should listen for and what you are unsure of.
```

## Compétences d'IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md) : à utiliser pour transformer des descriptions de services en catalogue destiné aux clients.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md) : à utiliser pour identifier les clients, les utilisateurs et les commanditaires et ce dont chacun a besoin.
- [maturity-models](../../../../skills/maturity-models/SKILL.md) : à utiliser pour conduire le tableau de maturité comme une auto-évaluation d'équipe.

## Sources principales

- Wikipedia, « Service management » : un bref aperçu de la discipline à travers les secteurs.
- Wikipedia, « IT service management » : comment les idées s'appliquent à l'informatique, avec les référentiels qui la décrivent.
- Wikipedia, « Service-dominant logic » : la théorie marketing derrière la cocréation de valeur, utile pour expliquer pourquoi la valeur se situe chez le client.
- Wikipedia, « ITIL » : le référentiel le plus connu, y compris la définition du service citée plus haut (vérifiez sa formulation par rapport aux publications actuelles du propriétaire ; voir le Sujet 1.3 — ITIL 5).

## Références

1. Service management — Wikipedia — https://en.wikipedia.org/wiki/Service_management
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Service (economics) — Wikipedia — https://en.wikipedia.org/wiki/Service_(economics)
4. Service-dominant logic — Wikipedia — https://en.wikipedia.org/wiki/Service-dominant_logic
5. Value creation — Wikipedia — https://en.wikipedia.org/wiki/Value_creation
6. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
7. Service design — Wikipedia — https://en.wikipedia.org/wiki/Service_design
8. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
