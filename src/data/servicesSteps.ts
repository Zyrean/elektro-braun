import { LucideIcon } from 'lucide-react'
import { ClipboardCheck, FileSearch, Activity, HeartPulse } from 'lucide-react'

interface ServicesStep {
  title: string
  text: string
  icon?: LucideIcon
}

export const servicesSteps: ServicesStep[] = [
  {
    title: 'Erstgespräch & Analyse',
    text: 'Wir nehmen uns Zeit für eine ausführliche Anamnese und eine präzise Befundaufnahme.',
    icon: FileSearch,
  },
  {
    title: 'Individueller Therapieplan',
    text: 'Basierend auf Ihrer Situation erstellen wir ein maßgeschneidertes Behandlungskonzept.',
    icon: ClipboardCheck,
  },
  {
    title: 'Aktive Behandlung',
    text: 'Mit gezielten Techniken und Übungen arbeiten wir gemeinsam an Ihrer Genesung.',
    icon: Activity,
  },
  {
    title: 'Nachhaltige Stabilisierung',
    text: 'Wir geben Ihnen Übungen und Empfehlungen für langfristige Beschwerdefreiheit mit.',
    icon: HeartPulse,
  },
]
