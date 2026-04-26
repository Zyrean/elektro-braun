import { GoogleMaps } from '@/components/GoogleMaps'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import SectionHeroSplit from '@/components/sections/section-hero/SectionHeroSplit'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function ContactPage() {
  return (
    <div>
      <SectionHeroSplit src="/home-hero.png" alt="Hero image">
        <Heading as="h1">Kontakt & Terminvereinbarungen</Heading>

        <Text className="mt-6">
          Wir freuen uns auf ihre Anfrage - telefonisch oder über unser Kontaktformular.
        </Text>
      </SectionHeroSplit>

      <ContactForm />

      <ContactInfo />
      <GoogleMaps />
    </div>
  )
}

export default ContactPage
