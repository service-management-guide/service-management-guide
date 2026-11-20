# Kontinuierliche Verbesserung

**Kontinuierliche Verbesserung ist der wiederkehrende Zyklus, eine kleine Änderung zu wählen, sie auszuprobieren, zu prüfen, ob sie geholfen hat, und sie zu behalten oder zurückzunehmen. Sie funktioniert, wenn Verbesserung ein sichtbares Backlog, geschützte Kapazität, eine verantwortliche Person und Belege hinter jeder Entscheidung hat.**

## Warum das wichtig ist

Jedes Team will sich verbessern, und die meisten tun es nicht. Die Gründe sind selten ein Mangel an Ideen. Verbesserungsideen gibt es reichlich, und sie leben in den Köpfen der Menschen, in Notizen von Retrospektiven und in Nachbetrachtungen von Incidents. Sie scheitern, weil sie niemand verantwortet, nichts Zeit dafür schützt und Dringendes stets gewinnt. Nach einigen Monaten hören Menschen auf vorzuschlagen, weil Vorschlagen keine Wirkung hat.

Kontinuierliche Verbesserung ist die Praktik, die das behebt. Sie macht Verbesserung zu einem regelmäßigen, sichtbaren Teil der Arbeitsweise eines Teams. Ideen gehen auf eine gemeinsame Liste. Jemand ordnet die Liste. Ein kleiner Teil der Kapazität wird in jedem Zyklus für die obersten Punkte reserviert. Jede Änderung wird als Experiment ausprobiert, geprüft und entweder behalten oder verworfen. Über ein Jahr summieren sich viele kleine Änderungen zu erheblichen Gewinnen, und das Team lernt, was in seinem eigenen Kontext funktioniert.

ITIL 4 stellt die kontinuierliche Verbesserung ins Herz des Service-Wertschöpfungssystems, als Komponente und als Praktik (siehe Thema 1.4 — Das Service-Wertschöpfungssystem). Lean-Denken, Kaizen, der Deming-Zyklus und agile Retrospektiven beschreiben Fassungen desselben Zyklus (siehe Thema 2.4 — Lean und Kaizen). Dieses Thema beschreibt den Zyklus, das Verbesserungs-Backlog und die Gewohnheiten, die sie lebendig halten, und zeigt, wie KI, Automatisierung und Analytik helfen und wo sie in die Irre führen. Es verbindet sich mit dem Problem-Management (Thema 3.3 — Problem-Management), das viele Verbesserungsideen liefert, und mit Messung (Thema 7.3 — Messung und Berichtswesen).

## Kernkonzepte

**Kontinual oder kontinuierlich.** ITIL verwendet „Continual Improvement“, also Verbesserung, die in Abständen, in Zyklen wiederkehrt. „Continuous Improvement“ wird in Lean- und Qualitätskreisen oft mit ähnlicher Bedeutung benutzt. Die Wörter werden locker gebraucht, und dieser Leitfaden behandelt sie als dieselbe Idee. Wikipedia beschreibt den Continual improvement process.

**Der Zyklus.** Die bekannteste Form ist Plan–Do–Check–Act (PDCA), auch Deming-Zyklus genannt, nach W. Edwards Deming, der ihn im Qualitätsmanagement populär machte. Sie planen eine Änderung und was Sie davon erwarten, führen sie im Kleinen durch, prüfen die Ergebnisse und handeln: übernehmen, anpassen oder verwerfen. Wikipedia beschreibt PDCA und Demings Rolle. Der Zyklus wird wiederholt.

**Das Modell der kontinuierlichen Verbesserung in ITIL 4.** ITIL 4 bietet ein Modell in sieben Schritten: Was ist die Vision; wo stehen wir jetzt; wo wollen wir hin; wie kommen wir dorthin; handeln; sind wir angekommen; wie halten wir den Schwung. Es ist ein Anstoß zum Nachdenken, kein sklavisch zu befolgendes Verfahren. Prüfen Sie die aktuelle Leitlinie des Eigentümers, auch für ITIL 5, bevor Sie es als aktuell zitieren (siehe Thema 1.3 — ITIL 5).

