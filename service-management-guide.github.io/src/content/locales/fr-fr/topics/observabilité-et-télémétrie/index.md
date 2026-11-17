# Observabilité et télémétrie

**L'observabilité est la capacité de poser de nouvelles questions à un système en fonctionnement et d'obtenir des réponses à partir des données qu'il émet : métriques, journaux et traces portant un contexte cohérent ; elle porte ses fruits quand la télémétrie est conçue dès l'origine, normalisée sur des formats ouverts, tenue à un coût supportable et utilisée pour comprendre l'expérience des utilisateurs, pas seulement la santé des machines.**

## Pourquoi c'est important

La surveillance répond à des questions auxquelles on a pensé à l'avance. Le service est-il en marche ? Le disque est-il plein ? La latence dépasse-t-elle deux secondes ? Ce sont de bonnes questions, et elles détectent les défaillances déjà vues. Mais les services modernes défaillent de façons nouvelles. Un changement dans un composant ralentit une requête dans un autre. Les données inhabituelles d'un seul client déclenchent un chemin rare. Une dépendance située trois couches plus bas se dégrade, et personne n'a de tableau de bord pour elle.

Quand une nouvelle défaillance arrive, l'équipe doit poser des questions que personne n'avait anticipées : quelles requêtes sont lentes, pour quels utilisateurs, à travers quels services, depuis quelle version ? Si le système émet des données riches et reliées, l'équipe peut suivre la piste. Sinon, elle devine, ajoute de la journalisation, redéploie et attend que la défaillance se reproduise. Wikipedia décrit l'observabilité en logiciel comme la capacité de comprendre l'état interne d'un système à partir de ses sorties externes, une idée empruntée à la théorie du contrôle.

Le travail pratique porte sur la télémétrie : les données que les systèmes émettent sur eux-mêmes. Une bonne télémétrie est conçue, cohérente et reliée, de sorte qu'une plainte d'utilisateur puisse être retracée jusqu'à une requête, la requête jusqu'aux services qu'elle a touchés et la lenteur jusqu'à un appel précis. Ce sujet décrit les principaux types de télémétrie, les normes qui les rendent portables, et les coûts et risques qui les accompagnent. Il s'appuie sur la surveillance (Sujet 3.10 — Surveillance et gestion des événements) et se relie au SRE (Sujet 2.6 — Ingénierie de la fiabilité des sites), à l'AIOps (Sujet 5.2 — AIOps) et à la gouvernance des données (Sujet 7.2 — Fondements et gouvernance des données).

## Concepts clés

**Télémétrie.** Des données collectées depuis un système et envoyées à un endroit où elles peuvent être examinées. Wikipedia décrit la télémétrie en général. En logiciel, les principaux signaux sont les métriques, les journaux et les traces, avec des plus récents comme les profils et les événements.

**Métriques.** Des nombres mesurés dans le temps, comme le débit de requêtes, le taux d'erreur, la latence, l'usage de la mémoire et la profondeur des files. Les métriques sont peu coûteuses à stocker et bonnes pour les tendances, les alertes et les tableaux de bord. Elles résument ; elles perdent donc du détail sur les requêtes individuelles. Les bases de données de séries temporelles, décrites sur Wikipedia, les stockent efficacement ; Prometheus en est un exemple open source très répandu.

**Journaux.** Des enregistrements horodatés d'événements discrets, comme un message d'erreur ou une transaction terminée. Wikipedia décrit la journalisation en informatique. Les journaux contiennent du détail, et ils sont volumineux et coûteux à stocker et à interroger. Les journaux structurés, avec des champs nommés cohérents plutôt que du texte libre, sont plus faciles à interroger et à relier à d'autres signaux.

**Traces.** Un enregistrement du chemin d'une requête à travers les parties d'un système distribué, montrant quels services elle a traversés et combien de temps a pris chacun. Wikipedia décrit le traçage en logiciel. Les traces répondent à « où est passé le temps ? » dans les systèmes construits à partir de nombreux services, comme les microservices, que Wikipedia décrit aussi.

**Contexte et corrélation.** Ce qui rend les trois signaux puissants ensemble, c'est le contexte partagé : un identifiant qui relie une ligne de journal à la trace et à la requête de l'utilisateur, et des étiquettes comme service, version et environnement sur tout. Sans contexte partagé, vous avez trois tas de données. Avec lui, vous pouvez passer d'une requête lente dans une métrique à la trace, puis à la ligne de journal qui l'explique.

