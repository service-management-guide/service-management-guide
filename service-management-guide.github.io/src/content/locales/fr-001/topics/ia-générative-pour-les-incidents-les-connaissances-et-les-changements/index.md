# IA générative pour les incidents, les connaissances et les changements

**L'IA générative peut résumer des incidents, rédiger des articles de connaissances et des revues post-incident, et aider à évaluer des changements ; elle fait gagner le plus de temps sur les premiers brouillons et le moins sur les faits, donc utilisez-la pour écrire et lire, vérifiez chaque affirmation par rapport à l'enregistrement et gardez une personne nommée redevable de ce qui est envoyé ou approuvé.**

## Pourquoi c'est important

Une grande partie du travail d'exploitation des services consiste à écrire et à lire. Pendant un incident, quelqu'un rédige des points d'information pendant que d'autres lisent les journaux de conversation. Après, quelqu'un écrit une chronologie et une revue. Un article de connaissances commence comme une note de résolution de ticket qu'il faut transformer en quelque chose de lisible. Une demande de changement a besoin d'une description, d'une évaluation du risque et d'un plan. Ces tâches prennent du temps, sont répétitives et sont souvent faites tard et mal parce que tout le monde est occupé.

L'IA générative convient bien à ce genre de travail. Les grands modèles de langage peuvent lire un long fil et produire un résumé en quelques secondes. Ils peuvent transformer des notes brutes en un brouillon propre et proposer une structure pour une revue. Bien utilisés, ils libèrent des personnes qualifiées pour le jugement et la conversation. Mal utilisés, ils produisent un texte assuré et fluide qui est faux : une chronologie aux heures inventées, une cause racine que personne n'a trouvée, une étape de runbook qui n'existe pas.

La différence tient à la manière dont le travail est organisé. Donnez au modèle l'enregistrement réel, demandez-lui de n'utiliser que cela, obligez-le à montrer ses sources et faites vérifier par une personne avant que rien ne soit partagé. Ce sujet donne des modèles pratiques pour trois domaines : les incidents, les connaissances et les changements. Il s'appuie sur les idées générales du Sujet 5.1 — L'IA dans la gestion des services et se rattache à la gestion des incidents (Sujet 3.2 — Gestion des incidents), à la gestion des problèmes (Sujet 3.3 — Gestion des problèmes), à la gestion des connaissances (Sujet 3.9 — Gestion des connaissances) et à l'habilitation des changements (Sujet 3.4 — Habilitation des changements). Les questions de gouvernance figurent au Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

## Concepts clés

**IA générative.** Des systèmes qui produisent du contenu nouveau, comme du texte et du code, à partir d'invites. Wikipedia décrit l'IA générative et les grands modèles de langage. Pour le travail de service, le texte est la sortie principale : résumés, brouillons, explications et notes structurées.

**Hallucination.** Une sortie fluide mais non étayée ou fausse. Wikipedia décrit l'hallucination en IA. C'est une propriété du fonctionnement de ces modèles, non un bogue rare. Le risque est le plus élevé quand on demande au modèle des faits qu'on ne lui a pas donnés : une heure exacte, une cause, un numéro de politique, une option d'API.

**Ancrage.** Donner au modèle le matériau source et lui demander de ne répondre qu'à partir de celui-ci. La génération augmentée par récupération, décrite sur Wikipedia, trouve les documents pertinents et les fournit. Pour les incidents, la source est la chronologie, la conversation et les données de surveillance ; pour les connaissances, le ticket et les articles existants ; pour les changements, la fiche de changement et des changements passés semblables. L'ancrage réduit les erreurs mais ne les élimine pas.

**Fenêtre de contexte.** La quantité de texte qu'un modèle peut considérer à la fois. Wikipedia décrit la fenêtre de contexte. De longues conversations d'incident peuvent la dépasser ; les longues entrées sont donc résumées par parties. Vérifiez si du matériau important a été perdu.

**Synthèse.** Réduire un long texte à ses points principaux. Wikipedia décrit la synthèse automatique. Les résumés perdent du détail par conception, et ils peuvent le déformer. Ils sont à utiliser comme un guide vers l'original, avec le moyen de le vérifier.

**Des brouillons, non des décisions.** L'usage le plus sûr est de produire un premier brouillon qu'une personne modifie et assume. Le nom de la personne figure sur le résultat, et elle en est redevable. Cela laisse le jugement aux humains et emploie le modèle pour la partie mécanique.

