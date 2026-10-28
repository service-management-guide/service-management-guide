# Livraison continue

**La livraison continue est la pratique qui consiste à garder le logiciel en permanence dans un état livrable et à mettre souvent de petits changements en production par des étapes automatisées de construction, de test et de déploiement ; elle rend le changement plus sûr en le rendant plus petit, et c'est ainsi que les équipes agiles font évoluer des services en production sans attendre une mise en production trimestrielle.**

## Pourquoi c'est important

Le changement est la principale source de risque d'un service en production, et la réaction habituelle consiste à le ralentir : moins de mises en production, plus d'approbations, des cycles de test plus longs. Chacune de ces mesures rend la mise en production suivante plus grosse, donc plus risquée, ce qui appelle encore plus de prudence. Les équipes se retrouvent à livrer une fois par trimestre, avec un long week-end de travail angoissé.

La livraison continue inverse ce cycle. Si un changement est petit, ses effets sont faciles à comprendre, faciles à tester et faciles à annuler. S'il est mis en production par un pipeline automatisé, les mêmes contrôles s'exécutent à chaque fois, dans le même ordre, avec une trace. Si la mise en production peut se faire à tout moment, l'équipe peut répondre à un service défaillant ou au besoin d'un client en heures plutôt qu'en semaines.

Pour la gestion des services, la livraison continue compte parce qu'elle change l'allure du contrôle. Une pratique d'habilitation des changements bâtie autour d'une réunion de comité hebdomadaire ne peut pas suivre 20 mises en production par jour, et n'en a pas besoin si le pipeline porte les contrôles (voir le Sujet 3.4 — Habilitation des changements et le Sujet 6.4 — Pipelines et changements automatisés). Ce sujet explique la pratique, le vocabulaire et la manière de l'introduire sans perdre le contrôle.

## Concepts clés

**Intégration continue.** Les développeurs fusionnent fréquemment leur travail dans une ligne principale partagée, au moins une fois par jour, et chaque fusion déclenche une construction et une exécution de tests automatisées. Le but est de trouver les problèmes d'intégration lorsqu'ils sont petits. L'article de Wikipedia sur l'intégration continue décrit la pratique et ses origines dans l'extreme programming.

**Livraison continue.** Les builds qui passent les contrôles automatisés sont toujours dans un état qui pourrait être mis en production. La décision de mettre en production est une décision métier, prise quand elle convient, et non un obstacle technique. Dans la formulation standard, la mise en production tient en un clic et comporte peu de risque.

**Déploiement continu.** Une étape supplémentaire dans laquelle chaque changement qui passe le pipeline est mis en production automatiquement, sans approbation manuelle. C'est un choix, non une exigence de la livraison continue, et il convient mieux à certains services et à certains risques qu'à d'autres.

**Le pipeline de déploiement.** Une séquence automatisée d'étapes : construction, tests unitaires, tests d'intégration, contrôles de sécurité, déploiement dans un environnement de test, tests d'acceptation et mise en production. Chaque étape laisse passer le changement ou l'arrête. Le pipeline est à la fois un mécanisme de sécurité et une source de preuves, car il consigne ce qui a été vérifié.

**Petits lots.** Mettre en production de petits changements signifie que chacun touche peu de choses. La loi de Little, issue de la théorie des files d'attente et décrite par Wikipedia, explique une partie de l'effet : à débit de travail égal, des lots plus petits signifient des files plus courtes et des délais plus brefs. Les petits lots facilitent aussi la remontée d'une anomalie jusqu'à sa cause.

**Séparer le déploiement de la mise en production.** Le déploiement place du code sur les serveurs de production. La mise en production rend une fonctionnalité disponible aux utilisateurs. Des techniques comme les interrupteurs de fonctionnalité permettent de déployer du code désactivé et de l'activer plus tard, d'abord pour certains utilisateurs. Cela réduit le risque de chaque étape. Voir le Sujet 3.5 — Gestion des mises en production et des déploiements.

