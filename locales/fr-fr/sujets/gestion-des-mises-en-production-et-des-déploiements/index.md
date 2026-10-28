# Gestion des mises en production et des déploiements

**La gestion des mises en production et des déploiements sépare deux décisions qui n'en faisaient autrefois qu'une : le moment où le nouveau code est placé sur les systèmes de production (déploiement) et celui où son comportement devient disponible pour les utilisateurs (mise en production) ; les séparer, grâce aux interrupteurs de fonctionnalité, au déploiement par étapes et à des notes de version claires, rend le changement plus sûr et plus serein.**

## Pourquoi c'est important

Les jours de lancement sont stressants parce que trop de choses se passent à la fois. Du nouveau code est installé, de nouvelles fonctionnalités s'activent, les utilisateurs les découvrent pour la première fois et l'équipe de support les apprend avec la première plainte. Si quelque chose tourne mal, tout cela est enchevêtré, et le seul chemin de retour peut être un retour arrière qui défait tout.

Les équipes qui séparent le déploiement de la mise en production évitent l'essentiel de cela. Le code arrive en production discrètement, désactivé, des jours avant que les utilisateurs le voient. Quand l'équipe est prête, un interrupteur active la fonctionnalité pour un petit groupe, puis davantage. Si quelque chose ne va pas, l'interrupteur la désactive en quelques secondes. Le déploiement, qui est un acte technique, a lieu selon le calendrier des ingénieurs. La mise en production, qui est un acte métier et client, a lieu quand l'organisation est prête.

Ce sujet explique les deux idées, les techniques qui les soutiennent et les pratiques qui tiennent informés utilisateurs, personnel de support et auditeurs. Il s'appuie sur la livraison continue (Sujet 2.2 — Livraison continue) et l'habilitation des changements (Sujet 3.4 — Habilitation des changements), et se relie à la gestion de la configuration (Sujet 4.4 — Gestion de la configuration) et à la gestion des connaissances (Sujet 3.9 — Gestion des connaissances).

## Concepts clés

**Déploiement.** L'acte de déplacer un logiciel, une configuration ou d'autres composants vers un environnement, comme le test ou la production. L'article de Wikipedia sur le déploiement de logiciels décrit les activités concernées. Le déploiement est une opération technique qui place quelque chose là où cela peut s'exécuter.

**Mise en production (release).** Rendre un service, une fonctionnalité ou une version disponible à l'usage. Une mise en production peut avoir lieu au même moment qu'un déploiement ou plus tard. ITIL 4 décrit la « gestion des mises en production » comme la pratique consistant à rendre disponibles à l'usage les services et fonctionnalités nouveaux et modifiés, et la « gestion des déploiements » comme le déplacement de composants vers des environnements de production.

**Pourquoi les séparer.** Le risque de déploiement concerne la question de savoir si le code s'exécute et se comporte bien. Le risque de mise en production concerne la préparation des utilisateurs, du support et de l'activité. Les faire à des moments différents permet de gérer chaque risque avec les bonnes personnes et les bons outils.

**Interrupteurs de fonctionnalité (feature flags).** Aussi appelés feature toggles, ce sont des commutateurs dans le code ou dans un système de contrôle qui activent ou désactivent une fonctionnalité à l'exécution, sans nouveau déploiement. Wikipedia décrit les interrupteurs de fonctionnalité et leurs usages. Les interrupteurs peuvent être par utilisateur, par groupe, par pourcentage de trafic ou globaux. Ils demandent des précautions : les vieux interrupteurs s'accumulent et deviennent une complexité cachée.

**Déploiement par étapes.** Mettre en production d'abord auprès d'un petit groupe et élargir graduellement. Les variantes comprennent d'abord les utilisateurs internes, un petit pourcentage du trafic, une seule région ou un client pilote. Chaque étape donne un retour avant d'exposer davantage de personnes.

**Déploiement bleu-vert et progressif.** Dans un déploiement bleu-vert, deux environnements de production existent ; l'un sert les utilisateurs pendant que l'autre reçoit la nouvelle version, et le trafic est basculé quand tout est prêt, avec un retour rapide si nécessaire. Dans un déploiement progressif (rolling), les instances sont mises à jour quelques-unes à la fois. Wikipedia décrit les deux. Chacun comporte des compromis de coût, de complexité et de gestion des données.

