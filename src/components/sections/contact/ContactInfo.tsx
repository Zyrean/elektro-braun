import { AppSection } from '@/components/ui/AppSection'
import { AppContainer } from '@/components/ui/AppContainer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

interface ContactInfoCard {
  title: string
  description?: string
  list?: string[]
}

interface ContactInfoProps {
  title: string
  subtitle?: string
  cards: ContactInfoCard[]
  belowHero?: boolean
}

// function ContactInfo({ title, subtitle }: ContactInfoProps) {
//   return (
//     <AppSection>
//       <AppContainer>
//         <SectionHeader title={title} subtitle={subtitle} />

//         <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
//           {/* Anfahrt */}
//           <div className="border-border flex h-full flex-col rounded-xl border p-6">
//             <Heading as="h3" className="mb-3 sm:text-xl">
//               Anfahrt & Parken
//             </Heading>

//             <Text size="sm">
//               Unsere Praxis befindet sich in der {COMPANY.address.street} in {COMPANY.address.city}.
//               Kostenlose Parkplätze stehen direkt vor der Praxis zur Verfügung. Die Bushaltestelle
//               ist nur wenige Gehminuten entfernt. Die Praxis ist barrierefrei erreichbar.
//             </Text>
//           </div>

//           {/* Öffnungszeiten */}

//           {/* Hinweise */}
//           <div className="border-border flex h-full flex-col rounded-xl border p-6">
//             <Heading as="h3" className="sm:text-xl">
//               Wichtige Hinweise
//             </Heading>

//             {/* <ul className="mt-3 list-disc space-y-2 pl-3.5 text-sm">
//               <li>Termine bitte mindestens 24 Stunden vorher absagen.</li>
//               <li>Bitte bringen Sie Ihr Rezept zum ersten Termin mit.</li>
//               <li>Ein Handtuch kann bei Bedarf mitgebracht werden.</li>
//               <li>Der Ersttermin dauert in der Regel ca. 60 Minuten.</li>
//             </ul> */}

//             <ul className="mt-3 space-y-3 text-sm">
//               <li>
//                 <strong>Zum Termin:</strong> Bitte bringen Sie Ihr Rezept mit und planen Sie etwa 10
//                 Minuten vor Ihrem Termin ein.
//               </li>
//               <li>
//                 <strong>Kleidung:</strong> Bequeme Kleidung mit ausreichend Bewegungsfreiheit ist
//                 ideal.
//               </li>
//               <li>
//                 <strong>Absagen:</strong> Termine können bis 24 Stunden vorher kostenfrei abgesagt
//                 werden.
//               </li>
//             </ul>
//           </div>

//           <div className="border-border flex h-full flex-col rounded-xl border p-6 transition hover:shadow-sm">
//             <Heading as="h3" className="sm:text-xl">
//               Öffnungszeiten
//             </Heading>

//             {/* <div className="mt-3 grid w-fit grid-cols-[70px_auto] gap-x-4 gap-y-2 text-sm"> */}
//             <div className="mt-3 grid w-full grid-cols-[auto_1fr] gap-y-2 text-sm">
//               <span>Mo – Fr:</span>
//               <span className="text-primary text-right font-medium">
//                 {COMPANY.openingHours.week}
//               </span>

//               <span>Sa:</span>
//               <span className="text-muted text-right font-medium">
//                 {COMPANY.openingHours.saturday}
//               </span>

//               <span>So:</span>
//               <span className="text-muted text-right font-medium">
//                 {COMPANY.openingHours.sunday}
//               </span>
//             </div>
//           </div>
//         </div>
//       </AppContainer>
//     </AppSection>
//   )
// }

function ContactInfo({ title, subtitle, cards, belowHero }: ContactInfoProps) {
  const checkBelowHero = belowHero ? 'lg' : 'none'

  return (
    <AppSection top={checkBelowHero}>
      <AppContainer>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border-border/60 bg-background flex h-full flex-col rounded-2xl border p-7 shadow-sm"
            >
              <Heading as="h3" className="mb-3 sm:text-xl">
                {card.title}
              </Heading>

              {card.description && (
                <Text size="sm" className="leading-7">
                  {card.description}
                </Text>
              )}

              {card.list && (
                <ul className="space-y-3 pl-4 text-sm">
                  {card.list.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default ContactInfo
