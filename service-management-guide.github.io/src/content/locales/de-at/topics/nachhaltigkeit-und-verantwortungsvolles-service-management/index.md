# Nachhaltigkeit und verantwortungsvolles Service-Management

**Verantwortungsvolles Service-Management rechnet die ökologischen, sozialen und ethischen Kosten des Betriebs von Services mit ein, darunter den Energiebedarf von Cloud und KI, Elektroschrott, Barrierefreiheit und den fairen Umgang mit Menschen. Es funktioniert, indem man misst, was man kann, mit genannter Unsicherheit, Optionen mit geringerer Wirkung wählt, wo sie wenig kosten, und eine Behauptung nicht mit einem Ergebnis verwechselt.**

## Warum das wichtig ist

Digitale Services fühlen sich gewichtslos an. Eine Anfrage geht hinaus, eine Antwort kommt zurück, und nichts scheint verbraucht zu werden. Dahinter stehen Rechenzentren, die Strom und Wasser ziehen, Geräte aus abgebauten Rohstoffen, Netze, die Tag und Nacht laufen, und zunehmend große KI-Lasten, die mehr Energie brauchen als die Aufgaben, die sie ersetzen. Der Fußabdruck der Branche ist groß und wächst, und Organisationen werden von Kunden, Aufsichtsbehörden, Beschäftigten und ihren eigenen Aufsichtsgremien gefragt, wie groß ihrer ist und was sie dagegen tun.

Die Umwelt ist nur ein Teil der Sache. Services wirken auch auf Menschen. Ein unzugängliches Portal schließt Nutzer mit Behinderungen aus. Ein Support-Modell, das davon ausgeht, dass alle schnelles Internet haben, lässt die im Stich, die es nicht haben. Ein KI-Werkzeug, das mit engen Daten trainiert wurde, behandelt manche Gruppen schlechter. Ein Bereitschaftsmodell, das Engineers ausbrennen lässt, ist ein sozialer Preis, den die Menschen tragen, die den Service betreiben. Verantwortungsvolles Service-Management fragt nach alledem, nicht als Nachgedanke, sondern als Teil dessen, wie Services gestaltet, beschafft und betrieben werden.

Dies ist ein Feld, in dem Behauptungen den Belegen vorauseilen. Wikipedia beschreibt Greenwashing, die Praxis, irreführende Aussagen über ökologischen Nutzen zu machen, und es ist im Technik-Marketing verbreitet. Messungen sind oft Schätzungen mit großer Unsicherheit. Eine Einsparung an einer Stelle kann Kosten an eine andere verschieben, und Effizienzgewinne können durch stärkere Nutzung aufgehoben werden, ein Muster, das Wikipedia als Rebound-Effekt oder Jevons-Paradoxon beschreibt. Dieses Thema gibt einen praktischen Ansatz: Kennen Sie Ihre Hauptwirkungen, messen Sie ehrlich, handeln Sie dort, wo die Wirkung am größten und der Aufwand am geringsten ist, und seien Sie vorsichtig mit dem, was Sie behaupten. Es verbindet sich mit Hardware (Thema 4.3 — Hardware-Asset-Management), Finanzen (Thema 4.5 — Finanzmanagement und FinOps), KI-Governance (Thema 5.6 — KI-Governance, Risiko und Compliance) und Governance (Thema 8.1 — Governance, Risiko und Compliance). Es gibt keine Rechtsberatung; Berichtspflichten unterscheiden sich nach Ort.

## Kernkonzepte

**Nachhaltigkeit.** In der gängigen Formulierung: gegenwärtige Bedürfnisse zu erfüllen, ohne die Fähigkeit künftiger Generationen zu gefährden, ihre zu erfüllen. Wikipedia beschreibt Sustainability als mit ökologischen, sozialen und wirtschaftlichen Dimensionen. Im Service-Management heißt das, Services so zu betreiben, dass sie Umwelt, Menschen oder künftigen Optionen keine ungerechtfertigten Kosten aufbürden.

**Umwelt, Soziales und Unternehmensführung (ESG).** Ein Rahmen, den Organisationen und Investoren nutzen, um nichtfinanzielle Leistung zu bewerten. Wikipedia beschreibt ESG. Berichtsanforderungen entwickeln sich in vielen Rechtsordnungen schnell. Ihre Organisation bittet Service-Teams womöglich um Daten. Prüfen Sie, was gilt, und führen Sie Aufzeichnungen, die Sie vertreten können.

