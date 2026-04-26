import { cn } from '@/lib/cn'

type Variant = 'top' | 'left' | 'top-left' | 'full'
type Intensity = 'soft' | 'medium' | 'strong'

interface HeroOverlayProps {
  variant?: Variant
  intensity?: Intensity
  className?: string
}

export default function HeroOverlay({
  variant = 'top',
  intensity = 'medium',
  className,
}: HeroOverlayProps) {
  const strength = {
    soft: {
      left: 'from-black/40 via-black/20',
      top: 'from-black/40 via-black/20',
      full: 'bg-black/30',
    },
    medium: {
      left: 'from-black/70 via-black/40',
      top: 'from-black/60 via-black/30',
      full: 'bg-black/50',
    },
    strong: {
      left: 'from-black/80 via-black/50',
      top: 'from-black/70 via-black/40',
      full: 'bg-black/70',
    },
  }

  if (variant === 'full') {
    return <div className={cn('absolute inset-0 -z-10', strength[intensity].full, className)} />
  }

  if (variant === 'top-left') {
    return (
      <>
        <div
          className={cn(
            'absolute inset-0 -z-10 bg-linear-to-r to-transparent',
            strength[intensity].left,
          )}
        />
        <div
          className={cn(
            'absolute inset-0 -z-10 bg-linear-to-b to-transparent',
            strength[intensity].top,
          )}
        />
      </>
    )
  }

  const variants = {
    top: cn('bg-linear-to-t to-transparent', strength[intensity].top),
    left: cn('bg-linear-to-r to-transparent', strength[intensity].left),
  }

  return <div className={cn('absolute inset-0 -z-10', variants[variant], className)} />
}
