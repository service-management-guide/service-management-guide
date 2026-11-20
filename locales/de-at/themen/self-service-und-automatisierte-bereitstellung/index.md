# Self-Service und automatisierte Bereitstellung

**Self-Service lässt Menschen bekommen, was sie brauchen, ohne auf eine Person zu warten, und automatisierte Bereitstellung erledigt die Anfrage im Hintergrund. Beides funktioniert, wenn die Anfrage standardisiert ist, die Identität geprüft wird, der Zugriff dem Prinzip geringster Rechte folgt und für alles, was das System nicht bewältigen kann, ein Weg zu einer Person bleibt.**

## Warum das wichtig ist

Die meisten Anfragen, die ein Service-Team erreichen, sind Routine: ein Passwort zurücksetzen, jemanden zu einer Gruppe hinzufügen, genehmigte Software installieren, einen Besprechungsraum buchen, herausfinden, wie man sich mit dem WLAN verbindet. Eine Person, die dies von Hand erledigt, braucht je Minuten. Die anfragende Person wartet Stunden, weil die Anfrage in einer Warteschlange liegt, bis jemand frei ist, und die Person, die es tut, verbringt den Tag mit Arbeit, die wenig bringt.

Self-Service verändert beide Seiten. Die anfragende Person findet das Gewünschte in einem Portal oder Chat, füllt aus, was nötig ist, und bekommt es, oft sofort. Im Hintergrund führt die automatisierte Bereitstellung die Schritte aus: legt das Konto an, weist die Lizenz zu, benachrichtigt die Führungskraft und erfasst das Ergebnis. Wikipedia beschreibt Self-service als System, in dem Menschen sich selbst bedienen. In einem gut geführten Service verbessert es Tempo, Einheitlichkeit und Kosten und macht qualifiziertes Personal für schwierigere Arbeit frei.

Bereitstellung, die ohne eine Person läuft, läuft auch ohne das Urteil einer Person. Gewährt das System Zugriff aufgrund einer falschen Behauptung, installiert das Falsche oder versagt still, ist die Wirkung sofort und wiederholt. Die Designfragen betreffen daher ebenso Kontrolle wie Komfort: Wer fragt, darf er, was kann schiefgehen, und woran erkennen wir es? Dieses Thema beschreibt, wie man Self-Service und automatisierte Bereitstellung sicher gestaltet. Es baut auf Service-Request-Management (Thema 3.6 — Service-Request-Management), dem Katalog (Thema 3.8 — Service-Katalog-Management) und Workflow-Automatisierung (Thema 6.2 — Workflow-Automatisierung und Orchestrierung) auf und teilt Anliegen mit der Informationssicherheit (Thema 3.13 — Informationssicherheitsmanagement).

## Kernkonzepte

**Self-Service.** Mechanismen, mit denen Nutzer Aufgaben selbst erledigen, über ein Portal, eine App, einen Chat-Assistenten oder einen Kiosk. Wikipedia beschreibt Self-service und Web portals. Er umfasst Informationen finden, Anfragen stellen, den Status verfolgen und Handlungen wie das Zurücksetzen eines Passworts ausführen.

**Automatisierte Bereitstellung (Automated Fulfilment).** Die Schritte einer Anfrage per Software ausführen. Die einfachste Form ist ein Skript hinter einem Formular; die reichere Form ist ein orchestrierter Workflow über mehrere Systeme. Wikipedia beschreibt Provisioning, die Einrichtung von Nutzern, Systemen und Services. Zero-Touch-Provisioning, ebenfalls dort beschrieben, konfiguriert ein Gerät automatisch, wenn es sich erstmals verbindet.

**Vollautomatische, unterstützte und genehmigte Bereitstellung.** Manche Anfragen lassen sich ganz ohne Mensch erfüllen, etwa eine genehmigte Anwendung hinzuzufügen. Andere brauchen zuerst eine menschliche Genehmigung und laufen dann automatisch. Wieder andere brauchen einen Techniker für einen Schritt, während das System den Rest erledigt. Wählen Sie den Weg nach Risiko und Kosten. Siehe Thema 6.1 — Automatisierungsstrategie.

**Identität und Authentifizierung.** Das System muss wissen, wer fragt. Wikipedia beschreibt Identity and access management, Single sign-on und Multi-factor authentication. Starke Authentifizierung im Moment einer sensiblen Handlung, etwa einer Passwort-Rücksetzung, verhindert, dass Angreifer den Self-Service-Weg ausnutzen.

