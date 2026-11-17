# ITIL

**ITIL est l'ensemble de recommandations le plus utilisé pour la gestion des services informatiques, consigné par le gouvernement britannique dans les années 1980 et aujourd'hui détenu par PeopleCert ; traitez-le comme une bibliothèque d'idées à adapter à l'aide de preuves, non comme une norme à réussir ou à échouer.**

## Pourquoi c'est important

ITIL figure dans les offres d'emploi, les contrats de fournisseurs et les catalogues de formation du monde entier. Beaucoup de gens emploient le mot pour désigner un processus précis, comme le comité consultatif des changements, ou un outil précis. Ces deux usages sont trop étroits, et tous deux mènent à des disputes qui portent en réalité sur autre chose.

Savoir d'où vient ITIL explique pourquoi il se lit comme il se lit. Il a commencé comme un ensemble de conseils pratiques pour exploiter de grands centres informatiques gouvernementaux, s'est développé en une série d'ouvrages de processus, puis en un ensemble plus large de pratiques et un modèle de valeur. Chaque étape a laissé du vocabulaire derrière elle. Une équipe qui comprend l'histoire sait distinguer les parties qui répondent à un vrai problème aujourd'hui de celles qui relèvent de l'habitude héritée.

ITIL s'inscrit aussi dans un domaine plus vaste. C'est un référentiel parmi d'autres (voir le Sujet 1.8 — Référentiels et normes de gestion des services), et la version la plus récente a son propre sujet (voir le Sujet 1.3 — ITIL 5). Ce sujet donne le contexte et une carte de ce que contient ITIL, afin que le reste du guide puisse employer ses termes avec précaution.

## Concepts clés

**Origines.** ITIL signifie Information Technology Infrastructure Library. Selon Wikipedia, il a été développé dans les années 1980 par la Central Computer and Telecommunications Agency (CCTA), une agence du gouvernement britannique, pour améliorer la qualité et l'efficacité de l'informatique gouvernementale. Sa première forme était un grand ensemble d'ouvrages. Plus tard, la responsabilité est passée à l'Office of Government Commerce (OGC), puis à d'autres organismes ; consultez les sources ci-dessous pour le détail, car la propriété a changé de mains plus d'une fois.

**Versions.** En raccourci largement utilisé : la version 1 était l'ensemble d'ouvrages d'origine ; la version 2 (vers 2001) les a regroupés en ensembles tels que le soutien des services et la fourniture des services ; la version 3 (2007), mise à jour en 2011, a organisé les recommandations autour d'un cycle de vie du service composé de la stratégie, de la conception, de la transition, de l'exploitation et de l'amélioration continue ; ITIL 4 (2019) a remplacé le cycle de vie par le système de valeur des services et un ensemble de pratiques ; ITIL (version 5) a été présenté par PeopleCert en 2026. Les dates de cette liste proviennent de références générales et peuvent différer d'un an selon les sources ; confirmez donc celle sur laquelle vous vous appuyez auprès du propriétaire.

**Propriété.** Le propriétaire actuel d'ITIL est PeopleCert, une société de certification. Le propriétaire publie les recommandations, gère le programme de certification et accorde des licences aux organismes de formation. Les conséquences pratiques sont que les textes complets sont des publications sous licence, que la terminologie officielle vient du propriétaire et que tout ce qu'un tiers décrit comme « ITIL » doit être vérifié par rapport à la formulation actuelle du propriétaire.

**Meilleure pratique, ou pratique courante.** ITIL est souvent qualifié de « meilleure pratique ». La lecture plus modeste et plus exacte est qu'il consigne des pratiques que de nombreuses organisations ont jugées utiles. Il ne prouve pas qu'une pratique donnée fonctionne dans votre contexte. Ce guide vous demande de tester chaque pratique à l'aune de vos propres preuves.

