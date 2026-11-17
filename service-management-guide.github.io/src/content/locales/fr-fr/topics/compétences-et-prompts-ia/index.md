# Compétences et invites d'IA

**Une invite est une demande que vous adressez à un système d'IA, et une compétence est un ensemble réutilisable et versionné d'instructions pour un type de tâche ; les deux fonctionnent mieux lorsqu'elles nomment la tâche, fournissent le matériau source, disent quoi faire quand une information manque et sont testées comme tout autre produit de travail.**

## Pourquoi c'est important

Tous ceux qui utilisent un assistant d'IA écrivent des invites, le plus souvent par tâtonnements. Certains obtiennent d'excellents résultats sans pouvoir dire pourquoi. D'autres obtiennent des réponses vagues ou fausses et décident que l'outil est médiocre. La différence tient souvent non au modèle mais à la demande : la clarté avec laquelle la tâche est énoncée, le matériau dont dispose l'assistant et la façon dont sa réponse est vérifiée.

En gestion des services, la différence compte parce que le travail a des enjeux. Une invite qui résume un incident de mémoire peut produire une chronologie inventée. Une invite qui demande de « bonnes pratiques » donne un texte générique qui sonne juste et n'aide personne. Une invite écrite à la hâte peut coller des données confidentielles dans le mauvais outil. Ce sont des habitudes, et les habitudes peuvent s'améliorer.

Les compétences poussent l'idée plus loin. Une compétence empaquette les instructions d'une tâche récurrente, comme écrire un runbook ou mener une revue post-incident, dans un fichier qu'un assistant d'IA peut charger quand la tâche se présente. Les compétences de ce guide sont écrites au format de Claude Code : chacune est un fichier `SKILL.md` avec une courte description de quand l'utiliser et les conseils pour faire le travail. Les équipes peuvent les copier, les adapter et écrire les leurs. Ce sujet explique comment utiliser les invites et les compétences de ce guide, les modèles qui fonctionnent, comment vérifier les résultats et comment écrire les compétences d'une équipe. Il s'appuie sur le Sujet 5.1 — L'IA dans la gestion des services et sur les garde-fous du Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

## Concepts clés

**Invite (prompt).** Le texte, et tout matériau joint, que vous donnez à un grand modèle de langage pour obtenir une réponse. Wikipedia décrit l'ingénierie des invites comme le processus de structuration des instructions pour qu'un modèle génératif produise la sortie voulue. Le modèle répond aux motifs de l'invite ; des invites plus claires donnent généralement de meilleures réponses.

**Contexte.** Tout ce que le modèle peut considérer quand il répond : vos instructions, les documents que vous fournissez et la conversation jusque-là. Wikipedia décrit la fenêtre de contexte, qui limite ce que le modèle peut considérer à la fois. Si quelque chose n'est pas dans le contexte, le modèle peut combler le vide avec ses connaissances générales, et c'est là que les erreurs s'insinuent.

**Ancrage.** Fournir le matériau source et demander au modèle de n'utiliser que celui-ci. Wikipedia décrit la génération augmentée par récupération, une forme automatisée. Pour un usage manuel, collez le texte pertinent et dites « utilise uniquement le texte ci-dessous ». Voir le Sujet 3.9 — Gestion des connaissances.

**Anatomie d'une bonne invite.** Six parties couvrent la plupart des besoins :

| Partie | Ce qu'elle fait | Exemple |
|---|---|---|
| Rôle ou contexte | Pose la situation | « Vous aidez un responsable de centre de services à préparer une revue. » |
| Tâche | Dit quoi produire | « Résumez l'incident sous forme de chronologie. » |
| Matériau source | Fournit les faits | L'historique collé du ticket |
| Contraintes | Fixe des limites | « N'utilisez que le texte. Ne devinez pas les causes. » |
| Format | Façonne la sortie | « Un tableau avec heure, événement et source citée. » |
| Règle d'incertitude | Dit quoi faire en cas de doute | « Écrivez “non indiqué” et listez ce dont vous n'êtes pas sûr. » |

**Espaces réservés.** Les invites de ce guide utilisent des `[crochets]` pour marquer ce qu'il faut remplacer par votre propre matériau. Une invite avec un espace réservé non rempli est une cause courante de mauvais résultats ; lisez chacun avant d'envoyer.

