# Service-Continuity-Management

**Service-Continuity-Management bereitet eine Organisation darauf vor, kritische Services nach einer schweren Störung am Laufen zu halten oder binnen einer vereinbarten Zeit wiederherzustellen. Es funktioniert, wenn Wiederherstellungsziele aus der Geschäftsauswirkung stammen, Pläne geprobt werden und Backups dadurch bewiesen werden, dass man sie zurückspielt.**

## Warum das wichtig ist

Die meisten Incidents sind klein: eine ausgefallene Festplatte, ein schlechtes Release, ein abgelaufenes Zertifikat. Einige sind es nicht. Ein Rechenzentrum verliert für einen Tag den Strom. Eine Cloud-Region fällt aus. Ransomware verschlüsselt die Hauptsysteme. Ein Lieferant bricht zusammen. Eine Pandemie hält Personal von den Büros fern. Solche Ereignisse bedrohen die Organisation, nicht nur einen Service, und sie geschehen so selten, dass Menschen vergessen, sich darauf vorzubereiten.

Vorbereitung ist eine Art Versicherung mit einer besonderen Eigenschaft: Ihr Wert zeigt sich erst an dem Tag, an dem Sie sie brauchen, und ein Plan, der nie erprobt wurde, wird vermutlich nicht funktionieren. Backups, die nie zurückgespielt wurden, erweisen sich als leer. Ein Failover, das nie geprobt wurde, dauert einen Tag statt einer Stunde. Eine Anrufliste führt Menschen auf, die gegangen sind. Teams, die geübt haben, finden die Probleme in der Übung, nicht in der Krise.

Dieses Thema erklärt, wie man entscheidet, was zu schützen ist, wie man Wiederherstellungsziele setzt, wie man plant und probt und wie man KI und Automatisierung sinnvoll einbezieht. In ITIL 4 heißt die Praktik Service-Continuity-Management. Im weiteren Gebrauch begegnen Sie auch Business-Continuity-Management, Disaster Recovery und Resilienz. Sie überschneiden sich, und dieses Thema beschreibt, wie sie zusammenpassen. Es verbindet sich mit Verfügbarkeit (Thema 3.11 — Verfügbarkeit, Kapazität und Performance), Incident-Management (Thema 3.2 — Incident-Management) und Informationssicherheit (Thema 3.13 — Informationssicherheitsmanagement).

## Kernkonzepte

**Service-Continuity.** In ITIL 4 sicherzustellen, dass Verfügbarkeit und Performance eines Services im Katastrophenfall auf einem ausreichenden Niveau gehalten werden. Die Praktik umfasst die Bewertung von Risiken und Auswirkungen, die Planung der Wiederherstellung und das Proben.

**Business Continuity und Disaster Recovery.** Business-Continuity-Planung, auf Wikipedia beschrieben, deckt ab, wie eine Organisation kritische Funktionen während und nach einer Störung am Laufen hält oder schnell wieder aufnimmt. Disaster Recovery ist der IT-Teil: Systeme, Daten und Infrastruktur wiederherstellen. Business Continuity fragt „Wie bedienen wir weiter Kunden?“; Disaster Recovery fragt „Wie bekommen wir die Systeme zurück?“. ISO 22301 ist ein internationaler Standard für Business-Continuity-Managementsysteme, auf Wikipedia beschrieben; sein Verhältnis zu ISO/IEC 20000 wird in Thema 1.8 — Frameworks und Standards des Service-Managements behandelt.

**Business-Impact-Analyse (BIA).** Eine Untersuchung dessen, was mit der Organisation geschieht, wenn jede Funktion oder jeder Service eine bestimmte Zeit nicht verfügbar ist. Sie ermittelt, welche Services kritisch sind und wie schnell sie wiederhergestellt werden müssen. Die Analyse bezieht das Geschäft ein, nicht nur die IT, denn nur das Geschäft kennt die Auswirkung einer verlorenen Stunde oder eines verlorenen Tages.

**Wiederherstellungszeitziel (Recovery Time Objective, RTO).** Die maximale Zielzeit, einen Service nach einer Störung wiederherzustellen. Wikipedia beschreibt sie unter IT disaster recovery. Sie ergibt sich aus der Auswirkungsanalyse: Kostet eine Stunde Ausfall sehr viel, ist das RTO kurz und die Lösung teuer.

