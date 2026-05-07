import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { teamMembers } from '@/data/team'
import Image from 'next/image'

export default function TeamGridBio() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Our team"
          subtitle="Kompetenz, Erfahrung und persönliche Betreuung – wir begleiten Sie individuell auf Ihrem Weg zu mehr Beweglichkeit."
        />

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {teamMembers.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                alt=""
                src={person.image}
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline -outline-offset-1 outline-black/5"
                width={100}
                height={100}
              />
              <div className="flex-auto">
                <Heading as="h3" size="sm">
                  {person.name}
                </Heading>
                <Text color="primary" size="sm">
                  {person.role}
                </Text>
                <Text color="muted" className="mt-6">
                  {person.bio}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}