**Exemples et structure.** Donner un ou deux exemples de la sortie souhaitée, ce qu'on appelle l'invite à quelques exemples (few-shot) et que décrit Wikipedia, améliore souvent plus le résultat que des explications supplémentaires. Demander une structure, comme un tableau, facilite la vérification.

**Demander le raisonnement.** Des techniques qui demandent au modèle de procéder par étapes, décrites sur Wikipedia comme l'invite en chaîne de pensée, peuvent améliorer les réponses à certains problèmes. Le raisonnement visible n'est pas toujours un compte rendu fidèle de la manière dont la réponse a été produite, et il peut aussi contenir des erreurs. Servez-vous-en pour vous aider à vérifier, non comme d'une preuve.

**Vérification.** Traitez chaque sortie comme un brouillon. Vérifiez les faits par rapport à la source, les calculs et l'existence des citations. Wikipedia décrit l'hallucination et le biais d'automatisation ; ce sont deux raisons de vérifier. Une invite qui demande au modèle de citer ses sources rend cela rapide.

**Itération.** Le premier résultat n'est souvent pas le meilleur. Demandez des changements, signalez les erreurs et affinez l'invite. Gardez la version qui a marché.

**Compétence (skill).** Dans ce guide, une compétence est un fichier `SKILL.md` qui dit à un assistant d'IA comment faire un type de tâche. Il commence par un court en-tête donnant le nom de la compétence et une description de quand l'utiliser, suivi de conseils : composants clés, étapes et contrôles. Un assistant qui prend en charge les compétences charge le fichier pertinent quand votre demande correspond à la description. Les compétences sont du texte brut ; elles peuvent donc être lues, revues, versionnées et partagées comme d'autres documents. L'article de Wikipedia sur Markdown décrit le format qu'elles utilisent.

**Compétences et invites.** Une invite sert à une seule demande ; une compétence capture une méthode pour un type de tâche récurrent, afin de ne pas la réécrire à chaque fois. Une compétence peut contenir plusieurs invites, une liste de contrôle et les critères d'un bon résultat. Les sujets de ce guide renvoient aux compétences là où une méthode est utile.

**Ce que devraient contenir les compétences.** De bonnes compétences énoncent quand les utiliser et quand ne pas le faire, définissent les parties clés de la sortie, donnent un court processus, listent les erreurs courantes et disent comment vérifier le résultat. Elles sont précises et brèves. Une compétence qui tente de tout couvrir est rarement utilisée.

**Tester compétences et invites.** Traitez-les comme des produits de travail. Constituez quelques cas de test réalistes avec de bons résultats connus, exécutez-les et notez les échecs. Exécutez-les à nouveau quand le modèle, l'outil ou la compétence change. Wikipedia décrit le test de non-régression, la pratique consistant à rejouer des tests après des changements pour détecter les ruptures.

**Gestion de versions et responsabilité.** Stockez les compétences dans un dépôt, avec un responsable, un journal des modifications et une revue des changements. Wikipedia décrit la gestion de versions. Une compétence qui change discrètement sans revue peut changer les résultats d'une équipe sans que personne le remarque.

**Sécurité.** Les invites et les compétences peuvent être attaquées ou détournées. Le contenu que vous collez peut contenir des instructions, un risque que Wikipedia décrit comme l'injection d'invite. Une compétence téléchargée d'une source inconnue peut dire à l'assistant de faire quelque chose de nuisible. Lisez les compétences avant de les utiliser et ne donnez aux assistants que l'accès nécessaire. Voir le Sujet 5.5 — IA agentique et supervision humaine.

**Confidentialité.** Décidez ce qui peut être collé dans quel outil. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Comment les angles s'articulent.** Les compétences et les invites sont la manière dont les équipes mettent l'IA au travail de façon cohérente. La pratique agile suggère de tenir une bibliothèque partagée qui s'améliore par l'usage et les retours. L'automatisation peut exécuter des invites approuvées dans des flux de travail. L'analytique montre quelles invites et compétences sont utilisées et si elles aident.

## Bonnes pratiques

