# Informationssicherheitsmanagement

**Informationssicherheitsmanagement schützt Vertraulichkeit, Integrität und Verfügbarkeit von Informationen und Services. Für Service-Teams funktioniert es am besten, wenn Sicherheitsprüfungen in die Delivery-Pipeline und den Alltagsbetrieb eingebaut sind, Sicherheitsvorfälle wie andere Incidents mit zusätzlicher Sorgfalt behandelt werden und Risikoentscheidungen verantwortet und festgehalten werden.**

## Warum das wichtig ist

Jeder Service hält Informationen, die jemand haben will: Kundendaten, Zugangsdaten, geistiges Eigentum, Finanzdaten. Jeder Service hängt außerdem davon ab, dass Informationen korrekt und verfügbar sind, wenn man sie braucht. Sicherheitsversagen trifft all das. Eine Datenpanne legt Kunden offen, ein manipulierter Datensatz führt Entscheidungen in die Irre, und ein Ransomware-Angriff stoppt die Arbeit.

Sicherheit kann sich wie eine getrennte Welt aus Spezialisten, Regeln und Audits anfühlen, die am Ende eines Projekts ankommt, um Nein zu sagen. Dieses Modell scheitert in der kontinuierlichen Lieferung, wo Änderungen häufig sind und späte Prüfungen zu langsam. Die Alternative, oft DevSecOps genannt, baut Sicherheit in Entwurf, Code, Pipeline und Betrieb ein, sodass sie Teil jeder Änderung und jeder Schicht ist. Sicherheitsspezialisten werden zu Partnern, die Leitplanken setzen und Teams helfen, sie einzuhalten, nicht zu Torwächtern, die hinterher prüfen.

Das Service-Management hat ein eigenes Interesse. Sicherheitsvorfälle kommen über den Service Desk herein. Zugriffsanfragen und Changes sind Sicherheitsentscheidungen. Lieferanten gehören zur Angriffsfläche. Wissen und Monitoring unterstützen die Erkennung. Dieses Thema erklärt die Hauptideen und wie man mit einer Sicherheitsfunktion zusammenarbeitet, ohne ein Sicherheitslehrbuch sein zu wollen. Es steht in Beziehung zu Service-Request-Management (Thema 3.6 — Service-Request-Management), Lieferantenmanagement (Thema 3.14 — Lieferantenmanagement) und Governance (Thema 8.1 — Governance, Risiko und Compliance). Es gibt keine rechtliche oder Compliance-Beratung; prüfen Sie die Regeln, die für Sie gelten.

## Kernkonzepte

**Das CIA-Dreieck.** Informationssicherheit zielt darauf, drei Eigenschaften zu schützen: Vertraulichkeit (nur berechtigte Personen können Informationen sehen), Integrität (Informationen sind korrekt und nicht manipuliert) und Verfügbarkeit (Informationen und Services können genutzt werden, wenn sie gebraucht werden). Der Wikipedia-Artikel zu Information security beschreibt das Dreieck. Manche Frameworks ergänzen andere, etwa Authentizität und Nachvollziehbarkeit.

**Risikobasierter Ansatz.** Sicherheitsaufwand ist begrenzt, daher sollte er dorthin gehen, wo das Risiko am höchsten ist. Risiko verbindet die Wahrscheinlichkeit eines schädlichen Ereignisses mit seiner Auswirkung. Wikipedia beschreibt Risk management allgemein. Ein Risikoregister erfasst Risiken, Verantwortliche und Entscheidungen: verringern, akzeptieren, übertragen oder vermeiden.

**Informationssicherheits-Managementsystem (ISMS).** Eine Gruppe von Richtlinien, Prozessen und Kontrollen zur Steuerung von Informationssicherheitsrisiken, mit regelmäßiger Überprüfung. ISO/IEC 27001 legt Anforderungen an ein ISMS fest und ist Grundlage für Zertifizierung. Wikipedia beschreibt sie. Siehe Thema 1.8 — Frameworks und Standards des Service-Managements. Das NIST Cybersecurity Framework einer US-Behörde, auch anderswo weit verbreitet, ordnet Aktivitäten in Funktionen wie Identifizieren, Schützen, Erkennen, Reagieren und Wiederherstellen.

**Kontrollen.** Maßnahmen, die Risiko verringern: technisch (Verschlüsselung, Zugriffskontrollen, Patchen), organisatorisch (Richtlinien, Schulung, Funktionstrennung) und physisch (Schlösser, Besucherprotokolle). Kontrollen sollten dem Risiko angemessen und getestet sein.

