# Automatisation des runbooks et remédiation automatique

**L'automatisation des runbooks transforme une procédure documentée et testée en code qu'une personne ou une alerte peut déclencher, et la remédiation automatique permet à un signal de surveillance de le déclencher sans personne ; les deux ne sont sûres que pour des actions bien comprises et réversibles, avec des limites, des journaux, un arrêt manuel et un responsable qui examine la fréquence de leur déclenchement.**

## Pourquoi c'est important

Le travail d'astreinte a une forme. Une alerte se déclenche. Un ingénieur fatigué ouvre un runbook, suit une série d'étapes, redémarre quelque chose, vérifie que cela a marché et retourne dormir. Une semaine plus tard, la même alerte se déclenche, et les mêmes étapes sont suivies. À la dixième fois, quelqu'un dit : pourquoi une personne fait-elle cela ?

Il a raison. Répéter à la main une correction connue est lent, source d'erreurs et corrosif pour ceux qui le font. Les mêmes étapes, écrites en code, s'exécutent en quelques secondes, de la même façon à chaque fois, et laissent une trace. Wikipedia décrit les runbooks comme des compilations de procédures courantes qu'un opérateur exécute. Les rendre exécutables, et dans certains cas les faire s'exécuter d'elles-mêmes, est le passage de la documentation à l'automatisation.

Ce passage est aussi un danger. Un runbook lu par un humain passe par le jugement humain à chaque étape. Le code, non. Un redémarrage automatique erroné peut se répéter indéfiniment, ou faire tomber un service sain, ou masquer un problème plus profond jusqu'à ce qu'il soit bien pire. De nombreuses pannes ont été prolongées ou causées par une remédiation bien intentionnée qui a fait vite la mauvaise chose. Wikipedia décrit l'informatique autonomique, l'ancien objectif de systèmes qui se gèrent eux-mêmes, et la leçon pratique est que l'autonomie a besoin de limites.

Ce sujet décrit comment passer avec soin du document au script puis à l'action automatique. Il s'appuie sur la gestion des connaissances (Sujet 3.9 — Gestion des connaissances), la surveillance (Sujet 3.10 — Surveillance et gestion des événements), la gestion des incidents (Sujet 3.2 — Gestion des incidents) et la stratégie d'automatisation (Sujet 6.1 — Stratégie d'automatisation). Il se relie à l'exploitation par l'IA (Sujet 5.2 — AIOps) et aux agents qui agissent (Sujet 5.5 — IA agentique et supervision humaine).

## Concepts clés

**Runbook.** Une procédure documentée pour une tâche ou une situation opérationnelle précise et récurrente. Wikipedia décrit les runbooks. Un bon runbook comporte un déclencheur, des étapes numérotées, des résultats attendus, une étape de vérification et un chemin d'escalade. Voir le Sujet 3.9 — Gestion des connaissances.

**Automatisation des runbooks.** Mettre en œuvre un runbook sous forme de code qui exécute tout ou partie de ses étapes, généralement déclenché par une personne depuis une console ou une commande de conversation, ou par un événement système. Elle garde la logique du runbook, avec l'avantage de la rapidité, de la cohérence et des traces.

**Remédiation automatique.** Une action corrective automatique en réponse à une alerte ou un événement, sans qu'une personne la lance. Les exemples comprennent redémarrer un processus défaillant, vider un répertoire temporaire plein, étendre un groupe de travailleurs ou basculer vers un système de secours. L'article de Wikipedia sur l'informatique autonomique décrit comme un objectif des systèmes qui détectent et corrigent leurs propres défauts. En pratique, la remédiation automatique couvre un ensemble étroit de défauts bien compris.

**Une progression.** Les équipes passent couramment par des étapes : un runbook écrit ; un runbook avec des scripts qu'une personne exécute ; un runbook qu'une personne déclenche d'une seule commande, le script rassemblant d'abord des contrôles ; une alerte qui propose l'action et demande l'approbation ; et une alerte qui exécute seule l'action dans des limites. Chaque étape a besoin de preuves de la précédente. Ne sautez pas d'étapes pour des actions aux conséquences réelles.

**Ce qui se prête à une action automatique.** Un défaut courant, dont la cause et la correction sont bien comprises, dont la correction est sûre et réversible, et dont le symptôme l'identifie de façon fiable. Des exemples sont un travailleur sans état bloqué ou un répertoire de journaux qui se remplit. Les mauvais candidats comprennent tout ce qui supprime des données, change des accès ou dépend d'un jugement sur l'impact métier.

