'use client'

import { cn } from '@/lib/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  onClick?: () => void
  isHomepage?: boolean
  textSize?: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({
  href,
  textSize = 'text-sm',
  onClick,
  isHomepage = false,
  children,
  className,
}: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === href || pathname.startsWith(href + '/')

  const base =
    'font-medium whitespace-nowrap hover:underline hover:underline-offset-6 hover:text-primary'

  const styles = isHomepage
    ? isActive
      ? 'text-white'
      : 'text-white hover:text-primary'
    : isActive
      ? 'text-primary'
      : 'text-foreground hover:text-primary'

  return (
    <Link href={href} onClick={onClick} className={cn(base, styles, textSize, className)}>
      {children}
    </Link>
  )
}
