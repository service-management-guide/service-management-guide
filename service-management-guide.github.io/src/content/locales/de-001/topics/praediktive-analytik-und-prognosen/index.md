# Prädiktive Analytik und Prognosen

**Prognosen und Vorhersagen zu Nachfrage, Kapazität, Incidents und Change-Risiko helfen Teams, sich vorzubereiten, sind aber von Natur aus unsicher. Nutzen Sie zuerst einfache Basislinien, zeigen Sie Spannen statt Einzelwerten, validieren Sie an zurückgehaltenen Daten, überwachen Sie auf Drift und legen Sie die Entscheidungsregel fest, bevor die Prognose erstellt wird.**

## Warum das wichtig ist

Service-Teams bereiten sich ständig auf etwas vor. Wie viele Kontakte kommen in der ersten Woche des neuen Semesters? Wann läuft der Speicher voll? Welche Changes verursachen wahrscheinlich Incidents? Wie viele Menschen sollten während der Rabattaktion in Bereitschaft sein? Entscheidungen über Personal, Kapazität und Risiko beruhen alle auf Annahmen über die Zukunft, ob jemand sie ausspricht oder nicht.

Vorhersage macht diese Annahmen explizit und prüfbar. Eine Prognose des Ticketvolumens im nächsten Monat, mit einer Spanne, lässt sich mit dem vergleichen, was geschieht, und verbessern. Ein Modell, das das Risiko eines Changes bewertet, lässt sich an den gescheiterten Changes prüfen. Gut gemacht ersetzt das Bauchgefühl durch Belege. Schlecht gemacht ersetzt es Bauchgefühl durch falsche Zuversicht: eine einzelne Zahl auf zwei Nachkommastellen, erzeugt von einem Modell, das niemand erklären kann, und geglaubt, weil es wissenschaftlich aussieht.

Vorhersagen gehen aus gewöhnlichen Gründen schief. Die Vergangenheit enthielt das entscheidende Muster nicht. Das Modell passt sich dem Rauschen an. Ein Launch, eine Richtlinienänderung oder ein Ausfall bricht die Beziehung, die das Modell gelernt hat. Ein seltenes Ereignis wird mit einem Werkzeug prognostiziert, das für häufige gebaut ist. Dieses Thema beschreibt die wichtigsten Arten von Prognose und Vorhersage im Service-Management, die Methoden in einfachen Worten und die Gewohnheiten, die sie ehrlich halten. Es baut auf Analytik (Thema 7.1 — Analytik für das Service-Management) und Kapazitätsplanung (Thema 3.11 — Verfügbarkeit, Kapazität und Performance) auf und steht in Beziehung zu AIOps (Thema 5.2 — AIOps) und zur Ökonomie der Cloud (Thema 4.5 — Finanzmanagement und FinOps).

## Kernkonzepte

**Prognose und Vorhersage.** Eine Prognose schätzt künftige Werte einer Größe über die Zeit, etwa die Nachfrage im nächsten Monat. Vorhersage schätzt allgemeiner ein Unbekanntes, etwa ob ein Change scheitern wird. Wikipedia beschreibt Forecasting und Predictive analytics. Beide nutzen Muster in vergangenen Daten, und beide sind unsicher.

**Zeitreihen.** In regelmäßigen Abständen erfasste Daten. Wikipedia beschreibt Time series analysis. Viele Service-Größen, etwa tägliche Ticketzahlen, sind Zeitreihen mit Trend (einem langfristigen Anstieg oder Rückgang), Saisonalität (regelmäßigen Zyklen, etwa wöchentlich oder jährlich) und Rauschen. Wikipedia beschreibt Seasonality. Prognosen müssen alle drei berücksichtigen.

**Basislinien.** Die einfachste Prognose, die funktionieren könnte: „nächste Woche wird wie diese Woche“ oder „dieser Monat wird wie derselbe Monat im Vorjahr, angepasst um Wachstum“. Basislinien sind überraschend schwer zu schlagen. Vergleichen Sie eine anspruchsvolle Methode immer mit einer Basislinie; wenn sie nicht deutlich besser abschneidet, nutzen Sie die Basislinie.

**Klassische Methoden.** Verfahren wie exponentielle Glättung und autoregressive integrierte Gleitende-Durchschnitts-Modelle (ARIMA), die Wikipedia beschreibt, behandeln Trends und Saisonalität für viele Reihen und sind mit komplexeren Werkzeugen oft schwer zu schlagen. Sie sind auch leichter zu erklären.

