# KI-Governance, Risiko und Compliance

**KI-Governance gibt einer Organisation benannte Verantwortliche, klare Regeln zu Daten und Entscheidungen, eine am möglichen Schaden bemessene Risikobewertung, Tests und Aufzeichnungen für jedes KI-System, das sie nutzt. Frameworks wie ISO/IEC 42001, das NIST AI Risk Management Framework und die EU-KI-Verordnung liefern Vokabular und Struktur, keine Rechtsberatung.**

## Warum das wichtig ist

KI kommt durch viele Türen zugleich in eine Organisation. Anbieter fügen KI-Funktionen zu den Werkzeugen hinzu, für die Sie ohnehin zahlen. Teams bauen Assistenten. Einzelne nutzen öffentliche Chat-Werkzeuge für ihre Arbeit. Jede Nutzung wirft Fragen auf, die die Organisation womöglich nicht gestellt hat: welche Daten hineingehen, wer sie sieht, wie genau sie ist, wer von ihren Entscheidungen betroffen ist und wer antwortet, wenn sie falschliegt.

Ohne Governance werden diese Fragen Nutzung für Nutzung beantwortet, uneinheitlich oder gar nicht. Die Folgen reichen vom Peinlichen bis zum Ernsten: ein vertrauliches Dokument, das in ein öffentliches Werkzeug kopiert wird, ein Auswahlsystem, das manche Gruppen schlechter behandelt als andere, ein Assistent, der einem Kunden falschen Rat gibt, eine Aufsichtsbehörde, die Belege für Kontrolle verlangt und keine findet.

Governance ist die Antwort, und sie muss nicht schwer sein. Im Kern ist sie eine kleine Menge von Gewohnheiten: wissen, welche KI Sie nutzen, jeder Nutzung eine verantwortliche Person geben, das Risiko im Verhältnis zu dem bewerten, was schiefgehen könnte, testen und überwachen, Regeln zu Daten und menschlicher Aufsicht setzen und Aufzeichnungen führen. Gesetze und Standards entwickeln sich schnell: Die KI-Verordnung (Artificial Intelligence Act) der Europäischen Union, auf Wikipedia beschrieben, legt Pflichten nach Risikokategorie fest, und viele andere Rechtsordnungen haben Regeln oder Entwürfe. Dieses Thema erklärt Struktur und Vokabular und zeigt, wie man KI-Governance in die Governance einfügt, die Sie bereits haben. Es gibt keine Rechtsberatung; bei jeder Rechtsfrage fragen Sie eine qualifizierte Beratung.

Die Beschreibung der neuesten ITIL-Version durch den Eigentümer stellt KI in die Umgebung, mit der sich das Service-Management befassen muss (siehe Thema 1.3 — ITIL 5). Dieses Thema verbindet sich mit der allgemeinen Sicht auf KI (Thema 5.1 — KI im Service-Management), Agenten (Thema 5.5 — Agentische KI und menschliche Aufsicht), dem Betriebsmodell (Thema 5.8 — KI-Betriebsmodell und Fähigkeiten) und der Unternehmens-Governance (Thema 8.1 — Governance, Risiko und Compliance).

## Kernkonzepte

**Governance, Risiko und Compliance (GRC).** Governance ist, wie eine Organisation geführt und kontrolliert wird; Risikomanagement erkennt und behandelt Bedrohungen für Ziele; Compliance ist die Erfüllung von Pflichten aus Gesetzen, Verträgen und Richtlinien. Wikipedia beschreibt GRC als integrierten Ansatz für alle drei. KI-Governance wendet dieselbe Logik auf KI an.

**KI-Inventar.** Eine Liste aller KI-Systeme in Nutzung oder Entwicklung: Zweck, verantwortliche Person, Anbieter oder Modell, genutzte Daten, Nutzer und betroffene Menschen, Risikostufe und Status. Was Sie nicht sehen, können Sie nicht steuern. Nehmen Sie eingebettete Anbieterfunktionen und private Werkzeuge auf, die für die Arbeit genutzt werden.

