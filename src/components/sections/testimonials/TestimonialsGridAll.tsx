import GoogleReviews from '@/components/GoogleReviews'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { testimonials } from '@/data/testimonials'
import Image from 'next/image'

function TestimonialsGridAll() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="Erfahrungsberichte"
          subtitle="Das sagen unsere Patientinnen und Patienten."
        />
        <GoogleReviews />

        <div className="-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
              <figure className="rounded-2xl bg-white p-8 shadow-sm">
                <blockquote>
                  <Text>{`“${testimonial.text}”`}</Text>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    alt={testimonial.author}
                    src={testimonial.image || ''}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <Text size="sm" className="leading-snug font-semibold">
                      {testimonial.author}
                    </Text>

                    <Text size="xs" color="muted" className="leading-snug">
                      {testimonial.age} Jahre
                    </Text>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default TestimonialsGridAll
