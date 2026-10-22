# Service-Katalog-Management

**Ein Service-Katalog (in ITIL „Service Catalogue“) ist ein nach innen gewendetes Produkt-Backlog: eine gepflegte, nutzerorientierte Beschreibung dessen, was der Anbieter bietet, mit einer technischen Sicht dahinter, die zeigt, wie jeder Service aufgebaut ist. Er verdient seinen Platz nur, wenn Menschen ihn nutzen, um Services zu finden, anzufragen und zu verstehen.**

## Warum das wichtig ist

Fragen Sie einen typischen Nutzer, was seine IT- oder Personalabteilung anbietet, und Sie ernten oft ein Achselzucken. Services existieren, aber niemand hat sie so beschrieben, dass ein Nutzer sie finden oder verstehen kann. Nutzer fragen Kolleginnen und Kollegen, wählen den falschen Kanal oder bauen eigene Lösungen. Anbieter wiederum können nicht sagen, was sie anbieten, wer es verantwortet oder was es kostet, und sind überrascht von Nachfrage nach Dingen, von denen sie nicht wussten, dass sie sie unterstützen.

Ein Service-Katalog behebt das, indem er Services in der Sprache der Nutzer auflistet, mit den Informationen, die ein Nutzer braucht, um zu entscheiden und zu fragen: was der Service leistet, wer ihn nutzen darf, wie man ihn anfragt, wie lange es dauert und was er kostet. Dahinter sitzt eine technische Sicht, die jeden Service mit den Komponenten, Teams und Lieferanten verknüpft, die ihn erbringen, und mit den Vereinbarungen, die ihn regeln. Zusammen verbinden sie, was der Nutzer sieht, mit dem, was der Anbieter betreibt.

Kataloge können auf zwei entgegengesetzte Arten scheitern. Ein leerer, selten aktualisierter Katalog wird ignoriert. Ein aufgeblähter mit Hunderten Einträgen in technischer Sprache ist unbrauchbar. Dieses Thema erklärt die zwei Sichten, wie man einen Katalog baut, den Menschen nutzen, und wie man ihn lebendig hält. Es ist eng verwandt mit Service-Request-Management (Thema 3.6 — Service-Request-Management), Service-Level-Management (Thema 3.7 — Service-Level-Management) und Konfigurationsmanagement (Thema 4.4 — Konfigurationsmanagement).

## Kernkonzepte

**Service Catalogue oder Service-Katalog.** ITIL verwendet die britische Schreibweise „Service Catalogue“. Dieser Leitfaden verwendet nach dieser ersten Erwähnung „Service-Katalog“. Wikipedia beschreibt einen Service-Katalog als Liste von Services, die eine Organisation bereitstellt, oft für ihre Mitarbeitenden oder Kunden.

**Kundenorientierte Sicht.** Eine Beschreibung von Services, wie Nutzer sie verstehen, etwa „E-Mail und Kalender“, „Laptop für neue Mitarbeitende“ oder „Fragen zur Gehaltsabrechnung“. Sie nennt, was der Service ist, wer ihn nutzen darf, wie man fragt, die erwartete Zeit, die Kosten, wo relevant, und wo man Hilfe bekommt. Das ist der Teil, dem Nutzer begegnen.

**Technische Sicht.** Eine Beschreibung, wie Services aufgebaut und unterstützt werden: die Komponenten, Infrastruktur, Anwendungen, Teams, Lieferanten und Vereinbarungen hinter jedem. Sie hilft dem Anbieter, Abhängigkeiten und Auswirkungen zu verstehen, zum Beispiel welche Services betroffen sind, wenn eine Datenbank ausfällt. Sie ist mit einer Konfigurationsdatenbank verwandt; siehe Thema 4.4 — Konfigurationsmanagement.

**Service-Portfolio.** Die gesamte Menge der gesteuerten Services, einschließlich derer, die entwickelt werden, derer, die im Katalog live sind, und derer, die stillgelegt werden. Der Katalog ist der lebende Teil des Portfolios. Der Wikipedia-Artikel zu Application portfolio management ist eine verwandte Idee für Software. Siehe Thema 2.8 — Produkt- und Service-Verantwortung.

**Service-Angebot (Service Offering).** Eine formale Beschreibung eines oder mehrerer Services, womöglich mit verschiedenen Optionen, etwa Standard- oder Premium-Support. Angebote helfen Nutzern, das Passende zu wählen, und Anbietern, Nachfrage und Kosten zu verstehen.

