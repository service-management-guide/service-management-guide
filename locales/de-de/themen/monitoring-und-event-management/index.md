# Monitoring und Event-Management

**Monitoring und Event-Management beobachten Services, damit die richtige Person früh von echten Problemen erfährt und niemand durch Rauschen geweckt wird. Sie funktionieren, wenn Alarme beschreiben, was Nutzer spüren, jeder Alarm eine Handlung hat und das Volumen der Ereignisse niedrig genug gehalten wird, dass Menschen ihnen vertrauen.**

## Warum das wichtig ist

Das erste Anzeichen von Ärger sollte von Ihren eigenen Systemen kommen, nicht von einem Nutzer. Das ist das Versprechen des Monitorings: Der Zustand eines Services wird laufend beobachtet, und eine Abweichung wird bemerkt, bevor die meisten Nutzer sie bemerken. In der Praxis stellen viele Teams fest, dass Nutzer Probleme weiter zuerst melden, während das Team unter Alarmen begraben ist, auf die niemand reagiert.

Der Unterschied zwischen beiden Erfahrungen ist Design. Ein Monitoring-Aufbau, der bei jeder überschrittenen Schwelle einen Alarm auslöst, bringt seinen Empfängern bei, Alarme zu ignorieren. Wikipedia beschreibt das als Alarmmüdigkeit (Alarm fatigue), ein Phänomen, das zuerst in Krankenhäusern untersucht wurde, wo Personal, das zu vielen Alarmen ausgesetzt ist, abstumpft und die wichtigen übersieht. Ein Aufbau, der misst, was Nutzer erleben, nur alarmiert, wenn gehandelt werden muss, und der reagierenden Person Kontext gibt, macht Monitoring zu einem Frühwarnsystem.

Monitoring hat auch eine größere Rolle, als Ausfälle zu fangen. Es liefert die Daten für die Kapazitätsplanung, für Performance-Arbeit, für die Prüfung, dass ein Release gesund ist, und für die Entscheidung, was zu verbessern ist. Dieses Thema beschreibt das Vokabular und die Praktiken, die nützliches Monitoring vom Rauschen unterscheiden. Es verbindet sich eng mit Incident-Management (Thema 3.2 — Incident-Management), Verfügbarkeit und Kapazität (Thema 3.11 — Verfügbarkeit, Kapazität und Performance) und Observability (Thema 7.4 — Observability und Telemetrie).

## Kernkonzepte

**Monitoring.** Daten über den Zustand von Services und ihren Komponenten sammeln, verarbeiten und nutzen. Wikipedia beschreibt System monitoring und Network monitoring als die Praktiken, Systeme auf Fehler und Performance zu beobachten. Monitoring beantwortet bekannte Fragen: Läuft es, ist es schnell, ist es voll?

**Ereignis (Event).** In ITIL 4 jede Zustandsänderung, die für das Management eines Services oder eines anderen Konfigurationselements Bedeutung hat. Ereignisse können informativ sein, eine Warnung oder eine Ausnahme. Viele Ereignisse sind normal und brauchen keine Handlung; die Praktik besteht darin zu entscheiden, welche doch.

**Alarm (Alert).** Eine Benachrichtigung, dass ein Ereignis Aufmerksamkeit braucht. Nicht jedes Ereignis sollte zum Alarm werden. Ein guter Alarm sagt einer Person, dass jetzt etwas Handlung braucht, was falsch ist und wo sie nachsehen soll.

**Alarmmüdigkeit.** Der Verlust an Empfindlichkeit gegenüber Alarmen, wenn es zu viele gibt oder zu viele falsch sind. Siehe den Wikipedia-Artikel zu Alarm fatigue. Anzeichen sind Alarme, die ungelesen quittiert werden, stummgeschaltete Kanäle und spät entdeckte Incidents. Es ist ein Designproblem, kein Disziplinproblem.

