import { cn } from '@/lib/cn'

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
type TextColor = 'default' | 'muted' | 'primary' | 'destructive'

interface TextProps {
  size?: TextSize
  color?: TextColor
  className?: string
  children: React.ReactNode
}

const sizes: Record<TextSize, string> = {
  xs: 'text-xs leading-relaxed',
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
  xl: 'text-xl leading-relaxed',
}

const colors: Record<TextColor, string> = {
  default: 'text-foreground',
  muted: 'text-muted',
  primary: 'text-primary',
  destructive: 'text-destructive',
}

export function Text({ size = 'base', color = 'default', className, children }: TextProps) {
  return <p className={cn(sizes[size], colors[color], className)}>{children}</p>
}
