# Propriété des produits et des services

**La propriété des produits et des services signifie qu'une personne nommée répond d'un produit ou d'un service sur toute sa vie, de l'idée au retrait, y compris son exploitation ; c'est le modèle derrière « you build it, you run it », et le passage à ce modèle est un thème des recommandations ITIL les plus récentes.**

## Pourquoi c'est important

De nombreuses organisations technologiques sont bâties autour de projets. Une équipe est financée, construit quelque chose, le transmet à l'exploitation, puis se dissout. Les personnes qui comprennent la conception partent juste au moment où le service entre en production. L'exploitation hérite d'un système qu'elle n'a pas choisi, avec une documentation écrite à la hâte. Personne ne répond à la question « cela vaut-il encore la peine d'être exploité ? » jusqu'à ce qu'une crise ou un audit l'impose.

La propriété des produits et des services inverse le schéma. Un produit ou un service a une équipe stable et un responsable nommé qui répond de ses résultats dans le temps : s'il répond aux besoins des clients, ce qu'il coûte, sa fiabilité et le moment où il doit changer ou s'arrêter. Le financement suit le produit, non le projet. L'équipe qui le construit reste pour l'exploiter et l'améliorer.

La description d'ITIL (version 5) par son propriétaire, présenté par PeopleCert en 2026, évoque ensemble les produits et services numériques (voir le Sujet 1.3 — ITIL 5). ITIL 4 nommait déjà des responsables de service et, pour les produits, des responsables de produit. Ce sujet explique les rôles, en quoi ils diffèrent et comment instaurer la responsabilité sans se contenter de rebaptiser le personnel existant.

## Concepts clés

**Produit.** Une configuration des ressources d'une organisation conçue pour offrir de la valeur à un consommateur. Dans le logiciel, un produit est quelque chose comme une application, une plateforme ou un système interne. Les articles de Wikipedia sur la gestion de produit et le cycle de vie du produit décrivent les idées générales de la gestion de quelque chose depuis son introduction, par la croissance et la maturité, jusqu'au déclin.

**Service.** Un moyen de permettre la cocréation de valeur en facilitant les résultats que les clients veulent atteindre (voir le Sujet 1.1 — Gestion des services). Les services sont livrés par des produits et d'autres ressources. Un même produit peut soutenir plusieurs services, et un service peut utiliser plusieurs produits. La distinction compte moins que de veiller à ce que les deux aient un responsable.

**Responsable de produit (product owner).** Dans Scrum, une personne est chargée de maximiser la valeur du produit et de gérer le backlog. Le terme s'est répandu au-delà de Scrum pour désigner la personne qui décide de ce qu'un produit doit faire ensuite. Dans de nombreuses organisations, les chefs de produit (product managers) remplissent le même rôle avec des tâches plus larges comme la stratégie, la tarification et l'analyse de marché.

**Responsable de service (service owner).** La personne responsable de la fourniture d'un service précis : sa qualité, ses coûts et son amélioration. Le responsable de service travaille avec ceux qui l'exploitent et avec les clients. ITIL 4 décrit les responsables de service comme responsables du service tel que le client le vit.

**Responsable de pratique.** La personne responsable de la façon dont une pratique, comme la gestion des incidents ou l'habilitation des changements, fonctionne dans l'organisation. Un responsable de pratique n'est pas un responsable de service ; les deux rôles se croisent là où un service utilise une pratique.

**Responsabilité de produit et de service ensemble.** Dans les petites organisations, une même personne peut être les deux. Dans les grandes, le responsable de produit décide de ce que le produit doit devenir, et le responsable de service veille à ce qu'il soit bien exploité et respecte les niveaux de service. Les deux doivent être en contact constant, sinon le produit évolue d'une manière que le service ne peut pas soutenir.

**Redevabilité et responsabilité.** La redevabilité (accountability) consiste à répondre du résultat et à avoir l'autorité de décider. La responsabilité (responsibility) consiste à faire le travail. Un responsable répond du résultat et peut déléguer le travail, mais ne peut pas déléguer la réponse. Une matrice d'affectation des responsabilités comme RACI (réalise, approuve, consulté, informé) peut aider à clarifier ; voir la compétence RACI dans ce guide.

**Équipes pérennes.** L'équipe qui construit et exploite un produit reste ensemble dans le temps et conserve ses connaissances. Le financement soutient une équipe stable avec une mission plutôt qu'un projet ponctuel. Les connaissances, les relations avec les clients et le sentiment de responsabilité s'en trouvent renforcés.

**You build it, you run it.** La formule, associée à Werner Vogels d'Amazon, résume l'idée que l'équipe qui construit un service est responsable de son exploitation. Elle ramène la rétroaction de la production vers les personnes qui peuvent corriger les causes. Elle exige du soutien, des limites d'astreinte et des services de plateforme, sinon elle accable les développeurs. Voir le Sujet 2.5 — DevOps.

