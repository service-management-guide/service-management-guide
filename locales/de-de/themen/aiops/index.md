# AIOps

**AIOps wendet maschinelles Lernen auf Betriebsdaten an, um Alarmrauschen zu verringern, Anomalien zu finden, Ereignisse zu korrelieren und Ursachen vorzuschlagen. Es zahlt sich aus, wenn es an früheren Incidents getestet, für die Reagierenden erklärbar gehalten und als Assistent für das Bereitschaftspersonal behandelt wird, nicht als Ersatz für Urteilsvermögen.**

## Warum das wichtig ist

Betriebsteams ertrinken in Daten. Ein moderner Service gibt täglich Millionen Logzeilen, Tausende Metriken und Hunderte Alarme aus. Menschen können nicht alles lesen, also setzen sie Schwellen und Regeln, um zu entscheiden, worauf sie schauen. Die Regeln wachsen, wirken aufeinander und verfallen. Die meisten Alarme erweisen sich als Rauschen, und manche echten Probleme verstecken sich darunter.

AIOps, ein Begriff, den das Analystenhaus Gartner Mitte der 2010er-Jahre aus „algorithmic IT operations“ prägte und der heute meist als „KI für den IT-Betrieb“ gelesen wird, verspricht Hilfe. Es nutzt maschinelles Lernen, um zu lernen, was normal ist, zu bemerken, wenn etwas es nicht ist, zusammengehörige Alarme zu einem Ereignis zu gruppieren und vorzuschlagen, wo die Ursache liegen könnte. Wikipedia beschreibt AIOps als Anwendung künstlicher Intelligenz zur Verbesserung des IT-Betriebs. Anbieter stellen es in kräftigen Worten dar. Praktiker berichten in manchen Nutzungen von echten Gewinnen, etwa bei der Rauschminderung, und in anderen von Enttäuschung, etwa bei vollautomatischer Diagnose.

Für das Service-Management ist die Frage praktisch: Welche Teile von AIOps liefern verlässlichen Wert, wie prüft man sie und wie behält man Menschen in der Kontrolle? Dieses Thema beschreibt die wichtigsten Techniken, ihre typischen Fehlermuster und einen vernünftigen Weg zur Einführung. Es baut auf Monitoring (Thema 3.10 — Monitoring und Event-Management) und Observability (Thema 7.4 — Observability und Telemetrie) auf und überschneidet sich mit Incident-Management (Thema 3.2 — Incident-Management) und Runbook-Automatisierung (Thema 6.6 — Runbook-Automatisierung und automatische Behebung).

## Kernkonzepte

**AIOps.** Die Nutzung von KI-Techniken, vor allem maschinellem Lernen und Statistik, auf Betriebsdaten zur Unterstützung von Aufgaben wie Anomalieerkennung, Ereigniskorrelation, Vorschlag von Grundursachen und Vorhersage. Es ist eine Gruppe von Techniken, kein einzelnes Produkt, und die Fähigkeiten schwanken stark.

**Anomalieerkennung.** Datenpunkte oder Muster finden, die von dem abweichen, was erwartet wird. Wikipedia beschreibt Anomaly detection und ihre Methoden. Im Betrieb könnte ein Modell das normale tägliche und wöchentliche Muster von Anfragen lernen und Abweichungen markieren. Normal ist nicht konstant: Saisonalität (Seasonality), auf Wikipedia beschrieben, bedeutet, dass ein Montagmorgen anders aussieht als ein Sonntagabend. Gute Detektoren berücksichtigen sie.

**Zeitreihen.** Über die Zeit aufgezeichnete Daten, etwa Antwortzeiten oder Fehlerzahlen. Wikipedia beschreibt Time series analysis. Die meisten Betriebskennzahlen sind Zeitreihen, und AIOps-Techniken bauen auf Methoden auf, sie zu modellieren und zu prognostizieren.

**Ereigniskorrelation und Rauschminderung.** Alarme, die aus einer Ursache stammen, zu einem einzigen Incident verbinden und Duplikate und bekanntes Rauschen unterdrücken. Wikipedia beschreibt Event correlation. Clustering-Techniken, auf Wikipedia als Cluster analysis beschrieben, gruppieren Elemente nach Ähnlichkeit. Eine gute Korrelation macht aus zweihundert Alarmen einen, mit benannter wahrscheinlicher Quelle.

