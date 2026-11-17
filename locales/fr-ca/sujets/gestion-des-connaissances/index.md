# Gestion des connaissances

**La gestion des connaissances met ce que les gens apprennent en exploitant les services à la disposition de la personne suivante qui en a besoin ; les approches qui fonctionnent capturent la connaissance comme sous-produit de la résolution de problèmes, la gardent près du travail, la revoient quand elle est utilisée et traitent la recherche et la rédaction assistées par l'IA comme des aides au-dessus d'une base que des personnes entretiennent.**

## Pourquoi c'est important

Chaque équipe de service porte des connaissances qui ne sont écrites nulle part : pourquoi un paramètre a été choisi, comment redémarrer un composant fragile, ce dont a besoin un client particulier. Quand une personne part, prend des vacances ou oublie simplement, la connaissance part avec elle, et l'équipe découvre sa dépendance au pire moment : pendant un incident la nuit.

La plupart des organisations ont essayé d'y remédier par des campagnes de documentation. On dit au personnel de tout écrire. Une base de connaissances se remplit d'articles que personne ne lit ni ne croit, parce qu'ils sont périmés, longs ou difficiles à trouver. Au bout de quelques mois, l'effort s'essouffle et les gens recommencent à interroger leurs collègues.

De meilleures approches traitent la connaissance comme une partie du travail, non comme une tâche distincte. La capture a lieu pendant la résolution d'un problème, en quelques lignes, par la personne qui l'a résolu. Les articles qui aident sont utilisés et améliorés ; ceux qui échouent sont corrigés ou supprimés. La base de connaissances se trouve dans les outils que les gens utilisent déjà : le centre de services, le canal d'incident, le dépôt de code. Ce sujet explique ces idées, y compris la méthode Knowledge-Centered Service (KCS), et le rôle que joue désormais l'IA dans la recherche et la rédaction. Il se relie au centre de services (Sujet 3.1 — Centre de services), à la gestion des problèmes (Sujet 3.3 — Gestion des problèmes) et aux compétences d'IA (Sujet 5.7 — Compétences et invites d'IA).

## Concepts clés

**Données, information, connaissance.** Les données sont des faits ; l'information est de la donnée en contexte ; la connaissance est de l'information qu'une personne peut utiliser pour agir. Un code d'erreur est une donnée, un article qui explique ce qu'il signifie est de l'information, et savoir laquelle de trois causes possibles est probable à 3 h du matin est de la connaissance. Une base de connaissances peut contenir de l'information et des renvois ; elle ne peut pas contenir toute la connaissance. L'article de Wikipedia sur la gestion des connaissances décrit le domaine.

**Connaissance explicite et tacite.** La connaissance explicite peut être écrite : procédures, listes de contrôle, schémas. La connaissance tacite vit dans la pratique et le jugement et est difficile à articuler. Wikipedia décrit la connaissance tacite, terme associé à Michael Polanyi. Les deux comptent. L'écriture aide pour l'explicite ; la conversation, le travail en binôme et l'observation aident pour le tacite.

**Base de connaissances.** Un ensemble d'articles, de guides et de réponses, consultable par les utilisateurs et le personnel. Wikipedia décrit les bases de connaissances et les wikis. Elle peut être interne, pour le personnel, ou externe, pour les clients. La qualité dépend davantage de l'entretien que de l'outil.

**Runbooks.** Des instructions pas à pas pour traiter une situation connue, comme redémarrer un service ou répondre à une alerte courante. L'article de Wikipedia sur les runbooks les décrit comme des compilations de procédures d'exploitation de systèmes. Un bon runbook est court, testé et relié à l'alerte qui le déclenche. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

**Knowledge-Centered Service (KCS).** Une méthode publiée par le Consortium for Service Innovation. Ses idées principales : capturer la connaissance en résolvant les problèmes, dans le flux de travail ; réutiliser et améliorer les articles en les utilisant ; rendre sûr et normal pour tous de contribuer ; et faire évoluer la base de connaissances selon la demande plutôt que selon un plan préalable. Sa description comprend des pratiques telles que la « boucle de résolution » (solve loop) et la « boucle d'évolution » (evolve loop). Consultez les recommandations actuelles du Consortium pour les détails.

