# Service-Level-Management

**Service-Level-Management setzt gemeinsam mit den Menschen, die sich auf Services verlassen, klare, messbare Ziele für diese Services, verfolgt die Leistung gegen diese Ziele und nutzt die Abweichungen zur Verbesserung. Seine modernen Formen ergänzen die traditionelle Service-Level-Vereinbarung um Erlebnis-Level-Vereinbarungen und ingenieurmäßige Ziele.**

## Warum das wichtig ist

Anbieter und Kunden tragen unterschiedliche Bilder davon in sich, was „guter Service“ heißt. Der Anbieter denkt an Verfügbarkeit und geschlossene Tickets. Der Kunde denkt daran, ob er seine Arbeit beenden konnte. Ohne eine vereinbarte Definition können beide aufrichtig und beide unzufrieden sein: Der Anbieter verweist auf einen Bericht, der zeigt, dass jedes Ziel erreicht wurde, und der Kunde auf eine Woche voller Frustration.

Service-Level-Management schließt diese Lücke. Es beginnt ein Gespräch mit dem Kunden darüber, was er braucht, verwandelt die Antwort in messbare Ziele und berichtet darüber so, dass der Kunde es prüfen kann. Das Gespräch zählt mehr als das Dokument. Eine einmal geschriebene und abgelegte Service-Level-Vereinbarung (SLA) gibt falsche Sicherheit; eine, die regelmäßig mit realen Daten und einer ehrlichen Diskussion darüber, was nicht funktioniert, überprüft wird, schafft Vertrauen.

Die moderne Praxis steht auch vor einer Kritik: Ziele auf Grundlage technischer Kennzahlen können alle grün sein, während Nutzer unzufrieden sind. Als Antwort ergänzen Organisationen Kennzahlen zum Erlebnis, etwa Erlebnis-Level-Vereinbarungen (XLAs), und Engineering-Teams setzen Service-Level-Ziele (SLOs) auf Grundlage dessen, was Nutzer bemerken. Dieses Thema erklärt das Vokabular, wie man Ziele setzt und wie man sie nützlich hält. Es verbindet sich mit Verfügbarkeit und Kapazität (Thema 3.11 — Verfügbarkeit, Kapazität und Performance), Lieferantenmanagement (Thema 3.14 — Lieferantenmanagement) und Messung (Thema 7.3 — Messung und Berichtswesen).

## Kernkonzepte

**Service-Level-Vereinbarung (SLA).** In ITIL 4 eine dokumentierte Vereinbarung zwischen einem Service-Anbieter und einem Kunden, die sowohl die benötigten Services als auch das erwartete Service-Niveau benennt. Der Wikipedia-Artikel zu Service-level agreements beschreibt die üblichen Teile: eine Beschreibung des Services, Ziele, Messung, Berichtswesen und was geschieht, wenn Ziele verfehlt werden. SLAs können intern sein, zwischen einem Anbieter und seiner eigenen Organisation, oder extern, in einem kommerziellen Vertrag.

**Service-Level-Ziel (Service Level Target).** Eine konkrete, messbare Zusage, etwa „99,9 Prozent der Anfragen sind binnen zwei Sekunden in einem Kalendermonat abgeschlossen“ oder „auf Incidents der Priorität eins wird binnen 15 Minuten reagiert“. Jedes Ziel legt fest, was gemessen wird, wie, über welchen Zeitraum und unter welchen Bedingungen.

**Service-Level-Ziel (SLO).** Ein Ziel für einen Service-Level-Indikator (SLI), am häufigsten von Engineering-Teams verwendet, als Teil der in Thema 2.6 — Site Reliability Engineering beschriebenen Praxis. SLOs sind meist intern und strenger als das externe SLA, damit das Team Ärger bemerkt, bevor es zu einem Verstoß kommt. Wikipedia beschreibt Service-level objectives.

