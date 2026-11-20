# Service-Request-Management

**Service-Request-Management bearbeitet die geplanten, wiederholbaren Dinge, um die Nutzer bitten, etwa Zugriff, Ausstattung und Informationen, als standardisierte Services mit klaren Formularen, Genehmigungen und Erfüllungsschritten. Das Ziel ist, Routineanfragen schnell und vorhersehbar zu machen und zu automatisieren, was sich sicher automatisieren lässt.**

## Warum das wichtig ist

Ein großer Teil der Arbeit eines Service Desk handelt nicht davon, dass etwas kaputt ist. Er handelt davon, dass Menschen etwas brauchen: ein neues Konto, Zugriff auf einen Ordner, eine Softwarelizenz, ein Mobiltelefon, eine Raumbuchung, eine Namensänderung. Diese Anfragen sind vorhersehbar und wiederholen sich. Jede als einmaliges Gespräch zu behandeln, verschwendet die Zeit der Anfragenden wie der Erfüllenden.

Sind Anfragen standardisiert, werden sie schnell. Die anfragende Person sieht eine Beschreibung dessen, was sie erbitten kann, füllt ein kurzes Formular aus, das erfasst, was die erfüllende Person braucht, und erhält einen klaren Status. Genehmigungen erfolgen nur dort, wo nötig. Erfüllungsschritte sind dokumentiert, im Team geteilt und, wo sicher, automatisiert. Die Zeit für Routine sinkt, und Aufmerksamkeit wird für schwierigere Arbeit frei.

Schlecht gesteuerte Anfragen richten eigenen Schaden an. Unklare Formulare erzeugen wiederholte Rückfragen. Genehmigungen, die niemand liest, fügen Tage hinzu. Ohne Prüfung erteilter Zugriff wird zum Sicherheitsrisiko, und nie entzogener Zugriff zu einem anderen. Dieses Thema erklärt, wie man Anfrageerfüllung gestaltet, betreibt und verbessert und wie sie mit dem Service-Katalog (Thema 3.8 — Service-Katalog-Management), dem Service Desk (Thema 3.1 — Service Desk) und der Automatisierung (Thema 6.5 — Self-Service und automatisierte Bereitstellung) zusammenhängt.

## Kernkonzepte

**Service-Request.** In ITIL 4 eine Anfrage eines Nutzers oder seiner bevollmächtigten Vertretung, die eine Service-Handlung auslöst, die als normaler Teil der Service-Erbringung vereinbart wurde. Beispiele sind eine Anfrage nach Information, nach Zugriff, nach einem Standardartikel und nach einem Standard-Change. Ein Service-Request ist kein Fehler: Er ist etwas, das der Anbieter zu tun vereinbart hat.

**Anfrage oder Incident.** Ein Incident ist eine ungeplante Unterbrechung oder Qualitätsminderung; eine Anfrage ist eine geplante, standardisierte Bitte. „Mein Laptop startet nicht“ ist ein Incident. „Ich brauche einen Laptop“ ist eine Anfrage. Manche Systeme behandeln beides in einem Werkzeug mit unterschiedlichen Workflows. Beides in einer Warteschlange zu mischen verbirgt den Unterschied, wie jedes behandelt werden sollte. Siehe Thema 3.2 — Incident-Management.

**Anfragemodell (Request Model).** Eine vordefinierte Beschreibung, wie eine bestimmte Art von Anfrage bearbeitet wird: die erforderlichen Informationen, die Genehmigungsregeln, die Schritte, wer jeden ausführt, die Zielzeit und der Weg, den Nutzer zu informieren. Die Wikipedia-Artikel zu Workflow und Standardization beschreiben allgemeine Ideen. Ein Modell wird einmal geschrieben, mit der Zeit verbessert und wiederverwendet.

**Katalogeintrag.** Jede Anfrageart erscheint im Service-Katalog mit einem nutzerfreundlichen Namen, einer Beschreibung, wer anfragen darf, und der erwarteten Zeit. Siehe Thema 3.8 — Service-Katalog-Management. Wikipedia beschreibt Service-Kataloge als Liste angebotener Services.

