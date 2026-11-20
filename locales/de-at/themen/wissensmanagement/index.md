# Wissensmanagement

**Wissensmanagement macht das, was Menschen beim Betrieb von Services lernen, für die nächste Person verfügbar, die es braucht. Die Ansätze, die funktionieren, erfassen Wissen als Nebenprodukt der Problemlösung, halten es nah an der Arbeit, überprüfen es, wenn es genutzt wird, und behandeln KI-Suche und -Entwürfe als Helfer über einem Bestand, den Menschen pflegen.**

## Warum das wichtig ist

Jedes Service-Team trägt Wissen, das nirgends aufgeschrieben ist: warum eine Einstellung gewählt wurde, wie man eine empfindliche Komponente neu startet, was ein bestimmter Kunde braucht. Wenn eine Person geht, in den Urlaub fährt oder schlicht vergisst, geht das Wissen mit, und das Team entdeckt seine Abhängigkeit zur schlimmsten Zeit: bei einem Incident in der Nacht.

Die meisten Organisationen haben versucht, das mit Dokumentationskampagnen zu beheben. Mitarbeitenden wird gesagt, sie sollten alles aufschreiben. Eine Wissensdatenbank füllt sich mit Artikeln, die niemand liest oder denen niemand traut, weil sie veraltet, lang oder schwer zu finden sind. Nach einigen Monaten verebbt die Anstrengung, und Menschen fragen wieder Kolleginnen und Kollegen.

Bessere Ansätze behandeln Wissen als Teil der Arbeit, nicht als getrennte Aufgabe. Die Erfassung geschieht beim Lösen eines Problems, in wenigen Zeilen, durch die Person, die es gelöst hat. Artikel, die helfen, werden genutzt und verbessert; Artikel, die versagen, werden korrigiert oder gelöscht. Die Wissensdatenbank sitzt in den Werkzeugen, die Menschen ohnehin nutzen: dem Service Desk, dem Incident-Kanal, dem Code-Repository. Dieses Thema erklärt diese Ideen, einschließlich der Methode Knowledge-Centered Service (KCS), und die Rolle, die KI heute beim Suchen und Entwerfen spielt. Es steht in Beziehung zum Service Desk (Thema 3.1 — Service Desk), zum Problem-Management (Thema 3.3 — Problem-Management) und zu KI-Skills (Thema 5.7 — KI-Skills und Prompts).

## Kernkonzepte

**Daten, Information, Wissen.** Daten sind Fakten; Information sind Daten im Kontext; Wissen ist Information, die eine Person nutzen kann, um zu handeln. Ein Fehlercode ist ein Datum, ein Artikel, der erklärt, was er bedeutet, ist Information, und zu wissen, welche von drei möglichen Ursachen um 3 Uhr nachts wahrscheinlich ist, ist Wissen. Eine Wissensdatenbank kann Information und Hinweise enthalten; sie kann nicht alles Wissen enthalten. Der Wikipedia-Artikel zu Knowledge management beschreibt das Feld.

**Explizites und implizites Wissen.** Explizites Wissen lässt sich aufschreiben: Verfahren, Checklisten, Diagramme. Implizites Wissen (Tacit Knowledge) lebt in Praxis und Urteilsvermögen und ist schwer zu artikulieren. Wikipedia beschreibt Tacit knowledge, einen mit Michael Polanyi verbundenen Begriff. Beides zählt. Schreiben hilft beim Expliziten; Gespräch, Pairing und Mitlaufen helfen beim Impliziten.

**Wissensdatenbank.** Eine Sammlung von Artikeln, Anleitungen und Antworten, durchsuchbar für Nutzer und Mitarbeitende. Wikipedia beschreibt Knowledge bases und Wikis. Sie kann intern sein, für Mitarbeitende, oder extern, für Kunden. Die Qualität hängt mehr von der Pflege ab als vom Werkzeug.

