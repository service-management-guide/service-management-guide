# Datengrundlagen und Data Governance

**Gute Analytik und sichere KI beruhen auf Service-Daten, die definiert, verantwortet, korrekt, nachvollziehbar und geschützt sind und nur so lange aufbewahrt werden, wie nötig. Data Governance gibt jedem wichtigen Datensatz eine benannte verantwortliche Person, eine klare Definition, eine Qualitätsprüfung und Regeln für Zugriff und Aufbewahrung.**

## Warum das wichtig ist

Der häufigste Grund, warum eine Analyse enttäuscht, ist nicht die Methode. Es sind die Daten. Ticket-Kategorien wurden letztes Frühjahr geändert, und niemand hielt fest, wann. Zwei Systeme behaupten beide, die Abteilung des Kunden zu führen, und widersprechen sich. Zeitstempel liegen in unterschiedlichen Zeitzonen. Ein Feld, das vollständig aussieht, ist in der Hälfte der Datensätze mit „Sonstiges“ gefüllt. Ein Dashboard zeigt einen Rückgang der Incidents, und die Ursache ist eine Logging-Änderung, nicht besserer Service.

Dieselben Probleme schaden der KI. Ein Modell, das mit falsch etikettierten Tickets trainiert wurde, lernt die Etiketten. Ein Assistent, der auf veralteten Artikeln beruht, zitiert sie. Eine Prognose auf unvollständiger Historie trägt die Lücken fort. Je mehr sich Organisationen auf Analytik und KI stützen, desto weniger sind Qualität, Verantwortung und Schutz der Daten ein technischer Hintergrund und desto mehr ein eigener Service.

Data Governance ist die Praxis, Daten als Vermögenswert zu steuern: zu entscheiden, wer verantwortlich ist, was jeder Begriff bedeutet, wie Qualität geprüft wird, wie Daten fließen und woher sie kamen, wer sie nutzen darf und wann sie gelöscht werden. Wikipedia beschreibt Data governance als die Gesamtsteuerung von Verfügbarkeit, Nutzbarkeit, Integrität und Sicherheit von Daten. Dieses Thema beschreibt sie praxisnah für Service-Management-Daten und zeigt, wie man klein anfängt. Es bildet die Grundlage für Analytik (Thema 7.1 — Analytik für das Service-Management), Messung (Thema 7.3 — Messung und Berichtswesen), Observability (Thema 7.4 — Observability und Telemetrie) und KI (Thema 5.6 — KI-Governance, Risiko und Compliance) und verbindet sich mit Konfigurationsdaten (Thema 4.4 — Konfigurationsmanagement). Es gibt keine Rechtsberatung.

## Kernkonzepte

**Datenbestand (Data Asset).** Ein Datensatz von Wert für die Organisation, etwa die Ticket-Historie, die Konfigurationsdatenbank, Monitoring-Daten, Umfrageergebnisse oder Kostendaten. Wie andere Vermögenswerte hat er eine verantwortliche Person, Kosten, einen Lebenszyklus und Risiken. Siehe Thema 4.1 — Asset-Management.

**Dateneigentümer und Data Steward.** Eine Dateneigentümerin ist rechenschaftspflichtig für einen Datensatz: Zweck, Qualität und wer ihn nutzen darf. Ein Data Steward betreut ihn im Alltag und kümmert sich um Definitionen, Qualitätsprobleme und Zugriffsanfragen. Wikipedia beschreibt Data stewards. In kleinen Teams kann eine Person beide Rollen innehaben. Ohne benannte Menschen behebt niemand Probleme.

**Datendefinitionen und Datenwörterbuch.** Eine klare Aussage, was jedes Feld und jeder Begriff bedeutet, etwa „gelöst“ oder „Major Incident“, mit Berechnung und Quelle. Wikipedia beschreibt Data dictionaries. Definitionen verhindern, dass zwei Teams dasselbe Wort für Verschiedenes nutzen. Halten Sie Definitionsänderungen mit Datum fest, damit Trends gedeutet werden können.

**Metadaten.** Daten über Daten: woher sie kamen, wann sie aktualisiert wurden, wer sie verantwortet, wie sie klassifiziert sind und was sie bedeuten. Wikipedia beschreibt Metadata. Ein Datenkatalog ist ein durchsuchbares Verzeichnis von Datensätzen und ihren Metadaten, das Menschen hilft, Daten zu finden und ihnen zu vertrauen.

