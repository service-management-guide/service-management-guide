# Analytik für das Service-Management

**Analytik verwandelt Service-Daten in Antworten auf Fragen: Was ist geschehen, warum, was wird geschehen und was ist zu tun. Sie verdient Vertrauen, wenn jede Analyse von einer benannten Frage ausgeht, ihre Daten und Grenzen nennt, Korrelation von Ursache trennt und in einer Entscheidung endet, die jemand treffen kann.**

## Warum das wichtig ist

Service-Teams erzeugen sehr viele Daten: Tickets, Logs, Metriken, Umfragen, Change-Datensätze, Kostenberichte. Das meiste liegt ungenutzt oder wird in Dashboards zusammengefasst, die niemand mit einer Entscheidung verbinden kann. Die Berichte beschreiben Aktivität, etwa geschlossene Tickets, und sagen wenig darüber, ob es Kunden besser geht.

Analytik ist die Disziplin, aus Daten Antworten zu gewinnen. Wikipedia beschreibt Analytics als das Entdecken, Interpretieren und Kommunizieren bedeutsamer Muster in Daten. Im Service-Management kann sie zeigen, woher Nachfrage kommt, warum Incidents wiederkehren, wo Arbeit wartet, welche Changes riskant sind und ob eine Verbesserung geholfen hat. Sie kann auch in die Irre führen. Ein Diagramm kann autoritativ wirken und doch auf einer verzerrten Stichprobe, einem Zufall oder einer still geänderten Definition beruhen.

Dieses Thema ist der Einstieg in Teil 7. Es beschreibt die Arten der Analytik, die Schritte einer soliden Analyse und die Fallen, die selbst sorgfältige Menschen erwischen. Metrikdefinitionen überlässt es dem Begleitbuch *Service Management Metrics* und verweist für die nächsten Themen auf Grundlagen (Thema 7.2 — Datengrundlagen und Data Governance), Messung (Thema 7.3 — Messung und Berichtswesen), Observability (Thema 7.4 — Observability und Telemetrie), Vorhersage (Thema 7.5 — Prädiktive Analytik und Prognosen), Fluss (Thema 7.6 — Prozess- und Wertstromanalyse) und Erlebnis (Thema 7.7 — Erlebnis- und Stimmungsanalyse). Die Beschreibung der neuesten ITIL-Version durch den Eigentümer betont messbare Ergebnisse (siehe Thema 1.3 — ITIL 5), die von gut gemachter Analytik abhängen.

## Kernkonzepte

**Vier Arten der Analytik.** Eine gängige Einteilung unterscheidet:

| Art | Frage | Beispiel aus der Service-Arbeit |
|---|---|---|
| Deskriptiv | Was ist geschehen? | Incidents pro Monat nach Service |
| Diagnostisch | Warum ist es geschehen? | Was die wiederkehrenden Incidents gemeinsam haben |
| Prädiktiv | Was wird wahrscheinlich geschehen? | Prognose des Ticketvolumens im nächsten Quartal |
| Präskriptiv | Was sollen wir tun? | Personalstärke, die ein Ziel mit den geringsten Kosten erreicht |

Wikipedia beschreibt Descriptive, Predictive und Prescriptive analytics. Jede baut auf der vorherigen auf. Die meisten Service-Teams ziehen den größten Nutzen daraus, die ersten beiden gut zu beherrschen.

**Mit einer Frage beginnen.** Eine Analyse beginnt mit einer Entscheidung, die jemand treffen muss, etwa ob die Abendschicht aufgestockt werden soll, und macht daraus eine Frage, die die Daten beantworten können. Ohne Frage wird Analyse zur Suche nach etwas Interessantem, und der Wikipedia-Artikel zu Data dredging erklärt, wie man so Muster findet, die nur Zufall sind.

**Daten.** Was Sie haben, woher es stammt, wie es erfasst wurde und was es auslässt. Ticketdaten zeigen, was Menschen meldeten und wie Agenten es kategorisierten, nicht alles, was geschah. Siehe Thema 7.2 — Datengrundlagen und Data Governance. Wikipedia beschreibt Data quality als Eignung für den Zweck.

**Deskriptive Statistik.** Zusammenfassungen wie Anzahlen, Mediane, Perzentile und Streuung. Wikipedia beschreibt Descriptive statistics. Für Service-Daten sind Mediane und Perzentile meist nützlicher als Durchschnitte, die lange Ausläufer verbergen, und Ausreißer, auf Wikipedia beschrieben, verdienen einen Blick statt automatischer Entfernung.