**Conditions de sécurité.** Avant d'agir, vérifiez que la situation correspond vraiment : l'alerte est actuelle, le service est dans l'état attendu, aucun déploiement ni aucune maintenance n'est en cours et l'action ne vient pas de s'exécuter. Après avoir agi, vérifiez le résultat. Wikipedia décrit l'essai à blanc (dry run), une répétition qui montre ce qui se passerait sans le faire ; c'est un mode utile pour les nouvelles automatisations.

**Limites.** Plafonnez combien de fois une action peut s'exécuter sur une période, combien d'instances elle peut toucher à la fois et combien de temps elle peut durer. Wikipedia décrit la limitation de débit. Une limite transforme un emballement en événement borné, et dépasser une limite devrait appeler une personne.

**Coupe-circuits et recul.** Si une action automatisée échoue à répétition ou se déclenche à répétition, arrêtez-vous et escaladez au lieu de réessayer indéfiniment. Wikipedia décrit le patron du coupe-circuit (circuit breaker), dans lequel des échecs répétés déclenchent un interrupteur qui arrête les tentatives suivantes pendant un temps. Ajoutez des pauses entre les reprises et une hystérésis, décrite sur Wikipedia, pour éviter les oscillations entre états.

**Idempotence.** Une action qu'on peut répéter sans danger. Wikipedia décrit l'idempotence. Redémarrer un service alors qu'il est déjà en cours de redémarrage ne devrait pas provoquer une seconde tempête de redémarrages. Concevez des actions qui vérifient d'abord l'état.

**Chiens de garde et rétablissement intégré.** Les plateformes fournissent leurs propres mécanismes de rétablissement : superviseurs de processus qui redémarrent les services plantés, plateformes de conteneurs qui remplacent les instances défaillantes et minuteries de surveillance (watchdog), décrites sur Wikipedia, qui réinitialisent un système bloqué. Préférez les mécanismes intégrés aux scripts sur mesure là où ils conviennent, et comprenez ce qu'ils font.

**Bascule et mise à l'échelle.** La bascule automatique vers un système de secours et la mise à l'échelle automatique de la capacité sont des formes de remédiation automatique que les plateformes fournissent souvent. Wikipedia décrit la bascule (failover) et la mise à l'échelle automatique. Elles ont aussi besoin de tests et de limites, car elles peuvent aggraver les choses : une bascule déclenchée par un bref incident peut interrompre un service sain.

**Masquer des problèmes.** Une automatisation qui corrige discrètement un défaut peut cacher une cause qui s'aggrave. Si un service est redémarré toutes les heures, le redémarrage est le symptôme d'un problème à corriger. Suivez la fréquence de déclenchement de chaque automatisation et traitez un taux croissant comme un problème à investiguer. Voir le Sujet 3.3 — Gestion des problèmes.

**Journaux, audit et notification.** Chaque action automatique devrait consigner ce qui l'a déclenchée, ce qu'elle a vérifié, ce qu'elle a fait et le résultat, et prévenir l'équipe responsable. Une automatisation silencieuse érode la compréhension du système. Wikipedia décrit les pistes d'audit en général.

**Tests.** Testez les automatisations sur des défauts réalistes dans un environnement sûr, y compris des cas où les contrôles devraient arrêter l'action. Wikipedia décrit l'ingénierie du chaos, la pratique consistant à injecter délibérément des défaillances, qui peut aussi tester si la remédiation se comporte correctement. Voir le Sujet 3.12 — Gestion de la continuité des services.

**Responsabilité et revue.** Chaque automatisation a un responsable, vit en gestion de versions avec revue et figure dans un registre. Examinez régulièrement la fréquence de son déclenchement, son succès et si la cause sous-jacente devrait être corrigée.

**Accès et sécurité.** L'outillage de remédiation a du pouvoir sur la production. Donnez-lui sa propre identité avec les permissions étroites que chaque action exige, et protégez le code et les déclencheurs contre la falsification. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Compétences humaines.** Si l'automatisation traite les défauts courants, les gens risquent de perdre le sens du système. Gardez les runbooks lisibles, répétez l'exploitation manuelle et incluez les automatisations dans les journées d'exercice. Voir le Sujet 6.1 — Stratégie d'automatisation.

**Comment les angles s'articulent.** Ce sujet est l'angle automatisation au point d'exploitation. La pratique agile suggère de monter la progression par petites étapes avec une revue après chaque incident. L'IA peut suggérer des actions et sélectionner des runbooks, dans les limites décrites ici. L'analytique mesure les taux de déclenchement, le succès et les problèmes masqués.

## Bonnes pratiques