**Methoden des maschinellen Lernens.** Methoden, die Muster aus vielen Variablen lernen, etwa Regressionsbäume oder neuronale Netze, können zusätzliche Informationen nutzen, etwa geplante Ereignisse. Wikipedia beschreibt Regression analysis und Machine learning allgemein. Sie können gut abschneiden, wenn viele relevante Daten vorliegen, und überanpassen (overfitting), wenn nicht. Siehe Thema 5.1 — KI im Service-Management.

**Überanpassung und Validierung.** Ein Modell, das die Vergangenheit zu genau nachzeichnet, einschließlich ihres Rauschens, schneidet bei neuen Daten schlecht ab. Wikipedia beschreibt Overfitting. Die Verteidigung ist, Daten zurückzuhalten, die das Modell nicht sah, in getrennten Trainings-, Validierungs- und Testmengen, wie Wikipedia es beschreibt, und auf späteren Zeiträumen zu testen als denen, mit denen das Modell gebaut wurde. Bei Zeitreihen heißt das Backtesting; Wikipedia beschreibt es.

**Datenleck (Leakage).** Informationen im Modell zu nutzen, die zum Zeitpunkt der Vorhersage nicht verfügbar wären, etwa ein Feld, das erst nach der Lösung eines Incidents gefüllt wird. Wikipedia beschreibt Leakage im maschinellen Lernen. Es erzeugt beeindruckende Testergebnisse und nutzlose Prognosen.

**Unsicherheit und Intervalle.** Eine Prognose ist eine Verteilung von Möglichkeiten, keine Zahl. Ein Vorhersageintervall (Prediction interval), auf Wikipedia beschrieben, gibt eine Spanne an, die das Ergebnis mit genannter Wahrscheinlichkeit enthalten soll. Berichten Sie Spannen, etwa „zwischen 8.000 und 9.500 Kontakten, am wahrscheinlichsten 8.700“. Monte-Carlo-Methoden, auf Wikipedia beschrieben, simulieren viele mögliche Zukünfte, um eine Spanne zu zeigen.

**Szenarien.** Für Dinge, die von Entscheidungen oder Ereignissen abhängen, etwa einen Launch, entwickelt Szenarioplanung (Scenario planning), auf Wikipedia beschrieben, einige plausible Geschichten und plant für jede, statt einer einzigen Prognose. Nutzen Sie Szenarien, wenn die Zukunft der Art nach von der Vergangenheit abweichen könnte.

**Genauigkeitsmaße.** Gängige Maße vergleichen Prognosen mit Ergebnissen, etwa der mittlere absolute prozentuale Fehler, den Wikipedia beschreibt, und der Anteil der Ergebnisse, die in der genannten Spanne liegen. Jedes hat Schwächen: Der prozentuale Fehler ist instabil, wenn Werte nahe null liegen. Wählen Sie Maße, die dazu passen, wie Fehler Sie kosten.

**Klassifikation und Risikowerte.** Vorherzusagen, ob etwas eintritt, etwa dass ein Change scheitert oder ein Ticket sein Ziel verfehlt, erzeugt einen Wert. Wikipedia beschreibt Precision und Recall, die beiden Arten, auf die solche Vorhersagen falsch sein können: Fehlalarme und Verpasstes. Seltene Ereignisse machen das schwer: Wikipedia beschreibt den Fehlschluss der Grundrate (Base rate fallacy), bei dem ein gut scheinender Detektor überwiegend Fehlalarme erzeugt, wenn das Ereignis selten ist. Entscheiden Sie die Kosten jeder Fehlerart, bevor Sie eine Schwelle wählen.

**Kalibrierung.** Ein Risikowert ist kalibriert, wenn unter den mit 20 Prozent bewerteten Fällen etwa 20 Prozent tatsächlich eintreten. Wikipedia beschreibt Calibration in statistics. Ein Wert, der gut ordnet, aber nicht kalibriert ist, kann Menschen in die Irre führen, die ihn als Wahrscheinlichkeit lesen.

**Drift.** Beziehungen ändern sich, wenn sich Services, Nutzer und Werkzeuge ändern. Wikipedia beschreibt Concept drift. Ein Modell, das letztes Jahr funktionierte, kann nach einem neuen Produkt-Launch versagen. Überwachen Sie die Genauigkeit über die Zeit und trainieren Sie neu oder bauen Sie neu, wenn sie sinkt.