**Explorative Analyse.** Die Daten ansehen, um Form, Qualität und Überraschungen zu erkennen, bevor man Ideen testet. Wikipedia beschreibt Exploratory data analysis. Sie verhindert dumme Fehler, etwa einen fehlenden Wert als null zu behandeln.

**Stichproben und Verzerrung.** Die meisten Analysen nutzen eine Stichprobe, und Stichproben können in die Irre führen. Wikipedia beschreibt Sampling und Selection bias. Umfrageantworten kommen von denen, die antworten, und Support-Tickets von denen, die Sie kontaktieren. Survivorship bias, ebenfalls dort beschrieben, entsteht, wenn man nur untersucht, was übrig bleibt, etwa Kunden, die geblieben sind.

**Korrelation und Ursache.** Dass sich zwei Dinge gemeinsam bewegen, heißt nicht, dass eines das andere verursacht. Wikipedia beschreibt das Problem unter „correlation does not imply causation“ und Confounding, bei dem ein dritter Faktor beide antreibt. Ticketvolumen und Serveranzahl können gemeinsam steigen, weil das Geschäft wuchs. Kausale Aussagen brauchen mehr als ein Diagramm: einen kontrollierten Vergleich oder sorgfältiges Abwägen von Alternativen. Wikipedia beschreibt Causal inference und A/B testing als Wege, etwas über Ursachen zu lernen.

**Paradoxien und Fallen.** Das Simpson-Paradoxon, auf Wikipedia beschrieben, ist ein Fall, in dem sich ein Trend, der in mehreren Gruppen erscheint, umkehrt, wenn man die Gruppen zusammenfasst. Der Fehlschluss der Grundrate (Base rate fallacy), ebenfalls dort beschrieben, ist der Fehler, zu ignorieren, wie häufig etwas ist, sodass ein guter Detektor für ein seltenes Ereignis überwiegend Fehlalarme erzeugt. Solche Fallen zu kennen ist eine Verteidigung.

**Statistische Signifikanz und Unsicherheit.** Ein Ergebnis ist „signifikant“, wenn es unter genannten Annahmen unwahrscheinlich allein auf Zufall beruht. Wikipedia beschreibt Hypothesis tests und Confidence intervals. Signifikanz ist nicht Wichtigkeit: Ein winziger Effekt kann in einem großen Datensatz signifikant sein, und ein großer Effekt in einem kleinen unsicher. Zeigen Sie Spannen, nicht nur Einzelwerte.

**Visualisierung.** Diagramme helfen Menschen, Muster zu sehen, und schlechte Diagramme führen in die Irre. Wikipedia beschreibt Data und Information visualization. Wählen Sie Formen, die zur Frage passen, beschriften Sie Achsen und Einheiten, beginnen Sie Skalen ehrlich und zeigen Sie Unsicherheit. Dashboards, auf Wikipedia als visuelle Anzeigen wichtiger Informationen beschrieben, sollten Entscheidungen dienen und wenige sein.

**Zeitreihen.** Viele Service-Daten werden über die Zeit erfasst, mit Trends, saisonalen Mustern und plötzlichen Sprüngen. Wikipedia beschreibt Time series analysis. Vergleichen Sie Gleiches mit Gleichem: diesen Montag mit anderen Montagen. Siehe Thema 7.5 — Prädiktive Analytik und Prognosen.

**Modelle und maschinelles Lernen.** Statistische Modelle und Modelle des maschinellen Lernens können vorhersagen, klassifizieren und gruppieren. Sie brauchen Trainings- und Testdaten, Validierung und Überwachung auf Drift. Siehe Thema 5.1 — KI im Service-Management. Ein Modell ist keine Quelle der Wahrheit, sondern ein Werkzeug mit Annahmen.

**Goodhartsches Gesetz.** Wird eine Kennzahl zum Ziel, hört sie auf, eine gute Kennzahl zu sein. Wikipedia beschreibt Goodhart's law. Analytik, die zur Beurteilung von Menschen oder Teams dient, lädt zu Verhaltensänderungen ein, die die Zahl verbessern und nicht das Ergebnis. Nutzen Sie Kennzahlen zum Lernen, koppeln Sie sie mit anderen und sagen Sie, wie jede manipuliert werden könnte. Siehe das Buch *Service Management Metrics*.

