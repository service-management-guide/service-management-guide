# Gestion des problèmes

**La gestion des problèmes trouve et supprime les causes des incidents, consigne les erreurs connues avec leurs contournements et mène des revues sans blâme dont les actions atterrissent dans le backlog d'amélioration ; c'est ainsi qu'une équipe de service cesse de réparer encore et encore la même défaillance.**

## Pourquoi c'est important

Une équipe qui traite bien les incidents peut tout de même être prise au piège d'une boucle. Le même type de défaillance revient chaque mois, les intervenants appliquent le même contournement et le coût s'accumule : temps d'utilisateurs perdu, personnel d'astreinte fatigué et sentiment grandissant que rien ne s'améliore jamais. La gestion des incidents rétablit le service ; elle n'empêche pas la récurrence.

La gestion des problèmes est la pratique qui le fait. Elle demande pourquoi les incidents surviennent et ce qui les empêcherait, et elle confie les réponses à quelqu'un qui peut agir. Elle tient aussi un registre de ce que l'on sait des défaillances pas encore corrigées, pour que le prochain intervenant ne parte pas de rien.

Pour les équipes agiles, la pratique s'intègre naturellement à l'amélioration continue : les constats deviennent des éléments du backlog, en concurrence avec les fonctionnalités sur une même liste. Le point faible n'est généralement pas la méthode mais la priorité. Corriger les causes perd souvent face au nouveau travail, sauf si quelqu'un rend visible le coût de la récurrence. Ce sujet explique la pratique, les principales méthodes pour trouver les causes et comment empêcher les constats de mourir dans un rapport. C'est un proche partenaire de la gestion des incidents (Sujet 3.2 — Gestion des incidents), de la gestion des connaissances (Sujet 3.9 — Gestion des connaissances) et de l'amélioration continue (Sujet 3.15 — Amélioration continue).

## Concepts clés

**Problème.** Dans ITIL 4, une cause, ou cause potentielle, d'un ou plusieurs incidents. Un problème existe avant qu'une correction n'existe ; on peut savoir qu'il cause des incidents ou seulement le soupçonner. Tous les incidents ne mènent pas à un enregistrement de problème.

**Erreur connue.** Un problème qui a été analysé mais pas résolu, souvent avec un contournement documenté. Wikipedia décrit le terme dans l'usage d'ITIL. Un enregistrement d'erreur connue permet au centre de services et aux intervenants de trouver rapidement le contournement et de voir l'état de la correction définitive.

**Contournement.** Un moyen de réduire ou d'éviter l'impact sans corriger la cause. Les contournements rendent la vie tolérable et peuvent devenir permanents par négligence. Un bon enregistrement énonce le contournement, qui peut l'appliquer et la date attendue d'une vraie correction, afin que le provisoire ne devienne pas discrètement permanent.

**Les activités.** L'identification des problèmes, qui trouve les problèmes à partir des tendances d'incidents, de la surveillance et des revues ; le contrôle des problèmes, qui analyse les causes et documente les erreurs connues ; et le contrôle des erreurs, qui gère les erreurs connues jusqu'à leur résolution ou leur acceptation. ITIL les décrit comme des parties d'une même pratique plutôt que comme des processus distincts.

**Proactive et réactive.** La gestion réactive des problèmes répond aux incidents qui ont eu lieu. La gestion proactive cherche des faiblesses avant qu'elles ne causent des incidents, par exemple en étudiant les quasi-accidents, les tendances d'alertes et les revues de changements.

**Analyse de cause racine.** Une famille de méthodes pour trouver la cause sous-jacente d'un problème. Wikipedia décrit l'analyse de cause racine et énumère des techniques courantes. Parmi les plus familières :

- *Cinq pourquoi* : demander « pourquoi » à plusieurs reprises jusqu'à atteindre une cause sur laquelle on peut agir.
- *Diagrammes de cause à effet (Ishikawa ou en arêtes de poisson)* : exposer les causes possibles par catégorie pour guider la discussion.
- *Analyse par arbre de défaillances* : remonter d'une défaillance à travers les combinaisons d'événements qui pourraient la causer.
- *Analyse de Pareto* : utiliser des comptages pour trouver les quelques causes derrière la plupart des incidents.
- *Analyse des modes de défaillance et de leurs effets (AMDE)* : examiner chaque partie d'un système pour voir comment elle pourrait défaillir et ce qui s'ensuivrait.