**Katalogeintrag und Anfrage.** Ein Katalogeintrag ist das, was der Nutzer bestellen oder nutzen kann. Ist der Eintrag anfragbar, verweist er auf ein Anfragemodell (siehe Thema 3.6 — Service-Request-Management). Manche Einträge sind informativ, etwa „So verbinden Sie sich mit dem WLAN“.

**Taxonomie und Auffindbarkeit.** Nutzer finden Dinge, indem sie Kategorien durchsuchen oder suchen. Die Wikipedia-Artikel zu Taxonomy und Information architecture beschreiben, wie man Informationen organisiert. Kategorien sollten spiegeln, wie Nutzer denken, nicht wie die Organisation strukturiert ist. Ein guter Test ist, Nutzer zu fragen, wo sie nach einem bestimmten Eintrag suchen würden.

**Einfache Sprache.** Beschreibungen sollten kurz und klar sein und Fachjargon und Abkürzungen meiden. Der Wikipedia-Artikel zu Plain language beschreibt die Grundsätze. Testen Sie Beschreibungen mit Menschen, die den Service nicht kennen.

**Verantwortung.** Jeder Service hat eine namentlich benannte verantwortliche Person, die seinen Eintrag pflegt und für seine Qualität rechenschaftspflichtig ist. Ohne Verantwortliche verfallen Einträge. Siehe Thema 2.8 — Produkt- und Service-Verantwortung.

**Katalog als Backlog.** Behandeln Sie den Katalog als lebendes Produkt. Einträge werden anhand von Nachfrage und Feedback hinzugefügt, verbessert, zusammengeführt und stillgelegt. Ein Backlog von Katalogverbesserungen, regelmäßig überprüft, hält ihn aktuell. Das spiegelt die Idee des Produkt-Backlogs; siehe den Wikipedia-Artikel zu Product backlog.

**Kosten und Verrechnung.** Wo Services verrechnet werden, zeigt der Katalog den Preis oder die Kostenzuordnung. Auch ohne Verrechnung schafft das Zeigen der Kosten Bewusstsein. Siehe Thema 4.5 — Finanzmanagement und FinOps.

**Jenseits der IT.** Viele Organisationen erweitern den Katalog auf Personalwesen, Gebäudemanagement und andere Funktionen. Siehe Thema 1.9 — Enterprise Service Management.

**Suche und KI.** Nutzer suchen oder fragen zunehmend einen Chat-Assistenten, statt zu stöbern. Katalogeinhalte müssen klar und strukturiert sein, damit Suche und Assistenten sie finden. KI kann helfen, die Beschreibung eines Nutzers einem Katalogeintrag zuzuordnen.

**Wie die Blickwinkel passen.** Der Katalog ist ein Produkt kontinuierlicher Verbesserung: Aktualisieren Sie Einträge anhand realer Fragen. KI kann Einträge entwerfen, Kategorien vorschlagen und Nutzern helfen, Services zu finden, unter Prüfung. Automatisierung verbindet den Katalog mit Erfüllung und mit den Konfigurationsdaten. Analytik zeigt, was genutzt, gesucht und abgebrochen wird.

## Bewährte Praktiken

1. **Beginnen Sie mit den häufigsten Anfragen und Fragen.** Listen Sie die zwanzig Dinge auf, nach denen Nutzer am häufigsten fragen. Beschreiben Sie diese zuerst. Ein kleiner, nützlicher Katalog schlägt einen großen, leeren.
2. **Beschreiben Sie jeden Service in den Begriffen der Nutzer.** Schreiben Sie eine kurze Zusammenfassung, für wen er ist, wie man fragt, die erwartete Zeit, Kosten und wo man Hilfe bekommt. Vermeiden Sie interne Namen und Abkürzungen.
3. **Benennen Sie eine verantwortliche Person und ein Überprüfungsdatum.** Zeigen Sie, wer den Eintrag verantwortet. Überprüfen Sie jeden Eintrag mindestens jährlich und wenn sich der Service ändert.
4. **Organisieren Sie danach, wie Nutzer denken.** Testen Sie Kategorien mit Nutzern, etwa mit einem Card Sort oder einem Suchprotokoll. Ändern Sie sie, wenn die Belege es nahelegen.
5. **Verknüpfen Sie mit der Erfüllung.** Wo ein Service angefragt werden kann, verbinden Sie den Eintrag mit dem Anfrageformular und der Statusverfolgung. Ein Katalog, der nicht zu einer Handlung führt, ist eine Broschüre.
6. **Führen Sie eine technische Sicht für den Anbieter.** Erfassen Sie für jeden Service die Komponenten, Teams, Lieferanten und Vereinbarungen dahinter. Nutzen Sie sie für Auswirkungsanalysen und Planung.
7. **Zeigen Sie Kosten und Optionen.** Nennen Sie, was ein Service kostet oder verbraucht, und beschreiben Sie Optionen, damit Nutzer mit Information wählen können.
8. **Beobachten Sie, wonach Nutzer suchen.** Überprüfen Sie Suchbegriffe, die nichts oder das Falsche liefern, und ergänzen oder benennen Sie Einträge entsprechend um.
9. **Legen Sie still und führen Sie zusammen.** Entfernen Sie Services, die nicht mehr angeboten werden. Führen Sie nahezu doppelte zusammen. Kennzeichnen Sie Services, die sich ändern.
10. **Behandeln Sie den Katalog als Produkt.** Geben Sie ihm eine verantwortliche Person, ein Backlog und regelmäßiges Feedback von Nutzern. Messen Sie die Nutzung und verbessern Sie, was nicht genutzt wird.

