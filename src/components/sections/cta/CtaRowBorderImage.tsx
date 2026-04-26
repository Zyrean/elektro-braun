import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function CtaRowBorderImage() {
  return (
    <div className="mx-4 mb-24 max-w-7xl lg:mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/team/team-teaser.png')] bg-cover bg-position-[center_20%]" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-black/25 to-black/75" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8 sm:py-14 lg:px-10">
          <div>
            <Heading as="h2" className="max-w-2xl text-white">
              Jetzt Termin vereinbaren
            </Heading>

            <Text className="mt-4 max-w-md leading-7 text-white/90 lg:max-w-lg">
              Egal ob akute Beschwerden oder präventive Behandlung – wir unterstützen Sie dabei,
              Ihre Beweglichkeit zu verbessern und Schmerzen gezielt zu reduzieren.
            </Text>
          </div>

          <Button href="/kontakt#contact-form" className="w-full sm:w-auto">
            Termin vereinbaren
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CtaRowBorderImage
