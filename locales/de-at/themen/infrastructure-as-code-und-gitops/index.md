# Infrastructure as Code und GitOps

**Infrastructure as Code definiert Server, Netzwerke und Cloud-Ressourcen in geprüften Textdateien, die Werkzeuge anwenden; GitOps ergänzt die Regel, dass das Repository der einzige Weg ist, Live-Systeme zu ändern, und dass eine Steuerung die Wirklichkeit damit in Übereinstimmung hält, sodass die Versionsverwaltung zur Aufzeichnung der Änderung und zum Mittel der Wiederherstellung wird.**

## Warum das wichtig ist

Lange wurde Infrastruktur von Hand gebaut. Ein Engineer meldete sich an einem Server an, installierte Pakete, bearbeitete Konfiguration und zog weiter. Der Server wurde zu einem einzigartigen Objekt, dessen Geschichte im Gedächtnis des Engineers und in einigen Notizen lebte. Fiel er aus, wurde er aus dem Gedächtnis neu aufgebaut. Wurde ein zweiter Server gebraucht, war er eine Kopie, die sich in kleinen Dingen unterschied, die niemand auflisten konnte. Fehlersuche hieß herauszufinden, wie zwei „identische“ Systeme dazu kamen, sich verschieden zu verhalten.

Infrastructure as Code (IaC) ersetzt das durch Text. Der gewünschte Zustand der Infrastruktur ist in Dateien geschrieben, liegt in der Versionsverwaltung, wird wie Software geprüft und von Werkzeugen angewendet. Eine Umgebung neu aufzubauen wird zu einem Befehl. Eine zweite Kopie sind dieselben Dateien mit anderen Werten. Eine Änderung ist ein Pull Request mit einer prüfenden Person, einem Test und einer Aufzeichnung. Wikipedia beschreibt Infrastructure as code als Verwaltung und Bereitstellung von Infrastruktur durch maschinenlesbare Definitionsdateien statt interaktiver Konfiguration.

GitOps führt die Idee einen Schritt weiter. Das Repository wird zur einzigen Quelle der Wahrheit für den gewünschten Zustand erklärt, und Software beobachtet es und das Live-System und bringt das System in Übereinstimmung. Niemand ändert die Produktion von Hand; man ändert das Repository. Das gibt dem Service-Management viel: eine Audit-Spur für jede Änderung, schnelle Wiederherstellung, Konsistenz zwischen Umgebungen und ein natürliches Zuhause für die Change-Genehmigung. Es bringt auch neue Risiken, etwa Geheimnisse in Repositories und Fehler, die überall zugleich wirken. Dieses Thema erklärt die Ideen und wie man sie mit Sorgfalt einführt. Es baut auf Konfigurationsmanagement (Thema 4.4 — Konfigurationsmanagement), Continuous Delivery (Thema 2.2 — Continuous Delivery) und Change Enablement (Thema 3.4 — Change Enablement) auf und führt zu Pipelines (Thema 6.4 — Pipelines und automatisierte Changes).

## Kernkonzepte

**Infrastructure as Code (IaC).** Infrastruktur in Code oder Konfigurationsdateien zu definieren, die Werkzeuge lesen und anwenden. Sie umfasst Server, Netzwerke, Speicher, Datenbanken, Zugriffsregeln und Plattformeinstellungen. Wikipedia beschreibt den Ansatz und seine Geschichte. Die Dateien sind ebenso Dokumentation wie Mechanismus.

**Deklarativ und imperativ.** Eine deklarative Definition legt fest, was der Endzustand sein soll („es gibt drei Server dieser Art hinter diesem Load Balancer“); das Werkzeug findet heraus, wie man dorthin kommt. Eine imperative Definition legt die auszuführenden Schritte fest. Wikipedia beschreibt Declarative programming und Imperative programming. Deklarative Werkzeuge sind tendenziell leichter nachzuvollziehen und sicher zu wiederholen, und imperative Skripte bieten mehr Kontrolle bei ungewöhnlichen Aufgaben. Viele Teams nutzen beides.

**Werkzeuge.** Beispiele sind Terraform, das Cloud-Ressourcen bereitstellt, Ansible, das Systeme konfiguriert, und Kubernetes, das Container nach deklarierten Manifesten betreibt. Wikipedia beschreibt jedes. Die Werkzeuglandschaft ändert sich schnell; wählen Sie nach Passung, Unterstützung und vorhandenen Fähigkeiten und halten Sie Definitionen so portabel, wie es praktikabel ist.

