# Frameworks und Standards des Service-Managements

**ISO/IEC 20000, COBIT, VeriSM, FitSM und IT4IT überschneiden sich mit ITIL und untereinander: Sie beantworten verschiedene Fragen (was zertifiziert wird, wie gesteuert wird, wie über die Organisation hinweg gemanagt wird, wie man leicht beginnt, wie IT als Geschäft modelliert wird). Wählen Sie daher nach der Frage, die Sie haben, und nicht nach dem Logo.**

## Warum das wichtig ist

Teams, die Service-Management einführen, begegnen einem Alphabet aus Frameworks und Standards. Ein Einkäufer verlangt eine Zertifizierung nach ISO/IEC 20000. Ein Auditor verweist auf COBIT. Ein Berater empfiehlt VeriSM für das digitale Zeitalter. Ein kleines Team stößt auf FitSM und fragt sich, warum ITIL so schwer wirkte. Jedes wird von seinen Befürwortern als die Antwort beschrieben, und die Beschreibungen sagen selten, wofür es gedacht ist.

Das Risiko ist Verwirrung mit realen Kosten: eine Zertifizierung nach einem Standard, der nicht zum Vertrag passt, oder die Einführung eines Frameworks für eine Rolle, für die es nie entworfen wurde. Ein Framework ist Leitlinie; ein Standard ist eine Menge von Anforderungen, gegen die ein Auditor eine Organisation zertifizieren kann. Das sind verschiedene Dinge, und sie zu vermischen führt zu vergeudetem Aufwand.

Dieses Thema stellt einen neutralen Vergleich auf. Es ist kein Compliance-Handbuch und gibt keine rechtliche oder Audit-Beratung. Für jedes Framework nennt es den Zweck, die Art des Dokuments und die Frage, bei der es hilft. Einzelheiten ändern sich; prüfen Sie daher die aktuellen Publikationen des jeweiligen Eigentümers, bevor Sie sich auf eine Aussage hier verlassen, auch bei der in Thema 1.3 — ITIL 5 behandelten ITIL-Version.

## Kernkonzepte

**Framework oder Standard.** Ein Framework bietet Konzepte, Praktiken und Ratschläge, die Sie anpassen. Ein Standard legt Anforderungen fest, normalerweise mit „muss“ formuliert, anhand derer eine Organisation bewertet werden kann. ITIL ist ein Framework: Personen werden zertifiziert, Organisationen nicht. ISO/IEC 20000 ist ein Standard: Eine Organisation kann danach auditiert und zertifiziert werden.

**ITIL.** Leitlinien für das IT-Service-Management, heute im Eigentum von PeopleCert, mit Praktiken, einem Wertmodell und einem Zertifizierungsprogramm für Personen. Siehe Thema 1.2 — ITIL.

**ISO/IEC 20000.** Ein internationaler Standard für Service-Management-Systeme, gemeinsam herausgegeben von der International Organization for Standardization und der International Electrotechnical Commission. Teil 1 legt die Anforderungen an Aufbau, Umsetzung, Aufrechterhaltung und Verbesserung eines Service-Management-Systems (SMS) fest. Organisationen werden von akkreditierten Stellen zertifiziert. Er wird oft gewählt, wenn ein Kunde oder eine Aufsichtsbehörde unabhängige Belege für Disziplin im Service-Management verlangt. Er ist in seiner Struktur mit anderen ISO-Managementsystemnormen kompatibel.

**COBIT.** Ein Framework der ISACA für die Governance und das Management von Unternehmensinformationen und -technologie. Es ist weiter gefasst als Service-Management: Es behandelt, wie Vorstand und Management Technologie lenken und beaufsichtigen, mit Governance-Zielen, Management-Zielen und Leistungsmessung. Es wird oft von Auditoren und Risikoteams genutzt, und Organisationen setzen es häufig neben ITIL ein, wobei COBIT beschreibt, was Governance erwartet, und ITIL, wie Services betrieben werden.

