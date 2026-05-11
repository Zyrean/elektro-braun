export interface PostImage {
  src: string
  alt: string
}

export interface PostCategory {
  title: string
  href?: string
}

export interface PostAuthor {
  name: string
  role: string
  href?: string
  imageUrl: string
}

export interface Post {
  id: number
  title: string
  heroTitle: string
  slug: string
  description: string

  date: string
  datetime: string

  category: PostCategory
  location: string

  color:
    | 'bg-green-100 text-green-700'
    | 'bg-blue-100 text-blue-700'
    | 'bg-amber-100 text-amber-700'
    | 'bg-gray-100 text-gray-700'

  author: PostAuthor

  image: PostImage
  images: PostImage[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Photovoltaik-Anlage erfolgreich umgesetzt',
    heroTitle: 'PV-Anlage Buchholz',
    location: 'Buchholz',
    slug: 'photovoltaik-anlage-buchholz',
    description:
      'In Buchholz wurde eine moderne Photovoltaik-Anlage für ein privates Wohngebäude geplant und installiert. Ziel des Projekts war eine nachhaltige und effiziente Energieversorgung mit selbst erzeugtem Solarstrom. Die Anlage wurde individuell auf die Dachfläche und den Energiebedarf des Haushalts abgestimmt, um eine optimale Nutzung der erzeugten Energie zu ermöglichen. Durch die fachgerechte Umsetzung entstand eine leistungsstarke und zukunftssichere Lösung zur langfristigen Reduzierung der Energiekosten.',
    date: '02. Apr 2026',
    datetime: '2026-04-02',
    category: { title: 'Projekte', href: '#' },
    color: 'bg-green-100 text-green-700',
    author: {
      name: 'Elektro Braun Team',
      role: 'Elektrotechnik',
      href: '#',
      imageUrl: '/team/team.png',
    },
    image: {
      src: '/home-hero-3.png',
      alt: 'Photovoltaikanlage auf einem Wohnhaus in Buchholz',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
    ],
  },
  {
    id: 2,
    title: 'Teilnahme am Stadtfest in Buchholz',
    heroTitle: 'Stadtfest Buchholz',
    location: 'Buchholz',
    slug: 'stadtfest-buchholz',
    description:
      'Auch in diesem Jahr waren wir wieder beim Stadtfest in Buchholz vertreten und konnten zahlreiche Besucher an unserem Stand begrüßen. Neben spannenden Gesprächen rund um moderne Elektrotechnik stand vor allem der persönliche Austausch mit Kunden, Partnern und Interessierten im Mittelpunkt. Das Stadtfest bot eine tolle Gelegenheit, unser Unternehmen und unsere Leistungen in entspannter Atmosphäre zu präsentieren. Wir bedanken uns bei allen Besuchern für das große Interesse und die vielen positiven Gespräche.',
    date: '18. Mär 2026',
    datetime: '2026-03-18',
    category: { title: 'Freizeit', href: '#' },
    color: 'bg-blue-100 text-blue-700',
    author: {
      name: 'Elektro Braun Team',
      role: 'Team',
      href: '#',
      imageUrl: '/team/team.png',
    },
    image: {
      src: '/team/team.png',
      alt: 'Elektro Braun Team beim Stadtfest in Buchholz',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
    ],
  },
  {
    id: 3,
    title: 'Erweiterung unseres Leistungsbereichs',
    heroTitle: 'Neue Leistungen',
    location: 'Waldkich',
    slug: 'service-erweiterung',
    description:
      'Auch in diesem Jahr waren wir wieder beim Stadtfest in Buchholz vertreten und konnten zahlreiche Besucher an unserem Stand begrüßen. Neben spannenden Gesprächen rund um moderne Elektrotechnik stand vor allem der persönliche Austausch mit Kunden, Partnern und Interessierten im Mittelpunkt. Das Stadtfest bot eine tolle Gelegenheit, unser Unternehmen und unsere Leistungen in entspannter Atmosphäre zu präsentieren. Wir bedanken uns bei allen Besuchern für das große Interesse und die vielen positiven Gespräche.',
    date: '25. Feb 2026',
    datetime: '2026-02-25',
    category: { title: 'Unternehmen', href: '#' },
    color: 'bg-amber-100 text-amber-700',
    author: {
      name: 'Elektro Braun',
      role: 'Geschäftsführung',
      href: '#',
      imageUrl: '/team/team.png',
    },
    image: {
      src: '/home-hero-4.png',
      alt: 'Elektro Braun Team beim Stadtfest in Buchholz',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
    ],
  },
  {
    id: 4,
    title: 'Modernisierung der Elektroinstallation im Altbau',
    heroTitle: 'Altbau Sanierung',
    location: 'Emmendingen',
    slug: 'altbau-modernisierung',
    description:
      'Im Rahmen einer umfassenden Sanierung wurde die komplette Elektroinstallation eines Altbaus modernisiert und an aktuelle Sicherheits- und Technikstandards angepasst. Dabei wurden veraltete Leitungen, Sicherungssysteme und elektrische Komponenten erneuert sowie moderne Verteilertechnik integriert. Ziel des Projekts war eine sichere, zuverlässige und zukunftssichere Stromversorgung für das gesamte Gebäude. Durch die fachgerechte Umsetzung entstand eine moderne Elektroinfrastruktur mit langfristiger Betriebssicherheit.',
    date: '10. Feb 2026',
    datetime: '2026-02-10',
    category: { title: 'Projekte', href: '#' },
    color: 'bg-green-100 text-green-700',
    author: {
      name: 'Elektro Braun Team',
      role: 'Elektrotechnik',
      href: '#',
      imageUrl: '/team/team.png',
    },
    image: {
      src: '/home-hero-2.png',
      alt: 'Modernisierte Elektroinstallation in einem Altbau',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
    ],
  },
  {
    id: 5,
    title: 'Neue E-Ladestation für Wohnanlage installiert',
    heroTitle: 'E-Ladestationen Wohnanlage',
    location: 'Sexau',
    slug: 'e-ladestation-wohnanlage',
    description:
      'Für eine moderne Wohnanlage wurde eine Ladeinfrastruktur mit mehreren E-Ladestationen für Elektrofahrzeuge umgesetzt. Das Projekt umfasste die Installation leistungsfähiger Wallboxen inklusive intelligentem Lastmanagement zur optimalen Verteilung der verfügbaren Energie. Besonderes Augenmerk lag auf einer sicheren Integration in die bestehende Elektroinstallation sowie auf zukünftigen Erweiterungsmöglichkeiten. So entstand eine moderne und zukunftssichere Lösung für komfortables Laden innerhalb der Wohnanlage.',
    date: '28. Jan 2026',
    datetime: '2026-01-28',
    category: { title: 'Projekte', href: '#' },
    color: 'bg-green-100 text-green-700',
    author: {
      name: 'Elektro Braun Team',
      role: 'E-Mobilität',
      href: '#',
      imageUrl: '/team/team.png',
    },
    image: {
      src: '/home-hero-5.png',
      alt: 'Installierte E-Ladestationen in einer Wohnanlage',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
    ],
  },
  {
    id: 6,
    title: 'Einblick in unseren Arbeitsalltag bei Elektro Braun',
    heroTitle: 'Arbeitsalltag',
    location: 'Sexau',
    slug: 'arbeitsalltag-elektro-braun',
    description:
      'Ein Blick hinter die Kulissen von Elektro Braun: Von der Planung im Büro über die Vorbereitung im Lager bis hin zur fachgerechten Umsetzung direkt auf der Baustelle begleiten wir täglich unterschiedlichste Projekte im Bereich moderner Elektrotechnik. Unser Arbeitsalltag ist geprägt von Teamarbeit, Präzision und dem Anspruch, für unsere Kunden zuverlässige und hochwertige Lösungen umzusetzen. Die Einblicke zeigen einen Teil unserer täglichen Arbeit und die Menschen hinter den Projekten.',
    date: '12. Jan 2026',
    datetime: '2026-01-12',
    category: { title: 'Einblicke', href: '#' },
    color: 'bg-gray-100 text-gray-700',
    author: {
      name: 'Elektro Braun Team',
      role: 'Team',
      href: '#',
      imageUrl: '/team/team.png',
    },
    image: {
      src: '/home-hero-6.png',
      alt: 'Arbeitsalltag des Elektro Braun Teams auf der Baustelle',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
    ],
  },
]
