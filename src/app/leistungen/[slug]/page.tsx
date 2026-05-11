import CtaRowBorder from '@/components/sections/cta/CtaRowBorder'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { ListComponent } from '@/components/ui/List'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { SITE_URL } from '@/data/helper'
import { services } from '@/data/services'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return {
    title: `${service.title} in ${COMPANY.address.city} | ${COMPANY.name}`,

    description: `${service.title} bei ${COMPANY.name} in ${COMPANY.address.city}. ${service.teaser}`,

    alternates: {
      canonical: `${SITE_URL}/leistungen/${service.slug}`,
    },

    openGraph: {
      title: `${service.title} in ${COMPANY.address.city}`,
      description: `${service.title} – moderne Physiotherapie bei ${COMPANY.name}.`,
      url: `${SITE_URL}/leistungen/${service.slug}`,
      type: 'website',
      locale: 'de_DE',
      siteName: COMPANY.name,
      images: [
        {
          url: '/services/services-hero.png',
          width: 1200,
          height: 630,
          alt: `${service.title} bei ${COMPANY.name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${COMPANY.name}`,
      description: `${service.title} in ${COMPANY.address.city}.`,
      images: ['/services/services-hero.png'],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <AppSection top="sm" bottom="none">
        <AppContainer size="5xl">
          <div className="flex flex-col gap-10">
            <div>
              <Heading as="h1" size="sm">
                {service.title}
              </Heading>
              {/* <Text size="lg" color="muted" className="mt-2 max-w-3xl">
                {service.teaser}
              </Text> */}

              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={service.image || ''}
                  alt={`${service.title} von ${COMPANY.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Heading as="h2" size="sm">
                {service.title} im Detail
              </Heading>
              <Text className="leading-7">{service.description}</Text>

              {/* <div className="mt-8 flex flex-col gap-10">
                <ListComponent title="Schmerzsymptome" items={service.indications} />
                <ListComponent title="Behandlungsablauf" items={service.process} />
                <ListComponent title="Vorteile" items={service.benefits} />
              </div> */}

              {service.sections &&
                service.sections?.map((service, index) => (
                  <div key={index} className="mt-8 flex flex-col gap-10">
                    <ListComponent title={service.title} items={service.items} />
                  </div>
                ))}
            </div>
          </div>

          <CtaRowBorder
            title="Die Lösung für Ihr Projekt"
            text="Von Elektroinstallationen bis Photovoltaik – wir unterstützen Sie mit moderner Technik und langjähriger Erfahrung."
            primaryLabel="Projekt anfragen"
            primaryHref="/kontakt#contact-form"
          />
        </AppContainer>
      </AppSection>
    </>
  )
}
