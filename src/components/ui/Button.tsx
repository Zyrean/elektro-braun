import { cn } from '@/lib/cn'
import Link from 'next/link'

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonColor = 'primary' | 'accent' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant = 'solid' | 'outline' | 'ghost'

interface ButtonProps {
  href?: string
  type?: ButtonType
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export function Button({
  href,
  type = 'button',
  color = 'primary',
  size = 'md',
  variant = 'solid',
  disabled = false,
  onClick,
  leftIcon,
  rightIcon,
  className,
  children,
}: ButtonProps) {
  const minWidth = variant === 'solid' && color === 'primary' ? 'min-w-40' : ''

  const base =
    'inline-flex gap-2 items-center justify-center rounded-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer'

  const variants: Record<ButtonVariant, Record<ButtonColor, string>> = {
    solid: {
      primary: 'bg-primary text-primary-foreground hover:opacity-90',
      accent: 'bg-accent text-accent-foreground hover:opacity-90',
      destructive: 'bg-destructive text-white hover:opacity-90',
    },
    outline: {
      primary: 'border border-primary text-primary hover:bg-primary/10',
      accent: 'border border-accent text-accent hover:bg-accent/10',
      destructive: 'border border-destructive text-destructive hover:bg-destructive/10',
    },
    ghost: {
      primary: 'text-primary hover:bg-primary/10',
      accent: 'text-accent hover:bg-accent/10',
      destructive: 'text-destructive hover:bg-destructive/10',
    },
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  const classes = cn(
    base,
    sizes[size],
    variants[variant][color],
    minWidth,
    disabledStyles,
    className,
  )

  const content = (
    <>
      {leftIcon && (
        <span className="flex items-center [&>svg]:size-4 [&>svg]:shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className="flex items-center [&>svg]:size-4 [&>svg]:shrink-0">{rightIcon}</span>
      )}
    </>
  )

  if (href && !disabled) {
    const isExternal = href.startsWith('http')

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
        >
          {content}
        </a>
      )
    }

    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
