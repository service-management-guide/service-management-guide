# Site Reliability Engineering

**Site Reliability Engineering (SRE) behandelt den Betrieb als Ingenieursproblem: Es setzt messbare Zuverlässigkeitsziele, gibt ein Fehlerbudget für Veränderung aus, beseitigt repetitive Handarbeit (Toil) mit Software und lernt aus Fehlern ohne Schuldzuweisung. Es drückt viele Praktiken des Service-Managements in ingenieurmäßigen Begriffen aus.**

## Warum das wichtig ist

Jeder Service hat eine Spannung zwischen Veränderung und Zuverlässigkeit. Kunden wollen neue Funktionen, und sie wollen, dass der Service funktioniert. Teams, die Veränderung schnell vorantreiben, verursachen Ausfälle, und Teams, die Stabilität bewachen, bremsen alles. Ohne eine Möglichkeit, beides abzuwägen, entscheidet im Streit, wer am lautesten ist, oder der letzte Incident.

Site Reliability Engineering bietet einen Weg, diese Abwägung ausdrücklich zu machen. Es geht von der Idee aus, dass perfekte Zuverlässigkeit weder möglich noch gewollt ist: Nutzer können den Unterschied zwischen 99,999 Prozent und 99,99 Prozent Verfügbarkeit nicht erkennen, wenn ihr eigenes Gerät und Netz öfter ausfallen, und jede zusätzliche Neun kostet weit mehr. Also vereinbart das Team ein Ziel, das dem entspricht, was Nutzer brauchen, misst es und nutzt den Raum zwischen Ziel und Perfektion als Budget für Risiko.

SRE begann Anfang der 2000er-Jahre bei Google und ist in Büchern beschrieben, die das Unternehmen online veröffentlicht hat. Viele andere Organisationen haben Teile davon übernommen. Für das Service-Management liegt sein Wert darin, dass es konkrete, ingenieurmäßige Fassungen von Ideen liefert, die ITIL Service-Level-Management, Verfügbarkeitsmanagement und kontinuierliche Verbesserung nennt. Dieses Thema erklärt die Hauptideen und warnt davor, sie ohne den Kontext zu kopieren, der sie hat funktionieren lassen.

## Kernkonzepte

**Was SRE ist.** Wikipedia beschreibt Site Reliability Engineering als eine Gruppe von Prinzipien und Praktiken, die Aspekte der Softwaretechnik auf IT-Infrastruktur und Betrieb anwenden, um skalierbare und zuverlässige Systeme zu schaffen. Ein SRE-Team umfasst meist Menschen mit Software- und Systemkenntnissen, die Betriebsarbeit automatisieren und am Entwurf für Zuverlässigkeit mitwirken.

**Service-Level-Indikator (SLI).** Ein Maß für einen Aspekt des Services, wie Nutzer ihn erleben, etwa der Anteil der erfolgreichen Anfragen oder der Anteil, der binnen 300 Millisekunden abgeschlossen wird. Ein guter Indikator spiegelt, was Nutzern wichtig ist, nicht, was sich leicht messen lässt.

**Service-Level-Ziel (SLO).** Ein Ziel für einen Indikator über einen Zeitraum, zum Beispiel „99,9 Prozent der Anfragen sind erfolgreich in rollierenden 30 Tagen“. Das Ziel ist ein internes Ziel, vereinbart zwischen denen, die den Service betreiben, und denen, die von ihm abhängen. Wikipedia beschreibt Service-Level-Ziele als Teil von Service-Level-Vereinbarungen.

**Service-Level-Vereinbarung (SLA).** Ein Vertrag mit Folgen, oft finanziellen, wenn der Service unter ein vereinbartes Niveau fällt. Ein SLA setzt meist ein lockereres Ziel als das interne SLO, damit das Team vor einem Verstoß gewarnt ist. Siehe Thema 3.7 — Service-Level-Management.