**Datenqualität.** Eignung für den Zweck, meist beschrieben durch Dimensionen wie Genauigkeit, Vollständigkeit, Konsistenz, Aktualität und Eindeutigkeit. Wikipedia beschreibt Data quality. Qualität ist relativ zur Nutzung: Eine Ticket-Kategorie, die für einen Monatstrend gut genug ist, kann für das Routing zu grob sein. Messen Sie sie an den Feldern, die zählen, und beheben Sie Ursachen an der Quelle. Datenbereinigung (Data cleansing), auf Wikipedia beschrieben, korrigiert Fehler nachträglich und verhindert nicht, dass sie wiederkehren.

**Quellen schlechter Qualität.** Freitextfelder, die verschiedene Menschen unterschiedlich füllen, Standardwerte, die nie geändert werden, Kategorien, die ohne Beschneiden wachsen, manuelle Eingabe, die unter Druck übersprungen wird, Integrationen, die Datensätze verlieren oder duplizieren, und Systemänderungen, die die Bedeutung verändern. Beheben Sie sie mit besseren Formularen, Validierung, Schulung und Überprüfung der Integration, nicht indem Sie Menschen die Schuld geben.

**Herkunft und Nachvollziehbarkeit (Lineage und Provenance).** Eine Aufzeichnung, woher Daten kamen und was auf dem Weg zu einem Bericht oder Modell mit ihnen geschah. Wikipedia beschreibt Data lineage. Wird eine Zahl in Frage gestellt, lässt sie sich mit Lineage zurückverfolgen. Sie zeigt auch, welche Berichte betroffen sind, wenn sich eine Quelle ändert.

**Daten-Pipelines und Integration.** Die Flüsse, die Daten zwischen Systemen bewegen, im Wikipedia-Artikel oft als Extract, Transform, Load (ETL) beschrieben, und Speicher wie Data Warehouses und Data Lakes, die Wikipedia ebenfalls beschreibt. Pipelines brauchen Verantwortliche, Monitoring und Tests wie jedes Produktivsystem. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

**Zeit und Identität.** Zwei Kleinigkeiten verursachen großen Ärger. Zeitstempel brauchen eine einheitliche Zeitzone und ein einheitliches Format, wie die Wikipedia-Artikel zu Timestamps und Time zones nahelegen; gemischte Zonen erzeugen rätselhafte Lücken und Spitzen. Kennungen für Personen, Services und Assets müssen stabil und systemübergreifend geteilt sein, damit sich Datensätze verknüpfen lassen. Master Data Management, auf Wikipedia beschrieben, ist die Disziplin, solche Kerndaten konsistent zu halten.

**Klassifizierung.** Daten nach Sensibilität zu kennzeichnen, etwa öffentlich, intern, vertraulich und streng vertraulich, und jeder Stufe Regeln zuzuordnen. Wikipedia beschreibt Data classification. Service-Daten enthalten oft personenbezogene Informationen und Sicherheitsdetails, die Schutz brauchen.

**Datenschutz.** Personenbezogene Daten sind Informationen, die sich auf eine identifizierbare Person beziehen. Gesetze wie die Datenschutz-Grundverordnung (DSGVO; General Data Protection Regulation, GDPR) der Europäischen Union setzen Regeln zu Zweck, Minimierung, Aufbewahrung und Rechten der Einzelnen; Wikipedia beschreibt Personal data und die GDPR. Datenminimierung (Data minimization), dort beschrieben, heißt, nur zu erheben und aufzubewahren, was man braucht. Techniken wie Pseudonymisierung und Anonymisierung, auf Wikipedia beschrieben, verringern das Risiko, sind aber schwer gut umzusetzen, und schwache Anonymisierung lässt sich umkehren. Holen Sie rechtlichen und datenschutzrechtlichen Rat ein.

**Zugriffskontrolle.** Wer welche Daten sehen oder ändern darf, und warum. Nutzen Sie Rollen, nicht Einzelpersonen, wo möglich, und überprüfen Sie Zugriffe regelmäßig. Siehe Thema 3.13 — Informationssicherheitsmanagement und Thema 3.6 — Service-Request-Management.

**Aufbewahrung und Löschung.** Wie lange Daten aufbewahrt und wie sie vernichtet werden. Behalten Sie, was Sie für Betrieb, Analyse und gesetzliche Pflichten brauchen, und löschen Sie den Rest. Wikipedia beschreibt Data retention. Alte Daten erhöhen Risiko und Kosten, und KI-Systeme können daraus lernen. Prüfen Sie die für Sie geltenden gesetzlichen Aufbewahrungsvorgaben.