**Verteidigung in der Tiefe (Defense in Depth).** Mehrere Schichten von Kontrollen nutzen, damit das Versagen einer nicht das Versagen aller bedeutet. Wikipedia beschreibt Defense in depth in der Informatik. Ein Angreifer, der eine Barriere überwindet, trifft auf die nächste.

**Geringste Rechte und Zugriff.** Menschen und Systeme sollten nur den Zugriff haben, den sie brauchen, und nur so lange, wie sie ihn brauchen. Wikipedia beschreibt das Principle of least privilege. Starke Authentifizierung, einschließlich Multi-Faktor-Authentifizierung, verringert die Chance, dass gestohlene Passwörter Zugriff geben. Siehe Thema 3.6 — Service-Request-Management.

**Zero Trust.** Ein Ansatz, bei dem keinem Nutzer und Gerät aufgrund seines Netzwerkstandorts standardmäßig vertraut wird; jede Anfrage wird verifiziert. Wikipedia beschreibt Zero trust architecture. Er verlagert die Aufmerksamkeit vom Netzwerkrand auf Identität, Gerätezustand und Daten.

**Schwachstellen- und Patch-Management.** Schwächen in Software und Systemen finden und rechtzeitig beheben. Die Wikipedia-Artikel zu Vulnerability management und Common Vulnerabilities and Exposures (CVE) beschreiben, wie Schwachstellen identifiziert und verfolgt werden. Priorisieren Sie nach Exposition und Auswirkung, nicht nur nach Schweregradwerten. Siehe Thema 4.2 — Software-Asset-Management.

**Software-Lieferkette.** Moderne Software enthält viele Komponenten anderer: Bibliotheken, Container, Build-Werkzeuge. Eine Schwäche in einer betrifft alle, die sie nutzen. Wikipedia beschreibt die Software supply chain. Zu wissen, was in Ihrer Software steckt, durch eine Software-Stückliste, hilft Ihnen zu reagieren, wenn eine Schwachstelle bekannt gegeben wird.

**Bedrohungsmodellierung (Threat Modeling).** Eine strukturierte Art, früh im Entwurf darüber nachzudenken, wie ein System angegriffen werden könnte, damit Gegenmaßnahmen geplant werden können. Wikipedia beschreibt Threat models. Sie ist beim Entwurf billig und später teuer.

**DevSecOps und die Pipeline.** Sicherheitsprüfungen in die Delivery-Pipeline einbauen: statische Analyse von Code, Abhängigkeitsscans, Prüfungen auf Geheimnisse im Code, Container-Scans und Richtlinienprüfungen. Wikipedia beschreibt Static application security testing. Die Prüfungen laufen bei jeder Änderung und erzeugen Belege. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

**Erkennung und Monitoring.** Sicherheitsmonitoring sucht nach Anzeichen eines Angriffs, etwa ungewöhnlichen Anmeldungen oder Datenbewegungen. Systeme für Security Information and Event Management (SIEM) sammeln und analysieren Logs aus vielen Quellen. Wikipedia beschreibt SIEM. Sie funktionieren nur, wenn Logs vollständig und Alarme abgestimmt sind. Siehe Thema 3.10 — Monitoring und Event-Management.

**Sicherheitsvorfälle.** Ein Ereignis, das Informationen oder Systeme kompromittiert oder zu kompromittieren droht. Wikipedia beschreibt Computer security incident management. Ein Sicherheitsvorfall braucht die Incident-Rollen aus Thema 3.2 — Incident-Management, plus Zusätze: Beweise sichern, den Angriff eindämmen und über die Benachrichtigung von Kunden und Aufsichtsbehörden entscheiden, die in manchen Rechtsordnungen gesetzlich verlangt sein kann. Beziehen Sie Rechts- und Sicherheitsberatung früh ein.

**Menschen.** Viele Angriffe beginnen bei einem Menschen: Phishing-Mails, Social Engineering, schwache Gewohnheiten. Wikipedia beschreibt Phishing und Security awareness. Schulung hilft am meisten, wenn sie kurz und häufig ist und an reale Beispiele gebunden, und wenn das Melden eines Fehlers sicher und leicht ist.

**Datenschutz.** Der Schutz personenbezogener Informationen ist verwandt mit Sicherheit, aber nicht dasselbe. Gesetze wie die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union legen Pflichten für personenbezogene Daten fest. Wikipedia beschreibt Privacy by design, die Idee, Datenschutz von Anfang an in Systeme einzubauen. Holen Sie fachlichen Rat ein.

