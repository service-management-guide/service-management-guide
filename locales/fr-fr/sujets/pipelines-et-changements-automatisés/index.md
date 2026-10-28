# Pipelines et changements automatisés

**Un pipeline de livraison peut porter les contrôles dont l'habilitation des changements a besoin : tests, contrôles de sécurité, contrôles de politique, revue par les pairs, séparation des tâches et une trace de preuves pour chaque changement ; l'approbation humaine qui subsiste concerne les jugements que le pipeline ne peut pas porter.**

## Pourquoi c'est important

Quand le changement était rare et gros, le contrôle signifiait une réunion. Les gens se rassemblaient, lisaient un document et convenaient qu'une mise en production pouvait avoir lieu. Quand le changement est devenu fréquent et petit, la réunion n'a plus suivi. Une équipe qui livre vingt fois par jour ne peut pas convoquer vingt comités. Elle peut en revanche exécuter vingt fois le même ensemble de contrôles, avec une rigueur constante, et garder une trace de chacun.

C'est la contribution du pipeline à la gestion des services. La même séquence automatisée qui construit et déploie un changement peut aussi le tester, l'analyser pour y chercher des faiblesses, le confronter à la politique, exiger un second relecteur et consigner ce qui s'est passé. Le résultat est souvent un meilleur contrôle que celui d'une réunion : cohérent, lié au changement réel et disponible pour un auditeur longtemps après. Wikipedia décrit la livraison continue et l'automatisation des tests comme les pratiques qui rendent cela possible.

Le pipeline est aussi une nouvelle chose à gouverner. Il détient des identifiants qui peuvent modifier la production, il peut être mal configuré au point de sauter des contrôles et il peut bercer une équipe dans la confiance en des coches vertes qui testent peu. Ce sujet explique comment concevoir des pipelines comme des contrôles, comment produire des preuves pour les auditeurs et comment garder le jugement humain que l'automatisation ne peut pas remplacer. Il s'appuie sur la livraison continue (Sujet 2.2 — Livraison continue) et l'habilitation des changements (Sujet 3.4 — Habilitation des changements), se relie à l'infrastructure as code (Sujet 6.3 — Infrastructure as Code et GitOps) et à la gestion des mises en production (Sujet 3.5 — Gestion des mises en production et des déploiements), et partage des préoccupations avec la sécurité de l'information (Sujet 3.13 — Gestion de la sécurité de l'information).

## Concepts clés

**Pipeline.** Une séquence automatisée d'étapes qui mène un changement du code source à la production : construire, tester, analyser, empaqueter, déployer, vérifier. Wikipedia décrit les pipelines en logiciel. Chaque étape réussit ou échoue, et un échec arrête le changement. Les pipelines sont définis en code et conservés en gestion de versions.

**Intégration et livraison continues.** Fusionner souvent les changements et garder chaque build livrable, comme décrit au Sujet 2.2 — Livraison continue. Le pipeline est la machinerie des deux. Wikipedia décrit l'intégration continue et la livraison continue.

**Les étapes comme contrôles.** Chaque étape est un contrôle avec une finalité :

| Étape | Contrôle qu'elle fournit |
|---|---|
| Construction | Le changement se compile et s'empaquette de façon reproductible |
| Tests unitaires et d'intégration | Le comportement connu fonctionne encore |
| Analyse statique et contrôles de sécurité | Les défauts courants et les dépendances vulnérables sont trouvés |
| Contrôles de politique | Des règles comme l'étiquetage, le chiffrement et les régions approuvées sont respectées |
| Revue par les pairs | Une seconde personne a lu le changement |
| Déploiement par étapes et vérification | Le changement fonctionne dans un endroit sûr avant une exposition plus large |

**Barrières de qualité.** Une condition qu'un changement doit remplir pour avancer, comme des tests réussis, aucune vulnérabilité critique ou une couverture qui ne baisse pas. Wikipedia décrit plus largement le contrôle qualité. Les barrières devraient être peu nombreuses, claires et rapides. Une barrière souvent contournée ou ignorée apprend à l'équipe à ignorer les barrières.

**Tests automatisés.** Des tests unitaires, d'intégration et de bout en bout s'exécutent sur chaque changement. Wikipedia décrit l'automatisation des tests, les tests unitaires et les tests d'intégration. La valeur tient à la confiance qu'on leur accorde : les tests instables érodent la confiance. Voir le Sujet 2.2 — Livraison continue.

