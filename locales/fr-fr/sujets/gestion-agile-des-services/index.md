# Gestion agile des services

**La gestion agile des services applique les valeurs agiles à la conception et à l'amélioration des pratiques de gestion des services elles-mêmes : chaque pratique a un responsable qui agit comme un responsable de produit, un petit backlog d'améliorations, des boucles de rétroaction courtes avec ceux qui utilisent la pratique, et des contrôles intégrés au travail.**

## Pourquoi c'est important

Les pratiques de gestion des services sont souvent conçues une fois, consignées dans un document de processus et imposées. Le document vieillit à mesure que la technologie et l'organisation changent. Les gens contournent des étapes qui n'ont plus de sens, et la pratique s'éloigne de ce que dit le papier. Sa révision devient un projet avec un comité et un long cycle, et quand la révision arrive elle est déjà périmée.

Si les idées agiles sont bonnes pour construire des logiciels, elles devraient l'être aussi pour concevoir les pratiques qui régissent leur exploitation. Une pratique comme l'habilitation des changements peut être traitée comme un produit ayant des utilisateurs, ceux qui soumettent et approuvent les changements. Son responsable peut écouter ces utilisateurs, tenir un backlog de petites améliorations, les livrer souvent et vérifier si elles ont aidé. C'est ce que ce sujet entend par gestion agile des services.

L'idée correspond aux principes directeurs d'ITIL 4, comme « progresser par itérations avec rétroaction » et « partir de là où l'on est » (voir le Sujet 1.5 — Les principes directeurs d'ITIL), et s'accorde avec l'accent mis par le système de valeur des services sur l'amélioration continue. La description de la version la plus récente d'ITIL par son propriétaire insiste sur une approche de création de valeur qui relie stratégie, livraison et résultats mesurables (voir le Sujet 1.3 — ITIL 5). Des pratiques qui s'améliorent par petites étapes et montrent leurs résultats s'inscrivent dans cette direction.

## Concepts clés

**Les pratiques comme produits.** Une pratique comme la gestion des incidents sert un ensemble d'utilisateurs : intervenants, clients, responsables, auditeurs. Un responsable de pratique, agissant comme un responsable de produit, répond de la qualité du service qu'elle leur rend. Le responsable recueille les retours, tient un backlog de changements de la pratique et décide de ce qu'il faut changer ensuite. Voir le Sujet 2.8 — Propriété des produits et des services.

**Backlog de processus.** Une liste courte et ordonnée d'améliorations de la pratique : un formulaire à simplifier, une étape à supprimer, un rapport à arrêter, une nouvelle automatisation. Les éléments viennent des utilisateurs, des revues d'incidents et de la mesure. L'article de Wikipedia sur les backlogs explique l'idée. Le responsable examine régulièrement la liste avec les utilisateurs et choisit quelques éléments à essayer.

**Petits changements avec rétroaction.** Les changements de pratique se font en petits morceaux et sont d'abord essayés auprès d'un groupe limité, par exemple une équipe ou un type de demande. Le responsable demande aux utilisateurs ce qui s'est passé et garde, ajuste ou annule le changement. Cela remplace les grandes réécritures d'un document de processus.

**Utilisateurs de la pratique.** Ceux qui doivent suivre la pratique en sont les principaux utilisateurs. Leur expérience compte : une pratique qu'ils ne peuvent pas suivre sera ignorée ou détournée. Impliquez-en quelques-uns dans chaque changement.

**Contrôles dans le travail.** Là où une pratique existe pour gérer un risque, comme l'approbation des changements risqués, la gestion agile des services préfère intégrer le contrôle dans les outils et le pipeline, en produisant des preuves comme sous-produit. Voir le Sujet 2.2 — Livraison continue et le Sujet 3.4 — Habilitation des changements.

**Documentation légère.** Décrivez une pratique sur une ou deux pages : finalité, personnes impliquées, ce qui se passe, comment demander de l'aide et comment elle est améliorée. Gardez le détail dans les outils et dans de courts guides à jour. Les longs manuels de procédures sont rarement lus.

**Rythme de revue.** Fixez un moment régulier, par exemple mensuel, pour examiner le backlog, les mesures et les retours, et décider de ce qu'il faut changer. Entre les revues, des corrections urgentes peuvent être faites au besoin.

**Expériences.** Traitez un changement comme une expérience avec un effet attendu et une date de vérification. Par exemple : « Nous nous attendons à ce que la suppression de la seconde approbation pour les changements à faible risque réduise le délai d'un jour sans plus d'échecs. Nous vérifierons après quatre semaines. » Si l'effet n'est pas observé, revenez en arrière.

