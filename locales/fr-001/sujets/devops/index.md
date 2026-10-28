# DevOps

**DevOps est un ensemble d'habitudes culturelles, de pratiques de travail et d'outils qui rapprochent le développement et l'exploitation afin que les équipes puissent changer rapidement des services en production et les exploiter de façon fiable ; il complète ITIL en déplaçant de nombreux contrôles dans le travail lui-même, et ne dispense pas d'une responsabilité claire ni de preuves.**

## Pourquoi c'est important

Pendant des années, construire un logiciel et l'exploiter étaient des métiers distincts, dans des équipes distinctes aux objectifs différents. Les développeurs étaient récompensés pour le changement, l'exploitation pour la stabilité, et les deux groupes se rencontraient lors d'un transfert que tous deux trouvaient frustrant. Les mises en production étaient jetées par-dessus le mur, les incidents renvoyés en retour, et les clients attendaient.

DevOps est apparu à la fin des années 2000 en réaction. Son idée centrale est simple : ceux qui construisent un service doivent partager la responsabilité de son exploitation, et ceux qui l'exploitent doivent aider à façonner sa construction. Cette responsabilité partagée, soutenue par l'automatisation et une rétroaction rapide, permet aux équipes de livrer souvent et de se rétablir vite.

Pour la gestion des services, DevOps est une influence majeure et parfois une source de friction. ITIL décrit des pratiques telles que l'habilitation des changements et la gestion des incidents, et DevOps décrit comment les équipes les mettent en œuvre avec des pipelines, une astreinte partagée et des revues sans blâme. Les organisations qui voient les deux comme opposés finissent avec des systèmes parallèles ; celles qui les relient obtiennent des contrôles plus rapides et mieux documentés. Ce sujet explique les idées et montre comment elles s'articulent avec le reste de ce guide.

## Concepts clés

**Ce qu'est DevOps.** Le mot combine « développement » et « exploitation » (operations). Wikipedia le décrit comme un ensemble de pratiques qui intègre le développement logiciel et l'exploitation informatique, visant à raccourcir le cycle de vie de la livraison et à fournir une livraison continue de haute qualité. C'est un mouvement plus qu'un référentiel : il n'existe ni organe directeur ni certification unique qui le définisse.

