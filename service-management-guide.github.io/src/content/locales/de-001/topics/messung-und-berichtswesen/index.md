# Messung und Berichtswesen

**Gute Messung geht von Zielen aus, nutzt wenige, präzise definierte Kennzahlen, koppelt jede Kennzahl mit einer Leitplanke gegen Manipulation, zeigt Verteilungen und Trends und berichtet an Menschen, die handeln können. Die Definitionen stehen im Begleitbuch Service Management Metrics, und dieses Thema zeigt, wie man sie gut nutzt.**

## Warum das wichtig ist

Jeder im Service-Management hat einen Bericht gesehen, der korrekt und nutzlos war. Seitenweise Zahlen, eine Ampelzusammenfassung und der Hinweis, dass alle Ziele erreicht wurden. Dann eine Kundenbeschwerde über eine Woche schlechten Service und eine Führungskraft, die fragt, wie das möglich war. Der Bericht maß, was leicht zu zählen war, und das Ziel kam an die Stelle des Ergebnisses.

Das umgekehrte Versagen ist ebenso real. Ein Team misstraut Zahlen, weil sie benutzt wurden, um Menschen ungerecht zu beurteilen, und weigert sich, überhaupt zu messen. Dann hängt Verbesserung von Meinung ab, und die lauteste Stimme entscheidet.

Der Ausweg ist, Messung als Handwerk mit einem Zweck zu behandeln: zu lernen, ob Services Ergebnisse liefern und wo zu verbessern ist. Kennzahlen werden aus Zielen gewählt, so definiert, dass zwei Menschen sie gleich berechnen, als Verteilungen und Trends gelesen und gegen die Arten geprüft, auf die sie in die Irre führen können. Dieses Thema beschreibt dieses Handwerk allgemein. Es definiert keine einzelnen Kennzahlen: Das Begleitbuch *Service Management Metrics* gibt für jede eine Definition, einen Manipulationsweg und eine Leitplanke, und dort sind die Zahlen selbst zu finden. Dieses Thema verbindet sich mit Analytik (Thema 7.1 — Analytik für das Service-Management), Datengrundlagen (Thema 7.2 — Datengrundlagen und Data Governance), Service Levels (Thema 3.7 — Service-Level-Management) und kontinuierlicher Verbesserung (Thema 3.15 — Kontinuierliche Verbesserung).

## Kernkonzepte

**Messgröße, Kennzahl, Indikator.** Eine Messgröße ist eine Menge, die Sie beobachten können, etwa die Anzahl der Incidents. Eine Kennzahl (Metrik) ist eine Messgröße, die für einen Zweck definiert ist, mit Berechnung, Quelle und Zeitraum. Ein Indikator zeigt den Zustand von etwas an, das sich schwer direkt beobachten lässt. Wikipedia beschreibt Performance indicators allgemein, oft als KPIs für Key Performance Indicators abgekürzt. Begriffe werden lose verwendet; definieren Sie, was Sie meinen.

**Zuerst die Ziele.** Eine Kennzahl ist nur im Verhältnis zu einem Ziel nützlich. Schreiben Sie das Ziel in einfachen Worten auf („Kunden bekommen schnell Hilfe, wenn etwas kaputtgeht“) und fragen Sie dann, welcher Beleg zeigen würde, ob es erreicht wird. Wikipedia beschreibt Ansätze wie die Balanced Scorecard, die Kennzahlen aus mehreren Blickwinkeln mit Zielen verknüpft, und Objectives and Key Results (OKRs), die ein Ziel mit messbaren Ergebnissen paaren. Wofür Sie sich auch entscheiden: Behandeln Sie sie als Hilfen für das Gespräch.

**Ergebnisse, Leistungen und Aktivität.** Ergebnisse (Outcomes) sind Veränderungen für Kunden und Organisation; Leistungen (Outputs) sind das, was der Service erzeugt; Aktivität ist Aufwand. Nur Aktivität zu messen, etwa geschlossene Tickets, sagt wenig darüber, ob es jemandem besser geht. Beziehen Sie Ergebnis- und Erlebniskennzahlen ein. Siehe Thema 1.1 — Service-Management.

**Frühindikatoren und Spätindikatoren.** Spätindikatoren berichten Ergebnisse im Nachhinein, etwa die Kundenzufriedenheit. Frühindikatoren signalisieren, was wahrscheinlich kommt, etwa wachsendes Alter des Rückstaus. Wikipedia beschreibt beide unter Economic indicators. Ein ausgewogener Satz enthält beide.