**Genehmigung.** Manche Anfragen brauchen Autorisierung, etwa durch eine Führungskraft oder einen Budgetverantwortlichen. Gutes Design begrenzt Genehmigungen auf Stellen, an denen sie Wert schaffen: wo Geld ausgegeben oder Zugriff auf sensible Informationen erteilt wird. Genehmigungsketten, die aus Tradition statt aus Risiko bestehen, fügen Verzögerung hinzu.

**Erfüllung.** Die Arbeit, das Angeforderte zu liefern. Sie kann manuell, teilautomatisiert oder vollautomatisiert sein. Eine verbreitete Entwicklung ist, zuerst die Schritte zu dokumentieren, dann die repetitiven per Skript abzubilden und schließlich das Formular direkt mit dem Skript zu verbinden.

**Self-Service.** Nutzer stellen Anfragen und verfolgen sie über ein Portal oder einen Chat, ohne den Service Desk einzubeziehen. Wikipedia beschreibt Self-service als System, in dem Menschen sich selbst bedienen. Guter Self-Service hängt von Formularen ab, die Nutzer verstehen, und von Statusinformationen, denen sie vertrauen können. Siehe Thema 6.5 — Self-Service und automatisierte Bereitstellung.

**Identität und Zugriff.** Ein großer Teil der Anfragen betrifft Zugriff. Die Wikipedia-Artikel zu Identity and access management und zum Principle of least privilege beschreiben die Hauptideen: nur den nötigen Zugriff gewähren, prüfen, wer fragt, festhalten, wer genehmigt hat, und Zugriff entziehen, wenn er nicht mehr gebraucht wird. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Eintritte, Wechsel, Austritte (Joiners, Movers, Leavers).** Die Lebensereignisse von Menschen in einer Organisation, etwa ein neuer Einstieg, ein Rollenwechsel oder ein Ausscheiden, lösen Bündel von Anfragen aus. Sie als eine Reise mit verantwortlicher Person und Checkliste zu behandeln, vermeidet versäumte Schritte. Siehe Thema 1.9 — Enterprise Service Management.

**Standard-Changes.** Viele Anfragen sind Standard-Changes, die vorab genehmigt und risikoarm sind. Beide Praktiken zu verbinden vermeidet doppelte Genehmigung. Siehe Thema 3.4 — Change Enablement.

**Ziele und Erwartungen.** Jede Anfrageart hat eine erwartete Lieferzeit, und Nutzer sehen sie. Ziele sollten realistisch sein, auf tatsächlicher Leistung beruhen und ehrlich, wo die Erfüllung von Dritten abhängt.

**Kosten und Verrechnung.** Manche Anfragen haben Kosten, etwa eine Lizenz oder ein Gerät. Kosten und Zahlende zu zeigen hilft Nutzern bei Entscheidungen und Verantwortlichen, die Nachfrage zu sehen. Siehe Thema 4.5 — Finanzmanagement und FinOps.

**Erlebnis.** Ein gutes Anfrageerlebnis heißt, dass Nutzer finden, was sie wollen, das Formular verstehen, wissen, was als Nächstes geschieht, und es erhalten, wenn es versprochen wurde. Der Wikipedia-Artikel zu Customer experience gibt allgemeinen Hintergrund.

**Wie die Blickwinkel passen.** Anfrage-Management ist die Heimat kontinuierlicher Verbesserung durch kleine Änderungen: ein Formular vereinfachen, eine Genehmigung entfernen, einen Schritt automatisieren. KI kann Nutzern helfen, die richtige Anfrage zu finden und das Formular auszufüllen, und Erfüllenden bei der Vorbereitung. Automatisierung leistet die wiederholbare Arbeit. Analytik zeigt Nachfrage und Verzögerungen.

## Bewährte Praktiken

