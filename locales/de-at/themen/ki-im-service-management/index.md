# KI im Service-Management

**Künstliche Intelligenz hält im Service-Management am Service Desk, im Betrieb, beim Wissen, bei Changes und in der Entscheidungsunterstützung Einzug. Behandeln Sie jede Nutzung als Service mit einer verantwortlichen Person, einem Menschen, der dort entscheidet, wo Schaden möglich ist, einem Weg, Fehler zu fangen, und einer Kennzahl, ob sie hilft.**

## Warum das wichtig ist

KI ist vom Forschungsthema zu einer Funktion der Werkzeuge geworden, die Service-Teams ohnehin nutzen. Das Ticketsystem schlägt Kategorien vor. Die Monitoring-Plattform gruppiert Alarme. Der Chat-Assistent beantwortet Fragen der Mitarbeitenden. Der Code-Editor entwirft ein Skript. Manches davon hat der Anbieter eingeschaltet, und niemand im Team hat entschieden, es zu übernehmen.

Das Potenzial ist real. Viel Service-Arbeit besteht aus Lesen, Schreiben, Sortieren und Suchen, Aufgaben, die heutige KI gut genug erledigt, um Zeit zu sparen. Das Risiko ist ebenfalls real. KI-Systeme erzeugen flüssige Antworten, die falsch sein können, verbergen womöglich, wie sie zu einem Schluss kamen, können Daten preisgeben und auf schwer vorhersehbare Weise versagen. Ein Team, das KI ohne Verantwortung, Prüfung und Kennzahlen einführt, erbt diese Risiken ohne den Nutzen.

Dieses Thema ist die Landkarte des KI-Teils dieses Leitfadens. Es erklärt die wichtigsten Arten von KI in der Service-Arbeit, wo sie helfen, wo nicht und was man vor der Einführung fragen sollte. Spätere Themen gehen tiefer: Betrieb (Thema 5.2 — AIOps), der Service Desk (Thema 5.3 — KI-Service-Desk und virtuelle Agenten), generative KI (Thema 5.4 — Generative KI für Incidents, Wissen und Changes), Agenten, die handeln (Thema 5.5 — Agentische KI und menschliche Aufsicht), Governance (Thema 5.6 — KI-Governance, Risiko und Compliance), Prompts und Skills (Thema 5.7 — KI-Skills und Prompts) und das Betriebsmodell (Thema 5.8 — KI-Betriebsmodell und Fähigkeiten). Die Beschreibung der neuesten ITIL-Version durch den Eigentümer nennt KI als Teil der Umgebung, mit der sich das Service-Management befassen muss (siehe Thema 1.3 — ITIL 5).

## Kernkonzepte

**Künstliche Intelligenz.** Ein weiter Begriff für Systeme, die Aufgaben erfüllen, die normalerweise menschliche Intelligenz brauchen, etwa Muster erkennen, Sprache verstehen und Empfehlungen geben. Der Wikipedia-Artikel zu Artificial intelligence beschreibt das Feld und seine Geschichte. Der Begriff deckt viele verschiedene Techniken ab, und was Menschen mit „KI“ meinen, schwankt. Benennen Sie bei der Besprechung einer Nutzung die Technik und die Aufgabe.

**Maschinelles Lernen.** Systeme, die Muster aus Daten lernen, statt expliziten Regeln zu folgen. Wikipedia beschreibt Machine learning und seine Zweige. Beispiele in der Service-Arbeit sind das Klassifizieren von Tickets, das Erkennen ungewöhnlicher Kennzahlen und das Vorhersagen von Ausfällen. Sie hängen von Trainingsdaten ab und können sich verschlechtern, wenn sich die Bedingungen ändern, ein Problem, das Wikipedia als Concept drift beschreibt.

**Generative KI und große Sprachmodelle.** Systeme, die aus Prompts neue Inhalte erzeugen, etwa Text, Code oder Bilder. Große Sprachmodelle (Large Language Models, LLMs) werden mit großen Textmengen trainiert und können zusammenfassen, entwerfen, übersetzen und Fragen beantworten. Wikipedia beschreibt Generative AI und Large language models. Ihre Ausgaben sind flüssig und nicht garantiert wahr.

