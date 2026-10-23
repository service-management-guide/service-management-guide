# Service Desk

**Der Service Desk ist die zentrale Anlaufstelle zwischen einem Service-Anbieter und seinen Nutzern. Er arbeitet am besten, wenn er beim ersten Kontakt löst, was er kann, den Rest schnell an die richtigen Personen weiterleitet und das, was er hört, in Verbesserung zurückspeist. KI kann Triage und Entwürfe liefern, aber eine Person bleibt für die Beziehung verantwortlich.**

## Warum das wichtig ist

Für die meisten Nutzer ist der Service Desk der Service-Anbieter. Sie begegnen selten den Engineers, Architekten oder Führungskräften hinter dem Service. Sie begegnen einer Person im Chat, am Telefon oder in einem Formular, in einem Moment, in dem etwas nicht stimmt oder sie etwas erledigt haben wollen. Wie dieser Kontakt verläuft, prägt, wie sie den gesamten Service beurteilen.

Ein Service Desk sitzt außerdem auf einer reichen Informationsquelle. Er hört, was kaputt ist, was Menschen verwirrt und welche Changes Ärger verursachen, oft vor dem Monitoring. Geht diese Information in Tickets verloren, wiederholt die Organisation ihre Fehler; wird sie genutzt, wird der Desk zum Frühwarnsystem der Organisation.

Der Desk ist zudem der Teil des Service-Managements, den neue Technologie am stärksten verändert. Chat, Self-Service-Portale, virtuelle Agenten und KI-Werkzeuge verringern das Volumen einfacher Kontakte und verändern, wie die verbleibenden aussehen. Dieses Thema beschreibt, wofür ein Service Desk da ist, die wichtigsten Modelle und Kanäle und wie man Automatisierung und KI einführt, ohne die menschliche Seite zu verlieren. Die verwandten Praktiken sind Service-Request-Management (Thema 3.6 — Service-Request-Management), Incident-Management (Thema 3.2 — Incident-Management) und Wissensmanagement (Thema 3.9 — Wissensmanagement).

## Kernkonzepte

**Zweck.** In den Begriffen von ITIL 4 erfasst der Service Desk die Nachfrage nach Incident-Lösung und Service-Requests und ist Einstiegspunkt und zentrale Anlaufstelle (Single Point of Contact) des Service-Anbieters für alle seine Nutzer. Die Wikipedia-Artikel zu Help desks und Points of contact beschreiben die Idee.

**Zentrale Anlaufstelle.** Nutzer sollten die Struktur der Organisation nicht kennen müssen, um Hilfe zu bekommen. Ein Ort, mit einem Weg zu fragen und einer Aufzeichnung der Anfrage, erspart ihnen die Mühe herauszufinden, wer zuständig ist. Die Anlaufstelle ist nicht zwingend eine Telefonnummer; sie kann ein Portal, ein Chat, eine E-Mail-Adresse und ein persönlicher Schalter sein, die alle dasselbe System speisen.

**Nicht nur IT.** Viele Organisationen haben Desks jenseits der IT, etwa für Personalwesen und Gebäudemanagement. Siehe Thema 1.9 — Enterprise Service Management.

**Kanäle.** Telefon, E-Mail, Chat, ein Portal, eine mobile App, persönlich vor Ort, Messaging-Werkzeuge und automatisierte Kanäle. Ein Omnichannel-Ansatz, den Wikipedia beschreibt, zielt auf ein einheitliches Erlebnis und eine durchgängige Aufzeichnung, wenn Nutzer zwischen Kanälen wechseln. Das Ziel ist, Nutzer dort abzuholen, wo sie ohnehin sind, ohne jeden Kontakt in ein Ticketformular zu zwingen.

**Stufen und Routing.** Viele Desks nutzen Stufen: Mitarbeitende der ersten Ebene nehmen den Kontakt auf und lösen, was sie können, Spezialisten der zweiten Ebene bearbeiten technischere Fragen, und Teams der dritten Ebene umfassen Entwickelnde und Lieferanten. Stufen können Übergaben und Verzögerung erzeugen. Manche Organisationen bewegen sich auf weniger Übergaben zu, indem sie der ersten Ebene bessere Werkzeuge und Wissen geben.

