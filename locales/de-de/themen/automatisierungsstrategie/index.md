# Automatisierungsstrategie

**Eine Automatisierungsstrategie entscheidet, was automatisiert wird und was nicht, in welcher Reihenfolge und mit welchen Kontrollen. Sie folgt dem ITIL-Prinzip „optimieren und automatisieren“, indem sie zuerst vereinfacht, stabile wiederholte Arbeit mit Protokollen und Rollback automatisiert und jede Automatisierung als Produkt behandelt, das eine verantwortliche Person und Pflege braucht.**

## Warum das wichtig ist

Automatisierung ist der älteste Hebel im Technologiebetrieb und der, der am häufigsten ohne Plan gezogen wird. Jemand schreibt ein Skript, um eine Stunde zu sparen, und es funktioniert. Jemand anderes schreibt ein weiteres. Binnen zwei Jahren hat ein Team Hunderte von Skripten, geplanten Jobs und Workflow-Regeln, geschrieben von Menschen, die inzwischen gegangen sind, von niemandem verstanden und von allem benötigt. Ein stiller Ausfall in einem davon legt einen Service lahm, und das Team erfährt, was es automatisiert hat, indem es herausfindet, was stehen geblieben ist.

Der entgegengesetzte Fehler ist ebenfalls häufig. Ein Team setzt sich das Ziel, „80 Prozent der Aufgaben zu automatisieren“, und automatisiert Dinge, die zweimal im Jahr geschehen, die vom Urteil abhängen oder sich jeden Monat ändern. Der Aufwand zahlt sich nie aus, und die Automatisierung muss für immer gepflegt werden. Währenddessen bleibt die Arbeit, die sich zehnfach ausgezahlt hätte, manuell, weil sie öde ist und niemand danach gefragt hat.

Eine Strategie vermeidet beides. Sie wählt nach Belegen für den Ertrag, ordnet die Arbeit so, dass Vereinfachen vor dem Skripten kommt, und behandelt das Ergebnis als etwas, das verantwortet und gepflegt wird. Sie rechnet auch mit einem realen menschlichen Preis: Wenn Maschinen das Routinemäßige übernehmen, bleiben den Menschen die schwierigen Ausnahmen und weniger Gelegenheiten, die Grundlagen zu üben. Dieses Thema legt diese Entscheidungen dar. Es ist der Einstieg in Teil 6 und verbindet sich mit Workflow-Automatisierung (Thema 6.2 — Workflow-Automatisierung und Orchestrierung), Infrastructure as Code (Thema 6.3 — Infrastructure as Code und GitOps), Pipelines (Thema 6.4 — Pipelines und automatisierte Changes), Self-Service (Thema 6.5 — Self-Service und automatisierte Bereitstellung) und Runbook-Automatisierung (Thema 6.6 — Runbook-Automatisierung und automatische Behebung). Die Verbindung zur KI steht in Thema 5.1 — KI im Service-Management.

## Kernkonzepte

**Automatisierung.** Der Einsatz von Technologie, um Aufgaben mit verringerter menschlicher Beteiligung auszuführen. Wikipedia beschreibt Automation breit über die Industrie hinweg. Im Service-Management reicht sie von einem geplanten Skript über Workflows, die Werkzeuge überspannen, bis zu Systemen, die entscheiden und handeln. Das Wort deckt sehr Verschiedenes ab, benennen Sie daher in jeder Diskussion die Art.

**Optimieren, dann automatisieren.** Das Leitprinzip „optimieren und automatisieren“ von ITIL 4 sagt, sicherzustellen, dass die Arbeit so wirksam wie möglich ist, und dann Technologie zu nutzen, um mehr zu erreichen (siehe Thema 1.5 — Die ITIL-Leitprinzipien). Die Reihenfolge ist Absicht. Einen verworrenen oder verschwenderischen Prozess zu automatisieren, schreibt seine Verworrenheit und Verschwendung fest und macht ihn schwerer änderbar. Lean-Denken kommt zur selben Ansicht (siehe Thema 2.4 — Lean und Kaizen).

**Was eine Aufgabe zu einem guten Kandidaten macht.** Suchen Sie Arbeit, die häufig, gut verstanden, regelbasiert, von Hand fehleranfällig und stabil ist. Die Beschreibungen von Business process automation und Robotic process automation (RPA) auf Wikipedia nennen gängige Ziele, etwa Daten zwischen Systemen zu bewegen. Schlechte Kandidaten sind selten, wechselnd, mehrdeutig oder abhängig von Urteil oder Einfühlung.

