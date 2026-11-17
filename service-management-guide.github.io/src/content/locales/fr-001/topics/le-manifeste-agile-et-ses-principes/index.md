# Le manifeste agile et ses principes

**Les quatre valeurs et les douze principes du Manifeste agile ont été écrits en 2001 pour des équipes de développement logiciel, et ils s'appliquent à l'exploitation de services en production lorsqu'on les lit comme un appel à l'implication continue des parties prenantes, à l'amélioration continue et à la livraison continue de changements fonctionnels, plutôt que comme une recette de réunions.**

## Pourquoi c'est important

« Agile » est l'un des mots les plus utilisés et les plus galvaudés du travail technologique. Certains l'emploient pour un ensemble de cérémonies, d'autres pour la vitesse, d'autres encore comme prétexte pour se dispenser de planification et de documentation. En gestion des services, la confusion coûte plus cher, car on dit souvent aux équipes de service qu'elles doivent devenir « agiles » sans que personne ne précise ce que cela signifie pour un tour d'astreinte, un incident ou un accord de niveau de service.

Le Manifeste est court, et le relire est le moyen le moins coûteux de dissiper la confusion. Ses valeurs et ses principes ne disent rien des sprints, des réunions quotidiennes ni de tableaux particuliers. Ils parlent de personnes, de résultats concrets, de collaboration avec les clients et de réaction au changement. Cela en fait un test utile pour toute pratique qu'une équipe de service adopte : cela nous aide-t-il à impliquer nos parties prenantes, à apprendre et à livrer des changements de façon sûre et continue ?

Ce sujet reformule les valeurs et les principes pour le travail de service, note ce que le Manifeste ne dit pas et les relie aux pratiques du reste de la Partie 2. Les principes directeurs d'ITIL 4 correspondent de près à ces idées (voir le Sujet 1.5 — Les principes directeurs d'ITIL).

## Concepts clés

**Origine.** En février 2001, dix-sept praticiens du logiciel se sont réunis dans l'Utah et ont rédigé le « Manifeste pour le développement agile de logiciels ». C'était l'énoncé de valeurs communes par des gens qui employaient des méthodes différentes, parmi lesquelles l'extreme programming, Scrum et d'autres. L'article de Wikipedia sur le développement logiciel agile en donne l'histoire et le texte.

**Quatre valeurs.** Le Manifeste dit que, bien qu'il y ait de la valeur dans les éléments de droite, ceux de gauche sont valorisés davantage :

- Les individus et leurs interactions plutôt que les processus et les outils
- Un logiciel fonctionnel plutôt qu'une documentation exhaustive
- La collaboration avec les clients plutôt que la négociation contractuelle
- L'adaptation au changement plutôt que le suivi d'un plan

Il ne dit pas que les éléments de droite sont sans valeur. Il dit de quel côté pencher quand ils entrent en conflit.

**Douze principes.** Les principes du Manifeste, paraphrasés ici, disent : satisfaire le client en livrant tôt et continuellement des logiciels de valeur ; accueillir les changements d'exigences, même tardifs ; livrer fréquemment un logiciel fonctionnel, en privilégiant les délais courts ; faire travailler ensemble au quotidien les métiers et les développeurs ; bâtir les projets autour d'individus motivés, et leur faire confiance ; privilégier la conversation en face à face ; faire du logiciel fonctionnel la principale mesure d'avancement ; maintenir un rythme soutenable ; porter une attention continue à l'excellence technique et à la bonne conception ; valoriser la simplicité, l'art de maximiser la quantité de travail non effectué ; laisser les équipes auto-organisées produire les meilleures conceptions ; et réfléchir régulièrement à la manière de devenir plus efficace, puis s'ajuster.