**Précautions sur les causes.** Les systèmes complexes ont rarement une cause racine unique. Le modèle du fromage suisse, décrit sur Wikipedia, représente les défaillances comme l'alignement de faiblesses dans plusieurs couches de défense. La recherche de « la » cause racine tend à s'arrêter à la première explication commode. Il est généralement plus utile de nommer les facteurs contributifs et de décider lesquels sont les moins chers et les plus rentables à changer.

**Culture sans blâme et culture juste.** Le blâme arrête l'apprentissage : les gens cachent leurs erreurs et les revues deviennent défensives. Une revue sans blâme examine ce qui, dans le système, rendait l'action raisonnable sur le moment. Une culture juste, décrite sur Wikipedia, distingue l'erreur honnête du comportement imprudent et traite chacun différemment. Les articles de Wikipedia sur l'erreur humaine et le biais rétrospectif expliquent pourquoi « quelqu'un aurait dû savoir » est rarement un constat utile.

**Revues post-incident (postmortems).** Une revue écrite après un incident important, couvrant ce qui s'est passé, l'impact, la chronologie, les facteurs contributifs, ce qui a bien fonctionné et les actions. Voir l'article de Wikipedia sur la documentation post-incident. Une bonne revue est lue et suivie d'effets ; une mauvaise est classée.

**Prioriser les problèmes.** Il y a toujours plus de problèmes que de capacité. Classez-les par impact, comme les heures d'utilisateurs perdues ou le coût, par fréquence et par faible coût de la correction. Montrez le coût de la récurrence. La dette technique, terme décrit sur Wikipedia, inclut les problèmes connus qui ont été différés ; la suivre rend le choix visible.

**Lien avec le changement.** Corriger un problème exige généralement un changement. Soumettez-le par la pratique de changement normale et veillez à ce que l'enregistrement du problème soit clos quand la correction est confirmée. Voir le Sujet 3.4 — Habilitation des changements.

**Lien avec les connaissances.** Une erreur connue et son contournement devraient figurer dans des articles de connaissances que le centre de services et le personnel d'astreinte peuvent trouver. Voir le Sujet 3.9 — Gestion des connaissances.

**Comment les angles s'articulent.** La gestion des problèmes est le point de rencontre de l'amélioration agile et de l'exploitation : les constats vont au backlog et y concourent ouvertement. L'IA peut regrouper des incidents, suggérer des problèmes candidats et rédiger des revues, sous relecture. L'automatisation peut détecter la récurrence et appliquer des contournements testés. L'analytique montre la récurrence et le coût.

## Bonnes pratiques

1. **Chercher des motifs, pas seulement des incidents isolés.** Examinez régulièrement les incidents pour y trouver des répétitions par service, composant, changement et moment. Ouvrez un problème quand un motif apparaît.
2. **Tenir une liste de problèmes visible.** Consignez chaque problème avec un responsable, les incidents qui lui sont liés, l'impact, le contournement et le plan. Rendez la liste facile à lire pour les intervenants.
3. **Documenter les erreurs connues avec leurs contournements.** Écrivez-les de façon qu'une personne d'astreinte fatiguée puisse les suivre, et reliez-les à la base de connaissances du centre de services.
4. **Choisir la méthode selon le problème.** Utilisez les cinq pourquoi pour les cas simples, une arête de poisson pour la discussion de groupe, des arbres de défaillances pour les défaillances complexes et des diagrammes de Pareto pour trouver où se concentrer. N'appliquez pas de méthodes lourdes à de petits problèmes.
5. **Nommer des facteurs contributifs, pas un seul coupable.** Listez toutes les conditions qui ont rendu la défaillance possible et évaluez lesquelles sont pratiques à changer. Évitez les constats qui se terminent par « erreur humaine ».
6. **Tenir des revues sans blâme.** Invitez les personnes impliquées, énoncez les règles et concentrez-vous sur le système. Partagez largement la revue écrite.
7. **Rendre les actions précises et attribuées.** Chaque action a une personne nommée, une date et un moyen de vérifier qu'elle est faite. Placez-la dans le backlog sur lequel l'équipe travaille réellement.
8. **Montrer le coût de l'inaction.** Totalisez les heures d'incident, l'impact sur les utilisateurs et la charge d'astreinte pour chaque problème, et utilisez les totaux dans la priorisation. Présentez-les à ceux qui fixent les priorités.
9. **Boucler la boucle.** Quand une correction est livrée, confirmez que les incidents cessent, mettez à jour l'article de connaissances et clôturez l'enregistrement. Si le problème subsiste, rouvrez-le.
10. **Examiner la pratique.** Vérifiez combien de problèmes sont ouverts, combien de temps ils durent et si les incidents répétés diminuent. Retirez les problèmes qui ne valent pas la peine d'être corrigés, avec une décision consignée.

