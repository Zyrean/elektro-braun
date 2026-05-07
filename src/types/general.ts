import { LucideIcon } from 'lucide-react'

export interface Navigation {
  href: string
  label: string
}

export interface ServiceSection {
  title: string
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

// export interface Service {
//   id?: number
//   title?: string
//   abbreviation?: string
//   slug?: string
//   teaser?: string
//   description?: string
//   indications?: string[]
//   process?: string[]
//   benefits?: string[]
//   icon?: LucideIcon
//   image?: string
//   images: string[]
// }

export interface Faq {
  id: number
  question: string
  answer: string
}
