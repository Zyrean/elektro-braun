import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { services } from '@/data/services'
import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

function ServiceGridOffsetIcon() {
  const servicesSlice = services.slice(0, 6)

  return (
    <AppSection top="3xl">
      <AppContainer>
        <SectionHeader
          title="Unsere Therapien"
          subtitle="Individuelle Physiotherapie für mehr Beweglichkeit und nachhaltige Gesundheit."
          className="mb-18"
        />

        {/* <ul className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSlice.map((service) => {
            const Icon = service.icon

            return (
              <li key={service.id}>
                <div className="bg-foreground/2 flow-root h-full rounded-xl px-6 pb-8 shadow-sm">
                  <div className="-mt-6 flex flex-col items-center text-center">
                    <div className="bg-primary inline-flex items-center justify-center rounded-xl p-3.5 text-white shadow-lg">
                      {Icon && <Icon className="size-6" />}
                    </div>
                    <Heading as="h3" className="mt-6 text-balance">
                      {service.title} {service.abbreviation && `(${service.abbreviation})`}
                    </Heading>

                    <Text className="mt-3 line-clamp-3" color="muted" size="sm">
                      {service.teaser}
                    </Text>
                  </div>
                </div>
              </li>
            )
          })}
        </ul> */}

        <ul className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSlice.map((service, index) => {
            const Icon = service.icon

            return (
              <li
                key={service.id}
                className={cn(
                  index >= 4 && 'hidden lg:block', // 👈 einzig relevante Änderung
                )}
              >
                <div className="bg-foreground/2 flow-root h-full rounded-xl px-6 pb-8 shadow-sm">
                  <div className="-mt-6 flex flex-col items-center text-center">
                    <div className="bg-primary inline-flex items-center justify-center rounded-xl p-3.5 text-white shadow-lg">
                      {Icon && <Icon className="size-6" />}
                    </div>

                    <Heading as="h3" size="sm" className="mt-6 text-[22px] text-balance">
                      {service.title} {service.abbreviation && `(${service.abbreviation})`}
                    </Heading>

                    <Text className="mt-3 line-clamp-3" color="muted" size="sm">
                      {service.teaser}
                    </Text>
                  </div>
                </div>
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

export default ServiceGridOffsetIcon
