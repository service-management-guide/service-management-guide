# Agentische KI und menschliche Aufsicht

**KI-Agenten, die auf Systeme einwirken, statt nur Fragen zu beantworten, brauchen einen definierten Umfang, Berechtigungen nach dem Prinzip geringster Rechte, Genehmigungsschranken für folgenreiche Handlungen, eine vollständige Audit-Spur und einen getesteten Weg, sie zu stoppen. Autonomie sollte in kleinen, belegbasierten Schritten gewährt werden, und die Rechenschaft bleibt bei einer benannten Person.**

## Warum das wichtig ist

Die meisten bisherigen Nutzungen von KI im Service-Management sind beratend. Ein Modell liest ein Ticket und schlägt eine Kategorie vor oder entwirft eine Antwort, die eine Person bearbeitet. Ist der Vorschlag falsch, bemerkt es ein Mensch, bevor etwas geschieht. Ein KI-Agent ändert das. Er erhält Werkzeuge: Er kann Systeme abfragen, Datensätze aktualisieren, Befehle ausführen, Tickets öffnen und schließen und Nachrichten senden. Er plant Schritte auf ein Ziel hin und führt sie aus, oft mit wenig menschlicher Beteiligung zwischen Anweisung und Ergebnis.

Das verspricht echten Wert. Ein Agent könnte einen Alarm untersuchen, indem er Logs zieht, jüngste Changes prüft und eine Zusammenfassung postet. Er könnte eine Routineanfrage von Anfang bis Ende bearbeiten: Berechtigung prüfen, das Konto anlegen, den Nutzer benachrichtigen. Er könnte eine Korrektur entwerfen und einen Pull Request eröffnen. Gut gemacht, nimmt er beschäftigten Menschen Routinearbeit ab und arbeitet zu jeder Stunde.

Er verändert auch die Natur des Risikos. Eine falsche Antwort ist eine Unannehmlichkeit. Eine falsche Handlung kann Daten löschen, der falschen Person Zugriff geben, einen Service lahmlegen oder eine Nachricht an zehntausend Kunden senden. Das Tempo, das Agenten nützlich macht, lässt ihre Fehler sich schnell ausbreiten. Und Agenten sind Angriffen ausgesetzt: Eine feindselige Anweisung, versteckt in einem Ticket oder auf einer Webseite, kann einen Agenten lenken, der handeln darf.

Dieses Thema legt die Hauptideen für den sicheren Einsatz von Agenten im Service-Management dar: Umfang, Berechtigungen, Genehmigung, Audit und Stoppen. Es baut auf Thema 5.1 — KI im Service-Management und Thema 5.6 — KI-Governance, Risiko und Compliance auf und verbindet sich mit Automatisierung (Thema 6.1 — Automatisierungsstrategie und Thema 6.6 — Runbook-Automatisierung und automatische Behebung), Change Enablement (Thema 3.4 — Change Enablement) und Informationssicherheit (Thema 3.13 — Informationssicherheitsmanagement).

## Kernkonzepte

**KI-Agent.** Ein System, das seine Umgebung wahrnimmt, Entscheidungen trifft und Handlungen ausführt, um Ziele zu erreichen. Wikipedia beschreibt Intelligent agents und AI agents. In der heutigen Praxis kombiniert ein Agent meist ein Sprachmodell mit Werkzeugen und einer Schleife: Das Modell entscheidet, was als Nächstes zu tun ist, ruft ein Werkzeug auf, liest das Ergebnis und macht weiter, bis es entscheidet, fertig zu sein, oder ein Limit erreicht.

**Werkzeuge und Berechtigungen.** Die Menge der Handlungen, die ein Agent ausführen kann, etwa eine Wissensdatenbank lesen, Monitoring abfragen, ein Ticket anlegen oder einen Service neu starten. Werkzeuge werden oft über Programmierschnittstellen (APIs) bereitgestellt. Wikipedia beschreibt APIs. Offene Protokolle zur Verbindung von Modellen mit Werkzeugen, etwa das Model Context Protocol, auf Wikipedia beschrieben, machen es leicht, Werkzeuge hinzuzufügen, was nützlich ist und auch erweitert, was ein Agent tun kann. Jedes Werkzeug trägt sein eigenes Risiko.

