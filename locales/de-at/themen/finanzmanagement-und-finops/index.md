# Finanzmanagement und FinOps

**Finanzmanagement für Services macht die Kosten dessen, was Sie betreiben, sichtbar und bindet sie an den gelieferten Wert. FinOps wendet diese Disziplin auf Cloud- und KI-Ausgaben an, bei denen die Kosten stündlich den Entscheidungen der Technik folgen, indem es Engineers, Finanzen und Produktverantwortliche in dasselbe Gespräch bringt.**

## Warum das wichtig ist

Technologiekosten waren früher einige wenige große, langsame Entscheidungen: Server kaufen, eine Lizenz unterschreiben, ein Rechenzentrum bauen. Die Finanzen konnten einmal im Jahr dafür planen. Cloud-Services und Abonnements haben das verändert. Jeder Engineer kann eine Ressource anlegen, die jede Stunde Geld kostet, und die Rechnung kommt einen Monat später, so aggregiert, dass niemand sagen kann, was sie getrieben hat. Kosten steigen allmählich und springen dann, und das erste Anzeichen ist eine Überraschung auf einer Rechnung.

KI macht es schärfer. Ein Prompt kostet den Bruchteil eines Cents, und eine Funktion, die eine Million Menschen nutzen, kostet viel. Ein Modell zu trainieren oder eine große Last auf Spezialhardware auszuführen, kann an einem Tag so viel kosten wie das Monatsbudget eines Teams. Anders als ein Server, den man im Rack sieht, ist nutzungsbasierte Kostenentstehung unsichtbar, bis sie groß ist.

Finanzmanagement im Service-Management ist älter als die Cloud. ITIL beschreibt es als das Verstehen und Steuern der Kosten von Services, einschließlich Budgetierung, Buchführung und Verrechnung. FinOps ist eine neuere Praktik, von einer Gemeinschaft von Praktikern benannt, die Cloud-Ausgaben durch Zusammenarbeit von Engineering, Finanzen und Fachbereichen finanzielle Verantwortlichkeit gibt. Dieses Thema beschreibt beides und wie sie sich ergänzen. Es verbindet sich mit Asset-Management (Thema 4.1 — Asset-Management), Service-Level-Management (Thema 3.7 — Service-Level-Management) und der Ökonomie von Automatisierung und KI (Thema 6.1 — Automatisierungsstrategie und Thema 5.8 — KI-Betriebsmodell und Fähigkeiten). Es gibt keine Buchhaltungs- oder Steuerberatung.

## Kernkonzepte

**Service-Kalkulation.** Herausfinden, was es kostet, einen Service zu erbringen: Menschen, Infrastruktur, Lizenzen, Lieferanten und Gemeinkosten. Wikipedia beschreibt Cost accounting, die breitere Praktik, Kosten zu erfassen und zu analysieren. Kosten sind direkt (einem Service zugehörig) oder gemeinsam (zuzuordnen). Das Ziel ist eine brauchbare Schätzung, keine perfekte.

**Kostenzuordnung.** Gemeinsame Kosten Services, Teams oder Produkten nach einer Regel zuweisen, etwa nach Kopfzahl, Nutzung oder Kapazität. Wikipedia beschreibt Cost allocation und Activity-based costing (Prozesskostenrechnung), die Kosten nach den Aktivitäten verteilt, die sie treiben. Eine Regel sollte verständlich und schwer anfechtbar sein; eine perfekte Regel ist keinen langen Streit wert.

**Showback und Chargeback.** Showback berichtet Konsumenten Kosten, ohne sie zu belasten; Chargeback stellt sie in Rechnung. Wikipedia beschreibt IT chargeback and showback. Showback schafft mit weniger Reibung Bewusstsein. Chargeback schafft stärkere Anreize und mehr Verwaltung und kann zu Streit über die Zuordnung führen. Viele Organisationen beginnen mit Showback.

**Budgetierung und Prognose.** Ein Budget ist ein Plan erwarteter Ausgaben; eine Prognose ist eine aktualisierte Schätzung, wo die Ausgaben landen werden. Wikipedia beschreibt Budgets und Forecasting. Bei variablen Cloud- und KI-Ausgaben zählen häufige Prognosen und Alarme mehr als eine Jahreszahl. Siehe Thema 2.10 — Agiles Management und Lernen zur Finanzierung stabiler Teams.