**Halluzination.** Eine Ausgabe, die plausibel, aber falsch oder unbelegt ist. Wikipedia beschreibt Hallucination in der KI. In der Service-Arbeit kann das ein erfundener Befehl sein, eine ausgedachte Richtlinie oder eine überzeugt vorgetragene, aber falsche Grundursache. Planen Sie dafür: Verankern Sie Antworten in Quellen, zeigen Sie die Quellen und prüfen Sie, bevor Sie handeln.

**Retrieval-Augmented Generation.** Ein Muster, bei dem das System zuerst relevante Dokumente abruft, etwa Wissensartikel, und dann das Modell bittet, nur anhand dieser zu antworten. Wikipedia beschreibt den Ansatz. Er verringert falsche Antworten, beseitigt sie aber nicht und hängt von der Qualität der Dokumente ab. Siehe Thema 3.9 — Wissensmanagement.

**Agenten.** Systeme, die nicht nur antworten, sondern handeln: Werkzeuge aufrufen, Datensätze ändern, Skripte ausführen. Wikipedia beschreibt Intelligent agents allgemein. Agenten erhöhen den Einsatz, weil Fehler Wirkungen in der Welt haben. Siehe Thema 5.5 — Agentische KI und menschliche Aufsicht.

**Wo KI im Service-Management hilft.** Typische Nutzungen fallen in fünf Gruppen:

| Bereich | Beispiele | Hauptvorsicht |
|---|---|---|
| Service Desk | Tickets klassifizieren und weiterleiten, Antworten entwerfen, häufige Fragen beantworten | Falsche oder erfundene Antworten an Nutzer |
| Betrieb | Alarme gruppieren, Anomalien finden, Ursachen vorschlagen | Verborgene, übersehene Signale |
| Wissen | Suchen, zusammenfassen und Artikel entwerfen | Entwürfe, die Fehler verbreiten |
| Change und Delivery | Code und Tests entwerfen, Change-Risiko bewerten, Release-Notes schreiben | Unsicherer oder falscher Code, überbewertete Risikowerte |
| Entscheidungsunterstützung | Daten zusammenfassen, Nachfrage prognostizieren, Muster finden | Übersichere Schlüsse aus schwachen Daten |

**Mensch in der Schleife (Human in the Loop).** Eine Person prüft oder genehmigt eine KI-Ausgabe oder -Handlung, bevor sie wirkt. Wikipedia beschreibt Human-in-the-loop-Systeme. Es ist eine Kontrolle, und sie wirkt nur, wenn die Person Zeit, Informationen und Befugnis hat, Nein zu sagen. Wikipedia beschreibt außerdem Automation bias, die Neigung, sich zu stark auf automatisierte Vorschläge zu verlassen, was eine menschliche Prüfung zum Abnicken machen kann.

**Erklärbarkeit.** Die Fähigkeit zu sagen, warum ein System eine Ausgabe erzeugt hat. Wikipedia beschreibt Explainable AI. Bei manchen Nutzungen, etwa dem Ranking eines Tickets, genügt ein grober Grund; bei anderen, etwa einer Entscheidung, die Zugriff oder Bezahlung einer Person betrifft, braucht es mehr. Entscheiden Sie, wie viel Erklärung jede Nutzung verlangt.

**Verzerrung und Fairness.** KI, die mit vergangenen Daten trainiert wurde, kann vergangene Muster reproduzieren, auch unfaire. Wikipedia beschreibt Algorithmic bias. In der Service-Arbeit kann sich Verzerrung darin zeigen, wer schneller Hilfe bekommt, wessen Anfragen markiert werden oder wessen Sprache das System gut versteht.

**Daten und Datenschutz.** KI-Werkzeuge verarbeiten die Daten, die Sie ihnen geben, etwa Ticket-Text mit persönlichen Angaben. Wohin Daten gehen, wie lange sie aufbewahrt werden und ob sie andere Modelle trainieren, sind zentrale Fragen. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Sicherheitsrisiken.** KI-Systeme haben eigene Schwächen, etwa Prompt Injection, bei der Text in einem Dokument oder einer Nachricht versucht, dem Modell neue Anweisungen zu geben. Wikipedia beschreibt Prompt injection. Behandeln Sie Eingaben von außen als nicht vertrauenswürdig.

**Lebenszyklus und Betrieb.** Ein Modell im Einsatz braucht Monitoring, Neutraining oder Ersatz, Versionierung und Stilllegung. MLOps, auf Wikipedia beschrieben, wendet technische Disziplin darauf an. Bei einem Anbietermodell müssen Sie dennoch Verhaltensänderungen nach Updates verfolgen.