**Capturer dans le flux de travail.** Le meilleur moment pour écrire un article est juste après avoir résolu le problème. Une courte note, avec le symptôme, la cause et la correction, dans le même outil que le ticket, prend quelques minutes. L'écrire plus tard, de mémoire, prend plus de temps et est souvent omis.

**La réutilisation comme signal.** Quand un article sert à résoudre un problème, reliez-le au ticket. Compter les liens montre quels articles aident et lesquels ne sont jamais utilisés. Si quelqu'un utilise un article qui échoue, il devrait le corriger ou le signaler sur-le-champ.

**Qualité des articles.** Un bon article a un titre clair dans les mots des utilisateurs, un bref énoncé du symptôme ou de la question, la cause lorsqu'elle est connue, les étapes, la manière de vérifier que cela a fonctionné et à qui s'adresser sinon. Il est court et tenu en phase avec le système.

**La documentation dans le dépôt.** Pour les équipes d'ingénierie, garder la documentation à côté du code, en texte brut comme Markdown, et revoir ses changements avec le code les maintient alignés. L'article de Wikipedia sur Markdown décrit le format. Les demandes de fusion qui changent le comportement changent aussi la documentation.

**Fiches de décision.** De courtes notes qui consignent pourquoi une décision importante a été prise, quelles alternatives ont été considérées et ce que l'on savait à l'époque. Elles aident les nouveaux membres de l'équipe et les revues futures à comprendre le raisonnement.

**Facteur bus.** Le nombre de personnes qu'il faudrait perdre avant qu'un projet s'arrête faute de connaissances. Wikipedia décrit le facteur bus, aussi appelé facteur loterie. Un facteur bus de un est un risque. Répandre la connaissance par le binôme, la rotation et le partage l'augmente.

**Transfert de connaissances.** Faire passer la connaissance d'une personne à une autre par des passations, du travail en binôme, de la formation et de l'observation. Wikipedia décrit le transfert de connaissances. Prévoyez du temps pour cela, surtout quand quelqu'un part.

**Capacité à être trouvé.** Même un bon contenu est inutile si les gens ne peuvent pas le trouver. Titres, étiquettes, réglage de la recherche et liens depuis les alertes et les tickets comptent. Les articles de Wikipedia sur les moteurs de recherche et la surcharge d'information décrivent des problèmes apparentés.

**IA et récupération.** Les assistants d'IA peuvent chercher dans une base de connaissances, résumer des articles et en rédiger de nouveaux. Un modèle courant, la génération augmentée par récupération, récupère des passages pertinents et demande à un modèle de répondre en n'utilisant que ceux-ci. Wikipedia décrit l'idée. Les réponses de l'assistant ne valent que ce que vaut la base qu'il lit, et il peut quand même se tromper. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

**Gouvernance.** Décidez qui possède la base de connaissances, comment les articles sont revus, comment le contenu sensible est contrôlé et quand l'ancien contenu est archivé. Gardez des règles légères.

**Comment les angles s'articulent.** La gestion des connaissances est l'amélioration continue au niveau des articles individuels. L'IA aide à trouver, résumer et rédiger, sous relecture. L'automatisation relie les alertes aux runbooks et les tickets aux articles. L'analytique montre quels articles sont utilisés, lesquels échouent et quelles lacunes sont recherchées.

## Bonnes pratiques

