# Agilität skalieren

**Skalierungs-Frameworks wie das Scaled Agile Framework (SAFe), Large-Scale Scrum (LeSS) und Disciplined Agile helfen vielen Teams, an einem Produkt oder Service zu arbeiten, fügen aber Struktur und Kosten hinzu. Verringern Sie zuerst Abhängigkeiten und die Zahl der Teams und übernehmen Sie ein Framework nur für die Koordinationsprobleme, die bleiben.**

## Warum das wichtig ist

Agile Praxis wurde zuerst für ein einzelnes kleines Team beschrieben, das zusammensitzen, gemeinsam planen und gemeinsam ausliefern konnte. Reale Services sind größer. Die mobile App einer Bank, die Patientenakte eines Krankenhauses oder die Verkehrsplattform einer Stadt braucht Dutzende oder Hunderte Menschen, viele Teams, geteilte Komponenten und Lieferanten. Diese Teams hängen voneinander ab, und die Abhängigkeiten bremsen sie.

Skalierungs-Frameworks bieten Wege zur Koordination. Sie schlagen Rollen, Ereignisse und Artefakte vor, damit viele Teams im Gleichschritt planen und ausliefern können. Manche haben große Gefolgschaften, Schulungsprogramme und Zertifizierungsschemata. Sie ziehen auch Kritik auf sich: dass sie schwere Planung und Hierarchie unter agilen Namen wieder einführen, dass sie als Programm für die Organisation verkauft werden, obwohl das eigentliche Problem Architektur oder Verantwortung ist, und dass sie Vokabular schneller verbreiten als Verhalten.

Ein Service-Manager begegnet Skalierungs-Frameworks in der Praxis, weil die Teams, die Services betreiben, sich mit Plattform-, Sicherheits- und Lieferantenteams abstimmen. Dieses Thema erklärt die wichtigsten Optionen neutral, fragt, wann Skalierung hilft, und sagt, was Sie versuchen sollten, bevor Sie ein Framework übernehmen. Es beschreibt Frameworks, wo möglich, nach den eigenen Beschreibungen ihrer Eigentümer; prüfen Sie deren aktuelle Publikationen, denn Versionen ändern sich.

## Kernkonzepte

**Das Skalierungsproblem.** Wenn mehr als eine Handvoll Teams zu einem Ergebnis beitragen, wachsen drei Dinge: Abhängigkeiten (ein Team wartet auf ein anderes), Koordinationsaufwand (Planung und Kommunikation) und das Risiko uneinheitlicher Entscheidungen. Das Brooks'sche Gesetz (Brooks's law), aus einem Buch von Fred Brooks von 1975 und auf Wikipedia beschrieben, beobachtet, dass zusätzliche Personen in einem verspäteten Projekt es wegen der Kommunikationskosten tendenziell weiter verzögern. Skalierung bedeutet weitgehend, diese Kosten zu begrenzen.

**Das Conway'sche Gesetz (Conway's law).** Die Beobachtung, dass der Entwurf eines Systems dazu neigt, die Kommunikationsstruktur der Organisation abzubilden, die es baut. Sind Teams nach technischer Schicht organisiert, hat das System Schichtgrenzen, und jede Funktion braucht alle Teams. Viele Skalierungsprobleme sind Strukturprobleme; siehe Thema 1.6 — Vier Dimensionen des Service-Managements.

**SAFe.** Das Scaled Agile Framework ist eine Gruppe von Organisations- und Arbeitsablaufmustern von Scaled Agile, Inc. zur Umsetzung von Agilität im Unternehmensmaßstab. Es ordnet Teams in Gruppen, die in festen Inkrementen gemeinsam planen, und bietet Konfigurationen für verschiedene Größen, darunter Portfolio-, Large-Solution- und Essential-Ebene. Es wird in großen Unternehmen weit genutzt und hat detaillierte Anleitungen und Zertifizierung. Kritiker verweisen auf seine Größe und seine Planungszyklen.

