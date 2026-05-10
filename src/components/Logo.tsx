// 'use client'

// import { Text } from '@/components/ui/Text'
// import { cn } from '@/lib/cn'
// import Image from 'next/image'
// import Link from 'next/link'

// interface LogoProps {
//   onClick?: () => void
//   isHomepage?: boolean
// }

// function Logo({ onClick, isHomepage }: LogoProps) {
//   const handleClick = (e: React.MouseEvent) => {
//     if (isHomepage) {
//       e.preventDefault()
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }

//     onClick?.()
//   }

//   return (
//     <Link
//       href="/"
//       onClick={handleClick}
//       aria-label="Startseite"
//       className="group flex items-center gap-2"
//     >
//       <Image src="/logo.svg" priority alt="Logo" width={60} height={20} className="h-8 w-auto" />

//       <Text
//         color="primary"
//         size="lg"
//         className={cn(
//           'text-sm font-semibold transition-all duration-200 group-hover:opacity-90 sm:flex',
//         )}
//       >
//         Elektro Braun
//       </Text>
//     </Link>
//   )
// }

// export default Logo

'use client'

import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LogoProps {
  onClick?: () => void
}

function Logo({ onClick }: LogoProps) {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    onClick?.()
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Startseite"
      className="group flex items-center gap-2"
    >
      <Image src="/logo.svg" priority alt="Logo" width={60} height={20} className="h-8 w-auto" />

      <Text
        color="primary"
        size="lg"
        className={cn(
          'text-sm font-semibold transition-all duration-200 group-hover:opacity-90 sm:flex',
        )}
      >
        Elektro Braun
      </Text>
    </Link>
  )
}

export default Logo
