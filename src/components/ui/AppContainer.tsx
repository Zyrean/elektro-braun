import { cn } from '@/lib/cn'

type ContainerSize =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'

interface ContainerProps {
  size?: ContainerSize
  className?: string
  children: React.ReactNode
}

export function AppContainer({ size = '7xl', className, children }: ContainerProps) {
  const variants: Record<ContainerSize, string> = {
    none: 'max-w-none',
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  }

  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', variants[size], className)}>
      {children}
    </div>
  )
}
