# Gouvernance, risques et conformité

**La gouvernance fixe la direction et la responsabilité, la gestion des risques décide quoi faire face à l'incertitude, et la conformité montre que les obligations sont remplies ; en livraison continue, ces trois fonctions marchent mieux sous forme de garde-fous intégrés au travail, avec des propriétaires de risques qui décident, des pipelines qui produisent les preuves et des audits qui regardent la qualité de fonctionnement des contrôles, non le nombre de documents.**

## Pourquoi c'est important

Peu de mots en technologie provoquent un soupir aussi sûrement que « gouvernance ». Il évoque des comités, des formulaires et des approbations qui arrivent après la décision. Dans de nombreuses organisations, le soupir est mérité. La gouvernance est devenue une couche de paperasse au-dessus du travail, détenue par des gens qui ne le font pas, mesurée par des artefacts plutôt que par des résultats.

Pourtant le besoin est réel. Les organisations détiennent l'argent, les dossiers de santé et la confiance d'autrui. Régulateurs, clients et conseils d'administration demandent des preuves que tout cela est traité de façon responsable. Les services défaillent de manières qui nuisent aux gens, et quelqu'un doit en répondre. Sans gouvernance, les décisions sont prises par celui qui crie le plus fort, les risques sont acceptés par des gens qui ne savent pas qu'ils les ont acceptés, et la conformité se découvre pendant un audit.