**Ethik und Datenschutz.** Analytik über Menschen, etwa Agentenproduktivität oder Nutzerverhalten, wirft Fragen von Einwilligung, Fairness und Verhältnismäßigkeit auf. Wikipedia beschreibt Privacy und Algorithmic bias an anderer Stelle. Erheben Sie nur, was Sie brauchen, aggregieren Sie, wo Sie können, und seien Sie offen darüber, was Sie analysieren und warum. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Kommunikation.** Eine Analyse, die niemand versteht, ändert nichts. Nennen Sie in einfachen Worten die Frage, die Antwort, die Zuversicht, die Grenzen und die empfohlene Entscheidung, mit einem Diagramm, wo es hilft.

**Wie die Blickwinkel passen.** Analytik ist der vierte Blickwinkel und dient den anderen drei. Agile Praxis nutzt sie, um zu prüfen, ob eine Änderung geholfen hat. KI nutzt Daten als Treibstoff und kann Analyse beschleunigen, unter Prüfung. Automatisierung erzeugt Daten und handelt danach. Analytik braucht auch die ersten drei Blickwinkel, um Erkenntnis in Veränderung zu verwandeln.

## Bewährte Praktiken

1. **Beginnen Sie mit einer Entscheidung.** Schreiben Sie auf, wer was bis wann entscheidet und welche Belege seine Meinung ändern würden. Richten Sie die Analyse danach aus.
2. **Machen Sie aus der Entscheidung eine präzise Frage.** Definieren Sie die Begriffe, etwa „gelöst“ oder „wiederholter Incident“, die Grundgesamtheit und den Zeitraum, bevor Sie die Daten anfassen.
3. **Kennen Sie Ihre Daten.** Dokumentieren Sie Quellen, wie Datensätze entstehen, bekannte Lücken und Definitionsänderungen im Zeitverlauf. Prüfen Sie eine Stichprobe an der Realität.
4. **Schauen Sie, bevor Sie testen.** Untersuchen Sie zuerst Verteilungen, fehlende Werte und Ausreißer. Beheben Sie Fehler und halten Sie fest, was Sie geändert haben.
5. **Nutzen Sie robuste Zusammenfassungen.** Berichten Sie Mediane und Perzentile mit Anzahlen und zeigen Sie die Streuung. Vergleichen Sie Gleiches mit Gleichem, etwa denselben Wochentag oder dieselbe Jahreszeit.
6. **Hüten Sie sich vor Verzerrung.** Fragen Sie, wer in den Daten fehlt und warum. Nennen Sie bei der Präsentation die Grenzen der Stichprobe.
7. **Behaupten Sie keine Ursache ohne Grundlage.** Sagen Sie „verbunden mit“, solange Sie keinen Vergleich oder ein starkes Argument haben. Listen Sie alternative Erklärungen auf und sagen Sie, wie Sie sie geprüft haben.
8. **Zeigen Sie Unsicherheit.** Geben Sie Spannen an und nennen Sie Stichprobengrößen. Vermeiden Sie falsche Genauigkeit.
9. **Gestalten Sie Visualisierungen für die Leserschaft.** Halten Sie Diagramme einfach, ehrlich und beschriftet. Bevorzugen Sie wenige bedeutsame Dashboards gegenüber vielen ungenutzten.
10. **Schließen Sie den Kreis.** Halten Sie die getroffene Entscheidung und das Ergebnis fest und prüfen Sie später, ob die Analyse geholfen hat. Legen Sie Berichte still, die niemand nutzt.

## Fragen für die Diskussion im Team

**Welche Entscheidung haben wir zuletzt mit Daten getroffen, und was sagten die Daten tatsächlich?**
Bitten Sie um das Beispiel. Rechnen Sie damit, dass Daten eine bereits getroffene Entscheidung stützten. Wählen Sie anschließend eine anstehende Entscheidung und schreiben Sie zuerst die Frage auf.

**Welche unserer Berichte liest oder nutzt niemand?**
Prüfen Sie die Nutzung. Rechnen Sie mit mehreren. Legen Sie anschließend einen still und fragen Sie, ob ihn jemand vermisst.