**Berechtigung und Autorisierung.** Wer was anfragen darf. Regeln können von Rolle, Abteilung, Standort oder Genehmigung der Führungskraft abhängen. Wikipedia beschreibt Role-based access control, bei der Berechtigungen Rollen folgen. Legen Sie Regeln im Katalog und im Workflow ab, damit das System, nicht die erfüllende Person, über die Zulässigkeit entscheidet. Siehe Thema 3.6 — Service-Request-Management.

**Geringste Rechte und Befristung.** Gewähren Sie nur den Zugriff, der gebraucht wird, und wo möglich nur so lange, wie er gebraucht wird. Wikipedia beschreibt das Principle of least privilege. Befristeter Zugriff, der abläuft, wenn er nicht erneuert wird, verringert die Ansammlung alter Berechtigungen. Privilegierter Zugriff, etwa Administratorrechte, verdient zusätzliche Kontrolle. Wikipedia beschreibt Privileged access management.

**Eintritte, Wechsel, Austritte.** Ereignisse in der Zeit einer Person in einer Organisation lösen viele Anfragen aus. Sie aus einer vertrauenswürdigen Quelle zu automatisieren, meist dem Datensatz des Personalwesens, liefert Konten und Zugriff beim Start, Änderungen beim Wechsel und Entzug beim Austritt. Wikipedia beschreibt Onboarding. Siehe Thema 1.9 — Enterprise Service Management.

**Standardschnittstellen.** Systeme lassen sich über Programmierschnittstellen (APIs) und Standards für die Bereitstellung von Identitäten verbinden, etwa SCIM, auf Wikipedia beschrieben. Standardschnittstellen verringern individuellen Code und machen die Bereitstellung robuster. Wo ein System keine Schnittstelle hat, braucht es eine Person oder eine brüchige Automatisierung.

**Verifizierung und Bestätigung.** Prüfen Sie nach einem Schritt, dass er funktioniert hat, und sagen Sie es der anfragenden Person. Eine Bereitstellung, die Erfolg meldet, ohne zu prüfen, ist eine Quelle stiller Fehler. Bieten Sie einen Status, den der Nutzer sehen kann.

**Ausnahmen und Übergabe.** Anfragen, die nicht passen oder scheitern, gehen mit vollem Kontext an eine Person, und der Nutzer wird informiert. Machen Sie es leicht, von jedem Punkt aus eine Person zu erreichen. Siehe Thema 5.3 — KI-Service-Desk und virtuelle Agenten.

**Missbrauch und Betrug.** Self-Service ist ein Ziel für Social Engineering, bei dem Angreifer ein System oder eine Person überreden oder täuschen, Zugriff zu gewähren. Wikipedia beschreibt Social engineering. Abwehr umfasst starke Identitätsprüfungen, Grenzen dafür, wie viel auf einmal getan werden kann, Überwachung auf ungewöhnliche Muster und zusätzliche Prüfungen bei Anfragen mit hohem Risiko.

**Erlebnis und Barrierefreiheit.** Der beste Self-Service ist für alle leicht zu finden und zu nutzen. Wikipedia beschreibt User experience, Accessibility und die Web Content Accessibility Guidelines. Nicht jeder kann oder will ein Portal nutzen, und die dort beschriebene digitale Kluft ist real. Halten Sie andere Wege offen.

**Nachvollziehbarkeit.** Erfassen Sie für jede Anfrage, wer gefragt, wer genehmigt, was getan wurde und wann. Wikipedia beschreibt Audit trails. Das stützt Untersuchungen, Zugriffsüberprüfungen und Compliance.

**Rollback und Ausgleich.** Scheitert ein Schritt, machen Sie frühere Schritte rückgängig oder markieren Sie sie zur Bereinigung. Wurde eine Anfrage fälschlich erfüllt, brauchen Sie einen Weg, sie umzukehren. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

**Kapazität nachgelagerter Systeme.** Automatisierung kann Anfragen schneller senden, als ein Zielsystem sie bewältigt. Nutzen Sie Warteschlangen und Limits und schützen Sie kleine Systeme vor Fluten.

