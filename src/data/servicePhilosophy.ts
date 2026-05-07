import { Bolt, ShieldCheck, SunMedium, LucideIcon } from 'lucide-react'

export interface ServiceFeature {
  name: string
  icon: LucideIcon
  image?: string
  href: string
  description: string
}

export const servicePhilosophy: ServiceFeature[] = [
  {
    name: 'Persönliche Beratung',
    icon: Bolt,
    image: '/services/philosophy-0.png',
    href: '/kontakt',
    description:
      'Wir nehmen uns Zeit für Ihre Anforderungen und entwickeln individuelle Lösungen passend zu Ihrem Projekt.',
  },
  {
    name: 'Zuverlässige Umsetzung',
    icon: ShieldCheck,
    image: '/services/philosophy-1.png',
    href: '/referenzen',
    description:
      'Von der Planung bis zur Fertigstellung setzen wir Projekte sauber, termingerecht und fachgerecht um.',
  },
  {
    name: 'Moderne Energielösungen',
    icon: SunMedium,
    image: '/services/philosophy-2.png',
    href: '/leistungen/photovoltaik',
    description:
      'Mit moderner Elektrotechnik und Photovoltaik schaffen wir nachhaltige und zukunftssichere Lösungen.',
  },
]
