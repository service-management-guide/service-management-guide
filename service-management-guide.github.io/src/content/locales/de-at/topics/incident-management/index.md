# Incident-Management

**Incident-Management dient dazu, den normalen Service so schnell wie möglich wiederherzustellen und Schaden für Nutzer zu begrenzen. Es funktioniert, wenn der Schweregrad im Voraus vereinbart ist, Rollen klar sind, die Kommunikation stetig ist und die Nachbetrachtung das System betrachtet und nicht einzelne Personen.**

## Warum das wichtig ist

Ein Incident ist eine ungeplante Unterbrechung eines Services oder eine Minderung seiner Qualität. Tritt einer auf, stehen die Beteiligten unter Druck, die Informationen sind unvollständig, und die Uhr läuft. Entscheidungen in den ersten zehn Minuten bestimmen oft, ob ein Incident eine Stunde oder sechs dauert.

Organisationen, die Incidents gut bewältigen, verlassen sich nicht auf Helden. Sie haben vereinbart, wie man entscheidet, wie ernst etwas ist, wer führt, wer mit Nutzern spricht, wie eskaliert wird und wann man die Untersuchung beendet und eine Übergangslösung anwendet. Sie haben geübt. Organisationen, die Incidents schlecht bewältigen, improvisieren jedes Mal, streiten während des Ereignisses über Prioritäten und stellen fest, dass die eine Person, die das System kennt, im Urlaub ist.

Dieses Thema beschreibt Incident-Management als Praktik: Definitionen, Rollen, Schweregrad, Kommunikation und Nachbetrachtung. Es behandelt Major Incidents mit zusätzlicher Struktur und zeigt, wie KI und Automatisierung helfen und wo sie schaden können. Es steht neben dem Problem-Management (Thema 3.3 — Problem-Management), das nach den zugrunde liegenden Ursachen sucht, und dem Monitoring (Thema 3.10 — Monitoring und Event-Management), das den Incident oft erkennt.

## Kernkonzepte

**Incident.** In ITIL 4 eine ungeplante Unterbrechung eines Services oder Minderung der Qualität eines Services. Der Wikipedia-Artikel zu Incident management beschreibt die Praktik im IT-Service-Management. Ein Incident kann existieren, bevor ein Nutzer ihn bemerkt, zum Beispiel wenn das Monitoring eine ausfallende Festplatte zeigt.

**Zuerst den Service wiederherstellen.** Das Ziel ist, den Service in den Normalzustand zu bringen, nicht die Grundursache zu finden. Eine Übergangslösung (Workaround), die den Service wiederherstellt, ist ein gutes Ergebnis; die Grundursache gehört zum Problem-Management. Teams, die nach der Ursache graben, während der Service ausgefallen ist, verlängern den Ausfall.

**Übergangslösung (Workaround).** Eine Lösung, die die Auswirkung eines Incidents verringert oder beseitigt, ohne seine Ursache zu beheben, zum Beispiel Verkehr umzuleiten, eine Komponente neu zu starten oder auf einen manuellen Prozess umzuschalten. Siehe Thema 3.3 — Problem-Management dazu, wie bekannte Fehler und Übergangslösungen verfolgt werden.

**Schweregrad und Priorität.** Der Schweregrad beschreibt die Auswirkung auf Nutzer und Geschäft, etwa wie viele betroffen sind und wie stark. Die Priorität fügt Dringlichkeit hinzu, etwa eine Frist. Viele Organisationen nutzen eine kleine Skala, zum Beispiel vier Stufen, mit einer Definition und einer erwarteten Reaktion für jede. Definitionen sollten beobachtbare Tatsachen verwenden („mehr als 100 Nutzer können keine Zahlungen ausführen“) statt Empfindungen.

**Major Incidents.** Ein Major Incident hat eine erhebliche Auswirkung und braucht eine schnellere, besser koordinierte Reaktion als der Standardprozess. Organisationen legen ihre eigenen Schwellen fest. Major Incidents haben typischerweise eine benannte Incident-Leitung, eine Kommunikationsleitung und einen regelmäßigen Takt von Aktualisierungen.

