# Vier Dimensionen des Service-Managements

**ITIL 4 sagt, dass jeder Service durch vier Dimensionen betrachtet werden muss — Organisationen und Menschen, Informationen und Technologie, Partner und Lieferanten sowie Wertströme und Prozesse — und dass ein Service scheitert, wenn eine davon vernachlässigt wird, so gut die anderen auch umgesetzt sind.**

## Warum das wichtig ist

Wenn ein Service ein Problem hat, handelt die erste Erklärung meist von Technologie: ein Fehler, eine Kapazitätsgrenze, eine falsch gesetzte Einstellung. Manchmal stimmt das. Oft liegt die Wurzel woanders: ein Team, das nicht weiß, dass es den Service verantwortet, ein Lieferant, dessen Vertrag den Ausfall nicht abdeckt, oder ein Genehmigungsablauf, der die Behebung eine Woche dauern lässt.

Die vier Dimensionen sind eine Checkliste gegen enges Denken. Bei jedem Service und jeder Änderung stellen Sie vier Gruppen von Fragen. Wer leistet die Arbeit, und haben die Beteiligten dafür die Fähigkeiten, die Struktur und die Kultur? Welche Informationen und welche Technologie nutzt der Service, und was erzeugt er? Welche Partner und Lieferanten tragen bei, und zu welchen Bedingungen? Wie fließt die Arbeit, und was sind die Schritte und Regeln? Ein Service ist nur so stark wie seine schwächste Dimension, und eine Verbesserung in einer Dimension kann durch Vernachlässigung einer anderen verpuffen.

Dieses Thema erklärt die vier Dimensionen, wie ITIL 4 sie beschreibt, zeigt, wie Sie sie bei Entwurf und Review nutzen, und zeigt, wo Agilität, KI, Automatisierung und Analytik jede berühren. ITIL (Version 5), 2026 von PeopleCert eingeführt, behält ITIL 4 als weithin dokumentiertes Fundament bei. Prüfen Sie auf den Seiten des Eigentümers, wie die Dimensionen in der neuesten Version dargestellt werden (siehe Thema 1.3 — ITIL 5).

## Kernkonzepte

**Organisationen und Menschen.** Diese Dimension umfasst die Organisationsstruktur, Rollen und Verantwortlichkeiten, die Kultur sowie die Fähigkeiten und Kompetenzen der Mitarbeitenden. Sie umfasst Führung, die Art der Entscheidungsfindung und die Kommunikation der Teams. Das Conway'sche Gesetz (Conway's law), die Beobachtung, dass Systeme dazu neigen, die Kommunikationsstrukturen der Organisationen abzubilden, die sie bauen, erinnert daran, dass Struktur Services prägt. Thema 8.3 — Organisatorischer Wandel und Akzeptanz behandelt die menschliche Seite des Wandels ausführlich.

**Informationen und Technologie.** Dies umfasst die Informationen und das Wissen, die der Service braucht, und die Technologien, die ihn unterstützen: Plattformen, Werkzeuge, Daten und Architektur. Es umfasst die Informationen, die der Service erzeugt, etwa Aufzeichnungen und Berichte, und wie diese Informationen verwaltet und geschützt werden. In der heutigen Praxis gehören KI-Systeme dazu, die Datenqualität, Modellverhalten und Aufsicht zu den Fragen hinzufügen. Thema 7.2 — Datengrundlagen und Data Governance und Thema 4.4 — Konfigurationsmanagement sind dafür einschlägig.

**Partner und Lieferanten.** Nur wenige Services werden vollständig von einer einzigen Organisation geliefert. Diese Dimension umfasst die Beziehungen zu anderen Organisationen, die an Entwurf, Entwicklung, Lieferung, Support oder Verbesserung beteiligt sind: Anbieter, Cloud-Provider, Auftragnehmer und Partner. Sie umfasst Vertragsbedingungen, die Integration zwischen den Parteien und das Risiko der Abhängigkeit. Siehe Thema 3.14 — Lieferantenmanagement sowie die Konzepte Outsourcing und Vendor Lock-in.

**Wertströme und Prozesse.** Dies umfasst die Aktivitäten, Arbeitsabläufe, Kontrollen und Verfahren, die Eingaben in Ausgaben verwandeln, und wie die Organisation sie zu Wertströmen ordnet. Sie fragt, wie Arbeit fließt, wo sie wartet und welche Regeln gelten. Siehe Thema 1.7 — Die Service-Wertschöpfungskette und Thema 7.6 — Prozess- und Wertstromanalyse.