**Runbooks.** Schritt-für-Schritt-Anleitungen für den Umgang mit einer bekannten Situation, etwa einen Service neu zu starten oder auf einen häufigen Alarm zu reagieren. Der Wikipedia-Artikel zu Runbooks beschreibt sie als Zusammenstellungen von Verfahren für den Systembetrieb. Ein gutes Runbook ist kurz, getestet und mit dem Alarm verknüpft, der es auslöst. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

**Knowledge-Centered Service (KCS).** Eine vom Consortium for Service Innovation veröffentlichte Methode. Ihre Hauptideen sind: Wissen beim Lösen von Problemen im Arbeitsablauf erfassen; Artikel bei der Nutzung wiederverwenden und verbessern; es für alle sicher und normal machen, beizutragen; und die Wissensdatenbank nach Nachfrage statt nach Vorabplan weiterentwickeln. Ihre Beschreibung umfasst Praktiken wie „Solve Loop“ und „Evolve Loop“. Prüfen Sie die aktuelle Leitlinie des Consortiums für Einzelheiten.

**Im Arbeitsablauf erfassen.** Der beste Zeitpunkt, einen Artikel zu schreiben, ist direkt nach der Lösung des Problems. Eine kurze Notiz mit Symptom, Ursache und Behebung, im selben Werkzeug wie das Ticket, dauert Minuten. Sie später aus dem Gedächtnis zu schreiben, dauert länger und unterbleibt oft.

**Wiederverwendung als Signal.** Wird ein Artikel zur Lösung eines Problems genutzt, verknüpfen Sie ihn mit dem Ticket. Das Zählen der Verknüpfungen zeigt, welche Artikel helfen und welche nie genutzt werden. Nutzt jemand einen Artikel und er versagt, sollte die Person ihn sofort korrigieren oder markieren.

**Artikelqualität.** Ein guter Artikel hat einen klaren Titel in den Worten der Nutzer, eine kurze Aussage zum Symptom oder zur Frage, die Ursache, wo bekannt, die Schritte, wie man prüft, dass es gewirkt hat, und wen man fragt, wenn nicht. Er ist kurz und mit dem System im Gleichschritt gehalten.

**Dokumentation als Teil des Repositorys.** Für Engineering-Teams hält es Dokumentation und Code im Gleichklang, die Dokumentation neben dem Code in Klartext wie Markdown zu führen und Änderungen gemeinsam mit dem Code zu prüfen. Der Wikipedia-Artikel zu Markdown beschreibt das Format. Pull Requests, die Verhalten ändern, ändern auch die Dokumentation.

**Entscheidungsprotokolle (Decision Records).** Kurze Notizen, die festhalten, warum eine wesentliche Entscheidung getroffen wurde, welche Alternativen erwogen wurden und was damals bekannt war. Sie helfen neuen Teammitgliedern und künftigen Reviews, die Überlegungen zu verstehen.

**Bus-Faktor.** Die Zahl der Personen, die man verlieren müsste, bevor ein Projekt mangels Wissen stockt. Wikipedia beschreibt den Bus factor, auch Lotto-Faktor genannt. Ein Bus-Faktor von eins ist ein Risiko. Wissen durch Pairing, Rotation und Austausch zu verbreiten, erhöht ihn.

**Wissenstransfer.** Wissen von einer Person zur anderen zu bringen, durch Übergaben, Pairing, Schulung und Mitlaufen. Wikipedia beschreibt Knowledge transfer. Schaffen Sie Zeit dafür, besonders wenn jemand geht.

**Auffindbarkeit.** Selbst guter Inhalt ist nutzlos, wenn Menschen ihn nicht finden. Titel, Schlagwörter, Suchoptimierung und Verknüpfungen aus Alarmen und Tickets zählen. Die Wikipedia-Artikel zu Search engines und Information overload beschreiben verwandte Probleme.

**KI und Retrieval.** KI-Assistenten können eine Wissensdatenbank durchsuchen, Artikel zusammenfassen und neue entwerfen. Ein verbreitetes Muster, Retrieval-Augmented Generation, ruft relevante Passagen ab und bittet ein Modell, nur anhand dieser zu antworten. Wikipedia beschreibt die Idee. Die Antworten des Assistenten sind nur so gut wie der Bestand, den er liest, und er kann dennoch irren. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

