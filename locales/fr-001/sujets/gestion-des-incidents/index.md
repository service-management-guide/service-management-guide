# Gestion des incidents

**La gestion des incidents existe pour rétablir le service normal le plus vite possible et limiter le préjudice aux utilisateurs ; elle fonctionne lorsque la gravité est convenue à l'avance, que les rôles sont clairs, que la communication est régulière et que la revue qui suit examine le système et non les individus.**

## Pourquoi c'est important

Un incident est une interruption non planifiée d'un service, ou une dégradation de sa qualité. Quand il survient, les personnes concernées sont sous pression, l'information est incomplète et le temps file. Les décisions prises dans les dix premières minutes déterminent souvent si l'incident dure une heure ou six.

Les organisations qui gèrent bien les incidents ne comptent pas sur des héros. Elles ont convenu de la façon de décider de la gravité d'une situation, de qui dirige, de qui parle aux utilisateurs, de la manière d'escalader et du moment où l'on cesse d'enquêter pour appliquer un contournement. Elles se sont exercées. Les organisations qui gèrent mal les incidents improvisent à chaque fois, se disputent sur les priorités pendant l'événement et découvrent que la seule personne qui connaît le système est en vacances.

Ce sujet décrit la gestion des incidents comme une pratique : définitions, rôles, gravité, communication et revue. Il traite les incidents majeurs avec une structure supplémentaire et couvre la manière dont l'IA et l'automatisation peuvent aider, et où elles peuvent nuire. Il se tient aux côtés de la gestion des problèmes (Sujet 3.3 — Gestion des problèmes), qui cherche les causes sous-jacentes, et de la surveillance (Sujet 3.10 — Surveillance et gestion des événements), qui détecte souvent l'incident.

## Concepts clés

**Incident.** Dans ITIL 4, une interruption non planifiée d'un service ou une réduction de sa qualité. L'article de Wikipedia sur la gestion des incidents décrit la pratique dans la gestion des services informatiques. Un incident peut exister avant qu'aucun utilisateur ne le remarque, par exemple lorsque la surveillance montre un disque défaillant.

**Rétablir le service d'abord.** Le but est de ramener le service à la normale, non de trouver la cause racine. Un contournement qui rétablit le service est un bon résultat ; la cause racine relève de la gestion des problèmes. Les équipes qui cherchent la cause alors que le service est en panne prolongent l'interruption.

**Contournement.** Une solution qui réduit ou supprime l'impact d'un incident sans résoudre sa cause, par exemple en réacheminant le trafic, en redémarrant un composant ou en basculant sur un processus manuel. Voir le Sujet 3.3 — Gestion des problèmes pour la manière dont les erreurs connues et les contournements sont suivis.

**Gravité et priorité.** La gravité décrit l'impact sur les utilisateurs et l'activité, par exemple combien sont touchés et à quel point. La priorité y ajoute l'urgence, comme une échéance. De nombreuses organisations utilisent une petite échelle, par exemple quatre niveaux, avec une définition et une réponse attendue pour chacun. Les définitions devraient s'appuyer sur des faits observables (« plus de 100 utilisateurs ne peuvent pas effectuer de paiements ») plutôt que sur des impressions.

**Incidents majeurs.** Un incident majeur a un impact significatif et exige une réponse plus rapide et mieux coordonnée que le processus standard. Les organisations définissent leurs propres seuils. Les incidents majeurs ont généralement un responsable d'incident nommé, un responsable de la communication et un rythme régulier de points d'information.

**Rôles.** Un responsable d'incident coordonne et prend les décisions ; des intervenants techniques diagnostiquent et réparent ; un responsable de la communication tient informés les parties prenantes et les utilisateurs ; un scribe consigne ce qui est fait et quand. Une même personne peut tenir plusieurs rôles dans un petit incident. L'Incident Command System, utilisé en gestion des urgences et décrit sur Wikipedia, influence la structure employée dans de nombreuses organisations techniques.

