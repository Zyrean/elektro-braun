// 'use client'

// import { useEffect, useState } from 'react'
// import HeroOverlay from '@/components/ui/HeroOverlay'
// import Image from 'next/image'

// interface HeroGalleryProps {
//   images: string[]
//   alt: string
//   children: React.ReactNode
// }

// function HeroSimpleCenteredGallery({ images, alt, children }: HeroGalleryProps) {
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     if (images.length <= 1) return

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [images])

//   return (
//     <section className="relative isolate flex h-svh items-end overflow-hidden pb-10 sm:pb-20">
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src={images[index]}
//           alt={alt}
//           fill
//           sizes="100vw"
//           priority
//           className="object-cover transition-opacity duration-1000"
//         />
//       </div>

//       <HeroOverlay variant="top-left" intensity="soft" />

//       <div className="mx-auto max-w-7xl px-6 sm:ml-4 lg:px-8 xl:ml-28">
//         <div className="mx-auto text-center sm:text-left">{children}</div>
//       </div>
//     </section>
//   )
// }

// export default HeroSimpleCenteredGallery

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import HeroOverlay from '@/components/ui/HeroOverlay'
import { cn } from '@/lib/cn'

interface HeroGalleryProps {
  images: string[]
  alt: string
  children: React.ReactNode
}

function HeroSimpleCenteredGallery({ images, alt, children }: HeroGalleryProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000) // 🔥 langsamer (wichtiger!)

    return () => clearInterval(interval)
  }, [images])

  return (
    <section className="relative isolate flex h-svh items-end overflow-hidden pb-10 sm:pb-20">
      {/* Background Images (Crossfade) */}
      <div className="absolute inset-0 -z-20">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              'absolute inset-0 object-cover transition-opacity duration-1000',
              i === index ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
      </div>

      <HeroOverlay variant="top-left" intensity="soft" />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:ml-4 xl:mx-auto xl:px-7">
        <div className="text-center sm:text-left">{children}</div>
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 sm:ml-4 lg:px-8 xl:ml-28">
        <div className="mx-auto text-center sm:text-left">{children}</div>
      </div> */}
    </section>
  )
}

export default HeroSimpleCenteredGallery
