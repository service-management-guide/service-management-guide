# DevOps

**DevOps ist eine Gruppe kultureller Gewohnheiten, Arbeitspraktiken und Werkzeuge, die Entwicklung und Betrieb zusammenbringen, damit Teams laufende Services schnell ändern und zuverlässig betreiben können. Es ergänzt ITIL, indem es viele Kontrollen in die Arbeit selbst verlegt, und ersetzt nicht die Notwendigkeit klarer Verantwortung und Belege.**

## Warum das wichtig ist

Jahrelang waren Software bauen und Software betreiben getrennte Aufgaben in getrennten Teams mit unterschiedlichen Zielen. Entwickelnde wurden für Veränderung belohnt, der Betrieb für Stabilität, und beide Gruppen trafen sich an einer Übergabe, die beide frustrierend fanden. Releases wurden über die Mauer geworfen, Incidents zurückgeworfen, und Kunden warteten.

DevOps entstand Ende der 2000er-Jahre als Antwort darauf. Seine Kernidee ist einfach: Die Menschen, die einen Service bauen, sollten Verantwortung für seinen Betrieb teilen, und die Menschen, die ihn betreiben, sollten mitgestalten, wie er gebaut wird. Diese geteilte Verantwortung, gestützt auf Automatisierung und schnelles Feedback, lässt Teams oft ausliefern und sich schnell erholen.

Für das Service-Management ist DevOps ein bedeutender Einfluss und manchmal eine Quelle von Reibung. ITIL beschreibt Praktiken wie Change Enablement und Incident-Management, und DevOps beschreibt, wie Teams sie mit Pipelines, gemeinsamer Bereitschaft und schuldfreier Nachbetrachtung ausführen. Organisationen, die beide als Gegensätze behandeln, enden mit Parallelsystemen; die, die sie verbinden, erhalten Kontrollen, die schneller und besser belegt sind. Dieses Thema erklärt die Ideen und zeigt, wie sie zum Rest dieses Leitfadens passen.

## Kernkonzepte

**Was DevOps ist.** Das Wort verbindet „Development“ und „Operations“. Wikipedia beschreibt es als eine Gruppe von Praktiken, die Softwareentwicklung und IT-Betrieb integriert, mit dem Ziel, den Lieferlebenszyklus zu verkürzen und kontinuierliche Lieferung in hoher Qualität zu ermöglichen. Es ist mehr eine Bewegung als ein Framework: Es gibt kein Leitungsgremium und keine einzelne Zertifizierung, die es definiert.

**Zuerst die Kultur.** Die zentrale Veränderung ist kulturell: gemeinsame Ziele, geteilte Verantwortung und Zusammenarbeit zwischen Rollen. Teams, die die Werkzeuge ohne die Kultur übernehmen, behalten die alte Übergabe unter neuem Namen. Eine verbreitete Kurzfassung lautet „you build it, you run it“, verbunden mit einer Äußerung von Werner Vogels von Amazon, und bedeutet, dass das Team, das einen Service baut, für seinen Betrieb verantwortlich ist.

**Die drei Wege.** Im Roman *The Phoenix Project* und im Handbuch, das darauf folgte, beschreiben Gene Kim und Mitautoren drei Prinzipien: Fluss (Arbeit von Entwicklung über Betrieb zum Kunden beschleunigen), Feedback (an jeder Stufe schnelles Feedback von rechts nach links schaffen) und kontinuierliches Lernen und Experimentieren. Sie verknüpfen DevOps mit schlankem Denken; siehe Thema 2.4 — Lean und Kaizen und Thema 2.3 — Fluss und Kanban.

**CALMS.** Eine verbreitete Gedächtnisstütze für die Elemente: Culture (Kultur), Automation, Lean, Measurement (Messung) und Sharing (Teilen). Sie ist nützlich als Checkliste, worauf man bei einem Team achtet, nicht als Reifegradwert.

