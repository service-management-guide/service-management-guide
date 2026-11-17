# Analytique des processus et des flux de valeur

**L'analytique des processus et des flux de valeur mesure comment le travail circule réellement : combien de temps prend chaque étape, combien de temps le travail attend, où il boucle et où il s'accumule ; elle fonctionne quand elle repose sur des données d'événements horodatées et de vrais suivis, vise la contrainte et est vérifiée auprès de ceux qui font le travail.**

## Pourquoi c'est important

Tout le monde a une image de la façon dont le travail circule, et elle est généralement fausse. Les documents de processus montrent un chemin net de la demande à l'achèvement. La réalité comporte des détours, des boucles, des transferts qui ne figurent dans aucun schéma et de longues périodes où le travail reste intact. Une demande qui, d'après le document, prend trois étapes peut en traverser onze et passer 90 % de sa vie à attendre.

L'analytique des processus et des flux de valeur remplace l'image par des preuves. Elle part des données que les systèmes enregistrent déjà, comme les états des tickets, les horodatages et les affectations, et de l'observation du travail réel. Elle reconstitue les itinéraires que suit le travail, mesure le temps à chaque étape et sépare le temps de travail du temps d'attente. Wikipedia décrit l'exploration de processus (process mining) comme les techniques d'analyse de journaux d'événements pour découvrir, surveiller et améliorer des processus réels.

Les résultats surprennent souvent. Le goulot d'étranglement n'est pas là où les gens le pensaient. L'étape dont tout le monde se plaint est rapide, et le retard se situe dans le transfert qui la précède. Un tiers des demandes reviennent en arrière pour informations manquantes. Ces constats mènent à des améliorations précises et petites, ce qui fait de cette analyse l'une des plus utiles en gestion des services. Ce sujet décrit les principales techniques, les données nécessaires et les précautions. Il s'appuie sur la chaîne de valeur (Sujet 1.7 — La chaîne de valeur des services), le flux et Kanban (Sujet 2.3 — Flux et Kanban), la pensée lean (Sujet 2.4 — Lean et Kaizen) et l'analytique (Sujet 7.1 — Analytique pour la gestion des services). Les fondements des données (Sujet 7.2 — Fondements et gouvernance des données) comptent beaucoup ici, car les horodatages et les changements d'état sont la matière première.

## Concepts clés

**Flux de valeur.** La séquence d'étapes qu'une organisation accomplit pour livrer un produit ou un service à un client, comme « résoudre un incident majeur » ou « accueillir un nouvel employé ». Wikipedia décrit les flux de valeur. Un flux de valeur traverse les activités de la chaîne de valeur dans son propre ordre. Voir le Sujet 1.7 — La chaîne de valeur des services.

**Cartographie des flux de valeur.** Une technique lean qui dessine chaque étape d'un flux de valeur avec son temps de traitement et l'attente entre les étapes, de sorte que le temps passé à ajouter de la valeur puisse être comparé au temps total écoulé. Wikipedia la décrit. Une carte est souvent dessinée en parcourant le processus avec les personnes concernées et en notant les temps réels.

**Exploration de processus (process mining).** Utiliser des données d'événements pour découvrir comment les processus fonctionnent réellement. Chaque événement a un identifiant de cas (comme un numéro de ticket), une activité (comme « affecté » ou « résolu ») et un horodatage. À partir de là, des techniques reconstituent le chemin de chaque cas, montrent les itinéraires les plus courants, trouvent les variantes et mesurent les temps. Wikipedia décrit l'exploration de processus et la découverte de processus. Elle complète la cartographie : l'exploration montre ce qui s'est passé sur des milliers de cas, la cartographie montre pourquoi sur quelques-uns.

**Données d'événements.** L'analyse de processus dépend de bonnes données d'événements : un identifiant de cas stable, des noms d'activités clairs et des horodatages exacts. Les systèmes de tickets et de flux de travail stockent généralement les changements d'état avec l'heure. Vérifiez que les données reflètent ce qui s'est passé. Un ticket marqué « en attente » ne signifie pas forcément en attente du client ; un état peut être fixé en bloc à la fin. Voir le Sujet 7.2 — Fondements et gouvernance des données.

