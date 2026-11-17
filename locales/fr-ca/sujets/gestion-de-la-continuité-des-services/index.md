# Gestion de la continuité des services

**La gestion de la continuité des services prépare une organisation à maintenir en fonctionnement ses services critiques, ou à les rétablir dans un délai convenu, après une perturbation grave ; elle fonctionne quand les objectifs de rétablissement découlent de l'impact sur l'activité, que les plans sont répétés et que les sauvegardes sont prouvées en les restaurant.**

## Pourquoi c'est important

La plupart des incidents sont petits : un disque défaillant, une mauvaise mise en production, un certificat expiré. Quelques-uns ne le sont pas. Un centre de données perd le courant pendant une journée. Une région du cloud tombe. Un rançongiciel chiffre les systèmes principaux. Un fournisseur s'effondre. Une pandémie tient le personnel éloigné de ses bureaux. De tels événements menacent l'organisation, pas seulement un service, et ils sont assez rares pour que les gens oublient de s'y préparer.

La préparation est une forme d'assurance avec une particularité : sa valeur n'apparaît que le jour où l'on en a besoin, et un plan qui n'a jamais été essayé ne fonctionnera probablement pas. Des sauvegardes jamais restaurées s'avèrent vides. Une bascule jamais répétée prend une journée au lieu d'une heure. Une liste d'appel mentionne des personnes qui sont parties. Les équipes qui se sont exercées trouvent les problèmes à l'exercice, pas pendant la crise.

Ce sujet explique comment décider quoi protéger, comment fixer des objectifs de rétablissement, comment planifier et répéter, et comment inclure raisonnablement l'IA et l'automatisation. Dans ITIL 4, la pratique s'appelle gestion de la continuité des services. Dans l'usage plus large, vous rencontrerez aussi la gestion de la continuité d'activité, la reprise après sinistre et la résilience. Elles se recoupent, et ce sujet décrit comment elles s'articulent. Il se relie à la disponibilité (Sujet 3.11 — Disponibilité, capacité et performance), à la gestion des incidents (Sujet 3.2 — Gestion des incidents) et à la sécurité de l'information (Sujet 3.13 — Gestion de la sécurité de l'information).

## Concepts clés

**Continuité des services.** Dans ITIL 4, le fait de veiller à ce que la disponibilité et la performance d'un service soient maintenues à un niveau suffisant en cas de sinistre. La pratique comprend l'évaluation des risques et des impacts, la planification du rétablissement et les répétitions.

**Continuité d'activité et reprise après sinistre.** La planification de la continuité d'activité, décrite sur Wikipedia, couvre la façon dont une organisation maintient en fonctionnement ses fonctions critiques, ou les reprend rapidement, pendant et après une perturbation. La reprise après sinistre est la partie informatique : restaurer les systèmes, les données et l'infrastructure. La continuité d'activité demande « comment continuer à servir nos clients ? » ; la reprise après sinistre demande « comment récupérer les systèmes ? ». ISO 22301 est une norme internationale pour les systèmes de management de la continuité d'activité, décrite sur Wikipedia ; sa relation avec ISO/IEC 20000 est traitée au Sujet 1.8 — Référentiels et normes de gestion des services.

**Analyse d'impact sur l'activité (BIA).** Une étude de ce qui arrive à l'organisation si chaque fonction ou service est indisponible pendant une durée donnée. Elle identifie quels services sont critiques et à quelle vitesse ils doivent être rétablis. L'analyse implique l'activité, pas seulement l'informatique, puisque seule l'activité connaît l'impact d'une heure ou d'un jour perdu.

**Objectif de délai de rétablissement (RTO).** Le délai maximal cible pour rétablir un service après une perturbation. Wikipedia le décrit sous la reprise après sinistre informatique. Il découle de l'analyse d'impact : si une heure d'indisponibilité coûte très cher, le RTO est court et la solution coûteuse.

**Objectif de point de rétablissement (RPO).** La quantité maximale acceptable de perte de données, mesurée en temps. Un RPO de 15 minutes signifie qu'après le rétablissement, au plus 15 minutes de données peuvent manquer. Il détermine la fréquence à laquelle les données doivent être copiées.

