# Problem-Management

**Problem-Management findet und beseitigt die Ursachen von Incidents, erfasst bekannte Fehler mit ihren Übergangslösungen und führt schuldfreie Nachbetrachtungen durch, deren Maßnahmen im Verbesserungs-Backlog landen. So hört ein Service-Team auf, denselben Ausfall immer wieder zu beheben.**

## Warum das wichtig ist

Ein Team, das Incidents gut bewältigt, kann trotzdem in einer Schleife gefangen sein. Dieselbe Art von Ausfall kehrt jeden Monat zurück, Reagierende wenden dieselbe Übergangslösung an, und die Kosten summieren sich: verlorene Nutzerzeit, müdes Bereitschaftspersonal und das wachsende Gefühl, dass nie etwas besser wird. Incident-Management stellt den Service wieder her; es verhindert keine Wiederholung.

Problem-Management ist die Praktik, die das tut. Es fragt, warum Incidents geschehen und was sie verhindern würde, und weist die Antworten jemandem zu, der handeln kann. Es führt außerdem Aufzeichnungen darüber, was über noch nicht behobene Ausfälle bekannt ist, damit die nächste reagierende Person nicht bei null beginnt.

Für agile Teams passt die Praktik natürlich in die kontinuierliche Verbesserung: Erkenntnisse werden zu Backlog-Punkten, die auf einer einzigen Liste mit Funktionen konkurrieren. Die Schwachstelle ist meist nicht die Methode, sondern die Priorität. Ursachen zu beheben verliert oft gegen neue Arbeit, solange niemand die Kosten der Wiederholung sichtbar macht. Dieses Thema erklärt die Praktik, die wichtigsten Methoden, Ursachen zu finden, und wie man verhindert, dass Erkenntnisse in einem Bericht sterben. Es ist ein enger Partner von Incident-Management (Thema 3.2 — Incident-Management), Wissensmanagement (Thema 3.9 — Wissensmanagement) und kontinuierlicher Verbesserung (Thema 3.15 — Kontinuierliche Verbesserung).

## Kernkonzepte

**Problem.** In ITIL 4 eine Ursache oder mögliche Ursache eines oder mehrerer Incidents. Ein Problem existiert, bevor es eine Lösung gibt; es kann bekanntermaßen Incidents verursachen oder nur vermutet werden. Nicht jeder Incident führt zu einem Problem-Datensatz.

**Bekannter Fehler (Known Error).** Ein Problem, das analysiert, aber nicht gelöst wurde, oft mit einer dokumentierten Übergangslösung. Wikipedia beschreibt den Begriff im ITIL-Gebrauch. Ein Datensatz zu einem bekannten Fehler lässt Service Desk und Reagierende die Übergangslösung schnell finden und den Stand der dauerhaften Behebung sehen.

**Übergangslösung (Workaround).** Ein Weg, die Auswirkung zu verringern oder zu vermeiden, ohne die Ursache zu beheben. Übergangslösungen machen das Leben erträglich und können durch Vernachlässigung zu Dauerlösungen werden. Ein guter Datensatz nennt die Übergangslösung, wer sie anwenden darf und das erwartete Datum für eine echte Behebung, damit das Vorläufige nicht unbemerkt dauerhaft wird.

**Die Aktivitäten.** Problemidentifikation, die Probleme aus Incident-Trends, Monitoring und Nachbetrachtungen findet; Problemkontrolle, die Ursachen analysiert und bekannte Fehler dokumentiert; und Fehlerkontrolle, die bekannte Fehler steuert, bis sie gelöst oder akzeptiert sind. ITIL beschreibt sie als Teile einer Praktik und nicht als getrennte Prozesse.

**Proaktiv und reaktiv.** Reaktives Problem-Management reagiert auf Incidents, die geschehen sind. Proaktives Problem-Management sucht Schwächen, bevor sie Incidents verursachen, zum Beispiel durch das Studium von Beinahe-Vorfällen, Trends bei Alarmen und Überprüfungen von Changes.

**Ursachenanalyse (Root Cause Analysis).** Eine Familie von Methoden, die zugrunde liegende Ursache eines Problems zu finden. Wikipedia beschreibt Root-cause analysis und listet gängige Techniken. Bekannte sind:

- *Fünf Warum*: wiederholt „warum“ fragen, bis man eine Ursache erreicht, auf die man reagieren kann.
- *Ursache-Wirkungs-Diagramme (Ishikawa oder Fischgräten)*: mögliche Ursachen nach Kategorien auslegen, um die Diskussion zu leiten.
- *Fehlerbaumanalyse*: von einem Ausfall rückwärts durch Kombinationen von Ereignissen arbeiten, die ihn verursachen könnten.
- *Pareto-Analyse*: Zählungen nutzen, um die wenigen Ursachen hinter den meisten Incidents zu finden.
- *Fehlermöglichkeits- und -einflussanalyse (FMEA)*: jeden Teil eines Systems darauf prüfen, wie er versagen könnte und was folgen würde.

**Vorsicht bei Ursachen.** Komplexe Systeme haben selten eine einzige Grundursache. Das Schweizer-Käse-Modell (Swiss cheese model), auf Wikipedia beschrieben, stellt Ausfälle als das Zusammentreffen von Schwächen in mehreren Verteidigungsschichten dar. Die Suche nach „der“ Grundursache neigt dazu, bei der ersten bequemen Erklärung zu enden. Meist ist es nützlicher, beitragende Faktoren zu benennen und zu entscheiden, welche am billigsten und wertvollsten zu ändern sind.

**Schuldfreie Kultur und Just Culture.** Schuldzuweisung stoppt Lernen: Menschen verbergen Fehler, und Nachbetrachtungen werden defensiv. Eine schuldfreie Nachbetrachtung fragt, was im System die Handlung zum jeweiligen Zeitpunkt vernünftig erscheinen ließ. Eine Just Culture, auf Wikipedia beschrieben, unterscheidet ehrlichen Fehler von leichtfertigem Verhalten und behandelt beides verschieden. Die Wikipedia-Artikel zu Human error und Hindsight bias erklären, warum „jemand hätte es wissen müssen“ selten eine nützliche Erkenntnis ist.

**Postmortems.** Eine schriftliche Nachbetrachtung nach einem wesentlichen Incident, die abdeckt, was geschah, Auswirkung, Zeitverlauf, beitragende Faktoren, was gut lief, und Maßnahmen. Siehe den Wikipedia-Artikel zu Postmortem documentation. Ein gutes Postmortem wird gelesen und umgesetzt; ein schlechtes wird abgelegt.

**Probleme priorisieren.** Es gibt immer mehr Probleme als Kapazität. Ordnen Sie sie nach Auswirkung, etwa verlorene Nutzerstunden oder Kosten, Häufigkeit und danach, wie billig die Behebung ist. Zeigen Sie die Kosten der Wiederholung. Technische Schulden (Technical debt), ein auf Wikipedia beschriebener Begriff, umfassen bekannte Probleme, die zurückgestellt wurden; sie zu verfolgen macht die Wahl sichtbar.

**Verknüpfung mit Change.** Ein Problem zu beheben erfordert meist einen Change. Beantragen Sie ihn über die normale Change-Praktik und stellen Sie sicher, dass der Problem-Datensatz geschlossen wird, wenn die Behebung bestätigt ist. Siehe Thema 3.4 — Change Enablement.

**Verknüpfung mit Wissen.** Ein bekannter Fehler und seine Übergangslösung sollten in Wissensartikeln erscheinen, die Service Desk und Bereitschaftspersonal finden können. Siehe Thema 3.9 — Wissensmanagement.

**Wie die Blickwinkel passen.** Problem-Management ist der Ort, an dem agile Verbesserung auf den Betrieb trifft: Erkenntnisse gehen ins Backlog und konkurrieren offen. KI kann Incidents gruppieren, Kandidaten für Probleme vorschlagen und Postmortems entwerfen, unter Prüfung. Automatisierung kann Wiederholungen erkennen und getestete Übergangslösungen anwenden. Analytik zeigt Wiederholung und Kosten.

## Bewährte Praktiken

