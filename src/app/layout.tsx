import { Toaster } from 'sonner'
import './globals.css'

import { Quicksand, Inter, Playfair_Display, Poppins, Manrope, Nunito } from 'next/font/google'
import AppHeader from '@/components/ui/AppHeader'
import AppFooter from '@/components/ui/AppFooter'

// 🟢 Default für Health / Physio / freundliche Seiten - weich, rund, sehr angenehm
export const fontQuicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// 🔵 Business / Corporate / clean UI - neutral, modern, extrem gut lesbar
export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// 🟣 Modern / Startup / etwas mehr Persönlichkeit - leicht rund, aber strukturierter als Quicksand
export const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// ⚫ Premium Clean / hochwertig / minimalistisch - sehr smooth, moderner als Inter
export const fontManrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// 🟡 Sehr weich / friendly / emotional - perfekt für Coaching, Gesundheit, Kinder
export const fontNunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// 🟤 Serif (optional für Premium) - nur für Headings wenn du "Luxury Look" willst
export const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// THEMES:
// theme-blue        → Business / Clean
// theme-teal        → Health / Physio
// theme-green       → Nature / Fresh
// theme-purple      → Creative
// theme-premium     → Premium / Elegant
// theme-sand        → Warm / Beige / Yoga
// theme-wine        → Wine Red / Luxury
// theme-earth       → Earth / Warm / Natural
// theme-amber       → Earth / Warm / Natural

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`theme-green ${fontManrope.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <AppHeader />

        <main className="flex-1">{children}</main>

        <AppFooter />

        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  )
}
