# Governance, Risiko und Compliance

**Governance gibt Richtung und Verantwortlichkeit vor, Risikomanagement entscheidet, was bei Unsicherheit zu tun ist, und Compliance zeigt, dass Pflichten erfüllt werden. In Continuous Delivery funktionieren sie am besten als in die Arbeit eingebaute Leitplanken, mit Risikoverantwortlichen, die entscheiden, Pipelines, die Belege erzeugen, und Audits, die betrachten, wie gut Kontrollen wirken, nicht wie viele Dokumente existieren.**

## Warum das wichtig ist

Wenige Wörter in der Technik provozieren so zuverlässig ein Seufzen wie „Governance“. Es ruft Gremien, Formulare und Genehmigungen auf, die eintreffen, nachdem die Entscheidung gefallen ist. In vielen Organisationen ist das Seufzen verdient. Governance ist zu einer Schicht Papierkram über der Arbeit geworden, verantwortet von Menschen, die sie nicht tun, und gemessen an Artefakten statt an Ergebnissen.

Doch der Bedarf ist real. Organisationen halten das Geld, die Gesundheitsdaten und das Vertrauen anderer Menschen. Aufsichtsbehörden, Kunden und Aufsichtsräte verlangen Belege, dass damit verantwortungsvoll umgegangen wird. Services scheitern auf Weisen, die Menschen schaden, und jemand muss rechenschaftspflichtig sein. Ohne Governance entscheidet, wer am lautesten ist, Risiken werden von Menschen akzeptiert, die nicht wissen, dass sie sie akzeptiert haben, und Compliance wird bei einem Audit entdeckt.

Der Weg, beides zu versöhnen, ist, zu ändern, wie Governance aussieht. Statt Schranken am Ende bietet sie Leitplanken am Anfang: klare Regeln, was erlaubt ist, in die Werkzeuge eingebaut, sodass der sichere Weg der leichte ist. Statt nachträglich erzeugtem Papierkram nutzt sie Belege, die die Arbeit selbst erzeugt, etwa Pipeline-Aufzeichnungen. Statt einer Genehmigung für alle Risiken passt sie die Prüftiefe an die Risikohöhe an und legt Entscheidungen zu denen, die sie verstehen. Wikipedia beschreibt Governance, Risk, and Compliance (GRC) als integrierten Ansatz für diese drei. Dieses Thema erklärt die Ideen und wie man sie im Service-Management anwendet, auch in regulierten Umfeldern. Es gibt keine Rechtsberatung, und Regeln unterscheiden sich nach Land und Branche. Es baut auf Change Enablement (Thema 3.4 — Change Enablement), Pipelines (Thema 6.4 — Pipelines und automatisierte Changes), Informationssicherheit (Thema 3.13 — Informationssicherheitsmanagement) und KI-Governance (Thema 5.6 — KI-Governance, Risiko und Compliance) auf.

## Kernkonzepte

**Governance.** Das System, durch das eine Organisation geleitet und kontrolliert wird. Wikipedia beschreibt Corporate governance als die Mechanismen, Prozesse und Beziehungen, durch die Organisationen kontrolliert und betrieben werden. In ITIL 4 ist Governance eine Komponente des Service-Wertschöpfungssystems, die lenkt, bewertet und überwacht; siehe Thema 1.4 — Das Service-Wertschöpfungssystem. Sie existiert auf mehreren Ebenen, vom Vorstand bis zum Team.

**Risiko.** Die Auswirkung von Unsicherheit auf Ziele. Risikomanagement identifiziert, bewertet, behandelt und überwacht Risiken. Wikipedia beschreibt Risk management und internationale Leitlinien wie ISO 31000. Ein Risiko ist eine Möglichkeit, keine Gewissheit, und hat eine Eintrittswahrscheinlichkeit und eine Auswirkung.

