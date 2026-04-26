import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

function HeroTwoCards() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-3 lg:items-center lg:px-8">
        {/* LEFT: Card */}

        <div className="from-primary/15 to-accent/20 relative z-10 max-w-md rounded-2xl bg-linear-to-br via-white p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20 lg:-translate-y-6">
          {/* <div className="to-primary/25 from-primary/25 via-primary/5 relative z-10 max-w-md rounded-2xl bg-linear-to-br p-8 shadow-xl shadow-black/10 backdrop-blur-lg lg:col-span-1 lg:-mr-20 lg:-translate-y-6"> */}
          <Heading as="h1" className="leading-tight lg:text-5xl">
            Strahlende Gesundheit,
            <br /> ganz natürlich
          </Heading>

          <Text className="mt-4 leading-8">
            Individuelle Physiotherapie für mehr Beweglichkeit, weniger Schmerzen und langfristige
            Lebensqualität.
          </Text>

          <Button href="/kontakt#contact-form" className="mt-8">
            Termin vereinbaren
          </Button>
        </div>

        {/* RIGHT: Image */}
        <div className="relative h-100 w-full overflow-hidden rounded-2xl sm:h-125 lg:col-span-2 lg:h-137.5">
          <Image
            src="/home-hero-right.png"
            alt="Physiotherapie Behandlung"
            fill
            priority
            className="scale-[1.02] object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroTwoCards
