# Analytique prédictive et prévision

**Les prévisions et prédictions de la demande, de la capacité, des incidents et du risque de changement aident les équipes à se préparer, mais elles sont incertaines par nature ; utilisez d'abord des références simples, montrez des fourchettes plutôt que des chiffres uniques, validez sur des données mises de côté, surveillez la dérive et rendez explicite la règle de décision avant d'établir la prévision.**

## Pourquoi c'est important

Les équipes de service se préparent toujours à quelque chose. Combien de contacts arriveront la première semaine du nouveau trimestre ? Quand le stockage sera-t-il plein ? Quels changements risquent de causer des incidents ? Combien de personnes faut-il d'astreinte pendant les soldes ? Les décisions sur le personnel, la capacité et le risque reposent toutes sur des croyances sur l'avenir, que quelqu'un les énonce ou non.

La prédiction rend ces croyances explicites et testables. Une prévision du volume de tickets du mois prochain, avec une fourchette, peut être comparée à ce qui se passe et améliorée. Un modèle qui note le risque d'un changement peut être vérifié par rapport aux changements qui ont échoué. Bien fait, cela remplace l'intuition par des preuves. Mal fait, cela remplace l'intuition par une fausse confiance : un chiffre unique à deux décimales, produit par un modèle que personne ne sait expliquer, auquel on se fie parce qu'il a l'air scientifique.

Les prédictions se trompent pour des raisons ordinaires. Le passé ne contenait pas le motif qui compte. Le modèle ajuste du bruit. Un lancement, un changement de politique ou une panne casse la relation que le modèle avait apprise. Un événement rare est prévu avec un outil conçu pour les événements courants. Ce sujet décrit les principaux types de prévision et de prédiction en gestion des services, les méthodes en termes simples et les habitudes qui les gardent honnêtes. Il s'appuie sur l'analytique (Sujet 7.1 — Analytique pour la gestion des services) et la planification de la capacité (Sujet 3.11 — Disponibilité, capacité et performance), et se rattache à l'AIOps (Sujet 5.2 — AIOps) et à l'économie du cloud (Sujet 4.5 — Gestion financière et FinOps).

## Concepts clés

**Prévision et prédiction.** La prévision estime les valeurs futures d'une quantité dans le temps, comme la demande du mois prochain. La prédiction, plus largement, estime une inconnue, comme le fait qu'un changement échoue ou non. Wikipedia décrit la prévision et l'analytique prédictive. Toutes deux utilisent des motifs des données passées, et toutes deux sont incertaines.

**Séries temporelles.** Des données enregistrées à intervalles réguliers. Wikipedia décrit l'analyse de séries temporelles. De nombreuses quantités de service, comme les nombres quotidiens de tickets, sont des séries temporelles avec une tendance (une hausse ou baisse de long terme), une saisonnalité (cycles réguliers, hebdomadaires ou annuels) et du bruit. Wikipedia décrit la saisonnalité. Les prévisions doivent tenir compte des trois.

**Références (baselines).** La prévision la plus simple qui pourrait marcher : « la semaine prochaine ressemblera à celle-ci », ou « ce mois ressemblera au même mois de l'an dernier, ajusté de la croissance ». Les références sont étonnamment difficiles à battre. Comparez toujours une méthode sophistiquée à une référence ; si elle ne fait pas nettement mieux, utilisez la référence.

**Méthodes classiques.** Des techniques comme le lissage exponentiel et les modèles autorégressifs à moyenne mobile intégrée (ARIMA), que décrit Wikipedia, traitent tendances et saisonnalité pour de nombreuses séries et sont souvent difficiles à battre avec des outils plus complexes. Elles sont aussi plus faciles à expliquer.

**Méthodes d'apprentissage automatique.** Des méthodes qui apprennent des motifs à partir de nombreuses variables, comme les arbres de régression ou les réseaux de neurones, peuvent utiliser des informations supplémentaires, comme des événements planifiés. Wikipedia décrit l'analyse de régression et l'apprentissage automatique en général. Elles peuvent bien faire quand il y a beaucoup de données pertinentes, et sur-ajuster quand il n'y en a pas. Voir le Sujet 5.1 — L'IA dans la gestion des services.

**Sur-ajustement et validation.** Un modèle qui épouse trop le passé, bruit compris, se comporte mal sur de nouvelles données. Wikipedia décrit le sur-ajustement. La défense consiste à mettre de côté des données que le modèle n'a pas vues, dans des jeux distincts d'entraînement, de validation et de test, comme le décrit Wikipedia, et à tester sur des périodes postérieures à celles utilisées pour construire le modèle. Pour les séries temporelles, cela s'appelle le backtesting ; Wikipedia le décrit.

