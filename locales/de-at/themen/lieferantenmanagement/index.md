# Lieferantenmanagement

**Lieferantenmanagement stellt sicher, dass die Anbieter, Cloud-Provider und Partner, von denen ein Service abhängt, liefern, was vereinbart wurde, und dass Sie zurechtkommen, wenn sie es nicht tun. Es funktioniert, wenn Lieferanten als Teil des Services behandelt werden, Verträge zu den Service-Levels passen, die Sie versprechen, und die Beziehung gemeinsame Überprüfung und einen Ausstiegsplan einschließt.**

## Warum das wichtig ist

Wenige Services werden von einer einzigen Organisation allein erbracht. Die mobile App einer Bank läuft auf einer Cloud-Plattform, nutzt einen Zahlungsabwickler, versendet Nachrichten über einen Telekommunikationslieferanten und wird außerhalb der Arbeitszeit von einem Managed-Service-Provider unterstützt. Jeder davon ist ein Glied der Kette. Fällt eines aus, unterscheidet der Kunde nicht zwischen der Bank und ihrem Lieferanten. Die Bank ist rechenschaftspflichtig.

Lieferantenmanagement ist die Praktik, die mit dieser Wirklichkeit umgeht. Sie umfasst die Auswahl von Lieferanten, die Vereinbarung dessen, was sie liefern, die Überwachung ihrer Leistung, die Steuerung der Beziehung und die Planung für Wechsel oder Ausfall. Wenn es funktioniert, werden Lieferanten Teil des Service-Teams, mit gemeinsamen Zielen und offener Kommunikation. Wenn es scheitert, entdecken Organisationen zu spät, dass ein Vertrag weniger verspricht als der Service, den sie ihren eigenen Kunden versprochen haben, oder dass der Abschied von einem Lieferanten zwei Jahre dauern würde.

Moderne Services machen das schwieriger und wichtiger. Cloud-Plattformen und Software-as-a-Service-Produkte liefern Fähigkeiten in Minuten und können schwer zu verlassen sein. KI-Services bringen neue Abhängigkeiten von Modellen und Datenpraktiken, die der Käufer nicht sehen kann. Dieses Thema erklärt die Praktik, die wichtigsten Arrangements und die Fallen. Es verbindet sich mit Service-Level-Management (Thema 3.7 — Service-Level-Management), Service-Continuity (Thema 3.12 — Service-Continuity-Management) und Finanzmanagement (Thema 4.5 — Finanzmanagement und FinOps). Es gibt keine rechtliche oder Beschaffungsberatung; holen Sie diese bei den richtigen Fachleuten ein.

## Kernkonzepte

**Lieferant.** Eine Partei, die einer Organisation Produkte oder Services bereitstellt, etwa ein Anbieter, ein Auftragnehmer, ein Cloud-Provider oder ein Partner. In den Begriffen von ITIL 4 erscheinen Lieferanten in der Dimension „Partner und Lieferanten“ (siehe Thema 1.6 — Vier Dimensionen des Service-Managements). Ein Lieferant kann auch ein Wettbewerber, ein Kunde oder Teil derselben Unternehmensgruppe sein.

**Lieferantenmanagement.** Die Praktik sicherzustellen, dass die Lieferanten der Organisation und ihre Leistung angemessen gesteuert werden, um die reibungslose Bereitstellung von Qualitätsprodukten und -services zu stützen. Wikipedia beschreibt verwandte Ideen unter Supplier relationship management und Vendor management systems.

**Outsourcing.** Eine Tätigkeit an eine externe Partei zu vergeben. Wikipedia beschreibt Outsourcing und Offshoring mit ihren Beweggründen und Risiken. Outsourcing verlagert Arbeit; es verlagert nicht die Rechenschaft für das Ergebnis auf den Kunden.

**Multisourcing und Integration.** Viele Organisationen nutzen mehrere Lieferanten, jeden für einen anderen Teil des Services. Wikipedia beschreibt Multisourcing. Jemand muss sie koordinieren, damit der Kunde einen Service sieht. Diese Rolle wird manchmal Service Integration and Management (SIAM) genannt, auf Wikipedia beschrieben, und kann vom Kunden, einem führenden Lieferanten oder einem Spezialisten ausgeübt werden. Siehe den Skill service-integration-and-management in diesem Leitfaden.

