# Agiles Service-Management

**Agiles Service-Management wendet agile Werte auf Gestaltung und Verbesserung der Service-Management-Praktiken selbst an: Jede Praktik hat eine verantwortliche Person, die wie eine Product Owner handelt, ein kleines Backlog von Verbesserungen, kurze Feedbackschleifen mit den Menschen, die die Praktik nutzen, und in die Arbeit eingebaute Kontrollen.**

## Warum das wichtig ist

Service-Management-Praktiken werden oft einmal entworfen, in ein Prozessdokument geschrieben und durchgesetzt. Das Dokument altert, während sich Technologie und Organisation ändern. Menschen umgehen Schritte, die keinen Sinn mehr ergeben, und die Praktik entfernt sich von dem, was auf dem Papier steht. Ihre Überarbeitung wird zu einem Projekt mit Komitee und langem Zyklus, und bis die Überarbeitung ankommt, ist sie bereits veraltet.

Wenn agile Ideen gut sind, um Software zu bauen, sollten sie auch gut sein, um die Praktiken zu gestalten, die regeln, wie Software betrieben wird. Eine Praktik wie Change Enablement lässt sich als Produkt mit Nutzern behandeln, den Menschen, die Changes beantragen und genehmigen. Ihre verantwortliche Person kann diesen Nutzern zuhören, ein Backlog kleiner Verbesserungen führen, sie oft ausliefern und prüfen, ob sie geholfen haben. Das meint dieses Thema mit agilem Service-Management.

Die Idee entspricht den Leitprinzipien von ITIL 4, etwa „iterativ mit Feedback voranschreiten“ und „dort beginnen, wo man steht“ (siehe Thema 1.5 — Die ITIL-Leitprinzipien), und passt zum Schwerpunkt des Service-Wertschöpfungssystems auf kontinuierliche Verbesserung. Die Beschreibung der neuesten ITIL-Version durch den Eigentümer betont einen Ansatz der Wertschöpfung, der Strategie, Lieferung und messbare Ergebnisse verbindet (siehe Thema 1.3 — ITIL 5). Praktiken, die sich in kleinen Schritten verbessern und ihre Ergebnisse zeigen, passen zu dieser Richtung.

## Kernkonzepte

**Praktiken als Produkte.** Eine Praktik wie Incident-Management dient einer Gruppe von Nutzern: Reagierenden, Kunden, Führungskräften, Auditoren. Eine Praktik-Verantwortliche, die wie eine Product Owner handelt, ist dafür rechenschaftspflichtig, wie gut sie ihnen dient. Sie sammelt Feedback, führt ein Backlog von Änderungen an der Praktik und entscheidet, was als Nächstes geändert wird. Siehe Thema 2.8 — Produkt- und Service-Verantwortung.

**Prozess-Backlog.** Eine kurze, geordnete Liste von Verbesserungen der Praktik: ein Formular, das zu vereinfachen ist, ein Schritt, der entfällt, ein Bericht, den man einstellt, eine neue Automatisierung. Die Punkte kommen von Nutzern, aus Nachbetrachtungen von Incidents und aus Messungen. Der Wikipedia-Artikel zu Backlogs erklärt die Idee. Die verantwortliche Person überprüft die Liste regelmäßig mit Nutzern und wählt einige Punkte zum Ausprobieren.

**Kleine Änderungen mit Feedback.** Änderungen an Praktiken erfolgen in kleinen Stücken und werden zunächst mit einer begrenzten Gruppe erprobt, zum Beispiel einem Team oder einer Art von Anfrage. Die verantwortliche Person fragt die Nutzer, was geschehen ist, und behält die Änderung, passt sie an oder nimmt sie zurück. Das ersetzt große Neufassungen eines Prozessdokuments.

**Nutzer der Praktik.** Wer der Praktik folgen muss, ist ihr Hauptnutzer. Ihr Erlebnis zählt: Einer Praktik, der sie nicht folgen können, wird ausgewichen, oder sie wird manipuliert. Beziehen Sie bei jeder Änderung einige von ihnen ein.

**Kontrollen innerhalb der Arbeit.** Wo eine Praktik besteht, um Risiko zu steuern, etwa die Genehmigung riskanter Changes, bevorzugt agiles Service-Management, die Kontrolle in Werkzeuge und Pipeline einzubauen und Belege als Nebenprodukt zu erzeugen. Siehe Thema 2.2 — Continuous Delivery und Thema 3.4 — Change Enablement.

