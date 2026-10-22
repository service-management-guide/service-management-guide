# Observability und Telemetrie

**Observability ist die Fähigkeit, einem laufenden System neue Fragen zu stellen und Antworten aus den Daten zu erhalten, die es aussendet: Metriken, Logs und Traces mit einheitlichem Kontext. Sie zahlt sich aus, wenn Telemetrie von Anfang an eingeplant, auf offenen Formaten standardisiert, zu tragbaren Kosten betrieben und genutzt wird, um das Nutzererlebnis zu verstehen, nicht nur den Zustand der Maschinen.**

## Warum das wichtig ist

Monitoring beantwortet Fragen, die Sie sich vorab überlegt haben. Ist der Service oben? Ist die Platte voll? Liegt die Latenz über zwei Sekunden? Das sind gute Fragen, und sie fangen die Fehler, die Sie schon kennen. Moderne Services scheitern aber auf neue Weise. Eine Änderung in einer Komponente verlangsamt eine Anfrage in einer anderen. Die ungewöhnlichen Daten eines einzelnen Kunden lösen einen seltenen Pfad aus. Eine Abhängigkeit drei Schichten tiefer verschlechtert sich, und dafür hat niemand ein Dashboard.

Wenn ein neuer Fehler auftritt, muss das Team Fragen stellen, die niemand vorausgesehen hat: Welche Anfragen sind langsam, für welche Nutzer, über welche Services, seit welchem Release? Sendet das System reiche, verbundene Daten aus, kann das Team der Spur folgen. Andernfalls rät es, ergänzt Logging, rollt neu aus und wartet, bis der Fehler wieder auftritt. Wikipedia beschreibt Observability in der Software als die Fähigkeit, den inneren Zustand eines Systems aus seinen äußeren Ausgaben zu verstehen, eine aus der Regelungstheorie entlehnte Idee.

Die praktische Arbeit steckt in der Telemetrie: den Daten, die Systeme über sich selbst aussenden. Gute Telemetrie ist entworfen, einheitlich und verbunden, sodass sich eine Nutzerbeschwerde zu einer Anfrage zurückverfolgen lässt, die Anfrage zu den berührten Services und die Langsamkeit zu einem bestimmten Aufruf. Dieses Thema beschreibt die Hauptarten der Telemetrie, die Standards, die sie portabel machen, und die Kosten und Risiken, die dazugehören. Es baut auf Monitoring (Thema 3.10 — Monitoring und Event-Management) auf und verbindet sich mit SRE (Thema 2.6 — Site Reliability Engineering), AIOps (Thema 5.2 — AIOps) und Data Governance (Thema 7.2 — Datengrundlagen und Data Governance).

## Kernkonzepte

**Telemetrie.** Daten, die von einem System erfasst und an einen Ort gesendet werden, wo sie untersucht werden können. Wikipedia beschreibt Telemetry allgemein. In der Software sind die Hauptsignale Metriken, Logs und Traces, mit neueren wie Profilen und Ereignissen.

**Metriken.** Über die Zeit gemessene Zahlen, etwa Anfragerate, Fehlerrate, Latenz, Speicherverbrauch und Warteschlangentiefe. Metriken sind billig zu speichern und gut für Trends, Alarme und Dashboards. Sie fassen zusammen und verlieren daher Details zu einzelnen Anfragen. Zeitreihendatenbanken (Time series databases), auf Wikipedia beschrieben, speichern sie effizient; Prometheus ist ein weit verbreitetes Open-Source-Beispiel.

**Logs.** Mit Zeitstempel versehene Aufzeichnungen einzelner Ereignisse, etwa einer Fehlermeldung oder einer abgeschlossenen Transaktion. Wikipedia beschreibt Logging in computing. Logs enthalten Details, sind umfangreich und teuer zu speichern und zu durchsuchen. Strukturierte Logs, mit einheitlichen benannten Feldern statt Freitext, lassen sich leichter abfragen und mit anderen Signalen verknüpfen.

**Traces.** Eine Aufzeichnung des Wegs einer Anfrage durch die Teile eines verteilten Systems, die zeigt, durch welche Services sie ging und wie lange jeder brauchte. Wikipedia beschreibt Tracing in software. Traces beantworten „Wo ging die Zeit hin?“ in Systemen aus vielen Services, etwa Microservices, die Wikipedia ebenfalls beschreibt.

