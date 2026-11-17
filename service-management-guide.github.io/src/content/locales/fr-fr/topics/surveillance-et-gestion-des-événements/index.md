# Surveillance et gestion des événements

**La surveillance et la gestion des événements observent les services afin que la bonne personne entende parler tôt des vrais problèmes et que personne ne soit réveillé par du bruit ; elles fonctionnent quand les alertes décrivent ce que ressentent les utilisateurs, que chaque alerte appelle une action et que le volume d'événements reste assez faible pour que les gens y fassent confiance.**

## Pourquoi c'est important

Le premier signe d'ennui devrait venir de vos propres systèmes, non d'un utilisateur. C'est la promesse de la surveillance : la santé d'un service est observée en continu et un écart est remarqué avant que la plupart des utilisateurs le remarquent. En pratique, de nombreuses équipes constatent que les utilisateurs signalent encore les problèmes les premiers, tandis que l'équipe est ensevelie sous des alertes que personne ne traite.

La différence entre les deux expériences tient à la conception. Un dispositif de surveillance qui lève une alerte à chaque seuil franchi apprend à ses destinataires à ignorer les alertes. Wikipedia décrit cela comme la fatigue d'alarme, un phénomène d'abord étudié dans les hôpitaux, où le personnel exposé à trop d'alarmes se désensibilise et manque les importantes. Un dispositif qui mesure ce que vivent les utilisateurs, n'alerte que lorsqu'une action est nécessaire et donne du contexte à l'intervenant transforme la surveillance en système d'alerte précoce.

La surveillance a aussi un rôle plus large que la détection des défaillances. Elle fournit les données pour la planification de capacité, pour le travail sur la performance, pour vérifier qu'une mise en production est saine et pour décider quoi améliorer. Ce sujet décrit le vocabulaire et les pratiques qui distinguent une surveillance utile du bruit. Il est étroitement lié à la gestion des incidents (Sujet 3.2 — Gestion des incidents), à la disponibilité et à la capacité (Sujet 3.11 — Disponibilité, capacité et performance) et à l'observabilité (Sujet 7.4 — Observabilité et télémétrie).

## Concepts clés

**Surveillance.** Collecter, traiter et utiliser des données sur l'état des services et de leurs composants. Wikipedia décrit la surveillance des systèmes et la surveillance des réseaux comme les pratiques qui consistent à observer les systèmes pour y déceler des défauts et mesurer la performance. La surveillance répond à des questions connues : est-ce en marche, est-ce rapide, est-ce plein ?

**Événement.** Dans ITIL 4, tout changement d'état ayant une importance pour la gestion d'un service ou d'un autre élément de configuration. Les événements peuvent être informatifs, un avertissement ou une exception. Beaucoup d'événements sont normaux et n'exigent aucune action ; la pratique consiste à décider lesquels en exigent.

**Alerte.** Une notification qu'un événement requiert de l'attention. Tous les événements ne devraient pas devenir des alertes. Une bonne alerte dit à une personne que quelque chose exige une action maintenant, ce qui ne va pas et où regarder.

**Fatigue d'alarme.** La perte de sensibilité aux alertes quand il y en a trop ou que trop sont fausses. Voir l'article de Wikipedia sur la fatigue d'alarme. Parmi les signes : des alertes acquittées sans être lues, des canaux mis en sourdine et des incidents découverts tard. C'est un problème de conception, non de discipline.

**Métriques, journaux et traces.** Trois types courants de télémétrie. Les métriques sont des mesures numériques dans le temps, comme le débit de requêtes ou l'usage de la mémoire. Les journaux sont des enregistrements horodatés d'événements. Les traces suivent une requête à travers les parties d'un système distribué. Les articles de Wikipedia sur la télémétrie et la gestion des journaux décrivent des idées générales. Ensemble, ils soutiennent à la fois la surveillance et l'investigation plus poussée relevant de l'observabilité.

**Observabilité.** La capacité de comprendre l'état interne d'un système à partir de ses sorties. Wikipedia décrit l'observabilité en logiciel comme l'extension de la surveillance à des questions qu'on n'avait pas anticipées. Les deux se recoupent : la surveillance guette les défaillances connues ; l'observabilité aide à investiguer les inconnues. Voir le Sujet 7.4 — Observabilité et télémétrie.

