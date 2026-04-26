import { LucideIcon } from 'lucide-react'
import { HeartHandshake, Award, Sparkles } from 'lucide-react'

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
    feature: 'Persönlich',
    header: 'Individuelle Betreuung',
    description:
      'Wir nehmen uns Zeit für Sie und entwickeln maßgeschneiderte Lösungen – abgestimmt auf Ihre persönlichen Bedürfnisse.',
    descriptionLong:
      'Jede Behandlung beginnt mit einer ausführlichen Analyse Ihrer Beschwerden und Ziele. Auf dieser Basis entwickeln wir eine individuell abgestimmte Therapie, die genau zu Ihnen passt und nachhaltige Fortschritte ermöglicht.',
    image: '/features/feature-01.png',
    icon: HeartHandshake,
  },
  {
    id: 2,
    feature: 'Professionell',
    header: 'Fachliche Kompetenz',
    description:
      'Moderne Methoden, kontinuierliche Weiterbildung und langjährige Erfahrung garantieren nachhaltige Ergebnisse.',
    descriptionLong:
      'Unsere Therapie basiert auf modernen physiotherapeutischen Methoden und langjähriger Erfahrung. Durch regelmäßige Fortbildungen bleiben wir stets auf dem neuesten Stand, um Ihnen eine effektive und nachhaltige Behandlung zu bieten.',
    image: '/features/feature-02.png',
    icon: Award,
  },
  {
    id: 3,
    feature: 'Vielseitig',
    header: 'Ganzheitlicher Ansatz',
    description:
      'Wir betrachten nicht nur Symptome, sondern den Menschen als Ganzes – für langfristige Gesundheit und Wohlbefinden.',
    descriptionLong:
      'Wir betrachten nicht nur einzelne Beschwerden, sondern den gesamten Bewegungsapparat. Durch einen ganzheitlichen Ansatz unterstützen wir Sie dabei, Ursachen zu erkennen und Ihre Gesundheit langfristig zu stärken.',
    image: '/features/feature-03.png',
    icon: Sparkles,
  },
]