**Wie die Blickwinkel passen.** Self-Service ist die nutzerseitige Seite des Automatisierungs-Blickwinkels. Agile Praxis legt nahe, mit den häufigsten Anfragen zu beginnen und mit Feedback zu verbessern. KI kann Nutzern helfen, die richtige Anfrage zu finden und das Formular auszufüllen, unter strengen Grenzen dafür, was sie gewähren darf. Analytik zeigt Nachfrage, Fehler und Abbrüche.

## Bewährte Praktiken

1. **Beginnen Sie mit den zehn häufigsten Anfragen.** Wählen Sie die häufigsten, standardisierten, risikoarmen und machen Sie sie ausgezeichnet, bevor Sie weitere ergänzen. Siehe Thema 3.8 — Service-Katalog-Management.
2. **Schreiben Sie Regeln zu Berechtigung und Genehmigung in das System.** Lassen Sie den Katalog wissen, wer was anfragen darf und wer genehmigen muss. Entfernen Sie Genehmigungen, die kein reales Risiko steuern.
3. **Prüfen Sie die Identität im Verhältnis zum Risiko.** Nutzen Sie starke Authentifizierung für sensible Handlungen und zusätzliche Prüfungen für riskante. Lassen Sie eine Behauptung im Chat die Verifizierung nicht ersetzen.
4. **Gewähren Sie geringste Rechte, mit Ablauf.** Geben Sie den minimalen Zugriff für eine Zeit und erneuern Sie auf Anfrage. Überprüfen Sie Zugriffe regelmäßig.
5. **Stellen Sie in kleinen, idempotenten Schritten mit Prüfungen bereit.** Verifizieren Sie jeden Schritt, bestätigen Sie gegenüber dem Nutzer und gestalten Sie so, dass eine Wiederholung keinen Schaden anrichtet. Protokollieren Sie jede Handlung.
6. **Bieten Sie Status und einen Ausweg.** Zeigen Sie den Fortschritt, senden Sie Hinweise an sinnvollen Punkten und machen Sie es leicht, eine Person zu erreichen.
7. **Gestalten Sie für den Fehler.** Entscheiden Sie, was geschieht, wenn ein Schritt scheitert: wiederholen, ausgleichen oder an eine Person übergeben. Leiten Sie Fehler in eine sichtbare Warteschlange mit verantwortlicher Person.
8. **Achten Sie auf Missbrauch.** Überwachen Sie ungewöhnliche Muster, etwa viele Rücksetzungen aus einer Quelle oder Anfragen nach ungewöhnlichem Zugriff, und ergänzen Sie Limits. Behandeln Sie das Portal als Teil Ihres Sicherheitsperimeters.
9. **Testen Sie mit realen Nutzern.** Beobachten Sie Menschen bei der Nutzung des Portals. Beheben Sie verwirrende Formulierungen und Abläufe und testen Sie Barrierefreiheit. Halten Sie andere Wege für die offen, die sie brauchen.
10. **Überprüfen und legen Sie still.** Prüfen Sie, welche automatisierten Anfragen scheitern, welche abgebrochen werden und welche in der Pflege mehr kosten, als sie sparen. Verbessern oder entfernen Sie sie.

## Fragen für die Diskussion im Team

**Welche Anfragen könnten wir heute ohne Person erfüllen, wenn wir der Identität und den Regeln vertrauten?**
Listen Sie Kandidaten auf. Rechnen Sie mit Passwort-Rücksetzungen und Standardsoftware. Fragen Sie, was uns am Vertrauen hindert. Wählen Sie anschließend eine und beheben Sie das Hindernis.

**Woher wissen wir bei jeder Art von Anfrage, dass die fragende Person ist, wer sie zu sein sagt?**
Gehen Sie die Prüfung durch. Rechnen Sie mit schwächeren Prüfungen, als Menschen annahmen. Stärken Sie anschließend eine Anfrage mit hohem Risiko.

**Was wäre das Schlimmste, das geschehen könnte, wenn eine automatisierte Anfrage falsch oder für die falsche Person liefe?**
Stellen Sie sich Zugriff auf ein sensibles System oder das Löschen von Daten vor. Rechnen Sie mit einigen unbequemen Fällen. Ergänzen Sie anschließend Genehmigung oder Limits für sie.

