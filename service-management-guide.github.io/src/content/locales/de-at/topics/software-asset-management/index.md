# Software-Asset-Management

**Software-Asset-Management stellt sicher, dass eine Organisation die Software hat, die sie braucht, nutzt, wofür sie zahlt, die Lizenzbedingungen einhält und weiß, was in ihrer eigenen Software steckt. Es umfasst heute auch Abonnements, Open-Source-Komponenten und die Bedingungen von KI-Modellen und -Services.**

## Warum das wichtig ist

Software ist in vielen Organisationen die größte und am wenigsten sichtbare Menge an Assets. Ein Laptop ist ein physisches Ding, das man zählen kann. Eine Softwareberechtigung ist ein Nutzungsrecht, durch einen Vertrag definiert, das von Nutzern, Geräten, Prozessoren oder Verbrauch abhängen kann und sich ändert, wenn sich die Infrastruktur ändert. Niemand kann sie durch bloßes Hinsehen erkennen.

Das Ergebnis sind zwei entgegengesetzte Risiken. Unterlizenzierung setzt die Organisation Audits, Vertragsstrafen und manchmal rechtlichen Schritten aus. Überlizenzierung bedeutet, für Software zu zahlen, die niemand nutzt, oft Shelfware genannt. Wikipedia beschreibt Shelfware als Software, die gekauft, aber nie genutzt wurde. Studien von Branchenanalysten berichten oft von großen Anteilen der Softwareausgaben als Verschwendung, wobei die Zahlen schwanken und mit Vorsicht zu behandeln sind. Beide Risiken werden durch dieselbe Disziplin verringert: wissen, was man hat, wofür man es nutzen darf und was man tatsächlich nutzt.

Das Bild hat sich gewandelt. Viel Software ist heute abonnementbasiert, wird von Teams per Karte gekauft und vom Anbieter aktualisiert. Open-Source-Komponenten stecken in fast jedem Produkt, jede mit Lizenzbedingungen, die Pflichten mit sich bringen. Und KI-Modelle und -Services kommen mit Bedingungen zu Daten, Ergebnissen und zulässiger Nutzung, die vielen Käufern neu sind. Dieses Thema behandelt all das. Es gibt keine Rechtsberatung; die Auslegung von Lizenzen braucht eine qualifizierte Beratung. Es baut auf Thema 4.1 — Asset-Management auf und verbindet sich mit Lieferantenmanagement (Thema 3.14 — Lieferantenmanagement) und Informationssicherheit (Thema 3.13 — Informationssicherheitsmanagement).

## Kernkonzepte

**Software-Asset-Management (SAM).** Die Praktik, Kauf, Bereitstellung, Wartung, Nutzung und Entsorgung von Software in einer Organisation zu steuern und zu optimieren. Wikipedia beschreibt Software asset management und verknüpft es mit ISO/IEC 19770-1. Siehe Thema 1.8 — Frameworks und Standards des Service-Managements.

**Berechtigung (Entitlement).** Das Recht, Software zu nutzen, wie es eine Lizenz definiert. Die Berechtigungen einer Organisation werden aus Verträgen, Kaufbelegen und Anbieter-Portalen erfasst. Sie werden mit dem verglichen, was bereitgestellt und genutzt wird.

**Lizenzmodelle.** Gängige Modelle sind je Nutzer, je Gerät, je Prozessor oder Kern, je gleichzeitigem Nutzer (auch Floating-Lizenzen genannt), Standort- oder Unternehmenslizenzen und verbrauchsbasierte Preisgestaltung. Wikipedia beschreibt Software licenses und Floating licensing. Regeln unterscheiden sich nach Anbieter und Produkt, ändern sich mit Virtualisierung und Cloud und sind oft komplex.

**Effektive Lizenzposition.** Der Vergleich von Berechtigungen mit Nutzung: was Sie nutzen dürfen gegenüber dem, was Sie nutzen, zusammengefasst als Überschuss, Fehlbestand oder Ausgleich. Sie ist eine Momentaufnahme, und die Arbeit besteht darin, sie aktuell zu halten.

