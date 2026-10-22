# Konfigurationsmanagement

**Konfigurationsmanagement hält ein korrektes, nutzbares Bild der Komponenten bereit, aus denen Ihre Services bestehen, und wie sie zusammenhängen, damit Sie die Auswirkung eines Changes oder Ausfalls beurteilen können. Moderne Teams gewinnen dieses Bild aus Infrastructure as Code und Discovery, mit einer Konfigurationsdatenbank als Sicht darauf und nicht als von Hand geführter Liste.**

## Warum das wichtig ist

Wenn um 2 Uhr nachts ein Datenbankserver ausfällt, lautet die erste Frage, was davon abhängt. Wenn jemand eine Änderung an einer Netzwerkregel vorschlägt, lautet die erste Frage, was sie kaputtmachen könnte. Wenn ein Auditor fragt, wie ein Service aufgebaut ist, lautet die erste Frage, wo die Wahrheit aufgeschrieben ist. Alle drei brauchen dasselbe: ein aktuelles, vertrauenswürdiges Bild dessen, was existiert und wie die Teile zusammenhängen.

Viele Organisationen versuchen, es mit einer Configuration Management Database (CMDB) zu liefern: einer Datenbank von Konfigurationselementen und Beziehungen. Viele stellen auch fest, dass sie zum Friedhof veralteter Datensätze wird, von Hand geführt und von niemandem benutzt. Die Datensätze sind binnen Wochen veraltet, weil sich der reale Bestand schneller ändert, als irgendjemand ein Formular aktualisieren kann. Die CMDB wird zu einem Compliance-Artefakt, nicht zu einem Werkzeug.

Zwei Ideen retten die Praktik. Erstens: die Definition der Infrastruktur als Code in der Versionsverwaltung zu behandeln, sodass die Quelle der Wahrheit das ist, was das System erzeugt, und nicht eine Beschreibung davon. Zweitens: das Bild automatisch aus Discovery und aus diesem Code zu befüllen und es für konkrete Fragen zu nutzen: Auswirkung eines Changes, Umfang eines Incidents, Verantwortung. Dieses Thema erklärt die Praktik und die Fallstricke. Es verbindet sich mit Asset-Management (Thema 4.1 — Asset-Management), Change Enablement (Thema 3.4 — Change Enablement), Infrastructure as Code (Thema 6.3 — Infrastructure as Code und GitOps) und dem Service-Katalog (Thema 3.8 — Service-Katalog-Management).

## Kernkonzepte

**Konfigurationsmanagement.** Im Sinne von ITIL die Praktik sicherzustellen, dass korrekte und verlässliche Informationen über die Konfiguration von Services und der Konfigurationselemente, die sie unterstützen, verfügbar sind, wann und wo sie gebraucht werden. In der Technik bezeichnet „Konfigurationsmanagement“ auch die Disziplin, Systeme in einem bekannten, konsistenten Zustand zu halten. Wikipedia beschreibt Configuration management im weiteren Sinn. Dieser Leitfaden verwendet beide Bedeutungen und sagt, welche.

**Konfigurationselement (Configuration Item, CI).** Jede Komponente, die gesteuert werden muss, um einen IT-Service zu erbringen. Wikipedia beschreibt Configuration items. Beispiele sind Server, Anwendungen, Datenbanken, Netzwerkgeräte, Cloud-Ressourcen, Zertifikate und manchmal Dokumente und Verträge. Jedes CI hat Attribute (Typ, Version, verantwortliche Person, Status) und Beziehungen zu anderen CIs.

**Konfigurationsmanagementdatenbank (CMDB).** Ein Repository von CIs, ihren Attributen und ihren Beziehungen. Wikipedia beschreibt die CMDB. Eine CMDB ist keine Tabelle von Assets: Ihr Wert liegt in den Beziehungen, die Fragen erlauben wie „Welche Services nutzen diese Datenbank?“.

**Konfigurationsmanagementsystem (CMS).** Die weitere Menge an Werkzeugen und Daten, die eine Sicht auf die Konfiguration über Quellen hinweg geben. ITIL beschreibt ein CMS, das Daten aus mehreren Stellen föderiert, nicht eine einzelne Datenbank. Wikipedia beschreibt Federated database systems als eine Möglichkeit, Quellen zu kombinieren, ohne sie zu kopieren.

