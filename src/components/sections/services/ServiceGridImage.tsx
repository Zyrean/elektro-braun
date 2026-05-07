import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ServiceGridImageProps = {
  title: string
  subtitle?: string
  limit?: number
  showButton?: boolean
  belowHero?: boolean
}

function ServiceGridImage({
  limit,
  showButton = true,
  title,
  subtitle,
  belowHero = false,
}: ServiceGridImageProps) {
  const displayedServices = limit ? services.slice(0, limit) : services

  const checkBelowHero = belowHero ? 'lg' : 'none'

  return (
    <AppSection top={checkBelowHero}>
      <AppContainer>
        <SectionHeader title={title} subtitle={subtitle} />

        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {displayedServices.map((service) => (
            <li key={service.id}>
              <Link
                href={`/leistungen/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition"
              >
                <Image
                  src={service.image || ''}
                  alt={service.title || ''}
                  width={600}
                  height={400}
                  className="aspect-4/3 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-101"
                />

                <div className="p-6">
                  <Heading
                    as="h3"
                    size="sm"
                    className="group-hover:text-primary text-[20px] text-balance transition-colors"
                  >
                    {service.title}
                  </Heading>

                  <Text className="mt-2 line-clamp-3" color="muted" size="sm">
                    {service.teaser}
                  </Text>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {showButton && (
          <Button
            rightIcon={<ArrowRight />}
            href="/leistungen#services"
            className="mx-auto mt-8 flex w-full sm:w-fit lg:mt-16"
          >
            Alle Leistungen im Überblick
          </Button>
        )}
      </AppContainer>
    </AppSection>
  )
}

export default ServiceGridImage