**Praktiken.** Typische DevOps-Praktiken umfassen Versionsverwaltung für alles, Continuous Integration und Delivery (siehe Thema 2.2 — Continuous Delivery), Infrastructure as Code (siehe Thema 6.3 — Infrastructure as Code und GitOps), automatisiertes Testen, Monitoring und Observability (siehe Thema 7.4 — Observability und Telemetrie), gemeinsame Bereitschaft und schuldfreie Nachbetrachtungen von Incidents.

**Nach links verschieben (Shifting Left).** Prüfungen wie Testen und Sicherheit früher im Lebenszyklus vornehmen, wo Probleme billiger zu beheben sind. DevSecOps erweitert die Idee auf Sicherheit, indem Sicherheitsprüfungen in die Pipeline eingebaut werden. Wikipedia beschreibt beides.

**Platform Engineering.** Eine neuere Praktik, in der ein Team eine interne Plattform baut und betreibt, die andere Teams zum Bauen, Ausrollen und Betreiben von Services nutzen. Das Ziel ist, die Last der Produktteams zu verringern, indem gebahnte, standardisierte Wege angeboten werden. Wikipedia beschreibt Platform Engineering. Sorgfalt ist nötig: Eine Plattform, die Teams nutzen müssen, aber nicht mitgestalten können, wird zu einer weiteren Übergabe.

**Verhältnis zu ITIL.** ITIL 4 erkennt DevOps an und beschreibt seine Praktiken so, dass sie durch Pipeline-Kontrollen erfüllt werden können. Beide beantworten verschiedene Fragen: DevOps beschreibt, wie Teams arbeiten und automatisieren; ITIL beschreibt die Praktiken, die eine Organisation braucht, etwa Incident-, Change- und Service-Level-Management. Eine nützliche Kurzfassung ist, dass DevOps oft das „Wie“ liefert und ITIL das „Was zu bedenken ist“. Siehe Thema 1.2 — ITIL und Thema 2.9 — Agiles Service-Management.

**Verhältnis zu SRE.** Site Reliability Engineering (SRE) ist eine Ingenieursdisziplin für Zuverlässigkeit, die bei Google gewachsen ist; sie teilt Ziele mit DevOps, nutzt Service-Level-Ziele und Fehlerbudgets und behandelt den Betrieb oft als Softwareproblem. Siehe Thema 2.6 — Site Reliability Engineering.

**Verhältnis zu Agilität.** Agile Praxis konzentriert sich darauf, lauffähige Software in kleinen Stücken mit Einbindung der Stakeholder zu liefern; DevOps erweitert das Anliegen über den Zeitpunkt des Releases hinaus auf den Betrieb und die Verbesserung des Services. Beide teilen Werte wie Zusammenarbeit, schnelles Feedback und kontinuierliche Verbesserung.

**Häufige Einwände.** Manche Betriebsmitarbeitende fürchten, DevOps bedeute Stellenabbau oder den Wegfall von Kontrollen; manche Entwickelnde fürchten, es bedeute dauerhafte Bereitschaft. Beide Befürchtungen haben reale Fälle hinter sich. Sprechen Sie sie direkt an, mit klaren Vereinbarungen zu Arbeitslast, Unterstützung und dazu, welche Kontrollen bleiben.

**Wie die Blickwinkel passen.** DevOps ist die Lieferkultur innerhalb des agilen Blickwinkels. KI-Assistenten sind inzwischen Teil vieler Toolchains, unter menschlicher Prüfung. Automatisierung ist zentral. Analytik, einschließlich Kennzahlen zu Lieferung und Zuverlässigkeit, schließt die Feedbackschleife.

## Bewährte Praktiken

