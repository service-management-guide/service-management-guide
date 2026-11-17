# Gouvernance, risques et conformité de l'IA

**La gouvernance de l'IA donne à une organisation des responsables nommés, des règles claires sur les données et les décisions, une évaluation des risques proportionnée au préjudice, des tests et des enregistrements pour chaque système d'IA qu'elle utilise ; des référentiels comme ISO/IEC 42001, le NIST AI Risk Management Framework et le règlement européen sur l'IA fournissent du vocabulaire et de la structure, non des conseils juridiques.**

## Pourquoi c'est important

L'IA arrive dans une organisation par de nombreuses portes à la fois. Les éditeurs ajoutent des fonctions d'IA aux outils que vous payez déjà. Les équipes construisent des assistants. Des particuliers utilisent des outils de conversation publics pour leur travail. Chaque usage porte des questions que l'organisation ne s'est peut-être pas posées : quelles données y entrent, qui les voit, quelle est son exactitude, qui est touché par ses décisions et qui répond quand elle se trompe.

Sans gouvernance, ces questions reçoivent une réponse usage par usage, de façon incohérente, ou pas du tout. Les conséquences vont du gênant au grave : un document confidentiel collé dans un outil public, un système de présélection qui traite certains groupes moins bien que d'autres, un assistant qui donne un mauvais conseil à un client, un régulateur qui demande des preuves de contrôle et n'en trouve aucune.

La gouvernance est la réponse, et elle n'a pas besoin d'être lourde. Au fond, c'est un petit ensemble d'habitudes : savoir quelle IA vous utilisez, donner à chaque usage un responsable, évaluer le risque en proportion de ce qui pourrait mal tourner, tester et surveiller, fixer des règles sur les données et la supervision humaine, et tenir des registres. Les lois et les normes évoluent vite : le règlement de l'Union européenne sur l'intelligence artificielle, décrit sur Wikipedia, fixe des obligations par catégorie de risque, et de nombreuses autres juridictions ont des règles ou des projets. Ce sujet explique la structure et le vocabulaire et montre comment insérer la gouvernance de l'IA dans la gouvernance que vous avez déjà. Il ne donne aucun conseil juridique ; pour toute question de droit, demandez à un conseiller qualifié.