**Délai total, temps de cycle et temps d'attente.** Le délai total (lead time) est le temps écoulé de la demande à l'achèvement, tel que le client le vit. Le temps de cycle est le temps depuis le début du travail. Wikipedia décrit les deux. Le temps d'attente, le temps passé dans des files ou inactif entre les étapes, est généralement la plus grande part. Définissez précisément chaque point de départ et d'arrivée. La relation entre travail en cours, débit et délai total est donnée par la loi de Little, décrite sur Wikipedia. Voir le Sujet 2.3 — Flux et Kanban.

**Efficacité du flux.** La part du délai total pendant laquelle le travail est activement traité. Dans de nombreux processus de connaissance et de service, l'efficacité du flux est inférieure à 20 %, ce qui signifie que la plus grande partie du temps est de l'attente. Cette mesure attire l'attention sur le retard plutôt que sur l'effort. Vérifiez les chiffres en échantillonnant des cas réels, car ils dépendent de la manière dont le temps actif est enregistré.

**Goulots d'étranglement et contraintes.** Un goulot d'étranglement est une étape qui limite le débit de l'ensemble du processus. La théorie des contraintes, que décrit Wikipedia, soutient qu'améliorer autre chose que la contrainte n'améliore pas le flux global, et que la contrainte doit être identifiée, exploitée, puis allégée. Wikipedia décrit les goulots d'étranglement en production. En analytique, cherchez les étapes où le travail s'accumule, où le temps d'attente est le plus long ou où l'utilisation est proche du plein.

**Variantes et reprises.** Le même processus se déroule en de nombreuses variantes : le chemin heureux, les chemins avec approbation, les chemins avec boucles. Wikipedia décrit la reprise (rework), la répétition de travail due à des erreurs ou à des informations manquantes. Compter la fréquence à laquelle les cas reviennent en arrière, et pourquoi, trouve le gaspillage. Une boucle vers le client pour informations manquantes dans 30 % des demandes pointe vers un problème de formulaire.

**Transferts.** Chaque transfert entre équipes ajoute de l'attente et une chance de perdre de l'information. Comptez les transferts par cas et le temps passé après chacun. Une vue en couloirs (swimlane), décrite sur Wikipedia, montre qui traite quoi. Les chemins à nombreux transferts sont des candidats à la refonte. Voir le Sujet 3.1 — Centre de services.

**Variation.** Les moyennes masquent la dispersion. Les cas qui prennent dix fois plus de temps que le cas typique causent la douleur, et ils ont des causes qui valent la peine d'être trouvées. Wikipedia décrit la dispersion statistique et la maîtrise statistique des processus, qui séparent la variation ordinaire des signaux. Rapportez des distributions et des percentiles, pas seulement des moyennes. Voir le Sujet 7.3 — Mesure et reporting.

**Le principe de Pareto.** Un petit nombre de causes produisent souvent l'essentiel de l'effet, un motif que Wikipedia décrit comme le principe de Pareto. Appliqué aux retards, quelques variantes ou quelques étapes expliquent souvent l'essentiel du temps perdu. Commencez par là.

**Files d'attente.** Quand l'utilisation approche la capacité, l'attente croît brutalement, comme le montre la théorie des files d'attente. Wikipedia la décrit. Une équipe « occupée à 100 % » aura de longues files. Laissez du mou, surtout pour le travail qui arrive au hasard. Voir le Sujet 3.11 — Disponibilité, capacité et performance.

**Conformité.** L'exploration de processus peut vérifier si les cas réels suivent le processus voulu, par exemple si les approbations requises ont eu lieu. Elle aide l'audit et le contrôle, avec la précaution que les données montrent ce qui a été enregistré, pas forcément ce qui a été fait. Voir le Sujet 3.4 — Habilitation des changements.

**Parcourir le processus.** Les données trouvent où ; les gens expliquent pourquoi. Observez le travail, parlez à ceux qui le font et regardez un échantillon de cas réels. La pratique lean appelle cela aller là où le travail se fait, le gemba. Voir le Sujet 2.4 — Lean et Kaizen.

**Vie privée et équité.** Les données de processus peuvent montrer les habitudes de travail d'individus. Utilisez-les pour comprendre le système, agrégez par équipe ou par étape et ne les utilisez pas pour surveiller ou classer des individus. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Comment les angles s'articulent.** L'analytique des processus est le versant données de l'amélioration agile et de la pensée lean : trouver la contrainte, essayer un petit changement, mesurer à nouveau. L'IA peut aider à découvrir des motifs et à rédiger des cartes, sous relecture. L'automatisation agit sur les constats, comme supprimer un transfert. L'analytique fournit les preuves.

