# Pipelines und automatisierte Changes

**Eine Delivery-Pipeline kann die Kontrollen tragen, die Change Enablement braucht: Tests, Sicherheitsprüfungen, Richtlinienprüfungen, Prüfung durch Kolleginnen und Kollegen, Funktionstrennung und eine Belegspur für jeden Change. Die verbleibende menschliche Genehmigung ist für die Ermessensentscheidungen da, die die Pipeline nicht treffen kann.**

## Warum das wichtig ist

Als Änderung selten und groß war, bedeutete Kontrolle eine Besprechung. Menschen versammelten sich, lasen ein Dokument und einigten sich, dass ein Release weitergehen konnte. Als Änderung häufig und klein wurde, skalierte die Besprechung nicht mehr. Ein Team, das zwanzigmal am Tag ausliefert, kann nicht zwanzig Boards einberufen. Es kann aber zwanzigmal dieselbe Reihe von Prüfungen mit gleichbleibender Strenge ausführen und von jeder eine Aufzeichnung führen.

Das ist der Beitrag der Pipeline zum Service-Management. Dieselbe automatisierte Folge, die einen Change baut und ausrollt, kann ihn auch testen, auf Schwächen scannen, gegen Richtlinien prüfen, eine zweite prüfende Person verlangen und aufschreiben, was geschah. Das Ergebnis ist oft bessere Kontrolle, als eine Besprechung sie bot: konsistent, an den tatsächlichen Change gebunden und noch lange danach für einen Auditor verfügbar. Wikipedia beschreibt Continuous delivery und Test automation als die Praktiken, die das möglich machen.

Die Pipeline ist auch etwas Neues, das gesteuert werden muss. Sie hält Zugangsdaten, die die Produktion ändern können, sie kann falsch konfiguriert sein, sodass sie Prüfungen überspringt, und sie kann ein Team dazu bringen, grünen Häkchen zu vertrauen, die wenig testen. Dieses Thema erklärt, wie man Pipelines als Kontrollen gestaltet, wie man Belege für Auditoren erzeugt und wie man das menschliche Urteil bewahrt, das Automatisierung nicht ersetzen kann. Es baut auf Continuous Delivery (Thema 2.2 — Continuous Delivery) und Change Enablement (Thema 3.4 — Change Enablement) auf, verbindet sich mit Infrastructure as Code (Thema 6.3 — Infrastructure as Code und GitOps) und Release-Management (Thema 3.5 — Release- und Deployment-Management) und teilt Anliegen mit der Informationssicherheit (Thema 3.13 — Informationssicherheitsmanagement).

## Kernkonzepte

**Pipeline.** Eine automatisierte Folge von Stufen, die einen Change vom Quellcode in die Produktion bringt: bauen, testen, scannen, paketieren, ausrollen, verifizieren. Wikipedia beschreibt Pipelines in der Software. Jede Stufe besteht oder scheitert, und ein Scheitern stoppt den Change. Pipelines sind als Code definiert und in der Versionsverwaltung gespeichert.

**Continuous Integration und Delivery.** Änderungen oft zusammenführen und jeden Build auslieferbar halten, wie in Thema 2.2 — Continuous Delivery beschrieben. Die Pipeline ist die Maschinerie beider. Wikipedia beschreibt Continuous integration und Continuous delivery.

**Stufen als Kontrollen.** Jede Stufe ist eine Kontrolle mit einem Zweck:

| Stufe | Kontrolle, die sie bietet |
|---|---|
| Build | Der Change kompiliert und paketiert reproduzierbar |
| Unit- und Integrationstests | Bekanntes Verhalten funktioniert weiter |
| Statische Analyse und Sicherheitsscans | Gängige Schwächen und verwundbare Abhängigkeiten werden gefunden |
| Richtlinienprüfungen | Regeln wie Tagging, Verschlüsselung und genehmigte Regionen werden eingehalten |
| Prüfung durch Kolleginnen und Kollegen | Eine zweite Person hat den Change gelesen |
| Gestaffeltes Deployment und Verifizierung | Der Change funktioniert an einem sicheren Ort, bevor er breiter wirkt |