**Risikobasierter Ansatz.** Das Maß der Kontrolle sollte dem Maß möglichen Schadens entsprechen. Besprechungsnotizen zusammenzufassen birgt ein anderes Risiko, als Bewerbende zu ranken. Die EU-KI-Verordnung folgt einem ähnlichen Ansatz, mit Kategorien von minimalem bis unannehmbarem Risiko; Wikipedia beschreibt die Kategorien. Prüfen Sie den aktuellen Text und Ihre eigene Lage mit einer Rechtsberatung.

**Risikobewertung für KI.** Fragen Sie für jede Nutzung: Wer könnte geschädigt werden, und wie; wie wahrscheinlich und wie schwer; was sind die Grenzen des Systems; was geschieht, wenn es falschliegt; und welche Alternativen gibt es? Wikipedia beschreibt Risk management allgemein. Halten Sie die Bewertung und die Entscheidung der verantwortlichen Person fest. Datenschutz-Folgenabschätzungen (Privacy impact assessments), auf Wikipedia beschrieben, sind ein verwandtes Werkzeug für personenbezogene Daten.

**Standards und Frameworks.** ISO/IEC 42001, 2023 veröffentlicht, legt Anforderungen an ein Managementsystem für künstliche Intelligenz fest, in der Struktur vergleichbar mit anderen ISO-Managementsystemnormen. Das National Institute of Standards and Technology (NIST) in den USA veröffentlicht das AI Risk Management Framework, gegliedert in vier Funktionen: Govern, Map, Measure und Manage. Beide sind freiwillige Werkzeuge für Struktur und gemeinsames Vokabular. Lesen Sie die aktuellen Texte bei den Herausgebern. Siehe Thema 1.8 — Frameworks und Standards des Service-Managements.

**Recht und Regulierung.** KI unterliegt bestehenden Gesetzen, etwa Datenschutz-, Verbraucherschutz-, Antidiskriminierungs-, Arbeits- und Urheberrecht, sowie neuen KI-spezifischen Regeln. Wikipedia beschreibt die Regulation of artificial intelligence über Rechtsordnungen hinweg, die sich schnell ändert. Pflichten hängen davon ab, wo Sie tätig sind und was Sie tun. Dieser Leitfaden kann nicht sagen, was für Sie gilt.

**Datenschutz und Privatsphäre.** KI-Systeme verarbeiten oft personenbezogene Daten. Gesetze wie die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union legen Regeln zu Rechtsgrundlage, Zweck, Datenminimierung, Rechten von Betroffenen und in manchen Fällen Grenzen automatisierter Entscheidungen fest. Wikipedia beschreibt die GDPR und Privacy. Beziehen Sie Ihre Datenschutzbeauftragte oder Rechtsberatung ein und halten Sie fest, wohin Daten gehen, wie lange sie aufbewahrt werden und ob sie ein Modell trainieren.

**Verzerrung und Fairness.** KI, die mit vergangenen Daten trainiert wurde, kann unfaire Muster reproduzieren, sodass manche Menschen schlechtere Ergebnisse erhalten. Wikipedia beschreibt Algorithmic bias und Fairness in machine learning. Testen Sie auf Unterschiede in den Ergebnissen über die für die Nutzung relevanten Gruppen und schauen Sie darauf, wer betroffen ist, nicht nur auf die durchschnittliche Leistung. Entscheiden Sie vor dem Start, was akzeptabel ist.

**Transparenz und Erklärbarkeit.** Von einem KI-System betroffene Menschen sollten wissen, dass es im Einsatz ist, und bei wesentlichen Entscheidungen eine Erklärung und einen Weg zur Anfechtung erhalten können. Wikipedia beschreibt Algorithmic transparency und Explainable AI. Das richtige Maß hängt vom Einsatz ab.

**Menschliche Aufsicht.** Eine Person, die das System verstehen, hinterfragen und übersteuern kann, mit Zeit und Informationen dafür. Siehe Thema 5.5 — Agentische KI und menschliche Aufsicht. Aufsicht, die nur auf dem Papier existiert, ist ein häufiger Befund.

