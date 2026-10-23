# Prozess- und Wertstromanalyse

**Prozess- und Wertstromanalyse messen, wie Arbeit tatsächlich fließt: wie lange jeder Schritt dauert, wie lange Arbeit wartet, wo sie zurückspringt und wo sie sich staut. Sie funktionieren, wenn sie auf zeitgestempelten Ereignisdaten und realen Verläufen beruhen, auf den Engpass zielen und mit den Menschen abgeglichen werden, die die Arbeit tun.**

## Warum das wichtig ist

Jeder hat ein Bild davon, wie Arbeit fließt, und es ist meist falsch. Die Prozessdokumente zeigen einen sauberen Weg von der Anfrage bis zum Abschluss. Die Wirklichkeit enthält Umwege, Schleifen, Übergaben, die in keinem Diagramm stehen, und lange Zeiträume, in denen Arbeit unberührt liegt. Eine Anfrage, die laut Dokument drei Schritte braucht, kann elf durchlaufen und 90 Prozent ihres Lebens warten.

Analytik für Prozesse und Wertströme ersetzt das Bild durch Belege. Sie beginnt mit Daten, die Systeme ohnehin erfassen, etwa Ticket-Zustände, Zeitstempel und Zuweisungen, und mit der Beobachtung realer Arbeit. Sie rekonstruiert die Wege, die Arbeit nimmt, misst die Zeit in jeder Stufe und trennt Arbeitszeit von Wartezeit. Wikipedia beschreibt Process mining als die Techniken, Ereignisprotokolle zu analysieren, um reale Prozesse zu entdecken, zu überwachen und zu verbessern.

Die Ergebnisse überraschen oft. Der Engpass liegt nicht dort, wo Menschen ihn vermuteten. Der Schritt, über den sich alle beklagen, ist schnell, und die Verzögerung liegt in der Übergabe davor. Ein Drittel der Anfragen springt wegen fehlender Informationen zurück. Diese Befunde führen zu konkreten, kleinen Verbesserungen, weshalb diese Analyse zu den nützlichsten im Service-Management gehört. Dieses Thema beschreibt die wichtigsten Techniken, die nötigen Daten und die Vorbehalte. Es baut auf der Wertschöpfungskette (Thema 1.7 — Die Service-Wertschöpfungskette), Fluss und Kanban (Thema 2.3 — Fluss und Kanban), Lean-Denken (Thema 2.4 — Lean und Kaizen) und Analytik (Thema 7.1 — Analytik für das Service-Management) auf. Datengrundlagen (Thema 7.2 — Datengrundlagen und Data Governance) sind hier von großer Bedeutung, denn Zeitstempel und Zustandswechsel sind der Rohstoff.

## Kernkonzepte

**Wertstrom (Value Stream).** Die Abfolge von Schritten, die eine Organisation ausführt, um einem Kunden ein Produkt oder einen Service zu liefern, etwa „einen Major Incident lösen“ oder „einen neuen Mitarbeitenden einarbeiten“. Wikipedia beschreibt Value streams. Ein Wertstrom durchläuft die Aktivitäten der Wertschöpfungskette in seiner eigenen Reihenfolge. Siehe Thema 1.7 — Die Service-Wertschöpfungskette.

**Wertstromanalyse (Value-Stream Mapping).** Eine Lean-Technik, die jeden Schritt eines Wertstroms mit seiner Bearbeitungszeit und dem Warten zwischen den Schritten aufzeichnet, sodass die wertschöpfende Zeit mit der gesamten verstrichenen Zeit verglichen werden kann. Wikipedia beschreibt sie. Eine Karte wird oft gezeichnet, indem man den Prozess mit den Beteiligten abgeht und reale Zeiten notiert.

**Process Mining.** Ereignisdaten nutzen, um zu entdecken, wie Prozesse tatsächlich laufen. Jedes Ereignis hat eine Fallkennung (etwa eine Ticketnummer), eine Aktivität (etwa „zugewiesen“ oder „gelöst“) und einen Zeitstempel. Daraus rekonstruieren Techniken den Weg jedes Falls, zeigen die häufigsten Routen, finden Varianten und messen Zeiten. Wikipedia beschreibt Process mining und Process discovery. Es ergänzt das Abbilden: Mining zeigt, was über Tausende Fälle geschah, Abbilden zeigt bei wenigen, warum.