**Autonomiestufen.** Eine nützliche Art, über Kontrolle nachzudenken, sind Stufen, von keiner bis zu voller. An einem Ende schlägt der Agent nur vor. Dann bereitet er eine Handlung zur Genehmigung vor. Dann handelt er allein innerhalb enger Grenzen und berichtet. Am anderen Ende handelt er breit ohne Prüfung. Der Wikipedia-Artikel zu Supervisory control beschreibt die Idee menschlicher Überwachung automatisierter Systeme. Wählen Sie die Stufe je Aufgabe, nach den Kosten eines Fehlers und der Möglichkeit, ihn rückgängig zu machen.

**Menschliche Aufsicht.** Eine Person bleibt in der Lage, den Agenten zu verstehen, zu genehmigen, zu stoppen oder zu korrigieren. Wikipedia beschreibt Human-in-the-loop-Systeme. Aufsicht hat mehrere Formen: Handlungen vor ihrer Ausführung genehmigen, Handlungen während der Ausführung überwachen und im Nachhinein prüfen. Die richtige Form hängt von Tempo und Risiko ab. Prüfung im Nachhinein nützt bei einer unumkehrbaren Handlung nichts.

**Automation Bias und Abnicken.** Menschen neigen dazu zu genehmigen, was ein System vorschlägt, besonders wenn Genehmigungen häufig sind und ähnlich aussehen. Wikipedia beschreibt Automation bias. Eine Kontrolle, die Menschen ungelesen genehmigen, ist keine Kontrolle. Gestalten Sie Genehmigungen so, dass sie zeigen, was geschehen wird, selten genug sind, um gelesen zu werden, und durch Stichproben geprüft werden.

**Geringste Rechte.** Ein Agent sollte nur die Berechtigungen haben, die er für seine Aufgabe braucht, und nur so lange, wie er sie braucht. Wikipedia beschreibt das Principle of least privilege. Nutzen Sie getrennte Identitäten für Agenten, nicht ein gemeinsames Administratorkonto, damit Handlungen nachvollzogen und Berechtigungen begrenzt werden können.

**Der verwirrte Stellvertreter (Confused Deputy).** Ein Sicherheitsproblem, bei dem ein vertrauenswürdiges Programm dazu gebracht wird, seine Befugnis im Namen von jemandem zu nutzen, der sie nicht hat. Wikipedia beschreibt das Confused deputy problem. Ein Agent, der mit hohen Rechten handeln kann und Anweisungen aus wenig vertrauenswürdigem Text erhält, etwa der Nachricht eines Nutzers, ist ein klassischer Fall.

**Prompt Injection.** Feindselige Anweisungen, versteckt in Inhalten, die ein Agent liest, etwa einem Ticket, einer E-Mail, einer Webseite oder einer Logzeile. Wikipedia beschreibt Prompt injection. Weil das Modell Anweisungen nicht verlässlich von Daten unterscheiden kann, kann eine Inhaltsquelle versuchen, den Agenten umzulenken. Die Abwehr beruht überwiegend darauf zu begrenzen, was der Agent tun kann, nicht darauf, das Modell zu überzeugen, schlechten Text zu ignorieren.

**Sandboxing.** Agenten in eingeschränkten Umgebungen mit begrenztem Zugriff auf Systeme und Daten ausführen. Wikipedia beschreibt Sandboxes in der Computersicherheit. Lassen Sie einen Agenten Handlungen zuerst in einer Testumgebung ausprobieren, bevor er in der Produktion arbeitet.