1. **Commencer par un bon runbook.** Écrivez, testez et utilisez d'abord la procédure à la main. Automatiser une procédure qui ne marche pas ne fait que casser plus vite.
2. **Choisir soigneusement les candidats.** Cherchez des corrections fréquentes, bien comprises, sûres et réversibles avec un signal fiable. Classez par temps d'astreinte gagné et par risque.
3. **Gravir l'échelle.** Passez du script au déclenchement en une commande, puis à l'action proposée avec approbation, puis à l'action automatique seulement à mesure que les preuves s'accumulent. Consignez la décision à chaque étape.
4. **Vérifier avant et après.** Contrôlez que la situation correspond, qu'aucune activité conflictuelle n'est en cours et que l'action a fonctionné. Arrêtez-vous et escaladez si un contrôle échoue.
5. **Fixer des limites et un coupe-circuit.** Plafonnez fréquence, périmètre et durée. Si une action se déclenche trop souvent ou échoue deux fois, arrêtez-vous et appelez une personne.
6. **Rendre les actions idempotentes et réversibles.** Vérifiez d'abord l'état et écrivez le chemin du retour. Testez les deux.
7. **Journaliser, notifier et rendre visible.** Consignez chaque action automatique, prévenez l'équipe responsable et montrez les taux de déclenchement sur un tableau de bord.
8. **Corriger la cause.** Comptez la fréquence de déclenchement de chaque automatisation et ouvrez un problème quand le taux est élevé ou croissant. Traitez l'automatisation comme un pont vers une correction, non comme un substitut.
9. **Tester dans des conditions sûres.** Répétez avec des défauts réalistes et des cas limites, y compris ceux qui devraient être refusés. Incluez les automatisations dans les journées d'exercice.
10. **Désigner un responsable et réexaminer.** Nommez un responsable, gardez le code en gestion de versions avec revue, enregistrez chaque automatisation et examinez chaque trimestre lesquelles garder, changer ou retirer.

## Questions à discuter avec votre équipe

**Quelles alertes corrigeons-nous de la même façon à chaque fois, et combien de temps prend chacune ?**
Utilisez les données d'incidents et d'alertes. Attendez-vous à une poignée qui explique l'essentiel des appels. Demandez ensuite d'en choisir une et de vérifier que son runbook est exact.

**Que pourrait-il mal se passer si cette correction s'exécutait alors qu'elle ne le devrait pas ?**
Imaginez le mauvais déclencheur ou la mauvaise cible. Attendez-vous à quelques cas désagréables. Demandez ensuite d'ajouter un contrôle ou une limite pour chacun.

**Comment saurions-nous que l'automatisation masquait un problème grandissant ?**
Demandez ce que nous verrions. Attendez-vous à « rien ». Demandez ensuite de convenir de compter les déclenchements et de fixer un seuil pour ouvrir un problème.

**Quel est le dommage maximal qu'une seule exécution pourrait causer, et comment l'arrêterions-nous ?**
Nommez le périmètre. Attendez-vous à de l'incertitude. Demandez ensuite de fixer un plafond et de répéter un arrêt.

**Quand avons-nous accompli cette tâche à la main pour la dernière fois, et chacun d'astreinte saurait-il encore le faire ?**
Demandez la dernière fois. Attendez-vous à « il y a longtemps ». Demandez ensuite de planifier une répétition.

**Où l'IA pourrait-elle proposer ou choisir une remédiation, et que doit encore approuver une personne ?**
L'IA peut faire correspondre des symptômes à des runbooks et suggérer des actions. Demandez quelles actions exigent une approbation et qui décide. Demandez ensuite de choisir un essai où l'IA propose et une personne approuve, avec des mesures de la fréquence à laquelle la suggestion était juste.

## En pratique : un exemple de gestion des services

L'équipe d'information des voyageurs d'une compagnie nationale de chemins de fer gère des afficheurs dans 400 gares, alimentés par un service de données. Environ deux fois par semaine, le processeur du flux se bloque et les afficheurs se figent sur d'anciens horaires. L'ingénieur d'astreinte est appelé, se connecte, vérifie que le processus est bloqué, le redémarre et confirme les mises à jour. Cela prend environ 20 minutes, le plus souvent la nuit.

L'équipe consigne le runbook, en l'affinant après l'avoir essayé sur deux incidents : confirmer l'alerte, vérifier qu'aucun déploiement n'est en cours, vérifier que le processus n'a rien écrit dans son journal depuis cinq minutes, redémarrer, attendre deux minutes, vérifier que l'horodatage de sortie est à jour et noter l'incident. Ils en font un script avec un mode d'essai à blanc, et un ingénieur le déclenche d'une seule commande de conversation pendant un mois. Il réussit à chaque fois.