**Governance.** Entscheiden Sie, wer die Wissensdatenbank verantwortet, wie Artikel überprüft werden, wie sensible Inhalte kontrolliert werden und wann alte Inhalte archiviert werden. Halten Sie die Regeln schlank.

**Wie die Blickwinkel passen.** Wissensmanagement ist kontinuierliche Verbesserung auf der Ebene einzelner Artikel. KI hilft Nutzern zu finden, zusammenzufassen und zu entwerfen, unter Prüfung. Automatisierung verknüpft Alarme mit Runbooks und Tickets mit Artikeln. Analytik zeigt, welche Artikel genutzt werden, welche versagen und welche Lücken gesucht werden.

## Bewährte Praktiken

1. **Erfassen Sie beim Lösen.** Schreiben Sie einen kurzen Artikel oder aktualisieren Sie einen als Teil des Schließens eines Tickets. Machen Sie es zu einem normalen Schritt, nicht zu Zusatzarbeit.
2. **Schreiben Sie für die Leserin um 3 Uhr nachts.** Nutzen Sie die Wörter, nach denen Menschen suchen, kurze Schritte und eine Prüfung, dass die Behebung gewirkt hat. Stellen Sie den nützlichsten Teil an den Anfang.
3. **Verknüpfen Sie Artikel mit Tickets und Alarmen.** Verweisen Sie bei einem Alarm auf das Runbook. Verknüpfen Sie einen Artikel, der ein Ticket löst, mit diesem. Die Verknüpfungen zeigen, was nützlich ist.
4. **Beheben oder markieren Sie bei Nutzung.** Ist ein Artikel falsch oder unklar, wenn Sie ihn nutzen, korrigieren Sie ihn oder markieren Sie ihn sofort zur Überprüfung. Machen Sie das leicht.
5. **Machen Sie Beitragen sicher.** Erlauben Sie allen zu bearbeiten, mit leichter Prüfung bei sensiblen oder folgenreichen Inhalten. Danken Sie Beitragenden und bestrafen Sie keine Fehler.
6. **Beschneiden Sie regelmäßig.** Überprüfen Sie Artikel, die lange nicht genutzt wurden, und archivieren Sie sie. Ein kleinerer, vertrauenswürdiger Bestand ist besser als ein großer, zweifelhafter.
7. **Halten Sie Engineering-Dokumentation beim Code.** Prüfen Sie sie mit Änderungen und erzeugen Sie, was Sie können, etwa API-Referenzen, aus dem Quelltext.
8. **Halten Sie wichtige Entscheidungen fest.** Schreiben Sie kurze Entscheidungsnotizen mit Kontext, Optionen und Gründen. Verknüpfen Sie sie mit dem Code oder Design, das sie betreffen.
9. **Verbreiten Sie Wissen gezielt.** Nutzen Sie Pairing, Rotation, kurze Vorträge und Mitlaufen, um implizites Wissen zu bewegen. Prüfen Sie den Bus-Faktor für jeden kritischen Service.
10. **Behandeln Sie KI-Antworten als Entwürfe.** Lassen Sie KI suchen und vorschlagen, mit sichtbaren Quellen, und lassen Sie eine Person Artikel bestätigen, bevor sie offiziell werden. Verfolgen Sie schlechte Antworten und beheben Sie die Quellen.

## Fragen für die Diskussion im Team

**Was mussten wir zuletzt jemanden bitten zu erklären, das hätte aufgeschrieben sein sollen?**
Beginnen Sie mit einem realen Fall. Rechnen Sie mit „wie starten wir X neu“ oder „warum ist Y so eingestellt“. Fragen Sie, was das Aufschreiben verhindert hat. Schreiben Sie es anschließend jetzt gemeinsam auf.

**Welchen Artikeln vertrauen wir, und welche meiden wir?**
Vertrauen unterscheidet sich nach Team und Thema. Fragen Sie warum. Rechnen Sie mit „veraltet“ und „zu lang“. Wählen Sie anschließend drei nicht vertrauenswürdige Artikel zum Beheben oder Löschen.

