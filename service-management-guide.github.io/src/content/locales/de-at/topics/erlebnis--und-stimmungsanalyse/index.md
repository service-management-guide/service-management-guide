# Erlebnis- und Stimmungsanalyse

**Erlebnisanalytik fragt Nutzer, wie ein Service ihnen geholfen hat, und beobachtet, wie sie ihn tatsächlich nutzen. Umfragen, Freitext-Feedback, Stimmungsanalyse und Experience Level Agreements sind nützlich, wenn Fragen fair sind, die Verzerrung bei den Antworten anerkannt wird, Stimmungswerkzeuge an den eigenen Worten der Menschen geprüft werden und niemand individuell gerankt oder überwacht wird.**

## Warum das wichtig ist

Ein Service kann jedes technische Ziel erfüllen und Menschen dennoch frustriert zurücklassen. Das System ist oben, Tickets werden termingerecht geschlossen, und eine Mitarbeiterin hat an diesem Morgen zwei Stunden damit verbracht, Zugriff auf ein Werkzeug zu bekommen, das sie braucht. Dashboards aus Systemdaten können das nicht sehen. Sie zählen, was die Maschine erfasste, nicht, wie es dem Menschen erging.

Erlebnisanalytik füllt die Lücke. Sie fragt Menschen direkt, durch kurze Umfragen im Moment der Nutzung und längere periodische. Sie liest, was sie schreiben: Ticket-Kommentare, Umfrageantworten, Chat-Nachrichten. Sie beobachtet, wie sie den Service nutzen, wo sie ein Formular abbrechen, wie oft sie es versuchen, bevor es gelingt. Sie fügt dies zu einem Bild des Erlebnisses zusammen, das technische Kennzahlen verfehlen. Die Idee hinter Experience Level Agreements (XLAs), eingeführt in Thema 3.7 — Service-Level-Management, ist, Ziele für das Erlebnis neben Zielen für die technische Leistung zu setzen.

Die Methoden bringen eigene Risiken mit. Umfragen erreichen nur Menschen, die antworten. Werkzeuge der Stimmungsanalyse raten aus Wörtern auf Gefühle und raten oft falsch, besonders über Sprachen und Kulturen hinweg. Werte werden zu Zielen, und Ziele laden zu Druck auf Antwortende ein. Mitarbeiterdaten werfen Fragen von Datenschutz und Vertrauen auf. Dieses Thema beschreibt, wie man Erlebnisdaten gut erhebt und nutzt, mit Fairness und Demut dazu, was sie zeigen können. Es verbindet sich mit dem Service Desk (Thema 3.1 — Service Desk), Service Levels (Thema 3.7 — Service-Level-Management), Messung (Thema 7.3 — Messung und Berichtswesen) und dem Einsatz von KI zum Lesen von Text (Thema 5.1 — KI im Service-Management).

## Kernkonzepte

**Erlebnis (Experience).** Was ein Mensch bei der Nutzung eines Service denkt, fühlt und tut, vom ersten Kontakt bis zum Ergebnis. Wikipedia beschreibt Customer experience und User experience. Bei internen Services sind die „Kunden“ Kolleginnen und Kollegen, und manchmal wird der Begriff digitales Mitarbeitererlebnis (Digital Employee Experience) dafür genutzt, wie Menschen ihre Technik erleben. Es umfasst Einfachheit, Tempo, Vertrauen und ob sie ihr Ziel erreichten.

**Zufriedenheit und verwandte Kennzahlen.** Kundenzufriedenheit (Customer satisfaction), auf Wikipedia beschrieben, wird meist als „Wie zufrieden waren Sie?“ auf einer Skala gefragt. Der Net Promoter Score, ebenfalls dort beschrieben, fragt, wie wahrscheinlich eine Person den Service weiterempfiehlt, und wird aus dem Anteil der Promotoren abzüglich der Kritiker berechnet. Andere Kennzahlen fragen nach dem Aufwand, etwa wie einfach es war, etwas erledigt zu bekommen. Jede hat Nutzen und Kritik: Sie sind schnell und vergleichbar, aber grob und anfällig für Manipulation und Fehldeutung.

