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

function CtaCenter({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaProps) {
  return (
    <div className="bg-white">
      <div className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2">{title}</Heading>

          <Text className="mx-auto mt-6 max-w-xl" color="muted">
            {text}
          </Text>

          <div className="mt-8 flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:flex-row">
            <Button href={primaryHref}>{primaryLabel}</Button>

            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outline">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaCenter
