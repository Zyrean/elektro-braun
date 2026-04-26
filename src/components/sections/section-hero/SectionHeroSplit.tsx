import Image from 'next/image'
import { AppContainer } from '@/components/ui/AppContainer'

interface SectionHeroSplitProps {
  src: string
  alt: string
  children: React.ReactNode
}

function SectionHeroSplit({ src, alt, children }: SectionHeroSplitProps) {
  return (
    <section className="bg-background relative isolate flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
      </div>

      <AppContainer>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="px-6 py-20 sm:col-span-6 sm:px-0 lg:py-24">
            <div className="mx-auto max-w-lg lg:mx-0">{children}</div>
          </div>

          {/* <div className="relative inset-0 left-1/2 col-span-5 hidden aspect-video lg:absolute lg:-mr-8 lg:block lg:rounded-2xl">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="50vw"
              className="rounded-2xl object-cover"
              priority
            />
          </div> */}
          <div className="relative inset-0 left-1/2 col-span-5 hidden aspect-video lg:absolute lg:-mr-8 lg:block">
            <div className="relative h-full w-full overflow-hidden rounded-br-2xl">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="50vw"
                className="rounded-br-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}

export default SectionHeroSplit