**Präzise Definitionen.** Zwei Menschen müssen die Kennzahl berechnen und dieselbe Antwort erhalten können. Definieren Sie die Grundgesamtheit, Start- und Endereignis, was ausgeschlossen ist, den Zeitraum und die Datenquelle. „Zeit bis zur Lösung“ braucht eine Definition, wann die Uhr startet, stoppt und pausiert. Halten Sie Definitionsänderungen mit Datum fest. Siehe Thema 7.2 — Datengrundlagen und Data Governance.

**Durchschnitte, Mediane und Perzentile.** Durchschnitte werden von wenigen Extremwerten leicht verzerrt. Mediane und Perzentile, auf Wikipedia beschrieben, zeigen den typischen Fall und den Ausläufer, den unglückliche Nutzer erleben. Berichten Sie für Reaktions- und Lösungszeiten Perzentile, etwa den Median und das 90. Perzentil.

**Verteilungen und Trends.** Eine einzelne Zahl für einen Monat verbirgt Schwankung. Zeigen Sie die Verteilung, den Trend über mehrere Zeiträume und die Spanne gewöhnlicher Schwankung. Wikipedia beschreibt Control charts und Statistical process control, die normale Schwankung von Signalen trennen, dass sich etwas geändert hat. Reagieren Sie nicht auf jedes Zucken.

**Ziele und Schwellen.** Ein Ziel ist ein Niveau, das Sie anstreben; eine Schwelle ist ein Niveau, das Handeln auslöst. Ziele sollten aus Bedarf und Belegen dafür kommen, was erreichbar ist. Ein Ziel ohne Belege lädt zu Manipulation oder Verzweiflung ein.

**Goodhartsches Gesetz und Manipulation.** Wird eine Kennzahl zum Ziel, hört sie auf, eine gute Kennzahl zu sein. Wikipedia beschreibt Goodhart's law und die verwandte Beobachtung des Sozialwissenschaftlers Donald Campbell. Menschen passen sich dem Anreiz an. Tickets werden zu früh geschlossen, Uhren angehalten, Kategorien geändert, schwere Fälle gemieden. Der Wikipedia-Artikel zu Perverse incentives gibt Beispiele für unbeabsichtigte Wirkungen, manchmal Kobra-Effekt genannt. Jede Kennzahl hat einen Manipulationsweg, und das Buch *Service Management Metrics* benennt ihn mit einer Leitplanke.

**Leitplanken.** Eine zweite Kennzahl oder eine Prüfung, die vor der Manipulation der ersten schützt. Koppeln Sie zum Beispiel Tempo mit Qualität (Zeit bis zur Lösung mit der Wiedereröffnungsquote), Menge mit Ergebnis (geschlossene Tickets mit Nutzerzufriedenheit) und automatisierte Kennzahlen mit stichprobenartiger Prüfung realer Fälle. Ohne Leitplanken driftet eine Kennzahl ab.

**Menschen messen.** Kennzahlen individueller Leistung, etwa Tickets pro Agent, sind besonders anfällig für Manipulation und Ungerechtigkeit, weil Arbeit sich zwischen Menschen unterscheidet und das System prägt, was eine Person erreichen kann. Dieser Leitfaden und das Begleitbuch raten davon ab, Einzelne zu ranken. Nutzen Sie Kennzahlen auf Team-Ebene, um das System zu verstehen.

**Benchmarking.** Der Vergleich mit anderen, wie Wikipedia ihn beschreibt, kann helfen, Erwartungen zu setzen. Vergleiche gelten nur, wo Definitionen, Arbeitsmix und Kontext übereinstimmen. Seien Sie skeptisch gegenüber Vergleichen, die Unterschiede ignorieren.

**Berichtswesen.** Berichte existieren, um Entscheidungen zu informieren. Kennen Sie die Zielgruppe und die Entscheidung. Gute Berichte nennen das Ziel, die Kennzahlen, den Trend, die Erklärung und die Maßnahme. Nutzen Sie visuelle Gestaltung, die die Botschaft klar macht. Wikipedia beschreibt Data und Information visualization sowie Dashboards. Wenige, klarere Ansichten dienen besser als viele.

