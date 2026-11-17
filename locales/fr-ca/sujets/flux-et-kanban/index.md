# Flux et Kanban

**Le flux est la fluidité avec laquelle le travail passe de la demande à l'achèvement, et visualiser le travail, limiter le travail en cours et mesurer le temps que prend le travail sont les pratiques qui l'améliorent ; elles conviennent bien aux équipes de service soumises aux interruptions, et Kanban est une façon nommée de les appliquer.**

## Pourquoi c'est important

Les équipes de service sont toujours occupées. Les demandes, les incidents, les changements et les améliorations arrivent sans prévenir, et les gens passent de l'un à l'autre toute la journée. L'équipe a le sentiment d'être productive, mais les clients attendent longtemps que quoi que ce soit se termine, et personne ne sait dire pourquoi.

La pensée du flux explique l'écart. Le travail commencé mais non terminé reste dans des files, et dans la plupart des équipes le temps passé à attendre est bien plus long que le temps passé à travailler. Ajouter des personnes ou commencer davantage d'éléments n'aide pas, et aggrave souvent les choses, car davantage de travail en cours signifie des files plus longues. Le remède consiste à voir le travail, à limiter la quantité en cours à un moment donné et à mesurer le temps que prennent les éléments de la demande à l'achèvement.

Ces idées viennent de la production lean, et l'outil le plus connu est le tableau kanban. De nombreuses équipes agiles utilisent Kanban ou un tableau qui s'en inspire. Ce guide traite Kanban comme un choix parmi d'autres. Si votre équipe choisit d'utiliser Kanban, les idées d'ici l'aideront ; sinon, les principes de visibilité, de limites et de mesure du flux s'appliquent quand même.

## Concepts clés

**Flux.** Le mouvement du travail à travers un système. Un système au bon flux livre des éléments de façon régulière et prévisible, avec de courtes attentes. Un mauvais flux se manifeste par des délais de livraison longs et variables, des engorgements avant certaines étapes et de fréquentes accélérations.

**Travail en cours (WIP).** Le nombre d'éléments commencés mais non terminés. L'article de Wikipedia sur le travail en cours décrit l'idée dans l'industrie. Dans le travail de connaissance et de service, le WIP est souvent invisible, parce que les éléments vivent dans des boîtes de réception, des fils de discussion et la tête des gens. Le rendre visible est la première étape.

**Loi de Little.** Pour un système stable, le temps moyen qu'un élément passe dans le système est égal au nombre moyen d'éléments dans le système divisé par le débit moyen de leur sortie. Si votre équipe termine cinq éléments par semaine et en a 25 en cours, l'élément moyen prend environ cinq semaines. Pour raccourcir le temps sans travailler plus vite, réduisez le nombre d'éléments en cours.

**Délai total et temps de cycle.** Le délai total (lead time) est le temps pendant lequel un client attend, de la demande à la livraison. Le temps de cycle (cycle time) est le temps que prend un élément une fois le travail commencé. Les définitions varient selon les équipes ; écrivez les vôtres. Le débit est le nombre d'éléments terminés sur une période.

**La méthode kanban.** Kanban signifie « panneau » ou « carte » en japonais. Le système de production Toyota, développé avec Taiichi Ohno, utilisait des cartes pour signaler quand davantage de pièces étaient nécessaires, de sorte que la production était tirée par la demande. David J. Anderson a adapté ces idées au travail de connaissance dans les années 2000 sous le nom de méthode Kanban, que décrit Wikipedia. Ses pratiques essentielles comprennent la visualisation du travail, la limitation du WIP, la gestion du flux, l'explicitation des règles, la mise en place de boucles de rétroaction et l'amélioration collaborative.

**Le tableau.** Un tableau kanban montre les éléments de travail sous forme de cartes dans des colonnes qui représentent des étapes, comme « à faire », « en cours », « en revue » et « terminé ». Les tableaux peuvent être physiques ou numériques. Un tableau ne définit pas un processus ; il montre celui que vous avez.

**Limites de WIP.** Un plafond sur le nombre d'éléments autorisés dans une étape ou sur le tableau. Lorsque la limite est atteinte, l'équipe ne commence pas de nouveau travail ; elle aide à terminer quelque chose. Cela paraît lent au début et rend la livraison plus rapide et plus régulière.

**Classes de service.** Tous les éléments ne doivent pas attendre dans la même file. Une équipe peut traiter les éléments urgents, comme les incidents majeurs, comme une classe « accélérée » avec une limite stricte, les éléments à date fixe comme une autre classe et les éléments ordinaires comme standard. Les classes rendent les arbitrages explicites et empêchent que chaque élément soit déclaré urgent.

