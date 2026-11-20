# Runbook-Automatisierung und automatische Behebung

**Runbook-Automatisierung verwandelt ein dokumentiertes, getestetes Verfahren in Code, den eine Person oder ein Alarm auslösen kann, und automatische Behebung lässt ein Monitoring-Signal es ohne Person auslösen. Beides ist nur für gut verstandene, umkehrbare Handlungen sicher, mit Grenzen, Protokollen, einem manuellen Stopp und einer verantwortlichen Person, die prüft, wie oft sie auslösen.**

## Warum das wichtig ist

Bereitschaftsarbeit hat eine Gestalt. Ein Alarm löst aus. Ein müder Engineer öffnet ein Runbook, folgt einer Reihe von Schritten, startet etwas neu, prüft, dass es funktioniert hat, und legt sich wieder schlafen. Eine Woche später löst derselbe Alarm aus, und dieselben Schritte werden befolgt. Beim zehnten Mal fragt jemand: Warum tut das ein Mensch?

Er hat recht. Eine bekannte Korrektur von Hand zu wiederholen ist langsam, fehleranfällig und zermürbend für die Menschen, die es tun. Dieselben Schritte, als Code geschrieben, laufen in Sekunden, jedes Mal gleich, und hinterlassen eine Aufzeichnung. Wikipedia beschreibt Runbooks als Zusammenstellungen routinemäßiger Verfahren, die ein Operator ausführt. Sie ausführbar zu machen und in manchen Fällen von selbst laufen zu lassen, ist der Schritt von Dokumentation zu Automatisierung.

Der Schritt ist auch eine Gefahr. Ein von einem Menschen gelesenes Runbook läuft bei jedem Schritt durch menschliches Urteil. Code nicht. Ein falscher automatischer Neustart kann sich endlos wiederholen oder einen gesunden Service lahmlegen oder ein tieferes Problem verdecken, bis es viel schlimmer ist. Viele Ausfälle wurden durch gut gemeinte Behebung verlängert oder verursacht, die schnell das Falsche tat. Wikipedia beschreibt Autonomic computing, das lang gehegte Ziel von Systemen, die sich selbst steuern, und die praktische Lehre ist, dass Autonomie Grenzen braucht.

Dieses Thema beschreibt, wie man mit Sorgfalt vom Dokument über das Skript zur automatischen Handlung gelangt. Es baut auf Wissensmanagement (Thema 3.9 — Wissensmanagement), Monitoring (Thema 3.10 — Monitoring und Event-Management), Incident-Management (Thema 3.2 — Incident-Management) und Automatisierungsstrategie (Thema 6.1 — Automatisierungsstrategie) auf. Es verbindet sich mit KI im Betrieb (Thema 5.2 — AIOps) und mit Agenten, die handeln (Thema 5.5 — Agentische KI und menschliche Aufsicht).

## Kernkonzepte

**Runbook.** Ein dokumentiertes Verfahren für eine bestimmte, wiederkehrende betriebliche Aufgabe oder Situation. Wikipedia beschreibt Runbooks. Ein gutes Runbook hat einen Auslöser, nummerierte Schritte, erwartete Ergebnisse, einen Verifizierungsschritt und einen Eskalationsweg. Siehe Thema 3.9 — Wissensmanagement.

**Runbook-Automatisierung.** Ein Runbook als Code umzusetzen, der einige oder alle seiner Schritte ausführt, meist ausgelöst von einer Person über eine Konsole oder einen Chat-Befehl oder durch ein Systemereignis. Sie bewahrt die Logik des Runbooks, mit dem Vorteil von Tempo, Einheitlichkeit und Aufzeichnungen.

**Automatische Behebung (Auto-Remediation).** Automatische Korrekturhandlung als Reaktion auf einen Alarm oder ein Ereignis, ohne dass eine Person sie startet. Beispiele sind einen ausgefallenen Prozess neu zu starten, ein volles temporäres Verzeichnis zu leeren, einen Worker-Pool hochzuskalieren oder auf ein Standby umzuschalten. Der Wikipedia-Artikel zu Autonomic computing beschreibt Systeme, die ihre eigenen Fehler erkennen und korrigieren, als Ziel. In der Praxis deckt automatische Behebung eine enge Menge gut verstandener Fehler ab.