## Fragen für die Diskussion im Team

**Wenn eine neue Mitarbeiterin fragte, was wir anbieten, könnten wir ohne Nachschlagen antworten?**
Das prüft, ob Services bekannt und beschrieben sind. Rechnen Sie mit Teilantworten. Bitten Sie drei Personen um eine Liste und vergleichen Sie. Wählen Sie anschließend die zehn wichtigsten und schreiben Sie sie auf.

**Welche unserer Katalogeinträge öffnen Nutzer nie, und welche öffnen sie und rufen uns dann an?**
Nutzen Sie Daten. Einträge, die geöffnet und abgebrochen werden, deuten auf unklare Beschreibungen. Einträge, die nie geöffnet werden, sind womöglich überflüssig. Wählen Sie anschließend drei Einträge zum Umschreiben oder Stilllegen.

**Was tippen Nutzer in die Suche, das nichts Nützliches liefert?**
Suchprotokolle offenbaren Unterschiede im Vokabular. Rechnen Sie mit einfachen Wörtern, die nicht zu internen Namen passen. Ergänzen Sie anschließend Aliasse oder neue Einträge für die fünf häufigsten fehlgeschlagenen Suchen.

**Wer verantwortet jeden Service-Eintrag, und wann wurde er zuletzt geprüft?**
Lücken in der Verantwortung und veraltete Einträge sind häufig. Fragen Sie nach Daten. Weisen Sie anschließend Verantwortliche und einen Überprüfungszyklus zu.

**Wie verbindet sich unsere technische Sicht mit dem, was Nutzer sehen, und könnten wir sagen, welche Services von einem bestimmten Ausfall betroffen sind?**
Das prüft die Verbindung der Sichten. Probieren Sie es an einem jüngeren Incident. Rechnen Sie mit manueller Arbeit. Wählen Sie anschließend einen kritischen Service und kartieren Sie seine Abhängigkeiten.

**Wie könnte KI Nutzern helfen, Services zu finden, und uns, Einträge aktuell zu halten, und was muss eine Person prüfen?**
KI kann die Beschreibung eines Nutzers Einträgen zuordnen und Aktualisierungen aus Tickets entwerfen. Sie kann Nutzer auch auf den falschen Service verweisen. Fragen Sie, wer sie verantwortet und wie Fehlzuordnungen gefunden werden. Testen Sie anschließend einen Zuordner an einer Stichprobe realer Fragen.

## In der Praxis: ein Beispiel aus dem Service-Management

Die interne IT-Abteilung einer nationalen Steuerbehörde hat einen Service-Katalog mit 340 Einträgen, die meisten geschrieben von den Engineers, die die Services gebaut haben. Mitarbeitende nutzen stattdessen das Telefon des Service Desk, und der Desk verbringt viel Zeit damit, Anrufende auf bereits bestehende Services zu verweisen.

Der Service-Manager bittet eine Gruppe von fünfzehn Mitarbeitenden aus verschiedenen Abteilungen, fünf Dinge im Katalog zu finden: eine Möglichkeit, einen Videokonferenzraum zu buchen, wie man einen zweiten Monitor bekommt, wie man einer Projekt-Mailingliste beitritt, wie man Zugriff auf ein Fallsystem erhält und wie man ein verlorenes Telefon meldet. Nur zwei gelingen. Der Katalog verwendet Begriffe wie „Bereitstellung von Audiovisuellen Konferenz-Endpunkten“ und „Peripheriegeräte“.

