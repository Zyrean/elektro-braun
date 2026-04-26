import Image from 'next/image'

interface HeroSplitFeatureProps {
  src: string
  alt: string
  children: React.ReactNode
}

export default function HeroSplitFeature({ src, alt, children }: HeroSplitFeatureProps) {
  return (
    <section className="bg-white">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
        <div className="mx-auto grid max-w-7xl pb-24 sm:pb-32 xl:grid-cols-2 xl:gap-x-20 xl:px-8 xl:pt-32 xl:pb-24">
          <div className="order-2 px-6 sm:px-12 lg:px-16 lg:pt-4 xl:order-1 xl:px-0">
            {children}
          </div>

          <div className="order-1 mt-0 w-full lg:mx-0 xl:order-2 xl:-mr-48 xl:w-auto">
            <div
              aria-hidden
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36"
            />

            <div className="w-screen max-w-none shadow-lg md:rounded-3xl lg:w-full">
              <div className="relative bg-indigo-500/10 md:rounded-3xl">
                <div
                  aria-hidden
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                />
                <div className="relative bg-transparent">
                  <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={900}
                    priority
                    className="aspect-16/11 w-full rounded-b-2xl object-cover sm:aspect-3/2 sm:rounded-b-3xl xl:aspect-16/11 xl:max-w-3xl xl:rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </section>
  )
}
