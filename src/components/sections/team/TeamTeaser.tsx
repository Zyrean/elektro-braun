import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { COMPANY } from '@/data/company'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function TeamTeaser() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title={`Das Team hinter ${COMPANY.name}`}
          subtitle="Unsere Praxis verbindet moderne Physiotherapie mit persönlicher Betreuung."
        />
        <Button
          rightIcon={<ArrowRight />}
          variant="ghost"
          href="/ueber-uns#team"
          className="mx-auto mt-3 mb-10 flex w-full sm:w-fit"
        >
          Lernen Sie unser Team kennen
        </Button>
        <Link href="/ueber-uns">
          <div className="relative mx-auto aspect-4/3 w-full max-w-3xl cursor-pointer overflow-hidden rounded-2xl transition duration-500 hover:scale-101">
            <Image
              src="/team/team-teaser.png"
              alt="Unser Physiotherapie Team"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover transition duration-500 hover:scale-102"
            />
          </div>
        </Link>
      </AppContainer>
    </AppSection>
  )
}
