# IA agentique et supervision humaine

**Les agents d'IA qui agissent sur des systèmes, au lieu de seulement répondre à des questions, ont besoin d'un périmètre défini, de permissions de moindre privilège, de barrières d'approbation pour les actions importantes, d'une piste d'audit complète et d'un moyen testé de les arrêter ; l'autonomie devrait être accordée par petites étapes fondées sur des preuves, et la redevabilité reste à une personne nommée.**

## Pourquoi c'est important

La plupart des usages de l'IA en gestion des services jusqu'ici sont consultatifs. Un modèle lit un ticket et suggère une catégorie, ou rédige une réponse qu'une personne modifie. Si la suggestion est fausse, un humain s'en aperçoit avant que quoi que ce soit se passe. Un agent d'IA change cela. On lui donne des outils : il peut interroger des systèmes, mettre à jour des enregistrements, exécuter des commandes, ouvrir et fermer des tickets et envoyer des messages. Il planifie des étapes vers un objectif et les exécute, souvent avec peu d'intervention humaine entre l'instruction et le résultat.

Cela promet une vraie valeur. Un agent pourrait enquêter sur une alerte en récupérant des journaux, en vérifiant les changements récents et en publiant un résumé. Il pourrait traiter une demande courante de bout en bout : vérifier l'éligibilité, créer le compte, prévenir l'utilisateur. Il pourrait rédiger une correction et ouvrir une demande de fusion. Bien fait, il retire le travail courant à des personnes occupées et fonctionne à toute heure.

Cela change aussi la nature du risque. Une mauvaise réponse est un désagrément. Une mauvaise action peut supprimer des données, accorder un accès à la mauvaise personne, faire tomber un service ou envoyer un message à dix mille clients. La vitesse qui rend les agents utiles fait aussi se propager vite leurs erreurs. Et les agents sont exposés aux attaques : une instruction hostile cachée dans un ticket ou une page web peut détourner un agent qui a le pouvoir d'agir.

Ce sujet expose les idées principales pour utiliser les agents en sécurité en gestion des services : périmètre, permissions, approbation, audit et arrêt. Il s'appuie sur le Sujet 5.1 — L'IA dans la gestion des services et le Sujet 5.6 — Gouvernance, risques et conformité de l'IA, et se relie à l'automatisation (Sujet 6.1 — Stratégie d'automatisation et Sujet 6.6 — Automatisation des runbooks et remédiation automatique), à l'habilitation des changements (Sujet 3.4 — Habilitation des changements) et à la sécurité de l'information (Sujet 3.13 — Gestion de la sécurité de l'information).

## Concepts clés

**Agent d'IA.** Un système qui perçoit son environnement, prend des décisions et agit pour atteindre des objectifs. Wikipedia décrit les agents intelligents et les agents d'IA. Dans la pratique actuelle, un agent combine généralement un modèle de langage avec des outils et une boucle : le modèle décide quoi faire ensuite, appelle un outil, lit le résultat et continue jusqu'à décider qu'il a terminé ou atteindre une limite.

**Outils et permissions.** L'ensemble des actions qu'un agent peut accomplir, comme lire une base de connaissances, interroger la surveillance, créer un ticket ou redémarrer un service. Les outils sont souvent exposés par des interfaces de programmation (API). Wikipedia décrit les API. Des protocoles ouverts pour relier les modèles aux outils, comme le Model Context Protocol décrit sur Wikipedia, facilitent l'ajout d'outils, ce qui est utile et élargit aussi ce qu'un agent peut faire. Chaque outil porte son propre risque.

**Niveaux d'autonomie.** Une manière utile de penser le contrôle est celle de niveaux, de aucun à total. À une extrémité, l'agent ne fait que suggérer. Puis il prépare une action pour approbation. Puis il agit seul dans des limites étroites et rend compte. À l'autre extrémité, il agit largement sans revue. L'article de Wikipedia sur le contrôle de supervision décrit l'idée de supervision humaine de systèmes automatisés. Choisissez le niveau par tâche, d'après le coût d'une erreur et la capacité à l'annuler.

**Supervision humaine.** Une personne reste capable de comprendre, d'approuver, d'arrêter ou de corriger l'agent. Wikipedia décrit les systèmes avec humain dans la boucle. La supervision prend plusieurs formes : approuver les actions avant qu'elles aient lieu, les surveiller pendant qu'elles ont lieu, et les examiner ensuite. La bonne forme dépend de la vitesse et du risque. Une revue après coup ne sert à rien pour une action irréversible.

