import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { careerBenefits } from '@/data/careerBenefits'

function CareerBenefits() {
  return (
    <AppSection top="3xl">
      <AppContainer>
        <SectionHeader title="Warum bei Vitalis arbeiten?" />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {careerBenefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div key={index} className="flex gap-4">
                {Icon && <Icon className="text-primary mt-1 size-6 shrink-0" />}

                <div>
                  <Heading as="h3" className="text-lg sm:text-xl">
                    {benefit.title}
                  </Heading>

                  <Text color="muted" className="mt-2 hyphens-auto">
                    {benefit.text}
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

export default CareerBenefits