**Ereignisdaten.** Prozessanalyse hängt von guten Ereignisdaten ab: einer stabilen Fallkennung, klaren Aktivitätsnamen und genauen Zeitstempeln. Ticket- und Workflow-Systeme speichern Zustandswechsel meist mit Zeiten. Prüfen Sie, dass die Daten widerspiegeln, was geschah. Ein Ticket im Zustand „wartend“ muss nicht heißen, dass auf den Kunden gewartet wird; ein Zustand kann am Ende gesammelt gesetzt worden sein. Siehe Thema 7.2 — Datengrundlagen und Data Governance.

**Durchlaufzeit, Zykluszeit und Wartezeit.** Die Durchlaufzeit (Lead time) ist die verstrichene Zeit von der Anfrage bis zum Abschluss, wie der Kunde sie erlebt. Die Zykluszeit (Cycle time) ist die Zeit ab Beginn der Arbeit. Wikipedia beschreibt beide. Die Wartezeit, die in Warteschlangen oder untätig zwischen Schritten verbrachte Zeit, ist meist der größte Teil. Definieren Sie jeden Start- und Endpunkt präzise. Die Beziehung zwischen laufender Arbeit, Durchsatz und Durchlaufzeit gibt das Little'sche Gesetz (Little's law), auf Wikipedia beschrieben. Siehe Thema 2.3 — Fluss und Kanban.

**Flusseffizienz.** Der Anteil der Durchlaufzeit, in dem aktiv an der Arbeit gearbeitet wird. In vielen Wissens- und Serviceprozessen liegt die Flusseffizienz unter 20 Prozent, das heißt, die meiste Zeit wird gewartet. Dieses Maß lenkt die Aufmerksamkeit auf Verzögerung statt Aufwand. Prüfen Sie die Zahlen durch Stichproben realer Fälle, da sie davon abhängen, wie aktive Zeit erfasst wird.

**Engpässe und Beschränkungen.** Ein Engpass ist ein Schritt, der den Durchsatz des ganzen Prozesses begrenzt. Die Theory of constraints, die Wikipedia beschreibt, argumentiert, dass die Verbesserung von allem außer dem Engpass den Gesamtfluss nicht verbessert und dass der Engpass identifiziert, ausgereizt und dann entlastet werden sollte. Wikipedia beschreibt Bottlenecks in der Produktion. Suchen Sie in der Analytik nach Schritten, an denen sich Arbeit staut, an denen die Wartezeit am längsten ist oder die Auslastung nahe am Maximum liegt.

**Varianten und Nacharbeit.** Derselbe Prozess läuft in vielen Varianten: der glatte Weg, Wege mit Genehmigung, Wege mit Schleifen. Wikipedia beschreibt Rework, die Wiederholung von Arbeit wegen Fehlern oder fehlender Informationen. Zu zählen, wie oft Fälle zurückspringen und warum, findet Verschwendung. Eine Schleife zum Kunden wegen fehlender Informationen bei 30 Prozent der Anfragen deutet auf ein Formularproblem.

**Übergaben.** Jede Übergabe zwischen Teams fügt Wartezeit und die Chance verlorener Informationen hinzu. Zählen Sie Übergaben pro Fall und die Zeit nach jeder. Eine Swimlane-Sicht, auf Wikipedia beschrieben, zeigt, wer was bearbeitet. Wege mit vielen Übergaben sind Kandidaten für ein Redesign. Siehe Thema 3.1 — Service Desk.

**Streuung.** Durchschnitte verbergen Streuung. Fälle, die zehnmal länger dauern als der typische, verursachen den Schmerz, und sie haben Ursachen, die zu finden sich lohnt. Wikipedia beschreibt Statistical dispersion und Statistical process control, die gewöhnliche Schwankung von Signalen trennen. Berichten Sie Verteilungen und Perzentile, nicht nur Mittelwerte. Siehe Thema 7.3 — Messung und Berichtswesen.

**Das Pareto-Prinzip.** Eine kleine Zahl von Ursachen erzeugt oft den Großteil der Wirkung, ein Muster, das Wikipedia als Pareto principle beschreibt. Auf Verzögerungen angewandt, erklären oft wenige Varianten oder wenige Schritte den Großteil der verlorenen Zeit. Beginnen Sie dort.

