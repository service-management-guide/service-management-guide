# Lean und Kaizen

**Lean ist eine Denkweise über Arbeit, die Verschwendung beseitigt und sich auf den Wert konzentriert, den der Kunde erhält. Kaizen ist ihre Gewohnheit kleiner, kontinuierlicher Verbesserung durch die Menschen, die die Arbeit tun. Zusammen liefern sie einen großen Teil des praktischen Denkens hinter agilem Service-Management.**

## Warum das wichtig ist

Service-Teams tragen viel Arbeit, die Kunden nicht hilft: doppelte Genehmigungen, Berichte, die niemand liest, Übergaben, die Informationen verlieren, Tickets, die wieder geöffnet werden, weil die erste Antwort am Punkt vorbeiging. Jedes Teil wirkt für sich vernünftig. Zusammen verbrauchen sie mehr Zeit als die nützliche Arbeit und machen jeden Service langsamer und teurer, als er sein müsste.

Lean-Denken gibt ein Vokabular, um das zu sehen. Es fragt, was der Kunde schätzt, verfolgt die Schritte, die es erzeugen, und bezeichnet den Rest als Verschwendung, die zu verringern ist. Kaizen, ein japanisches Wort für „Veränderung zum Besseren“, liefert die Methode, sie zu verringern: viele kleine Verbesserungen, ständig, von den Menschen, die der Arbeit am nächsten sind. Ein großer Neuentwurf ist nicht nötig.

Beide Ideen stammen aus der Fertigung, besonders aus dem Toyota-Produktionssystem, und beide wurden auf Software und Services übertragen. Sie liegen den ITIL-4-Leitprinzipien „Fokus auf Wert“, „es einfach und praktikabel halten“ und „iterativ mit Feedback voranschreiten“ zugrunde (siehe Thema 1.5 — Die ITIL-Leitprinzipien). Dieses Thema erklärt die Schlüsselideen, zeigt, wie man sie auf Service-Arbeit anwendet, und zeigt, wo sie missbraucht werden können.

## Kernkonzepte

**Schlanke Fertigung und das Toyota-Produktionssystem.** Lean ist eine Bezeichnung für Produktionsmethoden, die aus dem Toyota-Produktionssystem hervorgingen, das nach dem Zweiten Weltkrieg entwickelt wurde. Ihre Ziele sind, dem Kunden Wert zu liefern, Verschwendung zu verringern und den Fluss zu verbessern. Die Wikipedia-Artikel zu Lean manufacturing und zum Toyota Production System geben den Hintergrund. Das Wort „Lean“ verbreitete sich nach Forschung zur Automobilproduktion im späten 20. Jahrhundert.

**Wert und Verschwendung.** Im Sinne von Lean ist Wert das, wofür der Kunde zu zahlen bereit ist oder dessen Fehlen er bemerken würde. Verschwendung, auf Japanisch „Muda“, ist jede Tätigkeit, die Ressourcen verbraucht und keinen Wert schafft. Lean benennt außerdem „Muri“ (Überlastung von Menschen oder Anlagen) und „Mura“ (Ungleichmäßigkeit der Arbeit). Zusammen werden diese drei oft die drei M genannt.

**Sieben Arten der Verschwendung, übertragen auf Service-Arbeit.** Die klassische Liste der sieben Verschwendungsarten in der Fertigung hat Entsprechungen in Services:

| Klassische Verschwendung | In der Service-Arbeit, zum Beispiel |
|---|---|
| Transport | Ein Ticket zwischen vielen Warteschlangen weiterreichen |
| Bestand | Ein Backlog an Anfragen, die nie jemand bearbeiten wird |
| Bewegung | Informationen in vielen Systemen suchen |
| Warten | Eine Anfrage liegt untätig und wartet auf Genehmigung |
| Überproduktion | Berichte und Funktionen, die niemand verlangt hat |
| Überbearbeitung | Genehmigungsschritte, die keine Sicherheit schaffen |
| Fehler | Falsche Korrekturen, die wiederholte Tickets verursachen |