Ils le relient ensuite à l'alerte en mode proposition : l'alerte publie les constats du script et un bouton qui demande à l'ingénieur d'astreinte d'approuver. Après un mois, chaque approbation était correcte et prenait moins de deux minutes. L'équipe convient de le laisser s'exécuter automatiquement sous des conditions strictes : seulement quand les contrôles passent, au plus deux fois par heure, jamais pendant un déploiement, et avec un appel à une personne si le second redémarrage ne règle rien. Il journalise chaque exécution et publie dans le canal de l'équipe.

L'automatisation se déclenche 19 fois les deux premiers mois. Une revue montre que le blocage survient plus souvent après une mise à jour nocturne d'un certain fournisseur de données, ce que l'équipe n'avait pas remarqué en traitant chaque appel isolément. Ils ouvrent un problème auprès du fournisseur. Lors d'une exécution, le coupe-circuit se déclenche après deux redémarrages en échec et appelle un ingénieur, qui découvre que le disque est plein, une cause que le runbook ne couvrait pas.

Ce qui change : les ingénieurs dorment pendant la plupart de ces événements, et les afficheurs se rétablissent en moins de trois minutes. Ce qui reste difficile : le fournisseur n'a pas encore corrigé le format des données ; l'équipe a remarqué que les nouveaux ingénieurs n'ont jamais fait la procédure manuelle et s'inquiète de leur compétence ; et l'étape supplémentaire de contrôle du disque n'a été ajoutée qu'après la surprise. Le responsable programme une répétition manuelle trimestrielle et ajoute le contrôle du disque au script.

## Quatre perspectives

### Équipes produit et de livraison

Construisez des services faciles à remédier : points de terminaison de santé, redémarrage sûr, opérations idempotentes et journaux clairs. Écrivez les runbooks avec le code et corrigez les causes que l'automatisation expose.

### Équipes de service et d'exploitation

Soyez responsables des runbooks et des automatisations : écrire, tester, limiter, journaliser et réexaminer. Gardez vivantes les compétences manuelles et traitez un déclenchement fréquent comme un problème à corriger.

### Direction et gouvernance

Soutenez la montée de l'échelle avec des preuves, et demandez les taux de déclenchement et des contrôles de problèmes masqués. Financez le temps pour corriger les causes. Méfiez-vous des affirmations de systèmes auto-réparateurs.

### Clients et utilisateurs

Vous devriez voir un rétablissement plus rapide et moins de pannes visibles. Si une correction automatique n'a pas fonctionné ou a causé un problème, dites-le au fournisseur afin que la règle puisse être corrigée.

## Agilité, IA, automatisation et analytique

### Agilité

Améliorez la remédiation après chaque incident : affinez le runbook, ajoutez un contrôle ou montez d'un barreau de l'échelle. Gardez les changements petits et relus. Attention : n'automatisez pas en bloc après une mauvaise nuit ; prenez une correction à la fois avec des tests.

### IA

L'IA peut faire correspondre des alertes à des runbooks, suggérer des étapes et rédiger de nouveaux runbooks à partir de notes d'incidents, avec approbation pour tout ce qui agit. Nommez un responsable et mesurez la justesse des suggestions. Attention : une IA qui choisit une action à partir d'une alerte inhabituelle peut mal choisir ; limitez-la à une liste d'actions approuvées. Voir le Sujet 5.5 — IA agentique et supervision humaine.

### Automatisation

