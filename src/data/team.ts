interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sophie Becker',
    role: 'Physiotherapeutin · Manuelle Therapie',
    image: '/team/team-01.png',
    bio: 'Spezialisiert auf Gelenk- und Wirbelsäulentherapie mit ganzheitlichem Ansatz.',
  },
  {
    name: 'Daniel Hoffmann',
    role: 'Physiotherapeut · Sportrehabilitation',
    image: '/team/team-02.png',
    bio: 'Begleitet Sportlerinnen und Sportler sicher zurück in Training und Alltag.',
  },
  {
    name: 'Katharina Wolf',
    role: 'Physiotherapeutin · Neurologische Therapie',
    image: '/team/team-03.png',
    bio: 'Behandelt neurologische Beschwerden mit strukturierter und individueller Therapie.',
  },
  {
    name: 'Julian Hartmann',
    role: 'Physiotherapeut · KGG & Prävention',
    image: '/team/team-04.png',
    bio: 'Fokus auf gezieltem Kraftaufbau und nachhaltiger Stabilisierung.',
  },
  {
    name: 'Miriam Schneider',
    role: 'Physiotherapeutin · Lymphdrainage',
    image: '/team/team-05.png',
    bio: 'Einfühlsame Behandlung bei postoperativen und chronischen Schwellungen.',
  },
  {
    name: 'Felix Braun',
    role: 'Physiotherapeut · Orthopädische Therapie',
    image: '/team/team-06.png',
    bio: 'Schwerpunkt auf Rücken-, Schulter- und Kniebeschwerden.',
  },
]