**Coûts et arbitrages.** Des RTO et des RPO plus courts coûtent plus cher : plus de redondance, plus de réplication, plus de tests. Montrez le coût de chaque option à ceux qui décident et consignez la décision. Voir le Sujet 4.5 — Gestion financière et FinOps.

**Sauvegarde et réplication.** Les sauvegardes sont des copies de données conservées pour les restaurer après une perte ou un dommage. La réplication maintient une seconde copie continuellement mise à jour ailleurs. Wikipedia décrit les deux. La réplication ne remplace pas la sauvegarde : si une corruption ou un chiffrement par rançongiciel est répliqué, la copie est endommagée aussi. Gardez au moins une sauvegarde qui ne peut pas être modifiée depuis l'environnement de production, et testez sa restauration.

**Sites et modèles de rétablissement.** Les options vont d'un site de secours toujours en fonctionnement, à un site qui peut être démarré en quelques heures, jusqu'à la restauration d'une sauvegarde dans un nouvel environnement. Les services cloud facilitent plusieurs modèles, comme recréer l'infrastructure à partir du code. Voir le Sujet 6.3 — Infrastructure as Code et GitOps. Wikipedia décrit les sites de sauvegarde.

**Dépendances.** Un service critique dépend d'autres : identité, réseaux, DNS, fournisseurs, certificats et personnes. Les plans de rétablissement doivent suivre ces dépendances et ordonner la restauration. De nombreux rétablissements ratés calent sur une dépendance oubliée, comme le système qui stocke les mots de passe nécessaires pour restaurer les autres.

**Plans et guides d'intervention.** Des instructions écrites et concises sur qui fait quoi, dans quel ordre, avec qui entrer en contact. Elles devraient être stockées là où elles peuvent être lues quand les systèmes sont en panne, y compris en copies hors ligne. Les rôles doivent être nommés, avec des suppléants.

**Exercices.** Les répétitions vont de la discussion d'un scénario à une simulation, puis à une bascule ou une restauration réelles. Wikipedia décrit l'ingénierie du chaos, dans laquelle des défaillances sont introduites délibérément et sous contrôle pour trouver les faiblesses. Commencez petit et en sécurité, et accroissez le réalisme avec le temps. Consignez ce qui s'est passé et corrigez ce que vous apprenez.

**Gestion de crise et communication.** Une perturbation majeure exige des décisions de direction, de la communication avec le personnel, les clients, les régulateurs et le public, et de la coordination entre fonctions. L'article de Wikipedia sur la gestion de crise décrit le domaine. Décidez à l'avance qui parle et comment. Voir le Sujet 3.2 — Gestion des incidents.

**Événements cyber.** Les rançongiciels et autres attaques sont désormais une cause majeure de perturbation grave. Wikipedia décrit le rançongiciel comme un logiciel malveillant qui chiffre les données et exige un paiement. Se rétablir d'une telle attaque exige des sauvegardes saines, l'isolement des systèmes touchés, la reconstruction d'une infrastructure de confiance et une coordination avec la sécurité. Vérifiez la loi et les conseils qui s'appliquent à vous, y compris sur le signalement ; ce guide ne donne aucun conseil juridique.

**Fournisseurs.** Votre continuité dépend de celle de vos fournisseurs. Interrogez-les sur leurs plans et incluez-les dans les exercices lorsque c'est possible. Voir le Sujet 3.14 — Gestion des fournisseurs.

**Comment les angles s'articulent.** La continuité est le lieu où l'itération agile rencontre la préparation : améliorez le plan après chaque exercice. L'IA peut aider à rédiger des plans et des scénarios, sous relecture, mais on ne peut pas compter sur elle pendant une crise. L'automatisation reconstruit les environnements et exécute les bascules. L'analytique éclaire l'analyse d'impact et suit les résultats des exercices.

## Bonnes pratiques