**VeriSM.** Ein Service-Management-Ansatz für Organisationen, die digitale Services anbieten, aus einer Gruppe der Service-Management-Gemeinschaft. Er beschreibt organisationsweite „Service-Management-Prinzipien“ und ein Management-Geflecht (Management Mesh) aus Ressourcen, Umfeld, Management-Praktiken und neu entstehenden Technologien, das einer Organisation erlauben soll, verschiedene Praktiken zu kombinieren. Er ist kein Ersatz für ein Praktik-Framework, sondern eine Möglichkeit, mehrere zu ordnen. Prüfen Sie die Seite des Eigentümers auf aktuelle Einzelheiten.

**FitSM.** Eine schlanke Familie von Standards für das IT-Service-Management, aus europäischen Forschungsprojekten hervorgegangen und darauf ausgelegt, einfach und kostenfrei nutzbar zu sein. Es beschreibt eine kleine Zahl von Prozessen mit einem klaren Satz von Anforderungen und wird oft von kleinen und mittleren Organisationen und föderierten IT-Umgebungen erwogen, denen größere Frameworks schwer erscheinen.

**IT4IT.** Eine Referenzarchitektur der Open Group für das Management des Geschäfts der IT, modelliert als Wertströme (etwa Strategie zu Portfolio, Anforderung zu Bereitstellung, Anfrage zu Erfüllung und Erkennen zu Beheben), gestützt auf Informations- und Funktionskomponenten. Sie ist nützlich, wenn Sie gestalten wollen, wie Werkzeuge und Daten über den IT-Lebenszyklus zusammenpassen, und ergänzt die Praktiken von ITIL.

**Verwandte Standards.** ISO/IEC 27001 legt Anforderungen an ein Informationssicherheits-Managementsystem fest (siehe Thema 3.13 — Informationssicherheitsmanagement). ISO/IEC 19770 behandelt das IT-Asset-Management (siehe Thema 4.1 — Asset-Management). ISO/IEC 42001, 2023 veröffentlicht, legt Anforderungen an ein Managementsystem für künstliche Intelligenz fest (siehe Thema 5.6 — KI-Governance, Risiko und Compliance). Standards mit gemeinsamer Struktur lassen sich in einem Managementsystem kombinieren, was doppelten Aufwand verringert.

**DevOps, SRE und Agilität stehen nicht auf dieser Liste.** Sie sind Bewegungen und Ansätze, keine Frameworks in diesem Sinn, auch wenn sie sich mit den Praktiken hier überschneiden. Siehe Thema 2.5 — DevOps und Thema 2.6 — Site Reliability Engineering.

**Reifegradmodelle.** Das Capability Maturity Model Integration (CMMI) bewertet Prozessfähigkeit und wird gelegentlich für Service-Arbeit genutzt. Dieser Leitfaden verwendet sein eigenes fünfstufiges Reifegradmodell (Initiieren, Entwickeln, Standardisieren, Steuern, Orchestrieren), das ein Hilfsmittel zur Selbsteinschätzung ist, keine Zertifizierung.

**Wie die Blickwinkel passen.** Jedes Framework wurde überarbeitet oder wird überarbeitet, um agile Arbeitsweisen, KI, Automatisierung und Daten abzubilden. Prüfen Sie die aktuelle Ausgabe, wie jedes damit umgeht, und betrachten Sie jede Zusammenfassung, auch diese, als Hinweis auf die Quelle.

## Bewährte Praktiken

