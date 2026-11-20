# Verfügbarkeit, Kapazität und Performance

**Das Management von Verfügbarkeit, Kapazität und Performance hält einen Service nutzbar, groß genug und schnell genug für die Nachfrage, der er gegenübersteht. Es funktioniert, wenn Ziele aus dem Bedarf der Nutzer stammen, Risiken durch Redundanz und Tests ausgeplant werden und Prognosen an der Wirklichkeit geprüft statt ihr blind geglaubt werden.**

## Warum das wichtig ist

Nutzer beurteilen einen Service vor allem anderen nach drei Dingen: Kann ich ihn nutzen, kommt er zurecht, wenn viele Menschen ihn nutzen, und ist er schnell? Fehler bei einem davon zeigen sich als verlorene Arbeit, abgebrochene Käufe und verärgerte Anrufe. Dennoch werden die drei leicht vernachlässigt, bis ein schlechter Tag kommt: ein Start, der den Verkehr verdoppelt, eine Frist, die alle in der letzten Stunde ins System schickt, der Ausfall einer einzelnen Komponente, von der niemand wusste, dass alles von ihr abhing.

Diese Praktiken bestehen, um solche schlechten Tage zu vermeiden, indem man im Voraus über sie nachdenkt. Sie fragen, wie viel Ausfall der Service tolerieren kann und was das kostet, wie viel Nachfrage er bewältigen muss und wie sie wachsen wird und wie schnell er antworten soll. Sie antworten mit Designentscheidungen wie Redundanz, mit Tests, die Grenzen finden, bevor Nutzer es tun, und mit Prognosen, die geprüft und aktualisiert werden.

ITIL 4 beschreibt drei verwandte Praktiken: Verfügbarkeitsmanagement, Kapazitäts- und Performance-Management und, eng verwandt, Service-Continuity-Management (Thema 3.12 — Service-Continuity-Management). Engineering-Teams begegnen ihnen als Zuverlässigkeitstechnik, Performance Engineering und Kapazitätsplanung, mit SLOs und Fehlerbudgets (Thema 2.6 — Site Reliability Engineering). Dieses Thema bringt die Ideen zusammen und erklärt, wie man sie ohne Übertreibung nutzt: Mehr Verfügbarkeit ist nicht immer besser, da jede zusätzliche Neun mehr kostet. Es verbindet sich mit Service-Level-Management (Thema 3.7 — Service-Level-Management) und Monitoring (Thema 3.10 — Monitoring und Event-Management).

## Kernkonzepte

**Verfügbarkeit.** Die Fähigkeit eines Services, seine vereinbarte Funktion zu erfüllen, wenn sie gebraucht wird. Wikipedia beschreibt Verfügbarkeit als den Anteil der Zeit, in der ein System funktioniert. Sie wird meist als Prozentsatz über einen Zeitraum ausgedrückt, etwa 99,9 Prozent in einem Monat, was etwa 43 Minuten Ausfallzeit erlaubt. Die Zahl ist nur aussagekräftig, wenn Sie definieren, was „funktionieren“ für Nutzer bedeutet.

**Zuverlässigkeit und Wartbarkeit.** Zuverlässigkeit ist, wie lange ein Service ohne Ausfall läuft; Wartbarkeit ist, wie schnell er wiederhergestellt werden kann. Verfügbarkeit hängt von beiden ab. Die Wikipedia-Artikel zu Reliability engineering und zur mittleren Zeit zwischen Ausfällen (Mean time between failures, MTBF) beschreiben die Maße. Bei vielen modernen Services ist schnelle Wiederherstellung eher erreichbar als seltener Ausfall.

**Redundanz und Single Points of Failure.** Redundanz heißt, Ersatzkomponenten zu haben, damit ein Ausfall den Service nicht stoppt. Ein Single Point of Failure ist eine Komponente, deren Ausfall alles stoppt. Die Wikipedia-Artikel zu Redundancy und Single point of failure beschreiben die Ideen. Single Points of Failure zu finden, einschließlich Menschen, Lieferanten und ablaufender Zertifikate, ist eine Kernaufgabe der Verfügbarkeit.