**Warteschlangen.** Nähert sich die Auslastung der Kapazität, wächst das Warten stark, wie die Warteschlangentheorie zeigt. Wikipedia beschreibt sie. Ein Team, das „zu 100 Prozent ausgelastet“ ist, wird lange Warteschlangen haben. Lassen Sie Spielraum, besonders für zufällig eintreffende Arbeit. Siehe Thema 3.11 — Verfügbarkeit, Kapazität und Performance.

**Konformität und Compliance.** Process Mining kann prüfen, ob tatsächliche Fälle dem beabsichtigten Prozess folgen, etwa ob erforderliche Genehmigungen erfolgten. Es hilft bei Audit und Kontrolle, mit dem Vorbehalt, dass Daten zeigen, was erfasst wurde, nicht unbedingt, was getan wurde. Siehe Thema 3.4 — Change Enablement.

**Den Prozess abgehen.** Daten finden das Wo; Menschen erklären das Warum. Beobachten Sie die Arbeit, sprechen Sie mit denen, die sie tun, und sehen Sie sich eine Stichprobe realer Fälle an. Lean-Praxis nennt das, an den Ort zu gehen, an dem die Arbeit geschieht, das Gemba. Siehe Thema 2.4 — Lean und Kaizen.

**Datenschutz und Fairness.** Prozessdaten können die Arbeitsmuster Einzelner zeigen. Nutzen Sie sie, um das System zu verstehen, aggregieren Sie nach Team oder Schritt und nutzen Sie sie nicht, um Einzelne zu überwachen oder zu ranken. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Wie die Blickwinkel passen.** Prozessanalytik ist die Datenseite agiler Verbesserung und Lean-Denkens: den Engpass finden, eine kleine Änderung versuchen, erneut messen. KI kann helfen, Muster zu entdecken und Karten zu entwerfen, unter Prüfung. Automatisierung handelt nach den Befunden, etwa indem sie eine Übergabe entfernt. Analytik liefert den Beleg.

## Bewährte Praktiken

1. **Wählen Sie einen Wertstrom, der zählt.** Wählen Sie einen, der Kunden wichtig und langsam oder uneinheitlich ist, etwa Zugriffsanfragen oder die Behandlung von Major Incidents. Definieren Sie Start und Ende aus Sicht des Kunden.
2. **Prüfen Sie zuerst die Ereignisdaten.** Bestätigen Sie, dass Sie Fallkennungen, Aktivitätsnamen und vertrauenswürdige Zeitstempel haben. Gleichen Sie Stichproben von Fällen mit der Realität ab und notieren Sie Zustände, die nicht bedeuten, was sie sagen.
3. **Bilden Sie den Ist-Fluss aus Daten und von Menschen ab.** Rekonstruieren Sie Wege mit Process Mining, wo Sie können, und gehen Sie einige reale Fälle mit denen durch, die sie bearbeiten. Vergleichen Sie die beiden Sichten.
4. **Trennen Sie Arbeiten von Warten.** Messen Sie für jeden Schritt aktive Zeit und Wartezeit. Berechnen Sie die Flusseffizienz und notieren Sie die längsten Wartezeiten.
5. **Betrachten Sie Varianten und Schleifen.** Zählen Sie die Hauptvarianten, den Anteil der Fälle, die zurückspringen, und die Gründe. Prüfen Sie die längsten Fälle einzeln.
6. **Finden Sie den Engpass.** Identifizieren Sie den Schritt, der den Durchsatz begrenzt, und richten Sie die Verbesserung dorthin. Optimieren Sie nicht zuerst andere Schritte.
7. **Zählen Sie Übergaben und verlorene Informationen.** Messen Sie Übergaben pro Fall und die Verzögerung nach jeder und befragen Sie die empfangende Seite, was ihr fehlt.
8. **Nutzen Sie Verteilungen und prüfen Sie reale Fälle stichprobenartig.** Berichten Sie Mediane und Perzentile und lesen Sie eine Stichprobe aus dem Ausläufer. Prüfen Sie automatisierte Befunde von Hand.
9. **Ändern Sie eine Sache und messen Sie erneut.** Nehmen Sie am Engpass eine kleine Änderung vor, halten Sie die Basislinie fest und vergleichen Sie nach einem definierten Zeitraum, wobei Sie andere Änderungen im selben Zeitraum vermerken.
10. **Nutzen Sie die Daten, um das System zu verstehen.** Aggregieren Sie nach Team und Schritt, ranken Sie keine Einzelnen und teilen Sie Befunde mit denen, die die Arbeit tun.

