interface Faq {
  id: number
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: 0,
    question: 'Mit welchen Kosten muss ich rechnen?',
    answer:
      'Die Kosten hängen vom Umfang und der Art des Projekts ab. Nach einer ersten Beratung erstellen wir Ihnen ein transparentes und individuelles Angebot.',
  },
  {
    id: 1,
    question: 'Wie schnell können Sie einen Termin anbieten?',
    answer:
      'In der Regel können wir kurzfristig Termine anbieten. Je nach Auslastung und Projektumfang stimmen wir gemeinsam einen passenden Termin ab.',
  },
  {
    id: 2,
    question: 'Arbeiten Sie auch im Altbau oder bei Sanierungen?',
    answer:
      'Ja, wir übernehmen sowohl Neubauten als auch Sanierungen im Bestand und sorgen für eine sichere und normgerechte Umsetzung.',
  },
  {
    id: 3,
    question: 'Übernehmen Sie auch kleinere Arbeiten oder Reparaturen?',
    answer:
      'Ja, neben größeren Projekten kümmern wir uns auch um kleinere Installationen, Reparaturen und Wartungsarbeiten.',
  },
  {
    id: 4,
    question: 'Muss ich mich selbst um Material oder Planung kümmern?',
    answer:
      'Nein, wir übernehmen auf Wunsch die komplette Planung sowie die Auswahl und Beschaffung der passenden Materialien.',
  },
  {
    id: 5,
    question: 'Wie läuft die Zusammenarbeit ab?',
    answer:
      'Nach Ihrer Anfrage besprechen wir Ihr Projekt persönlich, planen die Umsetzung und führen die Arbeiten fachgerecht durch – zuverlässig und transparent.',
  },
]