**Gewünschter Zustand, tatsächlicher Zustand und Drift.** Der gewünschte Zustand ist, was der Code sagt; der tatsächliche ist, was läuft. Drift ist der Unterschied, meist aus manuellen Änderungen oder Fehlern. Drift zu erkennen und zu korrigieren ist ein Kernnutzen von IaC. Siehe Thema 4.4 — Konfigurationsmanagement.

**Idempotenz.** Dieselbe Definition wiederholt anzuwenden gibt dasselbe Ergebnis. Wikipedia beschreibt Idempotence. Sie macht es sicher, ein Apply erneut auszuführen, um Drift zu korrigieren.

**Zustandsdateien (State Files).** Manche Werkzeuge führen eine Aufzeichnung der Ressourcen, die sie steuern, und vergleichen sie mit der Definition. Gehen Sie sorgfältig damit um: Sie kann sensible Daten enthalten, darf nicht von Hand bearbeitet werden und braucht Sperren, damit nicht zwei Personen gleichzeitig anwenden.

**Unveränderliche Infrastruktur (Immutable Infrastructure).** Statt einen laufenden Server zu ändern, bauen Sie einen neuen aus einem bekannten Image und ersetzen den alten. Das vermeidet Drift und macht Rollback einfach: zurückschalten. Es funktioniert am besten mit virtuellen Maschinen und Containern, auf Wikipedia beschrieben, und gut gebauten Images.

**Versionsverwaltung und Prüfung.** Definitionen liegen in der Versionsverwaltung, etwa Git, das Wikipedia als verteiltes Versionsverwaltungssystem beschreibt. Änderungen laufen über Branches und Prüfungen, beschrieben als Pull Requests und Code Review. Die Historie zeigt, wer was wann und warum geändert hat, was Audit und Lernen stützt. Siehe Thema 3.4 — Change Enablement.

**GitOps.** Ein Betriebsansatz, in dem ein Git-Repository den gewünschten Zustand hält und ein automatisierter Agent das Live-System damit in Übereinstimmung hält. Änderungen erfolgen nur durch Änderung des Repositorys; der Agent holt und wendet sie an und nimmt manuelle Änderungen zurück. Wikipedia erwähnt GitOps unter DevOps. Das Pull-basierte Design bedeutet, dass das Produktionssystem seine eigene Konfiguration holt, sodass Zugangsdaten für die Produktion nicht im Build-System liegen müssen. Prüfen Sie die eigene Dokumentation des Projekts für Einzelheiten des Ansatzes.

**Abgleichschleifen (Reconciliation Loops).** Eine Steuerung, die wiederholt gewünschten und tatsächlichen Zustand vergleicht und handelt, um die Lücke zu schließen. Die Idee stammt aus der Regelungstechnik (Control theory), auf Wikipedia beschrieben, und liegt der Funktionsweise von Kubernetes und GitOps-Werkzeugen zugrunde. Schleifen sind widerstandsfähig und können auch eine schlechte Änderung schnell wiederholen.

**Umgebungen und Beförderung.** Dieselben Definitionen mit anderen Werten erzeugen Entwicklungs-, Test- und Produktionsumgebungen. Änderungen werden durch sie befördert. Umgebungen konsistent zu halten macht Tests aussagekräftiger. Siehe Thema 3.5 — Release- und Deployment-Management.

**Richtlinien als Code (Policy as Code).** Regeln dazu, was erlaubt ist, etwa „kein öffentlicher Speicher“ oder „alle Ressourcen müssen getaggt sein“, als Code geschrieben und vor dem Anwenden von Änderungen automatisch geprüft. Das legt Kontrollen dorthin, wo die Änderung erfolgt, und erzeugt Belege. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

**Geheimnisse.** Passwörter, Schlüssel und Tokens dürfen nicht im Klartext in Repositories liegen. Nutzen Sie einen Geheimnisspeicher (Secrets Manager) oder Verschlüsselung und geben Sie Automatisierung minimalen, kurzlebigen Zugriff. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Module und Wiederverwendung.** Gemeinsame, getestete Module für häufige Muster, etwa ein Standardnetzwerk oder eine Datenbank, beschleunigen die Arbeit und setzen Standards durch. Sie brauchen eine verantwortliche Person, Versionen und Release-Notes.