**Wie viele von uns wissen, wie man unseren kritischsten Service wiederherstellt, und was geschieht, wenn sie abwesend sind?**
Das prüft den Bus-Faktor. Zählen Sie ehrlich. Rechnen Sie mit ein oder zwei Namen. Planen Sie anschließend eine Pairing-Sitzung oder eine Probe, die das Wissen verbreitet.

**Wo schreiben wir heute Dinge auf, und können wir sie finden?**
Listen Sie die Orte: Chat, Wiki, Tickets, Repositories, persönliche Notizen. Versuchen Sie gemeinsam, eine bestimmte Antwort zu finden. Vereinbaren Sie anschließend ein Zuhause für jede Art von Wissen.

**Wie leicht kann jede Person im Team einen Artikel korrigieren, den sie falsch findet?**
Hindernisse sind Berechtigungen, Verzögerungen bei der Prüfung und Furcht vor Kritik. Fragen Sie, was es zu einer Aufgabe von dreißig Sekunden machen würde. Beseitigen Sie anschließend ein Hindernis.

**Wie nutzen wir KI, um Wissen zu finden oder zu schreiben, und wie prüfen wir, was sie sagt?**
Fragen Sie, wer KI-Werkzeuge für Wissensarbeit nutzt und was er ihnen vertraut. Rechnen Sie mit unkritischer Nutzung an manchen Stellen. Vereinbaren Sie anschließend, dass Antworten Artikel zitieren, und prüfen Sie Antworten stichprobenartig dagegen.

## In der Praxis: ein Beispiel aus dem Service-Management

Das achtköpfige Infrastrukturteam eines nationalen Wetterdienstes betreibt Datenpipelines für Vorhersagen. Zwei erfahrene Engineers halten den Großteil des Wissens über die älteste Pipeline, die Satellitendaten verarbeitet. Als einer von ihnen drei Wochen Urlaub nimmt, braucht ein Ausfall der Pipeline zwei Tage zur Behebung, weil der junge Bereitschafts-Engineer das Neustartverfahren nicht findet, das in einem E-Mail-Verlauf von vor sechs Jahren steht.

Der Teamleiter beschließt, eine schlanke Version von KCS zu nutzen. Wer ein Problem löst, schreibt einige Zeilen in das Lösungsfeld des Tickets: Symptom, Ursache, Behebung, Prüfung. Eine wöchentliche Zehn-Minuten-Sitzung prüft die neuen Notizen und befördert nützliche zu Runbooks im Repository des Teams. Jeder Alarm verweist auf sein Runbook. Die beiden erfahrenen Engineers vereinbaren, im Wechsel mit Nachwuchskräften zu pairen und zwei kurze Videos aufzunehmen, in denen sie die Pipeline durchgehen.

Nach drei Monaten gibt es 40 Runbooks, und das Team kann im Ticket-Werkzeug sehen, welche mit gelösten Incidents verknüpft sind. Beim nächsten Ausfall findet der junge Bereitschafts-Engineer das Runbook über den Alarm, folgt ihm und stellt die Pipeline in 25 Minuten wieder her. Ein im Repository erprobter Suchassistent beantwortet eine Frage falsch und zitiert einen Abschnitt eines Runbooks, der durch eine spätere Änderung überholt war. Der Leiter ergänzt eine Regel, dass überholte Abschnitte entfernt und nicht durchgestrichen werden.

Was sich ändert: Die Pipeline hängt nicht mehr von zwei Personen ab, und Nachwuchskräfte fühlen sich sicherer. Was schwierig bleibt: Die erfahrenen Engineers finden weiter, dass Schreiben Zeit kostet, die sie nicht haben; manche Runbooks werden nur durch Lesen getestet; und die älteste Pipeline hat Komponenten, die niemand vollständig versteht, was kein Dokument beheben wird. Der Leiter plant eine Probe für die älteste Pipeline und terminiert einen Design-Review der Komponenten, die niemand versteht.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Halten Sie Dokumentation beim Code und prüfen Sie sie mit Änderungen. Schreiben Sie Entscheidungsnotizen und Runbooks als Teil der Arbeit und teilen Sie mit dem Betrieb, was Sie lernen.

