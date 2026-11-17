# Lean et Kaizen

**Le lean est une façon de penser le travail qui élimine le gaspillage et se concentre sur la valeur que reçoit le client, et le kaizen est son habitude d'amélioration continue par petites touches, menée par ceux qui font le travail ; ensemble, ils fournissent une grande part de la réflexion pratique qui sous-tend la gestion agile des services.**

## Pourquoi c'est important

Les équipes de service portent beaucoup de travail qui n'aide pas les clients : des approbations en double, des rapports que personne ne lit, des transferts qui perdent de l'information, des tickets rouverts parce que la première réponse était à côté du sujet. Chaque élément paraît raisonnable isolément. Ensemble, ils consomment plus de temps que le travail utile et rendent chaque service plus lent et plus coûteux qu'il ne devrait l'être.

La pensée lean fournit un vocabulaire pour le voir. Elle demande ce que le client valorise, retrace les étapes qui le produisent et qualifie le reste de gaspillage à réduire. Le kaizen, mot japonais signifiant « changer pour le mieux », fournit la méthode pour le réduire : de nombreuses petites améliorations, faites tout le temps, par les personnes les plus proches du travail. Aucune refonte grandiose n'est nécessaire.

Ces deux idées viennent de l'industrie, surtout du système de production Toyota, et toutes deux ont été adaptées au logiciel et aux services. Elles sous-tendent les principes directeurs d'ITIL 4 « se concentrer sur la valeur », « rester simple et pratique » et « progresser par itérations avec rétroaction » (voir le Sujet 1.5 — Les principes directeurs d'ITIL). Ce sujet explique les idées clés, montre comment les appliquer au travail de service et montre comment elles peuvent être détournées.

## Concepts clés

**Production lean et système de production Toyota.** Le lean est une étiquette pour des méthodes de production dérivées du système de production Toyota, développé après la Seconde Guerre mondiale. Ses buts sont de livrer de la valeur au client, de réduire le gaspillage et d'améliorer le flux. Les articles de Wikipedia sur la production lean et sur le système de production Toyota en donnent le contexte. Le mot « lean » s'est répandu après des recherches sur la production automobile à la fin du XXe siècle.

**Valeur et gaspillage.** En termes lean, la valeur est ce que le client est prêt à payer ou remarquerait s'il venait à manquer. Le gaspillage, appelé « muda » en japonais, est toute activité qui consomme des ressources sans ajouter de valeur. Le lean nomme aussi « muri » (surcharge des personnes ou des équipements) et « mura » (irrégularité du travail). Ensemble, ces trois termes sont souvent appelés les trois M.

**Sept gaspillages, traduits pour le travail de service.** La liste classique des sept gaspillages dans l'industrie a des équivalents dans les services :

| Gaspillage classique | Dans le travail de service, par exemple |
|---|---|
| Transport | Passer un ticket entre de nombreuses files |
| Stock | Un backlog de demandes que personne ne traitera jamais |
| Mouvement | Chercher de l'information dans de nombreux systèmes |
| Attente | Une demande inactive en attendant une approbation |
| Surproduction | Des rapports et des fonctionnalités que personne n'a demandés |
| Sur-traitement | Des étapes d'approbation qui n'ajoutent aucune sécurité |
| Défauts | Des corrections erronées qui causent des tickets répétés |

De nombreux auteurs lean en ajoutent un huitième, le talent inutilisé des personnes. Dans le logiciel, Mary et Tom Poppendieck ont adapté la liste dans leurs travaux sur le développement logiciel lean, décrits par Wikipedia.

**Flux et tirage.** Le lean organise le travail pour qu'il circule sans heurt, et pour que le nouveau travail commence quand il y a de la capacité plutôt que d'être poussé. Voir le Sujet 2.3 — Flux et Kanban pour les outils.

**Respect des personnes.** Le lean chez Toyota repose sur deux piliers, l'amélioration continue et le respect des personnes. En pratique, cela signifie demander à ceux qui font le travail de trouver les problèmes et de proposer les corrections, plutôt que d'imposer des changements de l'extérieur. Les programmes lean qui suppriment des postes et appellent cela de l'amélioration détournent l'idée.

**Kaizen.** L'amélioration continue par de petits changements. Wikipedia décrit le kaizen comme une approche utilisée par tous dans une organisation, avec des changements assez petits pour être essayés rapidement. Un cycle kaizen typique emploie la boucle planifier–faire–vérifier–agir (PDCA) : planifier un changement, l'essayer, vérifier le résultat, puis l'adopter ou l'ajuster. Voir le Sujet 3.15 — Amélioration continue.

**Aller voir (gemba).** Le « gemba » est l'endroit où le travail se fait. La pratique lean demande aux managers et aux améliorateurs d'y aller, d'observer et de poser des questions, plutôt que de se fier aux rapports. Pour une équipe de service, le gemba peut être le centre de services, une file de tickets ou un appel avec un client.

**Outils de cause racine.** Le lean utilise des méthodes simples comme les « cinq pourquoi » (demander pourquoi à plusieurs reprises jusqu'à atteindre une cause sur laquelle on peut agir) et la résolution de problèmes A3 (un résumé structuré d'une page). Elles soutiennent la gestion des problèmes (voir le Sujet 3.3 — Gestion des problèmes). Elles demandent de la prudence : demander « pourquoi » cinq fois peut mener à une personne à blâmer plutôt qu'à une cause dans le système.

**À l'épreuve des erreurs.** Le poka-yoke est la pratique qui consiste à concevoir une étape de façon que les erreurs soient difficiles à commettre ou soient détectées aussitôt. Dans le travail de service, ce peut être un champ obligatoire, un modèle, un contrôle dans un pipeline ou une confirmation avant une action risquée. L'autonomation, parfois appelée jidoka, désigne l'arrêt d'un processus lorsqu'un défaut est détecté, ce qui a un équivalent moderne dans les pipelines qui s'arrêtent sur un test en échec.

**Arrêter la ligne.** Le cordon andon d'une usine Toyota permet à tout ouvrier d'arrêter la ligne lorsqu'il voit un problème. Transposé aux services, n'importe qui peut signaler un problème susceptible de nuire aux clients, et l'équipe traite le signal comme utile, non comme perturbateur.

**Lean et agilité.** La pensée lean a influencé le développement logiciel agile, et les deux se recoupent : petits lots, rétroaction, amélioration continue, respect des personnes. Ce guide met l'accent sur l'implication continue des parties prenantes, l'amélioration continue et la livraison continue de changements fonctionnels, que le lean soutient.

**Comment les angles s'articulent.** Le lean et le kaizen sont le moteur d'amélioration de l'angle agile. L'IA peut repérer dans les tickets des motifs qui suggèrent du gaspillage, sous revue. L'automatisation supprime les étapes manuelles répétées, après que vous les avez simplifiées. L'analytique montre où le travail attend et où surgissent les défauts.

## Bonnes pratiques

1. **Définir la valeur du point de vue du client.** Pour chaque service, écrivez ce que le client valorise. Marquez chaque étape du processus comme créatrice de valeur, nécessaire mais sans valeur ajoutée, ou gaspillage.
2. **Aller voir.** Passez du temps là où le travail se fait, observez de vraies demandes et parlez à ceux qui les traitent. Les rapports n'y suppléent pas.
3. **Éliminer le gaspillage avant d'automatiser.** Simplifiez d'abord le processus. Automatiser une étape inutile rend le gaspillage moins coûteux à produire, non plus petit.
4. **Laisser ceux qui sont les plus proches du travail l'améliorer.** Donnez aux équipes du temps, de l'autorité et un moyen simple d'essayer des changements. Examinez vite leurs idées et dites-leur ce qui s'est passé.
5. **Faire des améliorations petites et rapides.** Visez des changements qui peuvent être essayés en quelques jours. Menez-les comme des expériences avec une attente énoncée et une date de vérification.
6. **Corriger les causes, pas les personnes.** Quand quelque chose tourne mal, demandez ce qui, dans le système, l'a permis. Utilisez des méthodes de cause racine pour trouver les causes et évitez de vous arrêter à « erreur humaine ».
7. **Rendre les étapes répétées à l'épreuve des erreurs.** Ajoutez des champs obligatoires, des modèles, des contrôles et des confirmations là où des erreurs sont survenues plus d'une fois.
8. **Laisser chacun arrêter la ligne.** Créez un moyen sûr de soulever une préoccupation à propos d'un changement ou d'une réponse à incident. Remerciez la personne qui l'a soulevée.
9. **Tenir un tableau d'amélioration.** Montrez les idées d'amélioration, leur état et leurs résultats là où l'équipe et les parties prenantes peuvent les voir.
10. **Ne pas utiliser le lean comme couverture de réductions.** Si l'amélioration mène à des licenciements, les gens cessent de proposer des améliorations. Dites comment les gains de temps seront utilisés.

## Questions à discuter avec votre équipe

**Que valorisent nos clients dans ce service, et que faisons-nous qu'ils ne remarqueraient pas si cela s'arrêtait ?**
Cela sépare la valeur de l'activité. Les équipes trouvent souvent des rapports, des approbations ou des contrôles que personne n'utilise. Demandez le point de vue du client si possible. Demandez ensuite de choisir une activité à arrêter pendant un mois, avec un responsable qui surveille les effets négatifs.

**Lesquels des gaspillages classiques voyons-nous le plus souvent, et quel est un exemple récent de chacun ?**
Utilisez le tableau des sept gaspillages. Les gens nomment généralement l'attente et la reprise en premier. Demandez des tickets ou des incidents réels. Demandez ensuite de choisir le gaspillage qui coûte le plus de temps.

**Quand quelqu'un a-t-il proposé une amélioration pour la dernière fois, et qu'est-il arrivé à l'idée ?**
Cela teste le système d'amélioration. Vous entendrez peut-être que les idées s'évaporent ou que suggérer revient à se voir confier le travail. Demandez combien de temps il a fallu pour répondre. Demandez ensuite de convenir d'un délai de réponse et d'une liste visible.

**Quelles erreurs répétées pourrions-nous rendre impossibles, ou au moins évidentes ?**
Cherchez les erreurs qui reviennent sans cesse : une mauvaise catégorie, un champ manquant, une commande exécutée sur le mauvais système. Demandez à quoi ressemblerait une protection simple. Demandez ensuite de choisir une erreur et une protection à essayer.

**Où blâmons-nous des personnes alors que le système a permis l'erreur ?**
Cela sonde la culture. Les revues se terminent souvent par « soyez plus attentifs ». Demandez ce qui a rendu l'erreur probable et ce qui la rendrait plus difficile. Demandez ensuite de réécrire la conclusion d'une revue passée en termes de système.

**Comment l'IA nous aiderait-elle à trouver le gaspillage, et comment vérifierions-nous qu'elle a raison ?**
L'IA peut regrouper des tickets, trouver des questions répétées et suggérer des candidats à l'automatisation. Elle peut aussi inventer des motifs. Demandez qui vérifiera un échantillon de ce qu'elle trouve. Demandez ensuite de choisir un échantillon de tickets pour tester d'abord son regroupement à la main.

## En pratique : un exemple de gestion des services

Un organisme public de prestations exploite un centre de contact qui répond aux questions sur les demandes de dossiers. Le personnel dit passer ses journées à « courir après l'information ». La responsable d'équipe, qui a suivi une courte formation lean, décide d'aller sur le terrain. Elle s'assoit avec les agents pendant trois jours et consigne, pour 120 appels, le motif de l'appel et ce que l'agent a fait.

Elle constate que 40 des 120 appels étaient des rappels au sujet du même dossier, parce que le premier agent ne pouvait pas voir l'état conservé dans un autre système. 25 autres portaient sur un courrier dont les termes n'étaient pas compris des appelants. Les agents passaient une grande part de chaque appel à basculer entre quatre écrans.

L'équipe essaie trois petits changements en six semaines : elle réécrit le courrier confus avec quelques phrases simples et le teste auprès d'un échantillon de demandeurs, elle ajoute un écran montrant l'état du dossier tiré de l'autre système, et elle crée un guide d'une page pour les cinq questions les plus fréquentes. Les agents proposent un quatrième changement, un modèle de notes d'appel qui réduit les réexplications d'une équipe de quart à l'autre. Chacun est essayé pendant deux semaines et examiné lors d'une courte réunion hebdomadaire.

Ce qui change : les rappels diminuent dans l'échantillon que l'équipe suit, et les agents signalent moins de basculements. Ce qui reste difficile : l'écran d'état dépend d'une intégration détenue par un autre service, qui n'a pas encore accepté de la maintenir ; l'équipe n'a pas de bon moyen de mesurer si les appelants ont compris le courrier autre que de le leur demander ; et un responsable a demandé combien d'heures d'agents les changements ont économisées, ce qui tente de compter un chiffre. La responsable garde l'accent sur l'expérience des appelants et convient avec son responsable que les gains serviront à réduire le backlog, non à supprimer des postes.

## Quatre perspectives

### Équipes produit et de livraison

Définissez la valeur du point de vue de l'utilisateur et supprimez les fonctionnalités et les étapes qui ne la servent pas. Utilisez de petites expériences, rendez les étapes répétées à l'épreuve des erreurs et traitez les problèmes d'exploitation comme des signaux de changement de conception.

### Équipes de service et d'exploitation

Vous voyez le gaspillage tous les jours. Consignez-le, apportez des exemples au tableau d'amélioration et essayez de petites corrections. Utilisez l'arrêt de la ligne lorsqu'un changement ou une réponse risque de nuire aux clients.

### Direction et gouvernance

Allez voir. Demandez à l'équipe ce qu'elle changerait et donnez du temps pour le faire. Protégez ceux qui soulèvent des problèmes. Soyez explicite : le lean n'est pas un programme de réduction des coûts.

### Clients et utilisateurs

Vous savez ce que vous valorisez. Dites au fournisseur quelles étapes sont inutiles à vos yeux et lesquelles aident. Si vous donnez un retour, attendez-vous à savoir ce qui a changé.

## Agilité, IA, automatisation et analytique

### Agilité

Le lean et le kaizen apportent l'habitude d'amélioration : petits changements, rétroaction fréquente, parties prenantes impliquées et personnes à qui l'on fait confiance pour améliorer leur propre travail. Attention : les tableaux d'amélioration peuvent devenir un backlog de plus que personne n'examine ; gardez la liste courte et revue.

### IA

L'IA peut regrouper des tickets, trouver des questions répétées et suggérer où se situe le gaspillage. Chaque usage a besoin d'un responsable et d'une personne qui vérifie un échantillon. Attention : un résumé d'IA peut trouver des motifs qui ne sont que des artefacts de la façon dont les tickets ont été catégorisés ; vérifiez par rapport au travail. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez les étapes qui subsistent une fois le gaspillage éliminé et le processus stabilisé, comme l'orientation d'une demande ou la mise à jour d'un état, et conservez un journal et un moyen d'annuler. Attention : l'automatisation peut figer un mauvais processus et rendre le changement plus difficile ; examinez-la après chaque automatisation importante. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Mesurez où le travail attend, à quelle fréquence il est refait et combien de temps prennent les contacts répétés. Attention : compter les « heures économisées » invite à des affirmations gonflées et peut éroder la confiance ; suivez aussi l'expérience des clients et de l'équipe. Voir le Sujet 7.6 — Analytique des processus et des flux de valeur et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Le lean comme réduction des coûts.** Les gens cessent de proposer des améliorations. Dites comment les gains seront utilisés et tenez cette promesse.
- **L'amélioration à distance.** Des consultants repensent ce qu'ils n'ont pas observé. Allez voir et impliquez ceux qui font le travail.
- **Automatiser le gaspillage.** Un mauvais processus est scripté. Simplifiez d'abord.
- **Blâmer les personnes.** Les revues se terminent par « erreur humaine ». Cherchez ce qui, dans le système, l'a permis.
- **Les idées d'amélioration disparaissent.** Les gens cessent de suggérer. Répondez vite et montrez la liste.
- **De grands programmes d'amélioration.** Le changement prend un an et livre peu. Préférez de petites expériences avec vérification.
- **Compter les économies comme objectif.** Les chiffres sont gonflés. Mesurez les résultats pour les clients et l'expérience.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Valeur et gaspillage | Valeur supposée | Un peu de gaspillage identifié | Valeur et gaspillage définis par service | Gaspillage suivi et réduit | Réduction du gaspillage coordonnée entre services et fournisseurs |
| Habitude d'amélioration | Amélioration par la crise | Quelques promoteurs | Petites expériences régulières avec revue | Résultats mesurés et partagés | Amélioration intégrée aux équipes et entre partenaires |
| Résolution de problèmes | Blâme | Un peu d'analyse de cause racine | Méthode standard de cause racine utilisée | Causes suivies jusqu'à la prévention | Apprentissage partagé dans l'organisation |
| Protection contre les erreurs | Rare | Protections ponctuelles | Protections pour les erreurs répétées connues | Effet des protections mesuré | Protections intégrées partout aux outils et aux pipelines |

## Liste de contrôle

- [ ] Nous avons écrit ce que les clients de chaque service valorisent.
- [ ] Nous sommes allés là où le travail se fait et avons observé du travail réel.
- [ ] Nous avons classé les étapes comme créatrices de valeur, nécessaires ou gaspillage.
- [ ] Les idées d'amélioration sont visibles, reçoivent une réponse rapide et sont suivies.
- [ ] Nous essayons les changements comme de petites expériences avec une date de vérification.
- [ ] Les revues cherchent des causes dans le système, non des coupables.
- [ ] Nous avons ajouté des protections pour les erreurs répétées.
- [ ] Nous avons dit comment les gains d'amélioration seront utilisés.

## Invites d'IA

**Classer les étapes en valeur ou gaspillage pour revue.**

```text
Here are the steps in our process for [service], with who does each and roughly how long it takes: [paste steps].
Propose for each step whether it adds value to the customer, is necessary but not value-adding, or looks like waste, with a one-line reason and a question to confirm with the people who do it. Do not recommend removing anything.
List what you are unsure of.
```

**Trouver les questions répétées dans les tickets.**

```text
Below are ticket titles and first messages, with personal data removed: [paste sample].
Group them into up to eight themes, count each, and quote two short examples per theme exactly. Do not guess causes.
List what you are unsure of.
```

**Transformer une note de cause racine en questions sur le système.**

```text
Here is a summary of a recent failure: [paste summary].
Rewrite it as a list of questions about what in our system allowed the failure, avoiding blame, and suggest one guard to consider for each. Do not state causes that are not in the summary.
List what you are unsure of.
```

## Compétences d'IA

- [kaizen](../../../../skills/kaizen/SKILL.md) : à utiliser pour planifier et mener de petites expériences d'amélioration.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md) : à utiliser pour trouver des causes dans le système.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md) : à utiliser pour voir le gaspillage et les attentes dans le flux.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md) : à utiliser pour organiser les causes possibles en vue d'une discussion.

## Sources principales

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988) : le récit d'un fondateur sur les idées.
- Mary et Tom Poppendieck, *Lean Software Development: An Agile Toolkit* (2003) : adapte la pensée lean au logiciel.
- Wikipedia, « Lean manufacturing » et « Kaizen » : des résumés neutres avec des lectures complémentaires.
- Wikipedia, « Lean software development » : l'adaptation au travail logiciel.

## Références

1. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
2. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
3. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
4. Muda (Japanese term) — Wikipedia — https://en.wikipedia.org/wiki/Muda_(Japanese_term)
5. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
6. Gemba — Wikipedia — https://en.wikipedia.org/wiki/Gemba
7. Poka-yoke — Wikipedia — https://en.wikipedia.org/wiki/Poka-yoke
8. Andon (manufacturing) — Wikipedia — https://en.wikipedia.org/wiki/Andon_(manufacturing)
9. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
10. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
