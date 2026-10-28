# Gestion financière et FinOps

**La gestion financière des services rend visible le coût de ce que vous exploitez et le relie à la valeur livrée ; le FinOps applique cette discipline aux dépenses de cloud et d'IA, où le coût suit les décisions d'ingénierie heure par heure, en réunissant ingénieurs, finance et responsables de produit dans la même conversation.**

## Pourquoi c'est important

Le coût de la technologie se résumait autrefois à quelques décisions grandes et lentes : acheter des serveurs, signer une licence, construire un centre de données. La finance pouvait le planifier une fois par an. Les services cloud et les abonnements ont changé cela. N'importe quel ingénieur peut créer une ressource qui coûte de l'argent chaque heure, et la facture arrive un mois plus tard, agrégée de telle sorte que personne ne peut dire ce qui l'a fait grimper. Les coûts augmentent progressivement puis bondissent, et le premier signe est une surprise sur une facture.

L'IA l'accentue. Une requête coûte une fraction de centime, et une fonctionnalité utilisée par un million de personnes coûte cher. Entraîner un modèle ou exécuter une grosse charge sur du matériel spécialisé peut coûter en un jour autant que le budget mensuel d'une équipe. Contrairement à un serveur, que l'on voit dans une baie, le coût à l'usage est invisible jusqu'à ce qu'il soit grand.

