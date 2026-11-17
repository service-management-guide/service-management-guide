# Gestion des niveaux de service

**La gestion des niveaux de service fixe des objectifs clairs et mesurables pour les services avec ceux qui s'y fient, suit la performance par rapport à ces objectifs et utilise les écarts pour s'améliorer ; ses formes modernes ajoutent les accords de niveau d'expérience et les objectifs d'ingénierie à l'accord de niveau de service traditionnel.**

## Pourquoi c'est important

Fournisseurs et clients portent des images différentes de ce que signifie « un bon service ». Le fournisseur pense disponibilité et clôture de tickets. Le client pense à savoir s'il a pu terminer son travail. Sans définition convenue, tous deux peuvent être sincères et tous deux mécontents : le fournisseur désigne un rapport montrant que tous les objectifs ont été atteints, et le client désigne une semaine de frustration.

La gestion des niveaux de service comble cet écart. Elle ouvre une conversation avec le client sur ce dont il a besoin, transforme la réponse en objectifs mesurables et en rend compte d'une manière que le client peut vérifier. La conversation compte plus que le document. Un accord de niveau de service (SLA) écrit une fois et classé donne un faux confort ; un SLA revu régulièrement, avec des données réelles et une discussion honnête de ce qui ne fonctionne pas, bâtit la confiance.

La pratique moderne fait aussi face à une critique : des objectifs fixés sur des mesures techniques peuvent tous être au vert alors que les utilisateurs sont mécontents. En réponse, les organisations ajoutent des mesures d'expérience, comme les accords de niveau d'expérience (XLA), et les équipes d'ingénierie fixent des objectifs de niveau de service (SLO) fondés sur ce que les utilisateurs remarquent. Ce sujet explique le vocabulaire, la manière de fixer des objectifs et de les garder utiles. Il se relie à la disponibilité et à la capacité (Sujet 3.11 — Disponibilité, capacité et performance), à la gestion des fournisseurs (Sujet 3.14 — Gestion des fournisseurs) et à la mesure (Sujet 7.3 — Mesure et reporting).

## Concepts clés

**Accord de niveau de service (SLA).** Dans ITIL 4, un accord documenté entre un fournisseur de services et un client qui identifie à la fois les services requis et le niveau de service attendu. L'article de Wikipedia sur les accords de niveau de service décrit les parties courantes : une description du service, des objectifs, la mesure, le reporting et ce qui se passe si les objectifs ne sont pas atteints. Les SLA peuvent être internes, entre un fournisseur et sa propre organisation, ou externes, dans un contrat commercial.

**Cible de niveau de service.** Un engagement précis et mesurable, comme « 99,9 % des requêtes se terminent en moins de deux secondes sur un mois civil » ou « les incidents de priorité un reçoivent une réponse en 15 minutes ». Chaque objectif définit ce qui est mesuré, comment, sur quelle période et dans quelles conditions.

**Objectif de niveau de service (SLO).** Une cible pour un indicateur de niveau de service (SLI), le plus souvent utilisée par les équipes d'ingénierie, dans le cadre de la pratique décrite au Sujet 2.6 — Ingénierie de la fiabilité des sites. Les SLO sont généralement internes et plus stricts que le SLA externe, afin que l'équipe remarque les ennuis avant une violation. Wikipedia décrit les objectifs de niveau de service.

**Accord de niveau opérationnel (OLA).** Un accord entre équipes internes qui soutient la fourniture d'un service à un client. Par exemple, une équipe réseau peut convenir de délais de réponse avec l'équipe de service qui soutient un SLA externe. Wikipedia décrit les accords de niveau opérationnel.

**Contrat de soutien (underpinning contract).** Un accord avec un fournisseur externe qui soutient la fourniture d'un service. Il devrait être cohérent avec le SLA qu'il soutient. Si votre SLA promet quatre heures et que le contrat de votre fournisseur en autorise huit, l'écart est le vôtre.