**Delivery-Kennzahlen.** Forschungsprogramme zur Software-Lieferung, etwa das DORA-Programm, nutzen vier Kennzahlen, oft die vier Schlüsselmetriken genannt: Deployment-Häufigkeit, Durchlaufzeit für Changes, Change-Fehlerrate und Zeit bis zur Wiederherstellung des Service. Sie sind nützliche Fragen an ein Delivery-System. Sie sind keine Werte, um Teams zu ranken. Siehe Thema 2.2 — Continuous Delivery.

**Erlebniskennzahlen.** Umfragen, Zufriedenheitswerte und der Net Promoter Score, auf Wikipedia beschrieben, fragen Nutzer, was sie denken. Sie haben ihre eigenen Grenzen, etwa wer antwortet und wie Fragen formuliert sind. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse.

**Transparenz und Vertrauen.** Menschen vertrauen Kennzahlen, die sie verstehen, mitdefinieren halfen und fair verwendet sehen. Teilen Sie Definitionen, Daten und die Verwendung der Ergebnisse. Sagen Sie klar, dass Kennzahlen zum Lernen da sind.

**Wie die Blickwinkel passen.** Messung ist der Ort, an dem Analytik auf Governance und Verbesserung trifft. Agile Praxis nutzt wenige Kennzahlen, um zu prüfen, ob eine Änderung geholfen hat. KI kann bei Berechnung und Entwurf helfen, unter Prüfung, und braucht selbst Qualitätskennzahlen. Automatisierung erzeugt Messungen aus Werkzeugen.

## Bewährte Praktiken

1. **Beginnen Sie bei Zielen.** Schreiben Sie auf, wofür der Service da ist und wie Erfolg aussieht, und wählen Sie dann Kennzahlen, die zeigen, ob Sie dorthin kommen. Streichen Sie Kennzahlen, die keinem Ziel dienen.
2. **Halten Sie den Satz klein.** Wählen Sie je Service eine Handvoll Kennzahlen zu Ergebnissen, Fluss, Qualität und Erlebnis. Überprüfen Sie den Satz mindestens jährlich.
3. **Definieren Sie jede Kennzahl präzise.** Schreiben Sie Definition, Quelle, Berechnung, Zeitraum, Ausschlüsse, verantwortliche Person und bekannte Grenzen auf. Nutzen Sie die Definitionen im Buch *Service Management Metrics* als Ausgangspunkt.
4. **Benennen Sie den Manipulationsweg und ergänzen Sie eine Leitplanke.** Fragen Sie für jede, wie sie verbessert werden könnte, ohne den Service zu verbessern, und koppeln Sie sie mit einer Prüfung. Prüfen Sie reale Fälle regelmäßig stichprobenartig.
5. **Zeigen Sie Verteilungen und Trends.** Berichten Sie Mediane und Perzentile, die Spanne normaler Schwankung und mehrere Zeiträume. Erklären Sie Veränderungen und unterscheiden Sie Signal von Rauschen.
6. **Setzen Sie Ziele aus Belegen.** Gründen Sie sie auf Historie, Bedarf und Kapazität und vereinbaren Sie sie mit denen, die sie erreichen müssen. Überprüfen Sie sie, wenn sich Umstände ändern.
7. **Messen Sie Systeme, nicht Einzelne.** Nutzen Sie Kennzahlen auf Team- und Service-Ebene, um das System zu verstehen. Ranken Sie Menschen nicht danach.
8. **Berichten Sie, um zu entscheiden.** Benennen Sie für jeden Bericht die Zielgruppe und die Entscheidung. Nennen Sie Befund, Zuversicht und vorgeschlagene Maßnahme. Legen Sie Berichte still, die niemand nutzt.
9. **Seien Sie offen.** Veröffentlichen Sie Definitionen und Ergebnisse an die Gemessenen und laden Sie zu Widerspruch ein. Sagen Sie Menschen, wie die Daten verwendet werden und wie nicht.
10. **Überprüfen und legen Sie still.** Prüfen Sie, ob jede Kennzahl eine Entscheidung verändert hat. Entfernen Sie die, die es nicht tat, und beheben Sie die, die manipuliert wurden.

## Fragen für die Diskussion im Team

**Welche unserer Kennzahlen ließe sich erfüllen, ohne dass es irgendeinem Kunden besser geht?**
Das findet Manipulationswege. Rechnen Sie mit einigen leichten Beispielen. Wählen Sie anschließend eines und vereinbaren Sie eine Leitplanke.

