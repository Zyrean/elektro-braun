import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div className={cn('mb-12 max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="text-primary mb-3 text-sm font-medium tracking-wide uppercase">{eyebrow}</p>
      )}

      <Heading as="h2" className="text-balance">
        {title}
      </Heading>

      {subtitle && (
        <Text
          size="base"
          color="muted"
          className={cn(
            'mt-3 text-pretty lg:text-lg',
            centered && 'mx-auto max-w-[34ch] md:max-w-[42ch] lg:max-w-[48ch]',
          )}
        >
          {subtitle}
        </Text>
      )}
    </div>
  )
}