**Eine Stufenfolge.** Teams durchlaufen häufig Stufen: ein geschriebenes Runbook; ein Runbook mit Skripten, die eine Person ausführt; ein Runbook, das eine Person mit einem Befehl auslöst, wobei das Skript zuerst Prüfungen sammelt; ein Alarm, der die Handlung vorschlägt und um Genehmigung bittet; und ein Alarm, der die Handlung innerhalb von Grenzen allein ausführt. Jede Stufe braucht Belege aus der vorherigen. Überspringen Sie bei Handlungen mit realen Folgen keine Stufen.

**Was sich für automatische Handlung eignet.** Ein Fehler, der häufig ist, dessen Ursache und Behebung gut verstanden sind, dessen Behebung sicher und umkehrbar ist und dessen Symptom ihn verlässlich identifiziert. Beispiele sind ein hängender zustandsloser Worker oder ein Log-Verzeichnis, das sich füllt. Schlechte Kandidaten sind alles, was Daten löscht, Zugriff ändert oder vom Urteil über geschäftliche Auswirkung abhängt.

**Sicherheitsbedingungen.** Prüfen Sie vor dem Handeln, dass die Lage wirklich passt: Der Alarm ist aktuell, der Service ist im erwarteten Zustand, es läuft kein Deployment oder keine Wartung, und die Handlung ist nicht gerade gelaufen. Verifizieren Sie danach das Ergebnis. Wikipedia beschreibt einen Probelauf (Dry run), eine Probe, die zeigt, was geschehen würde, ohne es zu tun; er ist ein nützlicher Modus für neue Automatisierungen.

**Limits.** Begrenzen Sie, wie oft eine Handlung in einem Zeitraum laufen, wie viele Instanzen sie auf einmal berühren und wie lange sie laufen darf. Wikipedia beschreibt Rate limiting. Ein Limit macht einen Amoklauf zu einem begrenzten Ereignis, und das Überschreiten eines Limits sollte eine Person rufen.

**Sicherungsschalter (Circuit Breaker) und Backoff.** Scheitert eine automatische Handlung wiederholt oder löst sie wiederholt aus, halten Sie an und eskalieren Sie, statt endlos zu wiederholen. Wikipedia beschreibt das Circuit-Breaker-Muster, bei dem wiederholte Fehler einen Schalter auslösen, der weitere Versuche für eine Zeit stoppt. Fügen Sie Pausen zwischen Wiederholungen und Hysterese (Hysteresis), auf Wikipedia beschrieben, hinzu, um Flattern zwischen Zuständen zu verhindern.

**Idempotenz.** Eine Handlung, die sich sicher wiederholen lässt. Wikipedia beschreibt Idempotence. Einen Service neu zu starten, wenn er schon neu startet, sollte keinen zweiten Neustart-Sturm auslösen. Gestalten Sie Handlungen, die zuerst den Zustand prüfen.

**Watchdogs und eingebaute Wiederherstellung.** Plattformen bieten eigene Wiederherstellungsmechanismen: Prozess-Supervisoren, die abgestürzte Services neu starten, Container-Plattformen, die ausfallende Instanzen ersetzen, und Watchdog-Timer, auf Wikipedia beschrieben, die ein hängendes System zurücksetzen. Bevorzugen Sie eingebaute Mechanismen gegenüber eigenen Skripten, wo sie passen, und verstehen Sie, was sie tun.

**Failover und Skalierung.** Automatisches Failover auf ein Standby und automatische Skalierung der Kapazität sind Formen automatischer Behebung, die Plattformen oft bieten. Wikipedia beschreibt Failover und Autoscaling. Auch sie brauchen Tests und Limits, denn sie können Dinge verschlimmern: Ein Failover, ausgelöst durch einen kurzen Aussetzer, kann einen gesunden Service unterbrechen.

**Probleme verdecken.** Eine Automatisierung, die einen Fehler still behebt, kann eine sich verschlimmernde Ursache verbergen. Wird ein Service jede Stunde neu gestartet, ist der Neustart ein Symptom eines Problems, das behoben werden muss. Verfolgen Sie, wie oft jede Automatisierung auslöst, und behandeln Sie eine steigende Rate als Problem, dem nachzugehen ist. Siehe Thema 3.3 — Problem-Management.

**Logs, Audit und Benachrichtigung.** Jede automatische Handlung sollte aufzeichnen, was sie auslöste, was sie prüfte, was sie tat und was das Ergebnis war, und das verantwortliche Team benachrichtigen. Stille Automatisierung untergräbt das Verständnis des Systems. Wikipedia beschreibt Audit trails allgemein.