1. **Énoncer la tâche, non le sujet.** « Rédige un point d'information pour les clients à partir de ces faits » fonctionne mieux que « aide-moi pour l'incident ». Dites ce que vous voulez produire et pour qui.
2. **Fournir la source et s'y restreindre.** Collez le matériau pertinent et dites de n'utiliser que cela. Demandez à l'assistant d'écrire « non indiqué » là où le matériau est muet.
3. **Dire quel format vous faut.** Demandez un tableau, une liste numérotée ou une limite de mots. Cela rend le résultat plus facile à vérifier et à utiliser.
4. **Demander des sources et de l'incertitude.** Demandez des citations ou des références et une liste de ce dont l'assistant n'est pas sûr. Lisez cette liste ; elle montre où vérifier d'abord.
5. **Ne jamais coller de secrets ni de données protégées dans des outils non approuvés.** Retirez noms, identifiants et données personnelles lorsque vous le pouvez. Utilisez les outils que votre organisation a approuvés pour le matériau sensible.
6. **Vérifier avant d'utiliser.** Comparez faits, chiffres, heures et noms avec la source. Exécutez d'abord tout code ou commande dans un environnement sûr.
7. **Itérer et garder ce qui marche.** Affinez l'invite en quelques tours, puis enregistrez la version finale avec une note sur son objet et ses cas d'échec.
8. **Partager et revoir une bibliothèque d'équipe.** Gardez les invites et compétences testées dans un endroit partagé avec des responsables. Examinez les changements et retirez celles qui ne fonctionnent plus.
9. **Écrire des compétences pour le travail récurrent.** Quand vous vous surprenez à répéter une invite, transformez-la en compétence avec une description claire, des étapes et des contrôles. Gardez-la courte.
10. **Tester les compétences sur des cas réels.** Constituez quelques cas de test, exécutez-les après chaque changement de la compétence ou de l'outil et consignez les résultats.

## Questions à discuter avec votre équipe

**Que demandons-nous aujourd'hui aux outils d'IA de faire, et lesquelles de ces demandes pourrions-nous consigner sous forme d'invite ou de compétence réutilisable ?**
Rassemblez des exemples. Attendez-vous à des tâches répétées comme des résumés, des brouillons et des listes de contrôle. Demandez ensuite de choisir une tâche et d'en rédiger ensemble une version testée.

**Comment vérifions-nous une réponse de l'IA avant de l'utiliser, et chacun le fait-il de la même façon ?**
Demandez la dernière fois que quelqu'un a trouvé une erreur. Attendez-vous à des habitudes différentes. Demandez ensuite de convenir d'une courte routine de vérification pour chaque type de tâche.

**Qu'avons-nous collé dans des outils d'IA que nous n'aurions pas dû, et comment faciliter la bonne pratique ?**
Posez la question dans un cadre sûr. Attendez-vous à des erreurs. Demandez ensuite de convenir de ce qui peut aller où et de fournir un outil approuvé et un court guide.

**Quelles invites ont bien marché pour des individus sans jamais être partagées ?**
Demandez aux gens de faire une démonstration. Attendez-vous à de bonnes invites. Demandez ensuite d'en rassembler trois dans une bibliothèque partagée, avec un responsable et une date de revue.

**Si une compétence que nous utilisons changeait demain, comment le remarquerions-nous ?**
Attendez-vous à « nous ne le remarquerions pas ». Demandez ensuite de convenir que les compétences vivent en gestion de versions, sont revues et ont quelques cas de test.

**Quelles tâches ne devrions-nous jamais confier à un assistant d'IA, même avec vérification ?**
Discutez des décisions touchant des personnes, des conclusions juridiques et des approbations. Attendez-vous à des désaccords. Demandez ensuite d'écrire une courte liste et de dire qui peut la modifier.

## En pratique : un exemple de gestion des services

L'équipe de service informatique de 25 personnes d'un hôpital régional a commencé à utiliser un assistant d'IA. Les employés l'utilisent chacun à leur manière. Un analyste rédige des articles de connaissances à partir de notes de tickets, un autre résume de longs fils de courriels et un troisième lui demande d'expliquer des messages d'erreur inconnus. La responsable de l'équipe s'inquiète : elle a vu un article contenant une commande plausible mais fausse.

Elle demande à l'équipe d'apporter ses trois invites les plus utiles à une séance d'une heure. Ils constatent que quatre personnes utilisent presque la même invite pour transformer un ticket résolu en article. La version qui marche le mieux énonce que l'assistant doit n'utiliser que le texte du ticket, doit écrire « [manquant] » pour tout ce qui n'y figure pas, doit présenter les étapes en lignes numérotées et doit terminer par une courte liste de ce dont il n'est pas sûr. Sans la règle « [manquant] », l'assistant comblait les lacunes.

