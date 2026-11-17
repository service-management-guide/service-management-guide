# Agilité à grande échelle

**Les référentiels de passage à l'échelle tels que le Scaled Agile Framework (SAFe), Large-Scale Scrum (LeSS) et Disciplined Agile aident de nombreuses équipes à travailler sur un même produit ou service, mais ils ajoutent de la structure et du coût ; réduisez d'abord les dépendances et le nombre d'équipes, et n'adoptez un référentiel que pour les problèmes de coordination qui subsistent.**

## Pourquoi c'est important

La pratique agile a d'abord été décrite pour une seule petite équipe qui pouvait s'asseoir ensemble, planifier ensemble et livrer ensemble. Les services réels sont plus vastes. L'application mobile d'une banque, le dossier patient d'un hôpital ou la plateforme de transport d'une ville exigent des dizaines ou des centaines de personnes, de nombreuses équipes, des composants partagés et des fournisseurs. Ces équipes dépendent les unes des autres, et les dépendances les ralentissent.

Les référentiels de passage à l'échelle offrent des moyens de coordonner. Ils proposent des rôles, des événements et des artefacts afin que de nombreuses équipes puissent planifier et livrer de concert. Certains ont de larges communautés, des programmes de formation et des schémas de certification. Ils attirent aussi des critiques : qu'ils réintroduisent une planification lourde et de la hiérarchie sous des noms agiles, qu'ils sont vendus comme un programme pour l'organisation alors que le vrai problème est l'architecture ou la responsabilité, et qu'ils répandent le vocabulaire plus vite que les comportements.

Un responsable de services rencontre les référentiels de passage à l'échelle dans la pratique, car les équipes qui exploitent les services sont celles qui se coordonnent avec les équipes de plateforme, de sécurité et de fournisseurs. Ce sujet explique les principales options de façon neutre, se demande quand le passage à l'échelle aide et dit ce qu'il faut essayer avant d'adopter un référentiel. Il décrit les référentiels d'après les descriptions de leurs propriétaires lorsque c'est possible ; consultez les publications actuelles des propriétaires, car les versions changent.

## Concepts clés

**Le problème du passage à l'échelle.** Quand plus d'une poignée d'équipes contribuent à un même résultat, trois choses croissent : les dépendances (une équipe attend une autre), l'effort de coordination (planification et communication) et le risque de décisions incohérentes. La loi de Brooks, issue d'un livre de Fred Brooks de 1975 et décrite sur Wikipedia, observe qu'ajouter des personnes à un projet en retard tend à le retarder davantage, en raison du coût de la communication. Le passage à l'échelle consiste en grande partie à limiter ce coût.

**Loi de Conway.** L'observation selon laquelle la conception d'un système tend à refléter la structure de communication de l'organisation qui le construit. Si les équipes sont organisées par couche technique, le système aura des frontières de couches, et chaque fonctionnalité exigera toutes les équipes. Beaucoup de problèmes de passage à l'échelle sont des problèmes de structure ; voir le Sujet 1.6 — Les quatre dimensions de la gestion des services.

**SAFe.** Le Scaled Agile Framework est un ensemble de modèles d'organisation et de flux de travail, de Scaled Agile, Inc., pour mettre en œuvre l'agilité à l'échelle de l'entreprise. Il organise les équipes en groupes qui planifient ensemble par incréments fixes, et propose des configurations pour différentes tailles, dont les niveaux portefeuille, grande solution et essentiel. Il est très utilisé dans les grandes entreprises et dispose de recommandations détaillées et d'une certification. Les critiques pointent sa taille et ses cycles de planification.

**LeSS.** Large-Scale Scrum, créé par Craig Larman et Bas Vodde, étend Scrum à de nombreuses équipes avec un seul backlog de produit et un seul responsable de produit. Il met l'accent sur la simplicité et la suppression des structures inutiles, et exprime l'idée que le passage à l'échelle devrait signifier « moins » d'organisation (less). Il suppose que les équipes utilisent Scrum. Voir less.works pour sa propre description.