**CO2-Fußabdruck und Emissionen.** Die Treibhausgasemissionen, die eine Tätigkeit verursacht, meist als Kohlendioxid-Äquivalent ausgedrückt. Wikipedia beschreibt Carbon footprints und Greenhouse gases. Die CO2-Bilanzierung unterscheidet gewöhnlich Emissionen aus eigenem Betrieb, aus eingekaufter Energie und aus der weiteren Wertschöpfungskette, einschließlich der Herstellung von Geräten und der Nutzung von Services der Lieferanten, was oft der größte Teil und am schwersten zu messen ist. Wikipedia beschreibt Carbon accounting und diese Kategorien.

**Eingebettete und betriebliche Wirkung.** Die eingebettete Wirkung (Embodied impact) ist das, was verbraucht wird, um ein Gerät herzustellen und zu transportieren oder eine Anlage zu bauen; die betriebliche Wirkung ist das, was beim Betrieb verbraucht wird. Bei Endgeräten ist die eingebettete Wirkung oft der größere Teil der Lebenszeit-Emissionen. Wikipedia beschreibt Embodied energy. Bei Rechenzentren überwiegt meist der Betrieb, besonders der Strom. Zu verstehen, was zutrifft, lenkt das Handeln. Siehe Thema 4.3 — Hardware-Asset-Management.

**Energie und Rechenzentren.** Rechenzentren brauchen Strom für Rechnen und Kühlen. Wikipedia beschreibt Data centers und die Power usage effectiveness (PUE), ein Verhältnis der gesamten Anlagenenergie zur Energie der Rechentechnik. Ein niedriger PUE heißt nicht niedrige Emissionen; auch die CO2-Intensität des Stroms zählt, ebenso wie die Auslastung der Geräte. Leerlaufende Server ziehen weiter Strom.

**Cloud und geteilte Infrastruktur.** Große Cloud-Anbieter arbeiten oft effizienter als kleine Räume vor Ort und können erneuerbare Energie in großem Maßstab einkaufen. Sie machen es auch leicht, mehr zu verbrauchen. Wikipedia beschreibt Cloud computing allgemein. Fragen Sie Anbieter nach Emissionsdaten je Region und Service und behandeln Sie ihre Zahlen als Schätzungen mit genannten Methoden. Der Umzug in die Cloud macht einen Service nicht von selbst grüner.

**KI und Energie.** Training und Betrieb großer Modelle können erhebliche Energie und in manchen Fällen Wasser zur Kühlung verbrauchen. Die Wirkung hängt von Modellgröße, Nutzungshäufigkeit und Betriebsort ab. Häufige Nutzung großer Modelle für Aufgaben, die eine einfache Methode erledigen könnte, verschwendet Ressourcen. Siehe Thema 5.8 — KI-Betriebsmodell und Fähigkeiten. Behandeln Sie veröffentlichte Zahlen mit Vorsicht, da Methoden und Abgrenzung variieren.

**Effiziente Software und effizienter Betrieb.** Effizienter Code, passend dimensionierte Ressourcen, das Abschalten leerlaufender Umgebungen, das Terminieren flexibler Arbeit auf Zeiten mit saubererem Strom und das Verringern unnötiger Datenspeicherung und -übertragung senken allesamt die Wirkung und meist auch die Kosten. Wikipedia beschreibt Green computing und die Praxis, für geringere Umweltwirkung zu gestalten. Siehe Thema 4.5 — Finanzmanagement und FinOps, wo Kosteneinsparungen und Emissionseinsparungen oft zusammenfallen.

**Elektroschrott und Kreislaufwirtschaft.** Weggeworfene Elektronik enthält wertvolle Materialien und Gefahrstoffe. Wikipedia beschreibt Electronic waste und den Ansatz der Circular economy, der Materialien durch Wiederverwendung, Reparatur und Recycling im Nutzen hält. Längere Gerätelebensdauer, Reparatur, Aufarbeitung und verantwortungsvolles Recycling verringern Abfall. Siehe Thema 4.3 — Hardware-Asset-Management. Die Bewegung für ein Recht auf Reparatur (Right to repair), die Wikipedia beschreibt, tritt für reparierbare Geräte ein.