1. **Capturer en résolvant.** Écrivez un court article ou mettez-en un à jour en clôturant un ticket. Faites-en une étape normale, non un travail supplémentaire.
2. **Écrire pour le lecteur de 3 h du matin.** Utilisez les mots que les gens cherchent, des étapes courtes et une vérification que la correction a fonctionné. Mettez la partie la plus utile en premier.
3. **Relier les articles aux tickets et aux alertes.** Quand une alerte se déclenche, renvoyez au runbook. Quand un article résout un ticket, reliez-les. Les liens montrent ce qui est utile.
4. **Corriger ou signaler à l'usage.** Si un article est faux ou peu clair quand vous l'utilisez, corrigez-le ou marquez-le pour revue immédiatement. Facilitez-le.
5. **Rendre la contribution sûre.** Autorisez chacun à modifier, avec une revue légère pour le contenu sensible ou à fort impact. Remerciez les contributeurs et ne punissez pas les erreurs.
6. **Élaguer régulièrement.** Examinez les articles non utilisés depuis longtemps et archivez-les. Une base plus petite et fiable vaut mieux qu'une grande base douteuse.
7. **Garder la documentation d'ingénierie avec le code.** Revoyez-la avec les changements et générez ce que vous pouvez, comme les références d'API, à partir de la source.
8. **Consigner les décisions importantes.** Écrivez de courtes notes de décision avec contexte, options et raisons. Reliez-les au code ou à la conception concernés.
9. **Répandre la connaissance délibérément.** Utilisez le binôme, la rotation, de courtes présentations et l'observation pour transmettre la connaissance tacite. Vérifiez le facteur bus de chaque service critique.
10. **Traiter les réponses de l'IA comme des brouillons.** Laissez l'IA chercher et suggérer, avec les sources affichées, et faites confirmer les articles par une personne avant qu'ils deviennent officiels. Suivez les mauvaises réponses et corrigez les sources.

## Questions à discuter avec votre équipe

**Qu'avons-nous dû demander récemment à quelqu'un d'expliquer, alors que cela aurait dû être écrit ?**
Partez d'un cas réel. Attendez-vous à « comment redémarre-t-on X » ou « pourquoi Y est-il réglé ainsi ». Demandez ce qui a empêché de l'écrire. Demandez ensuite de l'écrire maintenant, ensemble.

**À quels articles faisons-nous confiance, et lesquels évitons-nous ?**
La confiance varie selon les équipes et les sujets. Demandez pourquoi. Attendez-vous à « périmé » et « trop long ». Demandez ensuite de choisir trois articles non fiables à corriger ou à supprimer.

**Combien d'entre nous savent restaurer notre service le plus critique, et que se passe-t-il s'ils sont absents ?**
Cela teste le facteur bus. Comptez honnêtement. Attendez-vous à un ou deux noms. Demandez ensuite de planifier une séance de binôme ou une répétition qui répande la connaissance.

**Où écrivons-nous les choses aujourd'hui, et pouvons-nous les retrouver ?**
Listez les endroits : conversations, wiki, tickets, dépôts, notes personnelles. Essayez de trouver ensemble une réponse précise. Demandez ensuite de convenir d'un lieu pour chaque type de connaissance.

**Dans quelle mesure est-il facile pour n'importe qui dans l'équipe de corriger un article qu'il trouve faux ?**
Les obstacles comprennent les permissions, les délais de revue et la peur de la critique. Demandez ce qui en ferait une tâche de trente secondes. Demandez ensuite de lever un obstacle.

**Comment utilisons-nous l'IA pour trouver ou écrire des connaissances, et comment vérifions-nous ce qu'elle dit ?**
Demandez qui utilise des outils d'IA pour le travail de connaissance et à quoi il fait confiance. Attendez-vous à un usage peu critique par endroits. Demandez ensuite de convenir que les réponses citent des articles et d'échantillonner les réponses par rapport à eux.

## En pratique : un exemple de gestion des services

L'équipe d'infrastructure de huit personnes d'un service météorologique national exploite des pipelines de données de prévision. Deux ingénieurs seniors détiennent l'essentiel de la connaissance du plus ancien pipeline, qui traite les données satellitaires. Quand l'un d'eux prend trois semaines de congé, une panne du pipeline met deux jours à être résolue parce que le junior d'astreinte ne trouve pas la procédure de redémarrage, qui se trouve dans un fil de courriels vieux de six ans.

