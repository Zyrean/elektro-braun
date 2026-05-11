import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { LucideIcon } from 'lucide-react'

interface InfoCardProps {
  icon: LucideIcon
  label: string
  value: string
}

export function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="border-border rounded-2xl border bg-white p-5">
      <div className="text-muted-foreground flex items-center gap-2">
        <Icon size={16} className="text-primary" />

        <Text size="sm">{label}</Text>
      </div>

      <Heading as="h3" size="sm" className="mt-3">
        {value}
      </Heading>
    </div>
  )
}