### Service- und Betriebsteams

Erfassen Sie Lösungen bei der Arbeit, korrigieren Sie Artikel, wenn Sie sie nutzen, und verknüpfen Sie Alarme mit Runbooks. Teilen Sie implizites Wissen durch Pairing. Sagen Sie den Verantwortlichen, welche Lücken Sie finden.

### Führung und Governance

Machen Sie das Schreiben und Lesen von Wissen zu einem normalen Teil der Arbeit, nicht zu einer Nebenaufgabe. Finanzieren Sie Zeit für Pairing und Proben. Fragen Sie nach dem Bus-Faktor kritischer Services. Belohnen Sie nicht die Menge an Artikeln.

### Kunden und Nutzer

Gute Artikel lassen Sie Probleme selbst lösen und schneller Antworten erhalten. Sagen Sie dem Anbieter, wenn ein Artikel verwirrend oder falsch ist und was Sie versuchen wollten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Entwickeln Sie die Wissensdatenbank in kleinen Schritten weiter, getrieben von der Nutzung, mit Feedback von Nutzern und Mitarbeitenden. Überprüfen Sie Lücken in einer kurzen, regelmäßigen Sitzung. Vorsicht: Vermeiden Sie große Dokumentationsprojekte; sie erzeugen Inhalt, der beim Start schon veraltet ist.

### KI

KI kann den Bestand durchsuchen, Artikel zusammenfassen, Fragen mit Quellenangaben beantworten und Artikel aus Tickets und Chats entwerfen, wobei eine Person alles genehmigt, was offiziell wird. Benennen Sie eine verantwortliche Person. Vorsicht: Ein Assistent kann überzeugt aus veraltetem oder falschem Inhalt antworten; zeigen Sie Quellen und verfolgen Sie Korrekturen. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Verknüpfen Sie Alarme mit Runbooks, schlagen Sie bei neuen Tickets Artikel vor, markieren Sie veralteten Inhalt und erzeugen Sie aus geschlossenen Tickets Artikelentwürfe, mit menschlicher Bearbeitung. Vorsicht: Automatische Vorschläge können den Bestand mit Entwürfen geringer Qualität füllen; begrenzen Sie, was ohne Prüfung veröffentlicht wird. Siehe Thema 6.6 — Runbook-Automatisierung und automatische Behebung.

### Analytik

Verfolgen Sie Artikelnutzung, Verknüpfungen zu gelösten Tickets, Suchen ohne Ergebnis und die Zeit seit der letzten Überprüfung. Vorsicht: Zählungen erstellter Artikel belohnen Menge, und Nutzungszählungen belohnen beliebte Themen gegenüber kritischen seltenen; kombinieren Sie mit Feedback und Stichproben. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Dokumentationskampagnen.** Auf einen Schreibschub folgt Verfall. Erfassen Sie Wissen als Teil der Arbeit.
- **Lange Artikel.** Niemand liest sie. Schreiben Sie kurze, aufgabenbezogene.
- **Veralteter Inhalt.** Vertrauen schwindet. Beheben oder markieren Sie bei Nutzung und beschneiden Sie.
- **Wissen nur im Chat.** Es lässt sich nicht finden. Verlegen Sie nützliche Antworten in den Bestand.
- **Bus-Faktor von eins.** Die Abwesenheit einer Person stoppt die Arbeit. Verbreiten Sie Wissen gezielt.
- **KI-Antworten ungeprüft.** Falsche Ratschläge verbreiten sich. Zeigen Sie Quellen und prüfen Sie Antworten stichprobenartig.
- **Schreiben als Strafe.** Menschen meiden es. Machen Sie es normal und würdigen Sie es.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Erfassung | In Köpfen und im Chat | Einige Artikel nach Incidents | Erfassung ist ein normaler Schritt im Arbeitsablauf | Erfassungsqualität stichprobenartig geprüft und verbessert | Erfassung automatisiert, mit menschlicher Prüfung |
| Auffindbarkeit | Eine Kollegin fragen | Eine durchsuchbare Datenbank | Alarme und Tickets verweisen auf Artikel | Suchlücken steuern Inhalte | Retrieval und Assistenten über Werkzeuge integriert |
| Qualität | Ungeprüft | Gelegentliche Bereinigung | Beheben oder Markieren bei Nutzung, regelmäßiges Beschneiden | Qualität an Nutzung und Ergebnissen gemessen | Qualität laufend in der Organisation verbessert |
| Verbreitung | Eine Expertin | Etwas Pairing | Bus-Faktor für kritische Services geprüft | Proben und Rotation geplant | Wissen über Teams und Partner geteilt |

