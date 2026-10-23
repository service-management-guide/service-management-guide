# KI-Service-Desk und virtuelle Agenten

**Virtuelle Agenten und KI-Triage können Routinefragen beantworten, Tickets weiterleiten und vorbereiten und Antworten entwerfen. Sie helfen, wenn sie in geprüftem Wissen verankert sind, ehrlich sagen, was sie nicht wissen, leicht zugunsten einer Person verlassen werden können und daran gemessen werden, ob Nutzer bekommen haben, was sie brauchten.**

## Warum das wichtig ist

Service Desks wollten schon lange einfache Fragen schneller und billiger beantworten. Chatbots waren der erste Versuch: Skriptmenüs, die Nutzer frustrierten. Neuere Assistenten auf Grundlage großer Sprachmodelle sind weit flüssiger und können offene Fragen in einfacher Sprache bearbeiten. Das macht sie viel nützlicher und zugleich viel eher in der Lage, Schaden anzurichten, wenn sie falschliegen, denn ihre falschen Antworten klingen richtig.

Für Nutzer kann ein virtueller Agent zu jeder Stunde ein schneller Weg zu einer Antwort sein. Für Desk-Mitarbeitende können KI-Triage und -Entwürfe das Sortieren und Schreiben übernehmen, damit sie Zeit für schwierigere Fälle haben. Für die Organisation können beide die Kosten je Kontakt senken. Diese Vorteile sind real, und sie hängen davon ab, dass der Assistent für die richtigen Fragen eingesetzt, korrekt gehalten wird und keine Menschen festhält, die einen Menschen brauchen.

Die Risiken haben ein menschliches Gesicht. Ein Nutzer, der vor einer Frist aus einem System ausgesperrt ist, eine Pflegekraft mit Patientenkontakt, die eine schnelle Lösung braucht, oder ein Mensch in Not, der ein heiteres Skript erhält: Jeder wird von einem Assistenten schlecht bedient, der nicht erkennt, wann er übergeben muss. Dieses Thema beschreibt, wo virtuelle Agenten und KI-Triage passen, wie man sie gestaltet und testet und wie man sie ehrlich misst. Es baut auf dem Service Desk (Thema 3.1 — Service Desk), Service-Requests (Thema 3.6 — Service-Request-Management) und Wissen (Thema 3.9 — Wissensmanagement) auf und stützt sich auf die Ideen in Thema 5.1 — KI im Service-Management und Thema 5.6 — KI-Governance, Risiko und Compliance.

## Kernkonzepte

**Virtueller Agent.** Software, die per Text oder Sprache mit Nutzern spricht, um Fragen zu beantworten oder Aufgaben auszuführen. Die Wikipedia-Artikel zu Chatbots und Virtual assistants beschreiben sie. Im Service Desk ist ein virtueller Agent oft die erste Anlaufstelle, mit einem Weg zu einer Person.

**Regelbasiert oder KI-basiert.** Frühe Chatbots folgten Skripten oder glichen Stichwörter ab. KI-basierte Assistenten interpretieren natürliche Sprache und können Antworten formulieren. Wikipedia beschreibt Conversational user interfaces und Natural language understanding. Skripte sind vorhersehbar und begrenzt; Sprachmodelle sind flexibel und weniger vorhersehbar. Viele Produktivsysteme kombinieren beides: skriptgesteuerte Abläufe für sensible Aufgaben, Sprachmodelle für offene Fragen.

**Absichten und Abläufe (Intents und Flows).** Eine Absicht ist, was der Nutzer tun will, etwa „mein Passwort zurücksetzen“ oder „einen Laptop bestellen“. Viele Assistenten erkennen die Absicht und führen dann einen definierten Ablauf mit Prüfungen aus, was für Handlungen sicherer ist. Bei offenen Fragen ruft der Assistent einschlägige Artikel ab und antwortet daraus.

**Verankerung (Grounding).** Aus bestimmten, geprüften Quellen antworten, meist Wissensartikeln, und sie zeigen, statt aus dem allgemeinen Gedächtnis des Modells. Wikipedia beschreibt Retrieval-augmented generation. Verankerung verringert erfundene Antworten, beseitigt sie aber nicht, und sie macht die Qualität Ihrer Wissensdatenbank zur Grenze der Qualität des Assistenten. Siehe Thema 3.9 — Wissensmanagement.

