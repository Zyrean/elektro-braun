import Image from 'next/image'

interface SectionHeroSplitFeatureProps {
  src: string
  alt: string
  children: React.ReactNode
}

function SectionHeroSplitFeature({ src, alt, children }: SectionHeroSplitFeatureProps) {
  return (
    <section className="bg-background">
      <div className="from-primary/5 relative isolate overflow-hidden bg-linear-to-b">
        <div className="mx-auto grid max-w-7xl pb-24 sm:pb-32 lg:grid-cols-2 lg:gap-x-20 lg:px-8 lg:pt-32 lg:pb-32">
          <div className="order-2 mt-6 flex flex-col justify-center px-6 lg:order-1 lg:mt-0 lg:px-0">
            {children}
          </div>

          <div className="order-1 mt-0 w-full lg:order-2 lg:mx-0 lg:-mr-48 lg:w-auto">
            <div
              aria-hidden
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36"
            />

            <div className="w-screen max-w-none shadow-lg md:rounded-3xl lg:w-full">
              <div className="relative bg-indigo-500/10 md:rounded-3xl">
                <div
                  aria-hidden
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                />

                <div className="relative">
                  <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={900}
                    priority
                    className="aspect-video w-full max-w-3xl object-cover lg:rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" /> */}
      </div>
    </section>
  )
}

export default SectionHeroSplitFeature
