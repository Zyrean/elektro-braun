import { cn } from '@/lib/cn'

type SpaceSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface AppSectionProps {
  top?: SpaceSize
  bottom?: SpaceSize
  id?: string
  className?: string
  children: React.ReactNode
}

const spacing: Record<SpaceSize, { top: string; bottom: string }> = {
  none: { top: '', bottom: '' },
  xs: { top: 'pt-8 md:pt-12', bottom: 'pb-8 md:pb-12' },
  sm: { top: 'pt-12 md:pt-16', bottom: 'pb-12 md:pb-16' },
  md: { top: 'pt-16 md:pt-24', bottom: 'pb-16 md:pb-24' },
  lg: { top: 'pt-24 md:pt-32', bottom: 'pb-24 md:pb-32' },
  xl: { top: 'pt-32 md:pt-40', bottom: 'pb-32 md:pb-40' },
  '2xl': { top: 'pt-40 md:pt-48', bottom: 'pb-40 md:pb-48' },
  '3xl': { top: 'pt-48 md:pt-56', bottom: 'pb-48 md:pb-56' },
}

export function AppSection({ top, bottom = 'xl', id, className, children }: AppSectionProps) {
  return (
    <section id={id} className={cn(top && spacing[top].top, spacing[bottom].bottom, className)}>
      {children}
    </section>
  )
}
