import CtaRowBorder from '@/components/sections/cta/CtaRowBorder'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
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

// interface ListComponentProps {
//   title: string
//   items?: string[]
// }

// function ListComponent({ items, title }: ListComponentProps) {
//   return (
//     <div>
//       <Heading as="h3" className="mb-3">
//         {title}
//       </Heading>

//       <ul className="list-disc space-y-2 pl-5">
//         {items?.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

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
              <Text size="lg" color="muted" className="mt-6 max-w-3xl">
                {service.teaser}
              </Text>

              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={service.image || ''}
                  alt={`Image of ${service.title}`}
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
              <Text className="leading-relaxed">{service.description}</Text>

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
