import IconCheckboxCheck from "src/assets/icon-checkbox-check.svg?react";

export function Checkbox() {
  return (
    <div className="my-10 flex items-center">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="checkboxIconStyle peer relative shrink-0 appearance-none rounded-sm border-2 border-grey500 bg-white checked:border-0"
      />

      <label
        htmlFor="custom-checkbox"
        className="body-s mx-4 flex w-full cursor-pointer items-center"
      >
        I consent to being contacted by the team *
      </label>
      <IconCheckboxCheck className="checkboxIconStyle absolute hidden peer-checked:block" />
    </div>
  );
}