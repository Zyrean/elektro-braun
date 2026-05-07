import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { teamMembers } from '@/data/team'
import Image from 'next/image'

export default function TeamGrid() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Our team"
          subtitle="Kompetenz, Erfahrung und persönliche Betreuung – wir begleiten Sie individuell auf Ihrem Weg zu mehr Beweglichkeit."
        />

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {teamMembers.map((person) => (
            <li key={person.name}>
              <Image
                alt=""
                src={person.image}
                className="mb-6 aspect-square w-full rounded-2xl object-cover object-top outline -outline-offset-1 outline-black/5"
                width={100}
                height={100}
              />
              <Heading as="h3" size="sm">
                {person.name}
              </Heading>
              <Text size="sm" color="muted">
                {person.role}
              </Text>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}