**LeSS.** Large-Scale Scrum, von Craig Larman und Bas Vodde geschaffen, erweitert Scrum auf viele Teams mit einem einzigen Product Backlog und einem einzigen Product Owner. Es betont Einfachheit und das Entfernen nicht benötigter Struktur und drückt die Ansicht aus, Skalierung solle „weniger“ Organisation bedeuten. Es setzt voraus, dass Teams Scrum nutzen. Siehe less.works für die eigene Beschreibung.

**Disciplined Agile.** Ein Werkzeugkasten, ursprünglich von Scott Ambler und Mark Lines, auf Wikipedia als Disciplined Agile Delivery beschrieben, der für jeden Aspekt der Lieferung eine Auswahl an Optionen bietet und Teams ermutigt zu wählen, was zu ihrem Kontext passt. Er wird heute vom Project Management Institute gepflegt. Der Name des Frameworks enthält das Wort „Delivery“ und wird hier als Eigenname zitiert.

**Scrum of Scrums.** Ein Muster, in dem sich eine Vertretung jedes Teams regelmäßig mit anderen trifft, um teamübergreifend zu koordinieren. Es ist einfach und funktioniert für eine kleine Zahl von Teams.

**Andere Ansätze.** Manche Organisationen übernehmen ein Modell, das davon inspiriert ist, wie ein bestimmtes Unternehmen beschrieben wird. Veröffentlichte Beschreibungen der Squads, Tribes, Chapters und Gilden eines Musikunternehmens wurden vielfach kopiert, obwohl Beteiligte gesagt haben, es sei eine Momentaufnahme eines Experiments gewesen und kein Framework zur Übernahme. Behandeln Sie solche Beschreibungen als Ideenquellen, nicht als Rezepte.

**Team Topologies und Verantwortung.** Ein Ansatz, der eine kleine Zahl von Teamtypen (Stream-aligned, Platform, Enabling, Complicated-Subsystem) und ihre Interaktionsmodi beschreibt, mit dem Ziel, Abhängigkeiten zu verringern. Er ist eine Art, über Struktur nachzudenken, und ergänzt eine Framework-Wahl oder kann sie in manchen Organisationen ersetzen.

**Business Agility.** Eine breitere Idee, dass die ganze Organisation, einschließlich Finanzen, Personalwesen und Governance, auf Veränderung reagieren muss, nicht nur Delivery-Teams. Wikipedia beschreibt sie unter Business agility. Teams zu skalieren, ohne Budgetierung oder Governance zu ändern, scheitert oft.

**Service-Teams im großen Maßstab.** Betriebs-, Support- und Plattformteams bedienen viele Produktteams, und ihre Arbeit passt nicht sauber in Planungsinkremente. Sie brauchen klare Schnittstellen, etwa einen Service-Katalog und vereinbarte Service-Levels, und Kapazität für Unterbrechungen. Siehe Thema 2.8 — Produkt- und Service-Verantwortung und Thema 3.8 — Service-Katalog-Management.

**Wie die Blickwinkel passen.** Skalierung betrifft den agilen Blickwinkel in organisatorischer Größe. KI kann helfen, Abhängigkeiten und Pläne zusammenzufassen, unter Prüfung. Automatisierung kann Abhängigkeiten in Werkzeugen zeigen und Pläne konsistent halten. Analytik kann zeigen, wo Arbeit auf andere Teams wartet.

## Bewährte Praktiken