**Transaktions- und Beziehungsumfragen.** Eine Transaktionsumfrage fragt kurz danach nach einer Interaktion, etwa einem gelösten Ticket. Eine Beziehungsumfrage fragt in Abständen nach dem Gesamtservice. Transaktionsumfragen zeigen konkrete Probleme; Beziehungsumfragen zeigen das breitere Bild. Nutzen Sie beide und halten Sie sie kurz.

**Umfragegestaltung.** Formulierungen beeinflussen Antworten. Wikipedia beschreibt Survey methodology und gängige Probleme: Suggestivfragen, die eine Antwort nahelegen, Zustimmungstendenz (Acquiescence bias), die Neigung zuzustimmen, und Verzerrung durch soziale Erwünschtheit, Antworten zu geben, die akzeptabel scheinen. Nutzen Sie neutrale Formulierungen, eine klare Skala, eine Idee pro Frage und ein offenes Kommentarfeld. Wikipedia beschreibt Likert scales und Questionnaires. Testen Sie die Umfrage an einigen Menschen. Siehe den Skill survey-design in diesem Leitfaden.

**Antworten und Verzerrung.** Nur manche Menschen antworten, und sie sind nicht typisch. Wikipedia beschreibt die Antwortquote (Response rate) und Participation bias: Menschen mit starken Gefühlen oder mit Zeit antworten eher. Ein Wert aus einer Rücklaufquote von 10 Prozent sagt womöglich wenig über die anderen 90 Prozent. Berichten Sie die Antwortquote, vergleichen Sie Antwortende mit der Grundgesamtheit, wo Sie können, und behandeln Sie den Wert nicht als exakt.

**Umfragemüdigkeit.** Menschen, die zu oft gefragt werden, hören auf zu antworten oder antworten nachlässig. Begrenzen Sie, wie oft Sie fragen, fragen Sie nur, was Sie nutzen werden, und zeigen Sie, was sich aufgrund der Antworten geändert hat. Umfragen, die im Nichts verschwinden, lehren Menschen, sich nicht zu bemühen.

**Freitext-Feedback.** Kommentare sagen Ihnen, warum. Eine Stichprobe zu lesen ist unerlässlich, und Werkzeuge können bei der Menge helfen. Wikipedia beschreibt Thematic analysis, die Praxis, in qualitativen Daten Themen zu erkennen, und Qualitative research allgemeiner. Themen zu zählen und Beispiele zu zitieren macht Kommentare nutzbar.

**Stimmungsanalyse (Sentiment Analysis).** Software, die Text als positiv, negativ oder neutral klassifiziert oder nach Emotion. Wikipedia beschreibt Sentiment analysis und ihre Methoden. Sie ist nützlich zur groben Sichtung großer Textmengen. Sie hat Schwierigkeiten mit Sarkasmus, gemischten Gefühlen, Fachbegriffen („kritisch“ kann eine Priorität sein, keine Emotion) und Unterschieden in Sprache und Dialekt. Prüfen Sie ihre Etiketten an einer von Menschen gelesenen Stichprobe und behandeln Sie das Ergebnis nicht als Gefühl irgendeines Einzelnen. Wikipedia beschreibt auch Emotion recognition, die ernste Bedenken zu Zuverlässigkeit und Ethik aufwirft, besonders bei Gesichtern oder Stimmen; gehen Sie sorgfältig vor und holen Sie Rat ein, bevor Sie solche Methoden nutzen.

**Themenentdeckung.** Techniken der Verarbeitung natürlicher Sprache, einschließlich Themenmodellen, die Wikipedia beschreibt, können Kommentare nach Thema gruppieren. Sie helfen, Themen in Tausenden Kommentaren zu finden, mit menschlicher Prüfung zum Benennen und Kontrollieren der Gruppen.

**Verhaltens- und Nutzungssignale.** Was Menschen tun, unterscheidet sich oft von dem, was sie sagen. Abgebrochene Formulare, wiederholte Suchen, Wiederholungsversuche und Kontakte nach einem Self-Service-Versuch zeigen Reibung. Wikipedia beschreibt Usability testing, bei dem Menschen realistische Aufgaben versuchen, während Beobachter Schwierigkeiten notieren. Eine Handvoll beobachteter Sitzungen findet oft Probleme, die keine Umfrage offenbart.

