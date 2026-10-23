# Die Service-Wertschöpfungskette

**Die Service-Wertschöpfungskette von ITIL 4 ist ein Betriebsmodell aus sechs Aktivitäten — Planen, Verbessern, Einbinden, Entwerfen und Überführen, Beschaffen oder Bauen sowie Liefern und Unterstützen —, die jeder Wertstrom in seiner eigenen Reihenfolge durchläuft. Nutzen Sie es, um zu finden, wo Arbeit wartet und wer jede Übergabe verantwortet.**

## Warum das wichtig ist

Arbeit in einer Service-Organisation bewegt sich selten geradlinig. Eine Anfrage trifft ein, jemand stellt eine Rückfrage, ein Change wird entworfen, ein Lieferant wird angerufen, der Change wird ausgerollt, und der Support übernimmt. Jeder Schritt gehört zu einem anderen Team, und niemand sieht den ganzen Weg. Das Ergebnis ist Verzögerung, die kein einzelnes Team verursacht hat und kein einzelnes Team beheben kann.

Die Service-Wertschöpfungskette gibt diesem Weg eine Gestalt. Sie benennt sechs Aktivitäten, die zusammen Nachfrage in Wert verwandeln, und erlaubt es, eine konkrete Reise, einen Wertstrom, als Route durch diese Aktivitäten zu beschreiben. Weil die Aktivitäten generisch sind, passt dasselbe Modell auf ein Software-Release, eine Laptop-Anfrage oder einen Incident, mit jeweils anderen Routen.

Dieses Thema erklärt die sechs Aktivitäten, wie sich Wertströme von der Kette unterscheiden und wie Sie das Modell auf reale Arbeit anwenden. Es beschreibt ITIL 4, die weithin dokumentierte Version. ITIL (Version 5), 2026 von PeopleCert eingeführt, stellt das Betriebsmodell möglicherweise anders dar; prüfen Sie die Seiten des Eigentümers, bevor Sie es als aktuell zitieren (siehe Thema 1.3 — ITIL 5).

## Kernkonzepte

**Die sechs Aktivitäten.** In ITIL 4 sind es:

| Aktivität | Zweck in einfachen Worten |
|---|---|
| Planen | Ein gemeinsames Verständnis von Vision, Ist-Zustand und Richtung in der gesamten Organisation erhalten |
| Verbessern | Services, Praktiken und Produkte laufend besser machen |
| Einbinden | Die Bedürfnisse der Stakeholder verstehen und gute Beziehungen und Transparenz pflegen |
| Entwerfen und Überführen | Sicherstellen, dass Produkte und Services die Erwartungen an Qualität, Kosten und Markteinführungszeit erfüllen |
| Beschaffen oder Bauen | Sicherstellen, dass Komponenten zur rechten Zeit am rechten Ort verfügbar sind und die Spezifikation erfüllen |
| Liefern und Unterstützen | Sicherstellen, dass Services gemäß der vereinbarten Spezifikation und den Erwartungen geliefert und unterstützt werden |

**Eingaben und Ausgaben.** Die Kette nimmt zwei Arten von Eingaben auf: Chancen und Nachfrage von außen sowie die Ergebnisse anderer Aktivitäten von innen. Jede Aktivität erzeugt Ausgaben, die andere Aktivitäten speisen, und die gesamte Kette erzeugt Produkte und Services für Konsumenten. Wert entsteht, wenn Konsumenten den Service nutzen, nicht wenn die Kette endet.

**Wertstrom.** Eine Folge von Schritten, die eine Organisation unternimmt, um Produkte und Services für Konsumenten zu schaffen und zu liefern. Ein Wertstrom ist konkret: „einen Major Incident lösen“, „eine neue Mitarbeiterin einarbeiten“, „eine Änderung an einer mobilen App ausliefern“. Jeder folgt seinem eigenen Weg durch die Aktivitäten. Die Wikipedia-Artikel zu Value stream und zu Value-stream mapping erklären die Idee und ihre schlanken (Lean) Ursprünge.

**Nicht Porters Wertschöpfungskette.** Der Managementwissenschaftler Michael Porter beschrieb 1985 für Fertigungsunternehmen eine „Wertschöpfungskette“ mit primären und unterstützenden Aktivitäten. Die Kette von ITIL übernimmt den Namen und die Idee wertschaffender Aktivitäten, beschreibt aber den Service-Betrieb und ist nicht dasselbe Modell. Prüfen Sie beim Lesen älterer Unterlagen, welches gemeint ist.

