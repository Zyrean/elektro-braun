import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { ShieldCheck, Stethoscope, LucideIcon, HandHeart } from 'lucide-react'

interface TeamFeature {
  name: string
  icon: LucideIcon
  description: string
}

const teamPhilosophy: TeamFeature[] = [
  {
    name: 'Prävention',
    icon: ShieldCheck,
    description:
      'Mit gezielter Prävention helfen wir Ihnen, Beschwerden frühzeitig zu erkennen und aktiv vorzubeugen. Für langfristige Gesundheit und mehr Lebensqualität im Alltag.',
  },
  {
    name: 'Therapie',
    icon: Stethoscope,
    description:
      'Individuelle Behandlungskonzepte, abgestimmt auf Ihre persönliche Situation. Modern, wirkungsvoll und mit nachhaltigem Fokus.',
  },
  {
    name: 'Ganzheitliche Betreuung',
    icon: HandHeart,
    description:
      'Wir begleiten Sie persönlich und ganzheitlich – mit Empathie, Fachkompetenz und einem klaren Blick auf Ihre individuellen Ziele.',
  },
]

function TeamPhilosophy() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title=" An folgedem halten wir fest"
          subtitle="Individuelle Lösungen für Ihre Gesundheit und Ihr Wohlbefinden."
        />
        <div className="divide-muted/10 grid grid-cols-1 divide-y sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:divide-y-0 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {teamPhilosophy.map((item) => {
            const Icon = item.icon

            return (
              // <div  className="mx-4 gap-4 sm:mx-0 sm:px-4">
              <div
                key={item.name}
                className="mx-4 gap-4 py-10 sm:mx-0 sm:px-4 sm:py-0 md:text-left lg:block lg:text-center"
              >
                {/* <div className="bg-primary/10 ml-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg lg:mx-auto"> */}
                <Icon className="text-primary h-6 w-6 lg:mx-auto" />

                <div className="mt-6 lg:ml-0">
                  <Heading as="h3">{item.name}</Heading>

                  <Text className="mt-3">{item.description}</Text>
                </div>
              </div>
              // </div>
            )
          })}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default TeamPhilosophy