**Rollen.** Eine Incident-Leitung koordiniert und entscheidet; technische Reagierende diagnostizieren und beheben; eine Kommunikationsleitung hält Stakeholder und Nutzer informiert; eine Protokollführung hält fest, was wann getan wird. In einem kleinen Incident kann eine Person mehrere Rollen innehaben. Das Incident Command System, im Katastrophenschutz verwendet und auf Wikipedia beschrieben, hat die Struktur beeinflusst, die viele technische Organisationen nutzen.

**Eskalation.** Mehr Fähigkeiten oder mehr Befugnis hinzuziehen. Funktionale Eskalation gibt den Incident an Menschen mit der richtigen Expertise. Hierarchische Eskalation bringt Führungskräfte ein, die entscheiden oder Ressourcen bereitstellen können. Klare Kriterien, etwa „kein Fortschritt nach 30 Minuten bei Schweregrad eins“, machen Eskalation zur Routine statt zu einem Zeichen des Scheiterns.

**Bereitschaft (On-call).** Regelungen, damit Menschen außerhalb der normalen Zeiten erreichbar sind. Gute Bereitschaftspraxis umfasst Grenzen für die Last, einen klaren Plan, Runbooks und Ausgleich. Siehe Thema 2.6 — Site Reliability Engineering. Alarmmüdigkeit (Alarm fatigue), ein auf Wikipedia beschriebenes Phänomen, lässt Menschen Alarme ignorieren, die zu häufig oder nicht handlungsrelevant sind.

**Kommunikation.** Nutzer und Stakeholder müssen wissen, was betroffen ist, was Sie tun und wann sie wieder von Ihnen hören. Häufige, einfache Aktualisierungen verringern Wiederholungskontakte und Sorge. Der Wikipedia-Artikel zu Crisis communication gibt allgemeine Grundsätze. Eine Statusseite, ein interner Kanal und direkte Nachrichten an Schlüsselkunden bedienen unterschiedliche Zielgruppen.

**Incident-Aufzeichnungen.** Ein Ticket oder Datensatz mit Startzeit, Symptomen, Handlungen, Entscheidungen und Endzeit. Die Aufzeichnung stützt die Nachbetrachtung und liefert Daten für Verbesserung. Ein während des Incidents geführter Zeitverlauf ist genauer als einer, der nachträglich rekonstruiert wird.

**Nachbetrachtung (Review).** Halten Sie nach einem wesentlichen Incident eine schuldfreie Nachbetrachtung, die betrachtet, was geschah, was half, was die Reaktion verlangsamte und was zu ändern ist. Erkenntnisse gehen an das Problem-Management und das Verbesserungs-Backlog. Siehe Thema 3.3 — Problem-Management.

**Kennzahlen.** Zeit bis zur Erkennung, Zeit bis zur Reaktion und Zeit bis zur Wiederherstellung, oft zusammengefasst als mittlere Wiederherstellungszeit (MTTR) in der Beschreibung von Wikipedia, sind gebräuchlich. Durchschnitte verbergen große Unterschiede zwischen Incidents und lassen sich dadurch manipulieren, wie Start- und Endzeiten festgelegt werden. Nutzen Sie Verteilungen und betrachten Sie einzelne Incidents. Siehe das Buch *Service Management Metrics*.

**Wie die Blickwinkel passen.** Agile Praxis behandelt jede Nachbetrachtung als Feedback und hält Verbesserung klein und kontinuierlich. KI kann Zeitverläufe zusammenfassen, ähnliche frühere Incidents vorschlagen und Aktualisierungen entwerfen, mit einer verantwortlichen Person. Automatisierung führt sichere, gut verstandene Schritte wie Neustarts und Failover aus. Analytik zeigt Muster der Wiederholung.

## Bewährte Praktiken

