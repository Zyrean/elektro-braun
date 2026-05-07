import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/cn'
import { useField } from 'formik'
import { ChevronDown } from 'lucide-react'

interface CustomSelectProps {
  label: string
  name: string
  options: string[]
  required?: boolean
  disabled?: boolean
  placeholder?: string
}

function CustomSelect({
  label,
  name,
  options,
  disabled = false,
  required = false,
  placeholder = 'Bitte auswählen',
}: CustomSelectProps) {
  const [field, meta] = useField(name)

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 ml-1 text-sm font-medium">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>

      <div className="relative">
        <select
          {...field}
          id={name}
          required={required}
          disabled={disabled}
          className={cn(
            'border-border focus:border-primary block h-12 w-full appearance-none rounded-xl border bg-white px-4 pr-10 text-sm transition-colors duration-200 focus:ring-0 focus:outline-none',
            meta.touched &&
              meta.error &&
              'border-destructive focus:border-destructive focus:ring-destructive',
            disabled && 'bg-muted text-muted cursor-not-allowed opacity-70',
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown className="text-muted pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
      </div>

      {meta.touched && meta.error && (
        <Text size="xs" color="destructive" className="mt-1 ml-1">
          {meta.error}
        </Text>
      )}
    </div>
  )
}

export default CustomSelect
