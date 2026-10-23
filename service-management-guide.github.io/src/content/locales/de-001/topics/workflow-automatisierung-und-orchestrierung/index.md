# Workflow-Automatisierung und Orchestrierung

**Workflow-Automatisierung bewegt Arbeit nach Regeln zwischen Menschen und Systemen; Orchestrierung koordiniert viele solcher Schritte über Werkzeuge hinweg, mit Genehmigungen, Wiederholungen und einer Aufzeichnung des Zustands. Sie funktionieren, wenn Workflows einfach, idempotent und beobachtbar sind und für die Menschen gestaltet werden, die eingreifen müssen.**

## Warum das wichtig ist

Der Großteil der Service-Arbeit ist ein Staffellauf. Eine Anfrage beginnt in einem Portal, geht zur Genehmigung an eine Führungskraft, legt in einem System ein Konto an, in einem anderen ein Postfach, in einem dritten eine Lizenz, ein Ticket für das Gebäudemanagement und eine Nachricht an die anfragende Person. Jede Stabübergabe ist eine Gelegenheit zu warten, Informationen zu verlieren oder vergessen zu werden. Wenn Menschen die Übergabe per E-Mail und Gedächtnis erledigen, sind Verzögerung und Fehler eingebaut.

Workflow-Automatisierung ersetzt die Übergabe durch einen definierten Ablauf. Das System kennt die Schritte, wer oder was jeden ausführt, was zu tun ist, wenn ein Schritt scheitert, und was bisher geschehen ist. Orchestrierung ist dieselbe Idee im größeren Maßstab: eine Koordinationsstelle, die viele Systeme in der richtigen Reihenfolge aufruft, auf Ergebnisse wartet und die unbequemen Fälle behandelt. Wikipedia beschreibt Workflows, Workflow-Management-Systeme und Orchestration in der Informatik als Wege, solche Abläufe zu definieren und auszuführen.

Das Versprechen sind schnellere, einheitlichere Arbeit mit einer sichtbaren Aufzeichnung. Die Risiken sind aus anderer Automatisierung bekannt: Ein fehlerhafter Prozess wird in Code gehärtet, ein Fehler auf halbem Weg hinterlässt Inkonsistenz, und eine Änderung in einem angeschlossenen System bricht den Ablauf unbemerkt. Gutes Design nimmt dies vorweg. Dieses Thema beschreibt die Hauptbausteine, die Muster, die Workflows verlässlich halten, und den Platz der Menschen darin. Es baut auf Thema 6.1 — Automatisierungsstrategie auf, steht in Beziehung zu Service-Requests (Thema 3.6 — Service-Request-Management) und führt zu Self-Service (Thema 6.5 — Self-Service und automatisierte Bereitstellung) und Pipelines (Thema 6.4 — Pipelines und automatisierte Changes).

## Kernkonzepte

**Workflow.** Eine Folge von Schritten mit Regeln dazu, wer oder was jeden ausführt, in welcher Reihenfolge und unter welchen Bedingungen. Wikipedia beschreibt Workflow als orchestriertes und wiederholbares Muster von Aktivität. Ein Workflow kann so einfach sein wie „wenn ein Ticket als gelöst markiert wird, die anfragende Person benachrichtigen“ oder so komplex wie eine durchgängige Reise für neue Mitarbeitende.

**Workflow-Engine.** Software, die Workflows ausführt: Sie verfolgt den Zustand jeder Instanz, führt Schritte aus, wartet auf Ereignisse und zeichnet auf, was geschah. Wikipedia beschreibt Workflow engines und Workflow management systems. Viele Ticketplattformen enthalten eine, und für systemübergreifende Abläufe gibt es eigenständige Plattformen.

**Orchestrierung.** Mehrere automatisierte Aufgaben und Services zu einem Prozess koordinieren, typischerweise von einer zentralen Steuerung, die jede der Reihe nach aufruft. Wikipedia beschreibt Orchestration in der Informatik. Sie steht im Gegensatz zur Choreografie, bei der Services auf Ereignisse reagieren, ohne zentrale Steuerung. Orchestrierung ist leichter zu sehen und zu debuggen; Choreografie kann widerstandsfähiger und skalierbarer sein. Viele Organisationen nutzen beides.