**Schadensradius (Blast Radius).** Ein Fehler in einer gemeinsamen Definition kann viele Systeme zugleich betreffen. Begrenzen Sie das, indem Sie den Zustand in kleinere Einheiten aufteilen, gestaffelt ausrollen und für gemeinsame Module Prüfung verlangen.

**Infrastruktur-Code testen.** Methoden umfassen Syntax- und Richtlinienprüfungen, Plan oder Vorschau der Änderungen vor dem Anwenden, Tests in Wegwerf-Umgebungen und Prüfungen nach dem Anwenden. Wikipedia beschreibt verwandte Ideen unter Test automation. Siehe Thema 2.2 — Continuous Delivery.

**Wie die Blickwinkel passen.** IaC und GitOps sind die technische Basis für agilen Betrieb: kleine, geprüfte, umkehrbare Änderungen. KI kann Definitionen entwerfen und Pläne erklären, unter Prüfung. Automatisierung wendet sie an. Analytik liest die Historie auf Änderungshäufigkeit und Fehler.

## Bewährte Praktiken

1. **Legen Sie jede Änderung in Code.** Machen Sie das Repository zum Weg für Änderungen an wichtigen Systemen und untersagen Sie manuelle Änderungen außer in definierten Notfällen. Erfassen Sie Notfalländerungen und führen Sie sie in den Code zurück.
2. **Nutzen Sie Prüfung und kleine Änderungen.** Verlangen Sie eine zweite Person zur Prüfung jeder Änderung und halten Sie Änderungen klein genug, um sie zu verstehen. Zeigen Sie die Vorschau dessen, was sich ändert.
3. **Bevorzugen Sie deklarative Definitionen und idempotente Schritte.** Sie sind leichter zu wiederholen und auf Drift zu prüfen. Nutzen Sie imperative Skripte für Aufgaben, die sie brauchen, mit Sorgfalt.
4. **Erkennen und korrigieren Sie Drift.** Vergleichen Sie tatsächlichen mit gewünschtem Zustand nach Plan oder laufend. Entscheiden Sie für jede Art von Drift, ob automatisch zurückgesetzt oder alarmiert wird.
5. **Halten Sie Geheimnisse aus dem Code.** Nutzen Sie einen Secrets Manager, verschlüsseln Sie, wo nötig, geben Sie Automatisierung kurzlebige Zugangsdaten und scannen Sie Repositories auf durchgesickerte Geheimnisse.
6. **Schützen Sie Zustand und Repository.** Beschränken Sie, wer Produktionsdefinitionen und Zustand ändern kann, erzwingen Sie Branch-Schutz und sichern Sie Repository und Zustand.
7. **Testen Sie vor dem Anwenden.** Führen Sie Richtlinienprüfungen, Vorschauen und Tests in Wegwerf-Umgebungen aus. Prüfen Sie den Plan auf unerwartete Löschungen.
8. **Begrenzen Sie den Schadensradius.** Teilen Sie Definitionen in Einheiten, die unabhängig ausfallen können, rollen Sie gestaffelt aus und schützen Sie kritische Ressourcen vor versehentlichem Löschen.
9. **Nutzen Sie getestete Module mit Verantwortlichen wieder.** Veröffentlichen Sie versionierte Module für Standardmuster, mit Dokumentation und Release-Notes, und legen Sie alte Versionen still.
10. **Planen Sie die Wiederherstellung.** Proben Sie den Neuaufbau einer Umgebung aus Code, einschließlich Datenwiederherstellung, und messen Sie die Zeit. Beziehen Sie Repository und Werkzeuge in Ihre Continuity-Pläne ein. Siehe Thema 3.12 — Service-Continuity-Management.

## Fragen für die Diskussion im Team

**Welche unserer Systeme könnten wir heute aus Code neu aufbauen, und welche nur aus dem Gedächtnis?**
Erstellen Sie eine Liste. Rechnen Sie damit, dass viele von einer Person abhängen. Wählen Sie anschließend ein System und definieren Sie es in Code.