**Betriebs-Level-Vereinbarung (Operational Level Agreement, OLA).** Eine Vereinbarung zwischen internen Teams, die die Erbringung eines Services für einen Kunden stützt. Zum Beispiel könnte ein Netzwerkteam dem Service-Team Reaktionszeiten zusagen, die ein externes SLA stützen. Wikipedia beschreibt Operational-level agreements.

**Untermauernder Vertrag (Underpinning Contract).** Eine Vereinbarung mit einem externen Lieferanten, die die Erbringung eines Services stützt. Sie sollte mit dem SLA, das sie stützt, übereinstimmen. Verspricht Ihr SLA vier Stunden und erlaubt der Vertrag Ihres Lieferanten acht, ist die Lücke Ihre.

**Erlebnis-Level-Vereinbarung (XLA).** Eine neuere Idee: Vereinbarungen, die sich darauf konzentrieren, wie Nutzer den Service erleben, etwa wie gut er ihnen half, ihre Ziele zu erreichen, statt rein technischer Kennzahlen. XLAs nutzen oft Umfragen, Stimmungsmaße und Beobachtungen neben Systemdaten. Es gibt keine einheitliche Standarddefinition, schreiben Sie daher auf, was Sie meinen. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse.

**Was ein gutes Ziel ausmacht.** Es ist für den Kunden bedeutsam, messbar, auf Belege dafür gestützt, was erreichbar ist, und mit den Menschen vereinbart, die davon abhängen. Es nennt die Messmethode und Ausnahmen, etwa geplante Wartung. Es verspricht nichts, was der Anbieter nicht kontrollieren kann.

**Durchschnitte und Perzentile.** Durchschnitte verbergen die schlimmsten Fälle. Ein Ziel „durchschnittliche Antwortzeit unter einer Sekunde“ kann erfüllt sein, auch wenn jede zehnte Anfrage zehn Sekunden braucht. Perzentile, auf Wikipedia beschrieben, geben ein besseres Bild: „95 Prozent der Anfragen unter zwei Sekunden“. Wählen Sie das Perzentil für das Erlebnis, das Ihnen wichtig ist.

**Verfügbarkeit und Betriebszeit.** Ein häufiges Ziel, ausgedrückt als Prozentsatz der Zeit, in der ein Service nutzbar ist. Der Wikipedia-Artikel zu Availability beschreibt die Berechnung. Sie hängt davon ab, was als „nutzbar“ zählt: Ein Service kann laufen und unbenutzbar sein. Definieren Sie es aus Sicht der Nutzer.

**Vertragsstrafen und Gutschriften.** Viele externe SLAs enthalten Abhilfen, etwa Service-Gutschriften, wenn der Anbieter ein Ziel verfehlt. Sie sind ein Zeichen von Ernsthaftigkeit, aber ein schlechter Ersatz für Service: Eine kleine Gutschrift hilft einem Kunden nicht, dessen Geschäft betroffen war. Der Wikipedia-Artikel zu Liquidated damages beschreibt verwandte Vertragsideen. Prüfen Sie, wie Abhilfen in Ihren Verträgen funktionieren, und holen Sie bei Bedarf Rechtsberatung ein; dieser Leitfaden gibt keine.

**Berichtswesen.** Regelmäßige Berichte zeigen Ergebnisse gegen Ziele, mit Erklärungen für Verfehlungen und Maßnahmen. Berichte dienen dem Gespräch, nicht nur der Aufzeichnung. Nehmen Sie Beispiele und Kommentare von Nutzern neben die Zahlen.

**Überprüfung.** Überprüfen Sie SLAs und Ziele in vereinbarten Abständen mit Kunden und passen Sie sie an, wenn sich Bedürfnisse oder Technologie ändern. Legen Sie Ziele still, die niemand nutzt.

