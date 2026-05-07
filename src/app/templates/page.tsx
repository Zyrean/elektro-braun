import { GoogleMaps } from '@/components/GoogleMaps'
import BlogColumnBackgroundImage from '@/components/sections/blog/BlogColumnBackgroundImage'
import BlogColumnImage from '@/components/sections/blog/BlogColumnImage'
import BlogNoImage from '@/components/sections/blog/BlogNoImage'
import BlogRowImage from '@/components/sections/blog/BlogRowImage'
import CareerBenefits from '@/components/sections/career/CareerBenefits'
import CareerBenefitsGrid from '@/components/sections/career/CareerBenefitsGrid'
import CareerJobsAccordion from '@/components/sections/career/CareerJobsAccordion'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactFormImage from '@/components/sections/contact/ContactFormImage'
import ContactFormSimple from '@/components/sections/contact/ContactFormSimple'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import CtaCenter from '@/components/sections/cta/CtaCenter'
import CtaDefault from '@/components/sections/cta/CtaDefault'
import CtaImage from '@/components/sections/cta/CtaImage'
import CtaRowBorder from '@/components/sections/cta/CtaRowBorder'
import CtaRowBorderImage from '@/components/sections/cta/CtaRowBorderImage'
import FaqAccordion from '@/components/sections/faq/FaqAccordion'
import FaqSideBySide from '@/components/sections/faq/FaqSideBySide'
import { FeatureIconGrid } from '@/components/sections/features/FeatureIconGrid'
import FeatureZickZack from '@/components/sections/features/FeatureZickZack'
import FeatureZickZackBigImage from '@/components/sections/features/FeatureZickZackBigImage'
import FooterGrid from '@/components/sections/footer/FooterGrid'
import FooterPremium from '@/components/sections/footer/FooterPremium'
import FooterSimpleCenter from '@/components/sections/footer/FooterSimpleCenter'
import FooterSimpleSocial from '@/components/sections/footer/FooterSimpleSocial'
import HeroCentered from '@/components/sections/hero/HeroCentered'
import HeroSplitFeature from '@/components/sections/hero/HeroImageFeature'
import HeroImageOffset from '@/components/sections/hero/HeroImageOffset'
import HeroSimpleCentered from '@/components/sections/hero/HeroSimpleCentered'
import HeroSimpleCenteredGallery from '@/components/sections/hero/HeroSimpleCenteredGallery'
import HeroSplit from '@/components/sections/hero/HeroSplit'
import HeroTwoCards from '@/components/sections/hero/HeroTwoCards'
import HeroVideo from '@/components/sections/hero/HeroVideo'
import PartnerGrid from '@/components/sections/partners/PartnerGrid'
import PartnerSimple from '@/components/sections/partners/PartnerSimple'
import Praxis from '@/components/sections/unternehmen/Gallery'
import SectionHeroSplit from '@/components/sections/section-hero/SectionHeroSplit'
import SectionHeroSplitFeature from '@/components/sections/section-hero/SectionHeroSplitFeature'
import ServiceProcessIcons from '@/components/sections/services-process/ServiceProcessIcons'
import ServiceProcessSteps from '@/components/sections/services-process/ServiceProcessSteps'
import ServiceProcessTimeline from '@/components/sections/services-process/ServiceProcessTimeline'
import ServiceAccordion from '@/components/sections/services/ServiceAccordion'
import ServiceGridDetailed from '@/components/sections/services/ServiceGridDetailed'
import ServiceGridHighlight from '@/components/sections/services/ServiceGridHighlight'
import ServiceGridImage from '@/components/sections/services/ServiceGridImage'
import ServiceGridOffsetIcon from '@/components/sections/services/ServiceGridOffsetIcon'
import ServiceImage from '@/components/sections/services/ServiceImage'
import ServicePhilosophy from '@/components/sections/services/ServicePhilosophy'
import ServiceSimpleGrid from '@/components/sections/services/ServiceSimpleGrid'
import ServiceSimpleGridReadMore from '@/components/sections/services/ServiceSimpleGridReadMore'
import StatsSimpleGrid from '@/components/sections/stats/StatsSimpleGrid'
import StatsSplitImage from '@/components/sections/stats/StatsSplitImage'
import StatsWithBackgroundImage from '@/components/sections/stats/StatsWithBackgroundImage'
import Team from '@/components/sections/team/Team'
import TeamGrid from '@/components/sections/team/TeamGrid'
import TeamGridBio from '@/components/sections/team/TeamGridBio'
import TeamGridMax from '@/components/sections/team/TeamGridMax'
import TeamGridRound from '@/components/sections/team/TeamGridRound'
import TeamPhilosophy from '@/components/sections/team/TeamPhilosophy'
import { TeamTeaser } from '@/components/sections/team/TeamTeaser'
import TestimonialsGridAll from '@/components/sections/testimonials/TestimonialsGridAll'
import TestimonialsGridHighlight from '@/components/sections/testimonials/TestimonialsGridHighlight'
import TestimonialsSingle from '@/components/sections/testimonials/TestimonialsSingle'
import AppHeader from '@/components/ui/AppHeader'
import { AppSection } from '@/components/ui/AppSection'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { faqs } from '@/data/faqs'
import { servicePhilosophy } from '@/data/servicePhilosophy'
import { services } from '@/data/services'
import { CalendarCheck, ShieldCheck } from 'lucide-react'
import Gallery from '@/components/sections/unternehmen/Gallery'