**Verbesserungs-Backlog.** Eine einzige, geordnete Liste von Verbesserungsideen, jede mit verantwortlicher Person, erwartetem Nutzen und Status. Wikipedia beschreibt Backlogs. Quellen sind Nachbetrachtungen von Incidents, Retrospektiven, Nutzerfeedback, Audits und Vorschläge von Mitarbeitenden. Die Ordnung folgt erwartetem Wert und Aufwand, mit Raum für schnelle Erfolge.

**Geschützte Kapazität.** Ein Anteil der Zeit, der für Verbesserung reserviert ist, etwa 10 oder 20 Prozent, in den Plänen sichtbar. Ohne ihn konkurriert Verbesserung mit dringender Arbeit und verliert. Ein Team, das keine Kapazität schützen kann, sollte das offen sagen und fragen, was die Führung stattdessen einstellen würde.

**Experimente.** Behandeln Sie jede Änderung als Test mit einer Hypothese: „Wenn wir X tun, erwarten wir Y, gemessen an Z binnen N Wochen.“ Wikipedia beschreibt Experiment und Hypothesis. Ein kleines Experiment begrenzt das Risiko einer schlechten Änderung und lehrt in beiden Fällen etwas.

**Kennzahlen und Basislinien.** Um zu wissen, ob eine Änderung geholfen hat, müssen Sie wissen, wo Sie angefangen haben. Halten Sie die Basis-Kennzahl vor der Änderung fest und prüfen Sie sie danach. Messen Sie, was Nutzern und dem Team wichtig ist, und sagen Sie, wie jede Kennzahl in die Irre führen könnte. Siehe das Buch *Service Management Metrics*.

**Retrospektiven.** Regelmäßige Besprechungen, in denen ein Team zurückblickt, wie es gearbeitet hat, und wählt, was es ändert. Wikipedia beschreibt Retrospectives. Wenn Ihr Team sie nutzt, stellen Sie sicher, dass die Ergebnisse mit Verantwortlichen ins Backlog gehen. Eine Retrospektive, die eine Liste erzeugt, auf die niemand reagiert, ist schlechter als keine.

**Ursache und Lernen.** Nachbetrachtungen von Incidents und Problemen erzeugen Verbesserungsideen. Siehe Thema 3.3 — Problem-Management. Audits, Kundenfeedback und der Vergleich mit anderen (Benchmarking) liefern mehr. Wikipedia beschreibt Benchmarking.

**Traditionen des Qualitätsmanagements.** Total Quality Management, Six Sigma mit seinem DMAIC-Zyklus (Define, Measure, Analyze, Improve, Control) und Lean tragen alle Methoden bei. Wikipedia beschreibt jede. Nutzen Sie die leichteste Methode, die passt: Die Feinjustierung eines kleinen Teams braucht kein formales Six-Sigma-Projekt.

**Verantwortung.** Jede Verbesserung hat eine verantwortliche Person, die dafür rechenschaftspflichtig ist, sie auszuprobieren und das Ergebnis zu berichten. Eine Person oder kleine Gruppe verantwortet das Backlog und seine Ordnung. In ITIL 4 ist kontinuierliche Verbesserung die Aufgabe aller, mit einer Koordinatorin.

**Feiern und Teilen.** Teilen Sie, was versucht wurde, auch Fehlschläge. Würdigen Sie Verbesserungen, die Menschen umgesetzt haben, und sagen Sie denen, die sie vorgeschlagen haben, was aus ihrer Idee wurde. Das hält Ideen im Fluss.

**Verbesserung auf verschiedenen Ebenen.** Verbesserung geschieht in der täglichen Arbeit eines Teams, in einem Service, in einer Praktik und über die Organisation hinweg. Stimmen Sie sie aufeinander ab: Änderungen auf Teamebene sollten Ziele auf Service-Ebene nicht untergraben. Siehe Thema 1.4 — Das Service-Wertschöpfungssystem.