**Agilité et ITIL ensemble.** La gestion agile des services n'abandonne pas le référentiel. Elle utilise les pratiques d'ITIL comme source d'idées et de vocabulaire, et les adapte. Là où une pratique est un contrôle de risque aux conséquences réelles, elle garde le contrôle et change la manière dont il est satisfait.

**Ce que cela ne signifie pas.** Cela ne signifie pas abandonner la documentation, ignorer les exigences d'audit ou tenir des cérémonies pour elles-mêmes. Si votre équipe choisit d'utiliser des sprints ou Kanban pour le travail d'amélioration, ils peuvent convenir ; l'essentiel est le cycle continu de rétroaction et de petits changements.

**Comment les angles s'articulent.** Le backlog du responsable de pratique est l'angle agile tourné vers la gestion des services elle-même. L'IA peut analyser les tickets et les retours pour suggérer des améliorations, sous revue. L'automatisation transforme les règles de pratique en comportement d'outil. L'analytique montre si les pratiques fonctionnent.

## Bonnes pratiques

1. **Nommer un responsable de pratique.** Chaque pratique majeure a une personne responsable de sa qualité et de son amélioration. Le responsable est autant un utilisateur de la pratique que son concepteur.
2. **Partir de ce qui gêne les utilisateurs.** Demandez à ceux qui suivent la pratique ce qui est lent, flou ou inutile, et listez les réponses. Partez de ce qu'ils soulèvent, non de ce que suggère le référentiel.
3. **Tenir un backlog court et visible.** Montrez-le là où les utilisateurs peuvent le voir. Limitez le nombre d'éléments en cours et terminez avant d'en commencer d'autres.
4. **Changer par petites étapes.** Essayez chaque changement avec une équipe ou un type de demande, avec une attente énoncée et une date de revue.
5. **Mesurer l'effet.** Choisissez un ou deux indicateurs pour chaque changement, comme le délai d'approbation ou la part des demandes renvoyées pour informations manquantes. Dites comment la mesure pourrait induire en erreur.
6. **Intégrer les contrôles dans les outils.** Lorsque c'est possible, faites de l'action sûre le choix par défaut, par exemple avec un champ obligatoire ou un contrôle automatisé, et consignez automatiquement les preuves.
7. **Écrire moins, lier plus.** Gardez la description de la pratique courte, renvoyez vers les outils et les exemples, et supprimez les pages que personne ne lit.
8. **Examiner à un rythme régulier.** Tenez une courte revue mensuelle avec quelques utilisateurs et publiez ce qui a changé et pourquoi.
9. **Respecter les exigences réelles.** Consultez l'audit, la sécurité et le juridique lorsqu'un changement touche un contrôle, et impliquez-les tôt afin de pouvoir expliquer comment la nouvelle méthode répond à l'objectif.
10. **Retirer ce qui n'aide pas.** Supprimez les étapes, formulaires et rapports qui ne montrent aucune valeur, et dites-le publiquement.

## Questions à discuter avec votre équipe

**Lesquelles de nos pratiques les gens contournent-ils, et pourquoi ?**
Les contournements montrent où la pratique ne convient pas au travail. Demandez des exemples précis, comme un formulaire rempli de « n/a ». Ne le traitez pas d'abord comme de la non-conformité. Demandez ensuite de choisir un contournement et quel changement faciliterait la voie officielle.

**Qui est responsable de chacune de nos pratiques, et comment entend-il ceux qui les utilisent ?**
De nombreuses pratiques n'ont ni responsable ni canal de retour. Demandez la dernière fois que le responsable a parlé aux utilisateurs. Attendez-vous à du silence. Demandez ensuite de convenir d'une conversation régulière avec quelques utilisateurs.

**Quel est le plus petit changement à une pratique que nous pourrions essayer la semaine prochaine, et comment saurions-nous qu'il a aidé ?**
Cela encourage les petites expériences. Les équipes proposent souvent des refontes. Insistez pour quelque chose de minuscule, avec une mesure et une date de revue. Demandez ensuite de nommer le responsable et celui qui vérifie.

**Lesquels de nos contrôles pourraient être satisfaits par les outils ou le pipeline plutôt que par une réunion ou un formulaire ?**
Cherchez les contrôles qui reposent sur le fait que les gens se souviennent. Demandez quelles preuves l'auditeur exige. Demandez ensuite d'essayer un contrôle automatisé avec la participation du responsable du contrôle.

