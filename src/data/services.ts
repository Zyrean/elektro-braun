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
      'Wir übernehmen professionelle Elektroinstallationen für Privatkunden, Gewerbe und Neubauten. Von der ersten Planung bis zur fachgerechten Umsetzung sorgen wir für sichere, effiziente und zukunftssichere Lösungen nach aktuellen Standards. Ob Einfamilienhaus, Bürogebäude oder Sanierungsprojekt – wir begleiten Ihr Vorhaben zuverlässig und mit moderner Elektrotechnik. Dabei legen wir besonderen Wert auf saubere Ausführung, hochwertige Materialien und eine strukturierte Planung. Unsere Elektroinstallationen werden individuell auf die Anforderungen Ihres Gebäudes abgestimmt und bieten maximale Sicherheit sowie langfristige Erweiterungsmöglichkeiten. Durch moderne Technik und fachgerechte Umsetzung schaffen wir zuverlässige Lösungen für Alltag, Komfort und Energieeffizienz.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Komplette Elektroinstallationen im Neubau',
          'Modernisierung bestehender Elektroanlagen',
          'Installation von Steckdosen und Schaltern',
          'Verkabelung von Wohn- und Gewerbeobjekten',
          'Unterverteilungen und Sicherungskästen',
          'Netzwerk- und Datenverkabelung',
          'Anschluss elektrischer Geräte und Systeme',
          'Prüfung und Inbetriebnahme der Anlage',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Persönliche Beratung und Besichtigung vor Ort',
          'Analyse der Anforderungen und Wünsche',
          'Individuelle Planung der Elektroinstallation',
          'Transparente Angebotserstellung',
          'Fachgerechte Umsetzung durch qualifizierte Elektriker',
          'Prüfung aller Komponenten und Sicherheitsfunktionen',
          'Sichere Inbetriebnahme der Anlage',
          'Übergabe und Einweisung der installierten Technik',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Sichere Elektroinstallationen nach aktuellen Normen',
          'Individuelle Lösungen passend zu Ihrem Gebäude',
          'Zukunftssichere und erweiterbare Technik',
          'Saubere und zuverlässige Ausführung',
          'Hochwertige Materialien und moderne Komponenten',
          'Persönlicher Ansprechpartner während des Projekts',
          'Termingerechte Umsetzung',
          'Langfristige Sicherheit und hohe Betriebssicherheit',
        ],
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
      'Mit einer modernen Photovoltaikanlage nutzen Sie die Kraft der Sonne, um Ihren eigenen Strom zu erzeugen und langfristig Energiekosten zu reduzieren. Wir planen und installieren individuelle PV-Anlagen für Privatkunden und Unternehmen – abgestimmt auf Ihr Gebäude, Ihren Stromverbrauch und Ihre persönlichen Anforderungen. Von der ersten Beratung bis zur fertigen Inbetriebnahme begleiten wir Ihr Projekt zuverlässig und mit moderner Technik. Dabei achten wir auf maximale Effizienz, hochwertige Komponenten und eine saubere fachgerechte Umsetzung. Auf Wunsch integrieren wir zusätzlich Stromspeicher oder intelligente Energiemanagementsysteme, um Ihren Eigenverbrauch weiter zu optimieren. So schaffen wir nachhaltige Energielösungen für mehr Unabhängigkeit und Zukunftssicherheit.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Planung individueller Photovoltaikanlagen',
          'Montage von Solarmodulen',
          'Installation moderner Wechselrichter',
          'Integration von Stromspeichern',
          'Erweiterung bestehender PV-Anlagen',
          'Energiemanagement und Eigenverbrauchsoptimierung',
          'Technischer Anschluss und Inbetriebnahme',
          'Wartung und Überprüfung bestehender Anlagen',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Persönliche Beratung und Analyse Ihres Energiebedarfs',
          'Prüfung der Dachfläche und technischen Voraussetzungen',
          'Individuelle Planung der Photovoltaikanlage',
          'Transparente Angebotserstellung',
          'Montage der Solarmodule und elektrischen Komponenten',
          'Anschluss der Anlage an das Stromnetz',
          'Prüfung aller Systeme und Inbetriebnahme',
          'Einweisung in die Nutzung und Überwachung der Anlage',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Reduzierung der laufenden Stromkosten',
          'Mehr Unabhängigkeit von Energieversorgern',
          'Nachhaltige und umweltfreundliche Stromerzeugung',
          'Wertsteigerung Ihrer Immobilie',
          'Moderne und langlebige Technik',
          'Optimierung des Eigenverbrauchs',
          'Individuell abgestimmte Lösungen',
          'Langfristige Investition in die Zukunft',
        ],
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
      'Mit modernen Smart-Home-Lösungen machen wir Ihr Zuhause intelligenter, komfortabler und energieeffizienter. Ob Beleuchtung, Heizung, Rollläden oder Sicherheitssysteme – wir vernetzen verschiedene Komponenten zu einem zentral steuerbaren System. Dadurch lassen sich viele Funktionen bequem per App, Sprachsteuerung oder automatisiert steuern. Gemeinsam mit Ihnen planen wir eine individuelle Lösung, die perfekt auf Ihre Anforderungen und Ihren Alltag abgestimmt ist. Dabei setzen wir auf zuverlässige Technik, einfache Bedienung und flexible Erweiterungsmöglichkeiten. So entsteht ein modernes Zuhause, das Komfort, Sicherheit und Energieeffizienz optimal miteinander verbindet.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Automatisierung von Beleuchtungssystemen',
          'Steuerung von Heizung und Klimatisierung',
          'Smart-Home-Lösungen für Rollläden und Beschattung',
          'Integration von Sicherheits- und Alarmsystemen',
          'App- und Sprachsteuerung',
          'Vernetzung verschiedener Smart-Home-Komponenten',
          'Nachrüstung bestehender Systeme',
          'Einrichtung individueller Automationen und Szenen',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Persönliche Beratung und Bedarfsanalyse',
          'Planung der individuellen Smart-Home-Lösung',
          'Auswahl geeigneter Systeme und Komponenten',
          'Fachgerechte Installation und Verkabelung',
          'Einrichtung und Konfiguration der Systeme',
          'Verknüpfung aller Geräte und Funktionen',
          'Prüfung und Optimierung der Abläufe',
          'Einweisung in die Bedienung und Steuerung',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Mehr Komfort und einfache Steuerung im Alltag',
          'Energieeinsparung durch intelligente Automationen',
          'Erhöhte Sicherheit durch vernetzte Systeme',
          'Steuerung per Smartphone oder Sprachassistent',
          'Flexible Erweiterung der Smart-Home-Funktionen',
          'Moderne und zukunftssichere Technik',
          'Individuell anpassbare Lösungen',
          'Mehr Kontrolle über Ihr Zuhause – auch unterwegs',
        ],
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
      'Eine stabile und leistungsfähige Netzwerkverbindung ist heute die Grundlage moderner Kommunikation und digitaler Arbeitsabläufe. Wir planen und realisieren professionelle Netzwerk- und Kommunikationslösungen für Privatkunden, Büros und Unternehmen. Von strukturierter Netzwerkverkabelung bis hin zu leistungsstarken WLAN-Systemen sorgen wir für schnelle, sichere und zuverlässige Verbindungen. Dabei berücksichtigen wir die individuellen Anforderungen Ihres Gebäudes und schaffen eine zukunftssichere Infrastruktur für Internet, Daten und Kommunikation. Ob Neubau, Modernisierung oder Optimierung bestehender Netzwerke – wir unterstützen Sie mit moderner Technik und fachgerechter Umsetzung.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'LAN- und WLAN-Installation',
          'Netzwerkverkabelung für Wohn- und Gewerbeobjekte',
          'Einrichtung von Routern, Switches und Access Points',
          'Optimierung bestehender Netzwerke',
          'Strukturierte Datenverkabelung',
          'Patchfelder und Netzwerkschränke',
          'Internet- und Kommunikationsanschlüsse',
          'Netzwerkerweiterungen und Modernisierung',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Analyse der Anforderungen und Nutzung',
          'Planung der Netzwerkstruktur',
          'Auswahl geeigneter Hardware und Komponenten',
          'Verkabelung und Installation der Systeme',
          'Einrichtung und Konfiguration des Netzwerks',
          'Optimierung der WLAN-Abdeckung',
          'Durchführung von Funktions- und Geschwindigkeitstests',
          'Einweisung und Übergabe des Systems',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Stabile und schnelle Netzwerkverbindungen',
          'Zuverlässige WLAN-Abdeckung',
          'Sichere Datenübertragung',
          'Zukunftssichere Infrastruktur',
          'Optimale Lösung für Homeoffice und Unternehmen',
          'Professionelle Einrichtung und Betreuung',
          'Flexible Erweiterungsmöglichkeiten',
          'Moderne Netzwerk- und Kommunikationstechnik',
        ],
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
      'Regelmäßige Wartung und professionelle Servicearbeiten sorgen für Sicherheit, Zuverlässigkeit und eine lange Lebensdauer Ihrer elektrischen Anlagen. Wir übernehmen Wartung, Prüfung und Reparatur von Elektroinstallationen für Privatkunden, Gewerbe und Unternehmen. Dabei erkennen wir mögliche Probleme frühzeitig und beheben Störungen schnell und fachgerecht. Ob kleinere Reparaturen, technische Überprüfungen oder regelmäßige Wartungsarbeiten – wir sorgen dafür, dass Ihre Anlagen zuverlässig funktionieren und aktuellen Sicherheitsstandards entsprechen. Durch unseren schnellen und zuverlässigen Service minimieren wir Ausfälle und schaffen langfristige Betriebssicherheit.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Fehlersuche und Reparatur elektrischer Anlagen',
          'Regelmäßige Wartung und Inspektion',
          'Sicherheitsprüfungen und Kontrollmessungen',
          'Austausch defekter Komponenten',
          'Überprüfung von Sicherungen und Verteilungen',
          'Prüfung elektrischer Geräte und Systeme',
          'Störungsbeseitigung und Notfallservice',
          'Technische Beratung und Optimierung',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Analyse der Störung oder Anlage',
          'Prüfung aller relevanten Komponenten',
          'Fehlersuche und technische Diagnose',
          'Schnelle und fachgerechte Reparatur',
          'Austausch beschädigter Bauteile',
          'Durchführung von Sicherheitsprüfungen',
          'Funktionskontrolle der Anlage',
          'Dokumentation und Abschlussbesprechung',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Schnelle Hilfe bei technischen Problemen',
          'Hohe Betriebssicherheit Ihrer Anlagen',
          'Früherkennung möglicher Schäden',
          'Reduzierung von Ausfällen und Störungen',
          'Längere Lebensdauer elektrischer Systeme',
          'Regelmäßige Kontrolle nach aktuellen Standards',
          'Zuverlässiger und persönlicher Service',
          'Professionelle Wartung durch Fachkräfte',
        ],
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
      'Die richtige Beleuchtung sorgt nicht nur für optimale Lichtverhältnisse, sondern beeinflusst auch Atmosphäre, Komfort und Energieverbrauch. Wir planen und realisieren moderne Beleuchtungskonzepte für private, gewerbliche und öffentliche Bereiche. Dabei kombinieren wir funktionale Beleuchtung mit effizienter LED-Technik und ansprechendem Design. Ob Innenbeleuchtung, Außenbeleuchtung oder gezielte Akzentbeleuchtung – wir entwickeln individuelle Lösungen passend zu Ihren Anforderungen und Räumlichkeiten. Durch den Einsatz moderner Technik schaffen wir energieeffiziente und langlebige Lichtsysteme mit hoher Qualität und angenehmer Lichtwirkung.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Innen- und Außenbeleuchtung',
          'Planung individueller Lichtkonzepte',
          'LED-Umrüstung bestehender Anlagen',
          'Akzent- und Designbeleuchtung',
          'Beleuchtung für Gewerbe und Büros',
          'Installation energieeffizienter Lichtsysteme',
          'Smart-Home-Integration von Beleuchtung',
          'Wartung und Modernisierung bestehender Systeme',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Persönliche Beratung und Analyse der Räume',
          'Planung des individuellen Beleuchtungskonzepts',
          'Auswahl geeigneter Leuchten und Systeme',
          'Berücksichtigung von Energieeffizienz und Design',
          'Fachgerechte Installation der Beleuchtung',
          'Einrichtung von Steuerungs- und Dimmfunktionen',
          'Prüfung und Optimierung der Lichtwirkung',
          'Übergabe und Einweisung der Anlage',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Angenehme und funktionale Lichtlösungen',
          'Energieeffiziente und moderne Technik',
          'Individuell abgestimmte Beleuchtungskonzepte',
          'Langlebige LED-Systeme',
          'Verbesserte Atmosphäre und Wohnqualität',
          'Moderne Steuerungs- und Dimmfunktionen',
          'Professionelle Planung und Umsetzung',
          'Optimale Kombination aus Design und Funktion',
        ],
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
      'Mit modernen Ladelösungen schaffen wir die optimale Grundlage für komfortables und sicheres Laden von Elektrofahrzeugen. Wir planen und installieren individuelle Ladeinfrastruktur für Privatkunden, Unternehmen und Gewerbeobjekte – von einzelnen Wallboxen bis hin zu kompletten Ladesystemen. Dabei berücksichtigen wir die vorhandene Elektroinstallation, den Energiebedarf und zukünftige Erweiterungsmöglichkeiten. Durch intelligente Steuerungssysteme und moderne Technik sorgen wir für effiziente, zuverlässige und zukunftssichere Lösungen. So ermöglichen wir komfortables Laden zuhause oder im Unternehmen und unterstützen Sie beim Umstieg auf nachhaltige Mobilität.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Installation von Wallboxen',
          'Ladeinfrastruktur für Unternehmen',
          'Planung individueller Ladelösungen',
          'Integration in bestehende Elektroanlagen',
          'Lastmanagement und intelligente Steuerung',
          'Vorbereitung für zukünftige Erweiterungen',
          'Wartung und Überprüfung der Ladeeinrichtungen',
          'Prüfung und Inbetriebnahme der Systeme',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Persönliche Beratung und Bedarfsanalyse',
          'Prüfung der vorhandenen Elektroinstallation',
          'Planung der Ladepunkte und Systeme',
          'Auswahl geeigneter Wallboxen und Komponenten',
          'Fachgerechte Installation der Ladeeinrichtung',
          'Einrichtung intelligenter Steuerungsfunktionen',
          'Prüfung aller Sicherheitsfunktionen',
          'Inbetriebnahme und Einweisung in die Nutzung',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Komfortables Laden zuhause oder im Unternehmen',
          'Zukunftssichere Ladeinfrastruktur',
          'Sichere und fachgerechte Installation',
          'Effiziente Nutzung der vorhandenen Energie',
          'Flexible Erweiterungsmöglichkeiten',
          'Moderne Steuerungs- und Ladelösungen',
          'Wertsteigerung Ihrer Immobilie',
          'Unterstützung nachhaltiger Mobilität',
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
      'Moderne Türkommunikationssysteme bieten mehr Sicherheit, Komfort und Kontrolle im Alltag. Wir installieren und modernisieren Klingel-, Sprech- und Videosysteme für Einfamilienhäuser, Mehrfamilienhäuser und Gewerbeobjekte. Von klassischen Gegensprechanlagen bis hin zu smarten Video-Türsprechanlagen mit App-Anbindung bieten wir individuelle Lösungen passend zu Ihrem Gebäude und Ihren Anforderungen. Dabei setzen wir auf zuverlässige Technik, hochwertige Komponenten und eine saubere fachgerechte Installation. Durch moderne Türkommunikation behalten Sie jederzeit den Überblick darüber, wer sich vor Ihrer Tür befindet – auch unterwegs per Smartphone.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Klingel- und Gegensprechanlagen',
          'Video-Türsprechanlagen',
          'Smarte Türkommunikationssysteme',
          'Integration ins Smart Home',
          'Modernisierung bestehender Anlagen',
          'Mehrfamilienhaus- und Gewerbelösungen',
          'App- und Smartphone-Anbindung',
          'Wartung und Erweiterung bestehender Systeme',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Persönliche Beratung und Bedarfsanalyse',
          'Auswahl passender Türkommunikationssysteme',
          'Planung der Installation',
          'Fachgerechte Montage und Verkabelung',
          'Einrichtung von Audio- und Videofunktionen',
          'Verknüpfung mit Smartphone oder Smart Home',
          'Prüfung aller Funktionen',
          'Einweisung in die Bedienung der Anlage',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Mehr Sicherheit im Eingangsbereich',
          'Komfortable Kommunikation mit Besuchern',
          'Kontrolle per Smartphone – auch unterwegs',
          'Moderne und zuverlässige Technik',
          'Individuelle Lösungen für jedes Gebäude',
          'Einfache Bedienung und flexible Erweiterung',
          'Hochwertige Audio- und Videoqualität',
          'Professionelle Installation und Einrichtung',
        ],
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
      'Veraltete Elektroinstallationen entsprechen häufig nicht mehr den heutigen Sicherheitsstandards und Anforderungen moderner Technik. Im Rahmen einer Altbausanierung modernisieren wir bestehende Elektroanlagen und bringen diese auf den aktuellen Stand der Technik. Dabei erneuern wir Leitungen, Sicherungssysteme und elektrische Komponenten fachgerecht und abgestimmt auf die vorhandene Gebäudestruktur. Unser Ziel ist eine sichere, zuverlässige und zukunftssichere Elektroinstallation, die den Anforderungen moderner Wohn- und Arbeitsbereiche gerecht wird. Durch sorgfältige Planung und saubere Umsetzung sorgen wir für eine effiziente Modernisierung mit möglichst geringem Eingriff in die bestehende Bausubstanz.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Erneuerung veralteter Elektroinstallationen',
          'Austausch alter Leitungen und Kabel',
          'Modernisierung von Sicherungskästen',
          'Nachrüstung zusätzlicher Steckdosen und Anschlüsse',
          'Anpassung an aktuelle Sicherheitsstandards',
          'Integration moderner Smart-Home- und Netzwerksysteme',
          'Prüfung bestehender Elektroanlagen',
          'Planung und Umsetzung individueller Sanierungslösungen',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Besichtigung und Bestandsaufnahme vor Ort',
          'Analyse der bestehenden Elektroinstallation',
          'Planung der Modernisierungsmaßnahmen',
          'Transparente Angebotserstellung',
          'Schrittweise Erneuerung der Elektroanlage',
          'Austausch und Installation moderner Komponenten',
          'Prüfung aller Sicherheitsfunktionen',
          'Abschlusskontrolle und Inbetriebnahme',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Mehr Sicherheit durch moderne Elektroinstallation',
          'Anpassung an aktuelle Normen und Standards',
          'Zukunftssichere Technik und Erweiterungsmöglichkeiten',
          'Verbesserte Energieeffizienz',
          'Höherer Komfort im Alltag',
          'Wertsteigerung Ihrer Immobilie',
          'Saubere und strukturierte Umsetzung',
          'Langfristige Betriebssicherheit der Anlage',
        ],
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
      'Mit dem E-Check prüfen wir elektrische Anlagen, Installationen und Geräte auf Sicherheit, Funktion und mögliche Schäden. Die regelmäßige Überprüfung hilft dabei, Risiken frühzeitig zu erkennen und potenzielle Gefahrenquellen zu vermeiden. Besonders in Wohngebäuden, Unternehmen und gewerblichen Objekten sorgt der E-Check für mehr Sicherheit und einen zuverlässigen Betrieb elektrischer Anlagen. Unsere Fachkräfte kontrollieren sämtliche relevanten Komponenten nach aktuellen Standards und dokumentieren die Ergebnisse übersichtlich und nachvollziehbar. So erhalten Sie die Sicherheit, dass Ihre Elektroinstallation ordnungsgemäß funktioniert und den geltenden Anforderungen entspricht.',

    sections: [
      {
        title: 'Leistungen',
        variant: 'check',
        items: [
          'Prüfung elektrischer Anlagen',
          'Überprüfung elektrischer Geräte',
          'Sicherheits- und Funktionskontrollen',
          'Messungen nach aktuellen Vorschriften',
          'Kontrolle von Sicherungen und Verteilungen',
          'Erkennung möglicher Schwachstellen und Schäden',
          'Dokumentation der Prüfergebnisse',
          'Empfehlungen zur Optimierung und Modernisierung',
        ],
      },

      {
        title: 'Ablauf',
        variant: 'steps',
        items: [
          'Terminvereinbarung und Vor-Ort-Besichtigung',
          'Prüfung der elektrischen Anlagen und Geräte',
          'Durchführung technischer Messungen',
          'Kontrolle aller sicherheitsrelevanten Komponenten',
          'Analyse möglicher Schäden oder Mängel',
          'Dokumentation der Ergebnisse',
          'Besprechung notwendiger Maßnahmen',
          'Übergabe des Prüfberichts',
        ],
      },

      {
        title: 'Ihre Vorteile',
        variant: 'check',
        items: [
          'Erhöhte Sicherheit für Personen und Gebäude',
          'Früherkennung möglicher Schäden und Risiken',
          'Zuverlässiger Betrieb elektrischer Anlagen',
          'Prüfung nach aktuellen Sicherheitsstandards',
          'Nachweis für Versicherungen und Dokumentationen',
          'Reduzierung von Ausfall- und Brandrisiken',
          'Klare Übersicht über den Zustand der Anlage',
          'Professionelle Prüfung durch qualifizierte Fachkräfte',
        ],
      },
    ],
  },
]
