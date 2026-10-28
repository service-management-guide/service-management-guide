# Libre-service et traitement automatisé

**Le libre-service permet aux gens d'obtenir ce dont ils ont besoin sans attendre une personne, et le traitement automatisé accomplit la demande en coulisses ; les deux fonctionnent quand la demande est standard, que l'identité est vérifiée, que l'accès suit le moindre privilège et qu'une voie vers une personne subsiste pour tout ce que le système ne peut pas traiter.**

## Pourquoi c'est important

La plupart des demandes qui parviennent à une équipe de service sont courantes : réinitialiser un mot de passe, ajouter quelqu'un à un groupe, installer un logiciel approuvé, réserver une salle de réunion, savoir comment se connecter au réseau sans fil. Une personne qui les traite à la main met quelques minutes pour chacune. Le demandeur attend des heures, parce que la demande reste dans une file jusqu'à ce que quelqu'un soit libre, et celui qui la traite passe sa journée sur un travail qui apporte peu.

Le libre-service change les deux côtés. Le demandeur trouve la chose dans un portail ou une conversation, remplit ce qui est nécessaire et l'obtient, souvent immédiatement. En coulisses, le traitement automatisé accomplit les étapes : crée le compte, attribue la licence, prévient le responsable et consigne le résultat. Wikipedia décrit le libre-service comme un système dans lequel les gens se servent eux-mêmes. Dans un service bien géré, il améliore la rapidité, la cohérence et le coût, et libère du personnel qualifié pour des tâches plus difficiles.

