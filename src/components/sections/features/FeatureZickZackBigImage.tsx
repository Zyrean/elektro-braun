import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { features } from '@/data/features'
import { cn } from '@/lib/cn'
import Image from 'next/image'

function FeatureZickZackBigImage() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title={`Ihre Vorteile bei ${COMPANY.name}`}
          subtitle="Darum vertrauen uns unsere Patientinnen und Patienten."
        />
        <ul className="grid grid-cols-1 gap-y-10 md:gap-y-10 lg:gap-y-14">
          {features.map((step, index) => (
            <li
              key={step.id}
              className="overflow-hidden rounded-xl shadow-sm sm:rounded-none sm:shadow-none"
            >
              <div className="grid min-h-60 grid-cols-1 items-center sm:grid-cols-2">
                {/* IMAGE */}
                <div className={cn('relative h-52.5 lg:h-105', index % 2 === 0 && 'sm:order-2')}>
                  <Image
                    src={step.image}
                    alt={step.header}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className={cn('rounded-t-xl object-cover sm:rounded-xl')}
                  />
                </div>

                {/* TEXT */}
                <div className="p-8 lg:p-16">
                  <Text size="base" className="mb-2 font-semibold" color="primary">
                    {step.feature}
                  </Text>

                  <Heading as="h3" className="mb-2">
                    {step.header}
                  </Heading>

                  <Text size="base" className="lg:hidden">
                    {step.description}
                  </Text>
                  <Text size="base" className="hidden lg:flex">
                    {step.descriptionLong}
                  </Text>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}

export default FeatureZickZackBigImage