**Umleitung und Lösung (Deflection und Resolution).** Umleitung heißt, dass ein Nutzer vom Assistenten eine Antwort erhielt und keine Person kontaktierte. Lösung heißt, dass das Problem des Nutzers tatsächlich gelöst wurde. Beides unterscheidet sich: Ein Nutzer, der aufgibt und anderswo hingeht, ist umgeleitet, nicht gelöst. Messen Sie Lösung über Nachverfolgung, Wiederholungskontakte und Feedback.

**Übergabe (Handover).** Das Gespräch mit Kontext an eine Person weiterreichen, wenn der Assistent nicht helfen kann oder der Nutzer es verlangt. Eine gute Übergabe trägt den Verlauf mit, damit der Nutzer sich nicht wiederholen muss. Eine schlechte wirft ihn in eine Warteschlange. Machen Sie „mit einer Person sprechen“ stets sichtbar.

**Triage und Routing.** KI klassifiziert eingehende Tickets nach Art, Dringlichkeit und Team und leitet sie weiter. Wikipedia beschreibt Triage. Sie kann auch wahrscheinliche Major Incidents aus einem Schwall ähnlicher Kontakte erkennen. Fehler schicken Arbeit in die falsche Warteschlange; die Rate der Umleitungen ist ein gutes Maß.

**Entwerfen und Zusammenfassen für Agenten.** KI kann lange Ticketverläufe zusammenfassen, Artikel vorschlagen und Antworten zur Bearbeitung durch den Agenten entwerfen. Das hält eine Person in Kontrolle und spart Zeit. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

**Erkennung von Stimmung und Dringlichkeit.** Techniken, die Stimmung oder Dringlichkeit des Nutzers aus Text ableiten. Wikipedia beschreibt Sentiment analysis. Sie kann einen verärgerten Nutzer oder eine Nachricht, die eine Frist nennt, priorisieren. Sie ist unvollkommen, besonders über Sprachen und Kulturen hinweg, nutzen Sie sie daher als Hinweis.

**Sprache und Mehrsprachigkeit.** Spracherkennung und Sprachsynthese erlauben Sprachinteraktion; maschinelle Übersetzung erlaubt Support in mehr Sprachen. Wikipedia beschreibt diese Technologien. Die Qualität schwankt nach Sprache und Akzent, und Nutzer weniger verbreiteter Sprachen werden womöglich schlechter bedient. Testen Sie mit realen Sprechenden.

**Barrierefreiheit und Inklusion.** Assistenten müssen für Menschen mit Behinderungen und für die funktionieren, die sich mit Technik nicht sicher fühlen. Wikipedia beschreibt Accessibility und die Web Content Accessibility Guidelines (WCAG). Ein Chat-Fenster, das Screenreader nicht nutzen können, schließt Nutzer aus. Die digitale Kluft (Digital divide), ebenfalls auf Wikipedia beschrieben, erinnert daran, dass nicht jeder Chat bevorzugt oder nutzen kann.

**Identität und Befugnis.** Ein Assistent, der Handlungen ausführen kann, etwa ein Passwort zurücksetzen, muss prüfen, wer fragt. Lassen Sie einen Assistenten nie allein aufgrund einer Behauptung Zugriff gewähren. Siehe Thema 3.6 — Service-Request-Management und Thema 3.13 — Informationssicherheitsmanagement.

**Ehrlichkeit darüber, eine Maschine zu sein.** Nutzer sollten wissen, dass sie mit einer KI sprechen, und der Assistent sollte nicht vorgeben, ein Mensch zu sein oder Gefühle zu haben, die er nicht hat. Manche Gesetze verlangen Offenlegung; prüfen Sie die Regeln, die für Sie gelten. Der Wikipedia-Artikel zu Dark patterns beschreibt Gestaltungspraktiken, die Nutzer täuschen, etwa den Weg zu einer Person zu verstecken; vermeiden Sie sie.

**Sicherheit von Assistenten.** Assistenten sind Angriffen ausgesetzt wie Prompt Injection, bei der Text in einer Nachricht oder einem Dokument versucht, die Anweisungen des Assistenten zu übersteuern. Wikipedia beschreibt Prompt injection. Geben Sie einem Assistenten keine Befugnisse, die eine feindselige Nachricht missbrauchen könnte, und behandeln Sie Nutzereingaben und abgerufene Dokumente als nicht vertrauenswürdig.