**Nach links verschieben (Shift-left).** Die Lösung zum Nutzer oder zum frühestmöglichen Punkt verlagern: Self-Service, Wissensartikel, Automatisierung und bessere Fähigkeit der ersten Ebene. Eine Lösung beim ersten Kontakt oder ganz ohne Kontakt ist billiger und schneller als eine, die mehrere Stufen durchläuft.

**Swarming.** Statt ein Problem eine Kette entlangzureichen, arbeitet eine Gruppe von Menschen mit einschlägigen Fähigkeiten gemeinsam daran und kehrt dann zu anderer Arbeit zurück. Das Consortium for Service Innovation, das auch Knowledge-Centered Service (KCS) veröffentlicht, hat einen Ansatz beschrieben, den es Intelligent Swarming nennt. Swarming kann Übergaben verringern, braucht aber klare Koordination und eine Kultur, die es trägt.

**Lösung beim ersten Kontakt (First Contact Resolution).** Der Anteil der Kontakte, die ohne weiteren Kontakt gelöst werden. Sie ist eine verbreitete Kennzahl und eine riskante: Sie hochzutreiben kann Agenten dazu verleiten, Tickets vorzeitig zu schließen oder komplexe zu meiden. Siehe das Buch *Service Management Metrics* für Definition und Leitplanken.

**Empathie und Kommunikation.** Ein Nutzer mit einem Problem ist oft gestresst. Einfache Sprache, eine klare Aussage, was als Nächstes geschieht, und Ehrlichkeit über Unsicherheit zählen so viel wie technisches Können. Der Wikipedia-Artikel zu Empathy gibt allgemeinen Hintergrund.

**Wissen.** Desk-Agenten stützen sich auf Wissensartikel und gemeinsame Notizen. Knowledge-Centered Service schlägt vor, Wissen als Nebenprodukt der Problemlösung zu erfassen und zu verbessern. Siehe Thema 3.9 — Wissensmanagement.

**Virtuelle Agenten und Chatbots.** Software, die mit Nutzern spricht, häufige Fragen beantwortet und Angaben sammelt. Wikipedia beschreibt Chatbots und virtuelle Assistenten. Nützliche lenken einfache Kontakte ab und bereiten komplexe vor und übergeben an eine Person, wenn sie nicht helfen können. Siehe Thema 5.3 — KI-Service-Desk und virtuelle Agenten.

**Erlebnis.** Zufriedenheitsumfragen, Net Promoter Scores und ähnliche Kennzahlen fragen Nutzer, was sie dachten. Sie sind eine Informationsquelle, und jede hat Grenzen: Antworten kommen von einer selbstgewählten Gruppe, und Werte können davon beeinflusst werden, wie die Frage gestellt wird. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse.

**Wie die Blickwinkel passen.** Agile Praxis legt kleine, häufige Verbesserungen des Desks mit eingebundenen Nutzern nahe. KI sortiert, fasst zusammen und entwirft Antworten. Automatisierung übernimmt Routineanfragen und Routing. Analytik zeigt Nachfrage, Kontaktgründe und Erlebnis.

## Bewährte Praktiken