Viele Lean-Autoren fügen eine achte hinzu, das ungenutzte Talent der Menschen. In der Software haben Mary und Tom Poppendieck die Liste in ihrer Arbeit zur schlanken Softwareentwicklung angepasst, die Wikipedia beschreibt.

**Fluss und Sog (Pull).** Lean organisiert Arbeit so, dass sie reibungslos fließt und dass neue Arbeit beginnt, wenn Kapazität da ist, statt hineingedrückt zu werden. Die Werkzeuge dazu finden Sie in Thema 2.3 — Fluss und Kanban.

**Respekt vor Menschen.** Lean bei Toyota ruht auf zwei Säulen, kontinuierlicher Verbesserung und Respekt vor Menschen. In der Praxis heißt das, die Menschen, die die Arbeit tun, zu bitten, die Probleme zu finden und die Lösungen vorzuschlagen, statt Änderungen von außen aufzuerlegen. Lean-Programme, die Personal abbauen und das Verbesserung nennen, missbrauchen die Idee.

**Kaizen.** Kontinuierliche Verbesserung durch kleine Änderungen. Wikipedia beschreibt Kaizen als einen Ansatz, den alle in einer Organisation anwenden, mit Änderungen, die klein genug sind, um schnell ausprobiert zu werden. Ein typischer Kaizen-Zyklus nutzt die Schleife Plan–Do–Check–Act (PDCA): eine Änderung planen, ausprobieren, das Ergebnis prüfen und übernehmen oder anpassen. Siehe Thema 3.15 — Kontinuierliche Verbesserung.

**Hingehen und ansehen (Gemba).** „Gemba“ ist der Ort, an dem die Arbeit geschieht. Lean-Praxis bittet Führungskräfte und Verbesserer, dorthin zu gehen, zu beobachten und Fragen zu stellen, statt sich auf Berichte zu verlassen. Für ein Service-Team kann Gemba der Service Desk sein, eine Ticket-Warteschlange oder ein Gespräch mit einem Kunden.

**Werkzeuge zur Ursachenanalyse.** Lean nutzt einfache Methoden wie die „Fünf Warum“ (wiederholt nach dem Warum fragen, bis man eine Ursache erreicht, auf die man reagieren kann) und die A3-Problemlösung (eine strukturierte einseitige Zusammenfassung). Sie unterstützen das Problem-Management (siehe Thema 3.3 — Problem-Management). Sie brauchen Sorgfalt: Fünfmal „warum“ zu fragen kann zu einer Person führen, der man die Schuld gibt, statt zu einer Ursache im System.

**Fehlervermeidung.** Poka-Yoke ist die Praxis, einen Schritt so zu gestalten, dass Fehler schwer zu machen sind oder sofort erkannt werden. In der Service-Arbeit kann das ein Pflichtfeld sein, eine Vorlage, eine Prüfung in einer Pipeline oder eine Bestätigung vor einer riskanten Handlung. Autonomation, manchmal Jidoka genannt, bezeichnet das Anhalten eines Prozesses, wenn ein Fehler erkannt wird, mit einer modernen Entsprechung in Pipelines, die bei einem fehlschlagenden Test anhalten.

**Die Linie anhalten (Stop-the-Line).** Die Andon-Leine in einem Toyota-Werk lässt jeden Arbeiter die Linie anhalten, wenn er ein Problem sieht. Übertragen auf Services kann jede Person ein Problem melden, das Kunden schaden könnte, und das Team behandelt das Signal als nützlich, nicht als störend.

**Lean und Agilität.** Lean-Denken hat die agile Softwareentwicklung beeinflusst, und beide überschneiden sich: kleine Lose, Feedback, kontinuierliche Verbesserung, Respekt vor Menschen. Dieser Leitfaden betont kontinuierliche Einbindung der Stakeholder, kontinuierliche Verbesserung und kontinuierliche Lieferung lauffähiger Änderungen, was Lean unterstützt.

