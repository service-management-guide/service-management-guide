# Generative KI für Incidents, Wissen und Changes

**Generative KI kann Incidents zusammenfassen, Wissensartikel und Nachbetrachtungen entwerfen und bei der Bewertung von Changes helfen. Sie spart bei ersten Entwürfen am meisten Zeit und bei Fakten am wenigsten; nutzen Sie sie daher zum Schreiben und Lesen, prüfen Sie jede Aussage am Datensatz und halten Sie eine benannte Person für das rechenschaftspflichtig, was versendet oder genehmigt wird.**

## Warum das wichtig ist

Ein Großteil der Arbeit beim Betrieb von Services ist Schreiben und Lesen. Bei einem Incident schreibt jemand Statusmeldungen, während andere Chat-Protokolle lesen. Danach schreibt jemand einen Zeitverlauf und eine Nachbetrachtung. Ein Wissensartikel beginnt als Lösungsnotiz eines Tickets, die in etwas Lesbares verwandelt werden muss. Ein Change-Antrag braucht eine Beschreibung, eine Risikobewertung und einen Plan. Diese Aufgaben sind zeitraubend, repetitiv und werden oft spät und schlecht erledigt, weil alle beschäftigt sind.

Generative KI ist für diese Art Arbeit gut geeignet. Große Sprachmodelle können einen langen Verlauf lesen und in Sekunden eine Zusammenfassung erzeugen. Sie können grobe Notizen in einen sauberen Entwurf verwandeln und eine Struktur für eine Nachbetrachtung vorschlagen. Gut eingesetzt, geben sie qualifizierten Menschen Raum für Urteil und Gespräch. Schlecht eingesetzt, erzeugen sie überzeugenden, flüssigen Text, der falsch ist: einen Zeitverlauf mit erfundenen Zeiten, eine Grundursache, die niemand gefunden hat, einen Runbook-Schritt, den es nicht gibt.

Der Unterschied liegt darin, wie die Arbeit aufgesetzt ist. Geben Sie dem Modell den tatsächlichen Datensatz, bitten Sie es, nur diesen zu nutzen, lassen Sie es seine Quellen zeigen und lassen Sie eine Person prüfen, bevor etwas geteilt wird. Dieses Thema gibt praktische Muster für drei Bereiche: Incidents, Wissen und Changes. Es baut auf den allgemeinen Ideen in Thema 5.1 — KI im Service-Management auf und steht in Beziehung zu Incident-Management (Thema 3.2 — Incident-Management), Problem-Management (Thema 3.3 — Problem-Management), Wissensmanagement (Thema 3.9 — Wissensmanagement) und Change Enablement (Thema 3.4 — Change Enablement). Governance-Fragen stehen in Thema 5.6 — KI-Governance, Risiko und Compliance.

## Kernkonzepte

**Generative KI.** Systeme, die aus Prompts neue Inhalte erzeugen, etwa Text und Code. Wikipedia beschreibt Generative AI und Large language models. Für die Service-Arbeit ist Text die Hauptausgabe: Zusammenfassungen, Entwürfe, Erklärungen und strukturierte Notizen.

**Halluzination.** Ausgabe, die flüssig und unbelegt oder falsch ist. Wikipedia beschreibt Hallucination in der KI. Sie ist eine Eigenschaft der Funktionsweise dieser Modelle, kein seltener Fehler. Das Risiko ist am höchsten, wenn das Modell nach Fakten gefragt wird, die es nicht erhalten hat: eine genaue Zeit, eine Ursache, eine Richtliniennummer, eine API-Option.

**Verankerung (Grounding).** Dem Modell das Quellmaterial geben und es bitten, nur daraus zu antworten. Retrieval-Augmented Generation, auf Wikipedia beschrieben, findet relevante Dokumente und stellt sie bereit. Bei Incidents sind die Quelle der Zeitverlauf, der Chat und die Monitoring-Daten; beim Wissen das Ticket und vorhandene Artikel; bei Changes der Change-Datensatz und frühere ähnliche Changes. Verankerung verringert Fehler, beseitigt sie aber nicht.

**Kontextfenster (Context Window).** Die Textmenge, die ein Modell auf einmal berücksichtigen kann. Wikipedia beschreibt das Context window. Lange Incident-Chats können es überschreiten, daher werden lange Eingaben in Teilen zusammengefasst. Prüfen Sie, ob wichtiges Material herausfiel.