1. **Machen Sie das Fragen leicht.** Bieten Sie die Kanäle an, die Nutzer bevorzugen, und stellen Sie sicher, dass jeder zur selben Aufzeichnung führt. Testen Sie jeden Kanal, wie ein Nutzer es täte.
2. **Wissen Sie, warum Menschen Sie kontaktieren.** Kategorisieren Sie Kontakte nach Grund, überprüfen Sie die häufigsten regelmäßig und fragen Sie, was jeden überflüssig machen würde. Halten Sie Kategorien wenige und nützlich.
3. **Lösen Sie beim ersten Kontakt, wo es sicher ist.** Geben Sie der ersten Ebene den Zugriff, die Werkzeuge und das Wissen, häufige Probleme zu beheben, und klare Regeln dafür, was sie tun darf.
4. **Geben Sie jedes Mal einen klaren nächsten Schritt.** Sagen Sie Nutzern, was geschieht, wer es tut und wann sie wieder von Ihnen hören. Schweigen erzeugt Wiederholungskontakte.
5. **Verschieben Sie gezielt nach links.** Bieten Sie für die häufigsten Kontakte Self-Service, einen Artikel oder Automatisierung an. Prüfen Sie, dass der Self-Service-Weg funktioniert und Nutzer ihn kennen.
6. **Verringern Sie Übergaben.** Schauen Sie auf Tickets, die mehrere Teams durchlaufen, und fragen Sie, ob Swarming, besseres Routing oder bessere Fähigkeiten der ersten Ebene helfen würden.
7. **Schreiben Sie Wissen bei der Arbeit.** Erfassen Sie Lösungen sofort in Artikeln und verbessern Sie sie, wenn sie versagen. Legen Sie veraltete Artikel still.
8. **Hören Sie auf Muster und geben Sie sie weiter.** Sagen Sie dem Problem-Management, den Produktteams und den Verantwortlichen, was der Desk sieht. Fügen Sie Beispiele von Nutzern bei.
9. **Nutzen Sie Automatisierung und KI mit einer verantwortlichen Person.** Lassen Sie sie Routineschritte übernehmen, mit klarer Übergabe an eine Person und einem sichtbaren Weg, eine zu erreichen. Prüfen Sie, was sie getan haben.
10. **Sorgen Sie für die Menschen am Desk.** Bieten Sie Schulung, eine tragfähige Arbeitslast und einen Entwicklungsweg. Ein Desk mit hoher Fluktuation verliert Wissen und Wohlwollen.

## Fragen für die Diskussion im Team

**Warum kontaktieren uns Menschen, und welche dieser Kontakte könnten vermieden werden?**
Nutzen Sie die tatsächliche Liste der häufigsten Gründe. Rechnen Sie mit Passwort-Rücksetzungen, Zugriffsanfragen und „Wie mache ich …“-Fragen. Fragen Sie, was jeden stoppen würde. Wählen Sie anschließend einen Grund und schätzen Sie den Aufwand, ihn zu beseitigen.

**Was erlebt ein Nutzer vom Moment des Kontakts bis zur Lösung, Schritt für Schritt?**
Gehen Sie ein reales Ticket durch, einschließlich Wartezeiten. Oft entdeckt man lange Stille und wiederholte Fragen. Wählen Sie anschließend einen Schritt, den wir diesen Monat verbessern.

**Welche Tickets durchlaufen die meisten Übergaben, und was verursacht sie?**
Übergaben kosten Zeit und Kontext. Suchen Sie Muster, etwa bestimmte Teams oder Arten von Problemen. Fragen Sie, ob Swarming funktionieren könnte. Probieren Sie anschließend für eine Art von Ticket einen anderen Weg aus.

**Was kann die erste Ebene heute nicht, das ihr erlaubte, mehr beim ersten Kontakt zu lösen?**
Das findet Lücken bei Zugriff, Wissen und Befugnis. Rechnen Sie mit Begründungen zu Sicherheit und Prozess. Fragen Sie, wer wann entschieden hat. Wählen Sie anschließend eine Berechtigung, die wir mit Schutzmaßnahmen erweitern.

**Wo fragen Nutzer lieber, und sind wir dort?**
Nutzer verwenden womöglich schon Chat-Werkzeuge oder fragen Kolleginnen und Kollegen. Fragen Sie sie. Rechnen Sie mit Unterschieden zwischen Gruppen. Wählen Sie anschließend einen Kanal, den wir verbessern oder ergänzen, und einen, den wir aufgeben.

