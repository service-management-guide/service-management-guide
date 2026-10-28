# Automatisation et orchestration des flux de travail

**L'automatisation des flux de travail fait passer le travail entre personnes et systèmes selon des règles ; l'orchestration coordonne de nombreuses étapes de ce type entre outils, avec approbations, reprises et un enregistrement de l'état ; elles fonctionnent quand les flux sont simples, idempotents, observables et conçus pour les humains qui doivent intervenir.**

## Pourquoi c'est important

L'essentiel du travail de service est un relais. Une demande commence dans un portail, passe chez un responsable pour approbation, crée un compte dans un système, une boîte aux lettres dans un autre, une licence dans un troisième, un ticket pour les installations et un message au demandeur. Chaque passage de témoin est une occasion d'attendre, de perdre de l'information ou d'être oublié. Quand les gens font le passage par courriel et de mémoire, le retard et l'erreur sont intégrés.

L'automatisation des flux de travail remplace le passage par un flux défini. Le système connaît les étapes, qui ou quoi fait chacune, que faire quand une étape échoue et ce qui s'est passé jusque-là. L'orchestration est la même idée à plus grande échelle : un coordinateur qui appelle de nombreux systèmes dans le bon ordre, attend les résultats et traite les cas délicats. Wikipedia décrit les flux de travail, les systèmes de gestion de flux de travail et l'orchestration en informatique comme des moyens de définir et d'exécuter de tels flux.

La promesse est un travail plus rapide, plus cohérent, avec une trace visible. Les risques sont familiers d'autres formes d'automatisation : un processus défaillant est durci dans le code, une défaillance à mi-chemin laisse les choses incohérentes et un changement dans un système connecté casse le flux en silence. Une bonne conception les anticipe. Ce sujet décrit les principaux éléments de base, les modèles qui gardent les flux fiables et la place des personnes dans ceux-ci. Il s'appuie sur le Sujet 6.1 — Stratégie d'automatisation, se rattache aux demandes de service (Sujet 3.6 — Gestion des demandes de service) et mène au libre-service (Sujet 6.5 — Libre-service et traitement automatisé) et aux pipelines (Sujet 6.4 — Pipelines et changements automatisés).

## Concepts clés

**Flux de travail.** Une séquence d'étapes, avec des règles sur qui ou quoi accomplit chacune, dans quel ordre et sous quelles conditions. Wikipedia décrit le flux de travail comme un schéma d'activité orchestré et reproductible. Un flux de travail peut être aussi simple que « quand un ticket est marqué résolu, prévenir le demandeur » ou aussi complexe qu'un parcours complet d'arrivée d'un nouvel employé.

**Moteur de flux de travail.** Un logiciel qui exécute des flux de travail : il suit l'état de chaque instance, exécute les étapes, attend les événements et consigne ce qui s'est passé. Wikipedia décrit les moteurs de flux de travail et les systèmes de gestion de flux de travail. De nombreuses plateformes de tickets en incluent un, et il existe des plateformes autonomes pour les flux entre systèmes.

**Orchestration.** Coordonner plusieurs tâches et services automatisés en un seul processus, typiquement depuis un contrôleur central qui appelle chacun à son tour. Wikipedia décrit l'orchestration en informatique. Elle s'oppose à la chorégraphie, dans laquelle les services réagissent aux événements sans contrôleur central. L'orchestration est plus facile à voir et à déboguer ; la chorégraphie peut être plus résiliente et évolutive. De nombreuses organisations emploient les deux.

**Modélisation.** Les flux peuvent être dessinés avec une notation comme le Business Process Model and Notation (BPMN), décrit sur Wikipedia, puis exécutés. Les schémas aident les métiers et les techniciens à s'accorder sur un flux. Gardez-les lisibles et gardez le modèle et le flux en fonctionnement en phase.

**État.** Ce qui a été fait jusque-là dans une instance d'un flux de travail. Connaître l'état permet au système de reprendre après une défaillance, de montrer l'avancement et de rendre compte. Wikipedia décrit les automates finis, une manière utile de penser une demande « soumise », « approuvée », « traitée » et « close ».

**Déclencheurs et événements.** Un flux de travail démarre à partir d'un déclencheur : un formulaire, un message, un calendrier, un changement dans un système. Les approches pilotées par les événements, décrites sur Wikipedia comme l'architecture pilotée par les événements, permettent aux systèmes d'annoncer ce qui s'est passé pour que d'autres réagissent. Les webhooks, également décrits là, sont un moyen courant pour un système d'en prévenir un autre.