**Fehlertoleranz und kontrollierte Leistungsminderung.** Ein fehlertolerantes System arbeitet weiter, wenn Teile ausfallen; eines, das kontrolliert Leistung mindert (Graceful Degradation), verliert etwas Funktion, behält aber seinen Kern. Eine Shopping-Seite könnte etwa Empfehlungen abschalten, aber weiter Bestellungen verarbeiten. Entwerfen Sie für Letzteres, wo volle Toleranz zu teuer ist.

**Failover.** Das Umschalten auf eine Standby-Komponente, wenn die primäre ausfällt. Es sollte getestet werden; ungetestetes Failover scheitert oft, wenn es gebraucht wird. Siehe Thema 3.12 — Service-Continuity-Management.

**Kapazität.** Der maximale Durchsatz, den ein Service liefern kann. Kapazitätsmanagement stellt sicher, dass es genug gibt, und nicht viel mehr als genug, um die aktuelle und künftige Nachfrage zu den vereinbarten Kosten zu decken. Der Wikipedia-Artikel zu Capacity planning beschreibt es.

**Nachfrage.** Die Last, die auf dem Service liegt: Nutzer, Anfragen, Datenvolumen. Die Nachfrage schwankt nach Stunde, Tag, Saison und Ereignis und wird von Starts, Kampagnen und äußeren Ereignissen beeinflusst. Das Muster zu verstehen zählt mehr als der Durchschnitt.

**Skalierbarkeit und Autoskalierung.** Die Fähigkeit, mehr Last zu bewältigen, indem man Ressourcen hinzufügt. Cloud-Plattformen erlauben automatische Skalierung, die Kapazität hinzufügt, wenn die Last steigt. Das hilft, beseitigt aber nicht den Bedarf an Planung: Es hat Grenzen, kostet Geld und behebt keine Datenbank, die nicht skalieren kann. Siehe Thema 4.5 — Finanzmanagement und FinOps.

**Performance.** Wie schnell und effizient der Service antwortet. Gängige Maße sind Latenz (wie lange eine Anfrage dauert), Durchsatz (wie viele Anfragen bearbeitet werden) und Fehlerrate. Wikipedia beschreibt Latency in der Technik. Nutzer bemerken den langsamen Rand, betrachten Sie daher Perzentile, etwa das 95., nicht nur den Durchschnitt. Siehe Thema 3.7 — Service-Level-Management.

**Warteschlangen und Sättigung.** Nähert sich ein System der vollen Auslastung, wächst die Wartezeit stark. Die Warteschlangentheorie (Queueing theory), auf Wikipedia beschrieben, erklärt, warum sich ein Service bei 95 Prozent der Kapazität ganz anders anfühlt als einer bei 60 Prozent. Lassen Sie Spielraum.

**Performance Engineering und Tests.** Performance während der gesamten Entwicklung entwerfen und testen, nicht nur am Ende. Lasttests (Load testing) wenden die erwartete Nachfrage an; Belastungstests (Stress testing) gehen darüber hinaus, um Bruchpunkte zu finden. Wikipedia beschreibt beide. Testen Sie in einer Umgebung, die der Produktion ähnelt, mit realistischen Daten.

**Prognose.** Künftige Nachfrage aus Verlauf, bekannten Ereignissen und Wachstum schätzen. Wikipedia beschreibt Forecasting-Methoden. Prognosen sind unsicher: Halten Sie Annahmen fest, zeigen Sie Bandbreiten und vergleichen Sie Vorhersagen mit dem, was geschieht. Siehe Thema 7.5 — Prädiktive Analytik und Prognosen.

**Abwägung der Kosten.** Jede Steigerung von Verfügbarkeit oder Kapazität kostet Geld. Das richtige Niveau hängt von den Kosten eines Ausfalls und von Langsamkeit für das Geschäft ab. Machen Sie die Abwägung mit denen explizit, die zahlen, und schreiben Sie sie auf.

