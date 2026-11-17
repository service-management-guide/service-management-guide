# Infrastructure as Code et GitOps

**L'infrastructure as code définit serveurs, réseaux et ressources cloud dans des fichiers texte relus que des outils appliquent ; GitOps y ajoute la règle selon laquelle le dépôt est le seul moyen de modifier les systèmes en production et un contrôleur maintient la réalité conforme à lui, de sorte que la gestion de versions devient la trace des changements et le moyen de rétablissement.**

## Pourquoi c'est important

Pendant longtemps, l'infrastructure a été construite à la main. Un ingénieur se connectait à un serveur, installait des paquets, modifiait la configuration et passait à autre chose. Le serveur devenait un objet unique, dont l'histoire vivait dans la mémoire de l'ingénieur et quelques notes. Quand il tombait en panne, on le reconstruisait de mémoire. Quand un second serveur était nécessaire, c'était une copie qui différait par de petits détails que personne ne pouvait lister. Le dépannage consistait à comprendre comment deux systèmes « identiques » en étaient venus à se comporter différemment.

L'infrastructure as code (IaC) remplace cela par du texte. L'état souhaité de l'infrastructure est écrit dans des fichiers, conservé en gestion de versions, relu comme du logiciel et appliqué par des outils. Reconstruire un environnement devient une commande. Une seconde copie, ce sont les mêmes fichiers avec d'autres valeurs. Un changement est une demande de fusion, avec un relecteur, un test et une trace. Wikipedia décrit l'infrastructure as code comme la gestion et le provisionnement de l'infrastructure au moyen de fichiers de définition lisibles par machine, plutôt que par une configuration interactive.

GitOps pousse l'idée d'un cran. Le dépôt est déclaré source unique de vérité de l'état souhaité, et un logiciel surveille à la fois lui et le système en production, et amène le système en conformité. Personne ne modifie la production à la main ; on modifie le dépôt. Cela apporte beaucoup à la gestion des services : une piste d'audit pour chaque changement, un rétablissement rapide, la cohérence entre environnements et un lieu naturel pour l'approbation des changements. Cela introduit aussi de nouveaux risques, comme des secrets dans des dépôts et des erreurs qui s'appliquent partout à la fois. Ce sujet explique les idées et comment les adopter avec soin. Il s'appuie sur la gestion de la configuration (Sujet 4.4 — Gestion de la configuration), la livraison continue (Sujet 2.2 — Livraison continue) et l'habilitation des changements (Sujet 3.4 — Habilitation des changements), et mène aux pipelines (Sujet 6.4 — Pipelines et changements automatisés).

## Concepts clés

**Infrastructure as code (IaC).** Définir l'infrastructure dans du code ou des fichiers de configuration que des outils lisent et appliquent. Elle couvre serveurs, réseaux, stockage, bases de données, règles d'accès et paramètres de plateforme. Wikipedia décrit l'approche et son histoire. Les fichiers sont à la fois la documentation et le mécanisme.

**Déclaratif et impératif.** Une définition déclarative énonce ce que doit être l'état final (« il y a trois serveurs de ce type derrière cet équilibreur de charge ») ; l'outil détermine comment y arriver. Une définition impérative énonce les étapes à suivre. Wikipedia décrit la programmation déclarative et impérative. Les outils déclaratifs tendent à être plus faciles à raisonner et à répéter sans danger, et les scripts impératifs offrent plus de contrôle pour les tâches inhabituelles. De nombreuses équipes utilisent les deux.

**Outils.** Les exemples comprennent Terraform, qui provisionne des ressources cloud, Ansible, qui configure des systèmes, et Kubernetes, qui exécute des conteneurs selon des manifestes déclarés. Wikipedia décrit chacun. Le paysage des outils change vite ; choisissez selon l'adéquation, le support et les compétences dont vous disposez, et gardez des définitions aussi portables que praticable.

**État souhaité, état réel et dérive.** L'état souhaité est ce que dit le code ; l'état réel est ce qui fonctionne. La dérive est la différence, généralement due à des changements manuels ou des défaillances. Détecter et corriger la dérive est un bénéfice central de l'IaC. Voir le Sujet 4.4 — Gestion de la configuration.