**Wiederherstellungspunktziel (Recovery Point Objective, RPO).** Der maximal hinnehmbare Datenverlust, in Zeit gemessen. Ein RPO von 15 Minuten heißt, dass nach der Wiederherstellung höchstens 15 Minuten an Daten fehlen dürfen. Es bestimmt, wie oft Daten kopiert werden müssen.

**Kosten und Abwägungen.** Kürzere RTOs und RPOs kosten mehr: mehr Redundanz, mehr Replikation, mehr Tests. Zeigen Sie den Entscheidenden die Kosten jeder Option und halten Sie die Entscheidung fest. Siehe Thema 4.5 — Finanzmanagement und FinOps.

**Backup und Replikation.** Backups sind Kopien von Daten, die aufbewahrt werden, um sie nach Verlust oder Beschädigung wiederherzustellen. Replikation hält eine zweite Kopie laufend aktuell an anderer Stelle. Wikipedia beschreibt beides. Replikation ersetzt kein Backup: Wird eine Beschädigung oder eine Verschlüsselung durch Ransomware repliziert, ist auch die Kopie beschädigt. Halten Sie mindestens ein Backup, das aus der Produktionsumgebung nicht verändert werden kann, und testen Sie sein Zurückspielen.

**Wiederherstellungsstandorte und -muster.** Die Optionen reichen von einem Standby-Standort, der stets läuft, über einen, der binnen Stunden gestartet werden kann, bis zum Zurückspielen aus dem Backup in eine neue Umgebung. Cloud-Services erleichtern mehrere Muster, etwa Infrastruktur aus Code neu zu erzeugen. Siehe Thema 6.3 — Infrastructure as Code und GitOps. Wikipedia beschreibt Backup sites.

**Abhängigkeiten.** Ein kritischer Service hängt von anderen ab: Identität, Netzwerken, DNS, Lieferanten, Zertifikaten und Menschen. Wiederherstellungspläne müssen diesen Abhängigkeiten folgen und die Wiederherstellung ordnen. Viele gescheiterte Wiederherstellungen bleiben an einer vergessenen Abhängigkeit hängen, etwa dem System, das die Passwörter speichert, die man zur Wiederherstellung der anderen braucht.

**Pläne und Playbooks.** Schriftliche, knappe Anweisungen, wer was in welcher Reihenfolge tut und wen man kontaktiert. Sie sollten dort gespeichert sein, wo sie gelesen werden können, wenn Systeme ausgefallen sind, einschließlich Offline-Kopien. Rollen müssen benannt sein, mit Vertretungen.

**Übungen.** Proben reichen von einer Durchsprache eines Szenarios über eine Simulation bis zu einem Live-Failover oder -Restore. Wikipedia beschreibt Chaos engineering, bei dem Fehler gezielt und unter Kontrolle eingeführt werden, um Schwächen zu finden. Beginnen Sie klein und sicher und erhöhen Sie den Realismus mit der Zeit. Halten Sie fest, was geschah, und beheben Sie, was Sie lernen.

**Krisenmanagement und Kommunikation.** Eine große Störung braucht Entscheidungen der Führung, Kommunikation mit Mitarbeitenden, Kunden, Aufsichtsbehörden und Öffentlichkeit und Koordination über Funktionen hinweg. Der Wikipedia-Artikel zu Crisis management beschreibt das Feld. Entscheiden Sie im Voraus, wer spricht und wie. Siehe Thema 3.2 — Incident-Management.

**Cyber-Ereignisse.** Ransomware und andere Angriffe sind heute eine führende Ursache schwerer Störungen. Wikipedia beschreibt Ransomware als Schadsoftware, die Daten verschlüsselt und Zahlung verlangt. Die Wiederherstellung nach einem solchen Angriff braucht saubere Backups, Isolierung betroffener Systeme, den Wiederaufbau vertrauenswürdiger Infrastruktur und Abstimmung mit der Sicherheit. Prüfen Sie das für Sie geltende Recht und die Hinweise, auch zur Meldung; dieser Leitfaden gibt keine Rechtsberatung.