**Symptômes et causes.** Un symptôme est ce que vivent les utilisateurs ou le service, comme des réponses lentes ; une cause est ce qui se trouve derrière, comme un disque plein. Alerter sur les symptômes vous dit que les utilisateurs sont touchés. Alerter sur chaque cause possible crée du bruit. De nombreuses équipes alertent sur les symptômes et utilisent des métriques au niveau des causes pour investiguer.

**Seuils et références.** Un seuil fixe, comme « processeur au-delà de 90 % », est simple et souvent faux, parce que les niveaux normaux varient avec le moment et la charge. Les références apprennent ce qui est normal à un moment de la journée et lèvent des alertes sur l'écart. L'article de Wikipedia sur la détection d'anomalies décrit l'idée et ses précautions.

**Corrélation d'événements.** Combiner des événements liés pour trouver le problème sous-jacent, de sorte que cent alertes issues d'un composant défaillant n'en fassent qu'une. Wikipedia décrit la corrélation d'événements. Elle peut être fondée sur des règles ou utiliser l'apprentissage automatique. Voir le Sujet 5.2 — AIOps.

**Surveillance synthétique et surveillance des utilisateurs réels.** La surveillance synthétique exécute des tests scriptés qui imitent les utilisateurs et vérifie régulièrement si un parcours fonctionne. La surveillance des utilisateurs réels enregistre l'expérience d'utilisateurs réels. Wikipedia décrit les deux. Les vérifications synthétiques détectent les pannes aux heures creuses ; les données d'utilisateurs réels montrent ce que les gens vivent effectivement.

**Gestion de la performance des applications.** Outils et pratiques pour surveiller la performance et la disponibilité des applications, y compris les temps de réponse et les taux d'erreur. Wikipedia décrit le domaine.

**Exploitabilité.** Chaque alerte devrait avoir une action définie, même si l'action est « consulter le runbook ». Si une personne ne peut pas dire quoi faire, l'alerte devrait être supprimée ou transformée en rapport. Voir le Sujet 3.9 — Gestion des connaissances.

**Orientation et escalade.** Les alertes vont aux personnes qui peuvent agir, selon des plannings d'astreinte, avec escalade en l'absence d'acquittement. Voir le Sujet 3.2 — Gestion des incidents.

**Gestion des événements et ITIL.** ITIL 4 décrit la « surveillance et gestion des événements » comme une pratique qui observe systématiquement les services et leurs composants, et consigne et rapporte certains changements d'état choisis. L'accent est mis sur la décision de savoir quels événements comptent et que faire pour chacun.

**Comment les angles s'articulent.** La surveillance est le versant rétroaction de la livraison continue : elle montre si un changement est sain. La pratique agile traite la qualité des alertes comme un élément du backlog. L'IA peut réduire le bruit, corréler des événements et résumer, sous relecture. L'automatisation peut agir sur les événements bien compris. L'analytique montre les tendances et le coût du bruit.

## Bonnes pratiques

