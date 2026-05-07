// import { AppContainer } from '@/components/ui/AppContainer'
// import { AppSection } from '@/components/ui/AppSection'
// import { Heading } from '@/components/ui/Heading'
// import { SectionHeader } from '@/components/ui/SectionHeader'
// import { Text } from '@/components/ui/Text'
// import { ServiceFeature } from '@/data/servicePhilosophy'
// import { cn } from '@/lib/cn'
// import { ArrowRight } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// interface ServicePhilosophyProps {
//   title: string
//   subtitle?: string
//   ctaText?: string
//   items: ServiceFeature[]
// }

// function ServicePhilosophy({ title, subtitle, ctaText, items }: ServicePhilosophyProps) {
//   return (
//     <AppSection>
//       <AppContainer>
//         <SectionHeader title={title} subtitle={subtitle} />

//         <div className="divide-muted/10 grid grid-cols-1 divide-y sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:divide-y-0 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0 lg:pb-14">
//           {items.map((item, index) => {
//             const Icon = item.icon

//             return (
//               <Link
//                 href={item.href}
//                 key={item.name}
//                 className={cn(
//                   'group block lg:text-left',
//                   index === 0 && 'lg:translate-y-2',
//                   index === 1 && 'lg:translate-y-8',
//                   index === items.length - 1 && 'lg:translate-y-14',
//                 )}
//               >
//                 <div
//                   className={cn(
//                     'pt-10 pb-10 sm:py-0 md:text-left lg:block',
//                     index === 0 && 'pt-0',
//                     index === items.length - 1 && 'pb-0',
//                   )}
//                 >
//                   {item.image ? (
//                     <div className="relative mb-6 aspect-5/6 w-full overflow-hidden rounded-xl">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 800px"
//                         className="object-cover object-top transition duration-500 ease-out group-hover:scale-101"
//                       />
//                     </div>
//                   ) : (
//                     <Icon className="text-primary h-6 w-6 lg:mx-auto" />
//                   )}

//                   <div className="mt-6 space-y-3">
//                     <div className="bg-primary mb-3 h-0.5 w-10 origin-left scale-x-100 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-175" />

//                     <Heading as="h3">{item.name}</Heading>

//                     <Text>{item.description}</Text>

//                     <div className="text-primary mt-6 flex items-center gap-1 text-sm font-medium underline-offset-4 transition-all duration-300 group-hover:underline">
//                       {ctaText}
//                       <ArrowRight className="h-4 w-4" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             )
//           })}
//         </div>
//       </AppContainer>
//     </AppSection>
//   )
// }

// export default ServicePhilosophy

import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { ServiceFeature } from '@/data/servicePhilosophy'
import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ServicePhilosophyProps {
  title: string
  subtitle?: string
  ctaText?: string
  items: ServiceFeature[]
  clickable?: boolean
  belowHero?: boolean
}

function ServicePhilosophy({
  title,
  subtitle,
  ctaText = 'Mehr erfahren',
  items,
  clickable = true,
  belowHero = false,
}: ServicePhilosophyProps) {
  const checkBelowHero = belowHero ? 'lg' : 'none'

  return (
    <AppSection top={checkBelowHero}>
      <AppContainer>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="divide-muted/10 grid grid-cols-1 divide-y sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:divide-y-0 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0 lg:pb-14">
          {items.map((item, index) => {
            const Icon = item.icon

            const content = (
              <div
                className={cn(
                  'pt-10 pb-10 sm:py-0 md:text-left lg:block',
                  index === 0 && 'pt-0',
                  index === items.length - 1 && 'pb-0',
                )}
              >
                {item.image ? (
                  <div className="relative mb-6 aspect-5/6 w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className={cn(
                        'object-cover object-top transition duration-500 ease-out',
                        clickable ? 'group-hover:scale-101' : '',
                      )}
                    />
                  </div>
                ) : (
                  <Icon className="text-primary h-6 w-6 lg:mx-auto" />
                )}

                <div className="mt-6 space-y-3">
                  <div className="bg-primary mb-3 h-0.5 w-10 origin-left scale-x-100 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-175" />

                  <Heading as="h3">{item.name}</Heading>

                  <Text>{item.description}</Text>

                  {clickable && (
                    <div className="text-primary mt-6 flex items-center gap-1 text-sm font-medium underline-offset-4 transition-all duration-300 group-hover:underline">
                      {ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            )

            if (clickable) {
              return (
                <Link
                  href={item.href}
                  key={item.name}
                  className={cn(
                    'group block lg:text-left',
                    index === 0 && 'lg:translate-y-2',
                    index === 1 && 'lg:translate-y-8',
                    index === items.length - 1 && 'lg:translate-y-14',
                  )}
                >
                  {content}
                </Link>
              )
            }

            return (
              <div
                key={item.name}
                className={cn(
                  'group block lg:text-left',
                  index === 0 && 'lg:translate-y-2',
                  index === 1 && 'lg:translate-y-8',
                  index === items.length - 1 && 'lg:translate-y-14',
                )}
              >
                {content}
              </div>
            )

            // return (
            //   <Wrapper
            //     key={item.name}
            //     {...(clickable ? { href: item.href } : {})}
            //     className={cn(
            //       'group block lg:text-left',
            //       index === 0 && 'lg:translate-y-2',
            //       index === 1 && 'lg:translate-y-8',
            //       index === items.length - 1 && 'lg:translate-y-14',
            //     )}
            //   >
            //     <div
            //       className={cn(
            //         'pt-10 pb-10 sm:py-0 md:text-left lg:block',
            //         index === 0 && 'pt-0',
            //         index === items.length - 1 && 'pb-0',
            //       )}
            //     >
            //       {item.image ? (
            //         <div className="relative mb-6 aspect-5/6 w-full overflow-hidden rounded-xl">
            //           <Image
            //             src={item.image}
            //             alt={item.name}
            //             fill
            //             sizes="(max-width: 768px) 100vw, 800px"
            //             className="object-cover object-top transition duration-500 ease-out group-hover:scale-101"
            //           />
            //         </div>
            //       ) : (
            //         <Icon className="text-primary h-6 w-6 lg:mx-auto" />
            //       )}

            //       <div className="mt-6 space-y-3">
            //         <div className="bg-primary mb-3 h-0.5 w-10 origin-left scale-x-100 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-175" />

            //         <Heading as="h3">{item.name}</Heading>

            //         <Text>{item.description}</Text>

            //         {clickable && (
            //           <div className="text-primary mt-6 flex items-center gap-1 text-sm font-medium underline-offset-4 transition-all duration-300 group-hover:underline">
            //             {ctaText}
            //             <ArrowRight className="h-4 w-4" />
            //           </div>
            //         )}
            //       </div>
            //     </div>
            //   </Wrapper>
            // )
          })}
        </div>
      </AppContainer>
    </AppSection>
  )
}

export default ServicePhilosophy