1. **Definieren Sie Schweregrade mit beobachtbaren Tatsachen.** Schreiben Sie auf, was jede Stufe bedeutet, wer benachrichtigt wird und wie schnell. Überprüfen Sie die Definitionen nach Incidents, die schwer einzustufen waren.
2. **Benennen Sie Rollen und üben Sie sie.** Vereinbaren Sie, wer leitet, wer kommuniziert und wer protokolliert. Proben Sie mit Übungen, damit das erste Mal keine echte Krise ist. Siehe Thema 3.12 — Service-Continuity-Management.
3. **Erst wiederherstellen, später untersuchen.** Legen Sie als Regel fest, dass eine Übergangslösung angewendet wird, wenn eine verfügbar und sicher ist. Erfassen Sie den Incident für das Problem-Management und gehen Sie weiter.
4. **Führen Sie einen Live-Zeitverlauf.** Halten Sie Handlungen und Entscheidungen mit Zeiten fest, während sie geschehen, an einem gemeinsamen Ort. Das verhindert Streit und beschleunigt die Nachbetrachtung.
5. **Eskalieren Sie früh und ohne Schuldzuweisung.** Definieren Sie Auslöser für die Eskalation und behandeln Sie ihre Nutzung als gute Praxis. Wer spät eskaliert, fürchtet Kritik; beseitigen Sie sie.
6. **Kommunizieren Sie im Takt.** Vereinbaren Sie für jeden Schweregrad ein Aktualisierungsintervall und senden Sie Aktualisierungen auch dann, wenn es nichts Neues gibt, und sagen Sie das. Nutzen Sie einfache Sprache.
7. **Geben Sie Reagierenden, was sie brauchen.** Pflegen Sie Runbooks, Zugriff, Dashboards und Kontaktlisten. Testen Sie den Zugriff vor der Nacht, in der er gebraucht wird.
8. **Schützen Sie Menschen.** Begrenzen Sie die Bereitschaftslast, übergeben Sie lange Incidents und sorgen Sie dafür, dass Reagierende ruhen. Müde Menschen treffen schlechtere Entscheidungen.
9. **Betrachten Sie nach ohne Schuldzuweisung und setzen Sie um.** Schreiben Sie einen kurzen Bericht mit Zeitverlauf, beitragenden Faktoren und Maßnahmen mit Verantwortlichen und Terminen. Verfolgen Sie Maßnahmen bis zur Erledigung. Siehe Thema 3.3 — Problem-Management.
10. **Speisen Sie die Erkenntnisse zurück.** Aktualisieren Sie Runbooks, Monitoring und Design. Teilen Sie das Gelernte mit anderen Teams und prüfen Sie, dass wiederholte Incidents abnehmen.

## Fragen für die Diskussion im Team

**Wie entscheiden wir, wie schwerwiegend ein Incident ist, und wurde das je während eines Incidents diskutiert?**
Uneinigkeit über den Schweregrad verschwendet Zeit. Bitten Sie um aktuelle Beispiele. Vielleicht hören Sie, die Antwort hänge davon ab, wer fragt. Schreiben Sie anschließend die Definition einer Stufe mit beobachtbaren Tatsachen neu.

**Wer leitet einen Incident um 3 Uhr nachts, und woher weiß diese Person, dass sie die Leitung hat?**
Unklare Führung ist eine häufige Ursache von Verwirrung. Fragen Sie, wer beim letzten Major Incident Entscheidungen traf. Rechnen Sie mit unterschiedlichen Antworten. Vereinbaren Sie anschließend, wie die Leitung gewählt und bekannt gegeben wird.

**Was hören Nutzer während eines Incidents von uns, und wie oft?**
Vergleichen Sie, was Nutzer beim letzten Incident hörten, mit dem, was sie wollten. Rechnen Sie mit langem Schweigen. Wählen Sie anschließend ein Aktualisierungsintervall und einen Kanal und entwerfen Sie eine Vorlage.

**Was haben wir zu spät eskaliert, und warum?**
Das erkundet Angst und Gewohnheit. Menschen zögern womöglich aus Furcht, inkompetent zu wirken oder jemanden zu wecken. Fragen Sie, was Eskalation leichter machen würde. Schreiben Sie anschließend eine Regel wie „eskalieren, wenn nach 30 Minuten kein Fortschritt“.

