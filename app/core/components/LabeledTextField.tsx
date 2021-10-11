import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ name, label, outerProps, fieldProps, labelProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse:
        props.type === "number"
          ? (Number as any)
          : // Converting `""` to `null` ensures empty values will be set to null in the DB
            (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div className="mb-4 flex flex-col items-center text-base" {...outerProps}>
        <label className="flex flex-col items-start" {...labelProps}>
          <div className="font-bold">{label}</div>
          <input
            className="text-base py-1 px-2 rounded-sm border border-[#6700eb] appearance-none mt-2"
            {...input}
            disabled={submitting}
            {...props}
            ref={ref}
          />
        </label>
        {touched && normalizedError && (
          <div role="alert" className="text-red-500">
            {normalizedError}
          </div>
        )}
      </div>
    )
  }
)

export default LabeledTextField