**Qualitative Methoden.** Interviews und Fokusgruppen, auf Wikipedia beschrieben, geben Tiefe. Eine kleine Zahl von Gesprächen mit realen Nutzern kann Prioritäten stärker verändern als eine große Umfrage. Wählen Sie Menschen, die sich in Rolle, Kompetenz und Standort unterscheiden.

**Experience Level Agreements.** Vereinbarungen, die Ziele für Erlebniskennzahlen setzen, etwa „mindestens 80 Prozent der Nutzer sagen, der Service habe ihnen geholfen, ihre Arbeit zu erledigen“. Sie werden am besten als gemeinsames Ziel und als Gespräch genutzt, mit mehreren Kennzahlen, nicht als einzelne, an Strafen gebundene Zahl, weil Erlebniswerte leicht verzerrt werden. Siehe Thema 3.7 — Service-Level-Management.

**Stimme des Kunden (Voice of the Customer).** Die Praxis, zu erfassen, was Kunden sagen, und danach zu handeln. Wikipedia beschreibt sie. Sie bringt Umfragen, Kommentare, Support-Kontakte, Bewertungen und Gespräche zusammen und leitet Erkenntnisse an die, die handeln können.

**Wohlbefinden und Arbeitslast der Beschäftigten.** Analytik kann auch das Erlebnis der Beschäftigten ansprechen, die den Service liefern: Arbeitslast, Bereitschaftsbelastung und Stimmung. Wikipedia beschreibt Employee engagement und Occupational burnout. Messen Sie auf Team-Ebene, mit Einwilligung und Sorgfalt, und handeln Sie nach dem, was Sie finden.

**Ethik, Datenschutz und Einwilligung.** Feedback zu erheben und zu analysieren betrifft personenbezogene Daten und manchmal sensible Meinungen. Wikipedia beschreibt Privacy, Anonymity und Informed consent. Sagen Sie, was Sie erheben und warum, erlauben Sie Anonymität, wo sie zählt, aggregieren Sie vor dem Berichten und identifizieren Sie Einzelne nicht ohne guten Grund anhand ihrer Kommentare. Das Überwachen von Verhalten oder Stimmung der Beschäftigten bei der Arbeit, das Wikipedia unter Employee monitoring beschreibt, kann Vertrauen beschädigen und rechtlich eingeschränkt sein; holen Sie Rechtsrat ein. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Den Kreis schließen.** Sagen Sie Menschen, was Sie gehört und was Sie geändert haben. Fragen Sie bei denen nach, die ein ernstes Problem vorbrachten. Ohne sichtbare Antwort sinkt die Beteiligung.

**Wie die Blickwinkel passen.** Erlebnisanalytik liefert das menschliche Ergebnis, das die anderen drei Blickwinkel zu verbessern suchen. Agile Praxis führt kleine Experimente durch und fragt Nutzer, ob sie geholfen haben. KI hilft beim Lesen und Gruppieren von Text, unter Prüfung. Automatisierung löst Umfragen aus und leitet Feedback weiter.

## Bewährte Praktiken