**Analyses de sécurité.** L'analyse statique examine le code à la recherche de motifs de faiblesse ; l'analyse de composition logicielle examine les bibliothèques que vous utilisez pour y chercher des vulnérabilités connues. Wikipedia décrit les tests statiques de sécurité des applications et l'analyse de composition logicielle. Les constats exigent un tri, car beaucoup sont de faible risque ou faux.

**Politique en tant que code.** Des règles écrites en code vérifiable par machine et appliquées dans le pipeline, par exemple « aucun compartiment de stockage ne doit être public ». Elles rendent les exigences testables et les résultats consignables. Voir le Sujet 6.3 — Infrastructure as Code et GitOps.

**Séparation des tâches.** La personne qui écrit un changement n'est pas la seule à l'approuver. Wikipedia décrit la séparation des tâches. Dans un pipeline, elle est appliquée en exigeant un second relecteur et en empêchant l'auteur d'approuver son propre changement. Là où la réglementation l'exige, le pipeline peut montrer qui a fait quoi.

**Types de changement dans un pipeline.** Les changements standard, comme une mise à jour de configuration courante, peuvent passer par des contrôles automatisés seuls, sans approbation manuelle. Les changements normaux à risque plus élevé peuvent ajouter une étape d'approbation humaine dans le pipeline. Les changements urgents utilisent le même pipeline en mode rapide, avec la même trace. Voir le Sujet 3.4 — Habilitation des changements.

**Preuves.** Le pipeline consigne ce qui a changé (le commit), qui l'a relu, quels contrôles ont été exécutés et leurs résultats, qui ou quoi l'a déployé et quand. Wikipedia décrit les pistes d'audit. Les preuves devraient être stockées là où les personnes concernées ne peuvent pas les altérer, et être faciles à retrouver par changement.

**Chaîne d'approvisionnement logicielle.** Le pipeline construit à partir de composants fournis par d'autres, utilise des outils d'autres et produit des artefacts qui sont déployés. Wikipedia décrit la chaîne d'approvisionnement logicielle et l'idée de provenance, une trace vérifiable de l'origine d'un artefact. Les pratiques comprennent l'épinglage de versions, la signature des artefacts et la tenue d'une nomenclature. Voir le Sujet 4.2 — Gestion des actifs logiciels.

**Déploiement progressif et vérification.** Après le déploiement, le pipeline peut vérifier des indicateurs de santé et revenir automatiquement en arrière s'ils se dégradent. Des techniques comme le déploiement par étapes et les interrupteurs de fonctionnalité sont décrites au Sujet 3.5 — Gestion des mises en production et des déploiements.

**Sécurité du pipeline.** Le pipeline peut déployer en production ; c'est donc une cible de grande valeur. Protégez-le : restreignez qui peut modifier ses définitions, utilisez des identifiants de courte durée, isolez les environnements de construction et surveillez les activités inhabituelles. Traitez les changements du pipeline aussi soigneusement que ceux de la production.

**Contournement et exceptions.** Certains changements n'entreront pas dans le cadre : une correction de données, une action manuelle d'un fournisseur. Définissez une voie d'exception consignée, avec approbation, au lieu de laisser les gens chercher des contournements. Examinez régulièrement les exceptions.

**Le pipeline comme produit.** Les pipelines ont besoin de responsables, d'un backlog, de documentation et d'utilisateurs qui donnent des retours. Des pipelines lents ou instables apprennent aux gens à les éviter.

**Comment les angles s'articulent.** Les pipelines sont le lieu où l'angle agile et l'angle automatisation rencontrent la gouvernance. L'IA peut suggérer des tests, relire des changements et expliquer des échecs, sous relecture humaine. L'analytique utilise les données du pipeline pour montrer la livraison et la qualité des changements.

## Bonnes pratiques

