'use client'

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
import { useState } from 'react'

interface ServiceGridDetailedProps {
  showIndications?: boolean
}

function ServiceGridDetailed({ showIndications = true }: ServiceGridDetailedProps) {
  const num = 4
  const [showAll, setShowAll] = useState(false)

  if (!services) return null

  const displayedServices = showAll ? services : services.slice(0, num)

  function toggle() {
    setShowAll((prev) => !prev)
  }

  return (
    <AppSection id="services" className="scroll-mt-30 lg:scroll-mt-18" top="sm">
      <AppContainer>
        <SectionHeader
          title="Unsere Therapien für Sie"
          subtitle="Darum vertrauen uns unsere Patientinnen und Patienten."
        />

        <div id="leistungen" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {displayedServices.map((service) => (
            // <ServiceItem service={service} key={service.id} />
            <div
              key={service.slug}
              className="relative overflow-hidden rounded-xl bg-white shadow-sm"
            >
              {/* <p className="absolute right-4 top-4 text-primary text-3xl opacity-20">0{id + 1}</p> */}
              <div className="flex h-full flex-col gap-4 p-6 sm:p-7 lg:p-8">
                <Heading as="h3">
                  {/* {service.title} {service.abbreviation && `(${service.abbreviation})`} */}
                  {service.title}
                </Heading>

                <Text color="muted">{service.teaser}</Text>

                {/* {showIndications && (
                  <ul className="ml-4 list-disc space-y-1 text-sm">
                    {service.indications?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )} */}

                <ReadMoreLink
                  icon={ArrowRight}
                  className={cn('mt-auto', showIndications ? 'pt-4' : 'pt-2')}
                  href={`/leistungen/${service.slug}`}
                >
                  Mehr Informationen
                </ReadMoreLink>
              </div>
            </div>
          ))}
        </div>

        {services.length > num && (
          <Button onClick={toggle} className="mx-auto mt-10 flex w-full sm:w-fit lg:mt-16">
            {showAll ? 'Weniger anzeigen' : 'Alle Leistungen anzeigen'}
          </Button>
        )}
      </AppContainer>
    </AppSection>
  )
}

export default ServiceGridDetailed