**Welchem Ziel dient jede unserer regelmäßigen Kennzahlen, und wer entscheidet deswegen etwas?**
Gehen Sie den Bericht durch. Rechnen Sie mit mehreren Kennzahlen ohne Ziel und ohne Entscheidung. Streichen Sie anschließend eine.

**Wie definieren wir „gelöst“ und „Reaktionszeit“, und hat jemand die Definition geändert?**
Bitten Sie um die schriftlichen Definitionen. Rechnen Sie mit Uneinigkeit. Schreiben Sie anschließend eine Definition auf und halten Sie ihre Geschichte fest.

**Was sagen unsere Perzentile, das unsere Durchschnitte verbergen?**
Berechnen Sie beides für eine Kennzahl. Rechnen Sie mit einem langen Ausläufer. Vereinbaren Sie anschließend, dafür Perzentile zu berichten.

**Wie werden hier Kennzahlen genutzt, um Einzelne oder Teams zu beurteilen, und was bewirkt das im Verhalten?**
Besprechen Sie es offen. Rechnen Sie mit Geschichten von Manipulation und Angst. Vereinbaren Sie anschließend, dass eine bestimmte Kennzahl zum Lernen verwendet wird, und sagen Sie es schriftlich.

**Wie könnte KI uns beim Berechnen oder Erklären von Kennzahlen helfen, und wie würden wir sie prüfen?**
KI kann rechnen und Kommentare entwerfen. Sie kann auch einen Trend mit einer erfundenen Ursache erklären. Fragen Sie, wer prüft. Wiederholen Sie anschließend eine Berechnung von Hand und vergleichen Sie.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Rettungsdienstes berichtet monatlich an ihr Aufsichtsgremium über 24 Kennzahlen. Das Gremium fragt, warum der Bericht grün ist, während sich Disponenten beschweren, dass das computergestützte Einsatzleitsystem bei Schichtbeginn langsam ist. Die IT-Leiterin beschließt, den Kennzahlensatz gemeinsam mit denen neu aufzubauen, die ihn nutzen.

Sie beginnt mit Zielen, die mit den Leitungen der Einsatzzentrale vereinbart werden: Disponenten können einen Anruf ohne Verzögerung öffnen und aktualisieren; Störungen werden schnell behoben; und Changes stören den Einsatzbetrieb nicht. Sie wählt acht Kennzahlen, jede in einem einseitigen Eintrag definiert, der auf dem Begleitbuch *Service Management Metrics* beruht. Für die „Transaktionszeit der Disponenten“ nennt die Definition, was gemessen wird, ab wo, und dass das 95. Perzentil nach Tageszeit berichtet wird. Die alte Verfügbarkeitskennzahl, gemessen durch einen Ping aus dem Rechenzentrum in Fünf-Minuten-Abständen, bleibt erhalten, wird dem Gremium aber nicht allein gezeigt.

Für jede Kennzahl schreibt das Team den Manipulationsweg und eine Leitplanke auf. „Innerhalb des Ziels gelöste Incidents“ wird mit der Wiedereröffnungsquote und einer monatlichen Stichprobe von 30 Incidents gekoppelt, die ein erfahrener Analyst liest; das Team erkennt, dass schnelles Schließen und spätere Wiedereröffnung die erste Kennzahl schönen würde. Der Bericht an das Gremium zeigt Mediane und 95. Perzentile über 12 Monate mit der Spanne normaler Schwankung und eine kurze Notiz, was sich geändert hat und was das Team tun wird.

Der erste Bericht zeigt, dass sich das 95. Perzentil der Transaktionszeit zwischen 06:30 und 07:30 Uhr verdoppelt, und das Gremium finanziert eine Kapazitätsstudie. Eine Zufriedenheitsfrage, monatlich an 40 Disponenten gestellt, ergänzt eine Sicht auf das Erlebnis. Die IT-Leiterin hält außerdem schriftlich fest, dass keine Kennzahl verwendet wird, um einzelne Analysten zu ranken.

