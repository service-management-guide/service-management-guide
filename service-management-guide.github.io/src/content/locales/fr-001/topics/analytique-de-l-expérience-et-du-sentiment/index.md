# Analytique de l'expérience et du sentiment

**L'analytique de l'expérience demande aux utilisateurs en quoi un service les a aidés et observe comment ils l'utilisent réellement ; enquêtes, textes de retour, analyse de sentiment et accords de niveau d'expérience sont utiles quand les questions sont équitables, le biais de réponse reconnu, les outils de sentiment vérifiés par rapport aux mots des personnes, et qu'aucun individu n'est classé ni surveillé.**

## Pourquoi c'est important

Un service peut atteindre tous ses objectifs techniques et laisser pourtant les gens frustrés. Le système est en marche, les tickets sont clos à temps, et une employée a passé deux heures ce matin-là à essayer d'obtenir l'accès à un outil dont elle a besoin. Les tableaux de bord construits à partir de données système ne peuvent pas le voir. Ils comptent ce que la machine a enregistré, pas la manière dont la personne s'en est sortie.

L'analytique de l'expérience comble cet écart. Elle interroge directement les gens, par de courtes enquêtes au moment de l'usage et d'autres, plus longues, périodiques. Elle lit ce qu'ils écrivent : commentaires de tickets, réponses d'enquête, messages de messagerie. Elle observe comment ils utilisent le service, où ils abandonnent un formulaire, combien de fois ils essaient avant de réussir. Elle combine ces éléments en une image de l'expérience que les mesures techniques manquent. L'idée des accords de niveau d'expérience (XLA), présentés au Sujet 3.7 — Gestion des niveaux de service, est de fixer des objectifs d'expérience à côté des objectifs de performance technique.

Les méthodes comportent leurs propres risques. Les enquêtes n'atteignent que les personnes qui répondent. Les outils d'analyse de sentiment devinent les sentiments à partir des mots, et se trompent souvent, surtout d'une langue et d'une culture à l'autre. Les scores deviennent des cibles, et les cibles invitent à faire pression sur les répondants. Les données sur les employés soulèvent des questions de vie privée et de confiance. Ce sujet décrit comment recueillir et utiliser les données d'expérience correctement, avec équité et humilité sur ce qu'elles peuvent montrer. Il se rattache au centre de services (Sujet 3.1 — Centre de services), aux niveaux de service (Sujet 3.7 — Gestion des niveaux de service), à la mesure (Sujet 7.3 — Mesure et reporting) et à l'usage de l'IA pour lire du texte (Sujet 5.1 — L'IA dans la gestion des services).

## Concepts clés

**Expérience.** Ce qu'une personne pense, ressent et fait en utilisant un service, du premier contact au résultat. Wikipedia décrit l'expérience client et l'expérience utilisateur. Pour les services internes, les « clients » sont des collègues, et le terme expérience numérique des employés est parfois utilisé pour la manière dont les gens vivent leur technologie. Elle inclut la facilité, la rapidité, la confiance et le fait d'avoir atteint son but.

**Satisfaction et mesures voisines.** La satisfaction client, décrite sur Wikipedia, se demande généralement par « dans quelle mesure étiez-vous satisfait ? » sur une échelle. Le net promoter score, également décrit là, demande quelle probabilité a une personne de recommander le service et se calcule comme la part de promoteurs moins celle de détracteurs. D'autres mesures portent sur l'effort, comme la facilité avec laquelle on a obtenu quelque chose. Chacune a ses usages et ses critiques : elles sont rapides et comparables, mais frustes et sujettes au détournement et à la mauvaise lecture.

**Enquêtes transactionnelles et de relation.** Une enquête transactionnelle porte sur une interaction, comme un ticket résolu, peu après. Une enquête de relation porte sur le service dans son ensemble, à intervalles. Les enquêtes transactionnelles montrent des problèmes précis ; celles de relation montrent la vue d'ensemble. Utilisez les deux, et gardez-les courtes.