## Fragen für die Diskussion im Team

**Wo wartet eine typische Anfrage am längsten, und worauf wartet sie?**
Nutzen Sie Daten oder einen nachverfolgten Fall. Rechnen Sie mit Genehmigungen, Warteschlangen und Warten auf den Kunden. Wählen Sie anschließend eine Wartezeit und fragen Sie, wer sie verkürzen könnte.

**Wie viele verschiedene Wege nehmen Anfragen durch unseren Prozess, und sind alle nötig?**
Zeigen Sie die Varianten. Rechnen Sie mit mehr, als jemand dachte. Wählen Sie anschließend die nutzloseste und fragen Sie, ob sie entfallen kann.

**Welcher Anteil unserer Fälle springt wegen fehlender Informationen zurück, und was fehlt?**
Zählen Sie sie. Rechnen Sie mit einer hohen Zahl bei bestimmten Anfragearten. Ändern Sie anschließend das Formular oder die erste Antwort, damit früher danach gefragt wird.

**Wo verlieren Übergaben Informationen, und was wünschte sich das empfangende Team?**
Fragen Sie das empfangende Team. Rechnen Sie mit denselben wenigen Punkten. Nehmen Sie sie anschließend in die Übergabe auf.

**Welcher Schritt ist der Engpass, und was geschähe mit dem Gesamtfluss, wenn wir seine Geschwindigkeit verdoppelten?**
Denken Sie es mit den Daten durch. Rechnen Sie damit, dass Menschen den lautesten Schritt nennen. Prüfen Sie anschließend die Antwort an Warteschlangen- und Wartezeiten.

**Wie könnte KI uns helfen, Muster in unseren Prozessdaten zu finden, und wie würden wir prüfen, dass sie richtig lag?**
KI kann Varianten zusammenfassen und Ursachen vorschlagen. Sie kann auch Rauschen überinterpretieren. Fragen Sie, wer prüft. Vergleichen Sie anschließend eine KI-Zusammenfassung mit einer manuellen Analyse einer Stichprobe.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer regionalen Gesundheitsbehörde braucht im Durchschnitt 19 Arbeitstage, um Klinikpersonal Zugriff auf eine neue klinische Anwendung zu geben. Das Klinikpersonal beschwert sich; der Bericht der Abteilung zeigt jede Aufgabe innerhalb ihres Ziels erledigt. Die Service-Managerin beschließt, den Strom nachzuverfolgen.

Sie extrahiert die Ereignisdaten für 600 jüngste Zugriffsanfragen: Zustandswechsel und Zeitstempel aus dem Ticket-System. Ein Process-Mining-Werkzeug rekonstruiert die Wege. Es findet neun Varianten, von denen drei 80 Prozent der Fälle abdecken. Die Arbeitszeit beträgt im Durchschnitt etwa 2,5 Tage. Der Rest ist Warten: auf die Genehmigung der Führungskraft (durchschnittlich 4 Tage), auf die Freigabe einer klinischen Leitung (durchschnittlich 5 Tage), darauf, dass das Anwendungsteam die Aufgabe aufgreift (3 Tage), und darauf, dass die anfragende Person ein fehlendes Schulungszertifikat liefert (4 Tage, in 35 Prozent der Fälle). Die Flusseffizienz liegt bei etwa 13 Prozent.

Sie geht fünf Fälle mit den Beteiligten durch. Sie findet, dass die Genehmigung der klinischen Leitung für die meisten Rollen eine Formalität ist: Von den letzten 200 wurde keine abgelehnt. Sie findet auch, dass die Zertifikatsschleife entsteht, weil das Formular nicht vorab danach fragt, und dass das Anwendungsteam Anfragen donnerstags bündelt.

Das Team nimmt drei Änderungen vor. Es streicht die Genehmigung der klinischen Leitung für Rollen mit Standardzugriff, ergänzt das Zertifikat im Formular und stellt das Anwendungsteam auf eine täglich bearbeitete Warteschlange um. Die Managerin hält die Basislinie fest und verfolgt 100 Fälle nach der Änderung. Die durchschnittliche Durchlaufzeit sinkt auf 8 Tage, das 90. Perzentil von 31 auf 15 Tage. Sie liest zehn der längsten Fälle und findet, dass die meisten ungewöhnliche Rollen betreffen.

