import IconRadioSelected from "src/assets/icon-radio-selected.svg?react";
import { useField, useFormikContext } from "formik";

export function QueryTypeSelect({ name }) {
  const { values, setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  return (
    <div className="flex flex-col space-y-4">
      <label>
        Query Type
        <span className="ml-2 text-green600">*</span>
      </label>
      <div className="space-y-4 md:flex md:justify-between md:gap-x-4 md:space-y-0">
        <div
          className={`${
            values[field.name] === "general-enquiry"
              ? "border-green600 bg-green200"
              : "border-grey500"
          } relative flex h-[51px] cursor-pointer items-center space-x-3 rounded-lg border px-6 py-3 md:flex-1`}
        >
          <input
            checked={values[field.name] === "general-enquiry"}
            type="radio"
            id="general-enquiry"
            name="query-type"
            value="general-enquiry"
            className="radioIconStyle peer"
            onChange={() =>
              setFieldValue(field.name, "general-enquiry")
            }
          />
          <IconRadioSelected className="pointer-events-none absolute left-3 hidden peer-checked:block" />
          <label
            htmlFor="general-enquiry"
            className="body-m cursor-pointer"
          >
            Generl Enquiry
          </label>
        </div>
        <div
          className={` ${values[field.name] === "support-request" ? "border-green600 bg-green200" : "border-grey500"} relative flex h-[51px] cursor-pointer items-center space-x-3 rounded-lg border px-6 py-3 md:flex-1`}
        >
          <input
            checked={values[field.name] === "support-request"}
            type="radio"
            id="support-request"
            name="query-type"
            value="support-request"
            className="radioIconStyle peer"
            onChange={() =>
              setFieldValue(field.name, "support-request")
            }
          />
          <IconRadioSelected className="pointer-events-none absolute left-3 hidden peer-checked:block" />
          <label
            htmlFor="support-request"
            className="body-m cursor-pointer"
          >
            Support Request
          </label>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <span className="error body-s text-red">{meta.error}</span>
      ) : null}
    </div>
  );
}