**Investitions- und Betriebsausgaben.** Die Buchhaltung unterscheidet Investitionsausgaben (Capital Expenditure), die Vermögenswerte kaufen, die voraussichtlich halten, von Betriebsausgaben (Operating Expense), die laufende Kosten sind. Wikipedia beschreibt beides. Die Cloud verschiebt Ausgaben von Investitions- zu Betriebsausgaben, was Budgets und Berichtswesen betrifft; fragen Sie die Finanzen, wie Ihre Organisation das behandelt.

**Gesamtbetriebskosten (Total Cost of Ownership).** Die Kosten über die ganze Lebenszeit eines Assets oder Services, einschließlich Kauf, Betrieb, Support und Entsorgung. Wikipedia beschreibt Total cost of ownership. Sie verhindern, den billigsten Kauf und das teuerste Leben zu wählen.

**Rendite und Wert.** Kosten zählen im Verhältnis zum Wert. Kapitalrendite (Return on Investment, ROI), Kapitalwert (Net Present Value) und ähnliche Kennzahlen vergleichen Nutzen mit Kosten über die Zeit. Wikipedia beschreibt Return on investment und Net present value. Seien Sie vorsichtig mit Nutzen, der schwer messbar ist; nennen Sie Annahmen und Bandbreiten.

**Opportunitätskosten und versunkene Kosten.** Opportunitätskosten sind der Wert der besten aufgegebenen Alternative. Versunkene Kosten (Sunk Cost) sind Ausgaben, die sich nicht zurückholen lassen; sie sollten künftige Entscheidungen nicht treiben, tun es aber oft. Wikipedia beschreibt beides.

**FinOps.** Eine Praktik und eine Gemeinschaft mit dem Ziel, variablen Cloud-Ausgaben finanzielle Verantwortlichkeit zu geben. Wikipedia hat zum Zeitpunkt der Abfassung keinen eigenen Artikel unter diesem Namen; die FinOps Foundation (finops.org), Teil der Linux Foundation, veröffentlicht ein Framework und Definitionen. Ihre Kernideen sind, dass Teams ihre Nutzung und Kosten verantworten, dass Entscheidungen vom geschäftlichen Wert der Technologie getrieben werden, dass Daten zeitnah und zugänglich sind und dass eine zentrale Gruppe ermöglicht, statt zu überwachen.

**Der FinOps-Zyklus.** Eine gängige Beschreibung hat drei wiederkehrende Phasen: informieren (Kosten sichtbar machen und zuordnen), optimieren (Einsparungen finden und umsetzen) und betreiben (die Praktik in die Arbeitsweise der Teams verankern). Prüfen Sie das aktuelle Framework der Foundation für Einzelheiten.

**Tagging und Zuordnung in der Cloud.** Kostendaten sind nur nützlich, wenn Ressourcen mit verantwortlicher Person, Service und Umgebung gekennzeichnet sind. Ohne Tags lassen sich Rechnungen nicht zuordnen. Erzwingen Sie Tagging bei der Erstellung. Siehe Thema 4.4 — Konfigurationsmanagement.

**Hebel zur Optimierung.** Gängige sind richtiges Dimensionieren von Ressourcen, Abschalten ungenutzter, Rabatte für Bindung bei stabilen Lasten, günstigere Speicherstufen und architektonische Änderungen. Einsparungen hängen von Abwägungen mit Zuverlässigkeit und Aufwand ab. Wägen Sie jede gegen das Service-Level ab, das sie stützt. Siehe Thema 3.11 — Verfügbarkeit, Kapazität und Performance.

**Stückkosten.** Kosten je Transaktion, je Nutzer oder je Anfrage setzen Ausgaben in Beziehung zum Wert. Steigen die Gesamtkosten, aber die Kosten je Transaktion sinken, kann Wachstum es erklären. Steigen die Kosten je Transaktion, stimmt etwas nicht. Stückkennzahlen helfen in Gesprächen mit den Finanzen und Produktverantwortlichen.

