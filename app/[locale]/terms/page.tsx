import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import bg from '@/public/images/bgsections.webp';
import { routing } from '@/lib/i18n/routing';

// Generate static paths for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'terms' });
  const isGerman = locale === 'de';

  // Terms content based on locale
  const content = isGerman ? (
    <div className="space-y-8 text-base leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Gegenstand und Geltungsbereich</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">1.1 Gegenstand</h3>
        <p className="mb-4">
          Gegenstand dieser Allgemeinen Geschäftsbedingungen (AGB) sind Dienstleistungen in
          den Bereichen aktuell aufgeführt im Dienstleistungsportfolio auf www.creative-
          factor.com. Die Art der Dienstleistungen und Werke im Einzelnen ergibt sich aus der von
          der RGPE (Roland Gropp ProEntertainment) angewandten, bewährten und eigene
          entwickelten Dienstleistungs-, Beratungs- und Managementkonzepte, dem Angebot (auf
          Basis Pflichtenheft), den Umsetzungsvorschlägen und den Einzelaufträgen.
        </p>
        <p className="mb-4">
          Die allgemeinen Geschäftsbedingungen gelten für sämtliche Dienstleistungs-,
          Beratungs- und Managementangebote und Verträge, unabhängig von Inhalt und
          Rechtsnatur, der von der RGPE Dienstleistungs-, Beratungs- und
          Managementangebotenen bzw. vertraglich übernommen Dienst-, Beratungs- und
          Managementleistungen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">1.2 Geltungsbereich</h3>
        <p className="mb-4">
          Diese AGB sind wesentlicher Bestandteil jedes abgeschlossenen schriftlichen oder
          mündlichen Vertrages, soweit nicht im Einzelnen schriftlich Abweichendes vereinbart
          ist. Mündliche oder telefonische Nebenabreden jeder Art, auch mit Vertretern oder
          Mitarbeitern der RGPE gelten als unverbindliche Vorbesprechungen, solange sie nicht
          von der RGPE schriftlich bestätigt worden sind. Abweichende Geschäftsbedingungen des
          Auftraggebers sowie Änderungen und Ergänzungen dieser AGB haben nur Gültigkeit,
          soweit sie von der RGPE schriftlich anerkannt sind. Soweit Dienstleistungs-, Beratungs-
          und Managementverträge oder –angeboten schriftliche Bestimmungen enthalten, die
          von den folgenden allgemeinen Bedingungen abweichen, gehen die individuell
          angebotenen oder vereinbarten Vertragsregeln diesen AGB vor.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">1.3 Gültigkeit</h3>
        <p className="mb-4">
          RGPE ist berechtigt, die vorliegenden AGB jederzeit zu ändern bzw. diese bei Änderung
          einer gesetzlichen Vorschrift anzupassen. Dem Auftraggeber wird eine Änderung der
          AGB rechtzeitig mitgeteilt. Wird dieser Änderung nicht innerhalb eines Monates nach
          Zugang widersprochen, so gilt diese vom Anbieter als genehmigt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">2. Angebot und Vertragsschluss</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">2.1 Angebot</h3>
        <p className="mb-4">
          Die Angebote der RGPE sind freibleibend bis zum Festabschluss. Die RGPE hält sich 2
          Wochen an ein von der Geschäftsführung abgegebenes Angebot gebunden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.2 Vertrags-/Auftragsgegenstand</h3>
        <p className="mb-4">
          Gegenstand der Aufträge sind die vereinbarten, im Vertrag bezeichnete/n
          Dienstleistung/en, Beratungstätigkeit/en jeder Art, nicht jedoch die Erzielung eines
          bestimmten wirtschaftlichen Erfolges.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.3 Vertragsschluss/Auftragsgültigkeit</h3>
        <p className="mb-4">
          Aufträge des Auftraggebers gelten erst durch schriftliche Auftragsbestätigung der RGPE
          als angenommen, sofern dies die RGPE nicht – etwa durch Tätigwerden auf Grund des
          Auftrages – zu erkennen gibt. Die RGPE behält sich vor, Aufträge abzulehnen.
          Auftragsbestätigungen der RGPE ersetzen einen Auftrag des Vertragspartners, wenn
          nicht binnen drei Tagen schriftlich widersprochen wird.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.4 Preisgültigkeit</h3>
        <p className="mb-4">
          Alle in Beratungsbeschreibungen sowie Angeboten, Preislisten und Prospekten
          gemachten Angaben sind stets freibleibend und verlieren mit der Veröffentlichung
          neuer Preisinformationen oder Abgabe neuer Angebote ihre Gültigkeit.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.5 Kostenlose Leistungen</h3>
        <p className="mb-4">
          Kostenlose Leistungen, mit dem Ziel einer späteren Auftragserteilung oder Vergütung,
          werden nicht erbracht. Die Entwicklung konzeptioneller Dienstleistungs-,
          Strukturierung- bzw. Lösungsvorschläge, Handlungsempfehlungen und/oder
          Umsetzungsplänen (Masterplan), etc. durch die RGPE sowie deren Vorstellung werden
          generell in Rechnung gestellt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.6 Eigentum- und Urheberrechte</h3>
        <p className="mb-4">
          Die Eigentums- und Urheberrechte der entwickelten und ausgeführten Dienstleistung,
          Lösungen, Konzepte, Strategien verbleiben bei der RGPE. Die Weitergabe an Dritte ist
          nicht gestattet. Nachdruck, Vervielfältigung, Weiterverwendung – auch auszugsweise –
          nur mit schriftlicher Genehmigung der RGPE.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">3. Leistungen</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1 Mitwirkungsverpflichtung Auftraggeber</h3>
        <p className="mb-4">
          Um der RGPE die gewünschte professionelle Arbeit zu ermöglichen, wird der
          Auftraggeber die RGPE zu seiner Vorstellung betreffend der Dienstleistung, zur
          geschäftlichen, organisatorischen, technischen und wettbewerblichen Situation seines
          Unternehmens möglichst umfassend und zeitgerecht – ohne schuldhafte Verzögerung –
          umfassend informieren.
        </p>
        <p className="mb-4">
          Der Auftraggeber wird insbesondere persönlich und, soweit erforderlich, auch durch
          seine Mitarbeiterin der/den Dienstleistung/en und in den/m Projekt/en
          (Auftragsgegenstand) mitarbeiten wie folgt:
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1.1 Auskunftsverpflichtung Auftraggeber</h3>
        <p className="mb-4">
          Sämtliche Fragen der RGPE-Dienstleister/Berater über die tatsächlichen und rechtlichen
          Verhältnisse innerhalb des Kundenunternehmens werden möglichst vollständig,
          zutreffend und kurzfristig beantwortet; ebenso Fragen der RGPE-Dienstleister/Berater
          über die tatsächlichen und rechtlichen Verhältnisse zwischen dem Auftraggeber und
          seinen Geschäftspartnern und Wettbewerbern, soweit diese Verhältnisse dem
          Auftraggeber und/oder seinen Führungskräften bekannt sind. Die RGPC-
          Dienstleister/Berater werden nur solche Fragen stellen, deren Beantwortung von
          Bedeutung für die Auftrags-/Dienstleistungserfüllung sein kann.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1.2 Informationspflicht Auftraggeber</h3>
        <p className="mb-4">
          Die RGPE wird auch ungefragt und möglichst frühzeitig über solche Umstände
          informiert, die von Bedeutung für die Auftragserfüllung sein können.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1.3 Prüfpflicht Auftraggeber</h3>
        <p className="mb-4">
          Die von der RGPE vorgeschlagenen bzw. gelieferten Vorbereitungen bzw.
          Zwischenergebnisse und Zwischenberichte werden vom Kunden unverzüglich daraufhin
          überprüft, ob die darin enthaltenen Aktionen für die Vorbereitung und/oder
          Durchführung der Dienstleistung oder Informationen über den Auftraggeber bzw. sein
          Unternehmen zutreffen; etwa erforderliche Korrekturen und ebenso
          Änderungswünsche werden der RGPE unverzüglich schriftlich mitgeteilt.
        </p>
        <p className="mb-4">
          Sofern durch den Auftraggeber keine Korrekturaufforderung bzw. Änderungswünsche
          innerhalb eines Prüfzeitraumes von 10 Werktagen an die RGPE ergeht, gilt die
          Vorbereitung der Dienstleistung und ihre in dieser Hinsicht vereinbarte Durchführung
          als akzeptiert bzw. die durchgeführte (Dienst-)Leistung bzw. vereinbarte
          Teil(dienst)leistung (Meilenstein/e) als erbracht und abgenommen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.2 Auftragsgegenstand</h3>
        <p className="mb-4">
          Die von der RGPE zu erbringenden (Dienst-)Leistungen und Ziele werden im Einzelnen
          in einer gesonderten, zwischen dem Auftraggeber und Auftragnehmer zu treffenden
          Vereinbarung festgeschrieben bzw. ergeben sich aus der Erteilung des Auftrages. Die
          Dienstleistung, Beratungsleistung bzw. Managementleistung wird nach den Wünschen
          und Angaben des Auftraggebers erbracht.
        </p>
        <p className="mb-4">
          Die RGPE verpflichtet sich aufgrund der Treuebindung gegenüber dem Auftraggeber zu
          einer objektiven, auf die jeweilige Zielsetzung ausgerichteten Dienstleistung, Beratung
          bzw. Management sowie, wenn notwendig, einer entsprechenden Auswahl Dritter für
          die Vertragserfüllung. Sofern der Auftraggeber sich ein Mitspracherecht nicht
          ausdrücklich vorbehalten hat, erfolgt die Auswahl Dritter durch die RGPE unter
          Beachtung des Grundsatzes eines ausgewogenen Verhältnisses von Wirtschaftlichkeit
          und bestmöglichem Erfolg in der Erbringung der (Dienst-)Leistung im Sinne des
          Auftraggebers.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.3 Erfüllungs- und Liefertermin</h3>
        <p className="mb-4">
          Erfüllungs- und Liefertermine sind nur verbindlich, wenn diese von der RGPE schriftlich
          als verbindlich bestätigt wurden. Die vertragsgemäße Erfüllung der Leistungen setzt die
          rechtzeitige und ordnungsgemäße Erfüllung der Verpflichtungen des Auftraggebers
          voraus. Der Auftragnehmer bemüht sich, die vereinbarten Termine einzuhalten.
        </p>
        <p className="mb-4">
          Die Nichteinhaltung der Termine berechtigt den Auftraggeber allerdings erst dann zur
          Geltendmachung der ihm gesetzlich zustehenden Rechte, wenn er der RGPE eine
          angemessene Nachfrist gewährt hat. Diese Frist beginnt mit dem Zugang eines
          Eskalationsbescheides an die RGPE. Eine Verpflichtung zur Leistung von Schadenersatz
          aus dem Titel des Verzuges besteht nur bei Vorsatz oder grober Fahrlässigkeit der RGPE.
          Bei bestimmten Dienstleistungen verpflichtet sich die RGPE den vereinbarten Termin
          nach Rücksprache mit dem Auftraggeber unbedingt einzuhalten. Dies wird separat
          schriftlich bestätigt.
        </p>
        <p className="mb-4">
          Unabwendbare oder unvorhersehbare Ereignisse, insbesondere Verzögerungen bei
          Auftragnehmern unter der Bezeichnung Dritte (3.2), entbinden die RGPE von der
          Einhaltung des vereinbarten Liefertermins.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.4 Zeichnungsberechtigung Ansprechpartner des Auftraggebers</h3>
        <p className="mb-4">
          Die vom Auftraggeber benannten Ansprechpartner müssen insbesondere im Hinblick
          auf die Freigabe von Etats, Kostenvoranschlägen, Freizeichnung, Vorgehen und
          sonstigen Abstimmungsvorgängen zeichnungsberechtigt sein. Einschränkungen der
          Zeichnungsberechtigung müssen vom Auftraggeber rechtzeitig schriftlich der RGPE
          mitgeteilt werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.5 Abrechnungsgrundlage</h3>
        <p className="mb-4">
          Grundlage der Abrechnung ist der aktuelle Preis bei Auftragserteilung
          (Auftragsbestätigung) gemäß Vereinbarung oder Angebot. Die Leistungen werden
          unmittelbar mit Vertragsabschluss (Auftragsbestätigung) oder nach Auftragsbuchung
          erbracht.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.6 Vergütungsanspruch</h3>
        <p className="mb-4">
          Sofern nichts anderes vereinbart ist, beginnt der Vergütungsanspruch für jede einzelne
          Leistung, sobald diese erbracht wurde. Die Rechnung wird per E-Mail (PDF-Datei) oder
          per Post übersandt und ist sofort nach Rechnungsstellung ohne Abzüge zu begleichen.
          Als sofort im Sinne dieser AGB wird ein Zeitraum von 5 Werktagen angenommen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">4. Laufzeit und Kündigung</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">4.1 Laufzeit</h3>
        <p className="mb-4">
          Für Dienst- und Beratungsleistungen gelten grundsätzlich die vertraglichen Regelungen.
          Pauschalverträge (z. B. Monats- oder Etatpauschalen), besitzen eine
          Mindestvertragslaufzeit von 3 Monaten und verlängern sich nach den Bedingungen des
          Vertrages entsprechend automatisch um weitere 3 Monate bzw. die im Vertrag separat
          angegebene Zeit, sofern nicht innerhalb einer Frist von vier Wochen vor Ablauf der
          jeweiligen Vertragslaufzeit schriftlich gekündigt wird.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2 Kündigung</h3>
        <p className="mb-4">
          Kündigungen von Aufträgen müssen schriftlich und in Briefform erfolgen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.1 Kündigung aus wichtigem Grund</h3>
        <p className="mb-4">
          Das Recht zur Kündigung aus wichtigem Grund bleibt unberührt. Als ein solcher
          wichtiger Grund gilt insbesondere:
        </p>
        <p className="mb-4">
          a) die Eröffnung des Insolvenzverfahren über das Vermögen des jeweiligen Nutzers bzw.
          das Stellen eines Antrags auf Eröffnung des Insolvenzverfahren sowie die Ablehnung
          eines solchen Antrags mangels Masse oder
        </p>
        <p className="mb-4">
          b) der Verstoß gegen wesentliche Bestimmungen oder Bedingungen dieser AGB oder
        </p>
        <p className="mb-4">
          c) wenn der Auftraggeber mit der Bezahlung der geschuldeten Vergütung über einen
          Zeitraum von zwei Monaten in Verzug kommt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.2 Vorzeitige Kündigung</h3>
        <p className="mb-4">
          Soweit keine andere individuelle vertragliche Vereinbarung getroffen ist, räumt die
          RGPE dem Kunden das Recht ein, jeden Dienstleistungs-, Beratungs- und
          Managementvertrag vorzeitig zu kündigen, wenn der Kunde dies wünscht. Die
          vorzeitige Kündigung lässt vereinbarte Verschwiegenheitspflichten und sonstige
          nachvertragliche Treuepflichten unberührt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.2.1 Vergütungsanspruch</h3>
        <p className="mb-4">
          Die bis zum Zugang einer vorzeitigen Kündigung entstandenen
          Dienstleistungen/Auftragsgegenstände der RGPE sind abzurechnen und zu zahlen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.2.2 Vorzeitige Kündigung durch Auftragnehmer</h3>
        <p className="mb-4">
          Die Bestimmungen aus Abschnitt aus 4.2.2 ff sind entsprechend anzuwenden, wenn die
          RGPE den Vertrag vor dem ursprünglich vereinbarten Abschluss rechtswirksam beendet
          hat.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">5. Datenschutz, Datensicherung, Geheimhaltung</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">5.1 Datenschutz</h3>
        <p className="mb-4">
          Die RGPE ist berechtigt, im gesetzlich zulässigen Rahmen, insbesondere nach Maßgabe
          von § 28 Bundesdatenschutzgesetz, personenbezogene Daten der
          Auftraggeber/Teilnehmer, insbesondere die bei der Anmeldung abgefragten
          Teilnehmerdaten bzw. Unternehmensdaten zu erheben, zu speichern, zu verarbeiten
          und ausschließlich zur Erfüllung des Auftrages zu verwenden.
        </p>
        <p className="mb-4">
          Die Vertragspartner sind verpflichtet, die Verarbeitung von personenbezogenen Daten
          nur im Rahmen der einschlägigen datenschutzrechtlichen Vorschriften, insbesondere
          unter Einhaltung der zu treffenden und organisatorischen Sicherheitsmaßnahmen,
          durchzuführen. Sie verpflichten alle von Ihnen zur Durchführung der Datenverarbeitung
          eingesetzten Partner auf die Einhaltung dieser Vorschrift.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">5.2 Datensicherung</h3>
        <p className="mb-4">
          Wenn die von der RGPE übernommenen Dienstleistungen/Aufgaben Arbeiten an oder
          mit EDV-Geräten des Auftraggebers mit sich bringen, wird der Auftraggeber rechtzeitig
          vor Beginn der entsprechenden Tätigkeiten informiert. Der Auftraggeber wird
          sicherstellen, dass die aufgezeichneten Daten im Fall einer Vernichtung oder
          Verfälschung mit vertretbarem Aufwand aus maschinenlesbaren Datenträgern
          rekonstruiert werden können.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">5.3 Geheimhaltung</h3>
        <p className="mb-4">
          Über den beschriebenen Umfang hinaus wird die RGPE personenbezogene und
          betriebsinterne Daten des Auftraggebers nicht über die Dienstleistung bzw. den Auftrag
          hinaus nutzen oder weitergeben. Zur Wahrung berechtigter Interessen des
          Auftraggebers und des Auftragnehmers wird unter keinen Umständen und zu keiner
          Zeit auf den Auftraggeber, die Dienstleistung, den Auftrag oder den Gegenstand des
          Auftrages referenziert.
        </p>
        <p className="mb-4">
          Hiervon ausgenommen ist die Verpflichtung der Herausgabe von Informationen
          aufgrund gesetzlicher Regelungen und behördlicher Anordnungen.
        </p>
        <p className="mb-4">
          Die Vertragspartner verpflichten sich, sämtliche ihnen bei der Zusammenarbeit bekannt
          werdenden Informationen der anderen Vertragspartei und deren Repräsentanten sowie
          der mit ihnen verbundenen oder in Geschäftsbeziehung stehenden Firmen geheim zu
          halten. Die Parteien stehen dafür ein, dass eine entsprechende Geheimhaltungspflicht
          mit ihren Mitarbeitern und mit den von ihnen beauftragten Unternehmen abgesprochen
          wird. Diese Geheimhaltungspflicht gilt sowohl während der Dauer des Vertrages als
          auch über die Dauer des Vertrages hinaus.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">6. Rechnungsstellung, Vergütung, Zahlungsbedingungen</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">6.1 Rechnungsstellung</h3>
        <p className="mb-4">
          Bei Fehlen abweichender Vereinbarungen ist die RGPE berechtigt, Auslagen oder
          Honorare je nach Anfall monatlich im Nachhinein dem Auftraggeber in Rechnung zu
          stellen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.2 Fälligkeit</h3>
        <p className="mb-4">
          Vertragsmäßig gestellte Rechnungen der RGPE sind sofort - ohne Abzüge - zur Zahlung
          fällig. (3.5) Die Rechnung wird per E-Mail (PDF-Datei) oder per Post übersandt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.3 Verzug</h3>
        <p className="mb-4">
          Ist der Auftraggeber mit dem Ausgleich fälliger Rechnungen in Verzug, so ist die RGPE
          berechtigt, ihre Arbeit an der Dienstleistung bzw. dem Projekt/Auftrag einzustellen, bis
          diese Forderungen erfüllt sind.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.3.1 Verzugszinsen</h3>
        <p className="mb-4">
          Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5% über dem jeweiligen
          Basiszinssatz der Europäischen Zentralbank erhoben. Die Geltendmachung eines
          nachgewiesenen höheren Schadens bleibt davon unberührt. Die Verzugszinsen fallen bei
          Überschreitung des Zahlungszieles auch ohne Mahnung an.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.3.2 Mahngebühr</h3>
        <p className="mb-4">
          Bei Verzug wird pro Mahnung eine Bearbeitungsgebühr von 5 EUR erhoben. Kommt der
          Auftraggeber nach einer Mahnung mit Fristsetzung seinen Zahlungsverpflichtungen
          nicht nach, kann die RGPE das Vertragsverhältnis fristlos kündigen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.4 Preis</h3>
        <p className="mb-4">
          Maßgebend sind die im Angebot genannten Preise zuzüglich der jeweils geltenden
          Mehrwertsteuer.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.5 Zusatzleistungen/Mehraufwand</h3>
        <p className="mb-4">
          Zusatzleistungen, die nicht in der Auftragsbestätigung oder dem Angebot bzw. Preisliste
          enthalten sind, sind gesondert zu vergüten. Dies gilt insbesondere für Mehraufwand
          infolge des Vorlegens eines expliziten Bedarfs, wie Aufwandsentstehung durch
          Inanspruchnahme von Leistungen Dritter, in Auftrag gegebene Recherchen, rechtliche
          Prüfungen sowie anderweitige als vorgenannte Dienstleistungen im Kontext der
          ursprünglichen Beauftragung, die aufgrund eines Umstandes, den der Auftraggeber zu
          vertreten hat, erbracht werden.
        </p>
        <p className="mb-4">
          Die Auslagen der RGPE, die im Rahmen der Durchführung entstehen, werden gegen
          Nachweis abgerechnet.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.6 Bürokosten-Pauschale</h3>
        <p className="mb-4">
          Die RGPE behält sich vor eine prozentuale Bürokosten-Pauschale, falls keine andere
          Kostenverrechnung vereinbart wurde, zu berechnen. Zu den möglichen Auslagen
          gehören z.B. Kosten der Dokumentation (Präsentation), Kosten für
          Vervielfältigungen/Kopien, Druckleistungsbeauftragung, anfallende Porto-, Telefon-,
          Telefax- und Onlinegebühren, Botenfahrten/Transportkosten.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.7 Fahrtkosten und Spesen</h3>
        <p className="mb-4">
          Fahrtkosten und Spesen bei Reisen werden nach Aufwand bzw. gemäß Beleg
          abgerechnet. Im besonderen werden Flugtickets und Übernachtungen vom Auftraggeber
          gebucht und vorab bezahlt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.8 Überschreitung von Vertragspositionen</h3>
        <p className="mb-4">
          Voraussichtliche Überschreitungen der vereinbarten Vertragspositionen/Auftrags-
          bestätigung (Leistung/monetär), der vorläufigen Kalkulation oder des
          Kostenvoranschlages von mehr als 10% werden dem Auftraggeber unverzüglich nach
          Kenntnisnahme des verteuernden Umstandes angezeigt, es sei denn, der Auftraggeber
          hat diesen Umstand selbst verursacht.
        </p>
        <p className="mb-4">
          Wenn nichts anderes vereinbart ist, beginnt der Vergütungsanspruch für jede einzelne
          Leistung, sobald diese erbracht wurde.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9 Provisionsvereinbarung Dritter</h3>
        <p className="mb-4">
          Die RGPE behält sich das Recht vor, mit den beauftragten Dritten (3.2) marktübliche und
          vom Auftraggeber zu übernehmende Provisionen zu vereinbaren. Sach- und
          Fremdkosten werden gesondert in Rechnung gestellt. Hierzu zählen alle Kosten, die
          durch die Beauftragung Dritter entstehen. Dabei wird nach Sach- und Fremdkosten
          unterschieden sowie der zusätzlichen Handlingkosten und Reisekosten.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9.1 Fremdkosten</h3>
        <p className="mb-4">
          Fremdkosten, die bei Erstellungsarbeiten entstehen, werden - auf Wunsch auch unter
          Vorlage der Fremdrechnungen - mit einer Provision in Höhe von 10 Prozent für die
          erbrachten Leistungen Dritter sowie Übernahme des Zahlungsdienstes
          weiterberechnet (Handlingkosten).
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9.2 Sonstige Fremdkosten</h3>
        <p className="mb-4">
          Sonstige Fremdkosten oder Kosten von Zusatzleistungen, z.B. Rechtsberatungen, usw.
          werden - auf Wunsch auch unter Vorlage der Fremdrechnungen - als Durchlaufkosten
          gegen Nachweis weiterberechnet. Vorauszahlungen durch die RGPE an Dritte werden
          dem Auftraggeber zuzüglich der Handlingskosten getrennt in Rechnung gestellt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9.3 Eigen- und Fremdleistungen</h3>
        <p className="mb-4">
          Für sämtliche Eigen- oder Fremdleistungen, die über eine vereinbarte
          Pauschalvergütung hinausgehen, wird vor Arbeitsbeginn ein Kostenvoranschlag für die
          jeweils zu erbringende Leistung, der vom Auftraggeber zu genehmigen ist, erstellt. Der
          Kostenvoranschlag enthält mindestens etwa anfallende Einzelleistungen, zu erwartende
          Fremdleistungen sowie Auslagen (Plan). Kostenvoranschläge und Kalkulationen sind
          nicht verbindlich, es sei denn, dass diese ausdrücklich und schriftlich zugesichert wurde.
          Fremd- und Nebenkosten sind gegen Nachweis gesondert zu vergüten, wenn nicht
          ausdrücklich eine andere Vereinbarung getroffen wurde.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.10 Machbarkeitsprüfung</h3>
        <p className="mb-4">
          Bei einer wesentlichen Änderung der vertraglichen Pflichten des Auftragnehmers zum
          Zweck der Anpassung an die Belange des Auftraggebers wird der erforderliche
          Mehraufwand in Rechnung gestellt. Dies gilt auch für eine umfangreiche Prüfung, ob und
          zu welchen Bedingungen die Änderung oder Erweiterung durchführbar ist, soweit die
          RGPE (oder Dritte) auf die Notwendigkeit dieser Prüfung hingewiesen hat.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.11 Preisänderung</h3>
        <p className="mb-4">
          Eine Änderung der aktuellen Preise ist vorbehalten. Im Falle einer Preiserhöhung steht
          dem Auftraggeber ein Rücktrittrecht für bestätigte Aufträge zu. Das Rücktrittrecht muss
          innerhalb von 14 Tagen nach Erhalt der Mitteilung über die Preiserhöhung schriftlich in
          Papierform ausgeübt werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.12 Anzahlung</h3>
        <p className="mb-4">
          Bei Aufträgen/Projekten stellt die RGPE üblicherweise 50% der Angebotssumme bei
          Auftragserteilung in Rechnung stellen. Die restlichen 50% werden nach Abnahme bzw.
          Abschluss der Leistungen bzw. gemäß innerhalb einer gesonderten Vereinbarung auch
          teilzahlungsorientiert fällig.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.12.1 Anrechnung auf Verbindlichkeiten</h3>
        <p className="mb-4">
          Zahlungseingänge werden auf ältere Verbindlichkeiten des Auftraggebers angerechnet.
          Sind bereits Kosten der Rechtsverfolgung, wie Mahnkosten, entstanden, so kann die
          RGPE Zahlungen des Auftraggebers zunächst auf diese Kosten, dann auf die Zinsen und
          zuletzt auf die Hauptleistung anrechnen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.13 Zahlungsverpflichtung</h3>
        <p className="mb-4">
          Ändert oder bricht der Auftraggeber vorzeitig Aufträge, Arbeiten oder umfangreiche
          Planungen ab, wird der Auftraggeber alle angefallenen Kosten ersetzen und die RGPE
          von allen Verbindlichkeiten gegenüber Dritten freistellen. Die Geltendmachung
          weitergehender Ansprüche bleibt hiervon unberührt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">7. Leistungshindernisse, Leistungsverzug, Unmöglichkeit</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">7.1 Leistungshindernisse</h3>
        <p className="mb-4">
          Sind die Leistungshindernisse vorübergehender Natur, so ist die RGPE berechtigt, die
          Erfüllung ihrer Verpflichtungen um die Dauer der Verhinderung und um eine
          angemessene Anlaufzeit hinauszuschieben. Wird dagegen durch Hindernisse im Sinn
          von Abschnitt 8.2 die Leistung der RGPE dauerhaft unmöglich, so wird die RGPE von
          ihren Vertragspflichtungen frei.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.2 Leistungsverzug</h3>
        <p className="mb-4">
          Die RGPE kommt mit ihren Leistungen nur in Verzug, wenn für definierte
          Fertigstellungstermine Fixtermine vereinbart sind und die RGPE die Verzögerung zu
          vertreten hat. Nicht zu vertreten hat die RGPE beispielsweise einen unvorhersehbaren
          Ausfall eines für die Dienstleistung, das Projekt/den Auftrag vorgesehenen
          Künstlers/Trainers, Beraters, Managers der RGPE sowie höhere Gewalt und andere
          Ereignisse, die bei Vertragsschluss nicht vorhersehbar waren und der RGPE die
          vereinbarte Leistung zumindest vorübergehend unmöglich machen oder unzumutbar
          erschweren. Der höheren Gewalt gleich stehen Streik, Aussperrung und ähnliche
          Umstände, von denen die RGPE mittelbar oder unmittelbar betroffen ist, soweit nicht
          diese Maßnahmen rechtswidrig und von der RGPE verursacht worden sind.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.3 Pflichtverletzung</h3>
        <p className="mb-4">
          Soweit Pflichtverletzungen im Sinne von § 280 BGB (n.F. ab 01.01.2002) von der RGPE
          zu vertreten sind, gilt ergänzend Abschnitt 8.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.4 Ausschlussleistungen</h3>
        <p className="mb-4">
          Rechtliche und steuerliche Beraterleistungen werden durch die RGPE nicht erbracht. Die
          RGPE ist nach dem Rechtsberatungsgesetz gehindert, rechtliche Auskünfte zu erteilen.
          Die rechtliche Absicherung des Auftraggebers kann nur von Personen erfolgen, die nach
          dem Rechtsberatungsgesetz zu rechtlichen Auskünften berechtigt sind. Präsentationen
          und Beispiele der RGPE haben deshalb nur empfehlenden Charakter ohne Absicherung
          der rechtlichen Zulässigkeit. Der Auftraggeber hält die RGPE von allen eventuellen
          Ansprüchen Dritter, insbesondere aus urheber- und wettbewerbsrechtlichen Verstößen
          frei. Er trägt die Kosten einer durch seine Kommunikation verursachten
          Gegendarstellung nach Maßgabe der jeweils gültigen Tarife.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.4.1 Ausschluss Rechtsfragenprüfung</h3>
        <p className="mb-4">
          Die Prüfung von Rechtsfragen, insbesondere aus dem Bereich des Urheber-,
          Wettbewerbs- und Warenzeichenrechts; Internationales, individuell Landes-, EU-,
          Bundes- sowie Zollrecht im internationalen Warenhandel sind nicht Aufgabe RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.4.2 Haftung Informationsweitergabe</h3>
        <p className="mb-4">
          Die RGPE haftet dafür, dass im Rahmen von Maßnahmen des Vertrages Informationen
          über den Auftraggeber nur im autorisierten Umfang und mit autorisiertem Inhalt
          weitergegeben werden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">8. Gewährleistung und Haftung</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">8.1 Gewährleistung</h3>
        <p className="mb-4">
          Die RGPE leistet dem Auftraggeber Gewähr für die sachgerechte Durchführung der
          vereinbarten (Dienst-)Leistungen. Die zeitgerechte Durchführung der
          Vertragsleistungen kann nur insoweit gewährleistet werden, als es sich um
          Eigenleistungen der RGPE handelt, und ihre Erfüllung nicht auch von der Mitwirkung
          Dritter (Künstler, Trainer, Anwalt, Steuerberater, Medienagentur sowie andere Berater
          als vorgenannt) abhängt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.2 Schadenersatz</h3>
        <p className="mb-4">
          Schadenersatzansprüche des Kunden, insbesondere wegen Verzugs, Unmöglichkeit der
          Leistung, positiver Forderungsverletzung, Verschuldens bei Vertragsabschluss,
          mangelhafter oder unvollständiger Leistung, Mängelfolgeschaden oder wegen
          unerlaubter Handlungen sind ausgeschlossen, soweit sie nicht auf Vorsatz oder grober
          Fahrlässigkeit der RGPE beruhen. Die RGPE haftet nicht für Schäden, mit deren
          Entstehen im Rahmen des Vertrags nicht gerechnet werden musste. Untypische
          unvorhersehbare Schäden werden von der Haftung nicht erfasst. Zudem besteht keine
          Haftung der RGPE für mittelbare Schäden, Mängelfolgeschaden oder entgangenem
          Gewinn. Dies gilt nicht für die Haftung für zugesicherte Eigenschaften und für die
          Verletzung wesentlicher Vertragspflichten; im letzten Falle ist die Haftung auf den
          vorhersehbaren Schaden beschränkt. Als vereinbart gilt jedoch, dass die Haftung
          maximal auf das vereinbarte Honorar begrenzt ist.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.3 Haftungsauschlüsse/Haftungsbeschränkung</h3>
        <p className="mb-4 font-medium">8.3.1 Durchführungshindernisse</p>
        <p className="mb-4">
          Fällt die Durchführung eines Auftrages aus Gründen aus, die RGPE nicht zu vertreten
          hat, insbesondere wegen Ausfall von technischem Equpiment, höherer Gewalt, Streik,
          aufgrund gesetzlicher Bestimmungen, Störungen aus dem Verantwortungsbereich von
          Dritten (z.B. Partnern, Künstlern, Trainern etc.), oder Leistungsanbietern oder aus
          vergleichbaren Gründen, so wird die Durchführung des Auftrages nach Möglichkeit
          nachgeholt. Bei Nachholung in angemessener und für den Auftraggeber zumutbarer Zeit
          nach Beseitigung der Störung bleibt der Vergütungsanspruch der RGPE bestehen.
        </p>

        <p className="mb-4 font-medium">8.3.2 Dokumenteninhalte</p>
        <p className="mb-4">
          Für den Inhalt von Auftraggeber freigegebenen Dokumenten ist ausschließlich der
          Auftraggeber verantwortlich. Bei telefonisch oder anderweitig mündlich aufgegebenen
          Aufträgen und/oder Änderungen übernimmt die RGPE keine Haftung für die Richtigkeit
          der Wiedergabe. Für die zur Bearbeitung überlassenen Unterlagen des Auftraggebers
          übernimmt die RGPE keinerlei Haftung.
        </p>

        <p className="mb-4 font-medium">8.3.3 Unterlagenversand</p>
        <p className="mb-4">
          Der Versand von Unterlagen erfolgt auf Gefahr des Auftraggebers. Dies gilt auch dann,
          wenn die Versendung innerhalb des gleichen Ortes oder durch Mitarbeiter bzw.
          Fahrzeuge der RGPE erfolgt. Die RGPE ist berechtigt, aber nicht verpflichtet, Lieferungen
          jedweder Art im Namen und auf Rechnung des Auftraggebers zu versichern.
        </p>

        <p className="mb-4 font-medium">8.3.4 Datenverlust</p>
        <p className="mb-4">
          Die Verantwortung für Datenverlust ist durch den typischen
          Wiederherstellungsaufwand begrenzt. Dieser bemisst sich nach dem Schaden, der bei
          der Vornahme zumutbarer Sicherungsmaßnahmen (wie z.B. Anfertigung von
          Sicherungskopien) eingetreten wäre.
        </p>

        <p className="mb-4 font-medium">8.3.5 Öffentliches Meinungsbild</p>
        <p className="mb-4">
          Zwischen den Vertragspartnern besteht Einigkeit darüber, dass die RGPE
          Gewährleistung sich nicht auf den Inhalt, die Art und den Umfang der Reaktion in der
          Öffentlichkeit, auf Maßnahmen der kundeneigenen Öffentlichkeitsarbeit oder
          Serviceleistungen im Rahmen der Vertragsleistungen erstreckt und die Erzielung eines
          bestimmten wirtschaftlichen Erfolges durch die RGPE nicht garantiert wird.
        </p>

        <p className="mb-4 font-medium">8.3.6 Beratungsfehler</p>
        <p className="mb-4">
          Sofern etwaige Beratungsfehler darauf beruhen, dass der Auftraggeber
          Mitwirkungsobliegenheiten nicht, nicht vollständig oder nicht rechtzeitig erfüllt hat, ist
          die Haftung der RGPE ausgeschlossen. Den Nachweis der vollständigen und
          rechtzeitigen Erfüllung aller Mitwirkungsobliegenheiten wird im Streitfall der
          Auftraggeber führen. Die RGPE übernimmt ferner keine Haftung für etwaige Schäden
          des Auftraggebers, die auf Nichtbeachtung der Sicherungsobliegenheit beruhen. Für
          Vermögensschäden des Auftraggebers aus der Beratungstätigkeit wird keine Haftung
          übernommen.
        </p>

        <p className="mb-4 font-medium">8.3.7 Erfolgsgarantie</p>
        <p className="mb-4">
          Ein aus der Dienstleistung, Beratung, Management resultierender Erfolg der
          Zusammenarbeit kann von der RGPE mit Rücksicht auf die jeweilige Aufgabenstellung
          nicht garantiert werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.4 Dokumentenvernichtung</h3>
        <p className="mb-4">
          Die RGPE ist befugt, nicht zurückgeforderte Vorlagen nach Ablauf von 12 Monaten zu
          vernichten. Bei etwaigem Verlust haftet die RGPE nur im Falle grober Fahrlässigkeit.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.5 Grobe Fahrlässigkeit</h3>
        <p className="mb-4">
          Die RGPE haftet für Schäden des Auftraggebers nur, wenn und soweit sie von der RGPE
          vorsätzlich oder grob fahrlässig verursacht worden sind. Den Nachweis wird im
          Streitfall der Auftraggeber führen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.6 Verjährung</h3>
        <p className="mb-4">
          Alle etwaigen Schadensersatzansprüche gegen die RGPE verjähren spätestens nach
          Ablauf von 3 Jahren. Die Verjährungsfrist beginnt mit der Erkennbarkeit eines Schadens,
          spätestens jedoch mit Abschluss der vertragsgemäßen Tätigkeit.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">9. Urheberrechte, Nutzungsrechte und Referenznachweise</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">9.1 Urheberrechte der RGPE</h3>
        <p className="mb-4">
          Sämtliche Rechte an den Vorarbeiten inklusive der Vorbereitung der Durchführung der
          Dienstleistung, wie z.B. Entwürfen und Konzeptionen, Skripten, Lösungsszenarien sowie
          den sonstigen Arbeitsergebnissen, insbesondere urheberrechtliche Nutzungsrechte und
          das Eigentum, verbleiben auch nach Aushändigung der Arbeitsergebnisse an den
          Auftraggeber bei der RGPE, soweit sie nicht ausdrücklich schriftlich übertragen wurden.
          Der Vertragspartner erwirbt mit der vollständigen Zahlung für die Dauer des Vertrages
          an allen von der RGPE im Rahmen des Auftrages gefertigten Arbeiten sowie der
          Rechtseinräumung nach deutschem Recht oder den tatsächlichen Verhältnissen möglich
          ist, das Recht zur Nutzung im Vertragsgebiet zum vereinbarten Zweck und im
          vereinbarten Umfang.
        </p>
        <p className="mb-4">
          Soweit nichts anderes vereinbart ist, wird jeweils nur das einfache Nutzungsrecht
          übertragen. Für die Übertragung der Nutzungsrechte auf Dritte bedarf es grundsätzlich
          einer gesonderten, vorab zu treffenden Honorarabsprache mit der RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.2 Übertragung Auftraggeber Nutzungsrechte</h3>
        <p className="mb-4">
          Der Auftraggeber überträgt der RGPE für die übermittelten Daten, Informationen und
          Materialien sämtliche zur Nutzung erforderlichen urheberrechtlichen Nutzungs-,
          Leistungsschutz und sonstigen Rechte, insbesondere das Recht zur Vervielfältigung,
          Verbreitung, Übertragung, Sendung, Entnahme aus einer Datenbank und Abruf und zwar
          zeitlich und inhaltlich in dem für die Durchführung des Auftrages notwendigen
          Umfanges. Vorgenannte Rechte werden in allen Fällen örtlich unbegrenzt übertragen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.3 Besitzrechte Auftraggeber</h3>
        <p className="mb-4">
          Der Auftraggeber gewährleistet, dass er alle zur Durchführung der Dienstleistung bzw.
          des Auftrages erforderlichen Rechte an den übermittelten Daten und Materialien besitzt.
          Der Auftraggeber stellt die RGPE von allen Ansprüchen Dritter frei, die wegen der
          Verletzung von Ansprüchen Dritter oder gesetzlicher Bestimmungen bei der Ausführung
          des Auftrages entstehen. Ferner wird die RGPE von den Kosten zur notwendigen
          Rechtsverteidigung freigestellt. Der Auftraggeber ist verpflichtet, die RGPE nach Treu
          und Glauben mit Informationen und Unterlagen bei der Rechtsverteidigung gegenüber
          Dritten zu unterstützen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.3.1 Miturheberrecht Auftraggeber</h3>
        <p className="mb-4">
          Vorschläge des Auftraggebers oder anderweitige Mitarbeiten des Auftraggebers
          innerhalb der Auftragsdurchführung haben keinen Einfluss auf die Höhe der Vergütung.
          Sie begründen kein Miturheberrecht. Die RGPE geht bei der Verwendung von Vorlagen
          des Auftraggebers davon aus, dass diese nicht mit Rechten Dritter belastet sind oder der
          Auftraggeber über das für den Auftrag erforderliche Nutzungsrecht verfügt.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.4 Nutzungsrechte</h3>
        <p className="mb-4">
          Möchte der Auftraggeber der RGPE Arbeiten/Dienstleistungen ganz oder teilweise über
          den ursprünglich vereinbarten Zweck oder Umfang hinausgehend oder im Ausland
          verwerten, bedarf dies einer gesonderten, vorab zu treffenden Honorarabsprache.
          Gleiches gilt, wenn der Auftraggeber Arbeiten der RGPE nach Beendigung der
          Zusammenarbeit weiter verwenden will, es sei denn, sämtliche Nutzungsrechte wurden
          bereits abgegolten.
        </p>
        <p className="mb-4">
          Alle Konzepte(auch Fitness- und Show-), Skripte und Lösungsszenarien unterliegen dem
          Urheberrechtsgesetz. Die gesetzlichen Bestimmungen gelten auch dann, wenn die nach §
          2 UrhG erforderliche Schöpfungshöhe nicht erreicht ist. Die Konzepte(auch Fitness- und
          Show-), Skripte und Lösungsszenarien dürfen ohne ausdrückliche Einwilligung der
          RGPE weder im Original noch bei der Reproduktion verändert werden. Jede
          Nachahmung - auch von Teilen - ist unzulässig.
        </p>
        <p className="mb-4">
          Ein Verstoß gegen diese Bestimmung berechtigt die RGPE, eine Vertragsstrafe in Höhe
          der doppelten vereinbarten Vergütung zu verlangen. Ist eine Vergütung nicht
          vereinbart, gilt die übliche Vergütung als vereinbart.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">10. Zurückbehaltungsrecht</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">10.1 Zurückbehaltungsrecht</h3>
        <p className="mb-4">
          Bis zur vollständigen Begleichung der Forderungen der RGPE hat die RGPE ein
          Zurückbehaltungsrecht. Erbrachte Dienstleistungen, übergebene Dokumente bleiben bis
          zur vollständigen Bezahlung des fälligen Betages Eigentum der RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">10.2 Abschlussdokumentation</h3>
        <p className="mb-4">
          Nach Abschluss der Arbeiten der RGPE und nach Ausgleich der Ansprüche aus dem
          Vertrag werden alle Unterlagen auf Wunsch herausgeben, die der RGPE aus Anlass der
          Auftragsausführung übergeben wurden. Dies gilt nicht für den Schriftwechsel zwischen
          den Parteien und für einfache Abschriften bzw. Sicherungskopien oder Berichte,
          Organisationsplänen, Entwürfen und Zeichnungen, etc. sofern der Auftraggeber die
          Originale erhalten hat.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">10.3 Aufbewahrungspflicht</h3>
        <p className="mb-4">
          Die Verpflichtung zur Aufbewahrung von Unterlagen seitens der RGPE erlischt 6 Monate
          nach Zugang der schriftlichen Aufforderung zur Abholung, unabhängig davon 1 Jahr
          nach Beendigung des Vertragsverhältnisses.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">11. Anwendbares Recht und Erfüllungsort</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">11.1 Anwendbares Recht</h3>
        <p className="mb-4">
          Für diese Allgemeinen Geschäftsbedingungen und die gesamten Rechtsbeziehungen
          zwischen dem Vertragspartner und der RGPE gilt das deutsche Recht. Auch im
          grenzüberschreitenden Verkehr gilt deutsches Recht unter Ausschluss des UN-
          Kaufrechts.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">11.2 Erfüllungsort</h3>
        <p className="mb-4">
          Als Erfüllungsort für alle beiderseitigen Leistungen aus dem Vertrag wird Ingolstadt
          vereinbart. Für alle sich aus dem Vertragsverhältnis unmittelbar oder mittelbar
          ergebenden Streitigkeiten ist Ingolstadt der Gerichtsstand. Die RGPE ist auch berechtigt,
          am Sitz des Vertragspartners zu klagen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">12. Salvatorische Klausel</h2>
        <p className="mb-4">
          Sollten einzelne Bestimmungen dieser AGB und Nutzungsbedingungen unwirksam oder
          nichtig sein, so wird die Wirksamkeit der übrigen Bestimmungen dadurch nicht berührt.
          Die Parteien werden die unwirksamen oder nichtigen Bestimmungen durch solche
          wirksamen Bestimmungen ersetzen, die dem von den Parteien beabsichtigten
          wirtschaftlichen Zweck am nächsten kommen. Das gleiche gilt, soweit die allgemeinen
          Nutzungsbedingungen eine nicht vorhergesehene Lücke aufweisen. Diese AGB treten
          mit Wirkung vom 01.08.2015 in Kraft und ersetzen alle vorherigen.
        </p>
      </section>

      <div className="text-sm text-gray-700 mt-8 pt-4 border-t italic">
        Ingolstadt, den 08.04.2023
      </div>
    </div>
  ) : (
    <div className="space-y-8 text-base leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Subject matter and Scope</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">1.1 Subject matter</h3>
        <p className="mb-4">
          Subject of these General Terms and Conditions (GTC) are services in the areas currently
          listed in the service portfolio on www.creative-factor.com. The nature of the services
          and works in detail results from the service, consulting and management concepts
          applied by RGPE (Roland Gropp ProEntertainment), proven and developed by RGPE
          itself, the offer (based on specifications), the implementation proposals and the
          individual orders.
        </p>
        <p className="mb-4">
          The General Terms and Conditions shall apply to all service, consulting and management
          offers and contracts, irrespective of the content and legal nature, of the service,
          consulting and management offers and/or contractually assumed service, consulting
          and management services by RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">1.2 Scope of application</h3>
        <p className="mb-4">
          These General Terms and Conditions shall be an integral part of every written or oral
          contract concluded, unless otherwise agreed in writing. Verbal or telephone subsidiary
          agreements of any kind, also with representatives or employees of RGPE, shall be
          regarded as non-binding preliminary discussions as long as they have not been
          confirmed in writing by RGPE. Deviating terms and conditions of the client as well as
          amendments and supplements to these General Terms and Conditions shall only be
          valid insofar as they have been acknowledged in writing by RGPE. Insofar as service,
          consulting and management contracts or offers contain written provisions which
          deviate from the following general terms and conditions, the individually offered or
          agreed contractual rules shall take precedence over these GT&C.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">1.3 Validity</h3>
        <p className="mb-4">
          RGPE shall be entitled to amend these General Terms and Conditions at any time or to
          adapt them in the event of a change in a statutory provision. The client shall be notified
          of any amendment to the GT&C in due time. If this amendment is not objected to within
          one month after receipt, it shall be deemed to have been approved by the provider.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">2. Offer and Conclusion of Contract</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">2.1 Offer</h3>
        <p className="mb-4">
          The offers of RGPE are subject to confirmation until the firm contract is concluded. RGPE
          shall be bound by an offer submitted by the management for 2 weeks.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.2 Subject matter of the contract/order</h3>
        <p className="mb-4">
          The subject of the orders shall be the agreed service(s) designated in the contract,
          consulting activity(ies) of any kind, but not the achievement of a specific economic
          success.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.3 Conclusion of contract/validity of order</h3>
        <p className="mb-4">
          Orders of the client shall only be considered as accepted by written order confirmation
          of RGPE, insofar as RGPE does not indicate this - for example by taking action on the
          basis of the order. RGPE reserves the right to reject orders. Order confirmations of RGPE
          shall replace an order of the contractual partner, if no objection is made in writing
          within three days.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.4 Price validity</h3>
        <p className="mb-4">
          All information given in consulting descriptions as well as offers, price lists and
          brochures are always subject to change and lose their validity with the publication of
          new price information or submission of new offers.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.5 Free services</h3>
        <p className="mb-4">
          Free services, with the aim of a later placing of an order or remuneration, are not
          provided. The development of conceptual service, structuring or solution proposals,
          recommendations for action and/or implementation plans (master plan), etc. by RGPE
          as well as their presentation shall generally be invoiced.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">2.6 Property rights and copyrights</h3>
        <p className="mb-4">
          The property rights and copyrights of the developed and executed service, solutions,
          concepts, strategies remain with RGPE. The transfer to third parties is not permitted.
          Reprinting, duplication, further use - also in extracts - only with written permission of
          RGPE.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">3. Services</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1 Client's obligation to cooperate</h3>
        <p className="mb-4">
          In order to enable RGPE to carry out the desired professional work, the client shall
          inform RGPE as comprehensively as possible and in a timely manner - without culpable
          delay - regarding his ideas concerning the service, the business, organizational, technical
          and competitive situation of his company.
        </p>
        <p className="mb-4">
          The client shall in particular personally and, as far as necessary, also through his
          employees cooperate in the service(s) and in the project(s) (subject matter of the order)
          as follows:
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1.1 Client's obligation to provide information</h3>
        <p className="mb-4">
          All questions of the RGPE service providers/consultants about the factual and legal
          relationships within the client company shall be answered as completely, accurately and
          promptly as possible; likewise questions of the RGPE service providers/consultants
          about the factual and legal relationships between the client and its business partners
          and competitors, insofar as these relationships are known to the client and/or its
          executives. The RGPC service providers/consultants shall only ask such questions, the
          answers to which may be of significance for the performance of the order/service.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1.2 Duty to inform client</h3>
        <p className="mb-4">
          RGPE shall also be informed, without being asked and as early as possible, about such
          circumstances which may be of importance for the performance of the order.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.1.3 Inspection obligation of the client</h3>
        <p className="mb-4">
          The proposed or executed preparations for the service(s) or interim results and interim
          reports supplied by RGPE shall be checked by the client without delay to determine
          whether the actions prepared for the service(s) or information contained therein about
          the client or his company is correct; any necessary corrections and also requests for
          changes shall be communicated to RGPE in writing without delay.
        </p>
        <p className="mb-4">
          If no request for correction or changes is sent to RGPE by the client within an inspection
          period of 10 working days, the preparation and in this respect agreed execution shall be
          deemed to have been accepted or the (service) performance or agreed partial (service)
          performance (milestone(s)) shall be deemed to have been provided and accepted.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.2 Subject matter of the order</h3>
        <p className="mb-4">
          The (service) performances and objectives to be rendered by RGPE shall be specified in
          detail in a separate agreement to be concluded between the client and the contractor or
          shall result from the placing of the order. The service, consulting service or management
          service shall be provided in accordance with the wishes and specifications of the client.
        </p>
        <p className="mb-4">
          Due to the fiduciary obligation towards the client, RGPE undertakes to provide an
          objective service, consultancy or management service oriented towards the respective
          objective as well as, if necessary, an appropriate selection of third parties for the
          performance of the contract. Insofar as the client has not expressly reserved a right of
          co-determination, the selection of third parties by RGPE shall be made in compliance
          with the principle of a balanced relationship between economic efficiency and the best
          possible success in the performance of the services.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.3 Performance and delivery dates</h3>
        <p className="mb-4">
          Performance and delivery dates shall only be binding if they have been confirmed as
          binding by RGPE in writing. The contractual fulfillment of the services shall require the
          timely and proper fulfillment of the client's obligations. The contractor shall endeavor to
          meet the agreed deadlines.
        </p>
        <p className="mb-4">
          However, failure to meet the deadlines shall only entitle the client to assert the rights to
          which he is entitled by law after he has granted RGPE a reasonable period of grace. This
          period shall commence with the receipt of an escalation notice by RGPE. An obligation to
          pay damages under the title of default shall only exist in the event of intent or gross
          negligence on the part of RGPE.
        </p>
        <p className="mb-4">
          In the case of certain services, RGPE undertakes to adhere to the agreed deadline
          without fail after consultation with the client. This will be confirmed separately in
          writing.
        </p>
        <p className="mb-4">
          Unavoidable or unforeseeable events, in particular delays with contractors under the
          designation of third parties (3.2), shall release RGPE from compliance with the agreed
          delivery date.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.4 Authorization to sign of contact persons of the client</h3>
        <p className="mb-4">
          The contact persons designated by the client must be authorized to sign, in particular
          with regard to the release of budgets, cost estimates, release of actions, procedures and
          other coordination processes. Restrictions of the signing authority must be
          communicated to RGPE in writing by the client in due time.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.5 Billing basis</h3>
        <p className="mb-4">
          The basis for invoicing shall be the current price at the time the order is placed (order
          confirmation) in accordance with the agreement or offer. The services shall be rendered
          immediately upon conclusion of the contract (order confirmation) or after order
          booking.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">3.6 Entitlement to remuneration</h3>
        <p className="mb-4">
          Unless otherwise agreed, the claim to remuneration for each individual service begins as
          soon as it has been provided. The invoice shall be sent by e-mail (PDF file) or by post
          and shall be payable immediately after invoicing without deductions. A period of 5
          working days is assumed to be immediate for the purposes of these GT&C.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">4. Term and Termination</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">4.1 Term</h3>
        <p className="mb-4">
          For services and consulting services, the contractual regulations apply in principle.
          Lump-sum contracts (e.g. monthly or budget lump sums), have a minimum contract
          term of 3 months and shall be automatically extended by a further 3 months or the
          period specified separately in the contract in accordance with the terms of the contract,
          unless notice of termination is given in writing within a period of four weeks prior to the
          expiry of the respective contract term.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2 Cancellation</h3>
        <p className="mb-4">
          Cancellations of orders must be made in writing and in the form of a letter.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.1 Termination for cause</h3>
        <p className="mb-4">
          The right to terminate for good cause shall remain unaffected. Such good cause shall in
          particular be deemed to be:
        </p>
        <p className="mb-4">
          a) the opening of insolvency proceedings against the assets of the respective user (such
          as contract partner) or the filing of an application for the opening of insolvency
          proceedings as well as the rejection of such an application due to lack of assets or
        </p>
        <p className="mb-4">
          b) the violation of essential terms or conditions of these GT&C or
        </p>
        <p className="mb-4">
          c) if the Customer is in default of payment of the remuneration owed for a period of two
          months.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.2 Early termination</h3>
        <p className="mb-4">
          Unless otherwise agreed individually in the contract, RGPE shall grant the client the
          right to terminate any service, consulting and management contract prematurely if the
          client so desires. The premature termination shall not affect agreed duties of
          confidentiality and other post-contractual fiduciary duties.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.2.1 Entitlement to remuneration</h3>
        <p className="mb-4">
          The services/contract items of RGPE incurred up to the receipt of an early termination
          shall be invoiced and paid.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">4.2.2.2 Premature termination by contractor</h3>
        <p className="mb-4">
          The provisions from section from 4.2.2 ff shall be applied accordingly if RGPE has legally
          terminated the contract prior to the originally agreed conclusion.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">5. Data Protection, Data Security, Confidentiality</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">5.1 Data protection</h3>
        <p className="mb-4">
          RGPE shall be entitled, within the legally permissible framework, in particular in
          accordance with Section 28 of the German Federal Data Protection Act, to collect, store,
          process and use personal data of the clients/participants, in particular the participant
          data or company data requested during registration, exclusively for the purpose of
          fulfilling the order oft he service.
        </p>
        <p className="mb-4">
          The contractual partners are obliged to process personal data only within the
          framework of the relevant data protection regulations, in particular in compliance with
          the security measures to be taken and organizational measures. You shall oblige all
          partners used by you to carry out the data processing to comply with this regulation.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">5.2 Data backup</h3>
        <p className="mb-4">
          If the services/tasks assumed by RGPE involve work on or with the client's EDP
          equipment, the client shall be informed in good time before the start of the relevant
          activities. The client shall ensure that the recorded data can be reconstructed from
          machine-readable data carriers with reasonable effort in case of destruction or
          falsification.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">5.3 Secrecy</h3>
        <p className="mb-4">
          Beyond the scope described, RGPE shall not use or pass on personal and internal data of
          the client beyond the service or the order. In order to protect legitimate interests of the
          client and the contractor, no reference shall be made to the client, the service, the order
          or the subject of the order under any circumstances and at any time.
        </p>
        <p className="mb-4">
          This does not include the obligation to disclose information due to legal regulations and
          official orders.
        </p>
        <p className="mb-4">
          The contracting parties undertake to keep secret all information of the other contracting
          party and its representatives as well as the companies associated with them or having a
          business relationship with them that becomes known to them during the cooperation.
          The parties shall ensure that a corresponding duty of confidentiality is agreed with their
          employees and with the companies commissioned by them. This confidentiality
          obligation shall apply both during the term of the contract and beyond the term of the
          contract.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">6. Invoicing, Remuneration, Terms of Payment</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">6.1 Invoicing</h3>
        <p className="mb-4">
          In the absence of deviating agreements, RGPE shall be entitled to invoice expenses or
          fees to the client monthly in arrears, depending on the occurrence.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.2 Due date</h3>
        <p className="mb-4">
          Invoices issued by RGPE in accordance with the contract shall be due for payment
          immediately - without deductions. (3.5) The invoice shall be sent by e-mail (PDF file) or
          by mail.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.3 Default</h3>
        <p className="mb-4">
          If the client is in arrears with the settlement of due invoices, RGPE shall be entitled to
          stop its work on the service or project/order until these claims have been met.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.3.1 Default interest</h3>
        <p className="mb-4">
          In the event of default in payment, interest on arrears shall be charged at a rate of 5%
          above the respective base interest rate of the European Central Bank. The assertion of a
          proven higher damage remains unaffected. Interest on arrears shall accrue if the
          payment deadline is exceeded even without a reminder.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.3.2 Reminder fee</h3>
        <p className="mb-4">
          In the event of default, a processing fee of EUR 5 shall be charged per reminder. If the
          client does not meet his payment obligations after a reminder with a deadline, RGPE
          may terminate the contractual relationship without notice.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.4 Price</h3>
        <p className="mb-4">
          The prices stated in the offer plus the applicable value added tax shall be decisive.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.5 Additional services/expenses</h3>
        <p className="mb-4">
          Additional services which are not included in the order confirmation or the offer or
          price list shall be remunerated separately. This shall apply in particular to additional
          expenses as a result of the presentation of an explicit requirement, such as expenses
          incurred through the use of services of third parties, commissioned research, legal
          examinations as well as services other than those mentioned above in the context of the
          original order, which are rendered due to a circumstance for which the client is
          responsible.
        </p>
        <p className="mb-4">
          The out-of-pocket expenses of RGPE incurred in the course of the performance shall be
          invoiced against proof.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.6 Office cost flat rate</h3>
        <p className="mb-4">
          RGPE reserves the right to charge a percentage office expense flat rate, if no other cost
          allocation has been agreed upon. Possible expenses include e.g. costs of documentation
          (presentation), costs for duplications/copies, printing service commissioning, accruing
          postage, telephone, fax and online charges, messenger trips/transport costs.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.7 Travel costs and expenses</h3>
        <p className="mb-4">
          Travel costs and expenses for journeys shall be invoiced on a time and material basis or
          in accordance with receipts. In particular, airline tickets and overnight stays shall be
          booked and paid for in advance by the client.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.8 Exceeding of contractual items</h3>
        <p className="mb-4">
          Expected overruns of the agreed contract items/order confirmation (service/monetary),
          the preliminary calculation or the cost estimate by more than 10% shall be notified to
          the client immediately after the client becomes aware of the increasing circumstance,
          unless the client has caused this circumstance himself.
        </p>
        <p className="mb-4">
          Unless otherwise agreed, the claim to remuneration for each individual service shall
          commence as soon as the service has been rendered.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9 Third Party Commission Agreement</h3>
        <p className="mb-4">
          RGPE reserves the right to agree with the commissioned third parties (3.2) on
          commissions customary in the market and to be assumed by the client. Material and
          third party costs shall be invoiced separately. These include all costs arising from the
          commissioning of third parties. A distinction shall be made between material and third-
          party costs as well as additional handling costs and travel expenses.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9.1 Third-party costs</h3>
        <p className="mb-4">
          Third-party costs incurred in the course of production work shall be charged on - on
          request, also on presentation of the third-party invoices - with a commission of 10
          percent for the services rendered by third parties as well as assumption of the payment
          service (handling costs).
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9.2 Other third-party costs</h3>
        <p className="mb-4">
          Other third party costs or costs of additional services, e.g. legal advice, etc. shall be
          charged on - upon request also upon presentation of the third party invoices - as
          throughput costs against proof. Advance payments by RGPE to third parties shall be
          invoiced separately to the client plus the handling costs.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.9.3 Internal and external services</h3>
        <p className="mb-4">
          For all internal or external services which exceed an agreed lump sum remuneration, a
          cost estimate for the respective service to be rendered, which shall be approved by the
          client, shall be prepared prior to the commencement of work. The cost estimate shall at
          least contain any individual services to be rendered, expected external services as well
          as expenses (schedule). Cost estimates and calculations are not binding unless they have
          been expressly assured in writing. Third-party and ancillary costs shall be remunerated
          separately against evidence, unless expressly agreed otherwise.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.10 Feasibility check</h3>
        <p className="mb-4">
          In the event of a substantial change in the contractual obligations of the contractor for
          the purpose of adaptation to the client's interests, the necessary additional expenditure
          shall be invoiced. This shall also apply to an extensive examination as to whether and
          under which conditions the change or extension is feasible, insofar as RGPE (or third
          parties) has pointed out the necessity of this examination.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.11 Price change</h3>
        <p className="mb-4">
          RGPE reserves the right to change the current prices. In the event of a price increase, the
          client shall be entitled to a right of withdrawal for confirmed orders. The right of
          withdrawal must be exercised in writing in paper form within 14 days after receipt of
          the notification of the price increase.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.12 Deposit</h3>
        <p className="mb-4">
          For orders/projects, RGPE usually invoices 50% of the offer sum when the order is
          placed. The remaining 50% shall be due after acceptance or completion of the services
          or according to within a separate agreement also part payment oriented.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.12.1 Crediting against liabilities</h3>
        <p className="mb-4">
          Incoming payments shall be set off against older liabilities of the customer. If costs of
          legal prosecution, such as reminder costs, have already been incurred, RGPE shall be
          entitled to set off payments of the client first against these costs, then against the
          interest and finally against the main performance.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">6.13 Payment obligation</h3>
        <p className="mb-4">
          If the client changes or cancels orders, work or extensive planning prematurely, the
          client shall reimburse all costs incurred and release RGPE from all liabilities to third
          parties. The assertion of further claims shall remain unaffected by this.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">7. Obstacles to Performance, Delay in Performance, Impossibility of Performance</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">7.1 Impediments to performance</h3>
        <p className="mb-4">
          If the impediments to performance are of a temporary nature, RGPE shall be entitled to
          postpone the performance of its obligations by the duration of the impediment and by a
          reasonable start-up period. If, on the other hand, the performance of RGPE becomes
          permanently impossible due to hindrances within the meaning of Section 8.2, RGPE shall
          be released from its contractual obligations.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.2 Delay in performance</h3>
        <p className="mb-4">
          RGPE shall only be in default with its services if fixed dates have been agreed for defined
          completion dates and RGPE is responsible for the delay. RGPE is not responsible, for
          example, for an unforeseeable cancellation of an artist/trainer, consultant, manager of
          RGPE intended for the service, project/order, as well as force majeure and other events
          which were not foreseeable at the time of the conclusion of the contract and which make
          the agreed service at least temporarily impossible or unreasonably difficult for RGPE.
          Equal to force majeure are strikes, lockouts and similar circumstances by which RGPE is
          directly or indirectly affected, insofar as these measures are not unlawful and have not
          been caused by RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.3 Breach of duty</h3>
        <p className="mb-4">
          Insofar as breaches of duty within the meaning of Section 280 of the German Civil Code
          (a.V. as of 01.01.2002) are the responsibility of RGPE, Section 8 shall apply in addition.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.4 Exclusion services</h3>
        <p className="mb-4">
          Legal and tax consultancy services shall not be provided by RGPE. RGPE is prevented by
          the German Legal Advice Act from providing legal information. The legal protection of
          the client can only be provided by persons who are authorized to provide legal
          information according to the German Legal Advice Act. Presentations and examples of
          RGPE have therefore only recommendatory character without assurance of legal
          admissibility. The client shall indemnify RGPE against all possible claims of third parties,
          in particular from copyright and competition law infringements. He shall bear the costs
          of a counterstatement caused by his communication in accordance with the respective
          valid tariffs.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.4.1 Exclusion of examination of legal issues</h3>
        <p className="mb-4">
          The examination of legal questions, in particular from the area of copyright, competition
          and trademark law; International, individual country, EU, federal as well as customs law
          in international trade in goods are not the task of RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">7.4.2 Liability for passing on information</h3>
        <p className="mb-4">
          RGPE shall be liable for passing on information about the client only to the authorized
          extent and with authorized content within the framework of measures of the contract.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">8. Warranty and Liability</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">8.1 Warranty</h3>
        <p className="mb-4">
          RGPE shall provide the client with a warranty for the proper performance of the agreed
          (service) performances. The timely performance of the contractual services can only be
          guaranteed insofar as it concerns RGPE's own services and their performance does not
          also depend on the cooperation of third parties (artists, trainers, lawyers, tax
          consultants, media agencies as well as consultants other than those mentioned above).
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.2 Compensation for damages</h3>
        <p className="mb-4">
          Claims for damages of the client, in particular due to delay, impossibility of performance,
          positive breach of contract, culpa in contrahendo, defective or incomplete performance,
          consequential damage or due to tortious acts shall be excluded, insofar as they are not
          based on intent or gross negligence on the part of RGPE. RGPE shall not be liable for
          damages that could not be expected to occur within the scope of the contract. Untypical
          unforeseeable damages are not covered by the liability. In addition, RGPE shall not be
          liable for indirect damages, consequential damages or loss of profit. This shall not apply
          to the liability for warranted characteristics and for the violation of essential contractual
          obligations; in the latter case, the liability shall be limited to the foreseeable damage.
          However, it is agreed that the liability is limited to a maximum of the agreed fee.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.3 Exclusions of liability/Limitation of liability</h3>
        <p className="mb-4 font-medium">8.3.1 Impediments to execution</p>
        <p className="mb-4">
          If the execution of an order is cancelled for reasons for which RGPE is not responsible, in
          particular due to failure of technical equipment, force majeure, strike, due to legal
          regulations, disruptions from the area of responsibility of third parties (e.g. partners,
          artists, trainers, etc.), or service providers or for comparable reasons, the execution of
          the order shall be made up for as far as possible. In the event of catching up within a
          reasonable period of time which is reasonable for the client after the elimination of the
          disruption, the remuneration claim of RGPE shall remain in force.
        </p>

        <p className="mb-4 font-medium">8.3.2 Document contents</p>
        <p className="mb-4">
          The client shall be exclusively responsible for the content of documents released by the
          client. In the case of orders and/or changes placed verbally by telephone or otherwise,
          RGPE shall not assume any liability for the correctness of the reproduction. RGPE shall
          not assume any liability for the client's documents provided for processing.
        </p>

        <p className="mb-4 font-medium">8.3.3 Dispatch of documents</p>
        <p className="mb-4">
          The dispatch of documents shall be at the risk of the client. This shall also apply if the
          shipment is made within the same location or by employees or vehicles of RGPE. RGPE
          shall be entitled, but not obliged, to insure deliveries of any kind on behalf and for the
          account of the client.
        </p>

        <p className="mb-4 font-medium">8.3.4 Loss of data</p>
        <p className="mb-4">
          The responsibility for loss of data shall be limited by the typical recovery effort. This
          shall be measured by the damage that would have occurred if reasonable backup
          measures had been taken (e.g. making backup copies).
        </p>

        <p className="mb-4 font-medium">8.3.5 Public Opinion</p>
        <p className="mb-4">
          It is agreed between the contractual partners that the RGPE warranty does not extend to
          the content, the type and the extent of the reaction in the public, to measures of the
          client's own public relations work or services within the framework of the contractual
          services and that the achievement of a certain economic success is not guaranteed by
          RGPE.
        </p>

        <p className="mb-4 font-medium">8.3.6 Consulting errors</p>
        <p className="mb-4">
          Insofar as any consulting errors are based on the fact that the client has not fulfilled, not
          completely fulfilled or not fulfilled in time any obligations to cooperate, the liability of
          RGPE shall be excluded. In the event of a dispute, the client shall provide proof of the
          complete and timely fulfillment of all cooperation obligations. Furthermore, RGPE shall
          not assume any liability for any damages of the client which are based on non-
          observance of the security obligation. No liability shall be assumed for financial losses of
          the client resulting from the consulting activities.
        </p>

        <p className="mb-4 font-medium">8.3.7 Guarantee of success</p>
        <p className="mb-4">
          A success of the cooperation resulting from the service, consulting, management cannot
          be guaranteed by RGPE with regard to the respective task.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.4 Document destruction</h3>
        <p className="mb-4">
          RGPE shall be authorized to destroy documents which have not been reclaimed after a
          period of 12 months. In case of any loss, RGPE shall only be liable in case of gross
          negligence.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.5 Gross negligence</h3>
        <p className="mb-4">
          RGPE shall only be liable for damages of the client if and insofar as they have been
          caused by RGPE intentionally or by gross negligence. The client shall furnish proof in
          the event of a dispute.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">8.6 Limitation</h3>
        <p className="mb-4">
          All possible claims for damages against RGPE shall become statute-barred after the
          expiry of 3 years at the latest. The limitation period shall commence with the
          recognizability of a damage, at the latest, however, with the completion of the
          contractual activity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">9. Copyrights, Rights of Use and References</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">9.1 Copyrights of RGPE</h3>
        <p className="mb-4">
          All rights to the preliminary work including preparational work for the performance of
          the service, such as drafts and conceptions, scripts, solution scenarios as well as the
          other work results, in particular copyrighted rights of use and ownership, shall remain
          with RGPE even after the work results have been handed over to the client, unless they
          have been expressly transferred in writing. Upon payment in full for the duration of the
          contract, the client shall acquire the right to use in the contractual area for the agreed
          purpose and to the agreed extent all the work produced by RGPE within the framework
          of the order, as well as the granting of rights according to German law or the actual
          circumstances.
        </p>
        <p className="mb-4">
          Unless otherwise agreed, only the simple right of use shall be transferred in each case.
          The transfer of the rights of use to third parties shall generally require a separate fee
          agreement to be made in advance with RGPE.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.2 Transfer of Client Rights of Use</h3>
        <p className="mb-4">
          The client shall transfer to RGPE all copyrights, ancillary copyrights and other rights
          necessary for the use of the transmitted data, information and materials, in particular
          the right to duplication, distribution, transmission, broadcasting, extraction from a
          database and retrieval, in terms of time and content to the extent necessary for the
          execution of the order. The aforementioned rights shall be transferred in all cases
          without any territorial restrictions.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.3 Client's rights of possession</h3>
        <p className="mb-4">
          The client warrants that he possesses all rights to the transmitted data and materials
          necessary for the performance of the service or the order. The client shall indemnify
          RGPE against all claims of third parties arising from the infringement of claims of third
          parties or legal provisions during the execution of the order. Furthermore, RGPE shall be
          indemnified against the costs for the necessary legal defense. The client shall be
          obliged to support RGPE in good faith with information and documents in the legal defense
          against third parties.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.3.1 Joint copyright client</h3>
        <p className="mb-4">
          Proposals of the client or other cooperation of the client within the execution of the
          order shall have no influence on the amount of the remuneration. They shall not
          constitute a joint copyright. RGPE shall assume when using templates of the client that
          these are not encumbered with the rights of third parties or that the client has the right
          of use required for the order.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">9.4 Rights of use</h3>
        <p className="mb-4">
          If the client wishes to exploit RGPE's work/services in whole or in part beyond the
          originally agreed purpose or scope or abroad, this shall require a separate fee
          agreement to be made in advance. The same shall apply if the client wishes to continue
          to use RGPE's work after the end of the cooperation, unless all rights of use have already
          been settled.
        </p>
        <p className="mb-4">
          All concepts (including fitness and show concepts), scripts and solution scenarios are
          subject to the copyright law. The legal regulations apply even if the required level of
          creation according to German § 2 UrhG is not reached. The concepts (including fitness
          and show concepts), scripts and solution scenarios may not be changed, neither in the
          original nor in the reproduction, without the explicit consent of RGPE. Any imitation -
          also of parts - is inadmissible.
        </p>
        <p className="mb-4">
          A violation of this provision shall entitle RGPE to demand a contractual penalty in the
          amount of twice the agreed remuneration. If no remuneration has been agreed, the usual
          remuneration shall be deemed to have been agreed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">10. Right of Retention</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">10.1 Right of retention</h3>
        <p className="mb-4">
          RGPE shall have a right of retention until the claims of RGPE have been settled in full.
          Services rendered, documents handed over shall remain the property of RGPE until full
          payment of the amount due.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">10.2 Final documentation</h3>
        <p className="mb-4">
          After completion of the work of RGPE and after settlement of the claims arising from the
          contract, all documents which were handed over to RGPE on the occasion of the
          execution of the order shall be handed over upon request. This shall not apply to
          correspondence between the parties and to simple copies or backup copies or reports,
          organization charts, drafts and drawings, etc., provided that the Client has received the
          originals.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">10.3 Obligation to retain documents</h3>
        <p className="mb-4">
          The obligation to retain documents on the part of RGPE shall expire 6 months after
          receipt of the written request for collection, irrespective thereof 1 year after termination
          of the contractual relationship.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">11. Applicable Law and Place of Performance</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">11.1 Applicable law</h3>
        <p className="mb-4">
          German law shall apply to these General Terms and Conditions and to the entire legal
          relationship between the contractual partner and RGPE. German law shall also apply in
          cross-border transactions to the exclusion of the UN Convention on Contracts for the
          International Sale of Goods.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">11.2 Place of performance</h3>
        <p className="mb-4">
          Ingolstadt in Germany shall be agreed as the place of performance for all mutual
          services arising from the contract. Ingolstadt shall be the place of jurisdiction for all
          disputes arising directly or indirectly from the contractual relationship. RGPE shall also
          be entitled to take legal action at the registered office of the contractual partner.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">12. Severability Clause</h2>
        <p className="mb-4">
          Should individual provisions of these General Terms and Conditions and Terms of use be
          invalid or void, the validity of the remaining provisions shall not be affected thereby.
          The parties shall replace the invalid or void provisions with such valid provisions that
          come as close as possible to the economic purpose intended by the parties. The same
          applies insofar as the general terms and conditions of use contain an unforeseen
          loophole. These GT&C shall enter into force with effect from 01.08.2015 and replace all
          previous ones.
        </p>
      </section>

      <div className="text-sm text-gray-700 mt-8 pt-4 border-t italic">
        Ingolstadt, 08.04.2023
      </div>
    </div>
  );

  return (
    <>
      <PageHeader />
      <section className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg bg-white p-6 sm:p-8 w-full sm:w-10/12"
          style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="max-w-4xl mx-auto text-dimWhite [&_strong]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_a]:text-secondary [&_a:hover]:underline">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">{t('title')}</h2>
            <p className="mb-8 text-center text-sm italic text-dimWhite">{t('lastUpdated')}</p>
            {content}
          </div>
        </div>
      </section>
    </>
  );
}