1. **Concevoir chaque étape comme un contrôle nommé.** Pour chaque étape, écrivez quel risque elle traite, qui en est responsable et ce que signifie un échec. Supprimez les étapes qui ne traitent aucun risque réel.
2. **Garder le pipeline rapide.** Visez un résultat en quelques minutes pour le chemin courant. Exécutez les contrôles lents en parallèle ou à des étapes ultérieures, avec une rétroaction claire, pour que les gens ne cherchent pas de raccourcis.
3. **Faire du pipeline la seule voie.** Les changements de production passent par lui, avec une voie d'exception consignée pour le reste. Bloquez l'accès direct lorsque vous le pouvez.
4. **Faire respecter la séparation des tâches par l'outillage.** Exigez un second relecteur qualifié, empêchez les auteurs d'approuver leurs propres changements et consignez les deux identités.
5. **Prendre les échecs au sérieux.** Un test ou une analyse en échec arrête le changement. N'autorisez pas de dérogations courantes et exigez une approbation et une raison consignée quand l'une est nécessaire.
6. **Trier les constats de sécurité.** Fixez des seuils selon la gravité et l'exposition, corrigez les plus sérieux et suivez le reste. Réglez les règles pour réduire le bruit afin que les constats soient lus.
7. **Consigner automatiquement les preuves.** Capturez commit, relecteurs, contrôles, résultats, artefacts et détails de déploiement dans un magasin que l'auteur du changement ne peut pas modifier. Reliez-le à la fiche de changement.
8. **Sécuriser le pipeline lui-même.** Limitez qui peut modifier les définitions, utilisez des identifiants de courte durée et de portée minimale, épinglez les outils et les dépendances et signez les artefacts.
9. **Vérifier après le déploiement.** Contrôlez les indicateurs de santé et revenez en arrière ou suspendez quand ils se dégradent. Rapportez les résultats dans le même enregistrement.
10. **Examiner régulièrement le pipeline.** Regardez quels contrôles attrapent de vrais problèmes, lesquels sont ignorés, combien de temps durent les exécutions et quelles exceptions surviennent. Améliorez et élaguez.

## Questions à discuter avec votre équipe

**Lesquels de nos contrôles de changement le pipeline fournit-il aujourd'hui, et lesquels dépendent encore d'une réunion ou d'un formulaire ?**
Listez les contrôles. Attendez-vous à ce que certains soient manuels alors qu'ils pourraient être automatisés. Demandez ensuite d'en choisir un à déplacer dans le pipeline.

**Que verrait un auditeur s'il demandait les preuves d'un changement du mois dernier ?**
Essayez. Attendez-vous à devoir reconstituer plusieurs systèmes. Demandez ensuite de convenir d'un enregistrement unique par changement et d'un moyen de le retrouver.

**À quelle fréquence les gens contournent-ils ou passent-ils outre à un contrôle en échec, et pourquoi ?**
Demandez des données. Attendez-vous à plus que personne ne le dit. Demandez ensuite d'examiner le contrôle le plus contourné pour le corriger ou le supprimer.

**Qui peut modifier la définition du pipeline, et qui relit ce changement ?**
Cela teste la sécurité du pipeline. Attendez-vous à un accès large. Demandez ensuite de restreindre l'accès et d'exiger une revue pour les changements du pipeline.

**Lesquels des constats de nos analyseurs lisons-nous, et lesquels ignorons-nous ?**
Interrogez les ingénieurs. Attendez-vous à « surtout ignorés ». Demandez ensuite de régler l'analyseur sur les constats que les gens traiteront.

**Où l'IA pourrait-elle aider dans le pipeline, et que doit rester une décision humaine ?**
L'IA peut proposer des tests, résumer des échecs et relire du code. L'approbation du risque et des exceptions devrait rester humaine. Demandez ensuite d'essayer des tests suggérés par l'IA avec revue.

## En pratique : un exemple de gestion des services

Une agence nationale de sécurité sociale exploite environ 80 applications. Les changements de son système de calcul des prestations exigent un comité de revue hebdomadaire et un long formulaire, et les mises en production ont lieu chaque mois. Le bureau d'audit constate que le comité approuve presque tout et que les preuves de chaque changement sont éparpillées. Les ingénieurs de l'agence soutiennent qu'un pipeline ferait mieux.

Le responsable de la livraison mène un essai sur une application. Un pipeline construit l'application, exécute 1 800 tests unitaires et d'intégration et un ensemble de tests de régression tirés de défauts passés, analyse le code et les bibliothèques, confronte la définition d'infrastructure à la politique et exige la revue d'un second ingénieur ayant travaillé sur le système. Chaque exécution écrit un enregistrement : commit, relecteurs, résultats de tests, résultats d'analyses, identifiant d'artefact et détails de déploiement, stockés dans un journal que les ingénieurs ne peuvent pas modifier.

