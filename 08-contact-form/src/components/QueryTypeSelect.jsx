// import IconRadioSelected from "src/assets/icon-radio-selected.svg?react";

export function QueryTypeSelect() {
  return (
    <div className="flex flex-col space-y-4">
      <label>Query Type</label>
      <div className="space-y-4 md:flex md:justify-between md:gap-x-4 md:space-y-0">
        <div className="h-[51px] space-x-3 rounded-lg border border-grey500 px-4 py-3 md:flex-1">
          <input
            type="checkbox"
            id="general-enquiry"
            name="general-enquiry"
          />
          {/* <IconRadioSelected /> */}
          <label htmlFor="general-enquiry" className="body-m">
            Generl Enquiry
          </label>
        </div>
        <div className="h-[51px] space-x-3 rounded-lg border border-grey500 px-4 py-3 md:flex-1">
          <input
            type="checkbox"
            id="support-request"
            name="support-request"
          />
          {/* <IconRadioSelected /> */}
          <label htmlFor="support-request" className="body-m">
            Support Request
          </label>
        </div>
      </div>
    </div>
  );
}