**Livraison progressive.** Mettre en production d'abord auprès d'une petite part des utilisateurs, observer, puis élargir graduellement. Les variantes comprennent les mises en production canari, où un petit groupe reçoit le changement, et le déploiement bleu-vert, où deux environnements de production alternent afin qu'une bascule puisse revenir en arrière rapidement.

**Gestion de versions et développement sur tronc commun.** Tous les changements, y compris la configuration et les définitions d'infrastructure, vivent dans la gestion de versions. De nombreuses équipes travaillent sur une seule branche principale avec des branches de courte durée, ce qui maintient une intégration fréquente. Voir le Sujet 6.3 — Infrastructure as Code et GitOps.

**Rétroaction rapide et rétablissement.** Le but est de trouver rapidement les défauts et de se rétablir rapidement. Des programmes de recherche sur la livraison de logiciels, comme les travaux du DevOps Research and Assessment (DORA), suivent des mesures telles que la fréquence de déploiement, le délai de mise en œuvre des changements, le taux d'échec des changements et le temps de rétablissement du service. Traitez-les comme des questions sur votre système, non comme des notes pour les équipes ; voir le livre *Service Management Metrics*.

**Ce qu'elle exige.** Des tests automatisés auxquels vous faites confiance, un pipeline stable, une capacité de retour arrière ou de correction en avant, une surveillance de production qui montre l'effet d'un changement et une équipe qui est responsable de ce qu'elle met en production. Sans cela, des mises en production fréquentes sont imprudentes ; avec cela, elles sont plus sûres que des mises en production rares.

**Comment les angles s'articulent.** La livraison continue est la forme pratique de l'angle agile pour les services en production. Les assistants d'IA aident à écrire et à relire du code et des tests sous revue humaine. L'automatisation est le cœur du pipeline. L'analytique vous dit ce que font le pipeline et les services.

## Bonnes pratiques

1. **Garder la ligne principale livrable.** Traitez un build cassé comme la priorité absolue de l'équipe. Une règle telle que « corriger ou annuler dans l'heure » maintient l'intégration en bonne santé.
2. **Faire des changements petits.** Visez des changements qu'un relecteur peut comprendre en quelques minutes. Si un changement est gros, découpez-le, par exemple en mettant d'abord en production l'étape préparatoire.
3. **Automatiser les contrôles auxquels vous faites confiance.** Les contrôles de construction, unitaires, d'intégration et de sécurité s'exécutent sur chaque changement. Ajoutez un contrôle quand un incident révèle une lacune, et retirez-en un qui n'échoue jamais et coûte du temps, après discussion.
4. **Utiliser un seul chemin de pipeline pour tous les changements.** Évitez les voies spéciales pour les changements urgents. Un chemin unique assez rapide pour les urgences est plus sûr qu'une exception rarement exercée.
5. **Séparer le déploiement de la mise en production.** Utilisez des interrupteurs de fonctionnalité et des déploiements par étapes pour que le nouveau comportement puisse être activé pour quelques utilisateurs et désactivé rapidement. Consignez l'état de chaque interrupteur et supprimez les anciens.
6. **Planifier le chemin du retour.** Pour chaque changement, sachez comment faire un retour arrière ou une correction en avant, et exercez-vous-y. Les changements de données demandent un soin particulier, puisqu'un retour arrière du code ne peut pas les annuler.
7. **Surveiller l'effet de chaque mise en production.** Observez les taux d'erreur, la latence et les indicateurs visibles par les utilisateurs pendant une période définie après la mise en production, et facilitez la corrélation entre un changement et un symptôme.
8. **Écrire ce que le pipeline vérifie.** Une courte description de chaque étape, de sa finalité et de son responsable permet aux auditeurs, aux nouveaux arrivants et à l'exploitation de le comprendre.
9. **Inclure l'exploitation dès le départ.** Associez les personnes de l'exploitation et du support à la conception, afin que la journalisation, les runbooks et les alertes fassent partie du changement, et non une réflexion après coup.
10. **Améliorer le pipeline comme un produit.** Donnez-lui un responsable et un backlog. Des pipelines lents et instables apprennent aux gens à les contourner.