**Reformulé pour le travail de service en production.** Pour une équipe de service, le « logiciel fonctionnel » devient un service fonctionnel : un service qui fait ce dont les clients ont besoin, aujourd'hui. Les « clients » comprennent les utilisateurs, les commanditaires et ceux qui dépendent du service en aval. La « livraison » inclut la mise en production d'un changement, mais aussi le traitement d'une demande ou la correction d'une panne. La « documentation » compte toujours, pour les runbooks et les connaissances, mais dans la quantité qui aide la personne suivante. La « négociation contractuelle » apparaît dans les accords de niveau de service et les contrats de fournisseurs : la valeur dit de maintenir la conversation avec le client en parallèle du contrat.

**Ce que le Manifeste met en avant.** Lu à travers le prisme du service, l'accent porte sur l'implication continue des parties prenantes (clients et personnes de la livraison travaillant ensemble), l'amélioration continue (réflexion et ajustement réguliers), l'évolution permanente du service, un rythme soutenable pour ceux qui l'exploitent, des personnes motivées à qui l'on fait confiance pour faire le travail, et la livraison continue de changements fonctionnels. Voir le Sujet 2.2 — Livraison continue.

**Ce qu'il ne dit pas.** Il n'exige ni sprints, ni Scrum, ni Kanban, ni points de complexité, ni réunions debout, ni aucun outil particulier. Ce sont des méthodes précises, dont certaines sont décrites dans ce guide lorsque c'est pertinent. Si votre équipe choisit d'utiliser Scrum, des sprints ou Kanban, ils peuvent servir les valeurs ; les adopter ne rend pas à soi seul une équipe agile. Traiter les méthodes comme la substance de l'agilité est une erreur courante, parfois appelée pratique de culte du cargo.

**Ce qu'il ne dit pas sur l'exploitation.** Le Manifeste a été écrit à propos de la construction de logiciels. Il est muet sur l'astreinte, la gestion des incidents et les niveaux de service. Les y transposer relève du jugement, et ce guide en montre une lecture. D'autres lectures sont possibles, et vous devriez les tester à l'aune de vos propres preuves.

**Agilité et contrôle.** On entend couramment que l'agilité et ITIL s'opposent. Le Manifeste ne contredit pas le contrôle. Un changement petit, testé et réversible peut être plus sûr qu'un grand, ce qui est en soi une forme de contrôle. La tension est réelle là où les contrôles exigent une approbation lourde, manuelle et peu fréquente, et la réponse consiste à déplacer le contrôle dans le pipeline de livraison, non à l'abandonner (voir le Sujet 3.4 — Habilitation des changements).

**Comment les angles s'articulent.** L'agilité est le premier des quatre angles. Les assistants d'IA peuvent rédiger, relire et résumer, mais la valeur des « individus et leurs interactions » rappelle que la conversation avec le client reste humaine. L'automatisation soutient la livraison fréquente d'un « logiciel fonctionnel ». L'analytique soutient « réfléchir et s'ajuster » en montrant des preuves pour le changement suivant.

## Bonnes pratiques

1. **Tester les pratiques à l'aune des valeurs.** Pour toute cérémonie, tout outil ou tout document, demandez quelle valeur il sert. Si la réponse est aucune, arrêtez de le faire ou changez-le. Si votre équipe choisit d'utiliser des sprints, Scrum ou Kanban, appliquez le même test à chaque élément.
2. **Impliquer continuellement les parties prenantes.** Mettez un client, un utilisateur ou son représentant en contact régulier avec l'équipe, pas seulement au début et à la fin. De courtes conversations fréquentes sur le service réel valent mieux que de longues revues de documents.
3. **Livrer le changement par petits morceaux.** Préférez un changement qui peut être mis en production et vérifié en quelques jours à un changement qui attend un gros lot. Les petits changements sont plus faciles à comprendre, à tester et à annuler.
4. **Prendre le service fonctionnel comme mesure d'avancement.** Comptez ce qui fonctionne et aide les clients, non le nombre de tâches closes ou de documents écrits. Voir le livre *Service Management Metrics* pour les mesures et leurs risques de détournement.
5. **Écrire une documentation qui aide la personne suivante.** Gardez les runbooks, les schémas et les décisions courts et à jour. Supprimez ce que personne ne lit et ajoutez ce que quelqu'un a cherché sans le trouver.
6. **Faire confiance aux personnes motivées et leur donner ce dont elles ont besoin.** Fixez des objectifs et des contraintes clairs, puis laissez l'équipe décider du comment. Levez les obstacles plutôt que d'ajouter des points de contrôle.
7. **Protéger un rythme soutenable.** Planifiez l'astreinte et le travail d'amélioration pour que les gens puissent tenir des années. Les exploits héroïques sont un signal d'alerte, non une force.
8. **Réfléchir régulièrement.** Planifiez une courte revue régulière de la façon dont l'équipe travaille, par exemple après les incidents et les mises en production, et donnez suite à au moins un constat à chaque fois. Si votre équipe choisit d'utiliser des rétrospectives, traitez leur production comme un backlog.
9. **Accueillir le changement, et le rendre peu coûteux.** Investissez dans les tests, l'automatisation et une conception claire pour qu'un changement tardif ne soit pas une crise. Demandez ce qui faciliterait le prochain changement.
10. **Rester simple.** Cherchez la plus petite solution qui répond au besoin et supprimez le travail qui n'ajoute pas de valeur.