**Qualitätsschranken (Quality Gates).** Eine Bedingung, die ein Change erfüllen muss, um weiterzugehen, etwa bestandene Tests, keine kritischen Schwachstellen oder keine sinkende Abdeckung. Wikipedia beschreibt Quality control breiter. Schranken sollten wenige, klar und schnell sein. Eine Schranke, die oft übergangen oder ignoriert wird, bringt dem Team bei, Schranken zu ignorieren.

**Automatisierte Tests.** Unit-Tests, Integrationstests und Ende-zu-Ende-Tests laufen bei jeder Änderung. Wikipedia beschreibt Test automation, Unit testing und Integration testing. Der Wert liegt darin, wie sehr Sie ihnen vertrauen: Instabile Tests untergraben das Vertrauen. Siehe Thema 2.2 — Continuous Delivery.

**Sicherheitsscans.** Statische Analyse untersucht Code auf Schwächemuster; Software Composition Analysis untersucht die genutzten Bibliotheken auf bekannte Schwachstellen. Wikipedia beschreibt Static application security testing und Software composition analysis. Befunde brauchen Triage, denn viele sind risikoarm oder falsch.

**Richtlinien als Code (Policy as Code).** Regeln, als maschinenprüfbarer Code geschrieben und in der Pipeline angewendet, zum Beispiel „kein Speicher-Bucket darf öffentlich sein“. Sie machen Anforderungen testbar und Ergebnisse aufzeichenbar. Siehe Thema 6.3 — Infrastructure as Code und GitOps.

**Funktionstrennung.** Die Person, die einen Change schreibt, ist nicht die Einzige, die genehmigt. Wikipedia beschreibt Separation of duties. In einer Pipeline wird sie durchgesetzt, indem eine zweite prüfende Person verlangt und die Autorin daran gehindert wird, ihren eigenen Change zu genehmigen. Wo Vorschriften es verlangen, kann die Pipeline zeigen, wer was getan hat.

**Arten von Changes in einer Pipeline.** Standard-Changes, etwa eine routinemäßige Konfigurationsaktualisierung, können mit automatischen Prüfungen allein und ohne manuelle Genehmigung durchlaufen. Normale Changes mit höherem Risiko können in der Pipeline einen menschlichen Genehmigungsschritt ergänzen. Notfall-Changes nutzen dieselbe Pipeline in einem schnellen Modus, mit derselben Aufzeichnung. Siehe Thema 3.4 — Change Enablement.

**Belege.** Die Pipeline erfasst, was sich geändert hat (der Commit), wer geprüft hat, welche Prüfungen mit welchen Ergebnissen liefen, wer oder was ausgerollt hat und wann. Wikipedia beschreibt Audit trails. Belege sollten dort gespeichert sein, wo die Betroffenen sie nicht ändern können, und sich leicht nach Change abrufen lassen.

**Software-Lieferkette.** Die Pipeline baut aus Komponenten anderer, nutzt Werkzeuge anderer und erzeugt Artefakte, die ausgerollt werden. Wikipedia beschreibt die Software supply chain und die Idee der Provenienz (Provenance), einer überprüfbaren Aufzeichnung, woher ein Artefakt stammt. Praktiken umfassen das Festlegen von Versionen, das Signieren von Artefakten und das Führen einer Stückliste. Siehe Thema 4.2 — Software-Asset-Management.

**Progressiver Rollout und Verifizierung.** Nach dem Ausrollen kann die Pipeline Gesundheitsindikatoren prüfen und automatisch zurückrollen, wenn sie sich verschlechtern. Techniken wie gestaffelter Rollout und Feature-Flags sind in Thema 3.5 — Release- und Deployment-Management beschrieben.

**Pipeline-Sicherheit.** Die Pipeline kann in die Produktion ausrollen und ist daher ein wertvolles Ziel. Schützen Sie sie: Beschränken Sie, wer Pipeline-Definitionen ändern kann, nutzen Sie kurzlebige Zugangsdaten, isolieren Sie Build-Umgebungen und überwachen Sie auf ungewöhnliche Aktivität. Behandeln Sie Änderungen an der Pipeline so sorgfältig wie Änderungen an der Produktion.

