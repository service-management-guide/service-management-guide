# Release- und Deployment-Management

**Release- und Deployment-Management trennt zwei Entscheidungen, die früher eine waren: wann neuer Code auf Produktionssysteme gebracht wird (Deployment) und wann sein Verhalten Nutzern zur Verfügung steht (Release). Ihre Trennung, mit Feature-Flags, gestaffeltem Rollout und klaren Release-Notes, macht Veränderung sicherer und ruhiger.**

## Warum das wichtig ist

Starttage sind stressig, weil zu viel auf einmal geschieht. Neuer Code wird installiert, neue Funktionen schalten sich ein, Nutzer begegnen ihnen zum ersten Mal, und das Support-Team erfährt von ihnen durch die erste Beschwerde. Geht etwas schief, ist alles davon verknäult, und der einzige Weg zurück kann ein Rollback sein, der alles rückgängig macht.

Teams, die Deployment vom Release trennen, vermeiden das meiste davon. Code kommt leise ausgeschaltet in die Produktion, Tage bevor Nutzer ihn sehen. Ist das Team bereit, schaltet ein Flag die Funktion für eine kleine Gruppe ein, dann für mehr. Stimmt etwas nicht, schaltet das Flag sie in Sekunden wieder aus. Das Deployment, ein technischer Akt, geschieht nach dem Zeitplan der Engineers. Das Release, ein geschäftlicher und kundenbezogener Akt, geschieht, wenn die Organisation bereit ist.

Dieses Thema erklärt die beiden Ideen, die Techniken, die sie stützen, und die Praktiken, die Nutzer, Support-Mitarbeitende und Auditoren informiert halten. Es baut auf Continuous Delivery (Thema 2.2 — Continuous Delivery) und Change Enablement (Thema 3.4 — Change Enablement) auf und verbindet sich mit Konfigurationsmanagement (Thema 4.4 — Konfigurationsmanagement) und Wissensmanagement (Thema 3.9 — Wissensmanagement).

## Kernkonzepte

**Deployment.** Der Vorgang, Software, Konfiguration oder andere Komponenten in eine Umgebung zu bringen, etwa Test oder Produktion. Der Wikipedia-Artikel zu Software deployment beschreibt die beteiligten Aktivitäten. Deployment ist ein technischer Vorgang, der etwas dorthin bringt, wo es laufen kann.

**Release.** Einen Service, eine Funktion oder eine Version zur Nutzung verfügbar machen. Ein Release kann zum selben Zeitpunkt wie ein Deployment erfolgen oder später. ITIL 4 beschreibt „Release-Management“ als die Praktik, neue und geänderte Services und Funktionen zur Nutzung verfügbar zu machen, und „Deployment-Management“ als das Verschieben von Komponenten in Live-Umgebungen.

**Warum trennen.** Das Risiko beim Deployment betrifft, ob der Code läuft und sich richtig verhält. Das Risiko beim Release betrifft, ob Nutzer, Support und Geschäft bereit sind. Beides zu unterschiedlichen Zeiten zu tun, erlaubt es, jedes Risiko mit den richtigen Menschen und Werkzeugen zu steuern.

**Feature-Flags.** Auch Feature-Toggles genannt, sind sie Schalter im Code oder in einem Steuerungssystem, die eine Funktion zur Laufzeit ein- oder ausschalten, ohne neues Deployment. Wikipedia beschreibt Feature toggles und ihre Verwendung. Flags können je Nutzer, je Gruppe, je Prozentsatz des Verkehrs oder global gelten. Sie brauchen Sorgfalt: Alte Flags häufen sich an und werden zu versteckter Komplexität.

**Gestaffelter Rollout.** Zuerst an eine kleine Gruppe ausliefern und schrittweise ausweiten. Varianten sind interne Nutzer zuerst, ein kleiner Prozentsatz des Verkehrs, eine einzelne Region oder ein Pilotkunde. Jede Stufe gibt Feedback, bevor mehr Menschen betroffen sind.

**Blue-Green- und Rolling-Deployment.** Bei einem Blue-Green-Deployment gibt es zwei Produktionsumgebungen; eine bedient Nutzer, während die andere die neue Version erhält, und der Verkehr wird umgeschaltet, wenn alles bereit ist, mit schnellem Zurückschalten, falls nötig. Bei einem Rolling-Deployment werden Instanzen wenige auf einmal aktualisiert. Wikipedia beschreibt beide. Jedes hat Abwägungen bei Kosten, Komplexität und Umgang mit Daten.

