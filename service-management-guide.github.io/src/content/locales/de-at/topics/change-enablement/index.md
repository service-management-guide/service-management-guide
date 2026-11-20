# Change Enablement

**Change Enablement stellt sicher, dass Änderungen an Services sicher und schnell erfolgen. Es bewertet Risiko, überträgt Befugnis an die Menschen, die der Änderung am nächsten sind, und verlegt Routineprüfungen in die Pipeline, sodass menschliche Prüfung den Changes vorbehalten bleibt, bei denen Urteilsvermögen nötig ist.**

## Warum das wichtig ist

Changes verursachen Incidents. Eine Konfigurationsänderung, ein Code-Release, eine Zertifikatserneuerung, eine Firewall-Regel: Jedes davon kann einen Service zum Ausfall bringen. Die meisten Organisationen lernen das auf die harte Tour und reagieren mit einer Kontrolle: einem Formular, einer Genehmigung, einer Besprechung, einem Freeze. Die Kontrolle verringert etwas Risiko und fügt Verzögerung hinzu, und die Verzögerung ermuntert Menschen, Änderungen zu größeren Stapeln zu bündeln, die riskanter sind.

Die traditionelle Form der Kontrolle ist das Change Advisory Board (CAB), eine Gruppe, die vorgeschlagene Changes prüft. Boards können echten Wert schaffen, wenn sie bei riskanten Changes einen breiten Blick einbringen. Sie werden auch zum Engpass, wenn sie jeden Change prüfen, auch Routine-Changes, die tausendmal gelungen sind. Forschung zur Software-Lieferung, berichtet im Buch *Accelerate* von Nicole Forsgren, Jez Humble und Gene Kim, fand, dass schwergewichtige externe Genehmigung nicht mit besserer Stabilität verbunden war, wohl aber mit langsamerer Lieferung; Prüfung durch Kolleginnen und Kollegen und automatisierte Prüfungen waren mit besseren Ergebnissen verbunden. Die Daten stammen aus Umfragen und haben ihre eigenen Grenzen, aber die Richtung passt zur Erfahrung vieler Teams.

ITIL 4 hat die Praktik in „Change Enablement“ umbenannt, um zu signalisieren, dass das Ziel ist, nützliche Veränderung zu ermöglichen, indem Risiken sachgerecht bewertet, Changes zur Durchführung freigegeben und der Change-Zeitplan gesteuert werden. Dieses Thema zeigt, wie das mit verschiedenen Wegen für verschiedene Arten von Change gelingt und wie man Belege in die Arbeit einbaut. Es baut auf Continuous Delivery auf (Thema 2.2 — Continuous Delivery) und verbindet sich mit Release-Management (Thema 3.5 — Release- und Deployment-Management) und Konfigurationsmanagement (Thema 4.4 — Konfigurationsmanagement).

## Kernkonzepte

**Change.** In ITIL 4 das Hinzufügen, Verändern oder Entfernen von allem, was direkt oder indirekt Auswirkungen auf Services haben könnte. Der Umfang ist weit: Software, Infrastruktur, Konfiguration, Dokumente, Lieferanten und Prozesse. Die Wikipedia-Artikel zu Change management und Change control beschreiben die Idee in IT und Technik.

**Change Enablement oder Change Management.** „Change Management“ wird auch für organisatorischen Wandel verwendet, also die menschliche Seite der Transformation (siehe Thema 8.3 — Organisatorischer Wandel und Akzeptanz). „Change Enablement“ bezeichnet in ITIL die Steuerung von Änderungen an Services und Produkten. Dieser Leitfaden verwendet den ITIL-4-Begriff für die hier beschriebene Praktik.

**Arten von Change.** ITIL 4 beschreibt drei:

| Art | Beschreibung | Typischer Weg |
|---|---|---|
| Standard | Risikoarm, gut verstanden, vorab genehmigt, wiederholt | Folgt einem dokumentierten Verfahren; keine individuelle Genehmigung |
| Normal | Braucht Bewertung und Genehmigung | Von der richtigen Change-Befugnis bewertet und genehmigt |
| Notfall | Muss dringend erfolgen, etwa um den Service wiederherzustellen oder eine kritische Schwachstelle zu beheben | Beschleunigte Genehmigung mit anschließender Überprüfung |