**Zusammenfassung.** Einen langen Text auf seine Hauptpunkte verdichten. Wikipedia beschreibt Automatic summarization. Zusammenfassungen verlieren konstruktionsbedingt Einzelheiten und können sie verzerren. Am besten dienen sie als Wegweiser zum Original, mit der Möglichkeit, es zu prüfen.

**Entwürfe, keine Entscheidungen.** Die sicherste Nutzung ist, einen ersten Entwurf zu erzeugen, den eine Person bearbeitet und verantwortet. Der Name der Person steht auf dem Ergebnis, und sie ist dafür rechenschaftspflichtig. Das hält das Urteil bei Menschen und nutzt das Modell für den mechanischen Teil.

**Prompt und Anweisung.** Der Text, den das Modell erhält. Klare Anweisungen, mit Rolle, Aufgabe, Quellen, Format und dem Vorgehen bei fehlenden Informationen, verbessern die Ergebnisse. Siehe Thema 5.7 — KI-Skills und Prompts.

**Vertraulichkeit.** Incident-Chats und Tickets enthalten oft Geheimnisse, personenbezogene Daten und Sicherheitsdetails. Wohin der Text geht, zählt: ein von Ihrer Organisation betriebenes Modell, der Service eines Anbieters unter Vertrag oder ein öffentliches Werkzeug mit unbekannten Bedingungen. Entscheiden Sie, was wohin darf. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Prompt Injection.** Text im Material, das Sie dem Modell geben, etwa der Text eines Tickets oder eine Logzeile, kann Anweisungen enthalten, die sein Verhalten zu ändern versuchen. Wikipedia beschreibt Prompt injection. Behandeln Sie alle Eingaben als nicht vertrauenswürdig und lassen Sie ein Modell mit Handlungsbefugnissen keine Inhalte aus unbekannten Quellen lesen.

**Automation Bias.** Die Neigung, automatisierten Vorschlägen zu vertrauen, besonders wenn man müde oder beschäftigt ist. Wikipedia beschreibt Automation bias. Bei einem Incident kann ein flüssiger Vorschlag Reagierende auf den falschen Weg schicken. Behandeln Sie KI-Ausgabe als Hypothese.

**Incidents.** Nützliche Aufgaben sind, einen Verlauf für eine neue reagierende Person zusammenzufassen, eine Statusmeldung zur Prüfung zu entwerfen, einen Zeitverlauf der Ereignisse mit Zeitstempeln aus dem Datensatz zu ziehen, ähnliche frühere Incidents zu finden und Fragen für die Nachbetrachtung vorzuschlagen. Riskante Aufgaben sind, eine Grundursache als Tatsache zu behaupten und eine Aktualisierung ungeprüft an Kunden zu senden.

**Wissen.** Nützliche Aufgaben sind, ein gelöstes Ticket in einen Artikelentwurf zu verwandeln, einen Artikel in einfache Sprache umzuschreiben, Titel und Schlagwörter vorzuschlagen und Duplikate zu finden. Riskante Aufgaben sind, Entwürfe ohne fachliche Prüfung zu veröffentlichen und sich darauf zu verlassen, dass das Modell die richtige Behebung kennt.

**Changes.** Nützliche Aufgaben sind, eine Change-Beschreibung auf fehlende Informationen zu prüfen, einen großen Pull Request zusammenzufassen, Testfälle vorzuschlagen und Risikofaktoren aus ähnlichen früheren Changes aufzulisten. Riskante Aufgaben sind, einen Change zu genehmigen oder sein Risiko allein auf das Wort des Modells hin als „niedrig“ zu bewerten.

**Code und Skripte.** Modelle können Skripte, Abfragen und Konfiguration entwerfen. Wikipedia beschreibt Code generation im weiteren Sinn. Generierter Code kann Fehler, Sicherheitslücken oder Lizenzfragen enthalten. Behandeln Sie ihn als nicht vertrauenswürdigen Code: prüfen, testen und durch die Pipeline schicken. Siehe Thema 3.4 — Change Enablement und Thema 4.2 — Software-Asset-Management.

**Aufzeichnungen und Audit.** Führen Sie Buch darüber, wie KI genutzt wurde: der Prompt, die gegebenen Quellen, die Ausgabe, wer sie geprüft hat und was sich geändert hat. Wikipedia beschreibt Audit trails. Das stützt Lernen und Rechenschaft.

