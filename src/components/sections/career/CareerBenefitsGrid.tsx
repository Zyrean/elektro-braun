import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { careerBenefits } from '@/data/careerBenefits'

function CareerBenefitsGrid() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Warum bei Vitalis arbeiten?"
          subtitle="Darum fühlen sich unsere Mitarbeiterinnen und Mitarbeiter bei uns wohl."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerBenefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="border-border rounded-xl border p-8 transition hover:shadow-sm"
              >
                <div className="flex flex-col gap-4">
                  {Icon && <Icon className="text-primary size-6" />}

                  <Heading as="h3">{benefit.title}</Heading>

                  <Text color="muted">{benefit.text}</Text>
                </div>
              </div>
            )
          })}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default CareerBenefitsGrid
