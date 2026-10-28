# Gestion des fournisseurs

**La gestion des fournisseurs veille à ce que les éditeurs, fournisseurs de cloud et partenaires dont dépend un service livrent ce qui a été convenu et à ce que vous puissiez faire face lorsqu'ils ne le font pas ; elle fonctionne quand les fournisseurs sont traités comme une partie du service, que les contrats correspondent aux niveaux de service que vous promettez et que la relation inclut une revue commune et un plan de sortie.**

## Pourquoi c'est important

Peu de services sont livrés par une seule organisation. L'application mobile d'une banque s'exécute sur une plateforme cloud, utilise un processeur de paiement, envoie des messages par un fournisseur de télécommunications et est soutenue hors des heures de bureau par un prestataire de services gérés. Chacun est un maillon de la chaîne. Quand l'un tombe, le client ne fait pas la distinction entre la banque et son fournisseur. La banque est redevable.

La gestion des fournisseurs est la pratique qui traite cette réalité. Elle couvre le choix des fournisseurs, la définition de ce qu'ils fourniront, le suivi de leur performance, la gestion de la relation et la préparation au changement ou à la défaillance. Quand elle fonctionne, les fournisseurs deviennent une partie de l'équipe de service, avec des objectifs partagés et une communication ouverte. Quand elle échoue, les organisations découvrent trop tard qu'un contrat promet moins que le service qu'elles ont promis à leurs propres clients, ou que quitter un fournisseur prendrait deux ans.

Les services modernes rendent cela plus difficile et plus important. Les plateformes cloud et les produits logiciels en tant que service apportent des capacités en quelques minutes et peuvent être difficiles à quitter. Les services d'IA ajoutent de nouvelles dépendances à des modèles et à des pratiques de données que l'acheteur ne peut pas voir. Ce sujet explique la pratique, les principaux dispositifs et les pièges. Il se relie à la gestion des niveaux de service (Sujet 3.7 — Gestion des niveaux de service), à la continuité des services (Sujet 3.12 — Gestion de la continuité des services) et à la gestion financière (Sujet 4.5 — Gestion financière et FinOps). Il ne donne aucun conseil juridique ni d'achat ; demandez-les aux bons spécialistes.

## Concepts clés

**Fournisseur.** Une partie qui fournit des produits ou des services à une organisation, comme un éditeur, un prestataire, un fournisseur de cloud ou un partenaire. Dans les termes d'ITIL 4, les fournisseurs apparaissent dans la dimension « partenaires et fournisseurs » (voir le Sujet 1.6 — Les quatre dimensions de la gestion des services). Un fournisseur peut aussi être un concurrent, un client ou une partie du même groupe.

**Gestion des fournisseurs.** La pratique qui consiste à veiller à ce que les fournisseurs de l'organisation et leur performance soient gérés de façon appropriée pour soutenir la fourniture fluide de produits et de services de qualité. Wikipedia décrit des idées apparentées sous la gestion de la relation fournisseur et les systèmes de gestion des fournisseurs.

**Externalisation.** Confier une activité à un tiers externe. Wikipedia décrit l'externalisation et la délocalisation, avec leurs motivations et leurs risques. L'externalisation déplace le travail ; elle ne transfère pas au client la responsabilité du résultat.

**Multi-sourcing et intégration.** De nombreuses organisations utilisent plusieurs fournisseurs, chacun pour une partie différente du service. Wikipedia décrit le multi-sourcing. Quelqu'un doit les coordonner pour que le client voie un seul service. Ce rôle est parfois appelé intégration et gestion des services (SIAM), décrite sur Wikipedia, et il peut être exercé par le client, un fournisseur principal ou un spécialiste. Voir la compétence service-integration-and-management dans ce guide.

**Cloud et logiciel en tant que service.** L'informatique en nuage et le logiciel en tant que service déplacent l'infrastructure et les applications vers des fournisseurs. Wikipedia décrit les deux. La responsabilité est partagée : le fournisseur sécurise et exploite la plateforme ; le client configure, utilise et sécurise ce qu'il y place. La répartition diffère selon le modèle de service, et la mal comprendre est une cause courante d'incidents. Lisez la description du modèle de responsabilité partagée du fournisseur.