**Wie die Blickwinkel passen.** Generative KI ist eine der sichtbarsten Formen des KI-Blickwinkels. Agile Praxis legt kurze Erprobungen mit Feedback derer nahe, die die Arbeit tun. Automatisierung kann die Entwürfe in Werkzeuge einspeisen, mit Prüfschranken. Analytik zeigt, welche Nutzungen Zeit sparen und welche Nacharbeit verursachen.

## Bewährte Praktiken

1. **Geben Sie ihm den Datensatz und sagen Sie, nur diesen zu nutzen.** Fügen Sie den tatsächlichen Zeitverlauf, das Ticket oder den Change ein oder rufen Sie ihn ab, und weisen Sie das Modell an, nur den gelieferten Text zu nutzen. Sagen Sie ihm, „nicht angegeben“ zu schreiben, wenn Informationen fehlen.
2. **Bitten Sie um Zitate und Verweise.** Lassen Sie das Modell die genutzten Zeilen oder Artikel zitieren, damit eine Person jede Aussage schnell prüfen kann.
3. **Trennen Sie Fakten von Schlussfolgerung.** Bitten Sie zuerst um Fakten aus dem Datensatz und danach um klar gekennzeichnete Hypothesen. Lassen Sie Hypothesen nicht als Befunde erscheinen.
4. **Halten Sie eine menschliche verantwortliche Person.** Wer die Aktualisierung versendet, den Artikel veröffentlicht oder den Change genehmigt, verantwortet den Inhalt, was auch immer das Modell entwarf. Machen Sie das im Prozess ausdrücklich.
5. **Senden Sie keine ungeprüfte Ausgabe nach außen.** Statusmeldungen an Kunden, Aufsichtsbehörden oder die Öffentlichkeit brauchen menschliche Prüfung und Genehmigung. Interne Entwürfe sind weniger riskant, brauchen aber dennoch Prüfung.
6. **Schützen Sie die Daten.** Nutzen Sie Werkzeuge, die für die Sensibilität des Inhalts genehmigt sind. Entfernen Sie Geheimnisse und personenbezogene Daten, wo Sie können, und kopieren Sie nie Zugangsdaten hinein.
7. **Prüfen Sie Zahlen, Namen und Zeiten.** Hier zeigt sich Erfindung am häufigsten. Vergleichen Sie jede Zahl im Entwurf mit der Quelle.
8. **Testen Sie mit realen Fällen.** Führen Sie den Ansatz an früheren Incidents und Tickets aus, bei denen Sie die Wahrheit kennen, und halten Sie fest, wo er versagt. Teilen Sie die Erkenntnisse und aktualisieren Sie Ihre Anweisungen.
9. **Protokollieren Sie die Nutzung.** Halten Sie fest, dass KI geholfen hat, mit Quellen und prüfender Person. Verfolgen Sie Korrekturen, um zu lernen, welche Aufgaben sich eignen.
10. **Überprüfen und beenden Sie.** Prüfen Sie, welche Nutzungen Zeit sparen und welche Nacharbeit verursachen. Beenden Sie die, die nicht helfen.

## Fragen für die Diskussion im Team

**Welche Schreib- und Leseaufgaben in unserer Incident- und Change-Arbeit kosten die meiste Zeit, und welche sind risikoarm?**
Erstellen Sie eine Liste. Rechnen Sie mit Zeitverläufen, Statusmeldungen, Entwürfen für Nachbetrachtungen und Change-Beschreibungen. Ordnen Sie nach Risiko. Wählen Sie anschließend eine risikoarme Aufgabe, die wir mit KI ausprobieren.

**Was müssten wir an einer von KI geschriebenen Incident-Zusammenfassung prüfen, bevor wir ihr trauen?**
Denken Sie an Zeiten, Ursachen und Auswirkung. Rechnen Sie mit Einigkeit, dass Zeiten und Ursachen geprüft werden müssen. Schreiben Sie anschließend eine kurze Checkliste.

**Welche Informationen dürfen nie in ein KI-Werkzeug, und wie machen wir es leicht, das zu befolgen?**
Listen Sie Geheimnisse, personenbezogene Daten und Sicherheitsdetails auf. Rechnen Sie mit Verwirrung darüber, was zählt. Vereinbaren Sie anschließend eine einfache Regel und ein sicheres Werkzeug für den Rest.

**Woran würden wir erkennen, dass KI-Zusammenfassungen oder -Entwürfe unsere Wissensdatenbank verschlechtern?**
Denken Sie an falsche Schritte und wiederholte Fehler. Rechnen Sie mit „gar nicht“. Ziehen Sie anschließend jeden Monat Stichproben KI-gestützter Artikel auf Richtigkeit.