**Fehlerbudget (Error Budget).** Das zulässige Maß an Unzuverlässigkeit: Ist das Ziel 99,9 Prozent, ist das Budget die verbleibenden 0,1 Prozent. Solange Budget übrig ist, kann das Team Risiken eingehen, etwa schneller ausliefern. Ist das Budget aufgebraucht, verlangsamt das Team Veränderung und investiert in Zuverlässigkeit. Das Budget macht die Abwägung zwischen Zuverlässigkeit und Veränderung zu einer gemeinsamen, messbaren Entscheidung statt zu einem Streit.

**Repetitive Handarbeit (Toil).** Arbeit, die manuell, repetitiv, automatisierbar und taktisch ist und mit dem Service wächst, ohne bleibenden Wert zu schaffen. Beispiele sind das manuelle Neustarten eines Services, das Bearbeiten derselben Anfrageart von Hand und das Quittieren lauter Alarme. SRE-Praxis begrenzt den Zeitanteil für Toil, oft auf etwa die Hälfte, und verwendet den Rest für Ingenieursarbeit, die sie verringert.

**Monitoring und Alarmierung.** Alarme sollten handlungsrelevant sein und an Symptome gebunden, die Nutzer spüren, mit einer klaren Reaktion. Laute Alarme, auf die niemand reagiert, bringen Menschen bei, sie zu ignorieren. Siehe Thema 3.10 — Monitoring und Event-Management und Thema 7.4 — Observability und Telemetrie.

**Incident-Reaktion und schuldfreie Nachbetrachtungen.** SRE betont klare Rollen bei Incidents, Kommunikation und strukturierte Nachbetrachtungen, die das System betrachten und verfolgte Maßnahmen hervorbringen. Siehe Thema 3.2 — Incident-Management und Thema 3.3 — Problem-Management.

**Kapazität und Performance.** SRE umfasst die Prognose der Nachfrage, das Testen von Grenzen und die Kapazitätsplanung, damit Wachstum keinen Ausfall verursacht. Siehe Thema 3.11 — Verfügbarkeit, Kapazität und Performance.

**Release Engineering und Change.** Zuverlässige, wiederholbare Releases, oft mit progressivem Rollout und automatischem Rollback, gehören zur Arbeit von SRE. Siehe Thema 2.2 — Continuous Delivery.

**Ausfall üben.** Chaos Engineering löst Fehler gezielt und unter Kontrolle aus, um Schwächen zu finden, bevor echte Incidents es tun. Game Days proben die Reaktion. Siehe Thema 3.12 — Service-Continuity-Management.

**SRE und DevOps.** Beide teilen viele Ideen. Eine verbreitete Beschreibung lautet, SRE sei eine Möglichkeit, DevOps-Prinzipien umzusetzen, mit einem bestimmten Satz von Praktiken wie SLOs, Fehlerbudgets und Toil-Grenzen. Siehe Thema 2.5 — DevOps.

**SRE und ITIL.** SLOs und Fehlerbudgets stehen neben dem Service-Level-Management; schuldfreie Nachbetrachtungen neben dem Problem-Management; Toil-Abbau unterstützt kontinuierliche Verbesserung. SRE beschreibt, wie ein technisches Team solche Arbeit leisten kann, während ITIL die Praktiken beschreibt, die eine Organisation insgesamt braucht.

**Grenzen des Kopierens.** SRE wurde in einer sehr großen Ingenieursorganisation mit besonderem Umfang und besonderer Besetzung entwickelt. Ein kleines Team kann und muss seine Struktur nicht kopieren. Beginnen Sie mit wenigen Ideen: Wählen Sie einen nutzerzentrierten Indikator, setzen Sie ein Ziel und schreiben Sie auf, was Sie tun, wenn das Budget aufgebraucht ist.

**Wie die Blickwinkel passen.** SRE ist weitgehend die ingenieurmäßige Seite des agilen Blickwinkels für laufende Services. KI kann bei der Triage von Alarmen und bei Incident-Zusammenfassungen helfen, unter menschlicher Prüfung. Automatisierung ist das Hauptwerkzeug gegen Toil. Analytik liefert die SLIs und die Daten zu Toil und Incidents.

## Bewährte Praktiken