**Goulots d'étranglement.** Une étape qui limite le débit du système. La théorie des contraintes, développée par Eliyahu Goldratt, conseille de trouver le goulot d'étranglement, de veiller à ce qu'il ne soit jamais inactif et de l'améliorer, car accélérer toute autre chose n'aide pas. Une limite de WIP révèle souvent le goulot comme la colonne où le travail s'accumule.

**Diagramme de flux cumulé.** Un graphique qui montre le nombre d'éléments dans chaque état au fil du temps. Des bandes qui s'élargissent révèlent des files qui se forment. C'est un moyen rapide de voir si le flux est stable.

**Adapté au travail de service.** Les équipes de service traitent un flux de travaux de natures différentes à l'arrivée imprévisible, ce qui convient mieux aux méthodes de flux qu'à des cycles de planification fixes. Si votre équipe choisit d'utiliser des sprints, les mesures de flux aident quand même à voir ce qui se passe à l'intérieur.

**Comment les angles s'articulent.** La pratique agile demande une livraison et une amélioration continues ; les mesures de flux montrent si c'est le cas. L'IA peut résumer le tableau ou suggérer des catégories de tri, sous revue. L'automatisation peut mettre à jour les cartes et faire respecter les limites. L'analytique fournit les mesures, avec le risque habituel qu'elles deviennent des objectifs.

## Bonnes pratiques

1. **Visualiser tout le travail.** Placez chaque type de travail sur le tableau : incidents, demandes, changements, améliorations et interruptions imprévues. Un tableau qui ne montre que le travail de « projet » masque la charge.
2. **Définir les colonnes à partir du processus réel.** Créez des colonnes qui correspondent à la façon dont le travail circule réellement, y compris les états d'attente comme « en attente du client ». C'est dans les états d'attente que se cache le retard.
3. **Fixer des limites de WIP et les respecter.** Commencez par une limite légèrement inférieure au nombre actuel et ajustez après observation. Quand une colonne est pleine, aidez à faire avancer les éléments avant d'en commencer un nouveau.
4. **Expliciter les règles.** Écrivez sur le tableau ou à côté ce que signifient « prêt » et « terminé », comment les éléments sont priorisés et qui peut accélérer. Les règles non écrites créent des disputes.
5. **Utiliser les classes de service avec discernement.** Définissez un petit nombre de classes, avec leurs propres limites et délais attendus. Examinez régulièrement la classe accélérée : si elle est toujours pleine, le système est surchargé ou les priorités sont floues.
6. **Mesurer le délai total, le temps de cycle et le débit.** Rapportez-les sous forme de distributions, par exemple « 85 % des éléments se terminent en 9 jours », et pas seulement de moyennes. Les distributions montrent le risque que les clients courent réellement.
7. **Regarder les éléments les plus anciens.** Examinez à une réunion régulière les éléments en cours depuis le plus longtemps. Les vieux éléments signalent généralement une dépendance bloquée ou un responsable flou.
8. **Trouver et améliorer le goulot d'étranglement.** Quand le travail s'accumule à un endroit, demandez ce qui le limite et faites-en l'amélioration prioritaire.
9. **Examiner le tableau ensemble.** Une courte conversation régulière devant le tableau, debout ou non, donne à l'équipe une vue partagée. Concentrez-vous sur les éléments bloqués et vieillissants, pas sur le compte rendu.
10. **Faire évoluer le tableau.** Changez colonnes, limites et règles à mesure que vous apprenez. Si votre équipe choisit d'utiliser Kanban, traitez-le comme un point de départ que vous adaptez.

## Questions à discuter avec votre équipe

**Combien de travail avons-nous en cours en ce moment, et comment le savons-nous ?**
Les équipes sont souvent surprises du nombre une fois qu'elles comptent. Demandez à chacun de lister ce sur quoi il travaille, interruptions comprises. Attendez-vous à une longue liste et à des éléments dont personne ne se souvient. Demandez ensuite de convenir d'une première limite, même approximative.

**Où le travail attend-il le plus longtemps, et qui attend-il ?**
L'attente est la principale source de retard. Les réponses typiques sont les approbations, un spécialiste, le client ou un fournisseur. Utilisez un exemple réel avec des dates. Demandez ensuite de choisir une attente et qui pourrait la raccourcir.

**Quels types de travail ne devraient jamais attendre dans la file ordinaire ?**
Cela introduit les classes de service. Les incidents majeurs et les échéances légales sont des réponses courantes, et chacun peut ajouter ses favoris. Insistez sur les critères. Demandez ensuite de convenir d'une courte liste et d'une limite pour le travail accéléré.

**Que se passe-t-il quand le tableau est plein et qu'une nouvelle demande arrive ?**
Cela teste la discipline. Les équipes commencent souvent quand même le nouvel élément. Demandez quelle devrait être la règle et qui décide. Demandez ensuite de convenir d'une règle pour chaque type de demande.