**Datensouveränität.** Daten können den Gesetzen des Landes unterliegen, in dem sie gespeichert oder verarbeitet werden. Wikipedia beschreibt Data sovereignty. Cloud- und KI-Services können Daten über Grenzen bewegen; wissen Sie, wohin Ihre gehen.

**Daten in der KI.** Daten für Training, Retrieval oder Prompts brauchen dieselbe Governance, mit besonderer Sorgfalt: Erlaubnis für die Nutzung, Kennzeichnung der Quelle, Prüfungen auf Verzerrung und Drift und Kontrolle darüber, was an externe Services gesendet wird. Siehe Thema 5.1 — KI im Service-Management.

**Governance-Forum und Richtlinie.** Eine kleine Gruppe mit der Befugnis, Standards zu setzen, Konflikte zu lösen und Datenarbeit zu priorisieren, und eine kurze Richtlinie zu Verantwortung, Qualität, Klassifizierung, Zugriff, Aufbewahrung und Nutzung von Daten in der KI. Halten Sie sie leicht und praktisch.

**Wie die Blickwinkel passen.** Data Governance ist die Basis des Analytik- und des KI-Blickwinkels, und auch Automatisierung hängt von ihr ab. Agile Praxis legt nahe, Datenqualität in kleinen Schritten zu verbessern, getrieben von den Fragen, die Menschen tatsächlich beantwortet haben müssen, mit Feedback der Datennutzer.

## Bewährte Praktiken

1. **Beginnen Sie mit den wichtigsten Datensätzen.** Listen Sie die Daten hinter Ihren Schlüsselentscheidungen auf, etwa Tickets, Konfiguration, Monitoring, Umfragen und Kosten. Steuern Sie diese zuerst.
2. **Benennen Sie für jeden eine verantwortliche Person und einen Steward.** Halten Sie sie im Katalog fest, mit Kontaktweg. Machen Sie sie für Qualität und Zugriff rechenschaftspflichtig.
3. **Schreiben Sie Definitionen auf.** Definieren Sie die Hauptbegriffe und -felder in einfacher Sprache, mit Berechnung und Quelle. Halten Sie fest, wann sich Definitionen ändern.
4. **Messen Sie Qualität dort, wo sie zählt.** Wählen Sie einige Felder, die Entscheidungen treiben, definieren Sie Prüfungen und berichten Sie die Ergebnisse an die Verantwortlichen. Verfolgen Sie sie über die Zeit.
5. **Beheben Sie Probleme an der Quelle.** Verbessern Sie Formulare, ergänzen Sie Validierung, vereinfachen Sie Kategorien und beheben Sie Integrationen. Nachträgliche Bereinigung ist ein Notbehelf.
6. **Vereinheitlichen Sie Zeit und Kennungen.** Nutzen Sie einen Zeitstandard und ein Format sowie stabile, geteilte Kennungen für Personen, Services und Assets.
7. **Führen Sie Lineage.** Dokumentieren Sie, woher wichtige Berichte und Modelle ihre Daten beziehen und welche Transformationen gelten. Aktualisieren Sie, wenn sich Quellen ändern.
8. **Klassifizieren und schützen Sie.** Kennzeichnen Sie Daten nach Sensibilität, wenden Sie Zugriffsregeln und Schutz an und überprüfen Sie, wer Zugriff hat. Entfernen Sie personenbezogene Daten, wo sie nicht gebraucht werden.
9. **Legen Sie Aufbewahrung fest und löschen Sie.** Entscheiden Sie, wie lange jeder Datensatz aufbewahrt wird, und löschen oder anonymisieren Sie danach. Prüfen Sie die für Sie geltenden Regeln.
10. **Steuern Sie Daten, die die KI nutzt.** Halten Sie Quellen, Erlaubnisse und Qualität der Daten für Training und Retrieval fest und kontrollieren Sie, was an externe Services geht.

## Fragen für die Diskussion im Team

**Welche Datensätze treiben unsere wichtigsten Entscheidungen, und wer verantwortet jeden?**
Listen Sie sie auf. Rechnen Sie mit Lücken bei der Verantwortung. Benennen Sie anschließend für die drei wichtigsten eine verantwortliche Person und einen Steward.