**Cycle de vie.** Un produit ou un service traverse des étapes : idée, développement, lancement, croissance, maturité et retrait. Un responsable répond de chacune, y compris la dernière, souvent négligée. Les coûts de maintenance logicielle persistent des années ; l'article de Wikipedia sur la maintenance logicielle en décrit les types.

**Résultats plutôt que livrables.** Les responsables sont jugés sur des résultats comme la réussite des clients et une fiabilité durable, pas seulement sur les fonctionnalités livrées. Choisir et suivre les résultats fait partie du rôle ; voir le Sujet 7.3 — Mesure et reporting.

**Rebaptiser n'est pas changer.** Changer « chef de projet » en « responsable de produit » dans les intitulés de poste sans modifier l'autorité, le financement ou la redevabilité ne donne les bénéfices d'aucun des deux modèles. La responsabilité exige le pouvoir de prioriser, le budget pour agir et la redevabilité pour répondre.

**Comment les angles s'articulent.** La responsabilité est une condition préalable des autres angles : quelqu'un doit répondre de la livraison continue, de l'usage de l'IA, de l'automatisation et de l'analytique. Les systèmes d'IA ont aussi besoin de responsables (voir le Sujet 5.8 — Modèle opérationnel et compétences en IA).

## Bonnes pratiques

1. **Nommer un responsable pour chaque produit et chaque service.** Mettez le nom là où les gens peuvent le voir, par exemple dans le catalogue. Vérifiez que la personne sait qu'elle tient le rôle.
2. **Donner au responsable une vraie autorité.** Le responsable peut prioriser le travail, dire non et décider des arbitrages dans un budget. Si chaque décision remonte à un comité, le rôle est décoratif.
3. **Financer des équipes pérennes.** Lorsque c'est possible, financez l'équipe et sa mission pour un an ou plus, et examinez régulièrement les résultats plutôt que de financer chaque projet.
4. **Garder le responsable proche des clients.** Les responsables devraient parler souvent aux utilisateurs et aux clients, et voir des données sur la manière dont le service est utilisé. Un responsable qui s'appuie sur des résumés perd vite le contact.
5. **Relier les responsables de produit et de service.** Là où les rôles sont séparés, faites-les se rencontrer régulièrement, partager un backlog ou au moins une visibilité, et convenir de la manière dont les besoins d'exploitation entrent dans les plans de produit.
6. **Inclure l'exploitation dans le backlog du produit.** Le travail de fiabilité, de sécurité et de maintenance devrait concourir avec les fonctionnalités sur une seule liste, le responsable décidant de la priorité.
7. **Planifier toute la vie.** Demandez dès le départ ce que le retrait impliquerait et examinez chaque année si le produit mérite encore son coût. Retirez ce qui ne le mérite plus.
8. **Définir les résultats du responsable.** Énoncez ce dont le responsable répond, comme la satisfaction des clients, les objectifs de fiabilité et le coût, et examinez-les avec lui.
9. **Soutenir l'astreinte et « you run it ».** Si les équipes exploitent ce qu'elles construisent, donnez-leur une formation, des limites de charge, des services de plateforme et un chemin d'escalade. Voir le Sujet 2.6 — Ingénierie de la fiabilité des sites.
10. **Inclure l'IA et l'automatisation dans le parc.** Traitez chaque système d'IA et chaque automatisation importante comme un produit ou une partie d'un produit, avec un responsable et un cycle de vie.

## Questions à discuter avec votre équipe

**Lesquels de nos produits et services n'ont pas de responsable unique, et qui répond quand quelque chose tourne mal ?**
Cela révèle les lacunes. Attendez-vous à voir apparaître les plateformes partagées, les intégrations et les anciens systèmes. Insistez pour une personne, non un nom d'équipe. Demandez ensuite de choisir une lacune et de convenir de qui la prendra.

**Quelles décisions nos responsables peuvent-ils prendre sans demander à quelqu'un d'autre ?**
Cela teste l'autorité. Les responsables peuvent souvent réordonner le backlog mais pas embaucher, dépenser ni retirer. Demandez la dernière décision qui est remontée la chaîne. Demandez ensuite de convenir d'une décision à déléguer.

**Comment nos équipes sont-elles financées, et que devient une équipe quand un projet s'achève ?**
Cela teste la pérennité. Les réponses peuvent inclure que les équipes se dissolvent, ou que le financement est renouvelé chaque année avec incertitude. Demandez quelles connaissances ont été perdues la dernière fois. Demandez ensuite de nommer un service qui mérite un financement stable.