**Software-Audit.** Ein Anbieter oder Dritter prüft die Nutzung einer Organisation gegen ihre Berechtigungen. Audits können routinemäßig oder aggressiv sein. Eine Organisation, die ihre eigene Position aktuell gehalten hat, kann gelassen antworten. Eine, die das nicht hat, muss womöglich mit ungeplanten Kosten rechnen.

**Abonnement und SaaS.** Software as a Service wird gemietet, typischerweise je Nutzer oder nach Verbrauch, und über das Internet geliefert. Wikipedia beschreibt sowohl Software as a service als auch Subscription business models. Abonnements kann jeder mit einer Karte starten; ohne Kontrollen breiten sie sich aus, überschneiden sich und verlängern sich automatisch. Verfolgen Sie sie mit Verantwortlichen und Verlängerungsdaten.

**Shelfware und Optimierung.** Ungenutzte oder wenig genutzte Software. Ernten (Harvesting) heißt, Lizenzen von Nutzern zurückzugewinnen, die sie nicht brauchen, und neu zuzuweisen. Richtiges Dimensionieren (Right-Sizing) heißt, Zahl und Art der Lizenzen dem Bedarf anzupassen. Einsparungen können erheblich sein, und sie entstehen durch die Frage, ob eine Nutzung noch besteht.

**Open-Source-Software.** Software, deren Quellcode unter einer Lizenz verfügbar ist, die Nutzung, Änderung und Verbreitung unter bestimmten Bedingungen erlaubt. Wikipedia beschreibt Free and open-source software und Open-source licenses. Lizenzen unterscheiden sich: Permissive Lizenzen stellen wenige Pflichten, während Copyleft-Lizenzen, auf Wikipedia beschrieben, verlangen, abgeleitete Werke unter ähnlichen Bedingungen zu teilen. Pflichten hängen davon ab, wie Sie die Software nutzen und verbreiten, sodass die Auslegung Rechtsberatung braucht.

**Software-Stückliste (Software Bill of Materials, SBOM).** Eine Liste der Komponenten in einer Software, mit Versionen und Lizenzen. Wikipedia beschreibt die Software supply chain und das SPDX-Format zum Austausch von Lizenz- und Komponenteninformationen. Eine SBOM stützt Lizenz-Compliance und Sicherheitsreaktion. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**KI-Modelle und -Services.** Modelle und KI-Services kommen mit Bedingungen dazu, was Sie damit tun dürfen, wem Ergebnisse gehören, ob Ihre Eingaben aufbewahrt oder zum Training genutzt werden und was geschieht, wenn ein Modell sich ändert oder zurückgezogen wird. Wikipedia beschreibt Large language models und Open-source artificial intelligence und merkt an, dass „offen“ bei Modellen Verschiedenes bedeuten kann. Lesen Sie die Bedingungen und halten Sie sie fest. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Geistiges Eigentum.** Software ist durch Urheberrecht und manchmal Patente geschützt. Wikipedia beschreibt Intellectual property und Copyright. Software außerhalb ihrer Bedingungen zu nutzen, kann Rechte der Inhaber verletzen. Von KI-Werkzeugen generierter Code wirft offene Fragen zu Eigentum und Lizenzierung auf; holen Sie Rat ein.

**Software-Erkennung und Messung der Nutzung.** Discovery-Werkzeuge finden installierte Software und Cloud-Anwendungen. Die Nutzungsmessung (Metering) erfasst die tatsächliche Nutzung, etwa wann eine Anwendung zuletzt gestartet wurde. Zusammen mit Berechtigungen ergeben sie die Lizenzposition.

**Governance.** Richtlinien dazu, wer Software beschaffen darf, was genehmigt werden muss, wie Open Source geprüft wird und wie Lizenzen verfolgt werden. Halten Sie sie schlank und klar, damit Menschen ihnen folgen. Siehe Thema 8.1 — Governance, Risiko und Compliance.

**Wie die Blickwinkel passen.** SAM unterstützt agile Teams, indem es genehmigte Software leicht erhältlich macht und Compliance aus ihrem Weg hält. KI kann helfen, Lizenzbedingungen zu lesen und Daten abzugleichen, unter rechtlicher Prüfung. Automatisierung stellt Lizenzen bereit und holt sie zurück. Analytik zeigt Nutzung, Verschwendung und Risiko.

