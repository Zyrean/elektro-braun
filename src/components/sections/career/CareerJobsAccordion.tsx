'use client'

import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { CalendarCheck, ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react'
import { careerJobs } from '@/data/careerJobs'
import { Button } from '@/components/ui/Button'

function CareerJobsAccordion() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Offene Stellen"
          subtitle="Werde Teil unseres Teams und gestalte mit uns die Zukunft der Physiotherapie."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="divide-muted/20 divide-y">
            {careerJobs.map((job) => (
              <Disclosure key={job.id} as="div">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:cursor-pointer">
                        <div>
                          <Heading
                            as="h3"
                            className="group-hover:text-primary text-lg transition-colors"
                          >
                            {job.title}
                          </Heading>

                          <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-3 text-sm">
                            <span className="flex items-center gap-1">
                              <Clock className="size-4" />
                              {job.type}
                            </span>

                            <span className="flex items-center gap-1">
                              <MapPin className="size-4" />
                              {job.location}
                            </span>

                            <span className="flex items-center gap-1">
                              <CalendarCheck className="size-4" />
                              {job.start}
                            </span>
                          </div>
                        </div>

                        {open ? (
                          <ChevronUp className="text-muted-foreground group-hover:text-primary size-5 transition-colors" />
                        ) : (
                          <ChevronDown className="text-muted-foreground group-hover:text-primary size-5 transition-colors" />
                        )}
                      </DisclosureButton>
                    </dt>

                    <DisclosurePanel as="dd" className="pb-6">
                      <div className="space-y-6">
                        <Text color="muted">{job.description}</Text>

                        <div className="border-border/75 border-t pt-6">
                          <Heading as="h4" className="text-base">
                            Deine Aufgaben
                          </Heading>

                          <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-sm">
                            {job.tasks.map((task) => (
                              <li key={task}>{task}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-border/50 border-t pt-6">
                          <Heading as="h4" className="text-base">
                            Das bringst du mit
                          </Heading>

                          <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-sm">
                            {job.requirements.map((req) => (
                              <li key={req}>{req}</li>
                            ))}
                          </ul>

                          <Button size="sm" className="mt-6" href="/kontakt">
                            Jetzt unkompliziert bewerben
                          </Button>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default CareerJobsAccordion
