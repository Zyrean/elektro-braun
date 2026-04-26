import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { features } from '@/data/features'
import { cn } from '@/lib/cn'
import Image from 'next/image'

function FeatureZickZack() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title={`Ihre Vorteile bei ${COMPANY.name}`}
          subtitle="Darum vertrauen uns unsere Patientinnen und Patienten."
        />
        <ul className="grid grid-cols-1 gap-y-10 lg:gap-y-14">
          {features.map((step, index) => (
            <li
              key={step.id}
              className={cn(
                'overflow-hidden rounded-xl shadow-sm',
                // index % 2 === 0 ? 'md:translate-y-4' : '-md:translate-y-4',
              )}
            >
              <div className="grid min-h-60 items-center sm:grid-cols-2">
                {/* IMAGE */}
                {/* <div className={cn('relative h-64 lg:h-full', index % 2 === 0 && 'sm:order-2')}> */}
                <div className={cn('relative aspect-4/3', index % 2 === 0 && 'sm:order-2')}>
                  <Image
                    src={step.image}
                    alt={step.header}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className={cn(
                      'object-cover',
                      index % 2 === 0
                        ? 'rounded-tr-xl rounded-br-xl'
                        : 'rounded-tl-xl rounded-bl-xl',
                    )}
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

                  <Text size="base">{step.description}</Text>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}

export default FeatureZickZack