Ce sujet est l'angle automatisation en exploitation : conditions de sécurité, limites, coupe-circuits, idempotence, journaux et revue. Attention : la remédiation automatique peut masquer des problèmes et les aggraver ; comptez les déclenchements, plafonnez les exécutions et escaladez en cas d'échec. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Suivez le taux de déclenchement par automatisation, le taux de succès, le temps de rétablissement, le nombre d'appels évités, les déclenchements de coupe-circuits et les problèmes ouverts à partir des motifs. Attention : les appels évités se gonflent facilement et peuvent masquer des taux de déclenchement croissants ; suivez les deux ensemble. Voir le Sujet 7.4 — Observabilité et télémétrie et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Automatiser un runbook non testé.** La correction est fausse, et à grande vitesse. Testez d'abord à la main.
- **Pas de limites.** Une boucle ou un faux départ se répète. Plafonnez les exécutions et utilisez un coupe-circuit.
- **Des problèmes cachés.** Les redémarrages masquent une cause. Comptez les déclenchements et corrigez les causes.
- **Pas de contrôles avant d'agir.** L'action frappe un système sain ou occupé. Vérifiez les conditions.
- **Une automatisation silencieuse.** Personne ne sait ce qu'elle a fait. Journalisez et notifiez.
- **Les compétences s'estompent.** Personne ne sait le faire à la main. Répétez.
- **Un outillage sur-privilégié.** Une seule compromission atteint tout. Utilisez des identités étroites.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Runbooks | Dans les têtes ou les courriels | Écrits pour les principales alertes | Runbooks testés reliés aux alertes | Qualité des runbooks examinée après les incidents | Runbooks entretenus comme du code entre services |
| Automatisation | Aucune | Scripts déclenchés par des personnes | Actions approuvées et testées avec propositions | Actions choisies exécutées automatiquement avec limites | Actions sûres choisies selon le risque avec contrôle humain |
| Sécurité | Aucune | Journalisation de base | Contrôles, limites, coupe-circuits et retour arrière | Sécurité testée et auditée | Sécurité intégrée aux plateformes partagées |
| Apprentissage | Pompiers | Revue occasionnelle | Taux de déclenchement suivis et causes ouvertes comme problèmes | Récurrence mesurée et réduite | Apprentissage partagé entre équipes et fournisseurs |

## Liste de contrôle

- [ ] Le runbook a été écrit, testé et utilisé à la main avant l'automatisation.
- [ ] Chaque automatisation a un déclencheur, des préconditions, une vérification et une escalade.
- [ ] Les actions sont idempotentes et réversibles.
- [ ] Des limites et un coupe-circuit plafonnent la fréquence et le périmètre.
- [ ] Chaque exécution est journalisée et l'équipe responsable est prévenue.
- [ ] Nous suivons la fréquence de déclenchement de chaque automatisation et ouvrons des problèmes à partir des motifs.
- [ ] Les automatisations sont en gestion de versions, relues et enregistrées avec des responsables.
- [ ] Nous répétons l'exploitation manuelle et testons les automatisations avec des défauts réalistes.

## Invites d'IA

**Transformer des notes d'incidents en brouillon de runbook.**

```text
Here are notes from three incidents that had the same fix: [paste, personal data removed].
Draft a runbook with: trigger, preconditions to check, numbered steps with expected results, verification, rollback, and escalation. Use only what the notes say; write [missing] for anything not stated.
List what you are unsure of.
```

**Trouver les lacunes de sécurité d'une automatisation.**

```text
Here is a description of an auto-remediation: trigger, checks, action, and limits: [paste].
List which of these are missing or unclear: precondition checks, post-action verification, rate limit, circuit breaker, idempotence, rollback, logging, notification, owner. Quote the text for each you consider present. Do not assume any.
List what you are unsure of.
```

**Examiner les données de déclenchement.**

```text
Here is a log of when each automation fired in the last month, with result: [paste].
Count firings per automation, list those that are rising or clustered at the same time of day, and list questions to find causes. Do not guess causes.
List what you are unsure of.
```

## Compétences d'IA

- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour écrire et tester la procédure avant de l'automatiser.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md) : à utiliser pour tester la remédiation face à des défauts réalistes.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md) : à utiliser pour trouver les causes que l'automatisation masque.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md) : à utiliser pour concevoir des dispositifs d'astreinte soutenables.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md) : à utiliser pour définir les rôles et l'escalade autour de l'automatisation.

## Sources principales

- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitres sur l'élimination du toil et sur l'automatisation, gratuits sur sre.google.
- Lisanne Bainbridge, « Ironies of Automation » (*Automatica*, 1983) : pourquoi l'automatisation change le rôle humain de façon surprenante.
- Wikipedia, « Runbook » et « Autonomic computing » : des aperçus du document et de l'aspiration.
- Wikipedia, « Circuit breaker design pattern » : un patron pour arrêter la défaillance répétée.

## Références

1. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
2. Autonomic computing — Wikipedia — https://en.wikipedia.org/wiki/Autonomic_computing
3. Circuit breaker design pattern — Wikipedia — https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern
4. Watchdog timer — Wikipedia — https://en.wikipedia.org/wiki/Watchdog_timer
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
7. Failover — Wikipedia — https://en.wikipedia.org/wiki/Failover
8. Autoscaling — Wikipedia — https://en.wikipedia.org/wiki/Autoscaling
9. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
10. Hysteresis — Wikipedia — https://en.wikipedia.org/wiki/Hysteresis
11. Dry run (testing) — Wikipedia — https://en.wikipedia.org/wiki/Dry_run_(testing)
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