**Instrumentation.** Ajouter le code qui produit de la télémétrie. Wikipedia décrit l'instrumentation en programmation. Elle peut être automatique, par des bibliothèques et des agents, ou manuelle, où les développeurs ajoutent les signaux qui comptent pour l'activité, comme « commande passée ». Instrumentez ce que font les utilisateurs, pas seulement ce que font les machines.

**OpenTelemetry et normes ouvertes.** OpenTelemetry est un projet open source, sous la Cloud Native Computing Foundation (que Wikipedia décrit), qui fournit des formats et des outils communs pour émettre métriques, journaux et traces, indépendamment de l'outil qui les stocke et les analyse. Consultez le site du projet pour son état actuel. Le but est de vous permettre de collecter la télémétrie une fois et de l'envoyer à n'importe quel système compatible, réduisant l'enfermement. Wikipedia décrit en termes généraux les normes ouvertes et l'enfermement chez un fournisseur. Voir le Sujet 3.14 — Gestion des fournisseurs.

**Surveillance et observabilité.** La surveillance guette des conditions connues et alerte ; l'observabilité permet d'explorer des conditions inconnues. Elles sont complémentaires : les alertes disent que quelque chose ne va pas, l'exploration dit pourquoi. Voir le Sujet 3.10 — Surveillance et gestion des événements.

**Indicateurs de niveau de service issus de la télémétrie.** Les SLI, comme la part de requêtes qui réussissent dans un délai, se calculent à partir de la télémétrie. Définissez-les du point de vue de l'utilisateur et mesurez-les là où sa requête entre dans le système. Voir le Sujet 2.6 — Ingénierie de la fiabilité des sites et l'article de Wikipedia sur les objectifs de niveau de service.

**Télémétrie utilisateur et métier.** La surveillance des utilisateurs réels et la surveillance synthétique, décrites sur Wikipedia, montrent l'expérience de l'extérieur : temps de chargement des pages, réussite des parcours, erreurs dans les navigateurs et les applications. Les événements métier, comme les inscriptions et les paiements, relient la santé technique aux résultats. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment.

**Cardinalité et coût.** La cardinalité est le nombre de valeurs distinctes d'une étiquette. Une métrique étiquetée par identifiant d'utilisateur a une énorme cardinalité et peut submerger un magasin de métriques. Wikipedia décrit la cardinalité en modélisation de données. Le volume de télémétrie croît avec le trafic et le détail, et le coût de stockage et de traitement avec lui. Décidez ce qu'il faut garder en plein détail, ce qu'il faut échantillonner et ce qu'il faut agréger.

**Échantillonnage.** Ne garder qu'une fraction des traces ou des journaux. Wikipedia décrit l'échantillonnage en statistique. L'échantillonnage réduit le coût et peut masquer des événements rares ; envisagez de garder toutes les erreurs et les requêtes lentes et d'échantillonner les normales.

**Conservation.** Combien de temps la télémétrie est gardée. Gardez brièvement les données très détaillées et plus longtemps les agrégats. La conservation affecte le coût, l'investigation et la vie privée. Voir le Sujet 7.2 — Fondements et gouvernance des données.

**Vie privée et sécurité dans la télémétrie.** Les journaux et les traces peuvent contenir des données personnelles, des identifiants et des secrets, par accident ou par conception. Wikipedia décrit les données personnelles. Épurez ou évitez les champs sensibles à la source, contrôlez l'accès et fixez la conservation. La télémétrie est aussi une source de données de sécurité. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Observabilité pour l'IA.** Les systèmes d'IA ont besoin de leur propre télémétrie : entrées, sorties, latence, coût, taux d'erreur et de refus, retours des utilisateurs et signaux de dérive. Consignez assez pour enquêter sur une mauvaise réponse, avec soin pour les données enregistrées. Voir le Sujet 5.1 — L'IA dans la gestion des services.

**Plateforme et responsabilité.** De nombreuses organisations exploitent une plateforme de télémétrie partagée, avec des normes de nommage, d'étiquetage et de conservation, et des équipes responsables des signaux de leurs services. Une équipe de plateforme fournit l'outillage et les conseils ; les équipes de service sont responsables de ce qu'elles émettent et de la manière dont elles s'en servent.

**Comment les angles s'articulent.** L'observabilité est la base de données de l'analytique et de l'AIOps. La pratique agile traite l'instrumentation comme faisant partie de la définition de « terminé ». L'automatisation utilise la télémétrie pour mettre à l'échelle et remédier.