**Wie die Blickwinkel passen.** Kontinuierliche Verbesserung ist der agile Blickwinkel in Reinform: kleine Schritte, Feedback und Lernen. KI kann in Daten Kandidaten für Verbesserungen finden und Experimente entwerfen, unter Prüfung. Automatisierung übernimmt die wiederholten Aufgaben, die Verbesserung identifiziert. Analytik misst die Wirkung.

## Bewährte Praktiken

1. **Führen Sie ein sichtbares Verbesserungs-Backlog.** Sammeln Sie Ideen aus jeder Quelle an einem Ort. Machen Sie es für das Team und die Beteiligten offen und halten Sie es kurz genug, damit es real bleibt.
2. **Benennen Sie eine verantwortliche Person für das Backlog und für jeden Punkt.** Die Backlog-Verantwortliche ordnet Punkte und hält sie in Bewegung; jeder Punkt hat eine Person, die ihn ausprobiert.
3. **Schützen Sie Kapazität.** Reservieren Sie einen Anteil jedes Zyklus für Verbesserung und zeigen Sie ihn im Plan. Berichten Sie, wenn er gekürzt wird, und warum.
4. **Wählen Sie kleine, schnelle Änderungen.** Bevorzugen Sie Punkte, die binnen Tagen oder einiger Wochen ausprobiert werden können. Zerlegen Sie große Ideen in Schritte, die getrennt getestet werden können.
5. **Nennen Sie die Erwartung, bevor Sie beginnen.** Schreiben Sie auf, was Sie erwarten, wie Sie es messen und wann Sie prüfen. Halten Sie die Basislinie fest.
6. **Prüfen und entscheiden Sie.** Betrachten Sie am Prüfdatum das Ergebnis ehrlich. Behalten Sie die Änderung, passen Sie sie an oder nehmen Sie sie zurück, und schreiben Sie auf, warum.
7. **Schließen Sie den Kreis mit den Menschen.** Sagen Sie denen, die einen Punkt vorgeschlagen haben, was daraus wurde. Danken Sie ihnen und teilen Sie, was Sie gelernt haben.
8. **Nutzen Sie Daten und Nutzer.** Betrachten Sie Kennzahlen und fragen Sie die Betroffenen. Achten Sie auf Kennzahlen, die sich leicht bewegen lassen, ohne jemandem zu helfen.
9. **Lernen Sie aus Fehlern und Incidents.** Speisen Sie Nachbetrachtungen ins Backlog ein, mit Maßnahmen, die Verantwortliche und Termine haben. Siehe Thema 3.3 — Problem-Management.
10. **Überprüfen Sie das Verbesserungssystem selbst.** Fragen Sie gelegentlich, ob der Prozess hilft: wie viele Punkte abgeschlossen werden, wie lange sie dauern und ob Menschen noch Ideen vorschlagen. Ändern Sie ihn, wenn nicht.

## Fragen für die Diskussion im Team

**Welche Verbesserungsideen hatten wir im letzten Quartal, und was wurde aus jeder?**
Sammeln Sie sie. Rechnen Sie mit vielen verlorenen Ideen. Fragen Sie, was sie aufgehalten hat. Legen Sie anschließend eine Liste an und wählen Sie die ersten drei Punkte.

**Wie viel unserer Zeit ist wirklich für Verbesserung geschützt, und wer verteidigt sie?**
Fragen Sie nach Zahlen. Rechnen Sie mit wenig oder nichts. Fragen Sie, was wir einstellen würden, um Raum zu schaffen. Vereinbaren Sie anschließend einen kleinen Anteil, etwa einen halben Tag pro Woche, und wer ihn schützt.

**Welche Änderung haben wir zuletzt zurückgenommen, und was haben wir gelernt?**
Das normalisiert Scheitern. Rechnen Sie mit Geschichten über Änderungen, die nicht funktionierten. Suchen Sie das Gelernte. Vereinbaren Sie anschließend, dass Rücknahme ein normales Ergebnis eines Experiments ist.

