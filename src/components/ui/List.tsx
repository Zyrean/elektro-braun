import { Heading } from '@/components/ui/Heading'

interface ListComponentProps {
  title: string
  items?: string[]
}

export function ListComponent({ items, title }: ListComponentProps) {
  return (
    <div>
      <Heading as="h3" className="mb-3">
        {title}
      </Heading>

      <ul className="list-disc space-y-2 pl-5">
        {items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
