import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { servicesSteps } from '@/data/servicesSteps'

function ServiceProcessSteps() {
  return (
    <AppSection id="services" className="scroll-mt-30 lg:scroll-mt-40">
      <AppContainer>
        <SectionHeader
          title="Ablauf Ihres Projekts"
          subtitle="Von der ersten Beratung bis zur fertigen Umsetzung begleiten wir Ihr Projekt zuverlässig und strukturiert."
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 space-y-10 sm:grid-cols-2 lg:grid-cols-1">
          {servicesSteps.map((step, index) => (
            <div key={step.title} className="relative flex gap-4">
              <div className="text-primary text-xl font-medium">
                {String(index + 1).padStart(2, '0')}
              </div>

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
      </AppContainer>
    </AppSection>
  )
}

export default ServiceProcessSteps
