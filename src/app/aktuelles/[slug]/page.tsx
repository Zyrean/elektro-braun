import CtaRowBorder from '@/components/sections/cta/CtaRowBorder'
import Gallery from '@/components/sections/unternehmen/Gallery'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { SITE_URL } from '@/data/helper'
import { posts } from '@/data/posts'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const post = posts.find((s) => s.slug === slug)

  if (!post) {
    notFound()
  }

  return {
    title: `${post.title} in ${COMPANY.address.city} | ${COMPANY.name}`,

    description: `${post.title} bei ${COMPANY.name} in ${COMPANY.address.city}. ${post.description}`,

    alternates: {
      canonical: `${SITE_URL}/leistungen/${post.slug}`,
    },

    openGraph: {
      title: `${post.title} in ${COMPANY.address.city}`,
      description: `${post.title} – moderne Physiotherapie bei ${COMPANY.name}.`,
      url: `${SITE_URL}/leistungen/${post.slug}`,
      type: 'website',
      locale: 'de_DE',
      siteName: COMPANY.name,
      images: [
        {
          url: '/services/services-hero.png',
          width: 1200,
          height: 630,
          alt: `${post.title} bei ${COMPANY.name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${COMPANY.name}`,
      description: `${post.title} in ${COMPANY.address.city}.`,
      images: ['/services/services-hero.png'],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function PostDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = posts.find((s) => s.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <AppSection top="sm" bottom="none">
        <AppContainer size="5xl">
          <div className="flex flex-col gap-12">
            <div>
              <Heading as="h1" size="sm" className="max-w-3xl text-balance">
                {post.heroTitle}
              </Heading>

              <div className="mt-3 mb-6 flex max-w-4xl flex-col gap-4">
                <div className="flex items-center gap-x-2 text-xs">
                  <Badge className={post.color}>{post.category.title}</Badge>
                  <span>|</span>
                  <Text size="sm">{post.location}</Text>
                  <span>-</span>
                  <time dateTime={post.datetime} className="text-muted">
                    {post.date}
                  </time>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard icon={MapPin} label="Standort" value={reference.location} />

              <InfoCard icon={CalendarDays} label="Zeitraum" value={reference.period} />

              <InfoCard icon={Wallet} label="Projektvolumen" value={reference.cost} />

              <InfoCard icon={BriefcaseBusiness} label="Projektart" value={reference.type || ''} />
            </div> */}

            <Text className="leading-7">{post.description}</Text>

            {/* <div className="flex flex-col gap-4">
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
            </div> */}

            <Gallery images={post.images} />
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