**Release-Bereitschaft.** Eine kurze Reihe von Fragen, die vor dem Release beantwortet werden: Bestehen die Tests; deckt das Monitoring das neue Verhalten ab; wissen Support-Mitarbeitende, was sich geändert hat und wie sie helfen; sind Dokumentation und Wissensartikel bereit; gibt es einen Rollback-Plan; und hat das Geschäft dem Termin zugestimmt. Halten Sie sie kurz und an reales Risiko gebunden.

**Release-Notes.** Eine Beschreibung dessen, was sich geändert hat, geschrieben für die Menschen, die es wissen müssen. Verschiedene Zielgruppen brauchen verschiedene Notizen: Nutzer wollen wissen, was neu oder anders ist; Support-Mitarbeitende, was sie erwarten müssen; der Betrieb, was sich technisch geändert hat. Die Wikipedia-Artikel zu Release notes und Changelogs beschreiben gängige Formen.

**Versionierung.** Ein Schema zur Benennung von Versionen, damit Menschen darüber sprechen können. Semantische Versionierung, ein beliebtes Schema, auf Wikipedia unter Software versioning beschrieben, nutzt Haupt-, Neben- und Patch-Nummern, um die Art der Änderung zu signalisieren. Wählen Sie ein Schema und wenden Sie es konsistent an.

**Datenänderungen.** Änderungen an Datenbankstruktur und Daten sind schwerer umkehrbar als Codeänderungen. Muster wie abwärtskompatible Änderungen, den parallelen Betrieb alter und neuer Strukturen und die Migration in kleinen Schritten verringern das Risiko. Wikipedia beschreibt Schema migration.

**Hotfixes und Patches.** Dringende Korrekturen außerhalb des normalen Zyklus, meist um einen schweren Fehler oder eine Schwachstelle zu beheben. Sie brauchen einen beschleunigten Weg mit derselben Disziplin: testen, prüfen, über die Pipeline ausrollen und aufzeichnen. Siehe Thema 3.4 — Change Enablement.

**Umgebungen.** Test-, Staging- und Produktionsumgebungen, jede mit einem Zweck. Je näher Testumgebungen der Produktion kommen, desto verlässlicher sind die Tests. Der Wikipedia-Artikel zu Deployment environment beschreibt gängige Anordnungen.

**Software-Lieferkette.** Releases enthalten Komponenten von Dritten, etwa Bibliotheken und Container-Images. Eine Software-Stückliste (Software Bill of Materials) listet sie auf, was bei der Reaktion auf Schwachstellen hilft. Siehe Thema 4.2 — Software-Asset-Management.

**Wie die Blickwinkel passen.** Release-Praxis ist der agile Blickwinkel am Berührungspunkt mit Nutzern: kleine Releases mit Feedback. KI kann Release-Notes entwerfen und Änderungen zusammenfassen, unter Prüfung. Automatisierung betreibt die Pipeline und den Rollout. Analytik zeigt, wie sich ein Release verhält.

## Bewährte Praktiken

1. **Deployen Sie klein und oft.** Bringen Sie Änderungen in kleinen Stücken in die Produktion, wo sinnvoll hinter Flags. Häufiges Deployment macht jedes risikoarm und zur Routine.
2. **Releasen Sie mit Absicht.** Entscheiden Sie mit dem Geschäft, wann Nutzer eine Funktion sehen sollen, und steuern Sie das mit einem Flag oder gestaffeltem Rollout. Lassen Sie den Deployment-Zeitplan das Release nicht diktieren.
3. **Rollen Sie in Stufen aus.** Beginnen Sie mit einer kleinen, informierten Gruppe, beobachten Sie Indikatoren und weiten Sie aus. Legen Sie im Voraus fest, was Sie betrachten und was Sie zum Anhalten bringen würde.
4. **Halten Sie Flags ordentlich.** Erfassen Sie Zweck, verantwortliche Person und Entfernungsdatum jedes Flags. Entfernen Sie Flags nach dem Rollout. Testen Sie beide Zustände, solange ein Flag lebt.
5. **Machen Sie den Weg zurück schnell.** Wissen Sie, wie man ein Flag ausschaltet, zurückrollt oder umschaltet, und proben Sie es. Planen Sie bei Datenänderungen vorwärtskompatible Schritte.
6. **Bereiten Sie den Support vor dem Release vor.** Geben Sie dem Service Desk Release-Notes, eine kurze Anleitung und bekannte Probleme, bevor Nutzer eine Änderung sehen. Fragen Sie, was er braucht.
7. **Schreiben Sie Release-Notes für ihre Lesenden.** Sagen Sie, was sich geändert hat, in den Begriffen der Nutzer, was zu erwarten ist und wo man Hilfe bekommt. Halten Sie technische Einzelheiten in einer getrennten Notiz.
8. **Prüfen Sie die Bereitschaft knapp.** Nutzen Sie eine kurze, konsistente Checkliste für wesentliche Releases. Lassen Sie sie bei Routine-Releases weg, die die Pipeline abdeckt.
9. **Beobachten Sie das Release.** Überwachen Sie Fehlerraten, Performance und Nutzerindikatoren während und nach dem Rollout und bestimmen Sie jemanden, der zusieht. Halten Sie fest, was Sie gesehen haben.
10. **Erfassen Sie, was ausgeliefert wurde.** Führen Sie eine Aufzeichnung von Versionen, Daten und Flag-Zuständen, die bei Incidents und Audits hilft. Erzeugen Sie sie, wo möglich, aus der Pipeline.