**Governance-Frameworks.** Die KI-Verordnung (Artificial Intelligence Act) der Europäischen Union, auf Wikipedia beschrieben, legt rechtliche Pflichten fest, die von Risikokategorien abhängen. ISO/IEC 42001 spezifiziert ein KI-Managementsystem, und das National Institute of Standards and Technology der USA veröffentlicht ein AI Risk Management Framework. Sie liefern Vokabular und Struktur für Governance; sie ersetzen keine Rechtsberatung.

**Wie die Blickwinkel passen.** KI ist einer der vier Blickwinkel. Agile Praxis legt kleine Erprobungen mit realen Nutzern und kurzes Feedback nahe. Automatisierung ist der nächste Nachbar: KI entscheidet oder schlägt vor, Automatisierung handelt. Analytik liefert die Daten, aus denen KI lernt, und die Kennzahlen, die zeigen, ob sie hilft.

## Bewährte Praktiken

1. **Beginnen Sie mit einem Problem, nicht mit einem Werkzeug.** Benennen Sie einen konkreten Schmerz, etwa Zeit für das Sortieren von Tickets, und eine Kennzahl der Verbesserung. Fragen Sie dann, ob KI die richtige Antwort ist oder ob eine einfachere Lösung genügt.
2. **Führen Sie ein Inventar der KI-Nutzungen.** Listen Sie jede KI-Funktion und jedes Werkzeug im Einsatz auf, einschließlich Anbieterfunktionen und privater Werkzeuge, die Mitarbeitende für die Arbeit nutzen. Erfassen Sie Zweck, Daten, verantwortliche Person und Status.
3. **Benennen Sie für jede Nutzung eine verantwortliche Person.** Eine Person ist dafür rechenschaftspflichtig, was die KI tut, welche Daten sie nutzt und was geschieht, wenn sie falschliegt. Ohne verantwortliche Person bemerkt niemand die Verschlechterung.
4. **Entscheiden Sie, wo ein Mensch entscheidet.** Schreiben Sie für jede Nutzung auf, was die KI allein tun darf, was Prüfung braucht und was sie nie tun darf. Machen Sie die Prüfung echt: Geben Sie Prüfenden Zeit und Kontext.
5. **Verankern Sie Antworten in Ihren eigenen Quellen.** Nutzen Sie Retrieval aus geprüftem Wissen, zeigen Sie dem Nutzer die Quellen und sagen Sie klar, wenn keine Quelle eine Antwort stützt.
6. **Testen Sie vor und nach dem Start.** Bauen Sie einen Satz realistischer Testfälle mit bekannten Antworten, auch unbequeme und feindselige. Führen Sie sie vor der Veröffentlichung und nach jeder Änderung an Modell oder Daten aus.
7. **Messen Sie Wert und Fehler.** Verfolgen Sie gesparte Zeit, Qualität der Ausgaben, Korrekturen durch Menschen, Nutzerbeschwerden und Kosten. Ziehen Sie regelmäßig Stichproben der Ausgaben.
8. **Schützen Sie Daten.** Entscheiden Sie, welche Daten an welche Werkzeuge gehen dürfen, entfernen Sie persönliche und sensible Angaben, wo Sie können, und prüfen Sie Vertragsbedingungen zu Aufbewahrung und Trainingsnutzung.
9. **Planen Sie den Ausfall.** Machen Sie es leicht, eine KI-Funktion abzuschalten, zu einer Person weiterzuleiten und sich zu erholen. Proben Sie den Ausfall eines KI-Services, von dem Sie abhängen.
10. **Bauen Sie Fähigkeiten auf und teilen Sie Gelerntes.** Schulen Sie Menschen, KI gut zu nutzen und sie zu hinterfragen. Teilen Sie über Teams hinweg, was funktioniert und was nicht. Siehe Thema 5.7 — KI-Skills und Prompts.

## Fragen für die Diskussion im Team

**Wo nutzen wir bereits KI, auch Funktionen, die wir nicht gewählt haben, und Werkzeuge, die Menschen auf eigene Faust nutzen?**
Fragen Sie alle und prüfen Sie Anbieter-Einstellungen. Rechnen Sie mit einer längeren Liste, als jemand vorhersagte. Halten Sie anschließend jede Nutzung mit einer verantwortlichen Person fest.

