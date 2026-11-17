# Habilitation des changements

**L'habilitation des changements veille à ce que les changements apportés aux services soient faits en sécurité et rapidement ; elle évalue le risque, confie l'autorité aux personnes les plus proches du changement et déplace les contrôles courants dans le pipeline, en réservant la revue humaine aux changements où le jugement est nécessaire.**

## Pourquoi c'est important

Les changements causent des incidents. Une modification de configuration, une mise en production de code, un renouvellement de certificat, une règle de pare-feu : n'importe lequel peut faire tomber un service. La plupart des organisations l'apprennent à leurs dépens et réagissent par un contrôle : un formulaire, une approbation, une réunion, un gel. Le contrôle réduit une partie du risque et ajoute du retard, et le retard encourage à regrouper les changements en lots plus gros, qui sont plus risqués.

La forme traditionnelle du contrôle est le comité consultatif des changements (CAB), un groupe qui examine les changements proposés. Les comités peuvent apporter une vraie valeur quand ils portent un regard large sur les changements risqués. Ils deviennent aussi un goulot d'étranglement quand ils examinent chaque changement, y compris les changements courants qui ont réussi mille fois. Les recherches sur la livraison de logiciels rapportées dans le livre *Accelerate*, de Nicole Forsgren, Jez Humble et Gene Kim, ont constaté qu'une lourde approbation externe n'était pas associée à une meilleure stabilité et l'était à une livraison plus lente ; la revue par les pairs et les contrôles automatisés étaient associés à de meilleurs résultats. Les données proviennent d'enquêtes et ont leurs propres limites, mais la tendance est cohérente avec l'expérience de nombreuses équipes.

ITIL 4 a rebaptisé la pratique « habilitation des changements » (change enablement), pour signaler que le but est de permettre les changements bénéfiques en veillant à ce que les risques soient correctement évalués, d'autoriser les changements à avancer et de gérer le calendrier des changements. Ce sujet montre comment le faire avec des voies différentes pour des types de changement différents, et comment intégrer les preuves au travail. Il s'appuie sur la livraison continue (Sujet 2.2 — Livraison continue) et se relie à la gestion des mises en production (Sujet 3.5 — Gestion des mises en production et des déploiements) et à la gestion de la configuration (Sujet 4.4 — Gestion de la configuration).

## Concepts clés

**Changement.** Dans ITIL 4, l'ajout, la modification ou la suppression de tout ce qui pourrait avoir un effet direct ou indirect sur les services. Le périmètre est large : logiciels, infrastructure, configuration, documents, fournisseurs et processus. Les articles de Wikipedia sur la gestion du changement et sur le contrôle des changements décrivent l'idée en informatique et en ingénierie.

**Habilitation des changements et conduite du changement.** La « conduite du changement » (change management) désigne aussi le changement organisationnel, c'est-à-dire la dimension humaine de la transformation (voir le Sujet 8.3 — Changement organisationnel et adoption). L'« habilitation des changements » d'ITIL désigne le contrôle des changements apportés aux services et aux produits. Ce guide emploie le terme d'ITIL 4 pour la pratique décrite ici.

**Types de changement.** ITIL 4 en décrit trois :

| Type | Description | Voie typique |
|---|---|---|
| Standard | Faible risque, bien compris, préautorisé, répété | Suit une procédure documentée ; aucune approbation individuelle |
| Normal | Exige évaluation et autorisation | Évalué et autorisé par l'autorité de changement appropriée |
| Urgent | Doit être fait d'urgence, par exemple pour rétablir un service ou corriger une vulnérabilité critique | Autorisation accélérée avec revue ensuite |

**Autorité de changement.** La personne ou le groupe qui autorise un changement. ITIL 4 souligne que l'autorité devrait être confiée au niveau approprié au risque, qui est souvent, pour les changements à faible risque, un pair ou l'équipe elle-même. Les changements à plus haut risque montent plus haut. L'article de Wikipedia sur le comité consultatif des changements décrit le modèle traditionnel.

**Évaluation du risque.** Estimer la probabilité et l'impact de l'échec du changement. Les facteurs comprennent la taille du changement, la criticité du service, le nombre d'utilisateurs, les tests effectués, la capacité de retour arrière et les antécédents de changements semblables. Les articles de Wikipedia sur l'évaluation et la gestion des risques décrivent des méthodes générales. Une liste de contrôle simple et cohérente fonctionne mieux qu'un score élaboré auquel personne ne croit.

