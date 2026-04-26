import Image from 'next/image'

interface SectionHeroSimpleCenteredProps {
  src: string
  alt: string
  children?: React.ReactNode
}

function SectionHeroSimpleCentered({ src, alt, children }: SectionHeroSimpleCenteredProps) {
  return (
    <section className="relative isolate flex min-h-[35vh] items-center overflow-hidden md:min-h-[40vh] lg:min-h-[50vh]">
      <div className="absolute inset-0 -z-20">
        <Image src={src} alt={alt} fill sizes="100vw" priority className="object-cover" />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">{children}</div>
      </div>
    </section>
  )
}

export default SectionHeroSimpleCentered
