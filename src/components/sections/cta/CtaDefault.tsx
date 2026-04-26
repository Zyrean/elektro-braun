import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function CtaDefault() {
  return (
    <div className="bg-white">
      <div className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" className="mx-auto max-w-xs lg:max-w-lg">
            Vereinbaren Sie jetzt Ihren Termin
          </Heading>
          <Text className="mx-auto mt-6 max-w-xl leading-7">
            Ob akute Beschwerden oder präventive Therapie – wir begleiten Sie individuell auf Ihrem
            Weg zu mehr Beweglichkeit und Lebensqualität.
          </Text>
          <Button href="/kontakt#contact-form" className="mt-10">
            Termin vereinbaren
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CtaDefault