**Ertrag der Automatisierung.** Eine grobe Regel ist, die pro Jahr gesparte Zeit plus den Wert weniger Fehler und schnellerer Reaktion mit den Kosten für Bau, Betrieb und Pflege der Automatisierung zu vergleichen. Wikipedia beschreibt Return on investment und Cost–benefit analysis. Beziehen Sie die Pflege ein: Automatisierungen brechen, wenn sich die Systeme um sie herum ändern. Nennen Sie Annahmen und Bandbreiten, denn die Zahlen sind Schätzungen.

**Wo man suchen sollte.** Beginnen Sie mit Daten. Process mining, auf Wikipedia beschrieben, nutzt Ereignisprotokolle, um zu zeigen, wie Arbeit tatsächlich fließt. Ticket- und Anfragedaten zeigen, welche Aufgaben wiederkehren. Fragen Sie die Menschen, die die Arbeit tun, was sie langweilt oder frustriert. Das Pareto-Prinzip legt nahe, dass ein kleiner Anteil der Aufgabenarten den Großteil des Volumens ausmacht.

**Automatisierungsstufen.** Von manuell über unterstützt (ein Werkzeug bereitet vor, eine Person handelt) und bedingt (das System handelt, eine Person genehmigt) bis zu autonom innerhalb von Grenzen. Wählen Sie die Stufe je Aufgabe nach den Kosten eines Fehlers und der Möglichkeit, ihn rückgängig zu machen. Siehe Thema 5.5 — Agentische KI und menschliche Aufsicht.

**Kontrollen.** Jede Automatisierung braucht ein Protokoll dessen, was sie wann getan hat, Grenzen dafür, was sie berühren kann, einen Weg, sie zu stoppen, und einen Weg, ihre Wirkungen umzukehren. Wikipedia beschreibt Fail-safe-Entwurf: Wenn ein System ausfällt, soll es so ausfallen, dass es den geringsten Schaden verursacht. Siehe Thema 3.4 — Change Enablement.

**Automatisierung als Produkt.** Eine Automatisierung hat Nutzer, eine verantwortliche Person, ein Backlog, Dokumentation, Tests und einen Lebenszyklus. Ohne verantwortliche Person verfällt sie. Der Wikipedia-Artikel zu Technical debt trifft zu: In Eile geschriebene und nie gepflegte Skripte werden zu Verbindlichkeiten. Siehe Thema 2.8 — Produkt- und Service-Verantwortung.

**Zuerst Standardverfahren.** Ein geschriebenes, getestetes Verfahren, etwa ein Runbook oder eine Standard Operating Procedure (auf Wikipedia beschrieben), ist die beste Spezifikation für Automatisierung. Können Sie nicht aufschreiben, was die Person tut, sind Sie nicht bereit, es zu automatisieren. Siehe Thema 3.9 — Wissensmanagement.

**Werkzeuge und Plattformen.** Die Optionen reichen von Shell-Skripten und Schedulern wie cron über Workflow- und Orchestrierungsplattformen bis zu RPA und Low-Code-Plattformen. Wikipedia beschreibt jede. Wählen Sie das einfachste Werkzeug, das sich pflegen lässt, und bevorzugen Sie Werkzeuge mit eingebauter Versionsverwaltung, Tests und Audit. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

**Fähigkeiten und die Ironien der Automatisierung.** In einem bekannten Aufsatz von 1983 beschrieb die Forscherin Lisanne Bainbridge Ironien der Automatisierung: Wenn Automatisierung den Großteil einer Aufgabe übernimmt, bleiben der Person die schwierigen, seltenen Fälle, doch sie hat weniger Übung und weniger Gefühl für das System. Wikipedia beschreibt den Aufsatz. Die praktische Lehre ist, Menschen in Übung zu halten, ihnen zu zeigen, was die Automatisierung tut, und Übergaben so zu gestalten, dass eine Person eingreifen kann.

**Bus-Faktor und Wissen.** Automatisierung kann Wissen bei der Autorin konzentrieren. Wikipedia beschreibt den Bus factor. Prüfen, dokumentieren und teilen Sie, damit mehr als eine Person jede Automatisierung pflegen kann.