**Contrats et accords.** Un contrat énonce ce que le fournisseur fournira, à quel prix, à quels niveaux de service et avec quels recours. Un contrat de soutien (underpinning contract) appuie les niveaux de service que vous avez promis à votre propre client ; les deux doivent être cohérents. Voir le Sujet 3.7 — Gestion des niveaux de service. L'article de Wikipedia sur la gestion des contrats décrit la gestion des accords tout au long de leur vie.

**Diligence raisonnable.** Vérifier un fournisseur avant de s'engager : santé financière, pratiques de sécurité, références, certifications et capacité à répondre au besoin. Wikipedia décrit la diligence raisonnable. Adaptez les vérifications à l'importance du fournisseur.

**Gestion de la performance.** Surveiller ce que le fournisseur livre par rapport à ce qui a été convenu, avec des revues régulières. Les mesures devraient refléter ce qui compte pour vous et reposer sur des données que vous pouvez vérifier. Les indicateurs clés de performance sont décrits sur Wikipedia, de même que les mises en garde à leur sujet. Voir le livre *Service Management Metrics*.

**Relation et gouvernance.** Une relation avec un fournisseur exige des contacts nommés des deux côtés, des réunions régulières, un chemin d'escalade et un moyen de soulever des préoccupations. Le ton compte : les fournisseurs traités en adversaires tendent à se protéger ; ceux traités en partenaires tendent à partager les problèmes tôt.

**Enfermement chez un fournisseur (vendor lock-in).** Une situation dans laquelle changer de fournisseur est coûteux ou impraticable. Wikipedia décrit l'enfermement chez un fournisseur. L'enfermement est parfois un prix acceptable pour la valeur obtenue ; il devrait être un choix conscient. Les normes ouvertes et l'interopérabilité, décrites sur Wikipedia, le réduisent.

**Planification de la sortie.** Un plan pour mettre fin à la relation : comment les données et les services seront transférés, combien de temps cela prendrait, ce que cela coûterait et ce que le fournisseur doit fournir. Wikipedia décrit les stratégies de sortie en général. Un plan de sortie jamais examiné est un espoir. Pour les fournisseurs critiques, testez-en des parties.

**Concentration et dépendance.** Dépendre fortement d'un seul fournisseur, ou de plusieurs qui reposent sur le même fournisseur sous-jacent, crée un risque de concentration. Cartographiez les dépendances, indirectes comprises. Voir le Sujet 3.12 — Gestion de la continuité des services.

**Sécurité de l'information et données.** Les fournisseurs traitent souvent des données sensibles. Convenez des exigences de sécurité, du signalement des incidents, des droits d'audit, de la localisation des données et de leur restitution. Vérifiez la loi qui s'applique à vous. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Fournisseurs d'IA.** Les fournisseurs de modèles et de services d'IA soulèvent des questions particulières : sur quelles données ils entraînent, si vos entrées sont conservées, comment les changements de modèles sont annoncés et quelle supervision vous pouvez exercer. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Comment les angles s'articulent.** La gestion des fournisseurs applique l'amélioration continue aux relations : revue régulière et amélioration conjointe. L'IA peut aider à lire les contrats et à résumer la performance, sous relecture juridique et humaine. L'automatisation collecte les données de performance et les dates de renouvellement. L'analytique montre la performance et les dépenses par fournisseur.

## Bonnes pratiques

