'use client'

import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import { testimonials } from '@/data/testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import StarRatingGroup from '@/components/StarRatingGroup'
import { Text } from '@/components/ui/Text'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GoogleReviews from '@/components/GoogleReviews'

function TestimonialsSingle() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Erfahrungsberichte"
          subtitle="Das sagen unsere Patientinnen und Patienten."
        />

        <GoogleReviews />

        <div className="relative mx-auto max-w-3xl">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop
            grabCursor={true}
            speed={700}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{ clickable: true }}
            className="testimonial-single-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="flex justify-center">
                <figure className="border-primary mx-auto w-full max-w-xl rounded-2xl border bg-white p-8 shadow-xs">
                  <figcaption className="flex items-center gap-x-4">
                    <Image
                      alt={`Image of ${t.author}`}
                      src={t.image || ''}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />

                    <div className="flex flex-col">
                      <Text className="font-semibold">{t.author}</Text>
                      <Text size="sm" color="muted">
                        {t.age} Jahre
                      </Text>
                    </div>
                  </figcaption>

                  <StarRatingGroup className="my-4" />

                  <blockquote>
                    <Text size="base" className="font-medium">
                      {t.text}
                    </Text>
                  </blockquote>
                </figure>
              </SwiperSlide>
            ))}

            <div className="swiper-single" />
          </Swiper>

          {/* 👉 HIERHIN verschieben */}
          <div className="pointer-events-none absolute top-2/5 -right-10 -left-10 z-20 hidden -translate-y-1/2 justify-between lg:flex">
            <button className="testimonial-prev pointer-events-auto">
              <ChevronLeft className="size-5" />
            </button>

            <button className="testimonial-next pointer-events-auto">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default TestimonialsSingle