1. **Beginnen Sie mit gemeinsamen Zielen.** Geben Sie Entwicklung und Betrieb dasselbe Ergebnis, um das sie sich kümmern, etwa für Kunden sichtbare Zuverlässigkeit und die Geschwindigkeit sicherer Änderung. Getrennte Ziele für jede Gruppe errichten die Mauer neu.
2. **Machen Sie das Team für das verantwortlich, was es baut.** Lassen Sie das Team, das einen Service baut, am Betrieb teilnehmen, mit der Unterstützung, Schulung und den Grenzen für die Bereitschaftslast, die das tragfähig machen.
3. **Automatisieren Sie den Weg in die Produktion.** Nutzen Sie Pipelines, die jedes Mal gleich bauen, testen, scannen und ausrollen, mit Aufzeichnungen. Siehe Thema 6.4 — Pipelines und automatisierte Changes.
4. **Legen Sie alles in die Versionsverwaltung.** Code, Konfiguration, Infrastrukturdefinitionen und Runbooks. Eine Änderung ist dann prüfbar, nachvollziehbar und umkehrbar.
5. **Verschieben Sie Prüfungen nach links.** Ergänzen Sie Unit-Tests, Sicherheitsscans und Richtlinienprüfungen früh in der Pipeline und beheben Sie die Ursachen wiederholter Fehlschläge.
6. **Beobachten Sie die Produktion und teilen Sie, was Sie sehen.** Geben Sie Entwickelnden Zugang zu demselben Monitoring, das der Betrieb nutzt, und besprechen Sie es gemeinsam. Siehe Thema 3.10 — Monitoring und Event-Management.
7. **Besprechen Sie Incidents ohne Schuldzuweisung.** Halten Sie nach wesentlichen Incidents eine Nachbetrachtung, konzentrieren Sie sich auf das System und verfolgen Sie die Maßnahmen. Siehe Thema 3.3 — Problem-Management.
8. **Bieten Sie eine Plattform an, kein Mandat.** Wenn Sie eine interne Plattform bauen, behandeln Sie die Teams, die sie nutzen, als Kunden: Fragen Sie, was sie brauchen, veröffentlichen Sie die Roadmap und messen Sie, ob sie hilft.
9. **Behalten Sie Kontrollen, ändern Sie, wie sie funktionieren.** Wo eine Kontrolle ein reales Risiko steuert, etwa Funktionstrennung, behalten Sie sie und erfüllen Sie sie mit Automatisierung und Aufzeichnungen statt mit einer Besprechung.
10. **Messen Sie Lieferung und Zuverlässigkeit gemeinsam.** Schauen Sie darauf, wie schnell und wie oft Sie ändern, ebenso wie darauf, wie oft Änderungen Ärger verursachen und wie schnell Sie sich erholen. Nutzen Sie die Zahlen zum Lernen, nicht um Menschen zu ranken.

## Fragen für die Diskussion im Team

**Wo liegt die Übergabe zwischen Bauen und Betreiben, und was geht dort verloren?**
Die meisten Organisationen haben eine oder mehrere. Fragen Sie beide Seiten: Was wissen Entwickelnde nicht über den Betrieb des Services, und was weiß der Betrieb nicht über das Design? Rechnen Sie mit langen Listen. Wählen Sie anschließend eine Übergabe, die wir beseitigen oder verkleinern.

**Wer wird nachts gerufen, wenn unser Service ausfällt, und weiß diese Person, wie man es behebt?**
Das prüft „you build it, you run it“ in der Praxis. Die Antworten reichen von einem Entwickler in Bereitschaft bis zu einem separaten Team mit begrenztem Wissen. Fragen Sie nach Arbeitslast und gegebener Schulung. Vereinbaren Sie anschließend eine Änderung, die entweder das Wissen oder die Last verbessert.

**Welche Kontrollen haben wir, die wegen eines früheren Incidents existieren, und könnte eine Pipeline sie bieten?**
Viele Kontrollen sind ererbt. Fragen Sie, welches Risiko jede adressiert und welche Belege die verantwortliche Person zufriedenstellen. Erproben Sie anschließend einen Pipeline-Ersatz unter Beteiligung der verantwortlichen Person.

**Was müsste unsere interne Plattform leisten, damit wir sie freiwillig wählen?**
Das prüft Plattformdenken. Würden Teams sie nur nutzen, weil man es ihnen sagt, dient sie ihnen nicht. Fragen Sie, was sie heute nutzen und warum. Vereinbaren Sie anschließend eine kleine Reihe von Kundeninterviews.