**Welche Begriffe nutzen wir in verschiedenen Teams unterschiedlich?**
Wählen Sie „gelöst“, „Incident“ oder „Kunde“. Rechnen Sie mit Uneinigkeit. Schreiben Sie anschließend eine Definition auf und wer entscheidet.

**Wann hat eine Definitions- oder Systemänderung einen Trend gebrochen, und haben wir es damals bemerkt?**
Bitten Sie um Beispiele. Rechnen Sie mit „später“. Vereinbaren Sie anschließend ein Änderungsprotokoll für Definitionen und Quellen.

**Wie gut sind unsere Daten in den Feldern, auf die wir uns am meisten verlassen, und woher wissen wir es?**
Nehmen Sie ein Feld, etwa die Kategorie, und ziehen Sie 50 Datensätze als Stichprobe. Rechnen Sie mit Problemen. Wählen Sie anschließend eine Ursache zur Behebung.

**Welche personenbezogenen oder sensiblen Daten halten wir in Service-Systemen, und wie lange bewahren wir sie auf?**
Gehen Sie die wichtigsten Systeme durch. Rechnen Sie mit Überraschungen bei Anhängen und Chat-Protokollen. Beziehen Sie anschließend die Datenschutzbeauftragte ein und vereinbaren Sie eine Aufbewahrungsregel für ein System.

**Welche Daten geben wir an KI-Werkzeuge, und wer hat dem zugestimmt?**
Listen Sie die Nutzungen auf. Rechnen Sie damit, dass manche informell sind. Vereinbaren Sie anschließend eine Regel, was genutzt werden darf, und ein Register der KI-Datennutzungen.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Team für digitale Services einer Nationalbibliothek möchte die Nachfrage prognostizieren und ein Modell zum Routen von Tickets trainieren. Ein Datenanalyst beginnt und stellt fest, dass die Ticket-Historie schwer nutzbar ist. Kategorien wurden zweimal umbenannt, und eine Kategorie „Sonstiges“ enthält 35 Prozent der Tickets. Zeitstempel aus dem alten Werkzeug liegen in Ortszeit, die aus dem neuen in Weltzeit. Das aus dem Personalsystem übernommene Abteilungsfeld weicht bei etwa 8 Prozent der Nutzer von dem im Identitätssystem ab. Ein Monatsbericht zeigt Incidents um ein Viertel fallend, doch der Analyst findet, dass eine Änderung beim Zusammenführen doppelter Incidents den Großteil des Rückgangs erklärt.

Die Service-Leiterin beschließt, Ticket-Daten als gesteuerten Datenbestand zu behandeln. Sie benennt sich selbst als Dateneigentümerin und einen erfahrenen Service-Desk-Analysten als Steward. Ein einseitiges Wörterbuch definiert die 12 Felder, die zählen, einschließlich der Definition von „gelöst“ und des Datums, an dem sie sich änderte. Das Team ordnet die alten Kategorien den neuen zu, kennzeichnet den Bruch in der Historie und ergänzt eine Validierungsregel, die „Sonstiges“ ohne Freitextnotiz verhindert. Ein wöchentlicher Job prüft drei Qualitätsmaße: Anteil der Tickets in „Sonstiges“, Anteil mit fehlender Abteilung und Anteil mit Zeitstempeln außerhalb erwarteter Bereiche. Die Ergebnisse werden für den Desk veröffentlicht.

Die Datenschutzbeauftragte prüft den Datensatz und stellt fest, dass Freitextfelder und Anhänge persönliche Angaben von Mitgliedern der Öffentlichkeit enthalten. Das Team vereinbart, Anhänge aus der Analysekopie zu entfernen, Namen und E-Mail-Adressen im Text zu maskieren, bevor er für die Modellierung genutzt wird, und Tickets nach sieben Jahren zu löschen, im Einklang mit der Aufbewahrungsrichtlinie der Bibliothek. Ein Register führt jede KI-Nutzung von Ticket-Daten und ihre Genehmigung auf.