**Wie die Blickwinkel passen.** Lean und Kaizen sind der Verbesserungsmotor für den agilen Blickwinkel. KI kann in Tickets Muster finden, die auf Verschwendung hindeuten, unter Prüfung. Automatisierung beseitigt wiederholte manuelle Schritte, nachdem Sie sie vereinfacht haben. Analytik zeigt, wo Arbeit wartet und wo Fehler entstehen.

## Bewährte Praktiken

1. **Definieren Sie Wert aus Sicht des Kunden.** Schreiben Sie für jeden Service auf, was der Kunde schätzt. Markieren Sie jeden Schritt im Prozess als wertschaffend, notwendig, aber nicht wertschaffend, oder Verschwendung.
2. **Gehen Sie hin und sehen Sie.** Verbringen Sie Zeit dort, wo die Arbeit geschieht, beobachten Sie reale Anfragen und sprechen Sie mit den Menschen, die sie bearbeiten. Berichte sind kein Ersatz.
3. **Beseitigen Sie Verschwendung vor dem Automatisieren.** Vereinfachen Sie zuerst den Prozess. Einen verschwenderischen Schritt zu automatisieren macht die Verschwendung billiger zu erzeugen, nicht kleiner.
4. **Lassen Sie die Menschen, die der Arbeit am nächsten sind, sie verbessern.** Geben Sie Teams Zeit, Befugnis und einen einfachen Weg, Änderungen auszuprobieren. Prüfen Sie ihre Ideen schnell und sagen Sie ihnen, was daraus wurde.
5. **Halten Sie Verbesserungen klein und schnell.** Zielen Sie auf Änderungen, die binnen Tagen ausprobiert werden können. Führen Sie sie als Experimente mit einer ausgesprochenen Erwartung und einem Prüfdatum durch.
6. **Beheben Sie Ursachen, nicht Menschen.** Wenn etwas schiefgeht, fragen Sie, was im System es zugelassen hat. Nutzen Sie Methoden der Ursachenanalyse, um Ursachen zu finden, und hören Sie nicht bei „menschlichem Versagen“ auf.
7. **Sichern Sie wiederholte Schritte gegen Fehler ab.** Ergänzen Sie Pflichtfelder, Vorlagen, Prüfungen und Bestätigungen dort, wo Fehler mehr als einmal aufgetreten sind.
8. **Lassen Sie jeden die Linie anhalten.** Schaffen Sie einen sicheren Weg, Bedenken zu einem Change oder einer Incident-Reaktion zu äußern. Danken Sie der Person, die sie geäußert hat.
9. **Führen Sie ein Verbesserungs-Board.** Zeigen Sie Verbesserungsideen, ihren Status und die Ergebnisse dort, wo Team und Stakeholder sie sehen können.
10. **Nutzen Sie Lean nicht als Deckmantel für Kürzungen.** Führt Verbesserung zu Entlassungen, hören Menschen auf, Verbesserungen vorzuschlagen. Sagen Sie, wie eingesparte Zeit verwendet wird.

## Fragen für die Diskussion im Team

**Was schätzen unsere Kunden an diesem Service, und was tun wir, das sie nicht bemerken würden, wenn wir damit aufhörten?**
Das trennt Wert von Tätigkeit. Teams finden oft Berichte, Genehmigungen oder Prüfungen, die niemand nutzt. Fragen Sie nach Möglichkeit nach der Sicht des Kunden. Wählen Sie anschließend eine Tätigkeit, die wir einen Monat lang einstellen, mit einer verantwortlichen Person, die auf Schäden achtet.

**Welche der klassischen Verschwendungsarten sehen wir am häufigsten, und was ist ein aktuelles Beispiel für jede?**
Nutzen Sie die Tabelle der sieben Verschwendungsarten. Menschen nennen meist zuerst Warten und Nacharbeit. Bitten Sie um reale Tickets oder Incidents. Wählen Sie anschließend die Verschwendung, die am meisten Zeit kostet.

**Wann hat zuletzt jemand eine Verbesserung vorgeschlagen, und was wurde aus der Idee?**
Das prüft das Verbesserungssystem. Vielleicht hören Sie, dass Ideen verschwinden oder dass ein Vorschlag bedeutet, die Arbeit zugeteilt zu bekommen. Fragen Sie, wie lange die Antwort dauerte. Vereinbaren Sie anschließend eine Antwortzeit und eine sichtbare Liste.

