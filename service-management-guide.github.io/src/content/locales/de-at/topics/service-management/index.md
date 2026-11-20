# Service-Management

**Service-Management ist die Disziplin, Services so zu gestalten, zu betreiben und zu verbessern, dass Kunden die gewünschten Ergebnisse erreichen, ohne die Kosten und Risiken ihrer Erbringung selbst tragen zu müssen; agile Praxis, KI, Automatisierung und Analytik sind vier Wege, diese Arbeit besser zu machen, aber kein Ersatz für sie.**

## Warum das wichtig ist

Die meisten Organisationen sind zugleich Kunde und Anbieter von Services. Ein Krankenhaus verlässt sich auf ein elektronisches Aktensystem, das seine IT-Abteilung betreibt, und diese Abteilung verlässt sich auf einen Cloud-Anbieter. Jedes Glied der Kette verspricht dem nächsten etwas. Wenn ein Versprechen bricht, wandert der Ausfall entlang der Kette und trifft einen Menschen, der die Ursache nie gesehen hat: eine Pflegekraft, die eine Patientenakte nicht öffnen kann, einen Kunden, der nicht bezahlen kann.

Service-Management gibt den Menschen, die diese Versprechen machen, eine gemeinsame Art, darüber zu denken und zu sprechen. Es stellt eine schlichte Frage: Was muss der Kunde erreichen, und was müssen wir wiederholt und verlässlich tun, damit er es kann? Die Antwort betrachtet es als fortlaufende Praxis und nicht als Projekt mit Enddatum.

Für Technikteams bedeutet der Wandel, von „Wir betreiben Server und Anwendungen“ zu „Wir liefern ein Ergebnis“ zu kommen. Die Server bleiben wichtig. Doch das Erfolgsmaß verschiebt sich von der Frage, ob die Maschine läuft, zur Frage, ob die Person ihre Arbeit erledigen konnte. Das erklärt, warum ein Team jedes Verfügbarkeitsziel erreichen und dennoch hören kann, sein Service sei schlecht.

Dieser Leitfaden betrachtet Service-Management durch vier Linsen: Agilität, KI, Automatisierung und Analytik. Jede Linse verändert, wie Services betrieben werden. Keine ändert die obige Frage. Lesen Sie dieses Thema zuerst; spätere Themen setzen sein Vokabular voraus.

## Kernkonzepte

**Service.** ITIL 4 definiert einen Service als ein Mittel, gemeinsame Wertschöpfung zu ermöglichen, indem Ergebnisse unterstützt werden, die Kunden erreichen wollen, ohne dass sie bestimmte Kosten und Risiken selbst verwalten müssen. Zwei Teile dieser Definition tragen Gewicht. „Gemeinsame Wertschöpfung“ (value co-creation) bedeutet, dass der Wert nicht beim Anbieter liegt: Er entsteht, wenn der Kunde den Service nutzt. Und „ohne bestimmte Kosten und Risiken verwalten zu müssen“ sagt, was der Anbieter übernimmt, und das ist der Grund, warum Kunden den Service überhaupt bezahlen oder finanzieren.

**Wert, Ergebnisse, Outputs.** Ein Output ist das, was ein Service hervorbringt, etwa ein gelöstes Ticket oder ein ausgeliefertes Release. Ein Ergebnis (outcome) ist die Veränderung, die der Kunde wollte, etwa ein rechtzeitig behandelter Patient. Wert ist das Urteil des Kunden darüber, was das Ergebnis im Verhältnis zu Kosten und Risiko wert war. Ein Team kann viele Outputs und kein Ergebnis erzeugen, und eine Service-Überprüfung, die nur Outputs zählt, bemerkt es nicht.

**Anbieter, Konsument und die Rollen innerhalb von „Konsument“.** Der Anbieter gestaltet und betreibt den Service. Der Konsument ist eine größere Gruppe: Der Kunde legt die Anforderungen fest und trägt die Verantwortung für das Ergebnis, der Nutzer verwendet den Service, und der Sponsor genehmigt die Finanzierung. Eine Person kann mehrere Rollen innehaben, und ein Service scheitert, wenn der Anbieter nur mit einer davon spricht.