**Wie lange gelten Zugriffsvergaben, und wer überprüft sie?**
Bitten Sie um die Daten. Rechnen Sie mit dauerhaften Vergaben. Wählen Sie anschließend eine Art von Zugriff, der ein Ablaufdatum erhält.

**Was sieht ein Nutzer, wenn eine Anfrage auf halbem Weg scheitert, und wer erfährt es?**
Probieren Sie einen Fehler aus. Rechnen Sie mit Schweigen. Gestalten Sie anschließend eine Nachricht, eine Warteschlange und eine verantwortliche Person.

**Wer könnte unser Portal nicht nutzen, und wie bekommt er Hilfe?**
Denken Sie an Bedarfe der Barrierefreiheit, Sprache und Konnektivität. Rechnen Sie damit, dass manche Gruppen nicht bedacht wurden. Testen Sie anschließend mit einigen realen Nutzern aus diesen Gruppen.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer Regionalverwaltung bearbeitet etwa 1.800 Anfragen im Monat für 4.000 Beschäftigte. Konto-Entsperrungen und Passwort-Rücksetzungen machen 600 aus, Einrichtungen für neue Mitarbeitende 120 und Software-Installationen 300. Ein gemeinsames Postfach und eine Telefonwarteschlange nehmen die meisten auf. Beschäftigte in Bibliotheken, Bauhöfen und Pflegeheimen rufen oft an, weil sie an ihrem Standort keinen Techniker erreichen.

Der Service-Manager baut Self-Service für die drei häufigsten Anfragearten. Bei Passwort-Rücksetzungen fragt der eigene Self-Service-Ablauf des Identitätssystems nach Multi-Faktor-Authentifizierung, mit einem Rückfall auf einen Videoanruf mit einem Techniker für Beschäftigte ohne registriertes Gerät. Für Software installiert ein Katalog von 40 vorab genehmigten Anwendungen automatisch, nachdem die Führungskraft des Nutzers per E-Mail-Link genehmigt hat, mit automatischer Genehmigung für die zehn häufigsten risikoarmen Werkzeuge. Für neue Mitarbeitende legt der Datensatz des Personalsystems einen übergeordneten Fall an und löst durch die Workflow-Engine Kontoanlage, Postfach und Gruppenmitgliedschaft aus, mit einer Techniker-Aufgabe für den Laptop.

Das Team gestaltet für Kontrolle. Die Berechtigung ist kodiert: Bauhof-Personal kann keine Design-Software anfragen. Zugriff auf das Finanzsystem ist nie automatisch; er geht zur Genehmigung an das Finanzteam, mit einjährigem Ablauf. Jeder Bereitstellungsschritt prüft sein Ergebnis: Nach der Kontoanlage verifiziert der Workflow, dass eine Anmeldung möglich ist, und benachrichtigt den Nutzer. Fehler gehen mit dem angehängten Fehler in eine Techniker-Warteschlange.

Nach vier Monaten sinken die Anrufe um etwa 40 Prozent, und neue Mitarbeitende haben am ersten Tag Konten. Ein Monitor erkennt einen Schwall von Passwort-Rücksetzversuchen von einer Adresse, und das Identitätsteam blockiert sie. Was schwierig bleibt: Manche Pflegeheime haben kein verlässliches Internet, sodass Beschäftigte weiter anrufen; die automatischen Installationen scheitern auf älteren Geräten, was das Team nur über die Fehlerwarteschlange herausfand; und Führungskräfte genehmigen E-Mail-Links, ohne zu lesen, was der Manager stichprobenartig prüfte und mit weniger, klareren Genehmigungen angehen will. Der Manager ergänzt eine telefonische Option für die, die das Portal nicht nutzen können, und eine monatliche Überprüfung der Fehler.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Stellen Sie saubere APIs und Standard-Identitätsschnittstellen bereit, die die Bereitstellung nutzen kann. Liefern Sie Konfiguration und Pakete für Ihr Produkt und sagen Sie dem Team Bescheid über Änderungen, die Automatisierung brechen.

### Service- und Betriebsteams

Verantworten Sie die Anfragemodelle, die Automatisierung und die Fehlerwarteschlangen. Testen Sie die Wege, achten Sie auf Missbrauch und halten Sie manuelle Wege für Ausnahmen bereit. Nutzen Sie die Daten, um Formulare und Regeln zu verbessern.

### Führung und Governance