**Wie die Blickwinkel passen.** Sicherheit ist der Bereich, in dem agiles Tempo und Kontrolle am schärfsten aufeinandertreffen. Agile Praxis behandelt Sicherheitsarbeit als Teil des Backlogs und bindet Sicherheitsleute in das Team ein. KI hilft Verteidigenden und Angreifenden; sie braucht eigene Governance (siehe Thema 5.6 — KI-Governance, Risiko und Compliance). Automatisierung setzt Kontrollen konsistent durch. Analytik zeigt Exposition und Reaktionszeiten.

## Bewährte Praktiken

1. **Beginnen Sie mit einer risikobasierten Sicht.** Listen Sie die Informationen und Services auf, die am wichtigsten sind, die Bedrohungen, denen sie begegnen, und die vorhandenen Kontrollen. Konzentrieren Sie den Aufwand auf die größten Lücken.
2. **Arbeiten Sie mit der Sicherheit als Partner.** Beziehen Sie eine Sicherheitsperson in Entwurf und Planung ein. Fragen Sie, welche Leitplanken das Team beachten soll, und halten Sie sie wenige und klar.
3. **Bauen Sie Prüfungen in die Pipeline ein.** Führen Sie bei jeder Änderung Code-, Abhängigkeits-, Container- und Geheimnis-Scans durch. Beheben Sie die Ursachen wiederholter Befunde und lassen Sie eine fehlschlagende Prüfung ein Release stoppen, wo das Risiko ernst ist.
4. **Wenden Sie geringste Rechte und starke Authentifizierung an.** Gewähren Sie minimalen Zugriff, verlangen Sie Multi-Faktor-Authentifizierung, überprüfen Sie Zugriffe regelmäßig und entziehen Sie sie, wenn sie nicht mehr gebraucht werden.
5. **Führen Sie ein Inventar und patchen Sie zügig.** Wissen Sie, welche Software und Systeme Sie betreiben, verfolgen Sie Schwachstellen und priorisieren Sie nach Exposition und Auswirkung. Setzen Sie Ziele für die Zeit bis zum Patch und verfolgen Sie sie.
6. **Kennen Sie Ihre Lieferkette.** Erfassen Sie die Komponenten in Ihrer Software und die Lieferanten hinter Ihren Services. Achten Sie auf bekannt gegebene Schwachstellen und haben Sie einen Weg, betroffene Systeme schnell zu finden.
7. **Modellieren Sie Bedrohungen früh.** Verbringen Sie für neue Services und große Changes eine Stunde damit, wie ein Angreifer zu denken, und halten Sie die gewählten Gegenmaßnahmen fest.
8. **Bereiten Sie die Reaktion vor.** Schreiben Sie einen Plan für Sicherheitsvorfälle mit Rollen, Kontakten, Umgang mit Beweisen und Entscheidungspunkten. Proben Sie, einschließlich der Entscheidungen zur Benachrichtigung. Beziehen Sie Rechtsberatung ein.
9. **Machen Sie Melden sicher.** Ermutigen Sie Menschen, verdächtige Nachrichten und Fehler schnell zu melden, und reagieren Sie freundlich. Furcht vor Schuldzuweisung verbirgt Vorfälle.
10. **Halten Sie Risikoentscheidungen fest.** Wird ein Risiko akzeptiert, halten Sie fest, wer es akzeptiert hat, warum und wann es überprüft wird. Machen Sie das Register für die Verantwortlichen der Services sichtbar.

## Fragen für die Diskussion im Team

**Welches sind die wertvollsten und sensibelsten Informationen, die wir halten, und wer kann sie erreichen?**
Erstellen Sie eine kurze Liste. Rechnen Sie mit Überraschungen dazu, wer Zugriff hat und wo Kopien liegen. Wählen Sie anschließend einen Datenbestand und prüfen Sie seine Zugriffsliste.

**Welche Sicherheitsprüfungen laufen bei jeder Änderung, und welche geschehen erst am Ende?**
Vergleichen Sie die Pipeline mit der Release-Checkliste. Rechnen Sie mit späten manuellen Prüfungen. Wählen Sie anschließend eine späte Prüfung, die wir in die Pipeline verlegen.

**Wie schnell patchen wir eine schwere Schwachstelle, und wie finden wir heraus, welche Systeme betroffen sind?**
Fragen Sie nach der letzten. Rechnen Sie mit „wir haben uns abgemüht“. Vereinbaren Sie anschließend eine Zielzeit und einen Weg, betroffene Systeme aufzulisten, etwa aus einem Inventar.

