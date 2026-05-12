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
        <div className="from-primary/10 relative z-10 mx-auto max-w-xl rounded-2xl border border-white/20 bg-linear-to-r to-white/60 p-8 shadow-sm shadow-black/10 backdrop-blur-2xl lg:col-span-1 lg:mx-0 lg:-mr-20 lg:shadow-lg">
          <Heading as="h1" className="text-balance lg:text-[40px]">
            Elektro <br /> Braun
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
          {
            src: '/unternehmen/gallery-01.png',
            alt: 'Elektroinstallation im Neubau',
          },
          {
            src: '/unternehmen/gallery-02.png',
            alt: 'Arbeiten am Verteilerkasten',
          },
          {
            src: '/unternehmen/gallery-03.png',
            alt: 'Montage moderner Beleuchtung',
          },
          {
            src: '/unternehmen/gallery-04.png',
            alt: 'Installation von Netzwerktechnik',
          },
          {
            src: '/unternehmen/gallery-05.png',
            alt: 'Elektroarbeiten auf der Baustelle',
          },
          {
            src: '/unternehmen/gallery-06.png',
            alt: 'Smart-Home Installation',
          },
          {
            src: '/unternehmen/gallery-07.png',
            alt: 'Photovoltaik Installation',
          },
          {
            src: '/unternehmen/gallery-08.png',
            alt: 'Moderne Elektroinstallation im Innenbereich',
          },
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