**Disciplined Agile.** Une boîte à outils, issue à l'origine de Scott Ambler et Mark Lines, décrite sur Wikipedia sous le nom de Disciplined Agile Delivery, qui offre un menu d'options pour chaque aspect de la livraison et encourage les équipes à choisir ce qui convient à leur contexte. Elle est désormais maintenue par le Project Management Institute. Le nom du référentiel comprend le mot « delivery » et est cité ici comme un nom propre.

**Scrum de Scrums.** Un modèle dans lequel un représentant de chaque équipe rencontre régulièrement les autres pour se coordonner entre équipes. Il est simple et fonctionne pour un petit nombre d'équipes.

**Autres approches.** Certaines organisations adoptent un modèle inspiré de la façon dont une entreprise particulière est décrite. Les descriptions publiées des escouades, tribus, chapitres et guildes d'une société de musique ont été largement copiées, bien que des personnes impliquées aient dit qu'il s'agissait d'un instantané d'une expérience plutôt que d'un référentiel à adopter. Traitez de telles descriptions comme des sources d'idées, non comme des recettes.

**Topologies d'équipes et responsabilité.** Une approche qui décrit un petit nombre de types d'équipes (alignée sur le flux, plateforme, facilitatrice, sous-système complexe) et leurs modes d'interaction, dans le but de réduire les dépendances. C'est une façon de penser la structure, qui complète le choix d'un référentiel ou peut le remplacer dans certaines organisations.

**Agilité d'entreprise.** Une idée plus large selon laquelle toute l'organisation, finance, RH et gouvernance comprises, doit répondre au changement, pas seulement les équipes de livraison. Wikipedia la décrit sous « business agility ». Passer des équipes à l'échelle sans changer la budgétisation ou la gouvernance échoue souvent.

**Équipes de service à grande échelle.** Les équipes d'exploitation, de support et de plateforme servent de nombreuses équipes produit, et leur travail ne s'insère pas facilement dans des incréments de planification. Elles ont besoin d'interfaces claires, comme un catalogue de services et des niveaux de service convenus, et d'une capacité pour absorber les interruptions. Voir le Sujet 2.8 — Propriété des produits et des services et le Sujet 3.8 — Gestion du catalogue de services.

**Comment les angles s'articulent.** Le passage à l'échelle concerne l'angle agile à la taille de l'organisation. L'IA peut aider à résumer les dépendances et les plans, sous revue. L'automatisation peut montrer les dépendances dans les outils et garder les plans cohérents. L'analytique peut montrer où le travail attend d'autres équipes.

## Bonnes pratiques

1. **Réduire les dépendances avant de les coordonner.** Cherchez des moyens de rendre les équipes indépendantes : responsabilité plus claire, meilleures interfaces, composants partagés avec leur propre équipe, ou fusion d'équipes qui travaillent toujours ensemble.
2. **Aligner les équipes sur le flux de valeur.** Organisez les équipes autour d'un service ou d'un parcours client, de sorte qu'une équipe puisse livrer un changement de l'idée à la production. Évitez les équipes qui ne possèdent qu'une couche technique.
3. **Commencer par la plus petite coordination qui fonctionne.** Pour quelques équipes, des conversations régulières et un tableau partagé peuvent suffire. N'ajoutez de la structure que lorsqu'un problème montre que vous en avez besoin.
4. **Choisir un référentiel pour un problème nommé.** Écrivez le problème de coordination, par exemple « cinq équipes partagent une mise en production et les blocages sont fréquents », et demandez quel référentiel ou quelle pratique y répond. N'adoptez pas un référentiel parce qu'il est populaire.
5. **Garder un backlog et une priorité visibles pour un résultat partagé.** De nombreuses équipes qui travaillent selon des listes de priorités différentes produisent des conflits. Convenez de qui décide de la priorité entre les équipes.
6. **Rendre les dépendances visibles.** Montrez sur un tableau ou une carte quelle équipe attend laquelle. Examinez les plus importantes et décidez s'il faut supprimer ou gérer chacune.
7. **Fournir les plateformes comme des services.** Si une équipe de plateforme sert d'autres équipes, traitez celles-ci comme des clientes, publiez les interfaces et mesurez si elles aident. Voir le Sujet 2.5 — DevOps.
8. **Impliquer l'exploitation et les fournisseurs dans la planification.** Incluez les équipes de service et de fournisseurs dans la planification inter-équipes, afin que les besoins d'exploitation et de support ne soient pas découverts au lancement.
9. **Adapter la budgétisation et la gouvernance.** Financer des équipes stables et des résultats, et garder une gouvernance légère et fondée sur des preuves, soutient mieux une livraison à grande échelle qu'un financement projet par projet.
10. **Examiner le référentiel lui-même.** Après un an, demandez s'il a réduit l'attente et amélioré les résultats. Abandonnez ou changez ce qui n'aide pas.