**Wann ließen wir KI das Risiko eines Changes vorschlagen, und wer entscheidet?**
Diskutieren Sie. Rechnen Sie mit Vorsicht bei der Genehmigung und Zustimmung zu Hinweisen auf fehlende Informationen. Vereinbaren Sie anschließend, dass KI Fragen und ähnliche frühere Changes vorschlagen darf und dass eine Person das Risiko bewertet.

**Wer in unserem Team ist gut darin, KI-Ausgaben zu prüfen, und wie verbreiten wir diese Fähigkeit?**
Prüfen ist eine Fähigkeit. Rechnen Sie mit wenigen zuversichtlichen Personen. Führen Sie anschließend eine kurze Übung durch, in der das Team gemeinsam einen fehlerhaften Entwurf prüft.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Team für Betriebstechnik einer nationalen Bahn betreibt Unterstützungssysteme für die Signaltechnik. Nach jedem Major Incident verbringt eine Ingenieurin einen halben Tag damit, aus Chat-Protokollen, Monitoring-Grafiken und Ticketnotizen eine Nachbetrachtung zu schreiben. Die Nachbetrachtungen kommen spät, und jüngere waren dünn.

Der Teamleiter erprobt einen generativen KI-Assistenten, betrieben im Rahmen des Vertrags der Bahn mit einem Anbieter, der Eingaben weder aufbewahrt noch zum Training nutzt, für den ersten Entwurf von Nachbetrachtungen. Für jeden Incident exportiert die Ingenieurin das Chat-Protokoll und den Ticketverlauf, entfernt Mitarbeitendennamen und gibt dem Assistenten diese Anweisungen: nur den gelieferten Text nutzen; einen Zeitverlauf erstellen, in dem jeder Eintrag die Quellzeile zitiert; die Auswirkung wie angegeben auflisten; auflisten, was half und was die Reaktion verlangsamte; alles, was nicht im Text steht, als „nicht angegeben“ markieren; und Hypothesen in einen getrennten, entsprechend gekennzeichneten Abschnitt setzen.

Beim ersten Test, an einem früheren Incident, ist der Zeitverlauf des Entwurfs korrekt, bis auf eine Neustartzeit von 02:15 Uhr, obwohl der Chat „so gegen Viertel nach, glaube ich“ sagt und das Ticket 02:22 Uhr; die Ingenieurin korrigiert sie. Der Entwurf nennt außerdem als Ursache „einen fehlerhaften Netzwerk-Switch“, der im Chat als später widerlegte Vermutung auftaucht; die Nachbetrachtung verschob ihn wie angewiesen zu den Hypothesen, hatte aber die Widerlegung nicht vermerkt. Die Ingenieurin behebt beides und schickt den Entwurf nach zwei statt vier Stunden an das Team.

Nach zehn Incidents schätzt das Team, dass erste Entwürfe etwa ein Drittel der Zeit brauchen. Es ergänzt eine Regel, dass die Ingenieurin jede Zeit und Ursache an der Quelle prüft und dass Nachbetrachtungen festhalten, dass KI die erste Fassung entwarf. Außerdem beschließt es, KI noch nicht zur Risikobewertung in Change-Datensätzen einzusetzen.

Was sich ändert: Nachbetrachtungen kommen binnen eines Tages und enthalten mehr Einzelheiten dazu, was half. Was schwierig bleibt: Ingenieurinnen übernehmen mitunter die Formulierung des Modells bei Ursachen, die die Belege nur schwach stützen; vertrauliche Einzelheiten bleiben gelegentlich in exportierten Chats; und eine Ingenieurin sorgt sich, dass die Schreibfähigkeit verblasse. Der Leiter plant eine vierteljährliche Sitzung ein, in der Ingenieurinnen eine Nachbetrachtung ohne KI schreiben, und vergleicht.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Nutzen Sie KI, um Change-Beschreibungen, Testideen und Release-Notes aus Ihren eigenen Aufzeichnungen zu entwerfen, und prüfen Sie sie. Behandeln Sie generierten Code als nicht vertrauenswürdig: testen und scannen Sie ihn wie jeden anderen Change.

### Service- und Betriebsteams