## Checkliste

- [ ] Menschen erfassen Lösungen als Teil des Schließens von Tickets.
- [ ] Alarme verweisen auf Runbooks.
- [ ] Artikel sind kurz und in den Worten geschrieben, nach denen Nutzer suchen.
- [ ] Jede Person kann einen Artikel korrigieren, den sie falsch findet, mit leichter Prüfung.
- [ ] Wir beschneiden ungenutzte oder veraltete Artikel regelmäßig.
- [ ] Engineering-Dokumentation liegt beim Code und wird mit Änderungen geprüft.
- [ ] Wir kennen den Bus-Faktor jedes kritischen Services.
- [ ] KI-Antworten zitieren Quellen und werden stichprobenartig auf Richtigkeit geprüft.

## KI-Prompts

**Entwerfen Sie aus einem gelösten Ticket einen Artikel.**

```text
Here is a resolved ticket with notes, personal data removed: [paste].
Draft a short knowledge article with: a title in the words a user would search, the symptom, the cause (only if stated), the steps, how to check it worked, and who to ask if it did not. Mark any gap with [missing] and do not fill it.
List what you are unsure of.
```

**Prüfen Sie einen Artikel für eine Leserin in der Nacht.**

```text
Here is a runbook: [paste].
List steps that are ambiguous, steps that assume knowledge not stated, and anything that could cause harm if followed literally. Do not rewrite the runbook.
List what you are unsure of.
```

**Finden Sie Lücken aus Suchen.**

```text
Here are search terms that returned no result or were followed by a ticket: [paste list]. Here are our article titles: [paste list].
Group the search terms into themes, and for each theme say whether an existing article title looks related or whether a new article is needed. Do not draft articles.
List what you are unsure of.
```

## KI-Skills

- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um Runbooks zu schreiben und zu testen.
- [decision-records](../../../../skills/decision-records/SKILL.md): nutzen Sie ihn, um festzuhalten, warum Entscheidungen getroffen wurden.
- [architecture-decision-record](../../../../skills/architecture-decision-record/SKILL.md): nutzen Sie ihn für Designentscheidungen, die andere verstehen müssen.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): nutzen Sie ihn, um Prompts zu gestalten, die aus einer Wissensdatenbank lesen und Quellen zitieren.

## Wichtige Quellen

- Consortium for Service Innovation, Knowledge-Centered Service (KCS): die wichtigste praktische Methode, Wissen in der Support-Arbeit zu erfassen.
- Ikujiro Nonaka und Hirotaka Takeuchi, *The Knowledge-Creating Company* (1995): zu implizitem und explizitem Wissen.
- Wikipedia, „Knowledge management“ und „Tacit knowledge“: neutrale Überblicke.
- Wikipedia, „Runbook“: Hintergrund zu betrieblichen Verfahren.

## Literaturverzeichnis

1. Knowledge management — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_management
2. Knowledge base — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_base
3. Tacit knowledge — Wikipedia — https://en.wikipedia.org/wiki/Tacit_knowledge
4. Wiki — Wikipedia — https://en.wikipedia.org/wiki/Wiki
5. Runbook — Wikipedia — https://en.wikipedia.org/wiki/Runbook
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
8. Bus factor — Wikipedia — https://en.wikipedia.org/wiki/Bus_factor
9. Knowledge transfer — Wikipedia — https://en.wikipedia.org/wiki/Knowledge_transfer
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