**Service-Beziehung.** Anbieter und Konsumenten sind durch eine Beziehung aus Vereinbarungen, Erwartungen und einer Rückkopplungsschleife verbunden. Ein Service-Level-Agreement (SLA), behandelt in „Thema 3.7 — Service-Level-Management“, ist ein Teil davon. Das Gespräch, das das SLA ehrlich hält, ist der größere Teil.

**Praktiken, nicht nur Prozesse.** Ältere Beschreibungen des IT-Service-Managements (ITSM) betonen Prozesse: feste Abfolgen von Schritten, etwa einen Incident-Prozess. Aktuelle Leitlinien, darunter ITIL 4, sprechen von Praktiken: Mengen organisatorischer Ressourcen, die für die Ausführung von Arbeit auf ein Ziel hin gestaltet sind. Eine Praktik umfasst Menschen, Informationen, Werkzeuge und Partner ebenso wie die Schritte. „Thema 1.2 — ITIL“ zeichnet nach, wie das Framework zu dieser Formulierung kam, und „Thema 1.4 — Das Service-Wertschöpfungssystem“ zeigt, wie Praktiken zusammenpassen.

**Von technikzentriert zu servicezentriert.** Ein technikzentriertes Team organisiert sich um Komponenten: das Netzwerkteam, das Datenbankteam, das Anwendungsteam. Ein servicezentriertes Team organisiert sich um das, was der Kunde erlebt und was diese Komponenten durchquert. Die meisten Organisationen stehen irgendwo dazwischen, und ihre Incident-Auswertungen zeigen, wo: Wenn jede Auswertung mit „Es war die Komponente des anderen Teams“ endet, ist die Organisation noch technikzentriert.

**Service-Management jenseits der IT.** Dieselben Ideen gelten für Personalwesen, Facility Management, Recht und Finanzen, weshalb viele Organisationen einen Service Desk und einen Service-Katalog auf diese Bereiche ausdehnen. Siehe „Thema 1.9 — Enterprise Service Management“.

**Die vier Linsen.** *Agilität* bedeutet fortlaufende Einbindung der Stakeholder, kontinuierliche Verbesserung und kontinuierliche Auslieferung funktionierender Änderungen. *KI* bedeutet Systeme, die Muster lernen und erzeugen oder empfehlen, und die einen Verantwortlichen und menschliche Aufsicht brauchen. *Automatisierung* bedeutet Arbeit, die Software ausführt, ohne dass ein Mensch jeden Schritt anfasst. *Analytik* bedeutet, Daten zu nutzen, um Fragen zum Service zu beantworten. Teil 2 behandelt Agilität, Teil 5 KI, Teil 6 Automatisierung und Teil 7 Analytik.

## Bewährte Praktiken

1. **Beginnen Sie beim Ergebnis des Kunden.** Schreiben Sie für jeden Service einen Satz, der mit „Der Kunde kann …“ beginnt. Wenn das Team ihn nicht schreiben kann, weiß es noch nicht, was es anbietet. Prüfen Sie den Satz mit einem echten Kunden, nicht mit einer Kollegin oder einem Kollegen, die Ihre Annahmen teilen.
2. **Benennen Sie für jeden Service eine verantwortliche Person.** Eine Person ist für den Service verantwortlich, wie ihn der Kunde erlebt, auch wenn viele Teams beitragen. Ohne Verantwortliche wägt niemand eine Korrektur in einem Team gegen die Kosten für ein anderes ab.
3. **Beschreiben Sie Services in den Worten des Kunden.** Ersetzen Sie „Exchange-Cluster“ durch „E-Mail und Kalender“. Technische Sichten sind innerhalb des Anbieters nützlich; die kundenorientierte Beschreibung gehört in Kataloge, Berichte und Statusseiten.
4. **Legen Sie die Grenze des Services fest.** Sagen Sie, was enthalten ist, was nicht, und was der Kunde selbst tun muss. Unklare Grenzen führen zu Streit im ungünstigsten Moment, während eines Incidents.
5. **Behandeln Sie Verbesserung als Teil des Services.** Reservieren Sie einen sichtbaren Anteil der Kapazität für Verbesserungsarbeit und besprechen Sie regelmäßig einen kleinen Backlog an Änderungen mit den Stakeholdern. Wenn Ihr Team Sprints nutzt, lässt sich in jedem eine Überprüfung unterbringen; die Gewohnheit zählt mehr als der Takt.
6. **Nutzen Sie die Linsen, um Fragen zu stellen, nicht um Werkzeuge zu kaufen.** Fragen Sie bei jeder Änderung, welche agile Praxis die Rückkopplung verkürzen würde, wo KI helfen könnte und wer sie beaufsichtigt, welche Automatisierung wiederholte Handarbeit beseitigen würde und welche Daten zeigen würden, ob es funktioniert hat.
7. **Halten Sie Menschen für Entscheidungen verantwortlich.** Software kann empfehlen und innerhalb von Grenzen handeln, aber eine benannte Person entscheidet, was die Grenzen sind, und prüft, was geschehen ist. Das gilt für Skripte ebenso wie für KI-Systeme.
8. **Messen Sie Ergebnisse und halten Sie Messgrößen ehrlich.** Koppeln Sie jede Output-Messgröße, etwa geschlossene Tickets, mit einer Ergebnis- oder Erlebnismessgröße und benennen Sie, wie jede manipuliert werden könnte. Das begleitende Buch *Service Management Metrics* liefert Definitionen.
9. **Schreiben Sie auf, was Sie versprechen.** Vereinbarungen müssen nicht lang sein. Eine kurze Seite mit Umfang, Zeiten, Zielen und Kontakten verhindert mehr Streit als ein langer Vertrag, den niemand liest.
10. **Überprüfen Sie die Service-Beziehung, nicht nur den Service.** Treffen Sie Kunden regelmäßig, hören Sie, womit sie kämpfen, und sagen Sie ihnen, was Sie deshalb geändert haben. Eine Beziehung ohne Rückmeldung verfällt.

