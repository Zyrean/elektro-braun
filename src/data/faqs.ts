interface Faq {
  id: number
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: 0,
    question: 'Benötige ich ein Rezept vom Arzt?',
    answer:
      'Für gesetzlich Versicherte ist ein gültiges Rezept erforderlich. Privatleistungen können auch ohne ärztliche Verordnung in Anspruch genommen werden. Gerne beraten wir Sie individuell zu Ihren Möglichkeiten.',
  },
  {
    id: 1,
    question: 'Was soll ich zum ersten Termin mitbringen?',
    answer:
      'Bitte bringen Sie Ihr Rezept (falls vorhanden), relevante Befunde oder Arztberichte sowie ein großes Handtuch mit. Bequeme Kleidung erleichtert die Behandlung.',
  },
  {
    id: 2,
    question: 'Wie lange dauert eine Behandlung?',
    answer:
      'Die Dauer richtet sich nach der verordneten Therapieform und beträgt in der Regel zwischen 20 und 30 Minuten. Bei speziellen Anwendungen kann die Behandlungszeit variieren.',
  },
  {
    id: 3,
    question: 'Übernimmt meine Krankenkasse die Kosten?',
    answer:
      'Gesetzliche Krankenkassen übernehmen die Kosten gemäß ärztlicher Verordnung. Es fällt lediglich die gesetzlich vorgeschriebene Zuzahlung an. Privatversicherte erhalten eine Rechnung entsprechend der vereinbarten Leistungen.',
  },
  {
    id: 4,
    question: 'Wie kann ich einen Termin vereinbaren?',
    answer:
      'Sie erreichen uns telefonisch während unserer Öffnungszeiten oder jederzeit über unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen zurück.',
  },
  {
    id: 5,
    question: 'Was passiert, wenn ich einen Termin absagen muss?',
    answer:
      'Bitte informieren Sie uns mindestens 24 Stunden vor Ihrem Termin. So können wir den Termin neu vergeben. Bei kurzfristigen Absagen behalten wir uns vor, eine Ausfallgebühr zu berechnen.',
  },
]