**Service-Karte (Service Map).** Eine Sicht, die zeigt, wie ein Service von seinen Komponenten abhängt. Eine technische Service-Karte verknüpft Anwendungen, Datenbanken, Server und Netzwerke. Eine geschäftliche Sicht verknüpft Services mit den Menschen und Prozessen, die sie unterstützen. Karten werden bei Incidents und Changes genutzt. Siehe Thema 3.8 — Service-Katalog-Management.

**Basislinien und Drift.** Eine Basislinie ist eine bekannte, genehmigte Konfiguration zu einem Zeitpunkt. Drift ist der Unterschied zwischen der Basislinie und dem, was tatsächlich läuft, oft durch manuelle Änderungen. Wikipedia beschreibt Baselines in der Konfigurationsverwaltung. Drift zu erkennen und zu korrigieren hält Systeme konsistent und sicher.

**Infrastructure as Code (IaC).** Infrastruktur, etwa Server, Netzwerke und Cloud-Ressourcen, in Textdateien zu definieren, die in der Versionsverwaltung liegen und von Werkzeugen angewendet werden. Wikipedia beschreibt Infrastructure as code. Werkzeuge wie Terraform, Ansible und Kubernetes-Manifeste drücken den gewünschten Zustand aus, und das Werkzeug bringt die Wirklichkeit damit in Übereinstimmung. Der Code ist zugleich Dokumentation und Mechanismus. Siehe Thema 6.3 — Infrastructure as Code und GitOps.

**Idempotenz und gewünschter Zustand.** Gute Konfigurationswerkzeuge lassen sich wiederholt mit demselben Ergebnis ausführen: Sie tun nur, was nötig ist, um den beschriebenen Zustand zu erreichen. Wikipedia beschreibt Idempotence. Das macht es sicher, Konfiguration erneut anzuwenden, um Drift zu erkennen und zu beheben.

**Quelle der Wahrheit.** Der Ort, an dem eine Tatsache maßgeblich ist. Für die gewünschte Konfiguration ist es das Code-Repository; für das, was tatsächlich läuft, ist es Discovery oder der eigene Zustand der Plattform; für Verantwortung kann es der Katalog oder ein Team-Register sein. Entscheiden Sie die Quelle für jede Art von Tatsache und vermeiden Sie, dieselbe Tatsache von Hand an zwei Orten zu führen. Wikipedia beschreibt die Idee der Single source of truth.

**Discovery.** Werkzeuge, die Netzwerke, Cloud-Konten und Plattformen absuchen, um zu finden, was existiert und wie es verbunden ist. Discovery findet, was niemand erfasst hat, erzeugt aber viele Einzelheiten und etwas Rauschen und braucht Regeln, welche Elemente behalten und wie sie benannt werden.

**Beziehungen und Auswirkungsanalyse.** Zu wissen, dass Anwendung A Datenbank B nutzt, lässt Sie fragen, was betroffen ist, wenn B sich ändert oder ausfällt. Wikipedia beschreibt Change impact analysis und Dependency graphs. Graphdatenbanken (Graph databases), auf Wikipedia beschrieben, sind eine Möglichkeit, Beziehungen zu speichern und abzufragen. Eine Auswirkungsanalyse ist nur so gut wie die erfassten Beziehungen.

**Datenqualität.** Genauigkeit, Vollständigkeit und Aktualität bestimmen den Wert der Daten. Definieren Sie, welche Attribute zählen und wie frisch sie sein müssen. Eine kleinere Menge genauer Daten ist nützlicher als eine große Menge unzuverlässiger. Siehe Thema 7.2 — Datengrundlagen und Data Governance.

**Umfang.** Versuchen Sie nicht, alles zu erfassen. Wählen Sie die CIs und Beziehungen, die Sie für Ihre Entscheidungen brauchen: kritische Services, ihre Hauptkomponenten und ihre Verantwortlichen. Erweitern Sie, wenn Wert gezeigt wird.

**Verantwortung.** Jedes CI oder jede Gruppe hat eine verantwortliche Person, die dafür und für die Daten darüber rechenschaftspflichtig ist. Ohne Verantwortung verfallen Daten.