## Questions à discuter avec votre équipe

**Laquelle des quatre valeurs honorons-nous le plus en pratique, et laquelle négligeons-nous ?**
Les équipes disent souvent « les individus et leurs interactions » tout en fonctionnant avec des tickets et des outils, ou « un logiciel fonctionnel » tout en documentant abondamment. Demandez des preuves récentes pour chaque valeur. Les réponses varient selon les rôles ; écoutez-en plusieurs. Demandez ensuite de choisir une valeur à renforcer ce trimestre.

**Que voient nos clients de notre travail entre deux mises en production ou entre deux incidents ?**
Cela teste l'implication continue. Attendez-vous à des réponses comme « rien » ou « un rapport mensuel ». Demandez ce qu'un client voudrait voir chaque semaine. Demandez ensuite d'organiser une conversation régulière et courte avec de vrais utilisateurs.

**Lesquelles de nos pratiques gardons-nous parce que « l'agilité le dit », et quelle valeur chacune sert-elle ?**
Beaucoup d'équipes exécutent des rituels sans savoir pourquoi. Demandez ce qui changerait si chacun s'arrêtait. Écoutez les rituels qui remplissent le calendrier et ne produisent rien. Demandez ensuite d'essayer un changement avec une date de revue.

**Quelle est la taille de notre plus petit changement livrable, et qu'est-ce qui nous empêche de le faire ?**
Cela explore la taille des lots. Les obstacles courants sont les tests manuels, les étapes d'approbation et les environnements partagés. Demandez un exemple précis. Demandez ensuite de choisir un obstacle à lever.

**Où notre rythme semble-t-il insoutenable, et quel en est le coût ?**
La fatigue de l'astreinte, les interruptions constantes et les mises en production du week-end ressortent ici. Traitez les réponses comme des données sur le système. Demandez ensuite de convenir d'un changement pour alléger la charge et de qui vérifiera qu'il a fonctionné.

**Où nos contrats et accords de niveau de service empêchent-ils la collaboration, et où les utilisons-nous comme excuse ?**
Les deux arrivent. Certains contrats limitent réellement ce qui peut changer ; d'autres sont invoqués pour éviter une conversation. Demandez la clause. Demandez ensuite de planifier une conversation avec le client ou le fournisseur sur une clause limitante.

## En pratique : un exemple de gestion des services

L'équipe numérique d'un opérateur régional de bus exploite l'application d'horaires et le flux d'arrivées en temps réel. La direction annonce un passage à « l'agilité » et impose des sprints, des réunions quotidiennes et un nouvel outil. En un mois, l'équipe est occupée par les cérémonies, le traitement des incidents prend du retard et le responsable de l'exploitation se plaint que rien ne s'est amélioré.