**Welche wiederholten Fehler könnten wir unmöglich machen oder zumindest offensichtlich?**
Suchen Sie Fehler, die immer wieder passieren: eine falsche Kategorie, ein fehlendes Feld, ein Befehl auf dem falschen System. Fragen Sie, wie ein einfacher Schutz aussähe. Wählen Sie anschließend einen Fehler und einen Schutz, den wir ausprobieren.

**Wo geben wir Menschen die Schuld, obwohl das System den Fehler zuließ?**
Das lotet die Kultur aus. Reviews enden oft mit „seid sorgfältiger“. Fragen Sie, was den Fehler wahrscheinlich machte und was ihn erschweren würde. Schreiben Sie anschließend das Fazit einer früheren Nachbetrachtung in Begriffen des Systems um.

**Wie würde KI uns helfen, Verschwendung zu finden, und wie prüfen wir, dass sie recht hatte?**
KI kann Tickets gruppieren, wiederholte Fragen finden und Kandidaten für Automatisierung vorschlagen. Sie kann auch Muster erfinden. Fragen Sie, wer eine Stichprobe dessen prüft, was sie findet. Wählen Sie anschließend eine Stichprobe von Tickets, an der wir ihre Gruppierung zuerst von Hand testen.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine staatliche Leistungsbehörde betreibt ein Kontaktzentrum, das Fragen zu Anträgen beantwortet. Die Mitarbeitenden sagen, sie verbrächten ihre Tage damit, „Informationen hinterherzujagen“. Die Teamleiterin, die einen kurzen Lean-Kurs besucht hat, beschließt, auf die Fläche zu gehen. Sie sitzt drei Tage bei den Agenten und hält für 120 Anrufe fest, aus welchem Grund jede Person anrief und was der Agent tat.

Sie stellt fest, dass 40 der 120 Anrufe Wiederholungsanrufe zum selben Antrag waren, weil der erste Agent den in einem anderen System gehaltenen Status nicht sehen konnte. Weitere 25 betrafen ein Schreiben, das Begriffe verwendete, die die Anrufenden nicht verstanden. Die Agenten verbrachten einen großen Teil jedes Anrufs damit, zwischen vier Bildschirmen zu wechseln.

Das Team erprobt über sechs Wochen drei kleine Änderungen: Es formuliert das verwirrende Schreiben mit wenigen einfachen Sätzen neu und testet es an einer Stichprobe von Antragstellenden, es ergänzt einen Bildschirm, der den aus dem anderen System gezogenen Antragsstatus zeigt, und es erstellt eine einseitige Anleitung für die fünf häufigsten Fragen. Die Agenten schlagen eine vierte Änderung vor, eine Vorlage für Gesprächsnotizen, die das erneute Erklären über Schichten hinweg verringert. Jede wird zwei Wochen erprobt und in einer kurzen wöchentlichen Besprechung geprüft.

Was sich ändert: Wiederholungsanrufe sinken in der Stichprobe, die das Team verfolgt, und Agenten berichten von weniger Wechseln. Was schwierig bleibt: Der Statusbildschirm hängt von einer Integration ab, die einer anderen Abteilung gehört und die ihre Pflege noch nicht zugesagt hat; das Team hat keinen guten Weg zu messen, ob Anrufende das Schreiben verstanden haben, außer sie zu fragen; und ein Vorgesetzter hat gefragt, wie viele Agentenstunden die Änderungen eingespart haben, was dazu verleitet, eine Zahl zu zählen. Die Leiterin hält den Fokus auf dem Erlebnis der Anrufenden und vereinbart mit ihrem Vorgesetzten, dass Einsparungen genutzt werden, um das Backlog abzubauen, nicht um Personal zu kürzen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Definieren Sie Wert aus Sicht der Nutzer und entfernen Sie Funktionen und Schritte, die ihm nicht dienen. Nutzen Sie kleine Experimente, sichern Sie wiederholte Schritte gegen Fehler ab und behandeln Sie betriebliche Probleme als Signale für Designänderungen.

