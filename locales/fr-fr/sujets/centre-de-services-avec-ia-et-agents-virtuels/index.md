# Centre de services avec IA et agents virtuels

**Les agents virtuels et le tri par IA peuvent répondre aux questions courantes, orienter et préparer les tickets et rédiger des réponses ; ils aident lorsqu'ils sont ancrés dans des connaissances revues, honnêtes sur ce qu'ils ne savent pas, faciles à quitter pour une personne et mesurés sur le fait que les utilisateurs ont obtenu ce dont ils avaient besoin.**

## Pourquoi c'est important

Les centres de services ont longtemps voulu répondre plus vite et à moindre coût aux questions simples. Les chatbots ont été la première tentative : des menus scriptés qui frustraient les utilisateurs. Les assistants plus récents, fondés sur de grands modèles de langage, sont bien plus fluides et savent traiter des questions ouvertes en langage courant. Cela les rend beaucoup plus utiles, et aussi bien plus capables de nuire quand ils se trompent, parce que leurs mauvaises réponses sonnent juste.

Pour les utilisateurs, un agent virtuel peut être une voie rapide vers une réponse à toute heure. Pour le personnel du centre, le tri et la rédaction par IA peuvent prendre en charge le classement et l'écriture afin qu'il consacre son temps aux cas plus difficiles. Pour l'organisation, les deux peuvent réduire le coût par contact. Ces bénéfices sont réels, et ils dépendent du fait que l'assistant soit utilisé pour les bonnes questions, soit maintenu exact et ne piège pas les gens qui ont besoin d'un humain.

Les risques ont un visage humain. Un utilisateur verrouillé hors d'un système avant une échéance, une infirmière en contact avec les patients qui a besoin d'un dépannage rapide, une personne en détresse qui reçoit un script jovial : chacun est mal servi par un assistant qui ne sait pas reconnaître quand passer la main. Ce sujet décrit où s'insèrent les agents virtuels et le tri par IA, comment les concevoir et les tester, et comment les mesurer honnêtement. Il s'appuie sur le centre de services (Sujet 3.1 — Centre de services), les demandes de service (Sujet 3.6 — Gestion des demandes de service) et les connaissances (Sujet 3.9 — Gestion des connaissances), et repose sur les idées du Sujet 5.1 — L'IA dans la gestion des services et du Sujet 5.6 — Gouvernance, risques et conformité de l'IA.

## Concepts clés

**Agent virtuel.** Un logiciel qui converse avec les utilisateurs par texte ou voix pour répondre à des questions ou accomplir des tâches. Les articles de Wikipedia sur les chatbots et les assistants virtuels les décrivent. Dans un centre de services, un agent virtuel est souvent le premier point de contact, avec une voie vers une personne.

**À base de règles ou à base d'IA.** Les premiers chatbots suivaient des scripts ou reconnaissaient des mots-clés. Les assistants à base d'IA interprètent le langage naturel et peuvent composer des réponses. Wikipedia décrit les interfaces utilisateur conversationnelles et la compréhension du langage naturel. Les scripts sont prévisibles et limités ; les modèles de langage sont souples et moins prévisibles. De nombreux systèmes en production combinent les deux : des flux scriptés pour les tâches sensibles, des modèles de langage pour les questions ouvertes.

**Intentions et flux.** Une intention est ce que l'utilisateur veut faire, comme « réinitialiser mon mot de passe » ou « commander un ordinateur portable ». De nombreux assistants identifient l'intention puis exécutent un flux défini avec des contrôles, ce qui est plus sûr pour les actions. Pour les questions ouvertes, l'assistant récupère des articles pertinents et répond à partir d'eux.

**Ancrage (grounding).** Répondre à partir de sources précises et revues, généralement des articles de connaissances, et les montrer, au lieu de la mémoire générale du modèle. Wikipedia décrit la génération augmentée par récupération. L'ancrage réduit les réponses inventées sans les supprimer, et il fait de la qualité de votre base de connaissances la limite de la qualité de l'assistant. Voir le Sujet 3.9 — Gestion des connaissances.

**Détournement et résolution.** Le détournement (deflection) signifie qu'un utilisateur a obtenu une réponse de l'assistant et n'a pas contacté une personne. La résolution signifie que le problème de l'utilisateur a réellement été résolu. Ce n'est pas la même chose : un utilisateur qui abandonne et va ailleurs est détourné, non résolu. Mesurez la résolution par le suivi, les contacts répétés et les retours.