1. **Verringern Sie Abhängigkeiten, bevor Sie sie koordinieren.** Suchen Sie Wege, Teams unabhängig zu machen: klarere Verantwortung, bessere Schnittstellen, geteilte Komponenten mit eigenem Team oder das Zusammenlegen von Teams, die immer zusammenarbeiten.
2. **Richten Sie Teams am Fluss des Werts aus.** Organisieren Sie Teams um einen Service oder eine Kundenreise, sodass ein Team eine Änderung von der Idee bis in die Produktion liefern kann. Vermeiden Sie Teams, die nur eine technische Schicht verantworten.
3. **Beginnen Sie mit der kleinsten Koordination, die funktioniert.** Für wenige Teams genügen womöglich regelmäßige Gespräche und ein gemeinsames Board. Ergänzen Sie Struktur erst, wenn ein Problem zeigt, dass Sie sie brauchen.
4. **Wählen Sie ein Framework für ein benanntes Problem.** Schreiben Sie das Koordinationsproblem auf, etwa „fünf Teams teilen sich ein Release, und Blockaden sind häufig“, und fragen Sie, welches Framework oder welche Praktik es adressiert. Übernehmen Sie kein Framework, weil es beliebt ist.
5. **Halten Sie ein sichtbares Backlog und eine Priorität für ein gemeinsames Ergebnis.** Viele Teams, die nach unterschiedlichen Prioritätenlisten arbeiten, erzeugen Konflikt. Vereinbaren Sie, wer teamübergreifend die Priorität entscheidet.
6. **Machen Sie Abhängigkeiten sichtbar.** Zeigen Sie auf einem Board oder einer Karte, welches Team auf welches wartet. Prüfen Sie die größten und entscheiden Sie, ob Sie jede beseitigen oder steuern.
7. **Stellen Sie Plattformen als Services bereit.** Wenn ein Plattformteam andere bedient, behandeln Sie die anderen Teams als Kunden, veröffentlichen Sie Schnittstellen und messen Sie, ob sie helfen. Siehe Thema 2.5 — DevOps.
8. **Beziehen Sie Betrieb und Lieferanten in die Planung ein.** Nehmen Sie Service- und Lieferantenteams in die teamübergreifende Planung auf, damit Anforderungen an Betrieb und Support nicht erst beim Start entdeckt werden.
9. **Passen Sie Budgetierung und Governance an.** Stabile Teams und Ergebnisse zu finanzieren und die Governance schlank und belegbasiert zu halten, unterstützt skalierte Lieferung besser als Finanzierung von Projekt zu Projekt.
10. **Überprüfen Sie das Framework selbst.** Fragen Sie nach einem Jahr, ob es das Warten verringert und Ergebnisse verbessert hat. Streichen oder ändern Sie, was nicht hilft.

## Fragen für die Diskussion im Team

**Auf welche Teams warten wir am meisten, und warum?**
Das findet Abhängigkeiten. Menschen nennen meist wiederholt einige wenige Teams. Bitten Sie um reale Beispiele mit Daten. Fragen Sie anschließend, was die Abhängigkeit verschwinden ließe, etwa das Verlagern einer Fähigkeit, einer Schnittstelle oder einer Entscheidung.

**Welches Problem würde ein Skalierungs-Framework für uns lösen, das wir nicht mit einer einfacheren Änderung lösen können?**
Das prüft, ob ein Framework nötig ist. Teams nennen oft allgemeine Ausrichtung. Drängen Sie auf Konkretes. Wählen Sie anschließend die kleinste Änderung, die wir zuerst ausprobieren.

**Wie sind unsere Teams organisiert, nach Schicht, Komponente oder Reise, und was kostet uns das?**
Struktur prägt Abhängigkeiten. Fragen Sie, wie viele Teams eine typische Änderung berührt. Rechnen Sie mit Antworten von drei bis sechs. Skizzieren Sie anschließend eine alternative Struktur für eine Reise.

**Wer entscheidet über die Priorität, wenn die Arbeit zweier Teams kollidiert?**
Unklare Entscheidungsrechte verschwenden Zeit. Vielleicht hören Sie, es hänge davon ab oder Führungskräfte entschieden spät. Bitten Sie um das letzte Beispiel. Vereinbaren Sie anschließend für jede Art von Konflikt eine entscheidende Person und eine Frist.