**Testen.** Testen Sie Automatisierungen an realistischen Fehlern in einer sicheren Umgebung, einschließlich Fällen, in denen die Prüfungen die Handlung stoppen sollten. Wikipedia beschreibt Chaos engineering, die Praxis, Fehler gezielt einzuführen, was auch testen kann, ob die Behebung sich richtig verhält. Siehe Thema 3.12 — Service-Continuity-Management.

**Verantwortung und Überprüfung.** Jede Automatisierung hat eine verantwortliche Person, liegt mit Prüfung in der Versionsverwaltung und erscheint in einem Register. Überprüfen Sie regelmäßig, wie oft sie auslöst, ob sie erfolgreich war und ob die zugrunde liegende Ursache behoben werden sollte.

**Zugriff und Sicherheit.** Behebungswerkzeuge haben Macht über die Produktion. Geben Sie ihnen eine eigene Identität mit den engen Berechtigungen, die jede Handlung braucht, und schützen Sie Code und Auslöser vor Manipulation. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Menschliche Fähigkeiten.** Wenn Automatisierung Routinefehler behandelt, können Menschen das Gefühl für das System verlieren. Halten Sie Runbooks lesbar, proben Sie den manuellen Betrieb und beziehen Sie Automatisierungen in Game Days ein. Siehe Thema 6.1 — Automatisierungsstrategie.

**Wie die Blickwinkel passen.** Dieses Thema ist der Automatisierungs-Blickwinkel am Punkt des Betriebs. Agile Praxis legt nahe, die Stufenfolge in kleinen Schritten hinaufzugehen, mit Überprüfung nach jedem Incident. KI kann Handlungen vorschlagen und Runbooks auswählen, unter den hier beschriebenen Grenzen. Analytik misst Auslöseraten, Erfolg und verdeckte Probleme.

## Bewährte Praktiken

1. **Beginnen Sie mit einem guten Runbook.** Schreiben, testen und nutzen Sie das Verfahren zuerst von Hand. Die Automatisierung eines Verfahrens, das nicht funktioniert, bricht nur schneller.
2. **Wählen Sie Kandidaten sorgfältig.** Suchen Sie häufige, gut verstandene, sichere, umkehrbare Behebungen mit verlässlichem Signal. Ordnen Sie nach eingesparter Bereitschaftszeit und nach Risiko.
3. **Steigen Sie die Leiter hinauf.** Gehen Sie vom Skript über den Ein-Befehl-Auslöser und die vorgeschlagene Handlung mit Genehmigung nur dann zur automatischen Handlung, wenn sich Belege ansammeln. Halten Sie die Entscheidung bei jedem Schritt fest.
4. **Prüfen Sie vorher und nachher.** Verifizieren Sie, dass die Lage passt, dass keine widersprechende Aktivität läuft und dass die Handlung gewirkt hat. Halten Sie an und eskalieren Sie, wenn eine Prüfung scheitert.
5. **Setzen Sie Limits und einen Sicherungsschalter.** Begrenzen Sie Häufigkeit, Umfang und Dauer. Löst eine Handlung zu oft aus oder scheitert zweimal, halten Sie an und rufen Sie eine Person.
6. **Machen Sie Handlungen idempotent und umkehrbar.** Prüfen Sie zuerst den Zustand und schreiben Sie den Weg zurück. Testen Sie beides.
7. **Protokollieren, benachrichtigen und sichtbar machen.** Erfassen Sie jede automatische Handlung, sagen Sie es dem verantwortlichen Team und zeigen Sie Auslöseraten auf einem Dashboard.
8. **Beheben Sie die Ursache.** Zählen Sie, wie oft jede Automatisierung auslöst, und eröffnen Sie ein Problem, wenn die Rate hoch ist oder steigt. Behandeln Sie Automatisierung als Brücke zu einer Behebung, nicht als Ersatz.
9. **Testen Sie unter sicheren Bedingungen.** Proben Sie mit realistischen Fehlern und Randfällen, auch solchen, die abgelehnt werden sollten. Beziehen Sie Automatisierungen in Game Days ein.
10. **Verantworten und überprüfen Sie.** Benennen Sie eine verantwortliche Person, halten Sie Code mit Prüfung in der Versionsverwaltung, registrieren Sie jede Automatisierung und überprüfen Sie vierteljährlich, welche zu behalten, zu ändern oder stillzulegen sind.

## Fragen für die Diskussion im Team

