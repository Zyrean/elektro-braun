import HeroOverlay from '@/components/ui/HeroOverlay'

interface HeroVideoProps {
  videoSrc: string
  children: React.ReactNode
}

function HeroVideo({ videoSrc, children }: HeroVideoProps) {
  return (
    <section className="relative isolate flex h-svh items-end overflow-hidden pb-10 sm:pb-20">
      <div className="absolute inset-0 -z-20">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <HeroOverlay variant="full" intensity="strong" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:ml-4 xl:mx-auto xl:px-7">
        <div className="text-center sm:text-left">{children}</div>
      </div>
    </section>
  )
}

export default HeroVideo