**Seltene und extreme Ereignisse.** Auf gewöhnlicher Historie trainierte Modelle schneiden bei sehr ungewöhnlichen Ereignissen schlecht ab. Wikipedia beschreibt die Black swan theory, die Idee, dass seltene Ereignisse mit großer Wirkung aus gewöhnlichen Daten nicht vorhersagbar sind. Verlassen Sie sich bei Extremrisiken nicht auf Prognosen; nutzen Sie Szenarien, Stresstests und Proben. Siehe Thema 3.12 — Service-Continuity-Management.

**Warteschlangen und Kapazität.** Die Nachfrageprognose speist Kapazitätsentscheidungen. Warteschlangentheorie und das Little'sche Gesetz (Little's law), die Wikipedia beschreibt, setzen Nachfrage, Kapazität und Wartezeit in Beziehung. Siehe Thema 3.11 — Verfügbarkeit, Kapazität und Performance und Thema 2.3 — Fluss und Kanban.

**Zuerst die Entscheidungen.** Eine Prognose ist nur nützlich, wenn sie eine Entscheidung verändert. Schreiben Sie vor dem Bau auf, welche Entscheidung sie informiert, die Handlungsschwellen und was Sie bei jeder tun werden. Wenn sich nichts ändern würde, prognostizieren Sie nicht.

**Menschliches Urteil.** Menschen wissen von Launches, Richtlinienänderungen und Ereignissen, die kein Modell gesehen hat. Verbinden Sie die Modellausgabe mit Urteilskraft, halten Sie die Anpassungen fest und prüfen Sie später, ob sie geholfen haben.

**Wie die Blickwinkel passen.** Vorhersage ist die vorausschauende Seite der Analytik. Agile Praxis behandelt eine Prognose als Hypothese, oft aufgefrischt. KI-Techniken erweitern, was sich vorhersagen lässt, unter Prüfung und mit den obigen Vorbehalten. Automatisierung kann auf Vorhersagen handeln, etwa vor der Nachfrage skalieren, mit Limits.

## Bewährte Praktiken

1. **Nennen Sie zuerst Entscheidung und Schwellen.** Schreiben Sie auf, welche Handlung jede Prognosespanne auslösen würde und wer entscheidet. Lassen Sie Prognosen weg, die nichts verändern würden.
2. **Beginnen Sie mit einer Basislinie.** Bauen Sie eine einfache Prognose, etwa das Muster des Vorjahres angepasst um Wachstum, und messen Sie ihren Fehler. Nutzen Sie sie als Latte, die zu überspringen ist.
3. **Bevorzugen Sie Methoden, die Sie erklären können.** Nutzen Sie klassische Methoden oder einfache Modelle, es sei denn, komplexe sind an zurückgehaltenen Daten klar besser. Können Sie in einfachen Worten sagen, was die Prognose treibt.
4. **Validieren Sie ehrlich.** Halten Sie den jüngsten Zeitraum zurück, führen Sie Backtests über mehrere Zeiträume durch und prüfen Sie auf Datenlecks. Berichten Sie den Fehler an Daten, die das Modell nicht sah.
5. **Zeigen Sie Spannen und Szenarien.** Geben Sie einen wahrscheinlichsten Wert und eine plausible Spanne an. Nutzen Sie Szenarien, wo Ereignisse das Muster verändern könnten. Präsentieren Sie keine falsche Genauigkeit.
6. **Beziehen Sie bekannte Ereignisse ein.** Ergänzen Sie Launches, Fristen, Feiertage und Kampagnen von denen, die sie kennen. Halten Sie per Urteil vorgenommene Anpassungen fest.
7. **Stimmen Sie die Schwelle auf die Fehlerkosten ab.** Entscheiden Sie bei Risikowerten die Kosten von Fehlalarmen und Verpasstem, setzen Sie die Schwelle entsprechend und prüfen Sie die Kalibrierung.
8. **Überwachen Sie Genauigkeit und Drift.** Vergleichen Sie jede Prognose mit dem Ergebnis, verfolgen Sie den Fehler über die Zeit und trainieren oder bauen Sie neu, wenn die Genauigkeit sinkt. Führen Sie ein Prognoseprotokoll, damit sie auditierbar sind.
9. **Vertrauen Sie Vorhersagen seltener Ereignisse nicht zu sehr.** Nutzen Sie Szenarien, Stresstests und Proben für schwere, aber unwahrscheinliche Ereignisse.
10. **Schließen Sie den Kreis mit Entscheidungen.** Halten Sie die getroffene Entscheidung und das Ergebnis fest und nutzen Sie es, um Prognose und Entscheidungsregel zu verbessern.

