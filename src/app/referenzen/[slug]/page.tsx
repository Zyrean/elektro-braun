import CtaRowBorder from '@/components/sections/cta/CtaRowBorder'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { SITE_URL } from '@/data/helper'
import { references } from '@/data/references'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return references.map((reference) => ({
    slug: reference.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const reference = references.find((s) => s.slug === slug)

  if (!reference) {
    notFound()
  }

  return {
    title: `${reference.name} in ${COMPANY.address.city} | ${COMPANY.name}`,

    description: `${reference.name} bei ${COMPANY.name} in ${COMPANY.address.city}. ${reference.description}`,

    alternates: {
      canonical: `${SITE_URL}/leistungen/${reference.slug}`,
    },

    openGraph: {
      title: `${reference.name} in ${COMPANY.address.city}`,
      description: `${reference.name} – moderne Physiotherapie bei ${COMPANY.name}.`,
      url: `${SITE_URL}/leistungen/${reference.slug}`,
      type: 'website',
      locale: 'de_DE',
      siteName: COMPANY.name,
      images: [
        {
          url: '/services/services-hero.png',
          width: 1200,
          height: 630,
          alt: `${reference.name} bei ${COMPANY.name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${reference.name} | ${COMPANY.name}`,
      description: `${reference.name} in ${COMPANY.address.city}.`,
      images: ['/services/services-hero.png'],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ReferenceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const reference = references.find((s) => s.slug === slug)

  if (!reference) {
    notFound()
  }

  return (
    <>
      <AppSection top="sm" bottom="none">
        <AppContainer size="5xl">
          <div className="flex flex-col gap-10">
            <div>
              <Heading as="h1" size="sm">
                {reference.name}
              </Heading>
              <Text size="lg" color="muted" className="mt-6 max-w-3xl">
                {reference.name}
              </Text>

              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={reference.image.src || ''}
                  alt={reference.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Heading as="h2" size="sm">
                Was erwartet Sie bei dieser Behandlung?
              </Heading>
              <Text className="leading-relaxed">{reference.description}</Text>

              {/* <div className="mt-8 flex flex-col gap-10">
                <ListComponent title="Schmerzsymptome" items={service.indications} />
                <ListComponent title="Behandlungsablauf" items={service.process} />
                <ListComponent title="Vorteile" items={service.benefits} />
              </div> */}
            </div>
          </div>

          <CtaRowBorder
            title="Starten Sie jetzt Ihre Behandlung"
            text="Ob akute Beschwerden oder präventive Therapie – wir begleiten Sie individuell und professionell auf Ihrem Weg zu mehr Gesundheit und Wohlbefinden."
            primaryLabel="Termin vereinbaren"
            primaryHref="/kontakt#contact-form"
          />
        </AppContainer>
      </AppSection>
    </>
  )
}