**Aktivitäten sind keine Teams oder Phasen.** Eine Aktivität ist eine Art von Arbeit, keine Abteilung. In einer kleinen Organisation kann eine Person alle sechs an einem Tag ausführen. In einer großen kann dieselbe Aktivität an vielen Orten stattfinden. Die Kette gibt keine Reihenfolge vor; das tut der Wertstrom.

**Praktiken tragen zu Aktivitäten bei.** Jede Praktik, etwa Incident-Management oder Change Enablement, unterstützt eine oder mehrere Aktivitäten. Die Zuordnung von Praktiken zu Aktivitäten zeigt Überschneidungen und Lücken (siehe Thema 1.4 — Das Service-Wertschöpfungssystem). Eine Change-Enablement-Praktik kann zum Beispiel Entwerfen und Überführen, Beschaffen oder Bauen sowie Liefern und Unterstützen berühren.

**Fluss und Warten.** Die nützliche Frage zu einem Wertstrom lautet nicht, wie lange jeder Schritt dauert, sondern wo die Arbeit wartet. In den meisten Organisationen verbringt Arbeit weit mehr Zeit mit Warten zwischen den Aktivitäten als mit Bearbeitung. Die schlanke Tradition der Wertstromkartierung, behandelt in Thema 2.4 — Lean und Kaizen und Thema 7.6 — Prozess- und Wertstromanalyse, besteht, um dies sichtbar zu machen.

**Continuous Delivery als Wertstrom.** Eine Softwareänderung auf dem Weg von der Idee in die Produktion durchläuft Planen, Einbinden, Entwerfen und Überführen, Beschaffen oder Bauen sowie Liefern und Unterstützen, wobei Verbessern nebenherläuft. Continuous-Delivery-Praktiken verkürzen die Wartezeiten dazwischen (siehe Thema 2.2 — Continuous Delivery).

**Wie die Blickwinkel passen.** Agilität verkürzt die Schleifen innerhalb der Kette und erhöht die Beteiligung der Stakeholder bei „Einbinden“. KI kann innerhalb von Aktivitäten unterstützen, etwa Anfragen bei „Einbinden“ zusammenzufassen oder Tests bei „Entwerfen und Überführen“ vorzuschlagen. Automatisierung bewegt Arbeit ohne manuelle Übergaben zwischen Aktivitäten. Analytik misst den Fluss durch die Kette.

## Bewährte Praktiken

1. **Kartieren Sie reale Wertströme, nicht die Kette im Allgemeinen.** Wählen Sie einen konkreten Strom, etwa die Bearbeitung einer Kundenanfrage um Zugang, und verfolgen Sie ein jüngeres Beispiel von Anfang bis Ende. Verwenden Sie reale Daten.
2. **Markieren Sie die Aktivitäten, zu denen jeder Schritt gehört.** Beschriften Sie jeden Schritt der Verfolgung mit der Aktivität, der er dient. Oft finden Sie mehrere Schritte in einer Aktivität und keinen in einer anderen, und das ist ein Befund.
3. **Messen Sie Warten getrennt von Arbeiten.** Halten Sie fest, wie lange gearbeitet wurde und wie lange die Arbeit in einer Warteschlange lag. Berichten Sie beides; die Lücke überrascht meist.
4. **Finden Sie die Übergaben.** Fragen Sie jedes Mal, wenn Arbeit von einem Team an ein anderes übergeht, welche Informationen mitreisen und was verloren geht. Wiederholte Nacharbeit lässt sich oft auf eine schlechte Übergabe zurückführen.
5. **Behandeln Sie „Einbinden“ als vollwertige Aktivität.** Viele Service-Teams planen und liefern gut und binden schlecht ein. Prüfen Sie, dass Stakeholder von Anfang an einbezogen sind und Feedback zu den Entscheidenden zurückkehrt.
6. **Machen Sie „Verbessern“ in jedem Strom sichtbar.** Suchen Sie, wo Verbesserungsideen in den Strom eintreten und wer sie prüft. Gibt es keinen Eintrittspunkt, hängt Verbesserung von Heldentaten ab.
7. **Benennen Sie für jeden Wertstrom eine verantwortliche Person.** Eine Person ist für den Fluss des Stroms durchgängig rechenschaftspflichtig und kann Teams um Änderungen bitten. Ohne Verantwortliche optimiert jedes Team seinen eigenen Teil.
8. **Nutzen Sie die Kette, um Automatisierung zu platzieren.** Suchen Sie Schritte, die stabil, wiederholt und verstanden sind, und automatisieren Sie diese, mit Protokollen. Automatisieren Sie keinen Schritt, der nur das Symptom einer fehlenden Entscheidung ist.
9. **Überprüfen Sie die Karte nach Änderungen.** Neue Lieferanten, Werkzeuge oder KI-Assistenten verändern die Route. Zeichnen Sie den Strom neu und fragen Sie, was sich verschoben hat.
10. **Halten Sie das Modell schlank.** Wird die Karte zu einem großen Diagramm, das niemand nutzt, vereinfachen Sie sie. Eine Seite, die Wartezeiten zeigt, ist mehr wert als ein vollständiges Schaubild.

