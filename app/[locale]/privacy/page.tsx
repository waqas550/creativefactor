import { getTranslations } from 'next-intl/server';
import PageHeader from '@/components/layout/Pageheader';
import { routing } from '@/lib/i18n/routing';

// Generate static paths for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const isGerman = locale === 'de';

  // Privacy content based on locale
  const content = isGerman ? (
    <div className="space-y-8 text-sm leading-relaxed">
      <p className="mb-4">
        Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen
        Stellenwert für die Geschäftsleitung der Roland Gropp ProEntertaiment. Eine Nutzung der Internetseiten
        der Roland Gropp ProEntertaiment ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich.
        Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in
        Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich
        werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche
        Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
        Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse
        oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-
        Grundverordnung und in Übereinstimmung mit den für die Roland Gropp ProEntertaiment geltenden
        landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser
        Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und
        verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser
        Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
      </p>
      <p className="mb-4">
        Die Roland Gropp ProEntertaiment hat als für die Verarbeitung Verantwortlicher zahlreiche technische und
        organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese
        Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte
        Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht
        gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene
        Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-4">1. Begriffsbestimmungen</h2>
        <p className="mb-4">
          Die Datenschutzerklärung der Roland Gropp ProEntertaiment beruht auf den Begrifflichkeiten, die durch
          den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-
          GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für
          unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten,
          möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
        </p>
        <p className="mb-4">
          Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">a) personenbezogene Daten</h3>
        <p className="mb-4">
          Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
          natürliche Person (im Folgenden "betroffene Person") beziehen. Als identifizierbar wird eine natürliche
          Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem
          Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren
          besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen,
          wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">b) betroffene Person</h3>
        <p className="mb-4">
          Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene
          Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">c) Verarbeitung</h3>
        <p className="mb-4">
          Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
          Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die
          Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
          Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der
          Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">d) Einschränkung der Verarbeitung</h3>
        <p className="mb-4">
          Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel,
          ihre künftige Verarbeitung einzuschränken.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">e) Profiling</h3>
        <p className="mb-4">
          Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass
          diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine
          natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung,
          wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
          Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">f) Pseudonymisierung</h3>
        <p className="mb-4">
          Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die
          personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen
          betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert
          aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten,
          dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person
          zugewiesen werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">g) Verantwortlicher oder für die Verarbeitung Verantwortlicher</h3>
        <p className="mb-4">
          Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person,
          Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser
          Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der
          Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem
          Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">h) Auftragsverarbeiter</h3>
        <p className="mb-4">
          Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
          personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">i) Empfänger</h3>
        <p className="mb-4">
          Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der
          personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten
          handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem
          Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten
          jedoch nicht als Empfänger.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">j) Dritter</h3>
        <p className="mb-4">
          Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der
          betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der
          unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die
          personenbezogenen Daten zu verarbeiten.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">k) Einwilligung</h3>
        <p className="mb-4">
          Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und
          unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen
          eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der
          Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
        <p className="mb-4">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der
          Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit
          datenschutzrechtlichem Charakter ist die:
        </p>
        <p className="mb-2 font-medium">Roland Gropp ProEntertaiment</p>
        <p className="mb-2">Altvaterstr. 11</p>
        <p className="mb-2">85107 Baar-Ebenhausen</p>
        <p className="mb-2">Germany</p>
        <p className="mb-2">Tel.: +49-(0)-8453-336820</p>
        <p className="mb-2">E-Mail: info@creative-factor.com</p>
        <p className="mb-4">Website: www.creative-factor.com</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">3. Cookies</h2>
        <p className="mb-4">
          Die Internetseiten der Roland Gropp ProEntertaiment verwenden Cookies. Cookies sind Textdateien,
          welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.
          Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-
          ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch
          welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das
          Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen
          Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu
          unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und
          identifiziert werden.
        </p>
        <p className="mb-4">
          Durch den Einsatz von Cookies kann die Roland Gropp ProEntertaiment den Nutzern dieser Internetseite
          nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.
          Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite im Sinne des
          Benutzers optimiert werden. Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer
          Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung
          unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies verwendet, muss
          beispielsweise nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten eingeben, weil dies von
          der Internetseite und dem auf dem Computersystem des Benutzers abgelegten Cookie übernommen wird.
          Ein weiteres Beispiel ist das Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt sich die
          Artikel, die ein Kunde in den virtuellen Warenkorb gelegt hat, über ein Cookie.
        </p>
        <p className="mb-4">
          Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer
          entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von
          Cookies dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen
          Internetbrowser oder andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen
          Internetbrowsern möglich. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten
          Internetbrowser, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">4. Erfassung von allgemeinen Daten und Informationen</h2>
        <p className="mb-4">
          Die Internetseite der Roland Gropp ProEntertaiment erfasst mit jedem Aufruf der Internetseite durch eine
          betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen.
          Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst
          werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System
          verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere
          Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System
          auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die
          Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des
          zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im
          Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.
        </p>
        <p className="mb-4">
          Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Roland Gropp ProEntertaiment
          keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die
          Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung
          für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme
          und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle
          eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym
          erhobenen Daten und Informationen werden durch die Roland Gropp ProEntertaiment daher einerseits
          statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem
          Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten
          personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von
          allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">5. Kontaktmöglichkeit über die Internetseite</h2>
        <p className="mb-4">
          Die Internetseite der Roland Gropp ProEntertaiment enthält aufgrund von gesetzlichen Vorschriften
          Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine
          unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten
          elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein
          Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der
          betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf
          freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten
          personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen
          Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
        <p className="mb-4">
          Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der
          betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder
          sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber
          in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen
          wurde.
        </p>
        <p className="mb-4">
          Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder
          einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
          personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder
          gelöscht.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">7. Rechte der betroffenen Person</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">a) Recht auf Bestätigung</h3>
        <p className="mb-4">
          Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht,
          von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende
          personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in
          Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
          Verantwortlichen wenden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">b) Recht auf Auskunft</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
          Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung
          Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen
          Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und
          Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>die Verarbeitungszwecke</li>
          <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
          <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten
            offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern
            oder bei internationalen Organisationen</li>
          <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls
            dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
          <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen
            Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines
            Widerspruchsrechts gegen diese Verarbeitung</li>
          <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
          <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren
            Informationen über die Herkunft der Daten</li>
          <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22
            Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die
            involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung
            für die betroffene Person.</li>
        </ul>
        <p className="mb-4">
          Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein
          Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht
          der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im
          Zusammenhang mit der Übermittlung zu erhalten.
        </p>
        <p className="mb-4">
          Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich
          hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">c) Recht auf Berichtigung</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender
          unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu,
          unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger
          personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.
        </p>
        <p className="mb-4">
          Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu
          jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">d) Recht auf Löschung (Recht auf Vergessen werden)</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen
          zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht
          werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht
          erforderlich ist:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige
            Weise verarbeitet, für welche sie nicht mehr notwendig sind.</li>
          <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung
            gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es
            fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
          <li>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die
            Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die
            Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO
            Widerspruch gegen die Verarbeitung ein.</li>
          <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
          <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen
            Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich,
            dem der Verantwortliche unterliegt.</li>
          <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
            Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>
        </ul>
        <p className="mb-4">
          Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von
          personenbezogenen Daten, die bei der Roland Gropp ProEntertaiment gespeichert
          sind, veranlassen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für
          die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Roland Gropp
          ProEntertaiment wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.
        </p>
        <p className="mb-4">
          Wurden die personenbezogenen Daten von der Roland Gropp ProEntertaiment öffentlich
          gemacht und ist unser Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO
          zur Löschung der personenbezogenen Daten verpflichtet, so trifft die Roland Gropp
          ProEntertaiment unter Berücksichtigung der verfügbaren Technologie und der
          Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die
          Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten
          verarbeiten, darüber in Kenntnis zu setzen, dass die betroffene Person von diesen
          anderen für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu
          diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser
          personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist.
          Der Mitarbeiter der Roland Gropp ProEntertaiment wird im Einzelfall das Notwendige
          veranlassen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">e) Recht auf Einschränkung der Verarbeitung</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen
          die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen
          gegeben ist:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person
            bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die
            Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
          <li>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der
            personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung
            der personenbezogenen Daten.</li>
          <li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der
            Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
          <li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1
            DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des
            Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
        </ul>
        <p className="mb-4">
          Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person
          die Einschränkung von personenbezogenen Daten, die bei der Roland Gropp ProEntertaiment
          gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter
          des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Roland Gropp
          ProEntertaiment wird die Einschränkung der Verarbeitung veranlassen.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">f) Recht auf Datenübertragbarkeit</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden
          personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen
          bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format
          zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen
          ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten
          bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung
          gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem
          Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe
          automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung
          einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung
          öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.
        </p>
        <p className="mb-4">
          Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit
          gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten
          direkt von einem Verantwortlichen an einen anderen Verantwortlichen übermittelt werden,
          soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten
          anderer Personen beeinträchtigt werden.
        </p>
        <p className="mb-4">
          Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person
          jederzeit an einen Mitarbeiter der Roland Gropp ProEntertaiment wenden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">g) Recht auf Widerspruch</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich
          aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie
          betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f
          DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen
          gestütztes Profiling.
        </p>
        <p className="mb-4">
          Die Roland Gropp ProEntertaiment verarbeitet die personenbezogenen Daten im Falle des
          Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für
          die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen
          Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen.
        </p>
        <p className="mb-4">
          Verarbeitet die Roland Gropp ProEntertaiment personenbezogene Daten, um Direktwerbung
          zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die
          Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen.
          Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung
          steht. Widerspricht die betroffene Person gegenüber der Roland Gropp ProEntertaiment
          der Verarbeitung für Zwecke der Direktwerbung, so wird die Roland Gropp
          ProEntertaiment die personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.
        </p>
        <p className="mb-4">
          Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen
          Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die
          bei der Roland Gropp ProEntertaiment zu wissenschaftlichen oder historischen
          Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen,
          Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer
          im öffentlichen Interesse liegenden Aufgabe erforderlich.
        </p>
        <p className="mb-4">
          Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt an jeden
          Mitarbeiter der Roland Gropp ProEntertaiment oder einen anderen Mitarbeiter wenden.
          Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von
          Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr
          Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen
          technische Spezifikationen verwendet werden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer
          ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling —
          beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung
          entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung
          (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen
          Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften
          der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist
          und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten
          sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit
          ausdrücklicher Einwilligung der betroffenen Person erfolgt.
        </p>
        <p className="mb-4">
          Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen
          der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit
          ausdrücklicher Einwilligung der betroffenen Person, trifft die Roland Gropp
          ProEntertaiment angemessene Maßnahmen, um die Rechte und Freiheiten sowie die
          berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht
          auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf
          Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
        </p>
        <p className="mb-4">
          Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend
          machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
          Verantwortlichen wenden.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h3>
        <p className="mb-4">
          Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
          Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur
          Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
        </p>
        <p className="mb-4">
          Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen,
          kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung
          Verantwortlichen wenden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">8. Rechtsgrundlage der Verarbeitung</h2>
        <p className="mb-4">
          Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für
          Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten
          Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur
          Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
          erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die
          für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder
          Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO.
          Gleiches gilt für solche Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher
          Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder
          Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung, durch welche
          eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise
          zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c
          DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich
          werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen
          Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem
          Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine
          Krankenversicherungsdaten oder andere lebenswichtige Informationen an einen Arzt, ein
          Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die
          Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten Verarbeitungsvorgänge
          auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren
          Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden,
          wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens
          oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten
          des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere
          deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden.
          Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte,
          wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">9. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden</h2>
        <p className="mb-4">
          Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO, ist
          unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter
          und unserer Anteilseigner.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">10. Dauer, für die die personenbezogenen Daten gespeichert werden</h2>
        <p className="mb-4">
          Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die
          jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die
          entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur
          Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">11. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</h2>
        <p className="mb-4">
          Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil
          gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus
          vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter
          kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns
          personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet
          werden müssen. Die betroffene Person ist beispielsweise verpflichtet, uns
          personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag
          abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass
          der Vertrag mit der betroffenen Person nicht abgeschlossen werden könnte. Vor einer
          Bereitstellung personenbezogener Daten durch die betroffene Person muss sich die
          betroffene Person an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt die
          betroffene Person einzelfallbezogen darüber auf, ob die Bereitstellung der
          personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den
          Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die
          personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung
          der personenbezogenen Daten hätte.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">12. Bestehen einer automatisierten Entscheidungsfindung</h2>
        <p className="mb-4">
          Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische
          Entscheidungsfindung oder ein Profiling.
        </p>
      </section>

      <p className="mb-4 italic">
        Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD
        Deutsche Gesellschaft für Datenschutz GmbH, die als externer Datenschutzbeauftragter
        Niederbayern tätig ist, in Kooperation mit den Datenschutz Anwälten der Kanzlei WILDE BEUGER
        SOLMECKE | Rechtsanwälte erstellt.
      </p>

      <div className="text-sm text-gray-700 mt-8 pt-4 border-t italic">
        Ingolstadt, 10.04.2023
      </div>
    </div>
  ) : (
    <div className="space-y-8 text-sm leading-relaxed">
      <p className="mb-4">
        We are very pleased about your interest in our company. Data protection is of a
        particularly high priority for the management of Roland Gropp ProEntertainment. The
        use of the Internet pages of the Roland Gropp ProEntertainment is possible without any
        indication of personal data. However, if a data subject wants to use special services of
        our enterprise via our website, processing of personal data could become necessary. If
        processing of personal data is necessary and there is no legal basis for such processing,
        we will generally obtain the consent of the data subject.
      </p>
      <p className="mb-4">
        The processing of personal data, such as the name, address, e-mail address, or telephone
        number of a data subject shall always be in line with the General Data Protection
        Regulation, and in accordance with the country-specific data protection regulations
        applicable to the Roland Gropp ProEntertainment. By means of this data protection
        declaration, our enterprise would like to inform the public about the nature, scope and
        purpose of the personal data we collect, use and process. Furthermore, data subjects are
        informed of their rights by means of this data protection declaration.
      </p>
      <p className="mb-4">
        As the controller, the Roland Gropp ProEntertainment has implemented numerous
        technical and organizational measures to ensure the most complete protection of
        personal data processed through this website. Nevertheless, Internet-based data
        transfers can always be subject to security vulnerabilities, so that absolute protection
        cannot be guaranteed. For this reason, every data subject is free to transmit personal
        data to us by alternative means, for example by telephone.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-4">1. Definitions</h2>
        <p className="mb-4">
          The data protection declaration of Roland Gropp ProEntertainment is based on the terms
          used by the European Directive and Ordinance when issuing the Data Protection
          Regulation (DS-GVO). Our privacy policy should be easy to read and understand for the
          public as well as for our customers and business partners. To ensure this, we would like
          to explain the terminology used in advance.
        </p>
        <p className="mb-4">
          We use the following terms, among others, in this data protection declaration:
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">a) Personal data</h3>
        <p className="mb-4">
          Personal data is any information relating to an identified or identifiable natural
          person (hereinafter "data subject"). An identifiable natural person is one who can be
          identified, directly or indirectly, in particular by reference to an identifier such as a
          name, an identification number, location data, an online identifier or to one or more
          factors specific to the physical, physiological, genetic, mental, economic, cultural or
          social identity of that natural person.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">b) Data subject</h3>
        <p className="mb-4">
          Data subject means any identified or identifiable natural person whose personal data
          are processed by the controller.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">c) Processing</h3>
        <p className="mb-4">
          Processing means any operation or set of operations which is performed upon
          personal data, whether or not by automatic means, such as collection, recording,
          organization, filing, storage, adaptation or alteration, retrieval, consultation, use,
          disclosure by transmission, dissemination or otherwise making available, alignment
          or combination, restriction, erasure or destruction.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">d) Restriction of processing</h3>
        <p className="mb-4">
          Restriction of processing is the marking of stored personal data with the aim of
          limiting their future processing.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">e) Profiling</h3>
        <p className="mb-4">
          Profiling is any type of automated processing of personal data that consists of using
          such personal data to evaluate certain personal aspects relating to a natural person,
          in particular to analyze or predict aspects relating to that natural person&apos;s job
          performance, economic situation, health, personal preferences, interests, reliability,
          behavior, location or change of location.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">f) Pseudonymization</h3>
        <p className="mb-4">
          Pseudonymization is the processing of personal data in such a way that the personal
          data can no longer be attributed to a specific data subject without the use of
          additional information, provided that such additional information is kept separate
          and is subject to technical and organizational measures to ensure that the personal
          data is not attributed to an identified or identifiable natural person.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">g) Controller or Person responsible for processing</h3>
        <p className="mb-4">
          The controller or person responsible for processing is the natural or legal person,
          public authority, agency or other body which alone or jointly with others determines
          the purposes and means of the processing of personal data. Where the purposes and
          means of such processing are determined by Union or Member State law, the
          controller or the specific criteria for its designation may be provided for under Union
          or Member State law.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">h) Processor</h3>
        <p className="mb-4">
          Processor means a natural or legal person, public authority, agency or other body
          which processes personal data on behalf of the Controller.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">i) Recipient</h3>
        <p className="mb-4">
          Recipient means a natural or legal person, public authority, agency or other body to
          whom personal data are disclosed, whether or not a third party. However, public
          authorities that may receive personal data in the context of a specific investigation
          mandate under Union or Member State law shall not be considered as recipients.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">j) Third Party</h3>
        <p className="mb-4">
          Third party means a natural or legal person, public authority, agency or other body
          other than the data subject, the controller, the processor and the persons authorized
          to process the personal data under the direct responsibility of the controller or the
          processor.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">k) Consent</h3>
        <p className="mb-4">
          Consent means any freely given indication of the data subject&apos;s wishes for the specific
          case in an informed and unambiguous manner, in the form of a statement or other
          unambiguous affirmative act by which the data subject indicates that he or she
          consents to the processing of personal data relating to him or her.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">2. Name and Address of the controller</h2>
        <p className="mb-4">
          The controller within the meaning of the General Data Protection Regulation, other data
          protection laws applicable in the Member States of the European Union and other
          provisions with data protection character is:
        </p>
        <p className="mb-2 font-medium">Roland Gropp ProEntertainment</p>
        <p className="mb-2">Altvaterstr. 11</p>
        <p className="mb-2">85107 Baar-Ebenhausen</p>
        <p className="mb-2">Germany</p>
        <p className="mb-2">Tel.: +49-(0)-8453-336820</p>
        <p className="mb-2">E-Mail: info@creative-factor.com</p>
        <p className="mb-4">Website: www.creative-factor.com</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">3. Cookies</h2>
        <p className="mb-4">
          The internet pages of Roland Gropp ProEntertainment use cookies. Cookies are text files
          that are stored on a computer system via an Internet browser.
        </p>
        <p className="mb-4">
          Numerous Internet pages and servers use cookies. Many cookies contain a so-called
          cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a string of
          characters by which Internet pages and servers can be assigned to the specific Internet
          browser in which the cookie was stored. This enables the visited Internet pages and
          servers to distinguish the individual browser of the data subject from other Internet
          browsers that contain other cookies. A specific internet browser can be recognized and
          identified via the unique cookie ID.
        </p>
        <p className="mb-4">
          Through the use of cookies, the Roland Gropp ProEntertainment can provide the users of
          this website with more user-friendly services that would not be possible without the
          cookie setting.
        </p>
        <p className="mb-4">
          Through the use of cookies, the information and offers on our website can be optimized
          for the user. Cookies enable us, as already mentioned, to recognize the users of our
          website. The purpose of this recognition is to make it easier for users to use our website.
          For example, the user of a website that uses cookies does not have to re-enter his or her
          access data each time he or she visits the website, because this is handled by the website
          and the cookie stored on the user&apos;s computer system. Another example is the cookie of a
          shopping cart in an online store. The online store remembers the items that a customer
          has placed in the virtual shopping cart via a cookie.
        </p>
        <p className="mb-4">
          The data subject can prevent the setting of cookies by our website at any time by means
          of an appropriate setting of the Internet browser used and thus permanently object to
          the setting of cookies. Furthermore, cookies that have already been set can be deleted at
          any time via an Internet browser or other software programs. This is possible in all
          common Internet browsers. If the data subject deactivates the setting of cookies in
          the Internet browser used, not all functions of our website may be fully usable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">4. Collection of general data and information</h2>
        <p className="mb-4">
          The website of the Roland Gropp ProEntertainment collects a series of general data and
          information with each call-up of the website by a data subject or automated system. This
          general data and information is stored in the log files of the server. The following data
          may be collected: (1) the browser types and versions used, (2) the operating system
          used by the accessing system, (3) the website from which an accessing system accesses
          our website (so-called referrer), (4) the sub-websites that are accessed via an accessing
          system on our website, (5) the date and time of an access to the website, (6) an Internet
          protocol address (IP address), (7) the Internet service provider of the accessing system and (8) other similar data and
          information that serve to avert danger in the event of attacks on our information technology systems.
        </p>
        <p className="mb-4">
          When using these general data and information, the Roland Gropp ProEntertainment
          does not draw any conclusions about the data subject. Rather, this information is needed
          (1) to deliver the contents of our website correctly, (2) to optimize the contents of
          our website and the advertising for these, (3) to ensure the long-term functionality of our
          information technology systems and the technology of our website, and (4) to provide
          law enforcement authorities with the information necessary for prosecution in the event
          of a cyber attack. Therefore, the Roland Gropp ProEntertainment analyzes anonymously
          collected data and information on one hand, and on the other hand, with the aim of
          increasing the data protection and data security of our enterprise, to ensure an optimal
          level of protection for the personal data we process. The anonymous data of the server
          log files are stored separately from any personal data submitted by a data subject.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">5. Contact possibility via the website</h2>
        <p className="mb-4">
          Based on statutory provisions, the website of the Roland Gropp ProEntertainment
          contains data that enable a quick electronic contact to our enterprise, as well as direct
          communication with us, which also includes a general address of the so-called electronic
          mail (e-mail address). If a data subject contacts the controller by e-mail or by using a
          contact form, the personal data transmitted by the data subject will be stored
          automatically. Such personal data transmitted on a voluntary basis by a data subject to
          the controller will be stored for the purpose of processing or contacting the data subject.
          No disclosure of such personal data to third parties will take place.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">6. Routine erasure and blocking of personal data.</h2>
        <p className="mb-4">
          The controller processes and stores personal data of the data subject only for the period
          of time necessary to achieve the purpose of storage or insofar as this has been provided
          for by the European Directives and Regulations or other legislator in laws or regulations
          to which the controller is subject.
        </p>
        <p className="mb-4">
          If the storage purpose ceases to apply or if a storage period prescribed by the European
          Directive and Regulation Maker or another competent legislator expires, the personal
          data shall be routinely blocked or deleted in accordance with the statutory provisions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">7. Rights of the data subject</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">a) Right to confirmation</h3>
        <p className="mb-4">
          Every data subject has the right granted by the European Directive and Regulation to
          obtain confirmation from the controller as to whether personal data concerning him
          or her are being processed. If a data subject wishes to exercise this right of
          confirmation, he or she may, at any time, contact any employee of the controller.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">b) Right of access</h3>
        <p className="mb-4">
          Any person affected by the processing of personal data has the right granted by the
          European Directive and Regulation to obtain at any time from the controller, free of
          charge, information about the personal data stored about him or her and a copy of
          that information. In addition, the European Directive and Regulation Legislator has
          granted the data subject access to the following information:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>the purposes of processing</li>
          <li>the categories of personal data processed</li>
          <li>the recipients or categories of recipients to whom the personal data have been or
            will be disclosed, in particular in the case of recipients in third countries or
            international organizations</li>
          <li>if possible, the planned duration for which the personal data will be stored or, if this
            is not possible, the criteria for determining this duration</li>
          <li>the existence of a right to obtain the rectification or erasure of personal data
            concerning him or her, or to obtain the restriction of processing by the controller,
            or a right to object to such processing</li>
          <li>the existence of a right of appeal to a supervisory authority</li>
          <li>if the personal data are not collected from the data subject: Any available
            information on the origin of the data</li>
          <li>the existence of automated decision-making, including profiling, pursuant to Article
            22(1) and (4) of the GDPR and, at least in these cases, meaningful information
            about the logic involved and the scope and intended effects of such processing for
            the data subject.</li>
        </ul>
        <p className="mb-4">
          Furthermore, the data subject shall have the right to obtain information as to whether
          personal data have been transferred to a third country or to an international
          organization. If this is the case, the data subject also has the right to obtain
          information about the appropriate safeguards in connection with the transfer.
        </p>
        <p className="mb-4">
          If a data subject wishes to exercise this right of access, he or she may, at any time,
          contact an employee of the controller.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">c) Right to rectification</h3>
        <p className="mb-4">
          Any person affected by the processing of personal data has the right granted by the
          European Directive and Regulation to request the immediate rectification of any
          inaccurate personal data concerning him or her. Furthermore, the data subject has
          the right to request the completion of incomplete personal data - also by means of a
          supplementary declaration - taking into account the purposes of the processing.
        </p>
        <p className="mb-4">
          If a data subject wishes to exercise this right of rectification, he or she may, at any
          time, contact any employee of the controller.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">d) Right to erasure (right to be forgotten)</h3>
        <p className="mb-4">
          Any person affected by the processing of personal data has the right granted by the
          European Directive and Regulation to obtain from the controller the erasure without
          delay of personal data concerning him or her, where one of the following grounds
          applies and insofar as the processing is not necessary:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The personal data were collected or otherwise processed for such purposes for
            which they are no longer necessary.</li>
          <li>The data subject revokes the consent on which the processing was based pursuant
            to Art. 6(1)(a) DS-GVO or Art. 9(2)(a) DS-GVO and there is no other legal basis for
            the processing.</li>
          <li>The data subject objects to the processing pursuant to Art. 21(1) DS-GVO and there
            are no overriding legitimate grounds for the processing, or the data subject objects
            to the processing pursuant to Art. 21(2) DS-GVO.</li>
          <li>The personal data have been processed unlawfully.</li>
          <li>The erasure of the personal data is necessary for compliance with a legal obligation
            under Union or Member State law to which the controller is subject.</li>
          <li>The personal data was collected in relation to information society services offered
            pursuant to Article 8(1) DS-GVO.</li>
        </ul>
        <p className="mb-4">
          If one of the aforementioned reasons applies, and a data subject wishes to arrange for
          the erasure of personal data stored by the Roland Gropp ProEntertainment, he or she
          may, at any time, contact any employee of the controller. The employee of the Roland
          Gropp ProEntertainment shall arrange for the deletion request to be complied with
          immediately.
        </p>
        <p className="mb-4">
          If the personal data was made public by the Roland Gropp ProEntertainment and our
          company as the responsible party is obliged to delete the personal data pursuant to
          Art. 17 Para. 1 DS-GVO, Roland Gropp ProEntertainment shall implement reasonable
          measures, including technical measures, to compensate other data controllers for
          processing the personal data published, taking into account the available technology
          and the cost of implementation, in order to inform the data subject that he or she has
          requested from those other data controllers to erase all links to the personal data or
          copies or replications of the personal data, unless the processing is necessary. The
          employee of the Roland Gropp ProEntertainment will arrange the necessary in
          individual cases.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">e) Right to restriction of processing</h3>
        <p className="mb-4">
          Each data subject concerned by the processing of personal data has the right, granted
          by the European Directive and Regulation, to obtain from the controller the
          restriction of processing if one of the following conditions is met:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The accuracy of the personal data is contested by the data subject for a period
            enabling the controller to verify the accuracy of the personal data.</li>
          <li>The processing is unlawful, the data subject objects to the erasure of the personal
            data and requests instead the restriction of the use of the personal data.</li>
          <li>The controller no longer needs the personal data for the purposes of the processing,
            but the data subject needs it for the assertion, exercise or defense of legal claims.</li>
          <li>The data subject has objected to the processing pursuant to Article 21 (1) of the
            GDPR and it is not yet clear whether the legitimate grounds of the controller
            override those of the data subject.</li>
        </ul>
        <p className="mb-4">
          If one of the aforementioned conditions is met, and a data subject wishes to request
          the restriction of personal data stored by the Roland Gropp ProEntertainment, he or
          she may, at any time, contact any employee of the controller. The employee of the
          Roland Gropp ProEntertainment will arrange the restriction of the processing.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">f) Right to data portability</h3>
        <p className="mb-4">
          Any person affected by the processing of personal data has the right granted by the
          European Directive and Regulation to receive the personal data concerning him or
          her, which have been provided by the data subject to a controller, in a structured,
          commonly used and machine-readable format. He or she also has the right to transmit
          this data to another controller without hindrance from the controller to whom the
          personal data have been provided, provided that the processing is based on consent
          pursuant to Article 6(1)(a) of the GDPR or Article 9(2)(a) of the GDPR or on a
          contract pursuant to Article 6(1)(b) of the GDPR and the processing is carried out by
          automated means, unless the processing is necessary for the performance of a task
          carried out in the public interest or in the exercise of official authority vested in the
          controller.
        </p>
        <p className="mb-4">
          Furthermore, when exercising the right to data portability pursuant to Article 20(1)
          of the GDPR, the data subject has the right to obtain that the personal data be
          transferred directly from one controller to another controller, where technically
          feasible and provided that this does not adversely affect the rights and freedoms of
          other individuals.
        </p>
        <p className="mb-4">
          In order to assert the right to data portability, the data subject may at any time
          contact any employee of the Roland Gropp ProEntertainment.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">g) Right to object</h3>
        <p className="mb-4">
          Any person affected by the processing of personal data has the right granted by the
          European Directive and Regulation to object at any time, on grounds relating to his or
          her particular situation, to the processing of personal data concerning him or her
          which is carried out on the basis of Article 6(1)(e) or (f) of the DS-GVO. This also
          applies to profiling based on these provisions.
        </p>
        <p className="mb-4">
          The Roland Gropp ProEntertainment shall no longer process the personal data in the
          event of the objection, unless we can demonstrate compelling legitimate grounds for
          the processing which override the interests, rights and freedoms of the data subject,
          or for the assertion, exercise or defence of legal claims.
        </p>
        <p className="mb-4">
          If the Roland Gropp ProEntertainment processes personal data for direct marketing
          purposes, the data subject shall have the right to object at any time to processing of
          personal data processed for such marketing. This also applies to the profiling, insofar
          as it is related to such direct marketing. If the data subject objects to the Roland
          Gropp ProEntertainment to the processing for direct marketing purposes, the Roland
          Gropp ProEntertainment will no longer process the personal data for these purposes.
        </p>
        <p className="mb-4">
          In addition, the data subject has the right, on grounds relating to his or her particular
          situation, to object to processing of personal data concerning him or her which is
          carried out by the Roland Gropp ProEntertainment for scientific or historical research
          purposes, or for statistical purposes pursuant to Article 89(1) of the DS-GVO, unless
          such processing is necessary for the performance of a task carried out for reasons of
          public interest.
        </p>
        <p className="mb-4">
          In order to exercise the right to object, the data subject may directly contact any
          employee of the Roland Gropp ProEntertainment or another employee. In addition, the
          data subject is free to exercise his or her right to object in connection with the use of
          information society services, notwithstanding Directive 2002/58/EC, by means of
          automated procedures using technical specifications.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">h) Automated decisions in individual cases, including profiling</h3>
        <p className="mb-4">
          Any data subject concerned by the processing of personal data shall have the right,
          granted by the European Directive and Regulation, not to be subject to a decision
          based solely on automated processing, including profiling, which produces legal
          effects concerning him or her or similarly significantly affects him or her, unless the
          decision (1) is necessary for entering into, or the performance of, a contract between
          the data subject and the controller, or (2) is permitted by Union or Member State law
          to which the controller is subject and that law contains suitable measures to
          safeguard the data subject&apos;s rights and freedoms and legitimate interests, or (3) is
          made with the data subject&apos;s explicit consent.
        </p>
        <p className="mb-4">
          If the decision (1) is necessary for entering into, or the performance of, a contract
          between the data subject and the data controller, or (2) it is made with the
          data subject&apos;s explicit consent, the Roland Gropp ProEntertainment shall implement
          suitable measures to safeguard the data subject&apos;s rights and freedoms and legitimate
          interests, which include at least the right to obtain the data subject&apos;s involvement on
          the part of the controller, to express his or her point of view and to contest the
          decision.
        </p>
        <p className="mb-4">
          If the data subject wishes to exercise the rights concerning automated decisions, he or
          she may, at any time, contact any employee of the controller.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">i) Right to withdraw consent under data protection law</h3>
        <p className="mb-4">
          Any data subject concerned by the processing of personal data has the right, granted
          by the European Directive and Regulation Body, to withdraw his or her consent to the
          processing of personal data at any time.
        </p>
        <p className="mb-4">
          If the data subject wishes to exercise the right to withdraw consent, he or she may, at
          any time, contact any employee of the controller.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">8. Legal basis of processing</h2>
        <p className="mb-4">
          Art. 6 I lit. a DS-GVO serves as the legal basis for our company for processing operations
          in which we obtain consent for a specific processing purpose. If the processing of
          personal data is necessary for the performance of a contract to which the data subject is
          a party, as is the case, for example, with processing operations that are necessary for a
          delivery of goods or the provision of another service or consideration, the processing is
          based on Art. 6 I lit. b DS-GVO. The same applies to such processing operations that are
          necessary for the implementation of pre-contractual measures, for example in cases of
          inquiries about our products or services. If our company is subject to a legal obligation
          by which a processing of personal data becomes necessary, such as for the fulfillment of
          tax obligations, the processing is based on Art. 6 I lit. c DS-GVO. In rare cases, the
          processing of personal data might become necessary to protect vital interests of the data
          subject or another natural person. This would be the case, for example, if a visitor were
          to be injured on our premises and as a result his or her name, age, health insurance data
          or other vital information had to be passed on to a doctor, hospital or other third party.
          Then the processing would be based on Art. 6 I lit. d DS-GVO. Finally, processing
          operations could be based on Art. 6 I lit. f DS-GVO. Processing operations that are not
          covered by any of the aforementioned legal bases are based on this legal basis if the
          processing is necessary to protect a legitimate interest of our company or a third party,
          provided that the interests, fundamental rights and freedoms of the data subject are not
          overridden. Such processing operations are permitted to us in particular because they
          were specifically mentioned by the European legislator. In this respect, it took the view
          that a legitimate interest could be assumed if the data subject is a customer of the
          controller (recital 47 sentence 2 DS-GVO).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">9. Legitimate Interests in the processing pursued by the controller or a third party</h2>
        <p className="mb-4">
          If the processing of personal data is based on Article 6 I lit. f DS-GVO, our legitimate
          interest is the performance of our business activities for the benefit of the well-being
          of all our employees and our shareholders.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">10. Duration for which the personal data are stored</h2>
        <p className="mb-4">
          The criterion for the duration of the storage of personal data is the respective statutory
          retention period. After expiry of the period, the corresponding data is routinely deleted,
          provided that it is no longer required for the fulfillment or initiation of the contract.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">11. Legal or Contractual provisions for the provision of personal data; Necessity for the conclusion of the contract; Obligation of the data subject to provide the personal data; Possible Consequences of non-provision</h2>
        <p className="mb-4">
          We inform you that the provision of personal data is sometimes required by law (e.g. tax
          regulations) or may also result from contractual regulations (e.g. information on the
          contractual partner). Sometimes, in order to conclude a contract, it may be necessary for
          a data subject to provide us with personal data that must subsequently be processed by
          us. For example, the data subject is obliged to provide us with personal data if our
          company concludes a contract with him or her. Failure to provide the personal data
          would mean that the contract with the data subject could not be concluded. Before
          providing personal data by the data subject, the data subject must contact one of our
          employees. Our employee will explain to the data subject on a case-by-case
          basis whether the provision of the personal data is required by law or contract or is
          necessary for the conclusion of the contract, whether there is an obligation to provide
          the personal data, and what the consequences of not providing the personal data would be.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">12. Existence of automated decision making</h2>
        <p className="mb-4">
          As a responsible company, we do not use automated decision-making or profiling.
        </p>
      </section>

      <p className="mb-4 italic">
        This data protection declaration was created by the data protection declaration
        generator of DGD Deutsche Gesellschaft für Datenschutz GmbH, which acts as the
        external data protection officer for Lower Bavaria, in cooperation with the data
        protection lawyers of the law firm WILDE BEUGER SOLMECKE | Rechtsanwälte.
      </p>

      <div className="text-sm text-gray-700 mt-8 pt-4 border-t italic">
        Ingolstadt, 10.04.2023
      </div>
    </div>
  );

  return (
    <>
      <PageHeader />
      <section className="py-16">
        <div
          className="container mx-auto px-4 sm:px-8 rounded-lg overflow-hidden shadow-lg p-6 sm:p-8 w-full sm:w-10/12"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="max-w-4xl mx-auto text-gray-800">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{t('title')}</h1>
            {content}
          </div>
        </div>
      </section>
    </>
  );
}