Le processus de changement est repensé en trois voies. Les changements courants, comme les mises à jour de texte et de configuration mineure, sont standard : si le pipeline réussit, le changement est déployé auprès d'un groupe pilote puis de tous, sans comité. Les changements aux règles de calcul des prestations sont normaux et exigent, en plus, la validation d'un analyste des politiques, qui voit un résumé en langage clair et les résultats des tests. Les corrections urgentes utilisent le même pipeline avec un ensemble de tests raccourci et une revue rétrospective.

Le bureau d'audit examine un échantillon de 30 changements et constate que les preuves sont complètes pour tous et que le pipeline a bloqué quatre changements pour échec de contrôles. Il note aussi que deux ingénieurs s'étaient approuvé mutuellement leurs changements à répétition, et demande une règle de rotation des relecteurs.

Ce qui change : les mises en production deviennent hebdomadaires, le comité se concentre sur les changements de règles et un auditeur peut retrouver les preuves de n'importe quel changement en quelques minutes. Ce qui reste difficile : les applications plus anciennes ne peuvent pas exécuter les tests automatisés, si bien que leurs changements gardent l'ancienne voie ; les analyseurs signalent de nombreux problèmes de bibliothèques à faible risque et les ingénieurs ont commencé à ignorer le rapport ; et les identifiants du pipeline lui-même se sont révélés avoir un accès plus large que nécessaire. Le responsable ajoute un réglage des analyseurs, la rotation des relecteurs et une revue des identifiants du pipeline.

## Quatre perspectives

### Équipes produit et de livraison

Prenez en charge le pipeline de votre service : gardez-le rapide, fiable et honnête sur ce qu'il vérifie. Écrivez des tests qui attrapent de vrais défauts, corrigez les tests instables et traitez les constats comme du travail. Ne le contournez pas.

### Équipes de service et d'exploitation

Aidez à définir les contrôles et les indicateurs de santé que le pipeline utilise après le déploiement. Utilisez les preuves lors des incidents et des revues. Gardez une voie d'exception pour les vraies urgences.

### Direction et gouvernance

Demandez des preuves issues des pipelines, non davantage de réunions. Financez les tests, les analyses et la sécurité du pipeline. Examinez les dérogations et les exceptions. Ne prenez pas des pipelines au vert pour des systèmes sûrs.

### Clients et utilisateurs

Vous profitez de changements fréquents et plus sûrs. On devrait vous informer des changements importants qui vous touchent, et vous devriez pouvoir signaler des problèmes après une mise en production.

## Agilité, IA, automatisation et analytique

### Agilité

De petits changements fréquents qui passent chaque fois les mêmes contrôles sont la forme pratique du contrôle agile. Améliorez le pipeline à partir des incidents et des retours. Attention : ne traitez pas le pipeline comme terminé ; les lacunes de tests grandissent à mesure que le système change.

### IA

L'IA peut suggérer des tests, relire des changements, résumer des échecs et trier des constats, une personne restant responsable de chaque décision. Attention : des tests générés par l'IA peuvent réussir en testant peu, et la revue de code par l'IA peut manquer des problèmes de sécurité ; mesurez les défauts qui s'échappent et gardez une revue humaine pour le risque. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Le pipeline est l'automatisation du chemin vers la production, contrôles et enregistrements compris. Protégez-le comme une infrastructure critique avec sa propre identité, un moindre privilège et une surveillance. Attention : une approbation automatisée fondée sur des règles faibles donne une fausse assurance ; examinez ce que chaque règle vérifie réellement. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Suivez le délai de mise en œuvre, la fréquence de déploiement, le taux d'échec des changements, le temps de rétablissement, le nombre de dérogations, les défauts échappés et les constats par gravité. Attention : les mesures de livraison se détournent facilement et ne devraient pas servir à classer les équipes ; suivez les défauts échappés pour tester les contrôles. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Vert signifie sûr.** Les tests sont minces et réussissent. Examinez ce que chaque contrôle teste réellement et suivez les défauts échappés.
- **Des dérogations courantes.** Les contrôles sont contournés. Rendez les dérogations rares, approuvées et examinées.
- **Un pipeline lent.** Les gens cherchent des raccourcis. Gardez le chemin courant rapide.
- **Du bruit d'analyseurs.** Les constats sont ignorés. Réglez et triez.
- **Des preuves éparpillées.** Les audits prennent des semaines. Consignez automatiquement en un seul endroit.
- **Un pipeline sur-privilégié.** Une seule compromission atteint tout. Limitez l'accès et utilisez des identifiants de courte durée.
- **L'auto-approbation.** Les auteurs approuvent leur propre travail. Faites respecter la séparation des tâches par l'outillage.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Contrôles | Vérifications manuelles | Construction et quelques tests | Tests, analyses, politique et revue sur chaque changement | Efficacité des contrôles mesurée | Contrôles qui s'adaptent automatiquement selon le risque avec supervision humaine |
| Preuves | Formulaires et courriels | Quelques journaux | Enregistrement automatique par changement | Preuves auditées et échantillonnées | Preuves continues entre pipelines et fournisseurs |
| Sécurité du pipeline | Identifiants partagés | Conscience | Moindre privilège, outils épinglés, définitions protégées | Pipeline surveillé et testé | Chaîne d'approvisionnement vérifiée de bout en bout |
| Flux | Lent, manuel | Constructions plus rapides | Chemin courant rapide avec voie d'exception | Flux et échecs mesurés | Livraison optimisée entre services |