**Préparation à la mise en production.** Un court ensemble de questions auxquelles on répond avant la mise en production : les tests passent-ils ; la surveillance couvre-t-elle le nouveau comportement ; le personnel de support sait-il ce qui a changé et comment aider ; la documentation et les articles de connaissances sont-ils prêts ; existe-t-il un plan de retour arrière ; et l'activité a-t-elle accepté la date. Gardez-le bref et lié au risque réel.

**Notes de version.** Une description de ce qui a changé, écrite pour ceux qui ont besoin de le savoir. Des publics différents ont besoin de notes différentes : les utilisateurs veulent savoir ce qui est nouveau ou différent ; le personnel de support veut savoir à quoi s'attendre ; l'exploitation veut savoir ce qui a changé techniquement. Les articles de Wikipedia sur les notes de version et les journaux des modifications décrivent des formes courantes.

**Gestion des versions.** Un schéma de nommage des versions pour que les gens puissent en parler. Le versionnage sémantique, un schéma populaire décrit sous le versionnage logiciel sur Wikipedia, utilise des numéros majeur, mineur et correctif pour signaler le type de changement. Choisissez un schéma et appliquez-le de façon cohérente.

**Changements de données.** Les changements de structure de base de données et de données sont plus difficiles à annuler que les changements de code. Des modèles comme rendre les changements rétrocompatibles, faire fonctionner côte à côte anciennes et nouvelles structures et migrer par petites étapes réduisent le risque. Wikipedia décrit la migration de schéma.

**Correctifs urgents (hotfixes) et patchs.** Des corrections urgentes faites en dehors du cycle normal, généralement pour corriger un défaut grave ou une vulnérabilité. Elles exigent une voie accélérée avec la même discipline : test, revue, déploiement par le pipeline et enregistrement. Voir le Sujet 3.4 — Habilitation des changements.

**Environnements.** Les environnements de test, de préproduction et de production, chacun avec sa finalité. Plus les environnements de test ressemblent à la production, plus les tests sont fiables. L'article de Wikipedia sur les environnements de déploiement décrit des configurations courantes.

**Chaîne d'approvisionnement logicielle.** Les mises en production incluent des composants venant de tiers, comme des bibliothèques et des images de conteneurs. Une nomenclature logicielle (software bill of materials) les liste, ce qui aide à répondre aux vulnérabilités. Voir le Sujet 4.2 — Gestion des actifs logiciels.

**Comment les angles s'articulent.** La pratique de mise en production est l'angle agile au point de contact avec les utilisateurs : de petites mises en production avec rétroaction. L'IA peut rédiger des notes de version et résumer des changements, sous relecture. L'automatisation exécute le pipeline et le déploiement progressif. L'analytique montre comment se comporte une mise en production.

## Bonnes pratiques

1. **Déployer petit et souvent.** Placez les changements en production par petits morceaux, derrière des interrupteurs lorsque c'est utile. Un déploiement fréquent rend chacun à faible risque et routinier.
2. **Mettre en production à dessein.** Décidez avec l'activité du moment où les utilisateurs doivent voir une fonctionnalité, et utilisez un interrupteur ou un déploiement par étapes pour la contrôler. Ne laissez pas le calendrier de déploiement dicter la mise en production.
3. **Déployer par étapes.** Commencez par un petit groupe informé, surveillez les indicateurs et élargissez. Définissez à l'avance ce que vous regarderez et ce qui vous ferait arrêter.
4. **Garder les interrupteurs en ordre.** Consignez la finalité, le responsable et la date de retrait de chaque interrupteur. Retirez les interrupteurs après le déploiement. Testez les deux états tant qu'un interrupteur existe.
5. **Rendre le retour rapide.** Sachez comment désactiver un interrupteur, revenir en arrière ou basculer, et exercez-vous-y. Pour les changements de données, prévoyez des étapes compatibles vers l'avant.
6. **Préparer le support avant la mise en production.** Donnez au centre de services des notes de version, un court guide et les problèmes connus avant que les utilisateurs voient un changement. Demandez-lui ce dont il a besoin.
7. **Écrire les notes de version pour leurs lecteurs.** Dites ce qui a changé en termes d'utilisateur, à quoi s'attendre et où obtenir de l'aide. Gardez le détail technique dans une note distincte.
8. **Vérifier brièvement la préparation.** Utilisez une courte liste de contrôle cohérente pour les mises en production importantes. Omettez-la pour les mises en production courantes que le pipeline couvre.
9. **Observer la mise en production.** Surveillez les taux d'erreur, la performance et les indicateurs utilisateur pendant et après le déploiement, et désignez quelqu'un pour observer. Consignez ce que vous avez vu.
10. **Consigner ce qui a été mis en production.** Tenez un registre des versions, des dates et de l'état des interrupteurs, ce qui aide lors des incidents et des audits. Générez-le à partir du pipeline lorsque vous le pouvez.