**Fuite de données (leakage).** Utiliser dans le modèle de l'information qui ne serait pas disponible au moment de la prédiction, comme un champ rempli après la résolution d'un incident. Wikipedia décrit la fuite en apprentissage automatique. Elle produit de superbes résultats de test et des prévisions inutiles.

**Incertitude et intervalles.** Une prévision est une distribution de possibilités, non un nombre. Un intervalle de prédiction, décrit sur Wikipedia, donne une plage censée contenir le résultat avec une probabilité énoncée. Rapportez des fourchettes, comme « entre 8 000 et 9 500 contacts, le plus probable 8 700 ». Les méthodes de Monte Carlo, décrites sur Wikipedia, simulent de nombreux futurs possibles pour montrer une plage.

**Scénarios.** Pour les choses qui dépendent de décisions ou d'événements, comme un lancement, la planification par scénarios, décrite sur Wikipedia, élabore quelques histoires plausibles et planifie pour chacune, plutôt qu'une seule prévision. Utilisez des scénarios quand l'avenir pourrait différer par nature du passé.

**Mesures d'exactitude.** Les mesures courantes comparent les prévisions aux résultats, comme l'erreur absolue moyenne en pourcentage, que décrit Wikipedia, et la part de résultats qui tombent dans la fourchette énoncée. Chacune a des faiblesses : l'erreur en pourcentage est instable quand les valeurs sont proches de zéro. Choisissez des mesures qui correspondent à la manière dont les erreurs vous coûtent.

**Classification et scores de risque.** Prédire si quelque chose va arriver, comme l'échec d'un changement ou le dépassement d'un objectif par un ticket, produit un score. Wikipedia décrit la précision et le rappel, les deux façons dont de telles prédictions peuvent se tromper : fausses alarmes et oublis. Les événements rares rendent cela difficile : Wikipedia décrit l'erreur du taux de base, où un détecteur apparemment bon produit surtout de fausses alarmes quand l'événement est rare. Décidez du coût de chaque type d'erreur avant de choisir un seuil.

**Calibration.** Un score de risque est calibré si, parmi les éléments notés à 20 %, environ 20 % se produisent réellement. Wikipedia décrit la calibration en statistique. Un score qui classe bien mais n'est pas calibré peut induire en erreur ceux qui le lisent comme une probabilité.

**Dérive.** Les relations changent à mesure que les services, les utilisateurs et les outils changent. Wikipedia décrit la dérive conceptuelle. Un modèle qui marchait l'an dernier peut échouer après le lancement d'un nouveau produit. Surveillez l'exactitude dans le temps et réentraînez ou reconstruisez quand elle baisse.

**Événements rares et extrêmes.** Les modèles entraînés sur l'histoire ordinaire se comportent mal face à des événements très inhabituels. Wikipedia décrit la théorie du cygne noir, l'idée que des événements rares et à fort impact ne sont pas prévisibles à partir de données ordinaires. Ne comptez pas sur les prévisions pour les risques extrêmes ; utilisez des scénarios, des tests de résistance et des répétitions. Voir le Sujet 3.12 — Gestion de la continuité des services.

**Files d'attente et capacité.** La demande prévue alimente les décisions de capacité. La théorie des files d'attente et la loi de Little, que décrit Wikipedia, relient demande, capacité et attente. Voir le Sujet 3.11 — Disponibilité, capacité et performance et le Sujet 2.3 — Flux et Kanban.

**Les décisions d'abord.** Une prévision n'est utile que si elle change une décision. Avant d'en construire une, écrivez la décision qu'elle éclaire, les seuils d'action et ce que vous ferez à chacun. Si rien ne changerait, ne prévoyez pas.

**Jugement humain.** Les gens connaissent les lancements, les changements de politique et les événements qu'aucun modèle n'a vus. Combinez la sortie du modèle avec le jugement, consignez les ajustements et vérifiez plus tard s'ils ont aidé.

**Comment les angles s'articulent.** La prédiction est le versant tourné vers l'avenir de l'analytique. La pratique agile traite une prévision comme une hypothèse, actualisée souvent. Les techniques d'IA étendent ce qui peut être prédit, sous relecture et avec les précautions ci-dessus. L'automatisation peut agir sur les prédictions, comme mettre à l'échelle avant la demande, avec des limites.

## Bonnes pratiques

