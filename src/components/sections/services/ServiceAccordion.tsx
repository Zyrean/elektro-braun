'use client'

import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { services } from '@/data/services'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { ReadMoreLink } from '@/components/ReadMoreLink'

function ServiceAccordion() {
  return (
    <AppSection>
      <AppContainer size="xl" className="lg:max-w-3xl">
        <Heading as="h2" className="mx-auto mb-12 max-w-sm text-center sm:max-w-lg">
          Unsere Behandlungen im Überblick
        </Heading>

        <dl className="divide-muted/20 divide-y">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Disclosure key={service.id} as="div">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full cursor-pointer items-center justify-between py-6 text-left">
                        <Heading
                          as="h4"
                          className="group-hover:text-primary flex items-center gap-3"
                        >
                          {Icon && <Icon className="text-primary size-5" />}
                          {service.title} {service.abbreviation && `(${service.abbreviation})`}
                        </Heading>

                        {open ? (
                          <ChevronUp className="group-hover:text-primary size-5" />
                        ) : (
                          <ChevronDown className="group-hover:text-primary size-5" />
                        )}
                      </DisclosureButton>
                    </dt>

                    {open && (
                      <DisclosurePanel as="dd">
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden pr-12 pb-6"
                        >
                          <Text color="muted">{service.description}</Text>
                          <ReadMoreLink
                            href={`/leistungen/${service.slug}`}
                            className="mt-auto inline-flex pt-6"
                            icon={ArrowRight}
                          >
                            Mehr erfahren
                          </ReadMoreLink>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </>
                )}
              </Disclosure>
            )
          })}
        </dl>
      </AppContainer>
    </AppSection>
  )
}

export default ServiceAccordion
