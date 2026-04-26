import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function ServiceImage() {
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
              <li
                key={index}
                className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center text-white shadow-sm transition hover:scale-101"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <Link href={`/leistungen/${service.slug}`} className="block h-full w-full">
                  <div className="absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-black/85 to-transparent transition duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 p-4">
                    <Heading as="h3" size="sm" className="text-[20px] text-white">
                      {service.title}
                    </Heading>
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

export default ServiceImage