**Wie besprechen wir Incidents, und was hat sich nach dem letzten geändert?**
Nachbetrachtungen zählen nur, wenn Maßnahmen folgen. Bitten Sie um die Maßnahmen der letzten Nachbetrachtung und ihren Status. Rechnen Sie damit, dass einige noch offen sind. Weisen Sie anschließend den noch offenen Maßnahmen Verantwortliche und Prüfdaten zu.

**Wie werden KI-Assistenten für Code oder Betrieb in unserer Toolchain eingesetzt, und wer prüft ihre Ausgabe?**
KI-Assistenten können Code, Tests, Konfiguration und Runbooks schreiben und Incidents zusammenfassen. Fragen Sie, wer jede Nutzung verantwortet, was von einer Person geprüft wird und was einen Fehler fangen würde. Wählen Sie anschließend eine Nutzung, die wir diesen Monat prüfen.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Retail-Digitalteam einer Regionalbank baut eine mobile App, und eine separate Betriebsgruppe betreibt die Produktion. Releases erfolgen alle sechs Wochen, mit einem dreitägigen Freeze. Entwickelnde sagen, der Betrieb blockiere Veränderung; der Betrieb sagt, Entwickelnde lieferten ungetesteten Code aus und ließen ihn allein damit fertigwerden. Nachbetrachtungen von Incidents enden im Streit darüber, wer schuld war.

Ein neuer Engineering-Manager schlägt ein Experiment mit einem Service vor, der Funktion Kartensteuerung. Ein Entwickler und ein Betriebsingenieur schließen sich demselben Team an. Sie vereinbaren ein gemeinsames Ziel: Kunden können eine Karte in unter fünf Sekunden sperren und entsperren, und Änderungen lassen sich jederzeit sicher ausliefern. Sie legen die Konfiguration in die Versionsverwaltung, ergänzen automatisierte Tests und Sicherheitsscans in einer Pipeline und vereinbaren, dass das ganze Team den Bereitschaftsplan übernimmt, wobei Betriebsingenieure Entwickelnde schulen und pro Person höchstens eine Woche von sechs gilt. Das Risikoteam der Bank besteht darauf, die Funktionstrennung beizubehalten; das Team erfüllt sie, indem es für jede Änderung eine Prüfung durch Kolleginnen und Kollegen verlangt und die Pipeline-Belege aufzeichnet.

Nach sechs Monaten liefert die Kartensteuerung wöchentlich mit wenigen Incidents aus, und das Risikoteam akzeptiert für diesen Service die Pipeline-Aufzeichnung anstelle einer Change-Board-Besprechung. Die Nachbetrachtungen sind schuldfrei, und zwei wiederkehrende Ursachen werden behoben. Die übrigen Services bleiben beim alten Modell.

Was sich ändert: Dieses Team wartet nicht mehr auf den Sechs-Wochen-Zyklus und hat eine gemeinsame Sicht auf die Produktion. Was schwierig bleibt: Der Rest der Organisation ist skeptisch, weil das Team mehr Engineers je Service hat als andere; die Bereitschaftslast hat zwei Entwickelnde über einen Weggang nachdenken lassen; und die gemeinsame Pipeline hängt von einem zentralen Plattformteam mit langem Backlog ab. Der Manager bringt die Fragen zu Personal und Plattform in die Führungsrunde, statt das Ergebnis als Vorlage zu präsentieren.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Verantworten Sie den Service durchgängig: Entwurf, Bau, Release und Betrieb. Lernen Sie, wie der Betrieb arbeitet, teilen Sie die Bereitschaft fair und machen Sie Observability und Runbooks zum Teil Ihrer Definition of Done.

### Service- und Betriebsteams

Teilen Sie, was Sie über Ausfall und Wiederherstellung wissen, helfen Sie, Pipeline und Monitoring zu bauen, und bewegen Sie sich dahin, Ihre eigene Arbeit zu engineeren. Behalten Sie die Kontrollen, die zählen, und zeigen Sie, wie Automatisierung sie erfüllt.

### Führung und Governance

