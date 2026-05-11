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
      'Im Rahmen eines Neubaus wurde die komplette Elektroinstallation für ein modernes Einfamilienhaus umgesetzt. Das Projekt umfasste die Planung und Installation sämtlicher elektrischer Komponenten – von der klassischen Stromversorgung bis hin zu modernen Steuerungs- und Beleuchtungssystemen. Besonderer Fokus lag auf einer sauberen Verkabelung, energieeffizienter Technik und der Vorbereitung zukünftiger Smart-Home-Erweiterungen. Zusätzlich wurden moderne Lichtkonzepte und intelligente Steuerungsmöglichkeiten integriert, um Komfort und Energieeffizienz optimal miteinander zu verbinden. Durch die strukturierte Planung und fachgerechte Umsetzung entstand eine sichere, moderne und zukunftssichere Elektroinstallation für den gesamten Wohnbereich.',
    services: ['Elektroinstallation', 'Verkabelung', 'Smart Home Integration', 'Beleuchtung'],
    image: {
      src: '/references/einfamilienhaus-schneider.png',
      alt: 'Elektroinstallation in einem Neubau Einfamilienhaus',
    },
    images: [
      {
        src: '/references/einfamilienhaus-schneider.png',
        alt: 'Übersicht Elektroinstallation Neubau',
      },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verkabelung im Haus' },
      { src: '/references/einfamilienhaus-schneider.png', alt: 'Verteilerkasten Installation' },
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
      'Ein bestehendes Bürogebäude wurde im Rahmen einer umfassenden Modernisierung technisch und energetisch auf den neuesten Stand gebracht. Schwerpunkt des Projekts war die Erneuerung der Beleuchtungstechnik sowie der Aufbau einer leistungsfähigen und stabilen Netzwerkinfrastruktur für moderne Arbeitsplätze. Dabei wurden energieeffiziente LED-Systeme installiert und die komplette Netzwerkverkabelung neu strukturiert. Zusätzlich erfolgte die Modernisierung der elektrischen Versorgung und Sicherheitsbeleuchtung innerhalb des Gebäudes. Durch die Umsetzung entstand eine moderne und zukunftssichere Arbeitsumgebung mit optimierter Energieeffizienz und zuverlässiger Kommunikationstechnik.',
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
      'Für ein privates Wohngebäude wurde eine moderne Photovoltaikanlage inklusive Stromspeicher geplant und installiert. Ziel des Projekts war eine nachhaltige und effiziente Eigenversorgung mit selbst erzeugtem Solarstrom. Die Anlage wurde individuell auf die Dachfläche sowie den Energiebedarf des Haushalts abgestimmt und ermöglicht eine optimale Nutzung der erzeugten Energie. Zusätzlich wurde ein Stromspeicher integriert, um den Eigenverbrauch zu erhöhen und die Unabhängigkeit vom öffentlichen Stromnetz weiter zu verbessern. Durch die moderne Technik und fachgerechte Umsetzung entstand eine leistungsstarke und zukunftssichere Energielösung für den gesamten Haushalt.',
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
      'Im Zuge einer umfassenden Altbausanierung wurde die komplette Elektroinstallation eines Mehrfamilienhauses modernisiert und an aktuelle Sicherheits- und Technikstandards angepasst. Dabei wurden veraltete Leitungen, Sicherungssysteme und elektrische Komponenten erneuert sowie moderne Verteilertechnik integriert. Besonderes Augenmerk lag auf einer sicheren und zukunftssicheren Stromversorgung für sämtliche Wohneinheiten. Zusätzlich wurden neue Anschlüsse und Erweiterungsmöglichkeiten für moderne Haushalts- und Kommunikationstechnik geschaffen. Durch die strukturierte Planung und fachgerechte Umsetzung entstand eine zuverlässige und langfristig sichere Elektroinstallation für das gesamte Gebäude.',
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
      'In einer Industriehalle wurde die bestehende Beleuchtungsanlage vollständig auf moderne und energieeffiziente LED-Technik umgerüstet. Ziel des Projekts war die deutliche Reduzierung des Energieverbrauchs sowie eine Verbesserung der Lichtqualität in den Arbeitsbereichen. Dabei wurden leistungsstarke LED-Systeme installiert, die eine gleichmäßige Ausleuchtung der gesamten Halle ermöglichen und gleichzeitig die Wartungs- und Betriebskosten reduzieren. Zusätzlich wurde die Beleuchtung an die Anforderungen des laufenden Betriebs angepasst, um eine optimale Arbeitsumgebung für Mitarbeiter und Logistikprozesse zu schaffen. Durch die Modernisierung entstand eine langlebige und wirtschaftliche Beleuchtungslösung für den industriellen Einsatz.',
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
      'Für eine moderne Wohnanlage wurde eine Ladeinfrastruktur mit mehreren E-Ladestationen für Elektrofahrzeuge geplant und umgesetzt. Das Projekt umfasste die Installation mehrerer Wallboxen inklusive intelligentem Lastmanagement zur effizienten Verteilung der verfügbaren Energie. Besonderes Augenmerk lag auf einer sicheren Integration in die bestehende Elektroinstallation sowie auf zukünftigen Erweiterungsmöglichkeiten der Ladeinfrastruktur. Durch die moderne Steuerungstechnik können die Ladepunkte effizient und zuverlässig betrieben werden. So entstand eine zukunftssichere Lösung für komfortables und nachhaltiges Laden innerhalb der gesamten Wohnanlage.',
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
      'Im Rahmen des Umbaus einer Zahnarztpraxis wurde die bestehende Elektroinstallation vollständig modernisiert und an die technischen Anforderungen moderner Praxisräume angepasst. Besonderer Fokus lag auf einer zuverlässigen Stromversorgung für medizinische Geräte sowie einer funktionalen und angenehmen Beleuchtung in Behandlungs- und Wartebereichen. Zusätzlich wurden energieeffiziente Lichtsysteme und moderne elektrische Komponenten integriert, um Sicherheit, Komfort und Arbeitsabläufe innerhalb der Praxis zu optimieren. Die gesamte Installation wurde sorgfältig geplant und während des laufenden Umbaus fachgerecht umgesetzt. So entstand eine moderne und zukunftssichere Elektroinfrastruktur für den täglichen Praxisbetrieb.',
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
      'Für den Neubau einer modernen Reihenhausanlage wurde die komplette Elektroinstallation für mehrere Wohneinheiten geplant und umgesetzt. Das Projekt umfasste die Installation sämtlicher Strom-, Netzwerk- und Verteilertechnik sowie die Vorbereitung zukünftiger Smart-Home-Funktionen. Besonderes Augenmerk lag auf einer strukturierten und zukunftssicheren Installation, die den Anforderungen moderner Wohnkonzepte gerecht wird. Zusätzlich wurden energieeffiziente Beleuchtungslösungen und flexible Erweiterungsmöglichkeiten integriert. Durch die fachgerechte Umsetzung entstand eine moderne und zuverlässige Elektroinfrastruktur für alle Wohneinheiten der Anlage.',
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
      'Im Rahmen der Sanierung einer Sporthalle wurde die bestehende Beleuchtungs- und Sicherheitsanlage vollständig modernisiert. Ziel des Projekts war eine energieeffiziente und leistungsstarke Beleuchtungslösung für Trainings-, Wettkampf- und Veranstaltungsbereiche. Dabei wurde die vorhandene Beleuchtung durch moderne LED-Technik ersetzt und die Sicherheitsbeleuchtung auf aktuelle Standards angepasst. Zusätzlich erfolgte die Modernisierung der Steuerungs- und Versorgungstechnik für einen zuverlässigen und sicheren Betrieb der gesamten Anlage. Durch die Umsetzung entstand eine langlebige und wirtschaftliche Beleuchtungslösung mit optimierter Lichtqualität für die gesamte Sporthalle.',
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