**Quelle est la longueur de la documentation de nos pratiques, et qui la lit ?**
Vérifiez si les documents sont utilisés. Demandez aux nouveaux arrivants ce qu'ils lisent. Attendez-vous à de longs manuels que personne n'ouvre. Demandez ensuite de rédiger une version d'une page d'une pratique et de la tester avec un nouvel arrivant.

**Comment l'IA pourrait-elle nous aider à voir ce qui ne fonctionne pas dans nos pratiques, et que voudrions-nous vérifier à la main ?**
L'IA peut trouver des motifs dans les tickets et les retours. Elle peut aussi trouver des motifs qui sont des artefacts de la façon dont les gens remplissent les champs. Demandez qui lira un échantillon. Demandez ensuite de comparer une analyse par l'IA des tickets d'un mois avec une revue manuelle.

## En pratique : un exemple de gestion des services

Le service informatique d'une université a une pratique d'habilitation des changements avec un comité de revue hebdomadaire. Le personnel dit que le formulaire est long et que le comité ajoute une semaine à chaque changement. Les auditeurs y tiennent, car il fournit une trace. La responsable de la pratique, une responsable de services expérimentée, décide de la traiter comme un produit.

Elle interroge huit personnes qui ont soumis des changements le mois dernier et assiste à une réunion du comité. Elle constate que 70 % des changements sont courants et à faible risque, que le formulaire compte 22 champs dont huit seulement sont jamais lus, et que le comité approuve surtout ce qu'il voit. Elle établit un court backlog : raccourcir le formulaire, définir une catégorie de « changement standard » préapprouvée selon le risque plutôt que par une réunion, et relier chaque fiche de changement aux résultats des tests automatisés.

Elle essaie le formulaire raccourci avec une équipe pendant quatre semaines, en s'attendant à ce que le délai moyen entre la demande et l'approbation des changements standard passe de six jours à deux. Elle demande à l'auditeur interne d'examiner les règles proposées pour les changements standard. L'auditeur demande un contrôle par échantillon et une revue mensuelle des échecs. L'équipe accepte. Après quatre semaines, la moyenne tombe sous deux jours, et le nombre de changements en échec n'augmente pas.

Ce qui change : le comité consacre désormais son temps aux 30 % de changements présentant un vrai risque, et la trace est générée à partir du pipeline. Ce qui reste difficile : d'autres équipes utilisent un outil différent qui ne peut pas montrer les résultats de tests, si bien que leurs traces restent manuelles ; l'échantillonnage de l'auditeur ajoute un travail que personne n'a budgété ; et certains membres du comité regrettent l'ancien rituel hebdomadaire et sentent que leur rôle a rétréci. La responsable garde une revue mensuelle et demande des idées au comité.

## Quatre perspectives

### Équipes produit et de livraison

Vous êtes les principaux utilisateurs des pratiques de changement et de mise en production. Donnez votre retour tôt, participez aux essais et intégrez des contrôles dans votre pipeline pour que la pratique puisse s'appuyer sur des preuves.

### Équipes de service et d'exploitation

Vous possédez souvent les pratiques. Agissez comme des responsables de produit : écoutez les utilisateurs, tenez un court backlog et essayez de petits changements. Partagez les résultats et retirez les étapes qui n'aident pas.

### Direction et gouvernance

Demandez aux responsables le backlog de la pratique, les mesures et les retours qu'ils ont entendus. Soutenez les changements qui remplacent des contrôles manuels par des contrôles intégrés, après avoir impliqué l'audit et les risques. N'exigez pas de longs documents.

### Clients et utilisateurs

Quand une pratique vous touche, comme un formulaire de demande, vous devriez pouvoir dire ce qui est pénible et le voir s'améliorer. Demandez qui en est responsable et comment donner un retour.

## Agilité, IA, automatisation et analytique

### Agilité

Ce sujet est l'angle agile appliqué aux pratiques : petites étapes, implication des parties prenantes, revue régulière et amélioration continue. Attention : ne faites pas tourner des rituels agiles autour d'une pratique ; gardez l'accent sur la rétroaction et les petits changements.

### IA