**Vorschlag von Grundursachen.** Topologie, Change-Datensätze, Logs und frühere Incidents nutzen, um vorzuschlagen, wo ein Fehler wahrscheinlich liegt. Vorschläge sind Hypothesen. Am nützlichsten sind sie, wenn sie auf einen jüngsten Change oder eine Abhängigkeit zeigen, und am wenigsten verlässlich, wenn die Ursache neuartig ist.

**Vorausschauender Betrieb.** Probleme prognostizieren, bevor sie auftreten, etwa eine Festplatte, die in drei Tagen voll sein wird, oder eine Komponente, die wahrscheinlich ausfällt. Wikipedia beschreibt Predictive maintenance und Predictive analytics. Vorhersagen sind Wahrscheinlichkeiten, und jede hat Kosten für Fehlalarme und für Verfehlungen. Siehe Thema 7.5 — Prädiktive Analytik und Prognosen.

**Log-Analyse.** Techniken der Sprachverarbeitung und Statistik nutzen, um Muster in Logs zu finden, etwa neue Nachrichtentypen oder Änderungen der Häufigkeit. Wikipedia beschreibt Log analysis.

**Generative KI im Betrieb.** Große Sprachmodelle können Incident-Zeitverläufe zusammenfassen, Alarme in einfache Sprache übersetzen, Runbook-Schritte entwerfen und Fragen zur Umgebung beantworten. Sie fügen Flexibilität und das Risiko erfundener Inhalte hinzu. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

**Präzision, Trefferquote und Fehlerkosten.** Ein Detektor kann auf zwei Arten irren: Er kann einen Fehlalarm auslösen (falsch positiv) oder ein echtes Problem verpassen (falsch negativ). Wikipedia beschreibt beide Fehlerarten und die Maße Precision und Recall. Das Abstimmen zur Verringerung des einen erhöht das andere. Die richtige Balance hängt von den Kosten jedes ab, und verschiedene Services verdienen unterschiedliche Einstellungen.

**Concept Drift.** Modelle lernen aus vergangenen Daten, und die Welt ändert sich: neue Releases, neue Verkehrsmuster, neue Infrastruktur. Wikipedia beschreibt Concept drift, bei dem sich die statistischen Eigenschaften dessen, was vorhergesagt wird, über die Zeit ändern. Ein Modell, das im Januar genau war, kann im Juni irreführend sein, wenn es nicht überwacht und neu trainiert wird.

**Erklärbarkeit.** Reagierende vertrauen einem Vorschlag eher und korrigieren ihn nützlicher, wenn sie sehen können, warum er gemacht wurde: welche Metriken sich bewegt haben, welche Ereignisse gruppiert wurden, welcher Change der Verschiebung voranging. Wikipedia beschreibt Explainable artificial intelligence und das Problem der Black Boxes. Bevorzugen Sie im Betrieb Ansätze, die ihre Belege zeigen.

**Datenqualität und Abdeckung.** AIOps braucht gute Daten: vollständig, konsistent, korrekt mit Zeitstempel versehen und mit Services und Verantwortlichen gekennzeichnet. Fehlende oder inkonsistente Daten erzeugen verpasste Signale und falsche Verknüpfungen. Siehe Thema 4.4 — Konfigurationsmanagement und Thema 7.2 — Datengrundlagen und Data Governance.

**Autonome und selbstheilende Ideen.** Das lang gehegte Ziel von Systemen, die ihre eigenen Fehler erkennen und beheben, auf Wikipedia als Autonomic computing beschrieben. Teile sind heute praktikabel, etwa einen ausgefallenen Prozess neu zu starten. Breite Selbstheilung ist viel schwieriger. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

**Menschliche Aufsicht.** Die reagierende Person bleibt rechenschaftspflichtig. AIOps-Ausgaben sind Eingaben für eine menschliche Entscheidung, es sei denn, eine eng definierte Handlung wurde getestet und für die automatische Ausführung genehmigt. Siehe Thema 5.5 — Agentische KI und menschliche Aufsicht.

