'use client'

import { useState } from 'react'
import { AppSection } from '@/components/ui/AppSection'
import { Button } from '@/components/ui/Button'
import { Text } from '@/components/ui/Text'
import { COMPANY_GOOGLE_MAPS_EMBED, COMPANY_GOOGLE_MAPS_ROUTE } from '@/data/company'

export function GoogleMaps() {
  const fadeStyle = 'pointer-events-none absolute right-0 left-0 h-3 from-background to-transparent'

  const [consent, setConsent] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('google-maps-consent') === 'true'
    }
    return false
  })

  const handleAccept = () => {
    localStorage.setItem('google-maps-consent', 'true')
    setConsent(true)
  }

  return (
    <AppSection>
      <div className="relative overflow-hidden">
        {consent ? (
          <>
            <iframe
              src={COMPANY_GOOGLE_MAPS_EMBED}
              title="Google Maps Standort"
              className="h-140 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute right-16 bottom-6">
              <Button href={COMPANY_GOOGLE_MAPS_ROUTE}>Route planen</Button>
            </div>

            <div className={`top-0 bg-linear-to-b ${fadeStyle}`} />
            <div className={`bottom-0 bg-linear-to-t ${fadeStyle}`} />
          </>
        ) : (
          <div className="bg-muted flex h-140 flex-col items-center justify-center gap-4 text-center">
            <Text>
              Diese Karte wird von Google Maps geladen. Dabei können Daten an Google übermittelt
              werden.
            </Text>

            <div className="flex gap-4">
              <Button onClick={handleAccept}>Karte anzeigen</Button>

              <Button variant="outline" href={COMPANY_GOOGLE_MAPS_ROUTE}>
                Route planen
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppSection>
  )
}