**Lieferanten.** Ihre Continuity hängt von der Ihrer Lieferanten ab. Fragen Sie nach deren Plänen und beziehen Sie sie, wo möglich, in Übungen ein. Siehe Thema 3.14 — Lieferantenmanagement.

**Wie die Blickwinkel passen.** Continuity ist der Ort, an dem agile Iteration auf Vorbereitung trifft: den Plan nach jeder Übung verbessern. KI kann helfen, Pläne und Szenarien zu entwerfen, unter Prüfung, aber in einer Krise nicht verlässlich sein. Automatisierung baut Umgebungen neu auf und führt Failover aus. Analytik informiert die Auswirkungsanalyse und verfolgt Übungsergebnisse.

## Bewährte Praktiken

1. **Beginnen Sie mit der Geschäftsauswirkung.** Fragen Sie das Geschäft, was der Ausfall jedes Services über Minuten, Stunden und Tage kostet. Ordnen Sie die Services nach Rang und setzen Sie RTOs und RPOs entsprechend. Überprüfen Sie die Analyse nach großen Änderungen.
2. **Schützen Sie zuerst die kritischen Wenigen.** Konzentrieren Sie den Aufwand auf die Services, deren Verlust die Organisation ernsthaft schädigen würde. Sehen Sie für den Rest leichtere Regelungen vor.
3. **Kartieren Sie Abhängigkeiten.** Listen Sie für jeden kritischen Service auf, was er zum Laufen und zur Wiederherstellung braucht, einschließlich Identität, Netzwerk, DNS und Lieferanten. Planen Sie die Reihenfolge der Wiederherstellung.
4. **Halten Sie ein unveränderliches, getestetes Backup.** Bewahren Sie mindestens eine Kopie auf, die aus der Produktionsumgebung weder geändert noch gelöscht werden kann, und spielen Sie regelmäßig daraus zurück, um zu beweisen, dass es funktioniert.
5. **Schreiben Sie kurze, brauchbare Pläne.** Legen Sie Rollen, erste Schritte, Kontakte und Entscheidungspunkte auf wenige Seiten. Halten Sie Kopien offline und bei den Menschen, die sie brauchen.
6. **Benennen Sie Rollen und Vertretungen.** Benennen Sie für jede Rolle in einer Krise eine Hauptperson und mindestens eine Vertretung. Aktualisieren Sie die Liste, wenn Menschen die Stelle wechseln.
7. **Proben Sie in Schritten.** Beginnen Sie mit der Besprechung eines Szenarios, gehen Sie zu Simulationen über, dann zu kontrollierten Live-Tests von Restore und Failover. Halten Sie Zeiten und Probleme fest.
8. **Beheben Sie, was die Übung findet.** Behandeln Sie Erkenntnisse als Backlog-Punkte mit Verantwortlichen und Terminen. Prüfen Sie bei der nächsten Übung, dass sie erledigt wurden.
9. **Beziehen Sie Lieferanten und Kunden ein.** Fragen Sie kritische Lieferanten nach ihren Continuity-Regelungen und testen Sie die Verbindungen. Vereinbaren Sie mit Kunden, welchen herabgesetzten Service sie hinnehmen können.
10. **Planen Sie die Kommunikation.** Bereiten Sie vor, wer wen über welche Kanäle informiert, mit Vorlagen, einschließlich Kanälen, die funktionieren, wenn Ihre Systeme es nicht tun.

## Fragen für die Diskussion im Team

**Welche drei Services würden uns am meisten schaden, wenn sie eine Woche nicht verfügbar wären, und woher wissen wir das?**
Fragen Sie das Geschäft, nicht nur die IT. Rechnen Sie mit unterschiedlichen Antworten, was ein nützlicher Ausgangspunkt ist. Vereinbaren Sie anschließend für jeden der drei ein kurzes Auswirkungsgespräch.

**Wann haben wir zuletzt aus dem Backup zurückgespielt, und wie lange dauerte es?**
Fragen Sie nach Datum und Ergebnis. Rechnen Sie mit „wir haben es nie versucht“ oder „nur eine Testdatei“. Planen Sie anschließend eine vollständige Wiederherstellung eines wichtigen Systems in einer sicheren Umgebung ein.