Nutzen Sie KI, um Verläufe zusammenzufassen und Aktualisierungen, Nachbetrachtungen und Artikel zu entwerfen, mit angehängten Quellen. Prüfen Sie jede Zeit, jeden Namen und jede Ursache und verantworten Sie, was Sie veröffentlichen.

### Führung und Governance

Setzen Sie Regeln zu Daten und Genehmigungen und finanzieren Sie Werkzeuge, die sie erfüllen. Verlangen Sie Belege für gesparte Zeit und gefundene Fehler. Akzeptieren Sie KI-Ausgabe nicht als Aufzeichnung von Tatsachen.

### Kunden und Nutzer

Sie sollten Aktualisierungen erhalten, die eine Person geprüft hat. Wenn Sie in dem, was Sie erhalten, einen Fehler sehen, sagen Sie es dem Anbieter. Fragen Sie, wie KI in dem, was Ihnen mitgeteilt wird, genutzt wird.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Erproben Sie jeweils eine Schreibaufgabe mit denen, die sie tun, sammeln Sie Feedback und verbessern Sie die Anweisungen. Halten Sie Nachbetrachtungen kurz und häufig. Vorsicht: Lassen Sie einen schnelleren Entwurf die Reflexion nicht verkürzen; der Wert einer Nachbetrachtung liegt im Lernen.

### KI

Verankern Sie jede Nutzung im Datensatz, zeigen Sie Quellen und halten Sie eine Person rechenschaftspflichtig. Testen Sie an früheren Fällen und protokollieren Sie die KI-Nutzung. Vorsicht: Flüssiger Text verbirgt schwache Belege; bitten Sie das Modell, Zuversicht und Quellen zu kennzeichnen, und prüfen Sie sie. Siehe Thema 5.7 — KI-Skills und Prompts.

### Automatisierung

Automatisieren Sie die Installation: den Datensatz exportieren, Geheimnisse entfernen, das Modell aufrufen, den Entwurf an das Ticket hängen und die prüfende Person benachrichtigen. Halten Sie vor der Veröffentlichung eine Prüfschranke. Vorsicht: Eine Pipeline, die Entwürfe automatisch veröffentlicht, verbreitet Fehler; verlangen Sie Genehmigung. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Verfolgen Sie die Zeit für Nachbetrachtungen, Änderungen an Entwürfen, gefundene Fehler und Nutzung nach Aufgabenart. Vorsicht: Das Zählen erzeugter Entwürfe belohnt Menge, und gesparte Zeit wird oft geschätzt; ziehen Sie Stichproben der Qualität der endgültigen Dokumente. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Fakten aus dem Gedächtnis.** Das Modell erfindet Zeiten und Ursachen. Liefern Sie den Datensatz und verlangen Sie Zitate.
- **Ungeprüfte Aktualisierungen nach außen.** Falsche Informationen erreichen Kunden. Verlangen Sie menschliche Genehmigung.
- **Geheimnisse in Prompts.** Sensible Daten fließen ab. Nutzen Sie genehmigte Werkzeuge und entfernen Sie Geheimnisse.
- **Abnicken.** Prüfende akzeptieren Entwürfe ohne Prüfung. Geben Sie eine Checkliste und ziehen Sie Stichproben der Prüfungen.
- **Eingaben, die das Modell manipulieren.** Feindseliger Text ändert das Verhalten. Behandeln Sie Eingaben als nicht vertrauenswürdig.
- **KI zur Risikobewertung nutzen.** Ein flüssiges „niedrig“ wird geglaubt. Nutzen Sie KI, um Fragen zu stellen, und lassen Sie Menschen das Risiko bewerten.
- **Verlust von Fähigkeiten.** Menschen hören auf zu schreiben und zu prüfen. Halten Sie Übung und Prüfqualität aufrecht.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Nutzung | Einzelne Experimente | Geteilte Tipps | Genehmigte Muster für Incidents, Wissen und Changes | Muster an Ergebnissen überprüft | Muster mit Governance in Werkzeuge integriert |
| Verankerung und Prüfung | Gedächtnis des Modells | Einige Quellen gezeigt | Quellen zitiert, Fakten an Datensätzen geprüft | Fehler verfolgt und zurückgespeist | Verifizierung teilweise automatisiert, mit menschlicher Freigabe |
| Datenschutz | Unklar | Bewusstsein | Genehmigte Werkzeuge und Regeln | Konformität überwacht | Kontrollen in Werkzeuge und Pipelines eingebaut |
| Rechenschaft | Unklar | Informell | Benannte Verantwortliche für jede Ausgabe | Verantwortliche und Prüfungen auditiert | Rechenschaft über Services hinweg integriert |

