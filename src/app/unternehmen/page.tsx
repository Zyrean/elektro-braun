import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import ServicePhilosophy from '@/components/sections/services/ServicePhilosophy'
import StatsSimpleGrid from '@/components/sections/stats/StatsSimpleGrid'
import TeamGridMax from '@/components/sections/team/TeamGridMax'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { servicePhilosophy } from '@/data/servicePhilosophy'
import Gallery from '@/components/sections/unternehmen/Gallery'
import CtaImage from '@/components/sections/cta/CtaImage'

function ServicePage() {
  return (
    <>
      <HeroTwoCards imageSrc="/home-hero-6.png" imageAlt="Team von Elektro Braun">
        {/* WENN MAN CARD VERSETZEN WILL = lg:-translate-y-10 */}
        <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20">
          <Heading as="h1" className="leading-tight lg:text-5xl">
            Elektro Braun
          </Heading>

          <Text className="mt-6 leading-8">
            Lernen Sie Elektro Braun näher kennen – ein erfahrenes Team mit Leidenschaft für moderne
            Elektrotechnik, zuverlässige Zusammenarbeit und saubere handwerkliche Arbeit.
          </Text>

          <Button href="/kontakt#contact-form" className="mt-8">
            Projekt unverbindlich anfragen
          </Button>
        </div>
      </HeroTwoCards>

      <ServicePhilosophy
        belowHero={true}
        items={servicePhilosophy}
        title="Unser Behandlungsansatz"
        subtitle="So arbeiten wir – strukturiert, individuell und nachvollziehbar."
        clickable={false}
      />

      {/* <FeatureIconGrid /> */}

      <StatsSimpleGrid
        belowHero={false}
        title="Erfahrung, die überzeugt"
        subtitle="Zuverlässige Elektrotechnik – persönlich geplant und professionell umgesetzt."
      />

      <TeamGridMax />

      <Gallery
        title="Einblicke in unseren Arbeitsalltag"
        subtitle="Ein Blick hinter die Kulissen von Elektro Braun."
        images={[
          '/unternehmen/gallery-01.png',
          '/unternehmen/gallery-02.png',
          '/unternehmen/gallery-03.png',
          '/unternehmen/gallery-04.png',
          '/unternehmen/gallery-05.png',
          '/unternehmen/gallery-06.png',
          '/unternehmen/gallery-07.png',
          '/unternehmen/gallery-08.png',
        ]}
      />

      <CtaImage
        title="Persönlich. Zuverlässig. Regional."
        text="Als moderner Fachbetrieb stehen wir für hochwertige Elektrotechnik und partnerschaftliche Zusammenarbeit."
        primaryLabel="Projekt anfragen"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen ansehen"
        secondaryHref="/leistungen#services"
      />
    </>
  )
}

export default ServicePage