## Fragen für die Diskussion im Team

**Was ist in unserer Organisation der Unterschied zwischen Deployen und Releasen, und wer entscheidet jeweils?**
In vielen Teams sind beide dasselbe Ereignis. Fragen Sie, wer entscheidet, Code in die Produktion zu bringen, und wer entscheidet, wann Nutzer ihn sehen. Rechnen Sie mit verschwommenen Antworten. Wählen Sie anschließend eine Funktion, die wir trennen.

**Wie schnell könnten wir eine neue Funktion abschalten, wenn sie Schaden anrichtet?**
Testen Sie die Antwort. Manche Teams können ein Flag in Sekunden ausschalten; andere brauchen ein neues Deployment und eine Genehmigung. Fragen Sie nach dem letzten Mal. Wählen Sie anschließend eine riskante Funktion und planen Sie einen schnellen Ausschalter.

**Was weiß unser Support-Team über ein Release, bevor Nutzer es sehen?**
Fragen Sie den Service Desk. Rechnen Sie mit „nichts bis zum ersten Anruf“. Vereinbaren Sie anschließend ein Standardpaket an Informationen und einen Zeitpunkt, etwa 48 Stunden vorher.

**Welche Feature-Flags haben wir, und welche sollten weg sein?**
Eine Liste der Flags zeigt oft viele, an die sich niemand erinnert. Fragen Sie, wer jedes verantwortet. Planen Sie anschließend die Entfernung der ältesten und ergänzen Sie ein Feld für die verantwortliche Person.

**Wie liefern wir einen Change aus, der die Datenbank betrifft, und was geschieht, wenn wir zurück müssen?**
Datenänderungen verursachen die schlimmsten Überraschungen. Bitten Sie um die letzte Migration und ihren Rollback-Plan. Vereinbaren Sie anschließend ein Muster, etwa abwärtskompatible Änderungen in zwei Schritten.

**Wo könnte KI bei Release-Notes oder Bereitschaft helfen, und was muss eine Person verifizieren?**
KI kann Notizen aus Commit-Nachrichten und Tickets entwerfen. Sie kann falsch darstellen, was sich geändert hat. Fragen Sie, wer den Entwurf liest und mit dem Change vergleicht. Erproben Sie anschließend KI-Entwürfe für interne Notizen, wobei eine Person jeden genehmigt.

## In der Praxis: ein Beispiel aus dem Service-Management

Der Online-Katalog einer Nationalbibliothek wird von Forschenden auf der ganzen Welt genutzt. Das Team liefert eine neu gestaltete Suchseite aus. Früher wäre eine solche Änderung an einem Dienstagabend mit einer kurzen Ankündigung live gegangen. Diesmal bittet die Service-Verantwortliche um ein gestaffeltes Release.

Das Team deployt die neue Seite eine Woche früher ausgeschaltet in die Produktion. Dann aktiviert es sie für interne Mitarbeitende und am nächsten Tag für 5 Prozent der Besucher, zufällig ausgewählt. Der Release-Verantwortliche beobachtet Erfolgsquoten der Suche und Fehlerzahlen, und der Service Desk erhält zwei Tage vorher eine einseitige Anleitung und eine kurze Liste bekannter Probleme. Am dritten Tag meldet ein Forscher aus der Pilotgruppe, dass Suchen mit bestimmten nicht englischen Zeichen scheitern. Das Team schaltet das Flag binnen einer Minute für alle Nutzer aus, behebt das Problem am nächsten Morgen und startet den Rollout erneut bei 5 Prozent. Zwei Wochen später steht die neue Seite allen zur Verfügung, und das Flag ist zur Entfernung eingeplant.