**Kosten der KI.** KI-Lasten fügen Kosten für Training, Hosting und Nutzung hinzu, oft nach Tokens (verarbeitete Texteinheiten), nach Rechenzeit auf Spezialhardware wie Grafikprozessoren oder nach Aufruf bepreist. Wikipedia beschreibt Graphics processing units und Machine learning. Der Energieverbrauch ist ebenfalls ein Kostenfaktor und ein Nachhaltigkeitsthema. Verfolgen Sie Kosten je Anwendungsfall und je Ergebnis. Siehe Thema 5.8 — KI-Betriebsmodell und Fähigkeiten.

**Technische Schulden als finanzielle Idee.** Aufgeschobene Wartung ist eine Verbindlichkeit, deren Zinsen in langsamerer Arbeit und mehr Incidents gezahlt werden. Wikipedia beschreibt Technical debt. Ihre Kosten in Geld und Zeit zu zeigen, hilft ihr, um Finanzierung zu konkurrieren.

**Wie die Blickwinkel passen.** Finanzmanagement unterstützt die agile Finanzierung stabiler Teams. KI kann helfen, Rechnungen zu analysieren und zu prognostizieren, unter Prüfung, und ist selbst ein zu steuernder Kostenfaktor. Automatisierung schaltet ungenutzte Ressourcen ab und erzwingt Tags. Analytik liefert die Kosten- und Wertdaten.

## Bewährte Praktiken

1. **Machen Sie Kosten für die Entscheidenden sichtbar.** Zeigen Sie jedem Team die Kosten dessen, was es betreibt, nahezu in Echtzeit, mit einer Zuordnung, der es vertraut. Sichtbarkeit verändert Verhalten mehr als Richtlinien.
2. **Taggen Sie bei der Erstellung und erzwingen Sie es.** Verlangen Sie in der Pipeline Tags für verantwortliche Person, Service und Umgebung. Berichten Sie nicht getaggte Ausgaben und gehen Sie ihnen nach.
3. **Beginnen Sie mit Showback.** Teilen Sie Kosten und lassen Sie Teams reagieren, bevor Sie Verrechnung einführen. Gehen Sie nur zu Chargeback über, wenn der Nutzen den Aufwand und den Streit rechtfertigt.
4. **Ordnen Sie nach einfachen, vereinbarten Regeln zu.** Wählen Sie Regeln, die Menschen verstehen, dokumentieren Sie sie und überprüfen Sie sie jährlich. Verbringen Sie keine Monate mit Perfektion.
5. **Prognostizieren Sie oft und alarmieren Sie bei Änderung.** Aktualisieren Sie bei variablen Ausgaben Prognosen monatlich oder wöchentlich und setzen Sie Budgetalarme. Gehen Sie Überraschungen schnell nach.
6. **Handeln Sie bei offensichtlichen Einsparungen.** Entfernen Sie ungenutzte Ressourcen, dimensionieren Sie richtig und wechseln Sie zu günstigeren Stufen, wo Service-Levels es erlauben. Halten Sie jede Einsparung und ihre Abwägung fest.
7. **Binden Sie sich, wo die Last stabil ist.** Erwägen Sie für stetige Nutzung Rabatte für Bindung nach Analyse und überprüfen Sie sie. Vermeiden Sie Bindung für unsichere Lasten.
8. **Nutzen Sie Stückkosten.** Berichten Sie Kosten je Transaktion, Nutzer oder Ergebnis neben den Gesamtsummen. Besprechen Sie Veränderungen mit Produktverantwortlichen.
9. **Beziehen Sie KI-Nutzung ein.** Messen Sie Kosten je KI-Anwendungsfall, einschließlich Nutzung, Hosting und Support. Setzen Sie Limits und Alarme und überprüfen Sie, ob jede Nutzung ihre Kosten wert ist.
10. **Wägen Sie Kosten gegen Wert und Risiko ab.** Kürzen Sie nichts, was Zuverlässigkeit, Sicherheit oder Nutzererlebnis schützt, ohne bewusste Entscheidung. Zeigen Sie die Abwägungen der verantwortlichen Person.

## Fragen für die Diskussion im Team

**Was kostet unser wichtigster Service im Betrieb, und wie sicher sind wir?**
Bitten Sie um eine Zahl und ihre Methode. Rechnen Sie mit groben Zahlen und fehlenden Teilen. Wählen Sie anschließend einen Service und erstellen Sie eine bessere Schätzung.