**Wo könnten unsere Daten verzerrt oder unvollständig sein, und wer fehlt?**
Denken Sie an Tickets, Umfragen und Logs. Rechnen Sie damit, dass viele Nutzer uns nie kontaktieren. Wählen Sie anschließend eine Quelle und ergänzen Sie eine Prüfung aus einer anderen.

**Was würde uns überzeugen, dass eine jüngste Verbesserung tatsächlich gewirkt hat?**
Besprechen Sie Belege. Rechnen Sie mit dem Verlass auf Vorher-nachher-Diagramme. Listen Sie anschließend andere Dinge auf, die sich zur selben Zeit änderten.

**Welche unserer Zahlen könnten manipuliert werden, und woran würden wir es merken?**
Wählen Sie eine Kennzahl, die für die Beurteilung von jemandem zählt. Rechnen Sie mit kreativen Antworten. Vereinbaren Sie anschließend eine Stichprobenprüfung oder eine gekoppelte Kennzahl.

**Wie könnte KI uns beim Analysieren unserer Daten helfen, und wie würden wir ihre Arbeit prüfen?**
KI kann Daten zusammenfassen, Diagramme entwerfen und Muster vorschlagen. Sie kann auch erfundene Befunde behaupten. Fragen Sie, wer prüft und wie. Wiederholen Sie anschließend eine KI-Analyse von Hand an einem kleinen Datensatz.

## In der Praxis: ein Beispiel aus dem Service-Management

Der IT-Service-Desk einer nationalen Steuerbehörde bearbeitet 25.000 Kontakte im Monat. Ein leitender Manager hat ein Dashboard, das zeigt, dass die durchschnittliche Lösungszeit binnen eines Jahres um 20 Prozent gestiegen ist, und bittet die Desk-Leiterin, sie „wieder zu senken“. Die Leiterin beschließt, vor dem Reagieren zu analysieren.

Sie beginnt mit der Frage: Ist die Zeit bis zur Lösung eines typischen Kontakts gestiegen, und wenn ja, bei welchen Arten von Kontakten? Sie prüft zuerst die Daten. Im Frühjahr änderte das Ticket-Werkzeug, wie „gelöst“ erfasst wird, sodass Tickets gelöst sind, wenn der Agent sie markiert, und nicht, wenn der Nutzer bestätigt. Sie stellt auch fest, dass eine neue Kategorie komplexer Anfragen „Zugriff auf das Fallsystem“, im Herbst eingeführt, 12 Prozent der Kontakte ausmacht und fünfmal so lange dauert wie der Rest.

Sie rechnet mit Medianen und 90. Perzentilen neu, aufgeteilt nach Kategorie. Für die alten Kategorien ist der Median der Lösungszeit unverändert; das 90. Perzentil ist leicht gestiegen. Der Gesamtdurchschnitt stieg vor allem wegen der neuen Kategorie und der geänderten Definition. Sie vermerkt, dass die Daten nicht zeigen können, warum manche Zugriffsanfragen lange dauern, nur dass sie es tun.

Sie legt eine einseitige Zusammenfassung vor: Der Durchschnitt stieg wegen einer neuen Art von Arbeit und einer Definitionsänderung; die meisten Kontakte sind so schnell wie zuvor; der lange Ausläufer ist ein wenig gewachsen, und die komplexen Anfragen brauchen einen Blick. Sie vermeidet es zu sagen, die neue Kategorie habe den Anstieg im langen Ausläufer „verursacht“, da auch Personalwechsel stattfanden. Sie schlägt zwei Maßnahmen vor: eine Studie der Zugriffsanfragen mit einer Stichprobe von 40 Tickets und einen monatlichen Bericht nach Kategorie mit Perzentilen.

Was sich ändert: Der Manager hört auf, eine pauschale Senkung zu verlangen, und bittet um die Studie der Zugriffsanfragen. Was schwierig bleibt: Die Definitionsänderung lässt sich nicht ganz rückgängig machen, sodass Vergleiche über den Bruch hinweg ungefähr bleiben; die Stichprobe von 40 Tickets wurde von einer Person gelesen und ist anfällig für Verzerrung; und der Manager bevorzugt weiterhin eine einzelne Zahl. Die Leiterin behält beide Sichten und erklärt jedes Mal die Grenzen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Nutzen Sie Daten, um zu testen, ob Änderungen geholfen haben, und instrumentieren Sie Ihr Produkt, damit nützliche Daten existieren. Teilen Sie Definitionen und Grenzen mit denen, die Ihre Daten nutzen, und vermeiden Sie Übertreibung aus einem einzelnen Diagramm.