**Container und Cloud.** Moderne Plattformen erzeugen und vernichten ständig Ressourcen. Ein Datensatz eines einzelnen Containers ist eine Stunde später bedeutungslos. Verfolgen Sie auf der Ebene, die zählt, etwa Service und Deployment, und nutzen Sie Labels und Tags, um Ressourcen mit Verantwortlichen und Services zu verknüpfen.

**Wie die Blickwinkel passen.** Konfigurationsmanagement unterstützt Agilität und Continuous Delivery, indem es Umgebungen wiederholbar macht. KI kann helfen, Beziehungen zu entdecken, fehlende Verknüpfungen vorzuschlagen und Fragen zur Auswirkung zu beantworten, unter Prüfung. Automatisierung wendet Konfiguration an und hält das Bild aktuell. Analytik nutzt die Daten, um Risiken und Kosten zu finden.

## Bewährte Praktiken

1. **Beginnen Sie mit den Fragen, die Sie beantworten müssen.** Listen Sie die Entscheidungen auf, die die Daten stützen sollen, etwa Auswirkung von Changes, Umfang von Incidents und Verantwortung. Erfassen Sie nur, was sie beantwortet.
2. **Behandeln Sie Code als Quelle der Wahrheit für den gewünschten Zustand.** Definieren Sie Infrastruktur und Konfiguration in der Versionsverwaltung, prüfen Sie Änderungen und wenden Sie sie mit Werkzeugen an. Vermeiden Sie manuelle Änderungen an Live-Systemen.
3. **Befüllen Sie das Bild automatisch.** Nutzen Sie Discovery- und Plattformdaten, um die CMDB oder Service-Karte zu speisen, und gleichen Sie mit dem Code ab. Beschränken Sie manuelle Eingabe auf Tatsachen, die sich nicht erkennen lassen, etwa Verantwortung.
4. **Definieren Sie die Quelle jeder Tatsache.** Entscheiden Sie für jedes Attribut, wo es maßgeblich ist und wo Kopien erlaubt sind. Zeigen Sie die Quelle und den Zeitpunkt der letzten Aktualisierung.
5. **Kartieren Sie zuerst kritische Services.** Erstellen Sie Service-Karten für die wichtigsten Services, einschließlich Abhängigkeiten von Lieferanten und gemeinsamen Plattformen. Testen Sie sie an einem realen Incident oder Change.
6. **Erkennen und beheben Sie Drift.** Vergleichen Sie den tatsächlichen mit dem gewünschten Zustand nach Plan und alarmieren Sie bei Unterschieden. Behandeln Sie wiederholte Drift als Signal über Prozess oder Zugriff.
7. **Benennen Sie eine verantwortliche Person für jeden Eintrag und für die Datenqualität.** Zeigen Sie Verantwortliche in den Datensätzen. Überprüfen Sie veraltete Datensätze und Waisen regelmäßig.
8. **Verknüpfen Sie Konfiguration mit Change- und Incident-Datensätzen.** Machen Sie es leicht, von einem Change aus zu sehen, welche CIs er berührt, und von einem Incident aus, welche CIs beteiligt sind. Prüfen Sie, dass die Verknüpfungen genutzt werden.
9. **Nutzen Sie Labels und Tags konsistent.** Verlangen Sie in Cloud-Umgebungen bei der Erstellung Tags für verantwortliche Person, Service und Umgebung und erzwingen Sie sie in der Pipeline.
10. **Messen Sie die Nützlichkeit.** Verfolgen Sie, wie oft die Daten bei Changes und Incidents genutzt werden und wie oft sie falsch waren. Beheben Sie die Ursachen und legen Sie Daten still, die niemand nutzt.

## Fragen für die Diskussion im Team

**Welche Entscheidungen sollen Konfigurationsdaten stützen, und tun sie es heute?**
Beginnen Sie bei der Nutzung. Rechnen Sie mit Antworten wie Auswirkung von Changes und Incident-Umfang. Probieren Sie es an einem jüngeren Change. Wählen Sie anschließend eine Nutzung und testen Sie die Daten daran.