**Wovon hängt unsere Wiederherstellung ab, das wir nicht getestet haben, etwa Identitätssysteme, DNS oder eine Person?**
Zeichnen Sie die Kette für einen Service. Suchen Sie zirkuläre Abhängigkeiten. Wählen Sie anschließend eine Abhängigkeit, die wir testen.

**Wenn unsere üblichen Kommunikationssysteme ausfielen, wie würden wir einander und unsere Kunden erreichen?**
Viele Pläne setzen E-Mail und Chat voraus. Fragen Sie nach der Anrufliste und Kanälen außerhalb des Bandes. Testen Sie anschließend einen Anrufbaum.

**Was würden wir in der ersten Stunde eines Ransomware-Angriffs tun, und wer entscheidet?**
Führen Sie eine kurze Szenariodiskussion. Rechnen Sie mit Meinungsverschiedenheiten über das Isolieren von Systemen und den Kontakt mit Behörden. Schreiben Sie anschließend mit der Sicherheit einen einseitigen Leitfaden für die erste Stunde.

**Wo könnte KI uns bei Vorbereitung oder Reaktion helfen, und wo müssen wir uns auf vorbereitete menschliche Pläne verlassen?**
KI kann Szenarien entwerfen, Pläne auf Lücken prüfen und Logs zusammenfassen. Bei einem Ausfall kann der KI-Service selbst nicht verfügbar sein. Fragen Sie, was der Plan voraussetzt. Prüfen Sie anschließend, dass kritische Schritte nicht von einem KI-Service abhängen.

## In der Praxis: ein Beispiel aus dem Service-Management

Die Leitstellensysteme eines regionalen Stromverteilers, die Bedienenden den Zustand des Netzes zeigen, müssen binnen zwei Stunden nach einem Ausfall wiederhergestellt werden. So steht es im Disaster-Recovery-Plan des Verteilers. Er wurde vor vier Jahren geschrieben und zuletzt als Papierübung getestet.

Ein neuer Service-Continuity-Manager bittet um einen Live-Test. Das Team stimmt zu, die Leitstellenanwendung in einer getrennten Umgebung aus dem Backup der Vornacht wiederherzustellen, wobei der Betriebsleiter zusieht. Die Wiederherstellung dauert elf Stunden statt zwei. Drei Probleme treten zutage: Das Backup enthält die Dateien der Anwendung, nicht aber ihre Konfigurationsdatenbank, die ein anderes Team hält; die zur Wiederherstellung nötigen Passwörter liegen in einem Tresor, der Teil desselben Rechenzentrums ist; und die Person, die die Netzwerkeinstellungen des Wiederherstellungsstandorts kennt, ist lange im Urlaub und hat keine Vertretung.

Das Team behebt dies in drei Monaten. Es nimmt die Konfigurationsdatenbank in den Backup-Plan auf, richtet einen Notfall-Zugangsspeicher (Break-Glass) ein, der offline in einem versiegelten Umschlag und in einem getrennten Cloud-Konto liegt, und schult zwei weitere Engineers für den Wiederherstellungsstandort. Ein zweiter Test stellt die Anwendung in 2 Stunden 40 Minuten wieder her. Der dritte, mit bewusst unangekündigtem Start, dauert 1 Stunde 50 Minuten.

Was sich ändert: Das Ziel wird in der Praxis erreicht, und der Plan ist ein Dokument, das Menschen genutzt haben. Was schwierig bleibt: Der Test nutzte eine Kopie der Produktionsdaten und bezog die Verbindungen zu Feldgeräten nicht ein, die sich nur mit dem Netzbetreiber testen lassen; die Organisation hat den Verlust des gesamten Rechenzentrums nicht geprobt, nur den einer Anwendung; und die Kosten für den Wiederherstellungsstandort werden jedes Jahr infrage gestellt. Der Manager führt den Übungskalender weiter und stellt die Kosten der Auswirkungsanalyse gegenüber.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Machen Sie die Wiederherstellung zum Teil des Designs: aus Code neu aufbauen, Daten und Konfiguration sichern, versteckte Abhängigkeiten vermeiden. Nehmen Sie an Übungen teil und beheben Sie, was sie finden.

### Service- und Betriebsteams

