import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { partners } from '@/data/partners'
import Image from 'next/image'

export default function PartnerSimple() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Unsere Partner"
          subtitle="Wir arbeiten mit namhaften Herstellern und zuverlässigen Partnern zusammen."
        />
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-muted/10 rounded-sm py-4 transition hover:cursor-pointer"
            >
              <Image
                alt={partner.alt}
                src={partner.src}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </a>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}