**Cloud und Software as a Service.** Cloud Computing und Software as a Service verlagern Infrastruktur und Anwendungen zu Anbietern. Wikipedia beschreibt beides. Die Verantwortung ist geteilt: Der Anbieter sichert und betreibt die Plattform; der Kunde konfiguriert, nutzt und sichert, was er dort ablegt. Die Aufteilung unterscheidet sich je nach Servicemodell, und ihr Missverständnis ist eine häufige Incident-Ursache. Lesen Sie die Beschreibung des Anbieters zu seinem Modell geteilter Verantwortung (Shared Responsibility Model).

**Verträge und Vereinbarungen.** Ein Vertrag nennt, was der Lieferant liefert, zu welchem Preis, mit welchen Service-Levels und mit welchen Abhilfen. Ein untermauernder Vertrag stützt die Service-Levels, die Sie Ihrem eigenen Kunden versprochen haben; beide müssen übereinstimmen. Siehe Thema 3.7 — Service-Level-Management. Der Wikipedia-Artikel zu Contract management beschreibt die Steuerung von Vereinbarungen über ihr Leben.

**Sorgfaltsprüfung (Due Diligence).** Einen Lieferanten vor der Bindung prüfen: finanzielle Gesundheit, Sicherheitspraktiken, Referenzen, Zertifizierungen und die Fähigkeit, den Bedarf zu decken. Wikipedia beschreibt Due diligence. Richten Sie den Umfang der Prüfungen nach der Bedeutung des Lieferanten.

**Leistungsmanagement.** Überwachen, was der Lieferant liefert, gegen das, was vereinbart wurde, mit regelmäßigen Reviews. Kennzahlen sollten spiegeln, was Ihnen wichtig ist, und auf Daten beruhen, die Sie prüfen können. Leistungskennzahlen (Key performance indicators) sind auf Wikipedia beschrieben, ebenso Vorsichtspunkte dazu. Siehe das Buch *Service Management Metrics*.

**Beziehung und Governance.** Eine Lieferantenbeziehung braucht benannte Ansprechpersonen auf beiden Seiten, regelmäßige Besprechungen, einen Eskalationsweg und eine Möglichkeit, Bedenken anzusprechen. Der Ton zählt: Lieferanten, die als Gegner behandelt werden, schützen sich tendenziell selbst; Lieferanten, die als Partner behandelt werden, teilen Probleme tendenziell früh.

**Anbieterbindung (Vendor Lock-in).** Eine Lage, in der der Wechsel des Lieferanten kostspielig oder unpraktisch ist. Wikipedia beschreibt Vendor lock-in. Lock-in ist manchmal ein hinnehmbarer Preis für Wert; es sollte eine bewusste Wahl sein. Offene Standards und Interoperabilität, auf Wikipedia beschrieben, verringern ihn.

**Ausstiegsplanung.** Ein Plan, die Beziehung zu beenden: wie Daten und Services übertragen werden, wie lange es dauern würde, was es kostet und was der Lieferant liefern muss. Wikipedia beschreibt Exit strategies allgemein. Ein Ausstiegsplan, der nie geprüft wurde, ist eine Hoffnung. Testen Sie bei kritischen Lieferanten Teile davon.

**Konzentration und Abhängigkeit.** Von einem Lieferanten stark abzuhängen, oder von mehreren, die sich auf denselben zugrunde liegenden Anbieter stützen, erzeugt ein Konzentrationsrisiko. Kartieren Sie Abhängigkeiten, auch indirekte. Siehe Thema 3.12 — Service-Continuity-Management.