## Questions à discuter avec votre équipe

**Quelle est la différence entre déployer et mettre en production dans notre organisation, et qui décide de chacun ?**
Dans de nombreuses équipes, les deux sont le même événement. Demandez qui décide de placer le code en production et qui décide du moment où les utilisateurs voient la fonctionnalité. Attendez-vous à des réponses floues. Demandez ensuite de choisir une fonctionnalité à séparer.

**À quelle vitesse pourrions-nous désactiver une nouvelle fonctionnalité si elle causait un préjudice ?**
Testez la réponse. Certaines équipes peuvent désactiver un interrupteur en quelques secondes ; d'autres ont besoin d'un nouveau déploiement et d'une approbation. Demandez la dernière fois. Demandez ensuite de choisir une fonctionnalité risquée et de planifier un interrupteur d'arrêt rapide.

**Que sait notre équipe de support d'une mise en production avant que les utilisateurs la voient ?**
Interrogez le centre de services. Attendez-vous à « rien avant le premier appel ». Demandez ensuite de convenir d'un dossier d'information standard et d'un moment, par exemple 48 heures avant.

**Quels interrupteurs de fonctionnalité avons-nous, et lesquels devraient avoir disparu ?**
Une liste d'interrupteurs en montre souvent beaucoup dont personne ne se souvient. Demandez qui est responsable de chacun. Demandez ensuite de planifier le retrait des plus anciens et d'ajouter un champ de responsable.

**Comment mettons-nous en production un changement qui touche la base de données, et que se passe-t-il si nous devons revenir en arrière ?**
Les changements de données causent les pires surprises. Demandez la dernière migration et son plan de retour arrière. Demandez ensuite de convenir d'un modèle, comme des changements rétrocompatibles en deux étapes.

**Où l'IA pourrait-elle aider pour les notes de version ou la préparation, et que doit vérifier une personne ?**
L'IA peut rédiger des notes à partir de messages de commit et de tickets. Elle peut mal énoncer ce qui a changé. Demandez qui lit le brouillon et le compare au changement. Demandez ensuite d'essayer des brouillons d'IA pour des notes internes, une personne approuvant chacun.

## En pratique : un exemple de gestion des services

Le catalogue en ligne d'une bibliothèque nationale est utilisé par des chercheurs du monde entier. L'équipe met en production une page de recherche repensée. Auparavant, un tel changement aurait été mis en ligne un mardi soir avec une courte annonce. Cette fois, la responsable du service demande une mise en production par étapes.

L'équipe déploie la nouvelle page en production une semaine plus tôt, désactivée. Elle l'active ensuite pour le personnel interne, puis le lendemain pour 5 % des visiteurs tirés au hasard. Le responsable de la mise en production surveille les taux de réussite des recherches et le nombre d'erreurs, et le centre de services reçoit un guide d'une page et une courte liste de problèmes connus deux jours avant. Le troisième jour, un chercheur du groupe pilote signale que les recherches utilisant certains caractères non anglais échouent. L'équipe désactive l'interrupteur pour tous les utilisateurs en une minute, corrige le problème le lendemain matin et redémarre le déploiement à 5 %. Deux semaines plus tard, la nouvelle page est disponible pour tous, et l'interrupteur est programmé pour retrait.