## Fragen für die Diskussion im Team

**Wenn ein Kunde unseren Service in einem Satz beschriebe, was würde er sagen, und würden wir zustimmen?**
Das prüft, ob Anbieter und Konsument dasselbe Bild vom Service haben. Erwarten Sie Antworten, die Komponenten oder den Aufwand des Anbieters beschreiben statt des Ergebnisses des Kunden. Sammeln Sie nach Möglichkeit echte Sätze von Kunden. Fragen Sie anschließend, welche Wörter in deren Satz wir selbst nie verwenden.

**Wo zeigen unsere Berichte Grün, während Kunden unzufrieden sind?**
Das sucht die Lücke zwischen Outputs und Ergebnissen. Teams nennen oft Verfügbarkeits- oder Ticketziele, die in einer schlechten Woche erreicht wurden. Achten Sie darauf, was der Bericht auslässt. Fragen Sie anschließend, welche eine Messgröße rot geworden wäre.

**Welche unserer Services haben keine einzelne verantwortliche Person?**
Lücken in der Verantwortung sind an Teamgrenzen häufig, etwa bei gemeinsamen Plattformen oder beim Onboarding. Die Diskussion kann einen Service zutage fördern, von dem alle annehmen, ein anderer sei zuständig. Streben Sie eine benannte Person an, kein Gremium. Fragen Sie anschließend, wer entscheidet, wenn zwei Teams Gegensätzliches wollen.

**Was muss ein Kunde selbst tun, das wir nie aufgeschrieben haben?**
Grenzen sind auf der Kundenseite meist unscharf: Daten vorbereiten, Anfragen genehmigen, Kontaktdaten aktuell halten. Sie hören vielleicht, „das weiß doch jeder“. Fragen Sie ein neueres Teammitglied oder einen Kunden. Fragen Sie anschließend, welche ungeschriebene Pflicht unseren letzten Streit verursacht hat.

**Welche der vier Linsen (Agilität, KI, Automatisierung, Analytik) würde unserem Service in diesem Jahr am meisten helfen, und was würde sie uns kosten?**
Die Frage erzwingt eine Wahl und benennt Kosten wie Aufsicht, Wartung oder Arbeit an der Datenqualität. Teams fühlen sich oft von der neuesten Linse angezogen. Verlangen Sie den Beleg, dass das Problem existiert. Fragen Sie anschließend, was wir aufgeben würden, um Platz zu schaffen.

**Was würden wir anders machen, wenn die Menschen, denen wir dienen, alles sehen könnten, was wir tun?**
Das bringt verborgene Arbeit wie manuelle Umgehungen ans Licht und prüft, ob das Team stolz auf seine Arbeitsweise ist. Die Antworten reichen von „nichts“ bis zu einer langen Liste von Peinlichkeiten. Behandeln Sie die Liste als Verbesserungskandidaten, nicht als Schuldzuweisung. Fragen Sie anschließend, welchen Punkt wir diesen Monat sichtbar machen.

