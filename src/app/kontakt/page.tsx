import { GoogleMaps } from '@/components/GoogleMaps'
import ContactFormImage from '@/components/sections/contact/ContactFormImage'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'

function ContactPage() {
  return (
    <div>
      <HeroTwoCards imageSrc="/kontakt/home.png" imageAlt="Team von Elektro Braun">
        {/* WENN MAN CARD VERSETZEN WILL = lg:-translate-y-10 */}
        <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20">
          <Heading as="h1" className="leading-tight lg:text-5xl">
            Kontakt
          </Heading>

          <Text className="mt-6 leading-8">
            Persönlich erreichbar, zuverlässig vor Ort und mit Leidenschaft für moderne
            Elektrotechnik – wir freuen uns auf Ihre Anfrage.
          </Text>

          <Button href="/kontakt#contact-form" className="mt-8">
            Anfrage senden
          </Button>
        </div>
      </HeroTwoCards>

      {/* <ContactFormSimple /> */}

      <ContactInfo
        belowHero={true}
        title="Persönlich erreichbar"
        subtitle="Wir beraten Sie zuverlässig rund um moderne Elektrotechnik."
        cards={[
          {
            title: 'Standort & Einsatzgebiet',
            description: `Unser Firmensitz befindet sich in der ${COMPANY.address.street} in ${COMPANY.address.city}. Wir betreuen private, gewerbliche und industrielle Projekte zuverlässig in der gesamten Region – von klassischen Elektroinstallationen bis hin zu modernen Photovoltaik- und Smart-Home-Lösungen.`,
          },
          {
            title: 'Schnelle Erreichbarkeit',
            list: [
              'Persönliche Beratung per Telefon oder E-Mail',
              'Rückmeldung in der Regel innerhalb von 24 Stunden',
              'Flexible Terminvereinbarung für Ihr Projekt',
            ],
          },
          {
            title: 'Öffnungszeiten',
            list: [
              `Mo-Fr: ${COMPANY.openingHours.week}`,
              `Sa: ${COMPANY.openingHours.saturday}`,
              `So: ${COMPANY.openingHours.sunday}`,
            ],
          },
        ]}
      />

      <ContactFormImage />

      <GoogleMaps />
    </div>
  )
}

export default ContactPage