## Questions à discuter avec votre équipe

**Quels incidents se sont produits trois fois ou plus au cours des six derniers mois, et pourquoi se produisent-ils encore ?**
Partez d'exemples réels. Attendez-vous à un mélange de « nous n'avons jamais eu le temps » et « nous ne connaissons pas la cause ». Demandez ce que chaque récurrence a coûté. Demandez ensuite de choisir un problème à corriger et un à accepter formellement.

**Comment décidons-nous quels problèmes corriger en premier, et qui décide ?**
La priorisation est souvent implicite. Vous entendrez peut-être que celui qui crie le plus fort l'emporte. Demandez quelles données nous utilisons. Demandez ensuite de convenir de critères et de montrer le coût des cinq premiers problèmes.

**La dernière fois que nous avons écrit « erreur humaine » dans une revue, qu'est-ce que le système avait permis ?**
Cela teste la pratique sans blâme. Prenez une revue passée et demandez ce qui a rendu l'action facile à accomplir. Cherchez des protections manquantes, une information peu claire ou la pression du temps. Demandez ensuite de réécrire le constat en termes de système.

**Où vivent les erreurs connues et les contournements, et une personne fatiguée peut-elle les trouver à 3 h du matin ?**
Les connaissances éparpillées dans des fils de discussion sont difficiles à trouver. Essayez d'en trouver une ensemble. Attendez-vous à des retards. Demandez ensuite de convenir d'un endroit unique et d'une habitude de nommage.

**Quelles actions de nos trois dernières revues sont encore ouvertes, et pourquoi ?**
Cela teste le suivi. Attendez-vous à une concurrence avec le travail sur les fonctionnalités. Demandez qui arbitre la priorité entre les deux. Demandez ensuite de convenir d'une part de capacité pour les actions sur les problèmes.

**Comment l'IA pourrait-elle nous aider à trouver des motifs dans les incidents, et comment vérifierions-nous qu'elle a raison ?**
L'IA peut regrouper des incidents et suggérer des causes. Elle peut aussi trouver de faux motifs. Demandez qui relit et comment. Demandez ensuite de comparer un regroupement par l'IA avec un regroupement manuel sur un échantillon.

## En pratique : un exemple de gestion des services

L'équipe de la plateforme d'apprentissage d'une université subit tous les quelques semaines un incident récurrent : les étudiants ne peuvent pas déposer leurs devoirs à l'approche d'une échéance. Le centre de services applique le même contournement, redémarrer un service de file d'attente, ce qui rétablit les dépôts en 15 minutes. À chaque fois, l'incident est clos et oublié.

La responsable du service propose de le traiter comme un problème. Elle rassemble les neuf derniers incidents et consigne l'heure de chacun, la charge à ce moment-là et les changements effectués la semaine précédente. L'analyse de Pareto n'aide pas, puisqu'il n'y a qu'une seule catégorie de cause, mais une chronologie montre que chaque incident s'est produit dans l'heure précédant une échéance, quand les dépôts explosent. Une discussion en arêtes de poisson avec les développeurs et l'exploitation liste des facteurs contributifs : le service de file d'attente a une limite de mémoire fixe ; aucune alerte ne prévient avant qu'elle soit pleine ; un changement récent a augmenté la taille de chaque dépôt ; et le plan de capacité n'incluait pas les pics d'échéance.