**Conception d'enquête.** La formulation influence les réponses. Wikipedia décrit la méthodologie d'enquête et les problèmes courants : les questions orientées, qui suggèrent une réponse ; le biais d'acquiescement, une tendance à approuver ; et le biais de désirabilité sociale, donner des réponses qui semblent acceptables. Utilisez une formulation neutre, une échelle claire, une idée par question et une zone de commentaire libre. Wikipedia décrit les échelles de Likert et les questionnaires. Testez l'enquête sur quelques personnes. Voir la compétence survey-design de ce guide.

**Réponse et biais.** Seules certaines personnes répondent, et elles ne sont pas typiques. Wikipedia décrit le taux de réponse et le biais de participation : les gens aux sentiments forts, ou qui ont du temps, répondent davantage. Un score issu de 10 % de réponses peut dire peu des 90 % restants. Rapportez le taux de réponse, comparez les répondants à la population quand vous le pouvez et ne traitez pas le score comme exact.

**Lassitude des enquêtes.** Les gens trop souvent sollicités cessent de répondre ou répondent sans soin. Limitez la fréquence, ne demandez que ce que vous utiliserez et montrez ce qui a changé grâce aux réponses. Les enquêtes qui disparaissent dans le vide apprennent aux gens à ne pas s'en soucier.

**Retours en texte libre.** Les commentaires disent pourquoi. En lire un échantillon est essentiel, et des outils peuvent aider pour le volume. Wikipedia décrit l'analyse thématique, la pratique consistant à identifier des thèmes dans des données qualitatives, et la recherche qualitative plus largement. Compter les thèmes et citer des exemples rend les commentaires exploitables.

**Analyse de sentiment.** Des logiciels qui classent un texte comme positif, négatif ou neutre, ou par émotion. Wikipedia décrit l'analyse de sentiment et ses méthodes. Elle est utile pour un tri grossier de grands volumes de texte. Elle peine avec le sarcasme, les sentiments mêlés, les termes de métier (« critique » peut être une priorité, non une émotion) et les différences de langue et de dialecte. Vérifiez ses étiquettes sur un échantillon lu par des personnes et ne traitez pas le résultat comme le sentiment d'un individu. Wikipedia décrit aussi la reconnaissance des émotions, qui soulève de sérieuses préoccupations de fiabilité et d'éthique, en particulier appliquée aux visages ou aux voix ; soyez prudent et demandez conseil avant d'utiliser de telles méthodes.

**Découverte de sujets.** Les techniques de traitement du langage naturel, dont les modèles de sujets que décrit Wikipedia, peuvent regrouper les commentaires par thème. Elles aident à trouver des thèmes dans des milliers de commentaires, avec une relecture humaine pour nommer et vérifier les groupes.

**Signaux de comportement et d'usage.** Ce que les gens font diffère souvent de ce qu'ils disent. Formulaires abandonnés, recherches répétées, nouvelles tentatives et contacts après une tentative en libre-service montrent la friction. Wikipedia décrit le test d'utilisabilité, où des personnes tentent des tâches réalistes pendant que des observateurs notent les difficultés. Une poignée de sessions observées trouve souvent des problèmes qu'aucune enquête ne révèle.

**Méthodes qualitatives.** Les entretiens et les groupes de discussion, décrits sur Wikipedia, donnent de la profondeur. Un petit nombre de conversations avec de vrais utilisateurs peut changer les priorités plus qu'une grande enquête. Choisissez des personnes qui diffèrent par le rôle, la compétence et le lieu.

**Accords de niveau d'expérience.** Des accords qui fixent des objectifs pour des mesures d'expérience, comme « au moins 80 % des utilisateurs disent que le service les a aidés à faire leur travail ». Ils s'emploient mieux comme visée partagée et comme conversation, avec plusieurs mesures, que comme chiffre unique lié à des pénalités, car les scores d'expérience sont facilement déformés. Voir le Sujet 3.7 — Gestion des niveaux de service.

**Voix du client.** La pratique consistant à recueillir ce que disent les clients et à agir en conséquence. Wikipedia la décrit. Elle rassemble enquêtes, commentaires, contacts avec l'assistance, avis et conversations, et achemine les enseignements vers ceux qui peuvent agir.