1. **Connaître ses fournisseurs et ce que chacun fournit.** Tenez un registre des fournisseurs avec les services qu'ils soutiennent, les dates de contrat, les responsables et la criticité. Incluez les services cloud achetés par carte.
2. **Faire correspondre les contrats à ses propres engagements.** Pour chaque service que vous promettez, vérifiez que chaque contrat de soutien le permet. Comblez les écarts en renégociant, en ajoutant de la redondance ou en changeant votre promesse.
3. **Adapter la diligence raisonnable au risque.** Examinez soigneusement les fournisseurs critiques ; utilisez des vérifications plus légères pour les mineurs. Revoyez lorsqu'un fournisseur change de propriétaire ou de périmètre.
4. **Nommer des responsables des deux côtés.** Chaque fournisseur a un responsable de la relation en interne et un contact nommé chez le fournisseur. Fixez à l'avance un chemin d'escalade.
5. **Examiner régulièrement la performance.** Rencontrez-vous selon un calendrier, regardez les données et les incidents, et convenez d'actions. Partagez la performance de votre propre service pour que le fournisseur en voie l'effet.
6. **Traiter les fournisseurs comme une partie de l'équipe là où cela compte.** Incluez-les dans les revues d'incident et dans la planification des changements qui les touchent. Partagez l'information qui les aide à vous aider.
7. **Comprendre la responsabilité partagée.** Pour les services cloud et logiciels, écrivez ce que fait le fournisseur et ce que vous faites. Vérifiez que votre part est couverte.
8. **Planifier la sortie.** Pour les fournisseurs critiques, documentez comment vous les quitteriez, y compris l'export des données, le calendrier et le coût. Testez-en des parties, comme l'export des données.
9. **Surveiller la concentration.** Cartographiez quels services dépendent du même fournisseur ou du même fournisseur sous-jacent. Décidez où la redondance vaut d'être payée.
10. **Inclure les questions de sécurité, de vie privée et d'IA.** Demandez aux fournisseurs comment ils protègent les données, signalent les incidents et utilisent ou entraînent sur vos données, et consignez les réponses.

## Questions à discuter avec votre équipe

**Quels fournisseurs pourraient arrêter notre service le plus important, et que ferions-nous ?**
Listez-les, indirects compris. Attendez-vous à une ou deux surprises. Demandez ensuite de choisir un fournisseur critique et de se demander comment nous ferions face à une semaine de panne.

**Où un contrat de fournisseur promet-il moins que ce que nous promettons à nos clients ?**
Mettez les chiffres côte à côte. Attendez-vous à des écarts sur les délais de réponse et la disponibilité. Demandez ensuite de choisir un écart à combler ou à signaler au client.

**Qui est responsable de chaque relation avec un fournisseur, et quand a-t-il rencontré le fournisseur pour la dernière fois ?**
La responsabilité est souvent supposée. Demandez la date de la dernière réunion et ce qu'il en est sorti. Demandez ensuite d'attribuer des responsables et un calendrier.

**Combien de temps faudrait-il pour quitter notre plus gros fournisseur, et que perdrions-nous ?**
Essayez de répondre concrètement. Attendez-vous à « des années » ou « aucune idée ». Demandez ensuite de rédiger un plan de sortie approximatif et de tester un export de données.

**Que supposons-nous que le fournisseur de cloud gère pour nous, et que devons-nous réellement faire ?**
Vérifiez la documentation du fournisseur. Attendez-vous à des hypothèses sur la sauvegarde, l'accès et la configuration. Demandez ensuite de lister nos propres responsabilités et qui est responsable de chacune.

**Que fait chaque fournisseur d'IA de nos données, et comment nous informera-t-il des changements de modèles ?**
Lisez les conditions. Attendez-vous à de l'incertitude. Demandez ensuite d'interroger directement les fournisseurs et de consigner les réponses dans le registre.

## En pratique : un exemple de gestion des services

Le service de déclaration en ligne d'une administration fiscale nationale dépend de cinq fournisseurs : une plateforme cloud, un prestataire de vérification d'identité, une passerelle SMS pour les codes à usage unique, un service de numérisation de documents et un prestataire de services gérés qui soutient la plateforme hors des heures de bureau. L'engagement de l'administration envers les contribuables est que le service est disponible pendant la période de déclaration, avec une réponse en quatre heures aux incidents.

La responsable du service établit un registre d'une page et compare chaque contrat à l'engagement. Le contrat du prestataire de services gérés promet une réponse en huit heures hors des heures de bureau. Le contrat de la passerelle SMS n'indique ni disponibilité ni obligation de signalement des incidents. Le contrat du prestataire d'identité arrive à renouvellement dans quatre mois, et la sortie prendrait environ neuf mois en raison de la manière dont les données d'identité sont stockées.

Elle prend trois mesures. Elle renégocie la réponse du prestataire de services gérés à quatre heures pour la période de déclaration, à un prix qui va au détenteur du budget pour décision. Elle ajoute une seconde passerelle SMS comme solution de secours et convient de tester la bascule. Et elle lance une étude de sortie pour le prestataire d'identité, en commençant par un export de test des données, et s'en sert dans les discussions de renouvellement pour demander de meilleures conditions de portabilité des données. Elle planifie des revues trimestrielles avec chacun des cinq, auxquelles assiste le responsable de compte du fournisseur.