## Bonnes pratiques

1. **Choisir un flux de valeur qui compte.** Prenez-en un qui importe aux clients et qui est lent ou incohérent, comme les demandes d'accès ou le traitement des incidents majeurs. Définissez son début et sa fin du point de vue du client.
2. **Vérifier d'abord les données d'événements.** Confirmez que vous avez des identifiants de cas, des noms d'activités et des horodatages fiables. Échantillonnez des cas par rapport à la réalité et notez les états qui ne signifient pas ce qu'ils disent.
3. **Cartographier le flux actuel à partir des données et des personnes.** Reconstituez les itinéraires par exploration de processus lorsque vous le pouvez, et parcourez quelques cas réels avec ceux qui les traitent. Comparez les deux vues.
4. **Séparer le travail de l'attente.** Pour chaque étape, mesurez le temps actif et le temps d'attente. Calculez l'efficacité du flux et notez les plus longues attentes.
5. **Regarder les variantes et les boucles.** Comptez les principales variantes, la part de cas qui reviennent en arrière et les raisons. Examinez individuellement les cas les plus longs.
6. **Trouver la contrainte.** Identifiez l'étape qui limite le débit et concentrez l'amélioration là. N'optimisez pas d'abord les autres étapes.
7. **Compter les transferts et l'information perdue.** Mesurez les transferts par cas et le retard après chacun, et interrogez le côté récepteur sur ce qui lui manque.
8. **Utiliser les distributions et échantillonner des cas réels.** Rapportez médianes et percentiles et lisez un échantillon de la traîne. Vérifiez à la main les constats automatisés.
9. **Changer une chose et mesurer à nouveau.** Faites un petit changement à la contrainte, consignez la référence de départ et comparez après une période définie, en notant les autres changements survenus pendant ce temps.
10. **Utiliser les données pour comprendre le système.** Agrégez par équipe et par étape, ne classez pas les individus et partagez les constats avec ceux qui font le travail.

## Questions à discuter avec votre équipe

**Où une demande typique attend-elle le plus longtemps, et qui attend-elle ?**
Utilisez des données ou un cas suivi. Attendez-vous aux approbations, aux files d'attente et à l'attente du client. Demandez ensuite de choisir une attente et de demander qui pourrait la raccourcir.

**Combien d'itinéraires différents les demandes empruntent-elles dans notre processus, et sont-ils tous nécessaires ?**
Montrez les variantes. Attendez-vous à plus que ce que quiconque pensait. Demandez ensuite de choisir la moins utile et de se demander si elle peut être supprimée.

**Quelle part de nos cas reviennent en arrière pour informations manquantes, et que manque-t-il ?**
Comptez-les. Attendez-vous à un chiffre élevé sur certains types de demandes. Demandez ensuite de changer le formulaire ou la première réponse pour le demander plus tôt.

**Où les transferts perdent-ils de l'information, et que voudrait avoir l'équipe réceptrice ?**
Interrogez l'équipe réceptrice. Attendez-vous aux mêmes quelques éléments. Demandez ensuite de les ajouter au transfert.

**Quelle étape est la contrainte, et que se passerait-il pour le flux global si nous doublions sa vitesse ?**
Réfléchissez-y avec les données. Attendez-vous à ce que les gens nomment l'étape la plus bruyante. Demandez ensuite de tester la réponse par rapport aux temps de file et d'attente.

**Comment l'IA pourrait-elle nous aider à trouver des motifs dans nos données de processus, et comment vérifierions-nous qu'elle a raison ?**
L'IA peut résumer des variantes et suggérer des causes. Elle peut aussi surinterpréter du bruit. Demandez qui relit. Demandez ensuite de comparer un résumé de l'IA avec une analyse manuelle d'un échantillon.

## En pratique : un exemple de gestion des services

Le service informatique d'une agence régionale de santé met en moyenne 19 jours ouvrés à accorder à des cliniciens l'accès à une nouvelle application clinique. Les cliniciens se plaignent ; le rapport du service montre chaque tâche terminée dans son objectif. La responsable des services décide de suivre le flux.