**Welche unserer Cloud-Kosten können wir keinem Team und keinem Service zuordnen?**
Betrachten Sie nicht getaggte Ausgaben. Rechnen Sie mit einem erheblichen Anteil. Weisen Sie anschließend die größten Posten zu und erzwingen Sie Tags für neue.

**Wofür haben wir zuletzt Geld ausgegeben, das wir nicht wieder wählen würden, und warum haben wir es nicht bemerkt?**
Das findet Sichtbarkeitslücken. Rechnen Sie mit ungenutzten Ressourcen und vergessenen Abonnements. Vereinbaren Sie anschließend einen Alarm und eine monatliche Überprüfung.

**Wie entscheiden wir, ob eine Einsparung das Risiko für den Service wert ist?**
Fragen Sie nach dem letzten Beispiel. Rechnen Sie damit, dass niemand es ausdrücklich abgewogen hat. Vereinbaren Sie anschließend, wer entscheidet und welche Informationen diese Person braucht.

**Was kostet unsere KI-Nutzung je Anwendungsfall, und wer verantwortet die Zahl?**
Bitten Sie um die Aufschlüsselung der Rechnung. Rechnen Sie mit aggregierten oder unbekannten Zahlen. Weisen Sie anschließend jeder größeren KI-Nutzung eine Kostenverantwortliche zu und setzen Sie ein Limit.

**Wie sprechen Finanzen, Engineering und Produktverantwortliche heute über Kosten, und was könnte es verbessern?**
Beschreiben Sie die Besprechungen. Rechnen Sie damit, dass sie getrennt stattfinden. Planen Sie anschließend eine kurze monatliche gemeinsame Überprüfung der größten Kosten.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Streaming-Plattform eines nationalen Rundfunkanbieters läuft in einer öffentlichen Cloud und kostet ein Mehrfaches des Geplanten. Das Finanzteam erhält eine einzige Monatsrechnung und bittet das Engineering, sie „um 15 Prozent zu senken“. Die Engineers sagen, der Verkehr wachse und Kürzungen gefährdeten den Service bei Live-Übertragungen.

Der Plattformleiter bittet um einen Monat, um Sichtbarkeit zu schaffen. Er erzwingt Tags per Pipeline-Regel und weist für bestehende Ressourcen mit Hilfe jedes Teams Verantwortliche zu. Nicht getaggte Ausgaben sinken von 38 auf 7 Prozent. Mit der Zuordnung erstellt er einen Showback-Bericht nach Team und Service sowie Kosten je gestreamter Stunde. Der Bericht zeigt, dass die Gesamtkosten im Jahr um 30 Prozent gestiegen sind, während die Kosten je gestreamter Stunde leicht gesunken sind: Wachstum, nicht Verschwendung, erklärt das meiste. Er zeigt außerdem, dass Entwicklungs- und Testumgebungen, die nachts und am Wochenende laufen, 18 Prozent der Ausgaben ausmachen.

Das Team plant, Nicht-Produktionsumgebungen außerhalb der Arbeitszeit abzuschalten, was etwa zwei Drittel ihrer Kosten spart, und dimensioniert eine Reihe überdimensionierter Datenbanken richtig. Die Kapazität für Live-Übertragungen fasst es nicht an. Für stetige Basislasten kauft es nach einer dreimonatigen Nutzungsanalyse Rabatte für Bindung. Eine neue KI-gestützte Untertitelfunktion wird gesondert verfolgt: Ihre Kosten je Videostunde sind höher als erwartet, und die Produktverantwortliche entscheidet, sie zunächst nur auf Live-Nachrichten anzuwenden.

Was sich ändert: Finanzen und Engineering besprechen die Kosten je gestreamter Stunde, und das Ziel wird zu einer Stückkostengröße statt einer pauschalen Kürzung. Was schwierig bleibt: Kostendaten treffen mit Verzögerung ein, sodass ein schlechtes Deployment tagelang laufen kann, bevor es sichtbar wird; die Zuordnung gemeinsamer Plattformkosten wird von zwei Teams bestritten; und die Bindungen verringern die Flexibilität, falls sich die Architektur ändert. Der Leiter plant eine vierteljährliche Überprüfung der Bindungen und eine kurze Notiz dazu ein, wie gemeinsame Kosten zugeordnet werden.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Wissen Sie, was Ihr Produkt kostet, taggen Sie, was Sie anlegen, und beziehen Sie Kosten in Designentscheidungen ein. Beobachten Sie die Kosten je Transaktion und sagen Sie der verantwortlichen Person, wenn eine Funktion sie verändert.