Was sich ändert: Das Klinikpersonal erhält schneller Zugriff, und der Bericht zeigt nun die Durchlaufzeit, wie der Kunde sie erlebt. Was schwierig bleibt: Der Wegfall der Genehmigung braucht die Zustimmung des klinischen Sicherheitsbeauftragten und läuft als Erprobung; die Daten können das Warten auf den Kunden nicht vom durch das Team verursachten Warten trennen, weil der Zustand „ausstehend“ für beides genutzt wird; und die Managerin wurde gebeten, Analysen der Geschwindigkeit einzelner Techniker zu erstellen, was sie ablehnt. Sie bittet den Verantwortlichen des Werkzeugs, einen eigenen Zustand für das Warten auf den Kunden zu ergänzen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Machen Sie Ihre Delivery-Pipeline zu einem Wertstrom und verfolgen Sie Changes von der Idee bis zur Produktion. Liefern Sie Ereignisse und Zeitstempel, die Analyse möglich machen, und nutzen Sie die Befunde, um Wartezeiten zu beseitigen, die Sie verursachen.

### Service- und Betriebsteams

Wissen Sie, wo Arbeit wartet und warum. Nutzen Sie einheitliche Zustände, erfassen Sie Wartegründe und beteiligen Sie sich am Nachverfolgen realer Fälle. Bringen Sie Übergabeprobleme bei der verantwortlichen Person des Stroms vor.

### Führung und Governance

Verlangen Sie die Durchlaufzeit, wie der Kunde sie sieht, die Flusseffizienz und den Engpass, nicht nur Aufgabenzeiten. Unterstützen Sie Änderungen am Engpass. Nutzen Sie Prozessdaten nicht, um Einzelne zu ranken.

### Kunden und Nutzer

Sie erleben den ganzen Strom, einschließlich des Wartens. Sagen Sie, wie lange und worauf Sie gewartet haben, und antworten Sie zügig, wenn der Anbieter um Informationen bittet.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nutzen Sie die Analyse, um die nächste kleine Verbesserung am Engpass zu wählen, setzen Sie sie um und messen Sie erneut, mit eingebundenen Stakeholdern. Vorsicht: Führen Sie kein langes Kartierungsprogramm durch, bevor Sie etwas ändern; verfolgen Sie einen Strom, ändern Sie eine Sache und lernen Sie.

### KI

KI kann Prozessvarianten entdecken, Verläufe zusammenfassen und mögliche Ursachen vorschlagen, mit einer verantwortlichen Person und Prüfungen. Vorsicht: KI-Zusammenfassungen von Prozessdaten können Rauschen als Muster darstellen; prüfen Sie an Stichproben von Fällen und bei den beteiligten Menschen. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie die Schritte, die laut Analyse stabil und wiederholt sind, und beseitigen Sie Übergaben, die keinen Wert schaffen, mit Protokollen und Rückfallwegen. Vorsicht: Einen Schritt zu automatisieren, der nicht der Engpass ist, verkürzt die Durchlaufzeit nicht; prüfen Sie, wo das Warten liegt. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Dieses Thema ist Analytik für den Fluss: Ereignisdaten, Durchlauf- und Wartezeiten, Varianten, Schleifen und Engpässe. Vorsicht: Zeitstempel spiegeln wider, wie Zustände genutzt werden, und Kennzahlen zur Schrittgeschwindigkeit lassen sich durch Verschieben von Tickets zwischen Zuständen manipulieren; verifizieren Sie mit realen Fällen. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Dem dokumentierten Prozess vertrauen.** Er weicht von der Realität ab. Nutzen Sie Ereignisdaten und reale Fälle.
- **Schmutzige Ereignisdaten.** Zustände und Zeiten führen in die Irre. Prüfen und beheben Sie zuerst die Daten.
- **Den falschen Schritt optimieren.** Aufwand geht dorthin, wo es laut ist. Finden Sie den Engpass.
- **Nur Durchschnitte.** Lange Fälle verbergen sich. Nutzen Sie Perzentile und lesen Sie den Ausläufer.
- **Warten ignorieren.** Aufwand wird gemessen, Verzögerung nicht. Trennen Sie Arbeits- und Wartezeit.
- **Daten ohne Menschen.** Befunde haben keine Ursachen. Gehen Sie reale Fälle mit denen durch, die die Arbeit tun.
- **Überwachung Einzelner.** Vertrauen bricht zusammen. Analysieren Sie das System.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Daten | Aufgabenzahlen | Einige Zeitstempel | Einheitliche Zustände und Zeitstempel für wichtige Ströme | Qualität der Ereignisdaten überwacht | Ereignisdaten über Werkzeuge und Lieferanten integriert |
| Analyse | Dokumentierter Prozess | Ein Strom nachverfolgt | Routineanalyse wichtiger Ströme: Durchlaufzeit, Wartezeiten, Varianten | Engpässe identifiziert und verfolgt | Analyse automatisiert und laufend, mit menschlicher Prüfung |
| Verbesserung | Ad hoc | Gelegentliche Korrekturen | Änderungen am Engpass, gemessen | Verbesserungen an Flussergebnisse gebunden | Verbesserung über Ströme und Partner koordiniert |
| Ethik | Unklar | Bewusstsein | Analyse auf Team-Ebene, kein Ranking Einzelner | Nutzung mit Mitarbeitenden überprüft | Datenschutz in Analytik eingebaut |