**Datenschutz.** Gespräche können personenbezogene Daten enthalten. Entscheiden Sie, was gespeichert wird, wie lange, wer es lesen kann und ob es ein Modell trainiert. Wikipedia beschreibt Personal data und die Datenschutz-Grundverordnung als einen rechtlichen Rahmen. Holen Sie Rechtsberatung ein.

**Wie die Blickwinkel passen.** Virtuelle Agenten sind das sichtbare Gesicht von KI, Automatisierung und Analytik am Desk. Agile Praxis legt nahe, mit wenigen Themen zu beginnen und auszuweiten. Automatisierung erledigt Aufgaben hinter dem Gespräch. Analytik sagt Ihnen, was Nutzer fragen und wo der Assistent versagt.

## Bewährte Praktiken

1. **Wählen Sie Themen, bei denen ein Assistent gut sein kann.** Beginnen Sie mit häufigen, einfachen, risikoarmen Fragen mit klaren Antworten, etwa wie man sich mit dem WLAN verbindet. Meiden Sie zunächst sensible oder folgenreiche Themen.
2. **Verankern Sie Antworten in geprüften Artikeln.** Nutzen Sie Retrieval aus der Wissensdatenbank und zeigen Sie die Quelle. Stützt keine Quelle eine Antwort, sollte der Assistent das sagen und eine Person anbieten.
3. **Machen Sie den Weg zu einer Person offensichtlich.** Zeigen Sie stets eine klare Option „mit einer Person sprechen“ und übergeben Sie mit angehängtem Gespräch. Blockieren Sie sie nie.
4. **Prüfen Sie die Identität bei Handlungen.** Nutzen Sie für alles, was Zugriff oder Daten ändert, starke Prüfungen außerhalb des Chats und begrenzen Sie, was der Assistent tun kann. Protokollieren Sie jede Handlung.
5. **Sagen Sie Nutzern, dass es eine KI ist.** Sagen Sie das zu Beginn, nennen Sie, wobei sie helfen kann und wobei nicht, und geben Sie nicht vor, ein Mensch zu sein.
6. **Bauen Sie einen Testsatz und führen Sie ihn aus.** Erstellen Sie realistische Fragen aus echten Tickets, darunter solche, die der Assistent ablehnen soll, und solche, die versuchen, ihn zu manipulieren. Führen Sie den Satz vor dem Start und nach jeder Änderung aus.
7. **Lesen Sie reale Gespräche.** Prüfen Sie jede Woche eine Stichprobe von Gesprächen, besonders die, in denen der Nutzer ging oder eine Person verlangte. Nutzen Sie sie, um Artikel, Abläufe und Anweisungen zu verbessern.
8. **Messen Sie Lösung, nicht nur Umleitung.** Verfolgen Sie Folgekontakte, Nutzerbewertungen, Übergaben und Beschwerden. Vergleichen Sie mit einer Basislinie.
9. **Beziehen Sie alle ein.** Testen Sie mit Screenreadern und mit verschiedenen Sprachen und Akzenten. Halten Sie andere Kanäle verfügbar, etwa Telefon und E-Mail.
10. **Verantworten Sie es als Service.** Benennen Sie eine verantwortliche Person, ein Budget, einen Plan für Verbesserungen und einen Plan, was zu tun ist, wenn sich das zugrunde liegende Modell oder der Anbieter ändert.

## Fragen für die Diskussion im Team

**Welche Fragen stellen Nutzer am häufigsten, und welche davon könnte ein Assistent aus unseren vorhandenen Artikeln verlässlich beantworten?**
Nutzen Sie Ticketdaten. Rechnen Sie mit einer kurzen Liste wiederkehrender Fragen. Prüfen Sie die Artikel auf Richtigkeit und Vollständigkeit. Wählen Sie anschließend fünf Fragen für eine erste Erprobung.

**Was soll der Assistent nie tun oder sagen, und wie testen wir das?**
Listen Sie Grenzen auf: keine Zugriffsänderungen ohne Verifizierung, keine Beratung zu rechtlichen oder medizinischen Fragen, keine Zusagen zu Zeiten. Rechnen Sie mit Uneinigkeit an den Rändern. Verwandeln Sie anschließend jede Grenze in einen Test.