**Was sollte ein virtueller Agent oder KI-Assistent für uns tun, und was muss bei einer Person bleiben?**
Ziehen Sie eine klare Grenze: KI für Routinefragen und das Vorbereiten von Angaben, Menschen für Belastung, Mehrdeutigkeit und Entscheidungen mit Folgen. Fragen Sie, wer den Assistenten verantwortet und wie Fehler gefunden werden. Wählen Sie anschließend eine kleine Erprobung mit Prüfung durch eine Person.

## In der Praxis: ein Beispiel aus dem Service-Management

Der IT-Service-Desk eines regionalen Stromverteilers nimmt rund 600 Kontakte pro Woche von 3.000 Mitarbeitenden entgegen, darunter Leitstellenpersonal und Außendienst-Techniker. Nutzer sagen, es sei schwer, eine Person zu erreichen, und die eigenen Zahlen des Desks zeigen steigende Wiederholungskontakte. Desk-Mitarbeitende sagen, sie verbrächten die Hälfte des Tages mit Passwort- und Kontenproblemen.

Die Desk-Leiterin wertet eine Stichprobe von 300 Kontakten aus und stellt fest, dass 35 Prozent Passwort- und Zugriffsprobleme sind, 20 Prozent „Wie mache ich …“-Fragen zu drei Anwendungen und 10 Prozent Wiederholungskontakte zu einem früheren Problem. Sie führt drei Änderungen ein. Ein Self-Service-Passwort-Reset wird im Portal ergänzt, mit einer kurzen Anleitung auf der Anmeldeseite. Ein virtueller Agent wird für die „Wie mache ich …“-Fragen der drei Anwendungen erprobt, mit einer sichtbaren Schaltfläche „Mit einer Person sprechen“. Und eine Regel gibt der ersten Ebene die Befugnis, Standardzugriff ohne zweite Genehmigung zu erteilen.

Nach zwei Monaten sind Passwortkontakte etwa um die Hälfte gesunken, und der virtuelle Agent löst rund ein Drittel seiner Gespräche ohne Übergabe. Die Leiterin liest wöchentlich eine Stichprobe der Gespräche des Agenten und stellt fest, dass er zur neuen Anmeldung einer Anwendung eine falsche Antwort gab. Sie korrigiert den Artikel und ergänzt eine Prüfung bei neuen Releases.

Was sich ändert: Mitarbeitende bearbeiten weniger Routinekontakte und verbringen mehr Zeit mit komplexen Fragen. Was schwierig bleibt: Außendienst-Techniker in abgelegenen Gebieten mit schlechter Konnektivität können das Portal nicht zuverlässig nutzen und rufen weiter an; die neue Zugriffsbefugnis des Desks beunruhigt das Sicherheitsteam, das eine monatliche Überprüfung verlangt; und manche Desk-Mitarbeitende fürchten, der virtuelle Agent koste Stellen. Die Leiterin sagt offen, das Ziel sei, Zeit für schwierigere Arbeit freizumachen, und vereinbart mit ihrem Vorgesetzten, dass die Stellenzahl auf dieser Grundlage ein Jahr lang nicht verringert wird.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Der Desk ist Ihr Frühsignal. Geben Sie ihm vor dem Start Release-Notes, bekannte Probleme und klare Support-Informationen, und lesen Sie, was er zurückmeldet. Beheben Sie die Ursachen wiederholter Kontakte.

### Service- und Betriebsteams

Arbeiten Sie mit dem Desk an gemeinsamem Wissen, klarer Eskalation und einem schnellen Weg zu Spezialisten. Beteiligen Sie sich am Swarming, wo es hilft, und sagen Sie dem Desk, was Sie gelernt haben, damit die erste Ebene mehr lösen kann.

### Führung und Governance

Behandeln Sie den Desk als Gesicht Ihrer Services und als Frühwarnsystem. Finanzieren Sie Werkzeuge, Wissensarbeit und Schulung. Seien Sie vorsichtig mit Zielen, die Mitarbeitende drängen, Tickets schnell zu schließen. Verlangen Sie Belege dafür, was Nutzer erleben.