**Risikoregister.** Eine Aufzeichnung von Risiken, ihren Verantwortlichen, Bewertungen, Behandlungen und ihrem Status. Wikipedia beschreibt Risk registers. Siehe den Skill risk-register in diesem Leitfaden. Ein Register ist ein Arbeitswerkzeug; wird es nur vor Audits aktualisiert, ist es Dekoration.

**Risikoappetit und Risikotoleranz.** Wie viel Risiko die Organisation bereit ist, bei der Verfolgung ihrer Ziele zu akzeptieren, festgelegt von denen, die steuern. Wikipedia beschreibt Risk appetite. Er sagt Teams, wie weit sie ohne Eskalation gehen können. Ohne ihn ist jede Entscheidung entweder zu vorsichtig oder ein unbemerktes Glücksspiel.

**Risikobehandlung.** Vier grundlegende Reaktionen: das Risiko durch Kontrollen verringern, es wissentlich akzeptieren, es übertragen, etwa durch Versicherung oder Vertrag, oder es vermeiden, indem man die Tätigkeit unterlässt. Halten Sie die Wahl fest und wer sie getroffen hat. Akzeptanz per Voreinstellung ist keine Entscheidung.

**Compliance.** Pflichten aus Gesetzen, Vorschriften, Verträgen, Standards und internen Richtlinien erfüllen. Wikipedia beschreibt Regulatory compliance. Beispiele sind Datenschutzgesetze wie die Datenschutz-Grundverordnung (DSGVO; General Data Protection Regulation), Gesetze zur Finanzberichterstattung wie der Sarbanes–Oxley Act, Gesundheitsdatenschutzregeln wie HIPAA in den Vereinigten Staaten, Anforderungen der Zahlungsbranche wie PCI DSS und in der Europäischen Union Resilienzvorschriften für Finanzunternehmen (die Verordnung über die digitale operationale Resilienz, Digital Operational Resilience Act) und für wesentliche Dienste (die NIS-2-Richtlinie), die Wikipedia alle beschreibt. Pflichten unterscheiden sich nach Ort und Branche. Ermitteln Sie Ihre mit fachkundigem Rat.

**Kontrollen.** Maßnahmen, die Risiko verringern oder Compliance sicherstellen: präventiv (ein Problem verhindern), detektiv (es finden) und korrektiv (es beheben). Sie können technisch sein, etwa eine Zugriffsbeschränkung, verfahrensmäßig, etwa eine Prüfung, oder organisatorisch, etwa Funktionstrennung, die Wikipedia beschreibt. Rahmenwerke für interne Kontrolle, etwa das des Committee of Sponsoring Organizations (COSO), ordnen sie; Wikipedia beschreibt Internal control. Eine Kontrolle, die nicht getestet wird, wirkt womöglich nicht.

**Leitplanken statt Schranken.** Eine Schranke stoppt Arbeit, bis jemand genehmigt. Eine Leitplanke ist eine Grenze, die Arbeit sicher hält, ohne sie zu stoppen, etwa eine Richtlinienprüfung in der Pipeline, die einen öffentlichen Speicher-Bucket blockiert. Leitplanken sind schnell und einheitlich; Schranken sind langsam und uneinheitlich. Nutzen Sie Schranken nur dort, wo ein menschliches Urteil über Risiko nötig ist. Siehe Thema 3.4 — Change Enablement.

**Richtlinie (Policy).** Eine Absichtserklärung und Regeln. Wikipedia beschreibt Policy allgemein. Gute Richtlinien sind kurz, sagen, was gefordert ist und warum, und sind so geschrieben, dass Menschen ihnen folgen können. Als Code geschriebene, automatisch geprüfte Richtlinien verbinden Regel und Durchsetzung.

**Belege.** Aufzeichnungen, die zeigen, dass eine Kontrolle gewirkt hat: Logs, Prüfungen, Testergebnisse, Genehmigungen. Wikipedia beschreibt Audit trails und Evidence. Belege, die die Arbeit automatisch erzeugt, etwa die Aufzeichnung jedes Pipeline-Laufs, sind billiger und verlässlicher als Belege, die für ein Audit zusammengestellt werden. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

