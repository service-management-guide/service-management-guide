# Asset-Management

**IT-Asset-Management verfolgt, was eine Organisation besitzt, wo es ist, wer es nutzt, was es kostet und wann es ersetzt oder stillgelegt werden sollte. Es funktioniert, wenn ein verlässlicher Datensatz über den gesamten Lebenszyklus aktuell gehalten und zum Entscheiden genutzt wird, nicht nur zum Zählen.**

## Warum das wichtig ist

Fragen Sie, wie viele Laptops, Server, Softwarelizenzen und Cloud-Abonnements eine Organisation hat, und die Antwort ist meist eine Schätzung. Aufzeichnungen sind über Einkauf, Finanzen, IT und einzelne Teams verstreut. Ausstattung wird gekauft und nie erfasst oder erfasst und verloren. Abonnements laufen weiter, nachdem das Projekt, das sie brauchte, beendet ist. Lizenzen werden zu einem lange zurückliegenden Stichtag gezählt.

Die Folgen sind kostspielig. Geld wird für Ausstattung und Lizenzen ausgegeben, die niemand nutzt. Audits von Softwareherstellern finden Fehlbestände und bringen Vertragsstrafen. Sicherheitsteams können nicht patchen, was sie nicht kennen. Geht ein Gerät verloren, weiß niemand, welche Daten es hielt. Fragt ein Auditor nach Belegen für Kontrolle, kann die Organisation sie nicht liefern.

Asset-Management gibt eine einzige, verlässliche Antwort auf „Was haben wir?“ und die Grundlage für die folgenden Fragen: Ist es sicher, wird es genutzt, ist es seine Kosten wert, ist es nahe am Ende seines Lebens? Dieses Thema behandelt die Kernkonzepte und die Lebenszyklussicht auf IT-Assets im Allgemeinen. Einzelne Bereiche haben eigene Themen: Software (Thema 4.2 — Software-Asset-Management), Hardware (Thema 4.3 — Hardware-Asset-Management) und Konfigurationselemente (Thema 4.4 — Konfigurationsmanagement). Kosten verbinden sich mit Thema 4.5 — Finanzmanagement und FinOps.

## Kernkonzepte

**Asset.** Etwas von Wert, das einer Organisation gehört oder von ihr kontrolliert wird. In der IT gehören Hardware, Software, Cloud-Services, Daten, Lizenzen, Verträge und manchmal Menschen und Wissen dazu. Wikipedia beschreibt Asset management als den systematischen Prozess, Assets kosteneffizient zu entwickeln, zu betreiben, zu warten und zu entsorgen. Dieser Leitfaden verwendet „IT-Asset-Management“ (ITAM) für die auf Technologie angewendete Praktik.

**Asset oder Konfigurationselement.** Ein Asset wird wegen seines Werts und seiner Zugehörigkeit verfolgt, oft mit finanziellen Einzelheiten. Ein Konfigurationselement (Configuration Item, CI) ist alles, was gesteuert werden muss, um einen Service zu erbringen, verfolgt mit seinen Beziehungen zu anderen Elementen. Beide überschneiden sich: Ein Server ist beides. Die Aufzeichnungen liegen oft in verschiedenen Systemen. Siehe Thema 4.4 — Konfigurationsmanagement.

**Der Lebenszyklus.** Ein Asset durchläuft Stufen: planen, beschaffen, bereitstellen, betreiben und warten, stilllegen oder entsorgen. Jede Stufe hat Entscheidungen und Aufzeichnungen. Der Wikipedia-Artikel zu Product lifecycle beschreibt die allgemeine Idee. Den Lebenszyklus zu steuern heißt zu wissen, wo jedes Asset steht, und zum richtigen Zeitpunkt zu handeln, zum Beispiel Laptops zu ersetzen, bevor die Ausfallraten steigen, oder Lizenzen zu verlängern, bevor sie auslaufen.

