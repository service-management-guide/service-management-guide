# KI-Skills und Prompts

**Ein Prompt ist eine Anfrage an ein KI-System, ein Skill ein wiederverwendbarer, versionierter Satz von Anweisungen für eine Art von Aufgabe. Beide funktionieren am besten, wenn sie die Aufgabe benennen, das Quellmaterial liefern, sagen, was bei fehlenden Informationen zu tun ist, und wie jedes andere Arbeitsergebnis getestet werden.**

## Warum das wichtig ist

Jeder, der einen KI-Assistenten nutzt, schreibt Prompts, meist durch Versuch und Irrtum. Manche erzielen ausgezeichnete Ergebnisse und können nicht sagen, warum. Andere erhalten vage oder falsche Antworten und entscheiden, das Werkzeug sei schlecht. Der Unterschied liegt oft nicht im Modell, sondern in der Anfrage: wie klar die Aufgabe formuliert ist, welches Material der Assistent hat und wie seine Antwort geprüft wird.

Im Service-Management zählt der Unterschied, weil die Arbeit etwas auf dem Spiel hat. Ein Prompt, der einen Incident aus dem Gedächtnis zusammenfasst, kann einen erfundenen Zeitverlauf erzeugen. Ein Prompt, der nach „Best Practice“ fragt, liefert allgemeinen Text, der richtig klingt und niemandem hilft. Ein in Eile geschriebener Prompt kann vertrauliche Daten in das falsche Werkzeug kopieren. Das sind Gewohnheiten, und Gewohnheiten lassen sich verbessern.

Skills führen die Idee einen Schritt weiter. Ein Skill bündelt die Anweisungen für eine wiederkehrende Aufgabe, etwa ein Runbook zu schreiben oder eine Nachbetrachtung durchzuführen, in einer Datei, die ein KI-Assistent laden kann, wenn die Aufgabe ansteht. Die Skills in diesem Leitfaden sind im Format von Claude Code geschrieben: Jeder ist eine `SKILL.md`-Datei mit einer kurzen Beschreibung, wann er zu nutzen ist, und der Anleitung für die Arbeit. Teams können sie kopieren, anpassen und eigene schreiben. Dieses Thema erklärt, wie man die Prompts und Skills dieses Leitfadens nutzt, welche Muster funktionieren, wie man Ergebnisse verifiziert und wie man die eigenen Skills eines Teams schreibt. Es baut auf Thema 5.1 — KI im Service-Management und den Schutzmaßnahmen in Thema 5.6 — KI-Governance, Risiko und Compliance auf.

## Kernkonzepte

**Prompt.** Der Text und gegebenenfalls angehängtes Material, den Sie einem großen Sprachmodell geben, um eine Antwort zu erhalten. Wikipedia beschreibt Prompt engineering als den Vorgang, Anweisungen so zu strukturieren, dass ein generatives Modell die gewünschte Ausgabe erzeugt. Das Modell reagiert auf Muster im Prompt; klarere Prompts geben meist bessere Antworten.

**Kontext.** Alles, was das Modell bei seiner Antwort berücksichtigen kann: Ihre Anweisungen, die Dokumente, die Sie liefern, und das bisherige Gespräch. Wikipedia beschreibt das Context window, das begrenzt, wie viel das Modell auf einmal berücksichtigen kann. Steht etwas nicht im Kontext, kann das Modell die Lücke aus allgemeinem Wissen füllen, und dort schleichen sich Fehler ein.

**Verankerung (Grounding).** Das Quellmaterial liefern und das Modell bitten, nur dieses zu nutzen. Wikipedia beschreibt Retrieval-augmented generation, eine automatisierte Form. Fügen Sie bei manueller Nutzung den relevanten Text ein und sagen Sie „nutze nur den folgenden Text“. Siehe Thema 3.9 — Wissensmanagement.

**Aufbau eines guten Prompts.** Sechs Teile decken die meisten Bedürfnisse ab:

| Teil | Was er bewirkt | Beispiel |
|---|---|---|
| Rolle oder Kontext | Legt die Situation fest | „Du hilfst einer Service-Desk-Leiterin, eine Nachbetrachtung vorzubereiten.“ |
| Aufgabe | Sagt, was zu erzeugen ist | „Fasse den Incident als Zeitverlauf zusammen.“ |
| Quellmaterial | Liefert Fakten | Der eingefügte Ticketverlauf |
| Einschränkungen | Setzt Grenzen | „Nutze nur den Text. Rate keine Ursachen.“ |
| Format | Formt die Ausgabe | „Eine Tabelle mit Zeit, Ereignis und zitierter Quelle.“ |
| Regel bei Unsicherheit | Sagt, was bei Unsicherheit zu tun ist | „Schreibe ‚nicht angegeben‘ und liste auf, worüber du unsicher bist.“ |

