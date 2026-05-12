import { LucideIcon } from 'lucide-react'
import { ShieldCheck, Zap, Wrench, MapPin, Clock, BadgeCheck } from 'lucide-react'

export interface Feature {
  id: number
  feature: string
  header: string
  description: string
  descriptionLong: string
  image: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    id: 1,
    feature: 'Zuverlässig',
    header: 'Saubere & sichere Arbeit',
    description:
      'Wir arbeiten präzise, sauber und nach aktuellen Standards – für maximale Sicherheit und langlebige Ergebnisse.',
    descriptionLong:
      'Jedes Projekt wird von uns fachgerecht und nach den neuesten Vorschriften umgesetzt. Saubere Arbeit, strukturierte Abläufe und höchste Sorgfalt stehen dabei immer im Mittelpunkt.',
    image: '/features/feature-01.png',
    icon: ShieldCheck,
  },
  {
    id: 2,
    feature: 'Modern',
    header: 'Technik auf dem neuesten Stand',
    description:
      'Ob Smart Home, Photovoltaik oder moderne Installationen – wir setzen auf zukunftssichere Lösungen.',
    descriptionLong:
      'Wir arbeiten mit moderner Technik und innovativen Lösungen, um Ihnen effiziente, nachhaltige und zukunftssichere Elektroinstallationen zu bieten.',
    image: '/features/feature-02.png',
    icon: Zap,
  },
  {
    id: 3,
    feature: 'Service',
    header: 'Persönlicher Ansprechpartner',
    description:
      'Von der ersten Beratung bis zur Umsetzung begleiten wir Sie zuverlässig und stehen Ihnen jederzeit zur Seite.',
    descriptionLong:
      'Bei uns haben Sie einen festen Ansprechpartner, der Ihr Projekt kennt und Sie persönlich betreut – transparent, ehrlich und zuverlässig.',
    image: '/features/feature-03.png',
    icon: Wrench,
  },
  {
    id: 4,
    feature: 'Regional',
    header: 'Schnell vor Ort',
    description:
      'Als regionaler Fachbetrieb sind wir schnell bei Ihnen und bieten direkte, persönliche Unterstützung.',
    descriptionLong:
      'Durch unsere regionale Ausrichtung können wir flexibel und schnell auf Ihre Anfragen reagieren. Kurze Wege ermöglichen eine persönliche Betreuung und eine zügige Umsetzung Ihrer Projekte.',
    image: '/features/feature-04.png',
    icon: MapPin,
  },
  {
    id: 5,
    feature: 'Flexibel',
    header: 'Flexible Terminplanung',
    description:
      'Wir richten uns nach Ihrem Zeitplan und finden passende Lösungen für Ihr Projekt.',
    descriptionLong:
      'Ob kurzfristige Termine oder langfristige Planung – wir arbeiten flexibel und passen uns Ihren Anforderungen an, um eine reibungslose Umsetzung zu gewährleisten.',
    image: '/features/feature-05.png',
    icon: Clock,
  },
  {
    id: 6,
    feature: 'Qualität',
    header: 'Geprüfte Materialien',
    description:
      'Wir setzen auf hochwertige Produkte und starke Partner für langlebige Ergebnisse.',
    descriptionLong:
      'Durch den Einsatz geprüfter Materialien und die Zusammenarbeit mit renommierten Herstellern garantieren wir Ihnen eine hohe Qualität und langfristige Zuverlässigkeit.',
    image: '/features/feature-06.png',
    icon: BadgeCheck,
  },
]
