import Image from 'next/image'
import test from '@/../public/home-hero-1.png'
import { stats } from '@/data/stats'
import { Text } from '@/components/ui/Text'

export default function StatsSplitImage() {
  return (
    <div className="relative bg-white">
      <Image
        alt=""
        src={test}
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <Text color="primary" className="font-semibold">
              Our track record
            </Text>
            <p className="mt-2 mb-6 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              Trusted by thousands of creators worldwide
            </p>
            <Text color="muted" className="leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </Text>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                >
                  <dt className="text-muted text-sm/6">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