**Metriken, Logs und Traces.** Drei gängige Arten von Telemetrie. Metriken sind numerische Messungen über die Zeit, etwa Anfragerate oder Speichernutzung. Logs sind Aufzeichnungen von Ereignissen mit Zeitstempel. Traces verfolgen eine Anfrage durch die Teile eines verteilten Systems. Die Wikipedia-Artikel zu Telemetry und Log management beschreiben allgemeine Ideen. Zusammen stützen sie sowohl Monitoring als auch die tiefere Untersuchung, die unter Observability behandelt wird.

**Observability.** Die Fähigkeit, den inneren Zustand eines Systems aus seinen Ausgaben zu verstehen. Wikipedia beschreibt Observability in der Software als Erweiterung des Monitorings auf Fragen, die Sie nicht vorhergesehen haben. Beide überschneiden sich: Monitoring wacht über bekannte Fehler; Observability hilft, unbekannte zu untersuchen. Siehe Thema 7.4 — Observability und Telemetrie.

**Symptome und Ursachen.** Ein Symptom ist das, was Nutzer oder der Service erleben, etwa langsame Antworten; eine Ursache ist das, was dahintersteht, etwa ein voller Speicher. Alarme auf Symptome sagen, dass Nutzer betroffen sind. Alarme auf jede mögliche Ursache erzeugen Rauschen. Viele Teams alarmieren auf Symptome und nutzen Metriken auf Ursachenebene zur Untersuchung.

**Schwellen und Basislinien.** Eine feste Schwelle, etwa „CPU über 90 Prozent“, ist einfach und oft falsch, weil normale Werte mit Zeit und Last schwanken. Basislinien lernen, was zu einer Tageszeit normal ist, und alarmieren bei Abweichung. Der Wikipedia-Artikel zu Anomaly detection beschreibt die Idee und ihre Vorsichtspunkte.

**Ereigniskorrelation.** Zusammengehörige Ereignisse kombinieren, um das zugrunde liegende Problem zu finden, sodass aus hundert Alarmen einer ausfallenden Komponente einer wird. Wikipedia beschreibt Event correlation. Sie kann regelbasiert sein oder maschinelles Lernen nutzen. Siehe Thema 5.2 — AIOps.

**Synthetisches Monitoring und Real-User-Monitoring.** Synthetisches Monitoring führt skriptgesteuerte Tests aus, die Nutzer nachahmen, und prüft regelmäßig, ob eine Nutzerreise funktioniert. Real-User-Monitoring zeichnet das Erlebnis tatsächlicher Nutzer auf. Wikipedia beschreibt beides. Synthetische Prüfungen erkennen Ausfälle in ruhigen Zeiten; Daten realer Nutzer zeigen, was Menschen tatsächlich erleben.

**Application Performance Management.** Werkzeuge und Praktiken zur Überwachung von Performance und Verfügbarkeit von Anwendungen, einschließlich Antwortzeiten und Fehlerraten. Wikipedia beschreibt das Feld.

**Handlungsrelevanz.** Jeder Alarm sollte eine definierte Handlung haben, auch wenn die Handlung „Runbook prüfen“ lautet. Kann eine Person nicht sagen, was zu tun ist, sollte der Alarm entfernt oder in einen Bericht verwandelt werden. Siehe Thema 3.9 — Wissensmanagement.

**Routing und Eskalation.** Alarme gehen an die Menschen, die handeln können, anhand von Bereitschaftsplänen, mit Eskalation, falls keine Quittierung erfolgt. Siehe Thema 3.2 — Incident-Management.

**Event-Management und ITIL.** ITIL 4 beschreibt „Monitoring und Event-Management“ als Praktik, die Services und Service-Komponenten systematisch beobachtet und ausgewählte Zustandsänderungen erfasst und meldet. Der Schwerpunkt liegt darauf zu entscheiden, welche Ereignisse zählen und was bei jedem zu tun ist.

**Wie die Blickwinkel passen.** Monitoring ist die Feedbackseite von Continuous Delivery: Es zeigt, ob ein Change gesund ist. Agile Praxis behandelt Alarmqualität als Backlog-Punkt. KI kann Rauschen verringern, Ereignisse korrelieren und zusammenfassen, unter Prüfung. Automatisierung kann auf gut verstandene Ereignisse reagieren. Analytik zeigt Trends und die Kosten des Rauschens.