Was sich ändert: Der Fehler betraf einen Tag lang eine Handvoll Nutzer, und der Support-Desk war auf Fragen vorbereitet. Was schwierig bleibt: Das Flag-System liegt in einem separaten Werkzeug, dessen Zugriff nicht streng kontrolliert wird, weshalb das Team eine Überprüfung beantragt hat; die Release-Notes wurden von den Entwickelnden geschrieben, und die Forschenden fanden sie verwirrend; und die doppelte Pflege der alten und neuen Suchseite kostete etwa eine Woche Aufwand. Die Verantwortliche ergänzt im Schritt der Release-Notes eine redaktionelle Prüfung aus Nutzersicht.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Entwerfen Sie für getrenntes Deployment und Release: Nutzen Sie Flags, machen Sie Datenänderungen kompatibel und planen Sie den Weg zurück. Beobachten Sie Ihre eigenen Releases und schreiben Sie Notizen, die Nutzer und Support verstehen können.

### Service- und Betriebsteams

Helfen Sie, Bereitschaft, Monitoring und Rollback zu definieren. Bitten Sie früh um Release-Informationen und sagen Sie den Entwickelnden, was Sie brauchen. Halten Sie die Aufzeichnung dessen, was in Produktion ist, korrekt.

### Führung und Governance

Entscheiden Sie den Release-Zeitpunkt mit dem Geschäft, nicht nach dem Deployment-Kalender. Finanzieren Sie Pipeline und Flag-Werkzeuge. Verlangen Sie gestaffelten Rollout für Funktionen mit großer Wirkung und vermeiden Sie Druck, an einem festen Termin unabhängig von der Bereitschaft auszuliefern.

### Kunden und Nutzer

Sie sollten von wichtigen Änderungen in Begriffen hören, die Sie verstehen, und Probleme leicht melden können. Wenn Sie am frühen Zugang teilnehmen, rechnen Sie damit, um Feedback gebeten zu werden, und sagen Sie dem Team, was Sie sehen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Kleine, häufige Releases mit realen Nutzern in frühen Stufen geben schnelles Feedback. Behandeln Sie jedes Release als Lernschritt und passen Sie das nächste an. Vorsicht: Liefern Sie keine Funktionen aus, die Nutzer nicht wollen, nur weil die Pipeline es kann; prüfen Sie den Wert mit Nutzern.

### KI

KI kann Release-Notes aus Änderungen und Tickets entwerfen, Feedback nach dem Rollout zusammenfassen und vorschlagen, was zu beobachten ist. Benennen Sie eine verantwortliche Person und lassen Sie eine Person den Entwurf vor der Veröffentlichung mit dem Change vergleichen. Vorsicht: Eine plausible, aber falsche Release-Note führt Nutzer und Support in die Irre; prüfen Sie am tatsächlichen Change. Siehe Thema 5.4 — Generative KI für Incidents, Wissen und Changes.

### Automatisierung

Automatisieren Sie Deployment, gestaffelten Rollout, Gesundheitsprüfungen, automatischen Halt bei schlechten Indikatoren und Rollback, mit Protokollen und manueller Übersteuerung. Vorsicht: Automatische Rollout-Regeln, die bei schlechten Indikatoren auslösen, können fehlzünden; testen Sie sie und halten Sie eine Person informiert. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Vergleichen Sie während des Rollouts Indikatoren zwischen der Gruppe mit Release und den anderen, etwa Fehler, Aufgabenerfolg und Beschwerden. Vorsicht: Kleine Gruppen geben verrauschte Ergebnisse, und unvorsichtiger Vergleich kann in die Irre führen; vereinbaren Sie, was Sie betrachten und wie lange Sie warten. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Release und Deployment aneinandergekoppelt.** Jeder Start ist riskant. Trennen Sie sie mit Flags und gestaffeltem Rollout.
- **Flags, die niemand verantwortet.** Der Code füllt sich mit toten Pfaden. Erfassen Sie Verantwortliche und Entfernungsdaten.
- **Kein schneller Weg zurück.** Ein schlechtes Release dauert Stunden. Proben Sie Rollback und Flag-Schalter.
- **Der Support erfährt es beim ersten Anruf.** Der Desk ist unvorbereitet. Geben Sie Notizen und eine Anleitung im Voraus.
- **Release-Notes für Entwickelnde geschrieben.** Nutzer können sie nicht lesen. Schreiben Sie für die Zielgruppe.
- **Datenänderungen nicht geplant.** Ein Rollback ist unmöglich. Nutzen Sie kompatible, kleine Schritte.
- **Nichts beobachten.** Probleme werden von Nutzern gefunden. Bestimmen Sie eine Beobachterin und setzen Sie Indikatoren.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Trennung von Deployment und Release | Dasselbe Ereignis | Einige Flags genutzt | Flags und gestaffelter Rollout für wesentliche Funktionen | Rollout-Entscheidungen auf Daten gestützt | Rollout über Services hinweg mit Leitplanken automatisiert |
| Rollback | Langsam und manuell | Dokumentiert | Geprobte schnelle Wege | Wiederherstellungszeit gemessen | Automatisch und regelmäßig getestet |
| Kommunikation | Beim Start angekündigt | Notizen für einige Releases | Notizen je Zielgruppe, Support vorab informiert | Notizen mit Lesenden getestet | Kommunikation in Pipeline und Kanäle integriert |
| Aufzeichnungen | Gedächtnis und E-Mail | Tabelle | Aus der Pipeline erzeugt | In Reviews und Audits genutzt | Über Versionen, Flags und Incidents verknüpft |