1. **Énoncer d'abord la décision et les seuils.** Écrivez quelle action chaque plage de prévision déclencherait et qui décide. Laissez de côté les prévisions qui ne changeraient rien.
2. **Commencer par une référence.** Construisez une prévision simple, comme le profil de l'an dernier ajusté de la croissance, et mesurez son erreur. Utilisez-la comme barre à franchir.
3. **Préférer des méthodes que vous savez expliquer.** Utilisez des méthodes classiques ou des modèles simples sauf si les plus complexes sont nettement meilleurs sur des données mises de côté. Sachez dire en termes simples ce qui pilote la prévision.
4. **Valider honnêtement.** Mettez de côté la période la plus récente, faites du backtesting sur plusieurs périodes et vérifiez l'absence de fuite. Rapportez l'erreur sur des données que le modèle n'a pas vues.
5. **Montrer fourchettes et scénarios.** Donnez une valeur la plus probable et une fourchette plausible. Utilisez des scénarios là où des événements pourraient changer le profil. Ne présentez pas de fausse précision.
6. **Inclure les événements connus.** Ajoutez lancements, échéances, jours fériés et campagnes venant de ceux qui les connaissent. Consignez les ajustements faits par jugement.
7. **Faire correspondre le seuil au coût des erreurs.** Pour les scores de risque, décidez du coût des fausses alarmes et des oublis, fixez le seuil en conséquence et vérifiez la calibration.
8. **Surveiller l'exactitude et la dérive.** Comparez chaque prévision au résultat, suivez l'erreur dans le temps et réentraînez ou reconstruisez quand l'exactitude baisse. Gardez un journal des prévisions pour qu'elles puissent être auditées.
9. **Ne pas trop se fier aux prédictions d'événements rares.** Utilisez des scénarios, des tests de résistance et des répétitions pour les événements graves mais improbables.
10. **Boucler la boucle avec les décisions.** Consignez la décision prise et le résultat, et servez-vous-en pour améliorer la prévision et la règle de décision.

## Questions à discuter avec votre équipe

**Quelles décisions prenons-nous aujourd'hui sur la base d'une conjecture sur l'avenir, et que ferions-nous autrement avec une meilleure ?**
Listez-les : effectifs, capacité, calendrier des mises en production. Attendez-vous à plusieurs. Demandez ensuite d'en choisir une et d'écrire la règle de décision.

**Quelle était l'exactitude de nos trois dernières prévisions, et comment l'avons-nous su ?**
Demandez les chiffres. Attendez-vous à ce que personne n'ait vérifié. Demandez ensuite de comparer les prévisions passées aux valeurs réelles et de convenir de tenir un journal.

**Quelle est la prévision la plus simple qui pourrait marcher pour cela, et de combien un modèle complexe doit-il être meilleur pour se justifier ?**
Construisez la référence. Attendez-vous à ce qu'elle se comporte honorablement. Demandez ensuite de fixer une amélioration minimale pour adopter quelque chose de plus complexe.

**Quels événements connaissons-nous qu'un modèle entraîné sur l'historique ne connaîtrait pas ?**
Listez lancements, échéances et changements de politique. Attendez-vous à beaucoup. Demandez ensuite de décider comment les inclure, comme entrées ou comme ajustements.

**Comment un score de risque pour les changements serait-il utilisé, et quel est le coût d'une fausse alarme par rapport à un oubli ?**
Discutez en termes concrets. Attendez-vous à des vues différentes. Demandez ensuite de convenir d'un seuil et d'une revue des résultats du premier mois.

**Où l'IA pourrait-elle nous aider à prévoir ou à prédire, et comment saurions-nous qu'elle a tort ?**
L'IA peut ajuster des motifs complexes et aussi en inventer. Demandez la comparaison avec des références et le plan de surveillance de la dérive. Demandez ensuite de faire tourner une prévision d'IA à côté de la méthode actuelle pendant un trimestre.

## En pratique : un exemple de gestion des services

Une agence nationale de prêts étudiants exploite un centre d'assistance calme la plus grande partie de l'année et submergé dans les deux semaines précédant la date limite annuelle de candidature. Jusqu'ici, la responsable du centre dotait le pic en se rappelant l'expérience de l'an dernier et en ajoutant une marge. Il y a deux ans, le centre était en sous-effectif, et l'an dernier il a trop dépensé en agents temporaires.