## Bonnes pratiques

1. **Instrumenter en construisant.** Traitez la télémétrie comme une partie de la fonctionnalité. Incluez-la dans la définition de « terminé » et revoyez-la avec la conception.
2. **Normaliser noms et contexte.** Convenez de noms de services, d'ensembles d'étiquettes, d'unités et d'un identifiant de requête porté à travers chaque service. Documentez-les et vérifiez-les dans le pipeline.
3. **Émettre des journaux structurés.** Utilisez des champs nommés cohérents, incluez l'identifiant de requête et gardez les messages courts. Évitez de journaliser des secrets et des données personnelles inutiles.
4. **Tracer les chemins qui comptent.** Instrumentez les principaux parcours d'utilisateurs et les appels entre services, et propagez le contexte à chaque étape, files et appels externes compris.
5. **Définir les indicateurs du point de vue de l'utilisateur.** Calculez les SLI à partir de la télémétrie au point de contact avec l'utilisateur et ajoutez des événements métier qui montrent si les utilisateurs ont accompli ce pour quoi ils sont venus.
6. **Utiliser des formats ouverts.** Préférez les normes ouvertes pour émettre la télémétrie, afin de pouvoir changer de système sans réinstrumenter. Vérifiez la prise en charge dans vos plateformes.
7. **Maîtriser le coût délibérément.** Fixez des budgets de télémétrie, évitez les étiquettes à forte cardinalité, échantillonnez le trafic normal, gardez les erreurs et les requêtes lentes et étagez la conservation.
8. **Protéger la télémétrie.** Épurez les données sensibles à la source, restreignez l'accès et appliquez des règles de conservation. Surveillez l'accès aux magasins de télémétrie.
9. **La rendre utilisable.** Donnez aux équipes des tableaux de bord partagés, des requêtes enregistrées et une formation à l'investigation. Reliez les alertes à la télémétrie et aux runbooks pertinents.
10. **Examiner la télémétrie après les incidents.** Demandez ce que vous ne pouviez pas voir pendant l'incident et ajoutez-le. Retirez les signaux que personne n'utilise.

## Questions à discuter avec votre équipe

**Lors de notre dernier incident, que voulions-nous savoir que nous ne pouvions pas découvrir ?**
Interrogez les intervenants. Attendez-vous à des lacunes dans les traces, le contexte ou les données au niveau de l'utilisateur. Demandez ensuite de choisir une lacune et d'ajouter le signal.

**Pouvons-nous suivre la requête d'un seul utilisateur à travers tous les services qu'elle touche ?**
Essayez avec une vraie requête. Attendez-vous à des ruptures aux files et aux appels externes. Demandez ensuite de propager l'identifiant à travers la première rupture.

**Que journalisons-nous qui ne devrait pas l'être, et que ne journalisons-nous pas qui devrait l'être ?**
Regardez un échantillon de journaux. Attendez-vous à des secrets, des données personnelles et du bruit. Demandez ensuite de convenir d'une règle et d'une épuration.

**Combien dépensons-nous en télémétrie, et qu'en obtenons-nous ?**
Demandez le chiffre et les plus grosses sources. Attendez-vous à des surprises. Demandez ensuite de choisir le signal le plus coûteux et le moins utilisé à couper ou à échantillonner.

**Dans quelle mesure sommes-nous liés à notre outil de télémétrie actuel, et que faudrait-il pour en changer ?**
Estimez. Attendez-vous à « beaucoup ». Demandez ensuite de choisir un service à instrumenter avec une norme ouverte.

**Quelle télémétrie nos fonctions d'IA produisent-elles, et pourrions-nous enquêter sur une mauvaise réponse à partir d'elle ?**
Demandez. Attendez-vous à des enregistrements minimaux. Demandez ensuite de convenir de ce qu'il faut consigner, avec des limites de vie privée, et d'essayer une investigation.

## En pratique : un exemple de gestion des services

L'API publique d'un service météorologique national sert plusieurs millions de requêtes par jour à travers huit services internes. Les utilisateurs se plaignent de réponses parfois lentes pour certains lieux. La surveillance montre l'API dans son objectif de latence en moyenne, et chaque service paraît sain isolément. L'ingénieur d'astreinte passe deux jours à courir après le problème.

