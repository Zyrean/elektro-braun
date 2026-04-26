import Link from 'next/link'
import { COMPANY } from '@/data/company'
import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

export default function ImpressumPage() {
  const space = 'flex flex-col gap-2'

  return (
    <AppSection top="sm" bottom="lg">
      <AppContainer>
        <div className="flex flex-col gap-10">
          {/* Title */}
          <Heading as="h2">Impressum</Heading>

          {/* Anbieter */}
          <div className={space}>
            <Heading as="h3">Angaben gemäß § 5 DDG</Heading>

            <address className="flex flex-col gap-1 not-italic">
              <Text>
                <strong>{COMPANY.legalName}</strong>
              </Text>
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

          {/* Geschäftsführung */}
          {COMPANY.legal?.managingDirector && (
            <div className={space}>
              <Heading as="h3">Geschäftsführung</Heading>
              <Text>{COMPANY.legal.managingDirector}</Text>
            </div>
          )}

          {/* Verantwortlicher Inhalt */}
          <div className={space}>
            <Heading as="h3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</Heading>
            <Text>{COMPANY.legal.managingDirector}</Text>
            <Text>
              {COMPANY.address.street}, {COMPANY.address.zip} {COMPANY.address.city}
            </Text>
          </div>

          {/* Handelsregister */}
          {COMPANY.register && (
            <div className={space}>
              <Heading as="h3">Handelsregister</Heading>
              <Text>Registergericht: {COMPANY.register.court}</Text>
              <Text>Registernummer: {COMPANY.register.number}</Text>
            </div>
          )}

          {/* Umsatzsteuer */}
          {COMPANY.legal?.vatId && (
            <div className={space}>
              <Heading as="h3">Umsatzsteuer-ID</Heading>
              <Text>USt-IdNr.: {COMPANY.legal.vatId}</Text>
            </div>
          )}

          {/* Haftung */}
          <div className={space}>
            <Heading as="h3">Haftungsausschluss</Heading>
            <Text>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </Text>
          </div>

          {/* Urheberrecht */}
          <div className={space}>
            <Heading as="h3">Urheberrecht</Heading>
            <Text>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht.
            </Text>
          </div>

          {/* Datenschutz Verweis */}
          <div className={space}>
            <Heading as="h3">Datenschutz</Heading>
            <Text>
              Unsere Datenschutzerklärung finden Sie{' '}
              <Link href="/datenschutz" className="link-primary">
                hier
              </Link>
              .
            </Text>
          </div>
        </div>
      </AppContainer>
    </AppSection>
  )
}
