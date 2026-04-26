import HeroOverlay from '@/components/ui/HeroOverlay'
import Image from 'next/image'

interface HeroSimpleCenteredProps {
  src: string
  srcDesktop?: string
  alt: string
  children: React.ReactNode
}

export default function HeroSimpleCentered({
  src,
  srcDesktop,
  alt,
  children,
}: HeroSimpleCenteredProps) {
  return (
    <section className="relative isolate flex h-svh items-end overflow-hidden pb-10 sm:pb-20">
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

      <div className="mx-auto w-full max-w-7xl px-6 sm:ml-4 xl:mx-auto xl:px-7">
        <div className="text-center sm:text-left">{children}</div>
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 sm:ml-4 lg:px-8 xl:ml-28">
        <div className="mx-auto text-center sm:text-left">{children}</div>
      </div> */}
    </section>
  )
}
