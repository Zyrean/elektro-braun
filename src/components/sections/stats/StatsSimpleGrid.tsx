import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { stats } from '@/data/stats'

interface StatsSimpleGridProps {
  belowHero: boolean
  title: string
  subtitle?: string
}

export default function StatsSimpleGrid({
  belowHero = false,
  title,
  subtitle,
}: StatsSimpleGridProps) {
  const checkBelowHero = belowHero ? 'lg' : 'none'

  return (
    <AppSection top={checkBelowHero}>
      <AppContainer>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <SectionHeader title={title} subtitle={subtitle} />
          <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-accent flex flex-col p-8">
                <dt className="text-sm/6 font-semibold text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </AppContainer>
    </AppSection>
  )
}