**Biais d'automatisation et tampon automatique.** Les gens ont tendance à approuver ce qu'un système propose, surtout quand les approbations sont fréquentes et se ressemblent. Wikipedia décrit le biais d'automatisation. Un contrôle que les gens approuvent sans lire n'est pas un contrôle. Concevez les approbations de façon à montrer ce qui va se passer, à être assez rares pour être lues et à être vérifiées par échantillonnage.

**Moindre privilège.** Un agent ne devrait avoir que les permissions nécessaires à sa tâche, pour la seule durée nécessaire. Wikipedia décrit le principe du moindre privilège. Utilisez des identités distinctes pour les agents, non un compte administrateur partagé, afin que les actions puissent être retracées et les permissions limitées.

**Le député confus (confused deputy).** Un problème de sécurité dans lequel un programme de confiance est amené à utiliser son autorité au nom de quelqu'un qui ne l'a pas. Wikipedia décrit le problème du député confus. Un agent qui peut agir avec un privilège élevé et prend ses instructions dans un texte de faible confiance, comme le message d'un utilisateur, en est un cas classique.

**Injection d'invite.** Des instructions hostiles cachées dans un contenu qu'un agent lit, comme un ticket, un courriel, une page web ou une ligne de journal. Wikipedia décrit l'injection d'invite. Comme le modèle ne peut pas distinguer de façon fiable les instructions des données, une source de contenu peut tenter de réorienter l'agent. La défense repose surtout sur la limitation de ce que l'agent peut faire, non sur la persuasion du modèle d'ignorer le mauvais texte.

**Bac à sable.** Exécuter les agents dans des environnements restreints, avec un accès limité aux systèmes et aux données. Wikipedia décrit les bacs à sable en sécurité informatique. Laissez un agent essayer des actions dans un environnement de test avant qu'il travaille en production.

**Réversibilité.** Préférez les actions qui peuvent être annulées : créer un ticket, ajouter une étiquette, proposer un changement. Traitez les actions irréversibles, comme la suppression, le paiement et l'envoi de messages à l'extérieur, comme exigeant une approbation ou comme interdites. Wikipedia décrit le retour arrière (rollback) en gestion de données.

**Limites et coupe-circuits.** Des plafonds sur le nombre d'actions qu'un agent peut accomplir par heure, ce qu'il peut dépenser, le nombre d'éléments qu'il peut modifier à la fois et la durée pendant laquelle il peut fonctionner. Wikipedia décrit la limitation de débit. Une limite transforme un emballement en erreur bornée.

**Interrupteur d'arrêt (kill switch).** Un moyen rapide et fiable d'arrêter un agent et de révoquer son accès. Wikipedia décrit les interrupteurs d'arrêt. Testez-le. Un interrupteur d'arrêt qui dépend de la coopération de l'agent lui-même, ou d'un système en panne, n'en est pas un.

**Piste d'audit.** Un enregistrement complet de ce qu'on a demandé à l'agent, de ce qu'il a décidé, des outils qu'il a appelés avec quelles entrées et de ce qui s'est passé. Wikipedia décrit les pistes d'audit. Sans elle, vous ne pouvez ni enquêter sur une erreur, ni démontrer la conformité, ni apprendre.

**Redevabilité.** Un agent n'est pas redevable ; les personnes le sont. Un responsable nommé répond de ce que fait l'agent, de ses permissions et de la revue de son enregistrement. Wikipedia décrit la redevabilité. Voir le Sujet 2.8 — Propriété des produits et des services.

**Systèmes multi-agents.** Plusieurs agents travaillant ensemble peuvent ajouter de la complexité, des erreurs en cascade et une responsabilité floue. Wikipedia décrit les systèmes multi-agents. Traitez séparément le périmètre et les permissions de chaque agent, et soyez prudent avec des agents qui donnent des instructions à d'autres agents.

**Séparation des tâches.** L'idée qu'aucune partie ne devrait pouvoir accomplir seule une action risquée s'applique aux agents. Un agent qui propose un changement ne devrait pas être celui qui l'approuve. Wikipedia décrit la séparation des tâches.

**Comment les angles s'articulent.** Les agents se situent là où l'IA rencontre l'automatisation. La pratique agile suggère de commencer petit et d'élargir l'autonomie par étapes avec des preuves. L'analytique mesure ce que font les agents et ce qu'ils font de travers. La gouvernance (voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA) fixe les règles.

## Bonnes pratiques