**Umgehung und Ausnahmen.** Manche Changes passen nicht: eine Datenkorrektur, eine manuelle Handlung eines Lieferanten. Definieren Sie einen erfassten Ausnahmeweg mit Genehmigung, statt Menschen Umgehungen finden zu lassen. Überprüfen Sie Ausnahmen regelmäßig.

**Pipeline als Produkt.** Pipelines brauchen Verantwortliche, ein Backlog, Dokumentation und Nutzer, die Feedback geben. Langsame oder instabile Pipelines bringen Menschen bei, sie zu meiden.

**Wie die Blickwinkel passen.** Pipelines sind der Ort, an dem der agile und der Automatisierungs-Blickwinkel auf Governance treffen. KI kann Tests vorschlagen, Changes prüfen und Fehlschläge erklären, unter menschlicher Prüfung. Analytik nutzt Pipeline-Daten, um Lieferung und Change-Qualität zu zeigen.

## Bewährte Praktiken

1. **Gestalten Sie jede Stufe als benannte Kontrolle.** Schreiben Sie für jede Stufe auf, welches Risiko sie adressiert, wer sie verantwortet und was ein Scheitern bedeutet. Entfernen Sie Stufen, die kein reales Risiko adressieren.
2. **Halten Sie die Pipeline schnell.** Streben Sie für den häufigen Pfad ein Ergebnis in Minuten an. Führen Sie langsame Prüfungen parallel oder in späteren Stufen aus, mit klarem Feedback, damit Menschen keine Abkürzungen suchen.
3. **Machen Sie die Pipeline zum einzigen Weg.** Produktionsänderungen laufen durch sie, mit einem erfassten Ausnahmeweg für den Rest. Blockieren Sie direkten Zugriff, wo Sie können.
4. **Erzwingen Sie Funktionstrennung im Tooling.** Verlangen Sie eine qualifizierte zweite prüfende Person, hindern Sie Autorinnen daran, eigene Changes zu genehmigen, und erfassen Sie beide Identitäten.
5. **Nehmen Sie Fehlschläge ernst.** Ein fehlschlagender Test oder Scan stoppt den Change. Erlauben Sie keine routinemäßigen Übersteuerungen und verlangen Sie Genehmigung und einen festgehaltenen Grund, wenn eine nötig ist.
6. **Führen Sie Triage bei Sicherheitsbefunden durch.** Setzen Sie Schwellen nach Schweregrad und Exposition, beheben Sie die ernsten und verfolgen Sie den Rest. Stimmen Sie Regeln ab, um Rauschen zu verringern, damit Befunde gelesen werden.
7. **Erfassen Sie Belege automatisch.** Halten Sie Commit, Prüfende, Prüfungen, Ergebnisse, Artefakte und Deployment-Einzelheiten in einem Speicher fest, den die Autorin des Changes nicht bearbeiten kann. Verknüpfen Sie ihn mit dem Change-Datensatz.
8. **Sichern Sie die Pipeline selbst.** Beschränken Sie, wer Definitionen ändern kann, nutzen Sie kurzlebige Zugangsdaten mit minimalem Umfang, legen Sie Werkzeuge und Abhängigkeiten fest und signieren Sie Artefakte.
9. **Verifizieren Sie nach dem Ausrollen.** Prüfen Sie Gesundheitsindikatoren und rollen Sie zurück oder pausieren Sie, wenn sie sich verschlechtern. Berichten Sie Ergebnisse im selben Datensatz.
10. **Überprüfen Sie die Pipeline regelmäßig.** Schauen Sie, welche Prüfungen echte Probleme fangen, welche ignoriert werden, wie lange Läufe dauern und welche Ausnahmen auftreten. Verbessern und beschneiden Sie.

## Fragen für die Diskussion im Team

**Welche unserer Change-Kontrollen bietet die Pipeline heute, und welche hängen noch von einer Besprechung oder einem Formular ab?**
Listen Sie die Kontrollen auf. Rechnen Sie damit, dass einige manuell sind, die sich automatisieren ließen. Wählen Sie anschließend eine, die wir in die Pipeline verlegen.