Verlangen Sie Belege, dass Identitätsprüfungen und Zugriffsregeln funktionieren, und Daten zu Fehlern und Abbrüchen. Finanzieren Sie Barrierefreiheit und Alternativen. Zählen Sie automatisierte Anfragen nicht als Erfolg, ohne ihre Qualität zu prüfen.

### Kunden und Nutzer

Sie sollten Routinedinge schnell bekommen, den Status sehen und eine Person erreichen können, wenn es nicht passt. Halten Sie Ihre Zugangsdaten sicher und sagen Sie dem Anbieter, was nicht funktioniert hat oder was Sie nicht nutzen konnten.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Starten Sie jeweils eine Anfrageart, beobachten Sie die reale Nutzung und verbessern Sie, bevor Sie mehr ergänzen. Beziehen Sie Nutzer in Formulare und Formulierungen ein. Vorsicht: Ein Portal mit vielen halb funktionierenden Anfragen untergräbt Vertrauen; weniger, bessere sind vorzuziehen.

### KI

KI kann Nutzern helfen, die richtige Anfrage zu finden, Formulare vorzubefüllen und Anfragen für Genehmigende zusammenzufassen. Sie darf nicht über Berechtigung entscheiden oder auf eigene Behauptungen hin Zugriff gewähren; Regeln und Identitätsprüfungen entscheiden. Vorsicht: Eine überzeugende Nachricht kann einen Assistenten lenken, halten Sie daher Befugnisse eng und verifizieren Sie außerhalb des Chats. Siehe Thema 5.3 — KI-Service-Desk und virtuelle Agenten.

### Automatisierung

Bereitstellungsautomatisierung braucht idempotente Schritte, Prüfungen, Protokolle, Limits und Rollback. Behandeln Sie jeden Bereitstellungs-Workflow als Produkt mit verantwortlicher Person. Vorsicht: Automatische Zugriffsvergabe ohne Verifizierung ist ein Sicherheitsloch; sehen Sie Identitätsprüfungen und Stichprobenkontrollen vor. Siehe Thema 6.2 — Workflow-Automatisierung und Orchestrierung.

### Analytik

Verfolgen Sie Nachfrage nach Art, Zeit bis zur Erfüllung, Anteil vollautomatisch, Fehler, Abbrüche, Wiedereröffnungen und Missbrauchssignale. Vorsicht: Automatisierungsquoten lassen sich erhöhen, indem man Problemfälle woandershin verschiebt, und kurze Bereitstellungszeiten können falsche Ergebnisse verbergen; ziehen Sie Stichproben der Ergebnisse. Siehe Thema 7.7 — Erlebnis- und Stimmungsanalyse und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Schwache Identitätsprüfungen.** Ein Angreifer übernimmt über Self-Service Konten. Stärken Sie die Authentifizierung im Verhältnis zum Risiko.
- **Automatische Vergabe ohne Regeln.** Falsche Personen erhalten Zugriff. Kodieren Sie Berechtigung und Genehmigungen.
- **Dauerhafter Zugriff.** Alte Berechtigungen häufen sich. Nutzen Sie Ablauf und Überprüfungen.
- **Stiller Fehler.** Eine Anfrage scheitert, und niemand weiß es. Verifizieren, benachrichtigen und Fehler in Warteschlangen leiten.
- **Kein Weg zu einer Person.** Nutzer sitzen fest. Bieten Sie klare Alternativen.
- **Unzugängliches Portal.** Manche Mitarbeitende sind ausgeschlossen. Testen Sie Barrierefreiheit und halten Sie andere Wege bereit.
- **Fluten kleiner Systeme.** Nachgelagerte Services fallen aus. Nutzen Sie Warteschlangen und Limits.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Self-Service | Telefon und E-Mail | Portal für einige Anfragen | Portal und Chat für häufige Anfragen mit Status | Nutzung und Abbrüche überprüft | Einheitliches Erlebnis über Funktionen und Kanäle |
| Bereitstellung | Manuell | Einige Skripte | Orchestrierte Workflows mit Prüfungen und Protokollen | Fehler und Qualität gemessen | Durchgängige Automatisierung mit Aufsicht nach Risiko |
| Identität und Zugriff | Ad hoc | Grundlegende Prüfungen | Starke Authentifizierung, Rollenregeln und Ablauf | Missbrauch überwacht und Zugriff überprüft | Zugriff laufend über Systeme hinweg angepasst |
| Inklusion | Nicht bedacht | Bewusstsein | Barrierefreiheit getestet, Alternativen erhalten | Ergebnisse nach Gruppen gemessen | Erlebnis für alle Nutzer gestaltet |