**Passage de relais (handover).** Transmettre la conversation à une personne, avec le contexte, quand l'assistant ne peut pas aider ou que l'utilisateur le demande. Wikipedia décrit le transfert en général. Un bon passage de relais porte l'historique, pour que l'utilisateur n'ait pas à se répéter. Un mauvais le laisse tomber dans une file. Gardez toujours « parler à une personne » visible.

**Tri et orientation.** L'IA classe les tickets entrants par type, urgence et équipe, et les oriente. Wikipedia décrit le tri. Elle peut aussi détecter des incidents majeurs probables à partir d'une rafale de contacts similaires. Les erreurs envoient le travail dans la mauvaise file ; le taux de réorientation est une bonne mesure.

**Rédaction et synthèse pour les agents.** L'IA peut résumer de longs fils de tickets, suggérer des articles et rédiger des réponses que l'agent modifie. Cela garde une personne aux commandes tout en faisant gagner du temps. Voir le Sujet 5.4 — IA générative pour les incidents, les connaissances et les changements.

**Détection du ressenti et de l'urgence.** Des techniques qui déduisent l'humeur ou l'urgence de l'utilisateur à partir du texte. Wikipedia décrit l'analyse de sentiment. Elle peut prioriser un utilisateur contrarié ou un message qui mentionne une échéance. Elle est imparfaite, surtout selon les langues et les cultures ; servez-vous-en comme d'un indice.

**Voix et prise en charge multilingue.** La reconnaissance vocale et la synthèse vocale permettent l'interaction par la voix ; la traduction automatique permet le support dans davantage de langues. Wikipedia décrit ces technologies. La qualité varie selon la langue et l'accent, et les utilisateurs de langues moins courantes peuvent être moins bien servis. Testez avec de vrais locuteurs.

**Accessibilité et inclusion.** Les assistants doivent fonctionner pour les personnes en situation de handicap et pour celles qui ne sont pas à l'aise avec la technologie. Wikipedia décrit l'accessibilité et les Web Content Accessibility Guidelines (WCAG). Une fenêtre de conversation que les lecteurs d'écran ne peuvent pas utiliser exclut des utilisateurs. La fracture numérique, également décrite sur Wikipedia, rappelle que tout le monde ne préfère pas ou ne peut pas utiliser la conversation en ligne.

**Identité et autorité.** Un assistant qui peut accomplir des actions, comme réinitialiser un mot de passe, doit vérifier qui demande. Ne laissez jamais un assistant accorder un accès sur une simple déclaration. Voir le Sujet 3.6 — Gestion des demandes de service et le Sujet 3.13 — Gestion de la sécurité de l'information.

**Honnêteté sur le fait d'être une machine.** Les utilisateurs devraient savoir qu'ils parlent à une IA, et l'assistant ne devrait pas feindre d'être humain ni d'avoir des sentiments qu'il n'a pas. Certaines lois exigent une divulgation ; vérifiez les règles qui s'appliquent à vous. L'article de Wikipedia sur les dark patterns décrit des pratiques de conception qui trompent les utilisateurs, comme cacher la voie vers une personne ; évitez-les.

**Sécurité des assistants.** Les assistants subissent des attaques comme l'injection d'invite, où un texte dans un message ou un document tente de supplanter les instructions de l'assistant. Wikipedia décrit l'injection d'invite. Ne donnez pas à un assistant des pouvoirs qu'un message hostile pourrait détourner, et traitez les entrées de l'utilisateur et les documents récupérés comme non fiables.

**Vie privée.** Les conversations peuvent contenir des données personnelles. Décidez ce qui est stocké, pour combien de temps, qui peut le lire et si cela entraîne un modèle. Wikipedia décrit les données personnelles et le Règlement général sur la protection des données comme un cadre juridique. Prenez un avis juridique.

**Comment les angles s'articulent.** Les agents virtuels sont le visage visible de l'IA, de l'automatisation et de l'analytique au centre de services. La pratique agile suggère de commencer par quelques sujets et d'élargir. L'automatisation accomplit les tâches derrière la conversation. L'analytique dit ce que demandent les utilisateurs et où l'assistant échoue.

## Bonnes pratiques

