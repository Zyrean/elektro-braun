'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import type { EmblaCarouselType } from 'embla-carousel'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

interface GalleryProps {
  title?: string
  subtitle?: string
  images: {
    src: string
    alt: string
  }[]
}

const buttonStyle = `bg-white/90 backdrop-blur text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-200 disabled:opacity-30 disabled:bg-white/90 disabled:text-primary shadow-sm hover:shadow-md disabled:shadow-none hover:cursor-pointer disabled:pointer-events-none hidden xl:flex`

function Gallery({ title, subtitle, images }: GalleryProps) {
  const [api, setApi] = useState<EmblaCarouselType | null>(null)

  const spacing = title ? undefined : 'none'

  const slides = images.map((image) => ({
    src: image.src,
  }))

  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('select', onSelect)

    // Initial setzen ohne ESLint Warning
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <>
      <AppSection top={spacing} bottom={spacing}>
        <AppContainer>
          {title && <SectionHeader title={title} subtitle={subtitle} />}

          <Carousel className="w-full" setApi={(embla) => setApi(embla ?? null)}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div
                    className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-2xl"
                    onClick={() => {
                      setIndex(index)
                      setOpen(true)
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={`Praxis Impression ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover transition duration-500 group-hover:scale-101"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {images.length > 3 && (
              <>
                <CarouselPrevious className={buttonStyle} />
                <CarouselNext className={buttonStyle} />
              </>
            )}

            {/* <CarouselPrevious className={buttonStyle} />
            <CarouselNext className={buttonStyle} /> */}
          </Carousel>

          {/* Mobile Dots */}
          <div className="mt-6 flex justify-center gap-2 xl:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-primary w-5' : 'bg-muted/25 w-2'
                }`}
              />
            ))}
          </div>
        </AppContainer>
      </AppSection>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Zoom]}
        styles={{
          container: {
            padding: '60px 40px',
          },
          slide: {
            maxWidth: '1200px',
            margin: '0 auto',
          },
        }}
      />
    </>
  )
}

export default Gallery