Das Team wertet sechs Monate an Desk-Kontakten aus und ordnet die 30 häufigsten Anfragethemen nach Rang. Es schreibt diese Einträge in einfacher Sprache neu, mit kurzer Beschreibung, wer fragen darf, wie lange es dauert, und einem Link zum Formular. Es führt 90 Einträge zu 40 zusammen, legt 60 still, die nicht mehr angeboten werden, und ergänzt Such-Aliasse wie „zweiter Bildschirm“ für Monitore. Jeder Eintrag zeigt eine verantwortliche Person und ein Überprüfungsdatum. Ein Chat-Assistent wird erprobt, der Nutzer auf Einträge hinweist, mit einem Link zu einer Person, wenn er nicht helfen kann.

Was sich ändert: Dieselbe Testgruppe findet nun vier von fünf Dingen, und die Kontakte des Desks der Art „Wo finde ich …“ sinken. Was schwierig bleibt: Die technische Sicht ist unvollständig, sodass die Auswirkungsanalyse weiter auf Insiderwissen beruht; die übrigen 240 Einträge sind ungeprüft; und die Verantwortlichen mancher Services sagen, sie hätten keine Zeit, Einträge aktuell zu halten. Der Manager setzt eine Regel, dass Einträge, die binnen eines Jahres nicht überprüft wurden, als „nicht verifiziert“ markiert und in der Suche herabgestuft werden.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Beschreiben Sie die Services, die Sie für Nutzer bauen, und halten Sie die Einträge aktuell, wenn Sie sie ändern. Liefern Sie die technischen Informationen, die Ihre Komponenten mit den Services verknüpfen, die sie unterstützen.

### Service- und Betriebsteams

Pflegen Sie die technische Sicht und nutzen Sie sie bei Incidents und Changes. Beobachten Sie, wonach Nutzer suchen und fragen, und geben Sie Lücken an die Verantwortlichen zurück. Helfen Sie, Verknüpfungen zur Erfüllung funktionsfähig zu halten.

### Führung und Governance

Verlangen Sie einen Katalog, den Nutzer nützlich finden, mit Verantwortlichen und Überprüfungsdaten. Finanzieren Sie seine Pflege. Nutzen Sie ihn, um zu sehen, was angeboten wird, was es kostet und was stillgelegt wird.

### Kunden und Nutzer

Sie sollten finden können, was verfügbar ist, es verstehen und anfragen, ohne das Organigramm zu kennen. Sagen Sie dem Anbieter, was Sie nicht finden oder verstehen konnten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie den Katalog als Backlog: Verbessern Sie zuerst die meistgenutzten Einträge, in kleinen Schritten, mit Nutzerfeedback. Überprüfen Sie ihn regelmäßig mit den Beteiligten. Vorsicht: Bauen Sie nicht den ganzen Katalog vor dem Start; ein kleiner, nützlicher Anfang lehrt Sie mehr.

### KI

KI kann Einträge aus vorhandenen Dokumenten entwerfen, Kategorien und Aliasse vorschlagen und Nutzern im Chat helfen, Services zu finden. Jede Nutzung braucht eine verantwortliche Person, und eine Person sollte veröffentlichten Text genehmigen. Vorsicht: Ein Assistent, der einen nicht existierenden Eintrag errät, führt Nutzer in die Irre; verlangen Sie, dass er Katalogeinträge zitiert. Siehe Thema 5.3 — KI-Service-Desk und virtuelle Agenten.

### Automatisierung

Verbinden Sie den Katalog mit Anfrageformularen, Genehmigungen und Erfüllung und erzeugen Sie Teile der technischen Sicht aus Konfigurationsdaten. Vorsicht: Ein automatischer Import technischer Daten kann den Katalog mit Maschinennamen füllen; behalten Sie für den nutzerorientierten Text einen menschlichen Bearbeitungsschritt. Siehe Thema 6.5 — Self-Service und automatisierte Bereitstellung.

### Analytik