**Sicherheit.** Automatisierungen halten Zugangsdaten und haben Macht. Eine kompromittierte Automatisierung ist ein attraktives Ziel. Geben Sie jeder eine eigene Identität mit minimalen Berechtigungen, speichern Sie Geheimnisse sicher und überprüfen Sie Zugriffe. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Menschen und Vertrauen.** Mitarbeitende fürchten womöglich, dass Automatisierung ihre Stellen bedroht oder dass ihr bei Fehlern die Schuld gegeben wird. Beziehen Sie sie in die Wahl ein, was automatisiert wird, sagen Sie, wie eingesparte Zeit genutzt wird, und würdigen Sie die Arbeit, Automatisierung zu bauen und zu pflegen. Siehe Thema 8.3 — Organisatorischer Wandel und Akzeptanz.

**Wie die Blickwinkel passen.** Automatisierung ist der dritte Blickwinkel. Agile Praxis legt nahe, in kleinen Schritten zu automatisieren und aus jedem zu lernen. KI fügt eine Möglichkeit hinzu zu entscheiden und zu entwerfen; Automatisierung handelt. Analytik erkennt Kandidaten und zeigt, ob Automatisierung geliefert hat.

## Bewährte Praktiken

1. **Beginnen Sie bei Daten und Schmerz.** Betrachten Sie Ticket- und Anfragevolumen, Process Mining, wo verfügbar, und was Mitarbeitende mühsam finden. Wählen Sie nach Belegen, nicht nach Mode.
2. **Vereinfachen Sie zuerst.** Entfernen Sie Schritte und Genehmigungen, die keinen Wert schaffen, bevor Sie sie per Skript abbilden. Fragen Sie, wie der Prozess aussähe, wenn Sie neu begännen.
3. **Schreiben Sie das Verfahren auf.** Dokumentieren Sie Schritte, Eingaben, Ausgaben und Ausnahmen. Testen Sie das Verfahren, indem eine andere Person ihm folgt. Nutzen Sie es als Spezifikation.
4. **Schätzen Sie den Ertrag ehrlich.** Vergleichen Sie gesparte Zeit mit Bau- und Pflegekosten, in Bandbreiten. Zählen Sie Fehlerverringerung und Tempo, wo sie zählen. Lassen Sie Kandidaten fallen, die sich nicht auszahlen.
5. **Automatisieren Sie in kleinen Schritten.** Beginnen Sie mit einem Teil, etwa Daten für eine Person zu sammeln, dann erweitern Sie. Liefern Sie oft aus und lernen Sie.
6. **Wählen Sie die Autonomiestufe nach Risiko.** Lassen Sie risikoarme, umkehrbare Aufgaben mit Protokollen allein laufen und halten Sie bei folgenreichen oder unumkehrbaren eine Person in der Schleife.
7. **Bauen Sie Protokolle, Grenzen und Rollback ein.** Zeichnen Sie jede Handlung auf, begrenzen Sie, wie viel ein Lauf ändern kann, und schreiben Sie den Weg zurück. Testen Sie ihn.
8. **Geben Sie jeder Automatisierung eine verantwortliche Person und ein Zuhause.** Halten Sie Code in der Versionsverwaltung mit Prüfung und Tests, dokumentieren Sie ihn und führen Sie ihn in einem Register mit verantwortlicher Person und dem, was davon abhängt.
9. **Halten Sie Fähigkeiten am Leben.** Zeigen Sie Menschen, was die Automatisierung tut, proben Sie den manuellen Rückfall für wichtige Aufgaben und lassen Sie Menschen durch die schwierigen Fälle rotieren.
10. **Überprüfen und legen Sie still.** Prüfen Sie regelmäßig, welche Automatisierungen genutzt werden und welche versagen, beheben oder entfernen Sie sie und messen Sie den Nutzen an der Schätzung.

## Fragen für die Diskussion im Team

**Welche Aufgaben wiederholen wir am häufigsten, und welche würden wir am liebsten nie wieder tun?**
Fragen Sie alle. Rechnen Sie mit Kontoeinrichtung, Berichten und Datenkorrekturen. Wählen Sie anschließend drei und schätzen Sie die Stunden pro Monat.

