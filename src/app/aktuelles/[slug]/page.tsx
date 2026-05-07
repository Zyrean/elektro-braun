import CtaRowBorder from '@/components/sections/cta/CtaRowBorder'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
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
          <div className="flex flex-col gap-10">
            <div>
              <Heading as="h1" size="sm">
                {post.title}
              </Heading>
              <Text size="lg" color="muted" className="mt-6 max-w-3xl">
                {post.title}
              </Text>

              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={post.imageUrl || ''}
                  alt={`Image of ${post.title}`}
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
              <Text className="leading-relaxed">{post.description}</Text>

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