**Change-Befugnis (Change Authority).** Die Person oder Gruppe, die einen Change genehmigt. ITIL 4 betont, dass die Befugnis auf der dem Risiko angemessenen Ebene liegen sollte, bei risikoarmen Changes oft bei einer Kollegin oder dem Team selbst. Riskantere Changes gehen höher. Der Wikipedia-Artikel zum Change-advisory board beschreibt das traditionelle Modell.

**Risikobewertung.** Die Schätzung von Wahrscheinlichkeit und Auswirkung eines Scheiterns des Changes. Faktoren sind die Größe des Changes, die Kritikalität des Services, die Zahl der Nutzer, die durchgeführten Tests, die Möglichkeit zum Rollback und die Erfolgsbilanz ähnlicher Changes. Die Wikipedia-Artikel zu Risk assessment und Risk management beschreiben allgemeine Methoden. Eine einfache, konsistente Checkliste funktioniert besser als eine aufwendige Bewertung, der niemand vertraut.

**Change-Zeitplan.** Ein Kalender, der geplante Changes zeigt, damit Konflikte und Kollisionen mit kritischen Geschäftszeiten sichtbar werden. Für Teams, die viele Male am Tag ausliefern, schrumpft der Zeitplan auf Ausnahmen, etwa Freeze-Zeiträume, und auf große Changes, die Koordination brauchen.

**Prüfung durch Kolleginnen und Kollegen (Peer Review).** Eine andere kompetente Person prüft den Change, bevor er erfolgt, wie beim Code-Review. Wikipedia beschreibt Peer review und Code review. Sie ist billig, schnell und bringt einschlägiges Wissen ein, und sie unterstützt die Funktionstrennung, wo diese verlangt wird.

**Automatisierte Kontrollen in der Pipeline.** Tests, statische Analyse, Sicherheitsscans und Richtlinienprüfungen laufen bei jedem Change, und die Pipeline zeichnet auf, was lief und mit welchem Ergebnis. Das liefert bessere Belege als eine Besprechung, weil es konsistent und an den tatsächlichen Change gebunden ist. Die Wikipedia-Artikel zu Test automation und Static program analysis beschreiben einige der Techniken. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

**Funktionstrennung (Separation of Duties).** Eine Kontrolle, bei der keine einzelne Person eine riskante Handlung allein abschließen kann, etwa indem verlangt wird, dass die Person, die einen Change schreibt, nicht allein genehmigt. Vorschriften oder Audit können sie verlangen. Wikipedia beschreibt Separation of duties. Pipelines können sie durchsetzen, indem sie eine zweite prüfende Person verlangen und beide aufzeichnen.

**Rollback und Wiederherstellung.** Die Fähigkeit, einen Change rückgängig zu machen oder schnell vorwärts zu rollen, verringert Risiko. Datenänderungen sind schwerer umkehrbar als Codeänderungen. Siehe den Wikipedia-Artikel zu Rollback in data management.

**Notfall-Changes.** Echte Notfälle brauchen Tempo. Ein definierter Weg, mit benannter Befugnis, minimalem Papierkram und anschließender Überprüfung, verhindert, dass „Notfall“ zum Standardweg wird, den Prozess zu umgehen.

**Belege und Audit.** Regulierung wie der Sarbanes–Oxley Act in den Vereinigten Staaten und ähnliche Regeln in anderen Rechtsordnungen hat Anforderungen an die Kontrolle von Änderungen an Finanzsystemen vorangetrieben. Anforderungen unterscheiden sich nach Rechtsordnung und Branche; prüfen Sie, was für Sie gilt, und fragen Sie Ihren Auditor, welche Belege es erfüllen. Dieser Leitfaden gibt keine Rechtsberatung.

**Wie die Blickwinkel passen.** Change Enablement ist der Ort, an dem agiles Tempo auf Kontrolle trifft. Agile Praxis legt kleine, häufige Changes und frühe Einbindung der Stakeholder nahe. KI kann helfen, Risiko zu bewerten und Change-Beschreibungen zu entwerfen, unter Prüfung. Automatisierung liefert die Pipeline-Kontrollen. Analytik zeigt Change-Fehlerrate und Durchlaufzeit.