1. **Wählen Sie Indikatoren, die das Erlebnis der Nutzer spiegeln.** Fragen Sie, was ein Nutzer als „funktioniert“ bezeichnen würde: Seiten, die laden, Zahlungen, die abgeschlossen werden, Dateien, die ankommen. Messen Sie das, nicht die CPU-Auslastung.
2. **Setzen Sie ein Ziel gemeinsam mit denen, die vom Service abhängen.** Vereinbaren Sie eine Zahl, die dem realen Bedarf entspricht, aufgeschrieben mit Zeitraum und Messweise. Überprüfen Sie sie, wenn sich Bedürfnisse ändern.
3. **Nutzen Sie ein Fehlerbudget, um Entscheidungen zu treffen.** Schreiben Sie auf, was geschieht, wenn das Budget fast aufgebraucht ist, etwa riskante Changes einzufrieren, und wer entscheidet. Vereinbaren Sie das, bevor es zum ersten Mal zählt.
4. **Halten Sie Ziele strenger als Vereinbarungen.** Setzen Sie Ihr internes Ziel so, dass Sie Ärger bemerken, bevor Sie einen Vertrag verletzen. Siehe Thema 3.7 — Service-Level-Management.
5. **Zählen und begrenzen Sie Toil.** Verfolgen Sie, wie viel Zeit auf repetitive Handarbeit entfällt, und setzen Sie ein Limit. Verwenden Sie den Rest dafür, die größten Quellen von Toil zu beseitigen.
6. **Alarmieren Sie auf Symptome und halten Sie Alarme handlungsrelevant.** Jeder Alarm sollte sagen, was für Nutzer falsch ist und was zu tun ist. Entfernen oder beheben Sie Alarme, auf die niemand reagiert.
7. **Teilen Sie Bereitschaft fair und nachhaltig.** Begrenzen Sie die Zahl der Alarme pro Schicht, bieten Sie Schulung und einen dokumentierten Eskalationsweg und überprüfen Sie die Last regelmäßig. Siehe Thema 8.3 — Organisatorischer Wandel und Akzeptanz.
8. **Besprechen Sie Incidents ohne Schuldzuweisung und setzen Sie um.** Schreiben Sie den Zeitverlauf, die beitragenden Faktoren und Maßnahmen mit Verantwortlichen und Terminen. Prüfen Sie, dass die Maßnahmen erledigt werden.
9. **Üben Sie Ausfall unter sicheren Bedingungen.** Führen Sie Game Days und kleine Chaos-Experimente in der Staging-Umgebung oder mit begrenzter Reichweite durch, mit einem klaren Stopp-Knopf.
10. **Beginnen Sie klein.** Wählen Sie einen wichtigen Service, definieren Sie ein oder zwei SLIs und ein SLO und lernen Sie aus dem Ergebnis, bevor Sie ausweiten.

## Fragen für die Diskussion im Team

**Was würden unsere Nutzer unter „funktioniert“ bei diesem Service verstehen, und messen wir es?**
Das ist der Ausgangspunkt für Indikatoren. Teams messen oft stattdessen den Zustand von Servern. Fragen Sie nach dem letzten Mal, als Nutzer unzufrieden waren, während unsere Dashboards grün waren. Wählen Sie anschließend einen für Nutzer sichtbaren Indikator, den wir messen.

**Wie zuverlässig muss dieser Service wirklich sein, und wer hat das entschieden?**
Ziele werden oft aus Gewohnheit gesetzt, zum Beispiel „fünf Neunen“. Fragen Sie, was Nutzer tun, wenn der Service ausfällt, und was eine Stunde Ausfall kostet. Rechnen Sie mit Uneinigkeit. Entwerfen Sie anschließend ein Ziel und prüfen Sie es mit einem Kunden.

**Was tun wir, wenn wir das Fehlerbudget aufgebraucht haben, und tun wir es wirklich?**
Regeln, die nie angewendet werden, bringen Menschen bei, sie zu ignorieren. Fragen Sie, was beim letzten Mal geschah, als die Zuverlässigkeit litt und die Veränderung weiterging. Vereinbaren Sie anschließend eine kleine, konkrete Reaktion und wer entscheidet.

