# Gestion du catalogue de services

**Un catalogue de services (le « service catalogue » d'ITIL) est un backlog de produit retourné comme un gant : une description tenue à jour, orientée vers l'utilisateur, de ce que le fournisseur propose, avec derrière elle une vue technique montrant comment chaque service est construit ; il ne mérite sa place que si les gens s'en servent pour trouver, demander et comprendre les services.**

## Pourquoi c'est important

Demandez à un utilisateur ordinaire ce que propose son service informatique ou son service RH et vous obtiendrez souvent un haussement d'épaules. Les services existent, mais personne ne les a décrits d'une manière qu'un utilisateur puisse trouver ou comprendre. Les utilisateurs interrogent des collègues, utilisent le mauvais canal ou bricolent leurs propres solutions. Les fournisseurs, à leur tour, ne peuvent pas dire ce qu'ils offrent, qui en est responsable ni ce que cela coûte, et sont surpris par la demande pour des choses dont ils ignoraient assurer le support.

Un catalogue de services y remédie en listant les services dans le langage de l'utilisateur, avec l'information dont il a besoin pour décider et demander : ce que fait le service, qui peut l'utiliser, comment le demander, combien de temps cela prend et ce que cela coûte. Derrière cette vue se trouve une vue technique, qui relie chaque service aux composants, équipes et fournisseurs qui le fournissent, et aux accords qui le régissent. Ensemble, elles relient ce que voit l'utilisateur à ce que le fournisseur exploite.

Les catalogues peuvent échouer de deux manières opposées. Un catalogue vide et rarement mis à jour est ignoré. Un catalogue gonflé de centaines d'éléments en langage technique est inutilisable. Ce sujet explique les deux vues, comment bâtir un catalogue que les gens utilisent et comment le garder vivant. Il est étroitement lié à la gestion des demandes de service (Sujet 3.6 — Gestion des demandes de service), à la gestion des niveaux de service (Sujet 3.7 — Gestion des niveaux de service) et à la gestion de la configuration (Sujet 4.4 — Gestion de la configuration).

## Concepts clés

**Service catalogue ou catalogue de services.** ITIL emploie l'orthographe britannique « service catalogue ». Ce guide emploie « catalogue de services » dans la suite. Wikipedia décrit un catalogue de services comme une liste des services qu'une organisation fournit, souvent à ses employés ou à ses clients.

**Vue orientée client.** Une description des services telle que les utilisateurs les comprennent, comme « Messagerie et agenda », « Ordinateur portable pour les nouveaux arrivants » ou « Questions de paie ». Elle énonce ce qu'est le service, qui peut l'utiliser, comment demander, le délai attendu, le coût lorsque c'est pertinent et où obtenir de l'aide. C'est la partie que les utilisateurs rencontrent.

**Vue technique.** Une description de la manière dont les services sont construits et soutenus : les composants, l'infrastructure, les applications, les équipes, les fournisseurs et les accords derrière chacun. Elle aide le fournisseur à comprendre les dépendances et l'impact, par exemple quels services sont touchés si une base de données tombe. Elle est liée à une base de données de gestion de configuration ; voir le Sujet 4.4 — Gestion de la configuration.

**Portefeuille de services.** L'ensemble complet des services gérés, y compris ceux en développement, ceux actifs dans le catalogue et ceux en cours de retrait. Le catalogue est la partie vivante du portefeuille. L'article de Wikipedia sur la gestion du portefeuille d'applications est une idée apparentée pour les logiciels. Voir le Sujet 2.8 — Propriété des produits et des services.

**Offre de service.** Une description formelle d'un ou plusieurs services, éventuellement avec différentes options, comme un support standard ou premium. Les offres aident les utilisateurs à choisir ce qui leur convient et les fournisseurs à comprendre la demande et le coût.

**Élément de catalogue et demande.** Un élément de catalogue est ce que l'utilisateur peut commander ou utiliser. Lorsque l'élément est demandable, il renvoie à un modèle de demande (voir le Sujet 3.6 — Gestion des demandes de service). Certains éléments sont informatifs, comme « Comment se connecter au réseau sans fil ».

**Taxonomie et capacité à être trouvé.** Les utilisateurs trouvent les choses en parcourant des catégories ou en cherchant. Les articles de Wikipedia sur la taxonomie et l'architecture de l'information décrivent comment organiser l'information. Les catégories devraient refléter la façon de penser des utilisateurs, non la structure de l'organisation. Un bon test consiste à demander aux utilisateurs où ils chercheraient un élément donné.

**Langage clair.** Les descriptions devraient être courtes et claires, sans jargon ni sigles. L'article de Wikipedia sur le langage clair décrit les principes. Testez les descriptions avec des personnes nouvelles dans le service.

**Responsabilité.** Chaque service a un responsable nommé qui tient son entrée à jour et répond de sa qualité. Sans responsables, les entrées se dégradent. Voir le Sujet 2.8 — Propriété des produits et des services.

**Le catalogue comme backlog.** Traitez le catalogue comme un produit vivant. Les entrées sont ajoutées, améliorées, fusionnées et retirées selon la demande et les retours. Un backlog d'améliorations du catalogue, examiné régulièrement, le garde à jour. Cela reprend l'idée du backlog de produit ; voir l'article de Wikipedia sur les backlogs de produit.

**Coûts et facturation.** Là où les services sont facturés, le catalogue montre le prix ou la répartition des coûts. Même en l'absence de facturation, montrer le coût sensibilise. Voir le Sujet 4.5 — Gestion financière et FinOps.

**Au-delà de l'informatique.** De nombreuses organisations étendent le catalogue aux RH, aux installations et à d'autres fonctions. Voir le Sujet 1.9 — Gestion des services d'entreprise.

**Recherche et IA.** Les utilisateurs cherchent ou interrogent de plus en plus un assistant conversationnel au lieu de parcourir. Le contenu du catalogue doit être clair et structuré pour que la recherche et les assistants puissent le trouver. L'IA peut aider à faire correspondre la description d'un utilisateur à un élément du catalogue.

**Comment les angles s'articulent.** Le catalogue est un produit d'amélioration continue : mettez à jour les entrées à partir de vraies questions. L'IA peut rédiger des entrées, suggérer des catégories et aider les utilisateurs à trouver des services, sous relecture. L'automatisation relie le catalogue au traitement des demandes et aux données de configuration. L'analytique montre ce qui est utilisé, recherché et abandonné.

## Bonnes pratiques

1. **Commencer par les principales demandes et questions.** Listez les vingt choses que les utilisateurs demandent le plus. Décrivez-les d'abord. Un petit catalogue utile vaut mieux qu'un grand catalogue vide.
2. **Décrire chaque service avec les mots de l'utilisateur.** Écrivez un court résumé, à qui il s'adresse, comment demander, le délai attendu, le coût et où obtenir de l'aide. Évitez les noms internes et les sigles.
3. **Nommer un responsable et une date de revue.** Montrez qui est responsable de l'entrée. Examinez chaque entrée au moins une fois par an, et quand le service change.
4. **Organiser selon la façon de penser des utilisateurs.** Testez les catégories avec les utilisateurs, par exemple par un tri de cartes ou un journal de recherche. Changez-les quand les preuves l'indiquent.
5. **Relier au traitement.** Là où un service peut être demandé, reliez l'entrée au formulaire de demande et au suivi de l'état. Un catalogue qui ne mène pas à l'action est une brochure.
6. **Tenir une vue technique pour le fournisseur.** Consignez pour chaque service les composants, équipes, fournisseurs et accords qui le sous-tendent. Utilisez-la pour l'analyse d'impact et la planification.
7. **Montrer les coûts et les options.** Indiquez ce qu'un service coûte ou consomme et décrivez les options, pour que les utilisateurs choisissent en connaissance de cause.
8. **Observer ce que les utilisateurs cherchent.** Examinez les termes de recherche qui ne donnent rien ou le mauvais résultat, et ajoutez ou renommez des entrées en conséquence.
9. **Retirer et fusionner.** Supprimez les services qui ne sont plus offerts. Combinez les quasi-doublons. Signalez les services en cours de changement.
10. **Traiter le catalogue comme un produit.** Donnez-lui un responsable, un backlog et des retours réguliers d'utilisateurs. Mesurez l'usage et améliorez ce qui n'est pas utilisé.

## Questions à discuter avec votre équipe

**Si un nouvel employé demandait ce que nous offrons, pourrions-nous répondre sans chercher ?**
Cela teste si les services sont connus et décrits. Attendez-vous à des réponses partielles. Demandez une liste à trois personnes et comparez. Demandez ensuite de choisir les dix premiers et de les écrire.

**Quels éléments de notre catalogue les utilisateurs n'ouvrent-ils jamais, et lesquels ouvrent-ils puis nous appellent ?**
Utilisez des données. Les éléments ouverts puis abandonnés suggèrent des descriptions peu claires. Les éléments jamais ouverts sont peut-être redondants. Demandez ensuite de choisir trois entrées à réécrire ou à retirer.

**Que tapent les utilisateurs dans la recherche qui ne donne rien d'utile ?**
Les journaux de recherche révèlent les différences de vocabulaire. Attendez-vous à des mots simples qui ne correspondent pas aux noms internes. Demandez ensuite d'ajouter des alias ou de nouvelles entrées pour les cinq principales recherches infructueuses.

**Qui est responsable de chaque entrée de service, et quand a-t-elle été vérifiée pour la dernière fois ?**
Les lacunes de responsabilité et les entrées périmées sont courantes. Demandez des dates. Demandez ensuite d'attribuer des responsables et un cycle de revue.

**Comment notre vue technique se relie-t-elle à ce que voient les utilisateurs, et pourrions-nous dire quels services sont touchés par une défaillance donnée ?**
Cela teste le lien entre les vues. Essayez-le pour un incident récent. Attendez-vous à du travail manuel. Demandez ensuite de choisir un service critique et de cartographier ses dépendances.

**Comment l'IA pourrait-elle aider les utilisateurs à trouver des services et nous aider à garder les entrées à jour, et que doit vérifier une personne ?**
L'IA peut faire correspondre la description d'un utilisateur aux entrées et rédiger des mises à jour à partir des tickets. Elle peut aussi orienter les utilisateurs vers le mauvais service. Demandez qui en est responsable et comment les erreurs de correspondance sont repérées. Demandez ensuite de tester un outil de correspondance sur un échantillon de vraies questions.

## En pratique : un exemple de gestion des services

Le service informatique interne d'une administration fiscale nationale a un catalogue de services de 340 éléments, la plupart rédigés par les ingénieurs qui ont construit les services. Le personnel utilise le téléphone du centre de services à la place, et le centre passe une grande partie de son temps à orienter les appelants vers des services qui existent déjà.

Le responsable des services demande à un groupe de quinze employés de différents départements de trouver cinq choses dans le catalogue : un moyen de réserver une salle de visioconférence, comment obtenir un second écran, comment rejoindre une liste de diffusion de projet, comment obtenir l'accès à un système de dossiers et comment signaler la perte d'un téléphone. Seuls deux y parviennent. Le catalogue emploie des termes comme « mise à disposition de terminaux de conférence audiovisuelle » et « équipements périphériques ».

L'équipe examine six mois de contacts du centre et classe les 30 principaux sujets de demande. Elle réécrit ces entrées en langage clair, avec une courte description, qui peut demander, le délai et un lien vers le formulaire. Elle fusionne 90 entrées en 40, retire 60 qui ne sont plus offertes et ajoute des alias de recherche comme « deuxième écran » pour les moniteurs. Chaque entrée affiche un responsable et une date de revue. Un assistant conversationnel est mis à l'essai pour orienter les utilisateurs vers les entrées, avec un lien vers une personne quand il ne peut pas aider.

Ce qui change : le même groupe de test trouve désormais quatre éléments sur cinq, et les contacts « où puis-je trouver » du centre diminuent. Ce qui reste difficile : la vue technique est incomplète, si bien que l'analyse d'impact repose encore sur le savoir tacite ; les 240 entrées restantes n'ont pas été revues ; et les responsables de certains services disent n'avoir pas le temps de tenir les entrées à jour. Le responsable fixe une règle : les entrées non revues depuis un an sont marquées « non vérifiées » et déclassées dans la recherche.

## Quatre perspectives

### Équipes produit et de livraison

Décrivez pour les utilisateurs les services que vous construisez, et tenez les entrées à jour quand vous les changez. Fournissez l'information technique qui relie vos composants aux services qu'ils soutiennent.

### Équipes de service et d'exploitation

Entretenez la vue technique et utilisez-la lors des incidents et des changements. Observez ce que les utilisateurs cherchent et demandent, et remontez les lacunes aux responsables. Aidez à maintenir en état les liens vers le traitement des demandes.

### Direction et gouvernance

Demandez un catalogue que les utilisateurs trouvent utile, avec des responsables et des dates de revue. Financez son entretien. Servez-vous-en pour voir ce qui est offert, ce que cela coûte et ce qui est retiré.

### Clients et utilisateurs

Vous devriez pouvoir trouver ce qui est disponible, le comprendre et le demander sans connaître l'organigramme. Dites au fournisseur ce que vous n'avez pas pu trouver ou comprendre.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez le catalogue comme un backlog : améliorez d'abord les entrées les plus utilisées, par petites étapes, avec les retours des utilisateurs. Examinez-le régulièrement avec les parties prenantes. Attention : ne construisez pas tout le catalogue avant le lancement ; un début modeste et utile vous apprendra davantage.

### IA

L'IA peut rédiger des entrées à partir de documents existants, suggérer des catégories et des alias, et aider les utilisateurs à trouver des services en conversation. Chaque usage a besoin d'un responsable, et une personne doit approuver le texte publié. Attention : un assistant qui devine une entrée qui n'existe pas induit les utilisateurs en erreur ; exigez qu'il cite les entrées du catalogue. Voir le Sujet 5.3 — Centre de services avec IA et agents virtuels.

### Automatisation

Reliez le catalogue aux formulaires de demande, aux approbations et au traitement, et générez des parties de la vue technique à partir des données de configuration. Attention : l'import automatique de données techniques peut remplir le catalogue de noms de machines ; gardez une étape de relecture humaine pour le texte destiné aux utilisateurs. Voir le Sujet 6.5 — Libre-service et traitement automatisé.

### Analytique

Suivez les consultations, les recherches, les recherches sans résultat, les demandes faites et les demandes abandonnées. Attention : la popularité n'est pas la valeur ; un élément rarement utilisé peut être critique pour quelques personnes. Combinez les comptages avec des retours. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Un catalogue écrit par des ingénieurs.** Les utilisateurs ne le comprennent pas. Réécrivez en langage clair et testez.
- **Trop d'entrées.** Personne ne trouve rien. Commencez petit, puis fusionnez et retirez.
- **Pas de responsables.** Les entrées se dégradent. Nommez des responsables et des dates de revue.
- **Brochure seulement.** Le catalogue ne mène pas à l'action. Reliez les entrées aux formulaires et à l'état.
- **Des catégories d'après l'organigramme.** Les utilisateurs ne peuvent pas deviner où chercher. Organisez selon l'intention de l'utilisateur.
- **Pas de vue technique.** L'analyse d'impact relève de la conjecture. Cartographiez les dépendances des services critiques.
- **Ne jamais retirer.** Les entrées mortes induisent en erreur. Examinez et supprimez.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Vue orientée utilisateur | Aucune ou technique | Principaux services décrits | Services décrits en langage clair avec des responsables | Entrées testées et revues avec les utilisateurs | Entrées cohérentes entre fonctions et canaux |
| Vue technique | Non consignée | Principaux services cartographiés | Dépendances consignées pour les services importants | Utilisée lors des incidents et changements | Générée et tenue à jour à partir des données de configuration |
| Capacité à être trouvé | Navigation seulement | Un peu de recherche | Recherche et catégories testées avec les utilisateurs | Journaux de recherche pilotant les changements | Recherche et assistants intégrés entre canaux |
| Entretien | Aucun | Occasionnel | Responsables et dates de revue | Usage et qualité mesurés | Amélioration continue à partir des retours |

## Liste de contrôle

- [ ] Les vingt principales demandes et questions sont dans le catalogue.
- [ ] Chaque entrée est en langage clair, avec qui, comment, combien de temps et le coût.
- [ ] Chaque entrée a un responsable et une date de revue.
- [ ] Les catégories ont été testées avec des utilisateurs.
- [ ] Les entrées demandables renvoient aux formulaires et à l'état.
- [ ] La vue technique couvre nos services critiques.
- [ ] Nous examinons les recherches infructueuses et les entrées abandonnées.
- [ ] Nous retirons ou fusionnons régulièrement des entrées.

## Invites d'IA

**Rédiger une entrée de catalogue à partir de notes.**

```text
Here are notes on the service [name]: [paste, including what it does, who can use it, how to ask, how long, cost].
Draft a catalog entry of under 120 words in plain language with a one-line summary, who it is for, how to ask, and expected time. Mark every gap in the notes with [missing] and do not fill it.
List what you are unsure of.
```

**Trouver les écarts de vocabulaire.**

```text
Here are search terms users typed with no useful result: [paste list]. Here are our current catalog entry titles: [paste list].
For each search term, list the entry titles that might match, or write "no match", and suggest a possible alias or new entry. Do not invent entries that I did not list as possible.
List what you are unsure of.
```

**Tester les catégories.**

```text
Here is a list of catalog items: [paste]. Here is our proposed category structure: [paste].
For each item, say which category a typical user would most likely look in and why, and list items that could reasonably sit in two places. Use only what is provided.
List what you are unsure of.
```

## Compétences d'IA

- [service-catalog](../../../../skills/service-catalog/SKILL.md) : à utiliser pour construire et entretenir un catalogue orienté utilisateur.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md) : à utiliser pour relier les entrées aux étapes de traitement.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md) : à utiliser pour identifier qui utilise et qui possède chaque service.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md) : à utiliser pour examiner l'ensemble des services.

## Sources principales

- PeopleCert, pages de certification ITIL : la description de la gestion du catalogue de services par le propriétaire.
- Wikipedia, « Service catalog » : un bref aperçu du concept.
- Wikipedia, « Information architecture » : la discipline d'organisation de l'information pour les utilisateurs.
- Wikipedia, « Plain language » : les principes d'une écriture claire.

## Références

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Application portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Application_portfolio_management
3. Taxonomy — Wikipedia — https://en.wikipedia.org/wiki/Taxonomy
4. Information architecture — Wikipedia — https://en.wikipedia.org/wiki/Information_architecture
5. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
6. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
7. Product backlog — Wikipedia — https://en.wikipedia.org/wiki/Product_backlog
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Search engine — Wikipedia — https://en.wikipedia.org/wiki/Search_engine
10. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