La responsable de l'équipe pose une autre question : quelles valeurs du Manifeste nous manquent-elles ? Elle constate que l'équipe n'a aucun contact régulier avec le personnel du poste de commande qui utilise le flux d'arrivées, ne met en production des changements qu'une fois par trimestre et a un gros backlog de demandes que personne ne peut ordonner. Elle garde la réunion quotidienne, que l'équipe trouve utile, et supprime deux cérémonies qui la doublonnent. Elle ajoute un appel hebdomadaire de 20 minutes avec deux agents du poste de commande, commence à mettre en production de petits changements chaque semaine avec une courte suite de tests automatisés et demande à l'équipe de choisir une amélioration à l'issue de chaque revue d'incident.

Ce qui change : le personnel du poste de commande signale les problèmes plus tôt, et un retard récurrent du flux est corrigé en une semaine au lieu d'attendre la mise en production trimestrielle suivante. Ce qui reste difficile : la mise en production hebdomadaire dépend d'un fournisseur qui contrôle le format des données des véhicules et ne changera pas son calendrier, la charge d'astreinte de l'équipe reste lourde, et certains dirigeants demandent encore un plan à dates fixes. La responsable garde ces points sur la table lors de la revue mensuelle.

## Quatre perspectives

### Équipes produit et de livraison

Utilisez les valeurs pour décider ce qu'il faut garder et ce qu'il faut couper. Travaillez souvent avec de vrais utilisateurs, mettez en production de petits changements et traitez le service en fonctionnement comme une partie de votre produit. Gardez la documentation courte et à jour.

### Équipes de service et d'exploitation

Appliquez les valeurs à votre façon de traiter les incidents, les demandes et les changements : parlez aux personnes touchées, améliorez après chaque incident et protégez un rythme soutenable. Proposez de participer tôt à la planification, afin que les besoins d'exploitation façonnent le travail.

### Direction et gouvernance

N'imposez pas de cérémonies. Demandez l'implication des parties prenantes, de petites mises en production et des preuves d'amélioration. Fixez l'orientation et les contraintes, et faites confiance aux équipes pour choisir le comment. Surveillez le rythme : des exploits héroïques prolongés sont un risque.

### Clients et utilisateurs

Vous faites partie du travail de l'équipe. Donnez un retour régulier et honnête, et attendez-vous à voir arriver les changements par petits morceaux. Dites à l'équipe ce qui compte le plus, et dites-lui quand quelque chose qu'elle a livré ne vous a pas aidé.

## Agilité, IA, automatisation et analytique

### Agilité

Ce sujet est le fondement : implication continue des parties prenantes, amélioration continue et livraison continue de changements fonctionnels. Attention : les méthodes ne sont pas la substance ; vérifiez toute pratique à l'aune des valeurs.

### IA

Les assistants d'IA peuvent rédiger des récits utilisateur, résumer des retours et suggérer des tests, une personne examinant chaque sortie. La valeur des « individus et leurs interactions » signifie que la conversation avec les clients reste humaine. Attention : les résumés de retours clients par l'IA peuvent aplatir ce que les gens ont dit ; lisez un échantillon des originaux. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez les tests, la construction et le déploiement pour que le changement petit et fréquent soit peu coûteux et sûr, et conservez journaux et retour arrière. Attention : automatiser un pipeline sans que l'équipe comprenne ce qu'il vérifie produit une fausse confiance ; examinez ce que vérifie chaque étape. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Utilisez les données pour réfléchir et s'ajuster : délai de l'idée à la mise en production, échec des changements, temps de rétablissement et retours des clients. Attention : chacune de ces mesures devient un objectif lorsqu'elle sert à noter les équipes, et les équipes ajusteront le chiffre plutôt que le travail ; servez-vous-en pour apprendre. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Des cérémonies sans valeurs.** L'équipe tient toutes les réunions et ne change rien. Demandez quelle valeur sert chaque pratique.
- **L'agilité comme simple vitesse.** La pression monte, la qualité baisse et les gens s'épuisent. Protégez un rythme soutenable et la qualité technique.
- **Aucune documentation.** Le savoir vit dans les têtes, et les personnes d'astreinte peinent. Gardez de courts runbooks et des notes de décision.
- **Des parties prenantes qui n'apparaissent qu'à la revue.** Les surprises arrivent tard. Impliquez un utilisateur chaque semaine.
- **Le contrat comme bouclier.** Personne ne parle au client. Maintenez la conversation et changez le contrat au besoin.
- **Imposer des méthodes d'en haut.** Les équipes se conforment pour la forme. Donnez des objectifs et des contraintes et laissez les équipes choisir.
- **Lire le Manifeste comme hostile au contrôle.** Les équipes abandonnent des contrôles utiles. Intégrez plutôt le contrôle au pipeline.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Implication des parties prenantes | Au début et à la fin seulement | Revues régulières | Contact hebdomadaire avec de vrais utilisateurs | Retours mesurés et exploités | Clients et fournisseurs impliqués dans toutes les équipes |
| Livraison du changement | Mises en production grandes et rares | Quelques mises en production plus petites | Mises en production petites, fréquentes et testées | Flux de changement mesuré et amélioré | Changement livré en continu entre les services |
| Réflexion et amélioration | Après les crises | Revues occasionnelles | Revues régulières avec un backlog | Résultats des améliorations vérifiés | Apprentissage partagé entre équipes |
| Rythme et personnes | Exploits héroïques | Conscience de la surcharge | Astreinte et charge de travail soutenables | Charge mesurée et équilibrée | Charge de travail planifiée entre équipes |