**Welche Alarme beheben wir jedes Mal auf dieselbe Weise, und wie lange dauert jeder?**
Nutzen Sie Incident- und Alarmdaten. Rechnen Sie damit, dass eine Handvoll die meisten Alarme ausmacht. Wählen Sie anschließend einen und prüfen Sie, ob sein Runbook korrekt ist.

**Was könnte schiefgehen, wenn diese Behebung lief, als sie es nicht sollte?**
Stellen Sie sich den falschen Auslöser oder das falsche Ziel vor. Rechnen Sie mit einigen unangenehmen Fällen. Ergänzen Sie anschließend für jeden eine Prüfung oder ein Limit.

**Woran würden wir erkennen, dass die Automatisierung ein wachsendes Problem verdeckt?**
Fragen Sie, was wir sehen würden. Rechnen Sie mit „nichts“. Vereinbaren Sie anschließend, Auslösungen zu zählen und eine Schwelle zu setzen, ab der ein Problem eröffnet wird.

**Was ist der größte Schaden, den ein einzelner Lauf anrichten könnte, und wie würden wir ihn stoppen?**
Benennen Sie den Umfang. Rechnen Sie mit Unsicherheit. Setzen Sie anschließend eine Obergrenze und proben Sie einen Stopp.

**Wann haben wir diese Aufgabe zuletzt von Hand erledigt, und könnte das noch jede Bereitschaftsperson?**
Fragen Sie nach dem letzten Mal. Rechnen Sie damit, dass es lange her war. Planen Sie anschließend eine Probe ein.

**Wo könnte KI eine Behebung vorschlagen oder wählen, und was muss dennoch eine Person genehmigen?**
KI kann Symptome Runbooks zuordnen und Handlungen vorschlagen. Fragen Sie, welche Handlungen Genehmigung brauchen und wer entscheidet. Wählen Sie anschließend eine Erprobung, in der KI vorschlägt und eine Person genehmigt, mit Kennzahlen dazu, wie oft der Vorschlag richtig war.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Fahrgastinformations-Team einer nationalen Bahn betreibt Anzeigen an 400 Bahnhöfen, gespeist von einem Datenservice. Etwa zweimal pro Woche hängt der Feed-Prozessor, und Anzeigen frieren auf alten Zeiten ein. Der Bereitschafts-Engineer wird gerufen, meldet sich an, prüft, dass der Prozess hängt, startet ihn neu und bestätigt Aktualisierungen. Es dauert etwa 20 Minuten, meist nachts.

Das Team schreibt das Runbook auf und verfeinert es, nachdem es bei zwei Incidents ausprobiert wurde: Alarm bestätigen, prüfen, dass kein Deployment läuft, prüfen, dass der Prozess fünf Minuten nicht in sein Log geschrieben hat, neu starten, zwei Minuten warten, prüfen, dass der Zeitstempel der Ausgabe aktuell ist, und den Incident notieren. Es verwandelt es in ein Skript mit Probelauf-Modus, und ein Engineer löst es einen Monat lang mit einem Chat-Befehl aus. Es gelingt jedes Mal.

Dann verbinden sie es im Vorschlagsmodus mit dem Alarm: Der Alarm postet die Befunde des Skripts und eine Schaltfläche, die den Bereitschafts-Engineer um Genehmigung bittet. Nach einem Monat war jede Genehmigung richtig und dauerte unter zwei Minuten. Das Team vereinbart, es unter strengen Bedingungen automatisch laufen zu lassen: nur wenn die Prüfungen bestehen, höchstens zweimal pro Stunde, nie während eines Deployments und mit einem Alarm an eine Person, wenn der zweite Neustart nichts behebt. Es protokolliert jeden Lauf und postet in den Teamkanal.

Die Automatisierung löst in den ersten zwei Monaten 19-mal aus. Eine Überprüfung zeigt, dass das Hängen nach der nächtlichen Aktualisierung eines bestimmten Datenlieferanten häufiger auftritt, was das Team nicht bemerkt hatte, als es jeden Alarm allein behandelte. Sie eröffnen ein Problem mit dem Lieferanten. In einem Lauf löst der Sicherungsschalter nach zwei fehlgeschlagenen Neustarts aus und ruft einen Engineer, der feststellt, dass der Speicher voll ist, eine Ursache, die das Runbook nicht abdeckte.