**Kontext und Korrelation.** Was die drei Signale gemeinsam mächtig macht, ist geteilter Kontext: eine Kennung, die eine Log-Zeile mit dem Trace und der Anfrage des Nutzers verbindet, und Labels wie Service, Version und Umgebung an allem. Ohne geteilten Kontext haben Sie drei Haufen Daten. Mit ihm können Sie von einer langsamen Anfrage in einer Metrik zum Trace und dann zur Log-Zeile gelangen, die sie erklärt.

**Instrumentierung.** Den Code ergänzen, der Telemetrie erzeugt. Wikipedia beschreibt Instrumentation in programming. Sie kann automatisch erfolgen, über Bibliotheken und Agenten, oder manuell, indem Entwicklerinnen die Signale ergänzen, die für das Geschäft zählen, etwa „Bestellung aufgegeben“. Instrumentieren Sie, was Nutzer tun, nicht nur, was Maschinen tun.

**OpenTelemetry und offene Standards.** OpenTelemetry ist ein Open-Source-Projekt unter der Cloud Native Computing Foundation (die Wikipedia beschreibt), das gemeinsame Formate und Werkzeuge zum Aussenden von Metriken, Logs und Traces bietet, unabhängig vom Werkzeug, das sie speichert und analysiert. Prüfen Sie auf der Website des Projekts den aktuellen Stand. Ziel ist, Telemetrie einmal zu erfassen und an jedes kompatible Back-End zu senden und so die Bindung an einen Anbieter zu verringern. Wikipedia beschreibt Open standards und Vendor lock-in allgemein. Siehe Thema 3.14 — Lieferantenmanagement.

**Monitoring versus Observability.** Monitoring beobachtet bekannte Bedingungen und alarmiert; Observability unterstützt das Erkunden unbekannter. Sie ergänzen einander: Alarme sagen, dass etwas falsch ist, Erkunden sagt, warum. Siehe Thema 3.10 — Monitoring und Event-Management.

**Service-Level-Indikatoren aus Telemetrie.** SLIs, etwa der Anteil der Anfragen, die innerhalb einer Zeit gelingen, werden aus Telemetrie berechnet. Definieren Sie sie aus Sicht des Nutzers und messen Sie dort, wo die Anfrage des Nutzers ins System eintritt. Siehe Thema 2.6 — Site Reliability Engineering und den Wikipedia-Artikel zu Service-level objectives.

**Nutzer- und Geschäftstelemetrie.** Real user monitoring und Synthetic monitoring, auf Wikipedia beschrieben, zeigen das Erlebnis von außen: Seitenladezeiten, Erfolg von Abläufen, Fehler in Browsern und Apps. Geschäftsereignisse, etwa Anmeldungen und Zahlungen, verbinden technische Gesundheit mit Ergebnissen. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse.

**Kardinalität und Kosten.** Kardinalität ist die Zahl unterschiedlicher Werte eines Labels. Eine Metrik, die mit der Nutzerkennung etikettiert ist, hat eine riesige Kardinalität und kann einen Metrikspeicher überfordern. Wikipedia beschreibt Cardinality in data modeling. Das Telemetrievolumen wächst mit Verkehr und Detailtiefe, und Speicher- und Verarbeitungskosten wachsen mit. Entscheiden Sie, was Sie in voller Detailtiefe behalten, was Sie per Stichprobe erfassen und was Sie aggregieren.

**Sampling.** Nur einen Bruchteil der Traces oder Logs behalten. Wikipedia beschreibt Sampling in statistics. Sampling senkt Kosten und kann seltene Ereignisse verbergen; erwägen Sie, alle Fehler und langsamen Anfragen zu behalten und die normalen per Stichprobe zu erfassen.

**Aufbewahrung.** Wie lange Telemetrie aufbewahrt wird. Behalten Sie Daten mit hoher Detailtiefe kurz und Aggregate länger. Aufbewahrung beeinflusst Kosten, Untersuchung und Datenschutz. Siehe Thema 7.2 — Datengrundlagen und Data Governance.