**Bien-être et charge de travail des employés.** L'analytique peut aussi porter sur l'expérience du personnel qui fournit le service : charge de travail, fardeau des astreintes et moral. Wikipedia décrit l'engagement des employés et l'épuisement professionnel. Mesurez au niveau de l'équipe, avec consentement et soin, et agissez sur ce que vous trouvez.

**Éthique, vie privée et consentement.** Recueillir et analyser des retours implique des données personnelles et parfois des opinions sensibles. Wikipedia décrit la vie privée, l'anonymat et le consentement éclairé. Dites ce que vous recueillez et pourquoi, permettez l'anonymat là où il compte, agrégez avant de rapporter et n'identifiez pas des individus à partir de leurs commentaires sans bonne raison. La surveillance du comportement ou du sentiment des employés au travail, que Wikipedia décrit sous surveillance des employés, peut abîmer la confiance et être limitée par la loi ; prenez un avis juridique. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Boucler la boucle.** Dites aux gens ce que vous avez entendu et ce que vous avez changé. Faites un suivi auprès de ceux qui ont soulevé un problème grave. Sans réponse visible, la participation baisse.

**Comment les angles s'articulent.** L'analytique de l'expérience donne le résultat humain que les trois autres angles visent à améliorer. La pratique agile mène de petites expériences et demande aux utilisateurs si elles ont aidé. L'IA aide à lire et à regrouper le texte, sous relecture. L'automatisation déclenche les enquêtes et achemine les retours.

## Bonnes pratiques

1. **Interroger sur les résultats, pas seulement sur la satisfaction.** Incluez une question comme « avez-vous obtenu ce dont vous aviez besoin ? » et une sur l'effort. Associez les scores à un « qu'est-ce qui vous a gêné ? » en texte libre.
2. **Garder les enquêtes courtes et opportunes.** Posez une à trois questions peu après une interaction et menez une courte enquête de relation quelques fois par an. Ne posez pas sans cesse la même question aux mêmes personnes.
3. **Écrire des questions neutres et les tester.** Évitez les formulations orientées, les doubles questions et le jargon. Essayez l'enquête sur quelques personnes de groupes différents avant le lancement.
4. **Rapporter les taux de réponse et qui a répondu.** Montrez combien ont répondu, comparez à la population lorsque c'est possible et décrivez les limites. Évitez la fausse précision.
5. **Lire les commentaires.** Échantillonnez-les chaque semaine, citez-les dans les rapports et regroupez-les en thèmes. Utilisez des outils pour l'échelle, avec relecture humaine.
6. **Vérifier les outils de sentiment par rapport aux personnes.** Faites étiqueter un échantillon par des personnes, comparez-le à l'outil et notez où il échoue. Utilisez l'outil pour le tri, non pour tirer des conclusions sur des individus.
7. **Observer le comportement autant que les mots.** Regardez l'abandon, les nouvelles tentatives et les contacts répétés, et menez quelques sessions d'utilisabilité avec de vraies tâches. Comparez ce que les gens font et ce qu'ils disent.
8. **Utiliser les XLA comme visée partagée.** Convenez avec les clients d'un petit ensemble de mesures d'expérience, examinez-les ensemble et évitez de les lier à des pénalités ou à la performance individuelle.
9. **Protéger les personnes.** Expliquez ce que vous recueillez, agrégez les résultats, évitez d'identifier des individus et prenez conseil avant de surveiller le sentiment des employés. N'utilisez jamais les données d'expérience pour classer des individus.
10. **Boucler la boucle de façon visible.** Publiez des synthèses « vous avez dit, nous avons fait », et faites le suivi des problèmes graves. Retirez les questions qui ne mènent à aucune action.

## Questions à discuter avec votre équipe

**Que savons-nous de la manière dont les gens vivent notre service que nos mesures techniques ne montrent pas ?**
Listez les plaintes ou commentaires récents. Attendez-vous à un décalage avec les tableaux de bord. Demandez ensuite de choisir un aspect, comme le temps d'obtention d'un accès, et d'ajouter une question d'expérience à son sujet.