**Modellierung.** Abläufe lassen sich mit einer Notation wie der Business Process Model and Notation (BPMN), auf Wikipedia beschrieben, zeichnen und dann ausführen. Diagramme helfen Fach- und Technikseite, sich auf einen Ablauf zu einigen. Halten Sie sie lesbar und halten Sie Modell und laufenden Workflow im Gleichschritt.

**Zustand.** Was in einer Instanz eines Workflows bisher getan wurde. Den Zustand zu kennen lässt das System nach einem Fehler fortsetzen, Fortschritt zeigen und berichten. Wikipedia beschreibt endliche Automaten (Finite-state machines), eine nützliche Art, über eine Anfrage nachzudenken, die „eingereicht“, „genehmigt“, „erfüllt“ und „geschlossen“ ist.

**Auslöser und Ereignisse.** Ein Workflow startet aus einem Auslöser: einem Formular, einer Nachricht, einem Zeitplan, einer Änderung in einem System. Ereignisgesteuerte Ansätze, auf Wikipedia als Event-driven architecture beschrieben, lassen Systeme mitteilen, was geschah, damit andere reagieren können. Webhooks, ebenfalls dort beschrieben, sind ein gängiger Weg, wie ein System ein anderes benachrichtigt.

**Integration.** Workflows rufen andere Systeme über Programmierschnittstellen (APIs), Konnektoren oder Integrationsplattformen auf. Wikipedia beschreibt APIs und Enterprise application integration. An der Integration brechen die meisten Workflows, weil Systeme ihre Schnittstellen, Ratenlimits und Zugangsdaten ändern.

**Idempotenz und Wiederholungen.** Eine Operation ist idempotent, wenn sie zweimal auszuführen dieselbe Wirkung hat wie einmal. Wikipedia beschreibt Idempotence. Scheitert ein Schritt oder läuft er in eine Zeitüberschreitung, ist die sichere Reaktion oft eine Wiederholung, die nur sicher ist, wenn der Schritt idempotent ist. Wiederholungen sollten jedes Mal länger warten, eine Technik, die Wikipedia als Exponential backoff beschreibt, und nach einem Limit aufhören.

**Fehlerbehandlung.** Was geschieht, wenn Schritt vier von sieben scheitert? Optionen sind wiederholen, überspringen, frühere Schritte durch Rückgängigmachen ausgleichen oder anhalten und eine Person fragen. Langlaufende Workflows über Systeme hinweg können sich nicht auf eine einzelne Transaktion stützen; Wikipedia beschreibt den Saga-Ansatz, bei dem jeder Schritt eine ausgleichende Handlung hat. Fehler, die nicht automatisch behandelt werden können, sollten in eine Warteschlange mit klarer verantwortlicher Person gehen und nicht verschwinden. Wikipedia beschreibt Dead letter queues für Nachrichten, die nicht verarbeitet werden können.

**Menschliche Aufgaben und Genehmigungen.** Viele Workflows brauchen eine Person: um zu genehmigen, zu entscheiden oder etwas zu tun, das sich nicht automatisieren lässt. Wikipedia beschreibt Human-in-the-loop-Systeme. Gestalten Sie diese Aufgaben sorgfältig: wer gefragt wird, wie er erinnert wird, was geschieht, wenn er nicht reagiert, und welche Informationen er sieht. Eine Genehmigung, die unbegrenzt wartet, lässt den Ablauf stocken.

**Beobachtbarkeit und Audit.** Jede Instanz sollte nachvollziehbar sein: was sie auslöste, was jeder Schritt tat, was das Ergebnis war und wer genehmigte. Wikipedia beschreibt Audit trails. Das stützt Supportfragen („Wo ist meine Anfrage?“), Fehlersuche und Compliance. Siehe Thema 7.4 — Observability und Telemetrie.

**Low-Code und Robotic Process Automation.** Low-Code-Plattformen und Robotic Process Automation (RPA) erlauben Menschen, die keine Programmierer sind, Workflows zu bauen oder Handlungen in Benutzeroberflächen zu automatisieren. Wikipedia beschreibt beides. Sie beschleunigen einfache Fälle und können im großen Maßstab brüchige, verantwortungslose Automatisierungen erzeugen. Wenden Sie dieselbe Verantwortung, Tests und Prüfung an wie bei Code.