**Was würde ein Auditor sehen, wenn er die Belege für einen Change des letzten Monats verlangte?**
Probieren Sie es. Rechnen Sie damit, mehrere Systeme zusammensuchen zu müssen. Vereinbaren Sie anschließend einen einzigen Datensatz je Change und einen Weg, ihn abzurufen.

**Wie oft übersteuern oder umgehen Menschen eine fehlschlagende Prüfung, und warum?**
Bitten Sie um Daten. Rechnen Sie mit mehr, als jemand sagt. Betrachten Sie anschließend die am meisten übersteuerte Prüfung, um sie zu beheben oder zu entfernen.

**Wer kann die Pipeline-Definition ändern, und wer prüft diese Änderung?**
Das prüft die Pipeline-Sicherheit. Rechnen Sie mit breitem Zugriff. Beschränken Sie anschließend den Zugriff und verlangen Sie Prüfung bei Pipeline-Änderungen.

**Welche Befunde unserer Scanner lesen wir, und welche ignorieren wir?**
Fragen Sie Engineers. Rechnen Sie mit „überwiegend ignorieren“. Stimmen Sie anschließend den Scanner auf Befunde ab, auf die Menschen reagieren.

**Wo könnte KI in der Pipeline helfen, und was muss eine menschliche Entscheidung bleiben?**
KI kann Tests vorschlagen, Fehlschläge zusammenfassen und Code prüfen. Die Genehmigung von Risiko und Ausnahmen sollte menschlich bleiben. Erproben Sie anschließend von KI vorgeschlagene Tests mit Prüfung.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Sozialversicherungsbehörde betreibt etwa 80 Anwendungen. Changes an ihrem System zur Leistungsberechnung erfordern ein wöchentliches Review-Gremium und ein langes Formular, und Releases erfolgen monatlich. Das Prüfungsamt stellt fest, dass das Gremium fast alles genehmigt und die Belege für einzelne Changes verstreut sind. Die Engineers der Behörde argumentieren, eine Pipeline könne es besser.

Der Delivery-Manager führt an einer Anwendung eine Pilotphase durch. Eine Pipeline baut die Anwendung, führt 1.800 Unit- und Integrationstests sowie eine Reihe von Regressionstests aus früheren Fehlern aus, scannt den Code und die Bibliotheken, prüft die Infrastrukturdefinition gegen Richtlinien und verlangt die Prüfung durch einen zweiten Engineer, der am System gearbeitet hat. Jeder Lauf schreibt einen Datensatz: Commit, Prüfende, Testergebnisse, Scan-Ergebnisse, Artefakt-Kennung und Deployment-Einzelheiten, gespeichert in einem Log, das Engineers nicht bearbeiten können.

Der Change-Prozess wird in drei Wege neu gestaltet. Routine-Changes, etwa Textaktualisierungen und kleine Konfigurationen, sind Standard: Besteht die Pipeline, wird der Change an eine Pilotgruppe und dann an alle ausgerollt, ohne Gremium. Changes an den Regeln der Leistungsberechnung sind normal und erfordern zusätzlich die Freigabe eines Fachanalysten, der eine Zusammenfassung in einfacher Sprache und Testergebnisse sieht. Notfallkorrekturen nutzen dieselbe Pipeline mit verkürztem Testsatz und nachträglicher Überprüfung.

Das Prüfungsamt prüft eine Stichprobe von 30 Changes und stellt fest, dass die Belege für alle vollständig sind und dass die Pipeline vier Changes wegen fehlschlagender Prüfungen blockiert hat. Es merkt außerdem an, dass zwei Engineers wiederholt gegenseitig ihre Changes genehmigt hatten, und bittet um eine Regel, dass Prüfende rotieren.

Was sich ändert: Releases werden wöchentlich, das Gremium konzentriert sich auf Regeländerungen, und ein Auditor kann die Belege für jeden Change binnen Minuten abrufen. Was schwierig bleibt: Die älteren Anwendungen können die automatisierten Tests nicht ausführen, sodass ihre Changes den alten Weg behalten; Scanner markieren viele risikoarme Bibliotheksprobleme, und Engineers haben begonnen, den Bericht zu ignorieren; und die Zugangsdaten der Pipeline selbst hatten weiter reichenden Zugriff als nötig. Der Manager ergänzt Scanner-Abstimmung, rotierende Prüfende und eine Überprüfung der Pipeline-Zugangsdaten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Verantworten Sie die Pipeline für Ihren Service: Halten Sie sie schnell, vertrauenswürdig und ehrlich darüber, was sie prüft. Schreiben Sie Tests, die echte Fehler fangen, beheben Sie instabile und behandeln Sie Befunde als Arbeit. Umgehen Sie sie nicht.