**Calendrier des changements.** Un calendrier montrant les changements planifiés, afin de voir les conflits et les collisions avec des périodes critiques de l'activité. Pour les équipes qui livrent plusieurs fois par jour, le calendrier se réduit aux exceptions, comme les périodes de gel, et aux grands changements qui exigent de la coordination.

**Revue par les pairs.** Une autre personne compétente examine le changement avant qu'il soit fait, comme dans la revue de code. Wikipedia décrit la revue par les pairs et la revue de code. Elle est peu coûteuse, rapide et apporte des connaissances pertinentes, et elle soutient la séparation des tâches lorsqu'elle est requise.

**Contrôles automatisés dans le pipeline.** Tests, analyse statique, analyses de sécurité et contrôles de politique s'exécutent sur chaque changement, et le pipeline consigne ce qui a été exécuté et les résultats. Cela produit de meilleures preuves qu'une réunion, parce que c'est cohérent et lié au changement réel. Les articles de Wikipedia sur l'automatisation des tests et l'analyse statique de programmes décrivent certaines techniques. Voir le Sujet 6.4 — Pipelines et changements automatisés.

**Séparation des tâches.** Un contrôle dans lequel aucune personne ne peut accomplir seule une action risquée, par exemple en exigeant que l'auteur d'un changement ne soit pas le seul à l'approuver. La réglementation ou l'audit peut l'exiger. Wikipedia décrit la séparation des tâches. Les pipelines peuvent la faire respecter en exigeant un second relecteur et en consignant les deux.

**Retour arrière et rétablissement.** La capacité d'annuler un changement ou de corriger en avant rapidement réduit le risque. Les changements de données sont plus difficiles à annuler que ceux de code. Voir l'article de Wikipedia sur le retour arrière (rollback) en gestion de données.

**Changements urgents.** Les vraies urgences exigent de la rapidité. Une voie définie, avec une autorité nommée, un minimum de formalités et une revue ensuite, empêche que « urgence » devienne la manière par défaut d'éviter le processus.

**Preuves et audit.** Des réglementations comme la loi Sarbanes–Oxley aux États-Unis, et des règles similaires dans d'autres juridictions, ont imposé des exigences de contrôle des changements apportés aux systèmes financiers. Les exigences diffèrent selon la juridiction et le secteur ; vérifiez ce qui s'applique à vous et demandez à votre auditeur quelles preuves y satisfont. Ce guide ne donne aucun conseil juridique.

**Comment les angles s'articulent.** L'habilitation des changements est le lieu où le rythme agile rencontre le contrôle. La pratique agile suggère des changements petits et fréquents et une implication précoce des parties prenantes. L'IA peut aider à évaluer le risque et à rédiger des descriptions de changement, sous relecture. L'automatisation fournit les contrôles du pipeline. L'analytique montre l'échec des changements et le délai de mise en œuvre.

## Bonnes pratiques

1. **Classer les changements par type et par risque.** Définissez les changements standard, normaux et urgents, avec des exemples pour chacun. Revoyez régulièrement la classification et faites passer des changements en « standard » quand les preuves le justifient.
2. **Préautoriser les changements standard.** Pour les changements répétés à faible risque, convenez une fois de la procédure, avec le responsable du risque, et laissez les équipes les exécuter sans approbation individuelle. Examinez leur taux de réussite.
3. **Placer l'autorité près du travail.** Laissez la revue par les pairs autoriser les changements à faible risque. Escaladez les changements à plus haut risque vers des personnes qui comprennent le service et ses dépendances.
4. **Utiliser le comité pour les changements qui en ont besoin.** Gardez une fonction consultative sur les changements pour les changements à haut risque ou transversaux. Préparez la documentation à l'avance et décidez vite.
5. **Intégrer les contrôles au pipeline.** Exigez tests, analyses et un second relecteur dans l'outillage, et consignez automatiquement les preuves. Montrez aux auditeurs le pipeline, non un tableur.
6. **Faire des changements petits.** Découpez les grands changements en étapes plus petites qui peuvent être livrées et vérifiées séparément. Des changements plus petits comportent moins de risque et sont plus faciles à annuler.
7. **Planifier le chemin du retour.** Exigez un plan de retour arrière ou de correction en avant pour chaque changement normal, et répétez-le pour les plus importants.
8. **Tenir un calendrier visible.** Montrez les changements planifiés et les périodes de gel là où les équipes peuvent les voir, et signalez les conflits avec les grands événements. Pour les changements petits et fréquents, ne montrez que ce qui exige de la coordination.
9. **Définir et encadrer les urgences.** Écrivez les critères et la voie. Examinez ensuite chaque changement urgent, demandez pourquoi il était nécessaire et si la voie normale pourrait être améliorée.
10. **Apprendre des changements en échec.** Examinez les changements qui ont causé des incidents et ajustez les règles de risque, les tests ou la liste de contrôle. Suivez le taux d'échec des changements et regardez ses causes.

