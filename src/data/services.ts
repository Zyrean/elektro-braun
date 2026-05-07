import { Service } from '@/types/general'
import { Zap, Sun, Wifi, Wrench, Lightbulb, Network } from 'lucide-react'

export const services: Service[] = [
  {
    id: 0,
    icon: Zap,
    title: 'Elektroinstallation',
    slug: 'elektroinstallation',
    image: '/services/elektroinstallation.png',
    teaser: 'Moderne Elektroinstallationen für Neubau und Sanierung.',
    description:
      'Wir planen und realisieren komplette Elektroinstallationen für Wohn- und Gewerbeobjekte – sicher, effizient und nach aktuellen Standards.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Installation von Steckdosen und Schaltern',
          'Verkabelung von Gebäuden',
          'Verteiler- und Sicherungstechnik',
        ],
      },
      {
        title: 'Ablauf',
        items: ['Beratung und Planung', 'Fachgerechte Installation', 'Prüfung und Inbetriebnahme'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Sichere Umsetzung nach Norm', 'Individuelle Planung', 'Zukunftssichere Technik'],
      },
    ],
  },

  {
    id: 1,
    icon: Sun,
    title: 'Photovoltaik',
    slug: 'photovoltaik',
    image: '/services/photovoltaik.png',
    teaser: 'Eigene Energie erzeugen und nachhaltig Kosten sparen.',
    description:
      'Wir planen und installieren Photovoltaikanlagen individuell auf Ihr Gebäude abgestimmt – für maximale Effizienz und Unabhängigkeit.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Planung von PV-Anlagen',
          'Montage von Solarmodulen',
          'Integration von Speichersystemen',
        ],
      },
      {
        title: 'Ablauf',
        items: ['Analyse Ihres Dachs', 'Individuelle Planung', 'Installation und Anschluss'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Reduzierte Stromkosten', 'Nachhaltige Energie', 'Mehr Unabhängigkeit'],
      },
    ],
  },

  {
    id: 2,
    icon: Wifi,
    title: 'Smart Home',
    slug: 'smart-home',
    image: '/services/smart-home.png',
    teaser: 'Intelligente Steuerung für mehr Komfort und Sicherheit.',
    description:
      'Wir vernetzen Ihr Zuhause und ermöglichen Ihnen die einfache Steuerung von Licht, Heizung und Sicherheitssystemen.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Automatisierung von Beleuchtung',
          'Steuerung von Heizung und Rollläden',
          'Integration von Sicherheitssystemen',
        ],
      },
      {
        title: 'Ablauf',
        items: ['Bedarfsanalyse', 'Konzeption der Lösung', 'Installation und Einrichtung'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Mehr Komfort im Alltag', 'Energieeinsparung', 'Erhöhte Sicherheit'],
      },
    ],
  },

  {
    id: 3,
    icon: Network,
    title: 'Netzwerk & Kommunikation',
    slug: 'netzwerk-kommunikation',
    image: '/services/netzwerk.png',
    teaser: 'Zuverlässige Netzwerktechnik für Zuhause und Unternehmen.',
    description:
      'Wir sorgen für stabile und schnelle Netzwerkverbindungen – von der Verkabelung bis zur Einrichtung moderner Systeme.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'LAN- und WLAN-Installation',
          'Netzwerkverkabelung',
          'Einrichtung von Routern und Systemen',
        ],
      },
      {
        title: 'Ablauf',
        items: ['Analyse der Anforderungen', 'Planung der Infrastruktur', 'Installation und Test'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Stabile Verbindung', 'Hohe Geschwindigkeit', 'Zukunftssichere Technik'],
      },
    ],
  },

  {
    id: 4,
    icon: Wrench,
    title: 'Wartung & Service',
    slug: 'wartung-service',
    image: '/services/wartung.png',
    teaser: 'Schnelle Hilfe und regelmäßige Wartung für Ihre Anlagen.',
    description:
      'Wir übernehmen Wartung, Prüfung und Reparatur Ihrer elektrischen Anlagen – zuverlässig und schnell vor Ort.',

    sections: [
      {
        title: 'Leistungen',
        items: ['Fehlersuche und Reparatur', 'Regelmäßige Wartung', 'Sicherheitsprüfungen'],
      },
      {
        title: 'Ablauf',
        items: ['Analyse des Problems', 'Schnelle Behebung', 'Abschließende Prüfung'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Schnelle Hilfe', 'Hohe Betriebssicherheit', 'Weniger Ausfälle'],
      },
    ],
  },

  {
    id: 5,
    icon: Lightbulb,
    title: 'Beleuchtungstechnik',
    slug: 'beleuchtungstechnik',
    image: '/services/beleuchtung.png',
    teaser: 'Individuelle Lichtlösungen für Innen- und Außenbereiche.',
    description:
      'Wir planen und realisieren Beleuchtungskonzepte, die Funktionalität und Design optimal verbinden.',

    sections: [
      {
        title: 'Leistungen',
        items: ['Innen- und Außenbeleuchtung', 'LED-Umrüstung', 'Lichtplanung'],
      },
      {
        title: 'Ablauf',
        items: ['Beratung und Konzept', 'Auswahl der Leuchten', 'Installation vor Ort'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Energieeffiziente Lösungen', 'Angenehmes Licht', 'Individuelles Design'],
      },
    ],
  },
  {
    id: 6,
    icon: Zap,
    title: 'E-Mobilität',
    slug: 'e-mobilitaet',
    image: '/services/e-mobilitaet.png',
    teaser: 'Ladelösungen für Elektrofahrzeuge – bequem und zukunftssicher.',
    description:
      'Wir planen und installieren moderne Ladelösungen für Ihr Zuhause oder Unternehmen. Von der Wallbox bis zur kompletten Ladeinfrastruktur.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Installation von Wallboxen',
          'Ladeinfrastruktur für Unternehmen',
          'Integration in bestehende Systeme',
        ],
      },
      {
        title: 'Ablauf',
        items: [
          'Beratung und Bedarfsanalyse',
          'Planung der Ladepunkte',
          'Installation und Inbetriebnahme',
        ],
      },
      {
        title: 'Ihre Vorteile',
        items: [
          'Bequemes Laden zuhause',
          'Zukunftssichere Technik',
          'Wertsteigerung der Immobilie',
        ],
      },
    ],
  },

  {
    id: 7,
    icon: Wifi,
    title: 'Türkommunikation',
    slug: 'tuerkommunikation',
    image: '/services/tuerkommunikation.png',
    teaser: 'Moderne Klingel- und Sprechanlagen für mehr Sicherheit.',
    description:
      'Wir installieren und modernisieren Türkommunikationssysteme – von klassischen Klingelanlagen bis zu smarten Video-Lösungen.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Klingel- und Gegensprechanlagen',
          'Video-Türsprechanlagen',
          'Integration ins Smart Home',
        ],
      },
      {
        title: 'Ablauf',
        items: [
          'Beratung und Auswahl des Systems',
          'Installation und Einrichtung',
          'Einweisung in die Nutzung',
        ],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Mehr Sicherheit', 'Komfortable Bedienung', 'Moderne Technik'],
      },
    ],
  },

  {
    id: 8,
    icon: Wrench,
    title: 'Altbausanierung',
    slug: 'altbausanierung',
    image: '/services/altbau.png',
    teaser: 'Erneuerung veralteter Elektroinstallationen für mehr Sicherheit.',
    description:
      'Wir modernisieren bestehende Elektroanlagen in Altbauten und bringen diese auf den neuesten Stand der Technik.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Erneuerung von Leitungen',
          'Modernisierung von Sicherungskästen',
          'Anpassung an aktuelle Normen',
        ],
      },
      {
        title: 'Ablauf',
        items: ['Bestandsaufnahme', 'Planung der Sanierung', 'Schrittweise Umsetzung'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Mehr Sicherheit', 'Zukunftssichere Installation', 'Wertsteigerung der Immobilie'],
      },
    ],
  },

  {
    id: 9,
    icon: Zap,
    title: 'E-Check',
    slug: 'e-check',
    image: '/services/e-check.png',
    teaser: 'Sicherheitsprüfung Ihrer Elektroanlagen und Geräte.',
    description:
      'Mit dem E-Check prüfen wir Ihre elektrischen Anlagen und Geräte auf Sicherheit und Funktion – für ein gutes Gefühl im Alltag.',

    sections: [
      {
        title: 'Leistungen',
        items: [
          'Prüfung elektrischer Anlagen',
          'Überprüfung von Geräten',
          'Dokumentation der Ergebnisse',
        ],
      },
      {
        title: 'Ablauf',
        items: ['Vor-Ort Prüfung', 'Messungen und Analyse', 'Auswertung und Bericht'],
      },
      {
        title: 'Ihre Vorteile',
        items: ['Erhöhte Sicherheit', 'Früherkennung von Schäden', 'Nachweis für Versicherungen'],
      },
    ],
  },
]