## Liste de contrôle

- [ ] Chaque étape du pipeline a une finalité nommée et un responsable.
- [ ] Le chemin courant s'exécute en quelques minutes.
- [ ] Les changements de production passent par le pipeline, avec une voie d'exception consignée.
- [ ] La séparation des tâches est appliquée par l'outillage.
- [ ] Les contrôles en échec arrêtent les changements, et les dérogations sont approuvées et examinées.
- [ ] Les preuves sont consignées automatiquement dans un magasin que les auteurs ne peuvent pas modifier.
- [ ] Les définitions et identifiants du pipeline sont protégés et examinés.
- [ ] Nous examinons l'efficacité des contrôles, défauts échappés compris.

## Invites d'IA

**Faire correspondre les contrôles au pipeline.**

```text
Here is our list of change controls: [paste]. Here is a description of what our pipeline does: [paste].
For each control, say whether the pipeline description appears to provide it, partly provide it, or not mention it, quoting the words. Do not assume checks that are not described.
List what you are unsure of.
```

**Examiner une exécution de pipeline en échec.**

```text
Here is the log of a failed run: [paste, with secrets removed].
Summarize which stage failed, the error messages, and the three most likely areas to check, labeling each as a hypothesis. Do not suggest overriding the failure.
List what you are unsure of.
```

**Préparer un échantillon de preuves pour un audit.**

```text
Here are the records for [number] changes: [paste summary with commit, reviewers, checks, results].
For each, check whether it shows a reviewer who is not the author, passing tests, scan results, and deployment time, and list gaps. Do not infer anything not in the records.
List what you are unsure of.
```

## Compétences d'IA

- [change-request](../../../../skills/change-request/SKILL.md) : à utiliser pour décrire les changements et les preuves dont ils ont besoin.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md) : à utiliser pour déplacer les tests plus tôt dans le pipeline.
- [security-testing](../../../../skills/security-testing/SKILL.md) : à utiliser pour planifier les contrôles de sécurité du pipeline.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md) : à utiliser pour vérifier les preuves par rapport aux exigences de contrôle.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md) : à utiliser pour construire les tests en même temps que les changements.

## Sources principales

- Jez Humble et David Farley, *Continuous Delivery* (2010) : le récit fondateur des pipelines de déploiement.
- Nicole Forsgren, Jez Humble et Gene Kim, *Accelerate* (2018) : recherches sur les pratiques de livraison et la performance.
- DORA (dora.dev) : recherches et rapports continus.
- Wikipedia, « Continuous delivery » et « Software supply chain » : des aperçus de la pratique et de ses risques.

## Références

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
4. Unit testing — Wikipedia — https://en.wikipedia.org/wiki/Unit_testing
5. Integration testing — Wikipedia — https://en.wikipedia.org/wiki/Integration_testing
6. Static application security testing — Wikipedia — https://en.wikipedia.org/wiki/Static_application_security_testing
7. Software composition analysis — Wikipedia — https://en.wikipedia.org/wiki/Software_composition_analysis
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Code signing — Wikipedia — https://en.wikipedia.org/wiki/Code_signing
12. DORA research — DevOps Research and Assessment — https://dora.dev/research/