## Questions à discuter avec votre équipe

**Lesquelles de nos approbations n'ont jamais rejeté ni modifié un changement, et que coûtent-elles en temps ?**
Cela teste si les contrôles apportent de la valeur. Demandez des données sur les six derniers mois. Vous trouverez peut-être des étapes d'approbation sans effet enregistré. Demandez ensuite quel risque chacune traite et si un autre contrôle pourrait le traiter.

**Quels changements faisons-nous le plus souvent, et lesquels pourraient être préautorisés comme changements standard ?**
Listez les dix premiers par volume. Attendez-vous à ce que beaucoup soient à faible risque et répétitifs. Impliquez le responsable du risque. Demandez ensuite d'en choisir deux pour un essai et de convenir de critères de réussite.

**Comment décidons-nous quels changements exigent une revue humaine, et qui la fait ?**
Les critères sont souvent implicites. Demandez ce qui rendrait un changement « risqué » dans notre contexte. Demandez ensuite de rédiger une courte liste de contrôle et de l'essayer sur des changements récents.

**Que l'auditeur accepterait-il comme preuve qu'un changement a été testé, relu et approuvé ?**
Demandez directement à l'auditeur plutôt que de deviner. Attendez-vous à ce que les traces du pipeline puissent être acceptables si elles montrent qui, quoi et quand. Demandez ensuite de convenir d'un échantillon de traces du pipeline et de le faire examiner par l'auditeur.

**Quand un changement a-t-il mal tourné pour la dernière fois, et qu'est-ce qui, dans notre processus, l'a permis ?**
Cela relie la pratique à de vraies défaillances. Cherchez des tests manquants, un retour arrière absent ou une information pauvre. Évitez de blâmer la personne. Demandez ensuite de convenir d'un contrôle à ajouter ou à améliorer.

**Où l'IA pourrait-elle aider à évaluer le risque d'un changement, et que voudrions-nous vérifier à la main ?**
L'IA peut lire une description de changement et des défaillances passées semblables pour suggérer des facteurs de risque. Elle peut aussi passer à côté ou inventer. Demandez qui est responsable de l'outil et comment ses suggestions sont vérifiées. Demandez ensuite de comparer les évaluations de risque de l'IA avec les résultats de changements passés.

## En pratique : un exemple de gestion des services

Le service informatique d'une agence régionale de santé tient un comité consultatif des changements hebdomadaire, auquel assistent environ 20 personnes, qui examine chaque changement. Les ingénieurs disent attendre jusqu'à huit jours pour une approbation ; le comité dit qu'il détecte des problèmes. Le système de dossiers patients de l'agence a connu l'an dernier deux incidents causés par des modifications de configuration non examinées, faites comme « urgences » pour éviter le comité.

Le responsable des changements analyse six mois d'enregistrements : 640 changements ont été examinés, 590 ont été approuvés tels que soumis, 38 ont été renvoyés pour informations manquantes et 12 ont été modifiés ou rejetés pour des raisons de fond. Sur les 590, 41 ont causé des incidents, presque tous parmi des changements aussi faits dans l'urgence. Le responsable propose trois voies. Les changements standard, comme l'ajout d'un utilisateur à un groupe ou le renouvellement d'un certificat, suivent des procédures documentées et n'exigent aucune approbation. Les changements normaux sur des systèmes classés à moindre risque sont relus par un pair d'une autre équipe et contrôlés par le pipeline. Les changements à plus haut risque sur le système de dossiers patients vont à un comité plus restreint qui se réunit deux fois par semaine et ne voit que ceux-là.