1. **Beginnen Sie bei der Frage.** Schreiben Sie auf, was Sie brauchen: unabhängige Belege für einen Kunden, eine Governance-Struktur für den Vorstand, einen leichteren Einstieg, eine Möglichkeit, mehrere Praktiken zu ordnen. Wählen Sie das Framework oder den Standard, der die Frage beantwortet.
2. **Prüfen Sie, was der Kunde oder die Aufsichtsbehörde tatsächlich verlangt.** Steht im Vertrag „zertifiziert nach ISO/IEC 20000“, erfüllt kein anderes Framework das. Steht dort „gute Praxis“, haben Sie die Wahl. Lesen Sie die Klausel.
3. **Zertifizieren Sie nicht um der Zertifizierung willen.** Zertifizierung kostet Aufwand und laufende Audits. Tun Sie es, wenn jemand, der zählt, die Belege braucht, und bauen Sie zuerst die zugrunde liegenden Praktiken auf.
4. **Lesen Sie den Text des Eigentümers.** Verwenden Sie für jede Anforderung oder Definition, die Sie zitieren, den Standard oder das Framework selbst und halten Sie Ausgabe und Datum fest. Zusammenfassungen, auch Blogbeiträge, weichen ab.
5. **Kombinieren Sie auf Ebene der Praktik.** Viele Organisationen nutzen ITIL für Praktiken, ISO/IEC 20000 für die Zertifizierung, COBIT für Governance und IT4IT für Architektur. Ordnen Sie jede Praktik den Anforderungen, die sie unterstützt, einmal zu, statt für jede separate Verfahren zu schreiben.
6. **Teilen Sie ein Managementsystem.** Wo Standards eine Struktur teilen, führen Sie einen Satz Dokumente, Audits und Review-Besprechungen. Eine einzige Managementbewertung, die Service, Sicherheit und KI abdeckt, ist günstiger und klarer als drei.
7. **Beginnen Sie klein, wenn Sie klein sind.** Ein Framework, das für ein großes Unternehmen entworfen wurde, kann ein Team von zehn überfordern. Erwägen Sie eine leichtere Option wie FitSM oder einige ausgewählte Praktiken.
8. **Halten Sie Belege als Nebenprodukt.** Gestalten Sie Pipelines und Werkzeuge so, dass die Aufzeichnungen, die ein Auditor will, durch normale Arbeit entstehen und nicht nachträglich zusammengestellt werden.
9. **Behandeln Sie Frameworks als Quellen für Fragen.** Nutzen Sie jedes, um zu fragen, was Ihnen entgehen könnte, und prüfen Sie die Antworten an Ihren eigenen Belegen.
10. **Prüfen Sie die Wahl erneut.** Bedürfnisse ändern sich. Überprüfen Sie jährlich, ob Sie jede Zertifizierung oder jedes Framework noch brauchen und was es kostet.

## Fragen für die Diskussion im Team

**Welches Problem wollen wir mit einem Framework oder Standard lösen, und wer verlangt es?**
Das beginnt beim Bedarf. Vielleicht hören Sie, „alle nutzen es“ oder ein Auditor habe es erwähnt. Bitten Sie um das Dokument oder die Vertragsklausel. Halten Sie anschließend den Bedarf in einem Satz fest und prüfen Sie jede Option daran.

**Welche unserer Kunden oder Aufsichtsbehörden verlangen eine Zertifizierung, und wonach?**
Anforderungen werden oft vorausgesetzt. Prüfen Sie Verträge, Ausschreibungen und aufsichtsrechtliche Hinweise. Rechnen Sie mit Überraschungen in beide Richtungen: eine Anforderung, die niemand bemerkt hat, oder keine, wo man eine annahm. Listen Sie anschließend die Belege auf, die jede verlangt.

**Wo pflegen wir getrennte Dokumente für dieselbe Praktik, weil verschiedene Frameworks sie verlangen?**
Das findet Doppelungen. Häufige Beispiele sind getrennte Incident-Verfahren für Service und Sicherheit. Fragen Sie, wer sie im Gleichlauf hält. Wählen Sie anschließend eine Praktik, die wir einmal beschreiben und jeder Anforderung zuordnen.

**Wie sähe die schlankeste Version des Service-Managements für uns aus?**
Das prüft, ob wir überbauen. Rechnen Sie mit Druck, jede Praktik einzuführen. Fragen Sie, welche zwei oder drei Praktiken den meisten Schmerz beseitigen würden. Wählen Sie anschließend diese und schieben Sie den Rest auf.

