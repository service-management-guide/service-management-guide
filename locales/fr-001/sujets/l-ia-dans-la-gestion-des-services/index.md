# L'IA dans la gestion des services

**L'intelligence artificielle entre dans la gestion des services au centre de services, dans l'exploitation, dans les connaissances, dans le changement et dans l'aide à la décision ; traitez chaque usage comme un service avec un responsable, un humain qui décide là où un préjudice est possible, un moyen de repérer les erreurs et une mesure de son utilité.**

## Pourquoi c'est important

L'IA est passée du statut de sujet de recherche à celui de fonction des outils que les équipes de service utilisent déjà. Le système de tickets suggère des catégories. La plateforme de surveillance regroupe les alertes. L'assistant conversationnel répond aux questions du personnel. L'éditeur de code rédige un script. Certaines de ces fonctions ont été activées par l'éditeur, et personne dans l'équipe n'a décidé de les adopter.

Le potentiel est réel. Une grande part du travail de service consiste à lire, écrire, trier et chercher, des tâches que l'IA actuelle accomplit assez bien pour faire gagner du temps. Le risque est tout aussi réel. Les systèmes d'IA produisent des réponses fluides qui peuvent être fausses, peuvent cacher comment ils sont parvenus à une conclusion, peuvent laisser fuir des données et peuvent défaillir de manières difficiles à prévoir. Une équipe qui adopte l'IA sans responsable, sans revue et sans mesures hérite de ces risques sans les bénéfices.

Ce sujet est la carte de la partie IA de ce guide. Il explique les principaux types d'IA dans le travail de service, où ils aident, où ils n'aident pas, et ce qu'il faut demander avant d'adopter. Les sujets suivants vont plus loin : l'exploitation (Sujet 5.2 — AIOps), le centre de services (Sujet 5.3 — Centre de services avec IA et agents virtuels), l'IA générative (Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements), les agents qui agissent (Sujet 5.5 — IA agentique et supervision humaine), la gouvernance (Sujet 5.6 — Gouvernance, risques et conformité de l'IA), les invites et les compétences (Sujet 5.7 — Compétences et invites d'IA) et le modèle opérationnel (Sujet 5.8 — Modèle opérationnel et compétences en IA). La description de la version la plus récente d'ITIL par son propriétaire désigne l'IA comme faisant partie de l'environnement que la gestion des services doit prendre en compte (voir le Sujet 1.3 — ITIL 5).

## Concepts clés

**Intelligence artificielle.** Un terme large pour des systèmes qui accomplissent des tâches nécessitant normalement l'intelligence humaine, comme reconnaître des motifs, comprendre le langage et faire des recommandations. L'article de Wikipedia sur l'intelligence artificielle décrit le domaine et son histoire. Le terme recouvre de nombreuses techniques différentes, et ce que les gens entendent par « IA » varie. Quand vous discutez d'un usage, nommez la technique et la tâche.

**Apprentissage automatique.** Des systèmes qui apprennent des motifs à partir de données au lieu de suivre des règles explicites. Wikipedia décrit l'apprentissage automatique et ses branches. Les exemples dans le travail de service comprennent la classification de tickets, la détection de métriques inhabituelles et la prédiction de pannes. Ils dépendent des données d'entraînement et peuvent se dégrader quand les conditions changent, un problème que Wikipedia décrit comme la dérive conceptuelle.

**IA générative et grands modèles de langage.** Des systèmes qui produisent du contenu nouveau, comme du texte, du code ou des images, à partir d'invites. Les grands modèles de langage (LLM) sont entraînés sur de grandes quantités de texte et peuvent résumer, rédiger, traduire et répondre à des questions. Wikipedia décrit l'IA générative et les grands modèles de langage. Leurs sorties sont fluides et sans garantie d'être vraies.

**Hallucination.** Une sortie plausible mais fausse ou non étayée. Wikipedia décrit l'hallucination en IA. Dans le travail de service, ce peut être une commande inventée, une politique imaginaire ou une cause racine assurée mais fausse. Prévoyez-la : ancrez les réponses dans des sources, montrez les sources et vérifiez avant d'agir.

**Génération augmentée par récupération.** Un modèle dans lequel le système récupère d'abord des documents pertinents, comme des articles de connaissances, puis demande au modèle de répondre en n'utilisant que ceux-ci. Wikipedia décrit l'approche. Elle réduit, sans les supprimer, les mauvaises réponses, et elle dépend de la qualité des documents. Voir le Sujet 3.9 — Gestion des connaissances.