La description de la version la plus récente d'ITIL par son propriétaire place l'IA dans l'environnement que la gestion des services doit prendre en compte (voir le Sujet 1.3 — ITIL 5). Ce sujet se relie à la vue générale de l'IA (Sujet 5.1 — L'IA dans la gestion des services), aux agents (Sujet 5.5 — IA agentique et supervision humaine), au modèle opérationnel (Sujet 5.8 — Modèle opérationnel et compétences en IA) et à la gouvernance d'entreprise (Sujet 8.1 — Gouvernance, risques et conformité).

## Concepts clés

**Gouvernance, risques et conformité (GRC).** La gouvernance est la façon dont une organisation est dirigée et contrôlée ; la gestion des risques identifie et traite les menaces pesant sur les objectifs ; la conformité consiste à respecter les obligations issues de lois, de contrats et de politiques. Wikipedia décrit la GRC comme une approche intégrée des trois. La gouvernance de l'IA applique la même logique à l'IA.

**Inventaire de l'IA.** Une liste de tous les systèmes d'IA en usage ou en développement : finalité, responsable, éditeur ou modèle, données utilisées, utilisateurs et personnes touchées, niveau de risque et état. On ne peut pas gouverner ce qu'on ne voit pas. Incluez les fonctions intégrées des éditeurs et les outils personnels utilisés pour le travail.

**Approche fondée sur le risque.** Le niveau de contrôle devrait correspondre au niveau de préjudice potentiel. Résumer des notes de réunion ne comporte pas le même risque que classer des candidatures à un emploi. Le règlement européen sur l'IA adopte une approche semblable, avec des catégories allant du risque minimal au risque inacceptable ; Wikipedia décrit les catégories. Vérifiez le texte actuel et votre propre situation avec un conseiller juridique.

**Évaluation des risques pour l'IA.** Pour chaque usage, demandez : qui pourrait être lésé, et comment ; quelle est la probabilité et la gravité ; quelles sont les limites du système ; que se passe-t-il quand il se trompe ; et quelles sont les alternatives. Wikipedia décrit la gestion des risques en général. Consignez l'évaluation et la décision du responsable. Les analyses d'impact relatives à la vie privée, décrites sur Wikipedia, sont un outil apparenté pour les données personnelles.

**Normes et référentiels.** ISO/IEC 42001, publiée en 2023, spécifie les exigences d'un système de management de l'intelligence artificielle, de structure comparable à d'autres normes de systèmes de management ISO. Le National Institute of Standards and Technology (NIST) des États-Unis publie le AI Risk Management Framework, organisé autour de quatre fonctions : gouverner, cartographier, mesurer et gérer. Les deux sont des outils volontaires de structure et de vocabulaire partagé. Lisez les textes actuels auprès des éditeurs. Voir le Sujet 1.8 — Référentiels et normes de gestion des services.

**Droit et réglementation.** L'IA est soumise aux lois existantes, comme celles sur la protection des données, la protection des consommateurs, la discrimination, l'emploi et la propriété intellectuelle, ainsi qu'à de nouvelles règles propres à l'IA. Wikipedia décrit la réglementation de l'intelligence artificielle selon les juridictions, qui change vite. Les obligations dépendent de l'endroit où vous opérez et de ce que vous faites. Ce guide ne peut pas vous dire ce qui s'applique.

**Protection des données et vie privée.** Les systèmes d'IA traitent souvent des données personnelles. Des lois comme le Règlement général sur la protection des données (RGPD) dans l'Union européenne fixent des règles sur la base légale, la finalité, la minimisation, les droits des personnes et, dans certains cas, des limites aux décisions automatisées. Wikipedia décrit le RGPD et la vie privée. Impliquez votre responsable de la vie privée ou votre conseiller juridique et consignez où vont les données, combien de temps elles sont conservées et si elles entraînent un modèle.

**Biais et équité.** Une IA entraînée sur des données passées peut reproduire des motifs injustes, de sorte que certaines personnes obtiennent de moins bons résultats. Wikipedia décrit le biais algorithmique et l'équité en apprentissage automatique. Testez les différences de résultats entre groupes pertinents pour l'usage et examinez qui est touché, pas seulement la performance moyenne. Décidez de ce qui est acceptable avant le lancement.

**Transparence et explicabilité.** Les personnes touchées par un système d'IA devraient savoir qu'il est employé et, pour les décisions importantes, pouvoir obtenir une explication et une voie de contestation. Wikipedia décrit la transparence algorithmique et l'IA explicable. Le bon niveau dépend des enjeux.

**Supervision humaine.** Une personne qui peut comprendre, questionner et supplanter le système, avec le temps et l'information pour le faire. Voir le Sujet 5.5 — IA agentique et supervision humaine. Une supervision qui n'existe que sur le papier est un constat courant.

**Sûreté et sécurité.** Les systèmes d'IA peuvent être attaqués (par exemple par injection d'invite), peuvent laisser fuir des données et peuvent se comporter de façon inattendue. Le red teaming, décrit sur Wikipedia, est la pratique qui consiste à tester un système en simulant un adversaire. Voir le Sujet 3.13 — Gestion de la sécurité de l'information.

**Propriété intellectuelle.** Des questions se posent sur le matériau utilisé pour entraîner les modèles, la propriété des sorties et les licences des modèles eux-mêmes. Wikipedia décrit la propriété intellectuelle et le droit d'auteur. Voir le Sujet 4.2 — Gestion des actifs logiciels. Prenez conseil sur la façon dont cela vous touche.

**Redevabilité et rôles.** La gouvernance exige des rôles clairs : un parrain exécutif, un organe qui fixe la politique et examine les usages à plus haut risque, des responsables pour chaque système et des spécialistes de la sécurité, de la vie privée et du droit. Wikipedia décrit la redevabilité. Évitez un comité qui approuve tout et bloque le travail ; réservez la revue aux usages à plus haut risque.

**Contrôles du cycle de vie.** Les contrôles s'appliquent tout au long de la vie d'un système : conception (finalité, données, risque), construction ou achat (diligence raisonnable, contrats, tests), déploiement (approbation, surveillance), exploitation (performance, dérive, incidents) et retrait. Voir le Sujet 3.14 — Gestion des fournisseurs.

**Enregistrements.** Conservez les preuves : l'inventaire, les évaluations de risques, les résultats de tests, les approbations, les enregistrements d'incidents et les journaux d'usage. Les enregistrements soutiennent les audits, l'apprentissage et les contestations des personnes touchées.

**Comment les angles s'articulent.** La gouvernance est la couche de contrôle autour de l'angle IA. La pratique agile suggère une revue rapide et proportionnée, avec des garde-fous que les équipes peuvent utiliser sans attendre. L'automatisation peut faire respecter des règles, comme bloquer l'envoi de données sensibles vers des outils non approuvés. L'analytique fournit les preuves de surveillance.

## Bonnes pratiques