**Audit und Absicherung (Assurance).** Unabhängige Prüfung, ob Kontrollen und Prozesse funktionieren. Wikipedia beschreibt Audit. Interne Revision, externe Prüfung und Audits durch Kunden oder Aufsichtsbehörden unterscheiden sich im Zweck. Wikipedia beschreibt das „Three lines“-Modell (Drei-Linien-Modell), in dem das Management Risiko und Kontrolle verantwortet (erste Linie), Risiko- und Compliance-Funktionen überwachen (zweite Linie) und die interne Revision unabhängige Absicherung gibt (dritte Linie). Testatberichte, etwa die System-and-Organization-Controls-Berichte (SOC), die Wikipedia beschreibt, geben Kunden Sicherheit über die Kontrollen eines Anbieters.

**Betrieb in regulierten Branchen.** Banken, Krankenhäuser, Versicherer und öffentliche Stellen unterliegen detaillierten Anforderungen und Aufsicht. Continuous Delivery ist in solchen Umfeldern möglich, wenn Kontrollen den Anforderungen zugeordnet und Belege verlässlich erzeugt werden. Beziehen Sie die Aufsicht früh ein und erklären Sie, wie die Pipeline den Sinn jeder Kontrolle erfüllt.

**Risiko durch Dritte und Lieferkette.** Pflichten erstrecken sich auf Lieferanten und die Software, die Sie nutzen. Siehe Thema 3.14 — Lieferantenmanagement und Thema 4.2 — Software-Asset-Management.

**Risikokultur.** Wie Menschen über Risiko denken und sprechen. Eine Kultur, in der Menschen Probleme ohne Schuldzuweisung melden können und Führungskräfte schlechte Nachrichten akzeptieren, findet Risiken früh. Siehe Thema 8.3 — Organisatorischer Wandel und Akzeptanz.

**Risiken von KI und Automatisierung.** Neue Technik fügt Risiken hinzu, etwa Automatisierung, die im großen Maßstab handelt, und KI-Systeme, die verzerrte oder falsche Ausgaben erzeugen. Sie brauchen Verantwortliche, Bewertungen und Kontrollen im selben Register wie andere Risiken. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance und Thema 6.1 — Automatisierungsstrategie.

**Wie die Blickwinkel passen.** GRC ist die Kontrollschicht um die anderen Blickwinkel. Agile Praxis legt verhältnismäßige, schnelle, kollaborative Governance nahe, mit Risiko- und Compliance-Fachleuten in den Teams. Automatisierung liefert Leitplanken und Belege. Analytik überwacht die Wirksamkeit von Kontrollen. KI ist selbst Gegenstand der Governance.

## Bewährte Praktiken