**Datenschutz und Sicherheit in der Telemetrie.** Logs und Traces können personenbezogene Daten, Zugangsdaten und Geheimnisse enthalten, aus Versehen oder Absicht. Wikipedia beschreibt Personal data. Bereinigen oder vermeiden Sie sensible Felder an der Quelle, kontrollieren Sie den Zugriff und setzen Sie die Aufbewahrung fest. Telemetrie ist auch eine Sicherheitsdatenquelle. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Observability für KI.** KI-Systeme brauchen eigene Telemetrie: Eingaben, Ausgaben, Latenz, Kosten, Fehler- und Ablehnungsraten, Nutzerfeedback und Signale für Drift. Erfassen Sie genug, um eine falsche Antwort zu untersuchen, mit Sorgfalt bei den erfassten Daten. Siehe Thema 5.1 — KI im Service-Management.

**Plattform und Verantwortung.** Viele Organisationen betreiben eine gemeinsame Telemetrie-Plattform, mit Standards für Benennung, Labels und Aufbewahrung und Teams, die die Signale ihrer Services verantworten. Ein Plattform-Team stellt Werkzeuge und Anleitung bereit; Service-Teams verantworten, was sie aussenden und wie sie es nutzen.

**Wie die Blickwinkel passen.** Observability ist die Datenbasis für Analytik und für AIOps. Agile Praxis behandelt Instrumentierung als Teil der Definition of Done. Automatisierung nutzt Telemetrie zum Skalieren und Beheben.

## Bewährte Praktiken

1. **Instrumentieren Sie beim Bauen.** Behandeln Sie Telemetrie als Teil des Features. Nehmen Sie sie in die Definition of Done auf und prüfen Sie sie zusammen mit dem Entwurf.
2. **Vereinheitlichen Sie Namen und Kontext.** Vereinbaren Sie Service-Namen, Label-Sätze, Einheiten und eine Anfragekennung, die durch jeden Service getragen wird. Dokumentieren Sie sie und prüfen Sie sie in der Pipeline.
3. **Senden Sie strukturierte Logs.** Nutzen Sie einheitliche benannte Felder, nehmen Sie die Anfragekennung auf und halten Sie Meldungen kurz. Vermeiden Sie, Geheimnisse und unnötige personenbezogene Daten zu protokollieren.
4. **Verfolgen Sie die Pfade, die zählen.** Instrumentieren Sie die wichtigsten Nutzerabläufe und die Aufrufe zwischen Services und reichen Sie Kontext an jeder Station weiter, auch an Warteschlangen und externen Aufrufen.
5. **Definieren Sie Indikatoren aus Sicht des Nutzers.** Berechnen Sie SLIs aus Telemetrie am Punkt des Nutzerkontakts und ergänzen Sie Geschäftsereignisse, die zeigen, ob Nutzer erreichten, wofür sie kamen.
6. **Nutzen Sie offene Formate.** Bevorzugen Sie offene Standards zum Aussenden von Telemetrie, damit Sie Back-Ends wechseln können, ohne neu zu instrumentieren. Prüfen Sie die Unterstützung in Ihren Plattformen.
7. **Steuern Sie Kosten bewusst.** Setzen Sie Budgets für Telemetrie, vermeiden Sie Labels mit hoher Kardinalität, erfassen Sie normalen Verkehr per Stichprobe, behalten Sie Fehler und langsame Anfragen und staffeln Sie die Aufbewahrung.
8. **Schützen Sie Telemetrie.** Bereinigen Sie sensible Daten an der Quelle, beschränken Sie den Zugriff und wenden Sie Aufbewahrungsregeln an. Überwachen Sie den Zugriff auf Telemetriespeicher.
9. **Machen Sie sie nutzbar.** Geben Sie Teams gemeinsame Dashboards, gespeicherte Abfragen und Schulung, wie man untersucht. Verknüpfen Sie Alarme mit der relevanten Telemetrie und mit Runbooks.
10. **Überprüfen Sie Telemetrie nach Incidents.** Fragen Sie, was Sie während des Incidents nicht sehen konnten, und ergänzen Sie es. Entfernen Sie Signale, die niemand nutzt.

## Fragen für die Diskussion im Team

**Was wollten wir bei unserem letzten Incident wissen, konnten es aber nicht herausfinden?**
Fragen Sie die Einsatzkräfte. Rechnen Sie mit Lücken bei Traces, Kontext oder Nutzerdaten. Wählen Sie anschließend eine Lücke und ergänzen Sie das Signal.

