# La chaîne de valeur des services

**La chaîne de valeur des services d'ITIL 4 est un modèle opérationnel de six activités — planifier, améliorer, impliquer, concevoir et faire la transition, obtenir ou construire, livrer et soutenir — que chaque flux de valeur traverse dans son propre ordre ; utilisez-la pour repérer où le travail attend et qui est responsable de chaque transfert.**

## Pourquoi c'est important

Le travail dans une organisation de services avance rarement en ligne droite. Une demande arrive, quelqu'un pose une question, un changement est conçu, un fournisseur est appelé, le changement est déployé, puis le support prend le relais. Chaque étape relève d'une équipe différente, et personne ne voit le chemin entier. Il en résulte un retard qu'aucune équipe n'a causé seule et qu'aucune ne peut corriger seule.

La chaîne de valeur des services donne une forme à ce chemin. Elle nomme six activités qui, ensemble, transforment la demande en valeur, et elle permet de décrire un parcours précis, un flux de valeur, comme un itinéraire à travers ces activités. Comme les activités sont génériques, le même modèle convient à une mise en production logicielle, à une demande d'ordinateur portable ou à un incident, avec des itinéraires différents.

Ce sujet explique les six activités, en quoi les flux de valeur diffèrent de la chaîne, et comment utiliser le modèle sur du travail réel. Il décrit ITIL 4, la version largement documentée. ITIL (version 5), présenté par PeopleCert en 2026, peut présenter le modèle opérationnel différemment ; consultez les pages du propriétaire avant de le citer comme à jour (voir le Sujet 1.3 — ITIL 5).

## Concepts clés

**Les six activités.** Dans ITIL 4, ce sont :

| Activité | Finalité en termes simples |
|---|---|
| Planifier | Maintenir une compréhension partagée de la vision, de l'état actuel et de l'orientation dans toute l'organisation |
| Améliorer | Faire en sorte que les services, les pratiques et les produits ne cessent de progresser |
| Impliquer | Comprendre les besoins des parties prenantes et entretenir de bonnes relations et la transparence |
| Concevoir et faire la transition | S'assurer que les produits et services répondent aux attentes de qualité, de coût et de délai de mise sur le marché |
| Obtenir ou construire | S'assurer que les composants sont disponibles quand et où il le faut, et conformes à la spécification |
| Livrer et soutenir | S'assurer que les services sont livrés et soutenus conformément à la spécification et aux attentes convenues |

**Entrées et sorties.** La chaîne reçoit deux types d'entrées : l'opportunité et la demande venues de l'extérieur, et les résultats des autres activités venus de l'intérieur. Chaque activité produit des sorties qui alimentent d'autres activités, et l'ensemble de la chaîne produit des produits et services pour les consommateurs. La valeur est réalisée lorsque les consommateurs utilisent le service, non lorsque la chaîne s'achève.

**Flux de valeur.** Une série d'étapes qu'une organisation entreprend pour créer et livrer des produits et services aux consommateurs. Un flux de valeur est précis : « résoudre un incident majeur », « accueillir un nouvel employé », « publier un changement d'application mobile ». Chacun suit son propre chemin à travers les activités. Les articles de Wikipedia sur les flux de valeur et sur la cartographie des flux de valeur expliquent l'idée et ses origines lean.

**Ce n'est pas la chaîne de valeur de Porter.** Le chercheur en management Michael Porter a décrit en 1985 une « chaîne de valeur » pour les entreprises manufacturières, avec des activités principales et de soutien. La chaîne d'ITIL emprunte le nom et l'idée d'activités qui ajoutent de la valeur, mais elle décrit l'exploitation de services et n'est pas le même modèle. En lisant des documents plus anciens, vérifiez duquel il s'agit.

**Les activités ne sont ni des équipes ni des phases.** Une activité est un type de travail, non un service. Dans une petite organisation, une seule personne peut accomplir les six dans une journée. Dans une grande, la même activité peut se dérouler à de nombreux endroits. La chaîne n'impose aucun ordre ; c'est le flux de valeur qui l'impose.

**Les pratiques contribuent aux activités.** Chaque pratique, comme la gestion des incidents ou l'habilitation des changements, aide une ou plusieurs activités. Faire correspondre les pratiques aux activités montre les chevauchements et les lacunes (voir le Sujet 1.4 — Le système de valeur des services). Par exemple, une pratique d'habilitation des changements peut toucher la conception et la transition, l'obtention ou la construction, et la livraison et le soutien.