**Escalade.** Faire intervenir davantage de compétences ou d'autorité. L'escalade fonctionnelle fait passer l'incident à des personnes ayant la bonne expertise. L'escalade hiérarchique fait intervenir des responsables qui peuvent décider ou fournir des ressources. Des critères clairs, comme « aucun progrès après 30 minutes à la gravité un », font de l'escalade une routine plutôt qu'un signe d'échec.

**Astreinte.** Dispositifs permettant de joindre des personnes en dehors des heures normales. Une bonne pratique d'astreinte comprend des limites de charge, un tour clair, des runbooks et une compensation. Voir le Sujet 2.6 — Ingénierie de la fiabilité des sites. La fatigue d'alarme, phénomène décrit sur Wikipedia, pousse les gens à ignorer les alertes trop fréquentes ou non exploitables.

**Communication.** Les utilisateurs et les parties prenantes doivent savoir ce qui est touché, ce que vous faites et quand ils auront des nouvelles. Des points d'information fréquents et simples réduisent les contacts répétés et l'anxiété. L'article de Wikipedia sur la communication de crise donne des principes généraux. Une page d'état, un canal interne et des messages directs aux clients clés servent des publics différents.

**Enregistrements d'incident.** Un ticket ou un enregistrement avec l'heure de début, les symptômes, les actions, les décisions et l'heure de fin. L'enregistrement soutient la revue et fournit des données pour l'amélioration. Une chronologie tenue pendant l'incident est plus exacte qu'une chronologie reconstituée après coup.

**Revue.** Après un incident important, tenez une revue sans blâme qui examine ce qui s'est passé, ce qui a aidé, ce qui a ralenti la réponse et ce qu'il faut changer. Les constats vont à la gestion des problèmes et au backlog d'amélioration. Voir le Sujet 3.3 — Gestion des problèmes.

**Mesures.** Le délai de détection, le délai de réponse et le délai de rétablissement, souvent résumés par le temps moyen de rétablissement (MTTR) dans la description de Wikipedia, sont courants. Les moyennes masquent de grandes différences entre incidents et peuvent être manipulées par la manière de fixer les heures de début et de fin. Utilisez des distributions et regardez les incidents individuels. Voir le livre *Service Management Metrics*.

**Comment les angles s'articulent.** La pratique agile traite chaque revue comme une rétroaction et garde l'amélioration petite et continue. L'IA peut résumer des chronologies, suggérer des incidents passés semblables et rédiger des points d'information, avec une personne responsable. L'automatisation exécute des étapes sûres et bien comprises comme les redémarrages et les bascules. L'analytique montre les motifs de récurrence.

## Bonnes pratiques

1. **Définir les niveaux de gravité avec des faits observables.** Écrivez ce que signifie chaque niveau, qui est prévenu et à quelle vitesse. Revoyez les définitions après les incidents difficiles à classer.
2. **Nommer les rôles et s'y exercer.** Convenez de qui dirige, de qui communique et de qui consigne. Répétez avec des exercices, pour que la première fois ne soit pas une vraie crise. Voir le Sujet 3.12 — Gestion de la continuité des services.
3. **Rétablir d'abord, enquêter ensuite.** Fixez la règle qu'un contournement est appliqué quand il existe et qu'il est sûr. Consignez l'incident pour la gestion des problèmes et passez à autre chose.
4. **Tenir une chronologie en direct.** Consignez actions et décisions avec les heures au moment où elles surviennent, dans un endroit partagé. Cela évite les disputes et accélère la revue.
5. **Escalader tôt et sans blâme.** Définissez des déclencheurs d'escalade et traitez leur usage comme une bonne pratique. Ceux qui escaladent tard craignent la critique ; supprimez-la.
6. **Communiquer à un rythme régulier.** Convenez d'un intervalle de points d'information pour chaque niveau de gravité et envoyez-les même quand il n'y a rien de nouveau, en le disant. Utilisez un langage simple.
7. **Donner aux intervenants ce dont ils ont besoin.** Maintenez runbooks, accès, tableaux de bord et listes de contacts. Testez les accès avant la nuit où ils seront nécessaires.
8. **Protéger les personnes.** Limitez la charge d'astreinte, passez le relais lors des longs incidents et veillez à ce que les intervenants se reposent. Les gens fatigués prennent de moins bonnes décisions.
9. **Examiner sans blâme et aller jusqu'au bout.** Rédigez un court rapport avec la chronologie, les facteurs contributifs et les actions avec responsables et dates. Suivez les actions jusqu'à leur achèvement. Voir le Sujet 3.3 — Gestion des problèmes.
10. **Réinjecter les leçons.** Mettez à jour runbooks, surveillance et conception. Partagez l'apprentissage avec d'autres équipes et vérifiez que les incidents répétés diminuent.