**Idempotence.** Appliquer la même définition à répétition donne le même résultat. Wikipedia décrit l'idempotence. C'est ce qui rend sûre la réexécution d'une application pour corriger la dérive.

**Fichiers d'état.** Certains outils conservent un enregistrement des ressources qu'ils gèrent, qu'ils comparent avec la définition. Traitez-le avec soin : il peut contenir des données sensibles, ne doit pas être modifié à la main et doit être verrouillé pour que deux personnes n'appliquent pas en même temps.

**Infrastructure immuable.** Au lieu de modifier un serveur en fonctionnement, vous en construisez un nouveau à partir d'une image connue et remplacez l'ancien. Cela évite la dérive et rend le retour arrière simple : on rebascule. Cela fonctionne mieux avec des machines virtuelles et des conteneurs, décrits sur Wikipedia, et des images bien construites.

**Gestion de versions et revue.** Les définitions vivent en gestion de versions, comme Git, que Wikipedia décrit comme un système distribué de gestion de versions. Les changements passent par des branches et des revues, décrites comme des demandes de fusion et la revue de code. L'historique montre qui a changé quoi, quand et pourquoi, ce qui soutient l'audit et l'apprentissage. Voir le Sujet 3.4 — Habilitation des changements.

**GitOps.** Une approche opérationnelle dans laquelle un dépôt Git contient l'état souhaité et un agent automatisé maintient le système en production conforme à lui. Les changements ne se font qu'en modifiant le dépôt ; l'agent les récupère et les applique, et annule les changements manuels. Wikipedia mentionne GitOps sous DevOps. La conception en tirage (pull) signifie que le système de production récupère lui-même sa configuration, de sorte que les identifiants de production n'ont pas à vivre dans le système de construction. Consultez la documentation du projet pour les détails de l'approche.

**Boucles de réconciliation.** Un contrôleur qui compare à répétition l'état souhaité et l'état réel et agit pour combler l'écart. L'idée vient de la théorie du contrôle, décrite sur Wikipedia, et sous-tend le fonctionnement de Kubernetes et des outils GitOps. Les boucles sont résilientes, et elles peuvent aussi répéter vite un mauvais changement.

**Environnements et promotion.** Les mêmes définitions, avec des valeurs différentes, créent les environnements de développement, de test et de production. Les changements sont promus de l'un à l'autre. Garder les environnements cohérents rend les tests plus significatifs. Voir le Sujet 3.5 — Gestion des mises en production et des déploiements.

**Politique en tant que code.** Des règles sur ce qui est permis, comme « aucun stockage public » ou « toutes les ressources doivent être étiquetées », écrites en code et vérifiées automatiquement avant l'application des changements. Cela place les contrôles là où le changement est fait et produit des preuves. Voir le Sujet 6.4 — Pipelines et changements automatisés.

**Secrets.** Mots de passe, clés et jetons ne doivent pas être stockés en clair dans des dépôts. Utilisez un gestionnaire de secrets ou le chiffrement, et donnez à l'automatisation un accès minimal et de courte durée. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Modules et réutilisation.** Des modules partagés et testés pour des modèles courants, comme un réseau standard ou une base de données, accélèrent le travail et font respecter les normes. Ils ont besoin d'un responsable, de versions et de notes de version.

**Rayon d'explosion.** Une erreur dans une définition partagée peut toucher de nombreux systèmes à la fois. Limitez-le en découpant l'état en unités plus petites, en déployant par étapes et en exigeant une revue pour les modules partagés.

**Tester le code d'infrastructure.** Les méthodes comprennent les contrôles de syntaxe et de politique, l'aperçu des changements avant application, les tests dans des environnements jetables et des contrôles après application. Wikipedia décrit des idées apparentées sous l'automatisation des tests. Voir le Sujet 2.2 — Livraison continue.

**Comment les angles s'articulent.** L'IaC et GitOps sont la base d'ingénierie d'une exploitation agile : des changements petits, relus et réversibles. L'IA peut rédiger des définitions et expliquer des plans, sous relecture. L'automatisation les applique. L'analytique lit l'historique pour la fréquence des changements et les échecs.

## Bonnes pratiques