**Lebenszyklus-Denken.** Alle Stufen eines Produkts oder Services betrachten, von den Materialien bis zur Entsorgung. Wikipedia beschreibt Life-cycle assessment. Es schützt davor, Wirkung von einer Stufe in eine andere zu verschieben, etwa Energie im Betrieb durch ein Gerät zu sparen, dessen Herstellung mehr Ressourcen braucht.

**Rebound-Effekte.** Effizienz kann zu mehr Nutzung führen, die den Gewinn aufhebt. Wikipedia beschreibt dies unter Rebound effect und Jevons paradox. Führt billigere Rechenleistung zu weit mehr Berechnung, kann die Gesamtwirkung steigen. Setzen Sie absolute Ziele ebenso wie Effizienzziele.

**Barrierefreiheit und Inklusion.** Services sollten für Menschen mit unterschiedlichen Fähigkeiten, Geräten, Sprachen und Konnektivität nutzbar sein. Wikipedia beschreibt Accessibility, Inclusive design und den Digital divide. Standards wie die Web Content Accessibility Guidelines setzen eine Basis für Webinhalte. Gesetze verlangen in vielen Orten Barrierefreiheit. Beziehen Sie Nutzer mit Behinderungen in Gestaltung und Test ein und halten Sie nichtdigitale Wege offen.

**Fairness und Ethik.** Services und KI-Systeme sollten Menschen fair behandeln und offen sein, wie sie funktionieren. Wikipedia beschreibt Algorithmic bias und die Ethics of artificial intelligence. Siehe Thema 5.6 — KI-Governance, Risiko und Compliance.

**Menschen und Arbeitslast.** Die Menschen, die Services betreiben, sind Stakeholder. Tragfähige Bereitschaft, angemessene Arbeitszeiten, sichere Arbeitsbedingungen und der faire Umgang mit den Beschäftigten der Lieferanten gehören zur verantwortungsvollen Praxis. Siehe Thema 2.10 — Agiles Management und Lernen.

**Verantwortungsvolle Beschaffung.** Lieferanten nach ihrer ökologischen und sozialen Praxis ebenso wie nach dem Preis auswählen. Wikipedia beschreibt Sustainable procurement. Verlangen Sie Belege, etwa veröffentlichte Emissionsdaten und Reparaturrichtlinien, und prüfen Sie Behauptungen. Siehe Thema 3.14 — Lieferantenmanagement.

**Ehrlichkeit bei der Messung.** Viele Zahlen in diesem Bereich sind Schätzungen. Nennen Sie Methode, Abgrenzung und Unsicherheit. Hüten Sie sich vor Vergleichen mit unterschiedlichen Grenzen. Vermeiden Sie Behauptungen wie „CO2-neutral“ ohne klare, überprüfbare Grundlage, denn Wikipedias Darstellung von Greenwashing zeigt, wie solche Behauptungen in die Irre führen.

**Unternehmensverantwortung.** Organisationen veröffentlichen zunehmend Verpflichtungen. Wikipedia beschreibt Corporate social responsibility. Service-Teams steuern Daten bei und treffen Entscheidungen, die bestimmen, ob Verpflichtungen eingehalten werden.

**Wie die Blickwinkel passen.** Nachhaltigkeit gilt für alle vier. Agile Praxis legt kleine, gemessene Experimente nahe, um Verschwendung zu senken. KI ist sowohl Quelle von Wirkung als auch Werkzeug, Einsparungen zu finden. Automatisierung kann leerlaufende Ressourcen abschalten und Arbeit terminieren. Analytik misst die Wirkung mit genannter Unsicherheit.

## Bewährte Praktiken