**Invite et instruction.** Le texte donné au modèle. Des instructions claires, avec le rôle, la tâche, les sources, le format et ce qu'il faut faire quand une information manque, améliorent les résultats. Voir le Sujet 5.7 — Compétences et invites d'IA.

**Confidentialité.** Les conversations d'incident et les tickets contiennent souvent des secrets, des données personnelles et des détails de sécurité. L'endroit où va le texte compte : un modèle hébergé par votre organisation, un service d'éditeur sous contrat ou un outil public aux conditions inconnues. Décidez ce qui peut aller où. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

**Injection d'invite.** Un texte dans le matériau que vous donnez au modèle, comme le corps d'un ticket ou une ligne de journal, peut contenir des instructions qui tentent de changer son comportement. Wikipedia décrit l'injection d'invite. Traitez toutes les entrées comme non fiables et ne laissez pas un modèle doté de pouvoirs d'agir lire du contenu de sources inconnues.

**Biais d'automatisation.** La tendance à faire confiance aux suggestions automatisées, surtout quand on est fatigué ou occupé. Wikipedia décrit le biais d'automatisation. Pendant un incident, une suggestion fluide peut envoyer les intervenants sur la mauvaise piste. Traitez la sortie de l'IA comme une hypothèse.

**Incidents.** Les tâches utiles comprennent résumer un fil pour un nouvel intervenant, rédiger un point d'information à relire, extraire des événements horodatés de l'enregistrement pour en faire une chronologie, retrouver des incidents passés semblables et proposer des questions pour la revue. Les tâches risquées comprennent énoncer une cause racine comme un fait et envoyer un point d'information aux clients sans relecture.

**Connaissances.** Les tâches utiles comprennent transformer un ticket résolu en brouillon d'article, réécrire un article en langage clair, suggérer des titres et des étiquettes et trouver des doublons. Les tâches risquées comprennent publier des brouillons sans vérification technique et compter sur le modèle pour connaître la bonne correction.

**Changements.** Les tâches utiles comprennent vérifier qu'une description de changement n'omet rien, résumer une grosse demande de fusion, suggérer des cas de test et lister des facteurs de risque d'après des changements passés semblables. Les tâches risquées comprennent approuver un changement ou évaluer son risque comme « faible » sur la seule parole du modèle.

**Code et scripts.** Les modèles peuvent rédiger des scripts, des requêtes et de la configuration. Wikipedia décrit la génération de code dans un sens plus large. Le code généré peut contenir des erreurs, des failles de sécurité ou des questions de licence. Traitez-le comme du code non fiable : relisez-le, testez-le et faites-le passer par le pipeline. Voir le Sujet 3.4 — Habilitation des changements et le Sujet 4.2 — Gestion des actifs logiciels.

**Enregistrements et audit.** Gardez une trace de la manière dont l'IA a été utilisée : l'invite, les sources données, la sortie, qui l'a relue et ce qui a changé. Wikipedia décrit les pistes d'audit. Cela soutient l'apprentissage et la redevabilité.

**Comment les angles s'articulent.** L'IA générative est l'une des formes les plus visibles de l'angle IA. La pratique agile suggère de courts essais avec les retours de ceux qui font le travail. L'automatisation peut verser les brouillons dans les outils, avec des barrières de revue. L'analytique montre quels usages font gagner du temps et lesquels causent des reprises.

## Bonnes pratiques