**Was würden wir in der ersten Stunde einer vermuteten Datenpanne tun, und wer entscheidet über die Information von Kunden oder Aufsichtsbehörden?**
Führen Sie eine kurze Szenariodiskussion. Rechnen Sie mit Lücken bei Entscheidungsrechten. Schreiben Sie anschließend eine Seite mit Rollen und Kontakten und beziehen Sie Rechtsberatung ein.

**Wie sicher ist es für Mitarbeitende, einen Fehler zu melden, etwa einen schlechten Link angeklickt zu haben?**
Das prüft die Kultur. Fragen Sie, was der letzten Person geschah, die es tat. Vereinbaren Sie anschließend, wie Meldungen bestätigt werden und was öffentlich gesagt wird.

**Wie könnte KI unserer Sicherheitsarbeit helfen, und welche neuen Risiken bringt sie?**
KI kann Alarme zusammenfassen und Code prüfen. Sie kann auch Daten preisgeben, die hineinkopiert werden, unsicheren Code erzeugen und selbst Ziel von Angreifern sein. Fragen Sie, wer jede Nutzung verantwortet und welche Daten geteilt werden dürfen. Vereinbaren Sie anschließend eine Regel, was nicht in externe Werkzeuge kopiert werden darf.

## In der Praxis: ein Beispiel aus dem Service-Management

Das Retail-Digitalteam einer Regionalbank durchläuft vor jedem Release eine Sicherheitsprüfung, die ein zentrales Team einmal im Monat abhält. Releases stauen sich dafür. Entwickelnde sehen sie als Straßensperre; Sicherheitsmitarbeitende sehen wiederkehrende Befunde und wenig Zeit. Im letzten Quartal war eine Bibliothek mit bekannter Schwachstelle sechs Wochen in der Produktion, bevor die Prüfung sie fand.

Die Leiterin der Sicherheit und der Leiter des Engineerings vereinbaren, für ein Produkt ein anderes Modell zu erproben. Ein Security Engineer schließt sich dem Team an, an der Hälfte jeder Woche. Die Pipeline erhält Abhängigkeitsscans, statische Analyse und eine Prüfung auf Geheimnisse im Code und lässt einen Build bei kritischen Befunden fehlschlagen. Das Team führt ein einfaches Software-Inventar, das aus der Pipeline erzeugt wird. Jede wichtige Funktion bekommt beim Entwurf eine einstündige Bedrohungsmodellierung. Die monatliche Prüfung wird für dieses Produkt durch ein schlankes Stichprobenaudit ersetzt.

Binnen eines Quartals fängt die Pipeline zwei verwundbare Bibliotheken und versehentlich eingecheckte Zugangsdaten vor dem Release ab. Als eine neue, breit berichtete Schwachstelle einer Bibliothek bekannt wird, identifiziert das Inventar die drei betroffenen Services binnen einer Stunde; zwei werden am selben Tag gepatcht, und der dritte wird mit einer ausgleichenden Kontrolle eingeplant. Das Team stellt fest, dass sein Plan für Sicherheitsvorfälle eine Kontaktperson voraussetzt, die gegangen ist, und aktualisiert ihn.

Was sich ändert: Befunde kommen, wenn sie billig zu beheben sind, und die monatliche Warteschlange verschwindet für dieses Produkt. Was schwierig bleibt: Die Pipeline-Prüfungen erzeugen viele Befunde geringen Schweregrads, und Entwickelnde haben begonnen, sie zu ignorieren; das Inventar deckt Drittservices, die das Produkt aufruft, nicht ab; und die Aufsichtsbehörde der Bank verlangt Belege weiter in anderer Form, deren Erzeugung Aufwand kostet. Die Teams vereinbaren, die Schwellen abzustimmen und die Aufsichtsbehörde zu fragen, welche Pipeline-Aufzeichnungen sie akzeptiert.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Verantworten Sie Sicherheit als Teil der Qualität: Modellieren Sie Bedrohungen, nutzen Sie die Pipeline-Prüfungen, beheben Sie Befunde zügig und gehen Sie sorgfältig mit Geheimnissen um. Bitten Sie die Sicherheit um Leitplanken und sagen Sie ihr, was Sie ausbremst.

### Service- und Betriebsteams