**Accord de niveau d'expérience (XLA).** Une idée plus récente : des accords centrés sur la façon dont les utilisateurs vivent le service, comme la mesure dans laquelle il les a aidés à atteindre leurs objectifs, au lieu de mesures purement techniques. Les XLA utilisent souvent des enquêtes, des mesures de ressenti et des observations en plus des données système. Il n'existe pas de définition standard unique ; écrivez donc ce que vous entendez. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment.

**Ce qui fait un bon objectif.** Il a du sens pour le client, il est mesurable, il repose sur des preuves de ce qui peut être atteint et il est convenu avec ceux qui en dépendent. Il énonce la méthode de mesure et les exclusions, comme la maintenance planifiée. Il ne promet pas ce que le fournisseur ne peut pas maîtriser.

**Moyennes et percentiles.** Les moyennes masquent les pires cas. Un objectif de « temps de réponse moyen inférieur à une seconde » peut être atteint même si une requête sur dix prend dix secondes. Les percentiles, décrits sur Wikipedia, donnent une meilleure image : « 95 % des requêtes en moins de deux secondes ». Choisissez le percentile pour l'expérience qui vous importe.

**Disponibilité et temps de fonctionnement.** Un objectif courant, exprimé en pourcentage du temps pendant lequel un service est utilisable. L'article de Wikipedia sur la disponibilité décrit le calcul. Il dépend de ce qui compte comme « utilisable » : un service peut être en marche et inutilisable. Définissez-le du point de vue de l'utilisateur.

**Pénalités et avoirs.** De nombreux SLA externes incluent des recours, comme des avoirs de service, si le fournisseur manque un objectif. Ils sont un signe de sérieux mais un mauvais substitut du service : un petit avoir n'aide pas un client dont l'activité a été touchée. L'article de Wikipedia sur les dommages-intérêts forfaitaires décrit des idées contractuelles apparentées. Vérifiez comment les recours fonctionnent dans vos contrats et consultez un conseil juridique au besoin ; ce guide n'en donne aucun.

**Reporting.** Des rapports réguliers montrent les résultats par rapport aux objectifs, avec des explications des manquements et des actions. Les rapports servent à la conversation, pas seulement à la trace. Incluez des exemples et des commentaires d'utilisateurs à côté des chiffres.

**Revue.** Examinez les SLA et les objectifs avec les clients à intervalles convenus, en les ajustant quand les besoins ou la technologie changent. Retirez les objectifs que personne n'utilise.

**Loi de Goodhart.** « Quand une mesure devient un objectif, elle cesse d'être une bonne mesure. » Wikipedia décrit cette observation, attribuée à l'économiste Charles Goodhart. Les gens adaptent leur comportement pour atteindre le chiffre, non la finalité. Les niveaux de service y invitent : tickets clos trop tôt, incidents reclassés, horloges suspendues. Prémunissez-vous avec des échantillons, des mesures appariées et des retours de clients. Voir le livre *Service Management Metrics*.

**Comment les angles s'articulent.** La gestion des niveaux de service est le lieu où l'amélioration agile rencontre l'accord : revoyez souvent les objectifs et ajustez. L'IA peut aider à analyser les données de performance et à rédiger des rapports, sous relecture. L'automatisation mesure et rend compte de façon cohérente. L'analytique montre le lien entre objectifs techniques et expérience des utilisateurs.

## Bonnes pratiques