**Agents.** Des systèmes qui ne se contentent pas de répondre mais agissent : appellent des outils, modifient des enregistrements, exécutent des scripts. Wikipedia décrit les agents intelligents en général. Les agents font monter les enjeux parce que leurs erreurs ont des effets dans le monde. Voir le Sujet 5.5 — IA agentique et supervision humaine.

**Où l'IA aide en gestion des services.** Les usages typiques se répartissent en cinq groupes :

| Domaine | Exemples | Principale précaution |
|---|---|---|
| Centre de services | Classer et orienter les tickets, rédiger des réponses, répondre aux questions courantes | Réponses fausses ou inventées aux utilisateurs |
| Exploitation | Regrouper les alertes, trouver des anomalies, suggérer des causes | Signaux manqués passant inaperçus |
| Connaissances | Chercher, résumer et rédiger des articles | Brouillons qui propagent des erreurs |
| Changement et livraison | Rédiger du code et des tests, évaluer le risque d'un changement, écrire des notes de version | Code peu sûr ou faux, scores de risque trop crus |
| Aide à la décision | Résumer des données, prévoir la demande, trouver des motifs | Conclusions trop assurées à partir de données faibles |

**Humain dans la boucle.** Une personne examine ou approuve une sortie ou une action de l'IA avant qu'elle prenne effet. Wikipedia décrit les systèmes avec humain dans la boucle. C'est un contrôle, et il ne fonctionne que si la personne a le temps, l'information et l'autorité de dire non. Wikipedia décrit aussi le biais d'automatisation, la tendance à trop se fier aux suggestions automatisées, qui peut transformer une vérification humaine en simple tampon.

**Explicabilité.** La capacité de dire pourquoi un système a produit une sortie. Wikipedia décrit l'IA explicable. Pour certains usages, comme classer un ticket, une raison approximative suffit ; pour d'autres, comme une décision qui touche l'accès ou la paie d'une personne, il en faut davantage. Décidez quel degré d'explication chaque usage exige.

**Biais et équité.** Une IA entraînée sur des données passées peut reproduire des motifs passés, y compris injustes. Wikipedia décrit le biais algorithmique. Dans le travail de service, le biais peut apparaître dans qui reçoit une aide plus rapide, dont les demandes sont signalées ou dont la langue le système comprend bien.

**Données et vie privée.** Les outils d'IA traitent les données que vous leur donnez, comme un texte de ticket contenant des détails personnels. Où vont les données, combien de temps elles sont conservées et si elles entraînent d'autres modèles sont des questions centrales. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Risques de sécurité.** Les systèmes d'IA ont leurs propres faiblesses, comme l'injection d'invite, où un texte dans un document ou un message tente de donner de nouvelles instructions au modèle. Wikipedia décrit l'injection d'invite. Traitez les entrées extérieures comme non fiables.

**Cycle de vie et exploitation.** Un modèle en usage a besoin de surveillance, de réentraînement ou de remplacement, de versionnage et de retrait. Le MLOps, décrit sur Wikipedia, applique une discipline d'ingénierie à cela. Pour un modèle de fournisseur, vous devez quand même suivre les changements de comportement après les mises à jour.

**Référentiels de gouvernance.** Le règlement de l'Union européenne sur l'intelligence artificielle, décrit sur Wikipedia, fixe des obligations légales qui dépendent de catégories de risque. ISO/IEC 42001 spécifie un système de management de l'IA, et l'Institut national américain des normes et de la technologie (NIST) publie un AI Risk Management Framework. Ce sont du vocabulaire et de la structure pour la gouvernance ; ils ne remplacent pas un avis juridique.

**Comment les angles s'articulent.** L'IA est l'un des quatre angles. La pratique agile suggère de petits essais avec de vrais utilisateurs et une rétroaction courte. L'automatisation est son plus proche voisin : l'IA décide ou suggère, l'automatisation agit. L'analytique fournit les données dont l'IA apprend et les mesures qui montrent si elle aide.

## Bonnes pratiques