## Questions à discuter avec votre équipe

**Comment décidons-nous de la gravité d'un incident, et en a-t-on déjà débattu pendant un incident ?**
Le désaccord sur la gravité fait perdre du temps. Demandez des exemples récents. Vous entendrez peut-être que la réponse dépend de qui demande. Demandez ensuite de réécrire la définition d'un niveau avec des faits observables.

**Qui dirige un incident à 3 h du matin, et comment sait-il qu'il en est le responsable ?**
Une direction floue est une cause courante de confusion. Demandez qui a pris les décisions lors du dernier incident majeur. Attendez-vous à des réponses différentes. Demandez ensuite de convenir de la façon dont le responsable est choisi et annoncé.

**Qu'entendent les utilisateurs de notre part pendant un incident, et à quelle fréquence ?**
Comparez ce que les utilisateurs ont entendu lors du dernier incident avec ce qu'ils voulaient. Attendez-vous à de longs silences. Demandez ensuite de choisir un intervalle de points d'information et un canal, et de rédiger un modèle.

**Qu'avons-nous escaladé tardivement, et pourquoi ?**
Cela explore la peur et l'habitude. Les gens peuvent tarder par crainte de paraître incompétents ou de réveiller quelqu'un. Demandez ce qui faciliterait l'escalade. Demandez ensuite d'écrire une règle comme « escalader s'il n'y a aucun progrès en 30 minutes ».

**Que dit notre dernière revue d'incident que nous devrions changer, et qu'est-ce qui a réellement changé ?**
Cela teste le suivi. Demandez les actions et leur état. Attendez-vous à ce que certaines soient ouvertes depuis des mois. Demandez ensuite d'attribuer des responsables et des dates et de les examiner dans un mois.

**Où l'IA pourrait-elle aider pendant un incident, et où une personne doit-elle décider ?**
L'IA peut résumer la chronologie, chercher dans les incidents passés et rédiger des points d'information. Elle ne peut pas être redevable. Demandez quelles actions une IA peut entreprendre sans approbation, le cas échéant. Demandez ensuite de choisir un usage à faible risque et de convenir de la façon de vérifier sa sortie.

## En pratique : un exemple de gestion des services

L'équipe numérique d'une chaîne nationale de pharmacies exploite une application permettant aux clients de commander leurs renouvellements d'ordonnance. Un vendredi soir, les commandes commencent à échouer pour environ 30 % des utilisateurs. L'ingénieur d'astreinte voit des erreurs venant d'une base de données et appelle la responsable d'incident selon le tour. La responsable déclare un incident de gravité deux parce que les utilisateurs ne peuvent pas accomplir une tâche essentielle, désigne un responsable de la communication et démarre une chronologie.

En 15 minutes, l'équipe soupçonne un changement de base de données déployé l'après-midi. La responsable demande si un retour arrière est sûr ; l'ingénieur qui a fait le changement le confirme. L'équipe revient en arrière, et les commandes se rétablissent en cinq minutes. Le temps total de la première alerte au rétablissement est de 47 minutes. Le responsable de la communication avait publié sur la page d'état à 20 minutes, de nouveau à 35 et une dernière fois au rétablissement, et avait dit au service client quoi répondre.