1. **Beschreiben Sie Anfragen in den Worten der Nutzer.** Benennen Sie jede Anfrage nach dem, was der Nutzer will, etwa „Zugriff auf einen gemeinsamen Ordner“, nicht nach dem technischen Objekt. Testen Sie die Namen mit Nutzern.
2. **Halten Sie Formulare kurz.** Fragen Sie nur nach dem, was die erfüllende Person braucht, und füllen Sie vor, was Sie schon wissen. Testen Sie das Formular mit einem neuen Nutzer und beobachten Sie, wo er zögert.
3. **Schreiben Sie für jede Art ein Anfragemodell.** Erfassen Sie Eingaben, Genehmigungen, Schritte, verantwortliche Person, Zielzeit und Nachrichten an Nutzer. Überprüfen Sie die Modelle regelmäßig an realen Daten.
4. **Genehmigen Sie nur, wo es Wert schafft.** Benennen Sie für jede Genehmigung das Risiko, das sie adressiert, und die Person, die es versteht. Entfernen Sie Genehmigungen, die nie eine Anfrage abgelehnt oder verändert haben, nach Rücksprache mit dem Risikoverantwortlichen.
5. **Zeigen Sie Status und erwartete Zeit.** Lassen Sie Nutzer sehen, wo ihre Anfrage steht und wann sie zu erwarten ist. Senden Sie eine Nachricht, wenn sich etwas ändert oder verzögert.
6. **Automatisieren Sie in Schritten.** Beginnen Sie mit einem klaren manuellen Verfahren, bilden Sie dann die repetitiven Schritte per Skript ab und verbinden Sie schließlich das Formular mit dem Skript. Führen Sie ein Protokoll und einen manuellen Rückfallweg.
7. **Behandeln Sie Zugriff mit Sorgfalt.** Prüfen Sie die Identität, gewähren Sie geringste Rechte, halten Sie Genehmigungen fest, überprüfen Sie Zugriffe regelmäßig und machen Sie den Entzug so routinemäßig wie die Erteilung. Siehe Thema 3.13 — Informationssicherheitsmanagement.
8. **Behandeln Sie Lebensereignisse als Reisen.** Legen Sie für Eintritte, Wechsel und Austritte eine Reise mit verantwortlicher Person, Checkliste und gemeinsamem Status über Teams hinweg an.
9. **Überprüfen Sie die Nachfrage.** Schauen Sie, welche Anfragen am häufigsten sind, welche am längsten dauern und welche abgebrochen oder zurückgegeben werden. Nutzen Sie die Erkenntnisse, um Formulare und Modelle zu verbessern.
10. **Legen Sie Anfragearten still und führen Sie sie zusammen.** Entfernen Sie Arten, die niemand nutzt, und führen Sie nahezu doppelte zusammen. Ein kürzerer Katalog ist leichter zu nutzen.

## Fragen für die Diskussion im Team

**Welche zehn Anfragen erhalten wir am häufigsten, und wie lange dauert jede?**
Nutzen Sie reale Daten. Rechnen Sie mit Überraschungen: Eine kleine Zahl von Arten macht meist den Großteil des Volumens aus. Fragen Sie, welche langsam sind und warum. Wählen Sie anschließend eine, die wir zuerst vereinfachen.

**Welche Genehmigungen verlangen wir, und welches Risiko adressiert jede?**
Gehen Sie die Genehmigungsschritte durch. Rechnen Sie mit einigen, die niemand erklären kann. Fragen Sie, wer im letzten Jahr eine Anfrage abgelehnt oder verändert hat. Erproben Sie anschließend den Wegfall einer Genehmigung, mit Zustimmung des Risikoverantwortlichen.

**Was müssen Nutzer wissen, um eine Anfrage zu stellen, und was finden sie verwirrend?**
Fragen Sie Nutzer und neue Mitarbeitende. Rechnen Sie mit Verwirrung über Namen, Formulare und wen man fragt. Schreiben Sie anschließend ein Formular um und testen Sie es mit fünf Nutzern.

**Welche unserer Anfrageschritte sind manuell und repetitiv und könnten per Skript abgebildet werden?**
Listen Sie die Schritte und die Zeit jedes auf. Rechnen Sie mit Kontoeinrichtung und Routinezugriff. Fragen Sie, was bei einem Skript schiefgehen könnte. Wählen Sie anschließend einen Schritt und vereinbaren Sie Schutzmaßnahmen, Protokollierung und einen manuellen Rückfallweg.

