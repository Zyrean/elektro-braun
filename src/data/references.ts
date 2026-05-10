export interface Reference {
  id: number
  name: string
  slug: string
  location: string
  period: string
  cost: string
  type?: 'Privat' | 'Gewerbe'
  shortDescription: string
  description: string
  services: string[]
  image: {
    src: string
    alt: string
  }
  images: {
    src: string
    alt: string
  }[]
  highlight?: boolean
}

export const references: Reference[] = [
  {
    id: 1,
    name: 'Neubau Einfamilienhaus',
    slug: 'einfamilienhaus-schneider',
    location: 'Freiburg im Breisgau',
    period: '2022',
    cost: '45.000 €',
    type: 'Privat',
    shortDescription: 'Komplette Elektroinstallation im Neubau',
    description:
      'Im Rahmen eines Neubaus wurde die komplette Elektroinstallation umgesetzt. Dazu gehörten Planung, Verkabelung sowie moderne Steuerungssysteme für Licht und Energie.',
    services: ['Elektroinstallation', 'Verkabelung', 'Smart Home Integration', 'Beleuchtung'],
    image: {
      src: '/references/einfamilienhaus-schneider.png',
      alt: 'Elektroinstallation in einem Neubau Einfamilienhaus',
    },
    images: [
      { src: '/references/ref-01.jpg', alt: 'Übersicht Elektroinstallation Neubau' },
      { src: '/references/ref-01-2.jpg', alt: 'Verkabelung im Haus' },
      { src: '/references/ref-01-3.jpg', alt: 'Verteilerkasten Installation' },
    ],
    highlight: true,
  },

  {
    id: 2,
    name: 'Bürogebäude TechSolutions GmbH',
    slug: 'buero-techsolutions',
    location: 'Offenburg',
    period: '2021 – 2022',
    cost: '120.000 €',
    type: 'Gewerbe',
    shortDescription: 'Modernisierung der kompletten Gebäudetechnik',
    description:
      'Ein bestehendes Bürogebäude wurde vollständig modernisiert. Fokus lag auf energieeffizienter Beleuchtung und stabiler Netzwerktechnik.',
    services: ['Netzwerktechnik', 'Beleuchtung', 'Sicherheitsbeleuchtung', 'Elektroinstallation'],
    image: {
      src: '/references/buero-techsolutions.png',
      alt: 'Modernes Bürogebäude mit neuer Beleuchtung',
    },
    images: [
      { src: '/references/ref-02.jpg', alt: 'Beleuchtung im Bürogebäude' },
      { src: '/references/ref-02-2.jpg', alt: 'Netzwerktechnik Installation' },
    ],
  },

  {
    id: 3,
    name: 'Photovoltaikanlage',
    slug: 'pv-anlage-berger',
    location: 'Emmendingen',
    period: '2023',
    cost: '28.000 €',
    type: 'Privat',
    shortDescription: 'Installation einer PV-Anlage mit Speicher',
    description:
      'Planung und Umsetzung einer Photovoltaikanlage inklusive Stromspeicher zur nachhaltigen Energieversorgung des Haushalts.',
    services: ['Photovoltaik', 'Energiespeicher', 'Netzanbindung'],
    image: {
      src: '/references/pv-anlage-berger.png',
      alt: 'Photovoltaikanlage auf Hausdach',
    },
    images: [
      { src: '/references/ref-03.jpg', alt: 'Solaranlage Dachansicht' },
      { src: '/references/ref-03-2.jpg', alt: 'Stromspeicher Installation' },
    ],
    highlight: true,
  },

  {
    id: 4,
    name: 'Sanierung Mehrfamilienhaus',
    slug: 'sanierung-weber',
    location: 'Lahr',
    period: '2020 – 2021',
    cost: '65.000 €',
    type: 'Gewerbe',
    shortDescription: 'Erneuerung der kompletten Elektroinstallation',
    description:
      'Im Zuge einer Altbausanierung wurde die gesamte Elektroinstallation erneuert und auf den neuesten Stand gebracht.',
    services: ['Altbausanierung', 'Elektroinstallation', 'Verteilertechnik'],
    image: {
      src: '/references/sanierung-weber.png',
      alt: 'Sanierung Elektroinstallation Altbau',
    },
    images: [{ src: '/references/ref-04.jpg', alt: 'Verteilerkasten Altbau' }],
  },

  {
    id: 5,
    name: 'Industriehalle Kühn Logistik',
    slug: 'industriehalle-kuehn',
    location: 'Karlsruhe',
    period: '2019',
    cost: '95.000 €',
    type: 'Gewerbe',
    shortDescription: 'Umrüstung der Hallenbeleuchtung auf LED',
    description:
      'Die bestehende Beleuchtung wurde vollständig durch moderne LED-Technik ersetzt, um Energieverbrauch und Wartungskosten zu reduzieren.',
    services: ['Beleuchtungstechnik', 'LED-Umrüstung', 'Industrieinstallation'],
    image: {
      src: '/references/industriehalle-kuehn.png',
      alt: 'Industriehalle mit LED Beleuchtung',
    },
    images: [{ src: '/references/ref-05.jpg', alt: 'LED Beleuchtung Halle' }],
  },

  {
    id: 6,
    name: 'E-Ladestation Wohnanlage Süd',
    slug: 'ladestation-wohnanlage',
    location: 'Freiburg',
    period: '2023',
    cost: '32.000 €',
    type: 'Gewerbe',
    shortDescription: 'Installation mehrerer E-Ladestationen',
    description:
      'Installation und Inbetriebnahme von mehreren Ladepunkten für Elektrofahrzeuge inklusive Lastmanagement.',
    services: ['E-Mobilität', 'Ladestationen', 'Lastmanagement'],
    image: {
      src: '/references/ladestation-wohnanlage.png',
      alt: 'E-Ladestation vor Wohnanlage',
    },
    images: [{ src: '/references/ref-06.jpg', alt: 'Wallbox Installation' }],
  },

  {
    id: 7,
    name: 'Umbau Zahnarztpraxis Dr. Klein',
    slug: 'zahnarztpraxis-klein',
    location: 'Baden-Baden',
    period: '2021',
    cost: '55.000 €',
    type: 'Gewerbe',
    shortDescription: 'Modernisierung der Elektroinstallation in Praxisräumen',
    description:
      'Im Zuge eines Praxisumbaus wurde die komplette Elektroinstallation modernisiert. Besonderer Fokus lag auf Beleuchtung und zuverlässiger Versorgung der medizinischen Geräte.',
    services: ['Elektroinstallation', 'Beleuchtung', 'Sicherheitsbeleuchtung'],
    image: {
      src: '/references/zahnarztpraxis-klein.png',
      alt: 'Moderne Zahnarztpraxis Beleuchtung',
    },
    images: [
      { src: '/references/ref-07.jpg', alt: 'Praxisbeleuchtung' },
      { src: '/references/ref-07-2.jpg', alt: 'Elektroinstallation Praxis' },
    ],
  },

  {
    id: 8,
    name: 'Neubau Reihenhausanlage',
    slug: 'reihenhausanlage-mueller',
    location: 'Kehl',
    period: '2022 – 2023',
    cost: '85.000 €',
    type: 'Privat',
    shortDescription: 'Elektroinstallation in mehreren Wohneinheiten',
    description:
      'Für eine Reihenhausanlage wurde die komplette Elektroinstallation umgesetzt. Dazu gehörten moderne Verteilertechnik sowie vorbereitete Smart-Home Lösungen.',
    services: ['Elektroinstallation', 'Verteilertechnik', 'Smart Home Vorbereitung'],
    image: {
      src: '/references/reihenhausanlage-mueller.png',
      alt: 'Reihenhäuser Neubau Elektroinstallation',
    },
    images: [{ src: '/references/ref-08.jpg', alt: 'Installation Reihenhaus' }],
  },

  {
    id: 9,
    name: 'Sanierung Sporthalle Nord',
    slug: 'sporthalle-nord',
    location: 'Rastatt',
    period: '2020',
    cost: '110.000 €',
    type: 'Gewerbe',
    shortDescription: 'Erneuerung der Beleuchtung und Sicherheitsanlagen',
    description:
      'Die bestehende Beleuchtung wurde durch energieeffiziente LED-Technik ersetzt. Zusätzlich wurden Sicherheitsbeleuchtung und Steuerungssysteme modernisiert.',
    services: ['Beleuchtungstechnik', 'LED-Umrüstung', 'Sicherheitsbeleuchtung'],
    image: {
      src: '/references/sporthalle-nord.png',
      alt: 'Sporthalle mit neuer LED Beleuchtung',
    },
    images: [
      { src: '/references/ref-09.jpg', alt: 'Sporthallenbeleuchtung' },
      { src: '/references/ref-09-2.jpg', alt: 'Sicherheitsbeleuchtung Anlage' },
    ],
  },
]