1. **Partir de l'impact sur l'activité.** Demandez à l'activité ce que coûte la panne de chaque service sur des minutes, des heures et des jours. Classez les services et fixez les RTO et RPO en conséquence. Revoyez l'analyse après un changement majeur.
2. **Protéger d'abord les quelques services critiques.** Concentrez l'effort sur les services dont la perte nuirait gravement à l'organisation. Prévoyez des dispositions plus légères pour les autres.
3. **Cartographier les dépendances.** Pour chaque service critique, listez ce dont il a besoin pour fonctionner et être restauré, y compris l'identité, le réseau, le DNS et les fournisseurs. Planifiez l'ordre du rétablissement.
4. **Garder une sauvegarde immuable et testée.** Gardez au moins une copie qui ne peut pas être modifiée ni supprimée depuis l'environnement de production, et restaurez-la régulièrement pour prouver qu'elle fonctionne.
5. **Écrire des plans courts et utilisables.** Placez rôles, premières étapes, contacts et points de décision sur quelques pages. Gardez des copies hors ligne et chez les personnes qui en ont besoin.
6. **Nommer les rôles et les suppléants.** Pour chaque rôle en situation de crise, nommez un titulaire et au moins un suppléant. Mettez la liste à jour quand les gens changent de poste.
7. **Répéter par étapes.** Commencez par la discussion d'un scénario, passez aux simulations, puis à des tests réels contrôlés de restauration et de bascule. Consignez les temps et les problèmes.
8. **Corriger ce que l'exercice trouve.** Traitez les constats comme des éléments du backlog avec responsables et dates. Vérifiez lors de l'exercice suivant qu'ils ont été traités.
9. **Inclure fournisseurs et clients.** Demandez aux fournisseurs critiques leurs dispositions de continuité et testez les connexions. Convenez avec les clients du service dégradé qu'ils peuvent accepter.
10. **Planifier les communications.** Préparez qui informe qui, par quels canaux, avec des modèles, y compris des canaux qui fonctionnent quand vos systèmes ne fonctionnent pas.

## Questions à discuter avec votre équipe

**Quels trois services nous feraient le plus de mal s'ils étaient indisponibles pendant une semaine, et comment le savons-nous ?**
Interrogez l'activité, pas seulement l'informatique. Attendez-vous à des réponses différentes, ce qui est un bon point de départ. Demandez ensuite d'organiser une brève discussion d'impact pour chacun des trois.

**Quand avons-nous restauré une sauvegarde pour la dernière fois, et combien de temps cela a-t-il pris ?**
Demandez la date et le résultat. Attendez-vous à « nous n'avons jamais essayé » ou « seulement un fichier de test ». Demandez ensuite de planifier une restauration complète d'un système important dans un environnement sûr.

**De quoi notre rétablissement dépend-il que nous n'avons pas testé, comme les systèmes d'identité, le DNS ou une personne ?**
Dessinez la chaîne d'un service. Cherchez les dépendances circulaires. Demandez ensuite de choisir une dépendance à tester.

**Si nos systèmes de communication habituels étaient en panne, comment nous joindrions-nous entre nous et joindrions-nous nos clients ?**
De nombreux plans supposent la messagerie et la conversation en ligne. Interrogez sur la liste d'appel et les canaux hors bande. Demandez ensuite de tester un arbre d'appel.

**Que ferions-nous la première heure d'une attaque par rançongiciel, et qui décide ?**
Menez une brève discussion de scénario. Attendez-vous à des désaccords sur l'isolement des systèmes et le contact avec les autorités. Demandez ensuite de rédiger un guide d'une page sur la première heure avec la sécurité.

**Où l'IA pourrait-elle nous aider à nous préparer ou à répondre, et où devons-nous nous appuyer sur des plans humains préparés ?**
L'IA peut rédiger des scénarios, vérifier les lacunes des plans et résumer des journaux. Pendant une panne, le service d'IA peut lui-même être indisponible. Demandez ce que le plan suppose. Demandez ensuite de vérifier que les étapes critiques ne dépendent pas d'un service d'IA.

## En pratique : un exemple de gestion des services

Les systèmes de salle de commande d'un distributeur régional d'électricité, qui montrent l'état du réseau aux opérateurs, doivent être rétablis dans les deux heures suivant une défaillance. Le plan de reprise après sinistre du distributeur le dit. Il a été rédigé il y a quatre ans et n'a été testé pour la dernière fois que sous forme d'exercice sur papier.