**Wie unterstützt oder behindert unser Finanzierungsmodell Teams, die zusammenbleiben und Services verantworten?**
Projektbasierte Finanzierung löst Teams auf und verliert Wissen. Fragen Sie, wie lange Teams zusammenbleiben und wer Verbesserung finanziert. Listen Sie anschließend einen Service auf, der von stabiler Finanzierung profitieren würde.

**Wie könnte KI uns helfen, Abhängigkeiten zu sehen und zu steuern, und was könnte schiefgehen?**
KI kann Pläne und Tickets lesen und Verknüpfungen vorschlagen. Sie kann auch Abhängigkeiten erfinden oder echte übersehen. Fragen Sie, wer prüft und wie oft. Vergleichen Sie anschließend eine von KI erzeugte Karte mit einer, die zwei Teams gezeichnet haben.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Digitalabteilung einer nationalen Bahn hat elf Teams, die an einem Reiseplanungs-Service arbeiten: Web, Mobil, Fahrplandaten, Echtzeit-Feeds, Zahlungen, Barrierefreiheit und weitere. Releases erfordern, dass alle elf Teams bereit sind, und eine Verzögerung bei einem hält die übrigen auf. Der Direktor der Abteilung wurde beraten, ein großes Skalierungs-Framework mit einem Schulungsprogramm und neuen Rollen einzuführen.

Die Service-Verantwortliche bittet um zwei Wochen, um zuerst Abhängigkeiten zu kartieren. Sie zeichnet ein Board mit jedem Team und den Punkten, auf die es im letzten Quartal gewartet hat. Vier Teams verursachen den Großteil des Wartens: Das Fahrplandaten-Team ist ein Engpass für drei andere; Zahlungen hängen vom Release-Zyklus eines Lieferanten ab; Barrierefreiheits-Reviews erfolgen spät durch ein separates Team; und ein geteiltes Design-System hat keine verantwortliche Stelle. Sie schlägt vier Änderungen vor: zwei Dateningenieure in die Teams zu verlegen, die am meisten warten, die Fahrplandaten über eine dokumentierte Schnittstelle zu veröffentlichen, die Teams lesen können, ohne zu fragen, Barrierefreiheitsspezialisten in die Mobil- und Web-Teams zu setzen und das Design-System einem benannten Team zu geben, das andere als Kunden behandelt.

Der Direktor stimmt zu, das ein Quartal lang zu erproben und alle sechs Wochen eine kurze teamübergreifende Planungssitzung zu halten, mit einer einzigen sichtbaren Prioritätenliste für das gemeinsame Ergebnis. Ein Framework wird zurückgestellt.

Was sich ändert: Die Zahl der Punkte, die auf andere Teams warten, sinkt, und Releases brauchen nicht mehr alle elf Teams bereit. Was schwierig bleibt: Zahlungen hängen weiter vom Zeitplan des Lieferanten ab; über die gemeinsame Prioritätenliste wird in jeder Sitzung gestritten; und der Budgetprozess der Abteilung finanziert Projekte, sodass zwei Teams zum Jahresende aufgelöst werden. Die Service-Verantwortliche sagt dem Direktor, dass die Verbesserungen ohne Änderung der Finanzierung möglicherweise nicht halten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Suchen Sie Wege, Abhängigkeiten von anderen Teams zu beseitigen, und machen Sie die, die bleiben, sichtbar. Nehmen Sie an teamübergreifender Planung teil und halten Sie den laufenden Service in Ihren Plänen.

### Service- und Betriebsteams

Bieten Sie klare Schnittstellen, etwa einen Katalog von Services und vereinbarte Levels. Nehmen Sie an der Planung teil, damit Anforderungen an Betrieb und Support früh bekannt sind, und bringen Sie Daten zu Unterbrechungen und Wartezeiten in das Gespräch ein.

### Führung und Governance

Fragen Sie, welches Koordinationsproblem ein Framework lösen würde und woran Sie erkennen, dass es das tat. Ändern Sie Finanzierung und Governance passend zu stabilen, ergebnisorientierten Teams. Benennen Sie, wer teamübergreifend die Priorität entscheidet.