**Was geschieht, wenn ein Nutzer frustriert ist oder eine Person verlangt, und wie lange dauert es?**
Probieren Sie es selbst. Rechnen Sie mit Lücken beim Kontext und mit Verzögerungen. Vereinbaren Sie anschließend eine Höchstzeit und ein Standardformat für die Übergabe.

**Woran erkennen wir, dass Nutzer die Antwort bekamen, die sie brauchten, und nicht nur, dass sie den Chat beendeten?**
Fragen Sie nach der Kennzahl. Rechnen Sie mit „Umleitungsquote“. Vereinbaren Sie anschließend eine Nachfrage, eine Prüfung auf Wiederholungskontakte und eine Stichprobenprüfung.

**Wer kann diesen Assistenten nutzen, und wen könnte er im Stich lassen?**
Denken Sie an Menschen mit Behinderungen, Sprachunterschieden oder geringer Zuversicht. Rechnen Sie damit, dass manche Gruppen nicht bedacht wurden. Testen Sie anschließend mit einigen realen Nutzern aus diesen Gruppen.

**Welche Daten enthalten Gespräche, wohin gehen sie, und wer kann sie lesen?**
Gehen Sie den Datenfluss durch. Rechnen Sie mit Überraschungen zu Anbietern und Aufbewahrung. Schreiben Sie anschließend den Fluss auf und bitten Sie die Datenschutzbeauftragte um Prüfung.

## In der Praxis: ein Beispiel aus dem Service-Management

Der IT-Desk eines regionalen Gesundheitsdienstes unterstützt etwa 12.000 klinische und administrative Beschäftigte. Anrufe häufen sich bei Schichtwechseln, wenn Klinikpersonal Anmeldungen und Druck braucht, und die durchschnittliche Wartezeit beträgt neun Minuten. Der Service-Manager schlägt einen virtuellen Agenten im Mitarbeiterportal und auf einem Messaging-Kanal vor.

Das Team beginnt eng. Es nimmt die 15 häufigsten „Wie mache ich …“-Fragen aus sechs Monaten Tickets, prüft die passenden Artikel mit klinischen Nutzern und schreibt acht unklare um. Der Assistent antwortet nur aus diesen Artikeln. Bei Passwort-Rücksetzungen handelt er nicht selbst; er verweist auf den Rücksetzablauf des Identitätssystems, der eine eigene Verifizierung nutzt. Ein Banner nennt ihn einen KI-Assistenten, und eine Schaltfläche „mit einer Person sprechen“ übergibt das Gespräch mit einer Zusammenfassung an einen Desk-Agenten.

Vor dem Start baut das Team 80 Testfragen, darunter solche zu Themen außerhalb der 15, etwa klinische Beratung, die der Assistent ablehnen muss, und Versuche, ihn seine Anweisungen preisgeben zu lassen. Die erste Version fällt bei neun Tests durch, meist weil sie außerhalb ihres Umfangs antwortet. Das Team schärft die Anweisungen nach und ergänzt eine Regel, dass alles Nichtpassende an eine Person geht. Im ersten Monat bearbeitet der Assistent etwa 1.400 Gespräche; rund 40 Prozent enden ohne Ticket, und 12 Prozent werden an einen Agenten übergeben. Die Managerin liest jede Woche 100 Gespräche. Sie stellt fest, dass Nutzer oft nach einem kürzlich geänderten Anmeldebildschirm fragen, den die Artikel noch nicht beschreiben, und das Team aktualisiert sie.

Was sich ändert: Die Wartezeit in Spitzenzeiten sinkt, und Agenten verbringen weniger Zeit mit Wiederholungsfragen. Was schwierig bleibt: Mitarbeitende der Nachtschicht in manchen Stationen haben schlechte Konnektivität und rufen weiter an; der Assistent tut sich mit Fragen in zwei Sprachen schwer, die viele Mitarbeitende nutzen, und das Team hat noch keine angemessene Testmethode gefunden; und die Preise des Anbieters wachsen mit dem Gesprächsvolumen. Die Managerin ergänzt übersetzte Artikel und eine vierteljährliche Kostenüberprüfung.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Liefern Sie klare Artikel und Release-Notes für Ihre Änderungen, denn der Assistent kann nur beantworten, was geschrieben steht. Bauen Sie Abläufe, die der Assistent sicher aufrufen kann, mit eigenen Identitätsprüfungen.