## Questions à discuter avec votre équipe

**Combien de temps met notre plus petit changement à atteindre la production, et où attend-il ?**
Cela révèle les retards. Demandez un exemple réel avec des horodatages. Les attentes typiques sont les tests manuels, l'approbation, l'accès aux environnements et les fenêtres de mise en production. Demandez ensuite de choisir l'attente la plus longue et une première mesure pour la réduire.

**Lesquelles de nos approbations manuelles un contrôle de pipeline pourrait-il remplacer, et quel risque chaque contrôle maîtrise-t-il ?**
Chaque approbation existe pour une raison, souvent un incident vieux de plusieurs années. Demandez quel risque elle traite et quelles preuves satisferaient l'approbateur. Attendez-vous à de la résistance de la part des responsables de contrôles ; demandez-leur d'aider à concevoir le remplacement. Demandez ensuite d'essayer un remplacement avec une date de revue.

**Que se passe-t-il quand une mise en production tourne mal ? À quelle vitesse pourrions-nous revenir en arrière, et nous y sommes-nous exercés ?**
Les équipes découvrent souvent que le retour arrière n'existe que sur le papier. Demandez la dernière fois qu'il a servi. Demandez ensuite de planifier une répétition dans un environnement sûr.

**À quels tests faisons-nous confiance, et lesquels ignorons-nous ?**
Les tests instables érodent la confiance. Demandez quels échecs l'équipe balaie d'un haussement d'épaules. Attendez-vous à des réponses honnêtes sur des tests qui « passent généralement au second essai ». Demandez ensuite de choisir un test instable à corriger ou à supprimer.

**Comment savons-nous en moins d'une heure si une mise en production a nui aux utilisateurs ?**
Cela teste la surveillance. Les réponses vont de « nous attendons les plaintes » à des tableaux de bord et des alertes automatiques. Demandez quel indicateur aurait détecté la dernière mauvaise mise en production. Demandez ensuite de choisir un indicateur à ajouter et à vérifier.

**Où l'IA pourrait-elle aider dans notre pipeline, et qui examine ce qu'elle produit ?**
L'IA peut rédiger des tests, relire des changements et expliquer des échecs. Demandez ce que chaque usage produirait et qui en est responsable. Attendez-vous à de l'enthousiasme et à peu de supervision. Demandez ensuite de choisir un usage à faible risque avec revue humaine et une mesure des erreurs.

## En pratique : un exemple de gestion des services

L'équipe numérique d'un groupe hospitalier régional exploite un service de rendez-vous des patients utilisé par 30 cliniques. Les mises en production ont lieu chaque trimestre dans une fenêtre de week-end, avec une longue liste de contrôle de tests. Les deux dernières ont dépassé le temps prévu, et l'une a introduit une anomalie apparue le lundi matin sous forme de rendez-vous en double.

La responsable de l'équipe, avec la responsable du service, propose de petites étapes. D'abord, ils automatisent la construction et les 200 tests de régression les plus importants, pour qu'ils s'exécutent à chaque changement. Ensuite, ils placent la configuration dans la gestion de versions et exigent une revue par un pair pour chaque changement. Enfin, ils ajoutent un interrupteur de fonctionnalité pour que les nouvelles règles de réservation puissent être activées d'abord dans une clinique. Le responsable de la sécurité clinique, qui valide le service, demande des preuves que chaque changement a été testé et relu. L'équipe lui montre la trace du pipeline pour chaque mise en production.