**Welche unserer Aufgaben bestehen überwiegend aus Lesen, Schreiben und Sortieren, und welche sollte nach unserem Willen keine Maschine entscheiden?**
Das ordnet Aufgaben nach Eignung. Rechnen Sie mit Einigkeit beim Entwerfen und Uneinigkeit bei Entscheidungen. Wählen Sie anschließend eine risikoarme Aufgabe zur Erprobung.

**Was würden wir tun, wenn unser KI-Assistent einem Nutzer eine überzeugt falsche Antwort gäbe, und wie würden wir es erfahren?**
Gehen Sie das Szenario durch. Rechnen Sie mit Lücken bei der Erkennung. Vereinbaren Sie anschließend einen Weg, Ausgaben stichprobenartig zu prüfen und Nutzerfeedback einzuholen.

**Welche Daten senden wir an KI-Werkzeuge, und haben wir die Bedingungen gelesen?**
Listen Sie Werkzeuge und Daten. Rechnen Sie mit privaten Konten und unbekannten Bedingungen. Vereinbaren Sie anschließend eine Regel, was nicht in externe Werkzeuge kopiert werden darf.

**Woran würden wir erkennen, dass eine KI-Nutzung ihre Kosten wert war?**
Bitten Sie um eine Kennzahl für Nutzen und eine für Schaden. Rechnen Sie mit „es fühlt sich schneller an“. Wählen Sie anschließend eine Nutzung und vereinbaren Sie eine Vorher-nachher-Kennzahl.

**Welche Fähigkeiten brauchen unsere Leute, um KI gut zu nutzen, und wer bringt sie ihnen bei?**
Denken Sie an gute Prompts schreiben, Antworten prüfen und Grenzen erkennen. Rechnen Sie mit einer großen Bandbreite an Zuversicht. Planen Sie anschließend eine kurze Übungssitzung mit realen Aufgaben.

## In der Praxis: ein Beispiel aus dem Service-Management

Das IT-Team eines nationalen öffentlichen Bibliotheksverbunds unterstützt 200 Zweigstellen und etwa 6.000 Mitarbeitende. Der Service Desk bearbeitet viele wiederkehrende Fragen zu Drucken, Anmeldungen und dem Ausleihsystem. Die Leiterin des Service will mit KI die Warteschlange verkürzen, und der Anbieter des Ticketsystems hat gerade einen KI-Assistenten ergänzt, standardmäßig eingeschaltet für den Chat mit Mitarbeitenden.

Die Service-Managerin listet zuerst die KI-Nutzungen auf. Neben dem Anbieter-Assistenten stellt sie fest, dass zwei Analysten ein öffentliches Chat-Werkzeug nutzen, um Tickets zusammenzufassen, und dass ein Entwickler ein Skript gebaut hat, das Antworten entwirft. Sie gibt jeder Nutzung eine verantwortliche Person und setzt eine Regel: keine persönlichen Daten in öffentlichen Werkzeugen. Dann wählt sie eine Nutzung zur Verbesserung: einen Assistenten für Mitarbeitende, der „Wie mache ich …“-Fragen beantwortet, nur anhand der genehmigten Wissensdatenbank, mit Quellenlinks und einer sichtbaren Schaltfläche, um eine Person zu erreichen.

Sie baut 60 Testfragen aus realen Tickets, darunter zehn, die die Wissensdatenbank nicht beantworten kann, bei denen das richtige Verhalten ist, das zu sagen. Die erste Version beantwortet drei dieser zehn mit erfundenen Schritten. Das Team schärft die Anweisungen nach und ergänzt eine Regel, abzulehnen, wenn kein Artikel passt, und die Fehler sinken auf einen. Im ersten Monat liest ein Desk-Agent jedes Gespräch, das der Assistent nicht gelöst hat, und eine Stichprobe des Rests.