## In der Praxis: ein Beispiel aus dem Service-Management

Ein regionaler Verbund öffentlicher Bibliotheken betreibt eine kleine IT-Abteilung, die 40 Zweigstellen betreut. Die Mitarbeitenden beschreiben ihre Arbeit als „die Bibliothekssysteme am Laufen halten“. Beschwerden kommen schubweise, meist von Leitungen der Zweigstellen, und der Monatsbericht der Abteilung besteht aus einer Seite Verfügbarkeitszahlen, die stets über dem Ziel liegen.

Die Service-Managerin führt eine kurze Übung durch. Sie bittet drei Zweigstellenleitungen, den Satz „Der IT-Service hilft mir …“ zu vervollständigen. Die Antworten drehen sich darum, die Zweigstelle pünktlich zu öffnen, Besuchern beim Finden und Ausleihen von Medien zu helfen und die Kinderlesestunde durchzuführen. Keine nennt Verfügbarkeit. Sie stellt fest, dass sich das Personal am Öffnungstag der Zweigstelle an vier Systemen anmeldet und dass ein langsamer Login um 8:55 Uhr mehr kostet als ein kurzer Ausfall um Mitternacht.

Das Team benennt seine Services in den Worten der Kunden um, etwa „Zweigstelle öffnen und schließen“ und „Ausleihe und Rückgabe“. Es benennt für jeden eine verantwortliche Person, berichtet die Zeit, die eine Zweigstelle nach dem Öffnen bis zum Start der Ausleihe brauchte, und behält die Verfügbarkeitszahlen für den eigenen Gebrauch. Außerdem führt es einen kleinen Verbesserungs-Backlog ein, den es jeden Monat mit zwei Zweigstellenleitungen durchgeht. Zwei der ersten Punkte sind eine Login-Änderung und eine gedruckte Anleitung für ein wiederkehrendes Problem.

Was sich ändert: Die Gespräche mit den Zweigstellen verlagern sich von Beschwerden über Ausfälle zu konkreten Wünschen. Was schwierig bleibt: Die neue Öffnungszeit-Zahl hängt davon ab, dass das Personal sie erfasst, und manche Zweigstellen erfassen sie uneinheitlich. Zudem hat die Abteilung keine vereinbarte verantwortliche Person für das Bestellsystem für Bücher, das teils einem Lieferanten und teils einem Beschaffungsteam gehört. Diese Lücke ist ihr nächstes Diskussionsthema.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Betrachten Sie den Service, den Sie bauen, als etwas, das Menschen über Jahre nutzen werden. Fragen Sie, wer ihn betreiben wird, woran Sie erkennen, dass er für Kunden funktioniert, und was Sie außer Code übergeben. Halten Sie das Ergebnis des Kunden neben dem Backlog, damit Zielkonflikte sichtbar sind.

### Service- und Betriebsteams

Ihre tägliche Arbeit ist der Service, wie ihn Kunden erleben. Behalten Sie den Satz des Kunden beim Priorisieren im Blick, halten Sie fest, was Sie aus Incidents und Anfragen lernen, und sagen Sie den Menschen, die den Service bauen und finanzieren, was Sie sehen.

### Führung und Governance

Finanzieren Sie Services, nicht nur Projekte, und verlangen Sie für jeden eine verantwortliche Person und ein Ergebnis. Seien Sie vorsichtig bei Berichten, die allein aus Outputs bestehen. Nehmen Sie sich mindestens einige Male im Jahr Zeit, Kunden direkt zu treffen.

### Kunden und Nutzer

Sie sind Teil des Services, nicht nur Empfänger. Sagen Sie, welches Ergebnis Sie brauchen, sagen Sie dem Anbieter, was nicht funktioniert, und erwarten Sie zu hören, was sich daraufhin geändert hat. Verlangen Sie die Servicegrenze schriftlich, wenn Sie unsicher sind, was abgedeckt ist.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Wenden Sie kontinuierliche Verbesserung auf den Service selbst an: ein kleiner Backlog an Änderungen, mit Kunden durchgesehen, in kleinen Stücken geliefert. Vorsicht: Verwenden Sie agiles Vokabular nicht dazu, einen Service in ein Projekt mit Frist umzudeuten; Services dauern fort, und ihre Verbesserung endet nie.

