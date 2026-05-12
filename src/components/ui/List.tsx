// import { Heading } from '@/components/ui/Heading'

// interface ListComponentProps {
//   title: string
//   items?: string[]
// }

// export function ListComponent({ items, title }: ListComponentProps) {
//   return (
//     <div>
//       <Heading as="h3" className="mb-3">
//         {title}
//       </Heading>

//       <ul className="list-disc space-y-2 pl-5">
//         {items?.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import { Check } from 'lucide-react'

import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

interface ListComponentProps {
  title: string
  variant?: 'check' | 'steps'
  items?: string[]
}

export function ListComponent({ items, title, variant }: ListComponentProps) {
  return (
    <div className="space-y-4">
      <Heading as="h3">{title}</Heading>

      <ul className="space-y-4">
        {items?.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {variant === 'check' ? (
              <Check className="text-primary mt-1 h-4 w-4 shrink-0" />
            ) : (
              <div className="text-primary pt-1px flex items-center justify-center text-sm font-semibold tabular-nums">
                0{index + 1}
              </div>
            )}

            <Text size="sm">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  )
}
