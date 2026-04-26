import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { servicesSteps } from '@/data/servicesSteps'

function ServiceProcessTimeline() {
  return (
    <AppSection id="services" className="scroll-mt-30 lg:scroll-mt-40">
      <AppContainer>
        <SectionHeader title="So läuft Ihre Behandlung ab" />

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="bg-muted/20 absolute top-3 bottom-12 left-[6.5px] w-px" />

            {servicesSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="bg-primary border-background z-10 mt-2 h-3.5 w-3.5 shrink-0 rounded-full border-2" />

                <div>
                  <Heading as="h3" className="text-lg sm:text-xl">
                    {step.title}
                  </Heading>

                  <Text color="muted" className="mt-2">
                    {step.text}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default ServiceProcessTimeline