## Fragen für die Diskussion im Team

**Welcher Wertstrom ist für unsere Kunden am wichtigsten, und wer verantwortet ihn durchgängig?**
Das beginnt bei der Verantwortung. Menschen nennen oft einen Prozess, aber keine Person. Vielleicht finden Sie mehrere Verantwortliche für Teile und keine für das Ganze. Wählen Sie anschließend einen Strom und eine rechenschaftspflichtige Person, die es ein Quartal lang ausprobiert.

**Wo hat das letzte Arbeitsstück am längsten gewartet, und warum?**
Nutzen Sie ein reales Beispiel mit Daten. Typische Antworten sind Genehmigungen, Warteschlangen für Spezialisten und das Warten auf Informationen von einem Kunden. Fragen Sie, worauf die Arbeit wartete, nicht wer langsam war. Fragen Sie anschließend, was die Wartezeit beseitigen würde.

**Welche der sechs Aktivitäten beherrschen wir am schlechtesten?**
Teams nennen bei ehrlicher Frage meist „Einbinden“ oder „Verbessern“. Bitten Sie um Belege: eine verpasste Anforderung, eine Verbesserungsidee, auf die niemand reagiert hat. Wählen Sie anschließend eine kleine Änderung in dieser Aktivität.

**Welche Information geht an unserer größten Übergabe verloren?**
Fragen Sie das empfangende Team, was es gern gewusst hätte. Rechnen Sie mit fehlendem Kontext, unklarer Priorität und fehlender Historie. Vereinbaren Sie anschließend ein Feld oder ein Gespräch, das mit der Arbeit reist.

**Welche Schritte in unserem Strom gibt es nur wegen einer fehlenden Entscheidung?**
Manche Schritte, etwa wiederholte Genehmigungen, vertreten eine Regel, die niemand aufgeschrieben hat. Fragen Sie, wer die Arbeit genehmigen würde, wenn die Regel existierte, und was die Regel sagen würde. Entwerfen Sie anschließend die Regel für einen Fall.

**Was würden wir im Strom anders machen, wenn ein KI-Assistent bei jedem Schritt entwerfen, zusammenfassen oder weiterleiten könnte?**
Das zeigt, wo KI helfen könnte und wo sie Risiko hinzufügen würde. Fragen Sie nach Verantwortlichen und Prüfpunkten. Wählen Sie anschließend einen risikoarmen Schritt, den wir erproben, wobei ein Mensch jede Ausgabe prüft.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer Universität bearbeitet Anfragen zur Einrichtung von Umgebungen für Forschungsrechnen für neue Projekte. Forschende klagen, es dauere Wochen. Der Service-Verantwortliche verfolgt eine jüngere Anfrage durch die Wertschöpfungskette.

Die Anfrage kommt per E-Mail an (Einbinden), wird in drei Austauschrunden geklärt, von einer Fördermittel-Verantwortlichen genehmigt, an ein Infrastruktur-Team weitergegeben, das die Umgebung aufbaut (Beschaffen oder Bauen), von einem zweiten Team getestet (Entwerfen und Überführen) und mit einer kurzen Notiz an den Support übergeben (Liefern und Unterstützen). Die gesamte verstrichene Zeit beträgt 23 Arbeitstage. Die reine Bearbeitungszeit, aus den Beiträgen der Beteiligten summiert, liegt unter vier Tagen. Der Rest ist Warten: auf Klärungen, auf die Genehmigung und auf die Warteschlange des zweiten Teams.

Die Abteilung nimmt drei Änderungen vor. Sie ersetzt den E-Mail-Austausch durch ein kurzes Formular, das die Fragen stellt, die in jedem Fall gestellt wurden, genehmigt Anfragen unterhalb einer Fördergrenze vorab und bittet das Infrastruktur-Team, grundlegende Tests als Teil des Aufbaus durchzuführen, wobei das zweite Team eine Stichprobe prüft. Außerdem benennt sie den Leiter des Forschungsrechnens als verantwortliche Person des Stroms.