Le responsable de la sécurité clinique demande des preuves que la revue par les pairs a lieu. Le responsable lui montre un rapport du pipeline listant chaque changement avec le nom du relecteur, les tests exécutés et le résultat. Il accepte un essai de six mois avec une revue mensuelle des changements en échec.

Ce qui change : le délai médian d'approbation passe de cinq jours à moins d'un pour la plupart des changements, et le recours à l'« urgence » chute nettement. Ce qui reste difficile : certains systèmes hérités ne peuvent pas exécuter de tests automatisés, si bien que leurs changements exigent encore des contrôles manuels ; la revue par les pairs dépend du temps dont disposent les ingénieurs, et les équipes sous pression relisent superficiellement ; et la revue mensuelle découvre deux changements où le relecteur n'avait aucune connaissance pertinente. Le responsable ajoute une règle selon laquelle le relecteur doit être quelqu'un ayant travaillé sur le système.

## Quatre perspectives

### Équipes produit et de livraison

Faites des changements petits, ajoutez des tests et planifiez le retour arrière. Travaillez avec la pratique de changement pour définir les changements standard et les preuves du pipeline. Traitez la revue par les pairs comme une vraie revue, non comme une signature.

### Équipes de service et d'exploitation

Aidez à évaluer le risque opérationnel, tenez le calendrier et partagez ce que vous savez des dépendances. Examinez les changements en échec avec les équipes et gardez les changements urgents rares et examinés.

### Direction et gouvernance

Déléguez l'autorité selon le risque, demandez des preuves issues du pipeline et n'exigez pas de réunion pour le changement courant. Protégez le temps de revue par les pairs. Examinez le nombre de changements urgents.

### Clients et utilisateurs

Vous devriez être informés des changements qui vous touchent, avec un préavis suffisant et une description claire. Dites au fournisseur les périodes où un changement est risqué pour vous. Signalez rapidement les problèmes après un changement.

## Agilité, IA, automatisation et analytique

### Agilité

Des changements petits et fréquents, avec les parties prenantes informées, sont plus sûrs que des changements grands et rares. Impliquez l'exploitation et les responsables des risques dans la conception des voies de changement, et améliorez-les avec la rétroaction. Attention : n'abandonnez pas les contrôles au nom de l'agilité ; remplacez-les par de meilleurs.

### IA

L'IA peut aider à rédiger des descriptions de changement, à suggérer des facteurs de risque d'après des changements passés semblables et à repérer les informations manquantes dans les descriptions, une personne restant responsable de la décision. Attention : un score de risque d'IA peut être traité comme une autorité ; présentez-le comme une suggestion et suivez la fréquence à laquelle il avait raison. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Automatisez les contrôles du pipeline, la capture des preuves, la détection des conflits de calendrier et l'exécution des changements standard, avec journaux et retour arrière. Attention : l'approbation automatisée des changements ne vaut que ce que valent ses règles ; examinez les règles et échantillonnez les changements approuvés. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Suivez le volume de changements par type, le délai de mise en œuvre, le taux d'échec des changements et les changements urgents, et regardez les causes des échecs. Attention : un faible taux d'échec peut venir du fait que les échecs ne sont pas consignés, et les comptes d'approbations peuvent être détournés en scindant ou en regroupant les changements ; vérifiez par rapport aux données d'incidents. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Examiner chaque changement de la même façon.** Les changements courants attendent. Classez par risque et préautorisez les changements standard.
- **Un comité sans preuves.** Les membres approuvent ce qu'ils ne peuvent pas évaluer. Préparez l'information et n'envoyez que les changements qui exigent du jugement.
- **L'urgence comme contournement.** L'urgence est déclarée pour éviter la revue. Définissez-la et examinez chaque usage.
- **Une revue par les pairs superficielle.** Une signature sans lecture. Exigez un relecteur qualifié et échantillonnez les revues.
- **Abandonner des contrôles sans remplacement.** Les échecs augmentent et les auditeurs s'y opposent. Satisfaites l'objectif de chaque contrôle dans le pipeline.
- **Pas de plan de retour arrière.** Un changement en échec prolonge un incident. Exigez et répétez le rétablissement.
- **Compter les changements approuvés comme un succès.** Le volume augmente et pas la qualité. Suivez les échecs et les incidents causés.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Types de changement et autorité | Une seule voie pour tout | Une voie d'urgence existe | Changements standard, normaux et urgents définis avec autorité selon le risque | Voies examinées avec des données | Les voies s'adaptent automatiquement au risque entre services |
| Preuves | Formulaires et réunions | Quelques enregistrements issus des outils | Traces du pipeline pour la plupart des changements | Preuves échantillonnées et auditées | Preuves continues entre outils et fournisseurs |
| Évaluation du risque | Intuition | Liste de contrôle informelle | Liste de contrôle et critères cohérents | Critères ajustés d'après les données d'échec | Risque évalué avec des données et de l'automatisation, avec revue humaine |
| Apprentissage | Blâme | Revues occasionnelles | Changements en échec examinés avec actions | Causes d'échec suivies et réduites | Apprentissage partagé entre équipes |