**Ce que contient ITIL 4.** Le système de valeur des services (SVS) décrit comment l'opportunité et la demande deviennent de la valeur, par la gouvernance, la chaîne de valeur des services, les pratiques, les principes directeurs et l'amélioration continue (voir le Sujet 1.4 — Le système de valeur des services). Quatre dimensions cadrent ce dont tout service a besoin : organisations et personnes, information et technologie, partenaires et fournisseurs, flux de valeur et processus (voir le Sujet 1.6 — Les quatre dimensions de la gestion des services). Les sept principes directeurs figurent au Sujet 1.5 — Les principes directeurs d'ITIL, et les six activités de la chaîne de valeur au Sujet 1.7 — La chaîne de valeur des services. ITIL 4 décrit 34 pratiques en trois groupes : gestion générale, gestion des services et gestion technique. La Partie 3 de ce guide couvre les principales.

**Certification.** La certification ITIL s'applique aux personnes, par étapes, du niveau fondation jusqu'aux niveaux supérieurs. Elle ne certifie pas une organisation. Une organisation qui veut une norme auditée de l'extérieur se tourne généralement vers ISO/IEC 20000. Un certificat montre que quelqu'un a étudié la matière ; il ne montre pas qu'il sait faire fonctionner une pratique.

**Relation avec l'agilité et DevOps.** Les premières versions d'ITIL se lisaient comme séquentielles, contrôlées et riches en documents. Cette lecture était souvent juste pour l'époque et la technologie, et elle a conduit de nombreuses équipes agiles à voir en ITIL un ennemi. ITIL 4 se relie explicitement aux idées de l'agilité, du lean et de DevOps. Le Sujet 2.5 — DevOps traite de la relation entre les deux, et le Sujet 2.9 — Gestion agile des services de l'application des valeurs agiles aux pratiques elles-mêmes.

## Bonnes pratiques

1. **Lire le texte du propriétaire pour les termes qui comptent.** Pour une définition que vous citerez, comme service, incident ou changement, lisez la formulation publiée par le propriétaire et citez-la. Les résumés de tiers dérivent.
2. **Adapter, ne pas adopter en bloc.** Choisissez les pratiques qui répondent à un problème que vous avez. Partez de là où vous êtes et n'ajoutez de la structure que lorsqu'elle résout quelque chose que les clients ou le personnel ressentent.
3. **Garder l'histoire à l'esprit en lisant d'anciens documents.** Un processus conçu pour des mises en production peu fréquentes sur des serveurs physiques doit être repensé pour la livraison continue. Demandez-vous quel problème la recommandation résolvait, puis si vous l'avez encore.
4. **Utiliser des pratiques, pas des services administratifs.** Une pratique traverse les équipes. Ne créez pas un « service des incidents » parce qu'ITIL a une pratique d'incident ; veillez à ce que le travail soit bien fait là où il se situe.
5. **Étiqueter les affirmations sur ITIL par version.** Écrivez « dans ITIL 4 » ou « dans ITIL 5 » pour que le lecteur sache de quelle version il s'agit, et tenez une note datée de ce que vous avez vérifié auprès du propriétaire.
6. **Séparer la certification de la capacité.** Financez la formation de ceux qui en ont besoin et jugez la préparation sur la performance observée : l'équipe sait-elle gérer un incident majeur ou estimer le risque d'un changement ?
7. **Associer ITIL à une vue d'ingénierie.** Combinez ses pratiques avec des pratiques de livraison telles que les tests automatisés, l'infrastructure as code et le développement sur tronc commun, afin que les contrôles soient intégrés au travail.
8. **Rendre explicite le responsable de chaque pratique.** Nommez une personne responsable du fonctionnement d'une pratique, qui peut la modifier et l'améliorer avec l'équipe qui fait le travail.
9. **Examiner les pratiques sur la base de preuves.** Regardez ce que la pratique produit, comme le temps de rétablissement du service ou la part des changements qui causent des incidents, et changez la pratique quand les preuves l'indiquent.
10. **Garder une terminologie cohérente mais légère.** Employez le vocabulaire commun là où il aide des personnes d'équipes différentes à se comprendre, et abandonnez les termes qui ne créent que du cérémonial.

## Questions à discuter avec votre équipe

