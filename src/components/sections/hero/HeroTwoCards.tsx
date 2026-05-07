import Image from 'next/image'

interface HeroTwoCardsProps {
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
}

function HeroTwoCards({ children, imageSrc, imageAlt }: HeroTwoCardsProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-3 lg:items-center lg:px-8">
        {children}
        <div className="relative h-100 w-full overflow-hidden rounded-2xl sm:h-125 lg:col-span-2 lg:h-137.5">
          <Image
            src={imageSrc}
            alt={imageAlt}
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