## Checkliste

- [ ] Wir trennen Deployment vom Release bei wesentlichen Changes.
- [ ] Feature-Flags haben Verantwortliche und Entfernungsdaten.
- [ ] Wir rollen in Stufen aus, mit definierten Indikatoren und Abbruchkriterien.
- [ ] Wir wissen, wie man schnell ausschaltet oder zurückrollt, und haben es geprobt.
- [ ] Der Support erhält Release-Informationen, bevor Nutzer sie erhalten.
- [ ] Release-Notes sind für ihre Lesenden geschrieben.
- [ ] Datenänderungen erfolgen in kompatiblen, umkehrbaren Schritten.
- [ ] Aufzeichnungen darüber, was ausgeliefert wurde, werden aus der Pipeline erzeugt.

## KI-Prompts

**Entwerfen Sie Release-Notes zur Prüfung.**

```text
Here are the changes in this release: [paste list of changes with ticket titles]. The audience is [users, support staff, or operations].
Draft release notes of under 200 words in plain language, grouped by what users will notice, and list items you could not describe without guessing. Do not add features or dates that are not in the list.
List what you are unsure of.
```

**Bereiten Sie eine Checkliste zur Release-Bereitschaft vor.**

```text
Our release: [describe]. Risks we know of: [list]. Our usual checks: [list].
Draft a checklist of up to ten yes/no questions to answer before release, with who answers each. Keep it short and tied to the listed risks.
List what you are unsure of.
```

**Planen Sie einen gestaffelten Rollout.**

```text
Our feature: [describe]. Our users: [groups and sizes]. Indicators we can measure: [list].
Propose three stages with the audience, what to watch, how long, and what would make us stop. Note what the indicators cannot tell us. Do not claim any stage is safe.
List what you are unsure of.
```

## KI-Skills

- [release-notes](../../../../skills/release-notes/SKILL.md): nutzen Sie ihn, um Release-Notes für jede Zielgruppe zu schreiben.
- [changelog](../../../../skills/changelog/SKILL.md): nutzen Sie ihn, um eine klare Änderungshistorie zu führen.
- [shift-left-testing](../../../../skills/shift-left-testing/SKILL.md): nutzen Sie ihn, um früher in der Pipeline zu testen.
- [runbook](../../../../skills/runbook/SKILL.md): nutzen Sie ihn, um Rollout- und Rollback-Schritte zu dokumentieren.

## Wichtige Quellen

- Jez Humble und David Farley, *Continuous Delivery* (2010): die Grundlage für Deployment-Pipelines und Release-Techniken.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktiken Release- und Deployment-Management durch den Eigentümer.
- Wikipedia, „Software deployment“ und „Feature toggle“: Überblicke über die Hauptideen.
- Wikipedia, „Release management“: Hintergrund zur Disziplin.

## Literaturverzeichnis

1. Release management — Wikipedia — https://en.wikipedia.org/wiki/Release_management
2. Software deployment — Wikipedia — https://en.wikipedia.org/wiki/Software_deployment
3. Software release life cycle — Wikipedia — https://en.wikipedia.org/wiki/Software_release_life_cycle
4. Feature toggle — Wikipedia — https://en.wikipedia.org/wiki/Feature_toggle
5. Blue–green deployment — Wikipedia — https://en.wikipedia.org/wiki/Blue%E2%80%93green_deployment
6. Release notes — Wikipedia — https://en.wikipedia.org/wiki/Release_notes
7. Changelog — Wikipedia — https://en.wikipedia.org/wiki/Changelog
8. Software versioning — Wikipedia — https://en.wikipedia.org/wiki/Software_versioning
9. Schema migration — Wikipedia — https://en.wikipedia.org/wiki/Schema_migration
10. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
11. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
