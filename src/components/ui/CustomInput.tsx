import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/cn'
import { useField } from 'formik'

interface CustomInputProps {
  label: string
  name: string
  required?: boolean
  type?: string
  disabled?: boolean
}

function CustomInput({
  label,
  name,
  disabled = false,
  type = 'text',
  required = false,
}: CustomInputProps) {
  const [field, meta] = useField(name)

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 ml-1 text-sm font-medium">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>

      <input
        {...field}
        type={type}
        id={name}
        required={required}
        disabled={disabled}
        className={cn(
          'focus:border-primary focus:ring-primary border-border block w-full appearance-none rounded-lg border bg-white p-2.5 transition-colors duration-200 focus:outline-hidden sm:text-sm',
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

export default CustomInput
