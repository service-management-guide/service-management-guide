# Continuous Delivery

**Continuous Delivery ist die Praxis, Software stets in einem auslieferbaren Zustand zu halten und kleine Änderungen über automatisierte Build-, Test- und Deploy-Schritte oft in laufende Services auszuliefern. Sie macht Changes sicherer, indem sie sie kleiner macht, und so verändern agile Teams laufende Services, ohne auf ein Quartals-Release zu warten.**

## Warum das wichtig ist

Veränderung ist die größte Risikoquelle in einem laufenden Service, und die übliche Reaktion ist, sie zu verlangsamen: weniger Releases, mehr Genehmigungen, größere Testzyklen. Jedes davon macht das nächste Release größer, damit riskanter, was zu noch mehr Vorsicht führt. Teams finden sich dabei wieder, einmal im Quartal auszuliefern, mit einem langen Wochenende ängstlicher Arbeit.

Continuous Delivery dreht diesen Kreislauf um. Ist eine Änderung klein, sind ihre Auswirkungen leicht zu verstehen, leicht zu testen und leicht zurückzunehmen. Wird sie über eine automatisierte Pipeline ausgeliefert, laufen jedes Mal dieselben Prüfungen in derselben Reihenfolge, mit Aufzeichnung. Kann das Release jederzeit erfolgen, kann das Team auf einen ausfallenden Service oder einen Kundenbedarf in Stunden statt Wochen reagieren.

Für das Service-Management ist Continuous Delivery wichtig, weil sie verändert, wie Kontrolle aussieht. Eine Change-Enablement-Praktik, die um ein wöchentliches Board-Meeting herum gebaut ist, kann mit 20 Releases am Tag nicht Schritt halten und muss es nicht, wenn die Pipeline die Prüfungen trägt (siehe Thema 3.4 — Change Enablement und Thema 6.4 — Pipelines und automatisierte Changes). Dieses Thema erklärt die Praxis, das Vokabular und wie man sie einführt, ohne die Kontrolle zu verlieren.

## Kernkonzepte

**Continuous Integration.** Entwickelnde führen ihre Arbeit häufig, mindestens täglich, in eine gemeinsame Hauptlinie zusammen, und jede Zusammenführung löst einen automatisierten Build- und Testlauf aus. Das Ziel ist, Integrationsprobleme zu finden, solange sie klein sind. Der Wikipedia-Artikel zu Continuous integration beschreibt die Praxis und ihre Ursprünge im Extreme Programming.

**Continuous Delivery.** Builds, die die automatisierten Prüfungen bestehen, sind stets in einem Zustand, der ausgeliefert werden könnte. Die Entscheidung zur Auslieferung ist eine geschäftliche Entscheidung, getroffen, wenn es passt, keine technische Hürde. In der Standardformulierung ist die Auslieferung ein Klick und risikoarm.

**Continuous Deployment.** Ein weiterer Schritt, bei dem jede Änderung, die die Pipeline besteht, ohne manuelle Genehmigung automatisch in die Produktion gelangt. Das ist eine Wahl, keine Voraussetzung von Continuous Delivery, und sie passt zu manchen Services und Risiken besser als zu anderen.

**Die Deployment-Pipeline.** Eine automatisierte Folge von Stufen: Build, Unit-Tests, Integrationstests, Sicherheitsprüfungen, Bereitstellung in einer Testumgebung, Abnahmetests und Release. Jede Stufe gibt die Änderung entweder weiter oder stoppt sie. Die Pipeline ist zugleich Sicherheitsmechanismus und Belegquelle, weil sie aufzeichnet, was geprüft wurde.