**Wann hat zuletzt jemand die Produktion von Hand geändert, und wie haben wir es erfahren?**
Bitten Sie um Geschichten. Rechnen Sie damit, dass es niemand verfolgt. Ergänzen Sie anschließend Drift-Erkennung in einer Umgebung und vereinbaren Sie, was bei einem Unterschied geschieht.

**Wo könnte ein Geheimnis in einem Repository oder einer Zustandsdatei liegen?**
Suchen Sie gemeinsam. Rechnen Sie mit Überraschungen. Scannen Sie anschließend Repositories und überführen Sie die Funde in einen Secrets Manager.

**Was ist die größte Änderung, die ein einzelnes Apply vornehmen könnte, und wie würden wir sie begrenzen?**
Denken Sie an gemeinsame Module und monolithische Zustände. Rechnen Sie mit unbequemen Antworten. Teilen Sie anschließend einen großen Zustand in kleinere.

**Wie prüfen wir Infrastrukturänderungen, und worauf schaut die prüfende Person tatsächlich?**
Bitten Sie um eine jüngere Prüfung. Rechnen Sie mit einer schnellen Genehmigung. Vereinbaren Sie anschließend, was eine prüfende Person prüfen muss, etwa die Plan-Ausgabe und die Sicherheitswirkung.

**Wo könnte KI uns helfen, Infrastruktur-Code zu schreiben oder zu prüfen, und wie prüfen wir sie?**
KI kann Definitionen entwerfen und Pläne erklären. Sie kann auch unsichere Voreinstellungen oder falsche Ressourceneinstellungen erzeugen. Fragen Sie, wer prüft und welche Prüfungen laufen. Lassen Sie anschließend von KI entworfenen Code durch dieselben Richtlinienprüfungen laufen wie jeden anderen.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Digitalteam einer Nationalbibliothek betreibt einen Katalog-Suchservice in einer öffentlichen Cloud. Die Umgebungen wurden über mehrere Jahre von Hand gebaut. Eine Testumgebung unterscheidet sich von der Produktion in Dingen, die niemand auflisten kann, und ein jüngerer Ausfall wurde auf eine Sicherheitsgruppenänderung zurückgeführt, die bei einem früheren Incident von Hand vorgenommen und nie erfasst wurde.

Der Plattformleiter wählt, eine Umgebung als Pilotphase in Code zu definieren. Mit einem deklarativen Werkzeug beschreibt das Team Netzwerk, Rechenleistung, Datenbank und Zugriffsregeln der Testumgebung, importiert vorhandene Ressourcen und legt den Code in einem Repository mit Branch-Schutz und verpflichtender Prüfung ab. Eine Pipeline führt Richtlinienprüfungen aus, etwa kein öffentlicher Speicher und verpflichtende Tags, und zeigt bei jedem Pull Request den Plan. Geheimnisse wechseln in den Secrets Manager des Cloud-Anbieters.

Dann ergänzen sie Drift-Erkennung: Ein nächtlicher Job vergleicht den Code mit dem tatsächlichen Zustand der Cloud und postet Unterschiede in den Teamkanal. In der ersten Woche findet er elf manuelle Änderungen. Acht sind harmlos, zwei sind veraltete Testressourcen, und eine ist eine offene Firewall-Regel an einem Datenbankport. Sie beheben die Regel und löschen die Ressourcen.

Nach drei Monaten liegt auch die Produktion in Code, und eine GitOps-artige Steuerung in der Container-Plattform wendet genehmigte Änderungen aus dem Repository an. Ein Neuaufbau der Testumgebung von Grund auf dauert 40 Minuten. Das Team probt den Neuaufbau der Produktion in einem getrennten Konto, mit Datenwiederherstellung, an einem halben Tag.

Was sich ändert: Die Änderungshistorie liegt im Repository, Prüfungen sind echt, und die beiden Umgebungen stimmen überein. Was schwierig bleibt: Der ältere Datenbankserver wird vom Tooling nicht gut unterstützt und bleibt teils manuell; die Zustandsdatei enthielt einmal ein Klartext-Passwort aus einem früheren Import, das das Team rotieren musste; und ein Engineer wandte eine Änderung von einem Laptop mit anderer Werkzeugversion an, was unerwartete Unterschiede erzeugte. Der Leiter ergänzt eine festgelegte Werkzeugversion in der Pipeline, eine Regel, dass Anwendungen nur aus der Pipeline kommen, und einen Scan des Zustands auf Geheimnisse.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Definieren Sie die Infrastruktur Ihres Services im Code neben der Anwendung, prüfen Sie sie und testen Sie sie in Wegwerf-Umgebungen. Vermeiden Sie manuelle Änderungen. Nehmen Sie Tags, Verantwortung und Sicherheitseinstellungen in die Definition auf.