## Bewährte Praktiken

1. **Kennen Sie Ihre Berechtigungen.** Sammeln Sie Verträge, Kaufbelege und Daten aus Anbieter-Portalen an einem Ort. Erfassen Sie die Bedingungen, die zählen: Metrik, Menge, Laufzeit, Einschränkungen und Verlängerungsdatum.
2. **Erkennen Sie, was bereitgestellt und genutzt wird.** Nutzen Sie Discovery- und Nutzungsdaten für On-Premises-, Cloud- und Endgerätesoftware und gleichen Sie regelmäßig mit den Berechtigungen ab.
3. **Berechnen Sie Ihre Lizenzposition.** Vergleichen Sie für große Anbieter Berechtigungen mit Nutzung und halten Sie Position und Datum fest. Lösen Sie Fehlbestände und Überschüsse bewusst.
4. **Verantworten Sie jede große Anbieterbeziehung.** Benennen Sie eine Person, die die Lizenzregeln jedes großen Anbieters versteht und Änderungen verfolgt. Regeln unterscheiden sich und ändern sich.
5. **Machen Sie genehmigte Software leicht erhältlich.** Bieten Sie einen Katalog genehmigter Anwendungen mit schnellem Weg an, damit Menschen nicht selbst kaufen. Siehe Thema 3.8 — Service-Katalog-Management.
6. **Steuern Sie Abonnements.** Verlangen Sie beim Kauf eine verantwortliche Person, ein Budget und ein Verlängerungsdatum. Prüfen Sie automatische Verlängerungen rechtzeitig und kündigen Sie Ungenutztes.
7. **Ernten und dimensionieren Sie richtig.** Holen Sie Lizenzen von inaktiven Nutzern zurück und wechseln Sie, wo es passt, zu günstigeren Stufen. Fragen Sie Nutzer, bevor Sie Zugriff entziehen, um Störungen zu vermeiden.
8. **Prüfen Sie die Open-Source-Nutzung.** Scannen Sie Code nach Komponenten und ihren Lizenzen, setzen Sie eine Richtlinie, welche Lizenzen akzeptabel sind, und halten Sie Ausnahmen fest. Beziehen Sie für Pflichten Rechtsberatung ein.
9. **Halten Sie KI-Bedingungen fest.** Erfassen Sie für jedes KI-Modell und jeden KI-Service, welche Daten Sie senden, ob sie aufbewahrt oder zum Training genutzt werden, wem Ergebnisse gehören und was geschieht, wenn sich der Service ändert.
10. **Bereiten Sie sich auf Audits vor.** Halten Sie Aufzeichnungen aktuell und wissen Sie, wer eine Audit-Anfrage eines Anbieters bearbeitet. Antworten Sie zügig und sachlich, bei Bedarf mit rechtlicher Unterstützung.

## Fragen für die Diskussion im Team

**Kennen wir bei unseren drei größten Softwareanbietern unsere Berechtigungen und unsere Nutzung?**
Bitten Sie um eine Zahl und ihre Quelle. Rechnen Sie mit Unsicherheit. Wählen Sie anschließend einen Anbieter und berechnen Sie die Position ordentlich.

**Welche Abonnements haben wir außerhalb des zentralen Prozesses gekauft, und wer zahlt?**
Prüfen Sie Kartenabrechnungen und Spesen. Rechnen Sie mit Überraschungen. Halten Sie anschließend für die zehn teuersten Verantwortliche und Verlängerungsdaten fest.

**Für welche Lizenzen zahlen wir, die seit sechs Monaten niemand genutzt hat?**
Nutzen Sie Messdaten. Rechnen Sie mit Shelfware. Wählen Sie anschließend drei zum Zurückholen, mit vorheriger Nachricht an die Nutzer.

**Woher wissen wir, welche Open-Source-Komponenten in unseren Produkten stecken und welche Lizenzen sie tragen?**
Fragen Sie nach dem jüngsten Scan. Rechnen Sie mit Lücken. Wählen Sie anschließend ein Produkt und erstellen Sie eine Komponentenliste.

