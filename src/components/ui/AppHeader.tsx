'use client'

import Logo from '@/components/Logo'
import { AppContainer } from '@/components/ui/AppContainer'
import { Button } from '@/components/ui/Button'
import MobileMenu from '@/components/ui/MobileMenu'
import NavLink from '@/components/ui/NavLink'
import { headerNavigation } from '@/data/headerNavigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'

function AppHeader() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  // 👇 HIER entscheidest du manuell
  const variant = 'blur' // 'solid' | 'blur'

  const styles = {
    solid: 'bg-background shadow-sm',
    blur: 'bg-background/30 backdrop-blur-md shadow-sm',
  }

  return (
    <header
      className={cn(
        'inset-x-0 top-0 z-50',

        // Homepage → immer transparent
        isHomepage ? 'absolute' : 'sticky',

        // Unterseiten → dein gewähltes Styling
        !isHomepage && styles[variant],
      )}
    >
      <AppContainer>
        <nav className="grid h-22 grid-cols-2 items-center md:grid-cols-3">
          {/* LEFT */}
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* CENTER */}
          <div className="hidden gap-10 justify-self-center md:flex">
            {headerNavigation.map((nav) => (
              <NavLink key={nav.href} href={nav.href} isHomepage={isHomepage}>
                {nav.label}
              </NavLink>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 justify-self-end">
            <div className="hidden md:block">
              <Button href="/kontakt" className="shadow-sm">
                Kontakt
              </Button>
            </div>

            <MobileMenu navigation={headerNavigation} isHomepage={isHomepage} />
          </div>
        </nav>
      </AppContainer>
    </header>
  )
}

export default AppHeader