**Wie entziehen wir Zugriff, wenn Menschen wechseln oder ausscheiden?**
Das prüft die andere Hälfte des Zugriffsmanagements. Rechnen Sie mit Lücken. Fragen Sie nach der letzten Audit-Feststellung. Vereinbaren Sie anschließend eine verantwortliche Person und einen Auslöser für den Entzug.

**Wie könnte KI Nutzern helfen, Anfragen zu finden und auszufüllen, und was muss bei einer Person bleiben?**
KI kann die richtige Anfrage empfehlen und Angaben vorbefüllen. Sie kann auch falsch wählen oder durch Vorschläge zu viel Zugriff gewähren. Fragen Sie, wo eine Person genehmigen muss. Wählen Sie anschließend eine Erprobung, die auf risikoarme Anfragen mit Prüfung begrenzt ist.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung der Zentrale eines großen Einzelhändlers bearbeitet rund 2.500 Anfragen im Monat. Mitarbeitende beklagen, Anfragen verschwänden „in einem schwarzen Loch“. Der Service-Manager wertet sechs Monate an Daten aus und stellt fest, dass fünf Anfragearten 60 Prozent des Volumens ausmachen: Einrichtung neuer Mitarbeitender, Zugriff auf gemeinsame Ordner, Softwareinstallation, Bestellung von Mobiltelefonen und Passwort-Rücksetzungen. Die durchschnittliche Zeit zur Erfüllung einer Anfrage nach einem gemeinsamen Ordner beträgt vier Tage, davon drei im Warten auf die Genehmigung eines Ordnerverantwortlichen, der oft nicht reagiert.

Der Manager nimmt mit den Verantwortlichen drei Änderungen vor. Bei gemeinsamen Ordnern zeigt das Formular nun den Namen der verantwortlichen Person, die verantwortliche Person genehmigt über einen E-Mail-Link mit einer Erinnerung nach einem Tag; bei Ordnern mit geringer Sensibilität genehmigt nur die Führungskraft der anfragenden Person. Für neue Mitarbeitende ersetzt eine einzelne Reise vier getrennte Anfragen, vom Personalwesen verantwortet, mit Aufgaben von IT, Gebäudemanagement und Gehaltsabrechnung. Für Softwareinstallation wird ein Katalog vorab genehmigter Anwendungen veröffentlicht, mit automatischer Installation für diese und Genehmigung nur für andere.

Nach zwei Monaten dauert die durchschnittliche Anfrage nach einem gemeinsamen Ordner einen Tag, und die Reise für neue Mitarbeitende senkt die Meldungen fehlender Ausstattung am ersten Tag. Der Service-Manager zieht eine Stichprobe von 50 automatisierten Installationen und findet drei, bei denen eine ältere Version installiert wurde, weil ein Paket veraltet war.

Was sich ändert: Mitarbeitende erhalten, was sie anfragen, schneller, und der Desk bekommt weniger Kontakte der Art „Wo ist meine Anfrage?“. Was schwierig bleibt: Die Verantwortlichen sensibler Ordner brauchen weiter mehrere Tage für eine Antwort, und die Organisation hat nicht geklärt, wer etwa ein Drittel der Ordner verantwortet; das Zugriffs-Audit findet Nutzer, die Zugriff aus früheren Rollen behalten; und die Reise für neue Mitarbeitende hängt davon ab, dass das Personalwesen Startdaten rechtzeitig einträgt. Der Manager bringt die Ordner-Verantwortung und die Zugriffsüberprüfungen ins Sicherheitsteam.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Liefern Sie die Informationen, die zur Erfüllung von Anfragen an Ihre Services nötig sind, etwa Zugriffsmodelle und Standardkonfigurationen. Halten Sie Self-Service-Oberflächen und Automatisierung ordentlich und bieten Sie an, eigene Routineanfragen zu erfüllen, wo es sicher ist.