## Fragen für die Diskussion im Team

**Welche Entscheidungen treffen wir heute aufgrund einer Vermutung über die Zukunft, und was würden wir mit einer besseren anders tun?**
Listen Sie sie auf: Personal, Kapazität, Release-Zeitpunkt. Rechnen Sie mit mehreren. Wählen Sie anschließend eine und schreiben Sie die Entscheidungsregel auf.

**Wie genau waren unsere letzten drei Prognosen, und wie haben wir es herausgefunden?**
Bitten Sie um die Zahlen. Rechnen Sie damit, dass niemand prüfte. Vergleichen Sie anschließend frühere Prognosen mit den Ist-Werten und vereinbaren Sie, ein Protokoll zu führen.

**Was ist die einfachste Prognose, die hierfür funktionieren könnte, und wie viel besser muss ein komplexes Modell sein, um sich zu rechtfertigen?**
Bauen Sie die Basislinie. Rechnen Sie damit, dass sie respektabel abschneidet. Legen Sie anschließend eine Mindestverbesserung für die Einführung von etwas Komplexerem fest.

**Welche Ereignisse kennen wir, die ein auf Historie trainiertes Modell nicht kennt?**
Listen Sie Launches, Fristen und Richtlinienänderungen auf. Rechnen Sie mit vielen. Entscheiden Sie anschließend, wie Sie sie einbeziehen, als Eingaben oder als Anpassungen.

**Wie würde ein Risikowert für Changes genutzt, und was kostet ein Fehlalarm gegenüber Verpasstem?**
Besprechen Sie es konkret. Rechnen Sie mit unterschiedlichen Ansichten. Vereinbaren Sie anschließend eine Schwelle und eine Überprüfung der Ergebnisse des ersten Monats.

**Wo könnte KI uns beim Prognostizieren oder Vorhersagen helfen, und woran würden wir merken, dass sie falsch lag?**
KI kann komplexe Muster anpassen und auch erfinden. Bitten Sie um den Vergleich mit Basislinien und den Plan zur Drift-Überwachung. Lassen Sie anschließend eine KI-Prognose ein Quartal lang neben der aktuellen Methode laufen.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Studienkredit-Behörde betreibt einen Support-Desk, der den größten Teil des Jahres ruhig ist und in den zwei Wochen vor der jährlichen Antragsfrist überwältigt wird. Bisher besetzt der Leiter des Desks die Spitze, indem er sich an die Erfahrung des Vorjahres erinnert und einen Puffer aufschlägt. Vor zwei Jahren war der Desk unterbesetzt, und letztes Jahr gab er zu viel für Zeitarbeitskräfte aus.

Die Service-Analystin, beauftragt, die Prognose zu verbessern, beginnt mit der Entscheidung: wie viele Agenten sechs Wochen im Voraus zu buchen sind, in Fünferschritten, mit einer letzten Anpassung zwei Wochen vorher. Sie baut eine Basislinie: für jeden Tag der letzten vier Jahre die Zahl der Kontakte relativ zu den Tagen bis zur Frist, skaliert mit der Zahl der bisherigen Antragstellenden. An zurückgehaltenen Daten des Vorjahres liegt der Fehler der Basislinie in der Spitzenwoche bei 18 Prozent. Sie probiert ein komplexeres Modell, das Wetter, Social-Media-Erwähnungen und den Wochentag ergänzt. Am selben zurückgehaltenen Jahr verbessert es den Fehler auf 15 Prozent, im Jahr davor ist es aber schlechter als die Basislinie, und niemand kann erklären, warum. Sie wählt die Basislinie mit einer einfachen Anpassung für die Zahl der neuen Antragstellenden und zeigt dem Leiter eine Spanne: 11.000 bis 14.500 Kontakte in der Spitzenwoche, am wahrscheinlichsten 12.500.