### Service- und Betriebsteams

Entfernen Sie ungenutzte Ressourcen, dimensionieren Sie richtig und mit Rücksicht auf Zuverlässigkeit und alarmieren Sie bei Kostenspitzen. Bringen Sie Betriebsdaten in Gespräche mit den Finanzen ein.

### Führung und Governance

Verlangen Sie Stückkosten und Wert, nicht nur Summen. Entscheiden Sie, wie viel zentralisiert wird. Finanzieren Sie die Arbeit an Sichtbarkeit und Tagging und stützen Sie Abwägungen gegen Zuverlässigkeit ausdrücklich.

### Kunden und Nutzer

Wenn Ihnen Kosten berechnet werden, sollten Sie sehen, was sie treibt und welche Wahl Sie haben. Fragen Sie nach der Grundlage jeder Zuordnung und sagen Sie, welche Service-Levels Ihnen wichtig sind.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Finanzieren Sie stabile Teams, überprüfen Sie Kosten regelmäßig mit Produktverantwortlichen und behandeln Sie Kosten als eine Eingabe für die Priorisierung. Vorsicht: Machen Sie Kostensenkung nicht zum einzigen Ziel; Teams kürzen dann, was leicht ist, etwa Tests und Resilienz.

### KI

KI kann Rechnungen analysieren, Auffälligkeiten und ungenutzte Ressourcen finden und Ausgaben prognostizieren, unter Prüfung. KI-Lasten brauchen eigene Kostenverfolgung, Verantwortliche und Limits. Vorsicht: Ein KI-Assistent, der Einsparungen empfiehlt, kann Zuverlässigkeit oder vertragliche Beschränkungen ignorieren; prüfen Sie jede Empfehlung. Siehe Thema 5.8 — KI-Betriebsmodell und Fähigkeiten.

### Automatisierung

Automatisieren Sie die Durchsetzung von Tags, das Abschalten ungenutzter Ressourcen, Budgetalarme und Berichte, mit Ausnahmen und Protokollen. Vorsicht: Automatisches Abschalten kann etwas Benötigtes löschen oder stoppen; nutzen Sie bei wichtigen Ressourcen Zeitpläne und Bestätigung durch die verantwortliche Person. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Nutzen Sie zugeordnete Kosten, Stückkosten, Prognosegenauigkeit, den Anteil nicht getaggter Ressourcen und die Auslastung von Bindungen. Vorsicht: Showback-Zahlen hängen von Zuordnungsregeln ab, und Einsparungen durch Optimierung werden oft überschätzt; vergleichen Sie mit tatsächlichen Rechnungen. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Eine Sammelrechnung.** Niemand verantwortet die Kosten. Taggen, zuordnen und nach Team berichten.
- **Kostensenkung als Ziel.** Die Zuverlässigkeit leidet. Koppeln Sie Kosten mit Service-Levels und Wert.
- **Streit über die Zuordnung.** Teams streiten über Regeln. Wählen Sie einfache Regeln und überprüfen Sie sie jährlich.
- **Einmal im Jahr prognostizieren.** Variable Ausgaben überraschen. Prognostizieren Sie oft und alarmieren Sie.
- **Zu früh binden.** Rabatte binden die falsche Kapazität. Analysieren Sie zuerst die Nutzung.
- **KI-Kosten ignorieren.** Die Nutzung wächst unbemerkt. Verfolgen Sie je Anwendungsfall und setzen Sie Limits.
- **Keine Verbindung zum Wert.** Ausgaben werden ohne Grund gekürzt oder erhöht. Nutzen Sie Stückkosten und Ergebnisse.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Sichtbarkeit | Gesamtrechnung | Kosten je Konto | Zugeordnete Kosten nach Team und Service mit Tags | Nahezu Echtzeit-Kosten mit Anomalie-Alarmen | Kosten und Wert über Anbieter und Lieferanten sichtbar |
| Zuordnung | Keine | Grob | Einfache dokumentierte Regeln | Regeln mit Verantwortlichen überprüft | Zuordnung mit Planung und Finanzierung integriert |
| Optimierung | Ad hoc | Einige Einsparungen gefunden | Regelmäßiger Optimierungszyklus | Einsparungen an tatsächlichen Kosten verfolgt | Optimierung mit Aufsicht automatisiert |
| Verbindung zum Wert | Nicht verknüpft | Summen besprochen | Stückkosten berichtet | Stückkosten und Ergebnisse mit Verantwortlichen überprüft | Kosten, Risiko und Wert gemeinsam optimiert |