## Bewährte Praktiken

1. **Klassifizieren Sie Changes nach Art und Risiko.** Definieren Sie Standard-, Normal- und Notfall-Changes mit Beispielen für jede. Überprüfen Sie die Klassifikation regelmäßig und stufen Sie Changes als „Standard“ ein, wenn Belege es stützen.
2. **Genehmigen Sie Standard-Changes vorab.** Vereinbaren Sie für wiederholte, risikoarme Changes das Verfahren einmal mit dem Risikoverantwortlichen und lassen Sie Teams sie ohne individuelle Genehmigung durchführen. Überprüfen Sie ihre Erfolgsquote.
3. **Legen Sie die Befugnis nah an die Arbeit.** Lassen Sie die Prüfung durch Kolleginnen und Kollegen risikoarme Changes genehmigen. Eskalieren Sie riskantere Changes an Menschen, die den Service und seine Abhängigkeiten verstehen.
4. **Nutzen Sie das Board für die Changes, die es brauchen.** Behalten Sie eine beratende Change-Funktion für riskante oder bereichsübergreifende Changes. Bereiten Sie das Material im Voraus vor und entscheiden Sie schnell.
5. **Bauen Sie Kontrollen in die Pipeline ein.** Verlangen Sie Tests, Scans und eine zweite prüfende Person im Tooling und zeichnen Sie die Belege automatisch auf. Zeigen Sie Auditoren die Pipeline, nicht eine Tabelle.
6. **Machen Sie Changes klein.** Zerlegen Sie große Changes in kleinere Schritte, die getrennt ausgeliefert und geprüft werden können. Kleinere Changes tragen weniger Risiko und sind leichter umzukehren.
7. **Planen Sie den Weg zurück.** Verlangen Sie für jeden Normal-Change einen Plan für Rollback oder Roll-forward und proben Sie ihn bei wichtigen.
8. **Führen Sie einen sichtbaren Zeitplan.** Zeigen Sie geplante Changes und Freeze-Zeiträume dort, wo Teams sie sehen, und heben Sie Konflikte mit großen Ereignissen hervor. Zeigen Sie bei häufigen kleinen Changes nur, was Koordination braucht.
9. **Definieren und überwachen Sie Notfälle.** Schreiben Sie die Kriterien und den Weg auf. Überprüfen Sie jeden Notfall-Change im Nachhinein und fragen Sie, warum er nötig war und ob der normale Weg verbessert werden könnte.
10. **Lernen Sie aus fehlgeschlagenen Changes.** Betrachten Sie Changes, die Incidents verursacht haben, und passen Sie Risikoregeln, Tests oder die Checkliste an. Verfolgen Sie die Change-Fehlerrate und betrachten Sie ihre Ursachen.

## Fragen für die Diskussion im Team

**Welche unserer Genehmigungen haben nie einen Change abgelehnt oder verändert, und was kosten sie an Zeit?**
Das prüft, ob Kontrollen Wert schaffen. Bitten Sie um Daten der letzten sechs Monate. Vielleicht finden Sie Genehmigungsschritte ohne erfasste Wirkung. Fragen Sie anschließend, welches Risiko jeder adressiert und ob eine andere Kontrolle es adressieren könnte.

**Welche Changes machen wir am häufigsten, und welche könnten als Standard-Changes vorab genehmigt werden?**
Listen Sie die zehn häufigsten nach Menge auf. Rechnen Sie damit, dass viele risikoarm und repetitiv sind. Beziehen Sie den Risikoverantwortlichen ein. Wählen Sie anschließend zwei für eine Erprobung und vereinbaren Sie Erfolgskriterien.

**Wie entscheiden wir, welche Changes eine menschliche Prüfung brauchen, und wer führt sie durch?**
Kriterien sind oft implizit. Fragen Sie, was einen Change in unserem Kontext „riskant“ macht. Entwerfen Sie anschließend eine kurze Checkliste und probieren Sie sie an jüngsten Changes aus.