**La culture d'abord.** Le changement central est culturel : objectifs partagés, responsabilité partagée et collaboration entre les rôles. Les équipes qui adoptent les outils sans la culture gardent l'ancien transfert sous un nouveau nom. Un résumé courant est « you build it, you run it » (vous le construisez, vous l'exploitez), associé à une remarque de Werner Vogels d'Amazon, signifiant que l'équipe qui construit un service est responsable de son exploitation.

**Les trois voies.** Dans le roman *The Phoenix Project* et le manuel qui a suivi, Gene Kim et ses coauteurs décrivent trois principes : le flux (accélérer le travail du développement à l'exploitation puis aux clients), la rétroaction (créer une rétroaction rapide de droite à gauche à chaque étape) et l'apprentissage continu et l'expérimentation. Ils relient DevOps à la pensée lean ; voir le Sujet 2.4 — Lean et Kaizen et le Sujet 2.3 — Flux et Kanban.

**CALMS.** Un aide-mémoire courant pour les éléments : culture, automatisation, lean, mesure et partage (sharing). Il est utile comme liste de contrôle de ce qu'il faut examiner dans une équipe, non comme note de maturité.

**Pratiques.** Les pratiques DevOps typiques comprennent la gestion de versions pour tout, l'intégration et la livraison continues (voir le Sujet 2.2 — Livraison continue), l'infrastructure as code (voir le Sujet 6.3 — Infrastructure as Code et GitOps), les tests automatisés, la surveillance et l'observabilité (voir le Sujet 7.4 — Observabilité et télémétrie), l'astreinte partagée et les revues d'incidents sans blâme.

**Décaler vers la gauche.** Déplacer des contrôles comme les tests et la sécurité plus tôt dans le cycle de vie, où les problèmes sont moins coûteux à corriger. DevSecOps étend l'idée à la sécurité, en intégrant des contrôles de sécurité au pipeline. Wikipedia décrit les deux.

**Ingénierie de plateforme.** Une pratique plus récente dans laquelle une équipe construit et exploite une plateforme interne que d'autres équipes utilisent pour construire, déployer et exploiter des services. Le but est de réduire la charge des équipes produit en offrant des voies standard balisées. Wikipedia décrit l'ingénierie de plateforme. Il faut être prudent : une plateforme que les équipes sont contraintes d'utiliser mais ne peuvent pas façonner devient un transfert de plus.

**Relation avec ITIL.** ITIL 4 reconnaît DevOps et décrit ses pratiques d'une façon que des contrôles de pipeline peuvent satisfaire. Les deux répondent à des questions différentes : DevOps décrit comment les équipes travaillent et automatisent ; ITIL décrit les pratiques dont une organisation a besoin, comme la gestion des incidents, des changements et des niveaux de service. Un résumé utile : DevOps fournit souvent le « comment » et ITIL le « quoi considérer ». Voir le Sujet 1.2 — ITIL et le Sujet 2.9 — Gestion agile des services.

**Relation avec le SRE.** L'ingénierie de la fiabilité des sites (SRE) est une discipline d'ingénierie de la fiabilité née chez Google ; elle partage des objectifs avec DevOps, utilise des objectifs de niveau de service et des budgets d'erreur, et traite souvent l'exploitation comme un problème logiciel. Voir le Sujet 2.6 — Ingénierie de la fiabilité des sites.

**Relation avec l'agilité.** La pratique agile se concentre sur la livraison d'un logiciel fonctionnel par petits morceaux avec l'implication des parties prenantes ; DevOps étend ce souci au-delà de la mise en production, vers l'exploitation et l'amélioration du service. Les deux partagent des valeurs comme la collaboration, la rétroaction rapide et l'amélioration continue.

**Objections courantes.** Certains membres de l'exploitation craignent que DevOps signifie des suppressions de postes ou la disparition de contrôles ; certains développeurs craignent qu'il signifie une astreinte permanente. Ces deux craintes reposent sur des cas réels. Traitez-les directement par des accords clairs sur la charge de travail, le soutien et les contrôles qui subsistent.

**Comment les angles s'articulent.** DevOps est la culture de livraison au sein de l'angle agile. Les assistants d'IA font désormais partie de nombreuses chaînes d'outils, sous revue humaine. L'automatisation est centrale. L'analytique, y compris les mesures de livraison et de fiabilité, boucle la rétroaction.

## Bonnes pratiques

1. **Commencer par des objectifs partagés.** Donnez au développement et à l'exploitation le même résultat à cœur, comme la fiabilité visible par les clients et la rapidité d'un changement sûr. Des objectifs séparés pour chaque groupe recréent le mur.
2. **Rendre l'équipe responsable de ce qu'elle construit.** Laissez l'équipe qui construit un service participer à son exploitation, avec le soutien, la formation et les limites de charge d'astreinte qui rendent cela soutenable.
3. **Automatiser le chemin vers la production.** Utilisez des pipelines qui construisent, testent, analysent et déploient de la même façon à chaque fois, avec des traces. Voir le Sujet 6.4 — Pipelines et changements automatisés.
4. **Tout mettre dans la gestion de versions.** Code, configuration, définitions d'infrastructure et runbooks. Un changement est alors relisible, traçable et réversible.
5. **Décaler les contrôles vers la gauche.** Ajoutez tôt dans le pipeline des tests unitaires, des analyses de sécurité et des contrôles de politique, et corrigez les causes des échecs répétés.
6. **Observer la production et partager ce que l'on voit.** Donnez aux développeurs accès à la même surveillance que celle qu'utilise l'exploitation, et examinez-la ensemble. Voir le Sujet 3.10 — Surveillance et gestion des événements.
7. **Examiner les incidents sans blâme.** Tenez une revue après les incidents importants, concentrez-vous sur le système et suivez les actions. Voir le Sujet 3.3 — Gestion des problèmes.
8. **Offrir une plateforme, non un mandat.** Si vous construisez une plateforme interne, traitez les équipes qui l'utilisent comme des clients : demandez ce dont elles ont besoin, publiez sa feuille de route et mesurez si elle aide.
9. **Garder les contrôles, changer leur fonctionnement.** Là où un contrôle gère un risque réel, comme la séparation des tâches, gardez-le et satisfaites-le par l'automatisation et des enregistrements plutôt que par une réunion.
10. **Mesurer ensemble la livraison et la fiabilité.** Regardez la rapidité et la fréquence des changements ainsi que la fréquence à laquelle ils causent des ennuis et la rapidité du rétablissement. Servez-vous des chiffres pour apprendre, non pour classer les personnes.

## Questions à discuter avec votre équipe

**Où se situe le transfert entre la construction et l'exploitation, et qu'est-ce qui s'y perd ?**
La plupart des organisations en ont un ou plusieurs. Interrogez les deux côtés : que ne savent pas les développeurs sur l'exploitation du service, et que ne sait pas l'exploitation sur la conception ? Attendez-vous à de longues listes. Demandez ensuite de choisir un transfert à supprimer ou à réduire.

**Qui est appelé quand notre service tombe en panne la nuit, et sait-il comment le réparer ?**
Cela examine « you build it, you run it » dans la pratique. Les réponses vont d'un développeur d'astreinte à une équipe distincte aux connaissances limitées. Interrogez sur la charge et la formation dispensée. Demandez ensuite de convenir d'un changement pour améliorer les connaissances ou la charge.

**Quels contrôles avons-nous qui existent à cause d'un incident passé, et un pipeline pourrait-il les fournir ?**
De nombreux contrôles sont hérités. Demandez quel risque chacun traite et quelles preuves satisfont son responsable. Demandez ensuite d'essayer un remplacement par le pipeline avec la participation du responsable.

**Que devrait faire notre plateforme interne pour que nous la choisissions librement ?**
Cela teste la pensée plateforme. Si les équipes ne l'utiliseraient que parce qu'on le leur dit, elle ne les sert pas. Demandez ce qu'elles utilisent aujourd'hui et pourquoi. Demandez ensuite de convenir d'un petit ensemble d'entretiens avec les clients.

**Comment examinons-nous les incidents, et qu'est-ce qui a changé après le dernier ?**
Les revues ne comptent que si des actions suivent. Demandez les actions de la dernière revue et leur état. Attendez-vous à ce que certaines soient encore ouvertes. Demandez ensuite d'attribuer des responsables et des dates de revue à celles qui restent.

**Comment les assistants d'IA de codage ou d'exploitation sont-ils utilisés sur notre chaîne d'outils, et qui examine leur sortie ?**
Les assistants d'IA peuvent écrire du code, des tests, de la configuration et des runbooks, et résumer des incidents. Demandez qui est responsable de chaque usage, ce qu'une personne examine et ce qui détecterait une erreur. Demandez ensuite de choisir un usage à auditer ce mois-ci.

## En pratique : un exemple de gestion des services

L'équipe numérique de banque de détail d'une banque régionale construit une application mobile, et un groupe d'exploitation distinct gère la production. Les mises en production ont lieu toutes les six semaines, avec un gel de trois jours. Les développeurs disent que l'exploitation bloque le changement ; l'exploitation dit que les développeurs livrent du code non testé et la laissent se débrouiller. Les revues d'incident se terminent par un désaccord sur la faute de qui c'était.

Un nouveau responsable de l'ingénierie propose une expérience sur un service, la fonction de contrôle des cartes. Un développeur et un ingénieur d'exploitation rejoignent la même équipe. Ils conviennent d'un objectif commun : les clients peuvent geler et dégeler une carte en moins de cinq secondes, et les changements peuvent être mis en production en toute sécurité à tout moment. Ils placent la configuration dans la gestion de versions, ajoutent des tests automatisés et des analyses de sécurité à un pipeline, et conviennent que toute l'équipe assure le tour d'astreinte, les ingénieurs d'exploitation formant les développeurs, avec une limite d'une semaine sur six par personne. L'équipe des risques de la banque tient à conserver la séparation des tâches ; l'équipe y satisfait en exigeant une revue par un pair pour chaque changement et en consignant les traces du pipeline.

Après six mois, le contrôle des cartes est livré chaque semaine avec peu d'incidents, et l'équipe des risques accepte la trace du pipeline à la place d'une réunion de comité des changements pour ce service. Les revues d'incident se font sans blâme, et deux causes répétées sont corrigées. Les autres services restent sur l'ancien modèle.

Ce qui change : cette équipe n'attend plus le cycle de six semaines et partage une vue commune de la production. Ce qui reste difficile : le reste de l'organisation est sceptique, parce que l'équipe a plus d'ingénieurs par service que les autres ; la charge d'astreinte a poussé deux développeurs à envisager de partir ; et le pipeline partagé dépend d'une équipe de plateforme centrale qui a un long backlog. Le responsable porte les questions d'effectifs et de plateforme devant le groupe de direction plutôt que de présenter le résultat comme un modèle.

## Quatre perspectives

### Équipes produit et de livraison

Soyez responsables du service de bout en bout : conception, construction, mise en production et exploitation. Apprenez comment fonctionne l'exploitation, partagez l'astreinte équitablement et faites de l'observabilité et des runbooks une partie de votre définition de « terminé ».

### Équipes de service et d'exploitation

Partagez ce que vous savez de la défaillance et du rétablissement, aidez à construire le pipeline et la surveillance, et évoluez vers l'ingénierie de votre propre travail. Gardez les contrôles qui comptent et montrez comment l'automatisation y répond.

### Direction et gouvernance

Fixez des objectifs partagés pour le développement et l'exploitation, financez la plateforme et la formation, et surveillez la charge de travail et les limites d'astreinte. Ne classez pas les équipes selon des chiffres de livraison. Demandez des preuves que les contrôles fonctionnent.

### Clients et utilisateurs

Vous devriez voir des corrections plus rapides et des changements plus petits et plus sûrs. Dites aux équipes ce qui compte le plus et donnez un retour sur les changements qui vous perturbent.

## Agilité, IA, automatisation et analytique

### Agilité

DevOps étend le souci agile du logiciel fonctionnel au-delà de la mise en production, vers l'exploitation et l'amélioration du service, avec les parties prenantes impliquées et une rétroaction continue. Attention : ne le traitez pas comme un achat d'outil ou un nouveau nom d'équipe ; la culture est le changement.

### IA

Les assistants d'IA peuvent aider à écrire du code, des tests et des définitions d'infrastructure, résumer des journaux et des incidents, et rédiger des runbooks, avec un responsable et une revue humaine de tout ce qui atteint la production. Attention : un assistant peut introduire des défauts subtils ou des motifs peu sûrs ; appliquez les mêmes contrôles de pipeline que pour des changements humains et suivez les changements assistés par l'IA qui échouent. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Automatisez le chemin vers la production, la création d'environnements, les tests et les opérations courantes, avec journaux et retour arrière. Attention : l'automatisation concentre le pouvoir dans le pipeline ; contrôlez donc l'accès et examinez les changements du pipeline aussi soigneusement que ceux du service.

### Analytique

Regardez la fréquence de déploiement, le délai de mise en œuvre des changements, le taux d'échec des changements et le temps de rétablissement, avec des mesures de fiabilité et de clientèle. Attention : les mesures de livraison se détournent facilement, et comparer des équipes ignore le contexte ; servez-vous-en pour trouver où vous améliorer. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Une équipe DevOps qui devient un nouveau silo.** Un groupe prend le nom et le transfert demeure. Répartissez compétences et responsabilité entre les équipes.
- **Des outils sans culture.** Le pipeline est construit et le blâme continue. Travaillez sur les objectifs partagés et les pratiques de revue.
- **Un héroïsme d'astreinte permanent.** Les développeurs s'épuisent. Fixez des limites, partagez la charge et corrigez les causes des alertes.
- **Une plateforme imposée que personne ne veut.** Les équipes la contournent. Traitez les équipes comme des clients et mesurez l'usage volontaire.
- **Abandonner des contrôles sans les remplacer.** Le risque monte et les auditeurs s'y opposent. Satisfaites la finalité du contrôle par l'automatisation et des enregistrements.
- **Les chiffres de livraison comme objectifs.** Les équipes les détournent. Utilisez les mesures pour apprendre.
- **Ignorer la sécurité jusqu'à la fin.** Les constats arrivent tard et bloquent les mises en production. Décalez les contrôles vers la gauche.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Culture | Objectifs distincts pour le développement et l'exploitation | Objectifs partagés dans une équipe | Objectifs et responsabilité partagés largement adoptés | Pratiques culturelles examinées avec des preuves | Partagée entre équipes, fournisseurs et partenaires |
| Pipeline | Mises en production manuelles | Construction et tests automatisés | Chemin automatisé vers la production pour la plupart des services | Pipeline géré et amélioré comme un produit | Pipelines gouvernés et partagés dans l'organisation |
| Exploitation | Astreinte séparée | Astreinte partagée dans une équipe | Astreinte partagée avec limites et soutien | Charge d'astreinte et causes mesurées | Exploitation conçue et automatisée entre services |
| Apprentissage | Blâme | Revues occasionnelles | Revues sans blâme avec actions suivies | Apprentissage mesuré et partagé | Apprentissage partagé entre équipes et avec les fournisseurs |

## Liste de contrôle

- [ ] Le développement et l'exploitation partagent des objectifs de fiabilité et de changement sûr.
- [ ] L'équipe qui construit un service participe à son exploitation, dans des limites d'astreinte raisonnables.
- [ ] Tout ce qui change le service est dans la gestion de versions et passe par le pipeline.
- [ ] Les contrôles de sécurité et de politique s'exécutent tôt dans le pipeline.
- [ ] Les développeurs peuvent voir la surveillance de production.
- [ ] Nous tenons des revues sans blâme et suivons les actions.
- [ ] Les contrôles qui comptent sont conservés et satisfaits par l'automatisation et des enregistrements.
- [ ] L'aide de l'IA sur la chaîne d'outils a un responsable et une revue humaine.

## Invites d'IA

**Trouver les transferts à supprimer.**

```text
Here is a description of how a change goes from "code complete" to "running in production" in our organization: [paste steps and who does each].
List each handover, what information passes across it, and what might be lost. For each, give two questions to ask the people on either side. Do not propose solutions.
List what you are unsure of.
```

**Résumer un incident pour une revue sans blâme.**

```text
Below is the timeline and notes from an incident: [paste timeline with names removed].
Draft a neutral summary under these headings: what happened, how it was detected, what was done, what helped, what slowed us down, and questions for the review. Do not assign blame or state causes not in the notes.
List what you are unsure of.
```

**Rédiger un entretien avec les clients d'une plateforme.**

```text
We run an internal platform for [purpose]. Our users are [teams and roles].
Write ten open interview questions to learn what helps and hinders them, avoiding questions that suggest an answer. Add three things to listen for.
List what you are unsure of.
```

## Compétences d'IA

- [postmortem](../../../../skills/postmortem/SKILL.md) : à utiliser pour mener une revue sans blâme avec des actions suivies.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md) : à utiliser pour déplacer les contrôles plus tôt dans le pipeline.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md) : à utiliser pour concevoir un dispositif d'astreinte soutenable.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour transformer le savoir d'exploitation en runbooks courts et à jour.

## Sources principales

- Gene Kim, Jez Humble, Patrick Debois et John Willis, *The DevOps Handbook* : les principes et les pratiques, avec des études de cas.
- Gene Kim, Kevin Behr et George Spafford, *The Phoenix Project* : un roman qui a fait découvrir ces idées à de nombreux lecteurs.
- DORA (dora.dev) : recherches sur la performance de livraison et de fiabilité.
- Wikipedia, « DevOps » : un aperçu de l'histoire et des pratiques.

## Références

1. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
2. Phoenix Project — Wikipedia — https://en.wikipedia.org/wiki/Phoenix_Project
3. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Platform engineering — Wikipedia — https://en.wikipedia.org/wiki/Platform_engineering
7. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
8. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. DORA — DevOps Research and Assessment — https://dora.dev