**Qui répond à nos enquêtes, et qui n'y répond jamais ?**
Comparez les répondants à la population. Attendez-vous à ce que des groupes comme le personnel de nuit ou les sites distants manquent. Demandez ensuite d'atteindre un groupe manquant autrement, par exemple par un court entretien.

**Qu'avons-nous changé le trimestre dernier à cause de ce que les utilisateurs nous ont dit, et le savent-ils ?**
Demandez des exemples. Attendez-vous à peu. Demandez ensuite de convenir d'un message régulier « vous avez dit, nous avons fait ».

**Quelle est l'exactitude de notre outil de sentiment quand une personne lit un échantillon des mêmes commentaires ?**
Testez-le. Attendez-vous à des erreurs sur le sarcasme et les termes de métier. Demandez ensuite de convenir de là où l'outil peut servir et de là où il ne le peut pas.

**Lesquelles de nos mesures d'expérience pourraient monter sans que l'expérience s'améliore ?**
Pensez à la pression sur les répondants, aux enquêtes sélectives ou à la clôture des tickets avant de demander. Demandez ensuite de convenir d'une règle contre l'influence sur les réponses et d'un contrôle de la manière dont les enquêtes sont envoyées.

**Que recueillerions-nous sur l'expérience du personnel, et comment nous assurerions-nous qu'elle sert à aider et non à surveiller ?**
Discutez du consentement, de l'agrégation et de la finalité. Attendez-vous à des avis tranchés. Demandez ensuite de convenir d'un énoncé d'usage et d'associer des représentants du personnel et un avis juridique.

## En pratique : un exemple de gestion des services

L'équipe informatique d'un réseau national de bibliothèques assiste 6 000 agents dans 300 sites. Les mesures techniques montrent une bonne performance : disponibilité supérieure à 99,5 % et 92 % des tickets résolus dans l'objectif. Pourtant, une enquête annuelle auprès du personnel indique que « l'assistance informatique » est le service le moins bien noté, et les responsables de sites disent que l'informatique ne comprend pas leur travail.

La responsable des services commence par une courte enquête transactionnelle, envoyée automatiquement à la résolution d'un ticket : deux questions (« Avons-nous résolu votre problème ? » et « Était-il facile d'obtenir de l'aide ? ») et un commentaire facultatif. Le taux de réponse est de 18 %. En comparant les répondants à la population du personnel, elle constate que les grands sites sont surreprésentés et que les petits sites distants apparaissent à peine. Elle ajoute un appel téléphonique mensuel à cinq petits sites tirés au hasard, et mène trois sessions d'utilisabilité où des agents tentent de demander un nouvel identifiant et de réserver un affichage de salle de réunion.

Les chiffres montrent que 84 % disent que leur problème a été résolu, mais seulement 55 % qu'il a été facile d'obtenir de l'aide. Les commentaires, regroupés par thèmes par deux analystes, montrent que la plainte la plus courante est de devoir réexpliquer le problème à chaque personne : 31 % des commentaires. Un outil de sentiment, testé sur 200 commentaires étiquetés à la main, en étiquette environ un quart à tort, dont beaucoup qui emploient « urgent » ou « critique » comme mots descriptifs ; l'équipe ne l'utilise donc que pour trier les commentaires à lire. Les sessions d'utilisabilité révèlent que le formulaire de demande réclame une étiquette de matériel que la plupart des agents ne connaissent pas.

L'équipe modifie le formulaire, crée un historique visible qui suit le ticket d'un agent à l'autre et publie chaque mois une note de ce qui a changé. Avec les responsables de sites, elle convient d'un objectif d'expérience : 75 % du personnel dit qu'obtenir de l'aide a été facile, examiné chaque trimestre, avec les commentaires et le taux de réponse. La responsable indique à l'équipe que les scores ne serviront pas à l'évaluation individuelle.

