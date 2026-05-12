import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { teamMembers } from '@/data/team'
import Image from 'next/image'

export default function TeamGridMax() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Das Team hinter Elektro Braun"
          subtitle="Mit Erfahrung und technischem Know-how begleiten wir Projekte zuverlässig von der Planung bis zur Umsetzung."
        />

        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {teamMembers.map((person) => (
            <li key={person.name}>
              <div className="relative mb-4 aspect-14/13 w-full overflow-hidden rounded-2xl outline -outline-offset-1 outline-black/5">
                <Image
                  alt={person.name}
                  src={person.image}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <Heading as="h3" size="sm" className="ml-1">
                {person.name}
              </Heading>
              <Text size="sm" color="primary" className="ml-1 font-medium">
                {person.role}
              </Text>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}