1. **Suchen Sie Muster, nicht nur einzelne Incidents.** Prüfen Sie Incidents regelmäßig auf Wiederholungen nach Service, Komponente, Change und Zeit. Eröffnen Sie ein Problem, wenn ein Muster auftritt.
2. **Führen Sie eine sichtbare Problemliste.** Erfassen Sie jedes Problem mit einer verantwortlichen Person, den verknüpften Incidents, der Auswirkung, der Übergangslösung und dem Plan. Machen Sie die Liste für Reagierende leicht lesbar.
3. **Dokumentieren Sie bekannte Fehler mit Übergangslösungen.** Schreiben Sie sie so, dass eine müde Bereitschaftsperson ihnen folgen kann, und verknüpfen Sie sie mit der Wissensdatenbank des Service Desk.
4. **Wählen Sie die Methode passend zum Problem.** Nutzen Sie Fünf Warum für einfache Fälle, ein Fischgrätendiagramm für die Gruppendiskussion, Fehlerbäume für komplexe Ausfälle und Pareto-Diagramme, um den Schwerpunkt zu finden. Wenden Sie keine schweren Methoden auf kleine Probleme an.
5. **Benennen Sie beitragende Faktoren, nicht einen Schuldigen.** Listen Sie alle Bedingungen auf, die den Ausfall möglich machten, und bewerten Sie, welche praktikabel zu ändern sind. Vermeiden Sie Erkenntnisse, die mit „menschliches Versagen“ enden.
6. **Halten Sie schuldfreie Nachbetrachtungen.** Laden Sie die Beteiligten ein, nennen Sie die Regeln und konzentrieren Sie sich auf das System. Teilen Sie die schriftliche Nachbetrachtung weit.
7. **Machen Sie Maßnahmen konkret und mit Verantwortlichen.** Jede Maßnahme hat eine namentlich benannte Person, einen Termin und einen Weg zu prüfen, dass sie erledigt ist. Legen Sie sie in das Backlog, aus dem das Team tatsächlich arbeitet.
8. **Zeigen Sie die Kosten des Nichtbehebens.** Summieren Sie für jedes Problem Incident-Stunden, Nutzerauswirkung und Bereitschaftslast und nutzen Sie die Summen bei der Priorisierung. Stellen Sie sie denen vor, die Prioritäten setzen.
9. **Schließen Sie den Kreis.** Wenn eine Behebung ausgeliefert wird, bestätigen Sie, dass Incidents aufhören, aktualisieren Sie den Wissensartikel und schließen Sie den Datensatz. Bleibt das Problem bestehen, öffnen Sie ihn erneut.
10. **Überprüfen Sie die Praktik.** Prüfen Sie, wie viele Probleme offen sind, wie lange sie bestehen und ob wiederholte Incidents abnehmen. Legen Sie Probleme still, deren Behebung sich nicht lohnt, mit einer festgehaltenen Entscheidung.

## Fragen für die Diskussion im Team

**Welche Incidents sind in den letzten sechs Monaten drei- oder mehrmals aufgetreten, und warum geschehen sie weiter?**
Beginnen Sie mit realen Beispielen. Rechnen Sie mit einer Mischung aus „wir sind nie dazu gekommen“ und „wir kennen die Ursache nicht“. Fragen Sie, was jede Wiederholung kostete. Wählen Sie anschließend einen, den wir beheben, und einen, den wir förmlich akzeptieren.

**Wie entscheiden wir, welche Probleme wir zuerst beheben, und wer entscheidet?**
Priorisierung ist oft implizit. Vielleicht hören Sie, dass die lauteste Person gewinnt. Fragen Sie, welche Daten wir nutzen. Vereinbaren Sie anschließend Kriterien und zeigen Sie die Kosten für die fünf wichtigsten Probleme.

**Als wir zuletzt „menschliches Versagen“ in eine Nachbetrachtung schrieben, was hat das System zugelassen?**
Das prüft schuldfreie Praxis. Nehmen Sie eine frühere Nachbetrachtung und fragen Sie, was die Handlung leicht machte. Suchen Sie fehlende Sicherungen, unklare Informationen oder Zeitdruck. Schreiben Sie anschließend die Erkenntnis in Begriffen des Systems neu.

**Wo leben bekannte Fehler und Übergangslösungen, und kann eine müde Person sie um 3 Uhr nachts finden?**
Wissen, das in Chat-Verläufen verstreut ist, ist schwer zu finden. Versuchen Sie gemeinsam, eines zu finden. Rechnen Sie mit Verzögerungen. Vereinbaren Sie anschließend einen Ort und eine Benennungsgewohnheit.