### Service- und Betriebsteams

Verantworten Sie die Anfragemodelle und halten Sie sie kurz und aktuell. Automatisieren Sie wiederholte Schritte mit Schutzmaßnahmen und beobachten Sie Verzögerungen und zurückgegebene Anfragen. Bringen Sie Nachfragedaten zu denen, die die Services verantworten.

### Führung und Governance

Verlangen Sie Belege dafür, wie lange Anfragen dauern und wo sie warten. Unterstützen Sie den Wegfall von Genehmigungen, die keine Sicherheit schaffen. Geben Sie Verantwortlichen die Befugnis, Modelle zu ändern, und finanzieren Sie Automatisierung mit angemessenen Kontrollen.

### Kunden und Nutzer

Sie sollten leicht finden, was Sie brauchen, den Status sehen und es erhalten, wenn es versprochen wurde. Sagen Sie dem Anbieter, wenn ein Formular verwirrend ist oder eine Genehmigung sinnlos erscheint. Geben Sie zurück, was Sie nicht mehr brauchen, einschließlich Zugriff.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Behandeln Sie jedes Anfragemodell als kleines Produkt und verbessern Sie es mit Nutzern: ein Formular vereinfachen, testen, anpassen. Überprüfen Sie die Nachfrage regelmäßig mit den Beteiligten. Vorsicht: Ständiges Feilen an Formularen verwirrt Nutzer; kündigen Sie Änderungen an und halten Sie eine kurze Liste.

### KI

KI kann Nutzern helfen, die richtige Anfrage zu finden, Formulare aus einer Beschreibung vorzubefüllen, Anfragen für Genehmigende zusammenzufassen und Erfüllungsnotizen zu entwerfen, wobei eine Person alles genehmigt, was Zugriff gewährt oder Geld ausgibt. Benennen Sie eine verantwortliche Person. Vorsicht: Ein Assistent, der „zur Sicherheit“ breiten Zugriff vorschlägt, verletzt das Prinzip geringster Rechte; schränken Sie seine Auswahl ein. Siehe Thema 5.3 — KI-Service-Desk und virtuelle Agenten.

### Automatisierung

Automatisieren Sie Routineerfüllung, etwa Kontoanlage, Softwareinstallation und Gruppenmitgliedschaft, mit Prüfungen, Protokollen und einem manuellen Rückfallweg. Vorsicht: Eine automatische Zugriffsvergabe ohne Verifizierung ist ein Sicherheitsloch; sehen Sie Identitätsprüfungen vor und prüfen Sie eine Stichprobe. Siehe Thema 6.5 — Self-Service und automatisierte Bereitstellung.

### Analytik

Betrachten Sie Nachfrage nach Art, Zeit bis zur Erfüllung, Wartezeit auf Genehmigung, zurückgegebene oder abgebrochene Anfragen und Nutzerfeedback. Vorsicht: Die durchschnittliche Zeit verbirgt lange Verzögerungen und lässt sich durch Schließen und Wiedereröffnen manipulieren; betrachten Sie Verteilungen und Stichproben. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Unklare Anfragenamen.** Nutzer wählen die falsche. Benennen Sie in den Worten der Nutzer um und testen Sie.
- **Lange Formulare.** Nutzer brechen ab oder raten. Fragen Sie nur, was nötig ist.
- **Genehmigungen aus Gewohnheit.** Verzögerung ohne Sicherheit. Behalten Sie die mit benanntem Risiko.
- **Automatisierung ohne Prüfungen.** Falscher Zugriff oder falsche Artikel. Ergänzen Sie Verifizierung, Protokolle und Überprüfung.
- **Zugriff wird nie entzogen.** Alte Konten bleiben. Machen Sie den Entzug zu einem routinemäßigen Auslöser.
- **Kein Status für Nutzer.** Wiederholungskontakte steigen. Zeigen Sie Status und senden Sie Aktualisierungen.
- **Katalogwachstum ohne Beschneiden.** Nutzer finden nichts. Legen Sie still und führen Sie zusammen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Anfragedesign | Ad hoc per E-Mail | Einige Formulare | Anfragemodelle für häufige Arten | Modelle an Daten überprüft | Modelle laufend über Funktionen hinweg verbessert |
| Genehmigungen | Viele und manuell | Einmal überprüft | Genehmigungen an benannte Risiken gebunden | Wert der Genehmigung gemessen | Risikobasierte Genehmigungen automatisch angepasst |
| Erfüllung | Manuell | Einige Skripte | Häufige Anfragen mit Protokollen automatisiert | Qualität der Automatisierung stichprobenartig überprüft | Durchgängige Automatisierung über Systeme hinweg |
| Zugriffslebenszyklus | Ad hoc erteilt | Periodische Überprüfung | Auslöser für Eintritt, Wechsel und Austritt | Zugriff anhand von Belegen überprüft | Zugriff laufend über Systeme hinweg angepasst |