Was sich ändert: Engineers schlafen bei den meisten dieser Ereignisse durch, und Anzeigen erholen sich in unter drei Minuten. Was schwierig bleibt: Der Lieferant hat das Datenformat noch nicht behoben; das Team hat bemerkt, dass neue Engineers das manuelle Verfahren nie ausgeführt haben, und sorgt sich um ihre Fähigkeit; und der zusätzliche Schritt, den Speicher zu prüfen, wurde erst nach der Überraschung ergänzt. Der Leiter plant eine vierteljährliche manuelle Probe ein und nimmt die Speicherprüfung in das Skript auf.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Bauen Sie Services, die sich leicht beheben lassen: Gesundheits-Endpunkte, sicherer Neustart, idempotente Operationen und klare Logs. Schreiben Sie Runbooks zusammen mit dem Code und beheben Sie Ursachen, die Automatisierung offenlegt.

### Service- und Betriebsteams

Verantworten Sie Runbooks und Automatisierungen: schreiben, testen, begrenzen, protokollieren und überprüfen. Halten Sie manuelle Fähigkeiten am Leben und behandeln Sie häufiges Auslösen als Problem, das zu beheben ist.

### Führung und Governance

Unterstützen Sie das Hinaufsteigen der Leiter mit Belegen und verlangen Sie Auslöseraten und Prüfungen auf verdeckte Probleme. Finanzieren Sie die Zeit, Ursachen zu beheben. Seien Sie misstrauisch gegenüber Behauptungen selbstheilender Systeme.

### Kunden und Nutzer

Sie sollten schnellere Wiederherstellung und weniger sichtbare Ausfälle sehen. Hat eine automatische Behebung nicht funktioniert oder ein Problem verursacht, sagen Sie es dem Anbieter, damit die Regel korrigiert werden kann.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verbessern Sie die Behebung nach jedem Incident: Runbook verfeinern, eine Prüfung ergänzen oder eine Stufe der Leiter hinaufsteigen. Halten Sie Änderungen klein und geprüft. Vorsicht: Automatisieren Sie nach einer schlechten Nacht nicht in Masse; nehmen Sie eine Behebung nach der anderen, mit Tests.

### KI

KI kann Alarme Runbooks zuordnen, Schritte vorschlagen und neue Runbooks aus Incident-Notizen entwerfen, mit Genehmigung für alles, was handelt. Benennen Sie eine verantwortliche Person und messen Sie die Genauigkeit der Vorschläge. Vorsicht: Eine KI, die bei einem ungewöhnlichen Alarm eine Handlung wählt, kann falsch wählen; beschränken Sie sie auf eine Liste genehmigter Handlungen. Siehe Thema 5.5 — Agentische KI und menschliche Aufsicht.

### Automatisierung

Dieses Thema ist der Automatisierungs-Blickwinkel im Betrieb: Sicherheitsbedingungen, Limits, Sicherungsschalter, Idempotenz, Protokolle und Überprüfung. Vorsicht: Automatische Behebung kann Probleme verdecken und verschlimmern; zählen Sie Auslösungen, begrenzen Sie Läufe und eskalieren Sie bei Fehlschlag. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Verfolgen Sie Auslöserate je Automatisierung, Erfolgsquote, Zeit bis zur Wiederherstellung, Zahl vermiedener Alarme, Auslösungen des Sicherungsschalters und aus Mustern eröffnete Probleme. Vorsicht: Vermiedene Alarme lassen sich leicht aufblähen und können steigende Auslöseraten verbergen; verfolgen Sie beides zusammen. Siehe Thema 7.4 — Observability und Telemetrie und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ein ungetestetes Runbook automatisieren.** Die Behebung ist falsch, in hohem Tempo. Testen Sie zuerst von Hand.
- **Keine Limits.** Eine Schleife oder Fehlzündung wiederholt sich. Begrenzen Sie Läufe und nutzen Sie einen Sicherungsschalter.
- **Verdeckte Probleme.** Neustarts verdecken eine Ursache. Zählen Sie Auslösungen und beheben Sie Ursachen.
- **Keine Prüfungen vor dem Handeln.** Die Handlung trifft ein gesundes oder beschäftigtes System. Verifizieren Sie Bedingungen.
- **Stille Automatisierung.** Niemand weiß, was sie tat. Protokollieren und benachrichtigen Sie.
- **Fähigkeiten verblassen.** Niemand kann es von Hand. Proben Sie.
- **Überprivilegierte Werkzeuge.** Eine Kompromittierung erreicht alles. Nutzen Sie enge Identitäten.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Runbooks | In Köpfen oder E-Mail | Für die wichtigsten Alarme geschrieben | Getestete Runbooks, mit Alarmen verknüpft | Runbook-Qualität nach Incidents überprüft | Runbooks über Services hinweg als Code gepflegt |
| Automatisierung | Keine | Von Menschen ausgelöste Skripte | Genehmigte, getestete Handlungen mit Vorschlägen | Ausgewählte Handlungen laufen automatisch mit Limits | Sichere Handlungen nach Risiko gewählt, mit menschlicher Kontrolle |
| Sicherheit | Keine | Grundlegendes Logging | Prüfungen, Limits, Sicherungsschalter und Rollback | Sicherheit getestet und auditiert | Sicherheit in gemeinsame Plattformen eingebaut |
| Lernen | Brandbekämpfung | Gelegentliche Überprüfung | Auslöseraten verfolgt, Ursachen als Probleme eröffnet | Wiederholung gemessen und verringert | Lernen über Teams und Lieferanten geteilt |