## Questions à discuter avec votre équipe

**Quelles équipes attendons-nous le plus, et pourquoi ?**
Cela révèle les dépendances. Les gens nomment généralement quelques équipes de façon répétée. Demandez des exemples réels avec des dates. Demandez ensuite ce qui ferait disparaître la dépendance, comme déplacer une compétence, une interface ou une décision.

**Quel problème un référentiel de passage à l'échelle résoudrait-il pour nous que nous ne pouvons pas résoudre par un changement plus simple ?**
Cela teste si un référentiel est nécessaire. Les équipes invoquent souvent l'alignement général. Insistez sur le concret. Demandez ensuite de choisir le plus petit changement à essayer d'abord.

**Comment nos équipes sont-elles organisées, par couche, par composant ou par parcours, et que cela nous coûte-t-il ?**
La structure façonne les dépendances. Demandez combien d'équipes touchent un changement typique. Attendez-vous à des réponses de trois à six. Demandez ensuite d'esquisser une structure alternative pour un parcours.

**Qui décide de la priorité quand le travail de deux équipes entre en conflit ?**
Des droits de décision flous font perdre du temps. Vous entendrez peut-être que cela dépend, ou que les dirigeants décident tard. Demandez le dernier exemple. Demandez ensuite de convenir d'un décideur et d'une échéance pour chaque type de conflit.

**Comment notre modèle de financement aide-t-il ou freine-t-il les équipes qui restent ensemble et possèdent des services ?**
Le financement par projet dissout les équipes et perd les connaissances. Demandez combien de temps les équipes restent ensemble et qui finance l'amélioration. Demandez ensuite de lister un service qui bénéficierait d'un financement stable.

**Comment l'IA pourrait-elle nous aider à voir et à gérer les dépendances, et qu'est-ce qui pourrait mal tourner ?**
L'IA peut lire des plans et des tickets et suggérer des liens. Elle peut aussi inventer des dépendances ou en manquer de réelles. Demandez qui vérifie et à quelle fréquence. Demandez ensuite de comparer une carte générée par l'IA avec une dessinée par deux équipes.

## En pratique : un exemple de gestion des services

La division numérique d'une compagnie nationale de chemins de fer compte onze équipes qui travaillent sur un service de calcul d'itinéraires : web, mobile, données d'horaires, flux en temps réel, paiements, accessibilité et d'autres. Les mises en production exigent que les onze équipes soient prêtes, et un retard de l'une retient les autres. On a conseillé au directeur de la division d'adopter un grand référentiel de passage à l'échelle avec un programme de formation et de nouveaux rôles.

La responsable du service demande deux semaines pour cartographier d'abord les dépendances. Elle dessine un tableau avec chaque équipe et les éléments qu'elles ont attendus au dernier trimestre. Quatre équipes concentrent l'essentiel de l'attente : l'équipe des données d'horaires est un goulot pour trois autres ; les paiements dépendent du cycle de mise en production d'un fournisseur ; les revues d'accessibilité sont faites tard par une équipe distincte ; et un système de conception partagé n'a pas de responsable. Elle propose quatre changements : déplacer deux ingénieurs de données dans les équipes qui attendent le plus, publier les données d'horaires par une interface documentée que les équipes peuvent lire sans demander, placer des spécialistes de l'accessibilité dans les équipes mobile et web, et confier le système de conception à une équipe nommée qui traite les autres comme des clientes.