**Wie die Blickwinkel passen.** AIOps verbindet KI und Analytik für den Betriebsteil des Service-Managements. Agile Praxis legt kleine Erprobungen an einem Service nahe, mit Feedback des Bereitschaftspersonals. Automatisierung verbraucht AIOps-Ausgaben, etwa um ein Ticket zu eröffnen oder eine sichere Prüfung auszuführen.

## Bewährte Praktiken

1. **Beginnen Sie mit einem klaren Schmerz.** Wählen Sie ein Problem, etwa zu viele Alarme bei einem einzelnen Service, und eine Kennzahl, etwa die Zahl der Alarme je Schicht. Erproben Sie AIOps dort.
2. **Bringen Sie zuerst die Daten in Ordnung.** Prüfen Sie, dass Logs und Metriken vollständig, Zeitstempel konsistent und Services und Verantwortliche gekennzeichnet sind. Beheben Sie Lücken, bevor Sie das Modell beschuldigen.
3. **Testen Sie an früheren Incidents.** Spielen Sie historische Daten durch das Werkzeug und fragen Sie, was es markiert, gruppiert oder vorgeschlagen hätte. Zählen Sie Fehlalarme und Verfehlungen.
4. **Vergleichen Sie mit einfachen Methoden.** Vergleichen Sie mit festen Schwellen und einfachen Regeln. Wenn eine einfache Methode genauso gut ist, nutzen Sie sie. Zahlen Sie nicht für Komplexität, die nichts hinzufügt.
5. **Bevorzugen Sie erklärbare Ausgaben.** Wählen Sie Werkzeuge, die die Belege hinter einem Alarm oder einer vorgeschlagenen Ursache zeigen. Verlangen Sie, dass Reagierende sie sehen und infrage stellen können.
6. **Beginnen Sie im beratenden Modus.** Lassen Sie das Werkzeug vorschlagen und Menschen entscheiden. Prüfen Sie die Vorschläge einige Wochen lang gegen das, was tatsächlich geschah, bevor Sie ihm eine automatische Handlung geben.
7. **Begrenzen Sie automatische Handlungen.** Erlauben Sie nur eng gefasste, gut verstandene, umkehrbare Handlungen, mit Ratenbegrenzungen, Protokollen und einem manuellen Stopp. Prüfen Sie jede Klasse von Handlungen, bevor Sie sie aktivieren.
8. **Überwachen Sie die Modelle.** Verfolgen Sie Fehlalarme, Verfehlungen und den Anteil nützlicher Vorschläge. Achten Sie nach großen Releases auf Drift und trainieren oder konfigurieren Sie bei Bedarf neu.
9. **Halten Sie das Bereitschaftspersonal eingebunden.** Bitten Sie es, Vorschläge im Werkzeug zu bewerten, und prüfen Sie sein Feedback wöchentlich. Es ist der beste Richter der Nützlichkeit.
10. **Halten Sie fest, was unterdrückt wurde.** Führen Sie ein Protokoll der Alarme, die das System verborgen oder zusammengeführt hat, und prüfen Sie regelmäßig Stichproben. Bei der Unterdrückung geschehen die schlimmsten Fehler.

## Fragen für die Diskussion im Team

**Welche Alarme verschwenden die meiste Bereitschaftszeit, und würden bessere Regeln sie beheben, bevor es KI täte?**
Beginnen Sie mit den Daten. Viele Rauschprobleme weichen einfachen Korrekturen. Rechnen Sie damit, dass wenige Regeln das meiste Rauschen ausmachen. Beheben Sie diese und prüfen Sie dann neu, was KI hinzufügen könnte.

**Wenn das Werkzeug bei unseren letzten drei Incidents gelaufen wäre, was hätte es uns gesagt, und hätte das geholfen?**
Spielen Sie nach oder simulieren Sie. Rechnen Sie mit gemischten Ergebnissen. Fragen Sie, was es übersehen hätte. Wählen Sie anschließend die Art von Incident, bei der das Werkzeug am vielversprechendsten scheint.

**Woran würden wir erkennen, dass das Werkzeug einen echten Alarm unterdrückt hat?**
Das prüft die Aufsicht. Rechnen Sie mit „gar nicht“. Vereinbaren Sie anschließend ein Protokoll unterdrückter Ereignisse, eine regelmäßige Stichprobe und eine Regel, was nie unterdrückt wird.