Was sich ändert: Der Analyst kann die Prognose mit bekanntem Bruch und einer sauberen Reihe bauen, und das Routing-Modell wird mit geprüften Etiketten trainiert. Was schwierig bleibt: Das Maskieren von Freitext ist unvollkommen, und einige persönliche Angaben bleiben; das Personal- und das Identitätssystem widersprechen sich weiter, und die Verantwortlichen dieser Systeme haben nicht zugestimmt, sie abzugleichen; und die Qualitätsprüfungen hängen von wenigen Mitarbeitenden ab. Die Service-Leiterin trägt den Datenwiderspruch dem Chief Information Officer vor und plant, die Prüfungen auf Konfigurationsdaten auszuweiten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Gestalten Sie Logs, Ereignisse und APIs Ihres Produkts mit konsistenten Feldern, Zeitstempeln und Kennungen und dokumentieren Sie sie. Sagen Sie Datennutzern Änderungen im Voraus.

### Service- und Betriebsteams

Erfassen Sie Daten sorgfältig und konsistent und sagen Sie Stewards, wenn es Probleme mit Formularen oder Kategorien gibt. Helfen Sie, Qualität zu prüfen, und führen Sie Aufzeichnungen über Definitionsänderungen.

### Führung und Governance

Benennen Sie Verantwortliche, finanzieren Sie Datenarbeit und verlangen Sie Qualitätsbelege für die Daten hinter Entscheidungen. Setzen Sie Regeln für Datenschutz und KI-Nutzung. Akzeptieren Sie keine Berichte mit undefinierten Begriffen.

### Kunden und Nutzer

Sie sollten wissen, welche Daten über Sie gehalten werden und warum, und danach fragen können. Geben Sie genaue Informationen an und sagen Sie dem Anbieter, wenn Datensätze falsch erscheinen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verbessern Sie Daten in kleinen Schritten, getrieben von realen Fragen: Beheben Sie das Feld, das die nächste Analyse blockiert. Überprüfen Sie Datenqualität regelmäßig mit ihren Nutzern. Vorsicht: Ein mehrjähriges Datenprogramm ohne sichtbare Ergebnisse verliert Unterstützung; liefern Sie kleine, nützliche Fortschritte.

### KI

KI kann helfen, Qualitätsprobleme zu finden, Daten zu klassifizieren, Definitionen vorzuschlagen und persönliche Angaben zu maskieren, unter Prüfung. Von der KI genutzte Daten brauchen eigene Governance: Quelle, Erlaubnis, Qualität und Prüfungen auf Drift. Vorsicht: KI-basiertes Maskieren kann personenbezogene Daten übersehen; testen Sie es und behalten Sie menschliche Prüfung für sensible Datensätze. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie Qualitätsprüfungen, Lineage-Erfassung, Klassifizierungsetiketten, Aufbewahrungsregeln und Zugriffsüberprüfungen, mit Verantwortlichen für Ausnahmen. Vorsicht: Automatisierte Bereinigung kann Daten still verändern; protokollieren Sie Änderungen und behalten Sie Originale, wo erforderlich. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Messen Sie Qualität wichtiger Felder, Vollständigkeit, Aktualität, Anteil der Datensätze mit Verantwortlichen und Definitionen und durch Datenprobleme verursachte Incidents. Vorsicht: Ein einzelner Qualitätswert kann schwere Mängel in einem Feld verbergen; berichten Sie nach Feld und Nutzung. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Keine verantwortliche Person.** Probleme bleiben bestehen. Benennen Sie Eigentümer und Steward.
- **Undefinierte Begriffe.** Teams streiten über Zahlen. Schreiben Sie Definitionen und halten Sie Änderungen fest.
- **Qualität einmal geprüft.** Daten verfallen. Überwachen Sie Schlüsselfelder fortlaufend.
- **Bereinigung als Lösung.** Fehler kehren wieder. Beheben Sie die Quelle.
- **Gemischte Zeitzonen und Kennungen.** Datensätze lassen sich nicht verbinden oder ordnen. Vereinheitlichen Sie.
- **Alles behalten.** Risiko und Kosten wachsen. Legen Sie Aufbewahrung fest und löschen Sie.
- **Ungesteuerte KI-Datennutzung.** Sensible oder schlechte Daten erreichen Modelle. Registrieren und überprüfen Sie Nutzungen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Verantwortung und Definitionen | Unbekannt | Verantwortliche für Hauptdatensätze | Verantwortliche, Stewards, Wörterbuch und Katalog | Definitionen und Änderungen gesteuert | Governance über Teams und Partner koordiniert |
| Qualität | Unbekannt | Stichprobenprüfungen | Schlüsselfelder regelmäßig gemessen | Qualitätsverbesserungen bis zu Quellen verfolgt | Qualität laufend mit Automatisierung gesichert |
| Schutz | Ad hoc | Grundlegende Zugriffsregeln | Regeln für Klassifizierung, Zugriff und Aufbewahrung | Compliance überwacht und auditiert | Schutz in Pipelines und Werkzeuge eingebaut |
| Nutzung in der KI | Nicht erfasst | Bewusstsein | Register und Regeln für KI-Datennutzung | Nutzung überprüft und auf Verzerrung und Drift getestet | KI-Daten über Systeme und Lieferanten gesteuert |