Kennen Sie Ihre Rolle und Ihre Vertretung, halten Sie Runbooks aktuell und proben Sie Restores und Failover. Halten Sie fest, wie lange Dinge wirklich dauern, und sagen Sie es den Verantwortlichen.

### Führung und Governance

Legen Sie Wiederherstellungsziele mit dem Geschäft fest und finanzieren Sie, was sie erfordern. Nehmen Sie an Übungen teil, einschließlich Entscheidungen und Kommunikation. Verlangen Sie Ergebnisse von Tests zu sehen, nicht nur Pläne.

### Kunden und Nutzer

Fragen Sie, welche Continuity-Regelungen die Services schützen, auf die Sie sich verlassen, und vereinbaren Sie, welchen herabgesetzten Service Sie hinnehmen können. Halten Sie eine eigene Notfallregelung für kritische Bedürfnisse bereit.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Verbessern Sie Continuity in kleinen Schritten: eine Abhängigkeit, ein Restore-Test, eine Korrektur auf einmal, mit den Beteiligten besprochen. Vorsicht: Verschieben Sie nicht alle Continuity-Arbeit auf ein einziges großes Projekt; proben Sie früh und oft.

### KI

KI kann helfen, Szenarien zu entwerfen, Pläne auf Lücken zu prüfen und Logs nach einer Übung zusammenzufassen, mit Prüfung durch eine Person. Benennen Sie eine verantwortliche Person. Vorsicht: Ein KI-Assistent kann in einer Krise nicht verfügbar sein oder unzuverlässige Anweisungen geben; halten Sie wesentliche Verfahren in einfachen, getesteten Dokumenten. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie den Neuaufbau von Umgebungen, die Backup-Verifizierung und Failover, mit Protokollen und Schutzmaßnahmen, und testen Sie sie regelmäßig. Vorsicht: Automatisierung kann Schaden schnell verbreiten, etwa Backups zusammen mit den Produktionsdaten löschen; schützen Sie Backup-Systeme mit getrennten Zugangsdaten und Kontrollen. Siehe Thema 6.3 — Infrastructure as Code und GitOps.

### Analytik

Verfolgen Sie Backup-Erfolg, Restore-Testzeiten gegenüber dem RTO, erreichtes RPO, geschlossene Übungserkenntnisse und Abdeckung der Abhängigkeiten. Vorsicht: Eine hohe Backup-Erfolgsquote sagt nichts darüber, ob sich Daten wiederherstellen lassen; zählen Sie Restores. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Pläne nie getestet.** Sie scheitern, wenn sie gebraucht werden. Proben und spielen Sie regelmäßig zurück.
- **Backups nie zurückgespielt.** Sie sind leer oder unvollständig. Testen Sie Restores und prüfen Sie den Inhalt.
- **Versteckte Abhängigkeiten.** Die Wiederherstellung bleibt an Identität oder DNS hängen. Kartieren und testen Sie Abhängigkeiten.
- **Backups, die Angreifer ändern können.** Ransomware verschlüsselt sie. Halten Sie eine unveränderliche Kopie.
- **Planung nur durch die IT.** Das Geschäft ist nicht beteiligt. Führen Sie eine Auswirkungsanalyse mit den Geschäftsverantwortlichen durch.
- **Der Plan liegt nur auf dem ausgefallenen System.** Niemand kann ihn lesen. Halten Sie Offline-Kopien.
- **Keine Vertretungen.** Eine Person hält das Wissen. Benennen und schulen Sie Vertretungen.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Auswirkung und Ziele | Nicht definiert | Kritische Services aufgelistet | RTOs und RPOs aus der Geschäftsauswirkung gesetzt | Ziele mit Kosten und Ergebnissen überprüft | Ziele im Unternehmen und mit Lieferanten abgestimmt |
| Backup und Wiederherstellung | Backups nicht verifiziert | Backups laufen | Restores getestet und gemessen | Restore-Leistung verfolgt und verbessert | Wiederherstellung automatisiert und laufend getestet |
| Pläne | Keine oder veraltet | Für die wichtigsten Services geschrieben | Knappe Pläne mit benannten Rollen und Vertretungen | Pläne nach jeder Übung aktualisiert | Pläne über Funktionen, Lieferanten und Kunden integriert |
| Übungen | Keine | Papier-Durchsprachen | Regelmäßige Simulationen und Live-Restores | Erkenntnisse bis zum Abschluss verfolgt | Übungen beziehen Partner und realistische Szenarien ein |

