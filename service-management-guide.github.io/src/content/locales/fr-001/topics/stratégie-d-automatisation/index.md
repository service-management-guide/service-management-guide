# Stratégie d'automatisation

**Une stratégie d'automatisation décide quoi automatiser et quoi ne pas automatiser, dans quel ordre, avec quels contrôles ; elle suit le principe d'ITIL « optimiser et automatiser » en simplifiant d'abord, en automatisant le travail répété et stable avec des journaux et un retour arrière, et en traitant chaque automatisation comme un produit qui a besoin d'un responsable et d'un entretien.**

## Pourquoi c'est important

L'automatisation est le plus ancien levier de l'exploitation technologique, et celui qu'on actionne le plus souvent sans plan. Quelqu'un écrit un script pour gagner une heure, et cela marche. Quelqu'un d'autre en écrit un autre. En deux ans, une équipe a des centaines de scripts, de tâches planifiées et de règles de flux de travail, écrits par des personnes parties depuis, compris par personne, et dont tout dépend. Une défaillance silencieuse de l'un d'eux fait tomber un service, et l'équipe apprend ce qu'elle avait automatisé en découvrant ce qui s'est arrêté.

L'erreur inverse est tout aussi courante. Une équipe se fixe un objectif d'« automatiser 80 % des tâches » et automatise des choses qui arrivent deux fois par an, ou qui dépendent du jugement, ou qui changent tous les mois. L'effort ne se rentabilise jamais, et l'automatisation doit être entretenue éternellement. Pendant ce temps, le travail qui aurait rapporté dix fois sa mise en automatisation reste manuel parce qu'il est ennuyeux et que personne n'a posé la question.

Une stratégie évite les deux. Elle choisit quoi automatiser d'après des preuves de retour, ordonne le travail pour que la simplification précède le script et traite le résultat comme quelque chose qui a un responsable et qu'on entretient. Elle compte aussi avec un coût humain réel : quand les machines traitent le courant, les gens restent avec les exceptions difficiles et moins d'occasions de pratiquer les bases. Ce sujet expose ces choix. Il est le point d'entrée de la Partie 6 et se rattache à l'automatisation des flux de travail (Sujet 6.2 — Automatisation et orchestration des flux de travail), à l'infrastructure as code (Sujet 6.3 — Infrastructure as Code et GitOps), aux pipelines (Sujet 6.4 — Pipelines et changements automatisés), au libre-service (Sujet 6.5 — Libre-service et traitement automatisé) et à l'automatisation des runbooks (Sujet 6.6 — Automatisation des runbooks et remédiation automatique). Son lien avec l'IA figure au Sujet 5.1 — L'IA dans la gestion des services.

## Concepts clés

**Automatisation.** L'usage de la technologie pour accomplir des tâches avec une moindre intervention humaine. Wikipedia décrit l'automatisation de façon large dans l'industrie. En gestion des services, elle va d'un script planifié à des flux de travail qui traversent des outils, jusqu'à des systèmes qui décident et agissent. Le mot couvre des choses très différentes ; nommez donc le type dans chaque discussion.