**Was sind die drei größten Quellen von Toil für unser Team, und was bräuchte es, um jede zu beseitigen?**
Bitten Sie Menschen, repetitive Aufgaben aufzulisten und die Zeit zu schätzen. Rechnen Sie mit manuellen Neustarts, Datenkorrekturen und Zugriffsanfragen. Wählen Sie anschließend einen Punkt und schätzen Sie den Aufwand, ihn zu automatisieren, im Vergleich zur über ein Jahr eingesparten Zeit.

**Wie viele Alarme erhielt unser Bereitschaftspersonal im letzten Monat, und wie viele erforderten menschliches Handeln?**
Das prüft Alarmqualität und Arbeitslast. Bitten Sie um die Zahlen; wenn niemand sie kennt, ist das ein Befund. Wählen Sie anschließend den lautesten Alarm, den wir beheben oder löschen.

**Wo könnte KI bei Alarmen oder Incident-Zusammenfassungen helfen, und wie würden wir ihre Fehler bemerken?**
KI kann Alarme gruppieren, Zusammenfassungen entwerfen und Runbook-Schritte vorschlagen. Sie kann auch ein echtes Signal verbergen oder eine Ursache erfinden. Fragen Sie, wer sie verantwortet und wie ihre Ausgabe geprüft wird. Erproben Sie anschließend ein Zusammenfassungswerkzeug neben dem menschlichen Prozess und vergleichen Sie.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Team für das digitale Archiv einer Nationalbibliothek betreibt einen Suchservice für Forschende. Das sechsköpfige Team ist im Wechsel in Bereitschaft. Alarme kommen etwa einmal pro Woche nachts, meist von einem Alarm zum Speicherplatz auf einem Batch-Server, den jemand von Hand freiräumt. Das Management verlangt im Jahresplan „99,99 Prozent Verfügbarkeit“, obwohl niemand die aktuelle Leistung gemessen hat.

Der Teamleiter schlägt ein kleineres Experiment vor. Gemeinsam mit zwei Forschenden definiert das Team einen Indikator: den Anteil der Suchanfragen, die binnen zwei Sekunden Ergebnisse liefern. Sie messen ihn einen Monat lang und finden 99,2 Prozent. Die Forschenden sagen, sie bemerkten Langsamkeit erst, wenn Suchen über fünf Sekunden dauern, was bei etwa 0,3 Prozent der Anfragen vorkommt, meist während eines nächtlichen Neuaufbaus des Index. Sie vereinbaren ein Ziel von 99,5 Prozent binnen zwei Sekunden über 30 Tage und eine Fehlerbudget-Regel: Sind in einem Zeitraum mehr als 75 Prozent des Budgets aufgebraucht, pausiert das Team nicht dringende Releases und behebt die größte Ursache.

Das Team zählt auch Toil. Das manuelle Freiräumen des Speichers dauert etwa zwei Stunden im Monat und weckt jemanden auf. Sie automatisieren die Bereinigung, ergänzen einen Alarm für schnelles Wachstum statt für den vollen Speicher und proben einen Game Day zur Wiederherstellung des Index aus dem Backup.

Was sich ändert: Nächtliche Alarme sinken, und Releases werden im ersten Quartal einmal pausiert, als das Budget knapp wird, wobei die Ursache auf eine langsame Abfrage zurückgeführt wird. Was schwierig bleibt: Der Jahresplan sagt weiter „99,99 Prozent“, weil leitende Führungskräfte nicht zugestimmt haben, ihn zu ersetzen; der Neuaufbau des Index hängt von einem Speicherservice einer anderen Abteilung ab; und das Team ist unsicher, ob Forschende in anderen Zeitzonen den Service genauso erleben. Der Leiter bringt die Formulierung des Plans in den nächsten Review ein.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Teilen Sie Ziel und Budget mit dem Betrieb. Nehmen Sie Zuverlässigkeitsarbeit ins Backlog auf, liefern Sie progressiv aus und beobachten Sie die Wirkung von Änderungen. Ist das Budget aufgebraucht, helfen Sie mit, die Ursache zu verringern.

### Service- und Betriebsteams