**Sicherheit.** KI-Systeme können angegriffen werden (zum Beispiel durch Prompt Injection), Daten preisgeben und sich unerwartet verhalten. Red-Teaming, auf Wikipedia beschrieben, ist die Praxis, ein System zu testen, indem man einen Gegner simuliert. Siehe Thema 3.13 — Informationssicherheitsmanagement.

**Geistiges Eigentum.** Fragen entstehen zum Material, mit dem Modelle trainiert wurden, zum Eigentum an Ausgaben und zu den Lizenzen der Modelle selbst. Wikipedia beschreibt Intellectual property und Copyright. Siehe Thema 4.2 — Software-Asset-Management. Holen Sie Rat ein, wie sich diese auf Sie auswirken.

**Rechenschaft und Rollen.** Governance braucht klare Rollen: einen Sponsor auf Führungsebene, ein Gremium, das Richtlinien setzt und riskantere Nutzungen prüft, Verantwortliche für jedes System und Spezialisten für Sicherheit, Datenschutz und Recht. Wikipedia beschreibt Accountability. Vermeiden Sie ein Komitee, das alles genehmigt und Arbeit blockiert; reservieren Sie Prüfung für riskantere Nutzungen.

**Kontrollen über den Lebenszyklus.** Kontrollen gelten über das Leben eines Systems: Entwurf (Zweck, Daten, Risiko), Bauen oder Kaufen (Sorgfaltsprüfung, Verträge, Tests), Bereitstellen (Genehmigung, Monitoring), Betreiben (Leistung, Drift, Incidents) und Stilllegen. Siehe Thema 3.14 — Lieferantenmanagement.

**Aufzeichnungen.** Halten Sie Belege: das Inventar, Risikobewertungen, Testergebnisse, Genehmigungen, Incident-Aufzeichnungen und Nutzungsprotokolle. Aufzeichnungen stützen Audits, Lernen und Anfechtungen durch Betroffene.

**Wie die Blickwinkel passen.** Governance ist die Kontrollschicht um den KI-Blickwinkel. Agile Praxis legt angemessene, schnelle Prüfung nahe, mit Leitplanken, die Teams ohne Warten nutzen können. Automatisierung kann Regeln durchsetzen, etwa verhindern, dass sensible Daten an nicht genehmigte Werkzeuge gehen. Analytik liefert die Monitoring-Belege.

## Bewährte Praktiken

1. **Bauen Sie zuerst das Inventar.** Fragen Sie Teams, prüfen Sie Anbieter-Einstellungen und werten Sie Netzwerk- und Spesendaten aus. Erfassen Sie jedes KI-System mit verantwortlicher Person und Zweck.
2. **Klassifizieren Sie nach Risiko.** Definieren Sie einige Risikostufen mit Beispielen, etwa niedrig (interne Texte entwerfen), mittel (Antworten an Kunden) und hoch (Entscheidungen über Rechte oder Sicherheit von Menschen). Binden Sie das Maß der Prüfung an das Maß des Risikos.
3. **Benennen Sie für jede Nutzung eine verantwortliche Person.** Eine rechenschaftspflichtige Person je System, die die Risikobewertung unterzeichnet und für Leistung und Incidents einsteht.
4. **Verfassen Sie eine kurze, klare Richtlinie.** Legen Sie fest, welche Daten an welche Werkzeuge gehen dürfen, welche Nutzungen Genehmigung brauchen, was nie getan werden darf und wen man fragt. Halten Sie sie auf wenigen Seiten und veröffentlichen Sie Beispiele.
5. **Stellen Sie genehmigte Werkzeuge und Wege bereit.** Haben Mitarbeitende keinen genehmigten Weg, KI zu nutzen, nutzen sie nicht genehmigte. Bieten Sie Werkzeuge mit den richtigen Bedingungen und einen schnellen Weg zur Genehmigung.
6. **Bewerten Sie vorher und testen Sie nachher.** Führen Sie vor dem Start einer Nutzung eine angemessene Risikobewertung durch und testen Sie mit realistischen Fällen, einschließlich Prüfungen auf Verzerrung und Missbrauch. Wiederholen Sie nach wesentlichen Änderungen.
7. **Prüfen Sie Anbieter und Bedingungen.** Fragen Sie Anbieter, wie sie Ihre Daten nutzen, wie sie testen, wie sie Modelländerungen mitteilen und was am Ende mit Daten geschieht. Halten Sie die Antworten fest. Siehe Thema 3.14 — Lieferantenmanagement.
8. **Definieren Sie menschliche Aufsicht in der Praxis.** Sagen Sie für jede Nutzung, wer was mit welchen Informationen wie oft prüft, und ziehen Sie Stichproben der Prüfungen.
9. **Überwachen Sie und bearbeiten Sie Incidents.** Verfolgen Sie Fehler, Beschwerden, Drift und Sicherheitsereignisse. Behandeln Sie KI-Incidents wie andere Incidents und lernen Sie daraus. Siehe Thema 3.2 — Incident-Management.
10. **Überprüfen Sie regelmäßig und führen Sie Aufzeichnungen.** Überprüfen Sie Inventar und Risikostufen mindestens jährlich und wenn sich Gesetze oder Systeme ändern. Halten Sie die Belege an einem Ort.