Setzen Sie gemeinsame Ziele für Entwicklung und Betrieb, finanzieren Sie Plattform und Schulung und achten Sie auf Arbeitslast und Bereitschaftsgrenzen. Ranken Sie Teams nicht nach Lieferzahlen. Verlangen Sie Belege, dass Kontrollen wirken.

### Kunden und Nutzer

Sie sollten schnellere Korrekturen und kleinere, sicherere Änderungen sehen. Sagen Sie den Teams, was am wichtigsten ist, und geben Sie Feedback zu Änderungen, die Sie stören.

## Agilität, KI, Automatisierung und Analytik

### Agilität

DevOps erweitert das agile Anliegen lauffähiger Software über das Release hinaus auf Betrieb und Verbesserung des Services, mit eingebundenen Beteiligten und kontinuierlichem Feedback. Vorsicht: Behandeln Sie es nicht als Werkzeugkauf oder neuen Teamnamen; die Kultur ist die Veränderung.

### KI

KI-Assistenten können helfen, Code, Tests und Infrastrukturdefinitionen zu schreiben, Logs und Incidents zusammenzufassen und Runbooks zu entwerfen, mit einer verantwortlichen Person und menschlicher Prüfung von allem, was die Produktion erreicht. Vorsicht: Ein Assistent kann subtile Fehler oder unsichere Muster einführen; wenden Sie dieselben Pipeline-Prüfungen an wie bei menschlichen Änderungen und verfolgen Sie KI-gestützte Änderungen, die fehlschlagen. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Automatisieren Sie den Weg in die Produktion, die Anlage von Umgebungen, das Testen und Routinebetrieb, mit Protokollen und Rollback. Vorsicht: Automatisierung bündelt Macht in der Pipeline; kontrollieren Sie daher den Zugang zu ihr und prüfen Sie Änderungen an der Pipeline so sorgfältig wie Änderungen am Service.

### Analytik

Betrachten Sie Deployment-Häufigkeit, Durchlaufzeit für Changes, Change-Fehlerrate und Zeit bis zur Wiederherstellung, neben Kennzahlen zu Zuverlässigkeit und Kunden. Vorsicht: Die Lieferkennzahlen lassen sich leicht manipulieren, und der Vergleich von Teams ignoriert den Kontext; nutzen Sie sie, um zu finden, wo Sie sich verbessern. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ein DevOps-Team, das zum neuen Silo wird.** Eine Gruppe nimmt den Namen an, und die Übergabe bleibt. Verteilen Sie Fähigkeiten und Verantwortung auf Teams.
- **Werkzeuge ohne Kultur.** Die Pipeline ist gebaut, und die Schuldzuweisung geht weiter. Arbeiten Sie an gemeinsamen Zielen und Praktiken der Nachbetrachtung.
- **Dauerhafte Bereitschaftsheldentaten.** Entwickelnde brennen aus. Setzen Sie Grenzen, teilen Sie die Last und beheben Sie die Ursachen der Alarme.
- **Eine verordnete Plattform, die niemand will.** Teams umgehen sie. Behandeln Sie Teams als Kunden und messen Sie freiwillige Nutzung.
- **Kontrollen fallen lassen, ohne sie zu ersetzen.** Das Risiko steigt, und Auditoren widersprechen. Erfüllen Sie den Zweck der Kontrolle mit Automatisierung und Aufzeichnungen.
- **Lieferzahlen als Ziele.** Teams manipulieren sie. Nutzen Sie Kennzahlen zum Lernen.
- **Sicherheit bis zum Schluss ignorieren.** Feststellungen kommen spät und blockieren Releases. Verschieben Sie Prüfungen nach links.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Kultur | Getrennte Ziele für Entwicklung und Betrieb | Gemeinsame Ziele in einem Team | Gemeinsame Ziele und Verantwortung weit verbreitet | Kulturpraktiken anhand von Belegen überprüft | Über Teams, Lieferanten und Partner hinweg geteilt |
| Pipeline | Manuelle Releases | Automatisierter Build und Test | Automatisierter Weg in die Produktion für die meisten Services | Pipeline verantwortet und wie ein Produkt verbessert | Pipelines in der Organisation gesteuert und geteilt |
| Betrieb | Getrennte Bereitschaft | Gemeinsame Bereitschaft in einem Team | Gemeinsame Bereitschaft mit Grenzen und Unterstützung | Bereitschaftslast und Ursachen gemessen | Betrieb über Services hinweg engineert und automatisiert |
| Lernen | Schuldzuweisung | Gelegentliche Nachbetrachtungen | Schuldfreie Nachbetrachtungen mit verfolgten Maßnahmen | Lernen gemessen und geteilt | Lernen über Teams und mit Lieferanten geteilt |

