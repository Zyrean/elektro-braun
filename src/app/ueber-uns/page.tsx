import CtaCenter from '@/components/sections/cta/CtaCenter'
import { FeatureIconGrid } from '@/components/sections/features/FeatureIconGrid'
import Praxis from '@/components/sections/praxis/Praxis'
import SectionHeroSplitFeature from '@/components/sections/section-hero/SectionHeroSplitFeature'
import Team from '@/components/sections/team/Team'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function ServicePage() {
  return (
    <>
      <SectionHeroSplitFeature src="/ueber-uns/team-teaser.png" alt="Hero image">
        <Heading as="h1">Das sind wir</Heading>

        <Text className="mt-6">
          Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit individuell
          abgestimmten Behandlungen helfen wir Ihnen, Beschwerden gezielt zu lindern und Schritt für
          Schritt zurück zu mehr Lebensqualität zu finden.
        </Text>
      </SectionHeroSplitFeature>

      <FeatureIconGrid />
      <Team />
      <Praxis />
      <CtaCenter
        title="Jetzt Termin vereinbaren"
        text=" Egal ob akute Beschwerden oder präventive Behandlung – wir unterstützen Sie dabei, Ihre Beweglichkeit zu verbessern und Schmerzen gezielt zu reduzieren."
        primaryLabel="Termin vereinbaren"
        primaryHref="/kontakt#contact-form"
      />
    </>
  )
}

export default ServicePage