**Wer ist rechenschaftspflichtig, wenn eine automatische Handlung schiefgeht, und was sind ihre Grenzen?**
Benennen Sie eine verantwortliche Person und listen Sie erlaubte Handlungen auf. Rechnen Sie mit vagen Antworten. Schreiben Sie anschließend eine kurze Liste von Handlungen, die ohne Genehmigung erlaubt sind, jede mit Rollback.

**Wie erkennen wir, dass das Modell nach einem großen Release oder einer Veränderung des Verkehrs gedriftet ist?**
Fragen Sie nach dem Plan. Rechnen Sie mit keinem. Wählen Sie anschließend Indikatoren, etwa die Fehlalarmrate, und ein Überprüfungsdatum nach jedem großen Release.

**Was würde sich das Bereitschaftspersonal von diesem Werkzeug wünschen, und was würde dazu führen, dass es ihm nicht mehr vertraut?**
Fragen Sie es direkt. Rechnen Sie mit praktischen Antworten zu Kontext und Fehlalarmen. Verwandeln Sie die Antworten anschließend in Abnahmekriterien für die Erprobung.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Betriebsteam eines nationalen Wetterdienstes betreibt Vorhersage-Pipelines und eine öffentliche API auf einem gemischten Bestand aus eigenen und Cloud-Systemen. Das Bereitschaftspersonal erhält etwa 300 Alarme am Tag, die meisten aus wenigen lauten Quellen. Ein Anbieter schlägt eine AIOps-Plattform mit automatischer Korrelation und Vorschlägen für Grundursachen vor.

Der Betriebsleiter stimmt einer Pilotphase unter Bedingungen zu. Erstens bereinigt das Team die 12 lautesten Regeln, was etwa die Hälfte des Volumens entfernt. Zweitens spielt es sechs Monate an Daten, darunter 14 Incidents, im beratenden Modus durch die Plattform. Im Nachspielen gruppiert die Plattform Alarme gut: Der durchschnittliche Incident, der 80 Alarme erzeugte, erscheint als drei Gruppen. Sie markiert in neun der 14 Incidents korrekt das erste Anzeichen, verfehlt drei, bei denen das erste Symptom in einem Log lag, und löst Fehlalarme bei der routinemäßigen nächtlichen Neuverarbeitung aus, deren Muster sie noch nicht gelernt hat.

Das Team setzt sie zwei Monate im beratenden Modus an einer Pipeline ein, wobei das Bereitschaftspersonal jeden Vorschlag als nützlich, neutral oder falsch bewertet. Etwa 55 Prozent werden als nützlich bewertet und 15 Prozent als falsch, meist wenn ein jüngster, nicht erfasster Change die Ursache ist. Danach darf die Plattform für gruppierte Incidents automatisch Tickets eröffnen und sonst nichts. Das Team hält eine wöchentliche Überprüfung unterdrückter Alarme und stellt nach einem großen Release fest, dass die Basislinie des Modells für den Verkehr nun falsch ist und neu trainiert werden muss.

Was sich ändert: Das Bereitschaftspersonal erhält weit weniger, besser gruppierte Alarme. Was schwierig bleibt: Die Vorschläge der Plattform hängen von korrekten Change-Datensätzen ab, die unvollständig sind; sie hilft weniger bei neuartigen Ausfällen; und die Preise des Anbieters wachsen mit dem Datenvolumen, sodass das Team begrenzt, was es einspeist. Der Leiter plant, die Pilotphase erst nach einer weiteren Überprüfung der Verfehlungen auf eine weitere Pipeline auszuweiten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Senden Sie gute Telemetrie: konsistente Logs, Metriken mit Service-Kennzeichnung und Aufzeichnungen zu Deployments und Changes. Teilen Sie Designwissen mit dem Betriebsteam und helfen Sie, die Vorschläge des Werkzeugs zu Ihrem Service zu prüfen.

### Service- und Betriebsteams