**Was sagt unsere letzte Nachbetrachtung, was wir ändern sollten, und was hat sich tatsächlich geändert?**
Das prüft die Umsetzung. Bitten Sie um Maßnahmen und ihren Status. Rechnen Sie damit, dass einige seit Monaten offen sind. Weisen Sie anschließend Verantwortliche und Termine zu und überprüfen Sie sie in einem Monat.

**Wo könnte KI während eines Incidents helfen, und wo muss ein Mensch entscheiden?**
KI kann den Zeitverlauf zusammenfassen, frühere Incidents durchsuchen und Aktualisierungen entwerfen. Sie kann nicht rechenschaftspflichtig sein. Fragen Sie, welche Handlungen eine KI, wenn überhaupt, ohne Genehmigung ausführen darf. Wählen Sie anschließend eine risikoarme Nutzung und vereinbaren Sie, wie ihre Ausgabe geprüft wird.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Digitalteam einer landesweiten Apothekenkette betreibt eine App, mit der Kunden Folgerezepte bestellen. An einem Freitagabend beginnen Bestellungen bei etwa 30 Prozent der Nutzer zu scheitern. Der Bereitschafts-Engineer sieht Fehler einer Datenbank und ruft nach dem Plan die Incident-Leitung. Die Leitung erklärt einen Incident mit Schweregrad zwei, weil Nutzer eine Kernaufgabe nicht abschließen können, bestimmt eine Kommunikationsleitung und beginnt einen Zeitverlauf.

Binnen 15 Minuten vermutet das Team eine Datenbankänderung, die am Nachmittag ausgerollt wurde. Die Leitung fragt, ob ein Rollback sicher ist; der Engineer, der die Änderung gemacht hat, bestätigt es. Das Team rollt zurück, und die Bestellungen erholen sich binnen fünf Minuten. Die Gesamtzeit vom ersten Alarm bis zur Wiederherstellung beträgt 47 Minuten. Die Kommunikationsleitung hatte nach 20 Minuten auf der Statusseite gepostet, erneut nach 35 und mit einer letzten Aktualisierung bei der Wiederherstellung, und dem Kundenservice gesagt, was er sagen soll.

In der folgenden Woche hält das Team eine schuldfreie Nachbetrachtung. Der Zeitverlauf zeigt, dass die Erkennung von einer Nutzerbeschwerde abhing, weil kein Alarm fehlgeschlagene Bestellungen abdeckte; die Änderung war geprüft worden, aber die Testumgebung hatte keine realistischen Daten; und die erste Aktualisierung kam langsamer als das vereinbarte Intervall, weil die Kommunikationsleitung unsicher war, was die Statusseite sagen darf. Das Team ergänzt einen Alarm auf die Fehlerrate bei Bestellungen, verbessert die Testdaten und schreibt eine Vorlage für die Statusseite.

Was sich ändert: Der nächste ähnliche Incident wird binnen drei Minuten vom Alarm erkannt. Was schwierig bleibt: Die Testdaten enthalten aus gutem Grund keine echten Patientendaten, was begrenzt, wie realistisch sie sein können; der Bereitschaftsplan hat weiter wenige Engineers, die die Datenbank sicher zurückrollen können; und die Maßnahmenliste der Nachbetrachtung hat zwölf Punkte, während das Team Zeit für fünf hat. Sie wählen nach Risiko und legen den Rest mit Terminen ins Backlog.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Bauen Sie für die Wiederherstellung: Machen Sie Änderungen umkehrbar, ergänzen Sie Alarme und Logs, die die Nutzerauswirkung zeigen, und schreiben Sie Runbooks nebenbei. Nehmen Sie an Nachbetrachtungen teil und beheben Sie Ursachen im Design.

### Service- und Betriebsteams