Was sich ändert: Dieselbe Art von Anfrage dauert jetzt etwa neun Arbeitstage, gemessen an den nächsten Anfragen, die das Team verfolgt. Was schwierig bleibt: Die Grenze für die Vorabgenehmigung hängt von einer Finanzregel ab, die die Abteilung nicht kontrolliert, und das Stichprobenverfahren ist mit dem Sicherheitsteam noch nicht abgestimmt, sodass manche Umgebungen weiter auf Prüfung warten. Der Verantwortliche führt beides für den nächsten Verbesserungs-Review auf.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Behandeln Sie Ihre Delivery-Pipeline als Wertstrom und verfolgen Sie eine Änderung von der Idee bis zum laufenden Service. Zeigen Sie die Wartezeiten und arbeiten Sie mit dem Betrieb an der Übergabe zu „Liefern und Unterstützen“. Nehmen Sie die Aktivität „Einbinden“ in Ihre Pläne auf, mit früh einbezogenen Kunden.

### Service- und Betriebsteams

Sie verantworten einen Großteil von „Liefern und Unterstützen“ und empfangen Übergaben von anderen. Halten Sie bei jeder Übergabe fest, was Sie brauchten und nicht erhielten, und bringen Sie das zur verantwortlichen Person des Stroms. Bieten Sie an, Entwürfe früh zu prüfen, wenn Änderungen noch billiger sind.

### Führung und Governance

Verlangen Sie, dass Wertströme durchgängig verantwortet und gemessen werden. Schauen Sie auf die Wartezeiten, nicht nur auf den Aufwand. Finanzieren Sie die Übergaben sowie die Aktivitäten „Einbinden“ und „Verbessern“, die sich leicht aushungern lassen.

### Kunden und Nutzer

Sie sehen den Strom von außen: Eine Anfrage geht hinein, und später kommt etwas zurück. Fragen Sie den Anbieter, welche Schritte es gibt und wo Ihre Anfrage steht. Sagen Sie ihm, wo man Sie zweimal dasselbe gefragt hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Nutzen Sie kurze Zyklen innerhalb jeder Aktivität, mit durchgängig eingebundenen Beteiligten, und behandeln Sie die Stromkarte als Backlog von Verbesserungen. Vorsicht: Eine Aktivität zu beschleunigen, etwa das Bauen, verbessert den Strom nicht, wenn die nächste Aktivität der Engpass ist.

### KI

KI kann innerhalb von Aktivitäten unterstützen: einen langen Anfrageverlauf bei „Einbinden“ zusammenfassen, Testfälle bei „Entwerfen und Überführen“ entwerfen oder bei „Liefern und Unterstützen“ einen Wissensartikel vorschlagen. Weisen Sie eine verantwortliche Person zu, lassen Sie einen Menschen die Ausgaben prüfen und protokollieren Sie, was genutzt wurde. Vorsicht: Ein KI-Schritt, der Arbeit falsch weiterleitet, fügt eine neue Art von Wartezeit hinzu; verfolgen Sie Korrekturen. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie Übergaben und Routineschritte, etwa einen Datensatz anzulegen und das nächste Team zu benachrichtigen, damit Arbeit sich bewegt, ohne dass jemand daran denken muss. Führen Sie ein Protokoll und einen Weg zur Umkehrung. Vorsicht: Automatisierung kann einen Strom auf einen Engpass zu beschleunigen und die Warteschlange verlängern. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Nutzen Sie Zeitstempel an den Aktivitätsgrenzen, um Durchlaufzeit, Bearbeitungszeit und Wartezeit für jeden Strom zu berechnen. Vorsicht: Zeitstempel hängen davon ab, wie Menschen Ticket-Status verwenden, und eine Kennzahl „Zeit in der Aktivität“ lässt sich manipulieren, indem Tickets zwischen Status verschoben werden; prüfen Sie sie anhand von Verfolgungen realer Arbeit. Siehe Thema 7.6 — Prozess- und Wertstromanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Die Kette zeichnen, nicht einen Strom.** Die sechs Kästen hängen an der Wand und beschreiben nichts. Verfolgen Sie eine reale Anfrage mit Daten.
- **Eine Aktivität optimieren.** Ein Team beschleunigt das Bauen, und der Strom bleibt langsam. Messen Sie durchgängig und finden Sie die längste Wartezeit.
- **„Einbinden“ und „Verbessern“ ignorieren.** Planung und Lieferung sind stark, Feedback ist schwach. Geben Sie beiden ausdrückliche Verantwortliche und Zeit.
- **Strom ohne Verantwortliche.** Jedes Team verteidigt seinen eigenen Schritt. Benennen Sie eine rechenschaftspflichtige Person für den Strom.
- **Die Kette mit Porters Modell verwechseln.** Lesende importieren die falschen Ideen. Sagen Sie, welches Modell Sie meinen.
- **Aktivitäten als Teams behandeln.** Das Modell wird zum Organigramm. Behalten Sie Aktivitäten als Arten von Arbeit, die viele Teams ausführen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Stromkartierung | Keine Karten | Ein Strom verfolgt | Wichtigste Ströme mit realen Daten kartiert | Karten aktualisiert und für Entscheidungen genutzt | Ströme über Teams, Lieferanten und Plattformen hinweg kartiert |
| Flussmessung | Nur Aufwand | Verstrichene Zeit bekannt | Bearbeitungs- und Wartezeit berichtet | Engpässe verfolgt und angegangen | Fluss über das gesamte System optimiert |
| Verantwortung | Teams verantworten Schritte | Verantwortliche für die wichtigsten Ströme | Jeder Schlüsselstrom hat eine verantwortliche Person | Verantwortliche prüfen Fluss und Kundenergebnisse | Verantwortliche stimmen sich über Ströme und Partner hinweg ab |
| Einbinden und Verbessern | Ad hoc | Etwas Feedback erfasst | Feedback und Verbesserung haben definierte Eintrittspunkte | Ergebnisse beider gemessen | Feedback und Verbesserung über Ströme hinweg verbunden |