1. **Partir d'un problème, non d'un outil.** Nommez une difficulté précise, comme le temps passé à trier les tickets, et une mesure d'amélioration. Demandez ensuite si l'IA est la bonne réponse, ou si une correction plus simple suffit.
2. **Tenir un inventaire des usages de l'IA.** Listez chaque fonction et chaque outil d'IA en usage, y compris les fonctions des éditeurs et les outils personnels que le personnel utilise pour le travail. Consignez la finalité, les données, le responsable et l'état.
3. **Nommer un responsable pour chaque usage.** Une personne répond de ce que fait l'IA, des données qu'elle utilise et de ce qui se passe quand elle se trompe. Sans responsable, personne ne remarque la dégradation.
4. **Décider où un humain décide.** Pour chaque usage, écrivez ce que l'IA peut faire seule, ce qui exige une revue et ce qu'elle ne doit jamais faire. Rendez la revue réelle : donnez aux relecteurs du temps et du contexte.
5. **Ancrer les réponses dans vos propres sources.** Utilisez la récupération à partir de connaissances revues, montrez les sources à l'utilisateur et dites clairement quand aucune source n'étaye une réponse.
6. **Tester avant et après le lancement.** Constituez un jeu de cas de test réalistes aux réponses connues, y compris des cas délicats et adverses. Exécutez-les avant la mise en production et après chaque changement de modèle ou de données.
7. **Mesurer la valeur et les erreurs.** Suivez le temps gagné, la qualité des sorties, les corrections par des humains, les plaintes des utilisateurs et le coût. Échantillonnez régulièrement les sorties.
8. **Protéger les données.** Décidez quelles données peuvent être envoyées à quels outils, retirez les détails personnels et sensibles lorsque vous le pouvez, et vérifiez les clauses contractuelles de conservation et d'usage pour l'entraînement.
9. **Prévoir la défaillance.** Facilitez la désactivation d'une fonction d'IA, le renvoi vers une personne et le rétablissement. Répétez la défaillance d'un service d'IA dont vous dépendez.
10. **Développer les compétences et partager l'apprentissage.** Formez les gens à bien utiliser l'IA et à la questionner. Partagez ce qui marche et ce qui échoue entre équipes. Voir le Sujet 5.7 — Compétences et invites d'IA.

## Questions à discuter avec votre équipe

**Où utilisons-nous déjà l'IA, y compris des fonctions que nous n'avons pas choisies et des outils que les gens utilisent de leur propre chef ?**
Demandez à tout le monde et vérifiez les paramètres des éditeurs. Attendez-vous à une liste plus longue que prévu. Demandez ensuite de consigner chaque usage avec un responsable.

**Lesquelles de nos tâches consistent surtout à lire, écrire et trier, et lesquelles ne voudrions-nous pas qu'une machine décide ?**
Cela trie les tâches selon leur adéquation. Attendez-vous à un accord sur la rédaction et à un désaccord sur les décisions. Demandez ensuite de choisir une tâche à faible risque pour un essai.

**Que ferions-nous si notre assistant d'IA donnait une réponse fausse mais assurée à un utilisateur, et comment le saurions-nous ?**
Parcourez le scénario. Attendez-vous à des lacunes de détection. Demandez ensuite de convenir d'une façon d'échantillonner les sorties et de recueillir les retours des utilisateurs.

**Quelles données envoyons-nous aux outils d'IA, et avons-nous lu les conditions ?**
Listez les outils et les données. Attendez-vous à des comptes personnels et à des conditions inconnues. Demandez ensuite de convenir d'une règle sur ce qui ne doit pas être collé dans des outils externes.

**Comment saurions-nous qu'un usage de l'IA valait son coût ?**
Demandez une mesure du bénéfice et une mesure du préjudice. Attendez-vous à « on a l'impression que c'est plus rapide ». Demandez ensuite de choisir un usage et de convenir d'une mesure avant-après.

**De quelles compétences nos équipes ont-elles besoin pour bien utiliser l'IA, et qui les enseignera ?**
Pensez à rédiger de bonnes invites, à vérifier les réponses et à repérer les limites. Attendez-vous à un large éventail d'assurance. Demandez ensuite de planifier une courte séance de pratique avec de vraies tâches.

## En pratique : un exemple de gestion des services

L'équipe informatique d'un réseau national de bibliothèques publiques soutient 200 sites et environ 6 000 employés. Le centre de services traite un volume élevé de questions répétitives sur l'impression, les connexions et le système de prêt. La responsable du service veut utiliser l'IA pour réduire la file, et l'éditeur du système de tickets vient d'ajouter un assistant d'IA, activé par défaut pour la conversation destinée au personnel.