Le responsable de l'équipe décide d'utiliser une version légère de KCS. Quiconque résout un problème écrit quelques lignes dans le champ solution du ticket : symptôme, cause, correction, vérification. Une séance hebdomadaire de dix minutes passe en revue les nouvelles notes et promeut les plus utiles en runbooks dans le dépôt de l'équipe. Chaque alerte renvoie à son runbook. Les deux ingénieurs seniors acceptent de travailler en binôme avec des juniors selon un tour et d'enregistrer deux courtes vidéos de visite guidée du pipeline.

Après trois mois, il y a 40 runbooks, et l'équipe voit dans l'outil de tickets lesquels sont reliés à des incidents résolus. À la panne suivante, le junior d'astreinte trouve le runbook grâce à l'alerte, le suit et rétablit le pipeline en 25 minutes. Un assistant de recherche mis à l'essai sur le dépôt répond mal à une question, citant une section d'un runbook remplacée par une modification ultérieure. Le responsable ajoute une règle : les sections remplacées sont supprimées, non barrées.

Ce qui change : le pipeline ne dépend plus de deux personnes, et les juniors se sentent plus confiants. Ce qui reste difficile : les ingénieurs seniors trouvent encore qu'écrire prend un temps qu'ils n'ont pas ; certains runbooks ne sont testés que par la lecture ; et le plus ancien pipeline comporte des composants que personne ne comprend entièrement, ce qu'aucun document ne corrigera. Le responsable prévoit une répétition pour le plus ancien pipeline et planifie une revue de conception des composants que personne ne comprend.

## Quatre perspectives

### Équipes produit et de livraison

Gardez la documentation avec le code et revoyez-la avec les changements. Écrivez des notes de décision et des runbooks dans le cadre du travail, et partagez ce que vous apprenez avec l'exploitation.

### Équipes de service et d'exploitation

Capturez les solutions en travaillant, corrigez les articles quand vous les utilisez et reliez les alertes aux runbooks. Partagez la connaissance tacite par le binôme. Signalez aux responsables les lacunes que vous trouvez.

### Direction et gouvernance

Faites de l'écriture et de la lecture de connaissances une partie normale du métier, non une tâche annexe. Financez le temps pour le binôme et les répétitions. Demandez le facteur bus des services critiques. Ne récompensez pas le volume d'articles.

### Clients et utilisateurs

De bons articles vous permettent de résoudre vous-mêmes des problèmes et d'obtenir plus vite des réponses. Dites au fournisseur quand un article est déroutant ou faux, et ce que vous essayiez de faire.

## Agilité, IA, automatisation et analytique

### Agilité

Faites évoluer la base de connaissances par petites étapes, pilotées par l'usage, avec les retours des utilisateurs et du personnel. Examinez les lacunes lors d'une courte séance régulière. Attention : évitez les grands projets de documentation ; ils produisent un contenu périmé dès le lancement.

### IA

L'IA peut chercher dans la base, résumer des articles, répondre à des questions avec citations et rédiger des articles à partir de tickets et de conversations, une personne approuvant tout ce qui devient officiel. Nommez un responsable. Attention : un assistant peut répondre avec assurance à partir d'un contenu périmé ou faux ; affichez les sources et suivez les corrections. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Reliez les alertes aux runbooks, suggérez des articles sur les nouveaux tickets, signalez le contenu périmé et créez des brouillons d'articles à partir des tickets clos, avec une relecture humaine. Attention : les suggestions automatiques peuvent remplir la base de brouillons de faible qualité ; limitez ce qui est publié sans revue. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Suivez l'usage des articles, les liens vers des tickets résolus, les recherches sans résultat et le temps écoulé depuis la dernière revue. Attention : compter les articles créés récompense le volume, et compter les usages récompense les sujets populaires au détriment des sujets critiques rares ; combinez avec des retours et des échantillons. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Des campagnes de documentation.** Une rafale d'écriture est suivie de dégradation. Capturez la connaissance dans le cadre du travail.
- **De longs articles.** Personne ne les lit. Écrivez-en de courts, centrés sur la tâche.
- **Du contenu périmé.** La confiance s'érode. Corrigez ou signalez à l'usage, et élaguez.
- **Connaissance uniquement dans les conversations.** Elle ne peut pas être retrouvée. Déplacez les réponses utiles vers la base.
- **Un facteur bus de un.** L'absence d'une personne arrête le travail. Répandez la connaissance délibérément.
- **Des réponses d'IA non vérifiées.** De mauvais conseils se répandent. Affichez les sources et échantillonnez les réponses.
- **Écrire comme punition.** Les gens l'évitent. Rendez-le normal et reconnaissez-le.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Capture | Dans les têtes et les conversations | Quelques articles après incidents | La capture est une étape normale du flux de travail | Qualité de la capture échantillonnée et améliorée | Capture automatisée avec revue humaine |
| Capacité à être trouvé | Demander à un collègue | Une base consultable | Alertes et tickets reliés aux articles | Lacunes de recherche pilotant le contenu | Récupération et assistants intégrés entre outils |
| Qualité | Non revue | Nettoyage occasionnel | Corriger ou signaler à l'usage, élagage régulier | Qualité mesurée par l'usage et les résultats | Qualité améliorée en continu dans l'organisation |
| Diffusion | Un seul expert | Un peu de binôme | Facteur bus vérifié pour les services critiques | Répétitions et rotation planifiées | Connaissance partagée entre équipes et partenaires |

