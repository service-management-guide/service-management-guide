# Fluss und Kanban

**Fluss beschreibt, wie reibungslos Arbeit von der Anfrage bis zur Erledigung vorankommt. Arbeit sichtbar machen, die laufende Arbeit begrenzen und messen, wie lange Arbeit dauert, sind die Praktiken, die ihn verbessern; sie passen gut zu Service-Teams, die ständig unterbrochen werden, und Kanban ist eine benannte Art, sie anzuwenden.**

## Warum das wichtig ist

Service-Teams sind immer beschäftigt. Anfragen, Incidents, Changes und Verbesserungen kommen ohne Vorwarnung, und Menschen wechseln den ganzen Tag zwischen ihnen. Das Team fühlt sich produktiv, doch Kunden warten lange darauf, dass irgendetwas fertig wird, und niemand kann sagen, warum.

Flussdenken erklärt die Lücke. Arbeit, die begonnen, aber nicht beendet ist, liegt in Warteschlangen, und in den meisten Teams ist die Wartezeit viel länger als die Arbeitszeit. Mehr Leute einzusetzen oder mehr Punkte zu beginnen hilft nicht und macht es oft schlimmer, denn mehr laufende Arbeit bedeutet längere Warteschlangen. Das Mittel ist, die Arbeit zu sehen, zu begrenzen, wie viel gleichzeitig läuft, und zu messen, wie lange Punkte von der Anfrage bis zur Erledigung brauchen.

Diese Ideen stammen aus der schlanken Fertigung (Lean), und das bekannteste Werkzeug ist das Kanban-Board. Viele agile Teams nutzen Kanban oder ein davon inspiriertes Board. Dieser Leitfaden behandelt Kanban als eine Wahl unter mehreren. Wenn Ihr Team Kanban wählt, helfen die Ideen hier; wenn nicht, gelten die Prinzipien Sichtbarkeit, Begrenzung und Flussmessung trotzdem.

## Kernkonzepte

**Fluss.** Die Bewegung von Arbeit durch ein System. Ein System mit gutem Fluss liefert Punkte gleichmäßig und vorhersehbar, mit kurzen Wartezeiten. Schlechter Fluss zeigt sich in langen und stark schwankenden Lieferzeiten, Stau vor bestimmten Schritten und häufigem Vorziehen.

**Laufende Arbeit (Work in Progress, WIP).** Die Zahl der Punkte, die begonnen, aber nicht beendet sind. Der Wikipedia-Artikel zu Work in process beschreibt die Idee in der Fertigung. In Wissens- und Service-Arbeit ist WIP oft unsichtbar, weil Punkte in Postfächern, Chat-Verläufen und Köpfen leben. Sie sichtbar zu machen ist der erste Schritt.