**Quelle mesure nous dirait que le flux s'est amélioré, et comment pourrait-elle être mal lue ?**
Choisissez une mesure, comme le délai dans lequel 85 % des éléments se terminent, et discutez de la façon dont elle pourrait être détournée, par exemple en découpant des éléments ou en les fermant puis en les rouvrant. Demandez ensuite de convenir de la façon de confronter la mesure à la réalité.

**Où l'automatisation ou l'IA pourraient-elles aider le flux sans masquer les problèmes ?**
Les mises à jour automatiques de cartes et les catégories suggérées peuvent faire gagner du temps. Elles peuvent aussi faire passer un élément bloqué pour « en cours ». Demandez qui est responsable de chaque règle automatisée et comment les erreurs sont repérées. Demandez ensuite de choisir un usage à faible risque et une date de revue.

## En pratique : un exemple de gestion des services

L'équipe de support des systèmes cliniques d'un hôpital traite environ 100 demandes par semaine : modifications de comptes, demandes de rapports, corrections mineures et pannes urgentes. L'équipe de sept personnes utilise une boîte de courriel et un outil de tickets, et les cliniciens se plaignent que les demandes « disparaissent ».

Le responsable de l'équipe construit un tableau physique dans la salle de l'équipe, avec une carte pour chaque élément ouvert, soit environ 70 au total. Le comptage révèle que chaque personne a en moyenne dix éléments en cours. Le responsable ajoute des colonnes « en attente du clinicien » et « en attente du fournisseur », qui contiennent 25 des 70 éléments. L'équipe fixe une limite de quatre éléments en cours par personne et de deux éléments accélérés à la fois. Ils conviennent de règles : les pannes urgentes qui touchent la prise en charge des patients vont dans la voie accélérée et sont traitées en premier ; tout le reste est traité dans l'ordre d'arrivée.

Après deux mois, le temps médian pour terminer une demande passe de 12 à 7 jours ouvrés, et l'élément ouvert le plus ancien a 20 jours au lieu de 70. La colonne « en attente du clinicien » grossit, et l'équipe comprend que beaucoup de demandes manquent d'informations. Elle ajoute un court formulaire qui pose les questions souvent oubliées.

Ce qui change : les cliniciens peuvent voir où en est une demande, et l'équipe passe moins de temps à répondre aux courriels « où en est-on ? ». Ce qui reste difficile : les éléments en attente du fournisseur prennent encore des semaines et l'équipe ne peut pas les maîtriser ; la voie accélérée sert parfois à des demandes qui sont simplement importantes pour un cadre supérieur ; et l'outil de tickets numérique et le tableau physique divergent quand les gens oublient d'en mettre un à jour. L'équipe revoit les règles chaque mois et prévoit de déplacer le tableau dans l'outil.

## Quatre perspectives

### Équipes produit et de livraison

Utilisez le tableau pour voir tout le travail, interruptions d'exploitation comprises, et limitez le travail en cours pour que les fonctionnalités et les corrections se terminent. Partagez les mesures de flux avec l'exploitation pour trouver où les changements attendent.

### Équipes de service et d'exploitation

Vous êtes les utilisateurs naturels des méthodes de flux. Rendez visible tout le flux, convenez de classes de service et servez-vous des limites pour empêcher les interruptions de submerger le travail planifié. Apportez les preuves des retards à ceux qui peuvent les lever.

### Direction et gouvernance

Demandez les mesures de flux sous forme de distributions et regardez les éléments les plus anciens. Évitez de pousser davantage de travail dans un système plein. Soutenez les équipes pour qu'elles changent leurs règles plutôt que d'exiger plus de production.

### Clients et utilisateurs

Vous devriez pouvoir voir où en est votre demande, combien de temps de telles demandes prennent habituellement et ce que l'équipe attend. Dites à l'équipe quand quelque chose est urgent et pourquoi, car une raison claire l'aide à décider.

## Agilité, IA, automatisation et analytique

### Agilité

Le flux soutient la livraison et l'amélioration continues en exposant les retards et en encourageant de petits éléments terminés. Attention : un tableau n'est pas à lui seul un système d'amélioration ; servez-vous-en pour susciter une revue régulière avec les parties prenantes.

### IA

