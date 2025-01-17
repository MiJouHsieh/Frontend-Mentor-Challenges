export function BookingSection() {
  return (
    <div className="w-full flex flex-col items-center gap-6 rounded-[10px] bg-black px-6 py-12 text-lightCream md:gap-[26px] md:px-[75px] md:py-[60px] 1440:flex-row 1440:p-[80px] 1440:justify-between mb-10 md:mb-14">
      <div className="flex flex-col items-center gap-6 outline md:gap-[26px] 1440:w-[57%]">
        <h1 className="text-[26px] font-bold">
          Book a call with me
        </h1>
        <p className="text-center text-[18px] font-medium leading-7 text-lightCream">
          I’d love to have a chat to see how I can help you. The
          best first step is for us to discuss your project during
          a free consultation. Then we can move forward from there.
        </p>
      </div>
      <button className="mobile-btn md:md-btn rounded-full bg-lightRed hover:bg-summerYellow">
        Free Consultation
      </button>
    </div>
  );
}