Nutzen Sie das Werkzeug als Assistenten: Bewerten Sie Vorschläge, prüfen Sie unterdrückte Einträge und melden Sie Verfehlungen. Halten Sie Regeln einfach, wo sie funktionieren, und behalten Sie die Verantwortung für Entscheidungen und Handlungen.

### Führung und Governance

Verlangen Sie Ergebnisse aus Nachspiel-Tests und einer Pilotphase, nicht aus einer Vorführung. Setzen Sie Grenzen für automatische Handlungen. Finanzieren Sie Datenqualität und Schulung. Hüten Sie sich vor Behauptungen vollautonomen Betriebs.

### Kunden und Nutzer

Sie sollten weniger und kürzere Störungen bemerken, nicht Änderungen darin, wie Ihnen Probleme mitgeteilt werden. Sagen Sie dem Anbieter, wenn ein Incident verpasst wurde, bevor Sie ihn bemerkten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Erproben Sie an einem Service, mit häufigem Feedback des Bereitschaftspersonals, und weiten Sie dann schrittweise aus. Prüfen Sie Verfehlungen nach jedem Incident und passen Sie an. Vorsicht: Ein Modell ständig abzustimmen, ohne Änderungen festzuhalten, macht das Verhalten unvorhersehbar; führen Sie ein Änderungsprotokoll.

### KI

Das Werkzeug selbst ist ein KI-System mit verantwortlicher Person, Testdaten und Prüfung. Behandeln Sie es wie jedes andere: Halten Sie fest, was es darf, überwachen Sie es und testen Sie nach Updates. Vorsicht: Anbieter können Modelle ohne Ankündigung ändern; fragen Sie, wie sie Änderungen mitteilen, und testen Sie regelmäßig. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Verbinden Sie AIOps-Ausgaben mit eng gefassten, getesteten automatischen Handlungen, etwa Ticket-Anlage, Sammeln von Diagnosedaten und Neustart eines bekanntermaßen ausfallenden Prozesses, mit Grenzen und Protokollen. Vorsicht: Automatische Handlungen auf Grundlage unsicherer Vorhersagen können einen Incident verschlimmern; verlangen Sie hohe Zuversicht und einen Rollback. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Messen Sie Alarmvolumen, den Anteil nützlicher, Fehlalarme, in Nachbetrachtungen gefundene Verfehlungen, Zeit bis zur Erkennung und Zeit bis zur Diagnose. Vorsicht: Das Alarmvolumen lässt sich senken, indem man echte Alarme verbirgt; gleichen Sie stets mit Incidents und Verfehlungen ab. Siehe Thema 7.4 — Observability und Telemetrie und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ein Versprechen kaufen.** Die Vorführung des Anbieters gilt als Beleg. Testen Sie mit eigenen Daten durch Nachspielen und Pilotphase.
- **Schlechte Daten.** Das Modell lernt aus inkonsistenten Logs und Kennzeichnungen. Bringen Sie zuerst die Daten in Ordnung.
- **Unterdrückung ohne Prüfung.** Echte Alarme werden verborgen. Protokollieren Sie Unterdrücktes und ziehen Sie Stichproben.
- **Undurchsichtige Vorschläge.** Reagierende können sie nicht beurteilen. Bevorzugen Sie Werkzeuge, die Belege zeigen.
- **Vorzeitige Automatisierung.** Falsche Handlungen geschehen in hohem Tempo. Beginnen Sie beratend und begrenzen Sie Handlungen.
- **Modelldrift ignoriert.** Die Genauigkeit sinkt unbemerkt. Überwachen Sie und trainieren Sie nach Änderungen neu.
- **Komplexität ohne Gewinn.** Eine einfache Regel würde genügen. Vergleichen Sie mit einfachen Methoden.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Datengrundlage | Inkonsistent | Wichtigste Quellen gesammelt | Konsistente, gekennzeichnete und verantwortete Telemetrie | Datenqualität gemessen und verbessert | Daten über Teams und Lieferanten mit Governance geteilt |
| Nutzung von KI | Anbieterbehauptungen | Pilotphase an einem Service | Beratende Nutzung mit Nachspielen und Feedback | Ergebnisse gemessen und umgesetzt | KI mit Aufsicht über den Betrieb integriert |
| Automatisierung | Keine | Ticket-Anlage | Eng gefasste, genehmigte Handlungen mit Grenzen | Handlungen überprüft und verbessert | Breitere Automatisierung nach Risiko mit menschlicher Kontrolle |
| Modellpflege | Keine | Ad-hoc-Abstimmung | Überwachung von Drift und Fehlern | Neutraining an Änderungen gebunden | Laufende Bewertung über Werkzeuge hinweg |