**Wo steht die wahre Beschreibung unserer Infrastruktur: im Code, in einer Datenbank, in den Köpfen der Menschen?**
Fragen Sie nach der Quelle der Wahrheit für drei Systeme. Rechnen Sie mit mehreren Antworten. Wählen Sie anschließend ein System und verlegen Sie seine Definition in die Versionsverwaltung.

**Wann hat uns die CMDB zuletzt in die Irre geführt, und warum?**
Bitten Sie um einen realen Fall. Rechnen Sie mit veralteten oder fehlenden Beziehungen. Suchen Sie die Ursache, etwa manuelle Eingabe. Wählen Sie anschließend eine Datenquelle, die wir automatisieren.

**Wie erfahren wir, wenn jemand ein Live-System von Hand ändert?**
Das prüft die Drift-Erkennung. Rechnen Sie mit „gar nicht“. Vereinbaren Sie anschließend einen Scan an einem System und eine Regel, was danach geschieht.

**Wer verantwortet jedes unserer kritischen Konfigurationselemente, und wie fänden wir die verantwortliche Person um 3 Uhr nachts?**
Fragen Sie, wo Verantwortung erfasst ist. Probieren Sie es mit einigen Elementen. Ergänzen Sie anschließend Tags für Verantwortliche und prüfen Sie sie.

**Wie könnte KI helfen, unser Konfigurationsbild korrekt zu halten, und was würden wir von Hand prüfen?**
KI kann Beziehungen vorschlagen und Auffälligkeiten erkennen. Sie kann auch Verknüpfungen erfinden. Fragen Sie, wer die Nutzung verantwortet und wie Fehler gefunden werden. Vergleichen Sie anschließend von KI vorgeschlagene Beziehungen mit einer manuell verifizierten Karte für einen Service.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Digitalteam einer nationalen Bahn betreibt eine Ticketing-Plattform aus etwa 60 Services bei zwei Cloud-Anbietern und einem alten eigenen Rechenzentrum. Die CMDB enthält 40.000 Datensätze, meist von Hand eingetragen, und der Betrieb sagt, sie sei etwa zu einem Drittel falsch. Bei einem jüngeren Ausfall stoppte eine ausgefallene Nachrichtenwarteschlange den Ticketverkauf; niemand wusste, dass auch das Treueprogramm sie nutzte, bis Kunden sich beschwerten.

Der Plattformleiter setzt ein engeres Ziel: Für die zehn kritischsten Services muss die Service-Karte so korrekt sein, dass sie binnen fünf Minuten „Was ist betroffen, wenn diese Komponente ausfällt?“ beantworten kann. Das Team definiert jeden der zehn Services im Code, mit Verantwortlichen und Abhängigkeiten als Tags in den Definitionen. Ein nächtlicher Job liest die Cloud-Plattform und das Code-Repository, baut die Karte und markiert Unterschiede zwischen beiden. Das Rechenzentrum wird durch Discovery abgedeckt, und seine Ausgabe wird denselben Service-Namen zugeordnet, mit manueller Prüfung neuer Elemente.

Binnen eines Quartals wird der Karte für die zehn Services vertraut. Beim nächsten Incident zeigt eine ausfallende Datenbank im Zahlungsservice die fünf Services, die daraus lesen, und das Team benachrichtigt ihre Verantwortlichen binnen Minuten. Ein Drift-Bericht findet 14 manuelle Änderungen in der Produktion, von denen drei Sicherheitsgruppenregeln waren, die bei einem alten Incident geöffnet und nie geschlossen wurden.

Was sich ändert: Incidents und Changes beginnen nun mit einer Karte, und die alte CMDB wird für diese Services stillgelegt. Was schwierig bleibt: Die anderen 50 Services sind noch nicht abgedeckt, und die Teams, die sie verantworten, sehen wenig Grund für die Arbeit; die Discovery des Rechenzentrums erzeugt weiter Rauschen; und manche Abhängigkeiten, etwa die API eines Lieferanten, lassen sich nicht erkennen und werden von Hand eingetragen. Der Plattformleiter wählt die nächsten zehn Services nach Incident-Verlauf und verhandelt Zeit mit ihren Verantwortlichen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Definieren Sie Ihre Infrastruktur und Konfiguration im Code, versehen Sie Ressourcen mit Tags für Verantwortliche und Services und vermeiden Sie manuelle Änderungen an Live-Systemen. Halten Sie Abhängigkeitsinformationen als Teil Ihres Designs aktuell.

