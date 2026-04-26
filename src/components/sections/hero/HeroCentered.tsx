import HeroOverlay from '@/components/ui/HeroOverlay'
import Image from 'next/image'

interface HeroSimpleCenteredProps {
  src: string
  srcDesktop?: string
  alt: string
  children: React.ReactNode
}

function HeroCentered({ src, srcDesktop, alt, children }: HeroSimpleCenteredProps) {
  return (
    <section className="relative isolate flex h-svh items-end overflow-hidden pb-10 sm:items-center sm:pb-0">
      <div className="absolute inset-0 -z-20">
        {/* Mobile */}
        <Image src={src} alt={alt} fill sizes="100vw" priority className="object-cover lg:hidden" />

        {/* Desktop */}
        <Image
          src={srcDesktop ?? src}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className="hidden object-cover object-[75%_15%] lg:block"
        />
      </div>

      <HeroOverlay variant="top-left" intensity="soft" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex flex-col items-center text-center sm:translate-y-10">
          {children}
        </div>
      </div>
    </section>
  )
}

export default HeroCentered
