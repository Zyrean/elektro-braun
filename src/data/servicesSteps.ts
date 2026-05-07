import { LucideIcon } from 'lucide-react'
import { MessageCircle, PencilRuler, Wrench, ShieldCheck } from 'lucide-react'

interface ServicesStep {
  title: string
  text: string
  icon?: LucideIcon
}

export const servicesSteps: ServicesStep[] = [
  {
    title: 'Persönliche Beratung',
    text: 'Wir besprechen Ihr Projekt und Ihre Anforderungen im Detail. Dabei klären wir alle offenen Fragen und beraten Sie zu passenden Lösungen.',
    icon: MessageCircle,
  },
  {
    title: 'Individuelle Planung',
    text: 'Auf Basis Ihrer Wünsche erstellen wir ein durchdachtes Konzept – abgestimmt auf Ihr Gebäude, Ihre Nutzung und moderne technische Standards.',
    icon: PencilRuler,
  },
  {
    title: 'Fachgerechte Umsetzung',
    text: 'Unsere Arbeiten werden sauber, zuverlässig und nach aktuellen Vorschriften ausgeführt. Dabei achten wir auf höchste Qualität und Sicherheit.',
    icon: Wrench,
  },
  {
    title: 'Prüfung & Übergabe',
    text: 'Nach Abschluss prüfen wir alle Installationen sorgfältig und übergeben Ihnen ein einwandfrei funktionierendes Ergebnis.',
    icon: ShieldCheck,
  },
]