**Versionierung und Änderung.** Eine Workflow-Definition ändert sich mit der Zeit, während Instanzen noch laufen. Entscheiden Sie, wie Sie mit laufenden Instanzen umgehen, wenn Sie die Definition ändern. Halten Sie Definitionen in der Versionsverwaltung und testen Sie Änderungen vor dem Ausrollen. Siehe Thema 3.4 — Change Enablement.

**Sicherheit.** Workflows halten Zugangsdaten und rufen Systeme mit Macht auf. Geben Sie ihnen eigene Identitäten mit minimalen Berechtigungen, speichern Sie Geheimnisse sicher und überprüfen Sie, wer einen Workflow ändern kann. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Wie die Blickwinkel passen.** Workflow-Werkzeuge sind die Installation des Automatisierungs-Blickwinkels. Agile Praxis legt nahe, einen Workflow in kleinen Schritten mit Nutzern zu bauen. KI kann Anfragen klassifizieren, Inhalte entwerfen und innerhalb eines Ablaufs Vorschläge machen, mit menschlicher Prüfung. Analytik nutzt Zustands- und Zeitdaten, um Verzögerungen zu finden.

## Bewährte Praktiken

1. **Kartieren und vereinfachen Sie vor dem Bauen.** Zeichnen Sie den Prozess, wie er ist, entfernen Sie Schritte, die keinen Wert schaffen, und einigen Sie sich mit den Beteiligten auf den künftigen Ablauf. Siehe Thema 6.1 — Automatisierungsstrategie.
2. **Halten Sie Workflows klein und klar.** Bevorzugen Sie mehrere kurze Workflows mit definierten Übergaben gegenüber einem riesigen. Benennen Sie Schritte in einfacher Sprache, damit Support-Mitarbeitende ihnen folgen können.
3. **Gestalten Sie jeden Schritt wiederholungssicher.** Machen Sie Schritte, wo möglich, idempotent, damit Wiederholung harmlos ist. Wo nicht, ergänzen Sie Prüfungen, die erkennen, dass der Schritt schon geschehen ist.
4. **Planen Sie den Fehler.** Entscheiden Sie für jeden Schritt, was bei Fehlschlag geschieht: wiederholen mit Backoff und Limit, ausgleichen oder an eine Person übergeben. Leiten Sie ungelöste Fehler in eine sichtbare Warteschlange mit verantwortlicher Person.
5. **Behandeln Sie menschliche Aufgaben als erstklassig.** Legen Sie fest, wer, was er sieht, wie lange er Zeit hat, Erinnerungen und was bei Zeitüberschreitung oder Abwesenheit geschieht. Sehen Sie eine Vertretung vor.
6. **Zeigen Sie Nutzern den Status.** Lassen Sie anfragende Personen sehen, wo ihre Anfrage steht und was als Nächstes erwartet wird. Senden Sie Benachrichtigungen an sinnvollen Punkten, nicht bei jedem Schritt.
7. **Protokollieren und verfolgen Sie jede Instanz.** Erfassen Sie Auslöser, Eingaben, Ausgaben, Entscheidungen und Genehmigende. Machen Sie es leicht, eine Instanz über ihre Referenz nachzuschlagen.
8. **Steuern Sie Änderungen an Workflows.** Halten Sie Definitionen in der Versionsverwaltung, prüfen Sie Änderungen, testen Sie sie in einer sicheren Umgebung und entscheiden Sie, wie laufende Instanzen behandelt werden.
9. **Steuern Sie die Verbindungen.** Führen Sie ein Register der Integrationen mit Verantwortlichen, Zugangsdaten und Ansprechstellen für jedes System. Überwachen Sie auf Fehler und achten Sie auf angekündigte Schnittstellenänderungen.
10. **Überprüfen Sie die Leistung.** Betrachten Sie Zeit je Schritt, Wartezeiten, Fehler und Ausnahmen. Nutzen Sie die Daten, um Engpässe zu beseitigen und Workflows stillzulegen, die niemand nutzt.

## Fragen für die Diskussion im Team

**Welche unserer Prozesse geben Arbeit am häufigsten zwischen Menschen und Systemen weiter, und wo geht Arbeit verloren?**
Verfolgen Sie ein reales Beispiel. Rechnen Sie damit, dass irgendwo eine E-Mail- oder Chat-Übergabe steht. Wählen Sie anschließend eine Übergabe, die wir automatisieren.

