export function ContactSection() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-full flex-col items-center gap-y-[50px] pt-[60px] md:max-w-[445px] md:gap-y-12 1440:max-w-[1110px] 1440:flex-row 1440:items-start 1440:justify-between 1440:gap-y-0 1440:pt-[84px]">
        <div className="flex flex-col items-center gap-y-5 1440:w-[445px] 1440:items-start 1440:gap-y-9">
          <h1 className="section-title md-title 1440:title-xl">
            Contact
          </h1>
          <p className="text-size16 md:body-medium text-center font-medium text-gray 1440:text-start">
            I would love to hear about your project and how I could
            help. Please fill in the form, and I’ll get back to you
            as soon as possible.
          </p>
        </div>

        <form
          action=""
          className="relative flex w-full flex-col justify-between gap-y-8 1440:w-[445px]"
        >
          <div className="relative h-[43px] border-b border-b-white">
            <label
              className="text-size16 absolute bottom-4 left-6 font-medium tracking-[-0.22px] text-white text-opacity-50 1440:left-4"
              htmlFor=""
            >
              NAME
            </label>
            <input
              className="h-full w-full bg-transparent bg-opacity-20 pb-4 pl-6 1440:pl-4"
              type="text"
            />
          </div>

          <div className="relative h-[43px] border-b border-b-white">
            <label
              className="text-size16 absolute bottom-4 left-6 font-medium tracking-[-0.22px] text-white text-opacity-50 1440:left-4"
              htmlFor=""
            >
              EMAIL
            </label>
            <input
              className="h-full w-full bg-transparent bg-opacity-20 pb-4 pl-6 1440:pl-4"
              type="text"
            />
          </div>

          <div className="relative h-[107px] border-b border-b-white">
            <label
              className="text-size16 absolute bottom-20 left-6 font-medium tracking-[-0.22px] text-white text-opacity-50 1440:left-4"
              htmlFor=""
            >
              MESSAGE
            </label>
            <input
              className="h-full w-full bg-transparent bg-opacity-20 pb-20 pl-6 1440:pl-4"
              type="text"
            />
          </div>

          <button
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