**Wie sähe für unseren Top-Kandidaten der Prozess aus, wenn wir ihn vor dem Automatisieren vereinfachten?**
Zeichnen Sie ihn. Rechnen Sie mit Schritten, die niemand begründen kann. Entfernen Sie anschließend einen, bevor Sie Code schreiben.

**Von welchen Automatisierungen hängen wir bereits ab, wer verantwortet jede, und was geschieht, wenn eine still ausfällt?**
Erstellen Sie eine Liste. Rechnen Sie mit Überraschungen und Waisen. Benennen Sie anschließend Verantwortliche und ergänzen Sie eine Prüfung auf Ausfall.

**Welche unserer Aufgaben sollten manuell bleiben, weil sie Urteil oder Einfühlung brauchen?**
Diskutieren Sie. Rechnen Sie mit Einigkeit bei sensiblen Angelegenheiten und Uneinigkeit am Rand. Schreiben Sie anschließend die Grenze auf und wer sie ändern darf.

**Wie halten wir die Fähigkeit, die Aufgabe von Hand zu tun, wenn die Automatisierung nicht verfügbar ist?**
Fragen Sie nach dem letzten Mal, als jemand es manuell tat. Rechnen Sie mit „lange her“. Planen Sie anschließend eine regelmäßige Probe.

**Wie nutzen wir die Zeit, die Automatisierung freimacht, und haben wir es dem Team gesagt?**
Das schafft Vertrauen. Rechnen Sie mit Unsicherheit und etwas Angst. Vereinbaren Sie anschließend, wofür die gesparte Zeit verwendet wird, und sagen Sie es offen.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein nationales Standesamtsregister für Geburten, Todesfälle und Eheschließungen betreibt ein kleines IT-Team aus zehn Personen, das 600 Beschäftigte unterstützt. Ein Manager hat vorgeschlagen, „alles Mögliche zu automatisieren“, und hat eine Liste von 120 Kandidaten. Die Service-Leiterin vermutet, dass sich die meisten nicht auszahlen würden, und bittet um eine Rangfolge.

Das Team verbringt zwei Wochen mit der Datenerhebung. Aus sechs Monaten Tickets stellt es fest, dass 70 Prozent des Volumens auf acht Aufgabenarten entfallen, angeführt von Konten für neue Mitarbeitende, Passwort-Rücksetzungen, Änderungen an gemeinsamen Postfächern und der monatlichen Berichtserstellung. Es schätzt die Stunden pro Monat für jede und fragt die Beteiligten, was schiefläuft. Konten für neue Mitarbeitende, mit 40 Stunden im Monat, umfassen elf manuelle Schritte, von denen drei doppelt sind und zwei Genehmigungen, die nie abgelehnt wurden. Sie vereinfachen auf acht Schritte, bevor sie irgendetwas schreiben.

Sie automatisieren in Stufen. Zuerst sammelt ein Skript die Informationen und legt die Konten an, wobei ein Techniker das Ergebnis prüft. Nach zwei Monaten fehlerfreier Läufe läuft das Skript für Standardrollen unbeaufsichtigt, mit Protokoll und täglicher Prüfung, und ein Techniker bearbeitet Nicht-Standardrollen. Passwort-Rücksetzungen wechseln zum Self-Service-Weg des Identitätssystems, den der Anbieter bereitstellt. Der Monatsbericht, der 12 Stunden dauert, hängt von Daten aus drei Systemen in verschiedenen Formaten ab, und das Team beschließt, ihn erst zu automatisieren, wenn die Datenquellen behoben sind.

Jede Automatisierung wird registriert, mit verantwortlicher Person, Repository und Rollback. Ein Techniker wird zugewiesen, jedes Quartal durch die manuelle Bearbeitung zu rotieren, damit die Fähigkeit erhalten bleibt. Der Manager vereinbart, dass die gesparte Zeit einem Rückstau überfälliger Upgrades zugutekommt, und sagt das in einer Teambesprechung.