## Liste de contrôle

- [ ] Nous avons des types de changement standard, normal et urgent avec des exemples.
- [ ] Les changements standard sont préautorisés avec une procédure documentée.
- [ ] L'autorité pour chaque type correspond au risque.
- [ ] La revue par les pairs est faite par quelqu'un ayant des connaissances pertinentes.
- [ ] Les contrôles du pipeline consignent les tests, les relecteurs et les résultats.
- [ ] Chaque changement normal a un plan de retour arrière ou de correction en avant.
- [ ] Les changements urgents sont examinés ensuite.
- [ ] Nous suivons le taux d'échec des changements et apprenons des changements en échec.

## Invites d'IA

**Vérifier qu'une description de changement n'a pas de lacunes.**

```text
Here is a draft change description: [paste]. Our required fields are: [list].
List which required fields are missing or unclear, and list five questions a reviewer would ask. Do not rewrite the change or rate its risk.
List what you are unsure of.
```

**Chercher des motifs dans les changements en échec.**

```text
Below is a list of changes that caused incidents, with dates, type, size, whether tested, and whether rolled back: [paste list, names removed].
List common features across them and questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

**Proposer des candidats à des changements standard.**

```text
Here are our most frequent changes in the last six months, with counts and failure counts: [paste data].
List which look like candidates for pre-authorization, with the data you used and the questions we should ask the risk owner. Do not claim any is safe.
List what you are unsure of.
```

## Compétences d'IA

- [change-request](../../../../skills/change-request/SKILL.md) : à utiliser pour concevoir une fiche de changement claire et légère.
- [enterprise-change-management](../../../../skills/enterprise-change-management/SKILL.md) : à utiliser pour la dimension organisationnelle du changement.
- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner et examiner les risques liés aux changements.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md) : à utiliser pour vérifier les preuves par rapport aux exigences de contrôle.
- [security-testing](../../../../skills/security-testing/SKILL.md) : à utiliser pour planifier les contrôles de sécurité du pipeline.

## Sources principales

- Nicole Forsgren, Jez Humble et Gene Kim, *Accelerate* (2018) : recherches sur les pratiques de livraison, y compris l'approbation des changements.
- DORA (dora.dev) : recherches et rapports continus sur la performance de livraison de logiciels.
- PeopleCert, pages de certification ITIL : la description de la pratique d'habilitation des changements par le propriétaire.
- Wikipedia, « Change management » et « Change control » : des aperçus des idées.

## Références

1. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
2. Change control — Wikipedia — https://en.wikipedia.org/wiki/Change_control
3. Change-advisory board — Wikipedia — https://en.wikipedia.org/wiki/Change-advisory_board
4. Risk assessment — Wikipedia — https://en.wikipedia.org/wiki/Risk_assessment
5. Peer review — Wikipedia — https://en.wikipedia.org/wiki/Peer_review
6. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
7. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Static program analysis — Wikipedia — https://en.wikipedia.org/wiki/Static_program_analysis
10. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
11. DORA research — DevOps Research and Assessment — https://dora.dev/research/