Ce qui change : les scores de facilité montent à 68 % en deux trimestres, et « réexpliquer » tombe à 15 % des commentaires. Ce qui reste difficile : les taux de réponse restent bas dans les plus petits sites ; certains agents craignent que les scores soient utilisés contre eux malgré l'énoncé ; et un fournisseur a proposé un outil de détection des émotions pour les appels téléphoniques, que la responsable refuse tant que le juridique et les représentants du personnel ne l'ont pas examiné. Elle prévoit d'étendre l'échantillonnage téléphonique.

## Quatre perspectives

### Équipes produit et de livraison

Interrogez les utilisateurs sur les résultats de vos fonctionnalités, observez quelques sessions réelles et instrumentez les points de friction comme l'abandon. Partagez ce que vous apprenez avec l'équipe de service.

### Équipes de service et d'exploitation

Lisez les commentaires, dites aux clients ce qui a changé et utilisez les données d'expérience pour voir où le processus frustre les gens. Ne trichez pas sur les scores et ne demandez pas aux gens de vous noter bien.

### Direction et gouvernance

Demandez des mesures d'expérience avec taux de réponse et commentaires. Financez le travail qualitatif et le suivi. N'utilisez pas les scores d'expérience pour classer ou récompenser des individus. Prenez conseil sur la vie privée et la surveillance des employés.

### Clients et utilisateurs

On devrait vous interroger sur ce qui compte, vous permettre de vous exprimer anonymement quand c'est approprié et vous dire ce qui a changé. Dites au fournisseur où les enquêtes manquent votre expérience, et donnez des exemples dans vos commentaires.

## Agilité, IA, automatisation et analytique

### Agilité

Menez de petites expériences sur l'expérience, comme changer un formulaire, et demandez à quelques utilisateurs si cela a aidé. Associez les utilisateurs à la conception. Attention : changer sans cesse les enquêtes détruit les comparaisons ; gardez un noyau stable et ajoutez des questions avec parcimonie.

### IA

L'IA peut regrouper des commentaires, résumer des thèmes et rédiger des notes « vous avez dit, nous avons fait », avec une personne qui vérifie par rapport aux originaux. Nommez un responsable. Attention : la détection de sentiment et d'émotion par l'IA peut être fausse et inéquitable d'un groupe et d'une langue à l'autre ; testez sur un échantillon étiqueté et évitez de l'utiliser sur des individus. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Automatisez les déclencheurs d'enquête, l'acheminement des commentaires graves vers une personne et les rappels de suivi. Attention : des enquêtes automatisées envoyées seulement après de bons résultats gonflent les scores ; déclenchez-les de façon cohérente. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Combinez scores, taux de réponse, thèmes, signaux de comportement et données techniques. Attention : les scores sont bruités, influencés par qui répond et par la manière dont la question est posée ; utilisez les tendances, rapportez l'incertitude et lisez les commentaires. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Seulement des mesures techniques.** Tableaux de bord au vert, utilisateurs mécontents. Ajoutez des mesures d'expérience et des commentaires.
- **Biais d'enquête ignoré.** Les plus bruyants répondent. Rapportez les taux de réponse et atteignez les groupes manquants.
- **Questions orientées.** Les réponses sont faussées. Utilisez une formulation neutre et testez.
- **Se fier aux scores de sentiment.** Les outils se trompent d'étiquette. Vérifiez par une lecture humaine et utilisez-les pour le tri.
- **Des scores comme cibles.** Les gens font pression sur les répondants. Utilisez les XLA comme visée partagée, avec plusieurs mesures.
- **Lassitude des enquêtes.** Les réponses baissent. Demandez moins et montrez ce qui a changé.
- **Surveiller les personnes.** La confiance et la légalité en souffrent. Agrégez, demandez le consentement et prenez conseil.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Collecte | Enquête annuelle | Enquêtes transactionnelles | Courtes enquêtes transactionnelles et de relation avec commentaires | Réponse et biais vérifiés, groupes manquants atteints | Retours de plusieurs canaux intégrés |
| Analyse | Scores seuls | Thèmes lus à la main | Thèmes avec échantillons, outils vérifiés par rapport aux personnes | Expérience reliée au comportement et aux données techniques | Enseignements d'expérience pilotant la planification entre services |
| Usage | Rapporté | Quelques actions | Actions suivies et « vous avez dit, nous avons fait » publié | Objectifs d'expérience examinés avec les clients | Accords d'expérience partagés entre partenaires |
| Éthique | Floue | Conscience | Règles de finalité, d'anonymat et d'agrégation | Pratiques examinées avec le personnel et des conseillers | Vie privée intégrée à la collecte et à l'analytique |