1. **Mettre chaque changement dans le code.** Faites du dépôt la voie des changements aux systèmes importants et interdisez les changements manuels sauf urgences définies. Consignez les changements d'urgence et réintégrez-les.
2. **Utiliser la revue et de petits changements.** Exigez qu'une seconde personne relise chaque changement et gardez-les assez petits pour être compris. Montrez l'aperçu de ce qui va changer.
3. **Préférer des définitions déclaratives et des étapes idempotentes.** Elles sont plus faciles à répéter et à vérifier pour la dérive. Utilisez avec soin des scripts impératifs pour les tâches qui en ont besoin.
4. **Détecter et corriger la dérive.** Comparez l'état réel à l'état souhaité selon un calendrier ou en continu. Décidez pour chaque type de dérive s'il faut annuler automatiquement ou alerter.
5. **Tenir les secrets hors du code.** Utilisez un gestionnaire de secrets, chiffrez au besoin, donnez à l'automatisation des identifiants de courte durée et analysez les dépôts pour y repérer des secrets divulgués.
6. **Protéger l'état et le dépôt.** Restreignez qui peut modifier les définitions et l'état de production, faites respecter la protection des branches et sauvegardez le dépôt et l'état.
7. **Tester avant d'appliquer.** Exécutez des contrôles de politique, des aperçus et des tests dans des environnements jetables. Examinez le plan pour y chercher des suppressions inattendues.
8. **Limiter le rayon d'explosion.** Découpez les définitions en unités pouvant défaillir indépendamment, déployez par étapes et protégez les ressources critiques contre la suppression accidentelle.
9. **Réutiliser des modules testés avec des responsables.** Publiez des modules versionnés pour les modèles standard, avec documentation et notes de version, et retirez les anciennes versions.
10. **Planifier le rétablissement.** Répétez la reconstruction d'un environnement à partir du code, restauration des données comprise, et chronométrez-la. Incluez le dépôt et les outils dans vos plans de continuité. Voir le Sujet 3.12 — Gestion de la continuité des services.

## Questions à discuter avec votre équipe

**Lesquels de nos systèmes pourrions-nous reconstruire aujourd'hui à partir du code, et lesquels seulement de mémoire ?**
Dressez une liste. Attendez-vous à ce que beaucoup dépendent d'une seule personne. Demandez ensuite de choisir un système et de le définir en code.

**Quand quelqu'un a-t-il modifié la production à la main pour la dernière fois, et comment l'avons-nous su ?**
Demandez des anecdotes. Attendez-vous à ce que personne ne le suive. Demandez ensuite d'ajouter la détection de dérive à un environnement et de convenir de ce qui se passe en cas de différence.

**Où un secret pourrait-il se trouver dans un dépôt ou un fichier d'état ?**
Cherchez ensemble. Attendez-vous à des surprises. Demandez ensuite d'analyser les dépôts et de déplacer les découvertes dans un gestionnaire de secrets.

**Quel est le plus grand changement qu'une seule application pourrait faire, et comment le limiterions-nous ?**
Pensez aux modules partagés et aux états monolithiques. Attendez-vous à des réponses inconfortables. Demandez ensuite de découper un grand état en états plus petits.

**Comment relisons-nous les changements d'infrastructure, et que regarde réellement un relecteur ?**
Demandez une revue récente. Attendez-vous à une approbation rapide. Demandez ensuite de convenir de ce qu'un relecteur doit vérifier, comme la sortie du plan et l'impact sur la sécurité.

**Où l'IA pourrait-elle nous aider à écrire ou à relire du code d'infrastructure, et comment le vérifions-nous ?**
L'IA peut rédiger des définitions et expliquer des plans. Elle peut aussi produire des valeurs par défaut peu sûres ou de mauvais paramètres de ressources. Demandez qui relit et quels contrôles s'exécutent. Demandez ensuite de faire passer le code rédigé par l'IA par les mêmes contrôles de politique que n'importe quel autre.

## En pratique : un exemple de gestion des services

L'équipe numérique d'une bibliothèque nationale exploite un service de recherche de catalogue sur un cloud public. Les environnements ont été construits à la main sur plusieurs années. Un environnement de test diffère de la production de façons que personne ne peut lister, et une panne récente a été retracée jusqu'à une modification de groupe de sécurité faite manuellement lors d'un incident antérieur et jamais consignée.