**Vier Sichten.** Eine nützliche Art, über Asset-Informationen nachzudenken, sind vier Sichten: Bestand (was und wo), Finanzen (Kosten, Abschreibung, Zugehörigkeit), Vertrag (Garantie, Support, Lizenzbedingungen) und Betrieb (Nutzung, Zustand und Leistung). Jede Sicht beantwortet andere Fragen, und der Datensatz muss genug von jeder enthalten, um nützlich zu sein.

**Inventar und Erkennung (Discovery).** Eine Liste von Assets mit wichtigen Attributen wie Typ, Modell, Seriennummer, Standort, verantwortlicher Person und Status. Inventare lassen sich aufbauen, indem man Käufe erfasst, indem man Netzwerke nach Geräten und Software absucht oder durch beides. Discovery-Werkzeuge finden, was nie erfasst wurde, und erfasste Dinge, die es nicht mehr gibt. Keine Quelle ist allein vollständig, und der Abgleich ist die eigentliche Arbeit. Wikipedia beschreibt Inventory und Asset tracking.

**Identifikation.** Jedes Asset braucht eine Identität, die sein Leben überdauert: ein Asset-Etikett, einen Barcode oder eine Seriennummer. Wikipedia beschreibt Barcodes und Radiofrequenz-Identifikation (RFID), die zur Verfolgung physischer Gegenstände genutzt werden.

**Verantwortung und Gewahrsam.** Zwei Fragen für jedes Asset: Wer ist dafür rechenschaftspflichtig, und wer hat oder nutzt es? Sie unterscheiden sich: Ein Team kann für eine Flotte von Geräten rechenschaftspflichtig sein, die Einzelne halten. Klarer Gewahrsam vermeidet verlorene Ausstattung.

**Kosten und Wert.** Kosten umfassen Kaufpreis, Support, Lizenzen, Energie und Entsorgung. Die Gesamtbetriebskosten (Total cost of ownership), auf Wikipedia beschrieben, berücksichtigen die ganze Lebenszeit, nicht nur den Preis. Abschreibung (Depreciation), auf Wikipedia beschrieben, ist eine buchhalterische Behandlung; Finanzteams nutzen sie für die Berichterstattung, und das ITAM-Team sollte sie verstehen.

**Cloud- und Abonnement-Assets.** Cloud-Services und Software-Abonnements sind ebenfalls Assets, auch wenn sie keine physische Form haben und in Minuten entstehen können. Ohne Disziplin wuchern sie. Verknüpfen Sie sie bei der Erstellung mit Verantwortlichen, Projekten und Budgets. Siehe Thema 4.5 — Finanzmanagement und FinOps.

**Schatten-IT.** Technologie, die ohne Wissen der IT-Funktion gekauft und genutzt wird. Wikipedia beschreibt Shadow IT. Sie entsteht, weil der offizielle Weg langsam ist oder Bedürfnisse nicht deckt. Behandeln Sie sie als Information über ungedeckte Bedürfnisse und holen Sie nützliche Werkzeuge in die Steuerung.

**Daten-Assets.** Daten sind ebenfalls Assets, mit Verantwortlichen, Klassifizierung und Aufbewahrungsregeln. Wikipedia beschreibt Digital asset management, das verwandt ist. Siehe Thema 7.2 — Datengrundlagen und Data Governance.

**Standards.** ISO/IEC 19770 ist eine Familie von Standards für das IT-Asset-Management, auf Wikipedia beschrieben. Siehe Thema 1.8 — Frameworks und Standards des Service-Managements.

**Nachhaltigkeit.** Asset-Entscheidungen haben Umweltwirkungen: Herstellungsenergie, Elektroschrott und Reparierbarkeit. Wikipedia beschreibt Electronic waste und die Kreislaufwirtschaft (Circular economy). Siehe Thema 8.2 — Nachhaltigkeit und verantwortungsvolles Service-Management.