1. **Choisir des sujets où un assistant peut bien faire.** Commencez par des questions fréquentes, simples et à faible risque, qui ont des réponses claires, comme la façon de se connecter au réseau sans fil. Évitez d'abord les sujets sensibles ou à enjeux élevés.
2. **Ancrer les réponses dans des articles revus.** Utilisez la récupération dans la base de connaissances et montrez la source. Si aucune source n'étaye une réponse, l'assistant devrait le dire et proposer une personne.
3. **Rendre la voie vers une personne évidente.** Montrez à tout moment une option claire « parler à une personne » et passez la main avec la conversation jointe. Ne la bloquez jamais.
4. **Vérifier l'identité pour les actions.** Pour tout ce qui modifie un accès ou des données, utilisez des contrôles forts en dehors de la conversation et limitez ce que l'assistant peut faire. Journalisez chaque action.
5. **Dire aux utilisateurs que c'est une IA.** Dites-le dès le début, indiquez ce qu'elle peut et ne peut pas faire pour eux et évitez de feindre d'être humain.
6. **Constituer un jeu de test et l'exécuter.** Créez des questions réalistes tirées de vrais tickets, y compris des questions que l'assistant devrait refuser et d'autres qui tentent de le manipuler. Exécutez le jeu avant le lancement et après chaque changement.
7. **Lire de vraies conversations.** Examinez chaque semaine un échantillon de conversations, surtout celles où l'utilisateur est parti ou a demandé une personne. Servez-vous-en pour corriger articles, flux et instructions.
8. **Mesurer la résolution, pas seulement le détournement.** Suivez les contacts de suivi, les notes des utilisateurs, les passages de relais et les plaintes. Comparez avec une référence.
9. **Inclure tout le monde.** Testez avec des lecteurs d'écran et avec différentes langues et accents. Gardez d'autres canaux disponibles, comme le téléphone et le courriel.
10. **Le gérer comme un service.** Nommez un responsable, un budget, un calendrier d'améliorations et un plan pour le cas où le modèle sous-jacent ou l'éditeur change.

## Questions à discuter avec votre équipe

**Quelles questions les utilisateurs posent-ils le plus, et lesquelles un assistant pourrait-il traiter de façon fiable à partir de nos articles existants ?**
Utilisez les données de tickets. Attendez-vous à une courte liste de questions répétitives. Vérifiez l'exactitude et l'exhaustivité des articles. Demandez ensuite de choisir cinq questions pour un premier essai.

**Que ne devrait jamais faire ni dire l'assistant, et comment le testerons-nous ?**
Listez les limites : aucun changement d'accès sans vérification, aucun conseil juridique ou médical, aucune promesse de délai. Attendez-vous à des désaccords sur les marges. Demandez ensuite de transformer chaque limite en test.

**Quand un utilisateur est frustré ou demande une personne, que se passe-t-il, et combien de temps cela prend-il ?**
Essayez vous-même. Attendez-vous à des lacunes de contexte et à des retards. Demandez ensuite de convenir d'un délai maximal et d'un format de passage de relais standard.

**Comment saurons-nous que les utilisateurs ont obtenu la réponse dont ils avaient besoin, et pas seulement qu'ils ont cessé de converser ?**
Demandez la mesure. Attendez-vous à « taux de détournement ». Demandez ensuite de convenir d'une question de suivi, d'une vérification des contacts répétés et d'une revue par échantillon.

**Qui peut utiliser cet assistant, et qui pourrait-il laisser en plan ?**
Pensez aux personnes en situation de handicap, aux différences de langue ou à la faible assurance. Attendez-vous à ce que certains groupes n'aient pas été considérés. Demandez ensuite de tester avec quelques vrais utilisateurs de ces groupes.

**Quelles données contiennent les conversations, où vont-elles et qui peut les lire ?**
Parcourez le flux de données. Attendez-vous à des surprises sur les éditeurs et la conservation. Demandez ensuite de mettre le flux par écrit et de demander au responsable de la vie privée de l'examiner.

## En pratique : un exemple de gestion des services

Le centre informatique d'un service régional de santé soutient environ 12 000 employés cliniques et administratifs. Les appels culminent aux relèves, quand les cliniciens ont besoin de connexions et d'impression, et l'attente moyenne est de neuf minutes. La responsable des services propose un agent virtuel dans le portail du personnel et sur un canal de messagerie.

L'équipe commence étroitement. Elle prend les 15 questions « comment faire » les plus fréquentes sur six mois de tickets, examine les articles correspondants avec des utilisateurs cliniques et en réécrit huit qui sont peu clairs. L'assistant ne répond qu'à partir de ces articles. Pour les réinitialisations de mot de passe, il n'agit pas seul ; il renvoie au flux de réinitialisation du système d'identité, qui utilise sa propre vérification. Une bannière indique qu'il s'agit d'un assistant d'IA, et un bouton « parler à une personne » transmet la conversation, avec un résumé, à un agent du centre.