**Optimiser, puis automatiser.** Le principe directeur d'ITIL 4 « optimiser et automatiser » dit de veiller à ce que le travail soit aussi efficace que possible, puis d'utiliser la technologie pour faire davantage (voir le Sujet 1.5 — Les principes directeurs d'ITIL). L'ordre est délibéré. Automatiser un processus confus ou inutile fige sa confusion et son gaspillage et le rend plus difficile à changer. La pensée lean aboutit à la même vue (voir le Sujet 2.4 — Lean et Kaizen).

**Ce qui fait un bon candidat.** Cherchez un travail fréquent, bien compris, fondé sur des règles, sujet aux erreurs quand il est fait à la main et stable. Les descriptions de Wikipedia sur l'automatisation des processus métier et l'automatisation robotisée des processus (RPA) décrivent des cibles courantes, comme déplacer des données entre systèmes. Les mauvais candidats sont rares, changeants, ambigus ou dépendants du jugement ou de l'empathie.

**Retour sur l'automatisation.** Une règle approximative consiste à comparer le temps gagné par an, plus la valeur de moins d'erreurs et d'une réponse plus rapide, avec le coût de construction, d'exploitation et d'entretien de l'automatisation. Wikipedia décrit le retour sur investissement et l'analyse coûts-bénéfices. Incluez l'entretien : les automatisations cassent quand les systèmes autour d'elles changent. Énoncez les hypothèses et des fourchettes, car les chiffres sont des estimations.

**Où chercher.** Commencez par les données. L'exploration de processus (process mining), décrite sur Wikipedia, utilise des journaux d'événements pour montrer comment le travail circule réellement. Les données de tickets et de demandes montrent quelles tâches reviennent. Demandez à ceux qui font le travail ce qui les ennuie ou les frustre. Le principe de Pareto suggère qu'une petite part des types de tâches représente l'essentiel du volume.

**Niveaux d'automatisation.** De manuel, en passant par assisté (un outil prépare, une personne agit), à conditionnel (le système agit et une personne approuve), jusqu'à autonome dans des limites. Choisissez le niveau par tâche d'après le coût d'une erreur et la capacité à l'annuler. Voir le Sujet 5.5 — IA agentique et supervision humaine.

**Contrôles.** Toute automatisation a besoin d'un journal de ce qu'elle a fait et quand, de limites sur ce qu'elle peut toucher, d'un moyen de l'arrêter et d'un moyen d'annuler ses effets. Wikipedia décrit la conception à sécurité intégrée (fail-safe) : quand un système défaille, il devrait le faire de la manière qui cause le moins de tort. Voir le Sujet 3.4 — Habilitation des changements.

**L'automatisation comme produit.** Une automatisation a des utilisateurs, un responsable, un backlog, de la documentation, des tests et un cycle de vie. Sans responsable, elle se dégrade. L'article de Wikipedia sur la dette technique s'applique : des scripts écrits à la hâte et jamais entretenus deviennent des passifs. Voir le Sujet 2.8 — Propriété des produits et des services.

**D'abord des procédures standard.** Une procédure écrite et testée, comme un runbook ou une procédure opérationnelle standard (décrite sur Wikipedia), est la meilleure spécification d'une automatisation. Si vous ne pouvez pas écrire ce que fait la personne, vous n'êtes pas prêt à l'automatiser. Voir le Sujet 3.9 — Gestion des connaissances.

**Outils et plateformes.** Les options vont des scripts shell et des planificateurs comme cron, aux plateformes de flux de travail et d'orchestration, jusqu'à la RPA et aux plateformes à faible code. Wikipedia décrit chacune. Choisissez l'outil le plus simple qui soit maintenable et préférez les outils dotés de gestion de versions, de tests et d'audit intégrés. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

**Compétences et ironies de l'automatisation.** Dans un article célèbre de 1983, la chercheuse Lisanne Bainbridge a décrit des ironies de l'automatisation : quand l'automatisation traite l'essentiel d'une tâche, la personne reste avec les cas difficiles et rares, mais avec moins de pratique et moins de sens du système. Wikipedia décrit l'article. La leçon pratique est de faire continuer à pratiquer les gens, de leur montrer ce que fait l'automatisation et de concevoir les passages de relais pour qu'une personne puisse intervenir.

**Facteur bus et connaissance.** L'automatisation peut concentrer la connaissance chez son auteur. Wikipedia décrit le facteur bus. Relisez, documentez et partagez, pour que plus d'une personne puisse entretenir chaque automatisation.

**Sécurité.** Les automatisations détiennent des identifiants et ont du pouvoir. Une automatisation compromise est une cible attrayante. Donnez à chacune sa propre identité avec un minimum de permissions, stockez les secrets en sécurité et examinez les accès. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Personnes et confiance.** Le personnel peut craindre que l'automatisation menace ses emplois, ou qu'on lui reproche ses défaillances. Associez-le au choix de ce qu'il faut automatiser, dites comment le temps gagné sera utilisé et reconnaissez le travail de construction et d'entretien de l'automatisation. Voir le Sujet 8.3 — Changement organisationnel et adoption.

**Comment les angles s'articulent.** L'automatisation est le troisième angle. La pratique agile suggère d'automatiser par petites étapes et d'apprendre de chacune. L'IA ajoute un moyen de décider et de rédiger ; l'automatisation agit. L'analytique identifie les candidats et montre si l'automatisation a livré.

## Bonnes pratiques

1. **Partir des données et des difficultés.** Regardez les volumes de tickets et de demandes, l'exploration de processus lorsqu'elle est disponible, et ce que le personnel trouve fastidieux. Choisissez sur preuves, non selon la mode.
2. **Simplifier d'abord.** Supprimez les étapes et approbations sans valeur avant de les scripter. Demandez ce que serait le processus si vous repartiez de zéro.
3. **Écrire la procédure.** Documentez les étapes, entrées, sorties et exceptions. Testez la procédure en la faisant suivre par quelqu'un d'autre. Utilisez-la comme spécification.
4. **Estimer honnêtement le retour.** Comparez le temps gagné avec le coût de construction et d'entretien, avec des fourchettes. Comptez la réduction des erreurs et la rapidité là où elles comptent. Abandonnez les candidats qui ne se rentabilisent pas.
5. **Automatiser par petites étapes.** Commencez par une partie, comme la collecte de données pour une personne, puis étendez. Livrez souvent et apprenez.
6. **Choisir le niveau d'autonomie selon le risque.** Laissez les tâches à faible risque et réversibles s'exécuter seules avec des journaux, et gardez une personne dans la boucle pour les tâches importantes ou irréversibles.
7. **Intégrer journaux, limites et retour arrière.** Consignez chaque action, plafonnez ce qu'une exécution peut changer et écrivez le chemin du retour. Testez-le.
8. **Donner à chaque automatisation un responsable et un foyer.** Gardez le code en gestion de versions avec revue et tests, documentez-le et listez-le dans un registre avec son responsable et ce qui en dépend.
9. **Garder les compétences vivantes.** Montrez aux gens ce que fait l'automatisation, répétez le repli manuel pour les tâches importantes et faites tourner les gens sur les cas difficiles.
10. **Revoir et retirer.** Vérifiez régulièrement quelles automatisations sont utilisées et lesquelles échouent, corrigez-les ou retirez-les, et mesurez le bénéfice par rapport à l'estimation.

## Questions à discuter avec votre équipe

**Quelles tâches répétons-nous le plus souvent, et lesquelles voudrions-nous ne plus jamais refaire ?**
Demandez à tout le monde. Attendez-vous à la création de comptes, aux rapports et aux corrections de données. Demandez ensuite d'en choisir trois et d'estimer les heures par mois.

**Pour notre premier candidat, à quoi ressemblerait le processus si nous le simplifiions avant de l'automatiser ?**
Dessinez-le. Attendez-vous à des étapes que personne ne peut justifier. Demandez ensuite d'en supprimer une avant d'écrire du code.

**De quelles automatisations dépendons-nous déjà, qui est responsable de chacune, et que se passe-t-il si l'une échoue en silence ?**
Dressez une liste. Attendez-vous à des surprises et des orphelines. Demandez ensuite de nommer des responsables et d'ajouter un contrôle de défaillance.

**Quelles tâches devraient rester manuelles parce qu'elles exigent du jugement ou de l'empathie ?**
Discutez. Attendez-vous à un accord sur les sujets sensibles et à un désaccord à la marge. Demandez ensuite d'écrire la frontière et de dire qui peut la changer.

**Comment garderons-nous les compétences pour faire la tâche à la main si l'automatisation est indisponible ?**
Demandez la dernière fois que quelqu'un l'a fait manuellement. Attendez-vous à « il y a longtemps ». Demandez ensuite de planifier une répétition périodique.

**Comment utiliserons-nous le temps que l'automatisation libère, et l'avons-nous dit à l'équipe ?**
Cela bâtit la confiance. Attendez-vous à de l'incertitude et un peu de peur. Demandez ensuite de convenir de ce à quoi servira le temps gagné et de le dire ouvertement.

## En pratique : un exemple de gestion des services

Un registre national des naissances, des décès et des mariages emploie une petite équipe informatique de dix personnes qui soutient 600 agents. Un responsable a proposé d'« automatiser tout ce qui est possible » et dispose d'une liste de 120 tâches candidates. Le responsable des services soupçonne que la plupart ne se rentabiliseraient pas et demande un classement.

L'équipe passe deux semaines à collecter des données. À partir de six mois de tickets, elle constate que 70 % du volume relève de huit types de tâches, menés par les comptes de nouveaux arrivants, les réinitialisations de mots de passe, les modifications de boîtes aux lettres partagées et la production de rapports mensuels. Elle estime les heures par mois de chacune et demande aux personnes concernées ce qui ne va pas. Les comptes de nouveaux arrivants, à 40 heures par mois, comportent onze étapes manuelles dont trois sont en double et deux sont des approbations jamais refusées. Elle simplifie à huit étapes avant d'écrire quoi que ce soit.

Elle automatise par étapes. D'abord, un script rassemble l'information et crée les comptes, un technicien relisant le résultat. Après deux mois d'exécutions sans erreur, le script s'exécute sans surveillance pour les rôles standard, avec un journal et un contrôle quotidien, et un technicien traite les rôles non standard. Les réinitialisations de mots de passe passent par la voie en libre-service du système d'identité, que l'éditeur fournit. Le rapport mensuel, qui prend 12 heures, dépend de données de trois systèmes aux formats différents, et l'équipe décide de ne pas l'automatiser avant que les sources de données soient corrigées.

Chaque automatisation est enregistrée, avec un responsable, un dépôt et un retour arrière. Un technicien est désigné pour passer chaque trimestre par le traitement manuel, afin de garder la compétence. Le responsable convient que le temps gagné ira à un arriéré de mises à niveau en retard, et le dit lors d'une réunion d'équipe.

Ce qui change : environ 70 heures par mois sont libérées, et les nouveaux arrivants ont des comptes fonctionnels dès le premier jour. Ce qui reste difficile : le script doit être mis à jour chaque fois que la structure de l'annuaire change, ce qui est arrivé deux fois au premier trimestre ; deux techniciens sont les seuls à le comprendre ; et le responsable demande encore pourquoi les 110 autres candidats n'ont pas été traités. Le responsable des services montre les données et convient de revoir la liste chaque semestre.

## Quatre perspectives

### Équipes produit et de livraison

Construisez pour l'automatisation : exposez des interfaces claires, évitez les étapes manuelles dans la mise en production et le déploiement, et fournissez des runbooks que d'autres peuvent scripter. Soyez responsables des automatisations que vous créez.

### Équipes de service et d'exploitation

Connaissez vos tâches répétées, simplifiez-les et automatisez les stables avec journaux et retour arrière. Gardez vivantes les compétences manuelles et enregistrez ce que vous automatisez avec un responsable.

### Direction et gouvernance

Demandez des preuves de retour et des contrôles, non un nombre d'automatisations. Dites comment le temps gagné sera utilisé. Financez l'entretien et les compétences autant que la construction.

### Clients et utilisateurs

Vous profitez d'un service plus rapide et plus cohérent, et vous devriez toujours pouvoir joindre une personne pour les exceptions. Dites au fournisseur où l'automatisation n'a pas su traiter votre cas.

## Agilité, IA, automatisation et analytique

### Agilité

Automatisez par petits incréments, avec ceux qui font le travail, et examinez les résultats. Traitez le backlog d'automatisation comme une partie du backlog d'amélioration. Attention : la vitesse de livraison des automatisations peut dépasser la capacité à les entretenir ; limitez le travail en cours et retirez les anciennes.

### IA

L'IA peut aider à trouver des candidats en regroupant des tâches, à rédiger des scripts et des procédures, et à décider dans des limites quoi faire. Chaque automatisation assistée par l'IA a besoin du même responsable, des mêmes tests et des mêmes contrôles. Attention : les scripts générés peuvent contenir des erreurs ou des motifs peu sûrs ; relisez-les et testez-les comme tout autre code. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Ce sujet est l'angle lui-même : choisir, simplifier, construire avec des contrôles, avoir un responsable et réexaminer. Attention : l'automatisation concentre le pouvoir et masque la complexité ; gardez des journaux lisibles et donnez aux gens les moyens de la comprendre et de l'arrêter.

### Analytique

Utilisez les données de tickets, l'exploration de processus, les données de temps et d'erreurs, et les résultats après automatisation. Attention : les estimations d'heures gagnées sont souvent gonflées, et des mesures comme le « nombre d'automatisations » récompensent le volume ; suivez le temps réellement libéré, les erreurs et les défaillances. Voir le Sujet 7.6 — Analytique des processus et des flux de valeur et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Automatiser un fouillis.** La confusion est préservée. Simplifiez d'abord.
- **L'automatisation par objectif chiffré.** Les tâches sont choisies pour le compte. Choisissez selon le retour et le besoin.
- **Des scripts orphelins.** Personne n'en est responsable ni ne les comprend. Enregistrez, attribuez des responsables et examinez.
- **Pas de journaux ni de retour arrière.** Une défaillance ne peut être ni retracée ni annulée. Intégrez les deux.
- **Les compétences s'estompent.** Personne ne sait plus faire la tâche à la main. Répétez et faites tourner.
- **Un coût d'entretien caché.** L'automatisation casse à chaque changement voisin. Comptez l'entretien dans le retour.
- **Peur et secret.** Le personnel résiste. Associez-le et dites comment les gains seront utilisés.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Sélection | Scripts au cas par cas | Candidats listés | Candidats choisis d'après les données et le retour | Résultats comparés aux estimations | Portefeuille choisi et rééquilibré selon la valeur et le risque |
| Contrôles | Aucun | Un peu de journalisation | Journaux, limites et retour arrière par défaut | Contrôles testés et audités | Contrôles intégrés aux plateformes partagées |
| Responsabilité | Individus | Auteurs connus | Registre avec responsables, gestion de versions et revue | Entretien et défaillances suivis | Responsabilité coordonnée entre équipes |
| Personnes | Peur ou négligence | Conscience | Compétences maintenues et bénéfices partagés | Compétences et charge de travail examinées | Rôles et compétences planifiés avec l'automatisation dans l'organisation |

## Liste de contrôle

- [ ] Nous avons choisi les candidats d'après des données de volume, d'erreurs et d'effort.
- [ ] Nous avons simplifié chaque processus avant de l'automatiser.
- [ ] Chaque automatisation suit une procédure écrite et testée.
- [ ] Nous avons estimé le retour, entretien compris.
- [ ] Chaque automatisation a un responsable, une gestion de versions et une entrée de registre.
- [ ] Journaux, limites et retour arrière sont intégrés et testés.
- [ ] Nous gardons vivantes les compétences manuelles pour les tâches importantes.
- [ ] Nous avons dit à l'équipe comment le temps gagné sera utilisé.

## Invites d'IA

**Classer les candidats à partir des données de tickets.**

```text
Here is a summary of ticket categories with counts per month and average handling time: [paste].
Compute hours per month for each category, rank them, and for the top eight list questions to ask about whether the task is stable, rules-based, and safe to automate. Do not recommend automating any.
List what you are unsure of.
```

**Rédiger une spécification à partir d'une procédure.**

```text
Here is the written procedure for a task: [paste].
List the inputs, steps, decision points, outputs, and exceptions, and mark each step as "clear", "needs judgment", or "unclear". List questions to answer before automation. Do not write code.
List what you are unsure of.
```

**Examiner les contrôles d'une automatisation.**

```text
Here is a description of an automation: what it does, what it can change, who owns it, how it runs: [paste].
List missing controls from this set: logging, limits, rollback, stop switch, owner, permissions, tests, and failure alerts, quoting the description for each you consider present. Do not assume controls that are not stated.
List what you are unsure of.
```

## Compétences d'IA

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les étapes et les attentes avant d'automatiser.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md) : à utiliser pour estimer le retour d'une automatisation.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour écrire la procédure qui devient la spécification.
- [kaizen](../../../../skills/kaizen/SKILL.md) : à utiliser pour simplifier avant d'automatiser.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md) : à utiliser pour trouver les étapes qui valent d'être automatisées.

## Sources principales

- PeopleCert, pages de certification ITIL : la description des recommandations ITIL par le propriétaire, y compris « optimiser et automatiser ».
- Lisanne Bainbridge, « Ironies of Automation » (*Automatica*, 1983) : l'article classique sur l'automatisation et la compétence humaine.
- Betsy Beyer et autres (dir.), *Site Reliability Engineering* (2016), chapitre sur l'élimination du toil, gratuit sur sre.google.
- Wikipedia, « Automation » et « Business process automation » : des aperçus des idées.

## Références

1. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
2. Business process automation — Wikipedia — https://en.wikipedia.org/wiki/Business_process_automation
3. Robotic process automation — Wikipedia — https://en.wikipedia.org/wiki/Robotic_process_automation
4. Ironies of Automation — Wikipedia — https://en.wikipedia.org/wiki/Ironies_of_Automation
5. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Standard operating procedure — Wikipedia — https://en.wikipedia.org/wiki/Standard_operating_procedure
10. Fail-safe — Wikipedia — https://en.wikipedia.org/wiki/Fail-safe
11. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