## Fragen für die Diskussion im Team

**Wo nutzen wir heute KI, wer verantwortet jede Nutzung, und was könnte schiefgehen?**
Bauen Sie ein erstes Inventar. Rechnen Sie mit Lücken, besonders bei Anbieterfunktionen und privaten Werkzeugen. Wählen Sie anschließend die drei riskantesten und weisen Sie Verantwortliche zu.

**Welche unserer Nutzungen betreffen Zugang, Geld, Gesundheit oder Beschäftigung von Menschen, und welche Prüfung erhalten sie?**
Suchen Sie riskantere Nutzungen. Rechnen Sie mit Unsicherheit, was zählt. Beziehen Sie anschließend Rechts- und Datenschutzberatung in die Klassifizierung ein.

**Welche Daten geben Mitarbeitende in KI-Werkzeuge, und kennen sie die Regeln?**
Fragen Sie bei Bedarf anonym. Rechnen Sie mit Überraschungen. Vereinbaren Sie anschließend eine klare Regel mit Beispielen und stellen Sie eine genehmigte Alternative bereit.

**Was würden wir einer Aufsichtsbehörde oder einem Kunden zeigen, der fragt, wie wir unsere KI kontrollieren?**
Sammeln Sie, was existiert. Rechnen Sie mit einer dünnen Akte. Wählen Sie anschließend drei Dokumente, die wir erstellen: Inventar, Richtlinie und eine Risikobewertung.

**Wie testen wir auf unfaire Ergebnisse, und welche Gruppen sollten wir betrachten?**
Denken Sie an die Menschen, die von jeder Nutzung betroffen sind. Rechnen Sie damit, dass niemand getestet hat. Wählen Sie anschließend eine Nutzung und entwerfen Sie, mit Beratung, einen einfachen Vergleich über Gruppen.

**Wer kann zu einer KI-Nutzung Nein sagen, und was geschieht dann?**
Governance ohne die Macht zu stoppen ist dekorativ. Rechnen Sie mit unklaren Antworten. Benennen Sie anschließend die entscheidende Person für riskantere Nutzungen und ein Service-Level für Prüfungen.

## In der Praxis: ein Beispiel aus dem Service-Management

Eine nationale Sozialversicherungsbehörde nutzt KI an mehreren Stellen: einen virtuellen Agenten eines Anbieters auf ihrer öffentlichen Website, ein Werkzeug, das Fallnotizen für Sachbearbeitende zusammenfasst, einen Entwicklerassistenten für ihre IT-Mitarbeitenden und eine Pilotphase, die mögliche Fehler in Leistungsanträgen zur Prüfung markiert. Es gibt keine zentrale Aufzeichnung, und das Büro eines Ministers hat die Behörde gefragt, wie sie KI kontrolliert.