**Können wir die Anfrage eines einzelnen Nutzers durch alle berührten Services verfolgen?**
Probieren Sie es mit einer realen Anfrage. Rechnen Sie mit Brüchen an Warteschlangen und externen Aufrufen. Reichen Sie anschließend die Kennung durch den ersten Bruch hindurch.

**Was protokollieren wir, das wir nicht sollten, und was protokollieren wir nicht, das wir sollten?**
Sehen Sie sich eine Stichprobe von Logs an. Rechnen Sie mit Geheimnissen, personenbezogenen Daten und Rauschen. Vereinbaren Sie anschließend eine Regel und eine Bereinigung.

**Wie viel geben wir für Telemetrie aus, und was bekommen wir dafür?**
Bitten Sie um die Zahl und die größten Quellen. Rechnen Sie mit Überraschungen. Wählen Sie anschließend das teuerste und am wenigsten genutzte Signal, um es zu kürzen oder per Stichprobe zu erfassen.

**Wie sehr sind wir an unser aktuelles Telemetrie-Werkzeug gebunden, und was bräuchte ein Wechsel?**
Schätzen Sie. Rechnen Sie mit „viel“. Wählen Sie anschließend einen Service, der mit einem offenen Standard instrumentiert wird.

**Welche Telemetrie erzeugen unsere KI-Funktionen, und könnten wir daraus eine falsche Antwort untersuchen?**
Fragen Sie. Rechnen Sie mit minimalen Aufzeichnungen. Vereinbaren Sie anschließend, was erfasst wird, mit Datenschutzgrenzen, und probieren Sie eine Untersuchung aus.

## In der Praxis: ein Beispiel aus dem Service-Management

Die öffentliche API eines nationalen Wetterdienstes bedient mehrere Millionen Anfragen am Tag über acht interne Services. Nutzer beklagen gelegentlich langsame Antworten für bestimmte Orte. Das Monitoring zeigt die API im Durchschnitt innerhalb ihres Latenzziels, und jeder Service sieht für sich gesund aus. Der Bereitschafts-Engineer verbringt zwei Tage mit der Suche nach dem Problem.

Das Plattform-Team stellt gerade auf OpenTelemetry-Instrumentierung um. Am Gateway der API und an vier der acht Services tragen Anfragen eine Trace-Kennung, und jeder Service zeichnet Spans mit Zeiten auf. Mit Traces filtert ein Engineer nach langsamen Anfragen der letzten Woche und sieht, dass fast alle durch denselben Aufruf laufen: eine Abfrage im Geodaten-Service für Orte mit ungewöhnlichen Zeichen im Namen, die zehnmal länger dauert als normal. Die anderen vier Services sind noch nicht instrumentiert, doch die Lücke ist nun eng genug, um sie von Hand zu untersuchen. Die Ursache ist ein fehlender Datenbankindex für diese Abfragen, und die Behebung dauert eine Stunde.

Das Team überprüft die Kosten. Die Ausgaben für Telemetrie sind in sechs Monaten um 40 Prozent gewachsen, vor allem durch ein Label an einer Metrik, das den angefragten Ort enthält und Hunderttausende Werte hat. Sie entfernen das Label, behalten den Ort in Traces und Logs und erfassen 5 Prozent der gewöhnlichen Traces per Stichprobe, während sie alle Fehler und langsamen Anfragen behalten. Eine Bereinigung entfernt IP-Adressen nach 24 Stunden aus den Logs, nachdem die Datenschutzbeauftragte angemerkt hat, dass sie in manchen Rechtsordnungen als personenbezogene Daten gelten.

Das Team ergänzt außerdem ein Geschäftssignal: eine Zählung der API-Aufrufe, die ein leeres Ergebnis lieferten, was Nutzer früher als „keine Daten“ meldeten. Es zeigt nach jeder Modellaktualisierung ein Muster.

Was sich ändert: Untersuchungen dauern Stunden statt Tage, und die Kosten sinken um ein Drittel. Was schwierig bleibt: Vier Services haben noch keine Traces, und zwei gehören einer anderen Behörde; die Sampling-Regel hat bereits einen seltenen Fehler verborgen, der nur im nicht erfassten Verkehr auftrat und in einem Log gefunden wurde; und Engineers brauchen Übung, um Trace-Werkzeuge gut zu nutzen. Das Team plant eine Schulung ein und setzt eine Regel, alle Traces mit irgendeinem Fehler zu behalten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Bauen Sie Telemetrie in Features ein: einheitliche Namen, Anfragekennungen, strukturierte Logs, Spans auf wichtigen Pfaden und Geschäftsereignisse. Vermeiden Sie Geheimnisse in Signalen und prüfen Sie Telemetrie im Entwurf.