Was sich ändert: Das Gremium bespricht ein reales Problem, und das Team streitet nicht mehr über Definitionen. Was schwierig bleibt: Die neue Transaktionskennzahl hängt von einem Log-Feld ab, das zwei Lieferanten unterschiedlich erfassen, sodass die Daten ungefähr sind; die Antwortquote der Umfrage ist in Nachtschichten niedrig; und eine leitende Führungskraft wünscht für das Gremium weiter einen einzelnen Wert. Die IT-Leiterin behält die acht Kennzahlen und zeigt der Führungskraft, wie ein einzelner Wert das Morgenproblem verbergen würde.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Bauen Sie die Messung in das Produkt ein: Ereignisse, Zeiten und nutzerseitige Indikatoren. Nutzen Sie Delivery-Kennzahlen, um Engpässe zu finden, nicht um Teams zu vergleichen. Teilen Sie Definitionen mit dem Betrieb.

### Service- und Betriebsteams

Wissen Sie, was gemessen wird und wie, und prüfen Sie es an Ihrem eigenen Gefühl für den Service. Berichten Sie Manipulation und schlechte Definitionen ehrlich. Nutzen Sie Kennzahlen, um zu sehen, wo zu verbessern ist.

### Führung und Governance

Verlangen Sie Ziele, Definitionen, Verteilungen und Leitplanken, keine grüne Zusammenfassung. Nutzen Sie Kennzahlen nicht, um Menschen zu ranken. Finanzieren Sie die Datenarbeit und seien Sie bereit, schlechte Nachrichten zu hören.

### Kunden und Nutzer

Man sollte Sie fragen, was zählt, Kennzahlen zeigen, die Ihr Erlebnis abbilden, und Ihnen sagen, was sich ihretwegen ändert. Sagen Sie dem Anbieter, wenn die Zahlen nicht zu dem passen, was Sie sehen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nutzen Sie wenige Kennzahlen, um jede Änderung zu prüfen, mit einer Erwartung und einem Datum, und überprüfen Sie mit Stakeholdern. Legen Sie Kennzahlen still, die nicht mehr informieren. Vorsicht: Lassen Sie Kennzahlen nicht zu Zielen für Teams werden; sie werden die Zahl optimieren.

### KI

KI kann beim Berechnen, Darstellen und Entwerfen von Kommentaren helfen, und KI-Systeme brauchen selbst Kennzahlen zu Genauigkeit, Fehlern und Kosten. Vorsicht: Eine KI-Erklärung, warum sich eine Zahl änderte, kann erfunden sein; verlangen Sie, dass sie auf die Daten verweist, und prüfen Sie. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Erfassung und Berechnung, mit dokumentierten Definitionen und einem Änderungsprotokoll. Vorsicht: Ein automatisierter Bericht kann Jahre laufen, nachdem seine Definition still zerbrochen ist; validieren Sie regelmäßig gegen Rohdaten. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Nutzen Sie Verteilungen, Trend- und Schwankungsmethoden und Stichproben realer Fälle, um Kennzahlen zu prüfen. Vorsicht: Jede Kennzahl kann manipuliert werden, sobald sie zählt; koppeln Sie Kennzahlen und lesen Sie weiter Fälle. Siehe das Buch *Service Management Metrics* und Thema 7.1 — Analytik für das Service-Management.

## Häufige Fehlermuster

- **Grüne Berichte, unzufriedene Kunden.** Kennzahlen verfehlen Ergebnisse. Ergänzen Sie Ergebnis- und Erlebniskennzahlen und Stichproben.
- **Zu viele Kennzahlen.** Niemand kann sie nutzen. Halten Sie wenige, an Ziele gebundene.
- **Vage Definitionen.** Zahlen lassen sich nicht vergleichen. Definieren Sie präzise und halten Sie Änderungen fest.
- **Durchschnitte.** Der Ausläufer bleibt verborgen. Berichten Sie Perzentile und Verteilungen.
- **Ziele ohne Belege.** Manipulation oder Verzweiflung folgen. Gründen Sie Ziele auf Daten und vereinbaren Sie sie.
- **Einzelne ranken.** Vertrauen bricht zusammen, und Zahlen werden manipuliert. Messen Sie Systeme und Teams.
- **Keine Leitplanken.** Kennzahlen driften. Koppeln Sie jede mit einer Prüfung und prüfen Sie Fälle stichprobenartig.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Ziele und Auswahl | Was leicht zu zählen ist | Einige zielbezogene Kennzahlen | Ein kleiner, an Ziele gebundener Satz je Service | Satz an Entscheidungen überprüft | Kennzahlen über Services und Partner abgestimmt |
| Definition und Qualität | Informell | Einige Definitionen | Präzise Definitionen mit Verantwortlichen und Änderungshistorie | Definitionen gegen Rohdaten validiert | Definitionen über Teams geteilt und automatisiert |
| Schutz vor Manipulation | Keiner | Bewusstsein | Manipulationsweg und Leitplanke für jede Kennzahl | Stichproben realer Fälle überprüft | Schutz in Berichtswesen und Kultur eingebaut |
| Berichtswesen und Nutzung | Statische Berichte | Dashboards | Berichte für benannte Entscheidungen mit Trends und Verteilungen | Nutzung und Wirkung verfolgt | Berichtswesen in Planung und Verbesserung integriert |

