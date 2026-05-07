import { Toaster } from 'sonner'
import './globals.css'

import { Poppins, Manrope } from 'next/font/google'
import AppHeader from '@/components/ui/AppHeader'
import AppFooter from '@/components/ui/AppFooter'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`theme-orange ${fontManrope.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <AppHeader />

        <main className="flex-1">{children}</main>

        <AppFooter />

        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  )
}