Kennen Sie Ihre Rolle, üben Sie und führen Sie den Zeitverlauf. Eskalieren Sie früh, kommunizieren Sie stetig und kümmern Sie sich umeinander. Bringen Sie in Nachbetrachtungen ein, was Sie lernen, und nutzen Sie es, um Runbooks und Monitoring zu verbessern.

### Führung und Governance

Vereinbaren Sie Schweregrad-Definitionen und Erwartungen im Voraus und widerstehen Sie dem Zuweisen von Schuld. Unterstützen Sie bei einem Major Incident die Leitung und fragen Sie Aktualisierungen nur über den vereinbarten Kanal ab. Finanzieren Sie die Folgemaßnahmen.

### Kunden und Nutzer

Sie sollten zügig erfahren, was betroffen ist, was getan wird und wann Sie wieder von uns hören. Melden Sie, was Sie sehen, mit Einzelheiten. Erwarten Sie nach einem Major Incident eine klare Darstellung, was sich geändert hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Nachbetrachtungen von Incidents als kurze Feedbackschleife, die Verbesserung antreibt: kleine Änderungen an Runbooks, Alarmen und Design, schnell umgesetzt und mit informierten Beteiligten. Vorsicht: Eine lange Maßnahmenliste, die niemand abschließt, ist schlechter als eine kurze, die erledigt wird.

### KI

KI kann Aktualisierungen entwerfen, Zeitverlauf und Chat zusammenfassen und ähnliche frühere Incidents finden. Die Incident-Leitung bleibt rechenschaftspflichtig, und eine KI-Ausgabe ist ein Vorschlag. Vorsicht: KI kann Ursachen oder Zeiten erfinden, und eine automatisch entworfene Aktualisierung, die ungeprüft versendet wird, kann Kunden in die Irre führen; prüfen Sie stets vor dem Versand. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Automatisieren Sie sichere, wiederholbare Reaktionsschritte, etwa Diagnosedaten zu sammeln, die richtigen Personen zu alarmieren und einen geprüften Neustart auszuführen, mit Protokollen und Grenzen. Vorsicht: Automatisierung, die während eines Incidents handelt, kann ihn verschlimmern; halten Sie einen manuellen Stopp bereit und testen Sie in einer sicheren Umgebung. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Betrachten Sie Zeit bis zur Erkennung, Reaktion und Wiederherstellung, die Verteilung jeder und wiederholte Incidents. Vorsicht: Durchschnitte verbergen die schlimmsten Incidents, Definitionen von Start und Ende schwanken, und Kennzahlen, mit denen Teams beurteilt werden, laden zur Manipulation von Zeitstempeln ein; untersuchen Sie auch einzelne Incidents. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Schweregrad wird während des Incidents ausdiskutiert.** Zeit geht verloren. Schreiben Sie Definitionen mit beobachtbaren Tatsachen.
- **Keine klare Leitung.** Alle handeln, und niemand entscheidet. Benennen Sie die Leitung und geben Sie sie bekannt.
- **Untersuchen, während der Service ausgefallen ist.** Die Wiederherstellung verzögert sich. Wenden Sie zuerst eine sichere Übergangslösung an.
- **Schweigen gegenüber Nutzern.** Sorge und Wiederholungskontakte steigen. Aktualisieren Sie im Takt.
- **Schuldzuweisung in Nachbetrachtungen.** Menschen verbergen Fehler. Halten Sie schuldfreie Nachbetrachtungen und verfolgen Sie Maßnahmen.
- **Abhängigkeit von Helden.** Eine Person behebt alles. Teilen Sie Wissen und schreiben Sie Runbooks.
- **Automatische Handlungen ohne Grenzen.** Eine Automatisierung verschlimmert einen Incident. Ergänzen Sie Grenzen, Protokolle und einen manuellen Stopp.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Schweregrad und Prozess | Ad hoc | Informelle Stufen | Definierte Stufen mit Reaktionserwartungen | Stufen anhand von Daten überprüft | Prozess über Services und Partner angepasst |
| Rollen und Übung | Improvisiert | Einige Rollen benannt | Rollen definiert und geprobt | Übungen gemessen und verbessert | Übungen mit Lieferanten und Kunden geteilt |
| Kommunikation | Unregelmäßig | Aktualisierungen, wenn man daran denkt | Aktualisierungsrhythmus und Kanäle je Schweregrad | Kommunikationsqualität überprüft | Konsistent über Teams, Kunden und Partner |
| Lernen | Schuldzuweisung | Gelegentliche Nachbetrachtungen | Schuldfreie Nachbetrachtungen mit verfolgten Maßnahmen | Wiederholung gemessen und verringert | Lernen in der Organisation geteilt |