**Platzhalter.** Prompts in diesem Leitfaden verwenden `[eckige Klammern]`, um zu markieren, was Sie durch eigenes Material ersetzen. Ein Prompt mit nicht ausgefülltem Platzhalter ist eine häufige Ursache schlechter Ergebnisse; lesen Sie jeden, bevor Sie senden.

**Beispiele und Struktur.** Ein oder zwei Beispiele der gewünschten Ausgabe zu geben, bekannt als Few-Shot-Prompting und auf Wikipedia beschrieben, verbessert das Ergebnis oft mehr als zusätzliche Erklärung. Eine Struktur zu verlangen, etwa eine Tabelle, erleichtert das Prüfen.

**Nach Begründung fragen.** Techniken, die das Modell bitten, Schritte durchzuarbeiten, auf Wikipedia als Chain-of-thought prompting beschrieben, können Antworten bei manchen Problemen verbessern. Die sichtbare Begründung ist nicht immer ein getreuer Bericht darüber, wie die Antwort entstand, und kann ebenfalls Fehler enthalten. Nutzen Sie sie, um beim Prüfen zu helfen, nicht als Beweis.

**Verifizierung.** Behandeln Sie jede Ausgabe als Entwurf. Prüfen Sie Fakten an der Quelle, prüfen Sie Berechnungen und prüfen Sie, dass Zitate existieren. Wikipedia beschreibt Hallucination und Automation bias; beides sind Gründe zu verifizieren. Ein Prompt, der das Modell bittet, seine Quellen zu zitieren, macht das schnell.

**Iteration.** Das erste Ergebnis ist oft nicht das beste. Bitten Sie um Änderungen, weisen Sie auf Fehler hin und verfeinern Sie den Prompt. Behalten Sie die Version, die funktionierte.

**Skill.** In diesem Leitfaden ist ein Skill eine `SKILL.md`-Datei, die einem KI-Assistenten sagt, wie eine Art von Aufgabe zu erledigen ist. Sie beginnt mit einem kurzen Kopf, der den Namen des Skills und eine Beschreibung nennt, wann er zu nutzen ist, gefolgt von Anleitung: Schlüsselkomponenten, Schritten und Prüfungen. Ein Assistent, der Skills unterstützt, lädt die einschlägige Datei, wenn Ihre Anfrage zur Beschreibung passt. Skills sind Klartext, sodass sie wie andere Dokumente gelesen, geprüft, versioniert und geteilt werden können. Der Wikipedia-Artikel zu Markdown beschreibt das Format, das sie nutzen.

**Skills oder Prompts.** Ein Prompt ist für eine einzelne Anfrage; ein Skill hält eine Methode für eine wiederkehrende Art von Aufgabe fest, damit Sie sie nicht jedes Mal neu schreiben. Ein Skill kann mehrere Prompts, eine Checkliste und die Kriterien für ein gutes Ergebnis enthalten. Die Themen dieses Leitfadens verlinken auf Skills, wo eine Methode nützlich ist.

**Was Skills enthalten sollten.** Gute Skills nennen, wann sie zu nutzen sind und wann nicht, definieren die Schlüsselteile der Ausgabe, geben einen kurzen Prozess, listen häufige Fehler auf und sagen, wie das Ergebnis zu prüfen ist. Sie sind konkret und knapp. Ein Skill, der alles abdecken will, wird selten genutzt.

**Skills und Prompts testen.** Behandeln Sie sie als Arbeitsergebnisse. Bauen Sie einige realistische Testfälle mit bekannten guten Ergebnissen, führen Sie sie aus und halten Sie Fehler fest. Führen Sie sie erneut aus, wenn sich Modell, Werkzeug oder Skill ändern. Wikipedia beschreibt Regression testing, die Praxis, Tests nach Änderungen zu wiederholen, um Brüche zu fangen.

**Versionsverwaltung und Verantwortung.** Legen Sie Skills in einem Repository ab, mit verantwortlicher Person, Änderungsprotokoll und Prüfung von Änderungen. Wikipedia beschreibt Version control. Ein Skill, der sich unbemerkt ändert, kann die Ergebnisse eines Teams verändern, ohne dass es jemand merkt.