Ce qui change : la défaillance a touché une poignée d'utilisateurs pendant une journée, et le centre de support était prêt à répondre aux questions. Ce qui reste difficile : le système d'interrupteurs se trouve dans un outil distinct dont l'accès n'est pas strictement contrôlé, si bien que l'équipe a demandé une revue ; les notes de version ont été écrites par les développeurs et les chercheurs les ont trouvées confuses ; et la maintenance en double de l'ancienne et de la nouvelle page de recherche a coûté environ une semaine d'effort. La responsable ajoute à l'étape des notes de version un relecteur du point de vue des utilisateurs.

## Quatre perspectives

### Équipes produit et de livraison

Concevez pour séparer déploiement et mise en production : utilisez des interrupteurs, rendez les changements de données compatibles et planifiez le chemin du retour. Observez vos propres mises en production et écrivez des notes que les utilisateurs et le support peuvent comprendre.

### Équipes de service et d'exploitation

Aidez à définir la préparation, la surveillance et le retour arrière. Demandez tôt les informations de mise en production et dites aux développeurs ce dont vous avez besoin. Gardez exact le registre de ce qui est en production.

### Direction et gouvernance

Décidez du calendrier des mises en production avec l'activité, non d'après le calendrier de déploiement. Financez le pipeline et l'outillage d'interrupteurs. Demandez un déploiement par étapes pour les fonctionnalités à fort impact et évitez la pression pour livrer à une date fixe sans tenir compte de la préparation.

### Clients et utilisateurs

Vous devriez être informés des changements qui comptent en termes que vous comprenez, et pouvoir signaler facilement les problèmes. Si vous participez à un accès anticipé, attendez-vous à ce qu'on vous demande un retour et dites à l'équipe ce que vous voyez.

## Agilité, IA, automatisation et analytique

### Agilité

De petites mises en production fréquentes avec de vrais utilisateurs impliqués dans les premières étapes donnent une rétroaction rapide. Traitez chaque mise en production comme une étape d'apprentissage et ajustez la suivante. Attention : ne mettez pas en production des fonctionnalités que les utilisateurs ne veulent pas simplement parce que le pipeline le permet ; vérifiez la valeur auprès des utilisateurs.

### IA

L'IA peut rédiger des notes de version à partir de changements et de tickets, résumer les retours après déploiement et suggérer quoi surveiller. Nommez un responsable et faites comparer le brouillon au changement par une personne avant publication. Attention : une note de version plausible mais fausse induit en erreur les utilisateurs et le support ; vérifiez par rapport au changement réel. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

Automatisez le déploiement, le déploiement par étapes, les contrôles de santé, l'arrêt automatique sur de mauvais indicateurs et le retour arrière, avec journaux et dérogation manuelle. Attention : des règles de déploiement automatique qui se déclenchent sur de mauvais indicateurs peuvent se tromper ; testez-les et gardez une personne informée. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Comparez les indicateurs entre le groupe qui a reçu la mise en production et les autres pendant le déploiement, comme les erreurs, la réussite des tâches et les plaintes. Attention : de petits groupes donnent des résultats bruités, et comparer sans soin peut induire en erreur ; convenez de ce que vous regarderez et du temps d'attente. Voir le Sujet 7.3 — Mesure et reporting et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Mise en production et déploiement liés.** Chaque lancement est risqué. Séparez-les avec des interrupteurs et un déploiement par étapes.
- **Des interrupteurs sans responsable.** Le code se remplit de chemins morts. Consignez responsables et dates de retrait.
- **Pas de retour rapide.** Une mauvaise mise en production dure des heures. Répétez le retour arrière et les interrupteurs.
- **Le support l'apprend au premier appel.** Le centre n'est pas préparé. Donnez des notes et un guide à l'avance.
- **Des notes de version écrites pour les développeurs.** Les utilisateurs ne peuvent pas les lire. Écrivez pour le public.
- **Des changements de données non planifiés.** Un retour arrière est impossible. Utilisez des étapes petites et compatibles.
- **Ne rien observer.** Les problèmes sont trouvés par les utilisateurs. Désignez un observateur et fixez des indicateurs.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Séparation déploiement et mise en production | Même événement | Quelques interrupteurs utilisés | Interrupteurs et déploiement par étapes pour les fonctionnalités importantes | Décisions de déploiement fondées sur des données | Déploiement automatisé avec garde-fous entre services |
| Retour arrière | Lent et manuel | Documenté | Voies rapides répétées | Temps de rétablissement mesuré | Automatique et testé régulièrement |
| Communication | Annoncée au lancement | Notes pour certaines mises en production | Notes pour chaque public, support informé à l'avance | Notes testées auprès des lecteurs | Communication intégrée au pipeline et aux canaux |
| Enregistrements | Mémoire et courriels | Tableur | Générés à partir du pipeline | Utilisés dans les revues et audits | Reliés entre versions, interrupteurs et incidents |