1. **Finden Sie Ihre größten Wirkungen.** Schätzen Sie, wo die größten ökologischen und sozialen Wirkungen Ihrer Services liegen: Geräte, Cloud- und Rechenzentrumsnutzung, KI-Lasten, Reisen und die Menschen, die Services betreiben. Beginnen Sie dort, wo das Potenzial am größten ist.
2. **Messen Sie mit genannten Methoden.** Nutzen Sie Lieferantendaten und Standard-Umrechnungsfaktoren, halten Sie Abgrenzung und Annahmen fest und zeigen Sie Unsicherheit. Verbessern Sie die Daten mit der Zeit.
3. **Senken Sie Verschwendung, die auch Kosten senkt.** Schalten Sie leerlaufende Umgebungen ab, dimensionieren Sie Ressourcen passend, löschen Sie unnötige Daten und konsolidieren Sie unterausgelastete Systeme. Das rechnet sich oft von selbst.
4. **Verlängern Sie die Lebensdauer von Geräten.** Reparieren, erweitern und verwenden Sie wieder, bevor Sie ersetzen, und wählen Sie reparierbare, langlebige Geräte. Entsorgen Sie über verantwortungsvolle Kanäle mit Datenlöschung.
5. **Wählen Sie, wo und wann Sie betreiben.** Nutzen Sie, wo Sie die Wahl haben, Regionen und Zeiten mit saubererem Strom und fragen Sie Lieferanten nach Daten. Vermeiden Sie Verlagerungen, die die Wirkung anderswo erhöhen.
6. **Nutzen Sie KI verhältnismäßig.** Passen Sie Modellgröße und Nutzungshäufigkeit an den Wert an. Nutzen Sie einfache Methoden, wo sie ebenso gut sind. Verfolgen Sie die Kosten und, wo verfügbar, die Energie von KI-Lasten.
7. **Gestalten und testen Sie für Barrierefreiheit.** Folgen Sie Standards zur Barrierefreiheit, testen Sie mit Nutzern mit unterschiedlichen Bedürfnissen und halten Sie alternative Wege bereit. Nehmen Sie Barrierefreiheit in die Definition of Done auf.
8. **Prüfen Sie Fairness und Ethik.** Prüfen Sie Services und KI-Nutzungen auf unfaire Wirkungen, testen Sie über Gruppen hinweg und geben Sie Menschen einen Weg, Entscheidungen anzufechten.
9. **Sorgen Sie für die Menschen, die Services betreiben.** Halten Sie Arbeitslast und Bereitschaft tragfähig und behandeln Sie die Beschäftigten der Lieferanten fair. Zählen Sie Burnout als Kosten.
10. **Seien Sie ehrlich bei Aussagen.** Sagen Sie, was Sie gemessen haben, wie und was Sie nicht wissen. Vermeiden Sie vage oder unüberprüfbare Aussagen und lassen Sie Behauptungen vor der Veröffentlichung prüfen.

## Fragen für die Diskussion im Team

**Wo liegt die größte Umweltwirkung unserer Services, und woher wissen wir es?**
Betrachten Sie Geräte, Cloud, KI und Anlagen. Rechnen Sie mit fehlenden Daten und starken Annahmen. Wählen Sie anschließend einen Bereich, den Sie mit genannter Methode schätzen.

**Welche unserer Systeme oder Umgebungen laufen die ganze Zeit und könnten abgeschaltet oder heruntergefahren werden?**
Prüfen Sie Entwicklung und Test. Rechnen Sie mit leerlaufenden. Terminieren Sie anschließend Abschaltungen für eine Umgebung und halten Sie die Einsparung fest.

**Wie lange behalten wir Geräte, und was hindert uns, sie länger zu behalten oder zu reparieren?**
Fragen Sie nach Richtlinie und Gewohnheit. Rechnen Sie mit Erneuerung nach Kalender. Erproben Sie anschließend längere Lebensdauer für eine Gruppe.

**Wer kann unsere Services nicht wie gestaltet nutzen, und woher wissen wir es?**
Denken Sie an Behinderung, Sprache, Konnektivität und Selbstvertrauen. Rechnen Sie damit, dass manche Gruppen nicht getestet wurden. Beobachten Sie anschließend einige Nutzer aus diesen Gruppen.

**Welche KI-Nutzungen haben wir eingeführt, wo eine einfachere Methode genügte, und was kosten sie an Ressourcen?**
Gehen Sie die Liste durch. Rechnen Sie damit, dass manche modisch sind. Vergleichen Sie anschließend eine KI-Nutzung mit einer einfachen Alternative bei Qualität und Kosten.

**Welche Aussagen zur Nachhaltigkeit haben wir gemacht oder sollten wir machen, und können wir jede belegen?**
Sammeln Sie sie. Rechnen Sie damit, dass manche sich nicht überprüfen lassen. Prüfen Sie anschließend jede mit den Menschen, die die Daten halten.

## In der Praxis: ein Beispiel aus dem Service-Management

