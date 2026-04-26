import { COMPANY } from '@/data/company'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

export default function DatenschutzPage() {
  const space = 'flex flex-col gap-2'

  return (
    <AppSection top="sm" bottom="lg">
      <AppContainer>
        <div className="flex flex-col gap-10">
          <Heading as="h2">Datenschutzerklärung</Heading>

          <Text>
            Wir freuen uns über Ihren Besuch auf unserer Internetseite{' '}
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              {COMPANY.website}
            </a>{' '}
            und Ihr Interesse an unserem Unternehmen.
          </Text>

          <Text>
            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend
            informieren wir Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten
            auf unserer Webseite.
          </Text>

          {/* Verantwortlicher */}
          <div className={space}>
            <Heading as="h3">Verantwortlicher</Heading>

            <address className="flex flex-col gap-1 not-italic">
              <Text className="font-semibold">{COMPANY.legalName}</Text>

              <Text>{COMPANY.address.street}</Text>

              <Text>
                {COMPANY.address.zip} {COMPANY.address.city}
              </Text>

              <Text>{COMPANY.address.country}</Text>

              <Text>
                E-Mail:{' '}
                <a href={`mailto:${COMPANY.email}`} className="link-primary">
                  {COMPANY.email}
                </a>
              </Text>

              <Text>
                Tel:{' '}
                <a href={`tel:${COMPANY.phone.raw}`} className="link-primary">
                  {COMPANY.phone.display}
                </a>
              </Text>
            </address>
          </div>

          <div className={space}>
            <Heading as="h3">Hosting</Heading>
            <Text>
              Unsere Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
              gehostet.
            </Text>

            <Text>
              Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein
              berechtigtes Interesse an der sicheren und effizienten Bereitstellung unserer Website
              haben.
            </Text>

            <Text>
              Es kann nicht ausgeschlossen werden, dass Daten in die USA übertragen werden. Die
              Übermittlung erfolgt auf Grundlage geeigneter Garantien gemäß Art. 44 ff. DSGVO.
            </Text>
            <Text>
              Weitere Informationen finden Sie in der{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </Text>
          </div>

          {/* Server Logfiles */}
          <div className={space}>
            <Heading as="h3">Server Logfiles</Heading>

            <Text>
              Beim Aufruf unserer Webseite werden automatisch Informationen durch den Browser Ihres
              Endgerätes an unseren Server übermittelt.
            </Text>

            <ul className="text-muted list-disc space-y-1 pl-6">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <Text>
              Diese Daten dienen ausschließlich zur Gewährleistung eines störungsfreien Betriebs der
              Webseite und zur Verbesserung unseres Angebots.
            </Text>
          </div>

          {/* Kontaktformular */}
          <div className={space}>
            <Heading as="h3">Kontaktformular</Heading>

            <Text>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage gespeichert.
            </Text>

            <Text>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</Text>

            <Text>
              Die Verarbeitung der eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO (Bearbeitung Ihrer Anfrage) sowie ggf. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </Text>
          </div>

          <div className={space}>
            <Heading as="h3">Google Maps</Heading>
            <Text>
              Diese Website nutzt Google Maps zur Darstellung von Karteninformationen. Anbieter ist
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </Text>
            <Text>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
              speichern.
            </Text>
            <Text>
              Die Nutzung von Google Maps erfolgt nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1
              lit. a DSGVO.
            </Text>

            <Text>
              Mehr Informationen finden Sie unter:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                https://policies.google.com/privacy
              </a>
            </Text>
          </div>

          {/* Rechte */}
          <div className={space}>
            <Heading as="h3">Rechtsgrundlagen</Heading>
            <Text>
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              DSGVO. Je nach Art der Verarbeitung sind insbesondere folgende Rechtsgrundlagen
              relevant:
            </Text>

            <ul className="text-muted list-disc space-y-1 pl-6">
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / Anfrage)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
            </ul>
          </div>

          <div className={space}>
            <Heading as="h3">Ihre Rechte</Heading>

            <Text>Sie haben jederzeit das Recht auf:</Text>

            <ul className="text-muted list-disc space-y-1 pl-6">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerruf erteilter Einwilligungen</li>
            </ul>

            <Text>Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.</Text>
          </div>

          {/* Kontakt Datenschutz */}

          <div className={space}>
            <Heading as="h3">Kontakt zum Datenschutz</Heading>

            <Text>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden
              Sie sich direkt an:
            </Text>

            <address className="flex flex-col gap-1 not-italic">
              <Text className="font-semibold">{COMPANY.legalName}</Text>

              <Text>
                E-Mail:{' '}
                <a href={`mailto:${COMPANY.email}`} className="link-primary">
                  {COMPANY.email}
                </a>
              </Text>

              <Text>
                Tel:{' '}
                <a href={`tel:${COMPANY.phone.raw}`} className="link-primary">
                  {COMPANY.phone.display}
                </a>
              </Text>
            </address>
          </div>
        </div>
      </AppContainer>
    </AppSection>
  )
}