### Service- und Betriebsteams

Helfen Sie, die Prüfungen und die Gesundheitsindikatoren zu definieren, die die Pipeline nach dem Ausrollen nutzt. Nutzen Sie die Belege bei Incidents und Nachbetrachtungen. Halten Sie einen Ausnahmeweg für echte Notfälle bereit.

### Führung und Governance

Verlangen Sie Belege aus Pipelines, nicht mehr Besprechungen. Finanzieren Sie Tests, Scanning und Pipeline-Sicherheit. Überprüfen Sie Übersteuerungen und Ausnahmen. Verwechseln Sie grüne Pipelines nicht mit sicheren Systemen.

### Kunden und Nutzer

Sie profitieren von häufigen, sichereren Changes. Sie sollten über wesentliche Changes, die Sie betreffen, informiert werden und nach einem Release Probleme melden können.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kleine, häufige Changes, die jedes Mal dieselben Prüfungen bestehen, sind die praktische Form agiler Kontrolle. Verbessern Sie die Pipeline aus Incidents und Feedback. Vorsicht: Behandeln Sie die Pipeline nicht als fertig; Testlücken wachsen, wenn sich das System ändert.

### KI

KI kann Tests vorschlagen, Changes prüfen, Fehlschläge zusammenfassen und Befunde sichten, wobei eine Person für jede Entscheidung verantwortlich ist. Vorsicht: KI-generierte Tests können bestehen und wenig prüfen, und KI-Code-Review kann Sicherheitsprobleme übersehen; messen Sie entkommene Fehler und halten Sie menschliche Prüfung für Risiko. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Die Pipeline ist Automatisierung des Wegs in die Produktion, einschließlich Prüfungen und Aufzeichnungen. Schützen Sie sie als kritische Infrastruktur, mit eigener Identität, geringsten Rechten und Monitoring. Vorsicht: Automatische Genehmigung auf Grundlage schwacher Regeln gibt falsche Sicherheit; prüfen Sie, was jede Regel wirklich prüft. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Verfolgen Sie Durchlaufzeit, Deployment-Häufigkeit, Change-Fehlerrate, Zeit bis zur Wiederherstellung, Zahl der Übersteuerungen, entkommene Fehler und Befunde nach Schweregrad. Vorsicht: Delivery-Kennzahlen lassen sich leicht manipulieren und sollten Teams nicht ranken; verfolgen Sie entkommene Fehler, um die Prüfungen zu testen. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Grün heißt sicher.** Tests sind dünn und bestehen. Prüfen Sie, was jede Prüfung wirklich testet, und verfolgen Sie entkommene Fehler.
- **Routinemäßige Übersteuerungen.** Prüfungen werden umgangen. Machen Sie Übersteuerungen selten, genehmigt und überprüft.
- **Langsame Pipeline.** Menschen suchen Abkürzungen. Halten Sie den häufigen Pfad schnell.
- **Scanner-Rauschen.** Befunde werden ignoriert. Stimmen Sie ab und führen Sie Triage durch.
- **Verstreute Belege.** Audits dauern Wochen. Erfassen Sie automatisch an einem Ort.
- **Überprivilegierte Pipeline.** Eine Kompromittierung erreicht alles. Begrenzen Sie Zugriff und nutzen Sie kurzlebige Zugangsdaten.
- **Selbstgenehmigung.** Autorinnen genehmigen ihre eigene Arbeit. Erzwingen Sie Funktionstrennung im Tooling.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Kontrollen | Manuelle Prüfungen | Build und einige Tests | Tests, Scans, Richtlinien und Prüfung bei jeder Änderung | Wirksamkeit der Prüfungen gemessen | Kontrollen passen sich automatisch dem Risiko an, mit menschlicher Aufsicht |
| Belege | Formulare und E-Mail | Einige Logs | Automatischer Datensatz je Change | Belege auditiert und stichprobenartig geprüft | Belege laufend über Pipelines und Lieferanten |
| Pipeline-Sicherheit | Geteilte Zugangsdaten | Bewusstsein | Geringste Rechte, festgelegte Werkzeuge, geschützte Definitionen | Pipeline überwacht und getestet | Lieferkette durchgängig verifiziert |
| Fluss | Langsam, manuell | Schnellere Builds | Schneller häufiger Pfad mit Ausnahmeweg | Fluss und Fehler gemessen | Delivery über Services hinweg optimiert |