### Service- und Betriebsteams

Sie sehen Verschwendung täglich. Halten Sie sie fest, bringen Sie Beispiele an das Verbesserungs-Board und probieren Sie kleine Korrekturen aus. Nutzen Sie Stop-the-Line, wenn ein Change oder eine Reaktion Kunden schaden könnte.

### Führung und Governance

Gehen Sie hin und sehen Sie. Fragen Sie das Team, was es ändern würde, und geben Sie Zeit dafür. Schützen Sie die Menschen, die Probleme melden. Machen Sie deutlich, dass Lean kein Kostensenkungsprogramm ist.

### Kunden und Nutzer

Sie wissen, was Sie schätzen. Sagen Sie dem Anbieter, welche Schritte für Sie sinnlos sind und welche helfen. Wenn Sie Feedback geben, erwarten Sie zu hören, was sich geändert hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Lean und Kaizen liefern die Verbesserungsgewohnheit: kleine Änderungen, häufiges Feedback, eingebundene Beteiligte und Menschen, denen man zutraut, ihre eigene Arbeit zu verbessern. Vorsicht: Verbesserungs-Boards können zu einem weiteren Backlog werden, das niemand prüft; halten Sie die Liste kurz und geprüft.

### KI

KI kann Tickets gruppieren, wiederholte Fragen finden und Hinweise geben, wo Verschwendung liegt. Jede Nutzung braucht eine verantwortliche Person und jemanden, der eine Stichprobe prüft. Vorsicht: Eine KI-Zusammenfassung kann Muster finden, die nur Artefakte der Ticket-Kategorisierung sind; verifizieren Sie an der Arbeit. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Schritte, die bleiben, nachdem die Verschwendung beseitigt und der Prozess stabil ist, etwa eine Anfrage weiterzuleiten oder einen Status zu aktualisieren, und führen Sie ein Protokoll und einen Weg zur Umkehrung. Vorsicht: Automatisierung kann einen schlechten Prozess festschreiben und Veränderung erschweren; überprüfen Sie nach jeder wesentlichen Automatisierung. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Messen Sie, wo Arbeit wartet, wie oft sie wiederholt wird und wie lange wiederholte Kontakte dauern. Vorsicht: „Eingesparte Stunden“ zu zählen lädt zu aufgeblähten Angaben ein und kann Vertrauen untergraben; verfolgen Sie auch das Erlebnis von Kunden und Team. Siehe Thema 7.6 — Prozess- und Wertstromanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Lean als Kostensenkung.** Menschen hören auf, Verbesserungen vorzuschlagen. Sagen Sie, wie Gewinne verwendet werden, und halten Sie dieses Versprechen.
- **Verbesserung aus der Ferne.** Berater gestalten neu, was sie nicht beobachtet haben. Gehen Sie hin, sehen Sie und beziehen Sie die Menschen ein, die die Arbeit tun.
- **Verschwendung automatisieren.** Ein schlechter Prozess wird per Skript abgebildet. Vereinfachen Sie zuerst.
- **Menschen die Schuld geben.** Reviews enden mit „menschliches Versagen“. Suchen Sie, was im System es zugelassen hat.
- **Verbesserungsideen verschwinden.** Menschen hören auf vorzuschlagen. Antworten Sie schnell und zeigen Sie die Liste.
- **Große Verbesserungsprogramme.** Der Wandel dauert ein Jahr und liefert wenig. Bevorzugen Sie kleine Experimente mit Prüfungen.
- **Einsparungen als Ziel zählen.** Zahlen werden aufgebläht. Messen Sie Kundenergebnisse und Erlebnis.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Wert und Verschwendung | Wert vorausgesetzt | Etwas Verschwendung erkannt | Wert und Verschwendung je Service definiert | Verschwendung verfolgt und verringert | Verschwendungsabbau über Services und Lieferanten abgestimmt |
| Verbesserungsgewohnheit | Verbesserung per Krise | Einige Fürsprecher | Regelmäßige kleine Experimente mit Review | Ergebnisse gemessen und geteilt | Verbesserung in Teams und über Partner hinweg verankert |
| Problemlösung | Schuldzuweisung | Etwas Ursachenanalyse | Standardmethode der Ursachenanalyse genutzt | Ursachen bis zur Vorbeugung verfolgt | Lernen in der Organisation geteilt |
| Fehlervermeidung | Selten | Ad-hoc-Schutz | Schutz für bekannte wiederholte Fehler | Wirkung des Schutzes gemessen | Schutz überall in Werkzeuge und Pipelines eingebaut |