Un nouveau responsable de la continuité des services demande un test réel. L'équipe accepte de restaurer l'application de la salle de commande dans un environnement séparé à partir de la sauvegarde de la veille, avec le responsable de l'exploitation en observateur. La restauration prend onze heures au lieu de deux. Trois problèmes émergent : la sauvegarde inclut les fichiers de l'application mais pas sa base de données de configuration, détenue par une autre équipe ; les mots de passe requis pour la restauration sont stockés dans un coffre qui fait partie du même centre de données ; et la personne qui connaît les paramètres réseau du site de rétablissement est en congé long et n'a pas de suppléant.

L'équipe corrige cela en trois mois. Elle ajoute la base de données de configuration au calendrier de sauvegarde, crée un magasin d'identifiants de secours conservé hors ligne dans une enveloppe scellée et dans un compte cloud séparé, et forme deux ingénieurs supplémentaires au site de rétablissement. Un second test restaure l'application en 2 heures 40. Le troisième, avec un démarrage délibérément non annoncé, prend 1 heure 50.

Ce qui change : l'objectif est atteint en pratique, et le plan est un document que des gens ont utilisé. Ce qui reste difficile : le test a utilisé une copie des données de production et n'incluait pas les connexions aux équipements de terrain, qui ne peuvent être testées qu'avec le gestionnaire du réseau ; l'organisation n'a pas répété la perte du centre de données entier, seulement d'une application ; et le coût d'entretien du site de rétablissement est remis en cause chaque année. Le responsable tient le calendrier des exercices et présente les coûts à l'aune de l'analyse d'impact.

## Quatre perspectives

### Équipes produit et de livraison

Faites du rétablissement une partie de la conception : reconstruisez à partir du code, sauvegardez données et configuration, évitez les dépendances cachées. Participez aux exercices et corrigez ce qu'ils trouvent.

### Équipes de service et d'exploitation

Connaissez votre rôle et votre suppléant, gardez les runbooks à jour et répétez restaurations et bascules. Consignez le temps que les choses prennent réellement et dites-le aux responsables.

### Direction et gouvernance

Décidez des objectifs de rétablissement avec l'activité et financez ce qu'ils exigent. Participez aux exercices, décisions et communication compris. Demandez à voir les résultats des tests, pas seulement les plans.

### Clients et utilisateurs

Demandez quelles dispositions de continuité protègent les services sur lesquels vous comptez, et convenez du service dégradé que vous pouvez accepter. Gardez votre propre plan de secours pour les besoins critiques.

## Agilité, IA, automatisation et analytique

### Agilité

Améliorez la continuité par petites étapes : une dépendance, un test de restauration, une correction à la fois, examinés avec les parties prenantes. Attention : ne reportez pas tout le travail de continuité à un seul grand projet ; répétez tôt et souvent.

### IA

L'IA peut aider à rédiger des scénarios, à vérifier les lacunes des plans et à résumer les journaux après un exercice, une personne relisant. Nommez un responsable. Attention : un assistant d'IA peut être indisponible en cas de crise ou donner des instructions peu fiables ; gardez les procédures essentielles dans des documents simples et testés. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez les reconstructions d'environnements, la vérification des sauvegardes et la bascule, avec journaux et garde-fous, et testez-les régulièrement. Attention : l'automatisation peut propager les dégâts rapidement, par exemple en supprimant les sauvegardes avec les données de production ; protégez les systèmes de sauvegarde avec des identifiants et des contrôles séparés. Voir le Sujet 6.3 — Infrastructure as Code et GitOps.

### Analytique