**Goodharts Gesetz.** „Wenn eine Kennzahl zum Ziel wird, hört sie auf, eine gute Kennzahl zu sein.“ Wikipedia beschreibt diese Beobachtung, die dem Ökonomen Charles Goodhart zugeschrieben wird. Menschen passen ihr Verhalten an, um die Zahl zu erreichen, nicht den Zweck. Service-Levels laden dazu ein: vorzeitig geschlossene Tickets, umklassifizierte Incidents, angehaltene Uhren. Schützen Sie sich mit Stichproben, gepaarten Kennzahlen und Kundenfeedback. Siehe das Buch *Service Management Metrics*.

**Wie die Blickwinkel passen.** Service-Level-Management ist der Ort, an dem agile Verbesserung auf Vereinbarung trifft: Ziele oft überprüfen und anpassen. KI kann helfen, Leistungsdaten zu analysieren und Berichte zu entwerfen, unter Prüfung. Automatisierung misst und berichtet konsistent. Analytik zeigt die Beziehung zwischen technischen Zielen und Nutzererlebnis.

## Bewährte Praktiken

1. **Beginnen Sie mit dem, was der Kunde braucht.** Fragen Sie, was nicht ausfallen darf und welche Langsamkeit er tolerieren würde. Gründen Sie Ziele auf diese Antworten, nicht auf das, was leicht zu messen ist.
2. **Halten Sie die Zahl der Ziele klein.** Eine Handvoll bedeutsamer Ziele je Service ist leichter zu verstehen und zu steuern als Dutzende. Streichen Sie die, die niemand nutzt.
3. **Schreiben Sie jedes Ziel präzise.** Nennen Sie, was gemessen wird, woher, über welchen Zeitraum, was ausgenommen ist und wie das Ergebnis berechnet wird. Testen Sie die Definition mit den Daten eines jüngeren Monats.
4. **Nutzen Sie Perzentile für Reaktion und Performance.** Berichten Sie den Anteil der Fälle, die das Ziel erfüllen, und zeigen Sie die schlechtesten Fälle, nicht nur den Durchschnitt.
5. **Setzen Sie interne Ziele strenger als Vereinbarungen.** Geben Sie Ihrem Team Raum zu handeln, bevor es zu einem Verstoß kommt. Halten Sie interne und externe Ziele untereinander und mit Lieferantenverträgen konsistent.
6. **Ergänzen Sie Kennzahlen zum Erlebnis.** Fragen Sie neben technischen Zielen Nutzer, wie der Service ihnen half, mit kurzen Umfragen und Beobachtung. Ziehen Sie Stichproben realer Fälle, um zu sehen, was die Zahlen übersehen.
7. **Berichten Sie mit Kontext.** Stellen Sie Ergebnisse in einer regelmäßigen Besprechung mit dem Kunden vor, erklären Sie Verfehlungen ehrlich und vereinbaren Sie Maßnahmen. Nehmen Sie einige Kommentare von Nutzern auf.
8. **Schützen Sie sich vor Manipulation.** Prüfen Sie Stichproben der Tickets und Incidents hinter den Zahlen, betrachten Sie Wiedereröffnungsraten und koppeln Sie Geschwindigkeitskennzahlen mit Qualitätskennzahlen.
9. **Überprüfen Sie Vereinbarungen regelmäßig.** Treffen Sie sich mindestens jährlich und wenn sich etwas Wesentliches ändert, um zu prüfen, dass Ziele noch zu Bedarf und Kosten passen. Ändern Sie Ziele offen.
10. **Stimmen Sie Lieferanten ab.** Prüfen Sie, dass die Vereinbarung jedes Lieferanten die Ziele stützt, die Sie versprechen, und vereinbaren Sie, wie seine Leistung an Sie berichtet wird. Siehe Thema 3.14 — Lieferantenmanagement.

## Fragen für die Diskussion im Team

**Wenn wir letzten Monat jedes Ziel erreicht haben, würden unsere Kunden sagen, der Service war gut?**
Das prüft, ob Ziele das Erlebnis spiegeln. Rechnen Sie irgendwo mit einer Diskrepanz. Bitten Sie um eine jüngere Beschwerde, die kein Ziel erfasst hat. Wählen Sie anschließend eine neue Kennzahl zum Erlebnis.