### Kunden und Nutzer

Sie sollten einen Service erleben, der sich stimmig ändert, nicht eine Reihe unverbundener Releases. Sagen Sie dem Anbieter, wo sich Funktionen oder Erlebnisse uneinheitlich anfühlen, denn das offenbart oft Koordinationsprobleme.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Halten Sie Stakeholder über Teams hinweg eingebunden, liefern Sie in kleinen Stücken und verbessern Sie, wie Teams koordinieren. Vorsicht: Skalierte Planungsereignisse können verkappte große Lose werden; halten Sie sie kurz und die Releases klein.

### KI

KI kann teamübergreifende Backlogs zusammenfassen, Abhängigkeitsverknüpfungen vorschlagen und Planungsnotizen entwerfen, unter menschlicher Prüfung. Benennen Sie für jede Nutzung eine verantwortliche Person. Vorsicht: KI-Zusammenfassungen von Plänen können Meinungsverschiedenheiten einebnen; lassen Sie Menschen die Abwägungen treffen. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie die Verfolgung von Abhängigkeiten in Ihren Werkzeugen, gemeinsame Pipelines und einheitliche Umgebungen, damit Koordination weniger auf Besprechungen angewiesen ist. Vorsicht: Werkzeuge, die einen starren Plan durchsetzen, können Flexibilität zunichtemachen; halten Sie sie eine Stütze für das Gespräch. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Messen Sie die Wartezeit zwischen Teams, die Zahl teamübergreifender Abhängigkeiten je Punkt und die Zeit von der Idee bis zum Release für ein gemeinsames Ergebnis. Vorsicht: Teams an diesen Kennzahlen zu vergleichen ignoriert den Kontext und lädt zu Manipulation ein; nutzen Sie sie, um strukturelle Probleme zu finden. Siehe Thema 7.6 — Prozess- und Wertstromanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Zuerst das Framework.** Ein großes Programm beginnt, bevor das Problem benannt ist. Kartieren Sie Abhängigkeiten und probieren Sie einfache Änderungen.
- **Teams nach Schicht organisiert.** Jede Änderung braucht jedes Team. Organisieren Sie um die Reise herum.
- **Koordinationsbesprechungen vermehren sich.** Menschen verbringen ihre Woche in Planungen. Verringern Sie Abhängigkeiten und die Zahl der Ereignisse.
- **Unklare teamübergreifende Priorität.** Teams ziehen in verschiedene Richtungen. Benennen Sie eine entscheidende Person.
- **Finanzierung unverändert.** Projektfinanzierung reißt Teams auseinander. Finanzieren Sie stabile Teams und Ergebnisse.
- **Das Modell eines anderen Unternehmens kopieren.** Der Kontext unterscheidet sich. Behandeln Sie es als Ideen, nicht als Rezept.
- **Plattform als Mandat.** Teams umgehen sie. Behandeln Sie andere Teams als Kunden.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Abhängigkeiten | Unbekannt | Wichtigste Abhängigkeiten bekannt | Abhängigkeiten sichtbar und mit Verantwortlichen versehen | Abhängigkeiten anhand von Belegen verringert | Teams weitgehend unabhängig, mit klaren Schnittstellen |
| Struktur | Teams nach Schicht | Einige an der Reise ausgerichtete Teams | Teams am Fluss des Werts ausgerichtet | Struktur anhand von Ergebnissen überprüft | Struktur passt sich über Services und Partner hinweg an |
| Koordination | Ad hoc | Regelmäßige Gespräche | Leichte, regelmäßige teamübergreifende Planung | Koordinationsaufwand gemessen | Koordination durch geteilte Werkzeuge und Schnittstellen gestützt |
| Finanzierung und Governance | Projektfinanzierung | Einige stabile Teams | Stabile Teams und ergebnisbasierte Governance | Finanzierung an Ergebnissen überprüft | Finanzierung und Governance passen sich im Portfolio an |

