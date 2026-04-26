import { cn } from '@/lib/cn'

type Variant = 'filled' | 'soft' | 'outline' | 'glass'
type Color = 'gray' | 'primary' | 'white'
type Shape = 'rounded' | 'pill'

interface BadgeProps {
  children: React.ReactNode
  variant?: Variant
  color?: Color
  shape?: Shape
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Badge({
  children,
  variant = 'soft',
  color = 'gray',
  shape = 'rounded',
  icon,
  onClick,
  className,
}: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 text-xs font-medium leading-none transition whitespace-nowrap'

  const shapes = {
    rounded: 'rounded-md px-2 py-1.5',
    pill: 'rounded-full px-3 py-1.5',
  }

  const variants = {
    filled: {
      gray: 'bg-gray-100 text-gray-800',
      primary: 'bg-primary text-white',
      white: 'bg-white text-black',
    },
    soft: {
      gray: 'bg-gray-100/70 text-gray-700',
      primary: 'bg-primary/10 text-primary',
      white: 'bg-white/15 text-white',
    },
    outline: {
      gray: 'border border-gray-300 text-gray-700',
      primary: 'border border-primary text-primary',
      white: 'border border-white/70 text-white',
    },
    glass: {
      gray: 'bg-white/10 text-white backdrop-blur-md',
      primary: 'bg-primary/20 text-white backdrop-blur-md',
      white: 'bg-white/15 text-white backdrop-blur-md',
    },
  }

  return (
    <span
      onClick={onClick}
      className={cn(
        base,
        shapes[shape],
        variants[variant][color],
        onClick && 'cursor-pointer hover:bg-white/20',
        className,
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