**Welche unserer Ziele liest niemand, und über welche streiten alle?**
Das findet nutzlose und umstrittene Kennzahlen. Fragen Sie, wer jede bei Entscheidungen nutzt. Legen Sie anschließend eine still und klären Sie eine.

**Was versprechen wir Kunden, das von einem Lieferanten oder einem anderen Team abhängt, und was haben sie uns versprochen?**
Das prüft die Konsistenz zwischen Vereinbarungen. Legen Sie die Zahlen nebeneinander. Rechnen Sie mit Lücken. Wählen Sie anschließend eine Lücke, die wir schließen, durch Neuverhandlung oder durch Änderung unseres Versprechens.

**Wie könnten unsere Ziele erreicht werden, ohne dem Nutzer zu helfen?**
Stellen Sie sich Manipulation vor: Tickets vorzeitig schließen, Uhren anhalten, Definitionen verengen. Fragen Sie, ob etwas davon geschieht. Wählen Sie anschließend eine Stichprobenprüfung für ein Ziel.

**Wer nimmt an unseren Service-Reviews teil, und was ändert sich danach?**
Besprechungen ohne Handlung sind Ritual. Bitten Sie um die letzte Maßnahmenliste. Vereinbaren Sie anschließend, dass jeder Review mit höchstens drei Maßnahmen mit Verantwortlichen endet.

**Wo könnte KI helfen, Service-Level-Daten zu analysieren oder Berichte zu entwerfen, und was muss eine Person prüfen?**
KI kann Trends zusammenfassen und Erklärungen entwerfen. Sie kann auch Ursachen ohne Beleg nennen. Fragen Sie, wer den Entwurf an den Daten prüft. Erproben Sie anschließend KI-entworfene Zusammenfassungen für den internen Gebrauch, wobei eine Person genehmigt.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung eines regionalen Wasserversorgers unterstützt 800 Büromitarbeitende und 300 Außendienst-Teams. Das SLA für das Arbeitsauftragssystem verspricht 99,5 Prozent Verfügbarkeit und eine Reaktion binnen vier Stunden auf Incidents der Priorität eins. Berichte zeigen seit zwei Jahren jedes Ziel erreicht. Die Außendienst-Teams nennen das System dennoch „unzuverlässig“, und der Betriebsleiter verlangt ein besseres SLA.

Der Service-Manager trifft die Teamleitungen und fragt, was „unzuverlässig“ heißt. Sie sagen, das System laufe, sei aber früh am Morgen, wenn die Teams ihre Arbeit beginnen, sehr langsam und synchronisiere nicht, wenn sie schlechten Mobilfunkempfang haben. Beides wird nicht erfasst: Verfügbarkeit wird durch eine Prüfung aus dem Rechenzentrum in Abständen von fünf Minuten gemessen, und Reaktionsziele gelten nur für Tickets, die Teams eröffnen, was sie selten tun, weil sie annehmen, es geschehe nichts.

Der Manager schlägt Änderungen vor. Das Team ergänzt einen SLI auf Grundlage realer Nutzertransaktionen: 95 Prozent der Speichervorgänge von Arbeitsaufträgen sind binnen drei Sekunden abgeschlossen, getrennt gemessen für den Zeitraum von 6 bis 8 Uhr. Es fügt eine kurze monatliche Pulsumfrage für die Teams hinzu, mit zwei Fragen dazu, ob das System ihnen half, Arbeit abzuschließen, und was im Weg stand. Und es setzt ein internes SLO strenger als das SLA, damit das Team die Langsamkeit am frühen Morgen vor den Teams sieht. Der Betriebsleiter stimmt zu, die Ziele vierteljährlich mit Vertretungen der Teams zu überprüfen.

