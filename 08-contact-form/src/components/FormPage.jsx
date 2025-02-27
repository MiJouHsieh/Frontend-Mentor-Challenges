import { FormInput } from "src/components/FormInput";
import { QueryTypeSelect } from "src/components/QueryTypeSelect";
import { FormTextarea } from "src/components/FormTextarea";
import { Checkbox } from "src/components/Checkbox";
import { SubmitButton } from "src/components/SubmitButton";

export function FormPage() {
  return (
    <div className="w-full min-w-[343px] rounded-2xl bg-white p-6 text-grey900 outline md:w-[690px] md:p-10 1440:w-[736px]">
      <h1 className="title mb-8">Contact Us</h1>
      <div className="flex flex-col space-y-6">
        <div className="space-y-6 md:flex md:justify-between md:gap-x-4 md:space-y-0">
          <FormInput label="First Name" />
          <FormInput label="Last Name" />
        </div>
        <FormInput label="Email Address" />
        <QueryTypeSelect />
        <FormTextarea />
      </div>
      <Checkbox />
      <SubmitButton />
    </div>
  );
}