### Service- und Betriebsteams

Nutzen Sie das Repository als Aufzeichnung der Änderung und erkennen Sie Drift. Prüfen Sie Pläne sorgfältig, schützen Sie Zustand und Geheimnisse und proben Sie Neuaufbauten. Halten Sie Notfalländerungen selten und führen Sie sie in den Code zurück.

### Führung und Governance

Verlangen Sie Belege aus Repository und Pipeline statt aus Besprechungen. Finanzieren Sie Tooling, Schulung und Proben. Machen Sie deutlich, dass manuelle Produktionsänderungen Ausnahmen sind, die erfasst werden müssen.

### Kunden und Nutzer

Sie profitieren von Umgebungen, die sich gleich verhalten, und von schnellerer Wiederherstellung. Sie sollten weniger Überraschungen nach Changes sehen und klare Vorankündigung wesentlicher.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kleine, geprüfte, umkehrbare Infrastrukturänderungen mit schnellem Feedback sind die operative Form von Continuous Delivery. Bauen Sie die Definitionen schrittweise, beginnend mit der schmerzhaftesten Umgebung. Vorsicht: Eine Massenmigration aller Systeme auf einmal in Code ist riskant; gehen Sie eines nach dem anderen an.

### KI

KI kann Definitionen entwerfen, einen Plan erklären und Richtlinienregeln vorschlagen, wobei eine Person jede Änderung prüft. Benennen Sie für jede Nutzung eine verantwortliche Person. Vorsicht: Generierter Infrastruktur-Code kann standardmäßig unsicher sein oder Ressourcen löschen; wenden Sie dieselben Richtlinienprüfungen an und lesen Sie den Plan. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

IaC und GitOps sind Automatisierung der Infrastruktur selbst. Halten Sie Steuerungen und Pipelines mit minimalen Rechten, protokolliert und geschützt, denn sie können alles ändern. Vorsicht: Ein automatischer Abgleich kann einen Fehler überall erneut anwenden; staffeln Sie Rollouts und halten Sie einen Weg bereit, ihn anzuhalten. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Betrachten Sie Änderungshäufigkeit, Fehlerrate, Zeit zum Neuaufbau, Drift-Zahlen, Zeit bis zur Erkennung manueller Änderungen und Richtlinienverstöße. Vorsicht: Das Zählen von Commits belohnt Aktivität, und eine niedrige Drift-Zahl kann einen schwachen Detektor spiegeln; testen Sie die Erkennung mit einer bekannten Änderung. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Hybride Wirklichkeit.** Einige Änderungen im Code, einige von Hand. Drift wächst. Machen Sie Code zum einzigen Weg und erkennen Sie Drift.
- **Geheimnisse im Repository.** Zugangsdaten sickern durch. Nutzen Sie einen Secrets Manager und scannen Sie.
- **Riesiger gemeinsamer Zustand.** Eine Änderung betrifft alles. Teilen Sie in kleinere Einheiten.
- **Ungeprüfte Änderungen.** Fehler erreichen die Produktion. Verlangen Sie Prüfung und zeigen Sie den Plan.
- **Nicht festgelegte Werkzeuge und Module.** Das Verhalten ändert sich unerwartet. Legen Sie Versionen fest.
- **Nie neu aufgebaut.** Die Wiederherstellung scheitert, wenn sie gebraucht wird. Proben Sie einen Neuaufbau.
- **Die Pipeline als Superuser.** Eine kompromittierte Pipeline besitzt die Produktion. Begrenzen Sie Rechte und schützen Sie sie.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Abdeckung | Manuell | Einige Ressourcen im Code | Wichtigste Systeme im Code definiert | Abdeckung und Ausnahmen verfolgt | Gesamter Bestand als Code definiert und gesteuert |
| Kontrolle | Keine Prüfung | Prüfung durch Kolleginnen und Kollegen | Prüfung, Plan-Vorschau und Richtlinienprüfungen bei jeder Änderung | Drift erkannt und behandelt | Abgleich mit menschlicher Aufsicht über Umgebungen hinweg |
| Sicherheit | Geheimnisse im Code | Bewusstsein | Geheimnisse gesteuert und gescannt, Automatisierung mit minimalen Rechten | Befunde bis zum Abschluss verfolgt | Sicherheit und Richtlinien in gemeinsame Module eingebettet |
| Wiederherstellung | Neuaufbau aus dem Gedächtnis | Dokumentiert | Neuaufbau geprobt und gemessen | Wiederherstellungszeit gemessen und verbessert | Wiederherstellung über Umgebungen und Regionen automatisiert |