Die IT-Abteilung einer Nationalbibliothek wurde von ihrem übergeordneten Ministerium gebeten, über die Umweltwirkung ihrer digitalen Services zu berichten und Verringerungen vorzuschlagen. Die Abteilung hat 400 Beschäftigte, 6.000 Geräte in 300 Zweigstellen, einen in der Cloud gehosteten Katalog und einen neuen KI-Suchassistenten.

Die Service-Managerin beginnt damit, die Hauptquellen zu schätzen. Für Geräte zeigen Beschaffungs- und Asset-Aufzeichnungen 4.800 Laptops und Desktops mit einem Durchschnittsalter von 4,1 Jahren. Anhand von Lebenszyklus-Zahlen der Hersteller, die sie als Schätzungen vermerkt, kommt sie zu dem Urteil, dass die eingebettete Wirkung der im Jahr gekauften Geräte der größte Einzelposten ist. Für die Cloud liefert das Emissions-Dashboard des Anbieters eine monatliche Schätzung je Region, die sie mit der genannten Methode des Anbieters festhält. Die Nutzung des KI-Assistenten ist im Vergleich zu anderen Posten klein, aber wachsend, und der Lieferant gibt keine Energiedaten an.

Sie schlägt vier Maßnahmen vor. Den Laptop-Austauschzyklus von vier auf fünf Jahre verlängern, wo die Gesundheitsdaten es erlauben, mit Reparatur von Akkus und Speicher. Die Entwicklungs- und Testumgebungen nachts und an Wochenenden abschalten, was auch etwa ein Fünftel der Cloud-Kosten spart. Eine Batch-Last in eine Region mit CO2-ärmerem Stromnetz verlagern, nachdem geprüft wurde, dass die Latenz akzeptabel ist. Und den KI-Lieferanten um Energie- und Wasserdaten bitten und eine Regel setzen, dass der Assistent nur für offene Fragen genutzt wird, mit einfacher Suche für bekannte Einträge.

Auf der sozialen Seite beauftragt die Abteilung einen Barrierefreiheitstest des Portals mit fünf Beschäftigten und Besuchern, die Screenreader nutzen, und einer Person mit Sprachsteuerung. Er findet, dass das Buchungsformular allein mit der Tastatur nicht ausgefüllt werden kann, und das Team behebt es. Außerdem überprüft sie den Bereitschaftsplan, in dem zwei Engineers zeitweise 24 Stunden abdecken; sie ergänzt eine dritte Person.

Was sich ändert: Das Ministerium erhält einen ersten Bericht mit Methoden und Spannen, und die Abteilung hat vier verfolgte Maßnahmen. Was schwierig bleibt: Die Zahlen zur eingebetteten Wirkung beruhen auf Herstellerdurchschnitten und lassen sich nicht verifizieren; der Lieferant hat keine Energiedaten genannt; eine Umweltaussage in einem Pressemitteilungsentwurf („ein CO2-neutraler digitaler Service“) wird zurückgezogen, weil die Abteilung sie nicht belegen kann; und der längere Austauschzyklus erhöht den Support-Aufwand für ältere Geräte. Die Managerin berichtet die Unsicherheiten und plant eine Überprüfung der Support-Kosten.

## Vier Perspektiven

### Produkt- und Delivery-Teams

Gestalten Sie für Effizienz und Barrierefreiheit: schlanke Seiten, effiziente Abfragen, passend dimensionierte Ressourcen sowie Tastatur- und Screenreader-Unterstützung. Wählen Sie KI-Methoden im Verhältnis zum Bedarf und testen Sie mit vielfältigen Nutzern.

### Service- und Betriebsteams

Schalten Sie ab, was leerläuft, reparieren und verwenden Sie Geräte wieder, erfassen Sie Daten zu Energie und Abfall und halten Sie die Bereitschaft tragfähig. Sagen Sie Verantwortlichen, wo die Wirkung am höchsten ist.

### Führung und Governance

Setzen Sie Ziele mit absoluten Vorgaben und ehrlicher Messung und finanzieren Sie die Arbeit. Prüfen Sie Aussagen vor der Veröffentlichung. Beziehen Sie Menschen ein, nicht nur CO2, in das, was Sie zählen.

### Kunden und Nutzer

Sie sollten Services unabhängig von Fähigkeit oder Verbindung nutzen können und ehrliche Informationen über ihre Wirkung erwarten. Sagen Sie Anbietern, was für Sie nicht funktioniert und was Sie sich wünschen.

## Agilität, KI, Automatisierung und Analytik