**Schlanke Dokumentation.** Beschreiben Sie eine Praktik auf ein bis zwei Seiten: Zweck, wer beteiligt ist, was geschieht, wie man um Hilfe bittet und wie sie verbessert wird. Halten Sie Details in den Werkzeugen und in kurzen, aktuellen Anleitungen. Lange Verfahrenshandbücher werden selten gelesen.

**Rhythmus der Überprüfung.** Legen Sie einen festen Zeitpunkt fest, etwa monatlich, um Backlog, Kennzahlen und Feedback zu prüfen und zu entscheiden, was geändert wird. Zwischen den Überprüfungen können bei Bedarf dringende Korrekturen erfolgen.

**Experimente.** Behandeln Sie eine Änderung als Experiment mit einer erwarteten Wirkung und einem Prüfdatum. Zum Beispiel: „Wir erwarten, dass der Wegfall der zweiten Genehmigung für risikoarme Changes die Durchlaufzeit um einen Tag senkt, ohne mehr Fehler. Wir prüfen nach vier Wochen.“ Zeigt sich die Wirkung nicht, nehmen Sie die Änderung zurück.

**Agilität und ITIL zusammen.** Agiles Service-Management verwirft das Framework nicht. Es nutzt ITIL-Praktiken als Quelle von Ideen und Vokabular und passt sie an. Wo eine Praktik eine Risikokontrolle mit realen Folgen ist, behält es die Kontrolle bei und ändert, wie sie erfüllt wird.

**Was es nicht bedeutet.** Es bedeutet nicht, Dokumentation fallen zu lassen, Audit-Anforderungen zu ignorieren oder Zeremonien um ihrer selbst willen zu veranstalten. Wenn Ihr Team Sprints oder Kanban für die Verbesserungsarbeit wählt, können sie passen; entscheidend ist der kontinuierliche Zyklus aus Feedback und kleiner Änderung.

**Wie die Blickwinkel passen.** Das Backlog der Praktik-Verantwortlichen ist der agile Blickwinkel, auf das Service-Management selbst gerichtet. KI kann Tickets und Feedback analysieren, um Verbesserungen vorzuschlagen, unter Prüfung. Automatisierung verwandelt Regeln der Praktik in Werkzeugverhalten. Analytik zeigt, ob Praktiken funktionieren.

## Bewährte Praktiken

1. **Benennen Sie eine Praktik-Verantwortliche.** Jede wichtige Praktik hat eine Person, die für ihre Qualität und Verbesserung rechenschaftspflichtig ist. Sie ist Nutzerin der Praktik ebenso wie ihre Gestalterin.
2. **Beginnen Sie beim Schmerz der Nutzer.** Fragen Sie Menschen, die der Praktik folgen, was langsam, unklar oder sinnlos ist, und listen Sie die Antworten auf. Beginnen Sie bei dem, was sie nennen, nicht bei dem, was das Framework vorschlägt.
3. **Führen Sie ein sichtbares, kurzes Backlog.** Zeigen Sie es dort, wo Nutzer es sehen. Begrenzen Sie die Zahl der laufenden Punkte und schließen Sie ab, bevor Sie mehr beginnen.
4. **Ändern Sie in kleinen Schritten.** Erproben Sie jede Änderung mit einem Team oder einer Anfrageart, mit einer ausgesprochenen Erwartung und einem Prüfdatum.
5. **Messen Sie die Wirkung.** Wählen Sie für jede Änderung ein oder zwei Indikatoren, etwa Zeit bis zur Genehmigung oder den Anteil der wegen fehlender Informationen zurückgegebenen Anfragen. Sagen Sie, wie die Kennzahl in die Irre führen könnte.
6. **Bauen Sie Kontrollen in die Werkzeuge ein.** Machen Sie, wo möglich, die sichere Handlung zur Voreinstellung, etwa ein Pflichtfeld oder eine automatische Prüfung, und zeichnen Sie Belege automatisch auf.
7. **Schreiben Sie weniger, verlinken Sie mehr.** Halten Sie die Beschreibung der Praktik kurz, verlinken Sie auf Werkzeuge und Beispiele und entfernen Sie Seiten, die niemand liest.
8. **Überprüfen Sie im Rhythmus.** Halten Sie einen kurzen monatlichen Review mit einigen Nutzern und veröffentlichen Sie, was sich geändert hat und warum.
9. **Respektieren Sie reale Anforderungen.** Sprechen Sie mit Audit, Sicherheit und Recht, wenn eine Änderung eine Kontrolle berührt, und beziehen Sie sie früh ein, damit Sie erklären können, wie die neue Methode das Ziel erfüllt.
10. **Legen Sie still, was nicht hilft.** Entfernen Sie Schritte, Formulare und Berichte, die keinen Wert zeigen, und sagen Sie es öffentlich.