**Sicherheit.** Prompts und Skills können angegriffen oder missbraucht werden. Inhalt, den Sie einfügen, kann Anweisungen enthalten, ein Risiko, das Wikipedia als Prompt injection beschreibt. Ein Skill aus unbekannter Quelle kann dem Assistenten sagen, etwas Schädliches zu tun. Lesen Sie Skills vor der Nutzung und geben Sie Assistenten nur den Zugriff, den sie brauchen. Siehe Thema 5.5 — Agentische KI und menschliche Aufsicht.

**Vertraulichkeit.** Entscheiden Sie, was in welches Werkzeug kopiert werden darf. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Wie die Blickwinkel passen.** Skills und Prompts sind, wie Teams KI konsistent zum Einsatz bringen. Agile Praxis legt nahe, eine gemeinsame Bibliothek zu führen, die sich durch Nutzung und Feedback verbessert. Automatisierung kann genehmigte Prompts in Workflows ausführen. Analytik zeigt, welche Prompts und Skills genutzt werden und ob sie helfen.

## Bewährte Praktiken

1. **Nennen Sie die Aufgabe, nicht das Thema.** „Entwirf eine Statusmeldung für Kunden aus diesen Fakten“ funktioniert besser als „hilf mit dem Incident“. Sagen Sie, was Sie erzeugt haben wollen und für wen.
2. **Liefern Sie die Quelle und beschränken Sie darauf.** Fügen Sie das einschlägige Material ein und sagen Sie, nur dieses zu nutzen. Bitten Sie den Assistenten, „nicht angegeben“ zu schreiben, wo das Material schweigt.
3. **Sagen Sie, welches Format Sie brauchen.** Bitten Sie um eine Tabelle, eine nummerierte Liste oder eine Wortgrenze. Das erleichtert Prüfung und Nutzung des Ergebnisses.
4. **Bitten Sie um Quellen und Unsicherheit.** Verlangen Sie Zitate oder Verweise und eine Liste dessen, worüber der Assistent unsicher ist. Lesen Sie diese Liste; sie zeigt, wo Sie zuerst prüfen sollten.
5. **Kopieren Sie nie Geheimnisse oder geschützte Daten in nicht genehmigte Werkzeuge.** Entfernen Sie Namen, Zugangsdaten und personenbezogene Daten, wo Sie können. Nutzen Sie für sensibles Material die Werkzeuge, die Ihre Organisation genehmigt hat.
6. **Prüfen Sie vor der Nutzung.** Vergleichen Sie Fakten, Zahlen, Zeiten und Namen mit der Quelle. Führen Sie Code oder Befehle zuerst in einer sicheren Umgebung aus.
7. **Iterieren Sie und behalten Sie, was funktioniert.** Verfeinern Sie den Prompt über einige Runden und speichern Sie dann die endgültige Fassung mit einer Notiz, wofür sie ist und wann sie versagt.
8. **Teilen und überprüfen Sie eine Team-Bibliothek.** Halten Sie getestete Prompts und Skills an einem gemeinsamen Ort mit Verantwortlichen. Prüfen Sie Änderungen und legen Sie still, was nicht mehr funktioniert.
9. **Schreiben Sie Skills für wiederkehrende Arbeit.** Wenn Sie merken, dass Sie einen Prompt wiederholen, verwandeln Sie ihn in einen Skill mit klarer Beschreibung, Schritten und Prüfungen. Halten Sie ihn kurz.
10. **Testen Sie Skills an realen Fällen.** Bauen Sie einige Testfälle, führen Sie sie nach jeder Änderung am Skill oder am Werkzeug aus und halten Sie die Ergebnisse fest.

## Fragen für die Diskussion im Team

**Was bitten wir KI-Werkzeuge heute zu tun, und welche dieser Anfragen könnten wir als wiederverwendbaren Prompt oder Skill aufschreiben?**
Sammeln Sie Beispiele. Rechnen Sie mit wiederholten Aufgaben wie Zusammenfassungen, Entwürfen und Checklisten. Wählen Sie anschließend eine Aufgabe und schreiben Sie gemeinsam eine getestete Fassung.