Après quatre mois, l'équipe met en production chaque semaine, et le risque du lundi matin est moindre parce que les changements sont plus petits et visibles. Le changement de règle de double réservation est d'abord activé dans une clinique, repéré le deuxième jour quand une réceptionniste remarque un message étrange, et désactivé en quelques minutes.

Ce qui change : les mises en production cessent d'être des événements de week-end et le responsable de la sécurité examine des preuves au lieu d'assister à des réunions. Ce qui reste difficile : la suite de tests manque encore certains cas de réservation complexes, une interface héritée vers le système de dossier patient n'a aucun test automatisé, et deux cliniques sont mécontentes du changement hebdomadaire parce qu'il affecte leur formation. L'équipe convient d'un calendrier des changements pour les fonctionnalités sensibles à la formation et continue d'ajouter des tests à mesure que les incidents révèlent des lacunes.

## Quatre perspectives

### Équipes produit et de livraison

Soyez responsables du pipeline et de ce qu'il met en production. Gardez des changements petits, des tests fiables et des interrupteurs ordonnés. Intégrez journalisation, alertes et runbooks à la définition de « terminé », et observez l'effet de chaque mise en production.

### Équipes de service et d'exploitation

Aidez à définir ce que le pipeline vérifie et ce que la surveillance montre. Travaillez avec les développeurs sur le retour arrière et sur ce que « en bonne santé » signifie. Demandez la trace de la mise en production quand un incident commence.

### Direction et gouvernance

Financez le pipeline, les tests et la surveillance, qu'il est facile de laisser dépérir. Demandez des preuves de contrôle issues du pipeline plutôt que des réunions. N'utilisez pas les mesures de livraison pour classer les équipes.

### Clients et utilisateurs

Attendez-vous à des changements petits et fréquents et à des corrections rapides. Dites à l'équipe quand un changement vous perturbe, par exemple pendant une formation ou une période chargée, et demandez un préavis pour les changements importants.

## Agilité, IA, automatisation et analytique

### Agilité

La livraison continue est le côté livraison de la pratique agile : un changement fonctionnel par petits morceaux, avec les parties prenantes impliquées et une revue régulière de ce qu'il faut améliorer. Attention : ne l'assimilez pas à une méthode particulière ; les équipes peuvent livrer en continu avec ou sans sprints.

### IA

Les assistants d'IA peuvent rédiger du code, des tests et des notes de version, et résumer des échecs, avec un responsable nommé et une personne qui examine chaque sortie avant son entrée dans le pipeline. Attention : le code généré peut comporter des problèmes de sécurité ou de licence ; exécutez les mêmes contrôles que pour tout changement et suivez la part des changements assistés par l'IA qui causent des défauts. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Automatisez la construction, les tests, l'analyse de sécurité, le déploiement et la trace de preuves, et gardez le retour arrière automatique là où vous le pouvez. Attention : un pipeline au vert montre que les contrôles sont passés, non que le changement est juste ; gardez la revue humaine pour les décisions de conception et de risque. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Suivez le délai de mise en œuvre des changements, la fréquence de déploiement, le taux d'échec des changements et le temps de rétablissement, comme des questions posées au système. Attention : lorsque ces mesures deviennent des objectifs, les équipes découpent artificiellement les changements ou évitent de consigner les échecs ; utilisez-les avec les garde-fous du livre *Service Management Metrics*.

## Modes d'échec courants