**Was geschieht heute, wenn ein Schritt in einem Prozess auf halbem Weg scheitert, und wer erfährt es?**
Denken Sie an eine Kontoanlage, die in einem System gelang und in einem anderen scheiterte. Rechnen Sie mit Inkonsistenz. Entwerfen Sie anschließend einen Fehlerweg für einen Workflow.

**Welche unserer Genehmigungen stocken, und was soll geschehen, wenn die genehmigende Person nicht reagiert?**
Betrachten Sie die ältesten wartenden Punkte. Rechnen Sie mit langen Verzögerungen. Vereinbaren Sie anschließend eine Erinnerung, eine Vertretung und eine Regel für Zeitüberschreitung.

**Wer verantwortet jede Integration, auf die sich unsere Workflows stützen, und woran würden wir erkennen, dass sie ausfiel?**
Listen Sie die Integrationen auf. Rechnen Sie mit Waisen. Benennen Sie anschließend Verantwortliche und ergänzen Sie einen Alarm bei Fehlern.

**Welche Workflows hat eine Person mit einem Low-Code-Werkzeug gebaut, sodass sie womöglich niemand sonst versteht?**
Fragen Sie herum. Rechnen Sie mit mehreren. Dokumentieren Sie anschließend die drei wichtigsten und legen Sie sie in die Versionsverwaltung oder ein gemeinsames Register.

**Wo könnte KI innerhalb eines Workflows helfen, und wo muss ein Mensch entscheiden?**
KI kann klassifizieren, entwerfen und vorschlagen. Über Zugriff und Geld sollte eine Person entscheiden. Wählen Sie anschließend einen Schritt zur Erprobung mit Prüfung und einer Kennzahl für korrektes Routing.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Personalwesen und die IT einer Regionalbank steuern Eintritts-, Wechsel- und Austrittsereignisse per E-Mail. Neue Mitarbeitende brauchen ein Konto, einen Laptop, Gebäudezugang, einen Gehaltsdatensatz und eine Schulungsanmeldung, bearbeitet von fünf Teams. Jedes Team erhält eine E-Mail vom Personalwesen, erledigt seinen Teil und antwortet manchmal. Etwa jedem fünften neuen Mitarbeitenden fehlt am ersten Tag etwas.

Die Service-Managerin schlägt einen einzigen Workflow auf der Ticketplattform der Bank vor, die eine Workflow-Engine und Konnektoren hat. Sie beginnt damit, den Prozess mit den fünf Teams zu kartieren, und stellt fest, dass drei der Genehmigungen nie abgelehnt werden. Das neue Design entfernt zwei und behält eine, die der Führungskraft der neuen Person. Der Datensatz des Personalwesens zur Neueinstellung löst den Workflow aus. Er legt einen übergeordneten Fall mit fünf untergeordneten Aufgaben an, jede der Warteschlange des richtigen Teams zugewiesen, wo möglich parallel ablaufend. Die Kontoanlage wird mit einem Konnektor zum Identitätssystem automatisiert; die Laptop-Aufgabe geht an einen Techniker; der Gebäudezugang geht mit dem Startdatum an das Gebäudemanagement.

Das Team gestaltet für den Fehlerfall. Die Kontoanlage ist idempotent: Der Konnektor prüft, ob das Konto existiert, bevor er es anlegt. Scheitert der Konnektor zweimal mit Backoff, geht die Aufgabe mit angehängtem Fehler in eine Techniker-Warteschlange, und ein Alarm geht an die Workflow-Verantwortliche. Menschliche Aufgaben haben Erinnerungen nach einem Tag und eskalieren nach drei an eine Teamleitung. Jeder Fall zeigt dem Personalwesen und der Führungskraft der neuen Person seinen Status.

Nach drei Monaten sinkt der Anteil der neuen Mitarbeitenden, denen am ersten Tag etwas fehlt, auf etwa 4 Prozent. Die Audit-Spur lässt den Service Desk „Wo ist es?“ binnen einer Minute beantworten. Was schwierig bleibt: Der Gehaltskonnektor hängt von einer Anbieter-Schnittstelle ab, die sich einmal ohne Ankündigung änderte und einen fehlgeschlagenen Lauf verursachte, den zwei Tage lang niemand sah, bis der Alarm ergänzt wurde; das Gebäudemanagement arbeitet weiter mit einer Tabelle und kopiert die Falldaten von Hand; und Wechsel- und Austrittsereignisse haben mehr Ausnahmen und sind noch nicht einbezogen. Die Managerin plant als Nächstes Wechselereignisse ein und bittet den Anbieter um Änderungsmitteilungen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Stellen Sie stabile, dokumentierte APIs und Ereignisse bereit, die Workflows nutzen können, mit klaren Fehlermeldungen. Sagen Sie Workflow-Verantwortlichen Änderungen im Voraus. Nutzen Sie dieselben Ideen für Ihre eigenen Release-Workflows.

