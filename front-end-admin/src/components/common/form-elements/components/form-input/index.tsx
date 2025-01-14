import { useContext, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { formInlineContext } from '../form-inline'
import { inputGroupContext } from '../input-group'

interface FormInputProps extends React.ComponentPropsWithoutRef<'input'> {
  formInputSize?: 'sm' | 'lg'
  rounded?: boolean
}

type FormInputRef = React.ComponentPropsWithRef<'input'>['ref']

const FormInput = forwardRef((props: FormInputProps, ref: FormInputRef) => {
  const formInline = useContext(formInlineContext)
  const inputGroup = useContext(inputGroupContext)
  const { formInputSize, rounded, ...computedProps } = props

  return (
    <input
      {...computedProps}
      ref={ref}
      className={twMerge([
        'rounded-[7px] bg-white disabled:cursor-not-allowed disabled:bg-slate-100 dark:disabled:border-transparent dark:disabled:bg-darkmode-800/50',
        '[&[readonly]]:cursor-not-allowed [&[readonly]]:bg-slate-100 [&[readonly]]:dark:border-transparent [&[readonly]]:dark:bg-darkmode-800/50',
        'w-full rounded-md border-[#C7C7C7] text-sm shadow-sm transition duration-200 ease-in-out placeholder:text-[#B2BEB5] focus:border-primary focus:border-opacity-40 focus:ring-4 focus:ring-primary focus:ring-opacity-20 dark:border-transparent dark:bg-darkmode-800 dark:placeholder:text-slate-500/80 dark:focus:ring-slate-700 dark:focus:ring-opacity-50',
        props.formInputSize === 'sm' ? 'px-2 py-1.5 text-xs' : '',
        props.formInputSize === 'lg' ? 'px-4 py-1.5 text-lg' : '',
        props.rounded ? 'rounded-full' : '',
        formInline ? 'flex-1' : '',
        inputGroup
          ? 'z-10 rounded-none first:rounded-l last:rounded-r [&:not(:first-child)]:border-l-transparent'
          : '',
        props.className,
      ])}
    />
  )
})

FormInput.displayName = 'FormInput'

export default FormInput

FormInput.defaultProps = {
  formInputSize: undefined,
  rounded: false,
}