**Intégration.** Les flux de travail appellent d'autres systèmes par des interfaces de programmation (API), des connecteurs ou des plateformes d'intégration. Wikipedia décrit les API et l'intégration d'applications d'entreprise. C'est dans l'intégration que la plupart des flux cassent, parce que les systèmes changent leurs interfaces, leurs limites de débit et leurs identifiants.

**Idempotence et reprises.** Une opération est idempotente si la faire deux fois a le même effet que la faire une fois. Wikipedia décrit l'idempotence. Quand une étape échoue ou expire, la réponse sûre est souvent de réessayer, ce qui n'est sûr que si l'étape est idempotente. Les reprises devraient attendre plus longtemps à chaque fois, une technique décrite sur Wikipedia comme le recul exponentiel (exponential backoff), et s'arrêter après une limite.

**Gestion des échecs.** Que se passe-t-il quand l'étape quatre sur sept échoue ? Les options comprennent réessayer, sauter, compenser les étapes précédentes en les annulant, ou s'arrêter et demander à une personne. Les flux de longue durée qui traversent des systèmes ne peuvent pas s'appuyer sur une seule transaction ; Wikipedia décrit l'approche par saga, dans laquelle chaque étape a une action compensatoire. Les échecs qui ne peuvent être traités automatiquement devraient aller dans une file avec un responsable clair, non disparaître. Wikipedia décrit les files de lettres mortes pour les messages qui ne peuvent être traités.

**Tâches humaines et approbations.** De nombreux flux de travail ont besoin d'une personne : pour approuver, décider ou faire quelque chose qui ne peut être automatisé. Wikipedia décrit les systèmes avec humain dans la boucle. Concevez ces tâches avec soin : qui est sollicité, comment il reçoit des rappels, ce qui se passe s'il ne répond pas et quelle information il voit. Une approbation qui attend indéfiniment bloque le flux.

**Observabilité et audit.** Chaque instance devrait être traçable : ce qui l'a déclenchée, ce que chaque étape a fait, quel a été le résultat et qui a approuvé. Wikipedia décrit les pistes d'audit. Cela soutient les questions de support (« où en est ma demande ? »), le dépannage et la conformité. Voir le Sujet 7.4 — Observabilité et télémétrie.

**Faible code et automatisation robotisée des processus.** Les plateformes à faible code (low-code) et l'automatisation robotisée des processus (RPA) permettent à des personnes qui ne sont pas programmeuses de construire des flux de travail ou d'automatiser des actions dans des interfaces utilisateur. Wikipedia décrit les deux. Elles accélèrent les cas simples et peuvent produire, à grande échelle, des automatisations fragiles et sans responsable. Appliquez les mêmes règles de responsabilité, de test et de revue que pour du code.

**Versionnage et changement.** Une définition de flux de travail change au fil du temps tandis que des instances sont encore en cours. Décidez comment traiter les instances en cours quand vous changez la définition. Gardez les définitions en gestion de versions et testez les changements avant de déployer. Voir le Sujet 3.4 — Habilitation des changements.

**Sécurité.** Les flux de travail détiennent des identifiants et appellent des systèmes avec du pouvoir. Donnez-leur leurs propres identités avec un minimum de permissions, stockez les secrets en sécurité et examinez qui peut modifier un flux. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Comment les angles s'articulent.** Les outils de flux de travail sont la plomberie de l'angle automatisation. La pratique agile suggère de construire un flux de travail par petites étapes avec les utilisateurs. L'IA peut classer des demandes, rédiger du contenu et faire des suggestions à l'intérieur d'un flux, avec revue humaine. L'analytique utilise les données d'état et de durée pour trouver les retards.

## Bonnes pratiques

