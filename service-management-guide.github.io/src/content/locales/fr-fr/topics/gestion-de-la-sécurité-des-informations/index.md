# Gestion de la sécurité de l'information

**La gestion de la sécurité de l'information protège la confidentialité, l'intégrité et la disponibilité de l'information et des services ; pour les équipes de service, elle fonctionne mieux lorsque les contrôles de sécurité sont intégrés au pipeline de livraison et aux opérations quotidiennes, que les incidents de sécurité sont traités comme les autres incidents avec un soin supplémentaire, et que les décisions de risque ont un responsable et sont consignées.**

## Pourquoi c'est important

Chaque service détient de l'information que quelqu'un convoite : dossiers de clients, identifiants, propriété intellectuelle, données financières. Chaque service dépend aussi du fait que l'information soit correcte et disponible quand on en a besoin. Les défaillances de sécurité frappent tout cela. Une fuite de données expose les clients, un enregistrement falsifié fausse les décisions et une attaque par rançongiciel arrête le travail.

La sécurité peut sembler un monde à part de spécialistes, de règles et d'audits, qui arrive à la fin d'un projet pour dire non. Ce modèle échoue en livraison continue, où le changement est fréquent et où les contrôles tardifs sont trop lents. L'alternative, souvent appelée DevSecOps, intègre la sécurité à la conception, au code, au pipeline et à l'exploitation, de sorte qu'elle fait partie de chaque changement et de chaque quart. Les spécialistes de la sécurité deviennent des partenaires qui fixent des garde-fous et aident les équipes à les respecter, non des gardiens qui inspectent après coup.

La gestion des services y a aussi ses intérêts. Les incidents de sécurité arrivent par le centre de services. Les demandes d'accès et les changements sont des décisions de sécurité. Les fournisseurs font partie de la surface d'attaque. Les connaissances et la surveillance soutiennent la détection. Ce sujet explique les idées principales et la manière de travailler avec une fonction de sécurité, sans prétendre être un manuel de sécurité. Il se rattache à la gestion des demandes de service (Sujet 3.6 — Gestion des demandes de service), à la gestion des fournisseurs (Sujet 3.14 — Gestion des fournisseurs) et à la gouvernance (Sujet 8.1 — Gouvernance, risques et conformité). Il ne donne aucun conseil juridique ni de conformité ; vérifiez les règles qui s'appliquent à vous.

## Concepts clés

**La triade CIA.** La sécurité de l'information vise à protéger trois propriétés : la confidentialité (seules les personnes autorisées peuvent voir l'information), l'intégrité (l'information est exacte et n'a pas été altérée) et la disponibilité (l'information et les services peuvent être utilisés quand on en a besoin). L'article de Wikipedia sur la sécurité de l'information décrit la triade. Certains référentiels en ajoutent d'autres, comme l'authenticité et la responsabilité.

**Approche fondée sur le risque.** L'effort de sécurité est limité ; il devrait donc aller là où le risque est le plus élevé. Le risque combine la probabilité d'un événement préjudiciable et son impact. Wikipedia décrit la gestion des risques en général. Un registre des risques consigne les risques, les responsables et les décisions : réduire, accepter, transférer ou éviter.

**Système de management de la sécurité de l'information (SMSI).** Un ensemble de politiques, de processus et de contrôles pour gérer le risque de sécurité de l'information, avec une revue régulière. ISO/IEC 27001 spécifie les exigences d'un SMSI et sert de base à la certification. Wikipedia la décrit. Voir le Sujet 1.8 — Référentiels et normes de gestion des services. Le NIST Cybersecurity Framework, issu d'une agence américaine et largement utilisé ailleurs, organise les activités en fonctions comme identifier, protéger, détecter, répondre et rétablir.