**Que voulons-nous dire quand nous disons « ITIL » ? Un processus, un outil, un certificat, un référentiel ou une habitude ?**
Les gens emploient le mot pour des choses différentes, et les disputes sur ITIL sont souvent des disputes de sens. Demandez un exemple à chacun. Vous entendrez probablement un mélange d'une réunion précise, d'un outil de tickets et d'une formation. Demandez ensuite d'écrire une phrase convenue sur ce qu'ITIL signifie pour nous.

**Lesquelles de nos pratiques existent à cause d'ITIL, et quel problème chacune résout-elle aujourd'hui ?**
Cela sépare les pratiques qui fonctionnent des pratiques héritées. Écoutez les réponses qui citent un échec réel, comme une panne après un changement non examiné, et celles qui ne citent que « le référentiel le dit ». Demandez ensuite de choisir une pratique sans problème clair et de convenir de la façon de tester si elle est nécessaire.

**Où notre usage d'ITIL suppose-t-il des mises en production lentes et peu fréquentes ?**
De nombreux contrôles datent d'une époque de mises en production grandes et rares. Les équipes qui livrent désormais chaque jour trouvent souvent des étapes d'approbation qui ne suivent pas le rythme. Rassemblez des exemples concrets. Demandez ensuite quel risque chaque étape devait maîtriser et si un contrôle de pipeline pourrait le faire mieux.

**Qui est responsable de chacune de nos pratiques, et comment apprend-il ce qui ne fonctionne pas ?**
Une pratique sans responsable ne peut pas s'améliorer. Attendez-vous à de l'incertitude sur qui est responsable de la gestion des connaissances ou de la gestion des problèmes. Demandez ensuite comment le responsable apprend de ceux qui font le travail.

**Qu'avons-nous appris de la dernière certification que nous avons payée, et qu'avons-nous changé grâce à elle ?**
Cela relie la formation aux résultats. Vous entendrez peut-être que les gens ont aimé la formation mais que rien n'a changé au travail. C'est une information utile, pas une accusation. Demandez ensuite de convenir d'un changement que quelqu'un ayant suivi la formation essaiera le mois prochain.

**Que savons-nous des dernières recommandations du propriétaire, et comment le savons-nous ?**
Cela introduit la discipline des sources (voir le Sujet 1.3 — ITIL 5). Les équipes connaissent généralement les titres de blogs et de conférences. Classez ce que dit l'équipe en trois catégories : vérifié auprès du propriétaire, plausible et inconnu. Demandez ensuite de charger quelqu'un de lire la page du propriétaire et d'en noter la date.

## En pratique : un exemple de gestion des services

Le service informatique d'une compagnie d'assurance de taille moyenne utilise le vocabulaire d'ITIL depuis quinze ans. Le nouveau responsable de l'ingénierie des plateformes juge le référentiel bureaucratique et veut l'abandonner. La responsable des services s'y oppose, en citant des constats d'audit que le référentiel a aidé à clore.

Ils conviennent de tester l'affirmation plutôt que de se disputer. L'équipe dresse la liste des dix pratiques qu'elle exécute réellement et, pour chacune, écrit le problème pour lequel elle a été créée ainsi qu'une preuve récente. Quatre pratiques ont des preuves claires : la gestion des incidents, l'habilitation des changements, la gestion des demandes de service et le catalogue de services produisent tous des résultats mesurables que l'entreprise remarque. Trois ont des preuves mais une lourde charge, notamment le comité consultatif des changements hebdomadaire qui examine chaque changement, y compris les changements standard au long historique de succès. Trois n'ont ni preuves ni responsable.

Le service conserve les quatre premières, remplace l'examen des changements courants par le comité par des contrôles de pipeline et une revue par les pairs, et retire l'une des pratiques sans responsable après avoir confirmé qu'aucun audit n'en dépend. Il envoie aussi deux ingénieurs à une courte formation afin qu'ils puissent lire directement les recommandations actuelles du propriétaire.

