import BlogColumnImage from '@/components/sections/blog/BlogColumnImage'
import CtaImage from '@/components/sections/cta/CtaImage'
import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function AktuellesPage() {
  return (
    <>
      <HeroTwoCards imageSrc="/team/team.png" imageAlt="Team Braun Elektrotechnik bei einem Event">
        <div className="from-primary/10 relative z-10 mx-auto max-w-xl rounded-2xl border border-white/20 bg-linear-to-r to-white/60 p-8 shadow-sm shadow-black/10 backdrop-blur-2xl lg:col-span-1 lg:mx-0 lg:-mr-20 lg:shadow-lg">
          <Heading as="h1" className="lg:text-[40px]">
            Aktuelles & <br /> Einblicke
          </Heading>

          <Text className="mt-6 leading-8">
            Was uns bewegt – Einblicke in unseren Alltag, Projekte und unser Engagement in der
            Region. Hier teilen wir Neuigkeiten, Entwicklungen und besondere Momente aus unserem
            Unternehmen.
          </Text>

          {/* <Button href="/kontakt#contact-form" className="mt-8">
            Projekt unverbindlich anfragen
          </Button> */}
        </div>
      </HeroTwoCards>

      <BlogColumnImage />

      <CtaImage
        title="Bleiben Sie informiert"
        text="Neuigkeiten, Projekte und Einblicke aus unserem Arbeitsalltag rund um moderne Elektrotechnik."
        primaryLabel="Projekt anfragen"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen ansehen"
        secondaryHref="/leistungen#services"
      />
    </>
  )
}

export default AktuellesPage