### Service- und Betriebsteams

Wissen Sie, woher Ihre Daten stammen und was sie verfehlen. Berichten Sie Mediane und Perzentile mit Anzahlen und untersuchen Sie lange Ausläufer. Sagen Sie Analysten Bescheid, wenn sich ein Werkzeug oder eine Kategorie ändert.

### Führung und Governance

Verlangen Sie die Frage, die Daten, die Grenzen und die Entscheidung, nicht nur ein Diagramm. Nutzen Sie keine einzelnen Kennzahlen, um Menschen zu beurteilen. Finanzieren Sie Datenqualität und analytische Fähigkeiten.

### Kunden und Nutzer

Sie sind in den Daten und fehlen oft darin. Man sollte Sie fragen, was Ihnen wichtig ist, und der Anbieter sollte sagen, wie Ihre Informationen verwendet werden. Sagen Sie dem Anbieter, wenn Zahlen nicht zu Ihrer Erfahrung passen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nutzen Sie Analytik als Feedback-Werkzeug: eine Erwartung setzen, eine kleine Änderung vornehmen, die Daten prüfen und entscheiden. Teilen Sie Ergebnisse mit Stakeholdern. Vorsicht: Warten Sie nicht auf perfekte Daten, bevor Sie ein kleines Experiment angehen; behandeln Sie aber auch ein kurzes Vorher-nachher-Diagramm nicht als Beweis.

### KI

KI kann Daten bereinigen, Abfragen und Diagramme entwerfen, Ergebnisse zusammenfassen und Muster vorschlagen, mit einer verantwortlichen Person und Prüfungen. Vorsicht: Eine KI-generierte Analyse kann Befunde behaupten, die die Daten nicht stützen, oder die falsche Methode nutzen; verlangen Sie, dass sie ihre Berechnungen zeigt, und wiederholen Sie eine Stichprobe von Hand. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Datenerfassung, Bereinigung und Routineberichte, mit Dokumentation jedes Schritts. Vorsicht: Automatisierte Berichte können weiterlaufen, nachdem sich ihre Bedeutung geändert hat; überprüfen Sie Definitionen und Quellen regelmäßig. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Dieses Thema ist der Blickwinkel selbst: Fragen, Daten, Methoden, Unsicherheit und Entscheidungen. Vorsicht: Lassen Sie die Datenmenge nicht für Erkenntnis stehen; messen Sie, ob Analysen Entscheidungen verändert haben. Siehe das Buch *Service Management Metrics* für Metrikdefinitionen und Leitplanken.

## Häufige Fehlermuster

- **Berichte ohne Entscheidungen.** Dashboards, die niemand nutzt. Beginnen Sie mit einer Entscheidung und legen Sie ungenutzte Berichte still.
- **Durchschnitte, die verbergen.** Ein Ausläufer schlechter Erfahrungen bleibt unsichtbar. Nutzen Sie Mediane, Perzentile und Aufteilungen.
- **Unbekannte Definitionen.** Eine geänderte Bedeutung eines Feldes bricht Trends. Dokumentieren und überwachen Sie Definitionen.
- **Verzerrte Stichproben.** Nur wer Sie kontaktiert, wird gezählt. Sagen Sie, wer fehlt.
- **Ursache aus Korrelation.** Ein Diagramm gilt als Beweis. Listen Sie alternative Erklärungen auf und testen Sie.
- **Falsche Genauigkeit.** Zahlen werden ohne Unsicherheit gezeigt. Zeigen Sie Spannen und Stichprobengrößen.
- **Ziele, die verzerren.** Menschen optimieren die Zahl. Koppeln Sie Kennzahlen und prüfen Sie reale Fälle stichprobenartig.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Fragen und Entscheidungen | Berichte aus Gewohnheit | Einige Fragen definiert | Analysen beginnen bei benannten Entscheidungen | Wirkung auf Entscheidungen verfolgt | Analytik mit der Planung über Services hinweg integriert |
| Datenverständnis | Unbekannt | Hauptquellen bekannt | Quellen, Definitionen und Lücken dokumentiert | Datenqualität gemessen und verbessert | Daten über Teams und Partner hinweg gesteuert und geteilt |
| Methode | Durchschnitte und Diagramme | Mediane und einfache Aufteilungen | Standardmethoden, Unsicherheit und Verzerrungsprüfungen | Methoden überprüft und von Kollegen gegengeprüft | Fortgeschrittene Methoden mit Aufsicht und Validierung |
| Kommunikation | Dashboards | Zusammenfassungen | Befunde in einfacher Sprache mit Grenzen | Befunde mit Nutzern getestet | Erkenntnisse in tägliche Entscheidungen eingebettet |