1. **Cartographier et simplifier avant de construire.** Dessinez le processus tel qu'il est, supprimez les étapes sans valeur et convenez du flux futur avec les personnes concernées. Voir le Sujet 6.1 — Stratégie d'automatisation.
2. **Garder les flux petits et clairs.** Préférez plusieurs courts flux avec des transferts définis à un seul énorme. Nommez les étapes en langage simple pour que le personnel de support puisse les suivre.
3. **Concevoir chaque étape pour qu'on puisse la répéter sans danger.** Rendez les étapes idempotentes lorsque vous le pouvez, de sorte que réessayer soit inoffensif. Là où vous ne le pouvez pas, ajoutez des contrôles qui détectent que l'étape a déjà eu lieu.
4. **Planifier l'échec.** Pour chaque étape, décidez ce qui se passe en cas d'échec : réessayer avec recul et une limite, compenser ou passer à une personne. Envoyez les échecs non résolus dans une file visible avec un responsable.
5. **Traiter les tâches humaines comme des éléments de premier rang.** Précisez qui, ce qu'il voit, combien de temps il a, les rappels et ce qui se passe en cas de délai dépassé ou d'absence. Prévoyez un suppléant.
6. **Montrer l'état aux utilisateurs.** Laissez les demandeurs voir où en est leur demande et ce qui est attendu ensuite. Envoyez des notifications à des moments significatifs, non à chaque étape.
7. **Journaliser et tracer chaque instance.** Consignez déclencheurs, entrées, sorties, décisions et approbateurs. Facilitez la recherche d'une instance par sa référence.
8. **Contrôler les changements des flux de travail.** Gardez les définitions en gestion de versions, relisez les changements, testez-les dans un environnement sûr et décidez comment traiter les instances en cours.
9. **Gérer les connexions.** Tenez un registre des intégrations avec responsables, identifiants et points de contact pour chaque système. Surveillez les défaillances et guettez les changements d'interface annoncés.
10. **Examiner la performance.** Regardez le temps par étape, l'attente, les échecs et les exceptions. Utilisez les données pour supprimer les goulots d'étranglement et retirer les flux dont personne ne se sert.

## Questions à discuter avec votre équipe

**Lesquels de nos processus font passer le plus de travail entre personnes et systèmes, et où le travail se perd-il ?**
Suivez un exemple réel. Attendez-vous à un transfert par courriel ou par conversation quelque part. Demandez ensuite de choisir un transfert à automatiser.

**Que se passe-t-il aujourd'hui quand une étape échoue à mi-chemin d'un processus, et qui le sait ?**
Pensez à une création de compte qui a réussi dans un système et échoué dans un autre. Attendez-vous à de l'incohérence. Demandez ensuite de concevoir une voie d'échec pour un flux.

**Lesquelles de nos approbations bloquent, et que devrait-il se passer si l'approbateur ne répond pas ?**
Regardez les plus anciens éléments en attente. Attendez-vous à de longs retards. Demandez ensuite de convenir d'un rappel, d'un suppléant et d'une règle de délai.

**Qui est responsable de chaque intégration sur laquelle reposent nos flux, et comment saurions-nous qu'elle est cassée ?**
Listez les intégrations. Attendez-vous à des orphelines. Demandez ensuite de nommer des responsables et d'ajouter une alerte en cas de défaillance.

**Lesquels de nos flux ont été construits par une seule personne avec un outil à faible code et ne sont peut-être compris de personne d'autre ?**
Demandez autour de vous. Attendez-vous à plusieurs. Demandez ensuite de documenter les trois principaux et de les placer en gestion de versions ou dans un registre partagé.

**Où l'IA pourrait-elle aider à l'intérieur d'un flux, et où une personne doit-elle décider ?**
L'IA peut classer, rédiger et suggérer. Une personne devrait décider de l'accès et de l'argent. Demandez ensuite de choisir une étape à essayer avec revue, et une mesure de justesse de l'orientation.

## En pratique : un exemple de gestion des services

Les équipes RH et informatique d'une banque régionale gèrent par courriel les événements « arrivée, mutation, départ ». Un nouvel arrivant a besoin d'un compte, d'un ordinateur portable, d'un accès au bâtiment, d'un dossier de paie et d'une inscription à une formation, traités par cinq équipes. Chaque équipe reçoit un courriel des RH, fait sa part et répond parfois. Environ un nouvel arrivant sur cinq manque de quelque chose le premier jour.

La responsable des services propose un flux de travail unique sur la plateforme de tickets de la banque, qui dispose d'un moteur de flux de travail et de connecteurs. Elle commence par cartographier le processus avec les cinq équipes et constate que trois des approbations ne sont jamais refusées. La nouvelle conception en supprime deux et en garde une, celle du responsable du nouvel arrivant. Le dossier du nouvel employé dans les RH déclenche le flux. Il crée un dossier parent avec cinq tâches enfants, chacune affectée à la file de la bonne équipe, s'exécutant en parallèle lorsque c'est possible. La création de compte est automatisée avec un connecteur du système d'identité ; la tâche de l'ordinateur portable va à un technicien ; l'accès au bâtiment va aux installations avec la date de début.