**Wie die Blickwinkel passen.** Asset-Management ist die faktische Basis, die die vier Blickwinkel brauchen. Agile Praxis hält den Prozess schlank und verbessert ihn mit Nutzern. KI kann helfen, Aufzeichnungen abzugleichen, Auffälligkeiten zu erkennen und Ausfälle vorherzusagen, unter Prüfung. Automatisierung erkennt und aktualisiert Aufzeichnungen. Analytik nutzt die Daten, um über Ersatz, Lizenzrückgewinnung und Kosten zu entscheiden.

## Bewährte Praktiken

1. **Definieren Sie, was als Asset zählt.** Entscheiden Sie, welche Kategorien Sie verfolgen und ab welcher Wert- oder Risikoschwelle. Beginnen Sie mit denen, die am meisten kosten oder das meiste Risiko tragen.
2. **Führen Sie einen maßgeblichen Datensatz.** Wählen Sie für jede Art von Asset eine einzige Quelle der Wahrheit und verknüpfen Sie andere damit. Doppelte Listen laufen auseinander.
3. **Erfassen Sie bei der Beschaffung.** Machen Sie Einkauf, Wareneingang und Erfassung zu einem verbundenen Schritt, damit nichts unerfasst bereitgestellt wird. Etikettieren Sie physische Gegenstände bei Ankunft.
4. **Kombinieren Sie Aufzeichnungen mit Discovery.** Nutzen Sie automatische Erkennung, um nicht erfasste und fehlende Gegenstände zu finden, und gleichen Sie regelmäßig ab. Gehen Sie jedem Unterschied nach.
5. **Benennen Sie eine verantwortliche Person und eine Gewahrsamsperson.** Erfassen Sie für jedes Asset oder jede Gruppe, wer rechenschaftspflichtig ist und wer es hat. Aktualisieren Sie, wenn Menschen die Stelle wechseln oder gehen.
6. **Verfolgen Sie den ganzen Lebenszyklus.** Erfassen Sie Bereitstellung, Umzüge, Wechsel der Verantwortung, Reparatur und Stilllegung. Nutzen Sie Lebenszyklusdaten, um Ersatz und Verlängerungen zu planen.
7. **Verknüpfen Sie Assets mit Services und Kosten.** Verbinden Sie jedes Asset mit den Services, die es unterstützt, und dem Budget, zu dem es gehört. Das ermöglicht Auswirkungsanalyse und Kostenzuordnung.
8. **Machen Sie Verlust und Entsorgung sicher.** Definieren Sie, was geschieht, wenn ein Gerät verloren geht oder stillgelegt wird: Daten löschen, sichere Entsorgung, Nachweise und Erfassung. Prüfen Sie, dass es geschieht.
9. **Auditieren Sie stichprobenartig.** Prüfen Sie je Zeitraum eine Stichprobe von Aufzeichnungen an der Wirklichkeit, etwa durch physische Überprüfung von Geräten, und messen Sie die Genauigkeit.
10. **Nutzen Sie die Daten zum Entscheiden.** Betrachten Sie Auslastung, Alter, Ausfälle und Kosten, um Ersatz, Lizenzänderungen und Konsolidierung zu lenken. Ein Datensatz, den niemand nutzt, verfällt.

## Fragen für die Diskussion im Team

**Wie viele Geräte, Lizenzen und Abonnements haben wir, und wie sicher sind wir bei jeder Zahl?**
Fragen Sie verschiedene Personen. Rechnen Sie mit verschiedenen Antworten. Fragen Sie, wie die Zahl entstanden ist. Wählen Sie anschließend eine Kategorie und gleichen Sie sie ordentlich ab.

**Wo gelangen Assets in unsere Organisation, ohne erfasst zu werden?**
Suchen Sie Einkauf per Karte, Geschenke, Testversionen, die dauerhaft wurden, und von Teams angelegte Cloud-Konten. Rechnen Sie mit mehreren Lücken. Schließen Sie anschließend die größte.

**Wer ist für jede unserer Asset-Kategorien rechenschaftspflichtig?**
Die Verantwortung ist bei gemeinsam genutzter Ausstattung und Abonnements oft unklar. Fragen Sie nach Namen. Weisen Sie anschließend Verantwortliche und ein Überprüfungsdatum zu.