## Liste de contrôle

- [ ] Nous séparons le déploiement de la mise en production pour les changements importants.
- [ ] Les interrupteurs de fonctionnalité ont des responsables et des dates de retrait.
- [ ] Nous déployons par étapes avec des indicateurs définis et des critères d'arrêt.
- [ ] Nous savons comment désactiver ou revenir en arrière rapidement et nous nous y sommes exercés.
- [ ] Le support reçoit les informations de mise en production avant les utilisateurs.
- [ ] Les notes de version sont écrites pour leurs lecteurs.
- [ ] Les changements de données se font par étapes compatibles et réversibles.
- [ ] Les enregistrements de ce qui a été mis en production sont générés à partir du pipeline.

## Invites d'IA

**Rédiger des notes de version à relire.**

```text
Here are the changes in this release: [paste list of changes with ticket titles]. The audience is [users, support staff, or operations].
Draft release notes of under 200 words in plain language, grouped by what users will notice, and list items you could not describe without guessing. Do not add features or dates that are not in the list.
List what you are unsure of.
```

**Préparer une liste de contrôle de préparation à la mise en production.**

```text
Our release: [describe]. Risks we know of: [list]. Our usual checks: [list].
Draft a checklist of up to ten yes/no questions to answer before release, with who answers each. Keep it short and tied to the listed risks.
List what you are unsure of.
```

**Planifier un déploiement par étapes.**

```text
Our feature: [describe]. Our users: [groups and sizes]. Indicators we can measure: [list].
Propose three stages with the audience, what to watch, how long, and what would make us stop. Note what the indicators cannot tell us. Do not claim any stage is safe.
List what you are unsure of.
```

## Compétences d'IA

- [release-notes](../../../../skills/release-notes/SKILL.md) : à utiliser pour rédiger des notes de version pour chaque public.
- [changelog](../../../../skills/changelog/SKILL.md) : à utiliser pour tenir un historique clair des changements.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md) : à utiliser pour tester plus tôt dans le pipeline.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour documenter les étapes de déploiement et de retour arrière.

## Sources principales

- Jez Humble et David Farley, *Continuous Delivery* (2010) : le fondement des pipelines de déploiement et des techniques de mise en production.
- PeopleCert, pages de certification ITIL : la description des pratiques de gestion des mises en production et des déploiements par le propriétaire.
- Wikipedia, « Software deployment » et « Feature toggle » : des aperçus des idées principales.
- Wikipedia, « Release management » : contexte sur la discipline.

## Références

1. Release management — Wikipedia — https://en.wikipedia.org/wiki/Release_management
2. Software deployment — Wikipedia — https://en.wikipedia.org/wiki/Software_deployment
3. Software release life cycle — Wikipedia — https://en.wikipedia.org/wiki/Software_release_life_cycle
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Release notes — Wikipedia — https://en.wikipedia.org/wiki/Release_notes
7. Changelog — Wikipedia — https://en.wikipedia.org/wiki/Changelog
8. Software versioning — Wikipedia — https://en.wikipedia.org/wiki/Software_versioning
9. Schema migration — Wikipedia — https://en.wikipedia.org/wiki/Schema_migration
10. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
11. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