**Contrôles.** Des mesures qui réduisent le risque : techniques (chiffrement, contrôles d'accès, correctifs), organisationnelles (politiques, formation, séparation des tâches) et physiques (serrures, registres de visiteurs). Les contrôles devraient être proportionnés au risque et testés.

**Défense en profondeur.** Utiliser plusieurs couches de contrôles pour que la défaillance de l'une n'entraîne pas celle de toutes. Wikipedia décrit la défense en profondeur en informatique. Un attaquant qui franchit une barrière en rencontre une autre.

**Moindre privilège et accès.** Les personnes et les systèmes ne devraient avoir que l'accès dont ils ont besoin, pour la seule durée nécessaire. Wikipedia décrit le principe du moindre privilège. Une authentification forte, y compris multifacteur, réduit la probabilité que des mots de passe volés donnent accès. Voir le Sujet 3.6 — Gestion des demandes de service.

**Confiance zéro (zero trust).** Une approche dans laquelle aucun utilisateur ni appareil n'est digne de confiance par défaut du fait de sa localisation réseau ; chaque requête est vérifiée. Wikipedia décrit l'architecture de confiance zéro. Elle déplace l'attention de la périphérie du réseau vers l'identité, l'état des appareils et les données.

**Gestion des vulnérabilités et des correctifs.** Trouver les faiblesses des logiciels et des systèmes et les corriger à temps. Les articles de Wikipedia sur la gestion des vulnérabilités et sur les Common Vulnerabilities and Exposures (CVE) décrivent comment les faiblesses sont identifiées et suivies. Priorisez selon l'exposition et l'impact, pas seulement selon les scores de gravité. Voir le Sujet 4.2 — Gestion des actifs logiciels.

**Chaîne d'approvisionnement logicielle.** Les logiciels modernes comprennent de nombreux composants venus d'autrui : bibliothèques, conteneurs, outils de construction. Une faiblesse de l'un affecte tous ceux qui l'utilisent. Wikipedia décrit la chaîne d'approvisionnement logicielle. Savoir ce que contiennent vos logiciels, grâce à une nomenclature logicielle (software bill of materials), aide à réagir quand une faiblesse est annoncée.

**Modélisation des menaces.** Une manière structurée de réfléchir à la façon dont un système pourrait être attaqué, tôt dans la conception, afin de planifier des parades. Wikipedia décrit les modèles de menaces. C'est peu coûteux au moment de la conception et coûteux plus tard.

**DevSecOps et le pipeline.** Intégrer des contrôles de sécurité au pipeline de livraison : analyse statique du code, analyse des dépendances, détection de secrets dans le code, analyse des conteneurs et contrôles de politique. Wikipedia décrit les tests statiques de sécurité des applications. Les contrôles s'exécutent sur chaque changement et produisent des preuves. Voir le Sujet 6.4 — Pipelines et changements automatisés.

**Détection et surveillance.** La surveillance de sécurité cherche des signes d'attaque, comme des connexions inhabituelles ou des mouvements de données. Les systèmes de gestion des informations et des événements de sécurité (SIEM) collectent et analysent les journaux de nombreuses sources. Wikipedia décrit les SIEM. Ils ne fonctionnent que si les journaux sont complets et les alertes réglées. Voir le Sujet 3.10 — Surveillance et gestion des événements.

**Incidents de sécurité.** Un événement qui compromet, ou menace de compromettre, de l'information ou des systèmes. Wikipedia décrit la gestion des incidents de sécurité informatique. Un incident de sécurité exige les rôles d'incident du Sujet 3.2 — Gestion des incidents, plus des éléments supplémentaires : préserver les preuves, contenir l'attaque et décider de la notification aux clients et aux régulateurs, qui peut être légalement obligatoire dans certaines juridictions. Impliquez tôt des conseillers juridiques et de sécurité.

**Les personnes.** De nombreuses attaques commencent par une personne : courriels d'hameçonnage, ingénierie sociale, mauvaises habitudes. Wikipedia décrit l'hameçonnage et la sensibilisation à la sécurité. La formation aide le plus lorsqu'elle est brève, fréquente et liée à des exemples réels, et lorsque signaler une erreur est sûr et facile.

**Vie privée.** La protection des informations personnelles est apparentée à la sécurité mais ne se confond pas avec elle. Des lois comme le Règlement général sur la protection des données de l'Union européenne fixent des obligations pour les données personnelles. Wikipedia décrit la protection de la vie privée dès la conception, l'idée d'intégrer la vie privée dans les systèmes dès le départ. Cherchez des conseils de spécialistes.

**Comment les angles s'articulent.** La sécurité est le domaine où le rythme agile et le contrôle se rencontrent le plus vivement. La pratique agile traite le travail de sécurité comme une partie du backlog et fait participer des personnes de la sécurité à l'équipe. L'IA aide les défenseurs comme les attaquants ; elle a besoin de sa propre gouvernance (voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA). L'automatisation applique les contrôles de façon cohérente. L'analytique montre l'exposition et les délais de réponse.

## Bonnes pratiques

1. **Partir d'une vue fondée sur le risque.** Listez l'information et les services qui comptent le plus, les menaces auxquelles ils font face et les contrôles en place. Concentrez l'effort sur les plus grands écarts.
2. **Travailler avec la sécurité en partenaires.** Incluez une personne de la sécurité dans la conception et la planification. Demandez quels garde-fous l'équipe devrait suivre et gardez-les peu nombreux et clairs.
3. **Intégrer les contrôles au pipeline.** Exécutez des analyses de code, de dépendances, de conteneurs et de secrets sur chaque changement. Corrigez les causes des constats répétés et laissez un contrôle en échec arrêter une mise en production lorsque le risque est sérieux.
4. **Appliquer le moindre privilège et une authentification forte.** Accordez le minimum d'accès, exigez l'authentification multifacteur, examinez régulièrement les accès et retirez-les quand ils ne sont plus nécessaires.
5. **Tenir un inventaire et corriger rapidement.** Sachez quels logiciels et systèmes vous exploitez, suivez les vulnérabilités et priorisez selon l'exposition et l'impact. Fixez des objectifs de délai de correction et suivez-les.
6. **Connaître sa chaîne d'approvisionnement.** Consignez les composants de vos logiciels et les fournisseurs derrière vos services. Surveillez les faiblesses annoncées et ayez un moyen de trouver rapidement les systèmes concernés.
7. **Modéliser les menaces tôt.** Pour les nouveaux services et les changements majeurs, passez une heure à penser en attaquant et consignez les parades que vous choisissez.
8. **Se préparer à répondre.** Rédigez un plan d'incident de sécurité avec rôles, contacts, traitement des preuves et points de décision. Répétez, y compris les décisions de notification. Impliquez des conseils juridiques.
9. **Rendre le signalement sûr.** Encouragez les gens à signaler rapidement les messages suspects et les erreurs, et répondez avec bienveillance. La peur du blâme cache les incidents.
10. **Consigner les décisions de risque.** Quand un risque est accepté, consignez qui l'a accepté, pourquoi et quand il sera réexaminé. Rendez le registre visible à ceux qui possèdent les services.

## Questions à discuter avec votre équipe

**Quelles sont les informations les plus précieuses et les plus sensibles que nous détenons, et qui peut y accéder ?**
Dressez une courte liste. Attendez-vous à des surprises sur les personnes qui ont accès et sur l'endroit où vivent les copies. Demandez ensuite de choisir un jeu de données et de vérifier sa liste d'accès.

**Quels contrôles de sécurité s'exécutent à chaque changement, et lesquels n'ont lieu qu'à la fin ?**
Comparez le pipeline à la liste de contrôle de mise en production. Attendez-vous à des revues manuelles tardives. Demandez ensuite de choisir un contrôle tardif à déplacer dans le pipeline.

**À quelle vitesse corrigeons-nous une vulnérabilité grave, et comment savons-nous quels systèmes sont touchés ?**
Interrogez sur la dernière. Attendez-vous à « nous avons couru dans tous les sens ». Demandez ensuite de convenir d'un délai cible et d'un moyen de lister les systèmes concernés, par exemple à partir d'un inventaire.

**Que ferions-nous la première heure d'une violation suspectée, et qui décide d'en informer clients ou régulateurs ?**
Menez une brève discussion de scénario. Attendez-vous à des lacunes sur les droits de décision. Demandez ensuite de rédiger une page avec rôles et contacts, en impliquant des conseillers juridiques.

**Dans quelle mesure le personnel peut-il signaler une erreur en toute sécurité, comme avoir cliqué sur un mauvais lien ?**
Cela teste la culture. Demandez ce qui est arrivé à la dernière personne qui l'a fait. Demandez ensuite de convenir de la manière dont les signalements sont acquittés et de ce qui est dit publiquement.

**Comment l'IA pourrait-elle aider notre travail de sécurité, et quels nouveaux risques ajoute-t-elle ?**
L'IA peut résumer des alertes et relire du code. Elle peut aussi laisser fuir des données qu'on y colle, générer du code peu sûr et être visée par des attaquants. Demandez qui est responsable de chaque usage et quelles données peuvent être partagées. Demandez ensuite de convenir d'une règle sur ce qui ne doit pas être collé dans des outils externes.

## En pratique : un exemple de gestion des services

L'équipe numérique de banque de détail d'une banque régionale suit une revue de sécurité avant chaque mise en production, tenue une fois par mois par une équipe centrale. Les mises en production s'accumulent en attendant. Les développeurs la voient comme un obstacle ; le personnel de sécurité voit des constats récurrents et peu de temps. Le trimestre dernier, une bibliothèque présentant une faiblesse connue est restée six semaines en production avant que la revue la trouve.

La responsable de la sécurité et le responsable de l'ingénierie conviennent d'essayer un autre modèle pour un produit. Un ingénieur de sécurité rejoint l'équipe la moitié de chaque semaine. Le pipeline gagne une analyse des dépendances, une analyse statique et une détection de secrets dans le code, et fait échouer une construction en cas de constat critique. L'équipe tient un simple inventaire logiciel généré à partir du pipeline. Chaque fonctionnalité majeure fait l'objet d'une séance d'une heure de modélisation des menaces à la conception. La revue mensuelle est remplacée pour ce produit par un audit léger par échantillon.

En un trimestre, le pipeline détecte deux bibliothèques vulnérables et un identifiant commité avant la mise en production. Quand une nouvelle faiblesse de bibliothèque largement rapportée est annoncée, l'inventaire identifie les trois services concernés en moins d'une heure ; deux sont corrigés le jour même et le troisième est planifié avec un contrôle compensatoire. L'équipe constate que son plan d'incident de sécurité suppose un contact qui est parti, et le met à jour.

Ce qui change : les constats arrivent quand ils sont peu coûteux à corriger, et la file mensuelle disparaît pour ce produit. Ce qui reste difficile : les contrôles du pipeline produisent beaucoup de constats de faible gravité, et les développeurs ont commencé à les ignorer ; l'inventaire ne couvre pas les services tiers que le produit appelle ; et le régulateur de la banque demande encore des preuves sous une autre forme, ce qui coûte de l'effort à générer. Les équipes conviennent de régler les seuils et de demander au régulateur quelles traces du pipeline il acceptera.

## Quatre perspectives

### Équipes produit et de livraison

Prenez la sécurité en charge comme une partie de la qualité : modélisez les menaces, utilisez les contrôles du pipeline, corrigez rapidement les constats et traitez les secrets avec soin. Demandez des garde-fous à la sécurité et dites-lui ce qui vous ralentit.

### Équipes de service et d'exploitation

Appliquez le moindre privilège, corrigez à temps et guettez les activités inhabituelles. Traitez les incidents de sécurité avec la discipline des incidents majeurs et préservez les preuves. Signalez ce que vous voyez à l'équipe de sécurité.

### Direction et gouvernance

Décidez de l'appétence au risque et financez à la fois la prévention et la réponse. Demandez des preuves que les contrôles fonctionnent. Créez une culture dans laquelle signaler ses erreurs est sûr. Sachez qui décide d'informer clients et régulateurs.

### Clients et utilisateurs

Utilisez une authentification forte, signalez les messages suspects et gardez vos propres identifiants en sécurité. Demandez aux fournisseurs comment ils protègent vos informations et ce qu'ils vous diront en cas de violation.

## Agilité, IA, automatisation et analytique

### Agilité

Placez le travail de sécurité dans le même backlog que les fonctionnalités, faites participer des personnes de la sécurité à l'équipe et améliorez par petites étapes après chaque constat et chaque incident. Attention : une sécurité en « sprint 0 » ou par une revue de dernière minute passe à côté de l'objet ; intégrez-la au flux de travail.

### IA

L'IA peut aider à résumer des alertes, à relire du code pour y chercher des faiblesses et à rédiger des notes d'incident, une personne restant responsable des décisions. Elle apporte aussi des risques : fuite de données vers des outils externes, code généré peu sûr et manipulation du modèle. Fixez des règles sur les données et relisez les changements générés par l'IA comme les autres. Voir le Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

### Automatisation

Automatisez l'analyse, la correction des systèmes courants, les revues d'accès et la capture des preuves, avec journaux et contrôles sur l'automatisation elle-même. Attention : une remédiation automatisée aux privilèges étendus est une cible ; restreignez-la et surveillez-la. Voir le Sujet 6.4 — Pipelines et changements automatisés.

### Analytique

Suivez le délai de correction, l'exposition par gravité, l'achèvement des revues d'accès, les constats de sécurité par changement et les délais de détection et de réponse. Attention : compter les vulnérabilités closes peut récompenser les corrections faciles, et le nombre d'incidents peut baisser parce que la détection est mauvaise ; combinez les mesures et testez la détection. Voir le livre *Service Management Metrics* et le Sujet 7.3 — Mesure et reporting.

## Modes d'échec courants

- **La sécurité à la fin.** Les revues bloquent les mises en production et trouvent les problèmes tard. Intégrez les contrôles au pipeline et à la conception.
- **Surcharge d'alertes et de constats.** Les équipes ignorent les scanners. Réglez les seuils et corrigez les causes répétées.
- **Accès excessifs.** Les comptes gardent des privilèges dont ils n'ont plus besoin. Examinez et retirez régulièrement.
- **Pas d'inventaire.** Vous ne pouvez pas dire ce qui est touché par une nouvelle faiblesse. Générez et tenez un inventaire.
- **Des plans d'incident non testés.** Les contacts sont périmés. Répétez et mettez à jour.
- **Du blâme pour avoir signalé une erreur.** Les incidents sont cachés. Répondez avec bienveillance et rapidité.
- **Une acceptation du risque sans responsable.** Les risques sont acceptés par défaut. Consignez qui a accepté et quand revoir.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Gestion des risques | Informelle | Principaux risques listés | Registre des risques avec responsables et décisions | Risques examinés à l'aune des incidents et des tests | Risque géré dans l'organisation et chez les fournisseurs |
| Sécurité du pipeline | Revue manuelle à la fin | Quelques analyses | Contrôles standard sur chaque changement | Constats et corrections mesurés | Politique et contrôles adaptés et automatisés sous supervision |
| Accès | Au cas par cas | Revues de base | Moindre privilège et authentification multifacteur par défaut | Accès examinés sur la base de preuves | Accès ajustés en continu entre systèmes |
| Détection et réponse | Réactive | Journalisation de base | Surveillance de sécurité et plan d'incident répété | Délais de détection et de réponse mesurés | Réponse coordonnée entre équipes et fournisseurs |

## Liste de contrôle

- [ ] Nous connaissons nos informations les plus sensibles et qui peut y accéder.
- [ ] Les contrôles de sécurité s'exécutent dans le pipeline à chaque changement.
- [ ] Les accès suivent le moindre privilège, avec authentification multifacteur et revue régulière.
- [ ] Nous tenons un inventaire des logiciels et suivons les vulnérabilités.
- [ ] Nous avons un plan d'incident de sécurité, avec rôles, contacts et conseil juridique, et l'avons répété.
- [ ] Le personnel peut signaler ses erreurs en toute sécurité.
- [ ] Les acceptations de risque sont consignées avec responsable et date de revue.
- [ ] Des règles existent sur les données qui peuvent être partagées avec des outils d'IA.

## Invites d'IA

**Préparer une séance de modélisation des menaces.**

```text
Our system: [describe components, data, and users]. Trust boundaries we know: [list].
List questions to ask in a one-hour threat modeling session, grouped by component and data flow, and note what we have not told you. Do not list specific attacks as facts about our system.
List what you are unsure of.
```

**Résumer des constats de vulnérabilités pour la priorisation.**

```text
Here is a list of vulnerability findings with severity, affected system, and whether the system is exposed to the internet: [paste, with sensitive details removed].
Group them, list those that combine high severity with exposure, and give one question per group about business impact. Do not claim any is exploitable.
List what you are unsure of.
```

**Rédiger un guide de la première heure.**

```text
Our context: [type of organization, key systems]. Roles available: [list].
Draft a one-page first-hour checklist for a suspected data breach with steps for containment, evidence preservation, communication, and decisions that need legal or leadership input. Do not state legal obligations; list questions for our legal adviser instead.
List what you are unsure of.
```

## Compétences d'IA

- [security-testing](../../../../skills/security-testing/SKILL.md) : à utiliser pour planifier les contrôles et tests de sécurité.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md) : à utiliser pour formuler les questions de vie privée à votre conseiller juridique.
- [risk-register](../../../../skills/risk-register/SKILL.md) : à utiliser pour consigner les risques, les responsables et les décisions.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md) : à utiliser pour planifier la réponse, y compris aux événements de sécurité.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md) : à utiliser pour choisir des indicateurs d'alerte précoce.

## Sources principales

- ISO/IEC 27001 (la norme elle-même) : les exigences d'un système de management de la sécurité de l'information ; lisez l'édition actuelle auprès de l'éditeur.
- NIST, Cybersecurity Framework (nist.gov/cyberframework) : un référentiel très utilisé issu d'une agence américaine.
- OWASP (owasp.org) : des conseils communautaires sur la sécurité des applications.
- Wikipedia, « Information security » et « ISO/IEC 27001 » : des aperçus du domaine et de la norme.

## Références

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