**Comment les besoins d'exploitation atteignent-ils aujourd'hui le backlog du produit ?**
Le travail de fiabilité et de maintenance est souvent évincé. Demandez qui décide de la priorité et comment la dette technique est pesée. Demandez ensuite de convenir d'une part minimale de capacité pour le travail d'exploitation.

**Lesquels de nos produits devrions-nous retirer, et qui déciderait ?**
Le retrait a rarement un responsable. Demandez ce que chaque ancien produit coûte en temps et en risque. Attendez-vous à de la résistance. Demandez ensuite de choisir un candidat et de lister ce qui devrait être vrai pour l'éteindre.

**Qui est responsable de chaque système d'IA que nous utilisons, et comment le savons-nous ?**
Les fonctions d'IA arrivent intégrées dans les outils de fournisseurs et les projets internes. Demandez un inventaire et un responsable pour chacune. Demandez ensuite de choisir le système le moins attribué et de lui désigner un responsable.

## En pratique : un exemple de gestion des services

Un service météorologique national exploite un site public de prévisions, un service de données utilisé par les compagnies aériennes et les agriculteurs, et une plateforme de prévision interne. Chacun a été construit par un projet distinct et transmis à un groupe d'exploitation central. Quand le service de données aériennes est tombé en panne pendant une tempête, il a fallu six heures pour trouver quelqu'un capable de modifier le format des données : l'équipe du projet avait été dissoute, et l'exploitation n'avait qu'un document de transfert.

La nouvelle directrice du numérique demande, pour chacun des trois, qui en est responsable. Pour le site, la réponse est la directrice de la communication, qui ne connaît pas les détails techniques. Pour le service de données, personne n'est nommé. Pour la plateforme, trois personnes disent l'être.

La directrice nomme un responsable de produit pour chacun, choisi parmi des personnes ayant l'autorité de décider, et constitue pour chacun une petite équipe pérenne, composée de ceux qui l'ont construit et de l'exploitation. Elle change le financement du service de données, d'un budget de projet à un budget annuel d'équipe, et demande au responsable de produit de fixer deux résultats : la disponibilité par temps violent et le délai de correction d'un problème de format. Les clients aériens sont invités à une revue trimestrielle.

Ce qui change : lors de la tempête suivante, l'équipe du service de données corrige un problème de format en moins d'une heure, et les clients voient un contact nommé. Ce qui reste difficile : les trois responsables de produit se disputent les mêmes ingénieurs de plateforme ; le responsable de la plateforme de prévision n'a aucune autorité sur le budget du supercalculateur, qui relève d'un autre département ; et le responsable du site rend encore compte à une structure de communication qui ne donne pas la priorité à la dette technique. La directrice porte la question des ingénieurs partagés et de la répartition du budget devant l'équipe de direction.

## Quatre perspectives

### Équipes produit et de livraison

Soyez responsables du produit tout au long de sa vie. Rendez le travail d'exploitation visible dans le backlog, apprenez comment les clients utilisent ce que vous construisez et participez à son exploitation. Signalez-le quand le modèle de responsabilité laisse des lacunes.

### Équipes de service et d'exploitation

Sachez qui est responsable de chaque service et dites-lui ce que vous voyez : incidents, demandes et coûts. Proposez de partager la charge de l'exploitation de ce que construisent les équipes, avec des frontières claires.

### Direction et gouvernance

Nommez des responsables, donnez-leur autorité et budget, et tenez-les redevables des résultats. Financez des équipes pérennes et demandez des revues de cycle de vie. Évitez de rebaptiser des rôles sans changer les décisions.

### Clients et utilisateurs

Vous devriez savoir à qui vous adresser à propos d'un produit ou d'un service et voir que vos retours mènent à des actions. Demandez qui est responsable de ce que vous utilisez et dites-lui ce qui compte.

## Agilité, IA, automatisation et analytique

### Agilité

Les responsables gardent les parties prenantes impliquées, priorisent un backlog unique qui inclut le travail d'exploitation et livrent par petits morceaux. Attention : un responsable qui ne fait que transmettre les demandes d'autrui ne possède pas le produit ; le rôle exige jugement et autorité.

### IA

