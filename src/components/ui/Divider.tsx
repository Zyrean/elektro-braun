import { cn } from '@/lib/cn'

interface DividerProps {
  align?: 'left' | 'center'
  width?: number // px-based
  className?: string
}

function Divider({ align = 'center', width = 40, className }: DividerProps) {
  return (
    <div
      className={cn(
        'flex',
        align === 'center' && 'justify-center',
        align === 'left' && 'justify-start',
        className,
      )}
    >
      <div className="bg-border h-px" style={{ width: `${width}px` }} />
    </div>
  )
}

export default Divider
