import { ReadMoreLink } from '@/components/ReadMoreLink'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { services } from '@/data/services'
import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

function ServiceSimpleGridReadMore() {
  const servicesSlice = services.slice(0, 6)

  return (
    <AppSection top="3xl">
      <AppContainer>
        <SectionHeader
          title="Unsere Therapien"
          subtitle="Individuelle Physiotherapie für mehr Beweglichkeit und nachhaltige Gesundheit."
        />

        {/* <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {servicesSlice.map((service) => {
            const Icon = service.icon

            return (
              <li
                key={service.id}
                className="flex h-full flex-col rounded-xl p-6 shadow-sm transition"
              >
                <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
                  {Icon && <Icon className="size-6" />}
                </div>

                <Heading as="h3" className="mt-6 text-balance">
                  {service.title} {service.abbreviation && `(${service.abbreviation})`}
                </Heading>

                <Text className="mt-2 line-clamp-3" color="muted" size="sm">
                  {service.teaser}
                </Text>

                <ReadMoreLink
                  href={`/leistungen/${service.slug}`}
                  className="mt-auto pt-6"
                  icon={ArrowRight}
                >
                  Mehr erfahren
                </ReadMoreLink>
              </li>
            )
          })}
        </ul> */}

        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {servicesSlice.map((service, index) => {
            const Icon = service.icon

            return (
              <li
                key={service.id}
                className={cn(
                  'flex h-full flex-col rounded-xl p-6 shadow-sm transition',
                  index >= 4 && 'hidden lg:flex',
                )}
              >
                <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
                  {Icon && <Icon className="size-6" />}
                </div>

                <Heading as="h3" size="sm" className="mt-6 text-[22px] text-balance">
                  {/* {service.title} {service.abbreviation && `(${service.abbreviation})`} */}
                  {service.title}
                </Heading>

                <Text className="mt-2 line-clamp-3" color="muted" size="sm">
                  {service.teaser}
                </Text>

                <ReadMoreLink
                  href={`/leistungen/${service.slug}`}
                  className="mt-auto pt-6"
                  icon={ArrowRight}
                >
                  Mehr erfahren
                </ReadMoreLink>
              </li>
            )
          })}
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

export default ServiceSimpleGridReadMore
