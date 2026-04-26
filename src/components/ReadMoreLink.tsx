import Link from 'next/link'
import { cn } from '@/lib/cn'
import { LucideIcon } from 'lucide-react'

interface ReadMoreLinkProps {
  href: string
  className?: string
  children?: React.ReactNode
  icon?: LucideIcon
}

export function ReadMoreLink({
  href,
  className,
  icon: Icon,
  children = 'Mehr erfahren',
}: ReadMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-primary inline-flex w-fit items-center gap-1 text-sm font-medium decoration-1 underline-offset-4 hover:underline',
        className,
      )}
    >
      {children}
      {Icon && <Icon className="size-4" />}
    </Link>
  )
}
