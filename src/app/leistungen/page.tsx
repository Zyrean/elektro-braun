import CtaImage from '@/components/sections/cta/CtaImage'
import FaqSideBySide from '@/components/sections/faq/FaqSideBySide'
import { FeatureIconGrid } from '@/components/sections/features/FeatureIconGrid'
import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import ReferencesColumnBackgroundImage from '@/components/sections/references/ReferencesColumnBackgroundImage'
import ServiceProcessSteps from '@/components/sections/services-process/ServiceProcessSteps'
import ServiceGridImage from '@/components/sections/services/ServiceGridImage'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { faqs } from '@/data/faqs'
import { Check } from 'lucide-react'

function ServicePage() {
  const serviceFeatures = [
    {
      text: 'Elektroinstallation & Sanierung',
    },
    {
      text: 'Photovoltaik & Energiesysteme',
    },
    {
      text: 'Smart Home & moderne Technik',
    },
    {
      text: 'Wartung, Service & E-Check',
    },
  ]

  return (
    <>
      <HeroTwoCards imageSrc="/home-hero-2.png" imageAlt="Elektroinstallation Leistungen">
        {/* WENN MAN CARD VERSETZEN WILL = lg:-translate-y-10 */}
        <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20">
          <Heading as="h1" className="leading-tight lg:text-5xl">
            Unsere Leistungen
          </Heading>

          <div className="mt-6 flex flex-col gap-2.5">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                <Text>{feature.text}</Text>
              </div>
            ))}
          </div>

          <Button href="/kontakt#contact-form" className="mt-8">
            Projekt unverbindlich anfragen
          </Button>
        </div>
      </HeroTwoCards>

      <ServiceGridImage
        belowHero={true}
        showButton={false}
        title="Unsere Leistungen im Detail"
        subtitle="Von der klassischen Elektroinstallation bis hin zu modernen Energielösungen – wir bieten Ihnen durchdachte und zuverlässige Lösungen für jedes Projekt."
      />

      <FeatureIconGrid
        title="Darauf können Sie sich verlassen"
        subtitle="Wir setzen auf Qualität, saubere Arbeit und zuverlässige Umsetzung – für Ergebnisse, die langfristig überzeugen."
      />

      <ServiceProcessSteps />

      <ReferencesColumnBackgroundImage
        mobileCarousel={true}
        limit={3}
        title="Ausgewählte Projekte"
        subtitle="Ein Einblick in unsere Arbeit – von der Planung bis zur Umsetzung zuverlässig realisiert."
      />

      <FaqSideBySide
        faqs={faqs}
        title="Häufige Fragen zur Elektrotechnik"
        subtitle="Antworten auf die wichtigsten Fragen rund um Planung, Ablauf, Kosten und unsere Leistungen."
      />

      <CtaImage
        title="Die passende Lösung für Ihr Projekt"
        text="Von Elektroinstallationen bis Photovoltaik – wir unterstützen Sie mit moderner Technik und langjähriger Erfahrung."
        primaryLabel="Projekt anfragen"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Referenzen ansehen"
        secondaryHref="/referenzen"
      />
    </>
  )
}

export default ServicePage
