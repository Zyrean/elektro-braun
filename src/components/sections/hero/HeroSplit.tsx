import Image from 'next/image'
import { AppContainer } from '@/components/ui/AppContainer'
import HeroOverlay from '@/components/ui/HeroOverlay'

interface HeroSplitProps {
  src: string
  alt: string
  children: React.ReactNode
}

export default function HeroSplit({ src, alt, children }: HeroSplitProps) {
  return (
    // <section className="relative isolate overflow-hidden flex items-center h-svh">
    <section className="bg-background relative isolate flex h-[calc(100svh-72px)] items-end overflow-hidden pb-10 sm:pb-20 xl:items-center xl:pb-0">
      {/* MOBILE BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 xl:hidden">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" priority />
      </div>

      <HeroOverlay className="xl:hidden" />

      <AppContainer>
        <div className="xl:grid xl:grid-cols-12 xl:gap-x-8">
          {/* TEXT */}
          <div className="px-6 lg:py-20 xl:col-span-6 xl:px-0">
            <div className="mx-auto max-w-lg sm:ml-4 lg:mx-0 lg:max-w-xl">{children}</div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="relative hidden xl:absolute xl:inset-0 xl:left-1/2 xl:col-span-5 xl:-mr-8 xl:block">
            <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" priority />
          </div>
        </div>
      </AppContainer>
    </section>
  )
}