**Wenn ein Anbieter uns morgen auditierte, wer würde antworten und womit?**
Gehen Sie die Schritte durch. Rechnen Sie mit Verwirrung darüber, wer mit dem Anbieter spricht. Benennen Sie anschließend eine Leitung und stellen Sie ein Paket aktueller Aufzeichnungen zusammen.

**Wie lauten die Bedingungen der KI-Services, die unsere Teams nutzen, und hat sie jemand gelesen?**
Fragen Sie, wer welche Services nutzt. Rechnen Sie mit persönlichen Konten mit unbekannten Bedingungen. Listen Sie anschließend die fünf wichtigsten Services auf und halten Sie ihre Bedingungen zu Daten und Eigentum fest.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine regionale Klinikgruppe hat etwa 9.000 Beschäftigte und lizenziert eine große klinische Anwendung, ein Office-Paket, eine Datenbankplattform und Dutzende kleinere Werkzeuge. Der Finanzdirektor hat eine Kürzung der Softwareausgaben um 10 Prozent verlangt. Die SAM-Leiterin, ein Team aus zwei Personen, beginnt mit dem größten Anbieter, dessen Vertrag 30 Prozent der Ausgaben ausmacht.

Sie sammelt die Vertrags- und Kaufunterlagen und stellt fest, dass Lizenzen je namentlich benanntem Nutzer gezählt werden. Sie vergleicht diese mit der eigenen Nutzerliste der Anwendung und den Daten der letzten Anmeldung. Von 4.200 lizenzierten Nutzern haben sich etwa 700 seit sechs Monaten nicht angemeldet; viele sind frühere Aushilfen oder Menschen, die auf andere Stellen gewechselt sind. Außerdem findet sie 250 aktive Nutzer ohne Lizenz, meist neue Mitarbeitende, deren Konten aus einer Vorlage angelegt wurden. Die Nettoposition zeigt auf dem Papier einen Überschuss, in einem Modul aber einen echten Fehlbestand.

Sie richtet drei Schritte ein. Ein monatlicher Job listet inaktive Nutzer auf und schickt ihren Führungskräften eine Nachricht, bevor die Lizenz zurückgeholt wird. Der Prozess für neue Mitarbeitende prüft die Lizenzposition, bevor Zugriff zugewiesen wird. Und ein Fehlbestand im Modul wird dem Anbieter proaktiv gemeldet, um bei der nächsten Verlängerung gelöst zu werden, mit Hilfe der Rechtsabteilung der Gruppe. Einsparungen aus den zurückgeholten Lizenzen erreichen im ersten Jahr 6 Prozent der Ausgaben für diesen Anbieter.

Sie überprüft auch Abonnements und findet 14 von Abteilungen gekaufte SaaS-Werkzeuge, von denen vier einander doppeln und zwei Patientendaten verarbeiten. Letztere gibt sie an Sicherheits- und Datenschutzteam weiter und hält die KI-Bedingungen eines Transkriptionswerkzeugs fest, das eine Praxis erprobt hat: Der Anbieter bewahrt Audio 30 Tage auf und darf es zur Verbesserung seiner Modelle nutzen, was nach Aussage des Datenschutzteams nicht akzeptabel ist. Die Praxis stellt die Nutzung ein.

Was sich ändert: Lizenzen werden zurückgeholt und neu zugewiesen, und Überraschungen bei Verlängerungen werden seltener. Was schwierig bleibt: Die Lizenzregeln für virtualisierte Datenbanken sind komplex, und das Team kann sie nicht sicher auslegen; Klinikpersonal verliert ungern den Zugriff auf Werkzeuge, und manche zurückgeholte Lizenzen wurden nach Beschwerden wieder eingesetzt; und Abteilungen kaufen Abonnements weiter per Karte. Die Leiterin bittet die Finanzen, Softwarekäufe per Karte zur Prüfung zu markieren.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Listen Sie die Komponenten, Open-Source-Lizenzen und KI-Services Ihres Produkts auf. Wählen Sie Lizenzen und Services, die Sie verstehen, und halten Sie ihre Bedingungen fest. Kopieren Sie keinen Code und keine Daten in Werkzeuge, deren Bedingungen Sie nicht geprüft haben.