### Service- und Betriebsteams

Nutzen Sie Telemetrie zum Untersuchen, nicht nur zum Alarmieren. Halten Sie Dashboards, Abfragen und Runbooks verknüpft und sagen Sie Entwicklern, was Sie nicht sehen konnten. Achten Sie auf Kosten und Qualität der Telemetrie.

### Führung und Governance

Finanzieren Sie Plattform, Standards und Schulung. Verlangen Sie Belege, dass Telemetrie Untersuchungen verkürzt und das Nutzererlebnis abbildet. Setzen Sie Budgets und Datenschutzregeln und bevorzugen Sie offene Standards.

### Kunden und Nutzer

Sie profitieren, wenn ein Anbieter Ihr Problem schnell auf eine Ursache zurückführen kann. Geben Sie bei einer Meldung Einzelheiten an, etwa Zeit und was Sie taten, die helfen, Ihre Anfrage zu finden.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Ergänzen Sie Instrumentierung in kleinen Schritten mit jedem Feature und verfeinern Sie sie nach jedem Incident. Überprüfen Sie Dashboards mit dem Team und entfernen Sie die, die niemand nutzt. Vorsicht: Telemetrie am Ende anzuflanschen erzeugt Lücken; nehmen Sie sie in die Definition of Done auf.

### KI

KI kann Traces und Logs zusammenfassen, Anomalien gruppieren und Fragen zur Telemetrie beantworten, mit Verantwortlichen und Prüfungen. KI-Funktionen brauchen auch eigene Telemetrie. Vorsicht: KI-Analyse hängt von Qualität und Kontext der Daten ab; schlechte Labels erzeugen schlechte Schlüsse. Siehe Thema 5.2 — AIOps.

### Automatisierung

Automatisieren Sie Instrumentierung, wo Bibliotheken es erlauben, erzwingen Sie Benennungs- und Label-Standards in der Pipeline und nutzen Sie Telemetrie für Skalierung und Behebung mit Limits. Vorsicht: Automatisierung, die durch verrauschte Telemetrie ausgelöst wird, kann fehlzünden; testen Sie Schwellen und ergänzen Sie Limits. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Nutzen Sie Telemetrie für SLIs, Trends, Kapazität und Nutzererlebnis sowie für die Kosten der Telemetrie selbst. Vorsicht: Sampling und Aggregation verändern, was die Daten zeigen können, und Labels mit hoher Kardinalität können Systeme verzerren oder brechen; nennen Sie die Grenzen in Berichten. Siehe Thema 7.1 — Analytik für das Service-Management und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Drei Haufen Daten.** Metriken, Logs und Traces lassen sich nicht verknüpfen. Teilen Sie Kennungen und Labels.
- **Telemetrie als Nachgedanke.** In Incidents zeigen sich Lücken. Instrumentieren Sie mit dem Feature.
- **Labels mit hoher Kardinalität.** Kosten und Leistung leiden. Begrenzen Sie Labels und halten Sie Details in Traces und Logs.
- **Geheimnisse und personenbezogene Daten in Logs.** Sensible Daten lecken. Bereinigen Sie an der Quelle und kontrollieren Sie den Zugriff.
- **Bindung an ein Werkzeug.** Wechseln ist teuer. Nutzen Sie offene Standards.
- **Alles ewig behalten.** Die Kosten steigen. Staffeln Sie die Aufbewahrung und erfassen Sie per Stichprobe.
- **Dashboards, die niemand nutzt.** Aufwand wird verschwendet. Beschneiden Sie und verknüpfen Sie mit Entscheidungen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Abdeckung | Infrastrukturmetriken | Schlüssel-Services mit Metriken und Logs | Metriken, Logs und Traces mit geteiltem Kontext auf wichtigen Abläufen | Abdeckung nach Incidents überprüft | Abdeckung über Services und Lieferanten hinweg einheitlich |
| Standards | Keine | Lokale Konventionen | Benennung, Labels und offene Formate vereinbart | Standards in der Pipeline geprüft | Standards geteilt und mit der Plattform weiterentwickelt |
| Kosten und Aufbewahrung | Ungesteuert | Bewusstsein | Budgets, Sampling und gestaffelte Aufbewahrung | Kosten je Signal und Wert überprüft | Kosten und Wert laufend optimiert |
| Schutz | Unklar | Grundlegende Zugriffskontrolle | Regeln für Bereinigung, Zugriff und Aufbewahrung | Compliance überwacht | Kontrollen in Erfassung und Speicherung eingebaut |