**Woher wissen wir, dass unsere letzte Verbesserung tatsächlich geholfen hat?**
Fragen Sie, was vorher und nachher gemessen wurde. Rechnen Sie mit „es fühlte sich besser an“. Wählen Sie anschließend eine laufende Verbesserung und vereinbaren Sie Basislinie und Prüfdatum.

**Wo stecken wir Verbesserungsaufwand hinein, den kein Nutzer und keine Teamkollegin bemerken würde?**
Das prüft den Wert des Aufwands. Fragen Sie, wer von jedem Punkt profitiert. Wählen Sie anschließend einen Punkt, den wir fallen lassen.

**Wie könnte KI uns helfen, Verbesserungen zu finden und zu testen, und wie prüfen wir, dass sie recht hat?**
KI kann Muster in Tickets finden und Experimente vorschlagen. Sie kann auch vorschlagen, was nur vielversprechend aussieht. Fragen Sie, wer die Nutzung verantwortet und wie Vorschläge getestet werden. Probieren Sie anschließend KI-vorgeschlagene Ideen durch denselben Experimentprozess wie jede andere.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Team für Wohnungsreparaturen einer Kreisverwaltung bearbeitet rund 1.200 Reparaturanfragen im Monat. Mitarbeitende beklagen regelmäßig vergeudete Mühe: Mieter, die wiederholt nach dem Stand fragen, Handwerker, die ohne Zugang erscheinen, und Formulare, die zwischen drei Systemen hin- und herspringen. Das Team hält seit einem Jahr Retrospektiven und hat einen großen Stapel Notizen, aber wenig hat sich geändert.

Die Teamleiterin bittet das Team, für eine sechswöchige Erprobung einen Verbesserungsbereich zu wählen. Es wählt wiederholte Anrufe von Mietern, die nach dem Reparaturstand fragen, was etwa ein Fünftel der Anrufe ausmacht. Sie legt ein Verbesserungs-Backlog an, beginnend mit 14 Punkten aus den Retrospektiv-Notizen, und bittet das Team, jeden nach erwartetem Wert und Aufwand zu bewerten. Sie nehmen die obersten drei. Der erste ist, dem Mieter eine SMS zu schicken, wenn ein Termin gebucht ist und am Vortag. Der zweite ist, Name und Telefonnummer des Handwerkers in die Nachricht aufzunehmen. Der dritte ist, eine Basislinie der wiederholten Anrufe pro Woche festzuhalten.

Für jeden Punkt schreibt das Team eine Erwartung: „SMS senken wiederholte Statusanrufe binnen vier Wochen um ein Viertel.“ Die Leiterin reserviert zwei Nachmittage im Monat aus der geplanten Arbeit, wobei die Dienststellenleitung zustimmt, einen Bericht niedriger Priorität zurückzustellen. Nach sechs Wochen sinken die wiederholten Anrufe um etwa ein Fünftel, nicht ein Viertel. Der Punkt mit dem Namen des Handwerkers hat keine messbare Wirkung und wird fallen gelassen. Aus den Anrufen ergibt sich eine neue Idee: Mieter wollen neu buchen, ohne anzurufen. Sie kommt ins Backlog.

Was sich ändert: Das Team hat gesehen, wie aus seinen eigenen Ideen eine Verbesserung wurde, und Menschen schlagen mehr vor. Was schwierig bleibt: Die zwei Nachmittage wurden zweimal gekürzt, als Notfallreparaturen anstiegen; die SMS hängen davon ab, dass Handwerker Aufzeichnungen rechtzeitig aktualisieren, was sie nicht immer tun; und die Basislinie der wiederholten Anrufe stammt aus einem Anrufprotokoll, von dem das Team weiß, dass es unvollkommen ist. Die Leiterin berichtet die Kürzungen der Dienststellenleitung und hält die Zahlen sichtbar.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Führen Sie eine Verbesserungsliste für das Produkt und seine Pipeline und reservieren Sie Kapazität dafür. Behandeln Sie Incidents, Support-Fragen und Lieferverzögerungen als Quellen für Ideen und messen Sie die Wirkung von Änderungen.