La semaine suivante, l'équipe tient une revue sans blâme. La chronologie montre que la détection a dépendu d'une plainte d'utilisateur, car aucune alerte ne couvrait les commandes en échec ; le changement avait été relu mais l'environnement de test n'avait pas de données réalistes ; et le premier point d'information a été plus lent que l'intervalle convenu parce que le responsable de la communication ne savait pas ce que la page d'état avait le droit de dire. L'équipe ajoute une alerte sur le taux d'échec des commandes, améliore les données de test et rédige un modèle pour la page d'état.

Ce qui change : l'incident semblable suivant est détecté par l'alerte en moins de trois minutes. Ce qui reste difficile : les données de test ne contiennent aucune vraie information de patient, pour de bonnes raisons, ce qui limite leur réalisme ; le tour compte encore peu d'ingénieurs capables de revenir en arrière sur la base de données en toute sécurité ; et la liste d'actions de la revue compte douze éléments alors que l'équipe a le temps pour cinq. Ils choisissent selon le risque et placent le reste dans le backlog avec des dates.

## Quatre perspectives

### Équipes produit et de livraison

Construisez pour le rétablissement : rendez les changements réversibles, ajoutez des alertes et des journaux qui montrent l'impact sur les utilisateurs, et écrivez les runbooks au fil de l'eau. Participez aux revues et corrigez les causes dans la conception.

### Équipes de service et d'exploitation

Connaissez votre rôle, exercez-vous et tenez la chronologie. Escaladez tôt, communiquez régulièrement et prenez soin les uns des autres. Apportez ce que vous apprenez aux revues et servez-vous-en pour améliorer les runbooks et la surveillance.

### Direction et gouvernance

Convenez à l'avance des définitions de gravité et des attentes, et résistez à l'attribution de blâme. Pendant un incident majeur, soutenez le responsable et ne demandez des points d'information que par le canal convenu. Financez les actions de suivi.

### Clients et utilisateurs

On devrait vous dire rapidement ce qui est touché, ce qui est fait et quand vous aurez des nouvelles. Signalez ce que vous voyez, avec des détails. Après un incident majeur, attendez-vous à un compte rendu clair de ce qui a changé.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez les revues d'incident comme la courte boucle de rétroaction qui pilote l'amélioration : de petits changements aux runbooks, aux alertes et à la conception, faits rapidement avec les parties prenantes informées. Attention : une longue liste d'actions que personne ne termine est pire qu'une liste courte qui est faite.

### IA

