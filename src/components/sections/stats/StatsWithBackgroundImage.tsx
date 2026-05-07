import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { stats } from '@/data/stats'
import Image from 'next/image'

import test from '@/../public/home-hero-1.png'
import { Text } from '@/components/ui/Text'

export default function StatsWithBackgroundImage() {
  return (
    <AppSection>
      <AppContainer size="none" className="px-0 sm:px-0 lg:px-0">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <Image
            alt=""
            src={test}
            className="absolute inset-0 -z-10 size-full object-cover opacity-20"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <Text color="primary" className="font-semibold">
                Our track record
              </Text>
              <p className="mt-2 mb-6 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Trusted by thousands of creators&nbsp;worldwide
              </p>
              <Text color="muted" className="leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis.
              </Text>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6"
                >
                  <dt className="text-sm/6">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </AppContainer>
    </AppSection>
  )
}