1. **Legen Sie Richtung und Appetit klar fest.** Sagen Sie, was die Organisation tun und nicht tun wird und wie viel Risiko sie in Schlüsselbereichen akzeptiert. Halten Sie diese Aussagen kurz und für Teams zugänglich.
2. **Legen Sie Risikoentscheidungen zu Risikoverantwortlichen.** Benennen Sie für jedes wesentliche Risiko eine verantwortliche Person, die es versteht und Befugnis hat. Eskalieren Sie nach definierten Schwellen, nicht aus Gewohnheit.
3. **Führen Sie ein lebendiges Risikoregister.** Erfassen Sie Risiken mit Verantwortlichen, Bewertungen, Behandlungen und Überprüfungsdaten und aktualisieren Sie es, wenn sich etwas ändert. Verknüpfen Sie Risiken mit Services und Kontrollen.
4. **Passen Sie die Prüfung an das Risiko an.** Nutzen Sie leichte, automatisierte Prüfungen für risikoarme Changes und tiefere menschliche Prüfung für riskante. Veröffentlichen Sie die Kriterien.
5. **Bauen Sie Leitplanken in die Werkzeuge ein.** Legen Sie Regeln als Richtlinienprüfungen in Pipeline und Plattformen ab, damit der sichere Weg der leichte ist. Nutzen Sie Schranken sparsam.
6. **Erzeugen Sie Belege aus der Arbeit.** Erfassen Sie Aufzeichnungen zu Prüfungen, Tests, Genehmigungen und Deployments automatisch und speichern Sie sie dort, wo die Betroffenen sie nicht verändern können.
7. **Ordnen Sie Kontrollen den Anforderungen einmal zu.** Führen Sie einen einzigen Kontrollsatz, zugeordnet zu den Standards und Gesetzen, die für Sie gelten, statt getrennter Dokumente für jeden. Siehe Thema 1.8 — Frameworks und Standards des Service-Managements.
8. **Testen Sie, dass Kontrollen wirken.** Prüfen Sie Aufzeichnungen stichprobenartig, führen Sie Übungen durch und wiederholen Sie Kontrollen. Beheben Sie die, die nicht wirken, und streichen Sie die, die Kosten verursachen, ohne Risiko zu senken.
9. **Arbeiten Sie früh mit Prüfern und Aufsicht zusammen.** Erklären Sie Ihren Ansatz, fragen Sie, welche Belege sie akzeptieren, und laden Sie sie ein, die Pipeline anzusehen. Überraschungen bei Audits sind teuer.
10. **Bauen Sie eine Kultur ehrlichen Berichtens auf.** Machen Sie es sicher, Risiken, Beinahe-Vorfälle und Fehler zu melden, und antworten Sie mit Handeln. Verfolgen Sie, wie viele Probleme die erste Linie selbst findet.

## Fragen für die Diskussion im Team

**Welche unserer Governance-Schritte haben im letzten Jahr eine Entscheidung verändert, und welche haben nur Verzögerung hinzugefügt?**
Bitten Sie um Belege. Rechnen Sie damit, dass einige Schritte keine aufgezeichnete Wirkung haben. Wählen Sie anschließend einen zum Automatisieren oder Entfernen, mit Zustimmung der Risikoverantwortlichen.

**Wer verantwortet jedes unserer zehn wichtigsten Risiken, und wann wurde es zuletzt überprüft?**
Sehen Sie sich das Register an. Rechnen Sie mit Lücken und veralteten Einträgen. Weisen Sie anschließend Verantwortliche und Überprüfungsdaten zu.

**Was würde unser Prüfer als Beleg für eine Kontrolle akzeptieren, und könnten unsere Werkzeuge ihn automatisch erzeugen?**
Fragen Sie den Prüfer. Rechnen Sie mit mehr Flexibilität als angenommen. Wählen Sie anschließend eine Kontrolle und erzeugen Sie ihren Beleg aus der Pipeline.

**Wo akzeptieren wir Risiko per Voreinstellung, und wer wäre überrascht, das zu hören?**
Denken Sie an alte Systeme, bekannte Schwachstellen und aufgeschobene Korrekturen. Rechnen Sie mit unbequemen Beispielen. Halten Sie anschließend für die drei wichtigsten ausdrückliche Entscheidungen fest.

**Welche Vorschriften und Verträge gelten für unsere Services, und wie bilden unsere Kontrollen sie ab?**
Listen Sie sie mit Rechts- und Compliance-Beratern auf. Rechnen Sie mit einer unvollständigen Zuordnung. Bauen Sie anschließend für einen Service eine einheitliche Kontrollzuordnung.