L'IA peut rédiger des points d'information, résumer la chronologie et les échanges, et retrouver des incidents antérieurs semblables. Le responsable d'incident reste redevable, et la sortie d'une IA est une suggestion. Attention : l'IA peut inventer des causes ou des horaires, et un point d'information rédigé automatiquement et envoyé sans relecture peut induire les clients en erreur ; vérifiez toujours avant d'envoyer. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Automatisez les étapes de réponse sûres et reproductibles, comme la collecte de données de diagnostic, l'alerte des bonnes personnes et l'exécution d'un redémarrage examiné, avec journaux et limites. Attention : une automatisation qui agit pendant un incident peut l'aggraver ; gardez un arrêt manuel et testez dans un environnement sûr. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Regardez les délais de détection, de réponse et de rétablissement, la distribution de chacun et les incidents répétés. Attention : les moyennes masquent les pires incidents, les définitions du début et de la fin varient, et les mesures servant à juger les équipes invitent à manipuler les horodatages ; étudiez aussi les incidents individuels. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **La gravité débattue pendant l'incident.** Du temps est perdu. Rédigez des définitions avec des faits observables.
- **Pas de responsable clair.** Tout le monde agit et personne ne décide. Nommez le responsable et annoncez-le.
- **Enquêter pendant que le service est en panne.** Le rétablissement est retardé. Appliquez d'abord un contournement sûr.
- **Le silence envers les utilisateurs.** L'anxiété et les contacts répétés augmentent. Informez à un rythme régulier.
- **Le blâme dans les revues.** Les gens cachent leurs erreurs. Tenez des revues sans blâme et suivez les actions.
- **La dépendance aux héros.** Une personne répare tout. Partagez les connaissances et écrivez des runbooks.
- **Des actions automatiques sans limites.** Une automatisation aggrave un incident. Ajoutez des limites, des journaux et un arrêt manuel.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Gravité et processus | Au cas par cas | Niveaux informels | Niveaux définis avec réponses attendues | Niveaux examinés avec des données | Processus adapté entre services et partenaires |
| Rôles et pratique | Improvisés | Quelques rôles nommés | Rôles définis et répétés | Exercices mesurés et améliorés | Exercices partagés avec fournisseurs et clients |
| Communication | Irrégulière | Points d'information quand on y pense | Rythme et canaux de points d'information par gravité | Qualité de la communication examinée | Cohérente entre équipes, clients et partenaires |
| Apprentissage | Blâme | Revues occasionnelles | Revues sans blâme avec actions suivies | Récurrence mesurée et réduite | Apprentissage partagé dans l'organisation |

## Liste de contrôle

- [ ] Les niveaux de gravité sont définis avec des faits observables et des réponses attendues.
- [ ] Les rôles d'incident sont nommés et répétés.
- [ ] Les déclencheurs d'escalade sont écrits.
- [ ] Une chronologie en direct est tenue pour les incidents importants.
- [ ] Les intervalles et canaux de points d'information sont fixés pour chaque gravité.
- [ ] La charge d'astreinte est limitée et suivie.
- [ ] Les revues sont sans blâme et les actions suivies jusqu'à leur achèvement.
- [ ] L'IA et l'automatisation utilisées lors d'incidents ont un responsable, des limites et une revue.

## Invites d'IA

**Résumer la chronologie d'un incident pour la revue.**

```text
Here are the chat messages and notes from an incident, with times and names removed: [paste text].
Produce a timeline of key events, a list of decisions and who made them (by role only), what helped, what slowed us down, and questions for the review. Use only the text and mark anything uncertain.
List what you are unsure of.
```

**Rédiger un point d'information à relire.**

```text
Facts we know: [paste confirmed facts]. Facts we do not know: [list]. Next update in: [time].
Draft a status update of under 80 words in plain language that states what is affected, what we are doing, and when the next update is due. Do not speculate about causes or give an estimate for recovery that is not in the facts.
List what you are unsure of.
```

**Vérifier les définitions de gravité.**

```text
Our severity definitions: [paste]. Here are three past incidents with their impact: [paste].
For each incident, say which level the definitions suggest, quote the words you used, and note where the definitions were ambiguous. Do not change the definitions.
List what you are unsure of.
```

## Compétences d'IA

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md) : à utiliser pour définir les rôles, la gravité et les étapes de réponse aux incidents.
- [postmortem](../../../../skills/postmortem/SKILL.md) : à utiliser pour mener une revue sans blâme avec des actions suivies.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour consigner les étapes de réponse aux défaillances connues.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md) : à utiliser pour planifier les points d'information aux utilisateurs et aux parties prenantes.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md) : à utiliser pour concevoir un dispositif d'astreinte soutenable.

## Sources principales

- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitres sur la réponse aux incidents et les revues post-incident, gratuits sur sre.google : des conseils pratiques d'un grand exploitant.
- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des incidents par le propriétaire.
- Wikipedia, « Incident management » : un aperçu de la pratique.
- Wikipedia, « Incident Command System » : le modèle de gestion des urgences qui a influencé les rôles d'incident techniques.

## Références

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