**Informationssicherheit und Daten.** Lieferanten behandeln oft sensible Daten. Vereinbaren Sie Sicherheitsanforderungen, Meldung von Incidents, Prüfrechte sowie Datenstandort und Rückgabe. Prüfen Sie das für Sie geltende Recht. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**KI-Lieferanten.** Anbieter von KI-Modellen und -Services bringen besondere Fragen mit: mit welchen Daten sie trainieren, ob Ihre Eingaben aufbewahrt werden, wie Änderungen an Modellen angekündigt werden und welche Aufsicht Sie ausüben können. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Wie die Blickwinkel passen.** Lieferantenmanagement wendet kontinuierliche Verbesserung auf Beziehungen an: regelmäßige Überprüfung und gemeinsame Verbesserung. KI kann helfen, Verträge zu lesen und Leistung zusammenzufassen, unter rechtlicher und menschlicher Prüfung. Automatisierung sammelt Leistungsdaten und Verlängerungstermine. Analytik zeigt Lieferantenleistung und Ausgaben.

## Bewährte Praktiken

1. **Kennen Sie Ihre Lieferanten und was jeder liefert.** Führen Sie ein Register der Lieferanten mit den Services, die sie unterstützen, Vertragsdaten, Verantwortlichen und Kritikalität. Nehmen Sie per Karte gekaufte Cloud-Services auf.
2. **Gleichen Sie Verträge mit Ihren eigenen Zusagen ab.** Prüfen Sie für jeden Service, den Sie versprechen, dass jeder stützende Vertrag ihn erlaubt. Schließen Sie Lücken durch Neuverhandlung, durch Redundanz oder durch Änderung Ihres Versprechens.
3. **Richten Sie die Sorgfaltsprüfung am Risiko aus.** Prüfen Sie kritische Lieferanten gründlich; nutzen Sie leichtere Prüfungen für kleine. Prüfen Sie erneut, wenn ein Lieferant Eigentümer oder Umfang wechselt.
4. **Benennen Sie Verantwortliche auf beiden Seiten.** Jeder Lieferant hat eine interne Beziehungsverantwortliche und eine benannte Ansprechperson beim Lieferanten. Legen Sie einen Eskalationsweg im Voraus fest.
5. **Überprüfen Sie die Leistung regelmäßig.** Treffen Sie sich nach Plan, betrachten Sie Daten und Incidents und vereinbaren Sie Maßnahmen. Teilen Sie die Leistung Ihres eigenen Services, damit der Lieferant die Wirkung sieht.
6. **Behandeln Sie Lieferanten als Teil des Teams, wo es zählt.** Beziehen Sie sie in Nachbetrachtungen von Incidents und in die Planung von Changes ein, die sie betreffen. Teilen Sie Informationen, die ihnen helfen, Ihnen zu helfen.
7. **Verstehen Sie geteilte Verantwortung.** Schreiben Sie für Cloud- und Software-Services auf, was der Lieferant tut und was Sie tun. Prüfen Sie, dass Ihr Teil abgedeckt ist.
8. **Planen Sie den Ausstieg.** Dokumentieren Sie für kritische Lieferanten, wie Sie wechseln würden, einschließlich Datenexport, Zeitplan und Kosten. Testen Sie Teile davon, etwa den Export von Daten.
9. **Beobachten Sie die Konzentration.** Kartieren Sie, welche Services vom selben Lieferanten oder demselben zugrunde liegenden Anbieter abhängen. Entscheiden Sie, wo sich Redundanz lohnt.
10. **Beziehen Sie Fragen zu Sicherheit, Datenschutz und KI ein.** Fragen Sie Lieferanten, wie sie Daten schützen, Incidents melden und Ihre Daten nutzen oder damit trainieren, und halten Sie die Antworten fest.

## Fragen für die Diskussion im Team

**Welche Lieferanten könnten unseren wichtigsten Service stoppen, und was würden wir tun?**
Listen Sie sie auf, auch indirekte. Rechnen Sie mit ein oder zwei Überraschungen. Wählen Sie anschließend einen kritischen Lieferanten und fragen Sie, wie wir eine Woche Ausfall bewältigen würden.

**Wo verspricht ein Lieferantenvertrag weniger, als wir unseren Kunden versprechen?**
Legen Sie die Zahlen nebeneinander. Rechnen Sie mit Lücken bei Reaktionszeiten und Verfügbarkeit. Wählen Sie anschließend eine Lücke, die wir schließen oder dem Kunden anzeigen.

**Wer verantwortet jede Lieferantenbeziehung, und wann hat sie den Lieferanten zuletzt getroffen?**
Verantwortung wird oft vorausgesetzt. Fragen Sie nach dem Datum des letzten Treffens und was daraus wurde. Weisen Sie anschließend Verantwortliche und einen Zeitplan zu.