L'équipe de plateforme est en train de passer à l'instrumentation OpenTelemetry. Sur la passerelle de l'API et quatre des huit services, les requêtes portent un identifiant de trace et chaque service enregistre des segments (spans) avec leurs durées. Grâce aux traces, un ingénieur filtre les requêtes lentes de la semaine dernière et constate que presque toutes passent par le même appel : une recherche dans le service de données géographiques pour des lieux dont le nom contient des caractères inhabituels, qui prend dix fois plus de temps que la normale. Les quatre autres services ne sont pas encore instrumentés, mais la lacune est maintenant assez étroite pour enquêter à la main. La cause est un index de base de données manquant pour ces requêtes, et la correction prend une heure.

L'équipe examine le coût. La dépense de télémétrie a crû de 40 % en six mois, surtout à cause d'une étiquette sur une métrique qui inclut le lieu demandé, lequel a des centaines de milliers de valeurs. Ils retirent l'étiquette, gardent le lieu dans les traces et les journaux et échantillonnent 5 % des traces ordinaires tout en gardant toutes les erreurs et les requêtes lentes. Une épuration supprime les adresses IP des journaux après 24 heures, après que le responsable de la vie privée a noté qu'elles comptent comme des données personnelles dans certaines juridictions.

L'équipe ajoute aussi un signal métier : un compte des appels d'API qui ont renvoyé un résultat vide, que les utilisateurs signalaient autrefois comme « aucune donnée ». Il montre un motif après chaque mise à jour de modèle.

Ce qui change : les investigations prennent des heures au lieu de jours, et le coût baisse d'un tiers. Ce qui reste difficile : quatre services n'ont toujours pas de traces, et deux appartiennent à une autre agence ; la règle d'échantillonnage a déjà masqué une erreur rare qui n'est apparue que dans le trafic non échantillonné et a été trouvée dans un journal ; et les ingénieurs ont besoin de pratique pour bien utiliser les outils de traces. L'équipe programme une séance de formation et fixe une règle : garder toutes les traces comportant une erreur.

## Quatre perspectives

### Équipes produit et de livraison

Intégrez la télémétrie aux fonctionnalités : noms cohérents, identifiants de requête, journaux structurés, segments sur les chemins clés et événements métier. Évitez les secrets dans les signaux et revoyez la télémétrie en conception.

### Équipes de service et d'exploitation

Utilisez la télémétrie pour investiguer, pas seulement pour alerter. Gardez reliés tableaux de bord, requêtes et runbooks, et dites aux développeurs ce que vous n'avez pas pu voir. Surveillez le coût et la qualité de la télémétrie.

### Direction et gouvernance

Financez la plateforme, les normes et la formation. Demandez des preuves que la télémétrie raccourcit les investigations et reflète l'expérience des utilisateurs. Fixez des budgets et des règles de vie privée, et préférez les normes ouvertes.

### Clients et utilisateurs

Vous profitez du fait qu'un fournisseur peut retracer votre problème jusqu'à une cause rapidement. Donnez des détails quand vous signalez un problème, comme l'heure et ce que vous faisiez, qui aident à retrouver votre requête.

## Agilité, IA, automatisation et analytique

### Agilité

Ajoutez l'instrumentation par petites étapes avec chaque fonctionnalité et affinez-la après chaque incident. Examinez les tableaux de bord avec l'équipe et retirez ceux que personne n'utilise. Attention : greffer la télémétrie à la fin produit des lacunes ; incluez-la dans la définition de « terminé ».

### IA

L'IA peut résumer traces et journaux, regrouper des anomalies et répondre à des questions sur la télémétrie, avec des responsables et des vérifications. Les fonctions d'IA ont aussi besoin de leur propre télémétrie. Attention : l'analyse par l'IA dépend de la qualité et du contexte des données ; de mauvaises étiquettes produisent de mauvaises conclusions. Voir le Sujet 5.2 — AIOps.

### Automatisation