L'équipe nomme trois actions : relever la limite de mémoire et tester le nouveau pic, ajouter une alerte à 70 % de la capacité, et rédiger un article d'erreur connue pour que le centre de services voie le contournement et l'état de la correction. Elle ajoute aussi les calendriers d'échéances à la revue de capacité. La responsable du service montre à la direction que le problème a coûté environ 15 heures de perturbation pour les étudiants et neuf interruptions d'astreinte en trois mois, et le travail est planifié avant une fonctionnalité mineure.

Ce qui change : l'échéance suivante passe sans incident, et l'alerte se déclenche une fois à 72 %, laissant le temps d'agir. Ce qui reste difficile : le changement de limite était un palliatif, car le service de file d'attente doit être repensé pour des fichiers plus volumineux, ce qui concourt avec la feuille de route du semestre suivant ; les chiffres de coût sont des estimations tirées des durées de tickets ; et la revue n'a pas examiné si le changement de taille antérieur avait été correctement testé. La responsable consigne la refonte comme un problème encore ouvert, avec une date de revue.

## Quatre perspectives

### Équipes produit et de livraison

Traitez les actions sur les problèmes comme une partie de votre backlog. Corrigez les causes dans la conception, ajoutez des tests et des alertes qui détectent les défaillances connues, et contribuez aux revues. Ne confiez pas les problèmes à l'exploitation seule.

### Équipes de service et d'exploitation

Consignez les motifs et les erreurs connues, et apportez à la planification des données sur le coût et la récurrence. Gardez les contournements documentés et faciles à trouver. Menez des revues auxquelles les gens se sentent en sécurité pour participer.

### Direction et gouvernance

Demandez à voir les incidents récurrents et leur coût, et protégez la capacité pour les corriger. Cherchez la peur du blâme dans la façon dont les revues sont discutées. Suivez l'ancienneté des problèmes ouverts.

### Clients et utilisateurs

Vous devriez savoir quand un problème récurrent a une cause et une correction. Si vous signalez deux fois le même problème, dites-le. Demandez ce qui a été fait à ce sujet.

## Agilité, IA, automatisation et analytique

### Agilité

Placez les actions sur les problèmes dans le même backlog que les fonctionnalités et examinez-les avec les parties prenantes, en livrant continuellement de petites corrections. Attention : si le travail sur les problèmes est toujours repoussé derrière les fonctionnalités, le backlog grossit et les incidents continuent ; convenez d'une part protégée de capacité.

### IA

L'IA peut regrouper des incidents, les relier à des changements, suggérer des causes candidates et rédiger des revues à partir de chronologies, une personne vérifiant. Nommez un responsable pour chaque usage. Attention : l'IA peut inventer des causes ou exagérer des motifs ; traitez ses suggestions comme des hypothèses et testez-les sur des données. Voir le Sujet 5.2 — AIOps et le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Automatisez la détection de la récurrence, la création d'enregistrements de problèmes à partir de motifs et les contournements testés, avec journaux et limites. Attention : un contournement automatisé peut masquer un problème qui s'aggrave ; suivez la fréquence de son déclenchement et fixez un seuil d'escalade. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Regardez les taux de récurrence, l'ancienneté et le coût des problèmes ouverts et la part des incidents liés à des problèmes connus. Attention : les comptes de problèmes clos peuvent être détournés en les fermant tôt ou en les scindant ; vérifiez que les incidents diminuent réellement. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Réparer l'incident, jamais la cause.** Le contournement devient permanent. Ouvrez un problème quand un motif apparaît.
- **La chasse à la cause racine unique.** L'équipe s'arrête à une réponse commode. Listez les facteurs contributifs et choisissez lesquels changer.
- **Le blâme.** Les gens cachent leurs erreurs. Tenez des revues sans blâme et suivez les changements du système.
- **Des rapports sans responsables.** Les actions sont listées et non faites. Attribuez responsables, dates et revue.
- **Aucun coût montré.** Les problèmes perdent face aux fonctionnalités. Totalisez le coût de la récurrence.
- **Des erreurs connues difficiles à trouver.** Les intervenants repartent de zéro. Tenez un seul endroit consultable.
- **Clôturer sans vérifier.** La correction ne fonctionne pas. Confirmez que les incidents cessent avant de clore.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Identification | Seulement après les gros incidents | Quelques incidents répétés examinés | Une revue régulière des motifs ouvre des problèmes | Tendances et quasi-accidents utilisés de façon proactive | Problèmes trouvés automatiquement et entre services |
| Analyse | Conjectures | Méthodes informelles | Méthodes standard selon le type de problème | Qualité des méthodes examinée | Analyse partagée entre équipes et partenaires |
| Erreurs connues | Dans les têtes | Quelques-unes documentées | Consignées avec contournements dans un endroit accessible | Usage et exactitude examinés | Reliées à l'automatisation et aux connaissances entre services |
| Action et apprentissage | Blâme et actions perdues | Suivi occasionnel | Actions attribuées dans le backlog, revues sans blâme | Récurrence et achèvement des actions mesurés | Apprentissage partagé et appliqué dans l'organisation |