Avant le lancement, l'équipe construit 80 questions de test, dont des questions sur des sujets extérieurs aux 15, comme les conseils cliniques, que l'assistant doit refuser, et des tentatives de lui faire révéler ses instructions. La première version échoue à neuf tests, surtout en répondant hors de son périmètre. L'équipe resserre les instructions et ajoute une règle selon laquelle tout ce qui ne correspond à rien va à une personne. Le premier mois, l'assistant traite environ 1 400 conversations ; environ 40 % se terminent sans ticket et 12 % sont transmises à un agent. La responsable lit 100 conversations chaque semaine. Elle constate que les utilisateurs posent souvent des questions sur un écran de connexion récemment modifié que les articles ne décrivent pas encore, et l'équipe les met à jour.

Ce qui change : le temps d'attente aux pics diminue, et les agents passent moins de temps sur les questions répétées. Ce qui reste difficile : le personnel de nuit de certains services a une mauvaise connectivité et continue de téléphoner ; l'assistant peine sur les questions dans deux langues employées par de nombreux employés, et l'équipe n'a pas encore trouvé de méthode de test adéquate ; et la tarification de l'éditeur croît avec le volume de conversations. La responsable ajoute des articles traduits et une revue trimestrielle des coûts.

## Quatre perspectives

### Équipes produit et de livraison

Fournissez des articles et des notes de version clairs pour vos changements, puisque l'assistant ne peut répondre qu'à ce qui est écrit. Construisez des flux que l'assistant peut appeler en toute sécurité, avec leurs propres contrôles d'identité.

### Équipes de service et d'exploitation

Soyez responsables de la qualité de l'assistant : lisez les conversations, corrigez les articles et améliorez les flux. Soignez les passages de relais et signalez les motifs aux responsables de produits et de services.

### Direction et gouvernance

Fixez les limites, financez le travail sur les connaissances et les tests, et demandez des mesures de résolution, pas seulement de détournement. Veillez à ce qu'il y ait toujours une voie vers une personne. Vérifiez les questions de données et de droit.

### Clients et utilisateurs

Vous devriez savoir que vous parlez à une IA, pouvoir passer à une personne à tout moment et ne pas avoir à vous répéter. Dites au fournisseur quand une réponse était fausse ou inutile.

## Agilité, IA, automatisation et analytique

### Agilité

Commencez par quelques sujets, livrez souvent, apprenez des conversations réelles et élargissez par étapes. Impliquez utilisateurs et agents dans l'examen de ce qu'il faut ajouter. Attention : ajouter rapidement de nombreux sujets sans test multiplie les mauvaises réponses ; ajoutez par petits groupes testés.

### IA

Les assistants ont besoin d'un responsable, d'un jeu de test, de réponses ancrées et d'une revue par échantillon. Décidez ce que l'IA peut dire et faire, et où une personne doit décider. Attention : régler les instructions pour réussir les tests peut rendre les assistants fragiles ; renouvelez le jeu de test avec de nouvelles vraies questions. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Reliez l'assistant à des flux définis pour les demandes courantes, avec vérification, journaux et limites, afin qu'il déclenche des actions sans les improviser. Attention : un assistant qui peut agir sur un message persuasif est une cible ; gardez des pouvoirs étroits et vérifiez l'identité hors bande. Voir le Sujet 6.5 — Libre-service et traitement automatisé.

### Analytique

Regardez les questions posées, répondues, refusées, transmises et abandonnées, les notes des utilisateurs, les contacts répétés et le coût par contact résolu. Attention : un fort détournement peut signifier que les utilisateurs ont abandonné, et les notes viennent d'un petit groupe qui s'est lui-même sélectionné ; combinez avec des conversations échantillonnées. Voir le Sujet 7.7 — Analytique de l'expérience et du sentiment et le livre *Service Management Metrics*.

## Modes d'échec courants