**Umkehrbarkeit.** Bevorzugen Sie Handlungen, die sich rückgängig machen lassen: ein Ticket anlegen, ein Label hinzufügen, einen Change vorschlagen. Behandeln Sie unumkehrbare Handlungen, etwa Löschen, Zahlen und Senden von Nachrichten nach außen, als genehmigungspflichtig oder verboten. Wikipedia beschreibt Rollback in der Datenverwaltung.

**Limits und Sicherungsschalter (Circuit Breaker).** Obergrenzen dafür, wie viele Handlungen ein Agent pro Stunde ausführen, wie viel er ausgeben, wie viele Elemente er auf einmal ändern und wie lange er laufen darf. Wikipedia beschreibt Rate limiting. Ein Limit verwandelt einen Amoklauf in einen begrenzten Fehler.

**Notausschalter (Kill Switch).** Ein schneller, verlässlicher Weg, einen Agenten zu stoppen und seinen Zugriff zu entziehen. Wikipedia beschreibt Kill switches. Testen Sie ihn. Ein Notausschalter, der von der Mitarbeit des Agenten oder von einem ausgefallenen System abhängt, ist keiner.

**Audit-Spur.** Eine vollständige Aufzeichnung dessen, worum der Agent gebeten wurde, was er entschied, welche Werkzeuge er mit welchen Eingaben aufrief und was geschah. Wikipedia beschreibt Audit trails. Ohne sie können Sie einen Fehler nicht untersuchen, Compliance nicht zeigen und nicht lernen.

**Rechenschaft.** Ein Agent ist nicht rechenschaftspflichtig; Menschen sind es. Eine benannte verantwortliche Person ist dafür zuständig, was der Agent tut, für seine Berechtigungen und die Prüfung seiner Aufzeichnung. Wikipedia beschreibt Accountability. Siehe Thema 2.8 — Produkt- und Service-Verantwortung.

**Multi-Agenten-Systeme.** Mehrere zusammenarbeitende Agenten können Komplexität, sich kaskadierende Fehler und unklare Verantwortung hinzufügen. Wikipedia beschreibt Multi-agent systems. Behandeln Sie Umfang und Berechtigungen jedes Agenten getrennt und seien Sie vorsichtig bei Agenten, die Agenten anweisen.

**Funktionstrennung.** Die Idee, dass keine einzelne Partei eine riskante Handlung allein abschließen können sollte, gilt auch für Agenten. Ein Agent, der einen Change vorschlägt, sollte nicht derjenige sein, der ihn genehmigt. Wikipedia beschreibt Separation of duties.

**Wie die Blickwinkel passen.** Agenten sitzen dort, wo KI auf Automatisierung trifft. Agile Praxis legt nahe, klein zu beginnen und die Autonomie schrittweise mit Belegen zu erweitern. Analytik misst, was Agenten tun und worin sie sich irren. Governance (siehe Thema 5.6 — KI-Governance, Risiko und Compliance) setzt die Regeln.

## Bewährte Praktiken