## Checkliste

- [ ] Wir haben einige risikoarme Schreibaufgaben für generative KI gewählt.
- [ ] Wir geben dem Modell den Datensatz und sagen ihm, nur diesen zu nutzen.
- [ ] Ausgaben zitieren ihre Quellen und trennen Fakten von Hypothesen.
- [ ] Eine benannte Person verantwortet und prüft jede Ausgabe, bevor sie geteilt wird.
- [ ] Wir nutzen genehmigte Werkzeuge für sensible Inhalte und entfernen Geheimnisse.
- [ ] Wir prüfen Zeiten, Namen, Zahlen und Ursachen an der Quelle.
- [ ] Wir halten fest, wann KI geholfen hat und wer geprüft hat.
- [ ] Wir lassen KI nicht allein Changes genehmigen oder Grundursachen benennen.

## KI-Prompts

**Erstellen Sie einen belegten Incident-Zeitverlauf.**

```text
Below is the chat log and ticket history of an incident, with names removed: [paste].
Produce a timeline table with columns: time (exactly as written; write "not stated" if no time), event, and the quoted source line. Then list impact as stated in the text, and a separate section "Hypotheses mentioned" with who raised each and whether the text shows it was confirmed or ruled out. Do not add anything not in the text.
List what you are unsure of.
```

**Entwerfen Sie aus einem gelösten Ticket einen Wissensartikel.**

```text
Here is a resolved ticket with notes, personal data removed: [paste]. Here are existing articles on related topics: [paste titles and summaries].
Draft a new article with a title in plain words, symptom, steps, and how to check it worked. Use only the ticket. Mark missing information with [missing], and list existing articles that might duplicate this one.
List what you are unsure of.
```

**Prüfen Sie eine Change-Beschreibung.**

```text
Here is a change description: [paste]. Our required items: [list].
List which required items are missing or unclear, list questions a reviewer should ask, and list any statements in the description that look inconsistent with each other. Do not rate the risk or recommend approval.
List what you are unsure of.
```

## KI-Skills

- [postmortem](../../../../skills/postmortem/SKILL.md): nutzen Sie ihn, um Nachbetrachtungen zu strukturieren, die KI entwirft und Menschen verantworten.
- [prompt-engineering](../../../../skills/prompt-engineering/SKILL.md): nutzen Sie ihn, um klare, verankerte Anweisungen zu schreiben.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um Verfahren in geprüfte und getestete Runbooks zu verwandeln.
- [release-notes](../../../../skills/release-notes/SKILL.md): nutzen Sie ihn, um Release-Notes zur Prüfung zu entwerfen.
- [change-request](../../../../skills/change-request/SKILL.md): nutzen Sie ihn, um zu definieren, was eine gute Change-Beschreibung enthält.

## Wichtige Quellen

- NIST, AI Risk Management Framework: eine Struktur, um Risiken der KI-Nutzung zu erkennen und zu steuern.
- OWASP, Hinweise zu Risiken für Anwendungen auf Grundlage großer Sprachmodelle (owasp.org): Ratschläge der Gemeinschaft zu Prompt Injection und verwandten Risiken.
- Wikipedia, „Generative AI“ und „Hallucination (artificial intelligence)“: Überblicke über die Technologie und ihren wichtigsten Fehlermodus.
- Wikipedia, „Automation bias“: warum Menschen automatisierten Vorschlägen zu sehr vertrauen.

## Literaturverzeichnis

1. Generative AI — Wikipedia — https://en.wikipedia.org/wiki/Generative_AI
2. Large language model — Wikipedia — https://en.wikipedia.org/wiki/Large_language_model
3. Hallucination (artificial intelligence) — Wikipedia — https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)
4. Retrieval-augmented generation — Wikipedia — https://en.wikipedia.org/wiki/Retrieval-augmented_generation
5. Automatic summarization — Wikipedia — https://en.wikipedia.org/wiki/Automatic_summarization
6. Prompt injection — Wikipedia — https://en.wikipedia.org/wiki/Prompt_injection
7. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
8. Context window — Wikipedia — https://en.wikipedia.org/wiki/Context_window
9. Postmortem documentation — Wikipedia — https://en.wikipedia.org/wiki/Postmortem_documentation
10. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
11. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
12. OWASP — OWASP Foundation — https://owasp.org
