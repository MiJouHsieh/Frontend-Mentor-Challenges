import IconCheckboxCheck from "src/assets/icon-checkbox-check.svg?react";
import { useField } from "formik";

export function Checkbox({ ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="my-10 flex flex-col items-start gap-y-2">
      <div className=" flex items-center">
        <input
          type="checkbox"
          id="custom-checkbox"
          className="checkboxIconStyle peer relative shrink-0 appearance-none rounded-sm border-2 border-grey500 bg-white checked:border-transparent"
          {...field}
          {...props}
          checked={field.checked}
        />

        <label
          htmlFor="custom-checkbox"
          className="checkbox-input body-s mx-4 flex w-full cursor-pointer items-center"
        >
          I consent to being contacted by the team *
        </label>
        <IconCheckboxCheck className="checkboxIconStyle pointer-events-none absolute hidden peer-checked:block" />
      </div>
      {meta.touched && meta.error ? (
        <div className="error body-s text-red">{meta.error}</div>
      ) : null}
    </div>
  );
}