## Liste de contrôle

- [ ] Nous pouvons énoncer les quatre valeurs et les douze principes et dire quelles pratiques servent lesquels.
- [ ] Un vrai utilisateur ou représentant de client parle à l'équipe chaque semaine.
- [ ] Notre plus petit changement livrable est mis en production en jours, non en mois.
- [ ] Nous comptons le service fonctionnel, non les tâches, comme avancement.
- [ ] La documentation est courte, à jour et lue.
- [ ] Nous tenons une revue régulière et donnons suite à au moins un constat.
- [ ] L'astreinte et la charge de travail sont soutenables.
- [ ] Les contrôles sont intégrés au pipeline lorsque c'est possible.

## Invites d'IA

**Tester une pratique à l'aune des valeurs.**

```text
Our team practice: [describe the practice and how often it happens].
For each of the four Agile Manifesto values, say whether the practice appears to serve it, strain it, or is unrelated, and give one question to check with the team. Do not recommend dropping the practice.
List what you are unsure of.
```

**Transformer des retours en une courte liste pour l'équipe.**

```text
Below is feedback from users of [service]: [paste feedback, with personal details removed].
Group it into up to six themes, give a count for each, and quote one short example for each theme exactly. Do not infer what users meant beyond the words.
List what you are unsure of.
```

**Rédiger une note d'une page d'accords de travail.**

```text
Our team context: [team size, services, on-call pattern]. Our values we want to honor: [list].
Draft up to eight working agreements as short sentences, each tied to one Agile Manifesto value or principle. Avoid naming specific methods or tools unless I listed them.
List what you are unsure of.
```

## Compétences d'IA

- [agile-principles](../../../../skills/agile-principles/SKILL.md) : à utiliser pour appliquer les principes à la pratique d'une équipe.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md) : à utiliser pour mener une réflexion qui produit des éléments d'amélioration.
- [agile-charter](../../../../skills/agile-charter/SKILL.md) : à utiliser pour convenir d'objectifs et d'accords de travail avec les parties prenantes.

## Sources principales

- Le Manifeste pour le développement agile de logiciels et ses douze principes (agilemanifesto.org) : le texte primaire ; lisez-le directement.
- Wikipedia, « Agile software development » : histoire, texte des valeurs et critiques.
- Wikipedia, « Extreme programming » : l'une des méthodes qui ont façonné le Manifeste.
- Wikipedia, « Scrum (project management) » : un cadre souvent qualifié d'agile, décrit comme un cadre et non comme la substance de l'agilité.

## Références

1. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
2. Extreme programming — Wikipedia — https://en.wikipedia.org/wiki/Extreme_programming
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
5. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
6. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
7. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
10. Manifesto for Agile Software Development — Beck et al. — https://agilemanifesto.org/