**Externe Faktoren.** ITIL 4 hält fest, dass die vier Dimensionen von externen Faktoren beeinflusst werden, oft als politisch, wirtschaftlich, sozial, technologisch, rechtlich und ökologisch aufgelistet (die PESTLE-Liste). Eine Verordnung, ein Wechselkurs oder ein Energiepreis kann verändern, was ein Service leisten kann. Behandeln Sie diese als Kontext jeder Dimension und nicht als fünfte.

**Die Dimensionen gemeinsam nutzen.** Die Dimensionen wirken aufeinander. Ein neues Automatisierungswerkzeug (Technologie) braucht Menschen mit den Fähigkeiten, es zu betreiben (Menschen), hängt womöglich von der Roadmap eines Anbieters ab (Partner) und verändert den Arbeitsablauf (Prozesse). Wer eine Frage auslässt, landet bei einem Werkzeug, für das niemand geschult ist, oder bei einem Prozess, dem niemand folgen kann.

**Soziotechnische Sicht.** Die Idee, dass Organisationen aus sozialen und technischen Teilen bestehen, die gemeinsam gestaltet werden müssen, hat eine lange Geschichte, die Wikipedia unter „Sociotechnical system“ zusammenfasst. Die vier Dimensionen sind eine praktische Fassung dieser Idee für Services.

**Wo die Blickwinkel passen.** Agiles Arbeiten berührt vor allem die Dimensionen Menschen und Prozesse, durch Teamstruktur und kurze Feedbackschleifen. KI und Automatisierung liegen hauptsächlich bei Informationen und Technologie, ändern aber auch Rollen und Arbeitsabläufe. Analytik gewinnt Informationen aus allen vier und berichtet, wie jede abschneidet.

## Bewährte Praktiken

1. **Stellen Sie bei jeder wesentlichen Änderung alle vier Fragen.** Fragen Sie vor der Genehmigung eines Changes oder eines neuen Services, was er von jeder Dimension braucht. Eine einseitige Tabelle mit vier Zeilen genügt, um Lücken aufzudecken.
2. **Benennen Sie die schwächste Dimension.** Fragen Sie bei einem bestehenden Service, welche Dimension heute am schwächsten ist, und lassen Sie das lenken, wohin der Verbesserungsaufwand geht. Greifen Sie nicht automatisch zu der Dimension, die Ihr Team am interessantesten findet.
3. **Schreiben Sie Rollen auf.** Halten Sie für die Dimension Menschen fest, wer den Service verantwortet, wer ihn unterstützt und wer entscheidet. Prüfen Sie, ob die Beteiligten die Fähigkeiten haben oder einen Plan, sie aufzubauen.
4. **Behandeln Sie Wissen als Teil der Informationen.** Listen Sie auf, was Menschen wissen müssen, um den Service zu betreiben, wo dieses Wissen liegt und wer es aktuell hält. Ein Runbook, das niemand aktualisiert, ist ein Risiko.
5. **Kennen Sie den Beitrag Ihrer Lieferanten.** Halten Sie für jeden Lieferanten fest, was er liefert, welche Vereinbarung gilt, wer die Beziehung steuert und was bei seinem Ausfall geschieht. Erproben Sie die Regelung in einer Übung, nicht nur auf dem Papier.
6. **Kartieren Sie den Fluss, nicht nur die Schritte.** Verfolgen Sie für die Dimension Prozesse ein reales Arbeitsstück und notieren Sie Wartezeiten. Eine Prozessbeschreibung, die Schritte, aber keine Warteschlangen aufführt, verfehlt den größten Teil der Verzögerung.
7. **Schauen Sie auf die Schnittstellen.** Die meisten Probleme treten dort auf, wo eine Dimension auf eine andere trifft, etwa bei einer Übergabe zwischen einem Lieferanten und einem internen Team oder zwischen einem Werkzeug und dem Arbeitsablauf, den es unterstützt. Prüfen Sie diese Schnittstellen gezielt.
8. **Beziehen Sie externe Faktoren ein.** Ergänzen Sie für jede Dimension eine Zeile zu allem, was außerhalb Ihrer Kontrolle liegt und sie beeinflusst: eine Verordnung, eine Marktveränderung, ein Energiepreis. Überprüfen Sie die Liste mindestens jährlich.
9. **Nutzen Sie die Dimensionen in Nachbetrachtungen nach Incidents.** Fragen Sie nach einem Incident, welche Dimension beigetragen hat. Wenn jede Nachbetrachtung der Technologie die Schuld gibt, schaut das Team vermutlich nicht auf die anderen. Siehe Thema 3.3 — Problem-Management.
10. **Prüfen Sie nach Änderungen erneut.** Wenn Sie KI einführen, einen Lieferanten wechseln oder umorganisieren, stellen Sie die vier Fragen erneut, denn das Gleichgewicht verschiebt sich.

