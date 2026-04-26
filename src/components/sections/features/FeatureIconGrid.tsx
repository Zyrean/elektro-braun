import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { features } from '@/data/features'

export function FeatureIconGrid() {
  return (
    <AppSection top="sm">
      <AppContainer>
        <SectionHeader
          title="Physiotherapie, die wirklich zu Ihnen passt"
          subtitle=" Viele Behandlungen bleiben oberflächlich. Wir gehen einen Schritt weiter – mit Zeit,
            klarer Struktur und einem Fokus auf nachhaltige Ergebnisse."
        />

        <ul className="grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.id} className="mx-auto text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <feature.icon className="text-primary h-6 w-6" />
              </div>

              <Heading as="h3" className="mb-2">
                {feature.header}
              </Heading>

              <Text color="muted" size="sm" className="max-w-xs">
                {feature.description}
              </Text>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}
