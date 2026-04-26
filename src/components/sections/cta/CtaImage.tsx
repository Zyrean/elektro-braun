import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import Image from 'next/image'

function CtaImage() {
  return (
    <div className="relative bg-white">
      <div className="relative h-64 overflow-hidden sm:rounded-r-xl md:absolute md:top-1/2 md:left-0 md:h-80 md:w-1/3 md:-translate-y-1/2 lg:w-1/2 xl:h-96">
        <Image
          alt=""
          src="/team/team-teaser.png"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl pt-10 pb-24 sm:py-32 lg:px-8">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 xl:pl-24">
          <Heading as="h2">Vereinbaren Sie jetzt Ihren Termin</Heading>
          <Text className="mt-6" color="muted">
            Ob akute Beschwerden oder präventive Therapie – wir begleiten Sie individuell auf Ihrem
            Weg zu mehr Beweglichkeit und Lebensqualität.
          </Text>
          <Button href="/kontakt#contact-form" className="mt-8">
            Termin vereinbaren
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CtaImage