## Fragen für die Diskussion im Team

**Welche unserer Praktiken umgehen Menschen, und warum?**
Umgehungen zeigen, wo die Praktik nicht zur Arbeit passt. Bitten Sie um konkrete Beispiele, etwa ein Formular, das mit „n/a“ gefüllt wird. Behandeln Sie es nicht zuerst als Regelverstoß. Wählen Sie anschließend eine Umgehung und fragen Sie, welche Änderung den offiziellen Weg leichter machen würde.

**Wer verantwortet jede unserer Praktiken, und wie erfährt diese Person von den Menschen, die sie nutzen?**
Viele Praktiken haben weder eine verantwortliche Person noch einen Feedbackweg. Fragen Sie nach dem letzten Mal, als die verantwortliche Person mit Nutzern sprach. Rechnen Sie mit Schweigen. Vereinbaren Sie anschließend ein regelmäßiges Gespräch mit einigen Nutzern.

**Was ist die kleinste Änderung an einer Praktik, die wir nächste Woche ausprobieren könnten, und woran erkennen wir, dass sie geholfen hat?**
Das fördert kleine Experimente. Teams schlagen oft Neugestaltungen vor. Drängen Sie auf etwas Winziges, mit Kennzahl und Prüfdatum. Benennen Sie anschließend die verantwortliche Person und die prüfende Person.

**Welche unserer Kontrollen könnten die Werkzeuge oder die Pipeline statt einer Besprechung oder eines Formulars erfüllen?**
Suchen Sie Kontrollen, die darauf beruhen, dass Menschen daran denken. Fragen Sie, welche Belege der Auditor braucht. Erproben Sie anschließend eine automatisierte Kontrolle unter Beteiligung der Kontrollverantwortlichen.

**Wie lang ist die Dokumentation unserer Praktiken, und wer liest sie?**
Prüfen Sie, ob die Dokumente genutzt werden. Fragen Sie neue Mitarbeitende, was sie lesen. Rechnen Sie mit langen Handbüchern, die niemand öffnet. Entwerfen Sie anschließend eine einseitige Fassung einer Praktik und testen Sie sie mit einer neuen Mitarbeiterin.

**Wie könnte KI uns helfen zu sehen, was in unseren Praktiken nicht funktioniert, und was wollten wir von Hand prüfen?**
KI kann Muster in Tickets und Feedback finden. Sie kann auch Muster finden, die Artefakte dessen sind, wie Menschen Felder füllen. Fragen Sie, wer eine Stichprobe liest. Vergleichen Sie anschließend eine KI-Analyse der Tickets eines Monats mit einer manuellen Auswertung.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer Universität hat eine Change-Enablement-Praktik mit einem wöchentlichen Review-Gremium. Mitarbeitende sagen, das Formular sei lang und das Gremium füge jedem Change eine Woche hinzu. Auditoren schätzen es, da es eine Aufzeichnung liefert. Die Praktik-Verantwortliche, eine erfahrene Service-Managerin, beschließt, sie als Produkt zu behandeln.

Sie befragt acht Personen, die im letzten Monat Changes beantragt haben, und nimmt an einer Gremiumssitzung teil. Sie stellt fest, dass 70 Prozent der Changes Routine und risikoarm sind, dass das Formular 22 Felder hat, von denen acht je gelesen werden, und dass das Gremium meist genehmigt, was es sieht. Sie erstellt ein kurzes Backlog: das Formular kürzen, eine Kategorie „Standard-Change“ definieren, die nach Risiko statt per Besprechung vorab genehmigt ist, und jeden Change-Datensatz mit den automatisierten Testergebnissen verknüpfen.

Sie erprobt das kürzere Formular vier Wochen mit einem Team, mit der Erwartung, dass die durchschnittliche Zeit von der Anfrage bis zur Genehmigung bei Standard-Changes von sechs auf zwei Tage sinkt. Sie bittet den internen Auditor, die vorgeschlagenen Regeln für Standard-Changes zu prüfen. Der Auditor bittet um eine Stichprobenprüfung und eine monatliche Überprüfung der Fehlschläge. Das Team stimmt zu. Nach vier Wochen sinkt der Durchschnitt unter zwei Tage, und die Zahl fehlgeschlagener Changes steigt nicht.