La responsable des services commence par lister les usages de l'IA. Outre l'assistant de l'éditeur, elle constate que deux analystes utilisent un outil de conversation public pour résumer des tickets, et qu'un développeur a construit un script qui rédige des réponses. Elle attribue à chacun un responsable et fixe une règle : aucune donnée personnelle dans les outils publics. Elle choisit ensuite un usage à améliorer : un assistant destiné au personnel qui répond aux questions « comment faire », en n'utilisant que la base de connaissances approuvée, avec des liens vers les sources et un bouton visible pour joindre une personne.

Elle construit 60 questions de test tirées de vrais tickets, dont dix auxquelles la base de connaissances ne peut pas répondre, où le bon comportement est de le dire. La première version répond à trois de ces dix avec des étapes inventées. L'équipe resserre les instructions et ajoute une règle de refus quand aucun article ne correspond, et les échecs tombent à un. Pendant le premier mois, un agent du centre lit chaque conversation que l'assistant n'a pas résolue, ainsi qu'un échantillon des autres.

Ce qui change : l'assistant résout environ un tiers des conversations sans ticket, et les agents passent moins de temps sur les questions répétitives. Ce qui reste difficile : la base de connaissances contient des articles périmés que l'assistant cite, si bien que l'équipe doit la nettoyer ; l'éditeur change le modèle sous-jacent sans préavis, ce qui a une fois changé le comportement du jour au lendemain ; et le personnel des petits sites préfère parfois téléphoner. La responsable fixe un test mensuel, un contact convenu pour les changements de modèle et un message clair selon lequel le téléphone reste disponible.

## Quatre perspectives

### Équipes produit et de livraison

Utilisez l'IA pour rédiger du code, des tests et de la documentation, sous votre revue et vos contrôles de pipeline habituels. Consignez où l'IA a été utilisée et guettez le code peu sûr ou sans licence. Traitez les fonctions d'IA de votre propre produit comme des services avec des responsables.

### Équipes de service et d'exploitation

Utilisez l'IA pour trier, résumer et chercher, une personne décidant de tout ce qui touche les utilisateurs ou les systèmes. Signalez les erreurs et les quasi-accidents et aidez à régler ce que l'IA voit et dit.

### Direction et gouvernance

Demandez l'inventaire, les responsables, les mesures et le plan en cas de défaillance. Fixez des règles claires sur les données et les décisions. Financez la formation et les tests, pas seulement les licences.

### Clients et utilisateurs

Vous devriez savoir quand vous parlez à une IA et pouvoir joindre une personne. Dites au fournisseur quand une réponse était fausse ou inutile. Faites attention aux données personnelles que vous partagez.

## Agilité, IA, automatisation et analytique

### Agilité

Essayez l'IA par petits essais avec de vrais utilisateurs, apprenez des retours et décidez de garder, changer ou arrêter. Gardez les parties prenantes impliquées dans ce que l'IA peut faire. Attention : une démonstration réussie n'est pas la preuve qu'un usage est sûr ou utile ; menez un vrai essai avec des mesures.

### IA

Ce sujet est l'angle IA lui-même : chaque usage a besoin d'un responsable, d'un humain qui décide là où un préjudice est possible, d'une détection des erreurs et de mesures. Attention : ne déléguez pas la redevabilité à un fournisseur ou à un modèle ; vous restez redevable des résultats que votre service livre.

### Automatisation