## Liste de contrôle

- [ ] Nous mesurons le résultat et l'effort, pas seulement la satisfaction.
- [ ] Les enquêtes sont courtes, neutres et testées.
- [ ] Nous rapportons les taux de réponse et qui manque.
- [ ] Nous lisons les commentaires chaque semaine et les regroupons en thèmes.
- [ ] Les outils de sentiment sont vérifiés par rapport à des étiquettes humaines et utilisés pour le tri seulement.
- [ ] Nous observons l'usage réel, nous ne nous contentons pas de demander.
- [ ] Nous utilisons les objectifs d'expérience comme visées partagées, non comme mesures individuelles.
- [ ] Nous publions ce qui a changé grâce aux retours.

## Invites d'IA

**Regrouper des commentaires en thèmes pour relecture.**

```text
Here are free-text comments from users with personal details removed: [paste].
Group them into up to eight themes, give a count for each, and quote two short comments exactly for each theme. List comments that do not fit. Do not rate sentiment or guess who wrote anything.
List what you are unsure of.
```

**Relire des questions d'enquête.**

```text
Here is a draft survey: [paste].
List questions that are leading, double-barreled, unclear, or likely to produce biased answers, quoting each, and suggest a neutral rewording. Do not add questions.
List what you are unsure of.
```

**Tester un outil de sentiment.**

```text
Here are 40 comments, each with a human label and the tool's label: [paste].
Compute the number and share of agreements and disagreements, list the comments with disagreements, and say what they have in common. Do not conclude anything about the tool beyond this sample.
List what you are unsure of.
```

## Compétences d'IA

- [survey-design](../../../../skills/survey-design/SKILL.md) : à utiliser pour concevoir des enquêtes équitables et utiles.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md) : à utiliser pour recueillir et exploiter les retours des utilisateurs et des collègues.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md) : à utiliser pour identifier qui interroger et qui manque.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md) : à utiliser pour analyser les données de réponse avec leur incertitude.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md) : à utiliser pour cadrer les objectifs d'expérience à côté des objectifs techniques.

## Sources principales

- Don Dillman, Jolene Smyth et Leah Christian, *Internet, Phone, Mail, and Mixed-Mode Surveys* (4e édition, 2014) : un guide de référence sur la conception d'enquêtes.
- Jakob Nielsen, recherches sur l'utilisabilité (nngroup.com) : des preuves pratiques sur les tests d'utilisabilité à petit échantillon.
- Le livre compagnon *Service Management Metrics* : définitions et garde-fous pour les mesures d'expérience.
- Wikipedia, « Customer satisfaction » et « Sentiment analysis » : des aperçus des idées principales.

## Références

1. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
2. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
3. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
4. User experience — Wikipedia — https://en.wikipedia.org/wiki/User_experience
5. Survey methodology — Wikipedia — https://en.wikipedia.org/wiki/Survey_methodology
6. Participation bias — Wikipedia — https://en.wikipedia.org/wiki/Participation_bias
7. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
8. Thematic analysis — Wikipedia — https://en.wikipedia.org/wiki/Thematic_analysis
9. Usability testing — Wikipedia — https://en.wikipedia.org/wiki/Usability_testing
10. Voice of the customer — Wikipedia — https://en.wikipedia.org/wiki/Voice_of_the_customer
11. Employee monitoring — Wikipedia — https://en.wikipedia.org/wiki/Employee_monitoring
12. Privacy — Wikipedia — https://en.wikipedia.org/wiki/Privacy