Ce qui change : l'administration peut dire quelles promesses faites aux contribuables chaque contrat soutient, et la solution de secours SMS fonctionne au premier test. Ce qui reste difficile : le coût de réponse supplémentaire du prestataire de services gérés est contesté par la finance ; la défaillance régionale de la plateforme cloud elle-même reste une dépendance unique pour laquelle l'administration n'a pas financé de correctif ; et le prestataire d'identité n'a pas encore accepté les conditions de portabilité. La responsable consigne ces points comme des risques ouverts avec des responsables.

## Quatre perspectives

### Équipes produit et de livraison

Sachez de quels fournisseurs dépend votre produit et ce qu'ils promettent. Concevez pour la défaillance d'un fournisseur lorsque c'est praticable et construisez des intégrations qui rendent le changement possible. Impliquez les fournisseurs dans la planification des changements qui les touchent.

### Équipes de service et d'exploitation

Gardez à jour les contacts des fournisseurs et les chemins d'escalade, partagez promptement les incidents avec eux et consignez leur performance. Signalez les écarts de contrat que vous rencontrez en pratique.

### Direction et gouvernance

Décidez quelles dépendances sont acceptables et financez la redondance et le travail de sortie qui en découlent. Demandez des preuves que les contrats soutiennent vos engagements. Soyez attentifs à la concentration et à l'enfermement.

### Clients et utilisateurs

Vous ne voyez peut-être pas les fournisseurs de votre prestataire, mais vous dépendez d'eux. Demandez de quelles dépendances le service dispose et ce qui se passe si l'une tombe. Attendez-vous à une information claire lors d'un incident majeur.

## Agilité, IA, automatisation et analytique

### Agilité

Incluez les fournisseurs dans des revues conjointes régulières et dans l'amélioration, et visez des cycles de rétroaction courts avec eux. Attention : les équipes agiles peuvent adopter des services rapidement sans contrôles ; tenez le registre des fournisseurs à jour et examinez les nouvelles dépendances.

### IA

L'IA peut aider à lire les contrats, à comparer les clauses aux engagements de service et à résumer les rapports des fournisseurs, sous relecture par le juridique et les achats. Nommez un responsable. Attention : un résumé de contrat par l'IA peut manquer ou inventer des clauses ; vérifiez toujours par rapport au document et prenez un avis juridique pour l'interprétation. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Automatisez la collecte des données de performance des fournisseurs, les rappels de renouvellement et les contrôles de configuration du cloud, avec des responsables pour les exceptions. Attention : le provisionnement automatisé de services tiers peut créer des dépendances non suivies ; reliez le provisionnement au registre. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Suivez la performance des fournisseurs par rapport aux mesures convenues, les dépenses par fournisseur, la part d'incidents et la concentration des dépendances. Attention : les chiffres rapportés par les fournisseurs peuvent être définis en leur faveur, et des pénalités liées à une seule mesure invitent au détournement ; vérifiez avec vos propres données. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Des contrats inférieurs aux engagements.** Les promesses dépassent ce que les fournisseurs doivent livrer. Comparez et comblez les écarts.
- **Des fournisseurs hors du registre.** Les services parallèles prolifèrent. Tenez un registre et reliez-le aux achats.
- **Des relations conflictuelles.** Les fournisseurs cachent les problèmes. Partagez les objectifs et examinez ensemble.
- **Pas de plan de sortie.** Changer est impraticable. Planifiez et testez les sorties critiques.
- **Une responsabilité partagée mal comprise.** Un service cloud est supposé sécurisé et sauvegardé. Documentez qui fait quoi.
- **Une concentration cachée.** Plusieurs fournisseurs reposent sur le même prestataire. Cartographiez les dépendances indirectes.
- **Ignorer les conditions de données de l'IA.** Les entrées sont conservées ou utilisées pour l'entraînement. Demandez et consignez.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Visibilité | Fournisseurs connus de l'équipe | Registre des principaux fournisseurs | Registre avec responsables, criticité et contrats | Registre tenu à jour à partir des achats et de la découverte | Dépendances cartographiées entre fournisseurs et prestataires indirects |
| Contrats | Signés et classés | Revus au renouvellement | Alignés sur nos engagements de service | Performance et recours examinés | Contrats adaptés le long de la chaîne d'approvisionnement |
| Relation | Transactionnelle | Contacts nommés | Revues régulières avec actions | Amélioration conjointe et apprentissage partagé | Fournisseurs intégrés à la planification et au rétablissement |
| Sortie et risque | Aucun | Conscience | Plans de sortie pour les fournisseurs critiques | Parties testées | Redondance et sorties gérées dans tout le portefeuille |

