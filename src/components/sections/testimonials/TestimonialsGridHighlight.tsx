'use client'

import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import { testimonials } from '@/data/testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'
import TestimonialItem from '@/components/sections/testimonials/TestimonialItem'
import GoogleReviews from '@/components/GoogleReviews'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function TestimonialsGridHighlight() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Erfahrungsberichte"
          subtitle="Das sagen unsere Patientinnen und Patienten."
        />
        <GoogleReviews />

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          touchStartPreventDefault={false}
          touchReleaseOnEdges={true}
          className="mx-auto max-w-7xl items-stretch px-1!"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="flex h-auto">
              <TestimonialItem testimonial={t} />
            </SwiperSlide>
          ))}
          <div className="swiper-highlight" />
        </Swiper>
      </AppContainer>
    </AppSection>
  )
}