Le responsable de la plateforme choisit de définir un environnement en code comme essai. À l'aide d'un outil déclaratif, l'équipe décrit le réseau, le calcul, la base de données et les règles d'accès de l'environnement de test, importe les ressources existantes et place le code dans un dépôt avec protection des branches et revue obligatoire. Un pipeline exécute des contrôles de politique, comme aucun stockage public et étiquettes obligatoires, et montre le plan à chaque demande de fusion. Les secrets passent au gestionnaire de secrets du fournisseur de cloud.

Elle ajoute ensuite la détection de dérive : une tâche de nuit compare le code avec l'état réel du cloud et publie les différences dans le canal de l'équipe. La première semaine, elle trouve onze changements manuels. Huit sont sans conséquence, deux sont des ressources de test périmées et un est une règle de pare-feu ouverte sur le port d'une base de données. Ils corrigent la règle et suppriment les ressources.

Après trois mois, la production est aussi en code, et un contrôleur de type GitOps dans la plateforme de conteneurs applique les changements approuvés depuis le dépôt. Reconstruire de zéro l'environnement de test prend 40 minutes. L'équipe répète la reconstruction de la production dans un compte séparé, avec restauration des données, en une demi-journée.

Ce qui change : l'historique des changements est dans le dépôt, les revues sont réelles et les deux environnements correspondent. Ce qui reste difficile : l'ancien serveur de base de données est mal pris en charge par l'outillage et reste en partie manuel ; le fichier d'état a contenu une fois un mot de passe en clair issu d'un import antérieur, que l'équipe a dû renouveler ; et un ingénieur a appliqué un changement depuis un ordinateur portable avec une version d'outil différente, ce qui a produit des différences inattendues. Le responsable ajoute une version d'outil épinglée dans le pipeline, une règle selon laquelle les applications ne viennent que du pipeline et une analyse de l'état pour y chercher des secrets.

## Quatre perspectives

### Équipes produit et de livraison

Définissez l'infrastructure de votre service en code à côté de l'application, relisez-la et testez-la dans des environnements jetables. Évitez les changements manuels. Incluez étiquettes, responsabilité et paramètres de sécurité dans la définition.

### Équipes de service et d'exploitation

Utilisez le dépôt comme trace des changements et détectez la dérive. Examinez soigneusement les plans, protégez l'état et les secrets, et répétez les reconstructions. Gardez rares les changements d'urgence et réintégrez-les dans le code.

### Direction et gouvernance

Demandez des preuves issues du dépôt et du pipeline plutôt que des réunions. Financez l'outillage, la formation et les répétitions. Précisez que les changements manuels en production sont des exceptions qui doivent être consignées.

### Clients et utilisateurs

Vous profitez d'environnements qui se comportent de la même façon et d'un rétablissement plus rapide. Vous devriez voir moins de surprises après les changements et un préavis clair pour les plus importants.

## Agilité, IA, automatisation et analytique

### Agilité

De petits changements d'infrastructure, relus et réversibles, avec une rétroaction rapide, sont la forme opérationnelle de la livraison continue. Construisez les définitions par incréments, en commençant par l'environnement le plus pénible. Attention : une migration en masse de tous les systèmes vers le code d'un coup est risquée ; avancez un système à la fois.

### IA

L'IA peut rédiger des définitions, expliquer un plan et suggérer des règles de politique, une personne relisant chaque changement. Nommez un responsable pour chaque usage. Attention : le code d'infrastructure généré peut être peu sûr par défaut ou supprimer des ressources ; appliquez les mêmes contrôles de politique et lisez le plan. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

### Automatisation