function TemplatePage() {
  return (
    <>
      {/* HEADER */}
      <AppSection>
        <Heading as="h1" className="mb-10 text-center">
          HEADER
        </Heading>
        <AppHeader />
        <AppHeader />
        <AppHeader />
      </AppSection>

      {/* HERO */}
      <AppSection top="sm">
        <Heading as="h1" className="mb-10 text-center">
          HERO HOME
        </Heading>
        <HeroCentered
          src="/home-hero.png"
          srcDesktop="/home-hero-right.png"
          alt="Physiotherapie Behandlung in Emmendingen"
        >
          <Heading as="h1" className="max-w-xl text-white">
            Physiotherapie in Emmendingen
          </Heading>

          <Text className="mt-6 max-w-md text-white">
            Ob nach einer Verletzung, bei Schmerzen im Alltag oder zur Vorbeugung – wir begleiten
            Sie individuell auf Ihrem Weg zurück zu mehr Beweglichkeit und Wohlbefinden.
          </Text>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<CalendarCheck className="h-3.5 w-3.5" />}
            >
              Termine kurzfristig möglich
            </Badge>

            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
            >
              Gesetzlich & privat
            </Badge>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt#contact-form" className="px-6">
              Termin vereinbaren
            </Button>

            {/* <Button href="/leistungen" variant="outline" className="bg-primary/20">
            Leistungen ansehen
          </Button> */}
          </div>
        </HeroCentered>

        <HeroTwoCards imageSrc="/home-hero-6.png" imageAlt="Team von Elektro Braun">
          {/* WENN MAN CARD VERSETZEN WILL = lg:-translate-y-10 */}
          <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20">
            <Heading as="h1" className="leading-tight lg:text-5xl">
              Elektro Braun
            </Heading>

            <Text className="mt-6 leading-8">
              Lernen Sie Elektro Braun näher kennen – ein erfahrenes Team mit Leidenschaft für
              moderne Elektrotechnik, zuverlässige Zusammenarbeit und saubere handwerkliche Arbeit.
            </Text>

            <Button href="/kontakt#contact-form" className="mt-8">
              Kontakt aufnehmen
            </Button>
          </div>
        </HeroTwoCards>

        <HeroSimpleCentered
          src="/home-hero.png"
          srcDesktop="/home-hero-right.png"
          alt="Physiotherapie Behandlung in Emmendingen"
        >
          <Heading as="h1" className="max-w-xl text-white">
            Physiotherapie in Emmendingen
          </Heading>

          <Text className="mt-6 max-w-md text-white">
            Ob nach einer Verletzung, bei Schmerzen im Alltag oder zur Vorbeugung – wir begleiten
            Sie individuell auf Ihrem Weg zurück zu mehr Beweglichkeit und Wohlbefinden.
          </Text>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<CalendarCheck className="h-3.5 w-3.5" />}
            >
              Termine kurzfristig möglich
            </Badge>

            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
            >
              Gesetzlich & privat
            </Badge>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt#contact-form" className="px-6">
              Termin vereinbaren
            </Button>

            {/* <Button href="/leistungen" variant="outline" className="bg-primary/20">
            Leistungen ansehen
          </Button> */}
          </div>
        </HeroSimpleCentered>

        <HeroSplit src="/home-hero.png" alt="Hero image">
          <Heading as="h1">Physiotherapie in Emmendingen</Heading>

          <Text className="mt-6">
            Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit
            individuell abgestimmten Behandlungen unterstützen wir Sie dabei, Beschwerden gezielt zu
            lindern, Ihre Gesundheit nachhaltig zu stärken und Schritt für Schritt zurück zu mehr
            Lebensqualität zu finden.
          </Text>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt#contact-form" className="px-6">
              Termin vereinbaren
            </Button>

            {/* <Button href="/leistungen" variant="outline" className="bg-primary/20">
            Leistungen ansehen
          </Button> */}
          </div>
        </HeroSplit>

        <HeroImageOffset src="/home-hero.png" alt="Hero image">
          <Heading as="h1" className="max-w-2xl lg:col-span-2 xl:col-auto">
            Heilpratiker in Waldkich
          </Heading>
          <div className="mt-6 max-w-xl xl:col-end-1 xl:row-start-1">
            <Text>
              Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit
              individuell abgestimmten Behandlungen unterstützen wir Sie dabei, Beschwerden gezielt
              zu lindern, Ihre Gesundheit nachhaltig zu stärken und Schritt für Schritt zurück zu
              mehr Lebensqualität zu finden.
            </Text>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/kontakt" className="w-1/2 md:w-2/5 lg:w-fit">
                Termin buchen
              </Button>

              <Button href="/leistungen" variant="ghost" className="w-1/2 md:w-2/5 lg:w-fit">
                Leistungen
              </Button>
            </div>
          </div>
        </HeroImageOffset>

        <HeroSplitFeature src="/home-hero.png" alt="Hero image">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <Heading as="h1" className="mt-10">
                Physiotherapie in Emmendingen
              </Heading>

              <Text className="mt-6">
                Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit
                individuell abgestimmten Behandlungen helfen wir Ihnen Beschwerden gezielt zu
                lindern und Schritt für Schritt zu mehr Lebensqualität zurückzufinden.
              </Text>

              <div className="mt-10 flex gap-x-6">
                <Button className="w-1/2 md:w-2/5 lg:w-fit" href="/kontakt">
                  Termin buchen
                </Button>

                <Button className="w-1/2 md:w-2/5 lg:w-fit" href="/leistungen" variant="ghost">
                  Leistungen
                </Button>
              </div>
            </div>
          </div>
        </HeroSplitFeature>

        <HeroSimpleCenteredGallery
          alt="Physiotherapie"
          images={['/home-hero.png', '/home-hero-right.png', '/home-hero-right-site-old.png']}
        >
          <Heading as="h1" className="max-w-xl text-white">
            Physiotherapie in Emmendingen
          </Heading>

          <Text className="mt-6 max-w-md text-white">
            Ob nach einer Verletzung, bei Schmerzen im Alltag oder zur Vorbeugung – wir begleiten
            Sie individuell auf Ihrem Weg zurück zu mehr Beweglichkeit und Wohlbefinden.
          </Text>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<CalendarCheck className="h-3.5 w-3.5" />}
            >
              Termine kurzfristig möglich
            </Badge>

            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
            >
              Gesetzlich & privat
            </Badge>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt#contact-form" className="px-6">
              Termin vereinbaren
            </Button>

            {/* <Button href="/leistungen" variant="outline" className="bg-primary/20">
            Leistungen ansehen
          </Button> */}
          </div>
        </HeroSimpleCenteredGallery>

        <HeroVideo videoSrc="/home-hero.mp4">
          <Heading as="h1" className="max-w-xl text-white">
            Physiotherapie in Emmendingen
          </Heading>

          <Text className="mt-6 max-w-md text-white">
            Ob nach einer Verletzung, bei Schmerzen im Alltag oder zur Vorbeugung – wir begleiten
            Sie individuell auf Ihrem Weg zurück zu mehr Beweglichkeit und Wohlbefinden.
          </Text>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<CalendarCheck className="h-3.5 w-3.5" />}
            >
              Termine kurzfristig möglich
            </Badge>

            <Badge
              variant="glass"
              color="white"
              shape="pill"
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
            >
              Gesetzlich & privat
            </Badge>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/kontakt#contact-form" className="px-6">
              Termin vereinbaren
            </Button>

            {/* <Button href="/leistungen" variant="outline" className="bg-primary/20">
            Leistungen ansehen
          </Button> */}
          </div>
        </HeroVideo>
      </AppSection>

      {/* HERO SECTION */}
      <AppSection top="sm">
        <Heading as="h1" className="mb-10 text-center">
          HERO SECTION
        </Heading>

        <SectionHeroSplit src="/home-hero.png" alt="Hero image">
          <Heading as="h1"> Unsere Leistungen</Heading>

          <Text className="mt-6">
            Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit
            individuell abgestimmten Behandlungen helfen wir Ihnen, Beschwerden gezielt zu lindern
            und Schritt für Schritt zurück zu mehr Lebensqualität zu finden.
          </Text>
        </SectionHeroSplit>

        <SectionHeroSplitFeature src="/home-hero.png" alt="Hero image">
          <Heading as="h1"> Unsere Leistungen</Heading>

          <Text className="mt-6">
            Moderne Physiotherapie für mehr Beweglichkeit und ein schmerzfreies Leben. Mit
            individuell abgestimmten Behandlungen helfen wir Ihnen, Beschwerden gezielt zu lindern
            und Schritt für Schritt zurück zu mehr Lebensqualität zu finden.
          </Text>
        </SectionHeroSplitFeature>
      </AppSection>

      <AppSection top="sm">
        <ServicePhilosophy
          title="Unsere Leistungen"
          subtitle="Individuelle Lösungen für Privat- und Gewerbekunden."
          ctaText="Leistung ansehen"
          items={servicePhilosophy}
        />
      </AppSection>

      {/* SERVICES  */}
      <AppSection>
        <Heading as="h1" className="text-center">
          SERVICES
        </Heading>
        <ServiceGridDetailed />
        <ServiceGridDetailed showIndications={false} />
        <ServiceSimpleGrid />
        <ServiceSimpleGridReadMore />
        <ServiceImage />
        <ServiceGridOffsetIcon />
        <ServiceGridImage />
        <ServiceGridHighlight />
        <ServiceAccordion />
      </AppSection>

      {/* SERVICES PROCESS STEPS  */}
      <AppSection>
        <Heading as="h1" className="text-center">
          SERVICES PROCESS STEPS
        </Heading>
        <ServiceProcessSteps />
        <ServiceProcessIcons />
        <ServiceProcessTimeline />
      </AppSection>

      {/* FEATURES */}
      <AppSection>
        <Heading as="h1" className="text-center">
          FEATURES
        </Heading>
        <div className="pt-48 md:pt-56">
          <FeatureZickZack />
        </div>
        <FeatureZickZackBigImage />
        <FeatureIconGrid />
      </AppSection>

      {/* TEAM */}
      <AppSection>
        <Heading as="h1" className="text-center">
          TEAM
        </Heading>
        <TeamPhilosophy />
        <TeamTeaser />
        <Team />
        <TeamGrid />
        <TeamGridBio />
        <TeamGridMax />
        <TeamGridRound />
      </AppSection>

      {/* TESTIMONIALS */}
      <AppSection>
        <Heading as="h1" className="text-center">
          TESTIMONIALS
        </Heading>
        <TeamPhilosophy />
        <TestimonialsGridHighlight />
        <TestimonialsGridAll />
        <TestimonialsSingle />
      </AppSection>

      {/* PRAXIS */}
      <AppSection>
        <Heading as="h1" className="text-center">
          PRAXIS
        </Heading>
        <div className="pt-48 md:pt-56">
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
        </div>
      </AppSection>

      {/* FAQ */}
      <AppSection>
        <Heading as="h1" className="text-center">
          FAQ
        </Heading>
        <div className="pt-48 md:pt-56">
          <FaqAccordion faqs={faqs} />
        </div>

        <FaqSideBySide faqs={faqs} />
      </AppSection>

      {/* CAREER */}
      <AppSection>
        <Heading as="h1" className="text-center">
          CAREER
        </Heading>

        <CareerBenefits />
        <CareerBenefitsGrid />
        <CareerJobsAccordion />
      </AppSection>

      {/* BLOG */}
      <AppSection>
        <Heading as="h1" className="text-center">
          BLOG
        </Heading>

        <BlogColumnBackgroundImage />
        <BlogColumnImage />
        <BlogNoImage />
        <BlogRowImage />
      </AppSection>

      {/* STATS */}
      <AppSection>
        <Heading as="h1" className="text-center">
          STATS
        </Heading>

        <StatsSimpleGrid
          belowHero={false}
          title="Erfahrung, auf die man sich verlassen kann"
          subtitle="Als regionaler Fachbetrieb begleiten wir seit vielen Jahren Projekte im Bereich Elektrotechnik – zuverlässig, persönlich und mit hohem Qualitätsanspruch."
        />
        <StatsSplitImage />
        <StatsWithBackgroundImage />
      </AppSection>

      {/* PARTNERS */}
      <AppSection>
        <Heading as="h1" className="text-center">
          PARTNERS
        </Heading>

        <PartnerGrid />
        <PartnerSimple />
      </AppSection>

      {/* CONTACT */}
      <AppSection>
        <Heading as="h1" className="text-center">
          CONTACT
        </Heading>

        <ContactForm />
        <ContactFormSimple />
        <ContactFormImage />
        <ContactInfo />
      </AppSection>

      {/* CTA */}
      <AppSection>
        <Heading as="h1" className="text-center">
          CTA
        </Heading>

        <div className="pt-48 md:pt-56">
          <CtaCenter
            title="Werde Teil unseres Teams"
            text="Du möchtest in einem modernen, wertschätzenden Umfeld arbeiten..."
            primaryLabel="Jetzt bewerben"
            primaryHref="/kontakt"
            secondaryLabel="Lerne unser Team kennen"
            secondaryHref="/ueber-uns#team"
          />
        </div>

        <CtaDefault />
        <CtaImage />

        <CtaRowBorder
          title="Starten Sie jetzt Ihre Behandlung"
          text="Ob akute Beschwerden oder präventive Therapie – wir begleiten Sie individuell und professionell auf Ihrem Weg zu mehr Gesundheit und Wohlbefinden."
          primaryLabel="Termin vereinbaren"
          primaryHref="/kontakt#contact-form"
        />

        <CtaRowBorderImage />
      </AppSection>

      {/* GOOGLE */}
      <AppSection>
        <Heading as="h1" className="text-center">
          GOOGLE
        </Heading>

        <GoogleMaps />
      </AppSection>

      {/* FOOTER */}
      <AppSection>
        <Heading as="h1" className="text-center">
          FOOTER
        </Heading>

        <div className="pt-48 md:pt-56">
          <FooterSimpleSocial />
        </div>

        <FooterSimpleCenter />
        <FooterPremium />
        <FooterGrid />
      </AppSection>
    </>
  )
}

export default TemplatePage