## Checkliste

- [ ] Wir haben einen für Kunden relevanten Wertstrom mit klarem Start und Ende gewählt.
- [ ] Wir haben Ereignisdaten auf Fallkennungen, Aktivitätsnamen und Zeitstempel geprüft.
- [ ] Wir haben den Ist-Fluss aus Daten und durch das Abgehen realer Fälle abgebildet.
- [ ] Wir haben Arbeitszeit und Wartezeit sowie die Flusseffizienz gemessen.
- [ ] Wir haben Varianten, Schleifen und Übergaben gezählt.
- [ ] Wir haben den Engpass identifiziert und die Änderung darauf gerichtet.
- [ ] Wir haben Perzentile berichtet und eine Stichprobe aus dem Ausläufer gelesen.
- [ ] Wir analysieren auf Team- und Schrittebene, nicht auf Einzelebene.

## KI-Prompts

**Fassen Sie Varianten aus Fallverläufen zusammen.**

```text
Here is a list of case paths (sequence of activities) with counts, and median time for each path, identifiers removed: [paste].
Describe the main variants, the share of cases each covers, where loops occur, and what the longest paths have in common. Do not infer causes.
List what you are unsure of.
```

**Finden Sie Warten in einem Verlauf.**

```text
Here are the events of five cases with timestamps and the person or team handling each: [paste, names removed].
For each case, compute time between events, identify the three longest waits, and say whether the data suggest waiting on a team, on a customer, or unclear. Do not guess where the data are silent.
List what you are unsure of.
```

**Bereiten Sie Fragen für einen Prozess-Rundgang vor.**

```text
We are about to walk through a value stream with the people who do the work. Here is what the data show: [paste summary].
Write ten open questions to ask on the walk, aimed at why waits and loops occur. Avoid blame and do not suggest answers.
List what you are unsure of.
```

## KI-Skills

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): nutzen Sie ihn, um einen Wertstrom abzubilden und zu messen.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Schritte, Übergaben und Wartezeiten zu analysieren.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): nutzen Sie ihn, um Streuung und Unsicherheit zu untersuchen.
- [kaizen](../../../../skills/kaizen/SKILL.md): nutzen Sie ihn, um Befunde in kleine Verbesserungen zu überführen.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): nutzen Sie ihn, um Ist- und Soll-Abläufe in Text zu zeichnen.

## Wichtige Quellen

- Wil van der Aalst, *Process Mining: Data Science in Action* (2. Auflage, 2016): die Hauptreferenz zum Process Mining.
- Mike Rother und John Shook, *Learning to See* (1999): der klassische Leitfaden zur Wertstromanalyse.
- Eliyahu Goldratt, *The Goal* (1984): ein Roman, der die Theory of Constraints einführte.
- Wikipedia, „Process mining“ und „Value-stream mapping“: Überblicke über die Techniken.

## Literaturverzeichnis

1. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
2. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
3. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
4. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
5. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
6. Cycle time — Wikipedia — https://en.wikipedia.org/wiki/Cycle_time
7. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
8. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
9. Rework — Wikipedia — https://en.wikipedia.org/wiki/Rework
10. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
11. Statistical process control — Wikipedia — https://en.wikipedia.org/wiki/Statistical_process_control
12. Swimlane — Wikipedia — https://en.wikipedia.org/wiki/Swimlane