1. **Définir le périmètre par écrit.** Énoncez à quoi sert l'agent, ce qu'il peut faire, ce qu'il ne peut jamais faire et quelles données il peut toucher. Gardez-le étroit au début.
2. **Donner à chaque agent sa propre identité.** Utilisez un compte distinct avec un minimum de permissions, limité à sa tâche, et faites tourner ou expirer les identifiants. Ne réutilisez pas un compte d'administrateur humain.
3. **Choisir le niveau d'autonomie selon le risque.** Laissez d'abord l'agent suggérer, puis agir sur des tâches à faible risque et réversibles, et exigez une approbation pour tout ce qui est important ou irréversible. Consignez les niveaux pour chaque tâche.
4. **Concevoir des approbations que les gens lisent.** Montrez l'action proposée, la raison, les preuves et l'effet. Gardez les approbations assez rares pour être lues et échantillonnez les éléments approuvés pour en vérifier la qualité.
5. **Tester d'abord dans un bac à sable.** Exécutez l'agent contre une copie sûre avec des cas réalistes, y compris adverses, avant qu'il touche la production.
6. **Traiter les entrées comme non fiables.** Ne laissez pas le contenu de tickets, de courriels ou du web conférer de l'autorité. Limitez les outils disponibles quand l'agent traite du contenu non fiable.
7. **Plafonner le rayon d'explosion.** Fixez des limites au nombre d'actions, à l'ampleur du changement, à la dépense et au temps. Faites d'une action en masse une étape distincte et approuvée.
8. **Tout journaliser et l'examiner.** Gardez la piste complète, stockez-la là où l'agent ne peut pas l'altérer et examinez régulièrement des échantillons. Alertez sur les motifs inhabituels.
9. **Construire et tester l'interrupteur d'arrêt.** Rendez-le rapide, indépendant de l'agent et connu des personnes d'astreinte. Répétez-le.
10. **Élargir l'autonomie lentement.** N'en accordez davantage qu'après une période de bons résultats, avec l'approbation d'un responsable nommé et un taux d'erreur mesuré. Réduisez-la quand des problèmes surviennent.

## Questions à discuter avec votre équipe

**Quelle est la pire chose que cet agent pourrait faire avec les permissions que nous prévoyons de lui donner ?**
Parcourez les permissions, outil par outil. Attendez-vous à de l'inconfort. Demandez ensuite de retirer ou de restreindre toute permission dont nous n'accepterions pas le pire cas.

**Lesquelles de ses actions pouvons-nous annuler, et lesquelles non ?**
Listez-les. Attendez-vous à quelques actions irréversibles que l'on croyait sûres. Demandez ensuite d'exiger une approbation pour chaque action irréversible.

**Comment les approbateurs sauront-ils ce qu'ils approuvent, et à quelle fréquence verront-ils une demande ?**
Imaginez l'approbateur un jour chargé. Attendez-vous à des demandes longues qui se ressemblent. Demandez ensuite de concevoir un résumé et une limite du volume d'approbations.

**Que faudrait-il qu'une personne mette dans un ticket ou un courriel pour que l'agent fasse quelque chose que nous ne voulons pas ?**
Essayez en attaquant. Attendez-vous à des surprises. Demandez ensuite de choisir des parades comme la restriction des outils lors de la lecture de contenu non fiable.

**Si nous devions l'arrêter tout de suite, qui le ferait, comment, et combien de temps cela prendrait-il ?**
Demandez les étapes et répétez. Attendez-vous à de l'incertitude. Demandez ensuite de rédiger une procédure d'arrêt d'une page et de la tester.

**Qui est responsable de cet agent, et que revoit-il chaque semaine ?**
Nommez la personne et la revue. Attendez-vous à des lacunes. Demandez ensuite d'attribuer la responsabilité et une revue hebdomadaire par échantillon avec des questions définies.

## En pratique : un exemple de gestion des services

L'équipe d'infrastructure d'une administration fiscale nationale veut un agent pour enquêter sur les alertes de production la nuit. Actuellement, un ingénieur d'astreinte est réveillé pour la plupart des alertes, passe 15 à 30 minutes à rassembler le contexte et constate souvent que la cause est un problème connu avec une correction documentée.

L'équipe conçoit l'agent en trois étapes. À l'étape un, l'agent a un accès en lecture seule : il peut interroger les métriques, les journaux, les enregistrements de changements récents et la base de connaissances, et publier un résumé dans le canal d'incident avec les preuves qu'il a utilisées. À l'étape deux, il peut aussi accomplir une petite liste d'actions réversibles, comme redémarrer un service sans état ou augmenter de deux instances un groupe de travailleurs, seulement lorsque l'alerte correspond à un runbook documenté, avec une limite de trois actions par heure et un message dans le canal après chacune. À l'étape trois, qui n'est pas encore approuvée, il serait autorisé à proposer des changements de configuration soumis à approbation humaine.