Elle extrait les données d'événements de 600 demandes d'accès récentes : changements d'état et horodatages du système de tickets. Un outil d'exploration de processus reconstitue les chemins. Il trouve neuf variantes, dont trois couvrent 80 % des cas. Le temps de travail est en moyenne d'environ 2,5 jours. Le reste est de l'attente : de l'approbation du responsable (4 jours en moyenne), de la validation d'un référent clinique (5 jours en moyenne), de la prise en charge de la tâche par l'équipe des applications (3 jours) et de la fourniture par le demandeur d'un certificat de formation manquant (4 jours, dans 35 % des cas). L'efficacité du flux est d'environ 13 %.

Elle parcourt cinq cas avec les personnes concernées. Elle constate que l'approbation du référent clinique est pour la plupart des rôles une formalité : sur les 200 derniers, aucune n'avait été refusée. Elle constate aussi que la boucle du certificat vient de ce que le formulaire ne le demande pas d'emblée, et que l'équipe des applications regroupe les demandes le jeudi.

L'équipe apporte trois changements. Elle supprime l'approbation du référent clinique pour les rôles à accès standard, ajoute le certificat au formulaire et fait passer l'équipe des applications à une file traitée quotidiennement. La responsable consigne la référence de départ et suit 100 cas après le changement. Le délai moyen tombe à 8 jours, le 90e percentile passant de 31 à 15 jours. Elle lit dix des cas les plus longs et constate que la plupart concernent des rôles inhabituels.

Ce qui change : les cliniciens obtiennent l'accès plus vite, et le rapport montre désormais le délai total tel que le client le vit. Ce qui reste difficile : la suppression de l'approbation exige l'accord du responsable de la sécurité clinique et se fait à titre d'essai ; les données ne peuvent pas séparer l'attente du client de l'attente causée par l'équipe, parce que l'état « en attente » sert aux deux ; et on a demandé à la responsable de produire des analyses de la vitesse individuelle des techniciens, ce qu'elle refuse. Elle demande au responsable de l'outil d'ajouter un état distinct pour l'attente du client.

## Quatre perspectives

### Équipes produit et de livraison

Faites de votre pipeline de livraison un flux de valeur et suivez les changements de l'idée à la production. Fournissez des événements et des horodatages qui rendent l'analyse possible, et utilisez les constats pour supprimer les attentes que vous causez.

### Équipes de service et d'exploitation

Sachez où le travail attend et pourquoi. Utilisez des états cohérents, consignez les raisons d'attente et participez au suivi de cas réels. Soulevez les problèmes de transfert auprès du responsable du flux.

### Direction et gouvernance

Demandez le délai total tel que le client le voit, l'efficacité du flux et la contrainte, pas seulement les durées des tâches. Soutenez les changements à la contrainte. N'utilisez pas les données de processus pour classer des individus.

### Clients et utilisateurs

Vous vivez le flux entier, attente comprise. Dites combien de temps vous avez attendu et quoi, et répondez promptement quand le fournisseur vous demande des informations.

## Agilité, IA, automatisation et analytique

### Agilité

Utilisez l'analyse pour choisir la prochaine petite amélioration à la contrainte, faites-la et mesurez à nouveau, avec les parties prenantes impliquées. Attention : ne menez pas un long programme de cartographie avant de rien changer ; suivez un flux, changez une chose et apprenez.

### IA