**Flux et attente.** La question utile à propos d'un flux de valeur n'est pas la durée de chaque étape, mais l'endroit où le travail attend. Dans la plupart des organisations, le travail passe beaucoup plus de temps à attendre entre les activités qu'à être traité. La tradition lean de cartographie des flux de valeur, traitée au Sujet 2.4 — Lean et Kaizen et au Sujet 7.6 — Analytique des processus et des flux de valeur, existe pour mettre cela en évidence.

**La livraison continue comme flux de valeur.** Un changement logiciel allant de l'idée à la production traverse planifier, impliquer, concevoir et faire la transition, obtenir ou construire, et livrer et soutenir, avec améliorer qui se déroule en parallèle. Les pratiques de livraison continue raccourcissent les attentes entre ces activités (voir le Sujet 2.2 — Livraison continue).

**Comment les angles s'articulent.** L'agilité raccourcit les boucles à l'intérieur de la chaîne et accroît l'implication des parties prenantes dans « impliquer ». L'IA peut assister à l'intérieur des activités, par exemple en résumant des demandes dans « impliquer » ou en proposant des tests dans « concevoir et faire la transition ». L'automatisation fait passer le travail d'une activité à l'autre sans transferts manuels. L'analytique mesure le flux à travers la chaîne.

## Bonnes pratiques

1. **Cartographier des flux de valeur réels, non la chaîne en général.** Choisissez un flux précis, comme le traitement d'une demande d'accès d'un client, et suivez un exemple récent du début à la fin. Utilisez de vraies dates.
2. **Marquer l'activité à laquelle appartient chaque étape.** Étiquetez chaque étape du suivi avec l'activité qu'elle sert. Vous trouverez souvent plusieurs étapes dans une activité et aucune dans une autre, ce qui est un constat.
3. **Mesurer l'attente séparément du travail.** Consignez combien de temps le travail était en cours et combien de temps il est resté dans une file. Rapportez les deux ; l'écart surprend généralement.
4. **Trouver les transferts.** Chaque fois que le travail passe d'une équipe à une autre, demandez quelle information l'accompagne et ce qui est perdu. Les reprises répétées remontent souvent à un mauvais transfert.
5. **Traiter « impliquer » comme une activité à part entière.** De nombreuses équipes de service planifient et livrent bien mais impliquent mal. Vérifiez que les parties prenantes sont impliquées dès le début et que la rétroaction revient à ceux qui décident.
6. **Rendre « améliorer » visible dans chaque flux.** Cherchez où les idées d'amélioration entrent dans le flux et qui les examine. S'il n'y a pas de point d'entrée, l'amélioration dépendra d'exploits individuels.
7. **Nommer un responsable pour chaque flux de valeur.** Une personne est responsable du déroulement du flux de bout en bout et peut demander aux équipes de changer. Sans responsable, chaque équipe optimise sa propre partie.
8. **Utiliser la chaîne pour placer l'automatisation.** Cherchez les étapes stables, répétées et comprises, et automatisez-les, avec des journaux. N'automatisez pas une étape qui n'est que le symptôme d'une décision manquante.
9. **Revoir la carte après un changement.** De nouveaux fournisseurs, outils ou assistants d'IA modifient l'itinéraire. Redessinez le flux et demandez ce qui a bougé.
10. **Garder le modèle léger.** Si la carte devient un grand schéma que personne n'utilise, simplifiez-la. Une page montrant les attentes vaut plus qu'un tableau complet.

## Questions à discuter avec votre équipe

**Quel flux de valeur compte le plus pour nos clients, et qui en est responsable de bout en bout ?**
Cela commence par la responsabilité. Les gens nomment souvent un processus mais pas une personne. Vous pouvez trouver plusieurs responsables de parties et aucun du tout. Demandez ensuite de choisir un flux et une personne responsable pour un essai d'un trimestre.

**Où le dernier travail a-t-il attendu le plus longtemps, et pourquoi ?**
Utilisez un exemple réel avec des dates. Les réponses typiques sont les approbations, les files d'attente de spécialistes et l'attente d'informations d'un client. Demandez ce que le travail attendait, non qui était lent. Demandez ensuite ce qui supprimerait l'attente.

**Laquelle des six activités accomplissons-nous le plus mal ?**
Les équipes répondent généralement « impliquer » ou « améliorer » lorsqu'on leur demande honnêtement. Demandez des preuves : une exigence manquée, une idée d'amélioration restée sans suite. Demandez ensuite de choisir un petit changement dans cette activité.

**Quelle information se perd lors de notre plus gros transfert ?**
Demandez à l'équipe réceptrice ce qu'elle aurait aimé savoir. Attendez-vous à un contexte manquant, une priorité floue et un historique absent. Demandez ensuite de convenir d'un champ ou d'une conversation qui accompagne le travail.