**Wie lange würde es dauern, unseren größten Lieferanten zu verlassen, und was würden wir verlieren?**
Versuchen Sie, konkret zu antworten. Rechnen Sie mit „Jahre“ oder „keine Ahnung“. Entwerfen Sie anschließend einen groben Ausstiegsplan und testen Sie einen Datenexport.

**Was nehmen wir an, dass der Cloud-Provider für uns erledigt, und was müssen wir tatsächlich tun?**
Prüfen Sie die Dokumentation des Anbieters. Rechnen Sie mit Annahmen zu Backup, Zugriff und Konfiguration. Listen Sie anschließend unsere eigenen Verantwortlichkeiten auf und wer jede verantwortet.

**Was macht jeder KI-Lieferant mit unseren Daten, und wie teilt er uns Modelländerungen mit?**
Lesen Sie die Bedingungen. Rechnen Sie mit Unsicherheit. Fragen Sie anschließend die Lieferanten direkt und halten Sie die Antworten im Register fest.

## In der Praxis: ein Beispiel aus dem Service-Management

Der Online-Steuerservice einer nationalen Steuerbehörde hängt von fünf Lieferanten ab: einer Cloud-Plattform, einem Anbieter für Identitätsprüfung, einem SMS-Gateway für Einmalcodes, einem Dokumenten-Scan-Service und einem Managed-Service-Provider, der die Plattform außerhalb der Arbeitszeit unterstützt. Die eigene Zusage der Behörde an Steuerpflichtige lautet, dass der Service während der Abgabesaison verfügbar ist, mit einer Reaktion auf Incidents binnen vier Stunden.

Die Service-Verantwortliche erstellt ein einseitiges Register und vergleicht jeden Vertrag mit der Zusage. Der Vertrag des Managed-Service-Providers verspricht außerhalb der Arbeitszeit eine Reaktion binnen acht Stunden. Der Vertrag des SMS-Gateways nennt keine Verfügbarkeit und keine Pflicht zur Meldung von Incidents. Der Vertrag des Identitätsanbieters steht in vier Monaten zur Verlängerung an, und ein Ausstieg würde wegen der Art, wie Identitätsdaten gespeichert sind, etwa neun Monate dauern.

Sie ergreift drei Maßnahmen. Sie handelt mit dem Managed-Service-Provider eine Reaktion binnen vier Stunden für die Abgabesaison neu aus, zu einem Preis, der dem Budgetverantwortlichen zur Entscheidung vorgelegt wird. Sie ergänzt ein zweites SMS-Gateway als Rückfall und vereinbart, die Umschaltung zu testen. Und sie beginnt eine Ausstiegsstudie für den Identitätsanbieter, beginnend mit einem Testexport der Daten, und nutzt sie in den Verlängerungsgesprächen, um bessere Bedingungen für die Datenportabilität zu fordern. Sie plant vierteljährliche Reviews mit jedem der fünf ein, mit der Kundenbetreuung des Lieferanten.

Was sich ändert: Die Behörde kann angeben, welche Versprechen an Steuerpflichtige jeder Vertrag stützt, und der SMS-Rückfall funktioniert im ersten Test. Was schwierig bleibt: Die zusätzlichen Reaktionskosten beim Managed-Service-Provider werden von den Finanzen bestritten; der regionale Ausfall der Cloud-Plattform selbst bleibt eine einzelne Abhängigkeit, für deren Behebung die Behörde keine Mittel bereitgestellt hat; und der Identitätsanbieter hat den Portabilitätsbedingungen noch nicht zugestimmt. Die Service-Verantwortliche hält dies als offene Risiken mit Verantwortlichen fest.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Wissen Sie, von welchen Lieferanten Ihr Produkt abhängt und was sie versprechen. Entwerfen Sie, wo praktikabel, für den Ausfall von Lieferanten und bauen Sie Integrationen, die einen Wechsel möglich machen. Beziehen Sie Lieferanten in die Planung von Changes ein, die sie betreffen.

### Service- und Betriebsteams