### KI

Nutzen Sie KI dort, wo sie qualifizierten Menschen bei routinemäßigem Lesen und Schreiben Zeit spart, etwa beim Zusammenfassen eines langen Ticketverlaufs, mit einer benannten verantwortlichen Person und jemandem, der prüft, was sie erzeugt. Vorsicht: KI macht plausible Fehler, legen Sie daher vorher fest, wie eine falsche Antwort bemerkt und korrigiert würde. „Thema 5.1 — KI im Service-Management“ steckt das Gelände ab.

### Automatisierung

Automatisieren Sie wiederholte, gut verstandene Schritte, etwa das Anlegen von Konten oder das Neustarten eines bekannten fehlerhaften Services, und führen Sie ein Protokoll darüber, was die Automatisierung getan hat, sowie einen Weg, es rückgängig zu machen. Vorsicht: Die Automatisierung eines verwirrenden Prozesses macht die Verwirrung schneller, vereinfachen Sie daher zuerst. Siehe „Thema 6.1 — Automatisierungsstrategie“.

### Analytik

Erheben Sie Daten, die eine gestellte Frage beantworten, etwa welche Anfragen am längsten dauern und warum. Vorsicht: Ticketdaten spiegeln wider, was Menschen zu erfassen gewählt haben, nicht alles, was geschah, und jede Messgröße, die zum Ziel wird, lädt zur Manipulation ein. Definitionen und Leitplanken stehen im begleitenden Buch *Service Management Metrics*, und „Thema 7.1 — Analytik für das Service-Management“ behandelt Methoden.

## Häufige Fehlermuster

- **Aufwand statt Ergebnisse zählen.** Berichte listen Tickets und Stunden, aber nicht, was Kunden erreicht haben. Ergänzen Sie für jeden Service eine Ergebnis- oder Erlebnismessgröße.
- **Services ohne verantwortliche Person.** Alle tragen bei, niemand entscheidet. Benennen Sie pro Service eine verantwortliche Person und veröffentlichen Sie den Namen.
- **Technische Namen in Kundengesprächen.** Kunden erkennen nicht, was abgedeckt ist. Beschreiben Sie Services in den Worten des Kunden und halten Sie die technische Landkarte getrennt.
- **Das Framework als Ziel behandeln.** Das Team übernimmt jeden ITIL-Begriff und ändert nichts, was Kunden bemerken. Wählen Sie eine Praktik, verbessern Sie sie anhand von Belegen und hören Sie auf, wenn die Belege enden.
- **Werkzeuge zuerst.** Eine Plattform wird gekauft, bevor jemand den Service beschrieben hat. Schreiben Sie zuerst die Service-Beschreibung und das Verbesserungsziel, wählen Sie dann Werkzeuge.
- **Urteilsvermögen ohne Aufsicht an Software abgeben.** Eine Automatisierung oder ein KI-System handelt ohne benannte verantwortliche Person. Weisen Sie eine verantwortliche Person zu, setzen Sie Grenzen und prüfen Sie, was getan wurde.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Service-Definition | Services nach Technik beschrieben | Hauptservices nach Ergebnis beschrieben | Alle Services mit ergebnisbasierten Beschreibungen und Grenzen | Beschreibungen regelmäßig mit Kunden überprüft | Beschreibungen und Grenzen über Anbieter und Partner hinweg geteilt |
| Verantwortung | Verantwortung unklar | Verantwortliche für Hauptservices | Jeder Service hat eine benannte verantwortliche Person | Verantwortliche prüfen Ergebnisse und Kosten regelmäßig | Verantwortliche koordinieren sich über Lieferanten und interne Teams hinweg |
| Verbesserung | Verbesserung geschieht aus der Krise | Eine Ideenliste existiert | Ein durchgesehener Verbesserungs-Backlog mit reservierter Kapazität | Verbesserungen an Belegen geprüft | Verbesserung lernt von Kunden und Daten über Services hinweg |
| Nutzung der vier Linsen | Ad hoc genutzt | In einem Team ausprobiert | Bewusst gewählt, mit Verantwortlichen und Aufsicht | Wirkungen gemessen und überprüft | Gemeinsam unter einheitlicher Governance genutzt |

## Checkliste