1. **Partir de ce dont le client a besoin.** Demandez ce qu'il ne peut pas se permettre de voir échouer et quelle lenteur il tolérerait. Fondez les objectifs sur ces réponses, non sur ce qui est facile à mesurer.
2. **Garder un petit nombre d'objectifs.** Une poignée d'objectifs significatifs par service est plus facile à comprendre et à gérer que des dizaines. Abandonnez ceux que personne n'utilise.
3. **Écrire chaque objectif avec précision.** Énoncez ce qui est mesuré, d'où, sur quelle période, ce qui est exclu et comment le résultat est calculé. Testez la définition avec les données d'un mois récent.
4. **Utiliser des percentiles pour la réponse et la performance.** Rapportez la part des cas qui atteignent l'objectif et montrez les pires cas, pas seulement la moyenne.
5. **Fixer des objectifs internes plus stricts que les accords.** Donnez à votre équipe de la marge pour agir avant une violation. Rendez les objectifs internes et externes cohérents entre eux et avec les contrats de fournisseurs.
6. **Ajouter des mesures d'expérience.** À côté des objectifs techniques, demandez aux utilisateurs en quoi le service les a aidés, avec de courtes enquêtes et de l'observation. Échantillonnez des cas réels pour voir ce que les chiffres manquent.
7. **Rendre compte avec du contexte.** Présentez les résultats lors d'une réunion régulière avec le client, expliquez honnêtement les manquements et convenez d'actions. Incluez quelques commentaires d'utilisateurs.
8. **Se prémunir contre le détournement.** Examinez des échantillons de tickets et d'incidents derrière les chiffres, regardez les taux de réouverture et associez les mesures de rapidité à des mesures de qualité.
9. **Examiner régulièrement les accords.** Rencontrez-vous au moins une fois par an, et lorsque quelque chose d'important change, pour vérifier que les objectifs correspondent encore au besoin et au coût. Changez les objectifs ouvertement.
10. **Aligner les fournisseurs.** Vérifiez que l'accord de chaque fournisseur soutient les objectifs que vous promettez et convenez de la manière dont leur performance vous est rapportée. Voir le Sujet 3.14 — Gestion des fournisseurs.

## Questions à discuter avec votre équipe

**Si nous avions atteint tous les objectifs le mois dernier, nos clients diraient-ils que le service était bon ?**
Cela teste si les objectifs reflètent l'expérience. Attendez-vous à un décalage quelque part. Demandez une plainte récente qu'aucun objectif n'a détectée. Demandez ensuite de choisir une nouvelle mesure d'expérience.

**Lesquels de nos objectifs personne ne lit, et lesquels tout le monde discute ?**
Cela révèle les mesures inutiles et contestées. Demandez qui utilise chacune dans les décisions. Demandez ensuite d'en retirer une et d'en clarifier une.

**Que promettons-nous aux clients qui dépend d'un fournisseur ou d'une autre équipe, et que nous ont-ils promis ?**
Cela teste la cohérence entre les accords. Comparez les chiffres côte à côte. Attendez-vous à des écarts. Demandez ensuite de choisir un écart à combler, en renégociant ou en changeant notre promesse.

**Comment nos objectifs pourraient-ils être atteints sans aider l'utilisateur ?**
Imaginez le détournement : tickets clos trop tôt, horloges suspendues, définitions rétrécies. Demandez si cela arrive. Demandez ensuite de choisir un contrôle par échantillon pour un objectif.

**Qui assiste à nos réunions de revue de service, et qu'est-ce qui change après ?**
Les réunions sans action sont un rituel. Demandez la dernière liste d'actions. Demandez ensuite de convenir que chaque revue se termine par trois actions au plus avec des responsables.

**Où l'IA pourrait-elle aider à analyser les données de niveau de service ou à rédiger des rapports, et que doit vérifier une personne ?**
L'IA peut résumer des tendances et rédiger des explications. Elle peut aussi énoncer des causes sans preuves. Demandez qui relit le brouillon à l'aune des données. Demandez ensuite d'essayer des résumés rédigés par l'IA pour un usage interne, une personne approuvant.

## En pratique : un exemple de gestion des services

Le service informatique d'une régie des eaux régionale soutient 800 employés de bureau et 300 équipes de terrain. Le SLA du système d'ordres de travail promet 99,5 % de disponibilité et une réponse en quatre heures pour les incidents de priorité un. Les rapports montrent tous les objectifs atteints depuis deux ans. Les équipes de terrain qualifient pourtant le système de « peu fiable », et le directeur des opérations exige un meilleur SLA.