1. **Definieren Sie den Umfang schriftlich.** Halten Sie fest, wofür der Agent da ist, was er darf, was er nie darf und welche Daten er berühren darf. Halten Sie ihn zunächst eng.
2. **Geben Sie jedem Agenten eine eigene Identität.** Nutzen Sie ein getrenntes Konto mit minimalen Berechtigungen, auf seine Aufgabe begrenzt, und rotieren oder befristen Sie Zugangsdaten. Verwenden Sie kein Administratorkonto eines Menschen wieder.
3. **Wählen Sie die Autonomiestufe nach Risiko.** Lassen Sie den Agenten zuerst vorschlagen, dann bei risikoarmen, umkehrbaren Aufgaben handeln und verlangen Sie Genehmigung für alles Folgenreiche oder Unumkehrbare. Schreiben Sie die Stufen je Aufgabe auf.
4. **Gestalten Sie Genehmigungen, die Menschen lesen.** Zeigen Sie die vorgeschlagene Handlung, den Grund, die Belege und die Wirkung. Halten Sie Genehmigungen selten genug, um gelesen zu werden, und prüfen Sie genehmigte Punkte stichprobenartig auf Qualität.
5. **Testen Sie zuerst in einer Sandbox.** Führen Sie den Agenten gegen eine sichere Kopie mit realistischen Fällen aus, auch feindseligen, bevor er die Produktion berührt.
6. **Behandeln Sie Eingaben als nicht vertrauenswürdig.** Lassen Sie Inhalte aus Tickets, E-Mails oder dem Web keine Befugnis erteilen. Begrenzen Sie die verfügbaren Werkzeuge, wenn der Agent nicht vertrauenswürdige Inhalte verarbeitet.
7. **Begrenzen Sie den Schadensradius.** Setzen Sie Limits für Zahl der Handlungen, Umfang der Änderung, Ausgaben und Zeit. Machen Sie eine Massenhandlung zu einem eigenen, genehmigten Schritt.
8. **Protokollieren Sie alles und prüfen Sie es.** Führen Sie die vollständige Spur, speichern Sie sie dort, wo der Agent sie nicht ändern kann, und prüfen Sie regelmäßig Stichproben. Alarmieren Sie bei ungewöhnlichen Mustern.
9. **Bauen und testen Sie den Notausschalter.** Machen Sie ihn schnell, vom Agenten unabhängig und dem Bereitschaftspersonal bekannt. Proben Sie ihn.
10. **Erweitern Sie Autonomie langsam.** Gewähren Sie mehr erst nach einer Phase guter Ergebnisse, mit Genehmigung einer benannten verantwortlichen Person und einer gemessenen Fehlerrate. Verringern Sie sie, wenn Probleme auftreten.

## Fragen für die Diskussion im Team

**Was wäre das Schlimmste, das dieser Agent mit den Berechtigungen tun könnte, die wir ihm geben wollen?**
Gehen Sie die Berechtigungen Werkzeug für Werkzeug durch. Rechnen Sie mit Unbehagen. Entfernen oder beschränken Sie anschließend jede Berechtigung, deren schlimmsten Fall wir nicht akzeptieren würden.

**Welche seiner Handlungen können wir rückgängig machen, und welche nicht?**
Listen Sie sie auf. Rechnen Sie mit einigen unumkehrbaren, die als sicher angenommen wurden. Verlangen Sie anschließend für jede unumkehrbare Handlung eine Genehmigung.

**Woher wissen Genehmigende, was sie genehmigen, und wie oft sehen sie eine Anfrage?**
Stellen Sie sich die genehmigende Person an einem geschäftigen Tag vor. Rechnen Sie mit langen, ähnlich aussehenden Anfragen. Gestalten Sie anschließend eine Zusammenfassung und eine Obergrenze für das Genehmigungsvolumen.

**Was müsste jemand in ein Ticket oder eine E-Mail schreiben, damit der Agent etwas tut, das wir nicht wollen?**
Probieren Sie es als Angreifer. Rechnen Sie mit Überraschungen. Wählen Sie anschließend Gegenmaßnahmen, etwa Werkzeuge einzuschränken, wenn er nicht vertrauenswürdige Inhalte liest.

**Wenn wir ihn sofort stoppen müssten, wer würde es tun, wie, und wie lange würde es dauern?**
Fragen Sie nach den Schritten und proben Sie. Rechnen Sie mit Unsicherheit. Schreiben Sie anschließend ein einseitiges Stoppverfahren und testen Sie es.

**Wer verantwortet diesen Agenten, und was prüft diese Person jede Woche?**
Benennen Sie die Person und die Prüfung. Rechnen Sie mit Lücken. Weisen Sie anschließend Verantwortung und eine wöchentliche Stichprobenprüfung mit definierten Fragen zu.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Infrastrukturteam einer nationalen Steuerbehörde will, dass ein Agent nachts Produktionsalarme untersucht. Derzeit wird ein Bereitschafts-Engineer bei den meisten Alarmen geweckt, braucht 15 bis 30 Minuten, um Kontext zu sammeln, und stellt oft fest, dass die Ursache ein bekanntes Problem mit dokumentierter Behebung ist.