## Checkliste

- [ ] Das Runbook wurde vor der Automatisierung geschrieben, getestet und von Hand genutzt.
- [ ] Jede Automatisierung hat einen Auslöser, Vorbedingungen, Verifizierung und eine Eskalation.
- [ ] Handlungen sind idempotent und umkehrbar.
- [ ] Limits und ein Sicherungsschalter begrenzen Häufigkeit und Umfang.
- [ ] Jeder Lauf wird protokolliert, und das verantwortliche Team wird benachrichtigt.
- [ ] Wir verfolgen, wie oft jede Automatisierung auslöst, und eröffnen aus den Mustern Probleme.
- [ ] Automatisierungen liegen in der Versionsverwaltung, sind geprüft und mit Verantwortlichen registriert.
- [ ] Wir proben den manuellen Betrieb und testen Automatisierungen mit realistischen Fehlern.

## KI-Prompts

**Verwandeln Sie Incident-Notizen in einen Runbook-Entwurf.**

```text
Here are notes from three incidents that had the same fix: [paste, personal data removed].
Draft a runbook with: trigger, preconditions to check, numbered steps with expected results, verification, rollback, and escalation. Use only what the notes say; write [missing] for anything not stated.
List what you are unsure of.
```

**Finden Sie Sicherheitslücken in einer Automatisierung.**

```text
Here is a description of an auto-remediation: trigger, checks, action, and limits: [paste].
List which of these are missing or unclear: precondition checks, post-action verification, rate limit, circuit breaker, idempotence, rollback, logging, notification, owner. Quote the text for each you consider present. Do not assume any.
List what you are unsure of.
```

**Prüfen Sie Auslösedaten.**

```text
Here is a log of when each automation fired in the last month, with result: [paste].
Count firings per automation, list those that are rising or clustered at the same time of day, and list questions to find causes. Do not guess causes.
List what you are unsure of.
```

## KI-Skills

- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um das Verfahren vor dem Automatisieren zu schreiben und zu testen.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): nutzen Sie ihn, um Behebung an realistischen Fehlern zu testen.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): nutzen Sie ihn, um Ursachen zu finden, die Automatisierung verdeckt.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): nutzen Sie ihn, um tragfähige Bereitschaftsregelungen zu gestalten.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): nutzen Sie ihn, um Rollen und Eskalation rund um Automatisierung zu definieren.

## Wichtige Quellen

- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zum Beseitigen von Toil und zu Automatisierung, frei unter sre.google.
- Lisanne Bainbridge, „Ironies of Automation“ (*Automatica*, 1983): warum Automatisierung die menschliche Rolle auf überraschende Weise verändert.
- Wikipedia, „Runbook“ und „Autonomic computing“: Überblicke über das Dokument und das Streben.
- Wikipedia, „Circuit breaker design pattern“: ein Muster, um wiederholtes Versagen zu stoppen.

## Literaturverzeichnis

1. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
2. Autonomic computing — Wikipedia — https://en.wikipedia.org/wiki/Autonomic_computing
3. Circuit breaker design pattern — Wikipedia — https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern
4. Watchdog timer — Wikipedia — https://en.wikipedia.org/wiki/Watchdog_timer
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
7. Failover — Wikipedia — https://en.wikipedia.org/wiki/Failover
8. Autoscaling — Wikipedia — https://en.wikipedia.org/wiki/Autoscaling
9. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
10. Hysteresis — Wikipedia — https://en.wikipedia.org/wiki/Hysteresis
11. Dry run (testing) — Wikipedia — https://en.wikipedia.org/wiki/Dry_run_(testing)
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