### Service- und Betriebsteams

Nutzen Sie die Karte bei Incidents und Changes und melden Sie, wo sie falsch ist. Erkennen Sie Drift, schließen Sie vorläufige Änderungen und halten Sie die Verantwortungsdaten aktuell.

### Führung und Governance

Verlangen Sie Belege, dass die Daten genutzt werden und korrekt sind, nicht eine Zahl von Datensätzen. Finanzieren Sie die Automatisierung und die Disziplin bei der Verantwortung. Stützen Sie die Regel, dass Live-Änderungen über Code laufen.

### Kunden und Nutzer

Sie profitieren, wenn Anbieter wissen, was wovon abhängt: schnellere Diagnose und weniger Überraschungen durch Changes. Fragen Sie, ob die Services, auf die Sie sich verlassen, Verantwortliche und Auswirkungskarten haben.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bauen Sie das Bild in kleinen Schritten auf, beginnend mit den kritischsten Services, und verbessern Sie es mit denen, die es nutzen. Überprüfen Sie seine Nützlichkeit nach Incidents. Vorsicht: Ein CMDB-Projekt im großen Wurf wiederholt alte Fehler; beginnen Sie mit Fragen und einigen Services.

### KI

KI kann Beziehungen aus Logs und Traces vorschlagen, Fragen zur Auswirkung in natürlicher Sprache beantworten und Ausreißer finden, mit einer verantwortlichen Person und menschlicher Verifizierung. Vorsicht: KI kann Abhängigkeiten ableiten, die es nicht gibt, oder echte übersehen; validieren Sie an bekannten Incidents. Siehe Thema 5.2 — AIOps.

### Automatisierung

Automatisieren Sie Discovery, Abgleich, Drift-Erkennung und die Durchsetzung von Tags, mit Protokollen und Prüfung von Ausnahmen. Vorsicht: Ein automatischer Import kann die Datenbank mit Datensätzen geringen Werts fluten; filtern Sie danach, was Entscheidungen stützt. Siehe Thema 6.3 — Infrastructure as Code und GitOps.

### Analytik

Betrachten Sie die Vollständigkeit der Daten für kritische Services, bei Incidents festgestellte Genauigkeit, Drift-Zahlen, Zeit bis zum Finden der verantwortlichen Person und die Nutzung der Daten bei Changes. Vorsicht: Das Zählen von Datensätzen oder gefüllten Feldern fördert Menge vor Genauigkeit; messen Sie, wie oft die Daten geholfen und wie oft sie in die Irre geführt haben. Siehe das Buch *Service Management Metrics* und Thema 7.2 — Datengrundlagen und Data Governance.

## Häufige Fehlermuster

- **Eine von Hand gefüllte CMDB.** Daten verfallen schnell. Befüllen Sie durch Discovery und Code.
- **Alles erfassen.** Rauschen verdeckt den Wert. Beschränken Sie den Umfang auf Entscheidungen.
- **Zwei Quellen für dieselbe Tatsache.** Sie widersprechen sich. Bestimmen Sie eine Quelle.
- **Keine Verantwortung.** Niemand korrigiert Fehler. Weisen Sie Verantwortliche zu.
- **Manuelle Änderungen an Live-Systemen.** Drift wächst. Ändern Sie über Code und erkennen Sie Drift.
- **Beziehungen fehlen.** Die Auswirkungsanalyse scheitert. Kartieren Sie zuerst kritische Services.
- **Kurzlebige Ressourcen verfolgen.** Datensätze sind sofort veraltet. Verfolgen Sie auf Service-Ebene, mit Tags.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Umfang | Unklar | Wichtigste Server aufgelistet | Kritische Services und Abhängigkeiten kartiert | Umfang nach Wert und Incidents erweitert | Breite Abdeckung über Bestand und Lieferanten |
| Quelle der Wahrheit | Tabellen und Gedächtnis | Etwas Infrastruktur im Code | Gewünschter Zustand im Code, tatsächlicher Zustand per Discovery | Abgleich automatisiert und überwacht | Einzelne koordinierte Sicht, gespeist aus Code, Discovery und Plattformen |
| Datenqualität | Unbekannt | Stichproben | Definierte Attribute und Frische | Genauigkeit bei Incidents und Changes gemessen | Qualität laufend mit menschlicher Prüfung gesichert |
| Nutzung | Selten genutzt | Bei einigen Incidents genutzt | Routinemäßig bei Changes und Incidents genutzt | Nutzung und Wert verfolgt | Daten steuern Risiko, Kosten und Planung über Services hinweg |