Was sich ändert: Die Daten des ersten Monats zeigen die Langsamkeit am frühen Morgen deutlich, und eine Optimierung der Datenbank behebt einen Großteil davon. Was schwierig bleibt: Synchronisationsfehler hängen vom Mobilfunkempfang ab, den der Versorger nicht kontrolliert; die Umfrage hat eine Rücklaufquote von etwa einem Drittel; und der neue SLI steht nicht im Vertrag, sodass Berichte an das Führungsteam jetzt zwei Zahlensätze tragen. Der Manager behält beide und schlägt vor, die neuen Kennzahlen bei der nächsten Vertragsverlängerung in das SLA aufzunehmen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Definieren Sie Indikatoren und Ziele gemeinsam mit denen, die den Service betreiben und nutzen, und bauen Sie die Messungen in das Produkt ein. Behandeln Sie ein verfehltes Ziel als Anstoß, auf das Design zu schauen, nicht nur auf den Betrieb.

### Service- und Betriebsteams

Kennen Sie die Ziele und wie sie gemessen werden. Achten Sie auf Manipulation, berichten Sie ehrlich und bringen Sie Beispiele für das, was die Zahlen übersehen, in die Review-Besprechungen. Nutzen Sie interne Ziele, um früh zu handeln.

### Führung und Governance

Fragen Sie, ob Ziele spiegeln, was Kunden brauchen, und ob sie mit Lieferantenverträgen konsistent sind. Betrachten Sie Verteilungen und Stichproben, nicht nur Schlagzeilen-Prozente. Vermeiden Sie es, Teams an einzelnen Zahlen zu belohnen oder zu bestrafen.

### Kunden und Nutzer

Sagen Sie, was Ihnen am wichtigsten ist und was Sie tolerieren können. Nehmen Sie an Reviews teil. Wenn jeder Bericht grün ist und Sie unzufrieden sind, sagen Sie es dem Anbieter und nennen Sie Beispiele.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Überprüfen und passen Sie Ziele regelmäßig mit Kunden in kleinen Schritten an und nutzen Sie Verfehlungen als Feedback zur Verbesserung. Vorsicht: Ziele, die sich jeden Monat ändern, verwirren alle; halten Sie einen stabilen Kern und ändern Sie ihn bewusst.

### KI

KI kann Leistungsdaten analysieren, Berichte entwerfen und Ursachen von Verfehlungen vorschlagen, wobei eine Person für die Schlussfolgerungen verantwortlich ist. Benennen Sie für jede Nutzung eine verantwortliche Person. Vorsicht: KI-Erklärungen für Verfehlungen können autoritativ klingen, ohne Beleg; bitten Sie sie, die verwendeten Daten zu nennen. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Messung aus realen Transaktionen, Berichtswesen und Alarme bei Gefahr eines Verstoßes, mit transparenter Berechnung. Vorsicht: Automatische Messung kann Definitionsfehler verbergen; prüfen Sie die Rohdaten und die Berechnung regelmäßig stichprobenartig. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Kombinieren Sie technische Kennzahlen, etwa Perzentile der Antwortzeit, mit Erlebnisdaten, etwa Umfrageergebnissen und Beschwerden. Vorsicht: Umfragen stammen von denen, die antworten, und jede Kennzahl lässt sich manipulieren, sobald sie ein Ziel ist; nutzen Sie mehrere Quellen und ziehen Sie Stichproben von Fällen. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Alles grün, Kunden unzufrieden.** Kennzahlen verfehlen das Erlebnis. Ergänzen Sie nutzerbasierte Indikatoren und Stichproben.
- **Zu viele Ziele.** Niemand liest sie. Halten Sie wenige, die zählen.
- **Nur Durchschnitte.** Die schlimmsten Fälle sind verborgen. Nutzen Sie Perzentile und zeigen Sie Ausreißer.
- **Manipulation.** Uhren angehalten, Tickets vorzeitig geschlossen. Ziehen Sie Stichproben und koppeln Sie Kennzahlen.
- **Uneinheitliche Vereinbarungen.** Versprechen übersteigen, was Lieferanten liefern. Stimmen Sie interne und externe Ziele ab.
- **Das SLA als Waffe.** Besprechungen streiten über Gutschriften. Konzentrieren Sie sich auf Verbesserung und gemeinsames Verständnis.
- **Nie überprüft.** Ziele altern. Überprüfen Sie in vereinbarten Abständen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Ziele | Technisch, nicht überprüft | Einige kundenbasierte Ziele | Ziele mit Kunden gesetzt und präzise definiert | Ziele an Daten und Erlebnis überprüft | Ziele über Services und Partner abgestimmt |
| Messung | Manuell | Etwas Automatisierung | Wo möglich aus Nutzertransaktionen gemessen | Messung validiert und stichprobenartig geprüft | Messung automatisiert und über die Kette transparent |
| Erlebnis | Nicht gemessen | Ad-hoc-Umfragen | Erlebniskennzahlen neben technischen | Erlebnis mit Verbesserungen verknüpft | Erlebnis steuert Vereinbarungen über Services hinweg |
| Überprüfung | Selten | Jährlich | Regelmäßige Reviews mit Maßnahmen | Reviews auf Ergebnisse verfolgt | Reviews in Planung und mit Lieferanten integriert |