Halten Sie Ansprechpersonen und Eskalationswege der Lieferanten aktuell, teilen Sie Incidents zügig mit Lieferanten und erfassen Sie deren Leistung. Sprechen Sie Vertragslücken an, auf die Sie in der Praxis stoßen.

### Führung und Governance

Entscheiden Sie, welche Abhängigkeiten akzeptabel sind, und finanzieren Sie die Redundanz und Ausstiegsarbeit, die daraus folgt. Verlangen Sie Belege, dass Verträge Ihre Zusagen stützen. Seien Sie aufmerksam für Konzentration und Lock-in.

### Kunden und Nutzer

Sie sehen die Lieferanten Ihres Anbieters womöglich nicht, aber Sie hängen von ihnen ab. Fragen Sie, welche Abhängigkeiten der Service hat und was geschieht, wenn eine ausfällt. Erwarten Sie bei einem Major Incident klare Information.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Beziehen Sie Lieferanten in regelmäßige gemeinsame Reviews und Verbesserung ein und streben Sie kurze Feedbackzyklen mit ihnen an. Vorsicht: Agile Teams können Services schnell ohne Prüfung übernehmen; halten Sie das Lieferantenregister aktuell und überprüfen Sie neue Abhängigkeiten.

### KI

KI kann helfen, Verträge zu lesen, Bedingungen mit Service-Zusagen zu vergleichen und Lieferantenberichte zusammenzufassen, unter Prüfung durch Rechts- und Beschaffungspersonal. Benennen Sie eine verantwortliche Person. Vorsicht: Eine KI-Zusammenfassung eines Vertrags kann Klauseln übersehen oder erfinden; prüfen Sie stets am Dokument und holen Sie für die Auslegung Rechtsberatung ein. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie die Erfassung von Lieferantenleistung, Verlängerungserinnerungen und Prüfungen der Cloud-Konfiguration, mit Verantwortlichen für Ausnahmen. Vorsicht: Automatische Bereitstellung von Drittservices kann unverfolgte Abhängigkeiten schaffen; verknüpfen Sie die Bereitstellung mit dem Register. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Verfolgen Sie Lieferantenleistung gegen vereinbarte Kennzahlen, Ausgaben je Lieferant, Incident-Anteil und Abhängigkeitskonzentration. Vorsicht: Vom Lieferanten gemeldete Zahlen können zu seinen Gunsten definiert sein, und Vertragsstrafen, die an eine einzige Kennzahl gebunden sind, laden zur Manipulation ein; verifizieren Sie mit eigenen Daten. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Verträge unter den Zusagen.** Versprechen übersteigen, was Lieferanten liefern müssen. Vergleichen Sie und schließen Sie die Lücken.
- **Lieferanten außerhalb des Registers.** Schatten-Services wuchern. Führen Sie ein Register und verknüpfen Sie es mit dem Einkauf.
- **Konfrontative Beziehungen.** Lieferanten verbergen Probleme. Teilen Sie Ziele und prüfen Sie gemeinsam.
- **Kein Ausstiegsplan.** Ein Wechsel ist unpraktisch. Planen und testen Sie Ausstiege bei kritischen Lieferanten.
- **Geteilte Verantwortung missverstanden.** Ein Cloud-Service gilt als sicher und gesichert. Dokumentieren Sie, wer was tut.
- **Versteckte Konzentration.** Mehrere Lieferanten stützen sich auf denselben Anbieter. Kartieren Sie indirekte Abhängigkeiten.
- **Datenbedingungen der KI ignorieren.** Eingaben werden aufbewahrt oder zum Training genutzt. Fragen Sie und halten Sie es fest.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Sichtbarkeit | Lieferanten im Team bekannt | Register der wichtigsten Lieferanten | Register mit Verantwortlichen, Kritikalität und Verträgen | Register aus Einkauf und Erkennung aktuell gehalten | Abhängigkeiten über Lieferanten und indirekte Anbieter kartiert |
| Verträge | Unterschrieben und abgelegt | Bei Verlängerung überprüft | An unsere Service-Zusagen angeglichen | Leistung und Abhilfen überprüft | Verträge über die Lieferkette angepasst |
| Beziehung | Transaktional | Benannte Ansprechpersonen | Regelmäßige Reviews mit Maßnahmen | Gemeinsame Verbesserung und geteiltes Lernen | Lieferanten in Planung und Wiederherstellung integriert |
| Ausstieg und Risiko | Keine | Bewusstsein | Ausstiegspläne für kritische Lieferanten | Teile getestet | Redundanz und Ausstiege im Portfolio gesteuert |

