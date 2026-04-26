import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { COMPANY } from '@/data/company'
import Image from 'next/image'
import Link from 'next/link'

function TeamTeaserFull() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title={`Das Team hinter ${COMPANY.name}`}
          subtitle="Unsere Praxis verbindet moderne Physiotherapie mit persönlicher Betreuung."
        />
        <Link href="/ueber-uns#team">
          <div className="relative mx-auto aspect-2/1 w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl transition duration-500 hover:scale-101">
            <Image
              src="/team/team-teaser.png"
              alt="Unser Physiotherapie Team"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-top transition duration-500 hover:scale-102"
            />
          </div>
        </Link>
      </AppContainer>
    </AppSection>
  )
}

export default TeamTeaserFull