**Wie steuern wir KI und Automatisierung genauso wie andere Risiken, und wo sind wir uneinheitlich?**
Vergleichen Sie die Register und Prüfungen. Rechnen Sie damit, dass KI außerhalb steht. Nehmen Sie anschließend KI-Nutzungen in das Hauptregister auf.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Team der Retail-Plattform einer Regionalbank möchte täglich ausliefern. Die Risikofunktion der Bank verlangt für alle Produktionsänderungen einen Change-Advisory-Prozess mit einem Formular, drei Genehmigungen und einer wöchentlichen Besprechung. Das Plattform-Team nennt es Theater, und die Risikofunktion verweist auf zwei Incidents im letzten Jahr, die durch ungeprüfte Changes verursacht wurden.

Der Leiter des operationellen Risikos und der Plattform-Leiter vereinbaren, die Change-Kontrollen der Bank ihren Zwecken zuzuordnen. Die Kontrollen existieren, um sicherzustellen, dass Changes von einer kompetenten zweiten Person geprüft, getestet, von einer rechenschaftspflichtigen verantwortlichen Person autorisiert, nachvollziehbar und umkehrbar sind. Die Pipeline kann die meisten davon liefern: eine verpflichtende zweite prüfende Person, automatisierte Tests, eine vom Product Owner erfasste Autorisierung für risikobehaftete Changes, eine vollständige Aufzeichnung und automatischen Rollback. Für die riskantesten Changes, etwa an der Zahlungsberechnung, bleibt die wöchentliche Besprechung bestehen, mit einer kleineren Gruppe.

Sie vereinbaren eine Risikoappetit-Erklärung für Changes: Routine-Changes an digitalen Kanälen sind risikoarm und von Pipeline-Kontrollen abgedeckt; Changes an den Kern-Buchungssystemen sind riskant und brauchen menschliche Genehmigung. Die Belege der Pipeline gehen in einen unveränderlichen Speicher, und die interne Revision prüft vierteljährlich 40 Changes stichprobenartig. Der externe Prüfer und die Aufsicht der Aufsichtsbehörde werden über den Ansatz informiert und bekommen die Pipeline-Aufzeichnungen gezeigt. Die Aufsicht bittet um eine monatliche Zusammenfassung der Ausnahmen und vereinbart, die Regelung nach sechs Monaten zu überprüfen.

Nach zwei Quartalen ist die Change-Fehlerrate niedriger als zuvor, die Durchlaufzeit für Routine-Changes sinkt von neun Tagen auf einen, und die Revision findet die Belege für 39 von 40 geprüften Changes vollständig; bei dem anderen fehlt wegen einer Fehlkonfiguration der Pipeline die Aufzeichnung der prüfenden Person, was behoben wird. Die Risikofunktion nimmt außerdem die KI-Nutzungen der Bank auf, die außerhalb des Registers gestanden hatten, mit Verantwortlichen und Bewertungen.

Was sich ändert: Risiko und Engineering teilen eine Sicht auf Kontrollen, und tägliche Auslieferung ist für die risikoarme Klasse erlaubt. Was schwierig bleibt: Die Kern-Buchungssysteme können automatisierte Tests nicht leicht ausführen und behalten die wöchentliche Besprechung; die Regel der zweiten prüfenden Person belastet kleine Teams; und die Anforderungen der Aufsicht an das Beleg-Format unterscheiden sich von dem der Pipeline, was Übersetzungsarbeit erfordert. Der Risikoleiter richtet eine vierteljährliche Überprüfung der Appetit-Erklärung ein und bittet um Mittel für die Tests der Kern-Buchungssysteme.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Kennen Sie die Risiken und Pflichten, die für Ihren Service gelten, bauen Sie Leitplanken in Ihre Pipeline ein und erzeugen Sie Belege bei der Arbeit. Sprechen Sie früh mit Risiko- und Compliance-Kolleginnen und -Kollegen und beziehen Sie sie in den Entwurf ein.

### Service- und Betriebsteams

Betreiben Sie die Kontrollen: Prüfungen, Zugriff, Monitoring und Incident-Behandlung. Halten Sie fest, was Sie tun, melden Sie Beinahe-Vorfälle und weisen Sie auf Kontrollen hin, die nicht wirken oder mehr kosten, als sie bringen.