## Checkliste

- [ ] Unsere zehn häufigsten Anfragearten sind in den Worten der Nutzer beschrieben.
- [ ] Jede hat ein Anfragemodell mit Eingaben, Genehmigungen, Schritten, verantwortlicher Person und Zielzeit.
- [ ] Jede Genehmigung hat ein benanntes Risiko und eine verantwortliche Person, die es versteht.
- [ ] Nutzer sehen Status und erwartete Zeit.
- [ ] Automatisierte Erfüllung hat Prüfungen, Protokolle und einen manuellen Rückfallweg.
- [ ] Zugriff wird nach dem Prinzip geringster Rechte erteilt und entzogen, wenn er nicht mehr gebraucht wird.
- [ ] Reisen für Eintritte, Wechsel und Austritte haben Verantwortliche.
- [ ] Wir überprüfen die Nachfrage und beschneiden Anfragearten regelmäßig.

## KI-Prompts

**Gruppieren Sie Anfragen nach Art.**

```text
Below are request titles and descriptions from the last month, with personal data removed: [paste sample].
Group them into up to twelve request types, count each, and list the three most common questions the requester or fulfiller had to ask. Do not suggest changes.
List what you are unsure of.
```

**Entwerfen Sie ein kurzes Anfrageformular.**

```text
Request type: [name]. What the fulfiller needs to do the work: [list]. What we already know about the requester: [list].
Draft a form with only the questions we cannot already answer, in plain language, with a one-line help text for each. Do not add questions that are not needed.
List what you are unsure of.
```

**Überprüfen Sie eine Genehmigungskette.**

```text
Request type: [name]. Current approvals: [list with who and typical wait]. Data on past outcomes: [paste, such as number approved and refused].
For each approval, state the risk it appears to address based only on what I provided, how often it changed the outcome, and a question to ask the owner. Do not recommend removal.
List what you are unsure of.
```

## KI-Skills

- [service-catalog](../../../../skills/service-catalog/SKILL.md): nutzen Sie ihn, um Anfragearten für Nutzer zu beschreiben.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Schritte, Wartezeiten und Genehmigungen zu untersuchen.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): nutzen Sie ihn, um zu klären, wer genehmigt und wer erfüllt.
- [survey-design](../../../../skills/survey-design/SKILL.md): nutzen Sie ihn, um Feedback zum Anfrageerlebnis zu gestalten.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Service-Request-Management durch den Eigentümer.
- Wikipedia, „Service catalog“ und „Self-service“: Hintergrund dazu, wie Anfragen beschrieben und gestellt werden.
- Wikipedia, „Principle of least privilege“: die Grundlage für sichere Zugriffserfüllung.
- Wikipedia, „Identity and access management“: die Disziplin hinter vielen Anfragen.

## Literaturverzeichnis

1. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
2. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
3. Workflow — Wikipedia — https://en.wikipedia.org/wiki/Workflow
4. Standardization — Wikipedia — https://en.wikipedia.org/wiki/Standardization
5. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
6. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
7. Onboarding — Wikipedia — https://en.wikipedia.org/wiki/Onboarding
8. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
9. Customer experience — Wikipedia — https://en.wikipedia.org/wiki/Customer_experience
10. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