1. **Lui donner l'enregistrement et lui dire de n'utiliser que cela.** Collez ou récupérez la chronologie, le ticket ou le changement réels et demandez au modèle de n'utiliser que le texte fourni. Dites-lui d'écrire « non indiqué » quand une information manque.
2. **Demander des citations et des références.** Faites citer au modèle les lignes ou articles qu'il a utilisés, pour qu'une personne puisse vérifier chaque affirmation rapidement.
3. **Séparer les faits de l'inférence.** Demandez d'abord les faits tirés de l'enregistrement, puis des hypothèses clairement étiquetées. Ne laissez pas les hypothèses apparaître comme des constats.
4. **Garder un responsable humain.** La personne qui envoie le point d'information, publie l'article ou approuve le changement est responsable du contenu, quoi que le modèle ait rédigé. Rendez-le explicite dans le processus.
5. **Ne pas envoyer à l'extérieur de sortie non relue.** Les points d'information aux clients, aux régulateurs ou au public exigent une relecture et une approbation humaines. Les brouillons internes sont moins risqués mais exigent aussi une vérification.
6. **Protéger les données.** Utilisez des outils approuvés pour la sensibilité du contenu. Retirez secrets et données personnelles lorsque vous le pouvez, et ne collez jamais d'identifiants.
7. **Vérifier chiffres, noms et heures.** C'est là que l'invention apparaît le plus. Comparez chaque chiffre du brouillon à la source.
8. **Tester avec des cas réels.** Appliquez l'approche à des incidents et des tickets passés dont vous connaissez la vérité et notez où elle échoue. Partagez les constats et mettez à jour vos instructions.
9. **Journaliser l'usage.** Consignez que l'IA a aidé, avec les sources et le relecteur. Suivez les corrections pour apprendre quelles tâches lui conviennent.
10. **Réviser et retirer.** Examinez quels usages font gagner du temps et lesquels causent des reprises. Arrêtez ceux qui n'aident pas.

## Questions à discuter avec votre équipe

**Quelles tâches d'écriture et de lecture, dans notre travail sur les incidents et les changements, prennent le plus de temps, et lesquelles sont à faible risque ?**
Dressez une liste. Attendez-vous aux chronologies, points d'information, brouillons de revue et descriptions de changement. Triez par risque. Demandez ensuite de choisir une tâche à faible risque à essayer avec l'IA.

**Que faudrait-il vérifier dans un résumé d'incident rédigé par l'IA avant de lui faire confiance ?**
Pensez aux heures, aux causes et à l'impact. Attendez-vous à un accord pour dire que les heures et les causes demandent vérification. Demandez ensuite de rédiger une courte liste de contrôle.

**Quelles informations ne doivent jamais aller dans un outil d'IA, et comment rendre cela facile à suivre ?**
Listez les secrets, les données personnelles et les détails de sécurité. Attendez-vous à de la confusion sur ce qui compte. Demandez ensuite de convenir d'une règle simple et d'un outil sûr pour le reste.

**Comment saurions-nous si des résumés ou brouillons d'IA dégradaient notre base de connaissances ?**
Pensez aux étapes fausses et aux erreurs répétées. Attendez-vous à « nous ne le saurions pas ». Demandez ensuite d'échantillonner chaque mois des articles assistés par l'IA pour en vérifier l'exactitude.

**Quand laisserions-nous l'IA suggérer le risque d'un changement, et qui décide ?**
Discutez. Attendez-vous à de la prudence sur l'approbation et à de l'aisance pour des invites sur les informations manquantes. Demandez ensuite de convenir que l'IA peut suggérer des questions et des changements passés semblables, et qu'une personne évalue le risque.

**Qui, dans notre équipe, sait bien vérifier la sortie de l'IA, et comment répandre cette compétence ?**
Vérifier est une compétence. Attendez-vous à quelques personnes sûres d'elles. Demandez ensuite de mener un court exercice où l'équipe vérifie ensemble un brouillon défectueux.

## En pratique : un exemple de gestion des services

L'équipe des technologies d'exploitation d'une compagnie nationale de chemins de fer assure le support de systèmes de signalisation. Après chaque incident majeur, un ingénieur passe une demi-journée à rédiger une revue à partir des journaux de conversation, des graphiques de surveillance et des notes de tickets. Les revues arrivent tard, et les plus récentes étaient minces.

Le responsable de l'équipe essaie un assistant d'IA générative, hébergé sous le contrat de la compagnie avec un éditeur qui ne conserve pas les entrées et ne s'en sert pas pour l'entraînement, pour le premier brouillon des revues. Pour chaque incident, l'ingénieur exporte le journal de conversation et l'historique du ticket, retire les noms du personnel et donne à l'assistant ces instructions : n'utiliser que le texte fourni ; produire une chronologie dont chaque entrée cite la ligne source ; lister l'impact tel qu'énoncé ; lister ce qui a aidé et ce qui a ralenti la réponse ; marquer comme « non indiqué » tout ce qui n'est pas dans le texte ; et placer les hypothèses dans une section distincte, étiquetée comme telle.