## Bewährte Praktiken

1. **Alarmieren Sie auf das, was Nutzer spüren.** Beginnen Sie mit Symptomen wie fehlgeschlagenen Anfragen, langsamen Seiten und fehlgeschlagenen Jobs. Nutzen Sie Ursachenmetriken zur Diagnose, nicht zum Alarmieren, es sei denn, eine Ursache ist eine verlässliche Frühwarnung.
2. **Machen Sie jeden Alarm handlungsrelevant.** Schreiben Sie für jeden Alarm, was er bedeutet, wer handelt und was zuerst zu tun ist. Verknüpfen Sie ihn mit einem Runbook. Entfernen Sie Alarme ohne Handlung.
3. **Halten Sie das Volumen niedrig.** Zählen Sie die Alarme, die jede Bereitschaftsperson pro Schicht erhält, und setzen Sie ein Limit. Überprüfen Sie die lautesten Alarme jede Woche und beheben oder löschen Sie sie.
4. **Alarmieren Sie bei Dringlichkeit, Ticket für den Rest.** Nutzen Sie einen Anruf oder Alarm nur, wenn jemand jetzt handeln muss. Leiten Sie andere Signale in eine Warteschlange oder einen Bericht. Definieren Sie den Unterschied klar.
5. **Nutzen Sie Basislinien sorgfältig.** Wo sich das Normale mit Zeit und Last ändert, nutzen Sie zeitabhängige Schwellen oder Anomalieerkennung und überprüfen Sie sie. Vertrauen Sie keinem Modell, das Sie den Reagierenden nicht erklären können.
6. **Gruppieren Sie zusammengehörige Alarme.** Korrelieren Sie Ereignisse derselben Ursache und unterdrücken Sie nachgelagerte Alarme, wenn eine Abhängigkeit ausfällt. Senden Sie eine Nachricht mit Kontext.
7. **Prüfen Sie aus Sicht des Nutzers.** Ergänzen Sie synthetische Prüfungen für Schlüsselreisen und nutzen Sie Daten realer Nutzer für das Erlebnis. Ein Server kann „oben“ sein, während Nutzer sich nicht anmelden können.
8. **Überwachen Sie das Monitoring.** Testen Sie, dass Alarme Menschen erreichen, dass das Alarmierungssystem funktioniert und dass ein stiller Ausfall des Monitorings selbst erkannt wird. Führen Sie gelegentlich Ende-zu-Ende-Tests durch.
9. **Betrachten Sie nach Incidents.** Fragen Sie, welcher Alarm ausgelöst hat, welcher hätte auslösen sollen und welche Rauschen waren. Passen Sie in der Nachbetrachtung an. Siehe Thema 3.3 — Problem-Management.
10. **Teilen Sie Dashboards und Kontext.** Geben Sie Entwickelnden, Betrieb und Support Zugang zu denselben Daten und zeigen Sie die Wirkung jüngster Changes. Vermeiden Sie Dashboards, die niemand nutzt.

## Fragen für die Diskussion im Team

**Welcher war der letzte Incident, von dem uns Nutzer vor unserem Monitoring erzählten, und warum?**
Das findet blinde Flecken. Schauen Sie darauf, was Nutzer sahen. Rechnen Sie mit Lücken an den Rändern von Nutzerreisen. Wählen Sie anschließend eine nutzersichtbare Prüfung, die wir ergänzen.

**Wie viele Alarme erhielt unser Bereitschaftspersonal im letzten Monat, und wie viele erforderten Handlung?**
Zählen Sie gemeinsam. Wenn niemand es weiß, ist das ein Befund. Rechnen Sie mit einem niedrigen Anteil handlungsrelevanter Alarme. Wählen Sie anschließend die fünf lautesten Alarme und entscheiden Sie das Schicksal jedes einzelnen.

**Welche Alarme ignorieren wir, und was geschähe, wenn wir sie löschten?**
Das Ignorieren von Alarmen ist ein Zeichen von Müdigkeit. Fragen Sie nach dem letzten Mal, als jeder zählte. Löschen oder stufen Sie anschließend einen herab, mit einem Überprüfungsdatum.