Was sich ändert: Etwa 70 Stunden im Monat werden frei, und neue Mitarbeitende haben am ersten Tag funktionierende Konten. Was schwierig bleibt: Das Skript muss aktualisiert werden, wann immer sich die Verzeichnisstruktur ändert, was im ersten Quartal zweimal geschah; zwei Techniker sind die Einzigen, die es verstehen; und der Manager fragt weiter, warum die anderen 110 Kandidaten nicht umgesetzt wurden. Die Leiterin zeigt die Daten und vereinbart, die Liste halbjährlich zu überprüfen.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Bauen Sie für Automatisierung: Stellen Sie klare Schnittstellen bereit, vermeiden Sie manuelle Schritte bei Release und Deployment und liefern Sie Runbooks, die andere per Skript abbilden können. Verantworten Sie die Automatisierungen, die Sie schaffen.

### Service- und Betriebsteams

Kennen Sie Ihre wiederholten Aufgaben, vereinfachen Sie sie und automatisieren Sie die stabilen mit Protokollen und Rollback. Halten Sie manuelle Fähigkeiten am Leben und registrieren Sie, was Sie automatisieren, mit einer verantwortlichen Person.

### Führung und Governance

Verlangen Sie Belege für den Ertrag und für Kontrollen, nicht eine Zahl von Automatisierungen. Sagen Sie, wie gesparte Zeit genutzt wird. Finanzieren Sie Pflege und Fähigkeiten ebenso wie den Bau.

### Kunden und Nutzer

Sie profitieren von schnellerem, einheitlicherem Service und sollten für Ausnahmen weiterhin eine Person erreichen können. Sagen Sie dem Anbieter, wo Automatisierung Ihren Fall nicht bewältigt hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Automatisieren Sie in kleinen Inkrementen, mit denen, die die Arbeit tun, und überprüfen Sie Ergebnisse. Behandeln Sie das Automatisierungs-Backlog als Teil des Verbesserungs-Backlogs. Vorsicht: Das Tempo, mit dem Automatisierungen geliefert werden, kann die Fähigkeit zur Pflege überholen; begrenzen Sie laufende Arbeit und legen Sie alte still.

### KI

KI kann helfen, Kandidaten durch Gruppieren von Aufgaben zu finden, Skripte und Verfahren zu entwerfen und innerhalb von Grenzen zu entscheiden, was zu tun ist. Jede KI-gestützte Automatisierung braucht dieselbe verantwortliche Person, dieselben Tests und Kontrollen. Vorsicht: Generierte Skripte können Fehler oder unsichere Muster enthalten; prüfen und testen Sie sie wie jeden anderen Code. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Dieses Thema ist der Blickwinkel selbst: wählen, vereinfachen, mit Kontrollen bauen, verantworten und überprüfen. Vorsicht: Automatisierung bündelt Macht und verbirgt Komplexität; halten Sie Protokolle lesbar und geben Sie Menschen die Mittel, sie zu verstehen und zu stoppen.

### Analytik

Nutzen Sie Ticketdaten, Process Mining, Zeit- und Fehlerdaten und Ergebnisse nach der Automatisierung. Vorsicht: Schätzungen gesparter Stunden sind oft aufgebläht, und Kennzahlen wie „Zahl der Automatisierungen“ belohnen Menge; verfolgen Sie tatsächlich freigewordene Zeit, Fehler und Ausfälle. Siehe Thema 7.6 — Prozess- und Wertstromanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ein Durcheinander automatisieren.** Die Verworrenheit bleibt erhalten. Vereinfachen Sie zuerst.
- **Automatisierung nach Vorgabe.** Aufgaben werden für die Zahl gewählt. Wählen Sie nach Ertrag und Bedarf.
- **Verwaiste Skripte.** Niemand verantwortet oder versteht sie. Registrieren Sie, weisen Sie Verantwortliche zu und überprüfen Sie.
- **Keine Protokolle oder kein Rollback.** Ein Fehler lässt sich nicht nachvollziehen oder rückgängig machen. Bauen Sie beides ein.
- **Fähigkeiten verblassen.** Niemand kann die Aufgabe von Hand. Proben und rotieren Sie.
- **Versteckte Pflegekosten.** Die Automatisierung bricht bei jeder Änderung in der Nähe. Zählen Sie die Pflege in den Ertrag.
- **Angst und Geheimhaltung.** Mitarbeitende widersetzen sich. Beziehen Sie sie ein und sagen Sie, wie Gewinne genutzt werden.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Auswahl | Ad-hoc-Skripte | Kandidaten aufgelistet | Kandidaten nach Daten und Ertrag gewählt | Ergebnisse mit Schätzungen verglichen | Portfolio nach Wert und Risiko gewählt und neu gewichtet |
| Kontrollen | Keine | Etwas Protokollierung | Protokolle, Grenzen und Rollback als Standard | Kontrollen getestet und auditiert | Kontrollen in gemeinsame Plattformen eingebaut |
| Verantwortung | Einzelne | Bekannte Autoren | Register mit Verantwortlichen, Versionsverwaltung und Prüfung | Pflege und Ausfälle verfolgt | Verantwortung über Teams abgestimmt |
| Menschen | Angst oder Vernachlässigung | Bewusstsein | Fähigkeiten am Leben gehalten, Nutzen geteilt | Fähigkeiten und Arbeitslast überprüft | Rollen und Fähigkeiten mit Automatisierung in der Organisation geplant |