Definieren Sie die Indikatoren gemeinsam mit Nutzern, halten Sie Alarme handlungsrelevant und verwenden Sie Ihre Zeit auf Ingenieursarbeit, die Toil beseitigt. Bringen Sie Bereitschaftslast und Incident-Daten in die Planung ein. Schreiben Sie Nachbetrachtungen, die zu verfolgten Maßnahmen führen.

### Führung und Governance

Vereinbaren Sie Ziele, die dem realen Bedarf entsprechen, und stützen Sie die Budgetregel, wenn sie verlangt, Veränderung zu bremsen. Finanzieren Sie die Zeit für Toil-Abbau und Zuverlässigkeitsarbeit. Verlangen Sie keine Perfektion.

### Kunden und Nutzer

Sie sollten gefragt werden, was „funktioniert“ für Sie bedeutet, und erfahren, was das Ziel ist. Melden Sie Probleme klar und erwarten Sie zu hören, was getan wurde. Wenn das Ziel für Ihre Bedürfnisse falsch erscheint, sagen Sie es.

## Agilität, KI, Automatisierung und Analytik

### Agilität

SRE ergänzt kontinuierliche Lieferung und Verbesserung um messbare Zuverlässigkeitsziele. Halten Sie Stakeholder in die Zielsetzung eingebunden und überprüfen Sie die Ziele regelmäßig. Vorsicht: Fehlerbudgets ersetzen kein Urteilsvermögen; manche Incidents, etwa eine Datenschutzverletzung, zählen unabhängig vom Budget.

### KI

KI kann zusammengehörige Alarme gruppieren, wahrscheinliche Ursachen vorschlagen und Incident-Zusammenfassungen entwerfen. Jede Nutzung braucht eine verantwortliche Person und einen Menschen, der für Entscheidungen zuständig ist, sowie einen Weg, KI-Vorschläge mit dem zu vergleichen, was tatsächlich geschah. Vorsicht: Eine KI, die Alarme unterdrückt, um Lärm zu verringern, kann echte Fehler verbergen; testen Sie sie mit bekannten Incidents. Siehe Thema 5.2 — AIOps.

### Automatisierung

Automatisieren Sie Toil: Neustarts, Bereinigungen, Routinezugriffe und wiederholte Diagnose, mit Protokollen, Grenzen und einer Möglichkeit, sie abzuschalten. Vorsicht: Automatisierung, die auf die Produktion wirkt, kann einen Incident verschlimmern; ergänzen Sie Ratenbegrenzungen und einen manuellen Stopp. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Nutzen Sie SLIs, SLO-Erreichung, Verbrauch des Fehlerbudgets, Toil-Stunden und Alarmqualität. Vorsicht: Ziele, die gewählt werden, weil sie leicht zu erreichen sind, oder Indikatoren, die Teile des Nutzererlebnisses ignorieren, geben falsche Sicherheit; prüfen Sie sie an Nutzerbeschwerden. Siehe Thema 7.4 — Observability und Telemetrie und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Zahlen von anderen kopieren.** „Fünf Neunen“ wird übernommen, ohne den Bedarf zu kennen. Entscheiden Sie nach Nutzerbedarf und Kosten.
- **Indikatoren, die den Nutzer verfehlen.** Dashboards sind grün, und Nutzer beschweren sich. Messen Sie, was Nutzer erleben.
- **Eine Budgetregel, der niemand folgt.** Die Veränderung geht weiter, wenn das Budget aufgebraucht ist. Vereinbaren Sie die Reaktion im Voraus und wenden Sie sie an.
- **Alarmrauschen.** Bereitschaftspersonal ignoriert Alarme. Machen Sie jeden Alarm handlungsrelevant.
- **Toil als Normalität.** Das Team bekommt nie Zeit zu automatisieren. Zählen Sie ihn und setzen Sie ein Limit.
- **SRE als Umbenennung des Betriebs.** Die Praktiken werden nicht übernommen. Definieren Sie Indikatoren, Ziele und Budgets.
- **Heldenkultur.** Eine Person löst jeden Incident. Teilen Sie Wissen und Runbooks.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Indikatoren und Ziele | Keine nutzersichtbaren Kennzahlen | Nur Infrastrukturkennzahlen | Nutzerzentrierte SLIs und SLOs für Schlüsselservices | Ziele mit Nutzern und Kosten überprüft | Ziele über abhängige Services abgestimmt |
| Fehlerbudget | Keines | Besprochen | Schriftliche Regel angewendet | Ergebnisse der Regel überprüft | Budgets über Teams und Partner geteilt |
| Toil | Nicht gemessen | Informell erkannt | Gezählt und begrenzt | Mit verfolgter Automatisierung verringert | Über Services hinweg mit geteilten Werkzeugen verringert |
| Lernen aus Incidents | Schuldzuweisung | Einige Nachbetrachtungen | Schuldfreie Nachbetrachtungen mit verfolgten Maßnahmen | Erledigung der Maßnahmen und Wiederholung gemessen | Lernen in der Organisation geteilt |