**Was würde unser Auditor als Beleg akzeptieren, dass ein Change getestet, geprüft und genehmigt wurde?**
Fragen Sie den Auditor direkt, statt zu raten. Rechnen Sie damit, dass Aufzeichnungen aus der Pipeline akzeptabel sein können, wenn sie zeigen, wer, was und wann. Vereinbaren Sie anschließend eine Stichprobe von Pipeline-Aufzeichnungen und lassen Sie sie vom Auditor prüfen.

**Wann ging ein Change zuletzt schief, und was in unserem Prozess hat es zugelassen?**
Das verknüpft die Praktik mit realen Fehlern. Suchen Sie fehlende Tests, fehlenden Rollback oder schlechte Informationen. Vermeiden Sie, der Person die Schuld zu geben. Vereinbaren Sie anschließend eine Kontrolle, die wir ergänzen oder verbessern.

**Wo könnte KI helfen, Change-Risiko zu bewerten, und was wollten wir von Hand prüfen?**
KI kann eine Change-Beschreibung und ähnliche frühere Fehler lesen, um Risikofaktoren vorzuschlagen. Sie kann auch etwas übersehen oder erfinden. Fragen Sie, wer das Werkzeug verantwortet und wie seine Vorschläge verifiziert werden. Vergleichen Sie anschließend KI-Risikobewertungen mit den Ergebnissen früherer Changes.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer regionalen Gesundheitsbehörde betreibt ein wöchentliches Change Advisory Board mit etwa 20 Teilnehmenden, das jeden Change prüft. Engineers sagen, sie warteten bis zu acht Tage auf Genehmigung; das Board sagt, es fange Probleme ab. Das Patientenaktensystem der Behörde hatte im letzten Jahr zwei Incidents, verursacht durch ungeprüfte Konfigurationsänderungen, die als „Notfälle“ vorgenommen wurden, um das Board zu umgehen.

Der Change-Manager analysiert sechs Monate an Aufzeichnungen: 640 Changes wurden geprüft, 590 wurden wie eingereicht genehmigt, 38 wegen fehlender Informationen zurückgegeben und 12 aus inhaltlichen Gründen verändert oder abgelehnt. Von den 590 verursachten 41 Incidents, fast alle unter Changes, die zugleich dringend vorgenommen wurden. Der Manager schlägt drei Wege vor. Standard-Changes, etwa einen Nutzer zu einer Gruppe hinzuzufügen oder ein Zertifikat zu erneuern, folgen dokumentierten Verfahren und brauchen keine Genehmigung. Normale Changes an Systemen, die als risikoärmer eingestuft sind, werden von einer Kollegin aus einem anderen Team geprüft und von der Pipeline kontrolliert. Riskantere Changes am Patientenaktensystem gehen an ein kleineres Board, das zweimal pro Woche tagt und nur diese sieht.

Die Beauftragte für klinische Sicherheit bittet um Belege, dass die Prüfung durch Kolleginnen und Kollegen stattfindet. Der Manager zeigt einen Pipeline-Bericht, der jeden Change mit dem Namen der prüfenden Person, den durchgeführten Tests und dem Ergebnis auflistet. Die Beauftragte stimmt einer sechsmonatigen Erprobung mit einer monatlichen Überprüfung fehlgeschlagener Changes zu.

Was sich ändert: Die mittlere Genehmigungszeit sinkt für die meisten Changes von fünf Tagen auf unter einen, und die Nutzung von „Notfall“ geht stark zurück. Was schwierig bleibt: Manche Altsysteme können keine automatisierten Tests ausführen, sodass ihre Changes weiter manuelle Prüfungen brauchen; die Prüfung durch Kolleginnen und Kollegen hängt davon ab, dass Engineers Zeit haben, und Teams unter Druck prüfen oberflächlich; und die monatliche Überprüfung findet zwei Changes, bei denen die prüfende Person kein einschlägiges Wissen hatte. Der Manager ergänzt eine Regel, dass die prüfende Person jemand sein muss, der am System gearbeitet hat.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Machen Sie Changes klein, ergänzen Sie Tests und planen Sie Rollback. Arbeiten Sie mit der Change-Praktik daran, Standard-Changes und Pipeline-Belege zu definieren. Behandeln Sie die Prüfung durch Kolleginnen und Kollegen als echte Prüfung, nicht als Unterschrift.

### Service- und Betriebsteams

