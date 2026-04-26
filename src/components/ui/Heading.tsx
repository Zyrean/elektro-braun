import { cn } from '@/lib/cn'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
type HeadingSize = 'sm' | 'default'

interface HeadingProps {
  as: HeadingLevel
  size?: HeadingSize
  className?: string
  children: React.ReactNode
}

const baseStyles = 'font-semibold tracking-tight text-foreground'

// 🔥 DEFAULT SCALE
const sizeStyles: Record<HeadingSize, Record<HeadingLevel, string>> = {
  default: {
    h1: 'text-4xl lg:text-5xl leading-tight',
    h2: 'text-3xl lg:text-4xl leading-tight',
    h3: 'text-2xl leading-snug',
    h4: 'text-xl leading-snug',
    h5: 'text-lg leading-snug',
  },

  // 🔥 SM = eine Stufe kleiner
  sm: {
    h1: 'text-3xl lg:text-4xl leading-tight', // = h2 default
    h2: 'text-2xl leading-tight', // = h3 default
    h3: 'text-xl leading-snug', // = h4 default
    h4: 'text-lg leading-snug',
    h5: 'text-base leading-snug',
  },
}

export function Heading({ as: Tag, size = 'default', className, children }: HeadingProps) {
  return <Tag className={cn(baseStyles, sizeStyles[size][Tag], className)}>{children}</Tag>
}

// import { cn } from '@/lib/cn'

// type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
// type HeadingSize = 'sm' | 'default'

// interface HeadingProps {
//   as: HeadingLevel
//   size?: HeadingSize
//   className?: string
//   children: React.ReactNode
// }

// const baseStyles = 'font-semibold tracking-tight text-foreground'

// // 🔥 DEFAULT SCALE
// const sizeStyles: Record<HeadingSize, Record<HeadingLevel, string>> = {
//   default: {
//     h1: 'text-3xl sm:text-5xl lg:text-6xl leading-tight',
//     h2: 'text-2xl sm:text-3xl lg:text-4xl leading-tight',
//     h3: 'text-xl sm:text-2xl leading-snug',
//     h4: 'text-lg leading-snug',
//     h5: 'text-base leading-snug',
//   },

//   // 🔥 SM = eine Stufe kleiner
//   sm: {
//     h1: 'text-2xl sm:text-3xl lg:text-4xl leading-tight', // = h2 default
//     h2: 'text-xl sm:text-2xl leading-tight', // = h3 default
//     h3: 'text-lg leading-snug', // = h4 default
//     h4: 'text-base leading-snug',
//     h5: 'text-sm leading-snug',
//   },
// }

// export function Heading({ as: Tag, size = 'default', className, children }: HeadingProps) {
//   return <Tag className={cn(baseStyles, sizeStyles[size][Tag], className)}>{children}</Tag>
// }