## Checkliste

- [ ] Wir haben Abhängigkeiten zwischen Teams mit realen Beispielen kartiert.
- [ ] Wir haben versucht, Abhängigkeiten zu verringern, bevor wir ein Framework übernehmen.
- [ ] Teams sind, wo möglich, an einer Reise oder einem Service ausgerichtet.
- [ ] Es gibt eine namentlich benannte entscheidende Person für die teamübergreifende Priorität.
- [ ] Plattform- und Service-Teams veröffentlichen Schnittstellen und behandeln andere als Kunden.
- [ ] Teamübergreifende Planung ist kurz und bezieht Betrieb und Lieferanten ein.
- [ ] Die Finanzierung unterstützt stabile Teams.
- [ ] Wir überprüfen das gewählte Framework jährlich an den Ergebnissen.

## KI-Prompts

**Entwerfen Sie aus Notizen eine Abhängigkeitskarte.**

```text
Here are notes on what each team waited for in the last quarter: [paste notes].
List each dependency as "team A waits for team B for X", count how often each appears, and list the five most frequent. Do not infer reasons.
List what you are unsure of.
```

**Vergleichen Sie Strukturoptionen.**

```text
Our service involves these teams and what each owns: [paste]. A typical change needs: [describe].
Describe two alternative ways to organize the teams around the journey, with the trade-offs of each. Mark assumptions. Do not recommend a framework.
List what you are unsure of.
```

**Bereiten Sie eine Tagesordnung für teamübergreifende Planung vor.**

```text
We have [number] teams planning together for [period]. The shared outcome is: [describe]. The top dependencies are: [list].
Draft a 90-minute agenda that focuses on dependencies and priorities, with time for each, and questions to ask. Keep it short and avoid framework jargon.
List what you are unsure of.
```

## KI-Skills

- [scaled-agile-framework](../../../../skills/scaled-agile-framework/SKILL.md): nutzen Sie ihn, um Rollen und Ereignisse von SAFe zu verstehen, bevor Sie entscheiden, ob es passt.
- [large-scale-scrum](../../../../skills/large-scale-scrum/SKILL.md): nutzen Sie ihn, um LeSS und seine Annahmen zu verstehen.
- [disciplined-agile](../../../../skills/disciplined-agile/SKILL.md): nutzen Sie ihn, um die Optionen zu sehen, die Disciplined Agile für einen Kontext bietet.
- [scrum-of-scrums](../../../../skills/scrum-of-scrums/SKILL.md): nutzen Sie ihn für ein leichtes Muster teamübergreifender Koordination.

## Wichtige Quellen

- Craig Larman und Bas Vodde, LeSS (less.works): die Beschreibung von Large-Scale Scrum durch die Urheber.
- Scaled Agile, Inc., SAFe (scaledagileframework.com): die eigene Seite des Frameworks.
- Matthew Skelton und Manuel Pais, *Team Topologies* (2019): eine Art, über Teamstruktur und Interaktion nachzudenken.
- Wikipedia, „Scaled agile framework“ und „Conway's law“: neutraler Hintergrund.

## Literaturverzeichnis

1. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
2. Disciplined agile delivery — Wikipedia — https://en.wikipedia.org/wiki/Disciplined_agile_delivery
3. Scrum (project management) — Wikipedia — https://en.wikipedia.org/wiki/Scrum_(project_management)
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Brooks's law — Wikipedia — https://en.wikipedia.org/wiki/Brooks%27s_law
6. Business agility — Wikipedia — https://en.wikipedia.org/wiki/Business_agility
7. Matrix management — Wikipedia — https://en.wikipedia.org/wiki/Matrix_management
8. Portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Portfolio_management
9. Large-Scale Scrum (LeSS) — Larman and Vodde — https://less.works
10. Scaled Agile Framework — Scaled Agile, Inc. — https://scaledagileframework.com