1. **Fragen Sie nach Ergebnissen, nicht nur nach Zufriedenheit.** Nehmen Sie eine Frage wie „Haben Sie bekommen, was Sie brauchten?“ und eine zum Aufwand auf. Koppeln Sie Werte mit einem Freitext „Was stand im Weg?“.
2. **Halten Sie Umfragen kurz und zeitnah.** Stellen Sie eine bis drei Fragen kurz nach einer Interaktion und führen Sie einige Male im Jahr eine kurze Beziehungsumfrage durch. Fragen Sie Menschen nicht wiederholt nach demselben.
3. **Schreiben Sie neutrale Fragen und testen Sie sie.** Vermeiden Sie suggestive Formulierungen, Doppelfragen und Fachjargon. Probieren Sie die Umfrage vor dem Start an einigen Menschen aus verschiedenen Gruppen aus.
4. **Berichten Sie Antwortquoten und wer geantwortet hat.** Zeigen Sie, wie viele geantwortet haben, vergleichen Sie wenn möglich mit der Grundgesamtheit und beschreiben Sie die Grenzen. Vermeiden Sie falsche Genauigkeit.
5. **Lesen Sie die Kommentare.** Ziehen Sie jede Woche eine Stichprobe, zitieren Sie sie in Berichten und gruppieren Sie sie in Themen. Nutzen Sie Werkzeuge für die Menge, mit menschlicher Prüfung.
6. **Prüfen Sie Stimmungswerkzeuge an Menschen.** Lassen Sie Menschen eine Stichprobe etikettieren, vergleichen Sie sie mit dem Werkzeug und notieren Sie, wo es versagt. Nutzen Sie das Werkzeug zur Sichtung, nicht für Schlüsse über Einzelne.
7. **Beobachten Sie Verhalten ebenso wie Worte.** Betrachten Sie Abbrüche, Wiederholungsversuche und wiederholte Kontakte und führen Sie einige Usability-Sitzungen mit realen Aufgaben durch. Vergleichen Sie, was Menschen tun, mit dem, was sie sagen.
8. **Nutzen Sie XLAs als gemeinsames Ziel.** Vereinbaren Sie mit Kunden einen kleinen Satz von Erlebniskennzahlen, überprüfen Sie ihn gemeinsam und vermeiden Sie, ihn an Strafen oder individuelle Leistung zu binden.
9. **Schützen Sie Menschen.** Erklären Sie, was Sie erheben, aggregieren Sie Ergebnisse, vermeiden Sie die Identifizierung Einzelner und holen Sie Rat ein, bevor Sie die Stimmung von Beschäftigten überwachen. Nutzen Sie Erlebnisdaten nie, um Einzelne zu ranken.
10. **Schließen Sie den Kreis sichtbar.** Veröffentlichen Sie Zusammenfassungen „Sie sagten, wir taten“ und fragen Sie bei ernsten Anliegen nach. Legen Sie Fragen still, die nicht zu Handlungen führen.

## Fragen für die Diskussion im Team

**Was wissen wir darüber, wie Menschen unseren Service erleben, das unsere technischen Kennzahlen nicht zeigen?**
Listen Sie jüngste Beschwerden oder Kommentare auf. Rechnen Sie mit einem Widerspruch zu den Dashboards. Wählen Sie anschließend einen Aspekt, etwa die Zeit bis zum Zugriff, und ergänzen Sie eine Erlebnisfrage dazu.

**Wer beantwortet unsere Umfragen, und wer nie?**
Vergleichen Sie Antwortende mit der Grundgesamtheit. Rechnen Sie damit, dass Gruppen wie Nachtpersonal oder entfernte Standorte fehlen. Erreichen Sie anschließend eine fehlende Gruppe auf anderem Weg, etwa mit einem kurzen Interview.

**Was haben wir im letzten Quartal aufgrund dessen geändert, was Nutzer uns sagten, und wissen sie es?**
Bitten Sie um Beispiele. Rechnen Sie mit wenigen. Vereinbaren Sie anschließend eine regelmäßige Nachricht „Sie sagten, wir taten“.

**Wie genau ist unser Stimmungswerkzeug, wenn ein Mensch eine Stichprobe derselben Kommentare liest?**
Testen Sie es. Rechnen Sie mit Fehlern bei Sarkasmus und Fachbegriffen. Vereinbaren Sie anschließend, wo das Werkzeug genutzt werden darf und wo nicht.

**Welche unserer Erlebniskennzahlen ließe sich steigern, ohne das Erlebnis zu verbessern?**
Denken Sie an Druck auf Antwortende, selektives Befragen oder das Schließen von Tickets vor dem Fragen. Vereinbaren Sie anschließend eine Regel gegen die Beeinflussung von Antworten und eine Prüfung, wie Umfragen versendet werden.

**Was würden wir über das Erlebnis der Beschäftigten erheben, und wie stellen wir sicher, dass es genutzt wird, um zu helfen, nicht um zu überwachen?**
Besprechen Sie Einwilligung, Aggregation und Zweck. Rechnen Sie mit starken Ansichten. Vereinbaren Sie anschließend eine Verwendungserklärung und beziehen Sie Vertretungen der Beschäftigten und Rechtsrat ein.