L'IaC et GitOps sont l'automatisation de l'infrastructure elle-même. Gardez les contrôleurs et pipelines à privilège minimal, journalisés et protégés, car ils peuvent tout changer. Attention : un réconciliateur automatique peut réappliquer une erreur partout ; déployez par étapes et gardez un moyen de le mettre en pause. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Regardez la fréquence des changements, le taux d'échec, le temps de reconstruction, le nombre de dérives, le temps pour détecter les changements manuels et les violations de politique. Attention : compter les commits récompense l'activité, et un faible nombre de dérives peut refléter un détecteur faible ; testez la détection avec un changement connu. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Une réalité hybride.** Certains changements dans le code et d'autres à la main. La dérive grandit. Faites du code la seule voie et détectez la dérive.
- **Des secrets dans le dépôt.** Les identifiants fuient. Utilisez un gestionnaire de secrets et analysez.
- **Un énorme état partagé.** Un changement touche tout. Découpez en unités plus petites.
- **Des changements non relus.** Les erreurs atteignent la production. Exigez une revue et montrez le plan.
- **Des outils et modules non épinglés.** Le comportement change de façon inattendue. Épinglez les versions.
- **Jamais reconstruit.** Le rétablissement échoue quand on en a besoin. Répétez une reconstruction.
- **Le pipeline comme super-utilisateur.** Un pipeline compromis possède la production. Limitez les privilèges et protégez-le.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Couverture | Manuelle | Quelques ressources en code | La plupart des systèmes importants définis en code | Couverture et exceptions suivies | Tout le parc défini et gouverné comme du code |
| Contrôle | Aucune revue | Revue par les pairs | Revue, aperçu du plan et contrôles de politique sur chaque changement | Dérive détectée et traitée | Réconciliation avec supervision humaine entre environnements |
| Sécurité | Secrets dans le code | Conscience | Secrets gérés et analysés, automatisation à privilège minimal | Constats suivis jusqu'à leur clôture | Sécurité et politique intégrées aux modules partagés |
| Rétablissement | Reconstruction de mémoire | Documenté | Reconstruction répétée et chronométrée | Temps de rétablissement mesuré et amélioré | Rétablissement automatisé entre environnements et régions |

## Liste de contrôle

- [ ] Les systèmes importants sont définis en code en gestion de versions.
- [ ] Chaque changement est relu et montre un aperçu du plan.
- [ ] Les changements manuels en production sont interdits sauf urgences consignées.
- [ ] La dérive est détectée selon un calendrier et traitée par une règle.
- [ ] Les secrets sont dans un gestionnaire, et les dépôts et l'état sont analysés.
- [ ] Les outils et modules sont épinglés et ont des responsables.
- [ ] Les définitions sont découpées pour limiter le rayon d'explosion.
- [ ] Nous répétons la reconstruction d'un environnement et consignons le temps.

## Invites d'IA

**Relire la sortie d'un plan.**

```text
Here is the plan output from an infrastructure change: [paste].
List resources to be created, changed, and destroyed, highlight any deletion or replacement of a data store or network component, and list questions a reviewer should ask. Do not approve or reject.
List what you are unsure of.
```

**Rédiger des règles de politique à partir d'exigences.**

```text
Our requirements: [list, such as no public storage, tags required, encryption at rest]. Our tool: [name, or "undecided"].
Write each requirement as a plain-language rule with one example of a violation, and describe how to test the rule. Do not write code unless I name the tool.
List what you are unsure of.
```

**Résumer les constats de dérive.**

```text
Here is a drift report listing differences between code and the running environment: [paste].
Group the differences by type (extra resource, changed setting, missing resource), flag any that touch access, network, or encryption, and write one question per group for the team. Do not recommend fixes.
List what you are unsure of.
```

## Compétences d'IA

- [configuration-management](../../../../skills/configuration-management/SKILL.md) : à utiliser pour relier les définitions en code aux services qu'elles soutiennent.
- [change-request](../../../../skills/change-request/SKILL.md) : à utiliser pour décrire clairement les changements d'infrastructure en vue d'une revue.
- [security-testing](../../../../skills/security-testing/SKILL.md) : à utiliser pour planifier les contrôles du code d'infrastructure et des secrets.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md) : à utiliser pour répéter la reconstruction à partir du code.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour documenter les procédures manuelles d'urgence qui subsistent.

## Sources principales

- Kief Morris, *Infrastructure as Code* (2e édition, 2020) : un guide pratique pour définir et gérer l'infrastructure.
- Jez Humble et David Farley, *Continuous Delivery* (2010) : les fondements d'environnements et de pipelines reproductibles.
- La documentation des outils que vous utilisez, comme Terraform, Ansible et Kubernetes : la source de référence sur leur comportement.
- Wikipedia, « Infrastructure as code » : un aperçu de l'approche.

## Références

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