Le directeur accepte d'essayer pendant un trimestre et de tenir une courte séance de planification toutes les six semaines entre équipes, avec une liste de priorités unique et visible pour le résultat partagé. Un référentiel est reporté.

Ce qui change : le nombre d'éléments en attente d'autres équipes diminue, et les mises en production n'exigent plus que les onze équipes soient prêtes. Ce qui reste difficile : les paiements dépendent toujours du calendrier du fournisseur ; la liste de priorités partagée est discutée à chaque séance ; et le processus budgétaire de la division finance des projets, si bien que deux équipes seront dissoutes en fin d'année. La responsable du service dit au directeur que, sans changer le financement, les améliorations risquent de ne pas durer.

## Quatre perspectives

### Équipes produit et de livraison

Cherchez des moyens de supprimer les dépendances envers d'autres équipes et rendez visibles celles qui subsistent. Participez à la planification inter-équipes et gardez le service en production dans vos plans.

### Équipes de service et d'exploitation

Proposez des interfaces claires comme un catalogue de services et des niveaux convenus. Participez à la planification pour que les besoins d'exploitation et de support soient connus tôt, et apportez à la conversation des données sur les interruptions et l'attente.

### Direction et gouvernance

Demandez quel problème de coordination un référentiel résoudrait et comment vous saurez qu'il l'a fait. Adaptez le financement et la gouvernance à des équipes stables orientées résultats. Nommez qui décide de la priorité entre les équipes.

### Clients et utilisateurs

Vous devriez vivre un service qui évolue de façon cohérente, et non un ensemble de mises en production sans lien. Dites au fournisseur où des fonctionnalités ou des expériences vous semblent incohérentes, car cela révèle souvent des problèmes de coordination.

## Agilité, IA, automatisation et analytique

### Agilité

Gardez les parties prenantes impliquées entre les équipes, livrez par petits morceaux et améliorez la façon dont les équipes se coordonnent. Attention : les événements de planification à grande échelle peuvent devenir de gros lots déguisés ; gardez-les courts et gardez des mises en production petites.

### IA

L'IA peut résumer les backlogs inter-équipes, proposer des liens de dépendance et rédiger des notes de planification, sous revue humaine. Nommez un responsable pour chaque usage. Attention : les résumés de plans par l'IA peuvent aplatir les désaccords ; laissez les humains faire les arbitrages. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez le suivi des dépendances dans vos outils, les pipelines partagés et des environnements cohérents, afin que la coordination repose moins sur les réunions. Attention : un outillage qui impose un plan rigide peut défaire la flexibilité ; gardez-le comme un appui à la conversation. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Mesurez le temps d'attente entre équipes, le nombre de dépendances inter-équipes par élément et le délai de l'idée à la mise en production pour un résultat partagé. Attention : comparer les équipes sur ces mesures ignore le contexte et invite au détournement ; utilisez-les pour trouver des problèmes structurels. Voir le Sujet 7.6 — Analytique des processus et des flux de valeur et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Le référentiel d'abord.** Un grand programme démarre avant que le problème soit nommé. Cartographiez les dépendances et essayez des changements simples.
- **Des équipes organisées par couche.** Chaque changement exige chaque équipe. Organisez autour du parcours.
- **Les réunions de coordination se multiplient.** Les gens passent leur semaine en planification. Réduisez les dépendances et le nombre d'événements.
- **Priorité inter-équipes floue.** Les équipes tirent dans des directions différentes. Nommez un décideur.
- **Financement inchangé.** Le financement par projet disloque les équipes. Financez des équipes stables et des résultats.
- **Copier le modèle d'une autre entreprise.** Le contexte diffère. Traitez-le comme des idées, non comme une recette.
- **La plateforme comme mandat.** Les équipes la contournent. Traitez les autres équipes comme des clientes.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Dépendances | Inconnues | Principales dépendances connues | Dépendances visibles et attribuées | Dépendances réduites sur la base de preuves | Équipes largement indépendantes avec des interfaces claires |
| Structure | Équipes par couche | Quelques équipes alignées sur les parcours | Équipes alignées sur le flux de valeur | Structure examinée à l'aune des résultats | La structure s'adapte entre services et partenaires |
| Coordination | Au cas par cas | Conversations régulières | Planification inter-équipes légère et régulière | Coût de coordination mesuré | Coordination soutenue par des outils et des interfaces partagés |
| Financement et gouvernance | Financement par projet | Quelques équipes stables | Équipes stables et gouvernance orientée résultats | Financement examiné à l'aune des résultats | Financement et gouvernance s'adaptent dans tout le portefeuille |