## Liste de contrôle

- [ ] Nous tenons un registre des fournisseurs avec responsables, criticité et dates de contrat.
- [ ] Chaque contrat de fournisseur est comparé aux engagements qu'il soutient.
- [ ] Chaque fournisseur critique a un responsable de relation nommé et un chemin d'escalade.
- [ ] Nous tenons des revues régulières avec les fournisseurs critiques.
- [ ] Nous avons documenté la responsabilité partagée pour les services cloud.
- [ ] Les fournisseurs critiques ont des plans de sortie, avec des parties testées.
- [ ] Nous connaissons nos risques de concentration.
- [ ] Nous avons interrogé les fournisseurs d'IA et de données sur l'usage des données et les changements de modèles.

## Invites d'IA

**Comparer un contrat à nos engagements.**

```text
Here are the relevant terms from a supplier contract: [paste clauses]. Here are the commitments we make to our own customers for the supported service: [paste].
List each of our commitments and say whether the contract text supports it, conflicts with it, or is silent, quoting the exact words. Do not give legal advice or interpret ambiguous clauses.
List what you are unsure of.
```

**Rédiger des questions de revue de fournisseur.**

```text
Supplier: [name and what they provide]. Recent facts: [incidents, performance data, changes].
Draft ten questions for the quarterly review, covering performance, incidents, changes, risks, and improvements. Avoid blame and do not suggest facts I did not give.
List what you are unsure of.
```

**Cartographier les dépendances à partir d'une liste.**

```text
Here is a list of our services and the suppliers each uses: [paste]. Here is what I know about what each supplier itself depends on: [paste, or write "unknown"].
Produce a table showing, for each supplier, which services depend on it, and highlight suppliers that appear in many services or that share an underlying provider. Mark every assumption.
List what you are unsure of.
```

## Compétences d'IA

- [vendor-management](../../../../skills/vendor-management/SKILL.md) : à utiliser pour gérer la sélection et la performance des fournisseurs.
- [service-integration-and-management](../../../../skills/service-integration-and-management/SKILL.md) : à utiliser pour coordonner plusieurs fournisseurs en un seul service.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md) : à utiliser pour aligner les accords le long de la chaîne.
- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques et décisions liés aux fournisseurs.

## Sources principales

- PeopleCert, pages de certification ITIL : la description de la pratique de gestion des fournisseurs par le propriétaire.
- Wikipedia, « Supplier relationship management » et « Outsourcing » : des aperçus des idées.
- Wikipedia, « Vendor lock-in » : un résumé du risque et de ses causes.
- La documentation propre des fournisseurs de cloud sur leurs modèles de responsabilité partagée : l'énoncé de référence de qui fait quoi.

## Références

1. Supplier relationship management — Wikipedia — https://en.wikipedia.org/wiki/Supplier_relationship_management
2. Vendor management system — Wikipedia — https://en.wikipedia.org/wiki/Vendor_management_system
3. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
4. Multisourcing — Wikipedia — https://en.wikipedia.org/wiki/Multisourcing
5. Service integration and management — Wikipedia — https://en.wikipedia.org/wiki/Service_integration_and_management
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Contract management — Wikipedia — https://en.wikipedia.org/wiki/Contract_management
8. Due diligence — Wikipedia — https://en.wikipedia.org/wiki/Due_diligence
9. Exit strategy — Wikipedia — https://en.wikipedia.org/wiki/Exit_strategy
10. Cloud computing — Wikipedia — https://en.wikipedia.org/wiki/Cloud_computing
11. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