L'agent a son propre compte de service avec un accès en lecture seule à la production, plus les deux actions nommées. Il lit du texte de tickets et des journaux, qui pourraient contenir du contenu hostile ; lorsqu'il lit du texte libre, il ne peut donc appeler aucun outil d'action dans la même étape. L'enregistrement complet des demandes, des appels d'outils et des résultats de l'agent va dans un magasin de journaux distinct. Un ingénieur senior est responsable de l'agent, examine dix sessions chaque semaine et peut désactiver ses identifiants d'une seule commande, ce que l'équipe répète chaque mois.

Après deux mois à l'étape un, les ingénieurs d'astreinte jugent les résumés corrects dans 85 % des cas. Dans 10 %, ils manquent un changement pertinent parce que l'enregistrement du changement était incomplet, et dans 5 %, ils pointent le mauvais composant. L'étape deux commence avec un runbook. Le premier mois, l'agent redémarre un service trois fois, correctement. Lors d'un test avec un ticket forgé contenant une instruction cachée de porter un groupe à un nombre très élevé, la limite de débit et la règle d'action l'arrêtent.

Ce qui change : les ingénieurs sont réveillés moins souvent et arrivent avec un résumé et des preuves. Ce qui reste difficile : la dépendance de l'agent à des enregistrements de changements exacts révèle des lacunes de qualité des données ; les ingénieurs font parfois davantage confiance au résumé qu'à leurs propres vérifications ; et l'équipe de sécurité a demandé que la durée de conservation des journaux d'audit soit allongée et revue. Le responsable consigne cela et suspend l'étape trois jusqu'à ce que le taux d'erreur de l'étape deux soit mesuré sur un trimestre.

## Quatre perspectives

### Équipes produit et de livraison

Exposez des outils sûrs et étroits avec des permissions claires, des limites de débit et des journaux. Ne donnez pas aux agents un accès général à vos pipelines ou à vos données. Incluez les agents dans vos modèles de menaces.

### Équipes de service et d'exploitation

Soyez responsables du périmètre de l'agent, examinez son enregistrement et répétez son arrêt. Gardez les runbooks exacts, car les agents s'y fient. Signalez les erreurs et les quasi-accidents.

### Direction et gouvernance

Décidez quelle autonomie est acceptable pour chaque tâche et exigez un responsable nommé et une piste d'audit. Demandez des preuves d'essais étape par étape et soyez prêts à réduire l'autonomie. Ne vous fiez pas aux seules assurances de l'éditeur.

### Clients et utilisateurs

Vous devriez savoir quand un agent automatisé agit sur votre demande et avoir une voie vers une personne capable de corriger une erreur. Dites au fournisseur si une action automatisée était fausse.

## Agilité, IA, automatisation et analytique

### Agilité

Élargissez l'autonomie par petites étapes avec des preuves, examinez chaque étape avec les parties prenantes et gardez chaque mise en production petite. Attention : une itération rapide peut dépasser la revue de sécurité ; gardez une barrière pour chaque augmentation d'autonomie.

### IA

L'agent est un système d'IA avec un responsable, des cas de test et une surveillance, et il exige un soin particulier parce qu'il agit. Prémunissez-vous contre l'injection d'invite et l'excès de confiance. Attention : ne comptez pas sur des instructions disant au modèle d'être prudent comme contrôle principal ; comptez sur les permissions, les limites et l'approbation. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Les agents se relient à l'automatisation : ils sélectionnent et déclenchent des actions. Gardez les actions elles-mêmes déterministes et testées, avec leur propre validation, de sorte que le choix de l'agent soit limité à des options approuvées. Attention : une automatisation qui accepte des commandes libres d'un agent est aussi risquée que l'agent ; exposez des actions étroites et nommées. Voir le Sujet 6.6 — Automatisation des runbooks et remédiation automatique.

### Analytique

