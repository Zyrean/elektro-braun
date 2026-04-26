import Image from 'next/image'

interface HeroImageOffsetProps {
  src: string
  alt: string
  children: React.ReactNode
}

export default function HeroImageOffset({ src, alt, children }: HeroImageOffsetProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-linear-to-b from-indigo-100/20">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:right-0 sm:-mr-80 sm:w-[120%] lg:-mr-96 xl:right-[35%] xl:w-[160%]"
      />

      <div className="mb-6 xl:hidden">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1000}
          priority
          className="aspect-6/5 w-full rounded-b-2xl object-cover sm:aspect-3/2"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 xl:px-8 xl:py-24">
        <div className="order-1 mx-auto max-w-2xl lg:mt-14 lg:ml-10 lg:grid-cols-2 xl:col-end-1 xl:row-start-1 xl:mx-0 xl:grid xl:max-w-none xl:grid-cols-1 xl:grid-rows-1 xl:items-center xl:gap-x-24">
          <div className="xl:col-end-1 xl:row-end-1 xl:max-w-xl">{children}</div>

          <div className="mt-10 hidden overflow-hidden rounded-2xl outline -outline-offset-1 outline-black/5 sm:mt-16 xl:row-span-2 xl:row-end-2 xl:flex xl:translate-y-10">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1000}
              priority
              className="aspect-6/5 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
    </section>
  )
}
