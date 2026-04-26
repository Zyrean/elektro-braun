import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import Divider from '@/components/ui/Divider'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { COMPANY } from '@/data/company'
import { teamMembers } from '@/data/team'
import Image from 'next/image'

function Team() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title={`Das Team hinter ${COMPANY.name}`}
          subtitle="Kompetenz, Erfahrung und persönliche Betreuung – wir begleiten Sie individuell auf Ihrem Weg zu mehr Beweglichkeit."
        />

        <ul
          role="list"
          className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <li key={member.name}>
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              <Heading as="h3" className="mt-6 lg:text-xl">
                {member.name}
              </Heading>
              <Text color="primary" className="mt-0.5 mb-2 text-[13px] font-semibold italic">
                {member.role}
              </Text>

              <Divider align="left" width={140} />
              <Text className="mt-2 max-w-85" size="sm">
                {member.bio}
              </Text>
            </li>
          ))}
        </ul>
      </AppContainer>
    </AppSection>
  )
}

export default Team