**Quelles étapes de notre flux n'existent qu'à cause d'une décision manquante ?**
Certaines étapes, comme les approbations répétées, remplacent une règle que personne n'a écrite. Demandez qui approuverait le travail si la règle existait et ce que la règle dirait. Demandez ensuite de rédiger la règle pour un cas.

**Que ferions-nous autrement dans le flux si un assistant d'IA pouvait rédiger, résumer ou orienter à chaque étape ?**
Cela fait apparaître où l'IA pourrait aider et où elle ajouterait du risque. Demandez des responsables et des points de revue. Demandez ensuite de choisir une étape à faible risque à essayer, avec une personne qui examine chaque sortie.

## En pratique : un exemple de gestion des services

Le service informatique d'une université traite les demandes de mise en place d'environnements de calcul pour la recherche pour de nouveaux projets. Les chercheurs se plaignent que cela prend des semaines. Le responsable du service suit une demande récente à travers la chaîne de valeur.

La demande arrive par courriel (impliquer), est clarifiée au fil de trois échanges, est approuvée par un responsable des financements, est transmise à une équipe d'infrastructure qui construit l'environnement (obtenir ou construire), est testée par une seconde équipe (concevoir et faire la transition) et est confiée au support avec une courte note (livrer et soutenir). Le temps écoulé total est de 23 jours ouvrés. Le temps de travail effectif, additionné pour les personnes concernées, est inférieur à quatre jours. Le reste est de l'attente : de clarifications, de l'approbation et de la file de la seconde équipe.

Le service apporte trois changements. Il remplace l'échange de courriels par un court formulaire qui pose les questions posées dans tous les cas, il préapprouve les demandes inférieures à un seuil de financement, et il demande à l'équipe d'infrastructure d'exécuter des tests de base dans le cadre de la construction, la seconde équipe en examinant un échantillon. Il nomme aussi le responsable du calcul pour la recherche comme responsable du flux.

Ce qui change : le même type de demande prend désormais environ neuf jours ouvrés, d'après les quelques demandes suivantes suivies par l'équipe. Ce qui reste difficile : le seuil de préapprobation dépend d'une règle financière que le service ne contrôle pas, et l'approche par échantillonnage n'a pas encore été convenue avec l'équipe de sécurité, si bien que certains environnements attendent encore une revue. Le responsable inscrit les deux points pour la prochaine revue d'amélioration.

## Quatre perspectives

### Équipes produit et de livraison

Traitez votre pipeline de livraison comme un flux de valeur et suivez un changement de l'idée au service en fonctionnement. Montrez les attentes et travaillez avec l'exploitation sur le transfert vers livrer et soutenir. Intégrez l'activité « impliquer » à vos plans, avec les clients impliqués tôt.

### Équipes de service et d'exploitation

Vous possédez une grande partie de « livrer et soutenir » et vous recevez des transferts des autres. Consignez ce dont vous aviez besoin et que vous n'avez pas reçu à chaque transfert, et apportez-le au responsable du flux. Proposez d'examiner les conceptions tôt, quand il est moins coûteux de les changer.

### Direction et gouvernance

Demandez que les flux de valeur soient attribués et mesurés de bout en bout. Regardez les attentes, pas seulement l'effort. Financez les transferts ainsi que les activités « impliquer » et « améliorer », qu'il est facile de laisser dépérir.

### Clients et utilisateurs

Vous voyez le flux de l'extérieur : une demande entre et quelque chose revient plus tard. Demandez au fournisseur quelles sont les étapes et où en est votre demande. Dites-lui où on vous a posé deux fois la même question.

## Agilité, IA, automatisation et analytique

### Agilité

Utilisez des cycles courts à l'intérieur de chaque activité, avec les parties prenantes impliquées tout au long, et traitez la carte du flux comme un backlog d'améliorations. Attention : accélérer une activité, comme la construction, n'améliore pas le flux si l'activité suivante est le goulot d'étranglement.

### IA