Helfen Sie, das betriebliche Risiko zu bewerten, führen Sie den Zeitplan und teilen Sie, was Sie über Abhängigkeiten wissen. Betrachten Sie fehlgeschlagene Changes gemeinsam mit den Teams und halten Sie Notfall-Changes selten und geprüft.

### Führung und Governance

Delegieren Sie Befugnis nach Risiko, verlangen Sie Belege aus der Pipeline und fordern Sie für Routine-Changes keine Besprechung. Schützen Sie Zeit für die Prüfung durch Kolleginnen und Kollegen. Überprüfen Sie die Zahlen der Notfall-Changes.

### Kunden und Nutzer

Sie sollten von Changes hören, die Sie betreffen, mit ausreichender Vorankündigung und einer klaren Beschreibung. Sagen Sie dem Anbieter, in welchen Zeiträumen Veränderung für Sie riskant ist. Melden Sie Probleme nach einem Change zügig.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kleine, häufige Changes mit informierten Beteiligten sind sicherer als große, seltene. Beziehen Sie Betrieb und Risikoverantwortliche in die Gestaltung der Change-Wege ein und verbessern Sie sie mit Feedback. Vorsicht: Lassen Sie Kontrollen nicht im Namen der Agilität fallen; ersetzen Sie sie durch bessere.

### KI

KI kann helfen, Change-Beschreibungen zu entwerfen, aus ähnlichen früheren Changes Risikofaktoren vorzuschlagen und Beschreibungen auf fehlende Informationen zu prüfen, wobei eine Person für die Entscheidung verantwortlich ist. Vorsicht: Ein KI-Risikowert kann wie eine Autorität behandelt werden; zeigen Sie ihn als Vorschlag und verfolgen Sie, wie oft er richtig lag. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Automatisieren Sie Pipeline-Prüfungen, Beleg-Erfassung, Erkennung von Zeitplan-Konflikten und die Ausführung von Standard-Changes, mit Protokollen und Rollback. Vorsicht: Die automatische Genehmigung von Changes ist nur so gut wie ihre Regeln; überprüfen Sie die Regeln und ziehen Sie Stichproben genehmigter Changes. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Verfolgen Sie Change-Volumen nach Art, Durchlaufzeit, Change-Fehlerrate und Notfall-Changes und betrachten Sie die Ursachen von Fehlern. Vorsicht: Eine niedrige Fehlerrate kann daher kommen, dass Fehler nicht erfasst werden, und Genehmigungszahlen lassen sich durch Aufteilen oder Bündeln von Changes manipulieren; gleichen Sie mit Incident-Daten ab. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Jeden Change gleich prüfen.** Routine-Changes warten. Klassifizieren Sie nach Risiko und genehmigen Sie Standard-Changes vorab.
- **Ein Board ohne Belege.** Mitglieder genehmigen, was sie nicht beurteilen können. Bereiten Sie Informationen vor und schicken Sie nur Changes, die Urteilsvermögen brauchen.
- **Notfall als Umgehung.** Dringlichkeit wird erklärt, um die Prüfung zu vermeiden. Definieren Sie sie und überprüfen Sie jede Nutzung.
- **Oberflächliche Prüfung durch Kolleginnen und Kollegen.** Eine Unterschrift ohne Lesen. Verlangen Sie eine qualifizierte prüfende Person und prüfen Sie die Reviews stichprobenartig.
- **Kontrollen ohne Ersatz fallen lassen.** Fehler steigen, und Auditoren widersprechen. Erfüllen Sie den Zweck jeder Kontrolle in der Pipeline.
- **Kein Rollback-Plan.** Ein fehlgeschlagener Change verlängert einen Incident. Verlangen und proben Sie die Wiederherstellung.
- **Genehmigte Changes als Erfolg zählen.** Das Volumen steigt, die Qualität nicht. Verfolgen Sie Fehler und verursachte Incidents.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Change-Arten und Befugnis | Ein Weg für alles | Notfallweg existiert | Standard, Normal und Notfall definiert, Befugnis nach Risiko | Wege anhand von Daten überprüft | Wege passen sich über Services hinweg automatisch dem Risiko an |
| Belege | Formulare und Besprechungen | Einige Aufzeichnungen aus Werkzeugen | Pipeline-Aufzeichnungen für die meisten Changes | Belege stichprobenartig geprüft und auditiert | Belege laufend über Werkzeuge und Lieferanten |
| Risikobewertung | Intuition | Informelle Checkliste | Konsistente Checkliste und Kriterien | Kriterien anhand von Fehlerdaten abgestimmt | Risiko mit Daten und Automatisierung bewertet, mit menschlicher Prüfung |
| Lernen | Schuldzuweisung | Gelegentliche Nachbetrachtungen | Fehlgeschlagene Changes mit Maßnahmen geprüft | Fehlerursachen verfolgt und verringert | Lernen über Teams hinweg geteilt |