### Kunden und Nutzer

Sie sollten so fragen können, wie es Ihnen passt, hören, was als Nächstes geschieht, und bei Bedarf eine Person erreichen. Beschreiben Sie Ihr Problem und was Sie gerade taten; das hilft dem Desk. Sagen Sie ihm, wenn ein Rat nicht funktioniert hat.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verbessern Sie den Desk in kleinen Schritten mit Nutzern: Probieren Sie einen neuen Kanal mit einer Gruppe aus, passen Sie an und weiten Sie aus. Beziehen Sie die Menschen am Desk in die Wahl ein, was geändert wird. Vorsicht: Ständige Änderungen an Werkzeugen und Skripten erschöpfen Mitarbeitende; takten Sie Änderungen und erklären Sie sie.

### KI

KI kann Kontakte klassifizieren und weiterleiten, lange Verläufe zusammenfassen, Artikel vorschlagen und Antworten zur Prüfung durch Agenten entwerfen. Ein virtueller Agent kann Routinefragen beantworten. Benennen Sie eine verantwortliche Person, halten Sie einen sichtbaren Weg zu einer Person offen und prüfen Sie eine Stichprobe der KI-Gespräche. Vorsicht: Flüssig vorgetragene falsche Antworten untergraben Vertrauen; verfolgen Sie daher Korrekturen und Beschwerden. Siehe Thema 5.3 — KI-Service-Desk und virtuelle Agenten.

### Automatisierung

Automatisieren Sie Routineanfragen wie Passwort-Rücksetzungen und Standardzugriff, mit Prüfungen und Protokollen, sowie Ticket-Aktualisierungen und Benachrichtigungen. Vorsicht: Automatisierung kann Nutzer aussperren oder Zugriff fälschlich gewähren; sehen Sie Identitätsprüfungen, Ratenbegrenzungen und Überprüfung vor. Siehe Thema 6.5 — Self-Service und automatisierte Bereitstellung.

### Analytik

Betrachten Sie Kontaktgründe, Volumen je Kanal, Zeit bis zur Lösung, Wiederholungskontakte und Nutzerfeedback. Vorsicht: Lösung beim ersten Kontakt und Bearbeitungszeit lassen sich manipulieren, und Zufriedenheitswerte spiegeln, wer Umfragen beantwortet; kombinieren Sie sie mit Stichproben realer Kontakte. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Schwer, eine Person zu erreichen.** Nutzer drehen sich durch Menüs und Bots. Bieten Sie stets einen klaren Weg zu einer Person.
- **Schweigen nach dem ersten Kontakt.** Nutzer haken nach. Geben Sie einen nächsten Schritt und eine Zeit.
- **Tickets werden geschlossen, um ein Ziel zu erreichen.** Wiederholungskontakte steigen. Messen Sie Lösung und Wiedereröffnungen und prüfen Sie Stichproben.
- **Wissen einmal geschrieben und liegen gelassen.** Artikel veralten. Prüfen Sie die Nutzung und legen Sie still, was versagt.
- **Übergaben überall.** Tickets springen zwischen Warteschlangen. Verbessern Sie die Fähigkeiten der ersten Ebene, das Routing oder das Swarming.
- **Bot-Antworten, die niemand prüft.** Falsche Ratschläge verbreiten sich. Prüfen Sie eine Stichprobe und beheben Sie die Quelle.
- **Desk von der Organisation abgeschnitten.** Muster werden nicht weitergegeben. Teilen Sie den Verantwortlichen mit, was Sie hören.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Kanäle | Telefon und E-Mail | Portal ergänzt | Einheitliche Aufzeichnung über Kanäle | Kanäle anhand von Nutzungsbelegen gewählt | Erlebnis über Kanäle und Funktionen hinweg konsistent |
| Lösung | Meist eskaliert | Einige Lösungen der ersten Ebene | Befugnis und Wissen der ersten Ebene definiert | Lösung und Wiedereröffnung gemessen | Lösung durch Automatisierung und Swarming gestützt |
| Wissen | Persönliche Notizen | Gemeinsame Artikel | Artikel als Teil der Arbeit geschrieben | Nutzung und Qualität der Artikel gemessen | Wissen laufend aus Kontakten verbessert |
| Einsicht | Volumenzählungen | Häufigste Gründe aufgelistet | Gründe überprüft und an Verantwortliche weitergegeben | Kontakte durch Ursachenbehebung verringert | Nachfrage gemeinsam mit Produkt- und Service-Teams gestaltet |