## Liste de contrôle

- [ ] Les gens capturent les solutions en clôturant les tickets.
- [ ] Les alertes renvoient aux runbooks.
- [ ] Les articles sont courts et écrits avec les mots que les utilisateurs cherchent.
- [ ] N'importe qui peut corriger un article qu'il trouve faux, avec une revue légère.
- [ ] Nous élaguons régulièrement les articles inutilisés ou périmés.
- [ ] La documentation d'ingénierie vit avec le code et est revue avec les changements.
- [ ] Nous connaissons le facteur bus de chaque service critique.
- [ ] Les réponses de l'IA citent leurs sources et sont échantillonnées pour vérifier leur exactitude.

## Invites d'IA

**Rédiger un article à partir d'un ticket résolu.**

```text
Here is a resolved ticket with notes, personal data removed: [paste].
Draft a short knowledge article with: a title in the words a user would search, the symptom, the cause (only if stated), the steps, how to check it worked, and who to ask if it did not. Mark any gap with [missing] and do not fill it.
List what you are unsure of.
```

**Relire un article pour un lecteur de nuit.**

```text
Here is a runbook: [paste].
List steps that are ambiguous, steps that assume knowledge not stated, and anything that could cause harm if followed literally. Do not rewrite the runbook.
List what you are unsure of.
```

**Trouver les lacunes à partir des recherches.**

```text
Here are search terms that returned no result or were followed by a ticket: [paste list]. Here are our article titles: [paste list].
Group the search terms into themes, and for each theme say whether an existing article title looks related or whether a new article is needed. Do not draft articles.
List what you are unsure of.
```

## Compétences d'IA

- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour écrire et tester des runbooks.
- [decision-records](../../../../skills/decision-records/SKILL.md) : à utiliser pour consigner pourquoi des décisions ont été prises.
- [architecture-decision-record](../../../../skills/architecture-decision-record/SKILL.md) : à utiliser pour les décisions de conception que d'autres auront besoin de comprendre.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md) : à utiliser pour concevoir des invites qui lisent une base de connaissances et citent leurs sources.

## Sources principales

- Consortium for Service Innovation, Knowledge-Centered Service (KCS) : la principale méthode pratique pour capturer la connaissance dans le support.
- Ikujiro Nonaka et Hirotaka Takeuchi, *The Knowledge-Creating Company* (1995) : sur la connaissance tacite et explicite.
- Wikipedia, « Knowledge management » et « Tacit knowledge » : des aperçus neutres.
- Wikipedia, « Runbook » : contexte sur les procédures d'exploitation.

## Références

1. Knowledge management — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_management
2. Knowledge base — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_base
3. Tacit knowledge — Wikipedia — https://en.wikipedia.org/wiki/Tacit_knowledge
4. Wiki — Wikipedia — https://en.wikipedia.org/wiki/Wiki
5. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
8. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
9. Knowledge transfer — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_transfer
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