1. **Alerter sur ce que ressentent les utilisateurs.** Commencez par les symptômes, comme les requêtes en échec, les pages lentes et les tâches en échec. Utilisez les métriques de cause pour le diagnostic, non pour l'alerte, sauf si une cause est un signe précoce fiable.
2. **Rendre chaque alerte exploitable.** Pour chaque alerte, écrivez ce qu'elle signifie, qui agit et ce qu'il fait d'abord. Reliez-la à un runbook. Supprimez les alertes sans action.
3. **Garder le volume faible.** Comptez les alertes reçues par chaque personne d'astreinte par quart et fixez une limite. Examinez chaque semaine les alertes les plus bruyantes et corrigez-les ou supprimez-les.
4. **Appeler pour l'urgence, ouvrir un ticket pour le reste.** N'utilisez un appel ou un bip que lorsque quelqu'un doit agir maintenant. Envoyez les autres signaux dans une file ou un rapport. Définissez clairement la différence.
5. **Utiliser les références avec précaution.** Là où le normal change avec le moment et la charge, utilisez des seuils tenant compte du temps ou une détection d'anomalies, et examinez-les. Ne faites pas confiance à un modèle que vous ne pouvez pas expliquer à ceux qui interviennent.
6. **Regrouper les alertes liées.** Corrélez les événements d'une même cause et supprimez les alertes en aval quand une dépendance tombe. Envoyez un seul message avec du contexte.
7. **Vérifier du point de vue de l'utilisateur.** Ajoutez des vérifications synthétiques pour les parcours clés et utilisez des données d'utilisateurs réels pour l'expérience. Un serveur peut être « en marche » alors que les utilisateurs ne peuvent pas se connecter.
8. **Surveiller la surveillance.** Testez que les alertes atteignent les gens, que le système d'appel fonctionne et qu'une défaillance silencieuse de la surveillance est elle-même détectée. Menez des tests de bout en bout occasionnels.
9. **Examiner après les incidents.** Demandez quelle alerte s'est déclenchée, laquelle aurait dû, et lesquelles étaient du bruit. Ajustez lors de la revue d'incident. Voir le Sujet 3.3 — Gestion des problèmes.
10. **Partager tableaux de bord et contexte.** Donnez aux développeurs, à l'exploitation et au support l'accès aux mêmes données et montrez l'effet des changements récents. Évitez les tableaux de bord que personne n'utilise.

## Questions à discuter avec votre équipe

**Quel est le dernier incident dont les utilisateurs nous ont informés avant notre surveillance, et pourquoi ?**
Cela révèle les angles morts. Regardez ce que les utilisateurs ont vu. Attendez-vous à des lacunes aux extrémités des parcours. Demandez ensuite de choisir une vérification visible par l'utilisateur à ajouter.

**Combien d'alertes nos personnes d'astreinte ont-elles reçues le mois dernier, et combien exigeaient une action ?**
Comptez ensemble. Si personne ne le sait, c'est un constat. Attendez-vous à une faible part d'alertes exploitables. Demandez ensuite de choisir les cinq alertes les plus bruyantes et de décider du sort de chacune.

**Quelles alertes ignorons-nous, et que se passerait-il si nous les supprimions ?**
Ignorer des alertes est un signe de fatigue. Demandez la dernière fois que chacune a compté. Demandez ensuite d'en supprimer ou d'en rétrograder une, avec une date de revue.

**Qui est réveillé pour quoi, et chacun convient-il que cela vaut la peine de le réveiller ?**
Convenez des critères d'appel. Attendez-vous à du désaccord, ce qui est utile. Demandez ensuite de rédiger une règle d'un paragraphe et de l'essayer pendant un mois.

**Comment saurions-nous si notre surveillance elle-même cessait de fonctionner ?**
Cela teste la méta-surveillance. Attendez-vous à du silence ou à une réponse vague. Demandez ensuite d'ajouter une vérification de pulsation ou une alerte de test quotidienne et de convenir de qui la surveille.

**Que voudrions-nous que l'IA fasse de nos alertes, et que doit rester une décision humaine ?**
L'IA peut regrouper des alertes, suggérer des causes et résumer le contexte. Elle peut aussi supprimer une vraie alerte. Demandez quelles actions exigent une approbation. Demandez ensuite de choisir un essai limité au regroupement et au résumé, avec revue de ce qu'elle a masqué.

## En pratique : un exemple de gestion des services

L'équipe des technologies d'exploitation d'un aéroport régional surveille la manutention des bagages, les systèmes d'enregistrement et les afficheurs d'information des vols. L'équipe de six personnes reçoit environ 400 alertes par jour. Le personnel d'astreinte dit jeter un coup d'œil aux notifications et les mettre le plus souvent en sourdine. Le mois dernier, la panne d'un commutateur réseau dans un terminal est passée inaperçue pendant 40 minutes, jusqu'à ce que des passagers se plaignent que les afficheurs étaient vides.