### Service- und Betriebsteams

Erfassen Sie, was Sie sehen: wiederholte Kontakte, Umgehungen und langsame Schritte. Probieren Sie kleine Änderungen aus und teilen Sie Ergebnisse. Bringen Sie Nutzerfeedback ins Backlog.

### Führung und Governance

Schützen Sie Verbesserungskapazität und fragen Sie, was sich dadurch geändert hat. Suchen Sie Belege für Wirkung und würdigen Sie Lernen ebenso wie Erfolg. Belohnen Sie nicht die Menge an Ideen oder Änderungen.

### Kunden und Nutzer

Sie sind eine Quelle von Verbesserungen. Sagen Sie dem Anbieter, was nicht funktioniert und was helfen würde, und erwarten Sie zu hören, was aus Ihrem Vorschlag wurde.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kontinuierliche Verbesserung ist das Herz agiler Praxis: reflektieren, anpassen und kleine Änderungen mit den Beteiligten liefern. Vorsicht: Wenn Ihr Team Retrospektiven nutzt, stellen Sie sicher, dass ihr Ergebnis im Backlog landet und umgesetzt wird; wenn nicht, ändern Sie die Methode.

### KI

KI kann Muster in Tickets und Feedback finden, Kandidaten für Experimente vorschlagen und Zusammenfassungen von Ergebnissen entwerfen, mit einer verantwortlichen Person und menschlichem Urteil. Vorsicht: KI kann plausible Verbesserungen vorschlagen, die die Daten nicht stützen; testen Sie sie wie jede andere Idee. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie die wiederholten Aufgaben, die Verbesserungsarbeit identifiziert, und die Erfassung von Basis- und Ergebnisdaten für Experimente. Vorsicht: Automatisierung kann einen Prozess festschreiben, bevor er verbessert wurde; vereinfachen Sie zuerst. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Nutzen Sie Basislinien, Trends und Vorher-nachher-Vergleiche, mit Aufmerksamkeit für Rauschen und für andere Änderungen, die zur selben Zeit geschahen. Vorsicht: Ein kurzer Vorher-nachher-Vergleich kann in die Irre führen, und Kennzahlen lassen sich manipulieren, sobald sie Ziele werden; kombinieren Sie Daten mit Nutzerfeedback. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ideen ohne Verantwortliche.** Die Liste wächst, und nichts geschieht. Weisen Sie Verantwortliche zu und ordnen Sie die Liste.
- **Keine geschützte Kapazität.** Dringende Arbeit verdrängt Verbesserung. Reservieren Sie Zeit und verteidigen Sie sie.
- **Große Verbesserungsprogramme.** Der Wandel ist langsam, der Nutzen unklar. Bevorzugen Sie kleine Experimente.
- **Keine Basislinie.** Niemand weiß, ob die Änderung geholfen hat. Halten Sie vorher fest und prüfen Sie danach.
- **Retrospektiven ohne Handlung.** Menschen hören auf teilzunehmen. Leiten Sie Ergebnisse ins Backlog und setzen Sie sie um.
- **Erfolgstheater.** Nur Erfolge werden berichtet. Teilen Sie Fehlschläge und Gelerntes.
- **Kennzahlen als Ziele.** Zahlen bewegen sich, und die Arbeit wird nicht besser. Koppeln Sie Kennzahlen mit Feedback.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Backlog | Ideen in Köpfen | Eine Liste existiert | Ein verantwortetes, geordnetes Backlog mit sichtbarem Status | Qualität und Fluss des Backlogs überprüft | Backlogs über Teams und Services verknüpft |
| Kapazität | Keine | Gelegentliche Zeit | Geschützter Kapazitätsanteil | Kapazitätsnutzung an Ergebnissen überprüft | Kapazität im Portfolio geplant |
| Experimente | Änderungen ohne Prüfung | Einige Basislinien | Erwartung, Kennzahl und Prüfdatum für jede Änderung | Ergebnisse analysiert und geteilt | Experimente teamübergreifend abgestimmt |
| Lernen | Verloren | Notizen | Erkenntnisse geteilt und im nächsten Zyklus genutzt | Lernen gemessen | Lernen steuert Strategie und Partnerschaften |