## Checkliste

- [ ] Wir führen ein Register der Lieferanten mit Verantwortlichen, Kritikalität und Vertragsdaten.
- [ ] Jeder Lieferantenvertrag wird mit den Zusagen verglichen, die er stützt.
- [ ] Jeder kritische Lieferant hat eine namentlich benannte Beziehungsverantwortliche und einen Eskalationsweg.
- [ ] Wir halten regelmäßige Reviews mit kritischen Lieferanten.
- [ ] Wir haben die geteilte Verantwortung für Cloud-Services dokumentiert.
- [ ] Kritische Lieferanten haben Ausstiegspläne, deren Teile getestet sind.
- [ ] Wir kennen unsere Konzentrationsrisiken.
- [ ] Wir haben KI- und Datenlieferanten nach Datennutzung und Modelländerungen gefragt.

## KI-Prompts

**Vergleichen Sie einen Vertrag mit unseren Zusagen.**

```text
Here are the relevant terms from a supplier contract: [paste clauses]. Here are the commitments we make to our own customers for the supported service: [paste].
List each of our commitments and say whether the contract text supports it, conflicts with it, or is silent, quoting the exact words. Do not give legal advice or interpret ambiguous clauses.
List what you are unsure of.
```

**Entwerfen Sie Fragen für den Lieferanten-Review.**

```text
Supplier: [name and what they provide]. Recent facts: [incidents, performance data, changes].
Draft ten questions for the quarterly review, covering performance, incidents, changes, risks, and improvements. Avoid blame and do not suggest facts I did not give.
List what you are unsure of.
```

**Kartieren Sie Abhängigkeiten aus einer Liste.**

```text
Here is a list of our services and the suppliers each uses: [paste]. Here is what I know about what each supplier itself depends on: [paste, or write "unknown"].
Produce a table showing, for each supplier, which services depend on it, and highlight suppliers that appear in many services or that share an underlying provider. Mark every assumption.
List what you are unsure of.
```

## KI-Skills

- [vendor-management](../../../../skills/vendor-management/SKILL.md): nutzen Sie ihn, um Lieferantenauswahl und -leistung zu steuern.
- [service-integration-and-management](../../../../skills/service-integration-and-management/SKILL.md): nutzen Sie ihn, um mehrere Lieferanten zu einem Service zu koordinieren.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): nutzen Sie ihn, um Vereinbarungen über die Kette abzustimmen.
- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um Lieferantenrisiken und Entscheidungen festzuhalten.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Lieferantenmanagement durch den Eigentümer.
- Wikipedia, „Supplier relationship management“ und „Outsourcing“: Überblicke über die Ideen.
- Wikipedia, „Vendor lock-in“: eine Zusammenfassung des Risikos und seiner Ursachen.
- Die eigene Dokumentation der Cloud-Provider zu ihren Modellen geteilter Verantwortung: die maßgebliche Aussage dazu, wer was tut.

## Literaturverzeichnis

1. Supplier relationship management — Wikipedia — https://en.wikipedia.org/wiki/Supplier_relationship_management
2. Vendor management system — Wikipedia — https://en.wikipedia.org/wiki/Vendor_management_system
3. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
4. Multisourcing — Wikipedia — https://en.wikipedia.org/wiki/Multisourcing
5. Service integration and management — Wikipedia — https://en.wikipedia.org/wiki/Service_integration_and_management
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Contract management — Wikipedia — https://en.wikipedia.org/wiki/Contract_management
8. Due diligence — Wikipedia — https://en.wikipedia.org/wiki/Due_diligence
9. Exit strategy — Wikipedia — https://en.wikipedia.org/wiki/Exit_strategy
10. Cloud computing — Wikipedia — https://en.wikipedia.org/wiki/Cloud_computing
11. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