L'équipe conçoit pour l'échec. La création de compte est idempotente : le connecteur vérifie si le compte existe avant de le créer. Si le connecteur échoue deux fois avec recul, la tâche va dans une file de technicien avec l'erreur jointe, et une alerte part vers le responsable du flux. Les tâches humaines ont des rappels après un jour et escaladent vers un chef d'équipe après trois. Chaque dossier montre son état aux RH et au responsable du nouvel arrivant.

Après trois mois, la part des nouveaux arrivants à qui il manque quelque chose le premier jour tombe à environ 4 %. La piste d'audit permet au centre de services de répondre à « où est-ce ? » en une minute. Ce qui reste difficile : le connecteur de paie dépend d'une interface d'éditeur qui a changé une fois sans préavis, causant une exécution en échec que personne n'a vue pendant deux jours jusqu'à l'ajout de l'alerte ; l'équipe des installations travaille encore à partir d'un tableur et recopie à la main les données du dossier ; et les événements de mutation et de départ comportent davantage d'exceptions et n'ont pas encore été inclus. La responsable prévoit ensuite les événements de mutation et demande à l'éditeur des avis de changement.

## Quatre perspectives

### Équipes produit et de livraison

Exposez des API et des événements stables et documentés que les flux de travail peuvent utiliser, avec des messages d'erreur clairs. Prévenez les responsables de flux des changements à l'avance. Appliquez les mêmes idées à vos propres flux de mise en production.

### Équipes de service et d'exploitation

Soyez responsables des flux et intégrations que vous exploitez : journaux, alertes, files d'échec et documentation. Traitez promptement les exceptions et apportez les motifs au responsable du flux.

### Direction et gouvernance

Demandez la vue du parcours, avec un responsable pour chaque flux transversal. Financez l'entretien des intégrations. Cherchez des preuves d'un flux plus rapide et plus fiable, non un nombre de flux de travail.

### Clients et utilisateurs

Vous devriez voir l'état de votre demande et obtenir ce que vous avez demandé sans avoir à relancer. Quand une étape a besoin de votre contribution, ce qui est nécessaire et pour quand devrait être clair.

## Agilité, IA, automatisation et analytique

### Agilité

Construisez les flux de travail un parcours à la fois avec ceux qui les utilisent, livrez de petites améliorations et examinez les résultats. Attention : un déploiement de plateforme qui migre tous les processus d'un coup multiplie le risque ; commencez par un parcours.

### IA

L'IA peut classer les demandes entrantes, extraire des détails de texte libre, rédiger des messages et suggérer l'orientation, avec une personne ou une règle qui vérifie avant les actions. Nommez un responsable et suivez les corrections. Attention : une étape d'IA dans un flux peut envoyer le travail au mauvais endroit à grande échelle ; échantillonnez les résultats et gardez une file de repli. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Les flux de travail sont le cœur de cet angle. Construisez avec des étapes idempotentes, des limites et des journaux, et gardez chaque intégration attribuée et surveillée. Attention : un flux qui touche de nombreux systèmes peut étendre largement une erreur ; ajoutez des limites de débit et un arrêt d'urgence. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Utilisez les données de flux pour le temps par étape, l'attente d'approbations, les taux d'échec, les exceptions et le volume par type. Attention : les données de durée reflètent la façon dont les étapes sont définies et peuvent être détournées en scindant ou reclassant des tâches ; vérifiez avec des cas échantillonnés. Voir le Sujet 7.6 — Analytique des processus et des flux de valeur et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Automatiser un mauvais processus.** Le gaspillage est préservé. Simplifiez et convenez du flux d'abord.
- **Pas de conception de l'échec.** Une étape échoue et l'instance est bloquée. Définissez reprises, compensation et files.
- **Des reprises non idempotentes.** Des doublons sont créés. Rendez les étapes sûres à répéter, ou vérifiez d'abord.
- **Des approbations qui bloquent.** Le travail attend une personne absente. Ajoutez rappels, suppléants et délais.
- **Une défaillance d'intégration silencieuse.** Un connecteur casse et personne ne le sait. Surveillez et alertez.
- **Des flux à faible code sans responsable.** Personne ne les comprend. Enregistrez, documentez et revoyez.
- **Changer les définitions à la légère.** Les instances en cours cassent. Versionnez et testez les changements.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Conception | Transferts par courriel | Quelques flux simples | Parcours cartographiés et simplifiés avec responsables | Flux améliorés d'après les données | Parcours orchestrés entre systèmes et partenaires |
| Fiabilité | Casse sans qu'on le remarque | Alertes de base | Reprises définies, files d'échec et étapes idempotentes | Échecs mesurés et réduits | Flux qui s'auto-vérifient avec escalade humaine |
| Tâches humaines | Au cas par cas | Approbations par courriel | Tâches, rappels et suppléants définis | Retards des tâches mesurés | Tâches humaines équilibrées et automatisées selon le risque |
| Contrôle | Aucun enregistrement | Quelques journaux | Gestion de versions, piste d'audit et registre | Changements examinés et audités | Gouvernance intégrée à la plateforme |