## In der Praxis: ein Beispiel aus dem Service-Management

Das IT-Team eines nationalen Bibliotheksverbunds unterstützt 6.000 Beschäftigte in 300 Zweigstellen. Technische Kennzahlen zeigen gute Leistung: Verfügbarkeit über 99,5 Prozent und 92 Prozent der Tickets innerhalb des Ziels gelöst. Doch eine jährliche Mitarbeiterumfrage sagt, „IT-Support“ sei der am schlechtesten bewertete Service, und Zweigstellenleitungen sagen, die IT verstehe ihre Arbeit nicht.

Die Service-Managerin beginnt mit einer kurzen Transaktionsumfrage, die automatisch gesendet wird, wenn ein Ticket gelöst ist: zwei Fragen („Haben wir Ihr Problem gelöst?“ und „Wie einfach war es, Hilfe zu bekommen?“) und ein optionaler Kommentar. Die Antwortquote beträgt 18 Prozent. Beim Vergleich der Antwortenden mit der Belegschaft stellt sie fest, dass große Zweigstellen überrepräsentiert sind und kleine, entlegene kaum vorkommen. Sie ergänzt einen monatlichen Anruf bei fünf zufällig gewählten kleinen Zweigstellen und führt drei Usability-Sitzungen durch, in denen Beschäftigte versuchen, ein neues Login zu beantragen und eine Raumanzeige zu buchen.

Die Zahlen zeigen, dass 84 Prozent sagen, ihr Problem sei gelöst worden, aber nur 55 Prozent sagen, es sei einfach gewesen, Hilfe zu bekommen. Die von zwei Analysten nach Themen gruppierten Kommentare zeigen, dass die häufigste Beschwerde ist, das Problem jeder Person erneut erklären zu müssen: 31 Prozent der Kommentare. Ein Stimmungswerkzeug, an 200 von Hand etikettierten Kommentaren getestet, etikettiert etwa ein Viertel falsch, darunter viele, die „dringend“ oder „kritisch“ als beschreibende Wörter nutzen, sodass das Team es nur nutzt, um die Kommentare zum Lesen zu sortieren. Die Usability-Sitzungen finden, dass das Antragsformular ein Asset-Etikett verlangt, das die meisten Beschäftigten nicht kennen.

Das Team ändert das Formular, schafft eine sichtbare Historie, die dem Ticket zwischen Agenten folgt, und veröffentlicht eine monatliche Notiz, was sich geändert hat. Mit den Zweigstellenleitungen vereinbaren sie ein Erlebnisziel: 75 Prozent der Beschäftigten sagen, Hilfe zu bekommen sei einfach gewesen, vierteljährlich überprüft, mit den Kommentaren und der Antwortquote. Die Managerin sagt dem Team, dass Werte nicht für individuelle Beurteilung genutzt werden.

Was sich ändert: Die Einfachheitswerte steigen binnen zwei Quartalen auf 68 Prozent, und „erneut erklären“ sinkt auf 15 Prozent der Kommentare. Was schwierig bleibt: Die Antwortquoten bleiben in den kleinsten Zweigstellen niedrig; manche Agenten fürchten trotz der Erklärung, dass Werte gegen sie verwendet werden; und ein Anbieter hat ein Werkzeug zur Emotionserkennung für Telefonate angeboten, das die Managerin ablehnt, bis Recht und Vertretungen der Beschäftigten es geprüft haben. Sie plant, die Telefonstichproben auszuweiten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Fragen Sie Nutzer nach den Ergebnissen Ihrer Features, beobachten Sie einige reale Sitzungen und instrumentieren Sie Reibungspunkte wie Abbrüche. Teilen Sie, was Sie lernen, mit dem Service-Team.

### Service- und Betriebsteams

Lesen Sie die Kommentare, sagen Sie Kunden, was sich geändert hat, und nutzen Sie Erlebnisdaten, um zu sehen, wo der Prozess Menschen frustriert. Manipulieren Sie keine Werte und bitten Sie Menschen nicht, Sie gut zu bewerten.

### Führung und Governance