## Checkliste

- [ ] Jede Kennzahl dient einem schriftlichen Ziel.
- [ ] Jede Kennzahl hat eine präzise Definition, eine verantwortliche Person, eine Quelle und eine Änderungshistorie.
- [ ] Wir berichten Mediane und Perzentile mit Trends.
- [ ] Jede Kennzahl hat einen benannten Manipulationsweg und eine Leitplanke.
- [ ] Wir beziehen Ergebnis- und Erlebniskennzahlen ein.
- [ ] Wir ranken keine Einzelnen anhand der Kennzahlen.
- [ ] Jeder Bericht nennt seine Zielgruppe und die Entscheidung, die er stützt.
- [ ] Wir überprüfen und legen Kennzahlen still, die keine Entscheidungen mehr verändern.

## KI-Prompts

**Schreiben Sie eine Kennzahldefinition zur Prüfung.**

```text
Metric name: [name]. What we want to know: [goal in plain words]. Data we have: [fields and source].
Draft a definition with: purpose, population, start and end events, exclusions, calculation, period, source, owner (leave blank), and known limits. Then list two ways the metric could be gamed and one guardrail for each. Mark any assumption.
List what you are unsure of.
```

**Prüfen Sie einen Bericht auf häufige Probleme.**

```text
Here is a monthly report with its measures and a short commentary: [paste].
List measures without a stated goal, uses of averages where percentiles would help, claims of cause not supported by the data, comparisons that may not be like for like, and anything that could be gamed. Quote the text for each. Do not rewrite the report.
List what you are unsure of.
```

**Erklären Sie eine Veränderung einer Kennzahl.**

```text
The measure [name] changed from [value] to [value]. Here are other facts from the same period: [paste, such as changes in tools, staffing, volumes, definitions].
List possible explanations as hypotheses, what data would test each, and which are not supported by the facts given. Do not state a cause as fact.
List what you are unsure of.
```

## KI-Skills

- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): nutzen Sie ihn, um Delivery-Kennzahlen mit ihren Risiken zu definieren.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): nutzen Sie ihn, um Frühwarnindikatoren zu wählen.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): nutzen Sie ihn, um Schwankung und Unsicherheit zu analysieren.
- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um Erlebniskennzahlen zu gestalten, die Verzerrung vermeiden.
- [trend-analysis](../../../../skills/trend-analysis/SKILL.md): nutzen Sie ihn, um Veränderung über die Zeit zu untersuchen.

## Wichtige Quellen

- Das Begleitbuch *Service Management Metrics*: Metrikdefinitionen, Manipulationswege und Leitplanken, auf die dieses Thema durchgehend verweist.
- Nicole Forsgren, Jez Humble und Gene Kim, *Accelerate* (2018), und DORA (dora.dev): Forschung zu Delivery-Kennzahlen.
- Donald J. Wheeler, *Understanding Variation* (1993): eine klare Darstellung von Signal und Rauschen in Kennzahlen.
- Wikipedia, „Goodhart's law“ und „Performance indicator“: Überblicke über die Hauptideen.

## Literaturverzeichnis

1. Performance indicator — Wikipedia — https://en.wikipedia.org/wiki/Performance_indicator
2. Balanced scorecard — Wikipedia — https://en.wikipedia.org/wiki/Balanced_scorecard
3. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
5. Campbell's law — Wikipedia — https://en.wikipedia.org/wiki/Campbell%27s_law
6. Perverse incentive — Wikipedia — https://en.wikipedia.org/wiki/Perverse_incentive
7. Economic indicator — Wikipedia — https://en.wikipedia.org/wiki/Economic_indicator
8. Control chart — Wikipedia — https://en.wikipedia.org/wiki/Control_chart
9. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
10. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
11. Data and information visualization — Wikipedia — https://en.wikipedia.org/wiki/Data_and_information_visualization
12. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
