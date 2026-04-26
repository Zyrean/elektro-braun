import CtaCenter from '@/components/sections/cta/CtaCenter'
import FaqAccordion from '@/components/sections/faq/FaqAccordion'
import FaqSideBySide from '@/components/sections/faq/FaqSideBySide'
import SectionHeroSplit from '@/components/sections/section-hero/SectionHeroSplit'
import ServiceProcessIcons from '@/components/sections/services-process/ServiceProcessIcons'
import ServiceProcessSteps from '@/components/sections/services-process/ServiceProcessSteps'
import ServiceProcessTimeline from '@/components/sections/services-process/ServiceProcessTimeline'
import ServiceGridDetailed from '@/components/sections/services/ServiceGridDetailed'
import ServicePhilosophy from '@/components/sections/services/ServicePhilosophy'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { faqs } from '@/data/faqs'

function ServicePage() {
  return (
    <>
      {/* <SectionHeroSimpleCentered src="/home-hero.png" alt="Physiotherapie Behandlung">
        <Heading as="h1" className="text-white">
          Unsere Leistungen
        </Heading>
      </SectionHeroSimpleCentered> */}

      <SectionHeroSplit src="/home-hero.png" alt="Hero image">
        <Heading as="h1"> Unsere Leistungen</Heading>

        <Text className="mt-6">
          Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit individuell
          abgestimmten Behandlungen helfen wir Ihnen, Beschwerden gezielt zu lindern und Schritt für
          Schritt zurück zu mehr Lebensqualität zu finden.
        </Text>
      </SectionHeroSplit>

      {/* <SectionHeroSplitFeature src="/home-hero.png" alt="Hero image">
        <Heading as="h1"> Unsere Leistungen</Heading>

        <Text className="mt-6">
          Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit individuell
          abgestimmten Behandlungen helfen wir Ihnen, Beschwerden gezielt zu lindern und Schritt für
          Schritt zurück zu mehr Lebensqualität zu finden.
        </Text>
      </SectionHeroSplitFeature> */}

      <ServicePhilosophy />

      <ServiceGridDetailed />
      <ServiceGridDetailed showIndications={false} />

      <ServiceProcessSteps />
      <ServiceProcessIcons />
      <ServiceProcessTimeline />

      {/* FAQ */}
      <FaqAccordion faqs={faqs} />
      <FaqSideBySide />

      <CtaCenter
        title="Vereinbaren Sie jetzt Ihren Termin"
        text="Moderne Physiotherapie für mehr Beweglichkeit..."
        primaryLabel="Termin vereinbaren"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen"
        secondaryHref="/leistungen"
      />
    </>
  )
}

export default ServicePage