**Welche Maßnahmen aus unseren letzten drei Nachbetrachtungen sind noch offen, und warum?**
Das prüft die Umsetzung. Rechnen Sie mit Konkurrenz zu Funktionsarbeit. Fragen Sie, wer zwischen beiden die Priorität entscheidet. Vereinbaren Sie anschließend einen Kapazitätsanteil für Problemmaßnahmen.

**Wie könnte KI uns helfen, Muster in Incidents zu finden, und wie prüfen wir, dass sie recht hatte?**
KI kann Incidents gruppieren und Ursachen vorschlagen. Sie kann auch falsche Muster finden. Fragen Sie, wer prüft und wie. Vergleichen Sie anschließend an einer Stichprobe eine KI-Gruppierung mit einer manuellen.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Team der Lernplattform einer Universität hat alle paar Wochen einen wiederkehrenden Incident: Studierende können kurz vor einer Frist keine Abgaben einreichen. Der Service Desk wendet jedes Mal dieselbe Übergangslösung an, den Neustart eines Warteschlangen-Services, der die Abgaben binnen 15 Minuten wiederherstellt. Jedes Mal wird der Incident geschlossen und vergessen.

Die Service-Verantwortliche schlägt vor, es als Problem zu behandeln. Sie sammelt die letzten neun Incidents und erfasst für jeden die Zeit, die Last zu dem Zeitpunkt und die Changes der Vorwoche. Eine Pareto-Analyse hilft nicht, da es nur eine Ursachenkategorie gibt, aber ein Zeitverlauf zeigt, dass jeder Incident binnen einer Stunde vor einer Frist geschah, wenn die Abgaben sprunghaft ansteigen. Eine Fischgrätendiskussion mit Entwicklung und Betrieb listet beitragende Faktoren: Der Warteschlangen-Service hat ein festes Speicherlimit; kein Alarm warnt, bevor es sich füllt; eine jüngere Änderung vergrößerte jede Abgabe; und die Kapazitätsplanung bezog Fristspitzen nicht ein.

Das Team benennt drei Maßnahmen: das Speicherlimit anheben und die neue Spitze testen, einen Alarm bei 70 Prozent der Kapazität ergänzen und einen Artikel zum bekannten Fehler schreiben, damit der Service Desk die Übergangslösung und den Stand der Behebung sieht. Außerdem nehmen sie Fristenkalender in die Kapazitätsüberprüfung auf. Die Service-Verantwortliche zeigt der Führung, dass das Problem in drei Monaten etwa 15 Stunden Störung für Studierende und neun Bereitschaftsunterbrechungen kostete, und die Arbeit wird vor einer kleinen Funktion eingeplant.

Was sich ändert: Die nächste Frist verläuft ohne Incident, und der Alarm löst einmal bei 72 Prozent aus und lässt Zeit zu handeln. Was schwierig bleibt: Die Anhebung des Limits war ein Notbehelf, denn der Warteschlangen-Service braucht einen Neuentwurf für größere Dateien, der mit der Roadmap des nächsten Semesters konkurriert; die Kostenzahlen sind Schätzungen aus Ticketzeiten; und die Nachbetrachtung prüfte nicht, ob die frühere Änderung der Größe ordentlich getestet wurde. Die Verantwortliche führt den Neuentwurf als weiterhin offenes Problem mit einem Prüfdatum.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Behandeln Sie Problemmaßnahmen als Teil Ihres Backlogs. Beheben Sie Ursachen im Design, ergänzen Sie Tests und Alarme, die bekannte Ausfälle fangen, und tragen Sie zu Nachbetrachtungen bei. Geben Sie Probleme nicht allein an den Betrieb ab.

### Service- und Betriebsteams

Erfassen Sie Muster und bekannte Fehler und bringen Sie Daten zu Kosten und Wiederholung in die Planung ein. Halten Sie Übergangslösungen dokumentiert und auffindbar. Führen Sie Nachbetrachtungen durch, an denen Menschen sich sicher beteiligen.

### Führung und Governance

