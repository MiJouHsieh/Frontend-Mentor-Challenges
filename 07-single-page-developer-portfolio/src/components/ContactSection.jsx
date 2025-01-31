import { CiCircleAlert } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 表單驗證規則
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Sorry, invalid format here")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const inputValueName = watch("name", "");

  const inputValueEmail = watch("email", "");
  const inputValueMessage = watch("message", "");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-full flex-col items-center gap-y-[50px] pt-[60px] md:max-w-[445px] md:gap-y-12 1440:max-w-[1110px] 1440:flex-row 1440:items-start 1440:justify-between 1440:gap-y-0 1440:pt-[84px]">
        <div className="flex flex-col items-center gap-y-5 1440:w-[445px] 1440:items-start 1440:gap-y-9">
          <h1 className="section-title md-title 1440:title-xl">
            Contact
          </h1>
          <p className="md:body-medium w-full text-center text-base font-medium leading-[26px] tracking-[0px] text-gray 1440:text-start">
            I would love to hear about your project and how I could
            help. Please fill in the form, and I’ll get back to you
            as soon as possible.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="relative flex w-full flex-col justify-between gap-y-8 1440:w-[445px]"
        >
          <div className="relative h-[43px] border-b border-b-white">
            <label
              className={`text-size16 absolute bottom-4 left-6 font-medium tracking-[-0.22px] text-white text-opacity-50 1440:left-4 ${inputValueName ? "opacity-0" : "opacity-100"}`}
              htmlFor="name"
            >
              NAME
            </label>
            {errors.name && (
              <CiCircleAlert className="absolute right-0 top-0 h-6 w-6 text-red" />
            )}
            <input
              className={`h-full w-full border-b bg-transparent pb-4 pl-6 text-white focus:border-green focus:outline-none 1440:pl-4 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              style={{
                backgroundColor: "transparent",
                WebkitBoxShadow:
                  "0 0 0px 1000px transparent inset",
                WebkitTextFillColor: "#ffffff",
              }}
              type="text"
              name="name"
              {...register("name")}
              onFocus={(e) =>
                (e.target.style.WebkitTextFillColor = "#ffffff")
              }
              onBlur={(e) =>
                (e.target.style.WebkitTextFillColor = "#ffffff")
              }
            />
            {errors.name && (
              <p className="w-full text-end text-red">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="relative h-[43px] border-b border-b-white">
            <label
              className={`text-size16 absolute bottom-4 left-6 font-medium tracking-[-0.22px] text-white text-opacity-50 1440:left-4 ${inputValueEmail ? "opacity-0" : "opacity-100"}`}
              htmlFor="email"
            >
              EMAIL
            </label>
            {errors.email && (
              <CiCircleAlert className="absolute right-0 top-0 h-6 w-6 text-red" />
            )}
            <input
              className={`h-full w-full border-b bg-transparent pb-4 pl-6 text-white focus:border-green focus:outline-none 1440:pl-4 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email")}
              type="email"
              name="email"
              style={{
                backgroundColor: "transparent",
                WebkitBoxShadow:
                  "0 0 0px 1000px transparent inset",
                WebkitTextFillColor: "#ffffff",
              }}
              onFocus={(e) =>
                (e.target.style.WebkitTextFillColor = "#ffffff")
              }
              onBlur={(e) =>
                (e.target.style.WebkitTextFillColor = "#ffffff")
              }
            />
            {errors.email && (
              <p className="w-full text-end text-red">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative h-[107px] border-b border-b-white">
            <label
              className={`text-size16 absolute bottom-20 left-6 font-medium tracking-[-0.22px] text-white text-opacity-50 1440:left-4 ${inputValueMessage ? "opacity-0" : "opacity-100"}`}
              htmlFor="message"
            >
              MESSAGE
            </label>
            {errors.message && (
              <CiCircleAlert className="absolute right-0 top-0 h-6 w-6 text-red" />
            )}
            <textarea
              className="h-full max-h-[117px] w-full border-b bg-transparent pb-20 pl-6 focus:border-green focus:outline-none 1440:pl-4"
              type="text"
              name="message"
              rows="4"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="w-full text-end text-red">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btnText-size16 borderStyle w-[144px] self-end pb-[10px]"
            aria-label="contact author"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}