L'équipe en fait un fichier de compétence : quand l'utiliser (transformer un ticket résolu en brouillon d'article), les parties clés d'un bon article, le processus et les contrôles qu'une personne doit faire avant de publier, dont exécuter chaque commande dans un environnement de test. Ils la testent sur dix anciens tickets dont les solutions sont connues et constatent que sur trois, l'assistant a deviné un numéro de version. Ils ajoutent une règle sur les numéros de version et rejouent les tests. Ils stockent la compétence dans le dépôt de l'équipe, désignent l'adjoint de la responsable comme responsable et conviennent que les changements sont revus comme du code.

Ils rédigent aussi une page sur ce qui ne doit pas aller dans les outils d'IA : données de patients, identifiants et rapports de sécurité non publiés ; et ils orientent chacun vers l'outil approuvé, dont le contrat interdit l'entraînement sur leurs données.

Ce qui change : les brouillons d'articles prennent quelques minutes, et le nombre d'articles aux étapes fausses trouvés en revue diminue. Ce qui reste difficile : certains employés utilisent encore des comptes personnels quand l'outil approuvé est lent ; la bibliothèque de compétences est passée à 14 fichiers et personne n'a revu la moitié d'entre eux ; et le comportement de l'assistant a légèrement changé après une mise à jour de l'éditeur, ce que les tests n'ont détecté que parce que quelqu'un les avait rejoués. La responsable ajoute une exécution mensuelle des tests et une séance trimestrielle d'élagage.

## Quatre perspectives

### Équipes produit et de livraison

Utilisez invites et compétences pour rédiger du code, des tests et de la documentation, avec votre revue et vos contrôles de pipeline habituels. Gardez dans le dépôt, à côté du code, les compétences de vos propres flux de travail.

### Équipes de service et d'exploitation

Construisez une petite bibliothèque pour les tâches récurrentes comme les points d'information, les articles et les revues. Partagez ce qui marche, vérifiez chaque sortie et dites au responsable quand une compétence échoue.

### Direction et gouvernance

Fixez des règles sur ce qui peut être collé où, fournissez des outils approuvés et financez le temps de construction et de test d'une bibliothèque. Demandez des preuves que les sorties sont vérifiées. Ne traitez pas les invites comme un substitut au processus.

### Clients et utilisateurs

Vous rencontrerez peut-être du contenu rédigé par l'IA. Demandez s'il a été vérifié par une personne et dites au fournisseur quand il est faux. Faites attention aux données personnelles que vous donnez à tout outil d'IA.

## Agilité, IA, automatisation et analytique

### Agilité

Faites croître la bibliothèque à partir de l'usage réel : ajoutez une compétence quand une tâche se répète, améliorez-la d'après les retours et retirez-la quand elle n'aide plus. Gardez les compétences courtes et revues. Attention : une grande bibliothèque non revue est un passif ; gardez-la petite et attribuée.

### IA

Les compétences et les invites sont les instructions que nous donnons à l'IA ; elles méritent donc le soin que nous donnons aux autres contrôles : responsabilité, revue, tests et enregistrement de l'usage. Attention : des instructions de « être exact » ne rendent pas un modèle exact ; fiez-vous aux sources fournies, aux vérifications et à la revue humaine. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Les invites approuvées peuvent être intégrées à des flux de travail, comme rédiger un résumé à la clôture d'un ticket, avec une étape de revue avant usage. Attention : les invites automatisées s'exécutent sans le soin d'une personne qui lit à chaque fois ; testez-les sur des entrées variées et gardez une barrière humaine. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Suivez quelles invites et compétences sont utilisées, la fréquence à laquelle les brouillons sont modifiés, les erreurs trouvées en revue et le temps gagné par tâche. Attention : les comptes d'usage récompensent le volume, et les gains de temps estimés sont facilement gonflés ; échantillonnez les sorties finales pour la qualité. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Des demandes vagues.** La réponse est générique. Énoncez la tâche, le public et le format.
- **Pas de matériau source.** Le modèle comble les lacunes de mémoire. Fournissez la source et restreignez-vous à elle.
- **Des espaces réservés non remplis.** Une invite part avec « [collez ici] » dedans. Vérifiez avant d'envoyer.
- **Croire la première réponse.** Les erreurs passent inaperçues. Vérifiez par rapport à la source.
- **Coller des secrets.** Des données fuient. Utilisez des outils approuvés et retirez les détails sensibles.
- **Une bibliothèque de compétences sans responsable.** Les fichiers se dégradent ou changent sans qu'on le remarque. Gardez-les en gestion de versions avec des responsables et des tests.
- **Télécharger des compétences sans les lire.** Une instruction nuisible s'exécute. Lisez et revoyez avant usage.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Pratique des invites | Tâtonnements | Conseils partagés informellement | Modèles standard avec sources et vérifications | Modèles affinés d'après les données d'erreurs | Modèles intégrés aux outils et aux flux de travail |
| Bibliothèque de compétences | Aucune | Fichiers personnels | Compétences partagées, attribuées et versionnées | Compétences testées et revues régulièrement | Compétences gérées entre équipes avec gouvernance |
| Vérification | Aucune | Habitudes individuelles | Routines standard par tâche | Erreurs suivies et réinjectées | Vérification soutenue par l'outillage avec validation humaine |
| Règles sur les données | Floues | Conscience | Règles claires et outils approuvés | Conformité vérifiée | Contrôles intégrés aux outils |

## Liste de contrôle

- [ ] Nos invites énoncent la tâche, la source, le format et la règle d'incertitude.
- [ ] Nous vérifions les sorties par rapport à la source avant usage.
- [ ] Nous avons des règles sur ce qui peut être collé dans quels outils, et des outils approuvés.
- [ ] Nous gardons les invites et compétences testées dans un endroit partagé et attribué.
- [ ] Les compétences ont une description claire de quand les utiliser.
- [ ] Nous testons les compétences sur des cas réels après chaque changement de la compétence ou de l'outil.
- [ ] Nous examinons les compétences venant de sources extérieures avant de les utiliser.
- [ ] Nous listons les tâches qui ne doivent pas être confiées à l'IA.

## Invites d'IA

**Améliorer une invite.**

```text
Here is a prompt I use: [paste]. Here is an example of an output that disappointed me: [paste].
Identify what the prompt does not say that would help (task, source material, constraints, format, uncertainty rule), propose a rewritten prompt with [placeholders] for my material, and explain each change in one line. Do not add facts about my situation.
List what you are unsure of.
```

**Transformer une invite en compétence.**

```text
Here is a prompt that works well for my team: [paste]. Here are two examples of good outputs: [paste].
Draft a SKILL.md with a header (name and a one-sentence description of when to use it and when not), key components of a good output, a short process, common mistakes, and a checklist for verifying the result. Keep it under 400 words and do not add steps not implied by my examples.
List what you are unsure of.
```

**Concevoir des tests pour une compétence.**

```text
Here is a skill: [paste].
Write eight test cases: five typical, two awkward, and one that tries to make the assistant ignore the skill. For each, describe the input and the correct behavior. Do not use real personal data.
List what you are unsure of.
```

## Compétences d'IA

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md) : à utiliser pour concevoir, tester et affiner des invites.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md) : à utiliser pour trouver et appliquer les sujets, les questions et les invites de ce guide.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md) : à utiliser pour maintenir les sujets et les compétences de ce guide.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser comme exemple de compétence bien structurée pour le travail d'exploitation.

## Sources principales

- Anthropic, documentation sur les invites et sur les Agent Skills (docs.anthropic.com) : conseils de l'éditeur pour rédiger des instructions et des compétences pour les modèles Claude.
- OWASP, recommandations sur les risques des applications construites sur de grands modèles de langage (owasp.org) : y compris l'injection d'invite.
- Wikipedia, « Prompt engineering » : un aperçu des techniques et des termes.
- Le répertoire `skills/` de ce guide : des exemples concrets de compétences pour les tâches de gestion des services.

## Références

1. Prompt engineering — Wikipedia — https://en.wikipedia.org/wiki/Prompt_engineering
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Few-shot learning — Wikipedia — https://en.wikipedia.org/wiki/Few-shot_learning
6. Chain of thought — Wikipedia — https://en.wikipedia.org/wiki/Chain_of_thought
7. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
8. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
9. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
10. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
11. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
12. OWASP — OWASP Foundation — https://owasp.org