## Checkliste

- [ ] Jede Pipeline-Stufe hat einen benannten Zweck und eine verantwortliche Person.
- [ ] Der häufige Pfad läuft in Minuten.
- [ ] Produktionsänderungen laufen durch die Pipeline, mit einem erfassten Ausnahmeweg.
- [ ] Funktionstrennung wird im Tooling erzwungen.
- [ ] Fehlschlagende Prüfungen stoppen Changes, und Übersteuerungen sind genehmigt und überprüft.
- [ ] Belege werden automatisch in einem Speicher erfasst, den Autorinnen nicht bearbeiten können.
- [ ] Pipeline-Definitionen und Zugangsdaten sind geschützt und überprüft.
- [ ] Wir überprüfen die Wirksamkeit der Prüfungen, einschließlich entkommener Fehler.

## KI-Prompts

**Ordnen Sie Kontrollen der Pipeline zu.**

```text
Here is our list of change controls: [paste]. Here is a description of what our pipeline does: [paste].
For each control, say whether the pipeline description appears to provide it, partly provide it, or not mention it, quoting the words. Do not assume checks that are not described.
List what you are unsure of.
```

**Prüfen Sie einen fehlgeschlagenen Pipeline-Lauf.**

```text
Here is the log of a failed run: [paste, with secrets removed].
Summarize which stage failed, the error messages, and the three most likely areas to check, labeling each as a hypothesis. Do not suggest overriding the failure.
List what you are unsure of.
```

**Bereiten Sie eine Beleg-Stichprobe für ein Audit vor.**

```text
Here are the records for [number] changes: [paste summary with commit, reviewers, checks, results].
For each, check whether it shows a reviewer who is not the author, passing tests, scan results, and deployment time, and list gaps. Do not infer anything not in the records.
List what you are unsure of.
```

## KI-Skills

- [change-request](../../../../skills/change-request/SKILL.md): nutzen Sie ihn, um Changes und die Belege, die sie brauchen, zu beschreiben.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): nutzen Sie ihn, um das Testen früher in die Pipeline zu verlegen.
- [security-testing](../../../../skills/security-testing/SKILL.md): nutzen Sie ihn, um Sicherheitsprüfungen der Pipeline zu planen.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): nutzen Sie ihn, um Belege an Kontrollanforderungen zu prüfen.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): nutzen Sie ihn, um Tests zusammen mit Änderungen zu bauen.

## Wichtige Quellen

- Jez Humble und David Farley, *Continuous Delivery* (2010): die grundlegende Darstellung von Deployment-Pipelines.
- Nicole Forsgren, Jez Humble und Gene Kim, *Accelerate* (2018): Forschung zu Delivery-Praktiken und Leistung.
- DORA (dora.dev): laufende Forschung und Berichte.
- Wikipedia, „Continuous delivery“ und „Software supply chain“: Überblicke über die Praktik und ihre Risiken.

## Literaturverzeichnis

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
4. Unit testing — Wikipedia — https://en.wikipedia.org/wiki/Unit_testing
5. Integration testing — Wikipedia — https://en.wikipedia.org/wiki/Integration_testing
6. Static application security testing — Wikipedia — https://en.wikipedia.org/wiki/Static_application_security_testing
7. Software composition analysis — Wikipedia — https://en.wikipedia.org/wiki/Software_composition_analysis
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Code signing — Wikipedia — https://en.wikipedia.org/wiki/Code_signing
12. DORA research — DevOps Research and Assessment — https://dora.dev/research/