L'IA peut découvrir des variantes de processus, résumer des suivis et suggérer des causes candidates, avec un responsable et des vérifications. Attention : des résumés de données de processus par l'IA peuvent présenter du bruit comme un motif ; vérifiez par rapport à des cas échantillonnés et aux personnes concernées. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez les étapes que l'analyse montre stables et répétées, et supprimez les transferts sans valeur, avec journaux et solutions de repli. Attention : automatiser une étape qui n'est pas la contrainte ne raccourcit pas le délai total ; vérifiez où est l'attente. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Ce sujet est l'analytique du flux : données d'événements, délais et temps d'attente, variantes, boucles et contraintes. Attention : les horodatages reflètent la façon dont les états sont utilisés, et les mesures de vitesse d'étape peuvent être détournées en déplaçant des tickets entre états ; vérifiez avec des cas réels. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Croire le processus documenté.** Il diffère de la réalité. Utilisez des données d'événements et des cas réels.
- **Des données d'événements sales.** États et heures induisent en erreur. Vérifiez et corrigez d'abord les données.
- **Optimiser la mauvaise étape.** L'effort va là où c'est bruyant. Trouvez la contrainte.
- **Seulement des moyennes.** Les longs cas se cachent. Utilisez des percentiles et lisez la traîne.
- **Ignorer l'attente.** L'effort est mesuré, le retard non. Séparez le temps de travail et le temps d'attente.
- **Des données sans les gens.** Les constats manquent de causes. Parcourez des cas réels avec ceux qui font le travail.
- **La surveillance individuelle.** La confiance s'effondre. Analysez le système.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Données | Comptages de tâches | Quelques horodatages | États et horodatages cohérents pour les flux clés | Qualité des données d'événements surveillée | Données d'événements intégrées entre outils et fournisseurs |
| Analyse | Processus documenté | Un flux suivi | Analyse courante des flux clés : délai total, attentes, variantes | Contraintes identifiées et suivies | Analyse automatisée et continue avec revue humaine |
| Amélioration | Au cas par cas | Corrections occasionnelles | Changements à la contrainte, mesurés | Améliorations liées aux résultats de flux | Amélioration coordonnée entre flux et partenaires |
| Éthique | Floue | Conscience | Analyse au niveau de l'équipe, pas de classement individuel | Usage examiné avec le personnel | Vie privée intégrée à l'analytique |

## Liste de contrôle

- [ ] Nous avons choisi un flux de valeur pertinent pour les clients, avec un début et une fin clairs.
- [ ] Nous avons vérifié les données d'événements : identifiants de cas, noms d'activités et horodatages.
- [ ] Nous avons cartographié le flux actuel à partir des données et en parcourant des cas réels.
- [ ] Nous avons mesuré le temps de travail et le temps d'attente, et l'efficacité du flux.
- [ ] Nous avons compté les variantes, les boucles et les transferts.
- [ ] Nous avons identifié la contrainte et concentré le changement là.
- [ ] Nous avons rapporté des percentiles et lu un échantillon de la traîne.
- [ ] Nous analysons au niveau de l'équipe et de l'étape, non de l'individu.

## Invites d'IA

**Résumer les variantes à partir des chemins de cas.**

```text
Here is a list of case paths (sequence of activities) with counts, and median time for each path, identifiers removed: [paste].
Describe the main variants, the share of cases each covers, where loops occur, and what the longest paths have in common. Do not infer causes.
List what you are unsure of.
```

**Trouver l'attente dans un suivi.**

```text
Here are the events of five cases with timestamps and the person or team handling each: [paste, names removed].
For each case, compute time between events, identify the three longest waits, and say whether the data suggest waiting on a team, on a customer, or unclear. Do not guess where the data are silent.
List what you are unsure of.
```

**Préparer des questions pour un parcours du processus.**

```text
We are about to walk through a value stream with the people who do the work. Here is what the data show: [paste summary].
Write ten open questions to ask on the walk, aimed at why waits and loops occur. Avoid blame and do not suggest answers.
List what you are unsure of.
```

## Compétences d'IA

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md) : à utiliser pour cartographier et mesurer un flux de valeur.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les étapes, les transferts et les attentes.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md) : à utiliser pour examiner la variation et l'incertitude.
- [kaizen](../../../../skills/kaizen/SKILL.md) : à utiliser pour transformer les constats en petites améliorations.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md) : à utiliser pour dessiner en texte les flux actuels et cibles.

## Sources principales

- Wil van der Aalst, *Process Mining: Data Science in Action* (2e édition, 2016) : la référence principale sur l'exploration de processus.
- Mike Rother et John Shook, *Learning to See* (1999) : le guide classique de la cartographie des flux de valeur.
- Eliyahu Goldratt, *The Goal* (1984) : un roman qui a introduit la théorie des contraintes.
- Wikipedia, « Process mining » et « Value-stream mapping » : des aperçus des techniques.

## Références

1. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
2. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
3. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
4. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
5. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
6. Cycle time — Wikipedia — https://en.wikipedia.org/wiki/Cycle_time
7. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
8. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
9. Rework — Wikipedia — https://en.wikipedia.org/wiki/Rework
10. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
11. Statistical process control — Wikipedia — https://en.wikipedia.org/wiki/Statistical_process_control
12. Swimlane — Wikipedia — https://en.wikipedia.org/wiki/Swimlane