## Checkliste

- [ ] Ziele beruhen auf dem, was Kunden brauchen, und sind mit ihnen vereinbart.
- [ ] Jedes Ziel ist präzise definiert und mit realen Daten getestet.
- [ ] Wir nutzen Perzentile für Reaktions- und Performance-Ziele.
- [ ] Interne Ziele sind strenger als externe Vereinbarungen.
- [ ] Lieferantenverträge stützen die Ziele, die wir versprechen.
- [ ] Wir messen Erlebnis ebenso wie technische Leistung.
- [ ] Wir ziehen Stichproben der Fälle hinter den Zahlen, um Manipulation zu prüfen.
- [ ] Wir überprüfen Vereinbarungen mindestens jährlich und nach großen Änderungen.

## KI-Prompts

**Prüfen Sie die Definition eines Ziels.**

```text
Here is a service level target as written: [paste]. Here is a month of raw data: [paste summary].
List what is unclear in the wording, compute the result in two different reasonable ways showing your steps, and note where the answers differ. Do not recommend a new target.
List what you are unsure of.
```

**Finden Sie, was die Zahlen übersehen.**

```text
Our targets: [list]. Here are user complaints from the last quarter: [paste, personal data removed].
List complaints that no target would have detected, quote each briefly, and suggest one possible measure for each. Do not claim the measures would work.
List what you are unsure of.
```

**Bereiten Sie einen Service-Review vor.**

```text
Here are this month's results against targets: [paste]. Here are notable incidents and user comments: [paste].
Draft an agenda and five questions to discuss with the customer, including one about what the numbers do not show. Do not explain causes that are not in the material.
List what you are unsure of.
```

## KI-Skills

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): nutzen Sie ihn, um Vereinbarungen und Ziele zu entwerfen und zu überprüfen.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): nutzen Sie ihn, um Indikatoren zu wählen, die früh warnen.
- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um Erlebniskennzahlen zu gestalten.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): nutzen Sie ihn, um Lieferantenvereinbarungen mit Ihren Zielen abzustimmen.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Service-Level-Management durch den Eigentümer.
- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zu Service-Level-Zielen, frei unter sre.google.
- Wikipedia, „Service-level agreement“ und „Service-level objective“: Überblicke über die Begriffe.
- Wikipedia, „Goodhart's law“: eine Warnung davor, Kennzahlen als Ziele zu verwenden.

## Literaturverzeichnis

1. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Operational-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Operational-level_agreement
4. Percentile — Wikipedia — https://en.wikipedia.org/wiki/Percentile
5. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
6. Goodhart's law — Wikipedia — https://en.wikipedia.org/wiki/Goodhart%27s_law
7. Liquidated damages — Wikipedia — https://en.wikipedia.org/wiki/Liquidated_damages
8. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
9. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
