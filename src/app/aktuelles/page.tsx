import BlogColumnImage from '@/components/sections/blog/BlogColumnImage'
import CtaImage from '@/components/sections/cta/CtaImage'
import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function AktuellesPage() {
  return (
    <>
      <HeroTwoCards imageSrc="/team/team.png" imageAlt="Team Braun Elektrotechnik bei einem Event">
        {/* WENN MAN CARD VERSETZEN WILL = lg:-translate-y-10 */}
        <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20">
          <Heading as="h1" className="leading-tight lg:text-5xl">
            Aktuelles & Einblicke
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
        secondaryHref="/leistungen"
      />
    </>
  )
}

export default AktuellesPage