L'analyste du service, chargée d'améliorer la prévision, commence par la décision : combien d'agents réserver six semaines à l'avance, par paliers de cinq, avec un ajustement final deux semaines avant. Elle construit une référence : pour chaque jour des quatre dernières années, le nombre de contacts par rapport aux jours restants avant la date limite, mis à l'échelle du nombre de candidats à ce jour. Sur des données mises de côté de l'année précédente, l'erreur de la référence sur la semaine de pic est de 18 %. Elle essaie un modèle plus complexe qui ajoute la météo, les mentions sur les réseaux sociaux et le jour de la semaine. Sur la même année mise de côté, il améliore l'erreur à 15 %, mais sur l'année d'avant il est moins bon que la référence, et personne ne sait expliquer pourquoi. Elle choisit la référence avec un simple ajustement selon le nombre de nouveaux candidats, et montre à la responsable une fourchette : de 11 000 à 14 500 contacts la semaine du pic, le plus probable 12 500.

Elle interroge l'activité sur les événements connus. Un nouveau formulaire en ligne sera lancé deux semaines avant la date limite, ce qui pourrait augmenter ou réduire les contacts. Elle construit deux scénarios : l'un où le formulaire réduit les contacts de 15 %, l'autre où il en ajoute 10 % à cause de la confusion. La responsable réserve pour le milieu de la fourchette, avec un réservoir d'agents d'astreinte pour le scénario haut. L'analyste consigne la prévision, les scénarios et la décision.

Ce qui change : les contacts réels de la semaine de pic sont de 13 800, dans la fourchette, et le centre atteint son objectif sans trop dépenser. Ce qui reste difficile : le lancement du formulaire a bien ajouté de la confusion, que seul le scénario haut avait anticipée ; la prévision dépend de données sur les candidats qui arrivent tard ; et une cadre supérieure a demandé un chiffre unique, que l'analyste a donné avec la fourchette. Elle consigne l'erreur, 10 % par rapport à la valeur la plus probable, et prévoit de la comparer à la référence et à celle de l'an prochain.

## Quatre perspectives

### Équipes produit et de livraison

Dites tôt aux analystes les lancements, changements et campagnes, car ils déplacent la demande et le risque. Fournissez les données dont les prédictions ont besoin, et utilisez les scores de risque comme invites à poser des questions, non comme verdicts.

### Équipes de service et d'exploitation

Utilisez les prévisions pour planifier les effectifs et la capacité, avec une marge pour le scénario haut. Signalez où les prévisions se sont trompées et pourquoi, afin que la méthode s'améliore.

### Direction et gouvernance

Demandez la décision, la référence, la fourchette et l'historique d'exactitude. Acceptez l'incertitude. Financez les données et le temps de vérification des prévisions. N'exigez pas de chiffres uniques.

### Clients et utilisateurs

Vous profitez de fournisseurs qui se préparent aux pics et aux risques. Dites au fournisseur vos propres projets qui peuvent affecter la demande, comme des campagnes, et signalez les problèmes qui suggèrent qu'une prévision était fausse.

## Agilité, IA, automatisation et analytique

### Agilité

Traitez les prévisions comme des hypothèses, actualisez-les souvent et vérifiez-les après chaque période. Associez les parties prenantes aux hypothèses. Attention : reprévoir sans cesse sans consigner les prévisions antérieures masque à quel point elles se sont trompées.

### IA

Les méthodes d'IA peuvent modéliser de nombreuses variables et des signaux non structurés, et rédiger des résumés de prévisions, sous relecture. Nommez un responsable, comparez avec des références et surveillez la dérive. Attention : une prévision d'IA sans fourchette ni test sur des données mises de côté est une conjecture au vernis poli. Voir le Sujet 5.1 — L'IA dans la gestion des services.

### Automatisation

Automatisez la collecte de données, les exécutions de prévision et les alertes planifiées, et, lorsque c'est sûr, des actions comme la mise à l'échelle avant la charge attendue, avec des limites. Attention : une action automatique sur une mauvaise prévision peut gaspiller de l'argent ou causer du tort ; fixez des bornes et examinez. Voir le Sujet 6.1 — Stratégie d'automatisation.

### Analytique

Mesurez l'erreur de prévision, la couverture des intervalles, la calibration des scores de risque et la valeur des décisions prises. Attention : un modèle à faible erreur moyenne peut échouer aux pics qui comptent le plus ; évaluez là où les erreurs coûtent le plus. Voir le livre *Service Management Metrics* et le Sujet 7.1 — Analytique pour la gestion des services.

## Modes d'échec courants