Sie fragt das Geschäft nach bekannten Ereignissen. Ein neues Online-Formular geht zwei Wochen vor der Frist live, was Kontakte erhöhen oder senken könnte. Sie baut zwei Szenarien: eines, in dem das Formular die Kontakte um 15 Prozent senkt, und eines, in dem es wegen Verwirrung 10 Prozent hinzufügt. Der Leiter bucht für die Mitte der Spanne, mit einem Bereitschaftspool von Agenten für das obere Szenario. Die Analystin hält die Prognose, die Szenarien und die Entscheidung fest.

Was sich ändert: Die tatsächlichen Kontakte der Spitzenwoche liegen bei 13.800, innerhalb der Spanne, und der Desk erreicht sein Ziel ohne Mehrausgaben. Was schwierig bleibt: Das Formular hat tatsächlich Verwirrung hinzugefügt, was nur das obere Szenario vorwegnahm; die Prognose hängt von Daten über Antragstellende ab, die spät eintreffen; und eine leitende Führungskraft bat um eine einzelne Zahl, die die Analystin mit der Spanne lieferte. Sie hält den Fehler fest, 10 Prozent gegenüber dem wahrscheinlichsten Wert, und plant, ihn mit der Basislinie und mit dem nächsten Jahr zu vergleichen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Sagen Sie Analysten früh Bescheid über Launches, Changes und Kampagnen, denn sie bewegen Nachfrage und Risiko. Stellen Sie die Daten bereit, die Vorhersagen brauchen, und nutzen Sie Risikowerte als Anlass für Fragen, nicht als Urteile.

### Service- und Betriebsteams

Nutzen Sie Prognosen, um Personal und Kapazität zu planen, mit einem Puffer für das obere Szenario. Berichten Sie, wo Prognosen falsch lagen und warum, damit die Methode besser wird.

### Führung und Governance

Verlangen Sie die Entscheidung, die Basislinie, die Spanne und die Genauigkeitsbilanz. Akzeptieren Sie Unsicherheit. Finanzieren Sie Daten und die Zeit, Prognosen zu prüfen. Verlangen Sie keine Einzelwerte.

### Kunden und Nutzer

Sie profitieren, wenn Anbieter sich auf Spitzen und Risiken vorbereiten. Sagen Sie dem Anbieter, was Sie selbst planen, das die Nachfrage beeinflussen kann, etwa Kampagnen, und melden Sie Probleme, die auf eine danebenliegende Prognose hindeuten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Prognosen als Hypothesen, frischen Sie sie oft auf und prüfen Sie sie nach jedem Zeitraum. Beziehen Sie Stakeholder in die Annahmen ein. Vorsicht: Ständiges Neuprognostizieren ohne Aufzeichnung früherer Prognosen verbirgt, wie falsch sie lagen.

### KI

KI-Methoden können viele Variablen und unstrukturierte Signale modellieren und Zusammenfassungen von Prognosen entwerfen, unter Prüfung. Benennen Sie eine verantwortliche Person, vergleichen Sie mit Basislinien und überwachen Sie Drift. Vorsicht: Eine KI-Prognose ohne Spanne oder Test an zurückgehaltenen Daten ist eine Vermutung mit polierter Oberfläche. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Datenerfassung, Prognoseläufe und geplante Alarme und, wo sicher, Handlungen wie Skalieren vor erwarteter Last, mit Limits. Vorsicht: Eine automatische Handlung auf eine falsche Prognose kann Geld verschwenden oder Schaden anrichten; setzen Sie Grenzen und überprüfen Sie. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Messen Sie Prognosefehler, Intervallabdeckung, Kalibrierung von Risikowerten und den Wert getroffener Entscheidungen. Vorsicht: Ein Modell mit niedrigem Durchschnittsfehler kann bei den Spitzen versagen, die am meisten zählen; bewerten Sie dort, wo Fehler am meisten kosten. Siehe das Buch *Service Management Metrics* und Thema 7.1 — Analytik für das Service-Management.

## Häufige Fehlermuster