## Fragen für die Diskussion im Team

**Welche der vier Dimensionen ist für unseren wichtigsten Service heute am schwächsten?**
Das setzt das Modell ein. Teams nennen oft zuerst die Technologie. Drängen Sie auf Belege: ein jüngster Incident, eine Verzögerung, eine Beschwerde. Vergleichen Sie die Antworten über Rollen hinweg, denn verschiedene Menschen sehen verschiedene Schwächen. Wählen Sie anschließend eine Maßnahme für die schwächste Dimension.

**Was nimmt unser letzter großer Change über Menschen, Lieferanten und Prozess an, das wir nie geprüft haben?**
An Annahmen scheitern Pläne. Rechnen Sie mit „das Team wird es lernen“ und „der Anbieter wird es unterstützen“. Fragen Sie, wer jede bestätigt hat. Wählen Sie anschließend eine Annahme, die wir diese Woche prüfen.

**Welcher Lieferant könnte uns am meisten schaden, wenn er ausfiele, und woher wissen wir, dass wir damit umgehen könnten?**
Das prüft die Dimension Partner über Verträge hinaus. Vielleicht hören Sie, dass der Lieferant groß und deshalb sicher sei. Fragen Sie, wann die Regelung zuletzt erprobt wurde. Planen Sie anschließend eine kleine Übung, etwa einen Failover-Test oder die Überprüfung eines Ausstiegsplans.

**Wo wartet Arbeit in unserem wichtigsten Wertstrom am längsten, und welche Dimension verursacht die Wartezeit?**
Wartezeiten können von Menschen kommen (niemand verfügbar), Technologie (langsames Werkzeug), Lieferanten (externe Warteschlange) oder Prozess (Genehmigung). Nutzen Sie ein reales Beispiel mit Daten. Fragen Sie anschließend, wer die Wartezeit beseitigen könnte und was es kosten würde.

**Welche Nachbetrachtungen von Incidents im vergangenen Jahr verwiesen auf etwas anderes als Technologie?**
Das prüft, ob Reviews breit schauen. Rechnen Sie mit einem Muster aus Ursachen in der Technologie und einer kleineren Zahl von Ursachen bei Menschen und Prozess. Fragen Sie, bei welchen Ursachen wir nicht gehandelt haben. Ergänzen Sie anschließend eine feste Frage zu den vier Dimensionen in der Vorlage der Nachbetrachtung.

**Wie verändert KI jede Dimension für unseren Service?**
KI wirkt auf Fähigkeiten (Menschen), Daten und Modelle (Informationen und Technologie), Anbieter von KI-Services (Partner) sowie Genehmigungs- und Prüfschritte (Prozess). Bitten Sie in jeder um eine konkrete Veränderung. Wählen Sie anschließend die Dimension mit der größten Lücke bei der Aufsicht.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine kommunale Verkehrsbehörde plant, das Back-End ihrer App für die Reiseplanung zu ersetzen. Der Projektplan deckt die Technologie sehr detailliert ab: eine Cloud-Migration, einen neuen Datenspeicher und einen Monitoring-Stack. Ein Service-Verantwortlicher bittet vor der Genehmigung des Plans um eine einseitige Prüfung der vier Dimensionen.

Bei den Menschen stellt die Prüfung fest, dass nur zwei Engineers wissen, wie sich das jetzige System unter Last verhält, und beide kurz vor der Pensionierung stehen; es gibt keinen Plan, ihr Wissen zu übertragen, und das Support-Team wurde nicht informiert, dass sich die App ändern wird. Bei Informationen und Technologie ist der Plan stark, sagt aber nicht, wie der Echtzeit-Standort-Feed der Busse validiert wird. Bei den Partnern kommt der Feed von einem regionalen Betreiber, dessen Vertrag in acht Monaten ausläuft, und der neue Entwurf hängt von einer Funktion ab, deren Bereitstellung der Betreiber nicht zugesagt hat. Beim Prozess verlangt der Release-Ablauf noch eine dreiwöchige Genehmigung, die mit den geplanten wöchentlichen Releases kollidiert.

