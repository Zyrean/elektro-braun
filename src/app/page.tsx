import TestimonialsGridHighlight from '@/components/sections/testimonials/TestimonialsGridHighlight'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import type { Metadata } from 'next'
import { COMPANY } from '@/data/company'
import { SITE_URL } from '@/data/helper'
import HeroSimpleCenteredGallery from '@/components/sections/hero/HeroSimpleCenteredGallery'
import { Heading } from '@/components/ui/Heading'
import ServiceGridImage from '@/components/sections/services/ServiceGridImage'
import StatsSimpleGrid from '@/components/sections/stats/StatsSimpleGrid'
import { FeatureIconGrid } from '@/components/sections/features/FeatureIconGrid'
import PartnerSimple from '@/components/sections/partners/PartnerSimple'
import ReferencesColumnBackgroundImage from '@/components/sections/references/ReferencesColumnBackgroundImage'
import CtaImage from '@/components/sections/cta/CtaImage'

export const metadata: Metadata = {
  title: `Physiotherapie in ${COMPANY.address.city} | ${COMPANY.name}`,

  description: `Physiotherapie in ${COMPANY.address.city}. Individuelle Behandlungen für mehr Beweglichkeit, weniger Schmerzen und nachhaltige Gesundheit bei ${COMPANY.name}.`,

  alternates: {
    canonical: `${SITE_URL}/`,
  },

  openGraph: {
    title: `Physiotherapie in ${COMPANY.address.city} | ${COMPANY.name}`,
    description: `Moderne Physiotherapie für mehr Beweglichkeit und Lebensqualität.`,
    url: COMPANY.website,
    siteName: COMPANY.name,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/home-hero.png',
        width: 1200,
        height: 630,
        alt: `Physiotherapie ${COMPANY.name}`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name}`,
    description: `Physiotherapie in ${COMPANY.address.city}.`,
    images: ['/home-hero.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <>
      <HeroSimpleCenteredGallery
        alt="Physiotherapie"
        images={[
          '/home-hero-1.png',
          '/home-hero-2.png',
          '/home-hero-3.png',
          '/home-hero-4.png',
          '/home-hero-5.png',
          '/home-hero-6.png',
        ]}
      >
        <Heading as="h1" className="my-6 max-w-xl text-white">
          <span className="text-primary">Ihre Experten</span> für Elektrotechnik und Photovoltaik.
        </Heading>

        {/* <div className="flex flex-col gap-3 text-white">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p>Über 28 Jahre Erfahrung</p>
          </div>

          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p>Über 5.000 Projekte umgesetzt</p>
          </div>

          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p>Zuverlässig & termingerecht</p>
          </div>

          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p>Privat & Gewerbe</p>
          </div>
        </div> */}

        <Text className="max-w-md text-white">
          Ob Neubau, Sanierung oder Reparatur – wir stehen Ihnen mit moderner Elektrotechnik und
          zuverlässigem Service zur Seite. Von der Planung bis zur Umsetzung sorgen wir für sichere
          und zukunftsfähige Lösungen rund um Ihr Zuhause oder Unternehmen.
        </Text>

        <Button href="/kontakt#contact-form" className="mt-8 px-6">
          Unverbindlich beraten lassen
        </Button>
      </HeroSimpleCenteredGallery>

      <StatsSimpleGrid
        belowHero={true}
        title="Erfahrung, auf die man sich verlassen kann"
        subtitle="Als regionaler Fachbetrieb begleiten wir seit vielen Jahren Projekte im Bereich Elektrotechnik – zuverlässig, persönlich und mit hohem Qualitätsanspruch."
      />

      <ServiceGridImage
        limit={6}
        title="Unsere Leistungen"
        subtitle="Moderne Elektrotechnik für Privat- und Geschäftskunden – zuverlässig, sicher und individuell auf Ihre Anforderungen abgestimmt."
      />
      <FeatureIconGrid limit={3} />
      <ReferencesColumnBackgroundImage
        limit={6}
        title="Ausgewählte Projekte"
        subtitle="Ein Einblick in unsere Arbeit – von der Planung bis zur Umsetzung zuverlässig realisiert."
      />
      <PartnerSimple />
      <TestimonialsGridHighlight />
      <CtaImage
        title="Vereinbaren Sie jetzt Ihren Termin"
        text="Moderne Physiotherapie für mehr Beweglichkeit..."
        primaryLabel="Projekt anfragen"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen ansehen"
        secondaryHref="/leistungen"
      />
    </>
  )
}