**Wie die Blickwinkel passen.** Agile Praxis behandelt Zuverlässigkeitsarbeit als Teil des Backlogs und testet früh und oft. KI kann Anomalien erkennen und Prognosen unterstützen, unter Prüfung. Automatisierung skaliert Ressourcen und schaltet um. Analytik liefert die Daten für alle drei Praktiken.

## Bewährte Praktiken

1. **Setzen Sie Verfügbarkeitsziele aus dem Bedarf der Nutzer.** Fragen Sie, was geschieht, wenn der Service eine Stunde, einen Tag, eine Woche ausfällt. Setzen Sie ein Ziel und Kosten, die dazu passen. Schreiben Sie die Definition von „verfügbar“ aus Sicht der Nutzer.
2. **Finden Sie Single Points of Failure.** Kartieren Sie die Komponenten und Abhängigkeiten wichtiger Services und fragen Sie, was geschieht, wenn jede ausfällt. Beziehen Sie Zertifikate, Lizenzen, Menschen und Lieferanten ein.
3. **Entwerfen Sie für den Ausfall.** Nutzen Sie Redundanz, wo die Kosten gerechtfertigt sind, lassen Sie Komponenten unabhängig ausfallen und entscheiden Sie, was abgeschaltet werden kann, um den Kern zu schützen.
4. **Testen Sie Failover und Wiederherstellung.** Proben Sie Failover in einer sicheren Umgebung und halten Sie fest, wie lange sie dauern. Beheben Sie, was die Probe offenbart.
5. **Kennen Sie Ihr Nachfragemuster.** Sammeln Sie Lastdaten nach Stunde, Tag und Saison und listen Sie bekannte kommende Ereignisse wie Starts und Fristen auf. Planen Sie für Spitzen, nicht für Durchschnitte.
6. **Lassen Sie Spielraum.** Betreiben Sie wichtige Komponenten nicht nahe der vollen Kapazität. Setzen Sie Alarmschwellen, die rechtzeitig zum Handeln warnen.
7. **Testen Sie Performance, bevor Nutzer es tun.** Führen Sie Last- und Belastungstests mit realistischen Szenarien vor großen Releases und vor bekannten Spitzen durch. Lernen Sie, wo das System bricht.
8. **Prognostizieren und prüfen Sie.** Erstellen Sie eine Prognose mit ihren Annahmen, vergleichen Sie sie regelmäßig mit den Ist-Werten und passen Sie an. Teilen Sie Bandbreiten, nicht einzelne Zahlen.
9. **Beobachten Sie den Rand.** Berichten Sie Perzentile der Latenz und Fehlerraten und untersuchen Sie die langsamsten Anfragen. Durchschnitte verbergen das Erlebnis der Pechvögel unter den Nutzern.
10. **Wägen Sie Kosten und Risiko offen ab.** Zeigen Sie Verantwortlichen die Kosten jedes Niveaus an Verfügbarkeit und Kapazität und halten Sie die Entscheidung und wer sie traf fest.

## Fragen für die Diskussion im Team

**Was würden unsere Nutzer verlieren, wenn dieser Service eine Stunde ausfiele, und passt unser Ziel dazu?**
Das bindet Ziele an Auswirkung. Rechnen Sie damit, dass verschiedene Nutzer verschieden antworten. Bitten Sie um reale Beispiele. Schreiben Sie anschließend das Ziel mit Kosten auf und prüfen Sie es mit einem Kunden.

**Was sind unsere Single Points of Failure, auch die, die keine Maschinen sind?**
Zeichnen Sie die Abhängigkeiten eines kritischen Services. Rechnen Sie mit Überraschungen: ein Zertifikat, das niemand verfolgt, ein einzelner Engineer, ein Lieferant ohne Ersatz. Wählen Sie anschließend einen, den wir verringern.

**Wann haben wir zuletzt Failover getestet, und was geschah?**
Fragen Sie nach Datum und Ergebnis. Rechnen Sie mit „nie“ oder „es hat in der Testumgebung funktioniert“. Planen Sie anschließend eine Probe mit einer ausgesprochenen Wiederherstellungszeit.