Das Team gestaltet den Agenten in drei Stufen. In Stufe eins hat der Agent nur Lesezugriff: Er kann Metriken, Logs, jüngste Change-Datensätze und die Wissensdatenbank abfragen und eine Zusammenfassung mit den genutzten Belegen in den Incident-Kanal posten. In Stufe zwei darf er zusätzlich eine kleine Liste umkehrbarer Handlungen ausführen, etwa einen zustandslosen Service neu starten oder einen Worker-Pool um zwei Instanzen hochskalieren, nur wenn der Alarm zu einem dokumentierten Runbook passt, mit einem Limit von drei Handlungen pro Stunde und einem Post in den Kanal nach jeder. In Stufe drei, die noch nicht genehmigt ist, dürfte er Konfigurationsänderungen zur menschlichen Genehmigung vorschlagen.

Der Agent hat ein eigenes Dienstkonto mit Lesezugriff auf die Produktion sowie den zwei benannten Handlungen. Er liest Ticket-Text und Logs, die feindselige Inhalte enthalten könnten; wenn er also Freitext liest, kann er im selben Schritt kein Handlungswerkzeug aufrufen. Die vollständige Aufzeichnung seiner Anfragen, Werkzeugaufrufe und Ergebnisse geht in einen getrennten Log-Speicher. Ein erfahrener Engineer verantwortet den Agenten, prüft jede Woche zehn Sitzungen und kann seine Zugangsdaten mit einem Befehl sperren, was das Team monatlich probt.

Nach zwei Monaten in Stufe eins finden die Bereitschafts-Engineers die Zusammenfassungen in 85 Prozent der Fälle korrekt. In 10 Prozent übersehen sie einen relevanten Change, weil der Change-Datensatz unvollständig war, und in 5 Prozent zeigen sie auf die falsche Komponente. Stufe zwei beginnt mit einem Runbook. Im ersten Monat startet der Agent einen Service dreimal neu, korrekt. In einem Test mit einem präparierten Ticket, das eine versteckte Anweisung enthielt, einen Pool auf eine sehr hohe Zahl zu skalieren, stoppen das Ratenlimit und die Handlungsregel ihn.

Was sich ändert: Engineers werden seltener geweckt und kommen mit einer Zusammenfassung und Belegen an. Was schwierig bleibt: Die Abhängigkeit des Agenten von korrekten Change-Datensätzen legt Lücken in der Datenqualität offen; Engineers vertrauen mitunter der Zusammenfassung mehr als ihren eigenen Prüfungen; und das Sicherheitsteam hat gebeten, die Aufbewahrung des Audit-Logs zu verlängern und zu überprüfen. Der Verantwortliche hält dies fest und hält Stufe drei zurück, bis die Fehlerrate in Stufe zwei über ein Quartal gemessen ist.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Stellen Sie sichere, enge Werkzeuge mit klaren Berechtigungen, Ratenlimits und Logs bereit. Geben Sie Agenten keinen pauschalen Zugriff auf Ihre Pipelines oder Daten. Beziehen Sie Agenten in Ihre Bedrohungsmodelle ein.

### Service- und Betriebsteams

Verantworten Sie den Umfang des Agenten, prüfen Sie seine Aufzeichnung und proben Sie, ihn zu stoppen. Halten Sie Runbooks korrekt, denn Agenten verlassen sich auf sie. Melden Sie Fehler und Beinahe-Vorfälle.

### Führung und Governance

Entscheiden Sie, welche Autonomie für jede Aufgabe akzeptabel ist, und verlangen Sie eine benannte verantwortliche Person und eine Audit-Spur. Verlangen Sie Belege aus Erprobungen Stufe für Stufe und seien Sie bereit, Autonomie zu verringern. Verlassen Sie sich nicht allein auf Zusicherungen des Anbieters.

### Kunden und Nutzer