Ce qui change : le débat passe de « ITIL est bon ou mauvais » à la question de savoir quelle pratique sert quel risque. Ce qui reste difficile : les auditeurs demandent toujours des preuves dans un format particulier, et les produire à partir du pipeline demande du temps d'ingénierie que l'équipe n'a pas encore financé. Les deux pratiques sans responsable restantes figurent dans le backlog d'améliorations.

## Quatre perspectives

### Équipes produit et de livraison

Apprenez le vocabulaire des pratiques qui touchent votre travail, comme l'habilitation des changements et la gestion des mises en production, afin de montrer comment votre pipeline répond à leur intention. Demandez à l'exploitation ce dont elle a besoin de votre part pour exploiter le produit, et fournissez-le.

### Équipes de service et d'exploitation

Vous portez au quotidien l'essentiel des pratiques d'ITIL. Gardez-les reliées à des preuves et apportez des exemples de ce qu'une pratique apporte et de ce qui la rend pesante. Proposez des changements aux pratiques plutôt que de les contourner.

### Direction et gouvernance

Demandez quel problème chaque pratique résout, qui en est responsable et quelles preuves montrent qu'elle fonctionne. Soyez prudent à l'égard des dépenses de certification comme substitut à la capacité. Vérifiez les affirmations sur les nouvelles versions par rapport aux publications du propriétaire avant d'engager de l'argent.

### Clients et utilisateurs

Vous voyez rarement ITIL lui-même. Vous voyez la rapidité avec laquelle les incidents sont résolus, la clarté des demandes et la façon dont les changements sont communiqués. Si une pratique vous touche, comme une étape d'approbation, demandez au fournisseur à quoi elle sert.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez les pratiques comme un backlog de choses à améliorer avec ceux qui les exploitent, livrées par petites étapes et examinées avec les parties prenantes. Attention : n'utilisez pas le langage agile pour justifier l'abandon de contrôles qui gèrent un risque réel ; remplacez le contrôle par un meilleur.

### IA

ITIL 5, tel que le décrit le propriétaire, traite des environnements dotés d'IA (voir le Sujet 1.3 — ITIL 5). Utilisez l'IA pour aider les gens à trouver et lire les recommandations plus vite, avec une personne qui vérifie la source, et donnez un responsable à tout système d'IA utilisé dans le travail de service. Attention : un assistant d'IA peut énoncer avec assurance des détails d'ITIL erronés ou périmés ; demandez-lui de citer le texte que vous avez fourni plutôt que de répondre de mémoire.

### Automatisation

Intégrez les contrôles aux pipelines et aux outils pour que suivre la pratique soit le chemin le plus facile, par exemple un contrôle automatisé qui vérifie que chaque fiche de changement renvoie à une version testée. Attention : l'automatisation peut cacher une mauvaise pratique derrière une coche verte ; examinez ce que chaque contrôle automatisé teste réellement.

### Analytique

Utilisez quelques mesures pour voir si les pratiques fonctionnent, comme le temps de rétablissement du service, la proportion de changements qui causent des incidents et les demandes satisfaites dans les délais convenus. Attention : les mesures de conformité aux pratiques, comme le « pourcentage de tickets avec une catégorie », peuvent être détournées et disent peu de chose sur les résultats. Voir le livre *Service Management Metrics* pour les définitions et les garde-fous.

## Modes d'échec courants

- **Assimiler ITIL à un seul processus.** Les gens débattent du comité consultatif des changements et passent à côté du reste. Décrivez les pratiques que vous exécutez réellement et jugez chacune sur ses propres preuves.
- **Citer des blogs comme s'il s'agissait de la norme.** Les détails dérivent d'un résumé de tiers à l'autre. Citez les publications du propriétaire et datez votre lecture.
- **Des certificats comme preuve de capacité.** Une équipe formée peut tout de même exécuter mal une pratique. Observez le travail et regardez les résultats.
- **Copier le référentiel au lieu de résoudre un problème.** L'équipe installe toutes les pratiques et les clients ne remarquent rien. Partez d'un problème et ajoutez la pratique qui y répond.
- **Traiter les anciennes recommandations comme obsolètes ou comme sacrées.** Les deux attitudes ignorent les preuves. Comparez la recommandation au comportement réel de votre service.
- **Des contrôles ajoutés à la main que l'automatisation pourrait fournir.** Le personnel devient le contrôle. Déplacez les vérifications courantes dans les pipelines et gardez la revue humaine pour les décisions de jugement.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Usage d'ITIL | Termes employés à la légère | Certaines pratiques adoptées nommément | Pratiques choisies définies et attribuées | Pratiques examinées à l'aune des preuves | Pratiques qui évoluent avec la livraison et les données entre les équipes |
| Discipline des sources | Résumés de blogs | Textes du propriétaire lus par quelques-uns | Affirmations étiquetées par version et vérifiées | Revérifiées avant les décisions | Journal de vérification partagé et daté |
| Capacité | Certificats seulement | Début des revues de pratiques | Capacité observée lors d'exercices et de revues | Résultats mesurés et exploités | Apprentissage partagé dans l'organisation et avec les partenaires |

