import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { services } from '@/data/services'
import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function ServiceGridImage() {
  const servicesSlice = services.slice(0, 6)

  return (
    <AppSection top="3xl">
      <AppContainer>
        <SectionHeader
          title="Unsere Therapien"
          subtitle="Individuelle Physiotherapie für mehr Beweglichkeit und nachhaltige Gesundheit."
        />

        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {servicesSlice.map((service, index) => {
            return (
              <li key={service.id} className={cn(index >= 4 && 'hidden lg:block')}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition"
                >
                  <Image
                    src={service.image || ''}
                    alt={service.title || ''}
                    width={600}
                    height={400}
                    className="aspect-4/3 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-101"
                  />

                  <div className="p-6">
                    <Heading
                      as="h3"
                      size="sm"
                      className="group-hover:text-primary text-[20px] text-balance transition-colors"
                    >
                      {service.title} {service.abbreviation && `(${service.abbreviation})`}
                    </Heading>

                    <Text className="mt-2 line-clamp-3" color="muted" size="sm">
                      {service.teaser}
                    </Text>
                  </div>
                </Link>
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

export default ServiceGridImage