## Checkliste

- [ ] Wir taggen Ressourcen bei der Erstellung mit verantwortlicher Person, Service und Umgebung.
- [ ] Teams sehen die Kosten dessen, was sie betreiben.
- [ ] Zuordnungsregeln sind aufgeschrieben und vereinbart.
- [ ] Prognosen werden mindestens monatlich aktualisiert, mit Budgetalarmen.
- [ ] Wir überprüfen ungenutzte und überdimensionierte Ressourcen regelmäßig.
- [ ] Wir berichten Stückkosten neben Summen.
- [ ] KI-Nutzung und -Kosten werden je Anwendungsfall verfolgt, mit Limits.
- [ ] Einsparungen werden gegen Zuverlässigkeit abgewogen und festgehalten.

## KI-Prompts

**Finden Sie Auffälligkeiten in einem Kostenbericht.**

```text
Here is a monthly cost report by service and team for the last six months: [paste data].
List changes of more than [percentage] between months, the services involved, and one question per change to ask the owner. Do not explain causes that are not in the data.
List what you are unsure of.
```

**Entwerfen Sie eine Showback-Zusammenfassung für ein Team.**

```text
Team: [name]. Here are their costs and usage for the month: [paste]. Prior month: [paste].
Write a one-page summary in plain language: total, change, top three cost drivers, unit cost if given, and two questions for the team. Do not recommend cuts.
List what you are unsure of.
```

**Schätzen Sie die Kosten eines KI-Anwendungsfalls.**

```text
The use case: [describe]. Expected usage: [number of requests per day, average size]. Pricing we have been given: [paste].
Calculate a monthly cost range with low, expected, and high usage, showing each step and assumption. State what costs the figures leave out. Do not invent prices.
List what you are unsure of.
```

## KI-Skills

- [budget-forecasting](../../../../skills/budget-forecasting/SKILL.md): nutzen Sie ihn, um Prognosen mit ausgesprochenen Annahmen zu erstellen und zu aktualisieren.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): nutzen Sie ihn, um Kosten und Nutzen zu vergleichen.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): nutzen Sie ihn, um Ausgaben über Produkte und Services zu überprüfen.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): nutzen Sie ihn, um Bindungen und Verlängerungen zu steuern.

## Wichtige Quellen

- FinOps Foundation (finops.org): das Framework, die Definitionen und das Fallmaterial der Gemeinschaft zum Cloud-Finanzmanagement.
- J.R. Storment und Mike Fuller, *Cloud FinOps* (2. Auflage, 2023): ein Praxisleitfaden zur Praktik.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Finanzmanagement durch den Eigentümer.
- Wikipedia, „Cost accounting“ und „IT chargeback and showback“: Überblicke über die buchhalterischen Ideen.

## Literaturverzeichnis

1. Cost accounting — Wikipedia — https://en.wikipedia.org/wiki/Cost_accounting
2. IT chargeback and showback — Wikipedia — https://en.wikipedia.org/wiki/IT_chargeback_and_showback
3. Cost allocation — Wikipedia — https://en.wikipedia.org/wiki/Cost_allocation
4. Activity-based costing — Wikipedia — https://en.wikipedia.org/wiki/Activity-based_costing
5. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
6. Return on investment — Wikipedia — https://en.wikipedia.org/wiki/Return_on_investment
7. Net present value — Wikipedia — https://en.wikipedia.org/wiki/Net_present_value
8. Capital expenditure — Wikipedia — https://en.wikipedia.org/wiki/Capital_expenditure
9. Operating expense — Wikipedia — https://en.wikipedia.org/wiki/Operating_expense
10. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
11. FinOps Foundation — Linux Foundation — https://www.finops.org