- **Des mises en production fréquentes sans tests.** La vitesse monte et la confiance baisse. Construisez d'abord les contrôles et livrez aussi souvent qu'ils le permettent.
- **Une voie séparée pour les changements urgents.** La voie urgente n'est pas testée et est risquée. Rendez le chemin principal assez rapide pour les urgences.
- **Des interrupteurs de fonctionnalité de longue durée.** Les anciens interrupteurs s'accumulent et personne ne sait ce qui est activé. Suivez les interrupteurs et supprimez-les après le déploiement.
- **Pas de répétition du retour arrière.** Le retour arrière échoue quand on en a besoin. Exercez-vous-y dans un environnement sûr.
- **Des tests instables ignorés.** Les gens cessent de croire aux builds rouges. Corrigez ou supprimez les tests instables.
- **Traiter le pipeline comme le travail de quelqu'un d'autre.** Il se dégrade. Donnez-lui un responsable et un backlog.
- **Des mesures utilisées pour classer les équipes.** Les équipes détournent les chiffres. Utilisez les mesures pour trouver des problèmes, non pour comparer les personnes.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Fréquence de mise en production | Trimestrielle ou plus rare | Mensuelle | Hebdomadaire ou plus, sur un chemin standard | Fréquence ajustée selon le risque et la demande | Continue entre les services, avec livraison progressive |
| Automatisation | Construction et tests manuels | Construction automatisée | Construction, tests et déploiement automatisés | Pipeline surveillé et amélioré comme un produit | Pipelines partagés et gouvernés entre équipes |
| Preuves de contrôle | Réunions et listes de contrôle | Quelques enregistrements | Traces de pipeline pour chaque changement | Preuves échantillonnées et examinées | Preuves continues, avec revue humaine du risque |
| Rétablissement | Retour arrière flou | Retour arrière documenté | Retour arrière ou correction en avant répétés | Temps de rétablissement mesuré | Rétablissement automatisé et testé régulièrement |

## Liste de contrôle

- [ ] La ligne principale est livrable à tout moment.
- [ ] Chaque changement passe par un seul pipeline automatisé.
- [ ] Les tests auxquels nous faisons confiance s'exécutent sur chaque changement ; les tests instables sont corrigés ou supprimés.
- [ ] Nous séparons le déploiement de la mise en production, avec les interrupteurs de fonctionnalité suivis.
- [ ] Nous savons faire un retour arrière ou une correction en avant et nous nous y sommes exercés.
- [ ] Nous surveillons l'effet de chaque mise en production.
- [ ] Le pipeline a un responsable, un backlog et une description de ses contrôles.
- [ ] Les changements assistés par l'IA sont relus et suivis.

## Invites d'IA

**Repérer les attentes dans une mise en production.**

```text
Here is a timeline of our last release, from "change ready" to "in production": [paste timeline with timestamps and who acted].
List each wait and how long it was, then give two questions per wait to find its cause. Do not assume causes.
List what you are unsure of.
```

**Proposer des contrôles de pipeline pour un risque.**

```text
Our service: [describe]. The risk we want to control: [describe, such as untested configuration change].
List five automated checks that could address it, what each would catch, and what each would miss. Do not claim a check removes the risk.
Mark assumptions and list what you are unsure of.
```

**Rédiger un plan de répétition de retour arrière.**

```text
Our release process: [paste steps]. Our rollback method: [describe, or write "unknown"].
Draft a one-page rehearsal plan with steps, roles, success criteria, and what to record. Include a safe environment only; do not suggest rehearsing in production.
List what you are unsure of.
```

## Compétences d'IA

- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md) : à utiliser pour déplacer les tests plus tôt dans le pipeline.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md) : à utiliser pour construire les tests en même temps que les changements.
- [release-notes](../../../../skills/release-notes/SKILL.md) : à utiliser pour décrire chaque mise en production aux clients et au support.

## Sources principales

- Jez Humble et David Farley, *Continuous Delivery* (2010) : le livre qui a nommé et décrit la pratique.
- DORA (dora.dev) : recherches et rapports sur la performance de livraison de logiciels.
- Wikipedia, « Continuous delivery » : un résumé des principes et des pratiques associées.
- Wikipedia, « Continuous integration » : la pratique qui la sous-tend.

## Références

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Continuous deployment — Wikipedia — https://en.wikipedia.org/wiki/Continuous_deployment
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
10. DORA — DevOps Research and Assessment — https://dora.dev