**Welches ist die geschäftigste Stunde des Jahres für diesen Service, und sind wir dafür bereit?**
Denken Sie an Fristen, Starts und Verkaufsaktionen. Fragen Sie, was beim letzten Mal geschah. Planen Sie anschließend einen Lasttest für die nächste Spitze.

**Wie genau waren unsere letzten drei Kapazitätsprognosen?**
Das prüft Lernen. Rechnen Sie damit, dass niemand es geprüft hat. Vergleichen Sie die Prognosen mit den Ist-Werten. Vereinbaren Sie anschließend einen Überprüfungszyklus und halten Sie Annahmen fest.

**Wie könnte KI helfen, Nachfrage zu prognostizieren oder Probleme früh zu erkennen, und woran würden wir merken, dass sie falsch lag?**
KI kann Muster in Telemetrie finden. Sie kann auch Rauschen anpassen. Fragen Sie, wer sie verantwortet und womit sie verglichen wird. Lassen Sie anschließend eine KI-Prognose ein Quartal lang neben der bestehenden Methode laufen.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Studienkredit-Behörde betreibt ein Antragsportal. Den größten Teil des Jahres bewältigt es einige Tausend Nutzer pro Tag. An den letzten zwei Tagen vor der jährlichen Antragsfrist bewältigt es weit über das Hundertfache. Vor zwei Jahren stürzte es am letzten Abend ab; im vergangenen Jahr überstand es die Frist mit Notskalierung und einer Nacht Überstunden.

Die Service-Verantwortliche beginnt im Januar, lange vor der nächsten Frist. Sie bittet um die Verkehrsdaten der letzten drei Jahre, Stunde für Stunde, und findet eine konsistente Form: ein langsamer Anstieg in der letzten Woche, ein scharfer Anstieg am letzten Tag und eine Spitze in den letzten drei Stunden. Sie bittet das Team, Single Points of Failure zu finden. Es stellt fest, dass das Portal von einem Identitätsprüfungsservice eines Lieferanten mit festem Ratenlimit abhängt, das den Durchsatz auf etwa die Hälfte der erwarteten Spitze begrenzen würde.

Das Team tut drei Dinge. Es verhandelt mit dem Lieferanten ein höheres Ratenlimit und erreicht eine befristete Erhöhung für die letzte Woche. Es führt im März und im Juni Lasttests mit dem Muster des Vorjahres plus 30 Prozent durch und stellt fest, dass bei etwa 70 Prozent der erwarteten Spitze die Datenbank zum Engpass wird, was es mit einem Lese-Replikat und dem Zwischenspeichern einiger aufwendiger Abfragen behebt. Und es bereitet einen herabgesetzten Modus vor: Am letzten Tag werden nicht wesentliche Funktionen wie der Sparrechner abgeschaltet, wenn die Last eine Schwelle überschreitet.

Am Fristtag bewältigt das Portal die Spitze. Der Identitätsservice wird zur geschäftigsten Stunde langsamer, fällt aber nicht aus, und der herabgesetzte Modus wird einmal für 40 Minuten aktiviert. Was sich ändert: kein Ausfall und keine Überstundenkrise. Was schwierig bleibt: Das Limit des Lieferanten ist eine Vertragsfrage, die sich jedes Jahr zurücksetzt; die Prognose von 30 Prozent Zuwachs war eine Annahme, und der tatsächliche Zuwachs betrug 22 Prozent, sodass das Team möglicherweise zu viel ausgegeben hat; und niemand hat den Ausfall einer ganzen Region getestet, der den Service weiterhin stoppen würde. Die Verantwortliche hält das im Plan des nächsten Jahres fest.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Entwerfen Sie für Ausfall und für Last: Machen Sie Komponenten unabhängig, testen Sie Performance beim Bauen und kennen Sie Ihre Grenzen. Nehmen Sie herabgesetzte Modi und Ratenlimits ins Design auf.

### Service- und Betriebsteams

Kennen Sie das Nachfragemuster und den Kapazitätsspielraum. Proben Sie Failover, beobachten Sie den langsamen Rand und warnen Sie früh vor Trends. Halten Sie die Abhängigkeitskarte aktuell.