**Was geschieht, wenn jemand einen Laptop verliert oder die Organisation verlässt?**
Gehen Sie den Prozess Schritt für Schritt durch. Rechnen Sie mit Lücken beim Einsammeln der Ausstattung und beim Entziehen von Zugriff. Vereinbaren Sie anschließend eine Checkliste und eine verantwortliche Person.

**Für welche Assets zahlen wir, nutzen sie aber nicht mehr?**
Betrachten Sie Lizenzen, Abonnements und ungenutzte Ausstattung. Rechnen Sie damit, etwas zu finden. Wählen Sie anschließend die drei größten Kosten und entscheiden Sie, ob stilllegen, neu zuweisen oder verlängern.

**Wie könnte KI helfen, unsere Asset-Daten korrekt zu halten, und was würden wir von Hand prüfen?**
KI kann Aufzeichnungen abgleichen, auffällige Einträge markieren und Kategorien vorschlagen. Sie kann auch Datensätze fälschlich zusammenführen. Fragen Sie, wer die Nutzung verantwortet und wie Fehler gefunden werden. Testen Sie sie anschließend an einer Stichprobe gegen eine manuell abgeglichene Liste.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer Universität wird vom Finanzdirektor nach der Zahl der genutzten Laptops gefragt. Drei Quellen geben drei Antworten: Der Einkauf sagt 4.200, das Identitätssystem zeigt 3.600 Nutzer mit registriertem Laptop, und das Endpoint-Management-Werkzeug sieht 3.900 Geräte. Die Abteilung hat außerdem eine jüngere Audit-Feststellung, dass die Laptops Ausgeschiedener nicht immer zurückgegeben werden.

Die ITAM-Leiterin beginnt damit, den Umfang festzulegen: Laptops, Desktops, Tablets und Telefone über einem kleinen Wert, dazu Software und Cloud-Abonnements. Sie bestimmt das Endpoint-Management-System als Quelle der Wahrheit für das, was in Nutzung ist, die Einkaufsaufzeichnungen als Quelle für das, was gekauft wurde, und bittet den Asset-Manager, monatlich abzugleichen. Der erste Abgleich findet etwa 300 gekaufte Geräte, die im Netz nicht gesehen wurden, 200 im Netz gesehene Geräte, die nicht über den Einkauf gekauft wurden, und 90 Geräte, die Mitarbeitenden zugewiesen sind, die gegangen waren.

Sie richtet drei Änderungen ein: Etiketten und eine Erfassung bei Wareneingang für jedes Gerät; eine Checkliste für Austritte, die das Austrittsereignis des Personalwesens mit einer Aufgabe zum Einsammeln der Ausstattung samt Frist verknüpft; und eine vierteljährliche Stichprobe, bei der ein Techniker 100 Geräte physisch überprüft. Nach zwei Quartalen sinken die Abgleichsunterschiede um zwei Drittel, und die Genauigkeit der Stichprobe beträgt 94 Prozent.

Was sich ändert: Der Finanzdirektor erhält eine Zahl, die die Abteilung verteidigen kann, und der Austrittsprozess holt Dutzende Geräte zurück. Was schwierig bleibt: Geräte, die Forschungsgruppen mit Drittmitteln kaufen, umgehen weiter den Einkauf; die physische Prüfung an entlegenen Standorten hängt von ausgelasteten Mitarbeitenden ab; und die Daten zu Cloud-Abonnements liegen in einem anderen Werkzeug, das ein anderes Team verantwortet. Die Leiterin bringt den Einkauf aus Drittmitteln und die Abonnementdaten als nächsten Baustein zum Finanzdirektor.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Erfassen Sie die Assets, die Ihr Produkt nutzt: Lizenzen, Cloud-Services und Geräte. Versehen Sie Cloud-Ressourcen bei der Erstellung mit verantwortlicher Person und Projekt und legen Sie still, was Sie nicht mehr brauchen.