## Checkliste

- [ ] Jede Analyse beginnt bei einer benannten Entscheidung und einer präzisen Frage.
- [ ] Wir dokumentieren unsere Datenquellen, Definitionen und bekannten Lücken.
- [ ] Wir berichten Mediane und Perzentile mit Anzahlen.
- [ ] Wir nennen, wer in den Daten fehlt, und die Grenzen von Stichproben.
- [ ] Wir trennen Korrelation von Ursache und listen alternative Erklärungen auf.
- [ ] Wir zeigen Unsicherheit und vermeiden falsche Genauigkeit.
- [ ] Wir koppeln Kennzahlen, die manipuliert werden könnten, und prüfen reale Fälle stichprobenartig.
- [ ] Wir verfolgen die getroffenen Entscheidungen und überprüfen, ob die Analyse geholfen hat.

## KI-Prompts

**Verwandeln Sie eine Entscheidung in eine Frage.**

```text
The decision we need to make: [describe]. Who decides: [role]. Data we have: [list sources and fields].
Write three precise analytical questions that would inform the decision, with definitions of key terms, the population, and the period. List what data we lack for each. Do not propose answers.
List what you are unsure of.
```

**Prüfen Sie eine Ergebniszusammenfassung auf Fallen.**

```text
Here is a summary of an analysis with the data used: [paste].
List possible problems: sample bias, missing groups, changes in definitions, outliers, confounding factors, and claims of cause not supported by the data. Quote the text for each. Do not redo the analysis.
List what you are unsure of.
```

**Beschreiben Sie einen Datensatz vor der Analyse.**

```text
Here is a sample of rows from our dataset with field names, identifiers removed: [paste].
List each field, its apparent type, missing values, odd values, and questions to ask about how it is recorded. Do not draw conclusions about the business.
List what you are unsure of.
```

## KI-Skills

- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): nutzen Sie ihn, um solide statistische Methoden zu wählen und anzuwenden.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): nutzen Sie ihn, um Veränderung über die Zeit zu untersuchen.
- [data-quality](../../../../skills/data-quality/SKILL.md): nutzen Sie ihn, um die Daten hinter einer Analyse zu prüfen und zu verbessern.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): nutzen Sie ihn, um Delivery-Kennzahlen mit ihren Risiken zu definieren.
- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um Umfragen zu gestalten, die gängige Verzerrungen vermeiden.

## Wichtige Quellen

- Edward Tufte, *The Visual Display of Quantitative Information* (1983): ein Klassiker zu ehrlichen Diagrammen.
- Darrell Huff, *How to Lie with Statistics* (1954): eine kurze, gut lesbare Darstellung gängiger statistischer Tricks.
- Das Begleitbuch *Service Management Metrics*: Metrikdefinitionen, Manipulationswege und Leitplanken.
- Wikipedia, „Analytics“ und „Data analysis“: Überblicke über das Feld.

## Literaturverzeichnis

1. Analytics — Wikipedia — https://en.wikipedia.org/wiki/Analytics
2. Data analysis — Wikipedia — https://en.wikipedia.org/wiki/Data_analysis
3. Descriptive statistics — Wikipedia — https://en.wikipedia.org/wiki/Descriptive_statistics
4. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
5. Prescriptive analytics — Wikipedia — https://en.wikipedia.org/wiki/Prescriptive_analytics
6. Correlation does not imply causation — Wikipedia — https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation
7. Simpson's paradox — Wikipedia — https://en.wikipedia.org/wiki/Simpson%27s_paradox
8. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
9. Data dredging — Wikipedia — https://en.wikipedia.org/wiki/Data_dredging
10. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
12. Exploratory data analysis — Wikipedia — https://en.wikipedia.org/wiki/Exploratory_data_analysis