L'IA décide ou suggère ; l'automatisation agit. Reliez-les avec soin, avec des limites sur ce qui peut arriver sans approbation, des journaux et un moyen d'arrêter. Attention : une IA qui déclenche une automatisation peut multiplier rapidement une erreur ; ajoutez des limites de débit et une revue. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Mesurez le bénéfice, les taux d'erreur trouvés dans les échantillons, les retours des utilisateurs et le coût. Attention : les chiffres d'usage et les notes des utilisateurs peuvent paraître bons alors que la qualité est médiocre ; échantillonnez les sorties et comparez à une référence. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **L'outil avant le problème.** Une fonction est activée et personne ne mesure le bénéfice. Partez d'une difficulté et d'une mesure.
- **Pas d'inventaire.** Les usages se multiplient sans être vus. Listez chaque usage de l'IA avec un responsable.
- **Une revue humaine de pure forme.** Les relecteurs tamponnent. Donnez du temps, du contexte et de l'autorité, et échantillonnez leurs décisions.
- **Des réponses fausses mais assurées.** Les utilisateurs agissent sur des conseils inventés. Ancrez les réponses, citez les sources et refusez en cas de doute.
- **Des fuites de données.** Du texte sensible va vers des outils externes. Fixez des règles et vérifiez les conditions.
- **Ignorer les changements de modèle.** Le comportement change après une mise à jour de l'éditeur. Testez régulièrement et fixez un contact pour les changements.
- **Pas de sortie de secours.** Le service dépend de l'IA sans solution de repli. Prévoyez une voie vers une personne et un interrupteur d'arrêt.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Inventaire et responsabilité | Usages inconnus | Principaux usages listés | Inventaire avec responsables et finalités | Inventaire examiné et testé | Inventaire intégré au catalogue et à la gouvernance |
| Décisions humaines | Non définies | Revue informelle | Points de revue définis pour chaque usage | Qualité de la revue échantillonnée | Revue adaptée selon le risque et les preuves |
| Tests et surveillance | Aucun | Démonstrations | Jeux de test et échantillonnage régulier | Erreurs et dérive mesurées | Évaluation continue entre usages |
| Données et risque | Flous | Conscience | Règles sur les données et les conditions des éditeurs | Conformité vérifiée et auditée | Risque géré entre équipes et fournisseurs |

## Liste de contrôle

- [ ] Nous tenons un inventaire des usages de l'IA, fonctions d'éditeurs et outils personnels compris.
- [ ] Chaque usage a un responsable nommé.
- [ ] Nous avons écrit ce que chaque IA peut faire seule, ce qui exige une revue et ce qu'elle ne doit pas faire.
- [ ] Les réponses sont ancrées dans des sources revues et les montrent.
- [ ] Nous avons un jeu de test et l'exécutons régulièrement.
- [ ] Nous échantillonnons les sorties et suivons les erreurs, les corrections et les retours.
- [ ] Nous avons des règles sur les données qui vont vers quels outils.
- [ ] Les utilisateurs peuvent joindre une personne, et nous pouvons désactiver chaque usage de l'IA.

## Invites d'IA

**Lister les usages de l'IA à partir d'une description de nos outils.**

```text
Here is a description of the tools our team uses and what each does: [paste].
List which tools probably include AI features, what each might do, what data it might process, and a question to ask the vendor or owner. Mark clearly which items are guesses and do not state facts about vendors.
List what you are unsure of.
```

**Rédiger des questions de test pour un assistant.**

```text
Our assistant answers questions about [topics] using only these documents: [list titles].
Write 30 test questions: 15 that the documents answer, 10 that they do not, and 5 that try to make the assistant ignore its instructions. For each, state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

**Préparer l'examen d'un usage de l'IA.**

```text
AI use: [describe]. Owner: [role]. Data used: [list]. Decisions it affects: [list].
Draft a one-page review with: purpose, what it may do alone, what needs human review, how errors are detected, how it is switched off, and open questions. Mark every item you could not fill from my description.
List what you are unsure of.
```

## Compétences d'IA

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md) : à utiliser pour concevoir des invites claires, ancrées et testables.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md) : à utiliser pour documenter ce que fait un modèle, ses données et ses limites.
- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques liés à l'IA, les responsables et les décisions.
- [itil-5](../../../../skills/itil-5/SKILL.md) : à utiliser pour relier l'usage de l'IA aux dernières recommandations du propriétaire, avec les affirmations non vérifiées signalées.
- [mlops](../../../../skills/mlops/SKILL.md) : à utiliser pour gérer les modèles tout au long de leur cycle de vie.

## Sources principales

- NIST, AI Risk Management Framework : une structure très utilisée pour identifier et gérer le risque lié à l'IA.
- ISO/IEC 42001 (la norme elle-même) : exigences pour un système de management de l'intelligence artificielle ; lisez l'édition actuelle auprès de l'éditeur.
- PeopleCert, pages de certification ITIL : la description d'ITIL (version 5) par le propriétaire, IA comprise.
- Wikipedia, « Artificial intelligence » et « Large language model » : des aperçus du domaine et de la technologie.

## Références

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