### Service- und Betriebsteams

Halten Sie Bereitstellungs- und Nutzungsdaten korrekt, holen Sie ungenutzte Lizenzen zurück und sagen Sie der SAM-Leitung, welche neuen Werkzeuge es gibt. Bearbeiten Sie Audit-Anfragen über den vereinbarten Weg.

### Führung und Governance

Verlangen Sie die Lizenzposition der großen Anbieter, die Kosten ungenutzter Software und den Plan für Audits. Unterstützen Sie einen einfachen Genehmigungsweg, den Menschen nutzen werden. Behandeln Sie KI-Bedingungen als Risikofrage.

### Kunden und Nutzer

Sie werden vielleicht gefragt, ob Sie eine Anwendung noch nutzen. Antworten Sie ehrlich und sagen Sie, wenn Sie sie brauchen. Nutzen Sie genehmigte Werkzeuge und bitten Sie über den richtigen Weg um das, was Sie brauchen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Machen Sie Compliance für Teams schnell: einen Katalog genehmigter Werkzeuge, eine einfache Open-Source-Richtlinie und einen kurzen Weg für Ausnahmen. Überprüfen Sie den Prozess mit Entwickelnden. Vorsicht: Strenge Schranken, die Teams umgehen, erzeugen Schatten-IT; halten Sie den Weg schnell.

### KI

KI kann Verträge und Lizenzbedingungen lesen, zusammenfassen und zu prüfende Klauseln markieren und Bereitstellungsdaten abgleichen, unter rechtlicher und menschlicher Prüfung. Benennen Sie eine verantwortliche Person. Vorsicht: Eine KI-Zusammenfassung von Lizenzbedingungen kann auf Weisen falsch sein, die zählen; verlassen Sie sich nie darauf für Compliance-Entscheidungen. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie Discovery, Nutzungsmessung, Lizenzzuweisung, Hinweise zur Rückholung und Verlängerungserinnerungen, mit Verantwortlichen und Protokollen. Vorsicht: Automatische Rückholung kann Zugriff entziehen, den jemand braucht; benachrichtigen Sie Nutzer zuerst und machen Sie die Wiedereinsetzung leicht. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Verfolgen Sie die Lizenzposition, ungenutzte Lizenzen und ihre Kosten, Zahl und Ausgaben der Abonnements, anstehende Verlängerungen und Befunde zu Open-Source-Lizenzen. Vorsicht: Einsparungszahlen werden leicht überschätzt, und Zählungen zurückgeholter Lizenzen lassen sich manipulieren; verfolgen Sie tatsächliche Ausgaben und Nutzerbeschwerden. Siehe Thema 4.5 — Finanzmanagement und FinOps und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Einmal zählen.** Die Position veraltet. Halten Sie Discovery und Nutzungsmessung am Laufen.
- **Außerhalb des Prozesses kaufen.** Abonnements breiten sich aus. Machen Sie den genehmigten Weg schnell und prüfen Sie Kartenausgaben.
- **Shelfware.** Lizenzen werden bezahlt und nicht genutzt. Messen Sie Nutzung und holen Sie zurück.
- **Unbekannte Open-Source-Nutzung.** Pflichten werden übersehen. Scannen Sie und setzen Sie eine Richtlinie.
- **KI-Bedingungen ignorieren.** Daten werden aufbewahrt oder zum Training genutzt. Lesen, erfassen und entscheiden Sie.
- **Keine Audit-Bereitschaft.** Ein Anbieter-Audit ist ein Gerangel. Halten Sie Aufzeichnungen und eine benannte Leitung.
- **Regeln für einfach halten.** Virtualisierung und Cloud verändern die Lizenzierung. Holen Sie bei komplexen Produkten Expertenrat ein.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Berechtigungen | Verstreut | Wichtigste Verträge gesammelt | Berechtigungen mit Schlüsselbedingungen an einem Ort erfasst | Berechtigungen regelmäßig abgeglichen | Berechtigungen mit Einkauf und Anbietern integriert |
| Erkennung und Nutzung | Keine | Manuelle Zählungen | Discovery und Messung für wichtigste Software | Position berechnet und überprüft | Laufende Position über On-Premises, Cloud und SaaS |
| Optimierung | Keine | Gelegentliche Bereinigung | Ernten und richtiges Dimensionieren als Routine | Einsparungen verfolgt und verifiziert | Optimierung automatisiert, mit Benachrichtigung der Nutzer |
| Open Source und KI | Unbekannt | Bewusstsein | Richtlinie, Scans und erfasste Bedingungen | Befunde bis zum Abschluss verfolgt | In Pipeline und Einkauf integriert |

