import { Text } from '@/components/ui/Text'
import { Testimonial } from '@/data/testimonials'
import Image from 'next/image'

interface TestimonialItemProps {
  testimonial: Testimonial
}

function TestimonialItem({ testimonial }: TestimonialItemProps) {
  const { text, author, age, image } = testimonial

  return (
    <div className="flex h-64 w-full flex-col rounded-2xl bg-white/75 p-6 shadow-sm transition">
      <blockquote className="text-left leading-relaxed font-medium">
        <Text className="line-clamp-5 text-[15px]">{text}</Text>
      </blockquote>

      <figcaption className="mt-auto pt-6">
        <div className="flex items-center space-x-3 text-sm">
          {image ? (
            <Image
              alt={author}
              src={image}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold">
              {author[0]}
            </div>
          )}
          <Text size="sm" className="font-semibold">
            {author}
          </Text>
          {/* <span className="bg-primary h-1 w-1 rounded-full"></span> */}
          {/* NUR WENN MAN ES AUCH ANZEIGEN LASSEN WILL */}
          {/* <Text size="sm">{age}</Text> */}
        </div>
      </figcaption>
    </div>
  )
}

export default TestimonialItem