## Checkliste

- [ ] Entwicklung und Betrieb teilen Ziele für Zuverlässigkeit und sichere Änderung.
- [ ] Das Team, das einen Service baut, nimmt innerhalb sinnvoller Bereitschaftsgrenzen an seinem Betrieb teil.
- [ ] Alles, was den Service verändert, liegt in der Versionsverwaltung und läuft durch die Pipeline.
- [ ] Sicherheits- und Richtlinienprüfungen laufen früh in der Pipeline.
- [ ] Entwickelnde können das Produktions-Monitoring sehen.
- [ ] Wir halten schuldfreie Nachbetrachtungen und verfolgen die Maßnahmen.
- [ ] Kontrollen, die zählen, werden beibehalten und durch Automatisierung und Aufzeichnungen erfüllt.
- [ ] KI-Unterstützung in der Toolchain hat eine verantwortliche Person und menschliche Prüfung.

## KI-Prompts

**Finden Sie Übergaben, die wegfallen sollten.**

```text
Here is a description of how a change goes from "code complete" to "running in production" in our organization: [paste steps and who does each].
List each handover, what information passes across it, and what might be lost. For each, give two questions to ask the people on either side. Do not propose solutions.
List what you are unsure of.
```

**Fassen Sie einen Incident für eine schuldfreie Nachbetrachtung zusammen.**

```text
Below is the timeline and notes from an incident: [paste timeline with names removed].
Draft a neutral summary under these headings: what happened, how it was detected, what was done, what helped, what slowed us down, and questions for the review. Do not assign blame or state causes not in the notes.
List what you are unsure of.
```

**Entwerfen Sie ein Interview mit Plattformkunden.**

```text
We run an internal platform for [purpose]. Our users are [teams and roles].
Write ten open interview questions to learn what helps and hinders them, avoiding questions that suggest an answer. Add three things to listen for.
List what you are unsure of.
```

## KI-Skills

- [postmortem](../../../../skills/postmortem/SKILL.md): nutzen Sie ihn, um eine schuldfreie Nachbetrachtung mit verfolgten Maßnahmen durchzuführen.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): nutzen Sie ihn, um Prüfungen früher in die Pipeline zu verlegen.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): nutzen Sie ihn, um eine tragfähige Bereitschaftsregelung zu gestalten.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um Betriebswissen in kurze, aktuelle Runbooks zu verwandeln.

## Wichtige Quellen

- Gene Kim, Jez Humble, Patrick Debois und John Willis, *The DevOps Handbook*: die Prinzipien und Praktiken, mit Fallstudien.
- Gene Kim, Kevin Behr und George Spafford, *The Phoenix Project*: ein Roman, der die Ideen vielen Lesenden nahegebracht hat.
- DORA (dora.dev): Forschung zu Lieferleistung und Zuverlässigkeit.
- Wikipedia, „DevOps“: ein Überblick über Geschichte und Praktiken.

## Literaturverzeichnis

1. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
2. Phoenix Project — Wikipedia — https://en.wikipedia.org/wiki/Phoenix_Project
3. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
4. Infrastructure as code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Platform engineering — Wikipedia — https://en.wikipedia.org/wiki/Platform_engineering
7. Werner Vogels — Wikipedia — https://en.wikipedia.org/wiki/Werner_Vogels
8. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. DORA — DevOps Research and Assessment — https://dora.dev