Wenden Sie geringste Rechte an, patchen Sie rechtzeitig und achten Sie auf ungewöhnliche Aktivität. Behandeln Sie Sicherheitsvorfälle mit der Disziplin von Major Incidents und sichern Sie Beweise. Melden Sie dem Sicherheitsteam, was Sie sehen.

### Führung und Governance

Legen Sie die Risikobereitschaft fest und finanzieren Sie sowohl Vorbeugung als auch Reaktion. Verlangen Sie Belege, dass Kontrollen wirken. Schaffen Sie eine Kultur, in der das Melden von Fehlern sicher ist. Wissen Sie, wer über die Benachrichtigung von Kunden und Aufsichtsbehörden entscheidet.

### Kunden und Nutzer

Nutzen Sie starke Authentifizierung, melden Sie verdächtige Nachrichten und halten Sie Ihre eigenen Zugangsdaten sicher. Fragen Sie Anbieter, wie sie Ihre Informationen schützen und was sie Ihnen bei einer Datenpanne mitteilen werden.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Legen Sie Sicherheitsarbeit auf dasselbe Backlog wie Funktionen, binden Sie Sicherheitsleute in das Team ein und verbessern Sie nach jedem Befund und Incident in kleinen Schritten. Vorsicht: Sicherheit durch „Sprint 0“ oder eine Prüfung in letzter Minute verfehlt den Punkt; bauen Sie sie in den Arbeitsfluss ein.

### KI

KI kann helfen, Alarme zusammenzufassen, Code auf Schwächen zu prüfen und Incident-Notizen zu entwerfen, wobei eine Person für Entscheidungen verantwortlich ist. Sie bringt auch Risiken: Daten, die in externe Werkzeuge abfließen, unsicherer generierter Code und Manipulation des Modells. Setzen Sie Regeln zu Daten und prüfen Sie KI-generierte Änderungen wie jede andere. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

### Automatisierung

Automatisieren Sie Scans, das Patchen von Routinesystemen, Zugriffsüberprüfungen und Beleg-Erfassung, mit Protokollen und Kontrollen für die Automatisierung selbst. Vorsicht: Automatische Behebung mit weitreichenden Rechten ist ein Ziel; beschränken und überwachen Sie sie. Siehe Thema 6.4 — Pipelines und automatisierte Changes.

### Analytik

Verfolgen Sie Zeit bis zum Patch, Exposition nach Schweregrad, Abschluss von Zugriffsüberprüfungen, Sicherheitsbefunde je Change und Zeiten für Erkennung und Reaktion. Vorsicht: Das Zählen geschlossener Schwachstellen kann leichte Korrekturen belohnen, und Incident-Zahlen können sinken, weil die Erkennung schlecht ist; kombinieren Sie Kennzahlen und testen Sie die Erkennung. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Sicherheit am Ende.** Prüfungen blockieren Releases und finden Probleme spät. Bauen Sie Prüfungen in Pipeline und Entwurf ein.
- **Überlastung durch Alarme und Befunde.** Teams ignorieren Scanner. Stimmen Sie Schwellen ab und beheben Sie wiederholte Ursachen.
- **Zu viel Zugriff.** Konten behalten Rechte, die sie nicht mehr brauchen. Überprüfen und entziehen Sie regelmäßig.
- **Kein Inventar.** Sie können nicht sagen, was von einer neuen Schwachstelle betroffen ist. Erzeugen und pflegen Sie ein Inventar.
- **Ungetestete Incident-Pläne.** Kontakte sind veraltet. Proben und aktualisieren Sie.
- **Schuldzuweisung für gemeldete Fehler.** Vorfälle werden verborgen. Reagieren Sie freundlich und schnell.
- **Risikoakzeptanz ohne Verantwortliche.** Risiken werden standardmäßig akzeptiert. Halten Sie fest, wer akzeptiert hat und wann überprüft wird.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Risikomanagement | Informell | Wichtigste Risiken aufgelistet | Risikoregister mit Verantwortlichen und Entscheidungen | Risiken an Incidents und Tests überprüft | Risiko über Organisation und Lieferanten gesteuert |
| Pipeline-Sicherheit | Manuelle Prüfung am Ende | Einige Scans | Standardprüfungen bei jeder Änderung | Befunde und Behebungen gemessen | Richtlinien und Prüfungen angepasst und mit Aufsicht automatisiert |
| Zugriff | Ad hoc | Grundlegende Überprüfungen | Geringste Rechte und Multi-Faktor-Authentifizierung als Standard | Zugriff anhand von Belegen überprüft | Zugriff laufend über Systeme hinweg angepasst |
| Erkennung und Reaktion | Reaktiv | Grundlegendes Logging | Sicherheitsmonitoring und geprobter Incident-Plan | Zeiten für Erkennung und Reaktion gemessen | Koordinierte Reaktion über Teams und Lieferanten |

