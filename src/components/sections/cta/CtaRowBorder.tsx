import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

interface CtaProps {
  title: string
  text: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

function CtaRowBorder({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaProps) {
  return (
    <div className="mx-auto my-24 flex max-w-7xl flex-col items-center gap-8 rounded-2xl bg-white px-6 py-10 shadow-sm sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div className="text-center lg:text-left">
        <Heading as="h2" className="max-w-2xl">
          {title}
        </Heading>

        <Text className="mt-4 max-w-lg leading-7">{text}</Text>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:flex-col xl:flex-row">
        <Button href={primaryHref}>{primaryLabel}</Button>

        {secondaryLabel && secondaryHref && (
          <Button href={secondaryHref} variant="outline">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

export default CtaRowBorder
