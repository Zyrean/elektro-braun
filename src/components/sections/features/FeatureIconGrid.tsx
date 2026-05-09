import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { features } from '@/data/features'

type FeatureIconGridProps = {
  limit?: number
  title?: string
  subtitle?: string
}

export function FeatureIconGrid({ limit, title, subtitle }: FeatureIconGridProps) {
  const displayedFeatures = limit !== undefined ? features.slice(0, limit) : features

  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title={title || 'Zuverlässige Elektrotechnik'}
          subtitle={
            subtitle || 'Zuverlässige Elektrotechnik – modern, sicher und individuell umgesetzt.'
          }
        />

        <ul className="grid gap-14 text-center md:grid-cols-3">
          {displayedFeatures.map((feature) => (
            <li key={feature.id} className="flex flex-col items-center">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <feature.icon className="text-primary h-6 w-6" />
              </div>

              <Heading as="h3" className="mb-2">
                {feature.header}
              </Heading>

              <Text color="muted" size="sm" className="max-w-80">
                {feature.description}
              </Text>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}
