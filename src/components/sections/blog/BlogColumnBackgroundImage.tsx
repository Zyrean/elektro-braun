import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { references } from '@/data/references'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogColumnBackgroundImage() {
  const slicedReferences = references.slice(0, 3)

  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="From the blog"
          subtitle="Learn how to grow your business with our expert advice."
        />

        <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {slicedReferences.map((reference) => (
            <Link
              key={reference.id}
              href={reference.slug}
              className="transition duration-300 hover:scale-101"
            >
              <article
                key={reference.id}
                className="relative isolate flex h-full flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
              >
                <Image
                  alt={reference.image.alt}
                  src={reference.image.src}
                  className="absolute inset-0 -z-10 size-full object-cover hover:scale-101"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={reference.period} className="mr-8">
                    {reference.period}
                  </time>
                  {/* <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image
                      alt=""
                      src={reference.author.imageUrl}
                      className="size-6 flex-none rounded-full bg-white/10"
                      width={100}
                      height={100}
                    />
                    {reference.author.name}
                  </div>
                </div> */}
                </div>
                <Heading as="h3" className="mt-3 text-white">
                  {reference.name}
                  {/* <a href={reference.href}>
                  <span className="absolute inset-0" />
                </a> */}
                </Heading>
              </article>
            </Link>
          ))}
        </div>

        <Button
          rightIcon={<ArrowRight />}
          href="/references"
          className="mx-auto mt-8 flex w-full sm:w-fit lg:mt-16"
        >
          Alle Referenzen im Überblick
        </Button>
      </AppContainer>
    </AppSection>
  )
}