## Checkliste

- [ ] Wir haben aufgeschrieben, was die Kunden jedes Services schätzen.
- [ ] Wir sind dorthin gegangen, wo die Arbeit geschieht, und haben reale Arbeit beobachtet.
- [ ] Wir haben Schritte als wertschaffend, notwendig oder Verschwendung eingestuft.
- [ ] Verbesserungsideen sind sichtbar, werden schnell beantwortet und verfolgt.
- [ ] Wir probieren Änderungen als kleine Experimente mit Prüfdatum aus.
- [ ] Reviews suchen Ursachen im System, keine Schuld.
- [ ] Wir haben Schutz für wiederholte Fehler ergänzt.
- [ ] Wir haben gesagt, wie Verbesserungsgewinne verwendet werden.

## KI-Prompts

**Stufen Sie Schritte zur Prüfung als Wert oder Verschwendung ein.**

```text
Here are the steps in our process for [service], with who does each and roughly how long it takes: [paste steps].
Propose for each step whether it adds value to the customer, is necessary but not value-adding, or looks like waste, with a one-line reason and a question to confirm with the people who do it. Do not recommend removing anything.
List what you are unsure of.
```

**Finden Sie wiederholte Fragen in Tickets.**

```text
Below are ticket titles and first messages, with personal data removed: [paste sample].
Group them into up to eight themes, count each, and quote two short examples per theme exactly. Do not guess causes.
List what you are unsure of.
```

**Verwandeln Sie eine Ursachennotiz in Fragen an das System.**

```text
Here is a summary of a recent failure: [paste summary].
Rewrite it as a list of questions about what in our system allowed the failure, avoiding blame, and suggest one guard to consider for each. Do not state causes that are not in the summary.
List what you are unsure of.
```

## KI-Skills

- [kaizen](../../../../skills/kaizen/SKILL.md): nutzen Sie ihn, um kleine Verbesserungsexperimente zu planen und durchzuführen.
- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): nutzen Sie ihn, um Ursachen im System zu finden.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): nutzen Sie ihn, um Verschwendung und Wartezeiten im Fluss zu sehen.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): nutzen Sie ihn, um mögliche Ursachen für die Diskussion zu ordnen.

## Wichtige Quellen

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1988): der Bericht eines Begründers über die Ideen.
- Mary und Tom Poppendieck, *Lean Software Development: An Agile Toolkit* (2003): überträgt Lean-Denken auf Software.
- Wikipedia, „Lean manufacturing“ und „Kaizen“: neutrale Zusammenfassungen mit weiterführender Literatur.
- Wikipedia, „Lean software development“: die Übertragung auf Software-Arbeit.

## Literaturverzeichnis

1. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
2. Kaizen — Wikipedia — https://en.wikipedia.org/wiki/Kaizen
3. Toyota Production System — Wikipedia — https://en.wikipedia.org/wiki/Toyota_Production_System
4. Muda (Japanese term) — Wikipedia — https://en.wikipedia.org/wiki/Muda_(Japanese_term)
5. Lean software development — Wikipedia — https://en.wikipedia.org/wiki/Lean_software_development
6. Gemba — Wikipedia — https://en.wikipedia.org/wiki/Gemba
7. Poka-yoke — Wikipedia — https://en.wikipedia.org/wiki/Poka-yoke
8. Andon (manufacturing) — Wikipedia — https://en.wikipedia.org/wiki/Andon_(manufacturing)
9. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
10. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
