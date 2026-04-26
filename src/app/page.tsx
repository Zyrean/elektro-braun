import CtaCenter from '@/components/sections/cta/CtaCenter'
import FeatureZickZackBigImage from '@/components/sections/features/FeatureZickZackBigImage'
import HeroSimpleCentered from '@/components/sections/hero/HeroSimpleCentered'
import ServicePhilosophy from '@/components/sections/services/ServicePhilosophy'
import ServiceSimpleGridReadMore from '@/components/sections/services/ServiceSimpleGridReadMore'
import { TeamTeaser } from '@/components/sections/team/TeamTeaser'
import TestimonialsGridHighlight from '@/components/sections/testimonials/TestimonialsGridHighlight'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { CalendarCheck, ShieldCheck } from 'lucide-react'

import type { Metadata } from 'next'
import { COMPANY } from '@/data/company'
import { SITE_URL } from '@/data/helper'

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
      <HeroSimpleCentered
        src="/home-hero.png"
        srcDesktop="/home-hero-right.png"
        alt="Physiotherapie Behandlung in Emmendingen"
      >
        <h1 className="max-w-xl text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
          Physiotherapie in Emmendingen
        </h1>

        <Text className="mt-6 max-w-md text-white">
          Ob nach einer Verletzung, bei Schmerzen im Alltag oder zur Vorbeugung – wir begleiten Sie
          individuell auf Ihrem Weg zurück zu mehr Beweglichkeit und Wohlbefinden.
        </Text>

        <div className="mt-5 flex items-center justify-center gap-3 sm:flex-row sm:justify-start sm:gap-3">
          <Badge
            variant="glass"
            color="white"
            shape="pill"
            icon={<CalendarCheck className="h-3.5 w-3.5" />}
          >
            Termine kurzfristig
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

      <ServicePhilosophy />

      <ServiceSimpleGridReadMore />
      <FeatureZickZackBigImage />
      <TeamTeaser />
      <TestimonialsGridHighlight />
      {/* <CtaDefault /> */}

      <CtaCenter
        title="Jetzt Termin vereinbaren"
        text=" Egal ob akute Beschwerden oder präventive Behandlung – wir unterstützen Sie dabei, Ihre Beweglichkeit zu verbessern und Schmerzen gezielt zu reduzieren."
        primaryLabel="Termin vereinbaren"
        primaryHref="/kontakt#contact-form"
        secondaryLabel="Leistungen"
        secondaryHref="/leistungen#services"
      />
    </>
  )
}