## Checkliste

- [ ] Wir haben Kandidaten anhand von Daten zu Volumen, Fehlern und Aufwand gewählt.
- [ ] Wir haben jeden Prozess vor dem Automatisieren vereinfacht.
- [ ] Jede Automatisierung folgt einem geschriebenen, getesteten Verfahren.
- [ ] Wir haben den Ertrag einschließlich Pflege geschätzt.
- [ ] Jede Automatisierung hat eine verantwortliche Person, Versionsverwaltung und einen Registereintrag.
- [ ] Protokolle, Grenzen und Rollback sind eingebaut und getestet.
- [ ] Wir halten manuelle Fähigkeiten für wichtige Aufgaben am Leben.
- [ ] Wir haben dem Team gesagt, wie die gesparte Zeit genutzt wird.

## KI-Prompts

**Ordnen Sie Kandidaten aus Ticketdaten nach Rang.**

```text
Here is a summary of ticket categories with counts per month and average handling time: [paste].
Compute hours per month for each category, rank them, and for the top eight list questions to ask about whether the task is stable, rules-based, and safe to automate. Do not recommend automating any.
List what you are unsure of.
```

**Entwerfen Sie aus einem Verfahren eine Spezifikation.**

```text
Here is the written procedure for a task: [paste].
List the inputs, steps, decision points, outputs, and exceptions, and mark each step as "clear", "needs judgment", or "unclear". List questions to answer before automation. Do not write code.
List what you are unsure of.
```

**Prüfen Sie eine Automatisierung auf Kontrollen.**

```text
Here is a description of an automation: what it does, what it can change, who owns it, how it runs: [paste].
List missing controls from this set: logging, limits, rollback, stop switch, owner, permissions, tests, and failure alerts, quoting the description for each you consider present. Do not assume controls that are not stated.
List what you are unsure of.
```

## KI-Skills

- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Schritte und Wartezeiten vor dem Automatisieren zu analysieren.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): nutzen Sie ihn, um den Ertrag einer Automatisierung zu schätzen.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um das Verfahren zu schreiben, das zur Spezifikation wird.
- [kaizen](../../../../skills/kaizen/SKILL.md): nutzen Sie ihn, um vor dem Automatisieren zu vereinfachen.
- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): nutzen Sie ihn, um die Schritte zu finden, die sich zu automatisieren lohnen.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der ITIL-Leitlinien durch den Eigentümer, einschließlich optimieren und automatisieren.
- Lisanne Bainbridge, „Ironies of Automation“ (*Automatica*, 1983): der klassische Aufsatz zu Automatisierung und menschlicher Fähigkeit.
- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zum Beseitigen von Toil, frei unter sre.google.
- Wikipedia, „Automation“ und „Business process automation“: Überblicke über die Ideen.

## Literaturverzeichnis

1. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
2. Business process automation — Wikipedia — https://en.wikipedia.org/wiki/Business_process_automation
3. Robotic process automation — Wikipedia — https://en.wikipedia.org/wiki/Robotic_process_automation
4. Ironies of Automation — Wikipedia — https://en.wikipedia.org/wiki/Ironies_of_Automation
5. Process mining — Wikipedia — https://en.wikipedia.org/wiki/Process_mining
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Cost–benefit analysis — Wikipedia — https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis
8. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
9. Standard operating procedure — Wikipedia — https://en.wikipedia.org/wiki/Standard_operating_procedure
10. Fail-safe — Wikipedia — https://en.wikipedia.org/wiki/Fail-safe
11. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
12. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
