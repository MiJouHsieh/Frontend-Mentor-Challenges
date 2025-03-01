import { FormInput } from "src/components/FormInput";
import { QueryTypeSelect } from "src/components/QueryTypeSelect";
import { FormTextarea } from "src/components/FormTextarea";
import { Checkbox } from "src/components/Checkbox";
import { SubmitButton } from "src/components/SubmitButton";
import { Formik, Form } from "formik";
import * as Yup from 'yup'

export function FormPage() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("This field is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("This field is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter a valid email address"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form
          className="w-full min-w-[343px] rounded-2xl bg-white p-6 text-grey900 outline md:w-[690px] md:p-10 1440:w-[736px]"
        >
          <h1 className="title mb-8">Contact Us</h1>
          <div className="flex flex-col space-y-6">
            <div className="space-y-6 md:flex md:justify-between md:gap-x-4 md:space-y-0">
              <FormInput
                label="First Name"
                name="firstName"
                type="text"
              />

              <FormInput
                label="Last Name"
                name="lastName"
                type="text"
              />
            </div>
            <FormInput
              label="Email Address"
              name="email"
              type="email"
            />

            <QueryTypeSelect />
            <FormTextarea />
          </div>
          <Checkbox />
          <SubmitButton />
        </Form>
      </Formik>
    </>
  );
}