Le responsable de l'équipe passe une semaine à examiner les données. Sur 400 alertes quotidiennes, environ 350 viennent de 12 règles, comme des avertissements de disque sur des appareils qui se nettoient eux-mêmes et des battements d'interface sur un port inutilisé. Seules environ 15 par jour exigent une action humaine. Le responsable et l'équipe conviennent de trois changements. Ils suppriment ou rétrogradent les 12 règles bruyantes vers un rapport quotidien. Ils ajoutent deux vérifications synthétiques qui chargent la page d'affichage et l'écran d'enregistrement depuis chaque terminal toutes les minutes et alertent si l'une échoue deux fois de suite. Et ils mettent en place une corrélation pour qu'un commutateur défaillant produise une seule alerte nommant les afficheurs touchés, et non cent.

Au cours du mois suivant, les alertes d'astreinte tombent à environ 20 par jour, et la panne de commutateur suivante est détectée en trois minutes, avec un seul appel listant les terminaux touchés. Lors de la revue hebdomadaire, l'équipe trouve une alerte supprimée par la corrélation alors qu'elle n'aurait pas dû l'être, et corrige la règle.

Ce qui change : les gens font confiance aux appels et réagissent. Ce qui reste difficile : l'équipement du fournisseur de manutention des bagages envoie ses propres alertes dans un format que l'équipe ne peut pas filtrer, si bien qu'un peu de bruit subsiste ; quelques membres de l'équipe de nuit craignent que le rapport quotidien ne soit pas lu ; et personne n'a encore testé ce qui se passe si le système de surveillance lui-même tombe. Le responsable planifie un exercice et ajoute une alerte de test quotidienne.

## Quatre perspectives

### Équipes produit et de livraison

Intégrez les signaux : métriques, journaux et traces significatifs, et contrôles de santé qui reflètent les parcours des utilisateurs. Écrivez le runbook avec l'alerte. Observez les effets de chaque mise en production.

### Équipes de service et d'exploitation

Soyez responsables de la qualité des alertes. Examinez chaque semaine les alertes les plus bruyantes, protégez les gens de la surcharge et vérifiez que chaque appel a une action. Testez les chemins que prennent les alertes.

### Direction et gouvernance

Demandez le nombre d'alertes exploitables, non le nombre de moniteurs. Financez le temps pour corriger les alertes bruyantes. Traitez les appels répétés hors des heures comme un coût pour le personnel et pour la qualité.

### Clients et utilisateurs

Vous devriez apprendre les problèmes par le fournisseur avant de les remarquer, et savoir ce qui est touché. Signalez ce que vous voyez, avec les heures, et dites au fournisseur où la surveillance l'a manqué.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez les alertes et les tableaux de bord comme une partie du produit : améliorez-les par petites étapes après chaque incident et chaque mise en production. Examinez-les avec ceux qui interviennent. Attention : ajouter des moniteurs pour chaque nouvelle fonctionnalité sans retirer les anciens augmente le bruit.

### IA

L'IA peut apprendre les motifs normaux, regrouper des alertes liées, suggérer des causes probables et résumer une tempête d'alertes, avec un responsable et des décisions humaines. Testez-la sur des incidents passés. Attention : un modèle qui supprime des alertes peut masquer une défaillance rare mais réelle ; mesurez ce qu'il a supprimé et ce qui a été manqué. Voir le Sujet 5.2 — AIOps.

### Automatisation