1. **Construire d'abord l'inventaire.** Interrogez les équipes, vérifiez les paramètres des éditeurs et examinez les données réseau et de notes de frais. Consignez chaque système d'IA avec un responsable et une finalité.
2. **Classer par risque.** Définissez quelques niveaux de risque avec des exemples, comme faible (rédiger du texte interne), moyen (réponses destinées aux clients) et élevé (décisions touchant les droits ou la sécurité des personnes). Reliez le niveau de revue au niveau de risque.
3. **Nommer un responsable pour chaque usage.** Une personne redevable par système, qui signe l'évaluation des risques et répond de la performance et des incidents.
4. **Rédiger une politique courte et claire.** Énoncez quelles données peuvent aller vers quels outils, quels usages exigent une approbation, ce qui ne doit jamais être fait et à qui s'adresser. Tenez-la en quelques pages et publiez des exemples.
5. **Fournir des outils et des voies approuvés.** Si le personnel n'a aucun moyen approuvé d'utiliser l'IA, il en utilisera de non approuvés. Proposez des outils aux conditions adéquates et une voie rapide d'approbation.
6. **Évaluer avant et tester après.** Menez une évaluation des risques proportionnée avant la mise en service d'un usage et testez avec des cas réalistes, y compris des vérifications de biais et de détournement. Répétez après des changements importants.
7. **Vérifier les fournisseurs et leurs conditions.** Demandez aux fournisseurs comment ils utilisent vos données, comment ils testent, comment ils vous informent des changements de modèle et ce qu'il advient des données à la fin. Consignez les réponses. Voir le Sujet 3.14 — Gestion des fournisseurs.
8. **Définir la supervision humaine en pratique.** Pour chaque usage, dites qui examine quoi, avec quelle information et à quelle fréquence, et échantillonnez les revues.
9. **Surveiller et traiter les incidents.** Suivez les erreurs, les plaintes, la dérive et les événements de sécurité. Traitez les incidents d'IA comme les autres incidents et apprenez-en. Voir le Sujet 3.2 — Gestion des incidents.
10. **Réexaminer régulièrement et tenir des registres.** Revoyez l'inventaire et les niveaux de risque au moins chaque année et quand les lois ou les systèmes changent. Gardez les preuves en un seul endroit.

## Questions à discuter avec votre équipe

**Où utilisons-nous l'IA aujourd'hui, qui est responsable de chaque usage, et qu'est-ce qui pourrait mal tourner ?**
Construisez un premier inventaire. Attendez-vous à des lacunes, surtout pour les fonctions d'éditeurs et les outils personnels. Demandez ensuite de choisir les trois plus risqués et d'attribuer des responsables.

**Lesquels de nos usages touchent l'accès, l'argent, la santé ou l'emploi de personnes, et quelle revue reçoivent-ils ?**
Cherchez les usages à plus haut risque. Attendez-vous à de l'incertitude sur ce qui compte. Demandez ensuite d'associer les conseillers juridiques et de la vie privée à la classification.

**Quelles données le personnel met-il dans les outils d'IA, et connaît-il les règles ?**
Interrogez de façon anonyme si nécessaire. Attendez-vous à des surprises. Demandez ensuite de convenir d'une règle claire avec des exemples et de fournir une alternative approuvée.

**Que montrerions-nous à un régulateur ou à un client qui demanderait comment nous maîtrisons notre IA ?**
Rassemblez ce qui existe. Attendez-vous à un dossier mince. Demandez ensuite de choisir trois documents à produire : inventaire, politique et une évaluation des risques.

**Comment testons-nous les résultats injustes, et quels groupes devrions-nous examiner ?**
Pensez aux personnes touchées par chaque usage. Attendez-vous à ce que personne n'ait testé. Demandez ensuite de choisir un usage et de concevoir une comparaison simple entre groupes, avec conseil.

**Qui peut dire non à un usage de l'IA, et que se passe-t-il quand il le fait ?**
Une gouvernance sans pouvoir d'arrêter est décorative. Attendez-vous à des réponses floues. Demandez ensuite de nommer le décideur pour les usages à plus haut risque et un niveau de service pour les revues.

## En pratique : un exemple de gestion des services

Une agence nationale de sécurité sociale utilise l'IA à plusieurs endroits : un agent virtuel d'un éditeur sur son site public, un outil qui résume les notes de dossiers pour les gestionnaires, un assistant de développement utilisé par son personnel informatique et un essai qui signale d'éventuelles erreurs dans les demandes de prestations pour examen. Aucun registre central n'existe, et le cabinet d'un ministre a demandé à l'agence comment elle maîtrise l'IA.

