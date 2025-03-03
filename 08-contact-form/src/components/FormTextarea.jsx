import { useField } from "formik";

export function FormTextarea({ ...props }) {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={field.name}>Message</label>
      <textarea
        {...field}
        {...props}
        name={field.name}
        id={field.name}
        className={`body-m form-textarea h-[240px] space-x-3 rounded-lg border border-grey500 px-6 py-3 md:h-[105px] ${error ? "border-red" : ""}`}
      ></textarea>
      {error ? (
        <span className="error text-red body-s">{meta.error}</span>
      ) : null}
    </div>
  );
}