Die Behörde passt den Plan an: Sie stellt den beiden Engineers jüngere Kolleginnen und Kollegen zur Seite, bezieht das Support-Team in die Design-Reviews ein, nimmt mit dem Betreiber Gespräche über den Feed auf und überprüft die Genehmigungsregel mit der Change-Verantwortlichen. Was schwierig bleibt: Der Betreiber stimmt der Funktion womöglich nicht zu, und die Behörde hat keine alternative Quelle. Der Service-Verantwortliche hält das als Risiko fest und bittet die Führungsrunde zu entscheiden, wie lange gewartet wird.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Nutzen Sie die vier Dimensionen als Design-Review. Fragen Sie, wer betreibt, was Sie bauen, von welchen Daten und Werkzeugen es abhängt, welche Partner in der Kette stehen und wie die Arbeit nach dem Start fließen wird. Nehmen Sie diese Antworten in Ihre Definition of Done auf.

### Service- und Betriebsteams

Sie sehen die vernachlässigten Dimensionen oft zuerst: fehlende Fähigkeiten, Übergaben an Lieferanten und Verzögerungen im Prozess. Bringen Sie sie mit konkreten Beispielen vor und bitten Sie darum, früher in die Planung einbezogen zu werden, damit die vier Fragen vor dem Start gestellt werden.

### Führung und Governance

Verlangen Sie bei wesentlichen Vorschlägen die Sicht der vier Dimensionen. Finanzieren Sie die Dimensionen jenseits der Technologie: Fähigkeiten, Lieferantenmanagement und Prozessverbesserung. Beachten Sie, wenn Pläne die Technologie detailliert und den Rest in einem Satz beschreiben.

### Kunden und Nutzer

Sie erleben die Dimensionen zusammen: die Person, die Ihnen hilft, das Werkzeug, das Sie nutzen, den Lieferanten dahinter und die Schritte, denen Sie folgen müssen. Sagen Sie dem Anbieter, wo Sie blockiert sind und welcher Teil des Services die Ursache zu sein scheint.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Beziehen Sie Menschen aus jeder Dimension in kurze Review-Zyklen mit den Beteiligten ein, etwa die Kundenbetreuung des Lieferanten oder die Support-Leitung, und behandeln Sie Lücken als Backlog-Punkte. Vorsicht: Agile Teams können sich auf die Technologie konzentrieren, die sie bauen, und Lieferanten und Prozess vernachlässigen; nehmen Sie die vier Fragen in Ihren Review auf.

### KI

Fragen Sie bei jedem KI-System: wer es verantwortet (Menschen), welche Daten es nutzt und wie sie geprüft werden (Informationen), welcher Anbieter das Modell zu welchen Bedingungen liefert (Partner) und wo ein Mensch seine Ausgabe prüft (Prozess). Vorsicht: Eine KI-Funktion eines Anbieters, die standardmäßig eingeschaltet ist, kann alle vier umgehen; führen Sie daher ein Inventar. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie die Informationsbeschaffung für die Dimensionen, wo Sie können, etwa Lieferanten aus Vertragsdaten aufzulisten und Services ohne Verantwortliche aus dem Katalog. Vorsicht: Automatisierung verändert Rollen und Arbeitsabläufe; stellen Sie daher die vier Fragen erneut gemeinsam mit den Betroffenen.

### Analytik

Wählen Sie ein oder zwei Indikatoren je Dimension, zum Beispiel den Anteil der Services mit benannter verantwortlicher Person, Lieferanten-Incidents, Datenqualitätsfehler und die im Wertstrom wartend verbrachte Zeit. Vorsicht: Jeder einzelne Indikator lässt sich manipulieren, und Dimensionen ohne einfache Messgröße, etwa Kultur, können herausfallen; besprechen Sie sie trotzdem. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Nur in Technologie denken.** Jedes Problem bekommt eine technische Lösung. Stellen Sie die vier Fragen und schauen Sie auf die anderen Dimensionen.
- **Werkzeuge ohne Menschen.** Eine neue Plattform kommt, und niemand ist geschult, sie zu betreiben. Planen Sie Fähigkeiten und Rollen zusammen mit der Technologie.
- **Lieferantenrisiko ignoriert.** Ein Vertrag existiert, aber niemand hat den Ausfallfall erprobt. Führen Sie eine Übung durch und halten Sie das Ergebnis fest.
- **Prozess beschrieben, aber nicht beobachtet.** Der dokumentierte Ablauf weicht vom realen ab. Verfolgen Sie tatsächliche Arbeit und vergleichen Sie.
- **Dimensionen als getrennte Projekte behandelt.** Die Änderungen bei Fähigkeiten, Werkzeugen, Lieferanten und Prozess werden von verschiedenen Gruppen gesteuert, die sich nie treffen. Bestimmen Sie eine verantwortliche Person für die gesamte Änderung.
- **Externe Faktoren vergessen.** Eine Verordnung oder Preisänderung überrascht das Team. Führen Sie eine kurze Liste und überprüfen Sie sie.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Organisationen und Menschen | Rollen unklar | Verantwortliche für die wichtigsten Services | Rollen, Fähigkeiten und Entscheidungsrechte definiert | Fähigkeiten und Struktur an Ergebnissen überprüft | Teams und Fähigkeiten um Wertströme herum organisiert |
| Informationen und Technologie | Werkzeuge ad hoc gewählt | Wichtigste Systeme aufgelistet | Informationen und Technologie mit Verantwortlichen kartiert | Datenqualität und Werkzeugnutzung überprüft | Technologie und Daten über Services hinweg geteilt und gesteuert |
| Partner und Lieferanten | Nur Verträge | Wichtige Lieferanten bekannt | Lieferantenrollen, Vereinbarungen und Ausstiegspläne festgehalten | Lieferantenleistung überprüft und erprobt | Lieferanten in gemeinsamen Fluss und gemeinsame Verbesserung eingebunden |
| Wertströme und Prozesse | Schritte nicht dokumentiert | Wichtigster Prozess beschrieben | Abläufe mit Wartezeiten kartiert | Fluss gemessen und Engpässe angegangen | Abläufe durchgängig mit Partnern abgestimmt |