### Führung und Governance

Entscheiden Sie Niveaus von Verfügbarkeit und Kapazität mit Blick auf Kosten und Risiko und verlangen Sie die Belege dahinter. Finanzieren Sie Tests und Proben, nicht nur Ausrüstung. Seien Sie aufmerksam für bekannte Spitzen.

### Kunden und Nutzer

Sagen Sie dem Anbieter, wann Ihre geschäftigsten Zeiten sind und was ein Ausfall Sie kostet. Fragen Sie, welches Niveau an Verfügbarkeit geplant ist und was geschieht, wenn es verfehlt wird.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nehmen Sie Zuverlässigkeits- und Performance-Arbeit ins Backlog auf, testen Sie früh und oft in der Pipeline und lernen Sie aus jedem Incident und jeder Spitze. Vorsicht: Zuverlässigkeit auf „später“ zu verschieben, baut Schulden auf, die zur schlimmsten Zeit auftauchen.

### KI

KI kann Anomalien erkennen, Nachfrage aus Verlauf und Ereignissen prognostizieren und Skalierungsmaßnahmen vorschlagen, mit Verantwortlichen und menschlichen Entscheidungen über Kosten und Risiko. Vorsicht: Ein an normalen Tagen trainiertes Modell kann bei beispiellosen Ereignissen versagen; vergleichen Sie es mit einfachen Basislinien und halten Sie eine Person rechenschaftspflichtig. Siehe Thema 5.2 — AIOps.

### Automatisierung

Automatisieren Sie Skalierung, Failover, Gesundheitsprüfungen und Lasttests in der Pipeline, mit Grenzen und Protokollen. Vorsicht: Autoskalierung kann Kosten hochtreiben oder ein fehlerhaftes Release verbergen; setzen Sie Budgets und Alarme und testen Sie die Skalierungsregeln. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Erfassen Sie Nachfrage, Auslastung, Perzentile der Latenz, Fehlerraten und Prognosegenauigkeit. Vorsicht: Auslastungsziele lassen sich durch das Verschieben von Last manipulieren, und Durchschnitte verbergen den langsamen Rand; prüfen Sie mit Daten zum Nutzererlebnis. Siehe Thema 7.5 — Prädiktive Analytik und Prognosen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ziele aus Gewohnheit.** „Fünf Neunen“ werden ohne Grund versprochen. Setzen Sie Ziele nach Nutzerbedarf und Kosten.
- **Versteckte Single Points of Failure.** Ein Zertifikat oder eine Person stoppt alles. Kartieren Sie Abhängigkeiten breit.
- **Ungetestetes Failover.** Es scheitert, wenn es gebraucht wird. Proben Sie regelmäßig.
- **Für Durchschnitte planen.** Spitzen überwältigen das System. Planen Sie für bekannte Spitzen und lassen Sie Spielraum.
- **Prognosen nie geprüft.** Fehler wiederholen sich. Vergleichen Sie Vorhersagen mit Ist-Werten.
- **Autoskalierung als Allheilmittel.** Kosten und Engpässe bleiben. Testen Sie Grenzen und setzen Sie Budgets.
- **Nur Durchschnitte.** Der langsame Rand wird ignoriert. Berichten Sie Perzentile.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Verfügbarkeit | Reaktiv | Ziele für Schlüsselservices | Ziele, Redundanz und getestetes Failover | Verfügbarkeit am Nutzererlebnis gemessen | Verfügbarkeit über Services und Lieferanten entworfen und gesteuert |
| Kapazität | Ergänzt, wenn sie ausgeht | Einfaches Monitoring | Nachfragemuster bekannt und mit Annahmen prognostiziert | Prognosegenauigkeit überprüft | Kapazität automatisch mit Aufsicht geplant und angepasst |
| Performance | Nur Beschwerden | Einige Kennzahlen | Perzentilziele und Lasttests vor Releases | Performance-Trends und Regressionen verfolgt | Performance über den Lebenszyklus entwickelt |
| Kostenbewusstsein | Unbekannt | Grob bekannt | Abwägungen mit Verantwortlichen dokumentiert | Kosten und Risiko regelmäßig überprüft | Kosten, Risiko und Zuverlässigkeit gemeinsam optimiert |

