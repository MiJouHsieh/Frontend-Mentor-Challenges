import {  useField } from "formik";

export function FormInput({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`text-input body-m ${meta.touched && meta.error ? 'border-red':"" } h-[51px] rounded-lg border border-grey500 px-6 py-3`}
      />
      {meta.touched && meta.error ? (
        <span className="error text-red">{meta.error}</span>
      ) : null}
    </div>
  );
}
