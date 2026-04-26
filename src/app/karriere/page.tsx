import CareerBenefits from '@/components/sections/career/CareerBenefits'
import CareerBenefitsGrid from '@/components/sections/career/CareerBenefitsGrid'
import CareerJobsAccordion from '@/components/sections/career/CareerJobsAccordion'
import CtaCenter from '@/components/sections/cta/CtaCenter'
import Praxis from '@/components/sections/praxis/Praxis'
import SectionHeroSplit from '@/components/sections/section-hero/SectionHeroSplit'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'

function KarrierePage() {
  return (
    <>
      <SectionHeroSplit src="/home-hero.png" alt="Hero image">
        <Heading as="h1">Karriere bei {COMPANY.name}</Heading>

        <Text className="mt-6">
          Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit individuell
          abgestimmten Behandlungen helfen wir Ihnen, Beschwerden gezielt zu lindern und Schritt für
          Schritt zurück zu mehr Lebensqualität zu finden.
        </Text>
      </SectionHeroSplit>
      <CareerBenefits />
      <CareerBenefitsGrid />
      {/* <Team /> */}
      <CareerJobsAccordion />
      <Praxis />
      <CtaCenter
        title="Werde Teil unseres Teams"
        text="Du möchtest in einem modernen, wertschätzenden Umfeld arbeiten..."
        primaryLabel="Jetzt bewerben"
        primaryHref="/kontakt"
        secondaryLabel="Lerne unser Team kennen"
        secondaryHref="/ueber-uns#team"
      />
    </>
  )
}

export default KarrierePage