### Führung und Governance

Geben Sie Richtung und Appetit vor, benennen Sie Risikoverantwortliche und finanzieren Sie Kontrollen, die wirken. Verlangen Sie Belege und Testergebnisse, keine Dokumentenmengen. Machen Sie es sicher, schlechte Nachrichten zu melden.

### Kunden und Nutzer

Sie verlassen sich darauf, dass Anbieter Risiken managen, die Sie betreffen. Fragen Sie, welche Absicherung sie geben können, etwa Prüfberichte, und sagen Sie ihnen, welche Anforderungen für Sie gelten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Binden Sie Risiko- und Compliance-Fachleute in Teams ein, überprüfen Sie Kontrollen in kurzen Zyklen und verbessern Sie sie mit Feedback. Vorsicht: Verwechseln Sie fehlenden Papierkram nicht mit fehlender Kontrolle; zeigen Sie, wie jede Kontrolle erfüllt wird.

### KI

KI kann helfen, Richtlinien zu entwerfen, Kontrollen Anforderungen zuzuordnen, Prüfungsfeststellungen zusammenzufassen und Belege zu durchsuchen, mit rechtlicher und menschlicher Prüfung. KI-Nutzungen selbst gehören in das Risikoregister. Vorsicht: Eine KI-Zusammenfassung einer Vorschrift kann falsch sein; verlassen Sie sich für Compliance nie darauf. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie Richtlinienprüfungen, Beleg-Erfassung, Zugriffsüberprüfungen und Kontrollüberwachung, mit Ausnahmen, die an Verantwortliche geleitet werden. Vorsicht: Eine automatisierte Kontrolle prüft nur, wofür sie gebaut wurde; testen Sie sie und prüfen Sie Ergebnisse stichprobenartig von Hand. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Verfolgen Sie Kontrolltestergebnisse, Ausnahmen, Risikobewertungen über die Zeit, Prüfungsfeststellungen und Zeit bis zum Abschluss sowie Incidents, die mit Kontrollversagen zusammenhängen. Vorsicht: Zählungen von Kontrollen oder abgeschlossenen Bewertungen belohnen Papierkram; messen Sie Wirksamkeit und Ergebnisse. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Governance als Schranken und Papier.** Verzögerung ohne Sicherheit. Bauen Sie Leitplanken in Werkzeuge ein und erzeugen Sie Belege automatisch.
- **Risikoakzeptanz per Voreinstellung.** Niemand hat entschieden. Halten Sie ausdrückliche Entscheidungen mit Verantwortlichen fest.
- **Eine Prüfung für alle Risiken.** Risikoarmes wartet, Riskantes wird gehetzt. Passen Sie die Prüfung an das Risiko an.
- **Für Audits zusammengestellte Belege.** Kosten und Fehler steigen. Erfassen Sie sie, während die Arbeit geschieht.
- **Getrennte Dokumente je Standard.** Duplizierung und Auseinanderlaufen. Ordnen Sie einen Kontrollsatz vielen Anforderungen zu.
- **Ungetestete Kontrollen.** Sie versagen still. Testen und Stichproben ziehen.
- **Angst vor dem Melden.** Risiken bleiben verborgen. Antworten Sie auf schlechte Nachrichten mit Handeln.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Richtung und Appetit | Unausgesprochen | Informell | Schriftlicher Appetit und Entscheidungsrechte | Appetit an Ergebnissen überprüft | Appetit über Unternehmen und Partner koordiniert |
| Risikomanagement | Reaktiv | Register existiert | Verantwortetes, aktuelles Register, mit Services und Kontrollen verknüpft | Risiken an Incidents und Tests überprüft | Risiken datenbasiert über Lieferanten und KI gesteuert |
| Kontrollen und Belege | Manuell und per Besprechung | Etwas Automatisierung | Leitplanken in Werkzeugen, Belege aus der Arbeit erzeugt | Kontrollwirksamkeit getestet und stichprobenartig geprüft | Laufende Kontrollüberwachung mit menschlicher Aufsicht |
| Absicherung und Kultur | Überraschungen bei Audits | Auf Audits vorbereitet | Frühe Zusammenarbeit mit Prüfern und Aufsicht | Feststellungen bis zum Abschluss verfolgt | Absicherung in Delivery und Lernen integriert |