Der Chief Information Officer bittet das Service-Management-Büro, in sechs Wochen ein Inventar aufzubauen. Es findet elf Nutzungen, darunter zwei, von denen niemand in der IT-Abteilung wusste: eine Textzusammenfassungsfunktion, die ein Anbieter im Fallbearbeitungssystem eingeschaltet hat, und ein Transkriptionswerkzeug, das ein Regionalbüro mit privaten Konten nutzt. Das Team stuft Nutzungen gemeinsam mit der Datenschutzbeauftragten und der Rechtsabteilung nach Risiko ein. Die Pilotphase zur Markierung von Anträgen wird als hohes Risiko eingestuft, da ihre Ausgabe zu Maßnahmen gegen eine Person führen könnte; die Fallnotiz-Zusammenfassung ist mittel; der Entwicklerassistent niedrig, obwohl er Lizenzfragen mit sich bringt.

Für jede Nutzung wird eine verantwortliche Person benannt. Für die Antrags-Pilotphase beauftragt die verantwortliche Person eine Risikobewertung, einschließlich eines Vergleichs der Markierungsraten über Gruppen, und eine Regel, dass niemandem je allein aufgrund der Ausgabe des Werkzeugs eine Leistung verweigert wird. Das Transkriptionswerkzeug wird gestoppt, bis eine genehmigte Alternative gefunden ist; dem Regionalbüro wird ein vom Anbieter genehmigtes Werkzeug unter einem Vertrag mit Datenschutzbedingungen angeboten. Eine vierseitige Richtlinie legt Regeln zu Daten und Genehmigungen fest, und für mittelriskante Nutzungen wird ein kurzer Prüfweg binnen zehn Arbeitstagen zugesagt.

Was sich ändert: Die Behörde kann dem Ministerium mit einem Inventar, einer Richtlinie und einer Risikobewertung für ihre risikoreichste Nutzung antworten. Was schwierig bleibt: Standardmäßig eingeschaltete Anbieterfunktionen tauchen weiter auf, und die Behörde hat keinen automatischen Weg, sie zu entdecken; der Vergleich über Gruppen ist durch Daten begrenzt, die die Behörde möglicherweise nicht rechtmäßig halten darf; und die Zusage von zehn Tagen für den Prüfweg belastet ein kleines Team. Das Büro plant eine vierteljährliche Überprüfung der Anbieterfunktionen und eine Anfrage nach rechtlicher Orientierung zum Testen ein.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Erfassen Sie Ihre KI-Nutzungen, bewerten Sie das Risiko früh, testen Sie mit realistischen und feindseligen Fällen und halten Sie fest, was das System darf. Bauen Sie einen Weg ein, auf dem Menschen Ergebnisse anfechten und Sie es abschalten können.

### Service- und Betriebsteams

Überwachen Sie KI-Systeme in der Produktion, bearbeiten Sie Incidents und melden Sie Fehler und Beschwerden. Befolgen Sie die Datenregeln und sagen Sie den Verantwortlichen, welche neuen KI-Funktionen in Ihren Werkzeugen auftauchen.

### Führung und Governance

Fördern Sie das Programm, benennen Sie Entscheidungsrechte und finanzieren Sie die Arbeit. Verlangen Sie das Inventar, die Risikostufen und Belege für Tests. Lagern Sie Rechenschaft nicht an Anbieter oder Komitees aus.

### Kunden und Nutzer

Sie sollten erfahren, wenn KI auf Weisen genutzt wird, die für Sie zählen, und eine Person erreichen und Entscheidungen anfechten können. Fragen Sie, wie Ihre Daten genutzt werden, und melden Sie Ergebnisse, die falsch oder unfair erscheinen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Bieten Sie schnelle, angemessene Prüfung mit Leitplanken, die Teams befolgen können, etwa genehmigte Werkzeuge und eine kurze Checkliste für risikoarme Nutzungen. Entwickeln Sie die Richtlinie gemeinsam mit Teams weiter. Vorsicht: Eine langsame, schwere Prüfung treibt Teams dazu, sie zu umgehen; halten Sie den risikoarmen Weg schnell.