Mesurez les actions entreprises, les taux d'approbation, les dérogations, les erreurs trouvées en revue, le temps gagné et les quasi-accidents. Attention : un taux d'approbation élevé peut signifier de bonnes propositions ou un tampon automatique ; échantillonnez les éléments approuvés. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Des permissions étendues.** Un compte administrateur partagé est donné à l'agent. Utilisez une identité distincte de moindre privilège.
- **Des approbations que personne ne lit.** Des demandes fréquentes et vagues sont tamponnées. Rendez-les rares, claires et échantillonnées.
- **Un texte hostile oriente l'agent.** Le contenu de tickets ou de pages web donne des ordres. Restreignez les outils autour des entrées non fiables.
- **Pas de limites.** Une boucle ou une erreur s'exécute à la vitesse d'une machine. Plafonnez actions, dépenses et périmètre.
- **Pas de bouton d'arrêt.** Personne ne peut l'arrêter. Construisez et répétez un interrupteur d'arrêt.
- **Pas d'enregistrement.** Les incidents ne peuvent pas faire l'objet d'une enquête. Gardez une piste d'audit complète et protégée.
- **Une autonomie accrue par enthousiasme.** L'agent reçoit plus de pouvoir sans preuves. Élargissez par étapes avec des mesures.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Périmètre et permissions | Étendus ou flous | Essai étroit | Périmètre écrit, identité propre, moindre privilège | Périmètre et permissions examinés régulièrement | Permissions qui s'adaptent selon le risque avec approbation |
| Supervision | Aucune | Revue informelle | Niveaux d'autonomie et barrières d'approbation définis | Qualité des approbations échantillonnée et mesurée | Supervision ajustée d'après les preuves entre agents |
| Contrôles de sécurité | Aucun | Journalisation de base | Bac à sable, limites, interrupteur d'arrêt testés | Contrôles audités et exercés | Contrôles intégrés à la plateforme pour tous les agents |
| Redevabilité | Floue | Le constructeur en est responsable | Responsable nommé avec revue hebdomadaire | Le responsable examine mesures et incidents | Responsabilité coordonnée entre agents et équipes |

## Liste de contrôle

- [ ] L'agent a un périmètre écrit et un responsable nommé.
- [ ] Il utilise sa propre identité avec des permissions de moindre privilège.
- [ ] Les niveaux d'autonomie sont définis par tâche, avec approbation pour les actions importantes ou irréversibles.
- [ ] Les approbations montrent ce qui va se passer et sont échantillonnées pour la qualité.
- [ ] Nous l'avons testé dans un bac à sable, entrées adverses comprises.
- [ ] Des limites plafonnent actions, dépenses et périmètre.
- [ ] Son enregistrement complet est journalisé là où il ne peut pas l'altérer, et examiné.
- [ ] Nous avons un interrupteur d'arrêt et l'avons répété.

## Invites d'IA

**Tester le périmètre d'un agent.**

```text
Our agent's written scope is: [paste]. Its tools and permissions: [list].
List twenty scenarios, some inside the scope, some at the edge, and some that try to get the agent to act outside it or to use a tool in a harmful way, and for each state what the correct behavior is. Do not include real systems or data.
List what you are unsure of.
```

**Examiner un journal d'actions.**

```text
Here is a sample of an agent's action log, with identifiers removed: [paste].
List actions that look unusual in size, timing, or target, actions that did not match a documented runbook, and anything that looks like the agent following instructions from untrusted text. Quote each. Do not say whether the agent was right.
List what you are unsure of.
```

**Rédiger un message d'approbation.**

```text
The agent proposes this action: [describe]. The evidence it used: [list]. What would change if it were done: [describe]. How to undo it: [describe or write "not known"].
Write a clear approval request of under 100 words for a busy approver, stating what will happen, why, the risk, and how to undo it. Do not recommend approval.
List what you are unsure of.
```

## Compétences d'IA

- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques des agents, les responsables et les décisions.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour définir les actions qu'un agent peut entreprendre et quand.
- [security-testing](../../../../skills/security-testing/SKILL.md) : à utiliser pour tester les agents face à des entrées hostiles.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md) : à utiliser pour planifier les réponses quand un agent se comporte mal.
- [mlops](../../../../skills/mlops/SKILL.md) : à utiliser pour surveiller et versionner les modèles derrière les agents.

## Sources principales

- NIST, AI Risk Management Framework : une structure pour gouverner les risques de l'IA, y compris ceux des systèmes autonomes.
- OWASP, recommandations sur les risques des applications construites sur de grands modèles de langage (owasp.org) : y compris l'injection d'invite et l'agentivité excessive.
- Wikipedia, « AI agent » et « Prompt injection » : des aperçus de l'idée et d'un risque de sécurité majeur.
- Wikipedia, « Principle of least privilege » : le contrôle de base pour limiter les dégâts.

## Références

1. Intelligent agent — Wikipedia — https://en.wikipedia.org/wiki/Intelligent_agent
2. AI agent — Wikipedia — https://en.wikipedia.org/wiki/AI_agent
3. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
4. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
5. Confused deputy problem — Wikipedia — https://en.wikipedia.org/wiki/Confused_deputy_problem
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Sandbox (computer security) — Wikipedia — https://en.wikipedia.org/wiki/Sandbox_(computer_security)
8. Kill switch — Wikipedia — https://en.wikipedia.org/wiki/Kill_switch
9. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
10. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
11. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
12. OWASP — OWASP Foundation — https://owasp.org