Un responsable répond de chaque système d'IA au sein de son produit ou service : ce qu'il fait, quelles données il utilise, où une personne décide et comment les erreurs sont repérées. L'IA peut aider les responsables à résumer les retours et l'usage, sous revue. Attention : n'acceptez pas « le fournisseur est responsable de l'IA » comme réponse ; vous restez redevable de son usage. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Les responsables décident quoi automatiser et répondent de ce que fait l'automatisation dans leur service, journaux et retour arrière compris. Attention : une automatisation construite par une équipe de plateforme a quand même besoin d'un responsable côté service ; désignez-en un. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Les responsables devraient disposer de données sur l'usage, la fiabilité, le coût et les résultats pour les clients, et en discuter régulièrement. Attention : si les responsables sont jugés sur un seul chiffre, ils l'ajusteront ; utilisez un petit ensemble qui inclut les résultats et l'expérience. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Responsable de nom seulement.** Le titre est donné et l'autorité non. Définissez décisions et budget.
- **Financement par projet pour un service vivant.** Les équipes se dissolvent et les connaissances partent. Financez des équipes pérennes.
- **Un responsable de produit sans l'exploitation.** Les fonctionnalités l'emportent et la fiabilité pâtit. Mettez le travail d'exploitation sur un seul backlog.
- **Pas de retrait.** Les vieux produits continuent et consomment de la capacité. Examinez le cycle de vie chaque année.
- **Rebaptiser les rôles.** Rien ne change pour les clients. Changez décisions, financement et redevabilité.
- **IA et automatisation sans responsable.** Des systèmes agissent sans que personne en réponde. Nommez un responsable pour chacun.
- **Un responsable éloigné des clients.** Les décisions reposent sur des résumés. Exigez un contact régulier avec les utilisateurs.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Responsabilité | Floue pour beaucoup | Responsables pour les principaux produits | Chaque produit et service a un responsable nommé et habilité | Responsabilité examinée à l'aune des résultats | Les responsables se coordonnent dans le parc et avec les partenaires |
| Financement | Par projet | Quelques équipes pérennes | Équipes pérennes financées par mission | Financement examiné avec les résultats | Le financement s'adapte dans tout le portefeuille |
| Cycle de vie | De l'idée au lancement seulement | Maintenance remarquée | Étapes du cycle de vie et retrait planifiés | Décisions de cycle de vie prises sur la base de preuves | Cycle de vie du portefeuille géré entre services |
| Exploiter ce que l'on construit | Transfert à l'exploitation | Astreinte partagée dans une équipe | « You build it, you run it » avec soutien et limites | Charge et fiabilité mesurées | Soutenu par des plateformes et partagé entre équipes |

## Liste de contrôle

- [ ] Chaque produit et service a un responsable nommé, visible dans le catalogue.
- [ ] Les responsables peuvent prioriser, dépenser dans un budget et dire non.
- [ ] Les équipes qui exploitent des services sont pérennes et financées à long terme.
- [ ] Le travail d'exploitation est sur le même backlog que les fonctionnalités.
- [ ] Les responsables parlent régulièrement aux clients et voient les données d'usage.
- [ ] Les responsables de produit et de service se rencontrent régulièrement.
- [ ] Nous examinons chaque année le cycle de vie de chaque produit, retrait compris.
- [ ] Chaque système d'IA et chaque automatisation importante a un responsable.

## Invites d'IA

**Trouver les lacunes de responsabilité.**

```text
Here is a list of our products, services, platforms, and AI-enabled features, with any owners we have recorded: [paste list].
Produce a table with item, owner (only as given; otherwise "none recorded"), and one question to find out who is really accountable. Do not guess owners.
List what you are unsure of.
```

**Rédiger une description du rôle de responsable à discuter.**

```text
Our context: [type of organization, size]. The role: owner of [product or service].
Draft a one-page description with: outcomes the owner is accountable for, decisions the owner can make, decisions that need approval, and people the owner works with. Keep it plain and mark every assumption.
List what you are unsure of.
```

**Préparer une revue de cycle de vie.**

```text
Here are facts about our product [name]: age, users, running cost, incidents last year, and planned work: [paste facts].
List questions to ask in a lifecycle review, including whether to continue, change, or retire it. Do not recommend a decision.
List what you are unsure of.
```

## Compétences d'IA

- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour clarifier qui est responsable et qui réalise.
- [product-roadmap](../../../../skills/product-roadmap/SKILL.md) : à utiliser pour planifier l'orientation d'un produit avec les parties prenantes.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md) : à utiliser pour examiner les produits et services dans tout le parc.
- [user-story](../../../../skills/user-story/SKILL.md) : à utiliser pour exprimer les besoins des clients dans le backlog.

## Sources principales

- PeopleCert, pages de certification ITIL : la description des recommandations ITIL pour les produits et services numériques par le propriétaire.
- Marty Cagan, *Inspired* (2017) : un récit très lu du rôle de chef de produit.
- Gene Kim et autres, *The DevOps Handbook* : sur les équipes qui construisent et exploitent des services.
- Wikipedia, « Product management » et « Product lifecycle » : contexte neutre.

## Références

1. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
2. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Accountability — Wikipedia — https://en.wikipedia.org/wiki/Accountability
5. Raci — Wikipedia — https://en.wikipedia.org/wiki/Raci
6. Software maintenance — Wikipedia — https://en.wikipedia.org/wiki/Software_maintenance
7. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
8. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
9. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