### KI

KI kann helfen, Richtlinien zu entwerfen, Anbieterbedingungen zu lesen und Risikobewertungen vorzubereiten, unter rechtlicher und menschlicher Prüfung. Benennen Sie auch für diese Nutzung eine verantwortliche Person. Vorsicht: Eine KI-Zusammenfassung eines Gesetzes oder Vertrags kann falsch sein; nutzen Sie sie nie als Grundlage einer Compliance-Entscheidung. Siehe Thema 5.1 — KI im Service-Management.

### Automatisierung

Automatisieren Sie die Einspeisung ins Inventar, Regeln gegen Datenabfluss, Genehmigungen für risikoarme Nutzungen und Protokollierung, mit Prüfung von Ausnahmen. Vorsicht: Automatisches Blockieren kann Arbeit auf private Geräte treiben; koppeln Sie es mit genehmigten Alternativen. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Verfolgen Sie den Anteil der KI-Nutzungen mit Verantwortlichen und Bewertungen, Incidents, Beschwerden, Testergebnisse und Zeit bis zur Prüfung. Vorsicht: Zählungen abgeschlossener Bewertungen können Papierarbeit belohnen; prüfen Sie eine Stichprobe auf Qualität und darauf, ob Kontrollen wirken. Siehe das Buch *Service Management Metrics* und Thema 7.3 — Messung und Berichtswesen.

## Häufige Fehlermuster

- **Kein Inventar.** Nutzungen vermehren sich unsichtbar. Bauen und aktualisieren Sie das Inventar.
- **Prüfung nach Einheitsmaß.** Alles wird blockiert oder nichts geprüft. Richten Sie die Prüfung am Risiko aus.
- **Eine Richtlinie, der niemand folgen kann.** Mitarbeitende ignorieren sie. Schreiben Sie kurze Regeln mit Beispielen und stellen Sie genehmigte Werkzeuge bereit.
- **Governance als Papierkram.** Dokumente existieren, Kontrollen nicht. Testen Sie, dass Kontrollen funktionieren.
- **Anbieterbehauptungen vertrauen.** Bedingungen und Verhalten sind ungeprüft. Fragen, testen und festhalten.
- **Betroffene ignorieren.** Verzerrung und Schaden bleiben unsichtbar. Testen Sie Ergebnisse über Gruppen und bieten Sie einen Weg zur Anfechtung.
- **Rechtsberatung für etwas halten, das KI liefern kann.** Falsche Zusammenfassungen treiben Entscheidungen. Nutzen Sie qualifizierte Beratung.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Inventar und Verantwortung | Unbekannte Nutzungen | Wichtigste Nutzungen aufgelistet | Inventar mit Verantwortlichen und Risikostufen | Inventar überprüft und durch Discovery verifiziert | Inventar mit Katalog, Einkauf und Kontrollen integriert |
| Risiko und Tests | Ad hoc | Einige Bewertungen | Angemessene Bewertung und Tests vor dem Start | Ergebnisse überwacht und umgesetzt | Laufende Absicherung über Systeme und Lieferanten |
| Richtlinie und Daten | Keine | Entwurf einer Anleitung | Klare Richtlinie, genehmigte Werkzeuge und Datenregeln | Konformität überwacht und auditiert | Regeln durch Werkzeuge durchgesetzt und an Veränderung angepasst |
| Aufsicht und Rechenschaft | Unklar | Benannter Sponsor | Definierte Rollen, Prüfweg und menschliche Aufsicht | Aufsichtsqualität stichprobenartig geprüft | Governance über Unternehmen und Partner abgestimmt |

## Checkliste

