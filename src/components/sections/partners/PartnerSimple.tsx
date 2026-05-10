import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { partners } from '@/data/partners'
import { cn } from '@/lib/cn'
import Image from 'next/image'

export default function PartnerSimple() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Unsere Partner"
          subtitle="Wir arbeiten mit namhaften Herstellern und zuverlässigen Partnern zusammen."
        />
        <div className="mx-auto grid max-w-lg grid-cols-6 gap-x-2 gap-y-4 sm:flex sm:max-w-xl sm:justify-center sm:gap-x-4 lg:max-w-none">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'hover:bg-accent/10 w-fit rounded-sm px-3 py-3 transition sm:px-4',
                'col-span-2 justify-self-center',
                index === 3 && 'col-start-2',
                index === 4 && 'col-start-4',
              )}
            >
              <Image
                alt={partner.alt}
                src={partner.src}
                width={158}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* <div className="mx-auto grid max-w-lg grid-cols-6 gap-x-6 gap-y-10 sm:flex sm:max-w-xl sm:justify-center sm:gap-x-10 sm:gap-y-14 lg:max-w-none">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'bg-muted/10 rounded-sm py-4 transition hover:cursor-pointer',
                'col-span-2',
                index === 3 && 'col-start-2',
                index === 4 && 'col-start-4',
              )}
            >
              <Image
                alt={partner.alt}
                src={partner.src}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </a>
          ))}
        </div> */}
      </AppContainer>
    </AppSection>
  )
}