Verfolgen Sie Aufrufe, Suchen, Suchen ohne Ergebnis, gestellte Anfragen und abgebrochene Anfragen. Vorsicht: Beliebtheit ist nicht Wert; ein selten genutzter Eintrag kann für wenige Menschen kritisch sein. Kombinieren Sie Zählungen mit Feedback. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Ein Katalog von Engineers geschrieben.** Nutzer verstehen ihn nicht. Schreiben Sie in einfacher Sprache neu und testen Sie.
- **Zu viele Einträge.** Niemand findet etwas. Beginnen Sie klein, dann führen Sie zusammen und legen still.
- **Keine Verantwortlichen.** Einträge verfallen. Benennen Sie Verantwortliche und Überprüfungsdaten.
- **Nur Broschüre.** Der Katalog führt nicht zu Handlung. Verknüpfen Sie Einträge mit Formularen und Status.
- **Kategorien nach Organigramm.** Nutzer können nicht erraten, wo sie suchen sollen. Organisieren Sie nach Nutzerabsicht.
- **Keine technische Sicht.** Die Auswirkungsanalyse ist Raten. Kartieren Sie Abhängigkeiten für kritische Services.
- **Nie stilllegen.** Tote Einträge führen in die Irre. Überprüfen und entfernen Sie.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Nutzerorientierte Sicht | Keine oder technische | Wichtigste Services beschrieben | Services in einfacher Sprache mit Verantwortlichen beschrieben | Einträge mit Nutzern getestet und überprüft | Einträge über Funktionen und Kanäle konsistent |
| Technische Sicht | Nicht erfasst | Wichtigste Services kartiert | Abhängigkeiten für wichtige Services erfasst | Bei Incidents und Changes genutzt | Aus Konfigurationsdaten erzeugt und aktuell gehalten |
| Auffindbarkeit | Nur Stöbern | Etwas Suche | Suche und Kategorien mit Nutzern getestet | Suchprotokolle steuern Änderungen | Suche und Assistenten über Kanäle integriert |
| Pflege | Keine | Gelegentlich | Verantwortliche und Überprüfungsdaten | Nutzung und Qualität gemessen | Kontinuierliche Verbesserung aus Feedback |

## Checkliste

- [ ] Die zwanzig häufigsten Anfragen und Fragen stehen im Katalog.
- [ ] Jeder Eintrag ist in einfacher Sprache und nennt wer, wie, wie lange und Kosten.
- [ ] Jeder Eintrag hat eine verantwortliche Person und ein Überprüfungsdatum.
- [ ] Kategorien wurden mit Nutzern getestet.
- [ ] Anfragbare Einträge verweisen auf Formulare und Status.
- [ ] Die technische Sicht deckt unsere kritischen Services ab.
- [ ] Wir überprüfen fehlgeschlagene Suchen und abgebrochene Einträge.
- [ ] Wir legen Einträge regelmäßig still oder führen sie zusammen.

## KI-Prompts

**Entwerfen Sie aus Notizen einen Katalogeintrag.**

```text
Here are notes on the service [name]: [paste, including what it does, who can use it, how to ask, how long, cost].
Draft a catalog entry of under 120 words in plain language with a one-line summary, who it is for, how to ask, and expected time. Mark every gap in the notes with [missing] and do not fill it.
List what you are unsure of.
```

**Finden Sie Lücken im Vokabular.**

```text
Here are search terms users typed with no useful result: [paste list]. Here are our current catalog entry titles: [paste list].
For each search term, list the entry titles that might match, or write "no match", and suggest a possible alias or new entry. Do not invent entries that I did not list as possible.
List what you are unsure of.
```

**Testen Sie Kategorien.**

```text
Here is a list of catalog items: [paste]. Here is our proposed category structure: [paste].
For each item, say which category a typical user would most likely look in and why, and list items that could reasonably sit in two places. Use only what is provided.
List what you are unsure of.
```

## KI-Skills

- [service-catalog](../../../../skills/service-catalog/SKILL.md): nutzen Sie ihn, um einen nutzerorientierten Katalog aufzubauen und zu pflegen.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Einträge mit Erfüllungsschritten zu verknüpfen.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): nutzen Sie ihn, um zu erkennen, wer jeden Service nutzt und verantwortet.
- [portfolio-management](../../../../skills/portfolio-management/SKILL.md): nutzen Sie ihn, um die gesamte Menge der Services zu überprüfen.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung des Service-Catalogue-Managements durch den Eigentümer.
- Wikipedia, „Service catalog“: ein kurzer Überblick über das Konzept.
- Wikipedia, „Information architecture“: die Disziplin, Informationen für Nutzer zu organisieren.
- Wikipedia, „Plain language“: die Grundsätze klaren Schreibens.

## Literaturverzeichnis

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Application portfolio management — Wikipedia — https://en.wikipedia.org/wiki/Application_portfolio_management
3. Taxonomy — Wikipedia — https://en.wikipedia.org/wiki/Taxonomy
4. Information architecture — Wikipedia — https://en.wikipedia.org/wiki/Information_architecture
5. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
6. Configuration management database — Wikipedia — https://en.wikipedia.org/wiki/Configuration_management_database
7. Product backlog — Wikipedia — https://en.wikipedia.org/wiki/Product_backlog
8. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
9. Search engine — Wikipedia — https://en.wikipedia.org/wiki/Search_engine
10. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