## Checkliste

- [ ] Wir haben die Fragen aufgelistet, die unsere Konfigurationsdaten beantworten müssen.
- [ ] Der gewünschte Zustand wichtiger Systeme liegt in der Versionsverwaltung.
- [ ] Discovery speist unsere Service-Karten und wird mit dem Code abgeglichen.
- [ ] Jede Tatsache hat eine definierte Quelle der Wahrheit.
- [ ] Kritische Services haben kartierte Abhängigkeiten, an realen Ereignissen getestet.
- [ ] Wir erkennen und korrigieren Konfigurationsdrift.
- [ ] Jedes Konfigurationselement oder jede Gruppe hat eine verantwortliche Person.
- [ ] Wir messen, wie oft die Daten helfen und wie oft sie in die Irre führen.

## KI-Prompts

**Finden Sie fehlende Abhängigkeiten aus einem Incident.**

```text
Here is the timeline of an incident, with the services that were affected: [paste]. Here is our service map for the failing component: [paste].
List affected services that the map does not show as dependent on the failing component, and for each give a question to verify the link. Do not infer dependencies without evidence in the timeline.
List what you are unsure of.
```

**Vergleichen Sie gewünschten und tatsächlichen Zustand.**

```text
Here is the desired configuration from our code: [paste]. Here is what discovery found running: [paste].
List differences by type (missing, extra, changed), and for each one a question about why it differs. Do not recommend fixes.
List what you are unsure of.
```

**Entwerfen Sie Regeln für Tags zur Verantwortung.**

```text
Our cloud resources are used by these teams and services: [list]. Tags we want on every resource: [list].
Draft a tagging standard of under one page with rules, allowed values, and how to enforce it in the pipeline. Do not name specific tools unless I list them.
List what you are unsure of.
```

## KI-Skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): nutzen Sie ihn, um Konfigurationsdatensätze und Beziehungen zu gestalten und zu pflegen.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Abhängigkeiten in einem Prozess oder System zu verfolgen.
- [mermaid-diagram](../../../../skills/mermaid-diagram/SKILL.md): nutzen Sie ihn, um Service-Karten als Text zu zeichnen.
- [data-quality](../../../../skills/data-quality/SKILL.md): nutzen Sie ihn, um die Qualität von Konfigurationsdaten zu definieren und zu prüfen.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Service-Konfigurationsmanagement durch den Eigentümer.
- Kief Morris, *Infrastructure as Code* (2. Auflage, 2020): ein praktischer Leitfaden, Infrastruktur im Code zu definieren und zu steuern.
- Wikipedia, „Configuration management“ und „Configuration management database“: Überblicke über die Ideen.
- Wikipedia, „Infrastructure as code“: der ingenieurmäßige Ansatz zum gewünschten Zustand.

## Literaturverzeichnis

1. Configuration management — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management
2. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
3. Configuration item — Wikipedia — https://en.wikipedia.org/wiki/Configuration_item
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Baseline (configuration management) — Wikipedia — https://en.wikipedia.org/wiki/Baseline_(configuration_management)
6. Idempotence — Wikipedia — https://en.wikipedia.org/wiki/Idempotence
7. Single source of truth — Wikipedia — https://en.wikipedia.org/wiki/Single_source_of_truth
8. Change impact analysis — Wikipedia — https://en.wikipedia.org/wiki/Change_impact_analysis
9. Graph database — Wikipedia — https://en.wikipedia.org/wiki/Graph_database
10. Federated database system — Wikipedia — https://en.wikipedia.org/wiki/Federated_database_system
11. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