## Checkliste

- [ ] Wir haben die häufigsten Anfragen für Self-Service gewählt und in den Worten der Nutzer beschrieben.
- [ ] Regeln zu Berechtigung und Genehmigung sind im System kodiert.
- [ ] Identitätsprüfungen entsprechen dem Risiko jeder Anfrage.
- [ ] Zugriff folgt geringsten Rechten, wo möglich mit Ablauf.
- [ ] Jeder Bereitstellungsschritt ist verifiziert, protokolliert und wiederholungssicher.
- [ ] Fehler gehen in eine Warteschlange mit verantwortlicher Person, und Nutzer werden informiert.
- [ ] Wir überwachen auf Missbrauch.
- [ ] Barrierefreiheit ist getestet, und alternative Wege existieren.

## KI-Prompts

**Bewerten Sie das Risiko je Anfrageart.**

```text
Here is a list of our request types with what each grants or changes: [paste].
For each, describe the worst plausible outcome if fulfilled in error or for the wrong person, and suggest a question about the level of identity check and approval needed. Do not rank by importance or decide.
List what you are unsure of.
```

**Testen Sie einen Self-Service-Ablauf.**

```text
Here is a description of how a self-service request works, step by step: [paste].
Write 20 test cases: normal, edge, failure at each step, an impostor attempt, and a request outside eligibility. For each, state the expected result. Do not use real personal data.
List what you are unsure of.
```

**Analysieren Sie Fehler.**

```text
Here is a list of failed automated requests with type, step that failed, error text, and date, identifiers removed: [paste].
Group failures by type and step, count each, and list questions to investigate. Do not infer causes beyond the data.
List what you are unsure of.
```

## KI-Skills

- [service-catalog](../../../../skills/service-catalog/SKILL.md): nutzen Sie ihn, um Anfragen und Berechtigung für das Portal zu beschreiben.
- [workflow-analysis](../../../../skills/workflow-analysis/SKILL.md): nutzen Sie ihn, um Bereitstellungsschritte und Fehlerstellen zu analysieren.
- [security-testing](../../../../skills/security-testing/SKILL.md): nutzen Sie ihn, um Self-Service-Wege auf Missbrauch zu testen.
- [raci-matrix](../../../../skills/raci-matrix/SKILL.md): nutzen Sie ihn, um zu klären, wer genehmigt und wer jede Bereitstellung verantwortet.
- [user-story](../../../../skills/user-story/SKILL.md): nutzen Sie ihn, um Nutzerbedürfnisse beim Gestalten von Anfragen auszudrücken.

## Wichtige Quellen

- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Service-Request-Management durch den Eigentümer.
- NIST, Digital Identity Guidelines (SP 800-63): Hinweise zu Identitätsnachweis und Authentifizierung.
- W3C, Web Content Accessibility Guidelines (WCAG): der internationale Standard für barrierefreie Webinhalte.
- Wikipedia, „Self-service“ und „Identity and access management“: Überblicke über die Ideen.

## Literaturverzeichnis

1. Self-service — Wikipedia — https://en.wikipedia.org/wiki/Self-service
2. Provisioning — Wikipedia — https://en.wikipedia.org/wiki/Provisioning
3. Zero-touch provisioning — Wikipedia — https://en.wikipedia.org/wiki/Zero-touch_provisioning
4. Identity and access management — Wikipedia — https://en.wikipedia.org/wiki/Identity_and_access_management
5. Multi-factor authentication — Wikipedia — https://en.wikipedia.org/wiki/Multi-factor_authentication
6. Role-based access control — Wikipedia — https://en.wikipedia.org/wiki/Role-based_access_control
7. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
8. Privileged access management — Wikipedia — https://en.wikipedia.org/wiki/Privileged_access_management
9. Social engineering (security) — Wikipedia — https://en.wikipedia.org/wiki/Social_engineering_(security)
10. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
11. System for Cross-domain Identity Management — Wikipedia — https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management
12. Audit trail — Wikipedia — https://en.wikipedia.org/wiki/Audit_trail