## Checkliste

- [ ] Wichtige Systeme sind in Code in der Versionsverwaltung definiert.
- [ ] Jede Änderung wird geprüft und zeigt eine Plan-Vorschau.
- [ ] Manuelle Produktionsänderungen sind untersagt, außer erfassten Notfällen.
- [ ] Drift wird nach Plan erkannt und nach einer Regel behandelt.
- [ ] Geheimnisse liegen in einem Secrets Manager, und Repositories und Zustand werden gescannt.
- [ ] Werkzeuge und Module sind festgelegt und haben Verantwortliche.
- [ ] Definitionen sind geteilt, um den Schadensradius zu begrenzen.
- [ ] Wir proben den Neuaufbau einer Umgebung und halten die Zeit fest.

## KI-Prompts

**Prüfen Sie eine Plan-Ausgabe.**

```text
Here is the plan output from an infrastructure change: [paste].
List resources to be created, changed, and destroyed, highlight any deletion or replacement of a data store or network component, and list questions a reviewer should ask. Do not approve or reject.
List what you are unsure of.
```

**Entwerfen Sie Richtlinienregeln aus Anforderungen.**

```text
Our requirements: [list, such as no public storage, tags required, encryption at rest]. Our tool: [name, or "undecided"].
Write each requirement as a plain-language rule with one example of a violation, and describe how to test the rule. Do not write code unless I name the tool.
List what you are unsure of.
```

**Fassen Sie Drift-Befunde zusammen.**

```text
Here is a drift report listing differences between code and the running environment: [paste].
Group the differences by type (extra resource, changed setting, missing resource), flag any that touch access, network, or encryption, and write one question per group for the team. Do not recommend fixes.
List what you are unsure of.
```

## KI-Skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): nutzen Sie ihn, um Code-Definitionen mit den Services zu verknüpfen, die sie unterstützen.
- [change-request](../../../../skills/change-request/SKILL.md): nutzen Sie ihn, um Infrastrukturänderungen für die Prüfung klar zu beschreiben.
- [security-testing](../../../../skills/security-testing/SKILL.md): nutzen Sie ihn, um Prüfungen für Infrastruktur-Code und Geheimnisse zu planen.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): nutzen Sie ihn, um den Neuaufbau aus Code zu proben.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um verbleibende manuelle Notfallverfahren zu dokumentieren.

## Wichtige Quellen

- Kief Morris, *Infrastructure as Code* (2. Auflage, 2020): ein praktischer Leitfaden, Infrastruktur zu definieren und zu steuern.
- Jez Humble und David Farley, *Continuous Delivery* (2010): Grundlagen für wiederholbare Umgebungen und Pipelines.
- Die Dokumentation der Werkzeuge, die Sie nutzen, etwa Terraform, Ansible und Kubernetes: die maßgebliche Quelle zu ihrem Verhalten.
- Wikipedia, „Infrastructure as code“: ein Überblick über den Ansatz.

## Literaturverzeichnis

1. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
2. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
3. Declarative programming — Wikipedia — https://en.wikipedia.org/wiki/Declarative_programming
4. Imperative programming — Wikipedia — https://en.wikipedia.org/wiki/Imperative_programming
5. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
6. Git — Wikipedia — https://en.wikipedia.org/wiki/Git
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
9. Containerization (computing) — Wikipedia — https://en.wikipedia.org/wiki/Containerization_(computing)
10. Control theory — Wikipedia — https://en.wikipedia.org/wiki/Control_theory
11. Kubernetes — Wikipedia — https://en.wikipedia.org/wiki/Kubernetes
12. Terraform (software) — Wikipedia — https://en.wikipedia.org/wiki/Terraform_(software)