Le directeur des systèmes d'information demande au bureau de gestion des services de constituer un inventaire en six semaines. Il trouve onze usages, dont deux que personne au service informatique ne connaissait : une fonction de synthèse de texte qu'un éditeur avait activée dans le système de gestion des dossiers, et un outil de transcription utilisé par un bureau régional sur des comptes personnels. L'équipe classe les usages par risque avec le responsable de la vie privée et le service juridique. L'essai de signalement des demandes est classé à haut risque, puisque sa sortie pourrait conduire à une action contre une personne ; le résumé des notes de dossiers est de risque moyen ; l'assistant de développement est de risque faible, bien qu'il soulève des questions de licence.

Pour chaque usage, un responsable est nommé. Pour l'essai des demandes, le responsable commande une évaluation des risques, y compris une comparaison des taux de signalement entre groupes et une règle selon laquelle personne ne se voit jamais refuser une prestation sur la seule sortie de l'outil. L'outil de transcription est arrêté jusqu'à ce qu'une alternative approuvée soit trouvée ; le bureau régional se voit proposer un outil approuvé par l'éditeur sous un contrat aux conditions de protection des données. Une politique de quatre pages fixe des règles sur les données et les approbations, et une courte voie de revue est promise sous dix jours ouvrés pour les usages de risque moyen.

Ce qui change : l'agence peut répondre au ministère avec un inventaire, une politique et une évaluation des risques pour son usage le plus risqué. Ce qui reste difficile : les fonctions d'éditeurs activées par défaut continuent d'apparaître, et l'agence n'a aucun moyen automatique de les découvrir ; la comparaison entre groupes est limitée par des données que l'agence n'a peut-être pas le droit de détenir ; et la promesse de dix jours de la voie de revue met à rude épreuve une petite équipe. Le bureau prévoit une revue trimestrielle des fonctions d'éditeurs et une demande de conseil juridique sur les tests.

## Quatre perspectives

### Équipes produit et de livraison

Enregistrez vos usages de l'IA, évaluez tôt le risque, testez avec des cas réalistes et adverses et consignez ce que le système peut faire. Prévoyez une voie pour que les gens contestent les résultats et pour que vous puissiez l'arrêter.

### Équipes de service et d'exploitation

Surveillez les systèmes d'IA en production, traitez les incidents et signalez les erreurs et les plaintes. Suivez les règles sur les données et signalez aux responsables les nouvelles fonctions d'IA qui apparaissent dans vos outils.

### Direction et gouvernance

Parrainez le programme, nommez les droits de décision et financez le travail. Demandez l'inventaire, les niveaux de risque et les preuves de tests. N'externalisez pas la redevabilité aux éditeurs ou aux comités.

### Clients et utilisateurs

On devrait vous dire quand l'IA est utilisée d'une manière qui vous importe, et vous devriez pouvoir joindre une personne et contester les décisions. Demandez comment vos données sont utilisées et signalez les résultats qui vous semblent faux ou injustes.

## Agilité, IA, automatisation et analytique

### Agilité

Proposez une revue rapide et proportionnée avec des garde-fous que les équipes peuvent suivre, comme des outils approuvés et une courte liste de contrôle pour les usages à faible risque. Faites évoluer la politique avec les équipes. Attention : une revue lente et lourde pousse les équipes à la contourner ; gardez la voie à faible risque rapide.

### IA