## Checkliste

- [ ] Unsere wichtigsten Datensätze haben benannte Verantwortliche und Stewards.
- [ ] Schlüsselbegriffe und -felder sind schriftlich definiert, mit Änderungsdaten.
- [ ] Wir messen Qualität an den Feldern, die Entscheidungen treiben.
- [ ] Wir beheben Qualitätsprobleme an der Quelle.
- [ ] Zeitzonen, Formate und Kennungen sind vereinheitlicht.
- [ ] Wir wissen, woher wichtige Berichte ihre Daten beziehen (Lineage).
- [ ] Daten sind klassifiziert, Zugriff ist kontrolliert, und Aufbewahrungsregeln existieren.
- [ ] Ein Register hält fest, welche Daten die KI nutzt und wer zugestimmt hat.

## KI-Prompts

**Erstellen Sie ein Profil eines Datensatzes.**

```text
Here is a sample of a dataset with field names, identifiers removed: [paste, 50–100 rows].
For each field, give the apparent meaning, type, share of missing or placeholder values, odd values, and a question for the data owner. Do not draw business conclusions.
List what you are unsure of.
```

**Entwerfen Sie einen Wörterbucheintrag.**

```text
Field: [name]. What I know about it: [source, how it is filled, how it is used].
Draft a dictionary entry with: plain-language definition, allowed values, how it is calculated or entered, source system, owner (only if stated), known issues, and date of last change (only if stated). Mark each item not given as [missing].
List what you are unsure of.
```

**Finden Sie personenbezogene Daten in Freitext zur Prüfung.**

```text
Here is a sample of ticket free text, already partially masked: [paste].
List items that look like personal data (names, emails, phone numbers, addresses, identifiers) that remain, quoting the exact text, and suggest categories of rules to catch them. Do not guess whether any is real.
List what you are unsure of.
```

## KI-Skills

- [data-governance](../../../../skills/data-governance/SKILL.md): nutzen Sie ihn, um Verantwortung, Definitionen und Regeln für Daten festzulegen.
- [data-quality](../../../../skills/data-quality/SKILL.md): nutzen Sie ihn, um Qualität an Schlüsselfeldern zu definieren und zu prüfen.
- [data-pipeline](../../../../skills/data-pipeline/SKILL.md): nutzen Sie ihn, um Datenflüsse zu gestalten und zu dokumentieren.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): nutzen Sie ihn, um Datenschutzfragen für Ihre Rechtsberatung aufzubereiten.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): nutzen Sie ihn, um Verantwortung und Stewardship zuzuweisen.

## Wichtige Quellen

- DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*: eine breite Referenz zu Datenmanagement und Governance.
- ISO/IEC 25012, Datenqualitätsmodell: ein Standardsatz von Datenqualitätsmerkmalen; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- Wikipedia, „Data governance“ und „Data quality“: Überblicke über die Praxis und ihre Dimensionen.
- Wikipedia, „General Data Protection Regulation“: Hintergrund zu einem wichtigen Rechtsrahmen (keine Rechtsberatung).

## Literaturverzeichnis

1. Data governance — Wikipedia — https://en.wikipedia.org/wiki/Data_governance
2. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
3. Data steward — Wikipedia — https://en.wikipedia.org/wiki/Data_steward
4. Data dictionary — Wikipedia — https://en.wikipedia.org/wiki/Data_dictionary
5. Metadata — Wikipedia — https://en.wikipedia.org/wiki/Metadata
6. Data lineage — Wikipedia — https://en.wikipedia.org/wiki/Data_lineage
7. Data cleansing — Wikipedia — https://en.wikipedia.org/wiki/Data_cleansing
8. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
9. Data classification — Wikipedia — https://en.wikipedia.org/wiki/Data_classification
10. Personal data — Wikipedia — https://en.wikipedia.org/wiki/Personal_data
11. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
12. Data retention — Wikipedia — https://en.wikipedia.org/wiki/Data_retention