- [ ] Wir führen ein KI-Inventar mit Verantwortlichen und Zwecken.
- [ ] Jede Nutzung hat eine Risikostufe, mit einer ihr angemessenen Prüfung.
- [ ] Eine kurze Richtlinie deckt Daten, Genehmigungen und verbotene Nutzungen ab.
- [ ] Genehmigte Werkzeuge und ein schneller Prüfweg existieren.
- [ ] Riskantere Nutzungen haben eine festgehaltene Risikobewertung und Tests, auch auf Verzerrung.
- [ ] Anbieterbedingungen zu Daten, Tests und Modelländerungen sind erfasst.
- [ ] Menschliche Aufsicht ist definiert und wird stichprobengeprüft.
- [ ] Wir haben Rechts- und Datenschutzberatung zu unseren Pflichten gefragt.

## KI-Prompts

**Entwerfen Sie aus Notizen einen Inventareintrag.**

```text
Here are notes on an AI use: [paste].
Draft an inventory entry with: purpose, owner (only if stated), vendor or model (only if stated), data used, people affected, decisions it influences, and proposed risk level with the reasons. Mark each item not in the notes as [missing]. Do not state legal obligations.
List what you are unsure of.
```

**Bereiten Sie Fragen an einen Anbieter vor.**

```text
We are considering an AI product from a vendor for [use]. What we know of it: [paste].
Write 20 questions for the vendor about data use and retention, training on our data, testing for accuracy and bias, security, model changes, incident notification, and exit. Do not assume answers.
List what you are unsure of.
```

**Strukturieren Sie eine Risikobewertung zur Prüfung.**

```text
AI use: [describe]. People affected: [list]. Decisions influenced: [list]. Current controls: [list].
Draft a risk assessment table with: harm, who is affected, likelihood and severity (marked as my estimate to be confirmed), existing controls, further controls to consider, and questions for the owner. Do not give legal conclusions.
List what you are unsure of.
```

## KI-Skills

- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um KI-Risiken, Verantwortliche und Entscheidungen festzuhalten.
- [machine-learning-model-card](../../../../skills/machine-learning-model-card/SKILL.md): nutzen Sie ihn, um Zweck, Daten, Leistung und Grenzen eines Modells zu dokumentieren.
- [legal-data-privacy-compliance](../../../../skills/legal-data-privacy-compliance/SKILL.md): nutzen Sie ihn, um Datenschutzfragen für Ihre Rechtsberatung zu formulieren.
- [legal-compliance-audit](../../../../skills/legal-compliance-audit/SKILL.md): nutzen Sie ihn, um Belege und Fragen für ein Audit vorzubereiten.
- [data-governance](../../../../skills/data-governance/SKILL.md): nutzen Sie ihn, um Verantwortung und Regeln für die von KI genutzten Daten festzulegen.

## Wichtige Quellen

- NIST, AI Risk Management Framework: ein weit genutztes freiwilliges Framework zur Steuerung von KI-Risiken.
- ISO/IEC 42001 (der Standard selbst): Anforderungen an ein KI-Managementsystem; lesen Sie die aktuelle Ausgabe beim Herausgeber.
- Der Text der KI-Verordnung der Europäischen Union und Hinweise Ihrer eigenen Aufsichtsbehörden: maßgebliche Quellen zu rechtlichen Pflichten.
- Wikipedia, „Regulation of artificial intelligence“ und „Ethics of artificial intelligence“: Überblicke über die Landschaft.

## Literaturverzeichnis

1. Regulation of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence
2. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
3. Ethics of artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence
4. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
5. Fairness (machine learning) — Wikipedia — https://en.wikipedia.org/wiki/Fairness_(machine_learning)
6. General Data Protection Regulation — Wikipedia — https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
7. Privacy impact assessment — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
8. Governance, risk, and compliance — Wikipedia — https://en.wikipedia.org/wiki/Governance,_risk,_and_compliance
9. Risk management — Wikipedia — https://en.wikipedia.org/wiki/Risk_management
10. Red team — Wikipedia — https://en.wikipedia.org/wiki/Red_team
11. Explainable artificial intelligence — Wikipedia — https://en.wikipedia.org/wiki/Explainable_artificial_intelligence
12. AI Risk Management Framework — NIST — https://www.nist.gov/itl/ai-risk-management-framework