Sie sollten wissen, wenn ein automatisierter Agent auf Ihre Anfrage hin handelt, und einen Weg zu einer Person haben, die einen Fehler korrigieren kann. Sagen Sie dem Anbieter, wenn eine automatisierte Handlung falsch war.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Erweitern Sie Autonomie in kleinen Schritten mit Belegen, besprechen Sie jeden Schritt mit den Beteiligten und halten Sie jedes Release klein. Vorsicht: Schnelle Iteration kann die Sicherheitsprüfung überholen; halten Sie für jede Erhöhung der Autonomie eine Schranke bereit.

### KI

Der Agent ist ein KI-System mit verantwortlicher Person, Testfällen und Monitoring, und er braucht besondere Sorgfalt, weil er handelt. Schützen Sie sich vor Prompt Injection und übermäßigem Vertrauen. Vorsicht: Verlassen Sie sich nicht darauf, dass Anweisungen, vorsichtig zu sein, die Hauptkontrolle sind; verlassen Sie sich auf Berechtigungen, Limits und Genehmigung. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Agenten verbinden sich mit Automatisierung: Sie wählen Handlungen aus und lösen sie aus. Halten Sie die Handlungen selbst deterministisch und getestet, mit eigener Validierung, sodass die Wahl des Agenten auf genehmigte Optionen beschränkt ist. Vorsicht: Automatisierung, die freie Befehle von einem Agenten annimmt, ist so riskant wie der Agent; stellen Sie enge, benannte Handlungen bereit. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Messen Sie ausgeführte Handlungen, Genehmigungsquoten, Übersteuerungen, in Prüfungen gefundene Fehler, gesparte Zeit und Beinahe-Vorfälle. Vorsicht: Eine hohe Genehmigungsquote kann gute Vorschläge oder Abnicken bedeuten; ziehen Sie Stichproben der genehmigten Punkte. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Breite Berechtigungen.** Dem Agenten wird ein gemeinsames Admin-Konto gegeben. Nutzen Sie eine getrennte Identität mit geringsten Rechten.
- **Genehmigungen, die niemand liest.** Häufige, vage Anfragen werden abgenickt. Machen Sie sie selten, klar und stichprobengeprüft.
- **Feindseliger Text lenkt den Agenten.** Inhalte in Tickets oder auf Webseiten erteilen Befehle. Beschränken Sie Werkzeuge rund um nicht vertrauenswürdige Eingaben.
- **Keine Limits.** Eine Schleife oder ein Fehler läuft in Maschinentempo. Begrenzen Sie Handlungen, Ausgaben und Umfang.
- **Kein Stopp-Knopf.** Niemand kann ihn anhalten. Bauen und proben Sie einen Notausschalter.
- **Keine Aufzeichnung.** Incidents lassen sich nicht untersuchen. Führen Sie eine vollständige, geschützte Audit-Spur.
- **Autonomie aus Begeisterung erhöht.** Der Agent erhält mehr Macht ohne Belege. Erweitern Sie in Schritten mit Kennzahlen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Umfang und Berechtigungen | Breit oder unklar | Enge Erprobung | Schriftlicher Umfang, eigene Identität, geringste Rechte | Umfang und Berechtigungen regelmäßig überprüft | Berechtigungen passen sich nach Risiko mit Genehmigung an |
| Aufsicht | Keine | Informelle Prüfung | Definierte Autonomiestufen und Genehmigungsschranken | Genehmigungsqualität stichprobenartig geprüft und gemessen | Aufsicht anhand von Belegen über Agenten hinweg abgestimmt |
| Sicherheitskontrollen | Keine | Grundlegendes Logging | Sandbox, Limits und getesteter Notausschalter | Kontrollen auditiert und geübt | Kontrollen für alle Agenten in die Plattform eingebaut |
| Rechenschaft | Unklar | Der Bauende verantwortet ihn | Benannte verantwortliche Person mit wöchentlicher Prüfung | Verantwortliche prüft Kennzahlen und Incidents | Verantwortung über Agenten und Teams abgestimmt |

