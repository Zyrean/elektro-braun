import CtaImage from '@/components/sections/cta/CtaImage'
import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import ReferencesColumnBackgroundImage from '@/components/sections/references/ReferencesColumnBackgroundImage'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function ReferencePage() {
  return (
    <>
      <HeroTwoCards
        imageSrc="/references/buero-techsolutions.png"
        imageAlt="Elektroinstallation in einem Büro"
      >
        {/* WENN MAN CARD VERSETZEN WILL = lg:-translate-y-10 */}
        <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20">
          <Heading as="h1" className="leading-tight lg:text-5xl">
            Unsere Referenzen
          </Heading>

          <Text className="mt-6 leading-8">
            Ein Einblick in ausgewählte Projekte im Bereich Elektrotechnik – von klassischen
            Installationen bis hin zu modernen und individuellen Lösungen für Privat- und
            Gewerbekunden.
          </Text>

          <Button href="/kontakt#contact-form" className="mt-8">
            Projekt unverbindlich anfragen
          </Button>
        </div>
      </HeroTwoCards>

      <ReferencesColumnBackgroundImage
        belowHero={true}
        showButton={false}
        title="Unsere Referenzen"
        subtitle="Eine Auswahl an Projekten, die wir in den letzten Jahren für unsere Kunden umsetzen durften."
      />

      <CtaImage
        title="Ihr Projekt in guten Händen"
        text="Mit moderner Elektrotechnik, langjähriger Erfahrung und zuverlässigem Service unterstützen wir Privat- und Gewerbekunden bei individuellen Lösungen rund um Energie und Gebäudetechnik."
        primaryLabel="Projekt anfragen"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen ansehen"
        secondaryHref="/leistungen"
      />
    </>
  )
}

export default ReferencePage