## Checkliste

- [ ] Telemetrie ist Teil unserer Definition of Done.
- [ ] Wir haben vereinbarte Namen, Labels, Einheiten und eine Anfragekennung, die über Services hinweg getragen wird.
- [ ] Logs sind strukturiert und frei von Geheimnissen und unnötigen personenbezogenen Daten.
- [ ] Wichtige Nutzerabläufe werden durchgängig verfolgt.
- [ ] SLIs werden aus Telemetrie am Punkt des Nutzerkontakts berechnet.
- [ ] Wir nutzen offene Formate zum Aussenden von Telemetrie.
- [ ] Wir haben ein Telemetrie-Budget mit Sampling und gestaffelter Aufbewahrung.
- [ ] Wir überprüfen nach jedem Incident, was wir nicht sehen konnten.

## KI-Prompts

**Finden Sie Telemetrie-Lücken aus einem Incident.**

```text
Here is the timeline of an incident and notes on what responders tried to find out: [paste].
List each question the responders could not answer, what signal would have answered it (metric, log, trace, user data), and a question for the owning team. Do not assume any signal exists.
List what you are unsure of.
```

**Prüfen Sie eine Log-Stichprobe auf sensible Daten.**

```text
Here is a sample of log lines from our service: [paste, already partially scrubbed].
List any content that looks like secrets, personal data, or internal details, quoting the exact text, and suggest categories of scrub rules. Do not guess whether any is real.
List what you are unsure of.
```

**Schlagen Sie einen Benennungs- und Label-Standard vor.**

```text
Our services: [list]. Our environments: [list]. Our teams: [list]. What we want to be able to filter by: [list].
Draft a one-page standard for service names, label keys, allowed values, and request identifiers, with examples. Warn about labels that could have very many distinct values. Do not name a vendor.
List what you are unsure of.
```

## KI-Skills

- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): nutzen Sie ihn, um ungewöhnliche Muster in Telemetrie zu untersuchen.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): nutzen Sie ihn, um zu gestalten, wie Telemetrie sich bewegt und gespeichert wird.
- [data-governance](../../../../skills/data-governance/SKILL.md): nutzen Sie ihn, um Regeln für Datenschutz, Aufbewahrung und Zugriff festzulegen.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): nutzen Sie ihn, um Frühwarnsignale zu wählen.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): nutzen Sie ihn, um Latenz und Kapazität mit Telemetrie zu testen.

## Wichtige Quellen

- OpenTelemetry (opentelemetry.io): der offene Standard und die Werkzeuge für Metriken, Logs und Traces.
- Charity Majors, Liz Fong-Jones und George Miranda, *Observability Engineering* (2022): ein Praxisleitfaden zum Ansatz.
- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zum Monitoring, frei unter sre.google.
- Wikipedia, „Observability (software)“ und „Telemetry“: Überblicke über die Ideen.

## Literaturverzeichnis

1. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
2. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
3. Logging (computing) — Wikipedia — https://en.wikipedia.org/wiki/Logging_(computing)
4. Tracing (software) — Wikipedia — https://en.wikipedia.org/wiki/Tracing_(software)
5. Time series database — Wikipedia — https://en.wikipedia.org/wiki/Time_series_database
6. Prometheus (software) — Wikipedia — https://en.wikipedia.org/wiki/Prometheus_(software)
7. Cloud Native Computing Foundation — Wikipedia — https://en.wikipedia.org/wiki/Cloud_Native_Computing_Foundation
8. Instrumentation (computer programming) — Wikipedia — https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
9. Cardinality (data modeling) — Wikipedia — https://en.wikipedia.org/wiki/Cardinality_(data_modeling)
10. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
11. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
12. OpenTelemetry — Cloud Native Computing Foundation — https://opentelemetry.io