L'IA peut assister à l'intérieur des activités : résumer un long fil de demande dans « impliquer », rédiger des cas de test dans « concevoir et faire la transition », ou suggérer un article de connaissances dans « livrer et soutenir ». Désignez un responsable, gardez une personne qui examine les sorties et consignez ce qui a été utilisé. Attention : une étape d'IA qui oriente mal le travail ajoute un nouveau type d'attente ; suivez les corrections. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez les transferts et les étapes courantes, comme créer un enregistrement et prévenir l'équipe suivante, afin que le travail avance sans attendre qu'une personne s'en souvienne. Tenez un journal et un moyen d'annuler. Attention : l'automatisation peut accélérer un flux vers un goulot d'étranglement et allonger la file. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Utilisez des horodatages aux frontières des activités pour calculer le délai total, le temps de travail et le temps d'attente de chaque flux. Attention : les horodatages dépendent de la façon dont les gens utilisent les états de tickets, et une mesure du « temps dans l'activité » peut être détournée en déplaçant les tickets entre les états ; vérifiez à l'aide de suivis du travail réel. Voir le Sujet 7.6 — Analytique des processus et des flux de valeur et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Dessiner la chaîne, non un flux.** Les six cases sont accrochées au mur et ne décrivent rien. Suivez une demande réelle avec des dates.
- **Optimiser une seule activité.** Une équipe accélère la construction et le flux reste lent. Mesurez de bout en bout et trouvez l'attente la plus longue.
- **Ignorer « impliquer » et « améliorer ».** La planification et la livraison sont solides et la rétroaction faible. Donnez aux deux des responsables et du temps explicites.
- **Un flux sans responsable.** Chaque équipe défend sa propre étape. Nommez une personne responsable du flux.
- **Confondre la chaîne avec le modèle de Porter.** Les lecteurs importent de mauvaises idées. Dites de quel modèle vous parlez.
- **Traiter les activités comme des équipes.** Le modèle est transformé en organigramme. Gardez les activités comme des types de travail que de nombreuses équipes accomplissent.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Cartographie des flux | Aucune carte | Un flux suivi | Principaux flux cartographiés avec des données réelles | Cartes mises à jour et utilisées pour décider | Flux cartographiés entre équipes, fournisseurs et plateformes |
| Mesure du flux | Effort seulement | Temps écoulé connu | Temps de travail et temps d'attente rapportés | Goulots d'étranglement suivis et traités | Flux optimisé dans l'ensemble du système |
| Responsabilité | Les équipes possèdent des étapes | Responsables pour les principaux flux | Chaque flux clé a un responsable | Les responsables examinent le flux et les résultats pour les clients | Les responsables se coordonnent entre flux et partenaires |
| Impliquer et améliorer | Au cas par cas | Un peu de rétroaction recueillie | Rétroaction et amélioration ont des points d'entrée définis | Résultats des deux mesurés | Rétroaction et amélioration reliées entre les flux |

## Liste de contrôle

- [ ] Nous savons quels flux de valeur comptent le plus pour les clients.
- [ ] Chaque flux clé a un responsable nommé.
- [ ] Nous avons suivi au moins une demande réelle avec des dates.
- [ ] Nous connaissons le temps de travail et le temps d'attente de ce flux.
- [ ] Nous avons identifié les principaux transferts et ce qui est perdu à chacun.
- [ ] « Impliquer » et « améliorer » ont chacun un point d'entrée défini.
- [ ] Nous avons placé l'automatisation sur des étapes stables et répétées, avec des journaux.
- [ ] Nous redessinons le flux après un changement majeur.

## Invites d'IA

**Analyser un suivi pour y repérer les attentes.**

```text
Here is a trace of one request through our process, with timestamps and who handled each step: [paste trace].
Calculate for each step the elapsed time from the previous step, and list the three longest gaps. For each, suggest two questions to find out why the work waited. Do not assume causes.
List what you are unsure of.
```

**Étiqueter les étapes avec les activités de la chaîne de valeur.**

```text
Below are the steps in our process for [stream name]: [paste steps].
Label each with one of the six ITIL 4 value chain activities (plan, improve, engage, design and transition, obtain or build, deliver and support) and give a one-line reason. Mark labels you are unsure about and list which activities have no steps.
Do not add steps.
```

**Rédiger des questions pour une revue de transfert.**

```text
We hand work from [team A] to [team B] in the stream [name]. The information handed over is: [list].
Write ten questions to ask team B about what they need that they do not receive. Avoid suggesting answers.
List what you are unsure of.
```

## Compétences d'IA

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md) : à utiliser pour cartographier et mesurer un flux de valeur.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les étapes, les attentes et les transferts d'un processus.
- [kaizen](../../../../skills/kaizen/SKILL.md) : à utiliser pour transformer les constats en petites expériences d'amélioration.

## Sources principales

- PeopleCert, pages de certification ITIL : la description des recommandations ITIL et de la version la plus récente par le propriétaire.
- Wikipedia, « Value stream » : le concept que la chaîne organise.
- Wikipedia, « Value-stream mapping » : la technique lean pour repérer les attentes.
- Wikipedia, « Value chain » : le modèle original de Porter, pour éviter de confondre les deux.

## Références

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Value chain — Wikipedia — https://en.wikipedia.org/wiki/Value_chain
4. Michael Porter — Wikipedia — https://en.wikipedia.org/wiki/Michael_Porter
5. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
6. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
7. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
8. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
9. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