L'IA peut analyser les tickets et les retours pour suggérer des améliorations, rédiger des descriptions de pratique d'une page et confronter un nouveau texte aux règles sources, une personne relisant. Chaque usage a besoin d'un responsable. Attention : l'IA peut écrire des procédures soignées que personne ne suit ; testez-les avec de vrais utilisateurs. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Transformez les règles de pratique en comportement d'outil : orientation, champs obligatoires, approbations automatisées pour les changements à faible risque et capture des preuves. Tenez des journaux et un moyen d'annuler. Attention : intégrer une règle défaillante à l'automatisation la durcit ; essayez d'abord la règle à la main. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Utilisez quelques indicateurs de performance de chaque pratique, comme le délai d'approbation, les reprises et la satisfaction des utilisateurs. Attention : compter la conformité, par exemple le « pourcentage de changements avec un formulaire complet », peut être détourné et dit peu de chose sur l'utilité de la pratique ; voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **La refonte d'une pratique comme projet.** Un comité réécrit le processus pendant des mois. Faites de petits changements avec rétroaction.
- **Pas de responsable de pratique.** Personne ne l'améliore. Nommez un responsable.
- **Un responsable qui ne parle jamais aux utilisateurs.** La pratique dérive. Planifiez des conversations régulières.
- **Abandonner des contrôles sans remplacement.** Des objections de risque et d'audit s'ensuivent. Satisfaites l'objectif du contrôle dans les outils.
- **De longs documents.** Personne ne les lit. Écrivez une page et renvoyez au détail.
- **Ne mesurer que la conformité.** Les gens remplissent des formulaires et rien ne s'améliore. Mesurez les résultats et l'expérience.
- **De la cérémonie sans changement.** Des réunions ont lieu et le backlog ne bouge pas. Limitez le travail en cours et terminez les éléments.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Responsabilité des pratiques | Aucun responsable | Responsables pour les principales pratiques | Chaque pratique a un responsable et un backlog | Les responsables examinent les résultats avec les utilisateurs | Les responsables se coordonnent entre pratiques et partenaires |
| Changement des pratiques | Rares grandes réécritures | Améliorations occasionnelles | Petites expériences régulières avec revue | Résultats mesurés et exploités | Expériences partagées dans l'organisation |
| Contrôles | Manuels et par réunion | Quelques-uns intégrés | Contrôles standard intégrés aux outils | Preuves échantillonnées et examinées | Contrôles automatisés et adaptés au risque |
| Documentation | Longs manuels | Quelques guides courts | Descriptions d'une page tenues à jour | Usage des documents vérifié | Conseils partagés et consultables en contexte |

## Liste de contrôle

- [ ] Chaque pratique majeure a un responsable nommé.
- [ ] Chaque responsable tient un backlog court et visible.
- [ ] Nous parlons régulièrement aux utilisateurs de chaque pratique.
- [ ] Nous essayons les changements par petites étapes avec une mesure et une date de revue.
- [ ] Les contrôles sont intégrés aux outils lorsque c'est possible.
- [ ] L'audit et les risques sont impliqués quand des contrôles changent.
- [ ] Les descriptions de pratiques sont courtes et à jour.
- [ ] Nous retirons les étapes qui n'aident pas et le disons.

## Invites d'IA

**Analyser les retours sur une pratique.**

```text
Here is feedback from people who follow our [practice name] practice, with names removed: [paste feedback].
Group it into up to six themes, count each, quote two short examples per theme, and list questions the owner should ask. Do not suggest solutions.
List what you are unsure of.
```

**Rédiger une description de pratique d'une page.**

```text
Here is the current description of our [practice] practice: [paste text].
Draft a one-page version with: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep every rule that appears in the original; mark any rule you are unsure how to phrase. Do not add rules.
List what you are unsure of.
```

**Planifier une petite expérience.**

```text
We want to change [practice step] to [proposed change]. Our current measure: [describe]. The people affected: [list].
Write an experiment plan: expectation, one or two measures, how each could mislead, who to involve, how long to run it, and what would make us reverse it. Do not claim the change will work.
List what you are unsure of.
```

## Compétences d'IA

- [agile-principles](../../../../skills/agile-principles/SKILL.md) : à utiliser pour vérifier les changements de pratique à l'aune des valeurs agiles.
- [kaizen](../../../../skills/kaizen/SKILL.md) : à utiliser pour planifier de petites expériences d'amélioration.
- [change-request](../../../../skills/change-request/SKILL.md) : à utiliser pour concevoir une fiche de changement plus légère.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les étapes et les attentes d'une pratique.

## Sources principales

- PeopleCert, pages de certification ITIL : la description des recommandations ITIL et de sa version la plus récente par le propriétaire.
- Wikipedia, « Backlog » : contexte sur la liste qui pilote l'amélioration.
- Wikipedia, « Continual improvement process » : l'idée du changement continu.
- Wikipedia, « Agile management » : l'application des idées agiles au management.

## Références

1. Agile management — Wikipedia — https://en.wikipedia.org/wiki/Agile_management
2. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
3. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
4. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
5. Feedback — Wikipedia — https://en.wikipedia.org/wiki/Feedback
6. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
7. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
8. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
9. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