**Das Gesetz von Little (Little's law).** Für ein stabiles System entspricht die durchschnittliche Zeit, die ein Punkt im System verbringt, der durchschnittlichen Zahl der Punkte im System geteilt durch die durchschnittliche Rate, mit der sie es verlassen. Beendet Ihr Team fünf Punkte pro Woche und hat 25 in Arbeit, dauert der durchschnittliche Punkt etwa fünf Wochen. Um die Zeit zu verkürzen, ohne schneller zu arbeiten, verringern Sie die Zahl der laufenden Punkte.

**Durchlaufzeit und Bearbeitungszeit.** Die Durchlaufzeit (Lead Time) ist, wie lange ein Kunde von der Anfrage bis zur Lieferung wartet. Die Bearbeitungszeit (Cycle Time) ist, wie lange ein Punkt braucht, sobald die Arbeit beginnt. Definitionen unterscheiden sich zwischen Teams, schreiben Sie daher Ihre auf. Der Durchsatz ist die Zahl der in einem Zeitraum fertiggestellten Punkte.

**Die Kanban-Methode.** Kanban bedeutet auf Japanisch „Signaltafel“ oder „Karte“. Das Toyota-Produktionssystem, entwickelt mit Taiichi Ohno, nutzte Karten, um zu signalisieren, wann mehr Teile gebraucht wurden, sodass die Produktion von der Nachfrage gezogen wurde. David J. Anderson übertrug diese Ideen in den 2000er-Jahren als Kanban-Methode auf Wissensarbeit, die Wikipedia beschreibt. Zu ihren Kernpraktiken gehören Arbeit sichtbar machen, WIP begrenzen, Fluss steuern, Regeln explizit machen, Feedbackschleifen einrichten und gemeinsam verbessern.

**Das Board.** Ein Kanban-Board zeigt Arbeitspunkte als Karten in Spalten, die Schritte darstellen, etwa „zu tun“, „in Arbeit“, „Review“ und „erledigt“. Boards können physisch oder digital sein. Ein Board definiert keinen Prozess; es zeigt den, den Sie haben.

**WIP-Limits.** Eine Obergrenze für die Zahl der Punkte, die in einem Schritt oder auf dem Board erlaubt sind. Ist das Limit erreicht, beginnt das Team keine neue Arbeit, sondern hilft, etwas zu beenden. Das fühlt sich anfangs langsam an und macht die Lieferung schneller und gleichmäßiger.

**Service-Klassen.** Nicht jeder Punkt sollte in derselben Warteschlange warten. Ein Team könnte dringende Punkte wie Major Incidents als Klasse „Expedite“ mit strengem Limit behandeln, Punkte mit festem Termin als eine weitere Klasse und gewöhnliche Punkte als Standard. Klassen machen Abwägungen ausdrücklich und verhindern, dass jeder Punkt für dringend erklärt wird.

**Engpässe.** Ein Schritt, der den Durchsatz des Systems begrenzt. Die Theorie der Beschränkungen (Theory of Constraints) von Eliyahu Goldratt rät, den Engpass zu finden, sicherzustellen, dass er nie leer läuft, und ihn zu verbessern, denn alles andere zu beschleunigen hilft nicht. Ein WIP-Limit offenbart den Engpass oft als die Spalte, in der sich Arbeit staut.

**Kumulatives Flussdiagramm (Cumulative Flow Diagram).** Ein Diagramm, das die Zahl der Punkte in jedem Zustand über die Zeit zeigt. Breiter werdende Bänder verraten sich aufbauende Warteschlangen. Es ist ein schneller Weg zu sehen, ob der Fluss stabil ist.

**Passend für Service-Arbeit.** Service-Teams bearbeiten einen Strom verschiedener Arbeitsarten mit unvorhersehbarem Eingang, was Flussmethoden besser entspricht als festen Planungszyklen. Wenn Ihr Team Sprints wählt, helfen Flussmessungen trotzdem zu sehen, was innerhalb davon geschieht.

**Wie die Blickwinkel passen.** Agile Praxis verlangt kontinuierliche Lieferung und Verbesserung; Flusskennzahlen zeigen, ob das geschieht. KI kann das Board zusammenfassen oder Triage-Kategorien vorschlagen, unter Prüfung. Automatisierung kann Karten aktualisieren und Limits durchsetzen. Analytik liefert die Kennzahlen, mit dem üblichen Risiko, dass sie zu Zielen werden.

## Bewährte Praktiken

1. **Machen Sie alle Arbeit sichtbar.** Legen Sie jede Arbeitsart auf das Board: Incidents, Anfragen, Changes, Verbesserungen und ungeplante Unterbrechungen. Ein Board, das nur „Projekt“-Arbeit zeigt, verbirgt die Last.
2. **Definieren Sie die Spalten aus dem realen Prozess.** Legen Sie Spalten an, die dem tatsächlichen Weg der Arbeit entsprechen, einschließlich Wartezuständen wie „wartet auf Kunden“. In Wartezuständen versteckt sich die Verzögerung.
3. **Setzen Sie WIP-Limits und respektieren Sie sie.** Beginnen Sie mit einem Limit knapp unter der aktuellen Zahl und passen Sie es nach Beobachtung an. Ist eine Spalte voll, helfen Sie, Punkte voranzubringen, bevor Sie etwas Neues beginnen.
4. **Machen Sie Regeln explizit.** Schreiben Sie auf oder neben das Board, was „bereit“ und „erledigt“ bedeuten, wie Punkte priorisiert werden und wer vorziehen darf. Ungeschriebene Regeln erzeugen Streit.
5. **Nutzen Sie Service-Klassen bewusst.** Definieren Sie eine kleine Zahl von Klassen, mit eigenen Limits und erwarteten Zeiten. Überprüfen Sie die Klasse Expedite regelmäßig: Ist sie immer voll, ist das System überlastet oder die Prioritäten sind unklar.
6. **Messen Sie Durchlaufzeit, Bearbeitungszeit und Durchsatz.** Berichten Sie sie als Verteilungen, etwa „85 Prozent der Punkte sind binnen 9 Tagen fertig“, nicht nur als Durchschnitte. Verteilungen zeigen das Risiko, dem Kunden tatsächlich ausgesetzt sind.
7. **Schauen Sie auf die ältesten Punkte.** Besprechen Sie in einer regelmäßigen Runde die Punkte, die am längsten in Arbeit sind. Alte Punkte deuten meist auf eine blockierte Abhängigkeit oder unklare Verantwortung hin.
8. **Finden und verbessern Sie den Engpass.** Staut sich Arbeit an einer Stelle, fragen Sie, was sie begrenzt, und behandeln Sie das als vorrangige Verbesserung.
9. **Besprechen Sie das Board gemeinsam.** Ein kurzes, regelmäßiges Gespräch am Board, im Stehen oder nicht, gibt dem Team eine gemeinsame Sicht. Konzentrieren Sie sich auf blockierte und alternde Punkte, nicht auf Berichterstattung.
10. **Entwickeln Sie das Board weiter.** Ändern Sie Spalten, Limits und Regeln, während Sie lernen. Wenn Ihr Team Kanban wählt, behandeln Sie es als Ausgangspunkt, den Sie anpassen.

## Fragen für die Diskussion im Team

**Wie viel Arbeit haben wir gerade in Arbeit, und woher wissen wir das?**
Teams sind oft überrascht von der Zahl, sobald sie zählen. Bitten Sie jede Person aufzulisten, woran sie arbeitet, einschließlich Unterbrechungen. Rechnen Sie mit einer langen Liste und einigen Punkten, an die sich niemand erinnert. Vereinbaren Sie anschließend ein erstes Limit, selbst wenn es grob ist.

**Wo wartet Arbeit am längsten, und auf wen wartet sie?**
Warten ist die Hauptquelle von Verzögerung. Typische Antworten sind Genehmigungen, ein Spezialist, der Kunde oder ein Lieferant. Nutzen Sie ein reales Beispiel mit Daten. Wählen Sie anschließend eine Wartezeit und fragen Sie, wer sie verkürzen könnte.

**Welche Arten von Arbeit sollten nie in der gewöhnlichen Warteschlange warten?**
Das führt Service-Klassen ein. Häufige Antworten sind Major Incidents und gesetzliche Fristen, und Menschen fügen vielleicht eigene Favoriten hinzu. Drängen Sie auf Kriterien. Vereinbaren Sie anschließend eine kurze Liste und ein Limit für vorgezogene Arbeit.

**Was geschieht, wenn das Board voll ist und eine neue Anfrage eintrifft?**
Das prüft Disziplin. Teams beginnen den neuen Punkt oft trotzdem. Fragen Sie, wie die Regel lauten sollte und wer entscheidet. Vereinbaren Sie anschließend für jede Art von Anfrage eine Regel.

**Welche Kennzahl würde uns sagen, dass sich der Fluss verbessert hat, und wie könnte sie missverstanden werden?**
Wählen Sie eine Kennzahl, etwa die Zeit, binnen der 85 Prozent der Punkte fertig sind, und besprechen Sie, wie sie manipuliert werden könnte, zum Beispiel durch Aufteilen von Punkten oder Schließen und Wiedereröffnen. Vereinbaren Sie anschließend, wie wir die Kennzahl an der Wirklichkeit prüfen.

**Wo könnten Automatisierung oder KI den Fluss unterstützen, ohne Probleme zu verbergen?**
Automatische Kartenaktualisierungen und vorgeschlagene Kategorien können Zeit sparen. Sie können aber auch einen festgefahrenen Punkt als „in Arbeit“ maskieren. Fragen Sie, wer jede automatisierte Regel verantwortet und wie Fehler gefunden werden. Wählen Sie anschließend eine risikoarme Nutzung und ein Überprüfungsdatum.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Support-Team für klinische Systeme eines Krankenhauses bearbeitet rund 100 Anfragen pro Woche: Kontenänderungen, Berichtsanfragen, kleine Korrekturen und dringende Störungen. Das siebenköpfige Team nutzt ein E-Mail-Postfach und ein Ticket-Werkzeug, und Klinikpersonal beklagt, Anfragen „verschwänden“.

Die Teamleiterin baut im Teamraum ein physisches Board mit einer Karte für jeden offenen Punkt, insgesamt etwa 70. Das Zählen zeigt, dass jede Person im Schnitt zehn Punkte in Arbeit hat. Die Leiterin ergänzt Spalten für „wartet auf Klinikpersonal“ und „wartet auf Lieferanten“, die 25 der 70 Punkte enthalten. Das Team setzt ein Limit von vier laufenden Punkten pro Person und zwei vorgezogenen Punkten gleichzeitig. Es vereinbart Regeln: Dringende Störungen, die die Patientenversorgung betreffen, kommen auf die Expedite-Spur und werden zuerst bearbeitet; alles andere nach dem Prinzip „first in, first out“.

Nach zwei Monaten sinkt die mittlere Zeit bis zur Erledigung einer Anfrage von 12 auf 7 Arbeitstage, und der älteste offene Punkt ist 20 statt 70 Tage alt. Die Spalte „wartet auf Klinikpersonal“ wächst, und das Team erkennt, dass vielen Anfragen Informationen fehlen. Es ergänzt ein kurzes Formular, das die häufig fehlenden Fragen stellt.

Was sich ändert: Klinikpersonal kann sehen, wo eine Anfrage steht, und das Team verbringt weniger Zeit mit E-Mails der Art „Wo ist sie?“. Was schwierig bleibt: Punkte, die auf den Lieferanten warten, dauern weiter Wochen und das Team kann sie nicht steuern; die Expedite-Spur wird manchmal für Anfragen genutzt, die nur einer hochrangigen Person wichtig sind; und das digitale Ticket-Werkzeug und das physische Board laufen auseinander, wenn Menschen vergessen, eines zu aktualisieren. Das Team überprüft die Regeln monatlich und plant, das Board in das Werkzeug zu verlegen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Nutzen Sie das Board, um alle Arbeit zu sehen, einschließlich betrieblicher Unterbrechungen, und begrenzen Sie die laufende Arbeit, damit Funktionen und Korrekturen fertig werden. Teilen Sie Flusskennzahlen mit dem Betrieb, um zu finden, wo Änderungen warten.

### Service- und Betriebsteams

Sie sind die natürlichen Nutzer von Flussmethoden. Machen Sie den gesamten Strom sichtbar, vereinbaren Sie Service-Klassen und nutzen Sie Limits, damit Unterbrechungen die geplante Arbeit nicht überfluten. Bringen Sie Belege für Verzögerungen zu denen, die sie beseitigen können.

### Führung und Governance

Verlangen Sie Flusskennzahlen als Verteilungen und schauen Sie auf die ältesten Punkte. Vermeiden Sie es, mehr Arbeit in ein volles System zu drücken. Unterstützen Sie die Teams dabei, Regeln zu ändern, statt mehr Output zu fordern.

### Kunden und Nutzer

Sie sollten sehen können, wo Ihre Anfrage steht, wie lange solche Anfragen üblicherweise dauern und worauf das Team wartet. Sagen Sie dem Team, wenn etwas dringend ist und warum, denn ein klarer Grund hilft ihm zu entscheiden.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Fluss unterstützt kontinuierliche Lieferung und Verbesserung, indem er Verzögerungen aufdeckt und kleine, abgeschlossene Punkte fördert. Vorsicht: Ein Board ist für sich genommen kein Verbesserungssystem; nutzen Sie es als Anstoß für regelmäßigen Review mit den Beteiligten.

### KI

KI kann das Board zusammenfassen, Kategorien für neue Punkte vorschlagen und alternde oder blockierte Punkte markieren, wobei eine Person prüft und jede Regel eine verantwortliche Person hat. Vorsicht: Ein KI-Klassifikator, der falsch rät, schickt Arbeit in die falsche Warteschlange; verfolgen Sie die Korrekturrate. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie die Kartenanlage aus dem Ticket-Werkzeug, aktualisieren Sie Zustände aus Ereignissen und warnen Sie, wenn WIP-Limits überschritten werden. Führen Sie ein Protokoll. Vorsicht: Automatische Zustandswechsel können den Fluss besser aussehen lassen, als er ist; prüfen Sie Stichproben realer Punkte. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Nutzen Sie Verteilungen der Durchlaufzeit, Durchsatz, das Alter der laufenden Arbeit und kumulative Flussdiagramme. Vorsicht: Jede davon lässt sich durch Aufteilen, Zusammenführen oder Umetikettieren von Punkten manipulieren, und der Vergleich von Teams ignoriert Unterschiede in der Arbeit; nutzen Sie sie, um Ihr eigenes System zu verstehen. Siehe Thema 7.6 — Prozess- und Wertstromanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ein Board ohne Limits.** Karten häufen sich, und nichts ändert sich. Setzen Sie ein Limit und halten Sie es ein.
- **Nur geplante Arbeit auf dem Board.** Unterbrechungen sind unsichtbar, und die Last wird unterschätzt. Zeigen Sie alle Arbeitsarten.
- **Alles wird vorgezogen.** Die Überholspur verstopft. Begrenzen Sie sie und prüfen Sie jede Nutzung.
- **Nur Durchschnitte.** Der Durchschnitt verbirgt lange Verzögerungen. Berichten Sie Verteilungen und die ältesten Punkte.
- **Kennzahlen manipulieren.** Punkte werden aufgeteilt oder zu früh geschlossen. Prüfen Sie Kennzahlen an realen Punkten.
- **Kanban als Ziel behandeln.** Das Team kopiert ein Board und ignoriert den Fluss. Schauen Sie auf Lieferzeiten und Wartezeiten.
- **Einen Nicht-Engpass optimieren.** Aufwand fließt in den falschen Schritt. Finden Sie, wo sich Arbeit staut.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Sichtbarkeit | Arbeit in Postfächern und Köpfen | Ein Board für geplante Arbeit | Alle Arbeit sichtbar, mit expliziten Regeln | Board und Werkzeuge konsistent und vertrauenswürdig | Fluss über Teams und Lieferanten hinweg sichtbar |
| WIP-Steuerung | Keine Limits | Informelle Limits | Vereinbarte Limits und Regeln für Ausnahmen | Limits anhand von Daten abgestimmt | Limits über abhängige Teams hinweg abgestimmt |
| Flusskennzahlen | Keine | Zählungen von Punkten | Durchlaufzeit und Durchsatz als Verteilungen | Kennzahlen zum Finden von Engpässen genutzt | Kennzahlen im gesamten System geteilt und umgesetzt |
| Service-Klassen | Eine Warteschlange | Dringend oder nicht | Definierte Klassen mit Limits | Klassen anhand von Belegen überprüft | Klassen über Teams und Vereinbarungen hinweg abgestimmt |

## Checkliste

- [ ] Alle Arten von Arbeit, einschließlich Unterbrechungen, sind auf dem Board.
- [ ] Die Spalten enthalten Wartezustände.
- [ ] Wir haben WIP-Limits und eine Regel dafür, was bei vollem Limit zu tun ist.
- [ ] Regeln für bereit, erledigt, Priorität und Expedite sind aufgeschrieben.
- [ ] Wir messen Durchlaufzeit, Bearbeitungszeit und Durchsatz als Verteilungen.
- [ ] Wir überprüfen die ältesten Punkte regelmäßig.
- [ ] Wir kennen unseren aktuellen Engpass und haben eine Verbesserung dafür.
- [ ] Wir prüfen Kennzahlen an realen Punkten auf Manipulation.

## KI-Prompts

**Finden Sie Muster in Board-Daten.**

```text
Here is an export of our items with created, started, and finished dates and state changes: [paste data with names removed].
Calculate the median and 85th percentile lead time, list the five oldest open items, and note where items spend the most time. Do not infer causes. Mark any data problems you notice.
List what you are unsure of.
```

**Schlagen Sie Service-Klassen vor.**

```text
Our team handles these kinds of work: [list with typical urgency and volume].
Propose up to four classes of service, a limit for each, and a rule for entry to the fastest class. Explain the trade-offs of each choice and flag assumptions.
List what you are unsure of.
```

**Bereiten Sie eine Board-Besprechung vor.**

```text
Below is the current state of our board: [paste columns, items, ages, and blockers].
List the five items I should discuss first and why, and three questions to ask about each. Do not assign blame or propose solutions.
List what you are unsure of.
```

## KI-Skills

- [kanban](../../../../skills/kanban/SKILL.md): nutzen Sie ihn, um ein Board mit Limits und Regeln aufzusetzen und zu betreiben.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Wartezeiten und Übergaben zu analysieren.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): nutzen Sie ihn, um den Fluss über Teams hinweg zu verfolgen.
- [software-engineering-metrics](../../../../skills/software-engineering-metrics/SKILL.md): nutzen Sie ihn, um Flusskennzahlen mit ihren Risiken zu definieren.

## Wichtige Quellen

- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010): die Quelle der Methode für Wissensarbeit.
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): der Ursprung der Kanban-Karte.
- Wikipedia, „Kanban (development)“: ein Überblick über die Methode.
- Wikipedia, „Little's law“: die Formel hinter WIP-Limits.

## Literaturverzeichnis

1. Kanban — Wikipedia — https://en.wikipedia.org/wiki/Kanban
2. Kanban (development) — Wikipedia — https://en.wikipedia.org/wiki/Kanban_(development)
3. Work in process — Wikipedia — https://en.wikipedia.org/wiki/Work_in_process
4. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
5. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
6. Cumulative flow diagram — Wikipedia — https://en.wikipedia.org/wiki/Cumulative_flow_diagram
7. Theory of constraints — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_constraints
8. Lead time — Wikipedia — https://en.wikipedia.org/wiki/Lead_time
9. Bottleneck (production) — Wikipedia — https://en.wikipedia.org/wiki/Bottleneck_(production)
10. Taiichi Ohno — Wikipedia — https://en.wikipedia.org/wiki/Taiichi_Ohno