Was sich ändert: Der Assistent löst etwa ein Drittel der Gespräche ohne Ticket, und Agenten verbringen weniger Zeit mit den wiederkehrenden Fragen. Was schwierig bleibt: Die Wissensdatenbank hat veraltete Artikel, die der Assistent zitiert, sodass das Team sie bereinigen muss; der Anbieter ändert das zugrunde liegende Modell ohne Ankündigung, was einmal das Verhalten über Nacht veränderte; und Mitarbeitende kleiner Zweigstellen telefonieren manchmal lieber. Die Managerin setzt einen monatlichen Testlauf, eine vereinbarte Kontaktstelle für Modelländerungen und die klare Botschaft, dass Telefonieren weiter möglich bleibt.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Nutzen Sie KI, um Code, Tests und Dokumentation zu entwerfen, unter Ihrer üblichen Prüfung und Ihren Pipeline-Kontrollen. Halten Sie fest, wo KI genutzt wurde, und achten Sie auf unsicheren oder unlizenzierten Code. Behandeln Sie KI-Funktionen in Ihrem eigenen Produkt als Services mit Verantwortlichen.

### Service- und Betriebsteams

Nutzen Sie KI, um zu sortieren, zusammenzufassen und zu suchen, wobei eine Person alles entscheidet, was Nutzer oder Systeme betrifft. Melden Sie Fehler und Beinahe-Vorfälle und helfen Sie, abzustimmen, was die KI sieht und sagt.

### Führung und Governance

Verlangen Sie das Inventar, die Verantwortlichen, die Kennzahlen und den Plan für den Ausfall. Setzen Sie klare Regeln zu Daten und Entscheidungen. Finanzieren Sie Schulung und Tests, nicht nur Lizenzen.

### Kunden und Nutzer

Sie sollten wissen, wann Sie mit einer KI sprechen, und eine Person erreichen können. Sagen Sie dem Anbieter, wenn eine Antwort falsch oder nicht hilfreich war. Seien Sie vorsichtig damit, welche persönlichen Daten Sie teilen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Probieren Sie KI in kleinen Erprobungen mit realen Nutzern aus, lernen Sie aus dem Feedback und entscheiden Sie, zu behalten, zu ändern oder zu stoppen. Halten Sie Stakeholder in die Frage eingebunden, was die KI darf. Vorsicht: Eine gelungene Demo ist kein Beleg, dass eine Nutzung sicher oder wertvoll ist; führen Sie eine echte Erprobung mit Kennzahlen durch.

### KI

Dieses Thema ist der KI-Blickwinkel selbst: Jede Nutzung braucht eine verantwortliche Person, einen Menschen, der dort entscheidet, wo Schaden möglich ist, Fehlererkennung und Kennzahlen. Vorsicht: Delegieren Sie die Rechenschaft nicht an einen Anbieter oder ein Modell; Sie bleiben für die Ergebnisse verantwortlich, die Ihr Service liefert.

### Automatisierung

KI entscheidet oder schlägt vor; Automatisierung handelt. Verbinden Sie beides sorgfältig, mit Grenzen dafür, was ohne Genehmigung geschehen darf, mit Protokollen und einem Weg zum Stoppen. Vorsicht: Eine KI, die Automatisierung auslöst, kann einen Fehler schnell vervielfachen; ergänzen Sie Ratenbegrenzungen und Prüfung. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Messen Sie Nutzen, in Stichproben gefundene Fehlerraten, Nutzerfeedback und Kosten. Vorsicht: Nutzungszahlen und Nutzerbewertungen können gut aussehen, während die Qualität schlecht ist; ziehen Sie Stichproben der Ausgaben und vergleichen Sie mit einer Basislinie. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Werkzeug vor Problem.** Eine Funktion wird eingeschaltet, und niemand misst den Nutzen. Beginnen Sie mit einem Schmerz und einer Kennzahl.
- **Kein Inventar.** Nutzungen vermehren sich unbemerkt. Listen Sie jede KI-Nutzung mit einer verantwortlichen Person auf.
- **Menschliche Prüfung nur dem Namen nach.** Prüfende nicken ab. Geben Sie Zeit, Kontext und Befugnis und prüfen Sie ihre Entscheidungen stichprobenartig.
- **Überzeugt falsche Antworten.** Nutzer handeln nach erfundenem Rat. Verankern Sie Antworten, nennen Sie Quellen und lehnen Sie ab, wenn Sie unsicher sind.
- **Datenabfluss.** Sensibler Text geht an externe Werkzeuge. Setzen Sie Regeln und prüfen Sie Bedingungen.
- **Modelländerungen ignorieren.** Das Verhalten verschiebt sich nach einem Anbieter-Update. Testen Sie regelmäßig und legen Sie eine Kontaktstelle für Änderungen fest.
- **Kein Ausweg.** Der Service hängt von KI ab, ohne Rückfall. Bieten Sie einen Weg zu einer Person und einen Ausschalter.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Inventar und Verantwortung | Unbekannte Nutzungen | Wichtigste Nutzungen aufgelistet | Inventar mit Verantwortlichen und Zwecken | Inventar überprüft und getestet | Inventar mit Katalog und Governance integriert |
| Menschliche Entscheidungen | Undefiniert | Informelle Prüfung | Definierte Prüfpunkte je Nutzung | Prüfqualität stichprobenartig geprüft | Prüfung nach Risiko und Belegen angepasst |
| Tests und Monitoring | Keine | Demos | Testsätze und regelmäßige Stichproben | Fehler und Drift gemessen | Laufende Bewertung über Nutzungen hinweg |
| Daten und Risiko | Unklar | Bewusstsein | Regeln zu Daten und Anbieterbedingungen | Konformität geprüft und auditiert | Risiko über Teams und Lieferanten gesteuert |