La gestion financière en gestion des services précède le cloud. ITIL la décrit comme la compréhension et la maîtrise des coûts des services, y compris la budgétisation, la comptabilité et la facturation. Le FinOps est une pratique plus récente, nommée par une communauté de praticiens, qui apporte la redevabilité financière aux dépenses de cloud par la collaboration entre équipes d'ingénierie, de finance et métier. Ce sujet décrit les deux et la manière dont ils se complètent. Il se relie à la gestion des actifs (Sujet 4.1 — Gestion des actifs), à la gestion des niveaux de service (Sujet 3.7 — Gestion des niveaux de service) et à l'économie de l'automatisation et de l'IA (Sujet 6.1 — Stratégie d'automatisation et Sujet 5.8 — Modèle opérationnel et compétences en IA). Il ne donne aucun conseil comptable ni fiscal.

## Concepts clés

**Calcul des coûts de service.** Déterminer ce que coûte la fourniture d'un service : personnes, infrastructure, licences, fournisseurs et frais généraux. Wikipedia décrit la comptabilité analytique, la pratique plus large d'enregistrement et d'analyse des coûts. Les coûts sont directs (propres à un service) ou partagés (à répartir). Le but est une estimation utilisable, non parfaite.

**Imputation des coûts.** Affecter des coûts partagés à des services, des équipes ou des produits selon une règle, comme les effectifs, l'usage ou la capacité. Wikipedia décrit l'imputation des coûts et la méthode des coûts par activité, qui répartit le coût selon les activités qui le génèrent. Une règle devrait être compréhensible et difficile à contester ; une règle parfaite ne vaut pas une longue dispute.

**Showback et chargeback.** Le showback rend compte des coûts aux consommateurs sans les leur facturer ; le chargeback les facture. Wikipedia décrit la facturation interne informatique (chargeback et showback). Le showback sensibilise avec moins de friction. Le chargeback crée de plus fortes incitations et plus d'administration, et peut susciter des disputes sur l'imputation. De nombreuses organisations commencent par le showback.

**Budgétisation et prévision.** Un budget est un plan de dépenses attendues ; une prévision est une estimation actualisée de là où atterriront les dépenses. Wikipedia décrit les budgets et la prévision. Pour les dépenses variables de cloud et d'IA, des prévisions fréquentes et des alertes comptent plus qu'un chiffre annuel. Voir le Sujet 2.10 — Gestion agile et apprentissage pour le financement d'équipes stables.

**Dépenses d'investissement et d'exploitation.** La comptabilité distingue les dépenses d'investissement, qui achètent des actifs censés durer, des dépenses d'exploitation, qui sont les coûts courants. Wikipedia décrit les deux. Le cloud fait passer les dépenses de l'investissement à l'exploitation, ce qui affecte les budgets et le reporting ; demandez à la finance comment votre organisation le traite.

**Coût total de possession.** Le coût sur toute la vie d'un actif ou d'un service, y compris l'achat, l'exploitation, le support et la cession. Wikipedia décrit le coût total de possession. Il évite de choisir l'achat le moins cher et la vie la plus coûteuse.

**Retour et valeur.** Le coût compte par rapport à la valeur. Le retour sur investissement (ROI), la valeur actuelle nette et des mesures similaires comparent bénéfices et coûts dans le temps. Wikipedia décrit le retour sur investissement et la valeur actuelle nette. Soyez prudent avec les bénéfices difficiles à mesurer ; énoncez les hypothèses et des fourchettes.

**Coût d'opportunité et coût irrécupérable.** Le coût d'opportunité est la valeur de la meilleure alternative abandonnée. Le coût irrécupérable (sunk cost) est une dépense qui ne peut être récupérée ; il ne devrait pas piloter les décisions futures, bien qu'il le fasse souvent. Wikipedia décrit les deux.

**FinOps.** Une pratique, et une communauté, qui vise à apporter la redevabilité financière aux dépenses variables de cloud. Wikipedia n'a pas d'article distinct sous ce nom au moment de la rédaction ; la FinOps Foundation (finops.org), qui relève de la Linux Foundation, publie un référentiel et des définitions. Ses idées centrales : les équipes sont responsables de leur usage et de leur coût, les décisions sont pilotées par la valeur métier de la technologie, les données sont opportunes et accessibles, et un groupe central facilite plutôt qu'il ne contrôle.

**Le cycle FinOps.** Une description courante comporte trois phases qui se répètent : informer (rendre les coûts visibles et imputés), optimiser (trouver des économies et agir) et exploiter (intégrer la pratique à la façon de travailler des équipes). Consultez le référentiel actuel de la Fondation pour les détails.

**Étiquetage et imputation dans le cloud.** Les données de coût ne sont utiles que si les ressources sont étiquetées avec le responsable, le service et l'environnement. Sans étiquettes, les factures ne peuvent pas être imputées. Faites respecter l'étiquetage à la création. Voir le Sujet 4.4 — Gestion de la configuration.

**Leviers d'optimisation.** Les plus courants : ajuster la taille des ressources, éteindre celles qui sont inactives, utiliser des remises d'engagement pour des charges stables, choisir des niveaux de stockage moins chers et changer d'architecture. Les économies dépendent d'arbitrages avec la fiabilité et l'effort. Pesez chacune par rapport au niveau de service qu'elle soutient. Voir le Sujet 3.11 — Disponibilité, capacité et performance.

**Coûts unitaires.** Le coût par transaction, par utilisateur ou par requête relie la dépense à la valeur. Si le coût total monte mais que le coût par transaction baisse, la croissance peut l'expliquer. Si le coût par transaction monte, quelque chose ne va pas. Les mesures unitaires aident dans les discussions avec la finance et les responsables de produit.

**Coût de l'IA.** Les charges d'IA ajoutent des coûts d'entraînement, d'hébergement et d'usage, souvent tarifés par jetons (unités de texte traitées), par temps de calcul sur du matériel spécialisé comme les processeurs graphiques, ou par appel. Wikipedia décrit les processeurs graphiques et l'apprentissage automatique. La consommation d'énergie est aussi un coût et une préoccupation de durabilité. Suivez le coût par cas d'usage et par résultat. Voir le Sujet 5.8 — Modèle opérationnel et compétences en IA.

**La dette technique comme idée financière.** La maintenance différée est un passif dont les intérêts sont payés en travail plus lent et en incidents plus nombreux. Wikipedia décrit la dette technique. Montrer son coût en argent et en temps l'aide à concourir pour le financement.

**Comment les angles s'articulent.** La gestion financière soutient le financement agile d'équipes stables. L'IA peut aider à analyser les factures et à prévoir, sous relecture, et est elle-même un coût à gérer. L'automatisation éteint les ressources inactives et fait respecter les étiquettes. L'analytique fournit les données de coût et de valeur.

## Bonnes pratiques

1. **Rendre le coût visible à ceux qui décident.** Montrez à chaque équipe le coût de ce qu'elle exploite, quasi en temps réel, avec une imputation à laquelle elle se fie. La visibilité change plus les comportements qu'une politique.
2. **Étiqueter à la création et le faire respecter.** Exigez dans le pipeline des étiquettes de responsable, de service et d'environnement. Rapportez les dépenses non étiquetées et traquez-les.
3. **Commencer par le showback.** Partagez les coûts et laissez les équipes réagir avant d'introduire des facturations. N'allez au chargeback que si les bénéfices justifient l'effort et les disputes.
4. **Imputer selon des règles simples et convenues.** Choisissez des règles que les gens comprennent, documentez-les et revoyez-les chaque année. Ne passez pas des mois à chercher la perfection.
5. **Prévoir souvent et alerter sur les changements.** Pour les dépenses variables, actualisez les prévisions chaque mois ou chaque semaine et fixez des alertes budgétaires. Examinez rapidement les surprises.
6. **Agir sur les économies évidentes.** Supprimez les ressources inactives, ajustez les tailles et passez à des niveaux moins chers là où les niveaux de service le permettent. Consignez chaque économie et son arbitrage.
7. **S'engager là où la charge est stable.** Pour un usage stable, envisagez des remises d'engagement après analyse, et revoyez-les. Évitez de vous engager pour des charges incertaines.
8. **Utiliser les coûts unitaires.** Rapportez le coût par transaction, utilisateur ou résultat à côté des totaux. Discutez des changements avec les responsables de produit.
9. **Inclure l'usage de l'IA.** Mesurez le coût par cas d'usage d'IA, usage, hébergement et support compris. Fixez des limites et des alertes, et examinez si chaque usage vaut son coût.
10. **Peser le coût par rapport à la valeur et au risque.** Ne réduisez pas ce qui protège la fiabilité, la sécurité ou l'expérience utilisateur sans un choix conscient. Montrez les arbitrages au responsable.

## Questions à discuter avec votre équipe

**Que coûte l'exploitation de notre service le plus important, et quelle certitude avons-nous ?**
Demandez un chiffre et sa méthode. Attendez-vous à des chiffres approximatifs et à des éléments manquants. Demandez ensuite de choisir un service et de construire une meilleure estimation.

**Quels coûts cloud ne pouvons-nous pas attribuer à une équipe ou à un service ?**
Regardez les dépenses non étiquetées. Attendez-vous à une part significative. Demandez ensuite d'attribuer les plus gros éléments et de faire respecter l'étiquetage pour les nouveaux.

**Qu'avons-nous dépensé récemment que nous ne choisirions plus, et pourquoi ne l'avons-nous pas remarqué ?**
Cela révèle les lacunes de visibilité. Attendez-vous à des ressources inactives et des abonnements oubliés. Demandez ensuite de convenir d'une alerte et d'une revue mensuelle.

**Comment décidons-nous si une économie vaut le risque pour le service ?**
Demandez le dernier exemple. Attendez-vous à ce que personne ne l'ait pesé explicitement. Demandez ensuite de convenir de qui décide et de quelle information il a besoin.

**Que coûte notre usage de l'IA par cas d'usage, et qui est responsable du chiffre ?**
Demandez la ventilation de la facture. Attendez-vous à des chiffres agrégés ou inconnus. Demandez ensuite de désigner un responsable du coût pour chaque grand usage de l'IA et de fixer une limite.

**Comment la finance, l'ingénierie et les responsables de produit parlent-ils du coût aujourd'hui, et que pourrait-on améliorer ?**
Décrivez les réunions. Attendez-vous à ce qu'elles aient lieu séparément. Demandez ensuite d'organiser une courte revue conjointe mensuelle des principaux coûts.

## En pratique : un exemple de gestion des services

La plateforme de diffusion en continu d'un groupe audiovisuel national fonctionne sur un cloud public et coûte plusieurs fois ce qui avait été prévu. L'équipe financière reçoit une facture mensuelle unique et demande à l'ingénierie de « la réduire de 15 % ». Les ingénieurs disent que le trafic croît et que réduire la dépense mettrait le service en danger lors d'événements en direct.

Le responsable de la plateforme demande un mois pour construire de la visibilité. Il fait respecter les étiquettes par une règle de pipeline et, pour les ressources existantes, attribue des responsables avec l'aide de chaque équipe. La dépense non étiquetée passe de 38 % à 7 %. L'imputation en place, il produit un rapport de showback par équipe et par service, ainsi que le coût par heure diffusée. Le rapport montre que le coût total a augmenté de 30 % sur l'année, tandis que le coût par heure diffusée a légèrement baissé : la croissance, non le gaspillage, explique l'essentiel. Il montre aussi que les environnements de développement et de test, qui tournent toute la nuit et le week-end, représentent 18 % des dépenses.

L'équipe programme l'arrêt des environnements hors production en dehors des heures de travail, économisant environ les deux tiers de leur coût, et ajuste la taille d'un ensemble de bases de données surdimensionnées. Elle évite de toucher à la capacité des événements en direct. Pour les charges de base stables, elle achète des remises d'engagement après une analyse d'usage de trois mois. Une nouvelle fonction de sous-titrage assistée par l'IA est suivie séparément : son coût par heure de vidéo est plus élevé que prévu, et le responsable de produit décide de l'appliquer d'abord aux seules informations en direct.

Ce qui change : la finance et l'ingénierie discutent du coût par heure diffusée, et l'objectif devient un coût unitaire, non une réduction forfaitaire. Ce qui reste difficile : les données de coût arrivent avec un retard, si bien qu'un mauvais déploiement peut tourner pendant des jours avant d'apparaître ; l'imputation des coûts partagés de la plateforme est contestée par deux équipes ; et les engagements réduisent la souplesse si l'architecture change. Le responsable programme une revue trimestrielle des engagements et une courte note sur la manière dont les coûts partagés sont imputés.

## Quatre perspectives

### Équipes produit et de livraison

Sachez ce que coûte votre produit, étiquetez ce que vous créez et intégrez le coût aux choix de conception. Surveillez le coût par transaction et dites au responsable quand une fonctionnalité le change.

### Équipes de service et d'exploitation

Supprimez les ressources inactives, ajustez les tailles en veillant à la fiabilité et alertez sur les pics de coûts. Apportez les données d'exploitation aux conversations avec la finance.

### Direction et gouvernance

Demandez des coûts unitaires et de la valeur, pas seulement des totaux. Décidez de la part à centraliser. Financez le travail de visibilité et d'étiquetage et soutenez explicitement les arbitrages par rapport à la fiabilité.

### Clients et utilisateurs

Si l'on vous facture, vous devriez voir ce qui fait le coût et quels choix vous avez. Demandez le fondement de toute imputation et dites quels niveaux de service vous valorisez.

## Agilité, IA, automatisation et analytique

### Agilité

Financez des équipes stables, examinez régulièrement le coût avec les responsables de produit et traitez le coût comme une donnée de la priorisation. Attention : ne faites pas de la réduction des coûts le seul objectif ; les équipes couperont ce qui est facile, comme les tests et la résilience.

### IA

L'IA peut analyser les factures, trouver des anomalies et des ressources inactives, et prévoir les dépenses, sous relecture. Les charges d'IA ont besoin de leur propre suivi des coûts, de responsables et de limites. Attention : un assistant d'IA qui recommande des économies peut ignorer la fiabilité ou des contraintes contractuelles ; vérifiez chaque recommandation. Voir le Sujet 5.8 — Modèle opérationnel et compétences en IA.

### Automatisation

Automatisez l'application des étiquettes, l'arrêt des ressources inactives, les alertes budgétaires et les rapports, avec exceptions et journaux. Attention : un arrêt automatique peut supprimer ou arrêter quelque chose de nécessaire ; utilisez des calendriers et la confirmation du responsable pour les ressources importantes. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Utilisez le coût imputé, le coût unitaire, l'exactitude des prévisions, la part non étiquetée et l'utilisation des engagements. Attention : les chiffres de showback dépendent des règles d'imputation, et les économies d'optimisation sont souvent surestimées ; comparez avec les factures réelles. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Une facture globale.** Personne n'est responsable du coût. Étiquetez, imputez et rapportez par équipe.
- **La réduction des coûts comme objectif.** La fiabilité en pâtit. Associez le coût aux niveaux de service et à la valeur.
- **Des disputes d'imputation.** Les équipes se querellent sur les règles. Choisissez des règles simples et revoyez-les chaque année.
- **Une prévision par an.** Les dépenses variables surprennent. Prévoyez souvent et alertez.
- **S'engager trop tôt.** Les remises verrouillent la mauvaise capacité. Analysez d'abord l'usage.
- **Ignorer le coût de l'IA.** L'usage grandit sans être vu. Suivez par cas d'usage et fixez des limites.
- **Aucun lien avec la valeur.** Les dépenses sont coupées ou accrues sans raison. Utilisez coûts unitaires et résultats.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Visibilité | Facture totale | Coût par compte | Coût imputé par équipe et service avec étiquettes | Coût quasi en temps réel avec alertes d'anomalies | Coût et valeur visibles entre fournisseurs et prestataires |
| Imputation | Aucune | Approximative | Règles simples documentées | Règles examinées avec les responsables | Imputation intégrée à la planification et au financement |
| Optimisation | Au cas par cas | Quelques économies trouvées | Cycle d'optimisation régulier | Économies suivies par rapport au coût réel | Optimisation automatisée sous supervision |
| Lien avec la valeur | Non relié | Totaux discutés | Coûts unitaires rapportés | Coûts unitaires et résultats examinés avec les responsables | Coût, risque et valeur optimisés ensemble |

## Liste de contrôle

- [ ] Nous étiquetons les ressources avec responsable, service et environnement à la création.
- [ ] Les équipes voient le coût de ce qu'elles exploitent.
- [ ] Les règles d'imputation sont écrites et convenues.
- [ ] Les prévisions sont actualisées au moins chaque mois, avec des alertes budgétaires.
- [ ] Nous examinons régulièrement les ressources inactives et surdimensionnées.
- [ ] Nous rapportons les coûts unitaires à côté des totaux.
- [ ] L'usage et le coût de l'IA sont suivis par cas d'usage, avec des limites.
- [ ] Les économies sont pesées par rapport à la fiabilité et consignées.

## Invites d'IA

**Trouver des anomalies dans un rapport de coûts.**

```text
Here is a monthly cost report by service and team for the last six months: [paste data].
List changes of more than [percentage] between months, the services involved, and one question per change to ask the owner. Do not explain causes that are not in the data.
List what you are unsure of.
```

**Rédiger un résumé de showback pour une équipe.**

```text
Team: [name]. Here are their costs and usage for the month: [paste]. Prior month: [paste].
Write a one-page summary in plain language: total, change, top three cost drivers, unit cost if given, and two questions for the team. Do not recommend cuts.
List what you are unsure of.
```

**Estimer le coût d'un cas d'usage d'IA.**

```text
The use case: [describe]. Expected usage: [number of requests per day, average size]. Pricing we have been given: [paste].
Calculate a monthly cost range with low, expected, and high usage, showing each step and assumption. State what costs the figures leave out. Do not invent prices.
List what you are unsure of.
```

## Compétences d'IA

- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md) : à utiliser pour construire et actualiser des prévisions avec des hypothèses énoncées.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md) : à utiliser pour comparer coûts et bénéfices.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md) : à utiliser pour examiner les dépenses entre produits et services.
- [vendor-management](../../../../skills/vendor-management/SKILL.md) : à utiliser pour gérer les engagements et les renouvellements.