- [ ] Jeder Service hat ein Kundenergebnis in einem Satz.
- [ ] Jeder Service hat eine benannte verantwortliche Person.
- [ ] Kundenorientierte Beschreibungen verwenden die Worte des Kunden.
- [ ] Servicegrenzen, einschließlich der Pflichten des Kunden, sind aufgeschrieben.
- [ ] Ein durchgesehener Verbesserungs-Backlog existiert, mit dafür reservierter Zeit.
- [ ] Jede Output-Messgröße ist mit einer Ergebnis- oder Erlebnismessgröße gekoppelt.
- [ ] Jede Automatisierung und jedes KI-System hat eine verantwortliche Person und einen Weg, zu prüfen, was es getan hat.
- [ ] Wir treffen Kunden regelmäßig und sagen ihnen, was sich geändert hat.

## KI-Prompts

**Technische Servicenamen in Kundenergebnisse umformulieren.**

```text
Hier ist eine Liste unserer technischen Services: [Liste mit einzeiligen Beschreibungen einfügen].
Schlagen Sie zu jedem einen Satz in einfacher Sprache vor, der mit „Der Kunde kann …“ beginnt, und nennen Sie die Art von Kunde, die Sie annehmen. Erfinden Sie keine Fakten über unser Geschäft; wo Sie es nicht beurteilen können, schreiben Sie „unbekannt“ und stellen Sie eine Frage.
Listen Sie am Ende auf, bei welchen Punkten Sie unsicher sind.
```

**Lücken in der Verantwortung anhand einer Service-Liste finden.**

```text
Unten steht unsere Service-Liste mit den bisher erfassten Verantwortlichen: [Liste einfügen].
Erstellen Sie eine Tabelle: Service, Verantwortliche Person (nur wenn angegeben; sonst „keine erfasst“) und eine Frage, mit der sich die tatsächlich verantwortliche Person ermitteln lässt. Raten Sie keine Verantwortlichen.
Stellen Sie zuerst Rückfragen, kennzeichnen Sie Annahmen und listen Sie auf, bei welchen Punkten Sie unsicher sind.
```

**Ein Kundengespräch vorbereiten.**

```text
Ich treffe nächste Woche Kunden des Services [Servicename]. Anwesende Kundenrollen: [Rollen auflisten].
Entwerfen Sie acht offene Fragen dazu, welches Ergebnis sie brauchen, was sie behindert und was sie selbst tun. Vermeiden Sie Suggestivfragen und Fachjargon. Schlagen Sie keine Antworten vor.
Schließen Sie mit drei Dingen, auf die ich achten sollte, und mit den Punkten, bei denen Sie unsicher sind.
```

## KI-Skills

- [service-catalog](../../../../skills/service-catalog/SKILL.md): zu verwenden, um Service-Beschreibungen in einen kundenorientierten Katalog zu überführen.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): zu verwenden, um Kunden, Nutzer und Sponsoren zu identifizieren und zu klären, was jede Gruppe braucht.
- [maturity-models](../../../../skills/maturity-models/SKILL.md): zu verwenden, um die Reifegradtabelle als Selbsteinschätzung des Teams durchzuführen.

## Wichtige Quellen

- Wikipedia, „Service management“: ein kurzer Überblick über die Disziplin branchenübergreifend.
- Wikipedia, „IT service management“: wie die Ideen auf die IT anwendbar sind, mit den Frameworks, die sie beschreiben.
- Wikipedia, „Service-dominant logic“: die Marketingtheorie hinter gemeinsamer Wertschöpfung, nützlich, um zu erklären, warum der Wert beim Kunden liegt.
- Wikipedia, „ITIL“: das bekannteste Framework, einschließlich der oben zitierten Definition von Service (prüfen Sie den Wortlaut an den aktuellen Veröffentlichungen des Eigentümers; siehe „Thema 1.3 — ITIL 5“).

## Literaturverzeichnis

1. Service management — Wikipedia — https://en.wikipedia.org/wiki/Service_management
2. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
3. Service (economics) — Wikipedia — https://en.wikipedia.org/wiki/Service_(economics)
4. Service-dominant logic — Wikipedia — https://en.wikipedia.org/wiki/Service-dominant_logic
5. Value creation — Wikipedia — https://en.wikipedia.org/wiki/Value_creation
6. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
7. Service design — Wikipedia — https://en.wikipedia.org/wiki/Service_design
8. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
9. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