## Checkliste

- [ ] Wir kennen unsere sensibelsten Informationen und wissen, wer sie erreichen kann.
- [ ] Sicherheitsprüfungen laufen bei jeder Änderung in der Pipeline.
- [ ] Zugriff folgt geringsten Rechten, mit Multi-Faktor-Authentifizierung und regelmäßiger Überprüfung.
- [ ] Wir führen ein Software-Inventar und verfolgen Schwachstellen.
- [ ] Wir haben einen Plan für Sicherheitsvorfälle, mit Rollen, Kontakten und Rechtsberatung, und haben ihn geprobt.
- [ ] Mitarbeitende können Fehler sicher melden.
- [ ] Risikoakzeptanzen sind mit Verantwortlichen und Überprüfungsdatum festgehalten.
- [ ] Es gibt Regeln dazu, welche Daten mit KI-Werkzeugen geteilt werden dürfen.

## KI-Prompts

**Bereiten Sie eine Bedrohungsmodellierung vor.**

```text
Our system: [describe components, data, and users]. Trust boundaries we know: [list].
List questions to ask in a one-hour threat modeling session, grouped by component and data flow, and note what we have not told you. Do not list specific attacks as facts about our system.
List what you are unsure of.
```

**Fassen Sie Schwachstellenbefunde zur Priorisierung zusammen.**

```text
Here is a list of vulnerability findings with severity, affected system, and whether the system is exposed to the internet: [paste, with sensitive details removed].
Group them, list those that combine high severity with exposure, and give one question per group about business impact. Do not claim any is exploitable.
List what you are unsure of.
```

**Entwerfen Sie einen Leitfaden für die erste Stunde.**

```text
Our context: [type of organization, key systems]. Roles available: [list].
Draft a one-page first-hour checklist for a suspected data breach with steps for containment, evidence preservation, communication, and decisions that need legal or leadership input. Do not state legal obligations; list questions for our legal adviser instead.
List what you are unsure of.
```

## KI-Skills

- [security-testing](../../../../skills/security-testing/SKILL.md): nutzen Sie ihn, um Sicherheitsprüfungen und -tests zu planen.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): nutzen Sie ihn, um Datenschutzfragen für Ihre Rechtsberatung zu formulieren.
- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um Risiken, Verantwortliche und Entscheidungen festzuhalten.
- [incident-response-plan](../../../../skills/incident-response-plan/SKILL.md): nutzen Sie ihn, um die Reaktion zu planen, einschließlich Sicherheitsereignissen.
- [key-risk-indicators](../../../../skills/key-risk-indicators/SKILL.md): nutzen Sie ihn, um Frühwarnindikatoren zu wählen.

## Wichtige Quellen

- ISO/IEC 27001 (der Standard selbst): die Anforderungen an ein Informationssicherheits-Managementsystem; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- NIST, Cybersecurity Framework (nist.gov/cyberframework): ein weit genutztes Framework einer US-Behörde.
- OWASP (owasp.org): Hinweise der Gemeinschaft zur Anwendungssicherheit.
- Wikipedia, „Information security“ und „ISO/IEC 27001“: Überblicke über das Feld und den Standard.

## Literaturverzeichnis

1. Information security — Wikipedia — https://en.wikipedia.org/wiki/Information_security
2. ISO/IEC 27001 — Wikipedia — https://en.wikipedia.org/wiki/ISO/IEC_27001
3. NIST Cybersecurity Framework — Wikipedia — https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework
4. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
5. Principle of least privilege — Wikipedia — https://en.wikipedia.org/wiki/Principle_of_least_privilege
6. Zero trust architecture — Wikipedia — https://en.wikipedia.org/wiki/Zero_trust_architecture
7. Vulnerability management — Wikipedia — https://en.wikipedia.org/wiki/Vulnerability_management
8. Software supply chain — Wikipedia — https://en.wikipedia.org/wiki/Software_supply_chain
9. Threat model — Wikipedia — https://en.wikipedia.org/wiki/Threat_model
10. Computer security incident management — Wikipedia — https://en.wikipedia.org/wiki/Computer_security_incident_management
11. NIST Cybersecurity Framework — NIST — https://www.nist.gov/cyberframework
12. OWASP — OWASP Foundation — https://owasp.org
