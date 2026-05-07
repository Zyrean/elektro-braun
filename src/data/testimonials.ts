export interface Testimonial {
  id: number
  text: string
  author: string
  age: number
  image?: string
}

// export const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     text: 'Ich habe mich vom ersten Termin an gut aufgehoben gefühlt. Die Behandlung war individuell auf mich abgestimmt und meine Rückenschmerzen haben sich deutlich verbessert.',
//     author: 'Anna M.',
//     age: 42,
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     id: 2,
//     text: 'Sehr professionelle und gleichzeitig freundliche Betreuung. Man merkt, dass hier mit Erfahrung gearbeitet wird und auf individuelle Bedürfnisse eingegangen wird.',
//     author: 'Markus L.',
//     age: 51,
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     id: 3,
//     text: 'Nach meiner Knie-OP wurde ich hier sehr gut begleitet. Die Übungen wurden verständlich erklärt und ich habe schnell Fortschritte im Alltag gemacht.',
//     author: 'Sabine K.',
//     age: 37,
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//   },
//   {
//     id: 4,
//     text: 'Mir hat besonders die ruhige Atmosphäre gefallen. Ich habe mich ernst genommen gefühlt und wusste jederzeit, wie die Behandlung weitergeführt wird.',
//     author: 'Daniel R.',
//     age: 46,
//     image: 'https://randomuser.me/api/portraits/men/52.jpg',
//   },
//   {
//     id: 5,
//     text: 'Durch die Behandlung haben sich meine Beschwerden im Alltag deutlich verbessert. Die Betreuung war strukturiert und gleichzeitig sehr angenehm.',
//     author: 'Katharina S.',
//     age: 34,
//     image: 'https://randomuser.me/api/portraits/women/12.jpg',
//   },
//   {
//     id: 6,
//     text: 'Die Terminvergabe war unkompliziert und das Team sehr freundlich. Schon nach kurzer Zeit habe ich eine spürbare Verbesserung festgestellt.',
//     author: 'Peter H.',
//     age: 58,
//     image: 'https://randomuser.me/api/portraits/men/65.jpg',
//   },
//   {
//     id: 7,
//     text: 'Ich kam wegen Nackenschmerzen und wurde gezielt behandelt. Besonders die Übungen für zuhause haben mir geholfen, die Beschwerden zu reduzieren.',
//     author: 'Laura T.',
//     age: 29,
//     image: 'https://randomuser.me/api/portraits/women/25.jpg',
//   },
//   {
//     id: 8,
//     text: 'Hier wird sich wirklich Zeit genommen. Die Behandlung war individuell abgestimmt und ich habe mich jederzeit gut betreut und informiert gefühlt.',
//     author: 'Stefan W.',
//     age: 63,
//     image: 'https://randomuser.me/api/portraits/men/74.jpg',
//   },
//   {
//     id: 9,
//     text: 'Angenehme Atmosphäre und moderne Praxis. Meine Beschwerden haben sich spürbar verbessert und ich fühle mich im Alltag wieder deutlich beweglicher.',
//     author: 'Julia B.',
//     age: 41,
//     image: 'https://randomuser.me/api/portraits/women/33.jpg',
//   },
// ]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Ich habe mich von Anfang an gut beraten gefühlt. Die Arbeiten wurden sauber umgesetzt und alles lief zuverlässig und ohne Probleme. Man merkt, dass hier mit Erfahrung gearbeitet wird.',
    author: 'Anna M.',
    age: 42,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    text: 'Sehr professionelle und freundliche Betreuung. Man merkt, dass hier mit Erfahrung gearbeitet wird und auf Qualität geachtet wird. Die Umsetzung lief schnell und reibungslos.',
    author: 'Markus L.',
    age: 51,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    text: 'Unsere Photovoltaikanlage wurde sehr gut geplant und umgesetzt. Die Abläufe waren klar strukturiert und das Ergebnis überzeugt im Alltag. Wir würden es jederzeit wieder so machen.',
    author: 'Sabine K.',
    age: 37,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 4,
    text: 'Mir hat besonders die zuverlässige Arbeitsweise gefallen. Termine wurden eingehalten und alles wurde verständlich erklärt. So stellt man sich eine gute Zusammenarbeit vor.',
    author: 'Daniel R.',
    age: 46,
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 5,
    text: 'Die Installation wurde sauber durchgeführt und sieht sehr hochwertig aus. Man merkt, dass hier mit Sorgfalt gearbeitet wird und Wert auf Details gelegt wird.',
    author: 'Katharina S.',
    age: 34,
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 6,
    text: 'Bei einem Problem wurde schnell geholfen und die Ursache direkt gefunden. Die Lösung war unkompliziert und zuverlässig umgesetzt. Der Service war wirklich top.',
    author: 'Peter H.',
    age: 58,
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    id: 7,
    text: 'Ich wurde gut beraten und die Umsetzung verlief reibungslos. Besonders die saubere Arbeit und die klare Kommunikation haben mich überzeugt.',
    author: 'Laura T.',
    age: 29,
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 8,
    text: 'Die Arbeiten wurden zuverlässig und ordentlich ausgeführt. Ich habe mich jederzeit gut betreut und informiert gefühlt. Alles lief wie abgesprochen.',
    author: 'Stefan W.',
    age: 63,
    image: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
  {
    id: 9,
    text: 'Angenehmer Kontakt und saubere Umsetzung. Die Ergebnisse sind im Alltag direkt spürbar und überzeugen auf ganzer Linie. Klare Weiterempfehlung.',
    author: 'Julia B.',
    age: 41,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
]