La façon de concilier les deux est de changer l'aspect de la gouvernance. Au lieu de portes à la fin, elle offre des garde-fous au début : des règles claires sur ce qui est permis, intégrées aux outils pour que la voie sûre soit la voie facile. Au lieu d'une paperasse produite après coup, elle utilise des preuves produites par le travail lui-même, comme les enregistrements de pipeline. Au lieu d'une approbation unique pour tous les risques, elle adapte le niveau de revue au niveau de risque et confie les décisions à ceux qui les comprennent. Wikipedia décrit la gouvernance, les risques et la conformité (GRC) comme une approche intégrée de ces trois dimensions. Ce sujet explique les idées et leur application en gestion des services, y compris en contexte réglementé. Il ne donne aucun conseil juridique, et les règles diffèrent selon les pays et les secteurs. Il s'appuie sur l'habilitation des changements (Sujet 3.4 — Habilitation des changements), les pipelines (Sujet 6.4 — Pipelines et changements automatisés), la sécurité de l'information (Sujet 3.13 — Gestion de la sécurité de l'information) et la gouvernance de l'IA (Sujet 5.6 — Gouvernance, risques et conformité de l'IA).

## Concepts clés

**Gouvernance.** Le système par lequel une organisation est dirigée et contrôlée. Wikipedia décrit la gouvernance d'entreprise comme les mécanismes, processus et relations par lesquels les organisations sont contrôlées et exploitées. Dans ITIL 4, la gouvernance est un composant du système de valeur des services qui dirige, évalue et surveille ; voir le Sujet 1.4 — Le système de valeur des services. Elle existe à plusieurs niveaux, du conseil d'administration à l'équipe.

**Risque.** L'effet de l'incertitude sur les objectifs. La gestion des risques identifie, évalue, traite et surveille les risques. Wikipedia décrit la gestion des risques et des orientations internationales comme ISO 31000. Un risque est une possibilité, non une certitude, et a une probabilité et un impact.

**Registre des risques.** Un enregistrement des risques, de leurs propriétaires, de leurs évaluations, de leurs traitements et de leur statut. Wikipedia décrit les registres des risques. Voir la compétence risk-register de ce guide. Un registre est un outil de travail ; s'il n'est mis à jour qu'avant les audits, c'est une décoration.

**Appétit pour le risque et tolérance.** La quantité de risque que l'organisation est prête à accepter dans la poursuite de ses buts, fixée par ceux qui gouvernent. Wikipedia décrit l'appétit pour le risque. Il dit aux équipes jusqu'où elles peuvent aller sans escalade. Sans lui, chaque décision est soit trop prudente, soit un pari inaperçu.

**Traitement du risque.** Quatre réponses de base : réduire le risque par des contrôles, l'accepter en connaissance de cause, le transférer, par exemple par une assurance ou un contrat, ou l'éviter en ne menant pas l'activité. Consignez le choix et qui l'a fait. L'acceptation par défaut n'est pas une décision.

**Conformité.** Remplir les obligations issues de lois, de réglementations, de contrats, de normes et de politiques internes. Wikipedia décrit la conformité réglementaire. Des exemples : les lois de protection des données comme le Règlement général sur la protection des données, les lois d'information financière comme la loi Sarbanes–Oxley, les règles de confidentialité de la santé comme HIPAA aux États-Unis, les exigences de l'industrie des paiements comme PCI DSS et, dans l'Union européenne, les règles de résilience pour les entités financières (le règlement sur la résilience opérationnelle numérique, DORA) et pour les services essentiels (la directive NIS2), que Wikipedia décrit toutes. Les obligations diffèrent selon le lieu et le secteur. Identifiez les vôtres avec un avis spécialisé.

**Contrôles.** Des mesures qui réduisent le risque ou assurent la conformité : préventifs (empêcher un problème), de détection (le trouver) et correctifs (le réparer). Ils peuvent être techniques, comme une restriction d'accès, procéduraux, comme une revue, ou organisationnels, comme la séparation des tâches, que décrit Wikipedia. Des référentiels de contrôle interne, comme celui du Committee of Sponsoring Organizations (COSO), les organisent ; Wikipedia décrit le contrôle interne. Un contrôle qui n'est pas testé peut ne pas fonctionner.

**Garde-fous plutôt que portes.** Une porte arrête le travail jusqu'à ce que quelqu'un approuve. Un garde-fou est une limite qui garde le travail sûr sans l'arrêter, comme un contrôle de politique dans le pipeline qui bloque un compartiment de stockage public. Les garde-fous sont rapides et cohérents ; les portes sont lentes et variables. N'utilisez des portes que là où un jugement humain sur le risque est nécessaire. Voir le Sujet 3.4 — Habilitation des changements.

**Politique.** Un énoncé d'intention et de règles. Wikipedia décrit la politique en général. Les bonnes politiques sont courtes, disent ce qui est exigé et pourquoi, et sont écrites pour que les gens puissent les suivre. Une politique écrite sous forme de code, vérifiée automatiquement, relie la règle à son application.

**Preuves.** Des enregistrements qui montrent qu'un contrôle a fonctionné : journaux, revues, résultats de tests, approbations. Wikipedia décrit les pistes d'audit et les preuves. Les preuves produites automatiquement par le travail, comme l'enregistrement de chaque exécution de pipeline, sont moins chères et plus fiables que celles réunies pour un audit. Voir le Sujet 6.4 — Pipelines et changements automatisés.

**Audit et assurance.** L'examen indépendant de ce que les contrôles et les processus fonctionnent. Wikipedia décrit l'audit. L'audit interne, l'audit externe et les audits de clients ou de régulateurs diffèrent par leur finalité. Wikipedia décrit le modèle des « trois lignes », où la direction détient le risque et le contrôle (première ligne), les fonctions de risque et de conformité supervisent (deuxième ligne) et l'audit interne fournit une assurance indépendante (troisième ligne). Les rapports d'attestation, comme les rapports System and Organization Controls (SOC) que décrit Wikipedia, donnent aux clients une assurance sur les contrôles d'un fournisseur.

**Opérer dans des secteurs réglementés.** Banques, hôpitaux, assureurs et organismes publics font face à des exigences détaillées et à une supervision. La livraison continue est possible dans ces contextes quand les contrôles sont rattachés aux exigences et que les preuves sont générées de façon fiable. Associez le régulateur tôt et expliquez comment le pipeline répond à l'intention de chaque contrôle.

**Risque lié aux tiers et à la chaîne d'approvisionnement.** Les obligations s'étendent aux fournisseurs et aux logiciels que vous utilisez. Voir le Sujet 3.14 — Gestion des fournisseurs et le Sujet 4.2 — Gestion des actifs logiciels.

**Culture du risque.** La manière dont les gens pensent le risque et en parlent. Une culture où l'on peut signaler des problèmes sans reproche, et où les dirigeants acceptent les mauvaises nouvelles, trouve les risques tôt. Voir le Sujet 8.3 — Changement organisationnel et adoption.

**Risques de l'IA et de l'automatisation.** La technologie nouvelle ajoute des risques, comme une automatisation qui agit à grande échelle et des systèmes d'IA qui produisent des sorties biaisées ou fausses. Ils ont besoin de propriétaires, d'évaluations et de contrôles dans le même registre que les autres risques. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA et le Sujet 6.1 — Stratégie d'automatisation.

**Comment les angles s'articulent.** La GRC est la couche de contrôle autour des autres angles. La pratique agile suggère une gouvernance proportionnée, rapide et collaborative, avec des spécialistes du risque et de la conformité au sein des équipes. L'automatisation fournit garde-fous et preuves. L'analytique surveille l'efficacité des contrôles. L'IA est elle-même un objet de gouvernance.

## Bonnes pratiques

1. **Fixer clairement la direction et l'appétit.** Énoncez ce que l'organisation fera et ne fera pas, et combien de risque elle accepte dans les domaines clés. Rendez ces énoncés courts et disponibles pour les équipes.
2. **Confier les décisions de risque aux propriétaires de risques.** Nommez un propriétaire pour chaque risque important, qui le comprend et a l'autorité. Escaladez selon des seuils définis, non par habitude.
3. **Tenir un registre des risques vivant.** Consignez les risques avec propriétaires, cotations, traitements et dates de revue, et mettez-le à jour quand les choses changent. Reliez les risques aux services et aux contrôles.
4. **Adapter la revue au risque.** Utilisez des contrôles légers et automatisés pour les changements à faible risque et une revue humaine plus approfondie pour ceux à risque élevé. Publiez les critères.
5. **Intégrer les garde-fous aux outils.** Codez les règles sous forme de contrôles de politique dans le pipeline et les plateformes, pour que la voie sûre soit la voie facile. N'utilisez les portes qu'avec parcimonie.
6. **Générer les preuves à partir du travail.** Capturez automatiquement les enregistrements des revues, tests, approbations et déploiements, et stockez-les là où ceux qu'ils concernent ne peuvent pas les altérer.
7. **Rattacher les contrôles aux exigences une seule fois.** Tenez un seul ensemble de contrôles rattaché aux normes et lois qui vous concernent, au lieu de documents séparés pour chacune. Voir le Sujet 1.8 — Référentiels et normes de gestion des services.
8. **Tester que les contrôles fonctionnent.** Échantillonnez les enregistrements, menez des exercices et réexécutez les contrôles. Corrigez ceux qui ne fonctionnent pas et abandonnez ceux qui ajoutent du coût sans réduire le risque.
9. **Travailler tôt avec les auditeurs et les régulateurs.** Expliquez votre approche, demandez quelles preuves ils accepteront et invitez-les à voir le pipeline. Les surprises en audit coûtent cher.
10. **Bâtir une culture du signalement honnête.** Rendez sûr le fait de signaler risques, quasi-accidents et erreurs, et répondez par des actes. Suivez combien de problèmes sont trouvés par la première ligne elle-même.

## Questions à discuter avec votre équipe

**Lesquelles de nos étapes de gouvernance ont changé une décision l'an dernier, et lesquelles n'ont fait qu'ajouter du retard ?**
Demandez des preuves. Attendez-vous à ce que certaines étapes n'aient aucun effet consigné. Demandez ensuite d'en choisir une à automatiser ou à supprimer, avec l'accord du propriétaire du risque.

**Qui possède chacun de nos dix principaux risques, et quand l'a-t-il revu pour la dernière fois ?**
Regardez le registre. Attendez-vous à des lacunes et à des entrées périmées. Demandez ensuite d'attribuer des propriétaires et des dates de revue.

**Que l'auditeur accepterait-il comme preuve d'un contrôle, et nos outils pourraient-ils la produire automatiquement ?**
Demandez à l'auditeur. Attendez-vous à plus de souplesse que supposé. Demandez ensuite de choisir un contrôle et de générer sa preuve à partir du pipeline.

**Où acceptons-nous le risque par défaut, et qui serait surpris de l'apprendre ?**
Pensez aux vieux systèmes, aux vulnérabilités connues et aux correctifs différés. Attendez-vous à des exemples inconfortables. Demandez ensuite de consigner des décisions explicites pour les trois premiers.

**Quelles réglementations et quels contrats s'appliquent à nos services, et comment nos contrôles s'y rattachent-ils ?**
Listez-les avec les conseillers juridiques et de conformité. Attendez-vous à une cartographie incomplète. Demandez ensuite de construire un rattachement unique des contrôles pour un service.

**Comment gouvernons-nous l'IA et l'automatisation de la même manière que les autres risques, et où sommes-nous incohérents ?**
Comparez les registres et les revues. Attendez-vous à ce que l'IA soit à part. Demandez ensuite d'ajouter les usages de l'IA au registre principal.

## En pratique : un exemple de gestion des services

L'équipe de la plateforme de banque de détail d'une banque régionale veut livrer chaque jour. La fonction risques de la banque exige un processus de comité consultatif des changements pour tout changement en production, avec un formulaire, trois approbations et une réunion hebdomadaire. L'équipe de plateforme appelle cela du théâtre, et la fonction risques pointe deux incidents de l'an dernier causés par des changements non revus.

Le responsable du risque opérationnel et le responsable de la plateforme conviennent de rattacher les contrôles de changement de la banque à leurs finalités. Les contrôles existent pour garantir que les changements sont revus par une seconde personne compétente, testés, autorisés par un propriétaire responsable, traçables et réversibles. Le pipeline peut fournir la plupart de ces éléments : un second relecteur obligatoire, des tests automatisés, une autorisation consignée par le responsable produit pour les changements porteurs de risque, un enregistrement complet et un retour arrière automatique. Pour les changements au risque le plus élevé, comme ceux du calcul des paiements, la réunion hebdomadaire demeure, avec un groupe plus restreint.

Ils s'accordent sur un énoncé d'appétit pour le risque en matière de changement : les changements courants des canaux numériques sont à faible risque et couverts par les contrôles du pipeline ; les changements des systèmes du grand livre central sont à risque élevé et exigent une approbation humaine. Les preuves du pipeline vont dans un magasin immuable, et l'audit interne échantillonne 40 changements par trimestre. L'auditeur externe et le superviseur du régulateur sont informés de l'approche et se voient montrer les enregistrements du pipeline. Le superviseur demande un récapitulatif mensuel des exceptions et accepte de réexaminer le dispositif au bout de six mois.

Après deux trimestres, le taux d'échec des changements est inférieur à celui d'avant, le délai des changements courants passe de neuf jours à un, et l'audit trouve les preuves complètes pour 39 des 40 changements échantillonnés ; l'autre montre un enregistrement de relecteur manquant dû à une mauvaise configuration du pipeline, qui est corrigée. La fonction risques ajoute aussi les usages de l'IA de la banque, qui étaient hors du registre, avec propriétaires et évaluations.

Ce qui change : risques et ingénierie partagent une seule vue des contrôles, et la livraison quotidienne est autorisée pour la classe à faible risque. Ce qui reste difficile : les systèmes du grand livre central ne peuvent pas facilement exécuter de tests automatisés et gardent la réunion hebdomadaire ; la règle du second relecteur tend les petites équipes ; et les exigences du superviseur sur le format des preuves diffèrent de celles du pipeline, ce qui demande un travail de traduction. Le responsable des risques met en place une revue trimestrielle de l'énoncé d'appétit et demande des ressources pour les tests du grand livre central.

## Quatre perspectives

### Équipes produit et de livraison

Connaissez les risques et les obligations qui s'appliquent à votre service, intégrez des garde-fous à votre pipeline et générez des preuves en travaillant. Parlez tôt aux collègues du risque et de la conformité et associez-les à la conception.

### Équipes de service et d'exploitation

Exploitez les contrôles : revues, accès, surveillance et gestion des incidents. Consignez ce que vous faites, signalez les quasi-accidents et signalez les contrôles qui ne fonctionnent pas ou qui coûtent plus qu'ils ne rapportent.

### Direction et gouvernance

Fixez la direction et l'appétit, nommez les propriétaires de risques et financez les contrôles qui fonctionnent. Demandez des preuves et des résultats de tests, non des volumes de documents. Rendez sûr le fait d'annoncer de mauvaises nouvelles.

### Clients et utilisateurs

Vous comptez sur les fournisseurs pour gérer les risques qui vous touchent. Demandez quelle assurance ils peuvent donner, comme des rapports d'audit, et informez-les des exigences qui s'appliquent à vous.

## Agilité, IA, automatisation et analytique

### Agilité

Intégrez des spécialistes du risque et de la conformité aux équipes, revoyez les contrôles en cycles courts et améliorez-les avec les retours. Attention : ne confondez pas absence de paperasse et absence de contrôle ; montrez comment chaque contrôle est satisfait.

### IA

L'IA peut aider à rédiger des politiques, rattacher des contrôles aux exigences, résumer des constats d'audit et chercher des preuves, avec relecture juridique et humaine. Les usages de l'IA relèvent eux-mêmes du registre des risques. Attention : un résumé de réglementation par l'IA peut être faux ; ne vous y fiez jamais pour la conformité. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Automatisez les contrôles de politique, la capture des preuves, les revues d'accès et la surveillance des contrôles, avec les exceptions acheminées vers les propriétaires. Attention : un contrôle automatisé ne vérifie que ce pour quoi il a été construit ; testez-le et échantillonnez les résultats à la main. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Suivez les résultats des tests de contrôles, les exceptions, l'évolution des cotations de risque, les constats d'audit et le délai de clôture, ainsi que les incidents liés à des défaillances de contrôle. Attention : compter les contrôles ou les évaluations terminées récompense la paperasse ; mesurez l'efficacité et les résultats. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **La gouvernance comme portes et papier.** Du retard sans sécurité. Intégrez des garde-fous aux outils et générez les preuves automatiquement.
- **Acceptation du risque par défaut.** Personne n'a décidé. Consignez des décisions explicites avec des propriétaires.
- **Une seule revue pour tous les risques.** Les risques faibles attendent ; les risques élevés sont expédiés. Adaptez la revue au risque.
- **Des preuves réunies pour les audits.** Le coût et les erreurs augmentent. Capturez-les au fil du travail.
- **Des documents séparés par norme.** Duplication et dérive. Rattachez un seul ensemble de contrôles à de nombreuses exigences.
- **Des contrôles non testés.** Ils échouent en silence. Testez et échantillonnez.
- **La peur de signaler.** Les risques restent cachés. Répondez aux mauvaises nouvelles par des actes.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Direction et appétit | Non énoncés | Informels | Appétit et droits de décision écrits | Appétit examiné par rapport aux résultats | Appétit coordonné dans l'entreprise et avec les partenaires |
| Gestion des risques | Réactive | Un registre existe | Registre tenu à jour, avec propriétaires, relié aux services et aux contrôles | Risques examinés au regard des incidents et des tests | Risques gérés avec des données entre fournisseurs et IA |
| Contrôles et preuves | Manuels et par réunion | Un peu d'automatisation | Garde-fous dans les outils, preuves générées par le travail | Efficacité des contrôles testée et échantillonnée | Surveillance continue des contrôles avec supervision humaine |
| Assurance et culture | Surprises en audit | Préparé aux audits | Association précoce des auditeurs et des régulateurs | Constats suivis jusqu'à la clôture | Assurance intégrée à la livraison et à l'apprentissage |

## Liste de contrôle

- [ ] Nous avons un appétit pour le risque et des droits de décision écrits.
- [ ] Chaque risque important a un propriétaire et une date de revue.
- [ ] L'effort de revue correspond au risque, et les critères sont publiés.
- [ ] Les contrôles sont rattachés une seule fois aux normes et aux lois applicables.
- [ ] Des garde-fous sont intégrés aux pipelines et aux plateformes.
- [ ] Les preuves sont générées automatiquement et stockées en sécurité.
- [ ] Nous testons les contrôles et échantillonnons les enregistrements.
- [ ] Les risques de l'IA et de l'automatisation figurent dans le même registre.

## Invites d'IA

**Rattacher un contrôle à sa finalité et à ses preuves.**

```text
Here is a control as written: [paste]. Here is what our pipeline or tools record: [paste].
State the risk the control appears to address, based only on the text, list what evidence the tools would produce, and what the control requires that the evidence does not show. Do not judge whether it meets any regulation.
List what you are unsure of.
```

**Examiner la qualité d'un registre des risques.**

```text
Here is an extract from our risk register: [paste, sensitive details removed].
List entries without an owner, without a review date, with vague descriptions, or where treatment is "accept" without a stated decision-maker. Quote each. Do not rate the risks.
List what you are unsure of.
```

**Préparer les questions d'un auditeur.**

```text
The audit covers [area]. Here are our relevant controls and evidence: [paste].
List twelve questions an auditor might ask, grouped by control, and for each what evidence we would need to show. Mark questions where our material gives no basis for an answer. Do not state what the auditor will require.
List what you are unsure of.
```

## Compétences d'IA

- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques, leurs propriétaires et leurs traitements.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md) : à utiliser pour choisir des indicateurs d'alerte précoce.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md) : à utiliser pour tester les contrôles et les preuves.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md) : à utiliser pour préparer questions et preuves pour la revue juridique et l'audit.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md) : à utiliser pour clarifier les droits de décision et la responsabilité.

## Sources principales

- ISO 31000, lignes directrices sur le management du risque : l'orientation internationale sur la gestion des risques ; lisez l'édition en vigueur auprès de l'éditeur.
- COSO, *Internal Control — Integrated Framework* : un référentiel très utilisé de contrôle interne.
- Gene Kim et autres, *The DevOps Handbook* : chapitres sur l'intégration de la sécurité, de la conformité et du contrôle des changements dans le pipeline.
- Wikipedia, « Governance, risk, and compliance » et « Risk management » : des aperçus des idées.

## Références

1. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
2. Corporate governance — Wikipedia — https://en.wikipedia.org/wiki/Corporate_governance
3. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
4. Risk register — Wikipedia — https://en.wikipedia.org/wiki/Risk_register
5. Risk appetite — Wikipedia — https://en.wikipedia.org/wiki/Risk_appetite
6. Regulatory compliance — Wikipedia — https://en.wikipedia.org/wiki/Regulatory_compliance
7. Internal control — Wikipedia — https://en.wikipedia.org/wiki/Internal_control
8. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
9. Audit — Wikipedia — https://en.wikipedia.org/wiki/Audit
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Sarbanes–Oxley Act — Wikipedia — https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act
12. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