- **Des prévisions qui ne changent rien.** Aucune décision n'en dépend. Partez de la décision.
- **Un modèle complexe, pas de référence.** Il ne fait pas mieux qu'un modèle simple. Comparez toujours.
- **Sur-ajustement et fuite.** De superbes résultats de test, une mauvaise réalité. Mettez de côté des données ultérieures et vérifiez les entrées.
- **Des chiffres uniques.** Fausse précision. Montrez fourchettes et scénarios.
- **Ignorer les événements connus.** Un modèle manque un lancement. Ajoutez ce que les gens savent.
- **Pas de surveillance.** La dérive passe inaperçue. Suivez l'exactitude dans le temps.
- **Se fier aux prédictions d'événements rares.** Un risque extrême est mal évalué. Utilisez des scénarios et des répétitions.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Piloter | Orchestrer |
|---|---|---|---|---|---|
| Décisions et références | Conjectures | Quelques prévisions | Prévisions liées à des décisions nommées, avec références | Valeur des prévisions examinée | Prévisions intégrées à la planification entre services |
| Méthode et validation | Non vérifiées | Méthodes de base | Méthodes explicables, backtesting et contrôles de fuite | Méthodes comparées et améliorées | Méthodes sélectionnées et surveillées sur un portefeuille |
| Incertitude | Chiffres uniques | Quelques fourchettes | Fourchettes et scénarios par défaut | Couverture des intervalles et calibration mesurées | Incertitude utilisée dans des décisions automatisées avec limites |
| Surveillance | Aucune | Examen occasionnel | Exactitude et dérive suivies | Réentraînement et reconstruction déclenchés par des preuves | Évaluation continue entre modèles |

## Liste de contrôle

- [ ] Chaque prévision nomme la décision et les seuils qu'elle éclaire.
- [ ] Nous comparons chaque modèle à une référence simple.
- [ ] Nous validons sur des données ultérieures mises de côté et vérifions l'absence de fuite.
- [ ] Nous rapportons des fourchettes et utilisons des scénarios là où des événements pourraient changer les profils.
- [ ] Les événements connus de l'activité sont inclus ou consignés comme ajustements.
- [ ] Les scores de risque ont un seuil fixé d'après le coût des fausses alarmes et des oublis, et nous vérifions la calibration.
- [ ] Nous journalisons les prévisions, les comparons aux résultats et surveillons la dérive.
- [ ] Nous utilisons des scénarios et des répétitions pour les événements rares et graves.

## Invites d'IA

**Construire une référence à partir de données.**

```text
Here is a monthly count of [quantity] for the last [number] years: [paste].
Describe the trend and seasonal pattern, produce a simple baseline forecast for the next [period] (state the method and show the calculation), and give an approximate range based on the spread in past years. Do not use any method that needs data I have not provided.
List what you are unsure of.
```

**Vérifier un rapport de prévision.**

```text
Here is a forecast report and how it was built: [paste].
List problems: no baseline comparison, no validation on held-back data, possible leakage, single numbers without ranges, missing known events, and claims that are stronger than the evidence. Quote the text for each. Do not redo the forecast.
List what you are unsure of.
```

**Rédiger des scénarios.**

```text
The decision: [describe]. The uncertain event: [describe]. What we know: [list].
Draft three scenarios (low, middle, high) with the assumption behind each, what we would see early if it were happening, and how our plan would differ. Do not assign probabilities.
List what you are unsure of.
```

## Compétences d'IA

- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md) : à utiliser pour estimer la demande future avec une incertitude énoncée.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md) : à utiliser pour transformer les prévisions en décisions de capacité.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md) : à utiliser pour analyser tendances et saisonnalité.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md) : à utiliser pour choisir et vérifier les méthodes.
- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md) : à utiliser pour prévoir le coût avec des hypothèses.

## Sources principales

- Rob J. Hyndman et George Athanasopoulos, *Forecasting: Principles and Practice* (gratuit en ligne sur otexts.com/fpp3) : un texte clair et pratique sur les méthodes de prévision.
- Nate Silver, *The Signal and the Noise* (2012) : un récit lisible de la prédiction et de ses pièges.
- Wikipedia, « Forecasting » et « Overfitting » : des aperçus du domaine et de son principal piège.
- Wikipedia, « Prediction interval » : comment exprimer l'incertitude.

## Références

1. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
2. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
3. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
4. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
5. Exponential smoothing — Wikipedia — https://en.wikipedia.org/wiki/Exponential_smoothing
6. Autoregressive integrated moving average — Wikipedia — https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average
7. Overfitting — Wikipedia — https://en.wikipedia.org/wiki/Overfitting
8. Backtesting — Wikipedia — https://en.wikipedia.org/wiki/Backtesting
9. Prediction interval — Wikipedia — https://en.wikipedia.org/wiki/Prediction_interval
10. Scenario planning — Wikipedia — https://en.wikipedia.org/wiki/Scenario_planning
11. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
12. Base rate fallacy — Wikipedia — https://en.wikipedia.org/wiki/Base_rate_fallacy
