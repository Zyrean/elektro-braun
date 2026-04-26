import { ReadMoreLink } from '@/components/ReadMoreLink'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

function ServiceGridHighlight() {
  const highlight = services[0]
  const desktopServices = services.slice(1, 4)
  const mobileServices = services.slice(1, 3)

  return (
    <AppSection top="3xl">
      <AppContainer>
        <SectionHeader
          title="Unsere Therapien"
          subtitle="Individuelle Physiotherapie für mehr Beweglichkeit und nachhaltige Gesundheit."
        />

        <div className="mb-10 grid items-center rounded-xl bg-white shadow-sm lg:mb-14 lg:grid-cols-2 lg:gap-8">
          <Image
            src={highlight.image || ''}
            alt={highlight.title || ''}
            width={800}
            height={500}
            className="aspect-3/2 w-full rounded-t-xl object-cover lg:rounded-l-xl lg:rounded-tr-none"
          />

          <div className="py-6 pr-6 pl-4 lg:py-8 lg:pr-8 lg:pl-6">
            <Heading as="h2" className="text-xl lg:text-4xl">
              {highlight.title} {highlight.abbreviation && `(${highlight.abbreviation})`}
            </Heading>

            <Text
              className="mt-2 line-clamp-4 sm:max-w-xl sm:leading-6 lg:line-clamp-4"
              color="muted"
              size="sm"
            >
              {highlight.description}
            </Text>

            <ReadMoreLink
              href={`/leistungen/${highlight.slug}`}
              className="mt-6 inline-flex"
              icon={ArrowRight}
            >
              Mehr erfahren
            </ReadMoreLink>
          </div>
        </div>

        {/* Grid */}
        <ul className="hidden grid-cols-3 gap-10 lg:grid">
          {desktopServices.map((service) => (
            <li key={service.id}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                <Image
                  src={`${service.image}`}
                  alt={service.title || ''}
                  width={600}
                  height={400}
                  className="aspect-4/3 w-full object-cover"
                />

                <div className="flex h-full flex-col p-6">
                  <Heading as="h3" size="sm" className="text-[22px] text-balance">
                    {service.title} {service.abbreviation && `(${service.abbreviation})`}
                  </Heading>

                  <Text className="mt-2 line-clamp-3" color="muted" size="sm">
                    {service.teaser}
                  </Text>

                  <ReadMoreLink
                    href={`/leistungen/${service.slug}`}
                    className="mt-auto inline-flex pt-6"
                    icon={ArrowRight}
                  >
                    Mehr erfahren
                  </ReadMoreLink>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
          {mobileServices.map((service) => (
            <li key={service.id}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={service.image || ''}
                  alt={service.title || ''}
                  width={600}
                  height={400}
                  className="aspect-4/3 w-full object-cover"
                />

                <div className="flex h-full flex-col p-6">
                  <Heading as="h3" className="text-balance">
                    {service.title}
                  </Heading>

                  <Text className="mt-2 line-clamp-3" color="muted" size="sm">
                    {service.teaser}
                  </Text>

                  <ReadMoreLink
                    href={`/leistungen/${service.slug}`}
                    className="mt-auto inline-flex pt-6"
                    icon={ArrowRight}
                  >
                    Mehr erfahren
                  </ReadMoreLink>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Button
          rightIcon={<ArrowRight />}
          href="/leistungen#services"
          className="mx-auto mt-8 flex w-full sm:w-fit lg:mt-16"
        >
          Alle Leistungen anzeigen
        </Button>
      </AppContainer>
    </AppSection>
  )
}

export default ServiceGridHighlight