## Liste de contrôle

- [ ] Nous avons cartographié et simplifié chaque processus avant de l'automatiser.
- [ ] Les flux sont petits, nommés en langage simple et attribués.
- [ ] Les étapes sont idempotentes ou protégées contre la duplication.
- [ ] Les voies d'échec et les files sont définies, avec des alertes.
- [ ] Les tâches humaines ont des rappels, des suppléants et des délais.
- [ ] Chaque instance est journalisée et traçable.
- [ ] Les définitions sont en gestion de versions et les changements sont testés.
- [ ] Les intégrations ont des responsables et une surveillance.

## Invites d'IA

**Transformer une procédure en plan de flux de travail.**

```text
Here is a description of how we handle [type of request] today: [paste steps and who does each].
Draft a workflow outline with: trigger, steps (marking each as automated, human, or approval), data passed between steps, and for each step what should happen on failure or no response. Mark every assumption. Do not invent systems or rules.
List what you are unsure of.
```

**Trouver les points de défaillance dans un flux.**

```text
Here is our workflow definition in plain text: [paste].
List each step that calls another system, what could go wrong, whether it appears to be safe to retry, and what information a support person would need to fix it. Do not rewrite the workflow.
List what you are unsure of.
```

**Analyser les retards à partir des données de flux.**

```text
Here is an export of workflow instances with step names, start and end times, and outcome, with identifiers removed: [paste].
Compute median and 90th percentile time for each step, list the three longest waits, count failures by step, and list questions to investigate. Do not infer causes.
List what you are unsure of.
```

## Compétences d'IA

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les étapes, les attentes et les transferts.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md) : à utiliser pour voir le parcours entier entre équipes.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md) : à utiliser pour dessiner des flux de travail en texte pour revue.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour attribuer qui fait et qui approuve chaque étape.
- [change-request](../../../../skills/change-request/SKILL.md) : à utiliser pour décrire les changements aux définitions de flux de travail.

## Sources principales

- OMG, spécification Business Process Model and Notation (BPMN) : la notation standard pour les schémas de processus.
- Gregor Hohpe et Bobby Woolf, *Enterprise Integration Patterns* (2003) : un catalogue de modèles pour relier des systèmes.
- Wikipedia, « Workflow » et « Orchestration (computing) » : des aperçus des idées.
- Wikipedia, « Idempotence » : la propriété qui rend les reprises sûres.

## Références

1. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
2. Workflow engine — Wikipedia — https://en.wikipedia.org/wiki/Workflow_engine
3. Workflow management system — Wikipedia — https://en.wikipedia.org/wiki/Workflow_management_system
4. Orchestration (computing) — Wikipedia — https://en.wikipedia.org/wiki/Orchestration_(computing)
5. Business Process Model and Notation — Wikipedia — https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
6. Finite-state machine — Wikipedia — https://en.wikipedia.org/wiki/Finite-state_machine
7. Event-driven architecture — Wikipedia — https://en.wikipedia.org/wiki/Event-driven_architecture
8. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
9. Exponential backoff — Wikipedia — https://en.wikipedia.org/wiki/Exponential_backoff
10. Dead letter queue — Wikipedia — https://en.wikipedia.org/wiki/Dead_letter_queue
11. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
