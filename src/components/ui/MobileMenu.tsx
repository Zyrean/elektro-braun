'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import NavLink from '@/components/ui/NavLink'
import { Navigation } from '@/types/general'
import Logo from '@/components/Logo'

interface MobileMenuProps {
  navigation: Navigation[]
  isHomepage: boolean
}

export default function MobileMenu({ navigation, isHomepage }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
  }, [open])

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 md:hidden"
        aria-label="Menü öffnen"
      >
        <Menu className={cn('size-6', isHomepage && 'text-white')} />
      </button>

      {/* OVERLAY */}
      <div
        className={cn(
          'fixed inset-0 z-100 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 min-h-screen bg-black/60 backdrop-blur-sm"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex h-fit flex-col">
          <div className="bg-background flex h-20 items-center justify-between px-4 shadow-sm">
            <Logo onClick={() => setOpen(false)} />

            <button onClick={() => setOpen(false)} className="p-2" aria-label="Menü schlißen">
              <X className="size-6" />
            </button>
          </div>

          {/* MENU */}

          <div className="bg-background flex flex-1 flex-col gap-7 rounded-b-md px-6 py-8">
            {navigation.map((nav) => (
              <NavLink key={nav.href} href={nav.href} onClick={() => setOpen(false)}>
                {nav.label}
              </NavLink>
            ))}

            <div className="border-border border-t pt-7">
              <Button href="/kontakt" onClick={() => setOpen(false)} className="w-full">
                Termin buchen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