### Service- und Betriebsteams

Verantworten Sie die Qualität des Assistenten: Lesen Sie Gespräche, beheben Sie Artikel und verbessern Sie Abläufe. Wickeln Sie Übergaben gut ab und melden Sie Muster an Produkt- und Service-Verantwortliche.

### Führung und Governance

Setzen Sie die Grenzen, finanzieren Sie Wissensarbeit und Tests und verlangen Sie Kennzahlen zur Lösung, nicht nur zur Umleitung. Stellen Sie sicher, dass es stets einen Weg zu einer Person gibt. Prüfen Sie Daten- und Rechtsfragen.

### Kunden und Nutzer

Sie sollten wissen, dass Sie mit einer KI sprechen, jederzeit zu einer Person wechseln können und nicht gebeten werden, sich zu wiederholen. Sagen Sie dem Anbieter, wenn eine Antwort falsch oder nicht hilfreich war.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Beginnen Sie mit wenigen Themen, liefern Sie oft aus, lernen Sie aus realen Gesprächen und weiten Sie schrittweise aus. Beziehen Sie Nutzer und Agenten in die Überprüfung ein, was ergänzt wird. Vorsicht: Viele Themen schnell ohne Tests zu ergänzen, vervielfacht falsche Antworten; ergänzen Sie in kleinen, getesteten Gruppen.

### KI

Assistenten brauchen eine verantwortliche Person, einen Testsatz, verankerte Antworten und Stichprobenprüfung. Entscheiden Sie, was die KI sagen und tun darf und wo eine Person entscheiden muss. Vorsicht: Anweisungen so abzustimmen, dass sie Tests bestehen, kann Assistenten brüchig machen; frischen Sie den Testsatz mit neuen realen Fragen auf. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Verbinden Sie den Assistenten mit definierten Abläufen für Routineanfragen, mit Verifizierung, Protokollen und Grenzen, damit er Handlungen auslöst, statt sie zu improvisieren. Vorsicht: Ein Assistent, der auf eine überzeugende Nachricht hin handeln kann, ist ein Ziel; halten Sie Befugnisse eng und verifizieren Sie die Identität außerhalb des Bandes. Siehe Thema 6.5 — Self-Service und automatisierte Bereitstellung.

### Analytik

Betrachten Sie gestellte, beantwortete, abgelehnte, übergebene und abgebrochene Fragen, Nutzerbewertungen, Wiederholungskontakte und Kosten je gelöstem Kontakt. Vorsicht: Hohe Umleitung kann bedeuten, dass Nutzer aufgegeben haben, und Bewertungen stammen von einer kleinen, selbstgewählten Gruppe; kombinieren Sie mit Stichproben von Gesprächen. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Kein Ausweg.** Nutzer drehen sich mit einem Bot im Kreis. Bieten Sie stets eine Person an, mit Kontext.
- **Antworten aus dem Gedächtnis.** Das Modell erfindet Schritte. Verankern Sie in geprüften Artikeln und lehnen Sie ab, wenn Sie unsicher sind.
- **Umleitung als Erfolg.** Nutzer gehen ungeholfen. Messen Sie Lösung und Wiederholungskontakte.
- **Handlungen ohne Verifizierung.** Zugriff wird auf Behauptung hin gewährt. Verifizieren Sie außerhalb des Bandes und protokollieren Sie.
- **Versteckter Bot.** Nutzer glauben, mit einer Person zu sprechen. Sagen Sie, dass es eine KI ist.
- **Ausgeschlossene Nutzer.** Screenreader oder Sprachen versagen. Testen Sie mit realen Nutzern und halten Sie andere Kanäle bereit.
- **Veraltetes Wissen.** Der Assistent zitiert alte Artikel. Verknüpfen Sie Aktualisierungen mit Changes und prüfen Sie Stichproben.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Umfang und Design | Alles, was der Anbieter bietet | Einige Themen | Definierte Themen, Grenzen und Abläufe | Umfang aus Gesprächsdaten abgestimmt | Umfang über Funktionen und Kanäle abgestimmt |
| Verankerung und Wissen | Gedächtnis des Modells | Einige Artikel | Geprüfte Artikel mit gezeigten Quellen | Wissen aus Gesprächen aktualisiert | Wissen und Assistent laufend gemeinsam verbessert |
| Übergabe und Inklusion | Versteckt oder schlecht | Übergabe existiert | Sichtbare Übergabe mit Kontext, Barrierefreiheit getestet | Übergabe und Inklusion gemessen | Erlebnis über Kanäle, Sprachen und Fähigkeiten konsistent |
| Messung | Nur Volumen | Umleitung | Lösung, Wiederholungskontakte und Bewertungen | Stichproben und Trends regelmäßig überprüft | Ergebnisse mit Kosten und Erlebnis über Services verknüpft |