Verlangen Sie Erlebniskennzahlen mit Antwortquoten und Kommentaren. Finanzieren Sie qualitative Arbeit und Nachfassen. Nutzen Sie Erlebniswerte nicht, um Einzelne zu ranken oder zu belohnen. Holen Sie Rat zu Datenschutz und Mitarbeiterüberwachung ein.

### Kunden und Nutzer

Man sollte Sie danach fragen, was zählt, Sie sollten, wo angemessen, anonym sprechen können und hören, was sich geändert hat. Sagen Sie dem Anbieter, wo Umfragen Ihr Erlebnis verfehlen, und geben Sie in Ihren Kommentaren Beispiele.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Führen Sie kleine Experimente zum Erlebnis durch, etwa ein Formular zu ändern, und fragen Sie einige Nutzer, ob es geholfen hat. Beziehen Sie Nutzer in die Gestaltung ein. Vorsicht: Ständig geänderte Umfragen zerstören Vergleiche; halten Sie einen stabilen Kern und ergänzen Sie Fragen sparsam.

### KI

KI kann Kommentare gruppieren, Themen zusammenfassen und Notizen „Sie sagten, wir taten“ entwerfen, wobei ein Mensch gegen die Originale prüft. Benennen Sie eine verantwortliche Person. Vorsicht: KI-Stimmungs- und Emotionserkennung kann falsch und über Gruppen und Sprachen hinweg unfair sein; testen Sie an einer etikettierten Stichprobe und vermeiden Sie ihren Einsatz bei Einzelnen. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie Umfrage-Auslöser, die Weiterleitung ernster Kommentare an eine Person und Erinnerungen zum Nachfassen. Vorsicht: Automatisierte Umfragen, die nur nach guten Ergebnissen gesendet werden, blähen Werte auf; lösen Sie sie einheitlich aus. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Kombinieren Sie Werte, Antwortquoten, Themen, Verhaltenssignale und technische Daten. Vorsicht: Werte sind verrauscht und davon beeinflusst, wer antwortet und wie die Frage gestellt wird; nutzen Sie Trends, berichten Sie Unsicherheit und lesen Sie die Kommentare. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Nur technische Kennzahlen.** Grüne Dashboards, unzufriedene Nutzer. Ergänzen Sie Erlebniskennzahlen und Kommentare.
- **Umfrageverzerrung ignoriert.** Die Lautesten antworten. Berichten Sie Antwortquoten und erreichen Sie fehlende Gruppen.
- **Suggestivfragen.** Antworten sind schief. Nutzen Sie neutrale Formulierungen und testen Sie.
- **Stimmungswerten vertrauen.** Werkzeuge etikettieren falsch. Prüfen Sie am Lesen durch Menschen und nutzen Sie sie zur Sichtung.
- **Werte als Ziele.** Menschen setzen Antwortende unter Druck. Nutzen Sie XLAs als gemeinsames Ziel, mit mehreren Kennzahlen.
- **Umfragemüdigkeit.** Der Rücklauf sinkt. Fragen Sie weniger und zeigen Sie, was sich geändert hat.
- **Menschen überwachen.** Vertrauen und Rechtmäßigkeit leiden. Aggregieren Sie, fragen Sie nach Einwilligung und holen Sie Rat ein.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Erhebung | Jährliche Umfrage | Transaktionsumfragen | Kurze Transaktions- und Beziehungsumfragen mit Kommentaren | Antworten und Verzerrung geprüft, fehlende Gruppen erreicht | Feedback aus mehreren Kanälen integriert |
| Analyse | Nur Werte | Themen von Hand gelesen | Themen mit Stichproben, Werkzeuge an Menschen geprüft | Erlebnis mit Verhalten und technischen Daten verknüpft | Erlebniserkenntnisse treiben die Planung über Services hinweg |
| Nutzung | Berichtet | Einige Maßnahmen | Maßnahmen verfolgt, „Sie sagten, wir taten“ veröffentlicht | Erlebnisziele mit Kunden überprüft | Erlebnisvereinbarungen über Partner hinweg geteilt |
| Ethik | Unklar | Bewusstsein | Regeln zu Zweck, Anonymität und Aggregation | Praktiken mit Beschäftigten und Beratern überprüft | Datenschutz in Erhebung und Analytik eingebaut |