## Checkliste

- [ ] Wir wissen, welche Wertströme für Kunden am wichtigsten sind.
- [ ] Jeder Schlüsselstrom hat eine namentlich benannte verantwortliche Person.
- [ ] Wir haben mindestens eine reale Anfrage mit Daten verfolgt.
- [ ] Wir kennen Bearbeitungs- und Wartezeit für diesen Strom.
- [ ] Wir haben die wichtigsten Übergaben identifiziert und wissen, was bei jeder verloren geht.
- [ ] „Einbinden“ und „Verbessern“ haben je einen definierten Eintrittspunkt.
- [ ] Wir haben Automatisierung auf stabile, wiederholte Schritte mit Protokollen gelegt.
- [ ] Wir zeichnen den Strom nach größeren Änderungen neu.

## KI-Prompts

**Analysieren Sie eine Verfolgung auf Wartezeiten.**

```text
Here is a trace of one request through our process, with timestamps and who handled each step: [paste trace].
Calculate for each step the elapsed time from the previous step, and list the three longest gaps. For each, suggest two questions to find out why the work waited. Do not assume causes.
List what you are unsure of.
```

**Beschriften Sie Schritte mit Aktivitäten der Wertschöpfungskette.**

```text
Below are the steps in our process for [stream name]: [paste steps].
Label each with one of the six ITIL 4 value chain activities (plan, improve, engage, design and transition, obtain or build, deliver and support) and give a one-line reason. Mark labels you are unsure about and list which activities have no steps.
Do not add steps.
```

**Entwerfen Sie Fragen für einen Übergabe-Review.**

```text
We hand work from [team A] to [team B] in the stream [name]. The information handed over is: [list].
Write ten questions to ask team B about what they need that they do not receive. Avoid suggesting answers.
List what you are unsure of.
```

## KI-Skills

- [value-stream-map](../../../../skills/value-stream-map/SKILL.md): nutzen Sie ihn, um einen Wertstrom zu kartieren und zu messen.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Schritte, Wartezeiten und Übergaben eines Prozesses zu analysieren.
- [kaizen](../../../../skills/kaizen/SKILL.md): nutzen Sie ihn, um Erkenntnisse in kleine Verbesserungsexperimente zu verwandeln.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der ITIL-Leitlinien und der neuesten Version durch den Eigentümer.
- Wikipedia, „Value stream“: das Konzept, das die Kette ordnet.
- Wikipedia, „Value-stream mapping“: die schlanke Technik, um Wartezeiten zu finden.
- Wikipedia, „Value chain“: Porters ursprüngliches Modell, um die beiden nicht zu verwechseln.

## Literaturverzeichnis

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Value chain — Wikipedia — https://en.wikipedia.org/wiki/Value_chain
4. Michael Porter — Wikipedia — https://en.wikipedia.org/wiki/Michael_Porter
5. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
6. Value-stream mapping — Wikipedia — https://en.wikipedia.org/wiki/Value-stream_mapping
7. Lean manufacturing — Wikipedia — https://en.wikipedia.org/wiki/Lean_manufacturing
8. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
9. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