- **Pas de sortie.** Les utilisateurs tournent en rond avec un robot. Offrez toujours une personne, avec le contexte.
- **Réponses de mémoire.** Le modèle invente des étapes. Ancrez dans des articles revus et refusez en cas de doute.
- **Le détournement comme succès.** Les utilisateurs partent sans aide. Mesurez la résolution et les contacts répétés.
- **Des actions sans vérification.** Un accès est accordé sur simple déclaration. Vérifiez hors bande et journalisez.
- **Un robot caché.** Les utilisateurs pensent parler à une personne. Dites que c'est une IA.
- **Des utilisateurs exclus.** Les lecteurs d'écran ou les langues échouent. Testez avec de vrais utilisateurs et gardez d'autres canaux.
- **Des connaissances périmées.** L'assistant cite d'anciens articles. Reliez les mises à jour aux changements et examinez des échantillons.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Périmètre et conception | Tout ce que l'éditeur propose | Quelques sujets | Sujets, limites et flux définis | Périmètre ajusté d'après les données de conversation | Périmètre coordonné entre fonctions et canaux |
| Ancrage et connaissances | Mémoire du modèle | Quelques articles | Articles revus avec sources affichées | Connaissances mises à jour à partir des conversations | Connaissances et assistant améliorés ensemble en continu |
| Passage de relais et inclusion | Caché ou médiocre | Un passage de relais existe | Passage de relais visible avec contexte, accessibilité testée | Passage de relais et inclusion mesurés | Expérience cohérente entre canaux, langues et capacités |
| Mesure | Volume seulement | Détournement | Résolution, contacts répétés et notes | Échantillons et tendances examinés régulièrement | Résultats reliés au coût et à l'expérience entre services |

## Liste de contrôle

- [ ] Nous avons choisi un petit ensemble de sujets adaptés à l'assistant.
- [ ] Les réponses sont ancrées dans des articles revus et montrent leurs sources.
- [ ] Une option visible « parler à une personne » passe la main avec le contexte.
- [ ] L'identité est vérifiée hors de la conversation pour toute action.
- [ ] Les utilisateurs savent que c'est une IA.
- [ ] Nous avons un jeu de test et l'exécutons avant et après chaque changement.
- [ ] Nous lisons un échantillon de conversations chaque semaine.
- [ ] Nous avons testé l'accessibilité et les langues que parlent nos utilisateurs.

## Invites d'IA

**Rédiger des questions de test à partir de tickets.**

```text
Here are anonymized ticket titles and summaries from the past month: [paste]. Our assistant is allowed to answer these topics: [list].
Write 40 test questions based on the tickets: 25 inside the topics, 10 outside them that the assistant should decline, and 5 that try to make it ignore its rules. State the correct behavior for each. Do not include real personal data.
List what you are unsure of.
```

**Examiner des conversations pour y trouver des motifs d'échec.**

```text
Here are transcripts of conversations where the user asked for a person or left unhelped, with personal data removed: [paste].
Group them into up to six patterns, count each, quote a short example, and list a possible fix to investigate. Do not blame the user.
List what you are unsure of.
```

**Rédiger les instructions d'un assistant pour revue.**

```text
Our assistant helps staff of [type of organization] with [topics]. It must never: [list]. It must always: [list, such as offer a person and cite sources].
Draft instructions of under 250 words for the assistant, in plain language, including what to say when it does not know. Do not invent capabilities or sources.
List what you are unsure of.
```

## Compétences d'IA

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md) : à utiliser pour concevoir et tester les instructions d'un assistant.
- [service-catalog](../../../../skills/service-catalog/SKILL.md) : à utiliser pour définir ce que l'assistant peut aider les utilisateurs à demander.
- [survey-design](../../../../skills/survey-design/SKILL.md) : à utiliser pour concevoir des retours d'utilisateurs qui mesurent la résolution.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md) : à utiliser pour recueillir les retours des utilisateurs et des agents.

## Sources principales

- W3C, Web Content Accessibility Guidelines (WCAG) : la norme internationale pour un contenu web accessible, pertinente pour les interfaces de conversation.
- NIST, AI Risk Management Framework : une structure pour identifier et gérer les risques liés à l'IA.
- Wikipedia, « Chatbot » et « Virtual assistant » : des aperçus des technologies.
- Wikipedia, « Prompt injection » : contexte sur un risque de sécurité majeur.

## Références

1. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
2. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
3. Conversational user interface — Wikipedia — https://en.wikipedia.org/wiki/Conversational_user_interface
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
6. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
7. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
8. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
9. Dark pattern — Wikipedia — https://en.wikipedia.org/wiki/Dark_pattern
10. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
11. Web Content Accessibility Guidelines (WCAG) overview — W3C — https://www.w3.org/WAI/standards-guidelines/wcag/