### Service- und Betriebsteams

Verantworten Sie die Workflows und Integrationen, die Sie betreiben: Logs, Alarme, Fehlerwarteschlangen und Dokumentation. Bearbeiten Sie Ausnahmen zügig und bringen Sie Muster zur Workflow-Verantwortlichen.

### Führung und Governance

Verlangen Sie die Reisesicht, mit einer verantwortlichen Person für jeden teamübergreifenden Workflow. Finanzieren Sie die Pflege der Integrationen. Suchen Sie Belege für schnelleren, verlässlicheren Fluss, nicht eine Zahl von Workflows.

### Kunden und Nutzer

Sie sollten den Status Ihrer Anfrage sehen und bekommen, worum Sie baten, ohne nachzuhaken. Braucht ein Schritt Ihre Eingabe, sollte klar sein, was gebraucht wird und bis wann.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bauen Sie Workflows Reise für Reise mit denen, die sie nutzen, liefern Sie kleine Verbesserungen aus und überprüfen Sie Ergebnisse. Vorsicht: Ein Plattform-Rollout, der alle Prozesse auf einmal migriert, vervielfacht das Risiko; beginnen Sie mit einer Reise.

### KI

KI kann eingehende Anfragen klassifizieren, Details aus Freitext extrahieren, Nachrichten entwerfen und Routing vorschlagen, wobei eine Person oder eine Regel vor Handlungen prüft. Benennen Sie eine verantwortliche Person und verfolgen Sie Korrekturen. Vorsicht: Ein KI-Schritt in einem Workflow kann Arbeit im großen Maßstab an die falsche Stelle schicken; ziehen Sie Stichproben der Ergebnisse und halten Sie eine Rückfall-Warteschlange. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Workflows sind der Kern dieses Blickwinkels. Bauen Sie mit idempotenten Schritten, Grenzen und Protokollen und halten Sie jede Integration verantwortet und überwacht. Vorsicht: Ein Workflow, der viele Systeme berührt, kann einen Fehler weit verbreiten; ergänzen Sie Ratenbegrenzungen und einen Stopp-Schalter. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Nutzen Sie Workflow-Daten für Zeit je Schritt, Warten auf Genehmigungen, Fehlerraten, Ausnahmen und Volumen nach Art. Vorsicht: Zeitdaten spiegeln, wie Schritte definiert sind, und lassen sich durch Aufteilen oder Umklassifizieren von Aufgaben manipulieren; prüfen Sie mit Stichproben von Fällen. Siehe Thema 7.6 — Prozess- und Wertstromanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Einen schlechten Prozess automatisieren.** Verschwendung bleibt erhalten. Vereinfachen Sie und einigen Sie sich zuerst auf den Ablauf.
- **Kein Fehlerdesign.** Ein Schritt scheitert, und die Instanz hängt fest. Definieren Sie Wiederholungen, Ausgleich und Warteschlangen.
- **Nicht idempotente Wiederholungen.** Duplikate entstehen. Machen Sie Schritte wiederholungssicher oder prüfen Sie zuerst.
- **Stockende Genehmigungen.** Arbeit wartet auf eine abwesende Person. Ergänzen Sie Erinnerungen, Vertretungen und Zeitüberschreitungen.
- **Stiller Ausfall einer Integration.** Ein Konnektor bricht, und niemand weiß es. Überwachen und alarmieren Sie.
- **Low-Code-Abläufe ohne Verantwortliche.** Niemand versteht sie. Registrieren, dokumentieren und prüfen Sie.
- **Definitionen sorglos ändern.** Laufende Instanzen brechen. Versionieren und testen Sie Änderungen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Design | Übergaben per E-Mail | Einige einfache Workflows | Kartierte, vereinfachte Reisen mit Verantwortlichen | Workflows aus Daten verbessert | Reisen über Systeme und Partner orchestriert |
| Verlässlichkeit | Bricht unbemerkt | Grundlegende Alarme | Definierte Wiederholungen, Fehlerwarteschlangen und idempotente Schritte | Fehler gemessen und verringert | Sich selbst prüfende Abläufe mit menschlicher Eskalation |
| Menschliche Aufgaben | Ad hoc | Genehmigungen per E-Mail | Definierte Aufgaben, Erinnerungen und Vertretungen | Aufgabenverzögerungen gemessen | Menschliche Aufgaben nach Risiko ausgewogen und automatisiert |
| Kontrolle | Keine Aufzeichnungen | Einige Logs | Versionsverwaltung, Audit-Spur und Register | Änderungen überprüft und auditiert | Governance in die Plattform integriert |