Automatisez les réponses aux événements bien compris, comme le redémarrage d'un processus défaillant, ainsi que l'orientation et l'enrichissement des alertes, avec limites et journaux. Attention : une remédiation automatique qui réessaie indéfiniment peut masquer un système défaillant ou l'aggraver ; ajoutez des limites de débit et une escalade. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Suivez le volume d'alertes, la part exploitable, le délai d'acquittement et les incidents détectés par la surveillance par rapport à ceux détectés par les utilisateurs. Attention : les seuls comptes d'alertes peuvent être détournés en relevant les seuils jusqu'à ce que plus rien ne se déclenche ; vérifiez par rapport aux incidents. Voir le Sujet 7.4 — Observabilité et télémétrie et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Alerter sur tout.** Les gens mettent le canal en sourdine. Alertez sur les symptômes et supprimez le reste.
- **Des alertes sans action.** Les intervenants ne savent pas quoi faire. Reliez à un runbook ou supprimez l'alerte.
- **Seulement des seuils fixes.** De fausses alarmes aux heures chargées. Utilisez avec précaution des méthodes tenant compte du temps ou des références.
- **Les utilisateurs l'apprennent d'abord.** Des lacunes dans les vérifications visibles par l'utilisateur. Ajoutez la surveillance synthétique et des utilisateurs réels.
- **Pas de méta-surveillance.** La surveillance échoue silencieusement. Ajoutez une pulsation et des exercices.
- **Prolifération de tableaux de bord.** Personne ne les regarde. Gardez-en quelques-uns qui soutiennent les décisions.
- **Faire confiance à un modèle opaque.** Les intervenants ne peuvent pas expliquer ce qu'il a fait. Gardez règles et logique examinables.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Conception des alertes | Chaque seuil alerte | Quelques alertes clés | Alertes fondées sur les symptômes, exploitables, avec runbooks | Qualité des alertes mesurée et examinée chaque semaine | Alertes adaptées et corrélées entre services |
| Couverture | Serveurs seulement | Quelques applications | Parcours d'utilisateurs vérifiés par des tests synthétiques et des données d'utilisateurs réels | Couverture examinée après les incidents | Couverture cohérente dans tout le parc et chez les fournisseurs |
| Bruit | Écrasant | Conscient | Volume limité et examiné | Bruit mesuré et en baisse | Bruit géré par corrélation et automatisation sous supervision |
| Réponse | Manuelle | Appels à une équipe | Orientée avec escalade | Délai de réponse suivi | Actions sûres automatisées avec contrôle humain |

## Liste de contrôle

- [ ] Les alertes reposent sur des symptômes que ressentent les utilisateurs.
- [ ] Chaque alerte a une action définie et un runbook relié.
- [ ] Le volume d'alertes d'astreinte par quart est mesuré et limité.
- [ ] Nous examinons chaque semaine les alertes les plus bruyantes.
- [ ] Les parcours d'utilisateurs clés ont des vérifications synthétiques.
- [ ] Les alertes liées sont corrélées.
- [ ] Nous testons que les alertes atteignent les gens et qu'une défaillance de la surveillance est détectée.
- [ ] L'IA ou l'automatisation qui agit sur les alertes a un responsable, des limites et une revue.

## Invites d'IA

**Classer les alertes bruyantes.**

```text
Here is a list of alert rules with the number of times each fired last month and how many led to action: [paste].
Rank them by number of non-actionable firings, list the top ten, and give one question per rule to ask about whether to remove, change, or keep it. Do not recommend deleting any.
List what you are unsure of.
```

**Rédiger le texte d'une alerte.**

```text
The situation to alert on: [describe]. Who acts: [role]. The first checks they should make: [list].
Draft an alert title (under 80 characters) and a body (under 80 words) that says what is wrong, what users may be experiencing, and the first step, with a link placeholder for the runbook. Do not speculate about causes.
List what you are unsure of.
```

**Tester une règle de corrélation.**

```text
Here is a correlation rule: [describe]. Here is a list of recent events with timestamps and sources: [paste].
List which events the rule would group, which it would suppress, and any case where a real separate problem could be hidden. Do not propose a new rule.
List what you are unsure of.
```

## Compétences d'IA

- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour écrire l'action qui accompagne chaque alerte.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md) : à utiliser pour examiner des motifs inhabituels dans les métriques.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md) : à utiliser pour choisir des indicateurs d'alerte précoce.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md) : à utiliser pour concevoir des dispositifs d'astreinte soutenables.

## Sources principales

- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitre sur la surveillance des systèmes distribués, gratuit sur sre.google.
- Rob Ewaschuk, « My Philosophy on Alerting » (2013) : un court essai bien connu sur l'alerte fondée sur les symptômes.
- Wikipedia, « Alarm fatigue » et « Observability (software) » : des aperçus d'idées clés.
- PeopleCert, pages de certification ITIL : la description de la pratique de surveillance et de gestion des événements par le propriétaire.

## Références

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