### Service- und Betriebsteams

Halten Sie die Aufzeichnungen korrekt, während Sie Ausstattung bereitstellen, bewegen und stilllegen. Melden Sie Abweichungen und nutzen Sie Discovery-Daten bei Incidents und Changes.

### Führung und Governance

Verlangen Sie ein belastbares Inventar und die Kosten dessen, was gehalten wird. Finanzieren Sie Prozess und Werkzeuge. Nutzen Sie die Daten für Entscheidungen zu Ersatz und Kosten und machen Sie Verantwortliche rechenschaftspflichtig.

### Kunden und Nutzer

Sie halten Assets im Auftrag der Organisation. Halten Sie sie sicher, melden Sie Verlust rasch und geben Sie Ausstattung zurück, wenn Sie weiterziehen. Sagen Sie dem Anbieter, welche Werkzeuge Sie brauchen, die nicht bereitgestellt werden.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Beginnen Sie mit den Kategorien höchsten Werts und verbessern Sie den Prozess in kleinen Schritten mit Nutzern. Überprüfen Sie Genauigkeit und Schmerzpunkte regelmäßig. Vorsicht: Ein Inventarprojekt im großen Wurf veraltet schnell; bauen Sie die Gewohnheit auf, bei der Arbeit zu erfassen.

### KI

KI kann Aufzeichnungen aus mehreren Quellen abgleichen, Auffälligkeiten wie monatelang nicht gesehene Geräte markieren und Ausfälle aus Alter und Verlauf vorhersagen, wobei eine Person vorgeschlagene Zusammenführungen und Stilllegungen prüft. Benennen Sie eine verantwortliche Person. Vorsicht: KI kann zwei verschiedene Assets zusammenführen oder eine Abweichung übersehen; prüfen Sie ihre Ausgabe stichprobenartig. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Discovery, Anlage von Datensätzen bei Kauf und Registrierung, Auslöser bei Austritten und Verlängerungserinnerungen, mit Protokollen. Vorsicht: Automatische Datensätze können Duplikate vervielfachen; setzen Sie Abgleichsregeln und prüfen Sie Ausnahmen. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Betrachten Sie Inventargenauigkeit, Assets ohne verantwortliche Person, Altersprofil, Auslastung, Kosten je Asset-Art und ungenutzte Lizenzen. Vorsicht: Eine hohe Genauigkeit aus einer kleinen Stichprobe kann in die Irre führen; ziehen Sie Stichproben über Standorte und Arten. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Mehrere nicht abgeglichene Listen.** Niemand kennt die Wahrheit. Wählen Sie eine Quelle der Wahrheit und gleichen Sie ab.
- **Erfassen nach der Bereitstellung.** Gegenstände werden übersehen. Erfassen Sie bei der Beschaffung.
- **Keine verantwortliche Person oder Gewahrsamsperson.** Ausstattung geht verloren. Benennen Sie beide.
- **Für Ungenutztes zahlen.** Lizenzen und Abonnements laufen weiter. Prüfen Sie die Nutzung und legen Sie still.
- **Keine Kontrolle der Entsorgung.** Daten verlassen mit stillgelegter Ausstattung das Haus. Löschen Sie und erfassen Sie.
- **Aufzeichnungen, die niemand nutzt.** Die Daten verfallen. Nutzen Sie sie für Entscheidungen.
- **Cloud und Abonnements ignorieren.** Kosten wachsen unbemerkt. Verfolgen Sie sie als Assets.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Inventar | Tabellen | Ein Hauptregister | Einzelner Datensatz, mit Discovery abgeglichen | Genauigkeit gemessen und verbessert | Echtzeit-Inventar über On-Premises, Cloud und Lieferanten |
| Lebenszyklus | Nicht verfolgt | Kauf und Entsorgung vermerkt | Lebenszyklusstufen und -daten erfasst | Lebenszyklus für Planung von Ersatz und Verlängerung genutzt | Lebenszyklus über Assets und Lieferanten mit Automatisierung gesteuert |
| Verantwortung | Unklar | Verantwortliche für große Posten | Verantwortliche Person und Gewahrsam für jedes Asset | Verantwortung regelmäßig überprüft | Verantwortung mit Services und Budgets verknüpft |
| Nutzung der Daten | Zählen | Einfache Berichte | Kosten und Auslastung bei Entscheidungen genutzt | Einsparungen und Risiko verfolgt | Daten steuern Planung im Portfolio |