## Checkliste

- [ ] Wir haben für jeden wichtigen Service mindestens einen nutzersichtbaren Indikator.
- [ ] Jeder hat ein Ziel, das mit denen vereinbart ist, die sich darauf verlassen.
- [ ] Wir haben aufgeschrieben, was geschieht, wenn das Fehlerbudget fast aufgebraucht ist.
- [ ] Unsere internen Ziele sind strenger als unsere Vereinbarungen.
- [ ] Wir verfolgen Toil und haben ein Limit.
- [ ] Alarme sind handlungsrelevant, und laute werden behoben oder entfernt.
- [ ] Die Bereitschaftslast wird gemessen und ist nachhaltig.
- [ ] Nachbetrachtungen von Incidents sind schuldfrei, und Maßnahmen werden bis zur Erledigung verfolgt.

## KI-Prompts

**Entwerfen Sie Kandidaten für Indikatoren.**

```text
Our service: [describe what it does and who uses it]. What users complain about: [list].
Propose up to five candidate service level indicators, each with what it measures, how it could be computed from [available data sources], and one way it could mislead. Do not choose an objective.
List what you are unsure of.
```

**Berechnen Sie den Verbrauch des Fehlerbudgets.**

```text
Our objective: [for example, 99.5 percent of requests under two seconds over 30 days]. Here are daily counts of good and total events for the period: [paste data].
Calculate attainment so far, the error budget used as a percentage, and the daily burn rate, showing each calculation. Do not predict beyond the data.
List what you are unsure of.
```

**Ordnen Sie Toil-Kandidaten nach Rang.**

```text
Here is a list of repetitive tasks our team does, with how often and how long each takes: [paste list].
Compute hours per month for each, rank them, and for the top five list one question about whether automating it is safe. Do not recommend specific tools.
List what you are unsure of.
```

## KI-Skills

- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): nutzen Sie ihn, um Ziele mit Vereinbarungen in Beziehung zu setzen.
- [postmortem](../../../../skills/postmortem/SKILL.md): nutzen Sie ihn, um schuldfreie Nachbetrachtungen mit verfolgten Maßnahmen durchzuführen.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): nutzen Sie ihn, um sichere Fehlerexperimente zu planen.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): nutzen Sie ihn, um Nachfrage und Grenzen zu prognostizieren.

## Wichtige Quellen

- Betsy Beyer, Chris Jones, Jennifer Petoff und Niall Richard Murphy (Hrsg.), *Site Reliability Engineering: How Google Runs Production Systems* (2016), frei verfügbar unter sre.google: die Hauptquelle für die Praktiken.
- Betsy Beyer und andere (Hrsg.), *The Site Reliability Workbook* (2018): praktische Hinweise zur Einführung.
- Wikipedia, „Site reliability engineering“: ein neutraler Überblick.
- Wikipedia, „Service-level objective“: Hintergrund zu den Begriffen.

## Literaturverzeichnis

1. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
2. Service-level objective — Wikipedia — https://en.wikipedia.org/wiki/Service-level_objective
3. Service level indicator — Wikipedia — https://en.wikipedia.org/wiki/Service_level_indicator
4. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
5. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
6. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