## Checkliste

- [ ] Jede wesentliche Änderung hat eine Prüfung der vier Dimensionen.
- [ ] Jeder wichtige Service hat eine benannte verantwortliche Person und eine Liste der benötigten Fähigkeiten.
- [ ] Beitrag, Vereinbarung und Ausfallplan jedes Lieferanten sind festgehalten.
- [ ] Wir wissen, wo unsere Informationen und unser Wissen zu jedem Service liegen.
- [ ] Wir haben mindestens einen realen Wertstrom mit Wartezeiten verfolgt.
- [ ] Nachbetrachtungen nach Incidents fragen, welche Dimension beigetragen hat.
- [ ] Wir führen eine kurze Liste externer Faktoren und überprüfen sie.
- [ ] KI-Systeme sind in allen vier Dimensionen abgedeckt.

## KI-Prompts

**Entwerfen Sie aus einer Beschreibung der Änderung eine Prüfung der vier Dimensionen.**

```text
Our change: [paste description]. Our service: [name].
Produce a table with four rows (organizations and people, information and technology, partners and suppliers, value streams and processes) and columns: what the description says, what it does not say, and two questions to ask. Do not invent facts.
List what you are unsure of.
```

**Finden Sie Lieferantenrisiken, nach denen Sie fragen sollten.**

```text
Here is a list of our suppliers and what each provides: [paste list].
For each, list three questions we should ask about failure, exit, and integration. Do not state facts about the suppliers that I did not provide.
Mark assumptions and list what you are unsure of.
```

**Verwandeln Sie eine Nachbetrachtung eines Incidents in Fragen zu den vier Dimensionen.**

```text
Below is the summary of an incident review: [paste summary].
For each of the four dimensions, list what the review says about it and one question we have not yet asked. Do not assign blame or invent causes.
List what you are unsure of.
```

## KI-Skills

- [root-cause-analysis](../../../../skills/root-cause-analysis/SKILL.md): nutzen Sie ihn, um Ursachen über die vier Dimensionen hinweg zu verfolgen.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): nutzen Sie ihn, um die Dimension Partner und Lieferanten zu überprüfen.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um die Dimension Wertströme und Prozesse zu untersuchen.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der ITIL-Leitlinien durch den Eigentümer, einschließlich der Frage, wie die neueste Version die Dimensionen darstellt.
- Wikipedia, „Sociotechnical system“: die Hintergrundidee, soziale und technische Teile gemeinsam zu gestalten.
- Wikipedia, „Conway's law“: eine kurze, nützliche Darstellung, wie Struktur Systeme prägt.
- Wikipedia, „PEST analysis“: die Familie von Listen externer Faktoren, zu der PESTLE gehört.

## Literaturverzeichnis

1. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Sociotechnical system — Wikipedia — https://en.wikipedia.org/wiki/Sociotechnical_system
4. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
5. Organizational structure — Wikipedia — https://en.wikipedia.org/wiki/Organizational_structure
6. Outsourcing — Wikipedia — https://en.wikipedia.org/wiki/Outsourcing
7. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
8. Business process — Wikipedia — https://en.wikipedia.org/wiki/Business_process
9. PEST analysis — Wikipedia — https://en.wikipedia.org/wiki/PEST_analysis
10. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