Un traitement qui s'exécute sans personne s'exécute aussi sans le jugement d'une personne. Si le système accorde un accès sur une fausse déclaration, installe la mauvaise chose ou échoue en silence, l'effet est immédiat et répété. Les questions de conception portent donc autant sur le contrôle que sur la commodité : qui demande, est-il autorisé, qu'est-ce qui peut mal tourner et comment le saurons-nous ? Ce sujet décrit comment concevoir en sécurité le libre-service et le traitement automatisé. Il s'appuie sur la gestion des demandes de service (Sujet 3.6 — Gestion des demandes de service), le catalogue (Sujet 3.8 — Gestion du catalogue de services) et l'automatisation des flux de travail (Sujet 6.2 — Automatisation et orchestration des flux de travail), et partage des préoccupations avec la sécurité de l'information (Sujet 3.13 — Gestion de la sécurité de l'information).

## Concepts clés

**Libre-service.** Des mécanismes qui permettent aux utilisateurs d'accomplir eux-mêmes des tâches, par un portail, une application, un assistant conversationnel ou une borne. Wikipedia décrit le libre-service et les portails web. Il couvre la recherche d'information, le dépôt de demandes, le suivi de l'état et des actions comme la réinitialisation d'un mot de passe.

**Traitement automatisé.** Accomplir les étapes d'une demande par logiciel. La forme la plus simple est un script derrière un formulaire ; la forme plus riche est un flux de travail orchestré entre plusieurs systèmes. Wikipedia décrit le provisionnement, la mise en place d'utilisateurs, de systèmes et de services. Le provisionnement sans intervention (zero-touch), également décrit là, configure automatiquement un appareil lors de sa première connexion.

**Traitement entièrement automatisé, assisté et approuvé.** Certaines demandes peuvent être traitées sans aucun humain, comme l'ajout d'une application approuvée. D'autres exigent d'abord une approbation humaine, puis s'exécutent automatiquement. D'autres encore exigent qu'un technicien accomplisse une étape, le système faisant le reste. Choisissez la voie selon le risque et le coût. Voir le Sujet 6.1 — Stratégie d'automatisation.

**Identité et authentification.** Le système doit savoir qui demande. Wikipedia décrit la gestion des identités et des accès, l'authentification unique et l'authentification multifacteur. Une authentification forte au moment d'une action sensible, comme une réinitialisation de mot de passe, empêche les attaquants d'exploiter la voie du libre-service.

**Droits et autorisation.** Qui est autorisé à demander quoi. Les règles peuvent dépendre du rôle, du service, du lieu ou de l'approbation du responsable. Wikipedia décrit le contrôle d'accès fondé sur les rôles, dans lequel les permissions suivent les rôles. Codez les règles dans le catalogue et le flux de travail, afin que le système, non l'exécutant, décide de l'éligibilité. Voir le Sujet 3.6 — Gestion des demandes de service.

**Moindre privilège et limites de durée.** N'accordez que l'accès nécessaire et, lorsque c'est possible, seulement pour la durée nécessaire. Wikipedia décrit le principe du moindre privilège. Un accès limité dans le temps, qui expire sauf renouvellement, réduit l'accumulation d'anciennes permissions. Les accès privilégiés, comme les droits d'administrateur, méritent un contrôle supplémentaire. Wikipedia décrit la gestion des accès privilégiés.

**Arrivées, mutations, départs.** Les événements de la vie d'une personne dans une organisation déclenchent de nombreuses demandes. Les automatiser à partir d'une source de confiance, généralement le dossier RH, fournit comptes et accès à l'arrivée, changements à la mutation et retrait au départ. Wikipedia décrit l'intégration des nouveaux arrivants. Voir le Sujet 1.9 — Gestion des services d'entreprise.

**Interfaces standard.** Les systèmes peuvent être reliés par des interfaces de programmation (API) et des normes de provisionnement d'identités, comme SCIM, décrit sur Wikipedia. Les interfaces standard réduisent le code sur mesure et rendent le traitement plus robuste. Là où un système n'a pas d'interface, il faut une personne ou une automatisation fragile.

**Vérification et confirmation.** Après une étape, vérifiez qu'elle a fonctionné et dites-le au demandeur. Un traitement qui rapporte un succès sans vérifier est une source de défaillance silencieuse. Fournissez un état que l'utilisateur peut voir.

**Exceptions et passage de relais.** Les demandes qui ne rentrent pas dans le cadre, ou qui échouent, vont à une personne avec tout le contexte, et l'utilisateur en est informé. Facilitez la possibilité de joindre une personne à tout moment. Voir le Sujet 5.3 — Centre de services avec IA et agents virtuels.

**Abus et fraude.** Le libre-service est une cible de l'ingénierie sociale, dans laquelle des attaquants persuadent ou trompent un système ou une personne pour qu'il accorde un accès. Wikipedia décrit l'ingénierie sociale. Les défenses comprennent des contrôles d'identité forts, des limites sur ce qui peut être fait à la fois, la surveillance de motifs inhabituels et des contrôles supplémentaires pour les demandes à haut risque.

**Expérience et accessibilité.** Le meilleur libre-service est facile à trouver et à utiliser pour tous. Wikipedia décrit l'expérience utilisateur, l'accessibilité et les Web Content Accessibility Guidelines. Tout le monde ne peut pas ou ne veut pas utiliser un portail, et la fracture numérique, décrite là, est réelle. Gardez d'autres voies ouvertes.

**Auditabilité.** Pour chaque demande, consignez qui a demandé, qui a approuvé, ce qui a été fait et quand. Wikipedia décrit les pistes d'audit. Cela soutient les enquêtes, les revues d'accès et la conformité.

**Retour arrière et compensation.** Si une étape échoue, annulez les étapes précédentes ou marquez-les pour nettoyage. Si une demande a été traitée par erreur, il faut un moyen de l'inverser. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

**Capacité des systèmes en aval.** L'automatisation peut envoyer des demandes plus vite qu'un système cible ne peut les traiter. Utilisez des files et des limites, et protégez les petits systèmes contre les inondations.

**Comment les angles s'articulent.** Le libre-service est le côté tourné vers l'utilisateur de l'angle automatisation. La pratique agile suggère de commencer par les principales demandes et d'améliorer avec les retours. L'IA peut aider les utilisateurs à trouver la bonne demande et à remplir le formulaire, avec des limites strictes sur ce qu'elle peut accorder. L'analytique montre la demande, les échecs et l'abandon.

## Bonnes pratiques

1. **Commencer par les dix principales demandes.** Choisissez les plus fréquentes, standard et à faible risque, et rendez-les excellentes avant d'en ajouter d'autres. Voir le Sujet 3.8 — Gestion du catalogue de services.
2. **Écrire les règles d'éligibilité et d'approbation dans le système.** Faites en sorte que le catalogue sache qui peut demander quoi et qui doit approuver. Supprimez les approbations qui ne gèrent aucun risque réel.
3. **Vérifier l'identité en proportion du risque.** Utilisez une authentification forte pour les actions sensibles et des contrôles supplémentaires pour celles à haut risque. Ne laissez pas une déclaration dans une conversation tenir lieu de vérification.
4. **Accorder le moindre privilège, avec expiration.** Donnez le minimum d'accès pour une durée et renouvelez sur demande. Examinez régulièrement les accès.
5. **Traiter par petites étapes idempotentes avec contrôles.** Vérifiez chaque étape, confirmez à l'utilisateur et concevez de façon qu'une répétition ne fasse aucun mal. Journalisez chaque action.
6. **Fournir l'état et une issue.** Montrez l'avancement, envoyez des avis à des moments significatifs et facilitez la possibilité de joindre une personne.
7. **Concevoir pour l'échec.** Décidez ce qui se passe quand une étape échoue : réessayer, compenser ou passer à une personne. Envoyez les échecs dans une file visible avec un responsable.
8. **Guetter les abus.** Surveillez les motifs inhabituels, comme de nombreuses réinitialisations depuis une seule source ou des demandes d'accès inhabituelles, et ajoutez des limites. Traitez le portail comme une partie de votre périmètre de sécurité.
9. **Tester avec de vrais utilisateurs.** Regardez des gens utiliser le portail. Corrigez les formulations et les parcours déroutants et testez l'accessibilité. Gardez d'autres voies pour ceux qui en ont besoin.
10. **Réexaminer et retirer.** Vérifiez quelles demandes automatisées échouent, lesquelles sont abandonnées et lesquelles coûtent plus à entretenir qu'elles ne font gagner. Améliorez-les ou supprimez-les.

## Questions à discuter avec votre équipe

**Quelles demandes pourrions-nous traiter aujourd'hui sans personne si nous faisions confiance à l'identité et aux règles ?**
Listez les candidates. Attendez-vous aux réinitialisations de mots de passe et aux logiciels standard. Demandez ce qui nous empêche de faire confiance. Demandez ensuite d'en choisir une et de lever l'obstacle.

**Comment savons-nous que la personne qui demande est bien celle qu'elle dit être, pour chaque type de demande ?**
Parcourez le contrôle. Attendez-vous à des contrôles plus faibles que ce qu'on supposait. Demandez ensuite de renforcer une demande à haut risque.

**Quelle est la pire chose qui pourrait arriver si une demande automatisée s'exécutait à tort ou pour la mauvaise personne ?**
Imaginez un accès à un système sensible ou une suppression de données. Attendez-vous à quelques cas inconfortables. Demandez ensuite d'ajouter approbation ou limites pour eux.

**Combien de temps durent les accès accordés, et qui les examine ?**
Demandez les données. Attendez-vous à des octrois permanents. Demandez ensuite de choisir un type d'accès auquel donner une date d'expiration.

**Que voit un utilisateur quand une demande échoue à mi-chemin, et qui l'apprend ?**
Essayez une défaillance. Attendez-vous au silence. Demandez ensuite de concevoir un message, une file et un responsable.

**Qui pourrait ne pas pouvoir utiliser notre portail, et comment obtient-il de l'aide ?**
Pensez aux besoins d'accessibilité, à la langue et à la connectivité. Attendez-vous à ce que certains groupes n'aient pas été considérés. Demandez ensuite de tester avec quelques vrais utilisateurs de ces groupes.

## En pratique : un exemple de gestion des services

Le service informatique d'un conseil régional traite environ 1 800 demandes par mois pour 4 000 agents. Les déverrouillages de comptes et réinitialisations de mots de passe en représentent 600, les mises en place de nouveaux arrivants 120 et les installations de logiciels 300. Une boîte partagée et une file téléphonique en prennent la plupart. Les agents des bibliothèques, des dépôts et des maisons de soins téléphonent souvent parce qu'ils ne peuvent pas joindre un technicien sur leur site.

La responsable des services construit un libre-service pour les trois principaux types de demandes. Pour les réinitialisations de mots de passe, le flux de libre-service propre au système d'identité demande une authentification multifacteur, avec comme solution de repli un appel vidéo avec un technicien pour les agents sans appareil enregistré. Pour les logiciels, un catalogue de 40 applications préapprouvées s'installe automatiquement après approbation du responsable de l'utilisateur par lien dans un courriel, avec approbation automatique pour les dix outils courants à faible risque. Pour les nouveaux arrivants, le dossier du système RH crée un dossier parent et déclenche, par le moteur de flux de travail, la création du compte, de la boîte aux lettres et de l'appartenance aux groupes, avec une tâche de technicien pour l'ordinateur portable.

L'équipe conçoit pour le contrôle. L'éligibilité est codée : le personnel des dépôts ne peut pas demander de logiciels de conception. L'accès au système financier n'est jamais automatique ; il va à l'équipe financière pour approbation, avec une expiration d'un an. Chaque étape de traitement vérifie son résultat : après la création d'un compte, le flux vérifie que la connexion est possible et prévient l'utilisateur. Les échecs vont dans une file de technicien avec l'erreur jointe.

Après quatre mois, les appels baissent d'environ 40 %, et les nouveaux arrivants ont des comptes dès le premier jour. Un moniteur détecte une rafale de tentatives de réinitialisation de mot de passe depuis une seule adresse, et l'équipe d'identité la bloque. Ce qui reste difficile : certaines maisons de soins n'ont pas d'accès Internet fiable, si bien que le personnel téléphone encore ; les installations automatiques échouent sur les appareils plus anciens, ce que l'équipe n'a découvert que par la file d'échecs ; et les responsables approuvent les liens de courriel sans lire, ce que la responsable a échantillonné et prévoit de traiter avec des approbations moins nombreuses et plus claires. La responsable ajoute une option par téléphone pour ceux qui ne peuvent pas utiliser le portail et une revue mensuelle des échecs.

## Quatre perspectives

### Équipes produit et de livraison

Exposez des API propres et des interfaces d'identité standard que le traitement peut utiliser. Fournissez la configuration et les paquets de votre produit, et prévenez l'équipe des changements qui cassent l'automatisation.

### Équipes de service et d'exploitation

Soyez responsables des modèles de demande, de l'automatisation et des files d'échec. Testez les chemins, guettez les abus et gardez des voies manuelles pour les exceptions. Utilisez les données pour améliorer formulaires et règles.

### Direction et gouvernance

Demandez des preuves que les contrôles d'identité et les règles d'accès fonctionnent, et des données sur les échecs et l'abandon. Financez l'accessibilité et les alternatives. Ne comptez pas les demandes automatisées comme un succès sans vérifier leur qualité.

### Clients et utilisateurs

Vous devriez pouvoir obtenir rapidement les choses courantes, voir l'état et joindre une personne quand cela ne convient pas. Gardez vos identifiants en sécurité et dites au fournisseur tout ce qui n'a pas fonctionné ou que vous n'avez pas pu utiliser.

## Agilité, IA, automatisation et analytique

### Agilité

Lancez un type de demande à la fois, observez l'usage réel et améliorez avant d'en ajouter d'autres. Impliquez les utilisateurs dans les formulaires et la formulation. Attention : un portail avec de nombreuses demandes à moitié fonctionnelles érode la confiance ; mieux vaut moins de demandes, meilleures.

### IA

L'IA peut aider les utilisateurs à trouver la bonne demande, préremplir les formulaires et résumer les demandes pour les approbateurs. Elle ne doit pas décider de l'éligibilité ni accorder un accès sur ses propres affirmations ; les règles et les contrôles d'identité décident. Attention : un message persuasif peut orienter un assistant ; gardez donc des pouvoirs étroits et vérifiez en dehors de la conversation. Voir le Sujet 5.3 — Centre de services avec IA et agents virtuels.

### Automatisation

L'automatisation du traitement a besoin d'étapes idempotentes, de contrôles, de journaux, de limites et d'un retour arrière. Traitez chaque flux de traitement comme un produit avec un responsable. Attention : l'octroi automatique d'un accès sans vérification est une faille de sécurité ; incluez des contrôles d'identité et des revues par échantillon. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Suivez la demande par type, le temps de traitement, la part entièrement automatisée, les échecs, l'abandon, les réouvertures et les signaux d'abus. Attention : les taux d'automatisation peuvent être relevés en déplaçant les cas problématiques ailleurs, et des temps de traitement courts peuvent masquer de mauvais résultats ; échantillonnez les résultats. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Des contrôles d'identité faibles.** Un attaquant utilise le libre-service pour prendre le contrôle de comptes. Renforcez l'authentification en proportion du risque.
- **Des octrois automatiques sans règles.** Les mauvaises personnes obtiennent un accès. Codez l'éligibilité et les approbations.
- **Des accès permanents.** Les anciennes permissions s'accumulent. Utilisez l'expiration et les revues.
- **Une défaillance silencieuse.** Une demande échoue et personne ne le sait. Vérifiez, prévenez et mettez les échecs en file.
- **Aucun moyen de joindre une personne.** Les utilisateurs sont bloqués. Offrez des alternatives claires.
- **Un portail inaccessible.** Une partie du personnel est exclue. Testez l'accessibilité et gardez d'autres voies.
- **Des inondations sur de petits systèmes.** Les services en aval tombent. Utilisez des files et des limites.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Libre-service | Téléphone et courriel | Portail pour quelques demandes | Portail et conversation pour les principales demandes avec état | Usage et abandon examinés | Expérience cohérente entre fonctions et canaux |
| Traitement | Manuel | Quelques scripts | Flux de travail orchestrés avec contrôles et journaux | Échecs et qualité mesurés | Automatisation de bout en bout avec supervision selon le risque |
| Identité et accès | Au cas par cas | Contrôles de base | Authentification forte, règles de rôle et expiration | Abus surveillés et accès examinés | Accès ajustés en continu entre systèmes |
| Inclusion | Non considérée | Conscience | Accessibilité testée, alternatives conservées | Résultats mesurés par groupe | Expérience conçue pour tous les utilisateurs |

## Liste de contrôle

- [ ] Nous avons choisi les principales demandes pour le libre-service et les avons décrites avec les mots des utilisateurs.
- [ ] Les règles d'éligibilité et d'approbation sont codées dans le système.
- [ ] Les contrôles d'identité correspondent au risque de chaque demande.
- [ ] L'accès suit le moindre privilège avec expiration lorsque c'est possible.
- [ ] Chaque étape de traitement est vérifiée, journalisée et sûre à répéter.
- [ ] Les échecs vont dans une file avec un responsable, et les utilisateurs sont prévenus.
- [ ] Nous surveillons les abus.
- [ ] L'accessibilité est testée et des voies alternatives existent.

## Invites d'IA

**Évaluer le risque par type de demande.**

```text
Here is a list of our request types with what each grants or changes: [paste].
For each, describe the worst plausible outcome if fulfilled in error or for the wrong person, and suggest a question about the level of identity check and approval needed. Do not rank by importance or decide.
List what you are unsure of.
```

**Tester un flux de libre-service.**

```text
Here is a description of how a self-service request works, step by step: [paste].
Write 20 test cases: normal, edge, failure at each step, an impostor attempt, and a request outside eligibility. For each, state the expected result. Do not use real personal data.
List what you are unsure of.
```

**Analyser les échecs.**

```text
Here is a list of failed automated requests with type, step that failed, error text, and date, identifiers removed: [paste].
Group failures by type and step, count each, and list questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

## Compétences d'IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md) : à utiliser pour décrire les demandes et l'éligibilité dans le portail.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour analyser les étapes de traitement et les points de défaillance.
- [security-testing](../../../../skills/security-testing/SKILL.md) : à utiliser pour tester les voies de libre-service face aux abus.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour clarifier qui approuve et qui est responsable de chaque traitement.
- [user-story](../../../../skills/user-story/SKILL.md) : à utiliser pour exprimer les besoins des utilisateurs lors de la conception des demandes.

## Sources principales

- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des demandes de service par le propriétaire.
- NIST, Digital Identity Guidelines (SP 800-63) : recommandations sur la vérification d'identité et l'authentification.
- W3C, Web Content Accessibility Guidelines (WCAG) : la norme internationale pour un contenu web accessible.
- Wikipedia, « Self-service » et « Identity and access management » : des aperçus des idées.

## Références

1. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
2. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
3. Zero-touch provisioning — Wikipedia — https://en.wikipedia.org/wiki/Zero-touch_provisioning
4. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
5. Multi-factor authentication — Wikipedia — https://en.wikipedia.org/wiki/Multi-factor_authentication
6. Role-based access control — Wikipedia — https://en.wikipedia.org/wiki/Role-based_access_control
7. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
8. Privileged access management — Wikipedia — https://en.wikipedia.org/wiki/Privileged_access_management
9. Social engineering (security) — Wikipedia — https://en.wikipedia.org/wiki/Social_engineering_(security)
10. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
11. System for Cross-domain Identity Management — Wikipedia — https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