## Checkliste

- [ ] Wir haben eine kleine Menge geeigneter Themen für den Assistenten gewählt.
- [ ] Antworten sind in geprüften Artikeln verankert und zeigen Quellen.
- [ ] Eine sichtbare Option „mit einer Person sprechen“ übergibt mit Kontext.
- [ ] Die Identität wird für jede Handlung außerhalb des Chats geprüft.
- [ ] Nutzern wird gesagt, dass es eine KI ist.
- [ ] Wir haben einen Testsatz und führen ihn vor und nach jeder Änderung aus.
- [ ] Wir lesen jede Woche eine Stichprobe von Gesprächen.
- [ ] Wir haben Barrierefreiheit und die Sprachen unserer Nutzer getestet.

## KI-Prompts

**Entwerfen Sie Testfragen aus Tickets.**

```text
Here are anonymized ticket titles and summaries from the past month: [paste]. Our assistant is allowed to answer these topics: [list].
Write 40 test questions based on the tickets: 25 inside the topics, 10 outside them that the assistant should decline, and 5 that try to make it ignore its rules. State the correct behavior for each. Do not include real personal data.
List what you are unsure of.
```

**Prüfen Sie Gespräche auf Fehlermuster.**

```text
Here are transcripts of conversations where the user asked for a person or left unhelped, with personal data removed: [paste].
Group them into up to six patterns, count each, quote a short example, and list a possible fix to investigate. Do not blame the user.
List what you are unsure of.
```

**Schreiben Sie Anweisungen für den Assistenten zur Prüfung.**

```text
Our assistant helps staff of [type of organization] with [topics]. It must never: [list]. It must always: [list, such as offer a person and cite sources].
Draft instructions of under 250 words for the assistant, in plain language, including what to say when it does not know. Do not invent capabilities or sources.
List what you are unsure of.
```

## KI-Skills

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): nutzen Sie ihn, um Anweisungen für Assistenten zu gestalten und zu testen.
- [service-catalog](../../../../skills/service-catalog/SKILL.md): nutzen Sie ihn, um zu definieren, wobei der Assistent Nutzern beim Anfragen helfen kann.
- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um Nutzerfeedback zu gestalten, das Lösung misst.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): nutzen Sie ihn, um Feedback von Nutzern und Agenten einzuholen.

## Wichtige Quellen

- W3C, Web Content Accessibility Guidelines (WCAG): der internationale Standard für barrierefreie Webinhalte, relevant für Chat-Oberflächen.
- NIST, AI Risk Management Framework: eine Struktur, um KI-Risiken zu erkennen und zu steuern.
- Wikipedia, „Chatbot“ und „Virtual assistant“: Überblicke über die Technologien.
- Wikipedia, „Prompt injection“: Hintergrund zu einem der wichtigsten Sicherheitsrisiken.

## Literaturverzeichnis

1. Chatbot — Wikipedia — https://en.wikipedia.org/wiki/Chatbot
2. Virtual assistant — Wikipedia — https://en.wikipedia.org/wiki/Virtual_assistant
3. Conversational user interface — Wikipedia — https://en.wikipedia.org/wiki/Conversational_user_interface
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Triage — Wikipedia — https://en.wikipedia.org/wiki/Triage
6. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
7. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
8. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
9. Dark pattern — Wikipedia — https://en.wikipedia.org/wiki/Dark_pattern
10. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
11. Web Content Accessibility Guidelines (WCAG) overview — W3C — https://www.w3.org/WAI/standards-guidelines/wcag/