## Checkliste

- [ ] Wir haben einen schriftlichen Risikoappetit und Entscheidungsrechte.
- [ ] Jedes wesentliche Risiko hat eine verantwortliche Person und ein Überprüfungsdatum.
- [ ] Der Prüfaufwand entspricht dem Risiko, und die Kriterien sind veröffentlicht.
- [ ] Kontrollen sind den geltenden Standards und Gesetzen einmal zugeordnet.
- [ ] Leitplanken sind in Pipelines und Plattformen eingebaut.
- [ ] Belege werden automatisch erzeugt und sicher gespeichert.
- [ ] Wir testen Kontrollen und prüfen Aufzeichnungen stichprobenartig.
- [ ] Risiken von KI und Automatisierung stehen im selben Register.

## KI-Prompts

**Ordnen Sie eine Kontrolle ihrem Zweck und Beleg zu.**

```text
Here is a control as written: [paste]. Here is what our pipeline or tools record: [paste].
State the risk the control appears to address, based only on the text, list what evidence the tools would produce, and what the control requires that the evidence does not show. Do not judge whether it meets any regulation.
List what you are unsure of.
```

**Prüfen Sie ein Risikoregister auf Qualität.**

```text
Here is an extract from our risk register: [paste, sensitive details removed].
List entries without an owner, without a review date, with vague descriptions, or where treatment is "accept" without a stated decision-maker. Quote each. Do not rate the risks.
List what you are unsure of.
```

**Bereiten Sie sich auf die Fragen eines Prüfers vor.**

```text
The audit covers [area]. Here are our relevant controls and evidence: [paste].
List twelve questions an auditor might ask, grouped by control, and for each what evidence we would need to show. Mark questions where our material gives no basis for an answer. Do not state what the auditor will require.
List what you are unsure of.
```

## KI-Skills

- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um Risiken, Verantwortliche und Behandlungen festzuhalten.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): nutzen Sie ihn, um Frühwarnindikatoren zu wählen.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): nutzen Sie ihn, um Kontrollen und Belege zu testen.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): nutzen Sie ihn, um Fragen und Belege für rechtliche und Audit-Prüfung vorzubereiten.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): nutzen Sie ihn, um Entscheidungsrechte und Verantwortlichkeit zu klären.

## Wichtige Quellen

- ISO 31000, Leitlinien zum Risikomanagement: die internationale Orientierung zum Risikomanagement; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- COSO, *Internal Control — Integrated Framework*: ein weit verbreitetes Rahmenwerk für interne Kontrolle.
- Gene Kim und andere, *The DevOps Handbook*: Kapitel zur Integration von Sicherheit, Compliance und Change-Kontrolle in die Pipeline.
- Wikipedia, „Governance, risk, and compliance“ und „Risk management“: Überblicke über die Ideen.

## Literaturverzeichnis

1. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
2. Corporate governance — Wikipedia — https://en.wikipedia.org/wiki/Corporate_governance
3. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
4. Risk register — Wikipedia — https://en.wikipedia.org/wiki/Risk_register
5. Risk appetite — Wikipedia — https://en.wikipedia.org/wiki/Risk_appetite
6. Regulatory compliance — Wikipedia — https://en.wikipedia.org/wiki/Regulatory_compliance
7. Internal control — Wikipedia — https://en.wikipedia.org/wiki/Internal_control
8. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
9. Audit — Wikipedia — https://en.wikipedia.org/wiki/Audit
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. Sarbanes–Oxley Act — Wikipedia — https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act
12. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