## Checkliste

- [ ] Der Agent hat einen schriftlichen Umfang und eine namentlich benannte verantwortliche Person.
- [ ] Er nutzt eine eigene Identität mit Berechtigungen nach geringsten Rechten.
- [ ] Autonomiestufen sind je Aufgabe definiert, mit Genehmigung für folgenreiche oder unumkehrbare Handlungen.
- [ ] Genehmigungen zeigen, was geschehen wird, und werden auf Qualität stichprobengeprüft.
- [ ] Wir haben ihn in einer Sandbox getestet, auch mit feindseligen Eingaben.
- [ ] Limits begrenzen Handlungen, Ausgaben und Umfang.
- [ ] Seine vollständige Aufzeichnung wird dort protokolliert, wo er sie nicht ändern kann, und geprüft.
- [ ] Wir haben einen Notausschalter und haben seine Nutzung geprobt.

## KI-Prompts

**Testen Sie den Umfang eines Agenten.**

```text
Our agent's written scope is: [paste]. Its tools and permissions: [list].
List twenty scenarios, some inside the scope, some at the edge, and some that try to get the agent to act outside it or to use a tool in a harmful way, and for each state what the correct behavior is. Do not include real systems or data.
List what you are unsure of.
```

**Prüfen Sie ein Handlungsprotokoll.**

```text
Here is a sample of an agent's action log, with identifiers removed: [paste].
List actions that look unusual in size, timing, or target, actions that did not match a documented runbook, and anything that looks like the agent following instructions from untrusted text. Quote each. Do not say whether the agent was right.
List what you are unsure of.
```

**Entwerfen Sie eine Genehmigungsnachricht.**

```text
The agent proposes this action: [describe]. The evidence it used: [list]. What would change if it were done: [describe]. How to undo it: [describe or write "not known"].
Write a clear approval request of under 100 words for a busy approver, stating what will happen, why, the risk, and how to undo it. Do not recommend approval.
List what you are unsure of.
```

## KI-Skills

- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um Agentenrisiken, Verantwortliche und Entscheidungen festzuhalten.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um zu definieren, welche Handlungen ein Agent wann ausführen darf.
- [security-testing](../../../../skills/security-testing/SKILL.md): nutzen Sie ihn, um Agenten gegen feindselige Eingaben zu testen.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): nutzen Sie ihn, um Reaktionen zu planen, wenn ein Agent sich fehlverhält.
- [mlops](../../../../skills/mlops/SKILL.md): nutzen Sie ihn, um die Modelle hinter Agenten zu überwachen und zu versionieren.

## Wichtige Quellen

- NIST, AI Risk Management Framework: eine Struktur zur Steuerung von KI-Risiken, einschließlich derer autonomer Systeme.
- OWASP, Hinweise zu Risiken für Anwendungen auf Grundlage großer Sprachmodelle (owasp.org): darunter Prompt Injection und übermäßige Handlungsfreiheit (Excessive Agency).
- Wikipedia, „AI agent“ und „Prompt injection“: Überblicke über die Idee und ein wichtiges Sicherheitsrisiko.
- Wikipedia, „Principle of least privilege“: die Grundkontrolle, um Schaden zu begrenzen.

## Literaturverzeichnis

1. Intelligent agent — Wikipedia — https://en.wikipedia.org/wiki/Intelligent_agent
2. AI agent — Wikipedia — https://en.wikipedia.org/wiki/AI_agent
3. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
4. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
5. Confused deputy problem — Wikipedia — https://en.wikipedia.org/wiki/Confused_deputy_problem
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Sandbox (computer security) — Wikipedia — https://en.wikipedia.org/wiki/Sandbox_(computer_security)
8. Kill switch — Wikipedia — https://en.wikipedia.org/wiki/Kill_switch
9. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
10. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
11. Rate limiting — Wikipedia — https://en.wikipedia.org/wiki/Rate_limiting
12. OWASP — OWASP Foundation — https://owasp.org