**Wie prüfen wir eine KI-Antwort, bevor wir sie nutzen, und tun es alle auf dieselbe Weise?**
Fragen Sie nach dem letzten Mal, als jemand einen Fehler fand. Rechnen Sie mit unterschiedlichen Gewohnheiten. Vereinbaren Sie anschließend für jede Art von Aufgabe eine kurze Prüfroutine.

**Was haben wir in KI-Werkzeuge kopiert, das wir nicht hätten sollen, und wie machen wir das Richtige leicht?**
Fragen Sie in einem geschützten Rahmen. Rechnen Sie mit Fehlern. Vereinbaren Sie anschließend, was wohin darf, und stellen Sie ein genehmigtes Werkzeug und eine kurze Anleitung bereit.

**Welche Prompts haben für Einzelne gut funktioniert, ohne je geteilt worden zu sein?**
Bitten Sie Menschen, sie vorzuführen. Rechnen Sie mit guten. Sammeln Sie anschließend drei in einer gemeinsamen Bibliothek, mit verantwortlicher Person und Überprüfungsdatum.

**Wenn sich ein Skill, den wir nutzen, morgen änderte, wie würden wir es bemerken?**
Rechnen Sie mit „gar nicht“. Vereinbaren Sie anschließend, dass Skills in der Versionsverwaltung liegen, geprüft werden und einige Testfälle haben.

**Welche Aufgaben sollten wir nie einem KI-Assistenten übergeben, auch nicht mit Prüfung?**
Besprechen Sie Entscheidungen, die Menschen betreffen, rechtliche Schlussfolgerungen und Genehmigungen. Rechnen Sie mit Uneinigkeit. Schreiben Sie anschließend eine kurze Liste und wer sie ändern darf.

## In der Praxis: ein Beispiel aus dem Service-Management

Das 25-köpfige IT-Service-Team eines regionalen Krankenhauses hat begonnen, einen KI-Assistenten zu nutzen. Einzelne Mitarbeitende nutzen ihn unterschiedlich. Ein Analyst entwirft Wissensartikel aus Ticketnotizen, ein anderer fasst lange E-Mail-Verläufe zusammen, und ein dritter bittet ihn, unbekannte Fehlermeldungen zu erklären. Die Teamleiterin ist besorgt: Sie hat einen Artikel gesehen, der einen plausiblen, aber falschen Befehl enthielt.

Sie bittet das Team, seine drei nützlichsten Prompts zu einer einstündigen Sitzung mitzubringen. Es zeigt sich, dass vier Personen fast denselben Prompt nutzen, um aus einem gelösten Ticket einen Artikel zu machen. Die Fassung, die am besten funktioniert, besagt, dass der Assistent nur den Ticket-Text nutzen muss, „[fehlt]“ für alles schreiben muss, was nicht darin steht, die Schritte als nummerierte Zeilen auflisten muss und mit einer kurzen Liste dessen enden muss, worüber er unsicher ist. Ohne die Regel „[fehlt]“ füllte der Assistent Lücken.

Das Team verwandelt dies in eine Skill-Datei: wann sie zu nutzen ist (ein gelöstes Ticket in einen Artikelentwurf verwandeln), die Schlüsselteile eines guten Artikels, der Prozess und die Prüfungen, die eine Person vor der Veröffentlichung durchführen muss, darunter jeden Befehl in einer Testumgebung auszuführen. Es testet sie an zehn alten Tickets, deren Lösungen bekannt sind, und stellt fest, dass der Assistent bei dreien eine Versionsnummer geraten hat. Es ergänzt eine Regel zu Versionsnummern und führt die Tests erneut aus. Es legt den Skill im Repository des Teams ab, bestimmt die Stellvertreterin der Leiterin als verantwortliche Person und vereinbart, dass Änderungen wie Code geprüft werden.

Außerdem schreibt es eine Seite dazu, was nicht in KI-Werkzeuge gehört: Patientendaten, Zugangsdaten und unveröffentlichte Sicherheitsberichte; und es verweist alle auf das genehmigte Werkzeug, dessen Vertrag das Training mit ihren Daten untersagt.

Was sich ändert: Entwurfsartikel brauchen Minuten, und die Zahl der in der Prüfung gefundenen Artikel mit falschen Schritten sinkt. Was schwierig bleibt: Manche Mitarbeitende nutzen weiter private Konten, wenn das genehmigte Werkzeug langsam ist; die Skill-Bibliothek ist auf 14 Dateien gewachsen, und niemand hat die Hälfte davon überprüft; und das Verhalten des Assistenten verschob sich nach einem Anbieter-Update leicht, was die Tests nur fingen, weil jemand sie erneut ausführte. Die Leiterin ergänzt einen monatlichen Testlauf und eine vierteljährliche Bereinigungssitzung.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Nutzen Sie Prompts und Skills, um Code, Tests und Dokumentation zu entwerfen, mit Ihrer üblichen Prüfung und Ihren Pipeline-Kontrollen. Halten Sie Skills für Ihre eigenen Arbeitsabläufe im Repository neben dem Code.

