import { FormInput } from "src/components/FormInput";
import { QueryTypeSelect } from "src/components/QueryTypeSelect";
import { FormTextarea } from "src/components/FormTextarea";
import { Checkbox } from "src/components/Checkbox";
import { SubmitButton } from "src/components/SubmitButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import IconSuccessCheck from "src/assets/icon-success-check.svg?react";
import { useState } from "react";

export function FormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      {isSubmitted && (
        <div className="fixed top-0 m-6 flex w-[327px] flex-col gap-y-2 rounded-xl bg-grey900 p-6 md:w-[450px]">
          <div className="body-m-bold flex items-center gap-x-2 text-white">
            <IconSuccessCheck className="m-[2px]" />
            Message Sent!
          </div>
          <p className="body-s text-green200">
            Thanks for completing the form. We’ll be in touch soon!
          </p>
        </div>
      )}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          acceptedTerms: false,
          queryType: "",
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
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf(
              [true],
              "To submit this form, please consent to being contacted",
            ),
          message: Yup.string().required("This field is required"),
          queryType: Yup.string().required(
            "Please select a query type",
          ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setIsSubmitted(true);
            resetForm();
            setSubmitting(false);
            setTimeout(() => setIsSubmitted(false), 3000);
          }, 400);
        }}
      >
        <Form className="mx-4 my-8 w-full min-w-[343px] rounded-2xl bg-white p-6 text-grey900 md:w-[690px] md:p-10 1440:w-[736px]">
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

            <QueryTypeSelect name="queryType" />
            <FormTextarea
              name="message"
              as="textarea"
              className="form-textarea"
            />
          </div>
          <Checkbox name="acceptedTerms" />
          <SubmitButton />
        </Form>
      </Formik>
    </>
  );
}