Was sich ändert: Das Gremium verwendet seine Zeit nun auf die 30 Prozent der Changes mit echtem Risiko, und der Datensatz wird aus der Pipeline erzeugt. Was schwierig bleibt: Andere Teams nutzen ein anderes Werkzeug, das keine Testergebnisse zeigen kann, sodass ihre Aufzeichnungen manuell bleiben; die Stichproben des Auditors schaffen Arbeit, für die niemand Ressourcen hat; und manche Gremiumsmitglieder vermissen das alte wöchentliche Ritual und empfinden ihre Rolle als geschrumpft. Die Verantwortliche hält einen monatlichen Review ein und bittet das Gremium um Ideen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Sie sind die Hauptnutzer von Change- und Release-Praktiken. Geben Sie früh Feedback, nehmen Sie an Erprobungen teil und bauen Sie Kontrollen in Ihre Pipeline ein, damit die Praktik sich auf Belege stützen kann.

### Service- und Betriebsteams

Sie verantworten die Praktiken oft selbst. Handeln Sie als Product Owner: Hören Sie Nutzern zu, führen Sie ein kurzes Backlog und probieren Sie kleine Änderungen aus. Teilen Sie Ergebnisse und legen Sie Schritte still, die nicht helfen.

### Führung und Governance

Verlangen Sie von Verantwortlichen das Praktik-Backlog, die Kennzahlen und das gehörte Feedback. Unterstützen Sie Änderungen, die manuelle Kontrollen durch eingebaute ersetzen, nachdem Audit und Risiko einbezogen wurden. Fordern Sie keine langen Dokumente.

### Kunden und Nutzer

Wenn eine Praktik Sie betrifft, etwa ein Anfrageformular, sollten Sie sagen können, was umständlich ist, und sehen, dass es sich verbessert. Fragen Sie, wer sie verantwortet und wie man Feedback gibt.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Dieses Thema ist der agile Blickwinkel, angewendet auf die Praktiken: kleine Schritte, Einbindung der Stakeholder, regelmäßige Überprüfung und kontinuierliche Verbesserung. Vorsicht: Führen Sie keine agilen Rituale um eine Praktik herum durch; halten Sie den Fokus auf Feedback und kleiner Änderung.

### KI

KI kann Tickets und Feedback analysieren, um Verbesserungen vorzuschlagen, einseitige Beschreibungen von Praktiken entwerfen und neuen Text mit den Quellregeln abgleichen, wobei eine Person prüft. Jede Nutzung braucht eine verantwortliche Person. Vorsicht: KI kann glatte Verfahren schreiben, denen niemand folgt; testen Sie sie mit realen Nutzern. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Verwandeln Sie Regeln der Praktik in Werkzeugverhalten: Routing, Pflichtfelder, automatische Genehmigungen für risikoarme Changes und Beleg-Erfassung. Führen Sie Protokolle und einen Weg, Änderungen umzukehren. Vorsicht: Eine fehlerhafte Regel in Automatisierung einzubetten verhärtet sie; erproben Sie die Regel zuerst manuell. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Nutzen Sie wenige Indikatoren dafür, wie jede Praktik abschneidet, etwa Zeit bis zur Genehmigung, Nacharbeit und Nutzerzufriedenheit. Vorsicht: Die Zählung der Einhaltung, etwa „Prozent der Changes mit vollständigem Formular“, lässt sich manipulieren und sagt wenig darüber, ob die Praktik hilft; siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Neugestaltung der Praktik als Projekt.** Ein Komitee schreibt den Prozess über Monate neu. Machen Sie kleine Änderungen mit Feedback.
- **Keine Praktik-Verantwortliche.** Niemand verbessert sie. Benennen Sie eine verantwortliche Person.
- **Die verantwortliche Person spricht nie mit Nutzern.** Die Praktik driftet. Planen Sie regelmäßige Gespräche.
- **Kontrollen ohne Ersatz fallen lassen.** Einwände von Risiko und Audit folgen. Erfüllen Sie den Zweck der Kontrolle in den Werkzeugen.
- **Lange Dokumente.** Niemand liest sie. Schreiben Sie eine Seite und verlinken Sie auf Details.
- **Nur Einhaltung messen.** Menschen füllen Formulare aus, und nichts verbessert sich. Messen Sie Ergebnisse und Erlebnis.
- **Zeremonie ohne Veränderung.** Besprechungen finden statt, und das Backlog bewegt sich nicht. Begrenzen Sie die laufende Arbeit und schließen Sie Punkte ab.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Verantwortung für Praktiken | Keine verantwortliche Person | Verantwortliche für die wichtigsten Praktiken | Jede Praktik hat eine verantwortliche Person und ein Backlog | Verantwortliche prüfen Ergebnisse mit Nutzern | Verantwortliche stimmen sich über Praktiken und Partner ab |
| Änderung an Praktiken | Selten, große Neufassungen | Gelegentliche Verbesserungen | Regelmäßige kleine Experimente mit Review | Ergebnisse gemessen und umgesetzt | Experimente in der Organisation geteilt |
| Kontrollen | Manuell und per Besprechung | Einige eingebaut | Standardkontrollen in Werkzeuge eingebaut | Belege stichprobenartig geprüft | Kontrollen automatisiert und mit dem Risiko angepasst |
| Dokumentation | Lange Handbücher | Einige kurze Anleitungen | Einseitige Beschreibungen aktuell gehalten | Nutzung der Dokumente geprüft | Geteilte, durchsuchbare Anleitung im Kontext |