Au premier test, sur un incident passé, la chronologie du brouillon est exacte, sauf qu'elle donne une heure de redémarrage de 02 h 15 alors que la conversation dit « vers et quart, je crois » et que le ticket dit 02 h 22 ; l'ingénieur corrige. Le brouillon liste aussi comme cause « un commutateur réseau défectueux », qui apparaît dans la conversation comme une supposition ensuite réfutée ; la revue l'avait déplacée vers les hypothèses, comme demandé, mais n'avait pas noté la réfutation. L'ingénieur corrige les deux et envoie le brouillon à l'équipe en deux heures au lieu de quatre.

Après dix incidents, l'équipe estime que les premiers brouillons prennent environ un tiers du temps. Elle ajoute une règle : l'ingénieur vérifie chaque heure et chaque cause par rapport à la source, et les revues consignent que l'IA a rédigé la première version. Elle décide aussi de ne pas encore utiliser l'IA pour évaluer le risque dans les fiches de changement.

Ce qui change : les revues arrivent sous un jour et comportent plus de détail sur ce qui a aidé. Ce qui reste difficile : les ingénieurs acceptent parfois la formulation du modèle sur des causes que les preuves étayent faiblement ; des détails confidentiels subsistent parfois dans les conversations exportées ; et un ingénieur craint que les compétences de rédaction s'estompent. Le responsable programme une séance trimestrielle où les ingénieurs écrivent une revue sans IA, et compare.

## Quatre perspectives

### Équipes produit et de livraison

Utilisez l'IA pour rédiger des descriptions de changement, des idées de tests et des notes de version à partir de vos propres enregistrements, et relisez-les. Traitez le code généré comme non fiable : testez-le et analysez-le comme tout autre changement.

### Équipes de service et d'exploitation

Utilisez l'IA pour résumer des fils et rédiger points d'information, revues et articles, avec les sources jointes. Vérifiez chaque heure, chaque nom et chaque cause, et assumez ce que vous publiez.

### Direction et gouvernance

Fixez des règles sur les données et les approbations, et financez des outils qui y répondent. Demandez des preuves du temps gagné et des erreurs repérées. N'acceptez pas la sortie de l'IA comme enregistrement des faits.

### Clients et utilisateurs

Vous devriez recevoir des points d'information qu'une personne a vérifiés. Si vous voyez une erreur dans ce que vous recevez, dites-le au fournisseur. Demandez comment l'IA est utilisée dans ce qu'on vous dit.

## Agilité, IA, automatisation et analytique

### Agilité

Essayez une tâche d'écriture à la fois avec ceux qui la font, recueillez les retours et améliorez les instructions. Gardez des revues courtes et fréquentes. Attention : ne laissez pas un brouillon plus rapide raccourcir la réflexion ; la valeur d'une revue tient à l'apprentissage.

### IA

Ancrez chaque usage dans l'enregistrement, montrez les sources et gardez une personne redevable. Testez sur des cas passés et consignez l'usage de l'IA. Attention : un texte fluide cache des preuves faibles ; demandez au modèle d'étiqueter sa confiance et ses sources, et vérifiez-les. Voir le Sujet 5.7 — Compétences et invites d'IA.

### Automatisation

Automatisez la tuyauterie : exporter l'enregistrement, retirer les secrets, appeler le modèle, joindre le brouillon au ticket et prévenir le relecteur. Gardez une barrière de revue avant publication. Attention : un pipeline qui publie automatiquement les brouillons propage les erreurs ; exigez une approbation. Voir le Sujet 6.2 — Automatisation et orchestration des flux de travail.

### Analytique

