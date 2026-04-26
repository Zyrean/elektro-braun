interface CareerJob {
  id: string
  title: string
  type: string
  location: string
  start?: string
  description: string
  tasks: string[]
  requirements: string[]
}

export const careerJobs: CareerJob[] = [
  {
    id: 'physiotherapeut',
    title: 'Physiotherapeut (m/w/d)',
    type: 'Voll- oder Teilzeit',
    location: 'Emmendingen',
    start: '27. Juni 2026',

    description:
      'Dich erwartet ein modernes Arbeitsumfeld, strukturierte Abläufe und ein Team, das sich gegenseitig unterstützt.',

    tasks: [
      'Eigenständige Behandlung von Patient:innen',
      'Individuelle Therapieplanung und Dokumentation',
      'Zusammenarbeit im Team und fachlicher Austausch',
    ],

    requirements: [
      'Abgeschlossene Ausbildung als Physiotherapeut:in',
      'Freude am Umgang mit Menschen',
      'Teamfähigkeit und Engagement',
    ],
  },

  {
    id: 'manualtherapeut',
    title: 'Manualtherapeut (m/w/d)',
    type: 'Voll- oder Teilzeit',
    location: 'Emmendingen',
    start: 'ab sofort',

    description:
      'Du arbeitest eigenverantwortlich, hast Raum für deine Spezialisierung und kannst dein Wissen aktiv einbringen.',

    tasks: [
      'Durchführung manualtherapeutischer Behandlungen',
      'Individuelle Therapieplanung',
      'Dokumentation und Verlaufskontrolle',
    ],

    requirements: [
      'Abgeschlossene Ausbildung als Physiotherapeut:in',
      'Fortbildung in Manueller Therapie',
      'Selbstständige und strukturierte Arbeitsweise',
    ],
  },

  {
    id: 'rezeption',
    title: 'Mitarbeiter Rezeption (m/w/d)',
    type: 'Teilzeit',
    location: 'Waldkirch',
    start: '11. April 2026',

    description:
      'Du bist die erste Anlaufstelle für unsere Patient:innen und sorgst für einen reibungslosen Ablauf im Praxisalltag.',

    tasks: [
      'Terminvergabe und Betreuung der Patient:innen',
      'Telefonannahme und Organisation',
      'Administrative Aufgaben im Praxisalltag',
    ],

    requirements: [
      'Freundliches und sicheres Auftreten',
      'Organisationstalent und Struktur',
      'Erfahrung im Praxis- oder Gesundheitsbereich von Vorteil',
    ],
  },

  {
    id: 'praktikum',
    title: 'Praktikum Physiotherapie',
    type: 'Praktikum',
    location: 'Emmendingen',
    start: 'nach Absprache',

    description:
      'Du erhältst Einblicke in den Praxisalltag und lernst moderne Therapieansätze direkt vor Ort kennen.',

    tasks: [
      'Begleitung unserer Therapeut:innen im Alltag',
      'Einblicke in verschiedene Behandlungsmethoden',
      'Unterstützung im Praxisbetrieb',
    ],

    requirements: ['Interesse an Physiotherapie', 'Motivation und Zuverlässigkeit'],
  },
]