## Checkliste

- [ ] Wir führen ein Inventar der KI-Nutzungen, einschließlich Anbieterfunktionen und privater Werkzeuge.
- [ ] Jede Nutzung hat eine namentlich benannte verantwortliche Person.
- [ ] Wir haben aufgeschrieben, was jede KI allein darf, was Prüfung braucht und was sie nicht darf.
- [ ] Antworten sind in geprüften Quellen verankert und zeigen sie.
- [ ] Wir haben einen Testsatz und führen ihn regelmäßig aus.
- [ ] Wir ziehen Stichproben der Ausgaben und verfolgen Fehler, Korrekturen und Feedback.
- [ ] Wir haben Regeln dazu, welche Daten an welche Werkzeuge gehen.
- [ ] Nutzer können eine Person erreichen, und wir können jede KI-Nutzung abschalten.

## KI-Prompts

**Listen Sie KI-Nutzungen aus einer Beschreibung unserer Werkzeuge auf.**

```text
Here is a description of the tools our team uses and what each does: [paste].
List which tools probably include AI features, what each might do, what data it might process, and a question to ask the vendor or owner. Mark clearly which items are guesses and do not state facts about vendors.
List what you are unsure of.
```

**Entwerfen Sie Testfragen für einen Assistenten.**

```text
Our assistant answers questions about [topics] using only these documents: [list titles].
Write 30 test questions: 15 that the documents answer, 10 that they do not, and 5 that try to make the assistant ignore its instructions. For each, state the correct behavior. Do not include real personal data.
List what you are unsure of.
```

**Bereiten Sie eine Überprüfung einer KI-Nutzung vor.**

```text
AI use: [describe]. Owner: [role]. Data used: [list]. Decisions it affects: [list].
Draft a one-page review with: purpose, what it may do alone, what needs human review, how errors are detected, how it is switched off, and open questions. Mark every item you could not fill from my description.
List what you are unsure of.
```

## KI-Skills

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): nutzen Sie ihn, um Prompts zu gestalten, die klar, verankert und testbar sind.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): nutzen Sie ihn, um festzuhalten, was ein Modell tut, seine Daten und seine Grenzen.
- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um KI-Risiken, Verantwortliche und Entscheidungen festzuhalten.
- [itil-5](../../../../skills/itil-5/SKILL.md): nutzen Sie ihn, um KI-Nutzung zur neuesten Leitlinie des Eigentümers in Beziehung zu setzen, wobei unverifizierte Aussagen markiert werden.
- [mlops](../../../../skills/mlops/SKILL.md): nutzen Sie ihn, um Modelle durch ihren Lebenszyklus zu steuern.

## Wichtige Quellen

- NIST, AI Risk Management Framework: eine weit genutzte Struktur, um KI-Risiken zu erkennen und zu steuern.
- ISO/IEC 42001 (der Standard selbst): Anforderungen an ein Managementsystem für künstliche Intelligenz; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- PeopleCert, ITIL certification pages: die Beschreibung von ITIL (Version 5) durch den Eigentümer, einschließlich KI.
- Wikipedia, „Artificial intelligence“ und „Large language model“: Überblicke über das Feld und die Technologie.

## Literaturverzeichnis

1. Artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
4. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
5. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
6. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
7. Human-in-the-loop — Wikipedia — https://en.wikipedia.org/wiki/Human-in-the-loop
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
11. ITIL Foundation Bridge (Version 5) — PeopleCert — https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