**Welche Belege verlangen unsere Audits, und könnten unsere Werkzeuge sie automatisch erzeugen?**
Audits sind Kosten des Geschäfts. Teams stellen Belege oft jedes Jahr von Hand zusammen. Fragen Sie, was der Auditor tatsächlich prüft. Wählen Sie anschließend einen Datensatz, der aus der Pipeline oder dem Ticket-Werkzeug erzeugt wird.

**Woran würden wir erkennen, dass eine Zertifizierung unseren Service verbessert hat und nicht nur unseren Papierkram?**
Das verknüpft Zertifizierung mit Ergebnissen. Rechnen Sie mit ehrlichen Antworten, dass es schwer zu sagen ist. Fragen Sie, was wir vorher und nachher messen würden, etwa die Zeit bis zur Wiederherstellung des Service. Vereinbaren Sie anschließend die Kennzahl und ein Überprüfungsdatum.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein regionales Managed-Services-Unternehmen liefert IT-Support an etwa 60 kleine Praxen. Ein neuer Kunde, eine Klinikgruppe, fragt in einer Ausschreibung, ob das Unternehmen „nach einem anerkannten Service-Management-Standard zertifiziert“ sei. Der Vertriebsleiter nimmt an, damit seien ITIL-Zertifikate gemeint, und listet die Qualifikationen der Techniker auf.

Die Service-Managerin liest die Ausschreibung. Sie nennt ISO/IEC 20000-1 ausdrücklich. Sie erklärt, dass einzelne ITIL-Zertifikate die Anforderung nicht erfüllen, da eine Organisation auditiert werden muss. Sie vergleicht die Anforderungen des Standards mit dem, was das Unternehmen tut. Incident- und Change-Bearbeitung sind solide und dokumentiert, aber es gibt keine formale Managementbewertung, keine dokumentierte Berichterstattung zu Service-Levels, und Lieferantenvereinbarungen sind uneinheitlich abgelegt.

Das Unternehmen beschließt, bedingt zu bieten, mit einem Plan, die Zertifizierung binnen eines Jahres zu erreichen. Es verfasst ein einfaches Dokument zum Service-Management-System, plant eine vierteljährliche Managementbewertung, die auch die Informationssicherheit abdeckt, und richtet das Ticket-Werkzeug so ein, dass es die Berichte erzeugt, die ein Auditor will. Für seine kleinsten Praxen wählt es einen leichteren Weg auf Basis einiger Kernpraktiken, damit der Aufwand sie nicht überfordert.

Was sich ändert: Das Unternehmen kann die Ausschreibung ehrlich beantworten und hat einen Plan. Was schwierig bleibt: Der Zeitplan des Audits hängt von der Verfügbarkeit einer akkreditierten Stelle ab, die Berichte spiegeln die realen Prioritäten der Praxen noch nicht, und das Team ist unsicher, wie viel Dokumentation genug ist. Sie vereinbaren, früh die Zertifizierungsstelle um Rat zu fragen und die Dokumente kurz zu halten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Rechnen Sie mit Fragen von Auditoren zu Aufzeichnungen und Kontrollen und gestalten Sie Ihre Pipeline so, dass sie diese erzeugt. Lernen Sie, welche Ihrer Praktiken einer Anforderung eines Standards dienen, damit Sie erklären können, warum eine Kontrolle existiert.

### Service- und Betriebsteams

Halten Sie Verfahren korrekt und führen Sie Aufzeichnungen während der Arbeit, damit Belege ohne zusätzlichen Aufwand entstehen. Tragen Sie mit realen Daten zu Managementbewertungen bei und sagen Sie der verantwortlichen Person, wenn eine Anforderung umständlich zu erfüllen ist.

### Führung und Governance

