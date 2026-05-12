import { LucideIcon } from 'lucide-react'

export interface Navigation {
  href: string
  label: string
}

export interface ServiceSection {
  title: string
  variant: 'check' | 'steps'
  items?: string[]
  content?: string
}

export interface Service {
  id: number
  title: string
  slug: string
  teaser: string
  description: string
  sections?: ServiceSection[]
  icon?: LucideIcon
  image?: string
  images?: string[]
}

export interface Faq {
  id: number
  question: string
  answer: string
}