Verlangen Sie, wiederkehrende Incidents und ihre Kosten zu sehen, und schützen Sie Kapazität, sie zu beheben. Achten Sie darauf, ob Furcht vor Schuldzuweisung in der Art mitschwingt, wie Nachbetrachtungen besprochen werden. Verfolgen Sie das Alter offener Probleme.

### Kunden und Nutzer

Sie sollten hören, wenn ein wiederkehrendes Problem eine Ursache und eine Behebung hat. Wenn Sie dasselbe Problem zweimal melden, sagen Sie das. Fragen Sie, was dagegen getan wurde.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Legen Sie Problemmaßnahmen auf dasselbe Backlog wie Funktionen und besprechen Sie sie mit den Beteiligten, indem Sie laufend kleine Korrekturen liefern. Vorsicht: Wird Problemarbeit stets hinter Funktionen zurückgestellt, wächst das Backlog, und Incidents gehen weiter; vereinbaren Sie einen geschützten Kapazitätsanteil.

### KI

KI kann Incidents gruppieren, mit Changes verknüpfen, mögliche Ursachen vorschlagen und Postmortems aus Zeitverläufen entwerfen, wobei eine Person prüft. Benennen Sie für jede Nutzung eine verantwortliche Person. Vorsicht: KI kann Ursachen erfinden oder Muster übertreiben; behandeln Sie ihre Vorschläge als Hypothesen und testen Sie sie an Daten. Siehe Thema 5.2 — AIOps und Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Automatisieren Sie das Erkennen von Wiederholungen, das Anlegen von Problem-Datensätzen aus Mustern und getestete Übergangslösungen, mit Protokollen und Grenzen. Vorsicht: Eine automatisierte Übergangslösung kann ein sich verschlimmerndes Problem verbergen; verfolgen Sie, wie oft sie auslöst, und setzen Sie eine Schwelle für die Eskalation. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Betrachten Sie Wiederholungsraten, Alter und Kosten offener Probleme und den Anteil der Incidents, die mit bekannten Problemen verknüpft sind. Vorsicht: Zählungen geschlossener Probleme lassen sich manipulieren, indem man sie vorzeitig schließt oder aufteilt; prüfen Sie, dass Incidents tatsächlich abnehmen. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Den Incident beheben, nie die Ursache.** Die Übergangslösung wird dauerhaft. Eröffnen Sie ein Problem, wenn ein Muster auftritt.
- **Die Jagd nach der einen Grundursache.** Das Team hört bei einer bequemen Antwort auf. Listen Sie beitragende Faktoren auf und wählen Sie, welche Sie ändern.
- **Schuldzuweisung.** Menschen verbergen Fehler. Halten Sie schuldfreie Nachbetrachtungen und verfolgen Sie die Änderungen am System.
- **Berichte ohne Verantwortliche.** Maßnahmen werden aufgelistet und nicht erledigt. Weisen Sie Verantwortliche und Termine zu und überprüfen Sie.
- **Keine Kosten gezeigt.** Probleme verlieren gegen Funktionen. Summieren Sie die Kosten der Wiederholung.
- **Bekannte Fehler schwer zu finden.** Reagierende beginnen bei null. Führen Sie einen durchsuchbaren Ort.
- **Schließen ohne Prüfung.** Die Behebung wirkt nicht. Bestätigen Sie vor dem Schließen, dass Incidents aufhören.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Identifikation | Nur nach großen Incidents | Einige wiederholte Incidents geprüft | Regelmäßige Musterprüfung eröffnet Probleme | Trends und Beinahe-Vorfälle proaktiv genutzt | Probleme automatisch und über Services hinweg gefunden |
| Analyse | Raten | Informelle Methoden | Standardmethoden je Problemart | Methodenqualität überprüft | Analyse über Teams und Partner geteilt |
| Bekannte Fehler | In Köpfen | Einige dokumentiert | Mit Übergangslösungen an einem auffindbaren Ort erfasst | Nutzung und Genauigkeit überprüft | Mit Automatisierung und Wissen über Services hinweg verknüpft |
| Maßnahmen und Lernen | Schuldzuweisung und verlorene Maßnahmen | Gelegentliche Nachverfolgung | Maßnahmen mit Verantwortlichen im Backlog, schuldfreie Nachbetrachtungen | Wiederholung und Erledigung von Maßnahmen gemessen | Lernen in der Organisation geteilt und angewendet |

