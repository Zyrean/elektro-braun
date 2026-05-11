import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

interface ContactInfoCard {
  title: string
  description?: string
  list?: string[]
}

interface ContactInfoProps {
  title: string
  subtitle?: string
  cards: ContactInfoCard[]
  belowHero?: boolean
}

function ContactInfo({ title, subtitle, cards, belowHero }: ContactInfoProps) {
  const checkBelowHero = belowHero ? 'lg' : 'none'

  return (
    <AppSection top={checkBelowHero}>
      <AppContainer>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border-border bg-background flex h-full flex-col rounded-2xl border p-7 shadow-sm"
            >
              <Heading as="h3" className="mb-3 sm:text-xl">
                {card.title}
              </Heading>

              {card.description && (
                <Text size="sm" className="leading-7">
                  {card.description}
                </Text>
              )}

              {card.list && (
                <ul className="space-y-3 pl-4 text-sm">
                  {card.list.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default ContactInfo
