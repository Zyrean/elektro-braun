import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { servicesSteps } from '@/data/servicesSteps'

function ServiceProcessIcons() {
  return (
    <AppSection className="scroll-mt-30 lg:scroll-mt-40">
      <AppContainer>
        <SectionHeader title="So läuft Ihre Behandlung ab" />

        <div className="mx-auto max-w-3xl space-y-10">
          {servicesSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={index} className="relative flex gap-3">
                {Icon && (
                  <Icon
                    className="text-primary mt-1 h-5 w-5 shrink-0 lg:mt-0 lg:h-7 lg:w-7"
                    strokeWidth={1.5}
                  />
                )}

                <div>
                  <Heading as="h3" className="text-lg sm:text-xl">
                    {step.title}
                  </Heading>
                  <Text color="muted" className="mt-2">
                    {step.text}
                  </Text>
                </div>
              </div>
            )
          })}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default ServiceProcessIcons