## Checkliste

- [ ] Wir haben Standard-, Normal- und Notfall-Changes mit Beispielen.
- [ ] Standard-Changes sind mit einem dokumentierten Verfahren vorab genehmigt.
- [ ] Die Befugnis für jede Art entspricht dem Risiko.
- [ ] Die Prüfung durch Kolleginnen und Kollegen erfolgt durch jemanden mit einschlägigem Wissen.
- [ ] Pipeline-Kontrollen zeichnen Tests, prüfende Personen und Ergebnisse auf.
- [ ] Jeder Normal-Change hat einen Plan für Rollback oder Roll-forward.
- [ ] Notfall-Changes werden im Nachhinein überprüft.
- [ ] Wir verfolgen die Change-Fehlerrate und lernen aus fehlgeschlagenen Changes.

## KI-Prompts

**Prüfen Sie eine Change-Beschreibung auf Lücken.**

```text
Here is a draft change description: [paste]. Our required fields are: [list].
List which required fields are missing or unclear, and list five questions a reviewer would ask. Do not rewrite the change or rate its risk.
List what you are unsure of.
```

**Suchen Sie Muster in fehlgeschlagenen Changes.**

```text
Below is a list of changes that caused incidents, with dates, type, size, whether tested, and whether rolled back: [paste list, names removed].
List common features across them and questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

**Schlagen Sie Kandidaten für Standard-Changes vor.**

```text
Here are our most frequent changes in the last six months, with counts and failure counts: [paste data].
List which look like candidates for pre-authorization, with the data you used and the questions we should ask the risk owner. Do not claim any is safe.
List what you are unsure of.
```

## KI-Skills

- [change-request](../../../../skills/change-request/SKILL.md): nutzen Sie ihn, um einen klaren, schlanken Change-Datensatz zu gestalten.
- [enterprise-change-management](../../../../skills/enterprise-change-management/SKILL.md): nutzen Sie ihn für die organisatorische Seite des Wandels.
- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um Risiken aus Changes zu erfassen und zu überprüfen.
- [compliance-testing](../../../../skills/compliance-testing/SKILL.md): nutzen Sie ihn, um Belege an Kontrollanforderungen zu prüfen.
- [security-testing](../../../../skills/security-testing/SKILL.md): nutzen Sie ihn, um Sicherheitsprüfungen für die Pipeline zu planen.

## Wichtige Quellen

- Nicole Forsgren, Jez Humble und Gene Kim, *Accelerate* (2018): Forschung zu Delivery-Praktiken, einschließlich Change-Genehmigung.
- DORA (dora.dev): laufende Forschung und Berichte zur Leistung der Software-Lieferung.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Change Enablement durch den Eigentümer.
- Wikipedia, „Change management“ und „Change control“: Überblicke über die Ideen.

## Literaturverzeichnis

1. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
2. Change control — Wikipedia — https://en.wikipedia.org/wiki/Change_control
3. Change-advisory board — Wikipedia — https://en.wikipedia.org/wiki/Change-advisory_board
4. Risk assessment — Wikipedia — https://en.wikipedia.org/wiki/Risk_assessment
5. Peer review — Wikipedia — https://en.wikipedia.org/wiki/Peer_review
6. Code review — Wikipedia — https://en.wikipedia.org/wiki/Code_review
7. Separation of duties — Wikipedia — https://en.wikipedia.org/wiki/Separation_of_duties
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Static program analysis — Wikipedia — https://en.wikipedia.org/wiki/Static_program_analysis
10. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
11. DORA research — DevOps Research and Assessment — https://dora.dev/research/