La responsable des services rencontre les chefs d'équipe et leur demande ce que « peu fiable » signifie. Ils disent que le système est en marche mais très lent tôt le matin, quand les équipes commencent à travailler, et qu'il échoue à se synchroniser quand la couverture mobile est mauvaise. Rien de cela n'est capté : la disponibilité est mesurée par un contrôle depuis le centre de données toutes les cinq minutes, et les objectifs de réponse ne s'appliquent qu'aux tickets que les équipes soumettent, ce qu'elles font rarement parce qu'elles supposent que rien ne sera fait.

La responsable propose des changements. L'équipe ajoute un SLI fondé sur de vraies transactions d'utilisateurs : 95 % des enregistrements d'ordres de travail se terminent en moins de trois secondes, mesurés séparément pour la plage de 6 h à 8 h. Elle ajoute une courte enquête mensuelle auprès des équipes, avec deux questions sur le fait que le système les a aidées à terminer leur travail et sur ce qui les a gênées. Et elle fixe un SLO interne plus strict que le SLA, pour que l'équipe voie la lenteur matinale avant les équipes de terrain. Le directeur des opérations accepte d'examiner les objectifs avec des représentants des équipes chaque trimestre.

Ce qui change : les données du premier mois montrent clairement la lenteur matinale, et un réglage de la base de données en corrige une grande partie. Ce qui reste difficile : les échecs de synchronisation dépendent d'une couverture mobile que la régie ne maîtrise pas ; l'enquête a un taux de réponse d'environ un tiers ; et le nouveau SLI ne figure pas au contrat, si bien que les rapports à l'équipe de direction portent désormais deux jeux de chiffres. La responsable conserve les deux et propose d'intégrer les nouvelles mesures au SLA lors du prochain renouvellement.

## Quatre perspectives

### Équipes produit et de livraison

Définissez les indicateurs et objectifs avec ceux qui exploitent et utilisent le service, et intégrez les mesures au produit. Traitez un objectif manqué comme une invitation à regarder la conception, pas seulement l'exploitation.

### Équipes de service et d'exploitation

Connaissez les objectifs et la manière dont ils sont mesurés. Soyez attentifs au détournement, rendez compte honnêtement et apportez aux réunions de revue des exemples de ce que les chiffres manquent. Utilisez les objectifs internes pour agir tôt.

### Direction et gouvernance

Demandez si les objectifs reflètent ce dont les clients ont besoin et s'ils sont cohérents avec les contrats de fournisseurs. Regardez les distributions et les échantillons, pas seulement les pourcentages en gros titre. Évitez de récompenser ou de punir les équipes sur des chiffres isolés.

### Clients et utilisateurs

Dites ce qui compte le plus pour vous et ce que vous pouvez tolérer. Participez aux revues. Si tous les rapports sont au vert et que vous êtes mécontent, dites-le au fournisseur et donnez des exemples.

## Agilité, IA, automatisation et analytique

### Agilité

Revoyez et ajustez régulièrement les objectifs avec les clients, par petites étapes, et utilisez les manquements comme rétroaction pour s'améliorer. Attention : des objectifs qui changent tous les mois déroutent tout le monde ; gardez un noyau stable et changez-le délibérément.

### IA