## Liste de contrôle

- [ ] Nous examinons régulièrement les incidents pour y trouver des répétitions.
- [ ] Nous tenons une liste de problèmes visible avec responsables et coûts.
- [ ] Les erreurs connues et les contournements sont documentés dans un endroit accessible.
- [ ] Les revues sont sans blâme et nomment des facteurs contributifs.
- [ ] Chaque action a un responsable, une date et un moyen de vérifier l'achèvement.
- [ ] Le travail sur les problèmes a une capacité protégée dans le backlog.
- [ ] Nous confirmons les corrections avant de clore les problèmes.
- [ ] L'IA utilisée pour l'analyse a un responsable et une revue par échantillon.

## Invites d'IA

**Trouver les incidents répétés.**

```text
Below is a list of incidents with dates, services, short descriptions, and resolutions, with names removed: [paste list].
Group those that look like repeats, state what they have in common, and list for each group two questions to investigate. Do not name causes. Mark groups you are unsure of.
List what you are unsure of.
```

**Transformer une revue en liste de facteurs contributifs.**

```text
Here is a postmortem draft: [paste, names removed].
List contributing factors in categories (technical, process, information, people and workload, suppliers), quoting the text for each, and list what the draft does not say about each. Do not assign blame or add causes.
List what you are unsure of.
```

**Estimer le coût de la récurrence.**

```text
For problem [name] we have these records: incident count, duration of each, users affected, on-call interruptions: [paste data].
Calculate total hours, hours per incident, and per month, showing every step. State what data is missing for a fair cost estimate. Do not guess missing numbers.
List what you are unsure of.
```

## Compétences d'IA

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md) : à utiliser pour analyser les causes avec une méthode adaptée.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md) : à utiliser pour organiser les causes possibles lors d'une discussion de groupe.
- [postmortem](../../../../skills/postmortem/SKILL.md) : à utiliser pour rédiger et suivre une revue sans blâme.
- [cause-and-effect-diagram](../../../../skills/cause-and-effect-diagram/SKILL.md) : à utiliser pour cartographier les causes et les effets.
- [risks-actions-issues-decisions](../../../../skills/risks-actions-issues-decisions/SKILL.md) : à utiliser pour suivre les actions jusqu'à leur achèvement.

## Sources principales

- Sidney Dekker, *The Field Guide to Understanding "Human Error"* : sur les raisons pour lesquelles blâmer les individus échoue et ce qu'il faut examiner à la place.
- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitre sur la culture des revues post-incident, gratuit sur sre.google.
- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des problèmes par le propriétaire.
- Wikipedia, « Root-cause analysis » et « Postmortem documentation » : des aperçus des méthodes et des documents.

## Références

1. Root-cause analysis — Wikipedia — https://en.wikipedia.org/wiki/Root-cause_analysis
2. Known error — Wikipedia — https://en.wikipedia.org/wiki/Known_error
3. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
4. Ishikawa diagram — Wikipedia — https://en.wikipedia.org/wiki/Ishikawa_diagram
5. Fault tree analysis — Wikipedia — https://en.wikipedia.org/wiki/Fault_tree_analysis
6. Failure mode and effects analysis — Wikipedia — https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
7. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
8. Swiss cheese model — Wikipedia — https://en.wikipedia.org/wiki/Swiss_cheese_model
9. Just culture — Wikipedia — https://en.wikipedia.org/wiki/Just_culture
10. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
11. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