## Sources principales

- FinOps Foundation (finops.org) : le référentiel, les définitions et les cas de la communauté pour la gestion financière du cloud.
- J.R. Storment et Mike Fuller, *Cloud FinOps* (2e édition, 2023) : un guide de praticiens sur la pratique.
- PeopleCert, pages de certification ITIL : la description de la pratique de gestion financière par le propriétaire.
- Wikipedia, « Cost accounting » et « IT chargeback and showback » : des aperçus des idées comptables.

## Références

1. Cost accounting — Wikipedia — https://en.wikipedia.org/wiki/Cost_accounting
2. IT chargeback and showback — Wikipedia — https://en.wikipedia.org/wiki/IT_chargeback_and_showback
3. Cost allocation — Wikipedia — https://en.wikipedia.org/wiki/Cost_allocation
4. Activity-based costing — Wikipedia — https://en.wikipedia.org/wiki/Activity-based_costing
5. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Net present value — Wikipedia — https://en.wikipedia.org/wiki/Net_present_value
8. Capital expenditure — Wikipedia — https://en.wikipedia.org/wiki/Capital_expenditure
9. Operating expense — Wikipedia — https://en.wikipedia.org/wiki/Operating_expense
10. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
11. FinOps Foundation — Linux Foundation — https://www.finops.org
