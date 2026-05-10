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
  title: `Elektrotechnik & Photovoltaik in ${COMPANY.address.city} | ${COMPANY.name}`,

  description: `Ihr Fachbetrieb für Elektrotechnik, Photovoltaik und moderne Gebäudetechnik in ${COMPANY.address.city}. Zuverlässige Lösungen für Privat- und Gewerbekunden.`,

  alternates: {
    canonical: `${SITE_URL}/`,
  },

  openGraph: {
    title: `Elektrotechnik & Photovoltaik in ${COMPANY.address.city} | ${COMPANY.name}`,
    description:
      'Moderne Elektrotechnik, Photovoltaik und zuverlässiger Service für Privat- und Gewerbekunden.',
    url: COMPANY.website,
    siteName: COMPANY.name,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/home-hero.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Elektrotechnik`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name}`,
    description: `Elektrotechnik & Photovoltaik in ${COMPANY.address.city}.`,
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
        title="Erfahrung, die überzeugt"
        subtitle="Zuverlässige Elektrotechnik – persönlich geplant und professionell umgesetzt."
      />

      <ServiceGridImage
        limit={6}
        title="Unsere Leistungen"
        subtitle="Moderne Elektrotechnik für Privat- und Geschäftskunden – zuverlässig und individuell umgesetzt."
      />

      <FeatureIconGrid limit={3} />

      <ReferencesColumnBackgroundImage
        mobileCarousel={true}
        limit={6}
        title="Ausgewählte Projekte"
        subtitle="Ein Einblick in unsere Arbeit – von der Planung bis zur Umsetzung zuverlässig realisiert."
      />

      <PartnerSimple />
      <TestimonialsGridHighlight />

      <CtaImage
        title="Moderne Elektrotechnik aus der Region"
        text="Wir begleiten private und gewerbliche Projekte mit zuverlässiger Planung, sauberer Ausführung und persönlicher Beratung."
        primaryLabel="Projekt anfragen"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen ansehen"
        secondaryHref="/leistungen#services"
      />
    </>
  )
}