## Checkliste

- [ ] Wir messen Ergebnis und Aufwand, nicht nur Zufriedenheit.
- [ ] Umfragen sind kurz, neutral und getestet.
- [ ] Wir berichten Antwortquoten und wer fehlt.
- [ ] Wir lesen wöchentlich Kommentare und gruppieren sie in Themen.
- [ ] Stimmungswerkzeuge werden an menschlichen Etiketten geprüft und nur zur Sichtung genutzt.
- [ ] Wir beobachten reale Nutzung, statt nur zu fragen.
- [ ] Wir nutzen Erlebnisziele als gemeinsame Ziele, nicht als individuelle Kennzahlen.
- [ ] Wir veröffentlichen, was sich aufgrund von Feedback geändert hat.

## KI-Prompts

**Gruppieren Sie Kommentare in Themen zur Prüfung.**

```text
Here are free-text comments from users with personal details removed: [paste].
Group them into up to eight themes, give a count for each, and quote two short comments exactly for each theme. List comments that do not fit. Do not rate sentiment or guess who wrote anything.
List what you are unsure of.
```

**Prüfen Sie Umfragefragen.**

```text
Here is a draft survey: [paste].
List questions that are leading, double-barreled, unclear, or likely to produce biased answers, quoting each, and suggest a neutral rewording. Do not add questions.
List what you are unsure of.
```

**Testen Sie ein Stimmungswerkzeug.**

```text
Here are 40 comments, each with a human label and the tool's label: [paste].
Compute the number and share of agreements and disagreements, list the comments with disagreements, and say what they have in common. Do not conclude anything about the tool beyond this sample.
List what you are unsure of.
```

## KI-Skills

- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um faire, nützliche Umfragen zu gestalten.
- [getting-feedback](../../../../skills/getting-feedback/SKILL.md): nutzen Sie ihn, um Feedback von Nutzern und Kolleginnen und Kollegen einzuholen und zu verwerten.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): nutzen Sie ihn, um zu erkennen, wen man fragen muss und wer fehlt.
- [statistical-analysis](../../../../skills/statistical-analysis/SKILL.md): nutzen Sie ihn, um Antwortdaten mit Unsicherheit zu analysieren.
- [service-level-agreement](../../../../skills/service-level-agreement/SKILL.md): nutzen Sie ihn, um Erlebnisziele neben technischen Zielen zu fassen.

## Wichtige Quellen

- Don Dillman, Jolene Smyth und Leah Christian, *Internet, Phone, Mail, and Mixed-Mode Surveys* (4. Auflage, 2014): ein Standardleitfaden zur Umfragegestaltung.
- Jakob Nielsen, Usability-Forschung (nngroup.com): praktische Belege zu Usability-Tests mit kleinen Stichproben.
- Das Begleitbuch *Service Management Metrics*: Definitionen und Leitplanken für Erlebniskennzahlen.
- Wikipedia, „Customer satisfaction“ und „Sentiment analysis“: Überblicke über die Hauptideen.

## Literaturverzeichnis

1. Customer satisfaction — Wikipedia — https://en.wikipedia.org/wiki/Customer_satisfaction
2. Net promoter score — Wikipedia — https://en.wikipedia.org/wiki/Net_promoter_score
3. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
4. User experience — Wikipedia — https://en.wikipedia.org/wiki/User_experience
5. Survey methodology — Wikipedia — https://en.wikipedia.org/wiki/Survey_methodology
6. Participation bias — Wikipedia — https://en.wikipedia.org/wiki/Participation_bias
7. Sentiment analysis — Wikipedia — https://en.wikipedia.org/wiki/Sentiment_analysis
8. Thematic analysis — Wikipedia — https://en.wikipedia.org/wiki/Thematic_analysis
9. Usability testing — Wikipedia — https://en.wikipedia.org/wiki/Usability_testing
10. Voice of the customer — Wikipedia — https://en.wikipedia.org/wiki/Voice_of_the_customer
11. Employee monitoring — Wikipedia — https://en.wikipedia.org/wiki/Employee_monitoring
12. Privacy — Wikipedia — https://en.wikipedia.org/wiki/Privacy