## Checkliste

- [ ] Jede wichtige Praktik hat eine namentlich benannte verantwortliche Person.
- [ ] Jede verantwortliche Person führt ein kurzes, sichtbares Backlog.
- [ ] Wir sprechen regelmäßig mit Nutzern jeder Praktik.
- [ ] Wir probieren Änderungen in kleinen Schritten mit Kennzahl und Prüfdatum aus.
- [ ] Kontrollen sind, wo möglich, in Werkzeuge eingebaut.
- [ ] Audit und Risiko sind einbezogen, wenn sich Kontrollen ändern.
- [ ] Beschreibungen von Praktiken sind kurz und aktuell.
- [ ] Wir legen Schritte still, die nicht helfen, und sagen das.

## KI-Prompts

**Analysieren Sie Feedback zu einer Praktik.**

```text
Here is feedback from people who follow our [practice name] practice, with names removed: [paste feedback].
Group it into up to six themes, count each, quote two short examples per theme, and list questions the owner should ask. Do not suggest solutions.
List what you are unsure of.
```

**Entwerfen Sie eine einseitige Beschreibung der Praktik.**

```text
Here is the current description of our [practice] practice: [paste text].
Draft a one-page version with: purpose, who is involved, what happens, how to ask for help, and how it is improved. Keep every rule that appears in the original; mark any rule you are unsure how to phrase. Do not add rules.
List what you are unsure of.
```

**Planen Sie ein kleines Experiment.**

```text
We want to change [practice step] to [proposed change]. Our current measure: [describe]. The people affected: [list].
Write an experiment plan: expectation, one or two measures, how each could mislead, who to involve, how long to run it, and what would make us reverse it. Do not claim the change will work.
List what you are unsure of.
```

## KI-Skills

- [agile-principles](../../../../skills/agile-principles/SKILL.md): nutzen Sie ihn, um Änderungen an Praktiken an agilen Werten zu prüfen.
- [kaizen](../../../../skills/kaizen/SKILL.md): nutzen Sie ihn, um kleine Verbesserungsexperimente zu planen.
- [change-request](../../../../skills/change-request/SKILL.md): nutzen Sie ihn, um einen schlankeren Change-Datensatz zu gestalten.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Schritte und Wartezeiten einer Praktik zu analysieren.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der ITIL-Leitlinien und ihrer neuesten Version durch den Eigentümer.
- Wikipedia, „Backlog“: Hintergrund zur Liste, die Verbesserung antreibt.
- Wikipedia, „Continual improvement process“: die Idee kontinuierlicher Veränderung.
- Wikipedia, „Agile management“: die Anwendung agiler Ideen auf Management.

## Literaturverzeichnis

1. Agile management — Wikipedia — https://en.wikipedia.org/wiki/Agile_management
2. Backlog — Wikipedia — https://en.wikipedia.org/wiki/Backlog
3. Continual improvement process — Wikipedia — https://en.wikipedia.org/wiki/Continual_improvement_process
4. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
5. Feedback — Wikipedia — https://en.wikipedia.org/wiki/Feedback
6. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
7. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
8. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
9. Self-organization — Wikipedia — https://en.wikipedia.org/wiki/Self-organization
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
