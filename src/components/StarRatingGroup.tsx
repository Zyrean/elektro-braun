import { cn } from '@/lib/cn'
import { Star } from 'lucide-react'

interface StarRatingGroupProps {
  count?: number
  className?: string
}

function StarRatingGroup({ count = 5, className }: StarRatingGroupProps) {
  return (
    <div className="flex gap-1 text-amber-400">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className={cn('size-4 fill-current', className)} />
      ))}
    </div>
  )
}

export default StarRatingGroup