## Checkliste

- [ ] Wir haben jeden Prozess vor dem Automatisieren kartiert und vereinfacht.
- [ ] Workflows sind klein, in einfacher Sprache benannt und verantwortet.
- [ ] Schritte sind idempotent oder gegen Duplizierung geschützt.
- [ ] Fehlerwege und Warteschlangen sind definiert, mit Alarmen.
- [ ] Menschliche Aufgaben haben Erinnerungen, Vertretungen und Zeitüberschreitungen.
- [ ] Jede Instanz ist protokolliert und nachvollziehbar.
- [ ] Definitionen liegen in der Versionsverwaltung, und Änderungen werden getestet.
- [ ] Integrationen haben Verantwortliche und Monitoring.

## KI-Prompts

**Verwandeln Sie ein Verfahren in eine Workflow-Skizze.**

```text
Here is a description of how we handle [type of request] today: [paste steps and who does each].
Draft a workflow outline with: trigger, steps (marking each as automated, human, or approval), data passed between steps, and for each step what should happen on failure or no response. Mark every assumption. Do not invent systems or rules.
List what you are unsure of.
```

**Finden Sie Fehlerstellen in einem Ablauf.**

```text
Here is our workflow definition in plain text: [paste].
List each step that calls another system, what could go wrong, whether it appears to be safe to retry, and what information a support person would need to fix it. Do not rewrite the workflow.
List what you are unsure of.
```

**Analysieren Sie Verzögerungen aus Workflow-Daten.**

```text
Here is an export of workflow instances with step names, start and end times, and outcome, with identifiers removed: [paste].
Compute median and 90th percentile time for each step, list the three longest waits, count failures by step, and list questions to investigate. Do not infer causes.
List what you are unsure of.
```

## KI-Skills

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Schritte, Wartezeiten und Übergaben zu analysieren.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): nutzen Sie ihn, um die gesamte Reise über Teams hinweg zu sehen.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): nutzen Sie ihn, um Workflows als Text zur Prüfung zu zeichnen.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): nutzen Sie ihn, um zuzuweisen, wer jeden Schritt ausführt und genehmigt.
- [change-request](../../../../skills/change-request/SKILL.md): nutzen Sie ihn, um Änderungen an Workflow-Definitionen zu beschreiben.

## Wichtige Quellen

- OMG, Spezifikation der Business Process Model and Notation (BPMN): die Standardnotation für Prozessdiagramme.
- Gregor Hohpe und Bobby Woolf, *Enterprise Integration Patterns* (2003): ein Katalog von Mustern, Systeme zu verbinden.
- Wikipedia, „Workflow“ und „Orchestration (computing)“: Überblicke über die Ideen.
- Wikipedia, „Idempotence“: die Eigenschaft, die Wiederholungen sicher macht.

## Literaturverzeichnis

1. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
2. Workflow engine — Wikipedia — https://en.wikipedia.org/wiki/Workflow_engine
3. Workflow management system — Wikipedia — https://en.wikipedia.org/wiki/Workflow_management_system
4. Orchestration (computing) — Wikipedia — https://en.wikipedia.org/wiki/Orchestration_(computing)
5. Business Process Model and Notation — Wikipedia — https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
6. Finite-state machine — Wikipedia — https://en.wikipedia.org/wiki/Finite-state_machine
7. Event-driven architecture — Wikipedia — https://en.wikipedia.org/wiki/Event-driven_architecture
8. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
9. Exponential backoff — Wikipedia — https://en.wikipedia.org/wiki/Exponential_backoff
10. Dead letter queue — Wikipedia — https://en.wikipedia.org/wiki/Dead_letter_queue
11. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