**Wer wird für was geweckt, und sind alle einig, dass es sich lohnt, ihn zu wecken?**
Vereinbaren Sie die Kriterien für das Alarmieren. Rechnen Sie mit Uneinigkeit, was nützlich ist. Schreiben Sie anschließend eine Regel in einem Absatz und probieren Sie sie einen Monat lang aus.

**Woran würden wir erkennen, dass unser Monitoring selbst nicht mehr funktioniert?**
Das prüft das Meta-Monitoring. Rechnen Sie mit Schweigen oder einer vagen Antwort. Ergänzen Sie anschließend eine Heartbeat-Prüfung oder einen täglichen Testalarm und vereinbaren Sie, wer ihn beobachtet.

**Was würden wir von KI mit unseren Alarmen wollen, und was muss eine menschliche Entscheidung bleiben?**
KI kann Alarme gruppieren, Ursachen vorschlagen und Kontext zusammenfassen. Sie kann auch einen echten Alarm unterdrücken. Fragen Sie, welche Handlungen Genehmigung brauchen. Wählen Sie anschließend eine auf Gruppierung und Zusammenfassung begrenzte Erprobung, mit Überprüfung dessen, was sie verborgen hat.

## In der Praxis: ein Beispiel aus dem Service-Management

Das sechsköpfige Team für Betriebstechnik eines regionalen Flughafens überwacht Gepäckabfertigung, Check-in-Systeme und Fluginformationsanzeigen. Es erhält etwa 400 Alarme am Tag. Das Bereitschaftspersonal sagt, es überfliege die Benachrichtigungen und schalte sie meist stumm. Im letzten Monat blieb ein ausgefallener Netzwerk-Switch in einem Terminal 40 Minuten unbemerkt, bis Passagiere sich beschwerten, die Anzeigen seien leer.

Der Teamleiter nimmt sich eine Woche, um die Daten zu betrachten. Von 400 täglichen Alarmen stammen etwa 350 von 12 Regeln, etwa Speicherwarnungen auf Geräten, die sich selbst bereinigen, und Schnittstellen-Flattern an einem ungenutzten Port. Nur etwa 15 pro Tag erfordern menschliches Handeln. Leiter und Team vereinbaren drei Änderungen. Sie löschen oder stufen die 12 lauten Regeln auf einen täglichen Bericht herab. Sie ergänzen zwei synthetische Prüfungen, die von jedem Terminal aus jede Minute die Anzeigeseite und den Check-in-Bildschirm laden und alarmieren, wenn eine zweimal hintereinander fehlschlägt. Und sie richten Korrelation ein, sodass ein ausgefallener Switch einen Alarm erzeugt, der die betroffenen Anzeigen nennt, statt hundert.

Im folgenden Monat sinken die Bereitschaftsalarme auf etwa 20 am Tag, und der nächste Switch-Ausfall wird binnen drei Minuten erkannt, mit einem einzigen Alarm, der die betroffenen Terminals auflistet. Im wöchentlichen Review findet das Team einen Alarm, der durch Korrelation unterdrückt wurde, obwohl er es nicht sollte, und korrigiert die Regel.

Was sich ändert: Menschen vertrauen den Alarmen und reagieren. Was schwierig bleibt: Die Anlagen des Gepäckabfertigungs-Lieferanten senden eigene Alarme in einem Format, das das Team nicht filtern kann, sodass etwas Rauschen bleibt; einige Nachtschicht-Mitarbeitende fürchten, der Tagesbericht werde nicht gelesen; und niemand hat bisher getestet, was geschieht, wenn das Monitoring-System selbst ausfällt. Der Leiter plant eine Übung ein und ergänzt einen täglichen Testalarm.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Bauen Sie die Signale ein: aussagekräftige Metriken, Logs und Traces sowie Gesundheitsprüfungen, die Nutzerreisen spiegeln. Schreiben Sie das Runbook zusammen mit dem Alarm. Beobachten Sie die Wirkung jedes Releases.

### Service- und Betriebsteams