## Liste de contrôle

- [ ] Nous avons cartographié les dépendances entre équipes avec des exemples réels.
- [ ] Nous avons essayé de réduire les dépendances avant d'adopter un référentiel.
- [ ] Les équipes sont alignées sur un parcours ou un service lorsque c'est possible.
- [ ] Un décideur nommé tranche la priorité inter-équipes.
- [ ] Les équipes de plateforme et de service publient des interfaces et traitent les autres comme des clientes.
- [ ] La planification inter-équipes est courte et inclut l'exploitation et les fournisseurs.
- [ ] Le financement soutient des équipes stables.
- [ ] Nous examinons chaque année le référentiel choisi à l'aune des résultats.

## Invites d'IA

**Rédiger une carte des dépendances à partir de notes.**

```text
Here are notes on what each team waited for in the last quarter: [paste notes].
List each dependency as "team A waits for team B for X", count how often each appears, and list the five most frequent. Do not infer reasons.
List what you are unsure of.
```

**Comparer des options de structure.**

```text
Our service involves these teams and what each owns: [paste]. A typical change needs: [describe].
Describe two alternative ways to organize the teams around the journey, with the trade-offs of each. Mark assumptions. Do not recommend a framework.
List what you are unsure of.
```

**Préparer un ordre du jour de planification inter-équipes.**

```text
We have [number] teams planning together for [period]. The shared outcome is: [describe]. The top dependencies are: [list].
Draft a 90-minute agenda that focuses on dependencies and priorities, with time for each, and questions to ask. Keep it short and avoid framework jargon.
List what you are unsure of.
```

## Compétences d'IA

- [scaled-agile-framework](../../../../skills/scaled-agile-framework/SKILL.md) : à utiliser pour comprendre les rôles et événements de SAFe avant de décider s'il convient.
- [large-scale-scrum](../../../../skills/large-scale-scrum/SKILL.md) : à utiliser pour comprendre LeSS et ses hypothèses.
- [disciplined-agile](../../../../skills/disciplined-agile/SKILL.md) : à utiliser pour voir les options qu'offre Disciplined Agile pour un contexte.
- [scrum-of-scrums](../../../../skills/scrum-of-scrums/SKILL.md) : à utiliser pour un modèle léger de coordination inter-équipes.

## Sources principales

- Craig Larman et Bas Vodde, LeSS (less.works) : la description de Large-Scale Scrum par ses propriétaires.
- Scaled Agile, Inc., SAFe (scaledagileframework.com) : le site du référentiel lui-même.
- Matthew Skelton et Manuel Pais, *Team Topologies* (2019) : une façon de penser la structure des équipes et leur interaction.
- Wikipedia, « Scaled agile framework » et « Conway's law » : contexte neutre.

## Références

1. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
2. Disciplined agile delivery — Wikipedia — https://en.wikipedia.org/wiki/Disciplined_agile_delivery
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Brooks's law — Wikipedia — https://en.wikipedia.org/wiki/Brooks%27s_law
6. Business agility — Wikipedia — https://en.wikipedia.org/wiki/Business_agility
7. Matrix management — Wikipedia — https://en.wikipedia.org/wiki/Matrix_management
8. Portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Portfolio_management
9. Large-Scale Scrum (LeSS) — Larman and Vodde — https://less.works
10. Scaled Agile Framework — Scaled Agile, Inc. — https://scaledagileframework.com