Entscheiden Sie, welche Zertifizierungen ihre Kosten wert sind, und verlangen Sie für jede die Vertragsklausel oder den Kundenbedarf, der sie begründet. Finanzieren Sie ein einziges Managementsystem statt mehrerer. Verlangen Sie Belege, dass Praktiken wirken, nicht nur, dass Dokumente existieren.

### Kunden und Nutzer

Wenn Sie eine Zertifizierung verlangen, sagen Sie, welchen Standard und welchen Geltungsbereich. Fragen Sie den Anbieter, was das Zertifikat abdeckt, welche Services, Standorte und Zeiträume. Ein Zertifikat ist ein Beleg für ein System, keine Garantie für ein einzelnes Ergebnis.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bauen Sie Praktiken in kleinen Inkrementen auf und erfassen Sie Belege laufend, wobei Beteiligte das System regelmäßig prüfen. Vorsicht: Standards verlangen dokumentierte, wiederholbare Praxis; nutzen Sie „wir sind agil“ nicht, um zu vermeiden zu beschreiben, wie Arbeit kontrolliert wird.

### KI

KI kann helfen, Anforderungen über Standards hinweg zu vergleichen, Zuordnungen zu entwerfen und Audit-Feststellungen zusammenzufassen, wobei eine Person jede am Quelltext prüft. Es gibt inzwischen einen Standard für KI-Managementsysteme (ISO/IEC 42001), ebenso das NIST AI Risk Management Framework; siehe Thema 5.6 — KI-Governance, Risiko und Compliance. Vorsicht: KI kann Klauselnummern oder Anforderungen erfinden; geben Sie ihr daher den Text und bitten Sie sie zu zitieren.

### Automatisierung

Erzeugen Sie Belege aus Pipelines und Werkzeugen, etwa Change-Datensätze, die mit Builds verknüpft sind, planmäßig exportierte Zugriffsüberprüfungen und automatisch erstellte Berichte zu Service-Levels. Vorsicht: Automatisch erzeugte Belege beweisen, dass die Automatisierung lief, nicht dass die Kontrolle wirksam ist; prüfen Sie eine Stichprobe von Hand.

### Analytik

Nutzen Sie Daten, um zu zeigen, dass Praktiken wirken, etwa Zeit bis zur Wiederherstellung des Service und Changes, die Incidents verursachen, und um Audits vorzubereiten, indem Sie Lücken auflisten. Vorsicht: Indikatoren, die an die Zertifizierung gebunden sind, etwa die Zahl geschlossener Audit-Feststellungen, lassen sich manipulieren; siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Persönliche Zertifikate mit Organisationszertifizierung gleichsetzen.** Ein Angebot scheitert an einer Formalie. Lesen Sie die Anforderung und wissen Sie, welche Art von Zertifizierung sie nennt.
- **Zertifizieren, bevor Praxis aufgebaut ist.** Die Organisation besteht ein Audit, und nichts verbessert sich. Bauen und messen Sie zuerst die Praxis.
- **Parallele Systeme pflegen.** Jedes Framework bekommt eigene Dokumente und Verantwortliche. Ordnen Sie einmal zu und teilen Sie.
- **Ein schweres Framework für ein kleines Team nutzen.** Mitarbeitende ertrinken in Dokumentation. Wählen Sie eine leichtere Option oder einige Praktiken.
- **Zusammenfassungen als Standard zitieren.** Eine Anforderung wird falsch wiedergegeben. Lesen Sie den Text des Eigentümers und halten Sie die Ausgabe fest.
- **Ein Framework zum Ziel machen.** Compliance ersetzt Ergebnisse. Messen Sie, was Kunden erleben.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Wahl des Frameworks | Aus Gewohnheit oder Mode gewählt | Bedarfe aufgelistet | Wahl an schriftliche Bedarfe und Anforderungen gebunden | Wahl mit Kosten und Nutzen überprüft | Wahl im Unternehmen abgestimmt |
| Managementsystem | Getrennte Dokumente je Framework | Etwas geteilt | Ein System, mehreren Anforderungen zugeordnet | System anhand von Belegen überprüft und verbessert | System über Service, Sicherheit und KI integriert |
| Belege | Vor Audits zusammengestellt | Einige Aufzeichnungen geführt | Aufzeichnungen entstehen durch normale Arbeit | Belegqualität stichprobenartig geprüft | Belege laufend und automatisiert, mit menschlicher Prüfung |
| Quellendisziplin | Zusammenfassungen genutzt | Text des Eigentümers von wenigen gelesen | Ausgaben festgehalten und zitiert | Aktualisierungen verfolgt und umgesetzt | Gemeinsames, datiertes Wissen über Anforderungen |