## Checkliste

- [ ] Wir haben Berechtigungen für große Anbieter mit Schlüsselbedingungen erfasst.
- [ ] Discovery- und Nutzungsdaten werden mit Berechtigungen abgeglichen.
- [ ] Wir kennen unsere Lizenzposition bei unseren größten Anbietern.
- [ ] Eine Person verantwortet die Lizenzierung jedes großen Anbieters.
- [ ] Abonnements haben Verantwortliche, Budgets und Verlängerungsdaten.
- [ ] Inaktive Lizenzen werden mit Benachrichtigung zurückgeholt.
- [ ] Open-Source-Komponenten und -Lizenzen werden gescannt und gesteuert.
- [ ] Bedingungen von KI-Modellen und -Services sind erfasst.

## KI-Prompts

**Ziehen Sie Schlüsselbedingungen aus einem Vertrag zur Prüfung heraus.**

```text
Here is the text of a software license section: [paste]. 
List the license metric, quantity, term, restrictions, renewal terms, and audit rights, quoting the exact words for each, and write "not found" for any item the text does not state. Do not interpret ambiguous wording or give legal advice.
List what you are unsure of.
```

**Finden Sie Überschneidungen bei Abonnements.**

```text
Here is a list of our subscriptions with owner, purpose, cost, and users: [paste].
Group those that serve similar purposes, list the total cost of each group, and give one question per group about whether to consolidate. Do not recommend cancellation.
List what you are unsure of.
```

**Bereiten Sie KI-Bedingungen zur Prüfung vor.**

```text
Here are the terms of an AI service we use: [paste relevant sections].
List what the terms say about data retention, use of inputs for training, ownership of outputs, permitted uses, and changes to the service, quoting each. For anything the text does not cover, write "not stated". Do not give legal advice.
List what you are unsure of.
```

## KI-Skills

- [vendor-management](../../../../skills/vendor-management/SKILL.md): nutzen Sie ihn, um Anbieterbeziehungen und Verlängerungen zu steuern.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): nutzen Sie ihn, um Fragen zur Lizenz-Compliance für die Rechtsprüfung zu formulieren.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): nutzen Sie ihn, um Kosten und Nutzen von Softwareentscheidungen abzuwägen.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): nutzen Sie ihn, um die Bedingungen und Eigenschaften eines KI-Modells festzuhalten.

## Wichtige Quellen

- ISO/IEC 19770-1 (der Standard selbst): Prozesse und Stufen für das IT-Asset-Management; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- PeopleCert, ITIL certification pages: die Beschreibung des Software-Asset-Managements als Teil des Asset-Managements durch den Eigentümer.
- Wikipedia, „Software asset management“ und „Open-source license“: Überblicke über die Ideen.
- Open Source Initiative (opensource.org): die Definition von Open Source und eine Liste genehmigter Lizenzen.

## Literaturverzeichnis

1. Software asset management — Wikipedia — https://en.wikipedia.org/wiki/Software_asset_management
2. Software license — Wikipedia — https://en.wikipedia.org/wiki/Software_license
3. Open-source license — Wikipedia — https://en.wikipedia.org/wiki/Open-source_license
4. Free and open-source software — Wikipedia — https://en.wikipedia.org/wiki/Free_and_open-source_software
5. Copyleft — Wikipedia — https://en.wikipedia.org/wiki/Copyleft
6. Floating licensing — Wikipedia — https://en.wikipedia.org/wiki/Floating_licensing
7. Shelfware — Wikipedia — https://en.wikipedia.org/wiki/Shelfware
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
10. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
11. Open Source Initiative — OSI — https://opensource.org