## Checkliste

- [ ] Wir haben eine Business-Impact-Analyse für unsere kritischen Services durchgeführt.
- [ ] Jeder kritische Service hat ein RTO und ein RPO, vereinbart mit seiner verantwortlichen Person.
- [ ] Abhängigkeiten, einschließlich Identität und DNS, sind kartiert.
- [ ] Mindestens ein Backup ist unveränderlich, und Restores wurden getestet.
- [ ] Pläne sind kurz, aktuell und auch offline gespeichert.
- [ ] Rollen und Vertretungen sind benannt.
- [ ] Wir führen regelmäßig Übungen durch und verfolgen Erkenntnisse bis zum Abschluss.
- [ ] Die Continuity-Regelungen der Lieferanten sind bekannt und, wo möglich, getestet.

## KI-Prompts

**Prüfen Sie einen Plan auf Lücken.**

```text
Here is our continuity plan for [service]: [paste]. Here is the list of its dependencies: [paste].
List dependencies that the plan does not mention, steps that rely on a person without a named deputy, and steps that assume a system that may be down. Do not rewrite the plan.
List what you are unsure of.
```

**Gestalten Sie eine Szenarioübung.**

```text
Our context: [type of organization, key services]. Scenario theme: [for example, ransomware, data center loss].
Draft a 90-minute discussion exercise with a timeline of events, six decision points, questions for each role, and what to record. Do not use real names or systems unless I give them.
List what you are unsure of.
```

**Fassen Sie Ergebnisse eines Restore-Tests zusammen.**

```text
Here are the notes from a restore test: [paste with times and problems].
List what took longest, what failed, the dependencies discovered, and the actions to consider, with the owner role for each. Do not invent causes.
List what you are unsure of.
```

## KI-Skills

- [business-continuity-plan](../../../../skills/business-continuity-plan/SKILL.md): nutzen Sie ihn, um zu planen, wie kritische Funktionen weiterlaufen.
- [disaster-recovery-plan](../../../../skills/disaster-recovery-plan/SKILL.md): nutzen Sie ihn, um die Wiederherstellung von Systemen und Daten zu planen.
- [disaster-recovery-testing](../../../../skills/disaster-recovery-testing/SKILL.md): nutzen Sie ihn, um Wiederherstellungstests zu gestalten und durchzuführen.
- [crisis-communication-plan](../../../../skills/crisis-communication-plan/SKILL.md): nutzen Sie ihn, um die Kommunikation bei einer Störung zu planen.
- [chaos-testing](../../../../skills/chaos-testing/SKILL.md): nutzen Sie ihn, um das Fehlerverhalten sicher zu testen.

## Wichtige Quellen

- ISO 22301, Security and resilience — Business continuity management systems: der internationale Standard; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- PeopleCert, ITIL certification pages: die Beschreibung der Praktik Service-Continuity-Management durch den Eigentümer.
- Wikipedia, „Business continuity planning“ und „IT disaster recovery“: Überblicke über die Ideen und Begriffe.
- Wikipedia, „Chaos engineering“: die Praxis, Ausfall gezielt zu testen.

## Literaturverzeichnis

1. Business continuity planning — Wikipedia — https://en.wikipedia.org/wiki/Business_continuity_planning
2. IT disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/IT_disaster_recovery
3. Disaster recovery — Wikipedia — https://en.wikipedia.org/wiki/Disaster_recovery
4. ISO 22301 — Wikipedia — https://en.wikipedia.org/wiki/ISO_22301
5. Backup — Wikipedia — https://en.wikipedia.org/wiki/Backup
6. Backup site — Wikipedia — https://en.wikipedia.org/wiki/Backup_site
7. Chaos engineering — Wikipedia — https://en.wikipedia.org/wiki/Chaos_engineering
8. Crisis management — Wikipedia — https://en.wikipedia.org/wiki/Crisis_management
9. Ransomware — Wikipedia — https://en.wikipedia.org/wiki/Ransomware
10. Replication (computing) — Wikipedia — https://en.wikipedia.org/wiki/Replication_(computing)
11. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