**Kleine Lose (Small Batches).** Kleine Änderungen auszuliefern heißt, dass jede wenig berührt. Das Gesetz von Little (Little's law) aus der Warteschlangentheorie, das Wikipedia beschreibt, erklärt einen Teil des Effekts: Bei gleicher Arbeitsrate bedeuten kleinere Lose kürzere Warteschlangen und kürzere Verzögerungen. Kleine Lose machen es außerdem leichter, Fehler auf eine Ursache zurückzuführen.

**Deployment vom Release trennen.** Deployment bringt Code auf Produktionsserver. Release macht eine Funktion für Nutzer verfügbar. Techniken wie Feature-Toggles erlauben, Code ausgeschaltet bereitzustellen und später zu aktivieren, zunächst für einige Nutzer. Das verringert das Risiko jedes Schritts. Siehe Thema 3.5 — Release- und Deployment-Management.

**Progressive Delivery.** Zunächst an einen kleinen Anteil der Nutzer ausliefern, beobachten und schrittweise ausweiten. Varianten sind Canary-Releases, bei denen eine kleine Gruppe die Änderung erhält, und Blue-Green-Deployment, bei dem zwei Produktionsumgebungen abwechseln, sodass ein Umschalten schnell rückgängig gemacht werden kann.

**Versionsverwaltung und Trunk-based Development.** Alle Änderungen, einschließlich Konfiguration und Infrastrukturdefinitionen, liegen in der Versionsverwaltung. Viele Teams arbeiten auf einem einzigen Hauptzweig mit kurzlebigen Zweigen, was die Integration häufig hält. Siehe Thema 6.3 — Infrastructure as Code und GitOps.

**Schnelles Feedback und schnelle Wiederherstellung.** Das Ziel ist, Fehler schnell zu finden und sich schnell zu erholen. Forschungsprogramme zur Software-Lieferung, etwa die Arbeit von DevOps Research and Assessment (DORA), verfolgen Kennzahlen wie Deployment-Häufigkeit, Durchlaufzeit für Changes, Change-Fehlerrate und Zeit bis zur Wiederherstellung des Service. Behandeln Sie sie als Fragen an Ihr System, nicht als Punktzahlen für Teams; siehe das Buch *Service Management Metrics*.

**Was sie voraussetzt.** Automatisierte Tests, denen Sie vertrauen, eine stabile Pipeline, die Fähigkeit zum Rollback oder Roll-forward, Produktionsüberwachung, die die Wirkung einer Änderung zeigt, und ein Team, das verantwortet, was es ausliefert. Ohne diese sind häufige Releases leichtsinnig; mit ihnen sind sie sicherer als seltene.

**Wie die Blickwinkel passen.** Continuous Delivery ist die praktische Form des agilen Blickwinkels für laufende Services. KI-Assistenten helfen beim Schreiben und Prüfen von Code und Tests unter menschlicher Kontrolle. Automatisierung ist der Kern der Pipeline. Analytik sagt Ihnen, was die Pipeline und die Services tun.

## Bewährte Praktiken

1. **Halten Sie die Hauptlinie auslieferbar.** Behandeln Sie einen kaputten Build als oberste Priorität des Teams. Eine Regel wie „binnen einer Stunde beheben oder zurücknehmen“ hält die Integration gesund.
2. **Machen Sie Änderungen klein.** Zielen Sie auf Änderungen, die eine Prüferin in Minuten verstehen kann. Ist eine Änderung groß, teilen Sie sie, etwa indem Sie zuerst den vorbereitenden Schritt ausliefern.
3. **Automatisieren Sie die Prüfungen, denen Sie vertrauen.** Build-, Unit-, Integrations- und Sicherheitsprüfungen laufen bei jeder Änderung. Ergänzen Sie eine Prüfung, wenn ein Incident eine Lücke zeigt, und entfernen Sie nach Diskussion eine, die nie fehlschlägt und Zeit kostet.
4. **Nutzen Sie einen Pipeline-Pfad für alle Änderungen.** Vermeiden Sie Sonderwege für dringende Änderungen. Ein einziger Pfad, der schnell genug für Notfälle ist, ist sicherer als eine Ausnahme, die selten geübt wird.
5. **Trennen Sie Deployment von Release.** Nutzen Sie Feature-Toggles und gestufte Rollouts, damit neues Verhalten für einige Nutzer eingeschaltet und schnell wieder ausgeschaltet werden kann. Halten Sie den Zustand jedes Toggles fest und entfernen Sie alte.
6. **Planen Sie den Weg zurück.** Wissen Sie für jede Änderung, wie Rollback oder Roll-forward geht, und üben Sie es. Datenänderungen brauchen besondere Sorgfalt, da ein Code-Rollback sie nicht rückgängig machen kann.
7. **Überwachen Sie die Wirkung jedes Releases.** Beobachten Sie nach dem Release für einen festgelegten Zeitraum Fehlerraten, Latenz und für Nutzer sichtbare Indikatoren, und machen Sie es einfach, eine Änderung mit einem Symptom in Beziehung zu setzen.
8. **Schreiben Sie auf, was die Pipeline prüft.** Eine kurze Beschreibung jeder Stufe, ihres Zwecks und ihrer verantwortlichen Person lässt Auditoren, neue Mitarbeitende und den Betrieb sie verstehen.
9. **Beziehen Sie den Betrieb von Anfang an ein.** Holen Sie Betriebs- und Support-Mitarbeitende in den Entwurf, damit Logging, Runbooks und Alarme Teil der Änderung sind und kein Nachgedanke.
10. **Verbessern Sie die Pipeline wie ein Produkt.** Geben Sie ihr eine verantwortliche Person und ein Backlog. Langsame, instabile Pipelines bringen Menschen bei, sie zu umgehen.

## Fragen für die Diskussion im Team

**Wie lange braucht unsere kleinste Änderung bis in die Produktion, und wo wartet sie?**
Das findet Verzögerung. Bitten Sie um ein reales Beispiel mit Zeitstempeln. Typische Wartezeiten sind manuelles Testen, Genehmigung, Zugang zu Umgebungen und Release-Fenster. Wählen Sie anschließend die längste Wartezeit und einen ersten Schritt, sie zu verkürzen.

**Welche unserer manuellen Genehmigungen könnte eine Pipeline-Prüfung ersetzen, und welches Risiko kontrolliert jede?**
Jede Genehmigung hat einen Grund, oft einen Incident vor Jahren. Fragen Sie, welches Risiko sie adressiert und welche Belege den Genehmigenden genügen würden. Rechnen Sie mit Widerstand von Eigentümern der Kontrollen; bitten Sie sie, den Ersatz mitzugestalten. Erproben Sie anschließend einen Ersatz mit einem Überprüfungsdatum.

**Was geschieht, wenn ein Release schiefgeht? Wie schnell könnten wir es zurücknehmen, und haben wir es geübt?**
Teams entdecken oft, dass Rollback nur auf dem Papier existiert. Fragen Sie, wann er zuletzt benutzt wurde. Planen Sie anschließend eine Probe in einer sicheren Umgebung.

**Welchen Tests vertrauen wir, und welche ignorieren wir?**
Instabile Tests untergraben das Vertrauen. Fragen Sie, welche Fehlschläge das Team achselzuckend hinnimmt. Rechnen Sie mit ehrlichen Antworten zu Tests, die „beim Wiederholen meist durchlaufen“. Wählen Sie anschließend einen instabilen Test, den wir reparieren oder löschen.

**Woher wissen wir binnen einer Stunde, ob ein Release Nutzern geschadet hat?**
Das prüft die Überwachung. Die Antworten reichen von „wir warten auf Beschwerden“ bis zu Dashboards und automatischen Alarmen. Fragen Sie, welcher Indikator das letzte schlechte Release erkannt hätte. Wählen Sie anschließend einen Indikator, den wir ergänzen und prüfen.

**Wo könnte KI in unserer Pipeline helfen, und wer prüft, was sie erzeugt?**
KI kann Tests entwerfen, Änderungen prüfen und Fehlschläge erklären. Fragen Sie, was jede Nutzung erzeugen würde und wer verantwortlich ist. Rechnen Sie mit Begeisterung und wenig Aufsicht. Wählen Sie anschließend eine risikoarme Nutzung mit menschlicher Prüfung und einer Kennzahl für Fehler.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Digitalteam einer regionalen Klinikgruppe betreibt einen Terminservice für Patienten, den 30 Praxen nutzen. Releases erfolgen vierteljährlich in einem Wochenendfenster mit einer großen Test-Checkliste. Die letzten beiden Releases liefen über, und eines führte einen Fehler ein, der am Montagmorgen als doppelt gebuchte Termine auftauchte.

Der Teamleiter schlägt gemeinsam mit der Service-Verantwortlichen kleine Schritte vor. Zuerst automatisieren sie den Build und die 200 wichtigsten Regressionstests, sodass sie bei jeder Änderung laufen. Zweitens legen sie die Konfiguration in die Versionsverwaltung und verlangen für jede Änderung eine Prüfung durch Kolleginnen und Kollegen. Drittens fügen sie einen Feature-Toggle hinzu, damit neue Buchungsregeln zunächst für eine Praxis aktiviert werden können. Die Beauftragte für klinische Sicherheit, die den Service freigibt, bittet um Belege, dass jede Änderung getestet und geprüft wurde. Das Team zeigt ihr die Pipeline-Aufzeichnung jedes Releases.

Nach vier Monaten liefert das Team wöchentlich aus, und das Montagmorgen-Risiko ist kleiner, weil Änderungen kleiner und sichtbar sind. Die Änderung der Doppelbuchungsregel wird zuerst in einer Praxis aktiviert, am zweiten Tag erkannt, als eine Empfangsmitarbeiterin eine seltsame Meldung bemerkt, und binnen Minuten ausgeschaltet.

Was sich ändert: Releases sind keine Wochenendereignisse mehr, und die Sicherheitsbeauftragte prüft Belege, statt an Besprechungen teilzunehmen. Was schwierig bleibt: Die Testsuite übersieht noch einige komplexe Buchungsfälle, eine Altschnittstelle zum Patientenaktensystem hat keinen automatisierten Test, und zwei Praxen sind mit wöchentlichen Änderungen unzufrieden, weil sie ihre Schulungen stören. Das Team vereinbart einen Change-Kalender für schulungssensible Funktionen und ergänzt weiter Tests, wenn Incidents Lücken zeigen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Verantworten Sie die Pipeline und das, was sie ausliefert. Halten Sie Änderungen klein, Tests vertrauenswürdig und Toggles aufgeräumt. Nehmen Sie Logging, Alarme und Runbooks in die Definition of Done auf und beobachten Sie die Wirkung jedes Releases.

### Service- und Betriebsteams

Helfen Sie zu definieren, was die Pipeline prüft und was die Überwachung zeigt. Arbeiten Sie mit den Entwickelnden an Rollback und daran, wie „gesund“ aussieht. Verlangen Sie die Release-Aufzeichnung, wenn ein Incident beginnt.

### Führung und Governance

Finanzieren Sie Pipeline, Tests und Überwachung, die sich leicht aushungern lassen. Verlangen Sie Belege für Kontrolle aus der Pipeline statt aus Besprechungen. Nutzen Sie Delivery-Kennzahlen nicht, um Teams zu ranken.

### Kunden und Nutzer

Erwarten Sie kleine, häufige Änderungen und schnelle Korrekturen. Sagen Sie dem Team, wenn eine Änderung Sie stört, etwa rund um Schulungen oder ausgelastete Zeiten, und bitten Sie um Vorankündigung wesentlicher Änderungen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Continuous Delivery ist die Lieferseite agiler Praxis: lauffähige Änderungen in kleinen Stücken, mit eingebundenen Beteiligten und regelmäßigem Review, was zu verbessern ist. Vorsicht: Setzen Sie sie nicht mit einer bestimmten Methode gleich; Teams können mit oder ohne Sprints kontinuierlich liefern.

### KI

KI-Assistenten können Code, Tests und Release-Notes entwerfen und Fehlschläge zusammenfassen, mit einer benannten verantwortlichen Person und einem Menschen, der jede Ausgabe prüft, bevor sie in die Pipeline gelangt. Vorsicht: Generierter Code kann Sicherheits- oder Lizenzprobleme mitbringen; führen Sie dieselben Prüfungen wie bei jeder Änderung durch und verfolgen Sie den Anteil KI-gestützter Änderungen, die Fehler verursachen. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Automatisieren Sie Build, Test, Sicherheitsscans, Deployment und die Belegspur, und halten Sie Rollback, wo möglich, automatisch. Vorsicht: Eine grüne Pipeline zeigt, dass die Prüfungen bestanden wurden, nicht dass die Änderung richtig ist; behalten Sie menschliche Prüfung für Design- und Risikoentscheidungen. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Verfolgen Sie Durchlaufzeit für Changes, Deployment-Häufigkeit, Change-Fehlerrate und Zeit bis zur Wiederherstellung als Fragen an das System. Vorsicht: Werden sie zu Zielen, teilen Teams Änderungen künstlich auf oder vermeiden, Fehler zu erfassen; nutzen Sie sie mit den Leitplanken aus dem Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Häufige Releases ohne Tests.** Das Tempo steigt und das Vertrauen sinkt. Bauen Sie zuerst die Prüfungen und liefern Sie so oft aus, wie sie es tragen.
- **Ein separater Pfad für dringende Änderungen.** Der dringende Pfad ist ungetestet und riskant. Machen Sie den Hauptpfad schnell genug für Notfälle.
- **Langlebige Feature-Toggles.** Alte Toggles häufen sich, und niemand weiß, was eingeschaltet ist. Verfolgen Sie Toggles und entfernen Sie sie nach dem Rollout.
- **Keine Rollback-Probe.** Der Rollback scheitert, wenn er gebraucht wird. Üben Sie ihn in einer sicheren Umgebung.
- **Instabile Tests ignoriert.** Menschen glauben rote Builds nicht mehr. Reparieren oder entfernen Sie instabile Tests.
- **Die Pipeline als Aufgabe anderer behandeln.** Sie verfällt. Geben Sie ihr eine verantwortliche Person und ein Backlog.
- **Kennzahlen zum Ranking von Teams.** Teams manipulieren Zahlen. Nutzen Sie Kennzahlen, um Probleme zu finden, nicht um Menschen zu vergleichen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Release-Häufigkeit | Vierteljährlich oder seltener | Monatlich | Wöchentlich oder öfter, auf einem Standardpfad | Häufigkeit nach Risiko und Nachfrage abgestimmt | Kontinuierlich über Services hinweg, mit Progressive Delivery |
| Automatisierung | Manueller Build und Test | Automatisierter Build | Automatisierter Build, Test und Deploy | Pipeline überwacht und wie ein Produkt verbessert | Pipelines teamübergreifend geteilt und gesteuert |
| Kontrollbelege | Besprechungen und Checklisten | Einige Aufzeichnungen | Pipeline-Aufzeichnungen für jeden Change | Belege stichprobenartig geprüft | Belege laufend, mit menschlicher Prüfung des Risikos |
| Wiederherstellung | Rollback unklar | Rollback dokumentiert | Rollback oder Roll-forward geprobt | Zeit bis zur Wiederherstellung gemessen | Wiederherstellung automatisiert und regelmäßig getestet |

## Checkliste

- [ ] Die Hauptlinie ist jederzeit auslieferbar.
- [ ] Jeder Change läuft durch eine automatisierte Pipeline.
- [ ] Tests, denen wir vertrauen, laufen bei jeder Änderung; instabile Tests werden repariert oder entfernt.
- [ ] Wir trennen Deployment von Release, mit verfolgten Feature-Toggles.
- [ ] Wir wissen, wie man zurückrollt oder vorwärts rollt, und haben es geprobt.
- [ ] Wir überwachen die Wirkung jedes Releases.
- [ ] Die Pipeline hat eine verantwortliche Person, ein Backlog und eine Beschreibung ihrer Prüfungen.
- [ ] KI-gestützte Änderungen werden geprüft und verfolgt.

## KI-Prompts

**Finden Sie die Wartezeiten in einem Release.**

```text
Here is a timeline of our last release, from "change ready" to "in production": [paste timeline with timestamps and who acted].
List each wait and how long it was, then give two questions per wait to find its cause. Do not assume causes.
List what you are unsure of.
```

**Schlagen Sie Pipeline-Prüfungen für ein Risiko vor.**

```text
Our service: [describe]. The risk we want to control: [describe, such as untested configuration change].
List five automated checks that could address it, what each would catch, and what each would miss. Do not claim a check removes the risk.
Mark assumptions and list what you are unsure of.
```

**Entwerfen Sie einen Plan für eine Rollback-Probe.**

```text
Our release process: [paste steps]. Our rollback method: [describe, or write "unknown"].
Draft a one-page rehearsal plan with steps, roles, success criteria, and what to record. Include a safe environment only; do not suggest rehearsing in production.
List what you are unsure of.
```

## KI-Skills

- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): nutzen Sie ihn, um das Testen früher in die Pipeline zu verlegen.
- [test-driven-development](../../../../skills/test-driven-development/SKILL.md): nutzen Sie ihn, um Tests zusammen mit Änderungen zu bauen.
- [release-notes](../../../../skills/release-notes/SKILL.md): nutzen Sie ihn, um jedes Release für Kunden und Support zu beschreiben.

## Wichtige Quellen

- Jez Humble und David Farley, *Continuous Delivery* (2010): das Buch, das die Praxis benannt und beschrieben hat.
- DORA (dora.dev): Forschung und Berichte zur Leistung der Software-Lieferung.
- Wikipedia, „Continuous delivery“: eine Zusammenfassung von Prinzipien und verwandten Praktiken.
- Wikipedia, „Continuous integration“: die Praxis, die ihr zugrunde liegt.

## Literaturverzeichnis

1. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
2. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
3. Continuous deployment — Wikipedia — https://en.wikipedia.org/wiki/Continuous_deployment
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Little's law — Wikipedia — https://en.wikipedia.org/wiki/Little%27s_law
7. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
10. DORA — DevOps Research and Assessment — https://dora.dev