### Service- und Betriebsteams

Bauen Sie eine kleine Bibliothek für wiederkehrende Aufgaben wie Aktualisierungen, Artikel und Nachbetrachtungen. Teilen Sie, was funktioniert, prüfen Sie jede Ausgabe und sagen Sie der verantwortlichen Person, wenn ein Skill versagt.

### Führung und Governance

Setzen Sie Regeln, was wohin kopiert werden darf, stellen Sie genehmigte Werkzeuge bereit und finanzieren Sie Zeit, eine Bibliothek zu bauen und zu testen. Verlangen Sie Belege, dass Ausgaben geprüft werden. Behandeln Sie Prompts nicht als Ersatz für Prozess.

### Kunden und Nutzer

Sie begegnen womöglich von KI entworfenen Inhalten. Fragen Sie, ob sie von einer Person geprüft wurden, und sagen Sie dem Anbieter, wenn sie falsch sind. Achten Sie darauf, welche personenbezogenen Daten Sie einem KI-Werkzeug geben.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Lassen Sie die Bibliothek aus der realen Nutzung wachsen: Ergänzen Sie einen Skill, wenn sich eine Aufgabe wiederholt, verbessern Sie ihn aus Feedback und legen Sie ihn still, wenn er nicht mehr hilft. Halten Sie Skills kurz und geprüft. Vorsicht: Eine große ungeprüfte Bibliothek ist eine Last; halten Sie sie klein und verantwortet.

### KI

Skills und Prompts sind die Anweisungen, die wir KI geben, und verdienen daher die Sorgfalt, die wir anderen Kontrollen geben: Verantwortung, Prüfung, Tests und Aufzeichnungen der Nutzung. Vorsicht: Anweisungen, „genau zu sein“, machen ein Modell nicht genau; verlassen Sie sich auf gelieferte Quellen, Prüfungen und menschliche Kontrolle. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Genehmigte Prompts lassen sich in Workflows einbetten, etwa eine Zusammenfassung zu entwerfen, wenn ein Ticket geschlossen wird, mit einem Prüfschritt vor der Nutzung. Vorsicht: Automatisierte Prompts laufen ohne die Sorgfalt einer Person, die jedes Mal liest; testen Sie sie an vielfältigen Eingaben und halten Sie eine menschliche Schranke. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Verfolgen Sie, welche Prompts und Skills genutzt werden, wie oft Entwürfe bearbeitet werden, in der Prüfung gefundene Fehler und gesparte Zeit je Aufgabe. Vorsicht: Nutzungszahlen belohnen Menge, und geschätzte Zeitersparnis wird leicht aufgebläht; ziehen Sie Stichproben der endgültigen Ausgaben auf Qualität. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Vage Anfragen.** Die Antwort ist allgemein. Nennen Sie Aufgabe, Zielgruppe und Format.
- **Kein Quellmaterial.** Das Modell füllt Lücken aus dem Gedächtnis. Liefern Sie die Quelle und beschränken Sie darauf.
- **Nicht ausgefüllte Platzhalter.** Ein Prompt geht mit „[hier einfügen]“ darin hinaus. Prüfen Sie vor dem Senden.
- **Der ersten Antwort trauen.** Fehler bleiben unbemerkt. Verifizieren Sie an der Quelle.
- **Geheimnisse einfügen.** Daten fließen ab. Nutzen Sie genehmigte Werkzeuge und entfernen Sie sensible Angaben.
- **Eine Skill-Bibliothek ohne Verantwortliche.** Dateien verfallen oder ändern sich unbemerkt. Halten Sie sie in der Versionsverwaltung mit Verantwortlichen und Tests.
- **Skills ungelesen herunterladen.** Eine schädliche Anweisung wird ausgeführt. Lesen und prüfen Sie vor der Nutzung.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Prompt-Praxis | Versuch und Irrtum | Tipps informell geteilt | Standardmuster mit Quellen und Prüfungen | Muster aus Fehlerdaten verfeinert | Muster in Werkzeuge und Workflows eingebettet |
| Skill-Bibliothek | Keine | Persönliche Dateien | Geteilte, verantwortete, versionierte Skills | Skills getestet und regelmäßig überprüft | Skills teamübergreifend mit Governance gesteuert |
| Verifizierung | Keine | Individuelle Gewohnheiten | Standardroutinen je Aufgabe | Fehler verfolgt und zurückgespeist | Verifizierung durch Werkzeuge gestützt, mit menschlicher Freigabe |
| Datenregeln | Unklar | Bewusstsein | Klare Regeln und genehmigte Werkzeuge | Konformität geprüft | Kontrollen in Werkzeuge eingebaut |

