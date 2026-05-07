import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { partners } from '@/data/partners'
import Image from 'next/image'

function PartnerGrid() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Unsere Partner"
          subtitle="Wir arbeiten mit namhaften Herstellern und zuverlässigen Partnern zusammen.."
        />
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={index} className="bg-muted/20 p-8 sm:p-10">
              <Image
                alt={partner.alt}
                src={partner.src}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default PartnerGrid