Automatisez l'instrumentation là où les bibliothèques le permettent, faites respecter les normes de nommage et d'étiquetage dans le pipeline et utilisez la télémétrie pour la mise à l'échelle et la remédiation avec des limites. Attention : une automatisation déclenchée par une télémétrie bruyante peut se tromper ; testez les seuils et ajoutez des limites. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Utilisez la télémétrie pour les SLI, les tendances, la capacité et l'expérience des utilisateurs, ainsi que pour le coût de la télémétrie elle-même. Attention : l'échantillonnage et l'agrégation changent ce que les données peuvent montrer, et les étiquettes à forte cardinalité peuvent fausser ou casser les systèmes ; notez les limites dans les rapports. Voir le Sujet 7.1 — Analytique pour la gestion des services et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Trois tas de données.** Métriques, journaux et traces ne peuvent pas être reliés. Partagez identifiants et étiquettes.
- **La télémétrie en réflexion après coup.** Des lacunes apparaissent lors des incidents. Instrumentez avec la fonctionnalité.
- **Des étiquettes à forte cardinalité.** Coûts et performance en souffrent. Limitez les étiquettes et gardez le détail dans les traces et les journaux.
- **Secrets et données personnelles dans les journaux.** Des données sensibles fuient. Épurez à la source et contrôlez l'accès.
- **Enfermement dans un seul outil.** Changer coûte cher. Utilisez des normes ouvertes.
- **Tout garder pour toujours.** Le coût monte. Étagez la conservation et échantillonnez.
- **Des tableaux de bord que personne n'utilise.** L'effort est gaspillé. Élaguez et reliez aux décisions.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Couverture | Métriques d'infrastructure | Services clés avec métriques et journaux | Métriques, journaux et traces avec contexte partagé sur les parcours clés | Couverture examinée après les incidents | Couverture cohérente entre services et fournisseurs |
| Normes | Aucune | Conventions locales | Nommage, étiquettes et formats ouverts convenus | Normes vérifiées dans le pipeline | Normes partagées et évoluant avec la plateforme |
| Coût et conservation | Non maîtrisés | Conscience | Budgets, échantillonnage et conservation étagée | Coût par signal et valeur examinés | Coût et valeur optimisés en continu |
| Protection | Floue | Contrôle d'accès de base | Règles d'épuration, d'accès et de conservation | Conformité surveillée | Contrôles intégrés à la collecte et au stockage |

## Liste de contrôle

- [ ] La télémétrie fait partie de notre définition de « terminé ».
- [ ] Nous avons convenu de noms, d'étiquettes, d'unités et d'un identifiant de requête porté à travers les services.
- [ ] Les journaux sont structurés et exempts de secrets et de données personnelles inutiles.
- [ ] Les principaux parcours d'utilisateurs sont tracés de bout en bout.
- [ ] Les SLI sont calculés à partir de la télémétrie au point de contact avec l'utilisateur.
- [ ] Nous utilisons des formats ouverts pour émettre la télémétrie.
- [ ] Nous avons un budget de télémétrie avec échantillonnage et conservation étagée.
- [ ] Nous examinons ce que nous ne pouvions pas voir après chaque incident.

## Invites d'IA

**Trouver les lacunes de télémétrie à partir d'un incident.**

```text
Here is the timeline of an incident and notes on what responders tried to find out: [paste].
List each question the responders could not answer, what signal would have answered it (metric, log, trace, user data), and a question for the owning team. Do not assume any signal exists.
List what you are unsure of.
```

**Examiner un échantillon de journaux pour y chercher des données sensibles.**

```text
Here is a sample of log lines from our service: [paste, already partially scrubbed].
List any content that looks like secrets, personal data, or internal details, quoting the exact text, and suggest categories of scrub rules. Do not guess whether any is real.
List what you are unsure of.
```

**Proposer une norme de nommage et d'étiquettes.**

```text
Our services: [list]. Our environments: [list]. Our teams: [list]. What we want to be able to filter by: [list].
Draft a one-page standard for service names, label keys, allowed values, and request identifiers, with examples. Warn about labels that could have very many distinct values. Do not name a vendor.
List what you are unsure of.
```

## Compétences d'IA

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md) : à utiliser pour examiner des motifs inhabituels dans la télémétrie.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md) : à utiliser pour concevoir la façon dont la télémétrie circule et est stockée.
- [data-governance](../../../../skills/data-governance/SKILL.md) : à utiliser pour fixer les règles de vie privée, de conservation et d'accès.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md) : à utiliser pour choisir des signaux d'alerte précoce.
- [performance-testing](../../../../skills/performance-testing/SKILL.md) : à utiliser pour tester la latence et la capacité avec la télémétrie.

## Sources principales

- OpenTelemetry (opentelemetry.io) : la norme ouverte et l'outillage pour métriques, journaux et traces.
- Charity Majors, Liz Fong-Jones et George Miranda, *Observability Engineering* (2022) : un guide de praticiens sur l'approche.
- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitre sur la surveillance, gratuit sur sre.google.
- Wikipedia, « Observability (software) » et « Telemetry » : des aperçus des idées.

## Références

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