Verantworten Sie die Alarmqualität. Überprüfen Sie die lautesten Alarme wöchentlich, schützen Sie Menschen vor Überlastung und prüfen Sie, dass jeder Alarm eine Handlung hat. Testen Sie die Wege, die Alarme nehmen.

### Führung und Governance

Fragen Sie nach der Zahl handlungsrelevanter Alarme, nicht nach der Zahl der Monitore. Finanzieren Sie Zeit, laute Alarme zu beheben. Behandeln Sie wiederholte Alarme außerhalb der Arbeitszeit als Kosten für Personal und Qualität.

### Kunden und Nutzer

Sie sollten vom Anbieter von Problemen hören, bevor Sie sie bemerken, und erfahren, was betroffen ist. Melden Sie, was Sie sehen, mit Zeiten, und sagen Sie dem Anbieter, wo das Monitoring es verfehlt hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie Alarme und Dashboards als Teil des Produkts: Verbessern Sie sie nach jedem Incident und Release in kleinen Schritten. Überprüfen Sie sie mit den Menschen, die reagieren. Vorsicht: Für jede neue Funktion Monitore zu ergänzen, ohne alte zu entfernen, erhöht das Rauschen.

### KI

KI kann normale Muster lernen, zusammengehörige Alarme gruppieren, wahrscheinliche Ursachen vorschlagen und einen Alarmsturm zusammenfassen, mit einer verantwortlichen Person und menschlichen Entscheidungen. Testen Sie sie an früheren Incidents. Vorsicht: Ein Modell, das Alarme unterdrückt, kann einen seltenen, aber echten Ausfall verbergen; messen Sie, was es unterdrückt hat und was übersehen wurde. Siehe Thema 5.2 — AIOps.

### Automatisierung

Automatisieren Sie Reaktionen auf gut verstandene Ereignisse, etwa den Neustart eines ausfallenden Prozesses, sowie Routing und Anreicherung von Alarmen, mit Grenzen und Protokollen. Vorsicht: Automatische Behebung, die endlos wiederholt, kann ein ausfallendes System verbergen oder verschlimmern; ergänzen Sie Ratenbegrenzungen und Eskalation. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Verfolgen Sie Alarmvolumen, den Anteil handlungsrelevanter, Zeit bis zur Quittierung und Incidents, die vom Monitoring erkannt wurden, gegenüber denen, die Nutzer meldeten. Vorsicht: Alarmzahlen allein lassen sich manipulieren, indem man Schwellen anhebt, bis nichts mehr auslöst; gleichen Sie mit Incidents ab. Siehe Thema 7.4 — Observability und Telemetrie und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Alles alarmieren.** Menschen schalten den Kanal stumm. Alarmieren Sie auf Symptome und entfernen Sie den Rest.
- **Alarme ohne Handlung.** Reagierende wissen nicht, was zu tun ist. Verknüpfen Sie mit einem Runbook oder löschen Sie den Alarm.
- **Nur feste Schwellen.** Fehlalarme zu geschäftigen Zeiten. Nutzen Sie zeitabhängige oder Basislinien-Methoden sorgfältig.
- **Nutzer erfahren es zuerst.** Lücken bei nutzersichtbaren Prüfungen. Ergänzen Sie synthetisches und Real-User-Monitoring.
- **Kein Meta-Monitoring.** Das Monitoring fällt still aus. Ergänzen Sie Heartbeat und Übungen.
- **Dashboard-Wildwuchs.** Niemand schaut hin. Behalten Sie wenige, die Entscheidungen stützen.
- **Einem undurchsichtigen Modell vertrauen.** Reagierende können nicht erklären, was es getan hat. Halten Sie Regeln und Logik überprüfbar.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Alarmdesign | Jede Schwelle alarmiert | Einige Schlüsselalarme | Symptombasierte, handlungsrelevante Alarme mit Runbooks | Alarmqualität gemessen und wöchentlich überprüft | Alarme über Services hinweg angepasst und korreliert |
| Abdeckung | Nur Server | Einige Anwendungen | Nutzerreisen synthetisch und mit Daten realer Nutzer geprüft | Abdeckung nach Incidents überprüft | Abdeckung über Bestand und Lieferanten konsistent |
| Rauschen | Überwältigend | Bewusst | Volumen begrenzt und überprüft | Rauschen gemessen und sinkend | Rauschen durch Korrelation und Automatisierung mit Aufsicht gesteuert |
| Reaktion | Manuell | Alarm an ein Team | Mit Eskalation geroutet | Reaktionszeit verfolgt | Sichere Handlungen automatisiert, mit menschlicher Kontrolle |