## Checkliste

- [ ] Schweregrade sind mit beobachtbaren Tatsachen und erwarteten Reaktionen definiert.
- [ ] Incident-Rollen sind benannt und geprobt.
- [ ] Eskalationsauslöser sind aufgeschrieben.
- [ ] Bei wesentlichen Incidents wird ein Live-Zeitverlauf geführt.
- [ ] Aktualisierungsintervalle und Kanäle sind für jeden Schweregrad festgelegt.
- [ ] Die Bereitschaftslast ist begrenzt und wird überwacht.
- [ ] Nachbetrachtungen sind schuldfrei, und Maßnahmen werden bis zur Erledigung verfolgt.
- [ ] KI und Automatisierung bei Incidents haben eine verantwortliche Person, Grenzen und Prüfung.

## KI-Prompts

**Fassen Sie den Zeitverlauf eines Incidents für die Nachbetrachtung zusammen.**

```text
Here are the chat messages and notes from an incident, with times and names removed: [paste text].
Produce a timeline of key events, a list of decisions and who made them (by role only), what helped, what slowed us down, and questions for the review. Use only the text and mark anything uncertain.
List what you are unsure of.
```

**Entwerfen Sie eine Statusmeldung zur Prüfung.**

```text
Facts we know: [paste confirmed facts]. Facts we do not know: [list]. Next update in: [time].
Draft a status update of under 80 words in plain language that states what is affected, what we are doing, and when the next update is due. Do not speculate about causes or give an estimate for recovery that is not in the facts.
List what you are unsure of.
```

**Prüfen Sie Schweregrad-Definitionen.**

```text
Our severity definitions: [paste]. Here are three past incidents with their impact: [paste].
For each incident, say which level the definitions suggest, quote the words you used, and note where the definitions were ambiguous. Do not change the definitions.
List what you are unsure of.
```

## KI-Skills

- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): nutzen Sie ihn, um Rollen, Schweregrad und Schritte für die Reaktion auf Incidents zu definieren.
- [postmortem](../../../../skills/postmortem/SKILL.md): nutzen Sie ihn, um eine schuldfreie Nachbetrachtung mit verfolgten Maßnahmen durchzuführen.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um Reaktionsschritte für bekannte Ausfälle festzuhalten.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): nutzen Sie ihn, um Aktualisierungen an Nutzer und Stakeholder zu planen.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): nutzen Sie ihn, um eine tragfähige Bereitschaftsregelung zu gestalten.

## Wichtige Quellen

- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zu Incident-Reaktion und Postmortems, frei unter sre.google: praktische Hinweise eines großen Betreibers.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Incident-Management durch den Eigentümer.
- Wikipedia, „Incident management“: ein Überblick über die Praktik.
- Wikipedia, „Incident Command System“: das Modell des Katastrophenschutzes, das technische Incident-Rollen beeinflusst hat.

## Literaturverzeichnis

1. Incident management — Wikipedia — https://en.wikipedia.org/wiki/Incident_management
2. Incident Command System — Wikipedia — https://en.wikipedia.org/wiki/Incident_Command_System
3. Mean time to recovery — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_to_recovery
4. Escalation — Wikipedia — https://en.wikipedia.org/wiki/Escalation
5. Crisis communication — Wikipedia — https://en.wikipedia.org/wiki/Crisis_communication
6. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
7. Workaround — Wikipedia — https://en.wikipedia.org/wiki/Workaround
8. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
9. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
