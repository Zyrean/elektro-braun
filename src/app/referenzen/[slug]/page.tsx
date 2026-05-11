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
import { CalendarDays, BriefcaseBusiness, MapPin, Wallet } from 'lucide-react'
import Gallery from '@/components/sections/unternehmen/Gallery'
import { InfoCard } from '@/components/ui/InfoCard'

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

  // return (
  //   <>
  //     <AppSection top="sm" bottom="none">
  //       <AppContainer size="5xl">
  //         <div className="flex flex-col gap-10">
  //           <div>
  //             <Heading as="h1" size="sm">
  //               {reference.name}
  //             </Heading>
  //             <Text size="lg" color="muted" className="mt-2 max-w-3xl">
  //               {reference.shortDescription}
  //             </Text>

  //             <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
  //               <Image
  //                 src={reference.image.src || ''}
  //                 alt={`${reference.name} von ${COMPANY.name}`}
  //                 fill
  //                 sizes="(max-width: 768px) 100vw, 800px"
  //                 priority
  //                 className="object-cover object-top"
  //               />
  //             </div>
  //           </div>

  //           <div className="flex flex-col gap-4">
  //             <Heading as="h2" size="sm">
  //               {reference.name} im Detail
  //             </Heading>
  //             <Text className="leading-relaxed">{reference.description}</Text>
  //           </div>
  //         </div>

  //         <CtaRowBorder
  //           title="Die Lösung für Ihr Projekt"
  //           text="Von Elektroinstallationen bis Photovoltaik – wir unterstützen Sie mit moderner Technik und langjähriger Erfahrung."
  //           primaryLabel="Projekt anfragen"
  //           primaryHref="/kontakt#contact-form"
  //         />
  //       </AppContainer>
  //     </AppSection>
  //   </>
  // )

  return (
    <>
      <AppSection top="sm" bottom="none">
        <AppContainer size="5xl">
          <div className="flex flex-col gap-12">
            <div>
              <Heading as="h1" size="sm">
                {reference.name}
              </Heading>

              {/* <Text size="lg" color="muted" className="mt-2 max-w-4xl">
                {reference.shortDescription}
              </Text> */}

              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src={reference.image.src}
                  alt={`${reference.name} von ${COMPANY.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard icon={MapPin} label="Standort" value={reference.location} />

              <InfoCard icon={CalendarDays} label="Zeitraum" value={reference.period} />

              <InfoCard icon={Wallet} label="Projektvolumen" value={reference.cost} />

              <InfoCard icon={BriefcaseBusiness} label="Projektart" value={reference.type || ''} />
            </div>

            <div className="flex max-w-4xl flex-col gap-4">
              <Heading as="h2" size="sm">
                Projektbeschreibung
              </Heading>

              <Text className="leading-7">{reference.description}</Text>
            </div>

            <div className="flex flex-col gap-4">
              <Heading as="h2" size="sm">
                Leistungen im Projekt
              </Heading>

              <div className="flex flex-wrap gap-3">
                {reference.services.map((service, index) => (
                  <div key={index} className="rounded-full border px-4 py-2 text-sm">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <Gallery images={reference.images} />

            {/* {reference.images.length > 0 && (
              <div className="flex flex-col gap-4">
                <Heading as="h2" size="sm">
                  Projektbilder
                </Heading>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {reference.images.map((image, index) => (
                    <div key={index} className="relative h-64 overflow-hidden rounded-2xl">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )} */}
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
