import { useField } from 'formik'
import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/cn'

interface CustomTextareaProps {
  label: string
  name: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
}

function CustomTextarea({
  label,
  name,
  disabled = false,
  required = false,
  placeholder,
}: CustomTextareaProps) {
  const [field, meta] = useField(name)

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 ml-1 text-sm font-medium">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>

      <textarea
        {...field}
        id={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={cn(
          'placeholder:text-muted focus:border-primary focus:ring-primary border-border block min-h-40 w-full appearance-none rounded-lg border bg-white p-2 transition-colors duration-200 placeholder:text-sm focus:outline-hidden sm:text-sm',
          meta.touched &&
            meta.error &&
            'border-destructive focus:border-destructive focus:ring-destructive',
          disabled && 'bg-muted text-muted cursor-not-allowed opacity-70',
        )}
      />

      {meta.touched && meta.error && (
        <Text size="xs" color="destructive" className="mt-1 ml-1">
          {meta.error}
        </Text>
      )}
    </div>
  )
}

export default CustomTextarea