L'IA peut résumer le tableau, suggérer des catégories pour de nouveaux éléments et signaler les éléments vieillissants ou bloqués, avec une personne qui relit et un responsable pour chaque règle. Attention : un classificateur d'IA qui devine mal envoie le travail dans la mauvaise file ; suivez le taux de corrections. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez la création de cartes à partir de l'outil de tickets, la mise à jour des états à partir d'événements et l'alerte en cas de dépassement des limites de WIP. Tenez un journal. Attention : les changements d'état automatiques peuvent donner au flux une meilleure allure qu'il ne l'est ; échantillonnez des éléments réels pour vérifier. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Utilisez les distributions de délai total, le débit, l'ancienneté du travail en cours et les diagrammes de flux cumulé. Attention : chacun peut être détourné en découpant, fusionnant ou rebaptisant des éléments, et comparer des équipes ignore les différences de travail ; utilisez-les pour comprendre votre propre système. Voir le Sujet 7.6 — Analytique des processus et des flux de valeur et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Un tableau sans limites.** Les cartes s'empilent et rien ne change. Fixez une limite et respectez-la.
- **Seulement le travail planifié sur le tableau.** Les interruptions sont invisibles et la charge sous-estimée. Montrez tous les types de travail.
- **Tout est accéléré.** La voie rapide s'engorge. Limitez-la et examinez chaque usage.
- **Seulement des moyennes.** La moyenne cache les longs retards. Rapportez des distributions et les éléments les plus anciens.
- **Détournement des mesures.** Les éléments sont découpés ou clos trop tôt. Confrontez les mesures à des éléments réels.
- **Traiter Kanban comme l'objectif.** L'équipe copie un tableau et ignore le flux. Regardez les délais de livraison et les attentes.
- **Optimiser ce qui n'est pas le goulot.** L'effort va à la mauvaise étape. Trouvez où le travail s'accumule.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Visibilité | Travail dans les boîtes de réception et les têtes | Un tableau pour le travail planifié | Tout le travail visible avec des règles explicites | Tableau et outils cohérents et fiables | Flux visible entre équipes et fournisseurs |
| Maîtrise du WIP | Aucune limite | Limites informelles | Limites convenues et règles d'exception | Limites ajustées d'après les données | Limites coordonnées entre équipes dépendantes |
| Mesures de flux | Aucune | Comptage des éléments | Délai total et débit sous forme de distributions | Mesures utilisées pour trouver les goulots | Mesures partagées et exploitées dans tout le système |
| Classes de service | Une seule file | Urgent ou non | Classes définies avec limites | Classes examinées avec des preuves | Classes alignées entre équipes et accords |

## Liste de contrôle

- [ ] Tous les types de travail, interruptions comprises, sont sur le tableau.
- [ ] Les colonnes incluent les états d'attente.
- [ ] Nous avons des limites de WIP et une règle pour le cas où elles sont atteintes.
- [ ] Les règles de « prêt », « terminé », de priorité et d'accélération sont écrites.
- [ ] Nous mesurons le délai total, le temps de cycle et le débit sous forme de distributions.
- [ ] Nous examinons régulièrement les éléments les plus anciens.
- [ ] Nous connaissons notre goulot d'étranglement actuel et avons une amélioration pour lui.
- [ ] Nous confrontons les mesures à des éléments réels pour détecter les détournements.

## Invites d'IA

**Trouver des tendances dans les données du tableau.**

```text
Here is an export of our items with created, started, and finished dates and state changes: [paste data with names removed].
Calculate the median and 85th percentile lead time, list the five oldest open items, and note where items spend the most time. Do not infer causes. Mark any data problems you notice.
List what you are unsure of.
```

**Suggérer des classes de service.**

```text
Our team handles these kinds of work: [list with typical urgency and volume].
Propose up to four classes of service, a limit for each, and a rule for entry to the fastest class. Explain the trade-offs of each choice and flag assumptions.
List what you are unsure of.
```

**Préparer une revue du tableau.**

```text
Below is the current state of our board: [paste columns, items, ages, and blockers].
List the five items I should discuss first and why, and three questions to ask about each. Do not assign blame or propose solutions.
List what you are unsure of.
```

## Compétences d'IA

- [kanban](../../../../skills/kanban/SKILL.md) : à utiliser pour mettre en place et faire fonctionner un tableau avec des limites et des règles.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les attentes et les transferts.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md) : à utiliser pour suivre le flux entre équipes.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md) : à utiliser pour définir des mesures de flux avec leurs risques.

## Sources principales

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010) : la source de la méthode pour le travail de connaissance.
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988) : l'origine de la carte kanban.
- Wikipedia, « Kanban (development) » : un aperçu de la méthode.
- Wikipedia, « Little's law » : la formule derrière les limites de WIP.

## Références

1. Kanban — Wikipedia — https://en.wikipedia.org/wiki/Kanban
2. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
3. Work in process — Wikipedia — https://en.wikipedia.org/wiki/Work_in_process
4. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
5. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
6. Cumulative flow diagram — Wikipedia — https://en.wikipedia.org/wiki/Cumulative_flow_diagram
7. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
8. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
9. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
10. Taiichi Ohno — Wikipedia — https://en.wikipedia.org/wiki/Taiichi_Ohno