## Checkliste

- [ ] Wir haben definiert, welche Assets wir verfolgen, und die Schwelle.
- [ ] Für jede Asset-Art gibt es eine Quelle der Wahrheit.
- [ ] Assets werden bei der Beschaffung erfasst und gekennzeichnet.
- [ ] Discovery und Aufzeichnungen werden regelmäßig abgeglichen.
- [ ] Jedes Asset hat eine verantwortliche Person und eine Gewahrsamsperson.
- [ ] Verlust, Austritt und Entsorgung haben einen definierten, geprüften Prozess.
- [ ] Wir auditieren eine Stichprobe von Aufzeichnungen an der Wirklichkeit.
- [ ] Wir nutzen die Daten, um Ersatz- und Kostenentscheidungen zu lenken.

## KI-Prompts

**Gleichen Sie zwei Listen ab.**

```text
Here are two lists of devices from different systems, with identifiers removed where sensitive: [paste list A] and [paste list B].
List items that appear in both, items only in A, items only in B, and items that might be the same asset under different names. Show your matching reasoning and do not merge anything.
List what you are unsure of.
```

**Finden Sie Kandidaten für die Stilllegung.**

```text
Here is a list of subscriptions and licenses with cost, number of seats, and last-used dates: [paste].
List those with low or no recent use, the cost of each, and a question to ask the owner. Do not recommend cancellation.
List what you are unsure of.
```

**Entwerfen Sie eine Checkliste für Austritte.**

```text
Our context: [type of organization, equipment, systems]. Our leaver triggers: [describe].
Draft a checklist for retrieving equipment and removing access, with owners and deadlines for each step, and note what could be missed. Do not add legal requirements.
List what you are unsure of.
```

## KI-Skills

- [configuration-management](../../../../skills/configuration-management/SKILL.md): nutzen Sie ihn, um Assets mit den Services zu verknüpfen, die sie unterstützen.
- [data-governance](../../../../skills/data-governance/SKILL.md): nutzen Sie ihn für Verantwortung und Klassifizierung von Daten-Assets.
- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): nutzen Sie ihn, um Entscheidungen zu Ersatz oder Stilllegung abzuwägen.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): nutzen Sie ihn, um zu klären, wer für jede Asset-Kategorie rechenschaftspflichtig ist.

## Wichtige Quellen

- ISO/IEC 19770 (die Standards selbst): die Anforderungen und Hinweise zum IT-Asset-Management; lesen Sie die aktuellen Ausgaben beim Herausgeber.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik IT-Asset-Management durch den Eigentümer.
- Wikipedia, „Asset management“ und „Total cost of ownership“: Überblicke über die Ideen.
- Wikipedia, „Shadow IT“: Hintergrund zu ungesteuerter Technologie.

## Literaturverzeichnis

1. Asset management — Wikipedia — https://en.wikipedia.org/wiki/Asset_management
2. ISO/IEC 19770 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_19770
3. Asset tracking — Wikipedia — https://en.wikipedia.org/wiki/Asset_tracking
4. Inventory — Wikipedia — https://en.wikipedia.org/wiki/Inventory
5. Product lifecycle — Wikipedia — https://en.wikipedia.org/wiki/Product_lifecycle
6. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
7. Depreciation — Wikipedia — https://en.wikipedia.org/wiki/Depreciation
8. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
9. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
10. Digital asset management — Wikipedia — https://en.wikipedia.org/wiki/Digital_asset_management
11. Radio-frequency identification — Wikipedia — https://en.wikipedia.org/wiki/Radio-frequency_identification