Suivez le temps pour produire les revues, les modifications apportées aux brouillons, les erreurs trouvées et l'usage par type de tâche. Attention : compter les brouillons produits récompense le volume, et le temps gagné est souvent estimé ; échantillonnez la qualité des documents finaux. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **Des faits de mémoire.** Le modèle invente heures et causes. Fournissez l'enregistrement et exigez des citations.
- **Des points d'information externes non relus.** De fausses informations atteignent les clients. Exigez une approbation humaine.
- **Des secrets dans les invites.** Des données sensibles fuient. Utilisez des outils approuvés et retirez les secrets.
- **Le tampon automatique.** Les relecteurs acceptent les brouillons sans vérifier. Fournissez une liste de contrôle et échantillonnez les revues.
- **Des entrées qui manipulent le modèle.** Un texte hostile change le comportement. Traitez les entrées comme non fiables.
- **Utiliser l'IA pour évaluer le risque.** Un « faible » fluide est cru. Utilisez l'IA pour poser des questions et laissez les gens évaluer le risque.
- **Érosion des compétences.** Les gens cessent d'écrire et de vérifier. Gardez la pratique et la qualité des revues.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Usage | Expériences individuelles | Conseils partagés | Modèles approuvés pour incidents, connaissances et changements | Modèles examinés d'après les résultats | Modèles intégrés aux outils avec gouvernance |
| Ancrage et vérification | Mémoire du modèle | Quelques sources affichées | Sources citées et faits vérifiés par rapport aux enregistrements | Erreurs suivies et réinjectées | Vérification en partie automatisée, avec validation humaine |
| Protection des données | Floue | Conscience | Outils approuvés et règles | Conformité surveillée | Contrôles intégrés aux outils et aux pipelines |
| Redevabilité | Floue | Informelle | Responsables nommés pour chaque sortie | Responsables et revues audités | Redevabilité intégrée entre services |

## Liste de contrôle

- [ ] Nous avons choisi quelques tâches d'écriture à faible risque pour l'IA générative.
- [ ] Nous donnons au modèle l'enregistrement et lui disons de n'utiliser que cela.
- [ ] Les sorties citent leurs sources et séparent les faits des hypothèses.
- [ ] Une personne nommée est responsable de chaque sortie et la relit avant qu'elle soit partagée.
- [ ] Nous utilisons des outils approuvés pour le contenu sensible et retirons les secrets.
- [ ] Nous vérifions heures, noms, chiffres et causes par rapport à la source.
- [ ] Nous consignons quand l'IA a aidé et qui a relu.
- [ ] Nous ne laissons pas l'IA approuver des changements ni énoncer seule des causes racines.

## Invites d'IA

**Construire une chronologie d'incident sourcée.**

```text
Below is the chat log and ticket history of an incident, with names removed: [paste].
Produce a timeline table with columns: time (exactly as written; write "not stated" if no time), event, and the quoted source line. Then list impact as stated in the text, and a separate section "Hypotheses mentioned" with who raised each and whether the text shows it was confirmed or ruled out. Do not add anything not in the text.
List what you are unsure of.
```

**Rédiger un article de connaissances à partir d'un ticket résolu.**

```text
Here is a resolved ticket with notes, personal data removed: [paste]. Here are existing articles on related topics: [paste titles and summaries].
Draft a new article with a title in plain words, symptom, steps, and how to check it worked. Use only the ticket. Mark missing information with [missing], and list existing articles that might duplicate this one.
List what you are unsure of.
```

**Vérifier une description de changement.**

```text
Here is a change description: [paste]. Our required items: [list].
List which required items are missing or unclear, list questions a reviewer should ask, and list any statements in the description that look inconsistent with each other. Do not rate the risk or recommend approval.
List what you are unsure of.
```

## Compétences d'IA

- [postmortem](../../../../skills/postmortem/SKILL.md) : à utiliser pour structurer les revues d'incidents que l'IA rédige et que des personnes assument.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md) : à utiliser pour écrire des instructions claires et ancrées.
- [runbook](../../../../skills/runbook/SKILL.md) : à utiliser pour transformer des procédures en runbooks vérifiés et testés.
- [release-notes](../../../../skills/release-notes/SKILL.md) : à utiliser pour rédiger des notes de version à relire.
- [change-request](../../../../skills/change-request/SKILL.md) : à utiliser pour définir ce que contient une bonne description de changement.

## Sources principales

- NIST, AI Risk Management Framework : une structure pour identifier et gérer les risques de l'usage de l'IA.
- OWASP, recommandations sur les risques des applications construites sur de grands modèles de langage (owasp.org) : des conseils communautaires sur l'injection d'invite et les risques apparentés.
- Wikipedia, « Generative AI » et « Hallucination (artificial intelligence) » : des aperçus de la technologie et de son principal mode d'échec.
- Wikipedia, « Automation bias » : pourquoi les gens font trop confiance aux suggestions automatisées.

## Références

1. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Automatic summarization — Wikipedia — https://en.wikipedia.org/wiki/Automatic_summarization
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
8. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
12. OWASP — OWASP Foundation — https://owasp.org
