import { Service } from '@/types/general'
import { Hand, Activity, Dumbbell, Waves, Brain, Sparkles, Target } from 'lucide-react'

export const services: Service[] = [
  {
    id: 0,
    title: 'Manuelle Therapie',
    abbreviation: 'MT',
    slug: 'manuelle-therapie',
    image: '/services/manuelle-therapie.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Hand,
    teaser:
      'Gezielte Behandlung von Gelenk- und Wirbelsäulenbeschwerden für mehr Beweglichkeit und Funktion.',
    description:
      'Die manuelle Therapie ist eine spezialisierte Behandlungsmethode zur Therapie von Funktionsstörungen der Gelenke, Muskeln und der Wirbelsäule. Nach einer ausführlichen Befundaufnahme analysieren wir Beweglichkeit, Schmerzpunkte und mögliche Blockaden. Mit präzisen Mobilisationstechniken lösen wir Bewegungseinschränkungen, reduzieren Schmerzen und stellen die natürliche Funktion des Bewegungsapparates wieder her. Ergänzend erhalten Sie individuelle Übungen, um die erzielten Fortschritte langfristig zu stabilisieren.',
    indications: [
      'Rückenschmerzen',
      'Nackenverspannungen',
      'Bandscheibenprobleme',
      'Bewegungseinschränkungen nach Verletzungen',
    ],
    process: [
      'Ausführliche Befundaufnahme',
      'Analyse von Beweglichkeit und Schmerzpunkten',
      'Gezielte manuelle Mobilisationstechniken',
      'Ergänzende Übungen für Zuhause',
    ],
    benefits: [
      'Gezielte Schmerzreduktion',
      'Verbesserte Beweglichkeit',
      'Individuell angepasste Behandlung',
      'Langfristige Stabilisierung',
    ],
  },
  {
    id: 1,
    title: 'Krankengymnastik',
    abbreviation: 'KG',
    slug: 'krankengymnastik',
    image: '/services/krankengymnastik.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Activity,
    teaser:
      'Individuelle Übungen zur Verbesserung von Beweglichkeit, Kraft und Koordination im Alltag.',
    description:
      'Die Krankengymnastik dient der gezielten Verbesserung von Beweglichkeit, Kraft und Koordination. Nach einer individuellen Analyse Ihrer Beschwerden erstellen wir einen persönlichen Therapieplan mit aktiven und passiven Übungen. Ziel ist es, Fehlhaltungen zu korrigieren, Schmerzen zu reduzieren und Ihre körperliche Leistungsfähigkeit nachhaltig zu verbessern. Die Übungen werden schrittweise angepasst und in Ihren Alltag integriert.',
    indications: [
      'Beschwerden nach Operationen',
      'Chronische Rückenschmerzen',
      'Haltungsprobleme',
      'Gelenkbeschwerden',
    ],
    process: [
      'Individuelle Analyse Ihrer Beschwerden',
      'Erstellung eines persönlichen Therapieplans',
      'Gezielte therapeutische Übungen',
      'Integration in den Alltag',
    ],
    benefits: [
      'Nachhaltiger Muskelaufbau',
      'Verbesserte Körperhaltung',
      'Mehr Stabilität im Alltag',
      'Individuelle Betreuung',
    ],
  },
  {
    id: 2,
    title: 'Sportphysiotherapie',
    slug: 'sportphysiotherapie',
    image: '/services/sportphysiotherapie.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Target,
    teaser: 'Behandlung von Sportverletzungen und Unterstützung beim Wiedereinstieg ins Training.',
    description:
      'Die Sportphysiotherapie richtet sich an aktive Menschen und Sportlerinnen und Sportler. Wir behandeln akute Verletzungen, Überlastungsschäden und muskuläre Dysbalancen individuell und leistungsorientiert. Neben der Rehabilitation steht die Prävention im Fokus, um zukünftige Verletzungen zu vermeiden und Ihre sportliche Leistungsfähigkeit nachhaltig zu steigern.',
    indications: [
      'Akute Sportverletzungen',
      'Überlastungsschäden',
      'Muskelverletzungen',
      'Wettkampfvorbereitung',
    ],
    process: [
      'Analyse der sportlichen Belastung',
      'Gezielte Therapie und Mobilisation',
      'Individuelles Aufbautraining',
      'Return-to-Sport Planung',
    ],
    benefits: [
      'Schnellere Regeneration',
      'Verletzungsprävention',
      'Optimierte Bewegungsabläufe',
      'Leistungssteigerung',
    ],
  },

  {
    id: 3,
    title: 'Lymphdrainage',
    slug: 'lymphdrainage',
    abbreviation: 'MLD',
    image: '/services/lymphdrainage.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Waves,
    teaser:
      'Sanfte Therapie zur Reduktion von Schwellungen und zur Unterstützung des Lymphflusses.',
    description:
      'Die manuelle Lymphdrainage ist eine besonders schonende Behandlungstechnik zur Förderung des Lymphflusses. Durch rhythmische, kreisende Bewegungen wird der Abtransport von Gewebeflüssigkeit unterstützt und Schwellungen reduziert. Diese Therapie wird häufig nach Operationen oder bei chronischen Lymphödemen eingesetzt und wirkt zudem entspannend auf das Gewebe.',
    indications: ['Schwellungen nach Operationen', 'Lymphödeme', 'Chronische Venenerkrankungen'],
    process: [
      'Befundaufnahme',
      'Sanfte manuelle Entstauungstechniken',
      'Individuelle Behandlungsdauer',
    ],
    benefits: ['Reduzierung von Schwellungen', 'Schmerzlinderung', 'Sanfte, entspannende Wirkung'],
  },
  {
    id: 4,
    title: 'Krankengymnastik am Gerät',
    slug: 'krankengymnastik-am-geraet',
    abbreviation: 'KGG',
    image: '/services/krankengymnastik-am-geraet.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Dumbbell,
    teaser:
      'Gerätegestütztes Training zum Muskelaufbau und zur Stabilisierung des Bewegungsapparates.',
    description:
      'Die gerätegestützte Krankengymnastik kombiniert moderne medizinische Trainingsgeräte mit physiotherapeutischer Betreuung. Durch kontrollierte Belastung werden gezielt geschwächte Muskelgruppen aufgebaut und Gelenke stabilisiert. Besonders nach Operationen oder Verletzungen unterstützt diese Therapieform die sichere und strukturierte Rückkehr zur vollen Belastbarkeit.',
    indications: [
      'Rehabilitation nach Operationen',
      'Muskelabbau',
      'Rückenschmerzen',
      'Instabilität der Gelenke',
    ],
    process: [
      'Leistungsanalyse',
      'Individuelle Geräteeinstellung',
      'Strukturiertes Training',
      'Kontinuierliche Anpassung der Belastung',
    ],
    benefits: [
      'Gezielter Muskelaufbau',
      'Verbesserte Belastbarkeit',
      'Kontrollierte Trainingsbedingungen',
      'Nachhaltige Rehabilitation',
    ],
  },
  {
    id: 5,
    title: 'Neurologische Therapie',
    slug: 'neurologische-therapie',
    image: '/services/neurologische-therapie.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Brain,
    teaser: 'Individuelle Therapie zur Verbesserung von Bewegungsabläufen und Koordination.',
    description:
      'Die neurologische Therapie unterstützt Patientinnen und Patienten mit Erkrankungen des Nervensystems wie Schlaganfall, Parkinson oder Multipler Sklerose. Ziel ist es, Bewegungsabläufe zu verbessern, Gleichgewicht zu fördern und Alltagsfunktionen wiederherzustellen. Die Therapie wird individuell angepasst und auf langfristige Stabilisierung ausgerichtet.',
    indications: ['Schlaganfall', 'Parkinson', 'Multiple Sklerose'],
    process: [
      'Individuelle neurologische Analyse',
      'Gezielte Bewegungsübungen',
      'Koordinationstraining',
    ],
    benefits: [
      'Verbesserte Bewegungsabläufe',
      'Mehr Selbstständigkeit',
      'Langfristige Stabilisierung',
    ],
  },
  {
    id: 6,
    title: 'Klassische Massage',
    abbreviation: 'KMT',
    slug: 'klassische-massage',
    image: '/services/klassische-massage.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Sparkles,
    teaser:
      'Lockerung verspannter Muskulatur und Förderung der Durchblutung bei muskulären Beschwerden.',
    description:
      'Die klassische Massage dient der Lockerung verspannter Muskulatur und der Verbesserung der Durchblutung. Durch gezielte Grifftechniken wie Knetungen, Streichungen und Druckbewegungen werden Muskelverhärtungen gelöst und Schmerzen reduziert. Die Behandlung eignet sich besonders bei Verspannungen im Nacken-, Schulter- und Rückenbereich sowie bei stressbedingten Beschwerden. Neben der therapeutischen Wirkung wirkt die Massage entspannend auf Körper und Nervensystem.',
    indications: [
      'Muskelverspannungen',
      'Stressbedingte Beschwerden',
      'Rücken- und Nackenschmerzen',
    ],
    process: [
      'Analyse der Verspannungen',
      'Gezielte Massagegriffe',
      'Individuelle Anpassung der Intensität',
    ],
    benefits: ['Lockerung der Muskulatur', 'Verbesserte Durchblutung', 'Tiefe Entspannung'],
  },
  {
    id: 7,
    title: 'Triggerpunkttherapie',
    slug: 'triggerpunkttherapie',
    image: '/services/triggerpunkttherapie.png',
    images: ['/features/feature-04.png', '/praxis/praxis-02.png', '/features/feature-03.png'],
    icon: Sparkles,
    teaser:
      'Gezielte Behandlung von Muskelverhärtungen zur Reduktion lokaler und ausstrahlender Schmerzen.',
    description:
      'Die Triggerpunkttherapie konzentriert sich auf die Behandlung sogenannter myofaszialer Triggerpunkte – verhärtete, druckempfindliche Bereiche in der Muskulatur. Diese können lokale oder ausstrahlende Schmerzen verursachen. Durch gezielten Druck und spezielle Techniken werden die betroffenen Muskelbereiche gelöst, die Durchblutung verbessert und Schmerzen reduziert. Die Therapie eignet sich besonders bei chronischen Verspannungen, Kopfschmerzen oder muskulären Dysbalancen.',
    indications: ['Chronische Verspannungen', 'Kopfschmerzen', 'Ausstrahlende Muskelschmerzen'],
    process: [
      'Lokalisierung der Triggerpunkte',
      'Gezielte Drucktechniken',
      'Nachbehandlung zur Stabilisierung',
    ],
    benefits: [
      'Gezielte Schmerzreduktion',
      'Verbesserte Beweglichkeit',
      'Lösung tiefer Muskelverhärtungen',
    ],
  },
]