## Checkliste

- [ ] Wir haben für eine Pilotphase ein konkretes Problem und eine Kennzahl gewählt.
- [ ] Wir haben das schlimmste Alarmrauschen zuerst mit einfachen Regeln behoben.
- [ ] Wir haben das Werkzeug an historischen Incidents getestet und Verfehlungen und Fehlalarme gezählt.
- [ ] Wir haben es mit einfachen Methoden verglichen.
- [ ] Ausgaben sind für Reagierende erklärbar.
- [ ] Wir laufen im beratenden Modus, bevor wir eine Handlung erlauben.
- [ ] Automatische Handlungen sind eng gefasst, protokolliert, ratenbegrenzt und umkehrbar.
- [ ] Wir überwachen auf Drift und prüfen unterdrückte Alarme.

## KI-Prompts

**Prüfen Sie Ergebnisse des Nachspielens.**

```text
Here are the results of replaying [number] past incidents through our AIOps tool: for each, the first real symptom, what the tool flagged and when, and what it suggested: [paste].
Compute for each incident whether the tool flagged the problem before the first page, and list false alarms and misses. Summarize counts and note incidents where the data is unclear. Do not rate the tool overall.
List what you are unsure of.
```

**Prüfen Sie unterdrückte Alarme.**

```text
Here is a sample of alerts that the system suppressed or merged last week, with details: [paste sample].
For each, say whether the details suggest it was noise, a duplicate of another alert, or possibly a real problem, and give your reason. Mark those you cannot judge.
List what you are unsure of.
```

**Entwerfen Sie Abnahmekriterien für eine Pilotphase.**

```text
Our service: [describe]. Our current pain: [describe, with numbers if known]. Our constraints: [list].
Draft acceptance criteria for a two-month pilot of an AIOps tool: measures, thresholds we should agree beforehand, what would make us stop, and what automatic actions are not allowed. Do not state vendor claims as facts.
List what you are unsure of.
```

## KI-Skills

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): nutzen Sie ihn, um ungewöhnliche Muster in Betriebsdaten zu untersuchen.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): nutzen Sie ihn, um zu sehen, wie sich Kennzahlen über die Zeit ändern.
- [data-quality](../../../../skills/data-quality/SKILL.md): nutzen Sie ihn, um die Eingaben zu prüfen, von denen AIOps abhängt.
- [mlops](../../../../skills/mlops/SKILL.md): nutzen Sie ihn, um Modelle im Einsatz zu überwachen und zu pflegen.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): nutzen Sie ihn, um vorgeschlagene Ursachen an Belegen zu prüfen.

## Wichtige Quellen

- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zum Monitoring verteilter Systeme, frei unter sre.google: Grundlagen, auf denen AIOps aufbaut.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Monitoring und Event-Management durch den Eigentümer.
- Wikipedia, „AIOps“ und „Anomaly detection“: Überblicke über den Begriff und die Techniken.
- Wikipedia, „Concept drift“: der Hauptgrund, warum Modelle mit der Zeit schlechter werden.

## Literaturverzeichnis

1. AIOps — Wikipedia — https://en.wikipedia.org/wiki/AIOps
2. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
3. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
4. Time series — Wikipedia — https://en.wikipedia.org/wiki/Time_series
5. Seasonality — Wikipedia — https://en.wikipedia.org/wiki/Seasonality
6. Cluster analysis — Wikipedia — https://en.wikipedia.org/wiki/Cluster_analysis
7. Precision and recall — Wikipedia — https://en.wikipedia.org/wiki/Precision_and_recall
8. Type I and type II errors — Wikipedia — https://en.wikipedia.org/wiki/Type_I_and_type_II_errors
9. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
10. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
11. Predictive maintenance — Wikipedia — https://en.wikipedia.org/wiki/Predictive_maintenance