## Liste de contrôle

- [ ] Nous pouvons dire en une phrase ce que signifie « ITIL » dans notre organisation.
- [ ] Nous listons les pratiques que nous exécutons et le problème que chacune résout.
- [ ] Chaque pratique a un responsable nommé.
- [ ] Nous étiquetons les affirmations sur ITIL par version et citons le propriétaire pour les définitions.
- [ ] Nous jugeons les pratiques sur des preuves, comme le temps de rétablissement et l'échec des changements.
- [ ] Nous avons séparé la certification de la capacité dans notre planification.
- [ ] Les contrôles courants sont intégrés aux pipelines là où c'est possible.
- [ ] Nous revérifions les publications du propriétaire avant les décisions importantes.

## Invites d'IA

**Comparer nos pratiques aux problèmes qu'elles résolvent.**

```text
Here is a list of the practices our team runs: [list practices].
For each, ask me what problem it solved when it was introduced and what recent evidence shows it works. Then produce a table: practice, problem, evidence, owner (only what I tell you), and a question to test whether we still need it.
Do not invent facts about ITIL. List what you are unsure of.
```

**Vérifier des affirmations sur ITIL par rapport au texte du propriétaire.**

```text
Below are statements we have heard about ITIL: [paste statements].
Below is text copied from the owner's published pages: [paste owner text].
For each statement, say whether the owner's text supports it, contradicts it, or is silent, and quote the words exactly. Use no outside knowledge.
List what you are unsure of.
```

**Rédiger une explication en langage clair pour les nouveaux arrivants.**

```text
Write a one-page explanation for new starters of how our organization uses ITIL, using only this description of our practice: [paste description].
Keep it under 400 words, avoid jargon, and flag every statement that comes from our description versus general knowledge. Do not add claims about ITIL versions.
End with what you are unsure of.
```

## Compétences d'IA

- [itil-5](../../../../skills/itil-5/SKILL.md) : à utiliser pour cartographier les pratiques par rapport aux dernières recommandations du propriétaire, avec les affirmations signalées comme non confirmées.
- [maturity-models](../../../../skills/maturity-models/SKILL.md) : à utiliser pour évaluer le degré de maturité de chaque pratique.
- [service-catalog](../../../../skills/service-catalog/SKILL.md) : à utiliser lorsque le travail mène à décrire des services pour les clients.

## Sources principales

- PeopleCert, pages de certification ITIL : la description du référentiel et du programme de certification par le propriétaire lui-même.
- Wikipedia, « ITIL » : histoire, versions et changements de propriété, en résumé.
- Wikipedia, « IT service management » : le domaine auquel appartient ITIL.
- Wikipedia, « ISO/IEC 20000 » : la norme certifiable pour les systèmes de gestion des services, souvent comparée à ITIL.

## Références

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Central Computer and Telecommunications Agency — Wikipedia — https://en.wikipedia.org/wiki/Central_Computer_and_Telecommunications_Agency
4. Office of Government Commerce — Wikipedia — https://en.wikipedia.org/wiki/Office_of_Government_Commerce
5. AXELOS — Wikipedia — https://en.wikipedia.org/wiki/AXELOS
6. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
7. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
8. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