### Agilität

Probieren Sie kleine Änderungen, etwa geplante Abschaltungen oder eine leichtere Seite, messen Sie die Wirkung und behalten Sie, was funktioniert. Beziehen Sie Nutzer mit unterschiedlichen Bedürfnissen in Reviews ein. Vorsicht: Führen Sie kein großes „grünes Programm“ ohne Messgrößen durch; wählen Sie Maßnahmen mit Belegen.

### KI

KI kann helfen, leerlaufende Ressourcen zu finden, Nutzungs- und Energiedaten zu analysieren und Entwürfe auf Barrierefreiheitsprobleme zu prüfen, unter Prüfung. KI hat selbst einen ökologischen Fußabdruck und Verzerrungsrisiken. Vorsicht: Behaupten Sie nicht, KI spare Energie, ohne mit der Energie zu vergleichen, die sie verbraucht; messen Sie beides. Siehe Thema 5.8 — KI-Betriebsmodell und Fähigkeiten.

### Automatisierung

Automatisieren Sie das Abschalten leerlaufender Umgebungen, das Terminieren flexibler Lasten und das Aufräumen ungenutzter Daten, mit Verantwortlichen und Sicherungen. Vorsicht: Automatisches Löschen kann benötigte Daten entfernen; nutzen Sie Aufbewahrungsregeln und Überprüfung. Siehe Thema 6.1 — Automatisierungsstrategie.

### Analytik

Erfassen Sie Energie, Emissionsschätzungen, Gerätealter und Ausfalldaten, Cloud-Nutzung und Ergebnisse von Barrierefreiheitstests, mit genannter Methode und Unsicherheit. Vorsicht: Emissionszahlen variieren je nach Methode stark, und einmalige Verbesserungen können durch Wachstum zunichtegemacht werden; verfolgen Sie absolute Summen und Trends. Siehe Thema 7.3 — Messung und Berichtswesen und das Buch *Service Management Metrics*.

## Häufige Fehlermuster

- **Aussagen ohne Belege.** Aussagen wie „CO2-neutral“ lassen sich nicht belegen. Nennen Sie Methoden und Grenzen und prüfen Sie Aussagen.
- **Das Problem verschieben.** Die Wirkung wandert in eine andere Stufe oder zu einem anderen Lieferanten. Denken Sie in Lebenszyklen.
- **Effizienz ohne Grenzen.** Einsparungen werden durch mehr Nutzung aufgehoben. Setzen Sie absolute Ziele.
- **Barrierefreiheit als Nachgedanke.** Manche Nutzer sind ausgeschlossen. Bauen und testen Sie sie ein.
- **Überdimensionierte KI.** Große Modelle erledigen einfache Aufgaben. Passen Sie die Methode an den Bedarf an.
- **Die Menschen ignorieren, die Services betreiben.** Burnout und Fluktuation steigen. Behandeln Sie Arbeitslast als Teil der Nachhaltigkeit.
- **Keine Daten.** Entscheidungen beruhen auf Vermutungen. Erfassen Sie, was Sie können, mit Unsicherheit.

## Reifegradmodell

| Dimension | Initiieren | Entwickeln | Standardisieren | Steuern | Orchestrieren |
|---|---|---|---|---|---|
| Messung | Keine | Grobe Schätzungen | Hauptwirkungen mit genannten Methoden geschätzt | Daten verbessert und an Zielen verfolgt | Wirkungsdaten mit Kosten, Planung und Lieferanten integriert |
| Handeln | Ad hoc | Einige Einsparungen | Standardpraktiken: Abschalten, passende Dimensionierung, Gerätelebensdauer | Maßnahmen verfolgt und überprüft | Wirkung in Gestaltung, Beschaffung und Betrieb eingebaut |
| Inklusion und Ethik | Nicht bedacht | Bewusstsein | Prüfungen zu Barrierefreiheit und Fairness Standard | Ergebnisse über Gruppen hinweg gemessen | Inklusive Gestaltung und Fairness über Services integriert |
| Ehrlichkeit | Ungeprüfte Aussagen | Bewusstsein | Aussagen an Belegen geprüft | Aussagen auditiert | Transparentes Berichten mit unabhängiger Absicherung |

## Checkliste

