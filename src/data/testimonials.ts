export interface Testimonial {
  id: number
  text: string
  author: string
  age: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Ich habe mich vom ersten Termin an gut aufgehoben gefühlt. Die Behandlung war individuell auf mich abgestimmt und meine Rückenschmerzen haben sich deutlich verbessert.',
    author: 'Anna M.',
    age: 42,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    text: 'Sehr professionelle und gleichzeitig freundliche Betreuung. Man merkt, dass hier mit Erfahrung gearbeitet wird und auf individuelle Bedürfnisse eingegangen wird.',
    author: 'Markus L.',
    age: 51,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    text: 'Nach meiner Knie-OP wurde ich hier sehr gut begleitet. Die Übungen wurden verständlich erklärt und ich habe schnell Fortschritte im Alltag gemacht.',
    author: 'Sabine K.',
    age: 37,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 4,
    text: 'Mir hat besonders die ruhige Atmosphäre gefallen. Ich habe mich ernst genommen gefühlt und wusste jederzeit, wie die Behandlung weitergeführt wird.',
    author: 'Daniel R.',
    age: 46,
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 5,
    text: 'Durch die Behandlung haben sich meine Beschwerden im Alltag deutlich verbessert. Die Betreuung war strukturiert und gleichzeitig sehr angenehm.',
    author: 'Katharina S.',
    age: 34,
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 6,
    text: 'Die Terminvergabe war unkompliziert und das Team sehr freundlich. Schon nach kurzer Zeit habe ich eine spürbare Verbesserung festgestellt.',
    author: 'Peter H.',
    age: 58,
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    id: 7,
    text: 'Ich kam wegen Nackenschmerzen und wurde gezielt behandelt. Besonders die Übungen für zuhause haben mir geholfen, die Beschwerden zu reduzieren.',
    author: 'Laura T.',
    age: 29,
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 8,
    text: 'Hier wird sich wirklich Zeit genommen. Die Behandlung war individuell abgestimmt und ich habe mich jederzeit gut betreut und informiert gefühlt.',
    author: 'Stefan W.',
    age: 63,
    image: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
  {
    id: 9,
    text: 'Angenehme Atmosphäre und moderne Praxis. Meine Beschwerden haben sich spürbar verbessert und ich fühle mich im Alltag wieder deutlich beweglicher.',
    author: 'Julia B.',
    age: 41,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
]