L'IA peut analyser des données de performance, rédiger des rapports et suggérer des causes de manquements, une personne restant responsable des conclusions. Nommez un responsable pour chaque usage. Attention : les explications de manquements par l'IA peuvent sembler faire autorité sans preuves ; demandez-lui de citer les données qu'elle a utilisées. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez la mesure à partir de transactions réelles, le reporting et les alertes sur le risque de violation, avec un calcul transparent. Attention : une mesure automatisée peut masquer des erreurs de définition ; échantillonnez régulièrement les données brutes et le calcul. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Combinez des mesures techniques, comme les percentiles du temps de réponse, avec des données d'expérience, comme les résultats d'enquêtes et les plaintes. Attention : les enquêtes viennent de ceux qui répondent, et toute mesure peut être détournée dès qu'elle est un objectif ; utilisez plusieurs sources et échantillonnez des cas. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Tout au vert, clients mécontents.** Les mesures manquent l'expérience. Ajoutez des indicateurs fondés sur les utilisateurs et des échantillons.
- **Trop d'objectifs.** Personne ne les lit. Gardez-en quelques-uns qui comptent.
- **Seulement des moyennes.** Les pires cas sont cachés. Utilisez des percentiles et montrez les valeurs extrêmes.
- **Détournement.** Horloges suspendues, tickets clos trop tôt. Échantillonnez et appariez les mesures.
- **Accords incohérents.** Les promesses dépassent ce que livrent les fournisseurs. Alignez les objectifs internes et externes.
- **Le SLA comme arme.** Les réunions débattent des avoirs. Concentrez-vous sur l'amélioration et la compréhension partagée.
- **Jamais revu.** Les objectifs vieillissent. Revoyez-les à intervalles convenus.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Objectifs | Techniques, non revus | Quelques objectifs fondés sur le client | Objectifs fixés avec les clients et définis avec précision | Objectifs examinés à l'aune des données et de l'expérience | Objectifs coordonnés entre services et partenaires |
| Mesure | Manuelle | Un peu d'automatisation | Mesure à partir de transactions d'utilisateurs lorsque c'est possible | Mesure validée et échantillonnée | Mesure automatisée et transparente le long de la chaîne |
| Expérience | Non mesurée | Enquêtes ponctuelles | Mesures d'expérience à côté des mesures techniques | Expérience reliée aux améliorations | L'expérience pilote les accords entre services |
| Revue | Rare | Annuelle | Revues régulières avec actions | Revues suivies pour leurs résultats | Revues intégrées à la planification et aux fournisseurs |

## Liste de contrôle

- [ ] Les objectifs reposent sur ce dont les clients ont besoin et sont convenus avec eux.
- [ ] Chaque objectif est défini avec précision et testé avec des données réelles.
- [ ] Nous utilisons des percentiles pour les objectifs de réponse et de performance.
- [ ] Les objectifs internes sont plus stricts que les accords externes.
- [ ] Les contrats de fournisseurs soutiennent les objectifs que nous promettons.
- [ ] Nous mesurons l'expérience autant que la performance technique.
- [ ] Nous échantillonnons les cas derrière les chiffres pour détecter les détournements.
- [ ] Nous examinons les accords au moins chaque année et après un changement majeur.

## Invites d'IA

**Vérifier la définition d'un objectif.**

```text
Here is a service level target as written: [paste]. Here is a month of raw data: [paste summary].
List what is unclear in the wording, compute the result in two different reasonable ways showing your steps, and note where the answers differ. Do not recommend a new target.
List what you are unsure of.
```

**Trouver ce que les chiffres manquent.**

```text
Our targets: [list]. Here are user complaints from the last quarter: [paste, personal data removed].
List complaints that no target would have detected, quote each briefly, and suggest one possible measure for each. Do not claim the measures would work.
List what you are unsure of.
```

**Préparer une revue de service.**

```text
Here are this month's results against targets: [paste]. Here are notable incidents and user comments: [paste].
Draft an agenda and five questions to discuss with the customer, including one about what the numbers do not show. Do not explain causes that are not in the material.
List what you are unsure of.
```

## Compétences d'IA

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md) : à utiliser pour rédiger et examiner des accords et des objectifs.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md) : à utiliser pour choisir des indicateurs qui avertissent tôt.
- [survey-design](../../../../skills/survey-design/SKILL.md) : à utiliser pour concevoir des mesures d'expérience.
- [vendor-management](../../../../skills/vendor-management/SKILL.md) : à utiliser pour aligner les accords des fournisseurs sur vos objectifs.

## Sources principales

- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des niveaux de service par le propriétaire.
- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitre sur les objectifs de niveau de service, gratuit sur sre.google.
- Wikipedia, « Service-level agreement » et « Service-level objective » : des aperçus des termes.
- Wikipedia, « Goodhart's law » : une mise en garde sur l'usage de mesures comme objectifs.

## Références

1. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Operational-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Operational-level_agreement
4. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
5. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
6. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
7. Liquidated damages — Wikipedia — https://en.wikipedia.org/wiki/Liquidated_damages
8. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
9. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