## Checkliste

- [ ] Wir haben ein sichtbares Verbesserungs-Backlog mit Verantwortlichen.
- [ ] Ein Anteil der Kapazität ist für Verbesserung geschützt.
- [ ] Jede Änderung hat eine Erwartung, eine Basislinie, eine Kennzahl und ein Prüfdatum.
- [ ] Wir behalten, passen an oder nehmen Änderungen anhand von Belegen zurück.
- [ ] Menschen, die Ideen vorschlagen, hören, was daraus wurde.
- [ ] Nachbetrachtungen von Incidents und Problemen speisen das Backlog.
- [ ] Wir teilen Fehlschläge und Gelerntes.
- [ ] Wir überprüfen den Verbesserungsprozess selbst.

## KI-Prompts

**Ordnen Sie ein Backlog zur Diskussion.**

```text
Here is our improvement backlog with a short description of each item, the people affected, and a rough effort estimate: [paste].
Propose an order using expected value and effort as stated, show your reasoning for each item, and list items where the description is too vague to judge. Do not invent benefits or effort.
List what you are unsure of.
```

**Verwandeln Sie eine Idee in ein Experiment.**

```text
Our idea: [describe]. Our current baseline: [describe or write "unknown"]. The people affected: [list].
Write an experiment plan with a hypothesis, a measure, how the measure could mislead, how long to run it, who to ask for feedback, and what would make us reverse it. Do not predict the result.
List what you are unsure of.
```

**Fassen Sie Ergebnisse eines Experiments zusammen.**

```text
Here is the data before and after our change: [paste]. Here is feedback from the people affected: [paste].
Summarize what changed, what did not, other things that changed at the same time, and what we cannot conclude. Do not state that the change caused the result unless the data support it.
List what you are unsure of.
```

## KI-Skills

- [kaizen](../../../../skills/kaizen/SKILL.md): nutzen Sie ihn, um kleine Verbesserungsexperimente zu planen und durchzuführen.
- [agile-reflection](../../../../skills/agile-reflection/SKILL.md): nutzen Sie ihn, um Reflexionen durchzuführen, die Maßnahmen hervorbringen.
- [dmaic](../../../../skills/dmaic/SKILL.md): nutzen Sie ihn für größere, datenintensive Verbesserungsprojekte.
- [six-sigma](../../../../skills/six-sigma/SKILL.md): nutzen Sie ihn, wenn Streuung und Qualität das Hauptproblem sind.
- [futurespective](../../../../skills/futurespective/SKILL.md): nutzen Sie ihn, um ebenso nach vorn wie zurück zu blicken.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der kontinuierlichen Verbesserung und ihres Modells durch den Eigentümer.
- W. Edwards Deming, *Out of the Crisis* (1982): Grundlagen des Qualitätsmanagements und des Verbesserungszyklus.
- Wikipedia, „Continual improvement process“ und „PDCA“: Überblicke über den Zyklus.
- Wikipedia, „Kaizen“: die japanische Tradition kleiner, kontinuierlicher Veränderung.

## Literaturverzeichnis

1. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
2. PDCA — Wikipedia — https://en.wikipedia.org/wiki/PDCA
3. W. Edwards Deming — Wikipedia — https://en.wikipedia.org/wiki/W._Edwards_Deming
4. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
5. Retrospective — Wikipedia — https://en.wikipedia.org/wiki/Retrospective
6. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
7. Experiment — Wikipedia — https://en.wikipedia.org/wiki/Experiment
8. Benchmarking — Wikipedia — https://en.wikipedia.org/wiki/Benchmarking
9. Six Sigma — Wikipedia — https://en.wikipedia.org/wiki/Six_Sigma
10. Total quality management — Wikipedia — https://en.wikipedia.org/wiki/Total_quality_management
11. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