## Checkliste

- [ ] Alarme beruhen auf Symptomen, die Nutzer spüren.
- [ ] Jeder Alarm hat eine definierte Handlung und ein verknüpftes Runbook.
- [ ] Das Alarmvolumen je Schicht wird gemessen und begrenzt.
- [ ] Wir überprüfen die lautesten Alarme jede Woche.
- [ ] Schlüsselreisen der Nutzer haben synthetische Prüfungen.
- [ ] Zusammengehörige Alarme werden korreliert.
- [ ] Wir testen, dass Alarme Menschen erreichen und dass ein Ausfall des Monitorings erkannt wird.
- [ ] KI oder Automatisierung, die auf Alarme wirkt, hat eine verantwortliche Person, Grenzen und Prüfung.

## KI-Prompts

**Ordnen Sie laute Alarme nach Rang.**

```text
Here is a list of alert rules with the number of times each fired last month and how many led to action: [paste].
Rank them by number of non-actionable firings, list the top ten, and give one question per rule to ask about whether to remove, change, or keep it. Do not recommend deleting any.
List what you are unsure of.
```

**Entwerfen Sie den Text eines Alarms.**

```text
The situation to alert on: [describe]. Who acts: [role]. The first checks they should make: [list].
Draft an alert title (under 80 characters) and a body (under 80 words) that says what is wrong, what users may be experiencing, and the first step, with a link placeholder for the runbook. Do not speculate about causes.
List what you are unsure of.
```

**Testen Sie eine Korrelationsregel.**

```text
Here is a correlation rule: [describe]. Here is a list of recent events with timestamps and sources: [paste].
List which events the rule would group, which it would suppress, and any case where a real separate problem could be hidden. Do not propose a new rule.
List what you are unsure of.
```

## KI-Skills

- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um die Handlung zu schreiben, die zu jedem Alarm gehört.
- [anomaly-analysis](../../../../skills/anomaly-analysis/SKILL.md): nutzen Sie ihn, um ungewöhnliche Muster in Metriken zu untersuchen.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): nutzen Sie ihn, um Frühwarnindikatoren zu wählen.
- [on-call-rotation](../../../../skills/on-call-rotation/SKILL.md): nutzen Sie ihn, um tragfähige Bereitschaftsregelungen zu gestalten.

## Wichtige Quellen

- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016), Kapitel zum Monitoring verteilter Systeme, frei unter sre.google.
- Rob Ewaschuk, „My Philosophy on Alerting“ (2013): ein bekannter kurzer Essay zum symptombasierten Alarmieren.
- Wikipedia, „Alarm fatigue“ und „Observability (software)“: Überblicke über Schlüsselideen.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Monitoring und Event-Management durch den Eigentümer.

## Literaturverzeichnis

1. Alarm fatigue — Wikipedia — https://en.wikipedia.org/wiki/Alarm_fatigue
2. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
3. Application performance management — Wikipedia — https://en.wikipedia.org/wiki/Application_performance_management
4. Event correlation — Wikipedia — https://en.wikipedia.org/wiki/Event_correlation
5. Log management — Wikipedia — https://en.wikipedia.org/wiki/Log_management
6. Synthetic monitoring — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_monitoring
7. Real user monitoring — Wikipedia — https://en.wikipedia.org/wiki/Real_user_monitoring
8. Network monitoring — Wikipedia — https://en.wikipedia.org/wiki/Network_monitoring
9. Anomaly detection — Wikipedia — https://en.wikipedia.org/wiki/Anomaly_detection
10. Telemetry — Wikipedia — https://en.wikipedia.org/wiki/Telemetry
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