- [ ] Wir haben unsere Hauptumweltwirkungen mit genannten Methoden geschätzt.
- [ ] Wir schalten leerlaufende Umgebungen ab oder fahren sie herunter.
- [ ] Wir reparieren, verwenden wieder, verlängern die Gerätelebensdauer und entsorgen verantwortungsvoll.
- [ ] Wir fragen Lieferanten nach Emissions- und Energiedaten und halten ihre Methoden fest.
- [ ] KI-Nutzungen sind verhältnismäßig, mit erfassten Kosten und, wo möglich, Energie.
- [ ] Services werden mit realen Nutzern auf Barrierefreiheit getestet.
- [ ] Bereitschaft und Arbeitslast sind tragfähig.
- [ ] Nachhaltigkeitsaussagen werden vor der Veröffentlichung an Belegen geprüft.

## KI-Prompts

**Strukturieren Sie eine Wirkungsschätzung.**

```text
Here are our facts: number and age of devices [paste], cloud usage by region [paste], AI usage [paste], and any supplier emissions data [paste].
Draft a table of impact sources, the data we have for each, the missing data, the method we could use, and the main uncertainty. Do not invent emission factors or figures.
List what you are unsure of.
```

**Prüfen Sie eine Nachhaltigkeitsaussage.**

```text
Here is a draft statement about our service's environmental impact: [paste]. Here is the evidence we have: [paste].
For each claim, say whether the evidence supports it, partly supports it, or does not, quoting the text, and list what is missing. Do not rewrite the claim.
List what you are unsure of.
```

**Planen Sie einen Barrierefreiheitstest.**

```text
Our service: [describe]. Our users: [groups]. Known issues: [list].
Draft a test plan with tasks real users would attempt, the assistive technologies and devices to include, what to record, and how to report results. Do not claim any standard is met.
List what you are unsure of.
```

## KI-Skills

- [roi-analysis](../../../../skills/roi-analysis/SKILL.md): nutzen Sie ihn, um Kosten und Nutzen wirkungsmindernder Optionen abzuwägen.
- [stakeholder-analysis](../../../../skills/stakeholder-analysis/SKILL.md): nutzen Sie ihn, um zu erkennen, wer betroffen ist und wer fehlt.
- [risk-register](../../../../skills/risk-register/SKILL.md): nutzen Sie ihn, um ökologische und soziale Risiken mit Verantwortlichen festzuhalten.
- [capacity-planning](../../../../skills/capacity-planning/SKILL.md): nutzen Sie ihn, um Ressourcen passend zu dimensionieren.
- [vendor-management](../../../../skills/vendor-management/SKILL.md): nutzen Sie ihn, um Lieferanten nach Daten und Verpflichtungen zu fragen.

## Wichtige Quellen

- Die Green Software Foundation (greensoftware.foundation): Leitlinien und Standards der Community zu Software und CO2.
- W3C, Web Content Accessibility Guidelines (WCAG): der internationale Standard für barrierefreie Webinhalte.
- Wikipedia, „Sustainability“ und „Greenwashing“: Überblicke über das Feld und die Hauptgefahr bei Aussagen.
- Wikipedia, „Electronic waste“ und „Circular economy“: Hintergrund zu Geräten und Materialien.

## Literaturverzeichnis

1. Sustainability — Wikipedia — https://en.wikipedia.org/wiki/Sustainability
2. Environmental, social, and governance — Wikipedia — https://en.wikipedia.org/wiki/Environmental,_social,_and_governance
3. Carbon footprint — Wikipedia — https://en.wikipedia.org/wiki/Carbon_footprint
4. Carbon accounting — Wikipedia — https://en.wikipedia.org/wiki/Carbon_accounting
5. Green computing — Wikipedia — https://en.wikipedia.org/wiki/Green_computing
6. Data center — Wikipedia — https://en.wikipedia.org/wiki/Data_center
7. Power usage effectiveness — Wikipedia — https://en.wikipedia.org/wiki/Power_usage_effectiveness
8. Electronic waste — Wikipedia — https://en.wikipedia.org/wiki/Electronic_waste
9. Circular economy — Wikipedia — https://en.wikipedia.org/wiki/Circular_economy
10. Greenwashing — Wikipedia — https://en.wikipedia.org/wiki/Greenwashing
11. Rebound effect (conservation) — Wikipedia — https://en.wikipedia.org/wiki/Rebound_effect_(conservation)
12. Accessibility — Wikipedia — https://en.wikipedia.org/wiki/Accessibility