## Checkliste

- [ ] Unsere Prompts nennen Aufgabe, Quelle, Format und Regel bei Unsicherheit.
- [ ] Wir prüfen Ausgaben vor der Nutzung an der Quelle.
- [ ] Wir haben Regeln, was in welche Werkzeuge kopiert werden darf, und genehmigte Werkzeuge.
- [ ] Wir halten getestete Prompts und Skills an einem gemeinsamen, verantworteten Ort.
- [ ] Skills haben eine klare Beschreibung, wann sie zu nutzen sind.
- [ ] Wir testen Skills nach jeder Änderung am Skill oder am Werkzeug an realen Fällen.
- [ ] Wir prüfen Skills aus externen Quellen vor der Nutzung.
- [ ] Wir führen eine Liste von Aufgaben, die nicht an KI übergeben werden dürfen.

## KI-Prompts

**Verbessern Sie einen Prompt.**

```text
Here is a prompt I use: [paste]. Here is an example of an output that disappointed me: [paste].
Identify what the prompt does not say that would help (task, source material, constraints, format, uncertainty rule), propose a rewritten prompt with [placeholders] for my material, and explain each change in one line. Do not add facts about my situation.
List what you are unsure of.
```

**Verwandeln Sie einen Prompt in einen Skill.**

```text
Here is a prompt that works well for my team: [paste]. Here are two examples of good outputs: [paste].
Draft a SKILL.md with a header (name and a one-sentence description of when to use it and when not), key components of a good output, a short process, common mistakes, and a checklist for verifying the result. Keep it under 400 words and do not add steps not implied by my examples.
List what you are unsure of.
```

**Gestalten Sie Tests für einen Skill.**

```text
Here is a skill: [paste].
Write eight test cases: five typical, two awkward, and one that tries to make the assistant ignore the skill. For each, describe the input and the correct behavior. Do not use real personal data.
List what you are unsure of.
```

## KI-Skills

- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): nutzen Sie ihn, um Prompts zu gestalten, zu testen und zu verfeinern.
- [service-management-guide-skill](../../../../skills/service-management-guide-skill/SKILL.md): nutzen Sie ihn, um die Themen, Fragen und Prompts dieses Leitfadens zu finden und anzuwenden.
- [service-management-guide-maintainer-skill](../../../../skills/service-management-guide-maintainer-skill/SKILL.md): nutzen Sie ihn, um die Themen und Skills dieses Leitfadens zu pflegen.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn als Beispiel für einen gut strukturierten Skill für betriebliche Arbeit.

## Wichtige Quellen

- Anthropic, Dokumentation zu Prompting und zu Agent Skills (docs.anthropic.com): Hinweise des Anbieters zum Schreiben von Anweisungen und Skills für Claude-Modelle.
- OWASP, Hinweise zu Risiken für Anwendungen auf Grundlage großer Sprachmodelle (owasp.org): darunter Prompt Injection.
- Wikipedia, „Prompt engineering“: ein Überblick über Techniken und Begriffe.
- Das Verzeichnis `skills/` dieses Leitfadens: ausgearbeitete Beispiele für Skills zu Aufgaben des Service-Managements.

## Literaturverzeichnis

1. Prompt engineering — Wikipedia — https://en.wikipedia.org/wiki/Prompt_engineering
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Few-shot learning — Wikipedia — https://en.wikipedia.org/wiki/Few-shot_learning
6. Chain of thought — Wikipedia — https://en.wikipedia.org/wiki/Chain_of_thought
7. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
8. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
9. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
10. Markdown — Wikipedia — https://en.wikipedia.org/wiki/Markdown
11. Version control — Wikipedia — https://en.wikipedia.org/wiki/Version_control
12. OWASP — OWASP Foundation — https://owasp.org