Suivez la réussite des sauvegardes, les temps des tests de restauration par rapport au RTO, le RPO atteint, les constats d'exercice clos et la couverture des dépendances. Attention : un taux élevé de réussite des sauvegardes ne dit rien de la possibilité de restaurer les données ; comptez les restaurations. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Des plans jamais testés.** Ils échouent quand on en a besoin. Répétez et restaurez régulièrement.
- **Des sauvegardes jamais restaurées.** Elles sont vides ou incomplètes. Testez les restaurations et vérifiez le contenu.
- **Des dépendances cachées.** Le rétablissement cale sur l'identité ou le DNS. Cartographiez et testez les dépendances.
- **Des sauvegardes que les attaquants peuvent modifier.** Le rançongiciel les chiffre. Gardez une copie immuable.
- **Une planification réservée à l'informatique.** L'activité n'est pas impliquée. Menez une analyse d'impact avec les responsables métier.
- **Un plan qui ne vit que sur le système en panne.** Personne ne peut le lire. Gardez des copies hors ligne.
- **Pas de suppléants.** Une seule personne détient la connaissance. Nommez des suppléants et formez-les.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Impact et objectifs | Non définis | Services critiques listés | RTO et RPO fixés d'après l'impact sur l'activité | Objectifs examinés avec le coût et les résultats | Objectifs coordonnés dans l'entreprise et chez les fournisseurs |
| Sauvegarde et rétablissement | Sauvegardes non vérifiées | Sauvegardes exécutées | Restaurations testées et chronométrées | Performance de restauration suivie et améliorée | Rétablissement automatisé et testé en continu |
| Plans | Aucun ou périmés | Rédigés pour les principaux services | Plans concis avec rôles et suppléants nommés | Plans mis à jour après chaque exercice | Plans intégrés entre fonctions, fournisseurs et clients |
| Exercices | Aucun | Discussions sur papier | Simulations et restaurations réelles régulières | Constats suivis jusqu'à leur clôture | Exercices incluant des partenaires et des scénarios réalistes |

## Liste de contrôle

- [ ] Nous avons mené une analyse d'impact sur l'activité pour nos services critiques.
- [ ] Chaque service critique a un RTO et un RPO convenus avec son responsable.
- [ ] Les dépendances, identité et DNS compris, sont cartographiées.
- [ ] Au moins une sauvegarde est immuable et des restaurations ont été testées.
- [ ] Les plans sont courts, à jour et également stockés hors ligne.
- [ ] Les rôles et les suppléants sont nommés.
- [ ] Nous menons régulièrement des exercices et suivons les constats jusqu'à leur clôture.
- [ ] Les dispositions de continuité des fournisseurs sont connues et testées lorsque c'est possible.

## Invites d'IA

**Vérifier les lacunes d'un plan.**

```text
Here is our continuity plan for [service]: [paste]. Here is the list of its dependencies: [paste].
List dependencies that the plan does not mention, steps that rely on a person without a named deputy, and steps that assume a system that may be down. Do not rewrite the plan.
List what you are unsure of.
```

**Concevoir un exercice de scénario.**

```text
Our context: [type of organization, key services]. Scenario theme: [for example, ransomware, data center loss].
Draft a 90-minute discussion exercise with a timeline of events, six decision points, questions for each role, and what to record. Do not use real names or systems unless I give them.
List what you are unsure of.
```

**Résumer les résultats d'un test de restauration.**

```text
Here are the notes from a restore test: [paste with times and problems].
List what took longest, what failed, the dependencies discovered, and the actions to consider, with the owner role for each. Do not invent causes.
List what you are unsure of.
```

## Compétences d'IA

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md) : à utiliser pour planifier la poursuite des fonctions critiques.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md) : à utiliser pour planifier la restauration des systèmes et des données.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md) : à utiliser pour concevoir et mener des tests de rétablissement.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md) : à utiliser pour planifier la communication pendant une perturbation.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md) : à utiliser pour tester le comportement en cas de défaillance en toute sécurité.

## Sources principales

- ISO 22301, Security and resilience — Business continuity management systems : la norme internationale ; lisez l'édition actuelle auprès de l'éditeur.
- PeopleCert, pages de certification ITIL : la description de la pratique de gestion de la continuité des services par le propriétaire.
- Wikipedia, « Business continuity planning » et « IT disaster recovery » : des aperçus des idées et des termes.
- Wikipedia, « Chaos engineering » : la pratique consistant à tester délibérément la défaillance.

## Références

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
