import IconRadioSelected from "src/assets/icon-radio-selected.svg?react";
import { useState } from "react";

export function QueryTypeSelect() {
  const [radioChecked, setRadioChecked] = useState("");

  return (
    <div className="flex flex-col space-y-4">
      <label>Query Type</label>
      <div className="space-y-4 md:flex md:justify-between md:gap-x-4 md:space-y-0">
        <div
          className={`${
            radioChecked === "general-enquiry"
              ? "border-green600 bg-green200"
              : "border-grey500"
          } relative flex h-[51px] items-center space-x-3 rounded-lg border px-6 py-3 md:flex-1`}
        >
          <input
            checked={radioChecked === "general-enquiry"}
            type="radio"
            id="general-enquiry"
            name="query-type"
            value="general-enquiry"
            className="radioIconStyle peer"
            onChange={() => setRadioChecked("general-enquiry")}
          />
          <IconRadioSelected className="pointer-events-none absolute left-3 hidden peer-checked:block" />
          <label htmlFor="general-enquiry" className="body-m">
            Generl Enquiry
          </label>
        </div>
        <div
          className={` ${radioChecked === "support-request" ? "border-green600 bg-green200" : "border-grey500"} relative flex h-[51px] items-center space-x-3 rounded-lg border px-6 py-3 md:flex-1`}
        >
          <input
            checked={radioChecked === "support-request"}
            type="radio"
            id="support-request"
            name="query-type"
            value="support-request"
            className="radioIconStyle peer"
            onChange={() => setRadioChecked("support-request")}
          />
          <IconRadioSelected className="pointer-events-none absolute left-3 hidden peer-checked:block" />
          <label htmlFor="support-request" className="body-m">
            Support Request
          </label>
        </div>
      </div>
    </div>
  );
}