## Checkliste

- [ ] Wir haben aufgeschrieben, warum wir jedes Framework oder jeden Standard brauchen.
- [ ] Wir wissen, welche Kunden oder Aufsichtsbehörden eine Zertifizierung verlangen und wonach.
- [ ] Wir haben für alles, was wir zitieren, den Text des Eigentümers gelesen und die Ausgabe festgehalten.
- [ ] Wir haben Praktiken Anforderungen einmal zugeordnet, nicht je Framework.
- [ ] Unsere Managementbewertung deckt jeden Standard ab, den wir nutzen.
- [ ] Belege entstehen, wo möglich, durch normale Arbeit.
- [ ] Wir prüfen jährlich, ob sich jede Zertifizierung noch lohnt.
- [ ] Unsere kleinsten Teams haben einen leichteren Weg.

## KI-Prompts

**Vergleichen Sie zwei Anforderungssätze.**

```text
Below is text from requirement set A: [paste clauses]. Below is text from requirement set B: [paste clauses].
Produce a table of overlaps and differences, quoting the exact words of each. Use only the text provided and do not use outside knowledge. Mark any match you are unsure about.
List what you are unsure of.
```

**Entwerfen Sie aus unserer Praktikbeschreibung eine Lückenanalyse.**

```text
Here is a description of how we run [practice, such as incident management]: [paste description]. Here is the requirement text: [paste clauses].
For each clause, say whether the description appears to meet, partly meet, or not address it, quote the words you relied on, and list a question to confirm. Do not give a verdict on certification.
List what you are unsure of.
```

**Bereiten Sie Fragen für eine Zertifizierungsstelle vor.**

```text
We are considering certification to [standard] for [scope]. Our size and context: [describe].
Write twelve questions to ask a certification body about scope, timeline, evidence, cost, and surveillance audits. Avoid assuming answers.
List what you are unsure of.
```

## KI-Skills

- [maturity-models](../../../../skills/maturity-models/SKILL.md): nutzen Sie ihn zur Selbsteinschätzung an einem gewählten Framework, ohne eine Zertifizierung zu unterstellen.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): nutzen Sie ihn, um Belege an Anforderungen zu prüfen.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): nutzen Sie ihn, wenn ein Standard dokumentierte Service-Levels verlangt.

## Wichtige Quellen

- ISO, ISO/IEC 20000-1 (der Standard selbst): die Anforderungen an ein Service-Management-System; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- ISACA, COBIT publications: die Beschreibung der Governance- und Management-Ziele durch den Eigentümer.
- The Open Group, IT4IT standard: die Referenzarchitektur des Eigentümers.
- Wikipedia, „ISO/IEC 20000“ und „COBIT“: neutrale Zusammenfassungen, die auf die Eigentümer verweisen.

## Literaturverzeichnis

1. ISO/IEC 20000 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_20000
2. COBIT — Wikipedia — https://en.wikipedia.org/wiki/COBIT
3. ISACA — Wikipedia — https://en.wikipedia.org/wiki/ISACA
4. FitSM — Wikipedia — https://en.wikipedia.org/wiki/FitSM
5. The Open Group — Wikipedia — https://en.wikipedia.org/wiki/The_Open_Group
6. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
7. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
8. Capability Maturity Model Integration — Wikipedia — https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration
9. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
10. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