- **Prognosen, die nichts verändern.** Keine Entscheidung hängt von ihnen ab. Beginnen Sie bei der Entscheidung.
- **Komplexes Modell, keine Basislinie.** Es schneidet nicht besser ab als ein einfaches. Vergleichen Sie immer.
- **Überanpassung und Datenlecks.** Großartige Testergebnisse, schlechte Realität. Halten Sie spätere Daten zurück und prüfen Sie Eingaben.
- **Einzelwerte.** Falsche Genauigkeit. Zeigen Sie Spannen und Szenarien.
- **Bekannte Ereignisse ignorieren.** Ein Modell verfehlt einen Launch. Ergänzen Sie, was Menschen wissen.
- **Kein Monitoring.** Drift bleibt unbemerkt. Verfolgen Sie die Genauigkeit über die Zeit.
- **Vorhersagen seltener Ereignisse vertrauen.** Ein Extremrisiko wird falsch bepreist. Nutzen Sie Szenarien und Proben.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Entscheidungen und Basislinien | Rätselraten | Einige Prognosen | An benannte Entscheidungen gebundene Prognosen, mit Basislinien | Wert der Prognosen überprüft | Prognosen in die Planung über Services hinweg integriert |
| Methode und Validierung | Ungeprüft | Grundlegende Methoden | Erklärbare Methoden, Backtesting und Leck-Prüfungen | Methoden verglichen und verbessert | Methoden über ein Portfolio gewählt und überwacht |
| Unsicherheit | Einzelwerte | Einige Spannen | Spannen und Szenarien Standard | Intervallabdeckung und Kalibrierung gemessen | Unsicherheit in automatisierten Entscheidungen mit Limits genutzt |
| Monitoring | Keines | Gelegentliche Überprüfung | Genauigkeit und Drift verfolgt | Neutraining und Neuaufbau durch Belege ausgelöst | Laufende Bewertung über Modelle hinweg |

## Checkliste

- [ ] Jede Prognose nennt die Entscheidung und die Schwellen, die sie informiert.
- [ ] Wir vergleichen jedes Modell mit einer einfachen Basislinie.
- [ ] Wir validieren an zurückgehaltenen späteren Daten und prüfen auf Datenlecks.
- [ ] Wir berichten Spannen und nutzen Szenarien, wo Ereignisse Muster verändern könnten.
- [ ] Bekannte Ereignisse aus dem Geschäft sind einbezogen oder als Anpassungen festgehalten.
- [ ] Risikowerte haben eine Schwelle, die nach den Kosten von Fehlalarmen und Verpasstem gesetzt ist, und wir prüfen die Kalibrierung.
- [ ] Wir protokollieren Prognosen, vergleichen sie mit Ergebnissen und überwachen Drift.
- [ ] Wir nutzen Szenarien und Proben für seltene, schwere Ereignisse.

## KI-Prompts

**Bauen Sie eine Basislinie aus Daten.**

```text
Here is a monthly count of [quantity] for the last [number] years: [paste].
Describe the trend and seasonal pattern, produce a simple baseline forecast for the next [period] (state the method and show the calculation), and give an approximate range based on the spread in past years. Do not use any method that needs data I have not provided.
List what you are unsure of.
```

**Prüfen Sie einen Prognosebericht.**

```text
Here is a forecast report and how it was built: [paste].
List problems: no baseline comparison, no validation on held-back data, possible leakage, single numbers without ranges, missing known events, and claims that are stronger than the evidence. Quote the text for each. Do not redo the forecast.
List what you are unsure of.
```

**Entwerfen Sie Szenarien.**

```text
The decision: [describe]. The uncertain event: [describe]. What we know: [list].
Draft three scenarios (low, middle, high) with the assumption behind each, what we would see early if it were happening, and how our plan would differ. Do not assign probabilities.
List what you are unsure of.
```

## KI-Skills

- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): nutzen Sie ihn, um künftige Nachfrage mit genannter Unsicherheit zu schätzen.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): nutzen Sie ihn, um Prognosen in Kapazitätsentscheidungen zu übersetzen.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): nutzen Sie ihn, um Trends und Saisonalität zu analysieren.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): nutzen Sie ihn, um Methoden zu wählen und zu prüfen.
- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): nutzen Sie ihn, um Kosten mit Annahmen zu prognostizieren.

## Wichtige Quellen

- Rob J. Hyndman und George Athanasopoulos, *Forecasting: Principles and Practice* (frei online unter otexts.com/fpp3): ein klarer, praktischer Text zu Prognosemethoden.
- Nate Silver, *The Signal and the Noise* (2012): eine gut lesbare Darstellung von Vorhersage und ihren Fallstricken.
- Wikipedia, „Forecasting“ und „Overfitting“: Überblicke über das Feld und seine Hauptfalle.
- Wikipedia, „Prediction interval“: wie man Unsicherheit ausdrückt.

## Literaturverzeichnis

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
