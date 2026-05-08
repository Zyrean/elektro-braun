// import Image from 'next/image'

// interface HeroTwoCardsProps {
//   imageSrc: string
//   imageAlt: string
//   children: React.ReactNode
// }

// function HeroTwoCards({ children, imageSrc, imageAlt }: HeroTwoCardsProps) {
//   return (
//     <section className="py-20 sm:py-28">
//       <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-3 lg:items-center lg:px-8">
//         {children}
//         <div className="relative h-100 w-full overflow-hidden rounded-2xl sm:h-125 lg:col-span-2 lg:h-137.5">
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             priority
//             className="scale-[1.02] object-cover"
//             sizes="(max-width: 1024px) 100vw, 66vw"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroTwoCards

'use client'

import Image from 'next/image'

interface HeroTwoCardsProps {
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
}

function HeroTwoCards({ children, imageSrc, imageAlt }: HeroTwoCardsProps) {
  return (
    <section className="sm:py-28">
      {/* MOBILE */}
      <div className="lg:hidden">
        <div className="relative overflow-hidden rounded-b-2xl">
          {/* IMAGE */}
          <div className="relative h-105 w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* DARK OVERLAY */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </div>

          {/* CARD */}
          <div className="relative z-10 -mt-32 px-4 pb-4">{children}</div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="mx-auto hidden max-w-7xl items-start gap-10 px-6 lg:grid lg:grid-cols-3 lg:items-center lg:px-8">
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