## Checkliste

- [ ] Nutzer können uns über die Kanäle erreichen, die sie bevorzugen, mit einer Aufzeichnung.
- [ ] Wir kennen die häufigsten Kontaktgründe und überprüfen sie regelmäßig.
- [ ] Die erste Ebene hat die Befugnis und das Wissen, häufige Probleme zu lösen.
- [ ] Jeder Kontakt endet mit einem klaren nächsten Schritt und einer Zeit.
- [ ] Self-Service-Wege funktionieren, und Nutzer kennen sie.
- [ ] Wissen wird als Teil der Arbeit geschrieben und aktualisiert.
- [ ] Wir melden Muster an Produkt- und Service-Verantwortliche.
- [ ] Automatisierung und KI haben eine verantwortliche Person, einen sichtbaren Weg zu einer Person und stichprobenartige Prüfung.

## KI-Prompts

**Gruppieren Sie Kontaktgründe.**

```text
Below are ticket titles and short descriptions from our service desk, with personal data removed: [paste sample].
Group them into up to ten reasons, count each, and quote two short examples exactly for each reason. For the top three, list one question to ask about whether the contact could be avoided. Do not guess causes.
List what you are unsure of.
```

**Entwerfen Sie eine Antwort zur Prüfung durch Agenten.**

```text
User message: [paste message, with personal data removed]. Relevant article text: [paste article].
Draft a reply of under 120 words in plain language that uses only the article, states the next step, and says clearly if the article does not answer the question. Do not promise outcomes or timings that are not in the article.
List what you are unsure of.
```

**Testen Sie die Grenze eines virtuellen Agenten.**

```text
Our virtual agent will handle: [list topics]. It must hand over to a person for: [list topics].
Write 25 test messages, some inside the scope, some at the edge, and some that must be handed over, and for each state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

## KI-Skills

- [service-catalog](../../../../skills/service-catalog/SKILL.md): nutzen Sie ihn, um zu beschreiben, was Nutzer anfragen können und wie.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Übergaben und Wartezeiten im Ticketfluss zu finden.
- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um faires und nützliches Nutzerfeedback zu gestalten.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): nutzen Sie ihn, um Feedback von Nutzern und Agenten einzuholen.

## Wichtige Quellen

- Consortium for Service Innovation, Knowledge-Centered Service (KCS) und Intelligent Swarming: praktische Hinweise zu Wissen und Zusammenarbeit im Support.
- PeopleCert, ITIL certification pages: die Beschreibung der ITIL-Leitlinien durch den Eigentümer, einschließlich der Praktik Service Desk.
- Wikipedia, „Help desk“: ein Überblick über die Funktion.
- Wikipedia, „Omnichannel“: Hintergrund zu einheitlichem Kontakt über mehrere Kanäle.

## Literaturverzeichnis

1. Help desk — Wikipedia — https://en.wikipedia.org/wiki/Help_desk
2. Customer support — Wikipedia — https://en.wikipedia.org/wiki/Customer_support
3. Point of contact — Wikipedia — https://en.wikipedia.org/wiki/Point_of_contact
4. Omnichannel — Wikipedia — https://en.wikipedia.org/wiki/Omnichannel
5. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
6. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
7. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Support ticket — Wikipedia — https://en.wikipedia.org/wiki/Support_ticket
10. Consortium for Service Innovation — KCS library — https://library.serviceinnovation.org