L'IA peut aider à rédiger des politiques, à lire les conditions des éditeurs et à préparer des évaluations de risques, sous relecture juridique et humaine. Nommez aussi un responsable pour cet usage. Attention : un résumé d'une loi ou d'un contrat par l'IA peut être faux ; ne vous en servez jamais comme base d'une décision de conformité. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez les flux d'inventaire, les règles de prévention des fuites de données, les approbations des usages à faible risque et la journalisation, avec examen des exceptions. Attention : un blocage automatique peut pousser le travail vers des appareils personnels ; associez-le à des alternatives approuvées. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Suivez la part des usages de l'IA avec responsables et évaluations, les incidents, les plaintes, les résultats de tests et le délai de revue. Attention : compter les évaluations terminées peut récompenser la paperasse ; vérifiez un échantillon pour la qualité et pour savoir si les contrôles fonctionnent. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Pas d'inventaire.** Les usages se multiplient sans être vus. Construisez et actualisez l'inventaire.
- **Une revue unique pour tous.** Tout est bloqué ou rien n'est examiné. Adaptez la revue au risque.
- **Une politique que personne ne peut suivre.** Le personnel l'ignore. Écrivez des règles courtes avec des exemples et fournissez des outils approuvés.
- **La gouvernance comme paperasse.** Des documents existent et les contrôles non. Testez que les contrôles fonctionnent.
- **Faire confiance aux affirmations des éditeurs.** Conditions et comportement ne sont pas vérifiés. Demandez, testez et consignez.
- **Ignorer les personnes touchées.** Biais et préjudice passent inaperçus. Testez les résultats entre groupes et offrez un moyen de contester.
- **Croire que l'IA peut fournir un avis juridique.** De mauvais résumés pilotent des décisions. Utilisez des conseillers qualifiés.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Inventaire et responsabilité | Usages inconnus | Principaux usages listés | Inventaire avec responsables et niveaux de risque | Inventaire examiné et vérifié par la découverte | Inventaire intégré au catalogue, aux achats et aux contrôles |
| Risque et tests | Au cas par cas | Quelques évaluations | Évaluation et tests proportionnés avant le lancement | Résultats surveillés et exploités | Assurance continue entre systèmes et fournisseurs |
| Politique et données | Aucune | Orientations provisoires | Politique claire, outils approuvés et règles sur les données | Conformité surveillée et auditée | Règles appliquées par l'outillage et adaptées au changement |
| Supervision et redevabilité | Floues | Parrain nommé | Rôles, voie de revue et supervision humaine définis | Qualité de la supervision échantillonnée | Gouvernance coordonnée dans l'entreprise et chez les partenaires |

## Liste de contrôle

- [ ] Nous tenons un inventaire de l'IA avec responsables et finalités.
- [ ] Chaque usage a un niveau de risque, avec une revue proportionnée.
- [ ] Une courte politique couvre les données, les approbations et les usages interdits.
- [ ] Des outils approuvés et une voie de revue rapide existent.
- [ ] Les usages à plus haut risque ont une évaluation des risques consignée et des tests, biais compris.
- [ ] Les conditions des fournisseurs sur les données, les tests et les changements de modèle sont consignées.
- [ ] La supervision humaine est définie et échantillonnée.
- [ ] Nous avons interrogé les conseillers juridiques et de la vie privée sur nos obligations.

## Invites d'IA

**Rédiger une entrée d'inventaire à partir de notes.**

```text
Here are notes on an AI use: [paste].
Draft an inventory entry with: purpose, owner (only if stated), vendor or model (only if stated), data used, people affected, decisions it influences, and proposed risk level with the reasons. Mark each item not in the notes as [missing]. Do not state legal obligations.
List what you are unsure of.
```

**Préparer des questions pour un fournisseur.**

```text
We are considering an AI product from a vendor for [use]. What we know of it: [paste].
Write 20 questions for the vendor about data use and retention, training on our data, testing for accuracy and bias, security, model changes, incident notification, and exit. Do not assume answers.
List what you are unsure of.
```

**Structurer une évaluation des risques pour revue.**

```text
AI use: [describe]. People affected: [list]. Decisions influenced: [list]. Current controls: [list].
Draft a risk assessment table with: harm, who is affected, likelihood and severity (marked as my estimate to be confirmed), existing controls, further controls to consider, and questions for the owner. Do not give legal conclusions.
List what you are unsure of.
```

## Compétences d'IA

- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques liés à l'IA, les responsables et les décisions.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md) : à utiliser pour documenter la finalité, les données, la performance et les limites d'un modèle.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md) : à utiliser pour formuler les questions de vie privée à votre conseiller juridique.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md) : à utiliser pour préparer les preuves et les questions d'un audit.
- [data-governance](../../../../skills/data-governance/SKILL.md) : à utiliser pour fixer la responsabilité et les règles des données qu'utilise l'IA.

## Sources principales

- NIST, AI Risk Management Framework : un référentiel volontaire très utilisé pour gérer les risques de l'IA.
- ISO/IEC 42001 (la norme elle-même) : exigences d'un système de management de l'IA ; lisez l'édition actuelle auprès de l'éditeur.
- Le texte du règlement de l'Union européenne sur l'intelligence artificielle et les orientations de vos propres régulateurs : sources de référence sur les obligations légales.
- Wikipedia, « Regulation of artificial intelligence » et « Ethics of artificial intelligence » : des aperçus du paysage.

## Références

1. Regulation of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence
2. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
3. Ethics of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence
4. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
5. Fairness (machine learning) — Wikipedia — https://en.wikipedia.org/wiki/Fairness_(machine_learning)
6. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
7. Privacy impact assessment — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
8. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
9. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
10. Red team — Wikipedia — https://en.wikipedia.org/wiki/Red_team
11. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