## Checkliste

- [ ] Verfügbarkeitsziele beruhen auf Nutzerbedarf und Kosten, mit klarer Definition.
- [ ] Single Points of Failure wichtiger Services sind kartiert und werden verfolgt.
- [ ] Failover wurde geprobt und gemessen.
- [ ] Wir kennen unser Nachfragemuster und kommende Spitzen.
- [ ] Wir führen Lasttests vor großen Releases und bekannten Spitzen durch.
- [ ] Prognosen halten Annahmen fest und werden an Ist-Werten geprüft.
- [ ] Wir berichten Perzentile der Latenz und Fehlerraten.
- [ ] Abwägungen von Kosten und Risiko sind mit Verantwortlichen festgehalten.

## KI-Prompts

**Finden Sie Single Points of Failure.**

```text
Here is a description of how [service] works and what it depends on: [paste].
List each component and dependency, and for each one say what the description implies would happen if it failed, or "not stated". Mark candidate single points of failure and questions to ask. Do not assume redundancy that is not described.
List what you are unsure of.
```

**Fassen Sie Nachfragemuster zusammen.**

```text
Here is hourly request data for [period]: [paste summary or data].
Describe the daily, weekly, and seasonal patterns you can see, give the peak-to-average ratio, and list dates that look unusual. Do not forecast.
List what you are unsure of.
```

**Entwerfen Sie einen Lasttestplan.**

```text
Our service: [describe]. Expected peak: [number and pattern]. Known limits or concerns: [list].
Draft a test plan with scenarios, load levels, what to measure, what would make us stop, and risks of testing. Specify that it is run only in a safe environment.
List what you are unsure of.
```

## KI-Skills

- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): nutzen Sie ihn, um Nachfrage zu prognostizieren und Ressourcen zu planen.
- [load-testing](../../../../skills/load-testing/SKILL.md): nutzen Sie ihn, um Lasttests zu entwerfen und durchzuführen.
- [performance-testing](../../../../skills/performance-testing/SKILL.md): nutzen Sie ihn, um Geschwindigkeit und Reaktionsfähigkeit zu untersuchen.
- [demand-forecasting](../../../../skills/demand-forecasting/SKILL.md): nutzen Sie ihn, um künftige Nachfrage mit ausgesprochener Unsicherheit zu schätzen.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): nutzen Sie ihn, um zu testen, wie sich Ausfälle ausbreiten.

## Wichtige Quellen

- Betsy Beyer und andere (Hrsg.), *Site Reliability Engineering* (2016): Kapitel zum Umgang mit Überlast und zur Lastverteilung, frei unter sre.google.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktiken zu Verfügbarkeit und Kapazität durch den Eigentümer.
- Wikipedia, „High availability“ und „Capacity planning“: Überblicke über die Hauptideen.
- Wikipedia, „Queueing theory“: die Mathematik hinter Warten und Sättigung.

## Literaturverzeichnis

1. Availability — Wikipedia — https://en.wikipedia.org/wiki/Availability
2. High availability — Wikipedia — https://en.wikipedia.org/wiki/High_availability
3. Capacity planning — Wikipedia — https://en.wikipedia.org/wiki/Capacity_planning
4. Reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Reliability_engineering
5. Mean time between failures — Wikipedia — https://en.wikipedia.org/wiki/Mean_time_between_failures
6. Single point of failure — Wikipedia — https://en.wikipedia.org/wiki/Single_point_of_failure
7. Redundancy (engineering) — Wikipedia — https://en.wikipedia.org/wiki/Redundancy_(engineering)
8. Load testing — Wikipedia — https://en.wikipedia.org/wiki/Load_testing
9. Queueing theory — Wikipedia — https://en.wikipedia.org/wiki/Queueing_theory
10. Forecasting — Wikipedia — https://en.wikipedia.org/wiki/Forecasting
11. Site Reliability Engineering: How Google Runs Production Systems — Google — https://sre.google/sre-book/table-of-contents/