## Checkliste

- [ ] Wir prüfen Incidents regelmäßig auf Wiederholungen.
- [ ] Wir führen eine sichtbare Problemliste mit Verantwortlichen und Kosten.
- [ ] Bekannte Fehler und Übergangslösungen sind an einem auffindbaren Ort dokumentiert.
- [ ] Nachbetrachtungen sind schuldfrei und benennen beitragende Faktoren.
- [ ] Jede Maßnahme hat eine verantwortliche Person, einen Termin und einen Weg, die Erledigung zu prüfen.
- [ ] Problemarbeit hat geschützte Kapazität im Backlog.
- [ ] Wir bestätigen Behebungen, bevor wir Probleme schließen.
- [ ] KI für Analysen hat eine verantwortliche Person und stichprobenartige Prüfung.

## KI-Prompts

**Finden Sie wiederholte Incidents.**

```text
Below is a list of incidents with dates, services, short descriptions, and resolutions, with names removed: [paste list].
Group those that look like repeats, state what they have in common, and list for each group two questions to investigate. Do not name causes. Mark groups you are unsure of.
List what you are unsure of.
```

**Verwandeln Sie eine Nachbetrachtung in eine Liste beitragender Faktoren.**

```text
Here is a postmortem draft: [paste, names removed].
List contributing factors in categories (technical, process, information, people and workload, suppliers), quoting the text for each, and list what the draft does not say about each. Do not assign blame or add causes.
List what you are unsure of.
```

**Schätzen Sie die Kosten der Wiederholung.**

```text
For problem [name] we have these records: incident count, duration of each, users affected, on-call interruptions: [paste data].
Calculate total hours, hours per incident, and per month, showing every step. State what data is missing for a fair cost estimate. Do not guess missing numbers.
List what you are unsure of.
```

## KI-Skills

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): nutzen Sie ihn, um Ursachen mit einer geeigneten Methode zu analysieren.
- [fishbone-diagram](../../../../skills/fishbone-diagram/SKILL.md): nutzen Sie ihn, um mögliche Ursachen in einer Gruppendiskussion zu ordnen.
- [postmortem](../../../../skills/postmortem/SKILL.md): nutzen Sie ihn, um eine schuldfreie Nachbetrachtung zu schreiben und nachzuverfolgen.
- [cause-and-effect-diagram](../../../../skills/cause-and-effect-diagram/SKILL.md): nutzen Sie ihn, um Ursachen und Wirkungen abzubilden.
- [risks-actions-issues-decisions](../../../../skills/risks-actions-issues-decisions/SKILL.md): nutzen Sie ihn, um Maßnahmen bis zur Erledigung zu verfolgen.

## Wichtige Quellen

- Sidney Dekker, *The Field Guide to Understanding "Human Error"*: dazu, warum Schuldzuweisung an Einzelne scheitert und worauf man stattdessen schauen sollte.
- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zur Postmortem-Kultur, frei unter sre.google.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Problem-Management durch den Eigentümer.
- Wikipedia, „Root-cause analysis“ und „Postmortem documentation“: Überblicke über Methoden und Dokumente.

## Literaturverzeichnis

1. Root-cause analysis — Wikipedia — https://en.wikipedia.org/wiki/Root-cause_analysis
2. Known error — Wikipedia — https://en.wikipedia.org/wiki/Known_error
3. Five whys — Wikipedia — https://en.wikipedia.org/wiki/Five_whys
4. Ishikawa diagram — Wikipedia — https://en.wikipedia.org/wiki/Ishikawa_diagram
5. Fault tree analysis — Wikipedia — https://en.wikipedia.org/wiki/Fault_tree_analysis
6. Failure mode and effects analysis — Wikipedia — https://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis
7. Pareto principle — Wikipedia — https://en.wikipedia.org/wiki/Pareto_principle
8. Swiss cheese model — Wikipedia — https://en.wikipedia.org/wiki/Swiss_cheese_model
9. Just culture — Wikipedia — https://en.wikipedia.org/wiki/Just_culture
10. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
11. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
